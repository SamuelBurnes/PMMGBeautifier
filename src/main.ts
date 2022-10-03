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
import { PMMGStyle, EnhancedColors } from "./Style";
import { ScreenUnpack } from "./ScreenUnpack";
import { Sidebar } from "./Sidebar";
import { CommandCorrecter } from "./CommandCorrecter";
import { CalculatorButton } from "./CalculatorButton";
import { ContractDrafts } from "./ContractDrafts";

try
{
	browser.storage.local.get("AHIBeautifier_Data").then(restructure_ff, onError);
	console.log("FireFox detected");
} catch(err)
{
	console.log("Chromium detected");
	chrome.storage.local.get(["AHIBeautifier_Data"], function(result)
	{
		restructure_chrome(result);
	});
}

function restructure_chrome(result)
{
	console.log(result);
	if(result["AHIBeautifier_Data"] != undefined)
	{
		console.log("Transitioning to new data structure! No data loss should occur, contact PiBoy314 if it does.");
		var restructured = {};
		restructured["username"] = result["AHIBeautifier_Data"][0];
		restructured["apikey"] = result["AHIBeautifier_Data"][1];
		restructured["webappid"] = result["AHIBeautifier_Data"][2];
		restructured["color_scheme"] = (result["AHIBeautifier_Data"][3] || true) ? "enhanced" : undefined;
		restructured["disabled"] = result["AHIBeautifier_Data"][4];
		restructured["unpack_exceptions"] = result["AHIBeautifier_Data"][5];
		restructured["sidebar"] = result["AHIBeautifier_Data"][6];
		restructured["burn_thresholds"] = result["AHIBeautifier_Data"][7];
		restructured["burn_display_settings"] = [];
		// Iterate over old data structure, translate to new data structure
		Object.keys(result["AHIBeautifier_Data"][8]).forEach(key => {
			restructured["burn_display_settings"] = [key, result["AHIBeautifier_Data"][8][key]];
		});
		restructured["loaded_before"] = true;
		
		chrome.storage.local.set({"PMMGExtended": restructured}, function(){
			console.log("Success!");
			chrome.storage.local.remove("AHIBeautifier_Data");
			console.log("Deleted Old Data");
			mainRun({"PMMGExtended": restructured});
		});
		
	}
	else
	{
		chrome.storage.local.get(["PMMGExtended"], function(r)
		{
			mainRun(r);
		});
	}
	return;
}

function restructure_ff(result)
{
	if(result["AHIBeautifier_Data"] != undefined)
	{
		console.log("Transitioning to new data structure! No data loss should occur, contact PiBoy314 if it does.");
		var restructured = {};
		restructured["username"] = result["AHIBeautifier_Data"][0];
		restructured["apikey"] = result["AHIBeautifier_Data"][1];
		restructured["webappid"] = result["AHIBeautifier_Data"][2];
		restructured["color_scheme"] = (result["AHIBeautifier_Data"][3] || true) ? "enhanced" : undefined;
		restructured["unpack_exceptions"] = result["AHIBeautifier_Data"][4];
		restructured["sidebar"] = result["AHIBeautifier_Data"][6];
		restructured["burn_thresholds"] = result["AHIBeautifier_Data"][7];
		restructured["burn_display_settings"] = [];
		// Iterate over old data structure, translate to new data structure
		Object.keys(result["AHIBeautifier_Data"][8]).forEach(key => {
			restructured["burn_display_settings"] = [key, result["AHIBeautifier_Data"][8][key]];
		});
		restructured["loaded_before"] = true;
		
		browser.storage.local.set({"PMMGExtended": restructured}, function(){
			console.log("Success!");
			browser.storage.local.remove("AHIBeautifier_Data");
			console.log("Deleted Old Data");
			mainRun({"PMMGExtended": restructured});
		});
		
	}
	else
	{
		browser.storage.local.get(["PMMGExtended"], function(r)
		{
			mainRun(r);
		});
	}
	return;
}

function mainRun(result)
{
	console.log(result);
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
	if(doc != null){doc.appendChild(style);}
	
	if(result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"])
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-enhanced-colors";
		colors.textContent = EnhancedColors;
		if(doc != null){doc.appendChild(colors);}
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