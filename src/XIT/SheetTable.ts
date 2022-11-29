import {createTextSpan, clearChildren, XITWebRequest} from "../util";

export function SheetTable_pre(tile, parameters, result)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return;
	}
	if(result["PMMGExtended"]["webappid"] == undefined){return;}
	var url = "https://script.google.com/macros/s/" + result["PMMGExtended"]["webappid"] + "/exec?mode=%22" + parameters[1] + "%22";
	if(parameters[2] != undefined)
	{
		url += "&param=%22" + parameters[2] + "%22";
	}
	
	XITWebRequest(tile, parameters, SheetTable_post, url, "GET", undefined, undefined);
	return;
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
	return;
}
