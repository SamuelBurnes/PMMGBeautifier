import {Module} from "./ModuleRunner";
import {genericCleanup, changeValue} from "./util";
import {Selector} from "./Selector";
import {PlanetCommands, PlanetNames} from "./GameProperties";

export class CommandCorrecter implements Module {
  private tag = "pb-command";

  cleanup() {
    genericCleanup(this.tag);
  }

  run() {
    (Array.from(document.querySelectorAll(Selector.BufferArea)) as HTMLElement[]).forEach(buffer => {
		if(buffer.children.length > 1)
		{
			const bufferField = buffer.querySelector(Selector.BufferTextField) as HTMLInputElement;
			if(bufferField == null){return;}
			var bufferText = bufferField.value.toUpperCase() || "";
			
			if(PlanetCommands.includes(bufferText.split(" ")[0]))
			{
				var replaced = false;
				PlanetNames.forEach(namePair => {
					if(bufferText.includes(" " + namePair[0]))
					{
						bufferText = bufferText.replace(" " + namePair[0], " " + namePair[1]);
						replaced = true;
					}
				});
				
				if(replaced)
				{
					bufferField.value = "";
					changeValue(bufferField, bufferText);
					if(bufferField.parentElement == null || bufferField.parentElement.parentElement == null){return;}
					(bufferField.parentElement.parentElement as HTMLFormElement).requestSubmit();
					
				}
				
			}
		}
	});
  }
  
}

