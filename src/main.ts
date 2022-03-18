import { FlightETAs } from "./FlightETAs";
import { LocalMarketAds } from './LocalMarketAds';
import { ModuleRunner } from "./ModuleRunner";
import { OrderETAs } from "./OrderETAs";
import { ConsumableTimers } from "./ConsumableTimers";
import { FleetETAs } from "./FleetETAs";
import { PostLM } from "./PostLM";
import { ShippingAds } from "./ShippingAds";
import { QueueLoad } from "./QueueLoad";
import { XITHandler } from "./XITHandler";
import { Notifications } from "./Notifications";
import { getPrices, getBurn, getBurnSettings } from "./BackgroundRunner";


//chrome.storage.sync.get(["AHIBeautifier_Data"], mainRun(result));
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
	if(result["AHIBeautifier_Data"] == undefined){result = {"AHIBeautifier_Data": [undefined, undefined, undefined]};}
	
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
		  new QueueLoad(),
		  new ConsumableTimers(result["AHIBeautifier_Data"][0], burn),
		  new FleetETAs(),
		  new XITHandler(result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1], result["AHIBeautifier_Data"][2], burn, burnSettings),
		  new Notifications()
	]);
	
	(function () {
	  runner.loop()
	})();
}

function onError(err)
{
	console.log(err);
}