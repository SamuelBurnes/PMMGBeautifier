import {Selector} from "./Selector";
import {MaterialNames, PlanetNames, SystemNames} from "./GameProperties";
import {Style, CategoryColors, WithStyles} from "./Style";

// Download a file containing fileData with fileName
export function downloadFile(fileData, fileName, isJSON: boolean = true)
{
	const blob = new Blob([isJSON ? JSON.stringify(fileData) : fileData], {type: "text/plain"});
	const url = URL.createObjectURL(blob);
	
	const urlElement = document.createElement("a");
	urlElement.setAttribute("download", fileName);
	urlElement.href = url;
	urlElement.setAttribute("target", "_blank");
	urlElement.click();
	URL.revokeObjectURL(url);
	return;
}

// Creates an HTML element from an HTML string
export function createNode(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild as HTMLElement;
}

// Create an option element for a select list
export function createSelectOption(optionLabel, optionValue) 
{
	const option = document.createElement("option");
	option.value = optionValue;
	option.textContent = optionLabel;
	return option;
}

/**
 * parse a duration into an actual ETA string
 * @param duration
 * @returns {string}
 */
export function convertDurationToETA(parsedSeconds) {
  const eta = new Date();
  const now = new Date();
  eta.setSeconds(eta.getSeconds() + parsedSeconds);
  const diffTime = Math.abs(eta.getTime() - now.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let ret = eta.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  if (diffDays > 0) {
    ret += ` +${diffDays}d`;
  }
  return ret;
}

/**
 * Parse duration into seconds
 * @param duration string
 */
export function parseDuration(duration) {
  const days = duration.match(/(\d+)\s*d/);
  const hours = duration.match(/(\d+)\s*h/);
  const minutes = duration.match(/(\d+)\s*m/);
  const seconds = duration.match(/(\d+)\s*s/);

  let parsedSeconds = 0;
  if (days) {
    parsedSeconds += parseInt(days[1]) * 86400;
  }
  if (hours) {
    parsedSeconds += parseInt(hours[1]) * 3600;
  }
  if (minutes) {
    parsedSeconds += parseInt(minutes[1]) * 60;
  }
  if (seconds) {
    parsedSeconds += parseInt(seconds[1]);
  }
  return parsedSeconds;
}

/**
 * Create a span with the given text
 * @param text
 * @param className
 * @returns {HTMLSpanElement}
 */
export function createTextSpan(text, className: string = "prun-remove-js") {
  const newSpan = document.createElement("span");
  newSpan.classList.add(className);
  newSpan.textContent = text;
  return newSpan;
}

/**
 * Create a div with the given text
 * @param text
 * @param className
 * @returns {HTMLDivElement}
 */
export function createTextDiv(text, className: string = "prun-remove-js") {
  const newSpan = document.createElement("div");
  newSpan.classList.add(className);
  newSpan.textContent = text;
  return newSpan;
}

/**
 * Create a textbox with larger primary and smaller secondary text inside of a div
 * @param primaryText
 * @param secondaryText
 * @param primaryTextColor
 * @param className
 * @returns {HTMLDivElement}
 */
export function createFinancialTextBox(primaryText, secondaryText, primaryTextColor, className: string = "prun-remove-js")
{
	const box = document.createElement("div");
	box.classList.add(className);
	box.classList.add("fin-box");
	const primaryTextSpan = document.createElement("span");
	primaryTextSpan.style.fontSize = "12px";
	primaryTextSpan.style.lineHeight = "1.1";
	primaryTextSpan.style.color = primaryTextColor;
	primaryTextSpan.textContent = primaryText;
	box.appendChild(primaryTextSpan);
	
	const secondaryTextDiv = document.createElement("div");
	secondaryTextDiv.textContent = secondaryText;
	secondaryTextDiv.style.fontSize = "10px";
	secondaryTextDiv.style.lineHeight = "1.1";
	secondaryTextDiv.style.marginTop = "2px";
	secondaryTextDiv.style.color = "#999";
	box.appendChild(secondaryTextDiv);
	
	return box;
}

// For a material ticker and FIO inventory payload, find the amount of that material in the inventory
export function findInventoryAmount(ticker, inventory)
{
	for(var i = 0; i < inventory["Inventory"].length; i++)
	{
		if(inventory["Inventory"][i]["MaterialTicker"] == ticker)
		{
			return inventory["Inventory"][i]["MaterialAmount"];
		}
	}
	return 0;
}

// For a material ticker and FIO inventory payload, find the amount of that material consumed by worker consumption
export function findBurnAmount(ticker, inventory)
{
	for(var i = 0; i < inventory["WorkforceConsumption"].length; i++)
	{
		if(inventory["WorkforceConsumption"][i]["MaterialTicker"] == ticker)
		{
			return inventory["WorkforceConsumption"][i]["DailyAmount"];
		}
	}
	return 0;
}

// Sort tickers by their material category
export function CategorySort(a, b)
{
	if(!MaterialNames[a] || !MaterialNames[b]){return 0;}
	return MaterialNames[a][1].localeCompare(MaterialNames[b][1]);
}

// Find the data corresponding to a planet in an array of FIO inventory/burn data
export function findCorrespondingPlanet(planet, data)
{
	for(var i = 0; i < data.length; i++)
	{
		if(planet && data[i]["PlanetNaturalId"] && data[i]["PlanetNaturalId"].toLowerCase() == planet.toLowerCase())	// If the natural ID matches: XX-000x
		{
			return data[i];
		}
		else if(planet && data[i]["PlanetName"] && data[i]["PlanetName"].toLowerCase() == planet.toLowerCase())	// If the planet name matches
		{
			return data[i];
		}
		else if(planet && data[i]["PlanetNaturalId"] && PlanetNames[planet] && PlanetNames[planet].toLowerCase() == data[i]["PlanetNaturalId"].toLowerCase())	// When planet name isn't in the payload, convert it to natural ID
		{
			return data[i];
		}
	}
	return undefined;
}

// Parse the base name on WF buffers
export function parseBaseName(text)
{
	try
	{
		
		var match = text.match(/@ ([A-Z]{2}-[0-9]{3} [a-z]) Base/);	// Unnamed system unnamed planet
		if(match && match[1])
		{
			return match[1].replace(" ","");
		}
		match = text.match(/@ ([A-z ]*) - ([A-z ]*) Base/);	// Named system named planet
		if(match && match[1] && match[2])
		{
			return match[2];
		}
		match = text.match(/@ ([A-z ]*) ([A-z]) Base/);	// Named system unnamed planet
		if(match && match[1] && match[2] && SystemNames[match[1].toUpperCase()])
		{
			return SystemNames[match[1].toUpperCase()] + match[2].toLowerCase();
		}
		match = text.match(/@ [A-Z]{2}-[0-9]{3} - ([A-z ]*) Base/);	// Unnamed system named planet
		if(match && match[1])
		{
			return match[1];
		}
		return null;
		
	} catch (TypeError)
	{
		return text;
	}
	
}

// Parse the planet name on inventory buffers
export function parseInvName(text)
{
	try
	{
		const match = text.match(/\(([A-Z]{2}-[0-9]{3}[a-z])\)/);
		if(match && match[1])
		{
			return match[1];
		}
		return null;
	} catch(TypeError)
	{
		return null;
	}
}

// Get the data in local storage for a given storageName. Then call the callback function.
// Also pass the params through to the callback function
export function getLocalStorage(storageName, callbackFunction, params)
{
	try
	{
		browser.storage.local.get(storageName).then(callbackFunction(params));	// For FireFox, throws an error in Chrome
	} catch(err)
	{
		chrome.storage.local.get([storageName], function(result)	// For Chrome, doesn't work in FireFox
		{
			callbackFunction(result, params);
		});
	}
}

// Remove all the children of a given element
export function clearChildren(elem)
{
	elem.textContent = "";
	while(elem.children[0])
	{
		elem.removeChild(elem.children[0]);
	}
	return;
}

// Set the data in local storage. Pass it the result of a getLocalStorage call
export function setSettings(result)
{
	try
	{
		browser.storage.local.set(result);	// For FireFox, throws an error in Chrome
	}
	catch(err)
	{
		chrome.storage.local.set(result, function(){	// For Chrome, doesn't work in FireFox
			//console.log("PMMG: Configuration Saved.");
		});
	}
	return;
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
export function XITWebRequest(tile, parameters, callbackFunction, url, requestType: string = "GET", header, content?)
{
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		tile.textContent = "Error! Data Could Not Be Loaded! Timed Out!";
	};
	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE)
		{
			callbackFunction(tile, parameters, xhr.responseText);
		}
		return;
	};
	xhr.timeout = 10000;
	xhr.open(requestType, url, true);
	if(header) {
		xhr.setRequestHeader(header[0], header[1]);
	}
	if(content)
	{
		xhr.send(content);
	}
	else
	{
		xhr.send(null);
	}
	return;
}
/**
 * Create a material element that mimics the ones generated by the game
 * @param ticker - The ticker of the MAT
 * @param className - A class that can be applied to the material element
 * @param amount - The number shown in the lower right of the material. "none" indicates no number
 * @param text - Indicates whether the full material name should appear under the material element
 * @param small - Indicates whether the material is full size (as in an inventory) or small (as in a WF buffer)
*/
export function createMaterialElement(ticker, className: string = "prun-remove-js", amount: string = "none", text: boolean = false, small: boolean = false)
{
	if(!MaterialNames[ticker] && ticker != "SHPT"){return null;}	// Return nothing if the material isn't recognized
	const name = (MaterialNames[ticker] || ["Shipment"])[0];	// The full name of the material (Basic Bulkhead)
	const category = (MaterialNames[ticker] || [undefined, "shipment"])[1];	// The category of the material
	
	const matText = createTextSpan(ticker, className);	// The ticker text in the middle
	matText.classList.add(...WithStyles(Style.MatText));	// Apply styles
	
	const matTextWrapper = document.createElement("div");	// The first wrapper around the text
	matTextWrapper.classList.add(...WithStyles(Style.MatTextWrapper));	// Apply styles
	matTextWrapper.appendChild(matText);
	
	const material = document.createElement("div");	// The colored material square
	material.classList.add(...WithStyles(Style.MaterialElement));	// Apply styles
	material.appendChild(matTextWrapper);
	material.style.background = CategoryColors[category][0];	// Apply colors
	material.style.color = CategoryColors[category][1];
	material.title = name;										// Provide the material with a title when hovered over
	material.addEventListener("click", function() {				// Show MAT buffer when clicked
		showBuffer("MAT " + ticker.toUpperCase());
	});
	
	const materialWrapper = document.createElement("div");		// First wrapper around material square
	materialWrapper.classList.add(...WithStyles(Style.MaterialWrapper));	// Apply styles
	materialWrapper.appendChild(material);
	
	const materialWrapperWrapper = document.createElement("div");	// Second wrapper around material square
	materialWrapperWrapper.classList.add(...WithStyles(Style.MaterialWrapperWrapper));	// Apply styles
	materialWrapperWrapper.appendChild(materialWrapper);
	
	const outerLayer = document.createElement("div");	// Final element to be returned (for big case)
	outerLayer.classList.add(...WithStyles(Style.MaterialOuter));	// Apply styles
	outerLayer.appendChild(materialWrapperWrapper);
	
	if(amount && amount != "none")	// If there is an amount listed
	{
		const materialNumberWrapper = document.createElement("div");	// Wrapper for amount
		materialNumberWrapper.classList.add(...WithStyles(Style.MaterialNumberWrapper));	// Apply styles
		materialWrapper.appendChild(materialNumberWrapper);
		
		const materialNumber = createTextDiv(amount, className);	// Span containing amount
		materialNumber.classList.add(...WithStyles(Style.MaterialNumber));	// Apply styles
		materialNumberWrapper.appendChild(materialNumber);
	}
	
	if(text)	// If the full material name will appear under the element
	{
		const textElemWrapper = document.createElement("span");	// Wrapper around the text
		textElemWrapper.classList.add(...WithStyles(Style.MaterialNameText));	// Apply styles
		
		const textElem = createTextSpan(name, className);	// The text itself
		textElemWrapper.appendChild(textElem);	// Apply styles
		
		outerLayer.appendChild(textElemWrapper);
	}
	
	if(small)
	{
		materialWrapper.classList.add("mat-element-small");	// Apply small size
		return materialWrapper;	// Small material elements don't need all the wrapping
	}
	else
	{
		materialWrapper.classList.add("mat-element-large");	// Apply large size
	}
	return outerLayer;
}
// Creates an element that links to a buffer with command "command"
export function createLink(text, command)
{
	const link = document.createElement("span");
	link.textContent = text;
	link.addEventListener("click", function(){showBuffer(command);});
	
	const linkDiv = document.createElement("div");
	linkDiv.classList.add("link");
	linkDiv.appendChild(link);
	return linkDiv;
}

