import {clearChildren, getLocalStorage, setSettings, createLink, createTextSpan} from "../util";
import {Style} from "../Style";

export const CHECK_INDICATOR = "$$CHECK";

export function Checklists(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length == 1)
	{
		// Display table of checks and links to open each or delete each
		getLocalStorage("PMMG-Notes", generateCheckTable, tile);
	}
	else
	{
		// Display the specified check
		const checkName = (parameters.slice(1)).join("_");
		const nameDiv = document.createElement("div");
		nameDiv.classList.add("title");
		nameDiv.textContent = checkName;
		tile.appendChild(nameDiv);
		
		const checkWrapper = document.createElement("div");
		tile.appendChild(checkWrapper);
		checkWrapper.classList.add("check-wrapper");
		
		getLocalStorage("PMMG-Notes", dispStoredCheck, [checkName, tile]);
		
	}
	return;
}

function generateCheckTable(result, tile)
{
	console.log(result);
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
	for(let title of ["Name", "Incomplete Items", "Total Items", "Delete"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	const body = document.createElement("tbody");
	table.appendChild(body);
	
	const names = Array.from(Object.keys(result["PMMG-Notes"]));
	
	var anyChecklists = false;
	names.forEach(name => {
		if(name.substring(0, 7) != CHECK_INDICATOR){return;}
		anyChecklists = true;
		const row = document.createElement("tr");
		const nameColumn = document.createElement("td");
		const incompleteColumn = document.createElement("td");
		const totalColumn = document.createElement("td");
		const deleteColumn = document.createElement("td");
		row.appendChild(nameColumn);
		row.appendChild(incompleteColumn);
		row.appendChild(totalColumn);
		row.appendChild(deleteColumn);
		
		body.appendChild(row);
		
		nameColumn.appendChild(createLink(name.substring(7), "XIT CHECK_" + name.substring(7)));
		
		incompleteColumn.appendChild(createTextSpan(result["PMMG-Notes"][name].filter((obj) => (!obj[1])).length));
		totalColumn.appendChild(createTextSpan(result["PMMG-Notes"][name].length));
		
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.textContent = "DELETE";
		deleteColumn.appendChild(deleteButton);
		deleteButton.addEventListener("click", function(){
			getLocalStorage("PMMG-Notes", updateThenStoreCheck, [name.substring(7), []]);
			row.style.display = "none";
			return;
		});
		return;
	});
	if(!anyChecklists)
	{
		var line = document.createElement("tr");
		const textColumn = document.createElement("td");
		textColumn.colSpan = 4;
		textColumn.textContent = "No Checklists";
		line.appendChild(textColumn);
		body.appendChild(line);
	}
	return;
}

function updateThenStoreCheck(result, params)
{
	if(!params || !params[0]){return;}
	const checkName = params[0];
	const checkText = params[1];
	if(!result["PMMG-Notes"])
	{
		result["PMMG-Notes"] = {};
	}
	result["PMMG-Notes"][CHECK_INDICATOR + checkName] = checkText.length == 0 ? undefined : checkText;
	setSettings(result);
	return;
}

function dispStoredCheck(result, params)
{
	if(!params || !params[0] || !params[1]){return;}
	const checkName = params[0];
	const tile = params[1];
	const checkWrapper = tile.children[1];	
	if(!checkWrapper){return;}
	
	if(!result["PMMG-Notes"])
	{
		result["PMMG-Notes"] = {};
	}
	
	if(result["PMMG-Notes"][CHECK_INDICATOR + checkName])
	{
		// Construct Checklist from Stored Data
		result["PMMG-Notes"][CHECK_INDICATOR + checkName].forEach(check => {createCheckRow(checkWrapper, result, checkName, check[0], check[1]);});
	}
	
	const addButton = document.createElement("button");
	addButton.textContent = "+";
	checkWrapper.appendChild(addButton);
	addButton.classList.add(...Style.Button);
    addButton.classList.add(...Style.ButtonSuccess);
	
	addButton.addEventListener("click", function() {
		const overlapDiv = document.createElement("div");
		overlapDiv.classList.add(...Style.OverlappingDiv);
		const greyStripes = document.createElement("div");
		greyStripes.classList.add(...Style.GreyStripes);
		overlapDiv.appendChild(greyStripes);
		tile.insertBefore(overlapDiv, tile.firstChild);
		
		
		
		greyStripes.appendChild(makeSpacer(tile, overlapDiv));
		const addInterfaceWrapper = document.createElement("div");
		addInterfaceWrapper.classList.add(...Style.CenterInterface);
		greyStripes.appendChild(addInterfaceWrapper);
		const addInterface = document.createElement("div");
		addInterface.classList.add("NLOrH7hF5fbKIesqW3uSkA==");
		addInterfaceWrapper.appendChild(addInterface);
		const addHeader = document.createElement('h3');
		addHeader.appendChild(document.createTextNode("Checklist Item Editor"));
		addHeader.classList.add(...Style.SidebarSectionHead);
		addInterface.appendChild(addHeader);
		addHeader.style.margin = "0.5em 0 0.5em";
		
		const form = document.createElement("div");
		addInterface.appendChild(form);
		const nameRow = document.createElement("div");
		nameRow.classList.add(...Style.FormRow);
		form.appendChild(nameRow);
		const nameLabel = document.createElement("label");
		nameLabel.textContent = "Name";
		nameLabel.classList.add(...Style.FormLabel);
		nameRow.appendChild(nameLabel);
		const nameInputDiv = document.createElement("div");
		nameInputDiv.classList.add(...Style.FormInput);
		nameRow.appendChild(nameInputDiv);
		const nameInput = document.createElement("input");
		nameInputDiv.appendChild(nameInput);
		
		const saveRow = document.createElement("div");
		saveRow.classList.add(...Style.FormSaveRow);
		form.appendChild(saveRow);
		const saveLabel = document.createElement("label");
		saveLabel.textContent = "CMD";
		saveLabel.classList.add(...Style.FormSaveLabel);
		saveRow.appendChild(saveLabel);
		const saveInputDiv = document.createElement("div");
		saveInputDiv.classList.add(...Style.FormSaveInput);
		saveRow.appendChild(saveInputDiv);
		const saveButton = document.createElement("button");
		saveButton.textContent = "SAVE";
		saveButton.classList.add(...Style.Button);
		saveButton.classList.add(...Style.ButtonPrimary);
		saveInputDiv.appendChild(saveButton);
		
		saveButton.addEventListener("click", function() {
			const itemName = nameInput.value || "";
			tile.removeChild(overlapDiv);
			if(result["PMMG-Notes"][CHECK_INDICATOR + checkName])
			{
				result["PMMG-Notes"][CHECK_INDICATOR + checkName].push([itemName, false]);
			}
			else
			{
				result["PMMG-Notes"][CHECK_INDICATOR + checkName] = [[itemName, false]];
			}
			getLocalStorage("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
			
			return;
		});
		
		greyStripes.appendChild(makeSpacer(tile, overlapDiv));
	});
	
	
	return;
}

// tile: Checkbox Wrapper Element
// checkName: Name of the checklist
// name: Name of the item in the checklist
// checked: Whether that item is checked
function createCheckRow(tile, result, checkName, name, checked)
{
	const checkRow = document.createElement("div");
	checkRow.style.display = "flex";
	checkRow.style.alignItems = "center";
	const checkCircle = document.createElement("div");
	checkCircle.textContent = checked ? '●' : '○';
	checkRow.appendChild(checkCircle);
	checkCircle.style.color = "#f7a600";
	checkCircle.style.fontSize = "45px";
	checkCircle.style.cursor = "pointer";
	
	tile.appendChild(checkRow);
	const checkText = createTextSpan(name);
	checkText.style.paddingTop = "7px";
	checkRow.appendChild(checkText);
	
	checkCircle.addEventListener("click", function(){
		checked = !checked;
		checkCircle.textContent = checked ? '●' : '○';
		result["PMMG-Notes"][CHECK_INDICATOR + checkName].forEach(possibleMatch => {
			if(possibleMatch[0] == name)
			{
				possibleMatch[1] = checked;
			}
		});
		getLocalStorage("PMMG-Notes", updateThenStoreCheck, result["PMMG-Notes"][CHECK_INDICATOR + checkName]);
	});
	
	
	return;
}

function makeSpacer(tile, toRemove)
{
	const spacer = document.createElement("div");
	spacer.classList.add(...Style.Spacer);
	spacer.addEventListener("click", function() {
			tile.removeChild(toRemove);
			return;
		});
	return spacer;
}