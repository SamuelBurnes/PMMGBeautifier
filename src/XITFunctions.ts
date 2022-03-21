import {createTextSpan, createMaterialElement, createFinancialTextBox, findCorrespondingPlanet, createLink, showBuffer} from "./util";
import {TextColors} from "./Style";
import {MaterialNames} from "./GameProperties";

export const XITPreFunctions = {
	"INV": FIOInv_pre,
	"DISCORD": Discord_pre,
	"SHEETS": Sheets_pre,
	"PROSPERITY": Prosperity_pre,
	"PRUN": PRuN_pre,
	"SHEETTABLE": SheetTable_pre,
	"FIN": Fin_pre,
	"CHAT": Chat_pre,
	"BURN": EnhancedBurn_pre
}

export const XITBufferTitles = {
	"INV": "FIO INVENTORY",
	"DISCORD": "DISCORD SERVER",
	"SHEETS": "GOOGLE SHEETS",
	"PROSPERITY": "PROSPERITY",
	"PRUN": "PRUN-CEPTION",
	"SHEETTABLE": "GOOGLE SHEETS TABLE",
	"FIN": "FINANCIAL OVERVIEW",
	"CHAT": "CHAT",
	"BURN": "ENHANCED BURN"
}

const DiscordServers = {
	"UFO": ["855488309802172469", "855489711635431475"],
	"FIOC": ["807992640247300116", "808451512351195166"],
	"AHI": ["704907707634941982", "797157877324185650"],
	"PCT": ["667551433503014924", "667551433503014927"]
}

/**
 * Make an XML HTTP Request to a service and fill in the tile with that information
 * @param tile - The tile frame on which to show the output
 * @param parameters - The parameters from the XIT bufferDepth
 * @param callbackFunction - The function to call once the request is successful
 * @param url - The URL to be accessed
 * @param requestType - The type of HttpRequest (GET, POST, etc)
 * @param header - A dictionary with 2 key-value pairs "HeaderName": name of header, "HeaderValue": value of header
 * @param content - The content to send in the HttpRequest
 */
function XITWebRequest(tile, parameters, callbackFunction, url, requestType: string = "GET", header, content)
{
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		tile.textContent = "Error! Data Could Not Be Loaded! Timed Out!";
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			callbackFunction(tile, parameters, xhr.responseText);
			return;
		}
    };
    
	xhr.timeout = 10000;
	xhr.open(requestType, url, true);
	if(header != undefined){xhr.setRequestHeader(header[0], header[1]);}
	if(content != undefined)
	{
		xhr.send(content);
	}
	else
	{
		xhr.send(null);
	}
	return;
}

function clearChildren(elem)
{
	elem.textContent = "";
	while(elem.children[0])
	{
		elem.removeChild(elem.children[0]);
	}
	return;
}



export function Chat_pre(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
	}
	
	XITWebRequest(tile, parameters, Chat_post, "https://rest.fnar.net/chat/display/" + parameters[1], "GET", undefined, undefined);
	return;
}

