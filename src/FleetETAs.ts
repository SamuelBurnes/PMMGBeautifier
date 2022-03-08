import {Module} from "./ModuleRunner";
import {convertDurationToETA, parseDuration, createTextSpan, genericCleanup, getBuffers} from "./util";

/**
 * Parse Fleet ETA times and add the actual date-time of arrival
 */
export class FleetETAs implements Module {
  private tag = "pb-flt-eta";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
    const buffers = getBuffers("FLT");
    if (buffers == undefined) return;
	for(let buffer of buffers)
	{
		const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
		elements.forEach(targetRow => {
		  const etaData = targetRow.children[7];
		  if (etaData.textContent != "") {
			const eta = convertDurationToETA(parseDuration(etaData.textContent));
			etaData.appendChild(createTextSpan(` (${eta})`, this.tag))
		  }
		})
	}
  }
}
