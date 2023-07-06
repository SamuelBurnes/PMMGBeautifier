import { FlightETAs } from "./FlightETAs";
import { LocalMarketAds } from './LocalMarketAds';
import { ModuleRunner } from "./ModuleRunner";
import { OrderETAs } from "./OrderETAs";
import { ConsumableTimers } from "./ConsumableTimers";
import { FleetETAs } from "./FleetETAs";
import { PostLM } from "./PostLM";
import { ShippingAds } from "./ShippingAds";
import { QueueLoad } from "./QueueLoad";
import { Notifications } from "./Notifications";
import { getPrices, getBurn, getBurnSettings, getContracts, updateFinancials, getCXPrices, getCXOS} from "./BackgroundRunner";
import { PMMGStyle, EnhancedColors, IconStyle } from "./Style";
import { ScreenUnpack } from "./ScreenUnpack";
import { Sidebar } from "./Sidebar";
import { CommandCorrecter } from "./CommandCorrecter";
import { CalculatorButton } from "./CalculatorButton";
import { ContractDrafts } from "./ContractDrafts";
import { ImageCreator } from "./ImageCreator";
import { InventoryOrganizer } from "./InventoryOrganizer";
import { HeaderMinimizer } from "./HeaderMinimizer";
import { PendingContracts } from "./PendingContracts";
import { CompactUI } from "./CompactUI";

try
{
	// Try and get stored settings using FireFox syntax
	browser.storage.local.get("PMMGExtended").then(mainRun, onError);
	console.log("FireFox detected");
} catch(err)
{
	// Method throws an error if not on FF, so then try and get stored settings using Chromium syntax
	console.log("Chromium detected");
	chrome.storage.local.get(["PMMGExtended"], function(result)
	{
		mainRun(result, "chromium");
	});
}

// The main function that initializes everything
function mainRun(result, browser?)
{
	// If no stored data, make it blank so it can be written to
	if(!result["PMMGExtended"]){result["PMMGExtended"] = {};}
	
	// Log if is the first time the user loads PMMG Extended
	if(!result["PMMGExtended"]["loaded_before"])
	{
		console.log("First Time Loading PMMG");
	}
	
	// Apply the PMMG styles necessary for modules to function
	const style = document.createElement("style");
	style.type = "text/css";
	style.id = "pmmg-style";
	style.textContent = PMMGStyle;
	const doc = document.querySelector("html");
	if(doc){doc.appendChild(style);}
	
	// If no module states are specified, disable screen unpack by default
	if(!result["PMMGExtended"]["disabled"]){result["PMMGExtended"]["disabled"] = ["ScreenUnpack"];}
	
	// If enhanced color scheme is selected or no color scheme is selected, appy the enhanced color scheme
	if(result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"])
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-enhanced-colors";
		colors.textContent = EnhancedColors;
		if(doc){doc.appendChild(colors);}
	}
	// If the icons color scheme is selected, apply it
	else if(result["PMMGExtended"]["color_scheme"] == "icons")	// Use allocater's icons
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-icon-colors";
		colors.textContent = IconStyle;
		if(doc){doc.appendChild(colors);}
	}
	
	// All asynchronous web data put in as keys into this dictionary
	const webData = {};
	
	// Start the process of getting corp prices via a web app asynchronously
	window.setTimeout(() => getPrices(webData, result["PMMGExtended"]["fin_spreadsheet"], result["PMMGExtended"]["fin_sheet_name"]), 1000);
	
	// Start the process of getting FIO burn asynchronously
	window.setTimeout(() => getBurn(webData, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]), 1000);
	
	// Start the process of getting FIO burn settings asynchronously
	window.setTimeout(() => getBurnSettings(webData, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]), 1000);
	
	window.setTimeout(() => getContracts(webData, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]), 1000);
	
	// Get player model (if financial recording is active)
	window.setTimeout(() => getCXPrices(webData), 1000);
	if(result["PMMGExtended"]["recording_financials"] != false && (!result["PMMGExtended"]["last_fin_recording"] || Date.now() - result["PMMGExtended"]["last_fin_recording"] > 72000000)) // 86400000
	{
		window.setTimeout(() => getCXOS(webData, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]), 1000);
		window.setTimeout(() => updateFinancials(webData, result), 1000);
	}
	// Create the object that will run all the modules in a loop
	const runner = new ModuleRunner([
		  new ShippingAds(),
		  new LocalMarketAds(),
		  new PostLM(webData),
		  new ContractDrafts(webData),
		  new OrderETAs(),
		  new FlightETAs(),
		  new FleetETAs(),
		  new QueueLoad(),
		  new ConsumableTimers(result["PMMGExtended"]["username"], webData, result["PMMGExtended"]["burn_thresholds"]),
		  new InventoryOrganizer(result["PMMGExtended"]["username"], webData, result),
		  new Notifications(),
		  new ImageCreator(),
		  new ScreenUnpack(result["PMMGExtended"]["unpack_exceptions"]),
		  new HeaderMinimizer(result["PMMGExtended"]["minimize_by_default"]),
		  new CommandCorrecter(),
		  new CalculatorButton(),
		  new Sidebar(result["PMMGExtended"]["sidebar"]),
		  new PendingContracts(result["PMMGExtended"]["username"], webData),
		  new CompactUI(result)
	], result, webData, browser);
	
	// Start the loop
	(function () {
	  runner.loop()
	})();
}

function onError(err)
{
	console.log(err);
}