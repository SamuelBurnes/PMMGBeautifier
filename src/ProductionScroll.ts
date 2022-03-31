import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {genericCleanup} from "./util";

export class ProductionScroll implements Module {
  private tag = "pb-scroll";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	const elements = Array.from(document.querySelectorAll(Selector.ProdWindow));
	elements.forEach(prod => {
		const innerElem = prod.querySelector(Selector.ProdPanel) as HTMLElement;
		innerElem.style.overflowX = "hidden";
		innerElem.style.overflowY = "scroll";
		if(innerElem.firstChild == null){return;}
		const count = (innerElem.firstChild as HTMLElement).children.length;
		(prod as HTMLElement).style.width = (count * 120) + "px";
	});
  }
}