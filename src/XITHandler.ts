import {Module} from "./ModuleRunner";
import {createTextSpan, getBuffers, createMaterialElement} from "./util";
import {Selector} from "./Selector";

/**
 * Handle XIT buffers
 */
export class XITHandler implements Module {
  private tag = "pb-xit";
  private xitTag;
  private apikey;
  private webappID;
  constructor(apikey, webappID)
  {  
	this.apikey = apikey;
	this.webappID = webappID;
  }
  cleanup() {
    //genericCleanup(this.tag);	// Don't clean up because causes flashing when doing asynchronous requests
  }
  run() {
    const buffers = getBuffers("XIT");
    if (buffers == undefined) return;
	buffers.forEach(buffer => {
		var tile = buffer.querySelector(Selector.XITTile) as HTMLElement;
		if(tile == null){tile = buffer.querySelector(Selector.XITTileFloat) as HTMLElement;}
		if(tile == null || tile == undefined){return;}
		const parametersRaw = Array.from(buffer.getElementsByClassName(Selector.BufferHeader))[0].textContent;
		if(parametersRaw == undefined || parametersRaw == null) return;
		var parameters = parametersRaw.slice(4).split("_");
		if(parameters == undefined || parameters == null) return;
		this.xitTag = parameters[0];
		tile.style.backgroundColor = "#222222";
		tile.style.paddingTop = "4px";
		switch(this.xitTag.toUpperCase())
		{
			case "INV":
				if(this.apikey == undefined){tile.textContent = "Error! No API Key!";break;}
				if(parameters[1] == undefined || parameters[2] == undefined)
				{tile.textContent = "Error! Not Enough Parameters!";break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "FIO INVENTORY";	// Title the buffer
				var retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).title == "loaded"){break;}
				
				getFIOInventory(tile, parameters[1], parameters[2], this.apikey, this.tag);
				break;
			case "DISCORD":
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "discord-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "DISCORD SERVER";	// Title the buffer
				var serverID;
				var channelID;
				var valid = true;
				if(parameters[1] != undefined && parameters[2] == undefined)
				{
					switch(parameters[1])
					{
						case "PTS":
							serverID = "851453976649531422";
							channelID = "851453976649531425";
							break;
						case "UFO":
							serverID = "855488309802172469";
							channelID = "855489711635431475";
							break;
						default:
							tile.textContent = "Error! No Matching Discord Server!";
							valid = false;
					}
					if(!valid)
					{
						break;
					}
				}
				
				if(parameters[1] == undefined)
				{
					tile.textContent = "Error! No Matching Discord Server!";
					break;;
				}
				else if(parameters[2] != undefined)
				{
					serverID = parameters[1];
					channelID = parameters[2];
				}
				const discord = document.createElement("iframe");
				discord.src = "https://e.widgetbot.io/channels/" + serverID + "/" + channelID;
				discord.width = "100%";
				discord.height = "100%";
				discord.id = "discord-success";
				
				tile.appendChild(discord);
				
				break;;
			case "SHEETS":
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "sheets-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "GOOGLE SHEETS";	// Title the buffer
				if(parameters[1] == undefined)
				{
					tile.textContent = "Error! No Matching Spreadsheet!";
					break;
				}
				
				const sheet = document.createElement("iframe");
				sheet.src = "https://docs.google.com/spreadsheets/d/" + parameters[1] + "/edit?usp=sharing";
				sheet.width = "100%";
				sheet.height = "100%";
				sheet.id = "sheets-success";
				
				tile.appendChild(sheet);
				break;
			case "PRUN":
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "sheets-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "PRUN-CEPTION";	// Title the buffer
				
				const prun = document.createElement("iframe");
				prun.src = "https://apex.prosperousuniverse.com/#/";
				prun.width = "100%";
				prun.height = "100%";
				prun.id = "sheets-success";
				
				tile.appendChild(prun);
				break;
			case "AHI":
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "ahi-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "AHI INVENTORY";	// Title the buffer
				
				var planet;
				var material;
				
				if(parameters[1] == undefined)
				{
					tile.textContent = "Error! Too Few Parameters!";
					break;
				}
				else if(parameters[2] == undefined)
				{
					if(parameters[1].length <= 3)
					{
						material = parameters[1];
						planet = undefined;
					}
					else
					{
						planet = parameters[1];
						material = undefined;
					}
				}
				else
				{
					if(parameters[1].length <= 3)
					{
						material = parameters[1];
						planet = parameters[2];
					}
					else
					{
						material = parameters[2];
						planet = parameters[1];
					}
				}
				
				getAHIInventory(tile, material, planet, this.tag);
				break;
			case "SHEETTABLE":
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "table-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "GOOGLE SHEETS TABLE";	// Title the buffer
				
				if(parameters[1] == undefined)
				{
					tile.textContent = "Error! Not Enough Parameters!";
					break;
				}
				getSheetsTable(tile, parameters[1], this.webappID, this.tag, parameters[2]);
				break;
			default:
				tile.textContent = "Error! No Matching Function!";
		}
		
	});
  }
  
  
}
function getSheetsTable(tile, parameter, webappID, tag, extraParam)
{
	tile.appendChild(document.createElement("div"));
	tile.children[0].id = "table-success";
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			
		    var jsondata = xhr.responseText;
			if(jsondata == undefined || jsondata == null){return;}
			var data;
			try
			{
				data = JSON.parse(jsondata);
			}
			catch(SyntaxError)
			{
				tile.textContent = "Error! Could Not Load JSON Data!";
				return;
			}
			
			const table = document.createElement("table");
			table.title = "Sheet Table";
			table.classList.add(tag);
			const head = document.createElement("thead");
			const headRow = document.createElement("tr");
			head.appendChild(headRow);
			table.appendChild(head);
			for(let title of data[0])
			{
				const header = document.createElement("th");
				header.title = title + " Header";
				header.textContent = title;
				headRow.appendChild(header);
			}
			
			const body = document.createElement("tbody");
			table.appendChild(body);
			data.shift();
			for(let rowData of data)
			{
				const row = document.createElement("tr");
				body.appendChild(row);
				for(let point of rowData)
				{
					const tableElem = document.createElement("td");
					row.appendChild(tableElem);
					tableElem.appendChild(createTextSpan(point));
				}
			}
			
			tile.appendChild(table);
		}
    };
	var url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22" + parameter + "%22";
	if(extraParam != undefined){url += "&param=%22" + extraParam + "%22";}
	xhr.open("GET", url, true);
    xhr.send(null);
	return;
}
  
