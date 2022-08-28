import {Module} from "./ModuleRunner";
import {genericCleanup, getBuffers, createTextSpan, showBuffer} from "./util";

export class CalculatorButton implements Module {
  private tag = "pb-calc";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	const calcTags = ["LM", "CX", "XIT"];
	calcTags.forEach(tag => {
		const buffers = getBuffers(tag);
		buffers.forEach(buffer => {
			const calcDiv = document.createElement("div");
			calcDiv.classList.add(this.tag);
			calcDiv.classList.add("button-upper-right");
			(buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild);
			calcDiv.appendChild(createTextSpan("🖩", this.tag));
			calcDiv.addEventListener("click", function(){showBuffer("XIT CALCULATOR");});
		});
	});
  }
  
}