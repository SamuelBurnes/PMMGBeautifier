import {Module} from "./ModuleRunner";
import {getBuffers, parseInvName, findCorrespondingPlanet, genericCleanup, setSettings} from "./util";
import {Selector} from "./Selector";
import {Style} from "./Style";
import {MaterialNames} from  "./GameProperties";

/**
 * Sort inventory into consumables, inputs, outputs, misc
 */
export class InventoryOrganizer implements Module {
	private username;
	private fullBurn;
	private result;
	private tag = "pb-inv-org";
	constructor(username, fullBurn, result)
	{
		this.username = username;
		this.fullBurn = fullBurn;
		this.result = result;
	}
	
    cleanup() {
      genericCleanup(this.tag);
	  return;
    }
    run() {	// Should optimize so not rerunning so often. Just look at everything before first div and categorize. Everything else beyond should already be right. (Although maybe not...)
		const buffers = getBuffers("INV ");
		const result = this.result;
		if (!buffers || !result || !result["PMMGExtended"]){return};
		if(!this.result["PMMGExtended"]["inventory_sorting"]){this.result["PMMGExtended"]["inventory_sorting"] = []};
		const screenNameElem = document.querySelector(Selector.ScreenName);
		const screenName = screenNameElem ? screenNameElem.textContent : "";
		if(!screenName){return;}
		buffers.forEach(buffer => {
			const sortOptions = buffer.querySelector(Selector.InventorySortOptions);
			if(!sortOptions){return;}
			var toggleButton;
			const baseNameElem = buffer.querySelector(Selector.InventoryName);
			if(!baseNameElem){return;}
			const planetName = parseInvName(baseNameElem.textContent);
			if(!planetName || !this.fullBurn[this.username]){return;}
			const burn = findCorrespondingPlanet(planetName, this.fullBurn[this.username]);
			if(!burn){return;}
			if(sortOptions.children.length == 7)
			{
				toggleButton = document.createElement("div");
				toggleButton.classList.add("LgjAIPjxxF1iSm2VWQSmPw==");
				sortOptions.appendChild(toggleButton);
				const toggleLabel = document.createElement("div");
				toggleLabel.textContent = "BRN";
				toggleButton.appendChild(toggleLabel);
				if(result["PMMGExtended"]["inventory_sorting"].includes(screenName + baseNameElem.textContent))
				{
					const toggleIndicator = document.createElement("div");
					toggleIndicator.textContent = "⬤";
					toggleIndicator.style.marginLeft = "2px";
					toggleButton.appendChild(toggleIndicator);
					for(var i = 1; i < 7; i++)
					{
						if(sortOptions.children[i] && sortOptions.children[i].children[1])
						{
							(sortOptions.children[i].children[1] as HTMLElement).style.display = "none";
						}
					}
				}
			}
			
			
			
			if(toggleButton)
			{
				toggleButton.addEventListener("click", function()
				{
					if(result["PMMGExtended"]["inventory_sorting"].includes(screenName + baseNameElem.textContent))
					{
						const index = result["PMMGExtended"]["inventory_sorting"].indexOf(screenName + baseNameElem.textContent);
						result["PMMGExtended"]["inventory_sorting"].splice(index, 1);
						if(toggleButton.children[1])
						{
							toggleButton.removeChild(toggleButton.children[1]);
						}
						for(var i = 1; i < 7; i++)
						{
							if(sortOptions.children[i] && sortOptions.children[i].children[1])
							{
								(sortOptions.children[i].children[1] as HTMLElement).style.display = "block";
							}
						}
					}
					else
					{
						result["PMMGExtended"]["inventory_sorting"].push(screenName + baseNameElem.textContent);
						const toggleIndicator = document.createElement("div");
						toggleIndicator.textContent = "⬤";
						toggleIndicator.style.marginLeft = "2px";
						toggleButton.appendChild(toggleIndicator);
						for(var i = 1; i < 7; i++)
						{
							if(sortOptions.children[i] && sortOptions.children[i].children[1])
							{
								(sortOptions.children[i].children[1] as HTMLElement).style.display = "none";
							}
						}
					}
					setSettings(result);
				});
			}
			
			if(!result["PMMGExtended"]["inventory_sorting"].includes(screenName + baseNameElem.textContent)){return;}
			
			const inventory = buffer.querySelector(Selector.Inventory);
			if(!inventory || !inventory.parentElement){return;}
			var materials = Array.from(inventory.querySelectorAll(Selector.FullMaterialIcon)) as HTMLElement[];
			materials.sort(materialSort);
			const workforceMaterials = extractMaterials(burn["WorkforceConsumption"]);
			const workforceTitle = document.createElement('h3');
			workforceTitle.appendChild(document.createTextNode("Consumables"));
			workforceTitle.classList.add(...Style.SidebarSectionHead);
			workforceTitle.style.width = "100%";
			workforceTitle.classList.add(this.tag);
			inventory.appendChild(workforceTitle);
			var areConsumables = false;
			materials.forEach(material => {
				const tickerElem = material.querySelector(Selector.MaterialText);
				if(!tickerElem){return;}
				const ticker = tickerElem.textContent;
				if(ticker && workforceMaterials.includes(ticker))
				{
					inventory.appendChild(material);
					areConsumables = true;
				}
			});
			if(!areConsumables){inventory.removeChild(workforceTitle);}
			
			const inputMaterials = extractMaterials(burn["OrderConsumption"]);
			const inputTitle = document.createElement('h3');
			inputTitle.appendChild(document.createTextNode("Inputs"));
			inputTitle.classList.add(...Style.SidebarSectionHead);
			inputTitle.style.width = "100%";
			inputTitle.classList.add(this.tag);
			inventory.appendChild(inputTitle);
			var areInputs = false;
			materials.forEach(material => {
				const tickerElem = material.querySelector(Selector.MaterialText);
				if(!tickerElem){return;}
				const ticker = tickerElem.textContent;
				if(ticker && inputMaterials.includes(ticker) && !workforceMaterials.includes(ticker))
				{
					inventory.appendChild(material);
					areInputs = true;
				}
			});
			if(!areInputs){inventory.removeChild(inputTitle);}
			
			const outputMaterials = extractMaterials(burn["OrderProduction"]);
			const outputTitle = document.createElement('h3');
			outputTitle.appendChild(document.createTextNode("Outputs"));
			outputTitle.classList.add(...Style.SidebarSectionHead);
			outputTitle.style.width = "100%";
			outputTitle.classList.add(this.tag);
			inventory.appendChild(outputTitle);
			var areOutputs = false;
			materials.forEach(material => {
				const tickerElem = material.querySelector(Selector.MaterialText);
				if(!tickerElem){return;}
				const ticker = tickerElem.textContent;
				if(ticker && outputMaterials.includes(ticker) && !workforceMaterials.includes(ticker) && !inputMaterials.includes(ticker))
				{
					inventory.appendChild(material);
					areOutputs = true;
				}
			});
			if(!areOutputs){inventory.removeChild(outputTitle);}
			
			const miscTitle = document.createElement('h3');
			miscTitle.appendChild(document.createTextNode("Other"));
			miscTitle.classList.add(...Style.SidebarSectionHead);
			miscTitle.style.width = "100%";
			miscTitle.classList.add(this.tag);
			inventory.appendChild(miscTitle);
			var areMisc = false;
			materials.forEach(material => {
				const tickerElem = material.querySelector(Selector.MaterialText);
				if(!tickerElem){return;}
				const ticker = tickerElem.textContent;
				if(ticker && !outputMaterials.includes(ticker) && !workforceMaterials.includes(ticker) && !inputMaterials.includes(ticker))
				{
					inventory.appendChild(material);
					areMisc = true;
				}
			});
			if(!areMisc){inventory.removeChild(miscTitle);}
			return;
		});
    }
  
}

function extractMaterials(burn)
{
	const materials = [] as string[];
	burn.forEach(mat => {
		materials.push(mat["MaterialTicker"] || "");
	});
	return materials;
}

function materialSort(a, b)
{
	const tickerElemA = a.querySelector(Selector.MaterialText);
	if(!tickerElemA){return;}
	const tickerA = tickerElemA.textContent;
	
	const tickerElemB = b.querySelector(Selector.MaterialText);
	if(!tickerElemB){return;}
	const tickerB = tickerElemB.textContent;
	
	if(!MaterialNames[tickerA] || !MaterialNames[tickerB]){return 0;}
	
	if(MaterialNames[tickerA][1] == MaterialNames[tickerB][1])
	{
		return tickerA.localeCompare(tickerB);
	}
	
	return MaterialNames[tickerA][1].localeCompare(MaterialNames[tickerB][1]);
}