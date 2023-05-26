import {clearChildren, getLocalStorage, setSettings, createLink, createTextSpan, showWarningDialog} from "../util";
import {CHECK_INDICATOR} from "./Checklists";

export function Notes(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length == 1)
	{
		// Display table of notes and links to open each or delete each
		getLocalStorage("PMMG-Notes", generateNotesTable, tile);
	}
	else
	{
		// Display the specified note
		const noteName = (parameters.slice(1)).join("_");
		const nameDiv = document.createElement("div");
		nameDiv.classList.add("title");
		nameDiv.textContent = noteName;
		tile.appendChild(nameDiv);
		
		const textboxWrapper = document.createElement("div");
		tile.appendChild(textboxWrapper);
		
		const textbox = document.createElement("textarea");
		textboxWrapper.appendChild(textbox);
		textboxWrapper.classList.add("notes-wrapper");
		getLocalStorage("PMMG-Notes", dispStoredNote, [noteName, textbox]);
		
	}
	return;
}

function generateNotesTable(result, tile)
{
	if(!tile){return;}
	
	if(!result["PMMG-Notes"])
	{
		result["PMMG-Notes"] = {};
	}
	
	const table = document.createElement("table");
	tile.appendChild(table);
	
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Name", "Length", "Delete"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	const body = document.createElement("tbody");
	table.appendChild(body);
	
	const names = Array.from(Object.keys(result["PMMG-Notes"]));
	
	var anyNotes = false;
	names.forEach(name => {
		if(name.substring(0, 7) == CHECK_INDICATOR){return;}
		anyNotes = true;
		const row = document.createElement("tr");
		const nameColumn = document.createElement("td");
		const lengthColumn = document.createElement("td");
		const deleteColumn = document.createElement("td");
		row.appendChild(nameColumn);
		row.appendChild(lengthColumn);
		row.appendChild(deleteColumn);
		
		body.appendChild(row);
		
		nameColumn.appendChild(createLink(name, "XIT NOTES_" + name));
		lengthColumn.appendChild(createTextSpan(result["PMMG-Notes"][name].length.toLocaleString() + " Character" + (result["PMMG-Notes"][name].length == 1 ? "" : "s")));
		
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.textContent = "DELETE";
		deleteColumn.appendChild(deleteButton);
		deleteButton.addEventListener("click", function(){
			showWarningDialog(tile, "Are you sure you want to delete " + name + "?", "Confirm", function()
			{
			getLocalStorage("PMMG-Notes", updateThenStoreNote, [name, ""]);
			row.style.display = "none";return;})
			
			return;
		});
		return;
	});
	if(!anyNotes)
	{
		var line = document.createElement("tr");
		const textColumn = document.createElement("td");
		textColumn.colSpan = 3;
		textColumn.textContent = "No Notes";
		line.appendChild(textColumn);
		body.appendChild(line);
	}
}

function updateThenStoreNote(result, params)
{
	if(!params || !params[0]){return;}
	const noteName = params[0];
	const noteText = params[1];
	if(!result["PMMG-Notes"])
	{
		result["PMMG-Notes"] = {};
	}
	
	result["PMMG-Notes"][noteName] = noteText.length == 0 ? undefined : noteText;
	setSettings(result);
	return;
}

function dispStoredNote(result, params)
{
	console.log(params)
	if(!params || !params[0] || !params[1]){return;}
	const noteName = params[0];
	const textbox = params[1];
	if(!result["PMMG-Notes"])
	{
		result["PMMG-Notes"] = {};
	}
	
	if(result["PMMG-Notes"][noteName])
	{
		textbox.value = result["PMMG-Notes"][noteName];
	}
	textbox.addEventListener("input", function()
	{
		getLocalStorage("PMMG-Notes", updateThenStoreNote, [noteName, textbox.value || ""]);
	});
	return;
}