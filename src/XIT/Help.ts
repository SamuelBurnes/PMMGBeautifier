import {createTextSpan, clearChildren} from "../util";
import {Style} from "../Style"

export function Help(tile)
{
	clearChildren(tile)
	
	const featureHeader = document.createElement('h3');
    featureHeader.appendChild(document.createTextNode("Features"));
	featureHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(featureHeader);
	
	var table = document.createElement("table");
	tile.appendChild(table);
	
	var head = document.createElement("thead");
	var headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Name", "Description"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	var body = document.createElement("tbody");
	table.appendChild(body);
	
	createTableRow(body, ["LM Unit Prices", "Displays per unit prices on the local market."])
	createTableRow(body, ["LM Posting Unit Prices", "Displaces per unit prices when posting ads."])
	createTableRow(body, ["Contract Drafts", "Displays per unit prices when creating CONTD."])
	createTableRow(body, ["Order ETAs", "Displays the date and time when production orders are complete."])
	createTableRow(body, ["Flight ETAs", "Displays the arrival time when planning a flight."])
	createTableRow(body, ["Fleet ETAs", "Displays the arrival time of your fleet."])
	createTableRow(body, ["Queue Load", "Queue Percent Display."])
	createTableRow(body, ["Consumable Timers", "Adds the number of days of consumables left to WF buffers."])
	createTableRow(body, ["Notifications", "Shortens and color codes notifications."])
	createTableRow(body, ["Screen Unpack", "Unpacks the list of screens to the top bar."])
	createTableRow(body, ["Image Creator", "Loads images and GIFs into chats."])
	createTableRow(body, ["Inventory Organizer", "Allows for custom sorting of inventories."])
	createTableRow(body, ["Command Correcter", "Allows for planet names in stock commands (Montem, Promitor, etc.)"])
	createTableRow(body, ["Sidebar", "Allows the user to customize the left sidebar in XIT SETTINGS."])
	createTableRow(body, ["Pending Contracts", "Displays the name of the other party in pending contracts."])
	createTableRow(body, ["Compacted UI", "Minimizes unused portions of the UI"])
	createTableRow(body, ["Header Minimizer", "Allows minimizing contract and CX headers"])
	createTableRow(body, ["Color Schemes", "Changes the colors used on material icons. Set in XIT SETTINGS."])
	
	const xitHeader = document.createElement('h3');
    xitHeader.appendChild(document.createTextNode("XIT Commands"));
	xitHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(xitHeader);
	
	table = document.createElement("table");
	tile.appendChild(table);
	
	head = document.createElement("thead");
	headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Name", "Command", "Parameters", "Description"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	body = document.createElement("tbody");
	table.appendChild(body);
	
	createTableRow(body, ["Burn", "XIT BURN", "Planet", "Shows the number of days of consumables left."])
	createTableRow(body, ["Repairs", "XIT REPAIRS", "Planet (optional)", "Shows the materials to repair buildings."])
	createTableRow(body, ["Contracts", "XIT CONTRACTS", "None", "Shows pending contracts."])
	createTableRow(body, ["Finances", "XIT FIN", "None", "Shows financial information."])
	createTableRow(body, ["FIO Inventory", "XIT INV", "Username, Planet", "Shows the inventory of another FIO user."])
	createTableRow(body, ["Notes", "XIT NOTES", "Note Name (optional)", "Provides a text area to type a note in."])
	createTableRow(body, ["Checklists", "XIT CHECKLIST", "Checklist Name (optional)", "Provides checklist you can add items to."])
	createTableRow(body, ["Command Lists", "XIT LIST", "List Name (optional)", "Provides a customizable list of command links."])
	createTableRow(body, ["Settings", "XIT SETTINGS", "None", "Open PMMG settings."])
	createTableRow(body, ["Calculator", "XIT CALC", "None", "Provides an ingame calculator."])
	createTableRow(body, ["Chat", "XIT CHAT", "Planet", "Provides read-only access to a planet chat."])
	createTableRow(body, ["Debug", "XIT DEBUG", "None", "Debugging menu."])
	createTableRow(body, ["Start", "XIT START", "None", "First time user popup."])
	createTableRow(body, ["PrUN Planner", "XIT PLANNER", "Specific Page (optional)", "Links to PrUN Planner."])
	createTableRow(body, ["Wiki", "XIT WIKI", "None", "Links PrUN wiki."])
	createTableRow(body, ["FIO", "XIT FIO", "None", "Links to FIO Web."])
	createTableRow(body, ["Discord", "XIT DISCORD", "Server ID/Name, Channel ID", "Allows you to chat in Discord."])
	createTableRow(body, ["Sheets", "XIT SHEETS", "Sheet ID", "Connects to Google Sheets."])
	createTableRow(body, ["Prosperity", "XIT PROSPERITY", "None", "Accesses the Prosperity map tool."])
	createTableRow(body, ["PrUN", "XIT PRUN", "None", "Opens PrUN... in PrUN!"])
	
	const bugHeader = document.createElement('h3');
    bugHeader.appendChild(document.createTextNode("Common Issues"));
	bugHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(bugHeader);
	
	table = document.createElement("table");
	tile.appendChild(table);
	
	head = document.createElement("thead");
	headRow = document.createElement("tr");
	head.appendChild(headRow);
	table.appendChild(head);
	for(let title of ["Description", "Explanation", "Solution"])
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headRow.appendChild(header);
	}
	
	body = document.createElement("tbody");
	table.appendChild(body);
	
	createTableRow(body, ["Seeing green buffers", "PMMG is crashing", "Contact PiBoy314 on Discord"])
	createTableRow(body, ["Data not scanning in", "PMMG's listener is becoming detached.", "Close Prosperous Universe and reopen it. Check your data in XIT HEALTH."])
	createTableRow(body, ["Want to clear data", "N/A", "Click on extension icon in upper right, click \"Clear Settings\""])
	createTableRow(body, ["Something else", "N/A", "Ask on Discord, ping PiBoy314."])
	
	return;
}

function createTableRow(body, contents: string[])	// Text is an array of text values to be put in each column
{
	const row = document.createElement("tr");
	contents.forEach(text => {
		const td = document.createElement("td");
		td.appendChild(createTextSpan(text));
		row.appendChild(td);
		return;
	});
	body.appendChild(row);
	return;
}