function Chat_post(chatDiv, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null){return;}
	var chatData;
	try
	{
		chatData = JSON.parse(jsondata);
	}
	catch(SyntaxError)
	{
		chatDiv.textContent = "Error! Could Not Load Data!";
		return;
	}
	const titleDiv = document.createElement("div");
	titleDiv.textContent = parameters[1] + " Global Site Owners";
	titleDiv.style.paddingLeft = "4px";
	titleDiv.style.color = "#3fa2de";
	chatDiv.appendChild(titleDiv);
	
	chatData.forEach(chat => {
		const chatLine = document.createElement("div");
		chatLine.style.width = "100%";
		chatLine.style.display = "grid";
		chatLine.style.gridTemplateColumns = "minmax(8em, 1fr) minmax(8em, 4fr) minmax(8em, 15fr)";
		chatLine.style.gridColumnGap = "1px";
		chatLine.style.fontSize = "11px";
		chatLine.style.lineHeight = "1.1";
		chatDiv.appendChild(chatLine);
		
		const timeDateDiv = document.createElement("div");
		
		const dateDiv = document.createElement("div");
		timeDateDiv.appendChild(dateDiv);
		dateDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleDateString(undefined, {month: "2-digit", day: "2-digit"});
		dateDiv.style.color = "#444444";
		dateDiv.style.display = "inline-block";
		dateDiv.style.padding = "2px 5px";
		dateDiv.style.paddingRight = "0px";
		dateDiv.style.textAlign = "left";
		dateDiv.style.whiteSpace = "nowrap";
		dateDiv.style.overflow = "hidden";
		
		const timeDiv = document.createElement("div");
		timeDateDiv.appendChild(timeDiv);
		timeDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"});
		timeDiv.style.display = "inline-block";
		timeDiv.style.padding = "2px 5px";
		timeDiv.style.paddingLeft = "2px";
		timeDiv.style.textAlign = "left";
		timeDiv.style.whiteSpace = "nowrap";
		timeDiv.style.overflow = "hidden";
		timeDiv.style.color = "#999999";
		
		chatLine.appendChild(timeDateDiv);
		
		const nameDiv = document.createElement("div");
		chatLine.appendChild(nameDiv);
		nameDiv.style.display = "inline-block";
		nameDiv.style.textAlign = "right";
		nameDiv.style.color = "#999999";
		nameDiv.style.textOverflow = "ellipsis";
		nameDiv.style.padding = "2px 5px";
		nameDiv.style.borderRight = "1px solid #999999";
		
		const messageDiv = document.createElement("div");
		chatLine.appendChild(messageDiv);
		messageDiv.style.display = "inline-block";
		messageDiv.style.textAlign = "left";
		messageDiv.style.color = "#bbbbbb";
		messageDiv.style.wordBreak = "break-word";
		messageDiv.style.padding = "2px 5px";
		
		switch(chat["MessageType"])
		{
			case "CHAT":
				nameDiv.textContent = chat["UserName"];
				messageDiv.textContent = chat["MessageText"];
				break;
			case "JOINED":
				messageDiv.textContent = chat["UserName"] + " joined.";
				messageDiv.style.fontStyle = "italic";
				break;
			case "LEFT":
				messageDiv.textContent = chat["UserName"] + " left.";
				messageDiv.style.fontStyle = "italic";
				break;
		}
	});
}

export function Fin_pre(tile, parameters, apikey, webappID)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return apikey;
	}
	const url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22fin%22&param=%22" + parameters[1] + "%22";
	
	XITWebRequest(tile, parameters, Fin_post, url, "GET", undefined, undefined);
	return;
}

