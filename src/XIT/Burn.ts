import {clearChildren, createTextSpan, setSettings, CategorySort, findCorrespondingPlanet, createMaterialElement} from "../util";
import {Style} from "../Style";
import {Selector} from "../Selector";
import {MaterialNames} from "../GameProperties";
import {getGroupBurn, getBurn} from "../BackgroundRunner";

export function EnhancedBurn_pre(tile, parameters, result, fullBurn, burnSettings, modules, refresh)
{
	clearChildren(tile);
	if(!result["PMMGExtended"]["apikey"])
	{
		tile.textContent = "Error! No API Key!";
		return;
	}
	const apikey = result["PMMGExtended"]["apikey"];
	const username = result["PMMGExtended"]["username"];
	if(refresh)
	{
		fullBurn[username] = [];
		getBurn(fullBurn, username, apikey);
	}
	var burn;
	var unloaded = false;
	var planet;
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return;
	}
	else if(parameters.length >= 3 && parameters[1].toLowerCase() == "group")
	{
		if(fullBurn[parameters[2]] && fullBurn[parameters[2]].length > 0){burn = fullBurn[parameters[2]];}
		else
		{
			unloaded = true;
			if(tile.id != "pmmg-reload")
			{
				getGroupBurn(fullBurn, parameters[2], apikey);
			}
		}
	}
	else
	{
		if(fullBurn[username] != undefined && fullBurn[username].length > 0){burn = fullBurn[username];planet = parameters[1];}
		else{unloaded = true;}
	}
	if(burnSettings[0] == "loading" || unloaded)
	{
		tile.textContent = "Loading Burn Data...";
		tile.id = "pmmg-reload";
		return;
	}
	
	// Burn data is non-empty
	tile.id = "pmmg-load-success";
	var settings;
	if(parameters[1].toLowerCase() == "group")
	{
		var inv = {};
		var cons = {};
		var fullCommand = "";
		if(parameters[3])
		{
			fullCommand = parameters.join(" ").toUpperCase();
		}
		fullBurn[parameters[2]].forEach(planetData => {
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
		const planetBurn = findCorrespondingPlanet(planet, burn);	// The planet data to work with
		var lastUpdated;
		try
		{
			lastUpdated = new Date(planetBurn["LastUpdate"] + "Z");
		}
		catch
		{
		
		}
		settings = findCorrespondingPlanet(planet, burnSettings);
		if(planetBurn == undefined){tile.textContent = "Error! No Matching Planet!";return;}
		
		
		var cons = {};
		var inv = {};
		for(let material of planetBurn["WorkforceConsumption"])
		{
			if(cons[material["MaterialTicker"]] == undefined)
			{
				cons[material["MaterialTicker"]] = -material["DailyAmount"];
				continue;
			}
			cons[material["MaterialTicker"]] -= material["DailyAmount"]; 
		}
		for(let material of planetBurn["OrderConsumption"])
		{
			if(cons[material["MaterialTicker"]] == undefined)
			{
				cons[material["MaterialTicker"]] = -material["DailyAmount"];
				continue;
			}
			cons[material["MaterialTicker"]] -= material["DailyAmount"]; 
		}
		for(let material of planetBurn["OrderProduction"])
		{
			if(cons[material["MaterialTicker"]] == undefined)
			{
				cons[material["MaterialTicker"]] = material["DailyAmount"];
				continue;
			}
			cons[material["MaterialTicker"]] += material["DailyAmount"]; 
		}
		for(let material of planetBurn["Inventory"])
		{
			if(inv[material["MaterialTicker"]] == undefined)
			{
				inv[material["MaterialTicker"]] = material["MaterialAmount"];
				continue;
			}
			inv[material["MaterialTicker"]] += material["MaterialAmount"]; 
		}
	}
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
	
	if(lastUpdated){
		const lastUpdatedSpan = createTextSpan("Last Updated: " + lastUpdated.toLocaleDateString(undefined, {day: "numeric", month: "numeric"}) + " " + lastUpdated.toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"}));
		lastUpdatedSpan.style.marginLeft = "auto";
		lastUpdatedSpan.style.marginRight = "10px";
		lastUpdatedSpan.style.color = "rgb(153, 153, 153)";
		bufferHeader.appendChild(lastUpdatedSpan);
	}
	
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
	
	var burnMaterials = Object.keys(cons);
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
		consColumn.appendChild(createTextSpan(cons[material].toLocaleString(undefined, {maximumFractionDigits: 1}) + " / Day"));
		row.appendChild(consColumn);
		
		const invColumn = document.createElement("td");
		const invAmount = inv[material] == undefined ? 0 : inv[material];
		invColumn.appendChild(createTextSpan(invAmount.toLocaleString(undefined)));
		row.appendChild(invColumn);
		
		const burn = invAmount == 0 ? 0 : -invAmount / cons[material];
		const burnColumn = document.createElement("td");
		burnColumn.appendChild(createTextSpan(((burn < 500 && cons[material] < 0) ? Math.floor(burn).toLocaleString(undefined, {maximumFractionDigits: 0}) : "∞") + " Days"));
		if(cons[material] >= 0)
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
		const needAmt = burn > (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1] || cons[material] > 0 ? 0 : (burn - (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1]) * cons[material];
		needColumn.appendChild(createTextSpan(needAmt.toLocaleString(undefined, {maximumFractionDigits: 0})));
		
		row.appendChild(needColumn);
		row.appendChild(burnColumn);
		
	}
	UpdateBurn(table, dispSettings);
	tile.appendChild(table);
	return modules;
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
