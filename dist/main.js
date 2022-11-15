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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["j"] = downloadFile;
/* harmony export (immutable) */ __webpack_exports__["f"] = createNode;
/* harmony export (immutable) */ __webpack_exports__["g"] = createSelectOption;
/* unused harmony export createQuickRowButton */
/* harmony export (immutable) */ __webpack_exports__["b"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["q"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["i"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["c"] = createFinancialTextBox;
/* harmony export (immutable) */ __webpack_exports__["m"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["k"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["l"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["p"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["e"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["d"] = createLink;
/* harmony export (immutable) */ __webpack_exports__["r"] = showBuffer;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeValue;
/* harmony export (immutable) */ __webpack_exports__["n"] = genericCleanup;
/* harmony export (immutable) */ __webpack_exports__["s"] = toFixed;
/* harmony export (immutable) */ __webpack_exports__["o"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* unused harmony export sortTable */
/* harmony export (immutable) */ __webpack_exports__["h"] = createTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(3);



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
function createQuickRowButton(shortTextBold, shortTextNormal, longText, command) {
    const template = `<div class="MApcsYEd7+wqIJTfbHP1yA== fTT52i+1oFauxHOjVfGTww== kWTH1-HkYCWeYyDRgZ7ozQ==">
                          <span><span class="D+GJhIGmC2eFk59dvrY+Sg==">{{:shortBold}}</span>
                              {{:shortNormal}}</span><span class="cKqzEDeyKbzb9nPry0Dkfw==">: {{:longText}}
                          </span>
                     </div>`;
    let result = template.replace("{{:shortBold}}", shortTextBold)
        .replace("{{:shortNormal}}", shortTextNormal)
        .replace("{{:longText}}", longText);
    let node = createNode(result);
    node.onclick = () => { showBuffer(command); };
    return node;
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
function findCorrespondingPlanet(planet, data) {
    for (var i = 0; i < data.length; i++) {
        if (planet && data[i]["PlanetNaturalId"] && data[i]["PlanetNaturalId"].toLowerCase() == planet.toLowerCase()) {
            return data[i];
        }
        else if (planet && data[i]["PlanetName"] && data[i]["PlanetName"].toLowerCase() == planet.toLowerCase()) {
            return data[i];
        }
        else if (planet && data[i]["PlanetNaturalId"] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* PlanetNames */][planet] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["e" /* PlanetNames */][planet].toLowerCase() == data[i]["PlanetNaturalId"].toLowerCase()) {
            return data[i];
        }
    }
    return undefined;
}
function parseBaseName(text) {
    try {
        text = text.split("@")[1];
        text = text.split(" Base")[0];
        var hyphens = text.split(" - ");
        text = hyphens[hyphens.length - 1];
        var ending = text.split(" ");
        if (ending[1] != undefined && ending[2] != undefined && ending[2].length == 1) {
            return ending[1] + ending[2];
        }
        else {
            return text;
        }
    }
    catch (TypeError) {
        return text;
    }
}
function createMaterialElement(ticker, className = "prun-remove-js", amount = "none", text = false, small = false) {
    if (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker] == undefined && ticker != "SHPT") {
        return null;
    }
    const name = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker] || ["Shipment"])[0];
    const category = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker] || [undefined, "shipment"])[1];
    const totalPicture = document.createElement("div");
    totalPicture.classList.add("T5C45pTOW9QTzokWPqLQJg==");
    if (small) {
        totalPicture.style.height = "32px";
        totalPicture.style.width = "32px";
    }
    else {
        totalPicture.style.height = "48px";
        totalPicture.style.width = "48px";
    }
    const material = document.createElement("div");
    material.classList.add("E7OLUChYCexMUgOolKYjOQ==");
    material.title = name;
    if (small) {
        material.style.height = "32px";
        material.style.width = "32px";
        material.style.fontSize = "10.56px";
    }
    else {
        material.style.height = "48px";
        material.style.width = "48px";
        material.style.fontSize = "15.84px";
        material.style.margin = "2px auto";
    }
    material.style.background = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][0];
    material.style.color = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][1];
    material.style.cursor = "pointer";
    totalPicture.classList.add(className);
    const subDiv = document.createElement("div");
    subDiv.classList.add("nlQirpSkdLH0a6+C4lhduA==");
    const matText = document.createElement("span");
    matText.classList.add("rjpYL1i9cZmf47fM9qWyZQ==");
    matText.textContent = ticker;
    subDiv.appendChild(matText);
    material.appendChild(subDiv);
    totalPicture.appendChild(material);
    if (amount != "none") {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("G37fUJPwMoJ6fKHDGeg+-w==");
        const numberSubDiv = document.createElement("div");
        numberSubDiv.classList.add("bHjlDPB84Uz0yUnvHa-Y5A==");
        numberSubDiv.classList.add("_6OK6sXNjIIhq3NDD9ELVGw==");
        numberSubDiv.classList.add("gl73vnp5jo+VaepDRocunA==");
        numberSubDiv.textContent = amount;
        numberDiv.appendChild(numberSubDiv);
        totalPicture.appendChild(numberDiv);
    }
    if (small) {
        return totalPicture;
    }
    var superElem = document.createElement("div");
    superElem.classList.add(className);
    superElem.appendChild(totalPicture);
    superElem.style.display = "block";
    superElem.style.width = "64px";
    superElem.style.margin = "3px";
    superElem.style.padding = "auto";
    if (text != false) {
        var label = document.createElement("span");
        label.classList.add(className);
        label.textContent = name;
        label.style.fontWeight = "bold";
        label.style.boxSizing = "border-box";
        label.style.paddingTop = "2px";
        label.style.display = "block";
        superElem.appendChild(label);
    }
    return superElem;
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
    var inputEvent = new Event('input');
    inputEvent.initEvent('input', true, false);
    input.dispatchEvent(inputEvent);
    return;
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
function toFixed(value, precision = 2) {
    const power = Math.pow(10, precision || 0);
    return Math.round(value * power) / power;
}
function getBuffers(bufferCode) {
    const nodes = document.evaluate(`//div[@class='${__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferHeader}'][starts-with(., '${bufferCode}')]/../..`, document, null, XPathResult.ANY_TYPE, null);
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
    console.log(sorter);
    sorter.forEach(item => {
        table.children[1].insertBefore(table.children[1].children[0], item[1]);
    });
}
function tableSortAlph(a, b) {
    return a[0].localeCompare(b[0]);
}
function createTable(tile, headers, sectionHeaderTitle = "") {
    if (sectionHeaderTitle !== "") {
        const sectionHeader = document.createElement("h3");
        sectionHeader.appendChild(document.createTextNode(sectionHeaderTitle));
        sectionHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["e" /* Style */].SidebarSectionHead);
        tile.appendChild(sectionHeader);
    }
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Selector = {
    LMCommodityAdText: "div[class~='SxMonaicPrrS4JYTve+-RA==']",
    LMCommodityAdPriceSpan: "div[class~='ZScG9AjcTRgJ+MQOXLuCWA=='] > span",
    ProdItem: "JKtT4rrIC0GkPEAnZlYcSg==",
    ProdQueueTable: "table[class~='_1QAhpDUhd+7HWJxpHtoWJQ==']",
    ProdQueueHeader: "lgE1++73+6oYxVSaOtik-g==",
    BufferHeader: 'e2PKRKZUW6K9xLKNAP56cg== Ytu6fo6jLbk43YqO0yWkQA==',
    Sidebar: "div#TOUR_TARGET_SIDEBAR_RIGHT",
    LMPostForm: "article[class~='zw+0zQBZvala7yGp+Ad3Dw=='] > div > div > form",
    WorkforceConsumptionTable: "#undefined > div > div.N32GL8CJBOw3-rNx0PBZkQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div._4Ksi09VXhfvkGgtPbhCEyg\\=\\=.RUuw11b631eXrQYp-Id2wg\\=\\=",
    XITTile: "#undefined > div > div.zJrIzEvWM7K6oP0jrRRpbQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div > div > div.gecI5uGBluvjP5GCRk3dHA\\=\\= > div",
    XITTileFloat: "#TOUR_TARGET_EMPTY_TILE > div > div.zJrIzEvWM7K6oP0jrRRpbQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div > div > div.gecI5uGBluvjP5GCRk3dHA\\=\\= > div",
    BufferTitle: "_4Ksi09VXhfvkGgtPbhCEyg== RUuw11b631eXrQYp-Id2wg==",
    Notification: "div[class~='_6iTMJZ+xm-PbG+nWoPqh7g==']",
    ProdQueue: "div[class~='o1YcYrDkxt9IvN4ApCEjIw==']",
    ProdWindow: "div[class~='Iw1zMtcrB7NFCxAG4xTz8g==']",
    ProdPanel: "div[class~='gecI5uGBluvjP5GCRk3dHA==']",
    NewBFRButton: "TOUR_TARGET_BUTTON_BUFFER_NEW",
    WholeWindow: "#container",
    BufferTextField: ".UoOoh9EGx7YihezkSGeV2Q\\=\\=",
    BufferList: "#container > div > div > div > div:nth-child(3)",
    ScreenControls: "TOUR_TARGET_SCREEN_CONTROLS",
    TransferArea: "div[class~='B4ccCHhEh7W0xd-YYg3qTg==']",
    TransferField: "div[class~='xuy2wpBCdzgc8G3w3AlXTw==']",
    LeftSidebar: "TOUR_TARGET_SIDEBAR_LEFT_02",
    BufferArea: "div[class~='ZaphVV+fyaIiLCJyBCsZCA==']",
    CXOSTable: "div[class~='gecI5uGBluvjP5GCRk3dHA==']",
    ScreenName: "span[class~='IuXoporrDf7qxIl-mkNWhA==']",
    ContDForm: "div[class~='TIGJheNilTzuChc8+0E38A==']",
    ConditionEditor: "div[class~='NLOrH7hF5fbKIesqW3uSkA==']",
    ChatMessage: "div[class~='bY8qSPcFFLkiKNEqOrKHiA==']",
    ChatWindow: "div[class~='tvLh70IeyzjPBXlNSDYokg==']",
    ChatInput: "div[class~='BArxa2yGz-u5GgiT-uvI9Q==']",
    ChatTile: "div[class~='_8MZs-piY-+t2NOXRPhMM6A==']",
    MaterialIcon: "E7OLUChYCexMUgOolKYjOQ=="
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;



/***/ }),
/* 2 */
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

const PlanetCommands = ["ADM", "BSC", "COGC", "COGCPEX", "COGCU", "FLTP", "LR", "LMP", "LM", "PLI", "POPI", "POPR", "PPS", "SHY", "WAR"];
/* harmony export (immutable) */ __webpack_exports__["d"] = PlanetCommands;

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
/* harmony export (immutable) */ __webpack_exports__["e"] = PlanetNames;

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
/* harmony export (immutable) */ __webpack_exports__["b"] = MaterialNames;

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
/* harmony export (immutable) */ __webpack_exports__["c"] = Materials;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Style = {
    Button: ["fMW62cERnlzxZPFhnlPOeQ=="],
    ButtonPrimary: ["kgGsDNvDoWj61w4I7VAlfA=="],
    ButtonSuccess: ["QW80xveQm2GESkSORRH24g=="],
    ButtonDanger: ["ZFXWy4HCnztpZNlCXk83wQ=="],
    SidebarSectionHead: ["_2YrOM7-2sdK042VvH6WaJg==", "fTT52i+1oFauxHOjVfGTww=="],
    SidebarSectionContent: ["CN0NPNovlYtaIm4bqHFbLw==", "fTT52i+1oFauxHOjVfGTww=="],
    SidebarLine: ["y84EUI8gCP-SV91X7vIihQ==", "fVd3aYJhFY-uuaH+QTByhA=="],
    FontsRegular: ["CBorIbFC6Yt+FRYEHZyuaA=="],
    SidebarText: ["x-mLxEwC-ODh9MXDx4DxSQ==", "fTT52i+1oFauxHOjVfGTww==", "O7RX4zXL4gzHLoOwTVbrXw=="],
    SidebarSliver: ["ZPsRYCOj7pX59GYDIiOtKg==", "-dcYfbCWP72VS2OFhoDG-Q=="],
    SidebarButton: ["GHCPyjs3bxhb+WZ2BGLWHw=="],
    ContractLine: ["y84EUI8gCP-SV91X7vIihQ==", "fVd3aYJhFY-uuaH+QTByhA=="],
    ContractName: ["zhixp408YF082IzA5KPvfA=="],
    ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="],
    SettingsButton: ["A0Raxt0yS41ZQlnzmEvusg==", "ncHrIDsxNKH8LbMDigUiRg=="],
    SettingsBarUntoggled: ["Z9jYD8LyLZoBPb7JsART1w==", "P6Arba53I7cRvxiH0-pDQg=="],
    SettingsBarToggled: ["Z9jYD8LyLZoBPb7JsART1w==", "P6Arba53I7cRvxiH0-pDQg==", "V-75tb03enGVdcB+Sw-mRA==", "vKkB0W7jATtd8dSzgOYEKQ=="],
    SettingsText: ["YGSoqZwqkaG2CVltxMwoOw==", "fTT52i+1oFauxHOjVfGTww==", "kWTH1-HkYCWeYyDRgZ7ozQ==", "P3sSQkCRUgkpmKUgieJQvg=="]
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
.burn-green {
	background-color: #345034 !important;
	color: #9fbb9f;
}
.burn-yellow {
	background-color: #836e24 !important;
	color: #f6df94;
}
.burn-red {
	background-color: #5a3130 !important;
	color: #c59c9b;
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
/* I would love these next two to work, but they don't for some reason. */
div.HWbVOIC2rYGNug3UC2dV\+Q\=\= {
	background-color: #222;
}
/* full item name centering */
div.YCp8jhRg4EBG3aQxcizskQ\=\= {
  display: block;
  text-align: center;
  padding-top: 1px;
  width: 100%;
}`;
/* harmony export (immutable) */ __webpack_exports__["b"] = EnhancedColors;

const IconStyle = `/* PrUnIcon v0.7
* ===============
*
* Install Chrome addon: StyleBot 
* goto: apex.prosperousuniverse.com
* right-click anywhere, select: StyleBot -> Style Element
* Copy&Paste this file into the StyleBot window
*/
 
/* item ticker color. This is such a bad work around. */
div[title^="A"] div span,
div[title^="B"] div span,
div[title^="C"] div span,
div[title^="D"] div span,
div[title^="E"] div span,
div[title^="F"] div span,
div[title^="G"] div span,
div[title^="H"] div span,
div[title^="I"] div span,
div[title^="J"] div span,
div[title^="K"] div span,
div[title^="L"] div span,
div[title^="M"] div span,
div[title^="N"] div span,
div[title^="O"] div span,
div[title^="P"] div span,
div[title^="Q"] div span,
div[title^="R"] div span,
div[title^="S"] div span,
div[title^="T"] div span,
div[title^="U"] div span,
div[title^="V"] div span,
div[title^="W"] div span,
div[title^="X"] div span,
div[title^="Y"] div span,
div[title^="Z"] div span
{
    color: #cccccc;
}
 
/* table color */
table tbody td:nth-child(odd)
{
  background-color: #21252e;
}
 
div[title="gold ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 gold;
  position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="iron ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 aqua;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="aluminium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 grey;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="silicon ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 white;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="titanium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 blue;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="lithium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 green;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="copper ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 red;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  font-size: 20pt;
  opacity: 0.1;
}
 
div[title="ferro-titanium"i] div:before 
{
  content: "🟦";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
    position: absolute;
  z-index: -1;
}
 
div[title="alpha-stabilized titanium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
    position: absolute;
  z-index: -1;
}
 
div[title="ferrominium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
    position: absolute;
  z-index: -1;
}
 
div[title="alpha-stabilized tungsten"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
    position: absolute;
  z-index: -1;
}
 
div[title^="Basic Thermal"i] div:before 
{
  content: "🔥";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
    position: absolute;
  z-index: -1;
}
 
div[title^="Advanced Thermal"i] div:before 
{
  content: "🔥";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
    position: absolute;
  z-index: -1;
}
 
div[title*="Anti-Rad"i] div:before 
{
  content: "⚛";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.4;
    position: absolute;
  z-index: -1;
}
 
div[title^="Advanced Anti-Rad"i] div:before 
{
  font-size: 25px;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  opacity: 0.1;
}
 
div[title^="Specialized Anti-Rad"i] div:before 
{
  font-size: 30px;
    position: absolute;
  z-index: -1;
  color: rgba(100%, 0%, 0%, 0);
  opacity: 0.1;
}
 
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
  content: "⛰"; opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title*="controller"i]:before {
  content: "🎛"; opacity: 0.6;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title*="filter"i]:before,
div[title*="device"i]:before,
div[title*=" MK"i]:before {
  content: "📻";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="glass"i]:before {
  content: "🔲";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="headphone"i]:before {
  content: "🎧";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="holographic glasses"i]:before {
  content: "👓";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="diode"i]:before {
  content: "▶";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[data-tooltip-content*="SAR"i]:before,
div[title*="scanner"i]:before,
div[title*="sensor"i]:before {
  content: "🔭";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Foundation"]:before {
  content: "🧇";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🧮🎫🎟 */
div[title*="memory"i]:before,
div[title*="process"i]:before,
div[title*="transistor"i]:before,
div[title*="circuit"i]:before {
  content: "🎟";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/*🧧🎟💿📼*/
div[title="Non-Volatile Memory"i]:before
{
  content: "📀";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="system"i]:before,
div[title*="computer"i]:before,
div[title*="mainframe"i]:before {
  content: "🖥"; 
  opacity: 0.6;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
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
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="motherboard"i]:before,
div[title*="wafer"i]:before {
  content: "🎫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="broadcasting"i]:before,
div[title*="antenna"i]:before,
div[title*="emitter"i]:before {
  content: "📡";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="library"i]:before {
  content: "📖";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Workstation"]:before,
div[title*="Display"]:before {
  content: "💻";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Light"]:before {
  content: "💡";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Rock"]:before {
  content: "🥯";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Liquid"]:before, 
div[title*="Fluid"]:before {
  content: "💧";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Air"]:before, 
div[title*="Gas"]:before,
 div[title*="Aero"]:before {
  content: "☁";
     position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Audio"]:before {
  content: "🔊";
  opacity: 0.3; /* system override */
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title*="Power"]:before, 
div[title*="Capacitor"]:before {
  content: "🔋";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Kit"]:before {
  content: "🛠";
  font-size: 35px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Tank"]:before {
  content: "🛢";
  font-size: 35px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Protection"]:before,
div[title*="Plate"]:before,
div[title*="Shield"]:before {
  content: "🛡";
  font-size: 40px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Connectors"]:before {
  content: "🔌";
  font-size: 30px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Seats"]:before {
  content: "🪑";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Substance"]:before, 
div[title*="Chemical"]:before, 
div[title*="Agent"]:before, 
div[title*="Flux"]:before, 
div[title*="Resin"]:before, 
div[title*="Colorant"]:before {
  content: "🧪";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Acid"]:before {
  content: "☣";
  font-size: 40px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Bacteria"]:before {
  content: "🧫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Cryo"]:before {
  content: "❄";
  font-size: 40px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Soil"]:before {
  content: "🥔";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🧰🔪🩺 */
div[title*="Surgical"i]:before,
div[title*="Medical"i]:before {
  content: "🩺";
  font-size: 30px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="Magnet"]:before {
  content: "🧲";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Deco"]:before {
  content: "🖼";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Solar"]:before {
  content: "⚡";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
/* alloys ♒ 🟪*/
div[title*="-Titanium"]::before,
div[title*=" Titanium"]::before
{
  content: "🟪";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
div[title="Ferrominium"]::before
{
  content: "🟦";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
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
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Bandages"]:before {
  content: "🧻";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Painkillers"]:before {
  content: "💊";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Surgical Equipment"]:before {
  content: "🩺";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Tube"]:before {
  content: "🧪";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🛌 */
div[title*="Crew Quarters"]:before,
div[title*="Trauma Care"]:before {
  content: "🛏";
  font-size: 40px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
/* ---------- */
 
div[title*="Iodine"]:before {
  content: "🩸";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Sodium"]:before {
  content: "🧂";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Carbon"]:before {
  content: "🎩";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🧂💿🍙🍥⛰🏔 */
div[title="Chlorine"]:before {
  content: "🍥";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Sulfur"]:before {
  content: "🟡";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Tantalum"]:before {
  content: "🔘";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Calcium"]:before {
  content: "⛰";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Beryllium"]:before {
  content: "⛰";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Magnesium"]:before {
  content: "⛰";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title="Gold"]:before {
  content: "🟨";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
/* 〰🧈🧊🟤🟦 */
 
div[title="Aluminium"]:before {
  content: "⬜";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title="Steel"]:before {
  content: "🧊";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title="Titanium"]:before {
  content: "🟪";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title~="Tungsten"]:before
{
  content: "🟫";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title="Silicon"]:before{
  content: "〰"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title="Copper"]:before {
  content: "🟧";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
/* 🟥 */
div[title="Iron"]:before {
  content: "🟦";
  font-size: 25px; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
/* alloys */
 
div[title="Red Gold"]:before {
  content: "🔶";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
div[title="Blue Gold"]:before {
  content: "🔷";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
div[title="Bronze"]:before {
  content: "🔺";
  font-size: 25px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
div[title="Borosilicate"]:before {
  content: "〰";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
/* ---- */
 
/* 🖊❗➖💈 🌠🥖🍡🧨 */
div[title*="fuel rod"i]:before {
  content: "🧨";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="basic fuel rod"i]:before {
  content: "➖";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*=" reactor"i]:before,
div[title*=" generator"i]:before {
  content: "🎆";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="fission reactor"i]:before {
  font-size: 20px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title*="radioisotope generator"i]:before {
  font-size: 20px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
 
/* ---- */
 
div[title="Limestone"]:before {
  content: "🥯";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Drone"]:before {
  content: "✈";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Ore"]:before {
  content: "🥔";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Crystals"]:before {
  content: "💎";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
/* ---------- */
 
div[title$="Grains"]:before {
  content: "🌾";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Maize"]:before {
  content: "🌽";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title^="Drink"]:before {
  content: "🧃";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title^="Protein-Rich Beans"]:before {
  content: "🥒";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title^="Basic Ra"]:before {
  content: "🥫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Nuts"]:before {
  content: "🥜";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Fruits"]:before {
  content: "🍅";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Plants"]:before {
  content: "🌲";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title^="Caffeinated Beans"]:before {
  content: "🌿";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Algae"]:before {
  content: "🍃";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Grapes"]:before {
  content: "🍇";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Herbs"]:before {
  content: "🌶";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Fodder"]:before {
  content: "💊";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Hops"]:before {
  content: "🌾";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Cotton Fiber"]:before {
  content: "🧶";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Patties"]:before {
  content: "🧫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Mushrooms"]:before {
  content: "🍄";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Pineberries"]:before {
  content: "🍓";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Paste"]:before {
  content: "🥣";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Solution"]:before {
  content: "🧪";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title^="Vita Essence"]:before {
  content: "🍶";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
 
div[title^="Water"]:before {
  content: "💧";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
/* 🎨🏀🏐⚾ */
div[title="Polymer Granulate"]:before {
  content: "🏐";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Poly-Ethylene"]:before {
  content: "⚾";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Sheet Type"]:before {
  content: "🧻";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Foam"]:before,
div[title*="Seal"]:before {
  content: "🌫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Fiber"]:before,
div[title*="Fabric"]:before {
  content: "🧵";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Raw Silk Strains"]:before,
div[title="Raw Cotton Fiber"]:before {
  content: "🧶";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Supplies"]:before {
  content: "📠";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title$="Uniform"]:before {
  content: "👖";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title$="Toolset"]:before {
  content: "🛠"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title^="FTL"]:before {
  content: "☀";
  font-size: 40px; opacity: 0.5;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title^="STL"]:before {
  content: "🛢";
  font-size: 40px; opacity: 0.5;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title$="Construction Granulate"]:before {
  content: "🧱";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title*="Casing"]:before {
  content: "🧊";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title$="Deck Elements"]:before {
  content: "🎞";
  font-size: 40px;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
}
div[title$="Structural Elements"]:before {
  content: "⛓";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🛎 */
div[title$="Bulkhead"]:before {
  content: "🛸";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
/* 🏗🧭🌫☀🌀 */
div[title$="Aperture"]:before {
  content: "🏗";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Truss"]:before {
  content: "🗼";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
/* ----- gasses------ */
/* 💨🕳〰🌊🌫💥🛢🧳🧴☄ */
 
div[title="Ammonia"]:before {
  content: "🩸";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Argon"]:before {
  content: "☁";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Fluorine"]:before {
  content: "☁";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Neon"]:before {
  content: "☁";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Nitrogen"]:before {
  content: "💧";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Oxygen"]:before {
  content: "💨";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title*="Helium"]:before {
  content: "🌌";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title^="Hydrogen"]:before {
  content: "💫";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
div[title="Helium-3 Isotope"]:before,
div[title="Heliotrope Extract"]:before{
  content: "💦";
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: .3;
  font-size: 30px;
}
 
div[title="Caffeinated Infusion"]:before {
  content: "☕"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Basic Overalls"]:before {
  content: "🧥"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title$="Work Overall"]:before {
  content: "🦺"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Basic Overalls"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(57 73 147)) }
div[title="Caffeinated Infusion"], 
div[title$="Work Overall"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(105 30 145)) }
 
div[title="Kombucha"]:before {
  content: "🍯"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title^="Exos"]:before {
  content: "👷‍♀️"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title^="Power Tools"]:before {
  content: "🔌"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title^="Exos"], 
div[title="Power Tools"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(57 73 147)) }
div[title="Kombucha"],
div[title="Repair Kit"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(105 30 145)) }
 
div[title$="Ale"]:before {
  content: "🍺"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Stem Cell Treatment"]:before {
  content: "💉"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="HazMat Work Suit"]:before {
  content: "👩‍🚒"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Multi-Purpose Scanner"]:before {
  content: "🔭"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Basic Medical Kit"], 
div[title="HazMat Work Suit"], 
div[title="Multi-Purpose Scanner"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(57 73 147)) 
}
div[title$="Ale"], 
div[title="Stem Cell Treatment"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(105 30 145)) 
}
 
div[title$="Gin"]:before {
  content: "🥃"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title$="Meal"]:before {
  content: "🥡"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="VitaGel"]:before {
  content: "🧪"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Smart Space Suit"]:before {
  content: "👨‍🚀"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title*="personal"i]:before {
  content: "📱"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Flavoured Insta-Meal"], 
div[title="Personal Data Assistant"], 
div[title="Smart Space Suit"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(57 73 147)) }
div[title$="Gin"], 
div[title="VitaGel"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(105 30 145)) }
 
 
div[title="Smart Zinfandel"]:before {
  content: "🍷"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title$="Meat Meal"]:before {
  content: "🍱"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="NeuroStimulants"]:before {
  content: "💊"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="AI-Assisted Lab Coat"]:before {
  content: "🥼"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title="Scientific Work Station"]:before {
  content: "🔬"; opacity: 0.2;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
div[title$="Meat Meal"], 
div[title="AI-Assisted Lab Coat"], 
div[title="Scientific Work Station"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(57 73 147)) }
div[title="Smart Zinfandel"], 
div[title="NeuroStimulants"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(105 30 145)) }
 
/* 🕹☎📞 */
div[title*="command bridge"i]:before {
  content: "☎"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/* ⛰☢⚙🚰🌡 */
div[title*="engine"i]:before {
  content: "🚀"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title*="nozzle"i]:before {
  content: "⛰"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/* 🧨🌟🧳🛎 */
div[title*="combustion chamber"i]:before {
  content: "🧳"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title*="pump"i]:before,
div[title*="pipe"i]:before,
div[title*="piping"i]:before
{
  content: "🚰"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title*="vent"i]:before {
  content: "♨";
  font-size: 40px; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
/* 🗼🧇🔗⛓🛡📎🖇 */ 
div[title*="structural space"i]:before {
  content: "⛓"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/* 🧊📦 */ 
div[title*="cargo bay"i]:before {
  content: "📦"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title*="habitat"i]:before {
  content: "🏠"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
div[title*="surgery unit"i]:before {
  content: "⚕"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/*🗄🎯🎡*/
div[title*="entertainment unit"i]:before {
  content: "🎡"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/* 🎨 */
div[title*="workshop unit"i]:before {
  content: "🎨"; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}
 
/* sizes */
 
div[title*="small"i]:before,
div[title*="tiny"i]:before,
div[title$=" s"i]:before 
{
  font-size: 20px; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title*="medium"i]:before,
div[title$=" m"i]:before 
{
  font-size: 25px; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
div[title*="transistor"i]:before 
{
  font-size: 25px; opacity: 0.4;
    position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
 
/* buildings - kill stray icons */
div.\_6UivsDhXJylBr\+\+R9f05OQ\=\=:before
{
  content: "";
}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = IconStyle;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getPrices;
/* unused harmony export getCXPrices */
/* harmony export (immutable) */ __webpack_exports__["a"] = getBurn;
/* harmony export (immutable) */ __webpack_exports__["c"] = getGroupBurn;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBurnSettings;
function getPrices(prices, webappID) {
    if (webappID == undefined || webappID == null) {
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
    if (burn == undefined) {
        burn = {};
    }
    if (apikey == undefined || apikey == null || username == undefined || username == null) {
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
    if (burn == undefined) {
        burn = {};
    }
    if (apikey == undefined || apikey == null || groupid == undefined || groupid == null) {
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
    if (apikey == undefined || apikey == null || username == undefined || username == null) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlightETAs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrderETAs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FleetETAs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostLM__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShippingAds__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QueueLoad__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Notifications__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ScreenUnpack__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Sidebar__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommandCorrecter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CalculatorButton__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ContractDrafts__ = __webpack_require__(22);

















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
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["d" /* getPrices */])(prices, result["PMMGExtended"]["webappid"]);
    var burn = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["a" /* getBurn */])(burn, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
    var burnSettings = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["b" /* getBurnSettings */])(burnSettings, result["PMMGExtended"]["username"], result["PMMGExtended"]["apikey"]);
    const runner = new __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__["a" /* LocalMarketAds */](),
        new __WEBPACK_IMPORTED_MODULE_3__OrderETAs__["a" /* OrderETAs */](),
        new __WEBPACK_IMPORTED_MODULE_0__FlightETAs__["a" /* FlightETAs */](),
        new __WEBPACK_IMPORTED_MODULE_7__ShippingAds__["a" /* ShippingAds */](),
        new __WEBPACK_IMPORTED_MODULE_6__PostLM__["a" /* PostLM */](prices),
        new __WEBPACK_IMPORTED_MODULE_16__ContractDrafts__["a" /* ContractDrafts */](prices),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](result["PMMGExtended"]["username"], burn, result["PMMGExtended"]["burn_thresholds"]),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_9__Notifications__["a" /* Notifications */](),
        new __WEBPACK_IMPORTED_MODULE_12__ScreenUnpack__["a" /* ScreenUnpack */](result["PMMGExtended"]["unpack_exceptions"]),
        new __WEBPACK_IMPORTED_MODULE_14__CommandCorrecter__["a" /* CommandCorrecter */](),
        new __WEBPACK_IMPORTED_MODULE_15__CalculatorButton__["a" /* CalculatorButton */](),
        new __WEBPACK_IMPORTED_MODULE_13__Sidebar__["a" /* Sidebar */](result["PMMGExtended"]["sidebar"])
    ], result, burn, burnSettings);
    (function () {
        runner.loop();
    })();
}
function onError(err) {
    console.log(err);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FlightETAs {
    constructor() {
        this.tag = "pb-sfc-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlightETAs;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class LocalMarketAds {
    constructor() {
        this.tag = "pb-lm-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
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
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["s" /* toFixed */])(totalCents / count / 100, 2);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalMarketAds;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__XITHandler__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


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
            if (result["PMMGExtended"]["disabled"] != undefined && result["PMMGExtended"]["disabled"].includes(mp.name)) {
                mp.enabled = false;
            }
        });
    }
    moduleToME(module) {
        return {
            module,
            name: module.constructor.name,
            enabled: true,
            count: 0,
            cleanupTime: 0,
            runTime: 0
        };
    }
    loop() {
        this.xit.run();
        if (!this.result["PMMGExtended"]["loaded_before"]) {
            this.result["PMMGExtended"]["loaded_before"] = Object(__WEBPACK_IMPORTED_MODULE_1__util__["r" /* showBuffer */])("XIT START");
            if (this.result["PMMGExtended"]["loaded_before"]) {
                setSettings(this.result);
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
        window.setTimeout(() => this.loop(), 1000);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleRunner;

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


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XITFunctions__ = __webpack_require__(10);



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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* getBuffers */])("XIT");
        if (buffers == undefined)
            return;
        var burn = this.burn;
        var burnSettings = this.burnSettings;
        buffers.forEach(buffer => {
            var tile = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTile);
            if (tile == null) {
                tile = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTileFloat);
            }
            if (tile == null || tile == undefined) {
                return;
            }
            if (tile.firstChild != undefined && (tile.firstChild.id == "pmmg-load-success" || tile.firstChild.id == "pmmg-no-match")) {
                return;
            }
            const parametersRaw = Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferHeader))[0].textContent;
            if (parametersRaw == undefined || parametersRaw == null)
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
            if (parameters == undefined || parameters == null)
                return;
            if (tile.firstChild != undefined && tile.firstChild.id == "pmmg-reload") {
                __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()](tile.firstChild, parameters, this.result, burn, burnSettings, this.modules);
                return;
            }
            tile.classList.add("xit-tile");
            const refreshButton = document.createElement("div");
            if (!tile.firstChild || (tile.firstChild != undefined && (tile.firstChild.id != "pmmg-no-match"))) {
                refreshButton.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("⟳"));
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
            const preFunc = __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()];
            if (preFunc == undefined) {
                tile.textContent = "Error! No Matching Function!";
                if (!tile.firstChild) {
                    return;
                }
                tile.firstChild.id = "pmmg-no-match";
            }
            else {
                Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["a" /* XITBufferTitles */][parameters[0].toUpperCase()];
                const modules = this.modules;
                var result = this.result;
                refreshButton.addEventListener("click", function () { preFunc(contentDiv, parameters, result, burn, burnSettings, modules); });
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings_pre */
/* unused harmony export Start_pre */
/* unused harmony export Debug_pre */
/* unused harmony export Debug_post */
/* unused harmony export createDownloadButton */
/* unused harmony export Calculator_pre */
/* unused harmony export Repairs_pre */
/* unused harmony export Chat_pre */
/* unused harmony export Fin_pre */
/* unused harmony export EnhancedBurn_pre */
/* unused harmony export SheetTable_pre */
/* unused harmony export Contracts_pre */
/* unused harmony export PRuN_pre */
/* unused harmony export Prosperity_pre */
/* unused harmony export Sheets_pre */
/* unused harmony export Discord_pre */
/* unused harmony export FIOInv_pre */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BackgroundRunner__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Selector__ = __webpack_require__(1);






const XITPreFunctions = {
    "INV": FIOInv_pre,
    "DISCORD": Discord_pre,
    "SHEETS": Sheets_pre,
    "PROSPERITY": Prosperity_pre,
    "PRUN": PRuN_pre,
    "SHEETTABLE": SheetTable_pre,
    "FIN": Fin_pre,
    "CHAT": Chat_pre,
    "BURN": EnhancedBurn_pre,
    "SETTINGS": Settings_pre,
    "CONTRACTS": Contracts_pre,
    "REPAIRS": Repairs_pre,
    "CALCULATOR": Calculator_pre,
    "CALC": Calculator_pre,
    "START": Start_pre,
    "DEBUG": Debug_pre
};
/* harmony export (immutable) */ __webpack_exports__["b"] = XITPreFunctions;

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
    "DEBUG": "DEBUG"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = XITBufferTitles;

const DiscordServers = {
    "UFO": ["855488309802172469", "855489711635431475"],
    "FIOC": ["807992640247300116", "808451512351195166"],
    "AHI": ["704907707634941982", "797157877324185650"],
    "PCT": ["667551433503014924", "667551433503014927"]
};
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
function clearChildren(elem) {
    elem.textContent = "";
    while (elem.children[0]) {
        elem.removeChild(elem.children[0]);
    }
    return;
}
function Settings_pre(tile, parameters, result, fullBurn, burnSettings, modules) {
    clearChildren(tile);
    const warningDiv = document.createElement("div");
    tile.appendChild(warningDiv);
    warningDiv.style.marginTop = "4px";
    warningDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Settings changes require a refresh to take effect."));
    const authenticationHeader = document.createElement('h3');
    authenticationHeader.appendChild(document.createTextNode("Authentication Settings"));
    authenticationHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(authenticationHeader);
    const usernameDiv = document.createElement("div");
    const usernameLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("FIO Username: ");
    const usernameInput = document.createElement("input");
    usernameInput.value = result["PMMGExtended"]["username"] || "";
    usernameInput.addEventListener("input", function () {
        result["PMMGExtended"]["username"] = !usernameInput.value || usernameInput.value == "" ? undefined : usernameInput.value;
        setSettings(result);
    });
    usernameInput.classList.add("input-text");
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);
    tile.appendChild(usernameDiv);
    const apiDiv = document.createElement("div");
    const apiLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("FIO API Key: ");
    apiLabel.style.minWidth = "77px";
    apiLabel.style.display = "inline-block";
    const apiInput = document.createElement("input");
    apiInput.value = result["PMMGExtended"]["apikey"] || "";
    apiInput.addEventListener("input", function () {
        result["PMMGExtended"]["apikey"] = !apiInput.value || apiInput.value == "" ? undefined : apiInput.value;
        setSettings(result);
    });
    apiInput.classList.add("input-text");
    apiInput.type = "password";
    apiDiv.appendChild(apiLabel);
    apiDiv.appendChild(apiInput);
    tile.appendChild(apiDiv);
    const webDiv = document.createElement("div");
    const webLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Web App ID: ");
    webLabel.style.minWidth = "77px";
    webLabel.style.display = "inline-block";
    const webInput = document.createElement("input");
    webInput.value = result["PMMGExtended"]["webappid"] || "";
    webInput.addEventListener("input", function () {
        result["PMMGExtended"]["webappid"] = !webInput.value || webInput.value == "" ? undefined : webInput.value;
        setSettings(result);
    });
    webInput.classList.add("input-text");
    webDiv.appendChild(webLabel);
    webDiv.appendChild(webInput);
    tile.appendChild(webDiv);
    const moduleSettingsHeader = document.createElement('h3');
    moduleSettingsHeader.appendChild(document.createTextNode("Module Settings"));
    moduleSettingsHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(moduleSettingsHeader);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionContent);
    tile.appendChild(content);
    modules.forEach(mp => {
        const line = document.createElement('div');
        line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["g" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].FontsRegular));
        content.appendChild(line);
        line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(mp.name));
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
            setSettings(result);
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
    const enhancedColorHeader = document.createElement('h3');
    enhancedColorHeader.appendChild(document.createTextNode("Color Scheme"));
    enhancedColorHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(enhancedColorHeader);
    const colorDiv = document.createElement("div");
    const colorLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Color Scheme:");
    colorLabel.style.marginBottom = "4px";
    colorDiv.appendChild(colorLabel);
    const colorSelect = document.createElement("select");
    colorSelect.name = "colors-select";
    colorSelect.id = "colors-select";
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createSelectOption */])("Enhanced", "enhanced"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createSelectOption */])("Icons", "icons"));
    colorSelect.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createSelectOption */])("Default", "default"));
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
        setSettings(result);
    });
    colorDiv.appendChild(colorSelect);
    tile.appendChild(colorDiv);
    const burnDiv = document.createElement("div");
    const burnLabel = document.createElement('h3');
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Burn Settings"));
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
    redDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Red Threshold: "));
    const redIn = document.createElement("input");
    redIn.type = "number";
    redIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3])[0].toLocaleString(undefined, { maximumFractionDigits: 0 });
    redDiv.appendChild(redIn);
    redIn.classList.add("input-text");
    redIn.style.width = "50px";
    redIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][0] = parseFloat(redIn.value);
        setSettings(result);
    });
    const yelDiv = document.createElement("div");
    setDiv.appendChild(yelDiv);
    yelDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Yellow Threshold: "));
    const yelIn = document.createElement("input");
    yelIn.type = "number";
    yelIn.value = (result["PMMGExtended"]["burn_thresholds"] || [3, 7])[1].toLocaleString(undefined, { maximumFractionDigits: 0 });
    yelDiv.appendChild(yelIn);
    yelIn.classList.add("input-text");
    yelIn.style.width = "50px";
    yelIn.addEventListener("input", function () {
        result["PMMGExtended"]["burn_thresholds"][1] = parseFloat(yelIn.value);
        setSettings(result);
    });
    tile.appendChild(burnDiv);
    const screenUnpackHeader = document.createElement('h3');
    screenUnpackHeader.appendChild(document.createTextNode("Screen Unpack Exclusions"));
    screenUnpackHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSectionHead);
    tile.appendChild(screenUnpackHeader);
    const notifDiv = document.createElement("div");
    tile.appendChild(notifDiv);
    notifDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("List screen names separated by commas, no spaces."));
    const exclusionInput = document.createElement("input");
    exclusionInput.classList.add("input-text");
    exclusionInput.value = result["PMMGExtended"]["unpack_exceptions"] == undefined ? "" : result["PMMGExtended"]["unpack_exceptions"].join(",");
    exclusionInput.addEventListener("input", function () {
        result["PMMGExtended"]["unpack_exceptions"] = exclusionInput.value.split(",");
        setSettings(result);
    });
    tile.appendChild(exclusionInput);
    const hotkeyHeader = document.createElement('h3');
    hotkeyHeader.appendChild(document.createTextNode("Left Sidebar Buttons"));
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
    const errorTextBox = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Error Loading File!");
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
                console.log(fileOutput);
                const exclude = ["username", "apikey", "webappid"];
                Object.keys(fileOutput).forEach(key => {
                    if (!exclude.includes(key)) {
                        result["PMMGExtended"][key] = fileOutput[key];
                    }
                });
                setSettings(result);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* downloadFile */])(output, "pmmg-settings" + Date.now().toString() + ".json");
    });
    tile.appendChild(importDiv);
    return [parameters, fullBurn, burnSettings];
}
function setSettings(result) {
    try {
        browser.storage.local.set(result);
    }
    catch (err) {
        chrome.storage.local.set(result, function () {
            console.log("PMMG: Configuration Saved.");
        });
    }
    return;
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
        setSettings(result);
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
        setSettings(result);
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
function Start_pre(tile) {
    clearChildren(tile);
    tile.style.fontSize = "12px";
    tile.style.paddingLeft = "2px";
    const welcome = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Thank you for using PMMG Extended!");
    welcome.classList.add("title");
    welcome.style.paddingLeft = "0";
    tile.appendChild(welcome);
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("This is a short tutorial on how to get the most out of the extension."));
    const websiteLinkDiv = document.createElement("div");
    websiteLinkDiv.style.paddingTop = "20px";
    tile.appendChild(websiteLinkDiv);
    websiteLinkDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Details on what PMMG offers can be found here: "));
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
    settingsDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Start by opening a new buffer and entering "));
    const settingsLink = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])("XIT SETTINGS", "XIT SETTINGS");
    settingsLink.style.display = "inline-block";
    settingsDiv.appendChild(settingsLink);
    const fioDiv = document.createElement("div");
    tile.appendChild(fioDiv);
    fioDiv.style.paddingTop = "20px";
    fioDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("FIO is a browser extension that gathers data from your game. PMMG Extended uses that data to display useful information. You can learn more about installing FIO here: "));
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
    fioDiv2.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("If you already have a FIO account, add your username and API Key to the text boxes on XIT SETTINGS. You can generate an API Key "));
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
    webAppDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("If your corporation has a web app (AHI, FOWL, KAWA), enter that in the Web App ID field."));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("You can explore other settings to enable or disable features, change the color scheme, and customize the left sidebar. Contact PiBoy314 in game or on Discord if you have questions."));
    return;
}
function Debug_pre(tile, parameters, result, fullBurn, burnSettings) {
    clearChildren(tile);
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
        XITWebRequest(tile, parameters, Debug_post, url, "GET", ["Authorization", result["PMMGExtended"]["apikey"]], null);
    });
    downloadButtons.appendChild(endpointButton);
    return parameters;
}
function Debug_post(tile, parameters, jsondata) {
    try {
        console.log(JSON.parse(jsondata));
    }
    catch (ex) { }
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* downloadFile */])(jsondata, "fio-endpoint" + Date.now().toString() + ".json", false);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* downloadFile */])(data, fileName);
    });
    return downloadButton;
}
function Calculator_pre(tile) {
    clearChildren(tile);
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
            clearChildren(historyTableBody);
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
                clearChildren(historyTableBody);
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
function Repairs_pre(tile, parameters, result) {
    clearChildren(tile);
    if (!result["PMMGExtended"]["username"]) {
        tile.textContent = "Error! Missing Username";
        return;
    }
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! Missing API Key";
        return;
    }
    XITWebRequest(tile, parameters, Repairs_post, "https://rest.fnar.net/sites/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
    return;
}
function Repairs_post(tile, parameters, jsondata) {
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
    if (parameters.length < 2) {
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("All Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Buildings");
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
            clearChildren(body);
            generateGeneralRepairScreen(body, matDiv, buildings, thresholdInput);
        });
    }
    else {
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(parameters[1] + " Repairs");
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
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Buildings");
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
            clearChildren(body);
            generateRepairScreen(body, matDiv, siteData, thresholdInput);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point));
        }
        return;
    });
    clearChildren(matDiv);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point));
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point));
        }
        return;
    });
    clearChildren(matDiv);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point));
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
function Chat_pre(tile, parameters) {
    clearChildren(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
    }
    XITWebRequest(tile, parameters, Chat_post, "https://rest.fnar.net/chat/display/" + parameters[1], "GET", undefined, undefined);
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
function Fin_pre(tile, parameters, result) {
    clearChildren(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    if (!result["PMMGExtended"]["webappid"]) {
        return;
    }
    const url = "https://script.google.com/macros/s/" + result["PMMGExtended"]["webappid"] + "/exec?mode=%22fin%22&param=%22" + parameters[1] + "%22";
    XITWebRequest(tile, parameters, Fin_post, url, "GET", undefined, undefined);
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
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][2]).toLocaleString(), "Current Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][7]).toLocaleString(), "Equity", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][5]).toLocaleString(), "Liabilities", __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Standard));
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
        tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(profit.toLocaleString(), "Profit", color));
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
        firstTableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(rowData[0]));
        rowData.shift();
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
        }
    }
    tile.appendChild(table);
    return;
}
function financialSort(a, b) {
    return a[3] < b[3] ? 1 : -1;
}
function EnhancedBurn_pre(tile, parameters, result, fullBurn, burnSettings) {
    clearChildren(tile);
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! No API Key!";
        return;
    }
    const apikey = result["PMMGExtended"]["apikey"];
    const username = result["PMMGExtended"]["username"];
    var burn;
    var unloaded = false;
    var planet;
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    else if (parameters.length == 3 && parameters[1].toLowerCase() == "group") {
        if (fullBurn[parameters[2]] != undefined && fullBurn[parameters[2]].length > 0) {
            burn = fullBurn[parameters[2]];
        }
        else {
            unloaded = true;
            if (tile.id != "pmmg-reload") {
                Object(__WEBPACK_IMPORTED_MODULE_3__BackgroundRunner__["c" /* getGroupBurn */])(fullBurn, parameters[2], apikey);
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
        fullBurn[parameters[2]].forEach(planetData => {
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
        const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* findCorrespondingPlanet */])(planet, burn);
        settings = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* findCorrespondingPlanet */])(planet, burnSettings);
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
    const screenNameElem = document.querySelector(__WEBPACK_IMPORTED_MODULE_4__Selector__["a" /* Selector */].ScreenName);
    const screenName = screenNameElem ? screenNameElem.textContent : "";
    if (!result["PMMGExtended"]["burn_display_settings"]) {
        result["PMMGExtended"]["burn_display_settings"] = [];
    }
    var settingsIndex = FindBurnSettings(result["PMMGExtended"]["burn_display_settings"], screenName + parameters[1]);
    const dispSettings = settingsIndex == -1 ? [1, 1, 1, 1] : result["PMMGExtended"]["burn_display_settings"][settingsIndex][1];
    const table = document.createElement("table");
    const settingsDiv = document.createElement("div");
    settingsDiv.style.display = "flex";
    tile.appendChild(settingsDiv);
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
        setSettings(result);
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
        setSettings(result);
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
        setSettings(result);
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
        setSettings(result);
    }));
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
    burnMaterials.sort(CategorySort);
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
        const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(material, "prun-remove-js", "none", false, true);
        if (matElem) {
            materialColumn.appendChild(matElem);
        }
        row.appendChild(materialColumn);
        const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][material][0]);
        nameSpan.style.fontWeight = "bold";
        const nameColumn = document.createElement("td");
        nameColumn.appendChild(nameSpan);
        row.appendChild(nameColumn);
        const consColumn = document.createElement("td");
        consColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(cons[material].toLocaleString(undefined, { maximumFractionDigits: 1 }) + " / Day"));
        row.appendChild(consColumn);
        const invColumn = document.createElement("td");
        const invAmount = inv[material] == undefined ? 0 : inv[material];
        invColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(invAmount.toLocaleString(undefined)));
        row.appendChild(invColumn);
        const burn = invAmount == 0 ? 0 : -invAmount / cons[material];
        const burnColumn = document.createElement("td");
        burnColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(((burn < 500 && cons[material] < 0) ? Math.floor(burn).toLocaleString(undefined, { maximumFractionDigits: 0 }) : "∞") + " Days"));
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
        needColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(needAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })));
        row.appendChild(needColumn);
        row.appendChild(burnColumn);
    }
    UpdateBurn(table, dispSettings);
    tile.appendChild(table);
    return;
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
            row.style.display = dispSettings[3] ? "table-row" : "flex";
            row.style.visibility = dispSettings[3] ? "visible" : "hidden";
            row.style.width = dispSettings[3] ? "auto" : "0px";
            row.style.height = dispSettings[3] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-green")) {
            row.style.display = dispSettings[2] ? "table-row" : "flex";
            row.style.visibility = dispSettings[2] ? "visible" : "hidden";
            row.style.width = dispSettings[2] ? "auto" : "0px";
            row.style.height = dispSettings[2] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-yellow")) {
            row.style.display = dispSettings[1] ? "table-row" : "flex";
            row.style.visibility = dispSettings[1] ? "visible" : "hidden";
            row.style.width = dispSettings[1] ? "auto" : "0px";
            row.style.height = dispSettings[1] ? "auto" : "0px";
        }
        else if (row.children[5].classList.contains("burn-red")) {
            row.style.display = dispSettings[0] ? "table-row" : "flex";
            row.style.visibility = dispSettings[0] ? "visible" : "hidden";
            row.style.width = dispSettings[0] ? "auto" : "0px";
            row.style.height = dispSettings[0] ? "auto" : "0px";
        }
        return;
    });
    return;
}
function CategorySort(a, b) {
    if (__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][a] == undefined || __WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][b] == undefined) {
        return 0;
    }
    return __WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][a][1].localeCompare(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][b][1]);
}
function SheetTable_pre(tile, parameters, result) {
    clearChildren(tile);
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
    XITWebRequest(tile, parameters, SheetTable_post, url, "GET", undefined, undefined);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(point));
        }
    }
    tile.appendChild(table);
    return;
}
function Contracts_pre(tile, parameters, result) {
    clearChildren(tile);
    if (!result["PMMGExtended"]["username"]) {
        tile.textContent = "Error! Missing Username!";
        return;
    }
    if (!result["PMMGExtended"]["apikey"]) {
        tile.textContent = "Error! Missing API Key!";
        return;
    }
    XITWebRequest(tile, parameters, Contracts_post, "https://rest.fnar.net/contract/allcontracts/" + result["PMMGExtended"]["username"], "GET", ["Authorization", result["PMMGExtended"]["apikey"]], undefined);
    return;
}
function Contracts_post(tile, parameters, jsondata) {
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
    const invalidContractStatus = [
        "FULFILLED",
        "BREACHED",
        "TERMINATED",
        "CANCELLED",
        "REJECTED"
    ];
    const validContracts = {
        buying: [],
        selling: [],
        shipping: []
    };
    contractData.map(contract => {
        if (!invalidContractStatus.includes(contract["Status"])) {
            let viewingParty = contract["Party"];
            if (contract["Conditions"].length === 2 || contract["Conditions"].length === 3) {
                let viewingPartyConditionType = contract["Conditions"].map(condition => {
                    if (condition["Party"] === viewingParty)
                        return condition;
                }).filter(x => x !== undefined)[0]["Type"];
                let conditions = [];
                for (let conditionType of [contract["Conditions"].length == 2 ? "DELIVERY" : "PROVISION", "PAYMENT", "COMEX_PURCHASE_PICKUP"]) {
                    contract["Conditions"].forEach(condition => {
                        if (condition["Type"] === conditionType) {
                            conditions.push(condition);
                            return;
                        }
                    });
                }
                contract["Conditions"] = conditions;
                if (viewingPartyConditionType === "PAYMENT") {
                    validContracts["buying"].push(contract);
                }
                else if (viewingPartyConditionType === "DELIVERY" || viewingPartyConditionType === "PROVISION") {
                    validContracts["selling"].push(contract);
                }
            }
            else if (contract["Conditions"].length === 4) {
                let conditions = [];
                for (let conditionType of ["SHIPMENT_PROVISION", "PAYMENT", "SHIPMENT_PICKUP", "SHIPMENT_DELIVERY"]) {
                    contract["Conditions"].forEach(condition => {
                        if (condition["Type"] === conditionType) {
                            conditions.push(condition);
                            return;
                        }
                    });
                }
                contract["Conditions"] = conditions;
                validContracts["shipping"].push(contract);
            }
            return contract;
        }
    }).filter(x => x !== undefined);
    validContracts["buying"].sort(ContractSort);
    validContracts["selling"].sort(ContractSort);
    validContracts["shipping"].sort(ContractSort);
    const buyTable = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createTable */])(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"], "Buying");
    if (validContracts["buying"].length === 0) {
        const line = CreateNoContractsRow(7);
        buyTable.appendChild(line);
    }
    else {
        validContracts["buying"].forEach(contract => {
            const line = CreateContractRow(contract);
            buyTable.appendChild(line);
        });
    }
    const sellTable = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createTable */])(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"], "Selling");
    if (validContracts["selling"].length === 0) {
        const line = CreateNoContractsRow(7);
        sellTable.appendChild(line);
    }
    else {
        validContracts["selling"].forEach(contract => {
            const line = CreateContractRow(contract);
            sellTable.appendChild(line);
        });
    }
    const shipTable = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* createTable */])(tile, ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up", "Deliver"], "Shipping");
    if (validContracts["shipping"].length === 0) {
        const line = CreateNoContractsRow(8);
        shipTable.appendChild(line);
    }
    else {
        validContracts["shipping"].forEach(contract => {
            const conditions = contract["Conditions"];
            const line = document.createElement("tr");
            shipTable.appendChild(line);
            const materialColumn = document.createElement("td");
            materialColumn.style.width = "32px";
            materialColumn.style.paddingLeft = "10px";
            const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["MaterialTicker"] : "SHPT", "prun-remove-js", conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["MaterialAmount"] : "none", false, true);
            if (matElem) {
                materialColumn.appendChild(matElem);
            }
            line.appendChild(materialColumn);
            const nameColumn = document.createElement("td");
            nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]));
            line.appendChild(nameColumn);
            const partnerColumn = document.createElement("td");
            partnerColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]));
            line.appendChild(partnerColumn);
            const pending = (conditions[0]["Party"] === "CUSTOMER" ? conditions[0]["Status"] === "FULFILLED" && conditions[1]["Status"] === "FULFILLED" : conditions[2]["Status"] === "FULFILLED" && conditions[3]["Status"] === "FULFILLED");
            const pendingColumn = document.createElement("td");
            const pendingCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("⬤");
            pendingCheck.style.color = pending ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
            pendingCheck.style.fontWeight = "bold";
            pendingColumn.style.textAlign = "center";
            pendingColumn.appendChild(pendingCheck);
            line.appendChild(pendingColumn);
            const provColumn = document.createElement("td");
            const provCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[0]["Status"] === "FULFILLED" ? "✓" : "X");
            provCheck.style.color = conditions[0]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
            provCheck.style.fontWeight = "bold";
            provColumn.style.textAlign = "center";
            provColumn.appendChild(provCheck);
            line.appendChild(provColumn);
            const payColumn = document.createElement("td");
            const payCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[1]["Status"] === "FULFILLED" ? "✓" : "X");
            payCheck.style.color = conditions[1]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
            payCheck.style.fontWeight = "bold";
            payColumn.style.textAlign = "center";
            payColumn.appendChild(payCheck);
            line.appendChild(payColumn);
            const pickUp = document.createElement("td");
            const pickUpCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[2]["Status"] === "FULFILLED" ? "✓" : "X");
            pickUpCheck.style.color = conditions[2]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
            pickUpCheck.style.fontWeight = "bold";
            pickUp.style.textAlign = "center";
            pickUp.appendChild(pickUpCheck);
            line.appendChild(pickUp);
            const delivColumn = document.createElement("td");
            const delivCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[3]["Status"] === "FULFILLED" ? "✓" : "X");
            delivCheck.style.color = conditions[3]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
            delivCheck.style.fontWeight = "bold";
            delivColumn.style.textAlign = "center";
            delivColumn.appendChild(delivCheck);
            line.appendChild(delivColumn);
        });
    }
    return parameters;
}
const CreateNoContractsRow = (colspan) => {
    var line = document.createElement("tr");
    const textColumn = document.createElement("td");
    textColumn.setAttribute('colspan', `${colspan}`);
    textColumn.textContent = "No contracts";
    line.appendChild(textColumn);
    return line;
};
function CreateContractRow(contract) {
    const conditions = contract["Conditions"];
    var line = document.createElement("tr");
    const materialColumn = document.createElement("td");
    materialColumn.style.width = "32px";
    materialColumn.style.paddingLeft = "10px";
    const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(conditions[0]["MaterialTicker"], "prun-remove-js", conditions[0]["MaterialAmount"], false, true);
    if (matElem) {
        materialColumn.appendChild(matElem);
    }
    line.appendChild(materialColumn);
    const nameColumn = document.createElement("td");
    nameColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(contract["Name"] || contract["ContractLocalId"], "CONT " + contract["ContractLocalId"]));
    line.appendChild(nameColumn);
    const partnerColumn = document.createElement("td");
    partnerColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(contract["PartnerName"], "CO " + contract["PartnerCompanyCode"]));
    line.appendChild(partnerColumn);
    const pendingColumn = document.createElement("td");
    const pendingCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("⬤");
    let viewersCondition = conditions[0]["Party"] === contract["Party"] ? conditions[0] : conditions[1];
    pendingCheck.style.color = viewersCondition["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
    pendingCheck.style.fontWeight = "bold";
    pendingColumn.style.textAlign = "center";
    pendingColumn.appendChild(pendingCheck);
    line.appendChild(pendingColumn);
    const provColumn = document.createElement("td");
    const provCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[0]["Status"] === "FULFILLED" ? "✓" : "X");
    provCheck.style.color = conditions[0]["Status"] === "PENDING" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success;
    provCheck.style.fontWeight = "bold";
    provColumn.style.textAlign = "center";
    provColumn.appendChild(provCheck);
    line.appendChild(provColumn);
    const payColumn = document.createElement("td");
    const payCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions[1]["Status"] === "FULFILLED" ? "✓" : "X");
    payCheck.style.color = conditions[1]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
    payCheck.style.fontWeight = "bold";
    payColumn.style.textAlign = "center";
    payColumn.appendChild(payCheck);
    line.appendChild(payColumn);
    const pickUp = document.createElement("td");
    const pickUpCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(conditions.length == 3 ? (conditions[2]["Status"] === "FULFILLED" ? "✓" : "X") : "");
    pickUpCheck.style.color = conditions[2] == undefined || conditions[2]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["f" /* TextColors */].Failure;
    pickUpCheck.style.fontWeight = "bold";
    pickUp.style.textAlign = "center";
    pickUp.appendChild(pickUpCheck);
    line.appendChild(pickUp);
    return line;
}
;
function ContractSort(a, b) {
    return a["DueDateEpochMs"] > b["DueDateEpochMs"] ? 1 : -1;
}
function PRuN_pre(tile) {
    clearChildren(tile);
    const prun = document.createElement("iframe");
    prun.src = "https://apex.prosperousuniverse.com/#/";
    prun.width = "100%";
    prun.height = "100%";
    prun.style.borderWidth = "0";
    tile.appendChild(prun);
    return;
}
function Prosperity_pre(tile, parameters) {
    clearChildren(tile);
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
function Sheets_pre(tile, parameters) {
    clearChildren(tile);
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
    clearChildren(tile);
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
function FIOInv_pre(tile, parameters, result) {
    clearChildren(tile);
    const apikey = result["PMMGExtended"]["apikey"];
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    if (parameters.length == 2) {
        parameters.push(apikey);
        XITWebRequest(tile, parameters, FIOInv_getAllStorages, "https://rest.fnar.net/auth/group/" + parameters[1], "GET", ["Authorization", apikey], undefined);
    }
    else {
        for (var i = 3; i < parameters.length; i++) {
            parameters[2] += " " + parameters[i];
        }
        XITWebRequest(tile, parameters, FIOInv_post, "https://rest.fnar.net/storage/" + parameters[1] + "/" + parameters[2], "GET", ["Authorization", apikey], undefined);
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
    header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(parameters[2], tag));
    header.appendChild(document.createElement("br"));
    const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(parameters[1], tag);
    userElem.style.paddingLeft = "8px";
    header.appendChild(userElem);
    const volumeLine = document.createElement("div");
    volumeLine.id = "volume-line";
    volumeLine.style.padding = "2px 8px";
    volumeLine.style.color = "#999999";
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Volume ", tag));
    const volumeBar = document.createElement("progress");
    volumeBar.id = "volume-bar";
    volumeBar.classList.add(tag);
    volumeBar.classList.add("progress-bar");
    volumeBar.max = 1;
    volumeBar.value = volumeUsed / volumeTotal;
    volumeLine.appendChild(volumeBar);
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(volumeUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + volumeTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " m³", tag));
    header.appendChild(volumeLine);
    const weightLine = document.createElement("div");
    weightLine.id = "weight-line";
    weightLine.style.padding = "2px 8px";
    weightLine.style.color = "#999999";
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("Weight ", tag));
    const weightBar = document.createElement("progress");
    weightBar.id = "weight-bar";
    weightBar.classList.add(tag);
    weightBar.classList.add("progress-bar");
    weightBar.max = 1;
    weightBar.value = weightUsed / weightTotal;
    weightLine.appendChild(weightBar);
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(weightUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + weightTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " t", tag));
    header.appendChild(weightLine);
    inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
    for (let item of inventoryData["StorageItems"]) {
        const mat = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true);
        if (mat != null) {
            mat.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* showBuffer */])("MAT " + item["MaterialTicker"]); });
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
    XITWebRequest(tile, parameters, FIOInv_allDisplay, "https://rest.fnar.net/fioweb/grouphub", "POST", ["Authorization", parameters[2]], JSON.stringify(usernames));
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
    titleDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(parameters[3] + " Inventories"));
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
        playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(player["UserName"]));
        playerDiv.firstChild.style.fontWeight = "bold";
        player["Locations"].forEach(location => {
            playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"].replace(/ /, "_")));
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
    if (a["MaterialCategory"] == null || b["MaterialCategory"] == null) {
        return 0;
    }
    return a["MaterialCategory"].localeCompare(b["MaterialCategory"]);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class OrderETAs {
    constructor() {
        this.tag = "pb-order-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
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
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* parseDuration */])(prodItem.children[0].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration + timeElapsed)) {
                                prodItem.children[0].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* convertDurationToETA */])(duration + timeElapsed)})`, this.tag));
                            }
                        }
                        else {
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* parseDuration */])(prodItem.children[1].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            if (!isNaN(duration)) {
                                prodItem.children[1].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* convertDurationToETA */])(duration)})`, this.tag));
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
/* 12 */
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
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* getBuffers */])("WF");
        if (buffers == undefined || buffers == null) {
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
    const nameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].WorkforceConsumptionTable);
    if (nameElem == null || nameElem == undefined || nameElem.textContent == null || nameElem.textContent == undefined)
        return;
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["p" /* parseBaseName */])(nameElem.textContent);
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
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* findCorrespondingPlanet */])(name, burn);
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
            var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* findInventoryAmount */])(targetRow.children[0].textContent, planetBurn);
            var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* findBurnAmount */])(targetRow.children[0].textContent, planetBurn);
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
            outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(daysLeft));
            firstChild = totalData.firstChild;
            if (firstChild != null) {
                totalData.removeChild(firstChild);
            }
            totalData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
        }
    });
    return;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FleetETAs {
    constructor() {
        this.tag = "pb-flt-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FleetETAs;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["n" /* genericCleanup */])(this.tag);
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
            var displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* createTextSpan */])("--", this.tag);
            if (shipping && commodity.value != "") {
                totalPriceInput.parentNode.insertBefore(displayElement, totalPriceInput);
                const calculatePricePerUnit = () => {
                    const amount = parseInt(amountInput.value);
                    const total = parseFloat(totalPriceInput.value);
                    const matInfo = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][commodity.value];
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
            else if (commodity.value != undefined && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][commodity.value] != undefined) {
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ShippingAds {
    constructor() {
        this.tag = "pb-shipping-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
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
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["s" /* toFixed */])(totalCents / count / 100, 2);
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
            }
        }
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShippingAds;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class QueueLoad {
    constructor() {
        this.tag = "pb-queue-load";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["q" /* parseDuration */])(etaSpan.textContent);
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
                    const percent = Object(__WEBPACK_IMPORTED_MODULE_1__util__["s" /* toFixed */])(eta / totalTime * 100, 2);
                    const textField = row.querySelectorAll("td").item(6);
                    if (textField && eta > 0) {
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["i" /* createTextSpan */])(` ${percent}%`, this.tag);
                        textField.appendChild(span);
                    }
                });
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QueueLoad;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);



