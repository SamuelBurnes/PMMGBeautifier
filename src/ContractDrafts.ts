import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {Materials} from "./GameProperties";
import {genericCleanup, getBuffers, createTextSpan} from "./util";

export class ContractDrafts implements Module {
	private webData;

	constructor(webData)
	{
		this.webData = webData;
	}
  private tag = "pb-contd";

  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
    getBuffers("CONTD ").forEach(buffer => {
		const conditionTable = buffer.querySelector(Selector.ContDConditionsTable);	// Get the table with all the conditions
		if(!conditionTable){return;}
		
		const conditionTexts = conditionTable.querySelectorAll("tr > td:nth-child(2)");	// Get all the text descriptions of each row
		
		const parsedConditions = {};
		
		// Parse the condition table listing all the conditions (payment, provisioning, etc.) into parsedConditions
		// Provisioning/Delivery of a material goes into Material as [Quantity, Ticker]
		// Payment goes into Payment as Amount
		// Provisioning a shipment goes into Shipment as [Quantity, Ticker]
		Array.from(conditionTexts).forEach(condition => {
			const conditionText = condition.textContent;
			if(!conditionText){return;}
			
			const provisionMatch = (/Provision ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) @/gm).exec(conditionText);
			if(provisionMatch && provisionMatch.length >= 3)
			{
				const quantity = provisionMatch[1];
				const material = provisionMatch[2];
				parsedConditions["Material"] = [quantity.replace(",", "").replace(".", ""), material];
				return;
			}
			
			const deliverMatch = (/Delivery of ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) to/gm).exec(conditionText);
			if(deliverMatch && deliverMatch.length >= 3)
			{
				const quantity = deliverMatch[1];
				const material = deliverMatch[2];
				parsedConditions["Material"] = [quantity.replace(",", "").replace(".", ""), material];
				return;
			}
			
			const paymentMatch = (/Payment of ([0-9,.]+)/gm).exec(conditionText);
			if(paymentMatch && paymentMatch.length >= 2)
			{
				parsedConditions["Payment"] = paymentMatch[1].replace(",", "").replace(".", "");
				return;
			}
			
			const shipMatch = (/Provision shipment of ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) @/gm).exec(conditionText);
			if(shipMatch && shipMatch.length >= 3)
			{
				const quantity = shipMatch[1];
				const material = shipMatch[2];
				parsedConditions["Shipment"] = [quantity.replace(",", "").replace(".", ""), material];
				return;
			}
			
			return;
		});
		
		const conditionEditorForm = buffer.querySelector(Selector.ContDForm);
		if(!conditionEditorForm){return;}
		
		const labels = [] as string[];	// Labels for each row on the left side of the table
		const conditionEditorLabels = conditionEditorForm.querySelectorAll(Selector.ContDFormLabel);
		Array.from(conditionEditorLabels).forEach(label => {
			labels.push(label.textContent || "");
			return;
		});
		
		// Now determine which editor is open based on the rows and parsed conditions.
		// Payment for selling/buying a material
		if(labels[1] == "Currency" && parsedConditions["Material"] && parsedConditions["Material"][1])
		{
			const rowSpacer = conditionEditorForm.querySelector(Selector.ContDFormRowSpacer);
			if(!rowSpacer || !rowSpacer.firstChild){return;}
			const amountInput = rowSpacer.querySelector("div > input") as HTMLInputElement;
			if(!amountInput){return;}
			
			const perUnit = parseInt(amountInput.value || "0") / parseInt(parsedConditions["Material"][0]);
			
			var labelText = perUnit.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " ea";
			
			// Do corp pricing
			if(Materials[parsedConditions["Material"][1]] && this.webData["custom_prices"] && this.webData["custom_prices"][Materials[parsedConditions["Material"][1]][0]])
			{
				const totalCorp = parseInt(parsedConditions["Material"][0]) * this.webData["custom_prices"][Materials[parsedConditions["Material"][1]][0]];
				labelText += " | " + totalCorp.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + " Corp"
			}
			
			rowSpacer.insertBefore(createTextSpan(labelText, this.tag), rowSpacer.firstChild);
		}
		else if(labels[1] == "Currency" && parsedConditions["Shipment"] && parsedConditions["Shipment"][1])	// Repeat the same thing but with shipping per ton/m^3
		{
			const rowSpacer = conditionEditorForm.querySelector(Selector.ContDFormRowSpacer);
			if(!rowSpacer || !rowSpacer.firstChild){return;}
			const amountInput = rowSpacer.querySelector("div > input") as HTMLInputElement;
			if(!amountInput){return;}
			
			const isHeavy = Materials[parsedConditions["Shipment"][1]][1] > Materials[parsedConditions["Shipment"][1]][2];	// Whether tonnage is more than volume
			
			const perUnit = parseInt(amountInput.value || "0") / parseInt(parsedConditions["Shipment"][0]) / Materials[parsedConditions["Shipment"][1]][isHeavy ? 1 : 2];
			
			var labelText = perUnit.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}) + (isHeavy ? "/t" : "/m³");
			
			rowSpacer.insertBefore(createTextSpan(labelText, this.tag), rowSpacer.firstChild);
		}
    });
  }
}
