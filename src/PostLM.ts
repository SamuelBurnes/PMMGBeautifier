import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {Materials, CurrencySymbols} from "./GameProperties";
import {createTextSpan} from "./util";

export class PostLM implements Module {
	private webappID;
	constructor(webappID)
	{
		this.webappID = webappID;
	}
  private tag = "pb-post-lm-price";

  cleanup() {
    
  }
  run() {
	  
    Array.from(document.querySelectorAll(Selector.LMPostForm)).forEach(form => {
		
	  const type = 	Array.from(document.getElementsByClassName("C-ECb-ove1tla6qsiV43ew== ivG24qtQ92kbysLTNeWJvw=="));
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
	  
	  var displayElement;
	  var possibleElement = Array.from(document.getElementsByClassName("pb-post-lm-price"));
	  if(possibleElement.length == 0)
	  {
		displayElement = createTextSpan("--", this.tag);  
	  }
	  else
	  {
		displayElement = possibleElement.shift();
		for(let elem of possibleElement)
		{
			elem.remove();
		}
	  }
	  
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
			  else{displayElement.textContent = (amount * weightvolume).toFixed(0) + " " + unit + " | " + currencySymbol + (total / (amount * weightvolume)).toFixed(2) + " / " + unit;}
		  };
		  calculatePricePerUnit();
		  
	  }
	  else if(this.webappID == undefined)
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
			  
			  displayElement.textContent = currencySymbol + (total / amount).toFixed(2) + " ea";
		  };
		  calculatePricePerUnit();
	  }
	  else if(commodity.value != "")
	  {
		  console.log("Here");
		  var xhr = new XMLHttpRequest();
		  xhr.onreadystatechange = function()
		  {
			if(xhr.readyState == XMLHttpRequest.DONE)
			{
				var priceData = JSON.parse(xhr.responseText);
				
				totalPriceInput.parentNode!.insertBefore(displayElement, totalPriceInput);
				const calculatePricePerUnit = () => {
				const amount = parseInt(amountInput.value);
				const total = parseFloat(totalPriceInput.value);
				const currency = currencyInput.value;
				var currencySymbol;
			    if(currency != undefined){currencySymbol = CurrencySymbols[currency];}
			    else{currencySymbol = "";}
			    if(currencySymbol == undefined){currencySymbol = "";}
				var price = priceData[commodity.value];
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
					price = " | " + (price * amount).toFixed(2) + " Total Corp";
				}
				displayElement.textContent = currencySymbol + (total / amount).toFixed(2) + " ea" + (price);
				};
				calculatePricePerUnit();

				// Attach handlers to both of them <- PiBoy has no idea what this does.
				/*[amountInput, totalPriceInput].map(input => {
					input.addEventListener('beforeinput', calculatePricePerUnit);
					this.cleanups.push(() => input.removeEventListener('beforeinput', calculatePricePerUnit));
				})*/
			}
		  };
		  xhr.open("GET", "https://script.google.com/macros/s/" + this.webappID + "/exec?mode=%22price%22", true);
		  xhr.send(null);
		  
		  console.log(xhr.readyState);
	  }
	  
      
    })
  }
}
