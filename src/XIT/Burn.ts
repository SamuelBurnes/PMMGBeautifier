import {clearChildren, createTextSpan, setSettings, CategorySort, findCorrespondingPlanet, createMaterialElement, calculateBurn} from "../util";
import {Style} from "../Style";
import {Selector} from "../Selector";
import {MaterialNames} from "../GameProperties";

export class Burn {
	private tile: HTMLElement;
	private parameters: string[];
	private pmmgSettings;
	private userInfo;
	private alive;
	public name: string;
	
	constructor(tile, parameters, pmmgSettings, userInfo)
	{
		this.tile = tile;
		this.parameters = parameters;
		this.pmmgSettings = pmmgSettings;
		this.userInfo = userInfo;
		this.alive = true;
		
		this.name = "ENHANCED BURN" + (parameters[1] ? " - " + parameters[1].toUpperCase() : "");
	}
	
	create_buffer()
	{
		// Set static versions of class parameters to be passed to functions downstream
		const parameters = this.parameters;
		const pmmgSettings = this.pmmgSettings;
		
		clearChildren(this.tile);
		var planet;
		if(this.parameters[1])
		{
			planet = this.parameters[1];
		}
		else
		{
			this.tile.textContent = "Error! Enter a planet name after XIT BURN (XIT BURN_UV-351a)";
			return;
		}
		
		if(!this.userInfo["PMMG-User-Info"] || !this.userInfo["PMMG-User-Info"]["workforce"])
		{
			this.tile.textContent = "Loading Burn Data...";
			this.tile.id = "pmmg-reload";
			return;
		}
		
		// Burn data is non-empty
		this.tile.id = "pmmg-load-success";
		
		var planetBurn;
		var settings;
		
		const planetProduction = findCorrespondingPlanet(planet, this.userInfo["PMMG-User-Info"]["production"]);
		const planetWorkforce = findCorrespondingPlanet(planet, this.userInfo["PMMG-User-Info"]["workforce"]);
		const planetInv = findCorrespondingPlanet(planet, this.userInfo["PMMG-User-Info"]["storage"], true);
	
		planetBurn = calculateBurn(planetProduction, planetWorkforce, planetInv);	// The planet burn data
		
		if(!planetBurn){return;}
		
		const screenNameElem = document.querySelector(Selector.ScreenName);
		const screenName = screenNameElem ? screenNameElem.textContent : "";
		if(!this.pmmgSettings["PMMGExtended"]["burn_display_settings"]){this.pmmgSettings["PMMGExtended"]["burn_display_settings"] = [];}
		var settingsIndex = FindBurnSettings(this.pmmgSettings["PMMGExtended"]["burn_display_settings"], screenName + this.parameters[1]);
		const dispSettings = settingsIndex == -1 ? [1, 1, 1, 1] : this.pmmgSettings["PMMGExtended"]["burn_display_settings"][settingsIndex][1];
		
		const table = document.createElement("table");
		const bufferHeader = document.createElement("div");
		bufferHeader.style.display = "flex";
		this.tile.appendChild(bufferHeader);
		const settingsDiv = document.createElement("div");
		settingsDiv.style.display = "flex";
		bufferHeader.appendChild(settingsDiv);
		settingsDiv.appendChild(createSettingsButton("RED", 22.025, dispSettings[0], function(){
			dispSettings[0] = dispSettings[0] ? 0 : 1;
			UpdateBurn(table, dispSettings);
			if(settingsIndex == -1)
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
				settingsIndex = pmmgSettings["PMMGExtended"]["burn_display_settings"].length - 1;
			}
			else
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
			}
			setSettings(pmmgSettings);
		}));
		settingsDiv.appendChild(createSettingsButton("YELLOW", 40.483, dispSettings[1], function(){
			dispSettings[1] = dispSettings[1] ? 0 : 1;
			UpdateBurn(table, dispSettings);
			if(settingsIndex == -1)
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
				settingsIndex = pmmgSettings["PMMGExtended"]["burn_display_settings"].length - 1;
			}
			else
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
			}
			setSettings(pmmgSettings);
		}));
		settingsDiv.appendChild(createSettingsButton("GREEN", 34.65, dispSettings[2], function(){
			dispSettings[2] = dispSettings[2] ? 0 : 1;
			UpdateBurn(table, dispSettings);
			if(settingsIndex == -1)
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
				settingsIndex = pmmgSettings["PMMGExtended"]["burn_display_settings"].length - 1;
			}
			else
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
			}
			setSettings(pmmgSettings);
		}));
		settingsDiv.appendChild(createSettingsButton("INF", 19.6, dispSettings[3], function(){
			dispSettings[3] = dispSettings[3] ? 0 : 1;
			UpdateBurn(table, dispSettings);
			if(settingsIndex == -1)
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
				settingsIndex = pmmgSettings["PMMGExtended"]["burn_display_settings"].length - 1;
			}
			else
			{
				pmmgSettings["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
			}
			setSettings(pmmgSettings);
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
			if(settings != undefined && this.parameters[1].toLowerCase() != "group")
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
			consColumn.appendChild(createTextSpan(planetBurn[material]["DailyAmount"].toLocaleString(undefined, {maximumFractionDigits: Math.abs(planetBurn[material]["DailyAmount"]) < 1 ? 2 : 1, minimumFractionDigits: Math.abs(planetBurn[material]["DailyAmount"]) < 1 ? 2 : undefined}) + " / Day"));
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
			else if(burn <= (this.pmmgSettings["PMMGExtended"]["burn_thresholds"] || [3, 7])[0])
			{
				burnColumn.classList.add("burn-red");
			}
			else if(burn <= (this.pmmgSettings["PMMGExtended"]["burn_thresholds"] || [3, 7])[1])
			{
				burnColumn.classList.add("burn-yellow");
			}
			else
			{
				burnColumn.classList.add("burn-green");
			}
			
			const needColumn = document.createElement("td");
			const needAmt = burn > (this.pmmgSettings["PMMGExtended"]["burn_thresholds"] || [3, 7])[1] || planetBurn[material]["DailyAmount"] > 0 ? 0 : (burn - (this.pmmgSettings["PMMGExtended"]["burn_thresholds"] || [3, 7])[1]) * planetBurn[material]["DailyAmount"];
			needColumn.appendChild(createTextSpan(needAmt.toLocaleString(undefined, {maximumFractionDigits: 0})));
			
			row.appendChild(needColumn);
			row.appendChild(burnColumn);
			
		}
		UpdateBurn(table, dispSettings);
		this.tile.appendChild(table);
		
		this.update_buffer();
		return;
	}
	
	update_buffer()
	{
		this.alive = document.body.contains(this.tile);
		if(this.alive)
		{
			window.setTimeout(() => this.create_buffer(), 3000);
		}
	}
	destroy_buffer()
	{
		// Nothing constantly running so nothing to destroy
	}
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
