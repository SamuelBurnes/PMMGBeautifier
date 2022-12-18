import {clearChildren, createLink, createTextSpan, XITWebRequest, createTable, createMaterialElement, createTextDiv} from "../util";
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

async function Contracts_post(tile, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null) { return; }

	var contractData;
	try {
		contractData = JSON.parse(jsondata);
	} catch(SyntaxError) {
		tile.textContent = "Error! Could Not Load Data!";
		return;
	}
	
	let validContracts = contractData.filter(c => !invalidContractStatus.includes(c["Status"]));

	validContracts.map(contract => {
		contract["IsFaction"] = false;
		contract["materialCondition"] = null;

		let selfConditions = [] as any;
		let partnerConditions = [] as any;
		
		contract.Conditions.map((condition) => {
			// Determine if REPUTATION condition type exists to denote Faction contract
			if (condition["Type"] === "REPUTATION")
				contract["IsFaction"] = true;

			if (condition["MaterialTicker"] !== null && materialFulfilmentType.includes(condition["Type"]))
				contract["materialCondition"] = condition;

			// Categorize conditions by who fulfills it
			if (condition["Party"] === contract["Party"])
				selfConditions.push(condition);
			else
				partnerConditions.push(condition);
		});

		// Sort each category by ConditionIndex
		selfConditions.sort(conditionSort);
		partnerConditions.sort(conditionSort);
		
		// Clear out default condition list and replace with named arrays
		contract.Conditions = {};
		contract.Conditions["self"] = selfConditions;
		contract.Conditions["partner"] = partnerConditions;
	});

	validContracts.sort(ContractSort);
	
	const table = createTable(tile, ["Contract ID", "Material", "My Conditions", "Partner's Conditions"]);
	if (validContracts.length === 0){
		const row = createNoContractsRow(4);
		table.appendChild(row);
	} else {
		validContracts.forEach(contract => {		
			const row = createContractRow(contract);
			table.appendChild(row);
		});
	}
	
	return parameters;
}

const invalidContractStatus = [
	"FULFILLED",
	"BREACHED",
	"TERMINATED",
	"CANCELLED",
	"REJECTED"
];

function createContractRow(contract) {
	var row = document.createElement("tr");

	let contractLink = createLink(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"])
	const contractIdColumn = document.createElement("td");
	contractIdColumn.appendChild(contract["IsFaction"] ? factionContract(contractLink) : contractLink);
	row.appendChild(contractIdColumn);

	// const deadlineColumn = document.createElement("td");
	// deadlineColumn.appendChild(createTextSpan(convertDurationToETA(new Date(contract["DateEpochMs"] / 1000).getSeconds())));
	// row.appendChild(deadlineColumn);

	const materialColumn = document.createElement("td");
	materialColumn.style.width = "32px";
	materialColumn.style.paddingLeft = "10px";

	if (contract["materialCondition"]) {
		let materialCondition = contract["materialCondition"];
		const materialElement = createMaterialElement(materialCondition["MaterialTicker"], "prun-remove-js", materialCondition["MaterialAmount"], false, true);
		if(materialElement) { materialColumn.appendChild(materialElement); }
	}
	row.appendChild(materialColumn);
	
	const selfColumn = document.createElement("td");
	for (let condition of contract.Conditions["self"])
		selfColumn.appendChild(conditionStatus(condition));
	row.appendChild(selfColumn);

	let partnerLink = createLink(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]);
	const partnerColumn = document.createElement("td");
	partnerColumn.appendChild(partnerLink);
	for (let condition of contract.Conditions["partner"])
		partnerColumn.appendChild(conditionStatus(condition));
	row.appendChild(partnerColumn);

	return row;
};

function createNoContractsRow(colspan) {
	var line = document.createElement("tr");
	const textColumn = document.createElement("td");
	textColumn.setAttribute('colspan', `${colspan}`);
	textColumn.textContent = "No contracts";
	line.appendChild(textColumn);
	return line;
}

function conditionSort(a, b)
{
	return a["ConditionIndex"] > b["ConditionIndex"] ? 1 : -1;
}

function ContractSort(a, b)
{
	return a["DueDateEpochMs"] > b["DueDateEpochMs"] ? 1 : -1;
}

function factionContract(link) {
	let conditionDiv = createTextDiv("");

	let marker = createTextSpan(" ★");
	marker.style.color = TextColors.Yellow;
	marker.style.fontWeight = "bold";
	marker.style.cursor = "default";
	marker.title = "Faction Contract";

	link.style.display = "inline";

	conditionDiv.appendChild(link);
	conditionDiv.appendChild(marker);

	return conditionDiv;
}

function conditionStatus(condition) {
	let conditionDiv = createTextDiv("");

	let marker = createTextSpan(condition["Status"] === "FULFILLED" ? "✓" : "X");
	marker.style.color = condition["Status"] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	marker.style.fontWeight = "bold";

	let text = createTextSpan(` ${friendlyConditionText[condition.Type]}`);

	conditionDiv.appendChild(marker);
	conditionDiv.appendChild(text);

	return conditionDiv;
}

const friendlyConditionText = {
	COMEX_PURCHASE_PICKUP: "Material Pickup",
	DELIVERY: "Delivery",
	DELIVERY_SHIPMENT: "Deliver Shipment",
	EXPLORATION: "Exploration",
	REPUTATION: "Reputation",
	PAYMENT: "Payment",
	PICKUP_SHIPMENT: "Pickup Shipment",
	PROVISION_SHIPMENT: "Provision Shipment"
}

const materialFulfilmentType = [
	"DELIVERY",
	"DELIVERY_SHIPMENT",
	"PROVISION_SHIPMENT"
]
