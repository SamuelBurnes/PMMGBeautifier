import { Module } from "./ModuleRunner";
import { getBuffers, cleanPlanetName, createTextSpan, genericCleanup } from "./util";
import { Selector } from "./Selector";

export class AdvancedMode implements Module {
    private tag = "pb-advanced";
	
    private enabled;
	
	constructor(enabled)
	{
        this.enabled = enabled;
	}
	

    cleanup() {
        genericCleanup("pb-cleanup")
    }
    run() {
		if(!this.enabled){return;}	// Must be enabled to run
		
		// Clean Fleet Buffers
		var buffers = getBuffers("FLT");
		buffers.forEach(buffer => {
			cleanFleet(buffer, this.tag);
		});
		
		// Clean INV Buffers
		var buffers = getBuffers("INV");
		buffers.forEach(buffer => {
			cleanInv(buffer, this.tag);
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

function cleanInv(buffer, tag)
{
	// Only clean INV buffers with no other parameters
	const bufferHeaders = Array.from(buffer.getElementsByClassName(Selector.BufferHeader));
	if(!bufferHeaders || !bufferHeaders[0]){return;}
	
	const parameters = (bufferHeaders[0] as HTMLElement).textContent;
	if(!parameters || parameters != "INV"){return;}
	
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
	
	const rows = buffer.querySelectorAll("tr");
	rows.forEach(row => {
		if(row.classList.contains(tag)){return;}
		row.classList.add(tag);
		if(row.firstChild && row.firstChild.firstChild && row.firstChild.firstChild.textContent && cleanINVNames[row.firstChild.firstChild.textContent])
		{
			row.firstChild.firstChild.textContent = cleanINVNames[row.firstChild.firstChild.textContent];
		}
	});
}

const cleanINVNames = {
	"Cargo hold": "Ship",
	"Base storage": "Base",
	"Warehouse unit": "WAR",
	"STL fuel tank": "STL tank",
	"FTL fuel tank": "FTL tank"
}

function cleanFleet(buffer, tag)
{
	// Remove first column
	const rows = buffer.querySelectorAll("tr");
	rows.forEach(row => {
		if(row.classList.contains(tag)){return;}
		row.classList.add(tag);
		if(row.firstChild)
		{
			row.firstChild.style.display = "none";
		}
		if(row.children && row.children[2] && row.children[2].firstChild && row.children[2].firstChild.children && row.children[2].firstChild.children[2])
		{
			var text = row.children[2].textContent || "";
			text = text.replace("m³", "").replace("t", "").replace(/1,000/g,"1k").replace(/2,000/g,"2k").replace(/3,000/g,"3k");
			row.children[2].firstChild.children[2].textContent = text;
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
	
	// Shorten Status
	const tableEntries = buffer.querySelectorAll("td");
	tableEntries.forEach(entry => {
		if(entry.textContent)
		{
			if(Object.keys(shipStatus).includes(entry.textContent))
			{
				//entry.textContent = shipStatus[entry.textContent];
				entry.style.textAlign = "center";
				entry.style.fontSize = "0";
				const statusIndicator = createTextSpan(shipStatus[entry.textContent], "pb-cleanup");
				statusIndicator.style.fontSize = "11px";
				entry.appendChild(statusIndicator);
			}
		}
		entry.style.padding = "2px 4px";
	});
}

const shipStatus = {
	"taking off": "↑",
	"departing": "↗",
	"charging": "±",
	"jumping": "⟿",
	"approaching": "↘",
	"landing": "↓",
	"stationary": "⦁",
	"in transit": "⟶"
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