import {Module} from "./ModuleRunner";
import {getBuffers, createTextSpan} from "./util";
import {Selector} from "./Selector";
import {XITPreFunctions, XITBufferTitles} from "./XITFunctions";

/**
 * Handle XIT buffers
 */
export class XITHandler implements Module {
  private tag = "pb-xit";
  private burn;
  private burnSettings;
  private modules;
  private result;
  constructor(result, burn, burnSettings, modules)
  {  
	this.burn = burn;
	this.burnSettings = burnSettings;
	this.modules = modules;
	this.result = result;
  }
  cleanup() {
    //genericCleanup(this.tag);	// Don't clean up because causes flashing when doing asynchronous requests
  }
  run() {
    const buffers = getBuffers("XIT");
    if (buffers == undefined) return;
	var burn = this.burn;
	var burnSettings = this.burnSettings;
	buffers.forEach(buffer => {
		var tile = buffer.querySelector(Selector.XITTile) as HTMLElement;
		if(tile == null){tile = buffer.querySelector(Selector.XITTileFloat) as HTMLElement;}
		if(tile == null || tile == undefined){return;}
		
		if(tile.firstChild != undefined && ((tile.firstChild as HTMLElement).id == "pmmg-load-success" || (tile.firstChild as HTMLElement).id == "pmmg-no-match")){return;}
		
		const parametersRaw = Array.from(buffer.getElementsByClassName(Selector.BufferHeader))[0].textContent;
		if(parametersRaw == undefined || parametersRaw == null) return;
		var parameters = [] as string[];
		if(parametersRaw.charAt(4) == "1")
		{
			const keyValues = parametersRaw.slice(4).split(" ");
			keyValues.forEach(key => {
				parameters.push(key.slice(2));
				return;
			});
		}
		else
		{
			parameters = parametersRaw.slice(4).split("_");
		}
		if(parameters == undefined || parameters == null) return;
		
		if(tile.firstChild != undefined && (tile.firstChild as HTMLElement).id == "pmmg-reload"){XITPreFunctions[parameters[0].toUpperCase()](tile.firstChild, parameters, this.result, burn, burnSettings, this.modules);return;}
		
		tile.classList.add("xit-tile");
		
		const refreshButton = document.createElement("div");
		if(!tile.firstChild || (tile.firstChild != undefined && ((tile.firstChild as HTMLElement).id != "pmmg-no-match")))
		{
				refreshButton.appendChild(createTextSpan("⟳"));
				refreshButton.classList.add("button-upper-right");
				refreshButton.classList.add(this.tag);
				refreshButton.style.fontSize = "16px";
				refreshButton.style.paddingTop = "12px";
				refreshButton.id = "refresh";
				(buffer.children[3] || buffer.children[2]).insertBefore(refreshButton, (buffer.children[3] || buffer.children[2]).firstChild);
		}
		const contentDiv = document.createElement("div");
			contentDiv.style.height = "100%";
			contentDiv.style.flexGrow = "1";
		
		tile.appendChild(contentDiv);
		
		const preFunc = XITPreFunctions[parameters[0].toUpperCase()];
		if(preFunc == undefined)
		{
			tile.textContent = "Error! No Matching Function!";
			if(!tile.firstChild){return;}
			(tile.firstChild as HTMLElement).id = "pmmg-no-match";
		}
		else
		{
			Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = XITBufferTitles[parameters[0].toUpperCase()];	// Title the buffer
			const modules = this.modules;
			var result = this.result;
			refreshButton.addEventListener("click", function(){preFunc(contentDiv, parameters, result, burn, burnSettings, modules);});
			(tile.firstChild as HTMLElement).id = "pmmg-load-success";
			preFunc(contentDiv, parameters, this.result, burn, burnSettings, modules);
		}
		return;
		
	});
	return;
  }
  
  
}
