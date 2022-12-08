import {Module} from "./ModuleRunner";
import {parseBaseName, findBurnAmount, findCorrespondingPlanet, findInventoryAmount, createTextSpan, getBuffers} from "./util";
import {Selector} from "./Selector";

/**
 * Get inventory and burn data and implement on WF buffers
 */
export class ConsumableTimers implements Module {
	private burn;
	private username;
	private thresholds;
	
	constructor(username, burn, thresholds)
	{
		this.burn = burn;
		this.username = username;
		this.thresholds = thresholds;
	}
	
  cleanup() {
    // Nothing to clean up.
	return;
  }
  run() {
	if(this.burn[this.username] == undefined || this.burn[this.username].length == 0){return;}
    const buffers = getBuffers("WF");
	
    if (buffers == undefined || buffers == null){return};
	
	buffers.forEach(buffer => {
		generateBurns(buffer, this.burn[this.username], this.thresholds);
	});
	
	return;
  }
  
  
}
export function generateBurns(buffer, burn, thresholds)
{
	if(buffer.classList.contains("pb-loaded")){return;}
	const nameElem = buffer.querySelector(Selector.WorkforceConsumptionTable);
	if(!nameElem || !nameElem.textContent) return;
	const name = parseBaseName(nameElem.textContent);
	if(!name){return;}
	const headers = Array.from(buffer.querySelectorAll("table > thead > tr") as HTMLElement[]);
	headers.forEach(header => {
		const totalHeader = header.children[2] as HTMLElement;
		const burnHeader = header.children[3] as HTMLElement;
		totalHeader.textContent = "Total";
		if(burnHeader.children != undefined && burnHeader.children[0] != undefined){burnHeader.removeChild(burnHeader.children[0]);}
		burnHeader.textContent = "Burn";
	});
	
	const planetBurn = findCorrespondingPlanet(name, burn);
	if(planetBurn == undefined){return;}
	
	const elements = Array.from(buffer.querySelectorAll("table > tbody > tr") as HTMLElement[]);
	elements.forEach(targetRow => {
	  if(targetRow.childElementCount < 5){return;}
	  const outputData = targetRow.children[4] as HTMLElement;
	  const totalData = targetRow.children[3] as HTMLElement;
	  if (outputData.textContent != "") {
		var inventoryAmount = findInventoryAmount(targetRow.children[0].textContent, planetBurn);
		var burnAmount = findBurnAmount(targetRow.children[0].textContent, planetBurn);
		var daysLeft;
		if(burnAmount != 0)
		{
			daysLeft = Math.floor(inventoryAmount / burnAmount);
			if(daysLeft <= thresholds[0])
			{
				if(!outputData.classList.contains("burn-red"))
					outputData.classList.add("burn-red");
			}
			else if(daysLeft <= thresholds[1])
			{
				if(!outputData.classList.contains("burn-yellow"))
					outputData.classList.add("burn-yellow");
			}
			else
			{
				if(!outputData.classList.contains("burn-green"))
					outputData.classList.add("burn-green");
			}
			
			daysLeft = daysLeft.toFixed(0);
			if(daysLeft == 1)
			{
				daysLeft += " Day";
			}
			else
			{
			 daysLeft += " Days";
			}
		}
		else
		{
			daysLeft = "";
		}
		var firstChild = outputData.firstChild;
		if(firstChild != null){outputData.removeChild(firstChild);}
		outputData.appendChild(createTextSpan(daysLeft));
		
		firstChild = totalData.firstChild;
		if(firstChild != null){totalData.removeChild(firstChild);}
		totalData.appendChild(createTextSpan(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
	  }
	});
	buffer.classList.add("pb-loaded");
	return;
}
