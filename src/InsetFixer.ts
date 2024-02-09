import {Module} from "./ModuleRunner";
import {} from "./util";

/**
 * Sets the inset style on scrollview divs to -1px to prevent small white bars. Should be fixed in the game properly. Doesn't work as a CSS style as inset property is applied directly to element by PrUN
 */
export class InsetFixer implements Module {
	private tag = "pb-inset-fixer";
	constructor()
	{
	
	}
	
    cleanup() {
		// Nothing to clean up.
		return;
    }
    run() {
		// Change to searching for inventories, then mats on each inventory to pass down inventory name
		const mats = document.querySelectorAll("div[class~='ScrollView__view___ovf59Tk']");
		
		(Array.from(mats) as HTMLElement[]).forEach(mat => {
			if(mat.classList.contains(this.tag)){return;}
			
			mat.style.inset = "-1px";
		});
    }
  
}