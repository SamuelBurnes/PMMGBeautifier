import {Module} from "./ModuleRunner";
import {parseBaseName, findBurnAmount, findCorrespondingPlanet, findInventoryAmount, createTextSpan, genericCleanup, getBuffers} from "./util";
import {Selector} from "./Selector";

/**
 * Get inventory and burn data and implement on WF buffers
 */
export class ConsumableTimers implements Module {
	private apikey;
	private userName;
	constructor(userName, apikey)
	{
		this.userName = userName;
		this.apikey = apikey;
	}
  private tag = "pb-consumable-timers";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	if(this.userName == undefined || this.apikey == undefined){return;}
    const buffers = getBuffers("WF");
    if (buffers == undefined || buffers == null){return};
	if(this.userName == undefined){return;}
	buffers.forEach(buffer => {
		generateBurns(buffer, this.userName, this.apikey);
	});
	return;
  }
  
  
}
export function generateBurns(buffer, userName, apikey)
{
	const nameElem = buffer.querySelector(Selector.WorkforceConsumptionTable);
	
	if(nameElem == null || nameElem == undefined || nameElem.textContent == null || nameElem.textContent == undefined) return;
	const name = parseBaseName(nameElem.textContent);
	
	var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
		    var jsondata = xhr.responseText;
			if(jsondata == undefined || jsondata == null){return;}
		    var inventoryData = findCorrespondingPlanet(name, JSON.parse(jsondata));
			if(inventoryData == undefined || inventoryData == null){return;}
			
			const headers = Array.from(buffer.querySelectorAll("table > thead > tr") as HTMLElement[]);
			headers.forEach(header => {
				const totalHeader = header.children[2] as HTMLElement;
				const burnHeader = header.children[3] as HTMLElement;
				totalHeader.textContent = "Total";
				burnHeader.removeChild(burnHeader.children[0]);
				burnHeader.textContent = "Burn";
			});
			
			const elements = Array.from(buffer.querySelectorAll("table > tbody > tr") as HTMLElement[]);
			elements.forEach(targetRow => {
			  if(targetRow.childElementCount < 5){return;}
			  const outputData = targetRow.children[4] as HTMLElement;
			  const totalData = targetRow.children[3] as HTMLElement;
			  if (outputData.textContent != "") {
				var inventoryAmount = findInventoryAmount(targetRow.children[0].textContent, inventoryData);
				var burnAmount = findBurnAmount(targetRow.children[0].textContent, inventoryData);
				var daysLeft;
				if(burnAmount != 0)
				{
					daysLeft = Math.floor(inventoryAmount / burnAmount);
					if(daysLeft <= 3)
					{
						outputData.style.backgroundColor = "#5a3130";
						outputData.style.color = "#c59c9b";
					}
					else if(daysLeft <= 6)
					{
						outputData.style.backgroundColor = "#836e24";
						outputData.style.color = "#f6df94";
					}
					else
					{
						outputData.style.backgroundColor = "#345034";
						outputData.style.color = "#9fbb9f";
					}
					
					daysLeft = daysLeft.toFixed(0);
					if(daysLeft == 1)
					{
						daysLeft += " Day Remains";
					}
					else
					{
					 daysLeft += " Days Remain";
					}
				}
				else
				{
					daysLeft = "";
				}
				/*var prevText = outputData.firstChild.textContent.split(" ")[0] + " / Day ";	// Adds back in amount per day
				outputData.removeChild(outputData.firstChild);
				outputData.appendChild(createTextSpan(prevText + daysLeft));*/
				var firstChild = outputData.firstChild;
				if(firstChild != null){outputData.removeChild(firstChild);}
				outputData.appendChild(createTextSpan(daysLeft));
				
				firstChild = totalData.firstChild;
				if(firstChild != null){totalData.removeChild(firstChild);}
				totalData.appendChild(createTextSpan(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
			  }
			})
	    }
    };
    
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + userName, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}
