import {clearChildren, createFinancialTextBox, createTextSpan, setSettings, getLocalStorage, createToolTip, createSelectOption, showWarningDialog, createTable, drawPieChart, drawLineChart, showBuffer, downloadFile} from "../util";
import {Style, TextColors} from "../Style";

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
	getLocalStorage("PMMG-Finance", chooseScreen, [tile, parameters, result]);
	return;
}

function chooseScreen(finResult, params)	// Params consists of [tile, parameters]
{
	finResult = finResult["PMMG-Finance"];
	if(!params[0] || !params[1] || !params[2]){return;}
	const tile = params[0];
	const parameters = params[1];
	const result = params[2];
	
	// Create settings screen
	if(parameters[1] && (parameters[1].toLowerCase() == "settings" || parameters[1].toLowerCase() == "set"))
	{
		// Create option for choosing pricing
		const pricingHeader = document.createElement('h3');
		pricingHeader.appendChild(document.createTextNode("Pricing Scheme"));
		pricingHeader.appendChild(createToolTip("Select a pricing scheme to calculate financials.", "right"));
		pricingHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(pricingHeader);
		
		const priceDiv = document.createElement("div");
		tile.appendChild(priceDiv);
	
		const priceLabel = createTextSpan("Pricing Scheme:");
		priceLabel.style.marginBottom = "4px";
		priceDiv.appendChild(priceLabel);
		
		const priceSelect = document.createElement("select");
		
		priceSelect.name = "price-select";
		priceSelect.id = "price-select";
		
		Object.keys(PricingSchemes).forEach(name => {
			priceSelect.appendChild(createSelectOption(name, name));
		});
		
		if(!result["PMMGExtended"]["pricing_scheme"] || !PricingSchemes[result["PMMGExtended"]["pricing_scheme"]])
		{
			(priceSelect.children[0] as HTMLOptionElement).selected = true;
		}
		else
		{
			(priceSelect.children[PricingSchemes[result["PMMGExtended"]["pricing_scheme"]]] as HTMLOptionElement).selected = true;
		}
		
		priceSelect.classList.add("select");
		priceSelect.style.marginLeft = "4px";
		
		priceSelect.addEventListener("change", function(){
			result["PMMGExtended"]["pricing_scheme"] = priceSelect.selectedOptions[0].value || undefined;
			setSettings(result);
		});
		
		priceDiv.appendChild(priceSelect);
		
		// Create option to import/export data
		const importHeader = document.createElement('h3');
		importHeader.appendChild(document.createTextNode("Import/Export Data"));
		importHeader.appendChild(createToolTip("Import or export financial data to a json file.", "right"));
		importHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(importHeader);
		
		const importDiv = document.createElement("div");
		tile.appendChild(importDiv);
		
		const importButton = document.createElement("button");
		importButton.textContent = "Import Finances";
		importButton.classList.add(...Style.Button);
		importButton.classList.add(...Style.ButtonPrimary);
		importButton.style.marginLeft = "4px";
		importButton.style.marginBottom = "4px";
		importDiv.appendChild(importButton);
		
		const importFile = document.createElement("input");
		importFile.type = "file";
		importFile.accept = ".json";
		importFile.style.display = "none";
		importDiv.appendChild(importFile);
		
		const errorTextBox = createTextSpan("Error Loading File!");
		errorTextBox.style.display = "none";
		importDiv.appendChild(errorTextBox);
			
		importButton.addEventListener("click", function() {
			importFile.click()
			return;
		});
		
		importFile.addEventListener("change", function() {
			if(!this.files){return;}
			const file = this.files[0];
			if(!file){return;}
			const reader = new FileReader();
			reader.onload = function(e){
				if(!e || !e.target){return;}
				try
				{
					const fileOutput = JSON.parse(e.target.result as string);
					finResult = {};
					Object.keys(fileOutput).forEach(key => {
						finResult[key] = fileOutput[key];
						return;
					});
					
					setSettings({"PMMG-Finance": finResult});
					errorTextBox.style.display = "none";
				} catch(ex)
				{
					console.log("PMMG: Error encountered processing file!");
					errorTextBox.style.display = "inline-block";
				}
			}
			reader.readAsText(file);
		});
		
		const exportButton = document.createElement("button");
		exportButton.textContent = "Export Finances";
		exportButton.classList.add(...Style.Button);
		exportButton.classList.add(...Style.ButtonPrimary);
		exportButton.style.marginLeft = "4px";
		exportButton.style.marginBottom = "4px";
		importDiv.appendChild(exportButton);
		
		exportButton.addEventListener("click", function(){
		const output = {};
		Object.keys(finResult).forEach(key => {
			output[key] = finResult[key];
		});
		
		downloadFile(output, "pmmg-finances" + Date.now().toString() + ".json");
	});
		
		// Create option for clearing data
		const clearHeader = document.createElement('h3');
		clearHeader.appendChild(document.createTextNode("Clear Data"));
		clearHeader.appendChild(createToolTip("Clear all current and historical financial data.", "right"));
		clearHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(clearHeader);
		
		const clearButton = document.createElement("button");
		clearButton.textContent = "Clear Data";
		clearButton.classList.add(...Style.Button);
		clearButton.classList.add(...Style.ButtonPrimary);
		clearButton.style.marginLeft = "4px";
		clearButton.style.marginBottom = "4px";
		tile.appendChild(clearButton);
		
		clearButton.addEventListener("click", function() {
			showWarningDialog(tile, "You are about to clear all current and historical financial data. Do you want to continue?", "Confirm", clearData);
		});
		return;
	}
	
	if(!finResult || Object.keys(finResult).length == 0)	// No data recorded
	{
		const header = document.createElement("h3");
		header.textContent = "No data has been recorded yet. Wait a few seconds then refresh the page. If this persists, contact PiBoy314.";
		header.style.textAlign = "center";
		header.style.width = "100%";
		tile.appendChild(header);
		return;
	}
	
	const locations = {};	// Extract info on locations and their total value
	finResult["Buildings"].forEach(inv => {
		if(locations[inv[0]])
		{
			locations[inv[0]][0] += inv[1];
			locations[inv[0]][2] += inv[1];
		}
		else
		{
			locations[inv[0]] = [inv[1], 0, inv[1]];
		}
	});
	
	finResult["Inventory"].forEach(inv => {
		if(locations[inv[0]])
		{
			locations[inv[0]][1] += inv[1];
			locations[inv[0]][2] += inv[1];
		}
		else
		{
			locations[inv[0]] = [0, inv[1], inv[1]];
		}
	});
	
	const locationsArray = [] as any[];
	Object.keys(locations).forEach(inv => {
		locationsArray.push([inv, locations[inv][0], locations[inv][1], locations[inv][2]]);
	});
	locationsArray.sort(financialSort);
	
	if(!parameters[1])	// Base finances screen
	{
		const quickHeader = document.createElement('h3');
		quickHeader.appendChild(document.createTextNode("Quick Links"));
		quickHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(quickHeader);
		
		const quickDiv = document.createElement("div");
		quickDiv.style.marginLeft = "5px";
		tile.appendChild(quickDiv);
		
		const quickButtons = [["SUMMARY", "SUMMARY"], ["CHARTS", "CHART"], ["SETTINGS", "SETTINGS"]];
		quickButtons.forEach(label => {
			const button = document.createElement("button");
			button.classList.add(...Style.Button);
			button.classList.add(...Style.ButtonPrimary);
			button.style.marginBottom = "5px";
			button.textContent = label[0];
			quickDiv.appendChild(button);
			button.addEventListener("click", function() {
				showBuffer("XIT FIN_" + label[1]);
			});
		});
		
		const chartsHeader = document.createElement('h3');
		chartsHeader.appendChild(document.createTextNode("Individual Charts"));
		chartsHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(chartsHeader);
		
		const chartsDiv = document.createElement("div");
		chartsDiv.style.marginLeft = "5px";
		tile.appendChild(chartsDiv);
		
		const chartButtons = [["EQUITY HISTORY", "HISTORY"], ["ASSETS BY TYPE", "ASSETPIE"], ["ASSETS BY LOCATION", "LOCATIONSPIE"]];
		chartButtons.forEach(label => {
			const button = document.createElement("button");
			button.classList.add(...Style.Button);
			button.classList.add(...Style.ButtonPrimary);
			button.style.marginBottom = "5px";
			button.textContent = label[0];
			chartsDiv.appendChild(button);
			button.addEventListener("click", function() {
				showBuffer("XIT FIN_CHART_" + label[1]);
			});
		});
		
		const infoHeader = document.createElement('h3');
		infoHeader.appendChild(document.createTextNode("Data Info"));
		infoHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(infoHeader);
		
		const infoDiv = document.createElement("div");
		tile.appendChild(infoDiv);
		infoDiv.style.margin = "5px";
		const dataPoints = createTextSpan((finResult["History"] ? finResult["History"].length : 0).toLocaleString() + " data points recorded");
		infoDiv.appendChild(dataPoints);
		dataPoints.style.display = "block";
		if(finResult["History"])
		{
			const oldestDate = new Date(finResult["History"][0][0]);
			const oldestDateElem = createTextSpan("Oldest data recorded on " + oldestDate.toLocaleDateString(undefined, {month: "2-digit", day: "2-digit"}));
			infoDiv.appendChild(oldestDateElem);
			oldestDateElem.style.marginTop = "5px";
			oldestDateElem.style.display = "block";
			
			const newestDate = new Date(finResult["History"][finResult["History"].length - 1][0]);
			const newestDateElem = createTextSpan("Latest data recorded at " + newestDate.toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"}) + " on " + newestDate.toLocaleDateString(undefined, {month: "2-digit", day: "2-digit"}));
			infoDiv.appendChild(newestDateElem);
			newestDateElem.style.marginTop = "5px";
			newestDateElem.style.display = "block";
		}
		
	}
	else if(parameters[1].toLowerCase() == "summary" || parameters[1].toLowerCase() == "sum")	// Summary financial screen (like FIN)
	{
		const lastReading = finResult["History"][finResult["History"].length - 1];
		
		const lastEquity = lastReading[1] + lastReading[2] + lastReading[3] - lastReading[4];
		const tileHeader = document.createElement("h2");
		tileHeader.title = "Financial Overview";
		tileHeader.textContent = "Key Figures";
		tileHeader.classList.add("fin-title");
		tile.appendChild(tileHeader);
		
		tile.appendChild(createFinancialTextBox(Math.round(lastReading[1]).toLocaleString(), "Fixed Assets", TextColors.Standard));
		tile.appendChild(createFinancialTextBox(Math.round(lastReading[2]).toLocaleString(), "Current Assets", TextColors.Standard));
		tile.appendChild(createFinancialTextBox(Math.round(lastReading[3]).toLocaleString(), "Liquid Assets", TextColors.Standard));
		tile.appendChild(createFinancialTextBox(Math.round(lastEquity).toLocaleString(), "Equity", TextColors.Standard));
		tile.appendChild(createFinancialTextBox(Math.round(lastReading[4]).toLocaleString(), "Liabilities", TextColors.Standard));
		
		for(var i = finResult["History"].length - 1; i >= 0; i--)
		{
			if(lastReading[0] - finResult["History"][i] > 86400000*7)
			{
				break;
			}
		}
		i++;
		
		const prevEquity = finResult["History"][i][1] + finResult["History"][i][2] + finResult["History"][i][3] - finResult["History"][i][4];
		const profit = Math.round(lastEquity - prevEquity);
		const color = profit > 0 ? TextColors.Success : TextColors.Failure;
		tile.appendChild(createFinancialTextBox(profit.toLocaleString(), "Profit", color));
		
		const breakdownHeader = document.createElement("h2");
		breakdownHeader.title = "Financial Breakdown";
		breakdownHeader.textContent = "Inventory Breakdown";
		breakdownHeader.classList.add("fin-title");
		tile.appendChild(breakdownHeader);
		
		const tbody = createTable(tile, ["Name", "Fixed Assets", "Current Assets", "Total Assets"]);
		
		
		locationsArray.forEach(inv => {
			const row = document.createElement("tr");
			tbody.appendChild(row);
			
			const firstTableElem = document.createElement("td");
			row.appendChild(firstTableElem);
			firstTableElem.appendChild(createTextSpan(inv[0]));
			inv.shift();
		
			for(let point of inv)
			{
				const tableElem = document.createElement("td");
				row.appendChild(tableElem);
				tableElem.appendChild(createTextSpan(point.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})));
			}
		});
	}
	else if(parameters[1].toLowerCase() == "chart" || parameters[1].toLowerCase() == "charts") // Some charts summarizing finances
	{
		if(parameters[2])
		{
			const graphDiv = document.createElement("div");
			graphDiv.style.margin = "5px";
			tile.appendChild(graphDiv);
			const graph = generateGraph(parameters[2], finResult, locationsArray);
			if(!graph)
			{
				graphDiv.appendChild(createTextSpan("Error! Not a valid graph type!"));
				return;
			}
			graphDiv.appendChild(graph);
			return;
		}
		if(finResult["History"].length == 0){return;}
		
		const lineHeader = document.createElement('h3');
		lineHeader.appendChild(document.createTextNode("Equity History"));
		lineHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(lineHeader);
		
		// Line chart of historical financial data
		const historyDiv = document.createElement("div");
		historyDiv.style.margin = "5px";
		historyDiv.style.marginTop = "10px";
		tile.appendChild(historyDiv);
		
		
		
		const linePlot = generateGraph("history", finResult, locationsArray);
		if(!linePlot){return;}
		linePlot.style.cursor = "pointer";
		linePlot.addEventListener("click", function() {
			showBuffer("XIT FIN_CHART_HISTORY");
		});
		
		historyDiv.appendChild(linePlot);
		
		const pieHeader = document.createElement('h3');
		pieHeader.appendChild(document.createTextNode("Asset Breakdown"));
		pieHeader.classList.add(...Style.SidebarSectionHead);
		tile.appendChild(pieHeader);
		
		const pieDiv = document.createElement("div");
		pieDiv.style.margin = "5px";
		tile.appendChild(pieDiv);
		
		
		// Pie chart of current financial split
		const pieCanvas = generateGraph("assetpie", finResult, locationsArray);
		if(!pieCanvas){return;}
		pieCanvas.style.cursor = "pointer";
		pieCanvas.style.marginRight = "-25px";
		pieCanvas.addEventListener("click", function() {
			showBuffer("XIT FIN_CHART_ASSETPIE");
		});
		pieDiv.appendChild(pieCanvas);
		
		// Pie chart of where fixed/current assets are located
		const locPieCanvas = generateGraph("locationspie", finResult, locationsArray);
		if(!locPieCanvas){return;}
		locPieCanvas.style.cursor = "pointer";
		locPieCanvas.addEventListener("click", function() {
			showBuffer("XIT FIN_CHART_LOCATIONSPIE");
		});
		pieDiv.appendChild(locPieCanvas);
		
		
	}
}

