import
{
	clearChildren,
	createLink,
	createTextSpan,
	createTable,
	createMaterialElement,
	createTextDiv
}
from "../util";

import { TextColors } from "../Style";

import { FactionHeaders } from "../GameProperties";

export function Contracts_pre( tile, parameters, pmmgResult, result ) // "result" is "userInfo"
{
	clearChildren( tile );

	if ( !result[ "PMMG-User-Info" ] || !result[ "PMMG-User-Info" ][ "contracts" ] )
	{
		tile.textContent = "Loading Contract Data...";
		tile.id = "pmmg-reload";
		return;
	}

	const contractData = result[ "PMMG-User-Info" ][ "contracts" ];

	let validContracts = contractData.filter( c => !invalidContractStatus.includes( c[ "status" ] ) );

	validContracts.map(  //LARGE BLOCK START
		contract =>
		{
			contract[ "IsFaction" ] = false;
			contract[ "materialConditions" ] = [];

			let selfConditions = [] as any[];
			let partnerConditions = [] as any[];
			
			contract.conditions.map(
				( condition ) =>
				{
					// Determine if REPUTATION condition type exists to denote Faction contract
					if ( condition[ "type" ] === "REPUTATION" )
						contract[ "IsFaction" ] = true;

					if ( condition[ "quantity" ] !== null && materialFulfilmentType.includes( condition[ "type" ] ) )
						contract[ "materialConditions" ].push( condition );

					// Categorize conditions by who fulfills it
					if ( condition[ "party" ] === contract[ "party" ] )
						selfConditions.push( condition );
					else
						partnerConditions.push( condition );
				}
			);

			// Sort each category by ConditionIndex
			selfConditions.sort( conditionSort );
			partnerConditions.sort( conditionSort );

			// Clear out default condition list and replace with named arrays
			contract.FilteredConditions = {};
			contract.FilteredConditions[ "self" ] = selfConditions;
			contract.FilteredConditions[ "partner" ] = partnerConditions;
		}
	); //LARGE BLOCK END

	validContracts.sort( ContractSort );
	
	const table = createTable( tile, [ "Contract ID", "Material", "Partner's Conditions", "My Conditions" ] );
	if ( validContracts.length === 0 )
	{
		const row = createNoContractsRow(4);
		table.appendChild(row);
	}
	else
	{
		validContracts.forEach(
			contract =>
			{
				const row = createContractRow( contract );
				table.appendChild( row );
			}
		);
	}

	return [ parameters, pmmgResult ];
}

const invalidContractStatus =
[
	"FULFILLED",
	"BREACHED",
	"TERMINATED",
	"CANCELLED",
	"REJECTED"
];

