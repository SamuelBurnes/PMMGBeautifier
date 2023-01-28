import {clearChildren, createTextSpan, downloadFile, createSelectOption, setSettings, getLocalStorage, createToolTip} from "../util";
import {Style, WithStyles} from "../Style";

export function Settings(tile, parameters, result, fullBurn, burnSettings, modules)
{
	clearChildren(tile);
	const warningDiv = document.createElement("div");
	tile.appendChild(warningDiv);
	warningDiv.style.marginTop = "4px";
	warningDiv.appendChild(createTextSpan("Settings changes require a refresh to take effect."));
	
	const authenticationHeader = document.createElement('h3');
    authenticationHeader.appendChild(document.createTextNode("Authentication Settings"));
	authenticationHeader.appendChild(createToolTip("Enter your FIO username and API key, as well as a corporate web app ID", "right"));
	authenticationHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(authenticationHeader);
	const usernameDiv = document.createElement("div");
	const usernameLabel = createTextSpan("FIO Username: ");
	const usernameInput = document.createElement("input");
	usernameInput.value = result["PMMGExtended"]["username"] || "";
	usernameInput.addEventListener("input", function(){
		result["PMMGExtended"]["username"] = !usernameInput.value || usernameInput.value == "" ? undefined : usernameInput.value;
		setSettings(result);
	});
	usernameInput.classList.add("input-text");
	usernameDiv.appendChild(usernameLabel);
	usernameDiv.appendChild(usernameInput);
	tile.appendChild(usernameDiv);
	
	const apiDiv = document.createElement("div");
	const apiLabel = createTextSpan("FIO API Key: ");
	apiLabel.style.minWidth = "77px";
	apiLabel.style.display = "inline-block";
	const apiInput = document.createElement("input");
	apiInput.value = result["PMMGExtended"]["apikey"] || "";
	apiInput.addEventListener("input", function(){
		result["PMMGExtended"]["apikey"] = !apiInput.value || apiInput.value == "" ? undefined : apiInput.value;
		setSettings(result);
	});
	apiInput.classList.add("input-text");
	apiInput.type = "password";
	apiDiv.appendChild(apiLabel);
	apiDiv.appendChild(apiInput);
	tile.appendChild(apiDiv);
	
	const webDiv = document.createElement("div");
	const webLabel = createTextSpan("Web App ID: ");
	webLabel.style.minWidth = "77px";
	webLabel.style.display = "inline-block";
	const webInput = document.createElement("input");
	webInput.value = result["PMMGExtended"]["webappid"] || "";
	webInput.addEventListener("input", function(){
		result["PMMGExtended"]["webappid"] = !webInput.value || webInput.value == "" ? undefined : webInput.value;
		setSettings(result);
	});
	webInput.classList.add("input-text");
	webDiv.appendChild(webLabel);
	webDiv.appendChild(webInput);
	tile.appendChild(webDiv);
	
	const moduleSettingsHeader = document.createElement('h3');
    moduleSettingsHeader.appendChild(document.createTextNode("Toggle Features"));
	moduleSettingsHeader.appendChild(createToolTip("Toggle features on and off. The yellow X cleans up any stray elements.", "right"));
    moduleSettingsHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(moduleSettingsHeader);
	const content = document.createElement("div");
	content.classList.add(...Style.SidebarSectionContent);
    tile.appendChild(content);
	modules.forEach(mp => {
		// Div for the whole line
		const line = document.createElement('div');
		line.classList.add(...WithStyles(Style.SidebarLine, Style.FontsRegular));
		content.appendChild(line);

		// Left
		line.appendChild(createTextSpan(mp.friendlyName));
		content.appendChild(line);
		
		// Right
		const right = document.createElement("span");
        right.style.flexGrow = "1";
        right.style.textAlign = "right";
        line.appendChild(right);
		
	    if(result["PMMGExtended"]["disabled"] == undefined){result["PMMGExtended"]["disabled"] = [];}
        const toggle = makeToggleButton("On", "Off", () => {
			mp.enabled = !mp.enabled;
			if(result["PMMGExtended"]["disabled"].includes(mp.name))
			{
				if(mp.enabled){
					for(var i = 0; i < result["PMMGExtended"]["disabled"].length; i++)
					{
						if(result["PMMGExtended"]["disabled"][i] == mp.name)
						{
							result["PMMGExtended"]["disabled"].splice(i, 1);
							i--;
						}
					}
				} // Was just enabled, remove disabled label
			}
			else
			{
				if(!mp.enabled){result["PMMGExtended"]["disabled"].push(mp.name);}	// Was just disabled, add disabled label
			}
			setSettings(result);
		}, mp.enabled);
		if(result["PMMGExtended"]["disabled"].includes(mp.name))
		{
			toggle.setAttribute("data-state", "false");
			mp.enabled = false;
			toggle.classList.remove(...Style.ButtonSuccess);
			toggle.classList.add(...Style.ButtonPrimary);
			toggle.innerText = "Off";
		}
		right.appendChild(toggle);

		const cleanup = makePushButton("x", () => mp.module.cleanup(true));
		cleanup.style.marginRight = "8px";
		right.appendChild(cleanup);
		return;
	});
	
	const enhancedColorHeader = document.createElement('h3');
    enhancedColorHeader.appendChild(document.createTextNode("Color Scheme"));
	enhancedColorHeader.appendChild(createToolTip("Select a color scheme to customize material icons.", "right"));
    enhancedColorHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(enhancedColorHeader);
	
	const colorDiv = document.createElement("div");
	
	const colorLabel = createTextSpan("Color Scheme:");
	colorLabel.style.marginBottom = "4px";
	colorDiv.appendChild(colorLabel);
	
	const colorSelect = document.createElement("select");
	colorSelect.name = "colors-select";
	colorSelect.id = "colors-select";
	colorSelect.appendChild(createSelectOption("Enhanced", "enhanced"));
	colorSelect.appendChild(createSelectOption("Icons", "icons"));
	colorSelect.appendChild(createSelectOption("Default", "default"));
	colorSelect.classList.add("select");
	colorSelect.style.marginLeft = "4px";
	
	if(result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"])
	{
		(colorSelect.children[0] as HTMLOptionElement).selected = true;
	}
	else if(result["PMMGExtended"]["color_scheme"] == "icons")
	{
		(colorSelect.children[1] as HTMLOptionElement).selected = true;
	}
	else
	{
		(colorSelect.children[2] as HTMLOptionElement).selected = true;
	}
	colorSelect.style.display = "inline-block";
	colorSelect.addEventListener("change", function(){
		result["PMMGExtended"]["color_scheme"] = colorSelect.selectedOptions[0].value || undefined;
		setSettings(result);
	});
	colorDiv.appendChild(colorSelect);
	tile.appendChild(colorDiv);
	
	const minDiv = document.createElement("div");
	const minLabel = document.createElement('h3');
	minLabel.appendChild(createTextSpan("Minimize Headers By Default"));
	minLabel.appendChild(createToolTip("Minimize header rows on CXs and contracts by default.", "right"));
	minLabel.classList.add(...Style.SidebarSectionHead);
	minLabel.style.marginBottom = "4px";
	minDiv.appendChild(minLabel);
	
	const minCheckbox = document.createElement("input");
	minCheckbox.type = "checkbox";
	minCheckbox.checked = result["PMMGExtended"]["minimize_by_default"];
	minDiv.appendChild(minCheckbox);
	tile.appendChild(minDiv);
	minCheckbox.addEventListener("click", function() {
		result["PMMGExtended"]["minimize_by_default"] = minCheckbox.checked;
		setSettings(result);
	});
	
	const burnDiv = document.createElement("div");
	const burnLabel = document.createElement('h3');
	burnLabel.appendChild(createTextSpan("Burn Settings"));
	burnLabel.appendChild(createToolTip("Set the thresholds for yellow and red consumable levels in burn tiles (in days).", "right"));
	burnLabel.classList.add(...Style.SidebarSectionHead);
	burnLabel.style.marginBottom = "4px";
	burnDiv.appendChild(burnLabel);
	
	if(!result["PMMGExtended"]["burn_thresholds"]){result["PMMGExtended"]["burn_thresholds"] = [3, 7];}
	const setDiv = document.createElement("div");
	burnDiv.appendChild(setDiv);
	setDiv.style.display = "flex";
	const redDiv = document.createElement("div");
	setDiv.appendChild(redDiv);
	redDiv.appendChild(createTextSpan("Red Threshold: "));
	const redIn = document.createElement("input");
	redIn.type = "number";
	redIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3])[0].toLocaleString(undefined, {maximumFractionDigits: 0});
	redDiv.appendChild(redIn);
	redIn.classList.add("input-text");
	redIn.style.width = "50px";
	redIn.addEventListener("input", function(){
		result["PMMGExtended"]["burn_thresholds"][0] = parseFloat(redIn.value);
		setSettings(result);
	});
	
	const yelDiv = document.createElement("div");
	setDiv.appendChild(yelDiv);
	yelDiv.appendChild(createTextSpan("Yellow Threshold: "));
	const yelIn = document.createElement("input");
	yelIn.type = "number";
	yelIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1].toLocaleString(undefined, {maximumFractionDigits: 0});
	yelDiv.appendChild(yelIn);
	yelIn.classList.add("input-text");
	yelIn.style.width = "50px";
	yelIn.addEventListener("input", function(){
		result["PMMGExtended"]["burn_thresholds"][1] = parseFloat(yelIn.value);
		setSettings(result);
	});
	
	tile.appendChild(burnDiv);
	
	const screenUnpackHeader = document.createElement('h3');
    screenUnpackHeader.appendChild(document.createTextNode("Screen Unpack Exclusions"));
	screenUnpackHeader.appendChild(createToolTip("List screens to be excluded from screen unpack. Separate screens with a comma.", "right"));
    screenUnpackHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(screenUnpackHeader);
	const notifDiv = document.createElement("div");
	tile.appendChild(notifDiv);
	notifDiv.appendChild(createTextSpan("List screen names separated by commas, no spaces."));
	const exclusionInput = document.createElement("input");
	exclusionInput.classList.add("input-text");
	exclusionInput.value = result["PMMGExtended"]["unpack_exceptions"] == undefined ? "" : result["PMMGExtended"]["unpack_exceptions"].join(",");
	exclusionInput.addEventListener("input", function(){
		result["PMMGExtended"]["unpack_exceptions"] = exclusionInput.value.split(",");
		setSettings(result);
	});
	
	tile.appendChild(exclusionInput);
	
	const hotkeyHeader = document.createElement('h3');
    hotkeyHeader.appendChild(document.createTextNode("Left Sidebar Buttons"));
	hotkeyHeader.appendChild(createToolTip("Create hotkeys on the left sidebar. The first value is what will be displayed, the second is the command.", "right"));
    hotkeyHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(hotkeyHeader);
	const hotkeyInputDiv = document.createElement("div");
	tile.appendChild(hotkeyInputDiv);
	if(!result["PMMGExtended"]["sidebar"]){result["PMMGExtended"]["sidebar"] = [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]];}
	result["PMMGExtended"]["sidebar"].forEach(hotkey => {
		const div = createInputPair(hotkey, result, hotkeyInputDiv);
		if(div != null){hotkeyInputDiv.appendChild(div);}
		return;
	});
	
	const addButton = makePushButton("+", function(){
		const div = createInputPair([[],[]], result, hotkeyInputDiv);
		if(div != null){hotkeyInputDiv.appendChild(div);}
	}, Style.ButtonSuccess);
	addButton.style.marginLeft = "4px";
	addButton.style.marginBottom = "4px";
	
	tile.appendChild(addButton);
	
	const importHeader = document.createElement('h3');
    importHeader.appendChild(document.createTextNode("Import/Export Settings"));
    importHeader.classList.add(...Style.SidebarSectionHead);
	tile.appendChild(importHeader);
	
	const importDiv = document.createElement("div");
	
	const importButton = document.createElement("button");
	importButton.textContent = "Import Settings";
	importButton.classList.add(...Style.Button);
	importButton.classList.add(...Style.ButtonPrimary);
	importButton.style.marginLeft = "4px";
	importButton.style.marginBottom = "4px";
	importDiv.appendChild(importButton);
	const importFileInput = document.createElement("input");
	importFileInput.type = "file";
	importFileInput.accept = ".json";
	importFileInput.style.display = "none";
	importDiv.appendChild(importFileInput);
	importButton.addEventListener("click", function() {
		importFileInput.click()
		return;
	});
	const errorTextBox = createTextSpan("Error Loading File!");
	errorTextBox.style.display = "none";
	importDiv.appendChild(errorTextBox);
	importFileInput.addEventListener("change", function() {
		if(!this.files){return;}
		const file = this.files[0];
		if(!file){return;}
		const reader = new FileReader();
		reader.onload = function(e){
			if(!e || !e.target){return;}
			try
			{
				const fileOutput = JSON.parse(e.target.result);
				const exclude = ["username", "apikey", "webappid"];	// Don't overwrite username, apikey, and webappid
				Object.keys(fileOutput).forEach(key => {
					if(!exclude.includes(key))
					{
						result["PMMGExtended"][key] = fileOutput[key];
					}
				});
				setSettings(result);
				errorTextBox.style.display = "none";
			} catch(ex)
			{
				console.log("PMMG: Error encountered processing file!");
				errorTextBox.style.display = "inline-block";
			}
			
		}
		reader.readAsText(file);
		return;
	});
	
	const exportButton = document.createElement("button");
	exportButton.textContent = "Export Settings";
	exportButton.classList.add(...Style.Button);
	exportButton.classList.add(...Style.ButtonPrimary);
	exportButton.style.marginLeft = "4px";
	exportButton.style.marginBottom = "4px";
	importDiv.appendChild(exportButton);
	
	exportButton.addEventListener("click", function(){
		const output = {};
		const exclude = ["username", "apikey", "webappid"];	// Don't export username, apikey, and webappid
		Object.keys(result["PMMGExtended"]).forEach(key => {
			if(!exclude.includes(key))
			{
				output[key] = result["PMMGExtended"][key];
			}
		});
		
		downloadFile(output, "pmmg-settings" + Date.now().toString() + ".json");
	});
	
	tile.appendChild(importDiv);
	
	const importNoteDiv = document.createElement("div");
	
	const importNoteButton = document.createElement("button");
	importNoteButton.textContent = "Import Notes";
	importNoteButton.classList.add(...Style.Button);
	importNoteButton.classList.add(...Style.ButtonPrimary);
	importNoteButton.style.marginLeft = "4px";
	importNoteButton.style.marginBottom = "4px";
	importNoteDiv.appendChild(importNoteButton);
	const importNoteFileInput = document.createElement("input");
	importNoteFileInput.type = "file";
	importNoteFileInput.accept = ".json";
	importNoteFileInput.style.display = "none";
	importNoteDiv.appendChild(importNoteFileInput);
	importNoteButton.addEventListener("click", function() {
		importNoteFileInput.click()
		return;
	});
	const errorNoteTextBox = createTextSpan("Error Loading File!");
	errorNoteTextBox.style.display = "none";
	importNoteDiv.appendChild(errorNoteTextBox);
	importNoteFileInput.addEventListener("change", function() {
		if(!this.files){return;}
		const file = this.files[0];
		if(!file){return;}
		const reader = new FileReader();
		reader.onload = function(e){
			if(!e || !e.target){return;}
			try
			{
				const fileOutput = JSON.parse(e.target.result);
				setSettings(fileOutput);
				errorNoteTextBox.style.display = "none";
			} catch(ex)
			{
				console.log("PMMG: Error encountered processing file!");
				errorNoteTextBox.style.display = "inline-block";
			}
			
		}
		reader.readAsText(file);
		return;
	});
	
	const exportNoteButton = document.createElement("button");
	exportNoteButton.textContent = "Export Notes";
	exportNoteButton.classList.add(...Style.Button);
	exportNoteButton.classList.add(...Style.ButtonPrimary);
	exportNoteButton.style.marginLeft = "4px";
	exportNoteButton.style.marginBottom = "4px";
	importNoteDiv.appendChild(exportNoteButton);
	
	exportNoteButton.addEventListener("click", function(){
		getLocalStorage("PMMG-Notes", downloadFile, "pmmg-notes" + Date.now().toString() + ".json");
	});
	
	tile.appendChild(importNoteDiv);
	
	return [parameters, fullBurn, burnSettings];
}

