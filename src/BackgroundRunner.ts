import {setSettings} from "./util";
import {calculateFinancials} from "./XIT/Finances";

// Get corp prices asynchronously
// "prices" will contain the prices after the end of the web request
export function getPrices(prices, webappID)
{
	// Return if the web app ID is missing
	if(!webappID){return;}
	
	// Create a new XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: Web App Timeout");
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Try to parse data received into prices
				console.log("PMMG: Retreived Prices from Web App");
				var priceData = JSON.parse(xhr.responseText);
				const keys = Object.keys(priceData);
				keys.forEach(key => {	// Copy data into prices array, preserving the original object
					prices[key] = priceData[key];
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from Web App");
			}
		}
		return;
    };
    
	// Make the request
	xhr.timeout = 10000;
	xhr.open("GET", "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22price%22", true);
	xhr.send(null);
	return;
}

// Get CX prices asynchronously
// "cxPrices" will contain the prices at the end of the web request
export function getCXPrices(cxPrices)
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
				priceData.forEach(mat => {	// For each material, for each CX, for each wanted data point, add that data point to the list
					cxPrices[mat["Ticker"]] = {};
					CXs.forEach(CX => {
						cxPrices[mat["Ticker"]][CX] = {};
						wantedResults.forEach(wanted => {
							cxPrices[mat["Ticker"]][CX][wanted] = mat[CX + "-" + wanted];
							return;
						});
						return;
					});
					return;
				});
				cxPrices["Age"] = Date.now();	// Date the data
				//console.log(cxPrices);
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
export function getBurn(burn, username, apikey)
{
	if(!burn){burn = {};}
	if(!apikey || !username){return;}	// If API key or username is missing, abort
	burn[username] = [];
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {	// On timeout, try again
		console.log("PMMG: FIO Burn Timeout");
		burn[username] = undefined;
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
					burn[username].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				burn[username] = undefined;
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
export function getGroupBurn(burn, groupid, apikey)
{
	if(!burn){burn = {};}
	if(!apikey || !groupid){return;}
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Timeout");
		burn[groupid] = undefined;
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
				burn[groupid] = [];
				burnData.forEach(data => { // Copy the results to the burn array
					burn[groupid].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				burn[groupid] = undefined;
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
export function getBurnSettings(burnSettings, username, apikey)
{
	if(!apikey || !username){return;}
	burnSettings.push("loading");	// Push a temporary value to the array to allow for easier parsing
	
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
				burnSettings[0] = "loaded";
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {	// Copy the settings data
					burnSettings.push(data);
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
export function getCXOS(cxos, username, apikey)
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
				cxosData.forEach(data => {	// Copy the settings data
					cxos.push(data);
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
export function getContracts(contracts, username, apikey)
{
	if(!contracts){contracts = {};}
	if(!apikey || !username){return;}	// If API key or username is missing, abort
	contracts[username] = [];
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {	// On timeout, try again
		console.log("PMMG: FIO Contract Timeout");
		contracts[username] = undefined;
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
					contracts[username].push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
				contracts[username] = undefined;
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

// Get FIO player data
// "playerData" will contain the settings at the end of the web request
export function updateFinancials(playerData, contracts, prices, cxos, result, count?)
{
	const username = result["PMMGExtended"]["username"];
	const apikey = result["PMMGExtended"]["apikey"];
	
	if(!playerData){playerData = {};}
	if(!apikey || !username){return;}	// If API key or username is missing, abort
	
	// Create an XML Http Request
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {	// On timeout, try again
		console.log("PMMG: FIO Player Data Timeout");
		playerData[username] = undefined;
		//updateFinancials(playerData, contracts, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				// Parse the results
				console.log("PMMG: Retreived Player Data from FIO");
				var data = JSON.parse(xhr.responseText);
				if(data["CXWarehouses"].length == 0)
				{
					if(count > 10)
					{
						console.log("PMMG: Error with FIO retrieving warehouse storage!");
						return;
					}
					window.setTimeout(() => updateFinancials(playerData, contracts, prices, cxos, result, count + 1), 1000);
					return;
				}
				Object.keys(data).forEach(key => {	// Copy the data into the player data variable
					playerData[key] = data[key];
				});
				calculateFinancials(playerData, contracts, prices, cxos, result, true);
				result["PMMGExtended"]["last_fin_recording"] = Date.now();
				setSettings(result);
				
			}
			catch(SyntaxError)
			{
				console.log("PMMG: Bad Data from FIO");
			}
		}
		return;
    };
	// Send the request
	xhr.timeout = 20000;
	xhr.open("POST", "https://rest.fnar.net" + "/fioweb/grouphub");
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(JSON.stringify([username]));
	return;
}