class Notifications {
    constructor() {
        this.tag = "pb-nots";
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
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
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]][0]);
                            }
                            foundType = true;
                            break;
                        case "trade":
                            matches = notText.match(/your ([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]][0]);
                            }
                            foundType = true;
                        case "order filled":
                            notText = notText.replace(/ Commodity Exchange/, "");
                            matches = notText.match(/([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]][0]);
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
    ["planetary project", "infra", "#8f52cc"]
];


/***/ }),
/* 18 */
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
        full && Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* genericCleanup */])(this.tag);
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
            const buttonElem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* createNode */])(button);
            buttonElem.classList.add(this.tag);
            navbar.appendChild(buttonElem);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenUnpack;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class Sidebar {
    constructor(buttons) {
        this.tag = "pb-sidebar";
        this.defaultButtons = ["BS", "CONT", "COM", "CORP", "CXL", "FIN", "FLT", "INV", "MAP", "PROD", "CMDS"];
        this.buttons = buttons;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["n" /* genericCleanup */])(this.tag);
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
        this.buttons.forEach(buttonInfo => {
            if (this.defaultButtons.includes(buttonInfo[0].toUpperCase())) {
                return;
            }
            const button = document.createElement("div");
            const buttonText = Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* createTextSpan */])(buttonInfo[0].toUpperCase(), this.tag);
            const sliver = document.createElement("div");
            button.classList.add(this.tag);
            sliver.classList.add(this.tag);
            button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarButton);
            buttonText.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarText);
            sliver.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["e" /* Style */].SidebarSliver);
            button.appendChild(buttonText);
            button.appendChild(sliver);
            sidebar.appendChild(button);
            button.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_2__util__["r" /* showBuffer */])(buttonInfo[1]); });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sidebar;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);



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
                if (__WEBPACK_IMPORTED_MODULE_2__GameProperties__["d" /* PlanetCommands */].includes(bufferText.split(" ")[0])) {
                    var replaced = false;
                    Object.keys(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* PlanetNames */]).forEach(name => {
                        if (bufferText.includes(" " + name)) {
                            bufferText = bufferText.replace(" " + name, " " + __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* PlanetNames */][name]);
                            replaced = true;
                        }
                    });
                    if (replaced) {
                        bufferField.value = "";
                        Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* changeValue */])(bufferField, bufferText);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class CalculatorButton {
    constructor() {
        this.tag = "pb-calc";
    }
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* genericCleanup */])(this.tag);
    }
    run() {
        const calcTags = ["LM", "CX", "XIT"];
        calcTags.forEach(tag => {
            const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* getBuffers */])(tag);
            buffers.forEach(buffer => {
                if ((buffer.children[3] || buffer.children[2]).firstChild.classList.contains(this.tag) || (buffer.children[3] || buffer.children[2]).children[1].classList.contains(this.tag)) {
                    return;
                }
                const calcDiv = document.createElement("div");
                calcDiv.classList.add(this.tag);
                calcDiv.classList.add("button-upper-right");
                (buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild.id == "refresh" ? (buffer.children[3] || buffer.children[2]).children[1] : (buffer.children[3] || buffer.children[2]).firstChild);
                calcDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* createTextSpan */])("🖩", this.tag));
                calcDiv.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["r" /* showBuffer */])("XIT CALCULATOR"); });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatorButton;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class ContractDrafts {
    constructor(prices) {
        this.tag = "pb-contd";
        this.prices = prices;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["n" /* genericCleanup */])(this.tag);
    }
    run() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["o" /* getBuffers */])("CONTD").forEach(buffer => {
            const form = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ContDForm);
            const condition = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ConditionEditor);
            if (condition == null) {
                return;
            }
            if (form == null) {
                return;
            }
            const tbody = form.firstChild.children[1];
            var amount = -1;
            var price = -1;
            if (tbody.children.length == 2) {
                amount = parseInt(((tbody.children[1].children[1].textContent || "").match(/(?<=Delivery of )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
                const material = ((tbody.children[1].children[1].textContent || "").match(/(?<=units of )(.*)(?= to )/) || (tbody.children[1].children[1].textContent || "").match(/(?<=unit of )(.*)(?= to )/) || [""])[0];
                if (this.prices[material]) {
                    price = amount * this.prices[material];
                }
            }
            else if (tbody.children.length == 3) {
                amount = parseInt(((tbody.children[0].children[1].textContent || "").match(/(?<=Provision )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
                const material = ((tbody.children[0].children[1].textContent || "").match(/(?<=units of )(.*)(?= \@ )/) || (tbody.children[0].children[1].textContent || "").match(/(?<=unit of )(.*)(?= \@ )/) || [""])[0];
                if (this.prices[material]) {
                    price = amount * this.prices[material];
                }
            }
            else if (tbody.children.length == 4) {
                amount = parseInt(((tbody.children[0].children[1].textContent || "").match(/(?<=Provision shipment of )(.*)(?= unit)/) || [""])[0].replace(/[,.]/g, ''));
                const material = ((tbody.children[0].children[1].textContent || "").match(/(?<=units of )(.*)(?= \@ )/) || (tbody.children[0].children[1].textContent || "").match(/(?<=unit of )(.*)(?= \@ )/) || [""])[0];
                if (condition.children[1] == null || condition.children[1].children[1] == null || condition.children[1].children[1].firstChild == null || !__WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material]) {
                    return;
                }
                if ((((condition.children[1] || condition).children[1] || condition).firstChild || condition).textContent === "Currency") {
                    const inputPriceDiv = condition.querySelector("div[class~='xuy2wpBCdzgc8G3w3AlXTw==']");
                    if (inputPriceDiv == null || inputPriceDiv.firstChild == null) {
                        return;
                    }
                    const inputPrice = parseFloat(inputPriceDiv.firstChild.firstChild.value);
                    const weightVol = amount * (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][1] > __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][2] ? __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][1] : __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][2]);
                    const pricePer = inputPrice / weightVol;
                    const display = pricePer.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][1] > __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* Materials */][material][2] ? "t" : "m³");
                    inputPriceDiv.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* createTextSpan */])(display, this.tag), inputPriceDiv.firstChild);
                }
                return;
            }
            if (condition.children[1] == null || condition.children[1].children[1] == null || condition.children[1].children[1].firstChild == null) {
                return;
            }
            if ((((condition.children[1] || condition).children[1] || condition).firstChild || condition).textContent === "Currency") {
                const inputPriceDiv = condition.querySelector("div[class~='xuy2wpBCdzgc8G3w3AlXTw==']");
                if (inputPriceDiv == null || inputPriceDiv.firstChild == null) {
                    return;
                }
                const inputPrice = parseFloat(inputPriceDiv.firstChild.firstChild.value);
                const pricePer = inputPrice / amount;
                const display = pricePer.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " ea" + (price == -1 ? "" : " | " + price.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " Total Corp");
                inputPriceDiv.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* createTextSpan */])(display, this.tag), inputPriceDiv.firstChild);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContractDrafts;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWVhNzZlNzg1YTZkZGY2NmMwMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7Ozs7Ozs7O0FDbkNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSyx5SUFBeUk7QUFBQTtBQUFBO0FBQ3pJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBOzs7Ozs7OztBQ2x4Qks7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBO0FBQ0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNEJBQTRCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNEJBQTRCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNEJBQTRCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsNEJBQTRCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLDRCQUE0QjtBQUM1RztBQUNBO0FBQ0E7QUFDQTtB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RTtBQUMvRixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUFzQztBQUNPO0FBQ3VCO0FBQzdEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBLFFBQVEsaUVBQVU7QUFDbEIsOENBQThDLDJEQUFRO0FBQ3RELG1EQUFtRCwyREFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkpBQTJKLGtFQUFTO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsa0VBQVMsZ0JBQWdCLGtFQUFTLGdCQUFnQixrRUFBUyxnQkFBZ0Isa0VBQVM7QUFDcEk7QUFDQSx3RUFBd0UscURBQXFELGFBQWEsa0VBQVMsZ0JBQWdCLGtFQUFTO0FBQzVLLCtDQUErQyxxRUFBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxxREFBcUQseUVBQXlFLHFEQUFxRDtBQUN2UCwyQ0FBMkMscUVBQWM7QUFDekQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWVhNzZlNzg1YTZkZGY2NmMwMjEiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMsIFBsYW5ldE5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgU3R5bGUsIENhdGVnb3J5Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShmaWxlRGF0YSwgZmlsZU5hbWUsIGlzSlNPTiA9IHRydWUpIHtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaXNKU09OID8gSlNPTi5zdHJpbmdpZnkoZmlsZURhdGEpIDogZmlsZURhdGFdLCB7IHR5cGU6IFwidGV4dC9wbGFpblwiIH0pO1xyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgIGNvbnN0IHVybEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHVybEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xyXG4gICAgdXJsRWxlbWVudC5ocmVmID0gdXJsO1xyXG4gICAgdXJsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICB1cmxFbGVtZW50LmNsaWNrKCk7XHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cmluZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24ob3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25MYWJlbDtcclxuICAgIHJldHVybiBvcHRpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1aWNrUm93QnV0dG9uKHNob3J0VGV4dEJvbGQsIHNob3J0VGV4dE5vcm1hbCwgbG9uZ1RleHQsIGNvbW1hbmQpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJNQXBjc1lFZDcrd3FJSlRmYkhQMXlBPT0gZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09IGtXVEgxLUhrWUNXZVl5RFJnWjdvelE9PVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuIGNsYXNzPVwiRCtHSmhJR21DMmVGazU5ZHZyWStTZz09XCI+e3s6c2hvcnRCb2xkfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7OnNob3J0Tm9ybWFsfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJjS3F6RURleUtiemI5blByeTBEa2Z3PT1cIj46IHt7OmxvbmdUZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZShcInt7OnNob3J0Qm9sZH19XCIsIHNob3J0VGV4dEJvbGQpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJ7ezpzaG9ydE5vcm1hbH19XCIsIHNob3J0VGV4dE5vcm1hbClcclxuICAgICAgICAucmVwbGFjZShcInt7OmxvbmdUZXh0fX1cIiwgbG9uZ1RleHQpO1xyXG4gICAgbGV0IG5vZGUgPSBjcmVhdGVOb2RlKHJlc3VsdCk7XHJcbiAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiB7IHNob3dCdWZmZXIoY29tbWFuZCk7IH07XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VkU2Vjb25kcykge1xyXG4gICAgY29uc3QgZXRhID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBldGEuc2V0U2Vjb25kcyhldGEuZ2V0U2Vjb25kcygpICsgcGFyc2VkU2Vjb25kcyk7XHJcbiAgICBjb25zdCBkaWZmVGltZSA9IE1hdGguYWJzKGV0YS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKTtcclxuICAgIGNvbnN0IGRpZmZEYXlzID0gTWF0aC5mbG9vcihkaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBsZXQgcmV0ID0gZXRhLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xyXG4gICAgaWYgKGRpZmZEYXlzID4gMCkge1xyXG4gICAgICAgIHJldCArPSBgICske2RpZmZEYXlzfWRgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xyXG4gICAgY29uc3QgZGF5cyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqZC8pO1xyXG4gICAgY29uc3QgaG91cnMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmgvKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKm0vKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKnMvKTtcclxuICAgIGxldCBwYXJzZWRTZWNvbmRzID0gMDtcclxuICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChkYXlzWzFdKSAqIDg2NDAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGhvdXJzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChob3Vyc1sxXSkgKiAzNjAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbnV0ZXMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KG1pbnV0ZXNbMV0pICogNjA7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kcykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoc2Vjb25kc1sxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkU2Vjb25kcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFNwYW4odGV4dCwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIG5ld1NwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gocHJpbWFyeVRleHQsIHNlY29uZGFyeVRleHQsIHByaW1hcnlUZXh0Q29sb3IsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJveC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImZpbi1ib3hcIik7XHJcbiAgICBjb25zdCBwcmltYXJ5VGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xyXG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMVwiO1xyXG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmNvbG9yID0gcHJpbWFyeVRleHRDb2xvcjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi50ZXh0Q29udGVudCA9IHByaW1hcnlUZXh0O1xyXG4gICAgYm94LmFwcGVuZENoaWxkKHByaW1hcnlUZXh0U3Bhbik7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY29uZGFyeVRleHREaXYudGV4dENvbnRlbnQgPSBzZWNvbmRhcnlUZXh0O1xyXG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xyXG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubWFyZ2luVG9wID0gXCIycHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuY29sb3IgPSBcIiM5OTlcIjtcclxuICAgIGJveC5hcHBlbmRDaGlsZChzZWNvbmRhcnlUZXh0RGl2KTtcclxuICAgIHJldHVybiBib3g7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnZlbnRvcnlBbW91bnQodGlja2VyLCBpbnZlbnRvcnkpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52ZW50b3J5W1wiSW52ZW50b3J5XCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiSW52ZW50b3J5XCJdW2ldW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCdXJuQW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGludmVudG9yeVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdW2ldW1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gdGlja2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGRhdGEpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXSAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdLnRvTG93ZXJDYXNlKCkgPT0gcGxhbmV0LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmFtZVwiXSAmJiBkYXRhW2ldW1wiUGxhbmV0TmFtZVwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXSAmJiBQbGFuZXROYW1lc1twbGFuZXRdICYmIFBsYW5ldE5hbWVzW3BsYW5ldF0udG9Mb3dlckNhc2UoKSA9PSBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCYXNlTmFtZSh0ZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiQFwiKVsxXTtcclxuICAgICAgICB0ZXh0ID0gdGV4dC5zcGxpdChcIiBCYXNlXCIpWzBdO1xyXG4gICAgICAgIHZhciBoeXBoZW5zID0gdGV4dC5zcGxpdChcIiAtIFwiKTtcclxuICAgICAgICB0ZXh0ID0gaHlwaGVuc1toeXBoZW5zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHZhciBlbmRpbmcgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZiAoZW5kaW5nWzFdICE9IHVuZGVmaW5lZCAmJiBlbmRpbmdbMl0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5kaW5nWzFdICsgZW5kaW5nWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFR5cGVFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIsIGFtb3VudCA9IFwibm9uZVwiLCB0ZXh0ID0gZmFsc2UsIHNtYWxsID0gZmFsc2UpIHtcclxuICAgIGlmIChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gPT0gdW5kZWZpbmVkICYmIHRpY2tlciAhPSBcIlNIUFRcIikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW1wiU2hpcG1lbnRcIl0pWzBdO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFt1bmRlZmluZWQsIFwic2hpcG1lbnRcIl0pWzFdO1xyXG4gICAgY29uc3QgdG90YWxQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvdGFsUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiVDVDNDVwVE9XOVFUem9rV1BxTFFKZz09XCIpO1xyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgdG90YWxQaWN0dXJlLnN0eWxlLmhlaWdodCA9IFwiMzJweFwiO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG90YWxQaWN0dXJlLnN0eWxlLmhlaWdodCA9IFwiNDhweFwiO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWwuY2xhc3NMaXN0LmFkZChcIkU3T0xVQ2hZQ2V4TVVnT29sS1lqT1E9PVwiKTtcclxuICAgIG1hdGVyaWFsLnRpdGxlID0gbmFtZTtcclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmhlaWdodCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUuZm9udFNpemUgPSBcIjEwLjU2cHhcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmhlaWdodCA9IFwiNDhweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLndpZHRoID0gXCI0OHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUuZm9udFNpemUgPSBcIjE1Ljg0cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5tYXJnaW4gPSBcIjJweCBhdXRvXCI7XHJcbiAgICB9XHJcbiAgICBtYXRlcmlhbC5zdHlsZS5iYWNrZ3JvdW5kID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzBdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMV07XHJcbiAgICBtYXRlcmlhbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIHRvdGFsUGljdHVyZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJubFFpcnBTa2RMSDBhNitDNGxoZHVBPT1cIik7XHJcbiAgICBjb25zdCBtYXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtYXRUZXh0LmNsYXNzTGlzdC5hZGQoXCJyanBZTDFpOWNabWY0N2ZNOXFXeVpRPT1cIik7XHJcbiAgICBtYXRUZXh0LnRleHRDb250ZW50ID0gdGlja2VyO1xyXG4gICAgc3ViRGl2LmFwcGVuZENoaWxkKG1hdFRleHQpO1xyXG4gICAgbWF0ZXJpYWwuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcclxuICAgIHRvdGFsUGljdHVyZS5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XHJcbiAgICBpZiAoYW1vdW50ICE9IFwibm9uZVwiKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBudW1iZXJEaXYuY2xhc3NMaXN0LmFkZChcIkczN2ZVSlB3TW9KNmZLSERHZWcrLXc9PVwiKTtcclxuICAgICAgICBjb25zdCBudW1iZXJTdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi5jbGFzc0xpc3QuYWRkKFwiYkhqbERQQjg0VXoweVVudkhhLVk1QT09XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi5jbGFzc0xpc3QuYWRkKFwiXzZPSzZzWE5qSUlocTNOREQ5RUxWR3c9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcImdsNzN2bnA1am8rVmFlcERSb2N1bkE9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYudGV4dENvbnRlbnQgPSBhbW91bnQ7XHJcbiAgICAgICAgbnVtYmVyRGl2LmFwcGVuZENoaWxkKG51bWJlclN1YkRpdik7XHJcbiAgICAgICAgdG90YWxQaWN0dXJlLmFwcGVuZENoaWxkKG51bWJlckRpdik7XHJcbiAgICB9XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICByZXR1cm4gdG90YWxQaWN0dXJlO1xyXG4gICAgfVxyXG4gICAgdmFyIHN1cGVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdXBlckVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgc3VwZXJFbGVtLmFwcGVuZENoaWxkKHRvdGFsUGljdHVyZSk7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS53aWR0aCA9IFwiNjRweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLm1hcmdpbiA9IFwiM3B4XCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUucGFkZGluZyA9IFwiYXV0b1wiO1xyXG4gICAgaWYgKHRleHQgIT0gZmFsc2UpIHtcclxuICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICBsYWJlbC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgICAgICBsYWJlbC5zdHlsZS5wYWRkaW5nVG9wID0gXCIycHhcIjtcclxuICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXJFbGVtO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaW5rKHRleHQsIGNvbW1hbmQpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBzaG93QnVmZmVyKGNvbW1hbmQpOyB9KTtcclxuICAgIGNvbnN0IGxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIGxpbmtEaXYuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gbGlua0RpdjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0J1ZmZlcihjb21tYW5kKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5OZXdCRlJCdXR0b24pO1xyXG4gICAgaWYgKGJ1dHRvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlVmFsdWUoaW5wdXQsIGNtZCk7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcXVlc3RTdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQsIChlbGVtKSA9PiBhZGRTdWJtaXRDb21tYW5kKGVsZW0sIGNvbW1hbmQpKTtcclxuICAgIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGlucHV0LCB2YWx1ZSkge1xyXG4gICAgdmFyIHByb3BEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3dbXCJIVE1MSW5wdXRFbGVtZW50XCJdLnByb3RvdHlwZSwgXCJ2YWx1ZVwiKTtcclxuICAgIGlmIChwcm9wRGVzY3JpcHRvciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbmF0aXZlSW5wdXRWYWx1ZVNldHRlciA9IHByb3BEZXNjcmlwdG9yLnNldDtcclxuICAgIGlmIChuYXRpdmVJbnB1dFZhbHVlU2V0dGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIuY2FsbChpbnB1dCwgdmFsdWUpO1xyXG4gICAgdmFyIGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dEV2ZW50LmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIG1vbml0b3JPbkVsZW1lbnRDcmVhdGVkKHNlbGVjdG9yLCBjYWxsYmFjaywgb25seU9uY2UgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBnZXRFbGVtZW50c0Zyb21Ob2RlcyA9IChub2RlcykgPT4gKEFycmF5LmZyb20obm9kZXMpKS5mbGF0TWFwKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG51bGwgOiBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIGxldCBvbk11dGF0aW9uc09ic2VydmVkID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEVsZW1lbnRzRnJvbU5vZGVzKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmx5T25jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGNvbnRhaW5lclNlbGVjdG9yID0gJ2JvZHknO1xyXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XHJcbiAgICBsZXQgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gfHwgd2luZG93W1wiV2ViS2l0TXV0YXRpb25PYnNlcnZlclwiXTtcclxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRpb25zT2JzZXJ2ZWQpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNDbGVhbnVwKGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24gPSAyKSB7XHJcbiAgICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24gfHwgMCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHBvd2VyKSAvIHBvd2VyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWZmZXJzKGJ1ZmZlckNvZGUpIHtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgoLiwgJyR7YnVmZmVyQ29kZX0nKV0vLi4vLi5gLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcclxuICAgIHZhciBub2RlO1xyXG4gICAgd2hpbGUgKG5vZGUgPSBub2Rlcy5pdGVyYXRlTmV4dCgpKSB7XHJcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlYUGF0aCh4cGF0aCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoeHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcclxuICAgIHZhciBzb3J0ZXIgPSBbXTtcclxuICAgIGlmICh0YWJsZS5jaGlsZHJlblsxXSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSByb3dzW2ldLmNoaWxkcmVuW2NvbHVtbl07XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc29ydGVyLnB1c2goW2l0ZW0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCwgcm93c1tpXV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRUeXBlID09IFwiYWxwaFwiKSB7XHJcbiAgICAgICAgc29ydGVyLnNvcnQodGFibGVTb3J0QWxwaCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZXIpO1xyXG4gICAgc29ydGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGFibGUuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKHRhYmxlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLCBpdGVtWzFdKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHRhYmxlU29ydEFscGgoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGUodGlsZSwgaGVhZGVycywgc2VjdGlvbkhlYWRlclRpdGxlID0gXCJcIikge1xyXG4gICAgaWYgKHNlY3Rpb25IZWFkZXJUaXRsZSAhPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgc2VjdGlvbkhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZWN0aW9uSGVhZGVyVGl0bGUpKTtcclxuICAgICAgICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcclxuICAgIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIHRoZWFkLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICAgIHJldHVybiB0Ym9keTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlsLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTZWxlY3RvciA9IHtcclxuICAgIExNQ29tbW9kaXR5QWRUZXh0OiBcImRpdltjbGFzc349J1N4TW9uYWljUHJyUzRKWVR2ZSstUkE9PSddXCIsXHJcbiAgICBMTUNvbW1vZGl0eUFkUHJpY2VTcGFuOiBcImRpdltjbGFzc349J1pTY0c5QWpjVFJnSitNUU9YTHVDV0E9PSddID4gc3BhblwiLFxyXG4gICAgUHJvZEl0ZW06IFwiSkt0VDRycklDMEdrUEVBblpsWWNTZz09XCIsXHJcbiAgICBQcm9kUXVldWVUYWJsZTogXCJ0YWJsZVtjbGFzc349J18xUUFocERVaGQrN0hXSnhwSHRvV0pRPT0nXVwiLFxyXG4gICAgUHJvZFF1ZXVlSGVhZGVyOiBcImxnRTErKzczKzZvWXhWU2FPdGlrLWc9PVwiLFxyXG4gICAgQnVmZmVySGVhZGVyOiAnZTJQS1JLWlVXNks5eExLTkFQNTZjZz09IFl0dTZmbzZqTGJrNDNZcU8weVdrUUE9PScsXHJcbiAgICBTaWRlYmFyOiBcImRpdiNUT1VSX1RBUkdFVF9TSURFQkFSX1JJR0hUXCIsXHJcbiAgICBMTVBvc3RGb3JtOiBcImFydGljbGVbY2xhc3N+PSd6dyswelFCWnZhbGE3eUdwK0FkM0R3PT0nXSA+IGRpdiA+IGRpdiA+IGZvcm1cIixcclxuICAgIFdvcmtmb3JjZUNvbnN1bXB0aW9uVGFibGU6IFwiI3VuZGVmaW5lZCA+IGRpdiA+IGRpdi5OMzJHTDhDSkJPdzMtck54MFBCWmtRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYuXzRLc2kwOVZYaGZ2a0dndFBiaENFeWdcXFxcPVxcXFw9LlJVdXcxMWI2MzFlWHJRWXAtSWQyd2dcXFxcPVxcXFw9XCIsXHJcbiAgICBYSVRUaWxlOiBcIiN1bmRlZmluZWQgPiBkaXYgPiBkaXYuekpySXpFdldNN0s2b1AwanJSUnBiUVxcXFw9XFxcXD0uZlRUNTJpXFxcXCsxb0ZhdXhIT2pWZkdUd3dcXFxcPVxcXFw9Lk83Ulg0elhMNGd6SExvT3dUVmJyWHdcXFxcPVxcXFw9ID4gZGl2ID4gZGl2ID4gZGl2LmdlY0k1dUdCbHV2alA1R0NSazNkSEFcXFxcPVxcXFw9ID4gZGl2XCIsXHJcbiAgICBYSVRUaWxlRmxvYXQ6IFwiI1RPVVJfVEFSR0VUX0VNUFRZX1RJTEUgPiBkaXYgPiBkaXYuekpySXpFdldNN0s2b1AwanJSUnBiUVxcXFw9XFxcXD0uZlRUNTJpXFxcXCsxb0ZhdXhIT2pWZkdUd3dcXFxcPVxcXFw9Lk83Ulg0elhMNGd6SExvT3dUVmJyWHdcXFxcPVxcXFw9ID4gZGl2ID4gZGl2ID4gZGl2LmdlY0k1dUdCbHV2alA1R0NSazNkSEFcXFxcPVxcXFw9ID4gZGl2XCIsXHJcbiAgICBCdWZmZXJUaXRsZTogXCJfNEtzaTA5VlhoZnZrR2d0UGJoQ0V5Zz09IFJVdXcxMWI2MzFlWHJRWXAtSWQyd2c9PVwiLFxyXG4gICAgTm90aWZpY2F0aW9uOiBcImRpdltjbGFzc349J182aVRNSloreG0tUGJHK25Xb1BxaDdnPT0nXVwiLFxyXG4gICAgUHJvZFF1ZXVlOiBcImRpdltjbGFzc349J28xWWNZckRreHQ5SXZONEFwQ0VqSXc9PSddXCIsXHJcbiAgICBQcm9kV2luZG93OiBcImRpdltjbGFzc349J0l3MXpNdGNyQjdORkN4QUc0eFR6OGc9PSddXCIsXHJcbiAgICBQcm9kUGFuZWw6IFwiZGl2W2NsYXNzfj0nZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQT09J11cIixcclxuICAgIE5ld0JGUkJ1dHRvbjogXCJUT1VSX1RBUkdFVF9CVVRUT05fQlVGRkVSX05FV1wiLFxyXG4gICAgV2hvbGVXaW5kb3c6IFwiI2NvbnRhaW5lclwiLFxyXG4gICAgQnVmZmVyVGV4dEZpZWxkOiBcIi5Vb09vaDlFR3g3WWloZXprU0dlVjJRXFxcXD1cXFxcPVwiLFxyXG4gICAgQnVmZmVyTGlzdDogXCIjY29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgzKVwiLFxyXG4gICAgU2NyZWVuQ29udHJvbHM6IFwiVE9VUl9UQVJHRVRfU0NSRUVOX0NPTlRST0xTXCIsXHJcbiAgICBUcmFuc2ZlckFyZWE6IFwiZGl2W2NsYXNzfj0nQjRjY0NIaEVoN1cweGQtWVlnM3FUZz09J11cIixcclxuICAgIFRyYW5zZmVyRmllbGQ6IFwiZGl2W2NsYXNzfj0neHV5MndwQkNkemdjOEczdzNBbFhUdz09J11cIixcclxuICAgIExlZnRTaWRlYmFyOiBcIlRPVVJfVEFSR0VUX1NJREVCQVJfTEVGVF8wMlwiLFxyXG4gICAgQnVmZmVyQXJlYTogXCJkaXZbY2xhc3N+PSdaYXBoVlYrZnlhSWlMQ0p5QkNzWkNBPT0nXVwiLFxyXG4gICAgQ1hPU1RhYmxlOiBcImRpdltjbGFzc349J2dlY0k1dUdCbHV2alA1R0NSazNkSEE9PSddXCIsXHJcbiAgICBTY3JlZW5OYW1lOiBcInNwYW5bY2xhc3N+PSdJdVhvcG9yckRmN3F4SWwtbWtOV2hBPT0nXVwiLFxyXG4gICAgQ29udERGb3JtOiBcImRpdltjbGFzc349J1RJR0poZU5pbFR6dUNoYzgrMEUzOEE9PSddXCIsXHJcbiAgICBDb25kaXRpb25FZGl0b3I6IFwiZGl2W2NsYXNzfj0nTkxPckg3aEY1ZmJLSWVzcVczdVNrQT09J11cIixcclxuICAgIENoYXRNZXNzYWdlOiBcImRpdltjbGFzc349J2JZOHFTUGNGRkxraUtORXFPcktIaUE9PSddXCIsXHJcbiAgICBDaGF0V2luZG93OiBcImRpdltjbGFzc349J3R2TGg3MElleXpqUEJYbE5TRFlva2c9PSddXCIsXHJcbiAgICBDaGF0SW5wdXQ6IFwiZGl2W2NsYXNzfj0nQkFyeGEyeUd6LXU1R2dpVC11dkk5UT09J11cIixcclxuICAgIENoYXRUaWxlOiBcImRpdltjbGFzc349J184TVpzLXBpWS0rdDJOT1hSUGhNTTZBPT0nXVwiLFxyXG4gICAgTWF0ZXJpYWxJY29uOiBcIkU3T0xVQ2hZQ2V4TVVnT29sS1lqT1E9PVwiXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NlbGVjdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBDdXJyZW5jeVN5bWJvbHMgPSB7XHJcbiAgICBcIkNJU1wiOiBcIuKCoVwiLFxyXG4gICAgXCJBSUNcIjogXCLigrNcIixcclxuICAgIFwiTkNDXCI6IFwi4oKmXCIsXHJcbiAgICBcIklDQVwiOiBcIseCXCIsXHJcbiAgICBcIkVDRFwiOiBcIuKCrFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgUmF0aW5nQ29sb3JzID0ge1xyXG4gICAgXCJQXCI6IFwiIzFiNmI5Y1wiLFxyXG4gICAgXCJVXCI6IFwiIzhiMjExZVwiLFxyXG4gICAgXCJGXCI6IFwiI2UyNmMzN1wiLFxyXG4gICAgXCJFXCI6IFwiI2U3NzgyYlwiLFxyXG4gICAgXCJEXCI6IFwiI2U4N2QyOFwiLFxyXG4gICAgXCJDXCI6IFwiI2VkODkxY1wiLFxyXG4gICAgXCJCXCI6IFwiI2YxOTUxMFwiLFxyXG4gICAgXCJBXCI6IFwiI2Y2YTIwNFwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQbGFuZXRDb21tYW5kcyA9IFtcIkFETVwiLCBcIkJTQ1wiLCBcIkNPR0NcIiwgXCJDT0dDUEVYXCIsIFwiQ09HQ1VcIiwgXCJGTFRQXCIsIFwiTFJcIiwgXCJMTVBcIiwgXCJMTVwiLCBcIlBMSVwiLCBcIlBPUElcIiwgXCJQT1BSXCIsIFwiUFBTXCIsIFwiU0hZXCIsIFwiV0FSXCJdO1xyXG5leHBvcnQgY29uc3QgUGxhbmV0TmFtZXMgPSB7XHJcbiAgICBcIkxFTVVSSUFcIjogXCJBSi03NjhhXCIsXHJcbiAgICBcIkdBTExVU1wiOiBcIkFNLTc4M2JcIixcclxuICAgIFwiRU1FTlRJT1JcIjogXCJBTS03ODNjXCIsXHJcbiAgICBcIlRZUEhPTlwiOiBcIkFVLTUyMmJcIixcclxuICAgIFwiTk9WQSBIT05TSFVcIjogXCJCUy03ODhjXCIsXHJcbiAgICBcIlBZUkdPU1wiOiBcIkNILTc3MWFcIixcclxuICAgIFwiVEFMT1NJQVwiOiBcIkRDLTgyM2JcIixcclxuICAgIFwiT1JNXCI6IFwiRFctNDU2Z1wiLFxyXG4gICAgXCJNQU5JRk9MRFwiOiBcIkVMLTE3OWJcIixcclxuICAgIFwiTk9WQSBVTkFMQVNLQVwiOiBcIkVaLTQ3NmJcIixcclxuICAgIFwiTEEgRk9SR0VcIjogXCJGSy0zNzFiXCIsXHJcbiAgICBcIkJPVUNIRVJcIjogXCJGSy03OTRiXCIsXHJcbiAgICBcIlZBVUxUXCI6IFwiR0MtNjQ1YlwiLFxyXG4gICAgXCJDSFVcIjogXCJHWS0xMTBjXCIsXHJcbiAgICBcIlBPU0VJRE9OXCI6IFwiSE0tMDQ5YlwiLFxyXG4gICAgXCJBUE9USEVDQVJZXCI6IFwiSUEtNjAzYlwiLFxyXG4gICAgXCJFTEVDVFJPTklDQVwiOiBcIklZLTAyOGNcIixcclxuICAgIFwiTkVNRVNJU1wiOiBcIkpTLTI5OWFcIixcclxuICAgIFwiR0lCU09OXCI6IFwiSlMtOTUyY1wiLFxyXG4gICAgXCJBVVNUUkFMSUFcIjogXCJLSS00NDZhXCIsXHJcbiAgICBcIkRFTUVURVJcIjogXCJLSS00NDZiXCIsXHJcbiAgICBcIkhFUk1FU1wiOiBcIktJLTQ0OGJcIixcclxuICAgIFwiUk9DS1wiOiBcIktRLTk2NmJcIixcclxuICAgIFwiTUlMTElXQVlTXCI6IFwiS1ctMDIwY1wiLFxyXG4gICAgXCJHRUlESSBQUklNRVwiOiBcIktXLTM1OGJcIixcclxuICAgIFwiRVRIRVJXSU5EXCI6IFwiS1ctNjg4Y1wiLFxyXG4gICAgXCJLSU5aQVwiOiBcIkxHLTQxOGJcIixcclxuICAgIFwiUExBTkVUIE1DIFBMQU5FVEZBQ0VcIjogXCJMRy05MTNlXCIsXHJcbiAgICBcIkFSQVRPUkFcIjogXCJMUy0yMzFiXCIsXHJcbiAgICBcIkdSSUZGT05TVE9ORVwiOiBcIkxTLTMwMGNcIixcclxuICAgIFwiSlVSQVwiOiBcIk9GLTI1OWRcIixcclxuICAgIFwiQkVSVEhJRVJcIjogXCJPRi0zNzViXCIsXHJcbiAgICBcIkRBTkFLSUxcIjogXCJPVC00NDJiXCIsXHJcbiAgICBcIklJUk9OXCI6IFwiT1QtNTgwYVwiLFxyXG4gICAgXCJNT05URU1cIjogXCJPVC01ODBiXCIsXHJcbiAgICBcIlZBTExJU1wiOiBcIk9ULTU4MGNcIixcclxuICAgIFwiUEFMTEFEQVwiOiBcIk9ULTU4MGRcIixcclxuICAgIFwiUFJJU01cIjogXCJPVC04ODlhXCIsXHJcbiAgICBcIlNBTEFESU5cIjogXCJQRy04OTliXCIsXHJcbiAgICBcIk5BU0NFTlRcIjogXCJRSi0xNDljXCIsXHJcbiAgICBcIkFDRUxBTkRcIjogXCJRSi02ODRiXCIsXHJcbiAgICBcIkNJUkNFXCI6IFwiUVEtMDAxYlwiLFxyXG4gICAgXCJDRUxFQkRJTFwiOiBcIlFRLTY0NWJcIixcclxuICAgIFwiTUFMQUhBVFwiOiBcIlJDLTA0MGJcIixcclxuICAgIFwiSVJPTkZPUkdFXCI6IFwiUkMtMDQwY1wiLFxyXG4gICAgXCJJQ0UgU1RBVElPTiBBTFBIQVwiOiBcIlNFLTExMGNcIixcclxuICAgIFwiU0hFT0xcIjogXCJURC0yMDNiXCIsXHJcbiAgICBcIlJIQVpFU1wiOiBcIlRELTIyOGJcIixcclxuICAgIFwiQVNCRVNUT1MgTEVBRCBBU0JFU1RPU1wiOiBcIlVWLTA3MmNcIixcclxuICAgIFwiS0FUT0FcIjogXCJVVi0zNTFhXCIsXHJcbiAgICBcIllBTk5JQ0tcIjogXCJVVi0zNTFiXCIsXHJcbiAgICBcIlVNQlJBXCI6IFwiVVYtMzUxY1wiLFxyXG4gICAgXCJCSU9HRU5FU0lTXCI6IFwiVVYtMzUxZFwiLFxyXG4gICAgXCJQUk9YSU9OXCI6IFwiVVYtNzk2YlwiLFxyXG4gICAgXCJQUk9NSVRPUlwiOiBcIlZILTMzMWFcIixcclxuICAgIFwiSEVMSU9OIFBSSU1FXCI6IFwiVkgtMzMxZFwiLFxyXG4gICAgXCJPRFlTU0VVU1wiOiBcIlZILTMzMWZcIixcclxuICAgIFwiQVZBTE9OXCI6IFwiVkgtMzMxZ1wiLFxyXG4gICAgXCJIWURST05cIjogXCJWSC0zMzFpXCIsXHJcbiAgICBcIk1JTUFSXCI6IFwiV0MtNzAyYlwiLFxyXG4gICAgXCJNQUdVU1wiOiBcIlhELTM1NGJcIixcclxuICAgIFwiVVBPTk9SXCI6IFwiWEgtMzI5YVwiLFxyXG4gICAgXCJMSUJFUlRBU1wiOiBcIlhILTU5NGFcIixcclxuICAgIFwiS0lSVU5BXCI6IFwiWEgtNTk0YlwiLFxyXG4gICAgXCJDT1JURVpcIjogXCJYSC01OTRjXCIsXHJcbiAgICBcIktVQlwiOiBcIllJLTA1OWZcIixcclxuICAgIFwiSEFSUElOQVwiOiBcIllJLTIwOWhcIixcclxuICAgIFwiQVJDQURJQVwiOiBcIllJLTY4M2NcIixcclxuICAgIFwiVkVSREFOVFwiOiBcIllJLTcxNWJcIixcclxuICAgIFwiTk9SV0lDS1wiOiBcIllLLTY0OWJcIixcclxuICAgIFwiTklLRVwiOiBcIlpWLTE5NGFcIixcclxuICAgIFwiSEVQSEFFU1RVU1wiOiBcIlpWLTMwN2NcIixcclxuICAgIFwiUEhPQk9TXCI6IFwiWlYtMzA3ZFwiLFxyXG4gICAgXCJERUlNT1NcIjogXCJaVi03NTljXCIsXHJcbiAgICBcIkhBUk1PTklBXCI6IFwiWlYtODk2YlwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbE5hbWVzID0ge1xyXG4gICAgXCJBQVJcIjogW1wiQW50ZW5uYSBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQUJIXCI6IFtcIkFkdmFuY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFDU1wiOiBbXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFERVwiOiBbXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFEUlwiOiBbXCJBdXRvLURvY1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJBRFNcIjogW1wiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQUVGXCI6IFtcIkFlcm9zdGF0IEZvdW5kYXRpb25cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFFTlwiOiBbXCJBZHZhbmNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlBcIjogW1wiQWR2YW5jZWQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlJcIjogW1wiQWR2YW5jZWQgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFHU1wiOiBbXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSFBcIjogW1wiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFJUlwiOiBbXCJBaXIgU2NydWJiZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFMXCI6IFtcIkFsdW1pbml1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQUxFXCI6IFtcIlN0ZWxsYXIgUGFsZSBBbGVcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQUxHXCI6IFtcIlByb3RlaW4tUmljaCBBbGdhZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQUxPXCI6IFtcIkFsdW1pbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJBTU1cIjogW1wiQW1tb25pYVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBTlpcIjogW1wiQWR2YW5jZWQgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBUFRcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFSXCI6IFtcIkFyZ29uXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkFSUFwiOiBbXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQVNFXCI6IFtcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVNUXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkFUQVwiOiBbXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBVFBcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQVVcIjogW1wiR29sZFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQVVPXCI6IFtcIkdvbGQgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQVdGXCI6IFtcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFXSFwiOiBbXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQkFDXCI6IFtcIkhlbHBmdWwgQmFjdGVyaWFcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJBSVwiOiBbXCJCYXNpYyBBSSBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJCQkhcIjogW1wiQmFzaWMgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQkNPXCI6IFtcIkJ1ZGdldCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkJERVwiOiBbXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJFXCI6IFtcIkJlcnlsbGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJCRUFcIjogW1wiUHJvdGVpbi1SaWNoIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJCRVJcIjogW1wiQmVyeWwgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQkZQXCI6IFtcIkJhc2ljIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkZSXCI6IFtcIkJhc2ljIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJCR0NcIjogW1wiU2hpZWxkZWQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCR09cIjogW1wiQmx1ZSBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCR1NcIjogW1wiQmFzaWMgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQkhQXCI6IFtcIkJhc2ljIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJCSURcIjogW1wiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQkxcIjogW1wiQnJlYXRoYWJsZSBMaXF1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJMRVwiOiBbXCJEZXNhdHVyYXRpb24gQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJNRlwiOiBbXCJCYXNpYyBNYWluZnJhbWVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJORFwiOiBbXCJCYW5kYWdlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJCT1JcIjogW1wiQm9yb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQk9TXCI6IFtcIkJvcm9zaWxpY2F0ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlBUXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUjFcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsxXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUjJcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsyXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUk1cIjogW1wiQmlvcmVhY3RpdmUgTWluZXJhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQlJPXCI6IFtcIkJyb256ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlJQXCI6IFtcIkJhc2ljIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUlNcIjogW1wiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJTQ1wiOiBbXCJCb2R5IFNjYW5uZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJTRVwiOiBbXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJUQVwiOiBbXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVFNcIjogW1wiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiQldIXCI6IFtcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCV1NcIjogW1wiQmFzaWMgV29ya3N0YXRpb25cIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkNcIjogW1wiQ2FyYm9uXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBXCI6IFtcIkNhbGNpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0FGXCI6IFtcIkNhZmZlaW5hdGVkIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJDQVBcIjogW1wiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkNCTFwiOiBbXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQk1cIjogW1wiTWVkaXVtIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNCU1wiOiBbXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ1wiOiBbXCJDbGltYXRlIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNDRFwiOiBbXCJDcm93ZCBDb250cm9sIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJDRFwiOiBbXCJDYXBhY2l0aXZlIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJDRlwiOiBbXCJDZXJhbWljIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDSEFcIjogW1wiQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJDTFwiOiBbXCJDaGxvcmluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDTElcIjogW1wiQ2FsaWNoZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkNNS1wiOiBbXCJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJDT0ZcIjogW1wiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQ09NXCI6IFtcIkNvbW11bmljYXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDT1RcIjogW1wiQ290dG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDUUxcIjogW1wiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUU1cIjogW1wiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FTXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FUXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUlVcIjogW1wiQ3J5b2dlbmljIFVuaXRcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNTVFwiOiBbXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQ1RGXCI6IFtcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNVXCI6IFtcIkNvcHBlclwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQ1VPXCI6IFtcIkNvcHBlciBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJEQVwiOiBbXCJEYXRhIEFuYWx5emVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkRDSFwiOiBbXCJEcm9uZSBDaGFzc2lzXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEQ0xcIjogW1wiRHVyYWJsZSBDYXNpbmcgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ01cIjogW1wiRHVyYWJsZSBDYXNpbmcgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ1NcIjogW1wiRHVyYWJsZSBDYXNpbmcgU1wiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJERFwiOiBbXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJERFRcIjogW1wiRERUIFBsYW50IEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJERUNcIjogW1wiRGVjb3JhdGl2ZSBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRElTXCI6IFtcIkluZm9ybWF0aW9uIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJET1VcIjogW1wiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJEUkZcIjogW1wiRHJvbmUgRnJhbWVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkRWXCI6IFtcIkRhdGEgVmlzdWFsaXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEV1wiOiBbXCJEcmlua2luZyBXYXRlclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkVEQ1wiOiBbXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJFRVNcIjogW1wiRW5yaWNoZWQgRWluc3RlaW5pdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVOR1wiOiBbXCJTdGFuZGFyZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJFUE9cIjogW1wiRXBveHkgUmVzaW5cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJFU1wiOiBbXCJFaW5zdGVpbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJFVENcIjogW1wiRW5yaWNoZWQgVGVjaG5ldGl1bVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRVhPXCI6IFtcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZcIjogW1wiRmx1b3JpbmVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiRkFMXCI6IFtcIkZlcnJvbWluaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGQU5cIjogW1wiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRkNcIjogW1wiRmxvdyBDb250cm9sIERldmljZVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkVcIjogW1wiSXJvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiRkVPXCI6IFtcIklyb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiRkVUXCI6IFtcIkZlcnJvLVRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGRlwiOiBbXCJGVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJGRkNcIjogW1wiRlRMIEZpZWxkIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkZJTVwiOiBbXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZJUlwiOiBbXCJGaXNzaW9uIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZMT1wiOiBbXCJGbG9hdGluZyBUYW5rXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFBcIjogW1wiRmx1aWQgUGlwaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFhcIjogW1wiRmx1eFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRk9EXCI6IFtcIkFsbC1QdXJwb3NlIEZvZGRlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiRlNFXCI6IFtcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZVTlwiOiBbXCJFbnRlcnRhaW5tZW50IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkdBTFwiOiBbXCJHYWxlcml0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkdDXCI6IFtcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkdDSFwiOiBbXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdFTlwiOiBbXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHSU5cIjogW1wiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiR0xcIjogW1wiR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJHTlpcIjogW1wiR2xhc3MgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHUkFcIjogW1wiV2luZS1RdWFsaXR5IEdyYXBlc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiR1JOXCI6IFtcIkhpZ2gtQ2FyYiBHcmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdWXCI6IFtcIkdhcyBWZW50XCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJIXCI6IFtcIkh5ZHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkgyT1wiOiBbXCJXYXRlclwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhBQlwiOiBbXCJIYWJpdGF0IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkhBTFwiOiBbXCJIYWxpdGUgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiSENDXCI6IFtcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJIQ1BcIjogW1wiSHlkcm9jYXJib24gUGxhbnRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRFwiOiBbXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIRVwiOiBbXCJIZWxpdW1cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEUzXCI6IFtcIkhlbGl1bS0zIElzb3RvcGVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEVSXCI6IFtcIlNwaWN5IEhlcmJzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRVhcIjogW1wiSGVsaW90cm9wZSBFeHRyYWN0XCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiSEhQXCI6IFtcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJITVNcIjogW1wiSGF6TWF0IFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhOWlwiOiBbXCJIeXBlcnRocnVzdCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhPR1wiOiBbXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIT1BcIjogW1wiRmxvd2VyeSBIb3BzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIUENcIjogW1wiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSFBSXCI6IFtcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhTRVwiOiBbXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkhTU1wiOiBbXCJTbWFydCBTcGFjZSBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiSFRFXCI6IFtcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhZUlwiOiBbXCJIeXBlci1wb3dlciBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJJXCI6IFtcIklvZGluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJJRENcIjogW1wiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU1NXCI6IFtcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU5EXCI6IFtcIkluZGlnbyBDb2xvcmFudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiSU5TXCI6IFtcIkluc3VGb2FtXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiSlVJXCI6IFtcIlNlZGF0aXZlIFN1YnN0YW5jZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiS09NXCI6IFtcIktvbWJ1Y2hhXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIktWXCI6IFtcIktldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTEJIXCI6IFtcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxDXCI6IFtcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTENCXCI6IFtcIkxhcmdlIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxDUlwiOiBbXCJMaXF1aWQgQ3J5c3RhbHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkxEXCI6IFtcIkxvY2FsIERhdGFiYXNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTERFXCI6IFtcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTERJXCI6IFtcIkxhc2VyIERpb2Rlc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJMRVNcIjogW1wiTGlxdWlkIEVpbnN0ZWluaXVtXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiTEZFXCI6IFtcIkxhcmdlIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMRkxcIjogW1wiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxGUFwiOiBbXCJMb3ctaGVhdCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkxIUFwiOiBbXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTElcIjogW1wiTGl0aGl1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiTElPXCI6IFtcIkxpdGhpdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiTElTXCI6IFtcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxJVFwiOiBbXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTE9HXCI6IFtcIkxvZ2lzdGljcyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxTRVwiOiBbXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxTTFwiOiBbXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTFNUXCI6IFtcIkxpbWVzdG9uZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJMVEFcIjogW1wiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTFVcIjogW1wiTGFib3JhdG9yeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJNQUdcIjogW1wiTWFnbmV0aXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1BSVwiOiBbXCJIaWdoLUNhcmIgTWFpemVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1CXCI6IFtcIk1vdGhlcmJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTUNCXCI6IFtcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNQ0dcIjogW1wiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTUVBXCI6IFtcIlF1YWxpdHkgTWVhdCBNZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUVEXCI6IFtcIkJhc2ljIE1lZGljYWwgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUZFXCI6IFtcIk1lZGl1bSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTUZLXCI6IFtcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTUZMXCI6IFtcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUdcIjogW1wiTWFnbmVzaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk1HQ1wiOiBbXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1HU1wiOiBbXCJNYWduZXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTUhMXCI6IFtcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1IUFwiOiBbXCJNaWNybyBIZWFkcGhvbmVzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJNTElcIjogW1wiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJNUENcIjogW1wiTWljcm8tUHJvY2Vzc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTVNMXCI6IFtcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTVRDXCI6IFtcIk1lZ2FUdWJlIENvYXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJNVFBcIjogW1wiTWVhdCBUaXNzdWUgUGF0dGllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTVVTXCI6IFtcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1XRlwiOiBbXCJNZWRpdW0gV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTlwiOiBbXCJOaXRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJOQVwiOiBbXCJTb2RpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiTkFCXCI6IFtcIlNvZGl1bSBCb3JvaHlkcmlkZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTkNTXCI6IFtcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkVcIjogW1wiTmVvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJORlwiOiBbXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIk5GSVwiOiBbXCJOYW5vIEZpYmVyXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkdcIjogW1wiTmFuby1Db2F0ZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJOTFwiOiBbXCJOeWxvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTk5cIjogW1wiTmV1cmFsIE5ldHdvcmtcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiTk9aXCI6IFtcIkJhc2ljIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTlJcIjogW1wiTmFuby1FbmhhbmNlZCBSZXNpblwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTlNcIjogW1wiTnV0cmllbnQgU29sdXRpb25cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TVFwiOiBbXCJOZXVyb1N0aW11bGFudHNcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiTlVUXCI6IFtcIlRyaWdseWNlcmlkZSBOdXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJOVjFcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTlYyXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk9cIjogW1wiT3h5Z2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk9GRlwiOiBbXCJPZmZpY2UgU3VwcGxpZXNcIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJPTEZcIjogW1wiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk9TXCI6IFtcIk9wZXJhdGluZyBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiT1ZFXCI6IFtcIkJhc2ljIE92ZXJhbGxzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUENCXCI6IFtcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlBEQVwiOiBbXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBFXCI6IFtcIlBvbHktRXRoeWxlbmVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUEZFXCI6IFtcIlByZW1pdW0gRmVydGlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiUEdcIjogW1wiUG9seW1lciBHcmFudWxhdGVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUElCXCI6IFtcIlBpbmViZXJyaWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJQS1wiOiBbXCJQYWlua2lsbGVyc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJQT1dcIjogW1wiUG93ZXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJQUEFcIjogW1wiUHJvdGVpbiBQYXN0ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUFNIXCI6IFtcIlByZXNzdXJlIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiUFNMXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBTTVwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU1NcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFRcIjogW1wiUG93ZXIgVG9vbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQV09cIjogW1wiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJRQ1JcIjogW1wiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQURcIjogW1wiUmFkaW8gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJSQUdcIjogW1wiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFNXCI6IFtcIk1lbW9yeSBCYW5rXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUkFUXCI6IFtcIkJhc2ljIFJhdGlvbnNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJSQkhcIjogW1wiUmVpbmZvcmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSQ09cIjogW1wiUmF3IENvdHRvbiBGaWJlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUkNTXCI6IFtcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJDVFwiOiBbXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkRFXCI6IFtcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRExcIjogW1wiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRFNcIjogW1wiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRUFcIjogW1wiQ2hlbWljYWwgUmVhZ2VudHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlJFRFwiOiBbXCJSZXNjdWUgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlJFUFwiOiBbXCJSZXBhaXIgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlJHXCI6IFtcIlJlaW5mb3JjZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJSR09cIjogW1wiUmVkIEdvbGRcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIlJIUFwiOiBbXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJST01cIjogW1wiTm9uLVZvbGF0aWxlIE1lbW9yeVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJTRVwiOiBbXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUlNIXCI6IFtcIlJhZGlhdGlvbiBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlJTSVwiOiBbXCJSYXcgU2lsayBTdHJhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJSVEFcIjogW1wiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJTXCI6IFtcIlN1bGZ1clwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJTQVwiOiBbXCJTZWFyY2ggQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FMXCI6IFtcIlNvcnRpbmcgQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FSXCI6IFtcIlNlbnNvciBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiU0NcIjogW1wiU3RlbSBDZWxsIFRyZWF0bWVudFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJTQ0JcIjogW1wiU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0NOXCI6IFtcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlNDUlwiOiBbXCJTdWxmdXIgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiU0RSXCI6IFtcIlN1cmdpY2FsIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTRUFcIjogW1wiUG9seS1TdWxmaXRlIFNlYWxhbnRcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJTRU5cIjogW1wiU2Vuc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiU0VRXCI6IFtcIlN1cmdpY2FsIEVxdWlwbWVudFwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJTRlwiOiBbXCJTVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJTRkVcIjogW1wiU21hbGwgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlNGS1wiOiBbXCJTbWFsbCBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiU0ZMXCI6IFtcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTSVwiOiBbXCJTaWxpY29uXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTSUxcIjogW1wiU2lsa2VuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJTSU9cIjogW1wiU2lsaWNvbiBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJTTk1cIjogW1wiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNPSVwiOiBbXCJBcnRpZmljaWFsIFNvaWxcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlNPTFwiOiBbXCJTb2xhciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNQXCI6IFtcIlNvbGFyIFBhbmVsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNSRFwiOiBbXCJTaGlwLVJlcGFpciBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1JQXCI6IFtcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJTU0NcIjogW1wiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlNTTFwiOiBbXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU1RMXCI6IFtcIlN0ZWVsXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTVFJcIjogW1wiTWVkaWNhbCBTdHJldGNoZXJcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU1RTXCI6IFtcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiU1VcIjogW1wiU3VyZ2VyeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJTVURcIjogW1wiU3VydmVpbGxhbmNlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTVU5cIjogW1wiU2FmZXR5IFVuaWZvcm1cIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJTV0ZcIjogW1wiU21hbGwgV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVEFcIjogW1wiVGFudGFsdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVEFDXCI6IFtcIlRhcmdldGluZyBDb21wdXRlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiVEFJXCI6IFtcIlRhbnRhbGl0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRDXCI6IFtcIlRlY2huZXRpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVENCXCI6IFtcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiVENMXCI6IFtcIlRDTCBBY2lkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUQ09cIjogW1wiVGVjaG5ldGl1bSBPeGlkZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1NcIjogW1wiU3RhYmlsaXplZCBUZWNobmV0aXVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUQ1VcIjogW1wiVHJhdW1hIENhcmUgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiVEhGXCI6IFtcIlRoZXJtb0ZsdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUSFBcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiVElcIjogW1wiVGl0YW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlRJT1wiOiBbXCJUaXRhbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJUS1wiOiBbXCJUZWNobm9LZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIlRQVVwiOiBbXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJBXCI6IFtcIkF1ZGlvIFRyYW5zbWl0dGVyXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJOXCI6IFtcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVFJVXCI6IFtcIlRydXNzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUU1wiOiBbXCJUZWN0b3NpbGlzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRTSFwiOiBbXCJUaGVybWFsIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFVCXCI6IFtcIlRlc3QgVHViZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiVVRTXCI6IFtcIlVuaXZlcnNhbCBUb29sc2V0XCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiVkNCXCI6IFtcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlZFR1wiOiBbXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWR1wiOiBbXCJWaXRhR2VsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlZJVFwiOiBbXCJWaXRhIEVzc2VuY2VcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlZTQ1wiOiBbXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldcIjogW1wiVHVuZ3N0ZW5cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIldBSVwiOiBbXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiV0FMXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIldDQlwiOiBbXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiV0lOXCI6IFtcIlNtYXJ0IFppbmZhbmRlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJXTVwiOiBbXCJXaW5kb3cgTWFuYWdlclwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIldPUlwiOiBbXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiV1JcIjogW1wiV2F0ZXIgUmVjbGFpbWVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJXU1wiOiBbXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlpJUlwiOiBbXCJaaXJjb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiWlJcIjogW1wiWmlyY29uaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbHMgPSB7XHJcbiAgICBcIkFudGVubmEgQXJyYXlcIjogW1wiQUFSXCIsIDAuNzgsIDAuNV0sXHJcbiAgICBcIkFkdmFuY2VkIEJ1bGtoZWFkXCI6IFtcIkFCSFwiLCAwLjYsIDAuOV0sXHJcbiAgICBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiOiBbXCJBQ1NcIiwgMC4zLCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIkFERVwiLCAwLjQsIDEuNV0sXHJcbiAgICBcIkF1dG8tRG9jXCI6IFtcIkFEUlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIjogW1wiQURTXCIsIDAuNywgMl0sXHJcbiAgICBcIkFlcm9zdGF0IEZvdW5kYXRpb25cIjogW1wiQUVGXCIsIDIsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBTVEwgRW5naW5lXCI6IFtcIkFFTlwiLCAxNCwgN10sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiOiBbXCJBRlBcIiwgMSwgMC4yNV0sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUm9kXCI6IFtcIkFGUlwiLCAwLjQsIDAuMV0sXHJcbiAgICBcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiOiBbXCJBR1NcIiwgMzAsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCI6IFtcIkFIUFwiLCAyMCwgMTBdLFxyXG4gICAgXCJBaXIgU2NydWJiZXJcIjogW1wiQUlSXCIsIDEuNywgM10sXHJcbiAgICBcIkFsdW1pbml1bVwiOiBbXCJBTFwiLCAyLjcsIDFdLFxyXG4gICAgXCJTdGVsbGFyIFBhbGUgQWxlXCI6IFtcIkFMRVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBBbGdhZVwiOiBbXCJBTEdcIiwgMC43LCAxXSxcclxuICAgIFwiQWx1bWluaXVtIE9yZVwiOiBbXCJBTE9cIiwgMS4zNSwgMV0sXHJcbiAgICBcIkFtbW9uaWFcIjogW1wiQU1NXCIsIDAuODYsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBOb3p6bGVcIjogW1wiQU5aXCIsIDYsIDNdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJBUFRcIiwgMC4wMywgMC4zXSxcclxuICAgIFwiQXJnb25cIjogW1wiQVJcIiwgMS43ODQsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJBUlBcIiwgMC4wNCwgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJBU0VcIiwgMC41LCAwLjZdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCI6IFtcIkFTVFwiLCA0Ljk4LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQVRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIkFUUFwiLCAyLjksIDFdLFxyXG4gICAgXCJHb2xkXCI6IFtcIkFVXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiR29sZCBPcmVcIjogW1wiQVVPXCIsIDMuODYsIDFdLFxyXG4gICAgXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCI6IFtcIkFXRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkFXSFwiLCAwLjEyLCAxXSxcclxuICAgIFwiSGVscGZ1bCBCYWN0ZXJpYVwiOiBbXCJCQUNcIiwgMC4xNSwgMC4xNV0sXHJcbiAgICBcIkJhc2ljIEFJIEZyYW1ld29ya1wiOiBbXCJCQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBCdWxraGVhZFwiOiBbXCJCQkhcIiwgMC41LCAwLjhdLFxyXG4gICAgXCJCdWRnZXQgQ29ubmVjdG9yc1wiOiBbXCJCQ09cIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQmFzaWMgRGVjayBFbGVtZW50c1wiOiBbXCJCREVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJCZXJ5bGxpdW1cIjogW1wiQkVcIiwgMS44NCwgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBCZWFuc1wiOiBbXCJCRUFcIiwgMC44LCAxXSxcclxuICAgIFwiQmVyeWwgQ3J5c3RhbHNcIjogW1wiQkVSXCIsIDEuOTIsIDFdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFB1bXBcIjogW1wiQkZQXCIsIDAuOCwgMC4yXSxcclxuICAgIFwiQmFzaWMgRnVlbCBSb2RcIjogW1wiQkZSXCIsIDAuMywgMC4xXSxcclxuICAgIFwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiOiBbXCJCR0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJCbHVlIEdvbGRcIjogW1wiQkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiQmFzaWMgSGlnaC1HIFNlYXRzXCI6IFtcIkJHU1wiLCAyMCwgM10sXHJcbiAgICBcIkJhc2ljIEh1bGwgUGxhdGVcIjogW1wiQkhQXCIsIDEwLCAxMF0sXHJcbiAgICBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIjogW1wiQklEXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJCcmVhdGhhYmxlIExpcXVpZFwiOiBbXCJCTFwiLCAxLjEyLCAxXSxcclxuICAgIFwiRGVzYXR1cmF0aW9uIEFnZW50XCI6IFtcIkJMRVwiLCAwLjUsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1haW5mcmFtZVwiOiBbXCJCTUZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJCYW5kYWdlc1wiOiBbXCJCTkRcIiwgMC4wMDEsIDAuMDA1XSxcclxuICAgIFwiQm9yb24gQ3J5c3RhbHNcIjogW1wiQk9SXCIsIDEuOCwgMV0sXHJcbiAgICBcIkJvcm9zaWxpY2F0ZVwiOiBbXCJCT1NcIiwgMS41LCAxXSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQlBUXCIsIDAuMDIsIDAuM10sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMVwiOiBbXCJCUjFcIiwgMTgwLCAzMDBdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzJcIjogW1wiQlIyXCIsIDI4MCwgNDAwXSxcclxuICAgIFwiQmlvcmVhY3RpdmUgTWluZXJhbHNcIjogW1wiQlJNXCIsIDIuNSwgMV0sXHJcbiAgICBcIkJyb256ZVwiOiBbXCJCUk9cIiwgOC43MywgMV0sXHJcbiAgICBcIkJhc2ljIEFudGktcmFkIFBsYXRlXCI6IFtcIkJSUFwiLCAwLjAzLCAwLjJdLFxyXG4gICAgXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiOiBbXCJCUlNcIiwgMTUwLCAyMDBdLFxyXG4gICAgXCJCb2R5IFNjYW5uZXJcIjogW1wiQlNDXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJCU0VcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJCVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIjogW1wiQlRTXCIsIDEuMDUsIDFdLFxyXG4gICAgXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJCV0hcIiwgMC4xLCAxXSxcclxuICAgIFwiQmFzaWMgV29ya3N0YXRpb25cIjogW1wiQldTXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkNhcmJvblwiOiBbXCJDXCIsIDIuMjUsIDFdLFxyXG4gICAgXCJDYWxjaXVtXCI6IFtcIkNBXCIsIDEuNTQsIDFdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBCZWFuc1wiOiBbXCJDQUZcIiwgMC44NiwgMV0sXHJcbiAgICBcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiOiBbXCJDQVBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JMXCIsIDUuNCwgMi40XSxcclxuICAgIFwiTWVkaXVtIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTVwiLCAzLjYsIDEuNl0sXHJcbiAgICBcIlNtYWxsIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCU1wiLCAxLjgsIDAuOF0sXHJcbiAgICBcIkNsaW1hdGUgQ29udHJvbGxlclwiOiBbXCJDQ1wiLCAwLjUsIDFdLFxyXG4gICAgXCJDcm93ZCBDb250cm9sIERyb25lXCI6IFtcIkNDRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJDYXBhY2l0aXZlIERpc3BsYXlcIjogW1wiQ0RcIiwgMC4wMDQsIDAuMDAyXSxcclxuICAgIFwiQ2VyYW1pYyBGYWJyaWNcIjogW1wiQ0ZcIiwgMi44MiwgMV0sXHJcbiAgICBcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJDSEFcIiwgMS4yLCAwLjddLFxyXG4gICAgXCJDaGxvcmluZVwiOiBbXCJDTFwiLCAzLjIsIDFdLFxyXG4gICAgXCJDYWxpY2hlIFJvY2tcIjogW1wiQ0xJXCIsIDIuNDIsIDFdLFxyXG4gICAgXCJcIjogW1wiQ01LXCIsIDQuNTYsIDMzLjJdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiOiBbXCJDT0ZcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiOiBbXCJDT01cIiwgMC41LCAxLjVdLFxyXG4gICAgXCJDb3R0b24gRmFicmljXCI6IFtcIkNPVFwiLCAwLjc3LCAxXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCI6IFtcIkNRTFwiLCA3NSwgMTUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiOiBbXCJDUU1cIiwgNTAsIDEwMF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiOiBbXCJDUVNcIiwgMjUsIDUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoVGlueSlcIjogW1wiQ1FUXCIsIDEyLjUsIDI1XSxcclxuICAgIFwiQ3J5b2dlbmljIFVuaXRcIjogW1wiQ1JVXCIsIDIuMiwgMl0sXHJcbiAgICBcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCI6IFtcIkNTVFwiLCAxLjE0LCAxXSxcclxuICAgIFwiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIjogW1wiQ1RGXCIsIDQuMzIsIDFdLFxyXG4gICAgXCJDb3BwZXJcIjogW1wiQ1VcIiwgOC45MiwgMV0sXHJcbiAgICBcIkNvcHBlciBPcmVcIjogW1wiQ1VPXCIsIDQuMDEsIDFdLFxyXG4gICAgXCJEYXRhIEFuYWx5emVyXCI6IFtcIkRBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJvbmUgQ2hhc3Npc1wiOiBbXCJEQ0hcIiwgMC4yLCAwLjAzXSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTFwiOiBbXCJEQ0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTVwiOiBbXCJEQ01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgU1wiOiBbXCJEQ1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIjogW1wiRERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJERFQgUGxhbnQgQWdlbnRcIjogW1wiRERUXCIsIDAuMTEsIDAuMV0sXHJcbiAgICBcIkRlY29yYXRpdmUgRWxlbWVudHNcIjogW1wiREVDXCIsIDAuNSwgMl0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERpc3BsYXlcIjogW1wiRElTXCIsIDAuMDIsIDAuMDJdLFxyXG4gICAgXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiRE9VXCIsIDUsIDRdLFxyXG4gICAgXCJEcm9uZSBGcmFtZVwiOiBbXCJEUkZcIiwgMC4xLCAwLjAyXSxcclxuICAgIFwiRGF0YSBWaXN1YWxpemVyXCI6IFtcIkRWXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJpbmtpbmcgV2F0ZXJcIjogW1wiRFdcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiOiBbXCJFRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiOiBbXCJFRVNcIiwgOS4yLCAxXSxcclxuICAgIFwiU3RhbmRhcmQgU1RMIEVuZ2luZVwiOiBbXCJFTkdcIiwgOCwgNF0sXHJcbiAgICBcIkVwb3h5IFJlc2luXCI6IFtcIkVQT1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiRWluc3RlaW5pdW1cIjogW1wiRVNcIiwgMC44OCwgMC4xXSxcclxuICAgIFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiOiBbXCJFVENcIiwgNC4xLCAxXSxcclxuICAgIFwiRXhvc2tlbGV0b24gV29yayBTdWl0XCI6IFtcIkVYT1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJGbHVvcmluZVwiOiBbXCJGXCIsIDEuNjk2LCAxXSxcclxuICAgIFwiRmVycm9taW5pdW1cIjogW1wiRkFMXCIsIDMuMjIsIDFdLFxyXG4gICAgXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIjogW1wiRkFOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRmxvdyBDb250cm9sIERldmljZVwiOiBbXCJGQ1wiLCAwLjUsIDAuMjVdLFxyXG4gICAgXCJJcm9uXCI6IFtcIkZFXCIsIDcuODc0LCAxXSxcclxuICAgIFwiSXJvbiBPcmVcIjogW1wiRkVPXCIsIDUuOSwgMV0sXHJcbiAgICBcIkZlcnJvLVRpdGFuaXVtXCI6IFtcIkZFVFwiLCA2Ljg1LCAxXSxcclxuICAgIFwiRlRMIEZ1ZWxcIjogW1wiRkZcIiwgMC4wNSwgMC4wMV0sXHJcbiAgICBcIkZUTCBGaWVsZCBDb250cm9sbGVyXCI6IFtcIkZGQ1wiLCA1MCwgMTZdLFxyXG4gICAgXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiOiBbXCJGSU1cIiwgMC41NSwgMC41XSxcclxuICAgIFwiRmlzc2lvbiBSZWFjdG9yXCI6IFtcIkZJUlwiLCA3LCA0LjldLFxyXG4gICAgXCJGbG9hdGluZyBUYW5rXCI6IFtcIkZMT1wiLCAxLCAyXSxcclxuICAgIFwiRmx1aWQgUGlwaW5nXCI6IFtcIkZMUFwiLCAwLjMsIDJdLFxyXG4gICAgXCJGbHV4XCI6IFtcIkZMWFwiLCAwLjI1LCAwLjFdLFxyXG4gICAgXCJBbGwtUHVycG9zZSBGb2RkZXJcIjogW1wiRk9EXCIsIDEuMiwgMV0sXHJcbiAgICBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIjogW1wiRlNFXCIsIDYsIDNdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IFVuaXRcIjogW1wiRlVOXCIsIDUsIDRdLFxyXG4gICAgXCJHYWxlcml0ZSBSb2NrXCI6IFtcIkdBTFwiLCAyLjUxLCAxXSxcclxuICAgIFwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiOiBbXCJHQ1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIjogW1wiR0NIXCIsIDEsIDAuNl0sXHJcbiAgICBcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIjogW1wiR0VOXCIsIDUsIDNdLFxyXG4gICAgXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiOiBbXCJHSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJHbGFzc1wiOiBbXCJHTFwiLCAwLjAxNiwgMC4wMV0sXHJcbiAgICBcIkdsYXNzIE5venpsZVwiOiBbXCJHTlpcIiwgMS41LCAxXSxcclxuICAgIFwiV2luZS1RdWFsaXR5IEdyYXBlc1wiOiBbXCJHUkFcIiwgMS4xLCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIEdyYWluc1wiOiBbXCJHUk5cIiwgMC45LCAxXSxcclxuICAgIFwiR2FzIFZlbnRcIjogW1wiR1ZcIiwgMC4yNSwgMC4xNV0sXHJcbiAgICBcIkh5ZHJvZ2VuXCI6IFtcIkhcIiwgMC4wNywgMV0sXHJcbiAgICBcIldhdGVyXCI6IFtcIkgyT1wiLCAwLjIsIDAuMl0sXHJcbiAgICBcIkhhYml0YXQgVW5pdFwiOiBbXCJIQUJcIiwgMTAsIDhdLFxyXG4gICAgXCJIYWxpdGUgQ3J5c3RhbHNcIjogW1wiSEFMXCIsIDIuMTcsIDFdLFxyXG4gICAgXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIjogW1wiSENDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiSHlkcm9jYXJib24gUGxhbnRzXCI6IFtcIkhDUFwiLCAwLjgsIDFdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCI6IFtcIkhEXCIsIDAuMDUsIDJdLFxyXG4gICAgXCJIZWxpdW1cIjogW1wiSEVcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJIZWxpdW0tMyBJc290b3BlXCI6IFtcIkhFM1wiLCAwLjE0NSwgMV0sXHJcbiAgICBcIlNwaWN5IEhlcmJzXCI6IFtcIkhFUlwiLCAwLjQsIDFdLFxyXG4gICAgXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIjogW1wiSEVYXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIjogW1wiSEhQXCIsIDE1LCAxMF0sXHJcbiAgICBcIkhhek1hdCBXb3JrIFN1aXRcIjogW1wiSE1TXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBOb3p6bGVcIjogW1wiSE5aXCIsIDYsIDEyXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiOiBbXCJIT0dcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIkZsb3dlcnkgSG9wc1wiOiBbXCJIT1BcIiwgMC4zNSwgMV0sXHJcbiAgICBcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIjogW1wiSFBDXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIjogW1wiSFBSXCIsIDE4LCAxNV0sXHJcbiAgICBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiSFNFXCIsIDMuMSwgMC43XSxcclxuICAgIFwiU21hcnQgU3BhY2UgU3VpdFwiOiBbXCJIU1NcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIjogW1wiSFRFXCIsIDIwLCAxMF0sXHJcbiAgICBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIjogW1wiSFlSXCIsIDM1LCAyNV0sXHJcbiAgICBcIklvZGluZVwiOiBbXCJJXCIsIDQuOTMsIDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIjogW1wiSURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIjogW1wiSU1NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5kaWdvIENvbG9yYW50XCI6IFtcIklORFwiLCAwLjIxLCAwLjJdLFxyXG4gICAgXCJJbnN1Rm9hbVwiOiBbXCJJTlNcIiwgMC4wNiwgMC4xXSxcclxuICAgIFwiU2VkYXRpdmUgU3Vic3RhbmNlXCI6IFtcIkpVSVwiLCAxLjIsIDFdLFxyXG4gICAgXCJLb21idWNoYVwiOiBbXCJLT01cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJLZXZsYXIgRmFicmljXCI6IFtcIktWXCIsIDEuNjUsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBCdWxraGVhZFwiOiBbXCJMQkhcIiwgMC4yLCAwLjZdLFxyXG4gICAgXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiOiBbXCJMQ1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiOiBbXCJMQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJMaXF1aWQgQ3J5c3RhbHNcIjogW1wiTENSXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIkxvY2FsIERhdGFiYXNlXCI6IFtcIkxEXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiOiBbXCJMREVcIiwgMC4xLCAxLjJdLFxyXG4gICAgXCJMYXNlciBEaW9kZXNcIjogW1wiTERJXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxpcXVpZCBFaW5zdGVpbml1bVwiOiBbXCJMRVNcIiwgOC44NCwgMV0sXHJcbiAgICBcIkxhcmdlIEZUTCBFbWl0dGVyXCI6IFtcIkxGRVwiLCAwLjQsIDEuNl0sXHJcbiAgICBcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxGTFwiLCA2MCwgMTBdLFxyXG4gICAgXCJMb3ctaGVhdCBGdWVsIFB1bXBcIjogW1wiTEZQXCIsIDAuNSwgMC4xXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiOiBbXCJMSFBcIiwgNSwgMTBdLFxyXG4gICAgXCJMaXRoaXVtXCI6IFtcIkxJXCIsIDAuNTUsIDFdLFxyXG4gICAgXCJMaXRoaXVtIE9yZVwiOiBbXCJMSU9cIiwgMi43NSwgMV0sXHJcbiAgICBcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIjogW1wiTElTXCIsIDUuNiwgN10sXHJcbiAgICBcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCI6IFtcIkxJVFwiLCAxLCAyXSxcclxuICAgIFwiTG9naXN0aWNzIFN5c3RlbVwiOiBbXCJMT0dcIiwgMC41LCAxLjVdLFxyXG4gICAgXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkxTRVwiLCAwLjMsIDEuMl0sXHJcbiAgICBcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxTTFwiLCAxMjUsIDEwMF0sXHJcbiAgICBcIkxpbWVzdG9uZVwiOiBbXCJMU1RcIiwgMi43MywgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkxUQVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkxhYm9yYXRvcnkgVW5pdFwiOiBbXCJMVVwiLCA4LCA2XSxcclxuICAgIFwiTWFnbmV0aXRlXCI6IFtcIk1BR1wiLCA1LjE1LCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIE1haXplXCI6IFtcIk1BSVwiLCAxLjMsIDFdLFxyXG4gICAgXCJNb3RoZXJib2FyZFwiOiBbXCJNQlwiLCAwLjA3NSwgMC4wNzVdLFxyXG4gICAgXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiOiBbXCJNQ0JcIiwgMTAwLCAxMDBdLFxyXG4gICAgXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIjogW1wiTUNHXCIsIDAuMjQsIDAuMV0sXHJcbiAgICBcIlF1YWxpdHkgTWVhdCBNZWFsXCI6IFtcIk1FQVwiLCAwLjYsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1lZGljYWwgS2l0XCI6IFtcIk1FRFwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRW1pdHRlclwiOiBbXCJNRkVcIiwgMC4yLCAwLjhdLFxyXG4gICAgXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCI6IFtcIk1GS1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTUZMXCIsIDI0LCA0XSxcclxuICAgIFwiTWFnbmVzaXVtXCI6IFtcIk1HXCIsIDAuMjcsIDAuMTZdLFxyXG4gICAgXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIjogW1wiTUdDXCIsIDAuNiwgMC45XSxcclxuICAgIFwiTWFnbmVzaXRlXCI6IFtcIk1HU1wiLCAxLjczLCAxXSxcclxuICAgIFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJNSExcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWljcm8gSGVhZHBob25lc1wiOiBbXCJNSFBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIjogW1wiTUxJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTWljcm8tUHJvY2Vzc29yXCI6IFtcIk1QQ1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTVNMXCIsIDUwLCA1MF0sXHJcbiAgICBcIk1lZ2FUdWJlIENvYXRpbmdcIjogW1wiTVRDXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTWVhdCBUaXNzdWUgUGF0dGllc1wiOiBbXCJNVFBcIiwgMC43LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiOiBbXCJNVVNcIiwgMC44LCAxXSxcclxuICAgIFwiTWVkaXVtIFdhZmVyXCI6IFtcIk1XRlwiLCAwLjAwOCwgMC4wMDhdLFxyXG4gICAgXCJOaXRyb2dlblwiOiBbXCJOXCIsIDAuODA3LCAxXSxcclxuICAgIFwiU29kaXVtXCI6IFtcIk5BXCIsIDAuOTcsIDFdLFxyXG4gICAgXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIjogW1wiTkFCXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCI6IFtcIk5DU1wiLCAwLjAyOCwgMC4wMV0sXHJcbiAgICBcIk5lb25cIjogW1wiTkVcIiwgMC45LCAxXSxcclxuICAgIFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIjogW1wiTkZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJOYW5vIEZpYmVyXCI6IFtcIk5GSVwiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk5hbm8tQ29hdGVkIEdsYXNzXCI6IFtcIk5HXCIsIDAuMDIyLCAwLjAxXSxcclxuICAgIFwiTnlsb24gRmFicmljXCI6IFtcIk5MXCIsIDEuMTMsIDFdLFxyXG4gICAgXCJOZXVyYWwgTmV0d29ya1wiOiBbXCJOTlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE5venpsZVwiOiBbXCJOT1pcIiwgMywgMS41XSxcclxuICAgIFwiTmFuby1FbmhhbmNlZCBSZXNpblwiOiBbXCJOUlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTnV0cmllbnQgU29sdXRpb25cIjogW1wiTlNcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJOZXVyb1N0aW11bGFudHNcIjogW1wiTlNUXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgTnV0c1wiOiBbXCJOVVRcIiwgMC45LCAxXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCI6IFtcIk5WMVwiLCA0LjIsIDJdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIjogW1wiTlYyXCIsIDYuNywgM10sXHJcbiAgICBcIk94eWdlblwiOiBbXCJPXCIsIDEuMTQxLCAxXSxcclxuICAgIFwiT2ZmaWNlIFN1cHBsaWVzXCI6IFtcIk9GRlwiLCAwLjAyLCAwLjJdLFxyXG4gICAgXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiOiBbXCJPTEZcIiwgMC4wMSwgMC4wMDFdLFxyXG4gICAgXCJPcGVyYXRpbmcgU3lzdGVtXCI6IFtcIk9TXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgT3ZlcmFsbHNcIjogW1wiT1ZFXCIsIDAuMDIsIDAuMDI1XSxcclxuICAgIFwiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCI6IFtcIlBDQlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIjogW1wiUERBXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlBvbHktRXRoeWxlbmVcIjogW1wiUEVcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIlByZW1pdW0gRmVydGlsaXplclwiOiBbXCJQRkVcIiwgMC45LCAxXSxcclxuICAgIFwiUG9seW1lciBHcmFudWxhdGVcIjogW1wiUEdcIiwgMC4wMDIsIDAuMDAxXSxcclxuICAgIFwiUGluZWJlcnJpZXNcIjogW1wiUElCXCIsIDAuMywgMV0sXHJcbiAgICBcIlBhaW5raWxsZXJzXCI6IFtcIlBLXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlBvd2VyIENlbGxcIjogW1wiUE9XXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4gUGFzdGVcIjogW1wiUFBBXCIsIDIsIDFdLFxyXG4gICAgXCJQcmVzc3VyZSBTaGllbGRpbmdcIjogW1wiUFNIXCIsIDQuMiwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIExcIjogW1wiUFNMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCI6IFtcIlBTTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiOiBbXCJQU1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiUG93ZXIgVG9vbHNcIjogW1wiUFRcIiwgMC4yNSwgMC4yXSxcclxuICAgIFwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiOiBbXCJQV09cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiOiBbXCJRQ1JcIiwgMTQsIDEwXSxcclxuICAgIFwiUmFkaW8gRGV2aWNlXCI6IFtcIlJBRFwiLCAwLjAwMywgMC4wMDVdLFxyXG4gICAgXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCI6IFtcIlJBR1wiLCA1LCAzLjRdLFxyXG4gICAgXCJNZW1vcnkgQmFua1wiOiBbXCJSQU1cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiQmFzaWMgUmF0aW9uc1wiOiBbXCJSQVRcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiOiBbXCJSQkhcIiwgMi40LCAwLjldLFxyXG4gICAgXCJSYXcgQ290dG9uIEZpYmVyXCI6IFtcIlJDT1wiLCAwLjk1LCAxXSxcclxuICAgIFwiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiOiBbXCJSQ1NcIiwgMC42NywgMC41XSxcclxuICAgIFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIjogW1wiUkNUXCIsIDcsIDRdLFxyXG4gICAgXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIjogW1wiUkRFXCIsIDEuNCwgMS41XSxcclxuICAgIFwiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJETFwiLCAxNTAsIDMwXSxcclxuICAgIFwiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJEU1wiLCA1MCwgMTBdLFxyXG4gICAgXCJDaGVtaWNhbCBSZWFnZW50c1wiOiBbXCJSRUFcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlJlc2N1ZSBEcm9uZVwiOiBbXCJSRURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUmVwYWlyIEtpdFwiOiBbXCJSRVBcIiwgMC4wMDYsIDAuMDAyXSxcclxuICAgIFwiUmVpbmZvcmNlZCBHbGFzc1wiOiBbXCJSR1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIlJlZCBHb2xkXCI6IFtcIlJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiOiBbXCJSSFBcIiwgMTIsIDEwXSxcclxuICAgIFwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiOiBbXCJST01cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIlJTRVwiLCAxLjksIDAuN10sXHJcbiAgICBcIlJhZGlhdGlvbiBTaGllbGRpbmdcIjogW1wiUlNIXCIsIDMuNywgMC44XSxcclxuICAgIFwiUmF3IFNpbGsgU3RyYWluc1wiOiBbXCJSU0lcIiwgMS4xLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJSVEFcIiwgMS41LCAwLjVdLFxyXG4gICAgXCJTdWxmdXJcIjogW1wiU1wiLCAwLjUyLCAwLjI1XSxcclxuICAgIFwiU2VhcmNoIEFsZ29yaXRobVwiOiBbXCJTQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNvcnRpbmcgQWxnb3JpdGhtXCI6IFtcIlNBTFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNlbnNvciBBcnJheVwiOiBbXCJTQVJcIiwgMS43LCAyXSxcclxuICAgIFwiU3RlbSBDZWxsIFRyZWF0bWVudFwiOiBbXCJTQ1wiLCAwLjA0LCAwLjAxXSxcclxuICAgIFwiU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJTQ0JcIiwgNTAsIDUwXSxcclxuICAgIFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCI6IFtcIlNDTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdWxmdXIgQ3J5c3RhbHNcIjogW1wiU0NSXCIsIDIuMDUsIDFdLFxyXG4gICAgXCJTdXJnaWNhbCBEcm9uZVwiOiBbXCJTRFJcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIjogW1wiU0VBXCIsIDAuMTUsIDAuMDddLFxyXG4gICAgXCJTZW5zb3JcIjogW1wiU0VOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1cmdpY2FsIEVxdWlwbWVudFwiOiBbXCJTRVFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTVEwgRnVlbFwiOiBbXCJTRlwiLCAwLjA2LCAwLjA2XSxcclxuICAgIFwiU21hbGwgRlRMIEVtaXR0ZXJcIjogW1wiU0ZFXCIsIDAuMSwgMC40XSxcclxuICAgIFwiU21hbGwgRmFzdGVuZXIgS2l0XCI6IFtcIlNGS1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU0ZMXCIsIDksIDEuNV0sXHJcbiAgICBcIlNpbGljb25cIjogW1wiU0lcIiwgMi4zMjksIDFdLFxyXG4gICAgXCJTaWxrZW4gRmFicmljXCI6IFtcIlNJTFwiLCAxLjIxLCAxXSxcclxuICAgIFwiU2lsaWNvbiBPcmVcIjogW1wiU0lPXCIsIDEuNzksIDFdLFxyXG4gICAgXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCI6IFtcIlNOTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFydGlmaWNpYWwgU29pbFwiOiBbXCJTT0lcIiwgMC45LCAxXSxcclxuICAgIFwiU29sYXIgQ2VsbFwiOiBbXCJTT0xcIiwgMC4wMTUsIDAuMDFdLFxyXG4gICAgXCJTb2xhciBQYW5lbFwiOiBbXCJTUFwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJTaGlwLVJlcGFpciBEcm9uZVwiOiBbXCJTUkRcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiU1JQXCIsIDAuMSwgMC4yXSxcclxuICAgIFwiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiOiBbXCJTU0NcIiwgMSwgMV0sXHJcbiAgICBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNTTFwiLCAyMCwgMjBdLFxyXG4gICAgXCJTdGVlbFwiOiBbXCJTVExcIiwgNy44NSwgMV0sXHJcbiAgICBcIk1lZGljYWwgU3RyZXRjaGVyXCI6IFtcIlNUUlwiLCAwLjAxLCAxXSxcclxuICAgIFwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCI6IFtcIlNUU1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlN1cmdlcnkgVW5pdFwiOiBbXCJTVVwiLCA2LCA1XSxcclxuICAgIFwiU3VydmVpbGxhbmNlIERyb25lXCI6IFtcIlNVRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTYWZldHkgVW5pZm9ybVwiOiBbXCJTVU5cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlNtYWxsIFdhZmVyXCI6IFtcIlNXRlwiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJUYW50YWx1bVwiOiBbXCJUQVwiLCAxNi42NSwgMV0sXHJcbiAgICBcIlRhcmdldGluZyBDb21wdXRlclwiOiBbXCJUQUNcIiwgMC4xNSwgMV0sXHJcbiAgICBcIlRhbnRhbGl0ZSBSb2NrXCI6IFtcIlRBSVwiLCA3Ljk0LCAxXSxcclxuICAgIFwiVGVjaG5ldGl1bVwiOiBbXCJUQ1wiLCAxMS44LCAxXSxcclxuICAgIFwiVGlueSBDYXJnbyBCYXkgS2l0XCI6IFtcIlRDQlwiLCAyMCwgMjBdLFxyXG4gICAgXCJUQ0wgQWNpZFwiOiBbXCJUQ0xcIiwgMC4wOSwgMC4xXSxcclxuICAgIFwiVGVjaG5ldGl1bSBPeGlkZVwiOiBbXCJUQ09cIiwgOS44LCAxXSxcclxuICAgIFwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCI6IFtcIlRDU1wiLCAzLjQsIDEuMl0sXHJcbiAgICBcIlRyYXVtYSBDYXJlIFVuaXRcIjogW1wiVENVXCIsIDUsIDRdLFxyXG4gICAgXCJUaGVybW9GbHVpZFwiOiBbXCJUSEZcIiwgMC42LCAwLjM1XSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIlRIUFwiLCAyLjIsIDFdLFxyXG4gICAgXCJUaXRhbml1bVwiOiBbXCJUSVwiLCA0LjUsIDFdLFxyXG4gICAgXCJUaXRhbml1bSBPcmVcIjogW1wiVElPXCIsIDEuNTgsIDFdLFxyXG4gICAgXCJUZWNobm9LZXZsYXIgRmFicmljXCI6IFtcIlRLXCIsIDEuODksIDFdLFxyXG4gICAgXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCI6IFtcIlRQVVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJBdWRpbyBUcmFuc21pdHRlclwiOiBbXCJUUkFcIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNpc3RvclwiOiBbXCJUUk5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiVHJ1c3NcIjogW1wiVFJVXCIsIDAuMSwgMS41XSxcclxuICAgIFwiVGVjdG9zaWxpc2l0ZVwiOiBbXCJUU1wiLCAyLjQsIDFdLFxyXG4gICAgXCJUaGVybWFsIFNoaWVsZGluZ1wiOiBbXCJUU0hcIiwgMi40LCAxLjVdLFxyXG4gICAgXCJUZXN0IFR1YmVzXCI6IFtcIlRVQlwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJVbml2ZXJzYWwgVG9vbHNldFwiOiBbXCJVVFNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIjogW1wiVkNCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiOiBbXCJWRUdcIiwgMS4xLCAxXSxcclxuICAgIFwiVml0YUdlbFwiOiBbXCJWR1wiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJWaXRhIEVzc2VuY2VcIjogW1wiVklUXCIsIDAuOSwgMV0sXHJcbiAgICBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWU0NcIiwgMzUsIDM1XSxcclxuICAgIFwiVHVuZ3N0ZW5cIjogW1wiV1wiLCA3LjUxOSwgMV0sXHJcbiAgICBcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIjogW1wiV0FJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiOiBbXCJXQUxcIiwgNi4yNSwgMV0sXHJcbiAgICBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCI6IFtcIldDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlNtYXJ0IFppbmZhbmRlbFwiOiBbXCJXSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJXaW5kb3cgTWFuYWdlclwiOiBbXCJXTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCI6IFtcIldPUlwiLCA1LCA1XSxcclxuICAgIFwiV2F0ZXIgUmVjbGFpbWVyXCI6IFtcIldSXCIsIDYuNCwgNV0sXHJcbiAgICBcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCI6IFtcIldTXCIsIDAuMDUsIDAuNV0sXHJcbiAgICBcIlppcmNvbiBDcnlzdGFsc1wiOiBbXCJaSVJcIiwgNC44NSwgMV0sXHJcbiAgICBcIlppcmNvbml1bVwiOiBbXCJaUlwiLCA2LjUzLCAxXSxcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2FtZVByb3BlcnRpZXMudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFN0eWxlID0ge1xyXG4gICAgQnV0dG9uOiBbXCJmTVc2MmNFUm5senhaUEZobmxQT2VRPT1cIl0sXHJcbiAgICBCdXR0b25QcmltYXJ5OiBbXCJrZ0dzRE52RG9XajYxdzRJN1ZBbGZBPT1cIl0sXHJcbiAgICBCdXR0b25TdWNjZXNzOiBbXCJRVzgweHZlUW0yR0VTa1NPUlJIMjRnPT1cIl0sXHJcbiAgICBCdXR0b25EYW5nZXI6IFtcIlpGWFd5NEhDbnp0cFpObENYazgzd1E9PVwiXSxcclxuICAgIFNpZGViYXJTZWN0aW9uSGVhZDogW1wiXzJZck9NNy0yc2RLMDQyVnZINldhSmc9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiXSxcclxuICAgIFNpZGViYXJTZWN0aW9uQ29udGVudDogW1wiQ04wTlBOb3ZsWXRhSW00YnFIRmJMdz09XCIsIFwiZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09XCJdLFxyXG4gICAgU2lkZWJhckxpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcclxuICAgIEZvbnRzUmVndWxhcjogW1wiQ0JvckliRkM2WXQrRlJZRUhaeXVhQT09XCJdLFxyXG4gICAgU2lkZWJhclRleHQ6IFtcIngtbUx4RXdDLU9EaDlNWER4NER4U1E9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiLCBcIk83Ulg0elhMNGd6SExvT3dUVmJyWHc9PVwiXSxcclxuICAgIFNpZGViYXJTbGl2ZXI6IFtcIlpQc1JZQ09qN3BYNTlHWURJaU90S2c9PVwiLCBcIi1kY1lmYkNXUDcyVlMyT0Zob0RHLVE9PVwiXSxcclxuICAgIFNpZGViYXJCdXR0b246IFtcIkdIQ1B5anMzYnhoYitXWjJCR0xXSHc9PVwiXSxcclxuICAgIENvbnRyYWN0TGluZTogW1wieTg0RVVJOGdDUC1TVjkxWDd2SWloUT09XCIsIFwiZlZkM2FZSmhGWS11dWFIK1FUQnloQT09XCJdLFxyXG4gICAgQ29udHJhY3ROYW1lOiBbXCJ6aGl4cDQwOFlGMDgySXpBNUtQdmZBPT1cIl0sXHJcbiAgICBDb250cmFjdFZpZXc6IFtcImtxNUJyR0tuVFVUcUNEWU1wTFE5MGc9PVwiXSxcclxuICAgIFNldHRpbmdzQnV0dG9uOiBbXCJBMFJheHQweVM0MVpRbG56bUV2dXNnPT1cIiwgXCJuY0hySURzeE5LSDhMYk1EaWdVaVJnPT1cIl0sXHJcbiAgICBTZXR0aW5nc0JhclVudG9nZ2xlZDogW1wiWjlqWUQ4THlMWm9CUGI3SnNBUlQxdz09XCIsIFwiUDZBcmJhNTNJN2NSdnhpSDAtcERRZz09XCJdLFxyXG4gICAgU2V0dGluZ3NCYXJUb2dnbGVkOiBbXCJaOWpZRDhMeUxab0JQYjdKc0FSVDF3PT1cIiwgXCJQNkFyYmE1M0k3Y1J2eGlIMC1wRFFnPT1cIiwgXCJWLTc1dGIwM2VuR1ZkY0IrU3ctbVJBPT1cIiwgXCJ2S2tCMFc3akFUdGQ4ZFN6Z09ZRUtRPT1cIl0sXHJcbiAgICBTZXR0aW5nc1RleHQ6IFtcIllHU29xWndxa2FHMkNWbHR4TXdvT3c9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiLCBcImtXVEgxLUhrWUNXZVl5RFJnWjdvelE9PVwiLCBcIlAzc1NRa0NSVWdrcG1LVWdpZUpRdmc9PVwiXVxyXG59O1xyXG5leHBvcnQgY29uc3QgV2l0aFN0eWxlcyA9ICguLi5zdHlsZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0eWxlLnJlZHVjZSgoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKSkpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgVGV4dENvbG9ycyA9IHtcclxuICAgIEZhaWx1cmU6IFwiI2Q5NTM0ZlwiLFxyXG4gICAgU3VjY2VzczogXCIjNWNiODVjXCIsXHJcbiAgICBTdGFuZGFyZDogXCIjYmJiYmJiXCIsXHJcbiAgICBZZWxsb3c6IFwiI2Y3YTYwMFwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbG9ycyA9IHtcclxuICAgIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NiwgMjAsIDE0NyksIHJnYigxMTEsIDQ1LCAxNzIpKVwiLCBcInJnYigyMTMsIDE0NywgMjU1KVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1LCAzMCwgOTgpLCByZ2IoNDAsIDU1LCAxMjMpKVwiLCBcInJnYigxNDIsIDE1NywgMjI1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSwgMjYsIDc2KSwgcmdiKDc2LCA1MSwgMTAxKSlcIiwgXCJyZ2IoMTc4LCAxNTMsIDIwMylcIl0sXHJcbiAgICBcIm1lZGljYWwgZXF1aXBtZW50XCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NSwgMTcwLCA4NSksIHJnYigxMTAsIDE5NSwgMTEwKSlcIiwgXCJyZ2IoMjEyLCAyNTUsIDIxMilcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDEsIDc3LCAxMDcpLCByZ2IoNjYsIDEwMiwgMTMyKSlcIiwgXCJyZ2IoMTY4LCAyMDQsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgZW5naW5lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA0MSwgMCksIHJnYigxNzgsIDY2LCAyNSkpXCIsIFwicmdiKDI1NSwgMTY4LCAxMjcpXCJdLFxyXG4gICAgXCJzaGlwIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDk5LCAwKSwgcmdiKDE3OCwgMTI0LCAyNSkpXCIsIFwicmdiKDI1NSwgMjI2LCAxMjcpXCJdLFxyXG4gICAgXCJtZXRhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDU0LCA1NCwgNTQpLCByZ2IoNzksIDc5LCA3OSkpXCIsIFwicmdiKDE4MSwgMTgxLCAxODEpXCJdLFxyXG4gICAgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAyNCwgMzkpLCByZ2IoMTYxLCA0OSwgNjQpKVwiLCBcInJnYigyNTUsIDE1MSwgMTY2KVwiXSxcclxuICAgIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig5MiwgMTgsIDE4KSwgcmdiKDExNywgNDMsIDQzKSlcIiwgXCJyZ2IoMjE5LCAxNDUsIDE0NSlcIl0sXHJcbiAgICBcIm9yZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA4NywgOTcpLCByZ2IoMTA3LCAxMTIsIDEyMikpXCIsIFwicmdiKDIwOSwgMjE0LCAyMjQpXCJdLFxyXG4gICAgXCJnYXNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMTA1LCAxMDcpLCByZ2IoMjUsIDEzMCwgMTMyKSlcIiwgXCJyZ2IoMTI3LCAyMzIsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgc2hpZWxkc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjI0LCAxMzEsIDApLCByZ2IoMjQ5LCAxNTYsIDI1KSlcIiwgXCJyZ2IoMjMwIDIzMCwxMjcpXCJdLFxyXG4gICAgXCJhbGxveXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMywgNzYsIDMwKSwgcmdiKDE0OCwgMTAxLCA1NSkpXCIsIFwicmdiKDI1MCwgMjAzLCAxNTcpXCJdLFxyXG4gICAgXCJjaGVtaWNhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDIwOCwgNzEsIDExNikpXCIsIFwicmdiKDI1NSwgMTczLCAyMTgpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMzYsIDEyMSwgNDcpLCByZ2IoMTYxLCAxNDYsIDcyKSlcIiwgXCJyZ2IoMjU1LCAyNDgsIDE3NClcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGllY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTksIDgyLCAxODkpLCByZ2IoMTQ0LCAxMDcsIDIxNCkpXCIsIFwicmdiKDI0NiwgMjA5LCAyNTUpXCJdLFxyXG4gICAgXCJlbGVtZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjEsIDQ2LCAzMiksIHJnYig4NiwgNzEsIDU3KSlcIiwgXCJyZ2IoMTg4LCAxNzMsIDE1OSlcIl0sXHJcbiAgICBcIm1pbmVyYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDExMywgNzMpLCByZ2IoMTc4LCAxMzgsIDk4KSlcIiwgXCJyZ2IoMjU1LCAyNDAsIDIwMClcIl0sXHJcbiAgICBcInVuaXQgcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjksIDI3LCAyOCksIHJnYig1NCwgNTIsIDUzKSlcIiwgXCJyZ2IoMTU2LCAxNTQsIDE1NSlcIl0sXHJcbiAgICBcImxpcXVpZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNCwgMTY0LCAyMDIpLCByZ2IoMTM5LCAxODksIDIyNykpXCIsIFwicmdiKDI0MSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJlbmVyZ3kgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjEsIDYyLCAzOSksIHJnYig0NiwgODcsIDY0KSlcIiwgXCJyZ2IoMTQ4LCAxODksIDE2NilcIl0sXHJcbiAgICBcImRyb25lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQwLCA1MiwgMTgpLCByZ2IoMTY1LCA3NywgNDMpKVwiLCBcInJnYigyNTUsIDE3OSwgMTQ1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTEsIDQ2LCAxODMpLCByZ2IoMTE2LCA3MSwgMjA4KSlcIiwgXCJyZ2IoMjE4LCAxNzMsIDI1NSlcIl0sXHJcbiAgICBcInRleHRpbGVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgOTAsIDMzKSwgcmdiKDEwNywgMTE1LCA1OCkpXCIsIFwicmdiKDIwOSwgMjE3LCAxNjApXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyNCwgOTEsIDIxMSksIHJnYig0OSwgMTE2LCAyMzYpKVwiLCBcInJnYigxNTEsIDIxOCwgMjU1KVwiXSxcclxuICAgIFwic29mdHdhcmUgdG9vbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyOSwgOTgsIDE5KSwgcmdiKDE1NCwgMTIzLCA0NCkpXCIsIFwicmdiKDI1NSwgMjU1LCAxNDYpXCJdLFxyXG4gICAgXCJwbGFzdGljc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIxLCAzMSwgNjApLCByZ2IoMTQ2LCA1NiwgODUpKVwiLCBcInJnYigyNDgsIDE1OCwgMTg3KVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ5LCA0NiwgNDYpLCByZ2IoMTc0LCA3MSwgNzEpKVwiLCBcInJnYigyNTUsIDE3MywgMTczKVwiXSxcclxuICAgIFwiZnVlbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDU1LCAxNDgsIDU1KSlcIiwgXCJyZ2IoMTU3LCAyNTAsIDE1NylcIl0sXHJcbiAgICBcInNvZnR3YXJlIHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYwLCA1MywgNSksIHJnYig4NSwgNzgsIDMwKSlcIiwgXCJyZ2IoMTg3LCAxODAsIDEzMilcIl0sXHJcbiAgICBcInNoaXAga2l0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU0LCA4NCwgMCksIHJnYigxNzgsIDEwOSwgMjUpKVwiLCBcInJnYigyNTUsIDIxMSwgMTI3KVwiXSxcclxuICAgIFwidXRpbGl0eVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTYxLCAxNDgsIDEzNiksIHJnYigxODYsIDE3MywgMTYxKSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIl0sXHJcbiAgICBcInNoaXBtZW50XCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMzAzMDMsICMxODE4MTgpXCIsIFwiIzdmN2Y3ZlwiXVxyXG59O1xyXG5leHBvcnQgY29uc3QgUE1NR1N0eWxlID0gYFxyXG4udG9vbHRpcC1iYXNle1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtcclxuZm9udC1mYW1pbHk6XCJEcm9pZCBTYW5zXCIsc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOjEwcHg7XHJcbmNvbG9yOiNiYmJcclxufVxyXG4udG9vbHRpcFxyXG57XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuLnRvb2x0aXAtYmFzZTpob3ZlciAudG9vbHRpcFxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIzMjgyYjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNlbGVjdCB7XHJcblx0Ym9yZGVyOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4uZmxleC10YWJsZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4OiAxO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogbGVmdDtcclxuXHRhbGlnbi1pdGVtczogbGVmdDtcclxufVxyXG4ubGlzdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcbi5jaGF0LWxpbmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoOGVtLCAxZnIpIG1pbm1heCg4ZW0sIDRmcikgbWlubWF4KDhlbSwgMTVmcik7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxcHg7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuLnRpbWUtZGF0ZSB7XHJcblx0Y29sb3I6ICM0NDQ0NDQ7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcblx0cGFkZGluZy1yaWdodDogMHB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jaGF0LW5hbWUge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk5OTk7XHJcbn1cclxuLmNoYXQtbWVzc2FnZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6ICNiYmJiYmI7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG59XHJcbi5maW4tdGl0bGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0cGFkZGluZzogNnB4IDRweCAycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgMTYyLCAyMjIsIDAuMTUpO1xyXG59XHJcbi5idXJuLWdyZWVuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1MDM0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM5ZmJiOWY7XHJcbn1cclxuLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZTI0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNmNmRmOTQ7XHJcbn1cclxuLmJ1cm4tcmVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWEzMTMwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNjNTljOWI7XHJcbn1cclxuLmludi1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nOiAycHggOHB4O1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5pbnYtYm9keSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG5cdHBhZGRpbmc6IDVweCA4cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiA5cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHRtYXJnaW46IDFweCAycHg7XHJcbn1cclxuLnByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Y3YTYwMDt9XHJcbi54aXQtdGlsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmctdG9wOiA0cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG4ucmVmcmVzaC1idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2E2MDA7XHJcblx0Y29sb3I6ICNlZWU7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0cGFkZGluZzogMHB4IDhweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogNHB4IDhweDtcclxufVxyXG4ucmVmcmVzaC1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjMWUxZTFlO1xyXG59XHJcbi5ub3RpZmljYXRpb24ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDYycHg7XHJcblx0bWF4LXdpZHRoOiA2MnB4O1xyXG59XHJcbi5maW4tYm94IHtcclxuXHRtYXJnaW46IDFweDtcclxuXHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdHdpZHRoOiBjYWxjKDMzJSAtIDJweCk7XHJcblx0bWF4LXdpZHRoOiAxNTBweDtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIzMjgyYjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmxpbmsge1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubGluazpob3ZlciB7XHJcblx0Y29sb3I6ICNmN2E2MDAgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXQtdGV4dHtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzNjFkO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGNvbG9yOiAjY2NjY2NjO1xyXG5cdFxyXG59XHJcbi5pbnB1dC10ZXh0OmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmhpZGRlbi1lbGVtZW50e1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR2aXNpYmlsaXR5OiBmYWxzZSAhaW1wb3J0YW50O1xyXG5cdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bWFyZ2luLXRvcDogLThweDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0OmhvdmVye1xyXG5cdGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTY2LCAwKTtcclxufWA7XHJcbmV4cG9ydCBjb25zdCBFbmhhbmNlZENvbG9ycyA9IGAvKiBjb25zdW1hYmxlcyAobHV4dXJ5KSAqL1xyXG5kaXZbdGl0bGU9XCJTdGVsbGFyIFBhbGUgQWxlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEVcIl0sXHJcbi50b29sdGlwX0FMRSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NPRlwiXSxcclxuLnRvb2x0aXBfQ09GLFxyXG5kaXZbdGl0bGU9XCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR0lOXCJdLFxyXG4udG9vbHRpcF9HSU4sXHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9LT01cIl0sXHJcbi50b29sdGlwX0tPTSxcclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OU1RcIl0sXHJcbi50b29sdGlwX05TVCxcclxuZGl2W3RpdGxlPVwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFdPXCJdLFxyXG4udG9vbHRpcF9QV08sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JFUFwiXSxcclxuLnRvb2x0aXBfUkVQLFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ1wiXSxcclxuLnRvb2x0aXBfU0MsXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZHXCJdLFxyXG4udG9vbHRpcF9WRyxcclxuLnRvb2x0aXBfV0lOLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dJTlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ODAwMDAsICM3YjAwMTIpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZGI5MTkxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogYWdyaWN1bHR1cmFsIHByb2R1Y3RzICovXHJcbi50b29sdGlwX0ZPRCxcclxuLnRvb2x0aXBfQ0FGLFxyXG4udG9vbHRpcF9IT1AsXHJcbi50b29sdGlwX0dSTixcclxuLnRvb2x0aXBfTUFJLFxyXG4udG9vbHRpcF9IQ1AsXHJcbi50b29sdGlwX01UUCxcclxuLnRvb2x0aXBfUElCLFxyXG4udG9vbHRpcF9QUEEsXHJcbi50b29sdGlwX0FMRyxcclxuLnRvb2x0aXBfQkVBLFxyXG4udG9vbHRpcF9NVVMsXHJcbi50b29sdGlwX1JDTyxcclxuLnRvb2x0aXBfUlNJLFxyXG4udG9vbHRpcF9IRVIsXHJcbi50b29sdGlwX1ZFRyxcclxuLnRvb2x0aXBfTlVULFxyXG4udG9vbHRpcF9WSVQsXHJcbi50b29sdGlwX0dSQSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEFsZ2FlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEdcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQkVBXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ0FGXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZPRFwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JBXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgR3JhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUk5cIl0sXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSENQXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVSXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hPUFwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIE1haXplXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NQUlcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01UUFwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVVTXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgTnV0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlVUXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUElCXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QUEFcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JDT1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUlNJXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgRnJ1aXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WRUdcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVklUXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwMzgwMCwgIzBhNDcwOCkgIWltcG9ydGFudDtcclxuY29sb3I6ICM4YmIzN2IgIWltcG9ydGFudDtcclxufVxyXG4vKiBwbGFzdGljcyAqL1xyXG4udG9vbHRpcF9EQ0wsXHJcbi50b29sdGlwX0RDTSxcclxuLnRvb2x0aXBfRENTLFxyXG4udG9vbHRpcF9QRSxcclxuLnRvb2x0aXBfUEcsXHJcbi50b29sdGlwX1BTTCxcclxuLnRvb2x0aXBfUFNNLFxyXG4udG9vbHRpcF9QU1MsXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTFwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENNXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ1NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktRXRoeWxlbmVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BFXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEdcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU0xcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU01cIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzkxZjYyLCAjOTIzODdiKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2Y4OWVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNvbnN1bWFibGVzIChiYXNpYykgKi9cclxuLnRvb2x0aXBfRFcsXHJcbi50b29sdGlwX0VYTyxcclxuLnRvb2x0aXBfRklNLFxyXG4udG9vbHRpcF9ITVMsXHJcbi50b29sdGlwX0hTUyxcclxuLnRvb2x0aXBfTEMsXHJcbi50b29sdGlwX01FQSxcclxuLnRvb2x0aXBfTUVELFxyXG4udG9vbHRpcF9PVkUsXHJcbi50b29sdGlwX1BEQSxcclxuLnRvb2x0aXBfUFQsXHJcbi50b29sdGlwX1JBVCxcclxuLnRvb2x0aXBfU0NOLFxyXG4udG9vbHRpcF9XUyxcclxuXHJcbmRpdlt0aXRsZT1cIkRyaW5raW5nIFdhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EV1wiXSxcclxuZGl2W3RpdGxlPVwiRXhvc2tlbGV0b24gV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9FWE9cIl0sXHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GSU1cIl0sXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hNU1wiXSxcclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSFNTXCJdLFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTENcIl0sXHJcbmRpdlt0aXRsZT1cIlF1YWxpdHkgTWVhdCBNZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRURcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9PVkVcIl0sXHJcbmRpdlt0aXRsZT1cIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QREFcIl0sXHJcbmRpdlt0aXRsZT1cIlBvd2VyIFRvb2xzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QVFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgUmF0aW9uc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkFUXCJdLFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDTlwiXSxcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E2MmMyYSwgI2JhMzYzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmZjk4OWUgIWltcG9ydGFudDtcclxufVxyXG4vKiBmdWVscyAqL1xyXG4udG9vbHRpcF9TRixcclxuLnRvb2x0aXBfRkYsXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GRlwiXSxcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NGXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU0OGQyMiwgIzZiYTIzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNjYmZhYTMgIWltcG9ydGFudDtcclxufVxyXG4vKiBsaXF1aWRzICovXHJcbi50b29sdGlwX0hFWCxcclxuLnRvb2x0aXBfTEVTLFxyXG4udG9vbHRpcF9CVFMsXHJcbi50b29sdGlwX0gyTyxcclxuZGl2W3RpdGxlPVwiSGVsaW90cm9wZSBFeHRyYWN0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVhcIl0sXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBFaW5zdGVpbml1bVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTEVTXCJdLFxyXG5kaXZbdGl0bGU9XCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JUU1wiXSxcclxuZGl2W3RpdGxlPVwiV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0gyT1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2N2E4ZGEsICM2MDk4YzMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjFmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSSB3b3VsZCBsb3ZlIHRoZXNlIG5leHQgdHdvIHRvIHdvcmssIGJ1dCB0aGV5IGRvbid0IGZvciBzb21lIHJlYXNvbi4gKi9cclxuZGl2LkhXYlZPSUMycllHTnVnM1VDMmRWXFwrUVxcPVxcPSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG4vKiBmdWxsIGl0ZW0gbmFtZSBjZW50ZXJpbmcgKi9cclxuZGl2LllDcDhqaFJnNEVCRzNhUXhjaXpza1FcXD1cXD0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59YDtcclxuZXhwb3J0IGNvbnN0IEljb25TdHlsZSA9IGAvKiBQclVuSWNvbiB2MC43XHJcbiogPT09PT09PT09PT09PT09XHJcbipcclxuKiBJbnN0YWxsIENocm9tZSBhZGRvbjogU3R5bGVCb3QgXHJcbiogZ290bzogYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tXHJcbiogcmlnaHQtY2xpY2sgYW55d2hlcmUsIHNlbGVjdDogU3R5bGVCb3QgLT4gU3R5bGUgRWxlbWVudFxyXG4qIENvcHkmUGFzdGUgdGhpcyBmaWxlIGludG8gdGhlIFN0eWxlQm90IHdpbmRvd1xyXG4qL1xyXG4gXHJcbi8qIGl0ZW0gdGlja2VyIGNvbG9yLiBUaGlzIGlzIHN1Y2ggYSBiYWQgd29yayBhcm91bmQuICovXHJcbmRpdlt0aXRsZV49XCJBXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiQlwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIkNcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJEXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiRVwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIkZcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJHXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiSFwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIklcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJKXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiS1wiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIkxcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJNXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiTlwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIk9cIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJQXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiUVwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIlJcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJTXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiVFwiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIlVcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJWXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiV1wiXSBkaXYgc3BhbixcclxuZGl2W3RpdGxlXj1cIlhcIl0gZGl2IHNwYW4sXHJcbmRpdlt0aXRsZV49XCJZXCJdIGRpdiBzcGFuLFxyXG5kaXZbdGl0bGVePVwiWlwiXSBkaXYgc3BhblxyXG57XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG4gXHJcbi8qIHRhYmxlIGNvbG9yICovXHJcbnRhYmxlIHRib2R5IHRkOm50aC1jaGlsZChvZGQpXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJlO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZ29sZCBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ29sZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYXF1YTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb2xvcjogcmdiYSgxMDAlLCAwJSwgMCUsIDApO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxuICBvcGFjaXR5OiAwLjE7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHVtaW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwic2lsaWNvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGl0YW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwibGl0aGl1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiY29wcGVyIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm8tdGl0YW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZlcnJvbWluaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0dW5nc3RlblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqbXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb2xvcjogcmdiYSgxMDAlLCAwJSwgMCUsIDApO1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTcGVjaWFsaXplZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb2xvcjogcmdiYSgxMDAlLCAwJSwgMCUsIDApO1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG4gXHJcbi8qIG5vbi1jYXRlZ29yeSBjb2xvciBzcGVjaWFsIGhhY2tzKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIl0sXHJcbmRpdlt0aXRsZT1cIlJlZCBHb2xkXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYigxMjAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaGllbGRlZCBDb25uZWN0b3JzXCJdLFxyXG5kaXZbdGl0bGU9XCJCbHVlIEdvbGRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDcwIDcyIDIwMCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJBaXIgU2NydWJiZXJcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCA5NiA1OCksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuIFxyXG4vKiBcIm5vcm1hbFwiIGljb25zIGFuZCBjb2xvcnMgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gXHJcbi8qIFJBVCBpbnB1dHMgKi9cclxuZGl2W3RpdGxlXj1cIkhpZ2gtQ2FyYlwiXSxcclxuZGl2W3RpdGxlXj1cIlByb3RlaW4tUmljaFwiXSxcclxuZGl2W3RpdGxlXj1cIlRyaWdseWNlcmlkZVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoNzAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbY29udGVudD1cIklvLWRpbmVcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbi8qIG90aGVyIEFyZ3JpY3VsdHVyZSAqL1xyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdlt0aXRsZT1cIlNwaWN5IEhlcmJzXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3dlcnkgSG9wc1wiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdlt0aXRsZT1cIlBpbmViZXJyaWVzXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4gUGFzdGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJEcmlua1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFJhXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMTI2IDE3NCksIHJnYig0NiA2NiAxNDkpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIyIDgwIDU1KSwgcmdiKDE4IDc0IDEyNCkpXHJcbn1cclxuIFxyXG4vKiBjaGVtaWNhbHMgYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQ2hlbWljYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgQ3J5c3RhbHNcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJSZXNpblwiXSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXSxcclxuZGl2W3RpdGxlKj1cIkFjaWRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFcIl0sIFxyXG5kaXZbdGl0bGUqPVwiU29pbFwiXSxcclxuZGl2W3RpdGxlKj1cIlN0YWJpbGl6ZXJcIl0sXHJcbmRpdlt0aXRsZSo9XCJGZXJ0aWxpemVyXCJdLFxyXG5kaXZbdGl0bGUqPVwiVGhlcm1vRmx1aWRcIl0sXHJcbmRpdlt0aXRsZSo9XCJTb2x1dGlvblwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDExNCAzNyA2MikpXHJcbn1cclxuIFxyXG4vKiBjb25zdHJ1Y3Rpb24gYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZT1cIkluc3VGb2FtXCJdLFxyXG5kaXZbdGl0bGU9XCJFcG94eSBSZXNpblwiXSxcclxuZGl2W3RpdGxlPVwiTWVnYVR1YmUgQ29hdGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiTmFuby1DYXJib24gU2hlZXRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8tQ29hdGVkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJSZWluZm9yY2VkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiXSxcclxuZGl2W3RpdGxlPVwiR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcyIDEyNSAyMjEpLCByZ2IoMCA2NCAxNzkpKVxyXG59XHJcbiBcclxuLyogY29uc3RydWN0aW9uIHBhcnRzICovXHJcbmRpdlt0aXRsZT1cIkFlcm9zdGF0IEZvdW5kYXRpb25cIl0sXHJcbmRpdlt0aXRsZT1cIkFpciBTY3J1YmJlclwiXSxcclxuZGl2W3RpdGxlPVwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvYXRpbmcgVGFua1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvdyBDb250cm9sIERldmljZVwiXSxcclxuZGl2W3RpdGxlPVwiRmx1aWQgUGlwaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJHYXMgVmVudFwiXSxcclxuZGl2W3RpdGxlPVwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiUHJlc3N1cmUgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJSYWRpYXRpb24gU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRoZXJtYWwgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY2LCAxMDIsIDEzMiksIHJnYig0MSwgNzcsIDEwNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTVEwgRnVlbFwiXSxcclxuZGl2W3RpdGxlPVwiRlRMIEZ1ZWxcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYigzMiA5MCAzMikpXHJcbn1cclxuIFxyXG4gXHJcbi8qIGVsZWN0cm9uaWMgc3lzdGVtcyBiZyBjb2xvciAqL1xyXG5kaXZbdGl0bGU9XCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkNsaW1hdGUgQ29udHJvbGxlclwiXSxcclxuZGl2W3RpdGxlPVwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkZUTCBGaWVsZCBDb250cm9sbGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJMaWZlIFN1cHBvcnQgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJMb2dpc3RpY3MgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRhcmdldGluZyBDb21wdXRlclwiXSxcclxuZGl2W3RpdGxlPVwiQ3J5b2dlbmljIFVuaXRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3NiwgNTEsIDE0MSksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuLyogbGlmZSByZWxhdGVkIGVsZWN0cm9uaWNzIHN5c3RlbXMgYmcgY29sb3IqL1xyXG5kaXZbdGl0bGU9XCJXYXRlciBSZWNsYWltZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCA5NiA1OCksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuIFxyXG4vKiBwcmVmYWJzICovXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBEZWNrXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgQnVsa1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFRyYW5zXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEgNTQgNjYgKSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJMaWdodHdlaWdodFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg1IDk0IDM1KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJIYXJkZW5lZFwiXSwgXHJcbmRpdlt0aXRsZV49XCJSZWluZm9yY2VkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzggNDQgMjcpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIERlY2tcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUcmFuc3BcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBCdWxrXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMzUgOTQpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiaXVtXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJzaXRlXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJtaW5lcmFsXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7IG9wYWNpdHk6IDAuNDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cImNvbnRyb2xsZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46bXCI7IG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiZmlsdGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJkZXZpY2VcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBNS1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7tcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiZ2xhc3NcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SyXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuZGl2W3RpdGxlKj1cImhlYWRwaG9uZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqdcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiaG9sb2dyYXBoaWMgZ2xhc3Nlc1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkZNcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiZGlvZGVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLilrZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQqPVwiU0FSXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzY2FubmVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJzZW5zb3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkZvdW5kYXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4dcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn6eu8J+Oq/Cfjp8gKi9cclxuZGl2W3RpdGxlKj1cIm1lbW9yeVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicHJvY2Vzc1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY2lyY3VpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp9cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKvCfp6fwn46f8J+Sv/Cfk7wqL1xyXG5kaXZbdGl0bGU9XCJOb24tVm9sYXRpbGUgTWVtb3J5XCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+TgFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJzeXN0ZW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImNvbXB1dGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJtYWluZnJhbWVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5alXCI7IFxyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn46b8J+OmvCfkr7wn5K98J+Sv/Cfk4AgKi9cclxuZGl2W3RpdGxlKj1cIk5hdmlnYXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiQXJ0aWZpY2lhbFwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEYXRhXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk5ldHdvcmtcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGF0YWJhc2VcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRnJhbWV3b3JrXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk1hbmFnZW1lbnRcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiT3BlcmF0aW5nXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkludGVyZmFjZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJBbGdvcml0aG1cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWFuYWdlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SvlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJtb3RoZXJib2FyZFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwid2FmZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46rXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cImJyb2FkY2FzdGluZ1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiYW50ZW5uYVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZW1pdHRlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6FcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwibGlicmFyeVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk5ZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiV29ya3N0YXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGlzcGxheVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Su1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaWdodFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SoVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJSb2NrXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpcXVpZFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1aWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQWlyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJHYXNcIl06YmVmb3JlLFxyXG4gZGl2W3RpdGxlKj1cIkFlcm9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQXVkaW9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIpcIjtcclxuICBvcGFjaXR5OiAwLjM7IC8qIHN5c3RlbSBvdmVycmlkZSAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQb3dlclwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQ2FwYWNpdG9yXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SLXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIktpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+boFwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJUYW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uiXCI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlByb3RlY3Rpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiUGxhdGVcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2hpZWxkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uhXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNvbm5lY3RvcnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5kaXZbdGl0bGUqPVwiU2VhdHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqpFcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiU3Vic3RhbmNlXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDaGVtaWNhbFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkZsdXhcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIlJlc2luXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBY2lkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimKNcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ3J5b1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4p2EXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvaWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn6ew8J+UqvCfqbogKi9cclxuZGl2W3RpdGxlKj1cIlN1cmdpY2FsXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNZWRpY2FsXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+pulwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJNYWduZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7JcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiRGVjb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+WvFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2xhclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pqhXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG4vKiBhbGxveXMg4pmSIPCfn6oqL1xyXG5kaXZbdGl0bGUqPVwiLVRpdGFuaXVtXCJdOjpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgVGl0YW5pdW1cIl06OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJGZXJyb21pbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbiBcclxuLyogLS0tLSBNZWRpY2FsIC0tLS0tLSAqL1xyXG5kaXZbdGl0bGU9XCJBdXRvLURvY1wiXSxcclxuZGl2W3RpdGxlPVwiQmFuZGFnZXNcIl0sXHJcbmRpdlt0aXRsZT1cIk1lZGljYWwgU3RyZXRjaGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJQYWlua2lsbGVyc1wiXSxcclxuZGl2W3RpdGxlPVwiU3VyZ2ljYWwgRXF1aXBtZW50XCJdLFxyXG5kaXZbdGl0bGU9XCJUZXN0IFR1YmVzXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgMTMzIDY0KSwgcmdiKDQ4IDg2IDQ4KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkF1dG8tRG9jXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5Go4oCN4pqV77iPXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmFuZGFnZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7tcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJQYWlua2lsbGVyc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SilwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1cmdpY2FsIEVxdWlwbWVudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+pulwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJUdWJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLyog8J+bjCAqL1xyXG5kaXZbdGl0bGUqPVwiQ3JldyBRdWFydGVyc1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJUcmF1bWEgQ2FyZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bj1wiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwiSW9kaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvZGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nglwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDYXJib25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqlcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn6eC8J+Sv/CfjZnwn42l4puw8J+PlCAqL1xyXG5kaXZbdGl0bGU9XCJDaGxvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NpVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1bGZ1clwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+foVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIlRhbnRhbHVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SYXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiQ2FsY2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmVyeWxsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJNYWduZXNpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuLyog44Cw8J+niPCfp4rwn5+k8J+fpiAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkFsdW1pbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlN0ZWVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eKXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlRpdGFuaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZX49XCJUdW5nc3RlblwiXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fq1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaWxpY29uXCJdOmJlZm9yZXtcclxuICBjb250ZW50OiBcIuOAsFwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJDb3BwZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6dcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi8qIPCfn6UgKi9cclxuZGl2W3RpdGxlPVwiSXJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIFxyXG4vKiBhbGxveXMgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UtlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQmx1ZSBHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S3XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJCcm9uemVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflLpcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJvcm9zaWxpY2F0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi44CwXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuLyog8J+WiuKdl+KelvCfkogg8J+MoPCfpZbwn42h8J+nqCAqL1xyXG5kaXZbdGl0bGUqPVwiZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eoXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiYmFzaWMgZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinpZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiIHJlYWN0b3JcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46GXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpc3Npb24gcmVhY3RvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5kaXZbdGl0bGUqPVwicmFkaW9pc290b3BlIGdlbmVyYXRvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbi8qIC0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJMaW1lc3RvbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpa9cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJEcm9uZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pyIXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiT3JlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiQ3J5c3RhbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfko5cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUkPVwiR3JhaW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y+XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTWFpemVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL1cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJEcmlua1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ng1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlByb3RlaW4tUmljaCBCZWFuc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lklwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFJhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WrXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTnV0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lnFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkZydWl0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NhVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBsYW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MslwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y/XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQWxnYWVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYNcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHcmFwZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYdcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJIZXJic1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MtlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkZvZGRlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SilwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkhvcHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL5cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJDb3R0b24gRmliZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQYXR0aWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6erXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiTXVzaHJvb21zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42EXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGluZWJlcnJpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjZNcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQYXN0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lo1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlNvbHV0aW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiVml0YSBFc3NlbmNlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn422XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG4gXHJcbmRpdlt0aXRsZV49XCJXYXRlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuLyog8J+OqPCfj4Dwn4+Q4pq+ICovXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgR3JhbnVsYXRlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4+QXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUG9seS1FdGh5bGVuZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pq+XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiU2hlZXQgVHlwZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nu1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkZvYW1cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2VhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Mq1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJGaWJlclwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJGYWJyaWNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7VcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlN1cHBsaWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5OgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlVuaWZvcm1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkZZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUkPVwiVG9vbHNldFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+boFwiOyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRlRMXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIBcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNhc2luZ1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkRlY2sgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5kaXZbdGl0bGUkPVwiU3RydWN0dXJhbCBFbGVtZW50c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puTXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLyog8J+bjiAqL1xyXG5kaXZbdGl0bGUkPVwiQnVsa2hlYWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm7hcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vKiDwn4+X8J+nrfCfjKvimIDwn4yAICovXHJcbmRpdlt0aXRsZSQ9XCJBcGVydHVyZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Pl1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIlRydXNzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5e8XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG4vKiAtLS0tLSBnYXNzZXMtLS0tLS0gKi9cclxuLyog8J+SqPCflbPjgLDwn4yK8J+Mq/CfkqXwn5ui8J+ns/Cfp7TimIQgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJBbW1vbmlhXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiQXJnb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIkZsdW9yaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJOZW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJOaXRyb2dlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIk94eWdlblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SqFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJIZWxpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjIxcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGVePVwiSHlkcm9nZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqtcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJIZWxpdW0tMyBJc290b3BlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlPVwiSGVsaW90cm9wZSBFeHRyYWN0XCJdOmJlZm9yZXtcclxuICBjb250ZW50OiBcIvCfkqZcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimJVcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6elXCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUkPVwiV29yayBPdmVyYWxsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6a6XCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXSwgXHJcbmRpdlt0aXRsZSQ9XCJXb3JrIE92ZXJhbGxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjQgOTcgMTA0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfja9cIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZV49XCJFeG9zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5G34oCN4pmA77iPXCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGVePVwiUG93ZXIgVG9vbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZV49XCJFeG9zXCJdLCBcclxuZGl2W3RpdGxlPVwiUG93ZXIgVG9vbHNcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl0sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDIgMTIyIDU0KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuZGl2W3RpdGxlJD1cIkFsZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NulwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SiVwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqeKAjfCfmpJcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrVwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmFzaWMgTWVkaWNhbCBLaXRcIl0sIFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLCBcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNiAxMjQgMjcpLCByZ2IoNTcgNzMgMTQ3KSkgXHJcbn1cclxuZGl2W3RpdGxlJD1cIkFsZVwiXSwgXHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE2IDEyNCAyNyksIHJnYigxMDUgMzAgMTQ1KSkgXHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiR2luXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WDXCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+loVwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqOKAjfCfmoBcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJwZXJzb25hbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7FcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLCBcclxuZGl2W3RpdGxlPVwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIl0sIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZSQ9XCJHaW5cIl0sIFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUyIDkzIDE1OSksIHJnYigxMDUgMzAgMTQ1KSkgfVxyXG4gXHJcbiBcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn423XCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhdCBNZWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42xXCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjsgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6W8XCI7IG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5kaXZbdGl0bGU9XCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UrFwiOyBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLCBcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSwgXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTUgOTIgMTY5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuLyog8J+VueKYjvCfk54gKi9cclxuZGl2W3RpdGxlKj1cImNvbW1hbmQgYnJpZGdlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piOXCI7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIOKbsOKYouKamfCfmrDwn4yhICovXHJcbmRpdlt0aXRsZSo9XCJlbmdpbmVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5qAXCI7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJub3p6bGVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjsgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuLyog8J+nqPCfjJ/wn6ez8J+bjiAqL1xyXG5kaXZbdGl0bGUqPVwiY29tYnVzdGlvbiBjaGFtYmVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ns1wiOyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicHVtcFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwZVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicGlwaW5nXCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+asFwiOyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwidmVudFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKZqFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIFxyXG4vKiDwn5e88J+nh/CflJfim5Pwn5uh8J+TjvCflocgKi8gXHJcbmRpdlt0aXRsZSo9XCJzdHJ1Y3R1cmFsIHNwYWNlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puTXCI7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIPCfp4rwn5OmICovIFxyXG5kaXZbdGl0bGUqPVwiY2FyZ28gYmF5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TplwiOyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiaGFiaXRhdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj6BcIjsgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInN1cmdlcnkgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKalVwiOyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIFxyXG4vKvCfl4Twn46v8J+OoSovXHJcbmRpdlt0aXRsZSo9XCJlbnRlcnRhaW5tZW50IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46hXCI7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIPCfjqggKi9cclxuZGl2W3RpdGxlKj1cIndvcmtzaG9wIHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46oXCI7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbi8qIHNpemVzICovXHJcbiBcclxuZGl2W3RpdGxlKj1cInNtYWxsXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ0aW55XCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSQ9XCIgc1wiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyMHB4OyBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJtZWRpdW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlJD1cIiBtXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInRyYW5zaXN0b3JcImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIFxyXG4vKiBidWlsZGluZ3MgLSBraWxsIHN0cmF5IGljb25zICovXHJcbmRpdi5cXF82VWl2c0RoWEp5bEJyXFwrXFwrUjlmMDVPUVxcPVxcPTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1gO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TdHlsZS50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHJpY2VzKHByaWNlcywgd2ViYXBwSUQpIHtcclxuICAgIGlmICh3ZWJhcHBJRCA9PSB1bmRlZmluZWQgfHwgd2ViYXBwSUQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBXZWIgQXBwIFRpbWVvdXRcIik7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgUHJpY2VzIGZyb20gV2ViIEFwcFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmljZURhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByaWNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNba2V5XSA9IHByaWNlRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gV2ViIEFwcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMnByaWNlJTIyXCIsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENYUHJpY2VzKGN4UHJpY2VzKSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQ1ggUHJpY2UgVGltZW91dFwiKTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBDWCBQcmljZXNcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdhbnRlZFJlc3VsdHMgPSBbXCJBc2tQcmljZVwiLCBcIkJpZFByaWNlXCIsIFwiQXZlcmFnZVwiLCBcIkFza0F2YWlsXCIsIFwiQmlkQXZhaWxcIl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBDWHMgPSBbXCJBSTFcIiwgXCJDSTFcIiwgXCJDSTJcIiwgXCJJQzFcIiwgXCJOQzFcIiwgXCJOQzJcIl07XHJcbiAgICAgICAgICAgICAgICBwcmljZURhdGEuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN4UHJpY2VzW21hdFtcIlRpY2tlclwiXV0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBDWHMuZm9yRWFjaChDWCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN4UHJpY2VzW21hdFtcIlRpY2tlclwiXV1bQ1hdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbnRlZFJlc3VsdHMuZm9yRWFjaCh3YW50ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3hQcmljZXNbbWF0W1wiVGlja2VyXCJdXVtDWF1bd2FudGVkXSA9IG1hdFtDWCArIFwiLVwiICsgd2FudGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGN4UHJpY2VzW1wiQWdlXCJdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN4UHJpY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBSYWluIFByaWNlc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9yYWluL3ByaWNlc1wiLCB0cnVlKTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpIHtcclxuICAgIGlmIChidXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJ1cm4gPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChhcGlrZXkgPT0gdW5kZWZpbmVkIHx8IGFwaWtleSA9PSBudWxsIHx8IHVzZXJuYW1lID09IHVuZGVmaW5lZCB8fCB1c2VybmFtZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYnVyblt1c2VybmFtZV0gPSBbXTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQnVybiBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi91c2VyL1wiICsgdXNlcm5hbWUsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSkge1xyXG4gICAgaWYgKGJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgZ3JvdXBpZCA9PSB1bmRlZmluZWQgfHwgZ3JvdXBpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFRpbWVvdXRcIik7XHJcbiAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnZXRHcm91cEJ1cm4oYnVybiwgZ3JvdXBpZCwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBHcm91cCBCdXJuIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVybltncm91cGlkXS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi9ncm91cC9cIiArIGdyb3VwaWQsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgdXNlcm5hbWUgPT0gdW5kZWZpbmVkIHx8IHVzZXJuYW1lID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuU2V0dGluZ3MucHVzaChcImxvYWRpbmdcIik7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gU2V0dGluZ3MgVGltZW91dFwiKTtcclxuICAgICAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IFJldHJlaXZlZCBCdXJuIFNldHRpbmdzIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVyblNldHRpbmdzWzBdID0gXCJsb2FkZWRcIjtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5ncy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3VzZXJzZXR0aW5ncy9idXJucmF0ZS9cIiArIHVzZXJuYW1lLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBGbGlnaHRFVEFzIH0gZnJvbSBcIi4vRmxpZ2h0RVRBc1wiO1xyXG5pbXBvcnQgeyBMb2NhbE1hcmtldEFkcyB9IGZyb20gJy4vTG9jYWxNYXJrZXRBZHMnO1xyXG5pbXBvcnQgeyBNb2R1bGVSdW5uZXIgfSBmcm9tIFwiLi9Nb2R1bGVSdW5uZXJcIjtcclxuaW1wb3J0IHsgT3JkZXJFVEFzIH0gZnJvbSBcIi4vT3JkZXJFVEFzXCI7XHJcbmltcG9ydCB7IENvbnN1bWFibGVUaW1lcnMgfSBmcm9tIFwiLi9Db25zdW1hYmxlVGltZXJzXCI7XHJcbmltcG9ydCB7IEZsZWV0RVRBcyB9IGZyb20gXCIuL0ZsZWV0RVRBc1wiO1xyXG5pbXBvcnQgeyBQb3N0TE0gfSBmcm9tIFwiLi9Qb3N0TE1cIjtcclxuaW1wb3J0IHsgU2hpcHBpbmdBZHMgfSBmcm9tIFwiLi9TaGlwcGluZ0Fkc1wiO1xyXG5pbXBvcnQgeyBRdWV1ZUxvYWQgfSBmcm9tIFwiLi9RdWV1ZUxvYWRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0UHJpY2VzLCBnZXRCdXJuLCBnZXRCdXJuU2V0dGluZ3MgfSBmcm9tIFwiLi9CYWNrZ3JvdW5kUnVubmVyXCI7XHJcbmltcG9ydCB7IFBNTUdTdHlsZSwgRW5oYW5jZWRDb2xvcnMsIEljb25TdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IFNjcmVlblVucGFjayB9IGZyb20gXCIuL1NjcmVlblVucGFja1wiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBDb21tYW5kQ29ycmVjdGVyIH0gZnJvbSBcIi4vQ29tbWFuZENvcnJlY3RlclwiO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yQnV0dG9uIH0gZnJvbSBcIi4vQ2FsY3VsYXRvckJ1dHRvblwiO1xyXG5pbXBvcnQgeyBDb250cmFjdERyYWZ0cyB9IGZyb20gXCIuL0NvbnRyYWN0RHJhZnRzXCI7XHJcbnRyeSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFwiUE1NR0V4dGVuZGVkXCIpLnRoZW4obWFpblJ1biwgb25FcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmVGb3ggZGV0ZWN0ZWRcIik7XHJcbn1cclxuY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJDaHJvbWl1bSBkZXRlY3RlZFwiKTtcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJQTU1HRXh0ZW5kZWRcIl0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBtYWluUnVuKHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBtYWluUnVuKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0gPSB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgVGltZSBMb2FkaW5nIFBNTUdcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICBzdHlsZS5pZCA9IFwicG1tZy1zdHlsZVwiO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBQTU1HU3R5bGU7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcclxuICAgIGlmIChkb2MpIHtcclxuICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID0gW1wiU2NyZWVuVW5wYWNrXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImVuaGFuY2VkXCIgfHwgIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBjb2xvcnMudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBjb2xvcnMuaWQgPSBcInBtbWctZW5oYW5jZWQtY29sb3JzXCI7XHJcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gRW5oYW5jZWRDb2xvcnM7XHJcbiAgICAgICAgaWYgKGRvYykge1xyXG4gICAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoY29sb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPT0gXCJpY29uc1wiKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIGNvbG9ycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG4gICAgICAgIGNvbG9ycy5pZCA9IFwicG1tZy1pY29uLWNvbG9yc1wiO1xyXG4gICAgICAgIGNvbG9ycy50ZXh0Q29udGVudCA9IEljb25TdHlsZTtcclxuICAgICAgICBpZiAoZG9jKSB7XHJcbiAgICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZChjb2xvcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBwcmljZXMgPSB7fTtcclxuICAgIGdldFByaWNlcyhwcmljZXMsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdKTtcclxuICAgIHZhciBidXJuID0gW107XHJcbiAgICBnZXRCdXJuKGJ1cm4sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xyXG4gICAgdmFyIGJ1cm5TZXR0aW5ncyA9IFtdO1xyXG4gICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSk7XHJcbiAgICBjb25zdCBydW5uZXIgPSBuZXcgTW9kdWxlUnVubmVyKFtcclxuICAgICAgICBuZXcgTG9jYWxNYXJrZXRBZHMoKSxcclxuICAgICAgICBuZXcgT3JkZXJFVEFzKCksXHJcbiAgICAgICAgbmV3IEZsaWdodEVUQXMoKSxcclxuICAgICAgICBuZXcgU2hpcHBpbmdBZHMoKSxcclxuICAgICAgICBuZXcgUG9zdExNKHByaWNlcyksXHJcbiAgICAgICAgbmV3IENvbnRyYWN0RHJhZnRzKHByaWNlcyksXHJcbiAgICAgICAgbmV3IFF1ZXVlTG9hZCgpLFxyXG4gICAgICAgIG5ldyBDb25zdW1hYmxlVGltZXJzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBidXJuLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0pLFxyXG4gICAgICAgIG5ldyBGbGVldEVUQXMoKSxcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9ucygpLFxyXG4gICAgICAgIG5ldyBTY3JlZW5VbnBhY2socmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0pLFxyXG4gICAgICAgIG5ldyBDb21tYW5kQ29ycmVjdGVyKCksXHJcbiAgICAgICAgbmV3IENhbGN1bGF0b3JCdXR0b24oKSxcclxuICAgICAgICBuZXcgU2lkZWJhcihyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKVxyXG4gICAgXSwgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MpO1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBydW5uZXIubG9vcCgpO1xyXG4gICAgfSkoKTtcclxufVxyXG5mdW5jdGlvbiBvbkVycm9yKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGlnaHRFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zZmMtZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIlNGQyBcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZUR1cmF0aW9uKGV0YURhdGEudGV4dENvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICBldGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsaWdodEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbE1hcmtldEFkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbG0tYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKEJVWUlOR3xTRUxMSU5HfENPUlApXFxzKFxcZCspXFxzLipcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zvci8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQobWF0Y2hlc1szXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJJdGVtID0gdG9GaXhlZCh0b3RhbENlbnRzIC8gY291bnQgLyAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0gZWEpYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTG9jYWxNYXJrZXRBZHMudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgWElUSGFuZGxlciB9IGZyb20gXCIuL1hJVEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2hvd0J1ZmZlciB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIE1vZHVsZVJ1bm5lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGVzLCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXMubWFwKG0gPT4gdGhpcy5tb2R1bGVUb01FKG0pKTtcclxuICAgICAgICB0aGlzLnhpdCA9IG5ldyBYSVRIYW5kbGVyKHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCB0aGlzLm1vZHVsZXMpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlTW9kdWxlcyhyZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQWN0aXZlTW9kdWxlcyhyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gIT0gdW5kZWZpbmVkICYmIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1vZHVsZVRvTUUobW9kdWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgICAgICBuYW1lOiBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGNsZWFudXBUaW1lOiAwLFxyXG4gICAgICAgICAgICBydW5UaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy54aXQucnVuKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdID0gc2hvd0J1ZmZlcihcIlhJVCBTVEFSVFwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3ModGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVuVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDE7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5ydW5UaW1lICs9IHJ1blRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvb3AoKSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3MocmVzdWx0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kdWxlUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFhJVFByZUZ1bmN0aW9ucywgWElUQnVmZmVyVGl0bGVzIH0gZnJvbSBcIi4vWElURnVuY3Rpb25zXCI7XHJcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXhpdFwiO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy5idXJuU2V0dGluZ3MgPSBidXJuU2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJYSVRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgdmFyIGJ1cm5TZXR0aW5ncyA9IHRoaXMuYnVyblNldHRpbmdzO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGlsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpO1xyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZUZsb2F0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsIHx8IHRpbGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbGUuZmlyc3RDaGlsZCAhPSB1bmRlZmluZWQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbG9hZC1zdWNjZXNzXCIgfHwgdGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1uby1tYXRjaFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnNSYXcgPSBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlckhlYWRlcikpWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1JhdyA9PSB1bmRlZmluZWQgfHwgcGFyYW1ldGVyc1JhdyA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyc1Jhdy5jaGFyQXQoNCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHBhcmFtZXRlcnNSYXcuc2xpY2UoNCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWVzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2goa2V5LnNsaWNlKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycyA9PSB1bmRlZmluZWQgfHwgcGFyYW1ldGVycyA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkICE9IHVuZGVmaW5lZCAmJiB0aWxlLmZpcnN0Q2hpbGQuaWQgPT0gXCJwbW1nLXJlbG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXSh0aWxlLmZpcnN0Q2hpbGQsIHBhcmFtZXRlcnMsIHRoaXMucmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwieGl0LXRpbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRpbGUuZmlyc3RDaGlsZCB8fCAodGlsZS5maXJzdENoaWxkICE9IHVuZGVmaW5lZCAmJiAodGlsZS5maXJzdENoaWxkLmlkICE9IFwicG1tZy1uby1tYXRjaFwiKSkpIHtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCLin7NcIikpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXVwcGVyLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMTJweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5pZCA9IFwicmVmcmVzaFwiO1xyXG4gICAgICAgICAgICAgICAgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmluc2VydEJlZm9yZShyZWZyZXNoQnV0dG9uLCAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgY29uc3QgcHJlRnVuYyA9IFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICBpZiAocHJlRnVuYyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBGdW5jdGlvbiFcIjtcclxuICAgICAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGlsZS5maXJzdENoaWxkLmlkID0gXCJwbW1nLW5vLW1hdGNoXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlclRpdGxlKSlbMF0udGV4dENvbnRlbnQgPSBYSVRCdWZmZXJUaXRsZXNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZXMgPSB0aGlzLm1vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpOyB9KTtcclxuICAgICAgICAgICAgICAgIHRpbGUuZmlyc3RDaGlsZC5pZCA9IFwicG1tZy1sb2FkLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgIHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgdGhpcy5yZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQsIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBjcmVhdGVMaW5rLCBzaG93QnVmZmVyLCBjcmVhdGVUYWJsZSwgY3JlYXRlU2VsZWN0T3B0aW9uLCBkb3dubG9hZEZpbGUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFRleHRDb2xvcnMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgZ2V0R3JvdXBCdXJuIH0gZnJvbSBcIi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5pbXBvcnQgeyBTdHlsZSwgV2l0aFN0eWxlcyB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNvbnN0IFhJVFByZUZ1bmN0aW9ucyA9IHtcclxuICAgIFwiSU5WXCI6IEZJT0ludl9wcmUsXHJcbiAgICBcIkRJU0NPUkRcIjogRGlzY29yZF9wcmUsXHJcbiAgICBcIlNIRUVUU1wiOiBTaGVldHNfcHJlLFxyXG4gICAgXCJQUk9TUEVSSVRZXCI6IFByb3NwZXJpdHlfcHJlLFxyXG4gICAgXCJQUlVOXCI6IFBSdU5fcHJlLFxyXG4gICAgXCJTSEVFVFRBQkxFXCI6IFNoZWV0VGFibGVfcHJlLFxyXG4gICAgXCJGSU5cIjogRmluX3ByZSxcclxuICAgIFwiQ0hBVFwiOiBDaGF0X3ByZSxcclxuICAgIFwiQlVSTlwiOiBFbmhhbmNlZEJ1cm5fcHJlLFxyXG4gICAgXCJTRVRUSU5HU1wiOiBTZXR0aW5nc19wcmUsXHJcbiAgICBcIkNPTlRSQUNUU1wiOiBDb250cmFjdHNfcHJlLFxyXG4gICAgXCJSRVBBSVJTXCI6IFJlcGFpcnNfcHJlLFxyXG4gICAgXCJDQUxDVUxBVE9SXCI6IENhbGN1bGF0b3JfcHJlLFxyXG4gICAgXCJDQUxDXCI6IENhbGN1bGF0b3JfcHJlLFxyXG4gICAgXCJTVEFSVFwiOiBTdGFydF9wcmUsXHJcbiAgICBcIkRFQlVHXCI6IERlYnVnX3ByZVxyXG59O1xyXG5leHBvcnQgY29uc3QgWElUQnVmZmVyVGl0bGVzID0ge1xyXG4gICAgXCJJTlZcIjogXCJGSU8gSU5WRU5UT1JZXCIsXHJcbiAgICBcIkRJU0NPUkRcIjogXCJESVNDT1JEIFNFUlZFUlwiLFxyXG4gICAgXCJTSEVFVFNcIjogXCJHT09HTEUgU0hFRVRTXCIsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogXCJQUk9TUEVSSVRZXCIsXHJcbiAgICBcIlBSVU5cIjogXCJQUlVOLUNFUFRJT05cIixcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBcIkdPT0dMRSBTSEVFVFMgVEFCTEVcIixcclxuICAgIFwiRklOXCI6IFwiRklOQU5DSUFMIE9WRVJWSUVXXCIsXHJcbiAgICBcIkNIQVRcIjogXCJDSEFUXCIsXHJcbiAgICBcIkJVUk5cIjogXCJFTkhBTkNFRCBCVVJOXCIsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFwiUE1NRyBTRVRUSU5HU1wiLFxyXG4gICAgXCJDT05UUkFDVFNcIjogXCJQRU5ESU5HIENPTlRSQUNUU1wiLFxyXG4gICAgXCJSRVBBSVJTXCI6IFwiUkVQQUlSU1wiLFxyXG4gICAgXCJDQUxDXCI6IFwiQ0FMQ1VMQVRPUlwiLFxyXG4gICAgXCJDQUxDVUxBVE9SXCI6IFwiQ0FMQ1VMQVRPUlwiLFxyXG4gICAgXCJTVEFSVFwiOiBcIlNUQVJUSU5HIFdJVEggUE1NR1wiLFxyXG4gICAgXCJERUJVR1wiOiBcIkRFQlVHXCJcclxufTtcclxuY29uc3QgRGlzY29yZFNlcnZlcnMgPSB7XHJcbiAgICBcIlVGT1wiOiBbXCI4NTU0ODgzMDk4MDIxNzI0NjlcIiwgXCI4NTU0ODk3MTE2MzU0MzE0NzVcIl0sXHJcbiAgICBcIkZJT0NcIjogW1wiODA3OTkyNjQwMjQ3MzAwMTE2XCIsIFwiODA4NDUxNTEyMzUxMTk1MTY2XCJdLFxyXG4gICAgXCJBSElcIjogW1wiNzA0OTA3NzA3NjM0OTQxOTgyXCIsIFwiNzk3MTU3ODc3MzI0MTg1NjUwXCJdLFxyXG4gICAgXCJQQ1RcIjogW1wiNjY3NTUxNDMzNTAzMDE0OTI0XCIsIFwiNjY3NTUxNDMzNTAzMDE0OTI3XCJdXHJcbn07XHJcbmZ1bmN0aW9uIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgY2FsbGJhY2tGdW5jdGlvbiwgdXJsLCByZXF1ZXN0VHlwZSA9IFwiR0VUXCIsIGhlYWRlciwgY29udGVudCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgRGF0YSBDb3VsZCBOb3QgQmUgTG9hZGVkISBUaW1lZCBPdXQhXCI7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHRpbGUsIHBhcmFtZXRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKHJlcXVlc3RUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgeGhyLnNlbmQoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuKGVsZW0pIHtcclxuICAgIGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uY2hpbGRyZW5bMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3Qgd2FybmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdhcm5pbmdEaXYpO1xyXG4gICAgd2FybmluZ0Rpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xyXG4gICAgd2FybmluZ0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlNldHRpbmdzIGNoYW5nZXMgcmVxdWlyZSBhIHJlZnJlc2ggdG8gdGFrZSBlZmZlY3QuXCIpKTtcclxuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQXV0aGVudGljYXRpb24gU2V0dGluZ3NcIikpO1xyXG4gICAgYXV0aGVudGljYXRpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhdXRoZW50aWNhdGlvbkhlYWRlcik7XHJcbiAgICBjb25zdCB1c2VybmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJGSU8gVXNlcm5hbWU6IFwiKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gfHwgXCJcIjtcclxuICAgIHVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSA9ICF1c2VybmFtZUlucHV0LnZhbHVlIHx8IHVzZXJuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiA/IHVuZGVmaW5lZCA6IHVzZXJuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xyXG4gICAgdXNlcm5hbWVEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHVzZXJuYW1lRGl2KTtcclxuICAgIGNvbnN0IGFwaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhcGlMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIEFQSSBLZXk6IFwiKTtcclxuICAgIGFwaUxhYmVsLnN0eWxlLm1pbldpZHRoID0gXCI3N3B4XCI7XHJcbiAgICBhcGlMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbnN0IGFwaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYXBpSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0gfHwgXCJcIjtcclxuICAgIGFwaUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdID0gIWFwaUlucHV0LnZhbHVlIHx8IGFwaUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiBhcGlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBhcGlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGFwaUlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICBhcGlEaXYuYXBwZW5kQ2hpbGQoYXBpTGFiZWwpO1xyXG4gICAgYXBpRGl2LmFwcGVuZENoaWxkKGFwaUlucHV0KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYXBpRGl2KTtcclxuICAgIGNvbnN0IHdlYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3ZWJMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiV2ViIEFwcCBJRDogXCIpO1xyXG4gICAgd2ViTGFiZWwuc3R5bGUubWluV2lkdGggPSBcIjc3cHhcIjtcclxuICAgIHdlYkxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29uc3Qgd2ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB3ZWJJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdIHx8IFwiXCI7XHJcbiAgICB3ZWJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID0gIXdlYklucHV0LnZhbHVlIHx8IHdlYklucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB3ZWJJbnB1dC52YWx1ZTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB3ZWJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHdlYkRpdi5hcHBlbmRDaGlsZCh3ZWJMYWJlbCk7XHJcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViSW5wdXQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJEaXYpO1xyXG4gICAgY29uc3QgbW9kdWxlU2V0dGluZ3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNb2R1bGUgU2V0dGluZ3NcIikpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChtb2R1bGVTZXR0aW5nc0hlYWRlcik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG1vZHVsZXMuZm9yRWFjaChtcCA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlNpZGViYXJMaW5lLCBTdHlsZS5Gb250c1JlZ3VsYXIpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4obXAubmFtZSkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICByaWdodC5zdHlsZS5mbGV4R3JvdyA9IFwiMVwiO1xyXG4gICAgICAgIHJpZ2h0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IG1ha2VUb2dnbGVCdXR0b24oXCJPblwiLCBcIk9mZlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSAhbXAuZW5hYmxlZDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdW2ldID09IG1wLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghbXAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLnB1c2gobXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICB9LCBtcC5lbmFibGVkKTtcclxuICAgICAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgbXAuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBcIk9mZlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0b2dnbGUpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBtYWtlUHVzaEJ1dHRvbihcInhcIiwgKCkgPT4gbXAubW9kdWxlLmNsZWFudXAodHJ1ZSkpO1xyXG4gICAgICAgIGNsZWFudXAuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjhweFwiO1xyXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNsZWFudXApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZW5oYW5jZWRDb2xvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29sb3IgU2NoZW1lXCIpKTtcclxuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChlbmhhbmNlZENvbG9ySGVhZGVyKTtcclxuICAgIGNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIkNvbG9yIFNjaGVtZTpcIik7XHJcbiAgICBjb2xvckxhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcclxuICAgIGNvbnN0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIGNvbG9yU2VsZWN0Lm5hbWUgPSBcImNvbG9ycy1zZWxlY3RcIjtcclxuICAgIGNvbG9yU2VsZWN0LmlkID0gXCJjb2xvcnMtc2VsZWN0XCI7XHJcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJFbmhhbmNlZFwiLCBcImVuaGFuY2VkXCIpKTtcclxuICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdE9wdGlvbihcIkljb25zXCIsIFwiaWNvbnNcIikpO1xyXG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiRGVmYXVsdFwiLCBcImRlZmF1bHRcIikpO1xyXG4gICAgY29sb3JTZWxlY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcclxuICAgIGNvbG9yU2VsZWN0LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImVuaGFuY2VkXCIgfHwgIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSkge1xyXG4gICAgICAgIGNvbG9yU2VsZWN0LmNoaWxkcmVuWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9PSBcImljb25zXCIpIHtcclxuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblsxXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblsyXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb2xvclNlbGVjdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImNvbG9yX3NjaGVtZVwiXSA9IGNvbG9yU2VsZWN0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29sb3JEaXYuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb2xvckRpdik7XHJcbiAgICBjb25zdCBidXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGJ1cm5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBidXJuTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJCdXJuIFNldHRpbmdzXCIpKTtcclxuICAgIGJ1cm5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBidXJuTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoYnVybkxhYmVsKTtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdID0gWzMsIDddO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoc2V0RGl2KTtcclxuICAgIHNldERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHJlZERpdik7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJSZWQgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgcmVkSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByZWRJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHJlZEluLnZhbHVlID0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbM10pWzBdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQocmVkSW4pO1xyXG4gICAgcmVkSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICByZWRJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgcmVkSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl1bMF0gPSBwYXJzZUZsb2F0KHJlZEluLnZhbHVlKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB5ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHllbERpdik7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJZZWxsb3cgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgeWVsSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB5ZWxJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHllbEluLnZhbHVlID0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoeWVsSW4pO1xyXG4gICAgeWVsSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICB5ZWxJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgeWVsSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl1bMV0gPSBwYXJzZUZsb2F0KHllbEluLnZhbHVlKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJ1cm5EaXYpO1xyXG4gICAgY29uc3Qgc2NyZWVuVW5wYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHNjcmVlblVucGFja0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNjcmVlbiBVbnBhY2sgRXhjbHVzaW9uc1wiKSk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzY3JlZW5VbnBhY2tIZWFkZXIpO1xyXG4gICAgY29uc3Qgbm90aWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChub3RpZkRpdik7XHJcbiAgICBub3RpZkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkxpc3Qgc2NyZWVuIG5hbWVzIHNlcGFyYXRlZCBieSBjb21tYXMsIG5vIHNwYWNlcy5cIikpO1xyXG4gICAgY29uc3QgZXhjbHVzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0gPT0gdW5kZWZpbmVkID8gXCJcIiA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdLmpvaW4oXCIsXCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1bnBhY2tfZXhjZXB0aW9uc1wiXSA9IGV4Y2x1c2lvbklucHV0LnZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGV4Y2x1c2lvbklucHV0KTtcclxuICAgIGNvbnN0IGhvdGtleUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBob3RrZXlIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMZWZ0IFNpZGViYXIgQnV0dG9uc1wiKSk7XHJcbiAgICBob3RrZXlIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlIZWFkZXIpO1xyXG4gICAgY29uc3QgaG90a2V5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlJbnB1dERpdik7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gW1tcIkJTXCIsIFwiQlNcIl0sIFtcIkNPTlRcIiwgXCJDT05UU1wiXSwgW1wiQ09NXCIsIFwiQ09NXCJdLCBbXCJDT1JQXCIsIFwiQ09SUFwiXSwgW1wiQ1hMXCIsIFwiQ1hMXCJdLCBbXCJGSU5cIiwgXCJGSU5cIl0sIFtcIkZMVFwiLCBcIkZMVFwiXSwgW1wiSU5WXCIsIFwiSU5WXCJdLCBbXCJNQVBcIiwgXCJNQVBcIl0sIFtcIlBST0RcIiwgXCJQUk9EXCJdLCBbXCJDTURTXCIsIFwiQ01EU1wiXSwgW1wiU0VUXCIsIFwiWElUIFNFVFRJTkdTXCJdXTtcclxuICAgIH1cclxuICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0uZm9yRWFjaChob3RrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgaG90a2V5SW5wdXREaXYpO1xyXG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBob3RrZXlJbnB1dERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG1ha2VQdXNoQnV0dG9uKFwiK1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKFtbXSwgW11dLCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBTdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgY29uc3QgaW1wb3J0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGltcG9ydEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkltcG9ydC9FeHBvcnQgU2V0dGluZ3NcIikpO1xyXG4gICAgaW1wb3J0SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0SGVhZGVyKTtcclxuICAgIGNvbnN0IGltcG9ydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaW1wb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJJbXBvcnQgU2V0dGluZ3NcIjtcclxuICAgIGltcG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBpbXBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGltcG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGltcG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGltcG9ydEJ1dHRvbik7XHJcbiAgICBjb25zdCBpbXBvcnRGaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbXBvcnRGaWxlSW5wdXQudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgaW1wb3J0RmlsZUlucHV0LmFjY2VwdCA9IFwiLmpzb25cIjtcclxuICAgIGltcG9ydEZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0RmlsZUlucHV0KTtcclxuICAgIGltcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGltcG9ydEZpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXJyb3JUZXh0Qm94ID0gY3JlYXRlVGV4dFNwYW4oXCJFcnJvciBMb2FkaW5nIEZpbGUhXCIpO1xyXG4gICAgZXJyb3JUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChlcnJvclRleHRCb3gpO1xyXG4gICAgaW1wb3J0RmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghZSB8fCAhZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU91dHB1dCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVPdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhjbHVkZSA9IFtcInVzZXJuYW1lXCIsIFwiYXBpa2V5XCIsIFwid2ViYXBwaWRcIl07XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWxlT3V0cHV0KS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW2tleV0gPSBmaWxlT3V0cHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0Qm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRXJyb3IgZW5jb3VudGVyZWQgcHJvY2Vzc2luZyBmaWxlIVwiKTtcclxuICAgICAgICAgICAgICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZXhwb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFeHBvcnQgU2V0dGluZ3NcIjtcclxuICAgIGV4cG9ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBleHBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGV4cG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGV4cG9ydEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGV4cG9ydEJ1dHRvbik7XHJcbiAgICBleHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuICAgICAgICBjb25zdCBleGNsdWRlID0gW1widXNlcm5hbWVcIiwgXCJhcGlrZXlcIiwgXCJ3ZWJhcHBpZFwiXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl0pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb3dubG9hZEZpbGUob3V0cHV0LCBcInBtbWctc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIik7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1wb3J0RGl2KTtcclxuICAgIHJldHVybiBbcGFyYW1ldGVycywgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5nc107XHJcbn1cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3MocmVzdWx0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogQ29uZmlndXJhdGlvbiBTYXZlZC5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRQYWlyKGhvdGtleSwgcmVzdWx0LCBmdWxsRGl2KSB7XHJcbiAgICBpZiAoaG90a2V5Lmxlbmd0aCAhPSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRpc3BsYXllZFZhbHVlKTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21tYW5kLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgY29tbWFuZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjb21tYW5kKTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IG1ha2VQdXNoQnV0dG9uKFwiWFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbW1hbmQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXllZFZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZGl2LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW0gPT4geyBkaXYucmVtb3ZlQ2hpbGQoZWxlbSk7IHJldHVybjsgfSk7XHJcbiAgICB9LCBTdHlsZS5CdXR0b25EYW5nZXIpO1xyXG4gICAgcmVtb3ZlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS52YWx1ZSA9IGhvdGtleVswXTtcclxuICAgIGNvbW1hbmQudmFsdWUgPSBob3RrZXlbMV07XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob3RrZXlzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBob3RrZXlzLnB1c2goW29wdGlvbi5jaGlsZHJlblswXS52YWx1ZSwgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInNpZGViYXJcIl0gPSBob3RrZXlzO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbW1hbmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZnVsbERpdi5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gaG90a2V5cztcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VQdXNoQnV0dG9uKHRleHQsIGYsIHN0eWxlID0gU3R5bGUuQnV0dG9uUHJpbWFyeSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uc3R5bGUpO1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmO1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b24ob24sIG9mZiwgZiwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgY29uc3Qgc2V0TG9vayA9IChzKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IHMgPyBvbiA6IG9mZjtcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFN0cmluZyhzdGF0ZSkpO1xyXG4gICAgc2V0TG9vayhzdGF0ZSk7XHJcbiAgICB0b2dnbGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICEodG9nZ2xlLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIikgPT09IFwidHJ1ZVwiKTtcclxuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcobmV3U3RhdGUpKTtcclxuICAgICAgICBzZXRMb29rKG5ld1N0YXRlKTtcclxuICAgICAgICBmKCk7XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICByZXR1cm4gdG9nZ2xlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTdGFydF9wcmUodGlsZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHRpbGUuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHRpbGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjJweFwiO1xyXG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZVRleHRTcGFuKFwiVGhhbmsgeW91IGZvciB1c2luZyBQTU1HIEV4dGVuZGVkIVwiKTtcclxuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgd2VsY29tZS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJUaGlzIGlzIGEgc2hvcnQgdHV0b3JpYWwgb24gaG93IHRvIGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIGV4dGVuc2lvbi5cIikpO1xyXG4gICAgY29uc3Qgd2Vic2l0ZUxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2Vic2l0ZUxpbmtEaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3ZWJzaXRlTGlua0Rpdik7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkRldGFpbHMgb24gd2hhdCBQTU1HIG9mZmVycyBjYW4gYmUgZm91bmQgaGVyZTogXCIpKTtcclxuICAgIGNvbnN0IHdlYnNpdGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB3ZWJzaXRlTGluay5ocmVmID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9wbW1nZXh0ZW5kZWQvaG9tZT9hdXRodXNlcj0wXCI7XHJcbiAgICB3ZWJzaXRlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB3ZWJzaXRlTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIHdlYnNpdGVMaW5rLnRleHRDb250ZW50ID0gXCJQTU1HIEV4dGVuZGVkXCI7XHJcbiAgICB3ZWJzaXRlTGlua0Rpdi5hcHBlbmRDaGlsZCh3ZWJzaXRlTGluayk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiU3RhcnQgYnkgb3BlbmluZyBhIG5ldyBidWZmZXIgYW5kIGVudGVyaW5nIFwiKSk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0xpbmsgPSBjcmVhdGVMaW5rKFwiWElUIFNFVFRJTkdTXCIsIFwiWElUIFNFVFRJTkdTXCIpO1xyXG4gICAgc2V0dGluZ3NMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGZpb0Rpdik7XHJcbiAgICBmaW9EaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiRklPIGlzIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBnYXRoZXJzIGRhdGEgZnJvbSB5b3VyIGdhbWUuIFBNTUcgRXh0ZW5kZWQgdXNlcyB0aGF0IGRhdGEgdG8gZGlzcGxheSB1c2VmdWwgaW5mb3JtYXRpb24uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpbnN0YWxsaW5nIEZJTyBoZXJlOiBcIikpO1xyXG4gICAgY29uc3QgZmlvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZmlvTGluay5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9cIjtcclxuICAgIGZpb0xpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBmaW9MaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgZmlvTGluay50ZXh0Q29udGVudCA9IFwiRklPIFdlYnNpdGVcIjtcclxuICAgIGZpb0Rpdi5hcHBlbmRDaGlsZChmaW9MaW5rKTtcclxuICAgIGNvbnN0IGZpb0RpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYyKTtcclxuICAgIGZpb0RpdjIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgZmlvRGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIklmIHlvdSBhbHJlYWR5IGhhdmUgYSBGSU8gYWNjb3VudCwgYWRkIHlvdXIgdXNlcm5hbWUgYW5kIEFQSSBLZXkgdG8gdGhlIHRleHQgYm94ZXMgb24gWElUIFNFVFRJTkdTLiBZb3UgY2FuIGdlbmVyYXRlIGFuIEFQSSBLZXkgXCIpKTtcclxuICAgIGNvbnN0IGZpb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBmaW9MaW5rMi5ocmVmID0gXCJodHRwczovL2Zpby5mbmFyLm5ldC9zZXR0aW5nc1wiO1xyXG4gICAgZmlvTGluazIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGZpb0xpbmsyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZmlvTGluazIuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBmaW9MaW5rMi50ZXh0Q29udGVudCA9IFwiaGVyZS5cIjtcclxuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoZmlvTGluazIpO1xyXG4gICAgY29uc3Qgd2ViQXBwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2ViQXBwRGl2KTtcclxuICAgIHdlYkFwcERpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICB3ZWJBcHBEaXYuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMjBweFwiO1xyXG4gICAgd2ViQXBwRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiSWYgeW91ciBjb3Jwb3JhdGlvbiBoYXMgYSB3ZWIgYXBwIChBSEksIEZPV0wsIEtBV0EpLCBlbnRlciB0aGF0IGluIHRoZSBXZWIgQXBwIElEIGZpZWxkLlwiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWW91IGNhbiBleHBsb3JlIG90aGVyIHNldHRpbmdzIHRvIGVuYWJsZSBvciBkaXNhYmxlIGZlYXR1cmVzLCBjaGFuZ2UgdGhlIGNvbG9yIHNjaGVtZSwgYW5kIGN1c3RvbWl6ZSB0aGUgbGVmdCBzaWRlYmFyLiBDb250YWN0IFBpQm95MzE0IGluIGdhbWUgb3Igb24gRGlzY29yZCBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuXCIpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGVidWdfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5ncykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IGRvd25sb2FkQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9ucyk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24ocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdLCBcIkRvd25sb2FkIEZ1bGwgU2V0dGluZ3NcIiwgXCJwbW1nLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihmdWxsQnVybltyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXV0sIFwiRG93bmxvYWQgQnVyblwiLCBcInBtbWctYnVyblwiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oYnVyblNldHRpbmdzLCBcIkRvd25sb2FkIEJ1cm4gU2V0dGluZ3NcIiwgXCJwbW1nLWJ1cm4tc2V0dGluZ3NcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xyXG4gICAgY29uc3QgZW5kcG9pbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbmRwb2ludExhYmVsLnRleHRDb250ZW50ID0gXCJHZXQgRklPIEVuZHBvaW50IChleDogL2luZnJhc3RydWN0dXJlL1Byb3hpb24pXCI7XHJcbiAgICBlbmRwb2ludExhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBlbmRwb2ludExhYmVsLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGVuZHBvaW50TGFiZWwpO1xyXG4gICAgY29uc3QgZW5kcG9pbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVuZHBvaW50SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBlbmRwb2ludElucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRJbnB1dCk7XHJcbiAgICBjb25zdCBlbmRwb2ludEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG93bmxvYWQgRklPIEVuZHBvaW50XCI7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGVuZHBvaW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIChlbmRwb2ludElucHV0LnZhbHVlLmNoYXJBdCgwKSA9PSBcIi9cIiA/IFwiXCIgOiBcIi9cIikgKyBlbmRwb2ludElucHV0LnZhbHVlO1xyXG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRGVidWdfcG9zdCwgdXJsLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZW5kcG9pbnRCdXR0b24pO1xyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIERlYnVnX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShqc29uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7IH1cclxuICAgIGRvd25sb2FkRmlsZShqc29uZGF0YSwgXCJmaW8tZW5kcG9pbnRcIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIiwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIFt0aWxlLCBwYXJhbWV0ZXJzXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG93bmxvYWRCdXR0b24oZGF0YSwgYnV0dG9uTmFtZSwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRvd25sb2FkQnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcclxuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGRvd25sb2FkQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkb3dubG9hZEZpbGUoZGF0YSwgZmlsZU5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZG93bmxvYWRCdXR0b247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENhbGN1bGF0b3JfcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2FsY0Rpdik7XHJcbiAgICB0aWxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1heEhlaWdodCA9IFwiNDAwcHhcIjtcclxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIG91dHB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgb3V0cHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIG91dHB1dC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1pbldpZHRoID0gXCIxODBweFwiO1xyXG4gICAgY29uc3QgaGlzdG9yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhpc3RvcnlEaXYpO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS53aWR0aCA9IFwiMzUlXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjE5NXB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCA0MCwgNDMpXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2IoNDMsNzIsOTApXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSBcInNvbGlkXCI7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBoaXN0b3J5RGl2LmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZSk7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgaGlzdG9yeVRhYmxlLmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBvdXRwdXQuc3R5bGUud2lkdGggPSBcIjkwJVwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChvdXRwdXQpO1xyXG4gICAgdmFyIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgdmFyIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICB2YXIgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICB2YXIgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgIHZhciBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgY29uc3Qga2V5cGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoa2V5cGFkKTtcclxuICAgIGtleXBhZC5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBrZXlwYWQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAga2V5cGFkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCg0LCAxZnIpXCI7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBbWzcsIG51bGxdLCBbOCwgbnVsbF0sIFs5LCBudWxsXSwgW1wiw7dcIiwgXCIjM2ZhMmRlXCJdLCBbNCwgbnVsbF0sIFs1LCBudWxsXSwgWzYsIG51bGxdLCBbXCJ4XCIsIFwiIzNmYTJkZVwiXSwgWzEsIG51bGxdLCBbMiwgbnVsbF0sIFszLCBudWxsXSwgW1wiLVwiLCBcIiMzZmEyZGVcIl0sIFswLCBudWxsXSwgW1wiLlwiLCBudWxsXSwgW1wiwrFcIiwgbnVsbF0sIFtcIitcIiwgXCIjM2ZhMmRlXCJdXTtcclxuICAgIGxheW91dC5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKG9wdFsxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXBhZC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAob3B0WzBdID09IFwiK1wiIHx8IG9wdFswXSA9PSBcIi1cIiB8fCBvcHRbMF0gPT0gXCJ4XCIgfHwgb3B0WzBdID09IFwiw7dcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG9wdFswXTtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0WzBdID09IFwiwrFcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCItXCIgKyBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gKG9wdFswXSA9PSAwID8gXCIwXCIgOiBvcHRbMF0gfHwgXCJcIikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcclxuICAgIGJvdHRvbURpdi5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBib3R0b21EaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCgyLCAxZnIpXCI7XHJcbiAgICBjb25zdCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY2xlYXIpO1xyXG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XHJcbiAgICBjbGVhci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICBjbGVhci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgY2xlYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE3LCA4MywgNzkpXCI7XHJcbiAgICBjbGVhci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBvdXRwdXQudmFsdWU7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkucmVtb3ZlQ2hpbGQoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbltoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5Lmluc2VydEJlZm9yZSh0ciwgaGlzdG9yeVRhYmxlQm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChlbnRlcik7XHJcbiAgICBlbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcclxuICAgIGVudGVyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgIGVudGVyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBlbnRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1Y2I4NWNcIjtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiIHx8IGUua2V5ID09PSBcIjJcIiB8fCBlLmtleSA9PT0gXCIzXCIgfHwgZS5rZXkgPT09IFwiNFwiIHx8IGUua2V5ID09PSBcIjVcIiB8fCBlLmtleSA9PT0gXCI2XCIgfHwgZS5rZXkgPT09IFwiN1wiIHx8IGUua2V5ID09PSBcIjhcIiB8fCBlLmtleSA9PT0gXCI5XCIgfHwgZS5rZXkgPT09IFwiMFwiIHx8IGUua2V5ID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSBlLmtleTtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiK1wiIHx8IGUua2V5ID09PSBcIi1cIiB8fCBlLmtleSA9PT0gXCJ4XCIgfHwgZS5rZXkgPT09IFwiKlwiIHx8IGUua2V5ID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IGUua2V5O1xyXG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiPVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKSB7XHJcbiAgICBjdXJyZW50U3RyaW5nID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiK1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSArIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiLVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAtIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwieFwiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIqXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlICogY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCLDt1wiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIvXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC8gY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBSZXBhaXJzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgVXNlcm5hbWVcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXlcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIFJlcGFpcnNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc2l0ZXMvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl1dLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIFJlcGFpcnNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcGFpckRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcGFpckRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQWxsIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJQbGFuZXRcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVpbGRpbmdzID0gW107XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBzaXRlW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzLnB1c2goW3NpdGVbXCJQbGFuZXROYW1lXCJdLCBidWlsZF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkaW5ncy5zb3J0KGdsb2JhbEJ1aWxkaW5nU29ydCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSArIFwiIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIHZhciBzaXRlRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzaXRlW1wiUGxhbmV0TmFtZVwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSB8fCBzaXRlW1wiUGxhbmV0SWRlbnRpZmllclwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgc2l0ZURhdGEgPSBzaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2l0ZURhdGEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRocmVzaG9sZERpdik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVGV4dCA9IGNyZWF0ZVRleHRTcGFuKFwiQWdlIFRocmVzaG9sZDpcIik7XHJcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudmFsdWUgPSBcIjcwXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkVGV4dCk7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICBjb25zdCBtYXRUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiU2hvcHBpbmcgQ2FydFwiKTtcclxuICAgICAgICBtYXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXRUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgbWF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdERpdik7XHJcbiAgICAgICAgY29uc3QgYnVpVGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkJ1aWxkaW5nc1wiKTtcclxuICAgICAgICBidWlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ1RvcCA9IFwiNXB4XCI7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChidWlUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICBmb3IgKGxldCB0IG9mIFtcIlRpY2tlclwiLCBcIkFnZVwiLCBcIkNvbmRpdGlvblwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLnNvcnQoYnVpbGRpbmdTb3J0KTtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpIHtcclxuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xyXG4gICAgc2l0ZURhdGFbXCJCdWlsZGluZ3NcIl0uZm9yRWFjaChidWlsZGluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBpZiAobm9uUHJvZC5pbmNsdWRlcyhidWlsZGluZ1tcIkJ1aWxkaW5nVGlja2VyXCJdKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSAoYnVpbGRpbmdbXCJCdWlsZGluZ0xhc3RSZXBhaXJcIl0gfHwgYnVpbGRpbmdbXCJCdWlsZGluZ0NyZWF0ZWRcIl0pKSAvIDg2NDAwMDAwKTtcclxuICAgICAgICBpZiAoZGF0ZSA8IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRpbmdbXCJSZXBhaXJNYXRlcmlhbHNcIl0uZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpIHtcclxuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xyXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgaWYgKGRhdGUgPCBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkaW5nWzFdW1wiUmVwYWlyTWF0ZXJpYWxzXCJdLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSwgYnVpbGRpbmdbMF0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nWzFdW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkaW5nU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVtcIkNvbmRpdGlvblwiXSA+IGJbXCJDb25kaXRpb25cIl0gPyAxIDogLTE7XHJcbn1cclxuZnVuY3Rpb24gZ2xvYmFsQnVpbGRpbmdTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhWzFdW1wiQ29uZGl0aW9uXCJdID4gYlsxXVtcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhdF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDaGF0X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2NoYXQvZGlzcGxheS9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBDaGF0X3Bvc3QoY2hhdERpdiwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjaGF0RGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2hhdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIGNoYXREaXYudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gcGFyYW1ldGVyc1sxXSArIFwiIEdsb2JhbCBTaXRlIE93bmVyc1wiO1xyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgY2hhdERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBjaGF0RGF0YS5mb3JFYWNoKGNoYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYXRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5jbGFzc0xpc3QuYWRkKFwiY2hhdC1saW5lXCIpO1xyXG4gICAgICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQoY2hhdExpbmUpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICAgICAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCIyLWRpZ2l0XCIgfSk7XHJcbiAgICAgICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKHRpbWVEaXYpO1xyXG4gICAgICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pO1xyXG4gICAgICAgIHRpbWVEaXYuY2xhc3NMaXN0LmFkZChcInRpbWUtZGF0ZVwiKTtcclxuICAgICAgICB0aW1lRGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5OTk5XCI7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQodGltZURhdGVEaXYpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImNoYXQtbmFtZVwiKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcclxuICAgICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW1lc3NhZ2VcIik7XHJcbiAgICAgICAgc3dpdGNoIChjaGF0W1wiTWVzc2FnZVR5cGVcIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNIQVRcIjpcclxuICAgICAgICAgICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiVXNlck5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIk1lc3NhZ2VUZXh0XCJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJKT0lORURcIjpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiVXNlck5hbWVcIl0gKyBcIiBqb2luZWQuXCI7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxFRlRcIjpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiVXNlck5hbWVcIl0gKyBcIiBsZWZ0LlwiO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSArIFwiL2V4ZWM/bW9kZT0lMjJmaW4lMjImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRmluX3Bvc3QsIHVybCwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZpbl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aWxlSGVhZGVyLnRpdGxlID0gXCJGaW5hbmNpYWwgT3ZlcnZpZXdcIjtcclxuICAgIHRpbGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIktleSBGaWd1cmVzXCI7XHJcbiAgICB0aWxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmaW4tdGl0bGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpbGVIZWFkZXIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVsxXSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJGaXhlZCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVsyXSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJDdXJyZW50IEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzRdKS50b0xvY2FsZVN0cmluZygpLCBcIkxpcXVpZCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs3XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJFcXVpdHlcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs1XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJMaWFiaWxpdGllc1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICBjb25zdCBub3cgPSBkYXRhWzBdWzBdO1xyXG4gICAgdmFyIHdlZWtBZ28gPSAtMTtcclxuICAgIHZhciBiZXN0R3Vlc3MgPSA4NjQwMDAwMDAwMDtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCkgPCBiZXN0R3Vlc3MpIHtcclxuICAgICAgICAgICAgYmVzdEd1ZXNzID0gTWF0aC5hYnMoTWF0aC5hYnMobm93IC0gZGF0YVtpXVswXSkgLSA3ICogODY0MDAwMDApO1xyXG4gICAgICAgICAgICB3ZWVrQWdvID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAod2Vla0FnbyAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpdCA9IE1hdGgucm91bmQoZGF0YVswXVs3XSAtIGRhdGFbd2Vla0Fnb11bN10pO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcHJvZml0ID4gMCA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gocHJvZml0LnRvTG9jYWxlU3RyaW5nKCksIFwiUHJvZml0XCIsIGNvbG9yKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBicmVha2Rvd25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBicmVha2Rvd25IZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBCcmVha2Rvd25cIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci50ZXh0Q29udGVudCA9IFwiSW52ZW50b3J5IEJyZWFrZG93blwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmaW4tdGl0bGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJyZWFrZG93bkhlYWRlcik7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IFtcIk5hbWVcIiwgXCJGaXhlZCBBc3NldHNcIiwgXCJDdXJyZW50IEFzc2V0c1wiLCBcIlRvdGFsIEFzc2V0c1wiXTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgY29uc3QgYnJlYWtkb3duID0gSlNPTi5wYXJzZShkYXRhWzBdWzhdKTtcclxuICAgIGJyZWFrZG93bi5zb3J0KGZpbmFuY2lhbFNvcnQpO1xyXG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBicmVha2Rvd24pIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChmaXJzdFRhYmxlRWxlbSk7XHJcbiAgICAgICAgZmlyc3RUYWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocm93RGF0YVswXSkpO1xyXG4gICAgICAgIHJvd0RhdGEuc2hpZnQoKTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBmaW5hbmNpYWxTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhWzNdIDwgYlszXSA/IDEgOiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRW5oYW5jZWRCdXJuX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBBUEkgS2V5IVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFwaWtleSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl07XHJcbiAgICB2YXIgYnVybjtcclxuICAgIHZhciB1bmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHBsYW5ldDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDMgJiYgcGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpID09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgIGlmIChmdWxsQnVybltwYXJhbWV0ZXJzWzJdXSAhPSB1bmRlZmluZWQgJiYgZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmlkICE9IFwicG1tZy1yZWxvYWRcIikge1xyXG4gICAgICAgICAgICAgICAgZ2V0R3JvdXBCdXJuKGZ1bGxCdXJuLCBwYXJhbWV0ZXJzWzJdLCBhcGlrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGZ1bGxCdXJuW3VzZXJuYW1lXSAhPSB1bmRlZmluZWQgJiYgZnVsbEJ1cm5bdXNlcm5hbWVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3VzZXJuYW1lXTtcclxuICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYnVyblNldHRpbmdzWzBdID09IFwibG9hZGluZ1wiIHx8IHVubG9hZGVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBCdXJuIERhdGEuLi5cIjtcclxuICAgICAgICB0aWxlLmlkID0gXCJwbW1nLXJlbG9hZFwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRpbGUuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICB2YXIgc2V0dGluZ3M7XHJcbiAgICBpZiAocGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpID09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgIHZhciBpbnYgPSB7fTtcclxuICAgICAgICB2YXIgY29ucyA9IHt9O1xyXG4gICAgICAgIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmZvckVhY2gocGxhbmV0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGFuZXREYXRhW1wiRXJyb3JcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIkludmVudG9yeVwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJPcmRlclByb2R1Y3Rpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuKTtcclxuICAgICAgICBzZXR0aW5ncyA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgYnVyblNldHRpbmdzKTtcclxuICAgICAgICBpZiAocGxhbmV0QnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vIE1hdGNoaW5nIFBsYW5ldCFcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ucyA9IHt9O1xyXG4gICAgICAgIHZhciBpbnYgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJPcmRlckNvbnN1bXB0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJQcm9kdWN0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJJbnZlbnRvcnlcIl0pIHtcclxuICAgICAgICAgICAgaWYgKGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzY3JlZW5OYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuU2NyZWVuTmFtZSk7XHJcbiAgICBjb25zdCBzY3JlZW5OYW1lID0gc2NyZWVuTmFtZUVsZW0gPyBzY3JlZW5OYW1lRWxlbS50ZXh0Q29udGVudCA6IFwiXCI7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdmFyIHNldHRpbmdzSW5kZXggPSBGaW5kQnVyblNldHRpbmdzKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXSwgc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0pO1xyXG4gICAgY29uc3QgZGlzcFNldHRpbmdzID0gc2V0dGluZ3NJbmRleCA9PSAtMSA/IFsxLCAxLCAxLCAxXSA6IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXTtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIlJFRFwiLCAyMi4wMjUsIGRpc3BTZXR0aW5nc1swXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1swXSA9IGRpc3BTZXR0aW5nc1swXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJZRUxMT1dcIiwgNDAuNDgzLCBkaXNwU2V0dGluZ3NbMV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMV0gPSBkaXNwU2V0dGluZ3NbMV0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiR1JFRU5cIiwgMzQuNjUsIGRpc3BTZXR0aW5nc1syXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1syXSA9IGRpc3BTZXR0aW5nc1syXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJJTkZcIiwgMTkuNiwgZGlzcFNldHRpbmdzWzNdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzNdID0gZGlzcFNldHRpbmdzWzNdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xyXG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5lZWRzXCIsIFwiUHJvZHVjdGlvblwiLCBcIkludlwiLCBcIkFtdC4gTmVlZGVkXCIsIFwiQnVyblwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGhlYWRSb3cuZmlyc3RDaGlsZC5jb2xTcGFuID0gMjtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIHZhciBidXJuTWF0ZXJpYWxzID0gT2JqZWN0LmtleXMoY29ucyk7XHJcbiAgICBidXJuTWF0ZXJpYWxzLnNvcnQoQ2F0ZWdvcnlTb3J0KTtcclxuICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIGJ1cm5NYXRlcmlhbHMpIHtcclxuICAgICAgICB2YXIgaW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncyAhPSB1bmRlZmluZWQgJiYgcGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpICE9IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tcIk1hdGVyaWFsRXhjbHVzaW9uc1wiXS5mb3JFYWNoKChtYXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSA9PSBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbmNsdWRlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBweFwiO1xyXG4gICAgICAgIGNvbnN0IG1hdEVsZW0gPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWwsIFwicHJ1bi1yZW1vdmUtanNcIiwgXCJub25lXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKE1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxdWzBdKTtcclxuICAgICAgICBuYW1lU3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgY29uc3QgY29uc0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNvbnNbbWF0ZXJpYWxdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiAvIERheVwiKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbnNDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGludkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBpbnZBbW91bnQgPSBpbnZbbWF0ZXJpYWxdID09IHVuZGVmaW5lZCA/IDAgOiBpbnZbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGludkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihpbnZBbW91bnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnZDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiAtaW52QW1vdW50IC8gY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgY29uc3QgYnVybkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBidXJuQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKCgoYnVybiA8IDUwMCAmJiBjb25zW21hdGVyaWFsXSA8IDApID8gTWF0aC5mbG9vcihidXJuKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pIDogXCLiiJ5cIikgKyBcIiBEYXlzXCIpKTtcclxuICAgICAgICBpZiAoY29uc1ttYXRlcmlhbF0gPj0gMCkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWluZmluaXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidXJuIDw9IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVswXSkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZWVkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbXQgPSBidXJuID4gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdIHx8IGNvbnNbbWF0ZXJpYWxdID4gMCA/IDAgOiAoYnVybiAtIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVsxXSkgKiBjb25zW21hdGVyaWFsXTtcclxuICAgICAgICBuZWVkQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG5lZWRBbXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuZWVkQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnVybkNvbHVtbik7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRmluZEJ1cm5TZXR0aW5ncyhhcnJheSwgbWF0Y2hTdHJpbmcpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWF0Y2hTdHJpbmcgPT0gYXJyYXlbaV1bMF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcbmZ1bmN0aW9uIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncykge1xyXG4gICAgQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbikuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1pbmZpbml0ZVwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidGFibGUtcm93XCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbM10gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tZ3JlZW5cIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInRhYmxlLXJvd1wiIDogXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzJdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXllbGxvd1wiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidGFibGUtcm93XCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMV0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ0YWJsZS1yb3dcIiA6IFwiZmxleFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1swXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBDYXRlZ29yeVNvcnQoYSwgYikge1xyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbYV0gPT0gdW5kZWZpbmVkIHx8IE1hdGVyaWFsTmFtZXNbYl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxOYW1lc1thXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbYl1bMV0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldFRhYmxlX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdICsgXCIvZXhlYz9tb2RlPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzJdICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc0J1dHRvbih0ZXh0LCB3aWR0aCwgdG9nZ2xlZCwgZikge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKHRvZ2dsZWQpIHtcclxuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NUZXh0KTtcclxuICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCdXR0b24pO1xyXG4gICAgYmFyLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBiYXIuc3R5bGUubWF4V2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChiYXIpO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHRCb3gpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRvZ2dsZWQpIHtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgICAgICAgICB0b2dnbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZnVuY3Rpb24gU2hlZXRUYWJsZV9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBkYXRhWzBdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgZGF0YS5zaGlmdCgpO1xyXG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDb250cmFjdHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBVc2VybmFtZSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIEFQSSBLZXkhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDb250cmFjdHNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY29udHJhY3QvYWxsY29udHJhY3RzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBDb250cmFjdHNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRyYWN0RGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJhY3REYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnZhbGlkQ29udHJhY3RTdGF0dXMgPSBbXHJcbiAgICAgICAgXCJGVUxGSUxMRURcIixcclxuICAgICAgICBcIkJSRUFDSEVEXCIsXHJcbiAgICAgICAgXCJURVJNSU5BVEVEXCIsXHJcbiAgICAgICAgXCJDQU5DRUxMRURcIixcclxuICAgICAgICBcIlJFSkVDVEVEXCJcclxuICAgIF07XHJcbiAgICBjb25zdCB2YWxpZENvbnRyYWN0cyA9IHtcclxuICAgICAgICBidXlpbmc6IFtdLFxyXG4gICAgICAgIHNlbGxpbmc6IFtdLFxyXG4gICAgICAgIHNoaXBwaW5nOiBbXVxyXG4gICAgfTtcclxuICAgIGNvbnRyYWN0RGF0YS5tYXAoY29udHJhY3QgPT4ge1xyXG4gICAgICAgIGlmICghaW52YWxpZENvbnRyYWN0U3RhdHVzLmluY2x1ZGVzKGNvbnRyYWN0W1wiU3RhdHVzXCJdKSkge1xyXG4gICAgICAgICAgICBsZXQgdmlld2luZ1BhcnR5ID0gY29udHJhY3RbXCJQYXJ0eVwiXTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggPT09IDIgfHwgY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdpbmdQYXJ0eUNvbmRpdGlvblR5cGUgPSBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubWFwKGNvbmRpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbltcIlBhcnR5XCJdID09PSB2aWV3aW5nUGFydHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICB9KS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpWzBdW1wiVHlwZVwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb25kaXRpb25UeXBlIG9mIFtjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09IDIgPyBcIkRFTElWRVJZXCIgOiBcIlBST1ZJU0lPTlwiLCBcIlBBWU1FTlRcIiwgXCJDT01FWF9QVVJDSEFTRV9QSUNLVVBcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0uZm9yRWFjaChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gY29uZGl0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXSA9IGNvbmRpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlld2luZ1BhcnR5Q29uZGl0aW9uVHlwZSA9PT0gXCJQQVlNRU5UXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZENvbnRyYWN0c1tcImJ1eWluZ1wiXS5wdXNoKGNvbnRyYWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZpZXdpbmdQYXJ0eUNvbmRpdGlvblR5cGUgPT09IFwiREVMSVZFUllcIiB8fCB2aWV3aW5nUGFydHlDb25kaXRpb25UeXBlID09PSBcIlBST1ZJU0lPTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRDb250cmFjdHNbXCJzZWxsaW5nXCJdLnB1c2goY29udHJhY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb25kaXRpb25UeXBlIG9mIFtcIlNISVBNRU5UX1BST1ZJU0lPTlwiLCBcIlBBWU1FTlRcIiwgXCJTSElQTUVOVF9QSUNLVVBcIiwgXCJTSElQTUVOVF9ERUxJVkVSWVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5mb3JFYWNoKGNvbmRpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25bXCJUeXBlXCJdID09PSBjb25kaXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RbXCJDb25kaXRpb25zXCJdID0gY29uZGl0aW9ucztcclxuICAgICAgICAgICAgICAgIHZhbGlkQ29udHJhY3RzW1wic2hpcHBpbmdcIl0ucHVzaChjb250cmFjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRyYWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0pLmZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCk7XHJcbiAgICB2YWxpZENvbnRyYWN0c1tcImJ1eWluZ1wiXS5zb3J0KENvbnRyYWN0U29ydCk7XHJcbiAgICB2YWxpZENvbnRyYWN0c1tcInNlbGxpbmdcIl0uc29ydChDb250cmFjdFNvcnQpO1xyXG4gICAgdmFsaWRDb250cmFjdHNbXCJzaGlwcGluZ1wiXS5zb3J0KENvbnRyYWN0U29ydCk7XHJcbiAgICBjb25zdCBidXlUYWJsZSA9IGNyZWF0ZVRhYmxlKHRpbGUsIFtcIk1hdGVyaWFsXCIsIFwiTmFtZVwiLCBcIlBhcnRuZXJcIiwgXCJGdWxmaWxsZWRcIiwgXCJQcm92aXMuXCIsIFwiUGFpZFwiLCBcIlBpY2sgVXBcIl0sIFwiQnV5aW5nXCIpO1xyXG4gICAgaWYgKHZhbGlkQ29udHJhY3RzW1wiYnV5aW5nXCJdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBDcmVhdGVOb0NvbnRyYWN0c1Jvdyg3KTtcclxuICAgICAgICBidXlUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQ29udHJhY3RzW1wiYnV5aW5nXCJdLmZvckVhY2goY29udHJhY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gQ3JlYXRlQ29udHJhY3RSb3coY29udHJhY3QpO1xyXG4gICAgICAgICAgICBidXlUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGxUYWJsZSA9IGNyZWF0ZVRhYmxlKHRpbGUsIFtcIk1hdGVyaWFsXCIsIFwiTmFtZVwiLCBcIlBhcnRuZXJcIiwgXCJGdWxmaWxsZWRcIiwgXCJQcm92aXMuXCIsIFwiUGFpZFwiLCBcIlBpY2sgVXBcIl0sIFwiU2VsbGluZ1wiKTtcclxuICAgIGlmICh2YWxpZENvbnRyYWN0c1tcInNlbGxpbmdcIl0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IENyZWF0ZU5vQ29udHJhY3RzUm93KDcpO1xyXG4gICAgICAgIHNlbGxUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQ29udHJhY3RzW1wic2VsbGluZ1wiXS5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IENyZWF0ZUNvbnRyYWN0Um93KGNvbnRyYWN0KTtcclxuICAgICAgICAgICAgc2VsbFRhYmxlLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcFRhYmxlID0gY3JlYXRlVGFibGUodGlsZSwgW1wiTWF0ZXJpYWxcIiwgXCJOYW1lXCIsIFwiUGFydG5lclwiLCBcIkZ1bGZpbGxlZFwiLCBcIlByb3Zpcy5cIiwgXCJQYWlkXCIsIFwiUGljayBVcFwiLCBcIkRlbGl2ZXJcIl0sIFwiU2hpcHBpbmdcIik7XHJcbiAgICBpZiAodmFsaWRDb250cmFjdHNbXCJzaGlwcGluZ1wiXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gQ3JlYXRlTm9Db250cmFjdHNSb3coOCk7XHJcbiAgICAgICAgc2hpcFRhYmxlLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFsaWRDb250cmFjdHNbXCJzaGlwcGluZ1wiXS5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXTtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgc2hpcFRhYmxlLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgY29uc3QgbWF0RWxlbSA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChjb25kaXRpb25zWzBdW1wiUGFydHlcIl0gPT09IFwiQ1VTVE9NRVJcIiA/IGNvbmRpdGlvbnNbMF1bXCJNYXRlcmlhbFRpY2tlclwiXSA6IFwiU0hQVFwiLCBcInBydW4tcmVtb3ZlLWpzXCIsIGNvbmRpdGlvbnNbMF1bXCJQYXJ0eVwiXSA9PT0gXCJDVVNUT01FUlwiID8gY29uZGl0aW9uc1swXVtcIk1hdGVyaWFsQW1vdW50XCJdIDogXCJub25lXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsQ29sdW1uLmFwcGVuZENoaWxkKG1hdEVsZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQobWF0ZXJpYWxDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoY29udHJhY3RbXCJOYW1lXCJdIHx8IGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdLCBcIkNPTlQgXCIgKyBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSkpO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBwYXJ0bmVyQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXSwgXCJDTyBcIiArIGNvbnRyYWN0W1wiUGFydG5lckNvbXBhbnlDb2RlXCJdKSk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGFydG5lckNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSAoY29uZGl0aW9uc1swXVtcIlBhcnR5XCJdID09PSBcIkNVU1RPTUVSXCIgPyBjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiICYmIGNvbmRpdGlvbnNbMV1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgOiBjb25kaXRpb25zWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiICYmIGNvbmRpdGlvbnNbM11bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwZW5kaW5nQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwZW5kaW5nQ2hlY2sgPSBjcmVhdGVUZXh0U3BhbihcIuKspFwiKTtcclxuICAgICAgICAgICAgcGVuZGluZ0NoZWNrLnN0eWxlLmNvbG9yID0gcGVuZGluZyA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICAgICAgcGVuZGluZ0NoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcGVuZGluZ0NvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwZW5kaW5nQ29sdW1uLmFwcGVuZENoaWxkKHBlbmRpbmdDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGVuZGluZ0NvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbnNbMF1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgICAgICAgICBwcm92Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwcm92Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBwcm92Q29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHByb3ZDb2x1bW4uYXBwZW5kQ2hpbGQocHJvdkNoZWNrKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwcm92Q29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbnNbMV1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgICAgICAgICBwYXlDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbMV1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgICAgIHBheUNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcGF5Q29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHBheUNvbHVtbi5hcHBlbmRDaGlsZChwYXlDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGF5Q29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGlja1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwaWNrVXBDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgICAgICAgICBwaWNrVXBDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgICAgIHBpY2tVcENoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcGlja1VwLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHBpY2tVcC5hcHBlbmRDaGlsZChwaWNrVXBDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGlja1VwKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsaXZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzNdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgZGVsaXZDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbM11bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgICAgIGRlbGl2Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBkZWxpdkNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBkZWxpdkNvbHVtbi5hcHBlbmRDaGlsZChkZWxpdkNoZWNrKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChkZWxpdkNvbHVtbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1ldGVycztcclxufVxyXG5jb25zdCBDcmVhdGVOb0NvbnRyYWN0c1JvdyA9IChjb2xzcGFuKSA9PiB7XHJcbiAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGNvbnN0IHRleHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICB0ZXh0Q29sdW1uLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke2NvbHNwYW59YCk7XHJcbiAgICB0ZXh0Q29sdW1uLnRleHRDb250ZW50ID0gXCJObyBjb250cmFjdHNcIjtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQodGV4dENvbHVtbik7XHJcbiAgICByZXR1cm4gbGluZTtcclxufTtcclxuZnVuY3Rpb24gQ3JlYXRlQ29udHJhY3RSb3coY29udHJhY3QpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl07XHJcbiAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGNvbmRpdGlvbnNbMF1bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBjb25kaXRpb25zWzBdW1wiTWF0ZXJpYWxBbW91bnRcIl0sIGZhbHNlLCB0cnVlKTtcclxuICAgIGlmIChtYXRFbGVtKSB7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICB9XHJcbiAgICBsaW5lLmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoY29udHJhY3RbXCJOYW1lXCJdIHx8IGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdLCBcIkNPTlQgXCIgKyBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSkpO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgIGNvbnN0IHBhcnRuZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBwYXJ0bmVyQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXSwgXCJDTyBcIiArIGNvbnRyYWN0W1wiUGFydG5lckNvbXBhbnlDb2RlXCJdKSk7XHJcbiAgICBsaW5lLmFwcGVuZENoaWxkKHBhcnRuZXJDb2x1bW4pO1xyXG4gICAgY29uc3QgcGVuZGluZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGNvbnN0IHBlbmRpbmdDaGVjayA9IGNyZWF0ZVRleHRTcGFuKFwi4qykXCIpO1xyXG4gICAgbGV0IHZpZXdlcnNDb25kaXRpb24gPSBjb25kaXRpb25zWzBdW1wiUGFydHlcIl0gPT09IGNvbnRyYWN0W1wiUGFydHlcIl0gPyBjb25kaXRpb25zWzBdIDogY29uZGl0aW9uc1sxXTtcclxuICAgIHBlbmRpbmdDaGVjay5zdHlsZS5jb2xvciA9IHZpZXdlcnNDb25kaXRpb25bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICBwZW5kaW5nQ2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgcGVuZGluZ0NvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgcGVuZGluZ0NvbHVtbi5hcHBlbmRDaGlsZChwZW5kaW5nQ2hlY2spO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZChwZW5kaW5nQ29sdW1uKTtcclxuICAgIGNvbnN0IHByb3ZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBjb25zdCBwcm92Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgIHByb3ZDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbMF1bXCJTdGF0dXNcIl0gPT09IFwiUEVORElOR1wiID8gVGV4dENvbG9ycy5GYWlsdXJlIDogVGV4dENvbG9ycy5TdWNjZXNzO1xyXG4gICAgcHJvdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIHByb3ZDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIHByb3ZDb2x1bW4uYXBwZW5kQ2hpbGQocHJvdkNoZWNrKTtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJvdkNvbHVtbik7XHJcbiAgICBjb25zdCBwYXlDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBjb25zdCBwYXlDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbnNbMV1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgcGF5Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgcGF5Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgcGF5Q29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBwYXlDb2x1bW4uYXBwZW5kQ2hpbGQocGF5Q2hlY2spO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZChwYXlDb2x1bW4pO1xyXG4gICAgY29uc3QgcGlja1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgY29uc3QgcGlja1VwQ2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zLmxlbmd0aCA9PSAzID8gKGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpIDogXCJcIik7XHJcbiAgICBwaWNrVXBDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbMl0gPT0gdW5kZWZpbmVkIHx8IGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICBwaWNrVXBDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICBwaWNrVXAuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIHBpY2tVcC5hcHBlbmRDaGlsZChwaWNrVXBDaGVjayk7XHJcbiAgICBsaW5lLmFwcGVuZENoaWxkKHBpY2tVcCk7XHJcbiAgICByZXR1cm4gbGluZTtcclxufVxyXG47XHJcbmZ1bmN0aW9uIENvbnRyYWN0U29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVtcIkR1ZURhdGVFcG9jaE1zXCJdID4gYltcIkR1ZURhdGVFcG9jaE1zXCJdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQUnVOX3ByZSh0aWxlKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgcHJ1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBwcnVuLnNyYyA9IFwiaHR0cHM6Ly9hcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb20vIy9cIjtcclxuICAgIHBydW4ud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHBydW4uaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBwcnVuLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9zcGVyaXR5X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9wcm9zcGVyaXR5LXBydW4ubmV0bGlmeS5hcHAvXCI7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgIHVybCArPSBcIj9mcm9tPVwiICsgcGFyYW1ldGVyc1sxXSArIFwiJnRvPVwiICsgcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb3NwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHByb3NwLnNyYyA9IHVybDtcclxuICAgIHByb3NwLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBwcm9zcC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHByb3NwKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyYW1ldGVyc1sxXSArPSBcIl9cIiArIHBhcmFtZXRlcnNbaV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBzaGVldC5zcmMgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL2VkaXQ/dXNwPXNoYXJpbmdcIjtcclxuICAgIHNoZWV0LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHNoZWV0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNoZWV0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGlzY29yZF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciBzZXJ2ZXJJRDtcclxuICAgIHZhciBjaGFubmVsSUQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIGlmIChEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xyXG4gICAgICAgICAgICBjaGFubmVsSUQgPSBEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXVsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzZXJ2ZXJJRCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIGRpc2NvcmQuc3JjID0gXCJodHRwczovL2Uud2lkZ2V0Ym90LmlvL2NoYW5uZWxzL1wiICsgc2VydmVySUQgKyBcIi9cIiArIGNoYW5uZWxJRDtcclxuICAgIGRpc2NvcmQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBkaXNjb3JkLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGlzY29yZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEZJT0ludl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgYXBpa2V5ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9nZXRBbGxTdG9yYWdlcywgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvYXV0aC9ncm91cC9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAzOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzWzJdICs9IFwiIFwiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc3RvcmFnZS9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9cIiArIHBhcmFtZXRlcnNbMl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpbnZlbnRvcnlEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XHJcbiAgICBjb25zdCB2b2x1bWVUb3RhbCA9IGludmVudG9yeURhdGFbXCJWb2x1bWVDYXBhY2l0eVwiXTtcclxuICAgIGNvbnN0IHdlaWdodFVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0TG9hZFwiXTtcclxuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW52LWhlYWRlclwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcclxuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzJdLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgY29uc3QgdXNlckVsZW0gPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdLCB0YWcpO1xyXG4gICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcclxuICAgIGNvbnN0IHZvbHVtZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB2b2x1bWVCYXIuaWQgPSBcInZvbHVtZS1iYXJcIjtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgdm9sdW1lQmFyLnZhbHVlID0gdm9sdW1lVXNlZCAvIHZvbHVtZVRvdGFsO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB2b2x1bWVUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBtwrNcIiwgdGFnKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodm9sdW1lTGluZSk7XHJcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlaWdodExpbmUuaWQgPSBcIndlaWdodC1saW5lXCI7XHJcbiAgICB3ZWlnaHRMaW5lLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA4cHhcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJXZWlnaHQgXCIsIHRhZykpO1xyXG4gICAgY29uc3Qgd2VpZ2h0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xyXG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1iYXJcIik7XHJcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcclxuICAgIHdlaWdodEJhci52YWx1ZSA9IHdlaWdodFVzZWQgLyB3ZWlnaHRUb3RhbDtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQod2VpZ2h0QmFyKTtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWlnaHRMaW5lKTtcclxuICAgIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0uc29ydChmaW9NYXRzQWxwaGFiZXRTb3J0KTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIHRhZywgaXRlbVtcIk1hdGVyaWFsQW1vdW50XCJdLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbWF0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoXCJNQVQgXCIgKyBpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0pOyB9KTtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfZ2V0QWxsU3RvcmFnZXModGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHZhciB1c2VySlNPTjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdXNlckpTT04gPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIHZhciB1c2VybmFtZXMgPSBbXTtcclxuICAgIHVzZXJKU09OW1wiR3JvdXBVc2Vyc1wiXS5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIHVzZXJuYW1lcy5wdXNoKHVzZXJbXCJHcm91cFVzZXJOYW1lXCJdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucHVzaCh1c2VySlNPTltcIkdyb3VwTmFtZVwiXSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9hbGxEaXNwbGF5LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9maW93ZWIvZ3JvdXBodWJcIiwgXCJQT1NUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcGFyYW1ldGVyc1syXV0sIEpTT04uc3RyaW5naWZ5KHVzZXJuYW1lcykpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9hbGxEaXNwbGF5KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB2YXIgZ3JvdXBEYXRhID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyb3VwRGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIGZyb20gRklPIVwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1szXSArIFwiIEludmVudG9yaWVzXCIpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY29uc3QgYm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHlEaXYpO1xyXG4gICAgYm9keURpdi5jbGFzc0xpc3QuYWRkKFwiZmxleC10YWJsZVwiKTtcclxuICAgIGlmIChncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXS5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgaWYgKHBsYXllcltcIkxvY2F0aW9uc1wiXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwbGF5ZXJbXCJVc2VyTmFtZVwiXSkpO1xyXG4gICAgICAgIHBsYXllckRpdi5maXJzdENoaWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICBwbGF5ZXJbXCJMb2NhdGlvbnNcIl0uZm9yRWFjaChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLCBcIlhJVCBJTlZfXCIgKyBwbGF5ZXJbXCJVc2VyTmFtZVwiXSArIFwiX1wiICsgbG9jYXRpb25bXCJMb2NhdGlvbk5hbWVcIl0ucmVwbGFjZSgvIC8sIFwiX1wiKSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgcGFyYW1ldGVycy5wb3AoKTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlvTWF0c0FscGhhYmV0U29ydChhLCBiKSB7XHJcbiAgICBpZiAoYVtcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCB8fCBiW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYVtcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0ubG9jYWxlQ29tcGFyZShiW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXSk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElURnVuY3Rpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBPcmRlckVUQXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW9yZGVyLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5iZWF1dGlmeU9yZGVycygpO1xyXG4gICAgfVxyXG4gICAgYmVhdXRpZnlPcmRlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlKSk7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChxdWV1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2RTbG90cyA9IEFycmF5LmZyb20ocXVldWUuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICB2YXIgaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgbGluZVRpbWVzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IDA7XHJcbiAgICAgICAgICAgIHByb2RTbG90cy5mb3JFYWNoKHByb2RJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoU2VsZWN0b3IuUHJvZEl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5RdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2RJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluVGltZSA9IGxpbmVUaW1lc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbGFwc2VkICs9IG1pblRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcyA9IGxpbmVUaW1lcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAtIG1pblRpbWU7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZHVyYXRpb24gKyB0aW1lRWxhcHNlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbil9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKFR5cGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUXVldWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9PcmRlckVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHBhcnNlQmFzZU5hbWUsIGZpbmRCdXJuQW1vdW50LCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCwgZmluZEludmVudG9yeUFtb3VudCwgY3JlYXRlVGV4dFNwYW4sIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIENvbnN1bWFibGVUaW1lcnMge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGJ1cm4sIHRocmVzaG9sZHMpIHtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZHMgPSB0aHJlc2hvbGRzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXSA9PSB1bmRlZmluZWQgfHwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJXRlwiKTtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQgfHwgYnVmZmVycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLCB0aGlzLnRocmVzaG9sZHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCdXJucyhidWZmZXIsIGJ1cm4sIHRocmVzaG9sZHMpIHtcclxuICAgIGNvbnN0IG5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZSk7XHJcbiAgICBpZiAobmFtZUVsZW0gPT0gbnVsbCB8fCBuYW1lRWxlbSA9PSB1bmRlZmluZWQgfHwgbmFtZUVsZW0udGV4dENvbnRlbnQgPT0gbnVsbCB8fCBuYW1lRWxlbS50ZXh0Q29udGVudCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgbmFtZSA9IHBhcnNlQmFzZU5hbWUobmFtZUVsZW0udGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRoZWFkID4gdHJcIikpO1xyXG4gICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxIZWFkZXIgPSBoZWFkZXIuY2hpbGRyZW5bMl07XHJcbiAgICAgICAgY29uc3QgYnVybkhlYWRlciA9IGhlYWRlci5jaGlsZHJlblszXTtcclxuICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICBpZiAoYnVybkhlYWRlci5jaGlsZHJlbiAhPSB1bmRlZmluZWQgJiYgYnVybkhlYWRlci5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnVybkhlYWRlci5yZW1vdmVDaGlsZChidXJuSGVhZGVyLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVybkhlYWRlci50ZXh0Q29udGVudCA9IFwiQnVyblwiO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQobmFtZSwgYnVybik7XHJcbiAgICBpZiAocGxhbmV0QnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXRSb3cuY2hpbGRFbGVtZW50Q291bnQgPCA1KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0RGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlbls0XTtcclxuICAgICAgICBjb25zdCB0b3RhbERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgaWYgKG91dHB1dERhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgaW52ZW50b3J5QW1vdW50ID0gZmluZEludmVudG9yeUFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xyXG4gICAgICAgICAgICB2YXIgYnVybkFtb3VudCA9IGZpbmRCdXJuQW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBkYXlzTGVmdDtcclxuICAgICAgICAgICAgaWYgKGJ1cm5BbW91bnQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGludmVudG9yeUFtb3VudCAvIGJ1cm5BbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4tcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXllbGxvd1wiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gZGF5c0xlZnQudG9GaXhlZCgwKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBvdXRwdXREYXRhLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0RGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihkYXlzTGVmdCkpO1xyXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdG90YWxEYXRhLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsRGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbERhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYnVybkFtb3VudCA9PSAwID8gXCJcIiA6IGJ1cm5BbW91bnQudG9GaXhlZCgyKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnN1bWFibGVUaW1lcnMudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGVldEVUQXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWZsdC1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiRkxUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bN107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGVldEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzLCBDdXJyZW5jeVN5bWJvbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBQb3N0TE0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wb3N0LWxtLXByaWNlXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFudXBzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Qb3N0Rm9ybSkpLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBcnJheS5mcm9tKGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkMtRUNiLW92ZTF0bGE2cXNpVjQzZXc9PSBpdkcyNHF0UTkya2J5c0xUTmVXSnZ3PT1cIikpO1xyXG4gICAgICAgICAgICB2YXIgc2hpcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbSBvZiB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBcIlNISVBQSU5HXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29tbW9kaXR5ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0NvbW1vZGl0eSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQW1vdW50J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFByaWNlSW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nVG90YWwgcHJpY2UnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ3VycmVuY3knXV0vL3NlbGVjdFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgZGlzcGxheUVsZW1lbnQgPSBjcmVhdGVUZXh0U3BhbihcIi0tXCIsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgaWYgKHNoaXBwaW5nICYmIGNvbW1vZGl0eS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdEluZm8gPSBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdEluZm8gPT0gdW5kZWZpbmVkIHx8IG1hdEluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBtYXRJbmZvWzFdID49IG1hdEluZm9bMl0gPyBcInRcIiA6IFwibcKzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0dm9sdW1lID0gTWF0aC5tYXgobWF0SW5mb1sxXSwgbWF0SW5mb1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHdlaWdodHZvbHVtZSkgfHwgaXNOYU4odG90YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gXCItLSB0IHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArIFwiLS0gLyB0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIFwiICsgdW5pdCArIFwiIHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiAvIFwiICsgdW5pdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcy5wcmljZXMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1vZGl0eS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSB0aGlzLnByaWNlc1tjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbW91bnQgKyBcIiBcIiA9PSBcIk5hTiBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiIHwgXCIgKyAocHJpY2UgKiBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIFRvdGFsIENvcnBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIiArIChwcmljZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qb3N0TE0udHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCB0b0ZpeGVkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNoaXBwaW5nLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyg/OlNISVBQSU5HKVxccyhbXFxkLC5dKyl0XFxzXFwvXFxzKFtcXGQsLl0rKW3Cs1xcc0BcXHMoW1xcZCwuXSspXFxzW0EtWl0rXFxzZnJvbS8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ29zdCA9IG1hdGNoZXNbM107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b25uYWdlID0gcGFyc2VGbG9hdChtYXRjaGVzWzFdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMl0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9ubmFnZSA+IHNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0ID0gJ3QnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gdG9ubmFnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAnbcKzJztcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQodG90YWxDb3N0LnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSB0b0ZpeGVkKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfS8ke3VuaXR9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NoaXBwaW5nQWRzLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgcGFyc2VEdXJhdGlvbiwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFF1ZXVlTG9hZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcXVldWUtbG9hZFwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVRdWV1ZUxvYWQoKTtcclxuICAgIH1cclxuICAgIGdldEV0YUZyb21Sb3cocm93KSB7XHJcbiAgICAgICAgY29uc3QgZXRhQ2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg1KTtcclxuICAgICAgICBpZiAoZXRhQ2VsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBldGFTcGFuID0gZXRhQ2VsbC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgaWYgKGV0YVNwYW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IHBhcnNlRHVyYXRpb24oZXRhU3Bhbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlUXVldWVMb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWVUYWJsZSkpO1xyXG4gICAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbChcInRib2R5Om50aC1vZi10eXBlKDIpID4gdHJcIikpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZ2V0RXRhRnJvbVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgbjtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gdG9GaXhlZChldGEgLyB0b3RhbFRpbWUgKiAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg2KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEZpZWxkICYmIGV0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVRleHRTcGFuKGAgJHtwZXJjZW50fSVgLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1F1ZXVlTG9hZC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW5vdHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Ob3RpZmljYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkICYmIGVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIGZvdW5kVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBTZWFyY2hlcnMuZm9yRWFjaChzZWFyY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaChuZXcgUmVnRXhwKHNlYXJjaFswXSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4udGV4dENvbnRlbnQgPSBzZWFyY2hbMV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLmNvbG9yID0gc2VhcmNoWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKHR5cGVTcGFuLCBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90VGV4dCA9IGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdFRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL0NoYW1iZXIgb2YgR2xvYmFsIENvbW1lcmNlLywgXCJDT0dDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VhcmNoWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcm9kdWNlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvYXQgeW91ciBiYXNlIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvT25lIC8sIFwiMSBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gaGF2ZSBiZWVuLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdW5pdFtzXT8gb2YvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC8gKFtBLXogLV0rKSBwcm9kdWNlZC8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC95b3VyIChbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmRlciBmaWxsZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBDb21tb2RpdHkgRXhjaGFuZ2UvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC8oW0EteiAtXSspIG9yZGVyLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhY2NlcHRlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHRoZS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGxvY2FsIG1hcmtldC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29udHJhY3RcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL1lvdXIgcGFydG5lciAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFycml2ZWQgYXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2l0cyBkZXN0aW5hdGlvbiAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvZ2NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW1iZXIgb2YgZ2xvYmFsIGNvbW1lcmNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gYSBuZXcgZWNvbm9taWMgcHJvZ3JhbS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gbm90VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5jb25zdCBTZWFyY2hlcnMgPSBbXHJcbiAgICBbXCJjb250cmFjdFwiLCBcImNvbnRyYWN0XCIsIFwicmdiKDI0NywgMTY2LCAwKVwiXSxcclxuICAgIFtcIm91ciBjb3Jwb3JhdGlvblwiLCBcImNvcnBcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicHJvZHVjZWRcIiwgXCJwcm9kdWNlZFwiLCBcIiMzZmEyZGVcIl0sXHJcbiAgICBbXCJhY2NlcHRlZFwiLCBcImFkdmVydFwiLCBcIiM0NDljNTdcIl0sXHJcbiAgICBbXCJleHBpcmVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcInRyYWRlXCIsIFwidHJhZGVcIiwgXCIjMDA4MDAwXCJdLFxyXG4gICAgW1wib3JkZXIgZmlsbGVkXCIsIFwib3JkZXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wiYXJyaXZlZCBhdFwiLCBcImFycml2YWxcIiwgXCIjYjMzNmIzXCJdLFxyXG4gICAgW1wicmVwb3J0XCIsIFwicmVwb3J0XCIsIFwiIzAwYWE3N1wiXSxcclxuICAgIFtcImVsZWN0aW9uXCIsIFwiZWxlY3Rpb25cIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiZ292ZXJub3JcIiwgXCJnb3Zlcm5vclwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJydWxlc1wiLCBcInJ1bGVzXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImNvZ2NcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImNoYW1iZXIgb2YgZ2xvYmFsIGNvbW1lcmNlXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJleHBlcnRcIiwgXCJleHBlcnRcIiwgXCIjZmY4YTAwXCJdLFxyXG4gICAgW1wicG9wdWxhdGlvbiBpbmZyYXN0cnVjdHVyZSBwcm9qZWN0XCIsIFwiUE9QSVwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJhcGV4XCIsIFwidXBkYXRlXCIsIFwiIzAwYWE3N1wiXSxcclxuICAgIFtcIndhcmVob3VzXCIsIFwid2FyXCIsIFwiI2NjMjkyOVwiXSxcclxuICAgIFtcInNoaXBidWlsZGluZyBwcm9qZWN0XCIsIFwic2hpcFwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJwbGFuZXRhcnkgcHJvamVjdFwiLCBcImluZnJhXCIsIFwiIzhmNTJjY1wiXVxyXG5dO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RpZmljYXRpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2NyZWVuVW5wYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4Y2x1c2lvbnMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2NyZWVuc1wiO1xyXG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcclxuICAgICAgICB0aGlzLmV4Y2x1c2lvbnMgPSBbXTtcclxuICAgICAgICBleGNsdXNpb25zLmZvckVhY2goZXggPT4geyB0aGlzLmV4Y2x1c2lvbnMucHVzaChleC50b1VwcGVyQ2FzZSgpKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLlNjcmVlbkNvbnRyb2xzKTtcclxuICAgICAgICBpZiAobmF2YmFyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmF2YmFyLmNoaWxkcmVuW25hdmJhci5jaGlsZHJlbi5sZW5ndGggLSAxXS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50YWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2YmFySXRlbUNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRVbmRlcmxpbmVDbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuYXZiYXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV07XHJcbiAgICAgICAgdmFyIGxpbmtzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShtZW51LmNoaWxkcmVuKS5mb3JFYWNoKChjbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY24uY2hpbGRyZW4ubGVuZ3RoID09IDQgJiYgIXRoaXMuZXhjbHVzaW9ucy5pbmNsdWRlcyhTdHJpbmcoY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGFjZXJEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgc3BhY2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKHNwYWNlckRpdik7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FbGVtID0gY3JlYXRlTm9kZShidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25FbGVtLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NjcmVlblVucGFjay50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBzaG93QnVmZmVyLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNpZGViYXIge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaWRlYmFyXCI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnV0dG9ucyA9IFtcIkJTXCIsIFwiQ09OVFwiLCBcIkNPTVwiLCBcIkNPUlBcIiwgXCJDWExcIiwgXCJGSU5cIiwgXCJGTFRcIiwgXCJJTlZcIiwgXCJNQVBcIiwgXCJQUk9EXCIsIFwiQ01EU1wiXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLkxlZnRTaWRlYmFyKTtcclxuICAgICAgICBpZiAoIXRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbW1wiQlNcIiwgXCJCU1wiXSwgW1wiQ09OVFwiLCBcIkNPTlRTXCJdLCBbXCJDT01cIiwgXCJDT01cIl0sIFtcIkNPUlBcIiwgXCJDT1JQXCJdLCBbXCJDWExcIiwgXCJDWExcIl0sIFtcIkZJTlwiLCBcIkZJTlwiXSwgW1wiRkxUXCIsIFwiRkxUXCJdLCBbXCJJTlZcIiwgXCJJTlZcIl0sIFtcIk1BUFwiLCBcIk1BUFwiXSwgW1wiUFJPRFwiLCBcIlBST0RcIl0sIFtcIkNNRFNcIiwgXCJDTURTXCJdLCBbXCJTRVRcIiwgXCJYSVQgU0VUVElOR1NcIl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZmlyc3RDaGlsZCAhPSBudWxsICYmIChjaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50IHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b25JbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0U3BhbihidXR0b25JbmZvWzBdLnRvVXBwZXJDYXNlKCksIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJCdXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2xpdmVyKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcclxuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihidXR0b25JbmZvWzFdKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgUGxhbmV0Q29tbWFuZHMsIFBsYW5ldE5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRDb3JyZWN0ZXIge1xyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkJ1ZmZlckFyZWEpKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyRmllbGQgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVGV4dCA9IGJ1ZmZlckZpZWxkLnZhbHVlLnRvVXBwZXJDYXNlKCkgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChQbGFuZXRDb21tYW5kcy5pbmNsdWRlcyhidWZmZXJUZXh0LnNwbGl0KFwiIFwiKVswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhQbGFuZXROYW1lcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclRleHQuaW5jbHVkZXMoXCIgXCIgKyBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVGV4dCA9IGJ1ZmZlclRleHQucmVwbGFjZShcIiBcIiArIG5hbWUsIFwiIFwiICsgUGxhbmV0TmFtZXNbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVmFsdWUoYnVmZmVyRmllbGQsIGJ1ZmZlclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQucGFyZW50RWxlbWVudCA9PSBudWxsIHx8IGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcXVlc3RTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4sIHNob3dCdWZmZXIgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jYWxjXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbGNUYWdzID0gW1wiTE1cIiwgXCJDWFwiLCBcIlhJVFwiXTtcclxuICAgICAgICBjYWxjVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKHRhZyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykgfHwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdXBwZXItcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKGNhbGNEaXYsIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmlkID09IFwicmVmcmVzaFwiID8gKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdIDogKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIvCflqlcIiwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIlhJVCBDQUxDVUxBVE9SXCIpOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ2FsY3VsYXRvckJ1dHRvbi50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250cmFjdERyYWZ0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY29udGRcIjtcclxuICAgICAgICB0aGlzLnByaWNlcyA9IHByaWNlcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGdldEJ1ZmZlcnMoXCJDT05URFwiKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm0pO1xyXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db25kaXRpb25FZGl0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm9ybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGJvZHkgPSBmb3JtLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIHZhciBhbW91bnQgPSAtMTtcclxuICAgICAgICAgICAgdmFyIHByaWNlID0gLTE7XHJcbiAgICAgICAgICAgIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PURlbGl2ZXJ5IG9mICkoLiopKD89IHVuaXQpLykgfHwgW1wiXCJdKVswXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9ICgodGJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0cyBvZiApKC4qKSg/PSB0byApLykgfHwgKHRib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdCBvZiApKC4qKSg/PSB0byApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaWNlc1ttYXRlcmlhbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IGFtb3VudCAqIHRoaXMucHJpY2VzW21hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PVByb3Zpc2lvbiApKC4qKSg/PSB1bml0KS8pIHx8IFtcIlwiXSlbMF0ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdHMgb2YgKSguKikoPz0gXFxAICkvKSB8fCAodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0IG9mICkoLiopKD89IFxcQCApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaWNlc1ttYXRlcmlhbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IGFtb3VudCAqIHRoaXMucHJpY2VzW21hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PVByb3Zpc2lvbiBzaGlwbWVudCBvZiApKC4qKSg/PSB1bml0KS8pIHx8IFtcIlwiXSlbMF0ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdHMgb2YgKSguKikoPz0gXFxAICkvKSB8fCAodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0IG9mICkoLiopKD89IFxcQCApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCA9PSBudWxsIHx8ICFNYXRlcmlhbHNbbWF0ZXJpYWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCgoKGNvbmRpdGlvbi5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmNoaWxkcmVuWzFdIHx8IGNvbmRpdGlvbikuZmlyc3RDaGlsZCB8fCBjb25kaXRpb24pLnRleHRDb250ZW50ID09PSBcIkN1cnJlbmN5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlRGl2ID0gY29uZGl0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRQcmljZURpdiA9PSBudWxsIHx8IGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmljZSA9IHBhcnNlRmxvYXQoaW5wdXRQcmljZURpdi5maXJzdENoaWxkLmZpcnN0Q2hpbGQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodFZvbCA9IGFtb3VudCAqIChNYXRlcmlhbHNbbWF0ZXJpYWxdWzFdID4gTWF0ZXJpYWxzW21hdGVyaWFsXVsyXSA/IE1hdGVyaWFsc1ttYXRlcmlhbF1bMV0gOiBNYXRlcmlhbHNbbWF0ZXJpYWxdWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVBlciA9IGlucHV0UHJpY2UgLyB3ZWlnaHRWb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHByaWNlUGVyLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyAoTWF0ZXJpYWxzW21hdGVyaWFsXVsxXSA+IE1hdGVyaWFsc1ttYXRlcmlhbF1bMl0gPyBcInRcIiA6IFwibcKzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJpY2VEaXYuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGRpc3BsYXksIHRoaXMudGFnKSwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoKChjb25kaXRpb24uY2hpbGRyZW5bMV0gfHwgY29uZGl0aW9uKS5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmZpcnN0Q2hpbGQgfHwgY29uZGl0aW9uKS50ZXh0Q29udGVudCA9PT0gXCJDdXJyZW5jeVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlRGl2ID0gY29uZGl0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dFByaWNlRGl2ID09IG51bGwgfHwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlID0gcGFyc2VGbG9hdChpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVBlciA9IGlucHV0UHJpY2UgLyBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gcHJpY2VQZXIudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIiArIChwcmljZSA9PSAtMSA/IFwiXCIgOiBcIiB8IFwiICsgcHJpY2UudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgVG90YWwgQ29ycFwiKTtcclxuICAgICAgICAgICAgICAgIGlucHV0UHJpY2VEaXYuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGRpc3BsYXksIHRoaXMudGFnKSwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnRyYWN0RHJhZnRzLnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9