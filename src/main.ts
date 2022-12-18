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
import { getPrices, getBurn, getBurnSettings } from "./BackgroundRunner";
import { PMMGStyle, EnhancedColors, IconStyle } from "./Style";
import { ScreenUnpack } from "./ScreenUnpack";
import { Sidebar } from "./Sidebar";
import { CommandCorrecter } from "./CommandCorrecter";
import { CalculatorButton } from "./CalculatorButton";
import { ContractDrafts } from "./ContractDrafts";
import { ImageCreator } from "./ImageCreator";

try
{
	browser.storage.local.get("PMMGExtended").then(mainRun, onError);
	console.log("FireFox detected");
} catch(err)
{
	console.log("Chromium detected");
	chrome.storage.local.get(["PMMGExtended"], function(result)
	{
		mainRun(result);
	});
}

function mainRun(result)
{
	if(!result["PMMGExtended"]){result["PMMGExtended"] = {};}
	
	if(!result["PMMGExtended"]["loaded_before"])
	{
		console.log("First Time Loading PMMG");
	}
	
	const style = document.createElement("style");
	style.type = "text/css";
	style.id = "pmmg-style";
	style.textContent = PMMGStyle;
	const doc = document.querySelector("html");
	if(doc){doc.appendChild(style);}
	
	if(!result["PMMGExtended"]["disabled"]){result["PMMGExtended"]["disabled"] = ["ScreenUnpack"];}
	
	if(result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"])
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-enhanced-colors";
		colors.textContent = EnhancedColors;
		if(doc){doc.appendChild(colors);}
	}
	else if(result["PMMGExtended"]["color_scheme"] == "icons")	// Use allocater's icons
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-icon-colors";
		colors.textContent = IconStyle;
		if(doc){doc.appendChild(colors);}
	}
	var prices = {};
	getPrices(prices, result["PMMGExtended"]["webappid"]);
	
	var burn = [];
	getBurn(burn, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
	
	var burnSettings = [];
	getBurnSettings(burnSettings, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
	
	const runner = new ModuleRunner([
		  new LocalMarketAds(),
		  new OrderETAs(),
		  new FlightETAs(),
		  new ShippingAds(),
		  new PostLM(prices),
		  new ContractDrafts(prices),
		  new QueueLoad(),
		  new ConsumableTimers(result["PMMGExtended"]["username"], burn, result["PMMGExtended"]["burn_thresholds"]),
		  new FleetETAs(),
		  new Notifications(),
		  new ScreenUnpack(result["PMMGExtended"]["unpack_exceptions"]),
		  new ImageCreator(),
		  new CommandCorrecter(),
		  new CalculatorButton(),
		  new Sidebar(result["PMMGExtended"]["sidebar"])
	], result, burn, burnSettings);
	
	(function () {
	  runner.loop()
	})();
}

function onError(err)
{
	console.log(err);
}