function getAHIInventory(tile, material, planet, tag)
{
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			
		    var jsondata = xhr.responseText;
			if(jsondata == undefined || jsondata == null){return;}
			console.log(jsondata);
			var inventoryData;
			try
			{
				inventoryData = JSON.parse(jsondata);
			}
			catch(SyntaxError)
			{
				tile.textContent = "Error! Could Not Load JSON Data!";
				return;
			}
			var itemsPerRow = Math.ceil(inventoryData.length / 4);
			itemsPerRow = itemsPerRow > 3 ? 3 : itemsPerRow;
			var rowNum = 0;
			for(var i = 0; i < inventoryData.length; i++)
			{
				var divider;
				if(rowNum == 0)
				{
					divider = document.createElement("div");
					divider.style = "margin: 0px; padding: 5px; display: flex; flex-direction: row; flex-wrap: wrap; border-top-width: 1px; border-top-color: #2b485a; border-top-style: solid; border-bottom-width: 0px; border-bottom-color: #2b485a; border-bottom-style: solid;";
					if((i / itemsPerRow) % 2 == 1){divider.style.backgroundColor = "#23282b";}
					tile.appendChild(divider);
				}
				else
				{
					divider = tile.children[tile.children.length - 1];
				}
				const materialIcon = createMaterialElement(inventoryData[i]["material"], tag, inventoryData[i]["quantityAvail"], true);
				
				if(rowNum != 0)
				{
					materialIcon.style.paddingLeft = "15px";
				}
				divider.appendChild(materialIcon);
				
				const info = document.createElement("div");
				divider.appendChild(info);
				
				const name = createTextSpan(inventoryData[i]["user"]["name"], tag);
				name.style.fontWeight = "bold";
				name.style.display = "block";
				name.style.marginTop = "3px";
				name.style.marginBottom = "2px";
				info.appendChild(name);
				
				const planetElem = createTextSpan(inventoryData[i]["planet"]["name"], tag);
				planetElem.style.display = "block";
				info.appendChild(planetElem);
				
				const matAmount = createTextSpan(inventoryData[i]["quantityAvail"] + " " + inventoryData[i]["material"], tag);
				matAmount.style.display = "block";
				info.appendChild(matAmount);
				
				const timeDifference = (Date.now() - (new Date(inventoryData[i]["timestamp"]).getTime())) / 3600000;
				const timeElem = createTextSpan(timeDifference.toFixed(0) + " hours ago", tag);
				info.appendChild(timeElem);
				
				const fioIndicator = inventoryData[i]["isFIO"] ? "⯁" : "⯀";
				const fioElem = createTextSpan(fioIndicator, tag);
				fioElem.style.color = inventoryData[i]["isFIO"] ? "#f4900c" : "#bbbbbb";
				fioElem.style.paddingLeft = "3px";
				
				info.appendChild(fioElem);
				
				rowNum++;
				if(rowNum >= itemsPerRow){rowNum = 0;}
			}
			tile.children[tile.children.length - 1].style.borderBottomWidth = "1px";
			return;
			
			
	    }
    };
    var titleText;
	if(material == undefined && planet == undefined)
	{
		titleText = "All Bot Entries";
	}
	else if(material == undefined)
	{
		titleText = "Bot Entries on " + planet;
	}
	else if(planet == undefined)
	{
		titleText = "Bot Entries for " + material;
	}
	else
	{
		titleText = "Bot Entries for " + material + " on " + planet;
	}
	var title = createTextSpan(titleText, tag);
	title.id = "ahi-success";
	title.style.padding = "2px 8px";
	title.style.display = "inline";
	title.style.color = "#3fa2de";
	
	tile.appendChild(title);
	//xhr.timeout = 3000;
	
	var url = "https://ahi.technojones.us/api/v1/inventories";
	if(material != undefined || planet != undefined){url += "?";}
	if(planet != undefined){url += "planet=" + planet;}
	if(material != undefined)
	{
		if(planet != undefined){url += "&";}
		url += "material=" + material;
	}
	
	xhr.open("POST", url, true);
    xhr.send(null);
	return;
}
  
