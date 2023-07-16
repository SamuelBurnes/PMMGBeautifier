import {clearChildren, getLocalStorage, createTextSpan, createLink, setSettings, createTable, Popup} from "../util";
import {Style, TextColors} from "../Style";

export function Checklists(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length == 1)
	{
		// Display table of checks and links to open each or delete each
		getLocalStorage("PMMG-Checklists", generateCheckTable, tile);
	}
	else
	{
		// Display the specified check
		const checkName = (parameters.slice(1)).join("_");
		getLocalStorage("PMMG-Checklists", displayChecklist, [tile, checkName]);
		
	}
	return;
}

function generateCheckTable(result, tile)	// Create a list of all checklists
{
	if(!tile){return;}
	
	if(!result["PMMG-Checklists"])
	{
		result["PMMG-Checklists"] = {};
	}
	
	const tbody = createTable(tile, ["Name", "Incomplete", "Due Date", "Recurring", "Modify"]);
	
	if(Object.keys(result["PMMG-Checklists"]).length == 0)	// Make an empty line in the table if no checklists are present
	{
		const line = document.createElement("tr");
		const textColumn = document.createElement("td");
		textColumn.colSpan = 3;
		textColumn.textContent = "No Checklists";
		line.appendChild(textColumn);
		tbody.appendChild(line);
	}
	
	// For each checklist, draw the line in the table
	Object.keys(result["PMMG-Checklists"]).forEach(listName => {	// Should sort by duedate at some point...
		const row = document.createElement("tr");
		tbody.appendChild(row);
		
		// Make a name element that links to the checklist
		const nameElem = document.createElement("td");
		nameElem.appendChild(createLink(listName, "XIT CHECKLIST_" + listName));
		row.appendChild(nameElem);
		
		// Count incomplete and find most recent duedate
		var incomplete = 0;
		var duedate;
		
		result["PMMG-Checklists"][listName].forEach(condition => {
			if(!condition.completed)
			{
				incomplete++;
				if(condition.duedate && (!duedate || condition.duedate < duedate))	// If this is an earlier duedate than recorded, record it
				{
					duedate = condition.duedate;
				}
			}
		});
		
		// Add the incomplete and duedate columns
		const incompleteElem = document.createElement("td");
		incompleteElem.appendChild(createTextSpan(incomplete.toLocaleString(undefined, {"maximumFractionDigits": 0})));
		row.appendChild(incompleteElem);
		
		const duedateElem = document.createElement("td");
		duedateElem.appendChild(createTextSpan(duedate ? (new Date(duedate)).toLocaleDateString() : "--")); // -- or -? Best way to signify no value?
		if(duedate && duedate < Date.now()){duedateElem.style.color = TextColors.Failure;}
		row.appendChild(duedateElem);
		
		// Create recurring column
		const recurElem = document.createElement("td");
		recurElem.appendChild(createTextSpan(result["PMMG-Checklists"][listName]["recurPeriod"] ? result["PMMG-Checklists"][listName]["recurPeriod"] : "--"));
		row.appendChild(recurElem);
		
		// Create modify column
		const modifyElem = document.createElement("td");
		row.appendChild(modifyElem);
		
		
	});
	
	return [result, tile];
}

function displayChecklist(result, params)	// Create an individual checklist
{
	if(!params || !params[0] || !params[1]){return;}
	const tile = params[0];
	const name = params[1];
	
	if(!result["PMMG-Checklists"]){result["PMMG-Checklists"] = {};}
	
	// Create the title at the top of the checklist
	const nameDiv = document.createElement("div");
	nameDiv.appendChild(createTextSpan(name));
	nameDiv.classList.add("title");
	tile.appendChild(nameDiv);
	
	// The div that holds all the checklist items
	const conditionsDiv = document.createElement("div");
	conditionsDiv.style.margin = "5px";
	tile.appendChild(conditionsDiv);
	
	const checkItems = [] as CheckItem[];
	
	//result["PMMG-Checklists"] = {};
	//result["PMMG-Checklists"]["TEST"] = [];
	//result["PMMG-Checklists"]["TEST"].push({"completed": false, "name": "Supply 20 [[m:FE]] to [[p:Proxion]].", "duedate": 1689782866000});
	//result["PMMG-Checklists"]["TEST"].push({"completed": false, "name": "Normal Text", "duedate": 1589782866000, "id": "b75df73g", "ischild": true});
	//result["PMMG-Checklists"]["TEST"].push({"completed": false, "name": "Normal Text"});
	
	if(result["PMMG-Checklists"][name])	// Checklist already exists
	{
		result["PMMG-Checklists"][name].forEach(item => {
			const checkItem = new CheckItem(item, name, checkItems);
			checkItems.push(checkItem);
			conditionsDiv.appendChild(checkItem.item);
		});
	}
	else	// New checklist or no items on it
	{
		conditionsDiv.appendChild(createTextSpan("No items on checklist."));
	}
	
	// Options underneath checklist
	const optionsDiv = document.createElement("div");
	optionsDiv.style.marginTop = "5px";
	tile.appendChild(optionsDiv);
	// Button to complete all checklist items
	const completeAll = document.createElement("button");
	completeAll.classList.add(...Style.Button);
	completeAll.classList.add(...Style.ButtonSuccess);
	optionsDiv.appendChild(completeAll);
	completeAll.style.marginLeft = "5px";
	completeAll.style.marginBottom = "2px";
	completeAll.textContent = "COMPLETE ALL";
	
	// When "complete all" is clicked, for each item, if it isn't completed, click it to complete it
	completeAll.addEventListener("click", function() {	
		checkItems.forEach(item => {
			if(!item.condition.completed)
			{
				item.changeCheckedState();
			}
		});
		getLocalStorage("PMMG-Checklists", storeChecklistState, [name, checkItems]);
	});
	
	// Button to delete all checked checklist items
	const deleteAll = document.createElement("button");
	deleteAll.classList.add(...Style.Button);
	deleteAll.classList.add(...Style.ButtonDanger);
	optionsDiv.appendChild(deleteAll);
	deleteAll.style.marginLeft = "2px";
	deleteAll.style.marginBottom = "2px";
	deleteAll.textContent = "DELETE ALL COMPLETED";
	
	const addButton = document.createElement("button");
	addButton.classList.add(...Style.Button);
	addButton.classList.add(...Style.ButtonPrimary);
	tile.appendChild(addButton);
	addButton.style.marginLeft = "5px";
	addButton.textContent = "ADD";
	
	addButton.addEventListener("click", function() {
		const popup = new Popup(tile, "Checklist Item Editor");
	});
	
	return [result];
}

