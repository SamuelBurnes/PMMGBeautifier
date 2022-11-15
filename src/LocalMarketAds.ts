import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {createTextSpan, genericCleanup, toFixed} from "./util";

export class LocalMarketAds implements Module {
  private tag = "pb-lm-ads";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
    const elements = document.querySelectorAll(Selector.LMCommodityAdText);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const text = element.textContent;
      const matches = text && text.match(/(BUYING|SELLING|CORP)\s(\d+)\s.*\s@\s([\d,.]+)\s[A-Z]+\sfor/);
      if (matches && matches.length > 3) {
        const count = parseInt(matches[2]);
        const totalCents = parseInt(matches[3].replace(/[,.]/g, ''));
		const priceSpan = element.querySelector(Selector.LMCommodityAdPriceSpan)!;
		const perItem = toFixed(totalCents / count / 100, 2);
		
		priceSpan.appendChild(createTextSpan(` (${perItem} ea)`, this.tag));
        
      }
    }
	return;
  }
}