function Fin_post(tile, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null){return;}
	var data;
	try
	{
		data = JSON.parse(jsondata);
	}
	catch(SyntaxError)
	{
		tile.textContent = "Error! Could Not Load JSON Data!";
		return parameters;
	}
	const tileHeader = document.createElement("h2");
	tileHeader.title = "Financial Overview";
	tileHeader.textContent = "Key Figures";
	tileHeader.style.display = "block";
	tileHeader.style.fontSize = "12px";
	tileHeader.style.marginBottom = "0px";
	tileHeader.style.padding = "6px 4px 2px";
	tileHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
	tile.appendChild(tileHeader);
	
	tile.appendChild(createFinancialTextBox(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", TextColors.Standard));
	tile.appendChild(createFinancialTextBox(Math.round(data[0][2]).toLocaleString(), "Current Assets", TextColors.Standard));
	tile.appendChild(createFinancialTextBox(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", TextColors.Standard));
	tile.appendChild(createFinancialTextBox(Math.round(data[0][7]).toLocaleString(), "Equity", TextColors.Standard));
	tile.appendChild(createFinancialTextBox(Math.round(data[0][5]).toLocaleString(), "Liabilities", TextColors.Standard));
	
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
		tile.appendChild(createFinancialTextBox(profit.toLocaleString(), "Profit", color));
	}
	
	const breakdownHeader = document.createElement("h2");
	breakdownHeader.title = "Financial Breakdown";
	breakdownHeader.textContent = "Inventory Breakdown";
	breakdownHeader.style.display = "block";
	breakdownHeader.style.fontSize = "12px";
	breakdownHeader.style.marginBottom = "0px";
	breakdownHeader.style.padding = "6px 4px 2px";
	breakdownHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
	tile.appendChild(breakdownHeader);
	
	const table = document.createElement("table");
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	const headers = ["Name", "Fixed Assets", "Current Assets", "Total Assets"];
	for(let title of headers)
	{
		const header = document.createElement("th");
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

function financialSort(a, b)
{
	return a[3] < b[3] ? 1 : -1;
}

export function EnhancedBurn_pre(tile, parameters, apikey, webappID, username, fullBurn, burnSettings)
{
	clearChildren(tile);
	var burn;
	var unloaded = false;
	var planet;
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return [apikey, webappID];
	}
	else if(parameters.length == 3)
	{
		if(fullBurn[parameters[1]] != undefined && fullBurn[parameters[1]].length > 0){burn = fullBurn[parameters[1]];planet = parameters[2];}
		else{unloaded = true;tile.textContent = "Error! Third Party Burn not Supported Yet!";}
	}
	else
	{
		if(fullBurn[username] != undefined && fullBurn[username].length > 0){burn = fullBurn[username];planet = parameters[1];}
		else{unloaded = true;}
	}
	if(burnSettings.length == 0 || unloaded)
	{
		tile.textContent = "Loading Burn Data...";
		tile.id = "pmmg-reload";
		return;
	}
	
	
	
	// Burn data is non-empty
	tile.id = "pmmg-load-success";
	const planetBurn = findCorrespondingPlanet(planet, burn);	// The planet data to work with
	const settings = findCorrespondingPlanet(planet, burnSettings);
	if(planetBurn == undefined){tile.textContent = "Error! No Matching Planet!";return;}
	const table = document.createElement("table");
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Needs", "Usage", "Inv", "Burn"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	(headRow.firstChild as HTMLTableCellElement).colSpan = 2;
	
	const body = document.createElement("tbody");
	table.appendChild(body);
	
	var data = {};
	for(let cons of planetBurn["WorkforceConsumption"])
	{
		if(data[cons["MaterialTicker"]] == undefined)
		{
			data[cons["MaterialTicker"]] = cons["DailyAmount"];
			continue;
		}
		data[cons["MaterialTicker"]] += cons["DailyAmount"]; 
	}
	for(let cons of planetBurn["OrderConsumption"])
	{
		if(data[cons["MaterialTicker"]] == undefined)
		{
			data[cons["MaterialTicker"]] = cons["DailyAmount"];
			continue;
		}
		data[cons["MaterialTicker"]] += cons["DailyAmount"]; 
	}
	for(let cons of planetBurn["OrderProduction"])
	{
		if(data[cons["MaterialTicker"]] == undefined)
		{
			data[cons["MaterialTicker"]] = cons["DailyAmount"];
			data[cons["MaterialTicker"]] *= -1;
			continue;
		}
		data[cons["MaterialTicker"]] -= cons["DailyAmount"]; 
	}
	
	var burnMaterials = Object.keys(data);
	burnMaterials.sort(CategorySort);
	for(let material of burnMaterials)
	{
		if(data[material] <= 0){continue;}
		var included = true;
		if(settings != undefined)
		{
			settings["MaterialExclusions"].forEach((mat) => {
				if(mat["MaterialTicker"] == material){included = false;return;}
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
		consColumn.appendChild(createTextSpan(data[material].toLocaleString(undefined, {maximumFractionDigits: 1}) + " / Day"));
		row.appendChild(consColumn);
		
		const invColumn = document.createElement("td");
		var invAmount = 0;
		for(let inv of planetBurn["Inventory"])
		{
			if(inv["MaterialTicker"] == material)
			{
				invAmount = inv["MaterialAmount"];
				break;
			}
		}
		invColumn.appendChild(createTextSpan(invAmount.toLocaleString(undefined)));
		row.appendChild(invColumn);
		
		const burn = invAmount == 0 ? 0 : invAmount / data[material];
		const burnColumn = document.createElement("td");
		burnColumn.appendChild(createTextSpan(Math.floor(burn).toLocaleString(undefined, {maximumFractionDigits: 0}) + " Days"));
		if(burn <= 3)
		{
			burnColumn.style.backgroundColor = "#5a3130";
			burnColumn.style.color = "#c59c9b";
		}
		else if(burn <= 6)
		{
			burnColumn.style.backgroundColor = "#836e24";
			burnColumn.style.color = "#f6df94";
		}
		else
		{
			burnColumn.style.backgroundColor = "#345034";
			burnColumn.style.color = "#9fbb9f";
		}
		row.appendChild(burnColumn);
		
	}
	
	tile.appendChild(table);
	return;
}

function CategorySort(a, b)
{
	if(MaterialNames[a] == undefined || MaterialNames[b] == undefined){return 0;}
	return MaterialNames[a][1].localeCompare(MaterialNames[b][1]);
}

export function SheetTable_pre(tile, parameters, apikey, webappID)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return apikey;
	}
	var url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22" + parameters[1] + "%22";
	if(parameters[2] != undefined)
	{
		url += "&param=%22" + parameters[2] + "%22";
	}
	
	XITWebRequest(tile, parameters, SheetTable_post, url, "GET", undefined, undefined);
}

function SheetTable_post(tile, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null){return;}
	var data;
	try
	{
		data = JSON.parse(jsondata);
	}
	catch(SyntaxError)
	{
		tile.textContent = "Error! Could Not Load JSON Data!";
		return parameters;
	}
	
	const table = document.createElement("table");
	
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of data[0])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
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

export function PRuN_pre(tile)
{
	clearChildren(tile);
	const prun = document.createElement("iframe");
		prun.src = "https://apex.prosperousuniverse.com/#/";
		prun.width = "100%";
		prun.height = "100%";
		prun.style.borderWidth = "0";
	tile.appendChild(prun);
	return;
}

export function Prosperity_pre(tile)
{
	clearChildren(tile);
	const prosp = document.createElement("iframe");
		prosp.src = "https://prosperity-prun.netlify.app/";
		prosp.width = "100%";
		prosp.height = "100%";
		prosp.style.borderWidth = "0";
	tile.appendChild(prosp);
	return;
}

export function Sheets_pre(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return;
	}
	for(var i = 2; i < parameters.length; i++)
	{
		parameters[1] += "_" + parameters[i];
	}
	const sheet = document.createElement("iframe");
		sheet.src = "https://docs.google.com/spreadsheets/d/" + parameters[1] + "/edit?usp=sharing";
		sheet.width = "100%";
		sheet.height = "100%";
		sheet.style.borderWidth = "0";
	tile.appendChild(sheet);
	return;
}

export function Discord_pre(tile, parameters)
{
	clearChildren(tile);
	var serverID;
	var channelID;
	if(parameters.length == 2)
	{
		if(DiscordServers[parameters[1]] == undefined)
		{
			tile.textContent = "Error! Not Enough Parameters";
			return;
		}
		else
		{
			serverID = DiscordServers[parameters[1]][0];
			channelID = DiscordServers[parameters[1]][1];
		}
	}
	else if(parameters.length > 2)
	{
		serverID = parameters[1];
		channelID = parameters[2];
	}
	else
	{
		tile.textContent = "Error! Not Enough Parameters";
		return;
	}
	const discord = document.createElement("iframe");
		discord.src = "https://e.widgetbot.io/channels/" + serverID + "/" + channelID;
		discord.width = "100%";
		discord.height = "100%";
		discord.style.borderWidth = "0px";
				
	tile.appendChild(discord);
	return;
}

export function FIOInv_pre(tile, parameters, apikey)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return;
	}
	
	if(parameters.length == 2)
	{
		parameters.push(apikey);
		XITWebRequest(tile, parameters, FIOInv_getAllStorages, "https://rest.fnar.net/auth/group/" + parameters[1], "GET", ["Authorization", apikey], undefined);
	}
	else
	{
		for(var i = 3; i < parameters.length; i++)	// Allow for spaces in planet names
		{
			parameters[2] += " " + parameters[i];
		}
		
		XITWebRequest(tile, parameters, FIOInv_post, "https://rest.fnar.net/storage/" + parameters[1] + "/" + parameters[2], "GET", ["Authorization", apikey], undefined);
	}
	return;
}

