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
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["z" /* getLocalStorage */])("PMMG-Lists", updateThenStoreList, [name, ""]);
            row.style.display = "none";
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
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["G" /* setSettings */])(result);
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
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["w" /* genericCleanup */])(this.tag);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTZjZWE2N2Q4NjBkOTUzZDQwMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGVja2xpc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGlnaHRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2NhbE1hcmtldEFkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlUnVubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU3RhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1JlcGFpcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGF0LnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvRmluYW5jZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9CdXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU2hlZXRUYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1dlYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL05vdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU29ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VDcmVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9JbnZlbnRvcnlPcmdhbml6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlck1pbmltaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGVuZGluZ0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcGFjdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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O0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsK0NBQStDO0FBQy9DLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBO0FBQ0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNEJBQTRCOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNqMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOU1BO0FBQUE7QUFBQTtBQUFrRztBQUNqRTtBQUMxQixrQ0FBa0M7QUFBQTtBQUFBO0FBQ2xDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekMscUNBQXFDLHFFQUFjO0FBQ25ELGdDQUFnQyxxRUFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBZTtBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsK0VBQStFLEVBQUU7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekM7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscURBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEM7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBSztBQUN4QztBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQSx1QkFBdUIsOERBQThEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYyxrREFBa0QscUNBQXFDLDJEQUEyRCxvREFBb0Q7QUFDMU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBOEQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ3hUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1E7QUFDSjtBQUNOO0FBQ2M7QUFDZDtBQUNOO0FBQ1U7QUFDSjtBQUNRO0FBQ3VDO0FBQ3hCO0FBQ2pCO0FBQ1Y7QUFDa0I7QUFDQTtBQUNKO0FBQ0o7QUFDWTtBQUNOO0FBQ0U7QUFDZDtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrREFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFTO0FBQ2I7QUFDQSxJQUFJLDJFQUFPO0FBQ1g7QUFDQSxJQUFJLG1GQUFlO0FBQ25CO0FBQ0EsSUFBSSxnRkFBWTtBQUNoQix1QkFBdUIsbUVBQVk7QUFDbkMsWUFBWSxpRUFBVztBQUN2QixZQUFZLHVFQUFjO0FBQzFCLFlBQVksdURBQU07QUFDbEIsWUFBWSx3RUFBYztBQUMxQixZQUFZLDZEQUFTO0FBQ3JCLFlBQVksK0RBQVU7QUFDdEIsWUFBWSw2REFBUztBQUNyQixZQUFZLDZEQUFTO0FBQ3JCLFlBQVksMkVBQWdCO0FBQzVCLFlBQVksZ0ZBQWtCO0FBQzlCLFlBQVkscUVBQWE7QUFDekIsWUFBWSxvRUFBWTtBQUN4QixZQUFZLG9FQUFZO0FBQ3hCLFlBQVksMEVBQWU7QUFDM0IsWUFBWSw0RUFBZ0I7QUFDNUIsWUFBWSw0RUFBZ0I7QUFDNUIsWUFBWSwwREFBTztBQUNuQixZQUFZLDRFQUFnQjtBQUM1QixZQUFZLDhEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2R0E7QUFBeUc7QUFDbEc7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsZ0NBQWdDLDJFQUFvQjtBQUNwRCx3Q0FBd0MscUVBQWMsTUFBTSxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyRUFBb0I7QUFDckQseUNBQXlDLHFFQUFjLE1BQU0sU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3hDRDtBQUFBO0FBQXNDO0FBQ2tCO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0QsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkRBQVE7QUFDaEUsc0ZBQXNGLDJCQUEyQjtBQUNqSCxzQ0FBc0MscUVBQWMsTUFBTSxRQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUEwQztBQUNPO0FBQ0E7QUFDMUM7QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUVBQVU7QUFDckU7QUFDQSxnQkFBZ0Isa0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNkO0FBQ0Y7QUFDTTtBQUNOO0FBQ1U7QUFDRjtBQUNOO0FBQ0c7QUFDSztBQUNJO0FBQ0Y7QUFDOEI7QUFDakM7QUFDVDtBQUNVO0FBQ1o7QUFDZ0I7QUFDM0M7QUFDUCxXQUFXLG1FQUFVO0FBQ3JCLGVBQWUsOERBQVc7QUFDMUIsY0FBYyw2REFBVTtBQUN4QixrQkFBa0IsaUVBQWM7QUFDaEMsWUFBWSwyREFBUTtBQUNwQixrQkFBa0Isd0VBQWM7QUFDaEMsV0FBVyw4REFBTztBQUNsQixZQUFZLDJEQUFRO0FBQ3BCLFlBQVksbUVBQWdCO0FBQzVCLGdCQUFnQiwrREFBUTtBQUN4QixpQkFBaUIsc0VBQWE7QUFDOUIsZUFBZSxpRUFBVztBQUMxQixrQkFBa0IsbUVBQVU7QUFDNUIsWUFBWSxtRUFBVTtBQUN0QixhQUFhLHlEQUFLO0FBQ2xCLGFBQWEseURBQUs7QUFDbEIsWUFBWSwwREFBSztBQUNqQixhQUFhLDBEQUFLO0FBQ2xCLGFBQWEsb0VBQVU7QUFDdkIsY0FBYyxvRUFBVTtBQUN4QixpQkFBaUIsb0VBQVU7QUFDM0Isa0JBQWtCLG9FQUFVO0FBQzVCLFlBQVksd0RBQUk7QUFDaEIsWUFBWSx3RUFBWTtBQUN4QixFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLDJEQUFRO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUVBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0EscUVBQXFFLDRFQUE0RSxFQUFFO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUMzSkQ7QUFBQTtBQUFvRTtBQUM3RDtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBLG9CQUFvQixxRUFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFFQUFjO0FBQzFDLHlCQUF5QixpRUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEMscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUF1STtBQUMxRjtBQUN0QztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsMENBQTBDLHFEQUFLO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQWE7QUFDakQseUNBQXlDLHFEQUFLO0FBQzlDO0FBQ0E7QUFDQSx1QkFBdUIscUVBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5RUFBa0I7QUFDOUMsNEJBQTRCLHlFQUFrQjtBQUM5Qyw0QkFBNEIseUVBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2Qyx5QkFBeUIsb0VBQWE7QUFDdEMsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEMsMEJBQTBCLG9FQUFhO0FBQ3ZDLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0EsbUdBQW1HLDJCQUEyQjtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0Esc0dBQXNHLDJCQUEyQjtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFhO0FBQzFDLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRSxxREFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0VBQWE7QUFDaEQsd0NBQXdDLHFEQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG9FQUFhO0FBQ2xELDBDQUEwQyxxREFBSztBQUMvQztBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrRUFBVSxDQUFDLHFEQUFLLGNBQWMscURBQUs7QUFDakU7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLCtDQUErQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkMsa0NBQWtDLHFEQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixrRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QyxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxtRUFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0Msc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkJBQTZCLHFFQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0Msc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBZSxlQUFlLDJEQUFZO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHVCQUF1QixRQUFRLEVBQUU7QUFDbkYsS0FBSyxFQUFFLHFEQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdjQTtBQUFBO0FBQUE7QUFBQTtBQUFxRTtBQUNwQztBQUMxQjtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixJQUFJLG1FQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ3JEQTtBQUFBO0FBQXdDO0FBQ2pDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSw0QkFBNEI7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw0QkFBNEI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVOQTtBQUFBO0FBQW9GO0FBQzdFO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFhO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxrRUFBVztBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1GQUFtRiwyQkFBMkIsNERBQTRELDJCQUEyQjtBQUNyTTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFjO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUdBQW1HLDJCQUEyQiwrREFBK0QsMkJBQTJCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYztBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlRQTtBQUFBO0FBQXVEO0FBQ2hEO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLG1DQUFtQztBQUNySTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0cscUNBQXFDO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBK0Y7QUFDekQ7QUFDL0I7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZFQUFzQiwwREFBMEQsMERBQVU7QUFDL0cscUJBQXFCLDZFQUFzQiw0REFBNEQsMERBQVU7QUFDakgscUJBQXFCLDZFQUFzQiwyREFBMkQsMERBQVU7QUFDaEgscUJBQXFCLDZFQUFzQixvREFBb0QsMERBQVU7QUFDekcscUJBQXFCLDZFQUFzQix5REFBeUQsMERBQVU7QUFDOUc7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwREFBVSxXQUFXLDBEQUFVO0FBQ2xFLHlCQUF5Qiw2RUFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxRUFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYyxrQ0FBa0MscURBQXFEO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSTtBQUNsRztBQUNNO0FBQ1c7QUFDVTtBQUNyRDtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkJBQTJCLDhFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEVBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkRBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLHFFQUFjLCtEQUErRCxtQ0FBbUMscURBQXFELHFDQUFxQztBQUMxTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjLENBQUMsc0VBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxRUFBYywyQ0FBMkMsMkJBQTJCO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWMsbUZBQW1GLDJCQUEyQjtBQUMzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWMsb0NBQW9DLDJCQUEyQjtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUM3V0E7QUFBQTtBQUF1RTtBQUNoRTtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDc0k7QUFDaEc7QUFDYTtBQUM1QztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxzQkFBc0Isa0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlFQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRFQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSwwQkFBMEIsdUVBQWM7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpRUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFhO0FBQ3BDLGlCQUFpQixxRUFBYztBQUMvQix5QkFBeUIsMERBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFhO0FBQ3BDLGlCQUFpQixxRUFBYztBQUMvQiwrREFBK0QsMERBQVUsV0FBVywwREFBVTtBQUM5RjtBQUNBLGVBQWUscUVBQWMsS0FBSyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ2pDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUEwRztBQUN4RDtBQUMzQztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBLHFCQUFxQixxRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWMsdUNBQXVDLHFEQUFxRCxtREFBbUQscURBQXFEO0FBQzdPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWMsdUNBQXVDLHFEQUFxRCxtREFBbUQscURBQXFEO0FBQzdPO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0RUFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0Esa0NBQWtDLGlFQUFVO0FBQzVDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxzRUFBYSwwQkFBMEIsc0VBQWE7QUFDN0c7QUFDQTtBQUNBLFFBQVEsc0VBQWEsNEJBQTRCLHNFQUFhO0FBQzlEO0FBQ0E7QUFDQSxXQUFXLHNFQUFhLHVDQUF1QyxzRUFBYTtBQUM1RTs7Ozs7Ozs7QUM1SkE7QUFBQTtBQUFBO0FBQWtHO0FBQ25EO0FBQ3hDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBVTtBQUN6QyxpQ0FBaUMscUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQzdHQTtBQUFBO0FBQUE7QUFBOEw7QUFDN0o7QUFDMUI7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQywrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCLHFFQUFjO0FBQzVDLGlDQUFpQyx3RUFBaUI7QUFDbEQsaUNBQWlDLHdFQUFpQjtBQUNsRCwyQkFBMkIsOENBQThDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixzRUFBZTtBQUMzQztBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEVBQW1CO0FBQ3hDO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQyw2QkFBNkIsMEVBQW1CO0FBQ2hELDZCQUE2QiwwRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBFQUFtQjtBQUM1Qyx5QkFBeUIsMEVBQW1CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEVBQW1CO0FBQzdDLDBCQUEwQiwwRUFBbUI7QUFDN0MsS0FBSztBQUNMLG9CQUFvQiw2RUFBc0I7QUFDMUM7QUFDQSxvQkFBb0IsNkVBQXNCO0FBQzFDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDLGdDQUFnQyxxREFBSztBQUNyQztBQUNBO0FBQ0EsaUNBQWlDLHlFQUFrQjtBQUNuRDtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFrQiw0QkFBNEIseUVBQWtCO0FBQ2hGO0FBQ0E7QUFDQSw4QkFBOEIseUVBQWtCLG9CQUFvQix5RUFBa0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RTtBQUNBLDBHQUEwRyx5RUFBa0IsV0FBVyx5RUFBa0I7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyx5RUFBa0IsV0FBVyx5RUFBa0I7QUFDako7QUFDQSxRQUFRLGtFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCLHNFQUFlO0FBQzNDOzs7Ozs7OztBQzlMQTtBQUFBO0FBQUE7QUFBNEo7QUFDM0g7QUFDMUI7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBVTtBQUN6QyxpQ0FBaUMscUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpRUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQywrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixzRUFBZTtBQUMzQztBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUMsNkJBQTZCLDBFQUFtQjtBQUNoRCw2QkFBNkIsMEVBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwRUFBbUI7QUFDNUMseUJBQXlCLDBFQUFtQjtBQUM1QztBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBSztBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQywrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBFQUFtQjtBQUM3QywwQkFBMEIsMEVBQW1CO0FBQzdDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckMsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFrQiw0QkFBNEIseUVBQWtCO0FBQ2hGO0FBQ0E7QUFDQSw4QkFBOEIseUVBQWtCLG9CQUFvQix5RUFBa0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QixzRUFBZTtBQUMzQztBQUNBOzs7Ozs7OztBQzVOQTtBQUFBO0FBQXNDO0FBQ3VEO0FBQ3RGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMkRBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDJEQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHdCQUF3QixFQUFFO0FBQ2xHLHVDQUF1QyxvRUFBYTtBQUNwRDtBQUNBO0FBQ0EsNkVBQTZFLHFFQUFjLE1BQU0sMkVBQW9CLHlCQUF5QjtBQUM5STtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0VBQWE7QUFDcEQ7QUFDQTtBQUNBLDZFQUE2RSxxRUFBYyxNQUFNLDJFQUFvQixXQUFXO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQWlJO0FBQzNGO0FBQy9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyREFBUTtBQUNsRDtBQUNBO0FBQ0EsaUJBQWlCLG9FQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUIsOEVBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMEVBQW1CO0FBQ3JELDZCQUE2QixxRUFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUVBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7OztBQ3JHQTtBQUF5RztBQUNsRztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJFQUFvQixDQUFDLG9FQUFhO0FBQ2xFLHdDQUF3QyxxRUFBYyxNQUFNLElBQUk7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFzQztBQUN3QjtBQUNOO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLDZDQUE2QywyREFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrRUFBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0VBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBd0cscURBQXFELHVHQUF1RyxxREFBcUQ7QUFDelQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdFQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLHFEQUFxRDtBQUNuSztBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0VBQVM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0VBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLHFEQUFxRDtBQUN6STtBQUNBLDhHQUE4RyxxREFBcUQ7QUFDbks7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDbEhEO0FBQUE7QUFBc0M7QUFDa0I7QUFDakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRCx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiwyQkFBMkI7QUFDakgsd0RBQXdELDJEQUFRO0FBQ2hFLHNDQUFzQyxxRUFBYyxNQUFNLFFBQVEsR0FBRyxLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBc0M7QUFDaUM7QUFDaEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9FQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwyREFBUTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RiwyQkFBMkI7QUFDbEg7QUFDQTtBQUNBLHFDQUFxQyxxRUFBYyxLQUFLLFFBQVE7QUFDaEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQzVDRDtBQUFBO0FBQUE7QUFBc0M7QUFDRTtBQUNLO0FBQ3RDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDJEQUFRO0FBQzNELHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxrRUFBUztBQUN2RixrRkFBa0Ysa0VBQVM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxrRUFBUztBQUN2RixrRkFBa0Ysa0VBQVM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxrRUFBUztBQUN2RixrRkFBa0Ysa0VBQVM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JIQTtBQUFBO0FBQXNDO0FBQ2M7QUFDN0M7QUFDUDtBQUNBLGdCQUFnQixxRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUF3QyxFQUFFO0FBQzVFO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQWdFO0FBQzVGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvQkFBb0I7QUFDOUQsc0NBQXNDLGtCQUFrQixpQ0FBaUMsVUFBVSxJQUFJLFVBQVU7QUFDakgsd0NBQXdDLHVCQUF1QjtBQUMvRDtBQUNBLCtCQUErQixpRUFBVTtBQUN6QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUM5Q0Q7QUFBQTtBQUFBO0FBQXNDO0FBQ047QUFDb0M7QUFDN0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBLGdEQUFnRCwyREFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsNENBQTRDLEVBQUU7QUFDeEg7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxRUFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsd0NBQXdDLHFEQUFLO0FBQzdDLG9DQUFvQyxxREFBSztBQUN6QztBQUNBO0FBQ0E7QUFDQSwwREFBMEQsQ0FBQyxpRUFBVSxnQkFBZ0IsRUFBRTtBQUN2RixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUMxREQ7QUFBQTtBQUFBO0FBQXFDO0FBQ0M7QUFDeUI7QUFDeEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyREFBUTtBQUNyRDtBQUNBLHlEQUF5RCwyREFBUTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1RUFBYztBQUNsQztBQUNBLGdDQUFnQyxvRUFBVztBQUMzQztBQUNBLDhFQUE4RSxvRUFBVztBQUN6RjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUNuQ0Q7QUFBZ0Y7QUFDekU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpRUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFFQUFjO0FBQ2xELCtEQUErRCxDQUFDLGlFQUFVLG1CQUFtQixFQUFFO0FBQy9GLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQXNDO0FBQ087QUFDdUI7QUFDN0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0EsUUFBUSxpRUFBVTtBQUNsQix3REFBd0QsMkRBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkRBQTZELDJEQUFRO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLDJEQUFRO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG9FQUFvRSwyREFBUTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHFEQUFxRDtBQUN4SDtBQUNBO0FBQ0EsOEVBQThFLHFEQUFxRDtBQUNuSTtBQUNBLHVDQUF1QyxxRUFBYztBQUNyRDtBQUNBO0FBQ0Esb0VBQW9FLDJEQUFRO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtFQUFTLHVDQUF1QyxrRUFBUztBQUN6RixpSEFBaUgsa0VBQVM7QUFDMUgsbUVBQW1FLHFEQUFxRDtBQUN4SCx1Q0FBdUMscUVBQWM7QUFDckQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUMvRkQ7QUFBQTtBQUFvQztBQUNFO0FBQy9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwyREFBUTtBQUM5RCxrREFBa0QsMkRBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUN2SDtBQUNOO0FBQ3NDO0FBQy9EO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkRBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDJEQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCwyREFBUTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDJEQUFRO0FBQ2hFLGdEQUFnRCxzRUFBZTtBQUMvRCx5QkFBeUIsOEVBQXVCO0FBQ2hELG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0Isc0VBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEIsaUVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwyREFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMkRBQVE7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0Isc0VBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrRUFBVztBQUMvQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBVTtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEVBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkRBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVDQUF1Qyw0RUFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLDJEQUFRO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJEQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFEQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkRBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFEQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkRBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFEQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkRBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJEQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDLHNEQUFzRCwyREFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0NBQW9DLDRFQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0NBQW9DLDRFQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDJEQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDJEQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBYSxjQUFjLHNFQUFhO0FBQ2pEO0FBQ0E7QUFDQSxRQUFRLHNFQUFhLGdCQUFnQixzRUFBYTtBQUNsRDtBQUNBO0FBQ0EsV0FBVyxzRUFBYSwyQkFBMkIsc0VBQWE7QUFDaEU7Ozs7Ozs7O0FDemRBO0FBQUE7QUFBQTtBQUFvQztBQUNFO0FBQ047QUFDekI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlFQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0JBQXNCLGlFQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ0Q7QUFDQSw2Q0FBNkMsMkRBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJEQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBSztBQUM5QjtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBNEU7QUFDdEM7QUFDL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLDJEQUFRO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBa0I7QUFDMUI7QUFDQSw2REFBNkQsMkRBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFFQUFjLElBQUksWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxRUFBYztBQUMzQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDRTtBQUNJO0FBQ25DO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCwwQ0FBMEMsMkRBQVE7QUFDbEQ7QUFDQTtBQUNBLHVDQUF1QywyREFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpRUFBVSxDQUFDLG9EQUFLO0FBQ3JELHVDQUF1QyxpRUFBVSxDQUFDLG9EQUFLO0FBQ3ZELG1DQUFtQyxpRUFBVSxDQUFDLG9EQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0RBQUs7QUFDdEQ7QUFDQTtBQUNBLGtEQUFrRCxpRUFBVSxDQUFDLG9EQUFLO0FBQ2xFLCtDQUErQyxpRUFBVSxDQUFDLG9EQUFLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlFQUFVLENBQUMsb0RBQUs7QUFDbEUsK0NBQStDLGlFQUFVLENBQUMsb0RBQUs7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNEQUFzRCx5QkFBeUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlFQUFVLENBQUMsb0RBQUs7QUFDdkQsb0NBQW9DLGlFQUFVLENBQUMsb0RBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsaUVBQVUsQ0FBQyxvREFBSztBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Ysb0RBQUs7QUFDN0YsMkVBQTJFLGlFQUFVLENBQUMsb0RBQUs7QUFDM0Ysd0VBQXdFLGlFQUFVLENBQUMsb0RBQUs7QUFDeEY7QUFDQTtBQUNBLG9FQUFvRSxpRUFBVSxDQUFDLG9EQUFLO0FBQ3BGO0FBQ0Esb0VBQW9FLGlFQUFVLENBQUMsb0RBQUs7QUFDcEY7QUFDQSxvRUFBb0UsaUVBQVUsQ0FBQyxvREFBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsaUVBQVUsQ0FBQyxvREFBSztBQUNwRjtBQUNBLG9FQUFvRSxpRUFBVSxDQUFDLG9EQUFLO0FBQ3BGO0FBQ0Esb0VBQW9FLGlFQUFVLENBQUMsb0RBQUs7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaUVBQVUsQ0FBQyxvREFBSztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQLHdEQUF3RCwyREFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNmNlYTY3ZDg2MGQ5NTNkNDAxNyIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMsIFBsYW5ldE5hbWVzLCBTeXN0ZW1OYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBTdHlsZSwgQ2F0ZWdvcnlDb2xvcnMsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShmaWxlRGF0YSwgZmlsZU5hbWUsIGlzSlNPTiA9IHRydWUpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2lzSlNPTiA/IEpTT04uc3RyaW5naWZ5KGZpbGVEYXRhKSA6IGZpbGVEYXRhXSwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IHVybEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB1cmxFbGVtZW50LnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcbiAgICB1cmxFbGVtZW50LmhyZWYgPSB1cmw7XG4gICAgdXJsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgdXJsRWxlbWVudC5jbGljaygpO1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShodG1sU3RyaW5nKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uTGFiZWw7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZWRTZWNvbmRzKSB7XG4gICAgY29uc3QgZXRhID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGV0YS5zZXRTZWNvbmRzKGV0YS5nZXRTZWNvbmRzKCkgKyBwYXJzZWRTZWNvbmRzKTtcbiAgICBjb25zdCBkaWZmVGltZSA9IE1hdGguYWJzKGV0YS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKTtcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGxldCByZXQgPSBldGEudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgaWYgKGRpZmZEYXlzID4gMCkge1xuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZGF5cyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqZC8pO1xuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XG4gICAgY29uc3QgbWludXRlcyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqbS8pO1xuICAgIGNvbnN0IHNlY29uZHMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKnMvKTtcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChkYXlzWzFdKSAqIDg2NDAwO1xuICAgIH1cbiAgICBpZiAoaG91cnMpIHtcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChob3Vyc1sxXSkgKiAzNjAwO1xuICAgIH1cbiAgICBpZiAobWludXRlcykge1xuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KG1pbnV0ZXNbMV0pICogNjA7XG4gICAgfVxuICAgIGlmIChzZWNvbmRzKSB7XG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoc2Vjb25kc1sxXSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRTZWNvbmRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbmV3U3Bhbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0RGl2KHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1NwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdTcGFuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gocHJpbWFyeVRleHQsIHNlY29uZGFyeVRleHQsIHByaW1hcnlUZXh0Q29sb3IsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImZpbi1ib3hcIik7XG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMVwiO1xuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XG4gICAgcHJpbWFyeVRleHRTcGFuLnRleHRDb250ZW50ID0gcHJpbWFyeVRleHQ7XG4gICAgYm94LmFwcGVuZENoaWxkKHByaW1hcnlUZXh0U3Bhbik7XG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi50ZXh0Q29udGVudCA9IHNlY29uZGFyeVRleHQ7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjJweFwiO1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuY29sb3IgPSBcIiM5OTlcIjtcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XG4gICAgcmV0dXJuIGJveDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCdXJuQW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XG4gICAgaWYgKCFNYXRlcmlhbE5hbWVzW2FdIHx8ICFNYXRlcmlhbE5hbWVzW2JdKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gTWF0ZXJpYWxOYW1lc1thXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbYl1bMV0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCAhcGxhbmV0KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XSAmJiBQbGFuZXROYW1lc1twbGFuZXRdLnRvTG93ZXJDYXNlKCkgPT0gZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmFzZU5hbWUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLVpdezJ9LVswLTldezN9IFthLXpdKSBCYXNlLyk7XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdLnJlcGxhY2UoXCIgXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCAoW0EteiBdKikgLSAoW0EteiBdKikgQmFzZS8pO1xuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0pIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLXogXSopIChbQS16XSkgQmFzZS8pO1xuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0gJiYgU3lzdGVtTmFtZXNbbWF0Y2hbMV0udG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW1OYW1lc1ttYXRjaFsxXS50b1VwcGVyQ2FzZSgpXSArIG1hdGNoWzJdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIFtBLVpdezJ9LVswLTldezN9IC0gKFtBLXogXSopIEJhc2UvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW52TmFtZSh0ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGxhbmV0TmFtZSh0ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9cXCgoLio/KVxcKS8pO1xuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKHN0b3JhZ2VOYW1lLCBjYWxsYmFja0Z1bmN0aW9uLCBwYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VOYW1lKS50aGVuKGNhbGxiYWNrRnVuY3Rpb24ocGFyYW1zKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtzdG9yYWdlTmFtZV0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNldHRpbmdzKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBjYWxsYmFja0Z1bmN0aW9uLCB1cmwsIHJlcXVlc3RUeXBlID0gXCJHRVRcIiwgaGVhZGVyLCBjb250ZW50KSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBEYXRhIENvdWxkIE5vdCBCZSBMb2FkZWQhIFRpbWVkIE91dCFcIjtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHRpbGUsIHBhcmFtZXRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIsIGFtb3VudCA9IFwibm9uZVwiLCB0ZXh0ID0gZmFsc2UsIHNtYWxsID0gZmFsc2UpIHtcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyXSAmJiB0aWNrZXIgIT0gXCJTSFBUXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFtcIlNoaXBtZW50XCJdKVswXTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW3VuZGVmaW5lZCwgXCJzaGlwbWVudFwiXSlbMV07XG4gICAgY29uc3QgbWF0VGV4dCA9IGNyZWF0ZVRleHRTcGFuKHRpY2tlciwgY2xhc3NOYW1lKTtcbiAgICBtYXRUZXh0LmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0KSk7XG4gICAgY29uc3QgbWF0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0V3JhcHBlcikpO1xuICAgIG1hdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG1hdFRleHQpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbC5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxFbGVtZW50KSk7XG4gICAgbWF0ZXJpYWwuYXBwZW5kQ2hpbGQobWF0VGV4dFdyYXBwZXIpO1xuICAgIG1hdGVyaWFsLnN0eWxlLmJhY2tncm91bmQgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMF07XG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMV07XG4gICAgbWF0ZXJpYWwudGl0bGUgPSBuYW1lO1xuICAgIG1hdGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdWZmZXIoXCJNQVQgXCIgKyB0aWNrZXIudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxXcmFwcGVyV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxXcmFwcGVyKTtcbiAgICBjb25zdCBvdXRlckxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlckxheWVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE91dGVyKSk7XG4gICAgb3V0ZXJMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgb3V0ZXJMYXllci5hcHBlbmRDaGlsZChtYXRlcmlhbFdyYXBwZXJXcmFwcGVyKTtcbiAgICBpZiAoYW1vdW50ICYmIGFtb3VudCAhPSBcIm5vbmVcIikge1xuICAgICAgICBjb25zdCBtYXRlcmlhbE51bWJlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXRlcmlhbE51bWJlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyV3JhcHBlcikpO1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxOdW1iZXJXcmFwcGVyKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxOdW1iZXIgPSBjcmVhdGVUZXh0RGl2KGFtb3VudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgbWF0ZXJpYWxOdW1iZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyKSk7XG4gICAgICAgIG1hdGVyaWFsTnVtYmVyV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbE51bWJlcik7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTmFtZVRleHQpKTtcbiAgICAgICAgY29uc3QgdGV4dEVsZW0gPSBjcmVhdGVUZXh0U3BhbihuYW1lLCBjbGFzc05hbWUpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xuICAgICAgICBvdXRlckxheWVyLmFwcGVuZENoaWxkKHRleHRFbGVtV3JhcHBlcik7XG4gICAgfVxuICAgIGlmIChzbWFsbCkge1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hdC1lbGVtZW50LXNtYWxsXCIpO1xuICAgICAgICByZXR1cm4gbWF0ZXJpYWxXcmFwcGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYXQtZWxlbWVudC1sYXJnZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dGVyTGF5ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rRGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XG4gICAgaWYgKGJ1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xuICAgIH07XG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XG4gICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgdmFyIHByb3BEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3dbXCJIVE1MSW5wdXRFbGVtZW50XCJdLnByb3RvdHlwZSwgXCJ2YWx1ZVwiKTtcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XG4gICAgaWYgKG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF0aXZlSW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XG4gICAgdmFyIGlucHV0RXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBpbnB1dEV2ZW50LmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCB0cnVlKTtcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xufVxuZnVuY3Rpb24gbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoc2VsZWN0b3IsIGNhbGxiYWNrLCBvbmx5T25jZSA9IHRydWUpIHtcbiAgICBjb25zdCBnZXRFbGVtZW50c0Zyb21Ob2RlcyA9IChub2RlcykgPT4gKEFycmF5LmZyb20obm9kZXMpKS5mbGF0TWFwKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG51bGwgOiBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICBsZXQgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gfHwgd2luZG93W1wiV2ViS2l0TXV0YXRpb25PYnNlcnZlclwiXTtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljVW5oaWRlKGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUgKyBcIi1oaWRkZW5cIikpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSArIFwiLWhpZGRlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRlZENsZWFudXAoY2xhc3NOYW1lLCBlbGVtZW50KSB7XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoYnVmZmVyQ29kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgodHJhbnNsYXRlKC4sICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicpLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAobm9kZSA9IG5vZGVzLml0ZXJhdGVOZXh0KCkpIHtcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5WFBhdGgoeHBhdGgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZSh4cGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFLCBudWxsKTtcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcbiAgICB2YXIgc29ydGVyID0gW107XG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuWzFdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gcm93c1tpXS5jaGlsZHJlbltjb2x1bW5dO1xuICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzb3J0ZXIucHVzaChbaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50LCByb3dzW2ldXSk7XG4gICAgfVxuICAgIGlmIChzb3J0VHlwZSA9PSBcImFscGhcIikge1xuICAgICAgICBzb3J0ZXIuc29ydCh0YWJsZVNvcnRBbHBoKTtcbiAgICB9XG4gICAgc29ydGVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRhYmxlLmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgaXRlbVsxXSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0YWJsZVNvcnRBbHBoKGEsIGIpIHtcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRpbGUsIGhlYWRlcnMpIHtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgICByZXR1cm4gdGJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbFRpcCh0ZXh0LCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGA8c3BhbiBkYXRhLXRvb2x0aXA9XCIke3RleHR9XCIgZGF0YS10b29sdGlwLXBvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIiBjbGFzcz1cImtmVTc4RWFhT1ZiUVIyWU0wZWVHZXc9PVwiIHN0eWxlPVwiZmxvYXQ6IHJldmVydDtmb250LXNpemU6IDEycHg7bWFyZ2luLXRvcDotNHB4O1wiPuKTmDwvc3Bhbj5gO1xuICAgIHJldHVybiB0b29sdGlwLmZpcnN0Q2hpbGQgfHwgdG9vbHRpcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wdXBTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNwYWNlcik7XG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIHNwYWNlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cElucHV0Um93KGxhYmVsLCB0ZXh0ID0gXCJcIiwgdG9vbHRpcCA9IFwiXCIpIHtcbiAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBpZiAodG9vbHRpcCAhPSBcIlwiKSB7XG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcbiAgICB9XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgY29uc3QgaW5wdXRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XG4gICAgY29uc3QgaW5wdXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dElucHV0LnN0eWxlLndpZHRoID0gXCI4MCVcIjtcbiAgICBpbnB1dElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0SW5wdXQpO1xuICAgIGlucHV0SW5wdXQudmFsdWUgPSB0ZXh0O1xuICAgIHJldHVybiBpbnB1dFJvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cENoZWNrYm94Um93KGxhYmVsLCBlbmFibGVkID0gZmFsc2UsIHRvb2x0aXAgPSBcIlwiKSB7XG4gICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xuICAgICAgICBpbnB1dExhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAodG9vbHRpcCwgXCJyaWdodFwiKSk7XG4gICAgfVxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGNvbnN0IGlucHV0SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0SW5wdXREaXYpO1xuICAgIGNvbnN0IGlucHV0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dCk7XG4gICAgaW5wdXRJbnB1dC5jaGVja2VkID0gZW5hYmxlZDtcbiAgICByZXR1cm4gaW5wdXRSb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVPZlBvcHVwUm93KHJvdykge1xuICAgIGlmICghcm93IHx8ICFyb3cuY2hpbGRyZW5bMV0gfHwgIXJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkLnZhbHVlIHx8IFwiXCI7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrT2ZQb3B1cFJvdyhyb3cpIHtcbiAgICBpZiAoIXJvdyB8fCAhcm93LmNoaWxkcmVuWzFdIHx8ICFyb3cuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxCdXR0b24obGFiZWwsIGNsaWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNtYWxsQnV0dG9uKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgY2xpY2tGdW5jdGlvbiguLi5wYXJhbWV0ZXJzKTsgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250cmFjdERpY3QoY29udHJhY3RzLCB1c2VybmFtZSwgY29udHJhY3RkaWN0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cmFjdHNbdXNlcm5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb250cmFjdHNbdXNlcm5hbWVdW2ldO1xuICAgICAgICBjb250cmFjdGRpY3RbZWxlbWVudFsnQ29udHJhY3RMb2NhbElkJ11dID0gZWxlbWVudDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlsLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBMTUNvbW1vZGl0eUFkVGV4dDogXCJkaXZbY2xhc3N+PSdDb21tb2RpdHlBZF9fdGV4dF9fX3hKUW1KTmEnXVwiLFxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ10gPiBzcGFuXCIsXG4gICAgUHJvZEl0ZW06IFwiT3JkZXJTbG90X19jb250YWluZXJfX19ZRnlrOGE3XCIsXG4gICAgUHJvZFF1ZXVlVGFibGU6IFwidGFibGVbY2xhc3N+PSdQcm9kdWN0aW9uUXVldWVfX3RhYmxlX19fakhRR3lVSSddXCIsXG4gICAgQnVmZmVySGVhZGVyOiAnVGlsZUZyYW1lX19jbWRfX19TY0JZVzBuIHR5cGVfX3R5cGUtdmVyeS1zbWFsbF9fX0hhVk1xckUnLFxuICAgIFNpZGViYXI6IFwiZGl2I1RPVVJfVEFSR0VUX1NJREVCQVJfUklHSFRcIixcbiAgICBMTVBvc3RGb3JtOiBcImZvcm1bY2xhc3N+PSdMb2NhbE1hcmtldFBvc3RfX2Zvcm1fX19DQVZQZERFJ11cIixcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcImRpdltjbGFzc349J1RpbGVGcmFtZV9fdGl0bGVfX194UmNaQ1B4J11cIixcbiAgICBYSVRUaWxlOiBcImRpdltjbGFzc349J1Njcm9sbFZpZXdfX3ZpZXdfX19vdmY1OVRrJ10gPiBkaXZcIixcbiAgICBCdWZmZXJUaXRsZTogXCJkaXZbY2xhc3N+PSdUaWxlRnJhbWVfX3RpdGxlX19feFJjWkNQeCddXCIsXG4gICAgTm90aWZpY2F0aW9uOiBcImRpdltjbGFzc349J0FsZXJ0TGlzdEl0ZW1fX2NvbnRhaW5lcl9fX202ZUgySngnXVwiLFxuICAgIFByb2RRdWV1ZTogXCJkaXZbY2xhc3N+PSdTaXRlUHJvZHVjdGlvbkxpbmVzX19jb2x1bW5fX19fczNjVGs3J11cIixcbiAgICBCdWZmZXJQYW5lbDogXCJkaXZbY2xhc3N+PSdTY3JvbGxWaWV3X192aWV3X19fb3ZmNTlUayddXCIsXG4gICAgTmV3QkZSQnV0dG9uOiBcIlRPVVJfVEFSR0VUX0JVVFRPTl9CVUZGRVJfTkVXXCIsXG4gICAgV2hvbGVXaW5kb3c6IFwiI2NvbnRhaW5lclwiLFxuICAgIEJ1ZmZlclRleHRGaWVsZDogXCJpbnB1dFtjbGFzc349J1BhbmVsU2VsZWN0b3JfX2lucHV0X19fd1VzdEhyTyddXCIsXG4gICAgQnVmZmVyTGlzdDogXCIjY29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgzKVwiLFxuICAgIFNjcmVlbkNvbnRyb2xzOiBcIlRPVVJfVEFSR0VUX1NDUkVFTl9DT05UUk9MU1wiLFxuICAgIExlZnRTaWRlYmFyOiBcIlRPVVJfVEFSR0VUX1NJREVCQVJfTEVGVF8wMlwiLFxuICAgIEJ1ZmZlckFyZWE6IFwiZGl2W2NsYXNzfj0nVGlsZV9fc2VsZWN0b3JfX19IWU1tTkVPJ11cIixcbiAgICBTY3JlZW5OYW1lOiBcInNwYW5bY2xhc3N+PSdTY3JlZW5Db250cm9sc19fY3VycmVudFNjcmVlbk5hbWVfX19JMnNJWWFnJ11cIixcbiAgICBNYXRlcmlhbEljb246IFwiR3JpZEl0ZW1WaWV3X19pbWFnZV9fX3lNb0tPWlZcIixcbiAgICBDaGF0TGluazogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxuICAgIEludmVudG9yeU5hbWU6IFwic3BhbltjbGFzc349J0xpbmtfX2xpbmtfX19mYTRtbU1BJ11cIixcbiAgICBGdWxsTWF0ZXJpYWxJY29uOiBcImRpdltjbGFzc349J0dyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OCddXCIsXG4gICAgSW52ZW50b3J5OiBcImRpdltjbGFzc349J0ludmVudG9yeVZpZXdfX2dyaWRfX19VeVJRU1g4J11cIixcbiAgICBNYXRlcmlhbFRleHQ6IFwic3BhbltjbGFzc349J0NvbG9yZWRJY29uX19sYWJlbF9fX09VMUk0b1AnXVwiLFxuICAgIEludmVudG9yeVNvcnRPcHRpb25zOiBcImRpdltjbGFzc349J0ludmVudG9yeVNvcnRDb250cm9sc19fY29udHJvbHNfX19xazVoZUFaJ11cIixcbiAgICBDaGF0QXJlYTogXCJkaXZbY2xhc3N+PSdDaGFubmVsX19tZXNzYWdlQW5kVXNlckxpc3RfX19OQ2dRQXRXJ11cIixcbiAgICBNYXRlcmlhbFF1YW50aXR5OiBcImRpdltjbGFzc349J01hdGVyaWFsSWNvbl9faW5kaWNhdG9yX19fU0h3bG5kSiddXCIsXG4gICAgSGVhZGVyUm93OiBcImRpdltjbGFzc349J0Zvcm1Db21wb25lbnRfX2NvbnRhaW5lclBhc3NpdmVfX19GckJkeUdVJ11cIixcbiAgICBGb3JtSW5wdXRSb3c6IFwiZGl2W2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZCddXCIsXG4gICAgQ29udERGb3JtOiBcImRpdltjbGFzc349J0RyYWZ0Q29uZGl0aW9uRWRpdG9yX19mb3JtX19fZkY3MmJKTSddID4gZm9ybVwiLFxuICAgIENvbnREQ29uZGl0aW9uc1RhYmxlOiBcImRpdltjbGFzc349J0RyYWZ0X19jb25kaXRpb25zX19fYmNJVW5kSCddID4gdGFibGUgPiB0Ym9keVwiLFxuICAgIENvbnRERm9ybUxhYmVsOiBcImxhYmVsW2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fbGFiZWxfX19hUUIxNWVCJ11cIixcbiAgICBDb250REZvcm1Sb3dTcGFjZXI6IFwiZGl2W2NsYXNzfj0nRHluYW1pY0lucHV0X19keW5hbWljX19fQ2Q0R2tieiddXCIsXG4gICAgU2lkZWJhckNvbnRyYWN0OiBcImRpdltjbGFzc349J1NpZGViYXJfX2NvbnRyYWN0X19fSjBnbWx6TiddXCIsXG4gICAgU2lkZWJhckNvbnRyYWN0SWQ6IFwic3BhbltjbGFzc349J1NpZGViYXJfX2NvbnRyYWN0SWRfX19MZzg1VFJaJ11cIixcbiAgICBCdWlsZGluZ0xpc3Q6IFwiZGl2W2NsYXNzfj0nU2VjdGlvbkxpc3RfX2NvbnRhaW5lcl9fX0V0VXpXeWknXVwiLFxuICAgIERpdmlkZXI6IFwiZGl2W2NsYXNzfj0nU2VjdGlvbkxpc3RfX2RpdmlkZXJfX19jd1dPNDV2J11cIlxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NlbGVjdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTdHlsZSA9IHtcbiAgICBCdXR0b246IFtcIkJ1dHRvbl9fYnRuX19fVUpHWjFiN1wiXSxcbiAgICBCdXR0b25QcmltYXJ5OiBbXCJCdXR0b25fX3ByaW1hcnlfX19fbE9iUGl3XCJdLFxuICAgIEJ1dHRvblN1Y2Nlc3M6IFtcIkJ1dHRvbl9fc3VjY2Vzc19fX2JDaUlWWHdcIl0sXG4gICAgQnV0dG9uRGlzYWJsZWQ6IFtcIkJ1dHRvbl9fZGlzYWJsZWRfX19feDhpN1hGXCJdLFxuICAgIEJ1dHRvbkVuYWJsZWQ6IFtcIkJ1dHRvbl9fcHJpbWFyeV9fX19sT2JQaXdcIl0sXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJCdXR0b25fX2Rhbmdlcl9fX1MyclNPRVNcIl0sXG4gICAgU21hbGxCdXR0b246IFtcIkJ1dHRvbl9fZGFya0lubGluZV9fX3pfWUthOTFcIiwgXCJCdXR0b25fX2RhcmtfX192ZEpiY2M4XCIsIFwiQnV0dG9uX19idG5fX19VSkdaMWI3XCIsIFwiQnV0dG9uX19pbmxpbmVfX19GZnc5YmJuXCJdLFxuICAgIFNpZGViYXJTZWN0aW9uSGVhZDogW1wiU2lkZWJhcl9fc2VjdGlvbkhlYWRfX19fTkhMS0RUXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIl0sXG4gICAgU2lkZWJhclNlY3Rpb25Db250ZW50OiBbXCJTaWRlYmFyX19zZWN0aW9uQ29udGVudF9fX3dnR1lGb3BcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiXSxcbiAgICBTaWRlYmFyTGluZTogW1wiU2lkZWJhcl9fY29udHJhY3RfX19KMGdtbHpOXCIsIFwiU2lkZWJhcl9fc2lkZWJhci1saW5lX19fYkUycmJSYlwiXSxcbiAgICBGb250c1JlZ3VsYXI6IFtcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxuICAgIFNpZGViYXJUZXh0OiBbXCJGcmFtZV9fdG9nZ2xlTGFiZWxfX19CVEZjZThIXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxuICAgIFNpZGViYXJTbGl2ZXI6IFtcIkZyYW1lX190b2dnbGVJbmRpY2F0b3JTZWNvbmRhcnlfX19mclg0Q0dpXCIsIFwiRnJhbWVfX3RvZ2dsZUluZGljYXRvcl9fX1pLUVFnQUxcIl0sXG4gICAgU2lkZWJhckJ1dHRvbjogW1wiRnJhbWVfX3RvZ2dsZV9fX1YzaUhwQjdcIl0sXG4gICAgQ29udHJhY3RMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXG4gICAgQ29udHJhY3ROYW1lOiBbXCJ6aGl4cDQwOFlGMDgySXpBNUtQdmZBPT1cIl0sXG4gICAgQ29udHJhY3RWaWV3OiBbXCJrcTVCckdLblRVVHFDRFlNcExROTBnPT1cIl0sXG4gICAgUmFkaW9CdXR0b246IFtcIlJhZGlvSXRlbV9fY29udGFpbmVyX19fQ1NjenFtR1wiXSxcbiAgICBTZXR0aW5nc0J1dHRvbjogW1wiUmFkaW9JdGVtX19jb250YWluZXJfX19DU2N6cW1HXCIsIFwiUmFkaW9JdGVtX19jb250YWluZXJIb3Jpem9udGFsX19fX3RybFhEb1wiXSxcbiAgICBSYWRpb0J1dHRvblVuVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCJdLFxuICAgIFNldHRpbmdzQmFyVW50b2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2luZGljYXRvckhvcml6b250YWxfX19Td3R3VEloXCJdLFxuICAgIFJhZGlvQnV0dG9uVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCIsIFwiUmFkaW9JdGVtX19hY3RpdmVfX19DRHNjT1FWXCIsIFwiZWZmZWN0c19fc2hhZG93UHJpbWFyeV9fX0ViWEpRb3JcIl0sXG4gICAgU2V0dGluZ3NCYXJUb2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2luZGljYXRvckhvcml6b250YWxfX19Td3R3VEloXCIsIFwiUmFkaW9JdGVtX19hY3RpdmVfX19DRHNjT1FWXCIsIFwiZWZmZWN0c19fc2hhZG93UHJpbWFyeV9fX0ViWEpRb3JcIl0sXG4gICAgUmFkaW9CdXR0b25WYWx1ZTogW1wiUmFkaW9JdGVtX192YWx1ZV9fX1lkMUd0MVRcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtc21hbGxfX19wTVFoTVFPXCJdLFxuICAgIFNldHRpbmdzVGV4dDogW1wiUmFkaW9JdGVtX192YWx1ZV9fX1lkMUd0MVRcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtc21hbGxfX19wTVFoTVFPXCIsIFwiUmFkaW9JdGVtX192YWx1ZUhvcml6b250YWxfX19ENUFYSjlQXCJdLFxuICAgIE92ZXJsYXBwaW5nRGl2OiBbXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcbiAgICBHcmV5U3RyaXBlczogW1wiT3ZlcmxheV9fYmFja2dyb3VuZF9fX2llWnBIaUZcIiwgXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcbiAgICBTcGFjZXI6IFtcIk92ZXJsYXlfX2Nsb3NlX19fYnhHb01JbFwiXSxcbiAgICBQcm9ncmVzc0JhcjogW1wiUHJvZ3Jlc3NCYXJfX3ByaW1hcnlfX19PMzBqQnFxXCIsIFwiUHJvZ3Jlc3NCYXJfX3Byb2dyZXNzX19fZWI0S2h1V1wiXSxcbiAgICBQcm9ncmVzc0JhckNvbG9yczogW1wiUHJvZ3Jlc3NCYXJfX3ByaW1hcnlfX19PMzBqQnFxXCIsIFwiZ3JleS1wcm9ncmVzcy1iYXJcIiwgXCJnb29kLXByb2dyZXNzLWJhclwiLCBcIndhcm5pbmctcHJvZ3Jlc3MtYmFyXCIsIFwiZGFuZ2VyLXByb2dyZXNzLWJhclwiXSxcbiAgICBQcm9ncmVzc0Jhckdvb2Q6IFtcImdvb2QtcHJvZ3Jlc3MtYmFyXCJdLFxuICAgIFByb2dyZXNzQmFyV2FybmluZzogW1wid2FybmluZy1wcm9ncmVzcy1iYXJcIl0sXG4gICAgUHJvZ3Jlc3NCYXJEYW5nZXI6IFtcImRhbmdlci1wcm9ncmVzcy1iYXJcIl0sXG4gICAgQ2VudGVySW50ZXJmYWNlOiBbXCJPdmVybGF5X19jaGlsZHJlbl9fX3JndFZheGNcIl0sXG4gICAgRm9ybVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZFwiLCBcImZvcm1zX19hY3RpdmVfX193bjlLUVRaXCIsIFwiZm9ybXNfX2Zvcm0tY29tcG9uZW50X19feVRnUF9RYVwiXSxcbiAgICBIZWFkZXJSb3c6IFtcIkZvcm1Db21wb25lbnRfX2NvbnRhaW5lclBhc3NpdmVfX19GckJkeUdVXCIsIFwiZm9ybXNfX3Bhc3NpdmVfX19iaVJVaUU1XCIsIFwiZm9ybXNfX2Zvcm0tY29tcG9uZW50X19feVRnUF9RYVwiXSxcbiAgICBGb3JtTGFiZWw6IFtcIkZvcm1Db21wb25lbnRfX2xhYmVsX19fYVFCMTVlQlwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbiAgICBGb3JtSW5wdXQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl0sXG4gICAgRm9ybVNhdmVSb3c6IFtcIkZvcm1Db21wb25lbnRfX2NvbnRhaW5lckNvbW1hbmRfX19CNFhMRVJmXCIsIFwiZm9ybXNfX2NtZF9fX0lNenQ3VWdcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxuICAgIEZvcm1TYXZlTGFiZWw6IFtcIkZvcm1Db21wb25lbnRfX2xhYmVsX19fYVFCMTVlQlwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbiAgICBGb3JtU2F2ZUlucHV0OiBbXCJGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWlcIiwgXCJmb3Jtc19faW5wdXRfX19BOTJfTjRKXCJdLFxuICAgIE1hdFRleHQ6IFtcIkNvbG9yZWRJY29uX19sYWJlbF9fX09VMUk0b1BcIl0sXG4gICAgTWF0VGV4dFdyYXBwZXI6IFtcIkNvbG9yZWRJY29uX19sYWJlbENvbnRhaW5lcl9fX1lWZmd6T2tcIl0sXG4gICAgTWF0ZXJpYWxFbGVtZW50OiBbXCJDb2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMlwiXSxcbiAgICBNYXRlcmlhbFdyYXBwZXI6IFtcIk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OFwiXSxcbiAgICBNYXRlcmlhbE51bWJlcldyYXBwZXI6IFtcIk1hdGVyaWFsSWNvbl9faW5kaWNhdG9yQ29udGFpbmVyX19fQ3F0YXhfWVwiXSxcbiAgICBNYXRlcmlhbE51bWJlcjogW1wiTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKXCIsIFwiTWF0ZXJpYWxJY29uX190eXBlLXZlcnktc21hbGxfX19VTXpRM2lyXCIsIFwiTWF0ZXJpYWxJY29uX19uZXV0cmFsX19fU1lzSFhBYVwiXSxcbiAgICBNYXRlcmlhbFdyYXBwZXJXcmFwcGVyOiBbXCJHcmlkSXRlbVZpZXdfX2ltYWdlX19feU1vS09aVlwiXSxcbiAgICBNYXRlcmlhbE91dGVyOiBbXCJHcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejhcIl0sXG4gICAgTWF0ZXJpYWxOYW1lVGV4dDogW1wiR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbVwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcbn07XG5leHBvcnQgY29uc3QgV2l0aFN0eWxlcyA9ICguLi5zdHlsZSkgPT4ge1xuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcbn07XG5leHBvcnQgY29uc3QgVGV4dENvbG9ycyA9IHtcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcbiAgICBTdWNjZXNzOiBcIiM1Y2I4NWNcIixcbiAgICBTdGFuZGFyZDogXCIjYmJiYmJiXCIsXG4gICAgWWVsbG93OiBcIiNmN2E2MDBcIlxufTtcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbG9ycyA9IHtcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXG4gICAgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUsIDMwLCA5OCksIHJnYig0MCwgNTUsIDEyMykpXCIsIFwicmdiKDE0MiwgMTU3LCAyMjUpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSwgMjYsIDc2KSwgcmdiKDc2LCA1MSwgMTAxKSlcIiwgXCJyZ2IoMTc4LCAxNTMsIDIwMylcIl0sXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxuICAgIFwiY29uc3RydWN0aW9uIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MSwgNzcsIDEwNyksIHJnYig2NiwgMTAyLCAxMzIpKVwiLCBcInJnYigxNjgsIDIwNCwgMjM0KVwiXSxcbiAgICBcInNoaXAgZW5naW5lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA0MSwgMCksIHJnYigxNzgsIDY2LCAyNSkpXCIsIFwicmdiKDI1NSwgMTY4LCAxMjcpXCJdLFxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcbiAgICBcIm1ldGFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTQsIDU0LCA1NCksIHJnYig3OSwgNzksIDc5KSlcIiwgXCJyZ2IoMTgxLCAxODEsIDE4MSlcIl0sXG4gICAgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAyNCwgMzkpLCByZ2IoMTYxLCA0OSwgNjQpKVwiLCBcInJnYigyNTUsIDE1MSwgMTY2KVwiXSxcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxuICAgIFwib3Jlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDg3LCA5NyksIHJnYigxMDcsIDExMiwgMTIyKSlcIiwgXCJyZ2IoMjA5LCAyMTQsIDIyNClcIl0sXG4gICAgXCJnYXNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMTA1LCAxMDcpLCByZ2IoMjUsIDEzMCwgMTMyKSlcIiwgXCJyZ2IoMTI3LCAyMzIsIDIzNClcIl0sXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcbiAgICBcImFsbG95c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIzLCA3NiwgMzApLCByZ2IoMTQ4LCAxMDEsIDU1KSlcIiwgXCJyZ2IoMjUwLCAyMDMsIDE1NylcIl0sXG4gICAgXCJjaGVtaWNhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDIwOCwgNzEsIDExNikpXCIsIFwicmdiKDI1NSwgMTczLCAyMTgpXCJdLFxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBwaWVjZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExOSwgODIsIDE4OSksIHJnYigxNDQsIDEwNywgMjE0KSlcIiwgXCJyZ2IoMjQ2LCAyMDksIDI1NSlcIl0sXG4gICAgXCJlbGVtZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjEsIDQ2LCAzMiksIHJnYig4NiwgNzEsIDU3KSlcIiwgXCJyZ2IoMTg4LCAxNzMsIDE1OSlcIl0sXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxuICAgIFwidW5pdCBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyOSwgMjcsIDI4KSwgcmdiKDU0LCA1MiwgNTMpKVwiLCBcInJnYigxNTYsIDE1NCwgMTU1KVwiXSxcbiAgICBcImxpcXVpZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNCwgMTY0LCAyMDIpLCByZ2IoMTM5LCAxODksIDIyNykpXCIsIFwicmdiKDI0MSwgMjU1LCAyNTUpXCJdLFxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxuICAgIFwiZHJvbmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDAsIDUyLCAxOCksIHJnYigxNjUsIDc3LCA0MykpXCIsIFwicmdiKDI1NSwgMTc5LCAxNDUpXCJdLFxuICAgIFwiZWxlY3Ryb25pYyBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTEsIDQ2LCAxODMpLCByZ2IoMTE2LCA3MSwgMjA4KSlcIiwgXCJyZ2IoMjE4LCAxNzMsIDI1NSlcIl0sXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcbiAgICBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI0LCA5MSwgMjExKSwgcmdiKDQ5LCAxMTYsIDIzNikpXCIsIFwicmdiKDE1MSwgMjE4LCAyNTUpXCJdLFxuICAgIFwic29mdHdhcmUgdG9vbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyOSwgOTgsIDE5KSwgcmdiKDE1NCwgMTIzLCA0NCkpXCIsIFwicmdiKDI1NSwgMjU1LCAxNDYpXCJdLFxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXG4gICAgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDksIDQ2LCA0NiksIHJnYigxNzQsIDcxLCA3MSkpXCIsIFwicmdiKDI1NSwgMTczLCAxNzMpXCJdLFxuICAgIFwiZnVlbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDU1LCAxNDgsIDU1KSlcIiwgXCJyZ2IoMTU3LCAyNTAsIDE1NylcIl0sXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxuICAgIFwic2hpcCBraXRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTQsIDg0LCAwKSwgcmdiKDE3OCwgMTA5LCAyNSkpXCIsIFwicmdiKDI1NSwgMjExLCAxMjcpXCJdLFxuICAgIFwidXRpbGl0eVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTYxLCAxNDgsIDEzNiksIHJnYigxODYsIDE3MywgMTYxKSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIl0sXG4gICAgXCJzaGlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDMwMzAzLCAjMTgxODE4KVwiLCBcIiM3ZjdmN2ZcIl1cbn07XG5leHBvcnQgY29uc3QgUE1NR1N0eWxlID0gYFxyXG4ucGItbWluaW1pemUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRtYXJnaW4tdG9wOiAxcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGItbWluaW1pemUtY3g6aG92ZXIge1xyXG5cdGNvbG9yOiAjMjYzNTNlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzZmEyZGU7XHJcbn1cclxuLnBiLW1pbmltaXplLWN4IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzNTNlO1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5wYi1taW5pbWl6ZS1zZXR0aW5nczpob3ZlciB7XHJcblx0Y29sb3I6ICNkZGQ7XHJcbn1cclxuLm1hdC1lbGVtZW50LWxhcmdlIHtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDQ4cHg7XHJcbn1cclxuLm1hdC1lbGVtZW50LWxhcmdlIGRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMiB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGZvbnQtc2l6ZTogMTUuODRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1lbGVtZW50LXNtYWxsIHtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0d2lkdGg6IDMycHg7XHJcbn1cclxuLmNoZWNrLXRpbWUtY29tcGxldGUge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5jaGVjay10aW1lLW92ZXJkdWUge1xyXG5cdGNvbG9yOiAjZDk1MzRmO1xyXG59XHJcbi5jaGVjay10aW1lIHtcclxuXHRjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpXHJcbn1cclxuLmNoZWNrZWQtdGV4dCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0Y29sb3I6IHJnYigxNTMsIDE1MywgMTUzKVxyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRsaW5lLWhlaWdodDogMTdweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IDAgOHB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjMjIyO1xyXG59XHJcbi5ub3Rlcy13cmFwcGVyIHRleHRhcmVhe1xyXG5cdHJlc2l6ZTogbm9uZTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGNvbG9yOiAjY2NjY2NjO1xyXG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLHNhbnMtc2VyaWY7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4ubm90ZXMtd3JhcHBlciB0ZXh0YXJlYTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jaGVjay13cmFwcGVyIHtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG4udG9vbHRpcC1iYXNle1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0Zm9udC1mYW1pbHk6XCJEcm9pZCBTYW5zXCIsc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTBweDtcclxuXHRjb2xvcjojYmJiXHJcbn1cclxuLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi50b29sdGlwLWJhc2U6aG92ZXIgLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWxlY3Qge1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG50ZC5idXJuLWdyZWVuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1MDM0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM5ZmJiOWY7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUwNmM1MCAhaW1wb3J0YW50O1xyXG59XHJcbnRkLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZTI0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNmNmRmOTQ7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi15ZWxsb3cge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5ZjhhNDAgIWltcG9ydGFudDtcclxufVxyXG50ZC5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4tcmVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzY0ZDRjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludi1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nOiAycHggOHB4O1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5pbnYtYm9keSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG5cdHBhZGRpbmc6IDVweCA4cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiA5cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHRtYXJnaW46IDFweCAycHg7XHJcbn1cclxuLnByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Y3YTYwMDt9XHJcblxyXG4uZ3JleS1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNkOTUzNGY7fVxyXG4uZ29vZC1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICM1Y2I4NWM7fVxyXG4ud2FybmluZy1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmZmM4NTY7fVxyXG4uZGFuZ2VyLXByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Q5NTM0Zjt9XHJcblxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtaW1hZ2Uge1xyXG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0XHJcbn1cclxuLmlucHV0LXRleHQ6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uaGlkZGVuLWVsZW1lbnR7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdHZpc2liaWxpdHk6IGZhbHNlICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHQ6aG92ZXJ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxNjYsIDApO1xyXG59YDtcbmV4cG9ydCBjb25zdCBFbmhhbmNlZENvbG9ycyA9IGAvKiBjb25zdW1hYmxlcyAobHV4dXJ5KSAqL1xyXG5kaXZbdGl0bGU9XCJTdGVsbGFyIFBhbGUgQWxlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEVcIl0sXHJcbi50b29sdGlwX0FMRSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NPRlwiXSxcclxuLnRvb2x0aXBfQ09GLFxyXG5kaXZbdGl0bGU9XCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR0lOXCJdLFxyXG4udG9vbHRpcF9HSU4sXHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9LT01cIl0sXHJcbi50b29sdGlwX0tPTSxcclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OU1RcIl0sXHJcbi50b29sdGlwX05TVCxcclxuZGl2W3RpdGxlPVwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFdPXCJdLFxyXG4udG9vbHRpcF9QV08sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JFUFwiXSxcclxuLnRvb2x0aXBfUkVQLFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ1wiXSxcclxuLnRvb2x0aXBfU0MsXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZHXCJdLFxyXG4udG9vbHRpcF9WRyxcclxuLnRvb2x0aXBfV0lOLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dJTlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ODAwMDAsICM3YjAwMTIpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZGI5MTkxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogYWdyaWN1bHR1cmFsIHByb2R1Y3RzICovXHJcbi50b29sdGlwX0ZPRCxcclxuLnRvb2x0aXBfQ0FGLFxyXG4udG9vbHRpcF9IT1AsXHJcbi50b29sdGlwX0dSTixcclxuLnRvb2x0aXBfTUFJLFxyXG4udG9vbHRpcF9IQ1AsXHJcbi50b29sdGlwX01UUCxcclxuLnRvb2x0aXBfUElCLFxyXG4udG9vbHRpcF9QUEEsXHJcbi50b29sdGlwX0FMRyxcclxuLnRvb2x0aXBfQkVBLFxyXG4udG9vbHRpcF9NVVMsXHJcbi50b29sdGlwX1JDTyxcclxuLnRvb2x0aXBfUlNJLFxyXG4udG9vbHRpcF9IRVIsXHJcbi50b29sdGlwX1ZFRyxcclxuLnRvb2x0aXBfTlVULFxyXG4udG9vbHRpcF9WSVQsXHJcbi50b29sdGlwX0dSQSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEFsZ2FlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEdcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQkVBXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ0FGXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZPRFwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JBXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgR3JhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUk5cIl0sXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSENQXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVSXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hPUFwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIE1haXplXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NQUlcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01UUFwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVVTXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgTnV0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlVUXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUElCXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QUEFcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JDT1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUlNJXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgRnJ1aXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WRUdcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVklUXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwMzgwMCwgIzBhNDcwOCkgIWltcG9ydGFudDtcclxuY29sb3I6ICM4YmIzN2IgIWltcG9ydGFudDtcclxufVxyXG4vKiBwbGFzdGljcyAqL1xyXG4udG9vbHRpcF9EQ0wsXHJcbi50b29sdGlwX0RDTSxcclxuLnRvb2x0aXBfRENTLFxyXG4udG9vbHRpcF9QRSxcclxuLnRvb2x0aXBfUEcsXHJcbi50b29sdGlwX1BTTCxcclxuLnRvb2x0aXBfUFNNLFxyXG4udG9vbHRpcF9QU1MsXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTFwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENNXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ1NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktRXRoeWxlbmVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BFXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEdcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU0xcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU01cIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzkxZjYyLCAjOTIzODdiKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2Y4OWVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNvbnN1bWFibGVzIChiYXNpYykgKi9cclxuLnRvb2x0aXBfRFcsXHJcbi50b29sdGlwX0VYTyxcclxuLnRvb2x0aXBfRklNLFxyXG4udG9vbHRpcF9ITVMsXHJcbi50b29sdGlwX0hTUyxcclxuLnRvb2x0aXBfTEMsXHJcbi50b29sdGlwX01FQSxcclxuLnRvb2x0aXBfTUVELFxyXG4udG9vbHRpcF9PVkUsXHJcbi50b29sdGlwX1BEQSxcclxuLnRvb2x0aXBfUFQsXHJcbi50b29sdGlwX1JBVCxcclxuLnRvb2x0aXBfU0NOLFxyXG4udG9vbHRpcF9XUyxcclxuXHJcbmRpdlt0aXRsZT1cIkRyaW5raW5nIFdhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EV1wiXSxcclxuZGl2W3RpdGxlPVwiRXhvc2tlbGV0b24gV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9FWE9cIl0sXHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GSU1cIl0sXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hNU1wiXSxcclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSFNTXCJdLFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTENcIl0sXHJcbmRpdlt0aXRsZT1cIlF1YWxpdHkgTWVhdCBNZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRURcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9PVkVcIl0sXHJcbmRpdlt0aXRsZT1cIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QREFcIl0sXHJcbmRpdlt0aXRsZT1cIlBvd2VyIFRvb2xzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QVFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgUmF0aW9uc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkFUXCJdLFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDTlwiXSxcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E2MmMyYSwgI2JhMzYzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmZjk4OWUgIWltcG9ydGFudDtcclxufVxyXG4vKiBmdWVscyAqL1xyXG4udG9vbHRpcF9TRixcclxuLnRvb2x0aXBfRkYsXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GRlwiXSxcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NGXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU0OGQyMiwgIzZiYTIzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNjYmZhYTMgIWltcG9ydGFudDtcclxufVxyXG4vKiBsaXF1aWRzICovXHJcbi50b29sdGlwX0hFWCxcclxuLnRvb2x0aXBfTEVTLFxyXG4udG9vbHRpcF9CVFMsXHJcbi50b29sdGlwX0gyTyxcclxuZGl2W3RpdGxlPVwiSGVsaW90cm9wZSBFeHRyYWN0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVhcIl0sXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBFaW5zdGVpbml1bVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTEVTXCJdLFxyXG5kaXZbdGl0bGU9XCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JUU1wiXSxcclxuZGl2W3RpdGxlPVwiV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0gyT1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2N2E4ZGEsICM2MDk4YzMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjFmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuZGl2LkdyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG4vKiBmdWxsIGl0ZW0gbmFtZSBjZW50ZXJpbmcgKi9cclxuc3Bhbi5HcmlkSXRlbVZpZXdfX25hbWVfX19oM3lYOUxtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufWA7XG5leHBvcnQgY29uc3QgSWNvblN0eWxlID0gYFxyXG4gLyogUHJVbkljb24gdjAuOTBcclxuKiA9PT09PT09PT09PT09PT1cclxuKlxyXG4qIEluc3RhbGwgQ2hyb21lIGFkZG9uOiBTdHlsZUJvdCBcclxuKiBnb3RvOiBhcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb21cclxuKiByaWdodC1jbGljayBhbnl3aGVyZSwgc2VsZWN0OiBTdHlsZUJvdCAtPiBTdHlsZSBFbGVtZW50XHJcbiogQ29weSZQYXN0ZSB0aGlzIGZpbGUgaW50byB0aGUgU3R5bGVCb3Qgd2luZG93XHJcbipcclxuKiBDU1Mgc2NyaXB0IHRvIGdpdmUgaWNvbnMgdG8gYWxsIGNvbW1vZGl0aWVzIGFuZCBzb21lIG90aGVyIFVJIGNvbG9yIGFuZCBsYXlvdXQgY2hhbmdlcy5cclxuKi9cclxuIFxyXG4vKiBjb250cm92ZXJzaWFsIFVJIGNoYW5nZXMgYW5kIGNvbG9ycyAqL1xyXG4vKiAoY29tbWVudC9kZWxldGUgaWYgbm90IGRlc2lyZWQpXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gXHJcbi8qIGl0ZW0gdGlja2VyIGNvbG9yICovXHJcbi5Db2xvcmVkSWNvbl9fbGFiZWxfX19PVTFJNG9QIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcbiBcclxuIFxyXG4vKiBmdWxsIGl0ZW0gbmFtZSBjZW50ZXJpbmcgKi9cclxuLkdyaWRJdGVtVmlld19fbmFtZV9fX2gzeVg5TG0gIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4gXHJcbi8qIHRhYmxlIGNvbG9yICovXHJcbnRhYmxlIHRib2R5IHRkOm50aC1jaGlsZChvZGQpXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJlO1xyXG59XHJcbiBcclxuLyogZW5kIFVJIGNoYW5nZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4vKiBpdGVtcyBpbiBwcm9kdWN0aW9uIHZpZXcgYW5kIG1hcmtldCB2aWV3ICovXHJcbmRpdi5NYXRlcmlhbEluZm9ybWF0aW9uX19yZWNpcGVJbnB1dHNfX19lTHZmb29wIGRpdi5CdWlsZGluZ0ljb25fX2NvbnRhaW5lcl9fX2pGNUdVc3ogZGl2LkJ1aWxkaW5nSWNvbl9fdGlja2VyQ29udGFpbmVyX19fTlp4M0c4Q1xyXG57XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG59XHJcbiBcclxuLyogaXRlbXMgaW4gcGxhbmV0IHZpZXcgKi9cclxuZGl2LlJlc291cmNlVGFibGVfX2dyaWRDb250YWluZXJfX195bXJ6VGNEIGRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbi8qXHJcbkdyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OFxyXG5HcmlkSXRlbVZpZXdfX2ltYWdlX19feU1vS09aVlxyXG5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDhcclxuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjJcclxuQ29sb3JlZEljb25fX2xhYmVsQ29udGFpbmVyX19fWVZmZ3pPa1xyXG4qL1xyXG4gXHJcbi8qIGRlZmF1bHQgOmJlZm9yZSBlbGVtZW50IHRvIHByZXBhcmUgZm9yIG5ldyBpY29uKi9cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBcclxuICAvKndoaWxlIGl0IGlzIGljb24qL1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4qL1xyXG4gXHJcbi8qIGNvbG9yZWQgb3ZlcmxheSBpY29uICovXHJcbmRpdi5Db2xvcmVkSWNvbl9fbGFiZWxDb250YWluZXJfX19ZVmZnek9rOmJlZm9yZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7IC8qIHdpbGwgYmVjb21lIGljb24gKi9cclxuIFxyXG4gIG9wYWNpdHk6IDAuMTtcclxuICB6LWluZGV4OiAtMTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImdvbGQgb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdvbGQ7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpcm9uIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBhcXVhO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWx1bWluaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmV5O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwic2lsaWNvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgd2hpdGU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJ0aXRhbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImxpdGhpdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZWVuO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiY29wcGVyIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJmZXJyby10aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHBoYS1zdGFiaWxpemVkIHRpdGFuaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm9taW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHBoYS1zdGFiaWxpemVkIHR1bmdzdGVuXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFRoZXJtYWxcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflKVcIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFRoZXJtYWxcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflKVcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLimptcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIEFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNwZWNpYWxpemVkIEFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkhpZ2gtQ2FwYWNpdHkgQ1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ29sZDtcclxuICBvcGFjaXR5OiAuMjU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiU2hpZWxkZWQgQ1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZTtcclxuICBvcGFjaXR5OiAuMDE7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiQnVkZ2V0IENcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGNob2NvbGF0ZTtcclxuICBvcGFjaXR5OiAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJyYXcgXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6e2XCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInJhdyBjb3R0b25cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JleTtcclxuICBvcGFjaXR5OiAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJyYXcgc2lsa1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBwbHVtO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp7VcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwia2V2bGFyIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxuICBvcGFjaXR5OiAuMTU7XHJcbn1cclxuIFxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ0ZWNobm9rZXZsYXIgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWV2aW9sZXQ7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibnlsb24gZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsYWNrO1xyXG4gIG9wYWNpdHk6IC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImNvdHRvbiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JleTtcclxuICBvcGFjaXR5OiAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJzaWxrZW4gZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHBsdW07XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiY2VyYW1pYyBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb3JhbmdlcmVkO1xyXG4gIG9wYWNpdHk6IC4xNTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJjZXJhbWljLXR1bmdzdGVuIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBicm93bjtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIm51dHJpZW50IHNvbHV0aW9uXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZWVuO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwibmFuby1lbmhhbmNlZCByZXNpblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibHVldmlvbGV0O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZsdXhcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgeWVsbG93O1xyXG4gIG9wYWNpdHk6IC4xNTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImluZGlnbyBjb2xvcmFudFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBpbmRpZ287XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBvbGl2ZTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkREVCBQbGFudCBBZ2VudFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTZWRhdGl2ZSBTdWJzdGFuY2VcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb3JhbmdlO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZGVzYXR1cmF0aW9uIGFnZW50XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHdoaXRlO1xyXG4gIG9wYWNpdHk6IC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYnJlYXRoYWJsZSBsaXF1aWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYXF1YW1hcmluZTtcclxuICBvcGFjaXR5OiAuMjU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJ0aGVybW9mbHVpZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBvcmFuZ2U7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiZmVydGlsaXplclwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHllbGxvd2dyZWVuO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImFjaWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKYo1wiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbnllbGxvdztcclxuICBvcGFjaXR5OiAuMTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIFxyXG4vKlxyXG4gXHJcbmRpdlt0aXRsZSo9XCJzb2xhclwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+MnlwiO1xyXG4gIG9wYWNpdHk6IC4xO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgeWVsbG93O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwibGFyZ2UgY2FyZ28gYmF5IGtpdFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqWXCI7IG9wYWNpdHk6IDAuNjsgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaGlnaC1sb2FkIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflJRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImhpZ2gtdm9sdW1lIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfjohcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImdvbGQgb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5+oXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpcm9uIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWx1bWluaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbn1cclxuKi9cclxuIFxyXG4vKiBub24tY2F0ZWdvcnkgY29sb3Igc3BlY2lhbCBoYWNrcyovXHJcbiBcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCJdLFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXVxyXG57XHJcbiAgLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDEyMCA3MiA3KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNoaWVsZGVkIENvbm5lY3RvcnNcIl0sXHJcbmRpdlt0aXRsZT1cIkJsdWUgR29sZFwiXVxyXG57XHJcbiAgLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDcwIDcyIDIwMCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJBaXIgU2NydWJiZXJcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCA5NiA1OCksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuLyogZHcgYW5kIGFsbCBjb25zdW1hYmxlcyAqL1xyXG4gXHJcbi8qIFwibm9ybWFsXCIgaWNvbnMgYW5kIGNvbG9ycyAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiBcclxuLyogUkFUIGlucHV0cyAqL1xyXG5kaXZbdGl0bGVePVwiSGlnaC1DYXJiXCJdLFxyXG5kaXZbdGl0bGVePVwiUHJvdGVpbi1SaWNoXCJdLFxyXG5kaXZbdGl0bGVePVwiVHJpZ2x5Y2VyaWRlXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYig3MCA3MiA3KSlcclxufVxyXG4gXHJcbmRpdltjb250ZW50PVwiSW8tZGluZVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MyA4NyAxKSwgcmdiKDg2IDQwIDApKVxyXG59XHJcbiBcclxuLyogb3RoZXIgQXJncmljdWx0dXJlICovXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdlt0aXRsZT1cIkFsbC1QdXJwb3NlIEZvZGRlclwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W3RpdGxlPVwiTWVhdCBUaXNzdWUgUGF0dGllc1wiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MyA4NyAxKSwgcmdiKDg2IDQwIDApKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkRyaW5rXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgUmFcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MSAxMjYgMTc0KSwgcmdiKDQ2IDY2IDE0OSkpXHJcbn1cclxuIFxyXG4vKiBsaXF1aWRzICovXHJcbmRpdlt0aXRsZSo9XCJIZWxpb3Ryb3BlXCJdLFxyXG5kaXZbdGl0bGUqPVwiTGlxdWlkIEVpbnNcIl0sXHJcbmRpdlt0aXRsZSo9XCJCYWN0ZXJpYWwgVHVuXCJdLFxyXG5kaXZbdGl0bGVePVwiV2F0ZXJcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjIgODAgNTUpLCByZ2IoMTggNzQgMTI0KSlcclxufVxyXG4gXHJcbi8qIGNoZW1pY2FscyBiZyBjb2xvcnMgKi9cclxuZGl2W3RpdGxlKj1cIlN1YnN0YW5jZVwiXSwgXHJcbmRpdlt0aXRsZSo9XCJDaGVtaWNhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBDcnlzdGFsc1wiXSwgXHJcbmRpdlt0aXRsZSo9XCJCcmVhdGhhYmxlIExpcXVpZFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJBZ2VudFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJGbHV4XCJdLCBcclxuZGl2W3RpdGxlKj1cIlJlc2luXCJdLCBcclxuZGl2W3RpdGxlKj1cIkNvbG9yYW50XCJdLFxyXG5kaXZbdGl0bGUqPVwiQWNpZFwiXSwgXHJcbmRpdlt0aXRsZSo9XCIgQmFjdGVyaWFcIl0sIFxyXG5kaXZbdGl0bGUqPVwiU29pbFwiXSxcclxuZGl2W3RpdGxlKj1cIlN0YWJpbGl6ZXJcIl0sXHJcbmRpdlt0aXRsZSo9XCJGZXJ0aWxpemVyXCJdLFxyXG5kaXZbdGl0bGUqPVwiVGhlcm1vRmx1aWRcIl0sXHJcbmRpdlt0aXRsZSo9XCJFbnJpY2hlZFwiXSxcclxuZGl2W3RpdGxlKj1cIk51dHJpZW50XCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTgzLCA0NiwgOTEpLCByZ2IoMTE0IDM3IDYyKSlcclxufVxyXG4gXHJcbi8qIHByZWZhYnMgKi9cclxuZGl2W3RpdGxlXj1cIkJhc2ljIFN0clwiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIERlY2tcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBCdWxrXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgVHJhbnNcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSA1NCA2NiApLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkxpZ2h0d2VpZ2h0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUgOTQgMzUpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkhhcmRlbmVkXCJdLCBcclxuZGl2W3RpdGxlXj1cIlJlaW5mb3JjZWRcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3OCA0NCAyNyksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgRGVja1wiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFRyYW5zcFwiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFN0clwiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIEJ1bGtcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MSAzNSA5NCksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG4gXHJcbi8qIGNvbnN0cnVjdGlvbiBiZyBjb2xvcnMgKi9cclxuZGl2W3RpdGxlPVwiSW5zdUZvYW1cIl0sXHJcbmRpdlt0aXRsZT1cIkVwb3h5IFJlc2luXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWdhVHViZSBDb2F0aW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiTmFubyBGaWJlclwiXSxcclxuZGl2W3RpdGxlPVwiTmFuby1Db2F0ZWQgR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIlJlaW5mb3JjZWQgR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktU3VsZml0ZSBTZWFsYW50XCJdLFxyXG5kaXZbdGl0bGU9XCJHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzIgMTI1IDIyMSksIHJnYigwIDY0IDE3OSkpXHJcbn1cclxuIFxyXG4vKiBjb25zdHJ1Y3Rpb24gcGFydHMgKi9cclxuZGl2W3RpdGxlPVwiQWVyb3N0YXQgRm91bmRhdGlvblwiXSxcclxuZGl2W3RpdGxlPVwiQWlyIFNjcnViYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJEZWNvcmF0aXZlIEVsZW1lbnRzXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG9hdGluZyBUYW5rXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93IENvbnRyb2wgRGV2aWNlXCJdLFxyXG5kaXZbdGl0bGU9XCJGbHVpZCBQaXBpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkdhcyBWZW50XCJdLFxyXG5kaXZbdGl0bGU9XCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIl0sXHJcbmRpdlt0aXRsZT1cIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIk5lb24gTGlnaHRpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJQcmVzc3VyZSBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlJhZGlhdGlvbiBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiXSxcclxuZGl2W3RpdGxlPVwiVGhlcm1hbCBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlRydXNzXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjYsIDEwMiwgMTMyKSwgcmdiKDQxLCA3NywgMTA3KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDMyIDkwIDMyKSlcclxufVxyXG4gXHJcbiBcclxuLyogZWxlY3Ryb25pYyBzeXN0ZW1zIGJnIGNvbG9yICovXHJcbmRpdlt0aXRsZT1cIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiQ2xpbWF0ZSBDb250cm9sbGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkxvZ2lzdGljcyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiVGFyZ2V0aW5nIENvbXB1dGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJDcnlvZ2VuaWMgVW5pdFwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDc2LCA1MSwgMTQxKSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG4vKiBsaWZlIHJlbGF0ZWQgZWxlY3Ryb25pY3Mgc3lzdGVtcyBiZyBjb2xvciovXHJcbmRpdlt0aXRsZT1cIldhdGVyIFJlY2xhaW1lclwiXSxcclxuZGl2W3RpdGxlPVwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwIDk2IDU4KSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiaXVtXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJzaXRlXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJtaW5lcmFsXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbmRpdlt0aXRsZSo9XCJjb250cm9sbGVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Om1wiOyBvcGFjaXR5OiAwLjZcclxufVxyXG5kaXZbdGl0bGUqPVwiZmlsdGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJkZXZpY2VcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBNS1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7tcIjtcclxufVxyXG4vKiDwn5u58J+av+KbsiAqL1xyXG5kaXZbdGl0bGUqPVwiZmxvdyBjb250cm9sIGRldmljZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfmr9cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiZ2xhc3NcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SyXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJoZWFkcGhvbmVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46nXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImhvbG9ncmFwaGljIGdsYXNzZXNcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5GTXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImRpb2RlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pa2XCI7XHJcbn1cclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50Kj1cIlNBUlwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwic2Nhbm5lclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwic2Vuc29yXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJGb3VuZGF0aW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eHXCI7XHJcbn1cclxuLyog8J+nrvCfjqvwn46f8J+OniAqL1xyXG5kaXZbdGl0bGUqPVwibWVtb3J5XCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwcm9jZXNzXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ0cmFuc2lzdG9yXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJjaXJjdWl0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+On1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJ0ZW5zb3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6euXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwibWVtb3J5IGJhbmtcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46eXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImNpcmN1aXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46rXCI7XHJcbn1cclxuLyrwn6en8J+On/Cfkr/wn5O88J+OniovXHJcbmRpdlt0aXRsZT1cIk5vbi1Wb2xhdGlsZSBNZW1vcnlcImldOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5OAXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cInN5c3RlbVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY29tcHV0ZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIm1haW5mcmFtZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflqVcIjsgXHJcbiAgb3BhY2l0eTogMC42XHJcbn1cclxuLyog8J+Om/Cfjprwn5K+8J+SvfCfkr/wn5OAICovXHJcbmRpdlt0aXRsZSo9XCJOYXZpZ2F0aW9uXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkFydGlmaWNpYWxcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGF0YVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJOZXR3b3JrXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRhdGFiYXNlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkZyYW1ld29ya1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNYW5hZ2VtZW50XCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk9wZXJhdGluZ1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJJbnRlcmZhY2VcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiQWxnb3JpdGhtXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk1hbmFnZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkr5cIjtcclxuICBvcGFjaXR5OiAwLjM7IC8qIHN5c3RlbSBvdmVycmlkZSovXHJcbn1cclxuZGl2W3RpdGxlKj1cIm1vdGhlcmJvYXJkXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ3YWZlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiYnJvYWRjYXN0aW5nXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJhbnRlbm5hXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJlbWl0dGVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ToVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJsaWJyYXJ5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TllwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJXb3Jrc3RhdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEaXNwbGF5XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5K7XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpZ2h0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KhXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlJvY2tcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpa9cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTGlxdWlkXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJGbHVpZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBaXJcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkdhc1wiXTpiZWZvcmUsXHJcbiBkaXZbdGl0bGUqPVwiQWVyb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkF1ZGlvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SKXCI7XHJcbiAgb3BhY2l0eTogMC4zOyAvKiBzeXN0ZW0gb3ZlcnJpZGUgKi9cclxufVxyXG5kaXZbdGl0bGUqPVwiUG93ZXJcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNhcGFjaXRvclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ui1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQb3dlciBDZWxsXCJdOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi8qIPCflKjim4/impLwn5ug8J+Up/CflKnimpnwn5ec8J+nsCAqL1xyXG5kaXZbdGl0bGUqPVwiRmFzdGVuZXIgS2l0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SnXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJSZXBhaXIgS2l0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6ewXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJUYW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uiXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJGVEwgRnVlbCBUYW5rXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ns1wiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiUHJvdGVjdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJQbGF0ZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJTaGllbGRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6FcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlByb3RlY3Rpb24gTWF0ZXJpYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7FcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNvbm5lY3RvcnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgb3BhY2l0eTogMC40XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNlYXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6qRXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlN1YnN0YW5jZVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQ2hlbWljYWxcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkFnZW50XCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJGbHV4XCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJSZXNpblwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQ29sb3JhbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQWNpZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pijXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJCYWN0ZXJpYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nq1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDcnlvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinYRcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvaWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxufVxyXG4vKiDwn6ew8J+UqvCfqbogKi9cclxuZGl2W3RpdGxlKj1cIlN1cmdpY2FsXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+pulwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn46e8J+bj/Cfm4wgKi9cclxuZGl2W3RpdGxlKj1cIk1lZGljYWwgc3RyZXRjaGVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OnlwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4vKiDwn6ew8J+UqvCfqbrwn5KKICovXHJcbmRpdlt0aXRsZSo9XCJNZWRpY2FsIGtpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTWFnbmV0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eyXCI7XHJcbn1cclxuLyog8J+Xv/CflrwgKi9cclxuZGl2W3RpdGxlKj1cIkRlY29cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflrxcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29sYXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKaoVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2xhciBDZWxsXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuLyogYWxsb3lzIOKZkiDwn5+qKi9cclxuZGl2W3RpdGxlKj1cIi1UaXRhbml1bVwiXTo6YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiIFRpdGFuaXVtXCJdOjpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fqlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkZlcnJvbWluaXVtXCJdOjpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbiBcclxuLyogLS0tLSBNZWRpY2FsIC0tLS0tLSAqL1xyXG5kaXZbdGl0bGU9XCJBdXRvLURvY1wiXSxcclxuZGl2W3RpdGxlPVwiQmFuZGFnZXNcIl0sXHJcbmRpdlt0aXRsZT1cIk1lZGljYWwgU3RyZXRjaGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJQYWlua2lsbGVyc1wiXSxcclxuZGl2W3RpdGxlPVwiU3VyZ2ljYWwgRXF1aXBtZW50XCJdLFxyXG5kaXZbdGl0bGU9XCJUZXN0IFR1YmVzXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgMTMzIDY0KSwgcmdiKDQ4IDg2IDQ4KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkF1dG8tRG9jXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5Go4oCN4pqV77iPXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmFuZGFnZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7tcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJQYWlua2lsbGVyc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SilwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1cmdpY2FsIEVxdWlwbWVudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+pulwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJUdWJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbn1cclxuLyog8J+bjPCfm4/impUgKi9cclxuZGl2W3RpdGxlKj1cIkNyZXcgUXVhcnRlcnNcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiVHJhdW1hIENhcmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm49cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLyogLS0tLS0tLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZSo9XCJJb2RpbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbhcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29kaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eCXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNhcmJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OqVwiO1xyXG59XHJcbi8qIPCfp4Lwn5K/8J+NmfCfjaXim7Dwn4+UICovXHJcbmRpdlt0aXRsZT1cIkNobG9yaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42lXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiU3VsZnVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+hXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiVGFudGFsdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflJhcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJDYWxjaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJCZXJ5bGxpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk1hZ25lc2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+oXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuLyog44Cw8J+niPCfp4rwn5+k8J+fpiAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkFsdW1pbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlN0ZWVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eKXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlRpdGFuaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZX49XCJUdW5nc3RlblwiXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fq1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaWxpY29uXCJdOmJlZm9yZXtcclxuICBjb250ZW50OiBcIuOAsFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkNvcHBlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fp1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuLyog8J+fpSAqL1xyXG5kaXZbdGl0bGU9XCJJcm9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbi8qIGFsbG95cyAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIlJlZCBHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S2XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQmx1ZSBHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S3XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQnJvbnplXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S6XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQm9yb3NpbGljYXRlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLjgLBcIjtcclxufVxyXG4gXHJcbi8qIC0tLS0gKi9cclxuIFxyXG4vKiDwn5aK4p2X4p6W8J+SiCDwn4yg8J+llvCfjaHwn6eoICovXHJcbmRpdlt0aXRsZSo9XCJmdWVsIHJvZFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6hcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJiYXNpYyBmdWVsIHJvZFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKellwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCIgcmVhY3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiIGdlbmVyYXRvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjoZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiZmlzc2lvbiByZWFjdG9yXCJpXTpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwicmFkaW9pc290b3BlIGdlbmVyYXRvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuZGl2W3RpdGxlPVwiTGltZXN0b25lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiRHJvbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKciFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIk9yZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNyeXN0YWxzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KOXCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tLS0tLS0tICovXHJcbiBcclxuZGl2W3RpdGxlJD1cIkdyYWluc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk1haXplXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y9XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRHJpbmtcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4NcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJQcm90ZWluLVJpY2ggQmVhbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZJcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBSYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lq1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk51dHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZxcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJGcnVpdHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYVcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQbGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjLJcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJDYWZmZWluYXRlZCBCZWFuc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Mv1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkFsZ2FlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42DXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiR3JhcGVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42HXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiSGVyYnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjLZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJGb2RkZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJIb3BzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y+XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ290dG9uIEZpYmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGF0dGllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nq1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk11c2hyb29tc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NhFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBpbmViZXJyaWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42TXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGFzdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpaNcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJTb2x1dGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlZpdGEgRXNzZW5jZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NtlwiO1xyXG59XHJcbiBcclxuLyogbGlxdWlkcyAqL1xyXG5kaXZbdGl0bGVePVwiV2F0ZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiSGVsaW90cm9wZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lg1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaXF1aWQgRWluc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lm1wiO1xyXG59XHJcbiBcclxuLyog8J+OqPCfj4Dwn4+Q4pq+ICovXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgR3JhbnVsYXRlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4+QXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUG9seS1FdGh5bGVuZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pq+XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiU2hlZXQgVHlwZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nu1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkZvYW1cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2VhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Mq1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJGaWJlclwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJGYWJyaWNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7VcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlN1cHBsaWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OgXCI7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlVuaWZvcm1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkZZcIjtcclxufVxyXG5kaXZbdGl0bGUkPVwiVG9vbHNldFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+boFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJGVExcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiU1RMXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uiXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4OyBvcGFjaXR5OiAwLjVcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6exXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiQ2FzaW5nXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eKXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRGVjayBFbGVtZW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OnlwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUkPVwiU3RydWN0dXJhbCBFbGVtZW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puTXCI7XHJcbn1cclxuLyog8J+bjiAqL1xyXG5kaXZbdGl0bGUkPVwiQnVsa2hlYWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm7hcIjtcclxufVxyXG4vKiDwn4+X8J+nrfCfjKvimIDwn4yAICovXHJcbmRpdlt0aXRsZSQ9XCJBcGVydHVyZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Pl1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlRydXNzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5e8XCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tLSBnYXNzZXMtLS0tLS0gKi9cclxuLyog8J+SqPCflbPjgLDwn4yK8J+Mq/CfkqXwn5ui8J+ns/Cfp7TimIQgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJBbW1vbmlhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQXJnb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkZsdW9yaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJOZW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJOaXRyb2dlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk94eWdlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SqFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJIZWxpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjIxcIjtcclxufVxyXG5kaXZbdGl0bGVePVwiSHlkcm9nZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqtcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJIZWxpdW0tMyBJc290b3BlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KmXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piVXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6elXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJXb3JrIE92ZXJhbGxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfprpcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQmFzaWMgT3ZlcmFsbHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgOTcgMTA0KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl0sIFxyXG5kaXZbdGl0bGUkPVwiV29yayBPdmVyYWxsXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDk3IDEwNCksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42vXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZV49XCJFeG9zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5G34oCN4pmA77iPXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZV49XCJQb3dlciBUb29sc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiRXhvc1wiXSwgXHJcbmRpdlt0aXRsZT1cIlBvd2VyIFRvb2xzXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQyIDEyMiA1NCksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdLFxyXG5kaXZbdGl0bGU9XCJSZXBhaXIgS2l0XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQyIDEyMiA1NCksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJBbGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbpcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SiVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5Gp4oCN8J+aklwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflK1cIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQmFzaWMgTWVkaWNhbCBLaXRcIl0sIFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLCBcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNiAxMjQgMjcpLCByZ2IoNTcgNzMgMTQ3KSkgXHJcbn1cclxuZGl2W3RpdGxlJD1cIkFsZVwiXSwgXHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE2IDEyNCAyNyksIHJnYigxMDUgMzAgMTQ1KSkgXHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiR2luXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WDXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJNZWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WhXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqOKAjfCfmoBcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlKj1cInBlcnNvbmFsXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TsVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCJdLCBcclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MiA5MyAxNTkpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGUkPVwiR2luXCJdLCBcclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MiA5MyAxNTkpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG4gXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nt1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhdCBNZWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42xXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SilwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lvFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhdCBNZWFsXCJdLCBcclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl0sIFxyXG5kaXZbdGl0bGU9XCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTUgOTIgMTY5KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdLCBcclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NSA5MiAxNjkpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG4vKiDwn5W54piO8J+TniAqL1xyXG5kaXZbdGl0bGUqPVwiY29tbWFuZCBicmlkZ2VcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimI5cIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDim7DimKLimpnwn5qw8J+MoSAqL1xyXG5kaXZbdGl0bGUqPVwiZW5naW5lXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+agFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJub3p6bGVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDwn6eo8J+Mn/Cfp7Pwn5uOICovXHJcbmRpdlt0aXRsZSo9XCJjb21idXN0aW9uIGNoYW1iZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6ezXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInB1bXBcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInBpcGVcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInBpcGluZ1wiaV06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfmrBcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwidmVudFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKZqFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDwn5e88J+nh/CflJfim5Pwn5uh8J+TjvCflocgKi8gXHJcbmRpdlt0aXRsZSo9XCJzdHJ1Y3R1cmFsIHNwYWNlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puTXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+nivCfk6YgKi8gXHJcbmRpdlt0aXRsZSo9XCJjYXJnbyBiYXlcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OmXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImhhYml0YXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4+gXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInN1cmdlcnkgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKalVwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8q8J+XhPCfjq/wn46hKi9cclxuZGl2W3RpdGxlKj1cImVudGVydGFpbm1lbnQgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqFcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDwn46oICovXHJcbmRpdlt0aXRsZSo9XCJ3b3Jrc2hvcCB1bml0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OqFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIHNpemVzICovXHJcbiBcclxuZGl2W3RpdGxlKj1cInNtYWxsXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ0aW55XCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSQ9XCIgc1wiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyMHB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJtZWRpdW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlJD1cIiBtXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInRyYW5zaXN0b3JcImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4gXHJcbi8qIGJ1aWxkaW5ncyAtIGtpbGwgc3RyYXkgaWNvbnMgKi9cclxuZGl2LkJ1aWxkaW5nSWNvbl9fY29udGFpbmVyX19fakY1R1VzejpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuICAgIFxyXG4gICAgLyogaXRlbXMgaW4gbWFya2V0IHZpZXcgKi9cclxudGFibGUuQnJva2VyTGlzdF9fdGFibGVfX195bGdlaXlnID5cclxudGJvZHkgPlxyXG50ciA+XHJcbnRkID5cclxuZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCA+XHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi8qIGl0ZW1zIGluIGJ1aWxkaW5nIHZpZXcgKi9cclxuZGl2LkJ1aWxkaW5nSW5mb3JtYXRpb25fX3JlY2lwZV9fX3V6YW54WHcgPlxyXG5kaXYgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4vKiBpdGVtcyBpbiByZWNpcGUgdmlldyAqL1xyXG5kaXYuTWF0ZXJpYWxJbmZvcm1hdGlvbl9fcmVjaXBlSW5wdXRzX19fZUx2Zm9vcCA+XHJcbmRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggPlxyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlXHJcbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi8qIGl0ZW1zIGluIHBsYW5ldCB2aWV3ICovXHJcbmRpdi5SZXNvdXJjZVRhYmxlX19ncmlkQ29udGFpbmVyX19feW1yelRjRCA+XHJcbmRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggPlxyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlXHJcbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1gO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU3R5bGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEN1cnJlbmN5U3ltYm9scyA9IHtcbiAgICBcIkNJU1wiOiBcIuKCoVwiLFxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXG4gICAgXCJOQ0NcIjogXCLigqZcIixcbiAgICBcIklDQVwiOiBcIseCXCIsXG4gICAgXCJFQ0RcIjogXCLigqxcIixcbn07XG5leHBvcnQgY29uc3QgRmFjdGlvbkhlYWRlcnMgPSB7XG4gICAgXCJDYXN0aWxsby1JdG9cIjogXCJDSVwiLFxuICAgIFwiSW5zaXRvclwiOiBcIklDXCIsXG4gICAgXCJBbnRhcmVzXCI6IFwiQUlcIixcbiAgICBcIk5FTyBDaGFydGVyXCI6IFwiTkNcIlxufTtcbmV4cG9ydCBjb25zdCBSYXRpbmdDb2xvcnMgPSB7XG4gICAgXCJQXCI6IFwiIzFiNmI5Y1wiLFxuICAgIFwiVVwiOiBcIiM4YjIxMWVcIixcbiAgICBcIkZcIjogXCIjZTI2YzM3XCIsXG4gICAgXCJFXCI6IFwiI2U3NzgyYlwiLFxuICAgIFwiRFwiOiBcIiNlODdkMjhcIixcbiAgICBcIkNcIjogXCIjZWQ4OTFjXCIsXG4gICAgXCJCXCI6IFwiI2YxOTUxMFwiLFxuICAgIFwiQVwiOiBcIiNmNmEyMDRcIlxufTtcbmV4cG9ydCBjb25zdCBGcmllbmRseU5hbWVzID0ge1xuICAgIFwiTG9jYWxNYXJrZXRBZHNcIjogXCJMTSBVbml0IFByaWNlc1wiLFxuICAgIFwiT3JkZXJFVEFzXCI6IFwiT3JkZXIgRVRBc1wiLFxuICAgIFwiRmxpZ2h0RVRBc1wiOiBcIkZsaWdodCBQbGFubmluZyBFVEFzXCIsXG4gICAgXCJTaGlwcGluZ0Fkc1wiOiBcIkxNIFNoaXBwaW5nIFJhdGVzXCIsXG4gICAgXCJQb3N0TE1cIjogXCJMTSBQb3N0aW5nIFVuaXQgUHJpY2VcIixcbiAgICBcIkNvbnRyYWN0RHJhZnRzXCI6IFwiQ09OVEQgVW5pdCBQcmljZXNcIixcbiAgICBcIlF1ZXVlTG9hZFwiOiBcIlF1ZXVlIFBlcmNlbnQgRGlzcGxheVwiLFxuICAgIFwiQ29uc3VtYWJsZVRpbWVyc1wiOiBcIldvcmtmb3JjZSBDb25zdW1hYmxlIEJ1cm5cIixcbiAgICBcIkZsZWV0RVRBc1wiOiBcIkZsZWV0IEVUQXNcIixcbiAgICBcIk5vdGlmaWNhdGlvbnNcIjogXCJOb3RpZmljYXRpb25zXCIsXG4gICAgXCJTY3JlZW5VbnBhY2tcIjogXCJTY3JlZW4gVW5wYWNrXCIsXG4gICAgXCJJbWFnZUNyZWF0b3JcIjogXCJDaGF0IEltYWdlIENyZWF0b3JcIixcbiAgICBcIkludmVudG9yeU9yZ2FuaXplclwiOiBcIkludmVudG9yeSBTb3J0aW5nXCIsXG4gICAgXCJDb21tYW5kQ29ycmVjdGVyXCI6IFwiQ29tbWFuZCBDb3JyZWN0ZXJcIixcbiAgICBcIkNhbGN1bGF0b3JCdXR0b25cIjogXCJDYWxjdWxhdG9yIEJ1dHRvblwiLFxuICAgIFwiU2lkZWJhclwiOiBcIlNpZGViYXJcIixcbiAgICBcIkhlYWRlck1pbmltaXplclwiOiBcIk1pbmltaXplIEhlYWRlcnMgKE1hc3RlcilcIixcbiAgICBcIlBlbmRpbmdDb250cmFjdHNcIjogXCJQZW5kaW5nIENvbnRyYWN0c1wiLFxuICAgIFwiQ29tcGFjdFVJXCI6IFwiQ29tcGFjdCBVSSAoTWFzdGVyKVwiXG59O1xuZXhwb3J0IGNvbnN0IFNvcnRpbmdUcmlhbmdsZUhUTUwgPSBgXHJcbjxkaXYgdGl0bGU9XCJcIj48c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHJvbGU9XCJpbWdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cImN1cnJlbnRjb2xvclwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48Zz48cGF0aCBkPVwiTS44ODY4MSAxLjA5Nzc1MmwxMi4xMzc3NCAyMS4wMjMxOEwyNS40MjI5NjQgMS4xMDU0NDZ6XCI+PC9wYXRoPjwvZz48L3N2Zz48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IFBsYW5ldENvbW1hbmRzID0gW1wiQURNXCIsIFwiQlNDXCIsIFwiQ09HQ1wiLCBcIkNPR0NQRVhcIiwgXCJDT0dDVVwiLCBcIkZMVFBcIiwgXCJMUlwiLCBcIkxNUFwiLCBcIkxNXCIsIFwiUExJXCIsIFwiUE9QSVwiLCBcIlBPUFJcIiwgXCJQUFNcIiwgXCJTSFlcIiwgXCJXQVJcIl07XG5leHBvcnQgY29uc3QgU3lzdGVtTmFtZXMgPSB7XG4gICAgXCJBUkNMSUdIVFwiOiBcIkFNLTc4M1wiLFxuICAgIFwiRk9SR0UtS0VFUFwiOiBcIkZLLTM3MVwiLFxuICAgIFwiTU9VTlQgT0xZTVBVU1wiOiBcIkhNLTA0OVwiLFxuICAgIFwiR0FURVdBWVwiOiBcIkhNLTIyM1wiLFxuICAgIFwiTkVPIEVERU5cIjogXCJKUy0yOTlcIixcbiAgICBcIkVCSVNVXCI6IFwiSlMtOTUyXCIsXG4gICAgXCJCQVNUQUJMT05cIjogXCJLVy0wMjBcIixcbiAgICBcIkRPTFpFTkFcIjogXCJMRy00MThcIixcbiAgICBcIlRSSU5JVFlcIjogXCJPRi0yNTlcIixcbiAgICBcIk1PUklBXCI6IFwiT1QtNTgwXCIsXG4gICAgXCJPVVRFUiBIRUFWRU5cIjogXCJQRy04OTlcIixcbiAgICBcIkFVUlVNXCI6IFwiUUotNjUwXCIsXG4gICAgXCJBQ0VUQVJFU1wiOiBcIlFKLTY4NFwiLFxuICAgIFwiSFVCVVJcIjogXCJURC0yMDNcIixcbiAgICBcIkhPVEVJXCI6IFwiVVYtMTM1XCIsXG4gICAgXCJCRU5URU5cIjogXCJVVi0zNTFcIixcbiAgICBcIkRBSUtPS1VcIjogXCJVVi03OTZcIixcbiAgICBcIkhPUlRVU1wiOiBcIlZILTMzMVwiLFxuICAgIFwiTUlEV0FZXCI6IFwiV0ItNjc1XCIsXG4gICAgXCJBTlRBUkVTIElJSVwiOiBcIlpWLTE5NFwiLFxuICAgIFwiQU5UQVJFUyBJXCI6IFwiWlYtMzA3XCIsXG4gICAgXCJBTlRBUkVTIElJXCI6IFwiWlYtNzU5XCJcbn07XG5leHBvcnQgY29uc3QgUGxhbmV0TmFtZXMgPSB7XG4gICAgXCJMRU1VUklBXCI6IFwiQUotNzY4YVwiLFxuICAgIFwiR0FMTFVTXCI6IFwiQU0tNzgzYlwiLFxuICAgIFwiRU1FTlRJT1JcIjogXCJBTS03ODNjXCIsXG4gICAgXCJUWVBIT05cIjogXCJBVS01MjJiXCIsXG4gICAgXCJOT1ZBIEhPTlNIVVwiOiBcIkJTLTc4OGNcIixcbiAgICBcIlRBQ09UT1BJQVwiOiBcIkNCLTA0NWJcIixcbiAgICBcIlBZUkdPU1wiOiBcIkNILTc3MWFcIixcbiAgICBcIlRBTE9TSUFcIjogXCJEQy04MjNiXCIsXG4gICAgXCJPUk1cIjogXCJEVy00NTZnXCIsXG4gICAgXCJNQU5JRk9MRFwiOiBcIkVMLTE3OWJcIixcbiAgICBcIk5PVkEgVU5BTEFTS0FcIjogXCJFWi00NzZiXCIsXG4gICAgXCJUT0tUVVwiOiBcIkZLLTAzN2ZcIixcbiAgICBcIkxBIEZPUkdFXCI6IFwiRkstMzcxYlwiLFxuICAgIFwiQk9VQ0hFUlwiOiBcIkZLLTc5NGJcIixcbiAgICBcIlZBVUxUXCI6IFwiR0MtNjQ1YlwiLFxuICAgIFwiQ0hVXCI6IFwiR1ktMTEwY1wiLFxuICAgIFwiUE9TRUlET05cIjogXCJITS0wNDliXCIsXG4gICAgXCJBUE9USEVDQVJZXCI6IFwiSUEtNjAzYlwiLFxuICAgIFwiRUxFQ1RST05JQ0FcIjogXCJJWS0wMjhjXCIsXG4gICAgXCJORU1FU0lTXCI6IFwiSlMtMjk5YVwiLFxuICAgIFwiR0lCU09OXCI6IFwiSlMtOTUyY1wiLFxuICAgIFwiQVVTVFJBTElBXCI6IFwiS0ktNDQ2YVwiLFxuICAgIFwiREVNRVRFUlwiOiBcIktJLTQ0NmJcIixcbiAgICBcIkhFUk1FU1wiOiBcIktJLTQ0OGJcIixcbiAgICBcIlJPQ0tcIjogXCJLUS05NjZiXCIsXG4gICAgXCJNSUxMSVdBWVNcIjogXCJLVy0wMjBjXCIsXG4gICAgXCJHSUVESSBQUklNRVwiOiBcIktXLTM1OGJcIixcbiAgICBcIkVUSEVSV0lORFwiOiBcIktXLTY4OGNcIixcbiAgICBcIktJTlpBXCI6IFwiTEctNDE4YlwiLFxuICAgIFwiUExBTkVUIE1DIFBMQU5FVEZBQ0VcIjogXCJMRy05MTNlXCIsXG4gICAgXCJBUkFUT1JBXCI6IFwiTFMtMjMxYlwiLFxuICAgIFwiR1JJRkZPTlNUT05FXCI6IFwiTFMtMzAwY1wiLFxuICAgIFwiSlVSQVwiOiBcIk9GLTI1OWRcIixcbiAgICBcIkJFUlRISUVSXCI6IFwiT0YtMzc1YlwiLFxuICAgIFwiQURBTElOQVwiOiBcIk9GLTM3NWNcIixcbiAgICBcIkRBTkFLSUxcIjogXCJPVC00NDJiXCIsXG4gICAgXCJJSVJPTlwiOiBcIk9ULTU4MGFcIixcbiAgICBcIk1PTlRFTVwiOiBcIk9ULTU4MGJcIixcbiAgICBcIlZBTExJU1wiOiBcIk9ULTU4MGNcIixcbiAgICBcIlBBTExBREFcIjogXCJPVC01ODBkXCIsXG4gICAgXCJQUklTTVwiOiBcIk9ULTg4OWFcIixcbiAgICBcIkpFRVRJWVVcIjogXCJPVC04ODliXCIsXG4gICAgXCJTQUxBRElOXCI6IFwiUEctODk5YlwiLFxuICAgIFwiTkFTQ0VOVFwiOiBcIlFKLTE0OWNcIixcbiAgICBcIkVMT05cIjogXCJRSi02NTBjXCIsXG4gICAgXCJMT00gUEFMQU5LQVwiOiBcIlFKLTY4NGFcIixcbiAgICBcIkFDRUxBTkRcIjogXCJRSi02ODRiXCIsXG4gICAgXCJDSVJDQVwiOiBcIlFRLTAwMWFcIixcbiAgICBcIkNJUkNFXCI6IFwiUVEtMDAxYlwiLFxuICAgIFwiQ0VMRUJESUxcIjogXCJRUS02NDViXCIsXG4gICAgXCJNQUxBSEFUXCI6IFwiUkMtMDQwYlwiLFxuICAgIFwiSVJPTkZPUkdFXCI6IFwiUkMtMDQwY1wiLFxuICAgIFwiSUNFIFNUQVRJT04gQUxQSEFcIjogXCJTRS0xMTBjXCIsXG4gICAgXCJTSEVPTFwiOiBcIlRELTIwM2JcIixcbiAgICBcIlJIQVpFU1wiOiBcIlRELTIyOGJcIixcbiAgICBcIkFTQkVTVE9TIExFQUQgQVNCRVNUT1NcIjogXCJVVi0wNzJjXCIsXG4gICAgXCJLQVRPQVwiOiBcIlVWLTM1MWFcIixcbiAgICBcIllBTk5JQ0tcIjogXCJVVi0zNTFiXCIsXG4gICAgXCJVTUJSQVwiOiBcIlVWLTM1MWNcIixcbiAgICBcIkJJT0dFTkVTSVNcIjogXCJVVi0zNTFkXCIsXG4gICAgXCJQUk9YSU9OXCI6IFwiVVYtNzk2YlwiLFxuICAgIFwiUEhBTlRBU01cIjogXCJWSC0wNDNhXCIsXG4gICAgXCJQUk9NSVRPUlwiOiBcIlZILTMzMWFcIixcbiAgICBcIkhFTElPTiBQUklNRVwiOiBcIlZILTMzMWRcIixcbiAgICBcIk9EWVNTRVVTXCI6IFwiVkgtMzMxZlwiLFxuICAgIFwiQVZBTE9OXCI6IFwiVkgtMzMxZ1wiLFxuICAgIFwiSFlEUk9OXCI6IFwiVkgtMzMxaVwiLFxuICAgIFwiR0FTV09STERcIjogXCJXQi02NzVpXCIsXG4gICAgXCJNSU1BUlwiOiBcIldDLTcwMmJcIixcbiAgICBcIk1BR1VTXCI6IFwiWEQtMzU0YlwiLFxuICAgIFwiVVBPTk9SXCI6IFwiWEgtMzI5YVwiLFxuICAgIFwiTElCRVJUQVNcIjogXCJYSC01OTRhXCIsXG4gICAgXCJLSVJVTkFcIjogXCJYSC01OTRiXCIsXG4gICAgXCJDT1JURVpcIjogXCJYSC01OTRjXCIsXG4gICAgXCJLVUJcIjogXCJZSS0wNTlmXCIsXG4gICAgXCJIQVJQSU5BXCI6IFwiWUktMjA5aFwiLFxuICAgIFwiQVJDQURJQVwiOiBcIllJLTY4M2NcIixcbiAgICBcIlZFUkRBTlRcIjogXCJZSS03MTViXCIsXG4gICAgXCJOT1JXSUNLXCI6IFwiWUstNjQ5YlwiLFxuICAgIFwiTklLRVwiOiBcIlpWLTE5NGFcIixcbiAgICBcIkhFUEhBRVNUVVNcIjogXCJaVi0zMDdjXCIsXG4gICAgXCJQSE9CT1NcIjogXCJaVi0zMDdkXCIsXG4gICAgXCJWVUxDQU5cIjogXCJaVi03NTliXCIsXG4gICAgXCJERUlNT1NcIjogXCJaVi03NTljXCIsXG4gICAgXCJIQVJNT05JQVwiOiBcIlpWLTg5NmJcIlxufTtcbmV4cG9ydCBjb25zdCBNYXRlcmlhbE5hbWVzID0ge1xuICAgIFwiQUFSXCI6IFtcIkFudGVubmEgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJBQkhcIjogW1wiQWR2YW5jZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkFDU1wiOiBbXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJBREVcIjogW1wiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQURSXCI6IFtcIkF1dG8tRG9jXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJBRFNcIjogW1wiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkFFRlwiOiBbXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiQUVOXCI6IFtcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJBRlBcIjogW1wiQWR2YW5jZWQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQUZSXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQUdTXCI6IFtcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJBSFBcIjogW1wiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJBSVJcIjogW1wiQWlyIFNjcnViYmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiQUxcIjogW1wiQWx1bWluaXVtXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiQUxFXCI6IFtcIlN0ZWxsYXIgUGFsZSBBbGVcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIkFMR1wiOiBbXCJQcm90ZWluLVJpY2ggQWxnYWVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJBTE9cIjogW1wiQWx1bWluaXVtIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJBTU1cIjogW1wiQW1tb25pYVwiLCBcImdhc2VzXCJdLFxuICAgIFwiQU5aXCI6IFtcIkFkdmFuY2VkIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkFQVFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkFSXCI6IFtcIkFyZ29uXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJBUlBcIjogW1wiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJBU0VcIjogW1wiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQVNUXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXG4gICAgXCJBVEFcIjogW1wiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkFUUFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiQVVcIjogW1wiR29sZFwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIkFVT1wiOiBbXCJHb2xkIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJBV0ZcIjogW1wiQWN0aXZlIFdhdGVyIEZpbHRlclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkFXSFwiOiBbXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkJBQ1wiOiBbXCJIZWxwZnVsIEJhY3RlcmlhXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiQkFJXCI6IFtcIkJhc2ljIEFJIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJCQkhcIjogW1wiQmFzaWMgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkJDT1wiOiBbXCJCdWRnZXQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiQkRFXCI6IFtcIkJhc2ljIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkJFXCI6IFtcIkJlcnlsbGl1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiQkVBXCI6IFtcIlByb3RlaW4tUmljaCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkJFUlwiOiBbXCJCZXJ5bCBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiQkZQXCI6IFtcIkJhc2ljIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkJGUlwiOiBbXCJCYXNpYyBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkJHQ1wiOiBbXCJTaGllbGRlZCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJCR09cIjogW1wiQmx1ZSBHb2xkXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiQkdTXCI6IFtcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJCSFBcIjogW1wiQmFzaWMgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJCSURcIjogW1wiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkJMXCI6IFtcIkJyZWF0aGFibGUgTGlxdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiQkxFXCI6IFtcIkRlc2F0dXJhdGlvbiBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkJNRlwiOiBbXCJCYXNpYyBNYWluZnJhbWVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJCTkRcIjogW1wiQmFuZGFnZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIkJPUlwiOiBbXCJCb3JvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiQk9TXCI6IFtcIkJvcm9zaWxpY2F0ZVwiLCBcImFsbG95c1wiXSxcbiAgICBcIkJQVFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkJSMVwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzFcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJCUjJcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsyXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQlJNXCI6IFtcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJCUk9cIjogW1wiQnJvbnplXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiQlJQXCI6IFtcIkJhc2ljIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQlJTXCI6IFtcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQlNDXCI6IFtcIkJvZHkgU2Nhbm5lclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkJTRVwiOiBbXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJCVEFcIjogW1wiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkJUU1wiOiBbXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIiwgXCJsaXF1aWRzXCJdLFxuICAgIFwiQldIXCI6IFtcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQldTXCI6IFtcIkJhc2ljIFdvcmtzdGF0aW9uXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQ1wiOiBbXCJDYXJib25cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIkNBXCI6IFtcIkNhbGNpdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIkNBRlwiOiBbXCJDYWZmZWluYXRlZCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkNBUFwiOiBbXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIkNCTFwiOiBbXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiQ0JNXCI6IFtcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiQ0JTXCI6IFtcIlNtYWxsIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJDQ1wiOiBbXCJDbGltYXRlIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJDQ0RcIjogW1wiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIkNEXCI6IFtcIkNhcGFjaXRpdmUgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJDRlwiOiBbXCJDZXJhbWljIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiQ0hBXCI6IFtcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkNMXCI6IFtcIkNobG9yaW5lXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJDTElcIjogW1wiQ2FsaWNoZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJDTUtcIjogW1wiXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIkNPRlwiOiBbXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiQ09NXCI6IFtcIkNvbW11bmljYXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiQ09UXCI6IFtcIkNvdHRvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIkNRTFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJDUU1cIjogW1wiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkNRU1wiOiBbXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJDUVRcIjogW1wiQ3JldyBRdWFydGVycyAoVGlueSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJDUlVcIjogW1wiQ3J5b2dlbmljIFVuaXRcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJDU1RcIjogW1wiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJDVEZcIjogW1wiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIkNVXCI6IFtcIkNvcHBlclwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIkNVT1wiOiBbXCJDb3BwZXIgT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIkRBXCI6IFtcIkRhdGEgQW5hbHl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIkRDSFwiOiBbXCJEcm9uZSBDaGFzc2lzXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiRENMXCI6IFtcIkR1cmFibGUgQ2FzaW5nIExcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIkRDTVwiOiBbXCJEdXJhYmxlIENhc2luZyBNXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJEQ1NcIjogW1wiRHVyYWJsZSBDYXNpbmcgU1wiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiRERcIjogW1wiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIkREVFwiOiBbXCJERFQgUGxhbnQgQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJERUNcIjogW1wiRGVjb3JhdGl2ZSBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkRJU1wiOiBbXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIkRPVVwiOiBbXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJEUkZcIjogW1wiRHJvbmUgRnJhbWVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJEVlwiOiBbXCJEYXRhIFZpc3VhbGl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIkRXXCI6IFtcIkRyaW5raW5nIFdhdGVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkVEQ1wiOiBbXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiRUVTXCI6IFtcIkVucmljaGVkIEVpbnN0ZWluaXVtXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiRU5HXCI6IFtcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJFUE9cIjogW1wiRXBveHkgUmVzaW5cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiRVNcIjogW1wiRWluc3RlaW5pdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIkVUQ1wiOiBbXCJFbnJpY2hlZCBUZWNobmV0aXVtXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiRVhPXCI6IFtcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJGXCI6IFtcIkZsdW9yaW5lXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJGQUxcIjogW1wiRmVycm9taW5pdW1cIiwgXCJhbGxveXNcIl0sXG4gICAgXCJGQU5cIjogW1wiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIkZDXCI6IFtcIkZsb3cgQ29udHJvbCBEZXZpY2VcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJGRVwiOiBbXCJJcm9uXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiRkVPXCI6IFtcIklyb24gT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIkZFVFwiOiBbXCJGZXJyby1UaXRhbml1bVwiLCBcImFsbG95c1wiXSxcbiAgICBcIkZGXCI6IFtcIkZUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXG4gICAgXCJGRkNcIjogW1wiRlRMIEZpZWxkIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJGSU1cIjogW1wiRmxhdm91cmVkIEluc3RhLU1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiRklSXCI6IFtcIkZpc3Npb24gUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkZMT1wiOiBbXCJGbG9hdGluZyBUYW5rXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiRkxQXCI6IFtcIkZsdWlkIFBpcGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkZMWFwiOiBbXCJGbHV4XCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiRk9EXCI6IFtcIkFsbC1QdXJwb3NlIEZvZGRlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkZTRVwiOiBbXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiRlVOXCI6IFtcIkVudGVydGFpbm1lbnQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkdBTFwiOiBbXCJHYWxlcml0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJHQ1wiOiBbXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiR0NIXCI6IFtcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkdFTlwiOiBbXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiR0lOXCI6IFtcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJHTFwiOiBbXCJHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJHTlpcIjogW1wiR2xhc3MgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiR1JBXCI6IFtcIldpbmUtUXVhbGl0eSBHcmFwZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJHUk5cIjogW1wiSGlnaC1DYXJiIEdyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkdWXCI6IFtcIkdhcyBWZW50XCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiSFwiOiBbXCJIeWRyb2dlblwiLCBcImdhc2VzXCJdLFxuICAgIFwiSDJPXCI6IFtcIldhdGVyXCIsIFwibGlxdWlkc1wiXSxcbiAgICBcIkhBQlwiOiBbXCJIYWJpdGF0IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJIQUxcIjogW1wiSGFsaXRlIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJIQ0NcIjogW1wiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJIQ1BcIjogW1wiSHlkcm9jYXJib24gUGxhbnRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiSERcIjogW1wiSG9sb2dyYXBoaWMgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkhFXCI6IFtcIkhlbGl1bVwiLCBcImdhc2VzXCJdLFxuICAgIFwiSEUzXCI6IFtcIkhlbGl1bS0zIElzb3RvcGVcIiwgXCJnYXNlc1wiXSxcbiAgICBcIkhFUlwiOiBbXCJTcGljeSBIZXJic1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkhFWFwiOiBbXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIiwgXCJsaXF1aWRzXCJdLFxuICAgIFwiSEhQXCI6IFtcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiSE1TXCI6IFtcIkhhek1hdCBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiSE5aXCI6IFtcIkh5cGVydGhydXN0IE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkhPR1wiOiBbXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiSE9QXCI6IFtcIkZsb3dlcnkgSG9wc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkhQQ1wiOiBbXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiSFBSXCI6IFtcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJIU0VcIjogW1wiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiSFNTXCI6IFtcIlNtYXJ0IFNwYWNlIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiSFRFXCI6IFtcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJIWVJcIjogW1wiSHlwZXItcG93ZXIgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIklcIjogW1wiSW9kaW5lXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJJRENcIjogW1wiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcbiAgICBcIklNTVwiOiBbXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXG4gICAgXCJJTkRcIjogW1wiSW5kaWdvIENvbG9yYW50XCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiSU5TXCI6IFtcIkluc3VGb2FtXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIkpVSVwiOiBbXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJLT01cIjogW1wiS29tYnVjaGFcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIktWXCI6IFtcIktldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIkxCSFwiOiBbXCJMaWdodHdlaWdodCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiTENcIjogW1wiQUktQXNzaXN0ZWQgTGFiIENvYXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiTENCXCI6IFtcIkxhcmdlIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJMQ1JcIjogW1wiTGlxdWlkIENyeXN0YWxzXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiTERcIjogW1wiTG9jYWwgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiTERFXCI6IFtcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkxESVwiOiBbXCJMYXNlciBEaW9kZXNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIkxFU1wiOiBbXCJMaXF1aWQgRWluc3RlaW5pdW1cIiwgXCJsaXF1aWRzXCJdLFxuICAgIFwiTEZFXCI6IFtcIkxhcmdlIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiTEZMXCI6IFtcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTEZQXCI6IFtcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkxIUFwiOiBbXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkxJXCI6IFtcIkxpdGhpdW1cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJMSU9cIjogW1wiTGl0aGl1bSBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiTElTXCI6IFtcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJMSVRcIjogW1wiTmVvbiBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJMT0dcIjogW1wiTG9naXN0aWNzIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkxTRVwiOiBbXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJMU0xcIjogW1wiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJMU1RcIjogW1wiTGltZXN0b25lXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJMVEFcIjogW1wiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkxVXCI6IFtcIkxhYm9yYXRvcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIk1BR1wiOiBbXCJNYWduZXRpdGVcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIk1BSVwiOiBbXCJIaWdoLUNhcmIgTWFpemVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJNQlwiOiBbXCJNb3RoZXJib2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJNQ0JcIjogW1wiTWVkaXVtIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJNQ0dcIjogW1wiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIk1FQVwiOiBbXCJRdWFsaXR5IE1lYXQgTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJNRURcIjogW1wiQmFzaWMgTWVkaWNhbCBLaXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiTUZFXCI6IFtcIk1lZGl1bSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIk1GS1wiOiBbXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJNRkxcIjogW1wiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiTUdcIjogW1wiTWFnbmVzaXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJNR0NcIjogW1wiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiTUdTXCI6IFtcIk1hZ25lc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiTUhMXCI6IFtcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJNSFBcIjogW1wiTWljcm8gSGVhZHBob25lc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIk1MSVwiOiBbXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJNUENcIjogW1wiTWljcm8tUHJvY2Vzc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIk1TTFwiOiBbXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJNVENcIjogW1wiTWVnYVR1YmUgQ29hdGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJNVFBcIjogW1wiTWVhdCBUaXNzdWUgUGF0dGllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIk1VU1wiOiBbXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiTVdGXCI6IFtcIk1lZGl1bSBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiTlwiOiBbXCJOaXRyb2dlblwiLCBcImdhc2VzXCJdLFxuICAgIFwiTkFcIjogW1wiU29kaXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJOQUJcIjogW1wiU29kaXVtIEJvcm9oeWRyaWRlXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiTkNTXCI6IFtcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIk5FXCI6IFtcIk5lb25cIiwgXCJnYXNlc1wiXSxcbiAgICBcIk5GXCI6IFtcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIk5GSVwiOiBbXCJOYW5vIEZpYmVyXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIk5HXCI6IFtcIk5hbm8tQ29hdGVkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIk5MXCI6IFtcIk55bG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiTk5cIjogW1wiTmV1cmFsIE5ldHdvcmtcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcbiAgICBcIk5PWlwiOiBbXCJCYXNpYyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJOUlwiOiBbXCJOYW5vLUVuaGFuY2VkIFJlc2luXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiTlNcIjogW1wiTnV0cmllbnQgU29sdXRpb25cIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJOU1RcIjogW1wiTmV1cm9TdGltdWxhbnRzXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJOVVRcIjogW1wiVHJpZ2x5Y2VyaWRlIE51dHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJOVjFcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIk5WMlwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiT1wiOiBbXCJPeHlnZW5cIiwgXCJnYXNlc1wiXSxcbiAgICBcIk9GRlwiOiBbXCJPZmZpY2UgU3VwcGxpZXNcIiwgXCJ1dGlsaXR5XCJdLFxuICAgIFwiT0xGXCI6IFtcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiT1NcIjogW1wiT3BlcmF0aW5nIFN5c3RlbVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiT1ZFXCI6IFtcIkJhc2ljIE92ZXJhbGxzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlBDQlwiOiBbXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiUERBXCI6IFtcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlBFXCI6IFtcIlBvbHktRXRoeWxlbmVcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIlBGRVwiOiBbXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJQR1wiOiBbXCJQb2x5bWVyIEdyYW51bGF0ZVwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiUElCXCI6IFtcIlBpbmViZXJyaWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiUEtcIjogW1wiUGFpbmtpbGxlcnNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIlBPV1wiOiBbXCJQb3dlciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJQUEFcIjogW1wiUHJvdGVpbiBQYXN0ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlBTSFwiOiBbXCJQcmVzc3VyZSBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJQU0xcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIExcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIlBTTVwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiUFNTXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJQVFwiOiBbXCJQb3dlciBUb29sc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJQV09cIjogW1wiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiUUNSXCI6IFtcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIlJBRFwiOiBbXCJSYWRpbyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJSQUdcIjogW1wiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIlJBTVwiOiBbXCJNZW1vcnkgQmFua1wiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJSQVRcIjogW1wiQmFzaWMgUmF0aW9uc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJSQkhcIjogW1wiUmVpbmZvcmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiUkNPXCI6IFtcIlJhdyBDb3R0b24gRmliZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJSQ1NcIjogW1wiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIlJDVFwiOiBbXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIlJERVwiOiBbXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIlJETFwiOiBbXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJSRFNcIjogW1wiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiUkVBXCI6IFtcIkNoZW1pY2FsIFJlYWdlbnRzXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiUkVEXCI6IFtcIlJlc2N1ZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIlJFUFwiOiBbXCJSZXBhaXIgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJSR1wiOiBbXCJSZWluZm9yY2VkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIlJHT1wiOiBbXCJSZWQgR29sZFwiLCBcImFsbG95c1wiXSxcbiAgICBcIlJIUFwiOiBbXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiUk9NXCI6IFtcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiUlNFXCI6IFtcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiUlNIXCI6IFtcIlJhZGlhdGlvbiBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJSU0lcIjogW1wiUmF3IFNpbGsgU3RyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlJUQVwiOiBbXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJTXCI6IFtcIlN1bGZ1clwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiU0FcIjogW1wiU2VhcmNoIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJTQUxcIjogW1wiU29ydGluZyBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiU0FSXCI6IFtcIlNlbnNvciBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIlNDXCI6IFtcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIlNDQlwiOiBbXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiU0NOXCI6IFtcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJTQ1JcIjogW1wiU3VsZnVyIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJTRFJcIjogW1wiU3VyZ2ljYWwgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJTRUFcIjogW1wiUG9seS1TdWxmaXRlIFNlYWxhbnRcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiU0VOXCI6IFtcIlNlbnNvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJTRVFcIjogW1wiU3VyZ2ljYWwgRXF1aXBtZW50XCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJTRlwiOiBbXCJTVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxuICAgIFwiU0ZFXCI6IFtcIlNtYWxsIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiU0ZLXCI6IFtcIlNtYWxsIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiU0ZMXCI6IFtcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiU0lcIjogW1wiU2lsaWNvblwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIlNJTFwiOiBbXCJTaWxrZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJTSU9cIjogW1wiU2lsaWNvbiBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiU05NXCI6IFtcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxuICAgIFwiU09JXCI6IFtcIkFydGlmaWNpYWwgU29pbFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIlNPTFwiOiBbXCJTb2xhciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJTUFwiOiBbXCJTb2xhciBQYW5lbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxuICAgIFwiU1JEXCI6IFtcIlNoaXAtUmVwYWlyIERyb25lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiU1JQXCI6IFtcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiU1NDXCI6IFtcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiU1NMXCI6IFtcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiU1RMXCI6IFtcIlN0ZWVsXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiU1RSXCI6IFtcIk1lZGljYWwgU3RyZXRjaGVyXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXG4gICAgXCJTVFNcIjogW1wiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiU1VcIjogW1wiU3VyZ2VyeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiU1VEXCI6IFtcIlN1cnZlaWxsYW5jZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIlNVTlwiOiBbXCJTYWZldHkgVW5pZm9ybVwiLCBcInV0aWxpdHlcIl0sXG4gICAgXCJTV0ZcIjogW1wiU21hbGwgV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIlRBXCI6IFtcIlRhbnRhbHVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJUQUNcIjogW1wiVGFyZ2V0aW5nIENvbXB1dGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiVEFJXCI6IFtcIlRhbnRhbGl0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJUQ1wiOiBbXCJUZWNobmV0aXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJUQ0JcIjogW1wiVGlueSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiVENMXCI6IFtcIlRDTCBBY2lkXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiVENPXCI6IFtcIlRlY2huZXRpdW0gT3hpZGVcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIlRDU1wiOiBbXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJUQ1VcIjogW1wiVHJhdW1hIENhcmUgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIlRIRlwiOiBbXCJUaGVybW9GbHVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIlRIUFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiVElcIjogW1wiVGl0YW5pdW1cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJUSU9cIjogW1wiVGl0YW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIlRLXCI6IFtcIlRlY2hub0tldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIlRQVVwiOiBbXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlRSQVwiOiBbXCJBdWRpbyBUcmFuc21pdHRlclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJUUk5cIjogW1wiQWR2YW5jZWQgVHJhbnNpc3RvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiVFJVXCI6IFtcIlRydXNzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiVFNcIjogW1wiVGVjdG9zaWxpc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiVFNIXCI6IFtcIlRoZXJtYWwgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiVFVCXCI6IFtcIlRlc3QgVHViZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIlVUU1wiOiBbXCJVbml2ZXJzYWwgVG9vbHNldFwiLCBcInV0aWxpdHlcIl0sXG4gICAgXCJWQ0JcIjogW1wiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIlZFR1wiOiBbXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiVkdcIjogW1wiVml0YUdlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiVklUXCI6IFtcIlZpdGEgRXNzZW5jZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlZTQ1wiOiBbXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJXXCI6IFtcIlR1bmdzdGVuXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiV0FJXCI6IFtcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxuICAgIFwiV0FMXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIiwgXCJhbGxveXNcIl0sXG4gICAgXCJXQ0JcIjogW1wiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJXSU5cIjogW1wiU21hcnQgWmluZmFuZGVsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJXTVwiOiBbXCJXaW5kb3cgTWFuYWdlclwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJXT1JcIjogW1wiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJXUlwiOiBbXCJXYXRlciBSZWNsYWltZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJXU1wiOiBbXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJaSVJcIjogW1wiWmlyY29uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJaUlwiOiBbXCJaaXJjb25pdW1cIiwgXCJlbGVtZW50c1wiXSxcbn07XG5leHBvcnQgY29uc3QgTWF0ZXJpYWxzID0ge1xuICAgIFwiQW50ZW5uYSBBcnJheVwiOiBbXCJBQVJcIiwgMC43OCwgMC41XSxcbiAgICBcIkFkdmFuY2VkIEJ1bGtoZWFkXCI6IFtcIkFCSFwiLCAwLjYsIDAuOV0sXG4gICAgXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIjogW1wiQUNTXCIsIDAuMywgMC4yXSxcbiAgICBcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIjogW1wiQURFXCIsIDAuNCwgMS41XSxcbiAgICBcIkF1dG8tRG9jXCI6IFtcIkFEUlwiLCAwLjEsIDAuMV0sXG4gICAgXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCI6IFtcIkFEU1wiLCAwLjcsIDJdLFxuICAgIFwiQWVyb3N0YXQgRm91bmRhdGlvblwiOiBbXCJBRUZcIiwgMiwgNV0sXG4gICAgXCJBZHZhbmNlZCBTVEwgRW5naW5lXCI6IFtcIkFFTlwiLCAxNCwgN10sXG4gICAgXCJBZHZhbmNlZCBGdWVsIFB1bXBcIjogW1wiQUZQXCIsIDEsIDAuMjVdLFxuICAgIFwiQWR2YW5jZWQgRnVlbCBSb2RcIjogW1wiQUZSXCIsIDAuNCwgMC4xXSxcbiAgICBcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiOiBbXCJBR1NcIiwgMzAsIDVdLFxuICAgIFwiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiOiBbXCJBSFBcIiwgMjAsIDEwXSxcbiAgICBcIkFpciBTY3J1YmJlclwiOiBbXCJBSVJcIiwgMS43LCAzXSxcbiAgICBcIkFsdW1pbml1bVwiOiBbXCJBTFwiLCAyLjcsIDFdLFxuICAgIFwiU3RlbGxhciBQYWxlIEFsZVwiOiBbXCJBTEVcIiwgMC4xLCAwLjFdLFxuICAgIFwiUHJvdGVpbi1SaWNoIEFsZ2FlXCI6IFtcIkFMR1wiLCAwLjcsIDFdLFxuICAgIFwiQWx1bWluaXVtIE9yZVwiOiBbXCJBTE9cIiwgMS4zNSwgMV0sXG4gICAgXCJBbW1vbmlhXCI6IFtcIkFNTVwiLCAwLjg2LCAxXSxcbiAgICBcIkFkdmFuY2VkIE5venpsZVwiOiBbXCJBTlpcIiwgNiwgM10sXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJBUFRcIiwgMC4wMywgMC4zXSxcbiAgICBcIkFyZ29uXCI6IFtcIkFSXCIsIDEuNzg0LCAxXSxcbiAgICBcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCI6IFtcIkFSUFwiLCAwLjA0LCAwLjJdLFxuICAgIFwiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJBU0VcIiwgMC41LCAwLjZdLFxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiOiBbXCJBU1RcIiwgNC45OCwgMV0sXG4gICAgXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJBVEFcIiwgMC4zLCAwLjRdLFxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIkFUUFwiLCAyLjksIDFdLFxuICAgIFwiR29sZFwiOiBbXCJBVVwiLCAxOS4zMiwgMV0sXG4gICAgXCJHb2xkIE9yZVwiOiBbXCJBVU9cIiwgMy44NiwgMV0sXG4gICAgXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCI6IFtcIkFXRlwiLCAwLjgsIDEuMl0sXG4gICAgXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJBV0hcIiwgMC4xMiwgMV0sXG4gICAgXCJIZWxwZnVsIEJhY3RlcmlhXCI6IFtcIkJBQ1wiLCAwLjE1LCAwLjE1XSxcbiAgICBcIkJhc2ljIEFJIEZyYW1ld29ya1wiOiBbXCJCQUlcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiQmFzaWMgQnVsa2hlYWRcIjogW1wiQkJIXCIsIDAuNSwgMC44XSxcbiAgICBcIkJ1ZGdldCBDb25uZWN0b3JzXCI6IFtcIkJDT1wiLCAwLjAwNSwgMC4wMDJdLFxuICAgIFwiQmFzaWMgRGVjayBFbGVtZW50c1wiOiBbXCJCREVcIiwgMC4xLCAxLjVdLFxuICAgIFwiQmVyeWxsaXVtXCI6IFtcIkJFXCIsIDEuODQsIDFdLFxuICAgIFwiUHJvdGVpbi1SaWNoIEJlYW5zXCI6IFtcIkJFQVwiLCAwLjgsIDFdLFxuICAgIFwiQmVyeWwgQ3J5c3RhbHNcIjogW1wiQkVSXCIsIDEuOTIsIDFdLFxuICAgIFwiQmFzaWMgRnVlbCBQdW1wXCI6IFtcIkJGUFwiLCAwLjgsIDAuMl0sXG4gICAgXCJCYXNpYyBGdWVsIFJvZFwiOiBbXCJCRlJcIiwgMC4zLCAwLjFdLFxuICAgIFwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiOiBbXCJCR0NcIiwgMC4wMSwgMC4wMDJdLFxuICAgIFwiQmx1ZSBHb2xkXCI6IFtcIkJHT1wiLCAxOS4zMiwgMV0sXG4gICAgXCJCYXNpYyBIaWdoLUcgU2VhdHNcIjogW1wiQkdTXCIsIDIwLCAzXSxcbiAgICBcIkJhc2ljIEh1bGwgUGxhdGVcIjogW1wiQkhQXCIsIDEwLCAxMF0sXG4gICAgXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCI6IFtcIkJJRFwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIkJyZWF0aGFibGUgTGlxdWlkXCI6IFtcIkJMXCIsIDEuMTIsIDFdLFxuICAgIFwiRGVzYXR1cmF0aW9uIEFnZW50XCI6IFtcIkJMRVwiLCAwLjUsIDAuNV0sXG4gICAgXCJCYXNpYyBNYWluZnJhbWVcIjogW1wiQk1GXCIsIDAuOCwgMS4yXSxcbiAgICBcIkJhbmRhZ2VzXCI6IFtcIkJORFwiLCAwLjAwMSwgMC4wMDVdLFxuICAgIFwiQm9yb24gQ3J5c3RhbHNcIjogW1wiQk9SXCIsIDEuOCwgMV0sXG4gICAgXCJCb3Jvc2lsaWNhdGVcIjogW1wiQk9TXCIsIDEuNSwgMV0sXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJCUFRcIiwgMC4wMiwgMC4zXSxcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMVwiOiBbXCJCUjFcIiwgMTgwLCAzMDBdLFxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsyXCI6IFtcIkJSMlwiLCAyODAsIDQwMF0sXG4gICAgXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiOiBbXCJCUk1cIiwgMi41LCAxXSxcbiAgICBcIkJyb256ZVwiOiBbXCJCUk9cIiwgOC43MywgMV0sXG4gICAgXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJCUlBcIiwgMC4wMywgMC4yXSxcbiAgICBcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCI6IFtcIkJSU1wiLCAxNTAsIDIwMF0sXG4gICAgXCJCb2R5IFNjYW5uZXJcIjogW1wiQlNDXCIsIDAuMSwgMC4xXSxcbiAgICBcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQlNFXCIsIDAuMywgMC41XSxcbiAgICBcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkJUQVwiLCAwLjMsIDAuNF0sXG4gICAgXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIjogW1wiQlRTXCIsIDEuMDUsIDFdLFxuICAgIFwiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQldIXCIsIDAuMSwgMV0sXG4gICAgXCJCYXNpYyBXb3Jrc3RhdGlvblwiOiBbXCJCV1NcIiwgMC4wNSwgMC4xXSxcbiAgICBcIkNhcmJvblwiOiBbXCJDXCIsIDIuMjUsIDFdLFxuICAgIFwiQ2FsY2l1bVwiOiBbXCJDQVwiLCAxLjU0LCAxXSxcbiAgICBcIkNhZmZlaW5hdGVkIEJlYW5zXCI6IFtcIkNBRlwiLCAwLjg2LCAxXSxcbiAgICBcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiOiBbXCJDQVBcIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIkxhcmdlIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTFwiLCA1LjQsIDIuNF0sXG4gICAgXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JNXCIsIDMuNiwgMS42XSxcbiAgICBcIlNtYWxsIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCU1wiLCAxLjgsIDAuOF0sXG4gICAgXCJDbGltYXRlIENvbnRyb2xsZXJcIjogW1wiQ0NcIiwgMC41LCAxXSxcbiAgICBcIkNyb3dkIENvbnRyb2wgRHJvbmVcIjogW1wiQ0NEXCIsIDAuMywgMC4wNV0sXG4gICAgXCJDYXBhY2l0aXZlIERpc3BsYXlcIjogW1wiQ0RcIiwgMC4wMDQsIDAuMDAyXSxcbiAgICBcIkNlcmFtaWMgRmFicmljXCI6IFtcIkNGXCIsIDIuODIsIDFdLFxuICAgIFwiQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkNIQVwiLCAxLjIsIDAuN10sXG4gICAgXCJDaGxvcmluZVwiOiBbXCJDTFwiLCAzLjIsIDFdLFxuICAgIFwiQ2FsaWNoZSBSb2NrXCI6IFtcIkNMSVwiLCAyLjQyLCAxXSxcbiAgICBcIlwiOiBbXCJDTUtcIiwgNC41NiwgMzMuMl0sXG4gICAgXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiOiBbXCJDT0ZcIiwgMC4xLCAwLjFdLFxuICAgIFwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIjogW1wiQ09NXCIsIDAuNSwgMS41XSxcbiAgICBcIkNvdHRvbiBGYWJyaWNcIjogW1wiQ09UXCIsIDAuNzcsIDFdLFxuICAgIFwiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCI6IFtcIkNRTFwiLCA3NSwgMTUwXSxcbiAgICBcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIjogW1wiQ1FNXCIsIDUwLCAxMDBdLFxuICAgIFwiQ3JldyBRdWFydGVycyAoU21hbGwpXCI6IFtcIkNRU1wiLCAyNSwgNTBdLFxuICAgIFwiQ3JldyBRdWFydGVycyAoVGlueSlcIjogW1wiQ1FUXCIsIDEyLjUsIDI1XSxcbiAgICBcIkNyeW9nZW5pYyBVbml0XCI6IFtcIkNSVVwiLCAyLjIsIDJdLFxuICAgIFwiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIjogW1wiQ1NUXCIsIDEuMTQsIDFdLFxuICAgIFwiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIjogW1wiQ1RGXCIsIDQuMzIsIDFdLFxuICAgIFwiQ29wcGVyXCI6IFtcIkNVXCIsIDguOTIsIDFdLFxuICAgIFwiQ29wcGVyIE9yZVwiOiBbXCJDVU9cIiwgNC4wMSwgMV0sXG4gICAgXCJEYXRhIEFuYWx5emVyXCI6IFtcIkRBXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkRyb25lIENoYXNzaXNcIjogW1wiRENIXCIsIDAuMiwgMC4wM10sXG4gICAgXCJEdXJhYmxlIENhc2luZyBMXCI6IFtcIkRDTFwiLCAwLjA4LCAwLjhdLFxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTVwiOiBbXCJEQ01cIiwgMC4wNCwgMC40XSxcbiAgICBcIkR1cmFibGUgQ2FzaW5nIFNcIjogW1wiRENTXCIsIDAuMDEsIDAuMV0sXG4gICAgXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiOiBbXCJERFwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJERFQgUGxhbnQgQWdlbnRcIjogW1wiRERUXCIsIDAuMTEsIDAuMV0sXG4gICAgXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCI6IFtcIkRFQ1wiLCAwLjUsIDJdLFxuICAgIFwiSW5mb3JtYXRpb24gRGlzcGxheVwiOiBbXCJESVNcIiwgMC4wMiwgMC4wMl0sXG4gICAgXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiRE9VXCIsIDUsIDRdLFxuICAgIFwiRHJvbmUgRnJhbWVcIjogW1wiRFJGXCIsIDAuMSwgMC4wMl0sXG4gICAgXCJEYXRhIFZpc3VhbGl6ZXJcIjogW1wiRFZcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiRHJpbmtpbmcgV2F0ZXJcIjogW1wiRFdcIiwgMC4xLCAwLjFdLFxuICAgIFwiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIjogW1wiRURDXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkVucmljaGVkIEVpbnN0ZWluaXVtXCI6IFtcIkVFU1wiLCA5LjIsIDFdLFxuICAgIFwiU3RhbmRhcmQgU1RMIEVuZ2luZVwiOiBbXCJFTkdcIiwgOCwgNF0sXG4gICAgXCJFcG94eSBSZXNpblwiOiBbXCJFUE9cIiwgMC4wNCwgMC4wMl0sXG4gICAgXCJFaW5zdGVpbml1bVwiOiBbXCJFU1wiLCAwLjg4LCAwLjFdLFxuICAgIFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiOiBbXCJFVENcIiwgNC4xLCAxXSxcbiAgICBcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiOiBbXCJFWE9cIiwgMC4xLCAwLjA1XSxcbiAgICBcIkZsdW9yaW5lXCI6IFtcIkZcIiwgMS42OTYsIDFdLFxuICAgIFwiRmVycm9taW5pdW1cIjogW1wiRkFMXCIsIDMuMjIsIDFdLFxuICAgIFwiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCI6IFtcIkZBTlwiLCAwLjEsIDAuMV0sXG4gICAgXCJGbG93IENvbnRyb2wgRGV2aWNlXCI6IFtcIkZDXCIsIDAuNSwgMC4yNV0sXG4gICAgXCJJcm9uXCI6IFtcIkZFXCIsIDcuODc0LCAxXSxcbiAgICBcIklyb24gT3JlXCI6IFtcIkZFT1wiLCA1LjksIDFdLFxuICAgIFwiRmVycm8tVGl0YW5pdW1cIjogW1wiRkVUXCIsIDYuODUsIDFdLFxuICAgIFwiRlRMIEZ1ZWxcIjogW1wiRkZcIiwgMC4wNSwgMC4wMV0sXG4gICAgXCJGVEwgRmllbGQgQ29udHJvbGxlclwiOiBbXCJGRkNcIiwgNTAsIDE2XSxcbiAgICBcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCI6IFtcIkZJTVwiLCAwLjU1LCAwLjVdLFxuICAgIFwiRmlzc2lvbiBSZWFjdG9yXCI6IFtcIkZJUlwiLCA3LCA0LjldLFxuICAgIFwiRmxvYXRpbmcgVGFua1wiOiBbXCJGTE9cIiwgMSwgMl0sXG4gICAgXCJGbHVpZCBQaXBpbmdcIjogW1wiRkxQXCIsIDAuMywgMl0sXG4gICAgXCJGbHV4XCI6IFtcIkZMWFwiLCAwLjI1LCAwLjFdLFxuICAgIFwiQWxsLVB1cnBvc2UgRm9kZGVyXCI6IFtcIkZPRFwiLCAxLjIsIDFdLFxuICAgIFwiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiOiBbXCJGU0VcIiwgNiwgM10sXG4gICAgXCJFbnRlcnRhaW5tZW50IFVuaXRcIjogW1wiRlVOXCIsIDUsIDRdLFxuICAgIFwiR2FsZXJpdGUgUm9ja1wiOiBbXCJHQUxcIiwgMi41MSwgMV0sXG4gICAgXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCI6IFtcIkdDXCIsIDAuMDUsIDAuMV0sXG4gICAgXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIjogW1wiR0NIXCIsIDEsIDAuNl0sXG4gICAgXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCI6IFtcIkdFTlwiLCA1LCAzXSxcbiAgICBcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCI6IFtcIkdJTlwiLCAwLjEsIDAuMV0sXG4gICAgXCJHbGFzc1wiOiBbXCJHTFwiLCAwLjAxNiwgMC4wMV0sXG4gICAgXCJHbGFzcyBOb3p6bGVcIjogW1wiR05aXCIsIDEuNSwgMV0sXG4gICAgXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCI6IFtcIkdSQVwiLCAxLjEsIDFdLFxuICAgIFwiSGlnaC1DYXJiIEdyYWluc1wiOiBbXCJHUk5cIiwgMC45LCAxXSxcbiAgICBcIkdhcyBWZW50XCI6IFtcIkdWXCIsIDAuMjUsIDAuMTVdLFxuICAgIFwiSHlkcm9nZW5cIjogW1wiSFwiLCAwLjA3LCAxXSxcbiAgICBcIldhdGVyXCI6IFtcIkgyT1wiLCAwLjIsIDAuMl0sXG4gICAgXCJIYWJpdGF0IFVuaXRcIjogW1wiSEFCXCIsIDEwLCA4XSxcbiAgICBcIkhhbGl0ZSBDcnlzdGFsc1wiOiBbXCJIQUxcIiwgMi4xNywgMV0sXG4gICAgXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIjogW1wiSENDXCIsIDAuMDEsIDAuMDAyXSxcbiAgICBcIkh5ZHJvY2FyYm9uIFBsYW50c1wiOiBbXCJIQ1BcIiwgMC44LCAxXSxcbiAgICBcIkhvbG9ncmFwaGljIERpc3BsYXlcIjogW1wiSERcIiwgMC4wNSwgMl0sXG4gICAgXCJIZWxpdW1cIjogW1wiSEVcIiwgMC4xNDUsIDFdLFxuICAgIFwiSGVsaXVtLTMgSXNvdG9wZVwiOiBbXCJIRTNcIiwgMC4xNDUsIDFdLFxuICAgIFwiU3BpY3kgSGVyYnNcIjogW1wiSEVSXCIsIDAuNCwgMV0sXG4gICAgXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIjogW1wiSEVYXCIsIDEuMSwgMV0sXG4gICAgXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCI6IFtcIkhIUFwiLCAxNSwgMTBdLFxuICAgIFwiSGF6TWF0IFdvcmsgU3VpdFwiOiBbXCJITVNcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJIeXBlcnRocnVzdCBOb3p6bGVcIjogW1wiSE5aXCIsIDYsIDEyXSxcbiAgICBcIkhvbG9ncmFwaGljIEdsYXNzZXNcIjogW1wiSE9HXCIsIDAuMDEsIDAuMDFdLFxuICAgIFwiRmxvd2VyeSBIb3BzXCI6IFtcIkhPUFwiLCAwLjM1LCAxXSxcbiAgICBcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIjogW1wiSFBDXCIsIDAuMDAzLCAwLjAwM10sXG4gICAgXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCI6IFtcIkhQUlwiLCAxOCwgMTVdLFxuICAgIFwiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJIU0VcIiwgMy4xLCAwLjddLFxuICAgIFwiU21hcnQgU3BhY2UgU3VpdFwiOiBbXCJIU1NcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCI6IFtcIkhURVwiLCAyMCwgMTBdLFxuICAgIFwiSHlwZXItcG93ZXIgUmVhY3RvclwiOiBbXCJIWVJcIiwgMzUsIDI1XSxcbiAgICBcIklvZGluZVwiOiBbXCJJXCIsIDQuOTMsIDFdLFxuICAgIFwiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCI6IFtcIklEQ1wiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiOiBbXCJJTU1cIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiSW5kaWdvIENvbG9yYW50XCI6IFtcIklORFwiLCAwLjIxLCAwLjJdLFxuICAgIFwiSW5zdUZvYW1cIjogW1wiSU5TXCIsIDAuMDYsIDAuMV0sXG4gICAgXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIjogW1wiSlVJXCIsIDEuMiwgMV0sXG4gICAgXCJLb21idWNoYVwiOiBbXCJLT01cIiwgMC4xLCAwLjFdLFxuICAgIFwiS2V2bGFyIEZhYnJpY1wiOiBbXCJLVlwiLCAxLjY1LCAxXSxcbiAgICBcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCI6IFtcIkxCSFwiLCAwLjIsIDAuNl0sXG4gICAgXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiOiBbXCJMQ1wiLCAwLjA1LCAwLjA1XSxcbiAgICBcIkxhcmdlIENhcmdvIEJheSBLaXRcIjogW1wiTENCXCIsIDIwMCwgMjAwXSxcbiAgICBcIkxpcXVpZCBDcnlzdGFsc1wiOiBbXCJMQ1JcIiwgMC4xNSwgMC4xXSxcbiAgICBcIkxvY2FsIERhdGFiYXNlXCI6IFtcIkxEXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIjogW1wiTERFXCIsIDAuMSwgMS4yXSxcbiAgICBcIkxhc2VyIERpb2Rlc1wiOiBbXCJMRElcIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIkxpcXVpZCBFaW5zdGVpbml1bVwiOiBbXCJMRVNcIiwgOC44NCwgMV0sXG4gICAgXCJMYXJnZSBGVEwgRW1pdHRlclwiOiBbXCJMRkVcIiwgMC40LCAxLjZdLFxuICAgIFwiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTEZMXCIsIDYwLCAxMF0sXG4gICAgXCJMb3ctaGVhdCBGdWVsIFB1bXBcIjogW1wiTEZQXCIsIDAuNSwgMC4xXSxcbiAgICBcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIjogW1wiTEhQXCIsIDUsIDEwXSxcbiAgICBcIkxpdGhpdW1cIjogW1wiTElcIiwgMC41NSwgMV0sXG4gICAgXCJMaXRoaXVtIE9yZVwiOiBbXCJMSU9cIiwgMi43NSwgMV0sXG4gICAgXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCI6IFtcIkxJU1wiLCA1LjYsIDddLFxuICAgIFwiTmVvbiBMaWdodGluZyBTeXN0ZW1cIjogW1wiTElUXCIsIDEsIDJdLFxuICAgIFwiTG9naXN0aWNzIFN5c3RlbVwiOiBbXCJMT0dcIiwgMC41LCAxLjVdLFxuICAgIFwiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJMU0VcIiwgMC4zLCAxLjJdLFxuICAgIFwiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTFNMXCIsIDEyNSwgMTAwXSxcbiAgICBcIkxpbWVzdG9uZVwiOiBbXCJMU1RcIiwgMi43MywgMV0sXG4gICAgXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJMVEFcIiwgMC4zLCAwLjVdLFxuICAgIFwiTGFib3JhdG9yeSBVbml0XCI6IFtcIkxVXCIsIDgsIDZdLFxuICAgIFwiTWFnbmV0aXRlXCI6IFtcIk1BR1wiLCA1LjE1LCAxXSxcbiAgICBcIkhpZ2gtQ2FyYiBNYWl6ZVwiOiBbXCJNQUlcIiwgMS4zLCAxXSxcbiAgICBcIk1vdGhlcmJvYXJkXCI6IFtcIk1CXCIsIDAuMDc1LCAwLjA3NV0sXG4gICAgXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiOiBbXCJNQ0JcIiwgMTAwLCAxMDBdLFxuICAgIFwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCI6IFtcIk1DR1wiLCAwLjI0LCAwLjFdLFxuICAgIFwiUXVhbGl0eSBNZWF0IE1lYWxcIjogW1wiTUVBXCIsIDAuNiwgMC41XSxcbiAgICBcIkJhc2ljIE1lZGljYWwgS2l0XCI6IFtcIk1FRFwiLCAwLjMsIDAuMV0sXG4gICAgXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIjogW1wiTUZFXCIsIDAuMiwgMC44XSxcbiAgICBcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIjogW1wiTUZLXCIsIDAuMSwgMC4wNV0sXG4gICAgXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTUZMXCIsIDI0LCA0XSxcbiAgICBcIk1hZ25lc2l1bVwiOiBbXCJNR1wiLCAwLjI3LCAwLjE2XSxcbiAgICBcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiOiBbXCJNR0NcIiwgMC42LCAwLjldLFxuICAgIFwiTWFnbmVzaXRlXCI6IFtcIk1HU1wiLCAxLjczLCAxXSxcbiAgICBcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIjogW1wiTUhMXCIsIDAuMSwgMC4wNV0sXG4gICAgXCJNaWNybyBIZWFkcGhvbmVzXCI6IFtcIk1IUFwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIjogW1wiTUxJXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIk1pY3JvLVByb2Nlc3NvclwiOiBbXCJNUENcIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNU0xcIiwgNTAsIDUwXSxcbiAgICBcIk1lZ2FUdWJlIENvYXRpbmdcIjogW1wiTVRDXCIsIDAuMDMyLCAwLjAxXSxcbiAgICBcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIjogW1wiTVRQXCIsIDAuNywgMV0sXG4gICAgXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCI6IFtcIk1VU1wiLCAwLjgsIDFdLFxuICAgIFwiTWVkaXVtIFdhZmVyXCI6IFtcIk1XRlwiLCAwLjAwOCwgMC4wMDhdLFxuICAgIFwiTml0cm9nZW5cIjogW1wiTlwiLCAwLjgwNywgMV0sXG4gICAgXCJTb2RpdW1cIjogW1wiTkFcIiwgMC45NywgMV0sXG4gICAgXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIjogW1wiTkFCXCIsIDAuMSwgMC4wNV0sXG4gICAgXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiOiBbXCJOQ1NcIiwgMC4wMjgsIDAuMDFdLFxuICAgIFwiTmVvblwiOiBbXCJORVwiLCAwLjksIDFdLFxuICAgIFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIjogW1wiTkZcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiTmFubyBGaWJlclwiOiBbXCJORklcIiwgMC4wMzIsIDAuMDFdLFxuICAgIFwiTmFuby1Db2F0ZWQgR2xhc3NcIjogW1wiTkdcIiwgMC4wMjIsIDAuMDFdLFxuICAgIFwiTnlsb24gRmFicmljXCI6IFtcIk5MXCIsIDEuMTMsIDFdLFxuICAgIFwiTmV1cmFsIE5ldHdvcmtcIjogW1wiTk5cIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiQmFzaWMgTm96emxlXCI6IFtcIk5PWlwiLCAzLCAxLjVdLFxuICAgIFwiTmFuby1FbmhhbmNlZCBSZXNpblwiOiBbXCJOUlwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIk51dHJpZW50IFNvbHV0aW9uXCI6IFtcIk5TXCIsIDAuNiwgMC41XSxcbiAgICBcIk5ldXJvU3RpbXVsYW50c1wiOiBbXCJOU1RcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJUcmlnbHljZXJpZGUgTnV0c1wiOiBbXCJOVVRcIiwgMC45LCAxXSxcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiOiBbXCJOVjFcIiwgNC4yLCAyXSxcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiOiBbXCJOVjJcIiwgNi43LCAzXSxcbiAgICBcIk94eWdlblwiOiBbXCJPXCIsIDEuMTQxLCAxXSxcbiAgICBcIk9mZmljZSBTdXBwbGllc1wiOiBbXCJPRkZcIiwgMC4wMiwgMC4yXSxcbiAgICBcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCI6IFtcIk9MRlwiLCAwLjAxLCAwLjAwMV0sXG4gICAgXCJPcGVyYXRpbmcgU3lzdGVtXCI6IFtcIk9TXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkJhc2ljIE92ZXJhbGxzXCI6IFtcIk9WRVwiLCAwLjAyLCAwLjAyNV0sXG4gICAgXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIjogW1wiUENCXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIjogW1wiUERBXCIsIDAuMDAyLCAwLjAwMl0sXG4gICAgXCJQb2x5LUV0aHlsZW5lXCI6IFtcIlBFXCIsIDAuMDEsIDAuMDFdLFxuICAgIFwiUHJlbWl1bSBGZXJ0aWxpemVyXCI6IFtcIlBGRVwiLCAwLjksIDFdLFxuICAgIFwiUG9seW1lciBHcmFudWxhdGVcIjogW1wiUEdcIiwgMC4wMDIsIDAuMDAxXSxcbiAgICBcIlBpbmViZXJyaWVzXCI6IFtcIlBJQlwiLCAwLjMsIDFdLFxuICAgIFwiUGFpbmtpbGxlcnNcIjogW1wiUEtcIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIlBvd2VyIENlbGxcIjogW1wiUE9XXCIsIDAuMDUsIDAuMV0sXG4gICAgXCJQcm90ZWluIFBhc3RlXCI6IFtcIlBQQVwiLCAyLCAxXSxcbiAgICBcIlByZXNzdXJlIFNoaWVsZGluZ1wiOiBbXCJQU0hcIiwgNC4yLCAwLjhdLFxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIExcIjogW1wiUFNMXCIsIDAuMDgsIDAuOF0sXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiOiBbXCJQU01cIiwgMC4wNCwgMC40XSxcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCI6IFtcIlBTU1wiLCAwLjAxLCAwLjFdLFxuICAgIFwiUG93ZXIgVG9vbHNcIjogW1wiUFRcIiwgMC4yNSwgMC4yXSxcbiAgICBcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIjogW1wiUFdPXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCI6IFtcIlFDUlwiLCAxNCwgMTBdLFxuICAgIFwiUmFkaW8gRGV2aWNlXCI6IFtcIlJBRFwiLCAwLjAwMywgMC4wMDVdLFxuICAgIFwiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiOiBbXCJSQUdcIiwgNSwgMy40XSxcbiAgICBcIk1lbW9yeSBCYW5rXCI6IFtcIlJBTVwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiQmFzaWMgUmF0aW9uc1wiOiBbXCJSQVRcIiwgMC4yMSwgMC4xXSxcbiAgICBcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIjogW1wiUkJIXCIsIDIuNCwgMC45XSxcbiAgICBcIlJhdyBDb3R0b24gRmliZXJcIjogW1wiUkNPXCIsIDAuOTUsIDFdLFxuICAgIFwiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiOiBbXCJSQ1NcIiwgMC42NywgMC41XSxcbiAgICBcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCI6IFtcIlJDVFwiLCA3LCA0XSxcbiAgICBcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiOiBbXCJSREVcIiwgMS40LCAxLjVdLFxuICAgIFwiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJETFwiLCAxNTAsIDMwXSxcbiAgICBcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRFNcIiwgNTAsIDEwXSxcbiAgICBcIkNoZW1pY2FsIFJlYWdlbnRzXCI6IFtcIlJFQVwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIlJlc2N1ZSBEcm9uZVwiOiBbXCJSRURcIiwgMC4zLCAwLjA1XSxcbiAgICBcIlJlcGFpciBLaXRcIjogW1wiUkVQXCIsIDAuMDA2LCAwLjAwMl0sXG4gICAgXCJSZWluZm9yY2VkIEdsYXNzXCI6IFtcIlJHXCIsIDAuMDMyLCAwLjAxXSxcbiAgICBcIlJlZCBHb2xkXCI6IFtcIlJHT1wiLCAxOS4zMiwgMV0sXG4gICAgXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIjogW1wiUkhQXCIsIDEyLCAxMF0sXG4gICAgXCJOb24tVm9sYXRpbGUgTWVtb3J5XCI6IFtcIlJPTVwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIlJTRVwiLCAxLjksIDAuN10sXG4gICAgXCJSYWRpYXRpb24gU2hpZWxkaW5nXCI6IFtcIlJTSFwiLCAzLjcsIDAuOF0sXG4gICAgXCJSYXcgU2lsayBTdHJhaW5zXCI6IFtcIlJTSVwiLCAxLjEsIDFdLFxuICAgIFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJSVEFcIiwgMS41LCAwLjVdLFxuICAgIFwiU3VsZnVyXCI6IFtcIlNcIiwgMC41MiwgMC4yNV0sXG4gICAgXCJTZWFyY2ggQWxnb3JpdGhtXCI6IFtcIlNBXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIlNvcnRpbmcgQWxnb3JpdGhtXCI6IFtcIlNBTFwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJTZW5zb3IgQXJyYXlcIjogW1wiU0FSXCIsIDEuNywgMl0sXG4gICAgXCJTdGVtIENlbGwgVHJlYXRtZW50XCI6IFtcIlNDXCIsIDAuMDQsIDAuMDFdLFxuICAgIFwiU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJTQ0JcIiwgNTAsIDUwXSxcbiAgICBcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiOiBbXCJTQ05cIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIlN1bGZ1ciBDcnlzdGFsc1wiOiBbXCJTQ1JcIiwgMi4wNSwgMV0sXG4gICAgXCJTdXJnaWNhbCBEcm9uZVwiOiBbXCJTRFJcIiwgMC4zLCAwLjA1XSxcbiAgICBcIlBvbHktU3VsZml0ZSBTZWFsYW50XCI6IFtcIlNFQVwiLCAwLjE1LCAwLjA3XSxcbiAgICBcIlNlbnNvclwiOiBbXCJTRU5cIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIlN1cmdpY2FsIEVxdWlwbWVudFwiOiBbXCJTRVFcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiU1RMIEZ1ZWxcIjogW1wiU0ZcIiwgMC4wNiwgMC4wNl0sXG4gICAgXCJTbWFsbCBGVEwgRW1pdHRlclwiOiBbXCJTRkVcIiwgMC4xLCAwLjRdLFxuICAgIFwiU21hbGwgRmFzdGVuZXIgS2l0XCI6IFtcIlNGS1wiLCAwLjA0LCAwLjAyXSxcbiAgICBcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNGTFwiLCA5LCAxLjVdLFxuICAgIFwiU2lsaWNvblwiOiBbXCJTSVwiLCAyLjMyOSwgMV0sXG4gICAgXCJTaWxrZW4gRmFicmljXCI6IFtcIlNJTFwiLCAxLjIxLCAxXSxcbiAgICBcIlNpbGljb24gT3JlXCI6IFtcIlNJT1wiLCAxLjc5LCAxXSxcbiAgICBcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIjogW1wiU05NXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkFydGlmaWNpYWwgU29pbFwiOiBbXCJTT0lcIiwgMC45LCAxXSxcbiAgICBcIlNvbGFyIENlbGxcIjogW1wiU09MXCIsIDAuMDE1LCAwLjAxXSxcbiAgICBcIlNvbGFyIFBhbmVsXCI6IFtcIlNQXCIsIDAuMTUsIDAuMV0sXG4gICAgXCJTaGlwLVJlcGFpciBEcm9uZVwiOiBbXCJTUkRcIiwgMC4zLCAwLjA1XSxcbiAgICBcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCI6IFtcIlNSUFwiLCAwLjEsIDAuMl0sXG4gICAgXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCI6IFtcIlNTQ1wiLCAxLCAxXSxcbiAgICBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNTTFwiLCAyMCwgMjBdLFxuICAgIFwiU3RlZWxcIjogW1wiU1RMXCIsIDcuODUsIDFdLFxuICAgIFwiTWVkaWNhbCBTdHJldGNoZXJcIjogW1wiU1RSXCIsIDAuMDEsIDFdLFxuICAgIFwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCI6IFtcIlNUU1wiLCAwLjEsIDAuMV0sXG4gICAgXCJTdXJnZXJ5IFVuaXRcIjogW1wiU1VcIiwgNiwgNV0sXG4gICAgXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIjogW1wiU1VEXCIsIDAuMywgMC4wNV0sXG4gICAgXCJTYWZldHkgVW5pZm9ybVwiOiBbXCJTVU5cIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJTbWFsbCBXYWZlclwiOiBbXCJTV0ZcIiwgMC4wMDMsIDAuMDAzXSxcbiAgICBcIlRhbnRhbHVtXCI6IFtcIlRBXCIsIDE2LjY1LCAxXSxcbiAgICBcIlRhcmdldGluZyBDb21wdXRlclwiOiBbXCJUQUNcIiwgMC4xNSwgMV0sXG4gICAgXCJUYW50YWxpdGUgUm9ja1wiOiBbXCJUQUlcIiwgNy45NCwgMV0sXG4gICAgXCJUZWNobmV0aXVtXCI6IFtcIlRDXCIsIDExLjgsIDFdLFxuICAgIFwiVGlueSBDYXJnbyBCYXkgS2l0XCI6IFtcIlRDQlwiLCAyMCwgMjBdLFxuICAgIFwiVENMIEFjaWRcIjogW1wiVENMXCIsIDAuMDksIDAuMV0sXG4gICAgXCJUZWNobmV0aXVtIE94aWRlXCI6IFtcIlRDT1wiLCA5LjgsIDFdLFxuICAgIFwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCI6IFtcIlRDU1wiLCAzLjQsIDEuMl0sXG4gICAgXCJUcmF1bWEgQ2FyZSBVbml0XCI6IFtcIlRDVVwiLCA1LCA0XSxcbiAgICBcIlRoZXJtb0ZsdWlkXCI6IFtcIlRIRlwiLCAwLjYsIDAuMzVdLFxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIlRIUFwiLCAyLjIsIDFdLFxuICAgIFwiVGl0YW5pdW1cIjogW1wiVElcIiwgNC41LCAxXSxcbiAgICBcIlRpdGFuaXVtIE9yZVwiOiBbXCJUSU9cIiwgMS41OCwgMV0sXG4gICAgXCJUZWNobm9LZXZsYXIgRmFicmljXCI6IFtcIlRLXCIsIDEuODksIDFdLFxuICAgIFwiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiOiBbXCJUUFVcIiwgMC4wMDIsIDAuMDAyXSxcbiAgICBcIkF1ZGlvIFRyYW5zbWl0dGVyXCI6IFtcIlRSQVwiLCAwLjAwNSwgMC4wMDJdLFxuICAgIFwiQWR2YW5jZWQgVHJhbnNpc3RvclwiOiBbXCJUUk5cIiwgMC4wMDEsIDAuMDAxXSxcbiAgICBcIlRydXNzXCI6IFtcIlRSVVwiLCAwLjEsIDEuNV0sXG4gICAgXCJUZWN0b3NpbGlzaXRlXCI6IFtcIlRTXCIsIDIuNCwgMV0sXG4gICAgXCJUaGVybWFsIFNoaWVsZGluZ1wiOiBbXCJUU0hcIiwgMi40LCAxLjVdLFxuICAgIFwiVGVzdCBUdWJlc1wiOiBbXCJUVUJcIiwgMC4wMDIsIDAuMDAyXSxcbiAgICBcIlVuaXZlcnNhbCBUb29sc2V0XCI6IFtcIlVUU1wiLCAwLjA1LCAwLjA1XSxcbiAgICBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIjogW1wiVkNCXCIsIDIwMCwgMjAwXSxcbiAgICBcIlRyaWdseWNlcmlkZSBGcnVpdHNcIjogW1wiVkVHXCIsIDEuMSwgMV0sXG4gICAgXCJWaXRhR2VsXCI6IFtcIlZHXCIsIDAuMjEsIDAuMV0sXG4gICAgXCJWaXRhIEVzc2VuY2VcIjogW1wiVklUXCIsIDAuOSwgMV0sXG4gICAgXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiVlNDXCIsIDM1LCAzNV0sXG4gICAgXCJUdW5nc3RlblwiOiBbXCJXXCIsIDcuNTE5LCAxXSxcbiAgICBcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIjogW1wiV0FJXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIjogW1wiV0FMXCIsIDYuMjUsIDFdLFxuICAgIFwiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIjogW1wiV0NCXCIsIDIwMCwgMjAwXSxcbiAgICBcIlNtYXJ0IFppbmZhbmRlbFwiOiBbXCJXSU5cIiwgMC4xLCAwLjFdLFxuICAgIFwiV2luZG93IE1hbmFnZXJcIjogW1wiV01cIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIjogW1wiV09SXCIsIDUsIDVdLFxuICAgIFwiV2F0ZXIgUmVjbGFpbWVyXCI6IFtcIldSXCIsIDYuNCwgNV0sXG4gICAgXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiOiBbXCJXU1wiLCAwLjA1LCAwLjVdLFxuICAgIFwiWmlyY29uIENyeXN0YWxzXCI6IFtcIlpJUlwiLCA0Ljg1LCAxXSxcbiAgICBcIlppcmNvbml1bVwiOiBbXCJaUlwiLCA2LjUzLCAxXSxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9HYW1lUHJvcGVydGllcy50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHJpY2VzKHByaWNlcywgd2ViYXBwSUQpIHtcbiAgICBpZiAoIXdlYmFwcElEKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogV2ViIEFwcCBUaW1lb3V0XCIpO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgUHJpY2VzIGZyb20gV2ViIEFwcFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJpY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzW2tleV0gPSBwcmljZURhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBXZWIgQXBwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgd2ViYXBwSUQgKyBcIi9leGVjP21vZGU9JTIycHJpY2UlMjJcIiwgdHJ1ZSk7XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENYUHJpY2VzKGN4UHJpY2VzKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQ1ggUHJpY2UgVGltZW91dFwiKTtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIENYIFByaWNlc1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCB3YW50ZWRSZXN1bHRzID0gW1wiQXNrUHJpY2VcIiwgXCJCaWRQcmljZVwiLCBcIkF2ZXJhZ2VcIiwgXCJBc2tBdmFpbFwiLCBcIkJpZEF2YWlsXCJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IENYcyA9IFtcIkFJMVwiLCBcIkNJMVwiLCBcIkNJMlwiLCBcIklDMVwiLCBcIk5DMVwiLCBcIk5DMlwiXTtcbiAgICAgICAgICAgICAgICBwcmljZURhdGEuZm9yRWFjaChtYXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dID0ge307XG4gICAgICAgICAgICAgICAgICAgIENYcy5mb3JFYWNoKENYID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN4UHJpY2VzW21hdFtcIlRpY2tlclwiXV1bQ1hdID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB3YW50ZWRSZXN1bHRzLmZvckVhY2god2FudGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dW0NYXVt3YW50ZWRdID0gbWF0W0NYICsgXCItXCIgKyB3YW50ZWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN4UHJpY2VzW1wiQWdlXCJdID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjeFByaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gUmFpbiBQcmljZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvcmFpbi9wcmljZXNcIiwgdHJ1ZSk7XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSkge1xuICAgIGlmICghYnVybikge1xuICAgICAgICBidXJuID0ge307XG4gICAgfVxuICAgIGlmICghYXBpa2V5IHx8ICF1c2VybmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1cm5bdXNlcm5hbWVdID0gW107XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gVGltZW91dFwiKTtcbiAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSk7XG4gICAgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBCdXJuIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XG4gICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vdXNlci9cIiArIHVzZXJuYW1lLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcbiAgICB4aHIuc2VuZChudWxsKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSkge1xuICAgIGlmICghYnVybikge1xuICAgICAgICBidXJuID0ge307XG4gICAgfVxuICAgIGlmICghYXBpa2V5IHx8ICFncm91cGlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gVGltZW91dFwiKTtcbiAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSk7XG4gICAgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBHcm91cCBCdXJuIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IFtdO1xuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi9ncm91cC9cIiArIGdyb3VwaWQsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xuICAgIHhoci5zZW5kKG51bGwpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KSB7XG4gICAgaWYgKCFhcGlrZXkgfHwgIXVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnVyblNldHRpbmdzLnB1c2goXCJsb2FkaW5nXCIpO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFNldHRpbmdzIFRpbWVvdXRcIik7XG4gICAgICAgIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQnVybiBTZXR0aW5ncyBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgICAgICBidXJuU2V0dGluZ3NbMF0gPSBcImxvYWRlZFwiO1xuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYnVyblNldHRpbmdzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3VzZXJzZXR0aW5ncy9idXJucmF0ZS9cIiArIHVzZXJuYW1lLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcbiAgICB4aHIuc2VuZChudWxsKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhY3RzKGNvbnRyYWN0cywgdXNlcm5hbWUsIGFwaWtleSkge1xuICAgIGlmICghY29udHJhY3RzKSB7XG4gICAgICAgIGNvbnRyYWN0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWFwaWtleSB8fCAhdXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gW107XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIENvbnRyYWN0IFRpbWVvdXRcIik7XG4gICAgICAgIGNvbnRyYWN0c1t1c2VybmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHVzZXJuYW1lLCBhcGlrZXkpO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQ29udHJhY3RzIGZyb20gRklPXCIpO1xuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RzW3VzZXJuYW1lXS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcbiAgICAgICAgICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2NvbnRyYWN0L2FsbGNvbnRyYWN0c1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcbiAgICB4aHIuc2VuZChudWxsKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9CYWNrZ3JvdW5kUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGdldExvY2FsU3RvcmFnZSwgc2V0U2V0dGluZ3MsIGNyZWF0ZUxpbmssIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgY29uc3QgQ0hFQ0tfSU5ESUNBVE9SID0gXCIkJENIRUNLXCI7XG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tsaXN0cyh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMSkge1xuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIGdlbmVyYXRlQ2hlY2tUYWJsZSwgdGlsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjaGVja05hbWUgPSAocGFyYW1ldGVycy5zbGljZSgxKSkuam9pbihcIl9cIik7XG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGNoZWNrTmFtZTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICAgICAgY29uc3QgY2hlY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjaGVja1dyYXBwZXIpO1xuICAgICAgICBjaGVja1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrLXdyYXBwZXJcIik7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZGlzcFN0b3JlZENoZWNrLCBbY2hlY2tOYW1lLCB0aWxlXSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hlY2tUYWJsZShyZXN1bHQsIHRpbGUpIHtcbiAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xuICAgIH1cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOYW1lXCIsIFwiSW5jb21wbGV0ZSBJdGVtc1wiLCBcIlRvdGFsIEl0ZW1zXCIsIFwiRGVsZXRlXCJdKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBjb25zdCBuYW1lcyA9IEFycmF5LmZyb20oT2JqZWN0LmtleXMocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkpO1xuICAgIHZhciBhbnlDaGVja2xpc3RzID0gZmFsc2U7XG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIDcpICE9IENIRUNLX0lORElDQVRPUikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFueUNoZWNrbGlzdHMgPSB0cnVlO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGluY29tcGxldGVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IHRvdGFsQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGluY29tcGxldGVDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodG90YWxDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZS5zdWJzdHJpbmcoNyksIFwiWElUIENIRUNLX1wiICsgbmFtZS5zdWJzdHJpbmcoNykpKTtcbiAgICAgICAgaW5jb21wbGV0ZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25hbWVdLmZpbHRlcigob2JqKSA9PiAoIW9ialsxXSkpLmxlbmd0aCkpO1xuICAgICAgICB0b3RhbENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25hbWVdLmxlbmd0aCkpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gICAgICAgIGRlbGV0ZUNvbHVtbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtuYW1lLnN1YnN0cmluZyg3KSwgW11dKTtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgaWYgKCFhbnlDaGVja2xpc3RzKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSA0O1xuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBDaGVja2xpc3RzXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRoZW5TdG9yZUNoZWNrKHJlc3VsdCwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrTmFtZSA9IHBhcmFtc1swXTtcbiAgICBjb25zdCBjaGVja1RleHQgPSBwYXJhbXNbMV07XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcbiAgICB9XG4gICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdID0gY2hlY2tUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogY2hlY2tUZXh0O1xuICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZGlzcFN0b3JlZENoZWNrKHJlc3VsdCwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSB8fCAhcGFyYW1zWzFdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tOYW1lID0gcGFyYW1zWzBdO1xuICAgIGNvbnN0IHRpbGUgPSBwYXJhbXNbMV07XG4gICAgY29uc3QgY2hlY2tXcmFwcGVyID0gdGlsZS5jaGlsZHJlblsxXTtcbiAgICBpZiAoIWNoZWNrV3JhcHBlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XG4gICAgfVxuICAgIGlmIChyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLmZvckVhY2goY2hlY2sgPT4geyBjcmVhdGVDaGVja1JvdyhjaGVja1dyYXBwZXIsIHJlc3VsdCwgY2hlY2tOYW1lLCBjaGVja1swXSwgY2hlY2tbMV0sIGNoZWNrWzJdKTsgfSk7XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgTmV3XCI7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGFwRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuT3ZlcmxhcHBpbmdEaXYpO1xuICAgICAgICBjb25zdCBncmV5U3RyaXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyZXlTdHJpcGVzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuR3JleVN0cmlwZXMpO1xuICAgICAgICBvdmVybGFwRGl2LmFwcGVuZENoaWxkKGdyZXlTdHJpcGVzKTtcbiAgICAgICAgdGlsZS5pbnNlcnRCZWZvcmUob3ZlcmxhcERpdiwgdGlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG4gICAgICAgIGNvbnN0IGFkZEludGVyZmFjZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQ2VudGVySW50ZXJmYWNlKTtcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGFkZEludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZEludGVyZmFjZS5jbGFzc0xpc3QuYWRkKFwiTkxPckg3aEY1ZmJLSWVzcVczdVNrQT09XCIpO1xuICAgICAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XG4gICAgICAgIGNvbnN0IGFkZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGFkZEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNoZWNrbGlzdCBJdGVtIEVkaXRvclwiKSk7XG4gICAgICAgIGFkZEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xuICAgICAgICBhZGRIZWFkZXIuc3R5bGUubWFyZ2luID0gXCIwLjVlbSAwIDAuNWVtXCI7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGNvbnN0IG5hbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYW1lUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZVJvdyk7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgICAgIG5hbWVSb3cuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmFtZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUlucHV0KTtcbiAgICAgICAgbmFtZVJvdy5hcHBlbmRDaGlsZChuYW1lSW5wdXREaXYpO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5hbWVJbnB1dERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVSb3cpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcbiAgICAgICAgZGF0ZVJvdy5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXRlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xuICAgICAgICBkYXRlUm93LmFwcGVuZENoaWxkKGRhdGVJbnB1dERpdik7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZUlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGNvbnN0IHRpbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aW1lUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGltZVJvdyk7XG4gICAgICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSBUaW1lXCI7XG4gICAgICAgIHRpbWVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgICAgIHRpbWVSb3cuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGltZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUlucHV0KTtcbiAgICAgICAgdGltZVJvdy5hcHBlbmRDaGlsZCh0aW1lSW5wdXREaXYpO1xuICAgICAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRpbWVJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgICAgIHRpbWVJbnB1dERpdi5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgICAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2F2ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcbiAgICAgICAgY29uc3Qgc2F2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBzYXZlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNNRFwiO1xuICAgICAgICBzYXZlTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcbiAgICAgICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlTGFiZWwpO1xuICAgICAgICBjb25zdCBzYXZlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzYXZlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcbiAgICAgICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlSW5wdXREaXYpO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgICAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgICAgICBzYXZlSW5wdXREaXYuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gbmFtZUlucHV0LnZhbHVlIHx8IFwiXCI7XG4gICAgICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xuICAgICAgICAgICAgdmFyIGR1ZURhdGU7XG4gICAgICAgICAgICBpZiAoZGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlID0gRGF0ZS5wYXJzZShkYXRlSW5wdXQudmFsdWUgKyBcIiBcIiArIHRpbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlID0gRGF0ZS5wYXJzZShkYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gW2l0ZW1OYW1lLCBmYWxzZV07XG4gICAgICAgICAgICBpZiAoZHVlRGF0ZSAmJiAhaXNOYU4oZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5wdXNoKGR1ZURhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5wdXNoKGl0ZW1Db250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXSA9IFtpdGVtQ29udGVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbY2hlY2tOYW1lLCByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1dKTtcbiAgICAgICAgICAgIGNyZWF0ZUNoZWNrUm93KGNoZWNrV3JhcHBlciwgcmVzdWx0LCBjaGVja05hbWUsIGl0ZW1OYW1lLCBmYWxzZSwgZHVlRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcbiAgICB9KTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIENvbXBsZXRlXCI7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKTtcbiAgICBjbGVhckJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcbiAgICBjbGVhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25EYW5nZXIpO1xuICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoZWNrV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tSb3cgPSBjaGVja1dyYXBwZXIuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoY2hlY2tSb3cgJiYgY2hlY2tSb3cuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIGNoZWNrV3JhcHBlci5yZW1vdmVDaGlsZChjaGVja1Jvdyk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtjaGVja05hbWUsIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXV0pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrUm93KHRpbGUsIHJlc3VsdCwgY2hlY2tOYW1lLCBuYW1lLCBjaGVja2VkLCBkdWVEYXRlKSB7XG4gICAgY29uc3QgY2hlY2tSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrUm93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjaGVja1Jvdy5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBjb25zdCBjaGVja0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tDaXJjbGUudGV4dENvbnRlbnQgPSBjaGVja2VkID8gJ+KXjycgOiAn4peLJztcbiAgICBjaGVja1Jvdy5hcHBlbmRDaGlsZChjaGVja0NpcmNsZSk7XG4gICAgY2hlY2tDaXJjbGUuc3R5bGUuY29sb3IgPSBkdWVEYXRlICYmIGR1ZURhdGUgPCBEYXRlLm5vdygpID8gXCIjZDk1MzRmXCIgOiBcIiNmN2E2MDBcIjtcbiAgICBjaGVja0NpcmNsZS5zdHlsZS5mb250U2l6ZSA9IFwiMzVweFwiO1xuICAgIGNoZWNrQ2lyY2xlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2hlY2tSb3cpO1xuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrVGV4dCA9IGNyZWF0ZVRleHRTcGFuKG5hbWUpO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoY2hlY2tUZXh0KTtcbiAgICBjaGVja1RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjaGVja1RleHQuc3R5bGUucGFkZGluZ1RvcCA9IFwiNXB4XCI7XG4gICAgdmFyIGR1ZURhdGVUZXh0O1xuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVUZXh0ID0gY3JlYXRlVGV4dFNwYW4obmV3IERhdGUoZHVlRGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KSArIFwiIFwiICsgbmV3IERhdGUoZHVlRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJudW1lcmljXCIsIHllYXI6IFwibnVtZXJpY1wiIH0pKTtcbiAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChkdWVEYXRlIDwgRGF0ZS5ub3coKSA/IFwiY2hlY2stdGltZS1vdmVyZHVlXCIgOiBcImNoZWNrLXRpbWVcIik7XG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICBjaGVja1RleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGV4dFwiKTtcbiAgICAgICAgY2hlY2tSb3cuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xuICAgICAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrLXRpbWUtY29tcGxldGVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tSb3cuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgY2hlY2tDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tlZCA9ICFjaGVja2VkO1xuICAgICAgICBjaGVja0NpcmNsZS50ZXh0Q29udGVudCA9IGNoZWNrZWQgPyAn4pePJyA6ICfil4snO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVNYXRjaCA9IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXVtpXTtcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1hdGNoWzBdID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1hdGNoWzFdID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRleHRcIik7XG4gICAgICAgICAgICBjaGVja1Jvdy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xuICAgICAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVjay10aW1lLWNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkLXRleHRcIik7XG4gICAgICAgICAgICBjaGVja1Jvdy5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xuICAgICAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVjay10aW1lLWNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtjaGVja05hbWUsIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXV0pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIG1ha2VTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNwYWNlcik7XG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIHNwYWNlcjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9DaGVja2xpc3RzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEZsaWdodEVUQXMgfSBmcm9tIFwiLi9GbGlnaHRFVEFzXCI7XG5pbXBvcnQgeyBMb2NhbE1hcmtldEFkcyB9IGZyb20gJy4vTG9jYWxNYXJrZXRBZHMnO1xuaW1wb3J0IHsgTW9kdWxlUnVubmVyIH0gZnJvbSBcIi4vTW9kdWxlUnVubmVyXCI7XG5pbXBvcnQgeyBPcmRlckVUQXMgfSBmcm9tIFwiLi9PcmRlckVUQXNcIjtcbmltcG9ydCB7IENvbnN1bWFibGVUaW1lcnMgfSBmcm9tIFwiLi9Db25zdW1hYmxlVGltZXJzXCI7XG5pbXBvcnQgeyBGbGVldEVUQXMgfSBmcm9tIFwiLi9GbGVldEVUQXNcIjtcbmltcG9ydCB7IFBvc3RMTSB9IGZyb20gXCIuL1Bvc3RMTVwiO1xuaW1wb3J0IHsgU2hpcHBpbmdBZHMgfSBmcm9tIFwiLi9TaGlwcGluZ0Fkc1wiO1xuaW1wb3J0IHsgUXVldWVMb2FkIH0gZnJvbSBcIi4vUXVldWVMb2FkXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0UHJpY2VzLCBnZXRCdXJuLCBnZXRCdXJuU2V0dGluZ3MsIGdldENvbnRyYWN0cyB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcbmltcG9ydCB7IFBNTUdTdHlsZSwgRW5oYW5jZWRDb2xvcnMsIEljb25TdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgeyBTY3JlZW5VbnBhY2sgfSBmcm9tIFwiLi9TY3JlZW5VbnBhY2tcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyXCI7XG5pbXBvcnQgeyBDb21tYW5kQ29ycmVjdGVyIH0gZnJvbSBcIi4vQ29tbWFuZENvcnJlY3RlclwiO1xuaW1wb3J0IHsgQ2FsY3VsYXRvckJ1dHRvbiB9IGZyb20gXCIuL0NhbGN1bGF0b3JCdXR0b25cIjtcbmltcG9ydCB7IENvbnRyYWN0RHJhZnRzIH0gZnJvbSBcIi4vQ29udHJhY3REcmFmdHNcIjtcbmltcG9ydCB7IEltYWdlQ3JlYXRvciB9IGZyb20gXCIuL0ltYWdlQ3JlYXRvclwiO1xuaW1wb3J0IHsgSW52ZW50b3J5T3JnYW5pemVyIH0gZnJvbSBcIi4vSW52ZW50b3J5T3JnYW5pemVyXCI7XG5pbXBvcnQgeyBIZWFkZXJNaW5pbWl6ZXIgfSBmcm9tIFwiLi9IZWFkZXJNaW5pbWl6ZXJcIjtcbmltcG9ydCB7IFBlbmRpbmdDb250cmFjdHMgfSBmcm9tIFwiLi9QZW5kaW5nQ29udHJhY3RzXCI7XG5pbXBvcnQgeyBDb21wYWN0VUkgfSBmcm9tIFwiLi9Db21wYWN0VUlcIjtcbnRyeSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChcIlBNTUdFeHRlbmRlZFwiKS50aGVuKG1haW5SdW4sIG9uRXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcbn1cbmNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJQTU1HRXh0ZW5kZWRcIl0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgbWFpblJ1bihyZXN1bHQpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbWFpblJ1bihyZXN1bHQpIHtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgVGltZSBMb2FkaW5nIFBNTUdcIik7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgc3R5bGUuaWQgPSBcInBtbWctc3R5bGVcIjtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFBNTUdTdHlsZTtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBpZiAoZG9jKSB7XG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPSBbXCJTY3JlZW5VbnBhY2tcIl07XG4gICAgfVxuICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPT0gXCJlbmhhbmNlZFwiIHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0pIHtcbiAgICAgICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBjb2xvcnMudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWVuaGFuY2VkLWNvbG9yc1wiO1xuICAgICAgICBjb2xvcnMudGV4dENvbnRlbnQgPSBFbmhhbmNlZENvbG9ycztcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbG9ycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiaWNvbnNcIikge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGNvbG9ycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBjb2xvcnMuaWQgPSBcInBtbWctaWNvbi1jb2xvcnNcIjtcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gSWNvblN0eWxlO1xuICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoY29sb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcHJpY2VzID0ge307XG4gICAgZ2V0UHJpY2VzKHByaWNlcywgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pO1xuICAgIHZhciBidXJuID0gW107XG4gICAgZ2V0QnVybihidXJuLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKTtcbiAgICB2YXIgYnVyblNldHRpbmdzID0gW107XG4gICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSk7XG4gICAgdmFyIGNvbnRyYWN0cyA9IFtdO1xuICAgIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xuICAgIGNvbnN0IHJ1bm5lciA9IG5ldyBNb2R1bGVSdW5uZXIoW1xuICAgICAgICBuZXcgU2hpcHBpbmdBZHMoKSxcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXG4gICAgICAgIG5ldyBQb3N0TE0ocHJpY2VzKSxcbiAgICAgICAgbmV3IENvbnRyYWN0RHJhZnRzKHByaWNlcyksXG4gICAgICAgIG5ldyBPcmRlckVUQXMoKSxcbiAgICAgICAgbmV3IEZsaWdodEVUQXMoKSxcbiAgICAgICAgbmV3IEZsZWV0RVRBcygpLFxuICAgICAgICBuZXcgUXVldWVMb2FkKCksXG4gICAgICAgIG5ldyBDb25zdW1hYmxlVGltZXJzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBidXJuLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0pLFxuICAgICAgICBuZXcgSW52ZW50b3J5T3JnYW5pemVyKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBidXJuLCByZXN1bHQpLFxuICAgICAgICBuZXcgTm90aWZpY2F0aW9ucygpLFxuICAgICAgICBuZXcgSW1hZ2VDcmVhdG9yKCksXG4gICAgICAgIG5ldyBTY3JlZW5VbnBhY2socmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0pLFxuICAgICAgICBuZXcgSGVhZGVyTWluaW1pemVyKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIm1pbmltaXplX2J5X2RlZmF1bHRcIl0pLFxuICAgICAgICBuZXcgQ29tbWFuZENvcnJlY3RlcigpLFxuICAgICAgICBuZXcgQ2FsY3VsYXRvckJ1dHRvbigpLFxuICAgICAgICBuZXcgU2lkZWJhcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSxcbiAgICAgICAgbmV3IFBlbmRpbmdDb250cmFjdHMocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIGNvbnRyYWN0cyksXG4gICAgICAgIG5ldyBDb21wYWN0VUkocmVzdWx0KVxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBydW5uZXIubG9vcCgpO1xuICAgIH0pKCk7XG59XG5mdW5jdGlvbiBvbkVycm9yKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zZmMtZXRhXCI7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIlNGQyBcIik7XG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XG4gICAgICAgICAgICAgICAgaWYgKGV0YURhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uICsgY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBldGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZSArPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaXJzdFJvdyA9IGVsZW1lbnRzWzBdO1xuICAgICAgICAgICAgaWYgKCFmaXJzdFJvdykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RXRhRGF0YSA9IGZpcnN0Um93LmNoaWxkcmVuWzNdO1xuICAgICAgICAgICAgaWYgKCFmaXJzdEV0YURhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RFdGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICBmaXJzdEV0YURhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHt0b3RhbEV0YX0pYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxpZ2h0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxNYXJrZXRBZHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItbG0tYWRzXCI7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyhCVVlJTkd8U0VMTElOR3xDT1JQKVxccyhcXGQrKVxccy4qXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmb3IvKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobWF0Y2hlc1syXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KG1hdGNoZXNbM10ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJJdGVtID0gKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfSBlYSlgLCB0aGlzLnRhZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xuaW1wb3J0IHsgc2hvd0J1ZmZlciwgc2V0U2V0dGluZ3MgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBGcmllbmRseU5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBjbGFzcyBNb2R1bGVSdW5uZXIge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZXMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXMubWFwKG0gPT4gdGhpcy5tb2R1bGVUb01FKG0pKTtcbiAgICAgICAgdGhpcy54aXQgPSBuZXcgWElUSGFuZGxlcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlTW9kdWxlcyhyZXN1bHQpO1xuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobXAgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdICYmIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgbXAuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbW9kdWxlVG9NRShtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIG5hbWU6IG1vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgZnJpZW5kbHlOYW1lOiBGcmllbmRseU5hbWVzW21vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lXSB8fCBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGNsZWFudXBUaW1lOiAwLFxuICAgICAgICAgICAgcnVuVGltZTogMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb29wKCkge1xuICAgICAgICB0aGlzLnhpdC5ydW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSA9IHNob3dCdWZmZXIoXCJYSVQgU1RBUlRcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3ModGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xuICAgICAgICAgICAgICAgIGVudHJ5LmNvdW50Kys7XG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDI1MCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kdWxlUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuaW1wb3J0IHsgU3RhcnQgfSBmcm9tIFwiLi9YSVQvU3RhcnRcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4vWElUL1NldHRpbmdzXCI7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gXCIuL1hJVC9EZWJ1Z1wiO1xuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL1hJVC9DYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBSZXBhaXJzX3ByZSB9IGZyb20gXCIuL1hJVC9SZXBhaXJzXCI7XG5pbXBvcnQgeyBDaGF0X3ByZSB9IGZyb20gXCIuL1hJVC9DaGF0XCI7XG5pbXBvcnQgeyBGaW5fcHJlIH0gZnJvbSBcIi4vWElUL0ZpbmFuY2VzXCI7XG5pbXBvcnQgeyBFbmhhbmNlZEJ1cm5fcHJlIH0gZnJvbSBcIi4vWElUL0J1cm5cIjtcbmltcG9ydCB7IFNoZWV0VGFibGVfcHJlIH0gZnJvbSBcIi4vWElUL1NoZWV0VGFibGVcIjtcbmltcG9ydCB7IENvbnRyYWN0c19wcmUgfSBmcm9tIFwiLi9YSVQvQ29udHJhY3RzXCI7XG5pbXBvcnQgeyBQUnVOX3ByZSwgUHJvc3Blcml0eV9wcmUsIFNoZWV0c19wcmUsIERpc2NvcmRfcHJlIH0gZnJvbSBcIi4vWElUL1dlYlwiO1xuaW1wb3J0IHsgRklPSW52X3ByZSB9IGZyb20gXCIuL1hJVC9JbnZlbnRvcnlcIjtcbmltcG9ydCB7IE5vdGVzIH0gZnJvbSBcIi4vWElUL05vdGVzXCI7XG5pbXBvcnQgeyBDaGVja2xpc3RzIH0gZnJvbSBcIi4vWElUL0NoZWNrbGlzdHNcIjtcbmltcG9ydCB7IFNvcnQgfSBmcm9tIFwiLi9YSVQvU29ydFwiO1xuaW1wb3J0IHsgQ29tbWFuZExpc3RzIH0gZnJvbSBcIi4vWElUL0NvbW1hbmRMaXN0c1wiO1xuZXhwb3J0IGNvbnN0IFhJVFByZUZ1bmN0aW9ucyA9IHtcbiAgICBcIklOVlwiOiBGSU9JbnZfcHJlLFxuICAgIFwiRElTQ09SRFwiOiBEaXNjb3JkX3ByZSxcbiAgICBcIlNIRUVUU1wiOiBTaGVldHNfcHJlLFxuICAgIFwiUFJPU1BFUklUWVwiOiBQcm9zcGVyaXR5X3ByZSxcbiAgICBcIlBSVU5cIjogUFJ1Tl9wcmUsXG4gICAgXCJTSEVFVFRBQkxFXCI6IFNoZWV0VGFibGVfcHJlLFxuICAgIFwiRklOXCI6IEZpbl9wcmUsXG4gICAgXCJDSEFUXCI6IENoYXRfcHJlLFxuICAgIFwiQlVSTlwiOiBFbmhhbmNlZEJ1cm5fcHJlLFxuICAgIFwiU0VUVElOR1NcIjogU2V0dGluZ3MsXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcbiAgICBcIlJFUEFJUlNcIjogUmVwYWlyc19wcmUsXG4gICAgXCJDQUxDVUxBVE9SXCI6IENhbGN1bGF0b3IsXG4gICAgXCJDQUxDXCI6IENhbGN1bGF0b3IsXG4gICAgXCJTVEFSVFwiOiBTdGFydCxcbiAgICBcIkRFQlVHXCI6IERlYnVnLFxuICAgIFwiTk9URVwiOiBOb3RlcyxcbiAgICBcIk5PVEVTXCI6IE5vdGVzLFxuICAgIFwiQ0hFQ0tcIjogQ2hlY2tsaXN0cyxcbiAgICBcIkNIRUNLU1wiOiBDaGVja2xpc3RzLFxuICAgIFwiQ0hFQ0tMSVNUXCI6IENoZWNrbGlzdHMsXG4gICAgXCJDSEVDS0xJU1RTXCI6IENoZWNrbGlzdHMsXG4gICAgXCJTT1JUXCI6IFNvcnQsXG4gICAgXCJMSVNUXCI6IENvbW1hbmRMaXN0c1xufTtcbmV4cG9ydCBjb25zdCBYSVRCdWZmZXJUaXRsZXMgPSB7XG4gICAgXCJJTlZcIjogXCJGSU8gSU5WRU5UT1JZXCIsXG4gICAgXCJESVNDT1JEXCI6IFwiRElTQ09SRCBTRVJWRVJcIixcbiAgICBcIlNIRUVUU1wiOiBcIkdPT0dMRSBTSEVFVFNcIixcbiAgICBcIlBST1NQRVJJVFlcIjogXCJQUk9TUEVSSVRZXCIsXG4gICAgXCJQUlVOXCI6IFwiUFJVTi1DRVBUSU9OXCIsXG4gICAgXCJTSEVFVFRBQkxFXCI6IFwiR09PR0xFIFNIRUVUUyBUQUJMRVwiLFxuICAgIFwiRklOXCI6IFwiRklOQU5DSUFMIE9WRVJWSUVXXCIsXG4gICAgXCJDSEFUXCI6IFwiQ0hBVFwiLFxuICAgIFwiQlVSTlwiOiBcIkVOSEFOQ0VEIEJVUk5cIixcbiAgICBcIlNFVFRJTkdTXCI6IFwiUE1NRyBTRVRUSU5HU1wiLFxuICAgIFwiQ09OVFJBQ1RTXCI6IFwiUEVORElORyBDT05UUkFDVFNcIixcbiAgICBcIlJFUEFJUlNcIjogXCJSRVBBSVJTXCIsXG4gICAgXCJDQUxDXCI6IFwiQ0FMQ1VMQVRPUlwiLFxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBcIkNBTENVTEFUT1JcIixcbiAgICBcIlNUQVJUXCI6IFwiU1RBUlRJTkcgV0lUSCBQTU1HXCIsXG4gICAgXCJERUJVR1wiOiBcIkRFQlVHXCIsXG4gICAgXCJOT1RFXCI6IFwiTk9URVwiLFxuICAgIFwiTk9URVNcIjogXCJOT1RFXCIsXG4gICAgXCJDSEVDS1wiOiBcIkNIRUNLTElTVFwiLFxuICAgIFwiQ0hFQ0tTXCI6IFwiQ0hFQ0tMSVNUXCIsXG4gICAgXCJDSEVDS0xJU1RcIjogXCJDSEVDS0xJU1RcIixcbiAgICBcIkNIRUNLTElTVFNcIjogXCJDSEVDS0xJU1RcIixcbiAgICBcIlNPUlRcIjogXCJTT1JUSU5HIE9QVElPTlNcIixcbiAgICBcIkxJU1RcIjogXCJDT01NQU5EIExJU1RcIlxufTtcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGIteGl0XCI7XG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XG4gICAgICAgIHRoaXMuYnVyblNldHRpbmdzID0gYnVyblNldHRpbmdzO1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIlhJVFwiKTtcbiAgICAgICAgaWYgKCFidWZmZXJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBidXJuID0gdGhpcy5idXJuO1xuICAgICAgICBjb25zdCBidXJuU2V0dGluZ3MgPSB0aGlzLmJ1cm5TZXR0aW5ncztcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gKGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpKTtcbiAgICAgICAgICAgIGlmICghdGlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbG9hZC1zdWNjZXNzXCIgfHwgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1uby1tYXRjaFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnNSYXcgPSBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlckhlYWRlcikpWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzUmF3KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1Jhdy5jaGFyQXQoNCkgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2goa2V5LnNsaWNlKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNSYXcuc2xpY2UoNCkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbaV0gPSBwYXJhbWV0ZXJzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1yZWxvYWRcIikge1xuICAgICAgICAgICAgICAgIFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldKHRpbGUuZmlyc3RDaGlsZCwgcGFyYW1ldGVycywgdGhpcy5yZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ4aXQtdGlsZVwiKTtcbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjIyMjIyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkIHx8ICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCAhPSBcInBtbWctbm8tbWF0Y2hcIikpKSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIuKfs1wiKSk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXVwcGVyLXJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMTJweFwiO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uaWQgPSBcInJlZnJlc2hcIjtcbiAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKHJlZnJlc2hCdXR0b24sIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgICAgICAgICBjb25zdCBwcmVGdW5jID0gWElUUHJlRnVuY3Rpb25zW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgICBpZiAoIXByZUZ1bmMpIHtcbiAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRnVuY3Rpb24hXCI7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuaWQgPSBcInBtbWctbm8tbWF0Y2hcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyVGl0bGUpKVswXS50ZXh0Q29udGVudCA9IFhJVEJ1ZmZlclRpdGxlc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZXMgPSB0aGlzLm1vZHVsZXM7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcHJlRnVuYyhjb250ZW50RGl2LCBwYXJhbWV0ZXJzLCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgICAgIHRpbGUuZmlyc3RDaGlsZC5pZCA9IFwicG1tZy1sb2FkLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHRoaXMucmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVEhhbmRsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjbGVhckNoaWxkcmVuLCBjcmVhdGVMaW5rIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBTdGFydCh0aWxlKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICB0aWxlLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgdGlsZS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMnB4XCI7XG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZVRleHRTcGFuKFwiVGhhbmsgeW91IGZvciB1c2luZyBQTU1HIEV4dGVuZGVkIVwiKTtcbiAgICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB3ZWxjb21lLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwXCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVGhpcyBpcyBhIHNob3J0IHR1dG9yaWFsIG9uIGhvdyB0byBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBleHRlbnNpb24uXCIpKTtcbiAgICBjb25zdCB3ZWJzaXRlTGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vic2l0ZUxpbmtEaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2Vic2l0ZUxpbmtEaXYpO1xuICAgIHdlYnNpdGVMaW5rRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiRGV0YWlscyBvbiB3aGF0IFBNTUcgb2ZmZXJzIGNhbiBiZSBmb3VuZCBoZXJlOiBcIikpO1xuICAgIGNvbnN0IHdlYnNpdGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgd2Vic2l0ZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9zaXRlcy5nb29nbGUuY29tL3ZpZXcvcG1tZ2V4dGVuZGVkL2hvbWU/YXV0aHVzZXI9MFwiO1xuICAgIHdlYnNpdGVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgd2Vic2l0ZUxpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgd2Vic2l0ZUxpbmsudGV4dENvbnRlbnQgPSBcIlBNTUcgRXh0ZW5kZWRcIjtcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XG4gICAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2V0dGluZ3NEaXYpO1xuICAgIHNldHRpbmdzRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlN0YXJ0IGJ5IG9wZW5pbmcgYSBuZXcgYnVmZmVyIGFuZCBlbnRlcmluZyBcIikpO1xuICAgIGNvbnN0IHNldHRpbmdzTGluayA9IGNyZWF0ZUxpbmsoXCJYSVQgU0VUVElOR1NcIiwgXCJYSVQgU0VUVElOR1NcIik7XG4gICAgc2V0dGluZ3NMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG4gICAgY29uc3QgZmlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpb0Rpdik7XG4gICAgZmlvRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICBmaW9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJGSU8gaXMgYSBicm93c2VyIGV4dGVuc2lvbiB0aGF0IGdhdGhlcnMgZGF0YSBmcm9tIHlvdXIgZ2FtZS4gUE1NRyBFeHRlbmRlZCB1c2VzIHRoYXQgZGF0YSB0byBkaXNwbGF5IHVzZWZ1bCBpbmZvcm1hdGlvbi4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGluc3RhbGxpbmcgRklPIGhlcmU6IFwiKSk7XG4gICAgY29uc3QgZmlvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZpb0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly9maW8uZm5hci5uZXQvXCI7XG4gICAgZmlvTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGZpb0xpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgZmlvTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBmaW9MaW5rLnRleHRDb250ZW50ID0gXCJGSU8gV2Vic2l0ZVwiO1xuICAgIGZpb0Rpdi5hcHBlbmRDaGlsZChmaW9MaW5rKTtcbiAgICBjb25zdCBmaW9EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpb0RpdjIpO1xuICAgIGZpb0RpdjIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJJZiB5b3UgYWxyZWFkeSBoYXZlIGEgRklPIGFjY291bnQsIGFkZCB5b3VyIHVzZXJuYW1lIGFuZCBBUEkgS2V5IHRvIHRoZSB0ZXh0IGJveGVzIG9uIFhJVCBTRVRUSU5HUy4gWW91IGNhbiBnZW5lcmF0ZSBhbiBBUEkgS2V5IFwiKSk7XG4gICAgY29uc3QgZmlvTGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmaW9MaW5rMi5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9zZXR0aW5nc1wiO1xuICAgIGZpb0xpbmsyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgZmlvTGluazIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgZmlvTGluazIuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgZmlvTGluazIudGV4dENvbnRlbnQgPSBcImhlcmUuXCI7XG4gICAgZmlvRGl2Mi5hcHBlbmRDaGlsZChmaW9MaW5rMik7XG4gICAgY29uc3Qgd2ViQXBwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdlYkFwcERpdik7XG4gICAgd2ViQXBwRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICB3ZWJBcHBEaXYuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMjBweFwiO1xuICAgIHdlYkFwcERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIklmIHlvdXIgY29ycG9yYXRpb24gaGFzIGEgd2ViIGFwcCAoQUhJLCBGT1dMLCBLQVdBKSwgZW50ZXIgdGhhdCBpbiB0aGUgV2ViIEFwcCBJRCBmaWVsZC5cIikpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJZb3UgY2FuIGV4cGxvcmUgb3RoZXIgc2V0dGluZ3MgdG8gZW5hYmxlIG9yIGRpc2FibGUgZmVhdHVyZXMsIGNoYW5nZSB0aGUgY29sb3Igc2NoZW1lLCBhbmQgY3VzdG9taXplIHRoZSBsZWZ0IHNpZGViYXIuIENvbnRhY3QgUGlCb3kzMTQgaW4gZ2FtZSBvciBvbiBEaXNjb3JkIGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy5cIikpO1xuICAgIHJldHVybjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9TdGFydC50c1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgY3JlYXRlVGV4dFNwYW4sIGRvd25sb2FkRmlsZSwgY3JlYXRlU2VsZWN0T3B0aW9uLCBzZXRTZXR0aW5ncywgZ2V0TG9jYWxTdG9yYWdlLCBjcmVhdGVUb29sVGlwIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlLCBXaXRoU3R5bGVzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3ModGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBjb25zdCB3YXJuaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdhcm5pbmdEaXYpO1xuICAgIHdhcm5pbmdEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI0cHhcIjtcbiAgICB3YXJuaW5nRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQ2hhbmdlcyByZXF1aXJlIGEgcmVmcmVzaCB0byB0YWtlIGVmZmVjdC5cIikpO1xuICAgIGNvbnN0IGhlbHBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGVscERpdik7XG4gICAgaGVscERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xuICAgIGhlbHBEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJTZWUgYSBmdWxsIGxpc3Qgb2YgZmVhdHVyZXMgb24gXCIpKTtcbiAgICBjb25zdCB3ZWJzaXRlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHdlYnNpdGVMaW5rLmhyZWYgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3BtbWdleHRlbmRlZC9mZWF0dXJlcz9hdXRodXNlcj0wXCI7XG4gICAgd2Vic2l0ZUxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICB3ZWJzaXRlTGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICB3ZWJzaXRlTGluay50ZXh0Q29udGVudCA9IFwiUE1NRydzIFdlYnNpdGVcIjtcbiAgICBoZWxwRGl2LmFwcGVuZENoaWxkKHdlYnNpdGVMaW5rKTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBdXRoZW50aWNhdGlvbiBTZXR0aW5nc1wiKSk7XG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIkVudGVyIHlvdXIgRklPIHVzZXJuYW1lIGFuZCBBUEkga2V5LCBhcyB3ZWxsIGFzIGEgY29ycG9yYXRlIHdlYiBhcHAgSURcIiwgXCJyaWdodFwiKSk7XG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYXV0aGVudGljYXRpb25IZWFkZXIpO1xuICAgIGNvbnN0IHVzZXJuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJGSU8gVXNlcm5hbWU6IFwiKTtcbiAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSB8fCBcIlwiO1xuICAgIHVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gPSAhdXNlcm5hbWVJbnB1dC52YWx1ZSB8fCB1c2VybmFtZUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB1c2VybmFtZUlucHV0LnZhbHVlO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIHVzZXJuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XG4gICAgdXNlcm5hbWVEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVMYWJlbCk7XG4gICAgdXNlcm5hbWVEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh1c2VybmFtZURpdik7XG4gICAgY29uc3QgYXBpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhcGlMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIEFQSSBLZXk6IFwiKTtcbiAgICBhcGlMYWJlbC5zdHlsZS5taW5XaWR0aCA9IFwiNzdweFwiO1xuICAgIGFwaUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGNvbnN0IGFwaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFwaUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdIHx8IFwiXCI7XG4gICAgYXBpSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdID0gIWFwaUlucHV0LnZhbHVlIHx8IGFwaUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiBhcGlJbnB1dC52YWx1ZTtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICBhcGlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcbiAgICBhcGlJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgIGFwaURpdi5hcHBlbmRDaGlsZChhcGlMYWJlbCk7XG4gICAgYXBpRGl2LmFwcGVuZENoaWxkKGFwaUlucHV0KTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFwaURpdik7XG4gICAgY29uc3Qgd2ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB3ZWJMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiV2ViIEFwcCBJRDogXCIpO1xuICAgIHdlYkxhYmVsLnN0eWxlLm1pbldpZHRoID0gXCI3N3B4XCI7XG4gICAgd2ViTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgY29uc3Qgd2ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgd2ViSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSB8fCBcIlwiO1xuICAgIHdlYklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID0gIXdlYklucHV0LnZhbHVlIHx8IHdlYklucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB3ZWJJbnB1dC52YWx1ZTtcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KTtcbiAgICB3ZWJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViTGFiZWwpO1xuICAgIHdlYkRpdi5hcHBlbmRDaGlsZCh3ZWJJbnB1dCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJEaXYpO1xuICAgIGNvbnN0IGVuaGFuY2VkQ29sb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb2xvciBTY2hlbWVcIikpO1xuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlNlbGVjdCBhIGNvbG9yIHNjaGVtZSB0byBjdXN0b21pemUgbWF0ZXJpYWwgaWNvbnMuXCIsIFwicmlnaHRcIikpO1xuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZW5oYW5jZWRDb2xvckhlYWRlcik7XG4gICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIkNvbG9yIFNjaGVtZTpcIik7XG4gICAgY29sb3JMYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xuICAgIGNvbnN0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb2xvclNlbGVjdC5uYW1lID0gXCJjb2xvcnMtc2VsZWN0XCI7XG4gICAgY29sb3JTZWxlY3QuaWQgPSBcImNvbG9ycy1zZWxlY3RcIjtcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJFbmhhbmNlZFwiLCBcImVuaGFuY2VkXCIpKTtcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJJY29uc1wiLCBcImljb25zXCIpKTtcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJEZWZhdWx0XCIsIFwiZGVmYXVsdFwiKSk7XG4gICAgY29sb3JTZWxlY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcbiAgICBjb2xvclNlbGVjdC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiaWNvbnNcIikge1xuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblsxXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblsyXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGNvbG9yU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGNvbG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPSBjb2xvclNlbGVjdC5zZWxlY3RlZE9wdGlvbnNbMF0udmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcbiAgICBjb25zdCBtaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1pbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIk1pbmltaXplIEhlYWRlcnMgYnkgRGVmYXVsdFwiKSk7XG4gICAgbWluTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIk1pbmltaXplZCBjb250cmFjdCBhbmQgQ1ggaGVhZGVycyBieSBkZWZhdWx0LlwiLCBcInJpZ2h0XCIpKTtcbiAgICBtaW5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgbWluTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluTGFiZWwpO1xuICAgIGNvbnN0IG1pbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1pbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbWluQ2hlY2tib3guY2hlY2tlZCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIm1pbmltaXplX2J5X2RlZmF1bHRcIl07XG4gICAgbWluRGl2LmFwcGVuZENoaWxkKG1pbkNoZWNrYm94KTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKG1pbkRpdik7XG4gICAgbWluQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibWluaW1pemVfYnlfZGVmYXVsdFwiXSA9IG1pbkNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgY29uc3QgYnVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnVybkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBidXJuTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJCdXJuIFNldHRpbmdzXCIpKTtcbiAgICBidXJuTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlNldCB0aGUgdGhyZXNob2xkcyBmb3IgeWVsbG93IGFuZCByZWQgY29uc3VtYWJsZSBsZXZlbHMgaW4gYnVybiB0aWxlcyAoaW4gZGF5cykuXCIsIFwicmlnaHRcIikpO1xuICAgIGJ1cm5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgYnVybkxhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgYnVybkRpdi5hcHBlbmRDaGlsZChidXJuTGFiZWwpO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSA9IFszLCA3XTtcbiAgICB9XG4gICAgY29uc3Qgc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKHNldERpdik7XG4gICAgc2V0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldERpdi5hcHBlbmRDaGlsZChyZWREaXYpO1xuICAgIHJlZERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlJlZCBUaHJlc2hvbGQ6IFwiKSk7XG4gICAgY29uc3QgcmVkSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcmVkSW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgcmVkSW4udmFsdWUgPSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszXSlbMF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQocmVkSW4pO1xuICAgIHJlZEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIHJlZEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XG4gICAgcmVkSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdWzBdID0gcGFyc2VGbG9hdChyZWRJbi52YWx1ZSk7XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgY29uc3QgeWVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXREaXYuYXBwZW5kQ2hpbGQoeWVsRGl2KTtcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJZZWxsb3cgVGhyZXNob2xkOiBcIikpO1xuICAgIGNvbnN0IHllbEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHllbEluLnR5cGUgPSBcIm51bWJlclwiO1xuICAgIHllbEluLnZhbHVlID0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XG4gICAgeWVsRGl2LmFwcGVuZENoaWxkKHllbEluKTtcbiAgICB5ZWxJbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcbiAgICB5ZWxJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xuICAgIHllbEluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXVsxXSA9IHBhcnNlRmxvYXQoeWVsSW4udmFsdWUpO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVybkRpdik7XG4gICAgY29uc3QgaG90a2V5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBob3RrZXlIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMZWZ0IFNpZGViYXIgQnV0dG9uc1wiKSk7XG4gICAgaG90a2V5SGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJDcmVhdGUgaG90a2V5cyBvbiB0aGUgbGVmdCBzaWRlYmFyLiBUaGUgZmlyc3QgdmFsdWUgaXMgd2hhdCB3aWxsIGJlIGRpc3BsYXllZCwgdGhlIHNlY29uZCBpcyB0aGUgY29tbWFuZC5cIiwgXCJyaWdodFwiKSk7XG4gICAgaG90a2V5SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhvdGtleUhlYWRlcik7XG4gICAgY29uc3QgaG90a2V5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SW5wdXREaXYpO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcbiAgICB9XG4gICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXS5mb3JFYWNoKGhvdGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgaG90a2V5SW5wdXREaXYpO1xuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvdGtleUlucHV0RGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG1ha2VQdXNoQnV0dG9uKFwiK1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihbW10sIFtdXSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH0sIFN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgY29uc3Qgc2NyZWVuVW5wYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTY3JlZW4gVW5wYWNrIEV4Y2x1c2lvbnNcIikpO1xuICAgIHNjcmVlblVucGFja0hlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiTGlzdCBzY3JlZW5zIHRvIGJlIGV4Y2x1ZGVkIGZyb20gc2NyZWVuIHVucGFjay4gU2VwYXJhdGUgc2NyZWVucyB3aXRoIGEgY29tbWEuXCIsIFwicmlnaHRcIikpO1xuICAgIHNjcmVlblVucGFja0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChzY3JlZW5VbnBhY2tIZWFkZXIpO1xuICAgIGNvbnN0IG5vdGlmRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKG5vdGlmRGl2KTtcbiAgICBub3RpZkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkxpc3Qgc2NyZWVuIG5hbWVzIHNlcGFyYXRlZCBieSBjb21tYXMsIG5vIHNwYWNlcy5cIikpO1xuICAgIGNvbnN0IGV4Y2x1c2lvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGV4Y2x1c2lvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIGV4Y2x1c2lvbklucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0gPT0gdW5kZWZpbmVkID8gXCJcIiA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdLmpvaW4oXCIsXCIpO1xuICAgIGV4Y2x1c2lvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdID0gZXhjbHVzaW9uSW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZXhjbHVzaW9uSW5wdXQpO1xuICAgIGNvbnN0IG1vZHVsZVNldHRpbmdzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRvZ2dsZSBGZWF0dXJlc1wiKSk7XG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlRvZ2dsZSBmZWF0dXJlcyBvbiBhbmQgb2ZmLiBUaGUgeWVsbG93IFggY2xlYW5zIHVwIGFueSBzdHJheSBlbGVtZW50cy5cIiwgXCJyaWdodFwiKSk7XG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQobW9kdWxlU2V0dGluZ3NIZWFkZXIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkNvbnRlbnQpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgbW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5TaWRlYmFyTGluZSwgU3R5bGUuRm9udHNSZWd1bGFyKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4obXAuZnJpZW5kbHlOYW1lKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHJpZ2h0LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XG4gICAgICAgIHJpZ2h0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9nZ2xlID0gbWFrZVRvZ2dsZUJ1dHRvbihcIk9uXCIsIFwiT2ZmXCIsICgpID0+IHtcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSAhbXAuZW5hYmxlZDtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmIChtcC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXVtpXSA9PSBtcC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbXAuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5wdXNoKG1wLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIH0sIG1wLmVuYWJsZWQpO1xuICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0uaW5jbHVkZXMobXAubmFtZSkpIHtcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgICAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IFwiT2ZmXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG1ha2VQdXNoQnV0dG9uKFwieFwiLCAoKSA9PiBtcC5tb2R1bGUuY2xlYW51cCh0cnVlKSk7XG4gICAgICAgIGNsZWFudXAuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjhweFwiO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjbGVhbnVwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbnN0IGltcG9ydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaW1wb3J0SGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW1wb3J0L0V4cG9ydCBTZXR0aW5nc1wiKSk7XG4gICAgaW1wb3J0SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydEhlYWRlcik7XG4gICAgY29uc3QgaW1wb3J0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGltcG9ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSW1wb3J0IFNldHRpbmdzXCI7XG4gICAgaW1wb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBpbXBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgaW1wb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGltcG9ydEJ1dHRvbik7XG4gICAgY29uc3QgaW1wb3J0RmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGltcG9ydEZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgaW1wb3J0RmlsZUlucHV0LmFjY2VwdCA9IFwiLmpzb25cIjtcbiAgICBpbXBvcnRGaWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChpbXBvcnRGaWxlSW5wdXQpO1xuICAgIGltcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbXBvcnRGaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbnN0IGVycm9yVGV4dEJveCA9IGNyZWF0ZVRleHRTcGFuKFwiRXJyb3IgTG9hZGluZyBGaWxlIVwiKTtcbiAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChlcnJvclRleHRCb3gpO1xuICAgIGltcG9ydEZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG4gICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU91dHB1dCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGNsdWRlID0gW1widXNlcm5hbWVcIiwgXCJhcGlrZXlcIiwgXCJ3ZWJhcHBpZFwiXTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWxlT3V0cHV0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1ba2V5XSA9IGZpbGVPdXRwdXRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRXJyb3IgZW5jb3VudGVyZWQgcHJvY2Vzc2luZyBmaWxlIVwiKTtcbiAgICAgICAgICAgICAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleHBvcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkV4cG9ydCBTZXR0aW5nc1wiO1xuICAgIGV4cG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgZXhwb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XG4gICAgZXhwb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGV4cG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChleHBvcnRCdXR0b24pO1xuICAgIGV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgICAgICAgY29uc3QgZXhjbHVkZSA9IFtcInVzZXJuYW1lXCIsIFwiYXBpa2V5XCIsIFwid2ViYXBwaWRcIl07XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG93bmxvYWRGaWxlKG91dHB1dCwgXCJwbW1nLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpO1xuICAgIH0pO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0RGl2KTtcbiAgICBjb25zdCBpbXBvcnROb3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbXBvcnROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbXBvcnROb3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJJbXBvcnQgTm90ZXNcIjtcbiAgICBpbXBvcnROb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBpbXBvcnROb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBpbXBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChpbXBvcnROb3RlQnV0dG9uKTtcbiAgICBjb25zdCBpbXBvcnROb3RlRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGltcG9ydE5vdGVGaWxlSW5wdXQudHlwZSA9IFwiZmlsZVwiO1xuICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuYWNjZXB0ID0gXCIuanNvblwiO1xuICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGltcG9ydE5vdGVEaXYuYXBwZW5kQ2hpbGQoaW1wb3J0Tm90ZUZpbGVJbnB1dCk7XG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbXBvcnROb3RlRmlsZUlucHV0LmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBjb25zdCBlcnJvck5vdGVUZXh0Qm94ID0gY3JlYXRlVGV4dFNwYW4oXCJFcnJvciBMb2FkaW5nIEZpbGUhXCIpO1xuICAgIGVycm9yTm90ZVRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGltcG9ydE5vdGVEaXYuYXBwZW5kQ2hpbGQoZXJyb3JOb3RlVGV4dEJveCk7XG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG4gICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU91dHB1dCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhmaWxlT3V0cHV0KTtcbiAgICAgICAgICAgICAgICBlcnJvck5vdGVUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRXJyb3IgZW5jb3VudGVyZWQgcHJvY2Vzc2luZyBmaWxlIVwiKTtcbiAgICAgICAgICAgICAgICBlcnJvck5vdGVUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGNvbnN0IGV4cG9ydE5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGV4cG9ydE5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkV4cG9ydCBOb3Rlc1wiO1xuICAgIGV4cG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGV4cG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBleHBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xuICAgIGV4cG9ydE5vdGVCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcbiAgICBpbXBvcnROb3RlRGl2LmFwcGVuZENoaWxkKGV4cG9ydE5vdGVCdXR0b24pO1xuICAgIGV4cG9ydE5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBkb3dubG9hZEZpbGUsIFwicG1tZy1ub3Rlc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKTtcbiAgICB9KTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydE5vdGVEaXYpO1xuICAgIHJldHVybiBbcGFyYW1ldGVycywgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5nc107XG59XG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGZ1bGxEaXYpIHtcbiAgICBpZiAoaG90a2V5Lmxlbmd0aCAhPSAyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpc3BsYXllZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRpc3BsYXllZFZhbHVlLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIGRpc3BsYXllZFZhbHVlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRWYWx1ZSk7XG4gICAgY29uc3QgY29tbWFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21tYW5kLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIGNvbW1hbmQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbW1hbmQpO1xuICAgIGNvbnN0IHJlbW92ZSA9IG1ha2VQdXNoQnV0dG9uKFwiWFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXllZFZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xuICAgICAgICBBcnJheS5mcm9tKGRpdi5jaGlsZHJlbikuZm9yRWFjaChlbGVtID0+IHsgZGl2LnJlbW92ZUNoaWxkKGVsZW0pOyByZXR1cm47IH0pO1xuICAgIH0sIFN0eWxlLkJ1dHRvbkRhbmdlcik7XG4gICAgcmVtb3ZlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gaG90a2V5WzBdO1xuICAgIGNvbW1hbmQudmFsdWUgPSBob3RrZXlbMV07XG4gICAgZGlzcGxheWVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0gPSBob3RrZXlzO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIGNvbW1hbmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0gPSBob3RrZXlzO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBtYWtlUHVzaEJ1dHRvbih0ZXh0LCBmLCBzdHlsZSA9IFN0eWxlLkJ1dHRvblByaW1hcnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlKTtcbiAgICBidXR0b24ub25jbGljayA9IGY7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cbmZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b24ob24sIG9mZiwgZiwgc3RhdGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgY29uc3Qgc2V0TG9vayA9IChzKSA9PiB7XG4gICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBzID8gb24gOiBvZmY7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKHN0YXRlKSk7XG4gICAgc2V0TG9vayhzdGF0ZSk7XG4gICAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gISh0b2dnbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKSA9PT0gXCJ0cnVlXCIpO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcobmV3U3RhdGUpKTtcbiAgICAgICAgc2V0TG9vayhuZXdTdGF0ZSk7XG4gICAgICAgIGYoKTtcbiAgICB9O1xuICAgIHRvZ2dsZS5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xuICAgIHJldHVybiB0b2dnbGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU2V0dGluZ3MudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRvd25sb2FkRmlsZSwgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIERlYnVnKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5ncykge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgY29uc3QgZG93bmxvYWRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9ucyk7XG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSwgXCJEb3dubG9hZCBGdWxsIFNldHRpbmdzXCIsIFwicG1tZy1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKGZ1bGxCdXJuW3Jlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdXSwgXCJEb3dubG9hZCBCdXJuXCIsIFwicG1tZy1idXJuXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oYnVyblNldHRpbmdzLCBcIkRvd25sb2FkIEJ1cm4gU2V0dGluZ3NcIiwgXCJwbW1nLWJ1cm4tc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xuICAgIGNvbnN0IGVuZHBvaW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZHBvaW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkdldCBGSU8gRW5kcG9pbnQgKGV4OiAvaW5mcmFzdHJ1Y3R1cmUvUHJveGlvbilcIjtcbiAgICBlbmRwb2ludExhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZW5kcG9pbnRMYWJlbC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRMYWJlbCk7XG4gICAgY29uc3QgZW5kcG9pbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbmRwb2ludElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIGVuZHBvaW50SW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRJbnB1dCk7XG4gICAgY29uc3QgZW5kcG9pbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVuZHBvaW50QnV0dG9uLnRleHRDb250ZW50ID0gXCJEb3dubG9hZCBGSU8gRW5kcG9pbnRcIjtcbiAgICBlbmRwb2ludEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgZW5kcG9pbnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBlbmRwb2ludEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBlbmRwb2ludEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZW5kcG9pbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIChlbmRwb2ludElucHV0LnZhbHVlLmNoYXJBdCgwKSA9PSBcIi9cIiA/IFwiXCIgOiBcIi9cIikgKyBlbmRwb2ludElucHV0LnZhbHVlO1xuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIERlYnVnX3Bvc3QsIHVybCwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl1dLCBudWxsKTtcbiAgICB9KTtcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRCdXR0b24pO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIERlYnVnX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGpzb25kYXRhKSk7XG4gICAgfVxuICAgIGNhdGNoIChleCkgeyB9XG4gICAgZG93bmxvYWRGaWxlKGpzb25kYXRhLCBcImZpby1lbmRwb2ludFwiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiLCBmYWxzZSk7XG4gICAgcmV0dXJuIFt0aWxlLCBwYXJhbWV0ZXJzXTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkQnV0dG9uKGRhdGEsIGJ1dHRvbk5hbWUsIGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRvd25sb2FkQnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgZG93bmxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuICAgIGRvd25sb2FkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRvd25sb2FkRmlsZShkYXRhLCBmaWxlTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRvd25sb2FkQnV0dG9uO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0RlYnVnLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDYWxjdWxhdG9yKHRpbGUpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGNvbnN0IGNhbGNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2FsY0Rpdik7XG4gICAgdGlsZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGlsZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICBjYWxjRGl2LnN0eWxlLm1heEhlaWdodCA9IFwiNDAwcHhcIjtcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgIG91dHB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgIG91dHB1dC5yZWFkT25seSA9IHRydWU7XG4gICAgb3V0cHV0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICBjYWxjRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjYWxjRGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIGNhbGNEaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgY2FsY0Rpdi5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XG4gICAgY2FsY0Rpdi5zdHlsZS5taW5XaWR0aCA9IFwiMTgwcHhcIjtcbiAgICBjb25zdCBoaXN0b3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhpc3RvcnlEaXYpO1xuICAgIGhpc3RvcnlEaXYuc3R5bGUud2lkdGggPSBcIjM1JVwiO1xuICAgIGhpc3RvcnlEaXYuc3R5bGUubWFyZ2luVG9wID0gXCIxMHB4XCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGhpc3RvcnlEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCIxOTVweFwiO1xuICAgIGhpc3RvcnlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDQwLCA0MylcIjtcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2IoNDMsNzIsOTApXCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJTdHlsZSA9IFwic29saWRcIjtcbiAgICBjb25zdCBoaXN0b3J5VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgaGlzdG9yeURpdi5hcHBlbmRDaGlsZChoaXN0b3J5VGFibGUpO1xuICAgIGNvbnN0IGhpc3RvcnlUYWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgaGlzdG9yeVRhYmxlLmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZUJvZHkpO1xuICAgIG91dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG91dHB1dC5zdHlsZS53aWR0aCA9IFwiOTAlXCI7XG4gICAgb3V0cHV0LnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xuICAgIG91dHB1dC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICBvdXRwdXQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChvdXRwdXQpO1xuICAgIHZhciBjdXJyZW50U3RyaW5nID0gXCJcIjtcbiAgICB2YXIgcHJldlZhbHVlID0gbnVsbDtcbiAgICB2YXIgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XG4gICAgdmFyIGNsZWFyT25OZXh0ID0gZmFsc2U7XG4gICAgdmFyIGRvdWJsZUNsZWFyID0gZmFsc2U7XG4gICAgY29uc3Qga2V5cGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGtleXBhZCk7XG4gICAga2V5cGFkLnN0eWxlLndpZHRoID0gXCI5NSVcIjtcbiAgICBrZXlwYWQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGtleXBhZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoNCwgMWZyKVwiO1xuICAgIGNvbnN0IGxheW91dCA9IFtbNywgbnVsbF0sIFs4LCBudWxsXSwgWzksIG51bGxdLCBbXCLDt1wiLCBcIiMzZmEyZGVcIl0sIFs0LCBudWxsXSwgWzUsIG51bGxdLCBbNiwgbnVsbF0sIFtcInhcIiwgXCIjM2ZhMmRlXCJdLCBbMSwgbnVsbF0sIFsyLCBudWxsXSwgWzMsIG51bGxdLCBbXCItXCIsIFwiIzNmYTJkZVwiXSwgWzAsIG51bGxdLCBbXCIuXCIsIG51bGxdLCBbXCLCsVwiLCBudWxsXSwgW1wiK1wiLCBcIiMzZmEyZGVcIl1dO1xuICAgIGxheW91dC5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgICAgICBpZiAob3B0WzFdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRbMV07XG4gICAgICAgIH1cbiAgICAgICAga2V5cGFkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG9wdFswXSA9PSBcIitcIiB8fCBvcHRbMF0gPT0gXCItXCIgfHwgb3B0WzBdID09IFwieFwiIHx8IG9wdFswXSA9PSBcIsO3XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBvcHRbMF07XG4gICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRbMF0gPT0gXCLCsVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiLVwiICsgY3VycmVudFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGJvdHRvbURpdik7XG4gICAgYm90dG9tRGl2LnN0eWxlLndpZHRoID0gXCI5NSVcIjtcbiAgICBib3R0b21EaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGJvdHRvbURpdi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoMiwgMWZyKVwiO1xuICAgIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY2xlYXIpO1xuICAgIGNsZWFyLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xuICAgIGNsZWFyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcbiAgICBjbGVhci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgIGNsZWFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIxNywgODMsIDc5KVwiO1xuICAgIGNsZWFyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBvdXRwdXQudmFsdWUgPSBjdXJyZW50U3RyaW5nO1xuICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcbiAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAxMSkge1xuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICAgIH1cbiAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcbiAgICB9O1xuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChlbnRlcik7XG4gICAgZW50ZXIudGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XG4gICAgZW50ZXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xuICAgIGVudGVyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgZW50ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNWNiODVjXCI7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiIHx8IGUua2V5ID09PSBcIjJcIiB8fCBlLmtleSA9PT0gXCIzXCIgfHwgZS5rZXkgPT09IFwiNFwiIHx8IGUua2V5ID09PSBcIjVcIiB8fCBlLmtleSA9PT0gXCI2XCIgfHwgZS5rZXkgPT09IFwiN1wiIHx8IGUua2V5ID09PSBcIjhcIiB8fCBlLmtleSA9PT0gXCI5XCIgfHwgZS5rZXkgPT09IFwiMFwiIHx8IGUua2V5ID09PSBcIi5cIikge1xuICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSBlLmtleTtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiK1wiIHx8IGUua2V5ID09PSBcIi1cIiB8fCBlLmtleSA9PT0gXCJ4XCIgfHwgZS5rZXkgPT09IFwiKlwiIHx8IGUua2V5ID09PSBcIi9cIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IGUua2V5O1xuICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIj1cIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbikge1xuICAgIGN1cnJlbnRTdHJpbmcgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xuICAgIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgKyBjdXJyZW50U3RyaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiLVwiKSB7XG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgLSBjdXJyZW50U3RyaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwieFwiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAqIGN1cnJlbnRTdHJpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCLDt1wiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIvXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAvIGN1cnJlbnRTdHJpbmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ2FsY3VsYXRvci50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QsIHNldFNldHRpbmdzIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBSZXBhaXJzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0pIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgVXNlcm5hbWVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBBUEkgS2V5XCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV1bXCJQTU1HRXh0ZW5kZWRcIl0pIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKHJlc3VsdCk7XG4gICAgfVxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgUmVwYWlyc19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zaXRlcy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gUmVwYWlyc19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyYW1ldGVyc1twYXJhbWV0ZXJzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXBhaXJEYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcGFpckRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkFsbCBSZXBhaXJzXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRocmVzaG9sZERpdik7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVGV4dCA9IGNyZWF0ZVRleHRTcGFuKFwiQWdlIFRocmVzaG9sZDpcIik7XG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdID8gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA6IFwiNzBcIjtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xuICAgICAgICBjb25zdCBtYXRUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiU2hvcHBpbmcgQ2FydFwiKTtcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXRUaXRsZSk7XG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcbiAgICAgICAgY29uc3QgYnVpVGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkJ1aWxkaW5nc1wiKTtcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiUGxhbmV0XCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1aWxkaW5ncyA9IFtdO1xuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XG4gICAgICAgICAgICBzaXRlW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGJ1aWxkaW5ncy5wdXNoKFtzaXRlW1wiUGxhbmV0TmFtZVwiXSwgYnVpbGRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkaW5ncy5zb3J0KGdsb2JhbEJ1aWxkaW5nU29ydCk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oYm9keSk7XG4gICAgICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPSB0aHJlc2hvbGRJbnB1dC52YWx1ZSB8fCBcIjcwXCI7XG4gICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSArIFwiIFJlcGFpcnNcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHZhciBzaXRlRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xuICAgICAgICAgICAgaWYgKHNpdGVbXCJQbGFuZXROYW1lXCJdLnRvVXBwZXJDYXNlKCkgPT0gcGFyYW1ldGVyc1sxXS50b1VwcGVyQ2FzZSgpIHx8IHNpdGVbXCJQbGFuZXRJZGVudGlmaWVyXCJdLnRvVXBwZXJDYXNlKCkgPT0gcGFyYW1ldGVyc1sxXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgc2l0ZURhdGEgPSBzaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNpdGVEYXRhID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdIDogXCI3MFwiO1xuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkVGV4dCk7XG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xuICAgICAgICBtYXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcbiAgICAgICAgY29uc3QgbWF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xuICAgICAgICBidWlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChidWlUaXRsZSk7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5zb3J0KGJ1aWxkaW5nU29ydCk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XG4gICAgICAgIHRocmVzaG9sZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xuICAgICAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA9IHRocmVzaG9sZElucHV0LnZhbHVlIHx8IFwiNzBcIjtcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCkge1xuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcbiAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1tcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1tcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xuICAgICAgICBpZiAoZGF0ZSA8IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGRpbmdbXCJSZXBhaXJNYXRlcmlhbHNcIl0uZm9yRWFjaChtYXQgPT4ge1xuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBmb3IgKGxldCB0IG9mIFtcIk1hdGVyaWFsXCIsIFwiQW1vdW50XCJdKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG4gICAgY29uc3QgbWJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KSB7XG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1sxXVtcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1sxXVtcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xuICAgICAgICBpZiAoZGF0ZSA8IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGRpbmdbMV1bXCJSZXBhaXJNYXRlcmlhbHNcIl0uZm9yRWFjaChtYXQgPT4ge1xuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGJ1aWxkaW5nWzBdLCBkYXRlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSksIChidWlsZGluZ1sxXVtcIkNvbmRpdGlvblwiXSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArIFwiJVwiXTtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xuICAgIG1hdERpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLnNvcnQoKS5mb3JFYWNoKG1hdCA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbbWF0LCBtYXRlcmlhbHNbbWF0XS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQpXTtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gYnVpbGRpbmdTb3J0KGEsIGIpIHtcbiAgICByZXR1cm4gYVtcIkNvbmRpdGlvblwiXSA+IGJbXCJDb25kaXRpb25cIl0gPyAxIDogLTE7XG59XG5mdW5jdGlvbiBnbG9iYWxCdWlsZGluZ1NvcnQoYSwgYikge1xuICAgIHJldHVybiBhWzFdW1wiQ29uZGl0aW9uXCJdID4gYlsxXVtcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9SZXBhaXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDaGF0X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XG4gICAgfVxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ2hhdF9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jaGF0L2Rpc3BsYXkvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gQ2hhdF9wb3N0KGNoYXREaXYsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNoYXREYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGNoYXREYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICBjaGF0RGl2LnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBwYXJhbWV0ZXJzWzFdICsgXCIgR2xvYmFsIFNpdGUgT3duZXJzXCI7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIGNoYXREYXRhLmZvckVhY2goY2hhdCA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hhdExpbmUuY2xhc3NMaXN0LmFkZChcImNoYXQtbGluZVwiKTtcbiAgICAgICAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TGluZSk7XG4gICAgICAgIGNvbnN0IHRpbWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgICAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCIyLWRpZ2l0XCIgfSk7XG4gICAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRpbWUtZGF0ZVwiKTtcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKHRpbWVEaXYpO1xuICAgICAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KTtcbiAgICAgICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xuICAgICAgICB0aW1lRGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5OTk5XCI7XG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKHRpbWVEYXRlRGl2KTtcbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW5hbWVcIik7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1tZXNzYWdlXCIpO1xuICAgICAgICBzd2l0Y2ggKGNoYXRbXCJNZXNzYWdlVHlwZVwiXSkge1xuICAgICAgICAgICAgY2FzZSBcIkNIQVRcIjpcbiAgICAgICAgICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiTWVzc2FnZVRleHRcIl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiSk9JTkVEXCI6XG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGpvaW5lZC5cIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTEVGVFwiOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiVXNlck5hbWVcIl0gKyBcIiBsZWZ0LlwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0NoYXQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGNyZWF0ZVRleHRTcGFuLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFRleHRDb2xvcnMgfSBmcm9tIFwiLi4vU3R5bGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBGaW5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSArIFwiL2V4ZWM/bW9kZT0lMjJmaW4lMjImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZpbl9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBGaW5fcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBkYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBKU09OIERhdGEhXCI7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBjb25zdCB0aWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpbGVIZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBPdmVydmlld1wiO1xuICAgIHRpbGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIktleSBGaWd1cmVzXCI7XG4gICAgdGlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGlsZUhlYWRlcik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVsxXSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJGaXhlZCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMl0pLnRvTG9jYWxlU3RyaW5nKCksIFwiQ3VycmVudCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNF0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlxdWlkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs3XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJFcXVpdHlcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlhYmlsaXRpZXNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xuICAgIGNvbnN0IG5vdyA9IGRhdGFbMF1bMF07XG4gICAgdmFyIHdlZWtBZ28gPSAtMTtcbiAgICB2YXIgYmVzdEd1ZXNzID0gODY0MDAwMDAwMDA7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCkgPCBiZXN0R3Vlc3MpIHtcbiAgICAgICAgICAgIGJlc3RHdWVzcyA9IE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKTtcbiAgICAgICAgICAgIHdlZWtBZ28gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWVrQWdvICE9IC0xKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpdCA9IE1hdGgucm91bmQoZGF0YVswXVs3XSAtIGRhdGFbd2Vla0Fnb11bN10pO1xuICAgICAgICBjb25zdCBjb2xvciA9IHByb2ZpdCA+IDAgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChwcm9maXQudG9Mb2NhbGVTdHJpbmcoKSwgXCJQcm9maXRcIiwgY29sb3IpKTtcbiAgICB9XG4gICAgY29uc3QgYnJlYWtkb3duSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGJyZWFrZG93bkhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIEJyZWFrZG93blwiO1xuICAgIGJyZWFrZG93bkhlYWRlci50ZXh0Q29udGVudCA9IFwiSW52ZW50b3J5IEJyZWFrZG93blwiO1xuICAgIGJyZWFrZG93bkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnJlYWtkb3duSGVhZGVyKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gW1wiTmFtZVwiLCBcIkZpeGVkIEFzc2V0c1wiLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFwiVG90YWwgQXNzZXRzXCJdO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNvbnN0IGJyZWFrZG93biA9IEpTT04ucGFyc2UoZGF0YVswXVs4XSk7XG4gICAgYnJlYWtkb3duLnNvcnQoZmluYW5jaWFsU29ydCk7XG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBicmVha2Rvd24pIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIGNvbnN0IGZpcnN0VGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3RUYWJsZUVsZW0pO1xuICAgICAgICBmaXJzdFRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihyb3dEYXRhWzBdKSk7XG4gICAgICAgIHJvd0RhdGEuc2hpZnQoKTtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZmluYW5jaWFsU29ydChhLCBiKSB7XG4gICAgcmV0dXJuIGFbM10gPCBiWzNdID8gMSA6IC0xO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0ZpbmFuY2VzLnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3Bhbiwgc2V0U2V0dGluZ3MsIENhdGVnb3J5U29ydCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGdldEdyb3VwQnVybiwgZ2V0QnVybiB9IGZyb20gXCIuLi9CYWNrZ3JvdW5kUnVubmVyXCI7XG5leHBvcnQgZnVuY3Rpb24gRW5oYW5jZWRCdXJuX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlZnJlc2gpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBBUEkgS2V5IVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwaWtleSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdO1xuICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgIGZ1bGxCdXJuW3VzZXJuYW1lXSA9IFtdO1xuICAgICAgICBnZXRCdXJuKGZ1bGxCdXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcbiAgICB9XG4gICAgdmFyIGJ1cm47XG4gICAgdmFyIHVubG9hZGVkID0gZmFsc2U7XG4gICAgdmFyIHBsYW5ldDtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW1ldGVycy5sZW5ndGggPj0gMyAmJiBwYXJhbWV0ZXJzWzFdLnRvTG93ZXJDYXNlKCkgPT0gXCJncm91cFwiKSB7XG4gICAgICAgIGlmIChmdWxsQnVybltwYXJhbWV0ZXJzWzJdXSAmJiBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcbiAgICAgICAgICAgICAgICBnZXRHcm91cEJ1cm4oZnVsbEJ1cm4sIHBhcmFtZXRlcnNbMl0sIGFwaWtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bdXNlcm5hbWVdO1xuICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnVyblNldHRpbmdzWzBdID09IFwibG9hZGluZ1wiIHx8IHVubG9hZGVkKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XG4gICAgICAgIHRpbGUuaWQgPSBcInBtbWctcmVsb2FkXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGlsZS5pZCA9IFwicG1tZy1sb2FkLXN1Y2Nlc3NcIjtcbiAgICB2YXIgc2V0dGluZ3M7XG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcbiAgICAgICAgdmFyIGludiA9IHt9O1xuICAgICAgICB2YXIgY29ucyA9IHt9O1xuICAgICAgICB2YXIgZnVsbENvbW1hbmQgPSBcIlwiO1xuICAgICAgICBpZiAocGFyYW1ldGVyc1szXSkge1xuICAgICAgICAgICAgZnVsbENvbW1hbmQgPSBwYXJhbWV0ZXJzLmpvaW4oXCIgXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0uZm9yRWFjaChwbGFuZXREYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzNdKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoKHBsYW5ldERhdGEgJiYgcGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSkpIHx8IChwbGFuZXREYXRhICYmIHBsYW5ldERhdGFbXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZnVsbENvbW1hbmQubWF0Y2gocGxhbmV0RGF0YVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b1VwcGVyQ2FzZSgpKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxhbmV0RGF0YVtcIkVycm9yXCJdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiSW52ZW50b3J5XCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJQcm9kdWN0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuKTtcbiAgICAgICAgdmFyIGxhc3RVcGRhdGVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZShwbGFuZXRCdXJuW1wiTGFzdFVwZGF0ZVwiXSArIFwiWlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncyA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgYnVyblNldHRpbmdzKTtcbiAgICAgICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgUGxhbmV0IVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25zID0ge307XG4gICAgICAgIHZhciBpbnYgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKSB7XG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pIHtcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKSB7XG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiSW52ZW50b3J5XCJdKSB7XG4gICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzY3JlZW5OYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuU2NyZWVuTmFtZSk7XG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXSA9IFtdO1xuICAgIH1cbiAgICB2YXIgc2V0dGluZ3NJbmRleCA9IEZpbmRCdXJuU2V0dGluZ3MocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLCBzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSk7XG4gICAgY29uc3QgZGlzcFNldHRpbmdzID0gc2V0dGluZ3NJbmRleCA9PSAtMSA/IFsxLCAxLCAxLCAxXSA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBjb25zdCBidWZmZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1ZmZlckhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChidWZmZXJIZWFkZXIpO1xuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXR0aW5nc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIlJFRFwiLCAyMi4wMjUsIGRpc3BTZXR0aW5nc1swXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwU2V0dGluZ3NbMF0gPSBkaXNwU2V0dGluZ3NbMF0gPyAwIDogMTtcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KSk7XG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJZRUxMT1dcIiwgNDAuNDgzLCBkaXNwU2V0dGluZ3NbMV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzcFNldHRpbmdzWzFdID0gZGlzcFNldHRpbmdzWzFdID8gMCA6IDE7XG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xuICAgICAgICB9XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgfSkpO1xuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiR1JFRU5cIiwgMzQuNjUsIGRpc3BTZXR0aW5nc1syXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwU2V0dGluZ3NbMl0gPSBkaXNwU2V0dGluZ3NbMl0gPyAwIDogMTtcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICB9KSk7XG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJJTkZcIiwgMTkuNiwgZGlzcFNldHRpbmdzWzNdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BTZXR0aW5nc1szXSA9IGRpc3BTZXR0aW5nc1szXSA/IDAgOiAxO1xuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgIH0pKTtcbiAgICBpZiAobGFzdFVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3QgbGFzdFVwZGF0ZWRTcGFuID0gY3JlYXRlVGV4dFNwYW4oXCJMYXN0IFVwZGF0ZWQ6IFwiICsgbGFzdFVwZGF0ZWQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJudW1lcmljXCIgfSkgKyBcIiBcIiArIGxhc3RVcGRhdGVkLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSkpO1xuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjEwcHhcIjtcbiAgICAgICAgbGFzdFVwZGF0ZWRTcGFuLnN0eWxlLmNvbG9yID0gXCJyZ2IoMTUzLCAxNTMsIDE1MylcIjtcbiAgICAgICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKGxhc3RVcGRhdGVkU3Bhbik7XG4gICAgfVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5lZWRzXCIsIFwiUHJvZHVjdGlvblwiLCBcIkludlwiLCBcIkFtdC4gTmVlZGVkXCIsIFwiQnVyblwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGhlYWRSb3cuZmlyc3RDaGlsZC5jb2xTcGFuID0gMjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIHZhciBidXJuTWF0ZXJpYWxzID0gT2JqZWN0LmtleXMoY29ucyk7XG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XG4gICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgYnVybk1hdGVyaWFscykge1xuICAgICAgICB2YXIgaW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldHRpbmdzW1wiTWF0ZXJpYWxFeGNsdXNpb25zXCJdLmZvckVhY2goKG1hdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSA9PSBtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBweFwiO1xuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIGlmIChtYXRFbGVtKSB7XG4gICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcbiAgICAgICAgfVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobWF0ZXJpYWxDb2x1bW4pO1xuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKE1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxdWzBdKTtcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuICAgICAgICBjb25zdCBjb25zQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNvbnNbbWF0ZXJpYWxdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiAvIERheVwiKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcbiAgICAgICAgY29uc3QgaW52Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBpbnZBbW91bnQgPSBpbnZbbWF0ZXJpYWxdID09IHVuZGVmaW5lZCA/IDAgOiBpbnZbbWF0ZXJpYWxdO1xuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGludkNvbHVtbik7XG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiAtaW52QW1vdW50IC8gY29uc1ttYXRlcmlhbF07XG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGJ1cm5Db2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oKChidXJuIDwgNTAwICYmIGNvbnNbbWF0ZXJpYWxdIDwgMCkgPyBNYXRoLmZsb29yKGJ1cm4pLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgOiBcIuKInlwiKSArIFwiIERheXNcIikpO1xuICAgICAgICBpZiAoY29uc1ttYXRlcmlhbF0gPj0gMCkge1xuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4taW5maW5pdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMF0pIHtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4tcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSB7XG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4tZ3JlZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgbmVlZEFtdCA9IGJ1cm4gPiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0gfHwgY29uc1ttYXRlcmlhbF0gPiAwID8gMCA6IChidXJuIC0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSAqIGNvbnNbbWF0ZXJpYWxdO1xuICAgICAgICBuZWVkQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG5lZWRBbXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmVlZENvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXJuQ29sdW1uKTtcbiAgICB9XG4gICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICByZXR1cm4gbW9kdWxlcztcbn1cbmZ1bmN0aW9uIEZpbmRCdXJuU2V0dGluZ3MoYXJyYXksIG1hdGNoU3RyaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWF0Y2hTdHJpbmcgPT0gYXJyYXlbaV1bMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncykge1xuICAgIEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWluZmluaXRlXCIpKSB7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzNdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSkge1xuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1syXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKSB7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzFdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpIHtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMF0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc0J1dHRvbih0ZXh0LCB3aWR0aCwgdG9nZ2xlZCwgZikge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcbiAgICB9XG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzVGV4dCk7XG4gICAgdGV4dEJveC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCdXR0b24pO1xuICAgIGJhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGJhci5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGJhci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChiYXIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XG4gICAgICAgICAgICB0b2dnbGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZigpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQnVybi50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFNoZWV0VGFibGVfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gKyBcIi9leGVjP21vZGU9JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXJsICs9IFwiJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1syXSArIFwiJTIyXCI7XG4gICAgfVxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgZGF0YVswXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgZGF0YS5zaGlmdCgpO1xuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgZGF0YSkge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU2hlZXRUYWJsZS50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiwgWElUV2ViUmVxdWVzdCwgY3JlYXRlVGFibGUsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCwgY3JlYXRlVGV4dERpdiB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5pbXBvcnQgeyBGYWN0aW9uSGVhZGVycyB9IGZyb20gXCIuLi9HYW1lUHJvcGVydGllc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIENvbnRyYWN0c19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIFVzZXJuYW1lIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXkhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDb250cmFjdHNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY29udHJhY3QvYWxsY29udHJhY3RzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBDb250cmFjdHNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250cmFjdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250cmFjdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWxpZENvbnRyYWN0cyA9IGNvbnRyYWN0RGF0YS5maWx0ZXIoYyA9PiAhaW52YWxpZENvbnRyYWN0U3RhdHVzLmluY2x1ZGVzKGNbXCJTdGF0dXNcIl0pKTtcbiAgICAgICAgdmFsaWRDb250cmFjdHMubWFwKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnRyYWN0W1wiSXNGYWN0aW9uXCJdID0gZmFsc2U7XG4gICAgICAgICAgICBjb250cmFjdFtcIm1hdGVyaWFsQ29uZGl0aW9uc1wiXSA9IFtdO1xuICAgICAgICAgICAgbGV0IHNlbGZDb25kaXRpb25zID0gW107XG4gICAgICAgICAgICBsZXQgcGFydG5lckNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMubWFwKChjb25kaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gXCJSRVBVVEFUSU9OXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0W1wiSXNGYWN0aW9uXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiTWF0ZXJpYWxUaWNrZXJcIl0gIT09IG51bGwgJiYgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZS5pbmNsdWRlcyhjb25kaXRpb25bXCJUeXBlXCJdKSlcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0ucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25bXCJQYXJ0eVwiXSA9PT0gY29udHJhY3RbXCJQYXJ0eVwiXSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZkNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lckNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmQ29uZGl0aW9ucy5zb3J0KGNvbmRpdGlvblNvcnQpO1xuICAgICAgICAgICAgcGFydG5lckNvbmRpdGlvbnMuc29ydChjb25kaXRpb25Tb3J0KTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJzZWxmXCJdID0gc2VsZkNvbmRpdGlvbnM7XG4gICAgICAgICAgICBjb250cmFjdC5Db25kaXRpb25zW1wicGFydG5lclwiXSA9IHBhcnRuZXJDb25kaXRpb25zO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRDb250cmFjdHMuc29ydChDb250cmFjdFNvcnQpO1xuICAgICAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKHRpbGUsIFtcIkNvbnRyYWN0IElEXCIsIFwiTWF0ZXJpYWxcIiwgXCJQYXJ0bmVyJ3MgQ29uZGl0aW9uc1wiLCBcIk15IENvbmRpdGlvbnNcIl0pO1xuICAgICAgICBpZiAodmFsaWRDb250cmFjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVOb0NvbnRyYWN0c1Jvdyg0KTtcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZENvbnRyYWN0cy5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVDb250cmFjdFJvdyhjb250cmFjdCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgIH0pO1xufVxuY29uc3QgaW52YWxpZENvbnRyYWN0U3RhdHVzID0gW1xuICAgIFwiRlVMRklMTEVEXCIsXG4gICAgXCJCUkVBQ0hFRFwiLFxuICAgIFwiVEVSTUlOQVRFRFwiLFxuICAgIFwiQ0FOQ0VMTEVEXCIsXG4gICAgXCJSRUpFQ1RFRFwiXG5dO1xuZnVuY3Rpb24gY3JlYXRlQ29udHJhY3RSb3coY29udHJhY3QpIHtcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGxldCBjb250cmFjdExpbmsgPSBjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xuICAgIGNvbnN0IGNvbnRyYWN0SWRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY29udHJhY3RJZENvbHVtbi5hcHBlbmRDaGlsZChjb250cmFjdFtcIklzRmFjdGlvblwiXSA/IGZhY3Rpb25Db250cmFjdChjb250cmFjdExpbmspIDogY29udHJhY3RMaW5rKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29udHJhY3RJZENvbHVtbik7XG4gICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMTBweFwiO1xuICAgIGNvbnN0IG1hdGVyaWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRlcmlhbERpdik7XG4gICAgaWYgKGNvbnRyYWN0W1wibWF0ZXJpYWxDb25kaXRpb25zXCJdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0uZm9yRWFjaChtYXRlcmlhbENvbmRpdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEVsZW1lbnQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWxDb25kaXRpb25bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBtYXRlcmlhbENvbmRpdGlvbltcIk1hdGVyaWFsQW1vdW50XCJdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxFbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxEaXYuYXBwZW5kQ2hpbGQobWF0ZXJpYWxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XG4gICAgY29uc3QgcGFydG5lckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB2YXIgZmFjdGlvbjtcbiAgICBpZiAoY29udHJhY3RbXCJJc0ZhY3Rpb25cIl0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoRmFjdGlvbkhlYWRlcnMpLmZvckVhY2goZmFjdGlvbk5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0uaW5jbHVkZXMoZmFjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZmFjdGlvbiA9IEZhY3Rpb25IZWFkZXJzW2ZhY3Rpb25OYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghZmFjdGlvbikge1xuICAgICAgICBsZXQgcGFydG5lckxpbmsgPSBjcmVhdGVMaW5rKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0sIFwiQ08gXCIgKyBjb250cmFjdFtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSk7XG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHBhcnRuZXJMaW5rID0gY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkZBIFwiICsgZmFjdGlvbik7XG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xuICAgIH1cbiAgICBmb3IgKGxldCBjb25kaXRpb24gb2YgY29udHJhY3QuQ29uZGl0aW9uc1tcInBhcnRuZXJcIl0pXG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQoY29uZGl0aW9uU3RhdHVzKGNvbmRpdGlvbikpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwYXJ0bmVyQ29sdW1uKTtcbiAgICBjb25zdCBzZWxmQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb250cmFjdC5Db25kaXRpb25zW1wic2VsZlwiXSlcbiAgICAgICAgc2VsZkNvbHVtbi5hcHBlbmRDaGlsZChjb25kaXRpb25TdGF0dXMoY29uZGl0aW9uKSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHNlbGZDb2x1bW4pO1xuICAgIHJldHVybiByb3c7XG59XG47XG5mdW5jdGlvbiBjcmVhdGVOb0NvbnRyYWN0c1Jvdyhjb2xzcGFuKSB7XG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZXh0Q29sdW1uLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke2NvbHNwYW59YCk7XG4gICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gY29udHJhY3RzXCI7XG4gICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcbiAgICByZXR1cm4gbGluZTtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvblNvcnQoYSwgYikge1xuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uSW5kZXhcIl0gPiBiW1wiQ29uZGl0aW9uSW5kZXhcIl0gPyAxIDogLTE7XG59XG5mdW5jdGlvbiBDb250cmFjdFNvcnQoYSwgYikge1xuICAgIHJldHVybiBhW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPiBiW1wiRHVlRGF0ZUVwb2NoTXNcIl0gPyAxIDogLTE7XG59XG5mdW5jdGlvbiBmYWN0aW9uQ29udHJhY3QobGluaykge1xuICAgIGxldCBjb25kaXRpb25EaXYgPSBjcmVhdGVUZXh0RGl2KFwiXCIpO1xuICAgIGxldCBtYXJrZXIgPSBjcmVhdGVUZXh0U3BhbihcIiDimIVcIik7XG4gICAgbWFya2VyLnN0eWxlLmNvbG9yID0gVGV4dENvbG9ycy5ZZWxsb3c7XG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBtYXJrZXIuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgbWFya2VyLnRpdGxlID0gXCJGYWN0aW9uIENvbnRyYWN0XCI7XG4gICAgbGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkRpdjtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvblN0YXR1cyhjb25kaXRpb24pIHtcbiAgICBsZXQgY29uZGl0aW9uRGl2ID0gY3JlYXRlVGV4dERpdihcIlwiKTtcbiAgICBsZXQgbWFya2VyID0gY3JlYXRlVGV4dFNwYW4oY29uZGl0aW9uW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcbiAgICBtYXJrZXIuc3R5bGUuY29sb3IgPSBjb25kaXRpb25bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XG4gICAgbWFya2VyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBsZXQgdGV4dCA9IGNyZWF0ZVRleHRTcGFuKGAgJHtmcmllbmRseUNvbmRpdGlvblRleHRbY29uZGl0aW9uLlR5cGVdfWApO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gY29uZGl0aW9uRGl2O1xufVxuY29uc3QgZnJpZW5kbHlDb25kaXRpb25UZXh0ID0ge1xuICAgIENPTUVYX1BVUkNIQVNFX1BJQ0tVUDogXCJNYXRlcmlhbCBQaWNrdXBcIixcbiAgICBERUxJVkVSWTogXCJEZWxpdmVyeVwiLFxuICAgIERFTElWRVJZX1NISVBNRU5UOiBcIkRlbGl2ZXIgU2hpcG1lbnRcIixcbiAgICBFWFBMT1JBVElPTjogXCJFeHBsb3JhdGlvblwiLFxuICAgIFJFUFVUQVRJT046IFwiUmVwdXRhdGlvblwiLFxuICAgIFBBWU1FTlQ6IFwiUGF5bWVudFwiLFxuICAgIFBJQ0tVUF9TSElQTUVOVDogXCJQaWNrdXAgU2hpcG1lbnRcIixcbiAgICBQUk9WSVNJT05fU0hJUE1FTlQ6IFwiUHJvdmlzaW9uXCIsXG4gICAgUFJPVklTSU9OOiBcIlByb3Zpc2lvblwiXG59O1xuY29uc3QgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZSA9IFtcbiAgICBcIkRFTElWRVJZXCIsXG4gICAgXCJERUxJVkVSWV9TSElQTUVOVFwiLFxuICAgIFwiUFJPVklTSU9OX1NISVBNRU5UXCIsXG4gICAgXCJDT01FWF9QVVJDSEFTRV9QSUNLVVBcIlxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Db250cmFjdHMudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGNvbnN0IHBydW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xuICAgIHBydW4ud2lkdGggPSBcIjEwMCVcIjtcbiAgICBwcnVuLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBQcm9zcGVyaXR5X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3Byb3NwZXJpdHktcHJ1bi5uZXRsaWZ5LmFwcC9cIjtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMykge1xuICAgICAgICB1cmwgKz0gXCI/ZnJvbT1cIiArIHBhcmFtZXRlcnNbMV0gKyBcIiZ0bz1cIiArIHBhcmFtZXRlcnNbMl07XG4gICAgfVxuICAgIGNvbnN0IHByb3NwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBwcm9zcC5zcmMgPSB1cmw7XG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcbiAgICBwcm9zcC5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBwcm9zcC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xuICAgIHJldHVybjtcbn1cbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xuICAgIFwiVUZPXCI6IFtcIjg1NTQ4ODMwOTgwMjE3MjQ2OVwiLCBcIjg1NTQ4OTcxMTYzNTQzMTQ3NVwiXSxcbiAgICBcIkZJT0NcIjogW1wiODA3OTkyNjQwMjQ3MzAwMTE2XCIsIFwiODA4NDUxNTEyMzUxMTk1MTY2XCJdLFxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcbiAgICBcIlBDVFwiOiBbXCI2Njc1NTE0MzM1MDMwMTQ5MjRcIiwgXCI2Njc1NTE0MzM1MDMwMTQ5MjdcIl1cbn07XG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbMV0gKz0gXCJfXCIgKyBwYXJhbWV0ZXJzW2ldO1xuICAgIH1cbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgc2hlZXQuc3JjID0gXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9lZGl0P3VzcD1zaGFyaW5nXCI7XG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGVldC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcbiAgICB2YXIgc2VydmVySUQ7XG4gICAgdmFyIGNoYW5uZWxJRDtcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xuICAgICAgICBpZiAoRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xuICAgICAgICAgICAgY2hhbm5lbElEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBkaXNjb3JkLnNyYyA9IFwiaHR0cHM6Ly9lLndpZGdldGJvdC5pby9jaGFubmVscy9cIiArIHNlcnZlcklEICsgXCIvXCIgKyBjaGFubmVsSUQ7XG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgZGlzY29yZC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMHB4XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcbiAgICByZXR1cm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvV2ViLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3BhbiwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVMaW5rLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBGSU9JbnZfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgY29uc3QgYXBpa2V5ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfZ2V0QWxsU3RvcmFnZXMsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2F1dGgvZ3JvdXAvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbMl0gKz0gXCIgXCIgKyBwYXJhbWV0ZXJzW2ldO1xuICAgICAgICB9XG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3N0b3JhZ2UvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvXCIgKyBwYXJhbWV0ZXJzWzJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIEZJT0ludl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW52ZW50b3J5RGF0YTtcbiAgICB0cnkge1xuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWludmVudG9yeURhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XG4gICAgY29uc3Qgdm9sdW1lVG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lQ2FwYWNpdHlcIl07XG4gICAgY29uc3Qgd2VpZ2h0VXNlZCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRMb2FkXCJdO1xuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbnYtaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcbiAgICBib2R5LmlkID0gXCJib2R5XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMl0sIHRhZykpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIGNvbnN0IHVzZXJFbGVtID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSwgdGFnKTtcbiAgICB1c2VyRWxlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcbiAgICBjb25zdCB2b2x1bWVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2b2x1bWVMaW5lLmlkID0gXCJ2b2x1bWUtbGluZVwiO1xuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xuICAgIHZvbHVtZUxpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVm9sdW1lIFwiLCB0YWcpKTtcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XG4gICAgdm9sdW1lQmFyLmlkID0gXCJ2b2x1bWUtYmFyXCI7XG4gICAgdm9sdW1lQmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICB2b2x1bWVCYXIubWF4ID0gMTtcbiAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xuICAgIHZvbHVtZUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4odm9sdW1lVXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgdm9sdW1lVG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgbcKzXCIsIHRhZykpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRMaW5lLmlkID0gXCJ3ZWlnaHQtbGluZVwiO1xuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcbiAgICB3ZWlnaHRMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiV2VpZ2h0IFwiLCB0YWcpKTtcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcbiAgICB3ZWlnaHRCYXIudmFsdWUgPSB3ZWlnaHRVc2VkIC8gd2VpZ2h0VG90YWw7XG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQod2VpZ2h0TGluZSk7XG4gICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xuICAgICAgICBjb25zdCBtYXQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQoaXRlbVtcIk1hdGVyaWFsVGlja2VyXCJdLCB0YWcsIGl0ZW1bXCJNYXRlcmlhbEFtb3VudFwiXSwgdHJ1ZSk7XG4gICAgICAgIGlmIChtYXQpIHtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWF0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBGSU9JbnZfZ2V0QWxsU3RvcmFnZXModGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICB2YXIgdXNlckpTT047XG4gICAgdHJ5IHtcbiAgICAgICAgdXNlckpTT04gPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcbiAgICB9XG4gICAgdmFyIHVzZXJuYW1lcyA9IFtdO1xuICAgIHVzZXJKU09OW1wiR3JvdXBVc2Vyc1wiXS5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICB1c2VybmFtZXMucHVzaCh1c2VyW1wiR3JvdXBVc2VyTmFtZVwiXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2FsbERpc3BsYXksIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2Zpb3dlYi9ncm91cGh1YlwiLCBcIlBPU1RcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBwYXJhbWV0ZXJzWzJdXSwgSlNPTi5zdHJpbmdpZnkodXNlcm5hbWVzKSk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gRklPSW52X2FsbERpc3BsYXkodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcbiAgICB2YXIgZ3JvdXBEYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgICAgZ3JvdXBEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEgZnJvbSBGSU8hXCI7XG4gICAgfVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1szXSArIFwiIEludmVudG9yaWVzXCIpKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBjb25zdCBib2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHlEaXYpO1xuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XG4gICAgaWYgKGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXS5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwbGF5ZXJbXCJVc2VyTmFtZVwiXSkpO1xuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIHBsYXllcltcIkxvY2F0aW9uc1wiXS5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLCBcIlhJVCBJTlZfXCIgKyBwbGF5ZXJbXCJVc2VyTmFtZVwiXSArIFwiX1wiICsgbG9jYXRpb25bXCJMb2NhdGlvbk5hbWVcIl0ucmVwbGFjZSgvIC8sIFwiX1wiKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9keURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcGFyYW1ldGVycy5wb3AoKTtcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xuICAgIGlmICghYVtcIk1hdGVyaWFsVGlja2VyXCJdIHx8ICFiW1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgIU1hdGVyaWFsTmFtZXNbYVtcIk1hdGVyaWFsVGlja2VyXCJdXSB8fCAhTWF0ZXJpYWxOYW1lc1tiW1wiTWF0ZXJpYWxUaWNrZXJcIl1dKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1thW1wiTWF0ZXJpYWxUaWNrZXJcIl1dWzFdID09IE1hdGVyaWFsTmFtZXNbYltcIk1hdGVyaWFsVGlja2VyXCJdXVsxXSkge1xuICAgICAgICByZXR1cm4gYVtcIk1hdGVyaWFsVGlja2VyXCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsVGlja2VyXCJdKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYVtcIk1hdGVyaWFsVGlja2VyXCJdXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbYltcIk1hdGVyaWFsVGlja2VyXCJdXVsxXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvSW52ZW50b3J5LnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBnZXRMb2NhbFN0b3JhZ2UsIHNldFNldHRpbmdzLCBjcmVhdGVMaW5rLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyBDSEVDS19JTkRJQ0FUT1IgfSBmcm9tIFwiLi9DaGVja2xpc3RzXCI7XG5leHBvcnQgZnVuY3Rpb24gTm90ZXModGlsZSwgcGFyYW1ldGVycykge1xuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBnZW5lcmF0ZU5vdGVzVGFibGUsIHRpbGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm90ZU5hbWUgPSAocGFyYW1ldGVycy5zbGljZSgxKSkuam9pbihcIl9cIik7XG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IG5vdGVOYW1lO1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgICAgICBjb25zdCB0ZXh0Ym94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGV4dGJveFdyYXBwZXIpO1xuICAgICAgICBjb25zdCB0ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0ZXh0Ym94V3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0Ym94KTtcbiAgICAgICAgdGV4dGJveFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5vdGVzLXdyYXBwZXJcIik7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZGlzcFN0b3JlZE5vdGUsIFtub3RlTmFtZSwgdGV4dGJveF0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBnZW5lcmF0ZU5vdGVzVGFibGUocmVzdWx0LCB0aWxlKSB7XG4gICAgaWYgKCF0aWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkxlbmd0aFwiLCBcIkRlbGV0ZVwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUctTm90ZXNcIl0pKTtcbiAgICB2YXIgYW55Tm90ZXMgPSBmYWxzZTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgNykgPT0gQ0hFQ0tfSU5ESUNBVE9SKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYW55Tm90ZXMgPSB0cnVlO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGxlbmd0aENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZW5ndGhDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZSwgXCJYSVQgTk9URVNfXCIgKyBuYW1lKSk7XG4gICAgICAgIGxlbmd0aENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25hbWVdLmxlbmd0aC50b0xvY2FsZVN0cmluZygpICsgXCIgQ2hhcmFjdGVyXCIgKyAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGggPT0gMSA/IFwiXCIgOiBcInNcIikpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBkZWxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZU5vdGUsIFtuYW1lLCBcIlwiXSk7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGlmICghYW55Tm90ZXMpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDM7XG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIE5vdGVzXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlVGhlblN0b3JlTm90ZShyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3RlTmFtZSA9IHBhcmFtc1swXTtcbiAgICBjb25zdCBub3RlVGV4dCA9IHBhcmFtc1sxXTtcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xuICAgIH1cbiAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25vdGVOYW1lXSA9IG5vdGVUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogbm90ZVRleHQ7XG4gICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBkaXNwU3RvcmVkTm90ZShyZXN1bHQsIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0gfHwgIXBhcmFtc1sxXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdGVOYW1lID0gcGFyYW1zWzBdO1xuICAgIGNvbnN0IHRleHRib3ggPSBwYXJhbXNbMV07XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTm90ZXNcIl0gPSB7fTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbm90ZU5hbWVdKSB7XG4gICAgICAgIHRleHRib3gudmFsdWUgPSByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25vdGVOYW1lXTtcbiAgICB9XG4gICAgdGV4dGJveC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZU5vdGUsIFtub3RlTmFtZSwgdGV4dGJveC52YWx1ZSB8fCBcIlwiXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL05vdGVzLnRzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3Bhbiwgc2V0U2V0dGluZ3MsIG1ha2VQb3B1cFNwYWNlciwgY3JlYXRlUG9wdXBJbnB1dFJvdywgY3JlYXRlUG9wdXBDaGVja2JveFJvdywgZ2V0VmFsdWVPZlBvcHVwUm93LCBnZXRDaGVja09mUG9wdXBSb3csIGNyZWF0ZVNtYWxsQnV0dG9uIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gU29ydCh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmICghcGFyYW1ldGVyc1sxXSkge1xuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQWRkIGEgcGxhbmV0IG5hbWUgdG8gdGhlIGVuZCBvZiB0aGUgY29tbWFuZCFcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXSkge1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdID0gW107XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIkFiYnJldmlhdGlvblwiLCBcIkNhdGVnb3JpZXNcIiwgXCJNb2RpZnlcIl0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgTmV3XCI7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjcmVhdGVBZGRJbnRlcmZhY2UodGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzKTtcbiAgICB9KTtcbiAgICB2YXIgaXNTb3J0aW5nID0gZmFsc2U7XG4gICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5mb3JFYWNoKHNldHRpbmdzID0+IHtcbiAgICAgICAgaWYgKCFzZXR0aW5nc1swXSB8fCAhc2V0dGluZ3NbMV0gfHwgIXNldHRpbmdzWzJdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzWzFdLnRvVXBwZXJDYXNlKCkgIT0gcGFyYW1ldGVyc1sxXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNTb3J0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zdCBjYXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IG1vZGlmeUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2F0Q29sdW1uKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG1vZGlmeUNvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihzZXR0aW5nc1swXSkpO1xuICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IFwiXCI7XG4gICAgICAgIHNldHRpbmdzWzJdLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYXRlZ29yeVswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGVnb3JpZXMgKz0gY2F0ZWdvcnlbMF0gKyBcIiwgXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zbGljZSgwLCAtMik7XG4gICAgICAgIGNhdENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihjYXRlZ29yaWVzKSk7XG4gICAgICAgIG1vZGlmeUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVTbWFsbEJ1dHRvbihcImVkaXRcIiwgY3JlYXRlQWRkSW50ZXJmYWNlLCBbdGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzLCBzZXR0aW5nc10pKTtcbiAgICAgICAgbW9kaWZ5Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVNtYWxsQnV0dG9uKFwiZGVsZXRlXCIsIGZ1bmN0aW9uIChyZXN1bHQsIHJvdywgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdW2ldID09IHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtyZXN1bHQsIHJvdywgc2V0dGluZ3NdKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBpZiAoIWlzU29ydGluZykge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMztcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gU29ydGluZyBPcHRpb25zXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFkZEludGVyZmFjZSh0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMsIHNldHRpbmdzID0gW10pIHtcbiAgICBjb25zdCBwcmVmaWxsZWQgPSBzZXR0aW5ncy5sZW5ndGggIT0gMDtcbiAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGFwRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuT3ZlcmxhcHBpbmdEaXYpO1xuICAgIGNvbnN0IGdyZXlTdHJpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcbiAgICBvdmVybGFwRGl2LmFwcGVuZENoaWxkKGdyZXlTdHJpcGVzKTtcbiAgICB0aWxlLmluc2VydEJlZm9yZShvdmVybGFwRGl2LCB0aWxlLmZpcnN0Q2hpbGQpO1xuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG4gICAgY29uc3QgYWRkSW50ZXJmYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkSW50ZXJmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNlbnRlckludGVyZmFjZSk7XG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XG4gICAgY29uc3QgYWRkSW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZChcIk5MT3JIN2hGNWZiS0llc3FXM3VTa0E9PVwiKTtcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XG4gICAgY29uc3QgYWRkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhZGRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTb3J0aW5nIE9wdGlvbnMgRWRpdG9yXCIpKTtcbiAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xuICAgIGFkZEhlYWRlci5zdHlsZS5tYXJnaW4gPSBcIjAuNWVtIDAgMC41ZW1cIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQWJicmV2aWF0aW9uXCIsIHByZWZpbGxlZCA/IHNldHRpbmdzWzBdIDogXCJcIiwgXCJUaGUgYWJicmV2aWF0aW9uIHNob3dpbmcgYXQgdGhlIHRvcCBvZiB0aGUgaW52ZW50b3J5IChBQkMsIENBVCwgZXRjLilcIikpO1xuICAgIGlmIChwcmVmaWxsZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXR0aW5nc1syXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgXCIgKyAoaSArIDEpICsgXCIgTmFtZVwiLCBwcmVmaWxsZWQgPyBzZXR0aW5nc1syXVtpXVswXSA6IFwiXCIsIGkgPT0gMCA/IFwiVGhlIG5hbWUgb2YgdGhlIGZpcnN0IGNhdGVnb3J5IGZvciBtYXRlcmlhbHNcIiA6IFwiXCIpKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgKGkgKyAxKSArIFwiIE1BVHNcIiwgcHJlZmlsbGVkID8gc2V0dGluZ3NbMl1baV1bMV0uam9pbihcIiwgXCIpIDogXCJcIiwgaSA9PSAwID8gXCJBIGxpc3Qgb2YgbWF0ZXJpYWxzIGluIHRoZSBmaXJzdCBjYXRlZ29yeS4gU2VwYXJhdGUgdGlja2VycyBieSBhIGNvbW1hLiAoUkFULCBEVywgZXRjLilcIiA6IFwiXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgMSBOYW1lXCIsIFwiXCIsIFwiVGhlIG5hbWUgb2YgdGhlIGZpcnN0IGNhdGVnb3J5IGZvciBtYXRlcmlhbHMuXCIpKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgMSBNQVRzXCIsIFwiXCIsIFwiQSBsaXN0IG9mIG1hdGVyaWFscyBpbiB0aGUgZmlyc3QgY2F0ZWdvcnkuIFNlcGFyYXRlIHRpY2tlcnMgYnkgYSBjb21tYS4gKFJBVCwgRFcsIGV0Yy4pXCIpKTtcbiAgICB9XG4gICAgY29uc3QgYWRkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRSb3cpO1xuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgQ2F0ZWdvcnlcIjtcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xuICAgIGFkZFJvdy5hcHBlbmRDaGlsZChhZGRMYWJlbCk7XG4gICAgY29uc3QgYWRkSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZElucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XG4gICAgYWRkUm93LmFwcGVuZENoaWxkKGFkZElucHV0RGl2KTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIENBVEVHT1JZXCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBhZGRJbnB1dERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYXROdW1iZXIgPSAoZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAzKSAvIDI7XG4gICAgICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSBcIiArIGNhdE51bWJlciArIFwiIE5hbWVcIiksIGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSA0XSk7XG4gICAgICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJDYXRlZ29yeSBcIiArIGNhdE51bWJlciArIFwiIE1BVHNcIiksIGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSA0XSk7XG4gICAgfSk7XG4gICAgY29uc3QgYnVyblJvdyA9IGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3coXCJCdXJuIFNvcnRpbmdcIiwgc2V0dGluZ3NbM10gfHwgZmFsc2UsIFwiQWRkIGJ1cm4gc29ydGluZyBhcyBhIHNlY29uZGFyeSBzb3J0aW5nIG1ldGhvZC4gQnVybiBjYXRlZ29yaWVzIHdpbGwgc2hvdyB1bmRlciB0aGUgY2F0ZWdvcmllcyBkZWZpbmVkIGFib3ZlLlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1cm5Sb3cpO1xuICAgIGNvbnN0IHplcm9Sb3cgPSBjcmVhdGVQb3B1cENoZWNrYm94Um93KFwiU2hvdyBaZXJvc1wiLCBzZXR0aW5nc1s0XSB8fCBmYWxzZSwgXCJTaG93IGl0ZW0gaWNvbnMgdGhhdCBoYXZlIHplcm8gcXVhbnRpdHkuXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoemVyb1Jvdyk7XG4gICAgY29uc3Qgc2F2ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F2ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVSb3cpO1xuICAgIGNvbnN0IHNhdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzYXZlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNNRFwiO1xuICAgIHNhdmVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUxhYmVsKTtcbiAgICBjb25zdCBzYXZlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUlucHV0RGl2KTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xuICAgIHNhdmVJbnB1dERpdi5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1BYmJyZXZpYXRpb24gPSBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3Qgc29ydGluZ0luZm8gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDQ7IGkgKz0gMikge1xuICAgICAgICAgICAgaWYgKCFmb3JtLmNoaWxkcmVuW2ldIHx8ICFmb3JtLmNoaWxkcmVuW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSA9PSBcIlwiIHx8IGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2kgKyAxXSkgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydGluZ0luZm8ucHVzaChbZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baV0pLCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pLnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZChvdmVybGFwRGl2KTtcbiAgICAgICAgaWYgKCFpdGVtQWJicmV2aWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpbGxlZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl1baV0gPT0gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXVtpXSA9IFtpdGVtQWJicmV2aWF0aW9uLCBwYXJhbWV0ZXJzWzFdLCBzb3J0aW5nSW5mbywgZ2V0Q2hlY2tPZlBvcHVwUm93KGJ1cm5Sb3cpLCBnZXRDaGVja09mUG9wdXBSb3coemVyb1JvdyldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLnB1c2goW2l0ZW1BYmJyZXZpYXRpb24sIHBhcmFtZXRlcnNbMV0sIHNvcnRpbmdJbmZvLCBnZXRDaGVja09mUG9wdXBSb3coYnVyblJvdyksIGdldENoZWNrT2ZQb3B1cFJvdyh6ZXJvUm93KV0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgICAgIFNvcnQodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU29ydC50c1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgZ2V0TG9jYWxTdG9yYWdlLCBzZXRTZXR0aW5ncywgY3JlYXRlTGluaywgY3JlYXRlVGV4dFNwYW4sIG1ha2VQb3B1cFNwYWNlciwgY3JlYXRlUG9wdXBJbnB1dFJvdywgZ2V0VmFsdWVPZlBvcHVwUm93IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gQ29tbWFuZExpc3RzKHRpbGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTGlzdHNcIiwgZ2VuZXJhdGVMaXN0VGFibGUsIHRpbGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1MaXN0c1wiLCBkaXNwU3RvcmVkTGlzdCwgW3RpbGUsIHBhcmFtZXRlcnNdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0VGFibGUocmVzdWx0LCB0aWxlKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkxlbmd0aFwiLCBcIkRlbGV0ZVwiXSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUctTGlzdHNcIl0pKTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbnN0IGxlbmd0aENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZW5ndGhDb2x1bW4pO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZSwgXCJYSVQgTElTVF9cIiArIG5hbWUpKTtcbiAgICAgICAgbGVuZ3RoQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbmFtZV0ubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCkpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBkZWxldGVDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLUxpc3RzXCIsIHVwZGF0ZVRoZW5TdG9yZUxpc3QsIFtuYW1lLCBcIlwiXSk7XG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAobmFtZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDM7XG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIENvbW1hbmQgTGlzdHMuXCI7XG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRoZW5TdG9yZUxpc3QocmVzdWx0LCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zWzBdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm90ZU5hbWUgPSBwYXJhbXNbMF07XG4gICAgY29uc3Qgbm90ZVRleHQgPSBwYXJhbXNbMV07XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl0gPSB7fTtcbiAgICB9XG4gICAgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtub3RlTmFtZV0gPSBub3RlVGV4dC5sZW5ndGggPT0gMCA/IHVuZGVmaW5lZCA6IG5vdGVUZXh0O1xuICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gZGlzcFN0b3JlZExpc3QocmVzdWx0LCBwYXJhbSkge1xuICAgIGNvbnN0IHRpbGUgPSBwYXJhbVswXTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1bMV07XG4gICAgY29uc3QgbGlzdE5hbWUgPSAocGFyYW1ldGVycy5zbGljZSgxKSkuam9pbihcIl9cIik7XG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiXCJdKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBpZiAocmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0gJiYgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXS5mb3JFYWNoKGxpbmtJbmZvID0+IHtcbiAgICAgICAgICAgIGlmICghbGlua0luZm9bMF0gfHwgIWxpbmtJbmZvWzFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgdGV4dENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxpbmtJbmZvWzBdLCBsaW5rSW5mb1sxXSkpO1xuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDE7XG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIENvbW1hbmRzLlwiO1xuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IFwiNXB4XCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3JlYXRlRWRpdEludGVyZmFjZSh0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMsIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdIHx8IFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlRWRpdEludGVyZmFjZSh0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMsIHNldHRpbmdzID0gW10pIHtcbiAgICBjb25zdCBwcmVmaWxsZWQgPSBzZXR0aW5ncy5sZW5ndGggIT0gMDtcbiAgICBjb25zdCBsaXN0TmFtZSA9IChwYXJhbWV0ZXJzLnNsaWNlKDEpKS5qb2luKFwiX1wiKTtcbiAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGFwRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuT3ZlcmxhcHBpbmdEaXYpO1xuICAgIGNvbnN0IGdyZXlTdHJpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcbiAgICBvdmVybGFwRGl2LmFwcGVuZENoaWxkKGdyZXlTdHJpcGVzKTtcbiAgICB0aWxlLmluc2VydEJlZm9yZShvdmVybGFwRGl2LCB0aWxlLmZpcnN0Q2hpbGQpO1xuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XG4gICAgY29uc3QgYWRkSW50ZXJmYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkSW50ZXJmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNlbnRlckludGVyZmFjZSk7XG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XG4gICAgY29uc3QgYWRkSW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZChcIk5MT3JIN2hGNWZiS0llc3FXM3VTa0E9PVwiKTtcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XG4gICAgY29uc3QgYWRkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhZGRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb21tYW5kIExpc3QgRWRpdG9yXCIpKTtcbiAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xuICAgIGFkZEhlYWRlci5zdHlsZS5tYXJnaW4gPSBcIjAuNWVtIDAgMC41ZW1cIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgaWYgKHByZWZpbGxlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldHRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIFwiICsgKGkgKyAxKSArIFwiIExhYmVsXCIsIHNldHRpbmdzW2ldWzBdLCBpID09IDAgPyBcIlRoZSBsYWJlbCBvZiB0aGUgZmlyc3QgbGluay5cIiA6IFwiXCIpKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyAoaSArIDEpICsgXCIgQ29tbWFuZFwiLCBzZXR0aW5nc1tpXVsxXSwgaSA9PSAwID8gXCJUaGUgY29tbWFuZCBvcGVuZWQgYnkgdGhlIGZpcnN0IGxpbmsgKGV4OiBDWCBOQzEpXCIgOiBcIlwiKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgMSBMYWJlbFwiLCBcIlwiLCBcIlRoZSBsYWJlbCBvZiB0aGUgZmlyc3QgbGluay5cIikpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIDEgQ29tbWFuZFwiLCBcIlwiLCBcIlRoZSBjb21tYW5kIG9wZW5lZCBieSB0aGUgZmlyc3QgbGluayAoZXg6IENYIE5DMSlcIikpO1xuICAgIH1cbiAgICBjb25zdCBhZGRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFJvdyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBMaW5rXCI7XG4gICAgYWRkTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuICAgIGNvbnN0IGFkZElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xuICAgIGFkZFJvdy5hcHBlbmRDaGlsZChhZGRJbnB1dERpdik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBMSU5LXCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBhZGRJbnB1dERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYXROdW1iZXIgPSAoZm9ybS5jaGlsZHJlbi5sZW5ndGgpIC8gMjtcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyBjYXROdW1iZXIgKyBcIiBMYWJlbFwiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDJdKTtcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyBjYXROdW1iZXIgKyBcIiBDb21tYW5kXCIpLCBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMl0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHNhdmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcbiAgICBjb25zdCBzYXZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc2F2ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDTURcIjtcbiAgICBzYXZlTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVMYWJlbCk7XG4gICAgY29uc3Qgc2F2ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXZlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVJbnB1dERpdik7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICBzYXZlSW5wdXREaXYuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMjsgaSArPSAyKSB7XG4gICAgICAgICAgICBpZiAoIWZvcm0uY2hpbGRyZW5baV0gfHwgIWZvcm0uY2hpbGRyZW5baSArIDFdKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baV0pID09IFwiXCIgfHwgZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baSArIDFdKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21tYW5kSW5mby5wdXNoKFtnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpXSksIGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2kgKyAxXSldKTtcbiAgICAgICAgfVxuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKG92ZXJsYXBEaXYpO1xuICAgICAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXSA9IGNvbW1hbmRJbmZvO1xuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICBDb21tYW5kTGlzdHModGlsZSwgcGFyYW1ldGVycyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlUG9wdXBTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xuICAgIHJldHVybjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Db21tYW5kTGlzdHMudHNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW9yZGVyLWV0YVwiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5iZWF1dGlmeU9yZGVycygpO1xuICAgIH1cbiAgICBiZWF1dGlmeU9yZGVycygpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZFNsb3RzID0gQXJyYXkuZnJvbShxdWV1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICB2YXIgaW5RdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gMDtcbiAgICAgICAgICAgIHByb2RTbG90cy5mb3JFYWNoKHByb2RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluVGltZSA9IGxpbmVUaW1lc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcyA9IGxpbmVUaW1lcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAtIG1pblRpbWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnB1c2goZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZHVyYXRpb24gKyB0aW1lRWxhcHNlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbiArIHRpbWVFbGFwc2VkKX0pYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24ocHJvZEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uKX0pYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuZXhwb3J0IGNsYXNzIENvbnN1bWFibGVUaW1lcnMge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBidXJuLCB0aHJlc2hvbGRzKSB7XG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy50aHJlc2hvbGRzID0gdGhyZXNob2xkcztcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiV0ZcIik7XG4gICAgICAgIGlmICghYnVmZmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLCB0aGlzLnRocmVzaG9sZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgYnVybiwgdGhyZXNob2xkcykge1xuICAgIGlmIChidWZmZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItbG9hZGVkXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Xb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlKTtcbiAgICBpZiAoIW5hbWVFbGVtIHx8ICFuYW1lRWxlbS50ZXh0Q29udGVudClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG5hbWUgPSBwYXJzZUJhc2VOYW1lKG5hbWVFbGVtLnRleHRDb250ZW50KTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGhlYWQgPiB0clwiKSk7XG4gICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzJdO1xuICAgICAgICBjb25zdCBidXJuSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzNdO1xuICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcbiAgICAgICAgaWYgKGJ1cm5IZWFkZXIuY2hpbGRyZW4gIT0gdW5kZWZpbmVkICYmIGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidXJuSGVhZGVyLnJlbW92ZUNoaWxkKGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG4gICAgICAgIGJ1cm5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkJ1cm5cIjtcbiAgICB9KTtcbiAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQobmFtZSwgYnVybik7XG4gICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XG4gICAgICAgIGlmICh0YXJnZXRSb3cuY2hpbGRFbGVtZW50Q291bnQgPCA1KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0RGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlbls0XTtcbiAgICAgICAgY29uc3QgdG90YWxEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzNdO1xuICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XG4gICAgICAgICAgICB2YXIgaW52ZW50b3J5QW1vdW50ID0gZmluZEludmVudG9yeUFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xuICAgICAgICAgICAgdmFyIGJ1cm5BbW91bnQgPSBmaW5kQnVybkFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xuICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xuICAgICAgICAgICAgaWYgKGJ1cm5BbW91bnQgIT0gMCkge1xuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gTWF0aC5mbG9vcihpbnZlbnRvcnlBbW91bnQgLyBidXJuQW1vdW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1swXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi15ZWxsb3dcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWdyZWVuXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdC50b0ZpeGVkKDApO1xuICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5c1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaXJzdENoaWxkID0gb3V0cHV0RGF0YS5maXJzdENoaWxkO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHB1dERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXREYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGRheXNMZWZ0KSk7XG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdG90YWxEYXRhLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdG90YWxEYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGJ1cm5BbW91bnQgPT0gMCA/IFwiXCIgOiBidXJuQW1vdW50LnRvRml4ZWQoMikpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1ZmZlci5jbGFzc0xpc3QuYWRkKFwicGItbG9hZGVkXCIpO1xuICAgIHJldHVybjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnN1bWFibGVUaW1lcnMudHNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgRmxlZXRFVEFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWZsdC1ldGFcIjtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiRkxUXCIpO1xuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bN107XG4gICAgICAgICAgICAgICAgaWYgKGV0YURhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZUR1cmF0aW9uKGV0YURhdGEudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxlZXRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXRlcmlhbHMsIEN1cnJlbmN5U3ltYm9scyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgUG9zdExNIHtcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItcG9zdC1sbS1wcmljZVwiO1xuICAgICAgICB0aGlzLnByaWNlcyA9IHByaWNlcztcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwcy5mb3JFYWNoKChmLCBpKSA9PiB7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhbnVwc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Qb3N0Rm9ybSkpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJTdGF0aWNJbnB1dF9fc3RhdGljX19fVnBuMXUwbiBmb3Jtc19fc3RhdGljX19fYTRiaURpNFwiKSk7XG4gICAgICAgICAgICB2YXIgc2hpcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW0gb2YgdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRleHRDb250ZW50ID09IFwiU0hJUFBJTkdcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbW1vZGl0eSA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDb21tb2RpdHknXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdBbW91bnQnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFByaWNlSW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nVG90YWwgcHJpY2UnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0N1cnJlbmN5J11dLy9zZWxlY3RcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcbiAgICAgICAgICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IGNyZWF0ZVRleHRTcGFuKFwiLS1cIiwgdGhpcy50YWcpO1xuICAgICAgICAgICAgaWYgKHNoaXBwaW5nICYmIGNvbW1vZGl0eS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0SW5mbyA9IE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0SW5mbyA9PSB1bmRlZmluZWQgfHwgbWF0SW5mbyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdCA9IG1hdEluZm9bMV0gPj0gbWF0SW5mb1syXSA/IFwidFwiIDogXCJtwrNcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0dm9sdW1lID0gTWF0aC5tYXgobWF0SW5mb1sxXSwgbWF0SW5mb1syXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih3ZWlnaHR2b2x1bWUpIHx8IGlzTmFOKHRvdGFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIi0tIHQgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgXCItLSAvIHRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgXCIgKyB1bml0ICsgXCIgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIC8gXCIgKyB1bml0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJpY2VzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1vZGl0eS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlID0gdGhpcy5wcmljZXNbY29tbW9kaXR5LnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCArIFwiIFwiID09IFwiTmFOIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiIHwgXCIgKyAocHJpY2UgKiBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIFRvdGFsIENvcnBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiICsgKHByaWNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qb3N0TE0udHNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaGlwcGluZy1hZHNcIjtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKD86U0hJUFBJTkcpXFxzKFtcXGQsLl0rKXRcXHNcXC9cXHMoW1xcZCwuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSBtYXRjaGVzWzNdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMl0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgICAgIHZhciB1bml0O1xuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcbiAgICAgICAgICAgICAgICBpZiAodG9ubmFnZSA+IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICd0JztcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSAodG90YWxDZW50cyAvIGNvdW50IC8gMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfS8ke3VuaXR9KWAsIHRoaXMudGFnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NoaXBwaW5nQWRzLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24gfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgUXVldWVMb2FkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XG4gICAgfVxuICAgIGdldEV0YUZyb21Sb3cocm93KSB7XG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XG4gICAgICAgIGlmIChldGFDZWxsKSB7XG4gICAgICAgICAgICBjb25zdCBldGFTcGFuID0gZXRhQ2VsbC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXRhID0gcGFyc2VEdXJhdGlvbihldGFTcGFuLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjYWxjdWxhdGVRdWV1ZUxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWVUYWJsZSkpO1xuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGJvZHk6bnRoLW9mLXR5cGUoMikgPiB0clwiKSk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyBuO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IChldGEgLyB0b3RhbFRpbWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlVGV4dFNwYW4oYCAke3BlcmNlbnR9JWAsIHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW5vdHNcIjtcbiAgICB9XG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTm90aWZpY2F0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCAmJiBlbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIGZvdW5kVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgU2VhcmNoZXJzLmZvckVhY2goc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoc2VhcmNoWzBdKSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi50ZXh0Q29udGVudCA9IHNlYXJjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uc3R5bGUuY29sb3IgPSBzZWFyY2hbMl07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKHR5cGVTcGFuLCBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RUZXh0ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdFRleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL0NoYW1iZXIgb2YgR2xvYmFsIENvbW1lcmNlLywgXCJDT0dDXCIpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2R1Y2VkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvYXQgeW91ciBiYXNlIC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL09uZSAvLCBcIjEgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBoYXZlIGJlZW4vLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdW5pdFtzXT8gb2YvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvIChbQS16IC1dKykgcHJvZHVjZWQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYWRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goL3lvdXIgKFtBLXogLV0rKSBvcmRlci8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkZXIgZmlsbGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIENvbW1vZGl0eSBFeGNoYW5nZS8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC8oW0EteiAtXSspIG9yZGVyLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhY2NlcHRlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB0aGUvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gbG9jYWwgbWFya2V0LywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250cmFjdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL1lvdXIgcGFydG5lciAvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFycml2ZWQgYXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9pdHMgZGVzdGluYXRpb24gLywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2djXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gYSBuZXcgZWNvbm9taWMgcHJvZ3JhbS8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBBZHZlcnRpc2luZyBDYW1wYWlnbjovLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBub3RUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5jb25zdCBTZWFyY2hlcnMgPSBbXG4gICAgW1wiY29udHJhY3RcIiwgXCJjb250cmFjdFwiLCBcInJnYigyNDcsIDE2NiwgMClcIl0sXG4gICAgW1wib3VyIGNvcnBvcmF0aW9uXCIsIFwiY29ycFwiLCBcIiM4ZjUyY2NcIl0sXG4gICAgW1wicHJvZHVjZWRcIiwgXCJwcm9kdWNlZFwiLCBcIiMzZmEyZGVcIl0sXG4gICAgW1wiYWNjZXB0ZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxuICAgIFtcImV4cGlyZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxuICAgIFtcInRyYWRlXCIsIFwidHJhZGVcIiwgXCIjMDA4MDAwXCJdLFxuICAgIFtcIm9yZGVyIGZpbGxlZFwiLCBcIm9yZGVyXCIsIFwiI2NjMjkyOVwiXSxcbiAgICBbXCJhcnJpdmVkIGF0XCIsIFwiYXJyaXZhbFwiLCBcIiNiMzM2YjNcIl0sXG4gICAgW1wicmVwb3J0XCIsIFwicmVwb3J0XCIsIFwiIzAwYWE3N1wiXSxcbiAgICBbXCJlbGVjdGlvblwiLCBcImVsZWN0aW9uXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJydWxlc1wiLCBcInJ1bGVzXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJjb2djXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXG4gICAgW1wiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcbiAgICBbXCJleHBlcnRcIiwgXCJleHBlcnRcIiwgXCIjZmY4YTAwXCJdLFxuICAgIFtcInBvcHVsYXRpb24gaW5mcmFzdHJ1Y3R1cmUgcHJvamVjdFwiLCBcIlBPUElcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcImFwZXhcIiwgXCJ1cGRhdGVcIiwgXCIjMDBhYTc3XCJdLFxuICAgIFtcIndhcmVob3VzXCIsIFwid2FyXCIsIFwiI2NjMjkyOVwiXSxcbiAgICBbXCJzaGlwYnVpbGRpbmcgcHJvamVjdFwiLCBcInNoaXBcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcInBsYW5ldGFyeSBwcm9qZWN0XCIsIFwiaW5mcmFcIiwgXCIjOGY1MmNjXCJdLFxuICAgIFtcImNvbnN1bWFibGUgc3VwcGxpZXNcIiwgXCJzdXBwbGllc1wiLCBcIiNiMzdiMzJcIl1cbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RpZmljYXRpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgY3JlYXRlTm9kZSB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCBjbGFzcyBTY3JlZW5VbnBhY2sge1xuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihleGNsdXNpb25zKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zY3JlZW5zXCI7XG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcbiAgICAgICAgdGhpcy5leGNsdXNpb25zID0gW107XG4gICAgICAgIGV4Y2x1c2lvbnMuZm9yRWFjaChleCA9PiB7IHRoaXMuZXhjbHVzaW9ucy5wdXNoKGV4LnRvVXBwZXJDYXNlKCkpOyB9KTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5TY3JlZW5Db250cm9scyk7XG4gICAgICAgIGlmIChuYXZiYXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXZiYXIuY2hpbGRyZW5bbmF2YmFyLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYXZiYXJJdGVtQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xuICAgICAgICBjb25zdCBuYml0VW5kZXJsaW5lQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgbWVudSA9IG5hdmJhci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXTtcbiAgICAgICAgdmFyIGxpbmtzID0gW107XG4gICAgICAgIEFycmF5LmZyb20obWVudS5jaGlsZHJlbikuZm9yRWFjaCgoY24pID0+IHtcbiAgICAgICAgICAgIGlmIChjbi5jaGlsZHJlbi5sZW5ndGggPT0gNCAmJiAhdGhpcy5leGNsdXNpb25zLmluY2x1ZGVzKFN0cmluZyhjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwpLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICBzcGFjZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChzcGFjZXJEaXYpO1xuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbSA9IGNyZWF0ZU5vZGUoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NyZWVuVW5wYWNrLnRzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgc2hvd0J1ZmZlciwgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2lkZWJhclwiO1xuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zID0gW1wiQlNcIiwgXCJDT05UXCIsIFwiQ09NXCIsIFwiQ09SUFwiLCBcIkNYTFwiLCBcIkZJTlwiLCBcIkZMVFwiLCBcIklOVlwiLCBcIk1BUFwiLCBcIlBST0RcIiwgXCJDTURTXCJdO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgIH1cbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTGVmdFNpZGViYXIpO1xuICAgICAgICBpZiAoIXRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XG4gICAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZpcnN0Q2hpbGQgIT0gbnVsbCAmJiAoY2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09PSBkZWZhdWx0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWVsZW1lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaWRlYmFyLmNoaWxkcmVuW3NpZGViYXIuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbkluZm8gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dFNwYW4oYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpLCB0aGlzLnRhZyk7XG4gICAgICAgICAgICBjb25zdCBzbGl2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhckJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNsaXZlcik7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBzaG93QnVmZmVyKGJ1dHRvbkluZm9bMV0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBQbGFuZXRDb21tYW5kcywgUGxhbmV0TmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuZXhwb3J0IGNsYXNzIENvbW1hbmRDb3JyZWN0ZXIge1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyQXJlYSkpLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIGlmIChidWZmZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlckZpZWxkID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZXh0ID0gYnVmZmVyRmllbGQudmFsdWUudG9VcHBlckNhc2UoKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChQbGFuZXRDb21tYW5kcy5pbmNsdWRlcyhidWZmZXJUZXh0LnNwbGl0KFwiIFwiKVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFBsYW5ldE5hbWVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclRleHQuaW5jbHVkZXMoXCIgXCIgKyBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRleHQgPSBidWZmZXJUZXh0LnJlcGxhY2UoXCIgXCIgKyBuYW1lLCBcIiBcIiArIFBsYW5ldE5hbWVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlKGJ1ZmZlckZpZWxkLCBidWZmZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50ID09IG51bGwgfHwgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4sIHNob3dCdWZmZXIgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jYWxjXCI7XG4gICAgfVxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnN0IGNhbGNUYWdzID0gW1wiTE1cIiwgXCJDWFwiLCBcIlhJVFwiXTtcbiAgICAgICAgY2FsY1RhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnModGFnKTtcbiAgICAgICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpIHx8IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdXBwZXItcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmluc2VydEJlZm9yZShjYWxjRGl2LCAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZC5pZCA9PSBcInJlZnJlc2hcIiA/IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5jaGlsZHJlblsxXSA6IChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi8J+WqVwiLCB0aGlzLnRhZykpO1xuICAgICAgICAgICAgICAgIGNhbGNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIlhJVCBDQUxDVUxBVE9SXCIpOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IGNsYXNzIENvbnRyYWN0RHJhZnRzIHtcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbnRkXCI7XG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgZ2V0QnVmZmVycyhcIkNPTlREIFwiKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25UYWJsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnREQ29uZGl0aW9uc1RhYmxlKTtcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0cyA9IGNvbmRpdGlvblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ciA+IHRkOm50aC1jaGlsZCgyKVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIEFycmF5LmZyb20oY29uZGl0aW9uVGV4dHMpLmZvckVhY2goY29uZGl0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY29uZGl0aW9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3Zpc2lvbk1hdGNoID0gKC9Qcm92aXNpb24gKFswLTksLl0rKSB1bml0W3NdPyBvZiAoW0EtWmEtejAtOSBdKykgQC9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlzaW9uTWF0Y2ggJiYgcHJvdmlzaW9uTWF0Y2gubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwcm92aXNpb25NYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBwcm92aXNpb25NYXRjaFsyXTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdID0gW3F1YW50aXR5LnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLCBtYXRlcmlhbF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlck1hdGNoID0gKC9EZWxpdmVyeSBvZiAoWzAtOSwuXSspIHVuaXRbc10/IG9mIChbQS1aYS16MC05IF0rKSB0by9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsaXZlck1hdGNoICYmIGRlbGl2ZXJNYXRjaC5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IGRlbGl2ZXJNYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBkZWxpdmVyTWF0Y2hbMl07XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXSA9IFtxdWFudGl0eS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgbWF0ZXJpYWxdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRNYXRjaCA9ICgvUGF5bWVudCBvZiAoWzAtOSwuXSspL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChwYXltZW50TWF0Y2ggJiYgcGF5bWVudE1hdGNoLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmRpdGlvbnNbXCJQYXltZW50XCJdID0gcGF5bWVudE1hdGNoWzFdLnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBNYXRjaCA9ICgvUHJvdmlzaW9uIHNoaXBtZW50IG9mIChbMC05LC5dKykgdW5pdFtzXT8gb2YgKFtBLVphLXowLTkgXSspIEAvZ20pLmV4ZWMoY29uZGl0aW9uVGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBNYXRjaCAmJiBzaGlwTWF0Y2gubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBzaGlwTWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gc2hpcE1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl0gPSBbcXVhbnRpdHkucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIiksIG1hdGVyaWFsXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbkVkaXRvckZvcm0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm0pO1xuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25FZGl0b3JGb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25FZGl0b3JMYWJlbHMgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQ29udERGb3JtTGFiZWwpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb25kaXRpb25FZGl0b3JMYWJlbHMpLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsLnRleHRDb250ZW50IHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGxhYmVsc1sxXSA9PSBcIkN1cnJlbmN5XCIgJiYgcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdICYmIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1NwYWNlciA9IGNvbmRpdGlvbkVkaXRvckZvcm0ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm1Sb3dTcGFjZXIpO1xuICAgICAgICAgICAgICAgIGlmICghcm93U3BhY2VyIHx8ICFyb3dTcGFjZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gcm93U3BhY2VyLnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFtb3VudElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyVW5pdCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlIHx8IFwiMFwiKSAvIHBhcnNlSW50KHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVswXSk7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsVGV4dCA9IHBlclVuaXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmljZXNbcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzFdXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvcnAgPSBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMF0pICogdGhpcy5wcmljZXNbcGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICs9IFwiIHwgXCIgKyB0b3RhbENvcnAudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgQ29ycFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb3dTcGFjZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGxhYmVsVGV4dCwgdGhpcy50YWcpLCByb3dTcGFjZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYWJlbHNbMV0gPT0gXCJDdXJyZW5jeVwiICYmIHBhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXSAmJiBwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTcGFjZXIgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtUm93U3BhY2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvd1NwYWNlciB8fCAhcm93U3BhY2VyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHJvd1NwYWNlci5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFhbW91bnRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSGVhdnkgPSBNYXRlcmlhbHNbcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdWzFdXVsxXSA+IE1hdGVyaWFsc1twYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV1dWzJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlclVuaXQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSB8fCBcIjBcIikgLyBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMF0pIC8gTWF0ZXJpYWxzW3BhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXV1baXNIZWF2eSA/IDEgOiAyXTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxUZXh0ID0gcGVyVW5pdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyAoaXNIZWF2eSA/IFwiL3RcIiA6IFwiL23Cs1wiKTtcbiAgICAgICAgICAgICAgICByb3dTcGFjZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGxhYmVsVGV4dCwgdGhpcy50YWcpLCByb3dTcGFjZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnRyYWN0RHJhZnRzLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuZXhwb3J0IGNsYXNzIEltYWdlQ3JlYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1pbWFnZVwiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJDT01cIik7XG4gICAgICAgIGlmICghYnVmZmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGF0TGlua3MgPSBidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5DaGF0TGluayk7XG4gICAgICAgICAgICBjb25zdCBjaGF0QXJlYSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNoYXRBcmVhKTtcbiAgICAgICAgICAgIGlmICghY2hhdEFyZWEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYXRMaW5rcykuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rVGV4dCA9IGxpbmsudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rVGV4dCB8fCBsaW5rLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzSW1hZ2UobGlua1RleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXQtaW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGxpbmtUZXh0O1xuICAgICAgICAgICAgICAgIGlmICghbGluay5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICBjaGF0QXJlYS5zY3JvbGxCeSgwLCAoaW1nLm9mZnNldEhlaWdodCB8fCAwKSArIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIC9cXC4oanBnfGpwZWd8cG5nfHdlYnB8YXZpZnxnaWZ8c3ZnKSQvLnRlc3QodXJsKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ltYWdlQ3JlYXRvci50c1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycywgcGFyc2VJbnZOYW1lLCBwYXJzZVBsYW5ldE5hbWUsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCB0YXJnZXRlZENsZWFudXAsIHNldFNldHRpbmdzLCBzaG93QnVmZmVyLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzLCBTb3J0aW5nVHJpYW5nbGVIVE1MIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlPcmdhbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBmdWxsQnVybiwgcmVzdWx0KSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1pbnYtb3JnXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5mdWxsQnVybiA9IGZ1bGxCdXJuO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiSU5WIFwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIGlmICghYnVmZmVycyB8fCAhcmVzdWx0IHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImludmVudG9yeV9zb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImludmVudG9yeV9zb3J0aW5nXCJdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGNvbnN0IHNjcmVlbk5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TY3JlZW5OYW1lKTtcbiAgICAgICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xuICAgICAgICBpZiAoIXNjcmVlbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnRhZztcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3J0T3B0aW9ucyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeVNvcnRPcHRpb25zKTtcbiAgICAgICAgICAgIGlmICghc29ydE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYXNlTmFtZUVsZW0gPSBidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpO1xuICAgICAgICAgICAgaWYgKCFiYXNlTmFtZUVsZW0gfHwgIWJhc2VOYW1lRWxlbVswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGludk5hbWUgPSBwYXJzZUludk5hbWUoYmFzZU5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghaW52TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldE5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBwbGFuZXROYW1lID0gcGxhbmV0TmFtZUVsZW0gPyBwYXJzZVBsYW5ldE5hbWUocGxhbmV0TmFtZUVsZW0udGV4dENvbnRlbnQpIDogXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IGJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXROYW1lLCB0aGlzLmZ1bGxCdXJuW3RoaXMudXNlcm5hbWVdKTtcbiAgICAgICAgICAgIGNvbnN0IGludmVudG9yeSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkludmVudG9yeSk7XG4gICAgICAgICAgICBpZiAoIWludmVudG9yeSB8fCAhaW52ZW50b3J5LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWludmVudG9yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi1tb25pdG9yZWRcIikpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkuY2xhc3NMaXN0LmFkZChcInBiLW1vbml0b3JlZFwiKTtcbiAgICAgICAgICAgICAgICBzb3J0SW52ZW50b3J5KGludmVudG9yeSwgc29ydE9wdGlvbnMsIHJlc3VsdCwgdGhpcy50YWcsIHNjcmVlbk5hbWUsIGludk5hbWUsIGJ1cm4pO1xuICAgICAgICAgICAgICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldGVkQ2xlYW51cCh0YWcsIGludmVudG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRJbnZlbnRvcnkoaW52ZW50b3J5LCBzb3J0T3B0aW9ucywgcmVzdWx0LCB0YWcsIHNjcmVlbk5hbWUsIGludk5hbWUsIGJ1cm4pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaW52ZW50b3J5O1xuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xuICAgICAgICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRpb25zT2JzZXJ2ZWQpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hpcEJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiU0hQSSBcIik7XG4gICAgICAgIGlmICghc2hpcEJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHNoaXBCdWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5U29ydE9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCFzb3J0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lRWxlbSA9IGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlckhlYWRlcik7XG4gICAgICAgICAgICBpZiAoIXNoaXBOYW1lRWxlbSB8fCAhc2hpcE5hbWVFbGVtWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBwYXJzZUludk5hbWUoc2hpcE5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnkpO1xuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkgfHwgIWludmVudG9yeS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItbW9uaXRvcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LmNsYXNzTGlzdC5hZGQoXCJwYi1tb25pdG9yZWRcIik7XG4gICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgbGV0IG9uTXV0YXRpb25zT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ZWRDbGVhbnVwKHRhZywgaW52ZW50b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpbnZlbnRvcnk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XG4gICAgICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNvcnRJbnZlbnRvcnkoaW52ZW50b3J5LCBzb3J0T3B0aW9ucywgcmVzdWx0LCB0YWcsIHNjcmVlbk5hbWUsIHBsYW5ldE5hbWUsIGJ1cm4pIHtcbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIDw9IDcpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbiAhPSBzb3J0T3B0aW9ucy5maXJzdENoaWxkICYmICFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbklubmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25Jbm5lci5jaGlsZHJlblsxXSAmJiBvcHRpb25Jbm5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Jbm5lci5yZW1vdmVDaGlsZChvcHRpb25Jbm5lci5jaGlsZHJlblsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXS5mb3JFYWNoKHNvcnRTZXR0aW5ncyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0U2V0dGluZ3NbMF0gPT0gc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRTZXR0aW5nc1sxXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZlbnRvcnkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5Lmluc2VydEJlZm9yZShpbnZlbnRvcnkuZmlyc3RDaGlsZCwgaW52ZW50b3J5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChidXJuKSB7XG4gICAgICAgICAgICBzb3J0T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVUb2dnbGUocmVzdWx0LCBzb3J0T3B0aW9ucywgXCJCUk5cIiwgZmluZElmQWN0aXZlKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0sIHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lLCBcIkJSTlwiKSwgc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUsIGludmVudG9yeSkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uZm9yRWFjaChzZXR0aW5ncyA9PiB7XG4gICAgICAgICAgICBpZiAoIXNldHRpbmdzWzBdIHx8ICFzZXR0aW5nc1sxXSB8fCAhc2V0dGluZ3NbMl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3NbMV0udG9VcHBlckNhc2UoKSAhPSBwbGFuZXROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVUb2dnbGUocmVzdWx0LCBzb3J0T3B0aW9ucywgc2V0dGluZ3NbMF0sIGZpbmRJZkFjdGl2ZShyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgc2V0dGluZ3NbMF0pLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgaW52ZW50b3J5KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gJiYgc29ydE9wdGlvbnMuY2hpbGRyZW5bc29ydE9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgIT0gXCIrXCIpIHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJJbnZlbnRvcnlTb3J0Q29udHJvbHNfX2NyaXRlcmlhX19faWpMTWdqbVwiKTtcbiAgICAgICAgc29ydE9wdGlvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNob3dCdWZmZXIoXCJYSVQgU09SVF9cIiArIHBsYW5ldE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVNvcnQgPSBcIlwiO1xuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0uZm9yRWFjaChzb3J0U2V0dGluZ3MgPT4ge1xuICAgICAgICBpZiAoc29ydFNldHRpbmdzWzBdID09IHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lKSB7XG4gICAgICAgICAgICBhY3RpdmVTb3J0ID0gc29ydFNldHRpbmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcHRpb24gIT0gc29ydE9wdGlvbnMuZmlyc3RDaGlsZCAmJiBvcHRpb24uZmlyc3RDaGlsZCAmJiBvcHRpb24uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9PSBhY3RpdmVTb3J0ICYmICFvcHRpb24uY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgICAgIHRvZ2dsZUluZGljYXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIycHhcIjtcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0b2dnbGVJbmRpY2F0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbi5maXJzdENoaWxkICYmIG9wdGlvbi5maXJzdENoaWxkLnRleHRDb250ZW50ICE9IGFjdGl2ZVNvcnQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlU29ydCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZVNvcnQgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtYXRlcmlhbHMgPSBBcnJheS5mcm9tKGludmVudG9yeS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZ1bGxNYXRlcmlhbEljb24pKTtcbiAgICBtYXRlcmlhbHMuc29ydChtYXRlcmlhbFNvcnQpO1xuICAgIHZhciBzb3J0ZWQgPSBbXTtcbiAgICB2YXIgc29ydGluZ0RldGFpbHMgPSBbXTtcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmZvckVhY2gocmVzdWx0X3NvcnRpbmdEZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdF9zb3J0aW5nRGV0YWlsc1swXSA9PSBhY3RpdmVTb3J0ICYmIHJlc3VsdF9zb3J0aW5nRGV0YWlsc1sxXSA9PSBwbGFuZXROYW1lKSB7XG4gICAgICAgICAgICBzb3J0aW5nRGV0YWlscyA9IHJlc3VsdF9zb3J0aW5nRGV0YWlscztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZVNvcnQgIT0gXCJCUk5cIikge1xuICAgICAgICBpZiAoc29ydGluZ0RldGFpbHMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0aW5nRGV0YWlsc1s0XSkge1xuICAgICAgICAgICAgdmFyIG1hdGVyaWFsc1RvU29ydCA9IFtdO1xuICAgICAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzVG9Tb3J0ID0gbWF0ZXJpYWxzVG9Tb3J0LmNvbmNhdChjYXRlZ29yeVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbHNUb1NvcnQgPSBtYXRlcmlhbHNUb1NvcnQuZmlsdGVyKChjLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRlcmlhbHNUb1NvcnQuaW5kZXhPZihjKSA9PT0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGVyaWFsc1RvU29ydC5mb3JFYWNoKHRpY2tlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbExpc3RDb250YWlucyhtYXRlcmlhbHMsIHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0RWxlbWVudCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIHRhZywgXCIwXCIsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0UXVhbnRpdHlFbGVtID0gbWF0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsUXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0UXVhbnRpdHlFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRRdWFudGl0eUVsZW0uc3R5bGUuY29sb3IgPSBcIiNjYzAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5zb3J0KG1hdGVyaWFsU29ydCk7XG4gICAgICAgIH1cbiAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnlbMF0pKTtcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlSXRlbXNJbkNhdGVnb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgY2F0ZWdvcnlbMV0uaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlSXRlbXNJbkNhdGVnb3J5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlSXRlbXNJbkNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGNhdGVnb3J5VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdChjYXRlZ29yeVsxXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc29ydGluZ0RldGFpbHNbM10gfHwgYWN0aXZlU29ydCA9PSBcIkJSTlwiKSB7XG4gICAgICAgIGlmIChidXJuKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JrZm9yY2VNYXRlcmlhbHMgPSBleHRyYWN0TWF0ZXJpYWxzKGJ1cm5bXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXSk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE1hdGVyaWFscyA9IGV4dHJhY3RNYXRlcmlhbHMoYnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0TWF0ZXJpYWxzID0gZXh0cmFjdE1hdGVyaWFscyhidXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtmb3JjZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29uc3VtYWJsZXNcIikpO1xuICAgICAgICAgICAgd29ya2ZvcmNlVGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgd29ya2ZvcmNlVGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHdvcmtmb3JjZVRpdGxlLmNsYXNzTGlzdC5hZGQodGFnKTtcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZCh3b3JrZm9yY2VUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlQ29uc3VtYWJsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiB3b3JrZm9yY2VNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhb3V0cHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFyZUNvbnN1bWFibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlQ29uc3VtYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQod29ya2ZvcmNlVGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBpbnB1dFRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW5wdXRzXCIpKTtcbiAgICAgICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xuICAgICAgICAgICAgaW5wdXRUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgICAgICB2YXIgYXJlSW5wdXRzID0gZmFsc2U7XG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlSW5wdXRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXJlSW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgb3V0cHV0VGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJPdXRwdXRzXCIpKTtcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBvdXRwdXRUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQob3V0cHV0VGl0bGUpO1xuICAgICAgICAgICAgdmFyIGFyZU91dHB1dHMgPSBmYWxzZTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRpY2tlciAmJiBvdXRwdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhaW5wdXRNYXRlcmlhbHMuaW5jbHVkZXModGlja2VyKSAmJiAhc29ydGVkLmluY2x1ZGVzKHRpY2tlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYXJlT3V0cHV0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFyZU91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkucmVtb3ZlQ2hpbGQob3V0cHV0VGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdCh3b3JrZm9yY2VNYXRlcmlhbHMpO1xuICAgICAgICAgICAgc29ydGVkID0gc29ydGVkLmNvbmNhdChpbnB1dE1hdGVyaWFscyk7XG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuY29uY2F0KG91dHB1dE1hdGVyaWFscyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbWlzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaXNjVGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJPdGhlclwiKSk7XG4gICAgbWlzY1RpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICBtaXNjVGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBtaXNjVGl0bGUuY2xhc3NMaXN0LmFkZCh0YWcpO1xuICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtaXNjVGl0bGUpO1xuICAgIHZhciBhcmVNaXNjID0gZmFsc2U7XG4gICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xuICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xuICAgICAgICBpZiAodGlja2VyICYmICFzb3J0ZWQuaW5jbHVkZXModGlja2VyKSkge1xuICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcbiAgICAgICAgICAgIGFyZU1pc2MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBpZiAoIWFyZU1pc2MpIHtcbiAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKG1pc2NUaXRsZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIG1hdGVyaWFsTGlzdENvbnRhaW5zKG1hdGVyaWFscywgdGlja2VyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsc1tpXS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XG4gICAgICAgIGlmICghdGlja2VyRWxlbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpY2tlciA9PSB0aWNrZXJFbGVtLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBmaW5kSWZBY3RpdmUoc29ydFNldHRpbmdzLCBzY3JlZW5QbGFuZXQsIHNvcnRNb2RlTmFtZSkge1xuICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgIHNvcnRTZXR0aW5ncy5mb3JFYWNoKHNldHRpbmdzID0+IHtcbiAgICAgICAgaWYgKHNldHRpbmdzWzBdID09IHNjcmVlblBsYW5ldCAmJiBzZXR0aW5nc1sxXSA9PSBzb3J0TW9kZU5hbWUpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xufVxuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlKHJlc3VsdCwgc29ydE9wdGlvbnMsIGFiYnJldmlhdGlvbiwgc2VsZWN0ZWQsIGNvbWJpbmVkTmFtZSwgaW52ZW50b3J5KSB7XG4gICAgY29uc3QgY3VzdG9tU29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VzdG9tU29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiSW52ZW50b3J5U29ydENvbnRyb2xzX19jcml0ZXJpYV9fX2lqTE1nam1cIik7XG4gICAgY3VzdG9tU29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGItdG9nZ2xlXCIpO1xuICAgIGNvbnN0IHRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2dnbGVMYWJlbC50ZXh0Q29udGVudCA9IGFiYnJldmlhdGlvbjtcbiAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUxhYmVsKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xuICAgICAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUluZGljYXRvcik7XG4gICAgfVxuICAgIGN1c3RvbVNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGludmVudG9yeS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5pbnNlcnRCZWZvcmUoaW52ZW50b3J5LmZpcnN0Q2hpbGQsIGludmVudG9yeS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xuICAgICAgICBjdXN0b21Tb3J0QnV0dG9uLmFwcGVuZENoaWxkKHRvZ2dsZUluZGljYXRvcik7XG4gICAgICAgIHZhciBzYXZlZEJlZm9yZSA9IGZhbHNlO1xuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLmZvckVhY2goc29ydGluZ09wdGlvbnMgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdPcHRpb25zWzBdID09IGNvbWJpbmVkTmFtZSkge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdPcHRpb25zWzFdID0gYWJicmV2aWF0aW9uO1xuICAgICAgICAgICAgICAgIHNhdmVkQmVmb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2F2ZWRCZWZvcmUpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0ucHVzaChbY29tYmluZWROYW1lLCBhYmJyZXZpYXRpb25dKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1c3RvbVNvcnRCdXR0b247XG59XG5mdW5jdGlvbiBleHRyYWN0TWF0ZXJpYWxzKGJ1cm4pIHtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbXTtcbiAgICBidXJuLmZvckVhY2gobWF0ID0+IHtcbiAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGVyaWFscztcbn1cbmZ1bmN0aW9uIG1hdGVyaWFsU29ydChhLCBiKSB7XG4gICAgY29uc3QgdGlja2VyRWxlbUEgPSBhLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcbiAgICBpZiAoIXRpY2tlckVsZW1BKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGlja2VyQSA9IHRpY2tlckVsZW1BLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRpY2tlckVsZW1CID0gYi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XG4gICAgaWYgKCF0aWNrZXJFbGVtQikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpY2tlckIgPSB0aWNrZXJFbGVtQi50ZXh0Q29udGVudDtcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyQV0gfHwgIU1hdGVyaWFsTmFtZXNbdGlja2VyQl0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChNYXRlcmlhbE5hbWVzW3RpY2tlckFdWzFdID09IE1hdGVyaWFsTmFtZXNbdGlja2VyQl1bMV0pIHtcbiAgICAgICAgcmV0dXJuIHRpY2tlckEubG9jYWxlQ29tcGFyZSh0aWNrZXJCKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbdGlja2VyQV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW3RpY2tlckJdWzFdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ludmVudG9yeU9yZ2FuaXplci50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcbmV4cG9ydCBjbGFzcyBIZWFkZXJNaW5pbWl6ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1pbkJ5RGVmYXVsdCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicGItbWluLWhlYWRlcnNcIjtcbiAgICAgICAgdGhpcy5taW5CeURlZmF1bHQgPSBtaW5CeURlZmF1bHQ7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJDWCBcIik7XG4gICAgICAgIGlmICghYnVmZmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgbWluaW1pemVIZWFkZXJzKGJ1ZmZlciwgdGhpcy5taW5CeURlZmF1bHQsIHRoaXMudGFnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkNPTlQgXCIpO1xuICAgICAgICBpZiAoIWJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIG1pbmltaXplSGVhZGVycyhidWZmZXIsIHRoaXMubWluQnlEZWZhdWx0LCB0aGlzLnRhZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuZnVuY3Rpb24gbWluaW1pemVIZWFkZXJzKGJ1ZmZlciwgbWluQnlEZWZhdWx0LCB0YWcpIHtcbiAgICBjb25zdCBidWZmZXJQYW5lbCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclBhbmVsKTtcbiAgICBpZiAoIWJ1ZmZlclBhbmVsIHx8ICFidWZmZXJQYW5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkhlYWRlclJvdyk7XG4gICAgaWYgKGhlYWRlcnNbMF0gJiYgaGVhZGVyc1swXS5jbGFzc0xpc3QuY29udGFpbnModGFnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtaW5CeURlZmF1bHQpIHtcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnModGFnKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBtaW5pbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluaW1pemVCdXR0b24udGV4dENvbnRlbnQgPSBtaW5CeURlZmF1bHQgPyBcIitcIiA6IFwiLVwiO1xuICAgIG1pbmltaXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYi1taW5pbWl6ZVwiKTtcbiAgICBtaW5pbWl6ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGItbWluaW1pemUtY3hcIik7XG4gICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWluaW1pemUgPSBtaW5pbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9PSBcIi1cIjtcbiAgICAgICAgbWluaW1pemVCdXR0b24udGV4dENvbnRlbnQgPSBtaW5pbWl6ZSA/IFwiK1wiIDogXCItXCI7XG4gICAgICAgIEFycmF5LmZyb20oaGVhZGVycykuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRhZykpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9IG1pbmltaXplID8gXCJub25lXCIgOiBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICBidWZmZXJQYW5lbC5maXJzdENoaWxkLmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXJSb3coXCJNaW5pbWl6ZVwiLCBtaW5pbWl6ZUJ1dHRvbiwgdGFnKSwgYnVmZmVyUGFuZWwuZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJSb3cobGFiZWxUZXh0LCByaWdodFNpZGVDb250ZW50cywgdGFnKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5IZWFkZXJSb3cpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKHRhZyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xuICAgIGNvbnN0IHJpZ2h0U2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRTaWRlRGl2LmFwcGVuZENoaWxkKHJpZ2h0U2lkZUNvbnRlbnRzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiByb3c7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9IZWFkZXJNaW5pbWl6ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgY3JlYXRlQ29udHJhY3REaWN0IH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb250cmFjdHMge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBjb250cmFjdHMpIHtcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXBlbmRpbmctY29udHJhY3RzXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSBjb250cmFjdHM7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlcm5hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0TGluZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU2lkZWJhckNvbnRyYWN0KSk7XG4gICAgICAgIHZhciBjb250cmFjdGRpY3QgPSB7fTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyYWN0c1t0aGlzLnVzZXJuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUNvbnRyYWN0RGljdCh0aGlzLmNvbnRyYWN0cywgdGhpcy51c2VybmFtZSwgY29udHJhY3RkaWN0KTtcbiAgICAgICAgY29udHJhY3RMaW5lcy5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0SURFbGVtZW50ID0gY29udHJhY3QucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TaWRlYmFyQ29udHJhY3RJZCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRyYWN0SURFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udHJhY3RJRCA9IGNvbnRyYWN0SURFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKCFjb250cmFjdElEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ZGljdFtjb250cmFjdElEXSAmJiBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0bmVyY29kZSA9IGNvbnRyYWN0ZGljdFtjb250cmFjdElEXVtcIlBhcnRuZXJOYW1lXCJdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0bmVyY29kZS5sZW5ndGggPiAxOSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyY29kZSA9IGNvbnRyYWN0ZGljdFtjb250cmFjdElEXVtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSB8fCBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXS5zcGxpdChcIiBcIilbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlVGV4dFNwYW4oYCR7cGFydG5lcmNvZGV9YCwgdGhpcy50YWcpO1xuICAgICAgICAgICAgICAgIG5hbWVTcGFuLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRyYWN0Lmluc2VydEJlZm9yZShuYW1lU3BhbiwgY29udHJhY3QuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihcIlVua25vd25cIiwgdGhpcy50YWcpO1xuICAgICAgICAgICAgbmFtZVNwYW4uc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgICAgICAgICBjb250cmFjdC5pbnNlcnRCZWZvcmUobmFtZVNwYW4sIGNvbnRyYWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1BlbmRpbmdDb250cmFjdHMudHNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XG5pbXBvcnQgeyBXaXRoU3R5bGVzLCBTdHlsZSB9IGZyb20gXCJTdHlsZVwiO1xuZXhwb3J0IGNsYXNzIENvbXBhY3RVSSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0KSB7XG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb21wYWN0dWlcIjtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgdmFyIGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiQkJMXCIpO1xuICAgICAgICBpZiAoYnVmZmVycykge1xuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgQ2xlYXJCdWlsZGluZ0xpc3RzKGJ1ZmZlciwgdGhpcy5yZXN1bHQsIHRoaXMudGFnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJCU1wiKTtcbiAgICAgICAgaWYgKGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgICAgIENsZWFyQmFzZShidWZmZXIsIHRoaXMudGFnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBIaWRlRWxlbWVudChlbGVtZW50LCB0YWcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGFnICsgXCItaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFVuSGlkZUVsZW1lbnQoZWxlbWVudCwgdGFnKSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGFnICsgXCItaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENsZWFyQnVpbGRpbmdMaXN0cyhidWZmZXIsIHJlc3VsdCwgdGFnKSB7XG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWlsZGluZ0xpc3QpO1xuICAgIGlmICghbmFtZUVsZW0gfHwgIW5hbWVFbGVtLnRleHRDb250ZW50KVxuICAgICAgICByZXR1cm47XG4gICAgQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EaXZpZGVyKSkuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIGlmIChyb3cuY2hpbGROb2Rlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB2YXIgbmV3bWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3bWVudS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b24pKTtcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25Ub2dnbGVkKSk7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25WYWx1ZSkpO1xuICAgICAgICAgICAgdmFsdWUuaW5uZXJUZXh0ID0gXCJWaXNpYmxlXCI7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmV3bWVudSk7XG4gICAgICAgICAgICBuZXdtZW51LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG4gICAgICAgICAgICBuZXdtZW51LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIG5ld21lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kaWNhdG9yLmNsYXNzTGlzdC5jb250YWlucyhTdHlsZS5SYWRpb0J1dHRvblRvZ2dsZWRbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93Lm5leHRFbGVtZW50U2libGluZywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblRvZ2dsZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblVuVG9nZ2xlZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBVbkhpZGVFbGVtZW50KHJvdy5uZXh0RWxlbWVudFNpYmxpbmcsIHRhZyk7XG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKC4uLldpdGhTdHlsZXMoU3R5bGUuUmFkaW9CdXR0b25VblRvZ2dsZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5SYWRpb0J1dHRvblRvZ2dsZWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyb3cuaW5uZXJUZXh0LmluY2x1ZGVzKFwiSW5mcmFzdHJ1Y3R1cmVcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIsIHsgXCJkZXRhaWxcIjogXCJmYWtlIGNsaWNrXCIgfSk7XG4gICAgICAgICAgICAgICAgbmV3bWVudS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIEFycmF5LmZyb20obmFtZUVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKSkuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgdmFyIHJlcGFpcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBFc3RhYmxpc2hSb3c7XG4gICAgICAgIHZhciBidXR0b25zID0gdGFibGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uc1sxXS5jbGFzc0xpc3QucmVtb3ZlKC4uLldpdGhTdHlsZXMoU3R5bGUuQnV0dG9uRW5hYmxlZCkpO1xuICAgICAgICBidXR0b25zWzFdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5CdXR0b25EYW5nZXIpKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0YWJsZS5yb3dzKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgTGluZTtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoTGluZSkge1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkVzdGFibGlzaGVkXCJdID0gMF0gPSBcIkVzdGFibGlzaGVkXCI7XG4gICAgICAgICAgICAgICAgTGluZVtMaW5lW1wiUmVwYWlyXCJdID0gMV0gPSBcIlJlcGFpclwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkNvc3RcIl0gPSAyXSA9IFwiQ29zdFwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIlJlZnVuZFwiXSA9IDNdID0gXCJSZWZ1bmRcIjtcbiAgICAgICAgICAgICAgICBMaW5lW0xpbmVbXCJWYWx1ZVwiXSA9IDRdID0gXCJWYWx1ZVwiO1xuICAgICAgICAgICAgICAgIExpbmVbTGluZVtcIkNvbmRpdGlvblwiXSA9IDVdID0gXCJDb25kaXRpb25cIjtcbiAgICAgICAgICAgIH0pKExpbmUgfHwgKExpbmUgPSB7fSkpO1xuICAgICAgICAgICAgdmFyIGRpY3QgPSB7XG4gICAgICAgICAgICAgICAgJ0VzdGFibGlzaGVkJzogTGluZS5Fc3RhYmxpc2hlZCxcbiAgICAgICAgICAgICAgICAnTGFzdCByZXBhaXInOiBMaW5lLlJlcGFpcixcbiAgICAgICAgICAgICAgICAnUmVwYWlyIGNvc3RzJzogTGluZS5Db3N0LFxuICAgICAgICAgICAgICAgICdSZWNsYWltYWJsZSBtYXRlcmlhbHMnOiBMaW5lLlJlZnVuZCxcbiAgICAgICAgICAgICAgICAnQm9vayB2YWx1ZSc6IExpbmUuVmFsdWUsXG4gICAgICAgICAgICAgICAgJ0NvbmRpdGlvbic6IExpbmUuQ29uZGl0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGxpbmV0eXBlID0gTGluZS5Fc3RhYmxpc2hlZDtcbiAgICAgICAgICAgIEFycmF5LmZyb20ocm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIikpLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBkYXRhLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoZGljdFt0ZXh0XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmV0eXBlID0gZGljdFt0ZXh0XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmV0eXBlID09IExpbmUuRXN0YWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBFc3RhYmxpc2hSb3cgPSByb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRleHQgPT0gXCItLVwiKVxuICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGV4dCA9PSBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93LCB0YWcpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdCh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLlJlcGFpcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwYWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLkNvbmRpdGlvbiB8fCBsaW5ldHlwZSA9PSBMaW5lLkVzdGFibGlzaGVkIHx8IGxpbmV0eXBlID09IExpbmUuUmVwYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBkYXRhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDE4MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYmFyICE9IG51bGwgJiYgYmFyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QucmVtb3ZlKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJDb2xvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gYmFyWzBdLnZhbHVlIC8gYmFyWzBdLm1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5ldHlwZSA9PSBMaW5lLkNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDk4ICYmIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFN0eWxlLkJ1dHRvbkVuYWJsZWRbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LnJlbW92ZSguLi5XaXRoU3R5bGVzKFN0eWxlLkJ1dHRvbkVuYWJsZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1swXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuQnV0dG9uRGFuZ2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDAuOTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJHb29kKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiAwLjgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJbMF0uY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyV2FybmluZykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2dyZXNzID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0JhckRhbmdlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLnZhbHVlID0gMTgwIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBiYXJbMF0udmFsdWUgLyBiYXJbMF0ubWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aHJlc2hvbGQgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdID8gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSAvIDE4MC4wIDogKDcwLjAgLyAxODAuMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMC43NSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0Jhckdvb2QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA+IHRocmVzaG9sZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyWzBdLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5Qcm9ncmVzc0Jhcldhcm5pbmcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclswXS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuUHJvZ3Jlc3NCYXJEYW5nZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdiYXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlByb2dyZXNzQmFyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZXR5cGUgPT0gTGluZS5Db25kaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3YmFyLm1heCA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdiYXIubWF4ID0gMTgwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbm5lckhUTUwgPSBuZXdiYXIub3V0ZXJIVE1MICsgZGF0YS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZXR5cGUgPT0gTGluZS5WYWx1ZSAmJiB2YWx1ZSA8IDIwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KHJvdywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWRlRWxlbWVudChyb3csIHRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcGFpcmVkKVxuICAgICAgICAgICAgICAgIEhpZGVFbGVtZW50KEVzdGFibGlzaFJvdywgdGFnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJCYXNlKGJ1ZmZlciwgdGFnKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkhlYWRlclJvdykpO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnRzWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB2YXIgZWRpdGRpdiA9IGVsZW1lbnRzWzFdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdO1xuICAgIGVkaXRkaXYuaW5uZXJIVE1MID0gZWxlbWVudHNbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwcm9ncmVzc1wiKVswXS5vdXRlckhUTUwgKyBlZGl0ZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdLm91dGVySFRNTDtcbiAgICBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xuICAgICAgICBBcnJheS5mcm9tKHRhYmxlLnJvd3MpLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gQXJyYXkuZnJvbShyb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBBcnJheS5mcm9tKHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoXCIpKTtcbiAgICAgICAgICAgICAgICBkYXRhWzJdLmlubmVyVGV4dCA9IFwiQ3VycmVudFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVkID0gcGFyc2VGbG9hdChkYXRhWzFdLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgdmFyIHdvcmtmb3JjZSA9IHBhcnNlRmxvYXQoZGF0YVsyXS5pbm5lclRleHQuc3BsaXQoXCIgXCIpWzBdKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FwYWNpdHkgPSBwYXJzZUZsb2F0KGRhdGFbM10uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gZGF0YVs0XS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXTtcbiAgICAgICAgICAgICAgICBiYXIuaW5uZXJIVE1MID0gYmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIilbMF0ub3V0ZXJIVE1MICsgYmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJvZ3Jlc3NcIilbMF0udGl0bGU7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkIDwgMSAmJiBjYXBhY2l0eSA8IDEgJiYgd29ya2ZvcmNlIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgSGlkZUVsZW1lbnQocm93LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbXBhY3RVSS50c1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==