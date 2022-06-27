import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {genericCleanup, getBuffers, sortTable} from "./util";

export class CXOSFiltering implements Module {
  private tag = "pb-cxos";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	getBuffers("CXOS").forEach(buffer => {
		const tableDiv = buffer.querySelector(Selector.CXOSTable);
		if(tableDiv == null || tableDiv.firstChild == null || tableDiv.firstChild.firstChild == null){return;}
		const table = tableDiv.firstChild.firstChild as HTMLTableElement;
		//sortTable(table, 3, "alph");	// WHy does it randomize the list?
	});
  }
  
}