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
	browser.storage.local.get("AHIBeautifier_Data").then(mainRun, onError);
	console.log("FireFox detected");
} catch(err)
{
	console.log("Chromium detected");
	chrome.storage.local.get(["AHIBeautifier_Data"], function(result)
	{
		mainRun(result);
	});
}

function mainRun(result)
{
	const style = document.createElement("style");
	style.type = "text/css";
	style.id = "pmmg-style";
	style.textContent = PMMGStyle;
	const doc = document.querySelector("html");
	if(doc != null){doc.appendChild(style);}
	
	if(result["AHIBeautifier_Data"] == undefined){result = {"AHIBeautifier_Data": [undefined, undefined, undefined, true, [], [], [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]]]};}
	
	if(result["AHIBeautifier_Data"][6] == undefined)
	{
		result["AHIBeautifier_Data"][6] = [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]];
	}
	if(result["AHIBeautifier_Data"][7] == undefined)
	{
		result["AHIBeautifier_Data"][7] = [3, 6];
	}
	if(result["AHIBeautifier_Data"][8] == undefined)
	{
		result["AHIBeautifier_Data"][8] = {};
	}
	if(result["AHIBeautifier_Data"][3] == true)
	{
		const colors = document.createElement("style");
		colors.type = "text/css";
		colors.id = "pmmg-enhanced-colors";
		colors.textContent = EnhancedColors;
		if(doc != null){doc.appendChild(colors);}
	}
	var prices = {};
	getPrices(prices, result["AHIBeautifier_Data"][2]);
	
	var burn = [];
	getBurn(burn, result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]);
	
	var burnSettings = [];
	getBurnSettings(burnSettings, result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]);
	
	const runner = new ModuleRunner([
		  new LocalMarketAds(),
		  new OrderETAs(),
		  new FlightETAs(),
		  new ShippingAds(),
		  new PostLM(prices),
		  new ContractDrafts(prices),
		  new QueueLoad(),
		  new ConsumableTimers(result["AHIBeautifier_Data"][0], burn, result["AHIBeautifier_Data"][7]),
		  new FleetETAs(),
		  new Notifications(),
		  new ScreenUnpack(result["AHIBeautifier_Data"][5]),
		  new CommandCorrecter(),
		  new CalculatorButton(),
		  new Sidebar(result["AHIBeautifier_Data"][6])
	], result, burn, burnSettings);
	
	(function () {
	  runner.loop()
	})();
}

function onError(err)
{
	console.log(err);
}