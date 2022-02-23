import {Selector} from "./Selector";
import {MaterialNames} from "./GameProperties";
import {CategoryColors} from "./Style";

/**
 * parse a duration into an actual ETA string
 * @param duration
 * @returns {string}
 */

export function convertDurationToETA(duration) {
  const parsedSeconds = parseDuration(duration);
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
	box.style.margin = "1px";
	box.style.minWidth = "100px";
	box.style.width = "calc(33% - 2px)";
	box.style.maxWidth = "150px";
	box.style.padding = "4px";
	box.style.backgroundColor = "#23282b";
	box.style.display = "inline-block";
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

export function findCorrespondingPlanet(planet, data)
{
	for(var i = 0; i < data.length; i++)
	{
		if(data[i]["PlanetName"] == planet)
		{
			return data[i];
		}
	}
	return null;
}

export function parseBaseName(text)
{
	try
	{
		text = text.split("@")[1];
		text = text.split(" Base")[0];
		var hyphens = text.split(" - ");
		text = hyphens[hyphens.length - 1];
		var ending = text.split(" ");
		if(ending[1] != undefined && ending[2] != undefined && ending[2].length == 1)
		{
			return ending[1] + ending[2];
		}
		else
		{
			return text;
		}
	} catch (TypeError)
	{
		return text;
	}
	
}

export function createMaterialElement(ticker, className: string = "prun-remove-js", amount: string = "none", text: boolean = false)
{
	const name = MaterialNames[ticker][0];
	const category = MaterialNames[ticker][1];
	const totalPicture = document.createElement("div");
	totalPicture.classList.add("T5C45pTOW9QTzokWPqLQJg==");
	totalPicture.style.height = "48px";
	totalPicture.style.width = "48px";
	const material = document.createElement("div");
	material.classList.add("E7OLUChYCexMUgOolKYjOQ==");
	material.title = name;
	material.style.height = "48px";
	material.style.width = "48px";
	material.style.background = CategoryColors[category][0];
	material.style.color = CategoryColors[category][1];
	material.style.fontSize = "15.84px";
	material.style.cursor = "pointer";
	material.style.margin = "2px auto";
	totalPicture.classList.add(className);
	const subDiv = document.createElement("div");
	subDiv.classList.add("nlQirpSkdLH0a6+C4lhduA==");
	const matText = document.createElement("span");
	matText.classList.add("rjpYL1i9cZmf47fM9qWyZQ==");
	matText.textContent = ticker;
	subDiv.appendChild(matText);
	material.appendChild(subDiv);
	totalPicture.appendChild(material);
	if(amount != "none")
	{
		const numberDiv = document.createElement("div");
		numberDiv.classList.add("G37fUJPwMoJ6fKHDGeg+-w==");
		const numberSubDiv = document.createElement("div");
		numberSubDiv.classList.add("bHjlDPB84Uz0yUnvHa-Y5A==");
		numberSubDiv.classList.add("_6OK6sXNjIIhq3NDD9ELVGw==");
		numberSubDiv.classList.add("gl73vnp5jo+VaepDRocunA==");
		numberSubDiv.textContent = amount;
		numberDiv.appendChild(numberSubDiv);
		totalPicture.appendChild(numberDiv);
	}
	var superElem = document.createElement("div");
	superElem.classList.add(className);
	superElem.appendChild(totalPicture);
	superElem.style.display = "block";
	superElem.style.width = "64px";
	superElem.style.margin = "3px";
	superElem.style.padding = "auto";
	
	if(text != false)
	{
		var label = document.createElement("span");
		label.classList.add(className);
		label.textContent = name;
		label.style.fontWeight = "bold";
		label.style.boxSizing = "border-box";
		label.style.paddingTop = "2px";
		label.style.display = "block";
		superElem.appendChild(label);
	}
	
	return superElem;
}

export function genericCleanup(className: string = "prun-remove-js") {
  // remove all elements added in the last run
  Array.from(document.getElementsByClassName(className)).forEach((elem) => {
    elem.parentNode && elem.parentNode.removeChild(elem);
  });
}

export function toFixed(value: number, precision: number = 2) {
  const power = Math.pow(10, precision || 0);
  return Math.round(value * power) / power;
}

// Return only 1 matching buffer (supplanted by getBuffers)
export function getBuffer(bufferCode: string): HTMLElement {
  return document.evaluate(
    `//div[@class='${Selector.BufferHeader}'][starts-with(., '${bufferCode}')]/../..`,
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;
}

// Return all matching buffers
export function getBuffers(bufferCode: string): HTMLElement[] {
  const nodes = document.evaluate(
    `//div[@class='${Selector.BufferHeader}'][starts-with(., '${bufferCode}')]/../..`,
    document, null, XPathResult.ANY_TYPE, null);
	var buffers = [];
	var node;
	
	while(node = nodes.iterateNext())
	{
		buffers.push(node as never);
	}
	return buffers;
}

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
