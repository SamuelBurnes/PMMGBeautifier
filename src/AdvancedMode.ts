import { Module } from "./ModuleRunner";
import { getBuffers, cleanPlanetName } from "./util";
import { Selector } from "./Selector";

export class AdvancedMode implements Module {
    private tag = "pb-advanced";
	
    private enabled;
	
	constructor(enabled)
	{
        this.enabled = enabled;
	}
	

    cleanup() {
        // Nothing to cleanup
    }
    run() {
		if(!this.enabled){return;}	// Must be enabled to run
		
		// Clean Fleet Buffers
		var buffers = getBuffers("FLT");
		buffers.forEach(buffer => {
			cleanFleet(buffer, this.tag);
		});
		
		// Clean CXOS Buffers
		buffers = getBuffers("CXOS");
		buffers.forEach(buffer => {
			cleanCXOS(buffer);
		});
		
		// Clean COGCPEX Buffers
		buffers = getBuffers("COGCPEX ");
		buffers.forEach(buffer => {
			cleanCOGCPEX(buffer, this.tag);
		});
	}
	
}

function cleanFleet(buffer, tag)
{
	// Remove first column
	const rows = buffer.querySelectorAll("tr");
	rows.forEach(row => {
		if(row.firstChild)
		{
			row.firstChild.style.display = "none";
		}
	});
	
	// Shorten planet names
	const links = buffer.querySelectorAll(Selector.BufferLink);
	links.forEach(link => {
		if(link.textContent)
		{
			// Prevent duplicate processing
			if(link.classList.contains(tag)){return;}
			link.classList.add(tag);
			link.textContent = cleanPlanetName(link.textContent);
		}
	});
}

function cleanCXOS(buffer)
{
	// Remove first column
	const rows = buffer.querySelectorAll("tr");
	rows.forEach(row => {
		if(row.firstChild)
		{
			row.firstChild.style.display = "none";
		}
	});
}

function cleanCOGCPEX(buffer, tag)
{
	const links = buffer.querySelectorAll(Selector.BufferLink);
	links.forEach(link => {
		if(link.textContent)
		{
			// Prevent duplicate processing
			if(link.classList.contains(tag)){return;}
			link.classList.add(tag);
			link.textContent = link.textContent.replace("Advertising Campaign: ", "");
			link.textContent = link.textContent.replace("Education Events: ", "");
		}
	});
	
	const buttons = buffer.querySelectorAll(Selector.SmallButton);
	buttons.forEach(button => {
		if(button.textContent)
		{
			// Prevent duplicate processing
			if(button.classList.contains(tag)){return;}
			button.classList.add(tag);
			button.textContent = "vote";
		}
	});
}