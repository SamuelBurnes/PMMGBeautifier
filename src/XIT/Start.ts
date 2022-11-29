import {createTextSpan, clearChildren, createLink} from "../util";

export function Start(tile)
{
	clearChildren(tile);
	tile.style.fontSize = "12px";
	tile.style.paddingLeft = "2px";
	const welcome = createTextSpan("Thank you for using PMMG Extended!");
	welcome.classList.add("title");
	welcome.style.paddingLeft = "0";
	tile.appendChild(welcome);
	tile.appendChild(createTextSpan("This is a short tutorial on how to get the most out of the extension."));
	const websiteLinkDiv = document.createElement("div");
	websiteLinkDiv.style.paddingTop = "20px";
	tile.appendChild(websiteLinkDiv);
	websiteLinkDiv.appendChild(createTextSpan("Details on what PMMG offers can be found here: "));
	const websiteLink = document.createElement("a");
	websiteLink.href = "https://sites.google.com/view/pmmgextended/home?authuser=0";
	websiteLink.target = "_blank";
	websiteLink.style.display = "inline-block";
	websiteLink.classList.add("link");
	websiteLink.textContent = "PMMG Extended";
	websiteLinkDiv.appendChild(websiteLink);
	
	const settingsDiv = document.createElement("div");
	tile.appendChild(settingsDiv);
	settingsDiv.style.paddingTop = "20px";
	settingsDiv.appendChild(createTextSpan("Start by opening a new buffer and entering "));
	const settingsLink = createLink("XIT SETTINGS", "XIT SETTINGS");
	settingsLink.style.display = "inline-block";
	settingsDiv.appendChild(settingsLink);
	
	const fioDiv = document.createElement("div");
	tile.appendChild(fioDiv);
	fioDiv.style.paddingTop = "20px";
	fioDiv.appendChild(createTextSpan("FIO is a browser extension that gathers data from your game. PMMG Extended uses that data to display useful information. You can learn more about installing FIO here: "));
	const fioLink = document.createElement("a");
	fioLink.href = "https://fio.fnar.net/";
	fioLink.target = "_blank";
	fioLink.style.display = "inline-block";
	fioLink.classList.add("link");
	fioLink.textContent = "FIO Website";
	fioDiv.appendChild(fioLink);
	
	const fioDiv2 = document.createElement("div");
	tile.appendChild(fioDiv2);
	fioDiv2.style.paddingTop = "20px";
	fioDiv2.appendChild(createTextSpan("If you already have a FIO account, add your username and API Key to the text boxes on XIT SETTINGS. You can generate an API Key "));
	const fioLink2 = document.createElement("a");
	fioLink2.href = "https://fio.fnar.net/settings";
	fioLink2.target = "_blank";
	fioLink2.style.display = "inline-block";
	fioLink2.classList.add("link");
	fioLink2.textContent = "here.";
	fioDiv2.appendChild(fioLink2);
	
	const webAppDiv = document.createElement("div");
	tile.appendChild(webAppDiv);
	webAppDiv.style.paddingTop = "20px";
	webAppDiv.style.paddingBottom = "20px";
	webAppDiv.appendChild(createTextSpan("If your corporation has a web app (AHI, FOWL, KAWA), enter that in the Web App ID field."));
	
	tile.appendChild(createTextSpan("You can explore other settings to enable or disable features, change the color scheme, and customize the left sidebar. Contact PiBoy314 in game or on Discord if you have questions."));
	return;
}
