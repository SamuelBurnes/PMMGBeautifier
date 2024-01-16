import { Module } from "./ModuleRunner";
import { getBuffersFromList, createTextSpan } from "./util";
import { Exchanges, ExchangeTickers, Materials } from "./GameProperties";
import { Selector } from "./Selector";
import { Style } from "./Style";

export class CXPOOrderBook implements Module {
    private tag = "pb-cxpo-ob";
	
    private userInfo;
	
	constructor(userInfo)
	{
        this.userInfo = userInfo;
	}
	

    cleanup() {
        // Nothing to clean up
    }
    run(allBuffers) {
		if(this.userInfo["PMMG-User-Info"] && this.userInfo["PMMG-User-Info"]["company-name"])
		{
			const buffers = getBuffersFromList("CXPO ", allBuffers);
			buffers.forEach(buffer => {
				addOrderBook(buffer, this.userInfo, this.tag);
			});
		}
	}
	
}

function addOrderBook(buffer, userInfo, tag)
{
	const form = buffer.querySelector("form");
	if(!form){return;}
	if(form.classList.contains(tag)){return;}
	
	const exchange = document.evaluate("div[label/span[text()='Exchange']]//div/div", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLDivElement;
	if(!exchange || !exchange.textContent){return;}
	
	const exchangeTicker = ExchangeTickers[Exchanges[exchange.textContent as string] as string];
	if(!exchangeTicker){return;}
	
	const material = document.evaluate("div[label/span[text()='Material']]//div/div", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLDivElement;
	if(!material || !material.textContent || !Materials[material.textContent]){return;}
	
	const ticker = Materials[material.textContent][0] + "." + exchangeTicker;
	
	if(!userInfo["PMMG-User-Info"]["cxob"][ticker] || !form.parentElement){return;}
	form.classList.add(tag);
	console.log(userInfo["PMMG-User-Info"]["cxob"][ticker])
	
	if(Exchanges[exchange.textContent])
	{
		exchange.textContent = Exchanges[exchange.textContent];
	}
	
	form.parentElement.style.display = "flex";
	
	// Create order book parent div
	const orderBook = document.createElement("div");
	orderBook.classList.add("pb-scroll");
	orderBook.style.height = form.offsetHeight + "px";
	form.parentElement.appendChild(orderBook);
	
	// Format order form
	form.style.flex = "1";
	Array.from(form.querySelectorAll(Selector.FormLabels) as HTMLLabelElement[]).forEach(label => {
		label.style.minWidth = "95px";
	});
	
	// Create order book table
	const orderTable = document.createElement("table");
	orderBook.appendChild(orderTable)
	
	const header = document.createElement("thead");
	orderTable.appendChild(header);
	const headerRow = document.createElement("tr");
	header.appendChild(headerRow);
	for(let label of ["Amt.", "Price"])
	{
		const th = document.createElement("th");
		th.appendChild(createTextSpan(label as string, tag));
		headerRow.appendChild(th)
	}
	
	const offerBody = document.createElement("tbody");
	orderTable.appendChild(offerBody);
	const offerRow = document.createElement("tr");
	offerBody.appendChild(offerRow);
	const offerRowHeader = document.createElement("th");
	offerRowHeader.appendChild(createTextSpan("Offers", tag));
	offerRowHeader.colSpan = 2;
	offerRow.appendChild(offerRowHeader);
	
	const orderInfo = userInfo["PMMG-User-Info"]["cxob"][ticker];
	if(orderInfo.sellingOrders.length > 0)	// Build ask table. Add own name highlighting at some point
	{
		const sortedOrders = orderInfo.sellingOrders.reverse();
		sortedOrders.forEach(order => {
			const orderRow = document.createElement("tr");
			offerBody.appendChild(orderRow);
			const amountColumn = document.createElement("td");
			amountColumn.classList.add(...Style.CXOBAmount);
			const priceColumn  = document.createElement("td");
			priceColumn.classList.add(...Style.CXOBOffer);
			priceColumn.style.padding = "2px 2px";
			
			orderRow.appendChild(amountColumn);
			orderRow.appendChild(priceColumn);
			
			amountColumn.appendChild(createTextSpan(order.amount ? order.amount.toLocaleString(undefined, {maximumFractionDigits: 0}) : "∞", tag));
			priceColumn.appendChild(createTextSpan(order.limit.amount.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " " + order.limit.currency, tag));
		});
	}
	else
	{
		// Create empty row
		const emptyRow = document.createElement("tr");
		offerBody.appendChild(emptyRow);
		const emptyColumn = document.createElement("td");
		emptyColumn.classList.add(...Style.CXOBEmpty);
		emptyColumn.colSpan = 2;
		emptyColumn.appendChild(createTextSpan("No offers.", tag));
		emptyRow.appendChild(emptyColumn);
	}
	
	// Add spread
	const spreadBody = document.createElement("tbody");
		orderTable.appendChild(spreadBody);
		const spreadRow = document.createElement("tr");
		spreadBody.appendChild(spreadRow);
		const spreadColumn = document.createElement("td");
		spreadColumn.colSpan = 2;
		spreadColumn.classList.add(...Style.CXOBSpread);
		spreadRow.appendChild(spreadColumn);
		spreadColumn.textContent = "Spread: ";
	if(orderInfo.sellingOrders.length > 0 && orderInfo.buyingOrders.length > 0)
	{
		const minSell = orderInfo.sellingOrders.reduce((minValue, obj) => Math.min(minValue, obj.limit.amount), Infinity);
		const maxBuy = orderInfo.buyingOrders.reduce((maxValue, obj) => Math.max(maxValue, obj.limit.amount), -Infinity);
		const spreadElem = createTextSpan((minSell - maxBuy).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " " + orderInfo.sellingOrders[0].limit.currency, tag);
		spreadElem.style.color = "#eee";
		spreadColumn.appendChild(spreadElem);
	}
	else
	{
		// Add empty spread row
		const spreadElem = createTextSpan("--", tag);
		spreadElem.style.color = "#eee";
		spreadColumn.appendChild(spreadElem);
	}
	
	const requestBody = document.createElement("tbody");
	orderTable.appendChild(requestBody);
	const requestRow = document.createElement("tr");
	requestBody.appendChild(requestRow);
	const requestRowHeader = document.createElement("th");
	requestRowHeader.appendChild(createTextSpan("Requests", tag));
	requestRowHeader.colSpan = 2;
	requestRow.appendChild(requestRowHeader);
	
	if(orderInfo.buyingOrders.length > 0)	// Build bid table. Add own name highlighting at some point
	{
		const sortedOrders = orderInfo.buyingOrders;
		sortedOrders.forEach(order => {
			const orderRow = document.createElement("tr");
			requestBody.appendChild(orderRow);
			const amountColumn = document.createElement("td");
			amountColumn.classList.add(...Style.CXOBAmount);
			const priceColumn  = document.createElement("td");
			priceColumn.classList.add(...Style.CXOBRequest);
			priceColumn.style.padding = "2px 2px";
			
			orderRow.appendChild(amountColumn);
			orderRow.appendChild(priceColumn);
			
			amountColumn.appendChild(createTextSpan(order.amount ? order.amount.toLocaleString(undefined, {maximumFractionDigits: 0}) : "∞", tag));
			priceColumn.appendChild(createTextSpan(order.limit.amount.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " " + order.limit.currency, tag));
		});
	}
	else
	{
		// Create empty row
		const emptyRow = document.createElement("tr");
		requestBody.appendChild(emptyRow);
		const emptyColumn = document.createElement("td");
		emptyColumn.classList.add(...Style.CXOBEmpty);
		emptyColumn.colSpan = 2;
		emptyColumn.appendChild(createTextSpan("No requests.", tag));
		emptyRow.appendChild(emptyColumn);
	}
}