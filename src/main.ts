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
import { getPrices, getCXPrices} from "./BackgroundRunner";
import { PMMGStyle, EnhancedColors, IconStyle, AdvancedStyle, ChatDeleteStyle, JoinLeaveStyle } from "./Style";
import { ScreenUnpack } from "./ScreenUnpack";
import { Sidebar } from "./Sidebar";
import { CommandCorrecter } from "./CommandCorrecter";
import { CalculatorButton } from "./CalculatorButton";
//import { ContractDrafts } from "./ContractDrafts";
import { ImageCreator } from "./ImageCreator";
import { InventoryOrganizer } from "./InventoryOrganizer";
import { HeaderMinimizer } from "./HeaderMinimizer";
import { PendingContracts } from "./PendingContracts";
import { CompactUI } from "./CompactUI";
import { calculateFinancials } from "./XIT/Finances";
import { FormulaReplacer } from "./FormulaEvaluator";
import { AdvancedMode } from "./AdvancedMode";
import { CXOBHighlighter } from "./CXOBHighlighter";
import { CXPOOrderBook } from "./CXPOOrderBook";
import { ChatDeleteButton } from "./ChatDeleteButton";
import { IconMarkers } from "./IconMarkers";
import { InsetFixer } from "./InsetFixer";

// Inject page_script.js directly into the webpage.

function AddScriptToDOM(script_name)
{
	var browser = typeof browser === "undefined" ? chrome : browser;
	
    var s = document.createElement('script');
    s.src = browser.runtime.getURL(script_name);
    s.onload = function() {
        s.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

AddScriptToDOM("page_script.js");

try
{
	// Try and get stored settings using FireFox syntax
	browser.storage.local.get("PMMGExtended").then(mainRun, onError);
	console.log("PMMG: FireFox detected");
} catch(ex)
{
	// Method throws an error if not on FF, so then try and get stored settings using Chromium syntax
	console.log("PMMG: Chromium detected");
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
	
	if(result["PMMGExtended"]["advanced_mode"] && doc)
	{
		const advancedStyle = document.createElement("style");
		advancedStyle.type = "text/css";
		advancedStyle.id = "pmmg-advanced";
		advancedStyle.textContent = AdvancedStyle;
		doc.appendChild(advancedStyle);
	}
	
	// Apply hiding chat delete button if enabled
	if(result["PMMGExtended"]["chat_delete_hidden"])
	{
		const chatDelete = document.createElement("style");
		chatDelete.type = "text/css";
		chatDelete.id = "pmmg-chat-delete-style";
		chatDelete.textContent = ChatDeleteStyle;
		if(doc){doc.appendChild(chatDelete);}
	}
	
	// Apply hiding join/leave messages if enabled
	if(result["PMMGExtended"]["join_leave_hidden"])
	{
		const joinLeave = document.createElement("style");
		joinLeave.type = "text/css";
		joinLeave.id = "pmmg-chat-join-style";
		joinLeave.textContent = JoinLeaveStyle;
		if(doc){doc.appendChild(joinLeave);}
	}
	
	// Introduce an object that will hold and be periodically updated with latest info harvested from server traffic
	const userInfo = {};
	
	// All asynchronous web data put in as keys into this dictionary
	const webData = {};
	
	// Start the process of getting corp prices via a web app asynchronously
	window.setTimeout(() => getPrices(webData, result["PMMGExtended"]["fin_spreadsheet"], result["PMMGExtended"]["fin_sheet_name"]), 1000);
	
	// Get CX Prices
	window.setTimeout(() => getCXPrices(userInfo), 1000);
	
	// Do FIN recording
	if(result["PMMGExtended"]["recording_financials"] != false && (!result["PMMGExtended"]["last_fin_recording"] || Date.now() - result["PMMGExtended"]["last_fin_recording"] > 64800000)) // 72000000
	{
		window.setTimeout(() => calculateFinancials(webData, userInfo, result, true), 1000);
	}
	// Create the object that will run all the modules in a loop
	const runner = new ModuleRunner([
		  new ShippingAds(),
		  new LocalMarketAds(),
		  new PostLM(webData),
		  //new ContractDrafts(webData),
		  new OrderETAs(),
		  new FlightETAs(),
		  new FleetETAs(),
		  new QueueLoad(),
		  new ConsumableTimers(result["PMMGExtended"]["burn_thresholds"], userInfo),
		  new InventoryOrganizer(userInfo, result),
		  new Notifications(),
		  new ImageCreator(),
		  new ScreenUnpack(result["PMMGExtended"]["unpack_exceptions"]),
		  new HeaderMinimizer(result["PMMGExtended"]["minimize_by_default"]),
		  new AdvancedMode(result["PMMGExtended"]["advanced_mode"]),
		  new CommandCorrecter(),
		  new CalculatorButton(),
		  new Sidebar(result["PMMGExtended"]["sidebar"]),
		  new PendingContracts(userInfo),
		  new CompactUI(result),
		  new FormulaReplacer(),
		  new CXOBHighlighter(userInfo),
		  new CXPOOrderBook(userInfo),
		  new ChatDeleteButton(result),
		  new IconMarkers(),
		  new InsetFixer(),	// Remove when this PrUN bug is fixed for real
	], result, webData, userInfo, browser);
	
	// Start the loop
	(function () {
	  runner.loop();
	  runner.loopUserInfo();
	})();
}

function onError(err)
{
	console.log(err);
}