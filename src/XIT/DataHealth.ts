import {clearChildren, createTextSpan, createTable} from "../util";
import {TextColors, Style} from "../Style";

export function DataHealth(tile, parameters, result, userInfo)
{
	clearChildren(tile);
	
	// Construct table for health of base data
	const baseTitle = createTextSpan("Bases");
	baseTitle.classList.add("title");
	tile.appendChild(baseTitle);
	
	const baseBody = createTable(tile, ["Planet", "Workforce", "Production", "Storage"]);
	const baseInfo = {};
	
	if(!userInfo["PMMG-User-Info"])	// This should almost never happen.
	{
		tile.appendChild(createTextSpan("No collected data is present. Refresh the buffer. If the problem persists, contact Pi314 on Discord."));
		return;
	}
	
	userInfo["PMMG-User-Info"]["workforce"].forEach(workforce => {
		if(workforce.PlanetName && !baseInfo[workforce.PlanetName])
		{
			baseInfo[workforce.PlanetName] = [true, false, false];
		}
	});
	
	userInfo["PMMG-User-Info"]["production"].forEach(production => {
		if(production.PlanetName && !baseInfo[production.PlanetName])
		{
			baseInfo[production.PlanetName] = [false, true, false];
		}
		else if(production.PlanetName)
		{
			baseInfo[production.PlanetName][1] = true;
		}
	});
	
	userInfo["PMMG-User-Info"]["storage"].forEach(storage => {
		if(storage.PlanetName && storage.type == "STORE" && !baseInfo[storage.PlanetName])
		{
			baseInfo[storage.PlanetName] = [false, false, true];
		}
		else if(storage.PlanetName && storage.type == "STORE")
		{
			baseInfo[storage.PlanetName][2] = true;
		}
	});
	
	Object.keys(baseInfo).forEach(planet => {
		const row = document.createElement("tr");
		baseBody.appendChild(row);
		
		const planetElem = document.createElement("td");
		planetElem.appendChild(createTextSpan(planet));
		row.appendChild(planetElem);
		
		baseInfo[planet].forEach(present => {
			const textElem = document.createElement("td");
			textElem.appendChild(createTextSpan(present ? "✓" : "X"));
			textElem.style.color = present ? TextColors.Success : TextColors.Failure;
			row.appendChild(textElem);
		});
	});
	
	// Create table for health of other parts
	const otherTitle = createTextSpan("Other Data");
	otherTitle.classList.add("title");
	otherTitle.style.paddingTop = "10px";
	tile.appendChild(otherTitle);
	const otherTable = createTable(tile, ["Parameter", "Value"]);
	
	const numBaseSites = userInfo["PMMG-User-Info"]["sites"].filter(item => item.type === "BASE").length;
	otherTable.appendChild(createTableRow("Base Sites", numBaseSites));
	
	const numWarehouseSites = userInfo["PMMG-User-Info"]["sites"].filter(item => item.type !== "BASE").length;
	otherTable.appendChild(createTableRow("Warehouse Sites", numWarehouseSites));
	
	const numBaseStores = userInfo["PMMG-User-Info"]["storage"].filter(item => item.type === "STORE").length;
	otherTable.appendChild(createTableRow("Base Stores", numBaseStores));
	
	const numWarehouseStores = userInfo["PMMG-User-Info"]["storage"].filter(item => item.type === "WAREHOUSE_STORE").length;
	otherTable.appendChild(createTableRow("Warehouse Stores", numWarehouseStores));
	
	const numShipStores = userInfo["PMMG-User-Info"]["storage"].filter(item => item.type === "SHIP_STORE").length;
	otherTable.appendChild(createTableRow("Ship Stores", numShipStores));
	
	const numWorkforces = userInfo["PMMG-User-Info"]["workforce"].length;
	otherTable.appendChild(createTableRow("Workforces", numWorkforces));
	
	const numProduction = userInfo["PMMG-User-Info"]["production"].length;
	otherTable.appendChild(createTableRow("Production Sites", numProduction));
	
	const contracts = userInfo["PMMG-User-Info"]["contracts"].length;
	otherTable.appendChild(createTableRow("Contracts", contracts));
	
	const cxos = userInfo["PMMG-User-Info"]["cxos"].length;
	otherTable.appendChild(createTableRow("CXOS", cxos));
	
	const fxos = userInfo["PMMG-User-Info"]["fxos"].length;
	otherTable.appendChild(createTableRow("FXOS", fxos));
	
	otherTable.appendChild(createTableRow("Currency", userInfo["PMMG-User-Info"]["currency"][0] != undefined));
	
	const cxPriceAge = userInfo["PMMG-User-Info"]["cx_prices"] ? ((Date.now() - userInfo["PMMG-User-Info"]["cx_prices"]["Age"]) / 3600000).toLocaleString(undefined, {maximumFractionDigits: 0}) + "h" : false as any;
	otherTable.appendChild(createTableRow("CX Price Age", cxPriceAge));
	
	const clearButton = document.createElement("button");
	clearButton.textContent = "Clear User Data";
	clearButton.classList.add(...Style.Button);
	clearButton.classList.add(...Style.ButtonPrimary);
	clearButton.style.margin = "4px";
	clearButton.style.display = "block";
	clearButton.addEventListener("click", function() {
		try
		{
			browser.storage.local.remove("PMMG-User-Info");
		}
		catch(err)
		{
			chrome.storage.local.remove("PMMG-User-Info");

		}
	});
	tile.appendChild(clearButton);
	
	return [parameters, result];
}

// Creates a table row for a 2 column tabel. If value is true or false it shows as a colored check or x.
function createTableRow(parameter, value)
{
	const row = document.createElement("tr");
	const paramElem = document.createElement("td");
	paramElem.appendChild(createTextSpan(parameter));
	row.appendChild(paramElem);
	
	const valueElem = document.createElement("td");
	if(value === true)
	{
		valueElem.appendChild(createTextSpan("✓"));
		valueElem.style.color = TextColors.Success;
	}
	else if(value === false)
	{
		valueElem.appendChild(createTextSpan("X"));
		valueElem.style.color = TextColors.Failure;
	}
	else
	{
		valueElem.appendChild(createTextSpan(value));
	}
	row.appendChild(valueElem);
	
	return row;
}