// Store checklist state in settings (pass into getLocalStorage function)
function storeChecklistState(checklistResult, params)
{
	if(!params[0] || !params[1]){return;}
	const checklistName = params[0];
	const checkItems = params[1];
	
	if(!checklistResult["PMMG-Checklists"]){checklistResult["PMMG-Checklists"] = {};}
	
	// Clear whatever was stored.
	checklistResult["PMMG-Checklists"][checklistName] = [];
	
	// Parse current state of checklist items and add to checklist result
	checkItems.forEach(item => {
		checklistResult["PMMG-Checklists"][checklistName].push(item.condition);
	});
	
	setSettings(checklistResult);
}

// Create the name text (with hyperlinks)
function createName(name)
{
	name = name || "";
	
	const matches = [...name.matchAll(/\[\[([a-zA-Z]):([^:\]]+)\]\]/g)];
	
	const nameElem = document.createElement("span");
	var nameCopy = name;
	var cut = 0;
	matches.forEach(match => {
		
		nameElem.appendChild(createTextSpan(nameCopy.substring(0, match.index - cut)));
		var command;
		switch(match[1])
		{
			case "m":
				command = "MAT " + match[2];
				break;
			case "p":
				command = "PLI " + match[2];
				break;
			default:
				nameElem.appendChild(createTextSpan(match[0]));
		}
		
		if(command)
		{
			const linkElem = createLink(match[2], command);
			linkElem.style.display = "inline";
			nameElem.appendChild(linkElem);
		}
		
		nameCopy = nameCopy.slice(match.index + match[0].length - cut);
		cut = match.index + match[0].length;
		
	});
	nameElem.appendChild(createTextSpan(nameCopy));
	
	return nameElem;
}

const unfilledCircle = `<svg width="15" height="15" viewBox = "10 10 80 80">
  <path d="M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20 Z" fill="#f7a600" stroke="none" stroke-width="0" />
</svg>`

const filledCircle = `<svg width="15" height="15" viewBox = "10 10 80 80">
  <path d="M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20 Z" fill="#f7a600" stroke="none" stroke-width="0" /><circle cx="50" cy="50" r="20" fill="#f7a600" stroke="none" stroke-width="2" />
</svg>`

//function createNewItemInterface(tile, result, listName, checklistItems: CheckItem[], currentItem: CheckItem)
//{
	
//}

class CheckItem {
	public condition;
	public item;
	public checkCircle;
	public checkText;
	public dateElem;
	
	public checklistName;
	//private allChecklistItems;
	
	constructor(condition, checklistName, allChecklistItems)
	{
		this.condition = condition;	// The dictionary containing info on the checklist item
		this.checklistName = checklistName;	// The name of the checklist this item is a part of
		//this.allChecklistItems = allChecklistItems; // The array of all checklist items. Used for setting into settings.
		
		this.item = document.createElement("div");
		this.item.classList.add("check-item");
		this.item.style.marginTop = "5px";
		this.item.style.display = "flex";
		this.item.style.alignItems = "center";
		
		if(condition.ischild)
		{
			const spacerDiv = document.createElement("div");
			spacerDiv.style.width = "15px";
			this.item.appendChild(spacerDiv);
		}
		
		this.checkCircle = document.createElement("div");
		this.item.appendChild(this.checkCircle);
		
		this.checkCircle.innerHTML = condition.completed ? filledCircle : unfilledCircle;
		this.checkCircle.style.marginRight = "5px";
		this.checkCircle.style.cursor = "pointer";
		
		const mainTextDiv = document.createElement("div");
		mainTextDiv.style.display = "flex";
		mainTextDiv.style.flexDirection = "column";
		
		this.checkText = createName(condition.name);
		
		mainTextDiv.appendChild(this.checkText);
		
		if(condition.duedate)
		{
			this.dateElem = createTextSpan((new Date(condition.duedate)).toLocaleDateString());
			this.dateElem.style.color = condition.duedate < Date.now() && !condition.completed ? TextColors.Failure : "#787878";
			mainTextDiv.appendChild(this.dateElem);
		}
		
		this.item.appendChild(mainTextDiv);
		
		const thisObject = this;
		
		this.checkCircle.addEventListener("click", function() {
			thisObject.changeCheckedState()
			getLocalStorage("PMMG-Checklists", storeChecklistState, [checklistName, allChecklistItems]);
		});
	}
	
	changeCheckedState()
	{
		this.condition.completed = !this.condition.completed;
		this.checkCircle.innerHTML = this.condition.completed ? filledCircle : unfilledCircle;
		
		if(this.dateElem)
		{
			(this.dateElem as HTMLElement).style.color = this.condition.duedate < Date.now() && !this.condition.completed ? "#d9534f" : "#787878";
		}
	}
}