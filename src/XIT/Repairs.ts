import {createTextSpan, clearChildren, XITWebRequest, setSettings} from "../util";

export function Repairs_pre(tile, parameters, result)
{
	clearChildren(tile);
	if(!result["PMMGExtended"]["username"])
	{
		tile.textContent = "Error! Missing Username";
		return;
	}
	if(!result["PMMGExtended"]["apikey"])
	{
		tile.textContent = "Error! Missing API Key";
		return;
	}
	if(!parameters[parameters.length - 1]["PMMGExtended"]){parameters.push(result);}
	XITWebRequest(tile, parameters, Repairs_post, "https://rest.fnar.net/sites/"+ result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
	
	return;
}

function Repairs_post(tile, parameters, jsondata)
{
	const result = parameters[parameters.length - 1];
	
	if(jsondata == undefined || jsondata == null){return;}
	var repairData;
	try
	{
		repairData = JSON.parse(jsondata);
	}
	catch(SyntaxError)
	{
		tile.textContent = "Error! Could Not Load Data!";
		return;
	}
	if(parameters.length < 3)
	{
		const title = createTextSpan("All Repairs");
		title.classList.add("title");
		tile.appendChild(title);
		
		const thresholdDiv = document.createElement("div");
		tile.appendChild(thresholdDiv);
		
		const thresholdInput = document.createElement("input");
		thresholdInput.classList.add("input-text");
		const thresholdText = createTextSpan("Age Threshold:");
		thresholdText.style.paddingLeft = "5px";
		thresholdInput.type = "number";
		thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
		thresholdInput.style.width = "60px";
		thresholdDiv.appendChild(thresholdText);
		thresholdDiv.appendChild(thresholdInput);
		const matTitle = createTextSpan("Shopping Cart");
		matTitle.classList.add("title");
		matTitle.style.paddingBottom = "2px";
		tile.appendChild(matTitle);
		const matDiv = document.createElement("div");
		tile.appendChild(matDiv);
		const buiTitle = createTextSpan("Buildings");
		buiTitle.classList.add("title");
		buiTitle.style.paddingTop = "5px";
		buiTitle.style.paddingBottom = "2px";
		tile.appendChild(buiTitle);
		const table = document.createElement("table");
		
		const head = document.createElement("thead");
		const hr = document.createElement("tr");
		head.appendChild(hr);
		table.appendChild(head);
		tile.appendChild(table);
		for(let t of ["Ticker", "Planet", "Age", "Condition"])
		{
			const header = document.createElement("th");
			header.textContent = t;
			header.style.paddingTop = "0";
			hr.appendChild(header);
		}
		var buildings = [] as any[];
		repairData.forEach(site => {
			site["Buildings"].forEach(build => {
				buildings.push([site["PlanetName"], build]);
				return;
			});
			return;
		});
		buildings.sort(globalBuildingSort);
		
		const body = document.createElement("tbody");
		table.appendChild(body);
		generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput);
		
		thresholdInput.addEventListener("input", function(){
			clearChildren(body);
			
			generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput);
			result["PMMGExtended"]["repair_threshold"] = thresholdInput.value || "70";
			setSettings(result);
		});
		
	}
	else
	{
		const title = createTextSpan(parameters[1] + " Repairs");
		title.classList.add("title");
		tile.appendChild(title);
		
		var siteData = undefined;
		repairData.forEach(site => {
			if(site["PlanetName"].toUpperCase() == parameters[1].toUpperCase() || site["PlanetIdentifier"].toUpperCase() == parameters[1].toUpperCase())
			{
				siteData = site;
			}
			return;
		});
		if(siteData == undefined){return;}
		
		const thresholdDiv = document.createElement("div");
		tile.appendChild(thresholdDiv);
		
		const thresholdInput = document.createElement("input");
		thresholdInput.classList.add("input-text");
		const thresholdText = createTextSpan("Age Threshold:");
		thresholdText.style.paddingLeft = "5px";
		thresholdInput.type = "number";
		thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
		thresholdInput.style.width = "60px";
		thresholdDiv.appendChild(thresholdText);
		thresholdDiv.appendChild(thresholdInput);
		const matTitle = createTextSpan("Shopping Cart");
		matTitle.classList.add("title");
		matTitle.style.paddingBottom = "2px";
		tile.appendChild(matTitle);
		const matDiv = document.createElement("div");
		tile.appendChild(matDiv);
		const buiTitle = createTextSpan("Buildings");
		buiTitle.classList.add("title");
		buiTitle.style.paddingTop = "5px";
		buiTitle.style.paddingBottom = "2px";
		tile.appendChild(buiTitle);
		const table = document.createElement("table");
		
		const head = document.createElement("thead");
		const hr = document.createElement("tr");
		head.appendChild(hr);
		table.appendChild(head);
		tile.appendChild(table);
		for(let t of ["Ticker", "Age", "Condition"])
		{
			const header = document.createElement("th");
			header.textContent = t;
			header.style.paddingTop = "0";
			hr.appendChild(header);
		}
		siteData["Buildings"].sort(buildingSort);
		
		const body = document.createElement("tbody");
		table.appendChild(body);
		generateRepairScreen(body, matDiv, siteData, thresholdInput);
		
		thresholdInput.addEventListener("input", function(){
			clearChildren(body);
			
			generateRepairScreen(body, matDiv, siteData, thresholdInput);
			result["PMMGExtended"]["repair_threshold"] = thresholdInput.value || "70";
			setSettings(result);
		});
	}
	return;
}

