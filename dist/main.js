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
/* harmony export (immutable) */ __webpack_exports__["s"] = downloadFile;
/* harmony export (immutable) */ __webpack_exports__["j"] = createNode;
/* harmony export (immutable) */ __webpack_exports__["m"] = createSelectOption;
/* harmony export (immutable) */ __webpack_exports__["e"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["D"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["q"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["p"] = createTextDiv;
/* harmony export (immutable) */ __webpack_exports__["g"] = createFinancialTextBox;
/* harmony export (immutable) */ __webpack_exports__["v"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["t"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["a"] = CategorySort;
/* harmony export (immutable) */ __webpack_exports__["u"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["C"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["E"] = parseInvName;
/* harmony export (immutable) */ __webpack_exports__["F"] = parsePlanetName;
/* harmony export (immutable) */ __webpack_exports__["z"] = getLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["d"] = clearChildren;
/* harmony export (immutable) */ __webpack_exports__["G"] = setSettings;
/* harmony export (immutable) */ __webpack_exports__["b"] = XITWebRequest;
/* harmony export (immutable) */ __webpack_exports__["i"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["h"] = createLink;
/* harmony export (immutable) */ __webpack_exports__["H"] = showBuffer;
/* harmony export (immutable) */ __webpack_exports__["c"] = changeValue;
/* harmony export (immutable) */ __webpack_exports__["w"] = genericCleanup;
/* unused harmony export genericUnhide */
/* harmony export (immutable) */ __webpack_exports__["I"] = targetedCleanup;
/* harmony export (immutable) */ __webpack_exports__["x"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* unused harmony export sortTable */
/* harmony export (immutable) */ __webpack_exports__["o"] = createTable;
/* harmony export (immutable) */ __webpack_exports__["r"] = createToolTip;
/* harmony export (immutable) */ __webpack_exports__["B"] = makePopupSpacer;
/* harmony export (immutable) */ __webpack_exports__["l"] = createPopupInputRow;
/* harmony export (immutable) */ __webpack_exports__["k"] = createPopupCheckboxRow;
/* harmony export (immutable) */ __webpack_exports__["A"] = getValueOfPopupRow;
/* harmony export (immutable) */ __webpack_exports__["y"] = getCheckOfPopupRow;
/* harmony export (immutable) */ __webpack_exports__["n"] = createSmallButton;
/* harmony export (immutable) */ __webpack_exports__["f"] = createContractDict;
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
        browser.storage.local.get(storageName).then(callbackFunction(params));
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
	cursor: pointer;
	display: block;
	font-size: 24px;
	margin-top: -8px;
}
.button-upper-right:hover{
	color: #000 !important;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", generateCheckTable, tile);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", dispStoredCheck, [checkName, tile]);
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
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(name.substring(7), "XIT CHECK_" + name.substring(7)));
        incompleteColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(result["PMMG-Notes"][name].filter((obj) => (!obj[1])).length));
        totalColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(result["PMMG-Notes"][name].length));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [name.substring(7), []]);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
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
    const checkText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(name);
    textDiv.appendChild(checkText);
    checkText.style.display = "block";
    checkText.style.paddingTop = "5px";
    var dueDateText;
    if (dueDate) {
        dueDateText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(new Date(dueDate).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + " " + new Date(dueDate).toLocaleDateString(undefined, { day: "numeric", month: "numeric", year: "numeric" }));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreCheck, [checkName, result["PMMG-Notes"][CHECK_INDICATOR + checkName]]);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrderETAs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FleetETAs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostLM__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShippingAds__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QueueLoad__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ScreenUnpack__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Sidebar__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommandCorrecter__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CalculatorButton__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ContractDrafts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ImageCreator__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__InventoryOrganizer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__HeaderMinimizer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__PendingContracts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CompactUI__ = __webpack_require__(42);






















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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            var currentTime = 0;
            for (var i = 1; i < elements.length; i++) {
                const targetRow = elements[i];
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const duration = Object(__WEBPACK_IMPORTED_MODULE_0__util__["D" /* parseDuration */])(etaData.textContent);
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* convertDurationToETA */])(duration + currentTime);
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(` (${eta})`, this.tag));
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
                firstEtaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(` (${totalEta})`, this.tag));
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
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
            this.result["PMMGExtended"]["loaded_before"] = Object(__WEBPACK_IMPORTED_MODULE_1__util__["H" /* showBuffer */])("XIT START");
            if (this.result["PMMGExtended"]["loaded_before"]) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util__["G" /* setSettings */])(this.result);
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


















const XITPreFunctions = {
    "INV": __WEBPACK_IMPORTED_MODULE_13__XIT_Inventory__["a" /* FIOInv_pre */],
    "DISCORD": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["a" /* Discord_pre */],
    "SHEETS": __WEBPACK_IMPORTED_MODULE_12__XIT_Web__["d" /* Sheets_pre */],
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
    "LIST": __WEBPACK_IMPORTED_MODULE_17__XIT_CommandLists__["a" /* CommandLists */]
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
    "LIST": "COMMAND LIST"
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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("XIT");
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
                refreshButton.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("⟳"));
                refreshButton.classList.add("button-upper-right");
                refreshButton.classList.add(this.tag);
                refreshButton.style.fontSize = "16px";
                refreshButton.style.paddingTop = "12px";
                refreshButton.id = "refresh";
                (buffer.children[3] || buffer.children[2]).insertBefore(refreshButton, (buffer.children[3] || buffer.children[2]).firstChild);
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
    const welcome = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Thank you for using PMMG Extended!");
    welcome.classList.add("title");
    welcome.style.paddingLeft = "0";
    tile.appendChild(welcome);
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("This is a short tutorial on how to get the most out of the extension."));
    const websiteLinkDiv = document.createElement("div");
    websiteLinkDiv.style.paddingTop = "20px";
    tile.appendChild(websiteLinkDiv);
    websiteLinkDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Details on what PMMG offers can be found here: "));
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
    settingsDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Start by opening a new buffer and entering "));
    const settingsLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])("XIT SETTINGS", "XIT SETTINGS");
    settingsLink.style.display = "inline-block";
    settingsDiv.appendChild(settingsLink);
    const fioDiv = document.createElement("div");
    tile.appendChild(fioDiv);
    fioDiv.style.paddingTop = "20px";
    fioDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("FIO is a browser extension that gathers data from your game. PMMG Extended uses that data to display useful information. You can learn more about installing FIO here: "));
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
    fioDiv2.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("If you already have a FIO account, add your username and API Key to the text boxes on XIT SETTINGS. You can generate an API Key "));
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
    webAppDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("If your corporation has a web app (AHI, FOWL, KAWA), enter that in the Web App ID field."));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("You can explore other settings to enable or disable features, change the color scheme, and customize the left sidebar. Contact PiBoy314 in game or on Discord if you have questions."));
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
    warningDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Changes require a refresh to take effect."));
    const helpDiv = document.createElement("div");
    tile.appendChild(helpDiv);
    helpDiv.style.marginTop = "4px";
    helpDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("See a full list of features on "));
    const websiteLink = document.createElement("a");
    websiteLink.href = "https://sites.google.com/view/pmmgextended/features?authuser=0";
    websiteLink.target = "_blank";
    websiteLink.style.display = "inline-block";
    websiteLink.classList.add("link");
    websiteLink.textContent = "PMMG's Website";
    helpDiv.appendChild(websiteLink);
    const authenticationHeader = document.createElement('h3');
    authenticationHeader.appendChild(document.createTextNode("Authentication Settings"));
    authenticationHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Enter your FIO username and API key, as well as a corporate web app ID", "right"));
    authenticationHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(authenticationHeader);
    const usernameDiv = document.createElement("div");
    const usernameLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("FIO Username: ");
    const usernameInput = document.createElement("input");
    usernameInput.value = result["PMMGExtended"]["username"] || "";
    usernameInput.addEventListener("input", function () {
        result["PMMGExtended"]["username"] = !usernameInput.value || usernameInput.value == "" ? undefined : usernameInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    usernameInput.classList.add("input-text");
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);
    tile.appendChild(usernameDiv);
    const apiDiv = document.createElement("div");
    const apiLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("FIO API Key: ");
    apiLabel.style.minWidth = "77px";
    apiLabel.style.display = "inline-block";
    const apiInput = document.createElement("input");
    apiInput.value = result["PMMGExtended"]["apikey"] || "";
    apiInput.addEventListener("input", function () {
        result["PMMGExtended"]["apikey"] = !apiInput.value || apiInput.value == "" ? undefined : apiInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    apiInput.classList.add("input-text");
    apiInput.type = "password";
    apiDiv.appendChild(apiLabel);
    apiDiv.appendChild(apiInput);
    tile.appendChild(apiDiv);
    const webDiv = document.createElement("div");
    const webLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Web App ID: ");
    webLabel.style.minWidth = "77px";
    webLabel.style.display = "inline-block";
    const webInput = document.createElement("input");
    webInput.value = result["PMMGExtended"]["webappid"] || "";
    webInput.addEventListener("input", function () {
        result["PMMGExtended"]["webappid"] = !webInput.value || webInput.value == "" ? undefined : webInput.value;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    webInput.classList.add("input-text");
    webDiv.appendChild(webLabel);
    webDiv.appendChild(webInput);
    tile.appendChild(webDiv);
    const enhancedColorHeader = document.createElement('h3');
    enhancedColorHeader.appendChild(document.createTextNode("Color Scheme"));
    enhancedColorHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Select a color scheme to customize material icons.", "right"));
    enhancedColorHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(enhancedColorHeader);
    const colorDiv = document.createElement("div");
    const colorLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Color Scheme:");
    colorLabel.style.marginBottom = "4px";
    colorDiv.appendChild(colorLabel);
    const colorSelect = document.createElement("select");
    colorSelect.name = "colors-select";
    colorSelect.id = "colors-select";
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* createSelectOption */])("Enhanced", "enhanced"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* createSelectOption */])("Icons", "icons"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* createSelectOption */])("Default", "default"));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    colorDiv.appendChild(colorSelect);
    tile.appendChild(colorDiv);
    const minDiv = document.createElement("div");
    const minLabel = document.createElement('h3');
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Minimize Headers by Default"));
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Minimized contract and CX headers by default.", "right"));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    const burnDiv = document.createElement("div");
    const burnLabel = document.createElement('h3');
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Burn Settings"));
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Set the thresholds for yellow and red consumable levels in burn tiles (in days).", "right"));
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
    redDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Red Threshold: "));
    const redIn = document.createElement("input");
    redIn.type = "number";
    redIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3])[0].toLocaleString(undefined, { maximumFractionDigits: 0 });
    redDiv.appendChild(redIn);
    redIn.classList.add("input-text");
    redIn.style.width = "50px";
    redIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][0] = parseFloat(redIn.value);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    const yelDiv = document.createElement("div");
    setDiv.appendChild(yelDiv);
    yelDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Yellow Threshold: "));
    const yelIn = document.createElement("input");
    yelIn.type = "number";
    yelIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1].toLocaleString(undefined, { maximumFractionDigits: 0 });
    yelDiv.appendChild(yelIn);
    yelIn.classList.add("input-text");
    yelIn.style.width = "50px";
    yelIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][1] = parseFloat(yelIn.value);
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    tile.appendChild(burnDiv);
    const hotkeyHeader = document.createElement('h3');
    hotkeyHeader.appendChild(document.createTextNode("Left Sidebar Buttons"));
    hotkeyHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Create hotkeys on the left sidebar. The first value is what will be displayed, the second is the command.", "right"));
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
    screenUnpackHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("List screens to be excluded from screen unpack. Separate screens with a comma.", "right"));
    screenUnpackHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(screenUnpackHeader);
    const notifDiv = document.createElement("div");
    tile.appendChild(notifDiv);
    notifDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("List screen names separated by commas, no spaces."));
    const exclusionInput = document.createElement("input");
    exclusionInput.classList.add("input-text");
    exclusionInput.value = result["PMMGExtended"]["unpack_exceptions"] == undefined ? "" : result["PMMGExtended"]["unpack_exceptions"].join(",");
    exclusionInput.addEventListener("input", function () {
        result["PMMGExtended"]["unpack_exceptions"] = exclusionInput.value.split(",");
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    });
    tile.appendChild(exclusionInput);
    const moduleSettingsHeader = document.createElement('h3');
    moduleSettingsHeader.appendChild(document.createTextNode("Toggle Features"));
    moduleSettingsHeader.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Toggle features on and off. The yellow X cleans up any stray elements.", "right"));
    moduleSettingsHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(moduleSettingsHeader);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionContent);
    tile.appendChild(content);
    modules.forEach(mp => {
        const line = document.createElement('div');
        line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FontsRegular));
        content.appendChild(line);
        line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(mp.friendlyName));
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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
    const errorTextBox = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Error Loading File!");
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
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["s" /* downloadFile */])(output, "pmmg-settings" + Date.now().toString() + ".json");
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
    const errorNoteTextBox = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Error Loading File!");
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
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(fileOutput);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", __WEBPACK_IMPORTED_MODULE_0__util__["s" /* downloadFile */], "pmmg-notes" + Date.now().toString() + ".json");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["s" /* downloadFile */])(jsondata, "fio-endpoint" + Date.now().toString() + ".json", false);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["s" /* downloadFile */])(data, fileName);
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
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("All Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Buildings");
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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
        });
    }
    else {
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(parameters[1] + " Repairs");
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
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = result["PMMGExtended"]["repair_threshold"] ? result["PMMGExtended"]["repair_threshold"] : "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Buildings");
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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point));
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point));
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point));
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(2);


function Fin_pre(tile, parameters, result) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* clearChildren */])(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    if (!result["PMMGExtended"]["webappid"]) {
        return;
    }
    const url = "https://script.google.com/macros/s/" + result["PMMGExtended"]["webappid"] + "/exec?mode=%22fin%22&param=%22" + parameters[1] + "%22";
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* XITWebRequest */])(tile, parameters, Fin_post, url, "GET", undefined, undefined);
    return;
}
function Fin_post(tile, parameters, jsondata) {
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
    const tileHeader = document.createElement("h2");
    tileHeader.title = "Financial Overview";
    tileHeader.textContent = "Key Figures";
    tileHeader.classList.add("fin-title");
    tile.appendChild(tileHeader);
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(Math.round(data[0][2]).toLocaleString(), "Current Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(Math.round(data[0][7]).toLocaleString(), "Equity", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(Math.round(data[0][5]).toLocaleString(), "Liabilities", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    const now = data[0][0];
    var weekAgo = -1;
    var bestGuess = 86400000000;
    for (var i = 1; i < data.length; i++) {
        if (Math.abs(Math.abs(now - data[i][0]) - 7 * 86400000) < bestGuess) {
            bestGuess = Math.abs(Math.abs(now - data[i][0]) - 7 * 86400000);
            weekAgo = i;
        }
    }
    if (weekAgo != -1) {
        const profit = Math.round(data[0][7] - data[weekAgo][7]);
        const color = profit > 0 ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
        tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createFinancialTextBox */])(profit.toLocaleString(), "Profit", color));
    }
    const breakdownHeader = document.createElement("h2");
    breakdownHeader.title = "Financial Breakdown";
    breakdownHeader.textContent = "Inventory Breakdown";
    breakdownHeader.classList.add("fin-title");
    tile.appendChild(breakdownHeader);
    const table = document.createElement("table");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    const headers = ["Name", "Fixed Assets", "Current Assets", "Total Assets"];
    for (let title of headers) {
        const header = document.createElement("th");
        header.textContent = title;
        headRow.appendChild(header);
    }
    const body = document.createElement("tbody");
    table.appendChild(body);
    const breakdown = JSON.parse(data[0][8]);
    breakdown.sort(financialSort);
    for (let rowData of breakdown) {
        const row = document.createElement("tr");
        body.appendChild(row);
        const firstTableElem = document.createElement("td");
        row.appendChild(firstTableElem);
        firstTableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(rowData[0]));
        rowData.shift();
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
        }
    }
    tile.appendChild(table);
    return;
}
function financialSort(a, b) {
    return a[3] < b[3] ? 1 : -1;
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
        const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["u" /* findCorrespondingPlanet */])(planet, burn);
        var lastUpdated;
        try {
            lastUpdated = new Date(planetBurn["LastUpdate"] + "Z");
        }
        catch (_a) {
        }
        settings = Object(__WEBPACK_IMPORTED_MODULE_0__util__["u" /* findCorrespondingPlanet */])(planet, burnSettings);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    }));
    if (lastUpdated) {
        const lastUpdatedSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Last Updated: " + lastUpdated.toLocaleDateString(undefined, { day: "numeric", month: "numeric" }) + " " + lastUpdated.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }));
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
        const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createMaterialElement */])(material, "prun-remove-js", "none", false, true);
        if (matElem) {
            materialColumn.appendChild(matElem);
        }
        row.appendChild(materialColumn);
        const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(__WEBPACK_IMPORTED_MODULE_3__GameProperties__["d" /* MaterialNames */][material][0]);
        nameSpan.style.fontWeight = "bold";
        const nameColumn = document.createElement("td");
        nameColumn.appendChild(nameSpan);
        row.appendChild(nameColumn);
        const consColumn = document.createElement("td");
        consColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(cons[material].toLocaleString(undefined, { maximumFractionDigits: 1 }) + " / Day"));
        row.appendChild(consColumn);
        const invColumn = document.createElement("td");
        const invAmount = inv[material] == undefined ? 0 : inv[material];
        invColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(invAmount.toLocaleString(undefined)));
        row.appendChild(invColumn);
        const burn = invAmount == 0 ? 0 : -invAmount / cons[material];
        const burnColumn = document.createElement("td");
        burnColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(((burn < 500 && cons[material] < 0) ? Math.floor(burn).toLocaleString(undefined, { maximumFractionDigits: 0 }) : "∞") + " Days"));
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
        needColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(needAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })));
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(point));
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
        const table = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* createTable */])(tile, ["Contract ID", "Material", "Partner's Conditions", "My Conditions"]);
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
    let contractLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]);
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
            const materialElement = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createMaterialElement */])(materialCondition["MaterialTicker"], "prun-remove-js", materialCondition["MaterialAmount"], false, true);
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
        let partnerLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]);
        partnerColumn.appendChild(partnerLink);
    }
    else {
        let partnerLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(contract["PartnerName"], "FA " + faction);
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
    let conditionDiv = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextDiv */])("");
    let marker = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(" ★");
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
    let conditionDiv = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* createTextDiv */])("");
    let marker = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(condition["Status"] === "FULFILLED" ? "✓" : "X");
    marker.style.color = condition["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
    marker.style.fontWeight = "bold";
    let text = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(` ${friendlyConditionText[condition.Type]}`);
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
/* harmony export (immutable) */ __webpack_exports__["d"] = Sheets_pre;
/* harmony export (immutable) */ __webpack_exports__["a"] = Discord_pre;
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
    header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(parameters[2], tag));
    header.appendChild(document.createElement("br"));
    const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(parameters[1], tag);
    userElem.style.paddingLeft = "8px";
    header.appendChild(userElem);
    const volumeLine = document.createElement("div");
    volumeLine.id = "volume-line";
    volumeLine.style.padding = "2px 8px";
    volumeLine.style.color = "#999999";
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Volume ", tag));
    const volumeBar = document.createElement("progress");
    volumeBar.id = "volume-bar";
    volumeBar.classList.add(tag);
    volumeBar.classList.add("progress-bar");
    volumeBar.max = 1;
    volumeBar.value = volumeUsed / volumeTotal;
    volumeLine.appendChild(volumeBar);
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(volumeUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + volumeTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " m³", tag));
    header.appendChild(volumeLine);
    const weightLine = document.createElement("div");
    weightLine.id = "weight-line";
    weightLine.style.padding = "2px 8px";
    weightLine.style.color = "#999999";
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Weight ", tag));
    const weightBar = document.createElement("progress");
    weightBar.id = "weight-bar";
    weightBar.classList.add(tag);
    weightBar.classList.add("progress-bar");
    weightBar.max = 1;
    weightBar.value = weightUsed / weightTotal;
    weightLine.appendChild(weightBar);
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(weightUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + weightTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " t", tag));
    header.appendChild(weightLine);
    inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
    for (let item of inventoryData["StorageItems"]) {
        const mat = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true);
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
    titleDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(parameters[3] + " Inventories"));
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
        playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(player["UserName"]));
        playerDiv.firstChild.style.fontWeight = "bold";
        player["Locations"].forEach(location => {
            playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"].replace(/ /, "_")));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", generateNotesTable, tile);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", dispStoredNote, [noteName, textbox]);
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
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(name, "XIT NOTES_" + name));
        lengthColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(result["PMMG-Notes"][name].length.toLocaleString() + " Character" + (result["PMMG-Notes"][name].length == 1 ? "" : "s")));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreNote, [name, ""]);
            row.style.display = "none";
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
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
    return;
}
function dispStoredNote(result, params) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Notes", updateThenStoreNote, [noteName, textbox.value || ""]);
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
        tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Add a planet name to the end of the command!"));
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
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(settings[0]));
        var categories = "";
        settings[2].forEach(category => {
            if (!category[0]) {
                return;
            }
            categories += category[0] + ", ";
            return;
        });
        categories = categories.slice(0, -2);
        catColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(categories));
        modifyColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* createSmallButton */])("edit", createAddInterface, [tile, result, parameters, settings]));
        modifyColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* createSmallButton */])("delete", function (result, row, settings) {
            for (var i = 0; i < result["PMMGExtended"]["sorting"].length; i++) {
                if (result["PMMGExtended"]["sorting"][i] == settings) {
                    result["PMMGExtended"]["sorting"].splice(i, 1);
                    row.style.display = "none";
                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["B" /* makePopupSpacer */])(tile, overlapDiv));
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
    form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Abbreviation", prefilled ? settings[0] : "", "The abbreviation showing at the top of the inventory (ABC, CAT, etc.)"));
    if (prefilled) {
        for (var i = 0; i < settings[2].length; i++) {
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category " + (i + 1) + " Name", prefilled ? settings[2][i][0] : "", i == 0 ? "The name of the first category for materials" : ""));
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category " + (i + 1) + " MATs", prefilled ? settings[2][i][1].join(", ") : "", i == 0 ? "A list of materials in the first category. Separate tickers by a comma. (RAT, DW, etc.)" : ""));
        }
    }
    else {
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category 1 Name", "", "The name of the first category for materials."));
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category 1 MATs", "", "A list of materials in the first category. Separate tickers by a comma. (RAT, DW, etc.)"));
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
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category " + catNumber + " Name"), form.children[form.children.length - 4]);
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Category " + catNumber + " MATs"), form.children[form.children.length - 4]);
    });
    const burnRow = Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupCheckboxRow */])("Burn Sorting", settings[3] || false, "Add burn sorting as a secondary sorting method. Burn categories will show under the categories defined above.");
    form.appendChild(burnRow);
    const zeroRow = Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* createPopupCheckboxRow */])("Show Zeros", settings[4] || false, "Show item icons that have zero quantity.");
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
        const itemAbbreviation = Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.firstChild);
        const sortingInfo = [];
        for (var i = 1; i < form.children.length - 4; i += 2) {
            if (!form.children[i] || !form.children[i + 1]) {
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i]) == "" || Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i + 1]) == "") {
                continue;
            }
            sortingInfo.push([Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i]), Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i + 1]).replace(/ /g, "").split(",")]);
        }
        tile.removeChild(overlapDiv);
        if (!itemAbbreviation) {
            return;
        }
        if (prefilled) {
            for (var i = 0; i < result["PMMGExtended"]["sorting"].length; i++) {
                if (result["PMMGExtended"]["sorting"][i] == settings) {
                    result["PMMGExtended"]["sorting"][i] = [itemAbbreviation, parameters[1], sortingInfo, Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getCheckOfPopupRow */])(burnRow), Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getCheckOfPopupRow */])(zeroRow)];
                    break;
                }
            }
        }
        else {
            result["PMMGExtended"]["sorting"].push([itemAbbreviation, parameters[1], sortingInfo, Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getCheckOfPopupRow */])(burnRow), Object(__WEBPACK_IMPORTED_MODULE_0__util__["y" /* getCheckOfPopupRow */])(zeroRow)]);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
        Sort(tile, parameters, result);
        return;
    });
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["B" /* makePopupSpacer */])(tile, overlapDiv));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Lists", generateListTable, tile);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Lists", dispStoredList, [tile, parameters]);
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
        nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(name, "XIT LIST_" + name));
        lengthColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(result["PMMG-Lists"][name].length.toLocaleString()));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        deleteColumn.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
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
            textColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createLink */])(linkInfo[0], linkInfo[1]));
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
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["B" /* makePopupSpacer */])(tile, overlapDiv));
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
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link " + (i + 1) + " Label", settings[i][0], i == 0 ? "The label of the first link." : ""));
            form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link " + (i + 1) + " Command", settings[i][1], i == 0 ? "The command opened by the first link (ex: CX NC1)" : ""));
        }
    }
    else {
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link 1 Label", "", "The label of the first link."));
        form.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link 1 Command", "", "The command opened by the first link (ex: CX NC1)"));
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
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link " + catNumber + " Label"), form.children[form.children.length - 2]);
        form.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* createPopupInputRow */])("Link " + catNumber + " Command"), form.children[form.children.length - 2]);
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
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i]) == "" || Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i + 1]) == "") {
                continue;
            }
            commandInfo.push([Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i]), Object(__WEBPACK_IMPORTED_MODULE_0__util__["A" /* getValueOfPopupRow */])(form.children[i + 1])]);
        }
        tile.removeChild(overlapDiv);
        result["PMMG-Lists"][listName] = commandInfo;
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
        CommandLists(tile, parameters);
        return;
    });
    greyStripes.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["B" /* makePopupSpacer */])(tile, overlapDiv));
    return;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class OrderETAs {
    constructor() {
        this.tag = "pb-order-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["D" /* parseDuration */])(prodItem.children[0].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration + timeElapsed)) {
                                prodItem.children[0].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* convertDurationToETA */])(duration + timeElapsed)})`, this.tag));
                            }
                        }
                        else {
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["D" /* parseDuration */])(prodItem.children[1].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration)) {
                                prodItem.children[1].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* convertDurationToETA */])(duration)})`, this.tag));
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
/* 27 */
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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("WF");
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
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["C" /* parseBaseName */])(nameElem.textContent);
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
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["u" /* findCorrespondingPlanet */])(name, burn);
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
            var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["v" /* findInventoryAmount */])(targetRow.children[0].textContent, planetBurn);
            var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["t" /* findBurnAmount */])(targetRow.children[0].textContent, planetBurn);
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
            outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(daysLeft));
            firstChild = totalData.firstChild;
            if (firstChild != null) {
                totalData.removeChild(firstChild);
            }
            totalData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
        }
    });
    buffer.classList.add("pb-loaded");
    return;
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FleetETAs {
    constructor() {
        this.tag = "pb-flt-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["D" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FleetETAs;



/***/ }),
/* 29 */
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["w" /* genericCleanup */])(this.tag);
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
            var displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* createTextSpan */])("--", this.tag);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ShippingAds {
    constructor() {
        this.tag = "pb-shipping-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShippingAds;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class QueueLoad {
    constructor() {
        this.tag = "pb-queue-load";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["D" /* parseDuration */])(etaSpan.textContent);
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
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* createTextSpan */])(` ${percent}%`, this.tag);
                        textField.appendChild(span);
                    }
                });
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QueueLoad;



/***/ }),
/* 32 */
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
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ScreenUnpack {
    constructor(exclusions) {
        this.tag = "pb-screens";
        exclusions = exclusions == undefined ? [] : exclusions;
        this.exclusions = [];
        exclusions.forEach(ex => { this.exclusions.push(ex.toUpperCase()); });
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
            const buttonElem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["j" /* createNode */])(button);
            buttonElem.classList.add(this.tag);
            navbar.appendChild(buttonElem);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenUnpack;



/***/ }),
/* 34 */
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
        full && Object(__WEBPACK_IMPORTED_MODULE_2__util__["w" /* genericCleanup */])(this.tag);
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
            const buttonText = Object(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* createTextSpan */])(buttonInfo[0].toUpperCase(), this.tag);
            const sliver = document.createElement("div");
            button.classList.add(this.tag);
            sliver.classList.add(this.tag);
            button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarButton);
            buttonText.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarText);
            sliver.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSliver);
            button.appendChild(buttonText);
            button.appendChild(sliver);
            sidebar.appendChild(button);
            button.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_2__util__["H" /* showBuffer */])(buttonInfo[1]); });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sidebar;



/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class CalculatorButton {
    constructor() {
        this.tag = "pb-calc";
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* genericCleanup */])(this.tag);
    }
    run() {
        const calcTags = ["LM", "CX", "XIT"];
        calcTags.forEach(tag => {
            const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])(tag);
            buffers.forEach(buffer => {
                if ((buffer.children[3] || buffer.children[2]).firstChild.classList.contains(this.tag) || (buffer.children[3] || buffer.children[2]).children[1].classList.contains(this.tag)) {
                    return;
                }
                const calcDiv = document.createElement("div");
                calcDiv.classList.add(this.tag);
                calcDiv.classList.add("button-upper-right");
                (buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild.id == "refresh" ? (buffer.children[3] || buffer.children[2]).children[1] : (buffer.children[3] || buffer.children[2]).firstChild);
                calcDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("🖩", this.tag));
                calcDiv.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["H" /* showBuffer */])("XIT CALCULATOR"); });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatorButton;



/***/ }),
/* 37 */
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["w" /* genericCleanup */])(this.tag);
    }
    run() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["x" /* getBuffers */])("CONTD ").forEach(buffer => {
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
                rowSpacer.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* createTextSpan */])(labelText, this.tag), rowSpacer.firstChild);
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
                rowSpacer.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* createTextSpan */])(labelText, this.tag), rowSpacer.firstChild);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContractDrafts;



/***/ }),
/* 38 */
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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("COM");
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
/* 39 */
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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("INV ");
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
            const invName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["E" /* parseInvName */])(baseNameElem[0].textContent);
            if (!invName) {
                return;
            }
            const planetNameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].InventoryName);
            const planetName = planetNameElem ? Object(__WEBPACK_IMPORTED_MODULE_0__util__["F" /* parsePlanetName */])(planetNameElem.textContent) : "";
            const burn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["u" /* findCorrespondingPlanet */])(planetName, this.fullBurn[this.username]);
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
                    }, "250");
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
        const shipBuffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("SHPI ");
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
            const shipName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["E" /* parseInvName */])(shipNameElem[0].textContent);
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
                    }, "250");
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
                                    Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["H" /* showBuffer */])("XIT SORT_" + planetName);
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
                    const matElement = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createMaterialElement */])(ticker, tag, "0", true, false);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
/* 40 */
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
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("CX ");
        if (!buffers) {
            return;
        }
        buffers.forEach(buffer => {
            minimizeHeaders(buffer, this.minByDefault, this.tag);
        });
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("CONT ");
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
/* 41 */
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["w" /* genericCleanup */])(this.tag);
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
                const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])(`${partnercode}`, this.tag);
                nameSpan.style.width = "100px";
                contract.insertBefore(nameSpan, contract.firstChild);
                return;
            }
            const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Unknown", this.tag);
            nameSpan.style.width = "100px";
            contract.insertBefore(nameSpan, contract.firstChild);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PendingContracts;



/***/ }),
/* 42 */
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
        var buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("BBL");
        if (buffers) {
            buffers.forEach(buffer => {
                ClearBuildingLists(buffer, this.result, this.tag);
            });
        }
        ;
        buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["x" /* getBuffers */])("BS");
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
                console.log(row);
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
                                else if (bar != null && bar.length > 0) {
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
                                    data.innerHTML = newbar.outerHTML + data.innerHTML;
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
    var editdiv = elements[1].getElementsByTagName("div")[0];
    editdiv.innerHTML = elements[0].getElementsByTagName("progress")[0].outerHTML + editdiv.getElementsByTagName("div")[0].outerHTML;
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
                var bar = data[4].getElementsByTagName("div")[0];
                bar.innerHTML = bar.getElementsByTagName("progress")[0].outerHTML + bar.getElementsByTagName("progress")[0].title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdlMzNiNjNhZGE4OTE2ZWIzMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGVja2xpc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGlnaHRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2NhbE1hcmtldEFkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlUnVubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU3RhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1JlcGFpcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGF0LnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvRmluYW5jZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9CdXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU2hlZXRUYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1dlYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL05vdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU29ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VDcmVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9JbnZlbnRvcnlPcmdhbml6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlck1pbmltaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGVuZGluZ0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcGFjdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsK0NBQStDO0FBQy9DLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBO0FBQ0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBLGdCQUFn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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNqMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxvREFBSztBQUNwRjtBQUNBLG9FQUFvRSxpRUFBVSxDQUFDLG9EQUFLO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGlFQUFVLENBQUMsb0RBQUs7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ087QUFDUCx3REFBd0QsMkRBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjdlMzNiNjNhZGE4OTE2ZWIzMGIiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMsIFBsYW5ldE5hbWVzLCBTeXN0ZW1OYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IFN0eWxlLCBDYXRlZ29yeUNvbG9ycywgV2l0aFN0eWxlcyB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoZmlsZURhdGEsIGZpbGVOYW1lLCBpc0pTT04gPSB0cnVlKSB7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2lzSlNPTiA/IEpTT04uc3RyaW5naWZ5KGZpbGVEYXRhKSA6IGZpbGVEYXRhXSwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBjb25zdCB1cmxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB1cmxFbGVtZW50LnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcclxuICAgIHVybEVsZW1lbnQuaHJlZiA9IHVybDtcclxuICAgIHVybEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgdXJsRWxlbWVudC5jbGljaygpO1xyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGh0bWxTdHJpbmcpIHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uTGFiZWw7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZWRTZWNvbmRzKSB7XHJcbiAgICBjb25zdCBldGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGV0YS5zZXRTZWNvbmRzKGV0YS5nZXRTZWNvbmRzKCkgKyBwYXJzZWRTZWNvbmRzKTtcclxuICAgIGNvbnN0IGRpZmZUaW1lID0gTWF0aC5hYnMoZXRhLmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKCkpO1xyXG4gICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmZsb29yKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgIGxldCByZXQgPSBldGEudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XHJcbiAgICBpZiAoZGlmZkRheXMgPiAwKSB7XHJcbiAgICAgICAgcmV0ICs9IGAgKyR7ZGlmZkRheXN9ZGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBkYXlzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypkLyk7XHJcbiAgICBjb25zdCBob3VycyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqaC8pO1xyXG4gICAgY29uc3QgbWludXRlcyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqbS8pO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqcy8pO1xyXG4gICAgbGV0IHBhcnNlZFNlY29uZHMgPSAwO1xyXG4gICAgaWYgKGRheXMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KGRheXNbMV0pICogODY0MDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaG91cnMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KGhvdXJzWzFdKSAqIDM2MDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWludXRlcykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQobWludXRlc1sxXSkgKiA2MDtcclxuICAgIH1cclxuICAgIGlmIChzZWNvbmRzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChzZWNvbmRzWzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZWRTZWNvbmRzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0U3Bhbih0ZXh0LCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG5ld1NwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gbmV3U3BhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dERpdih0ZXh0LCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlTb3J0KGEsIGIpIHtcclxuICAgIGlmICghTWF0ZXJpYWxOYW1lc1thXSB8fCAhTWF0ZXJpYWxOYW1lc1tiXSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW2JdWzFdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEgfHwgIXBsYW5ldCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XSAmJiBQbGFuZXROYW1lc1twbGFuZXRdLnRvTG93ZXJDYXNlKCkgPT0gZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmFzZU5hbWUodGV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIChbQS1aXXsyfS1bMC05XXszfSBbYS16XSkgQmFzZS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV0ucmVwbGFjZShcIiBcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCAoW0EteiBdKikgLSAoW0EteiBdKikgQmFzZS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCAoW0EteiBdKikgKFtBLXpdKSBCYXNlLyk7XHJcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdICYmIFN5c3RlbU5hbWVzW21hdGNoWzFdLnRvVXBwZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW1OYW1lc1ttYXRjaFsxXS50b1VwcGVyQ2FzZSgpXSArIG1hdGNoWzJdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCBbQS1aXXsyfS1bMC05XXszfSAtIChbQS16IF0qKSBCYXNlLyk7XHJcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW52TmFtZSh0ZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGxhbmV0TmFtZSh0ZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXFwoKC4qPylcXCkvKTtcclxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKHN0b3JhZ2VOYW1lLCBjYWxsYmFja0Z1bmN0aW9uLCBwYXJhbXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlTmFtZSkudGhlbihjYWxsYmFja0Z1bmN0aW9uKHBhcmFtcykpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbc3RvcmFnZU5hbWVdLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocmVzdWx0LCBwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNoaWxkcmVuKGVsZW0pIHtcclxuICAgIGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uY2hpbGRyZW5bMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXR0aW5ncyhyZXN1bHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldChyZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChyZXN1bHQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBjYWxsYmFja0Z1bmN0aW9uLCB1cmwsIHJlcXVlc3RUeXBlID0gXCJHRVRcIiwgaGVhZGVyLCBjb250ZW50KSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBEYXRhIENvdWxkIE5vdCBCZSBMb2FkZWQhIFRpbWVkIE91dCFcIjtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24odGlsZSwgcGFyYW1ldGVycywgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICB4aHIuc2VuZChjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIsIGFtb3VudCA9IFwibm9uZVwiLCB0ZXh0ID0gZmFsc2UsIHNtYWxsID0gZmFsc2UpIHtcclxuICAgIGlmICghTWF0ZXJpYWxOYW1lc1t0aWNrZXJdICYmIHRpY2tlciAhPSBcIlNIUFRcIikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW1wiU2hpcG1lbnRcIl0pWzBdO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFt1bmRlZmluZWQsIFwic2hpcG1lbnRcIl0pWzFdO1xyXG4gICAgY29uc3QgbWF0VGV4dCA9IGNyZWF0ZVRleHRTcGFuKHRpY2tlciwgY2xhc3NOYW1lKTtcclxuICAgIG1hdFRleHQuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdFRleHQpKTtcclxuICAgIGNvbnN0IG1hdFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0V3JhcHBlcikpO1xyXG4gICAgbWF0VGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobWF0VGV4dCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXRlcmlhbC5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxFbGVtZW50KSk7XHJcbiAgICBtYXRlcmlhbC5hcHBlbmRDaGlsZChtYXRUZXh0V3JhcHBlcik7XHJcbiAgICBtYXRlcmlhbC5zdHlsZS5iYWNrZ3JvdW5kID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzBdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMV07XHJcbiAgICBtYXRlcmlhbC50aXRsZSA9IG5hbWU7XHJcbiAgICBtYXRlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dCdWZmZXIoXCJNQVQgXCIgKyB0aWNrZXIudG9VcHBlckNhc2UoKSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG1hdGVyaWFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsV3JhcHBlcikpO1xyXG4gICAgbWF0ZXJpYWxXcmFwcGVyLmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsV3JhcHBlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxXcmFwcGVyV3JhcHBlcikpO1xyXG4gICAgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbFdyYXBwZXIpO1xyXG4gICAgY29uc3Qgb3V0ZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdXRlckxheWVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE91dGVyKSk7XHJcbiAgICBvdXRlckxheWVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIG91dGVyTGF5ZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxXcmFwcGVyV3JhcHBlcik7XHJcbiAgICBpZiAoYW1vdW50ICYmIGFtb3VudCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsTnVtYmVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxOdW1iZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE51bWJlcldyYXBwZXIpKTtcclxuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxOdW1iZXJXcmFwcGVyKTtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbE51bWJlciA9IGNyZWF0ZVRleHREaXYoYW1vdW50LCBjbGFzc05hbWUpO1xyXG4gICAgICAgIG1hdGVyaWFsTnVtYmVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE51bWJlcikpO1xyXG4gICAgICAgIG1hdGVyaWFsTnVtYmVyV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbE51bWJlcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRFbGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRleHRFbGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxOYW1lVGV4dCkpO1xyXG4gICAgICAgIGNvbnN0IHRleHRFbGVtID0gY3JlYXRlVGV4dFNwYW4obmFtZSwgY2xhc3NOYW1lKTtcclxuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xyXG4gICAgICAgIG91dGVyTGF5ZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW1XcmFwcGVyKTtcclxuICAgIH1cclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIG1hdGVyaWFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWF0LWVsZW1lbnQtc21hbGxcIik7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFsV3JhcHBlcjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1hdGVyaWFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWF0LWVsZW1lbnQtbGFyZ2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0ZXJMYXllcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XHJcbiAgICBjb25zdCBsaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtEaXYuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpbmtEaXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTmV3QkZSQnV0dG9uKTtcclxuICAgIGlmIChidXR0b24gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFN1Ym1pdENvbW1hbmQgPSAoaW5wdXQsIGNtZCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XHJcbiAgICBidXR0b24uY2xpY2soKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShpbnB1dCwgdmFsdWUpIHtcclxuICAgIHZhciBwcm9wRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93W1wiSFRNTElucHV0RWxlbWVudFwiXS5wcm90b3R5cGUsIFwidmFsdWVcIik7XHJcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XHJcbiAgICBpZiAobmF0aXZlSW5wdXRWYWx1ZVNldHRlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5wdXQsIHZhbHVlKTtcclxuICAgIHZhciBpbnB1dEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICBpbnB1dEV2ZW50LmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCB0cnVlKTtcclxuICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoaW5wdXRFdmVudCk7XHJcbn1cclxuZnVuY3Rpb24gbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoc2VsZWN0b3IsIGNhbGxiYWNrLCBvbmx5T25jZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IGdldEVsZW1lbnRzRnJvbU5vZGVzID0gKG5vZGVzKSA9PiAoQXJyYXkuZnJvbShub2RlcykpLmZsYXRNYXAobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSAzID8gbnVsbCA6IEFycmF5LmZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xyXG4gICAgbGV0IG9uTXV0YXRpb25zT2JzZXJ2ZWQgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHNGcm9tTm9kZXMobXV0YXRpb24uYWRkZWROb2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlPbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsZXQgY29udGFpbmVyU2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xyXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNVbmhpZGUoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lICsgXCItaGlkZGVuXCIpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lICsgXCItaGlkZGVuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRlZENsZWFudXAoY2xhc3NOYW1lLCBlbGVtZW50KSB7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVycyhidWZmZXJDb2RlKSB7XHJcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKHRyYW5zbGF0ZSguLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonKSwgJyR7YnVmZmVyQ29kZX0nKV0vLi4vLi5gLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcclxuICAgIHZhciBub2RlO1xyXG4gICAgd2hpbGUgKG5vZGUgPSBub2Rlcy5pdGVyYXRlTmV4dCgpKSB7XHJcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlYUGF0aCh4cGF0aCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoeHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcclxuICAgIHZhciBzb3J0ZXIgPSBbXTtcclxuICAgIGlmICh0YWJsZS5jaGlsZHJlblsxXSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSByb3dzW2ldLmNoaWxkcmVuW2NvbHVtbl07XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc29ydGVyLnB1c2goW2l0ZW0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCwgcm93c1tpXV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRUeXBlID09IFwiYWxwaFwiKSB7XHJcbiAgICAgICAgc29ydGVyLnNvcnQodGFibGVTb3J0QWxwaCk7XHJcbiAgICB9XHJcbiAgICBzb3J0ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0YWJsZS5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sIGl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGFibGVTb3J0QWxwaChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZSh0aWxlLCBoZWFkZXJzKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG4gICAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgdGhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgcmV0dXJuIHRib2R5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sVGlwKHRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGA8c3BhbiBkYXRhLXRvb2x0aXA9XCIke3RleHR9XCIgZGF0YS10b29sdGlwLXBvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIiBjbGFzcz1cImtmVTc4RWFhT1ZiUVIyWU0wZWVHZXc9PVwiIHN0eWxlPVwiZmxvYXQ6IHJldmVydDtmb250LXNpemU6IDEycHg7bWFyZ2luLXRvcDotNHB4O1wiPuKTmDwvc3Bhbj5gO1xyXG4gICAgcmV0dXJuIHRvb2x0aXAuZmlyc3RDaGlsZCB8fCB0b29sdGlwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wdXBTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TcGFjZXIpO1xyXG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3BhY2VyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cElucHV0Um93KGxhYmVsLCB0ZXh0ID0gXCJcIiwgdG9vbHRpcCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xyXG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcclxuICAgIH1cclxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgICBjb25zdCBpbnB1dElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XHJcbiAgICBjb25zdCBpbnB1dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRJbnB1dC5zdHlsZS53aWR0aCA9IFwiODAlXCI7XHJcbiAgICBpbnB1dElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0SW5wdXQpO1xyXG4gICAgaW5wdXRJbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICByZXR1cm4gaW5wdXRSb3c7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3cobGFiZWwsIGVuYWJsZWQgPSBmYWxzZSwgdG9vbHRpcCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xyXG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcclxuICAgIH1cclxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgICBjb25zdCBpbnB1dElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XHJcbiAgICBjb25zdCBpbnB1dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgaW5wdXRJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dElucHV0KTtcclxuICAgIGlucHV0SW5wdXQuY2hlY2tlZCA9IGVuYWJsZWQ7XHJcbiAgICByZXR1cm4gaW5wdXRSb3c7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlT2ZQb3B1cFJvdyhyb3cpIHtcclxuICAgIGlmICghcm93IHx8ICFyb3cuY2hpbGRyZW5bMV0gfHwgIXJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQudmFsdWUgfHwgXCJcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tPZlBvcHVwUm93KHJvdykge1xyXG4gICAgaWYgKCFyb3cgfHwgIXJvdy5jaGlsZHJlblsxXSB8fCAhcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCB8fCBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxCdXR0b24obGFiZWwsIGNsaWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNtYWxsQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBjbGlja0Z1bmN0aW9uKC4uLnBhcmFtZXRlcnMpOyB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRyYWN0RGljdChjb250cmFjdHMsIHVzZXJuYW1lLCBjb250cmFjdGRpY3QpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJhY3RzW3VzZXJuYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb250cmFjdHNbdXNlcm5hbWVdW2ldO1xyXG4gICAgICAgIGNvbnRyYWN0ZGljdFtlbGVtZW50WydDb250cmFjdExvY2FsSWQnXV0gPSBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJPcmRlclNsb3RfX2NvbnRhaW5lcl9fX1lGeWs4YTdcIixcclxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nUHJvZHVjdGlvblF1ZXVlX190YWJsZV9fX2pIUUd5VUknXVwiLFxyXG4gICAgQnVmZmVySGVhZGVyOiAnVGlsZUZyYW1lX19jbWRfX19TY0JZVzBuIHR5cGVfX3R5cGUtdmVyeS1zbWFsbF9fX0hhVk1xckUnLFxyXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxyXG4gICAgTE1Qb3N0Rm9ybTogXCJmb3JtW2NsYXNzfj0nTG9jYWxNYXJrZXRQb3N0X19mb3JtX19fQ0FWUGRERSddXCIsXHJcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcImRpdltjbGFzc349J1RpbGVGcmFtZV9fdGl0bGVfX194UmNaQ1B4J11cIixcclxuICAgIFhJVFRpbGU6IFwiZGl2W2NsYXNzfj0nU2Nyb2xsVmlld19fdmlld19fX292ZjU5VGsnXSA+IGRpdlwiLFxyXG4gICAgQnVmZmVyVGl0bGU6IFwiZGl2W2NsYXNzfj0nVGlsZUZyYW1lX190aXRsZV9fX3hSY1pDUHgnXVwiLFxyXG4gICAgTm90aWZpY2F0aW9uOiBcImRpdltjbGFzc349J0FsZXJ0TGlzdEl0ZW1fX2NvbnRhaW5lcl9fX202ZUgySngnXVwiLFxyXG4gICAgUHJvZFF1ZXVlOiBcImRpdltjbGFzc349J1NpdGVQcm9kdWN0aW9uTGluZXNfX2NvbHVtbl9fX19zM2NUazcnXVwiLFxyXG4gICAgQnVmZmVyUGFuZWw6IFwiZGl2W2NsYXNzfj0nU2Nyb2xsVmlld19fdmlld19fX292ZjU5VGsnXVwiLFxyXG4gICAgTmV3QkZSQnV0dG9uOiBcIlRPVVJfVEFSR0VUX0JVVFRPTl9CVUZGRVJfTkVXXCIsXHJcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXHJcbiAgICBCdWZmZXJUZXh0RmllbGQ6IFwiaW5wdXRbY2xhc3N+PSdQYW5lbFNlbGVjdG9yX19pbnB1dF9fX3dVc3RIck8nXVwiLFxyXG4gICAgQnVmZmVyTGlzdDogXCIjY29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgzKVwiLFxyXG4gICAgU2NyZWVuQ29udHJvbHM6IFwiVE9VUl9UQVJHRVRfU0NSRUVOX0NPTlRST0xTXCIsXHJcbiAgICBMZWZ0U2lkZWJhcjogXCJUT1VSX1RBUkdFVF9TSURFQkFSX0xFRlRfMDJcIixcclxuICAgIEJ1ZmZlckFyZWE6IFwiZGl2W2NsYXNzfj0nVGlsZV9fc2VsZWN0b3JfX19IWU1tTkVPJ11cIixcclxuICAgIFNjcmVlbk5hbWU6IFwic3BhbltjbGFzc349J1NjcmVlbkNvbnRyb2xzX19jdXJyZW50U2NyZWVuTmFtZV9fX0kyc0lZYWcnXVwiLFxyXG4gICAgTWF0ZXJpYWxJY29uOiBcIkdyaWRJdGVtVmlld19faW1hZ2VfX195TW9LT1pWXCIsXHJcbiAgICBDaGF0TGluazogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxyXG4gICAgSW52ZW50b3J5TmFtZTogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxyXG4gICAgRnVsbE1hdGVyaWFsSWNvbjogXCJkaXZbY2xhc3N+PSdHcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejgnXVwiLFxyXG4gICAgSW52ZW50b3J5OiBcImRpdltjbGFzc349J0ludmVudG9yeVZpZXdfX2dyaWRfX19VeVJRU1g4J11cIixcclxuICAgIE1hdGVyaWFsVGV4dDogXCJzcGFuW2NsYXNzfj0nQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCddXCIsXHJcbiAgICBJbnZlbnRvcnlTb3J0T3B0aW9uczogXCJkaXZbY2xhc3N+PSdJbnZlbnRvcnlTb3J0Q29udHJvbHNfX2NvbnRyb2xzX19fcWs1aGVBWiddXCIsXHJcbiAgICBDaGF0QXJlYTogXCJkaXZbY2xhc3N+PSdDaGFubmVsX19tZXNzYWdlQW5kVXNlckxpc3RfX19OQ2dRQXRXJ11cIixcclxuICAgIE1hdGVyaWFsUXVhbnRpdHk6IFwiZGl2W2NsYXNzfj0nTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKJ11cIixcclxuICAgIEhlYWRlclJvdzogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19jb250YWluZXJQYXNzaXZlX19fRnJCZHlHVSddXCIsXHJcbiAgICBGb3JtSW5wdXRSb3c6IFwiZGl2W2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZCddXCIsXHJcbiAgICBDb250REZvcm06IFwiZGl2W2NsYXNzfj0nRHJhZnRDb25kaXRpb25FZGl0b3JfX2Zvcm1fX19mRjcyYkpNJ10gPiBmb3JtXCIsXHJcbiAgICBDb250RENvbmRpdGlvbnNUYWJsZTogXCJkaXZbY2xhc3N+PSdEcmFmdF9fY29uZGl0aW9uc19fX2JjSVVuZEgnXSA+IHRhYmxlID4gdGJvZHlcIixcclxuICAgIENvbnRERm9ybUxhYmVsOiBcImxhYmVsW2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fbGFiZWxfX19hUUIxNWVCJ11cIixcclxuICAgIENvbnRERm9ybVJvd1NwYWNlcjogXCJkaXZbY2xhc3N+PSdEeW5hbWljSW5wdXRfX2R5bmFtaWNfX19DZDRHa2J6J11cIixcclxuICAgIFNpZGViYXJDb250cmFjdDogXCJkaXZbY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek4nXVwiLFxyXG4gICAgU2lkZWJhckNvbnRyYWN0SWQ6IFwic3BhbltjbGFzc349J1NpZGViYXJfX2NvbnRyYWN0SWRfX19MZzg1VFJaJ11cIixcclxuICAgIEJ1aWxkaW5nTGlzdDogXCJkaXZbY2xhc3N+PSdTZWN0aW9uTGlzdF9fY29udGFpbmVyX19fRXRVeld5aSddXCIsXHJcbiAgICBEaXZpZGVyOiBcImRpdltjbGFzc349J1NlY3Rpb25MaXN0X19kaXZpZGVyX19fY3dXTzQ1diddXCJcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2VsZWN0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFN0eWxlID0ge1xyXG4gICAgQnV0dG9uOiBbXCJCdXR0b25fX2J0bl9fX1VKR1oxYjdcIl0sXHJcbiAgICBCdXR0b25QcmltYXJ5OiBbXCJCdXR0b25fX3ByaW1hcnlfX19fbE9iUGl3XCJdLFxyXG4gICAgQnV0dG9uU3VjY2VzczogW1wiQnV0dG9uX19zdWNjZXNzX19fYkNpSVZYd1wiXSxcclxuICAgIEJ1dHRvbkRpc2FibGVkOiBbXCJCdXR0b25fX2Rpc2FibGVkX19fX3g4aTdYRlwiXSxcclxuICAgIEJ1dHRvbkVuYWJsZWQ6IFtcIkJ1dHRvbl9fcHJpbWFyeV9fX19sT2JQaXdcIl0sXHJcbiAgICBCdXR0b25EYW5nZXI6IFtcIkJ1dHRvbl9fZGFuZ2VyX19fUzJyU09FU1wiXSxcclxuICAgIFNtYWxsQnV0dG9uOiBbXCJCdXR0b25fX2RhcmtJbmxpbmVfX196X1lLYTkxXCIsIFwiQnV0dG9uX19kYXJrX19fdmRKYmNjOFwiLCBcIkJ1dHRvbl9fYnRuX19fVUpHWjFiN1wiLCBcIkJ1dHRvbl9faW5saW5lX19fRmZ3OWJiblwiXSxcclxuICAgIFNpZGViYXJTZWN0aW9uSGVhZDogW1wiU2lkZWJhcl9fc2VjdGlvbkhlYWRfX19fTkhMS0RUXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkNvbnRlbnQ6IFtcIlNpZGViYXJfX3NlY3Rpb25Db250ZW50X19fd2dHWUZvcFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxyXG4gICAgU2lkZWJhckxpbmU6IFtcIlNpZGViYXJfX2NvbnRyYWN0X19fSjBnbWx6TlwiLCBcIlNpZGViYXJfX3NpZGViYXItbGluZV9fX2JFMnJiUmJcIl0sXHJcbiAgICBGb250c1JlZ3VsYXI6IFtcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxyXG4gICAgU2lkZWJhclRleHQ6IFtcIkZyYW1lX190b2dnbGVMYWJlbF9fX0JURmNlOEhcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXHJcbiAgICBTaWRlYmFyU2xpdmVyOiBbXCJGcmFtZV9fdG9nZ2xlSW5kaWNhdG9yU2Vjb25kYXJ5X19fZnJYNENHaVwiLCBcIkZyYW1lX190b2dnbGVJbmRpY2F0b3JfX19aS1FRZ0FMXCJdLFxyXG4gICAgU2lkZWJhckJ1dHRvbjogW1wiRnJhbWVfX3RvZ2dsZV9fX1YzaUhwQjdcIl0sXHJcbiAgICBDb250cmFjdExpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcclxuICAgIENvbnRyYWN0TmFtZTogW1wiemhpeHA0MDhZRjA4Mkl6QTVLUHZmQT09XCJdLFxyXG4gICAgQ29udHJhY3RWaWV3OiBbXCJrcTVCckdLblRVVHFDRFlNcExROTBnPT1cIl0sXHJcbiAgICBSYWRpb0J1dHRvbjogW1wiUmFkaW9JdGVtX19jb250YWluZXJfX19DU2N6cW1HXCJdLFxyXG4gICAgU2V0dGluZ3NCdXR0b246IFtcIlJhZGlvSXRlbV9fY29udGFpbmVyX19fQ1NjenFtR1wiLCBcIlJhZGlvSXRlbV9fY29udGFpbmVySG9yaXpvbnRhbF9fX190cmxYRG9cIl0sXHJcbiAgICBSYWRpb0J1dHRvblVuVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCJdLFxyXG4gICAgU2V0dGluZ3NCYXJVbnRvZ2dsZWQ6IFtcIlJhZGlvSXRlbV9faW5kaWNhdG9yX19fUXpRdGpoQVwiLCBcIlJhZGlvSXRlbV9faW5kaWNhdG9ySG9yaXpvbnRhbF9fX1N3dHdUSWhcIl0sXHJcbiAgICBSYWRpb0J1dHRvblRvZ2dsZWQ6IFtcIlJhZGlvSXRlbV9faW5kaWNhdG9yX19fUXpRdGpoQVwiLCBcIlJhZGlvSXRlbV9fYWN0aXZlX19fQ0RzY09RVlwiLCBcImVmZmVjdHNfX3NoYWRvd1ByaW1hcnlfX19FYlhKUW9yXCJdLFxyXG4gICAgU2V0dGluZ3NCYXJUb2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2luZGljYXRvckhvcml6b250YWxfX19Td3R3VEloXCIsIFwiUmFkaW9JdGVtX19hY3RpdmVfX19DRHNjT1FWXCIsIFwiZWZmZWN0c19fc2hhZG93UHJpbWFyeV9fX0ViWEpRb3JcIl0sXHJcbiAgICBSYWRpb0J1dHRvblZhbHVlOiBbXCJSYWRpb0l0ZW1fX3ZhbHVlX19fWWQxR3QxVFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1zbWFsbF9fX3BNUWhNUU9cIl0sXHJcbiAgICBTZXR0aW5nc1RleHQ6IFtcIlJhZGlvSXRlbV9fdmFsdWVfX19ZZDFHdDFUXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXNtYWxsX19fcE1RaE1RT1wiLCBcIlJhZGlvSXRlbV9fdmFsdWVIb3Jpem9udGFsX19fRDVBWEo5UFwiXSxcclxuICAgIE92ZXJsYXBwaW5nRGl2OiBbXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcclxuICAgIEdyZXlTdHJpcGVzOiBbXCJPdmVybGF5X19iYWNrZ3JvdW5kX19faWVacEhpRlwiLCBcIk92ZXJsYXlfX292ZXJsYXlfX19OQTlIVjh5XCJdLFxyXG4gICAgU3BhY2VyOiBbXCJPdmVybGF5X19jbG9zZV9fX2J4R29NSWxcIl0sXHJcbiAgICBQcm9ncmVzc0JhcjogW1wiUHJvZ3Jlc3NCYXJfX3ByaW1hcnlfX19PMzBqQnFxXCIsIFwiUHJvZ3Jlc3NCYXJfX3Byb2dyZXNzX19fZWI0S2h1V1wiXSxcclxuICAgIFByb2dyZXNzQmFyQ29sb3JzOiBbXCJQcm9ncmVzc0Jhcl9fcHJpbWFyeV9fX08zMGpCcXFcIiwgXCJncmV5LXByb2dyZXNzLWJhclwiLCBcImdvb2QtcHJvZ3Jlc3MtYmFyXCIsIFwid2FybmluZy1wcm9ncmVzcy1iYXJcIiwgXCJkYW5nZXItcHJvZ3Jlc3MtYmFyXCJdLFxyXG4gICAgUHJvZ3Jlc3NCYXJHb29kOiBbXCJnb29kLXByb2dyZXNzLWJhclwiXSxcclxuICAgIFByb2dyZXNzQmFyV2FybmluZzogW1wid2FybmluZy1wcm9ncmVzcy1iYXJcIl0sXHJcbiAgICBQcm9ncmVzc0JhckRhbmdlcjogW1wiZGFuZ2VyLXByb2dyZXNzLWJhclwiXSxcclxuICAgIENlbnRlckludGVyZmFjZTogW1wiT3ZlcmxheV9fY2hpbGRyZW5fX19yZ3RWYXhjXCJdLFxyXG4gICAgRm9ybVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZFwiLCBcImZvcm1zX19hY3RpdmVfX193bjlLUVRaXCIsIFwiZm9ybXNfX2Zvcm0tY29tcG9uZW50X19feVRnUF9RYVwiXSxcclxuICAgIEhlYWRlclJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyUGFzc2l2ZV9fX0ZyQmR5R1VcIiwgXCJmb3Jtc19fcGFzc2l2ZV9fX2JpUlVpRTVcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxyXG4gICAgRm9ybUxhYmVsOiBbXCJGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUJcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXHJcbiAgICBGb3JtSW5wdXQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl0sXHJcbiAgICBGb3JtU2F2ZVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQ29tbWFuZF9fX0I0WExFUmZcIiwgXCJmb3Jtc19fY21kX19fSU16dDdVZ1wiLCBcImZvcm1zX19mb3JtLWNvbXBvbmVudF9fX3lUZ1BfUWFcIl0sXHJcbiAgICBGb3JtU2F2ZUxhYmVsOiBbXCJGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUJcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXHJcbiAgICBGb3JtU2F2ZUlucHV0OiBbXCJGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWlcIiwgXCJmb3Jtc19faW5wdXRfX19BOTJfTjRKXCJdLFxyXG4gICAgTWF0VGV4dDogW1wiQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUFwiXSxcclxuICAgIE1hdFRleHRXcmFwcGVyOiBbXCJDb2xvcmVkSWNvbl9fbGFiZWxDb250YWluZXJfX19ZVmZnek9rXCJdLFxyXG4gICAgTWF0ZXJpYWxFbGVtZW50OiBbXCJDb2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMlwiXSxcclxuICAgIE1hdGVyaWFsV3JhcHBlcjogW1wiTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4XCJdLFxyXG4gICAgTWF0ZXJpYWxOdW1iZXJXcmFwcGVyOiBbXCJNYXRlcmlhbEljb25fX2luZGljYXRvckNvbnRhaW5lcl9fX0NxdGF4X1lcIl0sXHJcbiAgICBNYXRlcmlhbE51bWJlcjogW1wiTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKXCIsIFwiTWF0ZXJpYWxJY29uX190eXBlLXZlcnktc21hbGxfX19VTXpRM2lyXCIsIFwiTWF0ZXJpYWxJY29uX19uZXV0cmFsX19fU1lzSFhBYVwiXSxcclxuICAgIE1hdGVyaWFsV3JhcHBlcldyYXBwZXI6IFtcIkdyaWRJdGVtVmlld19faW1hZ2VfX195TW9LT1pWXCJdLFxyXG4gICAgTWF0ZXJpYWxPdXRlcjogW1wiR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4XCJdLFxyXG4gICAgTWF0ZXJpYWxOYW1lVGV4dDogW1wiR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbVwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFdpdGhTdHlsZXMgPSAoLi4uc3R5bGUpID0+IHtcclxuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFRleHRDb2xvcnMgPSB7XHJcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcclxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxyXG4gICAgU3RhbmRhcmQ6IFwiI2JiYmJiYlwiLFxyXG4gICAgWWVsbG93OiBcIiNmN2E2MDBcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xvcnMgPSB7XHJcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNSwgMzAsIDk4KSwgcmdiKDQwLCA1NSwgMTIzKSlcIiwgXCJyZ2IoMTQyLCAxNTcsIDIyNSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEsIDI2LCA3NiksIHJnYig3NiwgNTEsIDEwMSkpXCIsIFwicmdiKDE3OCwgMTUzLCAyMDMpXCJdLFxyXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQxLCA3NywgMTA3KSwgcmdiKDY2LCAxMDIsIDEzMikpXCIsIFwicmdiKDE2OCwgMjA0LCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIGVuZ2luZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgNDEsIDApLCByZ2IoMTc4LCA2NiwgMjUpKVwiLCBcInJnYigyNTUsIDE2OCwgMTI3KVwiXSxcclxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcclxuICAgIFwibWV0YWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1NCwgNTQsIDU0KSwgcmdiKDc5LCA3OSwgNzkpKVwiLCBcInJnYigxODEsIDE4MSwgMTgxKVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMjQsIDM5KSwgcmdiKDE2MSwgNDksIDY0KSlcIiwgXCJyZ2IoMjU1LCAxNTEsIDE2NilcIl0sXHJcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxyXG4gICAgXCJvcmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgODcsIDk3KSwgcmdiKDEwNywgMTEyLCAxMjIpKVwiLCBcInJnYigyMDksIDIxNCwgMjI0KVwiXSxcclxuICAgIFwiZ2FzZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDAsIDEwNSwgMTA3KSwgcmdiKDI1LCAxMzAsIDEzMikpXCIsIFwicmdiKDEyNywgMjMyLCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcclxuICAgIFwiYWxsb3lzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjMsIDc2LCAzMCksIHJnYigxNDgsIDEwMSwgNTUpKVwiLCBcInJnYigyNTAsIDIwMywgMTU3KVwiXSxcclxuICAgIFwiY2hlbWljYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigyMDgsIDcxLCAxMTYpKVwiLCBcInJnYigyNTUsIDE3MywgMjE4KVwiXSxcclxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHBpZWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE5LCA4MiwgMTg5KSwgcmdiKDE0NCwgMTA3LCAyMTQpKVwiLCBcInJnYigyNDYsIDIwOSwgMjU1KVwiXSxcclxuICAgIFwiZWxlbWVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYxLCA0NiwgMzIpLCByZ2IoODYsIDcxLCA1NykpXCIsIFwicmdiKDE4OCwgMTczLCAxNTkpXCJdLFxyXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxyXG4gICAgXCJ1bml0IHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI5LCAyNywgMjgpLCByZ2IoNTQsIDUyLCA1MykpXCIsIFwicmdiKDE1NiwgMTU0LCAxNTUpXCJdLFxyXG4gICAgXCJsaXF1aWRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTQsIDE2NCwgMjAyKSwgcmdiKDEzOSwgMTg5LCAyMjcpKVwiLCBcInJnYigyNDEsIDI1NSwgMjU1KVwiXSxcclxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxyXG4gICAgXCJkcm9uZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0MCwgNTIsIDE4KSwgcmdiKDE2NSwgNzcsIDQzKSlcIiwgXCJyZ2IoMjU1LCAxNzksIDE0NSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkxLCA0NiwgMTgzKSwgcmdiKDExNiwgNzEsIDIwOCkpXCIsIFwicmdiKDIxOCwgMTczLCAyNTUpXCJdLFxyXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjQsIDkxLCAyMTEpLCByZ2IoNDksIDExNiwgMjM2KSlcIiwgXCJyZ2IoMTUxLCAyMTgsIDI1NSlcIl0sXHJcbiAgICBcInNvZnR3YXJlIHRvb2xzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjksIDk4LCAxOSksIHJnYigxNTQsIDEyMywgNDQpKVwiLCBcInJnYigyNTUsIDI1NSwgMTQ2KVwiXSxcclxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXHJcbiAgICBcImNvbnN1bWFibGVzIChiYXNpYylcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0OSwgNDYsIDQ2KSwgcmdiKDE3NCwgNzEsIDcxKSlcIiwgXCJyZ2IoMjU1LCAxNzMsIDE3MylcIl0sXHJcbiAgICBcImZ1ZWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYig1NSwgMTQ4LCA1NSkpXCIsIFwicmdiKDE1NywgMjUwLCAxNTcpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxyXG4gICAgXCJzaGlwIGtpdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NCwgODQsIDApLCByZ2IoMTc4LCAxMDksIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMTEsIDEyNylcIl0sXHJcbiAgICBcInV0aWxpdHlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE2MSwgMTQ4LCAxMzYpLCByZ2IoMTg2LCAxNzMsIDE2MSkpXCIsIFwicmdiKDI1NSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJzaGlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDMwMzAzLCAjMTgxODE4KVwiLCBcIiM3ZjdmN2ZcIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFBNTUdTdHlsZSA9IGBcclxuLnBiLW1pbmltaXplIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBiLW1pbmltaXplLWN4OmhvdmVyIHtcclxuXHRjb2xvcjogIzI2MzUzZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5wYi1taW5pbWl6ZS1jeCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI2MzUzZTtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4ucGItbWluaW1pemUtc2V0dGluZ3M6aG92ZXIge1xyXG5cdGNvbG9yOiAjZGRkO1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSBkaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjIge1xyXG5cdGhlaWdodDogNDhweDtcclxuXHR3aWR0aDogNDhweDtcclxuXHRmb250LXNpemU6IDE1Ljg0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYXQtZWxlbWVudC1zbWFsbCB7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG59XHJcbi5jaGVjay10aW1lLWNvbXBsZXRlIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uY2hlY2stdGltZS1vdmVyZHVlIHtcclxuXHRjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4uY2hlY2stdGltZSB7XHJcblx0Y29sb3I6IHJnYigxNTMsIDE1MywgMTUzKVxyXG59XHJcbi5jaGVja2VkLXRleHQge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cdGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1MylcclxufVxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bGluZS1oZWlnaHQ6IDE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwIDhweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzIyMjtcclxufVxyXG4ubm90ZXMtd3JhcHBlciB0ZXh0YXJlYXtcclxuXHRyZXNpemU6IG5vbmU7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRjb2xvcjogI2NjY2NjYztcclxuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIixzYW5zLXNlcmlmO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTMlO1xyXG59XHJcbi5ub3Rlcy13cmFwcGVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXIgdGV4dGFyZWE6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uY2hlY2std3JhcHBlciB7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuLnRvb2x0aXAtYmFzZXtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O1xyXG5cdGZvbnQtZmFtaWx5OlwiRHJvaWQgU2Fuc1wiLHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjEwcHg7XHJcblx0Y29sb3I6I2JiYlxyXG59XHJcbi50b29sdGlwXHJcbntcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4udG9vbHRpcC1iYXNlOmhvdmVyIC50b29sdGlwXHJcbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc2VsZWN0IHtcclxuXHRib3JkZXI6IDBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhkNjQxMTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5mbGV4LXRhYmxlIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXg6IDE7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cdGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59XHJcbi5saXN0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNoYXQtbGluZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4ZW0sIDFmcikgbWlubWF4KDhlbSwgNGZyKSBtaW5tYXgoOGVtLCAxNWZyKTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG4udGltZS1kYXRlIHtcclxuXHRjb2xvcjogIzQ0NDQ0NDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNoYXQtbmFtZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTk5OTtcclxufVxyXG4uY2hhdC1tZXNzYWdlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogI2JiYmJiYjtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuLmZpbi10aXRsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRwYWRkaW5nOiA2cHggNHB4IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxNjIsIDIyMiwgMC4xNSk7XHJcbn1cclxudGQuYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTAzNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjOWZiYjlmO1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4tZ3JlZW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1MDZjNTAgIWltcG9ydGFudDtcclxufVxyXG50ZC5idXJuLXllbGxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzgzNmUyNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjZkZjk0O1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWY4YTQwICFpbXBvcnRhbnQ7XHJcbn1cclxudGQuYnVybi1yZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1YTMxMzAgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2M1OWM5YjtcclxufVxyXG50cjpob3ZlciB0ZC5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzc2NGQ0YyAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnYtaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cGFkZGluZzogMnB4IDhweDtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4uaW52LWJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHRwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0bWFyZ2luOiAxcHggMnB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmN2E2MDA7fVxyXG5cclxuLmdyZXktcHJvZ3Jlc3MtYmFyOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtiYWNrZ3JvdW5kOiAjZDk1MzRmO31cclxuLmdvb2QtcHJvZ3Jlc3MtYmFyOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtiYWNrZ3JvdW5kOiAjNWNiODVjO31cclxuLndhcm5pbmctcHJvZ3Jlc3MtYmFyOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtiYWNrZ3JvdW5kOiAjZmZjODU2O31cclxuLmRhbmdlci1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNkOTUzNGY7fVxyXG5cclxuLnhpdC10aWxlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy10b3A6IDRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcbi5yZWZyZXNoLWJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3YTYwMDtcclxuXHRjb2xvcjogI2VlZTtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRwYWRkaW5nOiAwcHggOHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiA0cHggOHB4O1xyXG59XHJcbi5yZWZyZXNoLWJ1dHRvbjpob3ZlciB7XHJcblx0Y29sb3I6ICMxZTFlMWU7XHJcbn1cclxuLm5vdGlmaWNhdGlvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogNjJweDtcclxuXHRtYXgtd2lkdGg6IDYycHg7XHJcbn1cclxuLmZpbi1ib3gge1xyXG5cdG1hcmdpbjogMXB4O1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0d2lkdGg6IGNhbGMoMzMlIC0gMnB4KTtcclxuXHRtYXgtd2lkdGg6IDE1MHB4O1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJiO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubGluayB7XHJcblx0Y29sb3I6ICMzZmEyZGU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5saW5rOmhvdmVyIHtcclxuXHRjb2xvcjogI2Y3YTYwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jaGF0LWltYWdlIHtcclxuXHRtYXgtaGVpZ2h0OiAzMDBweDtcclxuXHRtYXgtd2lkdGg6IDkwJTtcclxufVxyXG4uaW5wdXQtdGV4dHtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGNvbG9yOiAjY2NjY2NjO1xyXG5cdFxyXG59XHJcbi5pbnB1dC10ZXh0OmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmhpZGRlbi1lbGVtZW50e1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR2aXNpYmlsaXR5OiBmYWxzZSAhaW1wb3J0YW50O1xyXG5cdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bWFyZ2luLXRvcDogLThweDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0OmhvdmVye1xyXG5cdGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTY2LCAwKTtcclxufWA7XHJcbmV4cG9ydCBjb25zdCBFbmhhbmNlZENvbG9ycyA9IGAvKiBjb25zdW1hYmxlcyAobHV4dXJ5KSAqL1xyXG5kaXZbdGl0bGU9XCJTdGVsbGFyIFBhbGUgQWxlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEVcIl0sXHJcbi50b29sdGlwX0FMRSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NPRlwiXSxcclxuLnRvb2x0aXBfQ09GLFxyXG5kaXZbdGl0bGU9XCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR0lOXCJdLFxyXG4udG9vbHRpcF9HSU4sXHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9LT01cIl0sXHJcbi50b29sdGlwX0tPTSxcclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OU1RcIl0sXHJcbi50b29sdGlwX05TVCxcclxuZGl2W3RpdGxlPVwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFdPXCJdLFxyXG4udG9vbHRpcF9QV08sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JFUFwiXSxcclxuLnRvb2x0aXBfUkVQLFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ1wiXSxcclxuLnRvb2x0aXBfU0MsXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZHXCJdLFxyXG4udG9vbHRpcF9WRyxcclxuLnRvb2x0aXBfV0lOLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dJTlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ODAwMDAsICM3YjAwMTIpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZGI5MTkxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogYWdyaWN1bHR1cmFsIHByb2R1Y3RzICovXHJcbi50b29sdGlwX0ZPRCxcclxuLnRvb2x0aXBfQ0FGLFxyXG4udG9vbHRpcF9IT1AsXHJcbi50b29sdGlwX0dSTixcclxuLnRvb2x0aXBfTUFJLFxyXG4udG9vbHRpcF9IQ1AsXHJcbi50b29sdGlwX01UUCxcclxuLnRvb2x0aXBfUElCLFxyXG4udG9vbHRpcF9QUEEsXHJcbi50b29sdGlwX0FMRyxcclxuLnRvb2x0aXBfQkVBLFxyXG4udG9vbHRpcF9NVVMsXHJcbi50b29sdGlwX1JDTyxcclxuLnRvb2x0aXBfUlNJLFxyXG4udG9vbHRpcF9IRVIsXHJcbi50b29sdGlwX1ZFRyxcclxuLnRvb2x0aXBfTlVULFxyXG4udG9vbHRpcF9WSVQsXHJcbi50b29sdGlwX0dSQSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEFsZ2FlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEdcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQkVBXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ0FGXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZPRFwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JBXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgR3JhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUk5cIl0sXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSENQXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVSXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hPUFwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIE1haXplXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NQUlcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01UUFwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVVTXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgTnV0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlVUXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUElCXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QUEFcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JDT1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUlNJXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgRnJ1aXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WRUdcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVklUXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwMzgwMCwgIzBhNDcwOCkgIWltcG9ydGFudDtcclxuY29sb3I6ICM4YmIzN2IgIWltcG9ydGFudDtcclxufVxyXG4vKiBwbGFzdGljcyAqL1xyXG4udG9vbHRpcF9EQ0wsXHJcbi50b29sdGlwX0RDTSxcclxuLnRvb2x0aXBfRENTLFxyXG4udG9vbHRpcF9QRSxcclxuLnRvb2x0aXBfUEcsXHJcbi50b29sdGlwX1BTTCxcclxuLnRvb2x0aXBfUFNNLFxyXG4udG9vbHRpcF9QU1MsXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTFwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENNXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ1NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktRXRoeWxlbmVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BFXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEdcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU0xcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU01cIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzkxZjYyLCAjOTIzODdiKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2Y4OWVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNvbnN1bWFibGVzIChiYXNpYykgKi9cclxuLnRvb2x0aXBfRFcsXHJcbi50b29sdGlwX0VYTyxcclxuLnRvb2x0aXBfRklNLFxyXG4udG9vbHRpcF9ITVMsXHJcbi50b29sdGlwX0hTUyxcclxuLnRvb2x0aXBfTEMsXHJcbi50b29sdGlwX01FQSxcclxuLnRvb2x0aXBfTUVELFxyXG4udG9vbHRpcF9PVkUsXHJcbi50b29sdGlwX1BEQSxcclxuLnRvb2x0aXBfUFQsXHJcbi50b29sdGlwX1JBVCxcclxuLnRvb2x0aXBfU0NOLFxyXG4udG9vbHRpcF9XUyxcclxuXHJcbmRpdlt0aXRsZT1cIkRyaW5raW5nIFdhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EV1wiXSxcclxuZGl2W3RpdGxlPVwiRXhvc2tlbGV0b24gV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9FWE9cIl0sXHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GSU1cIl0sXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hNU1wiXSxcclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSFNTXCJdLFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTENcIl0sXHJcbmRpdlt0aXRsZT1cIlF1YWxpdHkgTWVhdCBNZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRURcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9PVkVcIl0sXHJcbmRpdlt0aXRsZT1cIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QREFcIl0sXHJcbmRpdlt0aXRsZT1cIlBvd2VyIFRvb2xzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QVFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgUmF0aW9uc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkFUXCJdLFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDTlwiXSxcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E2MmMyYSwgI2JhMzYzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmZjk4OWUgIWltcG9ydGFudDtcclxufVxyXG4vKiBmdWVscyAqL1xyXG4udG9vbHRpcF9TRixcclxuLnRvb2x0aXBfRkYsXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GRlwiXSxcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NGXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU0OGQyMiwgIzZiYTIzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNjYmZhYTMgIWltcG9ydGFudDtcclxufVxyXG4vKiBsaXF1aWRzICovXHJcbi50b29sdGlwX0hFWCxcclxuLnRvb2x0aXBfTEVTLFxyXG4udG9vbHRpcF9CVFMsXHJcbi50b29sdGlwX0gyTyxcclxuZGl2W3RpdGxlPVwiSGVsaW90cm9wZSBFeHRyYWN0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVhcIl0sXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBFaW5zdGVpbml1bVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTEVTXCJdLFxyXG5kaXZbdGl0bGU9XCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JUU1wiXSxcclxuZGl2W3RpdGxlPVwiV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0gyT1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2N2E4ZGEsICM2MDk4YzMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjFmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuZGl2LkdyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG4vKiBmdWxsIGl0ZW0gbmFtZSBjZW50ZXJpbmcgKi9cclxuc3Bhbi5HcmlkSXRlbVZpZXdfX25hbWVfX19oM3lYOUxtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufWA7XHJcbmV4cG9ydCBjb25zdCBJY29uU3R5bGUgPSBgXHJcbiAvKiBQclVuSWNvbiB2MC45MFxyXG4qID09PT09PT09PT09PT09PVxyXG4qXHJcbiogSW5zdGFsbCBDaHJvbWUgYWRkb246IFN0eWxlQm90IFxyXG4qIGdvdG86IGFwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbVxyXG4qIHJpZ2h0LWNsaWNrIGFueXdoZXJlLCBzZWxlY3Q6IFN0eWxlQm90IC0+IFN0eWxlIEVsZW1lbnRcclxuKiBDb3B5JlBhc3RlIHRoaXMgZmlsZSBpbnRvIHRoZSBTdHlsZUJvdCB3aW5kb3dcclxuKlxyXG4qIENTUyBzY3JpcHQgdG8gZ2l2ZSBpY29ucyB0byBhbGwgY29tbW9kaXRpZXMgYW5kIHNvbWUgb3RoZXIgVUkgY29sb3IgYW5kIGxheW91dCBjaGFuZ2VzLlxyXG4qL1xyXG4gXHJcbi8qIGNvbnRyb3ZlcnNpYWwgVUkgY2hhbmdlcyBhbmQgY29sb3JzICovXHJcbi8qIChjb21tZW50L2RlbGV0ZSBpZiBub3QgZGVzaXJlZClcclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiBcclxuLyogaXRlbSB0aWNrZXIgY29sb3IgKi9cclxuLkNvbG9yZWRJY29uX19sYWJlbF9fX09VMUk0b1Age1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuIFxyXG4gXHJcbi8qIGZ1bGwgaXRlbSBuYW1lIGNlbnRlcmluZyAqL1xyXG4uR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbSAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiBcclxuLyogdGFibGUgY29sb3IgKi9cclxudGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKG9kZClcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MmU7XHJcbn1cclxuIFxyXG4vKiBlbmQgVUkgY2hhbmdlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gXHJcbi8qIGl0ZW1zIGluIHByb2R1Y3Rpb24gdmlldyBhbmQgbWFya2V0IHZpZXcgKi9cclxuZGl2Lk1hdGVyaWFsSW5mb3JtYXRpb25fX3JlY2lwZUlucHV0c19fX2VMdmZvb3AgZGl2LkJ1aWxkaW5nSWNvbl9fY29udGFpbmVyX19fakY1R1VzeiBkaXYuQnVpbGRpbmdJY29uX190aWNrZXJDb250YWluZXJfX19OWngzRzhDXHJcbntcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbn1cclxuIFxyXG4vKiBpdGVtcyBpbiBwbGFuZXQgdmlldyAqL1xyXG5kaXYuUmVzb3VyY2VUYWJsZV9fZ3JpZENvbnRhaW5lcl9fX3ltcnpUY0QgZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCBkaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlXHJcbntcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuLypcclxuR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4XHJcbkdyaWRJdGVtVmlld19faW1hZ2VfX195TW9LT1pWXHJcbk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OFxyXG5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMlxyXG5Db2xvcmVkSWNvbl9fbGFiZWxDb250YWluZXJfX19ZVmZnek9rXHJcbiovXHJcbiBcclxuLyogZGVmYXVsdCA6YmVmb3JlIGVsZW1lbnQgdG8gcHJlcGFyZSBmb3IgbmV3IGljb24qL1xyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIFxyXG4gIC8qd2hpbGUgaXQgaXMgaWNvbiovXHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiovXHJcbiBcclxuLyogY29sb3JlZCBvdmVybGF5IGljb24gKi9cclxuZGl2LkNvbG9yZWRJY29uX19sYWJlbENvbnRhaW5lcl9fX1lWZmd6T2s6YmVmb3JlXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjsgLyogd2lsbCBiZWNvbWUgaWNvbiAqL1xyXG4gXHJcbiAgb3BhY2l0eTogMC4xO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiYSgxMDAlLCAwJSwgMCUsIDApO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZ29sZCBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ29sZDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImlyb24gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGFxdWE7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHVtaW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJzaWxpY29uIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB3aGl0ZTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cInRpdGFuaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibHVlO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwibGl0aGl1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW47XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJjb3BwZXIgb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZlcnJvLXRpdGFuaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFscGhhLXN0YWJpbGl6ZWQgdGl0YW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJmZXJyb21pbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFscGhhLXN0YWJpbGl6ZWQgdHVuZ3N0ZW5cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgVGhlcm1hbFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UpVwiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgVGhlcm1hbFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UpVwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiQW50aS1SYWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKam1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgQW50aS1SYWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiU3BlY2lhbGl6ZWQgQW50aS1SYWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiSGlnaC1DYXBhY2l0eSBDXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBnb2xkO1xyXG4gIG9wYWNpdHk6IC4yNTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJTaGllbGRlZCBDXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibHVlO1xyXG4gIG9wYWNpdHk6IC4wMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJCdWRnZXQgQ1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgY2hvY29sYXRlO1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInJhdyBcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicmF3IGNvdHRvblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmV5O1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInJhdyBzaWxrXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHBsdW07XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+ntVwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJrZXZsYXIgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZWVuO1xyXG4gIG9wYWNpdHk6IC4xNTtcclxufVxyXG4gXHJcbiBcclxuZGl2W3RpdGxlKj1cInRlY2hub2tldmxhciBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZXZpb2xldDtcclxuICBvcGFjaXR5OiAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJueWxvbiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmxhY2s7XHJcbiAgb3BhY2l0eTogLjE7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiY290dG9uIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmV5O1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInNpbGtlbiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcGx1bTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJjZXJhbWljIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBvcmFuZ2VyZWQ7XHJcbiAgb3BhY2l0eTogLjE1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImNlcmFtaWMtdHVuZ3N0ZW4gZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJyb3duO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwibnV0cmllbnQgc29sdXRpb25cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW47XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJuYW5vLWVuaGFuY2VkIHJlc2luXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWV2aW9sZXQ7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmx1eFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB5ZWxsb3c7XHJcbiAgb3BhY2l0eTogLjE1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaW5kaWdvIGNvbG9yYW50XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGluZGlnbztcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9saXZlO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiRERUIFBsYW50IEFnZW50XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNlZGF0aXZlIFN1YnN0YW5jZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBvcmFuZ2U7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJkZXNhdHVyYXRpb24gYWdlbnRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgd2hpdGU7XHJcbiAgb3BhY2l0eTogLjE7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJicmVhdGhhYmxlIGxpcXVpZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBhcXVhbWFyaW5lO1xyXG4gIG9wYWNpdHk6IC4yNTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cInRoZXJtb2ZsdWlkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9yYW5nZTtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJmZXJ0aWxpemVyXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLim7BcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgeWVsbG93Z3JlZW47XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiYWNpZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pijXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZWVueWVsbG93O1xyXG4gIG9wYWNpdHk6IC4xO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4gXHJcbi8qXHJcbiBcclxuZGl2W3RpdGxlKj1cInNvbGFyXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn4yeXCI7XHJcbiAgb3BhY2l0eTogLjE7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB5ZWxsb3c7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJsYXJnZSBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLimpZcIjsgb3BhY2l0eTogMC42OyBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJoaWdoLWxvYWQgY2FyZ28gYmF5IGtpdFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UlFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaGlnaC12b2x1bWUgY2FyZ28gYmF5IGtpdFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+OiFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZ29sZCBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6hcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImlyb24gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHVtaW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxufVxyXG4qL1xyXG4gXHJcbi8qIG5vbi1jYXRlZ29yeSBjb2xvciBzcGVjaWFsIGhhY2tzKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIl0sXHJcbmRpdlt0aXRsZT1cIlJlZCBHb2xkXCJdXHJcbntcclxuICAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoMTIwIDcyIDcpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiXSxcclxuZGl2W3RpdGxlPVwiQmx1ZSBHb2xkXCJdXHJcbntcclxuICAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoNzAgNzIgMjAwKSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkFpciBTY3J1YmJlclwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwIDk2IDU4KSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG4vKiBkdyBhbmQgYWxsIGNvbnN1bWFibGVzICovXHJcbiBcclxuLyogXCJub3JtYWxcIiBpY29ucyBhbmQgY29sb3JzICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4vKiBSQVQgaW5wdXRzICovXHJcbmRpdlt0aXRsZV49XCJIaWdoLUNhcmJcIl0sXHJcbmRpdlt0aXRsZV49XCJQcm90ZWluLVJpY2hcIl0sXHJcbmRpdlt0aXRsZV49XCJUcmlnbHljZXJpZGVcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDcwIDcyIDcpKVxyXG59XHJcbiBcclxuZGl2W2NvbnRlbnQ9XCJJby1kaW5lXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzIDg3IDEpLCByZ2IoODYgNDAgMCkpXHJcbn1cclxuIFxyXG4vKiBvdGhlciBBcmdyaWN1bHR1cmUgKi9cclxuZGl2W3RpdGxlPVwiSHlkcm9jYXJib24gUGxhbnRzXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJXaW5lLVF1YWxpdHkgR3JhcGVzXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W3RpdGxlPVwiVml0YSBFc3NlbmNlXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzIDg3IDEpLCByZ2IoODYgNDAgMCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRHJpbmtcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBSYVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcxIDEyNiAxNzQpLCByZ2IoNDYgNjYgMTQ5KSlcclxufVxyXG4gXHJcbi8qIGxpcXVpZHMgKi9cclxuZGl2W3RpdGxlKj1cIkhlbGlvdHJvcGVcIl0sXHJcbmRpdlt0aXRsZSo9XCJMaXF1aWQgRWluc1wiXSxcclxuZGl2W3RpdGxlKj1cIkJhY3RlcmlhbCBUdW5cIl0sXHJcbmRpdlt0aXRsZV49XCJXYXRlclwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMiA4MCA1NSksIHJnYigxOCA3NCAxMjQpKVxyXG59XHJcbiBcclxuLyogY2hlbWljYWxzIGJnIGNvbG9ycyAqL1xyXG5kaXZbdGl0bGUqPVwiU3Vic3RhbmNlXCJdLCBcclxuZGl2W3RpdGxlKj1cIkNoZW1pY2FsXCJdLCBcclxuZGl2W3RpdGxlPVwiTGlxdWlkIENyeXN0YWxzXCJdLCBcclxuZGl2W3RpdGxlKj1cIkJyZWF0aGFibGUgTGlxdWlkXCJdLCBcclxuZGl2W3RpdGxlKj1cIkFnZW50XCJdLCBcclxuZGl2W3RpdGxlKj1cIkZsdXhcIl0sIFxyXG5kaXZbdGl0bGUqPVwiUmVzaW5cIl0sIFxyXG5kaXZbdGl0bGUqPVwiQ29sb3JhbnRcIl0sXHJcbmRpdlt0aXRsZSo9XCJBY2lkXCJdLCBcclxuZGl2W3RpdGxlKj1cIiBCYWN0ZXJpYVwiXSwgXHJcbmRpdlt0aXRsZSo9XCJTb2lsXCJdLFxyXG5kaXZbdGl0bGUqPVwiU3RhYmlsaXplclwiXSxcclxuZGl2W3RpdGxlKj1cIkZlcnRpbGl6ZXJcIl0sXHJcbmRpdlt0aXRsZSo9XCJUaGVybW9GbHVpZFwiXSxcclxuZGl2W3RpdGxlKj1cIkVucmljaGVkXCJdLFxyXG5kaXZbdGl0bGUqPVwiTnV0cmllbnRcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigxMTQgMzcgNjIpKVxyXG59XHJcbiBcclxuLyogcHJlZmFicyAqL1xyXG5kaXZbdGl0bGVePVwiQmFzaWMgU3RyXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgRGVja1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIEJ1bGtcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUcmFuc1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUxIDU0IDY2ICksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiTGlnaHR3ZWlnaHRcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NSA5NCAzNSksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiSGFyZGVuZWRcIl0sIFxyXG5kaXZbdGl0bGVePVwiUmVpbmZvcmNlZFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDc4IDQ0IDI3KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBEZWNrXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgVHJhbnNwXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgU3RyXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgQnVsa1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcxIDM1IDk0KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbiBcclxuLyogY29uc3RydWN0aW9uIGJnIGNvbG9ycyAqL1xyXG5kaXZbdGl0bGU9XCJJbnN1Rm9hbVwiXSxcclxuZGl2W3RpdGxlPVwiRXBveHkgUmVzaW5cIl0sXHJcbmRpdlt0aXRsZT1cIk1lZ2FUdWJlIENvYXRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vIEZpYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vLUNvYXRlZCBHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiUmVpbmZvcmNlZCBHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIl0sXHJcbmRpdlt0aXRsZT1cIkdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MiAxMjUgMjIxKSwgcmdiKDAgNjQgMTc5KSlcclxufVxyXG4gXHJcbi8qIGNvbnN0cnVjdGlvbiBwYXJ0cyAqL1xyXG5kaXZbdGl0bGU9XCJBZXJvc3RhdCBGb3VuZGF0aW9uXCJdLFxyXG5kaXZbdGl0bGU9XCJBaXIgU2NydWJiZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkRlY29yYXRpdmUgRWxlbWVudHNcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb2F0aW5nIFRhbmtcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3cgQ29udHJvbCBEZXZpY2VcIl0sXHJcbmRpdlt0aXRsZT1cIkZsdWlkIFBpcGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiXSxcclxuZGl2W3RpdGxlPVwiR2FzIFZlbnRcIl0sXHJcbmRpdlt0aXRsZT1cIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiXSxcclxuZGl2W3RpdGxlPVwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiTmVvbiBMaWdodGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlByZXNzdXJlIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiUmFkaWF0aW9uIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCJdLFxyXG5kaXZbdGl0bGU9XCJUaGVybWFsIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiVHJ1c3NcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NiwgMTAyLCAxMzIpLCByZ2IoNDEsIDc3LCAxMDcpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAsIDEyMywgMzApLCByZ2IoMzIgOTAgMzIpKVxyXG59XHJcbiBcclxuIFxyXG4vKiBlbGVjdHJvbmljIHN5c3RlbXMgYmcgY29sb3IgKi9cclxuZGl2W3RpdGxlPVwiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJDbGltYXRlIENvbnRyb2xsZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkNvbW11bmljYXRpb24gU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJGVEwgRmllbGQgQ29udHJvbGxlclwiXSxcclxuZGl2W3RpdGxlPVwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiTG9naXN0aWNzIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJUYXJnZXRpbmcgQ29tcHV0ZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkNyeW9nZW5pYyBVbml0XCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzYsIDUxLCAxNDEpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbi8qIGxpZmUgcmVsYXRlZCBlbGVjdHJvbmljcyBzeXN0ZW1zIGJnIGNvbG9yKi9cclxuZGl2W3RpdGxlPVwiV2F0ZXIgUmVjbGFpbWVyXCJdLFxyXG5kaXZbdGl0bGU9XCJMaWZlIFN1cHBvcnQgU3lzdGVtXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAgOTYgNTgpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJpdW1cIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cInNpdGVcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIm1pbmVyYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuZGl2W3RpdGxlKj1cImNvbnRyb2xsZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46bXCI7IG9wYWNpdHk6IDAuNlxyXG59XHJcbmRpdlt0aXRsZSo9XCJmaWx0ZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImRldmljZVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiIE1LXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Tu1wiO1xyXG59XHJcbi8qIPCfm7nwn5q/4puyICovXHJcbmRpdlt0aXRsZSo9XCJmbG93IGNvbnRyb2wgZGV2aWNlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+av1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJnbGFzc1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLJcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cImhlYWRwaG9uZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiaG9sb2dyYXBoaWMgZ2xhc3Nlc1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkZNcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiZGlvZGVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLilrZcIjtcclxufVxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQqPVwiU0FSXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzY2FubmVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzZW5zb3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZvdW5kYXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4dcIjtcclxufVxyXG4vKiDwn6eu8J+Oq/Cfjp/wn46eICovXHJcbmRpdlt0aXRsZSo9XCJtZW1vcnlcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInByb2Nlc3NcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInRyYW5zaXN0b3JcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImNpcmN1aXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46fXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cInRlbnNvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp65cIjtcclxufVxyXG5kaXZbdGl0bGU9XCJtZW1vcnkgYmFua1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiY2lyY3VpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqtcIjtcclxufVxyXG4vKvCfp6fwn46f8J+Sv/Cfk7zwn46eKi9cclxuZGl2W3RpdGxlPVwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiaV06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfk4BcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwic3lzdGVtXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJjb21wdXRlclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwibWFpbmZyYW1lXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+WpVwiOyBcclxuICBvcGFjaXR5OiAwLjZcclxufVxyXG4vKiDwn46b8J+OmvCfkr7wn5K98J+Sv/Cfk4AgKi9cclxuZGl2W3RpdGxlKj1cIk5hdmlnYXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiQXJ0aWZpY2lhbFwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEYXRhXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk5ldHdvcmtcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGF0YWJhc2VcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRnJhbWV3b3JrXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk1hbmFnZW1lbnRcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiT3BlcmF0aW5nXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkludGVyZmFjZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJBbGdvcml0aG1cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWFuYWdlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SvlwiO1xyXG4gIG9wYWNpdHk6IDAuMzsgLyogc3lzdGVtIG92ZXJyaWRlKi9cclxufVxyXG5kaXZbdGl0bGUqPVwibW90aGVyYm9hcmRcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIndhZmVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Oq1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJicm9hZGNhc3RpbmdcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImFudGVubmFcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImVtaXR0ZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OhXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImxpYnJhcnlcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OWXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIldvcmtzdGF0aW9uXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRpc3BsYXlcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkrtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTGlnaHRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiUm9ja1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lr1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaXF1aWRcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkZsdWlkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkFpclwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiR2FzXCJdOmJlZm9yZSxcclxuIGRpdlt0aXRsZSo9XCJBZXJvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQXVkaW9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIpcIjtcclxuICBvcGFjaXR5OiAwLjM7IC8qIHN5c3RlbSBvdmVycmlkZSAqL1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQb3dlclwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQ2FwYWNpdG9yXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SLXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlBvd2VyIENlbGxcIl06YmVmb3JlXHJcbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLyog8J+UqOKbj+KakvCfm6Dwn5Sn8J+UqeKamfCfl5zwn6ewICovXHJcbmRpdlt0aXRsZSo9XCJGYXN0ZW5lciBLaXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflKdcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlJlcGFpciBLaXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7BcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlRhbmtcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6JcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZUTCBGdWVsIFRhbmtcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6ezXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQcm90ZWN0aW9uXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlBsYXRlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlNoaWVsZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+boVwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiUHJvdGVjdGlvbiBNYXRlcmlhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsVwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ29ubmVjdG9yc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBvcGFjaXR5OiAwLjRcclxufVxyXG5kaXZbdGl0bGUqPVwiU2VhdHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqpFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU3Vic3RhbmNlXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDaGVtaWNhbFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkZsdXhcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIlJlc2luXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBY2lkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimKNcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkJhY3RlcmlhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6erXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNyeW9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKdhFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29pbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG59XHJcbi8qIPCfp7Dwn5Sq8J+puiAqL1xyXG5kaXZbdGl0bGUqPVwiU3VyZ2ljYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi8qIPCfjp7wn5uP8J+bjCAqL1xyXG5kaXZbdGl0bGUqPVwiTWVkaWNhbCBzdHJldGNoZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46eXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbi8qIPCfp7Dwn5Sq8J+puvCfkoogKi9cclxuZGl2W3RpdGxlKj1cIk1lZGljYWwga2l0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+pulwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJNYWduZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7JcIjtcclxufVxyXG4vKiDwn5e/8J+WvCAqL1xyXG5kaXZbdGl0bGUqPVwiRGVjb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+WvFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2xhclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pqhXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvbGFyIENlbGxcIl06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKiBhbGxveXMg4pmSIPCfn6oqL1xyXG5kaXZbdGl0bGUqPVwiLVRpdGFuaXVtXCJdOjpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgVGl0YW5pdW1cIl06OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiRmVycm9taW5pdW1cIl06OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuIFxyXG4vKiAtLS0tIE1lZGljYWwgLS0tLS0tICovXHJcbmRpdlt0aXRsZT1cIkF1dG8tRG9jXCJdLFxyXG5kaXZbdGl0bGU9XCJCYW5kYWdlc1wiXSxcclxuZGl2W3RpdGxlPVwiTWVkaWNhbCBTdHJldGNoZXJcIl0sXHJcbmRpdlt0aXRsZT1cIlBhaW5raWxsZXJzXCJdLFxyXG5kaXZbdGl0bGU9XCJTdXJnaWNhbCBFcXVpcG1lbnRcIl0sXHJcbmRpdlt0aXRsZT1cIlRlc3QgVHViZXNcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCAxMzMgNjQpLCByZ2IoNDggODYgNDgpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQXV0by1Eb2NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkajigI3impXvuI9cIjtcclxufVxyXG5kaXZbdGl0bGU9XCJCYW5kYWdlc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nu1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlBhaW5raWxsZXJzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiU3VyZ2ljYWwgRXF1aXBtZW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlR1YmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG4vKiDwn5uM8J+bj+KalSAqL1xyXG5kaXZbdGl0bGUqPVwiQ3JldyBRdWFydGVyc1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJUcmF1bWEgQ2FyZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bj1wiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4vKiAtLS0tLS0tLS0tICovXHJcbiBcclxuZGl2W3RpdGxlKj1cIklvZGluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+puFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2RpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4JcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ2FyYm9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46pXCI7XHJcbn1cclxuLyog8J+ngvCfkr/wn42Z8J+NpeKbsPCfj5QgKi9cclxuZGl2W3RpdGxlPVwiQ2hsb3JpbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjaVcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJTdWxmdXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6FcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJUYW50YWx1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UmFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkNhbGNpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkJlcnlsbGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTWFnbmVzaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkdvbGRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6hcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG4vKiDjgLDwn6eI8J+nivCfn6Twn5+mICovXHJcbiBcclxuZGl2W3RpdGxlPVwiQWx1bWluaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU3RlZWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4pcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiVGl0YW5pdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6pcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlfj1cIlR1bmdzdGVuXCJdOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+rXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNpbGljb25cIl06YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwi44CwXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQ29wcGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+nXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4vKiDwn5+lICovXHJcbmRpdlt0aXRsZT1cIklyb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuLyogYWxsb3lzICovXHJcbiBcclxuZGl2W3RpdGxlPVwiUmVkIEdvbGRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLZcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJCbHVlIEdvbGRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLdcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJCcm9uemVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLpcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJCb3Jvc2lsaWNhdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuOAsFwiO1xyXG59XHJcbiBcclxuLyogLS0tLSAqL1xyXG4gXHJcbi8qIPCflorinZfinpbwn5KIIPCfjKDwn6WW8J+NofCfp6ggKi9cclxuZGl2W3RpdGxlKj1cImZ1ZWwgcm9kXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cImJhc2ljIGZ1ZWwgcm9kXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4p6WXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIiByZWFjdG9yXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgZ2VuZXJhdG9yXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OhlwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJmaXNzaW9uIHJlYWN0b3JcImldOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJyYWRpb2lzb3RvcGUgZ2VuZXJhdG9yXCJpXTpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbi8qIC0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJMaW1lc3RvbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpa9cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJEcm9uZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pyIXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiT3JlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiQ3J5c3RhbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfko5cIjtcclxufVxyXG4gXHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUkPVwiR3JhaW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y+XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTWFpemVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL1cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJEcmlua1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ng1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlByb3RlaW4tUmljaCBCZWFuc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lklwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFJhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WrXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTnV0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lnFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkZydWl0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NhVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBsYW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MslwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y/XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQWxnYWVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYNcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHcmFwZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYdcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJIZXJic1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MtlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkZvZGRlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SilwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkhvcHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJDb3R0b24gRmliZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQYXR0aWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6erXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTXVzaHJvb21zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42EXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGluZWJlcnJpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjZNcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQYXN0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lo1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlNvbHV0aW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiVml0YSBFc3NlbmNlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn422XCI7XHJcbn1cclxuIFxyXG4vKiBsaXF1aWRzICovXHJcbmRpdlt0aXRsZV49XCJXYXRlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJIZWxpb3Ryb3BlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WDXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpcXVpZCBFaW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WbXCI7XHJcbn1cclxuIFxyXG4vKiDwn46o8J+PgPCfj5Dimr4gKi9cclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj5BcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQb2x5LUV0aHlsZW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimr5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJTaGVldCBUeXBlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e7XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiRm9hbVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJTZWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yrXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZpYmVyXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkZhYnJpY1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiU3VwcGxpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6BcIjtcclxufVxyXG5kaXZbdGl0bGUkPVwiVW5pZm9ybVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RllwiO1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJUb29sc2V0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5ugXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkZUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piAXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4OyBvcGFjaXR5OiAwLjVcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTVExcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6JcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNVxyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkNvbnN0cnVjdGlvbiBHcmFudWxhdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7FcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJDYXNpbmdcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4pcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJEZWNrIEVsZW1lbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46eXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJTdHJ1Y3R1cmFsIEVsZW1lbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim5NcIjtcclxufVxyXG4vKiDwn5uOICovXHJcbmRpdlt0aXRsZSQ9XCJCdWxraGVhZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+buFwiO1xyXG59XHJcbi8qIPCfj5fwn6et8J+Mq+KYgPCfjIAgKi9cclxuZGl2W3RpdGxlJD1cIkFwZXJ0dXJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4+XXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiVHJ1c3NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfl7xcIjtcclxufVxyXG4gXHJcbi8qIC0tLS0tIGdhc3Nlcy0tLS0tLSAqL1xyXG4vKiDwn5Ko8J+Vs+OAsPCfjIrwn4yr8J+SpfCfm6Lwn6ez8J+ntOKYhCAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkFtbW9uaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbhcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJBcmdvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiRmx1b3JpbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk5lb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk5pdHJvZ2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiT3h5Z2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KoXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkhlbGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MjFwiO1xyXG59XHJcbmRpdlt0aXRsZV49XCJIeWRyb2dlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sq1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkhlbGl1bS0zIElzb3RvcGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimJVcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQmFzaWMgT3ZlcmFsbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6VcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIldvcmsgT3ZlcmFsbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+mulwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXSwgXHJcbmRpdlt0aXRsZSQ9XCJXb3JrIE92ZXJhbGxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgOTcgMTA0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfja9cIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIkV4b3NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkbfigI3imYDvuI9cIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIlBvd2VyIFRvb2xzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SMXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZV49XCJFeG9zXCJdLCBcclxuZGl2W3RpdGxlPVwiUG93ZXIgVG9vbHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl0sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlJD1cIkFsZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NulwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KJXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkanigI3wn5qSXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSwgXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sIFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE2IDEyNCAyNyksIHJnYig1NyA3MyAxNDcpKSBcclxufVxyXG5kaXZbdGl0bGUkPVwiQWxlXCJdLCBcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTYgMTI0IDI3KSwgcmdiKDEwNSAzMCAxNDUpKSBcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHaW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpYNcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpaFcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5Go4oCN8J+agFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUqPVwicGVyc29uYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OxXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLCBcclxuZGl2W3RpdGxlPVwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIl0sIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZSQ9XCJHaW5cIl0sIFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbiBcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn423XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJNZWF0IE1lYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbFcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6W8XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SsXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJNZWF0IE1lYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSwgXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NSA5MiAxNjkpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbi8qIPCflbnimI7wn5OeICovXHJcbmRpdlt0aXRsZSo9XCJjb21tYW5kIGJyaWRnZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYjlwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIOKbsOKYouKamfCfmrDwn4yhICovXHJcbmRpdlt0aXRsZSo9XCJlbmdpbmVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5qAXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm5venpsZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfp6jwn4yf8J+ns/Cfm44gKi9cclxuZGl2W3RpdGxlKj1cImNvbWJ1c3Rpb24gY2hhbWJlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7NcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicHVtcFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwZVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwaW5nXCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+asFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ2ZW50XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pmoXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfl7zwn6eH8J+Ul+Kbk/Cfm6Hwn5OO8J+WhyAqLyBcclxuZGl2W3RpdGxlKj1cInN0cnVjdHVyYWwgc3BhY2VcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim5NcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDwn6eK8J+TpiAqLyBcclxuZGl2W3RpdGxlKj1cImNhcmdvIGJheVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6ZcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiaGFiaXRhdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj6BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwic3VyZ2VyeSB1bml0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pqVXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyrwn5eE8J+Or/CfjqEqL1xyXG5kaXZbdGl0bGUqPVwiZW50ZXJ0YWlubWVudCB1bml0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OoVwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfjqggKi9cclxuZGl2W3RpdGxlKj1cIndvcmtzaG9wIHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46oXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyogc2l6ZXMgKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwic21hbGxcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInRpbnlcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlJD1cIiBzXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDIwcHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm1lZGl1bVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUkPVwiIG1cImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbiBcclxuLyogYnVpbGRpbmdzIC0ga2lsbCBzdHJheSBpY29ucyAqL1xyXG5kaXYuQnVpbGRpbmdJY29uX19jb250YWluZXJfX19qRjVHVXN6OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG4gICAgXHJcbiAgICAvKiBpdGVtcyBpbiBtYXJrZXQgdmlldyAqL1xyXG50YWJsZS5Ccm9rZXJMaXN0X190YWJsZV9fX3lsZ2VpeWcgPlxyXG50Ym9keSA+XHJcbnRyID5cclxudGQgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLyogaXRlbXMgaW4gYnVpbGRpbmcgdmlldyAqL1xyXG5kaXYuQnVpbGRpbmdJbmZvcm1hdGlvbl9fcmVjaXBlX19fdXphbnhYdyA+XHJcbmRpdiA+XHJcbmRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggPlxyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlXHJcbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi8qIGl0ZW1zIGluIHJlY2lwZSB2aWV3ICovXHJcbmRpdi5NYXRlcmlhbEluZm9ybWF0aW9uX19yZWNpcGVJbnB1dHNfX19lTHZmb29wID5cclxuZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCA+XHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLyogaXRlbXMgaW4gcGxhbmV0IHZpZXcgKi9cclxuZGl2LlJlc291cmNlVGFibGVfX2dyaWRDb250YWluZXJfX195bXJ6VGNEID5cclxuZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCA+XHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufWA7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBDdXJyZW5jeVN5bWJvbHMgPSB7XHJcbiAgICBcIkNJU1wiOiBcIuKCoVwiLFxyXG4gICAgXCJBSUNcIjogXCLigrNcIixcclxuICAgIFwiTkNDXCI6IFwi4oKmXCIsXHJcbiAgICBcIklDQVwiOiBcIseCXCIsXHJcbiAgICBcIkVDRFwiOiBcIuKCrFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRmFjdGlvbkhlYWRlcnMgPSB7XHJcbiAgICBcIkNhc3RpbGxvLUl0b1wiOiBcIkNJXCIsXHJcbiAgICBcIkluc2l0b3JcIjogXCJJQ1wiLFxyXG4gICAgXCJBbnRhcmVzXCI6IFwiQUlcIixcclxuICAgIFwiTkVPIENoYXJ0ZXJcIjogXCJOQ1wiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBSYXRpbmdDb2xvcnMgPSB7XHJcbiAgICBcIlBcIjogXCIjMWI2YjljXCIsXHJcbiAgICBcIlVcIjogXCIjOGIyMTFlXCIsXHJcbiAgICBcIkZcIjogXCIjZTI2YzM3XCIsXHJcbiAgICBcIkVcIjogXCIjZTc3ODJiXCIsXHJcbiAgICBcIkRcIjogXCIjZTg3ZDI4XCIsXHJcbiAgICBcIkNcIjogXCIjZWQ4OTFjXCIsXHJcbiAgICBcIkJcIjogXCIjZjE5NTEwXCIsXHJcbiAgICBcIkFcIjogXCIjZjZhMjA0XCJcclxufTtcclxuZXhwb3J0IGNvbnN0IEZyaWVuZGx5TmFtZXMgPSB7XHJcbiAgICBcIkxvY2FsTWFya2V0QWRzXCI6IFwiTE0gVW5pdCBQcmljZXNcIixcclxuICAgIFwiT3JkZXJFVEFzXCI6IFwiT3JkZXIgRVRBc1wiLFxyXG4gICAgXCJGbGlnaHRFVEFzXCI6IFwiRmxpZ2h0IFBsYW5uaW5nIEVUQXNcIixcclxuICAgIFwiU2hpcHBpbmdBZHNcIjogXCJMTSBTaGlwcGluZyBSYXRlc1wiLFxyXG4gICAgXCJQb3N0TE1cIjogXCJMTSBQb3N0aW5nIFVuaXQgUHJpY2VcIixcclxuICAgIFwiQ29udHJhY3REcmFmdHNcIjogXCJDT05URCBVbml0IFByaWNlc1wiLFxyXG4gICAgXCJRdWV1ZUxvYWRcIjogXCJRdWV1ZSBQZXJjZW50IERpc3BsYXlcIixcclxuICAgIFwiQ29uc3VtYWJsZVRpbWVyc1wiOiBcIldvcmtmb3JjZSBDb25zdW1hYmxlIEJ1cm5cIixcclxuICAgIFwiRmxlZXRFVEFzXCI6IFwiRmxlZXQgRVRBc1wiLFxyXG4gICAgXCJOb3RpZmljYXRpb25zXCI6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gICAgXCJTY3JlZW5VbnBhY2tcIjogXCJTY3JlZW4gVW5wYWNrXCIsXHJcbiAgICBcIkltYWdlQ3JlYXRvclwiOiBcIkNoYXQgSW1hZ2UgQ3JlYXRvclwiLFxyXG4gICAgXCJJbnZlbnRvcnlPcmdhbml6ZXJcIjogXCJJbnZlbnRvcnkgU29ydGluZ1wiLFxyXG4gICAgXCJDb21tYW5kQ29ycmVjdGVyXCI6IFwiQ29tbWFuZCBDb3JyZWN0ZXJcIixcclxuICAgIFwiQ2FsY3VsYXRvckJ1dHRvblwiOiBcIkNhbGN1bGF0b3IgQnV0dG9uXCIsXHJcbiAgICBcIlNpZGViYXJcIjogXCJTaWRlYmFyXCIsXHJcbiAgICBcIkhlYWRlck1pbmltaXplclwiOiBcIk1pbmltaXplIEhlYWRlcnMgKE1hc3RlcilcIixcclxuICAgIFwiUGVuZGluZ0NvbnRyYWN0c1wiOiBcIlBlbmRpbmcgQ29udHJhY3RzXCIsXHJcbiAgICBcIkNvbXBhY3RVSVwiOiBcIkNvbXBhY3QgVUkgKE1hc3RlcilcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgU29ydGluZ1RyaWFuZ2xlSFRNTCA9IGBcclxuPGRpdiB0aXRsZT1cIlwiPjxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgcm9sZT1cImltZ1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiY3VycmVudGNvbG9yXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxnPjxwYXRoIGQ9XCJNLjg4NjgxIDEuMDk3NzUybDEyLjEzNzc0IDIxLjAyMzE4TDI1LjQyMjk2NCAxLjEwNTQ0NnpcIj48L3BhdGg+PC9nPjwvc3ZnPjwvZGl2PmA7XHJcbmV4cG9ydCBjb25zdCBQbGFuZXRDb21tYW5kcyA9IFtcIkFETVwiLCBcIkJTQ1wiLCBcIkNPR0NcIiwgXCJDT0dDUEVYXCIsIFwiQ09HQ1VcIiwgXCJGTFRQXCIsIFwiTFJcIiwgXCJMTVBcIiwgXCJMTVwiLCBcIlBMSVwiLCBcIlBPUElcIiwgXCJQT1BSXCIsIFwiUFBTXCIsIFwiU0hZXCIsIFwiV0FSXCJdO1xyXG5leHBvcnQgY29uc3QgU3lzdGVtTmFtZXMgPSB7XHJcbiAgICBcIkFSQ0xJR0hUXCI6IFwiQU0tNzgzXCIsXHJcbiAgICBcIkZPUkdFLUtFRVBcIjogXCJGSy0zNzFcIixcclxuICAgIFwiTU9VTlQgT0xZTVBVU1wiOiBcIkhNLTA0OVwiLFxyXG4gICAgXCJHQVRFV0FZXCI6IFwiSE0tMjIzXCIsXHJcbiAgICBcIk5FTyBFREVOXCI6IFwiSlMtMjk5XCIsXHJcbiAgICBcIkVCSVNVXCI6IFwiSlMtOTUyXCIsXHJcbiAgICBcIkJBU1RBQkxPTlwiOiBcIktXLTAyMFwiLFxyXG4gICAgXCJET0xaRU5BXCI6IFwiTEctNDE4XCIsXHJcbiAgICBcIlRSSU5JVFlcIjogXCJPRi0yNTlcIixcclxuICAgIFwiTU9SSUFcIjogXCJPVC01ODBcIixcclxuICAgIFwiT1VURVIgSEVBVkVOXCI6IFwiUEctODk5XCIsXHJcbiAgICBcIkFVUlVNXCI6IFwiUUotNjUwXCIsXHJcbiAgICBcIkFDRVRBUkVTXCI6IFwiUUotNjg0XCIsXHJcbiAgICBcIkhVQlVSXCI6IFwiVEQtMjAzXCIsXHJcbiAgICBcIkhPVEVJXCI6IFwiVVYtMTM1XCIsXHJcbiAgICBcIkJFTlRFTlwiOiBcIlVWLTM1MVwiLFxyXG4gICAgXCJEQUlLT0tVXCI6IFwiVVYtNzk2XCIsXHJcbiAgICBcIkhPUlRVU1wiOiBcIlZILTMzMVwiLFxyXG4gICAgXCJNSURXQVlcIjogXCJXQi02NzVcIixcclxuICAgIFwiQU5UQVJFUyBJSUlcIjogXCJaVi0xOTRcIixcclxuICAgIFwiQU5UQVJFUyBJXCI6IFwiWlYtMzA3XCIsXHJcbiAgICBcIkFOVEFSRVMgSUlcIjogXCJaVi03NTlcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgUGxhbmV0TmFtZXMgPSB7XHJcbiAgICBcIkxFTVVSSUFcIjogXCJBSi03NjhhXCIsXHJcbiAgICBcIkdBTExVU1wiOiBcIkFNLTc4M2JcIixcclxuICAgIFwiRU1FTlRJT1JcIjogXCJBTS03ODNjXCIsXHJcbiAgICBcIlRZUEhPTlwiOiBcIkFVLTUyMmJcIixcclxuICAgIFwiTk9WQSBIT05TSFVcIjogXCJCUy03ODhjXCIsXHJcbiAgICBcIlRBQ09UT1BJQVwiOiBcIkNCLTA0NWJcIixcclxuICAgIFwiUFlSR09TXCI6IFwiQ0gtNzcxYVwiLFxyXG4gICAgXCJUQUxPU0lBXCI6IFwiREMtODIzYlwiLFxyXG4gICAgXCJPUk1cIjogXCJEVy00NTZnXCIsXHJcbiAgICBcIk1BTklGT0xEXCI6IFwiRUwtMTc5YlwiLFxyXG4gICAgXCJOT1ZBIFVOQUxBU0tBXCI6IFwiRVotNDc2YlwiLFxyXG4gICAgXCJUT0tUVVwiOiBcIkZLLTAzN2ZcIixcclxuICAgIFwiTEEgRk9SR0VcIjogXCJGSy0zNzFiXCIsXHJcbiAgICBcIkJPVUNIRVJcIjogXCJGSy03OTRiXCIsXHJcbiAgICBcIlZBVUxUXCI6IFwiR0MtNjQ1YlwiLFxyXG4gICAgXCJDSFVcIjogXCJHWS0xMTBjXCIsXHJcbiAgICBcIlBPU0VJRE9OXCI6IFwiSE0tMDQ5YlwiLFxyXG4gICAgXCJBUE9USEVDQVJZXCI6IFwiSUEtNjAzYlwiLFxyXG4gICAgXCJFTEVDVFJPTklDQVwiOiBcIklZLTAyOGNcIixcclxuICAgIFwiTkVNRVNJU1wiOiBcIkpTLTI5OWFcIixcclxuICAgIFwiR0lCU09OXCI6IFwiSlMtOTUyY1wiLFxyXG4gICAgXCJBVVNUUkFMSUFcIjogXCJLSS00NDZhXCIsXHJcbiAgICBcIkRFTUVURVJcIjogXCJLSS00NDZiXCIsXHJcbiAgICBcIkhFUk1FU1wiOiBcIktJLTQ0OGJcIixcclxuICAgIFwiUk9DS1wiOiBcIktRLTk2NmJcIixcclxuICAgIFwiTUlMTElXQVlTXCI6IFwiS1ctMDIwY1wiLFxyXG4gICAgXCJHSUVESSBQUklNRVwiOiBcIktXLTM1OGJcIixcclxuICAgIFwiRVRIRVJXSU5EXCI6IFwiS1ctNjg4Y1wiLFxyXG4gICAgXCJLSU5aQVwiOiBcIkxHLTQxOGJcIixcclxuICAgIFwiUExBTkVUIE1DIFBMQU5FVEZBQ0VcIjogXCJMRy05MTNlXCIsXHJcbiAgICBcIkFSQVRPUkFcIjogXCJMUy0yMzFiXCIsXHJcbiAgICBcIkdSSUZGT05TVE9ORVwiOiBcIkxTLTMwMGNcIixcclxuICAgIFwiSlVSQVwiOiBcIk9GLTI1OWRcIixcclxuICAgIFwiQkVSVEhJRVJcIjogXCJPRi0zNzViXCIsXHJcbiAgICBcIkFEQUxJTkFcIjogXCJPRi0zNzVjXCIsXHJcbiAgICBcIkRBTkFLSUxcIjogXCJPVC00NDJiXCIsXHJcbiAgICBcIklJUk9OXCI6IFwiT1QtNTgwYVwiLFxyXG4gICAgXCJNT05URU1cIjogXCJPVC01ODBiXCIsXHJcbiAgICBcIlZBTExJU1wiOiBcIk9ULTU4MGNcIixcclxuICAgIFwiUEFMTEFEQVwiOiBcIk9ULTU4MGRcIixcclxuICAgIFwiUFJJU01cIjogXCJPVC04ODlhXCIsXHJcbiAgICBcIkpFRVRJWVVcIjogXCJPVC04ODliXCIsXHJcbiAgICBcIlNBTEFESU5cIjogXCJQRy04OTliXCIsXHJcbiAgICBcIk5BU0NFTlRcIjogXCJRSi0xNDljXCIsXHJcbiAgICBcIkVMT05cIjogXCJRSi02NTBjXCIsXHJcbiAgICBcIkxPTSBQQUxBTktBXCI6IFwiUUotNjg0YVwiLFxyXG4gICAgXCJBQ0VMQU5EXCI6IFwiUUotNjg0YlwiLFxyXG4gICAgXCJDSVJDQVwiOiBcIlFRLTAwMWFcIixcclxuICAgIFwiQ0lSQ0VcIjogXCJRUS0wMDFiXCIsXHJcbiAgICBcIkNFTEVCRElMXCI6IFwiUVEtNjQ1YlwiLFxyXG4gICAgXCJNQUxBSEFUXCI6IFwiUkMtMDQwYlwiLFxyXG4gICAgXCJJUk9ORk9SR0VcIjogXCJSQy0wNDBjXCIsXHJcbiAgICBcIklDRSBTVEFUSU9OIEFMUEhBXCI6IFwiU0UtMTEwY1wiLFxyXG4gICAgXCJTSEVPTFwiOiBcIlRELTIwM2JcIixcclxuICAgIFwiUkhBWkVTXCI6IFwiVEQtMjI4YlwiLFxyXG4gICAgXCJBU0JFU1RPUyBMRUFEIEFTQkVTVE9TXCI6IFwiVVYtMDcyY1wiLFxyXG4gICAgXCJLQVRPQVwiOiBcIlVWLTM1MWFcIixcclxuICAgIFwiWUFOTklDS1wiOiBcIlVWLTM1MWJcIixcclxuICAgIFwiVU1CUkFcIjogXCJVVi0zNTFjXCIsXHJcbiAgICBcIkJJT0dFTkVTSVNcIjogXCJVVi0zNTFkXCIsXHJcbiAgICBcIlBST1hJT05cIjogXCJVVi03OTZiXCIsXHJcbiAgICBcIlBIQU5UQVNNXCI6IFwiVkgtMDQzYVwiLFxyXG4gICAgXCJQUk9NSVRPUlwiOiBcIlZILTMzMWFcIixcclxuICAgIFwiSEVMSU9OIFBSSU1FXCI6IFwiVkgtMzMxZFwiLFxyXG4gICAgXCJPRFlTU0VVU1wiOiBcIlZILTMzMWZcIixcclxuICAgIFwiQVZBTE9OXCI6IFwiVkgtMzMxZ1wiLFxyXG4gICAgXCJIWURST05cIjogXCJWSC0zMzFpXCIsXHJcbiAgICBcIkdBU1dPUkxEXCI6IFwiV0ItNjc1aVwiLFxyXG4gICAgXCJNSU1BUlwiOiBcIldDLTcwMmJcIixcclxuICAgIFwiTUFHVVNcIjogXCJYRC0zNTRiXCIsXHJcbiAgICBcIlVQT05PUlwiOiBcIlhILTMyOWFcIixcclxuICAgIFwiTElCRVJUQVNcIjogXCJYSC01OTRhXCIsXHJcbiAgICBcIktJUlVOQVwiOiBcIlhILTU5NGJcIixcclxuICAgIFwiQ09SVEVaXCI6IFwiWEgtNTk0Y1wiLFxyXG4gICAgXCJLVUJcIjogXCJZSS0wNTlmXCIsXHJcbiAgICBcIkhBUlBJTkFcIjogXCJZSS0yMDloXCIsXHJcbiAgICBcIkFSQ0FESUFcIjogXCJZSS02ODNjXCIsXHJcbiAgICBcIlZFUkRBTlRcIjogXCJZSS03MTViXCIsXHJcbiAgICBcIk5PUldJQ0tcIjogXCJZSy02NDliXCIsXHJcbiAgICBcIk5JS0VcIjogXCJaVi0xOTRhXCIsXHJcbiAgICBcIkhFUEhBRVNUVVNcIjogXCJaVi0zMDdjXCIsXHJcbiAgICBcIlBIT0JPU1wiOiBcIlpWLTMwN2RcIixcclxuICAgIFwiVlVMQ0FOXCI6IFwiWlYtNzU5YlwiLFxyXG4gICAgXCJERUlNT1NcIjogXCJaVi03NTljXCIsXHJcbiAgICBcIkhBUk1PTklBXCI6IFwiWlYtODk2YlwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbE5hbWVzID0ge1xyXG4gICAgXCJBQVJcIjogW1wiQW50ZW5uYSBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQUJIXCI6IFtcIkFkdmFuY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFDU1wiOiBbXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFERVwiOiBbXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFEUlwiOiBbXCJBdXRvLURvY1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJBRFNcIjogW1wiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQUVGXCI6IFtcIkFlcm9zdGF0IEZvdW5kYXRpb25cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFFTlwiOiBbXCJBZHZhbmNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlBcIjogW1wiQWR2YW5jZWQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlJcIjogW1wiQWR2YW5jZWQgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFHU1wiOiBbXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSFBcIjogW1wiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFJUlwiOiBbXCJBaXIgU2NydWJiZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFMXCI6IFtcIkFsdW1pbml1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQUxFXCI6IFtcIlN0ZWxsYXIgUGFsZSBBbGVcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQUxHXCI6IFtcIlByb3RlaW4tUmljaCBBbGdhZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQUxPXCI6IFtcIkFsdW1pbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJBTU1cIjogW1wiQW1tb25pYVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBTlpcIjogW1wiQWR2YW5jZWQgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBUFRcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFSXCI6IFtcIkFyZ29uXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkFSUFwiOiBbXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQVNFXCI6IFtcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVNUXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkFUQVwiOiBbXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBVFBcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQVVcIjogW1wiR29sZFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQVVPXCI6IFtcIkdvbGQgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQVdGXCI6IFtcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFXSFwiOiBbXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQkFDXCI6IFtcIkhlbHBmdWwgQmFjdGVyaWFcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJBSVwiOiBbXCJCYXNpYyBBSSBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJCQkhcIjogW1wiQmFzaWMgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQkNPXCI6IFtcIkJ1ZGdldCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkJERVwiOiBbXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJFXCI6IFtcIkJlcnlsbGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJCRUFcIjogW1wiUHJvdGVpbi1SaWNoIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJCRVJcIjogW1wiQmVyeWwgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQkZQXCI6IFtcIkJhc2ljIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkZSXCI6IFtcIkJhc2ljIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJCR0NcIjogW1wiU2hpZWxkZWQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCR09cIjogW1wiQmx1ZSBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCR1NcIjogW1wiQmFzaWMgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQkhQXCI6IFtcIkJhc2ljIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJCSURcIjogW1wiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQkxcIjogW1wiQnJlYXRoYWJsZSBMaXF1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJMRVwiOiBbXCJEZXNhdHVyYXRpb24gQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJNRlwiOiBbXCJCYXNpYyBNYWluZnJhbWVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJORFwiOiBbXCJCYW5kYWdlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJCT1JcIjogW1wiQm9yb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQk9TXCI6IFtcIkJvcm9zaWxpY2F0ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlBUXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUjFcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsxXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUjJcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsyXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUk1cIjogW1wiQmlvcmVhY3RpdmUgTWluZXJhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQlJPXCI6IFtcIkJyb256ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlJQXCI6IFtcIkJhc2ljIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUlNcIjogW1wiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJTQ1wiOiBbXCJCb2R5IFNjYW5uZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJTRVwiOiBbXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJUQVwiOiBbXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVFNcIjogW1wiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiQldIXCI6IFtcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCV1NcIjogW1wiQmFzaWMgV29ya3N0YXRpb25cIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkNcIjogW1wiQ2FyYm9uXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBXCI6IFtcIkNhbGNpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0FGXCI6IFtcIkNhZmZlaW5hdGVkIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJDQVBcIjogW1wiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkNCTFwiOiBbXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQk1cIjogW1wiTWVkaXVtIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNCU1wiOiBbXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ1wiOiBbXCJDbGltYXRlIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNDRFwiOiBbXCJDcm93ZCBDb250cm9sIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJDRFwiOiBbXCJDYXBhY2l0aXZlIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJDRlwiOiBbXCJDZXJhbWljIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDSEFcIjogW1wiQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJDTFwiOiBbXCJDaGxvcmluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDTElcIjogW1wiQ2FsaWNoZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkNNS1wiOiBbXCJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJDT0ZcIjogW1wiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQ09NXCI6IFtcIkNvbW11bmljYXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDT1RcIjogW1wiQ290dG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDUUxcIjogW1wiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUU1cIjogW1wiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FTXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FUXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUlVcIjogW1wiQ3J5b2dlbmljIFVuaXRcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNTVFwiOiBbXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQ1RGXCI6IFtcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNVXCI6IFtcIkNvcHBlclwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQ1VPXCI6IFtcIkNvcHBlciBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJEQVwiOiBbXCJEYXRhIEFuYWx5emVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkRDSFwiOiBbXCJEcm9uZSBDaGFzc2lzXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEQ0xcIjogW1wiRHVyYWJsZSBDYXNpbmcgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ01cIjogW1wiRHVyYWJsZSBDYXNpbmcgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ1NcIjogW1wiRHVyYWJsZSBDYXNpbmcgU1wiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJERFwiOiBbXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJERFRcIjogW1wiRERUIFBsYW50IEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJERUNcIjogW1wiRGVjb3JhdGl2ZSBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRElTXCI6IFtcIkluZm9ybWF0aW9uIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJET1VcIjogW1wiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJEUkZcIjogW1wiRHJvbmUgRnJhbWVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkRWXCI6IFtcIkRhdGEgVmlzdWFsaXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEV1wiOiBbXCJEcmlua2luZyBXYXRlclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkVEQ1wiOiBbXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJFRVNcIjogW1wiRW5yaWNoZWQgRWluc3RlaW5pdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVOR1wiOiBbXCJTdGFuZGFyZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJFUE9cIjogW1wiRXBveHkgUmVzaW5cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJFU1wiOiBbXCJFaW5zdGVpbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJFVENcIjogW1wiRW5yaWNoZWQgVGVjaG5ldGl1bVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRVhPXCI6IFtcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZcIjogW1wiRmx1b3JpbmVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiRkFMXCI6IFtcIkZlcnJvbWluaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGQU5cIjogW1wiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRkNcIjogW1wiRmxvdyBDb250cm9sIERldmljZVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkVcIjogW1wiSXJvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiRkVPXCI6IFtcIklyb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiRkVUXCI6IFtcIkZlcnJvLVRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGRlwiOiBbXCJGVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJGRkNcIjogW1wiRlRMIEZpZWxkIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkZJTVwiOiBbXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZJUlwiOiBbXCJGaXNzaW9uIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZMT1wiOiBbXCJGbG9hdGluZyBUYW5rXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFBcIjogW1wiRmx1aWQgUGlwaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFhcIjogW1wiRmx1eFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRk9EXCI6IFtcIkFsbC1QdXJwb3NlIEZvZGRlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiRlNFXCI6IFtcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZVTlwiOiBbXCJFbnRlcnRhaW5tZW50IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkdBTFwiOiBbXCJHYWxlcml0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkdDXCI6IFtcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkdDSFwiOiBbXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdFTlwiOiBbXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHSU5cIjogW1wiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiR0xcIjogW1wiR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJHTlpcIjogW1wiR2xhc3MgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHUkFcIjogW1wiV2luZS1RdWFsaXR5IEdyYXBlc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiR1JOXCI6IFtcIkhpZ2gtQ2FyYiBHcmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdWXCI6IFtcIkdhcyBWZW50XCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJIXCI6IFtcIkh5ZHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkgyT1wiOiBbXCJXYXRlclwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhBQlwiOiBbXCJIYWJpdGF0IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkhBTFwiOiBbXCJIYWxpdGUgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiSENDXCI6IFtcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJIQ1BcIjogW1wiSHlkcm9jYXJib24gUGxhbnRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRFwiOiBbXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIRVwiOiBbXCJIZWxpdW1cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEUzXCI6IFtcIkhlbGl1bS0zIElzb3RvcGVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEVSXCI6IFtcIlNwaWN5IEhlcmJzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRVhcIjogW1wiSGVsaW90cm9wZSBFeHRyYWN0XCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiSEhQXCI6IFtcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJITVNcIjogW1wiSGF6TWF0IFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhOWlwiOiBbXCJIeXBlcnRocnVzdCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhPR1wiOiBbXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIT1BcIjogW1wiRmxvd2VyeSBIb3BzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIUENcIjogW1wiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSFBSXCI6IFtcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhTRVwiOiBbXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkhTU1wiOiBbXCJTbWFydCBTcGFjZSBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiSFRFXCI6IFtcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhZUlwiOiBbXCJIeXBlci1wb3dlciBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJJXCI6IFtcIklvZGluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJJRENcIjogW1wiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU1NXCI6IFtcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU5EXCI6IFtcIkluZGlnbyBDb2xvcmFudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiSU5TXCI6IFtcIkluc3VGb2FtXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiSlVJXCI6IFtcIlNlZGF0aXZlIFN1YnN0YW5jZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiS09NXCI6IFtcIktvbWJ1Y2hhXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIktWXCI6IFtcIktldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTEJIXCI6IFtcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxDXCI6IFtcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTENCXCI6IFtcIkxhcmdlIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxDUlwiOiBbXCJMaXF1aWQgQ3J5c3RhbHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkxEXCI6IFtcIkxvY2FsIERhdGFiYXNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTERFXCI6IFtcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTERJXCI6IFtcIkxhc2VyIERpb2Rlc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJMRVNcIjogW1wiTGlxdWlkIEVpbnN0ZWluaXVtXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiTEZFXCI6IFtcIkxhcmdlIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMRkxcIjogW1wiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxGUFwiOiBbXCJMb3ctaGVhdCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkxIUFwiOiBbXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTElcIjogW1wiTGl0aGl1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiTElPXCI6IFtcIkxpdGhpdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiTElTXCI6IFtcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxJVFwiOiBbXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTE9HXCI6IFtcIkxvZ2lzdGljcyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxTRVwiOiBbXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxTTFwiOiBbXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTFNUXCI6IFtcIkxpbWVzdG9uZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJMVEFcIjogW1wiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTFVcIjogW1wiTGFib3JhdG9yeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJNQUdcIjogW1wiTWFnbmV0aXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1BSVwiOiBbXCJIaWdoLUNhcmIgTWFpemVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1CXCI6IFtcIk1vdGhlcmJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTUNCXCI6IFtcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNQ0dcIjogW1wiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTUVBXCI6IFtcIlF1YWxpdHkgTWVhdCBNZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUVEXCI6IFtcIkJhc2ljIE1lZGljYWwgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUZFXCI6IFtcIk1lZGl1bSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTUZLXCI6IFtcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTUZMXCI6IFtcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUdcIjogW1wiTWFnbmVzaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk1HQ1wiOiBbXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1HU1wiOiBbXCJNYWduZXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTUhMXCI6IFtcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1IUFwiOiBbXCJNaWNybyBIZWFkcGhvbmVzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJNTElcIjogW1wiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJNUENcIjogW1wiTWljcm8tUHJvY2Vzc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTVNMXCI6IFtcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTVRDXCI6IFtcIk1lZ2FUdWJlIENvYXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJNVFBcIjogW1wiTWVhdCBUaXNzdWUgUGF0dGllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTVVTXCI6IFtcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1XRlwiOiBbXCJNZWRpdW0gV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTlwiOiBbXCJOaXRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJOQVwiOiBbXCJTb2RpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiTkFCXCI6IFtcIlNvZGl1bSBCb3JvaHlkcmlkZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTkNTXCI6IFtcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkVcIjogW1wiTmVvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJORlwiOiBbXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIk5GSVwiOiBbXCJOYW5vIEZpYmVyXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkdcIjogW1wiTmFuby1Db2F0ZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJOTFwiOiBbXCJOeWxvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTk5cIjogW1wiTmV1cmFsIE5ldHdvcmtcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiTk9aXCI6IFtcIkJhc2ljIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTlJcIjogW1wiTmFuby1FbmhhbmNlZCBSZXNpblwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTlNcIjogW1wiTnV0cmllbnQgU29sdXRpb25cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TVFwiOiBbXCJOZXVyb1N0aW11bGFudHNcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiTlVUXCI6IFtcIlRyaWdseWNlcmlkZSBOdXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJOVjFcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTlYyXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk9cIjogW1wiT3h5Z2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk9GRlwiOiBbXCJPZmZpY2UgU3VwcGxpZXNcIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJPTEZcIjogW1wiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk9TXCI6IFtcIk9wZXJhdGluZyBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiT1ZFXCI6IFtcIkJhc2ljIE92ZXJhbGxzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUENCXCI6IFtcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlBEQVwiOiBbXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBFXCI6IFtcIlBvbHktRXRoeWxlbmVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUEZFXCI6IFtcIlByZW1pdW0gRmVydGlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiUEdcIjogW1wiUG9seW1lciBHcmFudWxhdGVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUElCXCI6IFtcIlBpbmViZXJyaWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJQS1wiOiBbXCJQYWlua2lsbGVyc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJQT1dcIjogW1wiUG93ZXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJQUEFcIjogW1wiUHJvdGVpbiBQYXN0ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUFNIXCI6IFtcIlByZXNzdXJlIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiUFNMXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBTTVwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU1NcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFRcIjogW1wiUG93ZXIgVG9vbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQV09cIjogW1wiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJRQ1JcIjogW1wiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQURcIjogW1wiUmFkaW8gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJSQUdcIjogW1wiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFNXCI6IFtcIk1lbW9yeSBCYW5rXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUkFUXCI6IFtcIkJhc2ljIFJhdGlvbnNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJSQkhcIjogW1wiUmVpbmZvcmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSQ09cIjogW1wiUmF3IENvdHRvbiBGaWJlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUkNTXCI6IFtcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJDVFwiOiBbXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkRFXCI6IFtcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRExcIjogW1wiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRFNcIjogW1wiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRUFcIjogW1wiQ2hlbWljYWwgUmVhZ2VudHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlJFRFwiOiBbXCJSZXNjdWUgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlJFUFwiOiBbXCJSZXBhaXIgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlJHXCI6IFtcIlJlaW5mb3JjZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJSR09cIjogW1wiUmVkIEdvbGRcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIlJIUFwiOiBbXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJST01cIjogW1wiTm9uLVZvbGF0aWxlIE1lbW9yeVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJTRVwiOiBbXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUlNIXCI6IFtcIlJhZGlhdGlvbiBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlJTSVwiOiBbXCJSYXcgU2lsayBTdHJhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJSVEFcIjogW1wiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJTXCI6IFtcIlN1bGZ1clwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJTQVwiOiBbXCJTZWFyY2ggQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FMXCI6IFtcIlNvcnRpbmcgQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FSXCI6IFtcIlNlbnNvciBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiU0NcIjogW1wiU3RlbSBDZWxsIFRyZWF0bWVudFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJTQ0JcIjogW1wiU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0NOXCI6IFtcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlNDUlwiOiBbXCJTdWxmdXIgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiU0RSXCI6IFtcIlN1cmdpY2FsIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTRUFcIjogW1wiUG9seS1TdWxmaXRlIFNlYWxhbnRcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJTRU5cIjogW1wiU2Vuc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiU0VRXCI6IFtcIlN1cmdpY2FsIEVxdWlwbWVudFwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJTRlwiOiBbXCJTVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJTRkVcIjogW1wiU21hbGwgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlNGS1wiOiBbXCJTbWFsbCBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiU0ZMXCI6IFtcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTSVwiOiBbXCJTaWxpY29uXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTSUxcIjogW1wiU2lsa2VuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJTSU9cIjogW1wiU2lsaWNvbiBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJTTk1cIjogW1wiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNPSVwiOiBbXCJBcnRpZmljaWFsIFNvaWxcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlNPTFwiOiBbXCJTb2xhciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNQXCI6IFtcIlNvbGFyIFBhbmVsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNSRFwiOiBbXCJTaGlwLVJlcGFpciBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1JQXCI6IFtcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJTU0NcIjogW1wiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlNTTFwiOiBbXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU1RMXCI6IFtcIlN0ZWVsXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTVFJcIjogW1wiTWVkaWNhbCBTdHJldGNoZXJcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU1RTXCI6IFtcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiU1VcIjogW1wiU3VyZ2VyeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJTVURcIjogW1wiU3VydmVpbGxhbmNlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTVU5cIjogW1wiU2FmZXR5IFVuaWZvcm1cIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJTV0ZcIjogW1wiU21hbGwgV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVEFcIjogW1wiVGFudGFsdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVEFDXCI6IFtcIlRhcmdldGluZyBDb21wdXRlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiVEFJXCI6IFtcIlRhbnRhbGl0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRDXCI6IFtcIlRlY2huZXRpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVENCXCI6IFtcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiVENMXCI6IFtcIlRDTCBBY2lkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUQ09cIjogW1wiVGVjaG5ldGl1bSBPeGlkZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1NcIjogW1wiU3RhYmlsaXplZCBUZWNobmV0aXVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUQ1VcIjogW1wiVHJhdW1hIENhcmUgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiVEhGXCI6IFtcIlRoZXJtb0ZsdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUSFBcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiVElcIjogW1wiVGl0YW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlRJT1wiOiBbXCJUaXRhbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJUS1wiOiBbXCJUZWNobm9LZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIlRQVVwiOiBbXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJBXCI6IFtcIkF1ZGlvIFRyYW5zbWl0dGVyXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJOXCI6IFtcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVFJVXCI6IFtcIlRydXNzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUU1wiOiBbXCJUZWN0b3NpbGlzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRTSFwiOiBbXCJUaGVybWFsIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFVCXCI6IFtcIlRlc3QgVHViZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiVVRTXCI6IFtcIlVuaXZlcnNhbCBUb29sc2V0XCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiVkNCXCI6IFtcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlZFR1wiOiBbXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWR1wiOiBbXCJWaXRhR2VsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlZJVFwiOiBbXCJWaXRhIEVzc2VuY2VcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlZTQ1wiOiBbXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldcIjogW1wiVHVuZ3N0ZW5cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIldBSVwiOiBbXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiV0FMXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIldDQlwiOiBbXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiV0lOXCI6IFtcIlNtYXJ0IFppbmZhbmRlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJXTVwiOiBbXCJXaW5kb3cgTWFuYWdlclwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIldPUlwiOiBbXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiV1JcIjogW1wiV2F0ZXIgUmVjbGFpbWVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJXU1wiOiBbXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlpJUlwiOiBbXCJaaXJjb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiWlJcIjogW1wiWmlyY29uaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbHMgPSB7XHJcbiAgICBcIkFudGVubmEgQXJyYXlcIjogW1wiQUFSXCIsIDAuNzgsIDAuNV0sXHJcbiAgICBcIkFkdmFuY2VkIEJ1bGtoZWFkXCI6IFtcIkFCSFwiLCAwLjYsIDAuOV0sXHJcbiAgICBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiOiBbXCJBQ1NcIiwgMC4zLCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIkFERVwiLCAwLjQsIDEuNV0sXHJcbiAgICBcIkF1dG8tRG9jXCI6IFtcIkFEUlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIjogW1wiQURTXCIsIDAuNywgMl0sXHJcbiAgICBcIkFlcm9zdGF0IEZvdW5kYXRpb25cIjogW1wiQUVGXCIsIDIsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBTVEwgRW5naW5lXCI6IFtcIkFFTlwiLCAxNCwgN10sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiOiBbXCJBRlBcIiwgMSwgMC4yNV0sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUm9kXCI6IFtcIkFGUlwiLCAwLjQsIDAuMV0sXHJcbiAgICBcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiOiBbXCJBR1NcIiwgMzAsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCI6IFtcIkFIUFwiLCAyMCwgMTBdLFxyXG4gICAgXCJBaXIgU2NydWJiZXJcIjogW1wiQUlSXCIsIDEuNywgM10sXHJcbiAgICBcIkFsdW1pbml1bVwiOiBbXCJBTFwiLCAyLjcsIDFdLFxyXG4gICAgXCJTdGVsbGFyIFBhbGUgQWxlXCI6IFtcIkFMRVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBBbGdhZVwiOiBbXCJBTEdcIiwgMC43LCAxXSxcclxuICAgIFwiQWx1bWluaXVtIE9yZVwiOiBbXCJBTE9cIiwgMS4zNSwgMV0sXHJcbiAgICBcIkFtbW9uaWFcIjogW1wiQU1NXCIsIDAuODYsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBOb3p6bGVcIjogW1wiQU5aXCIsIDYsIDNdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJBUFRcIiwgMC4wMywgMC4zXSxcclxuICAgIFwiQXJnb25cIjogW1wiQVJcIiwgMS43ODQsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJBUlBcIiwgMC4wNCwgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJBU0VcIiwgMC41LCAwLjZdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCI6IFtcIkFTVFwiLCA0Ljk4LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQVRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIkFUUFwiLCAyLjksIDFdLFxyXG4gICAgXCJHb2xkXCI6IFtcIkFVXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiR29sZCBPcmVcIjogW1wiQVVPXCIsIDMuODYsIDFdLFxyXG4gICAgXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCI6IFtcIkFXRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkFXSFwiLCAwLjEyLCAxXSxcclxuICAgIFwiSGVscGZ1bCBCYWN0ZXJpYVwiOiBbXCJCQUNcIiwgMC4xNSwgMC4xNV0sXHJcbiAgICBcIkJhc2ljIEFJIEZyYW1ld29ya1wiOiBbXCJCQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBCdWxraGVhZFwiOiBbXCJCQkhcIiwgMC41LCAwLjhdLFxyXG4gICAgXCJCdWRnZXQgQ29ubmVjdG9yc1wiOiBbXCJCQ09cIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQmFzaWMgRGVjayBFbGVtZW50c1wiOiBbXCJCREVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJCZXJ5bGxpdW1cIjogW1wiQkVcIiwgMS44NCwgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBCZWFuc1wiOiBbXCJCRUFcIiwgMC44LCAxXSxcclxuICAgIFwiQmVyeWwgQ3J5c3RhbHNcIjogW1wiQkVSXCIsIDEuOTIsIDFdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFB1bXBcIjogW1wiQkZQXCIsIDAuOCwgMC4yXSxcclxuICAgIFwiQmFzaWMgRnVlbCBSb2RcIjogW1wiQkZSXCIsIDAuMywgMC4xXSxcclxuICAgIFwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiOiBbXCJCR0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJCbHVlIEdvbGRcIjogW1wiQkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiQmFzaWMgSGlnaC1HIFNlYXRzXCI6IFtcIkJHU1wiLCAyMCwgM10sXHJcbiAgICBcIkJhc2ljIEh1bGwgUGxhdGVcIjogW1wiQkhQXCIsIDEwLCAxMF0sXHJcbiAgICBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIjogW1wiQklEXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJCcmVhdGhhYmxlIExpcXVpZFwiOiBbXCJCTFwiLCAxLjEyLCAxXSxcclxuICAgIFwiRGVzYXR1cmF0aW9uIEFnZW50XCI6IFtcIkJMRVwiLCAwLjUsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1haW5mcmFtZVwiOiBbXCJCTUZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJCYW5kYWdlc1wiOiBbXCJCTkRcIiwgMC4wMDEsIDAuMDA1XSxcclxuICAgIFwiQm9yb24gQ3J5c3RhbHNcIjogW1wiQk9SXCIsIDEuOCwgMV0sXHJcbiAgICBcIkJvcm9zaWxpY2F0ZVwiOiBbXCJCT1NcIiwgMS41LCAxXSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQlBUXCIsIDAuMDIsIDAuM10sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMVwiOiBbXCJCUjFcIiwgMTgwLCAzMDBdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzJcIjogW1wiQlIyXCIsIDI4MCwgNDAwXSxcclxuICAgIFwiQmlvcmVhY3RpdmUgTWluZXJhbHNcIjogW1wiQlJNXCIsIDIuNSwgMV0sXHJcbiAgICBcIkJyb256ZVwiOiBbXCJCUk9cIiwgOC43MywgMV0sXHJcbiAgICBcIkJhc2ljIEFudGktcmFkIFBsYXRlXCI6IFtcIkJSUFwiLCAwLjAzLCAwLjJdLFxyXG4gICAgXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiOiBbXCJCUlNcIiwgMTUwLCAyMDBdLFxyXG4gICAgXCJCb2R5IFNjYW5uZXJcIjogW1wiQlNDXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJCU0VcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJCVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIjogW1wiQlRTXCIsIDEuMDUsIDFdLFxyXG4gICAgXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJCV0hcIiwgMC4xLCAxXSxcclxuICAgIFwiQmFzaWMgV29ya3N0YXRpb25cIjogW1wiQldTXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkNhcmJvblwiOiBbXCJDXCIsIDIuMjUsIDFdLFxyXG4gICAgXCJDYWxjaXVtXCI6IFtcIkNBXCIsIDEuNTQsIDFdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBCZWFuc1wiOiBbXCJDQUZcIiwgMC44NiwgMV0sXHJcbiAgICBcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiOiBbXCJDQVBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JMXCIsIDUuNCwgMi40XSxcclxuICAgIFwiTWVkaXVtIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTVwiLCAzLjYsIDEuNl0sXHJcbiAgICBcIlNtYWxsIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCU1wiLCAxLjgsIDAuOF0sXHJcbiAgICBcIkNsaW1hdGUgQ29udHJvbGxlclwiOiBbXCJDQ1wiLCAwLjUsIDFdLFxyXG4gICAgXCJDcm93ZCBDb250cm9sIERyb25lXCI6IFtcIkNDRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJDYXBhY2l0aXZlIERpc3BsYXlcIjogW1wiQ0RcIiwgMC4wMDQsIDAuMDAyXSxcclxuICAgIFwiQ2VyYW1pYyBGYWJyaWNcIjogW1wiQ0ZcIiwgMi44MiwgMV0sXHJcbiAgICBcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJDSEFcIiwgMS4yLCAwLjddLFxyXG4gICAgXCJDaGxvcmluZVwiOiBbXCJDTFwiLCAzLjIsIDFdLFxyXG4gICAgXCJDYWxpY2hlIFJvY2tcIjogW1wiQ0xJXCIsIDIuNDIsIDFdLFxyXG4gICAgXCJcIjogW1wiQ01LXCIsIDQuNTYsIDMzLjJdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiOiBbXCJDT0ZcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiOiBbXCJDT01cIiwgMC41LCAxLjVdLFxyXG4gICAgXCJDb3R0b24gRmFicmljXCI6IFtcIkNPVFwiLCAwLjc3LCAxXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCI6IFtcIkNRTFwiLCA3NSwgMTUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiOiBbXCJDUU1cIiwgNTAsIDEwMF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiOiBbXCJDUVNcIiwgMjUsIDUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoVGlueSlcIjogW1wiQ1FUXCIsIDEyLjUsIDI1XSxcclxuICAgIFwiQ3J5b2dlbmljIFVuaXRcIjogW1wiQ1JVXCIsIDIuMiwgMl0sXHJcbiAgICBcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCI6IFtcIkNTVFwiLCAxLjE0LCAxXSxcclxuICAgIFwiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIjogW1wiQ1RGXCIsIDQuMzIsIDFdLFxyXG4gICAgXCJDb3BwZXJcIjogW1wiQ1VcIiwgOC45MiwgMV0sXHJcbiAgICBcIkNvcHBlciBPcmVcIjogW1wiQ1VPXCIsIDQuMDEsIDFdLFxyXG4gICAgXCJEYXRhIEFuYWx5emVyXCI6IFtcIkRBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJvbmUgQ2hhc3Npc1wiOiBbXCJEQ0hcIiwgMC4yLCAwLjAzXSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTFwiOiBbXCJEQ0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTVwiOiBbXCJEQ01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgU1wiOiBbXCJEQ1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIjogW1wiRERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJERFQgUGxhbnQgQWdlbnRcIjogW1wiRERUXCIsIDAuMTEsIDAuMV0sXHJcbiAgICBcIkRlY29yYXRpdmUgRWxlbWVudHNcIjogW1wiREVDXCIsIDAuNSwgMl0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERpc3BsYXlcIjogW1wiRElTXCIsIDAuMDIsIDAuMDJdLFxyXG4gICAgXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiRE9VXCIsIDUsIDRdLFxyXG4gICAgXCJEcm9uZSBGcmFtZVwiOiBbXCJEUkZcIiwgMC4xLCAwLjAyXSxcclxuICAgIFwiRGF0YSBWaXN1YWxpemVyXCI6IFtcIkRWXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJpbmtpbmcgV2F0ZXJcIjogW1wiRFdcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiOiBbXCJFRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiOiBbXCJFRVNcIiwgOS4yLCAxXSxcclxuICAgIFwiU3RhbmRhcmQgU1RMIEVuZ2luZVwiOiBbXCJFTkdcIiwgOCwgNF0sXHJcbiAgICBcIkVwb3h5IFJlc2luXCI6IFtcIkVQT1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiRWluc3RlaW5pdW1cIjogW1wiRVNcIiwgMC44OCwgMC4xXSxcclxuICAgIFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiOiBbXCJFVENcIiwgNC4xLCAxXSxcclxuICAgIFwiRXhvc2tlbGV0b24gV29yayBTdWl0XCI6IFtcIkVYT1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJGbHVvcmluZVwiOiBbXCJGXCIsIDEuNjk2LCAxXSxcclxuICAgIFwiRmVycm9taW5pdW1cIjogW1wiRkFMXCIsIDMuMjIsIDFdLFxyXG4gICAgXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIjogW1wiRkFOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRmxvdyBDb250cm9sIERldmljZVwiOiBbXCJGQ1wiLCAwLjUsIDAuMjVdLFxyXG4gICAgXCJJcm9uXCI6IFtcIkZFXCIsIDcuODc0LCAxXSxcclxuICAgIFwiSXJvbiBPcmVcIjogW1wiRkVPXCIsIDUuOSwgMV0sXHJcbiAgICBcIkZlcnJvLVRpdGFuaXVtXCI6IFtcIkZFVFwiLCA2Ljg1LCAxXSxcclxuICAgIFwiRlRMIEZ1ZWxcIjogW1wiRkZcIiwgMC4wNSwgMC4wMV0sXHJcbiAgICBcIkZUTCBGaWVsZCBDb250cm9sbGVyXCI6IFtcIkZGQ1wiLCA1MCwgMTZdLFxyXG4gICAgXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiOiBbXCJGSU1cIiwgMC41NSwgMC41XSxcclxuICAgIFwiRmlzc2lvbiBSZWFjdG9yXCI6IFtcIkZJUlwiLCA3LCA0LjldLFxyXG4gICAgXCJGbG9hdGluZyBUYW5rXCI6IFtcIkZMT1wiLCAxLCAyXSxcclxuICAgIFwiRmx1aWQgUGlwaW5nXCI6IFtcIkZMUFwiLCAwLjMsIDJdLFxyXG4gICAgXCJGbHV4XCI6IFtcIkZMWFwiLCAwLjI1LCAwLjFdLFxyXG4gICAgXCJBbGwtUHVycG9zZSBGb2RkZXJcIjogW1wiRk9EXCIsIDEuMiwgMV0sXHJcbiAgICBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIjogW1wiRlNFXCIsIDYsIDNdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IFVuaXRcIjogW1wiRlVOXCIsIDUsIDRdLFxyXG4gICAgXCJHYWxlcml0ZSBSb2NrXCI6IFtcIkdBTFwiLCAyLjUxLCAxXSxcclxuICAgIFwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiOiBbXCJHQ1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIjogW1wiR0NIXCIsIDEsIDAuNl0sXHJcbiAgICBcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIjogW1wiR0VOXCIsIDUsIDNdLFxyXG4gICAgXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiOiBbXCJHSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJHbGFzc1wiOiBbXCJHTFwiLCAwLjAxNiwgMC4wMV0sXHJcbiAgICBcIkdsYXNzIE5venpsZVwiOiBbXCJHTlpcIiwgMS41LCAxXSxcclxuICAgIFwiV2luZS1RdWFsaXR5IEdyYXBlc1wiOiBbXCJHUkFcIiwgMS4xLCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIEdyYWluc1wiOiBbXCJHUk5cIiwgMC45LCAxXSxcclxuICAgIFwiR2FzIFZlbnRcIjogW1wiR1ZcIiwgMC4yNSwgMC4xNV0sXHJcbiAgICBcIkh5ZHJvZ2VuXCI6IFtcIkhcIiwgMC4wNywgMV0sXHJcbiAgICBcIldhdGVyXCI6IFtcIkgyT1wiLCAwLjIsIDAuMl0sXHJcbiAgICBcIkhhYml0YXQgVW5pdFwiOiBbXCJIQUJcIiwgMTAsIDhdLFxyXG4gICAgXCJIYWxpdGUgQ3J5c3RhbHNcIjogW1wiSEFMXCIsIDIuMTcsIDFdLFxyXG4gICAgXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIjogW1wiSENDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiSHlkcm9jYXJib24gUGxhbnRzXCI6IFtcIkhDUFwiLCAwLjgsIDFdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCI6IFtcIkhEXCIsIDAuMDUsIDJdLFxyXG4gICAgXCJIZWxpdW1cIjogW1wiSEVcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJIZWxpdW0tMyBJc290b3BlXCI6IFtcIkhFM1wiLCAwLjE0NSwgMV0sXHJcbiAgICBcIlNwaWN5IEhlcmJzXCI6IFtcIkhFUlwiLCAwLjQsIDFdLFxyXG4gICAgXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIjogW1wiSEVYXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIjogW1wiSEhQXCIsIDE1LCAxMF0sXHJcbiAgICBcIkhhek1hdCBXb3JrIFN1aXRcIjogW1wiSE1TXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBOb3p6bGVcIjogW1wiSE5aXCIsIDYsIDEyXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiOiBbXCJIT0dcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIkZsb3dlcnkgSG9wc1wiOiBbXCJIT1BcIiwgMC4zNSwgMV0sXHJcbiAgICBcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIjogW1wiSFBDXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIjogW1wiSFBSXCIsIDE4LCAxNV0sXHJcbiAgICBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiSFNFXCIsIDMuMSwgMC43XSxcclxuICAgIFwiU21hcnQgU3BhY2UgU3VpdFwiOiBbXCJIU1NcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIjogW1wiSFRFXCIsIDIwLCAxMF0sXHJcbiAgICBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIjogW1wiSFlSXCIsIDM1LCAyNV0sXHJcbiAgICBcIklvZGluZVwiOiBbXCJJXCIsIDQuOTMsIDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIjogW1wiSURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIjogW1wiSU1NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5kaWdvIENvbG9yYW50XCI6IFtcIklORFwiLCAwLjIxLCAwLjJdLFxyXG4gICAgXCJJbnN1Rm9hbVwiOiBbXCJJTlNcIiwgMC4wNiwgMC4xXSxcclxuICAgIFwiU2VkYXRpdmUgU3Vic3RhbmNlXCI6IFtcIkpVSVwiLCAxLjIsIDFdLFxyXG4gICAgXCJLb21idWNoYVwiOiBbXCJLT01cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJLZXZsYXIgRmFicmljXCI6IFtcIktWXCIsIDEuNjUsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBCdWxraGVhZFwiOiBbXCJMQkhcIiwgMC4yLCAwLjZdLFxyXG4gICAgXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiOiBbXCJMQ1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiOiBbXCJMQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJMaXF1aWQgQ3J5c3RhbHNcIjogW1wiTENSXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIkxvY2FsIERhdGFiYXNlXCI6IFtcIkxEXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiOiBbXCJMREVcIiwgMC4xLCAxLjJdLFxyXG4gICAgXCJMYXNlciBEaW9kZXNcIjogW1wiTERJXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxpcXVpZCBFaW5zdGVpbml1bVwiOiBbXCJMRVNcIiwgOC44NCwgMV0sXHJcbiAgICBcIkxhcmdlIEZUTCBFbWl0dGVyXCI6IFtcIkxGRVwiLCAwLjQsIDEuNl0sXHJcbiAgICBcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxGTFwiLCA2MCwgMTBdLFxyXG4gICAgXCJMb3ctaGVhdCBGdWVsIFB1bXBcIjogW1wiTEZQXCIsIDAuNSwgMC4xXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiOiBbXCJMSFBcIiwgNSwgMTBdLFxyXG4gICAgXCJMaXRoaXVtXCI6IFtcIkxJXCIsIDAuNTUsIDFdLFxyXG4gICAgXCJMaXRoaXVtIE9yZVwiOiBbXCJMSU9cIiwgMi43NSwgMV0sXHJcbiAgICBcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIjogW1wiTElTXCIsIDUuNiwgN10sXHJcbiAgICBcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCI6IFtcIkxJVFwiLCAxLCAyXSxcclxuICAgIFwiTG9naXN0aWNzIFN5c3RlbVwiOiBbXCJMT0dcIiwgMC41LCAxLjVdLFxyXG4gICAgXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkxTRVwiLCAwLjMsIDEuMl0sXHJcbiAgICBcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxTTFwiLCAxMjUsIDEwMF0sXHJcbiAgICBcIkxpbWVzdG9uZVwiOiBbXCJMU1RcIiwgMi43MywgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkxUQVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkxhYm9yYXRvcnkgVW5pdFwiOiBbXCJMVVwiLCA4LCA2XSxcclxuICAgIFwiTWFnbmV0aXRlXCI6IFtcIk1BR1wiLCA1LjE1LCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIE1haXplXCI6IFtcIk1BSVwiLCAxLjMsIDFdLFxyXG4gICAgXCJNb3RoZXJib2FyZFwiOiBbXCJNQlwiLCAwLjA3NSwgMC4wNzVdLFxyXG4gICAgXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiOiBbXCJNQ0JcIiwgMTAwLCAxMDBdLFxyXG4gICAgXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIjogW1wiTUNHXCIsIDAuMjQsIDAuMV0sXHJcbiAgICBcIlF1YWxpdHkgTWVhdCBNZWFsXCI6IFtcIk1FQVwiLCAwLjYsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1lZGljYWwgS2l0XCI6IFtcIk1FRFwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRW1pdHRlclwiOiBbXCJNRkVcIiwgMC4yLCAwLjhdLFxyXG4gICAgXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCI6IFtcIk1GS1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTUZMXCIsIDI0LCA0XSxcclxuICAgIFwiTWFnbmVzaXVtXCI6IFtcIk1HXCIsIDAuMjcsIDAuMTZdLFxyXG4gICAgXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIjogW1wiTUdDXCIsIDAuNiwgMC45XSxcclxuICAgIFwiTWFnbmVzaXRlXCI6IFtcIk1HU1wiLCAxLjczLCAxXSxcclxuICAgIFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJNSExcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWljcm8gSGVhZHBob25lc1wiOiBbXCJNSFBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIjogW1wiTUxJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTWljcm8tUHJvY2Vzc29yXCI6IFtcIk1QQ1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTVNMXCIsIDUwLCA1MF0sXHJcbiAgICBcIk1lZ2FUdWJlIENvYXRpbmdcIjogW1wiTVRDXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTWVhdCBUaXNzdWUgUGF0dGllc1wiOiBbXCJNVFBcIiwgMC43LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiOiBbXCJNVVNcIiwgMC44LCAxXSxcclxuICAgIFwiTWVkaXVtIFdhZmVyXCI6IFtcIk1XRlwiLCAwLjAwOCwgMC4wMDhdLFxyXG4gICAgXCJOaXRyb2dlblwiOiBbXCJOXCIsIDAuODA3LCAxXSxcclxuICAgIFwiU29kaXVtXCI6IFtcIk5BXCIsIDAuOTcsIDFdLFxyXG4gICAgXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIjogW1wiTkFCXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCI6IFtcIk5DU1wiLCAwLjAyOCwgMC4wMV0sXHJcbiAgICBcIk5lb25cIjogW1wiTkVcIiwgMC45LCAxXSxcclxuICAgIFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIjogW1wiTkZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJOYW5vIEZpYmVyXCI6IFtcIk5GSVwiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk5hbm8tQ29hdGVkIEdsYXNzXCI6IFtcIk5HXCIsIDAuMDIyLCAwLjAxXSxcclxuICAgIFwiTnlsb24gRmFicmljXCI6IFtcIk5MXCIsIDEuMTMsIDFdLFxyXG4gICAgXCJOZXVyYWwgTmV0d29ya1wiOiBbXCJOTlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE5venpsZVwiOiBbXCJOT1pcIiwgMywgMS41XSxcclxuICAgIFwiTmFuby1FbmhhbmNlZCBSZXNpblwiOiBbXCJOUlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTnV0cmllbnQgU29sdXRpb25cIjogW1wiTlNcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJOZXVyb1N0aW11bGFudHNcIjogW1wiTlNUXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgTnV0c1wiOiBbXCJOVVRcIiwgMC45LCAxXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCI6IFtcIk5WMVwiLCA0LjIsIDJdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIjogW1wiTlYyXCIsIDYuNywgM10sXHJcbiAgICBcIk94eWdlblwiOiBbXCJPXCIsIDEuMTQxLCAxXSxcclxuICAgIFwiT2ZmaWNlIFN1cHBsaWVzXCI6IFtcIk9GRlwiLCAwLjAyLCAwLjJdLFxyXG4gICAgXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiOiBbXCJPTEZcIiwgMC4wMSwgMC4wMDFdLFxyXG4gICAgXCJPcGVyYXRpbmcgU3lzdGVtXCI6IFtcIk9TXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgT3ZlcmFsbHNcIjogW1wiT1ZFXCIsIDAuMDIsIDAuMDI1XSxcclxuICAgIFwiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCI6IFtcIlBDQlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIjogW1wiUERBXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlBvbHktRXRoeWxlbmVcIjogW1wiUEVcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIlByZW1pdW0gRmVydGlsaXplclwiOiBbXCJQRkVcIiwgMC45LCAxXSxcclxuICAgIFwiUG9seW1lciBHcmFudWxhdGVcIjogW1wiUEdcIiwgMC4wMDIsIDAuMDAxXSxcclxuICAgIFwiUGluZWJlcnJpZXNcIjogW1wiUElCXCIsIDAuMywgMV0sXHJcbiAgICBcIlBhaW5raWxsZXJzXCI6IFtcIlBLXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlBvd2VyIENlbGxcIjogW1wiUE9XXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4gUGFzdGVcIjogW1wiUFBBXCIsIDIsIDFdLFxyXG4gICAgXCJQcmVzc3VyZSBTaGllbGRpbmdcIjogW1wiUFNIXCIsIDQuMiwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIExcIjogW1wiUFNMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCI6IFtcIlBTTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiOiBbXCJQU1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiUG93ZXIgVG9vbHNcIjogW1wiUFRcIiwgMC4yNSwgMC4yXSxcclxuICAgIFwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiOiBbXCJQV09cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiOiBbXCJRQ1JcIiwgMTQsIDEwXSxcclxuICAgIFwiUmFkaW8gRGV2aWNlXCI6IFtcIlJBRFwiLCAwLjAwMywgMC4wMDVdLFxyXG4gICAgXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCI6IFtcIlJBR1wiLCA1LCAzLjRdLFxyXG4gICAgXCJNZW1vcnkgQmFua1wiOiBbXCJSQU1cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiQmFzaWMgUmF0aW9uc1wiOiBbXCJSQVRcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiOiBbXCJSQkhcIiwgMi40LCAwLjldLFxyXG4gICAgXCJSYXcgQ290dG9uIEZpYmVyXCI6IFtcIlJDT1wiLCAwLjk1LCAxXSxcclxuICAgIFwiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiOiBbXCJSQ1NcIiwgMC42NywgMC41XSxcclxuICAgIFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIjogW1wiUkNUXCIsIDcsIDRdLFxyXG4gICAgXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIjogW1wiUkRFXCIsIDEuNCwgMS41XSxcclxuICAgIFwiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJETFwiLCAxNTAsIDMwXSxcclxuICAgIFwiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJEU1wiLCA1MCwgMTBdLFxyXG4gICAgXCJDaGVtaWNhbCBSZWFnZW50c1wiOiBbXCJSRUFcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlJlc2N1ZSBEcm9uZVwiOiBbXCJSRURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUmVwYWlyIEtpdFwiOiBbXCJSRVBcIiwgMC4wMDYsIDAuMDAyXSxcclxuICAgIFwiUmVpbmZvcmNlZCBHbGFzc1wiOiBbXCJSR1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIlJlZCBHb2xkXCI6IFtcIlJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiOiBbXCJSSFBcIiwgMTIsIDEwXSxcclxuICAgIFwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiOiBbXCJST01cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIlJTRVwiLCAxLjksIDAuN10sXHJcbiAgICBcIlJhZGlhdGlvbiBTaGllbGRpbmdcIjogW1wiUlNIXCIsIDMuNywgMC44XSxcclxuICAgIFwiUmF3IFNpbGsgU3RyYWluc1wiOiBbXCJSU0lcIiwgMS4xLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJSVEFcIiwgMS41LCAwLjVdLFxyXG4gICAgXCJTdWxmdXJcIjogW1wiU1wiLCAwLjUyLCAwLjI1XSxcclxuICAgIFwiU2VhcmNoIEFsZ29yaXRobVwiOiBbXCJTQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNvcnRpbmcgQWxnb3JpdGhtXCI6IFtcIlNBTFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNlbnNvciBBcnJheVwiOiBbXCJTQVJcIiwgMS43LCAyXSxcclxuICAgIFwiU3RlbSBDZWxsIFRyZWF0bWVudFwiOiBbXCJTQ1wiLCAwLjA0LCAwLjAxXSxcclxuICAgIFwiU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJTQ0JcIiwgNTAsIDUwXSxcclxuICAgIFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCI6IFtcIlNDTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdWxmdXIgQ3J5c3RhbHNcIjogW1wiU0NSXCIsIDIuMDUsIDFdLFxyXG4gICAgXCJTdXJnaWNhbCBEcm9uZVwiOiBbXCJTRFJcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIjogW1wiU0VBXCIsIDAuMTUsIDAuMDddLFxyXG4gICAgXCJTZW5zb3JcIjogW1wiU0VOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1cmdpY2FsIEVxdWlwbWVudFwiOiBbXCJTRVFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTVEwgRnVlbFwiOiBbXCJTRlwiLCAwLjA2LCAwLjA2XSxcclxuICAgIFwiU21hbGwgRlRMIEVtaXR0ZXJcIjogW1wiU0ZFXCIsIDAuMSwgMC40XSxcclxuICAgIFwiU21hbGwgRmFzdGVuZXIgS2l0XCI6IFtcIlNGS1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU0ZMXCIsIDksIDEuNV0sXHJcbiAgICBcIlNpbGljb25cIjogW1wiU0lcIiwgMi4zMjksIDFdLFxyXG4gICAgXCJTaWxrZW4gRmFicmljXCI6IFtcIlNJTFwiLCAxLjIxLCAxXSxcclxuICAgIFwiU2lsaWNvbiBPcmVcIjogW1wiU0lPXCIsIDEuNzksIDFdLFxyXG4gICAgXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCI6IFtcIlNOTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFydGlmaWNpYWwgU29pbFwiOiBbXCJTT0lcIiwgMC45LCAxXSxcclxuICAgIFwiU29sYXIgQ2VsbFwiOiBbXCJTT0xcIiwgMC4wMTUsIDAuMDFdLFxyXG4gICAgXCJTb2xhciBQYW5lbFwiOiBbXCJTUFwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJTaGlwLVJlcGFpciBEcm9uZVwiOiBbXCJTUkRcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiU1JQXCIsIDAuMSwgMC4yXSxcclxuICAgIFwiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiOiBbXCJTU0NcIiwgMSwgMV0sXHJcbiAgICBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNTTFwiLCAyMCwgMjBdLFxyXG4gICAgXCJTdGVlbFwiOiBbXCJTVExcIiwgNy44NSwgMV0sXHJcbiAgICBcIk1lZGljYWwgU3RyZXRjaGVyXCI6IFtcIlNUUlwiLCAwLjAxLCAxXSxcclxuICAgIFwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCI6IFtcIlNUU1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlN1cmdlcnkgVW5pdFwiOiBbXCJTVVwiLCA2LCA1XSxcclxuICAgIFwiU3VydmVpbGxhbmNlIERyb25lXCI6IFtcIlNVRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTYWZldHkgVW5pZm9ybVwiOiBbXCJTVU5cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlNtYWxsIFdhZmVyXCI6IFtcIlNXRlwiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJUYW50YWx1bVwiOiBbXCJUQVwiLCAxNi42NSwgMV0sXHJcbiAgICBcIlRhcmdldGluZyBDb21wdXRlclwiOiBbXCJUQUNcIiwgMC4xNSwgMV0sXHJcbiAgICBcIlRhbnRhbGl0ZSBSb2NrXCI6IFtcIlRBSVwiLCA3Ljk0LCAxXSxcclxuICAgIFwiVGVjaG5ldGl1bVwiOiBbXCJUQ1wiLCAxMS44LCAxXSxcclxuICAgIFwiVGlueSBDYXJnbyBCYXkgS2l0XCI6IFtcIlRDQlwiLCAyMCwgMjBdLFxyXG4gICAgXCJUQ0wgQWNpZFwiOiBbXCJUQ0xcIiwgMC4wOSwgMC4xXSxcclxuICAgIFwiVGVjaG5ldGl1bSBPeGlkZVwiOiBbXCJUQ09cIiwgOS44LCAxXSxcclxuICAgIFwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCI6IFtcIlRDU1wiLCAzLjQsIDEuMl0sXHJcbiAgICBcIlRyYXVtYSBDYXJlIFVuaXRcIjogW1wiVENVXCIsIDUsIDRdLFxyXG4gICAgXCJUaGVybW9GbHVpZFwiOiBbXCJUSEZcIiwgMC42LCAwLjM1XSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIlRIUFwiLCAyLjIsIDFdLFxyXG4gICAgXCJUaXRhbml1bVwiOiBbXCJUSVwiLCA0LjUsIDFdLFxyXG4gICAgXCJUaXRhbml1bSBPcmVcIjogW1wiVElPXCIsIDEuNTgsIDFdLFxyXG4gICAgXCJUZWNobm9LZXZsYXIgRmFicmljXCI6IFtcIlRLXCIsIDEuODksIDFdLFxyXG4gICAgXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCI6IFtcIlRQVVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJBdWRpbyBUcmFuc21pdHRlclwiOiBbXCJUUkFcIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNpc3RvclwiOiBbXCJUUk5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiVHJ1c3NcIjogW1wiVFJVXCIsIDAuMSwgMS41XSxcclxuICAgIFwiVGVjdG9zaWxpc2l0ZVwiOiBbXCJUU1wiLCAyLjQsIDFdLFxyXG4gICAgXCJUaGVybWFsIFNoaWVsZGluZ1wiOiBbXCJUU0hcIiwgMi40LCAxLjVdLFxyXG4gICAgXCJUZXN0IFR1YmVzXCI6IFtcIlRVQlwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJVbml2ZXJzYWwgVG9vbHNldFwiOiBbXCJVVFNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIjogW1wiVkNCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiOiBbXCJWRUdcIiwgMS4xLCAxXSxcclxuICAgIFwiVml0YUdlbFwiOiBbXCJWR1wiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJWaXRhIEVzc2VuY2VcIjogW1wiVklUXCIsIDAuOSwgMV0sXHJcbiAgICBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWU0NcIiwgMzUsIDM1XSxcclxuICAgIFwiVHVuZ3N0ZW5cIjogW1wiV1wiLCA3LjUxOSwgMV0sXHJcbiAgICBcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIjogW1wiV0FJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiOiBbXCJXQUxcIiwgNi4yNSwgMV0sXHJcbiAgICBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCI6IFtcIldDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlNtYXJ0IFppbmZhbmRlbFwiOiBbXCJXSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJXaW5kb3cgTWFuYWdlclwiOiBbXCJXTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCI6IFtcIldPUlwiLCA1LCA1XSxcclxuICAgIFwiV2F0ZXIgUmVjbGFpbWVyXCI6IFtcIldSXCIsIDYuNCwgNV0sXHJcbiAgICBcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCI6IFtcIldTXCIsIDAuMDUsIDAuNV0sXHJcbiAgICBcIlppcmNvbiBDcnlzdGFsc1wiOiBbXCJaSVJcIiwgNC44NSwgMV0sXHJcbiAgICBcIlppcmNvbml1bVwiOiBbXCJaUlwiLCA2LjUzLCAxXSxcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2FtZVByb3BlcnRpZXMudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFByaWNlcyhwcmljZXMsIHdlYmFwcElEKSB7XHJcbiAgICBpZiAoIXdlYmFwcElEKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFdlYiBBcHAgVGltZW91dFwiKTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBQcmljZXMgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJpY2VEYXRhKTtcclxuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1trZXldID0gcHJpY2VEYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgd2ViYXBwSUQgKyBcIi9leGVjP21vZGU9JTIycHJpY2UlMjJcIiwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q1hQcmljZXMoY3hQcmljZXMpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBDWCBQcmljZSBUaW1lb3V0XCIpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIENYIFByaWNlc1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmljZURhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FudGVkUmVzdWx0cyA9IFtcIkFza1ByaWNlXCIsIFwiQmlkUHJpY2VcIiwgXCJBdmVyYWdlXCIsIFwiQXNrQXZhaWxcIiwgXCJCaWRBdmFpbFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENYcyA9IFtcIkFJMVwiLCBcIkNJMVwiLCBcIkNJMlwiLCBcIklDMVwiLCBcIk5DMVwiLCBcIk5DMlwiXTtcclxuICAgICAgICAgICAgICAgIHByaWNlRGF0YS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3hQcmljZXNbbWF0W1wiVGlja2VyXCJdXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIENYcy5mb3JFYWNoKENYID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3hQcmljZXNbbWF0W1wiVGlja2VyXCJdXVtDWF0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FudGVkUmVzdWx0cy5mb3JFYWNoKHdhbnRlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dW0NYXVt3YW50ZWRdID0gbWF0W0NYICsgXCItXCIgKyB3YW50ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3hQcmljZXNbXCJBZ2VcIl0gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3hQcmljZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIFJhaW4gUHJpY2VzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3JhaW4vcHJpY2VzXCIsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKCFidXJuKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcGlrZXkgfHwgIXVzZXJuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYnVyblt1c2VybmFtZV0gPSBbXTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQnVybiBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi91c2VyL1wiICsgdXNlcm5hbWUsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSkge1xyXG4gICAgaWYgKCFidXJuKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcGlrZXkgfHwgIWdyb3VwaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIEdyb3VwIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL2dyb3VwL1wiICsgZ3JvdXBpZCwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KSB7XHJcbiAgICBpZiAoIWFwaWtleSB8fCAhdXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuU2V0dGluZ3MucHVzaChcImxvYWRpbmdcIik7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gU2V0dGluZ3MgVGltZW91dFwiKTtcclxuICAgICAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBCdXJuIFNldHRpbmdzIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVyblNldHRpbmdzWzBdID0gXCJsb2FkZWRcIjtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5ncy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3VzZXJzZXR0aW5ncy9idXJucmF0ZS9cIiArIHVzZXJuYW1lLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHVzZXJuYW1lLCBhcGlrZXkpIHtcclxuICAgIGlmICghY29udHJhY3RzKSB7XHJcbiAgICAgICAgY29udHJhY3RzID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwaWtleSB8fCAhdXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gW107XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIENvbnRyYWN0IFRpbWVvdXRcIik7XHJcbiAgICAgICAgY29udHJhY3RzW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnZXRDb250cmFjdHMoY29udHJhY3RzLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBDb250cmFjdHMgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2NvbnRyYWN0L2FsbGNvbnRyYWN0c1wiKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19JTkRJQ0FUT1IgPSBcIiQkQ0hFQ0tcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrbGlzdHModGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBnZW5lcmF0ZUNoZWNrVGFibGUsIHRpbGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tOYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBjaGVja05hbWU7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBjb25zdCBjaGVja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2hlY2tXcmFwcGVyKTtcclxuICAgICAgICBjaGVja1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrLXdyYXBwZXJcIik7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBkaXNwU3RvcmVkQ2hlY2ssIFtjaGVja05hbWUsIHRpbGVdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNoZWNrVGFibGUocmVzdWx0LCB0aWxlKSB7XHJcbiAgICBpZiAoIXRpbGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOYW1lXCIsIFwiSW5jb21wbGV0ZSBJdGVtc1wiLCBcIlRvdGFsIEl0ZW1zXCIsIFwiRGVsZXRlXCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUctTm90ZXNcIl0pKTtcclxuICAgIHZhciBhbnlDaGVja2xpc3RzID0gZmFsc2U7XHJcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCA3KSAhPSBDSEVDS19JTkRJQ0FUT1IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbnlDaGVja2xpc3RzID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBpbmNvbXBsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGluY29tcGxldGVDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0b3RhbENvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbHVtbik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIG5hbWVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhuYW1lLnN1YnN0cmluZyg3KSwgXCJYSVQgQ0hFQ0tfXCIgKyBuYW1lLnN1YnN0cmluZyg3KSkpO1xyXG4gICAgICAgIGluY29tcGxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5maWx0ZXIoKG9iaikgPT4gKCFvYmpbMV0pKS5sZW5ndGgpKTtcclxuICAgICAgICB0b3RhbENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25hbWVdLmxlbmd0aCkpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XHJcbiAgICAgICAgZGVsZXRlQ29sdW1uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtuYW1lLnN1YnN0cmluZyg3KSwgW11dKTtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgaWYgKCFhbnlDaGVja2xpc3RzKSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSA0O1xyXG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIENoZWNrbGlzdHNcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlVGhlblN0b3JlQ2hlY2socmVzdWx0LCBwYXJhbXMpIHtcclxuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja05hbWUgPSBwYXJhbXNbMF07XHJcbiAgICBjb25zdCBjaGVja1RleHQgPSBwYXJhbXNbMV07XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0gPSBjaGVja1RleHQubGVuZ3RoID09IDAgPyB1bmRlZmluZWQgOiBjaGVja1RleHQ7XHJcbiAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BTdG9yZWRDaGVjayhyZXN1bHQsIHBhcmFtcykge1xyXG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSB8fCAhcGFyYW1zWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hlY2tOYW1lID0gcGFyYW1zWzBdO1xyXG4gICAgY29uc3QgdGlsZSA9IHBhcmFtc1sxXTtcclxuICAgIGNvbnN0IGNoZWNrV3JhcHBlciA9IHRpbGUuY2hpbGRyZW5bMV07XHJcbiAgICBpZiAoIWNoZWNrV3JhcHBlcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0uZm9yRWFjaChjaGVjayA9PiB7IGNyZWF0ZUNoZWNrUm93KGNoZWNrV3JhcHBlciwgcmVzdWx0LCBjaGVja05hbWUsIGNoZWNrWzBdLCBjaGVja1sxXSwgY2hlY2tbMl0pOyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgTmV3XCI7XHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XHJcbiAgICAgICAgY29uc3QgZ3JleVN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyZXlTdHJpcGVzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuR3JleVN0cmlwZXMpO1xyXG4gICAgICAgIG92ZXJsYXBEaXYuYXBwZW5kQ2hpbGQoZ3JleVN0cmlwZXMpO1xyXG4gICAgICAgIHRpbGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXBEaXYsIHRpbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbiAgICAgICAgY29uc3QgYWRkSW50ZXJmYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYWRkSW50ZXJmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNlbnRlckludGVyZmFjZSk7XHJcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XHJcbiAgICAgICAgY29uc3QgYWRkSW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhZGRJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZChcIk5MT3JIN2hGNWZiS0llc3FXM3VTa0E9PVwiKTtcclxuICAgICAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XHJcbiAgICAgICAgY29uc3QgYWRkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBhZGRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDaGVja2xpc3QgSXRlbSBFZGl0b3JcIikpO1xyXG4gICAgICAgIGFkZEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICAgICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGFkZEhlYWRlcik7XHJcbiAgICAgICAgYWRkSGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICBjb25zdCBuYW1lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lUm93KTtcclxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XHJcbiAgICAgICAgbmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcclxuICAgICAgICBuYW1lUm93LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgICAgIG5hbWVSb3cuYXBwZW5kQ2hpbGQobmFtZUlucHV0RGl2KTtcclxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbmFtZUlucHV0RGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgZGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZVJvdyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcclxuICAgICAgICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICAgICAgICBjb25zdCBkYXRlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XHJcbiAgICAgICAgZGF0ZVJvdy5hcHBlbmRDaGlsZChkYXRlSW5wdXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgIGRhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVSb3cpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlIFRpbWVcIjtcclxuICAgICAgICB0aW1lTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgICAgIHRpbWVSb3cuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcclxuICAgICAgICBjb25zdCB0aW1lSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XHJcbiAgICAgICAgdGltZVJvdy5hcHBlbmRDaGlsZCh0aW1lSW5wdXREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aW1lSW5wdXQudHlwZSA9IFwidGltZVwiO1xyXG4gICAgICAgIHRpbWVJbnB1dERpdi5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcclxuICAgICAgICBjb25zdCBzYXZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgc2F2ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDTURcIjtcclxuICAgICAgICBzYXZlTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcclxuICAgICAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVMYWJlbCk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzYXZlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcclxuICAgICAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVJbnB1dERpdik7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xyXG4gICAgICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICBzYXZlSW5wdXREaXYuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IG5hbWVJbnB1dC52YWx1ZSB8fCBcIlwiO1xyXG4gICAgICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xyXG4gICAgICAgICAgICB2YXIgZHVlRGF0ZTtcclxuICAgICAgICAgICAgaWYgKGRhdGVJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBEYXRlLnBhcnNlKGRhdGVJbnB1dC52YWx1ZSArIFwiIFwiICsgdGltZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBEYXRlLnBhcnNlKGRhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBbaXRlbU5hbWUsIGZhbHNlXTtcclxuICAgICAgICAgICAgaWYgKGR1ZURhdGUgJiYgIWlzTmFOKGR1ZURhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5wdXNoKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5wdXNoKGl0ZW1Db250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXSA9IFtpdGVtQ29udGVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVDaGVjaywgW2NoZWNrTmFtZSwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdXSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNoZWNrUm93KGNoZWNrV3JhcHBlciwgcmVzdWx0LCBjaGVja05hbWUsIGl0ZW1OYW1lLCBmYWxzZSwgZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIENvbXBsZXRlXCI7XHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xyXG4gICAgY2xlYXJCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBjbGVhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBjbGVhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbkRhbmdlcik7XHJcbiAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1baV1bMV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoZWNrV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja1JvdyA9IGNoZWNrV3JhcHBlci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrUm93ICYmIGNoZWNrUm93LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrV3JhcHBlci5yZW1vdmVDaGlsZChjaGVja1Jvdyk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVDaGVjaywgW2NoZWNrTmFtZSwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdXSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVDaGVja1Jvdyh0aWxlLCByZXN1bHQsIGNoZWNrTmFtZSwgbmFtZSwgY2hlY2tlZCwgZHVlRGF0ZSkge1xyXG4gICAgY29uc3QgY2hlY2tSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2hlY2tSb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2hlY2tSb3cuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICBjb25zdCBjaGVja0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjaGVja0NpcmNsZS50ZXh0Q29udGVudCA9IGNoZWNrZWQgPyAn4pePJyA6ICfil4snO1xyXG4gICAgY2hlY2tSb3cuYXBwZW5kQ2hpbGQoY2hlY2tDaXJjbGUpO1xyXG4gICAgY2hlY2tDaXJjbGUuc3R5bGUuY29sb3IgPSBkdWVEYXRlICYmIGR1ZURhdGUgPCBEYXRlLm5vdygpID8gXCIjZDk1MzRmXCIgOiBcIiNmN2E2MDBcIjtcclxuICAgIGNoZWNrQ2lyY2xlLnN0eWxlLmZvbnRTaXplID0gXCIzNXB4XCI7XHJcbiAgICBjaGVja0NpcmNsZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2hlY2tSb3cpO1xyXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjaGVja1RleHQgPSBjcmVhdGVUZXh0U3BhbihuYW1lKTtcclxuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoY2hlY2tUZXh0KTtcclxuICAgIGNoZWNrVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2hlY2tUZXh0LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgdmFyIGR1ZURhdGVUZXh0O1xyXG4gICAgaWYgKGR1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlVGV4dCA9IGNyZWF0ZVRleHRTcGFuKG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSkgKyBcIiBcIiArIG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibnVtZXJpY1wiLCB5ZWFyOiBcIm51bWVyaWNcIiB9KSk7XHJcbiAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChkdWVEYXRlIDwgRGF0ZS5ub3coKSA/IFwiY2hlY2stdGltZS1vdmVyZHVlXCIgOiBcImNoZWNrLXRpbWVcIik7XHJcbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgIGNoZWNrVGV4dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC10ZXh0XCIpO1xyXG4gICAgICAgIGNoZWNrUm93LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xyXG4gICAgICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGltZS1jb21wbGV0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja1Jvdy5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgIGNoZWNrQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hlY2tlZCA9ICFjaGVja2VkO1xyXG4gICAgICAgIGNoZWNrQ2lyY2xlLnRleHRDb250ZW50ID0gY2hlY2tlZCA/ICfil48nIDogJ+KXiyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zc2libGVNYXRjaCA9IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXVtpXTtcclxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlTWF0Y2hbMF0gPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVNYXRjaFsxXSA9IGNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjaGVja1RleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGV4dFwiKTtcclxuICAgICAgICAgICAgY2hlY2tSb3cuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrLXRpbWUtY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC10ZXh0XCIpO1xyXG4gICAgICAgICAgICBjaGVja1Jvdy5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgaWYgKGR1ZURhdGVUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2stdGltZS1jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbY2hlY2tOYW1lLCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1dKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TcGFjZXIpO1xyXG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3BhY2VyO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9DaGVja2xpc3RzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEZsaWdodEVUQXMgfSBmcm9tIFwiLi9GbGlnaHRFVEFzXCI7XHJcbmltcG9ydCB7IExvY2FsTWFya2V0QWRzIH0gZnJvbSAnLi9Mb2NhbE1hcmtldEFkcyc7XHJcbmltcG9ydCB7IE1vZHVsZVJ1bm5lciB9IGZyb20gXCIuL01vZHVsZVJ1bm5lclwiO1xyXG5pbXBvcnQgeyBPcmRlckVUQXMgfSBmcm9tIFwiLi9PcmRlckVUQXNcIjtcclxuaW1wb3J0IHsgQ29uc3VtYWJsZVRpbWVycyB9IGZyb20gXCIuL0NvbnN1bWFibGVUaW1lcnNcIjtcclxuaW1wb3J0IHsgRmxlZXRFVEFzIH0gZnJvbSBcIi4vRmxlZXRFVEFzXCI7XHJcbmltcG9ydCB7IFBvc3RMTSB9IGZyb20gXCIuL1Bvc3RMTVwiO1xyXG5pbXBvcnQgeyBTaGlwcGluZ0FkcyB9IGZyb20gXCIuL1NoaXBwaW5nQWRzXCI7XHJcbmltcG9ydCB7IFF1ZXVlTG9hZCB9IGZyb20gXCIuL1F1ZXVlTG9hZFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRQcmljZXMsIGdldEJ1cm4sIGdldEJ1cm5TZXR0aW5ncywgZ2V0Q29udHJhY3RzIH0gZnJvbSBcIi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5pbXBvcnQgeyBQTU1HU3R5bGUsIEVuaGFuY2VkQ29sb3JzLCBJY29uU3R5bGUgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBTY3JlZW5VbnBhY2sgfSBmcm9tIFwiLi9TY3JlZW5VbnBhY2tcIjtcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgQ29tbWFuZENvcnJlY3RlciB9IGZyb20gXCIuL0NvbW1hbmRDb3JyZWN0ZXJcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvckJ1dHRvbiB9IGZyb20gXCIuL0NhbGN1bGF0b3JCdXR0b25cIjtcclxuaW1wb3J0IHsgQ29udHJhY3REcmFmdHMgfSBmcm9tIFwiLi9Db250cmFjdERyYWZ0c1wiO1xyXG5pbXBvcnQgeyBJbWFnZUNyZWF0b3IgfSBmcm9tIFwiLi9JbWFnZUNyZWF0b3JcIjtcclxuaW1wb3J0IHsgSW52ZW50b3J5T3JnYW5pemVyIH0gZnJvbSBcIi4vSW52ZW50b3J5T3JnYW5pemVyXCI7XHJcbmltcG9ydCB7IEhlYWRlck1pbmltaXplciB9IGZyb20gXCIuL0hlYWRlck1pbmltaXplclwiO1xyXG5pbXBvcnQgeyBQZW5kaW5nQ29udHJhY3RzIH0gZnJvbSBcIi4vUGVuZGluZ0NvbnRyYWN0c1wiO1xyXG5pbXBvcnQgeyBDb21wYWN0VUkgfSBmcm9tIFwiLi9Db21wYWN0VUlcIjtcclxudHJ5IHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJQTU1HRXh0ZW5kZWRcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcclxufVxyXG5jYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcIlBNTUdFeHRlbmRlZFwiXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBUaW1lIExvYWRpbmcgUE1NR1wiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgc3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgIHN0eWxlLmlkID0gXCJwbW1nLXN0eWxlXCI7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFBNTUdTdHlsZTtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG4gICAgaWYgKGRvYykge1xyXG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPSBbXCJTY3JlZW5VbnBhY2tcIl07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIGNvbG9ycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG4gICAgICAgIGNvbG9ycy5pZCA9IFwicG1tZy1lbmhhbmNlZC1jb2xvcnNcIjtcclxuICAgICAgICBjb2xvcnMudGV4dENvbnRlbnQgPSBFbmhhbmNlZENvbG9ycztcclxuICAgICAgICBpZiAoZG9jKSB7XHJcbiAgICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZChjb2xvcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImljb25zXCIpIHtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWljb24tY29sb3JzXCI7XHJcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gSWNvblN0eWxlO1xyXG4gICAgICAgIGlmIChkb2MpIHtcclxuICAgICAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByaWNlcyA9IHt9O1xyXG4gICAgZ2V0UHJpY2VzKHByaWNlcywgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pO1xyXG4gICAgdmFyIGJ1cm4gPSBbXTtcclxuICAgIGdldEJ1cm4oYnVybiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSk7XHJcbiAgICB2YXIgYnVyblNldHRpbmdzID0gW107XHJcbiAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKTtcclxuICAgIHZhciBjb250cmFjdHMgPSBbXTtcclxuICAgIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xyXG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXHJcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXHJcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXHJcbiAgICAgICAgbmV3IFBvc3RMTShwcmljZXMpLFxyXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxyXG4gICAgICAgIG5ldyBPcmRlckVUQXMoKSxcclxuICAgICAgICBuZXcgRmxpZ2h0RVRBcygpLFxyXG4gICAgICAgIG5ldyBGbGVldEVUQXMoKSxcclxuICAgICAgICBuZXcgUXVldWVMb2FkKCksXHJcbiAgICAgICAgbmV3IENvbnN1bWFibGVUaW1lcnMocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIGJ1cm4sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSksXHJcbiAgICAgICAgbmV3IEludmVudG9yeU9yZ2FuaXplcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgYnVybiwgcmVzdWx0KSxcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9ucygpLFxyXG4gICAgICAgIG5ldyBJbWFnZUNyZWF0b3IoKSxcclxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdKSxcclxuICAgICAgICBuZXcgSGVhZGVyTWluaW1pemVyKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIm1pbmltaXplX2J5X2RlZmF1bHRcIl0pLFxyXG4gICAgICAgIG5ldyBDb21tYW5kQ29ycmVjdGVyKCksXHJcbiAgICAgICAgbmV3IENhbGN1bGF0b3JCdXR0b24oKSxcclxuICAgICAgICBuZXcgU2lkZWJhcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSxcclxuICAgICAgICBuZXcgUGVuZGluZ0NvbnRyYWN0cyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgY29udHJhY3RzKSxcclxuICAgICAgICBuZXcgQ29tcGFjdFVJKHJlc3VsdClcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24gKyBjdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZSArPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFJvdyA9IGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0Um93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RFdGFEYXRhID0gZmlyc3RSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgIGlmICghZmlyc3RFdGFEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpcnN0RXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKGN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGZpcnN0RXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3RvdGFsRXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGlnaHRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgTG9jYWxNYXJrZXRBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWxtLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyhCVVlJTkd8U0VMTElOR3xDT1JQKVxccyhcXGQrKVxccy4qXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmb3IvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG1hdGNoZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KG1hdGNoZXNbM10ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9ICh0b3RhbENlbnRzIC8gY291bnQgLyAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XHJcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfSBlYSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzaG93QnVmZmVyLCBzZXRTZXR0aW5ncyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgRnJpZW5kbHlOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVSdW5uZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlcywgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzLm1hcChtID0+IHRoaXMubW9kdWxlVG9NRShtKSk7XHJcbiAgICAgICAgdGhpcy54aXQgPSBuZXcgWElUSGFuZGxlcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdICYmIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1vZHVsZVRvTUUobW9kdWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgICAgICBuYW1lOiBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZnJpZW5kbHlOYW1lOiBGcmllbmRseU5hbWVzW21vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lXSB8fCBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGNsZWFudXBUaW1lOiAwLFxyXG4gICAgICAgICAgICBydW5UaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy54aXQucnVuKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdID0gc2hvd0J1ZmZlcihcIlhJVCBTVEFSVFwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3ModGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVuVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDE7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5ydW5UaW1lICs9IHJ1blRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvb3AoKSwgMjUwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Nb2R1bGVSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tIFwiLi9YSVQvU3RhcnRcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi9YSVQvU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tIFwiLi9YSVQvRGVidWdcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL1hJVC9DYWxjdWxhdG9yXCI7XHJcbmltcG9ydCB7IFJlcGFpcnNfcHJlIH0gZnJvbSBcIi4vWElUL1JlcGFpcnNcIjtcclxuaW1wb3J0IHsgQ2hhdF9wcmUgfSBmcm9tIFwiLi9YSVQvQ2hhdFwiO1xyXG5pbXBvcnQgeyBGaW5fcHJlIH0gZnJvbSBcIi4vWElUL0ZpbmFuY2VzXCI7XHJcbmltcG9ydCB7IEVuaGFuY2VkQnVybl9wcmUgfSBmcm9tIFwiLi9YSVQvQnVyblwiO1xyXG5pbXBvcnQgeyBTaGVldFRhYmxlX3ByZSB9IGZyb20gXCIuL1hJVC9TaGVldFRhYmxlXCI7XHJcbmltcG9ydCB7IENvbnRyYWN0c19wcmUgfSBmcm9tIFwiLi9YSVQvQ29udHJhY3RzXCI7XHJcbmltcG9ydCB7IFBSdU5fcHJlLCBQcm9zcGVyaXR5X3ByZSwgU2hlZXRzX3ByZSwgRGlzY29yZF9wcmUgfSBmcm9tIFwiLi9YSVQvV2ViXCI7XHJcbmltcG9ydCB7IEZJT0ludl9wcmUgfSBmcm9tIFwiLi9YSVQvSW52ZW50b3J5XCI7XHJcbmltcG9ydCB7IE5vdGVzIH0gZnJvbSBcIi4vWElUL05vdGVzXCI7XHJcbmltcG9ydCB7IENoZWNrbGlzdHMgfSBmcm9tIFwiLi9YSVQvQ2hlY2tsaXN0c1wiO1xyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSBcIi4vWElUL1NvcnRcIjtcclxuaW1wb3J0IHsgQ29tbWFuZExpc3RzIH0gZnJvbSBcIi4vWElUL0NvbW1hbmRMaXN0c1wiO1xyXG5leHBvcnQgY29uc3QgWElUUHJlRnVuY3Rpb25zID0ge1xyXG4gICAgXCJJTlZcIjogRklPSW52X3ByZSxcclxuICAgIFwiRElTQ09SRFwiOiBEaXNjb3JkX3ByZSxcclxuICAgIFwiU0hFRVRTXCI6IFNoZWV0c19wcmUsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogUHJvc3Blcml0eV9wcmUsXHJcbiAgICBcIlBSVU5cIjogUFJ1Tl9wcmUsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogU2hlZXRUYWJsZV9wcmUsXHJcbiAgICBcIkZJTlwiOiBGaW5fcHJlLFxyXG4gICAgXCJDSEFUXCI6IENoYXRfcHJlLFxyXG4gICAgXCJCVVJOXCI6IEVuaGFuY2VkQnVybl9wcmUsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFNldHRpbmdzLFxyXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcclxuICAgIFwiUkVQQUlSU1wiOiBSZXBhaXJzX3ByZSxcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yLFxyXG4gICAgXCJDQUxDXCI6IENhbGN1bGF0b3IsXHJcbiAgICBcIlNUQVJUXCI6IFN0YXJ0LFxyXG4gICAgXCJERUJVR1wiOiBEZWJ1ZyxcclxuICAgIFwiTk9URVwiOiBOb3RlcyxcclxuICAgIFwiTk9URVNcIjogTm90ZXMsXHJcbiAgICBcIkNIRUNLXCI6IENoZWNrbGlzdHMsXHJcbiAgICBcIkNIRUNLU1wiOiBDaGVja2xpc3RzLFxyXG4gICAgXCJDSEVDS0xJU1RcIjogQ2hlY2tsaXN0cyxcclxuICAgIFwiQ0hFQ0tMSVNUU1wiOiBDaGVja2xpc3RzLFxyXG4gICAgXCJTT1JUXCI6IFNvcnQsXHJcbiAgICBcIkxJU1RcIjogQ29tbWFuZExpc3RzXHJcbn07XHJcbmV4cG9ydCBjb25zdCBYSVRCdWZmZXJUaXRsZXMgPSB7XHJcbiAgICBcIklOVlwiOiBcIkZJTyBJTlZFTlRPUllcIixcclxuICAgIFwiRElTQ09SRFwiOiBcIkRJU0NPUkQgU0VSVkVSXCIsXHJcbiAgICBcIlNIRUVUU1wiOiBcIkdPT0dMRSBTSEVFVFNcIixcclxuICAgIFwiUFJPU1BFUklUWVwiOiBcIlBST1NQRVJJVFlcIixcclxuICAgIFwiUFJVTlwiOiBcIlBSVU4tQ0VQVElPTlwiLFxyXG4gICAgXCJTSEVFVFRBQkxFXCI6IFwiR09PR0xFIFNIRUVUUyBUQUJMRVwiLFxyXG4gICAgXCJGSU5cIjogXCJGSU5BTkNJQUwgT1ZFUlZJRVdcIixcclxuICAgIFwiQ0hBVFwiOiBcIkNIQVRcIixcclxuICAgIFwiQlVSTlwiOiBcIkVOSEFOQ0VEIEJVUk5cIixcclxuICAgIFwiU0VUVElOR1NcIjogXCJQTU1HIFNFVFRJTkdTXCIsXHJcbiAgICBcIkNPTlRSQUNUU1wiOiBcIlBFTkRJTkcgQ09OVFJBQ1RTXCIsXHJcbiAgICBcIlJFUEFJUlNcIjogXCJSRVBBSVJTXCIsXHJcbiAgICBcIkNBTENcIjogXCJDQUxDVUxBVE9SXCIsXHJcbiAgICBcIkNBTENVTEFUT1JcIjogXCJDQUxDVUxBVE9SXCIsXHJcbiAgICBcIlNUQVJUXCI6IFwiU1RBUlRJTkcgV0lUSCBQTU1HXCIsXHJcbiAgICBcIkRFQlVHXCI6IFwiREVCVUdcIixcclxuICAgIFwiTk9URVwiOiBcIk5PVEVcIixcclxuICAgIFwiTk9URVNcIjogXCJOT1RFXCIsXHJcbiAgICBcIkNIRUNLXCI6IFwiQ0hFQ0tMSVNUXCIsXHJcbiAgICBcIkNIRUNLU1wiOiBcIkNIRUNLTElTVFwiLFxyXG4gICAgXCJDSEVDS0xJU1RcIjogXCJDSEVDS0xJU1RcIixcclxuICAgIFwiQ0hFQ0tMSVNUU1wiOiBcIkNIRUNLTElTVFwiLFxyXG4gICAgXCJTT1JUXCI6IFwiU09SVElORyBPUFRJT05TXCIsXHJcbiAgICBcIkxJU1RcIjogXCJDT01NQU5EIExJU1RcIlxyXG59O1xyXG5leHBvcnQgY2xhc3MgWElUSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgICAgIHRoaXMuYnVyblNldHRpbmdzID0gYnVyblNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXM7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiWElUXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgY29uc3QgYnVyblNldHRpbmdzID0gdGhpcy5idXJuU2V0dGluZ3M7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSAoYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXRpbGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkICYmICh0aWxlLmZpcnN0Q2hpbGQuaWQgPT0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiIHx8IHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbm8tbWF0Y2hcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzUmF3ID0gQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpKVswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzUmF3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1Jhdy5jaGFyQXQoNCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHBhcmFtZXRlcnNSYXcuc2xpY2UoNCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWVzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2goa2V5LnNsaWNlKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXBhcmFtZXRlcnMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyc1tpXSA9IHBhcmFtZXRlcnNbaV0udHJpbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1yZWxvYWRcIikge1xyXG4gICAgICAgICAgICAgICAgWElUUHJlRnVuY3Rpb25zW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV0odGlsZS5maXJzdENoaWxkLCBwYXJhbWV0ZXJzLCB0aGlzLnJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCB0aGlzLm1vZHVsZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInhpdC10aWxlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjIyMjIyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkIHx8ICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCAhPSBcInBtbWctbm8tbWF0Y2hcIikpKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi4p+zXCIpKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uaWQgPSBcInJlZnJlc2hcIjtcclxuICAgICAgICAgICAgICAgIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5pbnNlcnRCZWZvcmUocmVmcmVzaEJ1dHRvbiwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZUZ1bmMgPSBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgaWYgKCFwcmVGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRnVuY3Rpb24hXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbGUuZmlyc3RDaGlsZC5pZCA9IFwicG1tZy1uby1tYXRjaFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gWElUQnVmZmVyVGl0bGVzW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCB0cnVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHRoaXMucmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUSGFuZGxlci50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZUxpbmsgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gU3RhcnQodGlsZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHRpbGUuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHRpbGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjJweFwiO1xyXG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZVRleHRTcGFuKFwiVGhhbmsgeW91IGZvciB1c2luZyBQTU1HIEV4dGVuZGVkIVwiKTtcclxuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgd2VsY29tZS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJUaGlzIGlzIGEgc2hvcnQgdHV0b3JpYWwgb24gaG93IHRvIGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIGV4dGVuc2lvbi5cIikpO1xyXG4gICAgY29uc3Qgd2Vic2l0ZUxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2Vic2l0ZUxpbmtEaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJzaXRlTGlua0Rpdik7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkRldGFpbHMgb24gd2hhdCBQTU1HIG9mZmVycyBjYW4gYmUgZm91bmQgaGVyZTogXCIpKTtcclxuICAgIGNvbnN0IHdlYnNpdGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB3ZWJzaXRlTGluay5ocmVmID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9wbW1nZXh0ZW5kZWQvaG9tZT9hdXRodXNlcj0wXCI7XHJcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HIEV4dGVuZGVkXCI7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiU3RhcnQgYnkgb3BlbmluZyBhIG5ldyBidWZmZXIgYW5kIGVudGVyaW5nIFwiKSk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0xpbmsgPSBjcmVhdGVMaW5rKFwiWElUIFNFVFRJTkdTXCIsIFwiWElUIFNFVFRJTkdTXCIpO1xyXG4gICAgc2V0dGluZ3NMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpb0Rpdik7XHJcbiAgICBmaW9EaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiRklPIGlzIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBnYXRoZXJzIGRhdGEgZnJvbSB5b3VyIGdhbWUuIFBNTUcgRXh0ZW5kZWQgdXNlcyB0aGF0IGRhdGEgdG8gZGlzcGxheSB1c2VmdWwgaW5mb3JtYXRpb24uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpbnN0YWxsaW5nIEZJTyBoZXJlOiBcIikpO1xyXG4gICAgY29uc3QgZmlvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZmlvTGluay5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9cIjtcclxuICAgIGZpb0xpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBmaW9MaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgZmlvTGluay50ZXh0Q29udGVudCA9IFwiRklPIFdlYnNpdGVcIjtcclxuICAgIGZpb0Rpdi5hcHBlbmRDaGlsZChmaW9MaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYyKTtcclxuICAgIGZpb0RpdjIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIklmIHlvdSBhbHJlYWR5IGhhdmUgYSBGSU8gYWNjb3VudCwgYWRkIHlvdXIgdXNlcm5hbWUgYW5kIEFQSSBLZXkgdG8gdGhlIHRleHQgYm94ZXMgb24gWElUIFNFVFRJTkdTLiBZb3UgY2FuIGdlbmVyYXRlIGFuIEFQSSBLZXkgXCIpKTtcclxuICAgIGNvbnN0IGZpb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBmaW9MaW5rMi5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9zZXR0aW5nc1wiO1xyXG4gICAgZmlvTGluazIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZmlvTGluazIuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBmaW9MaW5rMi50ZXh0Q29udGVudCA9IFwiaGVyZS5cIjtcclxuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoZmlvTGluazIpO1xyXG4gICAgY29uc3Qgd2ViQXBwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2ViQXBwRGl2KTtcclxuICAgIHdlYkFwcERpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICB3ZWJBcHBEaXYuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMjBweFwiO1xyXG4gICAgd2ViQXBwRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiSWYgeW91ciBjb3Jwb3JhdGlvbiBoYXMgYSB3ZWIgYXBwIChBSEksIEZPV0wsIEtBV0EpLCBlbnRlciB0aGF0IGluIHRoZSBXZWIgQXBwIElEIGZpZWxkLlwiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWW91IGNhbiBleHBsb3JlIG90aGVyIHNldHRpbmdzIHRvIGVuYWJsZSBvciBkaXNhYmxlIGZlYXR1cmVzLCBjaGFuZ2UgdGhlIGNvbG9yIHNjaGVtZSwgYW5kIGN1c3RvbWl6ZSB0aGUgbGVmdCBzaWRlYmFyLiBDb250YWN0IFBpQm95MzE0IGluIGdhbWUgb3Igb24gRGlzY29yZCBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuXCIpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU3RhcnQudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZVRleHRTcGFuLCBkb3dubG9hZEZpbGUsIGNyZWF0ZVNlbGVjdE9wdGlvbiwgc2V0U2V0dGluZ3MsIGdldExvY2FsU3RvcmFnZSwgY3JlYXRlVG9vbFRpcCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlLCBXaXRoU3R5bGVzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5ncyh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCB3YXJuaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2FybmluZ0Rpdik7XHJcbiAgICB3YXJuaW5nRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiNHB4XCI7XHJcbiAgICB3YXJuaW5nRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQ2hhbmdlcyByZXF1aXJlIGEgcmVmcmVzaCB0byB0YWtlIGVmZmVjdC5cIikpO1xyXG4gICAgY29uc3QgaGVscERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlbHBEaXYpO1xyXG4gICAgaGVscERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xyXG4gICAgaGVscERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlNlZSBhIGZ1bGwgbGlzdCBvZiBmZWF0dXJlcyBvbiBcIikpO1xyXG4gICAgY29uc3Qgd2Vic2l0ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHdlYnNpdGVMaW5rLmhyZWYgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3BtbWdleHRlbmRlZC9mZWF0dXJlcz9hdXRodXNlcj0wXCI7XHJcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HJ3MgV2Vic2l0ZVwiO1xyXG4gICAgaGVscERpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhdXRoZW50aWNhdGlvbkhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkF1dGhlbnRpY2F0aW9uIFNldHRpbmdzXCIpKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJFbnRlciB5b3VyIEZJTyB1c2VybmFtZSBhbmQgQVBJIGtleSwgYXMgd2VsbCBhcyBhIGNvcnBvcmF0ZSB3ZWIgYXBwIElEXCIsIFwicmlnaHRcIikpO1xyXG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhdXRoZW50aWNhdGlvbkhlYWRlcik7XHJcbiAgICBjb25zdCB1c2VybmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJGSU8gVXNlcm5hbWU6IFwiKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gfHwgXCJcIjtcclxuICAgIHVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSA9ICF1c2VybmFtZUlucHV0LnZhbHVlIHx8IHVzZXJuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiA/IHVuZGVmaW5lZCA6IHVzZXJuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xyXG4gICAgdXNlcm5hbWVEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHVzZXJuYW1lRGl2KTtcclxuICAgIGNvbnN0IGFwaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhcGlMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIEFQSSBLZXk6IFwiKTtcclxuICAgIGFwaUxhYmVsLnN0eWxlLm1pbldpZHRoID0gXCI3N3B4XCI7XHJcbiAgICBhcGlMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbnN0IGFwaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYXBpSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0gfHwgXCJcIjtcclxuICAgIGFwaUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdID0gIWFwaUlucHV0LnZhbHVlIHx8IGFwaUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiBhcGlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBhcGlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGFwaUlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICBhcGlEaXYuYXBwZW5kQ2hpbGQoYXBpTGFiZWwpO1xyXG4gICAgYXBpRGl2LmFwcGVuZENoaWxkKGFwaUlucHV0KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYXBpRGl2KTtcclxuICAgIGNvbnN0IHdlYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3ZWJMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiV2ViIEFwcCBJRDogXCIpO1xyXG4gICAgd2ViTGFiZWwuc3R5bGUubWluV2lkdGggPSBcIjc3cHhcIjtcclxuICAgIHdlYkxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29uc3Qgd2ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB3ZWJJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdIHx8IFwiXCI7XHJcbiAgICB3ZWJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID0gIXdlYklucHV0LnZhbHVlIHx8IHdlYklucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB3ZWJJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB3ZWJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHdlYkRpdi5hcHBlbmRDaGlsZCh3ZWJMYWJlbCk7XHJcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViSW5wdXQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJEaXYpO1xyXG4gICAgY29uc3QgZW5oYW5jZWRDb2xvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29sb3IgU2NoZW1lXCIpKTtcclxuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlNlbGVjdCBhIGNvbG9yIHNjaGVtZSB0byBjdXN0b21pemUgbWF0ZXJpYWwgaWNvbnMuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgZW5oYW5jZWRDb2xvckhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGVuaGFuY2VkQ29sb3JIZWFkZXIpO1xyXG4gICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiQ29sb3IgU2NoZW1lOlwiKTtcclxuICAgIGNvbG9yTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgY29sb3JTZWxlY3QubmFtZSA9IFwiY29sb3JzLXNlbGVjdFwiO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSBcImNvbG9ycy1zZWxlY3RcIjtcclxuICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdE9wdGlvbihcIkVuaGFuY2VkXCIsIFwiZW5oYW5jZWRcIikpO1xyXG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiSWNvbnNcIiwgXCJpY29uc1wiKSk7XHJcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJEZWZhdWx0XCIsIFwiZGVmYXVsdFwiKSk7XHJcbiAgICBjb2xvclNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpO1xyXG4gICAgY29sb3JTZWxlY3Quc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XHJcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiaWNvbnNcIikge1xyXG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzFdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzJdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbG9yU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29sb3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID0gY29sb3JTZWxlY3Quc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvclNlbGVjdCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcclxuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtaW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIk1pbmltaXplIEhlYWRlcnMgYnkgRGVmYXVsdFwiKSk7XHJcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiTWluaW1pemVkIGNvbnRyYWN0IGFuZCBDWCBoZWFkZXJzIGJ5IGRlZmF1bHQuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgbWluTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgbWluTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIG1pbkRpdi5hcHBlbmRDaGlsZChtaW5MYWJlbCk7XHJcbiAgICBjb25zdCBtaW5DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG1pbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBtaW5DaGVja2JveC5jaGVja2VkID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibWluaW1pemVfYnlfZGVmYXVsdFwiXTtcclxuICAgIG1pbkRpdi5hcHBlbmRDaGlsZChtaW5DaGVja2JveCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG1pbkRpdik7XHJcbiAgICBtaW5DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIm1pbmltaXplX2J5X2RlZmF1bHRcIl0gPSBtaW5DaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYnVybkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGJ1cm5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkJ1cm4gU2V0dGluZ3NcIikpO1xyXG4gICAgYnVybkxhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJTZXQgdGhlIHRocmVzaG9sZHMgZm9yIHllbGxvdyBhbmQgcmVkIGNvbnN1bWFibGUgbGV2ZWxzIGluIGJ1cm4gdGlsZXMgKGluIGRheXMpLlwiLCBcInJpZ2h0XCIpKTtcclxuICAgIGJ1cm5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBidXJuTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoYnVybkxhYmVsKTtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdID0gWzMsIDddO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoc2V0RGl2KTtcclxuICAgIHNldERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHJlZERpdik7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJSZWQgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgcmVkSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByZWRJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHJlZEluLnZhbHVlID0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbM10pWzBdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQocmVkSW4pO1xyXG4gICAgcmVkSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICByZWRJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgcmVkSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl1bMF0gPSBwYXJzZUZsb2F0KHJlZEluLnZhbHVlKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB5ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHllbERpdik7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJZZWxsb3cgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgeWVsSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB5ZWxJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHllbEluLnZhbHVlID0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoeWVsSW4pO1xyXG4gICAgeWVsSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICB5ZWxJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgeWVsSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl1bMV0gPSBwYXJzZUZsb2F0KHllbEluLnZhbHVlKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJ1cm5EaXYpO1xyXG4gICAgY29uc3QgaG90a2V5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhvdGtleUhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxlZnQgU2lkZWJhciBCdXR0b25zXCIpKTtcclxuICAgIGhvdGtleUhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiQ3JlYXRlIGhvdGtleXMgb24gdGhlIGxlZnQgc2lkZWJhci4gVGhlIGZpcnN0IHZhbHVlIGlzIHdoYXQgd2lsbCBiZSBkaXNwbGF5ZWQsIHRoZSBzZWNvbmQgaXMgdGhlIGNvbW1hbmQuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgaG90a2V5SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SGVhZGVyKTtcclxuICAgIGNvbnN0IGhvdGtleUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SW5wdXREaXYpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICB9XHJcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdLmZvckVhY2goaG90a2V5ID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBtYWtlUHVzaEJ1dHRvbihcIitcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihbW10sIFtdXSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XHJcbiAgICAgICAgaWYgKGRpdiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhvdGtleUlucHV0RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGNvbnN0IHNjcmVlblVucGFja0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTY3JlZW4gVW5wYWNrIEV4Y2x1c2lvbnNcIikpO1xyXG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJMaXN0IHNjcmVlbnMgdG8gYmUgZXhjbHVkZWQgZnJvbSBzY3JlZW4gdW5wYWNrLiBTZXBhcmF0ZSBzY3JlZW5zIHdpdGggYSBjb21tYS5cIiwgXCJyaWdodFwiKSk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzY3JlZW5VbnBhY2tIZWFkZXIpO1xyXG4gICAgY29uc3Qgbm90aWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChub3RpZkRpdik7XHJcbiAgICBub3RpZkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkxpc3Qgc2NyZWVuIG5hbWVzIHNlcGFyYXRlZCBieSBjb21tYXMsIG5vIHNwYWNlcy5cIikpO1xyXG4gICAgY29uc3QgZXhjbHVzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0gPT0gdW5kZWZpbmVkID8gXCJcIiA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdLmpvaW4oXCIsXCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1bnBhY2tfZXhjZXB0aW9uc1wiXSA9IGV4Y2x1c2lvbklucHV0LnZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGV4Y2x1c2lvbklucHV0KTtcclxuICAgIGNvbnN0IG1vZHVsZVNldHRpbmdzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVG9nZ2xlIEZlYXR1cmVzXCIpKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJUb2dnbGUgZmVhdHVyZXMgb24gYW5kIG9mZi4gVGhlIHllbGxvdyBYIGNsZWFucyB1cCBhbnkgc3RyYXkgZWxlbWVudHMuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChtb2R1bGVTZXR0aW5nc0hlYWRlcik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG1vZHVsZXMuZm9yRWFjaChtcCA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlNpZGViYXJMaW5lLCBTdHlsZS5Gb250c1JlZ3VsYXIpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4obXAuZnJpZW5kbHlOYW1lKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHJpZ2h0LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgcmlnaHQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gbWFrZVRvZ2dsZUJ1dHRvbihcIk9uXCIsIFwiT2ZmXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbXAuZW5hYmxlZCA9ICFtcC5lbmFibGVkO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtcC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl1baV0gPT0gbXAubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtcC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0ucHVzaChtcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgIH0sIG1wLmVuYWJsZWQpO1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IFwiT2ZmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKHRvZ2dsZSk7XHJcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG1ha2VQdXNoQnV0dG9uKFwieFwiLCAoKSA9PiBtcC5tb2R1bGUuY2xlYW51cCh0cnVlKSk7XHJcbiAgICAgICAgY2xlYW51cC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiOHB4XCI7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoY2xlYW51cCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbXBvcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaW1wb3J0SGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW1wb3J0L0V4cG9ydCBTZXR0aW5nc1wiKSk7XHJcbiAgICBpbXBvcnRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChpbXBvcnRIZWFkZXIpO1xyXG4gICAgY29uc3QgaW1wb3J0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltcG9ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpbXBvcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkltcG9ydCBTZXR0aW5nc1wiO1xyXG4gICAgaW1wb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGltcG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgaW1wb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0QnV0dG9uKTtcclxuICAgIGNvbnN0IGltcG9ydEZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGltcG9ydEZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XHJcbiAgICBpbXBvcnRGaWxlSW5wdXQuYWNjZXB0ID0gXCIuanNvblwiO1xyXG4gICAgaW1wb3J0RmlsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChpbXBvcnRGaWxlSW5wdXQpO1xyXG4gICAgaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW1wb3J0RmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlcnJvclRleHRCb3ggPSBjcmVhdGVUZXh0U3BhbihcIkVycm9yIExvYWRpbmcgRmlsZSFcIik7XHJcbiAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGVycm9yVGV4dEJveCk7XHJcbiAgICBpbXBvcnRGaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlT3V0cHV0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhjbHVkZSA9IFtcInVzZXJuYW1lXCIsIFwiYXBpa2V5XCIsIFwid2ViYXBwaWRcIl07XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWxlT3V0cHV0KS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW2tleV0gPSBmaWxlT3V0cHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRXJyb3IgZW5jb3VudGVyZWQgcHJvY2Vzc2luZyBmaWxlIVwiKTtcclxuICAgICAgICAgICAgICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZXhwb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFeHBvcnQgU2V0dGluZ3NcIjtcclxuICAgIGV4cG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBleHBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGV4cG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGV4cG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGV4cG9ydEJ1dHRvbik7XHJcbiAgICBleHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuICAgICAgICBjb25zdCBleGNsdWRlID0gW1widXNlcm5hbWVcIiwgXCJhcGlrZXlcIiwgXCJ3ZWJhcHBpZFwiXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb3dubG9hZEZpbGUob3V0cHV0LCBcInBtbWctc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIik7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0RGl2KTtcclxuICAgIGNvbnN0IGltcG9ydE5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1wb3J0Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpbXBvcnROb3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJJbXBvcnQgTm90ZXNcIjtcclxuICAgIGltcG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGltcG9ydE5vdGVCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGltcG9ydE5vdGVEaXYuYXBwZW5kQ2hpbGQoaW1wb3J0Tm90ZUJ1dHRvbik7XHJcbiAgICBjb25zdCBpbXBvcnROb3RlRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XHJcbiAgICBpbXBvcnROb3RlRmlsZUlucHV0LmFjY2VwdCA9IFwiLmpzb25cIjtcclxuICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChpbXBvcnROb3RlRmlsZUlucHV0KTtcclxuICAgIGltcG9ydE5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbXBvcnROb3RlRmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlcnJvck5vdGVUZXh0Qm94ID0gY3JlYXRlVGV4dFNwYW4oXCJFcnJvciBMb2FkaW5nIEZpbGUhXCIpO1xyXG4gICAgZXJyb3JOb3RlVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbXBvcnROb3RlRGl2LmFwcGVuZENoaWxkKGVycm9yTm90ZVRleHRCb3gpO1xyXG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVPdXRwdXQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhmaWxlT3V0cHV0KTtcclxuICAgICAgICAgICAgICAgIGVycm9yTm90ZVRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBFcnJvciBlbmNvdW50ZXJlZCBwcm9jZXNzaW5nIGZpbGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JOb3RlVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBleHBvcnROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGV4cG9ydE5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkV4cG9ydCBOb3Rlc1wiO1xyXG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBleHBvcnROb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBleHBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChleHBvcnROb3RlQnV0dG9uKTtcclxuICAgIGV4cG9ydE5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIGRvd25sb2FkRmlsZSwgXCJwbW1nLW5vdGVzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydE5vdGVEaXYpO1xyXG4gICAgcmV0dXJuIFtwYXJhbWV0ZXJzLCBmdWxsQnVybiwgYnVyblNldHRpbmdzXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGZ1bGxEaXYpIHtcclxuICAgIGlmIChob3RrZXkubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkaXNwbGF5ZWRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGlzcGxheWVkVmFsdWUpO1xyXG4gICAgY29uc3QgY29tbWFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbW1hbmQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBjb21tYW5kLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbW1hbmQpO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gbWFrZVB1c2hCdXR0b24oXCJYXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwbGF5ZWRWYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheWVkVmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkaXYuY2hpbGRyZW4pLmZvckVhY2goZWxlbSA9PiB7IGRpdi5yZW1vdmVDaGlsZChlbGVtKTsgcmV0dXJuOyB9KTtcclxuICAgIH0sIFN0eWxlLkJ1dHRvbkRhbmdlcik7XHJcbiAgICByZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gaG90a2V5WzBdO1xyXG4gICAgY29tbWFuZC52YWx1ZSA9IGhvdGtleVsxXTtcclxuICAgIGRpc3BsYXllZFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IGhvdGtleXM7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29tbWFuZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob3RrZXlzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBob3RrZXlzLnB1c2goW29wdGlvbi5jaGlsZHJlblswXS52YWx1ZSwgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0gPSBob3RrZXlzO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVB1c2hCdXR0b24odGV4dCwgZiwgc3R5bGUgPSBTdHlsZS5CdXR0b25QcmltYXJ5KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5zdHlsZSk7XHJcbiAgICBidXR0b24ub25jbGljayA9IGY7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZnVuY3Rpb24gbWFrZVRvZ2dsZUJ1dHRvbihvbiwgb2ZmLCBmLCBzdGF0ZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBjb25zdCBzZXRMb29rID0gKHMpID0+IHtcclxuICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gcyA/IG9uIDogb2ZmO1xyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKHN0YXRlKSk7XHJcbiAgICBzZXRMb29rKHN0YXRlKTtcclxuICAgIHRvZ2dsZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gISh0b2dnbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKSA9PT0gXCJ0cnVlXCIpO1xyXG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFN0cmluZyhuZXdTdGF0ZSkpO1xyXG4gICAgICAgIHNldExvb2sobmV3U3RhdGUpO1xyXG4gICAgICAgIGYoKTtcclxuICAgIH07XHJcbiAgICB0b2dnbGUuc3R5bGUud2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHJldHVybiB0b2dnbGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL1NldHRpbmdzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkb3dubG9hZEZpbGUsIGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gRGVidWcodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgZG93bmxvYWRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZG93bmxvYWRCdXR0b25zKTtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0sIFwiRG93bmxvYWQgRnVsbCBTZXR0aW5nc1wiLCBcInBtbWctc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKGZ1bGxCdXJuW3Jlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdXSwgXCJEb3dubG9hZCBCdXJuXCIsIFwicG1tZy1idXJuXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihidXJuU2V0dGluZ3MsIFwiRG93bmxvYWQgQnVybiBTZXR0aW5nc1wiLCBcInBtbWctYnVybi1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XHJcbiAgICBjb25zdCBlbmRwb2ludExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVuZHBvaW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkdldCBGSU8gRW5kcG9pbnQgKGV4OiAvaW5mcmFzdHJ1Y3R1cmUvUHJveGlvbilcIjtcclxuICAgIGVuZHBvaW50TGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGVuZHBvaW50TGFiZWwuc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRMYWJlbCk7XHJcbiAgICBjb25zdCBlbmRwb2ludElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZW5kcG9pbnRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGVuZHBvaW50SW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludElucHV0KTtcclxuICAgIGNvbnN0IGVuZHBvaW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGVuZHBvaW50QnV0dG9uLnRleHRDb250ZW50ID0gXCJEb3dubG9hZCBGSU8gRW5kcG9pbnRcIjtcclxuICAgIGVuZHBvaW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGVuZHBvaW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgKGVuZHBvaW50SW5wdXQudmFsdWUuY2hhckF0KDApID09IFwiL1wiID8gXCJcIiA6IFwiL1wiKSArIGVuZHBvaW50SW5wdXQudmFsdWU7XHJcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBEZWJ1Z19wb3N0LCB1cmwsIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgbnVsbCk7XHJcbiAgICB9KTtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludEJ1dHRvbik7XHJcbiAgICByZXR1cm4gcGFyYW1ldGVycztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGVidWdfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGpzb25kYXRhKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXgpIHsgfVxyXG4gICAgZG93bmxvYWRGaWxlKGpzb25kYXRhLCBcImZpby1lbmRwb2ludFwiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gW3RpbGUsIHBhcmFtZXRlcnNdO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkQnV0dG9uKGRhdGEsIGJ1dHRvbk5hbWUsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgZG93bmxvYWRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgZG93bmxvYWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZG93bmxvYWRGaWxlKGRhdGEsIGZpbGVOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRvd25sb2FkQnV0dG9uO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9EZWJ1Zy50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxjdWxhdG9yKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2FsY0Rpdik7XHJcbiAgICB0aWxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1heEhlaWdodCA9IFwiNDAwcHhcIjtcclxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIG91dHB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgb3V0cHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIG91dHB1dC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1pbldpZHRoID0gXCIxODBweFwiO1xyXG4gICAgY29uc3QgaGlzdG9yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhpc3RvcnlEaXYpO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS53aWR0aCA9IFwiMzUlXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjE5NXB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCA0MCwgNDMpXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2IoNDMsNzIsOTApXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSBcInNvbGlkXCI7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBoaXN0b3J5RGl2LmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZSk7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgaGlzdG9yeVRhYmxlLmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBvdXRwdXQuc3R5bGUud2lkdGggPSBcIjkwJVwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChvdXRwdXQpO1xyXG4gICAgdmFyIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgdmFyIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICB2YXIgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICB2YXIgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgIHZhciBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgY29uc3Qga2V5cGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoa2V5cGFkKTtcclxuICAgIGtleXBhZC5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBrZXlwYWQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAga2V5cGFkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCg0LCAxZnIpXCI7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBbWzcsIG51bGxdLCBbOCwgbnVsbF0sIFs5LCBudWxsXSwgW1wiw7dcIiwgXCIjM2ZhMmRlXCJdLCBbNCwgbnVsbF0sIFs1LCBudWxsXSwgWzYsIG51bGxdLCBbXCJ4XCIsIFwiIzNmYTJkZVwiXSwgWzEsIG51bGxdLCBbMiwgbnVsbF0sIFszLCBudWxsXSwgW1wiLVwiLCBcIiMzZmEyZGVcIl0sIFswLCBudWxsXSwgW1wiLlwiLCBudWxsXSwgW1wiwrFcIiwgbnVsbF0sIFtcIitcIiwgXCIjM2ZhMmRlXCJdXTtcclxuICAgIGxheW91dC5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKG9wdFsxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXBhZC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAob3B0WzBdID09IFwiK1wiIHx8IG9wdFswXSA9PSBcIi1cIiB8fCBvcHRbMF0gPT0gXCJ4XCIgfHwgb3B0WzBdID09IFwiw7dcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG9wdFswXTtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0WzBdID09IFwiwrFcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCItXCIgKyBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gKG9wdFswXSA9PSAwID8gXCIwXCIgOiBvcHRbMF0gfHwgXCJcIikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcclxuICAgIGJvdHRvbURpdi5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBib3R0b21EaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCgyLCAxZnIpXCI7XHJcbiAgICBjb25zdCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY2xlYXIpO1xyXG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XHJcbiAgICBjbGVhci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICBjbGVhci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgY2xlYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE3LCA4MywgNzkpXCI7XHJcbiAgICBjbGVhci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBvdXRwdXQudmFsdWU7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkucmVtb3ZlQ2hpbGQoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbltoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5Lmluc2VydEJlZm9yZSh0ciwgaGlzdG9yeVRhYmxlQm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChlbnRlcik7XHJcbiAgICBlbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcclxuICAgIGVudGVyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgIGVudGVyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBlbnRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1Y2I4NWNcIjtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiIHx8IGUua2V5ID09PSBcIjJcIiB8fCBlLmtleSA9PT0gXCIzXCIgfHwgZS5rZXkgPT09IFwiNFwiIHx8IGUua2V5ID09PSBcIjVcIiB8fCBlLmtleSA9PT0gXCI2XCIgfHwgZS5rZXkgPT09IFwiN1wiIHx8IGUua2V5ID09PSBcIjhcIiB8fCBlLmtleSA9PT0gXCI5XCIgfHwgZS5rZXkgPT09IFwiMFwiIHx8IGUua2V5ID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSBlLmtleTtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiK1wiIHx8IGUua2V5ID09PSBcIi1cIiB8fCBlLmtleSA9PT0gXCJ4XCIgfHwgZS5rZXkgPT09IFwiKlwiIHx8IGUua2V5ID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IGUua2V5O1xyXG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiPVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKSB7XHJcbiAgICBjdXJyZW50U3RyaW5nID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiK1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSArIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiLVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAtIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwieFwiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIqXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlICogY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCLDt1wiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIvXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC8gY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9DYWxjdWxhdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCwgc2V0U2V0dGluZ3MgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVwYWlyc19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIFVzZXJuYW1lXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBBUEkgS2V5XCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV1bXCJQTU1HRXh0ZW5kZWRcIl0pIHtcclxuICAgICAgICBwYXJhbWV0ZXJzLnB1c2gocmVzdWx0KTtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgUmVwYWlyc19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zaXRlcy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gUmVwYWlyc19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV07XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmVwYWlyRGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVwYWlyRGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJBbGwgUmVwYWlyc1wiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRocmVzaG9sZERpdik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVGV4dCA9IGNyZWF0ZVRleHRTcGFuKFwiQWdlIFRocmVzaG9sZDpcIik7XHJcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdID8gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA6IFwiNzBcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcclxuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcclxuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiUGxhbmV0XCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1aWxkaW5ncyA9IFtdO1xyXG4gICAgICAgIHJlcGFpckRhdGEuZm9yRWFjaChzaXRlID0+IHtcclxuICAgICAgICAgICAgc2l0ZVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5ncy5wdXNoKFtzaXRlW1wiUGxhbmV0TmFtZVwiXSwgYnVpbGRdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGluZ3Muc29ydChnbG9iYWxCdWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPSB0aHJlc2hvbGRJbnB1dC52YWx1ZSB8fCBcIjcwXCI7XHJcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0gKyBcIiBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICB2YXIgc2l0ZURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2l0ZVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkgfHwgc2l0ZVtcIlBsYW5ldElkZW50aWZpZXJcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVEYXRhID0gc2l0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNpdGVEYXRhID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA/IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gOiBcIjcwXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkVGV4dCk7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICBjb25zdCBtYXRUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiU2hvcHBpbmcgQ2FydFwiKTtcclxuICAgICAgICBtYXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXRUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgbWF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdERpdik7XHJcbiAgICAgICAgY29uc3QgYnVpVGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkJ1aWxkaW5nc1wiKTtcclxuICAgICAgICBidWlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ1RvcCA9IFwiNXB4XCI7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChidWlUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICBmb3IgKGxldCB0IG9mIFtcIlRpY2tlclwiLCBcIkFnZVwiLCBcIkNvbmRpdGlvblwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLnNvcnQoYnVpbGRpbmdTb3J0KTtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPSB0aHJlc2hvbGRJbnB1dC52YWx1ZSB8fCBcIjcwXCI7XHJcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpIHtcclxuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xyXG4gICAgc2l0ZURhdGFbXCJCdWlsZGluZ3NcIl0uZm9yRWFjaChidWlsZGluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBpZiAobm9uUHJvZC5pbmNsdWRlcyhidWlsZGluZ1tcIkJ1aWxkaW5nVGlja2VyXCJdKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSAoYnVpbGRpbmdbXCJCdWlsZGluZ0xhc3RSZXBhaXJcIl0gfHwgYnVpbGRpbmdbXCJCdWlsZGluZ0NyZWF0ZWRcIl0pKSAvIDg2NDAwMDAwKTtcclxuICAgICAgICBpZiAoZGF0ZSA8IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRpbmdbXCJSZXBhaXJNYXRlcmlhbHNcIl0uZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpIHtcclxuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xyXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgaWYgKGRhdGUgPCBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkaW5nWzFdW1wiUmVwYWlyTWF0ZXJpYWxzXCJdLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSwgYnVpbGRpbmdbMF0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nWzFdW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkaW5nU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVtcIkNvbmRpdGlvblwiXSA+IGJbXCJDb25kaXRpb25cIl0gPyAxIDogLTE7XHJcbn1cclxuZnVuY3Rpb24gZ2xvYmFsQnVpbGRpbmdTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhWzFdW1wiQ29uZGl0aW9uXCJdID4gYlsxXVtcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvUmVwYWlycy50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBDaGF0X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENoYXRfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY2hhdC9kaXNwbGF5L1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENoYXRfcG9zdChjaGF0RGl2LCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNoYXREYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjaGF0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgY2hhdERpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBwYXJhbWV0ZXJzWzFdICsgXCIgR2xvYmFsIFNpdGUgT3duZXJzXCI7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICBjaGF0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNoYXREYXRhLmZvckVhY2goY2hhdCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmNsYXNzTGlzdC5hZGQoXCJjaGF0LWxpbmVcIik7XHJcbiAgICAgICAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TGluZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XHJcbiAgICAgICAgdGltZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XHJcbiAgICAgICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xyXG4gICAgICAgIHRpbWVEaXYuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZCh0aW1lRGF0ZURpdik7XHJcbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1uYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG4gICAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImNoYXQtbWVzc2FnZVwiKTtcclxuICAgICAgICBzd2l0Y2ggKGNoYXRbXCJNZXNzYWdlVHlwZVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0hBVFwiOlxyXG4gICAgICAgICAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiTWVzc2FnZVRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkpPSU5FRFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGpvaW5lZC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTEVGVFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGxlZnQuXCI7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0NoYXQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGNyZWF0ZVRleHRTcGFuLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgVGV4dENvbG9ycyB9IGZyb20gXCIuLi9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gRmluX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gKyBcIi9leGVjP21vZGU9JTIyZmluJTIyJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZpbl9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGaW5fcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBKU09OIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGlsZUhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIE92ZXJ2aWV3XCI7XHJcbiAgICB0aWxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJLZXkgRmlndXJlc1wiO1xyXG4gICAgdGlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0aWxlSGVhZGVyKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiRml4ZWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMl0pLnRvTG9jYWxlU3RyaW5nKCksIFwiQ3VycmVudCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs0XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJMaXF1aWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bN10pLnRvTG9jYWxlU3RyaW5nKCksIFwiRXF1aXR5XCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlhYmlsaXRpZXNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgY29uc3Qgbm93ID0gZGF0YVswXVswXTtcclxuICAgIHZhciB3ZWVrQWdvID0gLTE7XHJcbiAgICB2YXIgYmVzdEd1ZXNzID0gODY0MDAwMDAwMDA7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoTWF0aC5hYnMobm93IC0gZGF0YVtpXVswXSkgLSA3ICogODY0MDAwMDApIDwgYmVzdEd1ZXNzKSB7XHJcbiAgICAgICAgICAgIGJlc3RHdWVzcyA9IE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKTtcclxuICAgICAgICAgICAgd2Vla0FnbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdlZWtBZ28gIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBwcm9maXQgPSBNYXRoLnJvdW5kKGRhdGFbMF1bN10gLSBkYXRhW3dlZWtBZ29dWzddKTtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHByb2ZpdCA+IDAgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByb2ZpdC50b0xvY2FsZVN0cmluZygpLCBcIlByb2ZpdFwiLCBjb2xvcikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJlYWtkb3duSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRpdGxlID0gXCJGaW5hbmNpYWwgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkludmVudG9yeSBCcmVha2Rvd25cIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChicmVha2Rvd25IZWFkZXIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXCJOYW1lXCIsIFwiRml4ZWQgQXNzZXRzXCIsIFwiQ3VycmVudCBBc3NldHNcIiwgXCJUb3RhbCBBc3NldHNcIl07XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IGJyZWFrZG93biA9IEpTT04ucGFyc2UoZGF0YVswXVs4XSk7XHJcbiAgICBicmVha2Rvd24uc29ydChmaW5hbmNpYWxTb3J0KTtcclxuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgYnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBmaXJzdFRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3RUYWJsZUVsZW0pO1xyXG4gICAgICAgIGZpcnN0VGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJvd0RhdGFbMF0pKTtcclxuICAgICAgICByb3dEYXRhLnNoaWZ0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmluYW5jaWFsU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVszXSA8IGJbM10gPyAxIDogLTE7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0ZpbmFuY2VzLnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3Bhbiwgc2V0U2V0dGluZ3MsIENhdGVnb3J5U29ydCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgZ2V0R3JvdXBCdXJuLCBnZXRCdXJuIH0gZnJvbSBcIi4uL0JhY2tncm91bmRSdW5uZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEVuaGFuY2VkQnVybl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCByZWZyZXNoKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gQVBJIEtleSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcGlrZXkgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl07XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdO1xyXG4gICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICBmdWxsQnVyblt1c2VybmFtZV0gPSBbXTtcclxuICAgICAgICBnZXRCdXJuKGZ1bGxCdXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH1cclxuICAgIHZhciBidXJuO1xyXG4gICAgdmFyIHVubG9hZGVkID0gZmFsc2U7XHJcbiAgICB2YXIgcGxhbmV0O1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFyYW1ldGVycy5sZW5ndGggPj0gMyAmJiBwYXJhbWV0ZXJzWzFdLnRvTG93ZXJDYXNlKCkgPT0gXCJncm91cFwiKSB7XHJcbiAgICAgICAgaWYgKGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dICYmIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdW5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgIGdldEdyb3VwQnVybihmdWxsQnVybiwgcGFyYW1ldGVyc1syXSwgYXBpa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGJ1cm4gPSBmdWxsQnVyblt1c2VybmFtZV07XHJcbiAgICAgICAgICAgIHBsYW5ldCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJ1cm5TZXR0aW5nc1swXSA9PSBcImxvYWRpbmdcIiB8fCB1bmxvYWRlZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XHJcbiAgICAgICAgdGlsZS5pZCA9IFwicG1tZy1yZWxvYWRcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aWxlLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgdmFyIHNldHRpbmdzO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICB2YXIgZnVsbENvbW1hbmQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzWzNdKSB7XHJcbiAgICAgICAgICAgIGZ1bGxDb21tYW5kID0gcGFyYW1ldGVycy5qb2luKFwiIFwiKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5mb3JFYWNoKHBsYW5ldERhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1szXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoKHBsYW5ldERhdGEgJiYgcGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSkpIHx8IChwbGFuZXREYXRhICYmIHBsYW5ldERhdGFbXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b1VwcGVyQ2FzZSgpKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwbGFuZXREYXRhW1wiRXJyb3JcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIkludmVudG9yeVwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJPcmRlclByb2R1Y3Rpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuKTtcclxuICAgICAgICB2YXIgbGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZShwbGFuZXRCdXJuW1wiTGFzdFVwZGF0ZVwiXSArIFwiWlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHRpbmdzID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgUGxhbmV0IVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25zID0ge307XHJcbiAgICAgICAgdmFyIGludiA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJPcmRlclByb2R1Y3Rpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIkludmVudG9yeVwiXSkge1xyXG4gICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNjcmVlbk5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TY3JlZW5OYW1lKTtcclxuICAgIGNvbnN0IHNjcmVlbk5hbWUgPSBzY3JlZW5OYW1lRWxlbSA/IHNjcmVlbk5hbWVFbGVtLnRleHRDb250ZW50IDogXCJcIjtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdID0gW107XHJcbiAgICB9XHJcbiAgICB2YXIgc2V0dGluZ3NJbmRleCA9IEZpbmRCdXJuU2V0dGluZ3MocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLCBzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSk7XHJcbiAgICBjb25zdCBkaXNwU2V0dGluZ3MgPSBzZXR0aW5nc0luZGV4ID09IC0xID8gWzEsIDEsIDEsIDFdIDogcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBidWZmZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnVmZmVySGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVmZmVySGVhZGVyKTtcclxuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGJ1ZmZlckhlYWRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIlJFRFwiLCAyMi4wMjUsIGRpc3BTZXR0aW5nc1swXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1swXSA9IGRpc3BTZXR0aW5nc1swXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJZRUxMT1dcIiwgNDAuNDgzLCBkaXNwU2V0dGluZ3NbMV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMV0gPSBkaXNwU2V0dGluZ3NbMV0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiR1JFRU5cIiwgMzQuNjUsIGRpc3BTZXR0aW5nc1syXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1syXSA9IGRpc3BTZXR0aW5nc1syXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJJTkZcIiwgMTkuNiwgZGlzcFNldHRpbmdzWzNdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzNdID0gZGlzcFNldHRpbmdzWzNdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xyXG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBpZiAobGFzdFVwZGF0ZWQpIHtcclxuICAgICAgICBjb25zdCBsYXN0VXBkYXRlZFNwYW4gPSBjcmVhdGVUZXh0U3BhbihcIkxhc3QgVXBkYXRlZDogXCIgKyBsYXN0VXBkYXRlZC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IGRheTogXCJudW1lcmljXCIsIG1vbnRoOiBcIm51bWVyaWNcIiB9KSArIFwiIFwiICsgbGFzdFVwZGF0ZWQudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KSk7XHJcbiAgICAgICAgbGFzdFVwZGF0ZWRTcGFuLnN0eWxlLm1hcmdpbkxlZnQgPSBcImF1dG9cIjtcclxuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUuY29sb3IgPSBcInJnYigxNTMsIDE1MywgMTUzKVwiO1xyXG4gICAgICAgIGJ1ZmZlckhlYWRlci5hcHBlbmRDaGlsZChsYXN0VXBkYXRlZFNwYW4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOZWVkc1wiLCBcIlByb2R1Y3Rpb25cIiwgXCJJbnZcIiwgXCJBbXQuIE5lZWRlZFwiLCBcIkJ1cm5cIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBoZWFkUm93LmZpcnN0Q2hpbGQuY29sU3BhbiA9IDI7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICB2YXIgYnVybk1hdGVyaWFscyA9IE9iamVjdC5rZXlzKGNvbnMpO1xyXG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBidXJuTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgdmFyIGluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbXCJNYXRlcmlhbEV4Y2x1c2lvbnNcIl0uZm9yRWFjaCgobWF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihNYXRlcmlhbE5hbWVzW21hdGVyaWFsXVswXSk7XHJcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbnNDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc0NvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihjb25zW21hdGVyaWFsXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIgLyBEYXlcIikpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBpbnZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgaW52QW1vdW50ID0gaW52W21hdGVyaWFsXSA9PSB1bmRlZmluZWQgPyAwIDogaW52W21hdGVyaWFsXTtcclxuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW52Q29sdW1uKTtcclxuICAgICAgICBjb25zdCBidXJuID0gaW52QW1vdW50ID09IDAgPyAwIDogLWludkFtb3VudCAvIGNvbnNbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgYnVybkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbigoKGJ1cm4gPCA1MDAgJiYgY29uc1ttYXRlcmlhbF0gPCAwKSA/IE1hdGguZmxvb3IoYnVybikudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA6IFwi4oieXCIpICsgXCIgRGF5c1wiKSk7XHJcbiAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxdID49IDApIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1pbmZpbml0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMF0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSB7XHJcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkQW10ID0gYnVybiA+IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVsxXSB8fCBjb25zW21hdGVyaWFsXSA+IDAgPyAwIDogKGJ1cm4gLSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0pICogY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgbmVlZENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihuZWVkQW10LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmVlZENvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGJ1cm5Db2x1bW4pO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuIG1vZHVsZXM7XHJcbn1cclxuZnVuY3Rpb24gRmluZEJ1cm5TZXR0aW5ncyhhcnJheSwgbWF0Y2hTdHJpbmcpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWF0Y2hTdHJpbmcgPT0gYXJyYXlbaV1bMF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcbmZ1bmN0aW9uIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncykge1xyXG4gICAgQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbikuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1pbmZpbml0ZVwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbM10gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tZ3JlZW5cIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzJdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXllbGxvd1wiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMV0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1swXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc0J1dHRvbih0ZXh0LCB3aWR0aCwgdG9nZ2xlZCwgZikge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKHRvZ2dsZWQpIHtcclxuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NUZXh0KTtcclxuICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCdXR0b24pO1xyXG4gICAgYmFyLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBiYXIuc3R5bGUubWF4V2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGJhci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJhcik7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dEJveCk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodG9nZ2xlZCkge1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcclxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGYoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQnVybi50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRUYWJsZV9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSArIFwiL2V4ZWM/bW9kZT0lMjJcIiArIHBhcmFtZXRlcnNbMV0gKyBcIiUyMlwiO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdXJsICs9IFwiJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1syXSArIFwiJTIyXCI7XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIFNoZWV0VGFibGVfcG9zdCwgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gU2hlZXRUYWJsZV9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBkYXRhWzBdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgZGF0YS5zaGlmdCgpO1xyXG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9TaGVldFRhYmxlLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiwgWElUV2ViUmVxdWVzdCwgY3JlYXRlVGFibGUsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCwgY3JlYXRlVGV4dERpdiB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFRleHRDb2xvcnMgfSBmcm9tIFwiLi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgRmFjdGlvbkhlYWRlcnMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyYWN0c19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIFVzZXJuYW1lIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgQVBJIEtleSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENvbnRyYWN0c19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jb250cmFjdC9hbGxjb250cmFjdHMvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl1dLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENvbnRyYWN0c19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cmFjdERhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29udHJhY3REYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsaWRDb250cmFjdHMgPSBjb250cmFjdERhdGEuZmlsdGVyKGMgPT4gIWludmFsaWRDb250cmFjdFN0YXR1cy5pbmNsdWRlcyhjW1wiU3RhdHVzXCJdKSk7XHJcbiAgICAgICAgdmFsaWRDb250cmFjdHMubWFwKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICAgICAgY29udHJhY3RbXCJJc0ZhY3Rpb25cIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNlbGZDb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgIGxldCBwYXJ0bmVyQ29uZGl0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBjb250cmFjdC5Db25kaXRpb25zLm1hcCgoY29uZGl0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gXCJSRVBVVEFUSU9OXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RbXCJJc0ZhY3Rpb25cIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbltcIk1hdGVyaWFsVGlja2VyXCJdICE9PSBudWxsICYmIG1hdGVyaWFsRnVsZmlsbWVudFR5cGUuaW5jbHVkZXMoY29uZGl0aW9uW1wiVHlwZVwiXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0ucHVzaChjb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbltcIlBhcnR5XCJdID09PSBjb250cmFjdFtcIlBhcnR5XCJdKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZDb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyQ29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmQ29uZGl0aW9ucy5zb3J0KGNvbmRpdGlvblNvcnQpO1xyXG4gICAgICAgICAgICBwYXJ0bmVyQ29uZGl0aW9ucy5zb3J0KGNvbmRpdGlvblNvcnQpO1xyXG4gICAgICAgICAgICBjb250cmFjdC5Db25kaXRpb25zID0ge307XHJcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJzZWxmXCJdID0gc2VsZkNvbmRpdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJwYXJ0bmVyXCJdID0gcGFydG5lckNvbmRpdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFsaWRDb250cmFjdHMuc29ydChDb250cmFjdFNvcnQpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gY3JlYXRlVGFibGUodGlsZSwgW1wiQ29udHJhY3QgSURcIiwgXCJNYXRlcmlhbFwiLCBcIlBhcnRuZXIncyBDb25kaXRpb25zXCIsIFwiTXkgQ29uZGl0aW9uc1wiXSk7XHJcbiAgICAgICAgaWYgKHZhbGlkQ29udHJhY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVOb0NvbnRyYWN0c1Jvdyg0KTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbGlkQ29udHJhY3RzLmZvckVhY2goY29udHJhY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlQ29udHJhY3RSb3coY29udHJhY3QpO1xyXG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgaW52YWxpZENvbnRyYWN0U3RhdHVzID0gW1xyXG4gICAgXCJGVUxGSUxMRURcIixcclxuICAgIFwiQlJFQUNIRURcIixcclxuICAgIFwiVEVSTUlOQVRFRFwiLFxyXG4gICAgXCJDQU5DRUxMRURcIixcclxuICAgIFwiUkVKRUNURURcIlxyXG5dO1xyXG5mdW5jdGlvbiBjcmVhdGVDb250cmFjdFJvdyhjb250cmFjdCkge1xyXG4gICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGxldCBjb250cmFjdExpbmsgPSBjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xyXG4gICAgY29uc3QgY29udHJhY3RJZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGNvbnRyYWN0SWRDb2x1bW4uYXBwZW5kQ2hpbGQoY29udHJhY3RbXCJJc0ZhY3Rpb25cIl0gPyBmYWN0aW9uQ29udHJhY3QoY29udHJhY3RMaW5rKSA6IGNvbnRyYWN0TGluayk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29udHJhY3RJZENvbHVtbik7XHJcbiAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMTBweFwiO1xyXG4gICAgY29uc3QgbWF0ZXJpYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0ZXJpYWxEaXYpO1xyXG4gICAgaWYgKGNvbnRyYWN0W1wibWF0ZXJpYWxDb25kaXRpb25zXCJdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb250cmFjdFtcIm1hdGVyaWFsQ29uZGl0aW9uc1wiXS5mb3JFYWNoKG1hdGVyaWFsQ29uZGl0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxFbGVtZW50ID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsQ29uZGl0aW9uW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIFwicHJ1bi1yZW1vdmUtanNcIiwgbWF0ZXJpYWxDb25kaXRpb25bXCJNYXRlcmlhbEFtb3VudFwiXSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbEVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsRGl2LmFwcGVuZENoaWxkKG1hdGVyaWFsRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcm93LmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgIGNvbnN0IHBhcnRuZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICB2YXIgZmFjdGlvbjtcclxuICAgIGlmIChjb250cmFjdFtcIklzRmFjdGlvblwiXSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKEZhY3Rpb25IZWFkZXJzKS5mb3JFYWNoKGZhY3Rpb25OYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0uaW5jbHVkZXMoZmFjdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmYWN0aW9uID0gRmFjdGlvbkhlYWRlcnNbZmFjdGlvbk5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghZmFjdGlvbikge1xyXG4gICAgICAgIGxldCBwYXJ0bmVyTGluayA9IGNyZWF0ZUxpbmsoY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXSwgXCJDTyBcIiArIGNvbnRyYWN0W1wiUGFydG5lckNvbXBhbnlDb2RlXCJdKTtcclxuICAgICAgICBwYXJ0bmVyQ29sdW1uLmFwcGVuZENoaWxkKHBhcnRuZXJMaW5rKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBwYXJ0bmVyTGluayA9IGNyZWF0ZUxpbmsoY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXSwgXCJGQSBcIiArIGZhY3Rpb24pO1xyXG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY29uZGl0aW9uIG9mIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJwYXJ0bmVyXCJdKVxyXG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQoY29uZGl0aW9uU3RhdHVzKGNvbmRpdGlvbikpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHBhcnRuZXJDb2x1bW4pO1xyXG4gICAgY29uc3Qgc2VsZkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb250cmFjdC5Db25kaXRpb25zW1wic2VsZlwiXSlcclxuICAgICAgICBzZWxmQ29sdW1uLmFwcGVuZENoaWxkKGNvbmRpdGlvblN0YXR1cyhjb25kaXRpb24pKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChzZWxmQ29sdW1uKTtcclxuICAgIHJldHVybiByb3c7XHJcbn1cclxuO1xyXG5mdW5jdGlvbiBjcmVhdGVOb0NvbnRyYWN0c1Jvdyhjb2xzcGFuKSB7XHJcbiAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICB0ZXh0Q29sdW1uLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke2NvbHNwYW59YCk7XHJcbiAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBjb250cmFjdHNcIjtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XHJcbiAgICByZXR1cm4gbGluZTtcclxufVxyXG5mdW5jdGlvbiBjb25kaXRpb25Tb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uSW5kZXhcIl0gPiBiW1wiQ29uZGl0aW9uSW5kZXhcIl0gPyAxIDogLTE7XHJcbn1cclxuZnVuY3Rpb24gQ29udHJhY3RTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPiBiW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPyAxIDogLTE7XHJcbn1cclxuZnVuY3Rpb24gZmFjdGlvbkNvbnRyYWN0KGxpbmspIHtcclxuICAgIGxldCBjb25kaXRpb25EaXYgPSBjcmVhdGVUZXh0RGl2KFwiXCIpO1xyXG4gICAgbGV0IG1hcmtlciA9IGNyZWF0ZVRleHRTcGFuKFwiIOKYhVwiKTtcclxuICAgIG1hcmtlci5zdHlsZS5jb2xvciA9IFRleHRDb2xvcnMuWWVsbG93O1xyXG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIG1hcmtlci5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgIG1hcmtlci50aXRsZSA9IFwiRmFjdGlvbiBDb250cmFjdFwiO1xyXG4gICAgbGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgcmV0dXJuIGNvbmRpdGlvbkRpdjtcclxufVxyXG5mdW5jdGlvbiBjb25kaXRpb25TdGF0dXMoY29uZGl0aW9uKSB7XHJcbiAgICBsZXQgY29uZGl0aW9uRGl2ID0gY3JlYXRlVGV4dERpdihcIlwiKTtcclxuICAgIGxldCBtYXJrZXIgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgbWFya2VyLnN0eWxlLmNvbG9yID0gY29uZGl0aW9uW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIGxldCB0ZXh0ID0gY3JlYXRlVGV4dFNwYW4oYCAke2ZyaWVuZGx5Q29uZGl0aW9uVGV4dFtjb25kaXRpb24uVHlwZV19YCk7XHJcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQobWFya2VyKTtcclxuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJldHVybiBjb25kaXRpb25EaXY7XHJcbn1cclxuY29uc3QgZnJpZW5kbHlDb25kaXRpb25UZXh0ID0ge1xyXG4gICAgQ09NRVhfUFVSQ0hBU0VfUElDS1VQOiBcIk1hdGVyaWFsIFBpY2t1cFwiLFxyXG4gICAgREVMSVZFUlk6IFwiRGVsaXZlcnlcIixcclxuICAgIERFTElWRVJZX1NISVBNRU5UOiBcIkRlbGl2ZXIgU2hpcG1lbnRcIixcclxuICAgIEVYUExPUkFUSU9OOiBcIkV4cGxvcmF0aW9uXCIsXHJcbiAgICBSRVBVVEFUSU9OOiBcIlJlcHV0YXRpb25cIixcclxuICAgIFBBWU1FTlQ6IFwiUGF5bWVudFwiLFxyXG4gICAgUElDS1VQX1NISVBNRU5UOiBcIlBpY2t1cCBTaGlwbWVudFwiLFxyXG4gICAgUFJPVklTSU9OX1NISVBNRU5UOiBcIlByb3Zpc2lvblwiLFxyXG4gICAgUFJPVklTSU9OOiBcIlByb3Zpc2lvblwiXHJcbn07XHJcbmNvbnN0IG1hdGVyaWFsRnVsZmlsbWVudFR5cGUgPSBbXHJcbiAgICBcIkRFTElWRVJZXCIsXHJcbiAgICBcIkRFTElWRVJZX1NISVBNRU5UXCIsXHJcbiAgICBcIlBST1ZJU0lPTl9TSElQTUVOVFwiLFxyXG4gICAgXCJDT01FWF9QVVJDSEFTRV9QSUNLVVBcIlxyXG5dO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ29udHJhY3RzLnRzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBwcnVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xyXG4gICAgcHJ1bi53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcHJ1bi5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJ1bik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3NwZXJpdHlfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3Byb3NwZXJpdHktcHJ1bi5uZXRsaWZ5LmFwcC9cIjtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgdXJsICs9IFwiP2Zyb209XCIgKyBwYXJhbWV0ZXJzWzFdICsgXCImdG89XCIgKyBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgcHJvc3Auc3JjID0gdXJsO1xyXG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcHJvc3Auc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xyXG4gICAgXCJVRk9cIjogW1wiODU1NDg4MzA5ODAyMTcyNDY5XCIsIFwiODU1NDg5NzExNjM1NDMxNDc1XCJdLFxyXG4gICAgXCJGSU9DXCI6IFtcIjgwNzk5MjY0MDI0NzMwMDExNlwiLCBcIjgwODQ1MTUxMjM1MTE5NTE2NlwiXSxcclxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcclxuICAgIFwiUENUXCI6IFtcIjY2NzU1MTQzMzUwMzAxNDkyNFwiLCBcIjY2NzU1MTQzMzUwMzAxNDkyN1wiXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyYW1ldGVyc1sxXSArPSBcIl9cIiArIHBhcmFtZXRlcnNbaV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBzaGVldC5zcmMgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL2VkaXQ/dXNwPXNoYXJpbmdcIjtcclxuICAgIHNoZWV0LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHNoZWV0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNoZWV0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGlzY29yZF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciBzZXJ2ZXJJRDtcclxuICAgIHZhciBjaGFubmVsSUQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIGlmIChEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xyXG4gICAgICAgICAgICBjaGFubmVsSUQgPSBEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXVsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzZXJ2ZXJJRCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIGRpc2NvcmQuc3JjID0gXCJodHRwczovL2Uud2lkZ2V0Ym90LmlvL2NoYW5uZWxzL1wiICsgc2VydmVySUQgKyBcIi9cIiArIGNoYW5uZWxJRDtcclxuICAgIGRpc2NvcmQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBkaXNjb3JkLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGlzY29yZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL1dlYi50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgY3JlYXRlVGV4dFNwYW4sIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCwgY3JlYXRlTGluaywgWElUV2ViUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEZJT0ludl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgYXBpa2V5ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9nZXRBbGxTdG9yYWdlcywgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvYXV0aC9ncm91cC9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAzOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzWzJdICs9IFwiIFwiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc3RvcmFnZS9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9cIiArIHBhcmFtZXRlcnNbMl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpbnZlbnRvcnlEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWludmVudG9yeURhdGEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XHJcbiAgICBjb25zdCB2b2x1bWVUb3RhbCA9IGludmVudG9yeURhdGFbXCJWb2x1bWVDYXBhY2l0eVwiXTtcclxuICAgIGNvbnN0IHdlaWdodFVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0TG9hZFwiXTtcclxuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW52LWhlYWRlclwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcclxuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzJdLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgY29uc3QgdXNlckVsZW0gPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdLCB0YWcpO1xyXG4gICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcclxuICAgIGNvbnN0IHZvbHVtZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB2b2x1bWVCYXIuaWQgPSBcInZvbHVtZS1iYXJcIjtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgdm9sdW1lQmFyLnZhbHVlID0gdm9sdW1lVXNlZCAvIHZvbHVtZVRvdGFsO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB2b2x1bWVUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBtwrNcIiwgdGFnKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodm9sdW1lTGluZSk7XHJcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlaWdodExpbmUuaWQgPSBcIndlaWdodC1saW5lXCI7XHJcbiAgICB3ZWlnaHRMaW5lLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA4cHhcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJXZWlnaHQgXCIsIHRhZykpO1xyXG4gICAgY29uc3Qgd2VpZ2h0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xyXG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1iYXJcIik7XHJcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcclxuICAgIHdlaWdodEJhci52YWx1ZSA9IHdlaWdodFVzZWQgLyB3ZWlnaHRUb3RhbDtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQod2VpZ2h0QmFyKTtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWlnaHRMaW5lKTtcclxuICAgIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0uc29ydChmaW9NYXRzQWxwaGFiZXRTb3J0KTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIHRhZywgaXRlbVtcIk1hdGVyaWFsQW1vdW50XCJdLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0KSB7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRklPSW52X2dldEFsbFN0b3JhZ2VzKHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB2YXIgdXNlckpTT047XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHVzZXJKU09OID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEgZnJvbSBGSU8hXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgdXNlcm5hbWVzID0gW107XHJcbiAgICB1c2VySlNPTltcIkdyb3VwVXNlcnNcIl0uZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICB1c2VybmFtZXMucHVzaCh1c2VyW1wiR3JvdXBVc2VyTmFtZVwiXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfYWxsRGlzcGxheSwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvZmlvd2ViL2dyb3VwaHViXCIsIFwiUE9TVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHBhcmFtZXRlcnNbMl1dLCBKU09OLnN0cmluZ2lmeSh1c2VybmFtZXMpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfYWxsRGlzcGxheSh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIGdyb3VwRGF0YSA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncm91cERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbM10gKyBcIiBJbnZlbnRvcmllc1wiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5RGl2KTtcclxuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XHJcbiAgICBpZiAoZ3JvdXBEYXRhW1wiUGxheWVyTW9kZWxzXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0uZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcclxuICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGxheWVyW1wiVXNlck5hbWVcIl0pKTtcclxuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgcGxheWVyW1wiTG9jYXRpb25zXCJdLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhsb2NhdGlvbltcIkxvY2F0aW9uTmFtZVwiXSwgXCJYSVQgSU5WX1wiICsgcGxheWVyW1wiVXNlck5hbWVcIl0gKyBcIl9cIiArIGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLnJlcGxhY2UoLyAvLCBcIl9cIikpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvZHlEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xyXG4gICAgaWYgKCFhW1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgIWJbXCJNYXRlcmlhbFRpY2tlclwiXSB8fCAhTWF0ZXJpYWxOYW1lc1thW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIHx8ICFNYXRlcmlhbE5hbWVzW2JbXCJNYXRlcmlhbFRpY2tlclwiXV0pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChNYXRlcmlhbE5hbWVzW2FbXCJNYXRlcmlhbFRpY2tlclwiXV1bMV0gPT0gTWF0ZXJpYWxOYW1lc1tiW1wiTWF0ZXJpYWxUaWNrZXJcIl1dWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuIGFbXCJNYXRlcmlhbFRpY2tlclwiXS5sb2NhbGVDb21wYXJlKGJbXCJNYXRlcmlhbFRpY2tlclwiXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxOYW1lc1thW1wiTWF0ZXJpYWxUaWNrZXJcIl1dWzFdLmxvY2FsZUNvbXBhcmUoTWF0ZXJpYWxOYW1lc1tiW1wiTWF0ZXJpYWxUaWNrZXJcIl1dWzFdKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvSW52ZW50b3J5LnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IENIRUNLX0lORElDQVRPUiB9IGZyb20gXCIuL0NoZWNrbGlzdHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGVzKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZ2VuZXJhdGVOb3Rlc1RhYmxlLCB0aWxlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBub3RlTmFtZTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgICAgIGNvbnN0IHRleHRib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRleHRib3hXcmFwcGVyKTtcclxuICAgICAgICBjb25zdCB0ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRleHRib3hXcmFwcGVyLmFwcGVuZENoaWxkKHRleHRib3gpO1xyXG4gICAgICAgIHRleHRib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy13cmFwcGVyXCIpO1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZGlzcFN0b3JlZE5vdGUsIFtub3RlTmFtZSwgdGV4dGJveF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlTm90ZXNUYWJsZShyZXN1bHQsIHRpbGUpIHtcclxuICAgIGlmICghdGlsZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5hbWVcIiwgXCJMZW5ndGhcIiwgXCJEZWxldGVcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBjb25zdCBuYW1lcyA9IEFycmF5LmZyb20oT2JqZWN0LmtleXMocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkpO1xyXG4gICAgdmFyIGFueU5vdGVzID0gZmFsc2U7XHJcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCA3KSA9PSBDSEVDS19JTkRJQ0FUT1IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbnlOb3RlcyA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxlbmd0aENvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbHVtbik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIG5hbWVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhuYW1lLCBcIlhJVCBOT1RFU19cIiArIG5hbWUpKTtcclxuICAgICAgICBsZW5ndGhDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKSArIFwiIENoYXJhY3RlclwiICsgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbmFtZV0ubGVuZ3RoID09IDEgPyBcIlwiIDogXCJzXCIpKSk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcclxuICAgICAgICBkZWxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVOb3RlLCBbbmFtZSwgXCJcIl0pO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIWFueU5vdGVzKSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSAzO1xyXG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIE5vdGVzXCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVRoZW5TdG9yZU5vdGUocmVzdWx0LCBwYXJhbXMpIHtcclxuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3RlTmFtZSA9IHBhcmFtc1swXTtcclxuICAgIGNvbnN0IG5vdGVUZXh0ID0gcGFyYW1zWzFdO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtub3RlTmFtZV0gPSBub3RlVGV4dC5sZW5ndGggPT0gMCA/IHVuZGVmaW5lZCA6IG5vdGVUZXh0O1xyXG4gICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBkaXNwU3RvcmVkTm90ZShyZXN1bHQsIHBhcmFtcykge1xyXG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSB8fCAhcGFyYW1zWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBwYXJhbXNbMF07XHJcbiAgICBjb25zdCB0ZXh0Ym94ID0gcGFyYW1zWzFdO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbm90ZU5hbWVdKSB7XHJcbiAgICAgICAgdGV4dGJveC52YWx1ZSA9IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbm90ZU5hbWVdO1xyXG4gICAgfVxyXG4gICAgdGV4dGJveC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlTm90ZSwgW25vdGVOYW1lLCB0ZXh0Ym94LnZhbHVlIHx8IFwiXCJdKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Ob3Rlcy50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgY3JlYXRlVGV4dFNwYW4sIHNldFNldHRpbmdzLCBtYWtlUG9wdXBTcGFjZXIsIGNyZWF0ZVBvcHVwSW5wdXRSb3csIGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3csIGdldFZhbHVlT2ZQb3B1cFJvdywgZ2V0Q2hlY2tPZlBvcHVwUm93LCBjcmVhdGVTbWFsbEJ1dHRvbiB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0KHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmICghcGFyYW1ldGVyc1sxXSkge1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJBZGQgYSBwbGFuZXQgbmFtZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kIVwiKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiQWJicmV2aWF0aW9uXCIsIFwiQ2F0ZWdvcmllc1wiLCBcIk1vZGlmeVwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBOZXdcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3JlYXRlQWRkSW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycyk7XHJcbiAgICB9KTtcclxuICAgIHZhciBpc1NvcnRpbmcgPSBmYWxzZTtcclxuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uZm9yRWFjaChzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nc1swXSB8fCAhc2V0dGluZ3NbMV0gfHwgIXNldHRpbmdzWzJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNldHRpbmdzWzFdLnRvVXBwZXJDYXNlKCkgIT0gcGFyYW1ldGVyc1sxXS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNTb3J0aW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBjYXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgbW9kaWZ5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2F0Q29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobW9kaWZ5Q29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihzZXR0aW5nc1swXSkpO1xyXG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gXCJcIjtcclxuICAgICAgICBzZXR0aW5nc1syXS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjYXRlZ29yeVswXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgKz0gY2F0ZWdvcnlbMF0gKyBcIiwgXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgY2F0Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNhdGVnb3JpZXMpKTtcclxuICAgICAgICBtb2RpZnlDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlU21hbGxCdXR0b24oXCJlZGl0XCIsIGNyZWF0ZUFkZEludGVyZmFjZSwgW3RpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgc2V0dGluZ3NdKSk7XHJcbiAgICAgICAgbW9kaWZ5Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVNtYWxsQnV0dG9uKFwiZGVsZXRlXCIsIGZ1bmN0aW9uIChyZXN1bHQsIHJvdywgc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXVtpXSA9PSBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtyZXN1bHQsIHJvdywgc2V0dGluZ3NdKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIWlzU29ydGluZykge1xyXG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMztcclxuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBTb3J0aW5nIE9wdGlvbnNcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQWRkSW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgc2V0dGluZ3MgPSBbXSkge1xyXG4gICAgY29uc3QgcHJlZmlsbGVkID0gc2V0dGluZ3MubGVuZ3RoICE9IDA7XHJcbiAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XHJcbiAgICBjb25zdCBncmV5U3RyaXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcclxuICAgIG92ZXJsYXBEaXYuYXBwZW5kQ2hpbGQoZ3JleVN0cmlwZXMpO1xyXG4gICAgdGlsZS5pbnNlcnRCZWZvcmUob3ZlcmxhcERpdiwgdGlsZS5maXJzdENoaWxkKTtcclxuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbiAgICBjb25zdCBhZGRJbnRlcmZhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZEludGVyZmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5DZW50ZXJJbnRlcmZhY2UpO1xyXG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XHJcbiAgICBjb25zdCBhZGRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJOTE9ySDdoRjVmYktJZXNxVzN1U2tBPT1cIik7XHJcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XHJcbiAgICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYWRkSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU29ydGluZyBPcHRpb25zIEVkaXRvclwiKSk7XHJcbiAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGFkZEhlYWRlcik7XHJcbiAgICBhZGRIZWFkZXIuc3R5bGUubWFyZ2luID0gXCIwLjVlbSAwIDAuNWVtXCI7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkFiYnJldmlhdGlvblwiLCBwcmVmaWxsZWQgPyBzZXR0aW5nc1swXSA6IFwiXCIsIFwiVGhlIGFiYnJldmlhdGlvbiBzaG93aW5nIGF0IHRoZSB0b3Agb2YgdGhlIGludmVudG9yeSAoQUJDLCBDQVQsIGV0Yy4pXCIpKTtcclxuICAgIGlmIChwcmVmaWxsZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldHRpbmdzWzJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgKGkgKyAxKSArIFwiIE5hbWVcIiwgcHJlZmlsbGVkID8gc2V0dGluZ3NbMl1baV1bMF0gOiBcIlwiLCBpID09IDAgPyBcIlRoZSBuYW1lIG9mIHRoZSBmaXJzdCBjYXRlZ29yeSBmb3IgbWF0ZXJpYWxzXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgKGkgKyAxKSArIFwiIE1BVHNcIiwgcHJlZmlsbGVkID8gc2V0dGluZ3NbMl1baV1bMV0uam9pbihcIiwgXCIpIDogXCJcIiwgaSA9PSAwID8gXCJBIGxpc3Qgb2YgbWF0ZXJpYWxzIGluIHRoZSBmaXJzdCBjYXRlZ29yeS4gU2VwYXJhdGUgdGlja2VycyBieSBhIGNvbW1hLiAoUkFULCBEVywgZXRjLilcIiA6IFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSAxIE5hbWVcIiwgXCJcIiwgXCJUaGUgbmFtZSBvZiB0aGUgZmlyc3QgY2F0ZWdvcnkgZm9yIG1hdGVyaWFscy5cIikpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IDEgTUFUc1wiLCBcIlwiLCBcIkEgbGlzdCBvZiBtYXRlcmlhbHMgaW4gdGhlIGZpcnN0IGNhdGVnb3J5LiBTZXBhcmF0ZSB0aWNrZXJzIGJ5IGEgY29tbWEuIChSQVQsIERXLCBldGMuKVwiKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRSb3cpO1xyXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIENhdGVnb3J5XCI7XHJcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xyXG4gICAgYWRkUm93LmFwcGVuZENoaWxkKGFkZExhYmVsKTtcclxuICAgIGNvbnN0IGFkZElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZElucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XHJcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkSW5wdXREaXYpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIENBVEVHT1JZXCI7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBhZGRJbnB1dERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY2F0TnVtYmVyID0gKGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMykgLyAyO1xyXG4gICAgICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSBcIiArIGNhdE51bWJlciArIFwiIE5hbWVcIiksIGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSA0XSk7XHJcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgY2F0TnVtYmVyICsgXCIgTUFUc1wiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDRdKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnVyblJvdyA9IGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3coXCJCdXJuIFNvcnRpbmdcIiwgc2V0dGluZ3NbM10gfHwgZmFsc2UsIFwiQWRkIGJ1cm4gc29ydGluZyBhcyBhIHNlY29uZGFyeSBzb3J0aW5nIG1ldGhvZC4gQnVybiBjYXRlZ29yaWVzIHdpbGwgc2hvdyB1bmRlciB0aGUgY2F0ZWdvcmllcyBkZWZpbmVkIGFib3ZlLlwiKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnVyblJvdyk7XHJcbiAgICBjb25zdCB6ZXJvUm93ID0gY3JlYXRlUG9wdXBDaGVja2JveFJvdyhcIlNob3cgWmVyb3NcIiwgc2V0dGluZ3NbNF0gfHwgZmFsc2UsIFwiU2hvdyBpdGVtIGljb25zIHRoYXQgaGF2ZSB6ZXJvIHF1YW50aXR5LlwiKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoemVyb1Jvdyk7XHJcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVSb3cpO1xyXG4gICAgY29uc3Qgc2F2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgc2F2ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDTURcIjtcclxuICAgIHNhdmVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xyXG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlTGFiZWwpO1xyXG4gICAgY29uc3Qgc2F2ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNhdmVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xyXG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlSW5wdXREaXYpO1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIHNhdmVJbnB1dERpdi5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpdGVtQWJicmV2aWF0aW9uID0gZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGluZ0luZm8gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gNDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghZm9ybS5jaGlsZHJlbltpXSB8fCAhZm9ybS5jaGlsZHJlbltpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpXSkgPT0gXCJcIiB8fCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvcnRpbmdJbmZvLnB1c2goW2dldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSwgZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baSArIDFdKS5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xyXG4gICAgICAgIGlmICghaXRlbUFiYnJldmlhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVmaWxsZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXVtpXSA9PSBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl1baV0gPSBbaXRlbUFiYnJldmlhdGlvbiwgcGFyYW1ldGVyc1sxXSwgc29ydGluZ0luZm8sIGdldENoZWNrT2ZQb3B1cFJvdyhidXJuUm93KSwgZ2V0Q2hlY2tPZlBvcHVwUm93KHplcm9Sb3cpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5wdXNoKFtpdGVtQWJicmV2aWF0aW9uLCBwYXJhbWV0ZXJzWzFdLCBzb3J0aW5nSW5mbywgZ2V0Q2hlY2tPZlBvcHVwUm93KGJ1cm5Sb3cpLCBnZXRDaGVja09mUG9wdXBSb3coemVyb1JvdyldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICBTb3J0KHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlUG9wdXBTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Tb3J0LnRzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiwgbWFrZVBvcHVwU3BhY2VyLCBjcmVhdGVQb3B1cElucHV0Um93LCBnZXRWYWx1ZU9mUG9wdXBSb3cgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tbWFuZExpc3RzKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTGlzdHNcIiwgZ2VuZXJhdGVMaXN0VGFibGUsIHRpbGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1MaXN0c1wiLCBkaXNwU3RvcmVkTGlzdCwgW3RpbGUsIHBhcmFtZXRlcnNdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RUYWJsZShyZXN1bHQsIHRpbGUpIHtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5hbWVcIiwgXCJMZW5ndGhcIiwgXCJEZWxldGVcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTGlzdHNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYW1lcyA9IEFycmF5LmZyb20oT2JqZWN0LmtleXMocmVzdWx0W1wiUE1NRy1MaXN0c1wiXSkpO1xyXG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBsZW5ndGhDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGVuZ3RoQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKG5hbWUsIFwiWElUIExJU1RfXCIgKyBuYW1lKSk7XHJcbiAgICAgICAgbGVuZ3RoQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbmFtZV0ubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCkpKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgIGRlbGV0ZUNvbHVtbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChuYW1lcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMztcclxuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBDb21tYW5kIExpc3RzLlwiO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBkaXNwU3RvcmVkTGlzdChyZXN1bHQsIHBhcmFtKSB7XHJcbiAgICBjb25zdCB0aWxlID0gcGFyYW1bMF07XHJcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1bMV07XHJcbiAgICBjb25zdCBsaXN0TmFtZSA9IChwYXJhbWV0ZXJzLnNsaWNlKDEpKS5qb2luKFwiX1wiKTtcclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbGlzdE5hbWU7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiXCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdICYmIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXS5mb3JFYWNoKGxpbmtJbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsaW5rSW5mb1swXSB8fCAhbGlua0luZm9bMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGV4dENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxpbmtJbmZvWzBdLCBsaW5rSW5mb1sxXSkpO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDE7XHJcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gQ29tbWFuZHMuXCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IFwiNXB4XCI7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjcmVhdGVFZGl0SW50ZXJmYWNlKHRpbGUsIHJlc3VsdCwgcGFyYW1ldGVycywgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0gfHwgW10pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnRlcmZhY2UodGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzLCBzZXR0aW5ncyA9IFtdKSB7XHJcbiAgICBjb25zdCBwcmVmaWxsZWQgPSBzZXR0aW5ncy5sZW5ndGggIT0gMDtcclxuICAgIGNvbnN0IGxpc3ROYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xyXG4gICAgY29uc3Qgb3ZlcmxhcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdmVybGFwRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuT3ZlcmxhcHBpbmdEaXYpO1xyXG4gICAgY29uc3QgZ3JleVN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ3JleVN0cmlwZXMuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5HcmV5U3RyaXBlcyk7XHJcbiAgICBvdmVybGFwRGl2LmFwcGVuZENoaWxkKGdyZXlTdHJpcGVzKTtcclxuICAgIHRpbGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXBEaXYsIHRpbGUuZmlyc3RDaGlsZCk7XHJcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlUG9wdXBTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xyXG4gICAgY29uc3QgYWRkSW50ZXJmYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQ2VudGVySW50ZXJmYWNlKTtcclxuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZVdyYXBwZXIpO1xyXG4gICAgY29uc3QgYWRkSW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZEludGVyZmFjZS5jbGFzc0xpc3QuYWRkKFwiTkxPckg3aEY1ZmJLSWVzcVczdVNrQT09XCIpO1xyXG4gICAgYWRkSW50ZXJmYWNlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2UpO1xyXG4gICAgY29uc3QgYWRkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGFkZEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbW1hbmQgTGlzdCBFZGl0b3JcIikpO1xyXG4gICAgYWRkSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xyXG4gICAgYWRkSGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBpZiAocHJlZmlsbGVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXR0aW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIFwiICsgKGkgKyAxKSArIFwiIExhYmVsXCIsIHNldHRpbmdzW2ldWzBdLCBpID09IDAgPyBcIlRoZSBsYWJlbCBvZiB0aGUgZmlyc3QgbGluay5cIiA6IFwiXCIpKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayBcIiArIChpICsgMSkgKyBcIiBDb21tYW5kXCIsIHNldHRpbmdzW2ldWzFdLCBpID09IDAgPyBcIlRoZSBjb21tYW5kIG9wZW5lZCBieSB0aGUgZmlyc3QgbGluayAoZXg6IENYIE5DMSlcIiA6IFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIDEgTGFiZWxcIiwgXCJcIiwgXCJUaGUgbGFiZWwgb2YgdGhlIGZpcnN0IGxpbmsuXCIpKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIDEgQ29tbWFuZFwiLCBcIlwiLCBcIlRoZSBjb21tYW5kIG9wZW5lZCBieSB0aGUgZmlyc3QgbGluayAoZXg6IENYIE5DMSlcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZFJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkUm93KTtcclxuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBMaW5rXCI7XHJcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xyXG4gICAgYWRkUm93LmFwcGVuZENoaWxkKGFkZExhYmVsKTtcclxuICAgIGNvbnN0IGFkZElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZElucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XHJcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkSW5wdXREaXYpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIExJTktcIjtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGFkZElucHV0RGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjYXROdW1iZXIgPSAoZm9ybS5jaGlsZHJlbi5sZW5ndGgpIC8gMjtcclxuICAgICAgICBmb3JtLmluc2VydEJlZm9yZShjcmVhdGVQb3B1cElucHV0Um93KFwiTGluayBcIiArIGNhdE51bWJlciArIFwiIExhYmVsXCIpLCBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMl0pO1xyXG4gICAgICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIFwiICsgY2F0TnVtYmVyICsgXCIgQ29tbWFuZFwiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDJdKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2F2ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcclxuICAgIGNvbnN0IHNhdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHNhdmVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ01EXCI7XHJcbiAgICBzYXZlTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcclxuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUxhYmVsKTtcclxuICAgIGNvbnN0IHNhdmVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzYXZlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcclxuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUlucHV0RGl2KTtcclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xyXG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBzYXZlSW5wdXREaXYuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZEluZm8gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMjsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghZm9ybS5jaGlsZHJlbltpXSB8fCAhZm9ybS5jaGlsZHJlbltpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpXSkgPT0gXCJcIiB8fCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbW1hbmRJbmZvLnB1c2goW2dldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSwgZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baSArIDFdKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdID0gY29tbWFuZEluZm87XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICBDb21tYW5kTGlzdHModGlsZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlUG9wdXBTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Db21tYW5kTGlzdHMudHNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9FVEEsIHBhcnNlRHVyYXRpb24sIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIE9yZGVyRVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItb3JkZXItZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmJlYXV0aWZ5T3JkZXJzKCk7XHJcbiAgICB9XHJcbiAgICBiZWF1dGlmeU9yZGVycygpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWUpKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHF1ZXVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZFNsb3RzID0gQXJyYXkuZnJvbShxdWV1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHZhciBpblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBsaW5lVGltZXMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gMDtcclxuICAgICAgICAgICAgcHJvZFNsb3RzLmZvckVhY2gocHJvZEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2RJdGVtLmNsYXNzTGlzdC5jb250YWlucyhTZWxlY3Rvci5Qcm9kSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5UaW1lID0gbGluZVRpbWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVsYXBzZWQgKz0gbWluVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzID0gbGluZVRpbWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlIC0gbWluVGltZTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24ocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnB1c2goZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihkdXJhdGlvbiArIHRpbWVFbGFwc2VkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24gKyB0aW1lRWxhcHNlZCl9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24ocHJvZEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnB1c2goZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihkdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uKX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdWV1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL09yZGVyRVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcGFyc2VCYXNlTmFtZSwgZmluZEJ1cm5BbW91bnQsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBmaW5kSW52ZW50b3J5QW1vdW50LCBjcmVhdGVUZXh0U3BhbiwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc3VtYWJsZVRpbWVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYnVybiwgdGhyZXNob2xkcykge1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkcyA9IHRocmVzaG9sZHM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBpZiAodGhpcy5idXJuW3RoaXMudXNlcm5hbWVdID09IHVuZGVmaW5lZCB8fCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIldGXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCdXJucyhidWZmZXIsIHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXSwgdGhpcy50aHJlc2hvbGRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQnVybnMoYnVmZmVyLCBidXJuLCB0aHJlc2hvbGRzKSB7XHJcbiAgICBpZiAoYnVmZmVyLmNsYXNzTGlzdC5jb250YWlucyhcInBiLWxvYWRlZFwiKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZSk7XHJcbiAgICBpZiAoIW5hbWVFbGVtIHx8ICFuYW1lRWxlbS50ZXh0Q29udGVudClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCBuYW1lID0gcGFyc2VCYXNlTmFtZShuYW1lRWxlbS50ZXh0Q29udGVudCk7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGhlYWQgPiB0clwiKSk7XHJcbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEhlYWRlciA9IGhlYWRlci5jaGlsZHJlblsyXTtcclxuICAgICAgICBjb25zdCBidXJuSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgIGlmIChidXJuSGVhZGVyLmNoaWxkcmVuICE9IHVuZGVmaW5lZCAmJiBidXJuSGVhZGVyLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXJuSGVhZGVyLnJlbW92ZUNoaWxkKGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXJuSGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJuXCI7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChuYW1lLCBidXJuKTtcclxuICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldFJvdy5jaGlsZEVsZW1lbnRDb3VudCA8IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzRdO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnZlbnRvcnlBbW91bnQgPSBmaW5kSW52ZW50b3J5QW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBidXJuQW1vdW50ID0gZmluZEJ1cm5BbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xyXG4gICAgICAgICAgICBpZiAoYnVybkFtb3VudCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoaW52ZW50b3J5QW1vdW50IC8gYnVybkFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXJlZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzTGVmdCA8PSB0aHJlc2hvbGRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWdyZWVuXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdC50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheXNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IG91dHB1dERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXREYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGRheXNMZWZ0KSk7XHJcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSB0b3RhbERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxEYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihidXJuQW1vdW50ID09IDAgPyBcIlwiIDogYnVybkFtb3VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidWZmZXIuY2xhc3NMaXN0LmFkZChcInBiLWxvYWRlZFwiKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxlZXRFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1mbHQtZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkZMVFwiKTtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGFEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzddO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV0YURhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV0YURhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtldGF9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxlZXRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscywgQ3VycmVuY3lTeW1ib2xzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUG9zdExNIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaWNlcykge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcG9zdC1sbS1wcmljZVwiO1xyXG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhbnVwc1tpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNUG9zdEZvcm0pKS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJTdGF0aWNJbnB1dF9fc3RhdGljX19fVnBuMXUwbiBmb3Jtc19fc3RhdGljX19fYTRiaURpNFwiKSk7XHJcbiAgICAgICAgICAgIHZhciBzaGlwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRleHRDb250ZW50ID09IFwiU0hJUFBJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb21tb2RpdHkgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ29tbW9kaXR5J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdBbW91bnQnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUHJpY2VJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdUb3RhbCBwcmljZSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDdXJyZW5jeSddXS8vc2VsZWN0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IGNyZWF0ZVRleHRTcGFuKFwiLS1cIiwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmcgJiYgY29tbW9kaXR5LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0SW5mbyA9IE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0SW5mbyA9PSB1bmRlZmluZWQgfHwgbWF0SW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdCA9IG1hdEluZm9bMV0gPj0gbWF0SW5mb1syXSA/IFwidFwiIDogXCJtwrNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHR2b2x1bWUgPSBNYXRoLm1heChtYXRJbmZvWzFdLCBtYXRJbmZvWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4od2VpZ2h0dm9sdW1lKSB8fCBpc05hTih0b3RhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIi0tIHQgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgXCItLSAvIHRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgXCIgKyB1bml0ICsgXCIgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIC8gXCIgKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLnByaWNlcykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbW9kaXR5LnZhbHVlICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IHRoaXMucHJpY2VzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCArIFwiIFwiID09IFwiTmFOIFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCIgfCBcIiArIChwcmljZSAqIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgVG90YWwgQ29ycFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiICsgKHByaWNlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1Bvc3RMTS50c1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2hpcHBpbmctYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKD86U0hJUFBJTkcpXFxzKFtcXGQsLl0rKXRcXHNcXC9cXHMoW1xcZCwuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1syXS5yZXBsYWNlKC9bLC5dL2csICcnKSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0b25uYWdlID4gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9ICh0b3RhbENlbnRzIC8gY291bnQgLyAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfS8ke3VuaXR9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NoaXBwaW5nQWRzLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgcGFyc2VEdXJhdGlvbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFF1ZXVlTG9hZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcXVldWUtbG9hZFwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVRdWV1ZUxvYWQoKTtcclxuICAgIH1cclxuICAgIGdldEV0YUZyb21Sb3cocm93KSB7XHJcbiAgICAgICAgY29uc3QgZXRhQ2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg1KTtcclxuICAgICAgICBpZiAoZXRhQ2VsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBldGFTcGFuID0gZXRhQ2VsbC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgaWYgKGV0YVNwYW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IHBhcnNlRHVyYXRpb24oZXRhU3Bhbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlUXVldWVMb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWVUYWJsZSkpO1xyXG4gICAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbChcInRib2R5Om50aC1vZi10eXBlKDIpID4gdHJcIikpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZ2V0RXRhRnJvbVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgbjtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gKGV0YSAvIHRvdGFsVGltZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVUZXh0U3BhbihgICR7cGVyY2VudH0lYCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1ub3RzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTm90aWZpY2F0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCAmJiBlbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2VhcmNoZXJzLmZvckVhY2goc2VhcmNoID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2gobmV3IFJlZ0V4cChzZWFyY2hbMF0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnRleHRDb250ZW50ID0gc2VhcmNoWzFdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5zdHlsZS5jb2xvciA9IHNlYXJjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0eXBlU3BhbiwgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdFRleHQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RUZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9DaGFtYmVyIG9mIEdsb2JhbCBDb21tZXJjZS8sIFwiQ09HQ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZHVjZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2F0IHlvdXIgYmFzZSAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL09uZSAvLCBcIjEgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGhhdmUgYmVlbi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHVuaXRbc10/IG9mLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvIChbQS16IC1dKykgcHJvZHVjZWQvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYWRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgveW91ciAoW0EteiAtXSspIG9yZGVyLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkZXIgZmlsbGVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gQ29tbW9kaXR5IEV4Y2hhbmdlLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvKFtBLXogLV0rKSBvcmRlci8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWNjZXB0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB0aGUvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBsb2NhbCBtYXJrZXQvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbnRyYWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9Zb3VyIHBhcnRuZXIgLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVkIGF0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9pdHMgZGVzdGluYXRpb24gLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2djXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFtYmVyIG9mIGdsb2JhbCBjb21tZXJjZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGEgbmV3IGVjb25vbWljIHByb2dyYW0vLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBBZHZlcnRpc2luZyBDYW1wYWlnbjovLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IG5vdFRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuY29uc3QgU2VhcmNoZXJzID0gW1xyXG4gICAgW1wiY29udHJhY3RcIiwgXCJjb250cmFjdFwiLCBcInJnYigyNDcsIDE2NiwgMClcIl0sXHJcbiAgICBbXCJvdXIgY29ycG9yYXRpb25cIiwgXCJjb3JwXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInByb2R1Y2VkXCIsIFwicHJvZHVjZWRcIiwgXCIjM2ZhMmRlXCJdLFxyXG4gICAgW1wiYWNjZXB0ZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxyXG4gICAgW1wiZXhwaXJlZFwiLCBcImFkdmVydFwiLCBcIiM0NDljNTdcIl0sXHJcbiAgICBbXCJ0cmFkZVwiLCBcInRyYWRlXCIsIFwiIzAwODAwMFwiXSxcclxuICAgIFtcIm9yZGVyIGZpbGxlZFwiLCBcIm9yZGVyXCIsIFwiI2NjMjkyOVwiXSxcclxuICAgIFtcImFycml2ZWQgYXRcIiwgXCJhcnJpdmFsXCIsIFwiI2IzMzZiM1wiXSxcclxuICAgIFtcInJlcG9ydFwiLCBcInJlcG9ydFwiLCBcIiMwMGFhNzdcIl0sXHJcbiAgICBbXCJlbGVjdGlvblwiLCBcImVsZWN0aW9uXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImdvdmVybm9yXCIsIFwiZ292ZXJub3JcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicnVsZXNcIiwgXCJydWxlc1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJjb2djXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJjaGFtYmVyIG9mIGdsb2JhbCBjb21tZXJjZVwiLCBcIkNPR0NcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiZXhwZXJ0XCIsIFwiZXhwZXJ0XCIsIFwiI2ZmOGEwMFwiXSxcclxuICAgIFtcInBvcHVsYXRpb24gaW5mcmFzdHJ1Y3R1cmUgcHJvamVjdFwiLCBcIlBPUElcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiYXBleFwiLCBcInVwZGF0ZVwiLCBcIiMwMGFhNzdcIl0sXHJcbiAgICBbXCJ3YXJlaG91c1wiLCBcIndhclwiLCBcIiNjYzI5MjlcIl0sXHJcbiAgICBbXCJzaGlwYnVpbGRpbmcgcHJvamVjdFwiLCBcInNoaXBcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicGxhbmV0YXJ5IHByb2plY3RcIiwgXCJpbmZyYVwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJjb25zdW1hYmxlIHN1cHBsaWVzXCIsIFwic3VwcGxpZXNcIiwgXCIjYjM3YjMyXCJdXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL05vdGlmaWNhdGlvbnMudHNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5VbnBhY2sge1xyXG4gICAgY29uc3RydWN0b3IoZXhjbHVzaW9ucykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zY3JlZW5zXCI7XHJcbiAgICAgICAgZXhjbHVzaW9ucyA9IGV4Y2x1c2lvbnMgPT0gdW5kZWZpbmVkID8gW10gOiBleGNsdXNpb25zO1xyXG4gICAgICAgIHRoaXMuZXhjbHVzaW9ucyA9IFtdO1xyXG4gICAgICAgIGV4Y2x1c2lvbnMuZm9yRWFjaChleCA9PiB7IHRoaXMuZXhjbHVzaW9ucy5wdXNoKGV4LnRvVXBwZXJDYXNlKCkpOyB9KTtcclxuICAgIH1cclxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuU2NyZWVuQ29udHJvbHMpO1xyXG4gICAgICAgIGlmIChuYXZiYXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYXZiYXIuY2hpbGRyZW5bbmF2YmFyLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuYXZiYXJJdGVtQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBuYml0TWFpbkNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbmJpdFVuZGVybGluZUNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IG5hdmJhci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXTtcclxuICAgICAgICB2YXIgbGlua3MgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKG1lbnUuY2hpbGRyZW4pLmZvckVhY2goKGNuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbi5jaGlsZHJlbi5sZW5ndGggPT0gNCAmJiAhdGhpcy5leGNsdXNpb25zLmluY2x1ZGVzKFN0cmluZyhjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwpLnRvVXBwZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rcy5wdXNoKHsgXCJOYW1lXCI6IGNuLmNoaWxkcmVuWzFdLmlubmVySFRNTCwgXCJMaW5rXCI6IGNuLmNoaWxkcmVuWzFdLmhyZWYgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzcGFjZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNwYWNlckRpdi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICBzcGFjZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgc3BhY2VyRGl2LnN0eWxlLndpZHRoID0gXCI1cHhcIjtcclxuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoc3BhY2VyRGl2KTtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBgPGRpdiBjbGFzcz1cIiR7bmF2YmFySXRlbUNsYXNzTGlzdH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIiR7bmJpdE1haW5DbGFzc0xpc3R9XCIgc3R5bGU9XCJjb2xvcjogaW5oZXJpdFwiIGhyZWY9XCIke2xpbmsuTGlua31cIj4ke2xpbmsuTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7bmJpdFVuZGVybGluZUNsYXNzTGlzdH1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW0gPSBjcmVhdGVOb2RlKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChidXR0b25FbGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NyZWVuVW5wYWNrLnRzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIHNob3dCdWZmZXIsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25zKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNpZGViYXJcIjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zID0gW1wiQlNcIiwgXCJDT05UXCIsIFwiQ09NXCIsIFwiQ09SUFwiLCBcIkNYTFwiLCBcIkZJTlwiLCBcIkZMVFwiLCBcIklOVlwiLCBcIk1BUFwiLCBcIlBST0RcIiwgXCJDTURTXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5MZWZ0U2lkZWJhcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25zID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWRlYmFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnV0dG9ucy5mb3JFYWNoKGRlZmF1bHRCdXR0b24gPT4ge1xyXG4gICAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uWzBdLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc2lkZWJhci5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZpcnN0Q2hpbGQgIT0gbnVsbCAmJiAoY2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09PSBkZWZhdWx0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShjaGlsZC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZENoaWxkID0+IHsgY2hpbGRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWVsZW1lbnRcIik7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNpZGViYXIuY2hpbGRyZW5bc2lkZWJhci5jaGlsZHJlbi5sZW5ndGggLSAxXS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uSW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCdXR0b25zLmluY2x1ZGVzKGJ1dHRvbkluZm9bMF0udG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dFNwYW4oYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaXZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyQnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uVGV4dC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJUZXh0KTtcclxuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNsaXZlcik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNsaXZlcik7XHJcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoYnV0dG9uSW5mb1sxXSk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NpZGViYXIudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNoYW5nZVZhbHVlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFBsYW5ldENvbW1hbmRzLCBQbGFuZXROYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQ29ycmVjdGVyIHtcclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5CdWZmZXJBcmVhKSkuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlckZpZWxkID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkKTtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXJGaWVsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGJ1ZmZlclRleHQgPSBidWZmZXJGaWVsZC52YWx1ZS50b1VwcGVyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGxhbmV0Q29tbWFuZHMuaW5jbHVkZXMoYnVmZmVyVGV4dC5zcGxpdChcIiBcIilbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoUGxhbmV0TmFtZXMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJUZXh0LmluY2x1ZGVzKFwiIFwiICsgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRleHQgPSBidWZmZXJUZXh0LnJlcGxhY2UoXCIgXCIgKyBuYW1lLCBcIiBcIiArIFBsYW5ldE5hbWVzW25hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlKGJ1ZmZlckZpZWxkLCBidWZmZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQgPT0gbnVsbCB8fCBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29tbWFuZENvcnJlY3Rlci50c1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY2FsY1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcclxuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBjYWxjVGFncyA9IFtcIkxNXCIsIFwiQ1hcIiwgXCJYSVRcIl07XHJcbiAgICAgICAgY2FsY1RhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyh0YWcpO1xyXG4gICAgICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpIHx8IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXVwcGVyLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmluc2VydEJlZm9yZShjYWxjRGl2LCAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZC5pZCA9PSBcInJlZnJlc2hcIiA/IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5jaGlsZHJlblsxXSA6IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCLwn5apXCIsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoXCJYSVQgQ0FMQ1VMQVRPUlwiKTsgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NhbGN1bGF0b3JCdXR0b24udHNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJhY3REcmFmdHMge1xyXG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbnRkXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBnZXRCdWZmZXJzKFwiQ09OVEQgXCIpLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uVGFibGUgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250RENvbmRpdGlvbnNUYWJsZSk7XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0cyA9IGNvbmRpdGlvblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ciA+IHRkOm50aC1jaGlsZCgyKVwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQ29uZGl0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNvbmRpdGlvblRleHRzKS5mb3JFYWNoKGNvbmRpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY29uZGl0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdmlzaW9uTWF0Y2ggPSAoL1Byb3Zpc2lvbiAoWzAtOSwuXSspIHVuaXRbc10/IG9mIChbQS1aYS16MC05IF0rKSBAL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3Zpc2lvbk1hdGNoICYmIHByb3Zpc2lvbk1hdGNoLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwcm92aXNpb25NYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHByb3Zpc2lvbk1hdGNoWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXSA9IFtxdWFudGl0eS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgbWF0ZXJpYWxdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJNYXRjaCA9ICgvRGVsaXZlcnkgb2YgKFswLTksLl0rKSB1bml0W3NdPyBvZiAoW0EtWmEtejAtOSBdKykgdG8vZ20pLmV4ZWMoY29uZGl0aW9uVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsaXZlck1hdGNoICYmIGRlbGl2ZXJNYXRjaC5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZGVsaXZlck1hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gZGVsaXZlck1hdGNoWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXSA9IFtxdWFudGl0eS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgbWF0ZXJpYWxdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRNYXRjaCA9ICgvUGF5bWVudCBvZiAoWzAtOSwuXSspL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBheW1lbnRNYXRjaCAmJiBwYXltZW50TWF0Y2gubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiUGF5bWVudFwiXSA9IHBheW1lbnRNYXRjaFsxXS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwTWF0Y2ggPSAoL1Byb3Zpc2lvbiBzaGlwbWVudCBvZiAoWzAtOSwuXSspIHVuaXRbc10/IG9mIChbQS1aYS16MC05IF0rKSBAL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBNYXRjaCAmJiBzaGlwTWF0Y2gubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHNoaXBNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHNoaXBNYXRjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl0gPSBbcXVhbnRpdHkucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIiksIG1hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25FZGl0b3JGb3JtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtKTtcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25FZGl0b3JGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbkVkaXRvckxhYmVscyA9IGNvbmRpdGlvbkVkaXRvckZvcm0ucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Db250REZvcm1MYWJlbCk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oY29uZGl0aW9uRWRpdG9yTGFiZWxzKS5mb3JFYWNoKGxhYmVsID0+IHtcclxuICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsLnRleHRDb250ZW50IHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsc1sxXSA9PSBcIkN1cnJlbmN5XCIgJiYgcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdICYmIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93U3BhY2VyID0gY29uZGl0aW9uRWRpdG9yRm9ybS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybVJvd1NwYWNlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvd1NwYWNlciB8fCAhcm93U3BhY2VyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHJvd1NwYWNlci5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFtb3VudElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyVW5pdCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlIHx8IFwiMFwiKSAvIHBhcnNlSW50KHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxUZXh0ID0gcGVyVW5pdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VzW3BhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVsxXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvcnAgPSBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMF0pICogdGhpcy5wcmljZXNbcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzFdXTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgKz0gXCIgfCBcIiArIHRvdGFsQ29ycC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBDb3JwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dTcGFjZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGxhYmVsVGV4dCwgdGhpcy50YWcpLCByb3dTcGFjZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGFiZWxzWzFdID09IFwiQ3VycmVuY3lcIiAmJiBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl0gJiYgcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTcGFjZXIgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtUm93U3BhY2VyKTtcclxuICAgICAgICAgICAgICAgIGlmICghcm93U3BhY2VyIHx8ICFyb3dTcGFjZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gcm93U3BhY2VyLnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghYW1vdW50SW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hlYXZ5ID0gTWF0ZXJpYWxzW3BhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXV1bMV0gPiBNYXRlcmlhbHNbcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdWzFdXVsyXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlclVuaXQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSB8fCBcIjBcIikgLyBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMF0pIC8gTWF0ZXJpYWxzW3BhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXV1baXNIZWF2eSA/IDEgOiAyXTtcclxuICAgICAgICAgICAgICAgIHZhciBsYWJlbFRleHQgPSBwZXJVbml0LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIChpc0hlYXZ5ID8gXCIvdFwiIDogXCIvbcKzXCIpO1xyXG4gICAgICAgICAgICAgICAgcm93U3BhY2VyLmluc2VydEJlZm9yZShjcmVhdGVUZXh0U3BhbihsYWJlbFRleHQsIHRoaXMudGFnKSwgcm93U3BhY2VyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29udHJhY3REcmFmdHMudHNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIEltYWdlQ3JlYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItaW1hZ2VcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiQ09NXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hhdExpbmtzID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQ2hhdExpbmspO1xyXG4gICAgICAgICAgICBjb25zdCBjaGF0QXJlYSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNoYXRBcmVhKTtcclxuICAgICAgICAgICAgaWYgKCFjaGF0QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oY2hhdExpbmtzKS5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua1RleHQgPSBsaW5rLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rVGV4dCB8fCBsaW5rLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW1hZ2UobGlua1RleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2hhdC1pbWFnZVwiKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBsaW5rVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmICghbGluay5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICBjaGF0QXJlYS5zY3JvbGxCeSgwLCAoaW1nLm9mZnNldEhlaWdodCB8fCAwKSArIDIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0ltYWdlKHVybCkge1xyXG4gICAgcmV0dXJuIC9cXC4oanBnfGpwZWd8cG5nfHdlYnB8YXZpZnxnaWZ8c3ZnKSQvLnRlc3QodXJsKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9JbWFnZUNyZWF0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMsIHBhcnNlSW52TmFtZSwgcGFyc2VQbGFuZXROYW1lLCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCwgdGFyZ2V0ZWRDbGVhbnVwLCBzZXRTZXR0aW5ncywgc2hvd0J1ZmZlciwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50IH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcywgU29ydGluZ1RyaWFuZ2xlSFRNTCB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlPcmdhbml6ZXIge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGZ1bGxCdXJuLCByZXN1bHQpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItaW52LW9yZ1wiO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmZ1bGxCdXJuID0gZnVsbEJ1cm47XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIklOViBcIik7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKCFidWZmZXJzIHx8ICFyZXN1bHQgfHwgIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAodGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJpbnZlbnRvcnlfc29ydGluZ1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImludmVudG9yeV9zb3J0aW5nXCJdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlNjcmVlbk5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk5hbWUgPSBzY3JlZW5OYW1lRWxlbSA/IHNjcmVlbk5hbWVFbGVtLnRleHRDb250ZW50IDogXCJcIjtcclxuICAgICAgICBpZiAoIXNjcmVlbk5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnRhZztcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnlTb3J0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICghc29ydE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlTmFtZUVsZW0gPSBidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VOYW1lRWxlbSB8fCAhYmFzZU5hbWVFbGVtWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW52TmFtZSA9IHBhcnNlSW52TmFtZShiYXNlTmFtZUVsZW1bMF0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWludk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXROYW1lRWxlbSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeU5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXROYW1lID0gcGxhbmV0TmFtZUVsZW0gPyBwYXJzZVBsYW5ldE5hbWUocGxhbmV0TmFtZUVsZW0udGV4dENvbnRlbnQpIDogXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldE5hbWUsIHRoaXMuZnVsbEJ1cm5bdGhpcy51c2VybmFtZV0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnkpO1xyXG4gICAgICAgICAgICBpZiAoIWludmVudG9yeSB8fCAhaW52ZW50b3J5LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWludmVudG9yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi1tb25pdG9yZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeS5jbGFzc0xpc3QuYWRkKFwicGItbW9uaXRvcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRoaXMudGFnLCBzY3JlZW5OYW1lLCBpbnZOYW1lLCBidXJuKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCIyNTBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ZWRDbGVhbnVwKHRhZywgaW52ZW50b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGFnLCBzY3JlZW5OYW1lLCBpbnZOYW1lLCBidXJuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGludmVudG9yeTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzaGlwQnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTSFBJIFwiKTtcclxuICAgICAgICBpZiAoIXNoaXBCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHNoaXBCdWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnlTb3J0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICghc29ydE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaGlwTmFtZUVsZW0gPSBidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpO1xyXG4gICAgICAgICAgICBpZiAoIXNoaXBOYW1lRWxlbSB8fCAhc2hpcE5hbWVFbGVtWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBwYXJzZUludk5hbWUoc2hpcE5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKCFzaGlwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGludmVudG9yeSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeSk7XHJcbiAgICAgICAgICAgIGlmICghaW52ZW50b3J5IHx8ICFpbnZlbnRvcnkucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaW52ZW50b3J5LmNsYXNzTGlzdC5jb250YWlucyhcInBiLW1vbml0b3JlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LmNsYXNzTGlzdC5hZGQoXCJwYi1tb25pdG9yZWRcIik7XHJcbiAgICAgICAgICAgICAgICBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGFnLCBzY3JlZW5OYW1lLCBzaGlwTmFtZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCIyNTBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ZWRDbGVhbnVwKHRhZywgaW52ZW50b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGFnLCBzY3JlZW5OYW1lLCBzaGlwTmFtZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGludmVudG9yeTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGFnLCBzY3JlZW5OYW1lLCBwbGFuZXROYW1lLCBidXJuKSB7XHJcbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIDw9IDcpIHtcclxuICAgICAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24gIT0gc29ydE9wdGlvbnMuZmlyc3RDaGlsZCAmJiAhb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc29ydE9wdGlvbnMuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uSW5uZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uSW5uZXIuY2hpbGRyZW5bMV0gJiYgb3B0aW9uSW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Jbm5lci5yZW1vdmVDaGlsZChvcHRpb25Jbm5lci5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLmZvckVhY2goc29ydFNldHRpbmdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFNldHRpbmdzWzBdID09IHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRTZXR0aW5nc1sxXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52ZW50b3J5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5Lmluc2VydEJlZm9yZShpbnZlbnRvcnkuZmlyc3RDaGlsZCwgaW52ZW50b3J5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGJ1cm4pIHtcclxuICAgICAgICAgICAgc29ydE9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlVG9nZ2xlKHJlc3VsdCwgc29ydE9wdGlvbnMsIFwiQlJOXCIsIGZpbmRJZkFjdGl2ZShyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgXCJCUk5cIiksIHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lLCBpbnZlbnRvcnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5mb3JFYWNoKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZXR0aW5nc1swXSB8fCAhc2V0dGluZ3NbMV0gfHwgIXNldHRpbmdzWzJdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzWzFdLnRvVXBwZXJDYXNlKCkgIT0gcGxhbmV0TmFtZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc29ydE9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlVG9nZ2xlKHJlc3VsdCwgc29ydE9wdGlvbnMsIHNldHRpbmdzWzBdLCBmaW5kSWZBY3RpdmUocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXSwgc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUsIHNldHRpbmdzWzBdKSwgc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUsIGludmVudG9yeSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gJiYgc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgIT0gXCIrXCIpIHtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiSW52ZW50b3J5U29ydENvbnRyb2xzX19jcml0ZXJpYV9fX2lqTE1nam1cIik7XHJcbiAgICAgICAgc29ydE9wdGlvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgICAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xyXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzaG93QnVmZmVyKFwiWElUIFNPUlRfXCIgKyBwbGFuZXROYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGFjdGl2ZVNvcnQgPSBcIlwiO1xyXG4gICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXS5mb3JFYWNoKHNvcnRTZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKHNvcnRTZXR0aW5nc1swXSA9PSBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSkge1xyXG4gICAgICAgICAgICBhY3RpdmVTb3J0ID0gc29ydFNldHRpbmdzWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIEFycmF5LmZyb20oc29ydE9wdGlvbnMuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAob3B0aW9uICE9IHNvcnRPcHRpb25zLmZpcnN0Q2hpbGQgJiYgb3B0aW9uLmZpcnN0Q2hpbGQgJiYgb3B0aW9uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPT0gYWN0aXZlU29ydCAmJiAhb3B0aW9uLmNoaWxkcmVuWzFdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZUluZGljYXRvci5pbm5lckhUTUwgPSBTb3J0aW5nVHJpYW5nbGVIVE1MO1xyXG4gICAgICAgICAgICB0b2dnbGVJbmRpY2F0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0b2dnbGVJbmRpY2F0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvcHRpb24uZmlyc3RDaGlsZCAmJiBvcHRpb24uZmlyc3RDaGlsZC50ZXh0Q29udGVudCAhPSBhY3RpdmVTb3J0ICYmIG9wdGlvbi5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZUNoaWxkKG9wdGlvbi5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlU29ydCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgaWYgKGFjdGl2ZVNvcnQgPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBtYXRlcmlhbHMgPSBBcnJheS5mcm9tKGludmVudG9yeS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZ1bGxNYXRlcmlhbEljb24pKTtcclxuICAgIG1hdGVyaWFscy5zb3J0KG1hdGVyaWFsU29ydCk7XHJcbiAgICB2YXIgc29ydGVkID0gW107XHJcbiAgICB2YXIgc29ydGluZ0RldGFpbHMgPSBbXTtcclxuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uZm9yRWFjaChyZXN1bHRfc29ydGluZ0RldGFpbHMgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHRfc29ydGluZ0RldGFpbHNbMF0gPT0gYWN0aXZlU29ydCAmJiByZXN1bHRfc29ydGluZ0RldGFpbHNbMV0gPT0gcGxhbmV0TmFtZSkge1xyXG4gICAgICAgICAgICBzb3J0aW5nRGV0YWlscyA9IHJlc3VsdF9zb3J0aW5nRGV0YWlscztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoYWN0aXZlU29ydCAhPSBcIkJSTlwiKSB7XHJcbiAgICAgICAgaWYgKHNvcnRpbmdEZXRhaWxzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc29ydGluZ0RldGFpbHNbNF0pIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsc1RvU29ydCA9IFtdO1xyXG4gICAgICAgICAgICBzb3J0aW5nRGV0YWlsc1syXS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1RvU29ydCA9IG1hdGVyaWFsc1RvU29ydC5jb25jYXQoY2F0ZWdvcnlbMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsc1RvU29ydCA9IG1hdGVyaWFsc1RvU29ydC5maWx0ZXIoKGMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0ZXJpYWxzVG9Tb3J0LmluZGV4T2YoYykgPT09IGluZGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxzVG9Tb3J0LmZvckVhY2godGlja2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWxMaXN0Q29udGFpbnMobWF0ZXJpYWxzLCB0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0RWxlbWVudCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIHRhZywgXCIwXCIsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRRdWFudGl0eUVsZW0gPSBtYXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxRdWFudGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdFF1YW50aXR5RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRRdWFudGl0eUVsZW0uc3R5bGUuY29sb3IgPSBcIiNjYzAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMuc29ydChtYXRlcmlhbFNvcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzb3J0aW5nRGV0YWlsc1syXS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnlbMF0pKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcclxuICAgICAgICAgICAgdmFyIGFyZUl0ZW1zSW5DYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aWNrZXJFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gdGlja2VyRWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgY2F0ZWdvcnlbMV0uaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZUl0ZW1zSW5DYXRlZ29yeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWFyZUl0ZW1zSW5DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGNhdGVnb3J5VGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHNvcnRlZC5jb25jYXQoY2F0ZWdvcnlbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydGluZ0RldGFpbHNbM10gfHwgYWN0aXZlU29ydCA9PSBcIkJSTlwiKSB7XHJcbiAgICAgICAgaWYgKGJ1cm4pIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ya2ZvcmNlTWF0ZXJpYWxzID0gZXh0cmFjdE1hdGVyaWFscyhidXJuW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dE1hdGVyaWFscyA9IGV4dHJhY3RNYXRlcmlhbHMoYnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRNYXRlcmlhbHMgPSBleHRyYWN0TWF0ZXJpYWxzKGJ1cm5bXCJPcmRlclByb2R1Y3Rpb25cIl0pO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JrZm9yY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29uc3VtYWJsZXNcIikpO1xyXG4gICAgICAgICAgICB3b3JrZm9yY2VUaXRsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKHdvcmtmb3JjZVRpdGxlKTtcclxuICAgICAgICAgICAgdmFyIGFyZUNvbnN1bWFibGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlckVsZW0gPSBtYXRlcmlhbC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiB3b3JrZm9yY2VNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhb3V0cHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcmVDb25zdW1hYmxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWFyZUNvbnN1bWFibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQod29ya2ZvcmNlVGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICBpbnB1dFRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW5wdXRzXCIpKTtcclxuICAgICAgICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICAgICAgICAgIGlucHV0VGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcclxuICAgICAgICAgICAgdmFyIGFyZUlucHV0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aWNrZXJFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gdGlja2VyRWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZUlucHV0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWFyZUlucHV0cykge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGlucHV0VGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgb3V0cHV0VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJPdXRwdXRzXCIpKTtcclxuICAgICAgICAgICAgb3V0cHV0VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgICAgICBvdXRwdXRUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBvdXRwdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChvdXRwdXRUaXRsZSk7XHJcbiAgICAgICAgICAgIHZhciBhcmVPdXRwdXRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlckVsZW0gPSBtYXRlcmlhbC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiBvdXRwdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZU91dHB1dHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFhcmVPdXRwdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQob3V0cHV0VGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHNvcnRlZC5jb25jYXQod29ya2ZvcmNlTWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdChpbnB1dE1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHNvcnRlZC5jb25jYXQob3V0cHV0TWF0ZXJpYWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaXNjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbWlzY1RpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiT3RoZXJcIikpO1xyXG4gICAgbWlzY1RpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIG1pc2NUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgbWlzY1RpdGxlLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtaXNjVGl0bGUpO1xyXG4gICAgdmFyIGFyZU1pc2MgPSBmYWxzZTtcclxuICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgIGlmICghdGlja2VyRWxlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHRpY2tlciAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcclxuICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgYXJlTWlzYyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgaWYgKCFhcmVNaXNjKSB7XHJcbiAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKG1pc2NUaXRsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gbWF0ZXJpYWxMaXN0Q29udGFpbnMobWF0ZXJpYWxzLCB0aWNrZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsc1tpXS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XHJcbiAgICAgICAgaWYgKCF0aWNrZXJFbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGlja2VyID09IHRpY2tlckVsZW0udGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRJZkFjdGl2ZShzb3J0U2V0dGluZ3MsIHNjcmVlblBsYW5ldCwgc29ydE1vZGVOYW1lKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgIHNvcnRTZXR0aW5ncy5mb3JFYWNoKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoc2V0dGluZ3NbMF0gPT0gc2NyZWVuUGxhbmV0ICYmIHNldHRpbmdzWzFdID09IHNvcnRNb2RlTmFtZSkge1xyXG4gICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1hdGNoO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZShyZXN1bHQsIHNvcnRPcHRpb25zLCBhYmJyZXZpYXRpb24sIHNlbGVjdGVkLCBjb21iaW5lZE5hbWUsIGludmVudG9yeSkge1xyXG4gICAgY29uc3QgY3VzdG9tU29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjdXN0b21Tb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJJbnZlbnRvcnlTb3J0Q29udHJvbHNfX2NyaXRlcmlhX19faWpMTWdqbVwiKTtcclxuICAgIGN1c3RvbVNvcnRCdXR0b24uY2xhc3NMaXN0LmFkZChcInBiLXRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZ2dsZUxhYmVsLnRleHRDb250ZW50ID0gYWJicmV2aWF0aW9uO1xyXG4gICAgY3VzdG9tU29ydEJ1dHRvbi5hcHBlbmRDaGlsZCh0b2dnbGVMYWJlbCk7XHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZUNoaWxkKG9wdGlvbi5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRvZ2dsZUluZGljYXRvci5pbm5lckhUTUwgPSBTb3J0aW5nVHJpYW5nbGVIVE1MO1xyXG4gICAgICAgIHRvZ2dsZUluZGljYXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIycHhcIjtcclxuICAgICAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUluZGljYXRvcik7XHJcbiAgICB9XHJcbiAgICBjdXN0b21Tb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbnZlbnRvcnkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5pbnNlcnRCZWZvcmUoaW52ZW50b3J5LmZpcnN0Q2hpbGQsIGludmVudG9yeS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IFwiMnB4XCI7XHJcbiAgICAgICAgY3VzdG9tU29ydEJ1dHRvbi5hcHBlbmRDaGlsZCh0b2dnbGVJbmRpY2F0b3IpO1xyXG4gICAgICAgIHZhciBzYXZlZEJlZm9yZSA9IGZhbHNlO1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0uZm9yRWFjaChzb3J0aW5nT3B0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzb3J0aW5nT3B0aW9uc1swXSA9PSBjb21iaW5lZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRpbmdPcHRpb25zWzFdID0gYWJicmV2aWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgc2F2ZWRCZWZvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXNhdmVkQmVmb3JlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0ucHVzaChbY29tYmluZWROYW1lLCBhYmJyZXZpYXRpb25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjdXN0b21Tb3J0QnV0dG9uO1xyXG59XHJcbmZ1bmN0aW9uIGV4dHJhY3RNYXRlcmlhbHMoYnVybikge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gW107XHJcbiAgICBidXJuLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSB8fCBcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxufVxyXG5mdW5jdGlvbiBtYXRlcmlhbFNvcnQoYSwgYikge1xyXG4gICAgY29uc3QgdGlja2VyRWxlbUEgPSBhLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcclxuICAgIGlmICghdGlja2VyRWxlbUEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aWNrZXJBID0gdGlja2VyRWxlbUEudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCB0aWNrZXJFbGVtQiA9IGIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgaWYgKCF0aWNrZXJFbGVtQikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpY2tlckIgPSB0aWNrZXJFbGVtQi50ZXh0Q29udGVudDtcclxuICAgIGlmICghTWF0ZXJpYWxOYW1lc1t0aWNrZXJBXSB8fCAhTWF0ZXJpYWxOYW1lc1t0aWNrZXJCXSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbdGlja2VyQV1bMV0gPT0gTWF0ZXJpYWxOYW1lc1t0aWNrZXJCXVsxXSkge1xyXG4gICAgICAgIHJldHVybiB0aWNrZXJBLmxvY2FsZUNvbXBhcmUodGlja2VyQik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxOYW1lc1t0aWNrZXJBXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbdGlja2VyQl1bMV0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ludmVudG9yeU9yZ2FuaXplci50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJNaW5pbWl6ZXIge1xyXG4gICAgY29uc3RydWN0b3IobWluQnlEZWZhdWx0KSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW1pbi1oZWFkZXJzXCI7XHJcbiAgICAgICAgdGhpcy5taW5CeURlZmF1bHQgPSBtaW5CeURlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB2YXIgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJDWCBcIik7XHJcbiAgICAgICAgaWYgKCFidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIG1pbmltaXplSGVhZGVycyhidWZmZXIsIHRoaXMubWluQnlEZWZhdWx0LCB0aGlzLnRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiQ09OVCBcIik7XHJcbiAgICAgICAgaWYgKCFidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIG1pbmltaXplSGVhZGVycyhidWZmZXIsIHRoaXMubWluQnlEZWZhdWx0LCB0aGlzLnRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1pbmltaXplSGVhZGVycyhidWZmZXIsIG1pbkJ5RGVmYXVsdCwgdGFnKSB7XHJcbiAgICBjb25zdCBidWZmZXJQYW5lbCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclBhbmVsKTtcclxuICAgIGlmICghYnVmZmVyUGFuZWwgfHwgIWJ1ZmZlclBhbmVsLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkZXJzID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSGVhZGVyUm93KTtcclxuICAgIGlmIChoZWFkZXJzWzBdICYmIGhlYWRlcnNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKHRhZykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobWluQnlEZWZhdWx0KSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW5pbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtaW5pbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9IG1pbkJ5RGVmYXVsdCA/IFwiK1wiIDogXCItXCI7XHJcbiAgICBtaW5pbWl6ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGItbWluaW1pemVcIik7XHJcbiAgICBtaW5pbWl6ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGItbWluaW1pemUtY3hcIik7XHJcbiAgICBtaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IG1pbmltaXplID0gbWluaW1pemVCdXR0b24udGV4dENvbnRlbnQgPT0gXCItXCI7XHJcbiAgICAgICAgbWluaW1pemVCdXR0b24udGV4dENvbnRlbnQgPSBtaW5pbWl6ZSA/IFwiK1wiIDogXCItXCI7XHJcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9IG1pbmltaXplID8gXCJub25lXCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBidWZmZXJQYW5lbC5maXJzdENoaWxkLmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXJSb3coXCJNaW5pbWl6ZVwiLCBtaW5pbWl6ZUJ1dHRvbiwgdGFnKSwgYnVmZmVyUGFuZWwuZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJSb3cobGFiZWxUZXh0LCByaWdodFNpZGVDb250ZW50cywgdGFnKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuSGVhZGVyUm93KTtcclxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZChyaWdodFNpZGVDb250ZW50cyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICByZXR1cm4gcm93O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0hlYWRlck1pbmltaXplci50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVDb250cmFjdERpY3QgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb250cmFjdHMge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNvbnRyYWN0cykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wZW5kaW5nLWNvbnRyYWN0c1wiO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IGNvbnRyYWN0cztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VybmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0TGluZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU2lkZWJhckNvbnRyYWN0KSk7XHJcbiAgICAgICAgdmFyIGNvbnRyYWN0ZGljdCA9IHt9O1xyXG4gICAgICAgIGlmICghdGhpcy5jb250cmFjdHNbdGhpcy51c2VybmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVDb250cmFjdERpY3QodGhpcy5jb250cmFjdHMsIHRoaXMudXNlcm5hbWUsIGNvbnRyYWN0ZGljdCk7XHJcbiAgICAgICAgY29udHJhY3RMaW5lcy5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3RJREVsZW1lbnQgPSBjb250cmFjdC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlNpZGViYXJDb250cmFjdElkKTtcclxuICAgICAgICAgICAgaWYgKCFjb250cmFjdElERWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0SUQgPSBjb250cmFjdElERWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKCFjb250cmFjdElEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ZGljdFtjb250cmFjdElEXSAmJiBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnRuZXJjb2RlID0gY29udHJhY3RkaWN0W2NvbnRyYWN0SURdW1wiUGFydG5lck5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocGFydG5lcmNvZGUubGVuZ3RoID4gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyY29kZSA9IGNvbnRyYWN0ZGljdFtjb250cmFjdElEXVtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSB8fCBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXS5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKGAke3BhcnRuZXJjb2RlfWAsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgIG5hbWVTcGFuLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3QuaW5zZXJ0QmVmb3JlKG5hbWVTcGFuLCBjb250cmFjdC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKFwiVW5rbm93blwiLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIG5hbWVTcGFuLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgICAgICBjb250cmFjdC5pbnNlcnRCZWZvcmUobmFtZVNwYW4sIGNvbnRyYWN0LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9QZW5kaW5nQ29udHJhY3RzLnRzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFdpdGhTdHlsZXMsIFN0eWxlIH0gZnJvbSBcIlN0eWxlXCI7XHJcbmV4cG9ydCBjbGFzcyBDb21wYWN0VUkge1xyXG4gICAgY29uc3RydWN0b3IocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbXBhY3R1aVwiO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB2YXIgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJCQkxcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBDbGVhckJ1aWxkaW5nTGlzdHMoYnVmZmVyLCB0aGlzLnJlc3VsdCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiQlNcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBDbGVhckJhc2UoYnVmZmVyLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBIaWRlRWxlbWVudChlbGVtZW50LCB0YWcpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRhZyArIFwiLWhpZGRlblwiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVW5IaWRlRWxlbWVudChlbGVtZW50LCB0YWcpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGFnICsgXCItaGlkZGVuXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhckJ1aWxkaW5nTGlzdHMoYnVmZmVyLCByZXN1bHQsIHRhZykge1xyXG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWlsZGluZ0xpc3QpO1xyXG4gICAgaWYgKCFuYW1lRWxlbSB8fCAhbmFtZUVsZW0udGV4dENvbnRlbnQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EaXZpZGVyKSkuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld21lbnUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlJhZGlvQnV0dG9uKSk7XHJcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25Ub2dnbGVkKSk7XHJcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblZhbHVlKSk7XHJcbiAgICAgICAgICAgIHZhbHVlLmlubmVyVGV4dCA9IFwiVmlzaWJsZVwiO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmV3bWVudSk7XHJcbiAgICAgICAgICAgIG5ld21lbnUuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcclxuICAgICAgICAgICAgbmV3bWVudS5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIG5ld21lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRpY2F0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFN0eWxlLlJhZGlvQnV0dG9uVG9nZ2xlZFsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93Lm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93Lm5leHRFbGVtZW50U2libGluZywgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSguLi5XaXRoU3R5bGVzKFN0eWxlLlJhZGlvQnV0dG9uVG9nZ2xlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25VblRvZ2dsZWQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbkhpZGVFbGVtZW50KHJvdy5uZXh0RWxlbWVudFNpYmxpbmcsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblVuVG9nZ2xlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25Ub2dnbGVkKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocm93LmlubmVyVGV4dC5pbmNsdWRlcyhcIkluZnJhc3RydWN0dXJlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIiwgeyBcImRldGFpbFwiOiBcImZha2UgY2xpY2tcIiB9KTtcclxuICAgICAgICAgICAgICAgIG5ld21lbnUuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIEFycmF5LmZyb20obmFtZUVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKSkuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgICAgICB2YXIgcmVwYWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgRXN0YWJsaXNoUm93O1xyXG4gICAgICAgIHZhciBidXR0b25zID0gdGFibGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25zWzFdLmNsYXNzTGlzdC5yZW1vdmUoLi4uV2l0aFN0eWxlcyhTdHlsZS5CdXR0b25FbmFibGVkKSk7XHJcbiAgICAgICAgYnV0dG9uc1sxXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuQnV0dG9uRGFuZ2VyKSk7XHJcbiAgICAgICAgQXJyYXkuZnJvbSh0YWJsZS5yb3dzKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBMaW5lO1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24gKExpbmUpIHtcclxuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkVzdGFibGlzaGVkXCJdID0gMF0gPSBcIkVzdGFibGlzaGVkXCI7XHJcbiAgICAgICAgICAgICAgICBMaW5lW0xpbmVbXCJSZXBhaXJcIl0gPSAxXSA9IFwiUmVwYWlyXCI7XHJcbiAgICAgICAgICAgICAgICBMaW5lW0xpbmVbXCJDb3N0XCJdID0gMl0gPSBcIkNvc3RcIjtcclxuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIlJlZnVuZFwiXSA9IDNdID0gXCJSZWZ1bmRcIjtcclxuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIlZhbHVlXCJdID0gNF0gPSBcIlZhbHVlXCI7XHJcbiAgICAgICAgICAgICAgICBMaW5lW0xpbmVbXCJDb25kaXRpb25cIl0gPSA1XSA9IFwiQ29uZGl0aW9uXCI7XHJcbiAgICAgICAgICAgIH0pKExpbmUgfHwgKExpbmUgPSB7fSkpO1xyXG4gICAgICAgICAgICB2YXIgZGljdCA9IHtcclxuICAgICAgICAgICAgICAgICdFc3RhYmxpc2hlZCc6IExpbmUuRXN0YWJsaXNoZWQsXHJcbiAgICAgICAgICAgICAgICAnTGFzdCByZXBhaXInOiBMaW5lLlJlcGFpcixcclxuICAgICAgICAgICAgICAgICdSZXBhaXIgY29zdHMnOiBMaW5lLkNvc3QsXHJcbiAgICAgICAgICAgICAgICAnUmVjbGFpbWFibGUgbWF0ZXJpYWxzJzogTGluZS5SZWZ1bmQsXHJcbiAgICAgICAgICAgICAgICAnQm9vayB2YWx1ZSc6IExpbmUuVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnQ29uZGl0aW9uJzogTGluZS5Db25kaXRpb25cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGxpbmV0eXBlID0gTGluZS5Fc3RhYmxpc2hlZDtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShyb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSkuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gZGF0YS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGljdFt0ZXh0XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXR5cGUgPSBkaWN0W3RleHRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLkVzdGFibGlzaGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFc3RhYmxpc2hSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZXh0ID09IFwiLS1cIilcclxuICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZXh0ID09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQuc3BsaXQoXCIgXCIpLmZvckVhY2god29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQod29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmV0eXBlID09IExpbmUuUmVwYWlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGFpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLkNvbmRpdGlvbiB8fCBsaW5ldHlwZSA9PSBMaW5lLkVzdGFibGlzaGVkIHx8IGxpbmV0eXBlID09IExpbmUuUmVwYWlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhciA9IGRhdGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxODApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChiYXIgIT0gbnVsbCAmJiBiYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LnJlbW92ZSguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyQ29sb3JzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBiYXJbMF0udmFsdWUgLyBiYXJbMF0ubWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZXR5cGUgPT0gTGluZS5Db25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDk4ICYmIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFN0eWxlLkJ1dHRvbkVuYWJsZWRbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1swXS5jbGFzc0xpc3QucmVtb3ZlKC4uLldpdGhTdHlsZXMoU3R5bGUuQnV0dG9uRW5hYmxlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLkJ1dHRvbkRhbmdlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMC45MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyR29vZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiAwLjgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJXYXJuaW5nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0JhckRhbmdlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLnZhbHVlID0gMTgwIC0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IGJhclswXS52YWx1ZSAvIGJhclswXS5tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhyZXNob2xkID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA/IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gLyAxODAuMCA6ICg3MC4wIC8gMTgwLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMC43NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyR29vZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiB0aHJlc2hvbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0Jhcldhcm5pbmcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2dyZXNzID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyRGFuZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2Jhci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmV0eXBlID09IExpbmUuQ29uZGl0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3YmFyLm1heCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3YmFyLm1heCA9IDE4MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbm5lckhUTUwgPSBuZXdiYXIub3V0ZXJIVE1MICsgZGF0YS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZXR5cGUgPT0gTGluZS5WYWx1ZSAmJiB2YWx1ZSA8IDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93LCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPD0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXBhaXJlZClcclxuICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KEVzdGFibGlzaFJvdywgdGFnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhckJhc2UoYnVmZmVyLCB0YWcpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5IZWFkZXJSb3cpKTtcclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsZW1lbnRzWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhciBlZGl0ZGl2ID0gZWxlbWVudHNbMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIilbMF07XHJcbiAgICBlZGl0ZGl2LmlubmVySFRNTCA9IGVsZW1lbnRzWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIilbMF0ub3V0ZXJIVE1MICsgZWRpdGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXS5vdXRlckhUTUw7XHJcbiAgICBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20odGFibGUucm93cykuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEFycmF5LmZyb20ocm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIikpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEFycmF5LmZyb20ocm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhcIikpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVsyXS5pbm5lclRleHQgPSBcIkN1cnJlbnRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXF1aXJlZCA9IHBhcnNlRmxvYXQoZGF0YVsxXS5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmtmb3JjZSA9IHBhcnNlRmxvYXQoZGF0YVsyXS5pbm5lclRleHQuc3BsaXQoXCIgXCIpWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYXBhY2l0eSA9IHBhcnNlRmxvYXQoZGF0YVszXS5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGRhdGFbNF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIilbMF07XHJcbiAgICAgICAgICAgICAgICBiYXIuaW5uZXJIVE1MID0gYmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIilbMF0ub3V0ZXJIVE1MICsgYmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIilbMF0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkIDwgMSAmJiBjYXBhY2l0eSA8IDEgJiYgd29ya2ZvcmNlIDwgMSlcclxuICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbXBhY3RVSS50c1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==