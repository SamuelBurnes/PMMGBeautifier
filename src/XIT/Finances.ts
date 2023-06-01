import {clearChildren, createFinancialTextBox, createTextSpan, setSettings, getLocalStorage} from "../util";

export function Fin_pre(tile, parameters, result)
{
	clearChildren(tile);
	if(!result["PMMGExtended"]["recording_financials"])	// If not recording financial info, show screen with checkbox to enable
	{
		const header = document.createElement("h3");
		header.textContent = "You are not recording daily financial data, would you like to enable recording?";
		header.style.textAlign = "center";
		header.style.width = "100%";
		tile.appendChild(header);
		
		const checkboxDiv = document.createElement("div");
		checkboxDiv.style.alignItems = "center"
		checkboxDiv.style.display = "flex";
		checkboxDiv.style.justifyContent = "center"
		checkboxDiv.style.paddingBottom = "5px";
		tile.appendChild(checkboxDiv);
		
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.style.display = "inline-block";
		checkboxDiv.appendChild(checkbox);
		
		const label = document.createElement("div");
		label.textContent = "Enable Recording (Refresh needed to take effect)";
		label.style.display = "inline-block";
		label.style.marginTop = "2px";
		checkboxDiv.appendChild(label);
		
		const explainDiv = document.createElement("div");
		explainDiv.style.padding = "5px"
		tile.appendChild(explainDiv);
		explainDiv.appendChild(createTextSpan("PMMG can record your finances (using FIO data) to provide a more accurate estimate than the in-game FIN screen. The data is pulled at most every 24 hours and is stored locally like your other settings. You can access all the information from the XIT FIN buffer."));
		
		checkbox.addEventListener("click", function(){
			result["PMMGExtended"]["recording_financials"] = checkbox.checked;
			setSettings(result);
		});
		
		return;
	}
	
	// Get stored financial data
	getLocalStorage("PMMG-Finance", chooseScreen, [tile, parameters]);
	return;
}

function chooseScreen(result, params)	// Params consists of [tile, parameters]
{
	if(!params[0] || !params[1]){return;}
	const tile = params[0];
	const parameters = params[1];
	
	console.log(result);
	console.log(parameters);
	
	if(Object.keys(result).length == 0)	// No data recorded
	{
		const header = document.createElement("h3");
		header.textContent = "No data has been recorded yet. Wait a few seconds then refresh the page. If this persists, contact PiBoy314.";
		header.style.textAlign = "center";
		header.style.width = "100%";
		tile.appendChild(header);
	}
}