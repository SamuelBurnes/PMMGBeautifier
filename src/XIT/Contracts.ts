import {clearChildren, createLink, createTextSpan, createTable, createMaterialElement, createTextDiv} from "../util";
import {TextColors} from "../Style";
import {FactionHeaders} from "../GameProperties";
import {getContracts} from "../BackgroundRunner";

export function Contracts_pre(tile, parameters, result, fullBurn, burnSettings, modules, refresh, contracts)
{
	clearChildren(tile);
	const username = result["PMMGExtended"]["username"];
	if(!username)
	{
		tile.textContent = "Error! Missing Username!";
		return;
	}
	if(!result["PMMGExtended"]["apikey"])
	{
		tile.textContent = "Error! Missing API Key!";
		return;
	}
	
	if(refresh)
	{
		contracts[username] = [];
		getContracts(contracts, username, result["PMMGExtended"]["apikey"]);
	}
	
	if(!contracts[username] || contracts[username].length == 0)
	{
		tile.textContent = "Loading Contract Data...";
		tile.id = "pmmg-reload";
		return;
	}
	Contracts_post(tile, parameters, contracts[username]);
	//XITWebRequest(tile, parameters, Contracts_post, "https://rest.fnar.net/contract/allcontracts/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
	return [fullBurn, burnSettings, modules];
}

function Contracts_post(tile, parameters, contractData)
{
	let validContracts = contractData.filter(c => !invalidContractStatus.includes(c["Status"]));
	
	validContracts.map(contract => {
		contract["IsFaction"] = false;
		contract["materialConditions"] = [];

		let selfConditions = [] as any;
		let partnerConditions = [] as any;
		contract.Conditions.map((condition) => {
			// Determine if REPUTATION condition type exists to denote Faction contract
			if (condition["Type"] === "REPUTATION")
				contract["IsFaction"] = true;

			if (condition["MaterialTicker"] !== null && materialFulfilmentType.includes(condition["Type"]))
				contract["materialConditions"].push(condition);

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
		contract.FilteredConditions = {};
		contract.FilteredConditions["self"] = selfConditions;
		contract.FilteredConditions["partner"] = partnerConditions;
	});

	validContracts.sort(ContractSort);
	
	const table = createTable(tile, ["Contract ID", "Material", "Partner's Conditions", "My Conditions"]);
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
	const materialDiv = document.createElement("div");
	materialColumn.appendChild(materialDiv);
	if (contract["materialConditions"].length > 0) {
		contract["materialConditions"].forEach(materialCondition => { 
			const materialElement = createMaterialElement(materialCondition["MaterialTicker"], "prun-remove-js", materialCondition["MaterialAmount"], false, true);
			
			if(materialElement) { 
				materialElement.style.marginBottom = "4px";
				materialDiv.appendChild(materialElement); 
			}
			return;
		});
	}
	row.appendChild(materialColumn);
	
	const partnerColumn = document.createElement("td");
	var faction;
	if(contract["IsFaction"])
	{
		Object.keys(FactionHeaders).forEach(factionName => {
			if(contract["PartnerName"].includes(factionName))
			{
				faction = FactionHeaders[factionName];
			}
			return;
		});
	}
	if(!faction)
	{
		let partnerLink = createLink(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]);
		partnerColumn.appendChild(partnerLink);
	}
	else
	{
		let partnerLink = createLink(contract["PartnerName"], "FA " + faction);
		partnerColumn.appendChild(partnerLink);
	}
	for (let condition of contract.FilteredConditions["partner"])
		partnerColumn.appendChild(conditionStatus(condition));
	row.appendChild(partnerColumn);
	
	const selfColumn = document.createElement("td");
	for (let condition of contract.FilteredConditions["self"])
		selfColumn.appendChild(conditionStatus(condition));
	row.appendChild(selfColumn);

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
	PROVISION_SHIPMENT: "Provision",
	PROVISION: "Provision"
}

const materialFulfilmentType = [
	"DELIVERY",
	"DELIVERY_SHIPMENT",
	"PROVISION_SHIPMENT",
	"COMEX_PURCHASE_PICKUP"
]

