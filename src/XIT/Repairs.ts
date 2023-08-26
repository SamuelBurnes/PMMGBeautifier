import {createTextSpan, clearChildren, setSettings} from "../util";

export function Repairs_pre(tile, parameters, result, userInfo)
{
	clearChildren(tile);
	if(!userInfo["PMMG-User-Info"] || !userInfo["PMMG-User-Info"]["sites"])
	{
		tile.textContent = "Loading Repair Data...";
		tile.id = "pmmg-reload";
		return;
	}
	
	if(parameters.length < 2)
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
		userInfo["PMMG-User-Info"]["sites"].forEach(site => {
			if(site.type != "BASE"){return;}
			
			site.buildings.forEach(build => {
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
		userInfo["PMMG-User-Info"]["sites"].forEach(site => {
			if(site.type == "BASE" && site["PlanetName"].toUpperCase() == parameters[1].toUpperCase() || site["PlanetNaturalId"].toUpperCase() == parameters[1].toUpperCase())
			{
				siteData = site;
			}
			return;
		});
		if(!siteData){return;}
		
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
		if(!siteData["buildings"]){return;}
		(siteData["buildings"] as any[]).sort(buildingSort);
		
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
	siteData["buildings"].forEach(building => {
		const row = document.createElement("tr");
		body.appendChild(row);
		if(nonProd.includes(building["buildingTicker"])){return;}
		const date = (((new Date()).getTime() - building.lastRepair) / 86400000);
		if(date < parseFloat(thresholdInput.value)){return;}
		
		building.repairMaterials.forEach(mat => {
			if(materials[mat.material.ticker] == undefined){materials[mat.material.ticker] = mat.amount;}
			else{materials[mat.material.ticker] += mat.amount;}
			return;
		});
		
		var rowData = [building["buildingTicker"], date.toLocaleString(undefined, {maximumFractionDigits: 1}), (building["condition"] * 100).toLocaleString(undefined, {maximumFractionDigits: 1}) + "%"];
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

function generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput)	// Buildings is an array of type: [planetName, buildingInfo]
{
	const nonProd = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];
	const materials = {};
	buildings.forEach(building => {
		const row = document.createElement("tr");
		body.appendChild(row);
		if(nonProd.includes(building[1]["buildingTicker"])){return;}
		const date = (((new Date()).getTime() - building[1].lastRepair) / 86400000);
		if(date < parseFloat(thresholdInput.value)){return;}
		
		building[1].repairMaterials.forEach(mat => {
			if(materials[mat.material.ticker] == undefined){materials[mat.material.ticker] = mat.amount;}
			else{materials[mat.material.ticker] += mat.amount;}
		});
		
		var rowData = [building[1]["buildingTicker"], building[0], date.toLocaleString(undefined, {maximumFractionDigits: 1}), (building[1]["condition"] * 100).toLocaleString(undefined, {maximumFractionDigits: 1}) + "%"];
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
	return a["condition"] > b["condition"] ? 1 : -1;
}

function globalBuildingSort(a, b)
{
	return a[1]["condition"] > b[1]["condition"] ? 1 : -1;
}
