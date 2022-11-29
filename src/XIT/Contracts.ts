import {clearChildren, createLink, createTextSpan, XITWebRequest, createTable, createMaterialElement} from "../util";
import {TextColors} from "../Style";

export function Contracts_pre(tile, parameters, result)
{
	clearChildren(tile);
	if(!result["PMMGExtended"]["username"])
	{
		tile.textContent = "Error! Missing Username!";
		return;
	}
	if(!result["PMMGExtended"]["apikey"])
	{
		tile.textContent = "Error! Missing API Key!";
		return;
	}
	XITWebRequest(tile, parameters, Contracts_post, "https://rest.fnar.net/contract/allcontracts/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
	return;
}

function Contracts_post(tile, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null) { return; }

	var contractData;
	try {
		contractData = JSON.parse(jsondata);
	} catch(SyntaxError) {
		tile.textContent = "Error! Could Not Load Data!";
		return;
	}
	
	const invalidContractStatus = [
		"FULFILLED",
		"BREACHED",
		"TERMINATED",
		"CANCELLED",
		"REJECTED"
	];

	const validContracts = {
		buying: [] as any,
		selling: [] as any,
		shipping: [] as any
	};

	contractData.map(contract => {
		if (!invalidContractStatus.includes(contract["Status"])){
			let viewingParty = contract["Party"];

			if (contract["Conditions"].length === 2 || contract["Conditions"].length === 3) {
				let viewingPartyConditionType = contract["Conditions"].map(condition => {
					if (condition["Party"] === viewingParty)
						return condition;
				}).filter(x => x !== undefined)[0]["Type"];

				let conditions = [] as any;
				for (let conditionType of [contract["Conditions"].length == 2 ? "DELIVERY" : "PROVISION", "PAYMENT", "COMEX_PURCHASE_PICKUP"])
				{
					
					contract["Conditions"].forEach(condition => {
						if(condition["Type"] === conditionType)
						{
							conditions.push(condition);
							return;
						}
					});
				}
				contract["Conditions"] = conditions;

				if (viewingPartyConditionType === "PAYMENT") {
					validContracts["buying"].push(contract);
				}
				else if (viewingPartyConditionType === "DELIVERY" || viewingPartyConditionType === "PROVISION") {
					validContracts["selling"].push(contract);
				}
					
			} else if (contract["Conditions"].length === 4) {
				let conditions = [] as any;
				for (let conditionType of ["SHIPMENT_PROVISION", "PAYMENT", "SHIPMENT_PICKUP", "SHIPMENT_DELIVERY"])
				{
					contract["Conditions"].forEach(condition => {
						if(condition["Type"] === conditionType)
						{
							conditions.push(condition);
							return;
						}
					});
				}
				contract["Conditions"] = conditions;

				validContracts["shipping"].push(contract);
			}

			return contract;
		}
	}).filter(x => x !== undefined);

	validContracts["buying"].sort(ContractSort);
	validContracts["selling"].sort(ContractSort);
	validContracts["shipping"].sort(ContractSort);
	
	const buyTable = createTable(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"], "Buying");	
	if (validContracts["buying"].length === 0){
		const line = CreateNoContractsRow(7);
		buyTable.appendChild(line);
	} else {
		validContracts["buying"].forEach(contract => {		
			const line = CreateContractRow(contract);
			buyTable.appendChild(line);
		});
	}

	const sellTable = createTable(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"], "Selling");	
	if (validContracts["selling"].length === 0){
		const line = CreateNoContractsRow(7);
		sellTable.appendChild(line);
	} else {
		validContracts["selling"].forEach(contract => {	
			const line = CreateContractRow(contract);
			sellTable.appendChild(line);
		});
	}	
	
	const shipTable = createTable(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up", "Deliver"], "Shipping");	
	if (validContracts["shipping"].length === 0){
		const line = CreateNoContractsRow(8);
		shipTable.appendChild(line);
	} else {
		validContracts["shipping"].forEach(contract => {
			const conditions = contract["Conditions"];

			const line = document.createElement("tr");
			shipTable.appendChild(line);

			const materialColumn = document.createElement("td");
			materialColumn.style.width = "32px";
			materialColumn.style.paddingLeft = "10px";

			const matElem = createMaterialElement(conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["MaterialTicker"] : "SHPT", "prun-remove-js", conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["MaterialAmount"] : "none", false, true);
			if(matElem){materialColumn.appendChild(matElem);}
			line.appendChild(materialColumn);

			const nameColumn = document.createElement("td");
			nameColumn.appendChild(createLink(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]));
			line.appendChild(nameColumn);

			const partnerColumn = document.createElement("td");
			partnerColumn.appendChild(createLink(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]));
			line.appendChild(partnerColumn);

			const pending = (conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["Status"] === "FULFILLED" && conditions[1]["Status"] === "FULFILLED" : conditions[2]["Status"] === "FULFILLED" && conditions[3]["Status"] === "FULFILLED");
			const pendingColumn = document.createElement("td");
			const pendingCheck = createTextSpan("⬤");
			pendingCheck.style.color = pending ? TextColors.Success : TextColors.Failure;
			pendingCheck.style.fontWeight = "bold";
			pendingColumn.style.textAlign = "center";
			pendingColumn.appendChild(pendingCheck);
			line.appendChild(pendingColumn);

			const provColumn = document.createElement("td");
			const provCheck = createTextSpan(conditions[0]["Status"] === "FULFILLED" ? "✓" : "X");
			provCheck.style.color = conditions[0]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
			provCheck.style.fontWeight = "bold";
			provColumn.style.textAlign = "center";
			provColumn.appendChild(provCheck);
			line.appendChild(provColumn);

			const payColumn = document.createElement("td");
			const payCheck = createTextSpan(conditions[1]["Status"] === "FULFILLED" ? "✓" : "X");
			payCheck.style.color = conditions[1]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
			payCheck.style.fontWeight = "bold";
			payColumn.style.textAlign = "center";
			payColumn.appendChild(payCheck);
			line.appendChild(payColumn);

			const pickUp = document.createElement("td");
			const pickUpCheck = createTextSpan(conditions[2]["Status"] === "FULFILLED" ? "✓" : "X");
			pickUpCheck.style.color = conditions[2]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
			pickUpCheck.style.fontWeight = "bold";
			pickUp.style.textAlign = "center";
			pickUp.appendChild(pickUpCheck);
			line.appendChild(pickUp);

			const delivColumn = document.createElement("td");
			const delivCheck = createTextSpan(conditions[3]["Status"] === "FULFILLED" ? "✓" : "X");
			delivCheck.style.color = conditions[3]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
			delivCheck.style.fontWeight = "bold";
			delivColumn.style.textAlign = "center";
			delivColumn.appendChild(delivCheck);
			line.appendChild(delivColumn);
		});
	}
	
	return parameters;
}

const CreateNoContractsRow = (colspan) => {
	var line = document.createElement("tr");
	const textColumn = document.createElement("td");
	textColumn.setAttribute('colspan', `${colspan}`);
	textColumn.textContent = "No contracts";
	line.appendChild(textColumn);
	return line;
}

function CreateContractRow(contract) {
	const conditions = contract["Conditions"];

	var line = document.createElement("tr");
	

	const materialColumn = document.createElement("td");
	materialColumn.style.width = "32px";
	materialColumn.style.paddingLeft = "10px";

	const matElem = createMaterialElement(conditions[0]["MaterialTicker"], "prun-remove-js", conditions[0]["MaterialAmount"], false, true);
	if(matElem){materialColumn.appendChild(matElem);}
	line.appendChild(materialColumn);

	const nameColumn = document.createElement("td");
	nameColumn.appendChild(createLink(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]));
	line.appendChild(nameColumn);

	const partnerColumn = document.createElement("td");
	partnerColumn.appendChild(createLink(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]));
	line.appendChild(partnerColumn);

	const pendingColumn = document.createElement("td");
	const pendingCheck = createTextSpan("⬤");
	let viewersCondition = conditions[0]["Party"] === contract["Party"] ? conditions[0] : conditions[1];
	pendingCheck.style.color = viewersCondition["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	pendingCheck.style.fontWeight = "bold";
	pendingColumn.style.textAlign = "center";
	pendingColumn.appendChild(pendingCheck);
	line.appendChild(pendingColumn);

	const provColumn = document.createElement("td");
	const provCheck = createTextSpan(conditions[0]["Status"] === "FULFILLED" ? "✓" : "X");
	provCheck.style.color = conditions[0]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	provCheck.style.fontWeight = "bold";
	provColumn.style.textAlign = "center";
	provColumn.appendChild(provCheck);
	line.appendChild(provColumn);

	const payColumn = document.createElement("td");
	const payCheck = createTextSpan(conditions[1]["Status"] === "FULFILLED" ? "✓" : "X");
	payCheck.style.color = conditions[1]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	payCheck.style.fontWeight = "bold";
	payColumn.style.textAlign = "center";
	payColumn.appendChild(payCheck);
	line.appendChild(payColumn);

	const pickUp = document.createElement("td");
	const pickUpCheck = createTextSpan(conditions.length == 3 ? (conditions[2]["Status"] === "FULFILLED" ? "✓" : "X") : "");
	pickUpCheck.style.color = conditions[2] == undefined || conditions[2]["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	pickUpCheck.style.fontWeight = "bold";
	pickUp.style.textAlign = "center";
	pickUp.appendChild(pickUpCheck);
	line.appendChild(pickUp);

	return line;
};

function ContractSort(a, b)
{
	return a["DueDateEpochMs"] > b["DueDateEpochMs"] ? 1 : -1;
}
