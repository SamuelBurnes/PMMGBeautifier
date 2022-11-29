import {downloadFile, clearChildren, XITWebRequest} from "../util";
import {Style} from "../Style";

export function Debug(tile, parameters, result, fullBurn, burnSettings)
{
	clearChildren(tile);
	const downloadButtons = document.createElement("div");
	tile.appendChild(downloadButtons);
	downloadButtons.appendChild(createDownloadButton(result["PMMGExtended"], "Download Full Settings", "pmmg-settings" + Date.now().toString() + ".json"));
	downloadButtons.appendChild(createDownloadButton(fullBurn[result["PMMGExtended"]["username"]], "Download Burn", "pmmg-burn" + Date.now().toString() + ".json"));
	downloadButtons.appendChild(createDownloadButton(burnSettings, "Download Burn Settings", "pmmg-burn-settings" + Date.now().toString() + ".json"));
	const endpointLabel = document.createElement("div");
	endpointLabel.textContent = "Get FIO Endpoint (ex: /infrastructure/Proxion)";
	endpointLabel.style.display = "block";
	endpointLabel.style.marginLeft = "4px";
	downloadButtons.appendChild(endpointLabel);
	const endpointInput = document.createElement("input");
	endpointInput.classList.add("input-text");
	endpointInput.style.display = "block";
	downloadButtons.appendChild(endpointInput);
	const endpointButton = document.createElement("button");
	endpointButton.textContent = "Download FIO Endpoint";
	endpointButton.classList.add(...Style.Button);
	endpointButton.classList.add(...Style.ButtonPrimary);
	endpointButton.style.marginLeft = "4px";
	endpointButton.style.marginBottom = "4px";
	endpointButton.style.display = "block";
	endpointButton.addEventListener("click", function() {
		const url = "https://rest.fnar.net" + (endpointInput.value.charAt(0) == "/" ? "" : "/") + endpointInput.value;
	    XITWebRequest(tile, parameters, Debug_post, url, "GET", ["Authorization", result["PMMGExtended"]["apikey"]], null);
	});
	downloadButtons.appendChild(endpointButton);
	return parameters;
}
export function Debug_post(tile, parameters, jsondata)
{
	try
	{
		console.log(JSON.parse(jsondata));
	} catch(ex){}
	downloadFile(jsondata, "fio-endpoint" + Date.now().toString() + ".json", false);
	return [tile, parameters];
}
function createDownloadButton(data, buttonName, fileName)
{
	const downloadButton = document.createElement("button");
	downloadButton.textContent = buttonName;
	downloadButton.classList.add(...Style.Button);
	downloadButton.classList.add(...Style.ButtonPrimary);
	downloadButton.style.marginLeft = "4px";
	downloadButton.style.marginBottom = "4px";
	downloadButton.style.display = "block";
	downloadButton.addEventListener("click", function() {
		console.log(data);
		downloadFile(data, fileName);
	});
	return downloadButton;
	
}