function generateRepairScreen(body, matDiv, siteData, thresholdInput)
{
	const nonProd = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];
	const materials = {};
	siteData["Buildings"].forEach(building => {
		const row = document.createElement("tr");
		body.appendChild(row);
		if(nonProd.includes(building["BuildingTicker"])){return;}
		const date = (((new Date()).getTime() - (building["BuildingLastRepair"] || building["BuildingCreated"])) / 86400000);
		if(date < parseFloat(thresholdInput.value)){return;}
		
		building["RepairMaterials"].forEach(mat => {
			if(materials[mat["MaterialTicker"]] == undefined){materials[mat["MaterialTicker"]] = mat["MaterialAmount"];}
			else{materials[mat["MaterialTicker"]] += mat["MaterialAmount"];}
			return;
		});
		
		var rowData = [building["BuildingTicker"], date.toLocaleString(undefined, {maximumFractionDigits: 1}), (building["Condition"] * 100).toLocaleString(undefined, {maximumFractionDigits: 1}) + "%"];
		for(let point of rowData)
		{
			const tableElem = document.createElement("td");
			row.appendChild(tableElem);
			tableElem.appendChild(createTextSpan(point));
		}
		return;
	});
	
	clearChildren(matDiv);
	matDiv.style.maxWidth = "200px";
	
	const table = document.createElement("table");
	matDiv.appendChild(table);
	const head = document.createElement("thead");
	const hr = document.createElement("tr");
	head.appendChild(hr);
	table.appendChild(head);
	for(let t of ["Material", "Amount"])
	{
		const header = document.createElement("th");
		header.textContent = t;
		header.style.paddingTop = "0";
		hr.appendChild(header);
	}
	const mbody = document.createElement("tbody");
	table.appendChild(mbody);
	Object.keys(materials).sort().forEach(mat => {
		const row = document.createElement("tr");
		mbody.appendChild(row);
		var rowData = [mat, materials[mat].toLocaleString(undefined)];
		for(let point of rowData)
		{
			const tableElem = document.createElement("td");
			row.appendChild(tableElem);
			tableElem.appendChild(createTextSpan(point));
		}
		return;
	});
	return;
}

function generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput)
{
	const nonProd = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];
	const materials = {};
	buildings.forEach(building => {
		const row = document.createElement("tr");
		body.appendChild(row);
		if(nonProd.includes(building[1]["BuildingTicker"])){return;}
		const date = (((new Date()).getTime() - (building[1]["BuildingLastRepair"] || building[1]["BuildingCreated"])) / 86400000);
		if(date < parseFloat(thresholdInput.value)){return;}
		
		building[1]["RepairMaterials"].forEach(mat => {
			if(materials[mat["MaterialTicker"]] == undefined){materials[mat["MaterialTicker"]] = mat["MaterialAmount"];}
			else{materials[mat["MaterialTicker"]] += mat["MaterialAmount"];}
		});
		
		var rowData = [building[1]["BuildingTicker"], building[0], date.toLocaleString(undefined, {maximumFractionDigits: 1}), (building[1]["Condition"] * 100).toLocaleString(undefined, {maximumFractionDigits: 1}) + "%"];
		for(let point of rowData)
		{
			const tableElem = document.createElement("td");
			row.appendChild(tableElem);
			tableElem.appendChild(createTextSpan(point));
		}
		return;
	});
	
	clearChildren(matDiv);
	matDiv.style.maxWidth = "200px";
	
	const table = document.createElement("table");
	matDiv.appendChild(table);
	const head = document.createElement("thead");
	const hr = document.createElement("tr");
	head.appendChild(hr);
	table.appendChild(head);
	for(let t of ["Material", "Amount"])
	{
		const header = document.createElement("th");
		header.textContent = t;
		header.style.paddingTop = "0";
		hr.appendChild(header);
	}
	const mbody = document.createElement("tbody");
	table.appendChild(mbody);
	Object.keys(materials).sort().forEach(mat => {
		const row = document.createElement("tr");
		mbody.appendChild(row);
		var rowData = [mat, materials[mat].toLocaleString(undefined)];
		for(let point of rowData)
		{
			const tableElem = document.createElement("td");
			row.appendChild(tableElem);
			tableElem.appendChild(createTextSpan(point));
		}
		return;
	});
	return;
}

function buildingSort(a, b)
{
	return a["Condition"] > b["Condition"] ? 1 : -1;
}

function globalBuildingSort(a, b)
{
	return a[1]["Condition"] > b[1]["Condition"] ? 1 : -1;
}
