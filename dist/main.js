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
    SidebarContractId: "span[class~='Sidebar__contractId___Lg85TRZ']"
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
    ButtonDanger: ["Button__danger___S2rSOES"],
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
    SettingsButton: ["RadioItem__container___CSczqmG", "RadioItem__containerHorizontal____trlXDo"],
    SettingsBarUntoggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh"],
    SettingsBarToggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
    SettingsText: ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO", "RadioItem__valueHorizontal___D5AXJ9P"],
    OverlappingDiv: ["Overlay__overlay___NA9HV8y"],
    GreyStripes: ["Overlay__background___ieZpHiF", "Overlay__overlay___NA9HV8y"],
    Spacer: ["Overlay__close___bxGoMIl"],
    CenterInterface: ["Overlay__children___rgtVaxc"],
    FormRow: ["FormComponent__containerActive___HZv9jHd", "forms__active___wn9KQTZ", "forms__form-component___yTgP_Qa"],
    FormLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    FormSaveRow: ["FormComponent__containerCommand___B4XLERf", "forms__cmd___IMzt7Ug", "forms__form-component___yTgP_Qa"],
    FormSaveLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormSaveInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    MatText: ["ColoredIcon__label___OU1I4oP"],
    MatTextWrapper: ["ColoredIcon__labelContainer___YVfgzOk"],
    MaterialElement: ["ColoredIcon__container___djaR4r2"],
    MaterialWrapper: ["MaterialIcon__container___q8gKIx8"],
    MaterialWrapperWrapper: ["GridItemView__image___yMoKOZV"],
    MaterialNumberWrapper: ["MaterialIcon__indicatorContainer___Cqtax_Y"],
    MaterialNumber: ["MaterialIcon__indicator___SHwlndJ", "MaterialIcon__type-very-small___UMzQ3ir", "MaterialIcon__neutral___SYsHXAa"],
    MaterialOuter: ["GridItemView__container___xP2uJz8"],
    MaterialNameText: ["GridItemView__name___h3yX9Lm", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    SmallButton: ["Button__darkInline___z_YKa91", "Button__dark___vdJbcc8", "Button__btn___UJGZ1b7", "Button__inline___Ffw9bbn"],
    HeaderRow: ["FormComponent__containerPassive___FrBdyGU", "forms__passive___biRUiE5", "forms__form-component___yTgP_Qa"],
    HeaderLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    HeaderContent: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"]
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
 
/* item ticker color */
.ColoredIcon__label___OU1I4oP {
    color: #cccccc;
}
 div.GridItemView__container___xP2uJz8 {
	background-color: #222;
}
 
/* full item name centering */
.GridItemView__name___h3yX9Lm {
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
div.I\\+wRdIa9eLSzRZvSi9Grew\\=\\= div.T5C45pTOW9QTzokWPqLQJg\\=\\= div.E7OLUChYCexMUgOolKYjOQ\\=\\=
{
  height: 36px;
  width: 36px;
}
 
/* items in planet view */
div.\\_96GJG8NkoHVb-vZDam7qHg\\=\\= div.T5C45pTOW9QTzokWPqLQJg\\=\\= div.E7OLUChYCexMUgOolKYjOQ\\=\\=:before
{
  height: 20px;
  width: 20x;
  font-size: 20px;
}
 
/* default :before element to prepare for new icon*/
div.E7OLUChYCexMUgOolKYjOQ\\=\\=:before
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
 
/* default :before element to prepare for new secondary corner icon */
/*
div.nlQirpSkdLH0a6\\+C4lhduA\\=\\=:before
{
  position: absolute;
  content: "";
 
  opacity: 0.2;
  z-index: -1;
  -justify-content: right;
  -align-items: right;
  -display: flex;
  -vertical-align: bottom;
  -align-content: right;
  -width: 10%;
  -height: 10%;
  font-size: 15px;
  bottom: 1px;
  left: -1px;
  -top: 20px;
}
*/
 
/* colored overlay icon */
div.nlQirpSkdLH0a6\\+C4lhduA\\=\\=:before
{
  position: absolute;
  content: ""; /* will become icon */
 
  opacity: 0.1;
  z-index: -1;
  font-size: 20pt;
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
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title^="Advanced Thermal"i] div:before 
{
  content: "🔥";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title*="Anti-Rad"i] div:before 
{
  content: "⚛";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.4;
}
 
div[title^="Advanced Anti-Rad"i] div:before 
{
  font-size: 25px;
}
 
div[title^="Specialized Anti-Rad"i] div:before 
{
  font-size: 30px;
}
 
/*
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
  background: linear-gradient(135deg, rgb(145 129 43), rgb(120 72 7))
}
 
div[title="Shielded Connectors"],
div[title="Blue Gold"]
{
  background: linear-gradient(135deg, rgb(145 129 43), rgb(70 72 200))
}
 
div[title="Air Scrubber"]
{
  background: linear-gradient(135deg, rgb(30 96 58),  rgb(51, 26, 76));
}
 
 
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
 
div[title^="Water"] {
  background: linear-gradient(135deg, rgb(122 80 55), rgb(18 74 124))
}
 
/* chemicals bg colors */
div[title*="Substance"], 
div[title*="Chemical"], 
div[title="Liquid Crystals"], 
div[title*="Agent"], 
div[title*="Flux"], 
div[title*="Resin"], 
div[title*="Colorant"],
div[title*="Acid"], 
div[title*="Bacteria"], 
div[title*="Soil"],
div[title*="Stabilizer"],
div[title*="Fertilizer"],
div[title*="ThermoFluid"],
div[title*="Solution"] {
  background: linear-gradient(135deg, rgb(183, 46, 91), rgb(114 37 62))
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
/* 🧮🎫🎟 */
div[title*="memory"i]:before,
div[title*="process"i]:before,
div[title*="transistor"i]:before,
div[title*="circuit"i]:before {
  content: "🎟";
}
/*🧧🎟💿📼*/
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
div[title*="Kit"]:before {
  content: "🛠";
  font-size: 35px;
}
div[title*="Tank"]:before {
  content: "🛢";
  font-size: 35px;
}
div[title*="Protection"]:before,
div[title*="Plate"]:before,
div[title*="Shield"]:before {
  content: "🛡";
  font-size: 40px;
}
div[title*="Connectors"]:before {
  content: "🔌";
  font-size: 30px;
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
div[title*="Surgical"i]:before,
div[title*="Medical"i]:before {
  content: "🩺";
  font-size: 30px;
}
div[title*="Magnet"]:before {
  content: "🧲";
}
div[title*="Deco"]:before {
  content: "🖼";
}
div[title*="Solar"]:before {
  content: "⚡";
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
/* 🛌 */
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
 
 
div[title^="Water"]:before {
  content: "💧";
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
div.\\_6UivsDhXJylBr\\+\\+R9f05OQ\\=\\=:before
{
  content: "";
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
    "HeaderMinimizer": "Minimize Headers",
    "PendingContracts": "Pending Contracts"
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
    "PYRGOS": "CH-771a",
    "TALOSIA": "DC-823b",
    "ORM": "DW-456g",
    "MANIFOLD": "EL-179b",
    "NOVA UNALASKA": "EZ-476b",
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
    "GEIDI PRIME": "KW-358b",
    "ETHERWIND": "KW-688c",
    "KINZA": "LG-418b",
    "PLANET MC PLANETFACE": "LG-913e",
    "ARATORA": "LS-231b",
    "GRIFFONSTONE": "LS-300c",
    "JURA": "OF-259d",
    "BERTHIER": "OF-375b",
    "DANAKIL": "OT-442b",
    "IIRON": "OT-580a",
    "MONTEM": "OT-580b",
    "VALLIS": "OT-580c",
    "PALLADA": "OT-580d",
    "PRISM": "OT-889a",
    "SALADIN": "PG-899b",
    "NASCENT": "QJ-149c",
    "ACELAND": "QJ-684b",
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
    "PROMITOR": "VH-331a",
    "HELION PRIME": "VH-331d",
    "ODYSSEUS": "VH-331f",
    "AVALON": "VH-331g",
    "HYDRON": "VH-331i",
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
    console.log("Getting FIO Contract data");
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
                console.log("PMMG: Retreived Burn from FIO");
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
    console.log("PMMG: FIO Sending Contract Request");
    xhr.timeout = 20000;
    xhr.open("GET", "https://rest.fnar.net" + "/contract/allcontracts");
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    console.log("Contract Data");
    console.log(contracts);
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
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* createTextSpan */])("Minimize Headers By Default"));
    minLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* createToolTip */])("Minimize header rows on CXs and contracts by default.", "right"));
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
            const type = Array.from(form.getElementsByClassName("C-ECb-ove1tla6qsiV43ew== ivG24qtQ92kbysLTNeWJvw=="));
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
    label.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].HeaderLabel);
    label.textContent = labelText;
    row.appendChild(label);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].HeaderContent);
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQ3OTIxOWIyMDhmMmNjMjNlNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGVja2xpc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGlnaHRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2NhbE1hcmtldEFkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlUnVubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU3RhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1JlcGFpcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9DaGF0LnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvRmluYW5jZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVC9CdXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU2hlZXRUYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL1dlYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL05vdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9YSVQvU29ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VDcmVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9JbnZlbnRvcnlPcmdhbml6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlck1pbmltaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGVuZGluZ0NvbnRyYWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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bkQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL2VPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBOzs7Ozs7OztBQ3ZDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUFBO0FBQUE7QUFDSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1AsZ01BQWdNLCtGQUErRjtBQUFBO0FBQUE7QUFDeFIseUlBQXlJO0FBQUE7QUFBQTtBQUN6STtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7Ozs7Ozs7O0FDcjBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbE5BO0FBQUE7QUFBQTtBQUFrRztBQUNqRTtBQUMxQixrQ0FBa0M7QUFBQTtBQUFBO0FBQ2xDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekMscUNBQXFDLHFFQUFjO0FBQ25ELGdDQUFnQyxxRUFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBZTtBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsK0VBQStFLEVBQUU7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekM7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscURBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEM7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBSztBQUN4QztBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQSx1QkFBdUIsOERBQThEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYyxrREFBa0QscUNBQXFDLDJEQUEyRCxvREFBb0Q7QUFDMU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBOEQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ3hUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNRO0FBQ0o7QUFDTjtBQUNjO0FBQ2Q7QUFDTjtBQUNVO0FBQ0o7QUFDUTtBQUN1QztBQUN4QjtBQUNqQjtBQUNWO0FBQ2tCO0FBQ0E7QUFDSjtBQUNKO0FBQ1k7QUFDTjtBQUNFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMERBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQVM7QUFDYjtBQUNBLElBQUksMkVBQU87QUFDWDtBQUNBLElBQUksbUZBQWU7QUFDbkI7QUFDQSxJQUFJLGdGQUFZO0FBQ2hCLHVCQUF1QixtRUFBWTtBQUNuQyxZQUFZLGlFQUFXO0FBQ3ZCLFlBQVksdUVBQWM7QUFDMUIsWUFBWSx1REFBTTtBQUNsQixZQUFZLHdFQUFjO0FBQzFCLFlBQVksNkRBQVM7QUFDckIsWUFBWSwrREFBVTtBQUN0QixZQUFZLDZEQUFTO0FBQ3JCLFlBQVksNkRBQVM7QUFDckIsWUFBWSwyRUFBZ0I7QUFDNUIsWUFBWSxnRkFBa0I7QUFDOUIsWUFBWSxxRUFBYTtBQUN6QixZQUFZLG9FQUFZO0FBQ3hCLFlBQVksb0VBQVk7QUFDeEIsWUFBWSwwRUFBZTtBQUMzQixZQUFZLDRFQUFnQjtBQUM1QixZQUFZLDRFQUFnQjtBQUM1QixZQUFZLDBEQUFPO0FBQ25CLFlBQVksNEVBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyR0E7QUFBeUc7QUFDbEc7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsZ0NBQWdDLDJFQUFvQjtBQUNwRCx3Q0FBd0MscUVBQWMsTUFBTSxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyRUFBb0I7QUFDckQseUNBQXlDLHFFQUFjLE1BQU0sU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3hDRDtBQUFBO0FBQXNDO0FBQ2tCO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0QsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkRBQVE7QUFDaEUsc0ZBQXNGLDJCQUEyQjtBQUNqSCxzQ0FBc0MscUVBQWMsTUFBTSxRQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUEwQztBQUNPO0FBQ0E7QUFDMUM7QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUVBQVU7QUFDckU7QUFDQSxnQkFBZ0Isa0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNkO0FBQ0Y7QUFDTTtBQUNOO0FBQ1U7QUFDRjtBQUNOO0FBQ0c7QUFDSztBQUNJO0FBQ0Y7QUFDOEI7QUFDakM7QUFDVDtBQUNVO0FBQ1o7QUFDZ0I7QUFDM0M7QUFDUCxXQUFXLG1FQUFVO0FBQ3JCLGVBQWUsOERBQVc7QUFDMUIsY0FBYyw2REFBVTtBQUN4QixrQkFBa0IsaUVBQWM7QUFDaEMsWUFBWSwyREFBUTtBQUNwQixrQkFBa0Isd0VBQWM7QUFDaEMsV0FBVyw4REFBTztBQUNsQixZQUFZLDJEQUFRO0FBQ3BCLFlBQVksbUVBQWdCO0FBQzVCLGdCQUFnQiwrREFBUTtBQUN4QixpQkFBaUIsc0VBQWE7QUFDOUIsZUFBZSxpRUFBVztBQUMxQixrQkFBa0IsbUVBQVU7QUFDNUIsWUFBWSxtRUFBVTtBQUN0QixhQUFhLHlEQUFLO0FBQ2xCLGFBQWEseURBQUs7QUFDbEIsWUFBWSwwREFBSztBQUNqQixhQUFhLDBEQUFLO0FBQ2xCLGFBQWEsb0VBQVU7QUFDdkIsY0FBYyxvRUFBVTtBQUN4QixpQkFBaUIsb0VBQVU7QUFDM0Isa0JBQWtCLG9FQUFVO0FBQzVCLFlBQVksd0RBQUk7QUFDaEIsWUFBWSx3RUFBWTtBQUN4QixFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLDJEQUFRO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUVBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0EscUVBQXFFLDRFQUE0RSxFQUFFO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUN4SkQ7QUFBQTtBQUFvRTtBQUM3RDtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBLG9CQUFvQixxRUFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFFQUFjO0FBQzFDLHlCQUF5QixpRUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEMscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUF1STtBQUMxRjtBQUN0QztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQWE7QUFDbEQsMENBQTBDLHFEQUFLO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQWE7QUFDakQseUNBQXlDLHFEQUFLO0FBQzlDO0FBQ0E7QUFDQSx1QkFBdUIscUVBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5RUFBa0I7QUFDOUMsNEJBQTRCLHlFQUFrQjtBQUM5Qyw0QkFBNEIseUVBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2Qyx5QkFBeUIsb0VBQWE7QUFDdEMsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWM7QUFDeEMsMEJBQTBCLG9FQUFhO0FBQ3ZDLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0EsbUdBQW1HLDJCQUEyQjtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0Esc0dBQXNHLDJCQUEyQjtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFhO0FBQzFDLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRSxxREFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0VBQWE7QUFDaEQsd0NBQXdDLHFEQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG9FQUFhO0FBQ2xELDBDQUEwQyxxREFBSztBQUMvQztBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrRUFBVSxDQUFDLHFEQUFLLGNBQWMscURBQUs7QUFDakU7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLCtDQUErQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkMsa0NBQWtDLHFEQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixrRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxxREFBSztBQUN2QyxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxtRUFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0Msc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkJBQTZCLHFFQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0Msc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBZSxlQUFlLDJEQUFZO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHVCQUF1QixRQUFRLEVBQUU7QUFDbkYsS0FBSyxFQUFFLHFEQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQSx1Q0FBdUMscURBQUs7QUFDNUMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdjQTtBQUFBO0FBQUE7QUFBQTtBQUFxRTtBQUNwQztBQUMxQjtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixJQUFJLG1FQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekMsb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ3JEQTtBQUFBO0FBQXdDO0FBQ2pDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSw0QkFBNEI7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw0QkFBNEI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw0QkFBNEI7QUFDaEg7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVOQTtBQUFBO0FBQW9GO0FBQzdFO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFhO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxrRUFBVztBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1GQUFtRiwyQkFBMkIsNERBQTRELDJCQUEyQjtBQUNyTTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFjO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUdBQW1HLDJCQUEyQiwrREFBK0QsMkJBQTJCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYztBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlRQTtBQUFBO0FBQXVEO0FBQ2hEO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLG1DQUFtQztBQUNySTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0cscUNBQXFDO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBK0Y7QUFDekQ7QUFDL0I7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZFQUFzQiwwREFBMEQsMERBQVU7QUFDL0cscUJBQXFCLDZFQUFzQiw0REFBNEQsMERBQVU7QUFDakgscUJBQXFCLDZFQUFzQiwyREFBMkQsMERBQVU7QUFDaEgscUJBQXFCLDZFQUFzQixvREFBb0QsMERBQVU7QUFDekcscUJBQXFCLDZFQUFzQix5REFBeUQsMERBQVU7QUFDOUc7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwREFBVSxXQUFXLDBEQUFVO0FBQ2xFLHlCQUF5Qiw2RUFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxRUFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBYyxrQ0FBa0MscURBQXFEO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSTtBQUNsRztBQUNNO0FBQ1c7QUFDVTtBQUNyRDtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkJBQTJCLDhFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEVBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkRBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLHFFQUFjLCtEQUErRCxtQ0FBbUMscURBQXFELHFDQUFxQztBQUMxTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjLENBQUMsc0VBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxRUFBYywyQ0FBMkMsMkJBQTJCO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWMsbUZBQW1GLDJCQUEyQjtBQUMzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWMsb0NBQW9DLDJCQUEyQjtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBLDZCQUE2QixxREFBSztBQUNsQztBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QyxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUM3V0E7QUFBQTtBQUF1RTtBQUNoRTtBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDc0k7QUFDaEc7QUFDYTtBQUM1QztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxzQkFBc0Isa0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlFQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRFQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSwwQkFBMEIsdUVBQWM7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpRUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFhO0FBQ3BDLGlCQUFpQixxRUFBYztBQUMvQix5QkFBeUIsMERBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFhO0FBQ3BDLGlCQUFpQixxRUFBYztBQUMvQiwrREFBK0QsMERBQVUsV0FBVywwREFBVTtBQUM5RjtBQUNBLGVBQWUscUVBQWMsS0FBSyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ2pDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUEwRztBQUN4RDtBQUMzQztBQUNQLElBQUksb0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQSxRQUFRLG9FQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBLHFCQUFxQixxRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWMsdUNBQXVDLHFEQUFxRCxtREFBbUQscURBQXFEO0FBQzdPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWMsdUNBQXVDLHFEQUFxRCxtREFBbUQscURBQXFEO0FBQzdPO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0RUFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxvRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxRUFBYztBQUM1QztBQUNBO0FBQ0Esa0NBQWtDLGlFQUFVO0FBQzVDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxzRUFBYSwwQkFBMEIsc0VBQWE7QUFDN0c7QUFDQTtBQUNBLFFBQVEsc0VBQWEsNEJBQTRCLHNFQUFhO0FBQzlEO0FBQ0E7QUFDQSxXQUFXLHNFQUFhLHVDQUF1QyxzRUFBYTtBQUM1RTs7Ozs7Ozs7QUM1SkE7QUFBQTtBQUFBO0FBQWtHO0FBQ25EO0FBQ3hDO0FBQ1AsSUFBSSxvRUFBYTtBQUNqQjtBQUNBLFFBQVEsc0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBVTtBQUN6QyxpQ0FBaUMscUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWU7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQzdHQTtBQUFBO0FBQUE7QUFBOEw7QUFDN0o7QUFDMUI7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBSztBQUNwQywrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCLHFFQUFjO0FBQzVDLGlDQUFpQyx3RUFBaUI7QUFDbEQsaUNBQWlDLHdFQUFpQjtBQUNsRCwyQkFBMkIsOENBQThDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixzRUFBZTtBQUMzQztBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEVBQW1CO0FBQ3hDO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQyw2QkFBNkIsMEVBQW1CO0FBQ2hELDZCQUE2QiwwRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBFQUFtQjtBQUM1Qyx5QkFBeUIsMEVBQW1CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDLCtCQUErQixxREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEVBQW1CO0FBQzdDLDBCQUEwQiwwRUFBbUI7QUFDN0MsS0FBSztBQUNMLG9CQUFvQiw2RUFBc0I7QUFDMUM7QUFDQSxvQkFBb0IsNkVBQXNCO0FBQzFDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDLGdDQUFnQyxxREFBSztBQUNyQztBQUNBO0FBQ0EsaUNBQWlDLHlFQUFrQjtBQUNuRDtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFrQiw0QkFBNEIseUVBQWtCO0FBQ2hGO0FBQ0E7QUFDQSw4QkFBOEIseUVBQWtCLG9CQUFvQix5RUFBa0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RTtBQUNBLDBHQUEwRyx5RUFBa0IsV0FBVyx5RUFBa0I7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyx5RUFBa0IsV0FBVyx5RUFBa0I7QUFDako7QUFDQSxRQUFRLGtFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCLHNFQUFlO0FBQzNDOzs7Ozs7OztBQzlMQTtBQUFBO0FBQUE7QUFBNEo7QUFDM0g7QUFDMUI7QUFDUCxJQUFJLG9FQUFhO0FBQ2pCO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0EsUUFBUSxzRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBVTtBQUN6QyxpQ0FBaUMscUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0EsaUNBQWlDLHFEQUFLO0FBQ3RDO0FBQ0E7QUFDQSw0QkFBNEIsc0VBQWU7QUFDM0M7QUFDQSx5Q0FBeUMscURBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDLDZCQUE2QiwwRUFBbUI7QUFDaEQsNkJBQTZCLDBFQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEVBQW1CO0FBQzVDLHlCQUF5QiwwRUFBbUI7QUFDNUM7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQUs7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxxREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEMsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwRUFBbUI7QUFDN0MsMEJBQTBCLDBFQUFtQjtBQUM3QyxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDLGdDQUFnQyxxREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5RUFBa0IsNEJBQTRCLHlFQUFrQjtBQUNoRjtBQUNBO0FBQ0EsOEJBQThCLHlFQUFrQixvQkFBb0IseUVBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsc0VBQWU7QUFDM0M7QUFDQTs7Ozs7Ozs7QUM3TUE7QUFBQTtBQUFzQztBQUN1RDtBQUN0RjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDJEQUFRO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwyREFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSx3QkFBd0IsRUFBRTtBQUNsRyx1Q0FBdUMsb0VBQWE7QUFDcEQ7QUFDQTtBQUNBLDZFQUE2RSxxRUFBYyxNQUFNLDJFQUFvQix5QkFBeUI7QUFDOUk7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG9FQUFhO0FBQ3BEO0FBQ0E7QUFDQSw2RUFBNkUscUVBQWMsTUFBTSwyRUFBb0IsV0FBVztBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDdkREO0FBQUE7QUFBQTtBQUFpSTtBQUMzRjtBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkRBQVE7QUFDbEQ7QUFDQTtBQUNBLGlCQUFpQixvRUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLDhFQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBFQUFtQjtBQUNyRCw2QkFBNkIscUVBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFFQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFjO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyR0E7QUFBeUc7QUFDbEc7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyRUFBb0IsQ0FBQyxvRUFBYTtBQUNsRSx3Q0FBd0MscUVBQWMsTUFBTSxJQUFJO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBc0M7QUFDd0I7QUFDTjtBQUNqRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSw2Q0FBNkMsMkRBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFFQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0VBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdFQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHLHFEQUFxRCx1R0FBdUcscURBQXFEO0FBQ3pUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3RUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhHQUE4RyxxREFBcUQ7QUFDbks7QUFDQTtBQUNBO0FBQ0EscURBQXFELGtFQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdFQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixxREFBcUQ7QUFDekk7QUFDQSw4R0FBOEcscURBQXFEO0FBQ25LO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ2xIRDtBQUFBO0FBQXNDO0FBQ2tCO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0QsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkJBQTJCO0FBQ2pILHdEQUF3RCwyREFBUTtBQUNoRSxzQ0FBc0MscUVBQWMsTUFBTSxRQUFRLEdBQUcsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7OztBQ3JDRDtBQUFBO0FBQXNDO0FBQ2lDO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvRUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsMkRBQVE7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsMkJBQTJCO0FBQ2xIO0FBQ0E7QUFDQSxxQ0FBcUMscUVBQWMsS0FBSyxRQUFRO0FBQ2hFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7QUM1Q0Q7QUFBQTtBQUFBO0FBQXNDO0FBQ0U7QUFDSztBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyREFBUTtBQUMzRCx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsa0VBQVM7QUFDdkYsa0ZBQWtGLGtFQUFTO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsa0VBQVM7QUFDdkYsa0ZBQWtGLGtFQUFTO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsa0VBQVM7QUFDdkYsa0ZBQWtGLGtFQUFTO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNySEE7QUFBQTtBQUFzQztBQUNjO0FBQzdDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQXdDLEVBQUU7QUFDNUU7QUFDQTtBQUNBLGdCQUFnQixxRUFBYztBQUM5QjtBQUNBO0FBQ0EsK0NBQStDLDJEQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFnRTtBQUM1RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELHNDQUFzQyxrQkFBa0IsaUNBQWlDLFVBQVUsSUFBSSxVQUFVO0FBQ2pILHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQSwrQkFBK0IsaUVBQVU7QUFDekM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDOUNEO0FBQUE7QUFBQTtBQUFzQztBQUNOO0FBQ29DO0FBQzdEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFjO0FBQzlCO0FBQ0E7QUFDQSxnREFBZ0QsMkRBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLDRDQUE0QyxFQUFFO0FBQ3hIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDLHdDQUF3QyxxREFBSztBQUM3QyxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMERBQTBELENBQUMsaUVBQVUsZ0JBQWdCLEVBQUU7QUFDdkYsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDMUREO0FBQUE7QUFBQTtBQUFxQztBQUNDO0FBQ3lCO0FBQ3hEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkRBQVE7QUFDckQ7QUFDQSx5REFBeUQsMkRBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSxnQ0FBZ0Msb0VBQVc7QUFDM0M7QUFDQSw4RUFBOEUsb0VBQVc7QUFDekY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esd0JBQXdCLGtFQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDbkNEO0FBQWdGO0FBQ3pFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxRUFBYztBQUNsRCwrREFBK0QsQ0FBQyxpRUFBVSxtQkFBbUIsRUFBRTtBQUMvRixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUFzQztBQUNPO0FBQ3VCO0FBQzdEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLFFBQVEsaUVBQVU7QUFDbEIsd0RBQXdELDJEQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDZEQUE2RCwyREFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSwyREFBUTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvRUFBb0UsMkRBQVE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxxREFBcUQ7QUFDeEg7QUFDQTtBQUNBLDhFQUE4RSxxREFBcUQ7QUFDbkk7QUFDQSx1Q0FBdUMscUVBQWM7QUFDckQ7QUFDQTtBQUNBLG9FQUFvRSwyREFBUTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrRUFBUyx1Q0FBdUMsa0VBQVM7QUFDekYsaUhBQWlILGtFQUFTO0FBQzFILG1FQUFtRSxxREFBcUQ7QUFDeEgsdUNBQXVDLHFFQUFjO0FBQ3JEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDL0ZEO0FBQUE7QUFBb0M7QUFDRTtBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkRBQVE7QUFDOUQsa0RBQWtELDJEQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBNko7QUFDdkg7QUFDTjtBQUNzQztBQUMvRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJEQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwyREFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMkRBQVE7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwyREFBUTtBQUNoRSxnREFBZ0Qsc0VBQWU7QUFDL0QseUJBQXlCLDhFQUF1QjtBQUNoRCxtREFBbUQsMkRBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CLHNFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDJEQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtRUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CLHNFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0VBQVc7QUFDL0M7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVU7QUFDdEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRFQUFtQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJEQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1Q0FBdUMsNEVBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSwyREFBUTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscURBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxREFBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJEQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxREFBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJEQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJEQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwyREFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QyxzREFBc0QsMkRBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9DQUFvQyw0RUFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9DQUFvQyw0RUFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyREFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyREFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0VBQWEsY0FBYyxzRUFBYTtBQUNqRDtBQUNBO0FBQ0EsUUFBUSxzRUFBYSxnQkFBZ0Isc0VBQWE7QUFDbEQ7QUFDQTtBQUNBLFdBQVcsc0VBQWEsMkJBQTJCLHNFQUFhO0FBQ2hFOzs7Ozs7OztBQ3pkQTtBQUFBO0FBQUE7QUFBb0M7QUFDRTtBQUNOO0FBQ3pCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpRUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHNCQUFzQixpRUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTtBQUNEO0FBQ0EsNkNBQTZDLDJEQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyREFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscURBQUs7QUFDOUI7QUFDQTtBQUNBLDJCQUEyQixxREFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlFQTtBQUFBO0FBQTRFO0FBQ3RDO0FBQy9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSwyREFBUTtBQUMzRTtBQUNBLFFBQVEseUVBQWtCO0FBQzFCO0FBQ0EsNkRBQTZELDJEQUFRO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxRUFBYyxJQUFJLFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUVBQWM7QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU0NzkyMTliMjA4ZjJjYzIzZTcyIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzLCBQbGFuZXROYW1lcywgU3lzdGVtTmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBTdHlsZSwgQ2F0ZWdvcnlDb2xvcnMsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKGZpbGVEYXRhLCBmaWxlTmFtZSwgaXNKU09OID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtpc0pTT04gPyBKU09OLnN0cmluZ2lmeShmaWxlRGF0YSkgOiBmaWxlRGF0YV0sIHsgdHlwZTogXCJ0ZXh0L3BsYWluXCIgfSk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc3QgdXJsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdXJsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XHJcbiAgICB1cmxFbGVtZW50LmhyZWYgPSB1cmw7XHJcbiAgICB1cmxFbGVtZW50LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgIHVybEVsZW1lbnQuY2xpY2soKTtcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShodG1sU3RyaW5nKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XHJcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbihvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbkxhYmVsO1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VkU2Vjb25kcykge1xyXG4gICAgY29uc3QgZXRhID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBldGEuc2V0U2Vjb25kcyhldGEuZ2V0U2Vjb25kcygpICsgcGFyc2VkU2Vjb25kcyk7XHJcbiAgICBjb25zdCBkaWZmVGltZSA9IE1hdGguYWJzKGV0YS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKTtcclxuICAgIGNvbnN0IGRpZmZEYXlzID0gTWF0aC5mbG9vcihkaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBsZXQgcmV0ID0gZXRhLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xyXG4gICAgaWYgKGRpZmZEYXlzID4gMCkge1xyXG4gICAgICAgIHJldCArPSBgICske2RpZmZEYXlzfWRgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xyXG4gICAgY29uc3QgZGF5cyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqZC8pO1xyXG4gICAgY29uc3QgaG91cnMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmgvKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKm0vKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKnMvKTtcclxuICAgIGxldCBwYXJzZWRTZWNvbmRzID0gMDtcclxuICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChkYXlzWzFdKSAqIDg2NDAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGhvdXJzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChob3Vyc1sxXSkgKiAzNjAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbnV0ZXMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KG1pbnV0ZXNbMV0pICogNjA7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kcykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoc2Vjb25kc1sxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkU2Vjb25kcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFNwYW4odGV4dCwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIG5ld1NwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHREaXYodGV4dCwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1NwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gbmV3U3BhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmluYW5jaWFsVGV4dEJveChwcmltYXJ5VGV4dCwgc2Vjb25kYXJ5VGV4dCwgcHJpbWFyeVRleHRDb2xvciwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiZmluLWJveFwiKTtcclxuICAgIGNvbnN0IHByaW1hcnlUZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuY29sb3IgPSBwcmltYXJ5VGV4dENvbG9yO1xyXG4gICAgcHJpbWFyeVRleHRTcGFuLnRleHRDb250ZW50ID0gcHJpbWFyeVRleHQ7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQocHJpbWFyeVRleHRTcGFuKTtcclxuICAgIGNvbnN0IHNlY29uZGFyeVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2Vjb25kYXJ5VGV4dERpdi50ZXh0Q29udGVudCA9IHNlY29uZGFyeVRleHQ7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIxMHB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMVwiO1xyXG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjJweFwiO1xyXG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5jb2xvciA9IFwiIzk5OVwiO1xyXG4gICAgYm94LmFwcGVuZENoaWxkKHNlY29uZGFyeVRleHREaXYpO1xyXG4gICAgcmV0dXJuIGJveDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEludmVudG9yeUFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaW52ZW50b3J5W1wiSW52ZW50b3J5XCJdW2ldW1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gdGlja2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEJ1cm5BbW91bnQodGlja2VyLCBpbnZlbnRvcnkpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdW2ldW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XHJcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbYV0gfHwgIU1hdGVyaWFsTmFtZXNbYl0pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbE5hbWVzW2FdWzFdLmxvY2FsZUNvbXBhcmUoTWF0ZXJpYWxOYW1lc1tiXVsxXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhIHx8ICFwbGFuZXQpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYW1lXCJdICYmIGRhdGFbaV1bXCJQbGFuZXROYW1lXCJdLnRvTG93ZXJDYXNlKCkgPT0gcGxhbmV0LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdICYmIFBsYW5ldE5hbWVzW3BsYW5ldF0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XS50b0xvd2VyQ2FzZSgpID09IGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG1hdGNoID0gdGV4dC5tYXRjaCgvQCAoW0EtWl17Mn0tWzAtOV17M30gW2Etel0pIEJhc2UvKTtcclxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdLnJlcGxhY2UoXCIgXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLXogXSopIC0gKFtBLXogXSopIEJhc2UvKTtcclxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLXogXSopIChbQS16XSkgQmFzZS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBTeXN0ZW1OYW1lc1ttYXRjaFsxXS50b1VwcGVyQ2FzZSgpXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtTmFtZXNbbWF0Y2hbMV0udG9VcHBlckNhc2UoKV0gKyBtYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgW0EtWl17Mn0tWzAtOV17M30gLSAoW0EteiBdKikgQmFzZS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFR5cGVFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludk5hbWUodGV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFR5cGVFcnJvcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBsYW5ldE5hbWUodGV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goL1xcKCguKj8pXFwpLyk7XHJcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShzdG9yYWdlTmFtZSwgY2FsbGJhY2tGdW5jdGlvbiwgcGFyYW1zKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoc3RvcmFnZU5hbWUpLnRoZW4oY2FsbGJhY2tGdW5jdGlvbihwYXJhbXMpKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW3N0b3JhZ2VOYW1lXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHJlc3VsdCwgcGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHdoaWxlIChlbGVtLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2V0dGluZ3MocmVzdWx0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgY2FsbGJhY2tGdW5jdGlvbiwgdXJsLCByZXF1ZXN0VHlwZSA9IFwiR0VUXCIsIGhlYWRlciwgY29udGVudCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgRGF0YSBDb3VsZCBOb3QgQmUgTG9hZGVkISBUaW1lZCBPdXQhXCI7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHRpbGUsIHBhcmFtZXRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKHJlcXVlc3RUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgeGhyLnNlbmQoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KHRpY2tlciwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiLCBhbW91bnQgPSBcIm5vbmVcIiwgdGV4dCA9IGZhbHNlLCBzbWFsbCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyXSAmJiB0aWNrZXIgIT0gXCJTSFBUXCIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFtcIlNoaXBtZW50XCJdKVswXTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gKE1hdGVyaWFsTmFtZXNbdGlja2VyXSB8fCBbdW5kZWZpbmVkLCBcInNoaXBtZW50XCJdKVsxXTtcclxuICAgIGNvbnN0IG1hdFRleHQgPSBjcmVhdGVUZXh0U3Bhbih0aWNrZXIsIGNsYXNzTmFtZSk7XHJcbiAgICBtYXRUZXh0LmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0KSk7XHJcbiAgICBjb25zdCBtYXRUZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXRUZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0VGV4dFdyYXBwZXIpKTtcclxuICAgIG1hdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG1hdFRleHQpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWwuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsRWxlbWVudCkpO1xyXG4gICAgbWF0ZXJpYWwuYXBwZW5kQ2hpbGQobWF0VGV4dFdyYXBwZXIpO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuYmFja2dyb3VuZCA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVswXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmNvbG9yID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzFdO1xyXG4gICAgbWF0ZXJpYWwudGl0bGUgPSBuYW1lO1xyXG4gICAgbWF0ZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaG93QnVmZmVyKFwiTUFUIFwiICsgdGlja2VyLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBtYXRlcmlhbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbFdyYXBwZXIpKTtcclxuICAgIG1hdGVyaWFsV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbFdyYXBwZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdGVyaWFsV3JhcHBlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsV3JhcHBlcldyYXBwZXIpKTtcclxuICAgIG1hdGVyaWFsV3JhcHBlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxXcmFwcGVyKTtcclxuICAgIGNvbnN0IG91dGVyTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3V0ZXJMYXllci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxPdXRlcikpO1xyXG4gICAgb3V0ZXJMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBvdXRlckxheWVyLmFwcGVuZENoaWxkKG1hdGVyaWFsV3JhcHBlcldyYXBwZXIpO1xyXG4gICAgaWYgKGFtb3VudCAmJiBhbW91bnQgIT0gXCJub25lXCIpIHtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbE51bWJlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1hdGVyaWFsTnVtYmVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxOdW1iZXJXcmFwcGVyKSk7XHJcbiAgICAgICAgbWF0ZXJpYWxXcmFwcGVyLmFwcGVuZENoaWxkKG1hdGVyaWFsTnVtYmVyV3JhcHBlcik7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxOdW1iZXIgPSBjcmVhdGVUZXh0RGl2KGFtb3VudCwgY2xhc3NOYW1lKTtcclxuICAgICAgICBtYXRlcmlhbE51bWJlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxOdW1iZXIpKTtcclxuICAgICAgICBtYXRlcmlhbE51bWJlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRleHQpIHtcclxuICAgICAgICBjb25zdCB0ZXh0RWxlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTmFtZVRleHQpKTtcclxuICAgICAgICBjb25zdCB0ZXh0RWxlbSA9IGNyZWF0ZVRleHRTcGFuKG5hbWUsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGV4dEVsZW1XcmFwcGVyLmFwcGVuZENoaWxkKHRleHRFbGVtKTtcclxuICAgICAgICBvdXRlckxheWVyLmFwcGVuZENoaWxkKHRleHRFbGVtV3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hdC1lbGVtZW50LXNtYWxsXCIpO1xyXG4gICAgICAgIHJldHVybiBtYXRlcmlhbFdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hdC1lbGVtZW50LWxhcmdlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dGVyTGF5ZXI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmsodGV4dCwgY29tbWFuZCkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoY29tbWFuZCk7IH0pO1xyXG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaW5rRGl2LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgbGlua0Rpdi5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaW5rRGl2O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QnVmZmVyKGNvbW1hbmQpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XHJcbiAgICBpZiAoYnV0dG9uID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRTdWJtaXRDb21tYW5kID0gKGlucHV0LCBjbWQpID0+IHtcclxuICAgICAgICBjaGFuZ2VWYWx1ZShpbnB1dCwgY21kKTtcclxuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xyXG4gICAgfTtcclxuICAgIG1vbml0b3JPbkVsZW1lbnRDcmVhdGVkKFNlbGVjdG9yLkJ1ZmZlclRleHRGaWVsZCwgKGVsZW0pID0+IGFkZFN1Ym1pdENvbW1hbmQoZWxlbSwgY29tbWFuZCkpO1xyXG4gICAgYnV0dG9uLmNsaWNrKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUoaW5wdXQsIHZhbHVlKSB7XHJcbiAgICB2YXIgcHJvcERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvd1tcIkhUTUxJbnB1dEVsZW1lbnRcIl0ucHJvdG90eXBlLCBcInZhbHVlXCIpO1xyXG4gICAgaWYgKHByb3BEZXNjcmlwdG9yID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyID0gcHJvcERlc2NyaXB0b3Iuc2V0O1xyXG4gICAgaWYgKG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbmF0aXZlSW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XHJcbiAgICB2YXIgaW5wdXRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgaW5wdXRFdmVudC5pbml0RXZlbnQoJ2lucHV0JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIG1vbml0b3JPbkVsZW1lbnRDcmVhdGVkKHNlbGVjdG9yLCBjYWxsYmFjaywgb25seU9uY2UgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBnZXRFbGVtZW50c0Zyb21Ob2RlcyA9IChub2RlcykgPT4gKEFycmF5LmZyb20obm9kZXMpKS5mbGF0TWFwKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG51bGwgOiBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEVsZW1lbnRzRnJvbU5vZGVzKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmx5T25jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGNvbnRhaW5lclNlbGVjdG9yID0gJ2JvZHknO1xyXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XHJcbiAgICBsZXQgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gfHwgd2luZG93W1wiV2ViS2l0TXV0YXRpb25PYnNlcnZlclwiXTtcclxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRpb25zT2JzZXJ2ZWQpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNDbGVhbnVwKGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRlZENsZWFudXAoY2xhc3NOYW1lLCBlbGVtZW50KSB7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVycyhidWZmZXJDb2RlKSB7XHJcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKHRyYW5zbGF0ZSguLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonKSwgJyR7YnVmZmVyQ29kZX0nKV0vLi4vLi5gLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcclxuICAgIHZhciBub2RlO1xyXG4gICAgd2hpbGUgKG5vZGUgPSBub2Rlcy5pdGVyYXRlTmV4dCgpKSB7XHJcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlYUGF0aCh4cGF0aCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoeHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcclxuICAgIHZhciBzb3J0ZXIgPSBbXTtcclxuICAgIGlmICh0YWJsZS5jaGlsZHJlblsxXSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSByb3dzW2ldLmNoaWxkcmVuW2NvbHVtbl07XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc29ydGVyLnB1c2goW2l0ZW0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCwgcm93c1tpXV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRUeXBlID09IFwiYWxwaFwiKSB7XHJcbiAgICAgICAgc29ydGVyLnNvcnQodGFibGVTb3J0QWxwaCk7XHJcbiAgICB9XHJcbiAgICBzb3J0ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0YWJsZS5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sIGl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGFibGVTb3J0QWxwaChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZSh0aWxlLCBoZWFkZXJzKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG4gICAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgdGhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgcmV0dXJuIHRib2R5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sVGlwKHRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGA8c3BhbiBkYXRhLXRvb2x0aXA9XCIke3RleHR9XCIgZGF0YS10b29sdGlwLXBvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIiBjbGFzcz1cImtmVTc4RWFhT1ZiUVIyWU0wZWVHZXc9PVwiIHN0eWxlPVwiZmxvYXQ6IHJldmVydDtmb250LXNpemU6IDEycHg7bWFyZ2luLXRvcDotNHB4O1wiPuKTmDwvc3Bhbj5gO1xyXG4gICAgcmV0dXJuIHRvb2x0aXAuZmlyc3RDaGlsZCB8fCB0b29sdGlwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wdXBTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TcGFjZXIpO1xyXG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3BhY2VyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cElucHV0Um93KGxhYmVsLCB0ZXh0ID0gXCJcIiwgdG9vbHRpcCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xyXG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcclxuICAgIH1cclxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgICBjb25zdCBpbnB1dElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XHJcbiAgICBjb25zdCBpbnB1dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRJbnB1dC5zdHlsZS53aWR0aCA9IFwiODAlXCI7XHJcbiAgICBpbnB1dElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0SW5wdXQpO1xyXG4gICAgaW5wdXRJbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICByZXR1cm4gaW5wdXRSb3c7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwQ2hlY2tib3hSb3cobGFiZWwsIGVuYWJsZWQgPSBmYWxzZSwgdG9vbHRpcCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xyXG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcclxuICAgIH1cclxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgICBjb25zdCBpbnB1dElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XHJcbiAgICBjb25zdCBpbnB1dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgaW5wdXRJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dElucHV0KTtcclxuICAgIGlucHV0SW5wdXQuY2hlY2tlZCA9IGVuYWJsZWQ7XHJcbiAgICByZXR1cm4gaW5wdXRSb3c7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlT2ZQb3B1cFJvdyhyb3cpIHtcclxuICAgIGlmICghcm93IHx8ICFyb3cuY2hpbGRyZW5bMV0gfHwgIXJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQudmFsdWUgfHwgXCJcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tPZlBvcHVwUm93KHJvdykge1xyXG4gICAgaWYgKCFyb3cgfHwgIXJvdy5jaGlsZHJlblsxXSB8fCAhcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCB8fCBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxCdXR0b24obGFiZWwsIGNsaWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNtYWxsQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBjbGlja0Z1bmN0aW9uKC4uLnBhcmFtZXRlcnMpOyB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRyYWN0RGljdChjb250cmFjdHMsIHVzZXJuYW1lLCBjb250cmFjdGRpY3QpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJhY3RzW3VzZXJuYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb250cmFjdHNbdXNlcm5hbWVdW2ldO1xyXG4gICAgICAgIGNvbnRyYWN0ZGljdFtlbGVtZW50WydDb250cmFjdExvY2FsSWQnXV0gPSBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJPcmRlclNsb3RfX2NvbnRhaW5lcl9fX1lGeWs4YTdcIixcclxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nUHJvZHVjdGlvblF1ZXVlX190YWJsZV9fX2pIUUd5VUknXVwiLFxyXG4gICAgQnVmZmVySGVhZGVyOiAnVGlsZUZyYW1lX19jbWRfX19TY0JZVzBuIHR5cGVfX3R5cGUtdmVyeS1zbWFsbF9fX0hhVk1xckUnLFxyXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxyXG4gICAgTE1Qb3N0Rm9ybTogXCJmb3JtW2NsYXNzfj0nTG9jYWxNYXJrZXRQb3N0X19mb3JtX19fQ0FWUGRERSddXCIsXHJcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcImRpdltjbGFzc349J1RpbGVGcmFtZV9fdGl0bGVfX194UmNaQ1B4J11cIixcclxuICAgIFhJVFRpbGU6IFwiZGl2W2NsYXNzfj0nU2Nyb2xsVmlld19fdmlld19fX292ZjU5VGsnXSA+IGRpdlwiLFxyXG4gICAgQnVmZmVyVGl0bGU6IFwiZGl2W2NsYXNzfj0nVGlsZUZyYW1lX190aXRsZV9fX3hSY1pDUHgnXVwiLFxyXG4gICAgTm90aWZpY2F0aW9uOiBcImRpdltjbGFzc349J0FsZXJ0TGlzdEl0ZW1fX2NvbnRhaW5lcl9fX202ZUgySngnXVwiLFxyXG4gICAgUHJvZFF1ZXVlOiBcImRpdltjbGFzc349J1NpdGVQcm9kdWN0aW9uTGluZXNfX2NvbHVtbl9fX19zM2NUazcnXVwiLFxyXG4gICAgQnVmZmVyUGFuZWw6IFwiZGl2W2NsYXNzfj0nU2Nyb2xsVmlld19fdmlld19fX292ZjU5VGsnXVwiLFxyXG4gICAgTmV3QkZSQnV0dG9uOiBcIlRPVVJfVEFSR0VUX0JVVFRPTl9CVUZGRVJfTkVXXCIsXHJcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXHJcbiAgICBCdWZmZXJUZXh0RmllbGQ6IFwiaW5wdXRbY2xhc3N+PSdQYW5lbFNlbGVjdG9yX19pbnB1dF9fX3dVc3RIck8nXVwiLFxyXG4gICAgQnVmZmVyTGlzdDogXCIjY29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgzKVwiLFxyXG4gICAgU2NyZWVuQ29udHJvbHM6IFwiVE9VUl9UQVJHRVRfU0NSRUVOX0NPTlRST0xTXCIsXHJcbiAgICBMZWZ0U2lkZWJhcjogXCJUT1VSX1RBUkdFVF9TSURFQkFSX0xFRlRfMDJcIixcclxuICAgIEJ1ZmZlckFyZWE6IFwiZGl2W2NsYXNzfj0nVGlsZV9fc2VsZWN0b3JfX19IWU1tTkVPJ11cIixcclxuICAgIFNjcmVlbk5hbWU6IFwic3BhbltjbGFzc349J1NjcmVlbkNvbnRyb2xzX19jdXJyZW50U2NyZWVuTmFtZV9fX0kyc0lZYWcnXVwiLFxyXG4gICAgTWF0ZXJpYWxJY29uOiBcIkdyaWRJdGVtVmlld19faW1hZ2VfX195TW9LT1pWXCIsXHJcbiAgICBDaGF0TGluazogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxyXG4gICAgSW52ZW50b3J5TmFtZTogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxyXG4gICAgRnVsbE1hdGVyaWFsSWNvbjogXCJkaXZbY2xhc3N+PSdHcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejgnXVwiLFxyXG4gICAgSW52ZW50b3J5OiBcImRpdltjbGFzc349J0ludmVudG9yeVZpZXdfX2dyaWRfX19VeVJRU1g4J11cIixcclxuICAgIE1hdGVyaWFsVGV4dDogXCJzcGFuW2NsYXNzfj0nQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCddXCIsXHJcbiAgICBJbnZlbnRvcnlTb3J0T3B0aW9uczogXCJkaXZbY2xhc3N+PSdJbnZlbnRvcnlTb3J0Q29udHJvbHNfX2NvbnRyb2xzX19fcWs1aGVBWiddXCIsXHJcbiAgICBDaGF0QXJlYTogXCJkaXZbY2xhc3N+PSdDaGFubmVsX19tZXNzYWdlQW5kVXNlckxpc3RfX19OQ2dRQXRXJ11cIixcclxuICAgIE1hdGVyaWFsUXVhbnRpdHk6IFwiZGl2W2NsYXNzfj0nTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKJ11cIixcclxuICAgIEhlYWRlclJvdzogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19jb250YWluZXJQYXNzaXZlX19fRnJCZHlHVSddXCIsXHJcbiAgICBGb3JtSW5wdXRSb3c6IFwiZGl2W2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQWN0aXZlX19fSFp2OWpIZCddXCIsXHJcbiAgICBDb250REZvcm06IFwiZGl2W2NsYXNzfj0nRHJhZnRDb25kaXRpb25FZGl0b3JfX2Zvcm1fX19mRjcyYkpNJ10gPiBmb3JtXCIsXHJcbiAgICBDb250RENvbmRpdGlvbnNUYWJsZTogXCJkaXZbY2xhc3N+PSdEcmFmdF9fY29uZGl0aW9uc19fX2JjSVVuZEgnXSA+IHRhYmxlID4gdGJvZHlcIixcclxuICAgIENvbnRERm9ybUxhYmVsOiBcImxhYmVsW2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fbGFiZWxfX19hUUIxNWVCJ11cIixcclxuICAgIENvbnRERm9ybVJvd1NwYWNlcjogXCJkaXZbY2xhc3N+PSdEeW5hbWljSW5wdXRfX2R5bmFtaWNfX19DZDRHa2J6J11cIixcclxuICAgIFNpZGViYXJDb250cmFjdDogXCJkaXZbY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek4nXVwiLFxyXG4gICAgU2lkZWJhckNvbnRyYWN0SWQ6IFwic3BhbltjbGFzc349J1NpZGViYXJfX2NvbnRyYWN0SWRfX19MZzg1VFJaJ11cIlxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TZWxlY3Rvci50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU3R5bGUgPSB7XHJcbiAgICBCdXR0b246IFtcIkJ1dHRvbl9fYnRuX19fVUpHWjFiN1wiXSxcclxuICAgIEJ1dHRvblByaW1hcnk6IFtcIkJ1dHRvbl9fcHJpbWFyeV9fX19sT2JQaXdcIl0sXHJcbiAgICBCdXR0b25TdWNjZXNzOiBbXCJCdXR0b25fX3N1Y2Nlc3NfX19iQ2lJVlh3XCJdLFxyXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJCdXR0b25fX2Rhbmdlcl9fX1MyclNPRVNcIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkhlYWQ6IFtcIlNpZGViYXJfX3NlY3Rpb25IZWFkX19fX05ITEtEVFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxyXG4gICAgU2lkZWJhclNlY3Rpb25Db250ZW50OiBbXCJTaWRlYmFyX19zZWN0aW9uQ29udGVudF9fX3dnR1lGb3BcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiXSxcclxuICAgIFNpZGViYXJMaW5lOiBbXCJTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek5cIiwgXCJTaWRlYmFyX19zaWRlYmFyLWxpbmVfX19iRTJyYlJiXCJdLFxyXG4gICAgRm9udHNSZWd1bGFyOiBbXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiXSxcclxuICAgIFNpZGViYXJUZXh0OiBbXCJGcmFtZV9fdG9nZ2xlTGFiZWxfX19CVEZjZThIXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxyXG4gICAgU2lkZWJhclNsaXZlcjogW1wiRnJhbWVfX3RvZ2dsZUluZGljYXRvclNlY29uZGFyeV9fX2ZyWDRDR2lcIiwgXCJGcmFtZV9fdG9nZ2xlSW5kaWNhdG9yX19fWktRUWdBTFwiXSxcclxuICAgIFNpZGViYXJCdXR0b246IFtcIkZyYW1lX190b2dnbGVfX19WM2lIcEI3XCJdLFxyXG4gICAgQ29udHJhY3RMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXHJcbiAgICBDb250cmFjdE5hbWU6IFtcInpoaXhwNDA4WUYwODJJekE1S1B2ZkE9PVwiXSxcclxuICAgIENvbnRyYWN0VmlldzogW1wia3E1QnJHS25UVVRxQ0RZTXBMUTkwZz09XCJdLFxyXG4gICAgU2V0dGluZ3NCdXR0b246IFtcIlJhZGlvSXRlbV9fY29udGFpbmVyX19fQ1NjenFtR1wiLCBcIlJhZGlvSXRlbV9fY29udGFpbmVySG9yaXpvbnRhbF9fX190cmxYRG9cIl0sXHJcbiAgICBTZXR0aW5nc0JhclVudG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCIsIFwiUmFkaW9JdGVtX19pbmRpY2F0b3JIb3Jpem9udGFsX19fU3d0d1RJaFwiXSxcclxuICAgIFNldHRpbmdzQmFyVG9nZ2xlZDogW1wiUmFkaW9JdGVtX19pbmRpY2F0b3JfX19RelF0amhBXCIsIFwiUmFkaW9JdGVtX19pbmRpY2F0b3JIb3Jpem9udGFsX19fU3d0d1RJaFwiLCBcIlJhZGlvSXRlbV9fYWN0aXZlX19fQ0RzY09RVlwiLCBcImVmZmVjdHNfX3NoYWRvd1ByaW1hcnlfX19FYlhKUW9yXCJdLFxyXG4gICAgU2V0dGluZ3NUZXh0OiBbXCJSYWRpb0l0ZW1fX3ZhbHVlX19fWWQxR3QxVFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1zbWFsbF9fX3BNUWhNUU9cIiwgXCJSYWRpb0l0ZW1fX3ZhbHVlSG9yaXpvbnRhbF9fX0Q1QVhKOVBcIl0sXHJcbiAgICBPdmVybGFwcGluZ0RpdjogW1wiT3ZlcmxheV9fb3ZlcmxheV9fX05BOUhWOHlcIl0sXHJcbiAgICBHcmV5U3RyaXBlczogW1wiT3ZlcmxheV9fYmFja2dyb3VuZF9fX2llWnBIaUZcIiwgXCJPdmVybGF5X19vdmVybGF5X19fTkE5SFY4eVwiXSxcclxuICAgIFNwYWNlcjogW1wiT3ZlcmxheV9fY2xvc2VfX19ieEdvTUlsXCJdLFxyXG4gICAgQ2VudGVySW50ZXJmYWNlOiBbXCJPdmVybGF5X19jaGlsZHJlbl9fX3JndFZheGNcIl0sXHJcbiAgICBGb3JtUm93OiBbXCJGb3JtQ29tcG9uZW50X19jb250YWluZXJBY3RpdmVfX19IWnY5akhkXCIsIFwiZm9ybXNfX2FjdGl2ZV9fX3duOUtRVFpcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxyXG4gICAgRm9ybUxhYmVsOiBbXCJGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUJcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXHJcbiAgICBGb3JtSW5wdXQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl0sXHJcbiAgICBGb3JtU2F2ZVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQ29tbWFuZF9fX0I0WExFUmZcIiwgXCJmb3Jtc19fY21kX19fSU16dDdVZ1wiLCBcImZvcm1zX19mb3JtLWNvbXBvbmVudF9fX3lUZ1BfUWFcIl0sXHJcbiAgICBGb3JtU2F2ZUxhYmVsOiBbXCJGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUJcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXHJcbiAgICBGb3JtU2F2ZUlucHV0OiBbXCJGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWlcIiwgXCJmb3Jtc19faW5wdXRfX19BOTJfTjRKXCJdLFxyXG4gICAgTWF0VGV4dDogW1wiQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUFwiXSxcclxuICAgIE1hdFRleHRXcmFwcGVyOiBbXCJDb2xvcmVkSWNvbl9fbGFiZWxDb250YWluZXJfX19ZVmZnek9rXCJdLFxyXG4gICAgTWF0ZXJpYWxFbGVtZW50OiBbXCJDb2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMlwiXSxcclxuICAgIE1hdGVyaWFsV3JhcHBlcjogW1wiTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4XCJdLFxyXG4gICAgTWF0ZXJpYWxXcmFwcGVyV3JhcHBlcjogW1wiR3JpZEl0ZW1WaWV3X19pbWFnZV9fX3lNb0tPWlZcIl0sXHJcbiAgICBNYXRlcmlhbE51bWJlcldyYXBwZXI6IFtcIk1hdGVyaWFsSWNvbl9faW5kaWNhdG9yQ29udGFpbmVyX19fQ3F0YXhfWVwiXSxcclxuICAgIE1hdGVyaWFsTnVtYmVyOiBbXCJNYXRlcmlhbEljb25fX2luZGljYXRvcl9fX1NId2xuZEpcIiwgXCJNYXRlcmlhbEljb25fX3R5cGUtdmVyeS1zbWFsbF9fX1VNelEzaXJcIiwgXCJNYXRlcmlhbEljb25fX25ldXRyYWxfX19TWXNIWEFhXCJdLFxyXG4gICAgTWF0ZXJpYWxPdXRlcjogW1wiR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4XCJdLFxyXG4gICAgTWF0ZXJpYWxOYW1lVGV4dDogW1wiR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbVwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcclxuICAgIFNtYWxsQnV0dG9uOiBbXCJCdXR0b25fX2RhcmtJbmxpbmVfX196X1lLYTkxXCIsIFwiQnV0dG9uX19kYXJrX19fdmRKYmNjOFwiLCBcIkJ1dHRvbl9fYnRuX19fVUpHWjFiN1wiLCBcIkJ1dHRvbl9faW5saW5lX19fRmZ3OWJiblwiXSxcclxuICAgIEhlYWRlclJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyUGFzc2l2ZV9fX0ZyQmR5R1VcIiwgXCJmb3Jtc19fcGFzc2l2ZV9fX2JpUlVpRTVcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxyXG4gICAgSGVhZGVyTGFiZWw6IFtcIkZvcm1Db21wb25lbnRfX2xhYmVsX19fYVFCMTVlQlwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1yZWd1bGFyX19fazhuSFVmSVwiXSxcclxuICAgIEhlYWRlckNvbnRlbnQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFdpdGhTdHlsZXMgPSAoLi4uc3R5bGUpID0+IHtcclxuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFRleHRDb2xvcnMgPSB7XHJcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcclxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxyXG4gICAgU3RhbmRhcmQ6IFwiI2JiYmJiYlwiLFxyXG4gICAgWWVsbG93OiBcIiNmN2E2MDBcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xvcnMgPSB7XHJcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNSwgMzAsIDk4KSwgcmdiKDQwLCA1NSwgMTIzKSlcIiwgXCJyZ2IoMTQyLCAxNTcsIDIyNSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEsIDI2LCA3NiksIHJnYig3NiwgNTEsIDEwMSkpXCIsIFwicmdiKDE3OCwgMTUzLCAyMDMpXCJdLFxyXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQxLCA3NywgMTA3KSwgcmdiKDY2LCAxMDIsIDEzMikpXCIsIFwicmdiKDE2OCwgMjA0LCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIGVuZ2luZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgNDEsIDApLCByZ2IoMTc4LCA2NiwgMjUpKVwiLCBcInJnYigyNTUsIDE2OCwgMTI3KVwiXSxcclxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcclxuICAgIFwibWV0YWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1NCwgNTQsIDU0KSwgcmdiKDc5LCA3OSwgNzkpKVwiLCBcInJnYigxODEsIDE4MSwgMTgxKVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMjQsIDM5KSwgcmdiKDE2MSwgNDksIDY0KSlcIiwgXCJyZ2IoMjU1LCAxNTEsIDE2NilcIl0sXHJcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxyXG4gICAgXCJvcmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgODcsIDk3KSwgcmdiKDEwNywgMTEyLCAxMjIpKVwiLCBcInJnYigyMDksIDIxNCwgMjI0KVwiXSxcclxuICAgIFwiZ2FzZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDAsIDEwNSwgMTA3KSwgcmdiKDI1LCAxMzAsIDEzMikpXCIsIFwicmdiKDEyNywgMjMyLCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcclxuICAgIFwiYWxsb3lzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjMsIDc2LCAzMCksIHJnYigxNDgsIDEwMSwgNTUpKVwiLCBcInJnYigyNTAsIDIwMywgMTU3KVwiXSxcclxuICAgIFwiY2hlbWljYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigyMDgsIDcxLCAxMTYpKVwiLCBcInJnYigyNTUsIDE3MywgMjE4KVwiXSxcclxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHBpZWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE5LCA4MiwgMTg5KSwgcmdiKDE0NCwgMTA3LCAyMTQpKVwiLCBcInJnYigyNDYsIDIwOSwgMjU1KVwiXSxcclxuICAgIFwiZWxlbWVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYxLCA0NiwgMzIpLCByZ2IoODYsIDcxLCA1NykpXCIsIFwicmdiKDE4OCwgMTczLCAxNTkpXCJdLFxyXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxyXG4gICAgXCJ1bml0IHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI5LCAyNywgMjgpLCByZ2IoNTQsIDUyLCA1MykpXCIsIFwicmdiKDE1NiwgMTU0LCAxNTUpXCJdLFxyXG4gICAgXCJsaXF1aWRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTQsIDE2NCwgMjAyKSwgcmdiKDEzOSwgMTg5LCAyMjcpKVwiLCBcInJnYigyNDEsIDI1NSwgMjU1KVwiXSxcclxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxyXG4gICAgXCJkcm9uZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0MCwgNTIsIDE4KSwgcmdiKDE2NSwgNzcsIDQzKSlcIiwgXCJyZ2IoMjU1LCAxNzksIDE0NSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkxLCA0NiwgMTgzKSwgcmdiKDExNiwgNzEsIDIwOCkpXCIsIFwicmdiKDIxOCwgMTczLCAyNTUpXCJdLFxyXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjQsIDkxLCAyMTEpLCByZ2IoNDksIDExNiwgMjM2KSlcIiwgXCJyZ2IoMTUxLCAyMTgsIDI1NSlcIl0sXHJcbiAgICBcInNvZnR3YXJlIHRvb2xzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjksIDk4LCAxOSksIHJnYigxNTQsIDEyMywgNDQpKVwiLCBcInJnYigyNTUsIDI1NSwgMTQ2KVwiXSxcclxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXHJcbiAgICBcImNvbnN1bWFibGVzIChiYXNpYylcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0OSwgNDYsIDQ2KSwgcmdiKDE3NCwgNzEsIDcxKSlcIiwgXCJyZ2IoMjU1LCAxNzMsIDE3MylcIl0sXHJcbiAgICBcImZ1ZWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYig1NSwgMTQ4LCA1NSkpXCIsIFwicmdiKDE1NywgMjUwLCAxNTcpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxyXG4gICAgXCJzaGlwIGtpdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NCwgODQsIDApLCByZ2IoMTc4LCAxMDksIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMTEsIDEyNylcIl0sXHJcbiAgICBcInV0aWxpdHlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE2MSwgMTQ4LCAxMzYpLCByZ2IoMTg2LCAxNzMsIDE2MSkpXCIsIFwicmdiKDI1NSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJzaGlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDMwMzAzLCAjMTgxODE4KVwiLCBcIiM3ZjdmN2ZcIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFBNTUdTdHlsZSA9IGBcclxuLnBiLW1pbmltaXplIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBiLW1pbmltaXplLWN4OmhvdmVyIHtcclxuXHRjb2xvcjogIzI2MzUzZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5wYi1taW5pbWl6ZS1jeCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI2MzUzZTtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4ucGItbWluaW1pemUtc2V0dGluZ3M6aG92ZXIge1xyXG5cdGNvbG9yOiAjZGRkO1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSBkaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjIge1xyXG5cdGhlaWdodDogNDhweDtcclxuXHR3aWR0aDogNDhweDtcclxuXHRmb250LXNpemU6IDE1Ljg0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYXQtZWxlbWVudC1zbWFsbCB7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG59XHJcbi5jaGVjay10aW1lLWNvbXBsZXRlIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uY2hlY2stdGltZS1vdmVyZHVlIHtcclxuXHRjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4uY2hlY2stdGltZSB7XHJcblx0Y29sb3I6IHJnYigxNTMsIDE1MywgMTUzKVxyXG59XHJcbi5jaGVja2VkLXRleHQge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cdGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1MylcclxufVxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bGluZS1oZWlnaHQ6IDE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwIDhweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzIyMjtcclxufVxyXG4ubm90ZXMtd3JhcHBlciB0ZXh0YXJlYXtcclxuXHRyZXNpemU6IG5vbmU7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRjb2xvcjogI2NjY2NjYztcclxuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIixzYW5zLXNlcmlmO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTMlO1xyXG59XHJcbi5ub3Rlcy13cmFwcGVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXIgdGV4dGFyZWE6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uY2hlY2std3JhcHBlciB7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuLnRvb2x0aXAtYmFzZXtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O1xyXG5cdGZvbnQtZmFtaWx5OlwiRHJvaWQgU2Fuc1wiLHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjEwcHg7XHJcblx0Y29sb3I6I2JiYlxyXG59XHJcbi50b29sdGlwXHJcbntcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4udG9vbHRpcC1iYXNlOmhvdmVyIC50b29sdGlwXHJcbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc2VsZWN0IHtcclxuXHRib3JkZXI6IDBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhkNjQxMTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5mbGV4LXRhYmxlIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXg6IDE7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cdGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59XHJcbi5saXN0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNoYXQtbGluZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4ZW0sIDFmcikgbWlubWF4KDhlbSwgNGZyKSBtaW5tYXgoOGVtLCAxNWZyKTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG4udGltZS1kYXRlIHtcclxuXHRjb2xvcjogIzQ0NDQ0NDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNoYXQtbmFtZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTk5OTtcclxufVxyXG4uY2hhdC1tZXNzYWdlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogI2JiYmJiYjtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuLmZpbi10aXRsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRwYWRkaW5nOiA2cHggNHB4IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxNjIsIDIyMiwgMC4xNSk7XHJcbn1cclxudGQuYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTAzNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjOWZiYjlmO1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4tZ3JlZW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1MDZjNTAgIWltcG9ydGFudDtcclxufVxyXG50ZC5idXJuLXllbGxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzgzNmUyNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjZkZjk0O1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWY4YTQwICFpbXBvcnRhbnQ7XHJcbn1cclxudGQuYnVybi1yZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1YTMxMzAgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2M1OWM5YjtcclxufVxyXG50cjpob3ZlciB0ZC5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzc2NGQ0YyAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnYtaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cGFkZGluZzogMnB4IDhweDtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4uaW52LWJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHRwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0bWFyZ2luOiAxcHggMnB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmN2E2MDA7fVxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtaW1hZ2Uge1xyXG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0XHJcbn1cclxuLmlucHV0LXRleHQ6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uaGlkZGVuLWVsZW1lbnR7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdHZpc2liaWxpdHk6IGZhbHNlICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHQ6aG92ZXJ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxNjYsIDApO1xyXG59YDtcclxuZXhwb3J0IGNvbnN0IEVuaGFuY2VkQ29sb3JzID0gYC8qIGNvbnN1bWFibGVzIChsdXh1cnkpICovXHJcbmRpdlt0aXRsZT1cIlN0ZWxsYXIgUGFsZSBBbGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0FMRVwiXSxcclxuLnRvb2x0aXBfQUxFLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ09GXCJdLFxyXG4udG9vbHRpcF9DT0YsXHJcbmRpdlt0aXRsZT1cIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HSU5cIl0sXHJcbi50b29sdGlwX0dJTixcclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0tPTVwiXSxcclxuLnRvb2x0aXBfS09NLFxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05TVFwiXSxcclxuLnRvb2x0aXBfTlNULFxyXG5kaXZbdGl0bGU9XCJQYWRkZWQgV29yayBPdmVyYWxsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QV09cIl0sXHJcbi50b29sdGlwX1BXTyxcclxuZGl2W3RpdGxlPVwiUmVwYWlyIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkVQXCJdLFxyXG4udG9vbHRpcF9SRVAsXHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDXCJdLFxyXG4udG9vbHRpcF9TQyxcclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkdcIl0sXHJcbi50b29sdGlwX1ZHLFxyXG4udG9vbHRpcF9XSU4sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfV0lOXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY4MDAwMCwgIzdiMDAxMikgIWltcG9ydGFudDtcclxuY29sb3I6ICNkYjkxOTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBhZ3JpY3VsdHVyYWwgcHJvZHVjdHMgKi9cclxuLnRvb2x0aXBfRk9ELFxyXG4udG9vbHRpcF9DQUYsXHJcbi50b29sdGlwX0hPUCxcclxuLnRvb2x0aXBfR1JOLFxyXG4udG9vbHRpcF9NQUksXHJcbi50b29sdGlwX0hDUCxcclxuLnRvb2x0aXBfTVRQLFxyXG4udG9vbHRpcF9QSUIsXHJcbi50b29sdGlwX1BQQSxcclxuLnRvb2x0aXBfQUxHLFxyXG4udG9vbHRpcF9CRUEsXHJcbi50b29sdGlwX01VUyxcclxuLnRvb2x0aXBfUkNPLFxyXG4udG9vbHRpcF9SU0ksXHJcbi50b29sdGlwX0hFUixcclxuLnRvb2x0aXBfVkVHLFxyXG4udG9vbHRpcF9OVVQsXHJcbi50b29sdGlwX1ZJVCxcclxuLnRvb2x0aXBfR1JBLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQWxnYWVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0FMR1wiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEJlYW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DQUZcIl0sXHJcbmRpdlt0aXRsZT1cIkFsbC1QdXJwb3NlIEZvZGRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRk9EXCJdLFxyXG5kaXZbdGl0bGU9XCJXaW5lLVF1YWxpdHkgR3JhcGVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUkFcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBHcmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSTlwiXSxcclxuZGl2W3RpdGxlPVwiSHlkcm9jYXJib24gUGxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IQ1BcIl0sXHJcbmRpdlt0aXRsZT1cIlNwaWN5IEhlcmJzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVJcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3dlcnkgSG9wc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSE9QXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgTWFpemVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01BSVwiXSxcclxuZGl2W3RpdGxlPVwiTWVhdCBUaXNzdWUgUGF0dGllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVRQXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVVNcIl0sXHJcbmRpdlt0aXRsZT1cIlRyaWdseWNlcmlkZSBOdXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OVVRcIl0sXHJcbmRpdlt0aXRsZT1cIlBpbmViZXJyaWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QSUJcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4gUGFzdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BQQVwiXSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkNPXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SU0lcIl0sXHJcbmRpdlt0aXRsZT1cIlRyaWdseWNlcmlkZSBGcnVpdHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZFR1wiXSxcclxuZGl2W3RpdGxlPVwiVml0YSBFc3NlbmNlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WSVRcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAzODAwLCAjMGE0NzA4KSAhaW1wb3J0YW50O1xyXG5jb2xvcjogIzhiYjM3YiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBsYXN0aWNzICovXHJcbi50b29sdGlwX0RDTCxcclxuLnRvb2x0aXBfRENNLFxyXG4udG9vbHRpcF9EQ1MsXHJcbi50b29sdGlwX1BFLFxyXG4udG9vbHRpcF9QRyxcclxuLnRvb2x0aXBfUFNMLFxyXG4udG9vbHRpcF9QU00sXHJcbi50b29sdGlwX1BTUyxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENMXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ01cIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIFNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDU1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seS1FdGh5bGVuZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEVcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgR3JhbnVsYXRlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QR1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTTFwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTTVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIFNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3OTFmNjIsICM5MjM4N2IpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjg5ZWUxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY29uc3VtYWJsZXMgKGJhc2ljKSAqL1xyXG4udG9vbHRpcF9EVyxcclxuLnRvb2x0aXBfRVhPLFxyXG4udG9vbHRpcF9GSU0sXHJcbi50b29sdGlwX0hNUyxcclxuLnRvb2x0aXBfSFNTLFxyXG4udG9vbHRpcF9MQyxcclxuLnRvb2x0aXBfTUVBLFxyXG4udG9vbHRpcF9NRUQsXHJcbi50b29sdGlwX09WRSxcclxuLnRvb2x0aXBfUERBLFxyXG4udG9vbHRpcF9QVCxcclxuLnRvb2x0aXBfUkFULFxyXG4udG9vbHRpcF9TQ04sXHJcbi50b29sdGlwX1dTLFxyXG5cclxuZGl2W3RpdGxlPVwiRHJpbmtpbmcgV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RXXCJdLFxyXG5kaXZbdGl0bGU9XCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0VYT1wiXSxcclxuZGl2W3RpdGxlPVwiRmxhdm91cmVkIEluc3RhLU1lYWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZJTVwiXSxcclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSE1TXCJdLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IU1NcIl0sXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9MQ1wiXSxcclxuZGl2W3RpdGxlPVwiUXVhbGl0eSBNZWF0IE1lYWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01FQVwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgTWVkaWNhbCBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01FRFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgT3ZlcmFsbHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX09WRVwiXSxcclxuZGl2W3RpdGxlPVwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BEQVwiXSxcclxuZGl2W3RpdGxlPVwiUG93ZXIgVG9vbHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BUXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBSYXRpb25zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQVRcIl0sXHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NOXCJdLFxyXG5kaXZbdGl0bGU9XCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfV1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYTYyYzJhLCAjYmEzNjNjKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2ZmOTg5ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZ1ZWxzICovXHJcbi50b29sdGlwX1NGLFxyXG4udG9vbHRpcF9GRixcclxuZGl2W3RpdGxlPVwiRlRMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZGXCJdLFxyXG5kaXZbdGl0bGU9XCJTVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0ZcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTQ4ZDIyLCAjNmJhMjNjKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2NiZmFhMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGxpcXVpZHMgKi9cclxuLnRvb2x0aXBfSEVYLFxyXG4udG9vbHRpcF9MRVMsXHJcbi50b29sdGlwX0JUUyxcclxuLnRvb2x0aXBfSDJPLFxyXG5kaXZbdGl0bGU9XCJIZWxpb3Ryb3BlIEV4dHJhY3RcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFWFwiXSxcclxuZGl2W3RpdGxlPVwiTGlxdWlkIEVpbnN0ZWluaXVtXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9MRVNcIl0sXHJcbmRpdlt0aXRsZT1cIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQlRTXCJdLFxyXG5kaXZbdGl0bGU9XCJXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSDJPXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY3YThkYSwgIzYwOThjMykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmMWZmZmYgIWltcG9ydGFudDtcclxufVxyXG5kaXYuR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG59XHJcbi8qIGZ1bGwgaXRlbSBuYW1lIGNlbnRlcmluZyAqL1xyXG5zcGFuLkdyaWRJdGVtVmlld19fbmFtZV9fX2gzeVg5TG0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59YDtcclxuZXhwb3J0IGNvbnN0IEljb25TdHlsZSA9IGBcclxuIFxyXG4vKiBpdGVtIHRpY2tlciBjb2xvciAqL1xyXG4uQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG4gZGl2LkdyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG4gXHJcbi8qIGZ1bGwgaXRlbSBuYW1lIGNlbnRlcmluZyAqL1xyXG4uR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIFxyXG4vKiB0YWJsZSBjb2xvciAqL1xyXG50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQob2RkKVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyZTtcclxufVxyXG4gXHJcbi8qIGVuZCBVSSBjaGFuZ2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiBcclxuLyogaXRlbXMgaW4gcHJvZHVjdGlvbiB2aWV3IGFuZCBtYXJrZXQgdmlldyAqL1xyXG5kaXYuSVxcXFwrd1JkSWE5ZUxTelJadlNpOUdyZXdcXFxcPVxcXFw9IGRpdi5UNUM0NXBUT1c5UVR6b2tXUHFMUUpnXFxcXD1cXFxcPSBkaXYuRTdPTFVDaFlDZXhNVWdPb2xLWWpPUVxcXFw9XFxcXD1cclxue1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMzZweDtcclxufVxyXG4gXHJcbi8qIGl0ZW1zIGluIHBsYW5ldCB2aWV3ICovXHJcbmRpdi5cXFxcXzk2R0pHOE5rb0hWYi12WkRhbTdxSGdcXFxcPVxcXFw9IGRpdi5UNUM0NXBUT1c5UVR6b2tXUHFMUUpnXFxcXD1cXFxcPSBkaXYuRTdPTFVDaFlDZXhNVWdPb2xLWWpPUVxcXFw9XFxcXD06YmVmb3JlXHJcbntcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKiBkZWZhdWx0IDpiZWZvcmUgZWxlbWVudCB0byBwcmVwYXJlIGZvciBuZXcgaWNvbiovXHJcbmRpdi5FN09MVUNoWUNleE1VZ09vbEtZak9RXFxcXD1cXFxcPTpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiBcclxuICAvKndoaWxlIGl0IGlzIGljb24qL1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIGRlZmF1bHQgOmJlZm9yZSBlbGVtZW50IHRvIHByZXBhcmUgZm9yIG5ldyBzZWNvbmRhcnkgY29ybmVyIGljb24gKi9cclxuLypcclxuZGl2Lm5sUWlycFNrZExIMGE2XFxcXCtDNGxoZHVBXFxcXD1cXFxcPTpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gXHJcbiAgb3BhY2l0eTogMC4yO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIC1qdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIC1hbGlnbi1pdGVtczogcmlnaHQ7XHJcbiAgLWRpc3BsYXk6IGZsZXg7XHJcbiAgLXZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgLWFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIC13aWR0aDogMTAlO1xyXG4gIC1oZWlnaHQ6IDEwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgbGVmdDogLTFweDtcclxuICAtdG9wOiAyMHB4O1xyXG59XHJcbiovXHJcbiBcclxuLyogY29sb3JlZCBvdmVybGF5IGljb24gKi9cclxuZGl2Lm5sUWlycFNrZExIMGE2XFxcXCtDNGxoZHVBXFxcXD1cXFxcPTpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiOyAvKiB3aWxsIGJlY29tZSBpY29uICovXHJcbiBcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGNvbG9yOiByZ2JhKDEwMCUsIDAlLCAwJSwgMCk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBnb2xkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYXF1YTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JleTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cInNpbGljb24gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHdoaXRlO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGl0YW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJsaXRoaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImNvcHBlciBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm8tdGl0YW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZlcnJvbWluaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0dW5nc3RlblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqbXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTcGVjaWFsaXplZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qXHJcbmRpdlt0aXRsZT1cImxhcmdlIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKallwiOyBvcGFjaXR5OiAwLjY7IGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImhpZ2gtbG9hZCBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SUXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJoaWdoLXZvbHVtZSBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn46IXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG59XHJcbiovXHJcbiBcclxuLyogbm9uLWNhdGVnb3J5IGNvbG9yIHNwZWNpYWwgaGFja3MqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiXSxcclxuZGl2W3RpdGxlPVwiUmVkIEdvbGRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDEyMCA3MiA3KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNoaWVsZGVkIENvbm5lY3RvcnNcIl0sXHJcbmRpdlt0aXRsZT1cIkJsdWUgR29sZFwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoNzAgNzIgMjAwKSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkFpciBTY3J1YmJlclwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwIDk2IDU4KSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG4gXHJcbi8qIFwibm9ybWFsXCIgaWNvbnMgYW5kIGNvbG9ycyAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiBcclxuLyogUkFUIGlucHV0cyAqL1xyXG5kaXZbdGl0bGVePVwiSGlnaC1DYXJiXCJdLFxyXG5kaXZbdGl0bGVePVwiUHJvdGVpbi1SaWNoXCJdLFxyXG5kaXZbdGl0bGVePVwiVHJpZ2x5Y2VyaWRlXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYig3MCA3MiA3KSlcclxufVxyXG4gXHJcbmRpdltjb250ZW50PVwiSW8tZGluZVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MyA4NyAxKSwgcmdiKDg2IDQwIDApKVxyXG59XHJcbiBcclxuLyogb3RoZXIgQXJncmljdWx0dXJlICovXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdlt0aXRsZT1cIkFsbC1QdXJwb3NlIEZvZGRlclwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W3RpdGxlPVwiTWVhdCBUaXNzdWUgUGF0dGllc1wiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MyA4NyAxKSwgcmdiKDg2IDQwIDApKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkRyaW5rXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgUmFcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MSAxMjYgMTc0KSwgcmdiKDQ2IDY2IDE0OSkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiV2F0ZXJcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjIgODAgNTUpLCByZ2IoMTggNzQgMTI0KSlcclxufVxyXG4gXHJcbi8qIGNoZW1pY2FscyBiZyBjb2xvcnMgKi9cclxuZGl2W3RpdGxlKj1cIlN1YnN0YW5jZVwiXSwgXHJcbmRpdlt0aXRsZSo9XCJDaGVtaWNhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBDcnlzdGFsc1wiXSwgXHJcbmRpdlt0aXRsZSo9XCJBZ2VudFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJGbHV4XCJdLCBcclxuZGl2W3RpdGxlKj1cIlJlc2luXCJdLCBcclxuZGl2W3RpdGxlKj1cIkNvbG9yYW50XCJdLFxyXG5kaXZbdGl0bGUqPVwiQWNpZFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJCYWN0ZXJpYVwiXSwgXHJcbmRpdlt0aXRsZSo9XCJTb2lsXCJdLFxyXG5kaXZbdGl0bGUqPVwiU3RhYmlsaXplclwiXSxcclxuZGl2W3RpdGxlKj1cIkZlcnRpbGl6ZXJcIl0sXHJcbmRpdlt0aXRsZSo9XCJUaGVybW9GbHVpZFwiXSxcclxuZGl2W3RpdGxlKj1cIlNvbHV0aW9uXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTgzLCA0NiwgOTEpLCByZ2IoMTE0IDM3IDYyKSlcclxufVxyXG4gXHJcbi8qIGNvbnN0cnVjdGlvbiBiZyBjb2xvcnMgKi9cclxuZGl2W3RpdGxlPVwiSW5zdUZvYW1cIl0sXHJcbmRpdlt0aXRsZT1cIkVwb3h5IFJlc2luXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWdhVHViZSBDb2F0aW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiTmFubyBGaWJlclwiXSxcclxuZGl2W3RpdGxlPVwiTmFuby1Db2F0ZWQgR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIlJlaW5mb3JjZWQgR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktU3VsZml0ZSBTZWFsYW50XCJdLFxyXG5kaXZbdGl0bGU9XCJHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzIgMTI1IDIyMSksIHJnYigwIDY0IDE3OSkpXHJcbn1cclxuIFxyXG4vKiBjb25zdHJ1Y3Rpb24gcGFydHMgKi9cclxuZGl2W3RpdGxlPVwiQWVyb3N0YXQgRm91bmRhdGlvblwiXSxcclxuZGl2W3RpdGxlPVwiQWlyIFNjcnViYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJEZWNvcmF0aXZlIEVsZW1lbnRzXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG9hdGluZyBUYW5rXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93IENvbnRyb2wgRGV2aWNlXCJdLFxyXG5kaXZbdGl0bGU9XCJGbHVpZCBQaXBpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkdhcyBWZW50XCJdLFxyXG5kaXZbdGl0bGU9XCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIl0sXHJcbmRpdlt0aXRsZT1cIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIk5lb24gTGlnaHRpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJQcmVzc3VyZSBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlJhZGlhdGlvbiBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiXSxcclxuZGl2W3RpdGxlPVwiVGhlcm1hbCBTaGllbGRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIlRydXNzXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjYsIDEwMiwgMTMyKSwgcmdiKDQxLCA3NywgMTA3KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDMyIDkwIDMyKSlcclxufVxyXG4gXHJcbiBcclxuLyogZWxlY3Ryb25pYyBzeXN0ZW1zIGJnIGNvbG9yICovXHJcbmRpdlt0aXRsZT1cIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiQ2xpbWF0ZSBDb250cm9sbGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkxvZ2lzdGljcyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiVGFyZ2V0aW5nIENvbXB1dGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJDcnlvZ2VuaWMgVW5pdFwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDc2LCA1MSwgMTQxKSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG4vKiBsaWZlIHJlbGF0ZWQgZWxlY3Ryb25pY3Mgc3lzdGVtcyBiZyBjb2xvciovXHJcbmRpdlt0aXRsZT1cIldhdGVyIFJlY2xhaW1lclwiXSxcclxuZGl2W3RpdGxlPVwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwIDk2IDU4KSwgIHJnYig1MSwgMjYsIDc2KSk7XHJcbn1cclxuIFxyXG4gXHJcbi8qIHByZWZhYnMgKi9cclxuZGl2W3RpdGxlXj1cIkJhc2ljIFN0clwiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIERlY2tcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBCdWxrXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgVHJhbnNcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSA1NCA2NiApLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkxpZ2h0d2VpZ2h0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUgOTQgMzUpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkhhcmRlbmVkXCJdLCBcclxuZGl2W3RpdGxlXj1cIlJlaW5mb3JjZWRcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3OCA0NCAyNyksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgRGVja1wiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFRyYW5zcFwiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFN0clwiXSxcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIEJ1bGtcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MSAzNSA5NCksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJpdW1cIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cInNpdGVcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIm1pbmVyYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuZGl2W3RpdGxlKj1cImNvbnRyb2xsZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46bXCI7IG9wYWNpdHk6IDAuNlxyXG59XHJcbmRpdlt0aXRsZSo9XCJmaWx0ZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImRldmljZVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiIE1LXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Tu1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJnbGFzc1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLJcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cImhlYWRwaG9uZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiaG9sb2dyYXBoaWMgZ2xhc3Nlc1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkZNcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiZGlvZGVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLilrZcIjtcclxufVxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQqPVwiU0FSXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzY2FubmVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzZW5zb3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZvdW5kYXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4dcIjtcclxufVxyXG4vKiDwn6eu8J+Oq/Cfjp8gKi9cclxuZGl2W3RpdGxlKj1cIm1lbW9yeVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicHJvY2Vzc1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY2lyY3VpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp9cIjtcclxufVxyXG4vKvCfp6fwn46f8J+Sv/Cfk7wqL1xyXG5kaXZbdGl0bGU9XCJOb24tVm9sYXRpbGUgTWVtb3J5XCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+TgFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJzeXN0ZW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImNvbXB1dGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJtYWluZnJhbWVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5alXCI7IFxyXG4gIG9wYWNpdHk6IDAuNlxyXG59XHJcbi8qIPCfjpvwn46a8J+SvvCfkr3wn5K/8J+TgCAqL1xyXG5kaXZbdGl0bGUqPVwiTmF2aWdhdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJBcnRpZmljaWFsXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRhdGFcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTmV0d29ya1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEYXRhYmFzZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJGcmFtZXdvcmtcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWFuYWdlbWVudFwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJPcGVyYXRpbmdcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiSW50ZXJmYWNlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkFsZ29yaXRobVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNYW5hZ2VyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5K+XCI7XHJcbiAgb3BhY2l0eTogMC4zOyAvKiBzeXN0ZW0gb3ZlcnJpZGUqL1xyXG59XHJcbmRpdlt0aXRsZSo9XCJtb3RoZXJib2FyZFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwid2FmZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46rXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImJyb2FkY2FzdGluZ1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiYW50ZW5uYVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZW1pdHRlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6FcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwibGlicmFyeVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk5ZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiV29ya3N0YXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGlzcGxheVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Su1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaWdodFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SoVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJSb2NrXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpcXVpZFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1aWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQWlyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJHYXNcIl06YmVmb3JlLFxyXG4gZGl2W3RpdGxlKj1cIkFlcm9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBdWRpb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UilwiO1xyXG4gIG9wYWNpdHk6IDAuMzsgLyogc3lzdGVtIG92ZXJyaWRlICovXHJcbn1cclxuZGl2W3RpdGxlKj1cIlBvd2VyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDYXBhY2l0b3JcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflItcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiS2l0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5ugXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJUYW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uiXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQcm90ZWN0aW9uXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlBsYXRlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlNoaWVsZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+boVwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ29ubmVjdG9yc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UjFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiU2VhdHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqpFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU3Vic3RhbmNlXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDaGVtaWNhbFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkZsdXhcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIlJlc2luXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBY2lkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimKNcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkJhY3RlcmlhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6erXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNyeW9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKdhFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29pbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG59XHJcbi8qIPCfp7Dwn5Sq8J+puiAqL1xyXG5kaXZbdGl0bGUqPVwiU3VyZ2ljYWxcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk1lZGljYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJNYWduZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7JcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRGVjb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+WvFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2xhclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pqhXCI7XHJcbn1cclxuIFxyXG4vKiBhbGxveXMg4pmSIPCfn6oqL1xyXG5kaXZbdGl0bGUqPVwiLVRpdGFuaXVtXCJdOjpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgVGl0YW5pdW1cIl06OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiRmVycm9taW5pdW1cIl06OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuIFxyXG4vKiAtLS0tIE1lZGljYWwgLS0tLS0tICovXHJcbmRpdlt0aXRsZT1cIkF1dG8tRG9jXCJdLFxyXG5kaXZbdGl0bGU9XCJCYW5kYWdlc1wiXSxcclxuZGl2W3RpdGxlPVwiTWVkaWNhbCBTdHJldGNoZXJcIl0sXHJcbmRpdlt0aXRsZT1cIlBhaW5raWxsZXJzXCJdLFxyXG5kaXZbdGl0bGU9XCJTdXJnaWNhbCBFcXVpcG1lbnRcIl0sXHJcbmRpdlt0aXRsZT1cIlRlc3QgVHViZXNcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCAxMzMgNjQpLCByZ2IoNDggODYgNDgpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQXV0by1Eb2NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkajigI3impXvuI9cIjtcclxufVxyXG5kaXZbdGl0bGU9XCJCYW5kYWdlc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nu1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlBhaW5raWxsZXJzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiU3VyZ2ljYWwgRXF1aXBtZW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlR1YmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG4vKiDwn5uMICovXHJcbmRpdlt0aXRsZSo9XCJDcmV3IFF1YXJ0ZXJzXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlRyYXVtYSBDYXJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uPXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwiSW9kaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvZGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nglwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDYXJib25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqlcIjtcclxufVxyXG4vKiDwn6eC8J+Sv/CfjZnwn42l4puw8J+PlCAqL1xyXG5kaXZbdGl0bGU9XCJDaGxvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NpVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1bGZ1clwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+foVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlRhbnRhbHVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SYXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQ2FsY2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmVyeWxsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJNYWduZXNpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbi8qIOOAsPCfp4jwn6eK8J+fpPCfn6YgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJBbHVtaW5pdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTdGVlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJUaXRhbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGV+PVwiVHVuZ3N0ZW5cIl06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6tcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2lsaWNvblwiXTpiZWZvcmV7XHJcbiAgY29udGVudDogXCLjgLBcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJDb3BwZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6dcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbi8qIPCfn6UgKi9cclxuZGl2W3RpdGxlPVwiSXJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG4vKiBhbGxveXMgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UtlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJsdWUgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ut1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJyb256ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UulwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJvcm9zaWxpY2F0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi44CwXCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuLyog8J+WiuKdl+KelvCfkogg8J+MoPCfpZbwn42h8J+nqCAqL1xyXG5kaXZbdGl0bGUqPVwiZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eoXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiYmFzaWMgZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinpZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiIHJlYWN0b3JcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46GXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpc3Npb24gcmVhY3RvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cInJhZGlvaXNvdG9wZSBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuLyogLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkxpbWVzdG9uZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lr1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkRyb25lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinIhcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJPcmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJDcnlzdGFsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SjlwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0tLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHcmFpbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNYWl6ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkRyaW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eDXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiUHJvdGVpbi1SaWNoIEJlYW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WSXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgUmFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpatcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJOdXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WcXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRnJ1aXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42FXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGxhbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yyXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL9cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJBbGdhZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ng1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdyYXBlc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nh1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkhlcmJzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRm9kZGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiSG9wc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkNvdHRvbiBGaWJlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhdHRpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNdXNocm9vbXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQaW5lYmVycmllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nk1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhc3RlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WjXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiU29sdXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJWaXRhIEVzc2VuY2VcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbZcIjtcclxufVxyXG4gXHJcbiBcclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuIFxyXG4vKiDwn46o8J+PgPCfj5Dimr4gKi9cclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj5BcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQb2x5LUV0aHlsZW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimr5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJTaGVldCBUeXBlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e7XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiRm9hbVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJTZWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yrXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZpYmVyXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkZhYnJpY1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiU3VwcGxpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6BcIjtcclxufVxyXG5kaXZbdGl0bGUkPVwiVW5pZm9ybVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RllwiO1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJUb29sc2V0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5ugXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkZUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piAXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4OyBvcGFjaXR5OiAwLjVcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTVExcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6JcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNVxyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkNvbnN0cnVjdGlvbiBHcmFudWxhdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7FcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJDYXNpbmdcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4pcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJEZWNrIEVsZW1lbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46eXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJTdHJ1Y3R1cmFsIEVsZW1lbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim5NcIjtcclxufVxyXG4vKiDwn5uOICovXHJcbmRpdlt0aXRsZSQ9XCJCdWxraGVhZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+buFwiO1xyXG59XHJcbi8qIPCfj5fwn6et8J+Mq+KYgPCfjIAgKi9cclxuZGl2W3RpdGxlJD1cIkFwZXJ0dXJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4+XXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiVHJ1c3NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfl7xcIjtcclxufVxyXG4gXHJcbi8qIC0tLS0tIGdhc3Nlcy0tLS0tLSAqL1xyXG4vKiDwn5Ko8J+Vs+OAsPCfjIrwn4yr8J+SpfCfm6Lwn6ez8J+ntOKYhCAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkFtbW9uaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbhcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJBcmdvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiRmx1b3JpbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk5lb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk5pdHJvZ2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiT3h5Z2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KoXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkhlbGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MjFwiO1xyXG59XHJcbmRpdlt0aXRsZV49XCJIeWRyb2dlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sq1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkhlbGl1bS0zIElzb3RvcGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimJVcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQmFzaWMgT3ZlcmFsbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6VcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIldvcmsgT3ZlcmFsbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+mulwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXSwgXHJcbmRpdlt0aXRsZSQ9XCJXb3JrIE92ZXJhbGxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgOTcgMTA0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfja9cIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIkV4b3NcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkbfigI3imYDvuI9cIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIlBvd2VyIFRvb2xzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SMXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZV49XCJFeG9zXCJdLCBcclxuZGl2W3RpdGxlPVwiUG93ZXIgVG9vbHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl0sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlJD1cIkFsZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NulwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KJXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkanigI3wn5qSXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSwgXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sIFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE2IDEyNCAyNyksIHJnYig1NyA3MyAxNDcpKSBcclxufVxyXG5kaXZbdGl0bGUkPVwiQWxlXCJdLCBcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTYgMTI0IDI3KSwgcmdiKDEwNSAzMCAxNDUpKSBcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHaW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpYNcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpaFcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5Go4oCN8J+agFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUqPVwicGVyc29uYWxcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OxXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLCBcclxuZGl2W3RpdGxlPVwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIl0sIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZSQ9XCJHaW5cIl0sIFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbiBcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn423XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJNZWF0IE1lYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbFcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6W8XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SsXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSQ9XCJNZWF0IE1lYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSwgXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NSA5MiAxNjkpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbi8qIPCflbnimI7wn5OeICovXHJcbmRpdlt0aXRsZSo9XCJjb21tYW5kIGJyaWRnZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYjlwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIOKbsOKYouKamfCfmrDwn4yhICovXHJcbmRpdlt0aXRsZSo9XCJlbmdpbmVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5qAXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm5venpsZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfp6jwn4yf8J+ns/Cfm44gKi9cclxuZGl2W3RpdGxlKj1cImNvbWJ1c3Rpb24gY2hhbWJlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7NcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicHVtcFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwZVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwaW5nXCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+asFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ2ZW50XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pmoXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfl7zwn6eH8J+Ul+Kbk/Cfm6Hwn5OO8J+WhyAqLyBcclxuZGl2W3RpdGxlKj1cInN0cnVjdHVyYWwgc3BhY2VcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim5NcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiDwn6eK8J+TpiAqLyBcclxuZGl2W3RpdGxlKj1cImNhcmdvIGJheVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6ZcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiaGFiaXRhdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj6BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwic3VyZ2VyeSB1bml0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pqVXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyrwn5eE8J+Or/CfjqEqL1xyXG5kaXZbdGl0bGUqPVwiZW50ZXJ0YWlubWVudCB1bml0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OoVwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfjqggKi9cclxuZGl2W3RpdGxlKj1cIndvcmtzaG9wIHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46oXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyogc2l6ZXMgKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwic21hbGxcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInRpbnlcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlJD1cIiBzXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDIwcHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm1lZGl1bVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUkPVwiIG1cImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIGJ1aWxkaW5ncyAtIGtpbGwgc3RyYXkgaWNvbnMgKi9cclxuZGl2LlxcXFxfNlVpdnNEaFhKeWxCclxcXFwrXFxcXCtSOWYwNU9RXFxcXD1cXFxcPTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1gO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TdHlsZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQ3VycmVuY3lTeW1ib2xzID0ge1xyXG4gICAgXCJDSVNcIjogXCLigqFcIixcclxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXHJcbiAgICBcIk5DQ1wiOiBcIuKCplwiLFxyXG4gICAgXCJJQ0FcIjogXCLHglwiLFxyXG4gICAgXCJFQ0RcIjogXCLigqxcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IEZhY3Rpb25IZWFkZXJzID0ge1xyXG4gICAgXCJDYXN0aWxsby1JdG9cIjogXCJDSVwiLFxyXG4gICAgXCJJbnNpdG9yXCI6IFwiSUNcIixcclxuICAgIFwiQW50YXJlc1wiOiBcIkFJXCIsXHJcbiAgICBcIk5FTyBDaGFydGVyXCI6IFwiTkNcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgUmF0aW5nQ29sb3JzID0ge1xyXG4gICAgXCJQXCI6IFwiIzFiNmI5Y1wiLFxyXG4gICAgXCJVXCI6IFwiIzhiMjExZVwiLFxyXG4gICAgXCJGXCI6IFwiI2UyNmMzN1wiLFxyXG4gICAgXCJFXCI6IFwiI2U3NzgyYlwiLFxyXG4gICAgXCJEXCI6IFwiI2U4N2QyOFwiLFxyXG4gICAgXCJDXCI6IFwiI2VkODkxY1wiLFxyXG4gICAgXCJCXCI6IFwiI2YxOTUxMFwiLFxyXG4gICAgXCJBXCI6IFwiI2Y2YTIwNFwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBGcmllbmRseU5hbWVzID0ge1xyXG4gICAgXCJMb2NhbE1hcmtldEFkc1wiOiBcIkxNIFVuaXQgUHJpY2VzXCIsXHJcbiAgICBcIk9yZGVyRVRBc1wiOiBcIk9yZGVyIEVUQXNcIixcclxuICAgIFwiRmxpZ2h0RVRBc1wiOiBcIkZsaWdodCBQbGFubmluZyBFVEFzXCIsXHJcbiAgICBcIlNoaXBwaW5nQWRzXCI6IFwiTE0gU2hpcHBpbmcgUmF0ZXNcIixcclxuICAgIFwiUG9zdExNXCI6IFwiTE0gUG9zdGluZyBVbml0IFByaWNlXCIsXHJcbiAgICBcIkNvbnRyYWN0RHJhZnRzXCI6IFwiQ09OVEQgVW5pdCBQcmljZXNcIixcclxuICAgIFwiUXVldWVMb2FkXCI6IFwiUXVldWUgUGVyY2VudCBEaXNwbGF5XCIsXHJcbiAgICBcIkNvbnN1bWFibGVUaW1lcnNcIjogXCJXb3JrZm9yY2UgQ29uc3VtYWJsZSBCdXJuXCIsXHJcbiAgICBcIkZsZWV0RVRBc1wiOiBcIkZsZWV0IEVUQXNcIixcclxuICAgIFwiTm90aWZpY2F0aW9uc1wiOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICAgIFwiU2NyZWVuVW5wYWNrXCI6IFwiU2NyZWVuIFVucGFja1wiLFxyXG4gICAgXCJJbWFnZUNyZWF0b3JcIjogXCJDaGF0IEltYWdlIENyZWF0b3JcIixcclxuICAgIFwiSW52ZW50b3J5T3JnYW5pemVyXCI6IFwiSW52ZW50b3J5IFNvcnRpbmdcIixcclxuICAgIFwiQ29tbWFuZENvcnJlY3RlclwiOiBcIkNvbW1hbmQgQ29ycmVjdGVyXCIsXHJcbiAgICBcIkNhbGN1bGF0b3JCdXR0b25cIjogXCJDYWxjdWxhdG9yIEJ1dHRvblwiLFxyXG4gICAgXCJTaWRlYmFyXCI6IFwiU2lkZWJhclwiLFxyXG4gICAgXCJIZWFkZXJNaW5pbWl6ZXJcIjogXCJNaW5pbWl6ZSBIZWFkZXJzXCIsXHJcbiAgICBcIlBlbmRpbmdDb250cmFjdHNcIjogXCJQZW5kaW5nIENvbnRyYWN0c1wiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBTb3J0aW5nVHJpYW5nbGVIVE1MID0gYFxyXG48ZGl2IHRpdGxlPVwiXCI+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiByb2xlPVwiaW1nXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PGc+PHBhdGggZD1cIk0uODg2ODEgMS4wOTc3NTJsMTIuMTM3NzQgMjEuMDIzMThMMjUuNDIyOTY0IDEuMTA1NDQ2elwiPjwvcGF0aD48L2c+PC9zdmc+PC9kaXY+YDtcclxuZXhwb3J0IGNvbnN0IFBsYW5ldENvbW1hbmRzID0gW1wiQURNXCIsIFwiQlNDXCIsIFwiQ09HQ1wiLCBcIkNPR0NQRVhcIiwgXCJDT0dDVVwiLCBcIkZMVFBcIiwgXCJMUlwiLCBcIkxNUFwiLCBcIkxNXCIsIFwiUExJXCIsIFwiUE9QSVwiLCBcIlBPUFJcIiwgXCJQUFNcIiwgXCJTSFlcIiwgXCJXQVJcIl07XHJcbmV4cG9ydCBjb25zdCBTeXN0ZW1OYW1lcyA9IHtcclxuICAgIFwiQVJDTElHSFRcIjogXCJBTS03ODNcIixcclxuICAgIFwiRk9SR0UtS0VFUFwiOiBcIkZLLTM3MVwiLFxyXG4gICAgXCJNT1VOVCBPTFlNUFVTXCI6IFwiSE0tMDQ5XCIsXHJcbiAgICBcIkdBVEVXQVlcIjogXCJITS0yMjNcIixcclxuICAgIFwiTkVPIEVERU5cIjogXCJKUy0yOTlcIixcclxuICAgIFwiRUJJU1VcIjogXCJKUy05NTJcIixcclxuICAgIFwiQkFTVEFCTE9OXCI6IFwiS1ctMDIwXCIsXHJcbiAgICBcIkRPTFpFTkFcIjogXCJMRy00MThcIixcclxuICAgIFwiVFJJTklUWVwiOiBcIk9GLTI1OVwiLFxyXG4gICAgXCJNT1JJQVwiOiBcIk9ULTU4MFwiLFxyXG4gICAgXCJPVVRFUiBIRUFWRU5cIjogXCJQRy04OTlcIixcclxuICAgIFwiQUNFVEFSRVNcIjogXCJRSi02ODRcIixcclxuICAgIFwiSFVCVVJcIjogXCJURC0yMDNcIixcclxuICAgIFwiSE9URUlcIjogXCJVVi0xMzVcIixcclxuICAgIFwiQkVOVEVOXCI6IFwiVVYtMzUxXCIsXHJcbiAgICBcIkRBSUtPS1VcIjogXCJVVi03OTZcIixcclxuICAgIFwiSE9SVFVTXCI6IFwiVkgtMzMxXCIsXHJcbiAgICBcIk1JRFdBWVwiOiBcIldCLTY3NVwiLFxyXG4gICAgXCJBTlRBUkVTIElJSVwiOiBcIlpWLTE5NFwiLFxyXG4gICAgXCJBTlRBUkVTIElcIjogXCJaVi0zMDdcIixcclxuICAgIFwiQU5UQVJFUyBJSVwiOiBcIlpWLTc1OVwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQbGFuZXROYW1lcyA9IHtcclxuICAgIFwiTEVNVVJJQVwiOiBcIkFKLTc2OGFcIixcclxuICAgIFwiR0FMTFVTXCI6IFwiQU0tNzgzYlwiLFxyXG4gICAgXCJFTUVOVElPUlwiOiBcIkFNLTc4M2NcIixcclxuICAgIFwiVFlQSE9OXCI6IFwiQVUtNTIyYlwiLFxyXG4gICAgXCJOT1ZBIEhPTlNIVVwiOiBcIkJTLTc4OGNcIixcclxuICAgIFwiUFlSR09TXCI6IFwiQ0gtNzcxYVwiLFxyXG4gICAgXCJUQUxPU0lBXCI6IFwiREMtODIzYlwiLFxyXG4gICAgXCJPUk1cIjogXCJEVy00NTZnXCIsXHJcbiAgICBcIk1BTklGT0xEXCI6IFwiRUwtMTc5YlwiLFxyXG4gICAgXCJOT1ZBIFVOQUxBU0tBXCI6IFwiRVotNDc2YlwiLFxyXG4gICAgXCJMQSBGT1JHRVwiOiBcIkZLLTM3MWJcIixcclxuICAgIFwiQk9VQ0hFUlwiOiBcIkZLLTc5NGJcIixcclxuICAgIFwiVkFVTFRcIjogXCJHQy02NDViXCIsXHJcbiAgICBcIkNIVVwiOiBcIkdZLTExMGNcIixcclxuICAgIFwiUE9TRUlET05cIjogXCJITS0wNDliXCIsXHJcbiAgICBcIkFQT1RIRUNBUllcIjogXCJJQS02MDNiXCIsXHJcbiAgICBcIkVMRUNUUk9OSUNBXCI6IFwiSVktMDI4Y1wiLFxyXG4gICAgXCJORU1FU0lTXCI6IFwiSlMtMjk5YVwiLFxyXG4gICAgXCJHSUJTT05cIjogXCJKUy05NTJjXCIsXHJcbiAgICBcIkFVU1RSQUxJQVwiOiBcIktJLTQ0NmFcIixcclxuICAgIFwiREVNRVRFUlwiOiBcIktJLTQ0NmJcIixcclxuICAgIFwiSEVSTUVTXCI6IFwiS0ktNDQ4YlwiLFxyXG4gICAgXCJST0NLXCI6IFwiS1EtOTY2YlwiLFxyXG4gICAgXCJNSUxMSVdBWVNcIjogXCJLVy0wMjBjXCIsXHJcbiAgICBcIkdFSURJIFBSSU1FXCI6IFwiS1ctMzU4YlwiLFxyXG4gICAgXCJFVEhFUldJTkRcIjogXCJLVy02ODhjXCIsXHJcbiAgICBcIktJTlpBXCI6IFwiTEctNDE4YlwiLFxyXG4gICAgXCJQTEFORVQgTUMgUExBTkVURkFDRVwiOiBcIkxHLTkxM2VcIixcclxuICAgIFwiQVJBVE9SQVwiOiBcIkxTLTIzMWJcIixcclxuICAgIFwiR1JJRkZPTlNUT05FXCI6IFwiTFMtMzAwY1wiLFxyXG4gICAgXCJKVVJBXCI6IFwiT0YtMjU5ZFwiLFxyXG4gICAgXCJCRVJUSElFUlwiOiBcIk9GLTM3NWJcIixcclxuICAgIFwiREFOQUtJTFwiOiBcIk9ULTQ0MmJcIixcclxuICAgIFwiSUlST05cIjogXCJPVC01ODBhXCIsXHJcbiAgICBcIk1PTlRFTVwiOiBcIk9ULTU4MGJcIixcclxuICAgIFwiVkFMTElTXCI6IFwiT1QtNTgwY1wiLFxyXG4gICAgXCJQQUxMQURBXCI6IFwiT1QtNTgwZFwiLFxyXG4gICAgXCJQUklTTVwiOiBcIk9ULTg4OWFcIixcclxuICAgIFwiU0FMQURJTlwiOiBcIlBHLTg5OWJcIixcclxuICAgIFwiTkFTQ0VOVFwiOiBcIlFKLTE0OWNcIixcclxuICAgIFwiQUNFTEFORFwiOiBcIlFKLTY4NGJcIixcclxuICAgIFwiQ0lSQ0VcIjogXCJRUS0wMDFiXCIsXHJcbiAgICBcIkNFTEVCRElMXCI6IFwiUVEtNjQ1YlwiLFxyXG4gICAgXCJNQUxBSEFUXCI6IFwiUkMtMDQwYlwiLFxyXG4gICAgXCJJUk9ORk9SR0VcIjogXCJSQy0wNDBjXCIsXHJcbiAgICBcIklDRSBTVEFUSU9OIEFMUEhBXCI6IFwiU0UtMTEwY1wiLFxyXG4gICAgXCJTSEVPTFwiOiBcIlRELTIwM2JcIixcclxuICAgIFwiUkhBWkVTXCI6IFwiVEQtMjI4YlwiLFxyXG4gICAgXCJBU0JFU1RPUyBMRUFEIEFTQkVTVE9TXCI6IFwiVVYtMDcyY1wiLFxyXG4gICAgXCJLQVRPQVwiOiBcIlVWLTM1MWFcIixcclxuICAgIFwiWUFOTklDS1wiOiBcIlVWLTM1MWJcIixcclxuICAgIFwiVU1CUkFcIjogXCJVVi0zNTFjXCIsXHJcbiAgICBcIkJJT0dFTkVTSVNcIjogXCJVVi0zNTFkXCIsXHJcbiAgICBcIlBST1hJT05cIjogXCJVVi03OTZiXCIsXHJcbiAgICBcIlBST01JVE9SXCI6IFwiVkgtMzMxYVwiLFxyXG4gICAgXCJIRUxJT04gUFJJTUVcIjogXCJWSC0zMzFkXCIsXHJcbiAgICBcIk9EWVNTRVVTXCI6IFwiVkgtMzMxZlwiLFxyXG4gICAgXCJBVkFMT05cIjogXCJWSC0zMzFnXCIsXHJcbiAgICBcIkhZRFJPTlwiOiBcIlZILTMzMWlcIixcclxuICAgIFwiTUlNQVJcIjogXCJXQy03MDJiXCIsXHJcbiAgICBcIk1BR1VTXCI6IFwiWEQtMzU0YlwiLFxyXG4gICAgXCJVUE9OT1JcIjogXCJYSC0zMjlhXCIsXHJcbiAgICBcIkxJQkVSVEFTXCI6IFwiWEgtNTk0YVwiLFxyXG4gICAgXCJLSVJVTkFcIjogXCJYSC01OTRiXCIsXHJcbiAgICBcIkNPUlRFWlwiOiBcIlhILTU5NGNcIixcclxuICAgIFwiS1VCXCI6IFwiWUktMDU5ZlwiLFxyXG4gICAgXCJIQVJQSU5BXCI6IFwiWUktMjA5aFwiLFxyXG4gICAgXCJBUkNBRElBXCI6IFwiWUktNjgzY1wiLFxyXG4gICAgXCJWRVJEQU5UXCI6IFwiWUktNzE1YlwiLFxyXG4gICAgXCJOT1JXSUNLXCI6IFwiWUstNjQ5YlwiLFxyXG4gICAgXCJOSUtFXCI6IFwiWlYtMTk0YVwiLFxyXG4gICAgXCJIRVBIQUVTVFVTXCI6IFwiWlYtMzA3Y1wiLFxyXG4gICAgXCJQSE9CT1NcIjogXCJaVi0zMDdkXCIsXHJcbiAgICBcIkRFSU1PU1wiOiBcIlpWLTc1OWNcIixcclxuICAgIFwiSEFSTU9OSUFcIjogXCJaVi04OTZiXCJcclxufTtcclxuZXhwb3J0IGNvbnN0IE1hdGVyaWFsTmFtZXMgPSB7XHJcbiAgICBcIkFBUlwiOiBbXCJBbnRlbm5hIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJBQkhcIjogW1wiQWR2YW5jZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQUNTXCI6IFtcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQURFXCI6IFtcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQURSXCI6IFtcIkF1dG8tRG9jXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIkFEU1wiOiBbXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJBRUZcIjogW1wiQWVyb3N0YXQgRm91bmRhdGlvblwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiQUVOXCI6IFtcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFGUFwiOiBbXCJBZHZhbmNlZCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFGUlwiOiBbXCJBZHZhbmNlZCBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUdTXCI6IFtcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFIUFwiOiBbXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQUlSXCI6IFtcIkFpciBTY3J1YmJlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiQUxcIjogW1wiQWx1bWluaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJBTEVcIjogW1wiU3RlbGxhciBQYWxlIEFsZVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJBTEdcIjogW1wiUHJvdGVpbi1SaWNoIEFsZ2FlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJBTE9cIjogW1wiQWx1bWluaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkFNTVwiOiBbXCJBbW1vbmlhXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkFOWlwiOiBbXCJBZHZhbmNlZCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFQVFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQVJcIjogW1wiQXJnb25cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiQVJQXCI6IFtcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJBU0VcIjogW1wiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBU1RcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQVRBXCI6IFtcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFUUFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBVVwiOiBbXCJHb2xkXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJBVU9cIjogW1wiR29sZCBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJBV0ZcIjogW1wiQWN0aXZlIFdhdGVyIEZpbHRlclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQVdIXCI6IFtcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCQUNcIjogW1wiSGVscGZ1bCBCYWN0ZXJpYVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQkFJXCI6IFtcIkJhc2ljIEFJIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIkJCSFwiOiBbXCJCYXNpYyBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCQ09cIjogW1wiQnVkZ2V0IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQkRFXCI6IFtcIkJhc2ljIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQkVcIjogW1wiQmVyeWxsaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkJFQVwiOiBbXCJQcm90ZWluLVJpY2ggQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkJFUlwiOiBbXCJCZXJ5bCBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCRlBcIjogW1wiQmFzaWMgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJCRlJcIjogW1wiQmFzaWMgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkJHQ1wiOiBbXCJTaGllbGRlZCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkJHT1wiOiBbXCJCbHVlIEdvbGRcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJHU1wiOiBbXCJCYXNpYyBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJCSFBcIjogW1wiQmFzaWMgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkJJRFwiOiBbXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCTFwiOiBbXCJCcmVhdGhhYmxlIExpcXVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQkxFXCI6IFtcIkRlc2F0dXJhdGlvbiBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQk1GXCI6IFtcIkJhc2ljIE1haW5mcmFtZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQk5EXCI6IFtcIkJhbmRhZ2VzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIkJPUlwiOiBbXCJCb3JvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCT1NcIjogW1wiQm9yb3NpbGljYXRlXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCUFRcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJSMVwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzFcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJSMlwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzJcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJSTVwiOiBbXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCUk9cIjogW1wiQnJvbnplXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCUlBcIjogW1wiQmFzaWMgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJSU1wiOiBbXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlNDXCI6IFtcIkJvZHkgU2Nhbm5lclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQlNFXCI6IFtcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQlRBXCI6IFtcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJUU1wiOiBbXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJCV0hcIjogW1wiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJXU1wiOiBbXCJCYXNpYyBXb3Jrc3RhdGlvblwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQ1wiOiBbXCJDYXJib25cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0FcIjogW1wiQ2FsY2l1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDQUZcIjogW1wiQ2FmZmVpbmF0ZWQgQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkNBUFwiOiBbXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQ0JMXCI6IFtcIkxhcmdlIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNCTVwiOiBbXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0JTXCI6IFtcIlNtYWxsIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNDXCI6IFtcIkNsaW1hdGUgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0NEXCI6IFtcIkNyb3dkIENvbnRyb2wgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkNEXCI6IFtcIkNhcGFjaXRpdmUgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkNGXCI6IFtcIkNlcmFtaWMgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNIQVwiOiBbXCJDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkNMXCI6IFtcIkNobG9yaW5lXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNMSVwiOiBbXCJDYWxpY2hlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQ01LXCI6IFtcIlwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkNPRlwiOiBbXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJDT01cIjogW1wiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNPVFwiOiBbXCJDb3R0b24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNRTFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRTVwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUVNcIjogW1wiQ3JldyBRdWFydGVycyAoU21hbGwpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUVRcIjogW1wiQ3JldyBRdWFydGVycyAoVGlueSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNSVVwiOiBbXCJDcnlvZ2VuaWMgVW5pdFwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ1NUXCI6IFtcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJDVEZcIjogW1wiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ1VcIjogW1wiQ29wcGVyXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJDVU9cIjogW1wiQ29wcGVyIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkRBXCI6IFtcIkRhdGEgQW5hbHl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRENIXCI6IFtcIkRyb25lIENoYXNzaXNcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkRDTFwiOiBbXCJEdXJhYmxlIENhc2luZyBMXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkRDTVwiOiBbXCJEdXJhYmxlIENhc2luZyBNXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkRDU1wiOiBbXCJEdXJhYmxlIENhc2luZyBTXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkREXCI6IFtcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkREVFwiOiBbXCJERFQgUGxhbnQgQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkRFQ1wiOiBbXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJESVNcIjogW1wiSW5mb3JtYXRpb24gRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkRPVVwiOiBbXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkRSRlwiOiBbXCJEcm9uZSBGcmFtZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiRFZcIjogW1wiRGF0YSBWaXN1YWxpemVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkRXXCI6IFtcIkRyaW5raW5nIFdhdGVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRURDXCI6IFtcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkVFU1wiOiBbXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRU5HXCI6IFtcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkVQT1wiOiBbXCJFcG94eSBSZXNpblwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkVTXCI6IFtcIkVpbnN0ZWluaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkVUQ1wiOiBbXCJFbnJpY2hlZCBUZWNobmV0aXVtXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJFWE9cIjogW1wiRXhvc2tlbGV0b24gV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRlwiOiBbXCJGbHVvcmluZVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJGQUxcIjogW1wiRmVycm9taW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkZBTlwiOiBbXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJGQ1wiOiBbXCJGbG93IENvbnRyb2wgRGV2aWNlXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGRVwiOiBbXCJJcm9uXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJGRU9cIjogW1wiSXJvbiBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJGRVRcIjogW1wiRmVycm8tVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkZGXCI6IFtcIkZUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXHJcbiAgICBcIkZGQ1wiOiBbXCJGVEwgRmllbGQgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiRklNXCI6IFtcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRklSXCI6IFtcIkZpc3Npb24gUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRkxPXCI6IFtcIkZsb2F0aW5nIFRhbmtcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZMUFwiOiBbXCJGbHVpZCBQaXBpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZMWFwiOiBbXCJGbHV4XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJGT0RcIjogW1wiQWxsLVB1cnBvc2UgRm9kZGVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJGU0VcIjogW1wiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRlVOXCI6IFtcIkVudGVydGFpbm1lbnQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiR0FMXCI6IFtcIkdhbGVyaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiR0NcIjogW1wiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiR0NIXCI6IFtcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR0VOXCI6IFtcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdJTlwiOiBbXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJHTFwiOiBbXCJHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkdOWlwiOiBbXCJHbGFzcyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdSQVwiOiBbXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJHUk5cIjogW1wiSGlnaC1DYXJiIEdyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiR1ZcIjogW1wiR2FzIFZlbnRcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkhcIjogW1wiSHlkcm9nZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSDJPXCI6IFtcIldhdGVyXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiSEFCXCI6IFtcIkhhYml0YXQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiSEFMXCI6IFtcIkhhbGl0ZSBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJIQ0NcIjogW1wiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkhDUFwiOiBbXCJIeWRyb2NhcmJvbiBQbGFudHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhEXCI6IFtcIkhvbG9ncmFwaGljIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhFXCI6IFtcIkhlbGl1bVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIRTNcIjogW1wiSGVsaXVtLTMgSXNvdG9wZVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIRVJcIjogW1wiU3BpY3kgSGVyYnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhFWFwiOiBbXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJISFBcIjogW1wiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkhNU1wiOiBbXCJIYXpNYXQgV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiSE5aXCI6IFtcIkh5cGVydGhydXN0IE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSE9HXCI6IFtcIkhvbG9ncmFwaGljIEdsYXNzZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhPUFwiOiBbXCJGbG93ZXJ5IEhvcHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhQQ1wiOiBbXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIUFJcIjogW1wiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSFNFXCI6IFtcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiSFNTXCI6IFtcIlNtYXJ0IFNwYWNlIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJIVEVcIjogW1wiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSFlSXCI6IFtcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIklcIjogW1wiSW9kaW5lXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIklEQ1wiOiBbXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJJTU1cIjogW1wiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJJTkRcIjogW1wiSW5kaWdvIENvbG9yYW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJJTlNcIjogW1wiSW5zdUZvYW1cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJKVUlcIjogW1wiU2VkYXRpdmUgU3Vic3RhbmNlXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJLT01cIjogW1wiS29tYnVjaGFcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiS1ZcIjogW1wiS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJMQkhcIjogW1wiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTENcIjogW1wiQUktQXNzaXN0ZWQgTGFiIENvYXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJMQ0JcIjogW1wiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTENSXCI6IFtcIkxpcXVpZCBDcnlzdGFsc1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTERcIjogW1wiTG9jYWwgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJMREVcIjogW1wiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMRElcIjogW1wiTGFzZXIgRGlvZGVzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkxFU1wiOiBbXCJMaXF1aWQgRWluc3RlaW5pdW1cIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJMRkVcIjogW1wiTGFyZ2UgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkxGTFwiOiBbXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTEZQXCI6IFtcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTEhQXCI6IFtcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJMSVwiOiBbXCJMaXRoaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJMSU9cIjogW1wiTGl0aGl1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJMSVNcIjogW1wiTGlmZSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiTElUXCI6IFtcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJMT0dcIjogW1wiTG9naXN0aWNzIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiTFNFXCI6IFtcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTFNMXCI6IFtcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMU1RcIjogW1wiTGltZXN0b25lXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkxUQVwiOiBbXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMVVwiOiBbXCJMYWJvcmF0b3J5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIk1BR1wiOiBbXCJNYWduZXRpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTUFJXCI6IFtcIkhpZ2gtQ2FyYiBNYWl6ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTUJcIjogW1wiTW90aGVyYm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJNQ0JcIjogW1wiTWVkaXVtIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1DR1wiOiBbXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJNRUFcIjogW1wiUXVhbGl0eSBNZWF0IE1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJNRURcIjogW1wiQmFzaWMgTWVkaWNhbCBLaXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJNRkVcIjogW1wiTWVkaXVtIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJNRktcIjogW1wiTWVkaXVtIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJNRkxcIjogW1wiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNR1wiOiBbXCJNYWduZXNpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiTUdDXCI6IFtcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTUdTXCI6IFtcIk1hZ25lc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJNSExcIjogW1wiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTUhQXCI6IFtcIk1pY3JvIEhlYWRwaG9uZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIk1MSVwiOiBbXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIk1QQ1wiOiBbXCJNaWNyby1Qcm9jZXNzb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJNU0xcIjogW1wiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNVENcIjogW1wiTWVnYVR1YmUgQ29hdGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk1UUFwiOiBbXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNVVNcIjogW1wiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTVdGXCI6IFtcIk1lZGl1bSBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJOXCI6IFtcIk5pdHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk5BXCI6IFtcIlNvZGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJOQUJcIjogW1wiU29kaXVtIEJvcm9oeWRyaWRlXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOQ1NcIjogW1wiTmFuby1DYXJib24gU2hlZXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJORVwiOiBbXCJOZW9uXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk5GXCI6IFtcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTkZJXCI6IFtcIk5hbm8gRmliZXJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJOR1wiOiBbXCJOYW5vLUNvYXRlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5MXCI6IFtcIk55bG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJOTlwiOiBbXCJOZXVyYWwgTmV0d29ya1wiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJOT1pcIjogW1wiQmFzaWMgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJOUlwiOiBbXCJOYW5vLUVuaGFuY2VkIFJlc2luXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOU1wiOiBbXCJOdXRyaWVudCBTb2x1dGlvblwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTlNUXCI6IFtcIk5ldXJvU3RpbXVsYW50c1wiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJOVVRcIjogW1wiVHJpZ2x5Y2VyaWRlIE51dHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk5WMVwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJOVjJcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiT1wiOiBbXCJPeHlnZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiT0ZGXCI6IFtcIk9mZmljZSBTdXBwbGllc1wiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIk9MRlwiOiBbXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiT1NcIjogW1wiT3BlcmF0aW5nIFN5c3RlbVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJPVkVcIjogW1wiQmFzaWMgT3ZlcmFsbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQQ0JcIjogW1wiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUERBXCI6IFtcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUEVcIjogW1wiUG9seS1FdGh5bGVuZVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQRkVcIjogW1wiUHJlbWl1bSBGZXJ0aWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJQR1wiOiBbXCJQb2x5bWVyIEdyYW51bGF0ZVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQSUJcIjogW1wiUGluZWJlcnJpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlBLXCI6IFtcIlBhaW5raWxsZXJzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlBPV1wiOiBbXCJQb3dlciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlBQQVwiOiBbXCJQcm90ZWluIFBhc3RlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJQU0hcIjogW1wiUHJlc3N1cmUgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJQU0xcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIExcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFNNXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBTU1wiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQVFwiOiBbXCJQb3dlciBUb29sc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBXT1wiOiBbXCJQYWRkZWQgV29yayBPdmVyYWxsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlFDUlwiOiBbXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJBRFwiOiBbXCJSYWRpbyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIlJBR1wiOiBbXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQU1cIjogW1wiTWVtb3J5IEJhbmtcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJSQVRcIjogW1wiQmFzaWMgUmF0aW9uc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlJCSFwiOiBbXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJDT1wiOiBbXCJSYXcgQ290dG9uIEZpYmVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJSQ1NcIjogW1wiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkNUXCI6IFtcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSREVcIjogW1wiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJETFwiOiBbXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlJEU1wiOiBbXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlJFQVwiOiBbXCJDaGVtaWNhbCBSZWFnZW50c1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiUkVEXCI6IFtcIlJlc2N1ZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiUkVQXCI6IFtcIlJlcGFpciBLaXRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiUkdcIjogW1wiUmVpbmZvcmNlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIlJHT1wiOiBbXCJSZWQgR29sZFwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiUkhQXCI6IFtcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlJPTVwiOiBbXCJOb24tVm9sYXRpbGUgTWVtb3J5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUlNFXCI6IFtcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSU0hcIjogW1wiUmFkaWF0aW9uIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiUlNJXCI6IFtcIlJhdyBTaWxrIFN0cmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlJUQVwiOiBbXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlNcIjogW1wiU3VsZnVyXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlNBXCI6IFtcIlNlYXJjaCBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJTQUxcIjogW1wiU29ydGluZyBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJTQVJcIjogW1wiU2Vuc29yIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJTQ1wiOiBbXCJTdGVtIENlbGwgVHJlYXRtZW50XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlNDQlwiOiBbXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTQ05cIjogW1wiTXVsdGktUHVycG9zZSBTY2FubmVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiU0NSXCI6IFtcIlN1bGZ1ciBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJTRFJcIjogW1wiU3VyZ2ljYWwgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNFQVwiOiBbXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIlNFTlwiOiBbXCJTZW5zb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJTRVFcIjogW1wiU3VyZ2ljYWwgRXF1aXBtZW50XCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlNGXCI6IFtcIlNUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXHJcbiAgICBcIlNGRVwiOiBbXCJTbWFsbCBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiU0ZLXCI6IFtcIlNtYWxsIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJTRkxcIjogW1wiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNJXCI6IFtcIlNpbGljb25cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlNJTFwiOiBbXCJTaWxrZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIlNJT1wiOiBbXCJTaWxpY29uIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIlNOTVwiOiBbXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiU09JXCI6IFtcIkFydGlmaWNpYWwgU29pbFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiU09MXCI6IFtcIlNvbGFyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiU1BcIjogW1wiU29sYXIgUGFuZWxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiU1JEXCI6IFtcIlNoaXAtUmVwYWlyIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTUlBcIjogW1wiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIlNTQ1wiOiBbXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiU1NMXCI6IFtcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTVExcIjogW1wiU3RlZWxcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlNUUlwiOiBbXCJNZWRpY2FsIFN0cmV0Y2hlclwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJTVFNcIjogW1wiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTVVwiOiBbXCJTdXJnZXJ5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlNVRFwiOiBbXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNVTlwiOiBbXCJTYWZldHkgVW5pZm9ybVwiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIlNXRlwiOiBbXCJTbWFsbCBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJUQVwiOiBbXCJUYW50YWx1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJUQUNcIjogW1wiVGFyZ2V0aW5nIENvbXB1dGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJUQUlcIjogW1wiVGFudGFsaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVENcIjogW1wiVGVjaG5ldGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJUQ0JcIjogW1wiVGlueSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJUQ0xcIjogW1wiVENMIEFjaWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlRDT1wiOiBbXCJUZWNobmV0aXVtIE94aWRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRDU1wiOiBbXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRDVVwiOiBbXCJUcmF1bWEgQ2FyZSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJUSEZcIjogW1wiVGhlcm1vRmx1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlRIUFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJUSVwiOiBbXCJUaXRhbml1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiVElPXCI6IFtcIlRpdGFuaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIlRLXCI6IFtcIlRlY2hub0tldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiVFBVXCI6IFtcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJUUkFcIjogW1wiQXVkaW8gVHJhbnNtaXR0ZXJcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJUUk5cIjogW1wiQWR2YW5jZWQgVHJhbnNpc3RvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJUUlVcIjogW1wiVHJ1c3NcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRTXCI6IFtcIlRlY3Rvc2lsaXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVFNIXCI6IFtcIlRoZXJtYWwgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUVUJcIjogW1wiVGVzdCBUdWJlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJVVFNcIjogW1wiVW5pdmVyc2FsIFRvb2xzZXRcIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJWQ0JcIjogW1wiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiVkVHXCI6IFtcIlRyaWdseWNlcmlkZSBGcnVpdHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlZHXCI6IFtcIlZpdGFHZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiVklUXCI6IFtcIlZpdGEgRXNzZW5jZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiVlNDXCI6IFtcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiV1wiOiBbXCJUdW5nc3RlblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiV0FJXCI6IFtcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJXQUxcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiV0NCXCI6IFtcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJXSU5cIjogW1wiU21hcnQgWmluZmFuZGVsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIldNXCI6IFtcIldpbmRvdyBNYW5hZ2VyXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiV09SXCI6IFtcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJXUlwiOiBbXCJXYXRlciBSZWNsYWltZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIldTXCI6IFtcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiWklSXCI6IFtcIlppcmNvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJaUlwiOiBbXCJaaXJjb25pdW1cIiwgXCJlbGVtZW50c1wiXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IE1hdGVyaWFscyA9IHtcclxuICAgIFwiQW50ZW5uYSBBcnJheVwiOiBbXCJBQVJcIiwgMC43OCwgMC41XSxcclxuICAgIFwiQWR2YW5jZWQgQnVsa2hlYWRcIjogW1wiQUJIXCIsIDAuNiwgMC45XSxcclxuICAgIFwiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCI6IFtcIkFDU1wiLCAwLjMsIDAuMl0sXHJcbiAgICBcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIjogW1wiQURFXCIsIDAuNCwgMS41XSxcclxuICAgIFwiQXV0by1Eb2NcIjogW1wiQURSXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiOiBbXCJBRFNcIiwgMC43LCAyXSxcclxuICAgIFwiQWVyb3N0YXQgRm91bmRhdGlvblwiOiBbXCJBRUZcIiwgMiwgNV0sXHJcbiAgICBcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIjogW1wiQUVOXCIsIDE0LCA3XSxcclxuICAgIFwiQWR2YW5jZWQgRnVlbCBQdW1wXCI6IFtcIkFGUFwiLCAxLCAwLjI1XSxcclxuICAgIFwiQWR2YW5jZWQgRnVlbCBSb2RcIjogW1wiQUZSXCIsIDAuNCwgMC4xXSxcclxuICAgIFwiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCI6IFtcIkFHU1wiLCAzMCwgNV0sXHJcbiAgICBcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIjogW1wiQUhQXCIsIDIwLCAxMF0sXHJcbiAgICBcIkFpciBTY3J1YmJlclwiOiBbXCJBSVJcIiwgMS43LCAzXSxcclxuICAgIFwiQWx1bWluaXVtXCI6IFtcIkFMXCIsIDIuNywgMV0sXHJcbiAgICBcIlN0ZWxsYXIgUGFsZSBBbGVcIjogW1wiQUxFXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIEFsZ2FlXCI6IFtcIkFMR1wiLCAwLjcsIDFdLFxyXG4gICAgXCJBbHVtaW5pdW0gT3JlXCI6IFtcIkFMT1wiLCAxLjM1LCAxXSxcclxuICAgIFwiQW1tb25pYVwiOiBbXCJBTU1cIiwgMC44NiwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIE5venpsZVwiOiBbXCJBTlpcIiwgNiwgM10sXHJcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkFQVFwiLCAwLjAzLCAwLjNdLFxyXG4gICAgXCJBcmdvblwiOiBbXCJBUlwiLCAxLjc4NCwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCI6IFtcIkFSUFwiLCAwLjA0LCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkFTRVwiLCAwLjUsIDAuNl0sXHJcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIjogW1wiQVNUXCIsIDQuOTgsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJBVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiQVRQXCIsIDIuOSwgMV0sXHJcbiAgICBcIkdvbGRcIjogW1wiQVVcIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJHb2xkIE9yZVwiOiBbXCJBVU9cIiwgMy44NiwgMV0sXHJcbiAgICBcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIjogW1wiQVdGXCIsIDAuOCwgMS4yXSxcclxuICAgIFwiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQVdIXCIsIDAuMTIsIDFdLFxyXG4gICAgXCJIZWxwZnVsIEJhY3RlcmlhXCI6IFtcIkJBQ1wiLCAwLjE1LCAwLjE1XSxcclxuICAgIFwiQmFzaWMgQUkgRnJhbWV3b3JrXCI6IFtcIkJBSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIEJ1bGtoZWFkXCI6IFtcIkJCSFwiLCAwLjUsIDAuOF0sXHJcbiAgICBcIkJ1ZGdldCBDb25uZWN0b3JzXCI6IFtcIkJDT1wiLCAwLjAwNSwgMC4wMDJdLFxyXG4gICAgXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCI6IFtcIkJERVwiLCAwLjEsIDEuNV0sXHJcbiAgICBcIkJlcnlsbGl1bVwiOiBbXCJCRVwiLCAxLjg0LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIEJlYW5zXCI6IFtcIkJFQVwiLCAwLjgsIDFdLFxyXG4gICAgXCJCZXJ5bCBDcnlzdGFsc1wiOiBbXCJCRVJcIiwgMS45MiwgMV0sXHJcbiAgICBcIkJhc2ljIEZ1ZWwgUHVtcFwiOiBbXCJCRlBcIiwgMC44LCAwLjJdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFJvZFwiOiBbXCJCRlJcIiwgMC4zLCAwLjFdLFxyXG4gICAgXCJTaGllbGRlZCBDb25uZWN0b3JzXCI6IFtcIkJHQ1wiLCAwLjAxLCAwLjAwMl0sXHJcbiAgICBcIkJsdWUgR29sZFwiOiBbXCJCR09cIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJCYXNpYyBIaWdoLUcgU2VhdHNcIjogW1wiQkdTXCIsIDIwLCAzXSxcclxuICAgIFwiQmFzaWMgSHVsbCBQbGF0ZVwiOiBbXCJCSFBcIiwgMTAsIDEwXSxcclxuICAgIFwiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiOiBbXCJCSURcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkJyZWF0aGFibGUgTGlxdWlkXCI6IFtcIkJMXCIsIDEuMTIsIDFdLFxyXG4gICAgXCJEZXNhdHVyYXRpb24gQWdlbnRcIjogW1wiQkxFXCIsIDAuNSwgMC41XSxcclxuICAgIFwiQmFzaWMgTWFpbmZyYW1lXCI6IFtcIkJNRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkJhbmRhZ2VzXCI6IFtcIkJORFwiLCAwLjAwMSwgMC4wMDVdLFxyXG4gICAgXCJCb3JvbiBDcnlzdGFsc1wiOiBbXCJCT1JcIiwgMS44LCAxXSxcclxuICAgIFwiQm9yb3NpbGljYXRlXCI6IFtcIkJPU1wiLCAxLjUsIDFdLFxyXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJCUFRcIiwgMC4wMiwgMC4zXSxcclxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsxXCI6IFtcIkJSMVwiLCAxODAsIDMwMF0sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMlwiOiBbXCJCUjJcIiwgMjgwLCA0MDBdLFxyXG4gICAgXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiOiBbXCJCUk1cIiwgMi41LCAxXSxcclxuICAgIFwiQnJvbnplXCI6IFtcIkJST1wiLCA4LjczLCAxXSxcclxuICAgIFwiQmFzaWMgQW50aS1yYWQgUGxhdGVcIjogW1wiQlJQXCIsIDAuMDMsIDAuMl0sXHJcbiAgICBcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCI6IFtcIkJSU1wiLCAxNTAsIDIwMF0sXHJcbiAgICBcIkJvZHkgU2Nhbm5lclwiOiBbXCJCU0NcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkJTRVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkJUQVwiLCAwLjMsIDAuNF0sXHJcbiAgICBcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiOiBbXCJCVFNcIiwgMS4wNSwgMV0sXHJcbiAgICBcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkJXSFwiLCAwLjEsIDFdLFxyXG4gICAgXCJCYXNpYyBXb3Jrc3RhdGlvblwiOiBbXCJCV1NcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiQ2FyYm9uXCI6IFtcIkNcIiwgMi4yNSwgMV0sXHJcbiAgICBcIkNhbGNpdW1cIjogW1wiQ0FcIiwgMS41NCwgMV0sXHJcbiAgICBcIkNhZmZlaW5hdGVkIEJlYW5zXCI6IFtcIkNBRlwiLCAwLjg2LCAxXSxcclxuICAgIFwiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCI6IFtcIkNBUFwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQkxcIiwgNS40LCAyLjRdLFxyXG4gICAgXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JNXCIsIDMuNiwgMS42XSxcclxuICAgIFwiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JTXCIsIDEuOCwgMC44XSxcclxuICAgIFwiQ2xpbWF0ZSBDb250cm9sbGVyXCI6IFtcIkNDXCIsIDAuNSwgMV0sXHJcbiAgICBcIkNyb3dkIENvbnRyb2wgRHJvbmVcIjogW1wiQ0NEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIkNhcGFjaXRpdmUgRGlzcGxheVwiOiBbXCJDRFwiLCAwLjAwNCwgMC4wMDJdLFxyXG4gICAgXCJDZXJhbWljIEZhYnJpY1wiOiBbXCJDRlwiLCAyLjgyLCAxXSxcclxuICAgIFwiQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkNIQVwiLCAxLjIsIDAuN10sXHJcbiAgICBcIkNobG9yaW5lXCI6IFtcIkNMXCIsIDMuMiwgMV0sXHJcbiAgICBcIkNhbGljaGUgUm9ja1wiOiBbXCJDTElcIiwgMi40MiwgMV0sXHJcbiAgICBcIlwiOiBbXCJDTUtcIiwgNC41NiwgMzMuMl0sXHJcbiAgICBcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCI6IFtcIkNPRlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkNvbW11bmljYXRpb24gU3lzdGVtXCI6IFtcIkNPTVwiLCAwLjUsIDEuNV0sXHJcbiAgICBcIkNvdHRvbiBGYWJyaWNcIjogW1wiQ09UXCIsIDAuNzcsIDFdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIjogW1wiQ1FMXCIsIDc1LCAxNTBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCI6IFtcIkNRTVwiLCA1MCwgMTAwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoU21hbGwpXCI6IFtcIkNRU1wiLCAyNSwgNTBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiOiBbXCJDUVRcIiwgMTIuNSwgMjVdLFxyXG4gICAgXCJDcnlvZ2VuaWMgVW5pdFwiOiBbXCJDUlVcIiwgMi4yLCAyXSxcclxuICAgIFwiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIjogW1wiQ1NUXCIsIDEuMTQsIDFdLFxyXG4gICAgXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiOiBbXCJDVEZcIiwgNC4zMiwgMV0sXHJcbiAgICBcIkNvcHBlclwiOiBbXCJDVVwiLCA4LjkyLCAxXSxcclxuICAgIFwiQ29wcGVyIE9yZVwiOiBbXCJDVU9cIiwgNC4wMSwgMV0sXHJcbiAgICBcIkRhdGEgQW5hbHl6ZXJcIjogW1wiREFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJEcm9uZSBDaGFzc2lzXCI6IFtcIkRDSFwiLCAwLjIsIDAuMDNdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBMXCI6IFtcIkRDTFwiLCAwLjA4LCAwLjhdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBNXCI6IFtcIkRDTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBTXCI6IFtcIkRDU1wiLCAwLjAxLCAwLjFdLFxyXG4gICAgXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiOiBbXCJERFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkREVCBQbGFudCBBZ2VudFwiOiBbXCJERFRcIiwgMC4xMSwgMC4xXSxcclxuICAgIFwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiOiBbXCJERUNcIiwgMC41LCAyXSxcclxuICAgIFwiSW5mb3JtYXRpb24gRGlzcGxheVwiOiBbXCJESVNcIiwgMC4wMiwgMC4wMl0sXHJcbiAgICBcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJET1VcIiwgNSwgNF0sXHJcbiAgICBcIkRyb25lIEZyYW1lXCI6IFtcIkRSRlwiLCAwLjEsIDAuMDJdLFxyXG4gICAgXCJEYXRhIFZpc3VhbGl6ZXJcIjogW1wiRFZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJEcmlua2luZyBXYXRlclwiOiBbXCJEV1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCI6IFtcIkVEQ1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkVucmljaGVkIEVpbnN0ZWluaXVtXCI6IFtcIkVFU1wiLCA5LjIsIDFdLFxyXG4gICAgXCJTdGFuZGFyZCBTVEwgRW5naW5lXCI6IFtcIkVOR1wiLCA4LCA0XSxcclxuICAgIFwiRXBveHkgUmVzaW5cIjogW1wiRVBPXCIsIDAuMDQsIDAuMDJdLFxyXG4gICAgXCJFaW5zdGVpbml1bVwiOiBbXCJFU1wiLCAwLjg4LCAwLjFdLFxyXG4gICAgXCJFbnJpY2hlZCBUZWNobmV0aXVtXCI6IFtcIkVUQ1wiLCA0LjEsIDFdLFxyXG4gICAgXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIjogW1wiRVhPXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIkZsdW9yaW5lXCI6IFtcIkZcIiwgMS42OTYsIDFdLFxyXG4gICAgXCJGZXJyb21pbml1bVwiOiBbXCJGQUxcIiwgMy4yMiwgMV0sXHJcbiAgICBcIkFjdGl2ZSBDb29saW5nIERldmljZVwiOiBbXCJGQU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJGbG93IENvbnRyb2wgRGV2aWNlXCI6IFtcIkZDXCIsIDAuNSwgMC4yNV0sXHJcbiAgICBcIklyb25cIjogW1wiRkVcIiwgNy44NzQsIDFdLFxyXG4gICAgXCJJcm9uIE9yZVwiOiBbXCJGRU9cIiwgNS45LCAxXSxcclxuICAgIFwiRmVycm8tVGl0YW5pdW1cIjogW1wiRkVUXCIsIDYuODUsIDFdLFxyXG4gICAgXCJGVEwgRnVlbFwiOiBbXCJGRlwiLCAwLjA1LCAwLjAxXSxcclxuICAgIFwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIjogW1wiRkZDXCIsIDUwLCAxNl0sXHJcbiAgICBcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCI6IFtcIkZJTVwiLCAwLjU1LCAwLjVdLFxyXG4gICAgXCJGaXNzaW9uIFJlYWN0b3JcIjogW1wiRklSXCIsIDcsIDQuOV0sXHJcbiAgICBcIkZsb2F0aW5nIFRhbmtcIjogW1wiRkxPXCIsIDEsIDJdLFxyXG4gICAgXCJGbHVpZCBQaXBpbmdcIjogW1wiRkxQXCIsIDAuMywgMl0sXHJcbiAgICBcIkZsdXhcIjogW1wiRkxYXCIsIDAuMjUsIDAuMV0sXHJcbiAgICBcIkFsbC1QdXJwb3NlIEZvZGRlclwiOiBbXCJGT0RcIiwgMS4yLCAxXSxcclxuICAgIFwiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiOiBbXCJGU0VcIiwgNiwgM10sXHJcbiAgICBcIkVudGVydGFpbm1lbnQgVW5pdFwiOiBbXCJGVU5cIiwgNSwgNF0sXHJcbiAgICBcIkdhbGVyaXRlIFJvY2tcIjogW1wiR0FMXCIsIDIuNTEsIDFdLFxyXG4gICAgXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCI6IFtcIkdDXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJHQ0hcIiwgMSwgMC42XSxcclxuICAgIFwiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiOiBbXCJHRU5cIiwgNSwgM10sXHJcbiAgICBcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCI6IFtcIkdJTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkdsYXNzXCI6IFtcIkdMXCIsIDAuMDE2LCAwLjAxXSxcclxuICAgIFwiR2xhc3MgTm96emxlXCI6IFtcIkdOWlwiLCAxLjUsIDFdLFxyXG4gICAgXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCI6IFtcIkdSQVwiLCAxLjEsIDFdLFxyXG4gICAgXCJIaWdoLUNhcmIgR3JhaW5zXCI6IFtcIkdSTlwiLCAwLjksIDFdLFxyXG4gICAgXCJHYXMgVmVudFwiOiBbXCJHVlwiLCAwLjI1LCAwLjE1XSxcclxuICAgIFwiSHlkcm9nZW5cIjogW1wiSFwiLCAwLjA3LCAxXSxcclxuICAgIFwiV2F0ZXJcIjogW1wiSDJPXCIsIDAuMiwgMC4yXSxcclxuICAgIFwiSGFiaXRhdCBVbml0XCI6IFtcIkhBQlwiLCAxMCwgOF0sXHJcbiAgICBcIkhhbGl0ZSBDcnlzdGFsc1wiOiBbXCJIQUxcIiwgMi4xNywgMV0sXHJcbiAgICBcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiOiBbXCJIQ0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJIeWRyb2NhcmJvbiBQbGFudHNcIjogW1wiSENQXCIsIDAuOCwgMV0sXHJcbiAgICBcIkhvbG9ncmFwaGljIERpc3BsYXlcIjogW1wiSERcIiwgMC4wNSwgMl0sXHJcbiAgICBcIkhlbGl1bVwiOiBbXCJIRVwiLCAwLjE0NSwgMV0sXHJcbiAgICBcIkhlbGl1bS0zIElzb3RvcGVcIjogW1wiSEUzXCIsIDAuMTQ1LCAxXSxcclxuICAgIFwiU3BpY3kgSGVyYnNcIjogW1wiSEVSXCIsIDAuNCwgMV0sXHJcbiAgICBcIkhlbGlvdHJvcGUgRXh0cmFjdFwiOiBbXCJIRVhcIiwgMS4xLCAxXSxcclxuICAgIFwiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiOiBbXCJISFBcIiwgMTUsIDEwXSxcclxuICAgIFwiSGF6TWF0IFdvcmsgU3VpdFwiOiBbXCJITVNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IE5venpsZVwiOiBbXCJITlpcIiwgNiwgMTJdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCI6IFtcIkhPR1wiLCAwLjAxLCAwLjAxXSxcclxuICAgIFwiRmxvd2VyeSBIb3BzXCI6IFtcIkhPUFwiLCAwLjM1LCAxXSxcclxuICAgIFwiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiOiBbXCJIUENcIiwgMC4wMDMsIDAuMDAzXSxcclxuICAgIFwiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiOiBbXCJIUFJcIiwgMTgsIDE1XSxcclxuICAgIFwiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJIU0VcIiwgMy4xLCAwLjddLFxyXG4gICAgXCJTbWFydCBTcGFjZSBTdWl0XCI6IFtcIkhTU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiOiBbXCJIVEVcIiwgMjAsIDEwXSxcclxuICAgIFwiSHlwZXItcG93ZXIgUmVhY3RvclwiOiBbXCJIWVJcIiwgMzUsIDI1XSxcclxuICAgIFwiSW9kaW5lXCI6IFtcIklcIiwgNC45MywgMV0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiOiBbXCJJRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiOiBbXCJJTU1cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJJbmRpZ28gQ29sb3JhbnRcIjogW1wiSU5EXCIsIDAuMjEsIDAuMl0sXHJcbiAgICBcIkluc3VGb2FtXCI6IFtcIklOU1wiLCAwLjA2LCAwLjFdLFxyXG4gICAgXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIjogW1wiSlVJXCIsIDEuMiwgMV0sXHJcbiAgICBcIktvbWJ1Y2hhXCI6IFtcIktPTVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIktldmxhciBGYWJyaWNcIjogW1wiS1ZcIiwgMS42NSwgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCI6IFtcIkxCSFwiLCAwLjIsIDAuNl0sXHJcbiAgICBcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCI6IFtcIkxDXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCI6IFtcIkxDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIkxpcXVpZCBDcnlzdGFsc1wiOiBbXCJMQ1JcIiwgMC4xNSwgMC4xXSxcclxuICAgIFwiTG9jYWwgRGF0YWJhc2VcIjogW1wiTERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCI6IFtcIkxERVwiLCAwLjEsIDEuMl0sXHJcbiAgICBcIkxhc2VyIERpb2Rlc1wiOiBbXCJMRElcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGlxdWlkIEVpbnN0ZWluaXVtXCI6IFtcIkxFU1wiLCA4Ljg0LCAxXSxcclxuICAgIFwiTGFyZ2UgRlRMIEVtaXR0ZXJcIjogW1wiTEZFXCIsIDAuNCwgMS42XSxcclxuICAgIFwiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTEZMXCIsIDYwLCAxMF0sXHJcbiAgICBcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiOiBbXCJMRlBcIiwgMC41LCAwLjFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCI6IFtcIkxIUFwiLCA1LCAxMF0sXHJcbiAgICBcIkxpdGhpdW1cIjogW1wiTElcIiwgMC41NSwgMV0sXHJcbiAgICBcIkxpdGhpdW0gT3JlXCI6IFtcIkxJT1wiLCAyLjc1LCAxXSxcclxuICAgIFwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJMSVNcIiwgNS42LCA3XSxcclxuICAgIFwiTmVvbiBMaWdodGluZyBTeXN0ZW1cIjogW1wiTElUXCIsIDEsIDJdLFxyXG4gICAgXCJMb2dpc3RpY3MgU3lzdGVtXCI6IFtcIkxPR1wiLCAwLjUsIDEuNV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiTFNFXCIsIDAuMywgMS4yXSxcclxuICAgIFwiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTFNMXCIsIDEyNSwgMTAwXSxcclxuICAgIFwiTGltZXN0b25lXCI6IFtcIkxTVFwiLCAyLjczLCAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiTFRBXCIsIDAuMywgMC41XSxcclxuICAgIFwiTGFib3JhdG9yeSBVbml0XCI6IFtcIkxVXCIsIDgsIDZdLFxyXG4gICAgXCJNYWduZXRpdGVcIjogW1wiTUFHXCIsIDUuMTUsIDFdLFxyXG4gICAgXCJIaWdoLUNhcmIgTWFpemVcIjogW1wiTUFJXCIsIDEuMywgMV0sXHJcbiAgICBcIk1vdGhlcmJvYXJkXCI6IFtcIk1CXCIsIDAuMDc1LCAwLjA3NV0sXHJcbiAgICBcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCI6IFtcIk1DQlwiLCAxMDAsIDEwMF0sXHJcbiAgICBcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiOiBbXCJNQ0dcIiwgMC4yNCwgMC4xXSxcclxuICAgIFwiUXVhbGl0eSBNZWF0IE1lYWxcIjogW1wiTUVBXCIsIDAuNiwgMC41XSxcclxuICAgIFwiQmFzaWMgTWVkaWNhbCBLaXRcIjogW1wiTUVEXCIsIDAuMywgMC4xXSxcclxuICAgIFwiTWVkaXVtIEZUTCBFbWl0dGVyXCI6IFtcIk1GRVwiLCAwLjIsIDAuOF0sXHJcbiAgICBcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIjogW1wiTUZLXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNRkxcIiwgMjQsIDRdLFxyXG4gICAgXCJNYWduZXNpdW1cIjogW1wiTUdcIiwgMC4yNywgMC4xNl0sXHJcbiAgICBcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiOiBbXCJNR0NcIiwgMC42LCAwLjldLFxyXG4gICAgXCJNYWduZXNpdGVcIjogW1wiTUdTXCIsIDEuNzMsIDFdLFxyXG4gICAgXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCI6IFtcIk1ITFwiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNaWNybyBIZWFkcGhvbmVzXCI6IFtcIk1IUFwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiOiBbXCJNTElcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJNaWNyby1Qcm9jZXNzb3JcIjogW1wiTVBDXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNU0xcIiwgNTAsIDUwXSxcclxuICAgIFwiTWVnYVR1YmUgQ29hdGluZ1wiOiBbXCJNVENcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCI6IFtcIk1UUFwiLCAwLjcsIDFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCI6IFtcIk1VU1wiLCAwLjgsIDFdLFxyXG4gICAgXCJNZWRpdW0gV2FmZXJcIjogW1wiTVdGXCIsIDAuMDA4LCAwLjAwOF0sXHJcbiAgICBcIk5pdHJvZ2VuXCI6IFtcIk5cIiwgMC44MDcsIDFdLFxyXG4gICAgXCJTb2RpdW1cIjogW1wiTkFcIiwgMC45NywgMV0sXHJcbiAgICBcIlNvZGl1bSBCb3JvaHlkcmlkZVwiOiBbXCJOQUJcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTmFuby1DYXJib24gU2hlZXRpbmdcIjogW1wiTkNTXCIsIDAuMDI4LCAwLjAxXSxcclxuICAgIFwiTmVvblwiOiBbXCJORVwiLCAwLjksIDFdLFxyXG4gICAgXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiOiBbXCJORlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIk5hbm8gRmliZXJcIjogW1wiTkZJXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTmFuby1Db2F0ZWQgR2xhc3NcIjogW1wiTkdcIiwgMC4wMjIsIDAuMDFdLFxyXG4gICAgXCJOeWxvbiBGYWJyaWNcIjogW1wiTkxcIiwgMS4xMywgMV0sXHJcbiAgICBcIk5ldXJhbCBOZXR3b3JrXCI6IFtcIk5OXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgTm96emxlXCI6IFtcIk5PWlwiLCAzLCAxLjVdLFxyXG4gICAgXCJOYW5vLUVuaGFuY2VkIFJlc2luXCI6IFtcIk5SXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJOdXRyaWVudCBTb2x1dGlvblwiOiBbXCJOU1wiLCAwLjYsIDAuNV0sXHJcbiAgICBcIk5ldXJvU3RpbXVsYW50c1wiOiBbXCJOU1RcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlRyaWdseWNlcmlkZSBOdXRzXCI6IFtcIk5VVFwiLCAwLjksIDFdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIjogW1wiTlYxXCIsIDQuMiwgMl0sXHJcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiOiBbXCJOVjJcIiwgNi43LCAzXSxcclxuICAgIFwiT3h5Z2VuXCI6IFtcIk9cIiwgMS4xNDEsIDFdLFxyXG4gICAgXCJPZmZpY2UgU3VwcGxpZXNcIjogW1wiT0ZGXCIsIDAuMDIsIDAuMl0sXHJcbiAgICBcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCI6IFtcIk9MRlwiLCAwLjAxLCAwLjAwMV0sXHJcbiAgICBcIk9wZXJhdGluZyBTeXN0ZW1cIjogW1wiT1NcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBPdmVyYWxsc1wiOiBbXCJPVkVcIiwgMC4wMiwgMC4wMjVdLFxyXG4gICAgXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIjogW1wiUENCXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiOiBbXCJQREFcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiUG9seS1FdGh5bGVuZVwiOiBbXCJQRVwiLCAwLjAxLCAwLjAxXSxcclxuICAgIFwiUHJlbWl1bSBGZXJ0aWxpemVyXCI6IFtcIlBGRVwiLCAwLjksIDFdLFxyXG4gICAgXCJQb2x5bWVyIEdyYW51bGF0ZVwiOiBbXCJQR1wiLCAwLjAwMiwgMC4wMDFdLFxyXG4gICAgXCJQaW5lYmVycmllc1wiOiBbXCJQSUJcIiwgMC4zLCAxXSxcclxuICAgIFwiUGFpbmtpbGxlcnNcIjogW1wiUEtcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUG93ZXIgQ2VsbFwiOiBbXCJQT1dcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiUHJvdGVpbiBQYXN0ZVwiOiBbXCJQUEFcIiwgMiwgMV0sXHJcbiAgICBcIlByZXNzdXJlIFNoaWVsZGluZ1wiOiBbXCJQU0hcIiwgNC4yLCAwLjhdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiOiBbXCJQU0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIE1cIjogW1wiUFNNXCIsIDAuMDQsIDAuNF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCI6IFtcIlBTU1wiLCAwLjAxLCAwLjFdLFxyXG4gICAgXCJQb3dlciBUb29sc1wiOiBbXCJQVFwiLCAwLjI1LCAwLjJdLFxyXG4gICAgXCJQYWRkZWQgV29yayBPdmVyYWxsXCI6IFtcIlBXT1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCI6IFtcIlFDUlwiLCAxNCwgMTBdLFxyXG4gICAgXCJSYWRpbyBEZXZpY2VcIjogW1wiUkFEXCIsIDAuMDAzLCAwLjAwNV0sXHJcbiAgICBcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIjogW1wiUkFHXCIsIDUsIDMuNF0sXHJcbiAgICBcIk1lbW9yeSBCYW5rXCI6IFtcIlJBTVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJCYXNpYyBSYXRpb25zXCI6IFtcIlJBVFwiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCI6IFtcIlJCSFwiLCAyLjQsIDAuOV0sXHJcbiAgICBcIlJhdyBDb3R0b24gRmliZXJcIjogW1wiUkNPXCIsIDAuOTUsIDFdLFxyXG4gICAgXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCI6IFtcIlJDU1wiLCAwLjY3LCAwLjVdLFxyXG4gICAgXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiOiBbXCJSQ1RcIiwgNywgNF0sXHJcbiAgICBcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiOiBbXCJSREVcIiwgMS40LCAxLjVdLFxyXG4gICAgXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRMXCIsIDE1MCwgMzBdLFxyXG4gICAgXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRTXCIsIDUwLCAxMF0sXHJcbiAgICBcIkNoZW1pY2FsIFJlYWdlbnRzXCI6IFtcIlJFQVwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUmVzY3VlIERyb25lXCI6IFtcIlJFRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJSZXBhaXIgS2l0XCI6IFtcIlJFUFwiLCAwLjAwNiwgMC4wMDJdLFxyXG4gICAgXCJSZWluZm9yY2VkIEdsYXNzXCI6IFtcIlJHXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiUmVkIEdvbGRcIjogW1wiUkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCI6IFtcIlJIUFwiLCAxMiwgMTBdLFxyXG4gICAgXCJOb24tVm9sYXRpbGUgTWVtb3J5XCI6IFtcIlJPTVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiUlNFXCIsIDEuOSwgMC43XSxcclxuICAgIFwiUmFkaWF0aW9uIFNoaWVsZGluZ1wiOiBbXCJSU0hcIiwgMy43LCAwLjhdLFxyXG4gICAgXCJSYXcgU2lsayBTdHJhaW5zXCI6IFtcIlJTSVwiLCAxLjEsIDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIlJUQVwiLCAxLjUsIDAuNV0sXHJcbiAgICBcIlN1bGZ1clwiOiBbXCJTXCIsIDAuNTIsIDAuMjVdLFxyXG4gICAgXCJTZWFyY2ggQWxnb3JpdGhtXCI6IFtcIlNBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU29ydGluZyBBbGdvcml0aG1cIjogW1wiU0FMXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU2Vuc29yIEFycmF5XCI6IFtcIlNBUlwiLCAxLjcsIDJdLFxyXG4gICAgXCJTdGVtIENlbGwgVHJlYXRtZW50XCI6IFtcIlNDXCIsIDAuMDQsIDAuMDFdLFxyXG4gICAgXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlNDQlwiLCA1MCwgNTBdLFxyXG4gICAgXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIjogW1wiU0NOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1bGZ1ciBDcnlzdGFsc1wiOiBbXCJTQ1JcIiwgMi4wNSwgMV0sXHJcbiAgICBcIlN1cmdpY2FsIERyb25lXCI6IFtcIlNEUlwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiOiBbXCJTRUFcIiwgMC4xNSwgMC4wN10sXHJcbiAgICBcIlNlbnNvclwiOiBbXCJTRU5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiU3VyZ2ljYWwgRXF1aXBtZW50XCI6IFtcIlNFUVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNUTCBGdWVsXCI6IFtcIlNGXCIsIDAuMDYsIDAuMDZdLFxyXG4gICAgXCJTbWFsbCBGVEwgRW1pdHRlclwiOiBbXCJTRkVcIiwgMC4xLCAwLjRdLFxyXG4gICAgXCJTbWFsbCBGYXN0ZW5lciBLaXRcIjogW1wiU0ZLXCIsIDAuMDQsIDAuMDJdLFxyXG4gICAgXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTRkxcIiwgOSwgMS41XSxcclxuICAgIFwiU2lsaWNvblwiOiBbXCJTSVwiLCAyLjMyOSwgMV0sXHJcbiAgICBcIlNpbGtlbiBGYWJyaWNcIjogW1wiU0lMXCIsIDEuMjEsIDFdLFxyXG4gICAgXCJTaWxpY29uIE9yZVwiOiBbXCJTSU9cIiwgMS43OSwgMV0sXHJcbiAgICBcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIjogW1wiU05NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQXJ0aWZpY2lhbCBTb2lsXCI6IFtcIlNPSVwiLCAwLjksIDFdLFxyXG4gICAgXCJTb2xhciBDZWxsXCI6IFtcIlNPTFwiLCAwLjAxNSwgMC4wMV0sXHJcbiAgICBcIlNvbGFyIFBhbmVsXCI6IFtcIlNQXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIlNoaXAtUmVwYWlyIERyb25lXCI6IFtcIlNSRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJTUlBcIiwgMC4xLCAwLjJdLFxyXG4gICAgXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCI6IFtcIlNTQ1wiLCAxLCAxXSxcclxuICAgIFwiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU1NMXCIsIDIwLCAyMF0sXHJcbiAgICBcIlN0ZWVsXCI6IFtcIlNUTFwiLCA3Ljg1LCAxXSxcclxuICAgIFwiTWVkaWNhbCBTdHJldGNoZXJcIjogW1wiU1RSXCIsIDAuMDEsIDFdLFxyXG4gICAgXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIjogW1wiU1RTXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiU3VyZ2VyeSBVbml0XCI6IFtcIlNVXCIsIDYsIDVdLFxyXG4gICAgXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIjogW1wiU1VEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlNhZmV0eSBVbmlmb3JtXCI6IFtcIlNVTlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiU21hbGwgV2FmZXJcIjogW1wiU1dGXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIlRhbnRhbHVtXCI6IFtcIlRBXCIsIDE2LjY1LCAxXSxcclxuICAgIFwiVGFyZ2V0aW5nIENvbXB1dGVyXCI6IFtcIlRBQ1wiLCAwLjE1LCAxXSxcclxuICAgIFwiVGFudGFsaXRlIFJvY2tcIjogW1wiVEFJXCIsIDcuOTQsIDFdLFxyXG4gICAgXCJUZWNobmV0aXVtXCI6IFtcIlRDXCIsIDExLjgsIDFdLFxyXG4gICAgXCJUaW55IENhcmdvIEJheSBLaXRcIjogW1wiVENCXCIsIDIwLCAyMF0sXHJcbiAgICBcIlRDTCBBY2lkXCI6IFtcIlRDTFwiLCAwLjA5LCAwLjFdLFxyXG4gICAgXCJUZWNobmV0aXVtIE94aWRlXCI6IFtcIlRDT1wiLCA5LjgsIDFdLFxyXG4gICAgXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIjogW1wiVENTXCIsIDMuNCwgMS4yXSxcclxuICAgIFwiVHJhdW1hIENhcmUgVW5pdFwiOiBbXCJUQ1VcIiwgNSwgNF0sXHJcbiAgICBcIlRoZXJtb0ZsdWlkXCI6IFtcIlRIRlwiLCAwLjYsIDAuMzVdLFxyXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiVEhQXCIsIDIuMiwgMV0sXHJcbiAgICBcIlRpdGFuaXVtXCI6IFtcIlRJXCIsIDQuNSwgMV0sXHJcbiAgICBcIlRpdGFuaXVtIE9yZVwiOiBbXCJUSU9cIiwgMS41OCwgMV0sXHJcbiAgICBcIlRlY2hub0tldmxhciBGYWJyaWNcIjogW1wiVEtcIiwgMS44OSwgMV0sXHJcbiAgICBcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIjogW1wiVFBVXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIkF1ZGlvIFRyYW5zbWl0dGVyXCI6IFtcIlRSQVwiLCAwLjAwNSwgMC4wMDJdLFxyXG4gICAgXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCI6IFtcIlRSTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJUcnVzc1wiOiBbXCJUUlVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJUZWN0b3NpbGlzaXRlXCI6IFtcIlRTXCIsIDIuNCwgMV0sXHJcbiAgICBcIlRoZXJtYWwgU2hpZWxkaW5nXCI6IFtcIlRTSFwiLCAyLjQsIDEuNV0sXHJcbiAgICBcIlRlc3QgVHViZXNcIjogW1wiVFVCXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlVuaXZlcnNhbCBUb29sc2V0XCI6IFtcIlVUU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCI6IFtcIlZFR1wiLCAxLjEsIDFdLFxyXG4gICAgXCJWaXRhR2VsXCI6IFtcIlZHXCIsIDAuMjEsIDAuMV0sXHJcbiAgICBcIlZpdGEgRXNzZW5jZVwiOiBbXCJWSVRcIiwgMC45LCAxXSxcclxuICAgIFwiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlZTQ1wiLCAzNSwgMzVdLFxyXG4gICAgXCJUdW5nc3RlblwiOiBbXCJXXCIsIDcuNTE5LCAxXSxcclxuICAgIFwiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiOiBbXCJXQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCI6IFtcIldBTFwiLCA2LjI1LCAxXSxcclxuICAgIFwiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIjogW1wiV0NCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiU21hcnQgWmluZmFuZGVsXCI6IFtcIldJTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIldpbmRvdyBNYW5hZ2VyXCI6IFtcIldNXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIjogW1wiV09SXCIsIDUsIDVdLFxyXG4gICAgXCJXYXRlciBSZWNsYWltZXJcIjogW1wiV1JcIiwgNi40LCA1XSxcclxuICAgIFwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIjogW1wiV1NcIiwgMC4wNSwgMC41XSxcclxuICAgIFwiWmlyY29uIENyeXN0YWxzXCI6IFtcIlpJUlwiLCA0Ljg1LCAxXSxcclxuICAgIFwiWmlyY29uaXVtXCI6IFtcIlpSXCIsIDYuNTMsIDFdLFxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9HYW1lUHJvcGVydGllcy50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHJpY2VzKHByaWNlcywgd2ViYXBwSUQpIHtcclxuICAgIGlmICghd2ViYXBwSUQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogV2ViIEFwcCBUaW1lb3V0XCIpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIFByaWNlcyBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcmljZURhdGEpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzW2tleV0gPSBwcmljZURhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyB3ZWJhcHBJRCArIFwiL2V4ZWM/bW9kZT0lMjJwcmljZSUyMlwiLCB0cnVlKTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDWFByaWNlcyhjeFByaWNlcykge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IENYIFByaWNlIFRpbWVvdXRcIik7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQ1ggUHJpY2VzXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3YW50ZWRSZXN1bHRzID0gW1wiQXNrUHJpY2VcIiwgXCJCaWRQcmljZVwiLCBcIkF2ZXJhZ2VcIiwgXCJBc2tBdmFpbFwiLCBcIkJpZEF2YWlsXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ1hzID0gW1wiQUkxXCIsIFwiQ0kxXCIsIFwiQ0kyXCIsIFwiSUMxXCIsIFwiTkMxXCIsIFwiTkMyXCJdO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgQ1hzLmZvckVhY2goQ1ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dW0NYXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YW50ZWRSZXN1bHRzLmZvckVhY2god2FudGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4UHJpY2VzW21hdFtcIlRpY2tlclwiXV1bQ1hdW3dhbnRlZF0gPSBtYXRbQ1ggKyBcIi1cIiArIHdhbnRlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjeFByaWNlc1tcIkFnZVwiXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjeFByaWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gUmFpbiBQcmljZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvcmFpbi9wcmljZXNcIiwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KSB7XHJcbiAgICBpZiAoIWJ1cm4pIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwaWtleSB8fCAhdXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuW3VzZXJuYW1lXSA9IFtdO1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFRpbWVvdXRcIik7XHJcbiAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBCdXJuIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL3VzZXIvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcm91cEJ1cm4oYnVybiwgZ3JvdXBpZCwgYXBpa2V5KSB7XHJcbiAgICBpZiAoIWJ1cm4pIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwaWtleSB8fCAhZ3JvdXBpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgR3JvdXAgQnVybiBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdID0gW107XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vZ3JvdXAvXCIgKyBncm91cGlkLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpIHtcclxuICAgIGlmICghYXBpa2V5IHx8ICF1c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1cm5TZXR0aW5ncy5wdXNoKFwibG9hZGluZ1wiKTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBTZXR0aW5ncyBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIEJ1cm4gU2V0dGluZ3MgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuU2V0dGluZ3NbMF0gPSBcImxvYWRlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyblNldHRpbmdzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvdXNlcnNldHRpbmdzL2J1cm5yYXRlL1wiICsgdXNlcm5hbWUsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhY3RzKGNvbnRyYWN0cywgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgY29uc29sZS5sb2coXCJHZXR0aW5nIEZJTyBDb250cmFjdCBkYXRhXCIpO1xyXG4gICAgaWYgKCFjb250cmFjdHMpIHtcclxuICAgICAgICBjb250cmFjdHMgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICghYXBpa2V5IHx8ICF1c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnRyYWN0c1t1c2VybmFtZV0gPSBbXTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQ29udHJhY3QgVGltZW91dFwiKTtcclxuICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdHNbdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBTZW5kaW5nIENvbnRyYWN0IFJlcXVlc3RcIik7XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2NvbnRyYWN0L2FsbGNvbnRyYWN0c1wiKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRyYWN0IERhdGFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjb250cmFjdHMpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0JhY2tncm91bmRSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgZ2V0TG9jYWxTdG9yYWdlLCBzZXRTZXR0aW5ncywgY3JlYXRlTGluaywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9TdHlsZVwiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfSU5ESUNBVE9SID0gXCIkJENIRUNLXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBDaGVja2xpc3RzKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZ2VuZXJhdGVDaGVja1RhYmxlLCB0aWxlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrTmFtZSA9IChwYXJhbWV0ZXJzLnNsaWNlKDEpKS5qb2luKFwiX1wiKTtcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gY2hlY2tOYW1lO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNoZWNrV3JhcHBlcik7XHJcbiAgICAgICAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjaGVjay13cmFwcGVyXCIpO1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZGlzcFN0b3JlZENoZWNrLCBbY2hlY2tOYW1lLCB0aWxlXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVDaGVja1RhYmxlKHJlc3VsdCwgdGlsZSkge1xyXG4gICAgaWYgKCF0aWxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkluY29tcGxldGUgSXRlbXNcIiwgXCJUb3RhbCBJdGVtc1wiLCBcIkRlbGV0ZVwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSk7XHJcbiAgICB2YXIgYW55Q2hlY2tsaXN0cyA9IGZhbHNlO1xyXG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgNykgIT0gQ0hFQ0tfSU5ESUNBVE9SKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW55Q2hlY2tsaXN0cyA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCB0b3RhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbmNvbXBsZXRlQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodG90YWxDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkZWxldGVDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZS5zdWJzdHJpbmcoNyksIFwiWElUIENIRUNLX1wiICsgbmFtZS5zdWJzdHJpbmcoNykpKTtcclxuICAgICAgICBpbmNvbXBsZXRlQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bbmFtZV0uZmlsdGVyKChvYmopID0+ICghb2JqWzFdKSkubGVuZ3RoKSk7XHJcbiAgICAgICAgdG90YWxDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGgpKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgIGRlbGV0ZUNvbHVtbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZUNoZWNrLCBbbmFtZS5zdWJzdHJpbmcoNyksIFtdXSk7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGlmICghYW55Q2hlY2tsaXN0cykge1xyXG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gNDtcclxuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBDaGVja2xpc3RzXCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVRoZW5TdG9yZUNoZWNrKHJlc3VsdCwgcGFyYW1zKSB7XHJcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hlY2tOYW1lID0gcGFyYW1zWzBdO1xyXG4gICAgY29uc3QgY2hlY2tUZXh0ID0gcGFyYW1zWzFdO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdID0gY2hlY2tUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogY2hlY2tUZXh0O1xyXG4gICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBkaXNwU3RvcmVkQ2hlY2socmVzdWx0LCBwYXJhbXMpIHtcclxuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXNbMF0gfHwgIXBhcmFtc1sxXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrTmFtZSA9IHBhcmFtc1swXTtcclxuICAgIGNvbnN0IHRpbGUgPSBwYXJhbXNbMV07XHJcbiAgICBjb25zdCBjaGVja1dyYXBwZXIgPSB0aWxlLmNoaWxkcmVuWzFdO1xyXG4gICAgaWYgKCFjaGVja1dyYXBwZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLmZvckVhY2goY2hlY2sgPT4geyBjcmVhdGVDaGVja1JvdyhjaGVja1dyYXBwZXIsIHJlc3VsdCwgY2hlY2tOYW1lLCBjaGVja1swXSwgY2hlY2tbMV0sIGNoZWNrWzJdKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ld1wiO1xyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvdmVybGFwRGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuT3ZlcmxhcHBpbmdEaXYpO1xyXG4gICAgICAgIGNvbnN0IGdyZXlTdHJpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcclxuICAgICAgICBvdmVybGFwRGl2LmFwcGVuZENoaWxkKGdyZXlTdHJpcGVzKTtcclxuICAgICAgICB0aWxlLmluc2VydEJlZm9yZShvdmVybGFwRGl2LCB0aWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VTcGFjZXIodGlsZSwgb3ZlcmxhcERpdikpO1xyXG4gICAgICAgIGNvbnN0IGFkZEludGVyZmFjZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZEludGVyZmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5DZW50ZXJJbnRlcmZhY2UpO1xyXG4gICAgICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZVdyYXBwZXIpO1xyXG4gICAgICAgIGNvbnN0IGFkZEludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYWRkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJOTE9ySDdoRjVmYktJZXNxVzN1U2tBPT1cIik7XHJcbiAgICAgICAgYWRkSW50ZXJmYWNlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2UpO1xyXG4gICAgICAgIGNvbnN0IGFkZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgYWRkSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2hlY2tsaXN0IEl0ZW0gRWRpdG9yXCIpKTtcclxuICAgICAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xyXG4gICAgICAgIGFkZEhlYWRlci5zdHlsZS5tYXJnaW4gPSBcIjAuNWVtIDAgMC41ZW1cIjtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgY29uc3QgbmFtZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZVJvdyk7XHJcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xyXG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XHJcbiAgICAgICAgbmFtZVJvdy5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUlucHV0KTtcclxuICAgICAgICBuYW1lUm93LmFwcGVuZENoaWxkKG5hbWVJbnB1dERpdik7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIG5hbWVJbnB1dERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVSb3cpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XHJcbiAgICAgICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcclxuICAgICAgICBkYXRlUm93LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0RGl2KTtcclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICBkYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICAgICAgICBjb25zdCB0aW1lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aW1lUm93KTtcclxuICAgICAgICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSBUaW1lXCI7XHJcbiAgICAgICAgdGltZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUxhYmVsKTtcclxuICAgICAgICB0aW1lUm93LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XHJcbiAgICAgICAgY29uc3QgdGltZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xyXG4gICAgICAgIHRpbWVSb3cuYXBwZW5kQ2hpbGQodGltZUlucHV0RGl2KTtcclxuICAgICAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGltZUlucHV0LnR5cGUgPSBcInRpbWVcIjtcclxuICAgICAgICB0aW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcclxuICAgICAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIHNhdmVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ01EXCI7XHJcbiAgICAgICAgc2F2ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XHJcbiAgICAgICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2F2ZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XHJcbiAgICAgICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlSW5wdXREaXYpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNBVkVcIjtcclxuICAgICAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgICAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgc2F2ZUlucHV0RGl2LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBuYW1lSW5wdXQudmFsdWUgfHwgXCJcIjtcclxuICAgICAgICAgICAgdGlsZS5yZW1vdmVDaGlsZChvdmVybGFwRGl2KTtcclxuICAgICAgICAgICAgdmFyIGR1ZURhdGU7XHJcbiAgICAgICAgICAgIGlmIChkYXRlSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlID0gRGF0ZS5wYXJzZShkYXRlSW5wdXQudmFsdWUgKyBcIiBcIiArIHRpbWVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlID0gRGF0ZS5wYXJzZShkYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gW2l0ZW1OYW1lLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlICYmICFpc05hTihkdWVEYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQucHVzaChkdWVEYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0ucHVzaChpdGVtQ29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0gPSBbaXRlbUNvbnRlbnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtjaGVja05hbWUsIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXV0pO1xyXG4gICAgICAgICAgICBjcmVhdGVDaGVja1JvdyhjaGVja1dyYXBwZXIsIHJlc3VsdCwgY2hlY2tOYW1lLCBpdGVtTmFtZSwgZmFsc2UsIGR1ZURhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBDb21wbGV0ZVwiO1xyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKTtcclxuICAgIGNsZWFyQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25EYW5nZXIpO1xyXG4gICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdW2ldWzFdKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGVja1dyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tSb3cgPSBjaGVja1dyYXBwZXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja1JvdyAmJiBjaGVja1Jvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja1dyYXBwZXIucmVtb3ZlQ2hpbGQoY2hlY2tSb3cpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgdXBkYXRlVGhlblN0b3JlQ2hlY2ssIFtjaGVja05hbWUsIHJlc3VsdFtcIlBNTUctTm90ZXNcIl1bQ0hFQ0tfSU5ESUNBVE9SICsgY2hlY2tOYW1lXV0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tSb3codGlsZSwgcmVzdWx0LCBjaGVja05hbWUsIG5hbWUsIGNoZWNrZWQsIGR1ZURhdGUpIHtcclxuICAgIGNvbnN0IGNoZWNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNoZWNrUm93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNoZWNrUm93LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgY29uc3QgY2hlY2tDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2hlY2tDaXJjbGUudGV4dENvbnRlbnQgPSBjaGVja2VkID8gJ+KXjycgOiAn4peLJztcclxuICAgIGNoZWNrUm93LmFwcGVuZENoaWxkKGNoZWNrQ2lyY2xlKTtcclxuICAgIGNoZWNrQ2lyY2xlLnN0eWxlLmNvbG9yID0gZHVlRGF0ZSAmJiBkdWVEYXRlIDwgRGF0ZS5ub3coKSA/IFwiI2Q5NTM0ZlwiIDogXCIjZjdhNjAwXCI7XHJcbiAgICBjaGVja0NpcmNsZS5zdHlsZS5mb250U2l6ZSA9IFwiMzVweFwiO1xyXG4gICAgY2hlY2tDaXJjbGUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNoZWNrUm93KTtcclxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2hlY2tUZXh0ID0gY3JlYXRlVGV4dFNwYW4obmFtZSk7XHJcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGNoZWNrVGV4dCk7XHJcbiAgICBjaGVja1RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNoZWNrVGV4dC5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgIHZhciBkdWVEYXRlVGV4dDtcclxuICAgIGlmIChkdWVEYXRlKSB7XHJcbiAgICAgICAgZHVlRGF0ZVRleHQgPSBjcmVhdGVUZXh0U3BhbihuZXcgRGF0ZShkdWVEYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pICsgXCIgXCIgKyBuZXcgRGF0ZShkdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IGRheTogXCJudW1lcmljXCIsIG1vbnRoOiBcIm51bWVyaWNcIiwgeWVhcjogXCJudW1lcmljXCIgfSkpO1xyXG4gICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoZHVlRGF0ZSA8IERhdGUubm93KCkgPyBcImNoZWNrLXRpbWUtb3ZlcmR1ZVwiIDogXCJjaGVjay10aW1lXCIpO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICBjaGVja1RleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGV4dFwiKTtcclxuICAgICAgICBjaGVja1Jvdy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICBpZiAoZHVlRGF0ZVRleHQpIHtcclxuICAgICAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrLXRpbWUtY29tcGxldGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tSb3cuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgICBjaGVja0NpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNoZWNrZWQgPSAhY2hlY2tlZDtcclxuICAgICAgICBjaGVja0NpcmNsZS50ZXh0Q29udGVudCA9IGNoZWNrZWQgPyAn4pePJyA6ICfil4snO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlTWF0Y2ggPSByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW0NIRUNLX0lORElDQVRPUiArIGNoZWNrTmFtZV1baV07XHJcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1hdGNoWzBdID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTWF0Y2hbMV0gPSBjaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRleHRcIik7XHJcbiAgICAgICAgICAgIGNoZWNrUm93LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICBpZiAoZHVlRGF0ZVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjaGVjay10aW1lLWNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja1RleHQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWQtdGV4dFwiKTtcclxuICAgICAgICAgICAgY2hlY2tSb3cuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrLXRpbWUtY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVDaGVjaywgW2NoZWNrTmFtZSwgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtDSEVDS19JTkRJQ0FUT1IgKyBjaGVja05hbWVdXSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBtYWtlU3BhY2VyKHRpbGUsIHRvUmVtb3ZlKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU3BhY2VyKTtcclxuICAgIHNwYWNlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNwYWNlcjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ2hlY2tsaXN0cy50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBGbGlnaHRFVEFzIH0gZnJvbSBcIi4vRmxpZ2h0RVRBc1wiO1xyXG5pbXBvcnQgeyBMb2NhbE1hcmtldEFkcyB9IGZyb20gJy4vTG9jYWxNYXJrZXRBZHMnO1xyXG5pbXBvcnQgeyBNb2R1bGVSdW5uZXIgfSBmcm9tIFwiLi9Nb2R1bGVSdW5uZXJcIjtcclxuaW1wb3J0IHsgT3JkZXJFVEFzIH0gZnJvbSBcIi4vT3JkZXJFVEFzXCI7XHJcbmltcG9ydCB7IENvbnN1bWFibGVUaW1lcnMgfSBmcm9tIFwiLi9Db25zdW1hYmxlVGltZXJzXCI7XHJcbmltcG9ydCB7IEZsZWV0RVRBcyB9IGZyb20gXCIuL0ZsZWV0RVRBc1wiO1xyXG5pbXBvcnQgeyBQb3N0TE0gfSBmcm9tIFwiLi9Qb3N0TE1cIjtcclxuaW1wb3J0IHsgU2hpcHBpbmdBZHMgfSBmcm9tIFwiLi9TaGlwcGluZ0Fkc1wiO1xyXG5pbXBvcnQgeyBRdWV1ZUxvYWQgfSBmcm9tIFwiLi9RdWV1ZUxvYWRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0UHJpY2VzLCBnZXRCdXJuLCBnZXRCdXJuU2V0dGluZ3MsIGdldENvbnRyYWN0cyB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcclxuaW1wb3J0IHsgUE1NR1N0eWxlLCBFbmhhbmNlZENvbG9ycywgSWNvblN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgU2NyZWVuVW5wYWNrIH0gZnJvbSBcIi4vU2NyZWVuVW5wYWNrXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IENvbW1hbmRDb3JyZWN0ZXIgfSBmcm9tIFwiLi9Db21tYW5kQ29ycmVjdGVyXCI7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JCdXR0b24gfSBmcm9tIFwiLi9DYWxjdWxhdG9yQnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbnRyYWN0RHJhZnRzIH0gZnJvbSBcIi4vQ29udHJhY3REcmFmdHNcIjtcclxuaW1wb3J0IHsgSW1hZ2VDcmVhdG9yIH0gZnJvbSBcIi4vSW1hZ2VDcmVhdG9yXCI7XHJcbmltcG9ydCB7IEludmVudG9yeU9yZ2FuaXplciB9IGZyb20gXCIuL0ludmVudG9yeU9yZ2FuaXplclwiO1xyXG5pbXBvcnQgeyBIZWFkZXJNaW5pbWl6ZXIgfSBmcm9tIFwiLi9IZWFkZXJNaW5pbWl6ZXJcIjtcclxuaW1wb3J0IHsgUGVuZGluZ0NvbnRyYWN0cyB9IGZyb20gXCIuL1BlbmRpbmdDb250cmFjdHNcIjtcclxudHJ5IHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJQTU1HRXh0ZW5kZWRcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcclxufVxyXG5jYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcIlBNTUdFeHRlbmRlZFwiXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBUaW1lIExvYWRpbmcgUE1NR1wiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgc3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgIHN0eWxlLmlkID0gXCJwbW1nLXN0eWxlXCI7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFBNTUdTdHlsZTtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG4gICAgaWYgKGRvYykge1xyXG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPSBbXCJTY3JlZW5VbnBhY2tcIl07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIGNvbG9ycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG4gICAgICAgIGNvbG9ycy5pZCA9IFwicG1tZy1lbmhhbmNlZC1jb2xvcnNcIjtcclxuICAgICAgICBjb2xvcnMudGV4dENvbnRlbnQgPSBFbmhhbmNlZENvbG9ycztcclxuICAgICAgICBpZiAoZG9jKSB7XHJcbiAgICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZChjb2xvcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImljb25zXCIpIHtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWljb24tY29sb3JzXCI7XHJcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gSWNvblN0eWxlO1xyXG4gICAgICAgIGlmIChkb2MpIHtcclxuICAgICAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByaWNlcyA9IHt9O1xyXG4gICAgZ2V0UHJpY2VzKHByaWNlcywgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pO1xyXG4gICAgdmFyIGJ1cm4gPSBbXTtcclxuICAgIGdldEJ1cm4oYnVybiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSk7XHJcbiAgICB2YXIgYnVyblNldHRpbmdzID0gW107XHJcbiAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKTtcclxuICAgIHZhciBjb250cmFjdHMgPSBbXTtcclxuICAgIGdldENvbnRyYWN0cyhjb250cmFjdHMsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xyXG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXHJcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXHJcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXHJcbiAgICAgICAgbmV3IFBvc3RMTShwcmljZXMpLFxyXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxyXG4gICAgICAgIG5ldyBPcmRlckVUQXMoKSxcclxuICAgICAgICBuZXcgRmxpZ2h0RVRBcygpLFxyXG4gICAgICAgIG5ldyBGbGVldEVUQXMoKSxcclxuICAgICAgICBuZXcgUXVldWVMb2FkKCksXHJcbiAgICAgICAgbmV3IENvbnN1bWFibGVUaW1lcnMocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIGJ1cm4sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSksXHJcbiAgICAgICAgbmV3IEludmVudG9yeU9yZ2FuaXplcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgYnVybiwgcmVzdWx0KSxcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9ucygpLFxyXG4gICAgICAgIG5ldyBJbWFnZUNyZWF0b3IoKSxcclxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdKSxcclxuICAgICAgICBuZXcgSGVhZGVyTWluaW1pemVyKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIm1pbmltaXplX2J5X2RlZmF1bHRcIl0pLFxyXG4gICAgICAgIG5ldyBDb21tYW5kQ29ycmVjdGVyKCksXHJcbiAgICAgICAgbmV3IENhbGN1bGF0b3JCdXR0b24oKSxcclxuICAgICAgICBuZXcgU2lkZWJhcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSxcclxuICAgICAgICBuZXcgUGVuZGluZ0NvbnRyYWN0cyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgY29udHJhY3RzKSxcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24gKyBjdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZSArPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFJvdyA9IGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0Um93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RFdGFEYXRhID0gZmlyc3RSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgIGlmICghZmlyc3RFdGFEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpcnN0RXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKGN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGZpcnN0RXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3RvdGFsRXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGlnaHRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgTG9jYWxNYXJrZXRBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWxtLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyhCVVlJTkd8U0VMTElOR3xDT1JQKVxccyhcXGQrKVxccy4qXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmb3IvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG1hdGNoZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KG1hdGNoZXNbM10ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9ICh0b3RhbENlbnRzIC8gY291bnQgLyAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XHJcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfSBlYSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzaG93QnVmZmVyLCBzZXRTZXR0aW5ncyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgRnJpZW5kbHlOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVSdW5uZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlcywgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzLm1hcChtID0+IHRoaXMubW9kdWxlVG9NRShtKSk7XHJcbiAgICAgICAgdGhpcy54aXQgPSBuZXcgWElUSGFuZGxlcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdICYmIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1vZHVsZVRvTUUobW9kdWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgICAgICBuYW1lOiBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZnJpZW5kbHlOYW1lOiBGcmllbmRseU5hbWVzW21vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lXSB8fCBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGNsZWFudXBUaW1lOiAwLFxyXG4gICAgICAgICAgICBydW5UaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy54aXQucnVuKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdID0gc2hvd0J1ZmZlcihcIlhJVCBTVEFSVFwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3ModGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVuVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDE7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5ydW5UaW1lICs9IHJ1blRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvb3AoKSwgMjUwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Nb2R1bGVSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tIFwiLi9YSVQvU3RhcnRcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi9YSVQvU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tIFwiLi9YSVQvRGVidWdcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL1hJVC9DYWxjdWxhdG9yXCI7XHJcbmltcG9ydCB7IFJlcGFpcnNfcHJlIH0gZnJvbSBcIi4vWElUL1JlcGFpcnNcIjtcclxuaW1wb3J0IHsgQ2hhdF9wcmUgfSBmcm9tIFwiLi9YSVQvQ2hhdFwiO1xyXG5pbXBvcnQgeyBGaW5fcHJlIH0gZnJvbSBcIi4vWElUL0ZpbmFuY2VzXCI7XHJcbmltcG9ydCB7IEVuaGFuY2VkQnVybl9wcmUgfSBmcm9tIFwiLi9YSVQvQnVyblwiO1xyXG5pbXBvcnQgeyBTaGVldFRhYmxlX3ByZSB9IGZyb20gXCIuL1hJVC9TaGVldFRhYmxlXCI7XHJcbmltcG9ydCB7IENvbnRyYWN0c19wcmUgfSBmcm9tIFwiLi9YSVQvQ29udHJhY3RzXCI7XHJcbmltcG9ydCB7IFBSdU5fcHJlLCBQcm9zcGVyaXR5X3ByZSwgU2hlZXRzX3ByZSwgRGlzY29yZF9wcmUgfSBmcm9tIFwiLi9YSVQvV2ViXCI7XHJcbmltcG9ydCB7IEZJT0ludl9wcmUgfSBmcm9tIFwiLi9YSVQvSW52ZW50b3J5XCI7XHJcbmltcG9ydCB7IE5vdGVzIH0gZnJvbSBcIi4vWElUL05vdGVzXCI7XHJcbmltcG9ydCB7IENoZWNrbGlzdHMgfSBmcm9tIFwiLi9YSVQvQ2hlY2tsaXN0c1wiO1xyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSBcIi4vWElUL1NvcnRcIjtcclxuaW1wb3J0IHsgQ29tbWFuZExpc3RzIH0gZnJvbSBcIi4vWElUL0NvbW1hbmRMaXN0c1wiO1xyXG5leHBvcnQgY29uc3QgWElUUHJlRnVuY3Rpb25zID0ge1xyXG4gICAgXCJJTlZcIjogRklPSW52X3ByZSxcclxuICAgIFwiRElTQ09SRFwiOiBEaXNjb3JkX3ByZSxcclxuICAgIFwiU0hFRVRTXCI6IFNoZWV0c19wcmUsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogUHJvc3Blcml0eV9wcmUsXHJcbiAgICBcIlBSVU5cIjogUFJ1Tl9wcmUsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogU2hlZXRUYWJsZV9wcmUsXHJcbiAgICBcIkZJTlwiOiBGaW5fcHJlLFxyXG4gICAgXCJDSEFUXCI6IENoYXRfcHJlLFxyXG4gICAgXCJCVVJOXCI6IEVuaGFuY2VkQnVybl9wcmUsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFNldHRpbmdzLFxyXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcclxuICAgIFwiUkVQQUlSU1wiOiBSZXBhaXJzX3ByZSxcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yLFxyXG4gICAgXCJDQUxDXCI6IENhbGN1bGF0b3IsXHJcbiAgICBcIlNUQVJUXCI6IFN0YXJ0LFxyXG4gICAgXCJERUJVR1wiOiBEZWJ1ZyxcclxuICAgIFwiTk9URVwiOiBOb3RlcyxcclxuICAgIFwiTk9URVNcIjogTm90ZXMsXHJcbiAgICBcIkNIRUNLXCI6IENoZWNrbGlzdHMsXHJcbiAgICBcIkNIRUNLU1wiOiBDaGVja2xpc3RzLFxyXG4gICAgXCJDSEVDS0xJU1RcIjogQ2hlY2tsaXN0cyxcclxuICAgIFwiQ0hFQ0tMSVNUU1wiOiBDaGVja2xpc3RzLFxyXG4gICAgXCJTT1JUXCI6IFNvcnQsXHJcbiAgICBcIkxJU1RcIjogQ29tbWFuZExpc3RzXHJcbn07XHJcbmV4cG9ydCBjb25zdCBYSVRCdWZmZXJUaXRsZXMgPSB7XHJcbiAgICBcIklOVlwiOiBcIkZJTyBJTlZFTlRPUllcIixcclxuICAgIFwiRElTQ09SRFwiOiBcIkRJU0NPUkQgU0VSVkVSXCIsXHJcbiAgICBcIlNIRUVUU1wiOiBcIkdPT0dMRSBTSEVFVFNcIixcclxuICAgIFwiUFJPU1BFUklUWVwiOiBcIlBST1NQRVJJVFlcIixcclxuICAgIFwiUFJVTlwiOiBcIlBSVU4tQ0VQVElPTlwiLFxyXG4gICAgXCJTSEVFVFRBQkxFXCI6IFwiR09PR0xFIFNIRUVUUyBUQUJMRVwiLFxyXG4gICAgXCJGSU5cIjogXCJGSU5BTkNJQUwgT1ZFUlZJRVdcIixcclxuICAgIFwiQ0hBVFwiOiBcIkNIQVRcIixcclxuICAgIFwiQlVSTlwiOiBcIkVOSEFOQ0VEIEJVUk5cIixcclxuICAgIFwiU0VUVElOR1NcIjogXCJQTU1HIFNFVFRJTkdTXCIsXHJcbiAgICBcIkNPTlRSQUNUU1wiOiBcIlBFTkRJTkcgQ09OVFJBQ1RTXCIsXHJcbiAgICBcIlJFUEFJUlNcIjogXCJSRVBBSVJTXCIsXHJcbiAgICBcIkNBTENcIjogXCJDQUxDVUxBVE9SXCIsXHJcbiAgICBcIkNBTENVTEFUT1JcIjogXCJDQUxDVUxBVE9SXCIsXHJcbiAgICBcIlNUQVJUXCI6IFwiU1RBUlRJTkcgV0lUSCBQTU1HXCIsXHJcbiAgICBcIkRFQlVHXCI6IFwiREVCVUdcIixcclxuICAgIFwiTk9URVwiOiBcIk5PVEVcIixcclxuICAgIFwiTk9URVNcIjogXCJOT1RFXCIsXHJcbiAgICBcIkNIRUNLXCI6IFwiQ0hFQ0tMSVNUXCIsXHJcbiAgICBcIkNIRUNLU1wiOiBcIkNIRUNLTElTVFwiLFxyXG4gICAgXCJDSEVDS0xJU1RcIjogXCJDSEVDS0xJU1RcIixcclxuICAgIFwiQ0hFQ0tMSVNUU1wiOiBcIkNIRUNLTElTVFwiLFxyXG4gICAgXCJTT1JUXCI6IFwiU09SVElORyBPUFRJT05TXCIsXHJcbiAgICBcIkxJU1RcIjogXCJDT01NQU5EIExJU1RcIlxyXG59O1xyXG5leHBvcnQgY2xhc3MgWElUSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgICAgIHRoaXMuYnVyblNldHRpbmdzID0gYnVyblNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXM7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiWElUXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgY29uc3QgYnVyblNldHRpbmdzID0gdGhpcy5idXJuU2V0dGluZ3M7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSAoYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXRpbGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkICYmICh0aWxlLmZpcnN0Q2hpbGQuaWQgPT0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiIHx8IHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbm8tbWF0Y2hcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzUmF3ID0gQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpKVswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzUmF3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1Jhdy5jaGFyQXQoNCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHBhcmFtZXRlcnNSYXcuc2xpY2UoNCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWVzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2goa2V5LnNsaWNlKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXBhcmFtZXRlcnMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgJiYgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1yZWxvYWRcIikge1xyXG4gICAgICAgICAgICAgICAgWElUUHJlRnVuY3Rpb25zW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV0odGlsZS5maXJzdENoaWxkLCBwYXJhbWV0ZXJzLCB0aGlzLnJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCB0aGlzLm1vZHVsZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInhpdC10aWxlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjIyMjIyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkIHx8ICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCAhPSBcInBtbWctbm8tbWF0Y2hcIikpKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi4p+zXCIpKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uaWQgPSBcInJlZnJlc2hcIjtcclxuICAgICAgICAgICAgICAgIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5pbnNlcnRCZWZvcmUocmVmcmVzaEJ1dHRvbiwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZUZ1bmMgPSBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgaWYgKCFwcmVGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRnVuY3Rpb24hXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbGUuZmlyc3RDaGlsZC5pZCA9IFwicG1tZy1uby1tYXRjaFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gWElUQnVmZmVyVGl0bGVzW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCB0cnVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHRoaXMucmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUSGFuZGxlci50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZUxpbmsgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gU3RhcnQodGlsZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHRpbGUuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHRpbGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjJweFwiO1xyXG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZVRleHRTcGFuKFwiVGhhbmsgeW91IGZvciB1c2luZyBQTU1HIEV4dGVuZGVkIVwiKTtcclxuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgd2VsY29tZS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJUaGlzIGlzIGEgc2hvcnQgdHV0b3JpYWwgb24gaG93IHRvIGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIGV4dGVuc2lvbi5cIikpO1xyXG4gICAgY29uc3Qgd2Vic2l0ZUxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2Vic2l0ZUxpbmtEaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJzaXRlTGlua0Rpdik7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkRldGFpbHMgb24gd2hhdCBQTU1HIG9mZmVycyBjYW4gYmUgZm91bmQgaGVyZTogXCIpKTtcclxuICAgIGNvbnN0IHdlYnNpdGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB3ZWJzaXRlTGluay5ocmVmID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9wbW1nZXh0ZW5kZWQvaG9tZT9hdXRodXNlcj0wXCI7XHJcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HIEV4dGVuZGVkXCI7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiU3RhcnQgYnkgb3BlbmluZyBhIG5ldyBidWZmZXIgYW5kIGVudGVyaW5nIFwiKSk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0xpbmsgPSBjcmVhdGVMaW5rKFwiWElUIFNFVFRJTkdTXCIsIFwiWElUIFNFVFRJTkdTXCIpO1xyXG4gICAgc2V0dGluZ3NMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpb0Rpdik7XHJcbiAgICBmaW9EaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiRklPIGlzIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBnYXRoZXJzIGRhdGEgZnJvbSB5b3VyIGdhbWUuIFBNTUcgRXh0ZW5kZWQgdXNlcyB0aGF0IGRhdGEgdG8gZGlzcGxheSB1c2VmdWwgaW5mb3JtYXRpb24uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpbnN0YWxsaW5nIEZJTyBoZXJlOiBcIikpO1xyXG4gICAgY29uc3QgZmlvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZmlvTGluay5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9cIjtcclxuICAgIGZpb0xpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBmaW9MaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgZmlvTGluay50ZXh0Q29udGVudCA9IFwiRklPIFdlYnNpdGVcIjtcclxuICAgIGZpb0Rpdi5hcHBlbmRDaGlsZChmaW9MaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYyKTtcclxuICAgIGZpb0RpdjIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIklmIHlvdSBhbHJlYWR5IGhhdmUgYSBGSU8gYWNjb3VudCwgYWRkIHlvdXIgdXNlcm5hbWUgYW5kIEFQSSBLZXkgdG8gdGhlIHRleHQgYm94ZXMgb24gWElUIFNFVFRJTkdTLiBZb3UgY2FuIGdlbmVyYXRlIGFuIEFQSSBLZXkgXCIpKTtcclxuICAgIGNvbnN0IGZpb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBmaW9MaW5rMi5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9zZXR0aW5nc1wiO1xyXG4gICAgZmlvTGluazIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZmlvTGluazIuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBmaW9MaW5rMi50ZXh0Q29udGVudCA9IFwiaGVyZS5cIjtcclxuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoZmlvTGluazIpO1xyXG4gICAgY29uc3Qgd2ViQXBwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2ViQXBwRGl2KTtcclxuICAgIHdlYkFwcERpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICB3ZWJBcHBEaXYuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMjBweFwiO1xyXG4gICAgd2ViQXBwRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiSWYgeW91ciBjb3Jwb3JhdGlvbiBoYXMgYSB3ZWIgYXBwIChBSEksIEZPV0wsIEtBV0EpLCBlbnRlciB0aGF0IGluIHRoZSBXZWIgQXBwIElEIGZpZWxkLlwiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWW91IGNhbiBleHBsb3JlIG90aGVyIHNldHRpbmdzIHRvIGVuYWJsZSBvciBkaXNhYmxlIGZlYXR1cmVzLCBjaGFuZ2UgdGhlIGNvbG9yIHNjaGVtZSwgYW5kIGN1c3RvbWl6ZSB0aGUgbGVmdCBzaWRlYmFyLiBDb250YWN0IFBpQm95MzE0IGluIGdhbWUgb3Igb24gRGlzY29yZCBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuXCIpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU3RhcnQudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZVRleHRTcGFuLCBkb3dubG9hZEZpbGUsIGNyZWF0ZVNlbGVjdE9wdGlvbiwgc2V0U2V0dGluZ3MsIGdldExvY2FsU3RvcmFnZSwgY3JlYXRlVG9vbFRpcCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlLCBXaXRoU3R5bGVzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5ncyh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCB3YXJuaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2FybmluZ0Rpdik7XHJcbiAgICB3YXJuaW5nRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiNHB4XCI7XHJcbiAgICB3YXJuaW5nRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQ2hhbmdlcyByZXF1aXJlIGEgcmVmcmVzaCB0byB0YWtlIGVmZmVjdC5cIikpO1xyXG4gICAgY29uc3QgaGVscERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlbHBEaXYpO1xyXG4gICAgaGVscERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xyXG4gICAgaGVscERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlNlZSBhIGZ1bGwgbGlzdCBvZiBmZWF0dXJlcyBvbiBcIikpO1xyXG4gICAgY29uc3Qgd2Vic2l0ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHdlYnNpdGVMaW5rLmhyZWYgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3BtbWdleHRlbmRlZC9mZWF0dXJlcz9hdXRodXNlcj0wXCI7XHJcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HJ3MgV2Vic2l0ZVwiO1xyXG4gICAgaGVscERpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhdXRoZW50aWNhdGlvbkhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkF1dGhlbnRpY2F0aW9uIFNldHRpbmdzXCIpKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJFbnRlciB5b3VyIEZJTyB1c2VybmFtZSBhbmQgQVBJIGtleSwgYXMgd2VsbCBhcyBhIGNvcnBvcmF0ZSB3ZWIgYXBwIElEXCIsIFwicmlnaHRcIikpO1xyXG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhdXRoZW50aWNhdGlvbkhlYWRlcik7XHJcbiAgICBjb25zdCB1c2VybmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJGSU8gVXNlcm5hbWU6IFwiKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gfHwgXCJcIjtcclxuICAgIHVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSA9ICF1c2VybmFtZUlucHV0LnZhbHVlIHx8IHVzZXJuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiA/IHVuZGVmaW5lZCA6IHVzZXJuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xyXG4gICAgdXNlcm5hbWVEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHVzZXJuYW1lRGl2KTtcclxuICAgIGNvbnN0IGFwaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhcGlMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIEFQSSBLZXk6IFwiKTtcclxuICAgIGFwaUxhYmVsLnN0eWxlLm1pbldpZHRoID0gXCI3N3B4XCI7XHJcbiAgICBhcGlMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbnN0IGFwaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYXBpSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0gfHwgXCJcIjtcclxuICAgIGFwaUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdID0gIWFwaUlucHV0LnZhbHVlIHx8IGFwaUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiBhcGlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBhcGlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGFwaUlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICBhcGlEaXYuYXBwZW5kQ2hpbGQoYXBpTGFiZWwpO1xyXG4gICAgYXBpRGl2LmFwcGVuZENoaWxkKGFwaUlucHV0KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYXBpRGl2KTtcclxuICAgIGNvbnN0IHdlYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3ZWJMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiV2ViIEFwcCBJRDogXCIpO1xyXG4gICAgd2ViTGFiZWwuc3R5bGUubWluV2lkdGggPSBcIjc3cHhcIjtcclxuICAgIHdlYkxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29uc3Qgd2ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB3ZWJJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdIHx8IFwiXCI7XHJcbiAgICB3ZWJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID0gIXdlYklucHV0LnZhbHVlIHx8IHdlYklucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB3ZWJJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB3ZWJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHdlYkRpdi5hcHBlbmRDaGlsZCh3ZWJMYWJlbCk7XHJcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViSW5wdXQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJEaXYpO1xyXG4gICAgY29uc3QgZW5oYW5jZWRDb2xvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29sb3IgU2NoZW1lXCIpKTtcclxuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlNlbGVjdCBhIGNvbG9yIHNjaGVtZSB0byBjdXN0b21pemUgbWF0ZXJpYWwgaWNvbnMuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgZW5oYW5jZWRDb2xvckhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGVuaGFuY2VkQ29sb3JIZWFkZXIpO1xyXG4gICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiQ29sb3IgU2NoZW1lOlwiKTtcclxuICAgIGNvbG9yTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgY29sb3JTZWxlY3QubmFtZSA9IFwiY29sb3JzLXNlbGVjdFwiO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSBcImNvbG9ycy1zZWxlY3RcIjtcclxuICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdE9wdGlvbihcIkVuaGFuY2VkXCIsIFwiZW5oYW5jZWRcIikpO1xyXG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiSWNvbnNcIiwgXCJpY29uc1wiKSk7XHJcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJEZWZhdWx0XCIsIFwiZGVmYXVsdFwiKSk7XHJcbiAgICBjb2xvclNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpO1xyXG4gICAgY29sb3JTZWxlY3Quc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiZW5oYW5jZWRcIiB8fCAhcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdKSB7XHJcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiaWNvbnNcIikge1xyXG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzFdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzJdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbG9yU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29sb3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID0gY29sb3JTZWxlY3Quc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvclNlbGVjdCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcclxuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtaW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIk1pbmltaXplIEhlYWRlcnMgQnkgRGVmYXVsdFwiKSk7XHJcbiAgICBtaW5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKFwiTWluaW1pemUgaGVhZGVyIHJvd3Mgb24gQ1hzIGFuZCBjb250cmFjdHMgYnkgZGVmYXVsdC5cIiwgXCJyaWdodFwiKSk7XHJcbiAgICBtaW5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBtaW5MYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgbWluRGl2LmFwcGVuZENoaWxkKG1pbkxhYmVsKTtcclxuICAgIGNvbnN0IG1pbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbWluQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIG1pbkNoZWNrYm94LmNoZWNrZWQgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJtaW5pbWl6ZV9ieV9kZWZhdWx0XCJdO1xyXG4gICAgbWluRGl2LmFwcGVuZENoaWxkKG1pbkNoZWNrYm94KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobWluRGl2KTtcclxuICAgIG1pbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibWluaW1pemVfYnlfZGVmYXVsdFwiXSA9IG1pbkNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXJuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYnVybkxhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQnVybiBTZXR0aW5nc1wiKSk7XHJcbiAgICBidXJuTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlNldCB0aGUgdGhyZXNob2xkcyBmb3IgeWVsbG93IGFuZCByZWQgY29uc3VtYWJsZSBsZXZlbHMgaW4gYnVybiB0aWxlcyAoaW4gZGF5cykuXCIsIFwicmlnaHRcIikpO1xyXG4gICAgYnVybkxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIGJ1cm5MYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgYnVybkRpdi5hcHBlbmRDaGlsZChidXJuTGFiZWwpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gPSBbMywgN107XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnVybkRpdi5hcHBlbmRDaGlsZChzZXREaXYpO1xyXG4gICAgc2V0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNvbnN0IHJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXREaXYuYXBwZW5kQ2hpbGQocmVkRGl2KTtcclxuICAgIHJlZERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlJlZCBUaHJlc2hvbGQ6IFwiKSk7XHJcbiAgICBjb25zdCByZWRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHJlZEluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgcmVkSW4udmFsdWUgPSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszXSlbMF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcclxuICAgIHJlZERpdi5hcHBlbmRDaGlsZChyZWRJbik7XHJcbiAgICByZWRJbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHJlZEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICByZWRJbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXVswXSA9IHBhcnNlRmxvYXQocmVkSW4udmFsdWUpO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHllbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXREaXYuYXBwZW5kQ2hpbGQoeWVsRGl2KTtcclxuICAgIHllbERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlllbGxvdyBUaHJlc2hvbGQ6IFwiKSk7XHJcbiAgICBjb25zdCB5ZWxJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHllbEluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgeWVsSW4udmFsdWUgPSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcclxuICAgIHllbERpdi5hcHBlbmRDaGlsZCh5ZWxJbik7XHJcbiAgICB5ZWxJbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHllbEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB5ZWxJbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXVsxXSA9IHBhcnNlRmxvYXQoeWVsSW4udmFsdWUpO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVybkRpdik7XHJcbiAgICBjb25zdCBob3RrZXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaG90a2V5SGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTGVmdCBTaWRlYmFyIEJ1dHRvbnNcIikpO1xyXG4gICAgaG90a2V5SGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAoXCJDcmVhdGUgaG90a2V5cyBvbiB0aGUgbGVmdCBzaWRlYmFyLiBUaGUgZmlyc3QgdmFsdWUgaXMgd2hhdCB3aWxsIGJlIGRpc3BsYXllZCwgdGhlIHNlY29uZCBpcyB0aGUgY29tbWFuZC5cIiwgXCJyaWdodFwiKSk7XHJcbiAgICBob3RrZXlIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlIZWFkZXIpO1xyXG4gICAgY29uc3QgaG90a2V5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlJbnB1dERpdik7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcclxuICAgIH1cclxuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0uZm9yRWFjaChob3RrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgaG90a2V5SW5wdXREaXYpO1xyXG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBob3RrZXlJbnB1dERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG1ha2VQdXNoQnV0dG9uKFwiK1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKFtbXSwgW11dLCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBTdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgY29uc3Qgc2NyZWVuVW5wYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHNjcmVlblVucGFja0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNjcmVlbiBVbnBhY2sgRXhjbHVzaW9uc1wiKSk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIkxpc3Qgc2NyZWVucyB0byBiZSBleGNsdWRlZCBmcm9tIHNjcmVlbiB1bnBhY2suIFNlcGFyYXRlIHNjcmVlbnMgd2l0aCBhIGNvbW1hLlwiLCBcInJpZ2h0XCIpKTtcclxuICAgIHNjcmVlblVucGFja0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNjcmVlblVucGFja0hlYWRlcik7XHJcbiAgICBjb25zdCBub3RpZkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG5vdGlmRGl2KTtcclxuICAgIG5vdGlmRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiTGlzdCBzY3JlZW4gbmFtZXMgc2VwYXJhdGVkIGJ5IGNvbW1hcywgbm8gc3BhY2VzLlwiKSk7XHJcbiAgICBjb25zdCBleGNsdXNpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1bnBhY2tfZXhjZXB0aW9uc1wiXSA9PSB1bmRlZmluZWQgPyBcIlwiIDogcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0uam9pbihcIixcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdID0gZXhjbHVzaW9uSW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZXhjbHVzaW9uSW5wdXQpO1xyXG4gICAgY29uc3QgbW9kdWxlU2V0dGluZ3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUb2dnbGUgRmVhdHVyZXNcIikpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcChcIlRvZ2dsZSBmZWF0dXJlcyBvbiBhbmQgb2ZmLiBUaGUgeWVsbG93IFggY2xlYW5zIHVwIGFueSBzdHJheSBlbGVtZW50cy5cIiwgXCJyaWdodFwiKSk7XHJcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG1vZHVsZVNldHRpbmdzSGVhZGVyKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uQ29udGVudCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgbW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuU2lkZWJhckxpbmUsIFN0eWxlLkZvbnRzUmVndWxhcikpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihtcC5mcmllbmRseU5hbWUpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcmlnaHQuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICByaWdodC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBtYWtlVG9nZ2xlQnV0dG9uKFwiT25cIiwgXCJPZmZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtcC5lbmFibGVkID0gIW1wLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXVtpXSA9PSBtcC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5wdXNoKG1wLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgfSwgbXAuZW5hYmxlZCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gXCJPZmZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcclxuICAgICAgICBjb25zdCBjbGVhbnVwID0gbWFrZVB1c2hCdXR0b24oXCJ4XCIsICgpID0+IG1wLm1vZHVsZS5jbGVhbnVwKHRydWUpKTtcclxuICAgICAgICBjbGVhbnVwLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI4cHhcIjtcclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjbGVhbnVwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGltcG9ydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBpbXBvcnRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJbXBvcnQvRXhwb3J0IFNldHRpbmdzXCIpKTtcclxuICAgIGltcG9ydEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydEhlYWRlcik7XHJcbiAgICBjb25zdCBpbXBvcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGltcG9ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSW1wb3J0IFNldHRpbmdzXCI7XHJcbiAgICBpbXBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgaW1wb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChpbXBvcnRCdXR0b24pO1xyXG4gICAgY29uc3QgaW1wb3J0RmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW1wb3J0RmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGltcG9ydEZpbGVJbnB1dC5hY2NlcHQgPSBcIi5qc29uXCI7XHJcbiAgICBpbXBvcnRGaWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGltcG9ydEZpbGVJbnB1dCk7XHJcbiAgICBpbXBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbXBvcnRGaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVycm9yVGV4dEJveCA9IGNyZWF0ZVRleHRTcGFuKFwiRXJyb3IgTG9hZGluZyBGaWxlIVwiKTtcclxuICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0Qm94KTtcclxuICAgIGltcG9ydEZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVPdXRwdXQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGNsdWRlID0gW1widXNlcm5hbWVcIiwgXCJhcGlrZXlcIiwgXCJ3ZWJhcHBpZFwiXTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbGVPdXRwdXQpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1ba2V5XSA9IGZpbGVPdXRwdXRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBFcnJvciBlbmNvdW50ZXJlZCBwcm9jZXNzaW5nIGZpbGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV4cG9ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBleHBvcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkV4cG9ydCBTZXR0aW5nc1wiO1xyXG4gICAgZXhwb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGV4cG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgZXhwb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgZXhwb3J0QnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoZXhwb3J0QnV0dG9uKTtcclxuICAgIGV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSBbXCJ1c2VybmFtZVwiLCBcImFwaWtleVwiLCBcIndlYmFwcGlkXCJdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1ba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvd25sb2FkRmlsZShvdXRwdXQsIFwicG1tZy1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKTtcclxuICAgIH0pO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChpbXBvcnREaXYpO1xyXG4gICAgY29uc3QgaW1wb3J0Tm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbXBvcnROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGltcG9ydE5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkltcG9ydCBOb3Rlc1wiO1xyXG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBpbXBvcnROb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBpbXBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0Tm90ZURpdi5hcHBlbmRDaGlsZChpbXBvcnROb3RlQnV0dG9uKTtcclxuICAgIGNvbnN0IGltcG9ydE5vdGVGaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbXBvcnROb3RlRmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuYWNjZXB0ID0gXCIuanNvblwiO1xyXG4gICAgaW1wb3J0Tm90ZUZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbXBvcnROb3RlRGl2LmFwcGVuZENoaWxkKGltcG9ydE5vdGVGaWxlSW5wdXQpO1xyXG4gICAgaW1wb3J0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGltcG9ydE5vdGVGaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVycm9yTm90ZVRleHRCb3ggPSBjcmVhdGVUZXh0U3BhbihcIkVycm9yIExvYWRpbmcgRmlsZSFcIik7XHJcbiAgICBlcnJvck5vdGVUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGltcG9ydE5vdGVEaXYuYXBwZW5kQ2hpbGQoZXJyb3JOb3RlVGV4dEJveCk7XHJcbiAgICBpbXBvcnROb3RlRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghZSB8fCAhZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU91dHB1dCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKGZpbGVPdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JOb3RlVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEVycm9yIGVuY291bnRlcmVkIHByb2Nlc3NpbmcgZmlsZSFcIik7XHJcbiAgICAgICAgICAgICAgICBlcnJvck5vdGVUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV4cG9ydE5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRXhwb3J0IE5vdGVzXCI7XHJcbiAgICBleHBvcnROb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGV4cG9ydE5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGV4cG9ydE5vdGVCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBleHBvcnROb3RlQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBpbXBvcnROb3RlRGl2LmFwcGVuZENoaWxkKGV4cG9ydE5vdGVCdXR0b24pO1xyXG4gICAgZXhwb3J0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdldExvY2FsU3RvcmFnZShcIlBNTUctTm90ZXNcIiwgZG93bmxvYWRGaWxlLCBcInBtbWctbm90ZXNcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIik7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0Tm90ZURpdik7XHJcbiAgICByZXR1cm4gW3BhcmFtZXRlcnMsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3NdO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgZnVsbERpdikge1xyXG4gICAgaWYgKGhvdGtleS5sZW5ndGggIT0gMikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRpc3BsYXllZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRWYWx1ZSk7XHJcbiAgICBjb25zdCBjb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29tbWFuZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGNvbW1hbmQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWFuZCk7XHJcbiAgICBjb25zdCByZW1vdmUgPSBtYWtlUHVzaEJ1dHRvbihcIlhcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBjb21tYW5kLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5ZWRWYWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRpdi5jaGlsZHJlbikuZm9yRWFjaChlbGVtID0+IHsgZGl2LnJlbW92ZUNoaWxkKGVsZW0pOyByZXR1cm47IH0pO1xyXG4gICAgfSwgU3R5bGUuQnV0dG9uRGFuZ2VyKTtcclxuICAgIHJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBob3RrZXlbMF07XHJcbiAgICBjb21tYW5kLnZhbHVlID0gaG90a2V5WzFdO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZnVsbERpdi5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gaG90a2V5cztcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb21tYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IGhvdGtleXM7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5mdW5jdGlvbiBtYWtlUHVzaEJ1dHRvbih0ZXh0LCBmLCBzdHlsZSA9IFN0eWxlLkJ1dHRvblByaW1hcnkpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlKTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBtYWtlVG9nZ2xlQnV0dG9uKG9uLCBvZmYsIGYsIHN0YXRlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGNvbnN0IHNldExvb2sgPSAocykgPT4ge1xyXG4gICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBzID8gb24gOiBvZmY7XHJcbiAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcoc3RhdGUpKTtcclxuICAgIHNldExvb2soc3RhdGUpO1xyXG4gICAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhKHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKG5ld1N0YXRlKSk7XHJcbiAgICAgICAgc2V0TG9vayhuZXdTdGF0ZSk7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfTtcclxuICAgIHRvZ2dsZS5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xyXG4gICAgcmV0dXJuIHRvZ2dsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvU2V0dGluZ3MudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRvd25sb2FkRmlsZSwgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBEZWJ1Zyh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkb3dubG9hZEJ1dHRvbnMpO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSwgXCJEb3dubG9hZCBGdWxsIFNldHRpbmdzXCIsIFwicG1tZy1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oZnVsbEJ1cm5bcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl1dLCBcIkRvd25sb2FkIEJ1cm5cIiwgXCJwbW1nLWJ1cm5cIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKGJ1cm5TZXR0aW5ncywgXCJEb3dubG9hZCBCdXJuIFNldHRpbmdzXCIsIFwicG1tZy1idXJuLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcclxuICAgIGNvbnN0IGVuZHBvaW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW5kcG9pbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiR2V0IEZJTyBFbmRwb2ludCAoZXg6IC9pbmZyYXN0cnVjdHVyZS9Qcm94aW9uKVwiO1xyXG4gICAgZW5kcG9pbnRMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZW5kcG9pbnRMYWJlbC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludExhYmVsKTtcclxuICAgIGNvbnN0IGVuZHBvaW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlbmRwb2ludElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZW5kcG9pbnRJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGVuZHBvaW50SW5wdXQpO1xyXG4gICAgY29uc3QgZW5kcG9pbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZW5kcG9pbnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkRvd25sb2FkIEZJTyBFbmRwb2ludFwiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyAoZW5kcG9pbnRJbnB1dC52YWx1ZS5jaGFyQXQoMCkgPT0gXCIvXCIgPyBcIlwiIDogXCIvXCIpICsgZW5kcG9pbnRJbnB1dC52YWx1ZTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIERlYnVnX3Bvc3QsIHVybCwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl1dLCBudWxsKTtcclxuICAgIH0pO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGVuZHBvaW50QnV0dG9uKTtcclxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEZWJ1Z19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoanNvbmRhdGEpKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChleCkgeyB9XHJcbiAgICBkb3dubG9hZEZpbGUoanNvbmRhdGEsIFwiZmlvLWVuZHBvaW50XCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIsIGZhbHNlKTtcclxuICAgIHJldHVybiBbdGlsZSwgcGFyYW1ldGVyc107XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWRCdXR0b24oZGF0YSwgYnV0dG9uTmFtZSwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRvd25sb2FkQnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcclxuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGRvd25sb2FkQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkb3dubG9hZEZpbGUoZGF0YSwgZmlsZU5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZG93bmxvYWRCdXR0b247XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0RlYnVnLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGN1bGF0b3IodGlsZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IGNhbGNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjYWxjRGl2KTtcclxuICAgIHRpbGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGlsZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCI0MDBweFwiO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgb3V0cHV0LnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBvdXRwdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgb3V0cHV0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLndpZHRoID0gXCI2MCVcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUubWluV2lkdGggPSBcIjE4MHB4XCI7XHJcbiAgICBjb25zdCBoaXN0b3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGlzdG9yeURpdik7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLndpZHRoID0gXCIzNSVcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUubWFyZ2luVG9wID0gXCIxMHB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLm1heEhlaWdodCA9IFwiMTk1cHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDQwLCA0MylcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYig0Myw3Miw5MClcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjFweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJTdHlsZSA9IFwic29saWRcIjtcclxuICAgIGNvbnN0IGhpc3RvcnlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGhpc3RvcnlEaXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVRhYmxlKTtcclxuICAgIGNvbnN0IGhpc3RvcnlUYWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICBoaXN0b3J5VGFibGUuYXBwZW5kQ2hpbGQoaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICBvdXRwdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIG91dHB1dC5zdHlsZS53aWR0aCA9IFwiOTAlXCI7XHJcbiAgICBvdXRwdXQuc3R5bGUuaGVpZ2h0ID0gXCIzNnB4XCI7XHJcbiAgICBvdXRwdXQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICBvdXRwdXQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKG91dHB1dCk7XHJcbiAgICB2YXIgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICB2YXIgcHJldlZhbHVlID0gbnVsbDtcclxuICAgIHZhciBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgIHZhciBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgdmFyIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICBjb25zdCBrZXlwYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChrZXlwYWQpO1xyXG4gICAga2V5cGFkLnN0eWxlLndpZHRoID0gXCI5NSVcIjtcclxuICAgIGtleXBhZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBrZXlwYWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDQsIDFmcilcIjtcclxuICAgIGNvbnN0IGxheW91dCA9IFtbNywgbnVsbF0sIFs4LCBudWxsXSwgWzksIG51bGxdLCBbXCLDt1wiLCBcIiMzZmEyZGVcIl0sIFs0LCBudWxsXSwgWzUsIG51bGxdLCBbNiwgbnVsbF0sIFtcInhcIiwgXCIjM2ZhMmRlXCJdLCBbMSwgbnVsbF0sIFsyLCBudWxsXSwgWzMsIG51bGxdLCBbXCItXCIsIFwiIzNmYTJkZVwiXSwgWzAsIG51bGxdLCBbXCIuXCIsIG51bGxdLCBbXCLCsVwiLCBudWxsXSwgW1wiK1wiLCBcIiMzZmEyZGVcIl1dO1xyXG4gICAgbGF5b3V0LmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gKG9wdFswXSA9PSAwID8gXCIwXCIgOiBvcHRbMF0gfHwgXCJcIikudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAob3B0WzFdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5cGFkLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRbMF0gPT0gXCIrXCIgfHwgb3B0WzBdID09IFwiLVwiIHx8IG9wdFswXSA9PSBcInhcIiB8fCBvcHRbMF0gPT0gXCLDt1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gb3B0WzBdO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRbMF0gPT0gXCLCsVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy50b1N0cmluZygpLmNoYXJBdCgwKSA9PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIi1cIiArIGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBib3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChib3R0b21EaXYpO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLndpZHRoID0gXCI5NSVcIjtcclxuICAgIGJvdHRvbURpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBib3R0b21EaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDIsIDFmcilcIjtcclxuICAgIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChjbGVhcik7XHJcbiAgICBjbGVhci50ZXh0Q29udGVudCA9IFwiQ2xlYXJcIjtcclxuICAgIGNsZWFyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgIGNsZWFyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBjbGVhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMTcsIDgzLCA3OSlcIjtcclxuICAgIGNsZWFyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcclxuICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGVudGVyKTtcclxuICAgIGVudGVyLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xyXG4gICAgZW50ZXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgZW50ZXIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIGVudGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzVjYjg1Y1wiO1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCIxXCIgfHwgZS5rZXkgPT09IFwiMlwiIHx8IGUua2V5ID09PSBcIjNcIiB8fCBlLmtleSA9PT0gXCI0XCIgfHwgZS5rZXkgPT09IFwiNVwiIHx8IGUua2V5ID09PSBcIjZcIiB8fCBlLmtleSA9PT0gXCI3XCIgfHwgZS5rZXkgPT09IFwiOFwiIHx8IGUua2V5ID09PSBcIjlcIiB8fCBlLmtleSA9PT0gXCIwXCIgfHwgZS5rZXkgPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IGUua2V5O1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCIrXCIgfHwgZS5rZXkgPT09IFwiLVwiIHx8IGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCIqXCIgfHwgZS5rZXkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gZS5rZXk7XHJcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCI9XCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSBvdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkucmVtb3ZlQ2hpbGQoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbltoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5Lmluc2VydEJlZm9yZSh0ciwgaGlzdG9yeVRhYmxlQm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pIHtcclxuICAgIGN1cnJlbnRTdHJpbmcgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCIrXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlICsgY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCItXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC0gY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCJ4XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIipcIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgKiBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIsO3XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgLyBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0NhbGN1bGF0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjbGVhckNoaWxkcmVuLCBYSVRXZWJSZXF1ZXN0LCBzZXRTZXR0aW5ncyB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBSZXBhaXJzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgVXNlcm5hbWVcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXlcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcmFtZXRlcnNbcGFyYW1ldGVycy5sZW5ndGggLSAxXVtcIlBNTUdFeHRlbmRlZFwiXSkge1xyXG4gICAgICAgIHBhcmFtZXRlcnMucHVzaChyZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBSZXBhaXJzX3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3NpdGVzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBSZXBhaXJzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhcmFtZXRlcnNbcGFyYW1ldGVycy5sZW5ndGggLSAxXTtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXBhaXJEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXBhaXJEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkFsbCBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcclxuICAgICAgICB0aHJlc2hvbGRUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInJlcGFpcl90aHJlc2hvbGRcIl0gPyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdIDogXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJQbGFuZXRcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVpbGRpbmdzID0gW107XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBzaXRlW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzLnB1c2goW3NpdGVbXCJQbGFuZXROYW1lXCJdLCBidWlsZF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkaW5ncy5zb3J0KGdsb2JhbEJ1aWxkaW5nU29ydCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA9IHRocmVzaG9sZElucHV0LnZhbHVlIHx8IFwiNzBcIjtcclxuICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSArIFwiIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIHZhciBzaXRlRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzaXRlW1wiUGxhbmV0TmFtZVwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSB8fCBzaXRlW1wiUGxhbmV0SWRlbnRpZmllclwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgc2l0ZURhdGEgPSBzaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2l0ZURhdGEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRocmVzaG9sZERpdik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVGV4dCA9IGNyZWF0ZVRleHRTcGFuKFwiQWdlIFRocmVzaG9sZDpcIik7XHJcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJyZXBhaXJfdGhyZXNob2xkXCJdID8gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA6IFwiNzBcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcclxuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcclxuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2l0ZURhdGFbXCJCdWlsZGluZ3NcIl0uc29ydChidWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oYm9keSk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wicmVwYWlyX3RocmVzaG9sZFwiXSA9IHRocmVzaG9sZElucHV0LnZhbHVlIHx8IFwiNzBcIjtcclxuICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCkge1xyXG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0ge307XHJcbiAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1tcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1tcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1tcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSwgZGF0ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pLCAoYnVpbGRpbmdbXCJDb25kaXRpb25cIl0gKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiVcIl07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XHJcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xyXG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCkge1xyXG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0ge307XHJcbiAgICBidWlsZGluZ3MuZm9yRWFjaChidWlsZGluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBpZiAobm9uUHJvZC5pbmNsdWRlcyhidWlsZGluZ1sxXVtcIkJ1aWxkaW5nVGlja2VyXCJdKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSAoYnVpbGRpbmdbMV1bXCJCdWlsZGluZ0xhc3RSZXBhaXJcIl0gfHwgYnVpbGRpbmdbMV1bXCJCdWlsZGluZ0NyZWF0ZWRcIl0pKSAvIDg2NDAwMDAwKTtcclxuICAgICAgICBpZiAoZGF0ZSA8IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRpbmdbMV1bXCJSZXBhaXJNYXRlcmlhbHNcIl0uZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFtidWlsZGluZ1sxXVtcIkJ1aWxkaW5nVGlja2VyXCJdLCBidWlsZGluZ1swXSwgZGF0ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pLCAoYnVpbGRpbmdbMV1bXCJDb25kaXRpb25cIl0gKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiVcIl07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XHJcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xyXG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRpbmdTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uXCJdID4gYltcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcclxufVxyXG5mdW5jdGlvbiBnbG9iYWxCdWlsZGluZ1NvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbMV1bXCJDb25kaXRpb25cIl0gPiBiWzFdW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9SZXBhaXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ2hhdF9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jaGF0L2Rpc3BsYXkvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ2hhdF9wb3N0KGNoYXREaXYsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY2hhdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNoYXREYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICBjaGF0RGl2LnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHBhcmFtZXRlcnNbMV0gKyBcIiBHbG9iYWwgU2l0ZSBPd25lcnNcIjtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY2hhdERhdGEuZm9yRWFjaChjaGF0ID0+IHtcclxuICAgICAgICBjb25zdCBjaGF0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuY2xhc3NMaXN0LmFkZChcImNoYXQtbGluZVwiKTtcclxuICAgICAgICBjaGF0RGl2LmFwcGVuZENoaWxkKGNoYXRMaW5lKTtcclxuICAgICAgICBjb25zdCB0aW1lRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgICAgICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiIH0pO1xyXG4gICAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRpbWUtZGF0ZVwiKTtcclxuICAgICAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lRGF0ZURpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KTtcclxuICAgICAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICB0aW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKHRpbWVEYXRlRGl2KTtcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XHJcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoY2hhdFtcIk1lc3NhZ2VUeXBlXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDSEFUXCI6XHJcbiAgICAgICAgICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJNZXNzYWdlVGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiSk9JTkVEXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgam9pbmVkLlwiO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMRUZUXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgbGVmdC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvQ2hhdC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgY3JlYXRlRmluYW5jaWFsVGV4dEJveCwgY3JlYXRlVGV4dFNwYW4sIFhJVFdlYlJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSArIFwiL2V4ZWM/bW9kZT0lMjJmaW4lMjImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRmluX3Bvc3QsIHVybCwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZpbl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aWxlSGVhZGVyLnRpdGxlID0gXCJGaW5hbmNpYWwgT3ZlcnZpZXdcIjtcclxuICAgIHRpbGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIktleSBGaWd1cmVzXCI7XHJcbiAgICB0aWxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmaW4tdGl0bGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpbGVIZWFkZXIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVsxXSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJGaXhlZCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVsyXSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJDdXJyZW50IEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzRdKS50b0xvY2FsZVN0cmluZygpLCBcIkxpcXVpZCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs3XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJFcXVpdHlcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs1XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJMaWFiaWxpdGllc1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICBjb25zdCBub3cgPSBkYXRhWzBdWzBdO1xyXG4gICAgdmFyIHdlZWtBZ28gPSAtMTtcclxuICAgIHZhciBiZXN0R3Vlc3MgPSA4NjQwMDAwMDAwMDtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCkgPCBiZXN0R3Vlc3MpIHtcclxuICAgICAgICAgICAgYmVzdEd1ZXNzID0gTWF0aC5hYnMoTWF0aC5hYnMobm93IC0gZGF0YVtpXVswXSkgLSA3ICogODY0MDAwMDApO1xyXG4gICAgICAgICAgICB3ZWVrQWdvID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAod2Vla0FnbyAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpdCA9IE1hdGgucm91bmQoZGF0YVswXVs3XSAtIGRhdGFbd2Vla0Fnb11bN10pO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcHJvZml0ID4gMCA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gocHJvZml0LnRvTG9jYWxlU3RyaW5nKCksIFwiUHJvZml0XCIsIGNvbG9yKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBicmVha2Rvd25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBicmVha2Rvd25IZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBCcmVha2Rvd25cIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci50ZXh0Q29udGVudCA9IFwiSW52ZW50b3J5IEJyZWFrZG93blwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmaW4tdGl0bGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJyZWFrZG93bkhlYWRlcik7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IFtcIk5hbWVcIiwgXCJGaXhlZCBBc3NldHNcIiwgXCJDdXJyZW50IEFzc2V0c1wiLCBcIlRvdGFsIEFzc2V0c1wiXTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgY29uc3QgYnJlYWtkb3duID0gSlNPTi5wYXJzZShkYXRhWzBdWzhdKTtcclxuICAgIGJyZWFrZG93bi5zb3J0KGZpbmFuY2lhbFNvcnQpO1xyXG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBicmVha2Rvd24pIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChmaXJzdFRhYmxlRWxlbSk7XHJcbiAgICAgICAgZmlyc3RUYWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocm93RGF0YVswXSkpO1xyXG4gICAgICAgIHJvd0RhdGEuc2hpZnQoKTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBmaW5hbmNpYWxTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhWzNdIDwgYlszXSA/IDEgOiAtMTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvRmluYW5jZXMudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZVRleHRTcGFuLCBzZXRTZXR0aW5ncywgQ2F0ZWdvcnlTb3J0LCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBnZXRHcm91cEJ1cm4sIGdldEJ1cm4gfSBmcm9tIFwiLi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gRW5oYW5jZWRCdXJuX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlZnJlc2gpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBBUEkgS2V5IVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFwaWtleSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl07XHJcbiAgICBpZiAocmVmcmVzaCkge1xyXG4gICAgICAgIGZ1bGxCdXJuW3VzZXJuYW1lXSA9IFtdO1xyXG4gICAgICAgIGdldEJ1cm4oZnVsbEJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfVxyXG4gICAgdmFyIGJ1cm47XHJcbiAgICB2YXIgdW5sb2FkZWQgPSBmYWxzZTtcclxuICAgIHZhciBwbGFuZXQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+PSAzICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICBpZiAoZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0gJiYgZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmlkICE9IFwicG1tZy1yZWxvYWRcIikge1xyXG4gICAgICAgICAgICAgICAgZ2V0R3JvdXBCdXJuKGZ1bGxCdXJuLCBwYXJhbWV0ZXJzWzJdLCBhcGlrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGZ1bGxCdXJuW3VzZXJuYW1lXSAhPSB1bmRlZmluZWQgJiYgZnVsbEJ1cm5bdXNlcm5hbWVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3VzZXJuYW1lXTtcclxuICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYnVyblNldHRpbmdzWzBdID09IFwibG9hZGluZ1wiIHx8IHVubG9hZGVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBCdXJuIERhdGEuLi5cIjtcclxuICAgICAgICB0aWxlLmlkID0gXCJwbW1nLXJlbG9hZFwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRpbGUuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICB2YXIgc2V0dGluZ3M7XHJcbiAgICBpZiAocGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpID09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgIHZhciBpbnYgPSB7fTtcclxuICAgICAgICB2YXIgY29ucyA9IHt9O1xyXG4gICAgICAgIHZhciBmdWxsQ29tbWFuZCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNbM10pIHtcclxuICAgICAgICAgICAgZnVsbENvbW1hbmQgPSBwYXJhbWV0ZXJzLmpvaW4oXCIgXCIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmZvckVhY2gocGxhbmV0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzNdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISgocGxhbmV0RGF0YSAmJiBwbGFuZXREYXRhW1wiUGxhbmV0TmFtZVwiXSAmJiBmdWxsQ29tbWFuZC5tYXRjaChwbGFuZXREYXRhW1wiUGxhbmV0TmFtZVwiXS50b1VwcGVyQ2FzZSgpKSkgfHwgKHBsYW5ldERhdGEgJiYgcGxhbmV0RGF0YVtcIlBsYW5ldE5hdHVyYWxJZFwiXSAmJiBmdWxsQ29tbWFuZC5tYXRjaChwbGFuZXREYXRhW1wiUGxhbmV0TmF0dXJhbElkXCJdLnRvVXBwZXJDYXNlKCkpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBsYW5ldERhdGFbXCJFcnJvclwiXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiSW52ZW50b3J5XCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyUHJvZHVjdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm4pO1xyXG4gICAgICAgIHZhciBsYXN0VXBkYXRlZDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZCA9IG5ldyBEYXRlKHBsYW5ldEJ1cm5bXCJMYXN0VXBkYXRlXCJdICsgXCJaXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dGluZ3MgPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm5TZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBQbGFuZXQhXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyUHJvZHVjdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiSW52ZW50b3J5XCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NyZWVuTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlNjcmVlbk5hbWUpO1xyXG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0gPSBbXTtcclxuICAgIH1cclxuICAgIHZhciBzZXR0aW5nc0luZGV4ID0gRmluZEJ1cm5TZXR0aW5ncyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0sIHNjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdKTtcclxuICAgIGNvbnN0IGRpc3BTZXR0aW5ncyA9IHNldHRpbmdzSW5kZXggPT0gLTEgPyBbMSwgMSwgMSwgMV0gOiByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV07XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IGJ1ZmZlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidWZmZXJIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChidWZmZXJIZWFkZXIpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiUkVEXCIsIDIyLjAyNSwgZGlzcFNldHRpbmdzWzBdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzBdID0gZGlzcFNldHRpbmdzWzBdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xyXG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIllFTExPV1wiLCA0MC40ODMsIGRpc3BTZXR0aW5nc1sxXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1sxXSA9IGRpc3BTZXR0aW5nc1sxXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJHUkVFTlwiLCAzNC42NSwgZGlzcFNldHRpbmdzWzJdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzJdID0gZGlzcFNldHRpbmdzWzJdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xyXG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIklORlwiLCAxOS42LCBkaXNwU2V0dGluZ3NbM10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbM10gPSBkaXNwU2V0dGluZ3NbM10gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIGlmIChsYXN0VXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RVcGRhdGVkU3BhbiA9IGNyZWF0ZVRleHRTcGFuKFwiTGFzdCBVcGRhdGVkOiBcIiArIGxhc3RVcGRhdGVkLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibnVtZXJpY1wiIH0pICsgXCIgXCIgKyBsYXN0VXBkYXRlZC50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pKTtcclxuICAgICAgICBsYXN0VXBkYXRlZFNwYW4uc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGxhc3RVcGRhdGVkU3Bhbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGxhc3RVcGRhdGVkU3Bhbi5zdHlsZS5jb2xvciA9IFwicmdiKDE1MywgMTUzLCAxNTMpXCI7XHJcbiAgICAgICAgYnVmZmVySGVhZGVyLmFwcGVuZENoaWxkKGxhc3RVcGRhdGVkU3Bhbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5lZWRzXCIsIFwiUHJvZHVjdGlvblwiLCBcIkludlwiLCBcIkFtdC4gTmVlZGVkXCIsIFwiQnVyblwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGhlYWRSb3cuZmlyc3RDaGlsZC5jb2xTcGFuID0gMjtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIHZhciBidXJuTWF0ZXJpYWxzID0gT2JqZWN0LmtleXMoY29ucyk7XHJcbiAgICBidXJuTWF0ZXJpYWxzLnNvcnQoQ2F0ZWdvcnlTb3J0KTtcclxuICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIGJ1cm5NYXRlcmlhbHMpIHtcclxuICAgICAgICB2YXIgaW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncyAhPSB1bmRlZmluZWQgJiYgcGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpICE9IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tcIk1hdGVyaWFsRXhjbHVzaW9uc1wiXS5mb3JFYWNoKChtYXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSA9PSBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbmNsdWRlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBweFwiO1xyXG4gICAgICAgIGNvbnN0IG1hdEVsZW0gPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWwsIFwicHJ1bi1yZW1vdmUtanNcIiwgXCJub25lXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKE1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxdWzBdKTtcclxuICAgICAgICBuYW1lU3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgY29uc3QgY29uc0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNvbnNbbWF0ZXJpYWxdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiAvIERheVwiKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbnNDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGludkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBpbnZBbW91bnQgPSBpbnZbbWF0ZXJpYWxdID09IHVuZGVmaW5lZCA/IDAgOiBpbnZbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGludkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihpbnZBbW91bnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnZDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiAtaW52QW1vdW50IC8gY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgY29uc3QgYnVybkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBidXJuQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKCgoYnVybiA8IDUwMCAmJiBjb25zW21hdGVyaWFsXSA8IDApID8gTWF0aC5mbG9vcihidXJuKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pIDogXCLiiJ5cIikgKyBcIiBEYXlzXCIpKTtcclxuICAgICAgICBpZiAoY29uc1ttYXRlcmlhbF0gPj0gMCkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWluZmluaXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidXJuIDw9IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVswXSkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZWVkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbXQgPSBidXJuID4gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdIHx8IGNvbnNbbWF0ZXJpYWxdID4gMCA/IDAgOiAoYnVybiAtIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVsxXSkgKiBjb25zW21hdGVyaWFsXTtcclxuICAgICAgICBuZWVkQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG5lZWRBbXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuZWVkQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnVybkNvbHVtbik7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm4gbW9kdWxlcztcclxufVxyXG5mdW5jdGlvbiBGaW5kQnVyblNldHRpbmdzKGFycmF5LCBtYXRjaFN0cmluZykge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtYXRjaFN0cmluZyA9PSBhcnJheVtpXVswXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuZnVuY3Rpb24gVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKSB7XHJcbiAgICBBcnJheS5mcm9tKHRhYmxlLmNoaWxkcmVuWzFdLmNoaWxkcmVuKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWluZmluaXRlXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzNdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1syXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzFdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMF0gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdzQnV0dG9uKHRleHQsIHdpZHRoLCB0b2dnbGVkLCBmKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAodG9nZ2xlZCkge1xyXG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc1RleHQpO1xyXG4gICAgdGV4dEJveC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0J1dHRvbik7XHJcbiAgICBiYXIuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGJhci5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgYmFyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYmFyKTtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0b2dnbGVkKSB7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcclxuICAgICAgICAgICAgdG9nZ2xlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgICAgICAgICB0b2dnbGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZigpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9CdXJuLnRzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY2xlYXJDaGlsZHJlbiwgWElUV2ViUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldFRhYmxlX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdICsgXCIvZXhlYz9tb2RlPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzJdICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGRhdGFbMF0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL1NoZWV0VGFibGUudHNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNyZWF0ZUxpbmssIGNyZWF0ZVRleHRTcGFuLCBYSVRXZWJSZXF1ZXN0LCBjcmVhdGVUYWJsZSwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVUZXh0RGl2IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgVGV4dENvbG9ycyB9IGZyb20gXCIuLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBGYWN0aW9uSGVhZGVycyB9IGZyb20gXCIuLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udHJhY3RzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgVXNlcm5hbWUhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBBUEkgS2V5IVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ29udHJhY3RzX3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2NvbnRyYWN0L2FsbGNvbnRyYWN0cy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ29udHJhY3RzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRyYWN0RGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb250cmFjdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWxpZENvbnRyYWN0cyA9IGNvbnRyYWN0RGF0YS5maWx0ZXIoYyA9PiAhaW52YWxpZENvbnRyYWN0U3RhdHVzLmluY2x1ZGVzKGNbXCJTdGF0dXNcIl0pKTtcclxuICAgICAgICB2YWxpZENvbnRyYWN0cy5tYXAoY29udHJhY3QgPT4ge1xyXG4gICAgICAgICAgICBjb250cmFjdFtcIklzRmFjdGlvblwiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cmFjdFtcIm1hdGVyaWFsQ29uZGl0aW9uc1wiXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc2VsZkNvbmRpdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHBhcnRuZXJDb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMubWFwKChjb25kaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25bXCJUeXBlXCJdID09PSBcIlJFUFVUQVRJT05cIilcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdFtcIklzRmFjdGlvblwiXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiTWF0ZXJpYWxUaWNrZXJcIl0gIT09IG51bGwgJiYgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZS5pbmNsdWRlcyhjb25kaXRpb25bXCJUeXBlXCJdKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdFtcIm1hdGVyaWFsQ29uZGl0aW9uc1wiXS5wdXNoKGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiUGFydHlcIl0gPT09IGNvbnRyYWN0W1wiUGFydHlcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZkNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJDb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZDb25kaXRpb25zLnNvcnQoY29uZGl0aW9uU29ydCk7XHJcbiAgICAgICAgICAgIHBhcnRuZXJDb25kaXRpb25zLnNvcnQoY29uZGl0aW9uU29ydCk7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0LkNvbmRpdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgY29udHJhY3QuQ29uZGl0aW9uc1tcInNlbGZcIl0gPSBzZWxmQ29uZGl0aW9ucztcclxuICAgICAgICAgICAgY29udHJhY3QuQ29uZGl0aW9uc1tcInBhcnRuZXJcIl0gPSBwYXJ0bmVyQ29uZGl0aW9ucztcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YWxpZENvbnRyYWN0cy5zb3J0KENvbnRyYWN0U29ydCk7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBjcmVhdGVUYWJsZSh0aWxlLCBbXCJDb250cmFjdCBJRFwiLCBcIk1hdGVyaWFsXCIsIFwiUGFydG5lcidzIENvbmRpdGlvbnNcIiwgXCJNeSBDb25kaXRpb25zXCJdKTtcclxuICAgICAgICBpZiAodmFsaWRDb250cmFjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZU5vQ29udHJhY3RzUm93KDQpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsaWRDb250cmFjdHMuZm9yRWFjaChjb250cmFjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVDb250cmFjdFJvdyhjb250cmFjdCk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBpbnZhbGlkQ29udHJhY3RTdGF0dXMgPSBbXHJcbiAgICBcIkZVTEZJTExFRFwiLFxyXG4gICAgXCJCUkVBQ0hFRFwiLFxyXG4gICAgXCJURVJNSU5BVEVEXCIsXHJcbiAgICBcIkNBTkNFTExFRFwiLFxyXG4gICAgXCJSRUpFQ1RFRFwiXHJcbl07XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyYWN0Um93KGNvbnRyYWN0KSB7XHJcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgbGV0IGNvbnRyYWN0TGluayA9IGNyZWF0ZUxpbmsoY29udHJhY3RbXCJOYW1lXCJdIHx8IGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdLCBcIkNPTlQgXCIgKyBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSk7XHJcbiAgICBjb25zdCBjb250cmFjdElkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgY29udHJhY3RJZENvbHVtbi5hcHBlbmRDaGlsZChjb250cmFjdFtcIklzRmFjdGlvblwiXSA/IGZhY3Rpb25Db250cmFjdChjb250cmFjdExpbmspIDogY29udHJhY3RMaW5rKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChjb250cmFjdElkQ29sdW1uKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICBjb25zdCBtYXRlcmlhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRlcmlhbERpdik7XHJcbiAgICBpZiAoY29udHJhY3RbXCJtYXRlcmlhbENvbmRpdGlvbnNcIl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnRyYWN0W1wibWF0ZXJpYWxDb25kaXRpb25zXCJdLmZvckVhY2gobWF0ZXJpYWxDb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEVsZW1lbnQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWxDb25kaXRpb25bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBtYXRlcmlhbENvbmRpdGlvbltcIk1hdGVyaWFsQW1vdW50XCJdLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsRWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxEaXYuYXBwZW5kQ2hpbGQobWF0ZXJpYWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQobWF0ZXJpYWxDb2x1bW4pO1xyXG4gICAgY29uc3QgcGFydG5lckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIHZhciBmYWN0aW9uO1xyXG4gICAgaWYgKGNvbnRyYWN0W1wiSXNGYWN0aW9uXCJdKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoRmFjdGlvbkhlYWRlcnMpLmZvckVhY2goZmFjdGlvbk5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXS5pbmNsdWRlcyhmYWN0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZhY3Rpb24gPSBGYWN0aW9uSGVhZGVyc1tmYWN0aW9uTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBhcnRuZXJMaW5rID0gY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkNPIFwiICsgY29udHJhY3RbXCJQYXJ0bmVyQ29tcGFueUNvZGVcIl0pO1xyXG4gICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGFydG5lckxpbmspO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHBhcnRuZXJMaW5rID0gY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkZBIFwiICsgZmFjdGlvbik7XHJcbiAgICAgICAgcGFydG5lckNvbHVtbi5hcHBlbmRDaGlsZChwYXJ0bmVyTGluayk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjb25kaXRpb24gb2YgY29udHJhY3QuQ29uZGl0aW9uc1tcInBhcnRuZXJcIl0pXHJcbiAgICAgICAgcGFydG5lckNvbHVtbi5hcHBlbmRDaGlsZChjb25kaXRpb25TdGF0dXMoY29uZGl0aW9uKSk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQocGFydG5lckNvbHVtbik7XHJcbiAgICBjb25zdCBzZWxmQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgZm9yIChsZXQgY29uZGl0aW9uIG9mIGNvbnRyYWN0LkNvbmRpdGlvbnNbXCJzZWxmXCJdKVxyXG4gICAgICAgIHNlbGZDb2x1bW4uYXBwZW5kQ2hpbGQoY29uZGl0aW9uU3RhdHVzKGNvbmRpdGlvbikpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHNlbGZDb2x1bW4pO1xyXG4gICAgcmV0dXJuIHJvdztcclxufVxyXG47XHJcbmZ1bmN0aW9uIGNyZWF0ZU5vQ29udHJhY3RzUm93KGNvbHNwYW4pIHtcclxuICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIHRleHRDb2x1bW4uc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7Y29sc3Bhbn1gKTtcclxuICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIGNvbnRyYWN0c1wiO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcclxuICAgIHJldHVybiBsaW5lO1xyXG59XHJcbmZ1bmN0aW9uIGNvbmRpdGlvblNvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbXCJDb25kaXRpb25JbmRleFwiXSA+IGJbXCJDb25kaXRpb25JbmRleFwiXSA/IDEgOiAtMTtcclxufVxyXG5mdW5jdGlvbiBDb250cmFjdFNvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbXCJEdWVEYXRlRXBvY2hNc1wiXSA+IGJbXCJEdWVEYXRlRXBvY2hNc1wiXSA/IDEgOiAtMTtcclxufVxyXG5mdW5jdGlvbiBmYWN0aW9uQ29udHJhY3QobGluaykge1xyXG4gICAgbGV0IGNvbmRpdGlvbkRpdiA9IGNyZWF0ZVRleHREaXYoXCJcIik7XHJcbiAgICBsZXQgbWFya2VyID0gY3JlYXRlVGV4dFNwYW4oXCIg4piFXCIpO1xyXG4gICAgbWFya2VyLnN0eWxlLmNvbG9yID0gVGV4dENvbG9ycy5ZZWxsb3c7XHJcbiAgICBtYXJrZXIuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgbWFya2VyLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgbWFya2VyLnRpdGxlID0gXCJGYWN0aW9uIENvbnRyYWN0XCI7XHJcbiAgICBsaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICByZXR1cm4gY29uZGl0aW9uRGl2O1xyXG59XHJcbmZ1bmN0aW9uIGNvbmRpdGlvblN0YXR1cyhjb25kaXRpb24pIHtcclxuICAgIGxldCBjb25kaXRpb25EaXYgPSBjcmVhdGVUZXh0RGl2KFwiXCIpO1xyXG4gICAgbGV0IG1hcmtlciA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbltcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFwi4pyTXCIgOiBcIlhcIik7XHJcbiAgICBtYXJrZXIuc3R5bGUuY29sb3IgPSBjb25kaXRpb25bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICBtYXJrZXIuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgbGV0IHRleHQgPSBjcmVhdGVUZXh0U3BhbihgICR7ZnJpZW5kbHlDb25kaXRpb25UZXh0W2NvbmRpdGlvbi5UeXBlXX1gKTtcclxuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIGNvbmRpdGlvbkRpdjtcclxufVxyXG5jb25zdCBmcmllbmRseUNvbmRpdGlvblRleHQgPSB7XHJcbiAgICBDT01FWF9QVVJDSEFTRV9QSUNLVVA6IFwiTWF0ZXJpYWwgUGlja3VwXCIsXHJcbiAgICBERUxJVkVSWTogXCJEZWxpdmVyeVwiLFxyXG4gICAgREVMSVZFUllfU0hJUE1FTlQ6IFwiRGVsaXZlciBTaGlwbWVudFwiLFxyXG4gICAgRVhQTE9SQVRJT046IFwiRXhwbG9yYXRpb25cIixcclxuICAgIFJFUFVUQVRJT046IFwiUmVwdXRhdGlvblwiLFxyXG4gICAgUEFZTUVOVDogXCJQYXltZW50XCIsXHJcbiAgICBQSUNLVVBfU0hJUE1FTlQ6IFwiUGlja3VwIFNoaXBtZW50XCIsXHJcbiAgICBQUk9WSVNJT05fU0hJUE1FTlQ6IFwiUHJvdmlzaW9uXCIsXHJcbiAgICBQUk9WSVNJT046IFwiUHJvdmlzaW9uXCJcclxufTtcclxuY29uc3QgbWF0ZXJpYWxGdWxmaWxtZW50VHlwZSA9IFtcclxuICAgIFwiREVMSVZFUllcIixcclxuICAgIFwiREVMSVZFUllfU0hJUE1FTlRcIixcclxuICAgIFwiUFJPVklTSU9OX1NISVBNRU5UXCIsXHJcbiAgICBcIkNPTUVYX1BVUkNIQVNFX1BJQ0tVUFwiXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9Db250cmFjdHMudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gUFJ1Tl9wcmUodGlsZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IHBydW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgcHJ1bi5zcmMgPSBcImh0dHBzOi8vYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tLyMvXCI7XHJcbiAgICBwcnVuLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBwcnVuLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcHJ1bi5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChwcnVuKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUHJvc3Blcml0eV9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vcHJvc3Blcml0eS1wcnVuLm5ldGxpZnkuYXBwL1wiO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDMpIHtcclxuICAgICAgICB1cmwgKz0gXCI/ZnJvbT1cIiArIHBhcmFtZXRlcnNbMV0gKyBcIiZ0bz1cIiArIHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9zcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBwcm9zcC5zcmMgPSB1cmw7XHJcbiAgICBwcm9zcC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcHJvc3AuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBwcm9zcC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChwcm9zcCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuY29uc3QgRGlzY29yZFNlcnZlcnMgPSB7XHJcbiAgICBcIlVGT1wiOiBbXCI4NTU0ODgzMDk4MDIxNzI0NjlcIiwgXCI4NTU0ODk3MTE2MzU0MzE0NzVcIl0sXHJcbiAgICBcIkZJT0NcIjogW1wiODA3OTkyNjQwMjQ3MzAwMTE2XCIsIFwiODA4NDUxNTEyMzUxMTk1MTY2XCJdLFxyXG4gICAgXCJBSElcIjogW1wiNzA0OTA3NzA3NjM0OTQxOTgyXCIsIFwiNzk3MTU3ODc3MzI0MTg1NjUwXCJdLFxyXG4gICAgXCJQQ1RcIjogW1wiNjY3NTUxNDMzNTAzMDE0OTI0XCIsIFwiNjY3NTUxNDMzNTAzMDE0OTI3XCJdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbWV0ZXJzWzFdICs9IFwiX1wiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHNoZWV0LnNyYyA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvZWRpdD91c3A9c2hhcmluZ1wiO1xyXG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHNoZWV0LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgc2hlZXQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHNlcnZlcklEO1xyXG4gICAgdmFyIGNoYW5uZWxJRDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgaWYgKERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcnZlcklEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMF07XHJcbiAgICAgICAgICAgIGNoYW5uZWxJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICBjaGFubmVsSUQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2NvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgZGlzY29yZC5zcmMgPSBcImh0dHBzOi8vZS53aWRnZXRib3QuaW8vY2hhbm5lbHMvXCIgKyBzZXJ2ZXJJRCArIFwiL1wiICsgY2hhbm5lbElEO1xyXG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgZGlzY29yZC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVQvV2ViLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3BhbiwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVMaW5rLCBYSVRXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gRklPSW52X3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBhcGlrZXkgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl07XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIHBhcmFtZXRlcnMucHVzaChhcGlrZXkpO1xyXG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2dldEFsbFN0b3JhZ2VzLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9hdXRoL2dyb3VwL1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbMl0gKz0gXCIgXCIgKyBwYXJhbWV0ZXJzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zdG9yYWdlL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL1wiICsgcGFyYW1ldGVyc1syXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBjb25zdCB0YWcgPSBcIkZJT1wiO1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGludmVudG9yeURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludmVudG9yeURhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghaW52ZW50b3J5RGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHZvbHVtZVVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lTG9hZFwiXTtcclxuICAgIGNvbnN0IHZvbHVtZVRvdGFsID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUNhcGFjaXR5XCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VXNlZCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRMb2FkXCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0Q2FwYWNpdHlcIl07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbnYtaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImludi1ib2R5XCIpO1xyXG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMl0sIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICBjb25zdCB1c2VyRWxlbSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0sIHRhZyk7XHJcbiAgICB1c2VyRWxlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlckVsZW0pO1xyXG4gICAgY29uc3Qgdm9sdW1lTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2b2x1bWVMaW5lLmlkID0gXCJ2b2x1bWUtbGluZVwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICB2b2x1bWVMaW5lLnN0eWxlLmNvbG9yID0gXCIjOTk5OTk5XCI7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVm9sdW1lIFwiLCB0YWcpKTtcclxuICAgIGNvbnN0IHZvbHVtZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcclxuICAgIHZvbHVtZUJhci5pZCA9IFwidm9sdW1lLWJhclwiO1xyXG4gICAgdm9sdW1lQmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtYmFyXCIpO1xyXG4gICAgdm9sdW1lQmFyLm1heCA9IDE7XHJcbiAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKHZvbHVtZUJhcik7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHZvbHVtZVVzZWQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgLyBcIiArIHZvbHVtZVRvdGFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIG3Cs1wiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcclxuICAgIGNvbnN0IHdlaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2VpZ2h0TGluZS5pZCA9IFwid2VpZ2h0LWxpbmVcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgd2VpZ2h0TGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIldlaWdodCBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB3ZWlnaHRCYXIuaWQgPSBcIndlaWdodC1iYXJcIjtcclxuICAgIHdlaWdodEJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHdlaWdodEJhci5tYXggPSAxO1xyXG4gICAgd2VpZ2h0QmFyLnZhbHVlID0gd2VpZ2h0VXNlZCAvIHdlaWdodFRvdGFsO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih3ZWlnaHRVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB3ZWlnaHRUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiB0XCIsIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHdlaWdodExpbmUpO1xyXG4gICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpbnZlbnRvcnlEYXRhW1wiU3RvcmFnZUl0ZW1zXCJdKSB7XHJcbiAgICAgICAgY29uc3QgbWF0ID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSwgdGFnLCBpdGVtW1wiTWF0ZXJpYWxBbW91bnRcIl0sIHRydWUpO1xyXG4gICAgICAgIGlmIChtYXQpIHtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfZ2V0QWxsU3RvcmFnZXModGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHZhciB1c2VySlNPTjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdXNlckpTT04gPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIHZhciB1c2VybmFtZXMgPSBbXTtcclxuICAgIHVzZXJKU09OW1wiR3JvdXBVc2Vyc1wiXS5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIHVzZXJuYW1lcy5wdXNoKHVzZXJbXCJHcm91cFVzZXJOYW1lXCJdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucHVzaCh1c2VySlNPTltcIkdyb3VwTmFtZVwiXSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9hbGxEaXNwbGF5LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9maW93ZWIvZ3JvdXBodWJcIiwgXCJQT1NUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcGFyYW1ldGVyc1syXV0sIEpTT04uc3RyaW5naWZ5KHVzZXJuYW1lcykpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9hbGxEaXNwbGF5KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB2YXIgZ3JvdXBEYXRhID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyb3VwRGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIGZyb20gRklPIVwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1szXSArIFwiIEludmVudG9yaWVzXCIpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY29uc3QgYm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHlEaXYpO1xyXG4gICAgYm9keURpdi5jbGFzc0xpc3QuYWRkKFwiZmxleC10YWJsZVwiKTtcclxuICAgIGlmIChncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXS5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgaWYgKHBsYXllcltcIkxvY2F0aW9uc1wiXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwbGF5ZXJbXCJVc2VyTmFtZVwiXSkpO1xyXG4gICAgICAgIHBsYXllckRpdi5maXJzdENoaWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICBwbGF5ZXJbXCJMb2NhdGlvbnNcIl0uZm9yRWFjaChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLCBcIlhJVCBJTlZfXCIgKyBwbGF5ZXJbXCJVc2VyTmFtZVwiXSArIFwiX1wiICsgbG9jYXRpb25bXCJMb2NhdGlvbk5hbWVcIl0ucmVwbGFjZSgvIC8sIFwiX1wiKSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcGFyYW1ldGVycy5wb3AoKTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlvTWF0c0FscGhhYmV0U29ydChhLCBiKSB7XHJcbiAgICBpZiAoIWFbXCJNYXRlcmlhbFRpY2tlclwiXSB8fCAhYltcIk1hdGVyaWFsVGlja2VyXCJdIHx8ICFNYXRlcmlhbE5hbWVzW2FbXCJNYXRlcmlhbFRpY2tlclwiXV0gfHwgIU1hdGVyaWFsTmFtZXNbYltcIk1hdGVyaWFsVGlja2VyXCJdXSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbYVtcIk1hdGVyaWFsVGlja2VyXCJdXVsxXSA9PSBNYXRlcmlhbE5hbWVzW2JbXCJNYXRlcmlhbFRpY2tlclwiXV1bMV0pIHtcclxuICAgICAgICByZXR1cm4gYVtcIk1hdGVyaWFsVGlja2VyXCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsVGlja2VyXCJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbE5hbWVzW2FbXCJNYXRlcmlhbFRpY2tlclwiXV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW2JbXCJNYXRlcmlhbFRpY2tlclwiXV1bMV0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVC9JbnZlbnRvcnkudHNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGdldExvY2FsU3RvcmFnZSwgc2V0U2V0dGluZ3MsIGNyZWF0ZUxpbmssIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgQ0hFQ0tfSU5ESUNBVE9SIH0gZnJvbSBcIi4vQ2hlY2tsaXN0c1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gTm90ZXModGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBnZW5lcmF0ZU5vdGVzVGFibGUsIHRpbGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZU5hbWUgPSAocGFyYW1ldGVycy5zbGljZSgxKSkuam9pbihcIl9cIik7XHJcbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IG5vdGVOYW1lO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgY29uc3QgdGV4dGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGV4dGJveFdyYXBwZXIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgdGV4dGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dGJveCk7XHJcbiAgICAgICAgdGV4dGJveFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5vdGVzLXdyYXBwZXJcIik7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCBkaXNwU3RvcmVkTm90ZSwgW25vdGVOYW1lLCB0ZXh0Ym94XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVOb3Rlc1RhYmxlKHJlc3VsdCwgdGlsZSkge1xyXG4gICAgaWYgKCF0aWxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkxlbmd0aFwiLCBcIkRlbGV0ZVwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HLU5vdGVzXCJdKSk7XHJcbiAgICB2YXIgYW55Tm90ZXMgPSBmYWxzZTtcclxuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIDcpID09IENIRUNLX0lORElDQVRPUikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFueU5vdGVzID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBsZW5ndGhDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGVuZ3RoQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKG5hbWUsIFwiWElUIE5PVEVTX1wiICsgbmFtZSkpO1xyXG4gICAgICAgIGxlbmd0aENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihyZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25hbWVdLmxlbmd0aC50b0xvY2FsZVN0cmluZygpICsgXCIgQ2hhcmFjdGVyXCIgKyAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtuYW1lXS5sZW5ndGggPT0gMSA/IFwiXCIgOiBcInNcIikpKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgIGRlbGV0ZUNvbHVtbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLU5vdGVzXCIsIHVwZGF0ZVRoZW5TdG9yZU5vdGUsIFtuYW1lLCBcIlwiXSk7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGlmICghYW55Tm90ZXMpIHtcclxuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRleHRDb2x1bW4uY29sU3BhbiA9IDM7XHJcbiAgICAgICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gTm90ZXNcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlVGhlblN0b3JlTm90ZShyZXN1bHQsIHBhcmFtcykge1xyXG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtc1swXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdGVOYW1lID0gcGFyYW1zWzBdO1xyXG4gICAgY29uc3Qgbm90ZVRleHQgPSBwYXJhbXNbMV07XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdW25vdGVOYW1lXSA9IG5vdGVUZXh0Lmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogbm90ZVRleHQ7XHJcbiAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BTdG9yZWROb3RlKHJlc3VsdCwgcGFyYW1zKSB7XHJcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zWzBdIHx8ICFwYXJhbXNbMV0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3RlTmFtZSA9IHBhcmFtc1swXTtcclxuICAgIGNvbnN0IHRleHRib3ggPSBwYXJhbXNbMV07XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTm90ZXNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLU5vdGVzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtub3RlTmFtZV0pIHtcclxuICAgICAgICB0ZXh0Ym94LnZhbHVlID0gcmVzdWx0W1wiUE1NRy1Ob3Rlc1wiXVtub3RlTmFtZV07XHJcbiAgICB9XHJcbiAgICB0ZXh0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1Ob3Rlc1wiLCB1cGRhdGVUaGVuU3RvcmVOb3RlLCBbbm90ZU5hbWUsIHRleHRib3gudmFsdWUgfHwgXCJcIl0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL05vdGVzLnRzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjbGVhckNoaWxkcmVuLCBjcmVhdGVUZXh0U3Bhbiwgc2V0U2V0dGluZ3MsIG1ha2VQb3B1cFNwYWNlciwgY3JlYXRlUG9wdXBJbnB1dFJvdywgY3JlYXRlUG9wdXBDaGVja2JveFJvdywgZ2V0VmFsdWVPZlBvcHVwUm93LCBnZXRDaGVja09mUG9wdXBSb3csIGNyZWF0ZVNtYWxsQnV0dG9uIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnQodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFwYXJhbWV0ZXJzWzFdKSB7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkFkZCBhIHBsYW5ldCBuYW1lIHRvIHRoZSBlbmQgb2YgdGhlIGNvbW1hbmQhXCIpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdID0gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJBYmJyZXZpYXRpb25cIiwgXCJDYXRlZ29yaWVzXCIsIFwiTW9kaWZ5XCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ld1wiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IFwiNXB4XCI7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjcmVhdGVBZGRJbnRlcmZhY2UodGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGlzU29ydGluZyA9IGZhbHNlO1xyXG4gICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5mb3JFYWNoKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzWzBdIHx8ICFzZXR0aW5nc1sxXSB8fCAhc2V0dGluZ3NbMl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0dGluZ3NbMV0udG9VcHBlckNhc2UoKSAhPSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1NvcnRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNhdENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBtb2RpZnlDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjYXRDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtb2RpZnlDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHNldHRpbmdzWzBdKSk7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBcIlwiO1xyXG4gICAgICAgIHNldHRpbmdzWzJdLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNhdGVnb3J5WzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0ZWdvcmllcyArPSBjYXRlZ29yeVswXSArIFwiLCBcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICBjYXRDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oY2F0ZWdvcmllcykpO1xyXG4gICAgICAgIG1vZGlmeUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVTbWFsbEJ1dHRvbihcImVkaXRcIiwgY3JlYXRlQWRkSW50ZXJmYWNlLCBbdGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzLCBzZXR0aW5nc10pKTtcclxuICAgICAgICBtb2RpZnlDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlU21hbGxCdXR0b24oXCJkZWxldGVcIiwgZnVuY3Rpb24gKHJlc3VsdCwgcm93LCBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdW2ldID09IHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3Jlc3VsdCwgcm93LCBzZXR0aW5nc10pKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGlmICghaXNTb3J0aW5nKSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSAzO1xyXG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIFNvcnRpbmcgT3B0aW9uc1wiO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVBZGRJbnRlcmZhY2UodGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzLCBzZXR0aW5ncyA9IFtdKSB7XHJcbiAgICBjb25zdCBwcmVmaWxsZWQgPSBzZXR0aW5ncy5sZW5ndGggIT0gMDtcclxuICAgIGNvbnN0IG92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3ZlcmxhcERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLk92ZXJsYXBwaW5nRGl2KTtcclxuICAgIGNvbnN0IGdyZXlTdHJpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdyZXlTdHJpcGVzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuR3JleVN0cmlwZXMpO1xyXG4gICAgb3ZlcmxhcERpdi5hcHBlbmRDaGlsZChncmV5U3RyaXBlcyk7XHJcbiAgICB0aWxlLmluc2VydEJlZm9yZShvdmVybGFwRGl2LCB0aWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVBvcHVwU3BhY2VyKHRpbGUsIG92ZXJsYXBEaXYpKTtcclxuICAgIGNvbnN0IGFkZEludGVyZmFjZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW50ZXJmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNlbnRlckludGVyZmFjZSk7XHJcbiAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChhZGRJbnRlcmZhY2VXcmFwcGVyKTtcclxuICAgIGNvbnN0IGFkZEludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZChcIk5MT3JIN2hGNWZiS0llc3FXM3VTa0E9PVwiKTtcclxuICAgIGFkZEludGVyZmFjZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlKTtcclxuICAgIGNvbnN0IGFkZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhZGRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTb3J0aW5nIE9wdGlvbnMgRWRpdG9yXCIpKTtcclxuICAgIGFkZEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBhZGRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyKTtcclxuICAgIGFkZEhlYWRlci5zdHlsZS5tYXJnaW4gPSBcIjAuNWVtIDAgMC41ZW1cIjtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQWJicmV2aWF0aW9uXCIsIHByZWZpbGxlZCA/IHNldHRpbmdzWzBdIDogXCJcIiwgXCJUaGUgYWJicmV2aWF0aW9uIHNob3dpbmcgYXQgdGhlIHRvcCBvZiB0aGUgaW52ZW50b3J5IChBQkMsIENBVCwgZXRjLilcIikpO1xyXG4gICAgaWYgKHByZWZpbGxlZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0dGluZ3NbMl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgXCIgKyAoaSArIDEpICsgXCIgTmFtZVwiLCBwcmVmaWxsZWQgPyBzZXR0aW5nc1syXVtpXVswXSA6IFwiXCIsIGkgPT0gMCA/IFwiVGhlIG5hbWUgb2YgdGhlIGZpcnN0IGNhdGVnb3J5IGZvciBtYXRlcmlhbHNcIiA6IFwiXCIpKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgXCIgKyAoaSArIDEpICsgXCIgTUFUc1wiLCBwcmVmaWxsZWQgPyBzZXR0aW5nc1syXVtpXVsxXS5qb2luKFwiLCBcIikgOiBcIlwiLCBpID09IDAgPyBcIkEgbGlzdCBvZiBtYXRlcmlhbHMgaW4gdGhlIGZpcnN0IGNhdGVnb3J5LiBTZXBhcmF0ZSB0aWNrZXJzIGJ5IGEgY29tbWEuIChSQVQsIERXLCBldGMuKVwiIDogXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IDEgTmFtZVwiLCBcIlwiLCBcIlRoZSBuYW1lIG9mIHRoZSBmaXJzdCBjYXRlZ29yeSBmb3IgbWF0ZXJpYWxzLlwiKSk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgMSBNQVRzXCIsIFwiXCIsIFwiQSBsaXN0IG9mIG1hdGVyaWFscyBpbiB0aGUgZmlyc3QgY2F0ZWdvcnkuIFNlcGFyYXRlIHRpY2tlcnMgYnkgYSBjb21tYS4gKFJBVCwgRFcsIGV0Yy4pXCIpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFJvdyk7XHJcbiAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgQ2F0ZWdvcnlcIjtcclxuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XHJcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xyXG4gICAgY29uc3QgYWRkSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcclxuICAgIGFkZFJvdy5hcHBlbmRDaGlsZChhZGRJbnB1dERpdik7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgQ0FURUdPUllcIjtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGFkZElucHV0RGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjYXROdW1iZXIgPSAoZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAzKSAvIDI7XHJcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkNhdGVnb3J5IFwiICsgY2F0TnVtYmVyICsgXCIgTmFtZVwiKSwgZm9ybS5jaGlsZHJlbltmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDRdKTtcclxuICAgICAgICBmb3JtLmluc2VydEJlZm9yZShjcmVhdGVQb3B1cElucHV0Um93KFwiQ2F0ZWdvcnkgXCIgKyBjYXROdW1iZXIgKyBcIiBNQVRzXCIpLCBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gNF0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXJuUm93ID0gY3JlYXRlUG9wdXBDaGVja2JveFJvdyhcIkJ1cm4gU29ydGluZ1wiLCBzZXR0aW5nc1szXSB8fCBmYWxzZSwgXCJBZGQgYnVybiBzb3J0aW5nIGFzIGEgc2Vjb25kYXJ5IHNvcnRpbmcgbWV0aG9kLiBCdXJuIGNhdGVnb3JpZXMgd2lsbCBzaG93IHVuZGVyIHRoZSBjYXRlZ29yaWVzIGRlZmluZWQgYWJvdmUuXCIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXJuUm93KTtcclxuICAgIGNvbnN0IHplcm9Sb3cgPSBjcmVhdGVQb3B1cENoZWNrYm94Um93KFwiU2hvdyBaZXJvc1wiLCBzZXR0aW5nc1s0XSB8fCBmYWxzZSwgXCJTaG93IGl0ZW0gaWNvbnMgdGhhdCBoYXZlIHplcm8gcXVhbnRpdHkuXCIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh6ZXJvUm93KTtcclxuICAgIGNvbnN0IHNhdmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2F2ZVJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlUm93KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XHJcbiAgICBjb25zdCBzYXZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBzYXZlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNNRFwiO1xyXG4gICAgc2F2ZUxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XHJcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVMYWJlbCk7XHJcbiAgICBjb25zdCBzYXZlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2F2ZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XHJcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVJbnB1dERpdik7XHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNBVkVcIjtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgc2F2ZUlucHV0RGl2LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1BYmJyZXZpYXRpb24gPSBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5maXJzdENoaWxkKTtcclxuICAgICAgICBjb25zdCBzb3J0aW5nSW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZm9ybS5jaGlsZHJlbi5sZW5ndGggLSA0OyBpICs9IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFmb3JtLmNoaWxkcmVuW2ldIHx8ICFmb3JtLmNoaWxkcmVuW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSA9PSBcIlwiIHx8IGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2kgKyAxXSkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc29ydGluZ0luZm8ucHVzaChbZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baV0pLCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pLnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQob3ZlcmxhcERpdik7XHJcbiAgICAgICAgaWYgKCFpdGVtQWJicmV2aWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZWZpbGxlZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdW2ldID09IHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXVtpXSA9IFtpdGVtQWJicmV2aWF0aW9uLCBwYXJhbWV0ZXJzWzFdLCBzb3J0aW5nSW5mbywgZ2V0Q2hlY2tPZlBvcHVwUm93KGJ1cm5Sb3cpLCBnZXRDaGVja09mUG9wdXBSb3coemVyb1JvdyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLnB1c2goW2l0ZW1BYmJyZXZpYXRpb24sIHBhcmFtZXRlcnNbMV0sIHNvcnRpbmdJbmZvLCBnZXRDaGVja09mUG9wdXBSb3coYnVyblJvdyksIGdldENoZWNrT2ZQb3B1cFJvdyh6ZXJvUm93KV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgIFNvcnQodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL1NvcnQudHNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGdldExvY2FsU3RvcmFnZSwgc2V0U2V0dGluZ3MsIGNyZWF0ZUxpbmssIGNyZWF0ZVRleHRTcGFuLCBtYWtlUG9wdXBTcGFjZXIsIGNyZWF0ZVBvcHVwSW5wdXRSb3csIGdldFZhbHVlT2ZQb3B1cFJvdyB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBDb21tYW5kTGlzdHModGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlKFwiUE1NRy1MaXN0c1wiLCBnZW5lcmF0ZUxpc3RUYWJsZSwgdGlsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2UoXCJQTU1HLUxpc3RzXCIsIGRpc3BTdG9yZWRMaXN0LCBbdGlsZSwgcGFyYW1ldGVyc10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlTGlzdFRhYmxlKHJlc3VsdCwgdGlsZSkge1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmFtZVwiLCBcIkxlbmd0aFwiLCBcIkRlbGV0ZVwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NRy1MaXN0c1wiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl0gPSB7fTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HLUxpc3RzXCJdKSk7XHJcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZW5ndGhDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkZWxldGVDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobmFtZSwgXCJYSVQgTElTVF9cIiArIG5hbWUpKTtcclxuICAgICAgICBsZW5ndGhDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtuYW1lXS5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKSkpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XHJcbiAgICAgICAgZGVsZXRlQ29sdW1uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKG5hbWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZXh0Q29sdW1uLmNvbFNwYW4gPSAzO1xyXG4gICAgICAgIHRleHRDb2x1bW4udGV4dENvbnRlbnQgPSBcIk5vIENvbW1hbmQgTGlzdHMuXCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZCh0ZXh0Q29sdW1uKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BTdG9yZWRMaXN0KHJlc3VsdCwgcGFyYW0pIHtcclxuICAgIGNvbnN0IHRpbGUgPSBwYXJhbVswXTtcclxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbVsxXTtcclxuICAgIGNvbnN0IGxpc3ROYW1lID0gKHBhcmFtZXRlcnMuc2xpY2UoMSkpLmpvaW4oXCJfXCIpO1xyXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUctTGlzdHNcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HLUxpc3RzXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0gJiYgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUctTGlzdHNcIl1bbGlzdE5hbWVdLmZvckVhY2gobGlua0luZm8gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxpbmtJbmZvWzBdIHx8ICFsaW5rSW5mb1sxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZXh0Q29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobGlua0luZm9bMF0sIGxpbmtJbmZvWzFdKSk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGV4dENvbHVtbi5jb2xTcGFuID0gMTtcclxuICAgICAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBDb21tYW5kcy5cIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNyZWF0ZUVkaXRJbnRlcmZhY2UodGlsZSwgcmVzdWx0LCBwYXJhbWV0ZXJzLCByZXN1bHRbXCJQTU1HLUxpc3RzXCJdW2xpc3ROYW1lXSB8fCBbXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRWRpdEludGVyZmFjZSh0aWxlLCByZXN1bHQsIHBhcmFtZXRlcnMsIHNldHRpbmdzID0gW10pIHtcclxuICAgIGNvbnN0IHByZWZpbGxlZCA9IHNldHRpbmdzLmxlbmd0aCAhPSAwO1xyXG4gICAgY29uc3QgbGlzdE5hbWUgPSAocGFyYW1ldGVycy5zbGljZSgxKSkuam9pbihcIl9cIik7XHJcbiAgICBjb25zdCBvdmVybGFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XHJcbiAgICBjb25zdCBncmV5U3RyaXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBncmV5U3RyaXBlcy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkdyZXlTdHJpcGVzKTtcclxuICAgIG92ZXJsYXBEaXYuYXBwZW5kQ2hpbGQoZ3JleVN0cmlwZXMpO1xyXG4gICAgdGlsZS5pbnNlcnRCZWZvcmUob3ZlcmxhcERpdiwgdGlsZS5maXJzdENoaWxkKTtcclxuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbiAgICBjb25zdCBhZGRJbnRlcmZhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZEludGVyZmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5DZW50ZXJJbnRlcmZhY2UpO1xyXG4gICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQoYWRkSW50ZXJmYWNlV3JhcHBlcik7XHJcbiAgICBjb25zdCBhZGRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJOTE9ySDdoRjVmYktJZXNxVzN1U2tBPT1cIik7XHJcbiAgICBhZGRJbnRlcmZhY2VXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEludGVyZmFjZSk7XHJcbiAgICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYWRkSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29tbWFuZCBMaXN0IEVkaXRvclwiKSk7XHJcbiAgICBhZGRIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgYWRkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGFkZEhlYWRlcik7XHJcbiAgICBhZGRIZWFkZXIuc3R5bGUubWFyZ2luID0gXCIwLjVlbSAwIDAuNWVtXCI7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZEludGVyZmFjZS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGlmIChwcmVmaWxsZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldHRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyAoaSArIDEpICsgXCIgTGFiZWxcIiwgc2V0dGluZ3NbaV1bMF0sIGkgPT0gMCA/IFwiVGhlIGxhYmVsIG9mIHRoZSBmaXJzdCBsaW5rLlwiIDogXCJcIikpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIFwiICsgKGkgKyAxKSArIFwiIENvbW1hbmRcIiwgc2V0dGluZ3NbaV1bMV0sIGkgPT0gMCA/IFwiVGhlIGNvbW1hbmQgb3BlbmVkIGJ5IHRoZSBmaXJzdCBsaW5rIChleDogQ1ggTkMxKVwiIDogXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgMSBMYWJlbFwiLCBcIlwiLCBcIlRoZSBsYWJlbCBvZiB0aGUgZmlyc3QgbGluay5cIikpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgMSBDb21tYW5kXCIsIFwiXCIsIFwiVGhlIGNvbW1hbmQgb3BlbmVkIGJ5IHRoZSBmaXJzdCBsaW5rIChleDogQ1ggTkMxKVwiKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkUm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRSb3cpO1xyXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIExpbmtcIjtcclxuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVMYWJlbCk7XHJcbiAgICBhZGRSb3cuYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xyXG4gICAgY29uc3QgYWRkSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkSW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUlucHV0KTtcclxuICAgIGFkZFJvdy5hcHBlbmRDaGlsZChhZGRJbnB1dERpdik7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgTElOS1wiO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgYWRkSW5wdXREaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNhdE51bWJlciA9IChmb3JtLmNoaWxkcmVuLmxlbmd0aCkgLyAyO1xyXG4gICAgICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGNyZWF0ZVBvcHVwSW5wdXRSb3coXCJMaW5rIFwiICsgY2F0TnVtYmVyICsgXCIgTGFiZWxcIiksIGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoY3JlYXRlUG9wdXBJbnB1dFJvdyhcIkxpbmsgXCIgKyBjYXROdW1iZXIgKyBcIiBDb21tYW5kXCIpLCBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMl0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZVJvdyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVSb3cpO1xyXG4gICAgY29uc3Qgc2F2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgc2F2ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDTURcIjtcclxuICAgIHNhdmVMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlTGFiZWwpO1xyXG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlTGFiZWwpO1xyXG4gICAgY29uc3Qgc2F2ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNhdmVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1TYXZlSW5wdXQpO1xyXG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlSW5wdXREaXYpO1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIHNhdmVJbnB1dERpdi5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb21tYW5kSW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAyOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFmb3JtLmNoaWxkcmVuW2ldIHx8ICFmb3JtLmNoaWxkcmVuW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2ldKSA9PSBcIlwiIHx8IGdldFZhbHVlT2ZQb3B1cFJvdyhmb3JtLmNoaWxkcmVuW2kgKyAxXSkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tbWFuZEluZm8ucHVzaChbZ2V0VmFsdWVPZlBvcHVwUm93KGZvcm0uY2hpbGRyZW5baV0pLCBnZXRWYWx1ZU9mUG9wdXBSb3coZm9ybS5jaGlsZHJlbltpICsgMV0pXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQob3ZlcmxhcERpdik7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NRy1MaXN0c1wiXVtsaXN0TmFtZV0gPSBjb21tYW5kSW5mbztcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgIENvbW1hbmRMaXN0cyh0aWxlLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGdyZXlTdHJpcGVzLmFwcGVuZENoaWxkKG1ha2VQb3B1cFNwYWNlcih0aWxlLCBvdmVybGFwRGl2KSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUL0NvbW1hbmRMaXN0cy50c1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcclxuICAgIH1cclxuICAgIGJlYXV0aWZ5T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kU2xvdHMgPSBBcnJheS5mcm9tKHF1ZXVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbiArIHRpbWVFbGFwc2VkKX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBDb25zdW1hYmxlVGltZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBidXJuLCB0aHJlc2hvbGRzKSB7XHJcbiAgICAgICAgdGhpcy5idXJuID0gYnVybjtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGRzID0gdGhyZXNob2xkcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiV0ZcIik7XHJcbiAgICAgICAgaWYgKCFidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLCB0aGlzLnRocmVzaG9sZHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCdXJucyhidWZmZXIsIGJ1cm4sIHRocmVzaG9sZHMpIHtcclxuICAgIGlmIChidWZmZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItbG9hZGVkXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Xb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlKTtcclxuICAgIGlmICghbmFtZUVsZW0gfHwgIW5hbWVFbGVtLnRleHRDb250ZW50KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJzZUJhc2VOYW1lKG5hbWVFbGVtLnRleHRDb250ZW50KTtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhlYWRlcnMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0aGVhZCA+IHRyXCIpKTtcclxuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzJdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5IZWFkZXIgPSBoZWFkZXIuY2hpbGRyZW5bM107XHJcbiAgICAgICAgdG90YWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvdGFsXCI7XHJcbiAgICAgICAgaWYgKGJ1cm5IZWFkZXIuY2hpbGRyZW4gIT0gdW5kZWZpbmVkICYmIGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJ1cm5IZWFkZXIucmVtb3ZlQ2hpbGQoYnVybkhlYWRlci5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1cm5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkJ1cm5cIjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KG5hbWUsIGJ1cm4pO1xyXG4gICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0Um93LmNoaWxkRWxlbWVudENvdW50IDwgNSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bNF07XHJcbiAgICAgICAgY29uc3QgdG90YWxEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIGlmIChvdXRwdXREYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyIGludmVudG9yeUFtb3VudCA9IGZpbmRJbnZlbnRvcnlBbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGJ1cm5BbW91bnQgPSBmaW5kQnVybkFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xyXG4gICAgICAgICAgICB2YXIgZGF5c0xlZnQ7XHJcbiAgICAgICAgICAgIGlmIChidXJuQW1vdW50ICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gTWF0aC5mbG9vcihpbnZlbnRvcnlBbW91bnQgLyBidXJuQW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA8PSB0aHJlc2hvbGRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi15ZWxsb3dcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tZ3JlZW5cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4tZ3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IGRheXNMZWZ0LnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBmaXJzdENoaWxkID0gb3V0cHV0RGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dERhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oZGF5c0xlZnQpKTtcclxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHRvdGFsRGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGJ1cm5BbW91bnQgPT0gMCA/IFwiXCIgOiBidXJuQW1vdW50LnRvRml4ZWQoMikpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1ZmZlci5jbGFzc0xpc3QuYWRkKFwicGItbG9hZGVkXCIpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnN1bWFibGVUaW1lcnMudHNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGVldEVUQXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWZsdC1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiRkxUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bN107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGVldEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzLCBDdXJyZW5jeVN5bWJvbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBQb3N0TE0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wb3N0LWxtLXByaWNlXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFudXBzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Qb3N0Rm9ybSkpLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBcnJheS5mcm9tKGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkMtRUNiLW92ZTF0bGE2cXNpVjQzZXc9PSBpdkcyNHF0UTkya2J5c0xUTmVXSnZ3PT1cIikpO1xyXG4gICAgICAgICAgICB2YXIgc2hpcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbSBvZiB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBcIlNISVBQSU5HXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29tbW9kaXR5ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0NvbW1vZGl0eSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQW1vdW50J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFByaWNlSW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nVG90YWwgcHJpY2UnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ3VycmVuY3knXV0vL3NlbGVjdFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgZGlzcGxheUVsZW1lbnQgPSBjcmVhdGVUZXh0U3BhbihcIi0tXCIsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgaWYgKHNoaXBwaW5nICYmIGNvbW1vZGl0eS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdEluZm8gPSBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdEluZm8gPT0gdW5kZWZpbmVkIHx8IG1hdEluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBtYXRJbmZvWzFdID49IG1hdEluZm9bMl0gPyBcInRcIiA6IFwibcKzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0dm9sdW1lID0gTWF0aC5tYXgobWF0SW5mb1sxXSwgbWF0SW5mb1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHdlaWdodHZvbHVtZSkgfHwgaXNOYU4odG90YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gXCItLSB0IHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArIFwiLS0gLyB0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIFwiICsgdW5pdCArIFwiIHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiAvIFwiICsgdW5pdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcy5wcmljZXMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1vZGl0eS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSB0aGlzLnByaWNlc1tjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbW91bnQgKyBcIiBcIiA9PSBcIk5hTiBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiIHwgXCIgKyAocHJpY2UgKiBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIFRvdGFsIENvcnBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIiArIChwcmljZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qb3N0TE0udHNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNoaXBwaW5nLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyg/OlNISVBQSU5HKVxccyhbXFxkLC5dKyl0XFxzXFwvXFxzKFtcXGQsLl0rKW3Cs1xcc0BcXHMoW1xcZCwuXSspXFxzW0EtWl0rXFxzZnJvbS8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ29zdCA9IG1hdGNoZXNbM107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b25uYWdlID0gcGFyc2VGbG9hdChtYXRjaGVzWzFdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMl0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9ubmFnZSA+IHNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0ID0gJ3QnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gdG9ubmFnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAnbcKzJztcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQodG90YWxDb3N0LnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSAodG90YWxDZW50cyAvIGNvdW50IC8gMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0vJHt1bml0fSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWV1ZUxvYWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XHJcbiAgICB9XHJcbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XHJcbiAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBwYXJzZUR1cmF0aW9uKGV0YVNwYW4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZVF1ZXVlTG9hZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keTpudGgtb2YtdHlwZSgyKSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIG47XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IChldGEgLyB0b3RhbFRpbWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5pdGVtKDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RmllbGQgJiYgZXRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlVGV4dFNwYW4oYCAke3BlcmNlbnR9JWAsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUXVldWVMb2FkLnRzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbm90c1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcclxuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLk5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQgJiYgZWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFNlYXJjaGVycy5mb3JFYWNoKHNlYXJjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoc2VhcmNoWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi50ZXh0Q29udGVudCA9IHNlYXJjaFsxXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uc3R5bGUuY29sb3IgPSBzZWFyY2hbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodHlwZVNwYW4sIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RUZXh0ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90VGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvQ2hhbWJlciBvZiBHbG9iYWwgQ29tbWVyY2UvLCBcIkNPR0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWFyY2hbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2R1Y2VkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9hdCB5b3VyIGJhc2UgLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9PbmUgLywgXCIxIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBoYXZlIGJlZW4vLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB1bml0W3NdPyBvZi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyAoW0EteiAtXSspIHByb2R1Y2VkLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFkZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goL3lvdXIgKFtBLXogLV0rKSBvcmRlci8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZGVyIGZpbGxlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIENvbW1vZGl0eSBFeGNoYW5nZS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyhbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFjY2VwdGVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdGhlLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gbG9jYWwgbWFya2V0LywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250cmFjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvWW91ciBwYXJ0bmVyIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXJyaXZlZCBhdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvaXRzIGRlc3RpbmF0aW9uIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29nY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBhIG5ldyBlY29ub21pYyBwcm9ncmFtLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gQWR2ZXJ0aXNpbmcgQ2FtcGFpZ246LywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBub3RUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFNlYXJjaGVycyA9IFtcclxuICAgIFtcImNvbnRyYWN0XCIsIFwiY29udHJhY3RcIiwgXCJyZ2IoMjQ3LCAxNjYsIDApXCJdLFxyXG4gICAgW1wib3VyIGNvcnBvcmF0aW9uXCIsIFwiY29ycFwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJwcm9kdWNlZFwiLCBcInByb2R1Y2VkXCIsIFwiIzNmYTJkZVwiXSxcclxuICAgIFtcImFjY2VwdGVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcImV4cGlyZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxyXG4gICAgW1widHJhZGVcIiwgXCJ0cmFkZVwiLCBcIiMwMDgwMDBcIl0sXHJcbiAgICBbXCJvcmRlciBmaWxsZWRcIiwgXCJvcmRlclwiLCBcIiNjYzI5MjlcIl0sXHJcbiAgICBbXCJhcnJpdmVkIGF0XCIsIFwiYXJyaXZhbFwiLCBcIiNiMzM2YjNcIl0sXHJcbiAgICBbXCJyZXBvcnRcIiwgXCJyZXBvcnRcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wiZWxlY3Rpb25cIiwgXCJlbGVjdGlvblwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInJ1bGVzXCIsIFwicnVsZXNcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY29nY1wiLCBcIkNPR0NcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImV4cGVydFwiLCBcImV4cGVydFwiLCBcIiNmZjhhMDBcIl0sXHJcbiAgICBbXCJwb3B1bGF0aW9uIGluZnJhc3RydWN0dXJlIHByb2plY3RcIiwgXCJQT1BJXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImFwZXhcIiwgXCJ1cGRhdGVcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wid2FyZWhvdXNcIiwgXCJ3YXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wic2hpcGJ1aWxkaW5nIHByb2plY3RcIiwgXCJzaGlwXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInBsYW5ldGFyeSBwcm9qZWN0XCIsIFwiaW5mcmFcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY29uc3VtYWJsZSBzdXBwbGllc1wiLCBcInN1cHBsaWVzXCIsIFwiI2IzN2IzMlwiXVxyXG5dO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RpZmljYXRpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2NyZWVuVW5wYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4Y2x1c2lvbnMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2NyZWVuc1wiO1xyXG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcclxuICAgICAgICB0aGlzLmV4Y2x1c2lvbnMgPSBbXTtcclxuICAgICAgICBleGNsdXNpb25zLmZvckVhY2goZXggPT4geyB0aGlzLmV4Y2x1c2lvbnMucHVzaChleC50b1VwcGVyQ2FzZSgpKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLlNjcmVlbkNvbnRyb2xzKTtcclxuICAgICAgICBpZiAobmF2YmFyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmF2YmFyLmNoaWxkcmVuW25hdmJhci5jaGlsZHJlbi5sZW5ndGggLSAxXS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2YmFySXRlbUNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRVbmRlcmxpbmVDbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuYXZiYXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV07XHJcbiAgICAgICAgdmFyIGxpbmtzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShtZW51LmNoaWxkcmVuKS5mb3JFYWNoKChjbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY24uY2hpbGRyZW4ubGVuZ3RoID09IDQgJiYgIXRoaXMuZXhjbHVzaW9ucy5pbmNsdWRlcyhTdHJpbmcoY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGFjZXJEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgc3BhY2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKHNwYWNlckRpdik7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FbGVtID0gY3JlYXRlTm9kZShidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25FbGVtLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NjcmVlblVucGFjay50c1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBzaG93QnVmZmVyLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNpZGViYXIge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaWRlYmFyXCI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnV0dG9ucyA9IFtcIkJTXCIsIFwiQ09OVFwiLCBcIkNPTVwiLCBcIkNPUlBcIiwgXCJDWExcIiwgXCJGSU5cIiwgXCJGTFRcIiwgXCJJTlZcIiwgXCJNQVBcIiwgXCJQUk9EXCIsIFwiQ01EU1wiXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcclxuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTGVmdFNpZGViYXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucyA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lkZWJhcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdEJ1dHRvbnMuZm9yRWFjaChkZWZhdWx0QnV0dG9uID0+IHtcclxuICAgICAgICAgICAgdmFyIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvblswXS50b1VwcGVyQ2FzZSgpID09PSBkZWZhdWx0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHNpZGViYXIuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5maXJzdENoaWxkICE9IG51bGwgJiYgKGNoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oY2hpbGQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGRDaGlsZCA9PiB7IGNoaWxkQ2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1lbGVtZW50XCIpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzaWRlYmFyLmNoaWxkcmVuW3NpZGViYXIuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbkluZm8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnV0dG9ucy5pbmNsdWRlcyhidXR0b25JbmZvWzBdLnRvVXBwZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZVRleHRTcGFuKGJ1dHRvbkluZm9bMF0udG9VcHBlckNhc2UoKSwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICBjb25zdCBzbGl2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIHNsaXZlci5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhckJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyVGV4dCk7XHJcbiAgICAgICAgICAgIHNsaXZlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTbGl2ZXIpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzbGl2ZXIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBzaG93QnVmZmVyKGJ1dHRvbkluZm9bMV0pOyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaWRlYmFyLnRzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBQbGFuZXRDb21tYW5kcywgUGxhbmV0TmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgQ29tbWFuZENvcnJlY3RlciB7XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyQXJlYSkpLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJGaWVsZCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclRleHRGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZXh0ID0gYnVmZmVyRmllbGQudmFsdWUudG9VcHBlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYW5ldENvbW1hbmRzLmluY2x1ZGVzKGJ1ZmZlclRleHQuc3BsaXQoXCIgXCIpWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFBsYW5ldE5hbWVzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyVGV4dC5pbmNsdWRlcyhcIiBcIiArIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJUZXh0ID0gYnVmZmVyVGV4dC5yZXBsYWNlKFwiIFwiICsgbmFtZSwgXCIgXCIgKyBQbGFuZXROYW1lc1tuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyRmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VWYWx1ZShidWZmZXJGaWVsZCwgYnVmZmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50ID09IG51bGwgfHwgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbW1hbmRDb3JyZWN0ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzLCBjcmVhdGVUZXh0U3Bhbiwgc2hvd0J1ZmZlciB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNhbGNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2FsY1RhZ3MgPSBbXCJMTVwiLCBcIkNYXCIsIFwiWElUXCJdO1xyXG4gICAgICAgIGNhbGNUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnModGFnKTtcclxuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSB8fCAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5pbnNlcnRCZWZvcmUoY2FsY0RpdiwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQuaWQgPT0gXCJyZWZyZXNoXCIgPyAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuY2hpbGRyZW5bMV0gOiAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi8J+WqVwiLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBzaG93QnVmZmVyKFwiWElUIENBTENVTEFUT1JcIik7IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIENvbnRyYWN0RHJhZnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaWNlcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb250ZFwiO1xyXG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgZ2V0QnVmZmVycyhcIkNPTlREIFwiKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvblRhYmxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERDb25kaXRpb25zVGFibGUpO1xyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvblRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uVGV4dHMgPSBjb25kaXRpb25UYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHIgPiB0ZDpudGgtY2hpbGQoMilcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbmRpdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShjb25kaXRpb25UZXh0cykuZm9yRWFjaChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGNvbmRpdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZGl0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3Zpc2lvbk1hdGNoID0gKC9Qcm92aXNpb24gKFswLTksLl0rKSB1bml0W3NdPyBvZiAoW0EtWmEtejAtOSBdKykgQC9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm92aXNpb25NYXRjaCAmJiBwcm92aXNpb25NYXRjaC5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcHJvdmlzaW9uTWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBwcm92aXNpb25NYXRjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl0gPSBbcXVhbnRpdHkucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIiksIG1hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyTWF0Y2ggPSAoL0RlbGl2ZXJ5IG9mIChbMC05LC5dKykgdW5pdFtzXT8gb2YgKFtBLVphLXowLTkgXSspIHRvL2dtKS5leGVjKGNvbmRpdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGl2ZXJNYXRjaCAmJiBkZWxpdmVyTWF0Y2gubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IGRlbGl2ZXJNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IGRlbGl2ZXJNYXRjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl0gPSBbcXVhbnRpdHkucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIiksIG1hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50TWF0Y2ggPSAoL1BheW1lbnQgb2YgKFswLTksLl0rKS9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXltZW50TWF0Y2ggJiYgcGF5bWVudE1hdGNoLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZGl0aW9uc1tcIlBheW1lbnRcIl0gPSBwYXltZW50TWF0Y2hbMV0ucmVwbGFjZShcIixcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcE1hdGNoID0gKC9Qcm92aXNpb24gc2hpcG1lbnQgb2YgKFswLTksLl0rKSB1bml0W3NdPyBvZiAoW0EtWmEtejAtOSBdKykgQC9nbSkuZXhlYyhjb25kaXRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwTWF0Y2ggJiYgc2hpcE1hdGNoLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBzaGlwTWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBzaGlwTWF0Y2hbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdID0gW3F1YW50aXR5LnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLCBtYXRlcmlhbF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uRWRpdG9yRm9ybSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybSk7XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uRWRpdG9yRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25FZGl0b3JMYWJlbHMgPSBjb25kaXRpb25FZGl0b3JGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQ29udERGb3JtTGFiZWwpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNvbmRpdGlvbkVkaXRvckxhYmVscykuZm9yRWFjaChsYWJlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHMucHVzaChsYWJlbC50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbHNbMV0gPT0gXCJDdXJyZW5jeVwiICYmIHBhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXSAmJiBwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1NwYWNlciA9IGNvbmRpdGlvbkVkaXRvckZvcm0ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm1Sb3dTcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb3dTcGFjZXIgfHwgIXJvd1NwYWNlci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50SW5wdXQgPSByb3dTcGFjZXIucXVlcnlTZWxlY3RvcihcImRpdiA+IGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbW91bnRJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlclVuaXQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSB8fCBcIjBcIikgLyBwYXJzZUludChwYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsVGV4dCA9IHBlclVuaXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaWNlc1twYXJzZWRDb25kaXRpb25zW1wiTWF0ZXJpYWxcIl1bMV1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3JwID0gcGFyc2VJbnQocGFyc2VkQ29uZGl0aW9uc1tcIk1hdGVyaWFsXCJdWzBdKSAqIHRoaXMucHJpY2VzW3BhcnNlZENvbmRpdGlvbnNbXCJNYXRlcmlhbFwiXVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICs9IFwiIHwgXCIgKyB0b3RhbENvcnAudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgQ29ycFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93U3BhY2VyLmluc2VydEJlZm9yZShjcmVhdGVUZXh0U3BhbihsYWJlbFRleHQsIHRoaXMudGFnKSwgcm93U3BhY2VyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxhYmVsc1sxXSA9PSBcIkN1cnJlbmN5XCIgJiYgcGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdICYmIHBhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93U3BhY2VyID0gY29uZGl0aW9uRWRpdG9yRm9ybS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybVJvd1NwYWNlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvd1NwYWNlciB8fCAhcm93U3BhY2VyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHJvd1NwYWNlci5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFtb3VudElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNIZWF2eSA9IE1hdGVyaWFsc1twYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV1dWzFdID4gTWF0ZXJpYWxzW3BhcnNlZENvbmRpdGlvbnNbXCJTaGlwbWVudFwiXVsxXV1bMl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJVbml0ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUgfHwgXCIwXCIpIC8gcGFyc2VJbnQocGFyc2VkQ29uZGl0aW9uc1tcIlNoaXBtZW50XCJdWzBdKSAvIE1hdGVyaWFsc1twYXJzZWRDb25kaXRpb25zW1wiU2hpcG1lbnRcIl1bMV1dW2lzSGVhdnkgPyAxIDogMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxUZXh0ID0gcGVyVW5pdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyAoaXNIZWF2eSA/IFwiL3RcIiA6IFwiL23Cs1wiKTtcclxuICAgICAgICAgICAgICAgIHJvd1NwYWNlci5pbnNlcnRCZWZvcmUoY3JlYXRlVGV4dFNwYW4obGFiZWxUZXh0LCB0aGlzLnRhZyksIHJvd1NwYWNlci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnRyYWN0RHJhZnRzLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNyZWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWltYWdlXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkNPTVwiKTtcclxuICAgICAgICBpZiAoIWJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXRMaW5rcyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkNoYXRMaW5rKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhdEFyZWEgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DaGF0QXJlYSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhdEFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYXRMaW5rcykuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtUZXh0ID0gbGluay50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICghbGlua1RleHQgfHwgbGluay5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0ltYWdlKGxpbmtUZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXQtaW1hZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gbGlua1RleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmsucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpbmsucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgY2hhdEFyZWEuc2Nyb2xsQnkoMCwgKGltZy5vZmZzZXRIZWlnaHQgfHwgMCkgKyAyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNJbWFnZSh1cmwpIHtcclxuICAgIHJldHVybiAvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGF2aWZ8Z2lmfHN2ZykkLy50ZXN0KHVybCk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSW1hZ2VDcmVhdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzLCBwYXJzZUludk5hbWUsIHBhcnNlUGxhbmV0TmFtZSwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIHRhcmdldGVkQ2xlYW51cCwgc2V0U2V0dGluZ3MsIHNob3dCdWZmZXIsIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMsIFNvcnRpbmdUcmlhbmdsZUhUTUwgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5T3JnYW5pemVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBmdWxsQnVybiwgcmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWludi1vcmdcIjtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5mdWxsQnVybiA9IGZ1bGxCdXJuO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJJTlYgXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgIGlmICghYnVmZmVycyB8fCAhcmVzdWx0IHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiaW52ZW50b3J5X3NvcnRpbmdcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJpbnZlbnRvcnlfc29ydGluZ1wiXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoIXRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic29ydGluZ1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TY3JlZW5OYW1lKTtcclxuICAgICAgICBjb25zdCBzY3JlZW5OYW1lID0gc2NyZWVuTmFtZUVsZW0gPyBzY3JlZW5OYW1lRWxlbS50ZXh0Q29udGVudCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzY3JlZW5OYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy50YWc7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5U29ydE9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoIXNvcnRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFzZU5hbWVFbGVtID0gYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKTtcclxuICAgICAgICAgICAgaWYgKCFiYXNlTmFtZUVsZW0gfHwgIWJhc2VOYW1lRWxlbVswXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGludk5hbWUgPSBwYXJzZUludk5hbWUoYmFzZU5hbWVFbGVtWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKCFpbnZOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGxhbmV0TmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnlOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcGxhbmV0TmFtZSA9IHBsYW5ldE5hbWVFbGVtID8gcGFyc2VQbGFuZXROYW1lKHBsYW5ldE5hbWVFbGVtLnRleHRDb250ZW50KSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXROYW1lLCB0aGlzLmZ1bGxCdXJuW3RoaXMudXNlcm5hbWVdKTtcclxuICAgICAgICAgICAgY29uc3QgaW52ZW50b3J5ID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5KTtcclxuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkgfHwgIWludmVudG9yeS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpbnZlbnRvcnkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGItbW9uaXRvcmVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkuY2xhc3NMaXN0LmFkZChcInBiLW1vbml0b3JlZFwiKTtcclxuICAgICAgICAgICAgICAgIHNvcnRJbnZlbnRvcnkoaW52ZW50b3J5LCBzb3J0T3B0aW9ucywgcmVzdWx0LCB0aGlzLnRhZywgc2NyZWVuTmFtZSwgaW52TmFtZSwgYnVybik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiMjUwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldGVkQ2xlYW51cCh0YWcsIGludmVudG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgaW52TmFtZSwgYnVybik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpbnZlbnRvcnk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuICAgICAgICAgICAgICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2hpcEJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiU0hQSSBcIik7XHJcbiAgICAgICAgaWYgKCFzaGlwQnVmZmVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBzaGlwQnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSW52ZW50b3J5U29ydE9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoIXNvcnRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWVFbGVtID0gYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKTtcclxuICAgICAgICAgICAgaWYgKCFzaGlwTmFtZUVsZW0gfHwgIXNoaXBOYW1lRWxlbVswXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gcGFyc2VJbnZOYW1lKHNoaXBOYW1lRWxlbVswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGlmICghc2hpcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JbnZlbnRvcnkpO1xyXG4gICAgICAgICAgICBpZiAoIWludmVudG9yeSB8fCAhaW52ZW50b3J5LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWludmVudG9yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi1tb25pdG9yZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeS5jbGFzc0xpc3QuYWRkKFwicGItbW9uaXRvcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiMjUwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldGVkQ2xlYW51cCh0YWcsIGludmVudG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgc2hpcE5hbWUsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpbnZlbnRvcnk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuICAgICAgICAgICAgICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc29ydEludmVudG9yeShpbnZlbnRvcnksIHNvcnRPcHRpb25zLCByZXN1bHQsIHRhZywgc2NyZWVuTmFtZSwgcGxhbmV0TmFtZSwgYnVybikge1xyXG4gICAgaWYgKHNvcnRPcHRpb25zLmNoaWxkcmVuLmxlbmd0aCA8PSA3KSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uICE9IHNvcnRPcHRpb25zLmZpcnN0Q2hpbGQgJiYgIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbklubmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbklubmVyLmNoaWxkcmVuWzFdICYmIG9wdGlvbklubmVyLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSW5uZXIucmVtb3ZlQ2hpbGQob3B0aW9uSW5uZXIuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXS5mb3JFYWNoKHNvcnRTZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRTZXR0aW5nc1swXSA9PSBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0U2V0dGluZ3NbMV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludmVudG9yeS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5pbnNlcnRCZWZvcmUoaW52ZW50b3J5LmZpcnN0Q2hpbGQsIGludmVudG9yeS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChidXJuKSB7XHJcbiAgICAgICAgICAgIHNvcnRPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZVRvZ2dsZShyZXN1bHQsIHNvcnRPcHRpb25zLCBcIkJSTlwiLCBmaW5kSWZBY3RpdmUocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2VsZWN0ZWRfc29ydGluZ1wiXSwgc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUsIFwiQlJOXCIpLCBzY3JlZW5OYW1lICsgcGxhbmV0TmFtZSwgaW52ZW50b3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNvcnRpbmdcIl0uZm9yRWFjaChzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2V0dGluZ3NbMF0gfHwgIXNldHRpbmdzWzFdIHx8ICFzZXR0aW5nc1syXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nc1sxXS50b1VwcGVyQ2FzZSgpICE9IHBsYW5ldE5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvcnRPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZVRvZ2dsZShyZXN1bHQsIHNvcnRPcHRpb25zLCBzZXR0aW5nc1swXSwgZmluZElmQWN0aXZlKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0sIHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lLCBzZXR0aW5nc1swXSksIHNjcmVlbk5hbWUgKyBwbGFuZXROYW1lLCBpbnZlbnRvcnkpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRPcHRpb25zLmNoaWxkcmVuW3NvcnRPcHRpb25zLmNoaWxkcmVuLmxlbmd0aCAtIDFdICYmIHNvcnRPcHRpb25zLmNoaWxkcmVuW3NvcnRPcHRpb25zLmNoaWxkcmVuLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ICE9IFwiK1wiKSB7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcIkludmVudG9yeVNvcnRDb250cm9sc19fY3JpdGVyaWFfX19pakxNZ2ptXCIpO1xyXG4gICAgICAgIHNvcnRPcHRpb25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICAgICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGFkZExhYmVsKTtcclxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2hvd0J1ZmZlcihcIlhJVCBTT1JUX1wiICsgcGxhbmV0TmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBhY3RpdmVTb3J0ID0gXCJcIjtcclxuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNlbGVjdGVkX3NvcnRpbmdcIl0uZm9yRWFjaChzb3J0U2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChzb3J0U2V0dGluZ3NbMF0gPT0gc2NyZWVuTmFtZSArIHBsYW5ldE5hbWUpIHtcclxuICAgICAgICAgICAgYWN0aXZlU29ydCA9IHNvcnRTZXR0aW5nc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBBcnJheS5mcm9tKHNvcnRPcHRpb25zLmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPSBzb3J0T3B0aW9ucy5maXJzdENoaWxkICYmIG9wdGlvbi5maXJzdENoaWxkICYmIG9wdGlvbi5maXJzdENoaWxkLnRleHRDb250ZW50ID09IGFjdGl2ZVNvcnQgJiYgIW9wdGlvbi5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcclxuICAgICAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodG9nZ2xlSW5kaWNhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9uLmZpcnN0Q2hpbGQgJiYgb3B0aW9uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgIT0gYWN0aXZlU29ydCAmJiBvcHRpb24uY2hpbGRyZW5bMV0pIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZVNvcnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGlmIChhY3RpdmVTb3J0ID09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gQXJyYXkuZnJvbShpbnZlbnRvcnkucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GdWxsTWF0ZXJpYWxJY29uKSk7XHJcbiAgICBtYXRlcmlhbHMuc29ydChtYXRlcmlhbFNvcnQpO1xyXG4gICAgdmFyIHNvcnRlZCA9IFtdO1xyXG4gICAgdmFyIHNvcnRpbmdEZXRhaWxzID0gW107XHJcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzb3J0aW5nXCJdLmZvckVhY2gocmVzdWx0X3NvcnRpbmdEZXRhaWxzID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0X3NvcnRpbmdEZXRhaWxzWzBdID09IGFjdGl2ZVNvcnQgJiYgcmVzdWx0X3NvcnRpbmdEZXRhaWxzWzFdID09IHBsYW5ldE5hbWUpIHtcclxuICAgICAgICAgICAgc29ydGluZ0RldGFpbHMgPSByZXN1bHRfc29ydGluZ0RldGFpbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgaWYgKGFjdGl2ZVNvcnQgIT0gXCJCUk5cIikge1xyXG4gICAgICAgIGlmIChzb3J0aW5nRGV0YWlscy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvcnRpbmdEZXRhaWxzWzRdKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbHNUb1NvcnQgPSBbXTtcclxuICAgICAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNUb1NvcnQgPSBtYXRlcmlhbHNUb1NvcnQuY29uY2F0KGNhdGVnb3J5WzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbHNUb1NvcnQgPSBtYXRlcmlhbHNUb1NvcnQuZmlsdGVyKChjLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGVyaWFsc1RvU29ydC5pbmRleE9mKGMpID09PSBpbmRleDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsc1RvU29ydC5mb3JFYWNoKHRpY2tlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsTGlzdENvbnRhaW5zKG1hdGVyaWFscywgdGlja2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdEVsZW1lbnQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCB0YWcsIFwiMFwiLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0UXVhbnRpdHlFbGVtID0gbWF0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsUXVhbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRRdWFudGl0eUVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0UXVhbnRpdHlFbGVtLnN0eWxlLmNvbG9yID0gXCIjY2MwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxzLnNvcnQobWF0ZXJpYWxTb3J0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc29ydGluZ0RldGFpbHNbMl0uZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhdGVnb3J5WzBdKSk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XHJcbiAgICAgICAgICAgIHZhciBhcmVJdGVtc0luQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlja2VyICYmIGNhdGVnb3J5WzFdLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcmVJdGVtc0luQ2F0ZWdvcnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFhcmVJdGVtc0luQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeS5yZW1vdmVDaGlsZChjYXRlZ29yeVRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuY29uY2F0KGNhdGVnb3J5WzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRpbmdEZXRhaWxzWzNdIHx8IGFjdGl2ZVNvcnQgPT0gXCJCUk5cIikge1xyXG4gICAgICAgIGlmIChidXJuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtmb3JjZU1hdGVyaWFscyA9IGV4dHJhY3RNYXRlcmlhbHMoYnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRNYXRlcmlhbHMgPSBleHRyYWN0TWF0ZXJpYWxzKGJ1cm5bXCJPcmRlckNvbnN1bXB0aW9uXCJdKTtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0TWF0ZXJpYWxzID0gZXh0cmFjdE1hdGVyaWFscyhidXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKTtcclxuICAgICAgICAgICAgY29uc3Qgd29ya2ZvcmNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICB3b3JrZm9yY2VUaXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnN1bWFibGVzXCIpKTtcclxuICAgICAgICAgICAgd29ya2ZvcmNlVGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgICAgICB3b3JrZm9yY2VUaXRsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB3b3JrZm9yY2VUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZCh3b3JrZm9yY2VUaXRsZSk7XHJcbiAgICAgICAgICAgIHZhciBhcmVDb25zdW1hYmxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aWNrZXJFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gdGlja2VyRWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgd29ya2ZvcmNlTWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIWlucHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIW91dHB1dE1hdGVyaWFscy5pbmNsdWRlcyh0aWNrZXIpICYmICFzb3J0ZWQuaW5jbHVkZXModGlja2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJlQ29uc3VtYWJsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFhcmVDb25zdW1hYmxlcykge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKHdvcmtmb3JjZVRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgaW5wdXRUaXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIklucHV0c1wiKSk7XHJcbiAgICAgICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgICAgICBpbnB1dFRpdGxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcbiAgICAgICAgICAgIHZhciBhcmVJbnB1dHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdGlja2VyRWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IHRpY2tlckVsZW0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlja2VyICYmIGlucHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcmVJbnB1dHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFhcmVJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeS5yZW1vdmVDaGlsZChpbnB1dFRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiT3V0cHV0c1wiKSk7XHJcbiAgICAgICAgICAgIG91dHB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgICAgICAgICAgb3V0cHV0VGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgb3V0cHV0VGl0bGUuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQob3V0cHV0VGl0bGUpO1xyXG4gICAgICAgICAgICB2YXIgYXJlT3V0cHV0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXJFbGVtID0gbWF0ZXJpYWwucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aWNrZXJFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gdGlja2VyRWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aWNrZXIgJiYgb3V0cHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIWlucHV0TWF0ZXJpYWxzLmluY2x1ZGVzKHRpY2tlcikgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5LmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcmVPdXRwdXRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghYXJlT3V0cHV0cykge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LnJlbW92ZUNoaWxkKG91dHB1dFRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuY29uY2F0KHdvcmtmb3JjZU1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHNvcnRlZC5jb25jYXQoaW5wdXRNYXRlcmlhbHMpO1xyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuY29uY2F0KG91dHB1dE1hdGVyaWFscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWlzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIG1pc2NUaXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk90aGVyXCIpKTtcclxuICAgIG1pc2NUaXRsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBtaXNjVGl0bGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIG1pc2NUaXRsZS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBpbnZlbnRvcnkuYXBwZW5kQ2hpbGQobWlzY1RpdGxlKTtcclxuICAgIHZhciBhcmVNaXNjID0gZmFsc2U7XHJcbiAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgY29uc3QgdGlja2VyRWxlbSA9IG1hdGVyaWFsLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcclxuICAgICAgICBpZiAoIXRpY2tlckVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aWNrZXIgPSB0aWNrZXJFbGVtLnRleHRDb250ZW50O1xyXG4gICAgICAgIGlmICh0aWNrZXIgJiYgIXNvcnRlZC5pbmNsdWRlcyh0aWNrZXIpKSB7XHJcbiAgICAgICAgICAgIGludmVudG9yeS5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGFyZU1pc2MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGlmICghYXJlTWlzYykge1xyXG4gICAgICAgIGludmVudG9yeS5yZW1vdmVDaGlsZChtaXNjVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIG1hdGVyaWFsTGlzdENvbnRhaW5zKG1hdGVyaWFscywgdGlja2VyKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRpY2tlckVsZW0gPSBtYXRlcmlhbHNbaV0ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NYXRlcmlhbFRleHQpO1xyXG4gICAgICAgIGlmICghdGlja2VyRWxlbSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpY2tlciA9PSB0aWNrZXJFbGVtLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBmaW5kSWZBY3RpdmUoc29ydFNldHRpbmdzLCBzY3JlZW5QbGFuZXQsIHNvcnRNb2RlTmFtZSkge1xyXG4gICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICBzb3J0U2V0dGluZ3MuZm9yRWFjaChzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzWzBdID09IHNjcmVlblBsYW5ldCAmJiBzZXR0aW5nc1sxXSA9PSBzb3J0TW9kZU5hbWUpIHtcclxuICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXRjaDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGUocmVzdWx0LCBzb3J0T3B0aW9ucywgYWJicmV2aWF0aW9uLCBzZWxlY3RlZCwgY29tYmluZWROYW1lLCBpbnZlbnRvcnkpIHtcclxuICAgIGNvbnN0IGN1c3RvbVNvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY3VzdG9tU29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiSW52ZW50b3J5U29ydENvbnRyb2xzX19jcml0ZXJpYV9fX2lqTE1nam1cIik7XHJcbiAgICBjdXN0b21Tb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYi10b2dnbGVcIik7XHJcbiAgICBjb25zdCB0b2dnbGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2dnbGVMYWJlbC50ZXh0Q29udGVudCA9IGFiYnJldmlhdGlvbjtcclxuICAgIGN1c3RvbVNvcnRCdXR0b24uYXBwZW5kQ2hpbGQodG9nZ2xlTGFiZWwpO1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShzb3J0T3B0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInBiLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb24uY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3IuaW5uZXJIVE1MID0gU29ydGluZ1RyaWFuZ2xlSFRNTDtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IFwiMnB4XCI7XHJcbiAgICAgICAgY3VzdG9tU29ydEJ1dHRvbi5hcHBlbmRDaGlsZCh0b2dnbGVJbmRpY2F0b3IpO1xyXG4gICAgfVxyXG4gICAgY3VzdG9tU29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oc29ydE9wdGlvbnMuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlQ2hpbGQob3B0aW9uLmNoaWxkcmVuWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW52ZW50b3J5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkuaW5zZXJ0QmVmb3JlKGludmVudG9yeS5maXJzdENoaWxkLCBpbnZlbnRvcnkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLmlubmVySFRNTCA9IFNvcnRpbmdUcmlhbmdsZUhUTUw7XHJcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjJweFwiO1xyXG4gICAgICAgIGN1c3RvbVNvcnRCdXR0b24uYXBwZW5kQ2hpbGQodG9nZ2xlSW5kaWNhdG9yKTtcclxuICAgICAgICB2YXIgc2F2ZWRCZWZvcmUgPSBmYWxzZTtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLmZvckVhY2goc29ydGluZ09wdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc29ydGluZ09wdGlvbnNbMF0gPT0gY29tYmluZWROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0aW5nT3B0aW9uc1sxXSA9IGFiYnJldmlhdGlvbjtcclxuICAgICAgICAgICAgICAgIHNhdmVkQmVmb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFzYXZlZEJlZm9yZSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzZWxlY3RlZF9zb3J0aW5nXCJdLnB1c2goW2NvbWJpbmVkTmFtZSwgYWJicmV2aWF0aW9uXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY3VzdG9tU29ydEJ1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0TWF0ZXJpYWxzKGJ1cm4pIHtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFtdO1xyXG4gICAgYnVybi5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gfHwgXCJcIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcbn1cclxuZnVuY3Rpb24gbWF0ZXJpYWxTb3J0KGEsIGIpIHtcclxuICAgIGNvbnN0IHRpY2tlckVsZW1BID0gYS5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1hdGVyaWFsVGV4dCk7XHJcbiAgICBpZiAoIXRpY2tlckVsZW1BKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGlja2VyQSA9IHRpY2tlckVsZW1BLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgdGlja2VyRWxlbUIgPSBiLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTWF0ZXJpYWxUZXh0KTtcclxuICAgIGlmICghdGlja2VyRWxlbUIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aWNrZXJCID0gdGlja2VyRWxlbUIudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyQV0gfHwgIU1hdGVyaWFsTmFtZXNbdGlja2VyQl0pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChNYXRlcmlhbE5hbWVzW3RpY2tlckFdWzFdID09IE1hdGVyaWFsTmFtZXNbdGlja2VyQl1bMV0pIHtcclxuICAgICAgICByZXR1cm4gdGlja2VyQS5sb2NhbGVDb21wYXJlKHRpY2tlckIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbdGlja2VyQV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW3RpY2tlckJdWzFdKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9JbnZlbnRvcnlPcmdhbml6ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5leHBvcnQgY2xhc3MgSGVhZGVyTWluaW1pemVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1pbkJ5RGVmYXVsdCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1taW4taGVhZGVyc1wiO1xyXG4gICAgICAgIHRoaXMubWluQnlEZWZhdWx0ID0gbWluQnlEZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdmFyIGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiQ1ggXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUhlYWRlcnMoYnVmZmVyLCB0aGlzLm1pbkJ5RGVmYXVsdCwgdGhpcy50YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkNPTlQgXCIpO1xyXG4gICAgICAgIGlmICghYnVmZmVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUhlYWRlcnMoYnVmZmVyLCB0aGlzLm1pbkJ5RGVmYXVsdCwgdGhpcy50YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtaW5pbWl6ZUhlYWRlcnMoYnVmZmVyLCBtaW5CeURlZmF1bHQsIHRhZykge1xyXG4gICAgY29uc3QgYnVmZmVyUGFuZWwgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWZmZXJQYW5lbCk7XHJcbiAgICBpZiAoIWJ1ZmZlclBhbmVsIHx8ICFidWZmZXJQYW5lbC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGVhZGVycyA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkhlYWRlclJvdyk7XHJcbiAgICBpZiAoaGVhZGVyc1swXSAmJiBoZWFkZXJzWzBdLmNsYXNzTGlzdC5jb250YWlucyh0YWcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbkJ5RGVmYXVsdCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oaGVhZGVycykuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWluaW1pemVCdXR0b24udGV4dENvbnRlbnQgPSBtaW5CeURlZmF1bHQgPyBcIitcIiA6IFwiLVwiO1xyXG4gICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZChcInBiLW1pbmltaXplXCIpO1xyXG4gICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZChcInBiLW1pbmltaXplLWN4XCIpO1xyXG4gICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBtaW5pbWl6ZSA9IG1pbmltaXplQnV0dG9uLnRleHRDb250ZW50ID09IFwiLVwiO1xyXG4gICAgICAgIG1pbmltaXplQnV0dG9uLnRleHRDb250ZW50ID0gbWluaW1pemUgPyBcIitcIiA6IFwiLVwiO1xyXG4gICAgICAgIEFycmF5LmZyb20oaGVhZGVycykuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBtaW5pbWl6ZSA/IFwibm9uZVwiIDogXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgYnVmZmVyUGFuZWwuZmlyc3RDaGlsZC5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyUm93KFwiTWluaW1pemVcIiwgbWluaW1pemVCdXR0b24sIHRhZyksIGJ1ZmZlclBhbmVsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyUm93KGxhYmVsVGV4dCwgcmlnaHRTaWRlQ29udGVudHMsIHRhZykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkhlYWRlclJvdyk7XHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkhlYWRlckxhYmVsKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkhlYWRlckNvbnRlbnQpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZChyaWdodFNpZGVDb250ZW50cyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICByZXR1cm4gcm93O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0hlYWRlck1pbmltaXplci50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVDb250cmFjdERpY3QgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb250cmFjdHMge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNvbnRyYWN0cykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wZW5kaW5nLWNvbnRyYWN0c1wiO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IGNvbnRyYWN0cztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VybmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0TGluZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU2lkZWJhckNvbnRyYWN0KSk7XHJcbiAgICAgICAgdmFyIGNvbnRyYWN0ZGljdCA9IHt9O1xyXG4gICAgICAgIGNyZWF0ZUNvbnRyYWN0RGljdCh0aGlzLmNvbnRyYWN0cywgdGhpcy51c2VybmFtZSwgY29udHJhY3RkaWN0KTtcclxuICAgICAgICBjb250cmFjdExpbmVzLmZvckVhY2goY29udHJhY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdElERWxlbWVudCA9IGNvbnRyYWN0LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuU2lkZWJhckNvbnRyYWN0SWQpO1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRyYWN0SURFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3RJRCA9IGNvbnRyYWN0SURFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRyYWN0SUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29udHJhY3RkaWN0W2NvbnRyYWN0SURdICYmIGNvbnRyYWN0ZGljdFtjb250cmFjdElEXVtcIlBhcnRuZXJOYW1lXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFydG5lcmNvZGUgPSBjb250cmFjdGRpY3RbY29udHJhY3RJRF1bXCJQYXJ0bmVyTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0bmVyY29kZS5sZW5ndGggPiAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJjb2RlID0gY29udHJhY3RkaWN0W2NvbnRyYWN0SURdW1wiUGFydG5lckNvbXBhbnlDb2RlXCJdIHx8IGNvbnRyYWN0ZGljdFtjb250cmFjdElEXVtcIlBhcnRuZXJOYW1lXCJdLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlVGV4dFNwYW4oYCR7cGFydG5lcmNvZGV9YCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgbmFtZVNwYW4uc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdC5pbnNlcnRCZWZvcmUobmFtZVNwYW4sIGNvbnRyYWN0LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlVGV4dFNwYW4oXCJVbmtub3duXCIsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgbmFtZVNwYW4uc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0Lmluc2VydEJlZm9yZShuYW1lU3BhbiwgY29udHJhY3QuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1BlbmRpbmdDb250cmFjdHMudHNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=