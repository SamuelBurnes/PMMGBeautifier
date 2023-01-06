import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {createTextSpan, genericCleanup} from "./util";

// Create Per Unit Prices on LM Ads
export class LocalMarketAds implements Module {
  private tag = "pb-lm-ads";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	// Get all LM ad text elements on screen
    const elements = document.querySelectorAll(Selector.LMCommodityAdText);
    for (let i = 0; i < elements.length; i++) {	// For each of them...
      const element = elements[i];
      const text = element.textContent;
      const matches = text && text.match(/(BUYING|SELLING|CORP)\s(\d+)\s.*\s@\s([\d,.]+)\s[A-Z]+\sfor/);	// Test if the text matches the format of a buy/sell ad
      if (matches && matches.length > 3) {	// If it does...
        const count = parseInt(matches[2]);	// Find the number of items
        const totalCents = parseInt(matches[3].replace(/[,.]/g, ''));	// Find the total cost
		const priceSpan = element.querySelector(Selector.LMCommodityAdPriceSpan)!;
		const perItem = (totalCents / count / 100).toLocaleString(undefined, {maximumFractionDigits: 2});	// Calculate the per unit cost
		
		// Add that text to the ad
		priceSpan.appendChild(createTextSpan(` (${perItem} ea)`, this.tag));
        
      }
    }
	return;
  }
}
