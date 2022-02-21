var configureButton = document.getElementById('button');
var clearButton = document.getElementById('clearbutton');
var nameInput = document.getElementById('name');
var apiKeyInput = document.getElementById('apikey');
var webappIDInput = document.getElementById('webappID');
var loadingIndicator = document.getElementById('loadingindicator');
var curName = document.getElementById('curName');
var curAPIkey = document.getElementById('curAPIkey');
var curWebappID = document.getElementById('curWebappID');

var name;
var apikey;
var webappID;
browser.storage.local.get("AHIBeautifier_Data").then(setDisplayedValues, onError);

configureButton.addEventListener('click', function(event){ OnConfigure_Click(); });
clearButton.addEventListener('click', function(event){ OnClear_Click(); });

function OnClear_Click()
{
	name = undefined;
	apikey = undefined;
	webappID = undefined;
	browser.storage.local.set({"AHIBeautifier_Data" : [name, apikey, webappID]});
	browser.storage.local.get("AHIBeautifier_Data").then(setDisplayedValues, onError);
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
	
	browser.storage.local.set({"AHIBeautifier_Data" : [name, apikey, webappID]});
	browser.storage.local.get("AHIBeautifier_Data").then(setDisplayedValues, onError);
	
	SetLoadingIndicator(false);
}

function onError(error)
{
	console.log(error);
}

function setDisplayedValues(result)
{
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
	
	
	if(name != undefined && name != "undefined"){nameInput.value = name;
		curName.textContent = "Current: " + name;
	}
	else{curName.textContent = "Current: undefined";}
	
	
	if(apikey != undefined){curAPIkey.textContent = "Current: " + apikey.slice(0, 3) + "***...";}
	else{curAPIkey.textContent = "Current: undefined";}
	if(apikey != undefined){apiKeyInput.value = apikey;}
	
	
	
	if(webappID != undefined){curWebappID.textContent = "Current: " + webappID.slice(0, 3) + "***...";}
	else{curWebappID.textContent = "Current: undefined";}
	if(webappID != undefined){webappIDInput.value = webappID;}
	
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