// Shows a buffer with a specified command
export function showBuffer(command) {
	const button = document.getElementById(Selector.NewBFRButton);
	if(button == null){return false;}

    const addSubmitCommand = (input, cmd) => {
        changeValue(input, cmd);
        input.parentElement.parentElement.requestSubmit();
    }

    // Watch for future buffer creation
    monitorOnElementCreated(Selector.BufferTextField, (elem) => addSubmitCommand(elem, command));

    // Create new Buffer
	button.click();
	return true;
}

// Change the value of a new buffer box
export function changeValue(input, value){
    var propDescriptor = Object.getOwnPropertyDescriptor(
      window["HTMLInputElement"].prototype,
      "value"
    );
	if(propDescriptor == undefined){return;}
	var nativeInputValueSetter = propDescriptor.set;
	if(nativeInputValueSetter == undefined){return;}
    nativeInputValueSetter.call(input, value);
	
	var inputEvent = new Event('input');
	
	inputEvent.initEvent('input', true, false);	// This function is depracated, but is necessary for FF to work. Consider removing or changing.
	//Object.defineProperty(inputEvent, 'explicitOriginalTarget', {writable: false, value: input});
    input.dispatchEvent(inputEvent);
	return;
}

// Wait for a new buffer to be created
function monitorOnElementCreated(selector, callback, onlyOnce = true) {
    const getElementsFromNodes = (nodes) => (Array.from(nodes)).flatMap(node => node.nodeType === 3 ? null : Array.from(node.querySelectorAll(selector))).filter(item => item !== null);
    let onMutationsObserved = function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                var elements = getElementsFromNodes(mutation.addedNodes);
                for (var i = 0, len = elements.length; i < len; i++) {
                    callback(elements[i]);
                    if (onlyOnce) observer.disconnect();
                }
            }
        });
    };

    let containerSelector = 'body';
    let target = document.querySelector(containerSelector);
    let config = { childList: true, subtree: true };
    let MutationObserver = window["MutationObserver"] || window["WebKitMutationObserver"];
    let observer = new MutationObserver(onMutationsObserved);
    observer.observe(target, config);
	return;
}

