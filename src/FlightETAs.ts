import {Module} from "./ModuleRunner";
import {convertDurationToETA, parseDuration, createTextSpan, genericCleanup, getBuffers} from "./util";

export class FlightETAs implements Module {
  private tag = "pb-sfc-eta";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
    const buffers = getBuffers("SFC ");
    if (buffers == undefined) return;
	
	for(let buffer of buffers)
	{
		const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
		elements.forEach(targetRow => {
		  const etaData = targetRow.children[3];
		  if (etaData.textContent != "") {
			const eta = convertDurationToETA(parseDuration(etaData.textContent));
			etaData.appendChild(createTextSpan(` (${eta})`, this.tag))
		  }
		})
	}
  }
}
