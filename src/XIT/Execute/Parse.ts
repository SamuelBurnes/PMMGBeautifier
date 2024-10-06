import {
	calculateBurn,
	findCorrespondingPlanet
} from "../../util";
import {ExchangeTickersReverse, NonProductionBuildings} from "../../GameProperties";
import {addMessage} from "./Execute";

// Turn stored action package (resupply base for 30 days) to series of actionable actions (buy 1000 RAT, then 1000 DW, etc)
// Preview flag set to true will allow non-configured actions to be displayed
export function parseActionPackage(rawActionPackage, packageConfig, userInfo, messageBox, preview?)
{
	const actionPackage = [] as any;
	actionPackage.valid = false;
	
	// If invalid return an empty action package and throw error
	if(!rawActionPackage.global || !rawActionPackage.actions || !rawActionPackage.groups)
	{
		addMessage(messageBox, "Corrupted action package structure", "ERROR");
		return actionPackage;
	}
	var error = false;
	
	// Generate arrays of CX inventories so nothing is double counted later on
	const CXInvs = {};
	["AI1", "CI1", "CI2", "IC1", "NC1", "NC2"].forEach(ticker => {
		CXInvs[ticker] = {};
		const inv = findCorrespondingPlanet(ExchangeTickersReverse[ticker], userInfo["PMMG-User-Info"]["storage"], false);
		
		if(inv)
		{
			inv.items.forEach(mat => {
				CXInvs[ticker][mat.MaterialTicker] = mat.Amount;
			});
		}
	});
	
	rawActionPackage.actions.forEach((action, actionIndex) => {
		if(action.type == "CX Buy")
		{
			if(!action.group)
			{
				addMessage(messageBox, "Missing material group on CX buy", "ERROR");
				return actionPackage;
			}
			
			const groupNames = rawActionPackage.groups.filter(obj => obj.name !== undefined && obj.name !== '').map(obj => obj.name);
			const groupIndexes = rawActionPackage.groups.reduce((acc, obj, index) => { if(obj.name) acc[obj.name] = index; return acc; }, {});
			
			if(!groupNames.includes(action.group))
			{
				addMessage(messageBox, "Unrecognized material group on CX buy", "ERROR");
				return actionPackage;
			}
			if(!action.exchange)
			{
				addMessage(messageBox, "Missing exchange on CX buy", "ERROR");
				return actionPackage;
			}
			
			const group = rawActionPackage.groups[groupIndexes[action.group]];
			const errorFlag = [false];
			const parsedGroup = parseGroup(group, messageBox, userInfo, errorFlag);	// Parse materials needed. Object with keys equal to material tickers and values equal to number of materials
			
			// Take out materials in CX inventory if requested
			if(action.useCXInv)
			{

				Object.keys(parsedGroup).forEach(mat => {
					Object.keys(CXInvs[action.exchange]).forEach(CXMat => {
						if(CXMat == mat)
						{
							const used = Math.min(parsedGroup[mat], CXInvs[action.exchange][CXMat]);	// Amount of material used (minimum of needed and had on hand)
							parsedGroup[mat] -= used;
							CXInvs[action.exchange][CXMat] -= used;
							if(CXInvs[action.exchange][mat] <= 0)	// Remove material from CX Inv is already allocated
							{
								delete CXInvs[action.exchange][CXMat];
							}
						}
					});
					if(parsedGroup[mat] <= 0)	// Remove material from list if you already have enough on the CX
					{
						delete parsedGroup[mat];
					}
					
				});
			}
			
			
			// Now turn into buying commands
			error = error || errorFlag[0];
			Object.keys(parsedGroup).forEach(mat => {
				const cxTicker = mat + "." + action.exchange;
				var amount = parsedGroup[mat];
				
				if(userInfo["PMMG-User-Info"]["cxob"][cxTicker] && Date.now() - userInfo["PMMG-User-Info"]["cxob"][cxTicker].timestamp < 900000)	// Check for existance and timestamp of data
				{
					if(userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders.length == 0)	// No orders
					{
						if(action.buyPartial)
						{
							return;	// Just ignore this one if we're fine with buying partial
						}
						else
						{
							addMessage(messageBox, "No orders on " + cxTicker, "ERROR");
							error = true;
							return;
						}
					}
					
					var remaining = parsedGroup[mat];
					var price;
					// Iterate through the orders to find the price to set to to buy it all
					for(var i = 0; i < userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders.length; i++)
					{
						if((!action.priceLimits || !action.priceLimits[mat] || action.priceLimits[mat] > userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].limit.amount) && userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].amount > remaining)	// This order will be the filling one
						{
							price = userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].limit.amount;
							break;
						}
						else
						{
							if((!action.priceLimits || !action.priceLimits[mat] || action.priceLimits[mat] > userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].limit.amount) && !userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].amount)	// Only MMs will not have an amount attached
							{
								price = userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].limit.amount;
								break;
							}
							remaining -= userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[i].amount;	// Otherwise subtract the amount of that order from the amount remaining and continue
						}
					}
					
					// Check against price limit
					if(action.priceLimits && action.priceLimits[mat] && price > action.priceLimits[mat] && !action.buyPartial)
					{
						addMessage(messageBox, "Price above limit on " + cxTicker, "ERROR");
						error = true;
						return;
					}
					if(action.priceLimits && action.priceLimits[mat] && isNaN(action.priceLimits[mat]))
					{
						addMessage(messageBox, "Non-numerical price limit on " + cxTicker, "ERROR");
						error = true;
						return;
					}
					
					if(!price && !action.buyPartial)	// Not enough to buy it all
					{
						addMessage(messageBox, "Not enough materials on " + cxTicker, "ERROR");
						error = true;
						return;
					}
					else if(!price && (!action.priceLimits || !action.priceLimits[mat]) && userInfo["PMMG-User-Info"]["cxob"][cxTicker].supply > 0)	// If fine with buying partial, buy the entire stock
					{
						price = userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders[userInfo["PMMG-User-Info"]["cxob"][cxTicker].sellingOrders.length - 1].limit.amount;
						amount = userInfo["PMMG-User-Info"]["cxob"][cxTicker].supply;
					}
					else if(!price && action.priceLimits && action.priceLimits[mat])
					{
						return;	// If there is no price, but buying partial, don't care and exit
					}
					
					// Now create action item
					const actionItem = {
						"type": "CXBuy",
						"buffer": "CXPO " + cxTicker,
						"parameters": {
							"amount": amount,
							"priceLimit": price
						}
					};
					actionPackage.push(actionItem);
				}
				else
				{
					addMessage(messageBox, "Stale/missing data on " + cxTicker, "ERROR");
					error = true;
				}
			});
		}
		else if(action.type == "MTRA")
		{
			if(!action.group)
			{
				addMessage(messageBox, "Missing material group on CX buy", "ERROR");
				return actionPackage;
			}
			
			const groupNames = rawActionPackage.groups.filter(obj => obj.name !== undefined && obj.name !== '').map(obj => obj.name);
			const groupIndexes = rawActionPackage.groups.reduce((acc, obj, index) => { if(obj.name) acc[obj.name] = index; return acc; }, {});
			
			if(!groupNames.includes(action.group))
			{
				addMessage(messageBox, "Unrecognized material group on MTRA", "ERROR");
				return actionPackage;
			}
			if(!action.origin)
			{
				addMessage(messageBox, "Missing origin on MTRA", "ERROR");
				return actionPackage;
			}
			if(!action.dest)
			{
				addMessage(messageBox, "Missing dest on MTRA", "ERROR");
				return actionPackage;
			}
			
			// Check configuration
			if(!preview && action.origin == "Configure on Execution" && (!packageConfig.actions[actionIndex] || !packageConfig.actions[actionIndex].origin))
			{
				addMessage(messageBox, "Missing origin configuration on MTRA", "ERROR");
				return actionPackage;
			}
			if(!preview && action.dest == "Configure on Execution" && (!packageConfig.actions[actionIndex] || !packageConfig.actions[actionIndex].dest))
			{
				addMessage(messageBox, "Missing destination configuration on MTRA", "ERROR");
				return actionPackage;
			}
			
			// Set configuration
			const origin = action.origin == "Configure on Execution" && packageConfig.actions[actionIndex] && packageConfig.actions[actionIndex].origin ? packageConfig.actions[actionIndex].origin : action.origin;
			const dest = action.dest == "Configure on Execution" && packageConfig.actions[actionIndex] && packageConfig.actions[actionIndex].dest ? packageConfig.actions[actionIndex].dest : action.dest;
			
			
			const group = rawActionPackage.groups[groupIndexes[action.group]];
			const errorFlag = [false];
			const parsedGroup = parseGroup(group, messageBox, userInfo, errorFlag);	// Parse materials needed. Object with keys equal to material tickers and values equal to number of materials
			
			Object.keys(parsedGroup).forEach(mat => {
				// MAT change action action
				const changeAction = {
					"type": "mtraMatSelect",
					"buffer": "MTRA",
					"parameters": {
						"origin": origin,
						"dest": dest,
						"ticker": mat,
						"amount": parsedGroup[mat]
					}
				};
				// Now create action item
				const actionItem = {
					"type": "MTRA",
					"buffer": "MTRA",
					"parameters": {
						"origin": origin,
						"dest": dest,
						"ticker": mat,
						"amount": parsedGroup[mat]
					}
				};
				actionPackage.push(changeAction);
				actionPackage.push(actionItem);
			});
		}
		else
		{
			addMessage(messageBox, "Unrecognized action type", "ERROR");
			error = true;
		}
	});
	
	actionPackage.valid = !error;
	return actionPackage;
}