function generateGraph(graphType, finResult, locationsArray)
{
	switch(graphType.toLowerCase())
	{
		case "history":
			const dateData = [] as any[];
			const finData = [] as any[];
		
			finResult["History"].forEach(entry => {
				dateData.push(entry[0]);
				finData.push(entry[1] + entry[2] + entry[3] - entry[4]);
			});
			
			const linePlot = drawLineChart(dateData, finData, 400, 200, "Date", "Equity", "#f7a600", true);
			return linePlot;
		case "assetpie":
			const latestReport = finResult["History"][finResult["History"].length - 1];
			const pieCanvas = drawPieChart([latestReport[1], latestReport[2], latestReport[3]], 180, ["Fixed", "Current", "Liquid"]);
			return pieCanvas;
		case "locationspie":
			const locationNames = [] as any[];
			const locationValue = [] as any[];
			locationsArray.forEach(location => {
				locationNames.push(location[0]);
				locationValue.push(location[1] + location[2] + location[3]);
			});
			
			const locPieCanvas = drawPieChart(locationValue, 180, locationNames);
			return locPieCanvas;
	}
	return null;
}

function clearData()
{
	try
	{
		browser.storage.local.remove("PMMG-Finance");
	}
	catch(err)
	{
		chrome.storage.local.remove("PMMG-Finance");
	}
	return;
}

