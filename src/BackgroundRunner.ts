export function getPrices(prices, webappID)
{
	if(webappID == undefined || webappID == null){return;}
	
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("Web App Timeout");
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				console.log("Retreived Prices from Web App");
				var priceData = JSON.parse(xhr.responseText);
				const keys = Object.keys(priceData);
				keys.forEach(key => {
					prices[key] = priceData[key];
				});
			}
			catch(SyntaxError)
			{
				console.log("Bad Data from Web App");
			}
			return;
		}
    };
    
	xhr.timeout = 10000;
	xhr.open("GET", "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22price%22", true);
	xhr.send(null);
	return;
}

export function getBurn(burn, username, apikey)
{
	if(apikey == undefined || apikey == null || username == undefined || username == null){return;}
	
	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.log("FIO Burn Timeout");
		getBurn(burn, username, apikey);
	};
	
	xhr.onreadystatechange = function()
    {
	    if(xhr.readyState == XMLHttpRequest.DONE)
	    {
			try
			{
				console.log("Retreived Burn from FIO");
				var burnData = JSON.parse(xhr.responseText);
				burnData.forEach(data => {
					burn.push(data);
				});
			}
			catch(SyntaxError)
			{
				console.log("Bad Data from FIO");
				console.log(xhr.responseText);
			}
			return;
		}
    };
    
	xhr.timeout = 10000;
	xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
	return;
}