// Parse a material group into a list of materials
export function parseGroup(group, messageBox, userInfo, errorFlag)
{
	var parsedGroup = {};
	if(group.type == "Resupply")
	{
		// Interpret burn to get number of materials
		if(!group.planet)
		{
			addMessage(messageBox, "Missing resupply planet", "ERROR");
			errorFlag[0] = true;
			return parsedGroup;
		}
		if(!group.days)
		{
			addMessage(messageBox, "Missing resupply days", "ERROR");
			errorFlag[0] = true;
			return parsedGroup;
		}
		
		// Array of tickers to exclude
		const exclusions = group.exclusions || [];
		
		const planetProduction = group.consumablesOnly ? {} : findCorrespondingPlanet(group.planet, userInfo["PMMG-User-Info"]["production"]);
		const planetWorkforce = findCorrespondingPlanet(group.planet, userInfo["PMMG-User-Info"]["workforce"]);
		const planetInv = findCorrespondingPlanet(group.planet, userInfo["PMMG-User-Info"]["storage"], true);
		
		if(planetProduction && planetWorkforce && planetInv)
		{
			const planetBurn = calculateBurn(planetProduction, planetWorkforce, planetInv);	// The planet burn data
			
			Object.keys(planetBurn).forEach(mat => {
				if(planetBurn[mat].DailyAmount < 0)	// Consuming not producing
				{
					var amount = Math.ceil(-planetBurn[mat].DailyAmount * group.days);	// Calculate amount
					if(group.useBaseInv)	// Take out base inventory if we're doing that
					{
						amount -= planetBurn[mat].Inventory;
					}
					
					if(amount > 0)	// If we still need that material...
					{
						// Check material Exclusions
						if(!exclusions.includes(mat))
						{
							parsedGroup[mat] = amount;	// Assign it to the parsed material group
						}
					}
				}
			});
		}
		else
		{
			addMessage(messageBox, "Missing burn data", "ERROR");
			errorFlag[0] = true;
			return parsedGroup;
		}
	}
	else if(group.type == "Repair")
	{
		if(!group.planet)
		{
			addMessage(messageBox, "Missing resupply planet", "ERROR");
			errorFlag[0] = true;
			return parsedGroup;
		}
		const threshold = isNaN(parseFloat(group.days)) ? 0 : parseFloat(group.days);	// The threshold to start repairing buildings [days]
		const advanceDays = isNaN(parseFloat(group.advanceDays)) ? 0 : parseFloat(group.advanceDays);	// The number of days forward looking
		
		const planetSite = findCorrespondingPlanet(group.planet, userInfo["PMMG-User-Info"]["sites"], true);
		
		if(planetSite && planetSite.buildings)
		{
			planetSite.buildings.forEach(building => {
				if(NonProductionBuildings.includes(building["buildingTicker"])){return;}
				
				const date = (((new Date()).getTime() - building.lastRepair) / 86400000);
				
				if((date + advanceDays) < threshold){return;}	// Parse out too new of buildings
				
				// Calculate total building cost
				const buildingMaterials = {};
				building.reclaimableMaterials.forEach(mat => {
					const amount = mat.amount;
					const ticker = mat.material.ticker;
					if(buildingMaterials[ticker])
					{
						buildingMaterials[ticker] += amount;
					}
					else
					{
						buildingMaterials[ticker] = amount;
					}
				});
				building.repairMaterials.forEach(mat => {
					const amount = mat.amount;
					const ticker = mat.material.ticker;
					if(buildingMaterials[ticker])
					{
						buildingMaterials[ticker] += amount;
					}
					else
					{
						buildingMaterials[ticker] = amount;
					}
				});
				
				const adjustedDate = date + advanceDays;
				Object.keys(buildingMaterials).forEach(ticker => {
					const amount = adjustedDate > 180 ? buildingMaterials[ticker] : Math.ceil(buildingMaterials[ticker] * adjustedDate / 180);	// This isn't quite right, but will be off by only 1 MCG at most
					
					if(parsedGroup[ticker])
					{
						parsedGroup[ticker] += amount;
					}
					else
					{
						parsedGroup[ticker] = amount;
					}
				});
			});
		}
		else
		{
			addMessage(messageBox, "Missing data on repair planet", "ERROR");
			errorFlag[0] = true;
		}
	}
	else if(group.type == "Manual")
	{
		// Just return the list of materials
		if(group.materials)
		{
			parsedGroup = group.materials;
		}
		else
		{
			addMessage(messageBox, "Missing materials in manual group", "ERROR");
			errorFlag[0] = true;
		}
	}
	else
	{
		addMessage(messageBox, "Unrecognized group type", "ERROR");
	}
	
	return parsedGroup;
}