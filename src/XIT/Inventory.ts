import {clearChildren, createTextSpan, createMaterialElement, createLink, XITWebRequest} from "../util";

export function FIOInv_pre(tile, parameters, result)
{
	clearChildren(tile);
	const apikey = result["PMMGExtended"]["apikey"];
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
	header.classList.add("inv-header");
	header.id = "header";
	header.classList.add(tag);
	
	tile.appendChild(header);
	const body = document.createElement("div");
	tile.appendChild(body);
	body.classList.add(tag);
	body.classList.add("inv-body");
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
	volumeBar.classList.add("progress-bar");
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
	weightBar.classList.add("progress-bar");
	weightBar.max = 1;
	weightBar.value = weightUsed / weightTotal;
	weightLine.appendChild(weightBar);
	weightLine.appendChild(createTextSpan(weightUsed.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " / " + weightTotal.toLocaleString(undefined, {maximumFractionDigits: 0, minimumFractionDigits: 0}) + " t", tag));
	
	header.appendChild(weightLine);
	inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
	for(let item of inventoryData["StorageItems"])
	{
		const mat = createMaterialElement(item["MaterialTicker"], tag, item["MaterialAmount"], true);
		if(mat)
		{body.appendChild(mat);}
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
		return;
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
	titleDiv.classList.add("title");
	titleDiv.appendChild(createTextSpan(parameters[3] + " Inventories"));
	tile.appendChild(titleDiv);
	const bodyDiv = document.createElement("div");
	tile.appendChild(bodyDiv);
	bodyDiv.classList.add("flex-table");
	
	if(groupData["PlayerModels"] == undefined){tile.textContent = "Error! Bad Data!"; return;}
	
	groupData["PlayerModels"].forEach(player => {
		if(player["Locations"].length == 0){return;}
		const playerDiv = document.createElement("div");
		playerDiv.classList.add("list");
		playerDiv.appendChild(createTextSpan(player["UserName"]));
		(playerDiv.firstChild as HTMLElement).style.fontWeight = "bold";
		player["Locations"].forEach(location => {
			playerDiv.appendChild(createLink(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"].replace(/ /, "_")));
			return;
		});
		
		bodyDiv.appendChild(playerDiv);
		return;
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