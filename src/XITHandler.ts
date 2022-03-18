import {Module} from "./ModuleRunner";
import {getBuffers} from "./util";
import {Selector} from "./Selector";
import {XITPreFunctions, XITBufferTitles} from "./XITFunctions";

/**
 * Handle XIT buffers
 */
export class XITHandler implements Module {
  private tag = "pb-xit";
  private apikey;
  private webappID;
  private burn;
  private burnSettings;
  private username;
  constructor(username, apikey, webappID, burn, burnSettings)
  {  
	this.username = username;
	this.apikey = apikey;
	this.webappID = webappID;
	this.burn = burn;
	this.burnSettings = burnSettings;
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
		
		if(tile.children[1] != undefined && tile.children[1].id == "pmmg-load-success"){return;}
		
		const parametersRaw = Array.from(buffer.getElementsByClassName(Selector.BufferHeader))[0].textContent;
		if(parametersRaw == undefined || parametersRaw == null) return;
		var parameters = parametersRaw.slice(4).split("_");
		if(parameters == undefined || parameters == null) return;
		
		if(tile.children[1] != undefined && tile.children[1].id == "pmmg-reload"){XITPreFunctions[parameters[0].toUpperCase()](tile.children[1], parameters, this.apikey, this.webappID, this.username, burn, burnSettings);return;}
		
		tile.style.backgroundColor = "#222222";
		tile.style.paddingTop = "4px";
		tile.style.display = "flex";
		tile.style.flexFlow = "column";
		
		const topDiv = document.createElement("div");
		topDiv.style.display = "block";
		topDiv.style.width = "100%";
		topDiv.classList.add(this.tag);
		
		
		tile.appendChild(topDiv);
		
		const refreshButton = document.createElement("button");
			refreshButton.textContent = "⟳";
			refreshButton.style.backgroundColor = "#f7a600";
			refreshButton.style.color = "white";
			refreshButton.style.borderWidth = "0px";
			refreshButton.style.padding = "0px 8px";
			refreshButton.style.display = "block";
			refreshButton.style.fontWeight = "bold";
			refreshButton.style.fontSize = "11px";
			refreshButton.style.cursor = "pointer";
			refreshButton.style.margin = "4px 8px";
			refreshButton.addEventListener("mouseenter", function(){this.style.color = "#1e1e1e";});
			refreshButton.addEventListener("mouseleave", function(){this.style.color = "#eeeeee";});
			
		topDiv.appendChild(refreshButton);
		
		
		const contentDiv = document.createElement("div");
			contentDiv.style.height = "100%";
			contentDiv.style.flexGrow = "1";
		
		tile.appendChild(contentDiv);
		
		const preFunc = XITPreFunctions[parameters[0].toUpperCase()];
		if(preFunc == undefined)
		{
			tile.textContent = "Error! No Matching Function!";
		}
		else
		{
			Array.from(buffer.getElementsByClassName(Selector.BufferTitle))[0].textContent = XITBufferTitles[parameters[0].toUpperCase()];	// Title the buffer
			const apikey = this.apikey;
			const webappID = this.webappID;
			const username = this.username;
			contentDiv.id = "pmmg-load-success";
			refreshButton.addEventListener("click", function(){preFunc(contentDiv, parameters, apikey, webappID, username, burn, burnSettings);});
			preFunc(contentDiv, parameters, this.apikey, this.webappID, username, burn, burnSettings);
		}
		return;
		
	});
  }
  
  
}
