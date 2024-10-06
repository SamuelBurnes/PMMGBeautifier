import {
	createTextSpan,
	createSelectOption
} from "../../util";
import {Style} from "../../Style";
import {addMessage} from "./Execute";

export function needsConfiguration(action)
{
	switch(action.type)
	{
		case "MTRA":
			if(action.dest && action.dest == "Configure on Execution")
			{
				return true;
			}
			else if(action.origin && action.origin == "Configure on Execution")
			{
				return true;
			}
			break;
		// No configuration for CX buy, so no need to switch
	}
	
	return false;
}

// Create configuration UI for the n-th action package action (controlled by currentConfigIndex). Will loop through all actions by incrementing and recursively running
export function createConfigureUI(packageConfig, tile, rawActionPackage, userInfo, validateButton, executeButton, messageBox, currentConfigIndex)
{
	if(currentConfigIndex == rawActionPackage.actions.length)	// We've stepped through everything and configuration is done
	{
		validateButton.classList.remove(...Style.ButtonDisabled);
		executeButton.classList.remove(...Style.ButtonDisabled);
		validateButton.classList.add(...Style.ButtonPrimary);
		executeButton.classList.add(...Style.ButtonPrimary);
		validateButton.disabled = false;
		executeButton.disabled = false;
		return;
	}
	
	const action = rawActionPackage.actions[currentConfigIndex];
	
	if(!needsConfiguration(action))
	{
		// Loop again since no action is needed
		createConfigureUI(packageConfig, tile, rawActionPackage, userInfo, validateButton, executeButton, messageBox, currentConfigIndex + 1);
		return;
	}
	
	const configInfo = document.createElement("div");
	configInfo.classList.add("pb-config");
	tile.appendChild(configInfo);
	
	// Create area where current config description is listed
	const currentConfigDiv = document.createElement("div");
	currentConfigDiv.style.marginLeft = "5px";
	currentConfigDiv.style.marginTop = "5px";
	const currentConfig = createTextSpan("Awaiting First Config");
	currentConfigDiv.appendChild(currentConfig);
	configInfo.appendChild(currentConfigDiv);
	
	// Create configuration controls
	const configControls = document.createElement("div");
	configControls.style.marginLeft = "5px";
	configControls.style.marginTop = "5px";
	configInfo.appendChild(configControls);
	
	if(!rawActionPackage.actions[currentConfigIndex])
	{
		addMessage(messageBox, "Missing action at index " + currentConfigIndex.toLocaleString(undefined), "ERROR");
	}
	
	// Create controls based on action type
	switch(action.type)
	{
		case "MTRA":
			if(action.group)
			{
				currentConfig.textContent = "Configure transfer locations for group " + action.group;
			}
			else
			{
				addMessage(messageBox, "Missing group on action at index " + currentConfigIndex.toLocaleString(undefined), "ERROR");
			}
			var filteredStorages = [...userInfo["PMMG-User-Info"].storage];	// Filter to only storages in the same location as the origin/destination
			if(action.origin && action.origin == "Configure on Execution" && action.dest && action.dest == "Configure on Execution")
			{
				filteredStorages = [...userInfo["PMMG-User-Info"].storage];
			}
			else if(action.origin && action.origin == "Configure on Execution" && action.dest)
			{
				const destStoragePayload = [...userInfo["PMMG-User-Info"].storage].find(storage => parseStorageName(storage) === action.dest);
				
				if(destStoragePayload)
				{
					filteredStorages = [...userInfo["PMMG-User-Info"].storage].filter(storage => atSameLocation(storage, destStoragePayload, userInfo));
				}
				else
				{
					addMessage(messageBox, "No matching destination payload found.", "WARNING");
					filteredStorages = [...userInfo["PMMG-User-Info"].storage];
				}
			}
			else if(action.dest && action.dest == "Configure on Execution" && action.origin)
			{
				const originStoragePayload = [...userInfo["PMMG-User-Info"].storage].find(storage => parseStorageName(storage) === action.origin);
				
				if(originStoragePayload)
				{
					filteredStorages = [...userInfo["PMMG-User-Info"].storage].filter(storage => atSameLocation(storage, originStoragePayload, userInfo));
				}
				else
				{
					addMessage(messageBox, "No matching origin payload found.", "WARNING");
					filteredStorages = [...userInfo["PMMG-User-Info"].storage];
				}
			}
			else
			{
				filteredStorages = [...userInfo["PMMG-User-Info"].storage];
			}
			
			const storageNames = filteredStorages.sort(storageSort).map(parseStorageName);
			var originSelect;
			var destSelect;
			
			if(action.origin && action.origin == "Configure on Execution")
			{
				// Create dropdown to select origin
				const originDiv = document.createElement("div");
				originDiv.style.marginBottom = "2px";
				
				originDiv.appendChild(createTextSpan("Origin: "));
				
				originSelect = document.createElement("select");
				originSelect.classList.add("select");
				originDiv.appendChild(originSelect);
				
				
				storageNames.forEach(text => {
					originSelect.appendChild(createSelectOption(text, text));
				});
				
				configControls.appendChild(originDiv);
			}
			if(action.dest && action.dest == "Configure on Execution")
			{
				// Create dropdown to select destination
				const destDiv = document.createElement("div");
				destDiv.style.marginBottom = "5px";
				
				destDiv.appendChild(createTextSpan("Destination: "));
				
				destSelect = document.createElement("select");
				destSelect.classList.add("select");
				destDiv.appendChild(destSelect);
				
				storageNames.forEach(text => {
					destSelect.appendChild(createSelectOption(text, text));
				});
				
				configControls.appendChild(destDiv);
			}
			// Create configure button
			const configureButton = document.createElement("button");
			configureButton.classList.add(...Style.Button);
			configureButton.classList.add(...Style.ButtonPrimary);
			configureButton.textContent = "CONFIGURE";
			configControls.appendChild(configureButton);
			
			// Do configuration actions when clicked
			configureButton.addEventListener("click", function() {
				packageConfig.actions[currentConfigIndex] = {};
				if(originSelect)
				{
					packageConfig.actions[currentConfigIndex].origin = originSelect.value;
				}
				if(destSelect)
				{
					packageConfig.actions[currentConfigIndex].dest = destSelect.value;
				}
				
				// Clean up elements
				tile.removeChild(configInfo);
				
				// Loop again
				createConfigureUI(packageConfig, tile, rawActionPackage, userInfo, validateButton, executeButton, messageBox, currentConfigIndex + 1);
			});
			
			break;
		default:
			addMessage(messageBox, "Unrecognized configuration type at index " + currentConfigIndex.toLocaleString(undefined), "ERROR");
	}
}

