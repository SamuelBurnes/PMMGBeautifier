import {Module} from "./ModuleRunner";
import {genericCleanup, getBuffers} from "./util";
import {Selector} from "./Selector";
import {TextColors} from "./Style";

export class Checklists implements Module {
  private tag = "pb-checklist";
  cleanup() {
    //genericCleanup(this.tag);
  }
  run() {
    const buffers = getBuffers("COMG ");
    if (buffers == undefined) return;
	
	buffers.forEach(buffer => {
		const parameters = (Array.from(buffer.getElementsByClassName(Selector.BufferHeader))[0].textContent || "").split(" ", 2);
		if(parameters[1] && parameters[1].length >= 4 && parameters[1].substring(0, 4).toLowerCase() == "list")
		{
			console.log(buffer);
			const chatWindow = buffer.querySelector(Selector.ChatWindow);
			if(chatWindow){chatWindow.style.visibility = "hidden"; chatWindow.style.maxHeight = "0";}
			
			const chatInput = buffer.querySelector(Selector.ChatInput);
			if(!chatInput || chatInput.style.visibility == "hidden"){return;}
			chatInput.style.visibility = "hidden";
			chatInput.style.maxHeight = "0";
			chatInput.style.minHeight = "0";
			
			var reminders = [];
			const chatLines = Array.from(buffer.querySelectorAll(Selector.ChatMessage));
			chatLines.forEach(line => {
				var lineParams = line.textContent.split(":");
				for(var i = 3; i < lineParams.length; i++)
				{
					lineParams[2] += ":" + lineParams[i];
				}
				if(lineParams[0] != "Item"){return;}
				reminders.push(lineParams);
				return;
			});
			reminders.sort(reminderSort);
			
			const remDiv = document.createElement("div");
			const tile = buffer.querySelector(Selector.ChatTile);
			if(!tile){return;}
			tile.appendChild(remDiv);
			remDiv.classList.add(this.tag);
			remDiv.style.height = "100%";
			
			reminders.forEach(reminder => {
				const remElem = document.createElement("div");
				remElem.style.display = "flex";
				const completeCircle = document.createElement("div");
				completeCircle.style.fontSize = "20px";
				completeCircle.style.padding = "10px";
				completeCircle.style.cursor = "pointer";
				remElem.appendChild(completeCircle);
				completeCircle.textContent = "◯";
				completeCircle.style.color = TextColors.Yellow;
				completeCircle.style.userSelect = "none";
				
				completeCircle.addEventListener("click", function(){
					const state = completeCircle.textContent == "◯";
					completeCircle.textContent = state ? "⬤" : "◯";
					completeCircle.style.fontSize = state ? "25px" : "20px";
					completeCircle.style.paddingTop = state ? "8px" : "10px";
					completeCircle.style.paddingBottom = state ? "8px" : "10px";
				});
				
				const dateDiv = document.createElement("div");
				remElem.appendChild(dateDiv);
				const date = new Date(parseInt(reminder[1]) * 1000);
				dateDiv.textContent = date.toLocaleDateString(undefined);
				dateDiv.style.maxWidth = "70px";
				dateDiv.style.minWidth = "70px";
				dateDiv.style.padding = "16px 5px 15px";
				dateDiv.style.fontWeight = "bold";
				if(Date.now() - parseInt(reminder[1]) * 1000 > 0)
				{
					completeCircle.style.color = TextColors.Failure;
				}
				
				const descripDiv = document.createElement("div");
				remElem.appendChild(descripDiv);
				descripDiv.textContent = reminder[2];
				descripDiv.style.padding = "16px 5px 15px";
				remDiv.appendChild(remElem);
			});
		}
		return;
	});
	return;
  }
  
  function reminderSort(a, b)
  {
	return parseInt(a[1]) > parseInt(b[1]) ? 1 : -1;
  }
}