function createInputPair(hotkey, result, fullDiv)
{
	if(hotkey.length != 2){return null;}
	const div = document.createElement("div");
	const displayedValue = document.createElement("input");
	displayedValue.classList.add("input-text");
	displayedValue.style.display = "inline-block";
	div.appendChild(displayedValue);
	const command = document.createElement("input");
	command.classList.add("input-text");
	command.style.display = "inline-block";
	div.appendChild(command);
	const remove = makePushButton("X", function(){
		displayedValue.value = "";
		command.value = "";
		
		displayedValue.dispatchEvent(new Event("input"));
		(Array.from(div.children) as HTMLElement[]).forEach(elem => {div.removeChild(elem);return;});
	}, Style.ButtonDanger);
	remove.style.display = "inline-block";
	div.appendChild(remove);
	
	displayedValue.value = hotkey[0];
	command.value = hotkey[1];
	
	displayedValue.addEventListener("input", function(){
		var hotkeys = [] as string[][];
		(Array.from(fullDiv.children) as HTMLElement[]).forEach(option => {
			if(option.children[0] != undefined && option.children[1] != undefined && (option.children[0] as HTMLInputElement).value != "" && (option.children[0] as HTMLInputElement).value != undefined && (option.children[1] as HTMLInputElement).value != "" && (option.children[1] as HTMLInputElement).value != undefined)
			{
				hotkeys.push([(option.children[0] as HTMLInputElement).value, (option.children[1] as HTMLInputElement).value] as string[]);
			}
			return;
		});
		result["PMMGExtended"]["sidebar"] = hotkeys;
		setSettings(result);
	});
	
	command.addEventListener("input", function(){
		var hotkeys = [] as string[][];
		(Array.from(fullDiv.children) as HTMLElement[]).forEach(option => {
			if(option.children[0] != undefined && option.children[1] != undefined && (option.children[0] as HTMLInputElement).value != "" && (option.children[0] as HTMLInputElement).value != undefined && (option.children[1] as HTMLInputElement).value != "" && (option.children[1] as HTMLInputElement).value != undefined)
			{
				hotkeys.push([(option.children[0] as HTMLInputElement).value, (option.children[1] as HTMLInputElement).value] as string[]);
			}
			return;
		});
		result["PMMGExtended"]["sidebar"] = hotkeys;
		setSettings(result);
	});
	return div;
}

function makePushButton(text: string, f: () => void, style = Style.ButtonPrimary) {
    const button = document.createElement('button');
    button.classList.add(...Style.Button);
    button.classList.add(...style);
    button.onclick = f;
    button.innerText = text;
    return button;
}

function makeToggleButton(on: string, off: string, f: () => void, state: boolean = false) {
	const toggle = document.createElement('button');
	toggle.classList.add(...Style.Button);
	const setLook = (s: boolean) => {
	  toggle.innerText = s ? on : off;
	  // If state is switched on:
	  if (s) {
		toggle.classList.remove(...Style.ButtonPrimary);
		toggle.classList.add(...Style.ButtonSuccess);
	  } else {
		toggle.classList.remove(...Style.ButtonSuccess);
		toggle.classList.add(...Style.ButtonPrimary);
	  }
	};

	toggle.setAttribute("data-state", String(state));
	setLook(state);
	toggle.onclick = () => {
	  const newState = !(toggle.getAttribute("data-state") === "true");
	  toggle.setAttribute("data-state", String(newState));
	  setLook(newState);
	  f();
	};
	toggle.style.width = "40px";
	return toggle;
}