// Remove all elements added in the last run with a class name
export function genericCleanup(className: string = "prun-remove-js") {
  
  Array.from(document.getElementsByClassName(className)).forEach((elem) => {
    elem.parentNode && elem.parentNode.removeChild(elem);
	return;
  });
  return;
}

// Return all matching buffers
export function getBuffers(bufferCode: string): HTMLElement[] {
  const nodes = document.evaluate(
    `//div[@class='${Selector.BufferHeader}'][starts-with(translate(., abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ), '${bufferCode}')]/../..`,
    document, null, XPathResult.ANY_TYPE, null);
	var buffers = [];
	var node;
	
	while(node = nodes.iterateNext())
	{
		buffers.push(node as never);
	}
	return buffers;
}

// Get elements that match an XPath
export function getElementsByXPath(xpath: string): Array<Node> {
  const result = document.evaluate(
    xpath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);

  const output: Array<Node> = [];

  try {
    let node = result.iterateNext();
    while (node) {
      output.push(node);
      node = result.iterateNext();
    }
  } catch(e) {
    // ignored
  }
  return output;
}

// Sort type is: alph, alphRev
export function sortTable(table: HTMLTableElement, column: number, sortType: string)
{
	var sorter = [] as any[];
	if(table.children[1] == null){return;}
	const rows = Array.from(table.children[1].children);
	for(var i = 0; i < rows.length; i++)
	{
		var item = rows[i].children[column];
		if(item == null || item.firstChild == null){break;}
		sorter.push([item.firstChild.textContent, rows[i]]);
	}
	if(sortType == "alph"){sorter.sort(tableSortAlph);}
	console.log(sorter);
	sorter.forEach(item => {
		table.children[1].insertBefore(table.children[1].children[0], item[1]);
	});
}

function tableSortAlph(a, b)
{
	return a[0].localeCompare(b[0]);
}

// Create a table in the style of PrUN
export function createTable(tile, headers: Array<string>, sectionHeaderTitle = "") {
	if (sectionHeaderTitle !== ""){
		const sectionHeader = document.createElement("h3");
		sectionHeader.appendChild(document.createTextNode(sectionHeaderTitle));
		sectionHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(sectionHeader);
	}

	let table = document.createElement("table");
	tile.appendChild(table);

	const thead = document.createElement("thead");
	table.appendChild(thead);
	
	const headerRow = document.createElement("tr");
	thead.appendChild(headerRow);

	for(let title of headers)
	{
		const header = document.createElement("th");
		header.textContent = title;
		header.style.paddingTop = "0";
		headerRow.appendChild(header);
	}

	const tbody = document.createElement("tbody");
	table.appendChild(tbody);

	return tbody;
}
