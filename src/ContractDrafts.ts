import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {Materials} from "./GameProperties";
import {genericCleanup, getBuffers, createTextSpan} from "./util";

export class ContractDrafts implements Module {
	private prices;

	constructor(prices)
	{
		this.prices = prices;
	}
  private tag = "pb-contd";

  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
    getBuffers("CONTD").forEach(buffer => {
		const form = buffer.querySelector(Selector.ContDForm);
		const condition = buffer.querySelector(Selector.ConditionEditor);
		if(condition == null){return;}
		if(form == null){return;}
		const tbody = (form.firstChild as HTMLElement).children[1];
		var amount = -1;
		var price = -1;
		if(tbody.children.length == 2)
		{
			amount = parseInt(((tbody.children[1].children[1].textContent || "").match(/(?<=Delivery of )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
			const material = ((tbody.children[1].children[1].textContent || "").match(/(?<=units of )(.*)(?= to )/) || (tbody.children[1].children[1].textContent || "").match(/(?<=unit of )(.*)(?= to )/) || [""])[0]
			if(this.prices[material])
			{
				price = amount * this.prices[material];
			}
		}
		else if(tbody.children.length == 3)
		{
			amount = parseInt(((tbody.children[0].children[1].textContent || "").match(/(?<=Provision )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
			const material = ((tbody.children[0].children[1].textContent || "").match(/(?<=units of )(.*)(?= \@ )/) || (tbody.children[0].children[1].textContent || "").match(/(?<=unit of )(.*)(?= \@ )/) || [""])[0]
			if(this.prices[material])
			{
				price = amount * this.prices[material];
			}
		}
		else if(tbody.children.length == 4)
		{
			amount = parseInt(((tbody.children[0].children[1].textContent || "").match(/(?<=Provision shipment of )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
			const material = ((tbody.children[0].children[1].textContent || "").match(/(?<=units of )(.*)(?= \@ )/) || (tbody.children[0].children[1].textContent || "").match(/(?<=unit of )(.*)(?= \@ )/) || [""])[0]
			
			if(condition.children[1] == null || condition.children[1].children[1] == null || condition.children[1].children[1].firstChild == null || !Materials[material]){return;}
			if((((condition.children[1] || condition).children[1] || condition).firstChild || condition).textContent === "Currency")	// Jesus Christ this is an ugly line of code
			{
				const inputPriceDiv = condition.querySelector("div[class~='xuy2wpBCdzgc8G3w3AlXTw==']");
				if(inputPriceDiv == null || inputPriceDiv.firstChild == null){return;}
				const inputPrice = parseFloat((inputPriceDiv.firstChild.firstChild as HTMLInputElement).value);
				const weightVol = amount * (Materials[material][1] > Materials[material][2] ? Materials[material][1] : Materials[material][2]);
				const pricePer = inputPrice / weightVol;
				const display = pricePer.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " / " + (Materials[material][1] > Materials[material][2] ? "t" : "m³");
				inputPriceDiv.insertBefore(createTextSpan(display, this.tag), inputPriceDiv.firstChild);
			}
			return;
		}
		if(condition.children[1] == null || condition.children[1].children[1] == null || condition.children[1].children[1].firstChild == null){return;}
		if((((condition.children[1] || condition).children[1] || condition).firstChild || condition).textContent === "Currency")
		{
			const inputPriceDiv = condition.querySelector("div[class~='xuy2wpBCdzgc8G3w3AlXTw==']");
			if(inputPriceDiv == null || inputPriceDiv.firstChild == null){return;}
			const inputPrice = parseFloat((inputPriceDiv.firstChild.firstChild as HTMLInputElement).value);
			const pricePer = inputPrice / amount;
			const display = pricePer.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " ea" + (price == -1 ? "" : " | " + price.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " Total Corp");
			inputPriceDiv.insertBefore(createTextSpan(display, this.tag), inputPriceDiv.firstChild);
		}
    });
  }
}