function FIOInv_post(tile, parameters, jsondata)
{
	const tag = "FIO";
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
	
	
	header.appendChild(createTextSpan(parameters[2], tag));
	header.appendChild(document.createElement("br"));
	const userElem = createTextSpan(parameters[1], tag);
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
	volumeBar.style.width = "30px";
	volumeBar.style.height = "9px";
	volumeBar.style.border = "1px solid #999";
	volumeBar.style.margin = "1px 2px";
	volumeBar.max = 1;
	volumeBar.value = volumeUsed / volumeTotal;
	volumeLine.appendChild(volumeBar);
	volumeLine.appendChild(createTextSpan(volumeUsed.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " / " + volumeTotal.toLocaleString(undefined, {maximumFractionDigits: 0, minimumFractionDigits: 0}) + " m³", tag));
	
	header.appendChild(volumeLine);
	
	const weightLine = document.createElement("div");
	weightLine.id = "weight-line";
	weightLine.style.padding = "2px 8px";
	weightLine.style.color = "#999999";
	weightLine.appendChild(createTextSpan("Weight ", tag));
	const weightBar = document.createElement("progress");
	weightBar.id = "weight-bar";
	weightBar.classList.add(tag);
	weightBar.style.width = "30px";
	weightBar.style.height = "9px";
	weightBar.style.border = "1px solid #999";
	weightBar.style.margin = "1px 2px";
	weightBar.max = 1;
	weightBar.value = weightUsed / weightTotal;
	weightLine.appendChild(weightBar);
	weightLine.appendChild(createTextSpan(weightUsed.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " / " + weightTotal.toLocaleString(undefined, {maximumFractionDigits: 0, minimumFractionDigits: 0}) + " t", tag));
	
	header.appendChild(weightLine);
	inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
	for(let item of inventoryData["StorageItems"])
	{
		const mat = createMaterialElement(item["MaterialTicker"], tag, item["MaterialAmount"], true);
		
		if(mat != null){mat.addEventListener("click", function(){showBuffer("MAT " + item["MaterialTicker"]);});body.appendChild(mat);}
	}
	return;
}

