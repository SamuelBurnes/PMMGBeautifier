import {Module} from "./ModuleRunner";
import {getBuffersFromList} from "./util";
import {Selector} from "./Selector";

export class InventorySearch implements Module {
  private tag = "pb-inv-search";
  cleanup() {
    // Nothing to clean up
  }
  run(allBuffers) {
    const buffers = getBuffersFromList("INV", allBuffers);
    if (buffers == undefined) return;
	
	buffers.forEach(buffer => {
		if(buffer.classList.contains(this.tag))	// Only process buffers once
		{
			return;
		}
		buffer.classList.add(this.tag);
		
		const header = buffer.querySelector(Selector.BufferHeader);
		if(!header || header.textContent !== "INV") { return; }	// Only process the INV buffer with no extra parameters
		
		addSearchBar(buffer);
	});
	return;
  }
}


function addSearchBar(buffer)
{
	const inventoryFilters = buffer.querySelector(Selector.InventoryFilters);	// Insert search bar after inventory buffers
	if(!inventoryFilters){return;}
	
	const searchBarDiv = document.createElement("div");
	
	inventoryFilters.parentNode.insertBefore(searchBarDiv, inventoryFilters.nextSibling);
	
	// Create search bar
	const searchBar = document.createElement("input");
	searchBar.classList.add("input-text");
	searchBarDiv.appendChild(searchBar);
	searchBar.style.width = "200px";
	searchBar.placeholder = "Enter location";
	
	// Get table of inventories
	const tableBody = buffer.querySelector("tbody");
	
	// Add change listener to search bar to filter list
	searchBar.addEventListener("input", function() {
		(Array.from(tableBody.children) as HTMLElement[]).forEach(row => {
			if(filterRow(row, searchBar.value))
			{
				row.style.display = "table-row";
			}
			else
			{
				row.style.display = "none";
			}
		});
	});
}

function filterRow(row, search)
{
	if(!search || search === "")	// Always return all rows for empty searches
	{
		return true;
	}
	
	const location = row.children[1].textContent.toLowerCase();	// The location of the inventory
	if(location !== "--")
	{
		// Just match the search text into the location name
		if(location.includes(search.toLowerCase()))
		{
			return true;
		}
	}
	
	const name = row.children[2].textContent.toLowerCase();	// The name of the ship ('' if a non-ship inventory)
	if(name !== "")
	{
		// Just match the search text into the ship name
		if(name.includes(search.toLowerCase()))
		{
			return true;
		}
	}
	
	return false;
}