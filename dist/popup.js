var configureButton = document.getElementById('button');
var clearButton = document.getElementById('clearbutton');
var nameInput = document.getElementById('name');
var apiKeyInput = document.getElementById('apikey');
var webappIDInput = document.getElementById('webappID');
var loadingIndicator = document.getElementById('loadingindicator');
var curName = document.getElementById('curName');

var name = "";
var apikey = "";
var webappID = "";
chrome.storage.sync.get(["AHIBeautifier_Data"], function(result){
	if(result["AHIBeautifier_Data"] == null){
		name = undefined;
		apikey = undefined;
		webappID = undefined;
	}
	else
	{
		name = result["AHIBeautifier_Data"][0];
		apikey = result["AHIBeautifier_Data"][1];
		webappID = result["AHIBeautifier_Data"][2];
	}
	
	
	if(name != undefined){nameInput.value = name;
		curName.textContent = "Current Name: " + name;
		}
	else{curName.textContent = "Current Name: undefined";}
	
	
	if(apikey != undefined){curAPIkey.textContent = "Current API Key: " + apikey.slice(0, 3) + "***...";}
	else{curAPIkey.textContent = "Current API Key: undefined";}
	if(apikey != undefined){apiKeyInput.value = apikey;}
	
	
	
	if(webappID != undefined){curWebappID.textContent = "Current Web App ID: " + webappID.slice(0, 3) + "***...";}
	else{curWebappID.textContent = "Current Web App ID: undefined";}
	if(webappID != undefined){webappIDInput.value = webappID;}
	
	});

configureButton.addEventListener('click', function(event){ OnConfigure_Click(); });
clearButton.addEventListener('click', function(event){ OnClear_Click(); });

function OnClear_Click()
{
	name = undefined;
	apikey = undefined;
	webappID = undefined;
	chrome.storage.sync.set({"AHIBeautifier_Data" : [name, apikey, webappID]}, function(){console.log("Saved Configuration");});
	chrome.storage.sync.get(["AHIBeautifier_Data"], function(result){
		name = result["AHIBeautifier_Data"][0];
		curName.textContent = "Current Name: " + name;
		
		apikey = result["AHIBeautifier_Data"][1];
		if(apikey != undefined){curAPIkey.textContent = "Current API Key: " + apikey.slice(0, 3) + "***...";}
		else{curAPIkey.textContent = "Current API Key: undefined";}
		
		webappID = result["AHIBeautifier_Data"][2];
		if(webappID != undefined){curWebappID.textContent = "Current Web App ID: " + webappID.slice(0, 3) + "***...";}
		else{curWebappID.textContent = "Current Web App ID: undefined";}
		});
}

function OnConfigure_Click()
{
	newName = nameInput.value;
	newApikey = apiKeyInput.value;
	newWebappID = webappIDInput.value;
	SetLoadingIndicator(true);
	if(newName != ""){name = newName;}
	if(newApikey != ""){apikey = newApikey;}
	if(newWebappID != ""){webappID = newWebappID;}
	
	chrome.storage.sync.set({"AHIBeautifier_Data" : [name, apikey, webappID]}, function(){console.log("Saved Configuration");});
	chrome.storage.sync.get(["AHIBeautifier_Data"], function(result){
		name = result["AHIBeautifier_Data"][0];
		curName.textContent = "Current Name: " + name;
		
		apikey = result["AHIBeautifier_Data"][1];
		if(apikey != undefined){curAPIkey.textContent = "Current API Key: " + apikey.slice(0, 3) + "***...";}
		else{curAPIkey.textContent = "Current API Key: undefined";}
		
		webappID = result["AHIBeautifier_Data"][2];
		if(webappID != undefined){curWebappID.textContent = "Current Web App ID: " + webappID.slice(0, 3) + "***...";}
		else{curWebappID.textContent = "Current Web App ID: undefined";}
		});
	
	SetLoadingIndicator(false);
}

function SetLoadingIndicator(isLoading)
{
	if(isLoading){
		configureButton.disabled = true;
		loadingIndicator.style.visibility = "visible";
	}else{
		configureButton.disabled = false;
		loadingIndicator.style.visibility = "hidden";
	}
}
