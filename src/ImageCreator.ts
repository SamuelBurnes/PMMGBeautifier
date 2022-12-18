import {Module} from "./ModuleRunner";
import {getBuffers} from "./util";
import {Selector} from "./Selector";

/**
 * Display images or gifs in chat
 */
export class ImageCreator implements Module {
	private tag = "pb-image";
	constructor()
	{
	
	}
	
  cleanup() {
    // Nothing to clean up.
	return;
  }
  run() {
    const buffers = getBuffers("COM");
	
    if (!buffers){return};
	
	buffers.forEach(buffer => {
		const chatLinks = buffer.querySelectorAll(Selector.ChatLink); // Chat link elements. Also includes company code links! Make sure to filter out...
		Array.from(chatLinks).forEach(link => {
			const linkText = link.textContent;
			if(!linkText || link.classList.contains(this.tag)){return;}
			if(!isImage(linkText)){return;}
			const img = document.createElement("img");
			img.classList.add("chat-image");
			img.src = linkText;
			if(!link.parentElement){return;}
			link.parentElement.appendChild(document.createElement("br"));
			link.parentElement.appendChild(img);
			link.classList.add(this.tag);
			return;
		});
		return;
	});
	
	return;
  }
  
  
}
function isImage(url) {
	return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}