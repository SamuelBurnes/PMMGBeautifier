import {setSettings} from "./util";

// Get corp prices asynchronously
// "prices" will contain the prices after the end of the web request
export function getPrices(webData, sheetURL, sheetName)
{
	// Return if the web app ID is missing
	if(!sheetURL || !sheetName){return;}
	
	// Create a new XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: Custom Prices Timeout");
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				webData["custom_prices"] = {};
				// Try to parse data received into prices
				console.log("PMMG: Retreived Custom Prices");
				var priceData = JSON.parse(xhr.responseText);
				if(priceData.error)
				{
					console.log("PMMG: Custom Prices " + priceData.error);
					return;
				}
				else if(!priceData.prices)
				{
					console.log("PMMG: No Data from Custom Prices");
				}
				priceData.prices.forEach(price => {	// Copy data into prices array, preserving the original object
					webData["custom_prices"][price[0]] = price[1];
				});
				console.log(webData["custom_prices"]);
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from Custom Prices");
			}
		}
		return;
    };
    // Parse the URL
	const sheetID = sheetURL.match(/\/d\/([^\/]+)/);
	if(!sheetID || !sheetID[1])
	{
		return;
	}
	
	// Make the request
	xhr.timeout = 10000;
	xhr.open("GET", "https://script.google.com/macros/s/AKfycbwdxGx-OBVslFeXSSv-F_d55X_BTPs20vTMNiT8D9eIAkbcckXh9XAkX9fdBMIv1XrY/exec?id=" + sheetID[1] + "&sheet=" + sheetName, true);
	xhr.send(null);
	return;
}

// Get CX prices asynchronously
// "cxPrices" will contain the prices at the end of the web request
export function getCXPrices(userInfo)
{
	// Create a new XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: CX Price Timeout");
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived CX Prices");
				var priceData = JSON.parse(xhr.responseText);
				const wantedResults = ["AskPrice", "BidPrice", "Average", "AskAvail", "BidAvail"];	// The data points for each CX to pull
				const CXs = ["AI1", "CI1", "CI2", "IC1", "NC1", "NC2"];	// All the CXs
				
				userInfo["PMMG-User-Info"]["cx_prices"] = {};
				
				CXs.forEach(CX => {
					userInfo["PMMG-User-Info"]["cx_prices"][CX] = {};
					wantedResults.forEach(wanted => {
						userInfo["PMMG-User-Info"]["cx_prices"][CX][wanted] = {};
						priceData.forEach(mat => {
							userInfo["PMMG-User-Info"]["cx_prices"][CX][wanted][mat["Ticker"]] = mat[CX + "-" + wanted];
						});
					});
				});
				
				userInfo["PMMG-User-Info"]["cx_prices"]["Age"] = Date.now();	// Date the data
				setSettings(userInfo);
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from Rain Prices");
			}
		}
		return;
    };
    
	// Send the request
	xhr.timeout = 10000;
	xhr.open("GET", "https://rest.fnar.net" + "/rain/prices", true);
	xhr.send(null);
	return;
}

// Get FIO burn asynchronously
// "burn" will contain the burn at the end of the web request
export function getBurn(webData, username, apikey)
{
	if(!webData["burn"]){webData["burn"] = {};}
	if(!apikey || !username){return;}	// If API key or username is missing, abort
	webData["burn"][username] = [];
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {	// On timeout, try again
		console.log("PMMG: FIO Burn Timeout");
		webData["burn"][username] = undefined;
		//getBurn(burn, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived Burn from FIO");
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {	// Copy the data into the burn variable
					webData["burn"][username].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				webData["burn"][username] = undefined;
			}
		}
		return;
    };
    
	// Send the request
	xhr.timeout = 20000;
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

// Get FIO group burn asynchronously
// "burn" will contain the burn at the end of the web request
export function getGroupBurn(webData, groupid, apikey)
{
	if(!webData["burn"]){webData["burn"] = {};}
	if(!apikey || !groupid){return;}
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Timeout");
		webData["burn"][groupid] = undefined;
		//getGroupBurn(burn, groupid, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived Group Burn from FIO");
				var burnData = JSON.parse(xhr.responseText);
				webData["burn"][groupid] = [];
				burnData.forEach(data => { // Copy the results to the burn array
					webData["burn"][groupid].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				webData["burn"][groupid] = undefined;
			}
		}
		return;
    };
    
	// Send the request
	xhr.timeout = 20000;
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/group/" + groupid, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

// Get FIO burn settings asynchronously
// "burnSettings" will contain the settings at the end of the web request
export function getBurnSettings(webData, username, apikey)
{
	webData["burn_settings"] = [];
	webData["burn_settings"].push("loading");	// Push a temporary value to the array to allow for easier parsing
	if(!apikey || !username){return;}
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Settings Timeout");
		//getBurnSettings(burnSettings, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived Burn Settings from FIO");
				webData["burn_settings"][0] = "loaded";
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {	// Copy the settings data
					webData["burn_settings"].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
			}
		}
		return;
    };
    
	// Send the request
	xhr.timeout = 10000;
	xhr.open("GET", "https://rest.fnar.net" + "/usersettings/burnrate/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

// Get CXOS asynchronously
// "cxos" will contain the settings at the end of the web request
export function getCXOS(webData, username, apikey)
{
	if(!apikey || !username){return;}
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO CXOS Timeout");
		//getBurnSettings(burnSettings, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				
				// Parse the results
				console.log("PMMG: Retreived CXOS from FIO");
				var cxosData = JSON.parse(xhr.responseText);
				webData["cxos"] = [];
				cxosData.forEach(data => {	// Copy the settings data
					webData["cxos"].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
			}
		}
		return;
    };
    
	// Send the request
	xhr.timeout = 10000;
	xhr.open("GET", "https://rest.fnar.net" + "/cxos/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

// Get FIO contract data
// "burnSettings" will contain the settings at the end of the web request
export function getContracts(webData, username, apikey)
{
	if(!webData["contracts"]){webData["contracts"] = {};}
	if(!apikey || !username){return;}	// If API key or username is missing, abort
	webData["contracts"][username] = [];
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {	// On timeout, try again
		console.log("PMMG: FIO Contract Timeout");
		webData["contracts"][username] = undefined;
		//getContracts(contracts, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived Contracts from FIO");
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {	// Copy the data into the contract variable
					webData["contracts"][username].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				webData["contracts"][username] = undefined;
			}
		}
		return;
    };
	// Send the request
	xhr.timeout = 20000;
	xhr.open("GET", "https://rest.fnar.net" + "/contract/allcontracts");
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}
