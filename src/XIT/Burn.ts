import {clearChildren, createTextSpan, setSettings, CategorySort, findCorrespondingPlanet, createMaterialElement, calculateBurn} from "../util";
import {Style} from "../Style";
import {Selector} from "../Selector";
import {MaterialNames} from "../GameProperties";
//import {getGroupBurn, getBurn} from "../BackgroundRunner";

export function EnhancedBurn_pre(tile, parameters, result, userInfo, webData, modules)
{
	clearChildren(tile);
	var planet;
	if(parameters[1])
	{
		planet = parameters[1];
	}
	else
	{
		tile.textContent = "Error! Enter a planet name after XIT BURN (XIT BURN_UV-351a)";
		return;
	}
	
	if(!userInfo["PMMG-User-Info"] || !userInfo["PMMG-User-Info"]["workforce"])
	{
		tile.textContent = "Loading Burn Data...";
		tile.id = "pmmg-reload";
		return;
	}
	
	// Burn data is non-empty
	tile.id = "pmmg-load-success";
	
	var planetBurn;
	var settings;
	if(parameters[1].toLowerCase() == "group" && webData["burn"])
	{
		// Add group burn back in later.
		return;
		var inv = {};
		var cons = {};
		var fullCommand = "";
		if(parameters[3])
		{
			fullCommand = parameters.join(" ").toUpperCase();
		}
		webData["burn"][parameters[2]].forEach(planetData => {
			if(parameters[3])
			{
				if(!((planetData && planetData["PlanetName"] && fullCommand.match(planetData["PlanetName"].toUpperCase())) || (planetData && planetData["PlanetNaturalId"] && fullCommand.match(planetData["PlanetNaturalId"].toUpperCase()))))
				{
					return;
				}
			}
			if(planetData["Error"] == null)
			{
				planetData["Inventory"].forEach(material => {
					if(inv[material["MaterialTicker"]] == undefined)
					{
						inv[material["MaterialTicker"]] = material["MaterialAmount"];
					}
					else
					{
						inv[material["MaterialTicker"]] += material["MaterialAmount"];
					}
					return;
				});
				
				planetData["OrderConsumption"].forEach(material => {
					if(cons[material["MaterialTicker"]] == undefined)
					{
						cons[material["MaterialTicker"]] = -material["DailyAmount"];
					}
					else
					{
						cons[material["MaterialTicker"]] -= material["DailyAmount"];
					}
				});
				
				planetData["WorkforceConsumption"].forEach(material => {
					if(cons[material["MaterialTicker"]] == undefined)
					{
						cons[material["MaterialTicker"]] = -material["DailyAmount"];
					}
					else
					{
						cons[material["MaterialTicker"]] -= material["DailyAmount"];
					}
					return;
				});
				
				planetData["OrderProduction"].forEach(material => {
					if(cons[material["MaterialTicker"]] == undefined)
					{
						cons[material["MaterialTicker"]] = material["DailyAmount"];
					}
					else
					{
						cons[material["MaterialTicker"]] += material["DailyAmount"];
					}
					return;
				});
			}
			return;
		});
	} else
	{
		const planetProduction = findCorrespondingPlanet(planet, userInfo["PMMG-User-Info"]["production"]);
		const planetWorkforce = findCorrespondingPlanet(planet, userInfo["PMMG-User-Info"]["workforce"]);
		const planetInv = findCorrespondingPlanet(planet, userInfo["PMMG-User-Info"]["storage"], true);
	
		planetBurn = calculateBurn(planetProduction, planetWorkforce, planetInv);	// The planet burn data
		
		// Reimplement burn settings later.
		//settings = findCorrespondingPlanet(planet, webData["burn_settings"]);
		if(!planetBurn || Object.keys(planetBurn).length == 0){tile.textContent = "Error! No Matching Planet!";return;}
	}
	
	if(!planetBurn){return;}
	
	const screenNameElem = document.querySelector(Selector.ScreenName);
	const screenName = screenNameElem ? screenNameElem.textContent : "";
	if(!result["PMMGExtended"]["burn_display_settings"]){result["PMMGExtended"]["burn_display_settings"] = [];}
	var settingsIndex = FindBurnSettings(result["PMMGExtended"]["burn_display_settings"], screenName + parameters[1]);
	const dispSettings = settingsIndex == -1 ? [1, 1, 1, 1] : result["PMMGExtended"]["burn_display_settings"][settingsIndex][1];
	
	const table = document.createElement("table");
	const bufferHeader = document.createElement("div");
	bufferHeader.style.display = "flex";
	tile.appendChild(bufferHeader);
	const settingsDiv = document.createElement("div");
	settingsDiv.style.display = "flex";
	bufferHeader.appendChild(settingsDiv);
	settingsDiv.appendChild(createSettingsButton("RED", 22.025, dispSettings[0], function(){
		dispSettings[0] = dispSettings[0] ? 0 : 1;
		UpdateBurn(table, dispSettings);
		if(settingsIndex == -1)
		{
			result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
			settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
		}
		else
		{
			result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
		}
		setSettings(result);
	}));
	settingsDiv.appendChild(createSettingsButton("YELLOW", 40.483, dispSettings[1], function(){
		dispSettings[1] = dispSettings[1] ? 0 : 1;
		UpdateBurn(table, dispSettings);
		if(settingsIndex == -1)
		{
			result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
			settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
		}
		else
		{
			result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
		}
		setSettings(result);
	}));
	settingsDiv.appendChild(createSettingsButton("GREEN", 34.65, dispSettings[2], function(){
		dispSettings[2] = dispSettings[2] ? 0 : 1;
		UpdateBurn(table, dispSettings);
		if(settingsIndex == -1)
		{
			result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
			settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
		}
		else
		{
			result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
		}
		setSettings(result);
	}));
	settingsDiv.appendChild(createSettingsButton("INF", 19.6, dispSettings[3], function(){
		dispSettings[3] = dispSettings[3] ? 0 : 1;
		UpdateBurn(table, dispSettings);
		if(settingsIndex == -1)
		{
			result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
			settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
		}
		else
		{
			result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
		}
		setSettings(result);
	}));
	
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Needs", "Production", "Inv", "Amt. Needed", "Burn"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	(headRow.firstChild as HTMLTableCellElement).colSpan = 2;
	
	const body = document.createElement("tbody");
	table.appendChild(body);
	
	var burnMaterials = Object.keys(planetBurn);
	burnMaterials.sort(CategorySort);
	for(let material of burnMaterials)
	{
		var included = true;
		if(settings != undefined && parameters[1].toLowerCase() != "group")
		{
			settings["MaterialExclusions"].forEach((mat) => {
				if(mat["MaterialTicker"] == material){included = false;return;}
				return;
			});
		}
		if(!included){continue;}
		
		const row = document.createElement("tr");
		body.appendChild(row);
		const materialColumn = document.createElement("td");
		materialColumn.style.width = "32px";
		materialColumn.style.paddingRight = "0px";
		materialColumn.style.paddingLeft = "0px";
		const matElem = createMaterialElement(material, "prun-remove-js", "none", false, true);
		if(matElem){materialColumn.appendChild(matElem);}
		row.appendChild(materialColumn);
		const nameSpan = createTextSpan(MaterialNames[material][0]);
		nameSpan.style.fontWeight = "bold";
		const nameColumn = document.createElement("td");
		nameColumn.appendChild(nameSpan);
		row.appendChild(nameColumn);
		
		const consColumn = document.createElement("td");
		consColumn.appendChild(createTextSpan(planetBurn[material]["DailyAmount"].toLocaleString(undefined, {maximumFractionDigits: 1}) + " / Day"));
		row.appendChild(consColumn);
		
		const invColumn = document.createElement("td");
		const invAmount = planetBurn[material]["Inventory"] == undefined ? 0 : planetBurn[material]["Inventory"];
		invColumn.appendChild(createTextSpan(invAmount.toLocaleString(undefined)));
		row.appendChild(invColumn);
		
		const burn = planetBurn[material]["DaysLeft"];
		const burnColumn = document.createElement("td");
		burnColumn.appendChild(createTextSpan(((burn != "∞" && burn < 500 && planetBurn[material]["DailyAmount"] < 0) ? Math.floor(burn).toLocaleString(undefined, {maximumFractionDigits: 0}) : "∞") + " Days"));
		if(planetBurn[material]["DailyAmount"] >= 0)
		{
			burnColumn.classList.add("burn-green");
			burnColumn.classList.add("burn-infinite");
		}
		else if(burn <= (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[0])
		{
			burnColumn.classList.add("burn-red");
		}
		else if(burn <= (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1])
		{
			burnColumn.classList.add("burn-yellow");
		}
		else
		{
			burnColumn.classList.add("burn-green");
		}
		
		const needColumn = document.createElement("td");
		const needAmt = burn > (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1] || planetBurn[material]["DailyAmount"] > 0 ? 0 : (burn - (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1]) * planetBurn[material]["DailyAmount"];
		needColumn.appendChild(createTextSpan(needAmt.toLocaleString(undefined, {maximumFractionDigits: 0})));
		
		row.appendChild(needColumn);
		row.appendChild(burnColumn);
		
	}
	UpdateBurn(table, dispSettings);
	tile.appendChild(table);
	return [modules, userInfo];
}

function FindBurnSettings(array, matchString)
{
	for(var i = 0; i < array.length; i++)
	{
		if(matchString == array[i][0])
		{
			return i;
		}
	}
	return -1;
}

function UpdateBurn(table, dispSettings)
{
	(Array.from(table.children[1].children) as HTMLElement[]).forEach(row => {
		if(row.children[5].classList.contains("burn-infinite"))
		{
			row.style.display = dispSettings[3] ? "table-row" :"none";
			row.style.visibility = dispSettings[3] ? "visible" : "hidden";
			row.style.width = dispSettings[3] ? "auto" : "0px";
			row.style.height = dispSettings[3] ? "auto" : "0px";
		}
		else if(row.children[5].classList.contains("burn-green"))
		{
			row.style.display = dispSettings[2] ? "table-row" :"none";
			row.style.visibility = dispSettings[2] ? "visible" : "hidden";
			row.style.width = dispSettings[2] ? "auto" : "0px";
			row.style.height = dispSettings[2] ? "auto" : "0px";
		}
		else if(row.children[5].classList.contains("burn-yellow"))
		{
			row.style.display = dispSettings[1] ? "table-row" :"none";
			row.style.visibility = dispSettings[1] ? "visible" : "hidden";
			row.style.width = dispSettings[1] ? "auto" : "0px";
			row.style.height = dispSettings[1] ? "auto" : "0px";
		}
		else if(row.children[5].classList.contains("burn-red"))
		{
			row.style.display = dispSettings[0] ? "table-row" :"none";
			row.style.visibility = dispSettings[0] ? "visible" : "hidden";
			row.style.width = dispSettings[0] ? "auto" : "0px";
			row.style.height = dispSettings[0] ? "auto" : "0px";
		}
		return;
	});
	return;
}

function createSettingsButton(text, width, toggled, f)
{
	const button = document.createElement("span");
	const bar = document.createElement("div");
	if(toggled)
	{
		bar.classList.add(...Style.SettingsBarToggled);
	}
	else
	{
		bar.classList.add(...Style.SettingsBarUntoggled);
	}
	const textBox = document.createElement("div");
	textBox.classList.add(...Style.SettingsText);
	textBox.textContent = text;
	button.classList.add(...Style.SettingsButton);
	bar.style.width = width + "px";
	bar.style.maxWidth = width + "px";
	bar.style.height = "2px";
	button.appendChild(bar);
	button.appendChild(textBox);
	button.addEventListener("click", function() {
		if(toggled)
		{
			bar.classList.remove(...Style.SettingsBarToggled);
			bar.classList.add(...Style.SettingsBarUntoggled);
			toggled = false;
		}
		else
		{
			bar.classList.remove(...Style.SettingsBarUntoggled);
			bar.classList.add(...Style.SettingsBarToggled);
			toggled = true;
		}
		f();
	});
	return button;
}
