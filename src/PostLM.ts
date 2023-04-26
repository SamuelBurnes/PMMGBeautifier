import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {Materials, CurrencySymbols} from "./GameProperties";
import {createTextSpan, genericCleanup} from "./util";

export class PostLM implements Module {
	private prices;
	private cleanups: Array<() => void> = [];
	
	constructor(prices)
	{
		this.prices = prices;
	}
  private tag = "pb-post-lm-price";

  cleanup() {
    this.cleanups.forEach((f, i) => {
      f();
      delete this.cleanups[i];
    });
    genericCleanup(this.tag);
  }
  run() {
    Array.from(document.querySelectorAll(Selector.LMPostForm)).forEach(form => {
		
	  const type = 	Array.from(form.getElementsByClassName("StaticInput__static___Vpn1u0n forms__static___a4biDi4"));
	  var shipping = false;
	  for(let elem of type)
	  {
		  if(elem.textContent == "SHIPPING")
		  {
			  shipping = true;
			  break;
		  }
	  }
	
      const commodity = document.evaluate("div[label/span[text()='Commodity']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLInputElement;
	  
	  const amountInput = document.evaluate("div[label/span[text()='Amount']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLInputElement;

      const totalPriceInput = document.evaluate("div[label/span[text()='Total price']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLInputElement;
	  
	  const currencyInput = document.evaluate("div[label/span[text()='Currency']]//select", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLInputElement;
	  

	  var displayElement = createTextSpan("--", this.tag);  

	  if(shipping && commodity.value != "")
	  {
		  totalPriceInput.parentNode!.insertBefore(displayElement, totalPriceInput);
		  const calculatePricePerUnit = () => {
			  const amount = parseInt(amountInput.value);
			  const total = parseFloat(totalPriceInput.value);
			  const matInfo = Materials[commodity.value];
			  const currency = currencyInput.value;
			  var currencySymbol;
			  if(currency != undefined){currencySymbol = CurrencySymbols[currency];}
			  else{currencySymbol = "";}
			  if(currencySymbol == undefined){currencySymbol = "";}
			  if(matInfo == undefined || matInfo == null){return;}
			  const unit = matInfo[1] >= matInfo[2] ? "t" : "m³";
			  const weightvolume = Math.max(matInfo[1], matInfo[2]);
			  
			  if(isNaN(weightvolume) || isNaN(total)){displayElement.textContent = "-- t | " + currencySymbol + "-- / t";}
			  else{displayElement.textContent = (amount * weightvolume).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}) + " " + unit + " | " + currencySymbol + (total / (amount * weightvolume)).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}) + " / " + unit;}
		  };
		  calculatePricePerUnit();
		  
	  }
	  else if(Object.keys(this.prices).length == 0)
	  {
		  totalPriceInput.parentNode!.insertBefore(displayElement, totalPriceInput);
			  const calculatePricePerUnit = () => {
			  const amount = parseInt(amountInput.value);
			  const total = parseFloat(totalPriceInput.value);
			  const currency = currencyInput.value;
			  var currencySymbol;
			  if(currency != undefined){currencySymbol = CurrencySymbols[currency];}
			  else{currencySymbol = "";}
			  if(currencySymbol == undefined){currencySymbol = "";}
			  
			  displayElement.textContent = currencySymbol + (total / amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ea";
		  };
		  calculatePricePerUnit();
	  }
	  else if(commodity.value != undefined && Materials[commodity.value] != undefined)
	  {
		totalPriceInput.parentNode!.insertBefore(displayElement, totalPriceInput);
		const calculatePricePerUnit = () => {
		const amount = parseInt(amountInput.value);
		const total = parseFloat(totalPriceInput.value);
		const currency = currencyInput.value;
		var currencySymbol;
		if(currency != undefined){currencySymbol = CurrencySymbols[currency];}
		else{currencySymbol = "";}
		if(currencySymbol == undefined){currencySymbol = "";}
		var price = this.prices[commodity.value];
		if(price == undefined)
		{
			price = "";
		}
		else if(amount + " " == "NaN ")
		{
			price = "";
		}
		else
		{
			price = " | " + (price * amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " Total Corp";
		}
		displayElement.textContent = currencySymbol + (total / amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ea" + (price);
		};
		calculatePricePerUnit();
	  }
	  
      
    })
  }
}
