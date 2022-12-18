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
		var currentTime = 0;
		for(var i = 1; i < elements.length; i++){
		  const targetRow = elements[i];
		  const etaData = targetRow.children[3];
		  if (etaData.textContent != "") {
		    const duration = parseDuration(etaData.textContent);
			const eta = convertDurationToETA(duration + currentTime);
			etaData.appendChild(createTextSpan(` (${eta})`, this.tag))
			currentTime += duration;
		  }
		}
		const firstRow = elements[0];
		if(!firstRow){return;}
		const firstEtaData = firstRow.children[3];
		if(!firstEtaData){return;}
		if (firstEtaData.textContent != "") {
			const totalEta = convertDurationToETA(currentTime);
			firstEtaData.appendChild(createTextSpan(` (${totalEta})`, this.tag))
		}
	}
	return;
  }
}