function FIOInv_getAllStorages(tile, parameters, jsondata)
{
	var userJSON;
	try
	{
		userJSON = JSON.parse(jsondata);
	} catch(SyntaxError)
	{
		tile.textContent = "Error! Bad Data from FIO!";
	}
	var usernames = [] as string[];
	userJSON["GroupUsers"].forEach(user => {
		usernames.push(user["GroupUserName"]);
	});
	
	parameters.push(userJSON["GroupName"]);
	
	XITWebRequest(tile, parameters, FIOInv_allDisplay, "https://rest.fnar.net/fioweb/grouphub", "POST", ["Authorization", parameters[2]], JSON.stringify(usernames));
	return;
}

function FIOInv_allDisplay(tile, parameters, jsondata)
{
	var groupData = [];
	try
	{
		groupData = JSON.parse(jsondata);
	} catch(SyntaxError)
	{
		tile.textContent = "Error! Bad Data from FIO!";
	}
	const titleDiv = document.createElement("div");
	titleDiv.style.display = "block";
	titleDiv.style.fontWeight = "bold";
	titleDiv.style.fontSize = "16px";
	titleDiv.appendChild(createTextSpan(parameters[3] + " Inventories"));
	titleDiv.style.paddingLeft = "5px";
	tile.appendChild(titleDiv);
	const bodyDiv = document.createElement("div");
	tile.appendChild(bodyDiv);
	bodyDiv.style.width = "100%";
	bodyDiv.style.display = "flex";
	bodyDiv.style.flex = "1";
	bodyDiv.style.flexDirection = "row";
	bodyDiv.style.flexWrap = "wrap";
	bodyDiv.style.justifyContent = "left";
	bodyDiv.style.alignItems = "left";;
	groupData["PlayerModels"].forEach(player => {
		if(player["Locations"].length == 0){return;}
		const playerDiv = document.createElement("div");
		playerDiv.style.display = "block";
		playerDiv.style.padding = "5px";
		playerDiv.appendChild(createTextSpan(player["UserName"]));
		(playerDiv.firstChild as HTMLElement).style.fontWeight = "bold";
		player["Locations"].forEach(location => {
			playerDiv.appendChild(createLink(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"]));
		});
		
		bodyDiv.appendChild(playerDiv);
		
	});
	parameters.pop();
	parameters.pop();
	return;
}

function fioMatsAlphabetSort(a, b)
{
	if(a["MaterialCategory"] == null || b["MaterialCategory"] == null){return 0;}
	return a["MaterialCategory"].localeCompare(b["MaterialCategory"]);
}