import {clearChildren, createTextSpan, setSettings} from "../util";
import {Style} from "../Style";

// Create the interface for adding and editing sorting options
export function Sort(tile, parameters, result)
{
	clearChildren(tile);
	if(!parameters[1])	// Require a planet name be appended to the command
	{
		tile.appendChild(createTextSpan("Add a planet name to the end of the command!"));
		return;
	}
	
	if(!result["PMMGExtended"]["sorting"])	// Initialize the stored sorting settings if they don't exist
	{
		result["PMMGExtended"]["sorting"] = [];
	}
	
	const table = document.createElement("table");	// Create a table of all current sorting settings
	tile.appendChild(table);
	
	const head = document.createElement("thead");
	const headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Abbreviation", "Categories", "Modify"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	const body = document.createElement("tbody");
	table.appendChild(body);
	
	const addButton = document.createElement("button");	// Create a button to add a new sorting configuration
	addButton.textContent = "Add New";
	tile.appendChild(addButton);
	addButton.style.marginLeft = "5px";
	addButton.style.marginTop = "5px";
	addButton.classList.add(...Style.Button);
    addButton.classList.add(...Style.ButtonSuccess);
	
	addButton.addEventListener("click", function() {	// On click, create the interface for adding a new sorting configuration
		createAddInterface(tile, result, parameters);
	});
	
	var isSorting = false;	// Whether any sorting options exist
	result["PMMGExtended"]["sorting"].forEach(settings => {	// For each stored sorting option, test to only show the ones corresponding to the current planet
		if(!settings[0] || !settings[1] || !settings[2]){return;}
		if(settings[1].toUpperCase() != parameters[1].toUpperCase()){return;}
		isSorting = true;
		const row = document.createElement("tr");	// Create the table row
		const nameColumn = document.createElement("td");
		const catColumn = document.createElement("td");
		const modifyColumn = document.createElement("td");
		row.appendChild(nameColumn);
		row.appendChild(catColumn);
		row.appendChild(modifyColumn);
		
		body.appendChild(row);
		
		nameColumn.appendChild(createTextSpan(settings[0]));
		var categories = ""	// Create a list of categories by concatenating the category names with ", " in between
		settings[2].forEach(category => {
			if(!category[0]){return;}
			categories += category[0] + ", ";
			return;
		});
		categories = categories.slice(0, -2);	// Remove the last ", "
		catColumn.appendChild(createTextSpan(categories));
		
		modifyColumn.appendChild(createSmallButton("edit", createAddInterface, [tile, result, parameters, settings]));	// Create the edit button
		modifyColumn.appendChild(createSmallButton("delete", function(result, row, settings){	// Create the delete button
			
			for(var i = 0; i < result["PMMGExtended"]["sorting"].length; i++)	// For each stored setting, find the one corresponding to the current row
			{
				if(result["PMMGExtended"]["sorting"][i] == settings)
				{
					result["PMMGExtended"]["sorting"].splice(i, 1);	// Remove it and hide the row
					row.style.display = "none";
					setSettings(result);
					break;
				}
			}
		}, [result, row, settings]));
		return;
	});
	
	if(!isSorting)	// Append a message talking about there being no sorting options if none exist
	{
		var line = document.createElement("tr");
		const textColumn = document.createElement("td");
		textColumn.colSpan = 3;
		textColumn.textContent = "No Sorting Options";
		line.appendChild(textColumn);
		body.appendChild(line);
	}
	
	return;
}

// Create an empty spacer for the editing interface (should move to util)
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

// Create an input row for the editing interface (should move to util)
function createInputRow(label, text: string = "")
{
	const inputRow = document.createElement("div");
	inputRow.classList.add(...Style.FormRow);
	const inputLabel = document.createElement("label");
	inputLabel.textContent = label;
	inputLabel.classList.add(...Style.FormLabel);
	inputRow.appendChild(inputLabel);
	const inputInputDiv = document.createElement("div");
	inputInputDiv.classList.add(...Style.FormInput);
	inputRow.appendChild(inputInputDiv);
	const inputInput = document.createElement("input");
	inputInputDiv.appendChild(inputInput);
	inputInput.value = text;
	return inputRow;
}

