import {Module} from "./ModuleRunner";
import {createTextSpan, getBuffers, createMaterialElement, createFinancialTextBox} from "./util";
import {Selector} from "./Selector";
import {TextColors} from "./Style";

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
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "prun-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "PRUN-CEPTION";	// Title the buffer
				
				const prun = document.createElement("iframe");
				prun.src = "https://apex.prosperousuniverse.com/#/";
				prun.width = "100%";
				prun.height = "100%";
				prun.id = "prun-success";
				
				tile.appendChild(prun);
				break;
			
			case "SHEETTABLE":
				if(this.webappID == undefined){tile.textContent = "Error! No Web App ID!";break;}
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
			case "FIN":
				if(this.webappID == undefined){tile.textContent = "Error! No Web App ID!";break;}
				retrievedElements = Array.from(tile.children);
				if(retrievedElements[0] != undefined && (retrievedElements[0] as HTMLElement).id == "fin-success"){break;}
				Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = "FINANCIAL OVERVIEW";	// Title the buffer
				
				if(parameters[1] == undefined)
				{
					tile.textContent = "Error! Not Enough Parameters!";
					break;
				}
				getFinTable(tile, parameters[1], this.webappID, this.tag);
				break;
			default:
				tile.textContent = "Error! No Matching Function!";
		}
		
	});
  }
  
  
}

function getFinTable(tile, parameter, webappID, tag)
{
	tile.appendChild(document.createElement("div"));
	tile.children[0].id = "fin-success";
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
			const tileHeader = document.createElement("h2");
			tileHeader.classList.add(tag);
			tileHeader.title = "Financial Overview Header";
			tileHeader.textContent = "Key Figures";
			tileHeader.style.display = "block";
			tileHeader.style.fontSize = "12px";
			tileHeader.style.marginBottom = "0px";
			tileHeader.style.padding = "6px 4px 2px";
			tileHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
			tile.appendChild(tileHeader);
			
			tile.appendChild(createFinancialTextBox(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", TextColors.Standard, tag));
			tile.appendChild(createFinancialTextBox(Math.round(data[0][2]).toLocaleString(), "Current Assets", TextColors.Standard, tag));
			tile.appendChild(createFinancialTextBox(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", TextColors.Standard, tag));
			tile.appendChild(createFinancialTextBox(Math.round(data[0][7]).toLocaleString(), "Equity", TextColors.Standard, tag));
			tile.appendChild(createFinancialTextBox(Math.round(data[0][5]).toLocaleString(), "Liabilities", TextColors.Standard, tag));
			
			const now = data[0][0];
			var weekAgo = -1;
			var bestGuess = 86400000000;
			for(var i = 1; i < data.length; i++)
			{
				if(Math.abs(Math.abs(now - data[i][0]) - 7*86400000) < bestGuess)
				{
					bestGuess = Math.abs(Math.abs(now - data[i][0]) - 7*86400000);
					weekAgo = i;
				}
			}
			if(weekAgo != -1)
			{
				const profit = Math.round(data[0][7] - data[weekAgo][7]);
				const color = profit > 0 ? TextColors.Success : TextColors.Failure;
				tile.appendChild(createFinancialTextBox(profit.toLocaleString(), "Profit", color, tag));
			}
			
			const breakdownHeader = document.createElement("h2");
			breakdownHeader.classList.add(tag);
			breakdownHeader.title = "Financial Breakdown Header";
			breakdownHeader.textContent = "Inventory Breakdown";
			breakdownHeader.style.display = "block";
			breakdownHeader.style.fontSize = "12px";
			breakdownHeader.style.marginBottom = "0px";
			breakdownHeader.style.padding = "6px 4px 2px";
			breakdownHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
			tile.appendChild(breakdownHeader);
			
			const table = document.createElement("table");
			table.title = "Financial Breakdown Table";
			table.classList.add(tag);
			const head = document.createElement("thead");
			const headRow = document.createElement("tr");
			head.appendChild(headRow);
			table.appendChild(head);
			const headers = ["Name", "Fixed Assets", "Current Assets", "Total Assets"];
			for(let title of headers)
			{
				const header = document.createElement("th");
				header.title = title + " Header";
				header.textContent = title;
				headRow.appendChild(header);
			}
			
			const body = document.createElement("tbody");
			table.appendChild(body);
			
			const breakdown = JSON.parse(data[0][8]);
			breakdown.sort(financialSort);
			
			for(let rowData of breakdown)
			{
				const row = document.createElement("tr");
				body.appendChild(row);
				const firstTableElem = document.createElement("td");
				row.appendChild(firstTableElem);
				firstTableElem.appendChild(createTextSpan(rowData[0]));
				rowData.shift();
				for(let point of rowData)
				{
					const tableElem = document.createElement("td");
					row.appendChild(tableElem);
					tableElem.appendChild(createTextSpan(point.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})));
				}
			}
			
			tile.appendChild(table);
		}
    };
	var url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22fin%22&param=%22" + parameter + "%22";
	xhr.open("GET", url, true);
    xhr.send(null);
	
	return;
}

function financialSort(a, b)
{
	return a[3] < b[3] ? 1 : -1;
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
			//console.log(xhr.responseText);
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