const PricingSchemes = {
	"AI1 AVG": 0,
	"AI1 ASK": 1,
	"AI1 BID": 2,
	"CI1 AVG": 3,
	"CI1 ASK": 4,
	"CI1 BID": 5,
	"CI2 AVG": 6,
	"CI2 ASK": 7,
	"CI2 BID": 8,
	"IC1 AVG": 9,
	"IC1 ASK": 10,
	"IC1 BID": 11,
	"NC1 AVG": 12,
	"NC1 ASK": 13,
	"NC1 BID": 14,
	"NC2 AVG": 15,
	"NC2 ASK": 16,
	"NC2 BID": 17
}

// Actually recording and processing the financials once they are received through BackgroundRunner.
export function calculateFinancials(playerData, contracts, prices, cxos, result, loop)
{
	const username = result["PMMGExtended"]["username"];
	// Wait until contracts and prices are in
	if(loop)
	{
		if(contracts[username].length != 0 && prices["Age"] && cxos.length != 0)
		{
			window.setTimeout(() => calculateFinancials(playerData, contracts, prices, cxos, result, false), 100);
			return;
		}
		else
		{
			window.setTimeout(() => calculateFinancials(playerData, contracts, prices, cxos, result, true), 50);
			return;
		}
	}
	
	var CX = "AI1";
	var priceType = "Average";
	if(result["PMMGExtended"]["pricing_scheme"])
	{
		const info = result["PMMGExtended"]["pricing_scheme"].split(" ");
		CX = info[0];
		switch(info[1])
		{
			case "AVG":
				priceType = "Average";
				break;
			case "ASK":
				priceType = "AskPrice";
				break;
			case "BID":
				priceType = "BidPrice";
				break;
		}
	}
	// Now we have the data, find financial value
	const finSnapshot = {};
	
	// Get currencies
	finSnapshot["Currencies"] = [];
	playerData["PlayerModels"][0]["Currencies"].forEach(currency => {
		finSnapshot["Currencies"].push([currency["CurrencyName"], Math.round(currency["Amount"] * 100) / 100]);
	});
	
	// Put together inventory value
	finSnapshot["Inventory"] = [];
	finSnapshot["Buildings"] = [];
	playerData["PlayerModels"][0]["Locations"].forEach(location => {
		var value = 0;
		if(location["BaseStorage"])
		{
			location["BaseStorage"]["Items"].forEach(mat => {
				if(prices[mat["MaterialTicker"]])
				{
					value += (prices[mat["MaterialTicker"]][CX][priceType] || prices[mat["MaterialTicker"]][CX]["Average"]) * mat["Units"];
				}
			});
		}
		
		if(location["WarehouseStorage"])
		{
			location["WarehouseStorage"]["Items"].forEach(mat => {
				if(prices[mat["MaterialTicker"]])
				{
					value += (prices[mat["MaterialTicker"]][CX][priceType] || prices[mat["MaterialTicker"]][CX]["Average"]) * mat["Units"];
				}
			});
		}
		if(value == 0){return;}
		finSnapshot["Inventory"].push([location["LocationName"], Math.round(value * 100) / 100]);
		return;
	});
	
	playerData["PlayerShipsInFlight"].forEach(ship => {
		var value = 0;
		if(!ship["Cargo"]["Items"]){return;}
		ship["Cargo"]["Items"].forEach(mat => {
			if(prices[mat["MaterialTicker"]])
			{
				value += (prices[mat["MaterialTicker"]][CX][priceType] || prices[mat["MaterialTicker"]][CX]["Average"]) * mat["Units"];
			}
		});
		
		if(ship["Fuel"]["CurrentSF"])
		{
			value += (prices["SF"][CX][priceType] || prices["SF"][CX]["Average"]) * ship["Fuel"]["CurrentSF"];
		}
		if(ship["Fuel"]["CurrentFF"])
		{
			value += (prices["FF"][CX][priceType] || prices["FF"][CX]["Average"]) * ship["Fuel"]["CurrentFF"];
		}
		
		if(value == 0){return;}
		finSnapshot["Inventory"].push([ship["ShipName"] || ship["ShipRegistration"], Math.round(value * 100) / 100]);
		return;
	});
	
	playerData["PlayerStationaryShips"].forEach(ship => {
		var value = 0;
		if(!ship["Cargo"]["Items"]){return;}
		ship["Cargo"]["Items"].forEach(mat => {
			if(prices[mat["MaterialTicker"]])
			{
				value += (prices[mat["MaterialTicker"]][CX][priceType] || prices[mat["MaterialTicker"]][CX]["Average"]) * mat["Units"];
			}
		});
		
		if(ship["Fuel"]["CurrentSF"])
		{
			value += (prices["SF"][CX][priceType] || prices["SF"][CX]["Average"]) * ship["Fuel"]["CurrentSF"];
		}
		if(ship["Fuel"]["CurrentFF"])
		{
			value += (prices["FF"][CX][priceType] || prices["FF"][CX]["Average"]) * ship["Fuel"]["CurrentFF"];
		}
		
		if(value == 0){return;}
		finSnapshot["Inventory"].push([ship["ShipName"] || ship["ShipRegistration"], Math.round(value * 100) / 100]);
		return;
	});
	
	// Put together building value
	playerData["PlayerModels"][0]["Locations"].forEach(location => {
		var value = 0;
		location["Buildings"].forEach(building => {
			building["ReclaimableMaterials"].forEach(mat => {
				if(prices[mat["MaterialTicker"]])
				{
					value += (prices[mat["MaterialTicker"]][CX][priceType] || prices[mat["MaterialTicker"]][CX]["Average"]) * mat["Units"];
				}
			});
		});
		if(value == 0){return;}
		finSnapshot["Buildings"].push([location["LocationName"], Math.round(value * 100) / 100]);
	});
	
	// Handle contracts
	let validContracts = contracts[username].filter(c => !invalidContractStatus.includes(c["Status"]));
	
	var contractValue = 0;
	var contractLiability = 0;
	validContracts.forEach(contract => {
		const party = contract["Party"];
		contract["Conditions"].forEach(condition => {
			if(condition["Status"] == "FULFILLED"){return;}
			if(condition["Type"] == "DELIVERY" || condition["Type"] == "PROVISION")
			{
				if(condition["Party"] == party)
				{
					contractLiability += (prices[condition["MaterialTicker"]][CX][priceType] || prices[condition["MaterialTicker"]][CX]["Average"]) * condition["MaterialAmount"];
				}
				else
				{
					contractValue += (prices[condition["MaterialTicker"]][CX][priceType] || prices[condition["MaterialTicker"]][CX]["Average"]) * condition["MaterialAmount"];
				}
			}
			else if(condition["Type"] == "PAYMENT")
			{
				if(condition["Party"] == party)
				{
					contractLiability += condition["Amount"];
				}
				else
				{
					contractValue += condition["Amount"];
				}
			}
		});
	});
	finSnapshot["ContractValue"] = Math.round(contractValue * 100) / 100;
	finSnapshot["ContractLiability"] = Math.round(contractLiability * 100) / 100;
	
	
	// Handle CXOS
	var cxBuyValue = 0;
	var cxSellValue = 0;
	cxos.forEach(order => {
		if(order["Status"] == "FILLED"){return;}
		
		if(order["OrderType"] == "SELLING")
		{
			cxSellValue += (prices[order["MaterialTicker"]][CX][priceType] || prices[order["MaterialTicker"]][CX]["Average"]) * order["Amount"];
		}
		else
		{
			cxBuyValue += order["Limit"] * order["Amount"];
		}
	});
	
	finSnapshot["CXBuy"] = Math.round(cxBuyValue * 100) / 100;
	finSnapshot["CXSell"] = Math.round(cxSellValue * 100) / 100;
	
	var liquid = 0;
	finSnapshot["Currencies"].forEach(currency => {
		liquid += currency[1];
	});
	liquid += cxBuyValue;
	
	var fixed = 0;
	finSnapshot["Buildings"].forEach(inv => {
		fixed += inv[1];
	});
	
	var current = cxSellValue + contractValue;
	finSnapshot["Inventory"].forEach(inv => {
		current += inv[1];
	});
	
	var liabilities = contractLiability;
	
	// History stored as [time, fixed, current, liquid, liabilities]
	finSnapshot["History"] = [Date.now(), Math.round(fixed * 100) / 100, Math.round(current * 100) / 100, Math.round(liquid * 100) / 100, Math.round(liabilities * 100) / 100];
	getLocalStorage("PMMG-Finance", writeFinancials, finSnapshot);
	
}

function writeFinancials(result, finSnapshot)
{
	var history = [] as any[];
	if(result["PMMG-Finance"] && result["PMMG-Finance"]["History"])
	{
		history = result["PMMG-Finance"]["History"];
	}
	history.push(finSnapshot["History"]);
	finSnapshot["History"] = history;
	result["PMMG-Finance"] = finSnapshot;
	setSettings(result);
}

const invalidContractStatus = [
	"FULFILLED",
	"BREACHED",
	"TERMINATED",
	"CANCELLED",
	"REJECTED"
];

function financialSort(a, b)
{
	return a[3] < b[3] ? 1 : -1;
}