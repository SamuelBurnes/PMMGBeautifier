/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["r"] = downloadFile;
/* harmony export (immutable) */ __webpack_exports__["i"] = createNode;
/* harmony export (immutable) */ __webpack_exports__["l"] = createSelectOption;
/* harmony export (immutable) */ __webpack_exports__["e"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["C"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["p"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["o"] = createTextDiv;
/* unused harmony export createFinancialTextBox */
/* harmony export (immutable) */ __webpack_exports__["u"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["s"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["a"] = CategorySort;
/* harmony export (immutable) */ __webpack_exports__["t"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["B"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["D"] = parseInvName;
/* harmony export (immutable) */ __webpack_exports__["E"] = parsePlanetName;
/* harmony export (immutable) */ __webpack_exports__["y"] = getLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["d"] = clearChildren;
/* harmony export (immutable) */ __webpack_exports__["F"] = setSettings;
/* harmony export (immutable) */ __webpack_exports__["b"] = XITWebRequest;
/* harmony export (immutable) */ __webpack_exports__["h"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["g"] = createLink;
/* harmony export (immutable) */ __webpack_exports__["G"] = showBuffer;
/* harmony export (immutable) */ __webpack_exports__["c"] = changeValue;
/* harmony export (immutable) */ __webpack_exports__["v"] = genericCleanup;
/* unused harmony export genericUnhide */
/* harmony export (immutable) */ __webpack_exports__["I"] = targetedCleanup;
/* harmony export (immutable) */ __webpack_exports__["w"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* unused harmony export sortTable */
/* harmony export (immutable) */ __webpack_exports__["n"] = createTable;
/* harmony export (immutable) */ __webpack_exports__["q"] = createToolTip;
/* harmony export (immutable) */ __webpack_exports__["A"] = makePopupSpacer;
/* harmony export (immutable) */ __webpack_exports__["k"] = createPopupInputRow;
/* harmony export (immutable) */ __webpack_exports__["j"] = createPopupCheckboxRow;
/* harmony export (immutable) */ __webpack_exports__["z"] = getValueOfPopupRow;
/* harmony export (immutable) */ __webpack_exports__["x"] = getCheckOfPopupRow;
/* harmony export (immutable) */ __webpack_exports__["m"] = createSmallButton;
/* harmony export (immutable) */ __webpack_exports__["f"] = createContractDict;
/* harmony export (immutable) */ __webpack_exports__["H"] = showWarningDialog;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(2);



function downloadFile(fileData, fileName, isJSON = true) {
    const blob = new Blob([isJSON ? JSON.stringify(fileData) : fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const urlElement = document.createElement("a");
    urlElement.setAttribute("download", fileName);
    urlElement.href = url;
    urlElement.setAttribute("target", "_blank");
    urlElement.click();
    URL.revokeObjectURL(url);
    return;
}
function createNode(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}
function createSelectOption(optionLabel, optionValue) {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionLabel;
    return option;
}
function convertDurationToETA(parsedSeconds) {
    const eta = new Date();
    const now = new Date();
    eta.setSeconds(eta.getSeconds() + parsedSeconds);
    const diffTime = Math.abs(eta.getTime() - now.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let ret = eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (diffDays > 0) {
        ret += ` +${diffDays}d`;
    }
    return ret;
}
function parseDuration(duration) {
    const days = duration.match(/(\d+)\s*d/);
    const hours = duration.match(/(\d+)\s*h/);
    const minutes = duration.match(/(\d+)\s*m/);
    const seconds = duration.match(/(\d+)\s*s/);
    let parsedSeconds = 0;
    if (days) {
        parsedSeconds += parseInt(days[1]) * 86400;
    }
    if (hours) {
        parsedSeconds += parseInt(hours[1]) * 3600;
    }
    if (minutes) {
        parsedSeconds += parseInt(minutes[1]) * 60;
    }
    if (seconds) {
        parsedSeconds += parseInt(seconds[1]);
    }
    return parsedSeconds;
}
function createTextSpan(text, className = "prun-remove-js") {
    const newSpan = document.createElement("span");
    newSpan.classList.add(className);
    newSpan.textContent = text;
    return newSpan;
}
function createTextDiv(text, className = "prun-remove-js") {
    const newSpan = document.createElement("div");
    newSpan.classList.add(className);
    newSpan.textContent = text;
    return newSpan;
}
function createFinancialTextBox(primaryText, secondaryText, primaryTextColor, className = "prun-remove-js") {
    const box = document.createElement("div");
    box.classList.add(className);
    box.classList.add("fin-box");
    const primaryTextSpan = document.createElement("span");
    primaryTextSpan.style.fontSize = "12px";
    primaryTextSpan.style.lineHeight = "1.1";
    primaryTextSpan.style.color = primaryTextColor;
    primaryTextSpan.textContent = primaryText;
    box.appendChild(primaryTextSpan);
    const secondaryTextDiv = document.createElement("div");
    secondaryTextDiv.textContent = secondaryText;
    secondaryTextDiv.style.fontSize = "10px";
    secondaryTextDiv.style.lineHeight = "1.1";
    secondaryTextDiv.style.marginTop = "2px";
    secondaryTextDiv.style.color = "#999";
    box.appendChild(secondaryTextDiv);
    return box;
}
function findInventoryAmount(ticker, inventory) {
    for (var i = 0; i < inventory["Inventory"].length; i++) {
        if (inventory["Inventory"][i]["MaterialTicker"] == ticker) {
            return inventory["Inventory"][i]["MaterialAmount"];
        }
    }
    return 0;
}
function findBurnAmount(ticker, inventory) {
    for (var i = 0; i < inventory["WorkforceConsumption"].length; i++) {
        if (inventory["WorkforceConsumption"][i]["MaterialTicker"] == ticker) {
            return inventory["WorkforceConsumption"][i]["DailyAmount"];
        }
    }
    return 0;
}
function CategorySort(a, b) {
    if (!__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][a] || !__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][b]) {
        return 0;
    }
    return __WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][a][1].localeCompare(__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][b][1]);
}
function findCorrespondingPlanet(planet, data) {
    if (!data || !planet) {
        return undefined;
    }
    for (var i = 0; i < data.length; i++) {
        if (planet && data[i]["PlanetNaturalId"] && data[i]["PlanetNaturalId"].toLowerCase() == planet.toLowerCase()) {
            return data[i];
        }
        else if (planet && data[i]["PlanetName"] && data[i]["PlanetName"].toLowerCase() == planet.toLowerCase()) {
            return data[i];
        }
        else if (planet && data[i]["PlanetNaturalId"] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["g" /* PlanetNames */][planet] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["g" /* PlanetNames */][planet].toLowerCase() == data[i]["PlanetNaturalId"].toLowerCase()) {
            return data[i];
        }
    }
    return undefined;
}
function parseBaseName(text) {
    try {
        var match = text.match(/@ ([A-Z]{2}-[0-9]{3} [a-z]) Base/);
        if (match && match[1]) {
            return match[1].replace(" ", "");
        }
        match = text.match(/@ ([A-z ]*) - ([A-z ]*) Base/);
        if (match && match[1] && match[2]) {
            return match[2];
        }
        match = text.match(/@ ([A-z ]*) ([A-z]) Base/);
        if (match && match[1] && match[2] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["i" /* SystemNames */][match[1].toUpperCase()]) {
            return __WEBPACK_IMPORTED_MODULE_1__GameProperties__["i" /* SystemNames */][match[1].toUpperCase()] + match[2].toLowerCase();
        }
        match = text.match(/@ [A-Z]{2}-[0-9]{3} - ([A-z ]*) Base/);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return text;
    }
}
function parseInvName(text) {
    try {
        const match = text.split(" ");
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return null;
    }
}
function parsePlanetName(text) {
    try {
        const match = text.match(/\((.*?)\)/);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return null;
    }
}
function getLocalStorage(storageName, callbackFunction, params) {
    try {
        browser.storage.local.get(storageName).then(function (result) {
            callbackFunction(result, params);
        });
    }
    catch (err) {
        chrome.storage.local.get([storageName], function (result) {
            callbackFunction(result, params);
        });
    }
}
function clearChildren(elem) {
    elem.textContent = "";
    while (elem.children[0]) {
        elem.removeChild(elem.children[0]);
    }
    return;
}
function setSettings(result) {
    try {
        browser.storage.local.set(result);
    }
    catch (err) {
        chrome.storage.local.set(result, function () {
        });
    }
    return;
}
function XITWebRequest(tile, parameters, callbackFunction, url, requestType = "GET", header, content) {
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        tile.textContent = "Error! Data Could Not Be Loaded! Timed Out!";
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callbackFunction(tile, parameters, xhr.responseText);
        }
        return;
    };
    xhr.timeout = 10000;
    xhr.open(requestType, url, true);
    if (header) {
        xhr.setRequestHeader(header[0], header[1]);
    }
    if (content) {
        xhr.send(content);
    }
    else {
        xhr.send(null);
    }
    return;
}
function createMaterialElement(ticker, className = "prun-remove-js", amount = "none", text = false, small = false) {
    if (!__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][ticker] && ticker != "SHPT") {
        return null;
    }
    const name = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][ticker] || ["Shipment"])[0];
    const category = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][ticker] || [undefined, "shipment"])[1];
    const matText = createTextSpan(ticker, className);
    matText.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MatText));
    const matTextWrapper = document.createElement("div");
    matTextWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MatTextWrapper));
    matTextWrapper.appendChild(matText);
    const material = document.createElement("div");
    material.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialElement));
    material.appendChild(matTextWrapper);
    material.style.background = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][0];
    material.style.color = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][1];
    material.title = name;
    material.addEventListener("click", function () {
        showBuffer("MAT " + ticker.toUpperCase());
    });
    const materialWrapper = document.createElement("div");
    materialWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialWrapper));
    materialWrapper.appendChild(material);
    const materialWrapperWrapper = document.createElement("div");
    materialWrapperWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialWrapperWrapper));
    materialWrapperWrapper.appendChild(materialWrapper);
    const outerLayer = document.createElement("div");
    outerLayer.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialOuter));
    outerLayer.classList.add(className);
    outerLayer.appendChild(materialWrapperWrapper);
    if (amount && amount != "none") {
        const materialNumberWrapper = document.createElement("div");
        materialNumberWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialNumberWrapper));
        materialWrapper.appendChild(materialNumberWrapper);
        const materialNumber = createTextDiv(amount, className);
        materialNumber.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialNumber));
        materialNumberWrapper.appendChild(materialNumber);
    }
    if (text) {
        const textElemWrapper = document.createElement("span");
        textElemWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].MaterialNameText));
        const textElem = createTextSpan(name, className);
        textElemWrapper.appendChild(textElem);
        outerLayer.appendChild(textElemWrapper);
    }
    if (small) {
        materialWrapper.classList.add("mat-element-small");
        return materialWrapper;
    }
    else {
        materialWrapper.classList.add("mat-element-large");
    }
    return outerLayer;
}
function createLink(text, command) {
    const link = document.createElement("span");
    link.textContent = text;
    link.addEventListener("click", function () { showBuffer(command); });
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(link);
    return linkDiv;
}
function showBuffer(command) {
    const button = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].NewBFRButton);
    if (button == null) {
        return false;
    }
    const addSubmitCommand = (input, cmd) => {
        changeValue(input, cmd);
        input.parentElement.parentElement.requestSubmit();
    };
    monitorOnElementCreated(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferTextField, (elem) => addSubmitCommand(elem, command));
    button.click();
    return true;
}
function changeValue(input, value) {
    var propDescriptor = Object.getOwnPropertyDescriptor(window["HTMLInputElement"].prototype, "value");
    if (propDescriptor == undefined) {
        return;
    }
    var nativeInputValueSetter = propDescriptor.set;
    if (nativeInputValueSetter == undefined) {
        return;
    }
    nativeInputValueSetter.call(input, value);
    var inputEvent = document.createEvent('Event');
    inputEvent.initEvent('input', true, true);
    input.dispatchEvent(inputEvent);
}
function monitorOnElementCreated(selector, callback, onlyOnce = true) {
    const getElementsFromNodes = (nodes) => (Array.from(nodes)).flatMap(node => node.nodeType === 3 ? null : Array.from(node.querySelectorAll(selector))).filter(item => item !== null);
    let onMutationsObserved = function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                var elements = getElementsFromNodes(mutation.addedNodes);
                for (var i = 0, len = elements.length; i < len; i++) {
                    callback(elements[i]);
                    if (onlyOnce)
                        observer.disconnect();
                }
            }
        });
    };
    let containerSelector = 'body';
    let target = document.querySelector(containerSelector);
    if (!target) {
        return;
    }
    let config = { childList: true, subtree: true };
    let MutationObserver = window["MutationObserver"] || window["WebKitMutationObserver"];
    let observer = new MutationObserver(onMutationsObserved);
    observer.observe(target, config);
    return;
}
function genericCleanup(className = "prun-remove-js") {
    Array.from(document.getElementsByClassName(className)).forEach((elem) => {
        elem.parentNode && elem.parentNode.removeChild(elem);
        return;
    });
    return;
}
function genericUnhide(className = "prun-remove-js") {
    Array.from(document.getElementsByClassName(className + "-hidden")).forEach((elem) => {
        elem.style.display = "";
        elem.classList.remove(className + "-hidden");
        return;
    });
    return;
}
function targetedCleanup(className, element) {
    Array.from(element.getElementsByClassName(className)).forEach((elem) => {
        elem.parentNode && elem.parentNode.removeChild(elem);
        return;
    });
    return;
}
function getBuffers(bufferCode) {
    const nodes = document.evaluate(`//div[@class='${__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferHeader}'][starts-with(translate(., 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), '${bufferCode}')]/../..`, document, null, XPathResult.ANY_TYPE, null);
    var buffers = [];
    var node;
    while (node = nodes.iterateNext()) {
        buffers.push(node);
    }
    return buffers;
}
function getElementsByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    const output = [];
    try {
        let node = result.iterateNext();
        while (node) {
            output.push(node);
            node = result.iterateNext();
        }
    }
    catch (e) {
    }
    return output;
}
function sortTable(table, column, sortType) {
    var sorter = [];
    if (table.children[1] == null) {
        return;
    }
    const rows = Array.from(table.children[1].children);
    for (var i = 0; i < rows.length; i++) {
        var item = rows[i].children[column];
        if (item == null || item.firstChild == null) {
            break;
        }
        sorter.push([item.firstChild.textContent, rows[i]]);
    }
    if (sortType == "alph") {
        sorter.sort(tableSortAlph);
    }
    sorter.forEach(item => {
        table.children[1].insertBefore(table.children[1].children[0], item[1]);
    });
}
function tableSortAlph(a, b) {
    return a[0].localeCompare(b[0]);
}
function createTable(tile, headers) {
    let table = document.createElement("table");
    tile.appendChild(table);
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);
    for (let title of headers) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headerRow.appendChild(header);
    }
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    return tbody;
}
function createToolTip(text, position) {
    const tooltip = document.createElement("span");
    tooltip.innerHTML = `<span data-tooltip="${text}" data-tooltip-position="${position}" class="kfU78EaaOVbQR2YM0eeGew==" style="float: revert;font-size: 12px;margin-top:-4px;">ⓘ</span>`;
    return tooltip.firstChild || tooltip;
}
function makePopupSpacer(tile, toRemove) {
    const spacer = document.createElement("div");
    spacer.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].Spacer);
    spacer.addEventListener("click", function () {
        tile.removeChild(toRemove);
        return;
    });
    return spacer;
}
function createPopupInputRow(label, text = "", tooltip = "") {
    const inputRow = document.createElement("div");
    inputRow.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormRow);
    const inputLabel = document.createElement("label");
    inputLabel.textContent = label;
    if (tooltip != "") {
        inputLabel.appendChild(createToolTip(tooltip, "right"));
    }
    inputLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormLabel);
    inputRow.appendChild(inputLabel);
    const inputInputDiv = document.createElement("div");
    inputInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormInput);
    inputRow.appendChild(inputInputDiv);
    const inputInput = document.createElement("input");
    inputInput.style.width = "80%";
    inputInputDiv.appendChild(inputInput);
    inputInput.value = text;
    return inputRow;
}
function createPopupCheckboxRow(label, enabled = false, tooltip = "") {
    const inputRow = document.createElement("div");
    inputRow.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormRow);
    const inputLabel = document.createElement("label");
    inputLabel.textContent = label;
    if (tooltip != "") {
        inputLabel.appendChild(createToolTip(tooltip, "right"));
    }
    inputLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormLabel);
    inputRow.appendChild(inputLabel);
    const inputInputDiv = document.createElement("div");
    inputInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormInput);
    inputRow.appendChild(inputInputDiv);
    const inputInput = document.createElement("input");
    inputInput.type = "checkbox";
    inputInputDiv.appendChild(inputInput);
    inputInput.checked = enabled;
    return inputRow;
}
function getValueOfPopupRow(row) {
    if (!row || !row.children[1] || !row.children[1].firstChild) {
        return "";
    }
    else {
        return row.children[1].firstChild.value || "";
    }
}
function getCheckOfPopupRow(row) {
    if (!row || !row.children[1] || !row.children[1].firstChild) {
        return false;
    }
    else {
        return row.children[1].firstChild.checked || false;
    }
}
function createSmallButton(label, clickFunction, parameters) {
    const button = document.createElement("button");
    button.textContent = label;
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SmallButton);
    button.addEventListener("click", function () { clickFunction(...parameters); });
    return button;
}
function createContractDict(contracts, username, contractdict) {
    for (let i = 0; i < contracts[username].length; i++) {
        const element = contracts[username][i];
        contractdict[element['ContractLocalId']] = element;
    }
}
function showWarningDialog(tile, message = "Are you sure?", confirmButtonText = "Confirm", callbackFunction, parameters) {
    const overlay = document.createElement("div");
    tile.appendChild(overlay);
    overlay.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ActionOverlay);
    const centerInterface = document.createElement("div");
    overlay.appendChild(centerInterface);
    centerInterface.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ActionCenterInterface);
    const confirm = document.createElement("span");
    centerInterface.appendChild(confirm);
    confirm.textContent = "Confirmation Required";
    confirm.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ActionConfirm);
    const confirmMessage = document.createElement("span");
    centerInterface.appendChild(confirmMessage);
    confirmMessage.textContent = message;
    confirmMessage.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ActionConfirmMessage);
    const buttonDiv = document.createElement("div");
    centerInterface.appendChild(buttonDiv);
    buttonDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ActionButtons);
    const cancelButton = document.createElement("button");
    cancelButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].Button);
    cancelButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ButtonNeutral);
    cancelButton.textContent = "Cancel";
    buttonDiv.appendChild(cancelButton);
    const confirmButton = document.createElement("button");
    confirmButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].Button);
    confirmButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].ButtonDanger);
    confirmButton.textContent = confirmButtonText;
    buttonDiv.appendChild(confirmButton);
    cancelButton.addEventListener("click", function () {
        tile.removeChild(overlay);
        return;
    });
    confirmButton.addEventListener("click", function () {
        tile.removeChild(overlay);
        if (parameters) {
            callbackFunction(parameters);
        }
        else {
            callbackFunction();
        }
        return;
    });
    return;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Selector = {
    LMCommodityAdText: "div[class~='CommodityAd__text___xJQmJNa']",
    LMCommodityAdPriceSpan: "div[class~='CommodityAd__text___xJQmJNa'] > span",
    ProdItem: "OrderSlot__container___YFyk8a7",
    ProdQueueTable: "table[class~='ProductionQueue__table___jHQGyUI']",
    BufferHeader: 'TileFrame__cmd___ScBYW0n type__type-very-small___HaVMqrE',
    Sidebar: "div#TOUR_TARGET_SIDEBAR_RIGHT",
    LMPostForm: "form[class~='LocalMarketPost__form___CAVPdDE']",
    WorkforceConsumptionTable: "div[class~='TileFrame__title___xRcZCPx']",
    XITTile: "div[class~='ScrollView__view___ovf59Tk'] > div",
    BufferTitle: "div[class~='TileFrame__title___xRcZCPx']",
    Notification: "div[class~='AlertListItem__container___m6eH2Jx']",
    ProdQueue: "div[class~='SiteProductionLines__column____s3cTk7']",
    BufferPanel: "div[class~='ScrollView__view___ovf59Tk']",
    NewBFRButton: "TOUR_TARGET_BUTTON_BUFFER_NEW",
    WholeWindow: "#container",
    BufferTextField: "input[class~='PanelSelector__input___wUstHrO']",
    BufferList: "#container > div > div > div > div:nth-child(3)",
    ScreenControls: "TOUR_TARGET_SCREEN_CONTROLS",
    LeftSidebar: "TOUR_TARGET_SIDEBAR_LEFT_02",
    BufferArea: "div[class~='Tile__selector___HYMmNEO']",
    ScreenName: "span[class~='ScreenControls__currentScreenName___I2sIYag']",
    MaterialIcon: "GridItemView__image___yMoKOZV",
    ChatLink: "span[class~='Link__link___fa4mmMA']",
    InventoryName: "span[class~='Link__link___fa4mmMA']",
    FullMaterialIcon: "div[class~='GridItemView__container___xP2uJz8']",
    Inventory: "div[class~='InventoryView__grid___UyRQSX8']",
    MaterialText: "span[class~='ColoredIcon__label___OU1I4oP']",
    InventorySortOptions: "div[class~='InventorySortControls__controls___qk5heAZ']",
    ChatArea: "div[class~='Channel__messageAndUserList___NCgQAtW']",
    MaterialQuantity: "div[class~='MaterialIcon__indicator___SHwlndJ']",
    HeaderRow: "div[class~='FormComponent__containerPassive___FrBdyGU']",
    FormInputRow: "div[class~='FormComponent__containerActive___HZv9jHd']",
    ContDForm: "div[class~='DraftConditionEditor__form___fF72bJM'] > form",
    ContDConditionsTable: "div[class~='Draft__conditions___bcIUndH'] > table > tbody",
    ContDFormLabel: "label[class~='FormComponent__label___aQB15eB']",
    ContDFormRowSpacer: "div[class~='DynamicInput__dynamic___Cd4Gkbz']",
    ContDFormInput: "div[class~='FormComponent__input___ZnI8mYi']",
    SidebarContract: "div[class~='Sidebar__contract___J0gmlzN']",
    SidebarContractId: "span[class~='Sidebar__contractId___Lg85TRZ']",
    BuildingList: "div[class~='SectionList__container___EtUzWyi']",
    Divider: "div[class~='SectionList__divider___cwWO45v']"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Style = {
    Button: ["Button__btn___UJGZ1b7"],
    ButtonPrimary: ["Button__primary____lObPiw"],
    ButtonSuccess: ["Button__success___bCiIVXw"],
    ButtonDisabled: ["Button__disabled____x8i7XF"],
    ButtonEnabled: ["Button__primary____lObPiw"],
    ButtonDanger: ["Button__danger___S2rSOES"],
    ButtonNeutral: ["Button__neutral___OAFOaNs"],
    SmallButton: ["Button__darkInline___z_YKa91", "Button__dark___vdJbcc8", "Button__btn___UJGZ1b7", "Button__inline___Ffw9bbn"],
    SidebarSectionHead: ["Sidebar__sectionHead____NHLKDT", "fonts__font-regular___Sxp1xjo"],
    SidebarSectionContent: ["Sidebar__sectionContent___wgGYFop", "fonts__font-regular___Sxp1xjo"],
    SidebarLine: ["Sidebar__contract___J0gmlzN", "Sidebar__sidebar-line___bE2rbRb"],
    FontsRegular: ["fonts__font-regular___Sxp1xjo"],
    SidebarText: ["Frame__toggleLabel___BTFce8H", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    SidebarSliver: ["Frame__toggleIndicatorSecondary___frX4CGi", "Frame__toggleIndicator___ZKQQgAL"],
    SidebarButton: ["Frame__toggle___V3iHpB7"],
    ContractLine: ["y84EUI8gCP-SV91X7vIihQ==", "fVd3aYJhFY-uuaH+QTByhA=="],
    ContractName: ["zhixp408YF082IzA5KPvfA=="],
    ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="],
    RadioButton: ["RadioItem__container___CSczqmG"],
    SettingsButton: ["RadioItem__container___CSczqmG", "RadioItem__containerHorizontal____trlXDo"],
    RadioButtonUnToggled: ["RadioItem__indicator___QzQtjhA"],
    SettingsBarUntoggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh"],
    RadioButtonToggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
    SettingsBarToggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
    RadioButtonValue: ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO"],
    SettingsText: ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO", "RadioItem__valueHorizontal___D5AXJ9P"],
    OverlappingDiv: ["Overlay__overlay___NA9HV8y"],
    GreyStripes: ["Overlay__background___ieZpHiF", "Overlay__overlay___NA9HV8y"],
    Spacer: ["Overlay__close___bxGoMIl"],
    ProgressBar: ["ProgressBar__primary___O30jBqq", "ProgressBar__progress___eb4KhuW"],
    ProgressBarColors: ["ProgressBar__primary___O30jBqq", "grey-progress-bar", "good-progress-bar", "warning-progress-bar", "danger-progress-bar"],
    ProgressBarGood: ["good-progress-bar"],
    ProgressBarWarning: ["warning-progress-bar"],
    ProgressBarDanger: ["danger-progress-bar"],
    CenterInterface: ["Overlay__children___rgtVaxc"],
    FormRow: ["FormComponent__containerActive___HZv9jHd", "forms__active___wn9KQTZ", "forms__form-component___yTgP_Qa"],
    HeaderRow: ["FormComponent__containerPassive___FrBdyGU", "forms__passive___biRUiE5", "forms__form-component___yTgP_Qa"],
    FormLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    FormSaveRow: ["FormComponent__containerCommand___B4XLERf", "forms__cmd___IMzt7Ug", "forms__form-component___yTgP_Qa"],
    FormSaveLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormSaveInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    ActionOverlay: ["ActionConfirmationOverlay__container___A05Ts1g", "ActionFeedback__overlay___NNDPRrV"],
    ActionCenterInterface: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
    ActionConfirm: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
    ActionConfirmMessage: ["ActionConfirmationOverlay__text___qkKzVK0", "ActionFeedback__text___YQjjibG", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    ActionButtons: ["ActionConfirmationOverlay__buttons___sE7CNVe"],
    MatText: ["ColoredIcon__label___OU1I4oP"],
    MatTextWrapper: ["ColoredIcon__labelContainer___YVfgzOk"],
    MaterialElement: ["ColoredIcon__container___djaR4r2"],
    MaterialWrapper: ["MaterialIcon__container___q8gKIx8"],
    MaterialNumberWrapper: ["MaterialIcon__indicatorContainer___Cqtax_Y"],
    MaterialNumber: ["MaterialIcon__indicator___SHwlndJ", "MaterialIcon__type-very-small___UMzQ3ir", "MaterialIcon__neutral___SYsHXAa"],
    MaterialWrapperWrapper: ["GridItemView__image___yMoKOZV"],
    MaterialOuter: ["GridItemView__container___xP2uJz8"],
    MaterialNameText: ["GridItemView__name___h3yX9Lm", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
};
/* harmony export (immutable) */ __webpack_exports__["e"] = Style;

const WithStyles = (...style) => {
    return style.reduce(((previousValue, currentValue) => previousValue.concat(currentValue)));
};
/* harmony export (immutable) */ __webpack_exports__["g"] = WithStyles;

const TextColors = {
    Failure: "#d9534f",
    Success: "#5cb85c",
    Standard: "#bbbbbb",
    Yellow: "#f7a600"
};
/* harmony export (immutable) */ __webpack_exports__["f"] = TextColors;

const CategoryColors = {
    "electronic devices": ["linear-gradient(135deg, rgb(86, 20, 147), rgb(111, 45, 172))", "rgb(213, 147, 255)"],
    "construction prefabs": ["linear-gradient(135deg, rgb(15, 30, 98), rgb(40, 55, 123))", "rgb(142, 157, 225)"],
    "electronic systems": ["linear-gradient(135deg, rgb(51, 26, 76), rgb(76, 51, 101))", "rgb(178, 153, 203)"],
    "medical equipment": ["linear-gradient(135deg, rgb(85, 170, 85), rgb(110, 195, 110))", "rgb(212, 255, 212)"],
    "construction parts": ["linear-gradient(135deg, rgb(41, 77, 107), rgb(66, 102, 132))", "rgb(168, 204, 234)"],
    "ship engines": ["linear-gradient(135deg, rgb(153, 41, 0), rgb(178, 66, 25))", "rgb(255, 168, 127)"],
    "ship parts": ["linear-gradient(135deg, rgb(153, 99, 0), rgb(178, 124, 25))", "rgb(255, 226, 127)"],
    "metals": ["linear-gradient(135deg, rgb(54, 54, 54), rgb(79, 79, 79))", "rgb(181, 181, 181)"],
    "consumables (luxury)": ["linear-gradient(135deg, rgb(136, 24, 39), rgb(161, 49, 64))", "rgb(255, 151, 166)"],
    "agricultural products": ["linear-gradient(135deg, rgb(92, 18, 18), rgb(117, 43, 43))", "rgb(219, 145, 145)"],
    "ores": ["linear-gradient(135deg, rgb(82, 87, 97), rgb(107, 112, 122))", "rgb(209, 214, 224)"],
    "gases": ["linear-gradient(135deg, rgb(0, 105, 107), rgb(25, 130, 132))", "rgb(127, 232, 234)"],
    "ship shields": ["linear-gradient(135deg, rgb(224, 131, 0), rgb(249, 156, 25))", "rgb(230 230,127)"],
    "alloys": ["linear-gradient(135deg, rgb(123, 76, 30), rgb(148, 101, 55))", "rgb(250, 203, 157)"],
    "chemicals": ["linear-gradient(135deg, rgb(183, 46, 91), rgb(208, 71, 116))", "rgb(255, 173, 218)"],
    "software components": ["linear-gradient(135deg, rgb(136, 121, 47), rgb(161, 146, 72))", "rgb(255, 248, 174)"],
    "electronic pieces": ["linear-gradient(135deg, rgb(119, 82, 189), rgb(144, 107, 214))", "rgb(246, 209, 255)"],
    "elements": ["linear-gradient(135deg, rgb(61, 46, 32), rgb(86, 71, 57))", "rgb(188, 173, 159)"],
    "minerals": ["linear-gradient(135deg, rgb(153, 113, 73), rgb(178, 138, 98))", "rgb(255, 240, 200)"],
    "unit prefabs": ["linear-gradient(135deg, rgb(29, 27, 28), rgb(54, 52, 53))", "rgb(156, 154, 155)"],
    "liquids": ["linear-gradient(135deg, rgb(114, 164, 202), rgb(139, 189, 227))", "rgb(241, 255, 255)"],
    "energy systems": ["linear-gradient(135deg, rgb(21, 62, 39), rgb(46, 87, 64))", "rgb(148, 189, 166)"],
    "drones": ["linear-gradient(135deg, rgb(140, 52, 18), rgb(165, 77, 43))", "rgb(255, 179, 145)"],
    "electronic parts": ["linear-gradient(135deg, rgb(91, 46, 183), rgb(116, 71, 208))", "rgb(218, 173, 255)"],
    "textiles": ["linear-gradient(135deg, rgb(82, 90, 33), rgb(107, 115, 58))", "rgb(209, 217, 160)"],
    "construction materials": ["linear-gradient(135deg, rgb(24, 91, 211), rgb(49, 116, 236))", "rgb(151, 218, 255)"],
    "software tools": ["linear-gradient(135deg, rgb(129, 98, 19), rgb(154, 123, 44))", "rgb(255, 255, 146)"],
    "plastics": ["linear-gradient(135deg, rgb(121, 31, 60), rgb(146, 56, 85))", "rgb(248, 158, 187)"],
    "consumables (basic)": ["linear-gradient(135deg, rgb(149, 46, 46), rgb(174, 71, 71))", "rgb(255, 173, 173)"],
    "fuels": ["linear-gradient(135deg, rgb(30, 123, 30), rgb(55, 148, 55))", "rgb(157, 250, 157)"],
    "software systems": ["linear-gradient(135deg, rgb(60, 53, 5), rgb(85, 78, 30))", "rgb(187, 180, 132)"],
    "ship kits": ["linear-gradient(135deg, rgb(154, 84, 0), rgb(178, 109, 25))", "rgb(255, 211, 127)"],
    "utility": ["linear-gradient(135deg, rgb(161, 148, 136), rgb(186, 173, 161))", "rgb(255, 255, 255)"],
    "shipment": ["linear-gradient(135deg, #030303, #181818)", "#7f7f7f"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryColors;

const PMMGStyle = `
.pb-minimize {
	font-size: 14px;
	font-weight: bold;
	margin-left: auto;
	margin-right: 3px;
	margin-top: 1px;
	text-align: center;
	width: 18px;
	cursor: pointer;
}
.pb-minimize-cx:hover {
	color: #26353e;
	background-color: #3fa2de;
}
.pb-minimize-cx {
	background-color: #26353e;
	color: #3fa2de;
}
.pb-minimize-settings:hover {
	color: #ddd;
}
.mat-element-large {
	height: 48px;
	width: 48px;
}
.mat-element-large div.ColoredIcon__container___djaR4r2 {
	height: 48px;
	width: 48px;
	font-size: 15.84px;
	cursor: pointer;
}
.mat-element-small {
	height: 32px;
	width: 32px;
}
.check-time-complete {
	text-decoration: line-through;
}
.check-time-overdue {
	color: #d9534f;
}
.check-time {
	color: rgb(153, 153, 153)
}
.checked-text {
	text-decoration: line-through;
	color: rgb(153, 153, 153)
}
.delete-button {
	background-color: #d9534f;
	border: none;
	color: #fff;
	line-height: 17px;
	font-weight: bold;
	outline: none;
	padding: 0 8px;
	font-size: 11px;
	cursor: pointer;
}
.delete-button:hover {
	color: #222;
}
.notes-wrapper textarea{
	resize: none;
	padding: 5px;
    margin: 5px;
	background-color: #42361d;
	border-width: 0px;
	color: #cccccc;
	font-family: "Open Sans",sans-serif;
	width: 100%;
	height: 93%;
}
.notes-wrapper{
	width: 100%;
	height: 93%;
	display: flex;
}
.notes-wrapper textarea:focus{
	outline: none;
}
.check-wrapper {
	margin: 5px;
}
.tooltip-base{
	display:flex;
	position:absolute!important;
	font-family:"Droid Sans",sans-serif;
	font-size:10px;
	color:#bbb
}
.tooltip
{
	display: none;
	margin-left: 100px;
}
.tooltip-base:hover .tooltip
{
	display: block;
	background-color: #23282b;
	position: absolute;
}
.select {
	border: 0px;
	border-bottom: 1px solid #8d6411;
	background-color: #42361d;
	color: #bbb;
	outline: none;
}

.title {
	font-weight: bold;
	display: block;
	font-size: 16px;
	padding-left: 5px;
}
.flex-table {
	width: 100%;
	display: flex;
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: left;
	align-items: left;
}
.list {
	display: block;
	padding: 5px;
}
.chat-line {
	width: 100%;
	display: grid;
	grid-template-columns: minmax(8em, 1fr) minmax(8em, 4fr) minmax(8em, 15fr);
	grid-column-gap: 1px;
	font-size: 11px;
	line-height: 1.1;
}
.time-date {
	color: #444444;
	display: inline-block;
	padding: 2px 5px;
	padding-right: 0px;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
}
.chat-name {
	display: inline-block;
	text-align: right;
	color: #999999;
	text-overflow: ellipsis;
	padding: 2px 5px;
	border-right: 1px solid #999999;
}
.chat-message {
	display: inline-block;
	text-align: left;
	color: #bbbbbb;
	word-break: break-word;
	padding: 2px 5px;
}
.fin-title {
	display: block;
	font-size: 12px;
	margin-bottom: 0px;
	padding: 6px 4px 2px;
	background-color: rgba(63, 162, 222, 0.15);
}
td.burn-green {
	background-color: #345034 !important;
	color: #9fbb9f;
}
tr:hover td.burn-green {
	background-color: #506c50 !important;
}
td.burn-yellow {
	background-color: #836e24 !important;
	color: #f6df94;
}
tr:hover td.burn-yellow {
	background-color: #9f8a40 !important;
}
td.burn-red {
	background-color: #5a3130 !important;
	color: #c59c9b;
}
tr:hover td.burn-red {
	background-color: #764d4c !important;
}
.inv-header {
	display: inline;
	padding: 2px 8px;
	color: #3fa2de;
}
.inv-body {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: stretch;
	margin-bottom: 23px;
	padding: 5px 8px;
}
.progress-bar {
	width: 30px;
	height: 9px;
	border: 1px solid #999;
	margin: 1px 2px;
}
.progress-bar::-webkit-progress-value {background: #f7a600;}

.grey-progress-bar::-webkit-progress-value {background: #d9534f;}
.good-progress-bar::-webkit-progress-value {background: #5cb85c;}
.warning-progress-bar::-webkit-progress-value {background: #ffc856;}
.danger-progress-bar::-webkit-progress-value {background: #d9534f;}

.xit-tile {
	background-color: #222222 !important;
	padding-top: 4px;
	display: flex;
	flex-flow: column;
}
.refresh-button {
	background-color: #f7a600;
	color: #eee;
	border-width: 0px;
	padding: 0px 8px;
	display: block;
	font-weight: bold;
	font-size: 11px;
	cursor: pointer;
	margin: 4px 8px;
}
.refresh-button:hover {
	color: #1e1e1e;
}
.notification {
	display: inline-block;
	min-width: 62px;
	max-width: 62px;
}
.fin-box {
	margin: 1px;
	min-width: 100px;
	width: calc(33% - 2px);
	max-width: 150px;
	padding: 4px;
	background-color: #23282b;
	display: inline-block;
}
.link {
	color: #3fa2de;
	cursor: pointer;
	display: block;
}
.link:hover {
	color: #f7a600 !important;
}
.chat-image {
	max-height: 300px;
	max-width: 90%;
}
.input-text{
    padding: 0px 5px;
    margin: 5px;
	background-color: #42361d;
	border-width: 0px;
	border-bottom: 1px solid #8d6411;
	color: #cccccc;
	
}
.input-text:focus{
	outline: none;
}
.hidden-element{
	display: none !important;
	visibility: false !important;
	max-height: 0 !important;
	padding: 0 !important;
	margin: 0 !important;
	font-size: 0px !important;
}
.button-upper-right{
	background-color: transparent;
	color: #bbb;
	fill: #bbb;
	cursor: pointer;
	display: block;
	font-size: 24px;
	margin-top: -8px;
}
.button-upper-right:hover{
	color: #000 !important;
	fill: #000;
	background-color: rgb(247, 166, 0);
}`;
/* harmony export (immutable) */ __webpack_exports__["d"] = PMMGStyle;

const EnhancedColors = `/* consumables (luxury) */
div[title="Stellar Pale Ale"],
div[data-tooltip-content="#tooltip_ALE"],
.tooltip_ALE,
div[title="Caffeinated Infusion"],
div[data-tooltip-content="#tooltip_COF"],
.tooltip_COF,
div[title="Einsteinium-Infused Gin"],
div[data-tooltip-content="#tooltip_GIN"],
.tooltip_GIN,
div[title="Kombucha"],
div[data-tooltip-content="#tooltip_KOM"],
.tooltip_KOM,
div[title="NeuroStimulants"],
div[data-tooltip-content="#tooltip_NST"],
.tooltip_NST,
div[title="Padded Work Overall"],
div[data-tooltip-content="#tooltip_PWO"],
.tooltip_PWO,
div[title="Repair Kit"],
div[data-tooltip-content="#tooltip_REP"],
.tooltip_REP,
div[title="Stem Cell Treatment"],
div[data-tooltip-content="#tooltip_SC"],
.tooltip_SC,
div[title="VitaGel"],
div[data-tooltip-content="#tooltip_VG"],
.tooltip_VG,
.tooltip_WIN,
div[title="Smart Zinfandel"],
div[data-tooltip-content="#tooltip_WIN"]
{
background: linear-gradient(135deg, #680000, #7b0012) !important;
color: #db9191 !important;
}
/* agricultural products */
.tooltip_FOD,
.tooltip_CAF,
.tooltip_HOP,
.tooltip_GRN,
.tooltip_MAI,
.tooltip_HCP,
.tooltip_MTP,
.tooltip_PIB,
.tooltip_PPA,
.tooltip_ALG,
.tooltip_BEA,
.tooltip_MUS,
.tooltip_RCO,
.tooltip_RSI,
.tooltip_HER,
.tooltip_VEG,
.tooltip_NUT,
.tooltip_VIT,
.tooltip_GRA,
div[title="Protein-Rich Algae"],
div[data-tooltip-content="#tooltip_ALG"],
div[title="Protein-Rich Beans"],
div[data-tooltip-content="#tooltip_BEA"],
div[title="Caffeinated Beans"],
div[data-tooltip-content="#tooltip_CAF"],
div[title="All-Purpose Fodder"],
div[data-tooltip-content="#tooltip_FOD"],
div[title="Wine-Quality Grapes"],
div[data-tooltip-content="#tooltip_GRA"],
div[title="High-Carb Grains"],
div[data-tooltip-content="#tooltip_GRN"],
div[title="Hydrocarbon Plants"],
div[data-tooltip-content="#tooltip_HCP"],
div[title="Spicy Herbs"],
div[data-tooltip-content="#tooltip_HER"],
div[title="Flowery Hops"],
div[data-tooltip-content="#tooltip_HOP"],
div[title="High-Carb Maize"],
div[data-tooltip-content="#tooltip_MAI"],
div[title="Meat Tissue Patties"],
div[data-tooltip-content="#tooltip_MTP"],
div[title="Protein-Rich Mushrooms"],
div[data-tooltip-content="#tooltip_MUS"],
div[title="Triglyceride Nuts"],
div[data-tooltip-content="#tooltip_NUT"],
div[title="Pineberries"],
div[data-tooltip-content="#tooltip_PIB"],
div[title="Protein Paste"],
div[data-tooltip-content="#tooltip_PPA"],
div[title="Raw Cotton Fiber"],
div[data-tooltip-content="#tooltip_RCO"],
div[title="Raw Silk Strains"],
div[data-tooltip-content="#tooltip_RSI"],
div[title="Triglyceride Fruits"],
div[data-tooltip-content="#tooltip_VEG"],
div[title="Vita Essence"],
div[data-tooltip-content="#tooltip_VIT"]
{
background: linear-gradient(135deg, #003800, #0a4708) !important;
color: #8bb37b !important;
}
/* plastics */
.tooltip_DCL,
.tooltip_DCM,
.tooltip_DCS,
.tooltip_PE,
.tooltip_PG,
.tooltip_PSL,
.tooltip_PSM,
.tooltip_PSS,
div[title="Durable Casing L"],
div[data-tooltip-content="#tooltip_DCL"],
div[title="Durable Casing M"],
div[data-tooltip-content="#tooltip_DCM"],
div[title="Durable Casing S"],
div[data-tooltip-content="#tooltip_DCS"],
div[title="Poly-Ethylene"],
div[data-tooltip-content="#tooltip_PE"],
div[title="Polymer Granulate"],
div[data-tooltip-content="#tooltip_PG"],
div[title="Polymer Sheet Type L"],
div[data-tooltip-content="#tooltip_PSL"],
div[title="Polymer Sheet Type M"],
div[data-tooltip-content="#tooltip_PSM"],
div[title="Polymer Sheet Type S"],
div[data-tooltip-content="#tooltip_PSS"]
{
background: linear-gradient(135deg, #791f62, #92387b) !important;
color: #f89ee1 !important;
}
/* consumables (basic) */
.tooltip_DW,
.tooltip_EXO,
.tooltip_FIM,
.tooltip_HMS,
.tooltip_HSS,
.tooltip_LC,
.tooltip_MEA,
.tooltip_MED,
.tooltip_OVE,
.tooltip_PDA,
.tooltip_PT,
.tooltip_RAT,
.tooltip_SCN,
.tooltip_WS,

div[title="Drinking Water"],
div[data-tooltip-content="#tooltip_DW"],
div[title="Exoskeleton Work Suit"],
div[data-tooltip-content="#tooltip_EXO"],
div[title="Flavoured Insta-Meal"],
div[data-tooltip-content="#tooltip_FIM"],
div[title="HazMat Work Suit"],
div[data-tooltip-content="#tooltip_HMS"],
div[title="Smart Space Suit"],
div[data-tooltip-content="#tooltip_HSS"],
div[title="AI-Assisted Lab Coat"],
div[data-tooltip-content="#tooltip_LC"],
div[title="Quality Meat Meal"],
div[data-tooltip-content="#tooltip_MEA"],
div[title="Basic Medical Kit"],
div[data-tooltip-content="#tooltip_MED"],
div[title="Basic Overalls"],
div[data-tooltip-content="#tooltip_OVE"],
div[title="Personal Data Assistant"],
div[data-tooltip-content="#tooltip_PDA"],
div[title="Power Tools"],
div[data-tooltip-content="#tooltip_PT"],
div[title="Basic Rations"],
div[data-tooltip-content="#tooltip_RAT"],
div[title="Multi-Purpose Scanner"],
div[data-tooltip-content="#tooltip_SCN"],
div[title="Scientific Work Station"],
div[data-tooltip-content="#tooltip_WS"]
{
background: linear-gradient(135deg, #a62c2a, #ba363c) !important;
color: #ff989e !important;
}
/* fuels */
.tooltip_SF,
.tooltip_FF,
div[title="FTL Fuel"],
div[data-tooltip-content="#tooltip_FF"],
div[title="STL Fuel"],
div[data-tooltip-content="#tooltip_SF"]
{
background: linear-gradient(135deg, #548d22, #6ba23c) !important;
color: #cbfaa3 !important;
}
/* liquids */
.tooltip_HEX,
.tooltip_LES,
.tooltip_BTS,
.tooltip_H2O,
div[title="Heliotrope Extract"],
div[data-tooltip-content="#tooltip_HEX"],
div[title="Liquid Einsteinium"],
div[data-tooltip-content="#tooltip_LES"],
div[title="Bacterial Tungsten Solution"],
div[data-tooltip-content="#tooltip_BTS"],
div[title="Water"],
div[data-tooltip-content="#tooltip_H2O"]
{
background: linear-gradient(135deg, #67a8da, #6098c3) !important;
color: #f1ffff !important;
}
div.GridItemView__container___xP2uJz8 {
	background-color: #222;
}
/* full item name centering */
span.GridItemView__name___h3yX9Lm {
  display: block;
  text-align: center;
  padding-top: 1px;
  width: 100%;
}`;
/* harmony export (immutable) */ __webpack_exports__["b"] = EnhancedColors;

const IconStyle = `
 /* PrUnIcon v0.90
* ===============
*
* Install Chrome addon: StyleBot 
* goto: apex.prosperousuniverse.com
* right-click anywhere, select: StyleBot -> Style Element
* Copy&Paste this file into the StyleBot window
*
* CSS script to give icons to all commodities and some other UI color and layout changes.
*/
 
/* controversial UI changes and colors */
/* (comment/delete if not desired)
/* ----------------------------------- */

 
/* item ticker color */
.ColoredIcon__label___OU1I4oP {
    color: #cccccc;
}
 
 
/* full item name centering */
.GridItemView__name___h3yX9Lm  {
  display: block;
  text-align: center;
  padding-top: 1px;
  width: 100%;
}
 
/* table color */
table tbody td:nth-child(odd)
{
  background-color: #21252e;
}
 
/* end UI changes -------------------- */
 
/* items in production view and market view */
div.MaterialInformation__recipeInputs___eLvfoop div.BuildingIcon__container___jF5GUsz div.BuildingIcon__tickerContainer___NZx3G8C
{
  height: 36px;
  width: 36px;
}
 
/* items in planet view */
div.ResourceTable__gridContainer___ymrzTcD div.MaterialIcon__container___q8gKIx8 div.ColoredIcon__container___djaR4r2:before
{
  height: 20px;
  width: 20px;
  font-size: 20px;
}
 
/*
GridItemView__container___xP2uJz8
GridItemView__image___yMoKOZV
MaterialIcon__container___q8gKIx8
ColoredIcon__container___djaR4r2
ColoredIcon__labelContainer___YVfgzOk
*/
 
/* default :before element to prepare for new icon*/
div.ColoredIcon__container___djaR4r2:before
{
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  content: "";
  
  /*while it is icon*/
  opacity: .3;
  font-size: 30px;
}
*/
 
/* colored overlay icon */
div.ColoredIcon__labelContainer___YVfgzOk:before
{
  position: absolute;
  content: ""; /* will become icon */
 
  opacity: 0.1;
  z-index: -1;
  font-size: 30px;
  color: rgba(100%, 0%, 0%, 0);
}
 
div[title="gold ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 gold;
}
 
div[title="iron ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 aqua;
}
 
div[title="aluminium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 grey;
}
 
div[title="silicon ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 white;
}
 
div[title="titanium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 blue;
}
 
div[title="lithium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 green;
}
 
div[title="copper ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 red;
}
 
div[title="ferro-titanium"i] div:before 
{
  content: "🟦";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="alpha-stabilized titanium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="ferrominium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="alpha-stabilized tungsten"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title^="Basic Thermal"i] div:before 
{
  content: "🔥";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title^="Advanced Thermal"i] div:before 
{
  content: "🔥";
  font-size: 25px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title*="Anti-Rad"i] div:before 
{
  content: "⚛";
  font-size: 25px;
  color: rgba(1,1,1,1);
  opacity: 0.4;
}
 
div[title^="Advanced Anti-Rad"i] div:before 
{
  font-size: 30px;
}
 
div[title^="Specialized Anti-Rad"i] div:before 
{
  font-size: 35px;
}
 
div[title*="High-Capacity C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 gold;
  opacity: .25;
}
 
div[title*="Shielded C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 blue;
  opacity: .01;
}
 
div[title*="Budget C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 chocolate;
  opacity: .2;
}
 
div[title*="raw "i] div:before 
{
  content: "🧶";
  font-size: 30px;
}
 
div[title*="raw cotton"i] div:before 
{
  text-shadow: 0 0 0 grey;
  opacity: .2;
}
 
div[title*="raw silk"i] div:before 
{
  text-shadow: 0 0 0 plum;
  opacity: .3;
}
 
div[title*=" fabric"i] div:before 
{
  content: "🧵";
  font-size: 30px;
}
 
div[title*="kevlar fabric"i] div:before 
{
  text-shadow: 0 0 0 green;
  opacity: .15;
}
 
 
div[title*="technokevlar fabric"i] div:before 
{
  text-shadow: 0 0 0 blueviolet;
  opacity: .2;
}
 
div[title*="nylon fabric"i] div:before 
{
  text-shadow: 0 0 0 black;
  opacity: .1;
}
 
div[title*="cotton fabric"i] div:before 
{
  text-shadow: 0 0 0 grey;
  opacity: .2;
}
 
div[title*="silken fabric"i] div:before 
{
  text-shadow: 0 0 0 plum;
  opacity: .3;
}
 
div[title*="ceramic fabric"i] div:before 
{
  text-shadow: 0 0 0 orangered;
  opacity: .15;
}
 
div[title*="ceramic-tungsten fabric"i] div:before 
{
  text-shadow: 0 0 0 brown;
  opacity: .3;
}
 
div[title="nutrient solution"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 green;
  opacity: .3;
}
 
div[title="nano-enhanced resin"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 blueviolet;
  opacity: .3;
  font-size: 32px;
}
 
div[title="flux"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 yellow;
  opacity: .15;
}
 
div[title="indigo colorant"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 indigo;
  opacity: .3;
}
 
div[title="Olfactory Substances"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 olive;
  opacity: .3;
}
 
div[title="DDT Plant Agent"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 red;
  opacity: .3;
}
 
div[title="Sedative Substance"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 orange;
  opacity: .3;
}
 
div[title="desaturation agent"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 white;
  opacity: .1;
}
 
div[title="breathable liquid"i] div:before 
{
  content: "💧";
  text-shadow: 0 0 0 aquamarine;
  opacity: .25;
}
 
div[title="thermofluid"i] div:before 
{
  content: "💧";
  text-shadow: 0 0 0 orange;
  opacity: .5;
}
 
div[title*="fertilizer"i] div:before 
{
  content: "⛰";
  text-shadow: 0 0 0 yellowgreen;
  opacity: .3;
}
 
div[title*="acid"i] div:before 
{
  content: "☣";
  text-shadow: 0 0 0 greenyellow;
  opacity: .1;
  font-size: 40px;
}
 
/*
 
div[title*="solar"i] div:before 
{
  content: "🌞";
  opacity: .1;
  font-size: 30px;
  text-shadow: 0 0 0 yellow;
  color: rgba(1,1,1,1);
}
 
div[title="large cargo bay kit"i] div:before 
{
  content: "⚖"; opacity: 0.6; font-size: 20px;
}
 
div[title="high-load cargo bay kit"i] div:before 
{
  content: "🔔";
}
 
div[title="high-volume cargo bay kit"i] div:before 
{
  content: "🎈";
}
 
div[title="gold ore"i] div:before 
{
  content: "🟨";
}
 
div[title="iron ore"i] div:before 
{
  content: "🟦";
}
 
div[title="aluminium ore"i] div:before 
{
  content: "⬜";
}
*/
 
/* non-category color special hacks*/
 
div[title="High-Capacity Connectors"],
div[title="Red Gold"]
{
  -background: linear-gradient(135deg, rgb(145 129 43), rgb(120 72 7))
}
 
div[title="Shielded Connectors"],
div[title="Blue Gold"]
{
  -background: linear-gradient(135deg, rgb(145 129 43), rgb(70 72 200))
}
 
div[title="Air Scrubber"]
{
  background: linear-gradient(135deg, rgb(30 96 58),  rgb(51, 26, 76));
}
 
/* dw and all consumables */
 
/* "normal" icons and colors */
/* ------------------------- */
 
/* RAT inputs */
div[title^="High-Carb"],
div[title^="Protein-Rich"],
div[title^="Triglyceride"]
{
  background: linear-gradient(135deg, rgb(145 129 43), rgb(70 72 7))
}
 
div[content="Io-dine"]
{
  background: linear-gradient(135deg, rgb(153 87 1), rgb(86 40 0))
}
 
/* other Argriculture */
div[title="Hydrocarbon Plants"],
div[title="Spicy Herbs"],
div[title="All-Purpose Fodder"],
div[title="Flowery Hops"],
div[title="Caffeinated Beans"],
div[title="Raw Cotton Fiber"],
div[title="Wine-Quality Grapes"],
div[title="Meat Tissue Patties"],
div[title="Pineberries"],
div[title="Raw Silk Strains"],
div[title="Vita Essence"],
div[title="Protein Paste"] {
  background: linear-gradient(135deg, rgb(153 87 1), rgb(86 40 0))
}
 
div[title^="Drink"],
div[title^="Basic Ra"] {
  background: linear-gradient(135deg, rgb(71 126 174), rgb(46 66 149))
}
 
/* liquids */
div[title*="Heliotrope"],
div[title*="Liquid Eins"],
div[title*="Bacterial Tun"],
div[title^="Water"] {
  background: linear-gradient(135deg, rgb(122 80 55), rgb(18 74 124))
}
 
/* chemicals bg colors */
div[title*="Substance"], 
div[title*="Chemical"], 
div[title="Liquid Crystals"], 
div[title*="Breathable Liquid"], 
div[title*="Agent"], 
div[title*="Flux"], 
div[title*="Resin"], 
div[title*="Colorant"],
div[title*="Acid"], 
div[title*=" Bacteria"], 
div[title*="Soil"],
div[title*="Stabilizer"],
div[title*="Fertilizer"],
div[title*="ThermoFluid"],
div[title*="Enriched"],
div[title*="Nutrient"] {
  background: linear-gradient(135deg, rgb(183, 46, 91), rgb(114 37 62))
}
 
/* prefabs */
div[title^="Basic Str"],
div[title^="Basic Deck"],
div[title^="Basic Bulk"],
div[title^="Basic Trans"] {
  background: linear-gradient(135deg, rgb(51 54 66 ), rgb(15, 30, 98))
}
div[title^="Lightweight"] {
  background: linear-gradient(135deg, rgb(85 94 35), rgb(15, 30, 98))
}
div[title^="Hardened"], 
div[title^="Reinforced"] {
  background: linear-gradient(135deg, rgb(78 44 27), rgb(15, 30, 98))
}
div[title^="Advanced Deck"],
div[title^="Advanced Transp"],
div[title^="Advanced Str"],
div[title^="Advanced Bulk"] {
  background: linear-gradient(135deg, rgb(71 35 94), rgb(15, 30, 98))
}
 
/* construction bg colors */
div[title="InsuFoam"],
div[title="Epoxy Resin"],
div[title="MegaTube Coating"],
div[title="Nano-Carbon Sheeting"],
div[title="Nano Fiber"],
div[title="Nano-Coated Glass"],
div[title="Reinforced Glass"],
div[title="Poly-Sulfite Sealant"],
div[title="Glass"],
div[title="Mineral Construction Granulate"] {
  background: linear-gradient(135deg, rgb(72 125 221), rgb(0 64 179))
}
 
/* construction parts */
div[title="Aerostat Foundation"],
div[title="Air Scrubber"],
div[title="Decorative Elements"],
div[title="Floating Tank"],
div[title="Flow Control Device"],
div[title="Fluid Piping"],
div[title="Cylindrical Gas Container"],
div[title="Gas Vent"],
div[title="Magnetic Ground Cover"],
div[title="Metal-Halide Lighting System"],
div[title="Neon Lighting System"],
div[title="Pressure Shielding"],
div[title="Radiation Shielding"],
div[title="Stabilized Technetium"],
div[title="Thermal Shielding"],
div[title="Truss"] {
  background: linear-gradient(135deg, rgb(66, 102, 132), rgb(41, 77, 107))
}
 
div[title="STL Fuel"],
div[title="FTL Fuel"] {
  background: linear-gradient(135deg, rgb(30, 123, 30), rgb(32 90 32))
}
 
 
/* electronic systems bg color */
div[title="Audio Distribution System"],
div[title="Automated Cooling System"],
div[title="Climate Controller"],
div[title="Communication System"],
div[title="FTL Field Controller"],
div[title="Life Support System"],
div[title="Logistics System"],
div[title="Stability Support System"],
div[title="Targeting Computer"],
div[title="Cryogenic Unit"]
{
  background: linear-gradient(135deg, rgb(76, 51, 141),  rgb(51, 26, 76));
}
 
/* life related electronics systems bg color*/
div[title="Water Reclaimer"],
div[title="Life Support System"]
{
  background: linear-gradient(135deg, rgb(30 96 58),  rgb(51, 26, 76));
}
 
div[title*="ium"]:before, 
div[title*="site"]:before, 
div[title*="mineral"i]:before {
  content: "⛰"; opacity: 0.4
}
div[title*="controller"i]:before {
  content: "🎛"; opacity: 0.6
}
div[title*="filter"i]:before,
div[title*="device"i]:before,
div[title*=" MK"i]:before {
  content: "📻";
}
/* 🛹🚿⛲ */
div[title*="flow control device"i]:before {
  content: "🚿";
}
div[title*="glass"i]:before {
  content: "🔲";
  font-size: 25px;
}
div[title*="headphone"i]:before {
  content: "🎧";
}
div[title*="holographic glasses"i]:before {
  content: "👓";
}
div[title*="diode"i]:before {
  content: "▶";
}
div[data-tooltip-content*="SAR"i]:before,
div[title*="scanner"i]:before,
div[title*="sensor"i]:before {
  content: "🔭";
}
div[title*="Foundation"]:before {
  content: "🧇";
}
/* 🧮🎫🎟🎞 */
div[title*="memory"i]:before,
div[title*="process"i]:before,
div[title*="transistor"i]:before,
div[title*="circuit"i]:before {
  content: "🎟";
}
div[title*="tensor"i]:before {
  content: "🧮";
}
div[title="memory bank"i]:before {
  content: "🎞";
}
div[title*="circuit"i]:before {
  content: "🎫";
}
/*🧧🎟💿📼🎞*/
div[title="Non-Volatile Memory"i]:before
{
  content: "📀";
}
div[title*="system"i]:before,
div[title*="computer"i]:before,
div[title*="mainframe"i]:before {
  content: "🖥"; 
  opacity: 0.6
}
/* 🎛🎚💾💽💿📀 */
div[title*="Navigation"]:before,
div[title*="Artificial"]:before,
div[title*="Data"]:before,
div[title*="Network"]:before,
div[title*="Database"]:before,
div[title*="Framework"]:before,
div[title*="Management"]:before,
div[title*="Operating"]:before,
div[title*="Interface"]:before,
div[title*="Algorithm"]:before,
div[title*="Manager"]:before {
  content: "💾";
  opacity: 0.3; /* system override*/
}
div[title*="motherboard"i]:before,
div[title*="wafer"i]:before {
  content: "🎫";
}
div[title*="broadcasting"i]:before,
div[title*="antenna"i]:before,
div[title*="emitter"i]:before {
  content: "📡";
}
div[title*="library"i]:before {
  content: "📖";
}
div[title*="Workstation"]:before,
div[title*="Display"]:before {
  content: "💻";
}
div[title*="Light"]:before {
  content: "💡";
}
div[title*="Rock"]:before {
  content: "🥯";
}
div[title*="Liquid"]:before, 
div[title*="Fluid"]:before {
  content: "💧";
}
div[title*="Air"]:before, 
div[title*="Gas"]:before,
 div[title*="Aero"]:before {
  content: "☁";
}
div[title*="Audio"]:before {
  content: "🔊";
  opacity: 0.3; /* system override */
}
div[title*="Power"]:before, 
div[title*="Capacitor"]:before {
  content: "🔋";
}
div[title*="Power Cell"]:before
{
  font-size: 20px;
}
/* 🔨⛏⚒🛠🔧🔩⚙🗜🧰 */
div[title*="Fastener Kit"]:before {
  content: "🔧";
  font-size: 35px;
}
div[title*="Repair Kit"]:before {
  content: "🧰";
  font-size: 35px;
}
div[title*="Tank"]:before {
  content: "🛢";
  font-size: 35px;
}
div[title*="FTL Fuel Tank"i]:before {
  content: "🧳";
  font-size: 35px;
}
div[title*="Protection"]:before,
div[title*="Plate"]:before,
div[title*="Shield"]:before {
  content: "🛡";
  font-size: 40px;
}
div[title*="Protection Material"]:before {
  content: "🧱";
  font-size: 30px;
}
div[title*="Connectors"]:before {
  content: "🔌";
  font-size: 30px;
  opacity: 0.4
}
div[title*="Seats"]:before {
  content: "🪑";
}
div[title*="Substance"]:before, 
div[title*="Chemical"]:before, 
div[title*="Agent"]:before, 
div[title*="Flux"]:before, 
div[title*="Resin"]:before, 
div[title*="Colorant"]:before {
  content: "🧪";
}
div[title*="Acid"]:before {
  content: "☣";
  font-size: 40px;
}
div[title*="Bacteria"]:before {
  content: "🧫";
}
div[title*="Cryo"]:before {
  content: "❄";
  font-size: 40px;
}
div[title*="Soil"]:before {
  content: "🥔";
}
/* 🧰🔪🩺 */
div[title*="Surgical"i]:before {
  content: "🩺";
  font-size: 30px;
}
/* 🎞🛏🛌 */
div[title*="Medical stretcher"i]:before {
  content: "🎞";
  font-size: 35px;
}
/* 🧰🔪🩺💊 */
div[title*="Medical kit"i]:before {
  content: "🩺";
}
div[title*="Magnet"]:before {
  content: "🧲";
}
/* 🗿🖼 */
div[title*="Deco"]:before {
  content: "🖼";
}
div[title*="Solar"]:before {
  content: "⚡";
}
div[title*="Solar Cell"]:before {
  font-size: 20px;
}
 
/* alloys ♒ 🟪*/
div[title*="-Titanium"]::before,
div[title*=" Titanium"]::before
{
  content: "🟪";
  font-size: 25px;
}
 
div[title="Ferrominium"]::before
{
  content: "🟦";
  font-size: 25px;
}
 
 
/* ---- Medical ------ */
div[title="Auto-Doc"],
div[title="Bandages"],
div[title="Medical Stretcher"],
div[title="Painkillers"],
div[title="Surgical Equipment"],
div[title="Test Tubes"]
{
  background: linear-gradient(135deg, rgb(64 133 64), rgb(48 86 48))
}
 
div[title="Auto-Doc"]:before {
  content: "👨‍⚕️";
}
div[title="Bandages"]:before {
  content: "🧻";
}
div[title="Painkillers"]:before {
  content: "💊";
}
div[title="Surgical Equipment"]:before {
  content: "🩺";
}
div[title*="Tube"]:before {
  content: "🧪";
}
/* 🛌🛏⚕ */
div[title*="Crew Quarters"]:before,
div[title*="Trauma Care"]:before {
  content: "🛏";
  font-size: 40px;
}
/* ---------- */
 
div[title*="Iodine"]:before {
  content: "🩸";
}
div[title*="Sodium"]:before {
  content: "🧂";
}
div[title*="Carbon"]:before {
  content: "🎩";
}
/* 🧂💿🍙🍥⛰🏔 */
div[title="Chlorine"]:before {
  content: "🍥";
}
div[title="Sulfur"]:before {
  content: "🟡";
}
div[title="Tantalum"]:before {
  content: "🔘";
}
div[title="Calcium"]:before {
  content: "⛰";
}
div[title="Beryllium"]:before {
  content: "⛰";
}
div[title="Magnesium"]:before {
  content: "⛰";
}
 
div[title="Gold"]:before {
  content: "🟨";
  font-size: 25px;
}
 
/* 〰🧈🧊🟤🟦 */
 
div[title="Aluminium"]:before {
  content: "⬜";
  font-size: 25px; opacity: 0.2
}
 
div[title="Steel"]:before {
  content: "🧊";
  font-size: 25px; opacity: 0.2
}
 
div[title="Titanium"]:before {
  content: "🟪";
  font-size: 25px; opacity: 0.2
}
 
div[title~="Tungsten"]:before
{
  content: "🟫";
  font-size: 25px; opacity: 0.2
}
 
div[title="Silicon"]:before{
  content: "〰"; opacity: 0.2
}
 
div[title="Copper"]:before {
  content: "🟧";
  font-size: 25px; opacity: 0.2
}
/* 🟥 */
div[title="Iron"]:before {
  content: "🟦";
  font-size: 25px; opacity: 0.2
}
 
/* alloys */
 
div[title="Red Gold"]:before {
  content: "🔶";
  font-size: 25px;
}
 
div[title="Blue Gold"]:before {
  content: "🔷";
  font-size: 25px;
}
 
div[title="Bronze"]:before {
  content: "🔺";
  font-size: 25px;
}
 
div[title="Borosilicate"]:before {
  content: "〰";
}
 
/* ---- */
 
/* 🖊❗➖💈 🌠🥖🍡🧨 */
div[title*="fuel rod"i]:before {
  content: "🧨";
}
div[title="basic fuel rod"i]:before {
  content: "➖";
}
div[title*=" reactor"i]:before,
div[title*=" generator"i]:before {
  content: "🎆";
}
div[title*="fission reactor"i]:before {
  font-size: 20px;
}
div[title*="radioisotope generator"i]:before {
  font-size: 20px;
}
 
/* ---- */
 
div[title="Limestone"]:before {
  content: "🥯";
}
 
div[title*="Drone"]:before {
  content: "✈";
}
 
div[title*="Ore"]:before {
  content: "🥔";
}
 
div[title*="Crystals"]:before {
  content: "💎";
}
 
/* ---------- */
 
div[title$="Grains"]:before {
  content: "🌾";
}
 
div[title$="Maize"]:before {
  content: "🌽";
}
 
div[title^="Drink"]:before {
  content: "🧃";
}
 
div[title^="Protein-Rich Beans"]:before {
  content: "🥒";
}
 
div[title^="Basic Ra"]:before {
  content: "🥫";
}
 
div[title$="Nuts"]:before {
  content: "🥜";
}
 
div[title$="Fruits"]:before {
  content: "🍅";
}
 
div[title$="Plants"]:before {
  content: "🌲";
}
 
div[title^="Caffeinated Beans"]:before {
  content: "🌿";
}
 
div[title$="Algae"]:before {
  content: "🍃";
}
 
div[title$="Grapes"]:before {
  content: "🍇";
}
 
div[title$="Herbs"]:before {
  content: "🌶";
}
 
div[title$="Fodder"]:before {
  content: "💊";
}
 
div[title$="Hops"]:before {
  content: "🌾";
}
 
div[title$="Cotton Fiber"]:before {
  content: "🧶";
}
 
div[title$="Patties"]:before {
  content: "🧫";
}
 
div[title$="Mushrooms"]:before {
  content: "🍄";
}
 
div[title$="Pineberries"]:before {
  content: "🍓";
}
 
div[title$="Paste"]:before {
  content: "🥣";
}
 
div[title$="Solution"]:before {
  content: "🧪";
}
 
div[title^="Vita Essence"]:before {
  content: "🍶";
}
 
/* liquids */
div[title^="Water"]:before {
  content: "💧";
}
div[title*="Heliotrope"]:before {
  content: "🥃";
}
div[title*="Liquid Eins"]:before {
  content: "🥛";
}
 
/* 🎨🏀🏐⚾ */
div[title="Polymer Granulate"]:before {
  content: "🏐";
}
 
div[title$="Poly-Ethylene"]:before {
  content: "⚾";
}
 
div[title*="Sheet Type"]:before {
  content: "🧻";
}
 
div[title*="Foam"]:before,
div[title*="Seal"]:before {
  content: "🌫";
}
div[title*="Fiber"]:before,
div[title*="Fabric"]:before {
  content: "🧵";
}
div[title="Raw Silk Strains"]:before,
div[title="Raw Cotton Fiber"]:before {
  content: "🧶";
}
 
div[title$="Supplies"]:before {
  content: "📠";
}
div[title$="Uniform"]:before {
  content: "👖";
}
div[title$="Toolset"]:before {
  content: "🛠"; opacity: 0.4
}
 
div[title^="FTL"]:before {
  content: "☀";
  font-size: 40px; opacity: 0.5
}
 
div[title^="STL"]:before {
  content: "🛢";
  font-size: 40px; opacity: 0.5
}
 
div[title$="Construction Granulate"]:before {
  content: "🧱";
}
 
div[title*="Casing"]:before {
  content: "🧊";
}
 
div[title$="Deck Elements"]:before {
  content: "🎞";
  font-size: 40px;
}
div[title$="Structural Elements"]:before {
  content: "⛓";
}
/* 🛎 */
div[title$="Bulkhead"]:before {
  content: "🛸";
}
/* 🏗🧭🌫☀🌀 */
div[title$="Aperture"]:before {
  content: "🏗";
}
div[title="Truss"]:before {
  content: "🗼";
}
 
/* ----- gasses------ */
/* 💨🕳〰🌊🌫💥🛢🧳🧴☄ */
 
div[title="Ammonia"]:before {
  content: "🩸";
}
div[title="Argon"]:before {
  content: "☁";
}
div[title="Fluorine"]:before {
  content: "☁";
}
div[title="Neon"]:before {
  content: "☁";
}
div[title="Nitrogen"]:before {
  content: "💧";
}
div[title="Oxygen"]:before {
  content: "💨";
}
div[title*="Helium"]:before {
  content: "🌌";
}
div[title^="Hydrogen"]:before {
  content: "💫";
}
div[title="Helium-3 Isotope"]:before {
  content: "💦";
}
 
div[title="Caffeinated Infusion"]:before {
  content: "☕"; opacity: 0.2
}
div[title="Basic Overalls"]:before {
  content: "🧥"; opacity: 0.2
}
div[title$="Work Overall"]:before {
  content: "🦺"; opacity: 0.2
}
div[title="Basic Overalls"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(57 73 147)) }
div[title="Caffeinated Infusion"], 
div[title$="Work Overall"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(105 30 145)) }
 
div[title="Kombucha"]:before {
  content: "🍯"; opacity: 0.2
}
div[title^="Exos"]:before {
  content: "👷‍♀️"; opacity: 0.2
}
div[title^="Power Tools"]:before {
  content: "🔌"; opacity: 0.2
}
div[title^="Exos"], 
div[title="Power Tools"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(57 73 147)) }
div[title="Kombucha"],
div[title="Repair Kit"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(105 30 145)) }
 
div[title$="Ale"]:before {
  content: "🍺"; opacity: 0.2
}
div[title="Stem Cell Treatment"]:before {
  content: "💉"; opacity: 0.2
}
div[title="HazMat Work Suit"]:before {
  content: "👩‍🚒"; opacity: 0.2
}
div[title="Multi-Purpose Scanner"]:before {
  content: "🔭"; opacity: 0.2
}
div[title="Basic Medical Kit"], 
div[title="HazMat Work Suit"], 
div[title="Multi-Purpose Scanner"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(57 73 147)) 
}
div[title$="Ale"], 
div[title="Stem Cell Treatment"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(105 30 145)) 
}
 
div[title$="Gin"]:before {
  content: "🥃"; opacity: 0.2
}
div[title$="Meal"]:before {
  content: "🥡"; opacity: 0.2
}
div[title="VitaGel"]:before {
  content: "🧪"; opacity: 0.2
}
div[title="Smart Space Suit"]:before {
  content: "👨‍🚀"; opacity: 0.2
}
div[title*="personal"i]:before {
  content: "📱"; opacity: 0.2
}
div[title="Flavoured Insta-Meal"], 
div[title="Personal Data Assistant"], 
div[title="Smart Space Suit"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(57 73 147)) }
div[title$="Gin"], 
div[title="VitaGel"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(105 30 145)) }
 
 
div[title="Smart Zinfandel"]:before {
  content: "🍷"; opacity: 0.2
}
div[title$="Meat Meal"]:before {
  content: "🍱"; opacity: 0.2
}
div[title="NeuroStimulants"]:before {
  content: "💊"; opacity: 0.2
}
div[title="AI-Assisted Lab Coat"]:before {
  content: "🥼"; opacity: 0.2
}
div[title="Scientific Work Station"]:before {
  content: "🔬"; opacity: 0.2
}
div[title$="Meat Meal"], 
div[title="AI-Assisted Lab Coat"], 
div[title="Scientific Work Station"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(57 73 147)) }
div[title="Smart Zinfandel"], 
div[title="NeuroStimulants"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(105 30 145)) }
 
/* 🕹☎📞 */
div[title*="command bridge"i]:before {
  content: "☎"; opacity: 0.4
}
 
/* ⛰☢⚙🚰🌡 */
div[title*="engine"i]:before {
  content: "🚀"; opacity: 0.4
}
 
div[title*="nozzle"i]:before {
  content: "⛰"; opacity: 0.4
}
 
/* 🧨🌟🧳🛎 */
div[title*="combustion chamber"i]:before {
  content: "🧳"; opacity: 0.4
}
 
div[title*="pump"i]:before,
div[title*="pipe"i]:before,
div[title*="piping"i]:before
{
  content: "🚰"; opacity: 0.4
}
 
div[title*="vent"i]:before {
  content: "♨";
  font-size: 40px; opacity: 0.4
}
 
/* 🗼🧇🔗⛓🛡📎🖇 */ 
div[title*="structural space"i]:before {
  content: "⛓"; opacity: 0.4
}
 
/* 🧊📦 */ 
div[title*="cargo bay"i]:before {
  content: "📦"; opacity: 0.4
}
 
div[title*="habitat"i]:before {
  content: "🏠"; opacity: 0.4
}
 
div[title*="surgery unit"i]:before {
  content: "⚕"; opacity: 0.4
}
 
/*🗄🎯🎡*/
div[title*="entertainment unit"i]:before {
  content: "🎡"; opacity: 0.4
}
 
/* 🎨 */
div[title*="workshop unit"i]:before {
  content: "🎨"; opacity: 0.4
}
 
/* sizes */
 
div[title*="small"i]:before,
div[title*="tiny"i]:before,
div[title$=" s"i]:before 
{
  font-size: 20px; opacity: 0.4
}
 
div[title*="medium"i]:before,
div[title$=" m"i]:before 
{
  font-size: 25px; opacity: 0.4
}
 
div[title*="transistor"i]:before 
{
  font-size: 25px; opacity: 0.4
}
 
 
/* buildings - kill stray icons */
div.BuildingIcon__container___jF5GUsz:before
{
  content: "";
}
    
    /* items in market view */
table.BrokerList__table___ylgeiyg >
tbody >
tr >
td >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before 
{
  font-size: 24px;
}

/* items in building view */
div.BuildingInformation__recipe___uzanxXw >
div >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 26px;
}

/* items in recipe view */
div.MaterialInformation__recipeInputs___eLvfoop >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 26px;
}

/* items in planet view */
div.ResourceTable__gridContainer___ymrzTcD >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 18px;
}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = IconStyle;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CurrencySymbols = {
    "CIS": "₡",
    "AIC": "₳",
    "NCC": "₦",
    "ICA": "ǂ",
    "ECD": "€",
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CurrencySymbols;

const FactionHeaders = {
    "Castillo-Ito": "CI",
    "Insitor": "IC",
    "Antares": "AI",
    "NEO Charter": "NC"
};
/* harmony export (immutable) */ __webpack_exports__["b"] = FactionHeaders;

const RatingColors = {
    "P": "#1b6b9c",
    "U": "#8b211e",
    "F": "#e26c37",
    "E": "#e7782b",
    "D": "#e87d28",
    "C": "#ed891c",
    "B": "#f19510",
    "A": "#f6a204"
};
/* unused harmony export RatingColors */

const FriendlyNames = {
    "LocalMarketAds": "LM Unit Prices",
    "OrderETAs": "Order ETAs",
    "FlightETAs": "Flight Planning ETAs",
    "ShippingAds": "LM Shipping Rates",
    "PostLM": "LM Posting Unit Price",
    "ContractDrafts": "CONTD Unit Prices",
    "QueueLoad": "Queue Percent Display",
    "ConsumableTimers": "Workforce Consumable Burn",
    "FleetETAs": "Fleet ETAs",
    "Notifications": "Notifications",
    "ScreenUnpack": "Screen Unpack",
    "ImageCreator": "Chat Image Creator",
    "InventoryOrganizer": "Inventory Sorting",
    "CommandCorrecter": "Command Correcter",
    "CalculatorButton": "Calculator Button",
    "Sidebar": "Sidebar",
    "HeaderMinimizer": "Minimize Headers (Master)",
    "PendingContracts": "Pending Contracts",
    "CompactUI": "Compact UI (Master)"
};
/* harmony export (immutable) */ __webpack_exports__["c"] = FriendlyNames;

const SortingTriangleHTML = `
<div title=""><svg aria-hidden="true" width="10" height="10" role="img" version="1.1" fill="currentcolor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="vertical-align: middle;"><g><path d="M.88681 1.097752l12.13774 21.02318L25.422964 1.105446z"></path></g></svg></div>`;
/* harmony export (immutable) */ __webpack_exports__["h"] = SortingTriangleHTML;

const PlanetCommands = ["ADM", "BSC", "COGC", "COGCPEX", "COGCU", "FLTP", "LR", "LMP", "LM", "PLI", "POPI", "POPR", "PPS", "SHY", "WAR"];
/* harmony export (immutable) */ __webpack_exports__["f"] = PlanetCommands;

const SystemNames = {
    "ARCLIGHT": "AM-783",
    "FORGE-KEEP": "FK-371",
    "MOUNT OLYMPUS": "HM-049",
    "GATEWAY": "HM-223",
    "NEO EDEN": "JS-299",
    "EBISU": "JS-952",
    "BASTABLON": "KW-020",
    "DOLZENA": "LG-418",
    "TRINITY": "OF-259",
    "MORIA": "OT-580",
    "OUTER HEAVEN": "PG-899",
    "AURUM": "QJ-650",
    "ACETARES": "QJ-684",
    "HUBUR": "TD-203",
    "HOTEI": "UV-135",
    "BENTEN": "UV-351",
    "DAIKOKU": "UV-796",
    "HORTUS": "VH-331",
    "MIDWAY": "WB-675",
    "ANTARES III": "ZV-194",
    "ANTARES I": "ZV-307",
    "ANTARES II": "ZV-759"
};
/* harmony export (immutable) */ __webpack_exports__["i"] = SystemNames;

const PlanetNames = {
    "LEMURIA": "AJ-768a",
    "GALLUS": "AM-783b",
    "EMENTIOR": "AM-783c",
    "TYPHON": "AU-522b",
    "NOVA HONSHU": "BS-788c",
    "TACOTOPIA": "CB-045b",
    "PYRGOS": "CH-771a",
    "TALOSIA": "DC-823b",
    "ORM": "DW-456g",
    "MANIFOLD": "EL-179b",
    "NOVA UNALASKA": "EZ-476b",
    "TOKTU": "FK-037f",
    "LA FORGE": "FK-371b",
    "BOUCHER": "FK-794b",
    "VAULT": "GC-645b",
    "CHU": "GY-110c",
    "POSEIDON": "HM-049b",
    "APOTHECARY": "IA-603b",
    "ELECTRONICA": "IY-028c",
    "NEMESIS": "JS-299a",
    "GIBSON": "JS-952c",
    "AUSTRALIA": "KI-446a",
    "DEMETER": "KI-446b",
    "HERMES": "KI-448b",
    "ROCK": "KQ-966b",
    "MILLIWAYS": "KW-020c",
    "GIEDI PRIME": "KW-358b",
    "ETHERWIND": "KW-688c",
    "KINZA": "LG-418b",
    "PLANET MC PLANETFACE": "LG-913e",
    "ARATORA": "LS-231b",
    "GRIFFONSTONE": "LS-300c",
    "JURA": "OF-259d",
    "BERTHIER": "OF-375b",
    "ADALINA": "OF-375c",
    "DANAKIL": "OT-442b",
    "IIRON": "OT-580a",
    "MONTEM": "OT-580b",
    "VALLIS": "OT-580c",
    "PALLADA": "OT-580d",
    "PRISM": "OT-889a",
    "JEETIYU": "OT-889b",
    "SALADIN": "PG-899b",
    "NASCENT": "QJ-149c",
    "ELON": "QJ-650c",
    "LOM PALANKA": "QJ-684a",
    "ACELAND": "QJ-684b",
    "CIRCA": "QQ-001a",
    "CIRCE": "QQ-001b",
    "CELEBDIL": "QQ-645b",
    "MALAHAT": "RC-040b",
    "IRONFORGE": "RC-040c",
    "ICE STATION ALPHA": "SE-110c",
    "SHEOL": "TD-203b",
    "RHAZES": "TD-228b",
    "ASBESTOS LEAD ASBESTOS": "UV-072c",
    "KATOA": "UV-351a",
    "YANNICK": "UV-351b",
    "UMBRA": "UV-351c",
    "BIOGENESIS": "UV-351d",
    "PROXION": "UV-796b",
    "PHANTASM": "VH-043a",
    "PROMITOR": "VH-331a",
    "HELION PRIME": "VH-331d",
    "ODYSSEUS": "VH-331f",
    "AVALON": "VH-331g",
    "HYDRON": "VH-331i",
    "GASWORLD": "WB-675i",
    "MIMAR": "WC-702b",
    "MAGUS": "XD-354b",
    "UPONOR": "XH-329a",
    "LIBERTAS": "XH-594a",
    "KIRUNA": "XH-594b",
    "CORTEZ": "XH-594c",
    "KUB": "YI-059f",
    "HARPINA": "YI-209h",
    "ARCADIA": "YI-683c",
    "VERDANT": "YI-715b",
    "NORWICK": "YK-649b",
    "NIKE": "ZV-194a",
    "HEPHAESTUS": "ZV-307c",
    "PHOBOS": "ZV-307d",
    "VULCAN": "ZV-759b",
    "DEIMOS": "ZV-759c",
    "HARMONIA": "ZV-896b"
};
/* harmony export (immutable) */ __webpack_exports__["g"] = PlanetNames;

const MaterialNames = {
    "AAR": ["Antenna Array", "electronic devices"],
    "ABH": ["Advanced Bulkhead", "construction prefabs"],
    "ACS": ["Automated Cooling System", "electronic systems"],
    "ADE": ["Advanced Deck Elements", "construction prefabs"],
    "ADR": ["Auto-Doc", "medical equipment"],
    "ADS": ["Audio Distribution System", "electronic systems"],
    "AEF": ["Aerostat Foundation", "construction parts"],
    "AEN": ["Advanced STL Engine", "ship engines"],
    "AFP": ["Advanced Fuel Pump", "ship engines"],
    "AFR": ["Advanced Fuel Rod", "ship engines"],
    "AGS": ["Advanced High-G Seats", "ship parts"],
    "AHP": ["Advanced Hull Plate", "ship parts"],
    "AIR": ["Air Scrubber", "construction parts"],
    "AL": ["Aluminium", "metals"],
    "ALE": ["Stellar Pale Ale", "consumables (luxury)"],
    "ALG": ["Protein-Rich Algae", "agricultural products"],
    "ALO": ["Aluminium Ore", "ores"],
    "AMM": ["Ammonia", "gases"],
    "ANZ": ["Advanced Nozzle", "ship engines"],
    "APT": ["Advanced Thermal Protection Tile", "ship shields"],
    "AR": ["Argon", "gases"],
    "ARP": ["Advanced Anti-rad Plate", "ship shields"],
    "ASE": ["Advanced Structural Elements", "construction prefabs"],
    "AST": ["Alpha-Stabilized Titanium", "alloys"],
    "ATA": ["Advanced Transparent Aperture", "construction prefabs"],
    "ATP": ["Advanced Thermal Protection Material", "ship parts"],
    "AU": ["Gold", "metals"],
    "AUO": ["Gold Ore", "ores"],
    "AWF": ["Active Water Filter", "electronic devices"],
    "AWH": ["Advanced Whipple Shielding", "ship shields"],
    "BAC": ["Helpful Bacteria", "chemicals"],
    "BAI": ["Basic AI Framework", "software components"],
    "BBH": ["Basic Bulkhead", "construction prefabs"],
    "BCO": ["Budget Connectors", "electronic pieces"],
    "BDE": ["Basic Deck Elements", "construction prefabs"],
    "BE": ["Beryllium", "elements"],
    "BEA": ["Protein-Rich Beans", "agricultural products"],
    "BER": ["Beryl Crystals", "minerals"],
    "BFP": ["Basic Fuel Pump", "ship engines"],
    "BFR": ["Basic Fuel Rod", "ship engines"],
    "BGC": ["Shielded Connectors", "electronic pieces"],
    "BGO": ["Blue Gold", "alloys"],
    "BGS": ["Basic High-G Seats", "ship parts"],
    "BHP": ["Basic Hull Plate", "ship parts"],
    "BID": ["Full-Body Interaction Device", "electronic devices"],
    "BL": ["Breathable Liquid", "chemicals"],
    "BLE": ["Desaturation Agent", "chemicals"],
    "BMF": ["Basic Mainframe", "electronic devices"],
    "BND": ["Bandages", "medical equipment"],
    "BOR": ["Boron Crystals", "minerals"],
    "BOS": ["Borosilicate", "alloys"],
    "BPT": ["Basic Thermal Protection Tile", "ship shields"],
    "BR1": ["Command Bridge MK1", "unit prefabs"],
    "BR2": ["Command Bridge MK2", "unit prefabs"],
    "BRM": ["Bioreactive Minerals", "minerals"],
    "BRO": ["Bronze", "alloys"],
    "BRP": ["Basic Anti-rad Plate", "ship shields"],
    "BRS": ["Short-distance Command Bridge", "unit prefabs"],
    "BSC": ["Body Scanner", "electronic devices"],
    "BSE": ["Basic Structural Elements", "construction prefabs"],
    "BTA": ["Basic Transparent Aperture", "construction prefabs"],
    "BTS": ["Bacterial Tungsten Solution", "liquids"],
    "BWH": ["Basic Whipple Shielding", "ship shields"],
    "BWS": ["Basic Workstation", "electronic devices"],
    "C": ["Carbon", "elements"],
    "CA": ["Calcium", "elements"],
    "CAF": ["Caffeinated Beans", "agricultural products"],
    "CAP": ["Electric Field Capacitor", "electronic pieces"],
    "CBL": ["Large Capacitor Bank", "energy systems"],
    "CBM": ["Medium Capacitor Bank", "energy systems"],
    "CBS": ["Small Capacitor Bank", "energy systems"],
    "CC": ["Climate Controller", "electronic systems"],
    "CCD": ["Crowd Control Drone", "drones"],
    "CD": ["Capacitive Display", "electronic parts"],
    "CF": ["Ceramic Fabric", "textiles"],
    "CHA": ["Combustion Chamber", "ship engines"],
    "CL": ["Chlorine", "elements"],
    "CLI": ["Caliche Rock", "minerals"],
    "CMK": ["", "construction materials"],
    "COF": ["Caffeinated Infusion", "consumables (luxury)"],
    "COM": ["Communication System", "electronic systems"],
    "COT": ["Cotton Fabric", "textiles"],
    "CQL": ["Crew Quarters (Large)", "unit prefabs"],
    "CQM": ["Crew Quarters (Medium)", "unit prefabs"],
    "CQS": ["Crew Quarters (Small)", "unit prefabs"],
    "CQT": ["Crew Quarters (Tiny)", "unit prefabs"],
    "CRU": ["Cryogenic Unit", "electronic systems"],
    "CST": ["Cryogenic Stabilizer", "chemicals"],
    "CTF": ["Ceramic-Tungsten Fabric", "textiles"],
    "CU": ["Copper", "metals"],
    "CUO": ["Copper Ore", "ores"],
    "DA": ["Data Analyzer", "software tools"],
    "DCH": ["Drone Chassis", "drones"],
    "DCL": ["Durable Casing L", "plastics"],
    "DCM": ["Durable Casing M", "plastics"],
    "DCS": ["Durable Casing S", "plastics"],
    "DD": ["Distributed Database", "software tools"],
    "DDT": ["DDT Plant Agent", "chemicals"],
    "DEC": ["Decorative Elements", "construction parts"],
    "DIS": ["Information Display", "electronic parts"],
    "DOU": ["Drone Operations Unit", "unit prefabs"],
    "DRF": ["Drone Frame", "drones"],
    "DV": ["Data Visualizer", "software tools"],
    "DW": ["Drinking Water", "consumables (basic)"],
    "EDC": ["Entertainment Data Core", "software tools"],
    "EES": ["Enriched Einsteinium", "chemicals"],
    "ENG": ["Standard STL Engine", "ship engines"],
    "EPO": ["Epoxy Resin", "construction materials"],
    "ES": ["Einsteinium", "elements"],
    "ETC": ["Enriched Technetium", "chemicals"],
    "EXO": ["Exoskeleton Work Suit", "consumables (basic)"],
    "F": ["Fluorine", "gases"],
    "FAL": ["Ferrominium", "alloys"],
    "FAN": ["Active Cooling Device", "electronic parts"],
    "FC": ["Flow Control Device", "construction parts"],
    "FE": ["Iron", "metals"],
    "FEO": ["Iron Ore", "ores"],
    "FET": ["Ferro-Titanium", "alloys"],
    "FF": ["FTL Fuel", "fuels"],
    "FFC": ["FTL Field Controller", "electronic systems"],
    "FIM": ["Flavoured Insta-Meal", "consumables (basic)"],
    "FIR": ["Fission Reactor", "ship engines"],
    "FLO": ["Floating Tank", "construction parts"],
    "FLP": ["Fluid Piping", "construction parts"],
    "FLX": ["Flux", "chemicals"],
    "FOD": ["All-Purpose Fodder", "agricultural products"],
    "FSE": ["Fuel-saving STL Engine", "ship engines"],
    "FUN": ["Entertainment Unit", "unit prefabs"],
    "GAL": ["Galerite Rock", "minerals"],
    "GC": ["Cylindrical Gas Container", "construction parts"],
    "GCH": ["Glass Combustion Chamber", "ship engines"],
    "GEN": ["Glass-based STL Engine", "ship engines"],
    "GIN": ["Einsteinium-Infused Gin", "consumables (luxury)"],
    "GL": ["Glass", "construction materials"],
    "GNZ": ["Glass Nozzle", "ship engines"],
    "GRA": ["Wine-Quality Grapes", "agricultural products"],
    "GRN": ["High-Carb Grains", "agricultural products"],
    "GV": ["Gas Vent", "construction parts"],
    "H": ["Hydrogen", "gases"],
    "H2O": ["Water", "liquids"],
    "HAB": ["Habitat Unit", "unit prefabs"],
    "HAL": ["Halite Crystals", "minerals"],
    "HCC": ["High-Capacity Connectors", "electronic pieces"],
    "HCP": ["Hydrocarbon Plants", "agricultural products"],
    "HD": ["Holographic Display", "electronic devices"],
    "HE": ["Helium", "gases"],
    "HE3": ["Helium-3 Isotope", "gases"],
    "HER": ["Spicy Herbs", "agricultural products"],
    "HEX": ["Heliotrope Extract", "liquids"],
    "HHP": ["Hardened Hull Plate", "ship parts"],
    "HMS": ["HazMat Work Suit", "consumables (basic)"],
    "HNZ": ["Hyperthrust Nozzle", "ship engines"],
    "HOG": ["Holographic Glasses", "electronic devices"],
    "HOP": ["Flowery Hops", "agricultural products"],
    "HPC": ["Handheld Personal Console", "electronic devices"],
    "HPR": ["High-power FTL Reactor", "ship engines"],
    "HSE": ["Hardened Structural Elements", "construction prefabs"],
    "HSS": ["Smart Space Suit", "consumables (basic)"],
    "HTE": ["Hyperthrust STL Engine", "ship engines"],
    "HYR": ["Hyper-power Reactor", "ship engines"],
    "I": ["Iodine", "elements"],
    "IDC": ["Information Data Core", "software systems"],
    "IMM": ["Information Management System", "software systems"],
    "IND": ["Indigo Colorant", "chemicals"],
    "INS": ["InsuFoam", "construction materials"],
    "JUI": ["Sedative Substance", "chemicals"],
    "KOM": ["Kombucha", "consumables (luxury)"],
    "KV": ["Kevlar Fabric", "textiles"],
    "LBH": ["Lightweight Bulkhead", "construction prefabs"],
    "LC": ["AI-Assisted Lab Coat", "consumables (basic)"],
    "LCB": ["Large Cargo Bay Kit", "ship kits"],
    "LCR": ["Liquid Crystals", "chemicals"],
    "LD": ["Local Database", "software components"],
    "LDE": ["Lightweight Deck Elements", "construction prefabs"],
    "LDI": ["Laser Diodes", "electronic pieces"],
    "LES": ["Liquid Einsteinium", "liquids"],
    "LFE": ["Large FTL Emitter", "ship engines"],
    "LFL": ["Large FTL Fuel Tank Kit", "ship kits"],
    "LFP": ["Low-heat Fuel Pump", "ship engines"],
    "LHP": ["Lightweight Hull Plate", "ship parts"],
    "LI": ["Lithium", "metals"],
    "LIO": ["Lithium Ore", "ores"],
    "LIS": ["Life Support System", "electronic systems"],
    "LIT": ["Neon Lighting System", "construction parts"],
    "LOG": ["Logistics System", "electronic systems"],
    "LSE": ["Lightweight Structural Elements", "construction prefabs"],
    "LSL": ["Large STL Fuel Tank Kit", "ship kits"],
    "LST": ["Limestone", "minerals"],
    "LTA": ["Lightweight Transparent Aperture", "construction prefabs"],
    "LU": ["Laboratory Unit", "unit prefabs"],
    "MAG": ["Magnetite", "minerals"],
    "MAI": ["High-Carb Maize", "agricultural products"],
    "MB": ["Motherboard", "electronic parts"],
    "MCB": ["Medium Cargo Bay Kit", "ship kits"],
    "MCG": ["Mineral Construction Granulate", "construction materials"],
    "MEA": ["Quality Meat Meal", "consumables (basic)"],
    "MED": ["Basic Medical Kit", "consumables (basic)"],
    "MFE": ["Medium FTL Emitter", "ship engines"],
    "MFK": ["Medium Fastener Kit", "electronic pieces"],
    "MFL": ["Medium FTL Fuel Tank Kit", "ship kits"],
    "MG": ["Magnesium", "elements"],
    "MGC": ["Magnetic Ground Cover", "construction parts"],
    "MGS": ["Magnesite", "minerals"],
    "MHL": ["Metal-Halide Lighting System", "construction parts"],
    "MHP": ["Micro Headphones", "electronic devices"],
    "MLI": ["Machine Learning Interface", "software components"],
    "MPC": ["Micro-Processor", "electronic parts"],
    "MSL": ["Medium STL Fuel Tank Kit", "ship kits"],
    "MTC": ["MegaTube Coating", "construction materials"],
    "MTP": ["Meat Tissue Patties", "agricultural products"],
    "MUS": ["Protein-Rich Mushrooms", "agricultural products"],
    "MWF": ["Medium Wafer", "electronic pieces"],
    "N": ["Nitrogen", "gases"],
    "NA": ["Sodium", "elements"],
    "NAB": ["Sodium Borohydride", "chemicals"],
    "NCS": ["Nano-Carbon Sheeting", "construction materials"],
    "NE": ["Neon", "gases"],
    "NF": ["Networking Framework", "software components"],
    "NFI": ["Nano Fiber", "construction materials"],
    "NG": ["Nano-Coated Glass", "construction materials"],
    "NL": ["Nylon Fabric", "textiles"],
    "NN": ["Neural Network", "software tools"],
    "NOZ": ["Basic Nozzle", "ship engines"],
    "NR": ["Nano-Enhanced Resin", "chemicals"],
    "NS": ["Nutrient Solution", "chemicals"],
    "NST": ["NeuroStimulants", "consumables (luxury)"],
    "NUT": ["Triglyceride Nuts", "agricultural products"],
    "NV1": ["Navigation Module MK1", "ship parts"],
    "NV2": ["Navigation Module MK2", "ship parts"],
    "O": ["Oxygen", "gases"],
    "OFF": ["Office Supplies", "utility"],
    "OLF": ["Olfactory Substances", "chemicals"],
    "OS": ["Operating System", "software tools"],
    "OVE": ["Basic Overalls", "consumables (basic)"],
    "PCB": ["Printed Circuit Board", "electronic parts"],
    "PDA": ["Personal Data Assistant", "consumables (basic)"],
    "PE": ["Poly-Ethylene", "plastics"],
    "PFE": ["Premium Fertilizer", "chemicals"],
    "PG": ["Polymer Granulate", "plastics"],
    "PIB": ["Pineberries", "agricultural products"],
    "PK": ["Painkillers", "medical equipment"],
    "POW": ["Power Cell", "energy systems"],
    "PPA": ["Protein Paste", "agricultural products"],
    "PSH": ["Pressure Shielding", "construction parts"],
    "PSL": ["Polymer Sheet Type L", "plastics"],
    "PSM": ["Polymer Sheet Type M", "plastics"],
    "PSS": ["Polymer Sheet Type S", "plastics"],
    "PT": ["Power Tools", "consumables (basic)"],
    "PWO": ["Padded Work Overall", "consumables (luxury)"],
    "QCR": ["Quick-charge FTL Reactor", "ship engines"],
    "RAD": ["Radio Device", "electronic devices"],
    "RAG": ["Radioisotope Generator", "ship engines"],
    "RAM": ["Memory Bank", "electronic parts"],
    "RAT": ["Basic Rations", "consumables (basic)"],
    "RBH": ["Reinforced Bulkhead", "construction prefabs"],
    "RCO": ["Raw Cotton Fiber", "agricultural products"],
    "RCS": ["Reactor Control System", "ship engines"],
    "RCT": ["Standard FTL Reactor", "ship engines"],
    "RDE": ["Reinforced Deck Elements", "construction prefabs"],
    "RDL": ["Large Ship-Repair Drone Operations Unit", "unit prefabs"],
    "RDS": ["Small Ship-Repair Drone Operations Unit", "unit prefabs"],
    "REA": ["Chemical Reagents", "chemicals"],
    "RED": ["Rescue Drone", "drones"],
    "REP": ["Repair Kit", "consumables (luxury)"],
    "RG": ["Reinforced Glass", "construction materials"],
    "RGO": ["Red Gold", "alloys"],
    "RHP": ["Reinforced Hull Plate", "ship parts"],
    "ROM": ["Non-Volatile Memory", "electronic parts"],
    "RSE": ["Reinforced Structural Elements", "construction prefabs"],
    "RSH": ["Radiation Shielding", "construction parts"],
    "RSI": ["Raw Silk Strains", "agricultural products"],
    "RTA": ["Reinforced Transparent Aperture", "construction prefabs"],
    "S": ["Sulfur", "elements"],
    "SA": ["Search Algorithm", "software components"],
    "SAL": ["Sorting Algorithm", "software components"],
    "SAR": ["Sensor Array", "electronic devices"],
    "SC": ["Stem Cell Treatment", "consumables (luxury)"],
    "SCB": ["Small Cargo Bay Kit", "ship kits"],
    "SCN": ["Multi-Purpose Scanner", "consumables (basic)"],
    "SCR": ["Sulfur Crystals", "minerals"],
    "SDR": ["Surgical Drone", "drones"],
    "SEA": ["Poly-Sulfite Sealant", "construction materials"],
    "SEN": ["Sensor", "electronic parts"],
    "SEQ": ["Surgical Equipment", "medical equipment"],
    "SF": ["STL Fuel", "fuels"],
    "SFE": ["Small FTL Emitter", "ship engines"],
    "SFK": ["Small Fastener Kit", "electronic pieces"],
    "SFL": ["Small FTL Fuel Tank Kit", "ship kits"],
    "SI": ["Silicon", "metals"],
    "SIL": ["Silken Fabric", "textiles"],
    "SIO": ["Silicon Ore", "ores"],
    "SNM": ["Spatial Navigation Map", "software systems"],
    "SOI": ["Artificial Soil", "chemicals"],
    "SOL": ["Solar Cell", "energy systems"],
    "SP": ["Solar Panel", "energy systems"],
    "SRD": ["Ship-Repair Drone", "drones"],
    "SRP": ["Specialized Anti-rad Plate", "ship shields"],
    "SSC": ["Structural Spacecraft Component", "ship parts"],
    "SSL": ["Small STL Fuel Tank Kit", "ship kits"],
    "STL": ["Steel", "metals"],
    "STR": ["Medical Stretcher", "medical equipment"],
    "STS": ["Stability Support System", "electronic systems"],
    "SU": ["Surgery Unit", "unit prefabs"],
    "SUD": ["Surveillance Drone", "drones"],
    "SUN": ["Safety Uniform", "utility"],
    "SWF": ["Small Wafer", "electronic pieces"],
    "TA": ["Tantalum", "elements"],
    "TAC": ["Targeting Computer", "electronic systems"],
    "TAI": ["Tantalite Rock", "minerals"],
    "TC": ["Technetium", "elements"],
    "TCB": ["Tiny Cargo Bay Kit", "ship kits"],
    "TCL": ["TCL Acid", "chemicals"],
    "TCO": ["Technetium Oxide", "minerals"],
    "TCS": ["Stabilized Technetium", "construction parts"],
    "TCU": ["Trauma Care Unit", "unit prefabs"],
    "THF": ["ThermoFluid", "chemicals"],
    "THP": ["Basic Thermal Protection Material", "ship parts"],
    "TI": ["Titanium", "metals"],
    "TIO": ["Titanium Ore", "ores"],
    "TK": ["TechnoKevlar Fabric", "textiles"],
    "TPU": ["Tensor Processing Unit", "electronic parts"],
    "TRA": ["Audio Transmitter", "electronic parts"],
    "TRN": ["Advanced Transistor", "electronic pieces"],
    "TRU": ["Truss", "construction parts"],
    "TS": ["Tectosilisite", "minerals"],
    "TSH": ["Thermal Shielding", "construction parts"],
    "TUB": ["Test Tubes", "medical equipment"],
    "UTS": ["Universal Toolset", "utility"],
    "VCB": ["High-volume Cargo Bay Kit", "ship kits"],
    "VEG": ["Triglyceride Fruits", "agricultural products"],
    "VG": ["VitaGel", "consumables (luxury)"],
    "VIT": ["Vita Essence", "agricultural products"],
    "VSC": ["Very Small Cargo Bay Kit", "ship kits"],
    "W": ["Tungsten", "metals"],
    "WAI": ["Weak Artificial Intelligence", "software systems"],
    "WAL": ["Alpha-Stabilized Tungsten", "alloys"],
    "WCB": ["High-load Cargo Bay Kit", "ship kits"],
    "WIN": ["Smart Zinfandel", "consumables (luxury)"],
    "WM": ["Window Manager", "software components"],
    "WOR": ["Handcraft Workshop Unit", "unit prefabs"],
    "WR": ["Water Reclaimer", "electronic systems"],
    "WS": ["Scientific Work Station", "consumables (basic)"],
    "ZIR": ["Zircon Crystals", "minerals"],
    "ZR": ["Zirconium", "elements"],
};
/* harmony export (immutable) */ __webpack_exports__["d"] = MaterialNames;

const Materials = {
    "Antenna Array": ["AAR", 0.78, 0.5],
    "Advanced Bulkhead": ["ABH", 0.6, 0.9],
    "Automated Cooling System": ["ACS", 0.3, 0.2],
    "Advanced Deck Elements": ["ADE", 0.4, 1.5],
    "Auto-Doc": ["ADR", 0.1, 0.1],
    "Audio Distribution System": ["ADS", 0.7, 2],
    "Aerostat Foundation": ["AEF", 2, 5],
    "Advanced STL Engine": ["AEN", 14, 7],
    "Advanced Fuel Pump": ["AFP", 1, 0.25],
    "Advanced Fuel Rod": ["AFR", 0.4, 0.1],
    "Advanced High-G Seats": ["AGS", 30, 5],
    "Advanced Hull Plate": ["AHP", 20, 10],
    "Air Scrubber": ["AIR", 1.7, 3],
    "Aluminium": ["AL", 2.7, 1],
    "Stellar Pale Ale": ["ALE", 0.1, 0.1],
    "Protein-Rich Algae": ["ALG", 0.7, 1],
    "Aluminium Ore": ["ALO", 1.35, 1],
    "Ammonia": ["AMM", 0.86, 1],
    "Advanced Nozzle": ["ANZ", 6, 3],
    "Advanced Thermal Protection Tile": ["APT", 0.03, 0.3],
    "Argon": ["AR", 1.784, 1],
    "Advanced Anti-rad Plate": ["ARP", 0.04, 0.2],
    "Advanced Structural Elements": ["ASE", 0.5, 0.6],
    "Alpha-Stabilized Titanium": ["AST", 4.98, 1],
    "Advanced Transparent Aperture": ["ATA", 0.3, 0.4],
    "Advanced Thermal Protection Material": ["ATP", 2.9, 1],
    "Gold": ["AU", 19.32, 1],
    "Gold Ore": ["AUO", 3.86, 1],
    "Active Water Filter": ["AWF", 0.8, 1.2],
    "Advanced Whipple Shielding": ["AWH", 0.12, 1],
    "Helpful Bacteria": ["BAC", 0.15, 0.15],
    "Basic AI Framework": ["BAI", 0.001, 0.01],
    "Basic Bulkhead": ["BBH", 0.5, 0.8],
    "Budget Connectors": ["BCO", 0.005, 0.002],
    "Basic Deck Elements": ["BDE", 0.1, 1.5],
    "Beryllium": ["BE", 1.84, 1],
    "Protein-Rich Beans": ["BEA", 0.8, 1],
    "Beryl Crystals": ["BER", 1.92, 1],
    "Basic Fuel Pump": ["BFP", 0.8, 0.2],
    "Basic Fuel Rod": ["BFR", 0.3, 0.1],
    "Shielded Connectors": ["BGC", 0.01, 0.002],
    "Blue Gold": ["BGO", 19.32, 1],
    "Basic High-G Seats": ["BGS", 20, 3],
    "Basic Hull Plate": ["BHP", 10, 10],
    "Full-Body Interaction Device": ["BID", 0.05, 0.05],
    "Breathable Liquid": ["BL", 1.12, 1],
    "Desaturation Agent": ["BLE", 0.5, 0.5],
    "Basic Mainframe": ["BMF", 0.8, 1.2],
    "Bandages": ["BND", 0.001, 0.005],
    "Boron Crystals": ["BOR", 1.8, 1],
    "Borosilicate": ["BOS", 1.5, 1],
    "Basic Thermal Protection Tile": ["BPT", 0.02, 0.3],
    "Command Bridge MK1": ["BR1", 180, 300],
    "Command Bridge MK2": ["BR2", 280, 400],
    "Bioreactive Minerals": ["BRM", 2.5, 1],
    "Bronze": ["BRO", 8.73, 1],
    "Basic Anti-rad Plate": ["BRP", 0.03, 0.2],
    "Short-distance Command Bridge": ["BRS", 150, 200],
    "Body Scanner": ["BSC", 0.1, 0.1],
    "Basic Structural Elements": ["BSE", 0.3, 0.5],
    "Basic Transparent Aperture": ["BTA", 0.3, 0.4],
    "Bacterial Tungsten Solution": ["BTS", 1.05, 1],
    "Basic Whipple Shielding": ["BWH", 0.1, 1],
    "Basic Workstation": ["BWS", 0.05, 0.1],
    "Carbon": ["C", 2.25, 1],
    "Calcium": ["CA", 1.54, 1],
    "Caffeinated Beans": ["CAF", 0.86, 1],
    "Electric Field Capacitor": ["CAP", 0.001, 0.001],
    "Large Capacitor Bank": ["CBL", 5.4, 2.4],
    "Medium Capacitor Bank": ["CBM", 3.6, 1.6],
    "Small Capacitor Bank": ["CBS", 1.8, 0.8],
    "Climate Controller": ["CC", 0.5, 1],
    "Crowd Control Drone": ["CCD", 0.3, 0.05],
    "Capacitive Display": ["CD", 0.004, 0.002],
    "Ceramic Fabric": ["CF", 2.82, 1],
    "Combustion Chamber": ["CHA", 1.2, 0.7],
    "Chlorine": ["CL", 3.2, 1],
    "Caliche Rock": ["CLI", 2.42, 1],
    "": ["CMK", 4.56, 33.2],
    "Caffeinated Infusion": ["COF", 0.1, 0.1],
    "Communication System": ["COM", 0.5, 1.5],
    "Cotton Fabric": ["COT", 0.77, 1],
    "Crew Quarters (Large)": ["CQL", 75, 150],
    "Crew Quarters (Medium)": ["CQM", 50, 100],
    "Crew Quarters (Small)": ["CQS", 25, 50],
    "Crew Quarters (Tiny)": ["CQT", 12.5, 25],
    "Cryogenic Unit": ["CRU", 2.2, 2],
    "Cryogenic Stabilizer": ["CST", 1.14, 1],
    "Ceramic-Tungsten Fabric": ["CTF", 4.32, 1],
    "Copper": ["CU", 8.92, 1],
    "Copper Ore": ["CUO", 4.01, 1],
    "Data Analyzer": ["DA", 0.001, 0.01],
    "Drone Chassis": ["DCH", 0.2, 0.03],
    "Durable Casing L": ["DCL", 0.08, 0.8],
    "Durable Casing M": ["DCM", 0.04, 0.4],
    "Durable Casing S": ["DCS", 0.01, 0.1],
    "Distributed Database": ["DD", 0.001, 0.01],
    "DDT Plant Agent": ["DDT", 0.11, 0.1],
    "Decorative Elements": ["DEC", 0.5, 2],
    "Information Display": ["DIS", 0.02, 0.02],
    "Drone Operations Unit": ["DOU", 5, 4],
    "Drone Frame": ["DRF", 0.1, 0.02],
    "Data Visualizer": ["DV", 0.001, 0.01],
    "Drinking Water": ["DW", 0.1, 0.1],
    "Entertainment Data Core": ["EDC", 0.001, 0.01],
    "Enriched Einsteinium": ["EES", 9.2, 1],
    "Standard STL Engine": ["ENG", 8, 4],
    "Epoxy Resin": ["EPO", 0.04, 0.02],
    "Einsteinium": ["ES", 0.88, 0.1],
    "Enriched Technetium": ["ETC", 4.1, 1],
    "Exoskeleton Work Suit": ["EXO", 0.1, 0.05],
    "Fluorine": ["F", 1.696, 1],
    "Ferrominium": ["FAL", 3.22, 1],
    "Active Cooling Device": ["FAN", 0.1, 0.1],
    "Flow Control Device": ["FC", 0.5, 0.25],
    "Iron": ["FE", 7.874, 1],
    "Iron Ore": ["FEO", 5.9, 1],
    "Ferro-Titanium": ["FET", 6.85, 1],
    "FTL Fuel": ["FF", 0.05, 0.01],
    "FTL Field Controller": ["FFC", 50, 16],
    "Flavoured Insta-Meal": ["FIM", 0.55, 0.5],
    "Fission Reactor": ["FIR", 7, 4.9],
    "Floating Tank": ["FLO", 1, 2],
    "Fluid Piping": ["FLP", 0.3, 2],
    "Flux": ["FLX", 0.25, 0.1],
    "All-Purpose Fodder": ["FOD", 1.2, 1],
    "Fuel-saving STL Engine": ["FSE", 6, 3],
    "Entertainment Unit": ["FUN", 5, 4],
    "Galerite Rock": ["GAL", 2.51, 1],
    "Cylindrical Gas Container": ["GC", 0.05, 0.1],
    "Glass Combustion Chamber": ["GCH", 1, 0.6],
    "Glass-based STL Engine": ["GEN", 5, 3],
    "Einsteinium-Infused Gin": ["GIN", 0.1, 0.1],
    "Glass": ["GL", 0.016, 0.01],
    "Glass Nozzle": ["GNZ", 1.5, 1],
    "Wine-Quality Grapes": ["GRA", 1.1, 1],
    "High-Carb Grains": ["GRN", 0.9, 1],
    "Gas Vent": ["GV", 0.25, 0.15],
    "Hydrogen": ["H", 0.07, 1],
    "Water": ["H2O", 0.2, 0.2],
    "Habitat Unit": ["HAB", 10, 8],
    "Halite Crystals": ["HAL", 2.17, 1],
    "High-Capacity Connectors": ["HCC", 0.01, 0.002],
    "Hydrocarbon Plants": ["HCP", 0.8, 1],
    "Holographic Display": ["HD", 0.05, 2],
    "Helium": ["HE", 0.145, 1],
    "Helium-3 Isotope": ["HE3", 0.145, 1],
    "Spicy Herbs": ["HER", 0.4, 1],
    "Heliotrope Extract": ["HEX", 1.1, 1],
    "Hardened Hull Plate": ["HHP", 15, 10],
    "HazMat Work Suit": ["HMS", 0.05, 0.05],
    "Hyperthrust Nozzle": ["HNZ", 6, 12],
    "Holographic Glasses": ["HOG", 0.01, 0.01],
    "Flowery Hops": ["HOP", 0.35, 1],
    "Handheld Personal Console": ["HPC", 0.003, 0.003],
    "High-power FTL Reactor": ["HPR", 18, 15],
    "Hardened Structural Elements": ["HSE", 3.1, 0.7],
    "Smart Space Suit": ["HSS", 0.05, 0.05],
    "Hyperthrust STL Engine": ["HTE", 20, 10],
    "Hyper-power Reactor": ["HYR", 35, 25],
    "Iodine": ["I", 4.93, 1],
    "Information Data Core": ["IDC", 0.001, 0.01],
    "Information Management System": ["IMM", 0.001, 0.01],
    "Indigo Colorant": ["IND", 0.21, 0.2],
    "InsuFoam": ["INS", 0.06, 0.1],
    "Sedative Substance": ["JUI", 1.2, 1],
    "Kombucha": ["KOM", 0.1, 0.1],
    "Kevlar Fabric": ["KV", 1.65, 1],
    "Lightweight Bulkhead": ["LBH", 0.2, 0.6],
    "AI-Assisted Lab Coat": ["LC", 0.05, 0.05],
    "Large Cargo Bay Kit": ["LCB", 200, 200],
    "Liquid Crystals": ["LCR", 0.15, 0.1],
    "Local Database": ["LD", 0.001, 0.01],
    "Lightweight Deck Elements": ["LDE", 0.1, 1.2],
    "Laser Diodes": ["LDI", 0.001, 0.001],
    "Liquid Einsteinium": ["LES", 8.84, 1],
    "Large FTL Emitter": ["LFE", 0.4, 1.6],
    "Large FTL Fuel Tank Kit": ["LFL", 60, 10],
    "Low-heat Fuel Pump": ["LFP", 0.5, 0.1],
    "Lightweight Hull Plate": ["LHP", 5, 10],
    "Lithium": ["LI", 0.55, 1],
    "Lithium Ore": ["LIO", 2.75, 1],
    "Life Support System": ["LIS", 5.6, 7],
    "Neon Lighting System": ["LIT", 1, 2],
    "Logistics System": ["LOG", 0.5, 1.5],
    "Lightweight Structural Elements": ["LSE", 0.3, 1.2],
    "Large STL Fuel Tank Kit": ["LSL", 125, 100],
    "Limestone": ["LST", 2.73, 1],
    "Lightweight Transparent Aperture": ["LTA", 0.3, 0.5],
    "Laboratory Unit": ["LU", 8, 6],
    "Magnetite": ["MAG", 5.15, 1],
    "High-Carb Maize": ["MAI", 1.3, 1],
    "Motherboard": ["MB", 0.075, 0.075],
    "Medium Cargo Bay Kit": ["MCB", 100, 100],
    "Mineral Construction Granulate": ["MCG", 0.24, 0.1],
    "Quality Meat Meal": ["MEA", 0.6, 0.5],
    "Basic Medical Kit": ["MED", 0.3, 0.1],
    "Medium FTL Emitter": ["MFE", 0.2, 0.8],
    "Medium Fastener Kit": ["MFK", 0.1, 0.05],
    "Medium FTL Fuel Tank Kit": ["MFL", 24, 4],
    "Magnesium": ["MG", 0.27, 0.16],
    "Magnetic Ground Cover": ["MGC", 0.6, 0.9],
    "Magnesite": ["MGS", 1.73, 1],
    "Metal-Halide Lighting System": ["MHL", 0.1, 0.05],
    "Micro Headphones": ["MHP", 0.001, 0.001],
    "Machine Learning Interface": ["MLI", 0.001, 0.01],
    "Micro-Processor": ["MPC", 0.001, 0.001],
    "Medium STL Fuel Tank Kit": ["MSL", 50, 50],
    "MegaTube Coating": ["MTC", 0.032, 0.01],
    "Meat Tissue Patties": ["MTP", 0.7, 1],
    "Protein-Rich Mushrooms": ["MUS", 0.8, 1],
    "Medium Wafer": ["MWF", 0.008, 0.008],
    "Nitrogen": ["N", 0.807, 1],
    "Sodium": ["NA", 0.97, 1],
    "Sodium Borohydride": ["NAB", 0.1, 0.05],
    "Nano-Carbon Sheeting": ["NCS", 0.028, 0.01],
    "Neon": ["NE", 0.9, 1],
    "Networking Framework": ["NF", 0.001, 0.01],
    "Nano Fiber": ["NFI", 0.032, 0.01],
    "Nano-Coated Glass": ["NG", 0.022, 0.01],
    "Nylon Fabric": ["NL", 1.13, 1],
    "Neural Network": ["NN", 0.001, 0.01],
    "Basic Nozzle": ["NOZ", 3, 1.5],
    "Nano-Enhanced Resin": ["NR", 0.05, 0.05],
    "Nutrient Solution": ["NS", 0.6, 0.5],
    "NeuroStimulants": ["NST", 0.05, 0.05],
    "Triglyceride Nuts": ["NUT", 0.9, 1],
    "Navigation Module MK1": ["NV1", 4.2, 2],
    "Navigation Module MK2": ["NV2", 6.7, 3],
    "Oxygen": ["O", 1.141, 1],
    "Office Supplies": ["OFF", 0.02, 0.2],
    "Olfactory Substances": ["OLF", 0.01, 0.001],
    "Operating System": ["OS", 0.001, 0.01],
    "Basic Overalls": ["OVE", 0.02, 0.025],
    "Printed Circuit Board": ["PCB", 0.05, 0.05],
    "Personal Data Assistant": ["PDA", 0.002, 0.002],
    "Poly-Ethylene": ["PE", 0.01, 0.01],
    "Premium Fertilizer": ["PFE", 0.9, 1],
    "Polymer Granulate": ["PG", 0.002, 0.001],
    "Pineberries": ["PIB", 0.3, 1],
    "Painkillers": ["PK", 0.001, 0.001],
    "Power Cell": ["POW", 0.05, 0.1],
    "Protein Paste": ["PPA", 2, 1],
    "Pressure Shielding": ["PSH", 4.2, 0.8],
    "Polymer Sheet Type L": ["PSL", 0.08, 0.8],
    "Polymer Sheet Type M": ["PSM", 0.04, 0.4],
    "Polymer Sheet Type S": ["PSS", 0.01, 0.1],
    "Power Tools": ["PT", 0.25, 0.2],
    "Padded Work Overall": ["PWO", 0.05, 0.05],
    "Quick-charge FTL Reactor": ["QCR", 14, 10],
    "Radio Device": ["RAD", 0.003, 0.005],
    "Radioisotope Generator": ["RAG", 5, 3.4],
    "Memory Bank": ["RAM", 0.001, 0.001],
    "Basic Rations": ["RAT", 0.21, 0.1],
    "Reinforced Bulkhead": ["RBH", 2.4, 0.9],
    "Raw Cotton Fiber": ["RCO", 0.95, 1],
    "Reactor Control System": ["RCS", 0.67, 0.5],
    "Standard FTL Reactor": ["RCT", 7, 4],
    "Reinforced Deck Elements": ["RDE", 1.4, 1.5],
    "Large Ship-Repair Drone Operations Unit": ["RDL", 150, 30],
    "Small Ship-Repair Drone Operations Unit": ["RDS", 50, 10],
    "Chemical Reagents": ["REA", 0.05, 0.05],
    "Rescue Drone": ["RED", 0.3, 0.05],
    "Repair Kit": ["REP", 0.006, 0.002],
    "Reinforced Glass": ["RG", 0.032, 0.01],
    "Red Gold": ["RGO", 19.32, 1],
    "Reinforced Hull Plate": ["RHP", 12, 10],
    "Non-Volatile Memory": ["ROM", 0.001, 0.001],
    "Reinforced Structural Elements": ["RSE", 1.9, 0.7],
    "Radiation Shielding": ["RSH", 3.7, 0.8],
    "Raw Silk Strains": ["RSI", 1.1, 1],
    "Reinforced Transparent Aperture": ["RTA", 1.5, 0.5],
    "Sulfur": ["S", 0.52, 0.25],
    "Search Algorithm": ["SA", 0.001, 0.01],
    "Sorting Algorithm": ["SAL", 0.001, 0.01],
    "Sensor Array": ["SAR", 1.7, 2],
    "Stem Cell Treatment": ["SC", 0.04, 0.01],
    "Small Cargo Bay Kit": ["SCB", 50, 50],
    "Multi-Purpose Scanner": ["SCN", 0.001, 0.001],
    "Sulfur Crystals": ["SCR", 2.05, 1],
    "Surgical Drone": ["SDR", 0.3, 0.05],
    "Poly-Sulfite Sealant": ["SEA", 0.15, 0.07],
    "Sensor": ["SEN", 0.001, 0.001],
    "Surgical Equipment": ["SEQ", 0.001, 0.01],
    "STL Fuel": ["SF", 0.06, 0.06],
    "Small FTL Emitter": ["SFE", 0.1, 0.4],
    "Small Fastener Kit": ["SFK", 0.04, 0.02],
    "Small FTL Fuel Tank Kit": ["SFL", 9, 1.5],
    "Silicon": ["SI", 2.329, 1],
    "Silken Fabric": ["SIL", 1.21, 1],
    "Silicon Ore": ["SIO", 1.79, 1],
    "Spatial Navigation Map": ["SNM", 0.001, 0.01],
    "Artificial Soil": ["SOI", 0.9, 1],
    "Solar Cell": ["SOL", 0.015, 0.01],
    "Solar Panel": ["SP", 0.15, 0.1],
    "Ship-Repair Drone": ["SRD", 0.3, 0.05],
    "Specialized Anti-rad Plate": ["SRP", 0.1, 0.2],
    "Structural Spacecraft Component": ["SSC", 1, 1],
    "Small STL Fuel Tank Kit": ["SSL", 20, 20],
    "Steel": ["STL", 7.85, 1],
    "Medical Stretcher": ["STR", 0.01, 1],
    "Stability Support System": ["STS", 0.1, 0.1],
    "Surgery Unit": ["SU", 6, 5],
    "Surveillance Drone": ["SUD", 0.3, 0.05],
    "Safety Uniform": ["SUN", 0.05, 0.05],
    "Small Wafer": ["SWF", 0.003, 0.003],
    "Tantalum": ["TA", 16.65, 1],
    "Targeting Computer": ["TAC", 0.15, 1],
    "Tantalite Rock": ["TAI", 7.94, 1],
    "Technetium": ["TC", 11.8, 1],
    "Tiny Cargo Bay Kit": ["TCB", 20, 20],
    "TCL Acid": ["TCL", 0.09, 0.1],
    "Technetium Oxide": ["TCO", 9.8, 1],
    "Stabilized Technetium": ["TCS", 3.4, 1.2],
    "Trauma Care Unit": ["TCU", 5, 4],
    "ThermoFluid": ["THF", 0.6, 0.35],
    "Basic Thermal Protection Material": ["THP", 2.2, 1],
    "Titanium": ["TI", 4.5, 1],
    "Titanium Ore": ["TIO", 1.58, 1],
    "TechnoKevlar Fabric": ["TK", 1.89, 1],
    "Tensor Processing Unit": ["TPU", 0.002, 0.002],
    "Audio Transmitter": ["TRA", 0.005, 0.002],
    "Advanced Transistor": ["TRN", 0.001, 0.001],
    "Truss": ["TRU", 0.1, 1.5],
    "Tectosilisite": ["TS", 2.4, 1],
    "Thermal Shielding": ["TSH", 2.4, 1.5],
    "Test Tubes": ["TUB", 0.002, 0.002],
    "Universal Toolset": ["UTS", 0.05, 0.05],
    "High-volume Cargo Bay Kit": ["VCB", 200, 200],
    "Triglyceride Fruits": ["VEG", 1.1, 1],
    "VitaGel": ["VG", 0.21, 0.1],
    "Vita Essence": ["VIT", 0.9, 1],
    "Very Small Cargo Bay Kit": ["VSC", 35, 35],
    "Tungsten": ["W", 7.519, 1],
    "Weak Artificial Intelligence": ["WAI", 0.001, 0.01],
    "Alpha-Stabilized Tungsten": ["WAL", 6.25, 1],
    "High-load Cargo Bay Kit": ["WCB", 200, 200],
    "Smart Zinfandel": ["WIN", 0.1, 0.1],
    "Window Manager": ["WM", 0.001, 0.01],
    "Handcraft Workshop Unit": ["WOR", 5, 5],
    "Water Reclaimer": ["WR", 6.4, 5],
    "Scientific Work Station": ["WS", 0.05, 0.5],
    "Zircon Crystals": ["ZIR", 4.85, 1],
    "Zirconium": ["ZR", 6.53, 1],
};
/* harmony export (immutable) */ __webpack_exports__["e"] = Materials;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getPrices;
/* unused harmony export getCXPrices */
/* harmony export (immutable) */ __webpack_exports__["a"] = getBurn;
/* harmony export (immutable) */ __webpack_exports__["d"] = getGroupBurn;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBurnSettings;
/* harmony export (immutable) */ __webpack_exports__["c"] = getContracts;
function getPrices(prices, webappID) {
    if (!webappID) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: Web App Timeout");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived Prices from Web App");
                var priceData = JSON.parse(xhr.responseText);
                const keys = Object.keys(priceData);
                keys.forEach(key => {
                    prices[key] = priceData[key];
                });
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from Web App");
            }
        }
        return;
    };
    xhr.timeout = 10000;
    xhr.open("GET", "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22price%22", true);
    xhr.send(null);
    return;
}
function getCXPrices(cxPrices) {
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: CX Price Timeout");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived CX Prices");
                var priceData = JSON.parse(xhr.responseText);
                const wantedResults = ["AskPrice", "BidPrice", "Average", "AskAvail", "BidAvail"];
                const CXs = ["AI1", "CI1", "CI2", "IC1", "NC1", "NC2"];
                priceData.forEach(mat => {
                    cxPrices[mat["Ticker"]] = {};
                    CXs.forEach(CX => {
                        cxPrices[mat["Ticker"]][CX] = {};
                        wantedResults.forEach(wanted => {
                            cxPrices[mat["Ticker"]][CX][wanted] = mat[CX + "-" + wanted];
                            return;
                        });
                        return;
                    });
                    return;
                });
                cxPrices["Age"] = Date.now();
                console.log(cxPrices);
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from Rain Prices");
            }
        }
        return;
    };
    xhr.timeout = 10000;
    xhr.open("GET", "https://rest.fnar.net" + "/rain/prices", true);
    xhr.send(null);
    return;
}
function getBurn(burn, username, apikey) {
    if (!burn) {
        burn = {};
    }
    if (!apikey || !username) {
        return;
    }
    burn[username] = [];
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: FIO Burn Timeout");
        burn[username] = undefined;
        getBurn(burn, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived Burn from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    burn[username].push(data);
                });
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from FIO");
                burn[username] = undefined;
            }
        }
        return;
    };
    xhr.timeout = 20000;
    xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}
function getGroupBurn(burn, groupid, apikey) {
    if (!burn) {
        burn = {};
    }
    if (!apikey || !groupid) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: FIO Burn Timeout");
        burn[groupid] = undefined;
        getGroupBurn(burn, groupid, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived Group Burn from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burn[groupid] = [];
                burnData.forEach(data => {
                    burn[groupid].push(data);
                });
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from FIO");
                burn[groupid] = undefined;
            }
        }
        return;
    };
    xhr.timeout = 20000;
    xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/group/" + groupid, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}
function getBurnSettings(burnSettings, username, apikey) {
    if (!apikey || !username) {
        return;
    }
    burnSettings.push("loading");
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: FIO Burn Settings Timeout");
        getBurnSettings(burnSettings, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived Burn Settings from FIO");
                burnSettings[0] = "loaded";
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    burnSettings.push(data);
                });
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from FIO");
            }
        }
        return;
    };
    xhr.timeout = 10000;
    xhr.open("GET", "https://rest.fnar.net" + "/usersettings/burnrate/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}
function getContracts(contracts, username, apikey) {
    if (!contracts) {
        contracts = {};
    }
    if (!apikey || !username) {
        return;
    }
    contracts[username] = [];
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("PMMG: FIO Contract Timeout");
        contracts[username] = undefined;
        getContracts(contracts, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("PMMG: Retreived Contracts from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    contracts[username].push(data);
                });
            }
            catch (SyntaxError) {
                console.log("PMMG: Bad Data from FIO");
                contracts[username] = undefined;
            }
        }
        return;
    };
    xhr.timeout = 20000;
    xhr.open("GET", "https://rest.fnar.net" + "/contract/allcontracts");
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Checklists;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


const CHECK_INDICATOR = "$$CHECK";
/* harmony export (immutable) */ __webpack_exports__["a"] = CHECK_INDICATOR;

function Checklists(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length == 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", generateCheckTable, tile);
    }
    else {
        const checkName = (parameters.slice(1)).join("_");
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("title");
        nameDiv.textContent = checkName;
        tile.appendChild(nameDiv);
        const checkWrapper = document.createElement("div");
        tile.appendChild(checkWrapper);
        checkWrapper.classList.add("check-wrapper");
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", dispStoredCheck, [checkName, tile]);
    }
    return;
}
function generateCheckTable(result, tile) {
    if (!tile) {
        return;
    }
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    const table = document.createElement("table");
    tile.appendChild(table);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Name", "Incomplete Items", "Total Items", "Delete"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    const names = Array.from(Object.keys(result["PMMG-Notes"]));
    var anyChecklists = false;
    names.forEach(name => {
        if (name.substring(0, 7) != CHECK_INDICATOR) {
            return;
        }
        anyChecklists = true;
        const row = document.createElement("tr");
        const nameColumn = document.createElement("td");
        const incompleteColumn = document.createElement("td");
        const totalColumn = document.createElement("td");
        const deleteColumn = document.createElement("td");
        row.appendChild(nameColumn);
        row.appendChild(incompleteColumn);
        row.appendChild(totalColumn);
        row.appendChild(deleteColumn);
        body.appendChild(row);
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(name.substring(7), "XIT CHECK_" + name.substring(7)));
        incompleteColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(result["PMMG-Notes"][name].filter((obj) => (!obj[1])).length));
        totalColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(result["PMMG-Notes"][name].length));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [name.substring(7), []]);
            row.style.display = "none";
            return;
        });
        return;
    });
    if (!anyChecklists) {
        var line = document.createElement("tr");
        const textColumn = document.createElement("td");
        textColumn.colSpan = 4;
        textColumn.textContent = "No Checklists";
        line.appendChild(textColumn);
        body.appendChild(line);
    }
    return;
}
function updateThenStoreCheck(result, params) {
    if (!params || !params[0]) {
        return;
    }
    const checkName = params[0];
    const checkText = params[1];
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    result["PMMG-Notes"][CHECK_INDICATOR + checkName] = checkText.length == 0 ? undefined : checkText;
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    return;
}
function dispStoredCheck(result, params) {
    if (!params || !params[0] || !params[1]) {
        return;
    }
    const checkName = params[0];
    const tile = params[1];
    const checkWrapper = tile.children[1];
    if (!checkWrapper) {
        return;
    }
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    if (result["PMMG-Notes"][CHECK_INDICATOR + checkName]) {
        result["PMMG-Notes"][CHECK_INDICATOR + checkName].forEach(check => { createCheckRow(checkWrapper, result, checkName, check[0], check[1], check[2]); });
    }
    const buttonDiv = document.createElement("div");
    tile.appendChild(buttonDiv);
    const addButton = document.createElement("button");
    addButton.textContent = "Add New";
    buttonDiv.appendChild(addButton);
    addButton.style.marginLeft = "5px";
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
    addButton.addEventListener("click", function () {
        const overlapDiv = document.createElement("div");
        overlapDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].OverlappingDiv);
        const greyStripes = document.createElement("div");
        greyStripes.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].GreyStripes);
        overlapDiv.appendChild(greyStripes);
        tile.insertBefore(overlapDiv, tile.firstChild);
        greyStripes.appendChild(makeSpacer(tile, overlapDiv));
        const addInterfaceWrapper = document.createElement("div");
        addInterfaceWrapper.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].CenterInterface);
        greyStripes.appendChild(addInterfaceWrapper);
        const addInterface = document.createElement("div");
        addInterface.classList.add("NLOrH7hF5fbKIesqW3uSkA==");
        addInterfaceWrapper.appendChild(addInterface);
        const addHeader = document.createElement('h3');
        addHeader.appendChild(document.createTextNode("Checklist Item Editor"));
        addHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
        addInterface.appendChild(addHeader);
        addHeader.style.margin = "0.5em 0 0.5em";
        const form = document.createElement("div");
        addInterface.appendChild(form);
        const nameRow = document.createElement("div");
        nameRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormRow);
        form.appendChild(nameRow);
        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Name";
        nameLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormLabel);
        nameRow.appendChild(nameLabel);
        const nameInputDiv = document.createElement("div");
        nameInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormInput);
        nameRow.appendChild(nameInputDiv);
        const nameInput = document.createElement("input");
        nameInputDiv.appendChild(nameInput);
        const dateRow = document.createElement("div");
        dateRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormRow);
        form.appendChild(dateRow);
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Due Date";
        dateLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormLabel);
        dateRow.appendChild(dateLabel);
        const dateInputDiv = document.createElement("div");
        dateInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormInput);
        dateRow.appendChild(dateInputDiv);
        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInputDiv.appendChild(dateInput);
        const timeRow = document.createElement("div");
        timeRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormRow);
        form.appendChild(timeRow);
        const timeLabel = document.createElement("label");
        timeLabel.textContent = "Due Date Time";
        timeLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormLabel);
        timeRow.appendChild(timeLabel);
        const timeInputDiv = document.createElement("div");
        timeInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormInput);
        timeRow.appendChild(timeInputDiv);
        const timeInput = document.createElement("input");
        timeInput.type = "time";
        timeInputDiv.appendChild(timeInput);
        const saveRow = document.createElement("div");
        saveRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveRow);
        form.appendChild(saveRow);
        const saveLabel = document.createElement("label");
        saveLabel.textContent = "CMD";
        saveLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveLabel);
        saveRow.appendChild(saveLabel);
        const saveInputDiv = document.createElement("div");
        saveInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveInput);
        saveRow.appendChild(saveInputDiv);
        const saveButton = document.createElement("button");
        saveButton.textContent = "SAVE";
        saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
        saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
        saveInputDiv.appendChild(saveButton);
        saveButton.addEventListener("click", function () {
            const itemName = nameInput.value || "";
            tile.removeChild(overlapDiv);
            var dueDate;
            if (dateInput.value) {
                if (timeInput.value) {
                    dueDate = Date.parse(dateInput.value + " " + timeInput.value);
                }
                else {
                    dueDate = Date.parse(dateInput.value);
                }
            }
            const itemContent = [itemName, false];
            if (dueDate && !isNaN(dueDate)) {
                itemContent.push(dueDate);
            }
            if (result["PMMG-Notes"][CHECK_INDICATOR + checkName]) {
                result["PMMG-Notes"][CHECK_INDICATOR + checkName].push(itemContent);
            }
            else {
                result["PMMG-Notes"][CHECK_INDICATOR + checkName] = [itemContent];
            }
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
            createCheckRow(checkWrapper, result, checkName, itemName, false, dueDate);
            return;
        });
        greyStripes.appendChild(makeSpacer(tile, overlapDiv));
    });
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Complete";
    buttonDiv.appendChild(clearButton);
    clearButton.style.marginLeft = "5px";
    clearButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    clearButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonDanger);
    clearButton.addEventListener("click", function () {
        for (var i = 0; i < result["PMMG-Notes"][CHECK_INDICATOR + checkName].length; i++) {
            if (result["PMMG-Notes"][CHECK_INDICATOR + checkName][i][1]) {
                result["PMMG-Notes"][CHECK_INDICATOR + checkName].splice(i, 1);
                i--;
            }
        }
        for (i = 0; i < checkWrapper.children.length; i++) {
            const checkRow = checkWrapper.children[i];
            if (checkRow && checkRow.classList.contains("checked")) {
                checkWrapper.removeChild(checkRow);
                i--;
            }
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
    });
    return;
}
function createCheckRow(tile, result, checkName, name, checked, dueDate) {
    const checkRow = document.createElement("div");
    checkRow.style.display = "flex";
    checkRow.style.alignItems = "center";
    const checkCircle = document.createElement("div");
    checkCircle.textContent = checked ? '●' : '○';
    checkRow.appendChild(checkCircle);
    checkCircle.style.color = dueDate && dueDate < Date.now() ? "#d9534f" : "#f7a600";
    checkCircle.style.fontSize = "35px";
    checkCircle.style.cursor = "pointer";
    tile.appendChild(checkRow);
    const textDiv = document.createElement("div");
    const checkText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(name);
    textDiv.appendChild(checkText);
    checkText.style.display = "block";
    checkText.style.paddingTop = "5px";
    var dueDateText;
    if (dueDate) {
        dueDateText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(new Date(dueDate).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + " " + new Date(dueDate).toLocaleDateString(undefined, { day: "numeric", month: "numeric", year: "numeric" }));
        dueDateText.classList.add(dueDate < Date.now() ? "check-time-overdue" : "check-time");
        textDiv.appendChild(dueDateText);
    }
    if (checked) {
        checkText.classList.add("checked-text");
        checkRow.classList.add("checked");
        if (dueDateText) {
            dueDateText.classList.add("check-time-complete");
        }
    }
    checkRow.appendChild(textDiv);
    checkCircle.addEventListener("click", function () {
        checked = !checked;
        checkCircle.textContent = checked ? '●' : '○';
        for (var i = 0; i < result["PMMG-Notes"][CHECK_INDICATOR + checkName].length; i++) {
            const possibleMatch = result["PMMG-Notes"][CHECK_INDICATOR + checkName][i];
            if (possibleMatch[0] == name) {
                possibleMatch[1] = checked;
                break;
            }
        }
        if (checked) {
            checkText.classList.add("checked-text");
            checkRow.classList.add("checked");
            if (dueDateText) {
                dueDateText.classList.add("check-time-complete");
            }
        }
        else {
            checkText.classList.remove("checked-text");
            checkRow.classList.remove("checked");
            if (dueDateText) {
                dueDateText.classList.remove("check-time-complete");
            }
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
    });
    return;
}
function makeSpacer(tile, toRemove) {
    const spacer = document.createElement("div");
    spacer.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Spacer);
    spacer.addEventListener("click", function () {
        tile.removeChild(toRemove);
        return;
    });
    return spacer;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlightETAs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrderETAs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FleetETAs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostLM__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShippingAds__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QueueLoad__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Notifications__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ScreenUnpack__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Sidebar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommandCorrecter__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CalculatorButton__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ContractDrafts__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ImageCreator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__InventoryOrganizer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__HeaderMinimizer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__PendingContracts__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CompactUI__ = __webpack_require__(43);






















try {
    browser.storage.local.get("PMMGExtended").then(mainRun, onError);
    console.log("FireFox detected");
}
catch (err) {
    console.log("Chromium detected");
    chrome.storage.local.get(["PMMGExtended"], function (result) {
        mainRun(result);
    });
}
function mainRun(result) {
    if (!result["PMMGExtended"]) {
        result["PMMGExtended"] = {};
    }
    if (!result["PMMGExtended"]["loaded_before"]) {
        console.log("First Time Loading PMMG");
    }
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "pmmg-style";
    style.textContent = __WEBPACK_IMPORTED_MODULE_11__Style__["d" /* PMMGStyle */];
    const doc = document.querySelector("html");
    if (doc) {
        doc.appendChild(style);
    }
    if (!result["PMMGExtended"]["disabled"]) {
        result["PMMGExtended"]["disabled"] = ["ScreenUnpack"];
    }
    if (result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"]) {
        const colors = document.createElement("style");
        colors.type = "text/css";
        colors.id = "pmmg-enhanced-colors";
        colors.textContent = __WEBPACK_IMPORTED_MODULE_11__Style__["b" /* EnhancedColors */];
        if (doc) {
            doc.appendChild(colors);
        }
    }
    else if (result["PMMGExtended"]["color_scheme"] == "icons") {
        const colors = document.createElement("style");
        colors.type = "text/css";
        colors.id = "pmmg-icon-colors";
        colors.textContent = __WEBPACK_IMPORTED_MODULE_11__Style__["c" /* IconStyle */];
        if (doc) {
            doc.appendChild(colors);
        }
    }
    var prices = {};
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["e" /* getPrices */])(prices, result["PMMGExtended"]["webappid"]);
    var burn = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["a" /* getBurn */])(burn, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
    var burnSettings = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["b" /* getBurnSettings */])(burnSettings, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
    var contracts = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["c" /* getContracts */])(contracts, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
    const runner = new __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_7__ShippingAds__["a" /* ShippingAds */](),
        new __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__["a" /* LocalMarketAds */](),
        new __WEBPACK_IMPORTED_MODULE_6__PostLM__["a" /* PostLM */](prices),
        new __WEBPACK_IMPORTED_MODULE_16__ContractDrafts__["a" /* ContractDrafts */](prices),
        new __WEBPACK_IMPORTED_MODULE_3__OrderETAs__["a" /* OrderETAs */](),
        new __WEBPACK_IMPORTED_MODULE_0__FlightETAs__["a" /* FlightETAs */](),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](result["PMMGExtended"]["username"], burn, result["PMMGExtended"]["burn_thresholds"]),
        new __WEBPACK_IMPORTED_MODULE_18__InventoryOrganizer__["a" /* InventoryOrganizer */](result["PMMGExtended"]["username"], burn, result),
        new __WEBPACK_IMPORTED_MODULE_9__Notifications__["a" /* Notifications */](),
        new __WEBPACK_IMPORTED_MODULE_17__ImageCreator__["a" /* ImageCreator */](),
        new __WEBPACK_IMPORTED_MODULE_12__ScreenUnpack__["a" /* ScreenUnpack */](result["PMMGExtended"]["unpack_exceptions"]),
        new __WEBPACK_IMPORTED_MODULE_19__HeaderMinimizer__["a" /* HeaderMinimizer */](result["PMMGExtended"]["minimize_by_default"]),
        new __WEBPACK_IMPORTED_MODULE_14__CommandCorrecter__["a" /* CommandCorrecter */](),
        new __WEBPACK_IMPORTED_MODULE_15__CalculatorButton__["a" /* CalculatorButton */](),
        new __WEBPACK_IMPORTED_MODULE_13__Sidebar__["a" /* Sidebar */](result["PMMGExtended"]["sidebar"]),
        new __WEBPACK_IMPORTED_MODULE_20__PendingContracts__["a" /* PendingContracts */](result["PMMGExtended"]["username"], contracts),
        new __WEBPACK_IMPORTED_MODULE_21__CompactUI__["a" /* CompactUI */](result)
    ], result, burn, burnSettings);
    (function () {
        runner.loop();
    })();
}
function onError(err) {
    console.log(err);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FlightETAs {
    constructor() {
        this.tag = "pb-sfc-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            var currentTime = 0;
            for (var i = 1; i < elements.length; i++) {
                const targetRow = elements[i];
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const duration = Object(__WEBPACK_IMPORTED_MODULE_0__util__["C" /* parseDuration */])(etaData.textContent);
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* convertDurationToETA */])(duration + currentTime);
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(` (${eta})`, this.tag));
                    currentTime += duration;
                }
            }
            const firstRow = elements[0];
            if (!firstRow) {
                return;
            }
            const firstEtaData = firstRow.children[3];
            if (!firstEtaData) {
                return;
            }
            if (firstEtaData.textContent != "") {
                const totalEta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* convertDurationToETA */])(currentTime);
                firstEtaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(` (${totalEta})`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlightETAs;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class LocalMarketAds {
    constructor() {
        this.tag = "pb-lm-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdText);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = element.textContent;
            const matches = text && text.match(/(BUYING|SELLING|CORP)\s(\d+)\s.*\s@\s([\d,.]+)\s[A-Z]+\sfor/);
            if (matches && matches.length > 3) {
                const count = parseInt(matches[2]);
                const totalCents = parseInt(matches[3].replace(/[,.]/g, ''));
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                const perItem = (totalCents / count / 100).toLocaleString(undefined, { maximumFractionDigits: 2 });
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalMarketAds;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__XITHandler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(3);



class ModuleRunner {
    constructor(modules, result, burn, burnSettings) {
        this.modules = modules.map(m => this.moduleToME(m));
        this.xit = new __WEBPACK_IMPORTED_MODULE_0__XITHandler__["a" /* XITHandler */](result, burn, burnSettings, this.modules);
        this.result = result;
        this.updateActiveModules(result);
    }
    updateActiveModules(result) {
        if (result["PMMGExtended"]["disabled"] == undefined) {
            return;
        }
        this.modules.forEach(mp => {
            if (result["PMMGExtended"]["disabled"] && result["PMMGExtended"]["disabled"].includes(mp.name)) {
                mp.enabled = false;
            }
        });
    }
    moduleToME(module) {
        return {
            module,
            name: module.constructor.name,
            friendlyName: __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* FriendlyNames */][module.constructor.name] || module.constructor.name,
            enabled: true,
            count: 0,
            cleanupTime: 0,
            runTime: 0
        };
    }
    loop() {
        this.xit.run();
        if (!this.result["PMMGExtended"]["loaded_before"]) {
            this.result["PMMGExtended"]["loaded_before"] = Object(__WEBPACK_IMPORTED_MODULE_1__util__["G" /* showBuffer */])("XIT START");
            if (this.result["PMMGExtended"]["loaded_before"]) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util__["F" /* setSettings */])(this.result);
            }
        }
        this.modules.map(entry => {
            if (entry.enabled) {
                const t0 = performance.now();
                entry.module.cleanup();
                const cleanupTime = performance.now() - t0;
                const t1 = performance.now();
                entry.module.run();
                const runTime = performance.now() - t1;
                entry.count++;
                entry.cleanupTime += cleanupTime;
                entry.runTime += runTime;
            }
        });
        window.setTimeout(() => this.loop(), 250);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleRunner;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XIT_Start__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__XIT_Settings__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__XIT_Debug__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__XIT_Calculator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__XIT_Repairs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__XIT_Chat__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__XIT_Finances__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__XIT_Burn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__XIT_SheetTable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__XIT_Contracts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__XIT_Web__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__XIT_Inventory__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__XIT_Notes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__XIT_Checklists__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__XIT_Sort__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__XIT_CommandLists__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__XIT_Help__ = __webpack_require__(26);



















const XITPreFunctions = {
    "INV": __WEBPACK_IMPORTED_MODULE_13__XIT_Inventory__["a" /* FIOInv_pre */],
    "DISCORD": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["a" /* Discord_pre */],
    "SHEETS": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["e" /* Sheets_pre */],
    "PROSPERITY": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["c" /* Prosperity_pre */],
    "PRUN": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["b" /* PRuN_pre */],
    "SHEETTABLE": __WEBPACK_IMPORTED_MODULE_10__XIT_SheetTable__["a" /* SheetTable_pre */],
    "FIN": __WEBPACK_IMPORTED_MODULE_8__XIT_Finances__["a" /* Fin_pre */],
    "CHAT": __WEBPACK_IMPORTED_MODULE_7__XIT_Chat__["a" /* Chat_pre */],
    "BURN": __WEBPACK_IMPORTED_MODULE_9__XIT_Burn__["a" /* EnhancedBurn_pre */],
    "SETTINGS": __WEBPACK_IMPORTED_MODULE_3__XIT_Settings__["a" /* Settings */],
    "CONTRACTS": __WEBPACK_IMPORTED_MODULE_11__XIT_Contracts__["a" /* Contracts_pre */],
    "REPAIRS": __WEBPACK_IMPORTED_MODULE_6__XIT_Repairs__["a" /* Repairs_pre */],
    "CALCULATOR": __WEBPACK_IMPORTED_MODULE_5__XIT_Calculator__["a" /* Calculator */],
    "CALC": __WEBPACK_IMPORTED_MODULE_5__XIT_Calculator__["a" /* Calculator */],
    "START": __WEBPACK_IMPORTED_MODULE_2__XIT_Start__["a" /* Start */],
    "DEBUG": __WEBPACK_IMPORTED_MODULE_4__XIT_Debug__["a" /* Debug */],
    "NOTE": __WEBPACK_IMPORTED_MODULE_14__XIT_Notes__["a" /* Notes */],
    "NOTES": __WEBPACK_IMPORTED_MODULE_14__XIT_Notes__["a" /* Notes */],
    "CHECK": __WEBPACK_IMPORTED_MODULE_15__XIT_Checklists__["b" /* Checklists */],
    "CHECKS": __WEBPACK_IMPORTED_MODULE_15__XIT_Checklists__["b" /* Checklists */],
    "CHECKLIST": __WEBPACK_IMPORTED_MODULE_15__XIT_Checklists__["b" /* Checklists */],
    "CHECKLISTS": __WEBPACK_IMPORTED_MODULE_15__XIT_Checklists__["b" /* Checklists */],
    "SORT": __WEBPACK_IMPORTED_MODULE_16__XIT_Sort__["a" /* Sort */],
    "LIST": __WEBPACK_IMPORTED_MODULE_17__XIT_CommandLists__["a" /* CommandLists */],
    "LISTS": __WEBPACK_IMPORTED_MODULE_17__XIT_CommandLists__["a" /* CommandLists */],
    "PRUNPLANNER": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["d" /* PrunPlanner */],
    "PLANNER": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["d" /* PrunPlanner */],
    "WIKI": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["f" /* Wiki */],
    "HELP": __WEBPACK_IMPORTED_MODULE_18__XIT_Help__["a" /* Help */]
};
/* unused harmony export XITPreFunctions */

const XITBufferTitles = {
    "INV": "FIO INVENTORY",
    "DISCORD": "DISCORD SERVER",
    "SHEETS": "GOOGLE SHEETS",
    "PROSPERITY": "PROSPERITY",
    "PRUN": "PRUN-CEPTION",
    "SHEETTABLE": "GOOGLE SHEETS TABLE",
    "FIN": "FINANCIAL OVERVIEW",
    "CHAT": "CHAT",
    "BURN": "ENHANCED BURN",
    "SETTINGS": "PMMG SETTINGS",
    "CONTRACTS": "PENDING CONTRACTS",
    "REPAIRS": "REPAIRS",
    "CALC": "CALCULATOR",
    "CALCULATOR": "CALCULATOR",
    "START": "STARTING WITH PMMG",
    "DEBUG": "DEBUG",
    "NOTE": "NOTE",
    "NOTES": "NOTE",
    "CHECK": "CHECKLIST",
    "CHECKS": "CHECKLIST",
    "CHECKLIST": "CHECKLIST",
    "CHECKLISTS": "CHECKLIST",
    "SORT": "SORTING OPTIONS",
    "LIST": "COMMAND LIST",
    "LISTS": "COMMAND LIST",
    "PRUNPLANNER": "PRUN PLANNER",
    "PLANNER": "PRUN PLANNER",
    "WIKI": "PRUN WIKI",
    "HELP": "PMMG HELP"
};
/* unused harmony export XITBufferTitles */

class XITHandler {
    constructor(result, burn, burnSettings, modules) {
        this.tag = "pb-xit";
        this.burn = burn;
        this.burnSettings = burnSettings;
        this.modules = modules;
        this.result = result;
    }
    cleanup() {
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("XIT");
        if (!buffers)
            return;
        const burn = this.burn;
        const burnSettings = this.burnSettings;
        buffers.forEach(buffer => {
            const tile = (buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTile));
            if (!tile) {
                return;
            }
            if (tile.firstChild && (tile.firstChild.id == "pmmg-load-success" || tile.firstChild.id == "pmmg-no-match")) {
                return;
            }
            const parametersRaw = Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferHeader))[0].textContent;
            if (!parametersRaw)
                return;
            var parameters = [];
            if (parametersRaw.charAt(4) == "1") {
                const keyValues = parametersRaw.slice(4).split(" ");
                keyValues.forEach(key => {
                    parameters.push(key.slice(2));
                    return;
                });
            }
            else {
                parameters = parametersRaw.slice(4).split("_");
            }
            if (!parameters)
                return;
            for (var i = 0; i < parameters.length; i++) {
                parameters[i] = parameters[i].trim();
            }
            if (tile.firstChild && tile.firstChild.id == "pmmg-reload") {
                XITPreFunctions[parameters[0].toUpperCase()](tile.firstChild, parameters, this.result, burn, burnSettings, this.modules);
                return;
            }
            tile.classList.add("xit-tile");
            if (tile.firstChild) {
                tile.firstChild.style.backgroundColor = "#222222";
            }
            const refreshButton = document.createElement("div");
            if (!tile.firstChild || (tile.firstChild && (tile.firstChild.id != "pmmg-no-match"))) {
                if (buffer.getElementsByClassName("refresh").length == 0) {
                    refreshButton.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("⟳"));
                    refreshButton.classList.add("button-upper-right");
                    refreshButton.classList.add(this.tag);
                    refreshButton.style.fontSize = "16px";
                    refreshButton.style.paddingTop = "12px";
                    refreshButton.classList.add("refresh");
                    (buffer.children[3] || buffer.children[2]).insertBefore(refreshButton, (buffer.children[3] || buffer.children[2]).firstChild);
                }
            }
            const contentDiv = document.createElement("div");
            contentDiv.style.height = "100%";
            contentDiv.style.flexGrow = "1";
            tile.appendChild(contentDiv);
            const preFunc = XITPreFunctions[parameters[0].toUpperCase()];
            if (!preFunc) {
                tile.textContent = "Error! No Matching Function!";
                if (!tile.firstChild) {
                    return;
                }
                tile.firstChild.id = "pmmg-no-match";
            }
            else {
                Array.from(buffer.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = XITBufferTitles[parameters[0].toUpperCase()];
                const modules = this.modules;
                var result = this.result;
                refreshButton.addEventListener("click", function () { preFunc(contentDiv, parameters, result, burn, burnSettings, modules, true); });
                tile.firstChild.id = "pmmg-load-success";
                preFunc(contentDiv, parameters, this.result, burn, burnSettings, modules);
            }
            return;
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = XITHandler;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Start;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function Start(tile) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    tile.style.fontSize = "12px";
    tile.style.paddingLeft = "2px";
    const welcome = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Thank you for using PMMG Extended!");
    welcome.classList.add("title");
    welcome.style.paddingLeft = "0";
    tile.appendChild(welcome);
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("This is a short tutorial on how to get the most out of the extension."));
    const websiteLinkDiv = document.createElement("div");
    websiteLinkDiv.style.paddingTop = "20px";
    tile.appendChild(websiteLinkDiv);
    websiteLinkDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Details on what PMMG offers can be found here: "));
    const websiteLink = document.createElement("a");
    websiteLink.href = "https://sites.google.com/view/pmmgextended/home?authuser=0";
    websiteLink.target = "_blank";
    websiteLink.style.display = "inline-block";
    websiteLink.classList.add("link");
    websiteLink.textContent = "PMMG Extended";
    websiteLinkDiv.appendChild(websiteLink);
    const settingsDiv = document.createElement("div");
    tile.appendChild(settingsDiv);
    settingsDiv.style.paddingTop = "20px";
    settingsDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Start by opening a new buffer and entering "));
    const settingsLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])("XIT SETTINGS", "XIT SETTINGS");
    settingsLink.style.display = "inline-block";
    settingsDiv.appendChild(settingsLink);
    const fioDiv = document.createElement("div");
    tile.appendChild(fioDiv);
    fioDiv.style.paddingTop = "20px";
    fioDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("FIO is a browser extension that gathers data from your game. PMMG Extended uses that data to display useful information. You can learn more about installing FIO here: "));
    const fioLink = document.createElement("a");
    fioLink.href = "https://fio.fnar.net/";
    fioLink.target = "_blank";
    fioLink.style.display = "inline-block";
    fioLink.classList.add("link");
    fioLink.textContent = "FIO Website";
    fioDiv.appendChild(fioLink);
    const fioDiv2 = document.createElement("div");
    tile.appendChild(fioDiv2);
    fioDiv2.style.paddingTop = "20px";
    fioDiv2.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("If you already have a FIO account, add your username and API Key to the text boxes on XIT SETTINGS. You can generate an API Key "));
    const fioLink2 = document.createElement("a");
    fioLink2.href = "https://fio.fnar.net/settings";
    fioLink2.target = "_blank";
    fioLink2.style.display = "inline-block";
    fioLink2.classList.add("link");
    fioLink2.textContent = "here.";
    fioDiv2.appendChild(fioLink2);
    const webAppDiv = document.createElement("div");
    tile.appendChild(webAppDiv);
    webAppDiv.style.paddingTop = "20px";
    webAppDiv.style.paddingBottom = "20px";
    webAppDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("If your corporation has a web app (AHI, FOWL, KAWA), enter that in the Web App ID field."));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("You can explore other settings to enable or disable features, change the color scheme, and customize the left sidebar. Contact PiBoy314 in game or on Discord if you have questions."));
    return;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Settings;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function Settings(tile, parameters, result, fullBurn, burnSettings, modules) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const warningDiv = document.createElement("div");
    tile.appendChild(warningDiv);
    warningDiv.style.marginTop = "4px";
    warningDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Changes require a refresh to take effect."));
    const helpDiv = document.createElement("div");
    tile.appendChild(helpDiv);
    helpDiv.style.marginTop = "4px";
    helpDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("See a full list of features on "));
    const websiteLink = document.createElement("a");
    websiteLink.href = "https://sites.google.com/view/pmmgextended/features?authuser=0";
    websiteLink.target = "_blank";
    websiteLink.style.display = "inline-block";
    websiteLink.classList.add("link");
    websiteLink.textContent = "PMMG's Website";
    helpDiv.appendChild(websiteLink);
    const authenticationHeader = document.createElement('h3');
    authenticationHeader.appendChild(document.createTextNode("Authentication Settings"));
    authenticationHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Enter your FIO username and API key, as well as a corporate web app ID", "right"));
    authenticationHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(authenticationHeader);
    const usernameDiv = document.createElement("div");
    const usernameLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("FIO Username: ");
    const usernameInput = document.createElement("input");
    usernameInput.value = result["PMMGExtended"]["username"] || "";
    usernameInput.addEventListener("input", function () {
        result["PMMGExtended"]["username"] = !usernameInput.value || usernameInput.value == "" ? undefined : usernameInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    usernameInput.classList.add("input-text");
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);
    tile.appendChild(usernameDiv);
    const apiDiv = document.createElement("div");
    const apiLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("FIO API Key: ");
    apiLabel.style.minWidth = "77px";
    apiLabel.style.display = "inline-block";
    const apiInput = document.createElement("input");
    apiInput.value = result["PMMGExtended"]["apikey"] || "";
    apiInput.addEventListener("input", function () {
        result["PMMGExtended"]["apikey"] = !apiInput.value || apiInput.value == "" ? undefined : apiInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    apiInput.classList.add("input-text");
    apiInput.type = "password";
    apiDiv.appendChild(apiLabel);
    apiDiv.appendChild(apiInput);
    tile.appendChild(apiDiv);
    const webDiv = document.createElement("div");
    const webLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Web App ID: ");
    webLabel.style.minWidth = "77px";
    webLabel.style.display = "inline-block";
    const webInput = document.createElement("input");
    webInput.value = result["PMMGExtended"]["webappid"] || "";
    webInput.addEventListener("input", function () {
        result["PMMGExtended"]["webappid"] = !webInput.value || webInput.value == "" ? undefined : webInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    webInput.classList.add("input-text");
    webDiv.appendChild(webLabel);
    webDiv.appendChild(webInput);
    tile.appendChild(webDiv);
    const enhancedColorHeader = document.createElement('h3');
    enhancedColorHeader.appendChild(document.createTextNode("Color Scheme"));
    enhancedColorHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Select a color scheme to customize material icons.", "right"));
    enhancedColorHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(enhancedColorHeader);
    const colorDiv = document.createElement("div");
    const colorLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Color Scheme:");
    colorLabel.style.marginBottom = "4px";
    colorDiv.appendChild(colorLabel);
    const colorSelect = document.createElement("select");
    colorSelect.name = "colors-select";
    colorSelect.id = "colors-select";
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createSelectOption */])("Enhanced", "enhanced"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createSelectOption */])("Icons", "icons"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createSelectOption */])("Default", "default"));
    colorSelect.classList.add("select");
    colorSelect.style.marginLeft = "4px";
    if (result["PMMGExtended"]["color_scheme"] == "enhanced" || !result["PMMGExtended"]["color_scheme"]) {
        colorSelect.children[0].selected = true;
    }
    else if (result["PMMGExtended"]["color_scheme"] == "icons") {
        colorSelect.children[1].selected = true;
    }
    else {
        colorSelect.children[2].selected = true;
    }
    colorSelect.style.display = "inline-block";
    colorSelect.addEventListener("change", function () {
        result["PMMGExtended"]["color_scheme"] = colorSelect.selectedOptions[0].value || undefined;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    colorDiv.appendChild(colorSelect);
    tile.appendChild(colorDiv);
    const finDiv = document.createElement("div");
    const finLabel = document.createElement('h3');
    finLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Enable Financial Recording"));
    finLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Record financial info daily. Open XIT FIN for more info.", "right"));
    finLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    finLabel.style.marginBottom = "4px";
    finDiv.appendChild(finLabel);
    const finCheckbox = document.createElement("input");
    finCheckbox.type = "checkbox";
    finCheckbox.checked = result["PMMGExtended"]["recording_financials"];
    finDiv.appendChild(finCheckbox);
    tile.appendChild(finDiv);
    finCheckbox.addEventListener("click", function () {
        result["PMMGExtended"]["recording_financials"] = finCheckbox.checked;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    const minDiv = document.createElement("div");
    const minLabel = document.createElement('h3');
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Minimize Headers by Default"));
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Minimized contract and CX headers by default.", "right"));
    minLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    minLabel.style.marginBottom = "4px";
    minDiv.appendChild(minLabel);
    const minCheckbox = document.createElement("input");
    minCheckbox.type = "checkbox";
    minCheckbox.checked = result["PMMGExtended"]["minimize_by_default"];
    minDiv.appendChild(minCheckbox);
    tile.appendChild(minDiv);
    minCheckbox.addEventListener("click", function () {
        result["PMMGExtended"]["minimize_by_default"] = minCheckbox.checked;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    const burnDiv = document.createElement("div");
    const burnLabel = document.createElement('h3');
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Burn Settings"));
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Set the thresholds for yellow and red consumable levels in burn tiles (in days).", "right"));
    burnLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    burnLabel.style.marginBottom = "4px";
    burnDiv.appendChild(burnLabel);
    if (!result["PMMGExtended"]["burn_thresholds"]) {
        result["PMMGExtended"]["burn_thresholds"] = [3, 7];
    }
    const setDiv = document.createElement("div");
    burnDiv.appendChild(setDiv);
    setDiv.style.display = "flex";
    const redDiv = document.createElement("div");
    setDiv.appendChild(redDiv);
    redDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Red Threshold: "));
    const redIn = document.createElement("input");
    redIn.type = "number";
    redIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3])[0].toLocaleString(undefined, { maximumFractionDigits: 0 });
    redDiv.appendChild(redIn);
    redIn.classList.add("input-text");
    redIn.style.width = "50px";
    redIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][0] = parseFloat(redIn.value);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    const yelDiv = document.createElement("div");
    setDiv.appendChild(yelDiv);
    yelDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Yellow Threshold: "));
    const yelIn = document.createElement("input");
    yelIn.type = "number";
    yelIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1].toLocaleString(undefined, { maximumFractionDigits: 0 });
    yelDiv.appendChild(yelIn);
    yelIn.classList.add("input-text");
    yelIn.style.width = "50px";
    yelIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][1] = parseFloat(yelIn.value);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    tile.appendChild(burnDiv);
    const hotkeyHeader = document.createElement('h3');
    hotkeyHeader.appendChild(document.createTextNode("Left Sidebar Buttons"));
    hotkeyHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Create hotkeys on the left sidebar. The first value is what will be displayed, the second is the command.", "right"));
    hotkeyHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(hotkeyHeader);
    const hotkeyInputDiv = document.createElement("div");
    tile.appendChild(hotkeyInputDiv);
    if (!result["PMMGExtended"]["sidebar"]) {
        result["PMMGExtended"]["sidebar"] = [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]];
    }
    result["PMMGExtended"]["sidebar"].forEach(hotkey => {
        const div = createInputPair(hotkey, result, hotkeyInputDiv);
        if (div != null) {
            hotkeyInputDiv.appendChild(div);
        }
        return;
    });
    const addButton = makePushButton("+", function () {
        const div = createInputPair([[], []], result, hotkeyInputDiv);
        if (div != null) {
            hotkeyInputDiv.appendChild(div);
        }
    }, __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
    addButton.style.marginLeft = "4px";
    addButton.style.marginBottom = "4px";
    tile.appendChild(addButton);
    const screenUnpackHeader = document.createElement('h3');
    screenUnpackHeader.appendChild(document.createTextNode("Screen Unpack Exclusions"));
    screenUnpackHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("List screens to be excluded from screen unpack. Separate screens with a comma.", "right"));
    screenUnpackHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(screenUnpackHeader);
    const notifDiv = document.createElement("div");
    tile.appendChild(notifDiv);
    notifDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("List screen names separated by commas, no spaces."));
    const exclusionInput = document.createElement("input");
    exclusionInput.classList.add("input-text");
    exclusionInput.value = result["PMMGExtended"]["unpack_exceptions"] == undefined ? "" : result["PMMGExtended"]["unpack_exceptions"].join(",");
    exclusionInput.addEventListener("input", function () {
        result["PMMGExtended"]["unpack_exceptions"] = exclusionInput.value.split(",");
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    tile.appendChild(exclusionInput);
    const moduleSettingsHeader = document.createElement('h3');
    moduleSettingsHeader.appendChild(document.createTextNode("Toggle Features"));
    moduleSettingsHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createToolTip */])("Toggle features on and off. The yellow X cleans up any stray elements.", "right"));
    moduleSettingsHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(moduleSettingsHeader);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionContent);
    tile.appendChild(content);
    modules.forEach(mp => {
        const line = document.createElement('div');
        line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FontsRegular));
        content.appendChild(line);
        line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(mp.friendlyName));
        content.appendChild(line);
        const right = document.createElement("span");
        right.style.flexGrow = "1";
        right.style.textAlign = "right";
        line.appendChild(right);
        if (result["PMMGExtended"]["disabled"] == undefined) {
            result["PMMGExtended"]["disabled"] = [];
        }
        const toggle = makeToggleButton("On", "Off", () => {
            mp.enabled = !mp.enabled;
            if (result["PMMGExtended"]["disabled"].includes(mp.name)) {
                if (mp.enabled) {
                    for (var i = 0; i < result["PMMGExtended"]["disabled"].length; i++) {
                        if (result["PMMGExtended"]["disabled"][i] == mp.name) {
                            result["PMMGExtended"]["disabled"].splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            else {
                if (!mp.enabled) {
                    result["PMMGExtended"]["disabled"].push(mp.name);
                }
            }
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        }, mp.enabled);
        if (result["PMMGExtended"]["disabled"].includes(mp.name)) {
            toggle.setAttribute("data-state", "false");
            mp.enabled = false;
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
            toggle.innerText = "Off";
        }
        right.appendChild(toggle);
        const cleanup = makePushButton("x", () => mp.module.cleanup(true));
        cleanup.style.marginRight = "8px";
        right.appendChild(cleanup);
        return;
    });
    const importHeader = document.createElement('h3');
    importHeader.appendChild(document.createTextNode("Import/Export Settings"));
    importHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(importHeader);
    const importDiv = document.createElement("div");
    const importButton = document.createElement("button");
    importButton.textContent = "Import Settings";
    importButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    importButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    importButton.style.marginLeft = "4px";
    importButton.style.marginBottom = "4px";
    importDiv.appendChild(importButton);
    const importFileInput = document.createElement("input");
    importFileInput.type = "file";
    importFileInput.accept = ".json";
    importFileInput.style.display = "none";
    importDiv.appendChild(importFileInput);
    importButton.addEventListener("click", function () {
        importFileInput.click();
        return;
    });
    const errorTextBox = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Error Loading File!");
    errorTextBox.style.display = "none";
    importDiv.appendChild(errorTextBox);
    importFileInput.addEventListener("change", function () {
        if (!this.files) {
            return;
        }
        const file = this.files[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            if (!e || !e.target) {
                return;
            }
            try {
                const fileOutput = JSON.parse(e.target.result);
                const exclude = ["username", "apikey", "webappid"];
                Object.keys(fileOutput).forEach(key => {
                    if (!exclude.includes(key)) {
                        result["PMMGExtended"][key] = fileOutput[key];
                    }
                });
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
                errorTextBox.style.display = "none";
            }
            catch (ex) {
                console.log("PMMG: Error encountered processing file!");
                errorTextBox.style.display = "inline-block";
            }
        };
        reader.readAsText(file);
        return;
    });
    const exportButton = document.createElement("button");
    exportButton.textContent = "Export Settings";
    exportButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    exportButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    exportButton.style.marginLeft = "4px";
    exportButton.style.marginBottom = "4px";
    importDiv.appendChild(exportButton);
    exportButton.addEventListener("click", function () {
        const output = {};
        const exclude = ["username", "apikey", "webappid"];
        Object.keys(result["PMMGExtended"]).forEach(key => {
            if (!exclude.includes(key)) {
                output[key] = result["PMMGExtended"][key];
            }
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* downloadFile */])(output, "pmmg-settings" + Date.now().toString() + ".json");
    });
    tile.appendChild(importDiv);
    const importNoteDiv = document.createElement("div");
    const importNoteButton = document.createElement("button");
    importNoteButton.textContent = "Import Notes";
    importNoteButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    importNoteButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    importNoteButton.style.marginLeft = "4px";
    importNoteButton.style.marginBottom = "4px";
    importNoteDiv.appendChild(importNoteButton);
    const importNoteFileInput = document.createElement("input");
    importNoteFileInput.type = "file";
    importNoteFileInput.accept = ".json";
    importNoteFileInput.style.display = "none";
    importNoteDiv.appendChild(importNoteFileInput);
    importNoteButton.addEventListener("click", function () {
        importNoteFileInput.click();
        return;
    });
    const errorNoteTextBox = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Error Loading File!");
    errorNoteTextBox.style.display = "none";
    importNoteDiv.appendChild(errorNoteTextBox);
    importNoteFileInput.addEventListener("change", function () {
        if (!this.files) {
            return;
        }
        const file = this.files[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            if (!e || !e.target) {
                return;
            }
            try {
                const fileOutput = JSON.parse(e.target.result);
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(fileOutput);
                errorNoteTextBox.style.display = "none";
            }
            catch (ex) {
                console.log("PMMG: Error encountered processing file!");
                errorNoteTextBox.style.display = "inline-block";
            }
        };
        reader.readAsText(file);
        return;
    });
    const exportNoteButton = document.createElement("button");
    exportNoteButton.textContent = "Export Notes";
    exportNoteButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    exportNoteButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    exportNoteButton.style.marginLeft = "4px";
    exportNoteButton.style.marginBottom = "4px";
    importNoteDiv.appendChild(exportNoteButton);
    exportNoteButton.addEventListener("click", function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", __WEBPACK_IMPORTED_MODULE_0__util__["r" /* downloadFile */], "pmmg-notes" + Date.now().toString() + ".json");
    });
    tile.appendChild(importNoteDiv);
    return [parameters, fullBurn, burnSettings];
}
function createInputPair(hotkey, result, fullDiv) {
    if (hotkey.length != 2) {
        return null;
    }
    const div = document.createElement("div");
    const displayedValue = document.createElement("input");
    displayedValue.classList.add("input-text");
    displayedValue.style.display = "inline-block";
    div.appendChild(displayedValue);
    const command = document.createElement("input");
    command.classList.add("input-text");
    command.style.display = "inline-block";
    div.appendChild(command);
    const remove = makePushButton("X", function () {
        displayedValue.value = "";
        command.value = "";
        displayedValue.dispatchEvent(new Event("input"));
        Array.from(div.children).forEach(elem => { div.removeChild(elem); return; });
    }, __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonDanger);
    remove.style.display = "inline-block";
    div.appendChild(remove);
    displayedValue.value = hotkey[0];
    command.value = hotkey[1];
    displayedValue.addEventListener("input", function () {
        var hotkeys = [];
        Array.from(fullDiv.children).forEach(option => {
            if (option.children[0] != undefined && option.children[1] != undefined && option.children[0].value != "" && option.children[0].value != undefined && option.children[1].value != "" && option.children[1].value != undefined) {
                hotkeys.push([option.children[0].value, option.children[1].value]);
            }
            return;
        });
        result["PMMGExtended"]["sidebar"] = hotkeys;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    command.addEventListener("input", function () {
        var hotkeys = [];
        Array.from(fullDiv.children).forEach(option => {
            if (option.children[0] != undefined && option.children[1] != undefined && option.children[0].value != "" && option.children[0].value != undefined && option.children[1].value != "" && option.children[1].value != undefined) {
                hotkeys.push([option.children[0].value, option.children[1].value]);
            }
            return;
        });
        result["PMMGExtended"]["sidebar"] = hotkeys;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    });
    return div;
}
function makePushButton(text, f, style = __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary) {
    const button = document.createElement('button');
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    button.classList.add(...style);
    button.onclick = f;
    button.innerText = text;
    return button;
}
function makeToggleButton(on, off, f, state = false) {
    const toggle = document.createElement('button');
    toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    const setLook = (s) => {
        toggle.innerText = s ? on : off;
        if (s) {
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
        }
        else {
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Debug;
/* unused harmony export Debug_post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function Debug(tile, parameters, result, fullBurn, burnSettings) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const downloadButtons = document.createElement("div");
    tile.appendChild(downloadButtons);
    downloadButtons.appendChild(createDownloadButton(result["PMMGExtended"], "Download Full Settings", "pmmg-settings" + Date.now().toString() + ".json"));
    downloadButtons.appendChild(createDownloadButton(fullBurn[result["PMMGExtended"]["username"]], "Download Burn", "pmmg-burn" + Date.now().toString() + ".json"));
    downloadButtons.appendChild(createDownloadButton(burnSettings, "Download Burn Settings", "pmmg-burn-settings" + Date.now().toString() + ".json"));
    const endpointLabel = document.createElement("div");
    endpointLabel.textContent = "Get FIO Endpoint (ex: /infrastructure/Proxion)";
    endpointLabel.style.display = "block";
    endpointLabel.style.marginLeft = "4px";
    downloadButtons.appendChild(endpointLabel);
    const endpointInput = document.createElement("input");
    endpointInput.classList.add("input-text");
    endpointInput.style.display = "block";
    downloadButtons.appendChild(endpointInput);
    const endpointButton = document.createElement("button");
    endpointButton.textContent = "Download FIO Endpoint";
    endpointButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    endpointButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    endpointButton.style.marginLeft = "4px";
    endpointButton.style.marginBottom = "4px";
    endpointButton.style.display = "block";
    endpointButton.addEventListener("click", function () {
        const url = "https://rest.fnar.net" + (endpointInput.value.charAt(0) == "/" ? "" : "/") + endpointInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, Debug_post, url, "GET", ["Authorization", result["PMMGExtended"]["apikey"]], null);
    });
    downloadButtons.appendChild(endpointButton);
    return parameters;
}
function Debug_post(tile, parameters, jsondata) {
    try {
        console.log(JSON.parse(jsondata));
    }
    catch (ex) { }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* downloadFile */])(jsondata, "fio-endpoint" + Date.now().toString() + ".json", false);
    return [tile, parameters];
}
function createDownloadButton(data, buttonName, fileName) {
    const downloadButton = document.createElement("button");
    downloadButton.textContent = buttonName;
    downloadButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    downloadButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    downloadButton.style.marginLeft = "4px";
    downloadButton.style.marginBottom = "4px";
    downloadButton.style.display = "block";
    downloadButton.addEventListener("click", function () {
        console.log(data);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* downloadFile */])(data, fileName);
    });
    return downloadButton;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Calculator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function Calculator(tile) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const calcDiv = document.createElement("div");
    tile.appendChild(calcDiv);
    tile.style.display = "flex";
    tile.style.flexDirection = "row";
    calcDiv.style.maxHeight = "400px";
    const output = document.createElement("input");
    output.classList.add("input-text");
    output.style.fontSize = "20px";
    output.readOnly = true;
    output.style.textAlign = "right";
    calcDiv.style.display = "flex";
    calcDiv.style.flexDirection = "column";
    calcDiv.style.alignItems = "center";
    calcDiv.style.width = "60%";
    calcDiv.style.minWidth = "180px";
    const historyDiv = document.createElement("div");
    tile.appendChild(historyDiv);
    historyDiv.style.width = "35%";
    historyDiv.style.marginTop = "10px";
    historyDiv.style.display = "block";
    historyDiv.style.maxHeight = "195px";
    historyDiv.style.backgroundColor = "rgb(35, 40, 43)";
    historyDiv.style.borderColor = "rgb(43,72,90)";
    historyDiv.style.borderWidth = "1px";
    historyDiv.style.borderStyle = "solid";
    const historyTable = document.createElement("table");
    historyDiv.appendChild(historyTable);
    const historyTableBody = document.createElement("tbody");
    historyTable.appendChild(historyTableBody);
    output.style.display = "block";
    output.style.width = "90%";
    output.style.height = "36px";
    output.style.margin = "10px";
    output.style.cursor = "default";
    calcDiv.appendChild(output);
    var currentString = "";
    var prevValue = null;
    var currentOperation = null;
    var clearOnNext = false;
    var doubleClear = false;
    const keypad = document.createElement("div");
    calcDiv.appendChild(keypad);
    keypad.style.width = "95%";
    keypad.style.display = "grid";
    keypad.style.gridTemplateColumns = "repeat(4, 1fr)";
    const layout = [[7, null], [8, null], [9, null], ["÷", "#3fa2de"], [4, null], [5, null], [6, null], ["x", "#3fa2de"], [1, null], [2, null], [3, null], ["-", "#3fa2de"], [0, null], [".", null], ["±", null], ["+", "#3fa2de"]];
    layout.forEach(opt => {
        const button = document.createElement("button");
        button.classList.add("refresh-button");
        button.style.fontSize = "20px";
        button.textContent = (opt[0] == 0 ? "0" : opt[0] || "").toString();
        if (opt[1] != null) {
            button.style.backgroundColor = opt[1];
        }
        keypad.appendChild(button);
        button.onclick = function () {
            if (opt[0] == "+" || opt[0] == "-" || opt[0] == "x" || opt[0] == "÷") {
                if (currentOperation != null) {
                    currentString = calculate(prevValue, currentString, currentOperation);
                    currentOperation = null;
                    prevValue = null;
                }
                currentOperation = opt[0];
                clearOnNext = true;
                output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
            }
            else if (opt[0] == "±") {
                if (currentString.toString().charAt(0) == "-") {
                    currentString = currentString.substring(1);
                }
                else {
                    currentString = "-" + currentString;
                }
                output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
            }
            else {
                if (clearOnNext) {
                    prevValue = parseFloat(currentString);
                    currentString = "";
                    clearOnNext = false;
                }
                currentString += (opt[0] == 0 ? "0" : opt[0] || "").toString();
                output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
            }
            doubleClear = false;
        };
        return;
    });
    const bottomDiv = document.createElement("div");
    calcDiv.appendChild(bottomDiv);
    bottomDiv.style.width = "95%";
    bottomDiv.style.display = "grid";
    bottomDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
    const clear = document.createElement("button");
    bottomDiv.appendChild(clear);
    clear.textContent = "Clear";
    clear.classList.add("refresh-button");
    clear.style.fontSize = "20px";
    clear.style.backgroundColor = "rgb(217, 83, 79)";
    clear.onclick = function () {
        currentString = "";
        output.value = currentString;
        currentOperation = null;
        prevValue = null;
        clearOnNext = false;
        if (doubleClear) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(historyTableBody);
        }
        doubleClear = true;
    };
    const enter = document.createElement("button");
    enter.onclick = function () {
        if (currentOperation != null) {
            currentString = calculate(prevValue, currentString, currentOperation);
            currentOperation = null;
            prevValue = null;
        }
        output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = output.value;
        tr.appendChild(td);
        if (historyTableBody.children.length > 11) {
            historyTableBody.removeChild(historyTableBody.children[historyTableBody.children.length - 1]);
        }
        if (historyTableBody.children.length > 0) {
            historyTableBody.insertBefore(tr, historyTableBody.firstChild);
        }
        else {
            historyTableBody.appendChild(tr);
        }
        doubleClear = false;
    };
    bottomDiv.appendChild(enter);
    enter.textContent = "Enter";
    enter.classList.add("refresh-button");
    enter.style.fontSize = "20px";
    enter.style.backgroundColor = "#5cb85c";
    tile.addEventListener("keydown", (e) => {
        if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0" || e.key === ".") {
            if (clearOnNext) {
                prevValue = parseFloat(currentString);
                currentString = "";
                clearOnNext = false;
            }
            currentString += e.key;
            output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
        }
        else if (e.key === "+" || e.key === "-" || e.key === "x" || e.key === "*" || e.key === "/") {
            if (currentOperation != null) {
                currentString = calculate(prevValue, currentString, currentOperation);
                currentOperation = null;
                prevValue = null;
            }
            currentOperation = e.key;
            clearOnNext = true;
            output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
        }
        else if (e.key === "Enter" || e.key === "=") {
            if (currentOperation != null) {
                currentString = calculate(prevValue, currentString, currentOperation);
                currentOperation = null;
                prevValue = null;
            }
            output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.textContent = output.value;
            tr.appendChild(td);
            if (historyTableBody.children.length > 11) {
                historyTableBody.removeChild(historyTableBody.children[historyTableBody.children.length - 1]);
            }
            if (historyTableBody.children.length > 0) {
                historyTableBody.insertBefore(tr, historyTableBody.firstChild);
            }
            else {
                historyTableBody.appendChild(tr);
            }
            doubleClear = false;
        }
        else if (e.key === "Escape") {
            currentString = "";
            output.value = currentString;
            currentOperation = null;
            prevValue = null;
            clearOnNext = false;
            if (doubleClear) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(historyTableBody);
            }
            doubleClear = true;
        }
        else if (e.key === "Backspace") {
            if (currentString.length > 0) {
                currentString = currentString.slice(0, -1);
                output.value = parseFloat(currentString).toLocaleString(undefined, { maximumFractionDigits: 12 });
            }
        }
    });
    return;
}
function calculate(prevValue, currentString, currentOperation) {
    currentString = parseFloat(currentString);
    if (currentOperation == "+") {
        return prevValue + currentString;
    }
    else if (currentOperation == "-") {
        return prevValue - currentString;
    }
    else if (currentOperation == "x" || currentOperation == "*") {
        return prevValue * currentString;
    }
    else if (currentOperation == "÷" || currentOperation == "/") {
        return prevValue / currentString;
    }
    else {
        return 0;
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Repairs_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function Repairs_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (!result["PMMGExtended"]["username"]) {
        tile.textContent = "Error! Missing Username";
        return;
    }
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! Missing API Key";
        return;
    }
    if (!parameters[parameters.length - 1]["PMMGExtended"]) {
        parameters.push(result);
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, Repairs_post, "https://rest.fnar.net/sites/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
    return;
}
function Repairs_post(tile, parameters, jsondata) {
    const result = parameters[parameters.length - 1];
    if (jsondata == undefined || jsondata == null) {
        return;
    }
    var repairData;
    try {
        repairData = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        tile.textContent = "Error! Could Not Load Data!";
        return;
    }
    if (parameters.length < 3) {
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("All Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Buildings");
        buiTitle.classList.add("title");
        buiTitle.style.paddingTop = "5px";
        buiTitle.style.paddingBottom = "2px";
        tile.appendChild(buiTitle);
        const table = document.createElement("table");
        const head = document.createElement("thead");
        const hr = document.createElement("tr");
        head.appendChild(hr);
        table.appendChild(head);
        tile.appendChild(table);
        for (let t of ["Ticker", "Planet", "Age", "Condition"]) {
            const header = document.createElement("th");
            header.textContent = t;
            header.style.paddingTop = "0";
            hr.appendChild(header);
        }
        var buildings = [];
        repairData.forEach(site => {
            site["Buildings"].forEach(build => {
                buildings.push([site["PlanetName"], build]);
                return;
            });
            return;
        });
        buildings.sort(globalBuildingSort);
        const body = document.createElement("tbody");
        table.appendChild(body);
        generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput);
        thresholdInput.addEventListener("input", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(body);
            generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput);
            result["PMMGExtended"]["repair_threshold"] = thresholdInput.value || "70";
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        });
    }
    else {
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(parameters[1] + " Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        var siteData = undefined;
        repairData.forEach(site => {
            if (site["PlanetName"].toUpperCase() == parameters[1].toUpperCase() || site["PlanetIdentifier"].toUpperCase() == parameters[1].toUpperCase()) {
                siteData = site;
            }
            return;
        });
        if (siteData == undefined) {
            return;
        }
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Buildings");
        buiTitle.classList.add("title");
        buiTitle.style.paddingTop = "5px";
        buiTitle.style.paddingBottom = "2px";
        tile.appendChild(buiTitle);
        const table = document.createElement("table");
        const head = document.createElement("thead");
        const hr = document.createElement("tr");
        head.appendChild(hr);
        table.appendChild(head);
        tile.appendChild(table);
        for (let t of ["Ticker", "Age", "Condition"]) {
            const header = document.createElement("th");
            header.textContent = t;
            header.style.paddingTop = "0";
            hr.appendChild(header);
        }
        siteData["Buildings"].sort(buildingSort);
        const body = document.createElement("tbody");
        table.appendChild(body);
        generateRepairScreen(body, matDiv, siteData, thresholdInput);
        thresholdInput.addEventListener("input", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(body);
            generateRepairScreen(body, matDiv, siteData, thresholdInput);
            result["PMMGExtended"]["repair_threshold"] = thresholdInput.value || "70";
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        });
    }
    return;
}
function generateRepairScreen(body, matDiv, siteData, thresholdInput) {
    const nonProd = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];
    const materials = {};
    siteData["Buildings"].forEach(building => {
        const row = document.createElement("tr");
        body.appendChild(row);
        if (nonProd.includes(building["BuildingTicker"])) {
            return;
        }
        const date = (((new Date()).getTime() - (building["BuildingLastRepair"] || building["BuildingCreated"])) / 86400000);
        if (date < parseFloat(thresholdInput.value)) {
            return;
        }
        building["RepairMaterials"].forEach(mat => {
            if (materials[mat["MaterialTicker"]] == undefined) {
                materials[mat["MaterialTicker"]] = mat["MaterialAmount"];
            }
            else {
                materials[mat["MaterialTicker"]] += mat["MaterialAmount"];
            }
            return;
        });
        var rowData = [building["BuildingTicker"], date.toLocaleString(undefined, { maximumFractionDigits: 1 }), (building["Condition"] * 100).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "%"];
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(point));
        }
        return;
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(matDiv);
    matDiv.style.maxWidth = "200px";
    const table = document.createElement("table");
    matDiv.appendChild(table);
    const head = document.createElement("thead");
    const hr = document.createElement("tr");
    head.appendChild(hr);
    table.appendChild(head);
    for (let t of ["Material", "Amount"]) {
        const header = document.createElement("th");
        header.textContent = t;
        header.style.paddingTop = "0";
        hr.appendChild(header);
    }
    const mbody = document.createElement("tbody");
    table.appendChild(mbody);
    Object.keys(materials).sort().forEach(mat => {
        const row = document.createElement("tr");
        mbody.appendChild(row);
        var rowData = [mat, materials[mat].toLocaleString(undefined)];
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(point));
        }
        return;
    });
    return;
}
function generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput) {
    const nonProd = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];
    const materials = {};
    buildings.forEach(building => {
        const row = document.createElement("tr");
        body.appendChild(row);
        if (nonProd.includes(building[1]["BuildingTicker"])) {
            return;
        }
        const date = (((new Date()).getTime() - (building[1]["BuildingLastRepair"] || building[1]["BuildingCreated"])) / 86400000);
        if (date < parseFloat(thresholdInput.value)) {
            return;
        }
        building[1]["RepairMaterials"].forEach(mat => {
            if (materials[mat["MaterialTicker"]] == undefined) {
                materials[mat["MaterialTicker"]] = mat["MaterialAmount"];
            }
            else {
                materials[mat["MaterialTicker"]] += mat["MaterialAmount"];
            }
        });
        var rowData = [building[1]["BuildingTicker"], building[0], date.toLocaleString(undefined, { maximumFractionDigits: 1 }), (building[1]["Condition"] * 100).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "%"];
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(point));
        }
        return;
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(matDiv);
    matDiv.style.maxWidth = "200px";
    const table = document.createElement("table");
    matDiv.appendChild(table);
    const head = document.createElement("thead");
    const hr = document.createElement("tr");
    head.appendChild(hr);
    table.appendChild(head);
    for (let t of ["Material", "Amount"]) {
        const header = document.createElement("th");
        header.textContent = t;
        header.style.paddingTop = "0";
        hr.appendChild(header);
    }
    const mbody = document.createElement("tbody");
    table.appendChild(mbody);
    Object.keys(materials).sort().forEach(mat => {
        const row = document.createElement("tr");
        mbody.appendChild(row);
        var rowData = [mat, materials[mat].toLocaleString(undefined)];
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(point));
        }
        return;
    });
    return;
}
function buildingSort(a, b) {
    return a["Condition"] > b["Condition"] ? 1 : -1;
}
function globalBuildingSort(a, b) {
    return a[1]["Condition"] > b[1]["Condition"] ? 1 : -1;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Chat_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function Chat_pre(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, Chat_post, "https://rest.fnar.net/chat/display/" + parameters[1], "GET", undefined, undefined);
    return;
}
function Chat_post(chatDiv, parameters, jsondata) {
    if (jsondata == undefined || jsondata == null) {
        return;
    }
    var chatData;
    try {
        chatData = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        chatDiv.textContent = "Error! Could Not Load Data!";
        return;
    }
    const titleDiv = document.createElement("div");
    titleDiv.textContent = parameters[1] + " Global Site Owners";
    titleDiv.classList.add("title");
    chatDiv.appendChild(titleDiv);
    chatData.forEach(chat => {
        const chatLine = document.createElement("div");
        chatLine.classList.add("chat-line");
        chatDiv.appendChild(chatLine);
        const timeDateDiv = document.createElement("div");
        const dateDiv = document.createElement("div");
        timeDateDiv.appendChild(dateDiv);
        dateDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleDateString(undefined, { month: "2-digit", day: "2-digit" });
        dateDiv.classList.add("time-date");
        const timeDiv = document.createElement("div");
        timeDateDiv.appendChild(timeDiv);
        timeDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        timeDiv.classList.add("time-date");
        timeDiv.style.color = "#999999";
        chatLine.appendChild(timeDateDiv);
        const nameDiv = document.createElement("div");
        chatLine.appendChild(nameDiv);
        nameDiv.classList.add("chat-name");
        const messageDiv = document.createElement("div");
        chatLine.appendChild(messageDiv);
        messageDiv.classList.add("chat-message");
        switch (chat["MessageType"]) {
            case "CHAT":
                nameDiv.textContent = chat["UserName"];
                messageDiv.textContent = chat["MessageText"];
                break;
            case "JOINED":
                messageDiv.textContent = chat["UserName"] + " joined.";
                messageDiv.style.fontStyle = "italic";
                break;
            case "LEFT":
                messageDiv.textContent = chat["UserName"] + " left.";
                messageDiv.style.fontStyle = "italic";
                break;
        }
        return;
    });
    return;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Fin_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function Fin_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (!result["PMMGExtended"]["recording_financials"]) {
        const header = document.createElement("h3");
        header.textContent = "You are not recording daily financial data, would you like to enable recording?";
        header.style.textAlign = "center";
        header.style.width = "100%";
        tile.appendChild(header);
        const checkboxDiv = document.createElement("div");
        checkboxDiv.style.alignItems = "center";
        checkboxDiv.style.display = "flex";
        checkboxDiv.style.justifyContent = "center";
        checkboxDiv.style.paddingBottom = "5px";
        tile.appendChild(checkboxDiv);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.display = "inline-block";
        checkboxDiv.appendChild(checkbox);
        const label = document.createElement("div");
        label.textContent = "Enable Recording (Refresh needed to take effect)";
        label.style.display = "inline-block";
        label.style.marginTop = "2px";
        checkboxDiv.appendChild(label);
        const explainDiv = document.createElement("div");
        explainDiv.style.padding = "5px";
        tile.appendChild(explainDiv);
        explainDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("PMMG can record your finances (using FIO data) to provide a more accurate estimate than the in-game FIN screen. The data is pulled at most every 24 hours and is stored locally like your other settings. You can access all the information from the XIT FIN buffer."));
        checkbox.addEventListener("click", function () {
            result["PMMGExtended"]["recording_financials"] = checkbox.checked;
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        });
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Finance", chooseScreen, [tile, parameters]);
    return;
}
function chooseScreen(result, params) {
    if (!params[0] || !params[1]) {
        return;
    }
    const tile = params[0];
    const parameters = params[1];
    console.log(result);
    console.log(parameters);
    if (Object.keys(result).length == 0) {
        const header = document.createElement("h3");
        header.textContent = "No data has been recorded yet. Wait a few seconds then refresh the page. If this persists, contact PiBoy314.";
        header.style.textAlign = "center";
        header.style.width = "100%";
        tile.appendChild(header);
    }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnhancedBurn_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameProperties__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BackgroundRunner__ = __webpack_require__(4);





function EnhancedBurn_pre(tile, parameters, result, fullBurn, burnSettings, modules, refresh) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! No API Key!";
        return;
    }
    const apikey = result["PMMGExtended"]["apikey"];
    const username = result["PMMGExtended"]["username"];
    if (refresh) {
        fullBurn[username] = [];
        Object(__WEBPACK_IMPORTED_MODULE_4__BackgroundRunner__["a" /* getBurn */])(fullBurn, username, apikey);
    }
    var burn;
    var unloaded = false;
    var planet;
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    else if (parameters.length >= 3 && parameters[1].toLowerCase() == "group") {
        if (fullBurn[parameters[2]] && fullBurn[parameters[2]].length > 0) {
            burn = fullBurn[parameters[2]];
        }
        else {
            unloaded = true;
            if (tile.id != "pmmg-reload") {
                Object(__WEBPACK_IMPORTED_MODULE_4__BackgroundRunner__["d" /* getGroupBurn */])(fullBurn, parameters[2], apikey);
            }
        }
    }
    else {
        if (fullBurn[username] != undefined && fullBurn[username].length > 0) {
            burn = fullBurn[username];
            planet = parameters[1];
        }
        else {
            unloaded = true;
        }
    }
    if (burnSettings[0] == "loading" || unloaded) {
        tile.textContent = "Loading Burn Data...";
        tile.id = "pmmg-reload";
        return;
    }
    tile.id = "pmmg-load-success";
    var settings;
    if (parameters[1].toLowerCase() == "group") {
        var inv = {};
        var cons = {};
        var fullCommand = "";
        if (parameters[3]) {
            fullCommand = parameters.join(" ").toUpperCase();
        }
        fullBurn[parameters[2]].forEach(planetData => {
            if (parameters[3]) {
                if (!((planetData && planetData["PlanetName"] && fullCommand.match(planetData["PlanetName"].toUpperCase())) || (planetData && planetData["PlanetNaturalId"] && fullCommand.match(planetData["PlanetNaturalId"].toUpperCase())))) {
                    return;
                }
            }
            if (planetData["Error"] == null) {
                planetData["Inventory"].forEach(material => {
                    if (inv[material["MaterialTicker"]] == undefined) {
                        inv[material["MaterialTicker"]] = material["MaterialAmount"];
                    }
                    else {
                        inv[material["MaterialTicker"]] += material["MaterialAmount"];
                    }
                    return;
                });
                planetData["OrderConsumption"].forEach(material => {
                    if (cons[material["MaterialTicker"]] == undefined) {
                        cons[material["MaterialTicker"]] = -material["DailyAmount"];
                    }
                    else {
                        cons[material["MaterialTicker"]] -= material["DailyAmount"];
                    }
                });
                planetData["WorkforceConsumption"].forEach(material => {
                    if (cons[material["MaterialTicker"]] == undefined) {
                        cons[material["MaterialTicker"]] = -material["DailyAmount"];
                    }
                    else {
                        cons[material["MaterialTicker"]] -= material["DailyAmount"];
                    }
                    return;
                });
                planetData["OrderProduction"].forEach(material => {
                    if (cons[material["MaterialTicker"]] == undefined) {
                        cons[material["MaterialTicker"]] = material["DailyAmount"];
                    }
                    else {
                        cons[material["MaterialTicker"]] += material["DailyAmount"];
                    }
                    return;
                });
            }
            return;
        });
    }
    else {
        const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["t" /* findCorrespondingPlanet */])(planet, burn);
        var lastUpdated;
        try {
            lastUpdated = new Date(planetBurn["LastUpdate"] + "Z");
        }
        catch (_a) {
        }
        settings = Object(__WEBPACK_IMPORTED_MODULE_0__util__["t" /* findCorrespondingPlanet */])(planet, burnSettings);
        if (planetBurn == undefined) {
            tile.textContent = "Error! No Matching Planet!";
            return;
        }
        var cons = {};
        var inv = {};
        for (let material of planetBurn["WorkforceConsumption"]) {
            if (cons[material["MaterialTicker"]] == undefined) {
                cons[material["MaterialTicker"]] = -material["DailyAmount"];
                continue;
            }
            cons[material["MaterialTicker"]] -= material["DailyAmount"];
        }
        for (let material of planetBurn["OrderConsumption"]) {
            if (cons[material["MaterialTicker"]] == undefined) {
                cons[material["MaterialTicker"]] = -material["DailyAmount"];
                continue;
            }
            cons[material["MaterialTicker"]] -= material["DailyAmount"];
        }
        for (let material of planetBurn["OrderProduction"]) {
            if (cons[material["MaterialTicker"]] == undefined) {
                cons[material["MaterialTicker"]] = material["DailyAmount"];
                continue;
            }
            cons[material["MaterialTicker"]] += material["DailyAmount"];
        }
        for (let material of planetBurn["Inventory"]) {
            if (inv[material["MaterialTicker"]] == undefined) {
                inv[material["MaterialTicker"]] = material["MaterialAmount"];
                continue;
            }
            inv[material["MaterialTicker"]] += material["MaterialAmount"];
        }
    }
    const screenNameElem = document.querySelector(__WEBPACK_IMPORTED_MODULE_2__Selector__["a" /* Selector */].ScreenName);
    const screenName = screenNameElem ? screenNameElem.textContent : "";
    if (!result["PMMGExtended"]["burn_display_settings"]) {
        result["PMMGExtended"]["burn_display_settings"] = [];
    }
    var settingsIndex = FindBurnSettings(result["PMMGExtended"]["burn_display_settings"], screenName + parameters[1]);
    const dispSettings = settingsIndex == -1 ? [1, 1, 1, 1] : result["PMMGExtended"]["burn_display_settings"][settingsIndex][1];
    const table = document.createElement("table");
    const bufferHeader = document.createElement("div");
    bufferHeader.style.display = "flex";
    tile.appendChild(bufferHeader);
    const settingsDiv = document.createElement("div");
    settingsDiv.style.display = "flex";
    bufferHeader.appendChild(settingsDiv);
    settingsDiv.appendChild(createSettingsButton("RED", 22.025, dispSettings[0], function () {
        dispSettings[0] = dispSettings[0] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        if (settingsIndex == -1) {
            result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
            settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
        }
        else {
            result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    }));
    settingsDiv.appendChild(createSettingsButton("YELLOW", 40.483, dispSettings[1], function () {
        dispSettings[1] = dispSettings[1] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        if (settingsIndex == -1) {
            result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
            settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
        }
        else {
            result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    }));
    settingsDiv.appendChild(createSettingsButton("GREEN", 34.65, dispSettings[2], function () {
        dispSettings[2] = dispSettings[2] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        if (settingsIndex == -1) {
            result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
            settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
        }
        else {
            result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    }));
    settingsDiv.appendChild(createSettingsButton("INF", 19.6, dispSettings[3], function () {
        dispSettings[3] = dispSettings[3] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        if (settingsIndex == -1) {
            result["PMMGExtended"]["burn_display_settings"].push([screenName + parameters[1], dispSettings]);
            settingsIndex = result["PMMGExtended"]["burn_display_settings"].length - 1;
        }
        else {
            result["PMMGExtended"]["burn_display_settings"][settingsIndex][1] = dispSettings;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    }));
    if (lastUpdated) {
        const lastUpdatedSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Last Updated: " + lastUpdated.toLocaleDateString(undefined, { day: "numeric", month: "numeric" }) + " " + lastUpdated.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }));
        lastUpdatedSpan.style.marginLeft = "auto";
        lastUpdatedSpan.style.marginRight = "10px";
        lastUpdatedSpan.style.color = "rgb(153, 153, 153)";
        bufferHeader.appendChild(lastUpdatedSpan);
    }
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Needs", "Production", "Inv", "Amt. Needed", "Burn"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    headRow.firstChild.colSpan = 2;
    const body = document.createElement("tbody");
    table.appendChild(body);
    var burnMaterials = Object.keys(cons);
    burnMaterials.sort(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* CategorySort */]);
    for (let material of burnMaterials) {
        var included = true;
        if (settings != undefined && parameters[1].toLowerCase() != "group") {
            settings["MaterialExclusions"].forEach((mat) => {
                if (mat["MaterialTicker"] == material) {
                    included = false;
                    return;
                }
                return;
            });
        }
        if (!included) {
            continue;
        }
        const row = document.createElement("tr");
        body.appendChild(row);
        const materialColumn = document.createElement("td");
        materialColumn.style.width = "32px";
        materialColumn.style.paddingRight = "0px";
        materialColumn.style.paddingLeft = "0px";
        const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createMaterialElement */])(material, "prun-remove-js", "none", false, true);
        if (matElem) {
            materialColumn.appendChild(matElem);
        }
        row.appendChild(materialColumn);
        const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][material][0]);
        nameSpan.style.fontWeight = "bold";
        const nameColumn = document.createElement("td");
        nameColumn.appendChild(nameSpan);
        row.appendChild(nameColumn);
        const consColumn = document.createElement("td");
        consColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(cons[material].toLocaleString(undefined, { maximumFractionDigits: 1 }) + " / Day"));
        row.appendChild(consColumn);
        const invColumn = document.createElement("td");
        const invAmount = inv[material] == undefined ? 0 : inv[material];
        invColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(invAmount.toLocaleString(undefined)));
        row.appendChild(invColumn);
        const burn = invAmount == 0 ? 0 : -invAmount / cons[material];
        const burnColumn = document.createElement("td");
        burnColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(((burn < 500 && cons[material] < 0) ? Math.floor(burn).toLocaleString(undefined, { maximumFractionDigits: 0 }) : "∞") + " Days"));
        if (cons[material] >= 0) {
            burnColumn.classList.add("burn-green");
            burnColumn.classList.add("burn-infinite");
        }
        else if (burn <= (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[0]) {
            burnColumn.classList.add("burn-red");
        }
        else if (burn <= (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1]) {
            burnColumn.classList.add("burn-yellow");
        }
        else {
            burnColumn.classList.add("burn-green");
        }
        const needColumn = document.createElement("td");
        const needAmt = burn > (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1] || cons[material] > 0 ? 0 : (burn - (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1]) * cons[material];
        needColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(needAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })));
        row.appendChild(needColumn);
        row.appendChild(burnColumn);
    }
    UpdateBurn(table, dispSettings);
    tile.appendChild(table);
    return modules;
}
function FindBurnSettings(array, matchString) {
    for (var i = 0; i < array.length; i++) {
        if (matchString == array[i][0]) {
            return i;
        }
    }
    return -1;
}
function UpdateBurn(table, dispSettings) {
    Array.from(table.children[1].children).forEach(row => {
        if (row.children[5].classList.contains("burn-infinite")) {
            row.style.display = dispSettings[3] ? "table-row" : "none";
            row.style.visibility = dispSettings[3] ? "visible" : "hidden";
            row.style.width = dispSettings[3] ? "auto" : "0px";
            row.style.height = dispSettings[3] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-green")) {
            row.style.display = dispSettings[2] ? "table-row" : "none";
            row.style.visibility = dispSettings[2] ? "visible" : "hidden";
            row.style.width = dispSettings[2] ? "auto" : "0px";
            row.style.height = dispSettings[2] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-yellow")) {
            row.style.display = dispSettings[1] ? "table-row" : "none";
            row.style.visibility = dispSettings[1] ? "visible" : "hidden";
            row.style.width = dispSettings[1] ? "auto" : "0px";
            row.style.height = dispSettings[1] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-red")) {
            row.style.display = dispSettings[0] ? "table-row" : "none";
            row.style.visibility = dispSettings[0] ? "visible" : "hidden";
            row.style.width = dispSettings[0] ? "auto" : "0px";
            row.style.height = dispSettings[0] ? "auto" : "0px";
        }
        return;
    });
    return;
}
function createSettingsButton(text, width, toggled, f) {
    const button = document.createElement("span");
    const bar = document.createElement("div");
    if (toggled) {
        bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarToggled);
    }
    else {
        bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarUntoggled);
    }
    const textBox = document.createElement("div");
    textBox.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsText);
    textBox.textContent = text;
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsButton);
    bar.style.width = width + "px";
    bar.style.maxWidth = width + "px";
    bar.style.height = "2px";
    button.appendChild(bar);
    button.appendChild(textBox);
    button.addEventListener("click", function () {
        if (toggled) {
            bar.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarToggled);
            bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarUntoggled);
            toggled = false;
        }
        else {
            bar.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarUntoggled);
            bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SettingsBarToggled);
            toggled = true;
        }
        f();
    });
    return button;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SheetTable_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function SheetTable_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    if (result["PMMGExtended"]["webappid"] == undefined) {
        return;
    }
    var url = "https://script.google.com/macros/s/" + result["PMMGExtended"]["webappid"] + "/exec?mode=%22" + parameters[1] + "%22";
    if (parameters[2] != undefined) {
        url += "&param=%22" + parameters[2] + "%22";
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, SheetTable_post, url, "GET", undefined, undefined);
    return;
}
function SheetTable_post(tile, parameters, jsondata) {
    if (jsondata == undefined || jsondata == null) {
        return;
    }
    var data;
    try {
        data = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        tile.textContent = "Error! Could Not Load JSON Data!";
        return parameters;
    }
    const table = document.createElement("table");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of data[0]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    data.shift();
    for (let rowData of data) {
        const row = document.createElement("tr");
        body.appendChild(row);
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(point));
        }
    }
    tile.appendChild(table);
    return;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Contracts_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(3);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function Contracts_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (!result["PMMGExtended"]["username"]) {
        tile.textContent = "Error! Missing Username!";
        return;
    }
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! Missing API Key!";
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, Contracts_post, "https://rest.fnar.net/contract/allcontracts/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
    return;
}
function Contracts_post(tile, parameters, jsondata) {
    return __awaiter(this, void 0, void 0, function* () {
        if (jsondata == undefined || jsondata == null) {
            return;
        }
        var contractData;
        try {
            contractData = JSON.parse(jsondata);
        }
        catch (SyntaxError) {
            tile.textContent = "Error! Could Not Load Data!";
            return;
        }
        let validContracts = contractData.filter(c => !invalidContractStatus.includes(c["Status"]));
        validContracts.map(contract => {
            contract["IsFaction"] = false;
            contract["materialConditions"] = [];
            let selfConditions = [];
            let partnerConditions = [];
            contract.Conditions.map((condition) => {
                if (condition["Type"] === "REPUTATION")
                    contract["IsFaction"] = true;
                if (condition["MaterialTicker"] !== null && materialFulfilmentType.includes(condition["Type"]))
                    contract["materialConditions"].push(condition);
                if (condition["Party"] === contract["Party"])
                    selfConditions.push(condition);
                else
                    partnerConditions.push(condition);
            });
            selfConditions.sort(conditionSort);
            partnerConditions.sort(conditionSort);
            contract.Conditions = {};
            contract.Conditions["self"] = selfConditions;
            contract.Conditions["partner"] = partnerConditions;
        });
        validContracts.sort(ContractSort);
        const table = Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* createTable */])(tile, ["Contract ID", "Material", "Partner's Conditions", "My Conditions"]);
        if (validContracts.length === 0) {
            const row = createNoContractsRow(4);
            table.appendChild(row);
        }
        else {
            validContracts.forEach(contract => {
                const row = createContractRow(contract);
                table.appendChild(row);
            });
        }
        return parameters;
    });
}
const invalidContractStatus = [
    "FULFILLED",
    "BREACHED",
    "TERMINATED",
    "CANCELLED",
    "REJECTED"
];
function createContractRow(contract) {
    var row = document.createElement("tr");
    let contractLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]);
    const contractIdColumn = document.createElement("td");
    contractIdColumn.appendChild(contract["IsFaction"] ? factionContract(contractLink) : contractLink);
    row.appendChild(contractIdColumn);
    const materialColumn = document.createElement("td");
    materialColumn.style.width = "32px";
    materialColumn.style.paddingLeft = "10px";
    const materialDiv = document.createElement("div");
    materialColumn.appendChild(materialDiv);
    if (contract["materialConditions"].length > 0) {
        contract["materialConditions"].forEach(materialCondition => {
            const materialElement = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createMaterialElement */])(materialCondition["MaterialTicker"], "prun-remove-js", materialCondition["MaterialAmount"], false, true);
            if (materialElement) {
                materialElement.style.marginBottom = "4px";
                materialDiv.appendChild(materialElement);
            }
            return;
        });
    }
    row.appendChild(materialColumn);
    const partnerColumn = document.createElement("td");
    var faction;
    if (contract["IsFaction"]) {
        Object.keys(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* FactionHeaders */]).forEach(factionName => {
            if (contract["PartnerName"].includes(factionName)) {
                faction = __WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* FactionHeaders */][factionName];
            }
            return;
        });
    }
    if (!faction) {
        let partnerLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]);
        partnerColumn.appendChild(partnerLink);
    }
    else {
        let partnerLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(contract["PartnerName"], "FA " + faction);
        partnerColumn.appendChild(partnerLink);
    }
    for (let condition of contract.Conditions["partner"])
        partnerColumn.appendChild(conditionStatus(condition));
    row.appendChild(partnerColumn);
    const selfColumn = document.createElement("td");
    for (let condition of contract.Conditions["self"])
        selfColumn.appendChild(conditionStatus(condition));
    row.appendChild(selfColumn);
    return row;
}
;
function createNoContractsRow(colspan) {
    var line = document.createElement("tr");
    const textColumn = document.createElement("td");
    textColumn.setAttribute('colspan', `${colspan}`);
    textColumn.textContent = "No contracts";
    line.appendChild(textColumn);
    return line;
}
function conditionSort(a, b) {
    return a["ConditionIndex"] > b["ConditionIndex"] ? 1 : -1;
}
function ContractSort(a, b) {
    return a["DueDateEpochMs"] > b["DueDateEpochMs"] ? 1 : -1;
}
function factionContract(link) {
    let conditionDiv = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* createTextDiv */])("");
    let marker = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(" ★");
    marker.style.color = __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Yellow;
    marker.style.fontWeight = "bold";
    marker.style.cursor = "default";
    marker.title = "Faction Contract";
    link.style.display = "inline";
    conditionDiv.appendChild(link);
    conditionDiv.appendChild(marker);
    return conditionDiv;
}
function conditionStatus(condition) {
    let conditionDiv = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* createTextDiv */])("");
    let marker = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(condition["Status"] === "FULFILLED" ? "✓" : "X");
    marker.style.color = condition["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
    marker.style.fontWeight = "bold";
    let text = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(` ${friendlyConditionText[condition.Type]}`);
    conditionDiv.appendChild(marker);
    conditionDiv.appendChild(text);
    return conditionDiv;
}
const friendlyConditionText = {
    COMEX_PURCHASE_PICKUP: "Material Pickup",
    DELIVERY: "Delivery",
    DELIVERY_SHIPMENT: "Deliver Shipment",
    EXPLORATION: "Exploration",
    REPUTATION: "Reputation",
    PAYMENT: "Payment",
    PICKUP_SHIPMENT: "Pickup Shipment",
    PROVISION_SHIPMENT: "Provision",
    PROVISION: "Provision"
};
const materialFulfilmentType = [
    "DELIVERY",
    "DELIVERY_SHIPMENT",
    "PROVISION_SHIPMENT",
    "COMEX_PURCHASE_PICKUP"
];


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = PRuN_pre;
/* harmony export (immutable) */ __webpack_exports__["c"] = Prosperity_pre;
/* harmony export (immutable) */ __webpack_exports__["e"] = Sheets_pre;
/* harmony export (immutable) */ __webpack_exports__["a"] = Discord_pre;
/* harmony export (immutable) */ __webpack_exports__["f"] = Wiki;
/* harmony export (immutable) */ __webpack_exports__["d"] = PrunPlanner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function PRuN_pre(tile) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const prun = document.createElement("iframe");
    prun.src = "https://apex.prosperousuniverse.com/#/";
    prun.width = "100%";
    prun.height = "100%";
    prun.style.borderWidth = "0";
    tile.appendChild(prun);
    return;
}
function Prosperity_pre(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    var url = "https://prosperity-prun.netlify.app/";
    if (parameters.length == 3) {
        url += "?from=" + parameters[1] + "&to=" + parameters[2];
    }
    const prosp = document.createElement("iframe");
    prosp.src = url;
    prosp.width = "100%";
    prosp.height = "100%";
    prosp.style.borderWidth = "0";
    tile.appendChild(prosp);
    return;
}
const DiscordServers = {
    "UFO": ["855488309802172469", "855489711635431475"],
    "FIOC": ["807992640247300116", "808451512351195166"],
    "AHI": ["704907707634941982", "797157877324185650"],
    "PCT": ["667551433503014924", "667551433503014927"]
};
function Sheets_pre(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    for (var i = 2; i < parameters.length; i++) {
        parameters[1] += "_" + parameters[i];
    }
    const sheet = document.createElement("iframe");
    sheet.src = "https://docs.google.com/spreadsheets/d/" + parameters[1] + "/edit?usp=sharing";
    sheet.style.borderWidth = "0";
    sheet.style.height = "100%";
    sheet.style.width = "100%";
    tile.appendChild(sheet);
    return;
}
function Discord_pre(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    var serverID;
    var channelID;
    if (parameters.length == 2) {
        if (DiscordServers[parameters[1]] == undefined) {
            tile.textContent = "Error! Not Enough Parameters";
            return;
        }
        else {
            serverID = DiscordServers[parameters[1]][0];
            channelID = DiscordServers[parameters[1]][1];
        }
    }
    else if (parameters.length > 2) {
        serverID = parameters[1];
        channelID = parameters[2];
    }
    else {
        tile.textContent = "Error! Not Enough Parameters";
        return;
    }
    const discord = document.createElement("iframe");
    discord.src = "https://e.widgetbot.io/channels/" + serverID + "/" + channelID;
    discord.width = "100%";
    discord.height = "100%";
    discord.style.borderWidth = "0px";
    tile.appendChild(discord);
    return;
}
function Wiki(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const frame = document.createElement("iframe");
    frame.src = parameters[1] && parameters[1].toLowerCase() == "resources" ? "https://handbook.apex.prosperousuniverse.com/wiki/community-resources/index.html" : "https://handbook.apex.prosperousuniverse.com/wiki/index.html";
    frame.style.borderWidth = "0";
    frame.style.height = "100%";
    frame.style.width = "100%";
    tile.appendChild(frame);
}
function PrunPlanner(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const frame = document.createElement("iframe");
    frame.src = parameters[1] ? "https://prunplanner.org/" + parameters[1] : "https://prunplanner.org/";
    frame.style.borderWidth = "0";
    frame.style.height = "100%";
    frame.style.width = "100%";
    tile.appendChild(frame);
    return;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FIOInv_pre;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(3);


function FIOInv_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const apikey = result["PMMGExtended"]["apikey"];
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    if (parameters.length == 2) {
        parameters.push(apikey);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, FIOInv_getAllStorages, "https://rest.fnar.net/auth/group/" + parameters[1], "GET", ["Authorization", apikey], undefined);
    }
    else {
        for (var i = 3; i < parameters.length; i++) {
            parameters[2] += " " + parameters[i];
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, FIOInv_post, "https://rest.fnar.net/storage/" + parameters[1] + "/" + parameters[2], "GET", ["Authorization", apikey], undefined);
    }
    return;
}
function FIOInv_post(tile, parameters, jsondata) {
    const tag = "FIO";
    if (jsondata == undefined || jsondata == null) {
        return;
    }
    var inventoryData;
    try {
        inventoryData = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        tile.textContent = "Error! Could Not Load Data!";
        return;
    }
    if (!inventoryData) {
        return;
    }
    const volumeUsed = inventoryData["VolumeLoad"];
    const volumeTotal = inventoryData["VolumeCapacity"];
    const weightUsed = inventoryData["WeightLoad"];
    const weightTotal = inventoryData["WeightCapacity"];
    const header = document.createElement("div");
    header.classList.add("inv-header");
    header.id = "header";
    header.classList.add(tag);
    tile.appendChild(header);
    const body = document.createElement("div");
    tile.appendChild(body);
    body.classList.add(tag);
    body.classList.add("inv-body");
    body.id = "body";
    header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(parameters[2], tag));
    header.appendChild(document.createElement("br"));
    const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(parameters[1], tag);
    userElem.style.paddingLeft = "8px";
    header.appendChild(userElem);
    const volumeLine = document.createElement("div");
    volumeLine.id = "volume-line";
    volumeLine.style.padding = "2px 8px";
    volumeLine.style.color = "#999999";
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Volume ", tag));
    const volumeBar = document.createElement("progress");
    volumeBar.id = "volume-bar";
    volumeBar.classList.add(tag);
    volumeBar.classList.add("progress-bar");
    volumeBar.max = 1;
    volumeBar.value = volumeUsed / volumeTotal;
    volumeLine.appendChild(volumeBar);
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(volumeUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + volumeTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " m³", tag));
    header.appendChild(volumeLine);
    const weightLine = document.createElement("div");
    weightLine.id = "weight-line";
    weightLine.style.padding = "2px 8px";
    weightLine.style.color = "#999999";
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Weight ", tag));
    const weightBar = document.createElement("progress");
    weightBar.id = "weight-bar";
    weightBar.classList.add(tag);
    weightBar.classList.add("progress-bar");
    weightBar.max = 1;
    weightBar.value = weightUsed / weightTotal;
    weightLine.appendChild(weightBar);
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(weightUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + weightTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " t", tag));
    header.appendChild(weightLine);
    inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
    for (let item of inventoryData["StorageItems"]) {
        const mat = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true);
        if (mat) {
            body.appendChild(mat);
        }
    }
    return;
}
function FIOInv_getAllStorages(tile, parameters, jsondata) {
    var userJSON;
    try {
        userJSON = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        tile.textContent = "Error! Bad Data from FIO!";
    }
    var usernames = [];
    userJSON["GroupUsers"].forEach(user => {
        usernames.push(user["GroupUserName"]);
        return;
    });
    parameters.push(userJSON["GroupName"]);
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, FIOInv_allDisplay, "https://rest.fnar.net/fioweb/grouphub", "POST", ["Authorization", parameters[2]], JSON.stringify(usernames));
    return;
}
function FIOInv_allDisplay(tile, parameters, jsondata) {
    var groupData = [];
    try {
        groupData = JSON.parse(jsondata);
    }
    catch (SyntaxError) {
        tile.textContent = "Error! Bad Data from FIO!";
    }
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(parameters[3] + " Inventories"));
    tile.appendChild(titleDiv);
    const bodyDiv = document.createElement("div");
    tile.appendChild(bodyDiv);
    bodyDiv.classList.add("flex-table");
    if (groupData["PlayerModels"] == undefined) {
        tile.textContent = "Error! Bad Data!";
        return;
    }
    groupData["PlayerModels"].forEach(player => {
        if (player["Locations"].length == 0) {
            return;
        }
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("list");
        playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(player["UserName"]));
        playerDiv.firstChild.style.fontWeight = "bold";
        player["Locations"].forEach(location => {
            playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"].replace(/ /, "_")));
            return;
        });
        bodyDiv.appendChild(playerDiv);
        return;
    });
    parameters.pop();
    parameters.pop();
    return;
}
function fioMatsAlphabetSort(a, b) {
    if (!a["MaterialTicker"] || !b["MaterialTicker"] || !__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][a["MaterialTicker"]] || !__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][b["MaterialTicker"]]) {
        return 0;
    }
    if (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][a["MaterialTicker"]][1] == __WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][b["MaterialTicker"]][1]) {
        return a["MaterialTicker"].localeCompare(b["MaterialTicker"]);
    }
    return __WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][a["MaterialTicker"]][1].localeCompare(__WEBPACK_IMPORTED_MODULE_1__GameProperties__["d" /* MaterialNames */][b["MaterialTicker"]][1]);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Notes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Checklists__ = __webpack_require__(5);


function Notes(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length == 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", generateNotesTable, tile);
    }
    else {
        const noteName = (parameters.slice(1)).join("_");
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("title");
        nameDiv.textContent = noteName;
        tile.appendChild(nameDiv);
        const textboxWrapper = document.createElement("div");
        tile.appendChild(textboxWrapper);
        const textbox = document.createElement("textarea");
        textboxWrapper.appendChild(textbox);
        textboxWrapper.classList.add("notes-wrapper");
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", dispStoredNote, [noteName, textbox]);
    }
    return;
}
function generateNotesTable(result, tile) {
    if (!tile) {
        return;
    }
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    const table = document.createElement("table");
    tile.appendChild(table);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Name", "Length", "Delete"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    const names = Array.from(Object.keys(result["PMMG-Notes"]));
    var anyNotes = false;
    names.forEach(name => {
        if (name.substring(0, 7) == __WEBPACK_IMPORTED_MODULE_1__Checklists__["a" /* CHECK_INDICATOR */]) {
            return;
        }
        anyNotes = true;
        const row = document.createElement("tr");
        const nameColumn = document.createElement("td");
        const lengthColumn = document.createElement("td");
        const deleteColumn = document.createElement("td");
        row.appendChild(nameColumn);
        row.appendChild(lengthColumn);
        row.appendChild(deleteColumn);
        body.appendChild(row);
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(name, "XIT NOTES_" + name));
        lengthColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(result["PMMG-Notes"][name].length.toLocaleString() + " Character" + (result["PMMG-Notes"][name].length == 1 ? "" : "s")));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["H" /* showWarningDialog */])(tile, "Are you sure you want to delete " + name + "?", "Confirm", function () {
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreNote, [name, ""]);
                row.style.display = "none";
                return;
            });
            return;
        });
        return;
    });
    if (!anyNotes) {
        var line = document.createElement("tr");
        const textColumn = document.createElement("td");
        textColumn.colSpan = 3;
        textColumn.textContent = "No Notes";
        line.appendChild(textColumn);
        body.appendChild(line);
    }
}
function updateThenStoreNote(result, params) {
    if (!params || !params[0]) {
        return;
    }
    const noteName = params[0];
    const noteText = params[1];
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    result["PMMG-Notes"][noteName] = noteText.length == 0 ? undefined : noteText;
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    return;
}
function dispStoredNote(result, params) {
    console.log(params);
    if (!params || !params[0] || !params[1]) {
        return;
    }
    const noteName = params[0];
    const textbox = params[1];
    if (!result["PMMG-Notes"]) {
        result["PMMG-Notes"] = {};
    }
    if (result["PMMG-Notes"][noteName]) {
        textbox.value = result["PMMG-Notes"][noteName];
    }
    textbox.addEventListener("input", function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Notes", updateThenStoreNote, [noteName, textbox.value || ""]);
    });
    return;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Sort;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function Sort(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (!parameters[1]) {
        tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Add a planet name to the end of the command!"));
        return;
    }
    if (!result["PMMGExtended"]["sorting"]) {
        result["PMMGExtended"]["sorting"] = [];
    }
    const table = document.createElement("table");
    tile.appendChild(table);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Abbreviation", "Categories", "Modify"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    const addButton = document.createElement("button");
    addButton.textContent = "Add New";
    tile.appendChild(addButton);
    addButton.style.marginLeft = "5px";
    addButton.style.marginTop = "5px";
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonSuccess);
    addButton.addEventListener("click", function () {
        createAddInterface(tile, result, parameters);
    });
    var isSorting = false;
    result["PMMGExtended"]["sorting"].forEach(settings => {
        if (!settings[0] || !settings[1] || !settings[2]) {
            return;
        }
        if (settings[1].toUpperCase() != parameters[1].toUpperCase()) {
            return;
        }
        isSorting = true;
        const row = document.createElement("tr");
        const nameColumn = document.createElement("td");
        const catColumn = document.createElement("td");
        const modifyColumn = document.createElement("td");
        row.appendChild(nameColumn);
        row.appendChild(catColumn);
        row.appendChild(modifyColumn);
        body.appendChild(row);
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(settings[0]));
        var categories = "";
        settings[2].forEach(category => {
            if (!category[0]) {
                return;
            }
            categories += category[0] + ", ";
            return;
        });
        categories = categories.slice(0, -2);
        catColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(categories));
        modifyColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* createSmallButton */])("edit", createAddInterface, [tile, result, parameters, settings]));
        modifyColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* createSmallButton */])("delete", function (result, row, settings) {
            for (var i = 0; i < result["PMMGExtended"]["sorting"].length; i++) {
                if (result["PMMGExtended"]["sorting"][i] == settings) {
                    result["PMMGExtended"]["sorting"].splice(i, 1);
                    row.style.display = "none";
                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
                    break;
                }
            }
        }, [result, row, settings]));
        return;
    });
    if (!isSorting) {
        var line = document.createElement("tr");
        const textColumn = document.createElement("td");
        textColumn.colSpan = 3;
        textColumn.textContent = "No Sorting Options";
        line.appendChild(textColumn);
        body.appendChild(line);
    }
    return;
}
function createAddInterface(tile, result, parameters, settings = []) {
    const prefilled = settings.length != 0;
    const overlapDiv = document.createElement("div");
    overlapDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].OverlappingDiv);
    const greyStripes = document.createElement("div");
    greyStripes.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].GreyStripes);
    overlapDiv.appendChild(greyStripes);
    tile.insertBefore(overlapDiv, tile.firstChild);
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* makePopupSpacer */])(tile, overlapDiv));
    const addInterfaceWrapper = document.createElement("div");
    addInterfaceWrapper.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].CenterInterface);
    greyStripes.appendChild(addInterfaceWrapper);
    const addInterface = document.createElement("div");
    addInterface.classList.add("NLOrH7hF5fbKIesqW3uSkA==");
    addInterfaceWrapper.appendChild(addInterface);
    const addHeader = document.createElement('h3');
    addHeader.appendChild(document.createTextNode("Sorting Options Editor"));
    addHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    addInterface.appendChild(addHeader);
    addHeader.style.margin = "0.5em 0 0.5em";
    const form = document.createElement("div");
    addInterface.appendChild(form);
    form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Abbreviation", prefilled ? settings[0] : "", "The abbreviation showing at the top of the inventory (ABC, CAT, etc.)"));
    if (prefilled) {
        for (var i = 0; i < settings[2].length; i++) {
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category " + (i + 1) + " Name", prefilled ? settings[2][i][0] : "", i == 0 ? "The name of the first category for materials" : ""));
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category " + (i + 1) + " MATs", prefilled ? settings[2][i][1].join(", ") : "", i == 0 ? "A list of materials in the first category. Separate tickers by a comma. (RAT, DW, etc.)" : ""));
        }
    }
    else {
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category 1 Name", "", "The name of the first category for materials."));
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category 1 MATs", "", "A list of materials in the first category. Separate tickers by a comma. (RAT, DW, etc.)"));
    }
    const addRow = document.createElement("div");
    addRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveRow);
    form.appendChild(addRow);
    const addLabel = document.createElement("label");
    addLabel.textContent = "Add Category";
    addLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveLabel);
    addRow.appendChild(addLabel);
    const addInputDiv = document.createElement("div");
    addInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveInput);
    addRow.appendChild(addInputDiv);
    const addButton = document.createElement("button");
    addButton.textContent = "ADD CATEGORY";
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    addInputDiv.appendChild(addButton);
    addButton.addEventListener("click", function () {
        const catNumber = (form.children.length - 3) / 2;
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category " + catNumber + " Name"), form.children[form.children.length - 4]);
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Category " + catNumber + " MATs"), form.children[form.children.length - 4]);
    });
    const burnRow = Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* createPopupCheckboxRow */])("Burn Sorting", settings[3] || false, "Add burn sorting as a secondary sorting method. Burn categories will show under the categories defined above.");
    form.appendChild(burnRow);
    const zeroRow = Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* createPopupCheckboxRow */])("Show Zeros", settings[4] || false, "Show item icons that have zero quantity.");
    form.appendChild(zeroRow);
    const saveRow = document.createElement("div");
    saveRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveRow);
    form.appendChild(saveRow);
    const saveLabel = document.createElement("label");
    saveLabel.textContent = "CMD";
    saveLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveLabel);
    saveRow.appendChild(saveLabel);
    const saveInputDiv = document.createElement("div");
    saveInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveInput);
    saveRow.appendChild(saveInputDiv);
    const saveButton = document.createElement("button");
    saveButton.textContent = "SAVE";
    saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    saveInputDiv.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
        const itemAbbreviation = Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.firstChild);
        const sortingInfo = [];
        for (var i = 1; i < form.children.length - 4; i += 2) {
            if (!form.children[i] || !form.children[i + 1]) {
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i]) == "" || Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i + 1]) == "") {
                continue;
            }
            sortingInfo.push([Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i]), Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i + 1]).replace(/ /g, "").split(",")]);
        }
        tile.removeChild(overlapDiv);
        if (!itemAbbreviation) {
            return;
        }
        if (prefilled) {
            for (var i = 0; i < result["PMMGExtended"]["sorting"].length; i++) {
                if (result["PMMGExtended"]["sorting"][i] == settings) {
                    result["PMMGExtended"]["sorting"][i] = [itemAbbreviation, parameters[1], sortingInfo, Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getCheckOfPopupRow */])(burnRow), Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getCheckOfPopupRow */])(zeroRow)];
                    break;
                }
            }
        }
        else {
            result["PMMGExtended"]["sorting"].push([itemAbbreviation, parameters[1], sortingInfo, Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getCheckOfPopupRow */])(burnRow), Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getCheckOfPopupRow */])(zeroRow)]);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        Sort(tile, parameters, result);
        return;
    });
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* makePopupSpacer */])(tile, overlapDiv));
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CommandLists;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function CommandLists(tile, parameters) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length == 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Lists", generateListTable, tile);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Lists", dispStoredList, [tile, parameters]);
    }
    return;
}
function generateListTable(result, tile) {
    const table = document.createElement("table");
    tile.appendChild(table);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Name", "Length", "Delete"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    if (!result["PMMG-Lists"]) {
        result["PMMG-Lists"] = {};
    }
    const names = Array.from(Object.keys(result["PMMG-Lists"]));
    names.forEach(name => {
        const row = document.createElement("tr");
        const nameColumn = document.createElement("td");
        const lengthColumn = document.createElement("td");
        const deleteColumn = document.createElement("td");
        row.appendChild(nameColumn);
        row.appendChild(lengthColumn);
        row.appendChild(deleteColumn);
        body.appendChild(row);
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(name, "XIT LIST_" + name));
        lengthColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(result["PMMG-Lists"][name].length.toLocaleString()));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["H" /* showWarningDialog */])(tile, "Are you sure you want to delete " + name + "?", "Confirm", function () {
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getLocalStorage */])("PMMG-Lists", updateThenStoreList, [name, ""]);
                row.style.display = "none";
                return;
            });
            return;
        });
    });
    if (names.length == 0) {
        var line = document.createElement("tr");
        const textColumn = document.createElement("td");
        textColumn.colSpan = 3;
        textColumn.textContent = "No Command Lists.";
        line.appendChild(textColumn);
        body.appendChild(line);
    }
    return;
}
function updateThenStoreList(result, params) {
    if (!params || !params[0]) {
        return;
    }
    const noteName = params[0];
    const noteText = params[1];
    if (!result["PMMG-Lists"]) {
        result["PMMG-Lists"] = {};
    }
    result["PMMG-Lists"][noteName] = noteText.length == 0 ? undefined : noteText;
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
    return;
}
function dispStoredList(result, param) {
    const tile = param[0];
    const parameters = param[1];
    const listName = (parameters.slice(1)).join("_");
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("title");
    nameDiv.textContent = listName;
    tile.appendChild(nameDiv);
    if (!result["PMMG-Lists"]) {
        result["PMMG-Lists"] = {};
    }
    const table = document.createElement("table");
    tile.appendChild(table);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of [""]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    if (result["PMMG-Lists"][listName] && result["PMMG-Lists"][listName].length > 0) {
        result["PMMG-Lists"][listName].forEach(linkInfo => {
            if (!linkInfo[0] || !linkInfo[1]) {
                return;
            }
            var line = document.createElement("tr");
            const textColumn = document.createElement("td");
            textColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createLink */])(linkInfo[0], linkInfo[1]));
            line.appendChild(textColumn);
            body.appendChild(line);
            return;
        });
    }
    else {
        var line = document.createElement("tr");
        const textColumn = document.createElement("td");
        textColumn.colSpan = 1;
        textColumn.textContent = "No Commands.";
        line.appendChild(textColumn);
        body.appendChild(line);
    }
    const addButton = document.createElement("button");
    addButton.textContent = "Edit";
    tile.appendChild(addButton);
    addButton.style.marginLeft = "5px";
    addButton.style.marginTop = "5px";
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    addButton.addEventListener("click", function () {
        createEditInterface(tile, result, parameters, result["PMMG-Lists"][listName] || []);
        return;
    });
}
function createEditInterface(tile, result, parameters, settings = []) {
    const prefilled = settings.length != 0;
    const listName = (parameters.slice(1)).join("_");
    const overlapDiv = document.createElement("div");
    overlapDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].OverlappingDiv);
    const greyStripes = document.createElement("div");
    greyStripes.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].GreyStripes);
    overlapDiv.appendChild(greyStripes);
    tile.insertBefore(overlapDiv, tile.firstChild);
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* makePopupSpacer */])(tile, overlapDiv));
    const addInterfaceWrapper = document.createElement("div");
    addInterfaceWrapper.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].CenterInterface);
    greyStripes.appendChild(addInterfaceWrapper);
    const addInterface = document.createElement("div");
    addInterface.classList.add("NLOrH7hF5fbKIesqW3uSkA==");
    addInterfaceWrapper.appendChild(addInterface);
    const addHeader = document.createElement('h3');
    addHeader.appendChild(document.createTextNode("Command List Editor"));
    addHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    addInterface.appendChild(addHeader);
    addHeader.style.margin = "0.5em 0 0.5em";
    const form = document.createElement("div");
    addInterface.appendChild(form);
    if (prefilled) {
        for (var i = 0; i < settings.length; i++) {
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link " + (i + 1) + " Label", settings[i][0], i == 0 ? "The label of the first link." : ""));
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link " + (i + 1) + " Command", settings[i][1], i == 0 ? "The command opened by the first link (ex: CX NC1)" : ""));
        }
    }
    else {
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link 1 Label", "", "The label of the first link."));
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link 1 Command", "", "The command opened by the first link (ex: CX NC1)"));
    }
    const addRow = document.createElement("div");
    addRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveRow);
    form.appendChild(addRow);
    const addLabel = document.createElement("label");
    addLabel.textContent = "Add Link";
    addLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveLabel);
    addRow.appendChild(addLabel);
    const addInputDiv = document.createElement("div");
    addInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveInput);
    addRow.appendChild(addInputDiv);
    const addButton = document.createElement("button");
    addButton.textContent = "ADD LINK";
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    addButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    addInputDiv.appendChild(addButton);
    addButton.addEventListener("click", function () {
        const catNumber = (form.children.length) / 2;
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link " + catNumber + " Label"), form.children[form.children.length - 2]);
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupInputRow */])("Link " + catNumber + " Command"), form.children[form.children.length - 2]);
    });
    const saveRow = document.createElement("div");
    saveRow.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveRow);
    form.appendChild(saveRow);
    const saveLabel = document.createElement("label");
    saveLabel.textContent = "CMD";
    saveLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveLabel);
    saveRow.appendChild(saveLabel);
    const saveInputDiv = document.createElement("div");
    saveInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FormSaveInput);
    saveRow.appendChild(saveInputDiv);
    const saveButton = document.createElement("button");
    saveButton.textContent = "SAVE";
    saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].Button);
    saveButton.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].ButtonPrimary);
    saveInputDiv.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
        const commandInfo = [];
        for (var i = 0; i < form.children.length - 2; i += 2) {
            if (!form.children[i] || !form.children[i + 1]) {
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i]) == "" || Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i + 1]) == "") {
                continue;
            }
            commandInfo.push([Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i]), Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getValueOfPopupRow */])(form.children[i + 1])]);
        }
        tile.removeChild(overlapDiv);
        result["PMMG-Lists"][listName] = commandInfo;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        CommandLists(tile, parameters);
        return;
    });
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* makePopupSpacer */])(tile, overlapDiv));
    return;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Help;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function Help(tile) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    const featureHeader = document.createElement('h3');
    featureHeader.appendChild(document.createTextNode("Features"));
    featureHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(featureHeader);
    var table = document.createElement("table");
    tile.appendChild(table);
    var head = document.createElement("thead");
    var headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Name", "Description"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    var body = document.createElement("tbody");
    table.appendChild(body);
    createTableRow(body, ["LM Unit Prices", "Displays per unit prices on the local market."]);
    createTableRow(body, ["LM Posting Unit Prices", "Displaces per unit prices when posting ads."]);
    createTableRow(body, ["Contract Drafts", "Displays per unit prices when creating CONTD."]);
    createTableRow(body, ["Order ETAs", "Displays the date and time when production orders are complete."]);
    createTableRow(body, ["Flight ETAs", "Displays the arrival time when planning a flight."]);
    createTableRow(body, ["Fleet ETAs", "Displays the arrival time of your fleet."]);
    createTableRow(body, ["Queue Load", "Queue Percent Display."]);
    createTableRow(body, ["Consumable Timers", "Adds the number of days of consumables left to WF buffers."]);
    createTableRow(body, ["Notifications", "Shortens and color codes notifications."]);
    createTableRow(body, ["Screen Unpack", "Unpacks the list of screens to the top bar."]);
    createTableRow(body, ["Image Creator", "Loads images and GIFs into chats."]);
    createTableRow(body, ["Inventory Organizer", "Allows for custom sorting of inventories."]);
    createTableRow(body, ["Command Correcter", "Allows for planet names in stock commands (Montem, Promitor, etc.)"]);
    createTableRow(body, ["Sidebar", "Allows the user to customize the left sidebar in XIT SETTINGS."]);
    createTableRow(body, ["Pending Contracts", "Displays the name of the other party in pending contracts."]);
    createTableRow(body, ["Compacted UI", "Minimizes unused portions of the UI"]);
    createTableRow(body, ["Header Minimizer", "Allows minimizing contract and CX headers"]);
    createTableRow(body, ["Color Schemes", "Changes the colors used on material icons. Set in XIT SETTINGS."]);
    const xitHeader = document.createElement('h3');
    xitHeader.appendChild(document.createTextNode("XIT Commands"));
    xitHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(xitHeader);
    table = document.createElement("table");
    tile.appendChild(table);
    head = document.createElement("thead");
    headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Name", "Command", "Parameters", "Description"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    body = document.createElement("tbody");
    table.appendChild(body);
    createTableRow(body, ["Burn", "XIT BURN", "Planet", "Shows the number of days of consumables left."]);
    createTableRow(body, ["Repairs", "XIT REPAIRS", "Planet (optional)", "Shows the materials to repair buildings."]);
    createTableRow(body, ["Contracts", "XIT CONTRACTS", "None", "Shows pending contracts."]);
    createTableRow(body, ["FIO Inventory", "XIT INV", "Username, Planet", "Shows the inventory of another FIO user."]);
    createTableRow(body, ["Notes", "XIT NOTES", "Note Name (optional)", "Provides a text area to type a note in."]);
    createTableRow(body, ["Command Lists", "XIT LIST", "List Name (optional)", "Provides a customizable list of command links."]);
    createTableRow(body, ["Settings", "XIT SETTINGS", "None", "Open PMMG settings."]);
    createTableRow(body, ["Calculator", "XIT CALC", "None", "Provides an ingame calculator."]);
    createTableRow(body, ["Chat", "XIT CHAT", "Planet", "Provides read-only access to a planet chat."]);
    createTableRow(body, ["Debug", "XIT DEBUG", "None", "Debugging menu."]);
    createTableRow(body, ["Start", "XIT START", "None", "First time user popup."]);
    createTableRow(body, ["PrUN Planner", "XIT PLANNER", "Specific Page (optional)", "Links to PrUN Planner."]);
    createTableRow(body, ["Discord", "XIT DISCORD", "Server ID/Name, Channel ID", "Allows you to chat in Discord."]);
    createTableRow(body, ["Sheets", "XIT SHEETS", "Sheet ID", "Connects to Google Sheets."]);
    createTableRow(body, ["Prosperity", "XIT PROSPERITY", "None", "Accesses the Prosperity map tool."]);
    createTableRow(body, ["PrUN", "XIT PRUN", "None", "Opens PrUN... in PrUN!"]);
    const bugHeader = document.createElement('h3');
    bugHeader.appendChild(document.createTextNode("Common Issues"));
    bugHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(bugHeader);
    table = document.createElement("table");
    tile.appendChild(table);
    head = document.createElement("thead");
    headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Description", "Explanation", "Solution"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    body = document.createElement("tbody");
    table.appendChild(body);
    createTableRow(body, ["Seeing green buffers", "PMMG is crashing", "Contact PiBoy314 on Discord"]);
    createTableRow(body, ["FIO data not loading", "FIO server struggling or wrong authentication", "Check FIO username and API key, then check FIO server status on Discord"]);
    createTableRow(body, ["Some contracts missing on XIT CONTRACTS", "Known bug with FIO", "Refresh"]);
    createTableRow(body, ["Want to clear data", "N/A", "Click on extension icon in upper right, click \"Clear Settings\""]);
    createTableRow(body, ["Something else", "N/A", "Ask on Discord, ping PiBoy314."]);
    return;
}
function createTableRow(body, contents) {
    const row = document.createElement("tr");
    contents.forEach(text => {
        const td = document.createElement("td");
        td.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(text));
        row.appendChild(td);
        return;
    });
    body.appendChild(row);
    return;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class OrderETAs {
    constructor() {
        this.tag = "pb-order-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        this.beautifyOrders();
    }
    beautifyOrders() {
        const elements = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdQueue));
        elements.forEach(queue => {
            const prodSlots = Array.from(queue.children);
            var inQueue = false;
            var lineTimes = [];
            var timeElapsed = 0;
            prodSlots.forEach(prodItem => {
                if (prodItem.classList.contains(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdItem)) {
                    try {
                        var duration;
                        if (inQueue) {
                            if (prodItem.children[0].children.length < 2) {
                                return;
                            }
                            lineTimes.sort(function (a, b) { return a - b; });
                            const minTime = lineTimes[0];
                            timeElapsed += minTime;
                            lineTimes.shift();
                            lineTimes = lineTimes.map(function (value) { return value - minTime; });
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["C" /* parseDuration */])(prodItem.children[0].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration + timeElapsed)) {
                                prodItem.children[0].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* convertDurationToETA */])(duration + timeElapsed)})`, this.tag));
                            }
                        }
                        else {
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["C" /* parseDuration */])(prodItem.children[1].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration)) {
                                prodItem.children[1].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* convertDurationToETA */])(duration)})`, this.tag));
                            }
                        }
                    }
                    catch (TypeError) {
                    }
                }
                else {
                    inQueue = true;
                }
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderETAs;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateBurns */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);


class ConsumableTimers {
    constructor(username, burn, thresholds) {
        this.burn = burn;
        this.username = username;
        this.thresholds = thresholds;
    }
    cleanup() {
        return;
    }
    run() {
        if (this.burn[this.username] == undefined || this.burn[this.username].length == 0) {
            return;
        }
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("WF");
        if (!buffers) {
            return;
        }
        ;
        buffers.forEach(buffer => {
            generateBurns(buffer, this.burn[this.username], this.thresholds);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsumableTimers;

function generateBurns(buffer, burn, thresholds) {
    if (buffer.classList.contains("pb-loaded")) {
        return;
    }
    const nameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].WorkforceConsumptionTable);
    if (!nameElem || !nameElem.textContent)
        return;
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["B" /* parseBaseName */])(nameElem.textContent);
    if (!name) {
        return;
    }
    const headers = Array.from(buffer.querySelectorAll("table > thead > tr"));
    headers.forEach(header => {
        const totalHeader = header.children[2];
        const burnHeader = header.children[3];
        totalHeader.textContent = "Total";
        if (burnHeader.children != undefined && burnHeader.children[0] != undefined) {
            burnHeader.removeChild(burnHeader.children[0]);
        }
        burnHeader.textContent = "Burn";
    });
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["t" /* findCorrespondingPlanet */])(name, burn);
    if (planetBurn == undefined) {
        return;
    }
    const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
    elements.forEach(targetRow => {
        if (targetRow.childElementCount < 5) {
            return;
        }
        const outputData = targetRow.children[4];
        const totalData = targetRow.children[3];
        if (outputData.textContent != "") {
            var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["u" /* findInventoryAmount */])(targetRow.children[0].textContent, planetBurn);
            var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["s" /* findBurnAmount */])(targetRow.children[0].textContent, planetBurn);
            var daysLeft;
            if (burnAmount != 0) {
                daysLeft = Math.floor(inventoryAmount / burnAmount);
                if (daysLeft <= thresholds[0]) {
                    if (!outputData.classList.contains("burn-red"))
                        outputData.classList.add("burn-red");
                }
                else if (daysLeft <= thresholds[1]) {
                    if (!outputData.classList.contains("burn-yellow"))
                        outputData.classList.add("burn-yellow");
                }
                else {
                    if (!outputData.classList.contains("burn-green"))
                        outputData.classList.add("burn-green");
                }
                daysLeft = daysLeft.toFixed(0);
                if (daysLeft == 1) {
                    daysLeft += " Day";
                }
                else {
                    daysLeft += " Days";
                }
            }
            else {
                daysLeft = "";
            }
            var firstChild = outputData.firstChild;
            if (firstChild != null) {
                outputData.removeChild(firstChild);
            }
            outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(daysLeft));
            firstChild = totalData.firstChild;
            if (firstChild != null) {
                totalData.removeChild(firstChild);
            }
            totalData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
        }
    });
    buffer.classList.add("pb-loaded");
    return;
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FleetETAs {
    constructor() {
        this.tag = "pb-flt-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["C" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FleetETAs;



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class PostLM {
    constructor(prices) {
        this.cleanups = [];
        this.tag = "pb-post-lm-price";
        this.prices = prices;
    }
    cleanup() {
        this.cleanups.forEach((f, i) => {
            f();
            delete this.cleanups[i];
        });
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMPostForm)).forEach(form => {
            const type = Array.from(form.getElementsByClassName("StaticInput__static___Vpn1u0n forms__static___a4biDi4"));
            var shipping = false;
            for (let elem of type) {
                if (elem.textContent == "SHIPPING") {
                    shipping = true;
                    break;
                }
            }
            const commodity = document.evaluate("div[label/span[text()='Commodity']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            const amountInput = document.evaluate("div[label/span[text()='Amount']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            const totalPriceInput = document.evaluate("div[label/span[text()='Total price']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            const currencyInput = document.evaluate("div[label/span[text()='Currency']]//select", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["p" /* createTextSpan */])("--", this.tag);
            if (shipping && commodity.value != "") {
                totalPriceInput.parentNode.insertBefore(displayElement, totalPriceInput);
                const calculatePricePerUnit = () => {
                    const amount = parseInt(amountInput.value);
                    const total = parseFloat(totalPriceInput.value);
                    const matInfo = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* Materials */][commodity.value];
                    const currency = currencyInput.value;
                    var currencySymbol;
                    if (currency != undefined) {
                        currencySymbol = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* CurrencySymbols */][currency];
                    }
                    else {
                        currencySymbol = "";
                    }
                    if (currencySymbol == undefined) {
                        currencySymbol = "";
                    }
                    if (matInfo == undefined || matInfo == null) {
                        return;
                    }
                    const unit = matInfo[1] >= matInfo[2] ? "t" : "m³";
                    const weightvolume = Math.max(matInfo[1], matInfo[2]);
                    if (isNaN(weightvolume) || isNaN(total)) {
                        displayElement.textContent = "-- t | " + currencySymbol + "-- / t";
                    }
                    else {
                        displayElement.textContent = (amount * weightvolume).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " " + unit + " | " + currencySymbol + (total / (amount * weightvolume)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " / " + unit;
                    }
                };
                calculatePricePerUnit();
            }
            else if (Object.keys(this.prices).length == 0) {
                totalPriceInput.parentNode.insertBefore(displayElement, totalPriceInput);
                const calculatePricePerUnit = () => {
                    const amount = parseInt(amountInput.value);
                    const total = parseFloat(totalPriceInput.value);
                    const currency = currencyInput.value;
                    var currencySymbol;
                    if (currency != undefined) {
                        currencySymbol = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* CurrencySymbols */][currency];
                    }
                    else {
                        currencySymbol = "";
                    }
                    if (currencySymbol == undefined) {
                        currencySymbol = "";
                    }
                    displayElement.textContent = currencySymbol + (total / amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ea";
                };
                calculatePricePerUnit();
            }
            else if (commodity.value != undefined && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* Materials */][commodity.value] != undefined) {
                totalPriceInput.parentNode.insertBefore(displayElement, totalPriceInput);
                const calculatePricePerUnit = () => {
                    const amount = parseInt(amountInput.value);
                    const total = parseFloat(totalPriceInput.value);
                    const currency = currencyInput.value;
                    var currencySymbol;
                    if (currency != undefined) {
                        currencySymbol = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* CurrencySymbols */][currency];
                    }
                    else {
                        currencySymbol = "";
                    }
                    if (currencySymbol == undefined) {
                        currencySymbol = "";
                    }
                    var price = this.prices[commodity.value];
                    if (price == undefined) {
                        price = "";
                    }
                    else if (amount + " " == "NaN ") {
                        price = "";
                    }
                    else {
                        price = " | " + (price * amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " Total Corp";
                    }
                    displayElement.textContent = currencySymbol + (total / amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ea" + (price);
                };
                calculatePricePerUnit();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostLM;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ShippingAds {
    constructor() {
        this.tag = "pb-shipping-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdText);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = element.textContent;
            const matches = text && text.match(/(?:SHIPPING)\s([\d,.]+)t\s\/\s([\d,.]+)m³\s@\s([\d,.]+)\s[A-Z]+\sfrom/);
            if (matches && matches.length > 3) {
                const totalCost = matches[3];
                const tonnage = parseFloat(matches[1].replace(/[,.]/g, '')) / 100;
                const size = parseFloat(matches[2].replace(/[,.]/g, '')) / 100;
                var unit;
                var count;
                if (tonnage > size) {
                    unit = 't';
                    count = tonnage;
                }
                else {
                    unit = 'm³';
                    count = size;
                }
                const totalCents = parseInt(totalCost.replace(/[,.]/g, ''));
                const perItem = (totalCents / count / 100).toLocaleString(undefined, { maximumFractionDigits: 2 });
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShippingAds;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class QueueLoad {
    constructor() {
        this.tag = "pb-queue-load";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["C" /* parseDuration */])(etaSpan.textContent);
                return eta;
            }
        }
        return 0;
    }
    calculateQueueLoad() {
        const tables = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdQueueTable));
        tables.forEach(table => {
            const rows = Array.from(table.querySelectorAll("tbody:nth-of-type(2) > tr"));
            const totalTime = rows.reduce((total, row) => {
                const n = this.getEtaFromRow(row);
                return total + n;
            }, 0);
            if (totalTime > 0) {
                rows.forEach(row => {
                    const eta = this.getEtaFromRow(row);
                    const percent = (eta / totalTime * 100).toLocaleString(undefined, { maximumFractionDigits: 2 });
                    const textField = row.querySelectorAll("td").item(6);
                    if (textField && eta > 0) {
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* createTextSpan */])(` ${percent}%`, this.tag);
                        textField.appendChild(span);
                    }
                });
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QueueLoad;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(3);



class Notifications {
    constructor() {
        this.tag = "pb-nots";
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
        return;
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].Notification);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.children[1].firstChild && element.children[1].firstChild.classList.contains(this.tag)) {
                continue;
            }
            const textContent = element.children[1].children[0].textContent;
            if (textContent == null) {
                continue;
            }
            const text = textContent.toLowerCase();
            var foundType = false;
            Searchers.forEach(search => {
                if (foundType) {
                    return;
                }
                const match = text.match(new RegExp(search[0]));
                if (match != null) {
                    const typeSpan = document.createElement("div");
                    typeSpan.textContent = search[1].toUpperCase();
                    typeSpan.classList.add(this.tag);
                    typeSpan.classList.add("notification");
                    typeSpan.style.color = search[2];
                    element.children[1].insertBefore(typeSpan, element.children[1].children[0]);
                    var matches;
                    var notText = element.children[1].children[1].textContent;
                    if (notText == null) {
                        return;
                    }
                    notText = notText.replace(/Chamber of Global Commerce/, "COGC");
                    switch (search[0]) {
                        case "produced":
                            notText = notText.replace(/at your base /, "");
                            notText = notText.replace(/One /, "1 ");
                            notText = notText.replace(/ have been/, "");
                            notText = notText.replace(/ unit[s]? of/, "");
                            matches = notText.match(/ ([A-z -]+) produced/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]][0]);
                            }
                            foundType = true;
                            break;
                        case "trade":
                            matches = notText.match(/your ([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]][0]);
                            }
                            foundType = true;
                        case "order filled":
                            notText = notText.replace(/ Commodity Exchange/, "");
                            matches = notText.match(/([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* Materials */][matches[1]][0]);
                            }
                            foundType = true;
                            break;
                        case "accepted":
                            notText = notText.replace(/ the/, "");
                            notText = notText.replace(/ local market/, "");
                            foundType = true;
                            break;
                        case "contract":
                            notText = notText.replace(/Your partner /, "");
                            foundType = true;
                            break;
                        case "arrived at":
                            notText = notText.replace(/its destination /, "");
                            foundType = true;
                            break;
                        case "cogc":
                        case "chamber of global commerce":
                            notText = notText.replace(/ a new economic program/, "");
                            notText = notText.replace(/ Advertising Campaign:/, "");
                            foundType = true;
                            break;
                    }
                    element.children[1].children[1].textContent = notText;
                }
            });
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Notifications;

const Searchers = [
    ["contract", "contract", "rgb(247, 166, 0)"],
    ["our corporation", "corp", "#8f52cc"],
    ["accepted our invitation", "corp", "#8f52cc"],
    ["produced", "produced", "#3fa2de"],
    ["accepted", "advert", "#449c57"],
    ["expired", "advert", "#449c57"],
    ["trade", "trade", "#008000"],
    ["order filled", "order", "#cc2929"],
    ["arrived at", "arrival", "#b336b3"],
    ["report", "report", "#00aa77"],
    ["election", "election", "#8f52cc"],
    ["governor", "governor", "#8f52cc"],
    ["rules", "rules", "#8f52cc"],
    ["cogc", "COGC", "#8f52cc"],
    ["chamber of global commerce", "COGC", "#8f52cc"],
    ["expert", "expert", "#ff8a00"],
    ["population infrastructure project", "POPI", "#8f52cc"],
    ["apex", "update", "#00aa77"],
    ["warehous", "war", "#cc2929"],
    ["shipbuilding project", "ship", "#8f52cc"],
    ["planetary project", "infra", "#8f52cc"],
    ["consumable supplies", "supplies", "#b37b32"]
];


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ScreenUnpack {
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["v" /* genericCleanup */])(this.tag);
    }
    constructor(exclusions) {
        this.tag = "pb-screens";
        exclusions = exclusions == undefined ? [] : exclusions;
        this.exclusions = [];
        exclusions.forEach(ex => { this.exclusions.push(ex.toUpperCase()); });
    }
    run() {
        const navbar = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ScreenControls);
        if (navbar == null) {
            return;
        }
        if (navbar.children[navbar.children.length - 1].classList.contains(this.tag)) {
            return;
        }
        const navbarItemClassList = navbar.children[2].classList;
        const nbitMainClassList = navbar.children[2].children[0].classList;
        const nbitUnderlineClassList = navbar.children[2].children[1].classList;
        const menu = navbar.children[1].children[1];
        var links = [];
        Array.from(menu.children).forEach((cn) => {
            if (cn.children.length == 4 && !this.exclusions.includes(String(cn.children[1].innerHTML).toUpperCase())) {
                links.push({ "Name": cn.children[1].innerHTML, "Link": cn.children[1].href });
            }
        });
        const spacerDiv = document.createElement("div");
        spacerDiv.classList.add(this.tag);
        spacerDiv.style.display = "inline-block";
        spacerDiv.style.width = "5px";
        navbar.appendChild(spacerDiv);
        links.forEach(link => {
            const button = `<div class="${navbarItemClassList}">
                          <a class="${nbitMainClassList}" style="color: inherit" href="${link.Link}">${link.Name}</a>
                          <div class="${nbitUnderlineClassList}"></div>
                      </div>`;
            const buttonElem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createNode */])(button);
            buttonElem.classList.add(this.tag);
            navbar.appendChild(buttonElem);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenUnpack;



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class Sidebar {
    constructor(buttons) {
        this.tag = "pb-sidebar";
        this.defaultButtons = ["BS", "CONT", "COM", "CORP", "CXL", "FIN", "FLT", "INV", "MAP", "PROD", "CMDS"];
        this.buttons = buttons;
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_2__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const sidebar = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LeftSidebar);
        if (!this.buttons) {
            this.buttons = [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]];
        }
        if (!sidebar) {
            return;
        }
        this.defaultButtons.forEach(defaultButton => {
            var enabled = false;
            for (let option of this.buttons) {
                if (option[0].toUpperCase() === defaultButton) {
                    enabled = true;
                    break;
                }
            }
            if (!enabled) {
                Array.from(sidebar.children).forEach(child => {
                    if (child.firstChild != null && (child.firstChild.textContent || "").toUpperCase() === defaultButton) {
                        child.classList.add("hidden-element");
                        Array.from(child.children).forEach(childChild => { childChild.classList.add("hidden-element"); });
                    }
                });
            }
        });
        if (sidebar.children[sidebar.children.length - 1].classList.contains(this.tag)) {
            return;
        }
        this.buttons.forEach(buttonInfo => {
            if (this.defaultButtons.includes(buttonInfo[0].toUpperCase())) {
                return;
            }
            const button = document.createElement("div");
            const buttonText = Object(__WEBPACK_IMPORTED_MODULE_2__util__["p" /* createTextSpan */])(buttonInfo[0].toUpperCase(), this.tag);
            const sliver = document.createElement("div");
            button.classList.add(this.tag);
            sliver.classList.add(this.tag);
            button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarButton);
            buttonText.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarText);
            sliver.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSliver);
            button.appendChild(buttonText);
            button.appendChild(sliver);
            sidebar.appendChild(button);
            button.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_2__util__["G" /* showBuffer */])(buttonInfo[1]); });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sidebar;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(3);



class CommandCorrecter {
    cleanup() {
        return;
    }
    run() {
        Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferArea)).forEach(buffer => {
            if (buffer.children.length > 1) {
                const bufferField = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTextField);
                if (bufferField == null) {
                    return;
                }
                var bufferText = bufferField.value.toUpperCase() || "";
                if (__WEBPACK_IMPORTED_MODULE_2__GameProperties__["f" /* PlanetCommands */].includes(bufferText.split(" ")[0])) {
                    var replaced = false;
                    Object.keys(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["g" /* PlanetNames */]).forEach(name => {
                        if (bufferText.includes(" " + name)) {
                            bufferText = bufferText.replace(" " + name, " " + __WEBPACK_IMPORTED_MODULE_2__GameProperties__["g" /* PlanetNames */][name]);
                            replaced = true;
                        }
                    });
                    if (replaced) {
                        bufferField.value = "";
                        Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* changeValue */])(bufferField, bufferText);
                        if (bufferField.parentElement == null || bufferField.parentElement.parentElement == null) {
                            return;
                        }
                        bufferField.parentElement.parentElement.requestSubmit();
                    }
                }
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommandCorrecter;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class CalculatorButton {
    constructor() {
        this.tag = "pb-calc";
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_0__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        const calcTags = ["LM", "CX", "XIT"];
        calcTags.forEach(tag => {
            const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])(tag);
            buffers.forEach(buffer => {
                if ((buffer.children[3] || buffer.children[2]).firstChild.classList.contains(this.tag) || (buffer.children[3] || buffer.children[2]).children[1].classList.contains(this.tag)) {
                    return;
                }
                const calcDiv = document.createElement("div");
                calcDiv.classList.add(this.tag);
                calcDiv.classList.add("button-upper-right");
                calcDiv.style.marginTop = "-3px";
                (buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild.id == "refresh" ? (buffer.children[3] || buffer.children[2]).children[1] : (buffer.children[3] || buffer.children[2]).firstChild);
                const svgContainer = document.createElement("div");
                const svg = document.createElement("svg");
                svgContainer.appendChild(svg);
                svg.outerHTML = `<svg height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								 viewBox="0 0 460 460" xml:space="preserve">
							<g id="XMLID_241_">
								<g>
									<path d="M369.635,0H90.365C73.595,0,60,13.595,60,30.365v399.27C60,446.405,73.595,460,90.365,460h279.27
										c16.77,0,30.365-13.595,30.365-30.365V30.365C400,13.595,386.405,0,369.635,0z M108.204,343.61v-43.196
										c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196
										C111.001,349.858,108.204,347.06,108.204,343.61z M108.204,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
										c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C111.001,262.858,108.204,260.06,108.204,256.61
										z M308.891,421H151.109c-11.046,0-20-8.954-20-20c0-11.046,8.954-20,20-20h157.782c11.046,0,20,8.954,20,20
										C328.891,412.046,319.937,421,308.891,421z M208.402,294.165h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196
										c0,3.451-2.797,6.248-6.248,6.248h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196
										C202.154,296.963,204.951,294.165,208.402,294.165z M202.154,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
										c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C204.951,262.858,202.154,260.06,202.154,256.61
										z M345.548,349.858h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
										c3.451,0,6.248,2.797,6.248,6.248v43.196h0C351.796,347.061,348.999,349.858,345.548,349.858z M345.548,262.858h-43.196
										c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196h0
										C351.796,260.061,348.999,262.858,345.548,262.858z M354,149.637c0,11.799-9.565,21.363-21.363,21.363H127.364
										C115.565,171,106,161.435,106,149.637V62.363C106,50.565,115.565,41,127.364,41h205.273C344.435,41,354,50.565,354,62.363V149.637
										z"/>
								</g>
							</g>
							</svg>`;
                calcDiv.appendChild(svgContainer);
                calcDiv.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* showBuffer */])("XIT CALCULATOR"); });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatorButton;



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class ContractDrafts {
    constructor(prices) {
        this.tag = "pb-contd";
        this.prices = prices;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["w" /* getBuffers */])("CONTD ").forEach(buffer => {
            const conditionTable = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDConditionsTable);
            if (!conditionTable) {
                return;
            }
            const conditionTexts = conditionTable.querySelectorAll("tr > td:nth-child(2)");
            const parsedConditions = {};
            Array.from(conditionTexts).forEach(condition => {
                const conditionText = condition.textContent;
                if (!conditionText) {
                    return;
                }
                const provisionMatch = (/Provision ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) @/gm).exec(conditionText);
                if (provisionMatch && provisionMatch.length >= 3) {
                    const quantity = provisionMatch[1];
                    const material = provisionMatch[2];
                    parsedConditions["Material"] = [quantity.replace(",", "").replace(".", ""), material];
                    return;
                }
                const deliverMatch = (/Delivery of ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) to/gm).exec(conditionText);
                if (deliverMatch && deliverMatch.length >= 3) {
                    const quantity = deliverMatch[1];
                    const material = deliverMatch[2];
                    parsedConditions["Material"] = [quantity.replace(",", "").replace(".", ""), material];
                    return;
                }
                const paymentMatch = (/Payment of ([0-9,.]+)/gm).exec(conditionText);
                if (paymentMatch && paymentMatch.length >= 2) {
                    parsedConditions["Payment"] = paymentMatch[1].replace(",", "").replace(".", "");
                    return;
                }
                const shipMatch = (/Provision shipment of ([0-9,.]+) unit[s]? of ([A-Za-z0-9 ]+) @/gm).exec(conditionText);
                if (shipMatch && shipMatch.length >= 3) {
                    const quantity = shipMatch[1];
                    const material = shipMatch[2];
                    parsedConditions["Shipment"] = [quantity.replace(",", "").replace(".", ""), material];
                    return;
                }
                return;
            });
            const conditionEditorForm = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDForm);
            if (!conditionEditorForm) {
                return;
            }
            const labels = [];
            const conditionEditorLabels = conditionEditorForm.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDFormLabel);
            Array.from(conditionEditorLabels).forEach(label => {
                labels.push(label.textContent || "");
                return;
            });
            if (labels[1] == "Currency" && parsedConditions["Material"] && parsedConditions["Material"][1]) {
                const rowSpacer = conditionEditorForm.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDFormRowSpacer);
                if (!rowSpacer || !rowSpacer.firstChild) {
                    return;
                }
                const amountInput = rowSpacer.querySelector("div > input");
                if (!amountInput) {
                    return;
                }
                const perUnit = parseInt(amountInput.value || "0") / parseInt(parsedConditions["Material"][0]);
                var labelText = perUnit.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " ea";
                if (this.prices[parsedConditions["Material"][1]]) {
                    const totalCorp = parseInt(parsedConditions["Material"][0]) * this.prices[parsedConditions["Material"][1]];
                    labelText += " | " + totalCorp.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " Corp";
                }
                rowSpacer.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["p" /* createTextSpan */])(labelText, this.tag), rowSpacer.firstChild);
            }
            else if (labels[1] == "Currency" && parsedConditions["Shipment"] && parsedConditions["Shipment"][1]) {
                const rowSpacer = conditionEditorForm.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDFormRowSpacer);
                if (!rowSpacer || !rowSpacer.firstChild) {
                    return;
                }
                const amountInput = rowSpacer.querySelector("div > input");
                if (!amountInput) {
                    return;
                }
                const isHeavy = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* Materials */][parsedConditions["Shipment"][1]][1] > __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* Materials */][parsedConditions["Shipment"][1]][2];
                const perUnit = parseInt(amountInput.value || "0") / parseInt(parsedConditions["Shipment"][0]) / __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* Materials */][parsedConditions["Shipment"][1]][isHeavy ? 1 : 2];
                var labelText = perUnit.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + (isHeavy ? "/t" : "/m³");
                rowSpacer.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["p" /* createTextSpan */])(labelText, this.tag), rowSpacer.firstChild);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContractDrafts;



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);


class ImageCreator {
    constructor() {
        this.tag = "pb-image";
    }
    cleanup() {
        return;
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("COM");
        if (!buffers) {
            return;
        }
        ;
        buffers.forEach(buffer => {
            const chatLinks = buffer.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ChatLink);
            const chatArea = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ChatArea);
            if (!chatArea) {
                return;
            }
            Array.from(chatLinks).forEach(link => {
                const linkText = link.textContent;
                if (!linkText || link.classList.contains(this.tag)) {
                    return;
                }
                if (!isImage(linkText)) {
                    return;
                }
                const img = document.createElement("img");
                img.classList.add("chat-image");
                img.src = linkText;
                if (!link.parentElement) {
                    return;
                }
                link.parentElement.appendChild(document.createElement("br"));
                link.parentElement.appendChild(img);
                link.classList.add(this.tag);
                chatArea.scrollBy(0, (img.offsetHeight || 0) + 2);
                return;
            });
            return;
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageCreator;

function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameProperties__ = __webpack_require__(3);




class InventoryOrganizer {
    constructor(username, fullBurn, result) {
        this.tag = "pb-inv-org";
        this.username = username;
        this.fullBurn = fullBurn;
        this.result = result;
    }
    cleanup() {
        return;
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("INV ");
        const result = this.result;
        if (!buffers || !result || !result["PMMGExtended"]) {
            return;
        }
        ;
        if (this.result["PMMGExtended"]["inventory_sorting"]) {
            this.result["PMMGExtended"]["inventory_sorting"] = undefined;
        }
        if (!this.result["PMMGExtended"]["selected_sorting"]) {
            this.result["PMMGExtended"]["selected_sorting"] = [];
        }
        ;
        if (!this.result["PMMGExtended"]["sorting"]) {
            this.result["PMMGExtended"]["sorting"] = [];
        }
        ;
        const screenNameElem = document.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ScreenName);
        const screenName = screenNameElem ? screenNameElem.textContent : "";
        if (!screenName) {
            return;
        }
        const tag = this.tag;
        buffers.forEach(buffer => {
            const sortOptions = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].InventorySortOptions);
            if (!sortOptions) {
                return;
            }
            const baseNameElem = buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferHeader);
            if (!baseNameElem || !baseNameElem[0]) {
                return;
            }
            const invName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["D" /* parseInvName */])(baseNameElem[0].textContent);
            if (!invName) {
                return;
            }
            const planetNameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].InventoryName);
            const planetName = planetNameElem ? Object(__WEBPACK_IMPORTED_MODULE_0__util__["E" /* parsePlanetName */])(planetNameElem.textContent) : "";
            const burn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["t" /* findCorrespondingPlanet */])(planetName, this.fullBurn[this.username]);
            const inventory = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].Inventory);
            if (!inventory || !inventory.parentElement) {
                return;
            }
            if (!inventory.classList.contains("pb-monitored")) {
                inventory.classList.add("pb-monitored");
                sortInventory(inventory, sortOptions, result, this.tag, screenName, invName, burn);
                let onMutationsObserved = function () {
                    observer.disconnect();
                    setTimeout(() => {
                        observer.observe(target, config);
                    }, 250);
                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["I" /* targetedCleanup */])(tag, inventory);
                    sortInventory(inventory, sortOptions, result, tag, screenName, invName, burn);
                    return;
                };
                let target = inventory;
                let config = { childList: true, subtree: true };
                let MutationObserver = window["MutationObserver"] || window["WebKitMutationObserver"];
                let observer = new MutationObserver(onMutationsObserved);
                observer.observe(target, config);
            }
            return;
        });
        const shipBuffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("SHPI ");
        if (!shipBuffers) {
            return;
        }
        ;
        shipBuffers.forEach(buffer => {
            const sortOptions = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].InventorySortOptions);
            if (!sortOptions) {
                return;
            }
            const shipNameElem = buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferHeader);
            if (!shipNameElem || !shipNameElem[0]) {
                return;
            }
            const shipName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["D" /* parseInvName */])(shipNameElem[0].textContent);
            if (!shipName) {
                return;
            }
            const inventory = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].Inventory);
            if (!inventory || !inventory.parentElement) {
                return;
            }
            if (!inventory.classList.contains("pb-monitored")) {
                inventory.classList.add("pb-monitored");
                sortInventory(inventory, sortOptions, result, tag, screenName, shipName, undefined);
                let onMutationsObserved = function () {
                    observer.disconnect();
                    setTimeout(() => {
                        observer.observe(target, config);
                    }, 250);
                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["I" /* targetedCleanup */])(tag, inventory);
                    sortInventory(inventory, sortOptions, result, tag, screenName, shipName, undefined);
                    return;
                };
                let target = inventory;
                let config = { childList: true, subtree: true };
                let MutationObserver = window["MutationObserver"] || window["WebKitMutationObserver"];
                let observer = new MutationObserver(onMutationsObserved);
                observer.observe(target, config);
            }
            return;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InventoryOrganizer;

function sortInventory(inventory, sortOptions, result, tag, screenName, planetName, burn) {
    if (sortOptions.children.length <= 7) {
        Array.from(sortOptions.children).forEach(option => {
            if (option != sortOptions.firstChild && !option.classList.contains("pb-toggle")) {
                option.addEventListener("click", function () {
                    if (option.children[1]) {
                        option.children[1].style.display = "inline";
                    }
                    Array.from(sortOptions.children).forEach(optionInner => {
                        if (optionInner.children[1] && optionInner.classList.contains("pb-toggle")) {
                            optionInner.removeChild(optionInner.children[1]);
                            result["PMMGExtended"]["selected_sorting"].forEach(sortSettings => {
                                if (sortSettings[0] == screenName + planetName) {
                                    sortSettings[1] = "";
                                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
                                }
                                return;
                            });
                        }
                        return;
                    });
                    if (inventory.firstChild) {
                        inventory.insertBefore(inventory.firstChild, inventory.firstChild);
                    }
                    return;
                });
            }
            return;
        });
        if (burn) {
            sortOptions.appendChild(createToggle(result, sortOptions, "BRN", findIfActive(result["PMMGExtended"]["selected_sorting"], screenName + planetName, "BRN"), screenName + planetName, inventory));
        }
        result["PMMGExtended"]["sorting"].forEach(settings => {
            if (!settings[0] || !settings[1] || !settings[2]) {
                return;
            }
            if (settings[1].toUpperCase() != planetName.toUpperCase()) {
                return;
            }
            sortOptions.appendChild(createToggle(result, sortOptions, settings[0], findIfActive(result["PMMGExtended"]["selected_sorting"], screenName + planetName, settings[0]), screenName + planetName, inventory));
            return;
        });
    }
    if (sortOptions.children[sortOptions.children.length - 1] && sortOptions.children[sortOptions.children.length - 1].textContent != "+") {
        const addButton = document.createElement("div");
        addButton.classList.add("InventorySortControls__criteria___ijLMgjm");
        sortOptions.appendChild(addButton);
        const addLabel = document.createElement("div");
        addLabel.textContent = "+";
        addButton.appendChild(addLabel);
        addButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* showBuffer */])("XIT SORT_" + planetName);
            return;
        });
    }
    var activeSort = "";
    result["PMMGExtended"]["selected_sorting"].forEach(sortSettings => {
        if (sortSettings[0] == screenName + planetName) {
            activeSort = sortSettings[1];
        }
        return;
    });
    Array.from(sortOptions.children).forEach(option => {
        if (option != sortOptions.firstChild && option.firstChild && option.firstChild.textContent == activeSort && !option.children[1]) {
            const toggleIndicator = document.createElement("div");
            toggleIndicator.innerHTML = __WEBPACK_IMPORTED_MODULE_3__GameProperties__["h" /* SortingTriangleHTML */];
            toggleIndicator.style.marginLeft = "2px";
            option.appendChild(toggleIndicator);
        }
        else if (option.firstChild && option.firstChild.textContent != activeSort && option.children[1]) {
            if (option.classList.contains("pb-toggle")) {
                option.removeChild(option.children[1]);
            }
            else if (activeSort != "") {
                option.children[1].style.display = "none";
            }
            else {
                option.children[1].style.display = "inline";
            }
        }
        return;
    });
    if (activeSort == "") {
        return;
    }
    var materials = Array.from(inventory.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].FullMaterialIcon));
    materials.sort(materialSort);
    var sorted = [];
    var sortingDetails = [];
    result["PMMGExtended"]["sorting"].forEach(result_sortingDetails => {
        if (result_sortingDetails[0] == activeSort && result_sortingDetails[1] == planetName) {
            sortingDetails = result_sortingDetails;
        }
        return;
    });
    if (activeSort != "BRN") {
        if (sortingDetails.length < 3) {
            return;
        }
        if (sortingDetails[4]) {
            var materialsToSort = [];
            sortingDetails[2].forEach(category => {
                materialsToSort = materialsToSort.concat(category[1]);
            });
            var materialsToSort = materialsToSort.filter((c, index) => {
                return materialsToSort.indexOf(c) === index;
            });
            materialsToSort.forEach(ticker => {
                if (!materialListContains(materials, ticker)) {
                    const matElement = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createMaterialElement */])(ticker, tag, "0", true, false);
                    if (!matElement) {
                        return;
                    }
                    const matQuantityElem = matElement.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialQuantity);
                    if (matQuantityElem) {
                        matQuantityElem.style.color = "#cc0000";
                    }
                    materials.push(matElement);
                }
            });
            materials.sort(materialSort);
        }
        sortingDetails[2].forEach(category => {
            const categoryTitle = document.createElement('h3');
            categoryTitle.appendChild(document.createTextNode(category[0]));
            categoryTitle.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
            categoryTitle.style.width = "100%";
            categoryTitle.classList.add(tag);
            inventory.appendChild(categoryTitle);
            var areItemsInCategory = false;
            materials.forEach(material => {
                const tickerElem = material.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
                if (!tickerElem) {
                    return;
                }
                const ticker = tickerElem.textContent;
                if (ticker && category[1].includes(ticker) && !sorted.includes(ticker)) {
                    inventory.appendChild(material);
                    areItemsInCategory = true;
                }
            });
            if (!areItemsInCategory) {
                inventory.removeChild(categoryTitle);
            }
            sorted = sorted.concat(category[1]);
            return;
        });
    }
    if (sortingDetails[3] || activeSort == "BRN") {
        if (burn) {
            const workforceMaterials = extractMaterials(burn["WorkforceConsumption"]);
            const inputMaterials = extractMaterials(burn["OrderConsumption"]);
            const outputMaterials = extractMaterials(burn["OrderProduction"]);
            const workforceTitle = document.createElement('h3');
            workforceTitle.appendChild(document.createTextNode("Consumables"));
            workforceTitle.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
            workforceTitle.style.width = "100%";
            workforceTitle.classList.add(tag);
            inventory.appendChild(workforceTitle);
            var areConsumables = false;
            materials.forEach(material => {
                const tickerElem = material.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
                if (!tickerElem) {
                    return;
                }
                const ticker = tickerElem.textContent;
                if (ticker && workforceMaterials.includes(ticker) && !inputMaterials.includes(ticker) && !outputMaterials.includes(ticker) && !sorted.includes(ticker)) {
                    inventory.appendChild(material);
                    areConsumables = true;
                }
            });
            if (!areConsumables) {
                inventory.removeChild(workforceTitle);
            }
            const inputTitle = document.createElement('h3');
            inputTitle.appendChild(document.createTextNode("Inputs"));
            inputTitle.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
            inputTitle.style.width = "100%";
            inputTitle.classList.add(tag);
            inventory.appendChild(inputTitle);
            var areInputs = false;
            materials.forEach(material => {
                const tickerElem = material.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
                if (!tickerElem) {
                    return;
                }
                const ticker = tickerElem.textContent;
                if (ticker && inputMaterials.includes(ticker) && !sorted.includes(ticker)) {
                    inventory.appendChild(material);
                    areInputs = true;
                }
            });
            if (!areInputs) {
                inventory.removeChild(inputTitle);
            }
            const outputTitle = document.createElement('h3');
            outputTitle.appendChild(document.createTextNode("Outputs"));
            outputTitle.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
            outputTitle.style.width = "100%";
            outputTitle.classList.add(tag);
            inventory.appendChild(outputTitle);
            var areOutputs = false;
            materials.forEach(material => {
                const tickerElem = material.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
                if (!tickerElem) {
                    return;
                }
                const ticker = tickerElem.textContent;
                if (ticker && outputMaterials.includes(ticker) && !inputMaterials.includes(ticker) && !sorted.includes(ticker)) {
                    inventory.appendChild(material);
                    areOutputs = true;
                }
            });
            if (!areOutputs) {
                inventory.removeChild(outputTitle);
            }
            sorted = sorted.concat(workforceMaterials);
            sorted = sorted.concat(inputMaterials);
            sorted = sorted.concat(outputMaterials);
        }
    }
    const miscTitle = document.createElement('h3');
    miscTitle.appendChild(document.createTextNode("Other"));
    miscTitle.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
    miscTitle.style.width = "100%";
    miscTitle.classList.add(tag);
    inventory.appendChild(miscTitle);
    var areMisc = false;
    materials.forEach(material => {
        const tickerElem = material.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
        if (!tickerElem) {
            return;
        }
        const ticker = tickerElem.textContent;
        if (ticker && !sorted.includes(ticker)) {
            inventory.appendChild(material);
            areMisc = true;
        }
        return;
    });
    if (!areMisc) {
        inventory.removeChild(miscTitle);
    }
    return;
}
function materialListContains(materials, ticker) {
    for (var i = 0; i < materials.length; i++) {
        const tickerElem = materials[i].querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
        if (!tickerElem) {
            continue;
        }
        if (ticker == tickerElem.textContent) {
            return true;
        }
    }
    return false;
}
function findIfActive(sortSettings, screenPlanet, sortModeName) {
    var match = false;
    sortSettings.forEach(settings => {
        if (settings[0] == screenPlanet && settings[1] == sortModeName) {
            match = true;
        }
        return match;
    });
    return match;
}
function createToggle(result, sortOptions, abbreviation, selected, combinedName, inventory) {
    const customSortButton = document.createElement("div");
    customSortButton.classList.add("InventorySortControls__criteria___ijLMgjm");
    customSortButton.classList.add("pb-toggle");
    const toggleLabel = document.createElement("div");
    toggleLabel.textContent = abbreviation;
    customSortButton.appendChild(toggleLabel);
    if (selected) {
        Array.from(sortOptions.children).forEach(option => {
            if (option.children[1]) {
                if (option.classList.contains("pb-toggle")) {
                    option.removeChild(option.children[1]);
                }
                else {
                    option.children[1].style.display = "none";
                }
            }
            return;
        });
        const toggleIndicator = document.createElement("div");
        toggleIndicator.innerHTML = __WEBPACK_IMPORTED_MODULE_3__GameProperties__["h" /* SortingTriangleHTML */];
        toggleIndicator.style.marginLeft = "2px";
        customSortButton.appendChild(toggleIndicator);
    }
    customSortButton.addEventListener("click", function () {
        Array.from(sortOptions.children).forEach(option => {
            if (option.children[1]) {
                if (option.classList.contains("pb-toggle")) {
                    option.removeChild(option.children[1]);
                }
                else {
                    option.children[1].style.display = "none";
                }
                if (inventory.firstChild) {
                    inventory.insertBefore(inventory.firstChild, inventory.firstChild);
                }
            }
            return;
        });
        const toggleIndicator = document.createElement("div");
        toggleIndicator.innerHTML = __WEBPACK_IMPORTED_MODULE_3__GameProperties__["h" /* SortingTriangleHTML */];
        toggleIndicator.style.marginLeft = "2px";
        customSortButton.appendChild(toggleIndicator);
        var savedBefore = false;
        result["PMMGExtended"]["selected_sorting"].forEach(sortingOptions => {
            if (sortingOptions[0] == combinedName) {
                sortingOptions[1] = abbreviation;
                savedBefore = true;
            }
            return;
        });
        if (!savedBefore) {
            result["PMMGExtended"]["selected_sorting"].push([combinedName, abbreviation]);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* setSettings */])(result);
        return;
    });
    return customSortButton;
}
function extractMaterials(burn) {
    const materials = [];
    burn.forEach(mat => {
        materials.push(mat["MaterialTicker"] || "");
    });
    return materials;
}
function materialSort(a, b) {
    const tickerElemA = a.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
    if (!tickerElemA) {
        return;
    }
    const tickerA = tickerElemA.textContent;
    const tickerElemB = b.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].MaterialText);
    if (!tickerElemB) {
        return;
    }
    const tickerB = tickerElemB.textContent;
    if (!__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerA] || !__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerB]) {
        return 0;
    }
    if (__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerA][1] == __WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerB][1]) {
        return tickerA.localeCompare(tickerB);
    }
    return __WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerA][1].localeCompare(__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][tickerB][1]);
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(2);



class HeaderMinimizer {
    constructor(minByDefault) {
        this.tag = "pb-min-headers";
        this.minByDefault = minByDefault;
    }
    cleanup() {
        return;
    }
    run() {
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("CX ");
        if (!buffers) {
            return;
        }
        buffers.forEach(buffer => {
            minimizeHeaders(buffer, this.minByDefault, this.tag);
        });
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("CONT ");
        if (!buffers) {
            return;
        }
        buffers.forEach(buffer => {
            minimizeHeaders(buffer, this.minByDefault, this.tag);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderMinimizer;

function minimizeHeaders(buffer, minByDefault, tag) {
    const bufferPanel = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferPanel);
    if (!bufferPanel || !bufferPanel.firstChild) {
        return;
    }
    const headers = buffer.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].HeaderRow);
    if (headers[0] && headers[0].classList.contains(tag)) {
        return;
    }
    if (minByDefault) {
        Array.from(headers).forEach(header => {
            const label = header.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ContDFormLabel);
            if (label && label.textContent == "Termination request") {
                const value = header.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ContDFormInput);
                if (value && value.textContent != "--") {
                    return;
                }
            }
            if (!header.classList.contains(tag)) {
                header.style.display = "none";
            }
        });
    }
    const minimizeButton = document.createElement("div");
    minimizeButton.textContent = minByDefault ? "+" : "-";
    minimizeButton.classList.add("pb-minimize");
    minimizeButton.classList.add("pb-minimize-cx");
    minimizeButton.addEventListener("click", function () {
        const minimize = minimizeButton.textContent == "-";
        minimizeButton.textContent = minimize ? "+" : "-";
        Array.from(headers).forEach(header => {
            const label = header.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ContDFormLabel);
            if (label && label.textContent == "Termination request") {
                const value = header.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].ContDFormInput);
                if (value && value.textContent != "--") {
                    return;
                }
            }
            if (!header.classList.contains(tag)) {
                header.style.display = minimize ? "none" : "flex";
            }
            return;
        });
        return;
    });
    bufferPanel.firstChild.insertBefore(createHeaderRow("Minimize", minimizeButton, tag), bufferPanel.firstChild.firstChild);
    return;
}
function createHeaderRow(labelText, rightSideContents, tag) {
    const row = document.createElement("div");
    row.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].HeaderRow);
    row.classList.add(tag);
    const label = document.createElement("label");
    label.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormLabel);
    label.textContent = labelText;
    row.appendChild(label);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].FormSaveInput);
    const rightSideDiv = document.createElement("div");
    rightSideDiv.appendChild(rightSideContents);
    content.appendChild(rightSideDiv);
    row.appendChild(content);
    return row;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);


class PendingContracts {
    constructor(username, contracts) {
        this.tag = "pb-pending-contracts";
        this.username = username;
        this.contracts = contracts;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["v" /* genericCleanup */])(this.tag);
    }
    run() {
        if (!this.username)
            return;
        const contractLines = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].SidebarContract));
        var contractdict = {};
        if (!this.contracts[this.username]) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* createContractDict */])(this.contracts, this.username, contractdict);
        contractLines.forEach(contract => {
            const contractIDElement = contract.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].SidebarContractId);
            if (!contractIDElement) {
                return;
            }
            const contractID = contractIDElement.textContent;
            if (!contractID) {
                return;
            }
            if (contractdict[contractID] && contractdict[contractID]["PartnerName"]) {
                var partnercode = contractdict[contractID]["PartnerName"];
                if (partnercode.length > 19) {
                    partnercode = contractdict[contractID]["PartnerCompanyCode"] || contractdict[contractID]["PartnerName"].split(" ")[0];
                }
                const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(`${partnercode}`, this.tag);
                nameSpan.style.width = "100px";
                contract.insertBefore(nameSpan, contract.firstChild);
                return;
            }
            const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])("Unknown", this.tag);
            nameSpan.style.width = "100px";
            contract.insertBefore(nameSpan, contract.firstChild);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PendingContracts;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HideElement */
/* unused harmony export UnHideElement */
/* unused harmony export ClearBuildingLists */
/* unused harmony export ClearBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Style__ = __webpack_require__(2);



class CompactUI {
    constructor(result) {
        this.tag = "pb-compactui";
        this.result = result;
    }
    cleanup() {
    }
    run() {
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("BBL");
        if (buffers) {
            buffers.forEach(buffer => {
                ClearBuildingLists(buffer, this.result, this.tag);
            });
        }
        ;
        buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* getBuffers */])("BS");
        if (buffers) {
            buffers.forEach(buffer => {
                ClearBase(buffer, this.tag);
            });
        }
        ;
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CompactUI;

function HideElement(element, tag) {
    element.style.display = "none";
    element.classList.add(tag + "-hidden");
}
function UnHideElement(element, tag) {
    element.style.display = "";
    element.classList.remove(tag + "-hidden");
}
function ClearBuildingLists(buffer, result, tag) {
    const nameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BuildingList);
    if (!nameElem || !nameElem.textContent)
        return;
    Array.from(buffer.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].Divider)).forEach((row) => {
        if (row.childNodes.length < 2) {
            var newmenu = document.createElement("span");
            var indicator = document.createElement("div");
            var value = document.createElement("div");
            newmenu.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButton));
            indicator.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonToggled));
            value.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonValue));
            value.innerText = "Visible";
            row.appendChild(newmenu);
            newmenu.appendChild(indicator);
            newmenu.appendChild(value);
            newmenu.addEventListener("click", function () {
                if (indicator.classList.contains(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonToggled[1])) {
                    if (row.nextElementSibling)
                        HideElement(row.nextElementSibling, tag);
                    indicator.classList.remove(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonToggled));
                    indicator.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonUnToggled));
                }
                else {
                    if (row.nextElementSibling)
                        UnHideElement(row.nextElementSibling, tag);
                    indicator.classList.remove(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonUnToggled));
                    indicator.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].RadioButtonToggled));
                }
            });
            if (row.innerText.includes("Infrastructure")) {
                var event = new CustomEvent("click", { "detail": "fake click" });
                newmenu.dispatchEvent(event);
            }
        }
    });
    Array.from(nameElem.getElementsByTagName("table")).forEach((table) => {
        var repaired = false;
        var EstablishRow;
        var buttons = table.parentNode.getElementsByTagName("button");
        buttons[1].classList.remove(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ButtonEnabled));
        buttons[1].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ButtonDanger));
        Array.from(table.rows).forEach(row => {
            let Line;
            (function (Line) {
                Line[Line["Established"] = 0] = "Established";
                Line[Line["Repair"] = 1] = "Repair";
                Line[Line["Cost"] = 2] = "Cost";
                Line[Line["Refund"] = 3] = "Refund";
                Line[Line["Value"] = 4] = "Value";
                Line[Line["Condition"] = 5] = "Condition";
            })(Line || (Line = {}));
            var dict = {
                'Established': Line.Established,
                'Last repair': Line.Repair,
                'Repair costs': Line.Cost,
                'Reclaimable materials': Line.Refund,
                'Book value': Line.Value,
                'Condition': Line.Condition
            };
            var linetype = Line.Established;
            Array.from(row.getElementsByTagName("td")).forEach(data => {
                var text = data.innerText;
                if (!text) {
                    return;
                }
                if (dict[text] != null) {
                    linetype = dict[text];
                    if (linetype == Line.Established)
                        EstablishRow = row;
                }
                else if (text == "--")
                    HideElement(row, tag);
                else if (text == "none")
                    HideElement(row, tag);
                else {
                    text.split(" ").forEach(word => {
                        var value = parseFloat(word);
                        if (!Number.isNaN(value)) {
                            if (linetype == Line.Repair)
                                repaired = true;
                            if (linetype == Line.Condition || linetype == Line.Established || linetype == Line.Repair) {
                                var bar = data.getElementsByTagName("progress");
                                if (value > 180)
                                    HideElement(row, tag);
                                else if (bar && bar.length > 0) {
                                    bar[0].classList.remove(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarColors));
                                    bar[0].value = value;
                                    var progress = bar[0].value / bar[0].max;
                                    if (linetype == Line.Condition) {
                                        if (value > 98 && buttons[0].classList.contains(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ButtonEnabled[0])) {
                                            buttons[0].classList.remove(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ButtonEnabled));
                                            buttons[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ButtonDanger));
                                        }
                                        if (progress > 0.90)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarGood));
                                        else if (progress > 0.80)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarWarning));
                                        else if (progress > 0)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarDanger));
                                    }
                                    else {
                                        bar[0].value = 180 - value;
                                        progress = bar[0].value / bar[0].max;
                                        var threshold = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] / 180.0 : (70.0 / 180.0);
                                        if (progress > 0.75)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarGood));
                                        else if (progress > threshold)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarWarning));
                                        else if (progress > 0)
                                            bar[0].classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBarDanger));
                                    }
                                }
                                else {
                                    var newbar = document.createElement("progress");
                                    newbar.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2_Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2_Style__["e" /* Style */].ProgressBar));
                                    if (linetype == Line.Condition)
                                        newbar.max = 100;
                                    else
                                        newbar.max = 180;
                                    data.insertBefore(newbar, data.firstChild);
                                }
                            }
                            else if (linetype == Line.Value && value < 2000)
                                HideElement(row, tag);
                            else if (value <= 1)
                                HideElement(row, tag);
                        }
                    });
                }
            });
            if (repaired)
                HideElement(EstablishRow, tag);
        });
    });
}
function ClearBase(buffer, tag) {
    const elements = Array.from(buffer.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].HeaderRow));
    if (elements.length == 0) {
        return;
    }
    elements[0].style.display = "none";
    const areaBar = elements[0].getElementsByTagName("progress")[0];
    if (!areaBar) {
        return;
    }
    const areaBarCopy = areaBar.cloneNode(true);
    areaBarCopy.classList.add(tag);
    const editdiv = elements[1].getElementsByTagName("div")[0];
    if (editdiv.firstChild.classList.contains(tag) && editdiv.firstChild) {
        editdiv.removeChild(editdiv.firstChild);
    }
    editdiv.insertBefore(areaBarCopy, editdiv.lastChild);
    Array.from(buffer.getElementsByTagName("table")).forEach((table) => {
        Array.from(table.rows).forEach(row => {
            var data = Array.from(row.getElementsByTagName("td"));
            if (data.length == 0) {
                data = Array.from(row.getElementsByTagName("th"));
                data[2].innerText = "Current";
            }
            else {
                var required = parseFloat(data[1].innerText);
                var workforce = parseFloat(data[2].innerText.split(" ")[0]);
                var capacity = parseFloat(data[3].innerText);
                const bar = data[4].getElementsByTagName("div")[0];
                const barValue = bar.getElementsByTagName("progress")[0].title;
                if (bar.lastChild && bar.lastChild.classList.contains(tag)) {
                    bar.removeChild(bar.lastChild);
                }
                bar.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextSpan */])(barValue, tag));
                bar.style.display = "flex";
                bar.style.flexDirection = "row";
                if (required < 1 && capacity < 1 && workforce < 1)
                    HideElement(row, tag);
            }
        });
    });
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWZmMTMxMmM0NGQ0ZjhkNTUzM2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGVja2xpc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGlnaHRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2NhbE1hcmtldEFkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlUnVubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU3RhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1JlcGFpcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGF0LnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvRmluYW5jZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9CdXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU2hlZXRUYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1dlYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL05vdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU29ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0hlbHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09yZGVyRVRBcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3VtYWJsZVRpbWVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRmxlZXRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb3N0TE0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoaXBwaW5nQWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9RdWV1ZUxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vdGlmaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjcmVlblVucGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tbWFuZENvcnJlY3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FsY3VsYXRvckJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJhY3REcmFmdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW52ZW50b3J5T3JnYW5pemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXJNaW5pbWl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BlbmRpbmdDb250cmFjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBhY3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNxQztBQUNmO0FBQ3JEO0FBQ1AsMkVBQTJFLHFCQUFxQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFDQUFxQztBQUMvRTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxTQUFTLHNFQUFhLFFBQVEsc0VBQWE7QUFDM0M7QUFDQTtBQUNBLFdBQVcsc0VBQWEscUJBQXFCLHNFQUFhO0FBQzFEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxvRUFBVyxZQUFZLG9FQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUNBQXlDLEVBQUUsT0FBTyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0VBQVc7QUFDeEQsbUJBQW1CLG9FQUFXO0FBQzlCO0FBQ0Esb0NBQW9DLEVBQUUsT0FBTyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsc0VBQWE7QUFDdEI7QUFDQTtBQUNBLGtCQUFrQixzRUFBYTtBQUMvQixzQkFBc0Isc0VBQWE7QUFDbkM7QUFDQSw2QkFBNkIsa0VBQVUsQ0FBQyxxREFBSztBQUM3QztBQUNBLG9DQUFvQyxrRUFBVSxDQUFDLHFEQUFLO0FBQ3BEO0FBQ0E7QUFDQSw4QkFBOEIsa0VBQVUsQ0FBQyxxREFBSztBQUM5QztBQUNBLGdDQUFnQyw4REFBYztBQUM5QywyQkFBMkIsOERBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUNBQXFDLGtFQUFVLENBQUMscURBQUs7QUFDckQ7QUFDQTtBQUNBLDRDQUE0QyxrRUFBVSxDQUFDLHFEQUFLO0FBQzVEO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQVUsQ0FBQyxxREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrRUFBVSxDQUFDLHFEQUFLO0FBQy9EO0FBQ0E7QUFDQSx3Q0FBd0Msa0VBQVUsQ0FBQyxxREFBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrRUFBVSxDQUFDLHFEQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDJDQUEyQywyREFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxxREFBcUQsMkRBQVEsY0FBYyw0RkFBNEYsV0FBVztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLCtDQUErQyxLQUFLLDJCQUEyQixTQUFTLHdEQUF3RCxnQkFBZ0IsZ0JBQWdCO0FBQ2hMO0FBQ0E7QUFDTztBQUNQO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBLDhCQUE4QixxREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQTtBQUNBLG1DQUFtQyxxREFBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDLGtEQUFrRCw4QkFBOEIsRUFBRTtBQUNsRjtBQUNBO0FBQ087QUFDUCxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QztBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0Esa0NBQWtDLHFEQUFLO0FBQ3ZDLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEMsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDeGlCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUMxQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QywrQ0FBK0M7QUFDL0MsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBO0FBQ0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQLGdNQUFnTSwrRkFBK0Y7QUFBQTtBQUFBO0FBQ3hSLHlJQUF5STtBQUFBO0FBQUE7QUFDekk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNqMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOU1BO0FBQUE7QUFBQTtBQUFrRztBQUNqRTtBQUMxQixrQ0FBa0M7QUFBQTtBQUFBO0FBQ2xDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekMscUNBQXFDLHFFQUFjO0FBQ25ELGdDQUFnQyxxRUFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBZTtBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsK0VBQStFLEVBQUU7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekM7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscURBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEM7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBSztBQUN4QztBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQSx1QkFBdUIsOERBQThEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYyxrREFBa0QscUNBQXFDLDJEQUEyRCxvREFBb0Q7QUFDMU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBOEQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ3hUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1E7QUFDSjtBQUNOO0FBQ2M7QUFDZDtBQUNOO0FBQ1U7QUFDSjtBQUNRO0FBQ3VDO0FBQ3hCO0FBQ2pCO0FBQ1Y7QUFDa0I7QUFDQTtBQUNKO0FBQ0o7QUFDWTtBQUNOO0FBQ0U7QUFDZDtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrREFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFTO0FBQ2I7QUFDQSxJQUFJLDJFQUFPO0FBQ1g7QUFDQSxJQUFJLG1GQUFlO0FBQ25CO0FBQ0EsSUFBSSxnRkFBWTtBQUNoQix1QkFBdUIsbUVBQVk7QUFDbkMsWUFBWSxpRUFBVztBQUN2QixZQUFZLHVFQUFjO0FBQzFCLFlBQVksdURBQU07QUFDbEIsWUFBWSx3RUFBYztBQUMxQixZQUFZLDZEQUFTO0FBQ3JCLFlBQVksK0RBQVU7QUFDdEIsWUFBWSw2REFBUztBQUNyQixZQUFZLDZEQUFTO0FBQ3JCLFlBQVksMkVBQWdCO0FBQzVCLFlBQVksZ0ZBQWtCO0FBQzlCLFlBQVkscUVBQWE7QUFDekIsWUFBWSxvRUFBWTtBQUN4QixZQUFZLG9FQUFZO0FBQ3hCLFlBQVksMEVBQWU7QUFDM0IsWUFBWSw0RUFBZ0I7QUFDNUIsWUFBWSw0RUFBZ0I7QUFDNUIsWUFBWSwwREFBTztBQUNuQixZQUFZLDRFQUFnQjtBQUM1QixZQUFZLDhEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2R0E7QUFBeUc7QUFDbEc7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsZ0NBQWdDLDJFQUFvQjtBQUNwRCx3Q0FBd0MscUVBQWMsTUFBTSxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyRUFBb0I7QUFDckQseUNBQXlDLHFFQUFjLE1BQU0sU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3hDRDtBQUFBO0FBQXNDO0FBQ2tCO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0QsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkRBQVE7QUFDaEUsc0ZBQXNGLDJCQUEyQjtBQUNqSCxzQ0FBc0MscUVBQWMsTUFBTSxRQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUEwQztBQUNPO0FBQ0E7QUFDMUM7QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUVBQVU7QUFDckU7QUFDQSxnQkFBZ0Isa0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ2Q7QUFDRjtBQUNNO0FBQ047QUFDVTtBQUNGO0FBQ047QUFDRztBQUNLO0FBQ0k7QUFDRjtBQUNpRDtBQUNwRDtBQUNUO0FBQ1U7QUFDWjtBQUNnQjtBQUNoQjtBQUMzQjtBQUNQLFdBQVcsbUVBQVU7QUFDckIsZUFBZSw4REFBVztBQUMxQixjQUFjLDZEQUFVO0FBQ3hCLGtCQUFrQixpRUFBYztBQUNoQyxZQUFZLDJEQUFRO0FBQ3BCLGtCQUFrQix3RUFBYztBQUNoQyxXQUFXLDhEQUFPO0FBQ2xCLFlBQVksMkRBQVE7QUFDcEIsWUFBWSxtRUFBZ0I7QUFDNUIsZ0JBQWdCLCtEQUFRO0FBQ3hCLGlCQUFpQixzRUFBYTtBQUM5QixlQUFlLGlFQUFXO0FBQzFCLGtCQUFrQixtRUFBVTtBQUM1QixZQUFZLG1FQUFVO0FBQ3RCLGFBQWEseURBQUs7QUFDbEIsYUFBYSx5REFBSztBQUNsQixZQUFZLDBEQUFLO0FBQ2pCLGFBQWEsMERBQUs7QUFDbEIsYUFBYSxvRUFBVTtBQUN2QixjQUFjLG9FQUFVO0FBQ3hCLGlCQUFpQixvRUFBVTtBQUMzQixrQkFBa0Isb0VBQVU7QUFDNUIsWUFBWSx3REFBSTtBQUNoQixZQUFZLHdFQUFZO0FBQ3hCLGFBQWEsd0VBQVk7QUFDekIsbUJBQW1CLDhEQUFXO0FBQzlCLGVBQWUsOERBQVc7QUFDMUIsWUFBWSx1REFBSTtBQUNoQixZQUFZLHdEQUFJO0FBQ2hCLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLDJEQUFRO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxxRUFBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0Q7QUFDQTtBQUNBLHFFQUFxRSw0RUFBNEUsRUFBRTtBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDeEtEO0FBQUE7QUFBb0U7QUFDN0Q7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQSxvQkFBb0IscUVBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxRUFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxRUFBYztBQUMxQyx5QkFBeUIsaUVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFFQUFjO0FBQ3hDLHFCQUFxQixxRUFBYztBQUNuQztBQUNBOzs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBdUk7QUFDMUY7QUFDdEM7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRUFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG9FQUFhO0FBQ2xELDBDQUEwQyxxREFBSztBQUMvQztBQUNBO0FBQ0EsMEJBQTBCLHFFQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9FQUFhO0FBQ2pELHlDQUF5QyxxREFBSztBQUM5QztBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUVBQWtCO0FBQzlDLDRCQUE0Qix5RUFBa0I7QUFDOUMsNEJBQTRCLHlFQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkMseUJBQXlCLG9FQUFhO0FBQ3RDLDhCQUE4QixxREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDLHlCQUF5QixvRUFBYTtBQUN0Qyw4QkFBOEIscURBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQixxRUFBYztBQUN4QywwQkFBMEIsb0VBQWE7QUFDdkMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQSxtR0FBbUcsMkJBQTJCO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQSxzR0FBc0csMkJBQTJCO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQWE7QUFDMUMsa0NBQWtDLHFEQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFLHFEQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvRUFBYTtBQUNoRCx3Q0FBd0MscURBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsMENBQTBDLHFEQUFLO0FBQy9DO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtFQUFVLENBQUMscURBQUssY0FBYyxxREFBSztBQUNqRTtBQUNBLHlCQUF5QixxRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0NBQStDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQVc7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxREFBSztBQUM1QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QyxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLGtFQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDLHFEQUFLO0FBQ3ZDLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLG1FQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQyxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw2QkFBNkIscUVBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQyxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlLGVBQWUsMkRBQVk7QUFDbEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsdUJBQXVCLFFBQVEsRUFBRTtBQUNuRixLQUFLLEVBQUUscURBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUNBQXlDLHFEQUFLO0FBQzlDO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxREFBSztBQUM1QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBLHVDQUF1QyxxREFBSztBQUM1QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN2RBO0FBQUE7QUFBQTtBQUFBO0FBQXFFO0FBQ3BDO0FBQzFCO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWE7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLElBQUksbUVBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBd0M7QUFDakM7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLDRCQUE0QjtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw0QkFBNEI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLDRCQUE0QjtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw0QkFBNEI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNU5BO0FBQUE7QUFBb0Y7QUFDN0U7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQWE7QUFDekI7QUFDQTtBQUNBLFlBQVksa0VBQVc7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFhO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUZBQW1GLDJCQUEyQiw0REFBNEQsMkJBQTJCO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYztBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtR0FBbUcsMkJBQTJCLCtEQUErRCwyQkFBMkI7QUFDeE47QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFjO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYztBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOVFBO0FBQUE7QUFBdUQ7QUFDaEQ7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csbUNBQW1DO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxxQ0FBcUM7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBc0Y7QUFDL0U7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxRUFBYztBQUM3QztBQUNBO0FBQ0EsWUFBWSxrRUFBVztBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUksc0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbEc7QUFDTTtBQUNXO0FBQ1U7QUFDckQ7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtFQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQiw4RUFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhFQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJEQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyxxRUFBYywrREFBK0QsbUNBQW1DLHFEQUFxRCxxQ0FBcUM7QUFDMU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRFQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYyxDQUFDLHNFQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWMsMkNBQTJDLDJCQUEyQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjLG1GQUFtRiwyQkFBMkI7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjLG9DQUFvQywyQkFBMkI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDN1dBO0FBQUE7QUFBdUU7QUFDaEU7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3NJO0FBQ2hHO0FBQ2E7QUFDNUM7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0JBQXNCLGtFQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw0RUFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUFjO0FBQ2xDO0FBQ0EsMEJBQTBCLHVFQUFjO0FBQ3hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBCQUEwQixpRUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvRUFBYTtBQUNwQyxpQkFBaUIscUVBQWM7QUFDL0IseUJBQXlCLDBEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvRUFBYTtBQUNwQyxpQkFBaUIscUVBQWM7QUFDL0IsK0RBQStELDBEQUFVLFdBQVcsMERBQVU7QUFDOUY7QUFDQSxlQUFlLHFFQUFjLEtBQUssc0NBQXNDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDakM7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFBMEc7QUFDeEQ7QUFDM0M7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBYTtBQUNyQjtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0EsUUFBUSxvRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUVBQWM7QUFDckM7QUFDQSxxQkFBcUIscUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjLHVDQUF1QyxxREFBcUQsbURBQW1ELHFEQUFxRDtBQUM3TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjLHVDQUF1QyxxREFBcUQsbURBQW1ELHFEQUFxRDtBQUM3TztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEVBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBLGtDQUFrQyxpRUFBVTtBQUM1QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsc0VBQWEsMEJBQTBCLHNFQUFhO0FBQzdHO0FBQ0E7QUFDQSxRQUFRLHNFQUFhLDRCQUE0QixzRUFBYTtBQUM5RDtBQUNBO0FBQ0EsV0FBVyxzRUFBYSx1Q0FBdUMsc0VBQWE7QUFDNUU7Ozs7Ozs7O0FDNUpBO0FBQUE7QUFBQTtBQUFxSDtBQUN0RTtBQUN4QztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9FQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekMsaUNBQWlDLHFFQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFpQjtBQUM3QixnQkFBZ0Isc0VBQWU7QUFDL0I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUE4TDtBQUM3SjtBQUMxQjtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUMsaUNBQWlDLHdFQUFpQjtBQUNsRCxpQ0FBaUMsd0VBQWlCO0FBQ2xELDJCQUEyQiw4Q0FBOEM7QUFDekU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBSztBQUNyQztBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLHNFQUFlO0FBQzNDO0FBQ0EseUNBQXlDLHFEQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwRUFBbUI7QUFDeEM7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DLDZCQUE2QiwwRUFBbUI7QUFDaEQsNkJBQTZCLDBFQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEVBQW1CO0FBQzVDLHlCQUF5QiwwRUFBbUI7QUFDNUM7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQUs7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwRUFBbUI7QUFDN0MsMEJBQTBCLDBFQUFtQjtBQUM3QyxLQUFLO0FBQ0wsb0JBQW9CLDZFQUFzQjtBQUMxQztBQUNBLG9CQUFvQiw2RUFBc0I7QUFDMUM7QUFDQTtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckMsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQWtCO0FBQ25EO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWtCLDRCQUE0Qix5RUFBa0I7QUFDaEY7QUFDQTtBQUNBLDhCQUE4Qix5RUFBa0Isb0JBQW9CLHlFQUFrQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQThDO0FBQ3pFO0FBQ0EsMEdBQTBHLHlFQUFrQixXQUFXLHlFQUFrQjtBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLHlFQUFrQixXQUFXLHlFQUFrQjtBQUNqSjtBQUNBLFFBQVEsa0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsc0VBQWU7QUFDM0M7Ozs7Ozs7O0FDOUxBO0FBQUE7QUFBQTtBQUErSztBQUM5STtBQUMxQjtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFVO0FBQ3pDLGlDQUFpQyxxRUFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBaUI7QUFDN0IsZ0JBQWdCLHNFQUFlO0FBQy9CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQSw0QkFBNEIsc0VBQWU7QUFDM0M7QUFDQSx5Q0FBeUMscURBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDLDZCQUE2QiwwRUFBbUI7QUFDaEQsNkJBQTZCLDBFQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEVBQW1CO0FBQzVDLHlCQUF5QiwwRUFBbUI7QUFDNUM7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQUs7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwRUFBbUI7QUFDN0MsMEJBQTBCLDBFQUFtQjtBQUM3QyxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDLGdDQUFnQyxxREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5RUFBa0IsNEJBQTRCLHlFQUFrQjtBQUNoRjtBQUNBO0FBQ0EsOEJBQThCLHlFQUFrQixvQkFBb0IseUVBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsc0VBQWU7QUFDM0M7QUFDQTs7Ozs7Ozs7QUMvTkE7QUFBQTtBQUFBO0FBQXdEO0FBQ3ZCO0FBQzFCO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUVBQWM7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBc0M7QUFDdUQ7QUFDdEY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwyREFBUTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMkRBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0Usd0JBQXdCLEVBQUU7QUFDbEcsdUNBQXVDLG9FQUFhO0FBQ3BEO0FBQ0E7QUFDQSw2RUFBNkUscUVBQWMsTUFBTSwyRUFBb0IseUJBQXlCO0FBQzlJO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvRUFBYTtBQUNwRDtBQUNBO0FBQ0EsNkVBQTZFLHFFQUFjLE1BQU0sMkVBQW9CLFdBQVc7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3ZERDtBQUFBO0FBQUE7QUFBaUk7QUFDM0Y7QUFDL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJEQUFRO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUIsb0VBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1Qiw4RUFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwRUFBbUI7QUFDckQsNkJBQTZCLHFFQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxRUFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYztBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckdBO0FBQXlHO0FBQ2xHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkVBQW9CLENBQUMsb0VBQWE7QUFDbEUsd0NBQXdDLHFFQUFjLE1BQU0sSUFBSTtBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBO0FBQXNDO0FBQ3dCO0FBQ047QUFDakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0EsNkNBQTZDLDJEQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxRUFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtFQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3RUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxxREFBcUQsdUdBQXVHLHFEQUFxRDtBQUN6VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0VBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcscURBQXFEO0FBQ25LO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxrRUFBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3RUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YscURBQXFEO0FBQ3pJO0FBQ0EsOEdBQThHLHFEQUFxRDtBQUNuSztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUNsSEQ7QUFBQTtBQUFzQztBQUNrQjtBQUNqRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0EsbURBQW1ELDJEQUFRO0FBQzNELHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDJCQUEyQjtBQUNqSCx3REFBd0QsMkRBQVE7QUFDaEUsc0NBQXNDLHFFQUFjLE1BQU0sUUFBUSxHQUFHLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUNyQ0Q7QUFBQTtBQUFzQztBQUNpQztBQUNoRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0VBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDJEQUFRO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLDJCQUEyQjtBQUNsSDtBQUNBO0FBQ0EscUNBQXFDLHFFQUFjLEtBQUssUUFBUTtBQUNoRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDNUNEO0FBQUE7QUFBQTtBQUFzQztBQUNFO0FBQ0s7QUFDdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0QsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGtFQUFTO0FBQ3ZGLGtGQUFrRixrRUFBUztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGtFQUFTO0FBQ3ZGLGtGQUFrRixrRUFBUztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGtFQUFTO0FBQ3ZGLGtGQUFrRixrRUFBUztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0SEE7QUFBQTtBQUFzQztBQUNjO0FBQzdDO0FBQ1A7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3Q0FBd0MsRUFBRTtBQUM1RTtBQUNBO0FBQ0EsK0NBQStDLDJEQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFnRTtBQUM1RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELHNDQUFzQyxrQkFBa0IsaUNBQWlDLFVBQVUsSUFBSSxVQUFVO0FBQ2pILHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDOUNEO0FBQUE7QUFBQTtBQUFzQztBQUNOO0FBQ29DO0FBQzdEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFjO0FBQzlCO0FBQ0E7QUFDQSxnREFBZ0QsMkRBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLDRDQUE0QyxFQUFFO0FBQ3hIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDLHdDQUF3QyxxREFBSztBQUM3QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMERBQTBELENBQUMsaUVBQVUsZ0JBQWdCLEVBQUU7QUFDdkYsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDMUREO0FBQUE7QUFBQTtBQUFxQztBQUNDO0FBQ3lCO0FBQ3hEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkRBQVE7QUFDckQ7QUFDQSx5REFBeUQsMkRBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSxnQ0FBZ0Msb0VBQVc7QUFDM0M7QUFDQSw4RUFBOEUsb0VBQVc7QUFDekY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esd0JBQXdCLGtFQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDbkNEO0FBQWdFO0FBQ3pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELENBQUMsaUVBQVUsbUJBQW1CLEVBQUU7QUFDL0YsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3BERDtBQUFBO0FBQUE7QUFBc0M7QUFDTztBQUN1QjtBQUM3RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLGlFQUFVO0FBQ2xCLHdEQUF3RCwyREFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw2REFBNkQsMkRBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsMkRBQVE7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0VBQW9FLDJEQUFRO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUscURBQXFEO0FBQ3hIO0FBQ0E7QUFDQSw4RUFBOEUscURBQXFEO0FBQ25JO0FBQ0EsdUNBQXVDLHFFQUFjO0FBQ3JEO0FBQ0E7QUFDQSxvRUFBb0UsMkRBQVE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQVMsdUNBQXVDLGtFQUFTO0FBQ3pGLGlIQUFpSCxrRUFBUztBQUMxSCxtRUFBbUUscURBQXFEO0FBQ3hILHVDQUF1QyxxRUFBYztBQUNyRDtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQy9GRDtBQUFBO0FBQW9DO0FBQ0U7QUFDL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJEQUFRO0FBQzlELGtEQUFrRCwyREFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQTZKO0FBQ3ZIO0FBQ047QUFDc0M7QUFDL0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwyREFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDJEQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkRBQVE7QUFDaEUsZ0RBQWdELHNFQUFlO0FBQy9ELHlCQUF5Qiw4RUFBdUI7QUFDaEQsbURBQW1ELDJEQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQixzRUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDJEQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCwyREFBUTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDJEQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQixzRUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtFQUFXO0FBQy9DO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFVO0FBQ3RCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0RUFBbUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUNBQXVDLDRFQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsMkRBQVE7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkRBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscURBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscURBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscURBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkRBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekMsc0RBQXNELDJEQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQ0FBb0MsNEVBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQ0FBb0MsNEVBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNFQUFhLGNBQWMsc0VBQWE7QUFDakQ7QUFDQTtBQUNBLFFBQVEsc0VBQWEsZ0JBQWdCLHNFQUFhO0FBQ2xEO0FBQ0E7QUFDQSxXQUFXLHNFQUFhLDJCQUEyQixzRUFBYTtBQUNoRTs7Ozs7Ozs7QUN6ZEE7QUFBQTtBQUFBO0FBQW9DO0FBQ0U7QUFDTjtBQUN6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxzQkFBc0IsaUVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDRDtBQUNBLDZDQUE2QywyREFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkRBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyREFBUTtBQUN2RDtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQVE7QUFDdkQ7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFLO0FBQzlCO0FBQ0E7QUFDQSwyQkFBMkIscURBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUE0RTtBQUN0QztBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsMkRBQVE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFrQjtBQUMxQjtBQUNBLDZEQUE2RCwyREFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUVBQWMsSUFBSSxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFFQUFjO0FBQzNDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQzdDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNkO0FBQ0k7QUFDbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpRUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGtCQUFrQixpRUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQLDBDQUEwQywyREFBUTtBQUNsRDtBQUNBO0FBQ0EsdUNBQXVDLDJEQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlFQUFVLENBQUMsb0RBQUs7QUFDckQsdUNBQXVDLGlFQUFVLENBQUMsb0RBQUs7QUFDdkQsbUNBQW1DLGlFQUFVLENBQUMsb0RBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvREFBSztBQUN0RDtBQUNBO0FBQ0Esa0RBQWtELGlFQUFVLENBQUMsb0RBQUs7QUFDbEUsK0NBQStDLGlFQUFVLENBQUMsb0RBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUVBQVUsQ0FBQyxvREFBSztBQUNsRSwrQ0FBK0MsaUVBQVUsQ0FBQyxvREFBSztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLHNEQUFzRCx5QkFBeUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlFQUFVLENBQUMsb0RBQUs7QUFDdkQsb0NBQW9DLGlFQUFVLENBQUMsb0RBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsaUVBQVUsQ0FBQyxvREFBSztBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Ysb0RBQUs7QUFDN0YsMkVBQTJFLGlFQUFVLENBQUMsb0RBQUs7QUFDM0Ysd0VBQXdFLGlFQUFVLENBQUMsb0RBQUs7QUFDeEY7QUFDQTtBQUNBLG9FQUFvRSxpRUFBVSxDQUFDLG9EQUFLO0FBQ3BGO0FBQ0Esb0VBQW9FLGlFQUFVLENBQUMsb0RBQUs7QUFDcEY7QUFDQSxvRUFBb0UsaUVBQVUsQ0FBQyxvREFBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsaUVBQVUsQ0FBQyxvREFBSztBQUNwRjtBQUNBLG9FQUFvRSxpRUFBVSxDQUFDLG9EQUFLO0FBQ3BGO0FBQ0Esb0VBQW9FLGlFQUFVLENBQUMsb0RBQUs7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaUVBQVUsQ0FBQyxvREFBSztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQLHdEQUF3RCwyREFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxRUFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWZmMTMxMmM0NGQ0ZjhkNTUzM2EiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzLCBQbGFuZXROYW1lcywgU3lzdGVtTmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgU3R5bGUsIENhdGVnb3J5Q29sb3JzLCBXaXRoU3R5bGVzIH0gZnJvbSBcIi4vU3R5bGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoZmlsZURhdGEsIGZpbGVOYW1lLCBpc0pTT04gPSB0cnVlKSB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtpc0pTT04gPyBKU09OLnN0cmluZ2lmeShmaWxlRGF0YSkgOiBmaWxlRGF0YV0sIHsgdHlwZTogXCJ0ZXh0L3BsYWluXCIgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCB1cmxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdXJsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG4gICAgdXJsRWxlbWVudC5ocmVmID0gdXJsO1xuICAgIHVybEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIHVybEVsZW1lbnQuY2xpY2soKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cmluZykge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbihvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbkxhYmVsO1xuICAgIHJldHVybiBvcHRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VkU2Vjb25kcykge1xuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBldGEuc2V0U2Vjb25kcyhldGEuZ2V0U2Vjb25kcygpICsgcGFyc2VkU2Vjb25kcyk7XG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XG4gICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmZsb29yKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBsZXQgcmV0ID0gZXRhLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcbiAgICAgICAgcmV0ICs9IGAgKyR7ZGlmZkRheXN9ZGA7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcbiAgICBjb25zdCBob3VycyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqaC8pO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKm0vKTtcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XG4gICAgbGV0IHBhcnNlZFNlY29uZHMgPSAwO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcbiAgICB9XG4gICAgaWYgKGhvdXJzKSB7XG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcbiAgICB9XG4gICAgaWYgKG1pbnV0ZXMpIHtcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xuICAgIH1cbiAgICBpZiAoc2Vjb25kcykge1xuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkU2Vjb25kcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0U3Bhbih0ZXh0LCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcbiAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5ld1NwYW47XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dERpdih0ZXh0LCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcbiAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbmV3U3Bhbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xuICAgIGNvbnN0IHByaW1hcnlUZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuY29sb3IgPSBwcmltYXJ5VGV4dENvbG9yO1xuICAgIHByaW1hcnlUZXh0U3Bhbi50ZXh0Q29udGVudCA9IHByaW1hcnlUZXh0O1xuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xuICAgIGNvbnN0IHNlY29uZGFyeVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZGFyeVRleHREaXYudGV4dENvbnRlbnQgPSBzZWNvbmRhcnlUZXh0O1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMVwiO1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubWFyZ2luVG9wID0gXCIycHhcIjtcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XG4gICAgYm94LmFwcGVuZENoaWxkKHNlY29uZGFyeVRleHREaXYpO1xuICAgIHJldHVybiBib3g7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEludmVudG9yeUFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52ZW50b3J5W1wiSW52ZW50b3J5XCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGludmVudG9yeVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdW2ldW1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gdGlja2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeVNvcnQoYSwgYikge1xuICAgIGlmICghTWF0ZXJpYWxOYW1lc1thXSB8fCAhTWF0ZXJpYWxOYW1lc1tiXSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW2JdWzFdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGRhdGEpIHtcbiAgICBpZiAoIWRhdGEgfHwgIXBsYW5ldCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYW1lXCJdICYmIGRhdGFbaV1bXCJQbGFuZXROYW1lXCJdLnRvTG93ZXJDYXNlKCkgPT0gcGxhbmV0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdICYmIFBsYW5ldE5hbWVzW3BsYW5ldF0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XS50b0xvd2VyQ2FzZSgpID09IGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIChbQS1aXXsyfS1bMC05XXszfSBbYS16XSkgQmFzZS8pO1xuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLXogXSopIC0gKFtBLXogXSopIEJhc2UvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl07XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIChbQS16IF0qKSAoW0Etel0pIEJhc2UvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdICYmIFN5c3RlbU5hbWVzW21hdGNoWzFdLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtTmFtZXNbbWF0Y2hbMV0udG9VcHBlckNhc2UoKV0gKyBtYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCBbQS1aXXsyfS1bMC05XXszfSAtIChbQS16IF0qKSBCYXNlLyk7XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludk5hbWUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBsYW5ldE5hbWUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXFwoKC4qPylcXCkvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShzdG9yYWdlTmFtZSwgY2FsbGJhY2tGdW5jdGlvbiwgcGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlTmFtZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtzdG9yYWdlTmFtZV0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNldHRpbmdzKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBjYWxsYmFja0Z1bmN0aW9uLCB1cmwsIHJlcXVlc3RUeXBlID0gXCJHRVRcIiwgaGVhZGVyLCBjb250ZW50KSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBEYXRhIENvdWxkIE5vdCBCZSBMb2FkZWQhIFRpbWVkIE91dCFcIjtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHRpbGUsIHBhcmFtZXRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIsIGFtb3VudCA9IFwibm9uZVwiLCB0ZXh0ID0gZmFsc2UsIHNtYWxsID0gZmFsc2UpIHtcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyXSAmJiB0aWNrZXIgIT0gXCJTSFBUXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFtcIlNoaXBtZW50XCJdKVswXTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW3VuZGVmaW5lZCwgXCJzaGlwbWVudFwiXSlbMV07XG4gICAgY29uc3QgbWF0VGV4dCA9IGNyZWF0ZVRleHRTcGFuKHRpY2tlciwgY2xhc3NOYW1lKTtcbiAgICBtYXRUZXh0LmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0KSk7XG4gICAgY29uc3QgbWF0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0V3JhcHBlcikpO1xuICAgIG1hdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG1hdFRleHQpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbC5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxFbGVtZW50KSk7XG4gICAgbWF0ZXJpYWwuYXBwZW5kQ2hpbGQobWF0VGV4dFdyYXBwZXIpO1xuICAgIG1hdGVyaWFsLnN0eWxlLmJhY2tncm91bmQgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMF07XG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMV07XG4gICAgbWF0ZXJpYWwudGl0bGUgPSBuYW1lO1xuICAgIG1hdGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdWZmZXIoXCJNQVQgXCIgKyB0aWNrZXIudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxXcmFwcGVyV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxXcmFwcGVyKTtcbiAgICBjb25zdCBvdXRlckxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlckxheWVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE91dGVyKSk7XG4gICAgb3V0ZXJMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgb3V0ZXJMYXllci5hcHBlbmRDaGlsZChtYXRlcmlhbFdyYXBwZXJXcmFwcGVyKTtcbiAgICBpZiAoYW1vdW50ICYmIGFtb3VudCAhPSBcIm5vbmVcIikge1xuICAgICAgICBjb25zdCBtYXRlcmlhbE51bWJlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXRlcmlhbE51bWJlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyV3JhcHBlcikpO1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxOdW1iZXJXcmFwcGVyKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxOdW1iZXIgPSBjcmVhdGVUZXh0RGl2KGFtb3VudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgbWF0ZXJpYWxOdW1iZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyKSk7XG4gICAgICAgIG1hdGVyaWFsTnVtYmVyV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbE51bWJlcik7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTmFtZVRleHQpKTtcbiAgICAgICAgY29uc3QgdGV4dEVsZW0gPSBjcmVhdGVUZXh0U3BhbihuYW1lLCBjbGFzc05hbWUpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xuICAgICAgICBvdXRlckxheWVyLmFwcGVuZENoaWxkKHRleHRFbGVtV3JhcHBlcik7XG4gICAgfVxuICAgIGlmIChzbWFsbCkge1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hdC1lbGVtZW50LXNtYWxsXCIpO1xuICAgICAgICByZXR1cm4gbWF0ZXJpYWxXcmFwcGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYXQtZWxlbWVudC1sYXJnZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dGVyTGF5ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rRGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XG4gICAgaWYgKGJ1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xuICAgIH07XG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XG4gICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgdmFyIHByb3BEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3dbXCJIVE1MSW5wdXRFbGVtZW50XCJdLnByb3RvdHlwZSwgXCJ2YWx1ZVwiKTtcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XG4gICAgaWYgKG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF0aXZlSW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XG4gICAgdmFyIGlucHV0RXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBpbnB1dEV2ZW50LmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCB0cnVlKTtcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xufVxuZnVuY3Rpb24gbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoc2VsZWN0b3IsIGNhbGxiYWNrLCBvbmx5T25jZSA9IHRydWUpIHtcbiAgICBjb25zdCBnZXRFbGVtZW50c0Zyb21Ob2RlcyA9IChub2RlcykgPT4gKEFycmF5LmZyb20obm9kZXMpKS5mbGF0TWFwKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG51bGwgOiBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICBsZXQgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gfHwgd2luZG93W1wiV2ViS2l0TXV0YXRpb25PYnNlcnZlclwiXTtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljVW5oaWRlKGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUgKyBcIi1oaWRkZW5cIikpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSArIFwiLWhpZGRlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRlZENsZWFudXAoY2xhc3NOYW1lLCBlbGVtZW50KSB7XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoYnVmZmVyQ29kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgodHJhbnNsYXRlKC4sICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicpLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAobm9kZSA9IG5vZGVzLml0ZXJhdGVOZXh0KCkpIHtcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5WFBhdGgoeHBhdGgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZSh4cGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFLCBudWxsKTtcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcbiAgICB2YXIgc29ydGVyID0gW107XG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuWzFdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gcm93c1tpXS5jaGlsZHJlbltjb2x1bW5dO1xuICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzb3J0ZXIucHVzaChbaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50LCByb3dzW2ldXSk7XG4gICAgfVxuICAgIGlmIChzb3J0VHlwZSA9PSBcImFscGhcIikge1xuICAgICAgICBzb3J0ZXIuc29ydCh0YWJsZVNvcnRBbHBoKTtcbiAgICB9XG4gICAgc29ydGVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRhYmxlLmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgaXRlbVsxXSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0YWJsZVNvcnRBbHBoKGEsIGIpIHtcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRpbGUsIGhlYWRlcnMpIHtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgICByZXR1cm4gdGJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbFRpcCh0ZXh0LCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGA8c3BhbiBkYXRhLXRvb2x0aXA9XCIke3RleHR9XCIgZGF0YS10b29sdGlwLXBvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIiBjbGFzcz1cImtmVTc4RWFhT1ZiUVIyWU0wZWVHZXc9PVwiIHN0eWxlPVwiZmxvYXQ6IHJldmVydDtmb250LXNpemU6IDEycHg7bWFyZ2luLXRvcDotNHB4O1wiPuKTmDwvc3Bhbj5gO1xuICAgIHJldHVybiB0b29sdGlwLmZpcnN0Q2hpbGQgfHwgdG9vbHRpcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wdXBTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNwYWNlcik7XG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIHNwYWNlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cElucHV0Um93KGxhYmVsLCB0ZXh0ID0gXCJcIiwgdG9vbHRpcCA9IFwiXCIpIHtcbiAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBpZiAodG9vbHRpcCAhPSBcIlwiKSB7XG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcbiAgICB9XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgY29uc3QgaW5wdXRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XG4gICAgY29uc3QgaW5wdXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dElucHV0LnN0eWxlLndpZHRoID0gXCI4MCVcIjtcbiAgICBpbnB1dElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0SW5wdXQpO1xuICAgIGlucHV0SW5wdXQudmFsdWUgPSB0ZXh0O1xuICAgIHJldHVybiBpbnB1dFJvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cENoZWNrYm94Um93KGxhYmVsLCBlbmFibGVkID0gZmFsc2UsIHRvb2x0aXAgPSBcIlwiKSB7XG4gICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xuICAgICAgICBpbnB1dExhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAodG9vbHRpcCwgXCJyaWdodFwiKSk7XG4gICAgfVxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGNvbnN0IGlucHV0SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0SW5wdXREaXYpO1xuICAgIGNvbnN0IGlucHV0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dCk7XG4gICAgaW5wdXRJbnB1dC5jaGVja2VkID0gZW5hYmxlZDtcbiAgICByZXR1cm4gaW5wdXRSb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVPZlBvcHVwUm93KHJvdykge1xuICAgIGlmICghcm93IHx8ICFyb3cuY2hpbGRyZW5bMV0gfHwgIXJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkLnZhbHVlIHx8IFwiXCI7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrT2ZQb3B1cFJvdyhyb3cpIHtcbiAgICBpZiAoIXJvdyB8fCAhcm93LmNoaWxkcmVuWzFdIHx8ICFyb3cuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxCdXR0b24obGFiZWwsIGNsaWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNtYWxsQnV0dG9uKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgY2xpY2tGdW5jdGlvbiguLi5wYXJhbWV0ZXJzKTsgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250cmFjdERpY3QoY29udHJhY3RzLCB1c2VybmFtZSwgY29udHJhY3RkaWN0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cmFjdHNbdXNlcm5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb250cmFjdHNbdXNlcm5hbWVdW2ldO1xuICAgICAgICBjb250cmFjdGRpY3RbZWxlbWVudFsnQ29udHJhY3RMb2NhbElkJ11dID0gZWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1dhcm5pbmdEaWFsb2codGlsZSwgbWVzc2FnZSA9IFwiQXJlIHlvdSBzdXJlP1wiLCBjb25maXJtQnV0dG9uVGV4dCA9IFwiQ29uZmlybVwiLCBjYWxsYmFja0Z1bmN0aW9uLCBwYXJhbWV0ZXJzKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQWN0aW9uT3ZlcmxheSk7XG4gICAgY29uc3QgY2VudGVySW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNlbnRlckludGVyZmFjZSk7XG4gICAgY2VudGVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQWN0aW9uQ2VudGVySW50ZXJmYWNlKTtcbiAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2VudGVySW50ZXJmYWNlLmFwcGVuZENoaWxkKGNvbmZpcm0pO1xuICAgIGNvbmZpcm0udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1hdGlvbiBSZXF1aXJlZFwiO1xuICAgIGNvbmZpcm0uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5BY3Rpb25Db25maXJtKTtcbiAgICBjb25zdCBjb25maXJtTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNlbnRlckludGVyZmFjZS5hcHBlbmRDaGlsZChjb25maXJtTWVzc2FnZSk7XG4gICAgY29uZmlybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGNvbmZpcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQWN0aW9uQ29uZmlybU1lc3NhZ2UpO1xuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VudGVySW50ZXJmYWNlLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQWN0aW9uQnV0dG9ucyk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbk5ldXRyYWwpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbkRhbmdlcik7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpcm1CdXR0b25UZXh0O1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIExNQ29tbW9kaXR5QWRUZXh0OiBcImRpdltjbGFzc349J0NvbW1vZGl0eUFkX190ZXh0X19feEpRbUpOYSddXCIsXG4gICAgTE1Db21tb2RpdHlBZFByaWNlU3BhbjogXCJkaXZbY2xhc3N+PSdDb21tb2RpdHlBZF9fdGV4dF9fX3hKUW1KTmEnXSA+IHNwYW5cIixcbiAgICBQcm9kSXRlbTogXCJPcmRlclNsb3RfX2NvbnRhaW5lcl9fX1lGeWs4YTdcIixcbiAgICBQcm9kUXVldWVUYWJsZTogXCJ0YWJsZVtjbGFzc349J1Byb2R1Y3Rpb25RdWV1ZV9fdGFibGVfX19qSFFHeVVJJ11cIixcbiAgICBCdWZmZXJIZWFkZXI6ICdUaWxlRnJhbWVfX2NtZF9fX1NjQllXMG4gdHlwZV9fdHlwZS12ZXJ5LXNtYWxsX19fSGFWTXFyRScsXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxuICAgIExNUG9zdEZvcm06IFwiZm9ybVtjbGFzc349J0xvY2FsTWFya2V0UG9zdF9fZm9ybV9fX0NBVlBkREUnXVwiLFxuICAgIFdvcmtmb3JjZUNvbnN1bXB0aW9uVGFibGU6IFwiZGl2W2NsYXNzfj0nVGlsZUZyYW1lX190aXRsZV9fX3hSY1pDUHgnXVwiLFxuICAgIFhJVFRpbGU6IFwiZGl2W2NsYXNzfj0nU2Nyb2xsVmlld19fdmlld19fX292ZjU5VGsnXSA+IGRpdlwiLFxuICAgIEJ1ZmZlclRpdGxlOiBcImRpdltjbGFzc349J1RpbGVGcmFtZV9fdGl0bGVfX194UmNaQ1B4J11cIixcbiAgICBOb3RpZmljYXRpb246IFwiZGl2W2NsYXNzfj0nQWxlcnRMaXN0SXRlbV9fY29udGFpbmVyX19fbTZlSDJKeCddXCIsXG4gICAgUHJvZFF1ZXVlOiBcImRpdltjbGFzc349J1NpdGVQcm9kdWN0aW9uTGluZXNfX2NvbHVtbl9fX19zM2NUazcnXVwiLFxuICAgIEJ1ZmZlclBhbmVsOiBcImRpdltjbGFzc349J1Njcm9sbFZpZXdfX3ZpZXdfX19vdmY1OVRrJ11cIixcbiAgICBOZXdCRlJCdXR0b246IFwiVE9VUl9UQVJHRVRfQlVUVE9OX0JVRkZFUl9ORVdcIixcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXG4gICAgQnVmZmVyVGV4dEZpZWxkOiBcImlucHV0W2NsYXNzfj0nUGFuZWxTZWxlY3Rvcl9faW5wdXRfX193VXN0SHJPJ11cIixcbiAgICBCdWZmZXJMaXN0OiBcIiNjb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpXCIsXG4gICAgU2NyZWVuQ29udHJvbHM6IFwiVE9VUl9UQVJHRVRfU0NSRUVOX0NPTlRST0xTXCIsXG4gICAgTGVmdFNpZGViYXI6IFwiVE9VUl9UQVJHRVRfU0lERUJBUl9MRUZUXzAyXCIsXG4gICAgQnVmZmVyQXJlYTogXCJkaXZbY2xhc3N+PSdUaWxlX19zZWxlY3Rvcl9fX0hZTW1ORU8nXVwiLFxuICAgIFNjcmVlbk5hbWU6IFwic3BhbltjbGFzc349J1NjcmVlbkNvbnRyb2xzX19jdXJyZW50U2NyZWVuTmFtZV9fX0kyc0lZYWcnXVwiLFxuICAgIE1hdGVyaWFsSWNvbjogXCJHcmlkSXRlbVZpZXdfX2ltYWdlX19feU1vS09aVlwiLFxuICAgIENoYXRMaW5rOiBcInNwYW5bY2xhc3N+PSdMaW5rX19saW5rX19fZmE0bW1NQSddXCIsXG4gICAgSW52ZW50b3J5TmFtZTogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxuICAgIEZ1bGxNYXRlcmlhbEljb246IFwiZGl2W2NsYXNzfj0nR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4J11cIixcbiAgICBJbnZlbnRvcnk6IFwiZGl2W2NsYXNzfj0nSW52ZW50b3J5Vmlld19fZ3JpZF9fX1V5UlFTWDgnXVwiLFxuICAgIE1hdGVyaWFsVGV4dDogXCJzcGFuW2NsYXNzfj0nQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCddXCIsXG4gICAgSW52ZW50b3J5U29ydE9wdGlvbnM6IFwiZGl2W2NsYXNzfj0nSW52ZW50b3J5U29ydENvbnRyb2xzX19jb250cm9sc19fX3FrNWhlQVonXVwiLFxuICAgIENoYXRBcmVhOiBcImRpdltjbGFzc349J0NoYW5uZWxfX21lc3NhZ2VBbmRVc2VyTGlzdF9fX05DZ1FBdFcnXVwiLFxuICAgIE1hdGVyaWFsUXVhbnRpdHk6IFwiZGl2W2NsYXNzfj0nTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKJ11cIixcbiAgICBIZWFkZXJSb3c6IFwiZGl2W2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fY29udGFpbmVyUGFzc2l2ZV9fX0ZyQmR5R1UnXVwiLFxuICAgIEZvcm1JbnB1dFJvdzogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19jb250YWluZXJBY3RpdmVfX19IWnY5akhkJ11cIixcbiAgICBDb250REZvcm06IFwiZGl2W2NsYXNzfj0nRHJhZnRDb25kaXRpb25FZGl0b3JfX2Zvcm1fX19mRjcyYkpNJ10gPiBmb3JtXCIsXG4gICAgQ29udERDb25kaXRpb25zVGFibGU6IFwiZGl2W2NsYXNzfj0nRHJhZnRfX2NvbmRpdGlvbnNfX19iY0lVbmRIJ10gPiB0YWJsZSA+IHRib2R5XCIsXG4gICAgQ29udERGb3JtTGFiZWw6IFwibGFiZWxbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUInXVwiLFxuICAgIENvbnRERm9ybVJvd1NwYWNlcjogXCJkaXZbY2xhc3N+PSdEeW5hbWljSW5wdXRfX2R5bmFtaWNfX19DZDRHa2J6J11cIixcbiAgICBDb250REZvcm1JbnB1dDogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWknXVwiLFxuICAgIFNpZGViYXJDb250cmFjdDogXCJkaXZbY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek4nXVwiLFxuICAgIFNpZGViYXJDb250cmFjdElkOiBcInNwYW5bY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdElkX19fTGc4NVRSWiddXCIsXG4gICAgQnVpbGRpbmdMaXN0OiBcImRpdltjbGFzc349J1NlY3Rpb25MaXN0X19jb250YWluZXJfX19FdFV6V3lpJ11cIixcbiAgICBEaXZpZGVyOiBcImRpdltjbGFzc349J1NlY3Rpb25MaXN0X19kaXZpZGVyX19fY3dXTzQ1diddXCJcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TZWxlY3Rvci50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU3R5bGUgPSB7XG4gICAgQnV0dG9uOiBbXCJCdXR0b25fX2J0bl9fX1VKR1oxYjdcIl0sXG4gICAgQnV0dG9uUHJpbWFyeTogW1wiQnV0dG9uX19wcmltYXJ5X19fX2xPYlBpd1wiXSxcbiAgICBCdXR0b25TdWNjZXNzOiBbXCJCdXR0b25fX3N1Y2Nlc3NfX19iQ2lJVlh3XCJdLFxuICAgIEJ1dHRvbkRpc2FibGVkOiBbXCJCdXR0b25fX2Rpc2FibGVkX19fX3g4aTdYRlwiXSxcbiAgICBCdXR0b25FbmFibGVkOiBbXCJCdXR0b25fX3ByaW1hcnlfX19fbE9iUGl3XCJdLFxuICAgIEJ1dHRvbkRhbmdlcjogW1wiQnV0dG9uX19kYW5nZXJfX19TMnJTT0VTXCJdLFxuICAgIEJ1dHRvbk5ldXRyYWw6IFtcIkJ1dHRvbl9fbmV1dHJhbF9fX09BRk9hTnNcIl0sXG4gICAgU21hbGxCdXR0b246IFtcIkJ1dHRvbl9fZGFya0lubGluZV9fX3pfWUthOTFcIiwgXCJCdXR0b25fX2RhcmtfX192ZEpiY2M4XCIsIFwiQnV0dG9uX19idG5fX19VSkdaMWI3XCIsIFwiQnV0dG9uX19pbmxpbmVfX19GZnc5YmJuXCJdLFxuICAgIFNpZGViYXJTZWN0aW9uSGVhZDogW1wiU2lkZWJhcl9fc2VjdGlvbkhlYWRfX19fTkhMS0RUXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIl0sXG4gICAgU2lkZWJhclNlY3Rpb25Db250ZW50OiBbXCJTaWRlYmFyX19zZWN0aW9uQ29udGVudF9fX3dnR1lGb3BcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiXSxcbiAgICBTaWRlYmFyTGluZTogW1wiU2lkZWJhcl9fY29udHJhY3RfX19KMGdtbHpOXCIsIFwiU2lkZWJhcl9fc2lkZWJhci1saW5lX19fYkUycmJSYlwiXSxcbiAgICBGb250c1JlZ3VsYXI6IFtcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxuICAgIFNpZGViYXJUZXh0OiBbXCJGcmFtZV9fdG9nZ2xlTGFiZWxfX19CVEZjZThIXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxuICAgIFNpZGViYXJTbGl2ZXI6IFtcIkZyYW1lX190b2dnbGVJbmRpY2F0b3JTZWNvbmRhcnlfX19mclg0Q0dpXCIsIFwiRnJhbWVfX3RvZ2dsZUluZGljYXRvcl9fX1pLUVFnQUxcIl0sXG4gICAgU2lkZWJhckJ1dHRvbjogW1wiRnJhbWVfX3RvZ2dsZV9fX1YzaUhwQjdcIl0sXG4gICAgQ29udHJhY3RMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXG4gICAgQ29udHJhY3ROYW1lOiBbXCJ6aGl4cDQwOFlGMDgySXpBNUtQdmZBPT1cIl0sXG4gICAgQ29udHJhY3RWaWV3OiBbXCJrcTVCckdLblRVVHFDRFlNcExROTBnPT1cIl0sXG4gICAgUmFkaW9CdXR0b246IFtcIlJhZGlvSXRlbV9fY29udGFpbmVyX19fQ1NjenFtR1wiXSxcbiAgICBTZXR0aW5nc0J1dHRvbjogW1wiUmFkaW9JdGVtX19jb250YWluZXJfX19DU2N6cW1HXCIsIFwiUmFkaW9JdGVtX19jb250YWluZXJIb3Jpem9udGFsX19fX3RybFhEb1wiXSxcbiAgICBSYWRpb0J1dHRvblVuVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCJdLFxuICAgIFNldHRpbmdzQmFyVW50b2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2luZGljYXRvckhvcml6b250YWxfX19Td3R3VEloXCJdLFxuICAgIFJhZGlvQnV0dG9uVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCIsIFwiUmFkaW9JdGVtX19hY3RpdmVfX19DRHNjT1FWXCIsIFwiZWZmZWN0c19fc2hhZG93UHJpbWFyeV9fX0ViWEpRb3JcIl0sXG4gICAgU2V0dGluZ3NCYXJUb2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2luZGljYXRvckhvcml6b250YWxfX19Td3R3VEloXCIsIFwiUmFkaW9JdGVtX19hY3RpdmVfX19DRHNjT1FWXCIsIFwiZWZmZWN0c19fc2hhZG93UHJpbWFyeV9fX0ViWEpRb3JcIl0sXG4gICAgUmFkaW9CdXR0b25WYWx1ZTogW1wiUmFkaW9JdGVtX192YWx1ZV9fX1lkMUd0MVRcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtc21hbGxfX19wTVFoTVFPXCJdLFxuICAgIFNldHRpbmdzVGV4dDogW1wiUmFkaW9JdGVtX192YWx1ZV9fX1lkMUd0MVRcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtc21hbGxfX19wTVFoTVFPXCIsIFwiUmFkaW9JdGVtX192YWx1ZUhvcml6b250YWxfX19ENUFYSjlQXCJdLFxuICAgIE92ZXJsYXBwaW5nRGl2OiBbXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcbiAgICBHcmV5U3RyaXBlczogW1wiT3ZlcmxheV9fYmFja2dyb3VuZF9fX2llWnBIaUZcIiwgXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcbiAgICBTcGFjZXI6IFtcIk92ZXJsYXlfX2Nsb3NlX19fYnhHb01JbFwiXSxcbiAgICBQcm9ncmVzc0JhcjogW1wiUHJvZ3Jlc3NCYXJfX3ByaW1hcnlfX19PMzBqQnFxXCIsIFwiUHJvZ3Jlc3NCYXJfX3Byb2dyZXNzX19fZWI0S2h1V1wiXSxcbiAgICBQcm9ncmVzc0JhckNvbG9yczogW1wiUHJvZ3Jlc3NCYXJfX3ByaW1hcnlfX19PMzBqQnFxXCIsIFwiZ3JleS1wcm9ncmVzcy1iYXJcIiwgXCJnb29kLXByb2dyZXNzLWJhclwiLCBcIndhcm5pbmctcHJvZ3Jlc3MtYmFyXCIsIFwiZGFuZ2VyLXByb2dyZXNzLWJhclwiXSxcbiAgICBQcm9ncmVzc0Jhckdvb2Q6IFtcImdvb2QtcHJvZ3Jlc3MtYmFyXCJdLFxuICAgIFByb2dyZXNzQmFyV2FybmluZzogW1wid2FybmluZy1wcm9ncmVzcy1iYXJcIl0sXG4gICAgUHJvZ3Jlc3NCYXJEYW5nZXI6IFtcImRhbmdlci1wcm9ncmVzcy1iYXJcIl0sXG4gICAgQ2VudGVySW50ZXJmYWNlOiBbXCJPdmVybGF5X19jaGlsZHJlbl9fX3JndFZheGNcIl0sXG4gICAgRm9ybVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZFwiLCBcImZvcm1zX19hY3RpdmVfX193bjlLUVRaXCIsIFwiZm9ybXNfX2Zvcm0tY29tcG9uZW50X19feVRnUF9RYVwiXSxcbiAgICBIZWFkZXJSb3c6IFtcIkZvcm1Db21wb25lbnRfX2NvbnRhaW5lclBhc3NpdmVfX19GckJkeUdVXCIsIFwiZm9ybXNfX3Bhc3NpdmVfX19iaVJVaUU1XCIsIFwiZm9ybXNfX2Zvcm0tY29tcG9uZW50X19feVRnUF9RYVwiXSxcbiAgICBGb3JtTGFiZWw6IFtcIkZvcm1Db21wb25lbnRfX2xhYmVsX19fYVFCMTVlQlwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbiAgICBGb3JtSW5wdXQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl0sXG4gICAgRm9ybVNhdmVSb3c6IFtcIkZvcm1Db21wb25lbnRfX2NvbnRhaW5lckNvbW1hbmRfX19CNFhMRVJmXCIsIFwiZm9ybXNfX2NtZF9fX0lNenQ3VWdcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxuICAgIEZvcm1TYXZlTGFiZWw6IFtcIkZvcm1Db21wb25lbnRfX2xhYmVsX19fYVFCMTVlQlwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbiAgICBGb3JtU2F2ZUlucHV0OiBbXCJGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWlcIiwgXCJmb3Jtc19faW5wdXRfX19BOTJfTjRKXCJdLFxuICAgIEFjdGlvbk92ZXJsYXk6IFtcIkFjdGlvbkNvbmZpcm1hdGlvbk92ZXJsYXlfX2NvbnRhaW5lcl9fX0EwNVRzMWdcIiwgXCJBY3Rpb25GZWVkYmFja19fb3ZlcmxheV9fX05ORFBSclZcIl0sXG4gICAgQWN0aW9uQ2VudGVySW50ZXJmYWNlOiBbXCJBY3Rpb25Db25maXJtYXRpb25PdmVybGF5X19tZXNzYWdlX19fT2Fqb0dlaFwiLCBcIkFjdGlvbkZlZWRiYWNrX19tZXNzYWdlX19fRzJTejRid1wiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1sYXJnZXJfX19WZHBKSWIxXCJdLFxuICAgIEFjdGlvbkNvbmZpcm06IFtcIkFjdGlvbkNvbmZpcm1hdGlvbk92ZXJsYXlfX21lc3NhZ2VfX19PYWpvR2VoXCIsIFwiQWN0aW9uRmVlZGJhY2tfX21lc3NhZ2VfX19HMlN6NGJ3XCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLWxhcmdlcl9fX1ZkcEpJYjFcIl0sXG4gICAgQWN0aW9uQ29uZmlybU1lc3NhZ2U6IFtcIkFjdGlvbkNvbmZpcm1hdGlvbk92ZXJsYXlfX3RleHRfX19xa0t6VkswXCIsIFwiQWN0aW9uRmVlZGJhY2tfX3RleHRfX19ZUWpqaWJHXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxuICAgIEFjdGlvbkJ1dHRvbnM6IFtcIkFjdGlvbkNvbmZpcm1hdGlvbk92ZXJsYXlfX2J1dHRvbnNfX19zRTdDTlZlXCJdLFxuICAgIE1hdFRleHQ6IFtcIkNvbG9yZWRJY29uX19sYWJlbF9fX09VMUk0b1BcIl0sXG4gICAgTWF0VGV4dFdyYXBwZXI6IFtcIkNvbG9yZWRJY29uX19sYWJlbENvbnRhaW5lcl9fX1lWZmd6T2tcIl0sXG4gICAgTWF0ZXJpYWxFbGVtZW50OiBbXCJDb2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMlwiXSxcbiAgICBNYXRlcmlhbFdyYXBwZXI6IFtcIk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OFwiXSxcbiAgICBNYXRlcmlhbE51bWJlcldyYXBwZXI6IFtcIk1hdGVyaWFsSWNvbl9faW5kaWNhdG9yQ29udGFpbmVyX19fQ3F0YXhfWVwiXSxcbiAgICBNYXRlcmlhbE51bWJlcjogW1wiTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKXCIsIFwiTWF0ZXJpYWxJY29uX190eXBlLXZlcnktc21hbGxfX19VTXpRM2lyXCIsIFwiTWF0ZXJpYWxJY29uX19uZXV0cmFsX19fU1lzSFhBYVwiXSxcbiAgICBNYXRlcmlhbFdyYXBwZXJXcmFwcGVyOiBbXCJHcmlkSXRlbVZpZXdfX2ltYWdlX19feU1vS09aVlwiXSxcbiAgICBNYXRlcmlhbE91dGVyOiBbXCJHcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejhcIl0sXG4gICAgTWF0ZXJpYWxOYW1lVGV4dDogW1wiR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbVwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbn07XG5leHBvcnQgY29uc3QgV2l0aFN0eWxlcyA9ICguLi5zdHlsZSkgPT4ge1xuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcbn07XG5leHBvcnQgY29uc3QgVGV4dENvbG9ycyA9IHtcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcbiAgICBTdWNjZXNzOiBcIiM1Y2I4NWNcIixcbiAgICBTdGFuZGFyZDogXCIjYmJiYmJiXCIsXG4gICAgWWVsbG93OiBcIiNmN2E2MDBcIlxufTtcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbG9ycyA9IHtcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXG4gICAgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUsIDMwLCA5OCksIHJnYig0MCwgNTUsIDEyMykpXCIsIFwicmdiKDE0MiwgMTU3LCAyMjUpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSwgMjYsIDc2KSwgcmdiKDc2LCA1MSwgMTAxKSlcIiwgXCJyZ2IoMTc4LCAxNTMsIDIwMylcIl0sXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxuICAgIFwiY29uc3RydWN0aW9uIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MSwgNzcsIDEwNyksIHJnYig2NiwgMTAyLCAxMzIpKVwiLCBcInJnYigxNjgsIDIwNCwgMjM0KVwiXSxcbiAgICBcInNoaXAgZW5naW5lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA0MSwgMCksIHJnYigxNzgsIDY2LCAyNSkpXCIsIFwicmdiKDI1NSwgMTY4LCAxMjcpXCJdLFxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcbiAgICBcIm1ldGFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTQsIDU0LCA1NCksIHJnYig3OSwgNzksIDc5KSlcIiwgXCJyZ2IoMTgxLCAxODEsIDE4MSlcIl0sXG4gICAgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAyNCwgMzkpLCByZ2IoMTYxLCA0OSwgNjQpKVwiLCBcInJnYigyNTUsIDE1MSwgMTY2KVwiXSxcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxuICAgIFwib3Jlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDg3LCA5NyksIHJnYigxMDcsIDExMiwgMTIyKSlcIiwgXCJyZ2IoMjA5LCAyMTQsIDIyNClcIl0sXG4gICAgXCJnYXNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMTA1LCAxMDcpLCByZ2IoMjUsIDEzMCwgMTMyKSlcIiwgXCJyZ2IoMTI3LCAyMzIsIDIzNClcIl0sXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcbiAgICBcImFsbG95c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIzLCA3NiwgMzApLCByZ2IoMTQ4LCAxMDEsIDU1KSlcIiwgXCJyZ2IoMjUwLCAyMDMsIDE1NylcIl0sXG4gICAgXCJjaGVtaWNhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDIwOCwgNzEsIDExNikpXCIsIFwicmdiKDI1NSwgMTczLCAyMTgpXCJdLFxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBwaWVjZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExOSwgODIsIDE4OSksIHJnYigxNDQsIDEwNywgMjE0KSlcIiwgXCJyZ2IoMjQ2LCAyMDksIDI1NSlcIl0sXG4gICAgXCJlbGVtZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjEsIDQ2LCAzMiksIHJnYig4NiwgNzEsIDU3KSlcIiwgXCJyZ2IoMTg4LCAxNzMsIDE1OSlcIl0sXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxuICAgIFwidW5pdCBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyOSwgMjcsIDI4KSwgcmdiKDU0LCA1MiwgNTMpKVwiLCBcInJnYigxNTYsIDE1NCwgMTU1KVwiXSxcbiAgICBcImxpcXVpZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNCwgMTY0LCAyMDIpLCByZ2IoMTM5LCAxODksIDIyNykpXCIsIFwicmdiKDI0MSwgMjU1LCAyNTUpXCJdLFxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxuICAgIFwiZHJvbmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDAsIDUyLCAxOCksIHJnYigxNjUsIDc3LCA0MykpXCIsIFwicmdiKDI1NSwgMTc5LCAxNDUpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTEsIDQ2LCAxODMpLCByZ2IoMTE2LCA3MSwgMjA4KSlcIiwgXCJyZ2IoMjE4LCAxNzMsIDI1NSlcIl0sXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcbiAgICBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI0LCA5MSwgMjExKSwgcmdiKDQ5LCAxMTYsIDIzNikpXCIsIFwicmdiKDE1MSwgMjE4LCAyNTUpXCJdLFxuICAgIFwic29mdHdhcmUgdG9vbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyOSwgOTgsIDE5KSwgcmdiKDE1NCwgMTIzLCA0NCkpXCIsIFwicmdiKDI1NSwgMjU1LCAxNDYpXCJdLFxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXG4gICAgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDksIDQ2LCA0NiksIHJnYigxNzQsIDcxLCA3MSkpXCIsIFwicmdiKDI1NSwgMTczLCAxNzMpXCJdLFxuICAgIFwiZnVlbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDU1LCAxNDgsIDU1KSlcIiwgXCJyZ2IoMTU3LCAyNTAsIDE1NylcIl0sXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxuICAgIFwic2hpcCBraXRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTQsIDg0LCAwKSwgcmdiKDE3OCwgMTA5LCAyNSkpXCIsIFwicmdiKDI1NSwgMjExLCAxMjcpXCJdLFxuICAgIFwidXRpbGl0eVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTYxLCAxNDgsIDEzNiksIHJnYigxODYsIDE3MywgMTYxKSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIl0sXG4gICAgXCJzaGlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDMwMzAzLCAjMTgxODE4KVwiLCBcIiM3ZjdmN2ZcIl1cbn07XG5leHBvcnQgY29uc3QgUE1NR1N0eWxlID0gYFxyXG4ucGItbWluaW1pemUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRtYXJnaW4tdG9wOiAxcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGItbWluaW1pemUtY3g6aG92ZXIge1xyXG5cdGNvbG9yOiAjMjYzNTNlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzZmEyZGU7XHJcbn1cclxuLnBiLW1pbmltaXplLWN4IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzNTNlO1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5wYi1taW5pbWl6ZS1zZXR0aW5nczpob3ZlciB7XHJcblx0Y29sb3I6ICNkZGQ7XHJcbn1cclxuLm1hdC1lbGVtZW50LWxhcmdlIHtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDQ4cHg7XHJcbn1cclxuLm1hdC1lbGVtZW50LWxhcmdlIGRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMiB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGZvbnQtc2l6ZTogMTUuODRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1lbGVtZW50LXNtYWxsIHtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0d2lkdGg6IDMycHg7XHJcbn1cclxuLmNoZWNrLXRpbWUtY29tcGxldGUge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5jaGVjay10aW1lLW92ZXJkdWUge1xyXG5cdGNvbG9yOiAjZDk1MzRmO1xyXG59XHJcbi5jaGVjay10aW1lIHtcclxuXHRjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpXHJcbn1cclxuLmNoZWNrZWQtdGV4dCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0Y29sb3I6IHJnYigxNTMsIDE1MywgMTUzKVxyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRsaW5lLWhlaWdodDogMTdweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IDAgOHB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjMjIyO1xyXG59XHJcbi5ub3Rlcy13cmFwcGVyIHRleHRhcmVhe1xyXG5cdHJlc2l6ZTogbm9uZTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGNvbG9yOiAjY2NjY2NjO1xyXG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLHNhbnMtc2VyaWY7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4ubm90ZXMtd3JhcHBlciB0ZXh0YXJlYTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jaGVjay13cmFwcGVyIHtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG4udG9vbHRpcC1iYXNle1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0Zm9udC1mYW1pbHk6XCJEcm9pZCBTYW5zXCIsc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTBweDtcclxuXHRjb2xvcjojYmJiXHJcbn1cclxuLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi50b29sdGlwLWJhc2U6aG92ZXIgLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWxlY3Qge1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG50ZC5idXJuLWdyZWVuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1MDM0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM5ZmJiOWY7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUwNmM1MCAhaW1wb3J0YW50O1xyXG59XHJcbnRkLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZTI0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNmNmRmOTQ7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi15ZWxsb3cge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5ZjhhNDAgIWltcG9ydGFudDtcclxufVxyXG50ZC5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4tcmVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzY0ZDRjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludi1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nOiAycHggOHB4O1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5pbnYtYm9keSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG5cdHBhZGRpbmc6IDVweCA4cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiA5cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHRtYXJnaW46IDFweCAycHg7XHJcbn1cclxuLnByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Y3YTYwMDt9XHJcblxyXG4uZ3JleS1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNkOTUzNGY7fVxyXG4uZ29vZC1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICM1Y2I4NWM7fVxyXG4ud2FybmluZy1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmZmM4NTY7fVxyXG4uZGFuZ2VyLXByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Q5NTM0Zjt9XHJcblxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtaW1hZ2Uge1xyXG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0XHJcbn1cclxuLmlucHV0LXRleHQ6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uaGlkZGVuLWVsZW1lbnR7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdHZpc2liaWxpdHk6IGZhbHNlICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0ZmlsbDogI2JiYjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuLmJ1dHRvbi11cHBlci1yaWdodDpob3ZlcntcclxuXHRjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5cdGZpbGw6ICMwMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTY2LCAwKTtcclxufWA7XG5leHBvcnQgY29uc3QgRW5oYW5jZWRDb2xvcnMgPSBgLyogY29uc3VtYWJsZXMgKGx1eHVyeSkgKi9cclxuZGl2W3RpdGxlPVwiU3RlbGxhciBQYWxlIEFsZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxFXCJdLFxyXG4udG9vbHRpcF9BTEUsXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DT0ZcIl0sXHJcbi50b29sdGlwX0NPRixcclxuZGl2W3RpdGxlPVwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dJTlwiXSxcclxuLnRvb2x0aXBfR0lOLFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfS09NXCJdLFxyXG4udG9vbHRpcF9LT00sXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlNUXCJdLFxyXG4udG9vbHRpcF9OU1QsXHJcbmRpdlt0aXRsZT1cIlBhZGRlZCBXb3JrIE92ZXJhbGxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BXT1wiXSxcclxuLnRvb2x0aXBfUFdPLFxyXG5kaXZbdGl0bGU9XCJSZXBhaXIgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SRVBcIl0sXHJcbi50b29sdGlwX1JFUCxcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NcIl0sXHJcbi50b29sdGlwX1NDLFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WR1wiXSxcclxuLnRvb2x0aXBfVkcsXHJcbi50b29sdGlwX1dJTixcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XSU5cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjgwMDAwLCAjN2IwMDEyKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2RiOTE5MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGFncmljdWx0dXJhbCBwcm9kdWN0cyAqL1xyXG4udG9vbHRpcF9GT0QsXHJcbi50b29sdGlwX0NBRixcclxuLnRvb2x0aXBfSE9QLFxyXG4udG9vbHRpcF9HUk4sXHJcbi50b29sdGlwX01BSSxcclxuLnRvb2x0aXBfSENQLFxyXG4udG9vbHRpcF9NVFAsXHJcbi50b29sdGlwX1BJQixcclxuLnRvb2x0aXBfUFBBLFxyXG4udG9vbHRpcF9BTEcsXHJcbi50b29sdGlwX0JFQSxcclxuLnRvb2x0aXBfTVVTLFxyXG4udG9vbHRpcF9SQ08sXHJcbi50b29sdGlwX1JTSSxcclxuLnRvb2x0aXBfSEVSLFxyXG4udG9vbHRpcF9WRUcsXHJcbi50b29sdGlwX05VVCxcclxuLnRvb2x0aXBfVklULFxyXG4udG9vbHRpcF9HUkEsXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBBbGdhZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxHXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JFQVwiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NBRlwiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GT0RcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSQVwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIEdyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JOXCJdLFxyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hDUFwiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFUlwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IT1BcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBNYWl6ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUFJXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVFBcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01VU1wiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIE51dHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05VVFwiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BJQlwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFBBXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQ09cIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JTSVwiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkVHXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZJVFwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDM4MDAsICMwYTQ3MDgpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjOGJiMzdiICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogcGxhc3RpY3MgKi9cclxuLnRvb2x0aXBfRENMLFxyXG4udG9vbHRpcF9EQ00sXHJcbi50b29sdGlwX0RDUyxcclxuLnRvb2x0aXBfUEUsXHJcbi50b29sdGlwX1BHLFxyXG4udG9vbHRpcF9QU0wsXHJcbi50b29sdGlwX1BTTSxcclxuLnRvb2x0aXBfUFNTLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ0xcIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTVwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENTXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LUV0aHlsZW5lXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QRVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BHXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNMXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNNXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5MWY2MiwgIzkyMzg3YikgIWltcG9ydGFudDtcclxuY29sb3I6ICNmODllZTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBjb25zdW1hYmxlcyAoYmFzaWMpICovXHJcbi50b29sdGlwX0RXLFxyXG4udG9vbHRpcF9FWE8sXHJcbi50b29sdGlwX0ZJTSxcclxuLnRvb2x0aXBfSE1TLFxyXG4udG9vbHRpcF9IU1MsXHJcbi50b29sdGlwX0xDLFxyXG4udG9vbHRpcF9NRUEsXHJcbi50b29sdGlwX01FRCxcclxuLnRvb2x0aXBfT1ZFLFxyXG4udG9vbHRpcF9QREEsXHJcbi50b29sdGlwX1BULFxyXG4udG9vbHRpcF9SQVQsXHJcbi50b29sdGlwX1NDTixcclxuLnRvb2x0aXBfV1MsXHJcblxyXG5kaXZbdGl0bGU9XCJEcmlua2luZyBXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRFdcIl0sXHJcbmRpdlt0aXRsZT1cIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRVhPXCJdLFxyXG5kaXZbdGl0bGU9XCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRklNXCJdLFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9ITVNcIl0sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hTU1wiXSxcclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xDXCJdLFxyXG5kaXZbdGl0bGU9XCJRdWFsaXR5IE1lYXQgTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVBXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVEXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfT1ZFXCJdLFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUERBXCJdLFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFRcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIFJhdGlvbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JBVFwiXSxcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ05cIl0sXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhNjJjMmEsICNiYTM2M2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmY5ODllICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZnVlbHMgKi9cclxuLnRvb2x0aXBfU0YsXHJcbi50b29sdGlwX0ZGLFxyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRkZcIl0sXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TRlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NDhkMjIsICM2YmEyM2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjY2JmYWEzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogbGlxdWlkcyAqL1xyXG4udG9vbHRpcF9IRVgsXHJcbi50b29sdGlwX0xFUyxcclxuLnRvb2x0aXBfQlRTLFxyXG4udG9vbHRpcF9IMk8sXHJcbmRpdlt0aXRsZT1cIkhlbGlvdHJvcGUgRXh0cmFjdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVYXCJdLFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgRWluc3RlaW5pdW1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xFU1wiXSxcclxuZGl2W3RpdGxlPVwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CVFNcIl0sXHJcbmRpdlt0aXRsZT1cIldhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IMk9cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjdhOGRhLCAjNjA5OGMzKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2YxZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmRpdi5HcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejgge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuLyogZnVsbCBpdGVtIG5hbWUgY2VudGVyaW5nICovXHJcbnNwYW4uR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1gO1xuZXhwb3J0IGNvbnN0IEljb25TdHlsZSA9IGBcclxuIC8qIFByVW5JY29uIHYwLjkwXHJcbiogPT09PT09PT09PT09PT09XHJcbipcclxuKiBJbnN0YWxsIENocm9tZSBhZGRvbjogU3R5bGVCb3QgXHJcbiogZ290bzogYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tXHJcbiogcmlnaHQtY2xpY2sgYW55d2hlcmUsIHNlbGVjdDogU3R5bGVCb3QgLT4gU3R5bGUgRWxlbWVudFxyXG4qIENvcHkmUGFzdGUgdGhpcyBmaWxlIGludG8gdGhlIFN0eWxlQm90IHdpbmRvd1xyXG4qXHJcbiogQ1NTIHNjcmlwdCB0byBnaXZlIGljb25zIHRvIGFsbCBjb21tb2RpdGllcyBhbmQgc29tZSBvdGhlciBVSSBjb2xvciBhbmQgbGF5b3V0IGNoYW5nZXMuXHJcbiovXHJcbiBcclxuLyogY29udHJvdmVyc2lhbCBVSSBjaGFuZ2VzIGFuZCBjb2xvcnMgKi9cclxuLyogKGNvbW1lbnQvZGVsZXRlIGlmIG5vdCBkZXNpcmVkKVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuIFxyXG4vKiBpdGVtIHRpY2tlciBjb2xvciAqL1xyXG4uQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG4gXHJcbiBcclxuLyogZnVsbCBpdGVtIG5hbWUgY2VudGVyaW5nICovXHJcbi5HcmlkSXRlbVZpZXdfX25hbWVfX19oM3lYOUxtICB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIFxyXG4vKiB0YWJsZSBjb2xvciAqL1xyXG50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQob2RkKVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyZTtcclxufVxyXG4gXHJcbi8qIGVuZCBVSSBjaGFuZ2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiBcclxuLyogaXRlbXMgaW4gcHJvZHVjdGlvbiB2aWV3IGFuZCBtYXJrZXQgdmlldyAqL1xyXG5kaXYuTWF0ZXJpYWxJbmZvcm1hdGlvbl9fcmVjaXBlSW5wdXRzX19fZUx2Zm9vcCBkaXYuQnVpbGRpbmdJY29uX19jb250YWluZXJfX19qRjVHVXN6IGRpdi5CdWlsZGluZ0ljb25fX3RpY2tlckNvbnRhaW5lcl9fX05aeDNHOENcclxue1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMzZweDtcclxufVxyXG4gXHJcbi8qIGl0ZW1zIGluIHBsYW5ldCB2aWV3ICovXHJcbmRpdi5SZXNvdXJjZVRhYmxlX19ncmlkQ29udGFpbmVyX19feW1yelRjRCBkaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4IGRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKlxyXG5HcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejhcclxuR3JpZEl0ZW1WaWV3X19pbWFnZV9fX3lNb0tPWlZcclxuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4XHJcbkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyXHJcbkNvbG9yZWRJY29uX19sYWJlbENvbnRhaW5lcl9fX1lWZmd6T2tcclxuKi9cclxuIFxyXG4vKiBkZWZhdWx0IDpiZWZvcmUgZWxlbWVudCB0byBwcmVwYXJlIGZvciBuZXcgaWNvbiovXHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgXHJcbiAgLyp3aGlsZSBpdCBpcyBpY29uKi9cclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuKi9cclxuIFxyXG4vKiBjb2xvcmVkIG92ZXJsYXkgaWNvbiAqL1xyXG5kaXYuQ29sb3JlZEljb25fX2xhYmVsQ29udGFpbmVyX19fWVZmZ3pPazpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiOyAvKiB3aWxsIGJlY29tZSBpY29uICovXHJcbiBcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEwMCUsIDAlLCAwJSwgMCk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBnb2xkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYXF1YTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JleTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cInNpbGljb24gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHdoaXRlO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGl0YW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJsaXRoaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImNvcHBlciBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm8tdGl0YW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZlcnJvbWluaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0dW5nc3RlblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqbXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTcGVjaWFsaXplZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJIaWdoLUNhcGFjaXR5IENcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdvbGQ7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIlNoaWVsZGVkIENcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbiAgb3BhY2l0eTogLjAxO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkJ1ZGdldCBDXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBjaG9jb2xhdGU7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicmF3IFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJyYXcgY290dG9uXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicmF3IHNpbGtcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcGx1bTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCIgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6e1XCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImtldmxhciBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW47XHJcbiAgb3BhY2l0eTogLjE1O1xyXG59XHJcbiBcclxuIFxyXG5kaXZbdGl0bGUqPVwidGVjaG5va2V2bGFyIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibHVldmlvbGV0O1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm55bG9uIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibGFjaztcclxuICBvcGFjaXR5OiAuMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJjb3R0b24gZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwic2lsa2VuIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBwbHVtO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImNlcmFtaWMgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9yYW5nZXJlZDtcclxuICBvcGFjaXR5OiAuMTU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiY2VyYW1pYy10dW5nc3RlbiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYnJvd247XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJudXRyaWVudCBzb2x1dGlvblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIm5hbm8tZW5oYW5jZWQgcmVzaW5cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZXZpb2xldDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJmbHV4XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHllbGxvdztcclxuICBvcGFjaXR5OiAuMTU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpbmRpZ28gY29sb3JhbnRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgaW5kaWdvO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb2xpdmU7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJERFQgUGxhbnQgQWdlbnRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2VkYXRpdmUgU3Vic3RhbmNlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9yYW5nZTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImRlc2F0dXJhdGlvbiBhZ2VudFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB3aGl0ZTtcclxuICBvcGFjaXR5OiAuMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImJyZWF0aGFibGUgbGlxdWlkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGFxdWFtYXJpbmU7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGhlcm1vZmx1aWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb3JhbmdlO1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImZlcnRpbGl6ZXJcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB5ZWxsb3dncmVlbjtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJhY2lkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLimKNcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW55ZWxsb3c7XHJcbiAgb3BhY2l0eTogLjE7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiBcclxuLypcclxuIFxyXG5kaXZbdGl0bGUqPVwic29sYXJcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfjJ5cIjtcclxuICBvcGFjaXR5OiAuMTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHllbGxvdztcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImxhcmdlIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKallwiOyBvcGFjaXR5OiAwLjY7IGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImhpZ2gtbG9hZCBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SUXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJoaWdoLXZvbHVtZSBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn46IXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG59XHJcbiovXHJcbiBcclxuLyogbm9uLWNhdGVnb3J5IGNvbG9yIHNwZWNpYWwgaGFja3MqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiXSxcclxuZGl2W3RpdGxlPVwiUmVkIEdvbGRcIl1cclxue1xyXG4gIC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYigxMjAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaGllbGRlZCBDb25uZWN0b3JzXCJdLFxyXG5kaXZbdGl0bGU9XCJCbHVlIEdvbGRcIl1cclxue1xyXG4gIC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYig3MCA3MiAyMDApKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQWlyIFNjcnViYmVyXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAgOTYgNTgpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbi8qIGR3IGFuZCBhbGwgY29uc3VtYWJsZXMgKi9cclxuIFxyXG4vKiBcIm5vcm1hbFwiIGljb25zIGFuZCBjb2xvcnMgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gXHJcbi8qIFJBVCBpbnB1dHMgKi9cclxuZGl2W3RpdGxlXj1cIkhpZ2gtQ2FyYlwiXSxcclxuZGl2W3RpdGxlXj1cIlByb3RlaW4tUmljaFwiXSxcclxuZGl2W3RpdGxlXj1cIlRyaWdseWNlcmlkZVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoNzAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbY29udGVudD1cIklvLWRpbmVcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbi8qIG90aGVyIEFyZ3JpY3VsdHVyZSAqL1xyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdlt0aXRsZT1cIlNwaWN5IEhlcmJzXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3dlcnkgSG9wc1wiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdlt0aXRsZT1cIlBpbmViZXJyaWVzXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4gUGFzdGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJEcmlua1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFJhXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMTI2IDE3NCksIHJnYig0NiA2NiAxNDkpKVxyXG59XHJcbiBcclxuLyogbGlxdWlkcyAqL1xyXG5kaXZbdGl0bGUqPVwiSGVsaW90cm9wZVwiXSxcclxuZGl2W3RpdGxlKj1cIkxpcXVpZCBFaW5zXCJdLFxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFsIFR1blwiXSxcclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIyIDgwIDU1KSwgcmdiKDE4IDc0IDEyNCkpXHJcbn1cclxuIFxyXG4vKiBjaGVtaWNhbHMgYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQ2hlbWljYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgQ3J5c3RhbHNcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQnJlYXRoYWJsZSBMaXF1aWRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJSZXNpblwiXSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXSxcclxuZGl2W3RpdGxlKj1cIkFjaWRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiIEJhY3RlcmlhXCJdLCBcclxuZGl2W3RpdGxlKj1cIlNvaWxcIl0sXHJcbmRpdlt0aXRsZSo9XCJTdGFiaWxpemVyXCJdLFxyXG5kaXZbdGl0bGUqPVwiRmVydGlsaXplclwiXSxcclxuZGl2W3RpdGxlKj1cIlRoZXJtb0ZsdWlkXCJdLFxyXG5kaXZbdGl0bGUqPVwiRW5yaWNoZWRcIl0sXHJcbmRpdlt0aXRsZSo9XCJOdXRyaWVudFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDExNCAzNyA2MikpXHJcbn1cclxuIFxyXG4vKiBwcmVmYWJzICovXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBEZWNrXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgQnVsa1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFRyYW5zXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEgNTQgNjYgKSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJMaWdodHdlaWdodFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg1IDk0IDM1KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJIYXJkZW5lZFwiXSwgXHJcbmRpdlt0aXRsZV49XCJSZWluZm9yY2VkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzggNDQgMjcpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIERlY2tcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUcmFuc3BcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBCdWxrXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMzUgOTQpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuIFxyXG4vKiBjb25zdHJ1Y3Rpb24gYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZT1cIkluc3VGb2FtXCJdLFxyXG5kaXZbdGl0bGU9XCJFcG94eSBSZXNpblwiXSxcclxuZGl2W3RpdGxlPVwiTWVnYVR1YmUgQ29hdGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiTmFuby1DYXJib24gU2hlZXRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8tQ29hdGVkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJSZWluZm9yY2VkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiXSxcclxuZGl2W3RpdGxlPVwiR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcyIDEyNSAyMjEpLCByZ2IoMCA2NCAxNzkpKVxyXG59XHJcbiBcclxuLyogY29uc3RydWN0aW9uIHBhcnRzICovXHJcbmRpdlt0aXRsZT1cIkFlcm9zdGF0IEZvdW5kYXRpb25cIl0sXHJcbmRpdlt0aXRsZT1cIkFpciBTY3J1YmJlclwiXSxcclxuZGl2W3RpdGxlPVwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvYXRpbmcgVGFua1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvdyBDb250cm9sIERldmljZVwiXSxcclxuZGl2W3RpdGxlPVwiRmx1aWQgUGlwaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJHYXMgVmVudFwiXSxcclxuZGl2W3RpdGxlPVwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiUHJlc3N1cmUgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJSYWRpYXRpb24gU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRoZXJtYWwgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY2LCAxMDIsIDEzMiksIHJnYig0MSwgNzcsIDEwNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTVEwgRnVlbFwiXSxcclxuZGl2W3RpdGxlPVwiRlRMIEZ1ZWxcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYigzMiA5MCAzMikpXHJcbn1cclxuIFxyXG4gXHJcbi8qIGVsZWN0cm9uaWMgc3lzdGVtcyBiZyBjb2xvciAqL1xyXG5kaXZbdGl0bGU9XCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkNsaW1hdGUgQ29udHJvbGxlclwiXSxcclxuZGl2W3RpdGxlPVwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkZUTCBGaWVsZCBDb250cm9sbGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJMaWZlIFN1cHBvcnQgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJMb2dpc3RpY3MgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRhcmdldGluZyBDb21wdXRlclwiXSxcclxuZGl2W3RpdGxlPVwiQ3J5b2dlbmljIFVuaXRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3NiwgNTEsIDE0MSksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuLyogbGlmZSByZWxhdGVkIGVsZWN0cm9uaWNzIHN5c3RlbXMgYmcgY29sb3IqL1xyXG5kaXZbdGl0bGU9XCJXYXRlciBSZWNsYWltZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCA5NiA1OCksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIml1bVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwic2l0ZVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwibWluZXJhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG5kaXZbdGl0bGUqPVwiY29udHJvbGxlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjptcIjsgb3BhY2l0eTogMC42XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpbHRlclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZGV2aWNlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgTUtcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5O7XCI7XHJcbn1cclxuLyog8J+bufCfmr/im7IgKi9cclxuZGl2W3RpdGxlKj1cImZsb3cgY29udHJvbCBkZXZpY2VcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5q/XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImdsYXNzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UslwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiaGVhZHBob25lXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Op1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJob2xvZ3JhcGhpYyBnbGFzc2VzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rk1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJkaW9kZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKWtlwiO1xyXG59XHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudCo9XCJTQVJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNjYW5uZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNlbnNvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflK1cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRm91bmRhdGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nh1wiO1xyXG59XHJcbi8qIPCfp67wn46r8J+On/Cfjp4gKi9cclxuZGl2W3RpdGxlKj1cIm1lbW9yeVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicHJvY2Vzc1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY2lyY3VpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp9cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwidGVuc29yXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nrlwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIm1lbW9yeSBiYW5rXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OnlwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJjaXJjdWl0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Oq1wiO1xyXG59XHJcbi8q8J+np/Cfjp/wn5K/8J+TvPCfjp4qL1xyXG5kaXZbdGl0bGU9XCJOb24tVm9sYXRpbGUgTWVtb3J5XCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+TgFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJzeXN0ZW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImNvbXB1dGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJtYWluZnJhbWVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5alXCI7IFxyXG4gIG9wYWNpdHk6IDAuNlxyXG59XHJcbi8qIPCfjpvwn46a8J+SvvCfkr3wn5K/8J+TgCAqL1xyXG5kaXZbdGl0bGUqPVwiTmF2aWdhdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJBcnRpZmljaWFsXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRhdGFcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTmV0d29ya1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEYXRhYmFzZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJGcmFtZXdvcmtcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWFuYWdlbWVudFwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJPcGVyYXRpbmdcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiSW50ZXJmYWNlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkFsZ29yaXRobVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNYW5hZ2VyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5K+XCI7XHJcbiAgb3BhY2l0eTogMC4zOyAvKiBzeXN0ZW0gb3ZlcnJpZGUqL1xyXG59XHJcbmRpdlt0aXRsZSo9XCJtb3RoZXJib2FyZFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwid2FmZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46rXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImJyb2FkY2FzdGluZ1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiYW50ZW5uYVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZW1pdHRlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6FcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwibGlicmFyeVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk5ZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiV29ya3N0YXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGlzcGxheVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Su1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaWdodFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SoVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJSb2NrXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpcXVpZFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1aWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQWlyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJHYXNcIl06YmVmb3JlLFxyXG4gZGl2W3RpdGxlKj1cIkFlcm9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBdWRpb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UilwiO1xyXG4gIG9wYWNpdHk6IDAuMzsgLyogc3lzdGVtIG92ZXJyaWRlICovXHJcbn1cclxuZGl2W3RpdGxlKj1cIlBvd2VyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDYXBhY2l0b3JcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflItcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiUG93ZXIgQ2VsbFwiXTpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4vKiDwn5So4puP4pqS8J+boPCflKfwn5Sp4pqZ8J+XnPCfp7AgKi9cclxuZGl2W3RpdGxlKj1cIkZhc3RlbmVyIEtpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Up1wiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiUmVwYWlyIEtpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsFwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiVGFua1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiRlRMIEZ1ZWwgVGFua1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7NcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlByb3RlY3Rpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiUGxhdGVcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2hpZWxkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uhXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQcm90ZWN0aW9uIE1hdGVyaWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6exXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDb25uZWN0b3JzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG9wYWNpdHk6IDAuNFxyXG59XHJcbmRpdlt0aXRsZSo9XCJTZWF0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+qkVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNoZW1pY2FsXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJBZ2VudFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiUmVzaW5cIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNvbG9yYW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkFjaWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYo1wiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ3J5b1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4p2EXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2lsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbn1cclxuLyog8J+nsPCflKrwn6m6ICovXHJcbmRpdlt0aXRsZSo9XCJTdXJnaWNhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLyog8J+OnvCfm4/wn5uMICovXHJcbmRpdlt0aXRsZSo9XCJNZWRpY2FsIHN0cmV0Y2hlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLyog8J+nsPCflKrwn6m68J+SiiAqL1xyXG5kaXZbdGl0bGUqPVwiTWVkaWNhbCBraXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIk1hZ25ldFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nslwiO1xyXG59XHJcbi8qIPCfl7/wn5a8ICovXHJcbmRpdlt0aXRsZSo9XCJEZWNvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5a8XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvbGFyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimqFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29sYXIgQ2VsbFwiXTpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbi8qIGFsbG95cyDimZIg8J+fqiovXHJcbmRpdlt0aXRsZSo9XCItVGl0YW5pdW1cIl06OmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBUaXRhbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6pcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJGZXJyb21pbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG4gXHJcbi8qIC0tLS0gTWVkaWNhbCAtLS0tLS0gKi9cclxuZGl2W3RpdGxlPVwiQXV0by1Eb2NcIl0sXHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWRpY2FsIFN0cmV0Y2hlclwiXSxcclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl0sXHJcbmRpdlt0aXRsZT1cIlN1cmdpY2FsIEVxdWlwbWVudFwiXSxcclxuZGl2W3RpdGxlPVwiVGVzdCBUdWJlc1wiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDEzMyA2NCksIHJnYig0OCA4NiA0OCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJBdXRvLURvY1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqOKAjeKale+4j1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e7XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJTdXJnaWNhbCBFcXVpcG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiVHViZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbi8qIPCfm4zwn5uP4pqVICovXHJcbmRpdlt0aXRsZSo9XCJDcmV3IFF1YXJ0ZXJzXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlRyYXVtYSBDYXJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uPXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwiSW9kaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvZGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nglwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDYXJib25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqlcIjtcclxufVxyXG4vKiDwn6eC8J+Sv/CfjZnwn42l4puw8J+PlCAqL1xyXG5kaXZbdGl0bGU9XCJDaGxvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NpVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1bGZ1clwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+foVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlRhbnRhbHVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SYXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQ2FsY2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmVyeWxsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJNYWduZXNpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbi8qIOOAsPCfp4jwn6eK8J+fpPCfn6YgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJBbHVtaW5pdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTdGVlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJUaXRhbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGV+PVwiVHVuZ3N0ZW5cIl06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6tcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2lsaWNvblwiXTpiZWZvcmV7XHJcbiAgY29udGVudDogXCLjgLBcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJDb3BwZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6dcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbi8qIPCfn6UgKi9cclxuZGl2W3RpdGxlPVwiSXJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG4vKiBhbGxveXMgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UtlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJsdWUgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ut1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJyb256ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UulwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJvcm9zaWxpY2F0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi44CwXCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuLyog8J+WiuKdl+KelvCfkogg8J+MoPCfpZbwn42h8J+nqCAqL1xyXG5kaXZbdGl0bGUqPVwiZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eoXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiYmFzaWMgZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinpZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiIHJlYWN0b3JcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46GXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpc3Npb24gcmVhY3RvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cInJhZGlvaXNvdG9wZSBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuLyogLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkxpbWVzdG9uZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lr1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkRyb25lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinIhcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJPcmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJDcnlzdGFsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SjlwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0tLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHcmFpbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNYWl6ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkRyaW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eDXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiUHJvdGVpbi1SaWNoIEJlYW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WSXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgUmFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpatcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJOdXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WcXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRnJ1aXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42FXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGxhbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yyXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL9cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJBbGdhZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ng1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdyYXBlc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nh1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkhlcmJzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRm9kZGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiSG9wc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkNvdHRvbiBGaWJlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhdHRpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNdXNocm9vbXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQaW5lYmVycmllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nk1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhc3RlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WjXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiU29sdXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJWaXRhIEVzc2VuY2VcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbZcIjtcclxufVxyXG4gXHJcbi8qIGxpcXVpZHMgKi9cclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkhlbGlvdHJvcGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpYNcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTGlxdWlkIEVpbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZtcIjtcclxufVxyXG4gXHJcbi8qIPCfjqjwn4+A8J+PkOKaviAqL1xyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PkFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBvbHktRXRoeWxlbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKavlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIlNoZWV0IFR5cGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJGb2FtXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlNlYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjKtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRmliZXJcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRmFicmljXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e1XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJTdXBwbGllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ToFwiO1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJVbmlmb3JtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5GWXCI7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlRvb2xzZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRlRMXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIBcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNhc2luZ1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkRlY2sgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlN0cnVjdHVyYWwgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiO1xyXG59XHJcbi8qIPCfm44gKi9cclxuZGl2W3RpdGxlJD1cIkJ1bGtoZWFkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5u4XCI7XHJcbn1cclxuLyog8J+Pl/Cfp63wn4yr4piA8J+MgCAqL1xyXG5kaXZbdGl0bGUkPVwiQXBlcnR1cmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj5dcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+XvFwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0gZ2Fzc2VzLS0tLS0tICovXHJcbi8qIPCfkqjwn5Wz44Cw8J+MivCfjKvwn5Kl8J+bovCfp7Pwn6e04piEICovXHJcbiBcclxuZGl2W3RpdGxlPVwiQW1tb25pYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+puFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkFyZ29uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJGbHVvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTmVvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTml0cm9nZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJPeHlnZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqhcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiSGVsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yMXCI7XHJcbn1cclxuZGl2W3RpdGxlXj1cIkh5ZHJvZ2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KrXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiSGVsaXVtLTMgSXNvdG9wZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SplwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYlVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+npVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiV29yayBPdmVyYWxsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6a6XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDk3IDEwNCksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLCBcclxuZGl2W3RpdGxlJD1cIldvcmsgT3ZlcmFsbFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nr1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiRXhvc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rt+KAjeKZgO+4j1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiUG93ZXIgVG9vbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIkV4b3NcIl0sIFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W3RpdGxlPVwiUmVwYWlyIEtpdFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQWxlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn426XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkolcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqeKAjfCfmpJcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLCBcclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXSwgXHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTYgMTI0IDI3KSwgcmdiKDU3IDczIDE0NykpIFxyXG59XHJcbmRpdlt0aXRsZSQ9XCJBbGVcIl0sIFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNiAxMjQgMjcpLCByZ2IoMTA1IDMwIDE0NSkpIFxyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdpblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lg1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+loVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkajigI3wn5qAXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSo9XCJwZXJzb25hbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7FcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiRmxhdm91cmVkIEluc3RhLU1lYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSwgXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlJD1cIkdpblwiXSwgXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbdcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NsVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpbxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflKxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLCBcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSwgXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTUgOTIgMTY5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuLyog8J+VueKYjvCfk54gKi9cclxuZGl2W3RpdGxlKj1cImNvbW1hbmQgYnJpZGdlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piOXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog4puw4pii4pqZ8J+asPCfjKEgKi9cclxuZGl2W3RpdGxlKj1cImVuZ2luZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfmoBcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibm96emxlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+nqPCfjJ/wn6ez8J+bjiAqL1xyXG5kaXZbdGl0bGUqPVwiY29tYnVzdGlvbiBjaGFtYmVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ns1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJwdW1wXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBpbmdcImldOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5qwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInZlbnRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimahcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+XvPCfp4fwn5SX4puT8J+bofCfk47wn5aHICovIFxyXG5kaXZbdGl0bGUqPVwic3RydWN0dXJhbCBzcGFjZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfp4rwn5OmICovIFxyXG5kaXZbdGl0bGUqPVwiY2FyZ28gYmF5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TplwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJoYWJpdGF0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PoFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJzdXJnZXJ5IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimpVcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKvCfl4Twn46v8J+OoSovXHJcbmRpdlt0aXRsZSo9XCJlbnRlcnRhaW5tZW50IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46hXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+OqCAqL1xyXG5kaXZbdGl0bGUqPVwid29ya3Nob3AgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqhcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiBzaXplcyAqL1xyXG4gXHJcbmRpdlt0aXRsZSo9XCJzbWFsbFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidGlueVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUkPVwiIHNcImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibWVkaXVtXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSQ9XCIgbVwiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ0cmFuc2lzdG9yXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuIFxyXG4vKiBidWlsZGluZ3MgLSBraWxsIHN0cmF5IGljb25zICovXHJcbmRpdi5CdWlsZGluZ0ljb25fX2NvbnRhaW5lcl9fX2pGNUdVc3o6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcbiAgICBcclxuICAgIC8qIGl0ZW1zIGluIG1hcmtldCB2aWV3ICovXHJcbnRhYmxlLkJyb2tlckxpc3RfX3RhYmxlX19feWxnZWl5ZyA+XHJcbnRib2R5ID5cclxudHIgPlxyXG50ZCA+XHJcbmRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggPlxyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4vKiBpdGVtcyBpbiBidWlsZGluZyB2aWV3ICovXHJcbmRpdi5CdWlsZGluZ0luZm9ybWF0aW9uX19yZWNpcGVfX191emFueFh3ID5cclxuZGl2ID5cclxuZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCA+XHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLyogaXRlbXMgaW4gcmVjaXBlIHZpZXcgKi9cclxuZGl2Lk1hdGVyaWFsSW5mb3JtYXRpb25fX3JlY2lwZUlucHV0c19fX2VMdmZvb3AgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4vKiBpdGVtcyBpbiBwbGFuZXQgdmlldyAqL1xyXG5kaXYuUmVzb3VyY2VUYWJsZV9fZ3JpZENvbnRhaW5lcl9fX3ltcnpUY0QgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59YDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBDdXJyZW5jeVN5bWJvbHMgPSB7XG4gICAgXCJDSVNcIjogXCLigqFcIixcbiAgICBcIkFJQ1wiOiBcIuKCs1wiLFxuICAgIFwiTkNDXCI6IFwi4oKmXCIsXG4gICAgXCJJQ0FcIjogXCLHglwiLFxuICAgIFwiRUNEXCI6IFwi4oKsXCIsXG59O1xuZXhwb3J0IGNvbnN0IEZhY3Rpb25IZWFkZXJzID0ge1xuICAgIFwiQ2FzdGlsbG8tSXRvXCI6IFwiQ0lcIixcbiAgICBcIkluc2l0b3JcIjogXCJJQ1wiLFxuICAgIFwiQW50YXJlc1wiOiBcIkFJXCIsXG4gICAgXCJORU8gQ2hhcnRlclwiOiBcIk5DXCJcbn07XG5leHBvcnQgY29uc3QgUmF0aW5nQ29sb3JzID0ge1xuICAgIFwiUFwiOiBcIiMxYjZiOWNcIixcbiAgICBcIlVcIjogXCIjOGIyMTFlXCIsXG4gICAgXCJGXCI6IFwiI2UyNmMzN1wiLFxuICAgIFwiRVwiOiBcIiNlNzc4MmJcIixcbiAgICBcIkRcIjogXCIjZTg3ZDI4XCIsXG4gICAgXCJDXCI6IFwiI2VkODkxY1wiLFxuICAgIFwiQlwiOiBcIiNmMTk1MTBcIixcbiAgICBcIkFcIjogXCIjZjZhMjA0XCJcbn07XG5leHBvcnQgY29uc3QgRnJpZW5kbHlOYW1lcyA9IHtcbiAgICBcIkxvY2FsTWFya2V0QWRzXCI6IFwiTE0gVW5pdCBQcmljZXNcIixcbiAgICBcIk9yZGVyRVRBc1wiOiBcIk9yZGVyIEVUQXNcIixcbiAgICBcIkZsaWdodEVUQXNcIjogXCJGbGlnaHQgUGxhbm5pbmcgRVRBc1wiLFxuICAgIFwiU2hpcHBpbmdBZHNcIjogXCJMTSBTaGlwcGluZyBSYXRlc1wiLFxuICAgIFwiUG9zdExNXCI6IFwiTE0gUG9zdGluZyBVbml0IFByaWNlXCIsXG4gICAgXCJDb250cmFjdERyYWZ0c1wiOiBcIkNPTlREIFVuaXQgUHJpY2VzXCIsXG4gICAgXCJRdWV1ZUxvYWRcIjogXCJRdWV1ZSBQZXJjZW50IERpc3BsYXlcIixcbiAgICBcIkNvbnN1bWFibGVUaW1lcnNcIjogXCJXb3JrZm9yY2UgQ29uc3VtYWJsZSBCdXJuXCIsXG4gICAgXCJGbGVldEVUQXNcIjogXCJGbGVldCBFVEFzXCIsXG4gICAgXCJOb3RpZmljYXRpb25zXCI6IFwiTm90aWZpY2F0aW9uc1wiLFxuICAgIFwiU2NyZWVuVW5wYWNrXCI6IFwiU2NyZWVuIFVucGFja1wiLFxuICAgIFwiSW1hZ2VDcmVhdG9yXCI6IFwiQ2hhdCBJbWFnZSBDcmVhdG9yXCIsXG4gICAgXCJJbnZlbnRvcnlPcmdhbml6ZXJcIjogXCJJbnZlbnRvcnkgU29ydGluZ1wiLFxuICAgIFwiQ29tbWFuZENvcnJlY3RlclwiOiBcIkNvbW1hbmQgQ29ycmVjdGVyXCIsXG4gICAgXCJDYWxjdWxhdG9yQnV0dG9uXCI6IFwiQ2FsY3VsYXRvciBCdXR0b25cIixcbiAgICBcIlNpZGViYXJcIjogXCJTaWRlYmFyXCIsXG4gICAgXCJIZWFkZXJNaW5pbWl6ZXJcIjogXCJNaW5pbWl6ZSBIZWFkZXJzIChNYXN0ZXIpXCIsXG4gICAgXCJQZW5kaW5nQ29udHJhY3RzXCI6IFwiUGVuZGluZyBDb250cmFjdHNcIixcbiAgICBcIkNvbXBhY3RVSVwiOiBcIkNvbXBhY3QgVUkgKE1hc3RlcilcIlxufTtcbmV4cG9ydCBjb25zdCBTb3J0aW5nVHJpYW5nbGVIVE1MID0gYFxyXG48ZGl2IHRpdGxlPVwiXCI+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiByb2xlPVwiaW1nXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PGc+PHBhdGggZD1cIk0uODg2ODEgMS4wOTc3NTJsMTIuMTM3NzQgMjEuMDIzMThMMjUuNDIyOTY0IDEuMTA1NDQ2elwiPjwvcGF0aD48L2c+PC9zdmc+PC9kaXY+YDtcbmV4cG9ydCBjb25zdCBQbGFuZXRDb21tYW5kcyA9IFtcIkFETVwiLCBcIkJTQ1wiLCBcIkNPR0NcIiwgXCJDT0dDUEVYXCIsIFwiQ09HQ1VcIiwgXCJGTFRQXCIsIFwiTFJcIiwgXCJMTVBcIiwgXCJMTVwiLCBcIlBMSVwiLCBcIlBPUElcIiwgXCJQT1BSXCIsIFwiUFBTXCIsIFwiU0hZXCIsIFwiV0FSXCJdO1xuZXhwb3J0IGNvbnN0IFN5c3RlbU5hbWVzID0ge1xuICAgIFwiQVJDTElHSFRcIjogXCJBTS03ODNcIixcbiAgICBcIkZPUkdFLUtFRVBcIjogXCJGSy0zNzFcIixcbiAgICBcIk1PVU5UIE9MWU1QVVNcIjogXCJITS0wNDlcIixcbiAgICBcIkdBVEVXQVlcIjogXCJITS0yMjNcIixcbiAgICBcIk5FTyBFREVOXCI6IFwiSlMtMjk5XCIsXG4gICAgXCJFQklTVVwiOiBcIkpTLTk1MlwiLFxuICAgIFwiQkFTVEFCTE9OXCI6IFwiS1ctMDIwXCIsXG4gICAgXCJET0xaRU5BXCI6IFwiTEctNDE4XCIsXG4gICAgXCJUUklOSVRZXCI6IFwiT0YtMjU5XCIsXG4gICAgXCJNT1JJQVwiOiBcIk9ULTU4MFwiLFxuICAgIFwiT1VURVIgSEVBVkVOXCI6IFwiUEctODk5XCIsXG4gICAgXCJBVVJVTVwiOiBcIlFKLTY1MFwiLFxuICAgIFwiQUNFVEFSRVNcIjogXCJRSi02ODRcIixcbiAgICBcIkhVQlVSXCI6IFwiVEQtMjAzXCIsXG4gICAgXCJIT1RFSVwiOiBcIlVWLTEzNVwiLFxuICAgIFwiQkVOVEVOXCI6IFwiVVYtMzUxXCIsXG4gICAgXCJEQUlLT0tVXCI6IFwiVVYtNzk2XCIsXG4gICAgXCJIT1JUVVNcIjogXCJWSC0zMzFcIixcbiAgICBcIk1JRFdBWVwiOiBcIldCLTY3NVwiLFxuICAgIFwiQU5UQVJFUyBJSUlcIjogXCJaVi0xOTRcIixcbiAgICBcIkFOVEFSRVMgSVwiOiBcIlpWLTMwN1wiLFxuICAgIFwiQU5UQVJFUyBJSVwiOiBcIlpWLTc1OVwiXG59O1xuZXhwb3J0IGNvbnN0IFBsYW5ldE5hbWVzID0ge1xuICAgIFwiTEVNVVJJQVwiOiBcIkFKLTc2OGFcIixcbiAgICBcIkdBTExVU1wiOiBcIkFNLTc4M2JcIixcbiAgICBcIkVNRU5USU9SXCI6IFwiQU0tNzgzY1wiLFxuICAgIFwiVFlQSE9OXCI6IFwiQVUtNTIyYlwiLFxuICAgIFwiTk9WQSBIT05TSFVcIjogXCJCUy03ODhjXCIsXG4gICAgXCJUQUNPVE9QSUFcIjogXCJDQi0wNDViXCIsXG4gICAgXCJQWVJHT1NcIjogXCJDSC03NzFhXCIsXG4gICAgXCJUQUxPU0lBXCI6IFwiREMtODIzYlwiLFxuICAgIFwiT1JNXCI6IFwiRFctNDU2Z1wiLFxuICAgIFwiTUFOSUZPTERcIjogXCJFTC0xNzliXCIsXG4gICAgXCJOT1ZBIFVOQUxBU0tBXCI6IFwiRVotNDc2YlwiLFxuICAgIFwiVE9LVFVcIjogXCJGSy0wMzdmXCIsXG4gICAgXCJMQSBGT1JHRVwiOiBcIkZLLTM3MWJcIixcbiAgICBcIkJPVUNIRVJcIjogXCJGSy03OTRiXCIsXG4gICAgXCJWQVVMVFwiOiBcIkdDLTY0NWJcIixcbiAgICBcIkNIVVwiOiBcIkdZLTExMGNcIixcbiAgICBcIlBPU0VJRE9OXCI6IFwiSE0tMDQ5YlwiLFxuICAgIFwiQVBPVEhFQ0FSWVwiOiBcIklBLTYwM2JcIixcbiAgICBcIkVMRUNUUk9OSUNBXCI6IFwiSVktMDI4Y1wiLFxuICAgIFwiTkVNRVNJU1wiOiBcIkpTLTI5OWFcIixcbiAgICBcIkdJQlNPTlwiOiBcIkpTLTk1MmNcIixcbiAgICBcIkFVU1RSQUxJQVwiOiBcIktJLTQ0NmFcIixcbiAgICBcIkRFTUVURVJcIjogXCJLSS00NDZiXCIsXG4gICAgXCJIRVJNRVNcIjogXCJLSS00NDhiXCIsXG4gICAgXCJST0NLXCI6IFwiS1EtOTY2YlwiLFxuICAgIFwiTUlMTElXQVlTXCI6IFwiS1ctMDIwY1wiLFxuICAgIFwiR0lFREkgUFJJTUVcIjogXCJLVy0zNThiXCIsXG4gICAgXCJFVEhFUldJTkRcIjogXCJLVy02ODhjXCIsXG4gICAgXCJLSU5aQVwiOiBcIkxHLTQxOGJcIixcbiAgICBcIlBMQU5FVCBNQyBQTEFORVRGQUNFXCI6IFwiTEctOTEzZVwiLFxuICAgIFwiQVJBVE9SQVwiOiBcIkxTLTIzMWJcIixcbiAgICBcIkdSSUZGT05TVE9ORVwiOiBcIkxTLTMwMGNcIixcbiAgICBcIkpVUkFcIjogXCJPRi0yNTlkXCIsXG4gICAgXCJCRVJUSElFUlwiOiBcIk9GLTM3NWJcIixcbiAgICBcIkFEQUxJTkFcIjogXCJPRi0zNzVjXCIsXG4gICAgXCJEQU5BS0lMXCI6IFwiT1QtNDQyYlwiLFxuICAgIFwiSUlST05cIjogXCJPVC01ODBhXCIsXG4gICAgXCJNT05URU1cIjogXCJPVC01ODBiXCIsXG4gICAgXCJWQUxMSVNcIjogXCJPVC01ODBjXCIsXG4gICAgXCJQQUxMQURBXCI6IFwiT1QtNTgwZFwiLFxuICAgIFwiUFJJU01cIjogXCJPVC04ODlhXCIsXG4gICAgXCJKRUVUSVlVXCI6IFwiT1QtODg5YlwiLFxuICAgIFwiU0FMQURJTlwiOiBcIlBHLTg5OWJcIixcbiAgICBcIk5BU0NFTlRcIjogXCJRSi0xNDljXCIsXG4gICAgXCJFTE9OXCI6IFwiUUotNjUwY1wiLFxuICAgIFwiTE9NIFBBTEFOS0FcIjogXCJRSi02ODRhXCIsXG4gICAgXCJBQ0VMQU5EXCI6IFwiUUotNjg0YlwiLFxuICAgIFwiQ0lSQ0FcIjogXCJRUS0wMDFhXCIsXG4gICAgXCJDSVJDRVwiOiBcIlFRLTAwMWJcIixcbiAgICBcIkNFTEVCRElMXCI6IFwiUVEtNjQ1YlwiLFxuICAgIFwiTUFMQUhBVFwiOiBcIlJDLTA0MGJcIixcbiAgICBcIklST05GT1JHRVwiOiBcIlJDLTA0MGNcIixcbiAgICBcIklDRSBTVEFUSU9OIEFMUEhBXCI6IFwiU0UtMTEwY1wiLFxuICAgIFwiU0hFT0xcIjogXCJURC0yMDNiXCIsXG4gICAgXCJSSEFaRVNcIjogXCJURC0yMjhiXCIsXG4gICAgXCJBU0JFU1RPUyBMRUFEIEFTQkVTVE9TXCI6IFwiVVYtMDcyY1wiLFxuICAgIFwiS0FUT0FcIjogXCJVVi0zNTFhXCIsXG4gICAgXCJZQU5OSUNLXCI6IFwiVVYtMzUxYlwiLFxuICAgIFwiVU1CUkFcIjogXCJVVi0zNTFjXCIsXG4gICAgXCJCSU9HRU5FU0lTXCI6IFwiVVYtMzUxZFwiLFxuICAgIFwiUFJPWElPTlwiOiBcIlVWLTc5NmJcIixcbiAgICBcIlBIQU5UQVNNXCI6IFwiVkgtMDQzYVwiLFxuICAgIFwiUFJPTUlUT1JcIjogXCJWSC0zMzFhXCIsXG4gICAgXCJIRUxJT04gUFJJTUVcIjogXCJWSC0zMzFkXCIsXG4gICAgXCJPRFlTU0VVU1wiOiBcIlZILTMzMWZcIixcbiAgICBcIkFWQUxPTlwiOiBcIlZILTMzMWdcIixcbiAgICBcIkhZRFJPTlwiOiBcIlZILTMzMWlcIixcbiAgICBcIkdBU1dPUkxEXCI6IFwiV0ItNjc1aVwiLFxuICAgIFwiTUlNQVJcIjogXCJXQy03MDJiXCIsXG4gICAgXCJNQUdVU1wiOiBcIlhELTM1NGJcIixcbiAgICBcIlVQT05PUlwiOiBcIlhILTMyOWFcIixcbiAgICBcIkxJQkVSVEFTXCI6IFwiWEgtNTk0YVwiLFxuICAgIFwiS0lSVU5BXCI6IFwiWEgtNTk0YlwiLFxuICAgIFwiQ09SVEVaXCI6IFwiWEgtNTk0Y1wiLFxuICAgIFwiS1VCXCI6IFwiWUktMDU5ZlwiLFxuICAgIFwiSEFSUElOQVwiOiBcIllJLTIwOWhcIixcbiAgICBcIkFSQ0FESUFcIjogXCJZSS02ODNjXCIsXG4gICAgXCJWRVJEQU5UXCI6IFwiWUktNzE1YlwiLFxuICAgIFwiTk9SV0lDS1wiOiBcIllLLTY0OWJcIixcbiAgICBcIk5JS0VcIjogXCJaVi0xOTRhXCIsXG4gICAgXCJIRVBIQUVTVFVTXCI6IFwiWlYtMzA3Y1wiLFxuICAgIFwiUEhPQk9TXCI6IFwiWlYtMzA3ZFwiLFxuICAgIFwiVlVMQ0FOXCI6IFwiWlYtNzU5YlwiLFxuICAgIFwiREVJTU9TXCI6IFwiWlYtNzU5Y1wiLFxuICAgIFwiSEFSTU9OSUFcIjogXCJaVi04OTZiXCJcbn07XG5leHBvcnQgY29uc3QgTWF0ZXJpYWxOYW1lcyA9IHtcbiAgICBcIkFBUlwiOiBbXCJBbnRlbm5hIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQUJIXCI6IFtcIkFkdmFuY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJBQ1NcIjogW1wiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiQURFXCI6IFtcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkFEUlwiOiBbXCJBdXRvLURvY1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiQURTXCI6IFtcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJBRUZcIjogW1wiQWVyb3N0YXQgRm91bmRhdGlvblwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkFFTlwiOiBbXCJBZHZhbmNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQUZQXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkFGUlwiOiBbXCJBZHZhbmNlZCBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkFHU1wiOiBbXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiQUhQXCI6IFtcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiQUlSXCI6IFtcIkFpciBTY3J1YmJlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkFMXCI6IFtcIkFsdW1pbml1bVwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIkFMRVwiOiBbXCJTdGVsbGFyIFBhbGUgQWxlXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJBTEdcIjogW1wiUHJvdGVpbi1SaWNoIEFsZ2FlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiQUxPXCI6IFtcIkFsdW1pbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiQU1NXCI6IFtcIkFtbW9uaWFcIiwgXCJnYXNlc1wiXSxcbiAgICBcIkFOWlwiOiBbXCJBZHZhbmNlZCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJBUFRcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJBUlwiOiBbXCJBcmdvblwiLCBcImdhc2VzXCJdLFxuICAgIFwiQVJQXCI6IFtcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQVNFXCI6IFtcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkFTVFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiQVRBXCI6IFtcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJBVFBcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkFVXCI6IFtcIkdvbGRcIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJBVU9cIjogW1wiR29sZCBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiQVdGXCI6IFtcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJBV0hcIjogW1wiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJCQUNcIjogW1wiSGVscGZ1bCBCYWN0ZXJpYVwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkJBSVwiOiBbXCJCYXNpYyBBSSBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiQkJIXCI6IFtcIkJhc2ljIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJCQ09cIjogW1wiQnVkZ2V0IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIkJERVwiOiBbXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJCRVwiOiBbXCJCZXJ5bGxpdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIkJFQVwiOiBbXCJQcm90ZWluLVJpY2ggQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJCRVJcIjogW1wiQmVyeWwgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkJGUFwiOiBbXCJCYXNpYyBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJCRlJcIjogW1wiQmFzaWMgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJCR0NcIjogW1wiU2hpZWxkZWQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiQkdPXCI6IFtcIkJsdWUgR29sZFwiLCBcImFsbG95c1wiXSxcbiAgICBcIkJHU1wiOiBbXCJCYXNpYyBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiQkhQXCI6IFtcIkJhc2ljIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiQklEXCI6IFtcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJCTFwiOiBbXCJCcmVhdGhhYmxlIExpcXVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkJMRVwiOiBbXCJEZXNhdHVyYXRpb24gQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJCTUZcIjogW1wiQmFzaWMgTWFpbmZyYW1lXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQk5EXCI6IFtcIkJhbmRhZ2VzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJCT1JcIjogW1wiQm9yb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkJPU1wiOiBbXCJCb3Jvc2lsaWNhdGVcIiwgXCJhbGxveXNcIl0sXG4gICAgXCJCUFRcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJCUjFcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsxXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQlIyXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMlwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkJSTVwiOiBbXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiQlJPXCI6IFtcIkJyb256ZVwiLCBcImFsbG95c1wiXSxcbiAgICBcIkJSUFwiOiBbXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkJSU1wiOiBbXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkJTQ1wiOiBbXCJCb2R5IFNjYW5uZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJCU0VcIjogW1wiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQlRBXCI6IFtcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJCVFNcIjogW1wiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCIsIFwibGlxdWlkc1wiXSxcbiAgICBcIkJXSFwiOiBbXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkJXU1wiOiBbXCJCYXNpYyBXb3Jrc3RhdGlvblwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkNcIjogW1wiQ2FyYm9uXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJDQVwiOiBbXCJDYWxjaXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJDQUZcIjogW1wiQ2FmZmVpbmF0ZWQgQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJDQVBcIjogW1wiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJDQkxcIjogW1wiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIkNCTVwiOiBbXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIkNCU1wiOiBbXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiQ0NcIjogW1wiQ2xpbWF0ZSBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiQ0NEXCI6IFtcIkNyb3dkIENvbnRyb2wgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJDRFwiOiBbXCJDYXBhY2l0aXZlIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiQ0ZcIjogW1wiQ2VyYW1pYyBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIkNIQVwiOiBbXCJDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJDTFwiOiBbXCJDaGxvcmluZVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiQ0xJXCI6IFtcIkNhbGljaGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiQ01LXCI6IFtcIlwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJDT0ZcIjogW1wiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIkNPTVwiOiBbXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkNPVFwiOiBbXCJDb3R0b24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJDUUxcIjogW1wiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQ1FNXCI6IFtcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJDUVNcIjogW1wiQ3JldyBRdWFydGVycyAoU21hbGwpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQ1FUXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQ1JVXCI6IFtcIkNyeW9nZW5pYyBVbml0XCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiQ1NUXCI6IFtcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiQ1RGXCI6IFtcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJDVVwiOiBbXCJDb3BwZXJcIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJDVU9cIjogW1wiQ29wcGVyIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJEQVwiOiBbXCJEYXRhIEFuYWx5emVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJEQ0hcIjogW1wiRHJvbmUgQ2hhc3Npc1wiLCBcImRyb25lc1wiXSxcbiAgICBcIkRDTFwiOiBbXCJEdXJhYmxlIENhc2luZyBMXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJEQ01cIjogW1wiRHVyYWJsZSBDYXNpbmcgTVwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiRENTXCI6IFtcIkR1cmFibGUgQ2FzaW5nIFNcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIkREXCI6IFtcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJERFRcIjogW1wiRERUIFBsYW50IEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiREVDXCI6IFtcIkRlY29yYXRpdmUgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJESVNcIjogW1wiSW5mb3JtYXRpb24gRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJET1VcIjogW1wiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiRFJGXCI6IFtcIkRyb25lIEZyYW1lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiRFZcIjogW1wiRGF0YSBWaXN1YWxpemVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJEV1wiOiBbXCJEcmlua2luZyBXYXRlclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJFRENcIjogW1wiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIkVFU1wiOiBbXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkVOR1wiOiBbXCJTdGFuZGFyZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiRVBPXCI6IFtcIkVwb3h5IFJlc2luXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIkVTXCI6IFtcIkVpbnN0ZWluaXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJFVENcIjogW1wiRW5yaWNoZWQgVGVjaG5ldGl1bVwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkVYT1wiOiBbXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiRlwiOiBbXCJGbHVvcmluZVwiLCBcImdhc2VzXCJdLFxuICAgIFwiRkFMXCI6IFtcIkZlcnJvbWluaXVtXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiRkFOXCI6IFtcIkFjdGl2ZSBDb29saW5nIERldmljZVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJGQ1wiOiBbXCJGbG93IENvbnRyb2wgRGV2aWNlXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiRkVcIjogW1wiSXJvblwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIkZFT1wiOiBbXCJJcm9uIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJGRVRcIjogW1wiRmVycm8tVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXG4gICAgXCJGRlwiOiBbXCJGVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxuICAgIFwiRkZDXCI6IFtcIkZUTCBGaWVsZCBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiRklNXCI6IFtcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkZJUlwiOiBbXCJGaXNzaW9uIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJGTE9cIjogW1wiRmxvYXRpbmcgVGFua1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkZMUFwiOiBbXCJGbHVpZCBQaXBpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJGTFhcIjogW1wiRmx1eFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkZPRFwiOiBbXCJBbGwtUHVycG9zZSBGb2RkZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJGU0VcIjogW1wiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkZVTlwiOiBbXCJFbnRlcnRhaW5tZW50IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJHQUxcIjogW1wiR2FsZXJpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiR0NcIjogW1wiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkdDSFwiOiBbXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJHRU5cIjogW1wiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkdJTlwiOiBbXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiR0xcIjogW1wiR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiR05aXCI6IFtcIkdsYXNzIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkdSQVwiOiBbXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiR1JOXCI6IFtcIkhpZ2gtQ2FyYiBHcmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJHVlwiOiBbXCJHYXMgVmVudFwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkhcIjogW1wiSHlkcm9nZW5cIiwgXCJnYXNlc1wiXSxcbiAgICBcIkgyT1wiOiBbXCJXYXRlclwiLCBcImxpcXVpZHNcIl0sXG4gICAgXCJIQUJcIjogW1wiSGFiaXRhdCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiSEFMXCI6IFtcIkhhbGl0ZSBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiSENDXCI6IFtcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiSENQXCI6IFtcIkh5ZHJvY2FyYm9uIFBsYW50c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkhEXCI6IFtcIkhvbG9ncmFwaGljIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJIRVwiOiBbXCJIZWxpdW1cIiwgXCJnYXNlc1wiXSxcbiAgICBcIkhFM1wiOiBbXCJIZWxpdW0tMyBJc290b3BlXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJIRVJcIjogW1wiU3BpY3kgSGVyYnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJIRVhcIjogW1wiSGVsaW90cm9wZSBFeHRyYWN0XCIsIFwibGlxdWlkc1wiXSxcbiAgICBcIkhIUFwiOiBbXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkhNU1wiOiBbXCJIYXpNYXQgV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkhOWlwiOiBbXCJIeXBlcnRocnVzdCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJIT0dcIjogW1wiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkhPUFwiOiBbXCJGbG93ZXJ5IEhvcHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJIUENcIjogW1wiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkhQUlwiOiBbXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiSFNFXCI6IFtcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkhTU1wiOiBbXCJTbWFydCBTcGFjZSBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkhURVwiOiBbXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiSFlSXCI6IFtcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJJXCI6IFtcIklvZGluZVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiSURDXCI6IFtcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXG4gICAgXCJJTU1cIjogW1wiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxuICAgIFwiSU5EXCI6IFtcIkluZGlnbyBDb2xvcmFudFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIklOU1wiOiBbXCJJbnN1Rm9hbVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJKVUlcIjogW1wiU2VkYXRpdmUgU3Vic3RhbmNlXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiS09NXCI6IFtcIktvbWJ1Y2hhXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJLVlwiOiBbXCJLZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJMQkhcIjogW1wiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkxDXCI6IFtcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkxDQlwiOiBbXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTENSXCI6IFtcIkxpcXVpZCBDcnlzdGFsc1wiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkxEXCI6IFtcIkxvY2FsIERhdGFiYXNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIkxERVwiOiBbXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJMRElcIjogW1wiTGFzZXIgRGlvZGVzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJMRVNcIjogW1wiTGlxdWlkIEVpbnN0ZWluaXVtXCIsIFwibGlxdWlkc1wiXSxcbiAgICBcIkxGRVwiOiBbXCJMYXJnZSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkxGTFwiOiBbXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIkxGUFwiOiBbXCJMb3ctaGVhdCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJMSFBcIjogW1wiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJMSVwiOiBbXCJMaXRoaXVtXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiTElPXCI6IFtcIkxpdGhpdW0gT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIkxJU1wiOiBbXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiTElUXCI6IFtcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiTE9HXCI6IFtcIkxvZ2lzdGljcyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJMU0VcIjogW1wiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiTFNMXCI6IFtcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTFNUXCI6IFtcIkxpbWVzdG9uZVwiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiTFRBXCI6IFtcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJMVVwiOiBbXCJMYWJvcmF0b3J5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJNQUdcIjogW1wiTWFnbmV0aXRlXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJNQUlcIjogW1wiSGlnaC1DYXJiIE1haXplXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiTUJcIjogW1wiTW90aGVyYm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiTUNCXCI6IFtcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTUNHXCI6IFtcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJNRUFcIjogW1wiUXVhbGl0eSBNZWF0IE1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiTUVEXCI6IFtcIkJhc2ljIE1lZGljYWwgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIk1GRVwiOiBbXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJNRktcIjogW1wiTWVkaXVtIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiTUZMXCI6IFtcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIk1HXCI6IFtcIk1hZ25lc2l1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiTUdDXCI6IFtcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIk1HU1wiOiBbXCJNYWduZXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIk1ITFwiOiBbXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiTUhQXCI6IFtcIk1pY3JvIEhlYWRwaG9uZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJNTElcIjogW1wiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiTVBDXCI6IFtcIk1pY3JvLVByb2Nlc3NvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJNU0xcIjogW1wiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTVRDXCI6IFtcIk1lZ2FUdWJlIENvYXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiTVRQXCI6IFtcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJNVVNcIjogW1wiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIk1XRlwiOiBbXCJNZWRpdW0gV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIk5cIjogW1wiTml0cm9nZW5cIiwgXCJnYXNlc1wiXSxcbiAgICBcIk5BXCI6IFtcIlNvZGl1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiTkFCXCI6IFtcIlNvZGl1bSBCb3JvaHlkcmlkZVwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIk5DU1wiOiBbXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJORVwiOiBbXCJOZW9uXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJORlwiOiBbXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJORklcIjogW1wiTmFubyBGaWJlclwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJOR1wiOiBbXCJOYW5vLUNvYXRlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJOTFwiOiBbXCJOeWxvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIk5OXCI6IFtcIk5ldXJhbCBOZXR3b3JrXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJOT1pcIjogW1wiQmFzaWMgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiTlJcIjogW1wiTmFuby1FbmhhbmNlZCBSZXNpblwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIk5TXCI6IFtcIk51dHJpZW50IFNvbHV0aW9uXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiTlNUXCI6IFtcIk5ldXJvU3RpbXVsYW50c1wiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiTlVUXCI6IFtcIlRyaWdseWNlcmlkZSBOdXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiTlYxXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJOVjJcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIk9cIjogW1wiT3h5Z2VuXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJPRkZcIjogW1wiT2ZmaWNlIFN1cHBsaWVzXCIsIFwidXRpbGl0eVwiXSxcbiAgICBcIk9MRlwiOiBbXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIk9TXCI6IFtcIk9wZXJhdGluZyBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIk9WRVwiOiBbXCJCYXNpYyBPdmVyYWxsc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJQQ0JcIjogW1wiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlBEQVwiOiBbXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJQRVwiOiBbXCJQb2x5LUV0aHlsZW5lXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJQRkVcIjogW1wiUHJlbWl1bSBGZXJ0aWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiUEdcIjogW1wiUG9seW1lciBHcmFudWxhdGVcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIlBJQlwiOiBbXCJQaW5lYmVycmllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlBLXCI6IFtcIlBhaW5raWxsZXJzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJQT1dcIjogW1wiUG93ZXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiUFBBXCI6IFtcIlByb3RlaW4gUGFzdGVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJQU0hcIjogW1wiUHJlc3N1cmUgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiUFNMXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJQU01cIjogW1wiUG9seW1lciBTaGVldCBUeXBlIE1cIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIlBTU1wiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiUFRcIjogW1wiUG93ZXIgVG9vbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiUFdPXCI6IFtcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIlFDUlwiOiBbXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJSQURcIjogW1wiUmFkaW8gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiUkFHXCI6IFtcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJSQU1cIjogW1wiTWVtb3J5IEJhbmtcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiUkFUXCI6IFtcIkJhc2ljIFJhdGlvbnNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiUkJIXCI6IFtcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIlJDT1wiOiBbXCJSYXcgQ290dG9uIEZpYmVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiUkNTXCI6IFtcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJSQ1RcIjogW1wiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJSREVcIjogW1wiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJSRExcIjogW1wiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiUkRTXCI6IFtcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIlJFQVwiOiBbXCJDaGVtaWNhbCBSZWFnZW50c1wiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIlJFRFwiOiBbXCJSZXNjdWUgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJSRVBcIjogW1wiUmVwYWlyIEtpdFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiUkdcIjogW1wiUmVpbmZvcmNlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJSR09cIjogW1wiUmVkIEdvbGRcIiwgXCJhbGxveXNcIl0sXG4gICAgXCJSSFBcIjogW1wiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIlJPTVwiOiBbXCJOb24tVm9sYXRpbGUgTWVtb3J5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlJTRVwiOiBbXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIlJTSFwiOiBbXCJSYWRpYXRpb24gU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiUlNJXCI6IFtcIlJhdyBTaWxrIFN0cmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJSVEFcIjogW1wiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiU1wiOiBbXCJTdWxmdXJcIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIlNBXCI6IFtcIlNlYXJjaCBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiU0FMXCI6IFtcIlNvcnRpbmcgQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIlNBUlwiOiBbXCJTZW5zb3IgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJTQ1wiOiBbXCJTdGVtIENlbGwgVHJlYXRtZW50XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJTQ0JcIjogW1wiU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIlNDTlwiOiBbXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiU0NSXCI6IFtcIlN1bGZ1ciBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiU0RSXCI6IFtcIlN1cmdpY2FsIERyb25lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiU0VBXCI6IFtcIlBvbHktU3VsZml0ZSBTZWFsYW50XCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIlNFTlwiOiBbXCJTZW5zb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiU0VRXCI6IFtcIlN1cmdpY2FsIEVxdWlwbWVudFwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiU0ZcIjogW1wiU1RMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcbiAgICBcIlNGRVwiOiBbXCJTbWFsbCBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIlNGS1wiOiBbXCJTbWFsbCBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIlNGTFwiOiBbXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIlNJXCI6IFtcIlNpbGljb25cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJTSUxcIjogW1wiU2lsa2VuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiU0lPXCI6IFtcIlNpbGljb24gT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIlNOTVwiOiBbXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcbiAgICBcIlNPSVwiOiBbXCJBcnRpZmljaWFsIFNvaWxcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJTT0xcIjogW1wiU29sYXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiU1BcIjogW1wiU29sYXIgUGFuZWxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIlNSRFwiOiBbXCJTaGlwLVJlcGFpciBEcm9uZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIlNSUFwiOiBbXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIlNTQ1wiOiBbXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIlNTTFwiOiBbXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIlNUTFwiOiBbXCJTdGVlbFwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIlNUUlwiOiBbXCJNZWRpY2FsIFN0cmV0Y2hlclwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiU1RTXCI6IFtcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIlNVXCI6IFtcIlN1cmdlcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIlNVRFwiOiBbXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJTVU5cIjogW1wiU2FmZXR5IFVuaWZvcm1cIiwgXCJ1dGlsaXR5XCJdLFxuICAgIFwiU1dGXCI6IFtcIlNtYWxsIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJUQVwiOiBbXCJUYW50YWx1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiVEFDXCI6IFtcIlRhcmdldGluZyBDb21wdXRlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIlRBSVwiOiBbXCJUYW50YWxpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiVENcIjogW1wiVGVjaG5ldGl1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiVENCXCI6IFtcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIlRDTFwiOiBbXCJUQ0wgQWNpZFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIlRDT1wiOiBbXCJUZWNobmV0aXVtIE94aWRlXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJUQ1NcIjogW1wiU3RhYmlsaXplZCBUZWNobmV0aXVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiVENVXCI6IFtcIlRyYXVtYSBDYXJlIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJUSEZcIjogW1wiVGhlcm1vRmx1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJUSFBcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIlRJXCI6IFtcIlRpdGFuaXVtXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiVElPXCI6IFtcIlRpdGFuaXVtIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJUS1wiOiBbXCJUZWNobm9LZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJUUFVcIjogW1wiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJUUkFcIjogW1wiQXVkaW8gVHJhbnNtaXR0ZXJcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiVFJOXCI6IFtcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIlRSVVwiOiBbXCJUcnVzc1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIlRTXCI6IFtcIlRlY3Rvc2lsaXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIlRTSFwiOiBbXCJUaGVybWFsIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIlRVQlwiOiBbXCJUZXN0IFR1YmVzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJVVFNcIjogW1wiVW5pdmVyc2FsIFRvb2xzZXRcIiwgXCJ1dGlsaXR5XCJdLFxuICAgIFwiVkNCXCI6IFtcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJWRUdcIjogW1wiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlZHXCI6IFtcIlZpdGFHZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIlZJVFwiOiBbXCJWaXRhIEVzc2VuY2VcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJWU0NcIjogW1wiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiV1wiOiBbXCJUdW5nc3RlblwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIldBSVwiOiBbXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcbiAgICBcIldBTFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiV0NCXCI6IFtcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiV0lOXCI6IFtcIlNtYXJ0IFppbmZhbmRlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiV01cIjogW1wiV2luZG93IE1hbmFnZXJcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiV09SXCI6IFtcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiV1JcIjogW1wiV2F0ZXIgUmVjbGFpbWVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiV1NcIjogW1wiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiWklSXCI6IFtcIlppcmNvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiWlJcIjogW1wiWmlyY29uaXVtXCIsIFwiZWxlbWVudHNcIl0sXG59O1xuZXhwb3J0IGNvbnN0IE1hdGVyaWFscyA9IHtcbiAgICBcIkFudGVubmEgQXJyYXlcIjogW1wiQUFSXCIsIDAuNzgsIDAuNV0sXG4gICAgXCJBZHZhbmNlZCBCdWxraGVhZFwiOiBbXCJBQkhcIiwgMC42LCAwLjldLFxuICAgIFwiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCI6IFtcIkFDU1wiLCAwLjMsIDAuMl0sXG4gICAgXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIkFERVwiLCAwLjQsIDEuNV0sXG4gICAgXCJBdXRvLURvY1wiOiBbXCJBRFJcIiwgMC4xLCAwLjFdLFxuICAgIFwiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiOiBbXCJBRFNcIiwgMC43LCAyXSxcbiAgICBcIkFlcm9zdGF0IEZvdW5kYXRpb25cIjogW1wiQUVGXCIsIDIsIDVdLFxuICAgIFwiQWR2YW5jZWQgU1RMIEVuZ2luZVwiOiBbXCJBRU5cIiwgMTQsIDddLFxuICAgIFwiQWR2YW5jZWQgRnVlbCBQdW1wXCI6IFtcIkFGUFwiLCAxLCAwLjI1XSxcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUm9kXCI6IFtcIkFGUlwiLCAwLjQsIDAuMV0sXG4gICAgXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIjogW1wiQUdTXCIsIDMwLCA1XSxcbiAgICBcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIjogW1wiQUhQXCIsIDIwLCAxMF0sXG4gICAgXCJBaXIgU2NydWJiZXJcIjogW1wiQUlSXCIsIDEuNywgM10sXG4gICAgXCJBbHVtaW5pdW1cIjogW1wiQUxcIiwgMi43LCAxXSxcbiAgICBcIlN0ZWxsYXIgUGFsZSBBbGVcIjogW1wiQUxFXCIsIDAuMSwgMC4xXSxcbiAgICBcIlByb3RlaW4tUmljaCBBbGdhZVwiOiBbXCJBTEdcIiwgMC43LCAxXSxcbiAgICBcIkFsdW1pbml1bSBPcmVcIjogW1wiQUxPXCIsIDEuMzUsIDFdLFxuICAgIFwiQW1tb25pYVwiOiBbXCJBTU1cIiwgMC44NiwgMV0sXG4gICAgXCJBZHZhbmNlZCBOb3p6bGVcIjogW1wiQU5aXCIsIDYsIDNdLFxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQVBUXCIsIDAuMDMsIDAuM10sXG4gICAgXCJBcmdvblwiOiBbXCJBUlwiLCAxLjc4NCwgMV0sXG4gICAgXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJBUlBcIiwgMC4wNCwgMC4yXSxcbiAgICBcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQVNFXCIsIDAuNSwgMC42XSxcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIjogW1wiQVNUXCIsIDQuOTgsIDFdLFxuICAgIFwiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQVRBXCIsIDAuMywgMC40XSxcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJBVFBcIiwgMi45LCAxXSxcbiAgICBcIkdvbGRcIjogW1wiQVVcIiwgMTkuMzIsIDFdLFxuICAgIFwiR29sZCBPcmVcIjogW1wiQVVPXCIsIDMuODYsIDFdLFxuICAgIFwiQWN0aXZlIFdhdGVyIEZpbHRlclwiOiBbXCJBV0ZcIiwgMC44LCAxLjJdLFxuICAgIFwiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQVdIXCIsIDAuMTIsIDFdLFxuICAgIFwiSGVscGZ1bCBCYWN0ZXJpYVwiOiBbXCJCQUNcIiwgMC4xNSwgMC4xNV0sXG4gICAgXCJCYXNpYyBBSSBGcmFtZXdvcmtcIjogW1wiQkFJXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkJhc2ljIEJ1bGtoZWFkXCI6IFtcIkJCSFwiLCAwLjUsIDAuOF0sXG4gICAgXCJCdWRnZXQgQ29ubmVjdG9yc1wiOiBbXCJCQ09cIiwgMC4wMDUsIDAuMDAyXSxcbiAgICBcIkJhc2ljIERlY2sgRWxlbWVudHNcIjogW1wiQkRFXCIsIDAuMSwgMS41XSxcbiAgICBcIkJlcnlsbGl1bVwiOiBbXCJCRVwiLCAxLjg0LCAxXSxcbiAgICBcIlByb3RlaW4tUmljaCBCZWFuc1wiOiBbXCJCRUFcIiwgMC44LCAxXSxcbiAgICBcIkJlcnlsIENyeXN0YWxzXCI6IFtcIkJFUlwiLCAxLjkyLCAxXSxcbiAgICBcIkJhc2ljIEZ1ZWwgUHVtcFwiOiBbXCJCRlBcIiwgMC44LCAwLjJdLFxuICAgIFwiQmFzaWMgRnVlbCBSb2RcIjogW1wiQkZSXCIsIDAuMywgMC4xXSxcbiAgICBcIlNoaWVsZGVkIENvbm5lY3RvcnNcIjogW1wiQkdDXCIsIDAuMDEsIDAuMDAyXSxcbiAgICBcIkJsdWUgR29sZFwiOiBbXCJCR09cIiwgMTkuMzIsIDFdLFxuICAgIFwiQmFzaWMgSGlnaC1HIFNlYXRzXCI6IFtcIkJHU1wiLCAyMCwgM10sXG4gICAgXCJCYXNpYyBIdWxsIFBsYXRlXCI6IFtcIkJIUFwiLCAxMCwgMTBdLFxuICAgIFwiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiOiBbXCJCSURcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJCcmVhdGhhYmxlIExpcXVpZFwiOiBbXCJCTFwiLCAxLjEyLCAxXSxcbiAgICBcIkRlc2F0dXJhdGlvbiBBZ2VudFwiOiBbXCJCTEVcIiwgMC41LCAwLjVdLFxuICAgIFwiQmFzaWMgTWFpbmZyYW1lXCI6IFtcIkJNRlwiLCAwLjgsIDEuMl0sXG4gICAgXCJCYW5kYWdlc1wiOiBbXCJCTkRcIiwgMC4wMDEsIDAuMDA1XSxcbiAgICBcIkJvcm9uIENyeXN0YWxzXCI6IFtcIkJPUlwiLCAxLjgsIDFdLFxuICAgIFwiQm9yb3NpbGljYXRlXCI6IFtcIkJPU1wiLCAxLjUsIDFdLFxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQlBUXCIsIDAuMDIsIDAuM10sXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzFcIjogW1wiQlIxXCIsIDE4MCwgMzAwXSxcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMlwiOiBbXCJCUjJcIiwgMjgwLCA0MDBdLFxuICAgIFwiQmlvcmVhY3RpdmUgTWluZXJhbHNcIjogW1wiQlJNXCIsIDIuNSwgMV0sXG4gICAgXCJCcm9uemVcIjogW1wiQlJPXCIsIDguNzMsIDFdLFxuICAgIFwiQmFzaWMgQW50aS1yYWQgUGxhdGVcIjogW1wiQlJQXCIsIDAuMDMsIDAuMl0sXG4gICAgXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiOiBbXCJCUlNcIiwgMTUwLCAyMDBdLFxuICAgIFwiQm9keSBTY2FubmVyXCI6IFtcIkJTQ1wiLCAwLjEsIDAuMV0sXG4gICAgXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkJTRVwiLCAwLjMsIDAuNV0sXG4gICAgXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJCVEFcIiwgMC4zLCAwLjRdLFxuICAgIFwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCI6IFtcIkJUU1wiLCAxLjA1LCAxXSxcbiAgICBcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkJXSFwiLCAwLjEsIDFdLFxuICAgIFwiQmFzaWMgV29ya3N0YXRpb25cIjogW1wiQldTXCIsIDAuMDUsIDAuMV0sXG4gICAgXCJDYXJib25cIjogW1wiQ1wiLCAyLjI1LCAxXSxcbiAgICBcIkNhbGNpdW1cIjogW1wiQ0FcIiwgMS41NCwgMV0sXG4gICAgXCJDYWZmZWluYXRlZCBCZWFuc1wiOiBbXCJDQUZcIiwgMC44NiwgMV0sXG4gICAgXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIjogW1wiQ0FQXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQkxcIiwgNS40LCAyLjRdLFxuICAgIFwiTWVkaXVtIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTVwiLCAzLjYsIDEuNl0sXG4gICAgXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQlNcIiwgMS44LCAwLjhdLFxuICAgIFwiQ2xpbWF0ZSBDb250cm9sbGVyXCI6IFtcIkNDXCIsIDAuNSwgMV0sXG4gICAgXCJDcm93ZCBDb250cm9sIERyb25lXCI6IFtcIkNDRFwiLCAwLjMsIDAuMDVdLFxuICAgIFwiQ2FwYWNpdGl2ZSBEaXNwbGF5XCI6IFtcIkNEXCIsIDAuMDA0LCAwLjAwMl0sXG4gICAgXCJDZXJhbWljIEZhYnJpY1wiOiBbXCJDRlwiLCAyLjgyLCAxXSxcbiAgICBcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJDSEFcIiwgMS4yLCAwLjddLFxuICAgIFwiQ2hsb3JpbmVcIjogW1wiQ0xcIiwgMy4yLCAxXSxcbiAgICBcIkNhbGljaGUgUm9ja1wiOiBbXCJDTElcIiwgMi40MiwgMV0sXG4gICAgXCJcIjogW1wiQ01LXCIsIDQuNTYsIDMzLjJdLFxuICAgIFwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIjogW1wiQ09GXCIsIDAuMSwgMC4xXSxcbiAgICBcIkNvbW11bmljYXRpb24gU3lzdGVtXCI6IFtcIkNPTVwiLCAwLjUsIDEuNV0sXG4gICAgXCJDb3R0b24gRmFicmljXCI6IFtcIkNPVFwiLCAwLjc3LCAxXSxcbiAgICBcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiOiBbXCJDUUxcIiwgNzUsIDE1MF0sXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCI6IFtcIkNRTVwiLCA1MCwgMTAwXSxcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiOiBbXCJDUVNcIiwgMjUsIDUwXSxcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCI6IFtcIkNRVFwiLCAxMi41LCAyNV0sXG4gICAgXCJDcnlvZ2VuaWMgVW5pdFwiOiBbXCJDUlVcIiwgMi4yLCAyXSxcbiAgICBcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCI6IFtcIkNTVFwiLCAxLjE0LCAxXSxcbiAgICBcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCI6IFtcIkNURlwiLCA0LjMyLCAxXSxcbiAgICBcIkNvcHBlclwiOiBbXCJDVVwiLCA4LjkyLCAxXSxcbiAgICBcIkNvcHBlciBPcmVcIjogW1wiQ1VPXCIsIDQuMDEsIDFdLFxuICAgIFwiRGF0YSBBbmFseXplclwiOiBbXCJEQVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJEcm9uZSBDaGFzc2lzXCI6IFtcIkRDSFwiLCAwLjIsIDAuMDNdLFxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTFwiOiBbXCJEQ0xcIiwgMC4wOCwgMC44XSxcbiAgICBcIkR1cmFibGUgQ2FzaW5nIE1cIjogW1wiRENNXCIsIDAuMDQsIDAuNF0sXG4gICAgXCJEdXJhYmxlIENhc2luZyBTXCI6IFtcIkRDU1wiLCAwLjAxLCAwLjFdLFxuICAgIFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIjogW1wiRERcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiRERUIFBsYW50IEFnZW50XCI6IFtcIkREVFwiLCAwLjExLCAwLjFdLFxuICAgIFwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiOiBbXCJERUNcIiwgMC41LCAyXSxcbiAgICBcIkluZm9ybWF0aW9uIERpc3BsYXlcIjogW1wiRElTXCIsIDAuMDIsIDAuMDJdLFxuICAgIFwiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIkRPVVwiLCA1LCA0XSxcbiAgICBcIkRyb25lIEZyYW1lXCI6IFtcIkRSRlwiLCAwLjEsIDAuMDJdLFxuICAgIFwiRGF0YSBWaXN1YWxpemVyXCI6IFtcIkRWXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkRyaW5raW5nIFdhdGVyXCI6IFtcIkRXXCIsIDAuMSwgMC4xXSxcbiAgICBcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCI6IFtcIkVEQ1wiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiOiBbXCJFRVNcIiwgOS4yLCAxXSxcbiAgICBcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIjogW1wiRU5HXCIsIDgsIDRdLFxuICAgIFwiRXBveHkgUmVzaW5cIjogW1wiRVBPXCIsIDAuMDQsIDAuMDJdLFxuICAgIFwiRWluc3RlaW5pdW1cIjogW1wiRVNcIiwgMC44OCwgMC4xXSxcbiAgICBcIkVucmljaGVkIFRlY2huZXRpdW1cIjogW1wiRVRDXCIsIDQuMSwgMV0sXG4gICAgXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIjogW1wiRVhPXCIsIDAuMSwgMC4wNV0sXG4gICAgXCJGbHVvcmluZVwiOiBbXCJGXCIsIDEuNjk2LCAxXSxcbiAgICBcIkZlcnJvbWluaXVtXCI6IFtcIkZBTFwiLCAzLjIyLCAxXSxcbiAgICBcIkFjdGl2ZSBDb29saW5nIERldmljZVwiOiBbXCJGQU5cIiwgMC4xLCAwLjFdLFxuICAgIFwiRmxvdyBDb250cm9sIERldmljZVwiOiBbXCJGQ1wiLCAwLjUsIDAuMjVdLFxuICAgIFwiSXJvblwiOiBbXCJGRVwiLCA3Ljg3NCwgMV0sXG4gICAgXCJJcm9uIE9yZVwiOiBbXCJGRU9cIiwgNS45LCAxXSxcbiAgICBcIkZlcnJvLVRpdGFuaXVtXCI6IFtcIkZFVFwiLCA2Ljg1LCAxXSxcbiAgICBcIkZUTCBGdWVsXCI6IFtcIkZGXCIsIDAuMDUsIDAuMDFdLFxuICAgIFwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIjogW1wiRkZDXCIsIDUwLCAxNl0sXG4gICAgXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiOiBbXCJGSU1cIiwgMC41NSwgMC41XSxcbiAgICBcIkZpc3Npb24gUmVhY3RvclwiOiBbXCJGSVJcIiwgNywgNC45XSxcbiAgICBcIkZsb2F0aW5nIFRhbmtcIjogW1wiRkxPXCIsIDEsIDJdLFxuICAgIFwiRmx1aWQgUGlwaW5nXCI6IFtcIkZMUFwiLCAwLjMsIDJdLFxuICAgIFwiRmx1eFwiOiBbXCJGTFhcIiwgMC4yNSwgMC4xXSxcbiAgICBcIkFsbC1QdXJwb3NlIEZvZGRlclwiOiBbXCJGT0RcIiwgMS4yLCAxXSxcbiAgICBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIjogW1wiRlNFXCIsIDYsIDNdLFxuICAgIFwiRW50ZXJ0YWlubWVudCBVbml0XCI6IFtcIkZVTlwiLCA1LCA0XSxcbiAgICBcIkdhbGVyaXRlIFJvY2tcIjogW1wiR0FMXCIsIDIuNTEsIDFdLFxuICAgIFwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiOiBbXCJHQ1wiLCAwLjA1LCAwLjFdLFxuICAgIFwiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkdDSFwiLCAxLCAwLjZdLFxuICAgIFwiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiOiBbXCJHRU5cIiwgNSwgM10sXG4gICAgXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiOiBbXCJHSU5cIiwgMC4xLCAwLjFdLFxuICAgIFwiR2xhc3NcIjogW1wiR0xcIiwgMC4wMTYsIDAuMDFdLFxuICAgIFwiR2xhc3MgTm96emxlXCI6IFtcIkdOWlwiLCAxLjUsIDFdLFxuICAgIFwiV2luZS1RdWFsaXR5IEdyYXBlc1wiOiBbXCJHUkFcIiwgMS4xLCAxXSxcbiAgICBcIkhpZ2gtQ2FyYiBHcmFpbnNcIjogW1wiR1JOXCIsIDAuOSwgMV0sXG4gICAgXCJHYXMgVmVudFwiOiBbXCJHVlwiLCAwLjI1LCAwLjE1XSxcbiAgICBcIkh5ZHJvZ2VuXCI6IFtcIkhcIiwgMC4wNywgMV0sXG4gICAgXCJXYXRlclwiOiBbXCJIMk9cIiwgMC4yLCAwLjJdLFxuICAgIFwiSGFiaXRhdCBVbml0XCI6IFtcIkhBQlwiLCAxMCwgOF0sXG4gICAgXCJIYWxpdGUgQ3J5c3RhbHNcIjogW1wiSEFMXCIsIDIuMTcsIDFdLFxuICAgIFwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCI6IFtcIkhDQ1wiLCAwLjAxLCAwLjAwMl0sXG4gICAgXCJIeWRyb2NhcmJvbiBQbGFudHNcIjogW1wiSENQXCIsIDAuOCwgMV0sXG4gICAgXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCI6IFtcIkhEXCIsIDAuMDUsIDJdLFxuICAgIFwiSGVsaXVtXCI6IFtcIkhFXCIsIDAuMTQ1LCAxXSxcbiAgICBcIkhlbGl1bS0zIElzb3RvcGVcIjogW1wiSEUzXCIsIDAuMTQ1LCAxXSxcbiAgICBcIlNwaWN5IEhlcmJzXCI6IFtcIkhFUlwiLCAwLjQsIDFdLFxuICAgIFwiSGVsaW90cm9wZSBFeHRyYWN0XCI6IFtcIkhFWFwiLCAxLjEsIDFdLFxuICAgIFwiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiOiBbXCJISFBcIiwgMTUsIDEwXSxcbiAgICBcIkhhek1hdCBXb3JrIFN1aXRcIjogW1wiSE1TXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiSHlwZXJ0aHJ1c3QgTm96emxlXCI6IFtcIkhOWlwiLCA2LCAxMl0sXG4gICAgXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCI6IFtcIkhPR1wiLCAwLjAxLCAwLjAxXSxcbiAgICBcIkZsb3dlcnkgSG9wc1wiOiBbXCJIT1BcIiwgMC4zNSwgMV0sXG4gICAgXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCI6IFtcIkhQQ1wiLCAwLjAwMywgMC4wMDNdLFxuICAgIFwiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiOiBbXCJIUFJcIiwgMTgsIDE1XSxcbiAgICBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiSFNFXCIsIDMuMSwgMC43XSxcbiAgICBcIlNtYXJ0IFNwYWNlIFN1aXRcIjogW1wiSFNTXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiOiBbXCJIVEVcIiwgMjAsIDEwXSxcbiAgICBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIjogW1wiSFlSXCIsIDM1LCAyNV0sXG4gICAgXCJJb2RpbmVcIjogW1wiSVwiLCA0LjkzLCAxXSxcbiAgICBcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiOiBbXCJJRENcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIjogW1wiSU1NXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkluZGlnbyBDb2xvcmFudFwiOiBbXCJJTkRcIiwgMC4yMSwgMC4yXSxcbiAgICBcIkluc3VGb2FtXCI6IFtcIklOU1wiLCAwLjA2LCAwLjFdLFxuICAgIFwiU2VkYXRpdmUgU3Vic3RhbmNlXCI6IFtcIkpVSVwiLCAxLjIsIDFdLFxuICAgIFwiS29tYnVjaGFcIjogW1wiS09NXCIsIDAuMSwgMC4xXSxcbiAgICBcIktldmxhciBGYWJyaWNcIjogW1wiS1ZcIiwgMS42NSwgMV0sXG4gICAgXCJMaWdodHdlaWdodCBCdWxraGVhZFwiOiBbXCJMQkhcIiwgMC4yLCAwLjZdLFxuICAgIFwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIjogW1wiTENcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCI6IFtcIkxDQlwiLCAyMDAsIDIwMF0sXG4gICAgXCJMaXF1aWQgQ3J5c3RhbHNcIjogW1wiTENSXCIsIDAuMTUsIDAuMV0sXG4gICAgXCJMb2NhbCBEYXRhYmFzZVwiOiBbXCJMRFwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCI6IFtcIkxERVwiLCAwLjEsIDEuMl0sXG4gICAgXCJMYXNlciBEaW9kZXNcIjogW1wiTERJXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJMaXF1aWQgRWluc3RlaW5pdW1cIjogW1wiTEVTXCIsIDguODQsIDFdLFxuICAgIFwiTGFyZ2UgRlRMIEVtaXR0ZXJcIjogW1wiTEZFXCIsIDAuNCwgMS42XSxcbiAgICBcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxGTFwiLCA2MCwgMTBdLFxuICAgIFwiTG93LWhlYXQgRnVlbCBQdW1wXCI6IFtcIkxGUFwiLCAwLjUsIDAuMV0sXG4gICAgXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCI6IFtcIkxIUFwiLCA1LCAxMF0sXG4gICAgXCJMaXRoaXVtXCI6IFtcIkxJXCIsIDAuNTUsIDFdLFxuICAgIFwiTGl0aGl1bSBPcmVcIjogW1wiTElPXCIsIDIuNzUsIDFdLFxuICAgIFwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJMSVNcIiwgNS42LCA3XSxcbiAgICBcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCI6IFtcIkxJVFwiLCAxLCAyXSxcbiAgICBcIkxvZ2lzdGljcyBTeXN0ZW1cIjogW1wiTE9HXCIsIDAuNSwgMS41XSxcbiAgICBcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiTFNFXCIsIDAuMywgMS4yXSxcbiAgICBcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxTTFwiLCAxMjUsIDEwMF0sXG4gICAgXCJMaW1lc3RvbmVcIjogW1wiTFNUXCIsIDIuNzMsIDFdLFxuICAgIFwiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiTFRBXCIsIDAuMywgMC41XSxcbiAgICBcIkxhYm9yYXRvcnkgVW5pdFwiOiBbXCJMVVwiLCA4LCA2XSxcbiAgICBcIk1hZ25ldGl0ZVwiOiBbXCJNQUdcIiwgNS4xNSwgMV0sXG4gICAgXCJIaWdoLUNhcmIgTWFpemVcIjogW1wiTUFJXCIsIDEuMywgMV0sXG4gICAgXCJNb3RoZXJib2FyZFwiOiBbXCJNQlwiLCAwLjA3NSwgMC4wNzVdLFxuICAgIFwiTWVkaXVtIENhcmdvIEJheSBLaXRcIjogW1wiTUNCXCIsIDEwMCwgMTAwXSxcbiAgICBcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiOiBbXCJNQ0dcIiwgMC4yNCwgMC4xXSxcbiAgICBcIlF1YWxpdHkgTWVhdCBNZWFsXCI6IFtcIk1FQVwiLCAwLjYsIDAuNV0sXG4gICAgXCJCYXNpYyBNZWRpY2FsIEtpdFwiOiBbXCJNRURcIiwgMC4zLCAwLjFdLFxuICAgIFwiTWVkaXVtIEZUTCBFbWl0dGVyXCI6IFtcIk1GRVwiLCAwLjIsIDAuOF0sXG4gICAgXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCI6IFtcIk1GS1wiLCAwLjEsIDAuMDVdLFxuICAgIFwiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1GTFwiLCAyNCwgNF0sXG4gICAgXCJNYWduZXNpdW1cIjogW1wiTUdcIiwgMC4yNywgMC4xNl0sXG4gICAgXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIjogW1wiTUdDXCIsIDAuNiwgMC45XSxcbiAgICBcIk1hZ25lc2l0ZVwiOiBbXCJNR1NcIiwgMS43MywgMV0sXG4gICAgXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCI6IFtcIk1ITFwiLCAwLjEsIDAuMDVdLFxuICAgIFwiTWljcm8gSGVhZHBob25lc1wiOiBbXCJNSFBcIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCI6IFtcIk1MSVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJNaWNyby1Qcm9jZXNzb3JcIjogW1wiTVBDXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTVNMXCIsIDUwLCA1MF0sXG4gICAgXCJNZWdhVHViZSBDb2F0aW5nXCI6IFtcIk1UQ1wiLCAwLjAzMiwgMC4wMV0sXG4gICAgXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCI6IFtcIk1UUFwiLCAwLjcsIDFdLFxuICAgIFwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiOiBbXCJNVVNcIiwgMC44LCAxXSxcbiAgICBcIk1lZGl1bSBXYWZlclwiOiBbXCJNV0ZcIiwgMC4wMDgsIDAuMDA4XSxcbiAgICBcIk5pdHJvZ2VuXCI6IFtcIk5cIiwgMC44MDcsIDFdLFxuICAgIFwiU29kaXVtXCI6IFtcIk5BXCIsIDAuOTcsIDFdLFxuICAgIFwiU29kaXVtIEJvcm9oeWRyaWRlXCI6IFtcIk5BQlwiLCAwLjEsIDAuMDVdLFxuICAgIFwiTmFuby1DYXJib24gU2hlZXRpbmdcIjogW1wiTkNTXCIsIDAuMDI4LCAwLjAxXSxcbiAgICBcIk5lb25cIjogW1wiTkVcIiwgMC45LCAxXSxcbiAgICBcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCI6IFtcIk5GXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIk5hbm8gRmliZXJcIjogW1wiTkZJXCIsIDAuMDMyLCAwLjAxXSxcbiAgICBcIk5hbm8tQ29hdGVkIEdsYXNzXCI6IFtcIk5HXCIsIDAuMDIyLCAwLjAxXSxcbiAgICBcIk55bG9uIEZhYnJpY1wiOiBbXCJOTFwiLCAxLjEzLCAxXSxcbiAgICBcIk5ldXJhbCBOZXR3b3JrXCI6IFtcIk5OXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkJhc2ljIE5venpsZVwiOiBbXCJOT1pcIiwgMywgMS41XSxcbiAgICBcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIjogW1wiTlJcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJOdXRyaWVudCBTb2x1dGlvblwiOiBbXCJOU1wiLCAwLjYsIDAuNV0sXG4gICAgXCJOZXVyb1N0aW11bGFudHNcIjogW1wiTlNUXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiVHJpZ2x5Y2VyaWRlIE51dHNcIjogW1wiTlVUXCIsIDAuOSwgMV0sXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIjogW1wiTlYxXCIsIDQuMiwgMl0sXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIjogW1wiTlYyXCIsIDYuNywgM10sXG4gICAgXCJPeHlnZW5cIjogW1wiT1wiLCAxLjE0MSwgMV0sXG4gICAgXCJPZmZpY2UgU3VwcGxpZXNcIjogW1wiT0ZGXCIsIDAuMDIsIDAuMl0sXG4gICAgXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiOiBbXCJPTEZcIiwgMC4wMSwgMC4wMDFdLFxuICAgIFwiT3BlcmF0aW5nIFN5c3RlbVwiOiBbXCJPU1wiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJCYXNpYyBPdmVyYWxsc1wiOiBbXCJPVkVcIiwgMC4wMiwgMC4wMjVdLFxuICAgIFwiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCI6IFtcIlBDQlwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCI6IFtcIlBEQVwiLCAwLjAwMiwgMC4wMDJdLFxuICAgIFwiUG9seS1FdGh5bGVuZVwiOiBbXCJQRVwiLCAwLjAxLCAwLjAxXSxcbiAgICBcIlByZW1pdW0gRmVydGlsaXplclwiOiBbXCJQRkVcIiwgMC45LCAxXSxcbiAgICBcIlBvbHltZXIgR3JhbnVsYXRlXCI6IFtcIlBHXCIsIDAuMDAyLCAwLjAwMV0sXG4gICAgXCJQaW5lYmVycmllc1wiOiBbXCJQSUJcIiwgMC4zLCAxXSxcbiAgICBcIlBhaW5raWxsZXJzXCI6IFtcIlBLXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJQb3dlciBDZWxsXCI6IFtcIlBPV1wiLCAwLjA1LCAwLjFdLFxuICAgIFwiUHJvdGVpbiBQYXN0ZVwiOiBbXCJQUEFcIiwgMiwgMV0sXG4gICAgXCJQcmVzc3VyZSBTaGllbGRpbmdcIjogW1wiUFNIXCIsIDQuMiwgMC44XSxcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCI6IFtcIlBTTFwiLCAwLjA4LCAwLjhdLFxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIE1cIjogW1wiUFNNXCIsIDAuMDQsIDAuNF0sXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiOiBbXCJQU1NcIiwgMC4wMSwgMC4xXSxcbiAgICBcIlBvd2VyIFRvb2xzXCI6IFtcIlBUXCIsIDAuMjUsIDAuMl0sXG4gICAgXCJQYWRkZWQgV29yayBPdmVyYWxsXCI6IFtcIlBXT1wiLCAwLjA1LCAwLjA1XSxcbiAgICBcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiOiBbXCJRQ1JcIiwgMTQsIDEwXSxcbiAgICBcIlJhZGlvIERldmljZVwiOiBbXCJSQURcIiwgMC4wMDMsIDAuMDA1XSxcbiAgICBcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIjogW1wiUkFHXCIsIDUsIDMuNF0sXG4gICAgXCJNZW1vcnkgQmFua1wiOiBbXCJSQU1cIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIkJhc2ljIFJhdGlvbnNcIjogW1wiUkFUXCIsIDAuMjEsIDAuMV0sXG4gICAgXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCI6IFtcIlJCSFwiLCAyLjQsIDAuOV0sXG4gICAgXCJSYXcgQ290dG9uIEZpYmVyXCI6IFtcIlJDT1wiLCAwLjk1LCAxXSxcbiAgICBcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIjogW1wiUkNTXCIsIDAuNjcsIDAuNV0sXG4gICAgXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiOiBbXCJSQ1RcIiwgNywgNF0sXG4gICAgXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIjogW1wiUkRFXCIsIDEuNCwgMS41XSxcbiAgICBcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRExcIiwgMTUwLCAzMF0sXG4gICAgXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRTXCIsIDUwLCAxMF0sXG4gICAgXCJDaGVtaWNhbCBSZWFnZW50c1wiOiBbXCJSRUFcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJSZXNjdWUgRHJvbmVcIjogW1wiUkVEXCIsIDAuMywgMC4wNV0sXG4gICAgXCJSZXBhaXIgS2l0XCI6IFtcIlJFUFwiLCAwLjAwNiwgMC4wMDJdLFxuICAgIFwiUmVpbmZvcmNlZCBHbGFzc1wiOiBbXCJSR1wiLCAwLjAzMiwgMC4wMV0sXG4gICAgXCJSZWQgR29sZFwiOiBbXCJSR09cIiwgMTkuMzIsIDFdLFxuICAgIFwiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCI6IFtcIlJIUFwiLCAxMiwgMTBdLFxuICAgIFwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiOiBbXCJST01cIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJSU0VcIiwgMS45LCAwLjddLFxuICAgIFwiUmFkaWF0aW9uIFNoaWVsZGluZ1wiOiBbXCJSU0hcIiwgMy43LCAwLjhdLFxuICAgIFwiUmF3IFNpbGsgU3RyYWluc1wiOiBbXCJSU0lcIiwgMS4xLCAxXSxcbiAgICBcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiUlRBXCIsIDEuNSwgMC41XSxcbiAgICBcIlN1bGZ1clwiOiBbXCJTXCIsIDAuNTIsIDAuMjVdLFxuICAgIFwiU2VhcmNoIEFsZ29yaXRobVwiOiBbXCJTQVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJTb3J0aW5nIEFsZ29yaXRobVwiOiBbXCJTQUxcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiU2Vuc29yIEFycmF5XCI6IFtcIlNBUlwiLCAxLjcsIDJdLFxuICAgIFwiU3RlbSBDZWxsIFRyZWF0bWVudFwiOiBbXCJTQ1wiLCAwLjA0LCAwLjAxXSxcbiAgICBcIlNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiU0NCXCIsIDUwLCA1MF0sXG4gICAgXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIjogW1wiU0NOXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJTdWxmdXIgQ3J5c3RhbHNcIjogW1wiU0NSXCIsIDIuMDUsIDFdLFxuICAgIFwiU3VyZ2ljYWwgRHJvbmVcIjogW1wiU0RSXCIsIDAuMywgMC4wNV0sXG4gICAgXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiOiBbXCJTRUFcIiwgMC4xNSwgMC4wN10sXG4gICAgXCJTZW5zb3JcIjogW1wiU0VOXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJTdXJnaWNhbCBFcXVpcG1lbnRcIjogW1wiU0VRXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIlNUTCBGdWVsXCI6IFtcIlNGXCIsIDAuMDYsIDAuMDZdLFxuICAgIFwiU21hbGwgRlRMIEVtaXR0ZXJcIjogW1wiU0ZFXCIsIDAuMSwgMC40XSxcbiAgICBcIlNtYWxsIEZhc3RlbmVyIEtpdFwiOiBbXCJTRktcIiwgMC4wNCwgMC4wMl0sXG4gICAgXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTRkxcIiwgOSwgMS41XSxcbiAgICBcIlNpbGljb25cIjogW1wiU0lcIiwgMi4zMjksIDFdLFxuICAgIFwiU2lsa2VuIEZhYnJpY1wiOiBbXCJTSUxcIiwgMS4yMSwgMV0sXG4gICAgXCJTaWxpY29uIE9yZVwiOiBbXCJTSU9cIiwgMS43OSwgMV0sXG4gICAgXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCI6IFtcIlNOTVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJBcnRpZmljaWFsIFNvaWxcIjogW1wiU09JXCIsIDAuOSwgMV0sXG4gICAgXCJTb2xhciBDZWxsXCI6IFtcIlNPTFwiLCAwLjAxNSwgMC4wMV0sXG4gICAgXCJTb2xhciBQYW5lbFwiOiBbXCJTUFwiLCAwLjE1LCAwLjFdLFxuICAgIFwiU2hpcC1SZXBhaXIgRHJvbmVcIjogW1wiU1JEXCIsIDAuMywgMC4wNV0sXG4gICAgXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJTUlBcIiwgMC4xLCAwLjJdLFxuICAgIFwiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiOiBbXCJTU0NcIiwgMSwgMV0sXG4gICAgXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTU0xcIiwgMjAsIDIwXSxcbiAgICBcIlN0ZWVsXCI6IFtcIlNUTFwiLCA3Ljg1LCAxXSxcbiAgICBcIk1lZGljYWwgU3RyZXRjaGVyXCI6IFtcIlNUUlwiLCAwLjAxLCAxXSxcbiAgICBcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJTVFNcIiwgMC4xLCAwLjFdLFxuICAgIFwiU3VyZ2VyeSBVbml0XCI6IFtcIlNVXCIsIDYsIDVdLFxuICAgIFwiU3VydmVpbGxhbmNlIERyb25lXCI6IFtcIlNVRFwiLCAwLjMsIDAuMDVdLFxuICAgIFwiU2FmZXR5IFVuaWZvcm1cIjogW1wiU1VOXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiU21hbGwgV2FmZXJcIjogW1wiU1dGXCIsIDAuMDAzLCAwLjAwM10sXG4gICAgXCJUYW50YWx1bVwiOiBbXCJUQVwiLCAxNi42NSwgMV0sXG4gICAgXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIjogW1wiVEFDXCIsIDAuMTUsIDFdLFxuICAgIFwiVGFudGFsaXRlIFJvY2tcIjogW1wiVEFJXCIsIDcuOTQsIDFdLFxuICAgIFwiVGVjaG5ldGl1bVwiOiBbXCJUQ1wiLCAxMS44LCAxXSxcbiAgICBcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiOiBbXCJUQ0JcIiwgMjAsIDIwXSxcbiAgICBcIlRDTCBBY2lkXCI6IFtcIlRDTFwiLCAwLjA5LCAwLjFdLFxuICAgIFwiVGVjaG5ldGl1bSBPeGlkZVwiOiBbXCJUQ09cIiwgOS44LCAxXSxcbiAgICBcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiOiBbXCJUQ1NcIiwgMy40LCAxLjJdLFxuICAgIFwiVHJhdW1hIENhcmUgVW5pdFwiOiBbXCJUQ1VcIiwgNSwgNF0sXG4gICAgXCJUaGVybW9GbHVpZFwiOiBbXCJUSEZcIiwgMC42LCAwLjM1XSxcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJUSFBcIiwgMi4yLCAxXSxcbiAgICBcIlRpdGFuaXVtXCI6IFtcIlRJXCIsIDQuNSwgMV0sXG4gICAgXCJUaXRhbml1bSBPcmVcIjogW1wiVElPXCIsIDEuNTgsIDFdLFxuICAgIFwiVGVjaG5vS2V2bGFyIEZhYnJpY1wiOiBbXCJUS1wiLCAxLjg5LCAxXSxcbiAgICBcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIjogW1wiVFBVXCIsIDAuMDAyLCAwLjAwMl0sXG4gICAgXCJBdWRpbyBUcmFuc21pdHRlclwiOiBbXCJUUkFcIiwgMC4wMDUsIDAuMDAyXSxcbiAgICBcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIjogW1wiVFJOXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJUcnVzc1wiOiBbXCJUUlVcIiwgMC4xLCAxLjVdLFxuICAgIFwiVGVjdG9zaWxpc2l0ZVwiOiBbXCJUU1wiLCAyLjQsIDFdLFxuICAgIFwiVGhlcm1hbCBTaGllbGRpbmdcIjogW1wiVFNIXCIsIDIuNCwgMS41XSxcbiAgICBcIlRlc3QgVHViZXNcIjogW1wiVFVCXCIsIDAuMDAyLCAwLjAwMl0sXG4gICAgXCJVbml2ZXJzYWwgVG9vbHNldFwiOiBbXCJVVFNcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCI6IFtcIlZDQlwiLCAyMDAsIDIwMF0sXG4gICAgXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCI6IFtcIlZFR1wiLCAxLjEsIDFdLFxuICAgIFwiVml0YUdlbFwiOiBbXCJWR1wiLCAwLjIxLCAwLjFdLFxuICAgIFwiVml0YSBFc3NlbmNlXCI6IFtcIlZJVFwiLCAwLjksIDFdLFxuICAgIFwiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlZTQ1wiLCAzNSwgMzVdLFxuICAgIFwiVHVuZ3N0ZW5cIjogW1wiV1wiLCA3LjUxOSwgMV0sXG4gICAgXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCI6IFtcIldBSVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCI6IFtcIldBTFwiLCA2LjI1LCAxXSxcbiAgICBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCI6IFtcIldDQlwiLCAyMDAsIDIwMF0sXG4gICAgXCJTbWFydCBaaW5mYW5kZWxcIjogW1wiV0lOXCIsIDAuMSwgMC4xXSxcbiAgICBcIldpbmRvdyBNYW5hZ2VyXCI6IFtcIldNXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCI6IFtcIldPUlwiLCA1LCA1XSxcbiAgICBcIldhdGVyIFJlY2xhaW1lclwiOiBbXCJXUlwiLCA2LjQsIDVdLFxuICAgIFwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIjogW1wiV1NcIiwgMC4wNSwgMC41XSxcbiAgICBcIlppcmNvbiBDcnlzdGFsc1wiOiBbXCJaSVJcIiwgNC44NSwgMV0sXG4gICAgXCJaaXJjb25pdW1cIjogW1wiWlJcIiwgNi41MywgMV0sXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2FtZVByb3BlcnRpZXMudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFByaWNlcyhwcmljZXMsIHdlYmFwcElEKSB7XG4gICAgaWYgKCF3ZWJhcHBJRCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFdlYiBBcHAgVGltZW91dFwiKTtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIFByaWNlcyBmcm9tIFdlYiBBcHBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByaWNlRGF0YSk7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1trZXldID0gcHJpY2VEYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gV2ViIEFwcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMnByaWNlJTIyXCIsIHRydWUpO1xuICAgIHhoci5zZW5kKG51bGwpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDWFByaWNlcyhjeFByaWNlcykge1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IENYIFByaWNlIFRpbWVvdXRcIik7XG4gICAgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBDWCBQcmljZXNcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FudGVkUmVzdWx0cyA9IFtcIkFza1ByaWNlXCIsIFwiQmlkUHJpY2VcIiwgXCJBdmVyYWdlXCIsIFwiQXNrQXZhaWxcIiwgXCJCaWRBdmFpbFwiXTtcbiAgICAgICAgICAgICAgICBjb25zdCBDWHMgPSBbXCJBSTFcIiwgXCJDSTFcIiwgXCJDSTJcIiwgXCJJQzFcIiwgXCJOQzFcIiwgXCJOQzJcIl07XG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLmZvckVhY2gobWF0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3hQcmljZXNbbWF0W1wiVGlja2VyXCJdXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBDWHMuZm9yRWFjaChDWCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dW0NYXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FudGVkUmVzdWx0cy5mb3JFYWNoKHdhbnRlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3hQcmljZXNbbWF0W1wiVGlja2VyXCJdXVtDWF1bd2FudGVkXSA9IG1hdFtDWCArIFwiLVwiICsgd2FudGVkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjeFByaWNlc1tcIkFnZVwiXSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3hQcmljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIFJhaW4gUHJpY2VzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3JhaW4vcHJpY2VzXCIsIHRydWUpO1xuICAgIHhoci5zZW5kKG51bGwpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpIHtcbiAgICBpZiAoIWJ1cm4pIHtcbiAgICAgICAgYnVybiA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWFwaWtleSB8fCAhdXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidXJuW3VzZXJuYW1lXSA9IFtdO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFRpbWVvdXRcIik7XG4gICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQnVybiBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL3VzZXIvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpIHtcbiAgICBpZiAoIWJ1cm4pIHtcbiAgICAgICAgYnVybiA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWFwaWtleSB8fCAhZ3JvdXBpZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFRpbWVvdXRcIik7XG4gICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgR3JvdXAgQnVybiBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSBbXTtcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vZ3JvdXAvXCIgKyBncm91cGlkLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcbiAgICB4aHIuc2VuZChudWxsKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgdXNlcm5hbWUsIGFwaWtleSkge1xuICAgIGlmICghYXBpa2V5IHx8ICF1c2VybmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1cm5TZXR0aW5ncy5wdXNoKFwibG9hZGluZ1wiKTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBTZXR0aW5ncyBUaW1lb3V0XCIpO1xuICAgICAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KTtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIEJ1cm4gU2V0dGluZ3MgZnJvbSBGSU9cIik7XG4gICAgICAgICAgICAgICAgYnVyblNldHRpbmdzWzBdID0gXCJsb2FkZWRcIjtcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5ncy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi91c2Vyc2V0dGluZ3MvYnVybnJhdGUvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHVzZXJuYW1lLCBhcGlrZXkpIHtcbiAgICBpZiAoIWNvbnRyYWN0cykge1xuICAgICAgICBjb250cmFjdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCFhcGlrZXkgfHwgIXVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udHJhY3RzW3VzZXJuYW1lXSA9IFtdO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBDb250cmFjdCBUaW1lb3V0XCIpO1xuICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICBnZXRDb250cmFjdHMoY29udHJhY3RzLCB1c2VybmFtZSwgYXBpa2V5KTtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIENvbnRyYWN0cyBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0c1t1c2VybmFtZV0ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XG4gICAgICAgICAgICAgICAgY29udHJhY3RzW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9jb250cmFjdC9hbGxjb250cmFjdHNcIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xuZXhwb3J0IGNvbnN0IENIRUNLX0lORElDQVRPUiA9IFwiJCRDSEVDS1wiO1xuZXhwb3J0IGZ1bmN0aW9uIENoZWNrbGlzdHModGlsZSwgcGFyYW1ldGVycykge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBnZW5lcmF0ZUNoZWNrVGFibGUsIHRpbGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hlY2tOYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBjaGVja05hbWU7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgICAgIGNvbnN0IGNoZWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2hlY2tXcmFwcGVyKTtcbiAgICAgICAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjaGVjay13cmFwcGVyXCIpO1xuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIGRpc3BTdG9yZWRDaGVjaywgW2NoZWNrTmFtZSwgdGlsZV0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNoZWNrVGFibGUocmVzdWx0LCB0aWxlKSB7XG4gICAgaWYgKCF0aWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkluY29tcGxldGUgSXRlbXNcIiwgXCJUb3RhbCBJdGVtc1wiLCBcIkRlbGV0ZVwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUctTm90ZXNcIl0pKTtcbiAgICB2YXIgYW55Q2hlY2tsaXN0cyA9IGZhbHNlO1xuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCA3KSAhPSBDSEVDS19JTkRJQ0FUT1IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhbnlDaGVja2xpc3RzID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCB0b3RhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbmNvbXBsZXRlQ29sdW1uKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRvdGFsQ29sdW1uKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKG5hbWUuc3Vic3RyaW5nKDcpLCBcIlhJVCBDSEVDS19cIiArIG5hbWUuc3Vic3RyaW5nKDcpKSk7XG4gICAgICAgIGluY29tcGxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5maWx0ZXIoKG9iaikgPT4gKCFvYmpbMV0pKS5sZW5ndGgpKTtcbiAgICAgICAgdG90YWxDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGgpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBkZWxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbbmFtZS5zdWJzdHJpbmcoNyksIFtdXSk7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGlmICghYW55Q2hlY2tsaXN0cykge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gNDtcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gQ2hlY2tsaXN0c1wiO1xuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiB1cGRhdGVUaGVuU3RvcmVDaGVjayhyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaGVja05hbWUgPSBwYXJhbXNbMF07XG4gICAgY29uc3QgY2hlY2tUZXh0ID0gcGFyYW1zWzFdO1xuICAgIGlmICghcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XG4gICAgfVxuICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXSA9IGNoZWNrVGV4dC5sZW5ndGggPT0gMCA/IHVuZGVmaW5lZCA6IGNoZWNrVGV4dDtcbiAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGRpc3BTdG9yZWRDaGVjayhyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0gfHwgIXBhcmFtc1sxXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrTmFtZSA9IHBhcmFtc1swXTtcbiAgICBjb25zdCB0aWxlID0gcGFyYW1zWzFdO1xuICAgIGNvbnN0IGNoZWNrV3JhcHBlciA9IHRpbGUuY2hpbGRyZW5bMV07XG4gICAgaWYgKCFjaGVja1dyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xuICAgIH1cbiAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5mb3JFYWNoKGNoZWNrID0+IHsgY3JlYXRlQ2hlY2tSb3coY2hlY2tXcmFwcGVyLCByZXN1bHQsIGNoZWNrTmFtZSwgY2hlY2tbMF0sIGNoZWNrWzFdLCBjaGVja1syXSk7IH0pO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ld1wiO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxhcERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLk92ZXJsYXBwaW5nRGl2KTtcbiAgICAgICAgY29uc3QgZ3JleVN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcbiAgICAgICAgb3ZlcmxhcERpdi5hcHBlbmRDaGlsZChncmV5U3RyaXBlcyk7XG4gICAgICAgIHRpbGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXBEaXYsIHRpbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xuICAgICAgICBjb25zdCBhZGRJbnRlcmZhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkSW50ZXJmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNlbnRlckludGVyZmFjZSk7XG4gICAgICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZVdyYXBwZXIpO1xuICAgICAgICBjb25zdCBhZGRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZChcIk5MT3JIN2hGNWZiS0llc3FXM3VTa0E9PVwiKTtcbiAgICAgICAgYWRkSW50ZXJmYWNlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2UpO1xuICAgICAgICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBhZGRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDaGVja2xpc3QgSXRlbSBFZGl0b3JcIikpO1xuICAgICAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyKTtcbiAgICAgICAgYWRkSGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmFtZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVSb3cpO1xuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgICAgICBuYW1lUm93LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgICAgIG5hbWVSb3cuYXBwZW5kQ2hpbGQobmFtZUlucHV0RGl2KTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBuYW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRhdGVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlUm93KTtcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUlucHV0KTtcbiAgICAgICAgZGF0ZVJvdy5hcHBlbmRDaGlsZChkYXRlSW5wdXREaXYpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBjb25zdCB0aW1lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGltZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVSb3cpO1xuICAgICAgICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGUgVGltZVwiO1xuICAgICAgICB0aW1lTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgICAgICB0aW1lUm93LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgICAgIHRpbWVSb3cuYXBwZW5kQ2hpbGQodGltZUlucHV0RGl2KTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aW1lSW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgICAgICB0aW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICAgICAgY29uc3Qgc2F2ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XG4gICAgICAgIGNvbnN0IHNhdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgc2F2ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDTURcIjtcbiAgICAgICAgc2F2ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XG4gICAgICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUxhYmVsKTtcbiAgICAgICAgY29uc3Qgc2F2ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2F2ZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XG4gICAgICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUlucHV0RGl2KTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNBVkVcIjtcbiAgICAgICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICAgICAgc2F2ZUlucHV0RGl2LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IG5hbWVJbnB1dC52YWx1ZSB8fCBcIlwiO1xuICAgICAgICAgICAgdGlsZS5yZW1vdmVDaGlsZChvdmVybGFwRGl2KTtcbiAgICAgICAgICAgIHZhciBkdWVEYXRlO1xuICAgICAgICAgICAgaWYgKGRhdGVJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSA9IERhdGUucGFyc2UoZGF0ZUlucHV0LnZhbHVlICsgXCIgXCIgKyB0aW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSA9IERhdGUucGFyc2UoZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGVudCA9IFtpdGVtTmFtZSwgZmFsc2VdO1xuICAgICAgICAgICAgaWYgKGR1ZURhdGUgJiYgIWlzTmFOKGR1ZURhdGUpKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQucHVzaChkdWVEYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0ucHVzaChpdGVtQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0gPSBbaXRlbUNvbnRlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVDaGVjaywgW2NoZWNrTmFtZSwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdXSk7XG4gICAgICAgICAgICBjcmVhdGVDaGVja1JvdyhjaGVja1dyYXBwZXIsIHJlc3VsdCwgY2hlY2tOYW1lLCBpdGVtTmFtZSwgZmFsc2UsIGR1ZURhdGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG4gICAgfSk7XG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBDb21wbGV0ZVwiO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbik7XG4gICAgY2xlYXJCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XG4gICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGNsZWFyQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uRGFuZ2VyKTtcbiAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXVtpXVsxXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGVja1dyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUm93ID0gY2hlY2tXcmFwcGVyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGNoZWNrUm93ICYmIGNoZWNrUm93LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICBjaGVja1dyYXBwZXIucmVtb3ZlQ2hpbGQoY2hlY2tSb3cpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbY2hlY2tOYW1lLCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1dKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjcmVhdGVDaGVja1Jvdyh0aWxlLCByZXN1bHQsIGNoZWNrTmFtZSwgbmFtZSwgY2hlY2tlZCwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IGNoZWNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVja1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY2hlY2tSb3cuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgY29uc3QgY2hlY2tDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQ2lyY2xlLnRleHRDb250ZW50ID0gY2hlY2tlZCA/ICfil48nIDogJ+KXiyc7XG4gICAgY2hlY2tSb3cuYXBwZW5kQ2hpbGQoY2hlY2tDaXJjbGUpO1xuICAgIGNoZWNrQ2lyY2xlLnN0eWxlLmNvbG9yID0gZHVlRGF0ZSAmJiBkdWVEYXRlIDwgRGF0ZS5ub3coKSA/IFwiI2Q5NTM0ZlwiIDogXCIjZjdhNjAwXCI7XG4gICAgY2hlY2tDaXJjbGUuc3R5bGUuZm9udFNpemUgPSBcIjM1cHhcIjtcbiAgICBjaGVja0NpcmNsZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNoZWNrUm93KTtcbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja1RleHQgPSBjcmVhdGVUZXh0U3BhbihuYW1lKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGNoZWNrVGV4dCk7XG4gICAgY2hlY2tUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY2hlY2tUZXh0LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xuICAgIHZhciBkdWVEYXRlVGV4dDtcbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgICBkdWVEYXRlVGV4dCA9IGNyZWF0ZVRleHRTcGFuKG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSkgKyBcIiBcIiArIG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibnVtZXJpY1wiLCB5ZWFyOiBcIm51bWVyaWNcIiB9KSk7XG4gICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoZHVlRGF0ZSA8IERhdGUubm93KCkgPyBcImNoZWNrLXRpbWUtb3ZlcmR1ZVwiIDogXCJjaGVjay10aW1lXCIpO1xuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRleHRcIik7XG4gICAgICAgIGNoZWNrUm93LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICBpZiAoZHVlRGF0ZVRleHQpIHtcbiAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVjay10aW1lLWNvbXBsZXRlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrUm93LmFwcGVuZENoaWxkKHRleHREaXYpO1xuICAgIGNoZWNrQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrZWQgPSAhY2hlY2tlZDtcbiAgICAgICAgY2hlY2tDaXJjbGUudGV4dENvbnRlbnQgPSBjaGVja2VkID8gJ+KXjycgOiAn4peLJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlTWF0Y2ggPSByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1baV07XG4gICAgICAgICAgICBpZiAocG9zc2libGVNYXRjaFswXSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNYXRjaFsxXSA9IGNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrVGV4dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC10ZXh0XCIpO1xuICAgICAgICAgICAgY2hlY2tSb3cuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBpZiAoZHVlRGF0ZVRleHQpIHtcbiAgICAgICAgICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGltZS1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC10ZXh0XCIpO1xuICAgICAgICAgICAgY2hlY2tSb3cuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBpZiAoZHVlRGF0ZVRleHQpIHtcbiAgICAgICAgICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2stdGltZS1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbY2hlY2tOYW1lLCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1dKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBtYWtlU3BhY2VyKHRpbGUsIHRvUmVtb3ZlKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TcGFjZXIpO1xuICAgIHNwYWNlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybiBzcGFjZXI7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ2hlY2tsaXN0cy50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBGbGlnaHRFVEFzIH0gZnJvbSBcIi4vRmxpZ2h0RVRBc1wiO1xuaW1wb3J0IHsgTG9jYWxNYXJrZXRBZHMgfSBmcm9tICcuL0xvY2FsTWFya2V0QWRzJztcbmltcG9ydCB7IE1vZHVsZVJ1bm5lciB9IGZyb20gXCIuL01vZHVsZVJ1bm5lclwiO1xuaW1wb3J0IHsgT3JkZXJFVEFzIH0gZnJvbSBcIi4vT3JkZXJFVEFzXCI7XG5pbXBvcnQgeyBDb25zdW1hYmxlVGltZXJzIH0gZnJvbSBcIi4vQ29uc3VtYWJsZVRpbWVyc1wiO1xuaW1wb3J0IHsgRmxlZXRFVEFzIH0gZnJvbSBcIi4vRmxlZXRFVEFzXCI7XG5pbXBvcnQgeyBQb3N0TE0gfSBmcm9tIFwiLi9Qb3N0TE1cIjtcbmltcG9ydCB7IFNoaXBwaW5nQWRzIH0gZnJvbSBcIi4vU2hpcHBpbmdBZHNcIjtcbmltcG9ydCB7IFF1ZXVlTG9hZCB9IGZyb20gXCIuL1F1ZXVlTG9hZFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IGdldFByaWNlcywgZ2V0QnVybiwgZ2V0QnVyblNldHRpbmdzLCBnZXRDb250cmFjdHMgfSBmcm9tIFwiLi9CYWNrZ3JvdW5kUnVubmVyXCI7XG5pbXBvcnQgeyBQTU1HU3R5bGUsIEVuaGFuY2VkQ29sb3JzLCBJY29uU3R5bGUgfSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IHsgU2NyZWVuVW5wYWNrIH0gZnJvbSBcIi4vU2NyZWVuVW5wYWNrXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xuaW1wb3J0IHsgQ29tbWFuZENvcnJlY3RlciB9IGZyb20gXCIuL0NvbW1hbmRDb3JyZWN0ZXJcIjtcbmltcG9ydCB7IENhbGN1bGF0b3JCdXR0b24gfSBmcm9tIFwiLi9DYWxjdWxhdG9yQnV0dG9uXCI7XG5pbXBvcnQgeyBDb250cmFjdERyYWZ0cyB9IGZyb20gXCIuL0NvbnRyYWN0RHJhZnRzXCI7XG5pbXBvcnQgeyBJbWFnZUNyZWF0b3IgfSBmcm9tIFwiLi9JbWFnZUNyZWF0b3JcIjtcbmltcG9ydCB7IEludmVudG9yeU9yZ2FuaXplciB9IGZyb20gXCIuL0ludmVudG9yeU9yZ2FuaXplclwiO1xuaW1wb3J0IHsgSGVhZGVyTWluaW1pemVyIH0gZnJvbSBcIi4vSGVhZGVyTWluaW1pemVyXCI7XG5pbXBvcnQgeyBQZW5kaW5nQ29udHJhY3RzIH0gZnJvbSBcIi4vUGVuZGluZ0NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgQ29tcGFjdFVJIH0gZnJvbSBcIi4vQ29tcGFjdFVJXCI7XG50cnkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJQTU1HRXh0ZW5kZWRcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkZpcmVGb3ggZGV0ZWN0ZWRcIik7XG59XG5jYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coXCJDaHJvbWl1bSBkZXRlY3RlZFwiKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiUE1NR0V4dGVuZGVkXCJdLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdID0ge307XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IFRpbWUgTG9hZGluZyBQTU1HXCIpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIHN0eWxlLmlkID0gXCJwbW1nLXN0eWxlXCI7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBQTU1HU3R5bGU7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKGRvYykge1xuICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID0gW1wiU2NyZWVuVW5wYWNrXCJdO1xuICAgIH1cbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGNvbG9ycy5pZCA9IFwicG1tZy1lbmhhbmNlZC1jb2xvcnNcIjtcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gRW5oYW5jZWRDb2xvcnM7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZChjb2xvcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImljb25zXCIpIHtcbiAgICAgICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBjb2xvcnMudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWljb24tY29sb3JzXCI7XG4gICAgICAgIGNvbG9ycy50ZXh0Q29udGVudCA9IEljb25TdHlsZTtcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbG9ycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHByaWNlcyA9IHt9O1xuICAgIGdldFByaWNlcyhwcmljZXMsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdKTtcbiAgICB2YXIgYnVybiA9IFtdO1xuICAgIGdldEJ1cm4oYnVybiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSk7XG4gICAgdmFyIGJ1cm5TZXR0aW5ncyA9IFtdO1xuICAgIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xuICAgIHZhciBjb250cmFjdHMgPSBbXTtcbiAgICBnZXRDb250cmFjdHMoY29udHJhY3RzLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKTtcbiAgICBjb25zdCBydW5uZXIgPSBuZXcgTW9kdWxlUnVubmVyKFtcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXG4gICAgICAgIG5ldyBMb2NhbE1hcmtldEFkcygpLFxuICAgICAgICBuZXcgUG9zdExNKHByaWNlcyksXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxuICAgICAgICBuZXcgT3JkZXJFVEFzKCksXG4gICAgICAgIG5ldyBGbGlnaHRFVEFzKCksXG4gICAgICAgIG5ldyBGbGVldEVUQXMoKSxcbiAgICAgICAgbmV3IFF1ZXVlTG9hZCgpLFxuICAgICAgICBuZXcgQ29uc3VtYWJsZVRpbWVycyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgYnVybiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdKSxcbiAgICAgICAgbmV3IEludmVudG9yeU9yZ2FuaXplcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgYnVybiwgcmVzdWx0KSxcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbnMoKSxcbiAgICAgICAgbmV3IEltYWdlQ3JlYXRvcigpLFxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdKSxcbiAgICAgICAgbmV3IEhlYWRlck1pbmltaXplcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJtaW5pbWl6ZV9ieV9kZWZhdWx0XCJdKSxcbiAgICAgICAgbmV3IENvbW1hbmRDb3JyZWN0ZXIoKSxcbiAgICAgICAgbmV3IENhbGN1bGF0b3JCdXR0b24oKSxcbiAgICAgICAgbmV3IFNpZGViYXIocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSksXG4gICAgICAgIG5ldyBQZW5kaW5nQ29udHJhY3RzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBjb250cmFjdHMpLFxuICAgICAgICBuZXcgQ29tcGFjdFVJKHJlc3VsdClcbiAgICBdLCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncyk7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcbiAgICB9KSgpO1xufVxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIEZsaWdodEVUQXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRSb3cgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBldGFEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzNdO1xuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKGV0YURhdGEudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbiArIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWUgKz0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmlyc3RSb3cgPSBlbGVtZW50c1swXTtcbiAgICAgICAgICAgIGlmICghZmlyc3RSb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaXJzdEV0YURhdGEgPSBmaXJzdFJvdy5jaGlsZHJlblszXTtcbiAgICAgICAgICAgIGlmICghZmlyc3RFdGFEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0RXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxFdGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShjdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgZmlyc3RFdGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7dG90YWxFdGF9KWAsIHRoaXMudGFnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsaWdodEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIExvY2FsTWFya2V0QWRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWxtLWFkc1wiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oQlVZSU5HfFNFTExJTkd8Q09SUClcXHMoXFxkKylcXHMuKlxcc0BcXHMoW1xcZCwuXSspXFxzW0EtWl0rXFxzZm9yLyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG1hdGNoZXNbMl0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludChtYXRjaGVzWzNdLnJlcGxhY2UoL1ssLl0vZywgJycpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9ICh0b3RhbENlbnRzIC8gY291bnQgLyAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0gZWEpYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTG9jYWxNYXJrZXRBZHMudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgWElUSGFuZGxlciB9IGZyb20gXCIuL1hJVEhhbmRsZXJcIjtcbmltcG9ydCB7IHNob3dCdWZmZXIsIHNldFNldHRpbmdzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgRnJpZW5kbHlOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XG5leHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGVzLCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzLm1hcChtID0+IHRoaXMubW9kdWxlVG9NRShtKSk7XG4gICAgICAgIHRoaXMueGl0ID0gbmV3IFhJVEhhbmRsZXIocmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcyk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KTtcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlTW9kdWxlcyhyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSAmJiByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xuICAgICAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1vZHVsZVRvTUUobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBuYW1lOiBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIGZyaWVuZGx5TmFtZTogRnJpZW5kbHlOYW1lc1ttb2R1bGUuY29uc3RydWN0b3IubmFtZV0gfHwgbW9kdWxlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBjbGVhbnVwVGltZTogMCxcbiAgICAgICAgICAgIHJ1blRpbWU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgdGhpcy54aXQucnVuKCk7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0gPSBzaG93QnVmZmVyKFwiWElUIFNUQVJUXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHRoaXMucmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZHVsZXMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUuY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXBUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5ydW4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBydW5UaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0MTtcbiAgICAgICAgICAgICAgICBlbnRyeS5jb3VudCsrO1xuICAgICAgICAgICAgICAgIGVudHJ5LmNsZWFudXBUaW1lICs9IGNsZWFudXBUaW1lO1xuICAgICAgICAgICAgICAgIGVudHJ5LnJ1blRpbWUgKz0gcnVuVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMubG9vcCgpLCAyNTApO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vZHVsZVJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSBcIi4vWElUL1N0YXJ0XCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuL1hJVC9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tIFwiLi9YSVQvRGVidWdcIjtcbmltcG9ydCB7IENhbGN1bGF0b3IgfSBmcm9tIFwiLi9YSVQvQ2FsY3VsYXRvclwiO1xuaW1wb3J0IHsgUmVwYWlyc19wcmUgfSBmcm9tIFwiLi9YSVQvUmVwYWlyc1wiO1xuaW1wb3J0IHsgQ2hhdF9wcmUgfSBmcm9tIFwiLi9YSVQvQ2hhdFwiO1xuaW1wb3J0IHsgRmluX3ByZSB9IGZyb20gXCIuL1hJVC9GaW5hbmNlc1wiO1xuaW1wb3J0IHsgRW5oYW5jZWRCdXJuX3ByZSB9IGZyb20gXCIuL1hJVC9CdXJuXCI7XG5pbXBvcnQgeyBTaGVldFRhYmxlX3ByZSB9IGZyb20gXCIuL1hJVC9TaGVldFRhYmxlXCI7XG5pbXBvcnQgeyBDb250cmFjdHNfcHJlIH0gZnJvbSBcIi4vWElUL0NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgUFJ1Tl9wcmUsIFByb3NwZXJpdHlfcHJlLCBTaGVldHNfcHJlLCBEaXNjb3JkX3ByZSwgUHJ1blBsYW5uZXIsIFdpa2kgfSBmcm9tIFwiLi9YSVQvV2ViXCI7XG5pbXBvcnQgeyBGSU9JbnZfcHJlIH0gZnJvbSBcIi4vWElUL0ludmVudG9yeVwiO1xuaW1wb3J0IHsgTm90ZXMgfSBmcm9tIFwiLi9YSVQvTm90ZXNcIjtcbmltcG9ydCB7IENoZWNrbGlzdHMgfSBmcm9tIFwiLi9YSVQvQ2hlY2tsaXN0c1wiO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gXCIuL1hJVC9Tb3J0XCI7XG5pbXBvcnQgeyBDb21tYW5kTGlzdHMgfSBmcm9tIFwiLi9YSVQvQ29tbWFuZExpc3RzXCI7XG5pbXBvcnQgeyBIZWxwIH0gZnJvbSBcIi4vWElUL0hlbHBcIjtcbmV4cG9ydCBjb25zdCBYSVRQcmVGdW5jdGlvbnMgPSB7XG4gICAgXCJJTlZcIjogRklPSW52X3ByZSxcbiAgICBcIkRJU0NPUkRcIjogRGlzY29yZF9wcmUsXG4gICAgXCJTSEVFVFNcIjogU2hlZXRzX3ByZSxcbiAgICBcIlBST1NQRVJJVFlcIjogUHJvc3Blcml0eV9wcmUsXG4gICAgXCJQUlVOXCI6IFBSdU5fcHJlLFxuICAgIFwiU0hFRVRUQUJMRVwiOiBTaGVldFRhYmxlX3ByZSxcbiAgICBcIkZJTlwiOiBGaW5fcHJlLFxuICAgIFwiQ0hBVFwiOiBDaGF0X3ByZSxcbiAgICBcIkJVUk5cIjogRW5oYW5jZWRCdXJuX3ByZSxcbiAgICBcIlNFVFRJTkdTXCI6IFNldHRpbmdzLFxuICAgIFwiQ09OVFJBQ1RTXCI6IENvbnRyYWN0c19wcmUsXG4gICAgXCJSRVBBSVJTXCI6IFJlcGFpcnNfcHJlLFxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yLFxuICAgIFwiQ0FMQ1wiOiBDYWxjdWxhdG9yLFxuICAgIFwiU1RBUlRcIjogU3RhcnQsXG4gICAgXCJERUJVR1wiOiBEZWJ1ZyxcbiAgICBcIk5PVEVcIjogTm90ZXMsXG4gICAgXCJOT1RFU1wiOiBOb3RlcyxcbiAgICBcIkNIRUNLXCI6IENoZWNrbGlzdHMsXG4gICAgXCJDSEVDS1NcIjogQ2hlY2tsaXN0cyxcbiAgICBcIkNIRUNLTElTVFwiOiBDaGVja2xpc3RzLFxuICAgIFwiQ0hFQ0tMSVNUU1wiOiBDaGVja2xpc3RzLFxuICAgIFwiU09SVFwiOiBTb3J0LFxuICAgIFwiTElTVFwiOiBDb21tYW5kTGlzdHMsXG4gICAgXCJMSVNUU1wiOiBDb21tYW5kTGlzdHMsXG4gICAgXCJQUlVOUExBTk5FUlwiOiBQcnVuUGxhbm5lcixcbiAgICBcIlBMQU5ORVJcIjogUHJ1blBsYW5uZXIsXG4gICAgXCJXSUtJXCI6IFdpa2ksXG4gICAgXCJIRUxQXCI6IEhlbHBcbn07XG5leHBvcnQgY29uc3QgWElUQnVmZmVyVGl0bGVzID0ge1xuICAgIFwiSU5WXCI6IFwiRklPIElOVkVOVE9SWVwiLFxuICAgIFwiRElTQ09SRFwiOiBcIkRJU0NPUkQgU0VSVkVSXCIsXG4gICAgXCJTSEVFVFNcIjogXCJHT09HTEUgU0hFRVRTXCIsXG4gICAgXCJQUk9TUEVSSVRZXCI6IFwiUFJPU1BFUklUWVwiLFxuICAgIFwiUFJVTlwiOiBcIlBSVU4tQ0VQVElPTlwiLFxuICAgIFwiU0hFRVRUQUJMRVwiOiBcIkdPT0dMRSBTSEVFVFMgVEFCTEVcIixcbiAgICBcIkZJTlwiOiBcIkZJTkFOQ0lBTCBPVkVSVklFV1wiLFxuICAgIFwiQ0hBVFwiOiBcIkNIQVRcIixcbiAgICBcIkJVUk5cIjogXCJFTkhBTkNFRCBCVVJOXCIsXG4gICAgXCJTRVRUSU5HU1wiOiBcIlBNTUcgU0VUVElOR1NcIixcbiAgICBcIkNPTlRSQUNUU1wiOiBcIlBFTkRJTkcgQ09OVFJBQ1RTXCIsXG4gICAgXCJSRVBBSVJTXCI6IFwiUkVQQUlSU1wiLFxuICAgIFwiQ0FMQ1wiOiBcIkNBTENVTEFUT1JcIixcbiAgICBcIkNBTENVTEFUT1JcIjogXCJDQUxDVUxBVE9SXCIsXG4gICAgXCJTVEFSVFwiOiBcIlNUQVJUSU5HIFdJVEggUE1NR1wiLFxuICAgIFwiREVCVUdcIjogXCJERUJVR1wiLFxuICAgIFwiTk9URVwiOiBcIk5PVEVcIixcbiAgICBcIk5PVEVTXCI6IFwiTk9URVwiLFxuICAgIFwiQ0hFQ0tcIjogXCJDSEVDS0xJU1RcIixcbiAgICBcIkNIRUNLU1wiOiBcIkNIRUNLTElTVFwiLFxuICAgIFwiQ0hFQ0tMSVNUXCI6IFwiQ0hFQ0tMSVNUXCIsXG4gICAgXCJDSEVDS0xJU1RTXCI6IFwiQ0hFQ0tMSVNUXCIsXG4gICAgXCJTT1JUXCI6IFwiU09SVElORyBPUFRJT05TXCIsXG4gICAgXCJMSVNUXCI6IFwiQ09NTUFORCBMSVNUXCIsXG4gICAgXCJMSVNUU1wiOiBcIkNPTU1BTkQgTElTVFwiLFxuICAgIFwiUFJVTlBMQU5ORVJcIjogXCJQUlVOIFBMQU5ORVJcIixcbiAgICBcIlBMQU5ORVJcIjogXCJQUlVOIFBMQU5ORVJcIixcbiAgICBcIldJS0lcIjogXCJQUlVOIFdJS0lcIixcbiAgICBcIkhFTFBcIjogXCJQTU1HIEhFTFBcIlxufTtcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGIteGl0XCI7XG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XG4gICAgICAgIHRoaXMuYnVyblNldHRpbmdzID0gYnVyblNldHRpbmdzO1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIlhJVFwiKTtcbiAgICAgICAgaWYgKCFidWZmZXJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBidXJuID0gdGhpcy5idXJuO1xuICAgICAgICBjb25zdCBidXJuU2V0dGluZ3MgPSB0aGlzLmJ1cm5TZXR0aW5ncztcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gKGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpKTtcbiAgICAgICAgICAgIGlmICghdGlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbG9hZC1zdWNjZXNzXCIgfHwgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1uby1tYXRjaFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnNSYXcgPSBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlckhlYWRlcikpWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzUmF3KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1Jhdy5jaGFyQXQoNCkgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2goa2V5LnNsaWNlKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNSYXcuc2xpY2UoNCkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbaV0gPSBwYXJhbWV0ZXJzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1yZWxvYWRcIikge1xuICAgICAgICAgICAgICAgIFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldKHRpbGUuZmlyc3RDaGlsZCwgcGFyYW1ldGVycywgdGhpcy5yZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ4aXQtdGlsZVwiKTtcbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjIyMjIyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkIHx8ICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCAhPSBcInBtbWctbm8tbWF0Y2hcIikpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVmcmVzaFwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi4p+zXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXVwcGVyLXJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMTJweFwiO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoXCIpO1xuICAgICAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKHJlZnJlc2hCdXR0b24sIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XG4gICAgICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgICAgICAgICAgY29uc3QgcHJlRnVuYyA9IFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgaWYgKCFwcmVGdW5jKSB7XG4gICAgICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vIE1hdGNoaW5nIEZ1bmN0aW9uIVwiO1xuICAgICAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlsZS5maXJzdENoaWxkLmlkID0gXCJwbW1nLW5vLW1hdGNoXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkJ1ZmZlclRpdGxlKSlbMF0udGV4dENvbnRlbnQgPSBYSVRCdWZmZXJUaXRsZXNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHRydWUpOyB9KTtcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgcHJlRnVuYyhjb250ZW50RGl2LCBwYXJhbWV0ZXJzLCB0aGlzLnJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY2xlYXJDaGlsZHJlbiwgY3JlYXRlTGluayB9IGZyb20gXCIuLi91dGlsXCI7XG5leHBvcnQgZnVuY3Rpb24gU3RhcnQodGlsZSkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgdGlsZS5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xuICAgIHRpbGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjJweFwiO1xuICAgIGNvbnN0IHdlbGNvbWUgPSBjcmVhdGVUZXh0U3BhbihcIlRoYW5rIHlvdSBmb3IgdXNpbmcgUE1NRyBFeHRlbmRlZCFcIik7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgd2VsY29tZS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlRoaXMgaXMgYSBzaG9ydCB0dXRvcmlhbCBvbiBob3cgdG8gZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGUgZXh0ZW5zaW9uLlwiKSk7XG4gICAgY29uc3Qgd2Vic2l0ZUxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYnNpdGVMaW5rRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdlYnNpdGVMaW5rRGl2KTtcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkRldGFpbHMgb24gd2hhdCBQTU1HIG9mZmVycyBjYW4gYmUgZm91bmQgaGVyZTogXCIpKTtcbiAgICBjb25zdCB3ZWJzaXRlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHdlYnNpdGVMaW5rLmhyZWYgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3BtbWdleHRlbmRlZC9ob21lP2F1dGh1c2VyPTBcIjtcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHdlYnNpdGVMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIHdlYnNpdGVMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HIEV4dGVuZGVkXCI7XG4gICAgd2Vic2l0ZUxpbmtEaXYuYXBwZW5kQ2hpbGQod2Vic2l0ZUxpbmspO1xuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcbiAgICBzZXR0aW5nc0Rpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJTdGFydCBieSBvcGVuaW5nIGEgbmV3IGJ1ZmZlciBhbmQgZW50ZXJpbmcgXCIpKTtcbiAgICBjb25zdCBzZXR0aW5nc0xpbmsgPSBjcmVhdGVMaW5rKFwiWElUIFNFVFRJTkdTXCIsIFwiWElUIFNFVFRJTkdTXCIpO1xuICAgIHNldHRpbmdzTGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChzZXR0aW5nc0xpbmspO1xuICAgIGNvbnN0IGZpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYpO1xuICAgIGZpb0Rpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XG4gICAgZmlvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiRklPIGlzIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBnYXRoZXJzIGRhdGEgZnJvbSB5b3VyIGdhbWUuIFBNTUcgRXh0ZW5kZWQgdXNlcyB0aGF0IGRhdGEgdG8gZGlzcGxheSB1c2VmdWwgaW5mb3JtYXRpb24uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpbnN0YWxsaW5nIEZJTyBoZXJlOiBcIikpO1xuICAgIGNvbnN0IGZpb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmaW9MaW5rLmhyZWYgPSBcImh0dHBzOi8vZmlvLmZuYXIubmV0L1wiO1xuICAgIGZpb0xpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBmaW9MaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGZpb0xpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgZmlvTGluay50ZXh0Q29udGVudCA9IFwiRklPIFdlYnNpdGVcIjtcbiAgICBmaW9EaXYuYXBwZW5kQ2hpbGQoZmlvTGluayk7XG4gICAgY29uc3QgZmlvRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYyKTtcbiAgICBmaW9EaXYyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICBmaW9EaXYyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiSWYgeW91IGFscmVhZHkgaGF2ZSBhIEZJTyBhY2NvdW50LCBhZGQgeW91ciB1c2VybmFtZSBhbmQgQVBJIEtleSB0byB0aGUgdGV4dCBib3hlcyBvbiBYSVQgU0VUVElOR1MuIFlvdSBjYW4gZ2VuZXJhdGUgYW4gQVBJIEtleSBcIikpO1xuICAgIGNvbnN0IGZpb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZmlvTGluazIuaHJlZiA9IFwiaHR0cHM6Ly9maW8uZm5hci5uZXQvc2V0dGluZ3NcIjtcbiAgICBmaW9MaW5rMi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGZpb0xpbmsyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGZpb0xpbmsyLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICAgIGZpb0xpbmsyLnRleHRDb250ZW50ID0gXCJoZXJlLlwiO1xuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoZmlvTGluazIpO1xuICAgIGNvbnN0IHdlYkFwcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJBcHBEaXYpO1xuICAgIHdlYkFwcERpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XG4gICAgd2ViQXBwRGl2LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjIwcHhcIjtcbiAgICB3ZWJBcHBEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJJZiB5b3VyIGNvcnBvcmF0aW9uIGhhcyBhIHdlYiBhcHAgKEFISSwgRk9XTCwgS0FXQSksIGVudGVyIHRoYXQgaW4gdGhlIFdlYiBBcHAgSUQgZmllbGQuXCIpKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWW91IGNhbiBleHBsb3JlIG90aGVyIHNldHRpbmdzIHRvIGVuYWJsZSBvciBkaXNhYmxlIGZlYXR1cmVzLCBjaGFuZ2UgdGhlIGNvbG9yIHNjaGVtZSwgYW5kIGN1c3RvbWl6ZSB0aGUgbGVmdCBzaWRlYmFyLiBDb250YWN0IFBpQm95MzE0IGluIGdhbWUgb3Igb24gRGlzY29yZCBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuXCIpKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU3RhcnQudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZVRleHRTcGFuLCBkb3dubG9hZEZpbGUsIGNyZWF0ZVNlbGVjdE9wdGlvbiwgc2V0U2V0dGluZ3MsIGdldExvY2FsU3RvcmFnZSwgY3JlYXRlVG9vbFRpcCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBTdHlsZSwgV2l0aFN0eWxlcyB9IGZyb20gXCIuLi9TdHlsZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgY29uc3Qgd2FybmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3YXJuaW5nRGl2KTtcbiAgICB3YXJuaW5nRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiNHB4XCI7XG4gICAgd2FybmluZ0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkNoYW5nZXMgcmVxdWlyZSBhIHJlZnJlc2ggdG8gdGFrZSBlZmZlY3QuXCIpKTtcbiAgICBjb25zdCBoZWxwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlbHBEaXYpO1xuICAgIGhlbHBEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI0cHhcIjtcbiAgICBoZWxwRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiU2VlIGEgZnVsbCBsaXN0IG9mIGZlYXR1cmVzIG9uIFwiKSk7XG4gICAgY29uc3Qgd2Vic2l0ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB3ZWJzaXRlTGluay5ocmVmID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9wbW1nZXh0ZW5kZWQvZmVhdHVyZXM/YXV0aHVzZXI9MFwiO1xuICAgIHdlYnNpdGVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgd2Vic2l0ZUxpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgd2Vic2l0ZUxpbmsudGV4dENvbnRlbnQgPSBcIlBNTUcncyBXZWJzaXRlXCI7XG4gICAgaGVscERpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQXV0aGVudGljYXRpb24gU2V0dGluZ3NcIikpO1xuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJFbnRlciB5b3VyIEZJTyB1c2VybmFtZSBhbmQgQVBJIGtleSwgYXMgd2VsbCBhcyBhIGNvcnBvcmF0ZSB3ZWIgYXBwIElEXCIsIFwicmlnaHRcIikpO1xuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGF1dGhlbnRpY2F0aW9uSGVhZGVyKTtcbiAgICBjb25zdCB1c2VybmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdXNlcm5hbWVMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIFVzZXJuYW1lOiBcIik7XG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gfHwgXCJcIjtcbiAgICB1c2VybmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdID0gIXVzZXJuYW1lSW5wdXQudmFsdWUgfHwgdXNlcm5hbWVJbnB1dC52YWx1ZSA9PSBcIlwiID8gdW5kZWZpbmVkIDogdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICB1c2VybmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQodXNlcm5hbWVEaXYpO1xuICAgIGNvbnN0IGFwaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYXBpTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIkZJTyBBUEkgS2V5OiBcIik7XG4gICAgYXBpTGFiZWwuc3R5bGUubWluV2lkdGggPSBcIjc3cHhcIjtcbiAgICBhcGlMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBjb25zdCBhcGlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhcGlJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSB8fCBcIlwiO1xuICAgIGFwaUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSA9ICFhcGlJbnB1dC52YWx1ZSB8fCBhcGlJbnB1dC52YWx1ZSA9PSBcIlwiID8gdW5kZWZpbmVkIDogYXBpSW5wdXQudmFsdWU7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgYXBpSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgYXBpSW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICBhcGlEaXYuYXBwZW5kQ2hpbGQoYXBpTGFiZWwpO1xuICAgIGFwaURpdi5hcHBlbmRDaGlsZChhcGlJbnB1dCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChhcGlEaXYpO1xuICAgIGNvbnN0IHdlYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2ViTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIldlYiBBcHAgSUQ6IFwiKTtcbiAgICB3ZWJMYWJlbC5zdHlsZS5taW5XaWR0aCA9IFwiNzdweFwiO1xuICAgIHdlYkxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGNvbnN0IHdlYklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHdlYklucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gfHwgXCJcIjtcbiAgICB3ZWJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSA9ICF3ZWJJbnB1dC52YWx1ZSB8fCB3ZWJJbnB1dC52YWx1ZSA9PSBcIlwiID8gdW5kZWZpbmVkIDogd2ViSW5wdXQudmFsdWU7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgd2ViSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgd2ViRGl2LmFwcGVuZENoaWxkKHdlYkxhYmVsKTtcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViSW5wdXQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2ViRGl2KTtcbiAgICBjb25zdCBlbmhhbmNlZENvbG9ySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29sb3IgU2NoZW1lXCIpKTtcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJTZWxlY3QgYSBjb2xvciBzY2hlbWUgdG8gY3VzdG9taXplIG1hdGVyaWFsIGljb25zLlwiLCBcInJpZ2h0XCIpKTtcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGVuaGFuY2VkQ29sb3JIZWFkZXIpO1xuICAgIGNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb2xvckxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJDb2xvciBTY2hlbWU6XCIpO1xuICAgIGNvbG9yTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29sb3JTZWxlY3QubmFtZSA9IFwiY29sb3JzLXNlbGVjdFwiO1xuICAgIGNvbG9yU2VsZWN0LmlkID0gXCJjb2xvcnMtc2VsZWN0XCI7XG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiRW5oYW5jZWRcIiwgXCJlbmhhbmNlZFwiKSk7XG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiSWNvbnNcIiwgXCJpY29uc1wiKSk7XG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiRGVmYXVsdFwiLCBcImRlZmF1bHRcIikpO1xuICAgIGNvbG9yU2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIik7XG4gICAgY29sb3JTZWxlY3Quc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImVuaGFuY2VkXCIgfHwgIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSkge1xuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblswXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImljb25zXCIpIHtcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMl0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb2xvclNlbGVjdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBjb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID0gY29sb3JTZWxlY3Quc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvclNlbGVjdCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb2xvckRpdik7XG4gICAgY29uc3QgZmluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmaW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZmluTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJFbmFibGUgRmluYW5jaWFsIFJlY29yZGluZ1wiKSk7XG4gICAgZmluTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlJlY29yZCBmaW5hbmNpYWwgaW5mbyBkYWlseS4gT3BlbiBYSVQgRklOIGZvciBtb3JlIGluZm8uXCIsIFwicmlnaHRcIikpO1xuICAgIGZpbkxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICBmaW5MYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGZpbkRpdi5hcHBlbmRDaGlsZChmaW5MYWJlbCk7XG4gICAgY29uc3QgZmluQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZmluQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBmaW5DaGVja2JveC5jaGVja2VkID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVjb3JkaW5nX2ZpbmFuY2lhbHNcIl07XG4gICAgZmluRGl2LmFwcGVuZENoaWxkKGZpbkNoZWNrYm94KTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpbkRpdik7XG4gICAgZmluQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVjb3JkaW5nX2ZpbmFuY2lhbHNcIl0gPSBmaW5DaGVja2JveC5jaGVja2VkO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1pbkxhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiTWluaW1pemUgSGVhZGVycyBieSBEZWZhdWx0XCIpKTtcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiTWluaW1pemVkIGNvbnRyYWN0IGFuZCBDWCBoZWFkZXJzIGJ5IGRlZmF1bHQuXCIsIFwicmlnaHRcIikpO1xuICAgIG1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICBtaW5MYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIG1pbkRpdi5hcHBlbmRDaGlsZChtaW5MYWJlbCk7XG4gICAgY29uc3QgbWluQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWluQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBtaW5DaGVja2JveC5jaGVja2VkID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibWluaW1pemVfYnlfZGVmYXVsdFwiXTtcbiAgICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluQ2hlY2tib3gpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQobWluRGl2KTtcbiAgICBtaW5DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJtaW5pbWl6ZV9ieV9kZWZhdWx0XCJdID0gbWluQ2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICBjb25zdCBidXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidXJuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGJ1cm5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkJ1cm4gU2V0dGluZ3NcIikpO1xuICAgIGJ1cm5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiU2V0IHRoZSB0aHJlc2hvbGRzIGZvciB5ZWxsb3cgYW5kIHJlZCBjb25zdW1hYmxlIGxldmVscyBpbiBidXJuIHRpbGVzIChpbiBkYXlzKS5cIiwgXCJyaWdodFwiKSk7XG4gICAgYnVybkxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICBidXJuTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKGJ1cm5MYWJlbCk7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdID0gWzMsIDddO1xuICAgIH1cbiAgICBjb25zdCBzZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoc2V0RGl2KTtcbiAgICBzZXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGNvbnN0IHJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHJlZERpdik7XG4gICAgcmVkRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiUmVkIFRocmVzaG9sZDogXCIpKTtcbiAgICBjb25zdCByZWRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICByZWRJbi50eXBlID0gXCJudW1iZXJcIjtcbiAgICByZWRJbi52YWx1ZSA9IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzNdKVswXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pO1xuICAgIHJlZERpdi5hcHBlbmRDaGlsZChyZWRJbik7XG4gICAgcmVkSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgcmVkSW4uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICByZWRJbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl1bMF0gPSBwYXJzZUZsb2F0KHJlZEluLnZhbHVlKTtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICBjb25zdCB5ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldERpdi5hcHBlbmRDaGlsZCh5ZWxEaXYpO1xuICAgIHllbERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlllbGxvdyBUaHJlc2hvbGQ6IFwiKSk7XG4gICAgY29uc3QgeWVsSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgeWVsSW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgeWVsSW4udmFsdWUgPSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoeWVsSW4pO1xuICAgIHllbEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIHllbEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XG4gICAgeWVsSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdWzFdID0gcGFyc2VGbG9hdCh5ZWxJbi52YWx1ZSk7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXJuRGl2KTtcbiAgICBjb25zdCBob3RrZXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhvdGtleUhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxlZnQgU2lkZWJhciBCdXR0b25zXCIpKTtcbiAgICBob3RrZXlIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIkNyZWF0ZSBob3RrZXlzIG9uIHRoZSBsZWZ0IHNpZGViYXIuIFRoZSBmaXJzdCB2YWx1ZSBpcyB3aGF0IHdpbGwgYmUgZGlzcGxheWVkLCB0aGUgc2Vjb25kIGlzIHRoZSBjb21tYW5kLlwiLCBcInJpZ2h0XCIpKTtcbiAgICBob3RrZXlIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SGVhZGVyKTtcbiAgICBjb25zdCBob3RrZXlJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlJbnB1dERpdik7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0gPSBbW1wiQlNcIiwgXCJCU1wiXSwgW1wiQ09OVFwiLCBcIkNPTlRTXCJdLCBbXCJDT01cIiwgXCJDT01cIl0sIFtcIkNPUlBcIiwgXCJDT1JQXCJdLCBbXCJDWExcIiwgXCJDWExcIl0sIFtcIkZJTlwiLCBcIkZJTlwiXSwgW1wiRkxUXCIsIFwiRkxUXCJdLCBbXCJJTlZcIiwgXCJJTlZcIl0sIFtcIk1BUFwiLCBcIk1BUFwiXSwgW1wiUFJPRFwiLCBcIlBST0RcIl0sIFtcIkNNRFNcIiwgXCJDTURTXCJdLCBbXCJTRVRcIiwgXCJYSVQgU0VUVElOR1NcIl1dO1xuICAgIH1cbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdLmZvckVhY2goaG90a2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKGhvdGtleSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gbWFrZVB1c2hCdXR0b24oXCIrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKFtbXSwgW11dLCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcbiAgICAgICAgaWYgKGRpdiAhPSBudWxsKSB7XG4gICAgICAgICAgICBob3RrZXlJbnB1dERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfSwgU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBjb25zdCBzY3JlZW5VbnBhY2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNjcmVlblVucGFja0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNjcmVlbiBVbnBhY2sgRXhjbHVzaW9uc1wiKSk7XG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJMaXN0IHNjcmVlbnMgdG8gYmUgZXhjbHVkZWQgZnJvbSBzY3JlZW4gdW5wYWNrLiBTZXBhcmF0ZSBzY3JlZW5zIHdpdGggYSBjb21tYS5cIiwgXCJyaWdodFwiKSk7XG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNjcmVlblVucGFja0hlYWRlcik7XG4gICAgY29uc3Qgbm90aWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQobm90aWZEaXYpO1xuICAgIG5vdGlmRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiTGlzdCBzY3JlZW4gbmFtZXMgc2VwYXJhdGVkIGJ5IGNvbW1hcywgbm8gc3BhY2VzLlwiKSk7XG4gICAgY29uc3QgZXhjbHVzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZXhjbHVzaW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgZXhjbHVzaW9uSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1bnBhY2tfZXhjZXB0aW9uc1wiXSA9PSB1bmRlZmluZWQgPyBcIlwiIDogcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0uam9pbihcIixcIik7XG4gICAgZXhjbHVzaW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0gPSBleGNsdXNpb25JbnB1dC52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChleGNsdXNpb25JbnB1dCk7XG4gICAgY29uc3QgbW9kdWxlU2V0dGluZ3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVG9nZ2xlIEZlYXR1cmVzXCIpKTtcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiVG9nZ2xlIGZlYXR1cmVzIG9uIGFuZCBvZmYuIFRoZSB5ZWxsb3cgWCBjbGVhbnMgdXAgYW55IHN0cmF5IGVsZW1lbnRzLlwiLCBcInJpZ2h0XCIpKTtcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChtb2R1bGVTZXR0aW5nc0hlYWRlcik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uQ29udGVudCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBtb2R1bGVzLmZvckVhY2gobXAgPT4ge1xuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlNpZGViYXJMaW5lLCBTdHlsZS5Gb250c1JlZ3VsYXIpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihtcC5mcmllbmRseU5hbWUpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgcmlnaHQuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcbiAgICAgICAgcmlnaHQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGUgPSBtYWtlVG9nZ2xlQnV0dG9uKFwiT25cIiwgXCJPZmZcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbXAuZW5hYmxlZCA9ICFtcC5lbmFibGVkO1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1wLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdW2ldID09IG1wLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtcC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLnB1c2gobXAubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICAgICAgfSwgbXAuZW5hYmxlZCk7XG4gICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gXCJPZmZcIjtcbiAgICAgICAgfVxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gbWFrZVB1c2hCdXR0b24oXCJ4XCIsICgpID0+IG1wLm1vZHVsZS5jbGVhbnVwKHRydWUpKTtcbiAgICAgICAgY2xlYW51cC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiOHB4XCI7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNsZWFudXApO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgaW1wb3J0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbXBvcnRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJbXBvcnQvRXhwb3J0IFNldHRpbmdzXCIpKTtcbiAgICBpbXBvcnRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0SGVhZGVyKTtcbiAgICBjb25zdCBpbXBvcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltcG9ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW1wb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJJbXBvcnQgU2V0dGluZ3NcIjtcbiAgICBpbXBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGltcG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGltcG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0QnV0dG9uKTtcbiAgICBjb25zdCBpbXBvcnRGaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW1wb3J0RmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIjtcbiAgICBpbXBvcnRGaWxlSW5wdXQuYWNjZXB0ID0gXCIuanNvblwiO1xuICAgIGltcG9ydEZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGltcG9ydEZpbGVJbnB1dCk7XG4gICAgaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGltcG9ydEZpbGVJbnB1dC5jbGljaygpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgZXJyb3JUZXh0Qm94ID0gY3JlYXRlVGV4dFNwYW4oXCJFcnJvciBMb2FkaW5nIEZpbGUhXCIpO1xuICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGVycm9yVGV4dEJveCk7XG4gICAgaW1wb3J0RmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlT3V0cHV0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSBbXCJ1c2VybmFtZVwiLCBcImFwaWtleVwiLCBcIndlYmFwcGlkXCJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbGVPdXRwdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtrZXldID0gZmlsZU91dHB1dFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBFcnJvciBlbmNvdW50ZXJlZCBwcm9jZXNzaW5nIGZpbGUhXCIpO1xuICAgICAgICAgICAgICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBjb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGV4cG9ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRXhwb3J0IFNldHRpbmdzXCI7XG4gICAgZXhwb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBleHBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBleHBvcnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgZXhwb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGV4cG9ydEJ1dHRvbik7XG4gICAgZXhwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHt9O1xuICAgICAgICBjb25zdCBleGNsdWRlID0gW1widXNlcm5hbWVcIiwgXCJhcGlrZXlcIiwgXCJ3ZWJhcHBpZFwiXTtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb3dubG9hZEZpbGUob3V0cHV0LCBcInBtbWctc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIik7XG4gICAgfSk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChpbXBvcnREaXYpO1xuICAgIGNvbnN0IGltcG9ydE5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltcG9ydE5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGltcG9ydE5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkltcG9ydCBOb3Rlc1wiO1xuICAgIGltcG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGltcG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBpbXBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGltcG9ydE5vdGVCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBpbXBvcnROb3RlRGl2LmFwcGVuZENoaWxkKGltcG9ydE5vdGVCdXR0b24pO1xuICAgIGNvbnN0IGltcG9ydE5vdGVGaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC5hY2NlcHQgPSBcIi5qc29uXCI7XG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChpbXBvcnROb3RlRmlsZUlucHV0KTtcbiAgICBpbXBvcnROb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbnN0IGVycm9yTm90ZVRleHRCb3ggPSBjcmVhdGVUZXh0U3BhbihcIkVycm9yIExvYWRpbmcgRmlsZSFcIik7XG4gICAgZXJyb3JOb3RlVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChlcnJvck5vdGVUZXh0Qm94KTtcbiAgICBpbXBvcnROb3RlRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlT3V0cHV0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKGZpbGVPdXRwdXQpO1xuICAgICAgICAgICAgICAgIGVycm9yTm90ZVRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBFcnJvciBlbmNvdW50ZXJlZCBwcm9jZXNzaW5nIGZpbGUhXCIpO1xuICAgICAgICAgICAgICAgIGVycm9yTm90ZVRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgZXhwb3J0Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRXhwb3J0IE5vdGVzXCI7XG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGV4cG9ydE5vdGVCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGltcG9ydE5vdGVEaXYuYXBwZW5kQ2hpbGQoZXhwb3J0Tm90ZUJ1dHRvbik7XG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIGRvd25sb2FkRmlsZSwgXCJwbW1nLW5vdGVzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpO1xuICAgIH0pO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0Tm90ZURpdik7XG4gICAgcmV0dXJuIFtwYXJhbWV0ZXJzLCBmdWxsQnVybiwgYnVyblNldHRpbmdzXTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgZnVsbERpdikge1xuICAgIGlmIChob3RrZXkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGlzcGxheWVkVmFsdWUuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgZGlzcGxheWVkVmFsdWUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpc3BsYXllZFZhbHVlKTtcbiAgICBjb25zdCBjb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbW1hbmQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgY29tbWFuZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWFuZCk7XG4gICAgY29uc3QgcmVtb3ZlID0gbWFrZVB1c2hCdXR0b24oXCJYXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBjb21tYW5kLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGlzcGxheWVkVmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XG4gICAgICAgIEFycmF5LmZyb20oZGl2LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW0gPT4geyBkaXYucmVtb3ZlQ2hpbGQoZWxlbSk7IHJldHVybjsgfSk7XG4gICAgfSwgU3R5bGUuQnV0dG9uRGFuZ2VyKTtcbiAgICByZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBob3RrZXlbMF07XG4gICAgY29tbWFuZC52YWx1ZSA9IGhvdGtleVsxXTtcbiAgICBkaXNwbGF5ZWRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IGhvdGtleXM7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgY29tbWFuZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IGhvdGtleXM7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIG1ha2VQdXNoQnV0dG9uKHRleHQsIGYsIHN0eWxlID0gU3R5bGUuQnV0dG9uUHJpbWFyeSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uc3R5bGUpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZjtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuZnVuY3Rpb24gbWFrZVRvZ2dsZUJ1dHRvbihvbiwgb2ZmLCBmLCBzdGF0ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBjb25zdCBzZXRMb29rID0gKHMpID0+IHtcbiAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IHMgPyBvbiA6IG9mZjtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcoc3RhdGUpKTtcbiAgICBzZXRMb29rKHN0YXRlKTtcbiAgICB0b2dnbGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhKHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpID09PSBcInRydWVcIik7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFN0cmluZyhuZXdTdGF0ZSkpO1xuICAgICAgICBzZXRMb29rKG5ld1N0YXRlKTtcbiAgICAgICAgZigpO1xuICAgIH07XG4gICAgdG9nZ2xlLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gICAgcmV0dXJuIHRvZ2dsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9TZXR0aW5ncy50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZG93bmxvYWRGaWxlLCBjbGVhckNoaWxkcmVuLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gRGVidWcodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZG93bmxvYWRCdXR0b25zKTtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24ocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdLCBcIkRvd25sb2FkIEZ1bGwgU2V0dGluZ3NcIiwgXCJwbW1nLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oZnVsbEJ1cm5bcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl1dLCBcIkRvd25sb2FkIEJ1cm5cIiwgXCJwbW1nLWJ1cm5cIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihidXJuU2V0dGluZ3MsIFwiRG93bmxvYWQgQnVybiBTZXR0aW5nc1wiLCBcInBtbWctYnVybi1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XG4gICAgY29uc3QgZW5kcG9pbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW5kcG9pbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiR2V0IEZJTyBFbmRwb2ludCAoZXg6IC9pbmZyYXN0cnVjdHVyZS9Qcm94aW9uKVwiO1xuICAgIGVuZHBvaW50TGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBlbmRwb2ludExhYmVsLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludExhYmVsKTtcbiAgICBjb25zdCBlbmRwb2ludElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVuZHBvaW50SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgZW5kcG9pbnRJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludElucHV0KTtcbiAgICBjb25zdCBlbmRwb2ludEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZW5kcG9pbnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkRvd25sb2FkIEZJTyBFbmRwb2ludFwiO1xuICAgIGVuZHBvaW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBlbmRwb2ludEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgZW5kcG9pbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBlbmRwb2ludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgKGVuZHBvaW50SW5wdXQudmFsdWUuY2hhckF0KDApID09IFwiL1wiID8gXCJcIiA6IFwiL1wiKSArIGVuZHBvaW50SW5wdXQudmFsdWU7XG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRGVidWdfcG9zdCwgdXJsLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIG51bGwpO1xuICAgIH0pO1xuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludEJ1dHRvbik7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gRGVidWdfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoanNvbmRhdGEpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4KSB7IH1cbiAgICBkb3dubG9hZEZpbGUoanNvbmRhdGEsIFwiZmlvLWVuZHBvaW50XCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIsIGZhbHNlKTtcbiAgICByZXR1cm4gW3RpbGUsIHBhcmFtZXRlcnNdO1xufVxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWRCdXR0b24oZGF0YSwgYnV0dG9uTmFtZSwgZmlsZU5hbWUpIHtcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZG93bmxvYWRCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGRvd25sb2FkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGRvd25sb2FkQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgZG93bmxvYWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZG93bmxvYWRGaWxlKGRhdGEsIGZpbGVOYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG93bmxvYWRCdXR0b247XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvRGVidWcudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENhbGN1bGF0b3IodGlsZSkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgY29uc3QgY2FsY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjYWxjRGl2KTtcbiAgICB0aWxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aWxlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIGNhbGNEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCI0MDBweFwiO1xuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBvdXRwdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgb3V0cHV0LnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgb3V0cHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICBvdXRwdXQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgIGNhbGNEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGNhbGNEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgY2FsY0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBjYWxjRGl2LnN0eWxlLndpZHRoID0gXCI2MCVcIjtcbiAgICBjYWxjRGl2LnN0eWxlLm1pbldpZHRoID0gXCIxODBweFwiO1xuICAgIGNvbnN0IGhpc3RvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGlzdG9yeURpdik7XG4gICAgaGlzdG9yeURpdi5zdHlsZS53aWR0aCA9IFwiMzUlXCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjE5NXB4XCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgNDAsIDQzKVwiO1xuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYig0Myw3Miw5MClcIjtcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xuICAgIGNvbnN0IGhpc3RvcnlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBoaXN0b3J5RGl2LmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZSk7XG4gICAgY29uc3QgaGlzdG9yeVRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICBoaXN0b3J5VGFibGUuYXBwZW5kQ2hpbGQoaGlzdG9yeVRhYmxlQm9keSk7XG4gICAgb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgb3V0cHV0LnN0eWxlLndpZHRoID0gXCI5MCVcIjtcbiAgICBvdXRwdXQuc3R5bGUuaGVpZ2h0ID0gXCIzNnB4XCI7XG4gICAgb3V0cHV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgIG91dHB1dC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKG91dHB1dCk7XG4gICAgdmFyIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xuICAgIHZhciBwcmV2VmFsdWUgPSBudWxsO1xuICAgIHZhciBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICB2YXIgY2xlYXJPbk5leHQgPSBmYWxzZTtcbiAgICB2YXIgZG91YmxlQ2xlYXIgPSBmYWxzZTtcbiAgICBjb25zdCBrZXlwYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoa2V5cGFkKTtcbiAgICBrZXlwYWQuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xuICAgIGtleXBhZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAga2V5cGFkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCg0LCAxZnIpXCI7XG4gICAgY29uc3QgbGF5b3V0ID0gW1s3LCBudWxsXSwgWzgsIG51bGxdLCBbOSwgbnVsbF0sIFtcIsO3XCIsIFwiIzNmYTJkZVwiXSwgWzQsIG51bGxdLCBbNSwgbnVsbF0sIFs2LCBudWxsXSwgW1wieFwiLCBcIiMzZmEyZGVcIl0sIFsxLCBudWxsXSwgWzIsIG51bGxdLCBbMywgbnVsbF0sIFtcIi1cIiwgXCIjM2ZhMmRlXCJdLCBbMCwgbnVsbF0sIFtcIi5cIiwgbnVsbF0sIFtcIsKxXCIsIG51bGxdLCBbXCIrXCIsIFwiIzNmYTJkZVwiXV07XG4gICAgbGF5b3V0LmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChvcHRbMV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdFsxXTtcbiAgICAgICAgfVxuICAgICAgICBrZXlwYWQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob3B0WzBdID09IFwiK1wiIHx8IG9wdFswXSA9PSBcIi1cIiB8fCBvcHRbMF0gPT0gXCJ4XCIgfHwgb3B0WzBdID09IFwiw7dcIikge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG9wdFswXTtcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdFswXSA9PSBcIsKxXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy50b1N0cmluZygpLmNoYXJBdCgwKSA9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCItXCIgKyBjdXJyZW50U3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBjb25zdCBib3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcbiAgICBib3R0b21EaXYuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xuICAgIGJvdHRvbURpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgYm90dG9tRGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCgyLCAxZnIpXCI7XG4gICAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChjbGVhcik7XG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XG4gICAgY2xlYXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xuICAgIGNsZWFyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgY2xlYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE3LCA4MywgNzkpXCI7XG4gICAgY2xlYXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XG4gICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xuICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xuICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oaGlzdG9yeVRhYmxlQm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xuICAgIH07XG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVudGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgfVxuICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xuICAgIH07XG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGVudGVyKTtcbiAgICBlbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgICBlbnRlci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XG4gICAgZW50ZXIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICBlbnRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1Y2I4NWNcIjtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCIxXCIgfHwgZS5rZXkgPT09IFwiMlwiIHx8IGUua2V5ID09PSBcIjNcIiB8fCBlLmtleSA9PT0gXCI0XCIgfHwgZS5rZXkgPT09IFwiNVwiIHx8IGUua2V5ID09PSBcIjZcIiB8fCBlLmtleSA9PT0gXCI3XCIgfHwgZS5rZXkgPT09IFwiOFwiIHx8IGUua2V5ID09PSBcIjlcIiB8fCBlLmtleSA9PT0gXCIwXCIgfHwgZS5rZXkgPT09IFwiLlwiKSB7XG4gICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IGUua2V5O1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCIrXCIgfHwgZS5rZXkgPT09IFwiLVwiIHx8IGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCIqXCIgfHwgZS5rZXkgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gZS5rZXk7XG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiPVwiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKSB7XG4gICAgY3VycmVudFN0cmluZyA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XG4gICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCIrXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSArIGN1cnJlbnRTdHJpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCItXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAtIGN1cnJlbnRTdHJpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCJ4XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIipcIikge1xuICAgICAgICByZXR1cm4gcHJldlZhbHVlICogY3VycmVudFN0cmluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIsO3XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIi9cIikge1xuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC8gY3VycmVudFN0cmluZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9DYWxjdWxhdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCwgc2V0U2V0dGluZ3MgfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFJlcGFpcnNfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSkge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBVc2VybmFtZVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXlcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtZXRlcnNbcGFyYW1ldGVycy5sZW5ndGggLSAxXVtcIlBNTUdFeHRlbmRlZFwiXSkge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2gocmVzdWx0KTtcbiAgICB9XG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBSZXBhaXJzX3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3NpdGVzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBSZXBhaXJzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICBjb25zdCByZXN1bHQgPSBwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlcGFpckRhdGE7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVwYWlyRGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQWxsIFJlcGFpcnNcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdIDogXCI3MFwiO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkVGV4dCk7XG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xuICAgICAgICBtYXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcbiAgICAgICAgY29uc3QgbWF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xuICAgICAgICBidWlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChidWlUaXRsZSk7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJQbGFuZXRcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnVpbGRpbmdzID0gW107XG4gICAgICAgIHJlcGFpckRhdGEuZm9yRWFjaChzaXRlID0+IHtcbiAgICAgICAgICAgIHNpdGVbXCJCdWlsZGluZ3NcIl0uZm9yRWFjaChidWlsZCA9PiB7XG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzLnB1c2goW3NpdGVbXCJQbGFuZXROYW1lXCJdLCBidWlsZF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgYnVpbGRpbmdzLnNvcnQoZ2xvYmFsQnVpbGRpbmdTb3J0KTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcbiAgICAgICAgICAgIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpO1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA9IHRocmVzaG9sZElucHV0LnZhbHVlIHx8IFwiNzBcIjtcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdICsgXCIgUmVwYWlyc1wiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdmFyIHNpdGVEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2l0ZVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkgfHwgc2l0ZVtcIlBsYW5ldElkZW50aWZpZXJcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBzaXRlRGF0YSA9IHNpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2l0ZURhdGEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZXNob2xkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xuICAgICAgICB0aHJlc2hvbGRUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA/IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gOiBcIjcwXCI7XG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZElucHV0KTtcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgbWF0VGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdERpdik7XG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ1RvcCA9IFwiNXB4XCI7XG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgICAgICBmb3IgKGxldCB0IG9mIFtcIlRpY2tlclwiLCBcIkFnZVwiLCBcIkNvbmRpdGlvblwiXSkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLnNvcnQoYnVpbGRpbmdTb3J0KTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oYm9keSk7XG4gICAgICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdID0gdGhyZXNob2xkSW5wdXQudmFsdWUgfHwgXCI3MFwiO1xuICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KSB7XG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGRpbmcgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWlsZGluZ1tcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSwgZGF0ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pLCAoYnVpbGRpbmdbXCJDb25kaXRpb25cIl0gKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiVcIl07XG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNsZWFyQ2hpbGRyZW4obWF0RGl2KTtcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgbWF0RGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChtYm9keSk7XG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIG1ib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpIHtcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XG4gICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWlsZGluZ1sxXVtcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSwgYnVpbGRpbmdbMF0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nWzFdW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0IG9mIFtcIk1hdGVyaWFsXCIsIFwiQW1vdW50XCJdKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG4gICAgY29uc3QgbWJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBidWlsZGluZ1NvcnQoYSwgYikge1xuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uXCJdID4gYltcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcbn1cbmZ1bmN0aW9uIGdsb2JhbEJ1aWxkaW5nU29ydChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMV1bXCJDb25kaXRpb25cIl0gPiBiWzFdW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL1JlcGFpcnMudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENoYXRfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcbiAgICB9XG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDaGF0X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2NoYXQvZGlzcGxheS9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBDaGF0X3Bvc3QoY2hhdERpdiwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2hhdERhdGE7XG4gICAgdHJ5IHtcbiAgICAgICAgY2hhdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgIGNoYXREaXYudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHBhcmFtZXRlcnNbMV0gKyBcIiBHbG9iYWwgU2l0ZSBPd25lcnNcIjtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgY2hhdERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgY2hhdERhdGEuZm9yRWFjaChjaGF0ID0+IHtcbiAgICAgICAgY29uc3QgY2hhdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGF0TGluZS5jbGFzc0xpc3QuYWRkKFwiY2hhdC1saW5lXCIpO1xuICAgICAgICBjaGF0RGl2LmFwcGVuZENoaWxkKGNoYXRMaW5lKTtcbiAgICAgICAgY29uc3QgdGltZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIiB9KTtcbiAgICAgICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XG4gICAgICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pO1xuICAgICAgICB0aW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XG4gICAgICAgIHRpbWVEaXYuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQodGltZURhdGVEaXYpO1xuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImNoYXQtbmFtZVwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICAgICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW1lc3NhZ2VcIik7XG4gICAgICAgIHN3aXRjaCAoY2hhdFtcIk1lc3NhZ2VUeXBlXCJdKSB7XG4gICAgICAgICAgICBjYXNlIFwiQ0hBVFwiOlxuICAgICAgICAgICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiVXNlck5hbWVcIl07XG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJNZXNzYWdlVGV4dFwiXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJKT0lORURcIjpcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgam9pbmVkLlwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMRUZUXCI6XG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGxlZnQuXCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ2hhdC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgY3JlYXRlVGV4dFNwYW4sIHNldFNldHRpbmdzLCBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEZpbl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlY29yZGluZ19maW5hbmNpYWxzXCJdKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3UgYXJlIG5vdCByZWNvcmRpbmcgZGFpbHkgZmluYW5jaWFsIGRhdGEsIHdvdWxkIHlvdSBsaWtlIHRvIGVuYWJsZSByZWNvcmRpbmc/XCI7XG4gICAgICAgIGhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94RGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICBjaGVja2JveERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGNoZWNrYm94RGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY2hlY2tib3hEaXYuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiNXB4XCI7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2hlY2tib3hEaXYpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW5hYmxlIFJlY29yZGluZyAoUmVmcmVzaCBuZWVkZWQgdG8gdGFrZSBlZmZlY3QpXCI7XG4gICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjJweFwiO1xuICAgICAgICBjaGVja2JveERpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGNvbnN0IGV4cGxhaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBleHBsYWluRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGV4cGxhaW5EaXYpO1xuICAgICAgICBleHBsYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiUE1NRyBjYW4gcmVjb3JkIHlvdXIgZmluYW5jZXMgKHVzaW5nIEZJTyBkYXRhKSB0byBwcm92aWRlIGEgbW9yZSBhY2N1cmF0ZSBlc3RpbWF0ZSB0aGFuIHRoZSBpbi1nYW1lIEZJTiBzY3JlZW4uIFRoZSBkYXRhIGlzIHB1bGxlZCBhdCBtb3N0IGV2ZXJ5IDI0IGhvdXJzIGFuZCBpcyBzdG9yZWQgbG9jYWxseSBsaWtlIHlvdXIgb3RoZXIgc2V0dGluZ3MuIFlvdSBjYW4gYWNjZXNzIGFsbCB0aGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgWElUIEZJTiBidWZmZXIuXCIpKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlY29yZGluZ19maW5hbmNpYWxzXCJdID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctRmluYW5jZVwiLCBjaG9vc2VTY3JlZW4sIFt0aWxlLCBwYXJhbWV0ZXJzXSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gY2hvb3NlU2NyZWVuKHJlc3VsdCwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXNbMF0gfHwgIXBhcmFtc1sxXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpbGUgPSBwYXJhbXNbMF07XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtc1sxXTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcnMpO1xuICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJObyBkYXRhIGhhcyBiZWVuIHJlY29yZGVkIHlldC4gV2FpdCBhIGZldyBzZWNvbmRzIHRoZW4gcmVmcmVzaCB0aGUgcGFnZS4gSWYgdGhpcyBwZXJzaXN0cywgY29udGFjdCBQaUJveTMxNC5cIjtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGhlYWRlci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0ZpbmFuY2VzLnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3Bhbiwgc2V0U2V0dGluZ3MsIENhdGVnb3J5U29ydCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGdldEdyb3VwQnVybiwgZ2V0QnVybiB9IGZyb20gXCIuLi9CYWNrZ3JvdW5kUnVubmVyXCI7XG5leHBvcnQgZnVuY3Rpb24gRW5oYW5jZWRCdXJuX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlZnJlc2gpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBBUEkgS2V5IVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwaWtleSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdO1xuICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgIGZ1bGxCdXJuW3VzZXJuYW1lXSA9IFtdO1xuICAgICAgICBnZXRCdXJuKGZ1bGxCdXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcbiAgICB9XG4gICAgdmFyIGJ1cm47XG4gICAgdmFyIHVubG9hZGVkID0gZmFsc2U7XG4gICAgdmFyIHBsYW5ldDtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW1ldGVycy5sZW5ndGggPj0gMyAmJiBwYXJhbWV0ZXJzWzFdLnRvTG93ZXJDYXNlKCkgPT0gXCJncm91cFwiKSB7XG4gICAgICAgIGlmIChmdWxsQnVybltwYXJhbWV0ZXJzWzJdXSAmJiBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcbiAgICAgICAgICAgICAgICBnZXRHcm91cEJ1cm4oZnVsbEJ1cm4sIHBhcmFtZXRlcnNbMl0sIGFwaWtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bdXNlcm5hbWVdO1xuICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnVyblNldHRpbmdzWzBdID09IFwibG9hZGluZ1wiIHx8IHVubG9hZGVkKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XG4gICAgICAgIHRpbGUuaWQgPSBcInBtbWctcmVsb2FkXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGlsZS5pZCA9IFwicG1tZy1sb2FkLXN1Y2Nlc3NcIjtcbiAgICB2YXIgc2V0dGluZ3M7XG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcbiAgICAgICAgdmFyIGludiA9IHt9O1xuICAgICAgICB2YXIgY29ucyA9IHt9O1xuICAgICAgICB2YXIgZnVsbENvbW1hbmQgPSBcIlwiO1xuICAgICAgICBpZiAocGFyYW1ldGVyc1szXSkge1xuICAgICAgICAgICAgZnVsbENvbW1hbmQgPSBwYXJhbWV0ZXJzLmpvaW4oXCIgXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0uZm9yRWFjaChwbGFuZXREYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzNdKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoKHBsYW5ldERhdGEgJiYgcGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSkpIHx8IChwbGFuZXREYXRhICYmIHBsYW5ldERhdGFbXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b1VwcGVyQ2FzZSgpKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxhbmV0RGF0YVtcIkVycm9yXCJdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiSW52ZW50b3J5XCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJQcm9kdWN0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuKTtcbiAgICAgICAgdmFyIGxhc3RVcGRhdGVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZShwbGFuZXRCdXJuW1wiTGFzdFVwZGF0ZVwiXSArIFwiWlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncyA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgYnVyblNldHRpbmdzKTtcbiAgICAgICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgUGxhbmV0IVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25zID0ge307XG4gICAgICAgIHZhciBpbnYgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKSB7XG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pIHtcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKSB7XG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiSW52ZW50b3J5XCJdKSB7XG4gICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzY3JlZW5OYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuU2NyZWVuTmFtZSk7XG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXSA9IFtdO1xuICAgIH1cbiAgICB2YXIgc2V0dGluZ3NJbmRleCA9IEZpbmRCdXJuU2V0dGluZ3MocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLCBzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSk7XG4gICAgY29uc3QgZGlzcFNldHRpbmdzID0gc2V0dGluZ3NJbmRleCA9PSAtMSA/IFsxLCAxLCAxLCAxXSA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBjb25zdCBidWZmZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1ZmZlckhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChidWZmZXJIZWFkZXIpO1xuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXR0aW5nc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIlJFRFwiLCAyMi4wMjUsIGRpc3BTZXR0aW5nc1swXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwU2V0dGluZ3NbMF0gPSBkaXNwU2V0dGluZ3NbMF0gPyAwIDogMTtcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KSk7XG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJZRUxMT1dcIiwgNDAuNDgzLCBkaXNwU2V0dGluZ3NbMV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzcFNldHRpbmdzWzFdID0gZGlzcFNldHRpbmdzWzFdID8gMCA6IDE7XG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xuICAgICAgICB9XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSkpO1xuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiR1JFRU5cIiwgMzQuNjUsIGRpc3BTZXR0aW5nc1syXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwU2V0dGluZ3NbMl0gPSBkaXNwU2V0dGluZ3NbMl0gPyAwIDogMTtcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KSk7XG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJJTkZcIiwgMTkuNiwgZGlzcFNldHRpbmdzWzNdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BTZXR0aW5nc1szXSA9IGRpc3BTZXR0aW5nc1szXSA/IDAgOiAxO1xuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pKTtcbiAgICBpZiAobGFzdFVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3QgbGFzdFVwZGF0ZWRTcGFuID0gY3JlYXRlVGV4dFNwYW4oXCJMYXN0IFVwZGF0ZWQ6IFwiICsgbGFzdFVwZGF0ZWQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJudW1lcmljXCIgfSkgKyBcIiBcIiArIGxhc3RVcGRhdGVkLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSkpO1xuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjEwcHhcIjtcbiAgICAgICAgbGFzdFVwZGF0ZWRTcGFuLnN0eWxlLmNvbG9yID0gXCJyZ2IoMTUzLCAxNTMsIDE1MylcIjtcbiAgICAgICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKGxhc3RVcGRhdGVkU3Bhbik7XG4gICAgfVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5lZWRzXCIsIFwiUHJvZHVjdGlvblwiLCBcIkludlwiLCBcIkFtdC4gTmVlZGVkXCIsIFwiQnVyblwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGhlYWRSb3cuZmlyc3RDaGlsZC5jb2xTcGFuID0gMjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIHZhciBidXJuTWF0ZXJpYWxzID0gT2JqZWN0LmtleXMoY29ucyk7XG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XG4gICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgYnVybk1hdGVyaWFscykge1xuICAgICAgICB2YXIgaW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldHRpbmdzW1wiTWF0ZXJpYWxFeGNsdXNpb25zXCJdLmZvckVhY2goKG1hdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSA9PSBtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBweFwiO1xuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIGlmIChtYXRFbGVtKSB7XG4gICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcbiAgICAgICAgfVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobWF0ZXJpYWxDb2x1bW4pO1xuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKE1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxdWzBdKTtcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuICAgICAgICBjb25zdCBjb25zQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNvbnNbbWF0ZXJpYWxdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiAvIERheVwiKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcbiAgICAgICAgY29uc3QgaW52Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBpbnZBbW91bnQgPSBpbnZbbWF0ZXJpYWxdID09IHVuZGVmaW5lZCA/IDAgOiBpbnZbbWF0ZXJpYWxdO1xuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGludkNvbHVtbik7XG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiAtaW52QW1vdW50IC8gY29uc1ttYXRlcmlhbF07XG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGJ1cm5Db2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oKChidXJuIDwgNTAwICYmIGNvbnNbbWF0ZXJpYWxdIDwgMCkgPyBNYXRoLmZsb29yKGJ1cm4pLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgOiBcIuKInlwiKSArIFwiIERheXNcIikpO1xuICAgICAgICBpZiAoY29uc1ttYXRlcmlhbF0gPj0gMCkge1xuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4taW5maW5pdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMF0pIHtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4tcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSB7XG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4tZ3JlZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgbmVlZEFtdCA9IGJ1cm4gPiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0gfHwgY29uc1ttYXRlcmlhbF0gPiAwID8gMCA6IChidXJuIC0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSAqIGNvbnNbbWF0ZXJpYWxdO1xuICAgICAgICBuZWVkQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG5lZWRBbXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmVlZENvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXJuQ29sdW1uKTtcbiAgICB9XG4gICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICByZXR1cm4gbW9kdWxlcztcbn1cbmZ1bmN0aW9uIEZpbmRCdXJuU2V0dGluZ3MoYXJyYXksIG1hdGNoU3RyaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWF0Y2hTdHJpbmcgPT0gYXJyYXlbaV1bMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncykge1xuICAgIEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWluZmluaXRlXCIpKSB7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzNdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSkge1xuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1syXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKSB7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzFdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpIHtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMF0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc0J1dHRvbih0ZXh0LCB3aWR0aCwgdG9nZ2xlZCwgZikge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcbiAgICB9XG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzVGV4dCk7XG4gICAgdGV4dEJveC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCdXR0b24pO1xuICAgIGJhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGJhci5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGJhci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChiYXIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XG4gICAgICAgICAgICB0b2dnbGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZigpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQnVybi50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFNoZWV0VGFibGVfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gKyBcIi9leGVjP21vZGU9JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXJsICs9IFwiJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1syXSArIFwiJTIyXCI7XG4gICAgfVxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgZGF0YVswXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgZGF0YS5zaGlmdCgpO1xuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgZGF0YSkge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU2hlZXRUYWJsZS50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiwgWElUV2ViUmVxdWVzdCwgY3JlYXRlVGFibGUsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCwgY3JlYXRlVGV4dERpdiB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5pbXBvcnQgeyBGYWN0aW9uSGVhZGVycyB9IGZyb20gXCIuLi9HYW1lUHJvcGVydGllc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIENvbnRyYWN0c19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIFVzZXJuYW1lIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXkhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDb250cmFjdHNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY29udHJhY3QvYWxsY29udHJhY3RzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBDb250cmFjdHNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250cmFjdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250cmFjdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWxpZENvbnRyYWN0cyA9IGNvbnRyYWN0RGF0YS5maWx0ZXIoYyA9PiAhaW52YWxpZENvbnRyYWN0U3RhdHVzLmluY2x1ZGVzKGNbXCJTdGF0dXNcIl0pKTtcbiAgICAgICAgdmFsaWRDb250cmFjdHMubWFwKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnRyYWN0W1wiSXNGYWN0aW9uXCJdID0gZmFsc2U7XG4gICAgICAgICAgICBjb250cmFjdFtcIm1hdGVyaWFsQ29uZGl0aW9uc1wiXSA9IFtdO1xuICAgICAgICAgICAgbGV0IHNlbGZDb25kaXRpb25zID0gW107XG4gICAgICAgICAgICBsZXQgcGFydG5lckNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMubWFwKChjb25kaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gXCJSRVBVVEFUSU9OXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0W1wiSXNGYWN0aW9uXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiTWF0ZXJpYWxUaWNrZXJcIl0gIT09IG51bGwgJiYgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZS5pbmNsdWRlcyhjb25kaXRpb25bXCJUeXBlXCJdKSlcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0ucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25bXCJQYXJ0eVwiXSA9PT0gY29udHJhY3RbXCJQYXJ0eVwiXSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZkNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lckNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmQ29uZGl0aW9ucy5zb3J0KGNvbmRpdGlvblNvcnQpO1xuICAgICAgICAgICAgcGFydG5lckNvbmRpdGlvbnMuc29ydChjb25kaXRpb25Tb3J0KTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJzZWxmXCJdID0gc2VsZkNvbmRpdGlvbnM7XG4gICAgICAgICAgICBjb250cmFjdC5Db25kaXRpb25zW1wicGFydG5lclwiXSA9IHBhcnRuZXJDb25kaXRpb25zO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRDb250cmFjdHMuc29ydChDb250cmFjdFNvcnQpO1xuICAgICAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKHRpbGUsIFtcIkNvbnRyYWN0IElEXCIsIFwiTWF0ZXJpYWxcIiwgXCJQYXJ0bmVyJ3MgQ29uZGl0aW9uc1wiLCBcIk15IENvbmRpdGlvbnNcIl0pO1xuICAgICAgICBpZiAodmFsaWRDb250cmFjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVOb0NvbnRyYWN0c1Jvdyg0KTtcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZENvbnRyYWN0cy5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVDb250cmFjdFJvdyhjb250cmFjdCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgIH0pO1xufVxuY29uc3QgaW52YWxpZENvbnRyYWN0U3RhdHVzID0gW1xuICAgIFwiRlVMRklMTEVEXCIsXG4gICAgXCJCUkVBQ0hFRFwiLFxuICAgIFwiVEVSTUlOQVRFRFwiLFxuICAgIFwiQ0FOQ0VMTEVEXCIsXG4gICAgXCJSRUpFQ1RFRFwiXG5dO1xuZnVuY3Rpb24gY3JlYXRlQ29udHJhY3RSb3coY29udHJhY3QpIHtcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGxldCBjb250cmFjdExpbmsgPSBjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xuICAgIGNvbnN0IGNvbnRyYWN0SWRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY29udHJhY3RJZENvbHVtbi5hcHBlbmRDaGlsZChjb250cmFjdFtcIklzRmFjdGlvblwiXSA/IGZhY3Rpb25Db250cmFjdChjb250cmFjdExpbmspIDogY29udHJhY3RMaW5rKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29udHJhY3RJZENvbHVtbik7XG4gICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMTBweFwiO1xuICAgIGNvbnN0IG1hdGVyaWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRlcmlhbERpdik7XG4gICAgaWYgKGNvbnRyYWN0W1wibWF0ZXJpYWxDb25kaXRpb25zXCJdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0uZm9yRWFjaChtYXRlcmlhbENvbmRpdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEVsZW1lbnQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWxDb25kaXRpb25bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBtYXRlcmlhbENvbmRpdGlvbltcIk1hdGVyaWFsQW1vdW50XCJdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxFbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxEaXYuYXBwZW5kQ2hpbGQobWF0ZXJpYWxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XG4gICAgY29uc3QgcGFydG5lckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB2YXIgZmFjdGlvbjtcbiAgICBpZiAoY29udHJhY3RbXCJJc0ZhY3Rpb25cIl0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoRmFjdGlvbkhlYWRlcnMpLmZvckVhY2goZmFjdGlvbk5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0uaW5jbHVkZXMoZmFjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZmFjdGlvbiA9IEZhY3Rpb25IZWFkZXJzW2ZhY3Rpb25OYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghZmFjdGlvbikge1xuICAgICAgICBsZXQgcGFydG5lckxpbmsgPSBjcmVhdGVMaW5rKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0sIFwiQ08gXCIgKyBjb250cmFjdFtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSk7XG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHBhcnRuZXJMaW5rID0gY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkZBIFwiICsgZmFjdGlvbik7XG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xuICAgIH1cbiAgICBmb3IgKGxldCBjb25kaXRpb24gb2YgY29udHJhY3QuQ29uZGl0aW9uc1tcInBhcnRuZXJcIl0pXG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQoY29uZGl0aW9uU3RhdHVzKGNvbmRpdGlvbikpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwYXJ0bmVyQ29sdW1uKTtcbiAgICBjb25zdCBzZWxmQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb250cmFjdC5Db25kaXRpb25zW1wic2VsZlwiXSlcbiAgICAgICAgc2VsZkNvbHVtbi5hcHBlbmRDaGlsZChjb25kaXRpb25TdGF0dXMoY29uZGl0aW9uKSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHNlbGZDb2x1bW4pO1xuICAgIHJldHVybiByb3c7XG59XG47XG5mdW5jdGlvbiBjcmVhdGVOb0NvbnRyYWN0c1Jvdyhjb2xzcGFuKSB7XG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZXh0Q29sdW1uLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke2NvbHNwYW59YCk7XG4gICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gY29udHJhY3RzXCI7XG4gICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcbiAgICByZXR1cm4gbGluZTtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvblNvcnQoYSwgYikge1xuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uSW5kZXhcIl0gPiBiW1wiQ29uZGl0aW9uSW5kZXhcIl0gPyAxIDogLTE7XG59XG5mdW5jdGlvbiBDb250cmFjdFNvcnQoYSwgYikge1xuICAgIHJldHVybiBhW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPiBiW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPyAxIDogLTE7XG59XG5mdW5jdGlvbiBmYWN0aW9uQ29udHJhY3QobGluaykge1xuICAgIGxldCBjb25kaXRpb25EaXYgPSBjcmVhdGVUZXh0RGl2KFwiXCIpO1xuICAgIGxldCBtYXJrZXIgPSBjcmVhdGVUZXh0U3BhbihcIiDimIVcIik7XG4gICAgbWFya2VyLnN0eWxlLmNvbG9yID0gVGV4dENvbG9ycy5ZZWxsb3c7XG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBtYXJrZXIuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgbWFya2VyLnRpdGxlID0gXCJGYWN0aW9uIENvbnRyYWN0XCI7XG4gICAgbGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkRpdjtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvblN0YXR1cyhjb25kaXRpb24pIHtcbiAgICBsZXQgY29uZGl0aW9uRGl2ID0gY3JlYXRlVGV4dERpdihcIlwiKTtcbiAgICBsZXQgbWFya2VyID0gY3JlYXRlVGV4dFNwYW4oY29uZGl0aW9uW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcbiAgICBtYXJrZXIuc3R5bGUuY29sb3IgPSBjb25kaXRpb25bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBsZXQgdGV4dCA9IGNyZWF0ZVRleHRTcGFuKGAgJHtmcmllbmRseUNvbmRpdGlvblRleHRbY29uZGl0aW9uLlR5cGVdfWApO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gY29uZGl0aW9uRGl2O1xufVxuY29uc3QgZnJpZW5kbHlDb25kaXRpb25UZXh0ID0ge1xuICAgIENPTUVYX1BVUkNIQVNFX1BJQ0tVUDogXCJNYXRlcmlhbCBQaWNrdXBcIixcbiAgICBERUxJVkVSWTogXCJEZWxpdmVyeVwiLFxuICAgIERFTElWRVJZX1NISVBNRU5UOiBcIkRlbGl2ZXIgU2hpcG1lbnRcIixcbiAgICBFWFBMT1JBVElPTjogXCJFeHBsb3JhdGlvblwiLFxuICAgIFJFUFVUQVRJT046IFwiUmVwdXRhdGlvblwiLFxuICAgIFBBWU1FTlQ6IFwiUGF5bWVudFwiLFxuICAgIFBJQ0tVUF9TSElQTUVOVDogXCJQaWNrdXAgU2hpcG1lbnRcIixcbiAgICBQUk9WSVNJT05fU0hJUE1FTlQ6IFwiUHJvdmlzaW9uXCIsXG4gICAgUFJPVklTSU9OOiBcIlByb3Zpc2lvblwiXG59O1xuY29uc3QgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZSA9IFtcbiAgICBcIkRFTElWRVJZXCIsXG4gICAgXCJERUxJVkVSWV9TSElQTUVOVFwiLFxuICAgIFwiUFJPVklTSU9OX1NISVBNRU5UXCIsXG4gICAgXCJDT01FWF9QVVJDSEFTRV9QSUNLVVBcIlxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Db250cmFjdHMudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGNvbnN0IHBydW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xuICAgIHBydW4ud2lkdGggPSBcIjEwMCVcIjtcbiAgICBwcnVuLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBQcm9zcGVyaXR5X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3Byb3NwZXJpdHktcHJ1bi5uZXRsaWZ5LmFwcC9cIjtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMykge1xuICAgICAgICB1cmwgKz0gXCI/ZnJvbT1cIiArIHBhcmFtZXRlcnNbMV0gKyBcIiZ0bz1cIiArIHBhcmFtZXRlcnNbMl07XG4gICAgfVxuICAgIGNvbnN0IHByb3NwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBwcm9zcC5zcmMgPSB1cmw7XG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcbiAgICBwcm9zcC5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBwcm9zcC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xuICAgIHJldHVybjtcbn1cbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xuICAgIFwiVUZPXCI6IFtcIjg1NTQ4ODMwOTgwMjE3MjQ2OVwiLCBcIjg1NTQ4OTcxMTYzNTQzMTQ3NVwiXSxcbiAgICBcIkZJT0NcIjogW1wiODA3OTkyNjQwMjQ3MzAwMTE2XCIsIFwiODA4NDUxNTEyMzUxMTk1MTY2XCJdLFxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcbiAgICBcIlBDVFwiOiBbXCI2Njc1NTE0MzM1MDMwMTQ5MjRcIiwgXCI2Njc1NTE0MzM1MDMwMTQ5MjdcIl1cbn07XG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbMV0gKz0gXCJfXCIgKyBwYXJhbWV0ZXJzW2ldO1xuICAgIH1cbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgc2hlZXQuc3JjID0gXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9lZGl0P3VzcD1zaGFyaW5nXCI7XG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGVldC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICB2YXIgc2VydmVySUQ7XG4gICAgdmFyIGNoYW5uZWxJRDtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xuICAgICAgICBpZiAoRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xuICAgICAgICAgICAgY2hhbm5lbElEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBkaXNjb3JkLnNyYyA9IFwiaHR0cHM6Ly9lLndpZGdldGJvdC5pby9jaGFubmVscy9cIiArIHNlcnZlcklEICsgXCIvXCIgKyBjaGFubmVsSUQ7XG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgZGlzY29yZC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMHB4XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gV2lraSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgZnJhbWUuc3JjID0gcGFyYW1ldGVyc1sxXSAmJiBwYXJhbWV0ZXJzWzFdLnRvTG93ZXJDYXNlKCkgPT0gXCJyZXNvdXJjZXNcIiA/IFwiaHR0cHM6Ly9oYW5kYm9vay5hcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb20vd2lraS9jb21tdW5pdHktcmVzb3VyY2VzL2luZGV4Lmh0bWxcIiA6IFwiaHR0cHM6Ly9oYW5kYm9vay5hcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb20vd2lraS9pbmRleC5odG1sXCI7XG4gICAgZnJhbWUuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcbiAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZnJhbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFBydW5QbGFubmVyKHRpbGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBmcmFtZS5zcmMgPSBwYXJhbWV0ZXJzWzFdID8gXCJodHRwczovL3BydW5wbGFubmVyLm9yZy9cIiArIHBhcmFtZXRlcnNbMV0gOiBcImh0dHBzOi8vcHJ1bnBsYW5uZXIub3JnL1wiO1xuICAgIGZyYW1lLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XG4gICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvV2ViLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3BhbiwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVMaW5rLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBGSU9JbnZfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgY29uc3QgYXBpa2V5ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfZ2V0QWxsU3RvcmFnZXMsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2F1dGgvZ3JvdXAvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbMl0gKz0gXCIgXCIgKyBwYXJhbWV0ZXJzW2ldO1xuICAgICAgICB9XG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3N0b3JhZ2UvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvXCIgKyBwYXJhbWV0ZXJzWzJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIEZJT0ludl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW52ZW50b3J5RGF0YTtcbiAgICB0cnkge1xuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWludmVudG9yeURhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XG4gICAgY29uc3Qgdm9sdW1lVG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lQ2FwYWNpdHlcIl07XG4gICAgY29uc3Qgd2VpZ2h0VXNlZCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRMb2FkXCJdO1xuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbnYtaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcbiAgICBib2R5LmlkID0gXCJib2R5XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMl0sIHRhZykpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIGNvbnN0IHVzZXJFbGVtID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSwgdGFnKTtcbiAgICB1c2VyRWxlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcbiAgICBjb25zdCB2b2x1bWVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2b2x1bWVMaW5lLmlkID0gXCJ2b2x1bWUtbGluZVwiO1xuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xuICAgIHZvbHVtZUxpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVm9sdW1lIFwiLCB0YWcpKTtcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XG4gICAgdm9sdW1lQmFyLmlkID0gXCJ2b2x1bWUtYmFyXCI7XG4gICAgdm9sdW1lQmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICB2b2x1bWVCYXIubWF4ID0gMTtcbiAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xuICAgIHZvbHVtZUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4odm9sdW1lVXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgdm9sdW1lVG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgbcKzXCIsIHRhZykpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRMaW5lLmlkID0gXCJ3ZWlnaHQtbGluZVwiO1xuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcbiAgICB3ZWlnaHRMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiV2VpZ2h0IFwiLCB0YWcpKTtcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcbiAgICB3ZWlnaHRCYXIudmFsdWUgPSB3ZWlnaHRVc2VkIC8gd2VpZ2h0VG90YWw7XG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQod2VpZ2h0TGluZSk7XG4gICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xuICAgICAgICBjb25zdCBtYXQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQoaXRlbVtcIk1hdGVyaWFsVGlja2VyXCJdLCB0YWcsIGl0ZW1bXCJNYXRlcmlhbEFtb3VudFwiXSwgdHJ1ZSk7XG4gICAgICAgIGlmIChtYXQpIHtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWF0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBGSU9JbnZfZ2V0QWxsU3RvcmFnZXModGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICB2YXIgdXNlckpTT047XG4gICAgdHJ5IHtcbiAgICAgICAgdXNlckpTT04gPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcbiAgICB9XG4gICAgdmFyIHVzZXJuYW1lcyA9IFtdO1xuICAgIHVzZXJKU09OW1wiR3JvdXBVc2Vyc1wiXS5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICB1c2VybmFtZXMucHVzaCh1c2VyW1wiR3JvdXBVc2VyTmFtZVwiXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2FsbERpc3BsYXksIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2Zpb3dlYi9ncm91cGh1YlwiLCBcIlBPU1RcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBwYXJhbWV0ZXJzWzJdXSwgSlNPTi5zdHJpbmdpZnkodXNlcm5hbWVzKSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gRklPSW52X2FsbERpc3BsYXkodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICB2YXIgZ3JvdXBEYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgICAgZ3JvdXBEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEgZnJvbSBGSU8hXCI7XG4gICAgfVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1szXSArIFwiIEludmVudG9yaWVzXCIpKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBjb25zdCBib2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHlEaXYpO1xuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XG4gICAgaWYgKGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXS5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwbGF5ZXJbXCJVc2VyTmFtZVwiXSkpO1xuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIHBsYXllcltcIkxvY2F0aW9uc1wiXS5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLCBcIlhJVCBJTlZfXCIgKyBwbGF5ZXJbXCJVc2VyTmFtZVwiXSArIFwiX1wiICsgbG9jYXRpb25bXCJMb2NhdGlvbk5hbWVcIl0ucmVwbGFjZSgvIC8sIFwiX1wiKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9keURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcGFyYW1ldGVycy5wb3AoKTtcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xuICAgIGlmICghYVtcIk1hdGVyaWFsVGlja2VyXCJdIHx8ICFiW1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgIU1hdGVyaWFsTmFtZXNbYVtcIk1hdGVyaWFsVGlja2VyXCJdXSB8fCAhTWF0ZXJpYWxOYW1lc1tiW1wiTWF0ZXJpYWxUaWNrZXJcIl1dKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1thW1wiTWF0ZXJpYWxUaWNrZXJcIl1dWzFdID09IE1hdGVyaWFsTmFtZXNbYltcIk1hdGVyaWFsVGlja2VyXCJdXVsxXSkge1xuICAgICAgICByZXR1cm4gYVtcIk1hdGVyaWFsVGlja2VyXCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsVGlja2VyXCJdKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYVtcIk1hdGVyaWFsVGlja2VyXCJdXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbYltcIk1hdGVyaWFsVGlja2VyXCJdXVsxXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvSW52ZW50b3J5LnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3Bhbiwgc2hvd1dhcm5pbmdEaWFsb2cgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgQ0hFQ0tfSU5ESUNBVE9SIH0gZnJvbSBcIi4vQ2hlY2tsaXN0c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIE5vdGVzKHRpbGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZ2VuZXJhdGVOb3Rlc1RhYmxlLCB0aWxlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBub3RlTmFtZTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICAgICAgY29uc3QgdGV4dGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRleHRib3hXcmFwcGVyKTtcbiAgICAgICAgY29uc3QgdGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdGV4dGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dGJveCk7XG4gICAgICAgIHRleHRib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy13cmFwcGVyXCIpO1xuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIGRpc3BTdG9yZWROb3RlLCBbbm90ZU5hbWUsIHRleHRib3hdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVOb3Rlc1RhYmxlKHJlc3VsdCwgdGlsZSkge1xuICAgIGlmICghdGlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5hbWVcIiwgXCJMZW5ndGhcIiwgXCJEZWxldGVcIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSk7XG4gICAgdmFyIGFueU5vdGVzID0gZmFsc2U7XG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIDcpID09IENIRUNLX0lORElDQVRPUikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFueU5vdGVzID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBsZW5ndGhDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGVuZ3RoQ29sdW1uKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKG5hbWUsIFwiWElUIE5PVEVTX1wiICsgbmFtZSkpO1xuICAgICAgICBsZW5ndGhDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKSArIFwiIENoYXJhY3RlclwiICsgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbmFtZV0ubGVuZ3RoID09IDEgPyBcIlwiIDogXCJzXCIpKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgICAgICAgZGVsZXRlQ29sdW1uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hvd1dhcm5pbmdEaWFsb2codGlsZSwgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgbmFtZSArIFwiP1wiLCBcIkNvbmZpcm1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlTm90ZSwgW25hbWUsIFwiXCJdKTtcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGlmICghYW55Tm90ZXMpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDM7XG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIE5vdGVzXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlVGhlblN0b3JlTm90ZShyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3RlTmFtZSA9IHBhcmFtc1swXTtcbiAgICBjb25zdCBub3RlVGV4dCA9IHBhcmFtc1sxXTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xuICAgIH1cbiAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25vdGVOYW1lXSA9IG5vdGVUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogbm90ZVRleHQ7XG4gICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBkaXNwU3RvcmVkTm90ZShyZXN1bHQsIHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSB8fCAhcGFyYW1zWzFdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm90ZU5hbWUgPSBwYXJhbXNbMF07XG4gICAgY29uc3QgdGV4dGJveCA9IHBhcmFtc1sxXTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xuICAgIH1cbiAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtub3RlTmFtZV0pIHtcbiAgICAgICAgdGV4dGJveC52YWx1ZSA9IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbm90ZU5hbWVdO1xuICAgIH1cbiAgICB0ZXh0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlTm90ZSwgW25vdGVOYW1lLCB0ZXh0Ym94LnZhbHVlIHx8IFwiXCJdKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvTm90ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZVRleHRTcGFuLCBzZXRTZXR0aW5ncywgbWFrZVBvcHVwU3BhY2VyLCBjcmVhdGVQb3B1cElucHV0Um93LCBjcmVhdGVQb3B1cENoZWNrYm94Um93LCBnZXRWYWx1ZU9mUG9wdXBSb3csIGdldENoZWNrT2ZQb3B1cFJvdywgY3JlYXRlU21hbGxCdXR0b24gfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vU3R5bGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBTb3J0KHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKCFwYXJhbWV0ZXJzWzFdKSB7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJBZGQgYSBwbGFuZXQgbmFtZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kIVwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0gPSBbXTtcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiQWJicmV2aWF0aW9uXCIsIFwiQ2F0ZWdvcmllc1wiLCBcIk1vZGlmeVwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBOZXdcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNyZWF0ZUFkZEludGVyZmFjZSh0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMpO1xuICAgIH0pO1xuICAgIHZhciBpc1NvcnRpbmcgPSBmYWxzZTtcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmZvckVhY2goc2V0dGluZ3MgPT4ge1xuICAgICAgICBpZiAoIXNldHRpbmdzWzBdIHx8ICFzZXR0aW5nc1sxXSB8fCAhc2V0dGluZ3NbMl0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3NbMV0udG9VcHBlckNhc2UoKSAhPSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpc1NvcnRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGNhdENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgbW9kaWZ5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjYXRDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobW9kaWZ5Q29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHNldHRpbmdzWzBdKSk7XG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gXCJcIjtcbiAgICAgICAgc2V0dGluZ3NbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhdGVnb3J5WzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0ZWdvcmllcyArPSBjYXRlZ29yeVswXSArIFwiLCBcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgY2F0Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNhdGVnb3JpZXMpKTtcbiAgICAgICAgbW9kaWZ5Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVNtYWxsQnV0dG9uKFwiZWRpdFwiLCBjcmVhdGVBZGRJbnRlcmZhY2UsIFt0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMsIHNldHRpbmdzXSkpO1xuICAgICAgICBtb2RpZnlDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlU21hbGxCdXR0b24oXCJkZWxldGVcIiwgZnVuY3Rpb24gKHJlc3VsdCwgcm93LCBzZXR0aW5ncykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl1baV0gPT0gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3Jlc3VsdCwgcm93LCBzZXR0aW5nc10pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGlmICghaXNTb3J0aW5nKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSAzO1xuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBTb3J0aW5nIE9wdGlvbnNcIjtcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gY3JlYXRlQWRkSW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgc2V0dGluZ3MgPSBbXSkge1xuICAgIGNvbnN0IHByZWZpbGxlZCA9IHNldHRpbmdzLmxlbmd0aCAhPSAwO1xuICAgIGNvbnN0IG92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XG4gICAgY29uc3QgZ3JleVN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyZXlTdHJpcGVzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuR3JleVN0cmlwZXMpO1xuICAgIG92ZXJsYXBEaXYuYXBwZW5kQ2hpbGQoZ3JleVN0cmlwZXMpO1xuICAgIHRpbGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXBEaXYsIHRpbGUuZmlyc3RDaGlsZCk7XG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVBvcHVwU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcbiAgICBjb25zdCBhZGRJbnRlcmZhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQ2VudGVySW50ZXJmYWNlKTtcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2VXcmFwcGVyKTtcbiAgICBjb25zdCBhZGRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEludGVyZmFjZS5jbGFzc0xpc3QuYWRkKFwiTkxPckg3aEY1ZmJLSWVzcVczdVNrQT09XCIpO1xuICAgIGFkZEludGVyZmFjZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlKTtcbiAgICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFkZEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNvcnRpbmcgT3B0aW9ucyBFZGl0b3JcIikpO1xuICAgIGFkZEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGFkZEhlYWRlcik7XG4gICAgYWRkSGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJBYmJyZXZpYXRpb25cIiwgcHJlZmlsbGVkID8gc2V0dGluZ3NbMF0gOiBcIlwiLCBcIlRoZSBhYmJyZXZpYXRpb24gc2hvd2luZyBhdCB0aGUgdG9wIG9mIHRoZSBpbnZlbnRvcnkgKEFCQywgQ0FULCBldGMuKVwiKSk7XG4gICAgaWYgKHByZWZpbGxlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldHRpbmdzWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSBcIiArIChpICsgMSkgKyBcIiBOYW1lXCIsIHByZWZpbGxlZCA/IHNldHRpbmdzWzJdW2ldWzBdIDogXCJcIiwgaSA9PSAwID8gXCJUaGUgbmFtZSBvZiB0aGUgZmlyc3QgY2F0ZWdvcnkgZm9yIG1hdGVyaWFsc1wiIDogXCJcIikpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgXCIgKyAoaSArIDEpICsgXCIgTUFUc1wiLCBwcmVmaWxsZWQgPyBzZXR0aW5nc1syXVtpXVsxXS5qb2luKFwiLCBcIikgOiBcIlwiLCBpID09IDAgPyBcIkEgbGlzdCBvZiBtYXRlcmlhbHMgaW4gdGhlIGZpcnN0IGNhdGVnb3J5LiBTZXBhcmF0ZSB0aWNrZXJzIGJ5IGEgY29tbWEuIChSQVQsIERXLCBldGMuKVwiIDogXCJcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSAxIE5hbWVcIiwgXCJcIiwgXCJUaGUgbmFtZSBvZiB0aGUgZmlyc3QgY2F0ZWdvcnkgZm9yIG1hdGVyaWFscy5cIikpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSAxIE1BVHNcIiwgXCJcIiwgXCJBIGxpc3Qgb2YgbWF0ZXJpYWxzIGluIHRoZSBmaXJzdCBjYXRlZ29yeS4gU2VwYXJhdGUgdGlja2VycyBieSBhIGNvbW1hLiAoUkFULCBEVywgZXRjLilcIikpO1xuICAgIH1cbiAgICBjb25zdCBhZGRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFJvdyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBDYXRlZ29yeVwiO1xuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XG4gICAgYWRkUm93LmFwcGVuZENoaWxkKGFkZExhYmVsKTtcbiAgICBjb25zdCBhZGRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkSW5wdXREaXYpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgQ0FURUdPUllcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGFkZElucHV0RGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhdE51bWJlciA9IChmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDMpIC8gMjtcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgY2F0TnVtYmVyICsgXCIgTmFtZVwiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDRdKTtcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgY2F0TnVtYmVyICsgXCIgTUFUc1wiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDRdKTtcbiAgICB9KTtcbiAgICBjb25zdCBidXJuUm93ID0gY3JlYXRlUG9wdXBDaGVja2JveFJvdyhcIkJ1cm4gU29ydGluZ1wiLCBzZXR0aW5nc1szXSB8fCBmYWxzZSwgXCJBZGQgYnVybiBzb3J0aW5nIGFzIGEgc2Vjb25kYXJ5IHNvcnRpbmcgbWV0aG9kLiBCdXJuIGNhdGVnb3JpZXMgd2lsbCBzaG93IHVuZGVyIHRoZSBjYXRlZ29yaWVzIGRlZmluZWQgYWJvdmUuXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnVyblJvdyk7XG4gICAgY29uc3QgemVyb1JvdyA9IGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3coXCJTaG93IFplcm9zXCIsIHNldHRpbmdzWzRdIHx8IGZhbHNlLCBcIlNob3cgaXRlbSBpY29ucyB0aGF0IGhhdmUgemVybyBxdWFudGl0eS5cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh6ZXJvUm93KTtcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XG4gICAgY29uc3Qgc2F2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNhdmVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ01EXCI7XG4gICAgc2F2ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlTGFiZWwpO1xuICAgIGNvbnN0IHNhdmVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F2ZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlSW5wdXREaXYpO1xuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNBVkVcIjtcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XG4gICAgc2F2ZUlucHV0RGl2LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaXRlbUFiYnJldmlhdGlvbiA9IGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zdCBzb3J0aW5nSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gNDsgaSArPSAyKSB7XG4gICAgICAgICAgICBpZiAoIWZvcm0uY2hpbGRyZW5baV0gfHwgIWZvcm0uY2hpbGRyZW5baSArIDFdKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baV0pID09IFwiXCIgfHwgZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baSArIDFdKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0aW5nSW5mby5wdXNoKFtnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpXSksIGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2kgKyAxXSkucmVwbGFjZSgvIC9nLCBcIlwiKS5zcGxpdChcIixcIildKTtcbiAgICAgICAgfVxuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xuICAgICAgICBpZiAoIWl0ZW1BYmJyZXZpYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZmlsbGVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXVtpXSA9PSBzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdW2ldID0gW2l0ZW1BYmJyZXZpYXRpb24sIHBhcmFtZXRlcnNbMV0sIHNvcnRpbmdJbmZvLCBnZXRDaGVja09mUG9wdXBSb3coYnVyblJvdyksIGdldENoZWNrT2ZQb3B1cFJvdyh6ZXJvUm93KV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0ucHVzaChbaXRlbUFiYnJldmlhdGlvbiwgcGFyYW1ldGVyc1sxXSwgc29ydGluZ0luZm8sIGdldENoZWNrT2ZQb3B1cFJvdyhidXJuUm93KSwgZ2V0Q2hlY2tPZlBvcHVwUm93KHplcm9Sb3cpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICAgICAgU29ydCh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVBvcHVwU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Tb3J0LnRzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiwgbWFrZVBvcHVwU3BhY2VyLCBjcmVhdGVQb3B1cElucHV0Um93LCBnZXRWYWx1ZU9mUG9wdXBSb3csIHNob3dXYXJuaW5nRGlhbG9nIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gQ29tbWFuZExpc3RzKHRpbGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTGlzdHNcIiwgZ2VuZXJhdGVMaXN0VGFibGUsIHRpbGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1MaXN0c1wiLCBkaXNwU3RvcmVkTGlzdCwgW3RpbGUsIHBhcmFtZXRlcnNdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0VGFibGUocmVzdWx0LCB0aWxlKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkxlbmd0aFwiLCBcIkRlbGV0ZVwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUctTGlzdHNcIl0pKTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGxlbmd0aENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZW5ndGhDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZSwgXCJYSVQgTElTVF9cIiArIG5hbWUpKTtcbiAgICAgICAgbGVuZ3RoQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbmFtZV0ubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCkpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBkZWxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzaG93V2FybmluZ0RpYWxvZyh0aWxlLCBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyBuYW1lICsgXCI/XCIsIFwiQ29uZmlybVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1MaXN0c1wiLCB1cGRhdGVUaGVuU3RvcmVMaXN0LCBbbmFtZSwgXCJcIl0pO1xuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChuYW1lcy5sZW5ndGggPT0gMCkge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMztcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gQ29tbWFuZCBMaXN0cy5cIjtcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gdXBkYXRlVGhlblN0b3JlTGlzdChyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3RlTmFtZSA9IHBhcmFtc1swXTtcbiAgICBjb25zdCBub3RlVGV4dCA9IHBhcmFtc1sxXTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTGlzdHNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXSA9IHt9O1xuICAgIH1cbiAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW25vdGVOYW1lXSA9IG5vdGVUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogbm90ZVRleHQ7XG4gICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBkaXNwU3RvcmVkTGlzdChyZXN1bHQsIHBhcmFtKSB7XG4gICAgY29uc3QgdGlsZSA9IHBhcmFtWzBdO1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbVsxXTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IChwYXJhbWV0ZXJzLnNsaWNlKDEpKS5qb2luKFwiX1wiKTtcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTGlzdHNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXSA9IHt9O1xuICAgIH1cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJcIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGlmIChyZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXSAmJiByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdLmZvckVhY2gobGlua0luZm8gPT4ge1xuICAgICAgICAgICAgaWYgKCFsaW5rSW5mb1swXSB8fCAhbGlua0luZm9bMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICB0ZXh0Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobGlua0luZm9bMF0sIGxpbmtJbmZvWzFdKSk7XG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMTtcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gQ29tbWFuZHMuXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjcmVhdGVFZGl0SW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0gfHwgW10pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVFZGl0SW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgc2V0dGluZ3MgPSBbXSkge1xuICAgIGNvbnN0IHByZWZpbGxlZCA9IHNldHRpbmdzLmxlbmd0aCAhPSAwO1xuICAgIGNvbnN0IGxpc3ROYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xuICAgIGNvbnN0IG92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XG4gICAgY29uc3QgZ3JleVN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyZXlTdHJpcGVzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuR3JleVN0cmlwZXMpO1xuICAgIG92ZXJsYXBEaXYuYXBwZW5kQ2hpbGQoZ3JleVN0cmlwZXMpO1xuICAgIHRpbGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXBEaXYsIHRpbGUuZmlyc3RDaGlsZCk7XG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVBvcHVwU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcbiAgICBjb25zdCBhZGRJbnRlcmZhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQ2VudGVySW50ZXJmYWNlKTtcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2VXcmFwcGVyKTtcbiAgICBjb25zdCBhZGRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEludGVyZmFjZS5jbGFzc0xpc3QuYWRkKFwiTkxPckg3aEY1ZmJLSWVzcVczdVNrQT09XCIpO1xuICAgIGFkZEludGVyZmFjZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlKTtcbiAgICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFkZEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbW1hbmQgTGlzdCBFZGl0b3JcIikpO1xuICAgIGFkZEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGFkZEhlYWRlcik7XG4gICAgYWRkSGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBpZiAocHJlZmlsbGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0dGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyAoaSArIDEpICsgXCIgTGFiZWxcIiwgc2V0dGluZ3NbaV1bMF0sIGkgPT0gMCA/IFwiVGhlIGxhYmVsIG9mIHRoZSBmaXJzdCBsaW5rLlwiIDogXCJcIikpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayBcIiArIChpICsgMSkgKyBcIiBDb21tYW5kXCIsIHNldHRpbmdzW2ldWzFdLCBpID09IDAgPyBcIlRoZSBjb21tYW5kIG9wZW5lZCBieSB0aGUgZmlyc3QgbGluayAoZXg6IENYIE5DMSlcIiA6IFwiXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayAxIExhYmVsXCIsIFwiXCIsIFwiVGhlIGxhYmVsIG9mIHRoZSBmaXJzdCBsaW5rLlwiKSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgMSBDb21tYW5kXCIsIFwiXCIsIFwiVGhlIGNvbW1hbmQgb3BlbmVkIGJ5IHRoZSBmaXJzdCBsaW5rIChleDogQ1ggTkMxKVwiKSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkUm93KTtcbiAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIExpbmtcIjtcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xuICAgIGFkZFJvdy5hcHBlbmRDaGlsZChhZGRMYWJlbCk7XG4gICAgY29uc3QgYWRkSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZElucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XG4gICAgYWRkUm93LmFwcGVuZENoaWxkKGFkZElucHV0RGl2KTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIExJTktcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIGFkZElucHV0RGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhdE51bWJlciA9IChmb3JtLmNoaWxkcmVuLmxlbmd0aCkgLyAyO1xuICAgICAgICBmb3JtLmluc2VydEJlZm9yZShjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayBcIiArIGNhdE51bWJlciArIFwiIExhYmVsXCIpLCBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMl0pO1xuICAgICAgICBmb3JtLmluc2VydEJlZm9yZShjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayBcIiArIGNhdE51bWJlciArIFwiIENvbW1hbmRcIiksIGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAyXSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc2F2ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F2ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVSb3cpO1xuICAgIGNvbnN0IHNhdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzYXZlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNNRFwiO1xuICAgIHNhdmVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUxhYmVsKTtcbiAgICBjb25zdCBzYXZlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUlucHV0RGl2KTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIHNhdmVJbnB1dERpdi5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRJbmZvID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAyOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGlmICghZm9ybS5jaGlsZHJlbltpXSB8fCAhZm9ybS5jaGlsZHJlbltpICsgMV0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpXSkgPT0gXCJcIiB8fCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1hbmRJbmZvLnB1c2goW2dldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSwgZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baSArIDFdKV0pO1xuICAgICAgICB9XG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQob3ZlcmxhcERpdik7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdID0gY29tbWFuZEluZm87XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIENvbW1hbmRMaXN0cyh0aWxlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG4gICAgcmV0dXJuO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50c1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vU3R5bGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBIZWxwKHRpbGUpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGNvbnN0IGZlYXR1cmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZlYXR1cmVIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGZWF0dXJlc1wiKSk7XG4gICAgZmVhdHVyZUhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChmZWF0dXJlSGVhZGVyKTtcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgdmFyIGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOYW1lXCIsIFwiRGVzY3JpcHRpb25cIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJMTSBVbml0IFByaWNlc1wiLCBcIkRpc3BsYXlzIHBlciB1bml0IHByaWNlcyBvbiB0aGUgbG9jYWwgbWFya2V0LlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiTE0gUG9zdGluZyBVbml0IFByaWNlc1wiLCBcIkRpc3BsYWNlcyBwZXIgdW5pdCBwcmljZXMgd2hlbiBwb3N0aW5nIGFkcy5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIkNvbnRyYWN0IERyYWZ0c1wiLCBcIkRpc3BsYXlzIHBlciB1bml0IHByaWNlcyB3aGVuIGNyZWF0aW5nIENPTlRELlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiT3JkZXIgRVRBc1wiLCBcIkRpc3BsYXlzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gcHJvZHVjdGlvbiBvcmRlcnMgYXJlIGNvbXBsZXRlLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiRmxpZ2h0IEVUQXNcIiwgXCJEaXNwbGF5cyB0aGUgYXJyaXZhbCB0aW1lIHdoZW4gcGxhbm5pbmcgYSBmbGlnaHQuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJGbGVldCBFVEFzXCIsIFwiRGlzcGxheXMgdGhlIGFycml2YWwgdGltZSBvZiB5b3VyIGZsZWV0LlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiUXVldWUgTG9hZFwiLCBcIlF1ZXVlIFBlcmNlbnQgRGlzcGxheS5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIkNvbnN1bWFibGUgVGltZXJzXCIsIFwiQWRkcyB0aGUgbnVtYmVyIG9mIGRheXMgb2YgY29uc3VtYWJsZXMgbGVmdCB0byBXRiBidWZmZXJzLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiTm90aWZpY2F0aW9uc1wiLCBcIlNob3J0ZW5zIGFuZCBjb2xvciBjb2RlcyBub3RpZmljYXRpb25zLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiU2NyZWVuIFVucGFja1wiLCBcIlVucGFja3MgdGhlIGxpc3Qgb2Ygc2NyZWVucyB0byB0aGUgdG9wIGJhci5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIkltYWdlIENyZWF0b3JcIiwgXCJMb2FkcyBpbWFnZXMgYW5kIEdJRnMgaW50byBjaGF0cy5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIkludmVudG9yeSBPcmdhbml6ZXJcIiwgXCJBbGxvd3MgZm9yIGN1c3RvbSBzb3J0aW5nIG9mIGludmVudG9yaWVzLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiQ29tbWFuZCBDb3JyZWN0ZXJcIiwgXCJBbGxvd3MgZm9yIHBsYW5ldCBuYW1lcyBpbiBzdG9jayBjb21tYW5kcyAoTW9udGVtLCBQcm9taXRvciwgZXRjLilcIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlNpZGViYXJcIiwgXCJBbGxvd3MgdGhlIHVzZXIgdG8gY3VzdG9taXplIHRoZSBsZWZ0IHNpZGViYXIgaW4gWElUIFNFVFRJTkdTLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiUGVuZGluZyBDb250cmFjdHNcIiwgXCJEaXNwbGF5cyB0aGUgbmFtZSBvZiB0aGUgb3RoZXIgcGFydHkgaW4gcGVuZGluZyBjb250cmFjdHMuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJDb21wYWN0ZWQgVUlcIiwgXCJNaW5pbWl6ZXMgdW51c2VkIHBvcnRpb25zIG9mIHRoZSBVSVwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiSGVhZGVyIE1pbmltaXplclwiLCBcIkFsbG93cyBtaW5pbWl6aW5nIGNvbnRyYWN0IGFuZCBDWCBoZWFkZXJzXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJDb2xvciBTY2hlbWVzXCIsIFwiQ2hhbmdlcyB0aGUgY29sb3JzIHVzZWQgb24gbWF0ZXJpYWwgaWNvbnMuIFNldCBpbiBYSVQgU0VUVElOR1MuXCJdKTtcbiAgICBjb25zdCB4aXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHhpdEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlhJVCBDb21tYW5kc1wiKSk7XG4gICAgeGl0SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHhpdEhlYWRlcik7XG4gICAgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkNvbW1hbmRcIiwgXCJQYXJhbWV0ZXJzXCIsIFwiRGVzY3JpcHRpb25cIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIkJ1cm5cIiwgXCJYSVQgQlVSTlwiLCBcIlBsYW5ldFwiLCBcIlNob3dzIHRoZSBudW1iZXIgb2YgZGF5cyBvZiBjb25zdW1hYmxlcyBsZWZ0LlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiUmVwYWlyc1wiLCBcIlhJVCBSRVBBSVJTXCIsIFwiUGxhbmV0IChvcHRpb25hbClcIiwgXCJTaG93cyB0aGUgbWF0ZXJpYWxzIHRvIHJlcGFpciBidWlsZGluZ3MuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJDb250cmFjdHNcIiwgXCJYSVQgQ09OVFJBQ1RTXCIsIFwiTm9uZVwiLCBcIlNob3dzIHBlbmRpbmcgY29udHJhY3RzLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiRklPIEludmVudG9yeVwiLCBcIlhJVCBJTlZcIiwgXCJVc2VybmFtZSwgUGxhbmV0XCIsIFwiU2hvd3MgdGhlIGludmVudG9yeSBvZiBhbm90aGVyIEZJTyB1c2VyLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiTm90ZXNcIiwgXCJYSVQgTk9URVNcIiwgXCJOb3RlIE5hbWUgKG9wdGlvbmFsKVwiLCBcIlByb3ZpZGVzIGEgdGV4dCBhcmVhIHRvIHR5cGUgYSBub3RlIGluLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiQ29tbWFuZCBMaXN0c1wiLCBcIlhJVCBMSVNUXCIsIFwiTGlzdCBOYW1lIChvcHRpb25hbClcIiwgXCJQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSBsaXN0IG9mIGNvbW1hbmQgbGlua3MuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJTZXR0aW5nc1wiLCBcIlhJVCBTRVRUSU5HU1wiLCBcIk5vbmVcIiwgXCJPcGVuIFBNTUcgc2V0dGluZ3MuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJDYWxjdWxhdG9yXCIsIFwiWElUIENBTENcIiwgXCJOb25lXCIsIFwiUHJvdmlkZXMgYW4gaW5nYW1lIGNhbGN1bGF0b3IuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJDaGF0XCIsIFwiWElUIENIQVRcIiwgXCJQbGFuZXRcIiwgXCJQcm92aWRlcyByZWFkLW9ubHkgYWNjZXNzIHRvIGEgcGxhbmV0IGNoYXQuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJEZWJ1Z1wiLCBcIlhJVCBERUJVR1wiLCBcIk5vbmVcIiwgXCJEZWJ1Z2dpbmcgbWVudS5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlN0YXJ0XCIsIFwiWElUIFNUQVJUXCIsIFwiTm9uZVwiLCBcIkZpcnN0IHRpbWUgdXNlciBwb3B1cC5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlByVU4gUGxhbm5lclwiLCBcIlhJVCBQTEFOTkVSXCIsIFwiU3BlY2lmaWMgUGFnZSAob3B0aW9uYWwpXCIsIFwiTGlua3MgdG8gUHJVTiBQbGFubmVyLlwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiRGlzY29yZFwiLCBcIlhJVCBESVNDT1JEXCIsIFwiU2VydmVyIElEL05hbWUsIENoYW5uZWwgSURcIiwgXCJBbGxvd3MgeW91IHRvIGNoYXQgaW4gRGlzY29yZC5cIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlNoZWV0c1wiLCBcIlhJVCBTSEVFVFNcIiwgXCJTaGVldCBJRFwiLCBcIkNvbm5lY3RzIHRvIEdvb2dsZSBTaGVldHMuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJQcm9zcGVyaXR5XCIsIFwiWElUIFBST1NQRVJJVFlcIiwgXCJOb25lXCIsIFwiQWNjZXNzZXMgdGhlIFByb3NwZXJpdHkgbWFwIHRvb2wuXCJdKTtcbiAgICBjcmVhdGVUYWJsZVJvdyhib2R5LCBbXCJQclVOXCIsIFwiWElUIFBSVU5cIiwgXCJOb25lXCIsIFwiT3BlbnMgUHJVTi4uLiBpbiBQclVOIVwiXSk7XG4gICAgY29uc3QgYnVnSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBidWdIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb21tb24gSXNzdWVzXCIpKTtcbiAgICBidWdIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVnSGVhZGVyKTtcbiAgICB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJEZXNjcmlwdGlvblwiLCBcIkV4cGxhbmF0aW9uXCIsIFwiU29sdXRpb25cIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlNlZWluZyBncmVlbiBidWZmZXJzXCIsIFwiUE1NRyBpcyBjcmFzaGluZ1wiLCBcIkNvbnRhY3QgUGlCb3kzMTQgb24gRGlzY29yZFwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiRklPIGRhdGEgbm90IGxvYWRpbmdcIiwgXCJGSU8gc2VydmVyIHN0cnVnZ2xpbmcgb3Igd3JvbmcgYXV0aGVudGljYXRpb25cIiwgXCJDaGVjayBGSU8gdXNlcm5hbWUgYW5kIEFQSSBrZXksIHRoZW4gY2hlY2sgRklPIHNlcnZlciBzdGF0dXMgb24gRGlzY29yZFwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiU29tZSBjb250cmFjdHMgbWlzc2luZyBvbiBYSVQgQ09OVFJBQ1RTXCIsIFwiS25vd24gYnVnIHdpdGggRklPXCIsIFwiUmVmcmVzaFwiXSk7XG4gICAgY3JlYXRlVGFibGVSb3coYm9keSwgW1wiV2FudCB0byBjbGVhciBkYXRhXCIsIFwiTi9BXCIsIFwiQ2xpY2sgb24gZXh0ZW5zaW9uIGljb24gaW4gdXBwZXIgcmlnaHQsIGNsaWNrIFxcXCJDbGVhciBTZXR0aW5nc1xcXCJcIl0pO1xuICAgIGNyZWF0ZVRhYmxlUm93KGJvZHksIFtcIlNvbWV0aGluZyBlbHNlXCIsIFwiTi9BXCIsIFwiQXNrIG9uIERpc2NvcmQsIHBpbmcgUGlCb3kzMTQuXCJdKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjcmVhdGVUYWJsZVJvdyhib2R5LCBjb250ZW50cykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBjb250ZW50cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4odGV4dCkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHJldHVybjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9IZWxwLnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIE9yZGVyRVRBcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcbiAgICB9XG4gICAgYmVhdXRpZnlPcmRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHF1ZXVlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2RTbG90cyA9IEFycmF5LmZyb20ocXVldWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBsaW5lVGltZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IDA7XG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2RJdGVtLmNsYXNzTGlzdC5jb250YWlucyhTZWxlY3Rvci5Qcm9kSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2RJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVsYXBzZWQgKz0gbWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24ocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24gKyB0aW1lRWxhcHNlZCl9KWAsIHRoaXMudGFnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihkdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbil9KWAsIHRoaXMudGFnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5RdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL09yZGVyRVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcGFyc2VCYXNlTmFtZSwgZmluZEJ1cm5BbW91bnQsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBmaW5kSW52ZW50b3J5QW1vdW50LCBjcmVhdGVUZXh0U3BhbiwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmV4cG9ydCBjbGFzcyBDb25zdW1hYmxlVGltZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYnVybiwgdGhyZXNob2xkcykge1xuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMudGhyZXNob2xkcyA9IHRocmVzaG9sZHM7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBpZiAodGhpcy5idXJuW3RoaXMudXNlcm5hbWVdID09IHVuZGVmaW5lZCB8fCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIldGXCIpO1xuICAgICAgICBpZiAoIWJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgZ2VuZXJhdGVCdXJucyhidWZmZXIsIHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXSwgdGhpcy50aHJlc2hvbGRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCdXJucyhidWZmZXIsIGJ1cm4sIHRocmVzaG9sZHMpIHtcbiAgICBpZiAoYnVmZmVyLmNsYXNzTGlzdC5jb250YWlucyhcInBiLWxvYWRlZFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZSk7XG4gICAgaWYgKCFuYW1lRWxlbSB8fCAhbmFtZUVsZW0udGV4dENvbnRlbnQpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBuYW1lID0gcGFyc2VCYXNlTmFtZShuYW1lRWxlbS50ZXh0Q29udGVudCk7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRoZWFkID4gdHJcIikpO1xuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbEhlYWRlciA9IGhlYWRlci5jaGlsZHJlblsyXTtcbiAgICAgICAgY29uc3QgYnVybkhlYWRlciA9IGhlYWRlci5jaGlsZHJlblszXTtcbiAgICAgICAgdG90YWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvdGFsXCI7XG4gICAgICAgIGlmIChidXJuSGVhZGVyLmNoaWxkcmVuICE9IHVuZGVmaW5lZCAmJiBidXJuSGVhZGVyLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYnVybkhlYWRlci5yZW1vdmVDaGlsZChidXJuSGVhZGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBidXJuSGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJuXCI7XG4gICAgfSk7XG4gICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KG5hbWUsIGJ1cm4pO1xuICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0Um93LmNoaWxkRWxlbWVudENvdW50IDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bNF07XG4gICAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcbiAgICAgICAgaWYgKG91dHB1dERhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xuICAgICAgICAgICAgdmFyIGludmVudG9yeUFtb3VudCA9IGZpbmRJbnZlbnRvcnlBbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcbiAgICAgICAgICAgIHZhciBidXJuQW1vdW50ID0gZmluZEJ1cm5BbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcbiAgICAgICAgICAgIHZhciBkYXlzTGVmdDtcbiAgICAgICAgICAgIGlmIChidXJuQW1vdW50ICE9IDApIHtcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoaW52ZW50b3J5QW1vdW50IC8gYnVybkFtb3VudCk7XG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4tZ3JlZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gZGF5c0xlZnQudG9GaXhlZCgwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IG91dHB1dERhdGEuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0RGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihkYXlzTGVmdCkpO1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHRvdGFsRGF0YS5maXJzdENoaWxkO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRvdGFsRGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvdGFsRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihidXJuQW1vdW50ID09IDAgPyBcIlwiIDogYnVybkFtb3VudC50b0ZpeGVkKDIpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidWZmZXIuY2xhc3NMaXN0LmFkZChcInBiLWxvYWRlZFwiKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIEZsZWV0RVRBcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1mbHQtZXRhXCI7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkZMVFwiKTtcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBidWZmZXIgb2YgYnVmZmVycykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldGFEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzddO1xuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIGV0YURhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtldGF9KWAsIHRoaXMudGFnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsZWV0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxzLCBDdXJyZW5jeVN5bWJvbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIFBvc3RMTSB7XG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cHMgPSBbXTtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXBvc3QtbG0tcHJpY2VcIjtcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2xlYW51cHNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNUG9zdEZvcm0pKS5mb3JFYWNoKGZvcm0gPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFycmF5LmZyb20oZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiU3RhdGljSW5wdXRfX3N0YXRpY19fX1ZwbjF1MG4gZm9ybXNfX3N0YXRpY19fX2E0YmlEaTRcIikpO1xuICAgICAgICAgICAgdmFyIHNoaXBwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBcIlNISVBQSU5HXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb21tb2RpdHkgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ29tbW9kaXR5J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQW1vdW50J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG90YWxQcmljZUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J1RvdGFsIHByaWNlJ11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDdXJyZW5jeSddXS8vc2VsZWN0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gICAgICAgICAgICB2YXIgZGlzcGxheUVsZW1lbnQgPSBjcmVhdGVUZXh0U3BhbihcIi0tXCIsIHRoaXMudGFnKTtcbiAgICAgICAgICAgIGlmIChzaGlwcGluZyAmJiBjb21tb2RpdHkudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdEluZm8gPSBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdEluZm8gPT0gdW5kZWZpbmVkIHx8IG1hdEluZm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBtYXRJbmZvWzFdID49IG1hdEluZm9bMl0gPyBcInRcIiA6IFwibcKzXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodHZvbHVtZSA9IE1hdGgubWF4KG1hdEluZm9bMV0sIG1hdEluZm9bMl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4od2VpZ2h0dm9sdW1lKSB8fCBpc05hTih0b3RhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gXCItLSB0IHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArIFwiLS0gLyB0XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIFwiICsgdW5pdCArIFwiIHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiAvIFwiICsgdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLnByaWNlcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tb2RpdHkudmFsdWUgIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IHRoaXMucHJpY2VzW2NvbW1vZGl0eS52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbW91bnQgKyBcIiBcIiA9PSBcIk5hTiBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIiB8IFwiICsgKHByaWNlICogYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBUb3RhbCBDb3JwXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIiArIChwcmljZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUG9zdExNLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2hpcHBpbmctYWRzXCI7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyg/OlNISVBQSU5HKVxccyhbXFxkLC5dKyl0XFxzXFwvXFxzKFtcXGQsLl0rKW3Cs1xcc0BcXHMoW1xcZCwuXSspXFxzW0EtWl0rXFxzZnJvbS8pO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b25uYWdlID0gcGFyc2VGbG9hdChtYXRjaGVzWzFdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gcGFyc2VGbG9hdChtYXRjaGVzWzJdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRvbm5hZ2UgPiBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gdG9ubmFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAnbcKzJztcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQodG90YWxDb3N0LnJlcGxhY2UoL1ssLl0vZywgJycpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJJdGVtID0gKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0vJHt1bml0fSlgLCB0aGlzLnRhZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBwYXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIFF1ZXVlTG9hZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1xdWV1ZS1sb2FkXCI7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVF1ZXVlTG9hZCgpO1xuICAgIH1cbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xuICAgICAgICBjb25zdCBldGFDZWxsID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5pdGVtKDUpO1xuICAgICAgICBpZiAoZXRhQ2VsbCkge1xuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgICAgICAgICBpZiAoZXRhU3Bhbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IHBhcnNlRHVyYXRpb24oZXRhU3Bhbi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY2FsY3VsYXRlUXVldWVMb2FkKCkge1xuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcbiAgICAgICAgdGFibGVzLmZvckVhY2godGFibGUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbChcInRib2R5Om50aC1vZi10eXBlKDIpID4gdHJcIikpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgbjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgaWYgKHRvdGFsVGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAoZXRhIC8gdG90YWxUaW1lICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RmllbGQgJiYgZXRhID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVRleHRTcGFuKGAgJHtwZXJjZW50fSVgLCB0aGlzLnRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUXVldWVMb2FkLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IE1hdGVyaWFscyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1ub3RzXCI7XG4gICAgfVxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLk5vdGlmaWNhdGlvbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQgJiYgZWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBmb3VuZFR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIFNlYXJjaGVycy5mb3JFYWNoKHNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaChuZXcgUmVnRXhwKHNlYXJjaFswXSkpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4udGV4dENvbnRlbnQgPSBzZWFyY2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLmNvbG9yID0gc2VhcmNoWzJdO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0eXBlU3BhbiwgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm90VGV4dCA9IGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RUZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9DaGFtYmVyIG9mIEdsb2JhbCBDb21tZXJjZS8sIFwiQ09HQ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWFyY2hbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcm9kdWNlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2F0IHlvdXIgYmFzZSAvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9PbmUgLywgXCIxIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gaGF2ZSBiZWVuLywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHVuaXRbc10/IG9mLywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyAoW0EteiAtXSspIHByb2R1Y2VkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFkZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC95b3VyIChbQS16IC1dKykgb3JkZXIvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZGVyIGZpbGxlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBDb21tb2RpdHkgRXhjaGFuZ2UvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvKFtBLXogLV0rKSBvcmRlci8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWNjZXB0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdGhlLywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGxvY2FsIG1hcmtldC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29udHJhY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9Zb3VyIHBhcnRuZXIgLywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVkIGF0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvaXRzIGRlc3RpbmF0aW9uIC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29nY1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW1iZXIgb2YgZ2xvYmFsIGNvbW1lcmNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGEgbmV3IGVjb25vbWljIHByb2dyYW0vLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gQWR2ZXJ0aXNpbmcgQ2FtcGFpZ246LywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gbm90VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuY29uc3QgU2VhcmNoZXJzID0gW1xuICAgIFtcImNvbnRyYWN0XCIsIFwiY29udHJhY3RcIiwgXCJyZ2IoMjQ3LCAxNjYsIDApXCJdLFxuICAgIFtcIm91ciBjb3Jwb3JhdGlvblwiLCBcImNvcnBcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcImFjY2VwdGVkIG91ciBpbnZpdGF0aW9uXCIsIFwiY29ycFwiLCBcIiM4ZjUyY2NcIl0sXG4gICAgW1wicHJvZHVjZWRcIiwgXCJwcm9kdWNlZFwiLCBcIiMzZmEyZGVcIl0sXG4gICAgW1wiYWNjZXB0ZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxuICAgIFtcImV4cGlyZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxuICAgIFtcInRyYWRlXCIsIFwidHJhZGVcIiwgXCIjMDA4MDAwXCJdLFxuICAgIFtcIm9yZGVyIGZpbGxlZFwiLCBcIm9yZGVyXCIsIFwiI2NjMjkyOVwiXSxcbiAgICBbXCJhcnJpdmVkIGF0XCIsIFwiYXJyaXZhbFwiLCBcIiNiMzM2YjNcIl0sXG4gICAgW1wicmVwb3J0XCIsIFwicmVwb3J0XCIsIFwiIzAwYWE3N1wiXSxcbiAgICBbXCJlbGVjdGlvblwiLCBcImVsZWN0aW9uXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJydWxlc1wiLCBcInJ1bGVzXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJjb2djXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXG4gICAgW1wiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJleHBlcnRcIiwgXCJleHBlcnRcIiwgXCIjZmY4YTAwXCJdLFxuICAgIFtcInBvcHVsYXRpb24gaW5mcmFzdHJ1Y3R1cmUgcHJvamVjdFwiLCBcIlBPUElcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcImFwZXhcIiwgXCJ1cGRhdGVcIiwgXCIjMDBhYTc3XCJdLFxuICAgIFtcIndhcmVob3VzXCIsIFwid2FyXCIsIFwiI2NjMjkyOVwiXSxcbiAgICBbXCJzaGlwYnVpbGRpbmcgcHJvamVjdFwiLCBcInNoaXBcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcInBsYW5ldGFyeSBwcm9qZWN0XCIsIFwiaW5mcmFcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcImNvbnN1bWFibGUgc3VwcGxpZXNcIiwgXCJzdXBwbGllc1wiLCBcIiNiMzdiMzJcIl1cbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RpZmljYXRpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgY3JlYXRlTm9kZSB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCBjbGFzcyBTY3JlZW5VbnBhY2sge1xuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihleGNsdXNpb25zKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zY3JlZW5zXCI7XG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcbiAgICAgICAgdGhpcy5leGNsdXNpb25zID0gW107XG4gICAgICAgIGV4Y2x1c2lvbnMuZm9yRWFjaChleCA9PiB7IHRoaXMuZXhjbHVzaW9ucy5wdXNoKGV4LnRvVXBwZXJDYXNlKCkpOyB9KTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5TY3JlZW5Db250cm9scyk7XG4gICAgICAgIGlmIChuYXZiYXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXZiYXIuY2hpbGRyZW5bbmF2YmFyLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYXZiYXJJdGVtQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xuICAgICAgICBjb25zdCBuYml0VW5kZXJsaW5lQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgbWVudSA9IG5hdmJhci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXTtcbiAgICAgICAgdmFyIGxpbmtzID0gW107XG4gICAgICAgIEFycmF5LmZyb20obWVudS5jaGlsZHJlbikuZm9yRWFjaCgoY24pID0+IHtcbiAgICAgICAgICAgIGlmIChjbi5jaGlsZHJlbi5sZW5ndGggPT0gNCAmJiAhdGhpcy5leGNsdXNpb25zLmluY2x1ZGVzKFN0cmluZyhjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwpLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICBzcGFjZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChzcGFjZXJEaXYpO1xuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbSA9IGNyZWF0ZU5vZGUoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NyZWVuVW5wYWNrLnRzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgc2hvd0J1ZmZlciwgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2lkZWJhclwiO1xuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zID0gW1wiQlNcIiwgXCJDT05UXCIsIFwiQ09NXCIsIFwiQ09SUFwiLCBcIkNYTFwiLCBcIkZJTlwiLCBcIkZMVFwiLCBcIklOVlwiLCBcIk1BUFwiLCBcIlBST0RcIiwgXCJDTURTXCJdO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgIH1cbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTGVmdFNpZGViYXIpO1xuICAgICAgICBpZiAoIXRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XG4gICAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZpcnN0Q2hpbGQgIT0gbnVsbCAmJiAoY2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09PSBkZWZhdWx0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWVsZW1lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaWRlYmFyLmNoaWxkcmVuW3NpZGViYXIuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbkluZm8gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dFNwYW4oYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpLCB0aGlzLnRhZyk7XG4gICAgICAgICAgICBjb25zdCBzbGl2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhckJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNsaXZlcik7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBzaG93QnVmZmVyKGJ1dHRvbkluZm9bMV0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBQbGFuZXRDb21tYW5kcywgUGxhbmV0TmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuZXhwb3J0IGNsYXNzIENvbW1hbmRDb3JyZWN0ZXIge1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyQXJlYSkpLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIGlmIChidWZmZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlckZpZWxkID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZXh0ID0gYnVmZmVyRmllbGQudmFsdWUudG9VcHBlckNhc2UoKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChQbGFuZXRDb21tYW5kcy5pbmNsdWRlcyhidWZmZXJUZXh0LnNwbGl0KFwiIFwiKVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFBsYW5ldE5hbWVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclRleHQuaW5jbHVkZXMoXCIgXCIgKyBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRleHQgPSBidWZmZXJUZXh0LnJlcGxhY2UoXCIgXCIgKyBuYW1lLCBcIiBcIiArIFBsYW5ldE5hbWVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlKGJ1ZmZlckZpZWxkLCBidWZmZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50ID09IG51bGwgfHwgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgc2hvd0J1ZmZlciB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNhbGNcIjtcbiAgICB9XG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgY2FsY1RhZ3MgPSBbXCJMTVwiLCBcIkNYXCIsIFwiWElUXCJdO1xuICAgICAgICBjYWxjVGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyh0YWcpO1xuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykgfHwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcbiAgICAgICAgICAgICAgICBjYWxjRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiLTNweFwiO1xuICAgICAgICAgICAgICAgIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5pbnNlcnRCZWZvcmUoY2FsY0RpdiwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQuaWQgPT0gXCJyZWZyZXNoXCIgPyAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuY2hpbGRyZW5bMV0gOiAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICAgICAgICAgICAgICAgIHN2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuICAgICAgICAgICAgICAgIHN2Zy5vdXRlckhUTUwgPSBgPHN2ZyBoZWlnaHQ9XCIxMnB4XCIgd2lkdGg9XCIxMnB4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBcclxuXHRcdFx0XHRcdFx0XHRcdCB2aWV3Qm94PVwiMCAwIDQ2MCA0NjBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxnIGlkPVwiWE1MSURfMjQxX1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMzY5LjYzNSwwSDkwLjM2NUM3My41OTUsMCw2MCwxMy41OTUsNjAsMzAuMzY1djM5OS4yN0M2MCw0NDYuNDA1LDczLjU5NSw0NjAsOTAuMzY1LDQ2MGgyNzkuMjdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjMTYuNzcsMCwzMC4zNjUtMTMuNTk1LDMwLjM2NS0zMC4zNjVWMzAuMzY1QzQwMCwxMy41OTUsMzg2LjQwNSwwLDM2OS42MzUsMHogTTEwOC4yMDQsMzQzLjYxdi00My4xOTZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjMC0zLjQ1MSwyLjc5Ny02LjI0OCw2LjI0OC02LjI0OGg0My4xOTZjMy40NTEsMCw2LjI0OCwyLjc5Nyw2LjI0OCw2LjI0OHY0My4xOTZjMCwzLjQ1MS0yLjc5Nyw2LjI0OC02LjI0OCw2LjI0OGgtNDMuMTk2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QzExMS4wMDEsMzQ5Ljg1OCwxMDguMjA0LDM0Ny4wNiwxMDguMjA0LDM0My42MXogTTEwOC4yMDQsMjU2LjYxdi00My4xOTZjMC0zLjQ1MSwyLjc5Ny02LjI0OCw2LjI0OC02LjI0OGg0My4xOTZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjMy40NTEsMCw2LjI0OCwyLjc5Nyw2LjI0OCw2LjI0OHY0My4xOTZjMCwzLjQ1MS0yLjc5Nyw2LjI0OC02LjI0OCw2LjI0OGgtNDMuMTk2QzExMS4wMDEsMjYyLjg1OCwxMDguMjA0LDI2MC4wNiwxMDguMjA0LDI1Ni42MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHogTTMwOC44OTEsNDIxSDE1MS4xMDljLTExLjA0NiwwLTIwLTguOTU0LTIwLTIwYzAtMTEuMDQ2LDguOTU0LTIwLDIwLTIwaDE1Ny43ODJjMTEuMDQ2LDAsMjAsOC45NTQsMjAsMjBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDMzI4Ljg5MSw0MTIuMDQ2LDMxOS45MzcsNDIxLDMwOC44OTEsNDIxeiBNMjA4LjQwMiwyOTQuMTY1aDQzLjE5NmMzLjQ1MSwwLDYuMjQ4LDIuNzk3LDYuMjQ4LDYuMjQ4djQzLjE5NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGMwLDMuNDUxLTIuNzk3LDYuMjQ4LTYuMjQ4LDYuMjQ4aC00My4xOTZjLTMuNDUxLDAtNi4yNDgtMi43OTctNi4yNDgtNi4yNDh2LTQzLjE5NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEMyMDIuMTU0LDI5Ni45NjMsMjA0Ljk1MSwyOTQuMTY1LDIwOC40MDIsMjk0LjE2NXogTTIwMi4xNTQsMjU2LjYxdi00My4xOTZjMC0zLjQ1MSwyLjc5Ny02LjI0OCw2LjI0OC02LjI0OGg0My4xOTZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjMy40NTEsMCw2LjI0OCwyLjc5Nyw2LjI0OCw2LjI0OHY0My4xOTZjMCwzLjQ1MS0yLjc5Nyw2LjI0OC02LjI0OCw2LjI0OGgtNDMuMTk2QzIwNC45NTEsMjYyLjg1OCwyMDIuMTU0LDI2MC4wNiwyMDIuMTU0LDI1Ni42MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHogTTM0NS41NDgsMzQ5Ljg1OGgtNDMuMTk2Yy0zLjQ1MSwwLTYuMjQ4LTIuNzk3LTYuMjQ4LTYuMjQ4di00My4xOTZjMC0zLjQ1MSwyLjc5Ny02LjI0OCw2LjI0OC02LjI0OGg0My4xOTZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjMy40NTEsMCw2LjI0OCwyLjc5Nyw2LjI0OCw2LjI0OHY0My4xOTZoMEMzNTEuNzk2LDM0Ny4wNjEsMzQ4Ljk5OSwzNDkuODU4LDM0NS41NDgsMzQ5Ljg1OHogTTM0NS41NDgsMjYyLjg1OGgtNDMuMTk2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Yy0zLjQ1MSwwLTYuMjQ4LTIuNzk3LTYuMjQ4LTYuMjQ4di00My4xOTZjMC0zLjQ1MSwyLjc5Ny02LjI0OCw2LjI0OC02LjI0OGg0My4xOTZjMy40NTEsMCw2LjI0OCwyLjc5Nyw2LjI0OCw2LjI0OHY0My4xOTZoMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEMzNTEuNzk2LDI2MC4wNjEsMzQ4Ljk5OSwyNjIuODU4LDM0NS41NDgsMjYyLjg1OHogTTM1NCwxNDkuNjM3YzAsMTEuNzk5LTkuNTY1LDIxLjM2My0yMS4zNjMsMjEuMzYzSDEyNy4zNjRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDMTE1LjU2NSwxNzEsMTA2LDE2MS40MzUsMTA2LDE0OS42MzdWNjIuMzYzQzEwNiw1MC41NjUsMTE1LjU2NSw0MSwxMjcuMzY0LDQxaDIwNS4yNzNDMzQ0LjQzNSw0MSwzNTQsNTAuNTY1LDM1NCw2Mi4zNjNWMTQ5LjYzN1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHpcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2c+XHJcblx0XHRcdFx0XHRcdFx0PC9nPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNhbGNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIlhJVCBDQUxDVUxBVE9SXCIpOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIENvbnRyYWN0RHJhZnRzIHtcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbnRkXCI7XG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgZ2V0QnVmZmVycyhcIkNPTlREIFwiKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25UYWJsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnREQ29uZGl0aW9uc1RhYmxlKTtcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0cyA9IGNvbmRpdGlvblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ciA+IHRkOm50aC1jaGlsZCgyKVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIEFycmF5LmZyb20oY29uZGl0aW9uVGV4dHMpLmZvckVhY2goY29uZGl0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY29uZGl0aW9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3Zpc2lvbk1hdGNoID0gKC9Qcm92aXNpb24gKFswLTksLl0rKSB1bml0W3NdPyBvZiAoW0EtWmEtejAtOSBdKykgQC9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlzaW9uTWF0Y2ggJiYgcHJvdmlzaW9uTWF0Y2gubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwcm92aXNpb25NYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBwcm92aXNpb25NYXRjaFsyXTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdID0gW3F1YW50aXR5LnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLCBtYXRlcmlhbF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlck1hdGNoID0gKC9EZWxpdmVyeSBvZiAoWzAtOSwuXSspIHVuaXRbc10/IG9mIChbQS1aYS16MC05IF0rKSB0by9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsaXZlck1hdGNoICYmIGRlbGl2ZXJNYXRjaC5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IGRlbGl2ZXJNYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBkZWxpdmVyTWF0Y2hbMl07XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXSA9IFtxdWFudGl0eS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgbWF0ZXJpYWxdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRNYXRjaCA9ICgvUGF5bWVudCBvZiAoWzAtOSwuXSspL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChwYXltZW50TWF0Y2ggJiYgcGF5bWVudE1hdGNoLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJQYXltZW50XCJdID0gcGF5bWVudE1hdGNoWzFdLnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBNYXRjaCA9ICgvUHJvdmlzaW9uIHNoaXBtZW50IG9mIChbMC05LC5dKykgdW5pdFtzXT8gb2YgKFtBLVphLXowLTkgXSspIEAvZ20pLmV4ZWMoY29uZGl0aW9uVGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBNYXRjaCAmJiBzaGlwTWF0Y2gubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBzaGlwTWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gc2hpcE1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl0gPSBbcXVhbnRpdHkucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIiksIG1hdGVyaWFsXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbkVkaXRvckZvcm0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm0pO1xuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25FZGl0b3JGb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25FZGl0b3JMYWJlbHMgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQ29udERGb3JtTGFiZWwpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb25kaXRpb25FZGl0b3JMYWJlbHMpLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsLnRleHRDb250ZW50IHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGxhYmVsc1sxXSA9PSBcIkN1cnJlbmN5XCIgJiYgcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdICYmIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1NwYWNlciA9IGNvbmRpdGlvbkVkaXRvckZvcm0ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm1Sb3dTcGFjZXIpO1xuICAgICAgICAgICAgICAgIGlmICghcm93U3BhY2VyIHx8ICFyb3dTcGFjZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gcm93U3BhY2VyLnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFtb3VudElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyVW5pdCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlIHx8IFwiMFwiKSAvIHBhcnNlSW50KHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVswXSk7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsVGV4dCA9IHBlclVuaXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmljZXNbcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzFdXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvcnAgPSBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMF0pICogdGhpcy5wcmljZXNbcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICs9IFwiIHwgXCIgKyB0b3RhbENvcnAudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgQ29ycFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb3dTcGFjZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGxhYmVsVGV4dCwgdGhpcy50YWcpLCByb3dTcGFjZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYWJlbHNbMV0gPT0gXCJDdXJyZW5jeVwiICYmIHBhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXSAmJiBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTcGFjZXIgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtUm93U3BhY2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvd1NwYWNlciB8fCAhcm93U3BhY2VyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHJvd1NwYWNlci5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFhbW91bnRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSGVhdnkgPSBNYXRlcmlhbHNbcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdWzFdXVsxXSA+IE1hdGVyaWFsc1twYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV1dWzJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlclVuaXQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSB8fCBcIjBcIikgLyBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMF0pIC8gTWF0ZXJpYWxzW3BhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXV1baXNIZWF2eSA/IDEgOiAyXTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxUZXh0ID0gcGVyVW5pdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyAoaXNIZWF2eSA/IFwiL3RcIiA6IFwiL23Cs1wiKTtcbiAgICAgICAgICAgICAgICByb3dTcGFjZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGxhYmVsVGV4dCwgdGhpcy50YWcpLCByb3dTcGFjZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnRyYWN0RHJhZnRzLnRzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuZXhwb3J0IGNsYXNzIEltYWdlQ3JlYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1pbWFnZVwiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJDT01cIik7XG4gICAgICAgIGlmICghYnVmZmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGF0TGlua3MgPSBidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5DaGF0TGluayk7XG4gICAgICAgICAgICBjb25zdCBjaGF0QXJlYSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNoYXRBcmVhKTtcbiAgICAgICAgICAgIGlmICghY2hhdEFyZWEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYXRMaW5rcykuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rVGV4dCA9IGxpbmsudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rVGV4dCB8fCBsaW5rLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzSW1hZ2UobGlua1RleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXQtaW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGxpbmtUZXh0O1xuICAgICAgICAgICAgICAgIGlmICghbGluay5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICBjaGF0QXJlYS5zY3JvbGxCeSgwLCAoaW1nLm9mZnNldEhlaWdodCB8fCAwKSArIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIC9cXC4oanBnfGpwZWd8cG5nfHdlYnB8YXZpZnxnaWZ8c3ZnKSQvLnRlc3QodXJsKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ltYWdlQ3JlYXRvci50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycywgcGFyc2VJbnZOYW1lLCBwYXJzZVBsYW5ldE5hbWUsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCB0YXJnZXRlZENsZWFudXAsIHNldFNldHRpbmdzLCBzaG93QnVmZmVyLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzLCBTb3J0aW5nVHJpYW5nbGVIVE1MIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlPcmdhbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBmdWxsQnVybiwgcmVzdWx0KSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1pbnYtb3JnXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5mdWxsQnVybiA9IGZ1bGxCdXJuO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiSU5WIFwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIGlmICghYnVmZmVycyB8fCAhcmVzdWx0IHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImludmVudG9yeV9zb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImludmVudG9yeV9zb3J0aW5nXCJdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGNvbnN0IHNjcmVlbk5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TY3JlZW5OYW1lKTtcbiAgICAgICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xuICAgICAgICBpZiAoIXNjcmVlbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnRhZztcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3J0T3B0aW9ucyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeVNvcnRPcHRpb25zKTtcbiAgICAgICAgICAgIGlmICghc29ydE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYXNlTmFtZUVsZW0gPSBidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpO1xuICAgICAgICAgICAgaWYgKCFiYXNlTmFtZUVsZW0gfHwgIWJhc2VOYW1lRWxlbVswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGludk5hbWUgPSBwYXJzZUludk5hbWUoYmFzZU5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghaW52TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldE5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBwbGFuZXROYW1lID0gcGxhbmV0TmFtZUVsZW0gPyBwYXJzZVBsYW5ldE5hbWUocGxhbmV0TmFtZUVsZW0udGV4dENvbnRlbnQpIDogXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IGJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXROYW1lLCB0aGlzLmZ1bGxCdXJuW3RoaXMudXNlcm5hbWVdKTtcbiAgICAgICAgICAgIGNvbnN0IGludmVudG9yeSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeSk7XG4gICAgICAgICAgICBpZiAoIWludmVudG9yeSB8fCAhaW52ZW50b3J5LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWludmVudG9yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi1tb25pdG9yZWRcIikpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkuY2xhc3NMaXN0LmFkZChcInBiLW1vbml0b3JlZFwiKTtcbiAgICAgICAgICAgICAgICBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGhpcy50YWcsIHNjcmVlbk5hbWUsIGludk5hbWUsIGJ1cm4pO1xuICAgICAgICAgICAgICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldGVkQ2xlYW51cCh0YWcsIGludmVudG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRJbnZlbnRvcnkoaW52ZW50b3J5LCBzb3J0T3B0aW9ucywgcmVzdWx0LCB0YWcsIHNjcmVlbk5hbWUsIGludk5hbWUsIGJ1cm4pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaW52ZW50b3J5O1xuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xuICAgICAgICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRpb25zT2JzZXJ2ZWQpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hpcEJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiU0hQSSBcIik7XG4gICAgICAgIGlmICghc2hpcEJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHNoaXBCdWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5U29ydE9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCFzb3J0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lRWxlbSA9IGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlckhlYWRlcik7XG4gICAgICAgICAgICBpZiAoIXNoaXBOYW1lRWxlbSB8fCAhc2hpcE5hbWVFbGVtWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBwYXJzZUludk5hbWUoc2hpcE5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnkpO1xuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkgfHwgIWludmVudG9yeS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItbW9uaXRvcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LmNsYXNzTGlzdC5hZGQoXCJwYi1tb25pdG9yZWRcIik7XG4gICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgbGV0IG9uTXV0YXRpb25zT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ZWRDbGVhbnVwKHRhZywgaW52ZW50b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpbnZlbnRvcnk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XG4gICAgICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNvcnRJbnZlbnRvcnkoaW52ZW50b3J5LCBzb3J0T3B0aW9ucywgcmVzdWx0LCB0YWcsIHNjcmVlbk5hbWUsIHBsYW5ldE5hbWUsIGJ1cm4pIHtcbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIDw9IDcpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbiAhPSBzb3J0T3B0aW9ucy5maXJzdENoaWxkICYmICFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbklubmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25Jbm5lci5jaGlsZHJlblsxXSAmJiBvcHRpb25Jbm5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Jbm5lci5yZW1vdmVDaGlsZChvcHRpb25Jbm5lci5jaGlsZHJlblsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXS5mb3JFYWNoKHNvcnRTZXR0aW5ncyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0U2V0dGluZ3NbMF0gPT0gc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRTZXR0aW5nc1sxXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZlbnRvcnkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5Lmluc2VydEJlZm9yZShpbnZlbnRvcnkuZmlyc3RDaGlsZCwgaW52ZW50b3J5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChidXJuKSB7XG4gICAgICAgICAgICBzb3J0T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVUb2dnbGUocmVzdWx0LCBzb3J0T3B0aW9ucywgXCJCUk5cIiwgZmluZElmQWN0aXZlKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0sIHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lLCBcIkJSTlwiKSwgc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUsIGludmVudG9yeSkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uZm9yRWFjaChzZXR0aW5ncyA9PiB7XG4gICAgICAgICAgICBpZiAoIXNldHRpbmdzWzBdIHx8ICFzZXR0aW5nc1sxXSB8fCAhc2V0dGluZ3NbMl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3NbMV0udG9VcHBlckNhc2UoKSAhPSBwbGFuZXROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVUb2dnbGUocmVzdWx0LCBzb3J0T3B0aW9ucywgc2V0dGluZ3NbMF0sIGZpbmRJZkFjdGl2ZShyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgc2V0dGluZ3NbMF0pLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgaW52ZW50b3J5KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gJiYgc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgIT0gXCIrXCIpIHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJJbnZlbnRvcnlTb3J0Q29udHJvbHNfX2NyaXRlcmlhX19faWpMTWdqbVwiKTtcbiAgICAgICAgc29ydE9wdGlvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNob3dCdWZmZXIoXCJYSVQgU09SVF9cIiArIHBsYW5ldE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVNvcnQgPSBcIlwiO1xuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0uZm9yRWFjaChzb3J0U2V0dGluZ3MgPT4ge1xuICAgICAgICBpZiAoc29ydFNldHRpbmdzWzBdID09IHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lKSB7XG4gICAgICAgICAgICBhY3RpdmVTb3J0ID0gc29ydFNldHRpbmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcHRpb24gIT0gc29ydE9wdGlvbnMuZmlyc3RDaGlsZCAmJiBvcHRpb24uZmlyc3RDaGlsZCAmJiBvcHRpb24uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9PSBhY3RpdmVTb3J0ICYmICFvcHRpb24uY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgICAgIHRvZ2dsZUluZGljYXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIycHhcIjtcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0b2dnbGVJbmRpY2F0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbi5maXJzdENoaWxkICYmIG9wdGlvbi5maXJzdENoaWxkLnRleHRDb250ZW50ICE9IGFjdGl2ZVNvcnQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlU29ydCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZVNvcnQgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtYXRlcmlhbHMgPSBBcnJheS5mcm9tKGludmVudG9yeS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZ1bGxNYXRlcmlhbEljb24pKTtcbiAgICBtYXRlcmlhbHMuc29ydChtYXRlcmlhbFNvcnQpO1xuICAgIHZhciBzb3J0ZWQgPSBbXTtcbiAgICB2YXIgc29ydGluZ0RldGFpbHMgPSBbXTtcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmZvckVhY2gocmVzdWx0X3NvcnRpbmdEZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdF9zb3J0aW5nRGV0YWlsc1swXSA9PSBhY3RpdmVTb3J0ICYmIHJlc3VsdF9zb3J0aW5nRGV0YWlsc1sxXSA9PSBwbGFuZXROYW1lKSB7XG4gICAgICAgICAgICBzb3J0aW5nRGV0YWlscyA9IHJlc3VsdF9zb3J0aW5nRGV0YWlscztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZVNvcnQgIT0gXCJCUk5cIikge1xuICAgICAgICBpZiAoc29ydGluZ0RldGFpbHMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0aW5nRGV0YWlsc1s0XSkge1xuICAgICAgICAgICAgdmFyIG1hdGVyaWFsc1RvU29ydCA9IFtdO1xuICAgICAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzVG9Tb3J0ID0gbWF0ZXJpYWxzVG9Tb3J0LmNvbmNhdChjYXRlZ29yeVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbHNUb1NvcnQgPSBtYXRlcmlhbHNUb1NvcnQuZmlsdGVyKChjLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRlcmlhbHNUb1NvcnQuaW5kZXhPZihjKSA9PT0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGVyaWFsc1RvU29ydC5mb3JFYWNoKHRpY2tlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbExpc3RDb250YWlucyhtYXRlcmlhbHMsIHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0RWxlbWVudCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIHRhZywgXCIwXCIsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0UXVhbnRpdHlFbGVtID0gbWF0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsUXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0UXVhbnRpdHlFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRRdWFudGl0eUVsZW0uc3R5bGUuY29sb3IgPSBcIiNjYzAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5zb3J0KG1hdGVyaWFsU29ydCk7XG4gICAgICAgIH1cbiAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnlbMF0pKTtcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlSXRlbXNJbkNhdGVnb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgY2F0ZWdvcnlbMV0uaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlSXRlbXNJbkNhdGVnb3J5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlSXRlbXNJbkNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGNhdGVnb3J5VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdChjYXRlZ29yeVsxXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc29ydGluZ0RldGFpbHNbM10gfHwgYWN0aXZlU29ydCA9PSBcIkJSTlwiKSB7XG4gICAgICAgIGlmIChidXJuKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JrZm9yY2VNYXRlcmlhbHMgPSBleHRyYWN0TWF0ZXJpYWxzKGJ1cm5bXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXSk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE1hdGVyaWFscyA9IGV4dHJhY3RNYXRlcmlhbHMoYnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0TWF0ZXJpYWxzID0gZXh0cmFjdE1hdGVyaWFscyhidXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtmb3JjZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29uc3VtYWJsZXNcIikpO1xuICAgICAgICAgICAgd29ya2ZvcmNlVGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgd29ya2ZvcmNlVGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZCh3b3JrZm9yY2VUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlQ29uc3VtYWJsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiB3b3JrZm9yY2VNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhb3V0cHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFyZUNvbnN1bWFibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlQ29uc3VtYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQod29ya2ZvcmNlVGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBpbnB1dFRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW5wdXRzXCIpKTtcbiAgICAgICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgaW5wdXRUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlSW5wdXRzID0gZmFsc2U7XG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlSW5wdXRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlSW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgb3V0cHV0VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJPdXRwdXRzXCIpKTtcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBvdXRwdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQob3V0cHV0VGl0bGUpO1xuICAgICAgICAgICAgdmFyIGFyZU91dHB1dHMgPSBmYWxzZTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiBvdXRwdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlT3V0cHV0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFyZU91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQob3V0cHV0VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdCh3b3JrZm9yY2VNYXRlcmlhbHMpO1xuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdChpbnB1dE1hdGVyaWFscyk7XG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuY29uY2F0KG91dHB1dE1hdGVyaWFscyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbWlzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaXNjVGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJPdGhlclwiKSk7XG4gICAgbWlzY1RpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICBtaXNjVGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBtaXNjVGl0bGUuY2xhc3NMaXN0LmFkZCh0YWcpO1xuICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtaXNjVGl0bGUpO1xuICAgIHZhciBhcmVNaXNjID0gZmFsc2U7XG4gICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICBpZiAodGlja2VyICYmICFzb3J0ZWQuaW5jbHVkZXModGlja2VyKSkge1xuICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgIGFyZU1pc2MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBpZiAoIWFyZU1pc2MpIHtcbiAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKG1pc2NUaXRsZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIG1hdGVyaWFsTGlzdENvbnRhaW5zKG1hdGVyaWFscywgdGlja2VyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsc1tpXS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XG4gICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpY2tlciA9PSB0aWNrZXJFbGVtLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBmaW5kSWZBY3RpdmUoc29ydFNldHRpbmdzLCBzY3JlZW5QbGFuZXQsIHNvcnRNb2RlTmFtZSkge1xuICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgIHNvcnRTZXR0aW5ncy5mb3JFYWNoKHNldHRpbmdzID0+IHtcbiAgICAgICAgaWYgKHNldHRpbmdzWzBdID09IHNjcmVlblBsYW5ldCAmJiBzZXR0aW5nc1sxXSA9PSBzb3J0TW9kZU5hbWUpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xufVxuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlKHJlc3VsdCwgc29ydE9wdGlvbnMsIGFiYnJldmlhdGlvbiwgc2VsZWN0ZWQsIGNvbWJpbmVkTmFtZSwgaW52ZW50b3J5KSB7XG4gICAgY29uc3QgY3VzdG9tU29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VzdG9tU29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiSW52ZW50b3J5U29ydENvbnRyb2xzX19jcml0ZXJpYV9fX2lqTE1nam1cIik7XG4gICAgY3VzdG9tU29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGItdG9nZ2xlXCIpO1xuICAgIGNvbnN0IHRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2dnbGVMYWJlbC50ZXh0Q29udGVudCA9IGFiYnJldmlhdGlvbjtcbiAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUxhYmVsKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xuICAgICAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUluZGljYXRvcik7XG4gICAgfVxuICAgIGN1c3RvbVNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGludmVudG9yeS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5pbnNlcnRCZWZvcmUoaW52ZW50b3J5LmZpcnN0Q2hpbGQsIGludmVudG9yeS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xuICAgICAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUluZGljYXRvcik7XG4gICAgICAgIHZhciBzYXZlZEJlZm9yZSA9IGZhbHNlO1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLmZvckVhY2goc29ydGluZ09wdGlvbnMgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdPcHRpb25zWzBdID09IGNvbWJpbmVkTmFtZSkge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdPcHRpb25zWzFdID0gYWJicmV2aWF0aW9uO1xuICAgICAgICAgICAgICAgIHNhdmVkQmVmb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2F2ZWRCZWZvcmUpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0ucHVzaChbY29tYmluZWROYW1lLCBhYmJyZXZpYXRpb25dKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1c3RvbVNvcnRCdXR0b247XG59XG5mdW5jdGlvbiBleHRyYWN0TWF0ZXJpYWxzKGJ1cm4pIHtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbXTtcbiAgICBidXJuLmZvckVhY2gobWF0ID0+IHtcbiAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGVyaWFscztcbn1cbmZ1bmN0aW9uIG1hdGVyaWFsU29ydChhLCBiKSB7XG4gICAgY29uc3QgdGlja2VyRWxlbUEgPSBhLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICBpZiAoIXRpY2tlckVsZW1BKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGlja2VyQSA9IHRpY2tlckVsZW1BLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRpY2tlckVsZW1CID0gYi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XG4gICAgaWYgKCF0aWNrZXJFbGVtQikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpY2tlckIgPSB0aWNrZXJFbGVtQi50ZXh0Q29udGVudDtcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyQV0gfHwgIU1hdGVyaWFsTmFtZXNbdGlja2VyQl0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChNYXRlcmlhbE5hbWVzW3RpY2tlckFdWzFdID09IE1hdGVyaWFsTmFtZXNbdGlja2VyQl1bMV0pIHtcbiAgICAgICAgcmV0dXJuIHRpY2tlckEubG9jYWxlQ29tcGFyZSh0aWNrZXJCKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbdGlja2VyQV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW3RpY2tlckJdWzFdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ludmVudG9yeU9yZ2FuaXplci50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcbmV4cG9ydCBjbGFzcyBIZWFkZXJNaW5pbWl6ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1pbkJ5RGVmYXVsdCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItbWluLWhlYWRlcnNcIjtcbiAgICAgICAgdGhpcy5taW5CeURlZmF1bHQgPSBtaW5CeURlZmF1bHQ7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJDWCBcIik7XG4gICAgICAgIGlmICghYnVmZmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgbWluaW1pemVIZWFkZXJzKGJ1ZmZlciwgdGhpcy5taW5CeURlZmF1bHQsIHRoaXMudGFnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkNPTlQgXCIpO1xuICAgICAgICBpZiAoIWJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIG1pbmltaXplSGVhZGVycyhidWZmZXIsIHRoaXMubWluQnlEZWZhdWx0LCB0aGlzLnRhZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuZnVuY3Rpb24gbWluaW1pemVIZWFkZXJzKGJ1ZmZlciwgbWluQnlEZWZhdWx0LCB0YWcpIHtcbiAgICBjb25zdCBidWZmZXJQYW5lbCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclBhbmVsKTtcbiAgICBpZiAoIWJ1ZmZlclBhbmVsIHx8ICFidWZmZXJQYW5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkhlYWRlclJvdyk7XG4gICAgaWYgKGhlYWRlcnNbMF0gJiYgaGVhZGVyc1swXS5jbGFzc0xpc3QuY29udGFpbnModGFnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtaW5CeURlZmF1bHQpIHtcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybUxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA9PSBcIlRlcm1pbmF0aW9uIHJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtSW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZXh0Q29udGVudCAhPSBcIi0tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5pbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9IG1pbkJ5RGVmYXVsdCA/IFwiK1wiIDogXCItXCI7XG4gICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZChcInBiLW1pbmltaXplXCIpO1xuICAgIG1pbmltaXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYi1taW5pbWl6ZS1jeFwiKTtcbiAgICBtaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaW5pbWl6ZSA9IG1pbmltaXplQnV0dG9uLnRleHRDb250ZW50ID09IFwiLVwiO1xuICAgICAgICBtaW5pbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9IG1pbmltaXplID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybUxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA9PSBcIlRlcm1pbmF0aW9uIHJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtSW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZXh0Q29udGVudCAhPSBcIi0tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBtaW5pbWl6ZSA/IFwibm9uZVwiIDogXCJmbGV4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgYnVmZmVyUGFuZWwuZmlyc3RDaGlsZC5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyUm93KFwiTWluaW1pemVcIiwgbWluaW1pemVCdXR0b24sIHRhZyksIGJ1ZmZlclBhbmVsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyUm93KGxhYmVsVGV4dCwgcmlnaHRTaWRlQ29udGVudHMsIHRhZykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuSGVhZGVyUm93KTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCh0YWcpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcbiAgICBjb25zdCByaWdodFNpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZChyaWdodFNpZGVDb250ZW50cyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodFNpZGVEaXYpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSGVhZGVyTWluaW1pemVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGNyZWF0ZUNvbnRyYWN0RGljdCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmV4cG9ydCBjbGFzcyBQZW5kaW5nQ29udHJhY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgY29udHJhY3RzKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wZW5kaW5nLWNvbnRyYWN0c1wiO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gY29udHJhY3RzO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJuYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBjb250cmFjdExpbmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlNpZGViYXJDb250cmFjdCkpO1xuICAgICAgICB2YXIgY29udHJhY3RkaWN0ID0ge307XG4gICAgICAgIGlmICghdGhpcy5jb250cmFjdHNbdGhpcy51c2VybmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVDb250cmFjdERpY3QodGhpcy5jb250cmFjdHMsIHRoaXMudXNlcm5hbWUsIGNvbnRyYWN0ZGljdCk7XG4gICAgICAgIGNvbnRyYWN0TGluZXMuZm9yRWFjaChjb250cmFjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdElERWxlbWVudCA9IGNvbnRyYWN0LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuU2lkZWJhckNvbnRyYWN0SWQpO1xuICAgICAgICAgICAgaWYgKCFjb250cmFjdElERWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0SUQgPSBjb250cmFjdElERWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmICghY29udHJhY3RJRCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250cmFjdGRpY3RbY29udHJhY3RJRF0gJiYgY29udHJhY3RkaWN0W2NvbnRyYWN0SURdW1wiUGFydG5lck5hbWVcIl0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydG5lcmNvZGUgPSBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXTtcbiAgICAgICAgICAgICAgICBpZiAocGFydG5lcmNvZGUubGVuZ3RoID4gMTkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lcmNvZGUgPSBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyQ29tcGFueUNvZGVcIl0gfHwgY29udHJhY3RkaWN0W2NvbnRyYWN0SURdW1wiUGFydG5lck5hbWVcIl0uc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKGAke3BhcnRuZXJjb2RlfWAsIHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICBuYW1lU3Bhbi5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICAgICAgICAgICAgICBjb250cmFjdC5pbnNlcnRCZWZvcmUobmFtZVNwYW4sIGNvbnRyYWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlVGV4dFNwYW4oXCJVbmtub3duXCIsIHRoaXMudGFnKTtcbiAgICAgICAgICAgIG5hbWVTcGFuLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgICAgICAgICAgY29udHJhY3QuaW5zZXJ0QmVmb3JlKG5hbWVTcGFuLCBjb250cmFjdC5maXJzdENoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9QZW5kaW5nQ29udHJhY3RzLnRzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IFdpdGhTdHlsZXMsIFN0eWxlIH0gZnJvbSBcIlN0eWxlXCI7XG5leHBvcnQgY2xhc3MgQ29tcGFjdFVJIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbXBhY3R1aVwiO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJCQkxcIik7XG4gICAgICAgIGlmIChidWZmZXJzKSB7XG4gICAgICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgICAgICBDbGVhckJ1aWxkaW5nTGlzdHMoYnVmZmVyLCB0aGlzLnJlc3VsdCwgdGhpcy50YWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkJTXCIpO1xuICAgICAgICBpZiAoYnVmZmVycykge1xuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgQ2xlYXJCYXNlKGJ1ZmZlciwgdGhpcy50YWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIEhpZGVFbGVtZW50KGVsZW1lbnQsIHRhZykge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0YWcgKyBcIi1oaWRkZW5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gVW5IaWRlRWxlbWVudChlbGVtZW50LCB0YWcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0YWcgKyBcIi1oaWRkZW5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJCdWlsZGluZ0xpc3RzKGJ1ZmZlciwgcmVzdWx0LCB0YWcpIHtcbiAgICBjb25zdCBuYW1lRWxlbSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1aWxkaW5nTGlzdCk7XG4gICAgaWYgKCFuYW1lRWxlbSB8fCAhbmFtZUVsZW0udGV4dENvbnRlbnQpXG4gICAgICAgIHJldHVybjtcbiAgICBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRpdmlkZXIpKS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgaWYgKHJvdy5jaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHZhciBuZXdtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB2YXIgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdtZW51LmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvbikpO1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblRvZ2dsZWQpKTtcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblZhbHVlKSk7XG4gICAgICAgICAgICB2YWx1ZS5pbm5lclRleHQgPSBcIlZpc2libGVcIjtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChuZXdtZW51KTtcbiAgICAgICAgICAgIG5ld21lbnUuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcbiAgICAgICAgICAgIG5ld21lbnUuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICAgICAgbmV3bWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRpY2F0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFN0eWxlLlJhZGlvQnV0dG9uVG9nZ2xlZFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3cubmV4dEVsZW1lbnRTaWJsaW5nLCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSguLi5XaXRoU3R5bGVzKFN0eWxlLlJhZGlvQnV0dG9uVG9nZ2xlZCkpO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlJhZGlvQnV0dG9uVW5Ub2dnbGVkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93Lm5leHRFbGVtZW50U2libGluZylcbiAgICAgICAgICAgICAgICAgICAgICAgIFVuSGlkZUVsZW1lbnQocm93Lm5leHRFbGVtZW50U2libGluZywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblVuVG9nZ2xlZCkpO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlJhZGlvQnV0dG9uVG9nZ2xlZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJvdy5pbm5lclRleHQuaW5jbHVkZXMoXCJJbmZyYXN0cnVjdHVyZVwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIsIHsgXCJkZXRhaWxcIjogXCJmYWtlIGNsaWNrXCIgfSk7XG4gICAgICAgICAgICAgICAgbmV3bWVudS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIEFycmF5LmZyb20obmFtZUVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKSkuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgdmFyIHJlcGFpcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBFc3RhYmxpc2hSb3c7XG4gICAgICAgIHZhciBidXR0b25zID0gdGFibGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uc1sxXS5jbGFzc0xpc3QucmVtb3ZlKC4uLldpdGhTdHlsZXMoU3R5bGUuQnV0dG9uRW5hYmxlZCkpO1xuICAgICAgICBidXR0b25zWzFdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5CdXR0b25EYW5nZXIpKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0YWJsZS5yb3dzKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgTGluZTtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoTGluZSkge1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkVzdGFibGlzaGVkXCJdID0gMF0gPSBcIkVzdGFibGlzaGVkXCI7XG4gICAgICAgICAgICAgICAgTGluZVtMaW5lW1wiUmVwYWlyXCJdID0gMV0gPSBcIlJlcGFpclwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkNvc3RcIl0gPSAyXSA9IFwiQ29zdFwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIlJlZnVuZFwiXSA9IDNdID0gXCJSZWZ1bmRcIjtcbiAgICAgICAgICAgICAgICBMaW5lW0xpbmVbXCJWYWx1ZVwiXSA9IDRdID0gXCJWYWx1ZVwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkNvbmRpdGlvblwiXSA9IDVdID0gXCJDb25kaXRpb25cIjtcbiAgICAgICAgICAgIH0pKExpbmUgfHwgKExpbmUgPSB7fSkpO1xuICAgICAgICAgICAgdmFyIGRpY3QgPSB7XG4gICAgICAgICAgICAgICAgJ0VzdGFibGlzaGVkJzogTGluZS5Fc3RhYmxpc2hlZCxcbiAgICAgICAgICAgICAgICAnTGFzdCByZXBhaXInOiBMaW5lLlJlcGFpcixcbiAgICAgICAgICAgICAgICAnUmVwYWlyIGNvc3RzJzogTGluZS5Db3N0LFxuICAgICAgICAgICAgICAgICdSZWNsYWltYWJsZSBtYXRlcmlhbHMnOiBMaW5lLlJlZnVuZCxcbiAgICAgICAgICAgICAgICAnQm9vayB2YWx1ZSc6IExpbmUuVmFsdWUsXG4gICAgICAgICAgICAgICAgJ0NvbmRpdGlvbic6IExpbmUuQ29uZGl0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGxpbmV0eXBlID0gTGluZS5Fc3RhYmxpc2hlZDtcbiAgICAgICAgICAgIEFycmF5LmZyb20ocm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIikpLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBkYXRhLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGljdFt0ZXh0XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmV0eXBlID0gZGljdFt0ZXh0XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmV0eXBlID09IExpbmUuRXN0YWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBFc3RhYmxpc2hSb3cgPSByb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRleHQgPT0gXCItLVwiKVxuICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGV4dCA9PSBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93LCB0YWcpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdCh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLlJlcGFpcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwYWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLkNvbmRpdGlvbiB8fCBsaW5ldHlwZSA9PSBMaW5lLkVzdGFibGlzaGVkIHx8IGxpbmV0eXBlID09IExpbmUuUmVwYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBkYXRhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDE4MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYmFyICYmIGJhci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LnJlbW92ZSguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyQ29sb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGJhclswXS52YWx1ZSAvIGJhclswXS5tYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZXR5cGUgPT0gTGluZS5Db25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiA5OCAmJiBidXR0b25zWzBdLmNsYXNzTGlzdC5jb250YWlucyhTdHlsZS5CdXR0b25FbmFibGVkWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zWzBdLmNsYXNzTGlzdC5yZW1vdmUoLi4uV2l0aFN0eWxlcyhTdHlsZS5CdXR0b25FbmFibGVkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLkJ1dHRvbkRhbmdlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjkwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyR29vZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2dyZXNzID4gMC44MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0Jhcldhcm5pbmcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJEYW5nZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS52YWx1ZSA9IDE4MCAtIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gYmFyWzBdLnZhbHVlIC8gYmFyWzBdLm1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhyZXNob2xkID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA/IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gLyAxODAuMCA6ICg3MC4wIC8gMTgwLjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDAuNzUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJHb29kKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiB0aHJlc2hvbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJXYXJuaW5nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyRGFuZ2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3YmFyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0JhcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmV0eXBlID09IExpbmUuQ29uZGl0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2Jhci5tYXggPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3YmFyLm1heCA9IDE4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaW5zZXJ0QmVmb3JlKG5ld2JhciwgZGF0YS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5ldHlwZSA9PSBMaW5lLlZhbHVlICYmIHZhbHVlIDwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93LCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDw9IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVwYWlyZWQpXG4gICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQoRXN0YWJsaXNoUm93LCB0YWcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDbGVhckJhc2UoYnVmZmVyLCB0YWcpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSGVhZGVyUm93KSk7XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudHNbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGFyZWFCYXIgPSBlbGVtZW50c1swXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInByb2dyZXNzXCIpWzBdO1xuICAgIGlmICghYXJlYUJhcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFyZWFCYXJDb3B5ID0gYXJlYUJhci5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYXJlYUJhckNvcHkuY2xhc3NMaXN0LmFkZCh0YWcpO1xuICAgIGNvbnN0IGVkaXRkaXYgPSBlbGVtZW50c1sxXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXTtcbiAgICBpZiAoZWRpdGRpdi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0YWcpICYmIGVkaXRkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBlZGl0ZGl2LnJlbW92ZUNoaWxkKGVkaXRkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGVkaXRkaXYuaW5zZXJ0QmVmb3JlKGFyZWFCYXJDb3B5LCBlZGl0ZGl2Lmxhc3RDaGlsZCk7XG4gICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKSkuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgQXJyYXkuZnJvbSh0YWJsZS5yb3dzKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEFycmF5LmZyb20ocm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIikpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gQXJyYXkuZnJvbShyb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aFwiKSk7XG4gICAgICAgICAgICAgICAgZGF0YVsyXS5pbm5lclRleHQgPSBcIkN1cnJlbnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXF1aXJlZCA9IHBhcnNlRmxvYXQoZGF0YVsxXS5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIHZhciB3b3JrZm9yY2UgPSBwYXJzZUZsb2F0KGRhdGFbMl0uaW5uZXJUZXh0LnNwbGl0KFwiIFwiKVswXSk7XG4gICAgICAgICAgICAgICAgdmFyIGNhcGFjaXR5ID0gcGFyc2VGbG9hdChkYXRhWzNdLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFyID0gZGF0YVs0XS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXJWYWx1ZSA9IGJhci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInByb2dyZXNzXCIpWzBdLnRpdGxlO1xuICAgICAgICAgICAgICAgIGlmIChiYXIubGFzdENoaWxkICYmIGJhci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKGJhci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYmFyVmFsdWUsIHRhZykpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCA8IDEgJiYgY2FwYWNpdHkgPCAxICYmIHdvcmtmb3JjZSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db21wYWN0VUkudHNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=