// Sort storages into an order based on type
function storageSort(a, b)
{
	const storagePriorityMap = {"FTL_FUEL_STORE": 4, "STL_FUEL_STORE": 3, "SHIP_STORE": 2, "STORE": 0, "WAREHOUSE_STORE": 1};
	return (a.type && b.type && storagePriorityMap[a.type] > storagePriorityMap[b.type]) ? 1 : -1;
}

function parseStorageName(storage)
{
	switch(storage.type)
	{
		case "STL_FUEL_STORE":
			return storage.name + " STL Store";
		case "FTL_FUEL_STORE":
			return storage.name + " FTL Store";
		case "SHIP_STORE":
			return storage.name + " Cargo";
		case "STORE":
			return storage.PlanetName + " Base";
		case "WAREHOUSE_STORE":
			return storage.PlanetName + " Warehouse";
	}
	
	return "Error, unable to parse";
}

function atSameLocation(storageA, storageB, userInfo)
{
	var storageALocation;
	var storageBLocation;
	
	if(storageA.name)	// Storage A is a ship
	{
		const storageAShip = userInfo["PMMG-User-Info"]["ships"].find(ship => ship.name.toLowerCase() === storageA.name.toLowerCase() || ship.registration.toLowerCase() === storageA.name.toLowerCase());
		
		if(storageAShip && storageAShip.address && storageAShip.address.lines && storageAShip.address.lines[1])
		{
			storageALocation = storageAShip.address.lines[1].entity.name;
		}
	}
	else	// Storage A is a base/warehouse
	{
		storageALocation = storageA.PlanetName;
	}
	
	if(storageB.name)	// Storage B is a ship
	{
		const storageBShip = userInfo["PMMG-User-Info"]["ships"].find(ship => ship.name.toLowerCase() === storageB.name.toLowerCase() || ship.registration.toLowerCase() === storageB.name.toLowerCase());
		
		if(storageBShip && storageBShip.address && storageBShip.address.lines && storageBShip.address.lines[1])
		{
			storageBLocation = storageBShip.address.lines[1].entity.name;
		}
	}
	else	// Storage B is a base/warehouse
	{
		storageBLocation = storageB.PlanetName;
	}
	console.log(storageA);
	console.log(storageB);
	return storageALocation && storageBLocation && storageALocation === storageBLocation && storageA.id !== storageB.id;
}