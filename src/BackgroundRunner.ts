export function getPrices(prices, webappID)
{
	if(webappID == undefined || webappID == null){return;}
	
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
				console.log("PMMG: Retreived Prices from Web App");
				var priceData = JSON.parse(xhr.responseText);
				const keys = Object.keys(priceData);
				keys.forEach(key => {
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
    
	xhr.timeout = 10000;
	xhr.open("GET", "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22price%22", true);
	xhr.send(null);
	return;
}

export function getBurn(burn, username, apikey)
{
	if(burn == undefined){burn = {};}
	if(apikey == undefined || apikey == null || username == undefined || username == null){return;}
	burn[username] = [];
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Timeout");
		burn[username] = undefined;
		getBurn(burn, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				console.log("PMMG: Retreived Burn from FIO");
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {
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
    
	xhr.timeout = 20000;
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

export function getGroupBurn(burn, groupid, apikey)
{
	if(burn == undefined){burn = {};}
	if(apikey == undefined || apikey == null || groupid == undefined || groupid == null){return;}
	
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Timeout");
		burn[groupid] = undefined;
		getGroupBurn(burn, groupid, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				console.log("PMMG: Retreived Group Burn from FIO");
				var burnData = JSON.parse(xhr.responseText);
				burn[groupid] = [];
				burnData.forEach(data => {
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
    
	xhr.timeout = 20000;
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/group/" + groupid, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}

export function getBurnSettings(burnSettings, username, apikey)
{
	if(apikey == undefined || apikey == null || username == undefined || username == null){return;}
	burnSettings.push("loading");
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("PMMG: FIO Burn Settings Timeout");
		getBurnSettings(burnSettings, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				console.log("PMMG: Retreived Burn Settings from FIO");
				burnSettings[0] = "loaded";
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {
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
    
	xhr.timeout = 10000;
	xhr.open("GET", "https://rest.fnar.net" + "/usersettings/burnrate/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}