function createContractRow(contract)
{
	var row = document.createElement( "tr" );

	let contractLink = createLink( contract[ "name" ] || contract[ "localId" ], "CONT " + contract[ "localId" ] )
		const contractIdColumn = document.createElement("td");

	contractIdColumn.appendChild( contract[ "IsFaction" ] ? factionContract( contractLink ) : contractLink );
	row.appendChild( contractIdColumn );

	// const deadlineColumn = document.createElement("td");
	// deadlineColumn.appendChild(createTextSpan(convertDurationToETA(new Date(contract["DateEpochMs"] / 1000).getSeconds())));
	// row.appendChild(deadlineColumn);

	const materialColumn = document.createElement( "td" );
	materialColumn.style.width = "32px";
	materialColumn.style.paddingLeft = "10px";

	const materialDiv = document.createElement( "div" );
	materialColumn.appendChild( materialDiv );

	if ( contract[ "materialConditions" ].length > 0 )
	{
		contract[ "materialConditions" ].forEach(
			materialCondition =>
			{
				if ( !materialCondition.quantity || !materialCondition.quantity.material )
				{
					return;
				}

				const materialElement = createMaterialElement(
					materialCondition.quantity.material.ticker,
					"prun-remove-js",
					materialCondition.quantity.amount,
					false,
					true
				)

				if ( materialElement )
				{
					materialElement.style.marginBottom = "4px";
					materialDiv.appendChild( materialElement );
				}
				return;
			}
		);
	}
	row.appendChild( materialColumn );

	const partnerColumn = document.createElement( "td" );
	var faction;
	if ( contract[ "IsFaction" ] )
	{
		Object.keys( FactionHeaders ).forEach(
			factionName =>
			{
				if ( contract.partner.name.includes( factionName ) )
				{
					faction = FactionHeaders[ factionName ];
				}
				return;
			}
		);
	}

	if ( !faction )
	{
		let partnerLink = createLink( contract.partner.name, "CO " + contract.partner.code );
		partnerColumn.appendChild( partnerLink );
	}
	else
	{
		let partnerLink = createLink( contract.partner.name, "FA " + faction );
		partnerColumn.appendChild( partnerLink );
	}

	for ( let condition of contract.FilteredConditions["partner"] )
		partnerColumn.appendChild( conditionStatus( condition ) );

	row.appendChild( partnerColumn );


	const selfColumn = document.createElement( "td" );

	for ( let condition of contract.FilteredConditions[ "self" ] )
		selfColumn.appendChild( conditionStatus( condition ) );

	row.appendChild( selfColumn );

	return row;
};

function createNoContractsRow( colspan )
{
	var line = document.createElement( "tr" );
	
	const textColumn = document.createElement( "td" );
	textColumn.setAttribute( 'colspan', `${colspan}` );
	textColumn.textContent = "No contracts";
	
	line.appendChild( textColumn );
	
	return line;
}

function conditionSort( a, b ) 
{
	return a[ "index" ] > b[ "index" ] ? 1 : -1;
}

function ContractSort( a, b )
{
	return ( a[ "date" ] ? a[ "date" ][ "timestamp" ] : 0 ) > ( b[ "date" ] ? b[ "date" ][ "timestamp" ] : 0 ) ? 1 : -1;
}

function factionContract( link )
{
	let conditionDiv = createTextDiv( "" );

	let marker = createTextSpan( " ★" );
	marker.style.color = TextColors.Yellow;
	marker.style.fontWeight = "bold";
	marker.style.cursor = "default";
	marker.title = "Faction Contract";

	link.style.display = "inline";

	conditionDiv.appendChild( link );
	conditionDiv.appendChild( marker );

	return conditionDiv;
}

function conditionStatus( condition )
{
	let conditionDiv = createTextDiv( "" );

	let marker = createTextSpan( condition[ "status" ] === "FULFILLED" ? "✓" : "X" );
	marker.style.color = condition[ "status" ] === "FULFILLED" ? TextColors.Success : TextColors.Failure;
	marker.style.fontWeight = "bold";
	let text = friendlyConditionText[ condition.type ] ? friendlyConditionText[condition.type ] : condition.type;
	let textSpan = createTextSpan( " " + text );

	conditionDiv.appendChild( marker );
	conditionDiv.appendChild( textSpan );

	return conditionDiv;
}

const friendlyConditionText =
{
	COMEX_PURCHASE_PICKUP: "Material Pickup",
	DELIVERY: "Delivery",
	DELIVERY_SHIPMENT: "Deliver Shipment",
	EXPLORATION: "Exploration",
	REPUTATION: "Reputation",
	PAYMENT: "Payment",
	PICKUP_SHIPMENT: "Pickup Shipment",
	PROVISION_SHIPMENT: "Provision",
	PROVISION: "Provision",
	LOAN_PAYOUT: "Loan Payout",
	LOAN_INSTALLMENT: "Loan Installment"
}

const materialFulfilmentType = 
[
	"DELIVERY",
	"DELIVERY_SHIPMENT",
	"PROVISION_SHIPMENT",
	"COMEX_PURCHASE_PICKUP"
]
