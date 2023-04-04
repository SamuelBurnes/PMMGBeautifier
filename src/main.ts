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
import { getPrices, getBurn, getBurnSettings, getContracts} from "./BackgroundRunner";
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
		mainRun(result);
	});
}

// The main function that initializes everything
function mainRun(result)
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
	
	// Start the process of getting corp prices via a web app asynchronously
	var prices = {};
	getPrices(prices, result["PMMGExtended"]["webappid"]);
	
	// Start the process of getting FIO burn asynchronously
	var burn = [];
	getBurn(burn, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
	
	// Start the process of getting FIO burn settings asynchronously
	var burnSettings = [];
	getBurnSettings(burnSettings, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
	
	var contracts = [];
	getContracts(contracts, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
	// Create the object that will run all the modules in a loop
	const runner = new ModuleRunner([
		  new ShippingAds(),
		  new LocalMarketAds(),
		  new PostLM(prices),
		  new ContractDrafts(prices),
		  new OrderETAs(),
		  new FlightETAs(),
		  new FleetETAs(),
		  new QueueLoad(),
		  new ConsumableTimers(result["PMMGExtended"]["username"], burn, result["PMMGExtended"]["burn_thresholds"]),
		  new InventoryOrganizer(result["PMMGExtended"]["username"], burn, result),
		  new Notifications(),
		  new ImageCreator(),
		  new ScreenUnpack(result["PMMGExtended"]["unpack_exceptions"]),
		  new HeaderMinimizer(result["PMMGExtended"]["minimize_by_default"]),
		  new CommandCorrecter(),
		  new CalculatorButton(),
		  new Sidebar(result["PMMGExtended"]["sidebar"]),
		  new PendingContracts(result["PMMGExtended"]["username"], contracts),
	], result, burn, burnSettings);
	
	// Start the loop
	(function () {
	  runner.loop()
	})();
}

function onError(err)
{
	console.log(err);
}