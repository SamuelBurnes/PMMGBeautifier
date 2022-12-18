var clearButton = document.getElementById('clearbutton');
var loadingIndicator = document.getElementById('loadingindicator');

clearButton.addEventListener('click', function(event){ OnClear_Click(); });

function OnClear_Click()
{
	try
	{
		browser.storage.local.remove("PMMGExtended");
		browser.storage.local.remove("PMMG-Notes");
	}
	catch(err)
	{
		chrome.storage.local.remove("PMMGExtended");
		chrome.storage.local.remove("PMMG-Notes");
	}
}

function onError(error)
{
	console.log(error);
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