// Gets the value of the text box in a row in the add interface (should move to util)
function getValueOfRow(row)
{
	if(!row || !row.children[1] || !row.children[1].firstChild)
	{
		return "";
	}
	else
	{
		return row.children[1].firstChild.value || "";
	}
}

// Creates a small button as in LMOS and CXOS view/delete buttons
function createSmallButton(label, clickFunction, parameters)
{
	const button = document.createElement("button");
	button.textContent = label;
	button.classList.add(...Style.SmallButton);
	button.addEventListener("click", function(){clickFunction(...parameters);});
	return button;
}

// Creates the interface to add a new sorting option
function createAddInterface(tile, result, parameters, settings: any[] = [])
{
	const prefilled = settings.length != 0;
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
	addHeader.appendChild(document.createTextNode("Sorting Options Editor"));
	addHeader.classList.add(...Style.SidebarSectionHead);
	addInterface.appendChild(addHeader);
	addHeader.style.margin = "0.5em 0 0.5em";

	const form = document.createElement("div");
	addInterface.appendChild(form);

	form.appendChild(createInputRow("Abbreviation", prefilled ? settings[0] : ""));
	
	if(prefilled)
	{
		for(var i = 0; i < settings[2].length; i++)
		{
			form.appendChild(createInputRow("Category " + (i + 1) + " Name", prefilled ? settings[2][i][0] : ""));
			form.appendChild(createInputRow("Category " + (i + 1) + " MATs", prefilled ? settings[2][i][1].join(", ") : ""));
		}
	}
	else
	{
		form.appendChild(createInputRow("Category 1 Name"));
		form.appendChild(createInputRow("Category 1 MATs"));
	}
	const addRow = document.createElement("div");
	addRow.classList.add(...Style.FormSaveRow);
	form.appendChild(addRow);
	const addLabel = document.createElement("label");
	addLabel.textContent = "Add Category";
	addLabel.classList.add(...Style.FormSaveLabel);
	addRow.appendChild(addLabel);
	const addInputDiv = document.createElement("div");
	addInputDiv.classList.add(...Style.FormSaveInput);
	addRow.appendChild(addInputDiv);
	const addButton = document.createElement("button");
	addButton.textContent = "ADD CATEGORY";
	addButton.classList.add(...Style.Button);
	addButton.classList.add(...Style.ButtonPrimary);
	addInputDiv.appendChild(addButton);

	addButton.addEventListener("click", function() {
		const catNumber = (form.children.length - 1) / 2;
		form.insertBefore(createInputRow("Category " + catNumber + " Name"), form.children[form.children.length - 2]);
		form.insertBefore(createInputRow("Category " + catNumber + " MATs"), form.children[form.children.length - 2]);
	});

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
		const itemAbbreviation = getValueOfRow(form.firstChild);
		
		const sortingInfo = [] as any[];
		for(var i = 1; i < form.children.length - 2; i += 2)
		{
			if(!form.children[i] || !form.children[i + 1])
			{
				break;
			}
			if(getValueOfRow(form.children[i]) == "" || getValueOfRow(form.children[i + 1]) == ""){continue;}
			sortingInfo.push([getValueOfRow(form.children[i]), getValueOfRow(form.children[i + 1])	.replace(/ /g, "").split(",")]);
			
		}
		
		tile.removeChild(overlapDiv);
		if(!itemAbbreviation){return;}
		if(prefilled)
		{
			for(var i = 0; i < result["PMMGExtended"]["sorting"].length; i++)
			{
				if(result["PMMGExtended"]["sorting"][i] == settings)
				{
					result["PMMGExtended"]["sorting"][i] = [itemAbbreviation, parameters[1], sortingInfo];
					break;
				}
			}
		}
		else
		{
			result["PMMGExtended"]["sorting"].push([itemAbbreviation, parameters[1], sortingInfo]);
		}
		setSettings(result);
		Sort(tile, parameters, result);
		
		return;
	});

	greyStripes.appendChild(makeSpacer(tile, overlapDiv));
}