function fioMatsAlphabetSort(a, b)
{
	if(a["MaterialCategory"] == null || b["MaterialCategory"] == null){return 0;}
	return a["MaterialCategory"].localeCompare(b["MaterialCategory"]);
}
  
function getFIOInventory(tile, user, storage, apikey, tag)
{
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		tile.textContent = "Error! Inventory Could Not Be Loaded!";
	};
	
    xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
		    var jsondata = xhr.responseText;
			if(jsondata == undefined || jsondata == null){return;}
			var inventoryData;
			try
			{
				inventoryData = JSON.parse(jsondata);
			}
			catch(SyntaxError)
			{
				tile.textContent = "Error! Could Not Load Data!";
				return;
			}
			const volumeUsed = inventoryData["VolumeLoad"];
			const volumeTotal = inventoryData["VolumeCapacity"];
			const weightUsed = inventoryData["WeightLoad"];
			const weightTotal = inventoryData["WeightCapacity"];
			
			const header = document.createElement("div");
			header.style.padding = "2px 8px";
			header.style.display = "inline";
			header.style.color = "#3fa2de";
			header.id = "header";
			header.title = "loaded";
			header.classList.add(tag);
			
			tile.appendChild(header);
			const body = document.createElement("div");
			tile.appendChild(body);
			body.classList.add(tag);
			body.style.display = "flex";
			body.style.flexDirection = "row";
			body.style.flexWrap = "wrap";
			body.style.justifyContent = "space-around";
			body.style.alignItems = "stretch";
			body.style.marginBottom = "23px";
			body.style.padding = "5px 8px";
			body.id = "body";
			
			
			header.appendChild(createTextSpan(storage, tag));
			header.appendChild(document.createElement("br"));
			const userElem = createTextSpan(user, tag);
			userElem.style.paddingLeft = "8px";
			header.appendChild(userElem);
			
			const volumeLine = document.createElement("div");
			volumeLine.id = "volume-line";
			volumeLine.style.padding = "2px 8px";
			volumeLine.style.color = "#999999";
			volumeLine.appendChild(createTextSpan("Volume ", tag));
			const volumeBar = document.createElement("progress");
			volumeBar.id = "volume-bar";
			volumeBar.classList.add(tag);
			volumeBar.title = "pmmg-progress-bar";
			volumeBar.style.width = "30px";
			volumeBar.style.height = "9px";
			volumeBar.style.border = "1px solid #999";
			volumeBar.style.margin = "1px 2px";
			volumeBar.max = 1;
			volumeBar.value = volumeUsed / volumeTotal;
			volumeLine.appendChild(volumeBar);
			volumeLine.appendChild(createTextSpan(volumeUsed.toFixed(2) + " / " + volumeTotal.toFixed(0) + " m³", tag));
			
			header.appendChild(volumeLine);
			
			const weightLine = document.createElement("div");
			weightLine.id = "weight-line";
			weightLine.style.padding = "2px 8px";
			weightLine.style.color = "#999999";
			weightLine.appendChild(createTextSpan("Weight ", tag));
			const weightBar = document.createElement("progress");
			weightBar.id = "weight-bar";
			weightBar.classList.add(tag);
			weightBar.title = "pmmg-progress-bar";
			weightBar.style.width = "30px";
			weightBar.style.height = "9px";
			weightBar.style.border = "1px solid #999";
			weightBar.style.margin = "1px 2px";
			weightBar.max = 1;
			weightBar.value = weightUsed / weightTotal;
			weightLine.appendChild(weightBar);
			weightLine.appendChild(createTextSpan(weightUsed.toFixed(2) + " / " + weightTotal.toFixed(0) + " t", tag));
			
			header.appendChild(weightLine);
			inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
			for(let item of inventoryData["StorageItems"])
			{
				body.appendChild(createMaterialElement(item["MaterialTicker"], tag, item["MaterialAmount"], true));
			}
			return;
			
			
	    }
    };
    
	xhr.timeout = 2000;
	xhr.open("GET", "https://rest.fnar.net" + "/storage/" + user + "/" + storage, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}
