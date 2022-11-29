import {Module} from "./ModuleRunner";
import {getBuffers, createTextSpan} from "./util";
import {Selector} from "./Selector";
import {Start} from "./XIT/Start";
import {Settings} from "./XIT/Settings";
import {Debug} from "./XIT/Debug";
import {Calculator} from "./XIT/Calculator";
import {Repairs_pre} from "./XIT/Repairs";
import {Chat_pre} from "./XIT/Chat";
import {Fin_pre} from "./XIT/Finances";
import {EnhancedBurn_pre} from "./XIT/Burn";
import {SheetTable_pre} from "./XIT/SheetTable";
import {Contracts_pre} from "./XIT/Contracts";
import {PRuN_pre, Prosperity_pre, Sheets_pre, Discord_pre} from "./XIT/Web";
import {FIOInv_pre} from "./XIT/Inventory";

export const XITPreFunctions = {
	"INV": FIOInv_pre,
	"DISCORD": Discord_pre,
	"SHEETS": Sheets_pre,
	"PROSPERITY": Prosperity_pre,
	"PRUN": PRuN_pre,
	"SHEETTABLE": SheetTable_pre,
	"FIN": Fin_pre,
	"CHAT": Chat_pre,
	"BURN": EnhancedBurn_pre,
	"SETTINGS": Settings,
	"CONTRACTS": Contracts_pre,
	"REPAIRS": Repairs_pre,
	"CALCULATOR": Calculator,
	"CALC": Calculator,
	"START": Start,
	"DEBUG": Debug
}

export const XITBufferTitles = {
	"INV": "FIO INVENTORY",
	"DISCORD": "DISCORD SERVER",
	"SHEETS": "GOOGLE SHEETS",
	"PROSPERITY": "PROSPERITY",
	"PRUN": "PRUN-CEPTION",
	"SHEETTABLE": "GOOGLE SHEETS TABLE",
	"FIN": "FINANCIAL OVERVIEW",
	"CHAT": "CHAT",
	"BURN": "ENHANCED BURN",
	"SETTINGS": "PMMG SETTINGS",
	"CONTRACTS": "PENDING CONTRACTS",
	"REPAIRS": "REPAIRS",
	"CALC": "CALCULATOR",
	"CALCULATOR": "CALCULATOR",
	"START": "STARTING WITH PMMG",
	"DEBUG": "DEBUG"
}
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
    if (!buffers) return;
	const burn = this.burn;
	const burnSettings = this.burnSettings;
	buffers.forEach(buffer => {
		const tile = (buffer.querySelector(Selector.XITTile) || buffer.querySelector(Selector.XITTileFloat)) as HTMLElement;
		if(!tile){return;}
		
		if(tile.firstChild && ((tile.firstChild as HTMLElement).id == "pmmg-load-success" || (tile.firstChild as HTMLElement).id == "pmmg-no-match")){return;}
		
		const parametersRaw = Array.from(buffer.getElementsByClassName(Selector.BufferHeader))[0].textContent;
		if(!parametersRaw) return;
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
		if(!parameters) return;
		
		if(tile.firstChild && (tile.firstChild as HTMLElement).id == "pmmg-reload"){XITPreFunctions[parameters[0].toUpperCase()](tile.firstChild, parameters, this.result, burn, burnSettings, this.modules);return;}
		
		tile.classList.add("xit-tile");
		
		const refreshButton = document.createElement("div");
		if(!tile.firstChild || (tile.firstChild && ((tile.firstChild as HTMLElement).id != "pmmg-no-match")))
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
		if(!preFunc)
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
			refreshButton.addEventListener("click", function(){preFunc(contentDiv, parameters, result, burn, burnSettings, modules, true);});
			(tile.firstChild as HTMLElement).id = "pmmg-load-success";
			preFunc(contentDiv, parameters, this.result, burn, burnSettings, modules);
		}
		return;
		
	});
	return;
  }
  
  
}
