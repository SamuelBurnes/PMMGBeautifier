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
    totalPicture.addEventListener("click", function () {
        showBuffer("MAT " + ticker.toUpperCase());
    });
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
div.HWbVOIC2rYGNug3UC2dV\\+Q\\=\\= {
	background-color: #222;
}
/* full item name centering */
span.YCp8jhRg4EBG3aQxcizskQ\\=\\= {
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
 
/* controversial UI changes and colors */
/* (comment/delete if not desired)
/* ----------------------------------- */
 
/* item ticker color */
.rjpYL1i9cZmf47fM9qWyZQ\\=\\= {
    color: #cccccc;
}
 div.HWbVOIC2rYGNug3UC2dV\\+Q\\=\\= {
	background-color: #222;
}
 
/* full item name centering */
.YCp8jhRg4EBG3aQxcizskQ\\=\\= {
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
        window.setTimeout(() => this.loop(), 250);
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
        if (!buffers)
            return;
        const burn = this.burn;
        const burnSettings = this.burnSettings;
        buffers.forEach(buffer => {
            const tile = (buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTile) || buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTileFloat));
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
                __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()](tile.firstChild, parameters, this.result, burn, burnSettings, this.modules);
                return;
            }
            tile.classList.add("xit-tile");
            const refreshButton = document.createElement("div");
            if (!tile.firstChild || (tile.firstChild && (tile.firstChild.id != "pmmg-no-match"))) {
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
            if (!preFunc) {
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
    cleanup(full = false) {
        full && Object(__WEBPACK_IMPORTED_MODULE_2__util__["n" /* genericCleanup */])(this.tag);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTViNTNjMDQzMzRmODk5Y2NhMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNuQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLLHlJQUF5STtBQUFBO0FBQUE7QUFDekk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7Ozs7Ozs7O0FDbHhCSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUFBO0FBQUE7QUFDSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQiw4RUFBdUI7QUFDbEQsbUJBQW1CLDhFQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJEQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtB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QUFxRCxhQUFhLGtFQUFTLGdCQUFnQixrRUFBUztBQUM1SywrQ0FBK0MscUVBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UscURBQXFELHlFQUF5RSxxREFBcUQ7QUFDdlAsMkNBQTJDLHFFQUFjO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE1YjUzYzA0MzM0Zjg5OWNjYTEwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE5hbWVzLCBQbGFuZXROYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IFN0eWxlLCBDYXRlZ29yeUNvbG9ycyB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoZmlsZURhdGEsIGZpbGVOYW1lLCBpc0pTT04gPSB0cnVlKSB7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2lzSlNPTiA/IEpTT04uc3RyaW5naWZ5KGZpbGVEYXRhKSA6IGZpbGVEYXRhXSwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBjb25zdCB1cmxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB1cmxFbGVtZW50LnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcclxuICAgIHVybEVsZW1lbnQuaHJlZiA9IHVybDtcclxuICAgIHVybEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgdXJsRWxlbWVudC5jbGljaygpO1xyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGh0bWxTdHJpbmcpIHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uTGFiZWw7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWlja1Jvd0J1dHRvbihzaG9ydFRleHRCb2xkLCBzaG9ydFRleHROb3JtYWwsIGxvbmdUZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiTUFwY3NZRWQ3K3dxSUpUZmJIUDF5QT09IGZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PSBrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cIkQrR0poSUdtQzJlRms1OWR2clkrU2c9PVwiPnt7OnNob3J0Qm9sZH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ezpzaG9ydE5vcm1hbH19PC9zcGFuPjxzcGFuIGNsYXNzPVwiY0txekVEZXlLYnpiOW5QcnkwRGtmdz09XCI+OiB7ezpsb25nVGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7ezpzaG9ydEJvbGR9fVwiLCBzaG9ydFRleHRCb2xkKVxyXG4gICAgICAgIC5yZXBsYWNlKFwie3s6c2hvcnROb3JtYWx9fVwiLCBzaG9ydFRleHROb3JtYWwpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJ7ezpsb25nVGV4dH19XCIsIGxvbmdUZXh0KTtcclxuICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShyZXN1bHQpO1xyXG4gICAgbm9kZS5vbmNsaWNrID0gKCkgPT4geyBzaG93QnVmZmVyKGNvbW1hbmQpOyB9O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlZFNlY29uZHMpIHtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XSAmJiBQbGFuZXROYW1lc1twbGFuZXRdLnRvTG93ZXJDYXNlKCkgPT0gZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmFzZU5hbWUodGV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB0ZXh0ID0gdGV4dC5zcGxpdChcIkBcIilbMV07XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCIgQmFzZVwiKVswXTtcclxuICAgICAgICB2YXIgaHlwaGVucyA9IHRleHQuc3BsaXQoXCIgLSBcIik7XHJcbiAgICAgICAgdGV4dCA9IGh5cGhlbnNbaHlwaGVucy5sZW5ndGggLSAxXTtcclxuICAgICAgICB2YXIgZW5kaW5nID0gdGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKGVuZGluZ1sxXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdICE9IHVuZGVmaW5lZCAmJiBlbmRpbmdbMl0ubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGluZ1sxXSArIGVuZGluZ1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KHRpY2tlciwgY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiLCBhbW91bnQgPSBcIm5vbmVcIiwgdGV4dCA9IGZhbHNlLCBzbWFsbCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdID09IHVuZGVmaW5lZCAmJiB0aWNrZXIgIT0gXCJTSFBUXCIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFtcIlNoaXBtZW50XCJdKVswXTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gKE1hdGVyaWFsTmFtZXNbdGlja2VyXSB8fCBbdW5kZWZpbmVkLCBcInNoaXBtZW50XCJdKVsxXTtcclxuICAgIGNvbnN0IHRvdGFsUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b3RhbFBpY3R1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaG93QnVmZmVyKFwiTUFUIFwiICsgdGlja2VyLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcIlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmc9PVwiKTtcclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJFN09MVUNoWUNleE1VZ09vbEtZak9RPT1cIik7XHJcbiAgICBtYXRlcmlhbC50aXRsZSA9IG5hbWU7XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxMC41NnB4XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxNS44NHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUubWFyZ2luID0gXCIycHggYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgbWF0ZXJpYWwuc3R5bGUuYmFja2dyb3VuZCA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVswXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmNvbG9yID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzFdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YkRpdi5jbGFzc0xpc3QuYWRkKFwibmxRaXJwU2tkTEgwYTYrQzRsaGR1QT09XCIpO1xyXG4gICAgY29uc3QgbWF0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbWF0VGV4dC5jbGFzc0xpc3QuYWRkKFwicmpwWUwxaTljWm1mNDdmTTlxV3laUT09XCIpO1xyXG4gICAgbWF0VGV4dC50ZXh0Q29udGVudCA9IHRpY2tlcjtcclxuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChtYXRUZXh0KTtcclxuICAgIG1hdGVyaWFsLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbiAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgaWYgKGFtb3VudCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJHMzdmVUpQd01vSjZmS0hER2VnKy13PT1cIik7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcImJIamxEUEI4NFV6MHlVbnZIYS1ZNUE9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcIl82T0s2c1hOaklJaHEzTkREOUVMVkd3PT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJnbDczdm5wNWpvK1ZhZXBEUm9jdW5BPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LnRleHRDb250ZW50ID0gYW1vdW50O1xyXG4gICAgICAgIG51bWJlckRpdi5hcHBlbmRDaGlsZChudW1iZXJTdWJEaXYpO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUGljdHVyZTtcclxuICAgIH1cclxuICAgIHZhciBzdXBlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VwZXJFbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZCh0b3RhbFBpY3R1cmUpO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUud2lkdGggPSBcIjY0cHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5tYXJnaW4gPSBcIjNweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcImF1dG9cIjtcclxuICAgIGlmICh0ZXh0ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiMnB4XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XHJcbiAgICBjb25zdCBsaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtEaXYuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpbmtEaXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTmV3QkZSQnV0dG9uKTtcclxuICAgIGlmIChidXR0b24gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFN1Ym1pdENvbW1hbmQgPSAoaW5wdXQsIGNtZCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XHJcbiAgICBidXR0b24uY2xpY2soKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShpbnB1dCwgdmFsdWUpIHtcclxuICAgIHZhciBwcm9wRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93W1wiSFRNTElucHV0RWxlbWVudFwiXS5wcm90b3R5cGUsIFwidmFsdWVcIik7XHJcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XHJcbiAgICBpZiAobmF0aXZlSW5wdXRWYWx1ZVNldHRlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5wdXQsIHZhbHVlKTtcclxuICAgIHZhciBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRFdmVudC5pbml0RXZlbnQoJ2lucHV0JywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgaW5wdXQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChzZWxlY3RvciwgY2FsbGJhY2ssIG9ubHlPbmNlID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgZ2V0RWxlbWVudHNGcm9tTm9kZXMgPSAobm9kZXMpID0+IChBcnJheS5mcm9tKG5vZGVzKSkuZmxhdE1hcChub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IDMgPyBudWxsIDogQXJyYXkuZnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcclxuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljQ2xlYW51cChjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uID0gMikge1xyXG4gICAgY29uc3QgcG93ZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwb3dlcikgLyBwb3dlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVycyhidWZmZXJDb2RlKSB7XHJcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKC4sICcke2J1ZmZlckNvZGV9JyldLy4uLy4uYCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9UWVBFLCBudWxsKTtcclxuICAgIHZhciBidWZmZXJzID0gW107XHJcbiAgICB2YXIgbm9kZTtcclxuICAgIHdoaWxlIChub2RlID0gbm9kZXMuaXRlcmF0ZU5leHQoKSkge1xyXG4gICAgICAgIGJ1ZmZlcnMucHVzaChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidWZmZXJzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5WFBhdGgoeHBhdGgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKHhwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1VOT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlKHRhYmxlLCBjb2x1bW4sIHNvcnRUeXBlKSB7XHJcbiAgICB2YXIgc29ydGVyID0gW107XHJcbiAgICBpZiAodGFibGUuY2hpbGRyZW5bMV0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLmNoaWxkcmVuWzFdLmNoaWxkcmVuKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gcm93c1tpXS5jaGlsZHJlbltjb2x1bW5dO1xyXG4gICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvcnRlci5wdXNoKFtpdGVtLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQsIHJvd3NbaV1dKTtcclxuICAgIH1cclxuICAgIGlmIChzb3J0VHlwZSA9PSBcImFscGhcIikge1xyXG4gICAgICAgIHNvcnRlci5zb3J0KHRhYmxlU29ydEFscGgpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc29ydGVyKTtcclxuICAgIHNvcnRlci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRhYmxlLmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgaXRlbVsxXSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB0YWJsZVNvcnRBbHBoKGEsIGIpIHtcclxuICAgIHJldHVybiBhWzBdLmxvY2FsZUNvbXBhcmUoYlswXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRpbGUsIGhlYWRlcnMsIHNlY3Rpb25IZWFkZXJUaXRsZSA9IFwiXCIpIHtcclxuICAgIGlmIChzZWN0aW9uSGVhZGVyVGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIHNlY3Rpb25IZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2VjdGlvbkhlYWRlclRpdGxlKSk7XHJcbiAgICAgICAgc2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcclxuICAgIH1cclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XHJcbiAgICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgaGVhZGVycykge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgICByZXR1cm4gdGJvZHk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbC50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU2VsZWN0b3IgPSB7XHJcbiAgICBMTUNvbW1vZGl0eUFkVGV4dDogXCJkaXZbY2xhc3N+PSdTeE1vbmFpY1ByclM0SllUdmUrLVJBPT0nXVwiLFxyXG4gICAgTE1Db21tb2RpdHlBZFByaWNlU3BhbjogXCJkaXZbY2xhc3N+PSdaU2NHOUFqY1RSZ0orTVFPWEx1Q1dBPT0nXSA+IHNwYW5cIixcclxuICAgIFByb2RJdGVtOiBcIkpLdFQ0cnJJQzBHa1BFQW5abFljU2c9PVwiLFxyXG4gICAgUHJvZFF1ZXVlVGFibGU6IFwidGFibGVbY2xhc3N+PSdfMVFBaHBEVWhkKzdIV0p4cEh0b1dKUT09J11cIixcclxuICAgIFByb2RRdWV1ZUhlYWRlcjogXCJsZ0UxKys3Mys2b1l4VlNhT3Rpay1nPT1cIixcclxuICAgIEJ1ZmZlckhlYWRlcjogJ2UyUEtSS1pVVzZLOXhMS05BUDU2Y2c9PSBZdHU2Zm82akxiazQzWXFPMHlXa1FBPT0nLFxyXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxyXG4gICAgTE1Qb3N0Rm9ybTogXCJhcnRpY2xlW2NsYXNzfj0nencrMHpRQlp2YWxhN3lHcCtBZDNEdz09J10gPiBkaXYgPiBkaXYgPiBmb3JtXCIsXHJcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcIiN1bmRlZmluZWQgPiBkaXYgPiBkaXYuTjMyR0w4Q0pCT3czLXJOeDBQQlprUVxcXFw9XFxcXD0uZlRUNTJpXFxcXCsxb0ZhdXhIT2pWZkdUd3dcXFxcPVxcXFw9Lk83Ulg0elhMNGd6SExvT3dUVmJyWHdcXFxcPVxcXFw9ID4gZGl2Ll80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnXFxcXD1cXFxcPS5SVXV3MTFiNjMxZVhyUVlwLUlkMndnXFxcXD1cXFxcPVwiLFxyXG4gICAgWElUVGlsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgWElUVGlsZUZsb2F0OiBcIiNUT1VSX1RBUkdFVF9FTVBUWV9USUxFID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgQnVmZmVyVGl0bGU6IFwiXzRLc2kwOVZYaGZ2a0dndFBiaENFeWc9PSBSVXV3MTFiNjMxZVhyUVlwLUlkMndnPT1cIixcclxuICAgIE5vdGlmaWNhdGlvbjogXCJkaXZbY2xhc3N+PSdfNmlUTUpaK3htLVBiRytuV29QcWg3Zz09J11cIixcclxuICAgIFByb2RRdWV1ZTogXCJkaXZbY2xhc3N+PSdvMVljWXJEa3h0OUl2TjRBcENFakl3PT0nXVwiLFxyXG4gICAgUHJvZFdpbmRvdzogXCJkaXZbY2xhc3N+PSdJdzF6TXRjckI3TkZDeEFHNHhUejhnPT0nXVwiLFxyXG4gICAgUHJvZFBhbmVsOiBcImRpdltjbGFzc349J2dlY0k1dUdCbHV2alA1R0NSazNkSEE9PSddXCIsXHJcbiAgICBOZXdCRlJCdXR0b246IFwiVE9VUl9UQVJHRVRfQlVUVE9OX0JVRkZFUl9ORVdcIixcclxuICAgIFdob2xlV2luZG93OiBcIiNjb250YWluZXJcIixcclxuICAgIEJ1ZmZlclRleHRGaWVsZDogXCIuVW9Pb2g5RUd4N1lpaGV6a1NHZVYyUVxcXFw9XFxcXD1cIixcclxuICAgIEJ1ZmZlckxpc3Q6IFwiI2NvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMylcIixcclxuICAgIFNjcmVlbkNvbnRyb2xzOiBcIlRPVVJfVEFSR0VUX1NDUkVFTl9DT05UUk9MU1wiLFxyXG4gICAgVHJhbnNmZXJBcmVhOiBcImRpdltjbGFzc349J0I0Y2NDSGhFaDdXMHhkLVlZZzNxVGc9PSddXCIsXHJcbiAgICBUcmFuc2ZlckZpZWxkOiBcImRpdltjbGFzc349J3h1eTJ3cEJDZHpnYzhHM3czQWxYVHc9PSddXCIsXHJcbiAgICBMZWZ0U2lkZWJhcjogXCJUT1VSX1RBUkdFVF9TSURFQkFSX0xFRlRfMDJcIixcclxuICAgIEJ1ZmZlckFyZWE6IFwiZGl2W2NsYXNzfj0nWmFwaFZWK2Z5YUlpTENKeUJDc1pDQT09J11cIixcclxuICAgIENYT1NUYWJsZTogXCJkaXZbY2xhc3N+PSdnZWNJNXVHQmx1dmpQNUdDUmszZEhBPT0nXVwiLFxyXG4gICAgU2NyZWVuTmFtZTogXCJzcGFuW2NsYXNzfj0nSXVYb3BvcnJEZjdxeElsLW1rTldoQT09J11cIixcclxuICAgIENvbnRERm9ybTogXCJkaXZbY2xhc3N+PSdUSUdKaGVOaWxUenVDaGM4KzBFMzhBPT0nXVwiLFxyXG4gICAgQ29uZGl0aW9uRWRpdG9yOiBcImRpdltjbGFzc349J05MT3JIN2hGNWZiS0llc3FXM3VTa0E9PSddXCIsXHJcbiAgICBDaGF0TWVzc2FnZTogXCJkaXZbY2xhc3N+PSdiWThxU1BjRkZMa2lLTkVxT3JLSGlBPT0nXVwiLFxyXG4gICAgQ2hhdFdpbmRvdzogXCJkaXZbY2xhc3N+PSd0dkxoNzBJZXl6alBCWGxOU0RZb2tnPT0nXVwiLFxyXG4gICAgQ2hhdElucHV0OiBcImRpdltjbGFzc349J0JBcnhhMnlHei11NUdnaVQtdXZJOVE9PSddXCIsXHJcbiAgICBDaGF0VGlsZTogXCJkaXZbY2xhc3N+PSdfOE1acy1waVktK3QyTk9YUlBoTU02QT09J11cIixcclxuICAgIE1hdGVyaWFsSWNvbjogXCJFN09MVUNoWUNleE1VZ09vbEtZak9RPT1cIlxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TZWxlY3Rvci50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQ3VycmVuY3lTeW1ib2xzID0ge1xyXG4gICAgXCJDSVNcIjogXCLigqFcIixcclxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXHJcbiAgICBcIk5DQ1wiOiBcIuKCplwiLFxyXG4gICAgXCJJQ0FcIjogXCLHglwiLFxyXG4gICAgXCJFQ0RcIjogXCLigqxcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IFJhdGluZ0NvbG9ycyA9IHtcclxuICAgIFwiUFwiOiBcIiMxYjZiOWNcIixcclxuICAgIFwiVVwiOiBcIiM4YjIxMWVcIixcclxuICAgIFwiRlwiOiBcIiNlMjZjMzdcIixcclxuICAgIFwiRVwiOiBcIiNlNzc4MmJcIixcclxuICAgIFwiRFwiOiBcIiNlODdkMjhcIixcclxuICAgIFwiQ1wiOiBcIiNlZDg5MWNcIixcclxuICAgIFwiQlwiOiBcIiNmMTk1MTBcIixcclxuICAgIFwiQVwiOiBcIiNmNmEyMDRcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgUGxhbmV0Q29tbWFuZHMgPSBbXCJBRE1cIiwgXCJCU0NcIiwgXCJDT0dDXCIsIFwiQ09HQ1BFWFwiLCBcIkNPR0NVXCIsIFwiRkxUUFwiLCBcIkxSXCIsIFwiTE1QXCIsIFwiTE1cIiwgXCJQTElcIiwgXCJQT1BJXCIsIFwiUE9QUlwiLCBcIlBQU1wiLCBcIlNIWVwiLCBcIldBUlwiXTtcclxuZXhwb3J0IGNvbnN0IFBsYW5ldE5hbWVzID0ge1xyXG4gICAgXCJMRU1VUklBXCI6IFwiQUotNzY4YVwiLFxyXG4gICAgXCJHQUxMVVNcIjogXCJBTS03ODNiXCIsXHJcbiAgICBcIkVNRU5USU9SXCI6IFwiQU0tNzgzY1wiLFxyXG4gICAgXCJUWVBIT05cIjogXCJBVS01MjJiXCIsXHJcbiAgICBcIk5PVkEgSE9OU0hVXCI6IFwiQlMtNzg4Y1wiLFxyXG4gICAgXCJQWVJHT1NcIjogXCJDSC03NzFhXCIsXHJcbiAgICBcIlRBTE9TSUFcIjogXCJEQy04MjNiXCIsXHJcbiAgICBcIk9STVwiOiBcIkRXLTQ1NmdcIixcclxuICAgIFwiTUFOSUZPTERcIjogXCJFTC0xNzliXCIsXHJcbiAgICBcIk5PVkEgVU5BTEFTS0FcIjogXCJFWi00NzZiXCIsXHJcbiAgICBcIkxBIEZPUkdFXCI6IFwiRkstMzcxYlwiLFxyXG4gICAgXCJCT1VDSEVSXCI6IFwiRkstNzk0YlwiLFxyXG4gICAgXCJWQVVMVFwiOiBcIkdDLTY0NWJcIixcclxuICAgIFwiQ0hVXCI6IFwiR1ktMTEwY1wiLFxyXG4gICAgXCJQT1NFSURPTlwiOiBcIkhNLTA0OWJcIixcclxuICAgIFwiQVBPVEhFQ0FSWVwiOiBcIklBLTYwM2JcIixcclxuICAgIFwiRUxFQ1RST05JQ0FcIjogXCJJWS0wMjhjXCIsXHJcbiAgICBcIk5FTUVTSVNcIjogXCJKUy0yOTlhXCIsXHJcbiAgICBcIkdJQlNPTlwiOiBcIkpTLTk1MmNcIixcclxuICAgIFwiQVVTVFJBTElBXCI6IFwiS0ktNDQ2YVwiLFxyXG4gICAgXCJERU1FVEVSXCI6IFwiS0ktNDQ2YlwiLFxyXG4gICAgXCJIRVJNRVNcIjogXCJLSS00NDhiXCIsXHJcbiAgICBcIlJPQ0tcIjogXCJLUS05NjZiXCIsXHJcbiAgICBcIk1JTExJV0FZU1wiOiBcIktXLTAyMGNcIixcclxuICAgIFwiR0VJREkgUFJJTUVcIjogXCJLVy0zNThiXCIsXHJcbiAgICBcIkVUSEVSV0lORFwiOiBcIktXLTY4OGNcIixcclxuICAgIFwiS0lOWkFcIjogXCJMRy00MThiXCIsXHJcbiAgICBcIlBMQU5FVCBNQyBQTEFORVRGQUNFXCI6IFwiTEctOTEzZVwiLFxyXG4gICAgXCJBUkFUT1JBXCI6IFwiTFMtMjMxYlwiLFxyXG4gICAgXCJHUklGRk9OU1RPTkVcIjogXCJMUy0zMDBjXCIsXHJcbiAgICBcIkpVUkFcIjogXCJPRi0yNTlkXCIsXHJcbiAgICBcIkJFUlRISUVSXCI6IFwiT0YtMzc1YlwiLFxyXG4gICAgXCJEQU5BS0lMXCI6IFwiT1QtNDQyYlwiLFxyXG4gICAgXCJJSVJPTlwiOiBcIk9ULTU4MGFcIixcclxuICAgIFwiTU9OVEVNXCI6IFwiT1QtNTgwYlwiLFxyXG4gICAgXCJWQUxMSVNcIjogXCJPVC01ODBjXCIsXHJcbiAgICBcIlBBTExBREFcIjogXCJPVC01ODBkXCIsXHJcbiAgICBcIlBSSVNNXCI6IFwiT1QtODg5YVwiLFxyXG4gICAgXCJTQUxBRElOXCI6IFwiUEctODk5YlwiLFxyXG4gICAgXCJOQVNDRU5UXCI6IFwiUUotMTQ5Y1wiLFxyXG4gICAgXCJBQ0VMQU5EXCI6IFwiUUotNjg0YlwiLFxyXG4gICAgXCJDSVJDRVwiOiBcIlFRLTAwMWJcIixcclxuICAgIFwiQ0VMRUJESUxcIjogXCJRUS02NDViXCIsXHJcbiAgICBcIk1BTEFIQVRcIjogXCJSQy0wNDBiXCIsXHJcbiAgICBcIklST05GT1JHRVwiOiBcIlJDLTA0MGNcIixcclxuICAgIFwiSUNFIFNUQVRJT04gQUxQSEFcIjogXCJTRS0xMTBjXCIsXHJcbiAgICBcIlNIRU9MXCI6IFwiVEQtMjAzYlwiLFxyXG4gICAgXCJSSEFaRVNcIjogXCJURC0yMjhiXCIsXHJcbiAgICBcIkFTQkVTVE9TIExFQUQgQVNCRVNUT1NcIjogXCJVVi0wNzJjXCIsXHJcbiAgICBcIktBVE9BXCI6IFwiVVYtMzUxYVwiLFxyXG4gICAgXCJZQU5OSUNLXCI6IFwiVVYtMzUxYlwiLFxyXG4gICAgXCJVTUJSQVwiOiBcIlVWLTM1MWNcIixcclxuICAgIFwiQklPR0VORVNJU1wiOiBcIlVWLTM1MWRcIixcclxuICAgIFwiUFJPWElPTlwiOiBcIlVWLTc5NmJcIixcclxuICAgIFwiUFJPTUlUT1JcIjogXCJWSC0zMzFhXCIsXHJcbiAgICBcIkhFTElPTiBQUklNRVwiOiBcIlZILTMzMWRcIixcclxuICAgIFwiT0RZU1NFVVNcIjogXCJWSC0zMzFmXCIsXHJcbiAgICBcIkFWQUxPTlwiOiBcIlZILTMzMWdcIixcclxuICAgIFwiSFlEUk9OXCI6IFwiVkgtMzMxaVwiLFxyXG4gICAgXCJNSU1BUlwiOiBcIldDLTcwMmJcIixcclxuICAgIFwiTUFHVVNcIjogXCJYRC0zNTRiXCIsXHJcbiAgICBcIlVQT05PUlwiOiBcIlhILTMyOWFcIixcclxuICAgIFwiTElCRVJUQVNcIjogXCJYSC01OTRhXCIsXHJcbiAgICBcIktJUlVOQVwiOiBcIlhILTU5NGJcIixcclxuICAgIFwiQ09SVEVaXCI6IFwiWEgtNTk0Y1wiLFxyXG4gICAgXCJLVUJcIjogXCJZSS0wNTlmXCIsXHJcbiAgICBcIkhBUlBJTkFcIjogXCJZSS0yMDloXCIsXHJcbiAgICBcIkFSQ0FESUFcIjogXCJZSS02ODNjXCIsXHJcbiAgICBcIlZFUkRBTlRcIjogXCJZSS03MTViXCIsXHJcbiAgICBcIk5PUldJQ0tcIjogXCJZSy02NDliXCIsXHJcbiAgICBcIk5JS0VcIjogXCJaVi0xOTRhXCIsXHJcbiAgICBcIkhFUEhBRVNUVVNcIjogXCJaVi0zMDdjXCIsXHJcbiAgICBcIlBIT0JPU1wiOiBcIlpWLTMwN2RcIixcclxuICAgIFwiREVJTU9TXCI6IFwiWlYtNzU5Y1wiLFxyXG4gICAgXCJIQVJNT05JQVwiOiBcIlpWLTg5NmJcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxOYW1lcyA9IHtcclxuICAgIFwiQUFSXCI6IFtcIkFudGVubmEgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFCSFwiOiBbXCJBZHZhbmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBQ1NcIjogW1wiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJBREVcIjogW1wiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBRFJcIjogW1wiQXV0by1Eb2NcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQURTXCI6IFtcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFFRlwiOiBbXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBRU5cIjogW1wiQWR2YW5jZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZQXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZSXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBR1NcIjogW1wiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQUhQXCI6IFtcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSVJcIjogW1wiQWlyIFNjcnViYmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBTFwiOiBbXCJBbHVtaW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFMRVwiOiBbXCJTdGVsbGFyIFBhbGUgQWxlXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkFMR1wiOiBbXCJQcm90ZWluLVJpY2ggQWxnYWVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkFMT1wiOiBbXCJBbHVtaW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQU1NXCI6IFtcIkFtbW9uaWFcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiQU5aXCI6IFtcIkFkdmFuY2VkIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQVBUXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJBUlwiOiBbXCJBcmdvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBUlBcIjogW1wiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFTRVwiOiBbXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFTVFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJBVEFcIjogW1wiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVRQXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFVXCI6IFtcIkdvbGRcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFVT1wiOiBbXCJHb2xkIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkFXRlwiOiBbXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJBV0hcIjogW1wiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJBQ1wiOiBbXCJIZWxwZnVsIEJhY3RlcmlhXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCQUlcIjogW1wiQmFzaWMgQUkgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiQkJIXCI6IFtcIkJhc2ljIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJDT1wiOiBbXCJCdWRnZXQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCREVcIjogW1wiQmFzaWMgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCRVwiOiBbXCJCZXJ5bGxpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQkVBXCI6IFtcIlByb3RlaW4tUmljaCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQkVSXCI6IFtcIkJlcnlsIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJGUFwiOiBbXCJCYXNpYyBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkJGUlwiOiBbXCJCYXNpYyBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkdDXCI6IFtcIlNoaWVsZGVkIENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQkdPXCI6IFtcIkJsdWUgR29sZFwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQkdTXCI6IFtcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkJIUFwiOiBbXCJCYXNpYyBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQklEXCI6IFtcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJMXCI6IFtcIkJyZWF0aGFibGUgTGlxdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTEVcIjogW1wiRGVzYXR1cmF0aW9uIEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTUZcIjogW1wiQmFzaWMgTWFpbmZyYW1lXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCTkRcIjogW1wiQmFuZGFnZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQk9SXCI6IFtcIkJvcm9uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJPU1wiOiBbXCJCb3Jvc2lsaWNhdGVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJQVFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlIxXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlIyXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMlwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlJNXCI6IFtcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJST1wiOiBbXCJCcm9uemVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJSUFwiOiBbXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlJTXCI6IFtcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCU0NcIjogW1wiQm9keSBTY2FubmVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCU0VcIjogW1wiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVEFcIjogW1wiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQlRTXCI6IFtcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkJXSFwiOiBbXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQldTXCI6IFtcIkJhc2ljIFdvcmtzdGF0aW9uXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJDXCI6IFtcIkNhcmJvblwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDQVwiOiBbXCJDYWxjaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBRlwiOiBbXCJDYWZmZWluYXRlZCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQ0FQXCI6IFtcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJDQkxcIjogW1wiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0JNXCI6IFtcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQlNcIjogW1wiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0NcIjogW1wiQ2xpbWF0ZSBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ0RcIjogW1wiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiQ0RcIjogW1wiQ2FwYWNpdGl2ZSBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiQ0ZcIjogW1wiQ2VyYW1pYyBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ0hBXCI6IFtcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQ0xcIjogW1wiQ2hsb3JpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0xJXCI6IFtcIkNhbGljaGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJDTUtcIjogW1wiXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiQ09GXCI6IFtcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkNPTVwiOiBbXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ09UXCI6IFtcIkNvdHRvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ1FMXCI6IFtcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FNXCI6IFtcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRU1wiOiBbXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRVFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1JVXCI6IFtcIkNyeW9nZW5pYyBVbml0XCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDU1RcIjogW1wiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkNURlwiOiBbXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDVVwiOiBbXCJDb3BwZXJcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkNVT1wiOiBbXCJDb3BwZXIgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiREFcIjogW1wiRGF0YSBBbmFseXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEQ0hcIjogW1wiRHJvbmUgQ2hhc3Npc1wiLCBcImRyb25lc1wiXSxcclxuICAgIFwiRENMXCI6IFtcIkR1cmFibGUgQ2FzaW5nIExcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENNXCI6IFtcIkR1cmFibGUgQ2FzaW5nIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENTXCI6IFtcIkR1cmFibGUgQ2FzaW5nIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRERcIjogW1wiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRERUXCI6IFtcIkREVCBQbGFudCBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiREVDXCI6IFtcIkRlY29yYXRpdmUgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkRJU1wiOiBbXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRE9VXCI6IFtcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiRFJGXCI6IFtcIkRyb25lIEZyYW1lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEVlwiOiBbXCJEYXRhIFZpc3VhbGl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRFdcIjogW1wiRHJpbmtpbmcgV2F0ZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJFRENcIjogW1wiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRUVTXCI6IFtcIkVucmljaGVkIEVpbnN0ZWluaXVtXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJFTkdcIjogW1wiU3RhbmRhcmQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRVBPXCI6IFtcIkVwb3h5IFJlc2luXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiRVNcIjogW1wiRWluc3RlaW5pdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiRVRDXCI6IFtcIkVucmljaGVkIFRlY2huZXRpdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVYT1wiOiBbXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGXCI6IFtcIkZsdW9yaW5lXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkZBTFwiOiBbXCJGZXJyb21pbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkFOXCI6IFtcIkFjdGl2ZSBDb29saW5nIERldmljZVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkZDXCI6IFtcIkZsb3cgQ29udHJvbCBEZXZpY2VcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZFXCI6IFtcIklyb25cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkZFT1wiOiBbXCJJcm9uIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkZFVFwiOiBbXCJGZXJyby1UaXRhbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkZcIjogW1wiRlRMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiRkZDXCI6IFtcIkZUTCBGaWVsZCBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJGSU1cIjogW1wiRmxhdm91cmVkIEluc3RhLU1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGSVJcIjogW1wiRmlzc2lvbiBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGTE9cIjogW1wiRmxvYXRpbmcgVGFua1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxQXCI6IFtcIkZsdWlkIFBpcGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxYXCI6IFtcIkZsdXhcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkZPRFwiOiBbXCJBbGwtUHVycG9zZSBGb2RkZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkZTRVwiOiBbXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGVU5cIjogW1wiRW50ZXJ0YWlubWVudCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJHQUxcIjogW1wiR2FsZXJpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJHQ1wiOiBbXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJHQ0hcIjogW1wiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHRU5cIjogW1wiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR0lOXCI6IFtcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkdMXCI6IFtcIkdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiR05aXCI6IFtcIkdsYXNzIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR1JBXCI6IFtcIldpbmUtUXVhbGl0eSBHcmFwZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdSTlwiOiBbXCJIaWdoLUNhcmIgR3JhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJHVlwiOiBbXCJHYXMgVmVudFwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiSFwiOiBbXCJIeWRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIMk9cIjogW1wiV2F0ZXJcIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJIQUJcIjogW1wiSGFiaXRhdCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJIQUxcIjogW1wiSGFsaXRlIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkhDQ1wiOiBbXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiSENQXCI6IFtcIkh5ZHJvY2FyYm9uIFBsYW50c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSERcIjogW1wiSG9sb2dyYXBoaWMgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSEVcIjogW1wiSGVsaXVtXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFM1wiOiBbXCJIZWxpdW0tMyBJc290b3BlXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFUlwiOiBbXCJTcGljeSBIZXJic1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSEVYXCI6IFtcIkhlbGlvdHJvcGUgRXh0cmFjdFwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhIUFwiOiBbXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiSE1TXCI6IFtcIkhhek1hdCBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJITlpcIjogW1wiSHlwZXJ0aHJ1c3QgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIT0dcIjogW1wiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSE9QXCI6IFtcIkZsb3dlcnkgSG9wc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSFBDXCI6IFtcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhQUlwiOiBbXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIU0VcIjogW1wiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJIU1NcIjogW1wiU21hcnQgU3BhY2UgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhURVwiOiBbXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIWVJcIjogW1wiSHlwZXItcG93ZXIgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSVwiOiBbXCJJb2RpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiSURDXCI6IFtcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklNTVwiOiBbXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklORFwiOiBbXCJJbmRpZ28gQ29sb3JhbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIklOU1wiOiBbXCJJbnN1Rm9hbVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkpVSVwiOiBbXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIktPTVwiOiBbXCJLb21idWNoYVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJLVlwiOiBbXCJLZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkxCSFwiOiBbXCJMaWdodHdlaWdodCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMQ1wiOiBbXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkxDQlwiOiBbXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMQ1JcIjogW1wiTGlxdWlkIENyeXN0YWxzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJMRFwiOiBbXCJMb2NhbCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIkxERVwiOiBbXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxESVwiOiBbXCJMYXNlciBEaW9kZXNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTEVTXCI6IFtcIkxpcXVpZCBFaW5zdGVpbml1bVwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkxGRVwiOiBbXCJMYXJnZSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTEZMXCI6IFtcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMRlBcIjogW1wiTG93LWhlYXQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMSFBcIjogW1wiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkxJXCI6IFtcIkxpdGhpdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkxJT1wiOiBbXCJMaXRoaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkxJU1wiOiBbXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMSVRcIjogW1wiTmVvbiBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkxPR1wiOiBbXCJMb2dpc3RpY3MgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMU0VcIjogW1wiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMU0xcIjogW1wiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxTVFwiOiBbXCJMaW1lc3RvbmVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTFRBXCI6IFtcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxVXCI6IFtcIkxhYm9yYXRvcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiTUFHXCI6IFtcIk1hZ25ldGl0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJNQUlcIjogW1wiSGlnaC1DYXJiIE1haXplXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNQlwiOiBbXCJNb3RoZXJib2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1DQlwiOiBbXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUNHXCI6IFtcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk1FQVwiOiBbXCJRdWFsaXR5IE1lYXQgTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1FRFwiOiBbXCJCYXNpYyBNZWRpY2FsIEtpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1GRVwiOiBbXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk1GS1wiOiBbXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk1GTFwiOiBbXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1HXCI6IFtcIk1hZ25lc2l1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJNR0NcIjogW1wiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNR1NcIjogW1wiTWFnbmVzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1ITFwiOiBbXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNSFBcIjogW1wiTWljcm8gSGVhZHBob25lc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiTUxJXCI6IFtcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTVBDXCI6IFtcIk1pY3JvLVByb2Nlc3NvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1TTFwiOiBbXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1UQ1wiOiBbXCJNZWdhVHViZSBDb2F0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTVRQXCI6IFtcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1VU1wiOiBbXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNV0ZcIjogW1wiTWVkaXVtIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk5cIjogW1wiTml0cm9nZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkFcIjogW1wiU29kaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk5BQlwiOiBbXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5DU1wiOiBbXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5FXCI6IFtcIk5lb25cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkZcIjogW1wiTmV0d29ya2luZyBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJORklcIjogW1wiTmFubyBGaWJlclwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5HXCI6IFtcIk5hbm8tQ29hdGVkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkxcIjogW1wiTnlsb24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIk5OXCI6IFtcIk5ldXJhbCBOZXR3b3JrXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk5PWlwiOiBbXCJCYXNpYyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk5SXCI6IFtcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TXCI6IFtcIk51dHJpZW50IFNvbHV0aW9uXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOU1RcIjogW1wiTmV1cm9TdGltdWxhbnRzXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIk5VVFwiOiBbXCJUcmlnbHljZXJpZGUgTnV0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTlYxXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk5WMlwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJPXCI6IFtcIk94eWdlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJPRkZcIjogW1wiT2ZmaWNlIFN1cHBsaWVzXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiT0xGXCI6IFtcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJPU1wiOiBbXCJPcGVyYXRpbmcgU3lzdGVtXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk9WRVwiOiBbXCJCYXNpYyBPdmVyYWxsc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBDQlwiOiBbXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJQREFcIjogW1wiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQRVwiOiBbXCJQb2x5LUV0aHlsZW5lXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBGRVwiOiBbXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlBHXCI6IFtcIlBvbHltZXIgR3JhbnVsYXRlXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBJQlwiOiBbXCJQaW5lYmVycmllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUEtcIjogW1wiUGFpbmtpbGxlcnNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiUE9XXCI6IFtcIlBvd2VyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiUFBBXCI6IFtcIlByb3RlaW4gUGFzdGVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlBTSFwiOiBbXCJQcmVzc3VyZSBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlBTTFwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU01cIjogW1wiUG9seW1lciBTaGVldCBUeXBlIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFNTXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBUXCI6IFtcIlBvd2VyIFRvb2xzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUFdPXCI6IFtcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiUUNSXCI6IFtcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFEXCI6IFtcIlJhZGlvIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiUkFHXCI6IFtcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJBTVwiOiBbXCJNZW1vcnkgQmFua1wiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJBVFwiOiBbXCJCYXNpYyBSYXRpb25zXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUkJIXCI6IFtcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkNPXCI6IFtcIlJhdyBDb3R0b24gRmliZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlJDU1wiOiBbXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQ1RcIjogW1wiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJERVwiOiBbXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkRMXCI6IFtcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkRTXCI6IFtcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkVBXCI6IFtcIkNoZW1pY2FsIFJlYWdlbnRzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJSRURcIjogW1wiUmVzY3VlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJSRVBcIjogW1wiUmVwYWlyIEtpdFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJSR1wiOiBbXCJSZWluZm9yY2VkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiUkdPXCI6IFtcIlJlZCBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJSSFBcIjogW1wiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiUk9NXCI6IFtcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJSU0VcIjogW1wiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJTSFwiOiBbXCJSYWRpYXRpb24gU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJSU0lcIjogW1wiUmF3IFNpbGsgU3RyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUlRBXCI6IFtcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiU1wiOiBbXCJTdWxmdXJcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiU0FcIjogW1wiU2VhcmNoIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBTFwiOiBbXCJTb3J0aW5nIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBUlwiOiBbXCJTZW5zb3IgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIlNDXCI6IFtcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiU0NCXCI6IFtcIlNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNDTlwiOiBbXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJTQ1JcIjogW1wiU3VsZnVyIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlNEUlwiOiBbXCJTdXJnaWNhbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU0VBXCI6IFtcIlBvbHktU3VsZml0ZSBTZWFsYW50XCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiU0VOXCI6IFtcIlNlbnNvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlNFUVwiOiBbXCJTdXJnaWNhbCBFcXVpcG1lbnRcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU0ZcIjogW1wiU1RMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiU0ZFXCI6IFtcIlNtYWxsIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJTRktcIjogW1wiU21hbGwgRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlNGTFwiOiBbXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0lcIjogW1wiU2lsaWNvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU0lMXCI6IFtcIlNpbGtlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiU0lPXCI6IFtcIlNpbGljb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiU05NXCI6IFtcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTT0lcIjogW1wiQXJ0aWZpY2lhbCBTb2lsXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJTT0xcIjogW1wiU29sYXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUFwiOiBbXCJTb2xhciBQYW5lbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUkRcIjogW1wiU2hpcC1SZXBhaXIgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNSUFwiOiBbXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiU1NDXCI6IFtcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJTU0xcIjogW1wiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNUTFwiOiBbXCJTdGVlbFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU1RSXCI6IFtcIk1lZGljYWwgU3RyZXRjaGVyXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlNUU1wiOiBbXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNVXCI6IFtcIlN1cmdlcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiU1VEXCI6IFtcIlN1cnZlaWxsYW5jZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1VOXCI6IFtcIlNhZmV0eSBVbmlmb3JtXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiU1dGXCI6IFtcIlNtYWxsIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRBXCI6IFtcIlRhbnRhbHVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRBQ1wiOiBbXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlRBSVwiOiBbXCJUYW50YWxpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1wiOiBbXCJUZWNobmV0aXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRDQlwiOiBbXCJUaW55IENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlRDTFwiOiBbXCJUQ0wgQWNpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVENPXCI6IFtcIlRlY2huZXRpdW0gT3hpZGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVENTXCI6IFtcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVENVXCI6IFtcIlRyYXVtYSBDYXJlIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlRIRlwiOiBbXCJUaGVybW9GbHVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVEhQXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlRJXCI6IFtcIlRpdGFuaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJUSU9cIjogW1wiVGl0YW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiVEtcIjogW1wiVGVjaG5vS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJUUFVcIjogW1wiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSQVwiOiBbXCJBdWRpbyBUcmFuc21pdHRlclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSTlwiOiBbXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRSVVwiOiBbXCJUcnVzc1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFNcIjogW1wiVGVjdG9zaWxpc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUU0hcIjogW1wiVGhlcm1hbCBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRVQlwiOiBbXCJUZXN0IFR1YmVzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlVUU1wiOiBbXCJVbml2ZXJzYWwgVG9vbHNldFwiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIlZDQlwiOiBbXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJWRUdcIjogW1wiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiVkdcIjogW1wiVml0YUdlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJWSVRcIjogW1wiVml0YSBFc3NlbmNlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWU0NcIjogW1wiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJXXCI6IFtcIlR1bmdzdGVuXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJXQUlcIjogW1wiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIldBTFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJXQ0JcIjogW1wiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldJTlwiOiBbXCJTbWFydCBaaW5mYW5kZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiV01cIjogW1wiV2luZG93IE1hbmFnZXJcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJXT1JcIjogW1wiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIldSXCI6IFtcIldhdGVyIFJlY2xhaW1lclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiV1NcIjogW1wiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJaSVJcIjogW1wiWmlyY29uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlpSXCI6IFtcIlppcmNvbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxzID0ge1xyXG4gICAgXCJBbnRlbm5hIEFycmF5XCI6IFtcIkFBUlwiLCAwLjc4LCAwLjVdLFxyXG4gICAgXCJBZHZhbmNlZCBCdWxraGVhZFwiOiBbXCJBQkhcIiwgMC42LCAwLjldLFxyXG4gICAgXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIjogW1wiQUNTXCIsIDAuMywgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiOiBbXCJBREVcIiwgMC40LCAxLjVdLFxyXG4gICAgXCJBdXRvLURvY1wiOiBbXCJBRFJcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCI6IFtcIkFEU1wiLCAwLjcsIDJdLFxyXG4gICAgXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCI6IFtcIkFFRlwiLCAyLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgU1RMIEVuZ2luZVwiOiBbXCJBRU5cIiwgMTQsIDddLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFB1bXBcIjogW1wiQUZQXCIsIDEsIDAuMjVdLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFJvZFwiOiBbXCJBRlJcIiwgMC40LCAwLjFdLFxyXG4gICAgXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIjogW1wiQUdTXCIsIDMwLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiOiBbXCJBSFBcIiwgMjAsIDEwXSxcclxuICAgIFwiQWlyIFNjcnViYmVyXCI6IFtcIkFJUlwiLCAxLjcsIDNdLFxyXG4gICAgXCJBbHVtaW5pdW1cIjogW1wiQUxcIiwgMi43LCAxXSxcclxuICAgIFwiU3RlbGxhciBQYWxlIEFsZVwiOiBbXCJBTEVcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQWxnYWVcIjogW1wiQUxHXCIsIDAuNywgMV0sXHJcbiAgICBcIkFsdW1pbml1bSBPcmVcIjogW1wiQUxPXCIsIDEuMzUsIDFdLFxyXG4gICAgXCJBbW1vbmlhXCI6IFtcIkFNTVwiLCAwLjg2LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgTm96emxlXCI6IFtcIkFOWlwiLCA2LCAzXSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQVBUXCIsIDAuMDMsIDAuM10sXHJcbiAgICBcIkFyZ29uXCI6IFtcIkFSXCIsIDEuNzg0LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiQVJQXCIsIDAuMDQsIDAuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQVNFXCIsIDAuNSwgMC42XSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiOiBbXCJBU1RcIiwgNC45OCwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkFUQVwiLCAwLjMsIDAuNF0sXHJcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJBVFBcIiwgMi45LCAxXSxcclxuICAgIFwiR29sZFwiOiBbXCJBVVwiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkdvbGQgT3JlXCI6IFtcIkFVT1wiLCAzLjg2LCAxXSxcclxuICAgIFwiQWN0aXZlIFdhdGVyIEZpbHRlclwiOiBbXCJBV0ZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJBV0hcIiwgMC4xMiwgMV0sXHJcbiAgICBcIkhlbHBmdWwgQmFjdGVyaWFcIjogW1wiQkFDXCIsIDAuMTUsIDAuMTVdLFxyXG4gICAgXCJCYXNpYyBBSSBGcmFtZXdvcmtcIjogW1wiQkFJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgQnVsa2hlYWRcIjogW1wiQkJIXCIsIDAuNSwgMC44XSxcclxuICAgIFwiQnVkZ2V0IENvbm5lY3RvcnNcIjogW1wiQkNPXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkJhc2ljIERlY2sgRWxlbWVudHNcIjogW1wiQkRFXCIsIDAuMSwgMS41XSxcclxuICAgIFwiQmVyeWxsaXVtXCI6IFtcIkJFXCIsIDEuODQsIDFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQmVhbnNcIjogW1wiQkVBXCIsIDAuOCwgMV0sXHJcbiAgICBcIkJlcnlsIENyeXN0YWxzXCI6IFtcIkJFUlwiLCAxLjkyLCAxXSxcclxuICAgIFwiQmFzaWMgRnVlbCBQdW1wXCI6IFtcIkJGUFwiLCAwLjgsIDAuMl0sXHJcbiAgICBcIkJhc2ljIEZ1ZWwgUm9kXCI6IFtcIkJGUlwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIlNoaWVsZGVkIENvbm5lY3RvcnNcIjogW1wiQkdDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiQmx1ZSBHb2xkXCI6IFtcIkJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiOiBbXCJCR1NcIiwgMjAsIDNdLFxyXG4gICAgXCJCYXNpYyBIdWxsIFBsYXRlXCI6IFtcIkJIUFwiLCAxMCwgMTBdLFxyXG4gICAgXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCI6IFtcIkJJRFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiQnJlYXRoYWJsZSBMaXF1aWRcIjogW1wiQkxcIiwgMS4xMiwgMV0sXHJcbiAgICBcIkRlc2F0dXJhdGlvbiBBZ2VudFwiOiBbXCJCTEVcIiwgMC41LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNYWluZnJhbWVcIjogW1wiQk1GXCIsIDAuOCwgMS4yXSxcclxuICAgIFwiQmFuZGFnZXNcIjogW1wiQk5EXCIsIDAuMDAxLCAwLjAwNV0sXHJcbiAgICBcIkJvcm9uIENyeXN0YWxzXCI6IFtcIkJPUlwiLCAxLjgsIDFdLFxyXG4gICAgXCJCb3Jvc2lsaWNhdGVcIjogW1wiQk9TXCIsIDEuNSwgMV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkJQVFwiLCAwLjAyLCAwLjNdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzFcIjogW1wiQlIxXCIsIDE4MCwgMzAwXSxcclxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsyXCI6IFtcIkJSMlwiLCAyODAsIDQwMF0sXHJcbiAgICBcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCI6IFtcIkJSTVwiLCAyLjUsIDFdLFxyXG4gICAgXCJCcm9uemVcIjogW1wiQlJPXCIsIDguNzMsIDFdLFxyXG4gICAgXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJCUlBcIiwgMC4wMywgMC4yXSxcclxuICAgIFwiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIjogW1wiQlJTXCIsIDE1MCwgMjAwXSxcclxuICAgIFwiQm9keSBTY2FubmVyXCI6IFtcIkJTQ1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQlNFXCIsIDAuMywgMC41XSxcclxuICAgIFwiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQlRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCI6IFtcIkJUU1wiLCAxLjA1LCAxXSxcclxuICAgIFwiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQldIXCIsIDAuMSwgMV0sXHJcbiAgICBcIkJhc2ljIFdvcmtzdGF0aW9uXCI6IFtcIkJXU1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJDYXJib25cIjogW1wiQ1wiLCAyLjI1LCAxXSxcclxuICAgIFwiQ2FsY2l1bVwiOiBbXCJDQVwiLCAxLjU0LCAxXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgQmVhbnNcIjogW1wiQ0FGXCIsIDAuODYsIDFdLFxyXG4gICAgXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIjogW1wiQ0FQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxhcmdlIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTFwiLCA1LjQsIDIuNF0sXHJcbiAgICBcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQk1cIiwgMy42LCAxLjZdLFxyXG4gICAgXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQlNcIiwgMS44LCAwLjhdLFxyXG4gICAgXCJDbGltYXRlIENvbnRyb2xsZXJcIjogW1wiQ0NcIiwgMC41LCAxXSxcclxuICAgIFwiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiOiBbXCJDQ0RcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiQ2FwYWNpdGl2ZSBEaXNwbGF5XCI6IFtcIkNEXCIsIDAuMDA0LCAwLjAwMl0sXHJcbiAgICBcIkNlcmFtaWMgRmFicmljXCI6IFtcIkNGXCIsIDIuODIsIDFdLFxyXG4gICAgXCJDb21idXN0aW9uIENoYW1iZXJcIjogW1wiQ0hBXCIsIDEuMiwgMC43XSxcclxuICAgIFwiQ2hsb3JpbmVcIjogW1wiQ0xcIiwgMy4yLCAxXSxcclxuICAgIFwiQ2FsaWNoZSBSb2NrXCI6IFtcIkNMSVwiLCAyLjQyLCAxXSxcclxuICAgIFwiXCI6IFtcIkNNS1wiLCA0LjU2LCAzMy4yXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIjogW1wiQ09GXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIjogW1wiQ09NXCIsIDAuNSwgMS41XSxcclxuICAgIFwiQ290dG9uIEZhYnJpY1wiOiBbXCJDT1RcIiwgMC43NywgMV0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiOiBbXCJDUUxcIiwgNzUsIDE1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIjogW1wiQ1FNXCIsIDUwLCAxMDBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIjogW1wiQ1FTXCIsIDI1LCA1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCI6IFtcIkNRVFwiLCAxMi41LCAyNV0sXHJcbiAgICBcIkNyeW9nZW5pYyBVbml0XCI6IFtcIkNSVVwiLCAyLjIsIDJdLFxyXG4gICAgXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiOiBbXCJDU1RcIiwgMS4xNCwgMV0sXHJcbiAgICBcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCI6IFtcIkNURlwiLCA0LjMyLCAxXSxcclxuICAgIFwiQ29wcGVyXCI6IFtcIkNVXCIsIDguOTIsIDFdLFxyXG4gICAgXCJDb3BwZXIgT3JlXCI6IFtcIkNVT1wiLCA0LjAxLCAxXSxcclxuICAgIFwiRGF0YSBBbmFseXplclwiOiBbXCJEQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyb25lIENoYXNzaXNcIjogW1wiRENIXCIsIDAuMiwgMC4wM10sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIExcIjogW1wiRENMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIE1cIjogW1wiRENNXCIsIDAuMDQsIDAuNF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIFNcIjogW1wiRENTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCI6IFtcIkREXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRERUIFBsYW50IEFnZW50XCI6IFtcIkREVFwiLCAwLjExLCAwLjFdLFxyXG4gICAgXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCI6IFtcIkRFQ1wiLCAwLjUsIDJdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCI6IFtcIkRJU1wiLCAwLjAyLCAwLjAyXSxcclxuICAgIFwiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIkRPVVwiLCA1LCA0XSxcclxuICAgIFwiRHJvbmUgRnJhbWVcIjogW1wiRFJGXCIsIDAuMSwgMC4wMl0sXHJcbiAgICBcIkRhdGEgVmlzdWFsaXplclwiOiBbXCJEVlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyaW5raW5nIFdhdGVyXCI6IFtcIkRXXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIjogW1wiRURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRW5yaWNoZWQgRWluc3RlaW5pdW1cIjogW1wiRUVTXCIsIDkuMiwgMV0sXHJcbiAgICBcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIjogW1wiRU5HXCIsIDgsIDRdLFxyXG4gICAgXCJFcG94eSBSZXNpblwiOiBbXCJFUE9cIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIkVpbnN0ZWluaXVtXCI6IFtcIkVTXCIsIDAuODgsIDAuMV0sXHJcbiAgICBcIkVucmljaGVkIFRlY2huZXRpdW1cIjogW1wiRVRDXCIsIDQuMSwgMV0sXHJcbiAgICBcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiOiBbXCJFWE9cIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiRmx1b3JpbmVcIjogW1wiRlwiLCAxLjY5NiwgMV0sXHJcbiAgICBcIkZlcnJvbWluaXVtXCI6IFtcIkZBTFwiLCAzLjIyLCAxXSxcclxuICAgIFwiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCI6IFtcIkZBTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkZsb3cgQ29udHJvbCBEZXZpY2VcIjogW1wiRkNcIiwgMC41LCAwLjI1XSxcclxuICAgIFwiSXJvblwiOiBbXCJGRVwiLCA3Ljg3NCwgMV0sXHJcbiAgICBcIklyb24gT3JlXCI6IFtcIkZFT1wiLCA1LjksIDFdLFxyXG4gICAgXCJGZXJyby1UaXRhbml1bVwiOiBbXCJGRVRcIiwgNi44NSwgMV0sXHJcbiAgICBcIkZUTCBGdWVsXCI6IFtcIkZGXCIsIDAuMDUsIDAuMDFdLFxyXG4gICAgXCJGVEwgRmllbGQgQ29udHJvbGxlclwiOiBbXCJGRkNcIiwgNTAsIDE2XSxcclxuICAgIFwiRmxhdm91cmVkIEluc3RhLU1lYWxcIjogW1wiRklNXCIsIDAuNTUsIDAuNV0sXHJcbiAgICBcIkZpc3Npb24gUmVhY3RvclwiOiBbXCJGSVJcIiwgNywgNC45XSxcclxuICAgIFwiRmxvYXRpbmcgVGFua1wiOiBbXCJGTE9cIiwgMSwgMl0sXHJcbiAgICBcIkZsdWlkIFBpcGluZ1wiOiBbXCJGTFBcIiwgMC4zLCAyXSxcclxuICAgIFwiRmx1eFwiOiBbXCJGTFhcIiwgMC4yNSwgMC4xXSxcclxuICAgIFwiQWxsLVB1cnBvc2UgRm9kZGVyXCI6IFtcIkZPRFwiLCAxLjIsIDFdLFxyXG4gICAgXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCI6IFtcIkZTRVwiLCA2LCAzXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBVbml0XCI6IFtcIkZVTlwiLCA1LCA0XSxcclxuICAgIFwiR2FsZXJpdGUgUm9ja1wiOiBbXCJHQUxcIiwgMi41MSwgMV0sXHJcbiAgICBcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIjogW1wiR0NcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkdDSFwiLCAxLCAwLjZdLFxyXG4gICAgXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCI6IFtcIkdFTlwiLCA1LCAzXSxcclxuICAgIFwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIjogW1wiR0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiR2xhc3NcIjogW1wiR0xcIiwgMC4wMTYsIDAuMDFdLFxyXG4gICAgXCJHbGFzcyBOb3p6bGVcIjogW1wiR05aXCIsIDEuNSwgMV0sXHJcbiAgICBcIldpbmUtUXVhbGl0eSBHcmFwZXNcIjogW1wiR1JBXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBHcmFpbnNcIjogW1wiR1JOXCIsIDAuOSwgMV0sXHJcbiAgICBcIkdhcyBWZW50XCI6IFtcIkdWXCIsIDAuMjUsIDAuMTVdLFxyXG4gICAgXCJIeWRyb2dlblwiOiBbXCJIXCIsIDAuMDcsIDFdLFxyXG4gICAgXCJXYXRlclwiOiBbXCJIMk9cIiwgMC4yLCAwLjJdLFxyXG4gICAgXCJIYWJpdGF0IFVuaXRcIjogW1wiSEFCXCIsIDEwLCA4XSxcclxuICAgIFwiSGFsaXRlIENyeXN0YWxzXCI6IFtcIkhBTFwiLCAyLjE3LCAxXSxcclxuICAgIFwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCI6IFtcIkhDQ1wiLCAwLjAxLCAwLjAwMl0sXHJcbiAgICBcIkh5ZHJvY2FyYm9uIFBsYW50c1wiOiBbXCJIQ1BcIiwgMC44LCAxXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgRGlzcGxheVwiOiBbXCJIRFwiLCAwLjA1LCAyXSxcclxuICAgIFwiSGVsaXVtXCI6IFtcIkhFXCIsIDAuMTQ1LCAxXSxcclxuICAgIFwiSGVsaXVtLTMgSXNvdG9wZVwiOiBbXCJIRTNcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJTcGljeSBIZXJic1wiOiBbXCJIRVJcIiwgMC40LCAxXSxcclxuICAgIFwiSGVsaW90cm9wZSBFeHRyYWN0XCI6IFtcIkhFWFwiLCAxLjEsIDFdLFxyXG4gICAgXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCI6IFtcIkhIUFwiLCAxNSwgMTBdLFxyXG4gICAgXCJIYXpNYXQgV29yayBTdWl0XCI6IFtcIkhNU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSHlwZXJ0aHJ1c3QgTm96emxlXCI6IFtcIkhOWlwiLCA2LCAxMl0sXHJcbiAgICBcIkhvbG9ncmFwaGljIEdsYXNzZXNcIjogW1wiSE9HXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJGbG93ZXJ5IEhvcHNcIjogW1wiSE9QXCIsIDAuMzUsIDFdLFxyXG4gICAgXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCI6IFtcIkhQQ1wiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCI6IFtcIkhQUlwiLCAxOCwgMTVdLFxyXG4gICAgXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkhTRVwiLCAzLjEsIDAuN10sXHJcbiAgICBcIlNtYXJ0IFNwYWNlIFN1aXRcIjogW1wiSFNTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCI6IFtcIkhURVwiLCAyMCwgMTBdLFxyXG4gICAgXCJIeXBlci1wb3dlciBSZWFjdG9yXCI6IFtcIkhZUlwiLCAzNSwgMjVdLFxyXG4gICAgXCJJb2RpbmVcIjogW1wiSVwiLCA0LjkzLCAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCI6IFtcIklEQ1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCI6IFtcIklNTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZGlnbyBDb2xvcmFudFwiOiBbXCJJTkRcIiwgMC4yMSwgMC4yXSxcclxuICAgIFwiSW5zdUZvYW1cIjogW1wiSU5TXCIsIDAuMDYsIDAuMV0sXHJcbiAgICBcIlNlZGF0aXZlIFN1YnN0YW5jZVwiOiBbXCJKVUlcIiwgMS4yLCAxXSxcclxuICAgIFwiS29tYnVjaGFcIjogW1wiS09NXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiS2V2bGFyIEZhYnJpY1wiOiBbXCJLVlwiLCAxLjY1LCAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIjogW1wiTEJIXCIsIDAuMiwgMC42XSxcclxuICAgIFwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIjogW1wiTENcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkxhcmdlIENhcmdvIEJheSBLaXRcIjogW1wiTENCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiTGlxdWlkIENyeXN0YWxzXCI6IFtcIkxDUlwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJMb2NhbCBEYXRhYmFzZVwiOiBbXCJMRFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIjogW1wiTERFXCIsIDAuMSwgMS4yXSxcclxuICAgIFwiTGFzZXIgRGlvZGVzXCI6IFtcIkxESVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJMaXF1aWQgRWluc3RlaW5pdW1cIjogW1wiTEVTXCIsIDguODQsIDFdLFxyXG4gICAgXCJMYXJnZSBGVEwgRW1pdHRlclwiOiBbXCJMRkVcIiwgMC40LCAxLjZdLFxyXG4gICAgXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMRkxcIiwgNjAsIDEwXSxcclxuICAgIFwiTG93LWhlYXQgRnVlbCBQdW1wXCI6IFtcIkxGUFwiLCAwLjUsIDAuMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIjogW1wiTEhQXCIsIDUsIDEwXSxcclxuICAgIFwiTGl0aGl1bVwiOiBbXCJMSVwiLCAwLjU1LCAxXSxcclxuICAgIFwiTGl0aGl1bSBPcmVcIjogW1wiTElPXCIsIDIuNzUsIDFdLFxyXG4gICAgXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCI6IFtcIkxJU1wiLCA1LjYsIDddLFxyXG4gICAgXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJMSVRcIiwgMSwgMl0sXHJcbiAgICBcIkxvZ2lzdGljcyBTeXN0ZW1cIjogW1wiTE9HXCIsIDAuNSwgMS41XSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJMU0VcIiwgMC4zLCAxLjJdLFxyXG4gICAgXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMU0xcIiwgMTI1LCAxMDBdLFxyXG4gICAgXCJMaW1lc3RvbmVcIjogW1wiTFNUXCIsIDIuNzMsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJMVEFcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJMYWJvcmF0b3J5IFVuaXRcIjogW1wiTFVcIiwgOCwgNl0sXHJcbiAgICBcIk1hZ25ldGl0ZVwiOiBbXCJNQUdcIiwgNS4xNSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBNYWl6ZVwiOiBbXCJNQUlcIiwgMS4zLCAxXSxcclxuICAgIFwiTW90aGVyYm9hcmRcIjogW1wiTUJcIiwgMC4wNzUsIDAuMDc1XSxcclxuICAgIFwiTWVkaXVtIENhcmdvIEJheSBLaXRcIjogW1wiTUNCXCIsIDEwMCwgMTAwXSxcclxuICAgIFwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCI6IFtcIk1DR1wiLCAwLjI0LCAwLjFdLFxyXG4gICAgXCJRdWFsaXR5IE1lYXQgTWVhbFwiOiBbXCJNRUFcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNZWRpY2FsIEtpdFwiOiBbXCJNRURcIiwgMC4zLCAwLjFdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIjogW1wiTUZFXCIsIDAuMiwgMC44XSxcclxuICAgIFwiTWVkaXVtIEZhc3RlbmVyIEtpdFwiOiBbXCJNRktcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1GTFwiLCAyNCwgNF0sXHJcbiAgICBcIk1hZ25lc2l1bVwiOiBbXCJNR1wiLCAwLjI3LCAwLjE2XSxcclxuICAgIFwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCI6IFtcIk1HQ1wiLCAwLjYsIDAuOV0sXHJcbiAgICBcIk1hZ25lc2l0ZVwiOiBbXCJNR1NcIiwgMS43MywgMV0sXHJcbiAgICBcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIjogW1wiTUhMXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk1pY3JvIEhlYWRwaG9uZXNcIjogW1wiTUhQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCI6IFtcIk1MSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIk1pY3JvLVByb2Nlc3NvclwiOiBbXCJNUENcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1TTFwiLCA1MCwgNTBdLFxyXG4gICAgXCJNZWdhVHViZSBDb2F0aW5nXCI6IFtcIk1UQ1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIjogW1wiTVRQXCIsIDAuNywgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIjogW1wiTVVTXCIsIDAuOCwgMV0sXHJcbiAgICBcIk1lZGl1bSBXYWZlclwiOiBbXCJNV0ZcIiwgMC4wMDgsIDAuMDA4XSxcclxuICAgIFwiTml0cm9nZW5cIjogW1wiTlwiLCAwLjgwNywgMV0sXHJcbiAgICBcIlNvZGl1bVwiOiBbXCJOQVwiLCAwLjk3LCAxXSxcclxuICAgIFwiU29kaXVtIEJvcm9oeWRyaWRlXCI6IFtcIk5BQlwiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiOiBbXCJOQ1NcIiwgMC4wMjgsIDAuMDFdLFxyXG4gICAgXCJOZW9uXCI6IFtcIk5FXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCI6IFtcIk5GXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTmFubyBGaWJlclwiOiBbXCJORklcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJOYW5vLUNvYXRlZCBHbGFzc1wiOiBbXCJOR1wiLCAwLjAyMiwgMC4wMV0sXHJcbiAgICBcIk55bG9uIEZhYnJpY1wiOiBbXCJOTFwiLCAxLjEzLCAxXSxcclxuICAgIFwiTmV1cmFsIE5ldHdvcmtcIjogW1wiTk5cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBOb3p6bGVcIjogW1wiTk9aXCIsIDMsIDEuNV0sXHJcbiAgICBcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIjogW1wiTlJcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIk51dHJpZW50IFNvbHV0aW9uXCI6IFtcIk5TXCIsIDAuNiwgMC41XSxcclxuICAgIFwiTmV1cm9TdGltdWxhbnRzXCI6IFtcIk5TVFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIE51dHNcIjogW1wiTlVUXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiOiBbXCJOVjFcIiwgNC4yLCAyXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCI6IFtcIk5WMlwiLCA2LjcsIDNdLFxyXG4gICAgXCJPeHlnZW5cIjogW1wiT1wiLCAxLjE0MSwgMV0sXHJcbiAgICBcIk9mZmljZSBTdXBwbGllc1wiOiBbXCJPRkZcIiwgMC4wMiwgMC4yXSxcclxuICAgIFwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIjogW1wiT0xGXCIsIDAuMDEsIDAuMDAxXSxcclxuICAgIFwiT3BlcmF0aW5nIFN5c3RlbVwiOiBbXCJPU1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE92ZXJhbGxzXCI6IFtcIk9WRVwiLCAwLjAyLCAwLjAyNV0sXHJcbiAgICBcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiOiBbXCJQQ0JcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCI6IFtcIlBEQVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJQb2x5LUV0aHlsZW5lXCI6IFtcIlBFXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIjogW1wiUEZFXCIsIDAuOSwgMV0sXHJcbiAgICBcIlBvbHltZXIgR3JhbnVsYXRlXCI6IFtcIlBHXCIsIDAuMDAyLCAwLjAwMV0sXHJcbiAgICBcIlBpbmViZXJyaWVzXCI6IFtcIlBJQlwiLCAwLjMsIDFdLFxyXG4gICAgXCJQYWlua2lsbGVyc1wiOiBbXCJQS1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJQb3dlciBDZWxsXCI6IFtcIlBPV1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJQcm90ZWluIFBhc3RlXCI6IFtcIlBQQVwiLCAyLCAxXSxcclxuICAgIFwiUHJlc3N1cmUgU2hpZWxkaW5nXCI6IFtcIlBTSFwiLCA0LjIsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCI6IFtcIlBTTFwiLCAwLjA4LCAwLjhdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiOiBbXCJQU01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIFNcIjogW1wiUFNTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIlBvd2VyIFRvb2xzXCI6IFtcIlBUXCIsIDAuMjUsIDAuMl0sXHJcbiAgICBcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIjogW1wiUFdPXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIjogW1wiUUNSXCIsIDE0LCAxMF0sXHJcbiAgICBcIlJhZGlvIERldmljZVwiOiBbXCJSQURcIiwgMC4wMDMsIDAuMDA1XSxcclxuICAgIFwiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiOiBbXCJSQUdcIiwgNSwgMy40XSxcclxuICAgIFwiTWVtb3J5IEJhbmtcIjogW1wiUkFNXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkJhc2ljIFJhdGlvbnNcIjogW1wiUkFUXCIsIDAuMjEsIDAuMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIjogW1wiUkJIXCIsIDIuNCwgMC45XSxcclxuICAgIFwiUmF3IENvdHRvbiBGaWJlclwiOiBbXCJSQ09cIiwgMC45NSwgMV0sXHJcbiAgICBcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIjogW1wiUkNTXCIsIDAuNjcsIDAuNV0sXHJcbiAgICBcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCI6IFtcIlJDVFwiLCA3LCA0XSxcclxuICAgIFwiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIlJERVwiLCAxLjQsIDEuNV0sXHJcbiAgICBcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRExcIiwgMTUwLCAzMF0sXHJcbiAgICBcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRFNcIiwgNTAsIDEwXSxcclxuICAgIFwiQ2hlbWljYWwgUmVhZ2VudHNcIjogW1wiUkVBXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJSZXNjdWUgRHJvbmVcIjogW1wiUkVEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlJlcGFpciBLaXRcIjogW1wiUkVQXCIsIDAuMDA2LCAwLjAwMl0sXHJcbiAgICBcIlJlaW5mb3JjZWQgR2xhc3NcIjogW1wiUkdcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJSZWQgR29sZFwiOiBbXCJSR09cIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIjogW1wiUkhQXCIsIDEyLCAxMF0sXHJcbiAgICBcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIjogW1wiUk9NXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJSU0VcIiwgMS45LCAwLjddLFxyXG4gICAgXCJSYWRpYXRpb24gU2hpZWxkaW5nXCI6IFtcIlJTSFwiLCAzLjcsIDAuOF0sXHJcbiAgICBcIlJhdyBTaWxrIFN0cmFpbnNcIjogW1wiUlNJXCIsIDEuMSwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiUlRBXCIsIDEuNSwgMC41XSxcclxuICAgIFwiU3VsZnVyXCI6IFtcIlNcIiwgMC41MiwgMC4yNV0sXHJcbiAgICBcIlNlYXJjaCBBbGdvcml0aG1cIjogW1wiU0FcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTb3J0aW5nIEFsZ29yaXRobVwiOiBbXCJTQUxcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTZW5zb3IgQXJyYXlcIjogW1wiU0FSXCIsIDEuNywgMl0sXHJcbiAgICBcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIjogW1wiU0NcIiwgMC4wNCwgMC4wMV0sXHJcbiAgICBcIlNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiU0NCXCIsIDUwLCA1MF0sXHJcbiAgICBcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiOiBbXCJTQ05cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiU3VsZnVyIENyeXN0YWxzXCI6IFtcIlNDUlwiLCAyLjA1LCAxXSxcclxuICAgIFwiU3VyZ2ljYWwgRHJvbmVcIjogW1wiU0RSXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlBvbHktU3VsZml0ZSBTZWFsYW50XCI6IFtcIlNFQVwiLCAwLjE1LCAwLjA3XSxcclxuICAgIFwiU2Vuc29yXCI6IFtcIlNFTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdXJnaWNhbCBFcXVpcG1lbnRcIjogW1wiU0VRXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU1RMIEZ1ZWxcIjogW1wiU0ZcIiwgMC4wNiwgMC4wNl0sXHJcbiAgICBcIlNtYWxsIEZUTCBFbWl0dGVyXCI6IFtcIlNGRVwiLCAwLjEsIDAuNF0sXHJcbiAgICBcIlNtYWxsIEZhc3RlbmVyIEtpdFwiOiBbXCJTRktcIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNGTFwiLCA5LCAxLjVdLFxyXG4gICAgXCJTaWxpY29uXCI6IFtcIlNJXCIsIDIuMzI5LCAxXSxcclxuICAgIFwiU2lsa2VuIEZhYnJpY1wiOiBbXCJTSUxcIiwgMS4yMSwgMV0sXHJcbiAgICBcIlNpbGljb24gT3JlXCI6IFtcIlNJT1wiLCAxLjc5LCAxXSxcclxuICAgIFwiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiOiBbXCJTTk1cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJBcnRpZmljaWFsIFNvaWxcIjogW1wiU09JXCIsIDAuOSwgMV0sXHJcbiAgICBcIlNvbGFyIENlbGxcIjogW1wiU09MXCIsIDAuMDE1LCAwLjAxXSxcclxuICAgIFwiU29sYXIgUGFuZWxcIjogW1wiU1BcIiwgMC4xNSwgMC4xXSxcclxuICAgIFwiU2hpcC1SZXBhaXIgRHJvbmVcIjogW1wiU1JEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCI6IFtcIlNSUFwiLCAwLjEsIDAuMl0sXHJcbiAgICBcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIjogW1wiU1NDXCIsIDEsIDFdLFxyXG4gICAgXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTU0xcIiwgMjAsIDIwXSxcclxuICAgIFwiU3RlZWxcIjogW1wiU1RMXCIsIDcuODUsIDFdLFxyXG4gICAgXCJNZWRpY2FsIFN0cmV0Y2hlclwiOiBbXCJTVFJcIiwgMC4wMSwgMV0sXHJcbiAgICBcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJTVFNcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJTdXJnZXJ5IFVuaXRcIjogW1wiU1VcIiwgNiwgNV0sXHJcbiAgICBcIlN1cnZlaWxsYW5jZSBEcm9uZVwiOiBbXCJTVURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU2FmZXR5IFVuaWZvcm1cIjogW1wiU1VOXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJTbWFsbCBXYWZlclwiOiBbXCJTV0ZcIiwgMC4wMDMsIDAuMDAzXSxcclxuICAgIFwiVGFudGFsdW1cIjogW1wiVEFcIiwgMTYuNjUsIDFdLFxyXG4gICAgXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIjogW1wiVEFDXCIsIDAuMTUsIDFdLFxyXG4gICAgXCJUYW50YWxpdGUgUm9ja1wiOiBbXCJUQUlcIiwgNy45NCwgMV0sXHJcbiAgICBcIlRlY2huZXRpdW1cIjogW1wiVENcIiwgMTEuOCwgMV0sXHJcbiAgICBcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiOiBbXCJUQ0JcIiwgMjAsIDIwXSxcclxuICAgIFwiVENMIEFjaWRcIjogW1wiVENMXCIsIDAuMDksIDAuMV0sXHJcbiAgICBcIlRlY2huZXRpdW0gT3hpZGVcIjogW1wiVENPXCIsIDkuOCwgMV0sXHJcbiAgICBcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiOiBbXCJUQ1NcIiwgMy40LCAxLjJdLFxyXG4gICAgXCJUcmF1bWEgQ2FyZSBVbml0XCI6IFtcIlRDVVwiLCA1LCA0XSxcclxuICAgIFwiVGhlcm1vRmx1aWRcIjogW1wiVEhGXCIsIDAuNiwgMC4zNV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJUSFBcIiwgMi4yLCAxXSxcclxuICAgIFwiVGl0YW5pdW1cIjogW1wiVElcIiwgNC41LCAxXSxcclxuICAgIFwiVGl0YW5pdW0gT3JlXCI6IFtcIlRJT1wiLCAxLjU4LCAxXSxcclxuICAgIFwiVGVjaG5vS2V2bGFyIEZhYnJpY1wiOiBbXCJUS1wiLCAxLjg5LCAxXSxcclxuICAgIFwiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiOiBbXCJUUFVcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiQXVkaW8gVHJhbnNtaXR0ZXJcIjogW1wiVFJBXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIjogW1wiVFJOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlRydXNzXCI6IFtcIlRSVVwiLCAwLjEsIDEuNV0sXHJcbiAgICBcIlRlY3Rvc2lsaXNpdGVcIjogW1wiVFNcIiwgMi40LCAxXSxcclxuICAgIFwiVGhlcm1hbCBTaGllbGRpbmdcIjogW1wiVFNIXCIsIDIuNCwgMS41XSxcclxuICAgIFwiVGVzdCBUdWJlc1wiOiBbXCJUVUJcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiVW5pdmVyc2FsIFRvb2xzZXRcIjogW1wiVVRTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCI6IFtcIlZDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlRyaWdseWNlcmlkZSBGcnVpdHNcIjogW1wiVkVHXCIsIDEuMSwgMV0sXHJcbiAgICBcIlZpdGFHZWxcIjogW1wiVkdcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiVml0YSBFc3NlbmNlXCI6IFtcIlZJVFwiLCAwLjksIDFdLFxyXG4gICAgXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiVlNDXCIsIDM1LCAzNV0sXHJcbiAgICBcIlR1bmdzdGVuXCI6IFtcIldcIiwgNy41MTksIDFdLFxyXG4gICAgXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCI6IFtcIldBSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIjogW1wiV0FMXCIsIDYuMjUsIDFdLFxyXG4gICAgXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiOiBbXCJXQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJTbWFydCBaaW5mYW5kZWxcIjogW1wiV0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiV2luZG93IE1hbmFnZXJcIjogW1wiV01cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiOiBbXCJXT1JcIiwgNSwgNV0sXHJcbiAgICBcIldhdGVyIFJlY2xhaW1lclwiOiBbXCJXUlwiLCA2LjQsIDVdLFxyXG4gICAgXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiOiBbXCJXU1wiLCAwLjA1LCAwLjVdLFxyXG4gICAgXCJaaXJjb24gQ3J5c3RhbHNcIjogW1wiWklSXCIsIDQuODUsIDFdLFxyXG4gICAgXCJaaXJjb25pdW1cIjogW1wiWlJcIiwgNi41MywgMV0sXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dhbWVQcm9wZXJ0aWVzLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTdHlsZSA9IHtcclxuICAgIEJ1dHRvbjogW1wiZk1XNjJjRVJubHp4WlBGaG5sUE9lUT09XCJdLFxyXG4gICAgQnV0dG9uUHJpbWFyeTogW1wia2dHc0ROdkRvV2o2MXc0STdWQWxmQT09XCJdLFxyXG4gICAgQnV0dG9uU3VjY2VzczogW1wiUVc4MHh2ZVFtMkdFU2tTT1JSSDI0Zz09XCJdLFxyXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJaRlhXeTRIQ256dHBaTmxDWGs4M3dRPT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkhlYWQ6IFtcIl8yWXJPTTctMnNkSzA0MlZ2SDZXYUpnPT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkNvbnRlbnQ6IFtcIkNOME5QTm92bFl0YUltNGJxSEZiTHc9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiXSxcclxuICAgIFNpZGViYXJMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXHJcbiAgICBGb250c1JlZ3VsYXI6IFtcIkNCb3JJYkZDNll0K0ZSWUVIWnl1YUE9PVwiXSxcclxuICAgIFNpZGViYXJUZXh0OiBbXCJ4LW1MeEV3Qy1PRGg5TVhEeDREeFNRPT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIiwgXCJPN1JYNHpYTDRnekhMb093VFZiclh3PT1cIl0sXHJcbiAgICBTaWRlYmFyU2xpdmVyOiBbXCJaUHNSWUNPajdwWDU5R1lESWlPdEtnPT1cIiwgXCItZGNZZmJDV1A3MlZTMk9GaG9ERy1RPT1cIl0sXHJcbiAgICBTaWRlYmFyQnV0dG9uOiBbXCJHSENQeWpzM2J4aGIrV1oyQkdMV0h3PT1cIl0sXHJcbiAgICBDb250cmFjdExpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcclxuICAgIENvbnRyYWN0TmFtZTogW1wiemhpeHA0MDhZRjA4Mkl6QTVLUHZmQT09XCJdLFxyXG4gICAgQ29udHJhY3RWaWV3OiBbXCJrcTVCckdLblRVVHFDRFlNcExROTBnPT1cIl0sXHJcbiAgICBTZXR0aW5nc0J1dHRvbjogW1wiQTBSYXh0MHlTNDFaUWxuem1FdnVzZz09XCIsIFwibmNIcklEc3hOS0g4TGJNRGlnVWlSZz09XCJdLFxyXG4gICAgU2V0dGluZ3NCYXJVbnRvZ2dsZWQ6IFtcIlo5allEOEx5TFpvQlBiN0pzQVJUMXc9PVwiLCBcIlA2QXJiYTUzSTdjUnZ4aUgwLXBEUWc9PVwiXSxcclxuICAgIFNldHRpbmdzQmFyVG9nZ2xlZDogW1wiWjlqWUQ4THlMWm9CUGI3SnNBUlQxdz09XCIsIFwiUDZBcmJhNTNJN2NSdnhpSDAtcERRZz09XCIsIFwiVi03NXRiMDNlbkdWZGNCK1N3LW1SQT09XCIsIFwidktrQjBXN2pBVHRkOGRTemdPWUVLUT09XCJdLFxyXG4gICAgU2V0dGluZ3NUZXh0OiBbXCJZR1NvcVp3cWthRzJDVmx0eE13b093PT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIiwgXCJrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIiwgXCJQM3NTUWtDUlVna3BtS1VnaWVKUXZnPT1cIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFdpdGhTdHlsZXMgPSAoLi4uc3R5bGUpID0+IHtcclxuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFRleHRDb2xvcnMgPSB7XHJcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcclxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxyXG4gICAgU3RhbmRhcmQ6IFwiI2JiYmJiYlwiLFxyXG4gICAgWWVsbG93OiBcIiNmN2E2MDBcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xvcnMgPSB7XHJcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNSwgMzAsIDk4KSwgcmdiKDQwLCA1NSwgMTIzKSlcIiwgXCJyZ2IoMTQyLCAxNTcsIDIyNSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEsIDI2LCA3NiksIHJnYig3NiwgNTEsIDEwMSkpXCIsIFwicmdiKDE3OCwgMTUzLCAyMDMpXCJdLFxyXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQxLCA3NywgMTA3KSwgcmdiKDY2LCAxMDIsIDEzMikpXCIsIFwicmdiKDE2OCwgMjA0LCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIGVuZ2luZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgNDEsIDApLCByZ2IoMTc4LCA2NiwgMjUpKVwiLCBcInJnYigyNTUsIDE2OCwgMTI3KVwiXSxcclxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcclxuICAgIFwibWV0YWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1NCwgNTQsIDU0KSwgcmdiKDc5LCA3OSwgNzkpKVwiLCBcInJnYigxODEsIDE4MSwgMTgxKVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMjQsIDM5KSwgcmdiKDE2MSwgNDksIDY0KSlcIiwgXCJyZ2IoMjU1LCAxNTEsIDE2NilcIl0sXHJcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxyXG4gICAgXCJvcmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgODcsIDk3KSwgcmdiKDEwNywgMTEyLCAxMjIpKVwiLCBcInJnYigyMDksIDIxNCwgMjI0KVwiXSxcclxuICAgIFwiZ2FzZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDAsIDEwNSwgMTA3KSwgcmdiKDI1LCAxMzAsIDEzMikpXCIsIFwicmdiKDEyNywgMjMyLCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcclxuICAgIFwiYWxsb3lzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjMsIDc2LCAzMCksIHJnYigxNDgsIDEwMSwgNTUpKVwiLCBcInJnYigyNTAsIDIwMywgMTU3KVwiXSxcclxuICAgIFwiY2hlbWljYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigyMDgsIDcxLCAxMTYpKVwiLCBcInJnYigyNTUsIDE3MywgMjE4KVwiXSxcclxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHBpZWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE5LCA4MiwgMTg5KSwgcmdiKDE0NCwgMTA3LCAyMTQpKVwiLCBcInJnYigyNDYsIDIwOSwgMjU1KVwiXSxcclxuICAgIFwiZWxlbWVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYxLCA0NiwgMzIpLCByZ2IoODYsIDcxLCA1NykpXCIsIFwicmdiKDE4OCwgMTczLCAxNTkpXCJdLFxyXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxyXG4gICAgXCJ1bml0IHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI5LCAyNywgMjgpLCByZ2IoNTQsIDUyLCA1MykpXCIsIFwicmdiKDE1NiwgMTU0LCAxNTUpXCJdLFxyXG4gICAgXCJsaXF1aWRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTQsIDE2NCwgMjAyKSwgcmdiKDEzOSwgMTg5LCAyMjcpKVwiLCBcInJnYigyNDEsIDI1NSwgMjU1KVwiXSxcclxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxyXG4gICAgXCJkcm9uZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0MCwgNTIsIDE4KSwgcmdiKDE2NSwgNzcsIDQzKSlcIiwgXCJyZ2IoMjU1LCAxNzksIDE0NSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkxLCA0NiwgMTgzKSwgcmdiKDExNiwgNzEsIDIwOCkpXCIsIFwicmdiKDIxOCwgMTczLCAyNTUpXCJdLFxyXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjQsIDkxLCAyMTEpLCByZ2IoNDksIDExNiwgMjM2KSlcIiwgXCJyZ2IoMTUxLCAyMTgsIDI1NSlcIl0sXHJcbiAgICBcInNvZnR3YXJlIHRvb2xzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjksIDk4LCAxOSksIHJnYigxNTQsIDEyMywgNDQpKVwiLCBcInJnYigyNTUsIDI1NSwgMTQ2KVwiXSxcclxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXHJcbiAgICBcImNvbnN1bWFibGVzIChiYXNpYylcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0OSwgNDYsIDQ2KSwgcmdiKDE3NCwgNzEsIDcxKSlcIiwgXCJyZ2IoMjU1LCAxNzMsIDE3MylcIl0sXHJcbiAgICBcImZ1ZWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYig1NSwgMTQ4LCA1NSkpXCIsIFwicmdiKDE1NywgMjUwLCAxNTcpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxyXG4gICAgXCJzaGlwIGtpdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NCwgODQsIDApLCByZ2IoMTc4LCAxMDksIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMTEsIDEyNylcIl0sXHJcbiAgICBcInV0aWxpdHlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE2MSwgMTQ4LCAxMzYpLCByZ2IoMTg2LCAxNzMsIDE2MSkpXCIsIFwicmdiKDI1NSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJzaGlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDMwMzAzLCAjMTgxODE4KVwiLCBcIiM3ZjdmN2ZcIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFBNTUdTdHlsZSA9IGBcclxuLnRvb2x0aXAtYmFzZXtcclxuZGlzcGxheTpmbGV4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbmZvbnQtZmFtaWx5OlwiRHJvaWQgU2Fuc1wiLHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZToxMHB4O1xyXG5jb2xvcjojYmJiXHJcbn1cclxuLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi50b29sdGlwLWJhc2U6aG92ZXIgLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWxlY3Qge1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG4uYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTAzNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjOWZiYjlmO1xyXG59XHJcbi5idXJuLXllbGxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzgzNmUyNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjZkZjk0O1xyXG59XHJcbi5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbi5pbnYtaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cGFkZGluZzogMnB4IDhweDtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4uaW52LWJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHRwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0bWFyZ2luOiAxcHggMnB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmN2E2MDA7fVxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LXRleHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhkNjQxMTtcclxuXHRjb2xvcjogI2NjY2NjYztcclxuXHRcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5oaWRkZW4tZWxlbWVudHtcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0dmlzaWJpbGl0eTogZmFsc2UgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ1dHRvbi11cHBlci1yaWdodHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuLmJ1dHRvbi11cHBlci1yaWdodDpob3ZlcntcclxuXHRjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDE2NiwgMCk7XHJcbn1gO1xyXG5leHBvcnQgY29uc3QgRW5oYW5jZWRDb2xvcnMgPSBgLyogY29uc3VtYWJsZXMgKGx1eHVyeSkgKi9cclxuZGl2W3RpdGxlPVwiU3RlbGxhciBQYWxlIEFsZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxFXCJdLFxyXG4udG9vbHRpcF9BTEUsXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DT0ZcIl0sXHJcbi50b29sdGlwX0NPRixcclxuZGl2W3RpdGxlPVwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dJTlwiXSxcclxuLnRvb2x0aXBfR0lOLFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfS09NXCJdLFxyXG4udG9vbHRpcF9LT00sXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlNUXCJdLFxyXG4udG9vbHRpcF9OU1QsXHJcbmRpdlt0aXRsZT1cIlBhZGRlZCBXb3JrIE92ZXJhbGxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BXT1wiXSxcclxuLnRvb2x0aXBfUFdPLFxyXG5kaXZbdGl0bGU9XCJSZXBhaXIgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SRVBcIl0sXHJcbi50b29sdGlwX1JFUCxcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NcIl0sXHJcbi50b29sdGlwX1NDLFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WR1wiXSxcclxuLnRvb2x0aXBfVkcsXHJcbi50b29sdGlwX1dJTixcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XSU5cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjgwMDAwLCAjN2IwMDEyKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2RiOTE5MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGFncmljdWx0dXJhbCBwcm9kdWN0cyAqL1xyXG4udG9vbHRpcF9GT0QsXHJcbi50b29sdGlwX0NBRixcclxuLnRvb2x0aXBfSE9QLFxyXG4udG9vbHRpcF9HUk4sXHJcbi50b29sdGlwX01BSSxcclxuLnRvb2x0aXBfSENQLFxyXG4udG9vbHRpcF9NVFAsXHJcbi50b29sdGlwX1BJQixcclxuLnRvb2x0aXBfUFBBLFxyXG4udG9vbHRpcF9BTEcsXHJcbi50b29sdGlwX0JFQSxcclxuLnRvb2x0aXBfTVVTLFxyXG4udG9vbHRpcF9SQ08sXHJcbi50b29sdGlwX1JTSSxcclxuLnRvb2x0aXBfSEVSLFxyXG4udG9vbHRpcF9WRUcsXHJcbi50b29sdGlwX05VVCxcclxuLnRvb2x0aXBfVklULFxyXG4udG9vbHRpcF9HUkEsXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBBbGdhZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxHXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JFQVwiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NBRlwiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GT0RcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSQVwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIEdyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JOXCJdLFxyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hDUFwiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFUlwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IT1BcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBNYWl6ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUFJXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVFBcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01VU1wiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIE51dHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05VVFwiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BJQlwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFBBXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQ09cIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JTSVwiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkVHXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZJVFwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDM4MDAsICMwYTQ3MDgpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjOGJiMzdiICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogcGxhc3RpY3MgKi9cclxuLnRvb2x0aXBfRENMLFxyXG4udG9vbHRpcF9EQ00sXHJcbi50b29sdGlwX0RDUyxcclxuLnRvb2x0aXBfUEUsXHJcbi50b29sdGlwX1BHLFxyXG4udG9vbHRpcF9QU0wsXHJcbi50b29sdGlwX1BTTSxcclxuLnRvb2x0aXBfUFNTLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ0xcIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTVwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENTXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LUV0aHlsZW5lXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QRVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BHXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNMXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNNXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5MWY2MiwgIzkyMzg3YikgIWltcG9ydGFudDtcclxuY29sb3I6ICNmODllZTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBjb25zdW1hYmxlcyAoYmFzaWMpICovXHJcbi50b29sdGlwX0RXLFxyXG4udG9vbHRpcF9FWE8sXHJcbi50b29sdGlwX0ZJTSxcclxuLnRvb2x0aXBfSE1TLFxyXG4udG9vbHRpcF9IU1MsXHJcbi50b29sdGlwX0xDLFxyXG4udG9vbHRpcF9NRUEsXHJcbi50b29sdGlwX01FRCxcclxuLnRvb2x0aXBfT1ZFLFxyXG4udG9vbHRpcF9QREEsXHJcbi50b29sdGlwX1BULFxyXG4udG9vbHRpcF9SQVQsXHJcbi50b29sdGlwX1NDTixcclxuLnRvb2x0aXBfV1MsXHJcblxyXG5kaXZbdGl0bGU9XCJEcmlua2luZyBXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRFdcIl0sXHJcbmRpdlt0aXRsZT1cIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRVhPXCJdLFxyXG5kaXZbdGl0bGU9XCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRklNXCJdLFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9ITVNcIl0sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hTU1wiXSxcclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xDXCJdLFxyXG5kaXZbdGl0bGU9XCJRdWFsaXR5IE1lYXQgTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVBXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVEXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfT1ZFXCJdLFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUERBXCJdLFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFRcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIFJhdGlvbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JBVFwiXSxcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ05cIl0sXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhNjJjMmEsICNiYTM2M2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmY5ODllICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZnVlbHMgKi9cclxuLnRvb2x0aXBfU0YsXHJcbi50b29sdGlwX0ZGLFxyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRkZcIl0sXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TRlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NDhkMjIsICM2YmEyM2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjY2JmYWEzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogbGlxdWlkcyAqL1xyXG4udG9vbHRpcF9IRVgsXHJcbi50b29sdGlwX0xFUyxcclxuLnRvb2x0aXBfQlRTLFxyXG4udG9vbHRpcF9IMk8sXHJcbmRpdlt0aXRsZT1cIkhlbGlvdHJvcGUgRXh0cmFjdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVYXCJdLFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgRWluc3RlaW5pdW1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xFU1wiXSxcclxuZGl2W3RpdGxlPVwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CVFNcIl0sXHJcbmRpdlt0aXRsZT1cIldhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IMk9cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjdhOGRhLCAjNjA5OGMzKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2YxZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmRpdi5IV2JWT0lDMnJZR051ZzNVQzJkVlxcXFwrUVxcXFw9XFxcXD0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuLyogZnVsbCBpdGVtIG5hbWUgY2VudGVyaW5nICovXHJcbnNwYW4uWUNwOGpoUmc0RUJHM2FReGNpenNrUVxcXFw9XFxcXD0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59YDtcclxuZXhwb3J0IGNvbnN0IEljb25TdHlsZSA9IGAvKiBQclVuSWNvbiB2MC43XHJcbiogPT09PT09PT09PT09PT09XHJcbipcclxuKiBJbnN0YWxsIENocm9tZSBhZGRvbjogU3R5bGVCb3QgXHJcbiogZ290bzogYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tXHJcbiogcmlnaHQtY2xpY2sgYW55d2hlcmUsIHNlbGVjdDogU3R5bGVCb3QgLT4gU3R5bGUgRWxlbWVudFxyXG4qIENvcHkmUGFzdGUgdGhpcyBmaWxlIGludG8gdGhlIFN0eWxlQm90IHdpbmRvd1xyXG4qL1xyXG4gXHJcbi8qIGNvbnRyb3ZlcnNpYWwgVUkgY2hhbmdlcyBhbmQgY29sb3JzICovXHJcbi8qIChjb21tZW50L2RlbGV0ZSBpZiBub3QgZGVzaXJlZClcclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4vKiBpdGVtIHRpY2tlciBjb2xvciAqL1xyXG4ucmpwWUwxaTljWm1mNDdmTTlxV3laUVxcXFw9XFxcXD0ge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuIGRpdi5IV2JWT0lDMnJZR051ZzNVQzJkVlxcXFwrUVxcXFw9XFxcXD0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuIFxyXG4vKiBmdWxsIGl0ZW0gbmFtZSBjZW50ZXJpbmcgKi9cclxuLllDcDhqaFJnNEVCRzNhUXhjaXpza1FcXFxcPVxcXFw9IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4gXHJcbi8qIHRhYmxlIGNvbG9yICovXHJcbnRhYmxlIHRib2R5IHRkOm50aC1jaGlsZChvZGQpXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJlO1xyXG59XHJcbiBcclxuLyogZW5kIFVJIGNoYW5nZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4vKiBpdGVtcyBpbiBwcm9kdWN0aW9uIHZpZXcgYW5kIG1hcmtldCB2aWV3ICovXHJcbmRpdi5JXFxcXCt3UmRJYTllTFN6Ulp2U2k5R3Jld1xcXFw9XFxcXD0gZGl2LlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmdcXFxcPVxcXFw9IGRpdi5FN09MVUNoWUNleE1VZ09vbEtZak9RXFxcXD1cXFxcPVxyXG57XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG59XHJcbiBcclxuLyogaXRlbXMgaW4gcGxhbmV0IHZpZXcgKi9cclxuZGl2LlxcXFxfOTZHSkc4TmtvSFZiLXZaRGFtN3FIZ1xcXFw9XFxcXD0gZGl2LlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmdcXFxcPVxcXFw9IGRpdi5FN09MVUNoWUNleE1VZ09vbEtZak9RXFxcXD1cXFxcPTpiZWZvcmVcclxue1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbi8qIGRlZmF1bHQgOmJlZm9yZSBlbGVtZW50IHRvIHByZXBhcmUgZm9yIG5ldyBpY29uKi9cclxuZGl2LkU3T0xVQ2hZQ2V4TVVnT29sS1lqT1FcXFxcPVxcXFw9OmJlZm9yZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29udGVudDogXCJcIjtcclxuIFxyXG4gIC8qd2hpbGUgaXQgaXMgaWNvbiovXHJcbiAgb3BhY2l0eTogLjM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuLyogZGVmYXVsdCA6YmVmb3JlIGVsZW1lbnQgdG8gcHJlcGFyZSBmb3IgbmV3IHNlY29uZGFyeSBjb3JuZXIgaWNvbiAqL1xyXG4vKlxyXG5kaXYubmxRaXJwU2tkTEgwYTZcXFxcK0M0bGhkdUFcXFxcPVxcXFw9OmJlZm9yZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiBcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLWp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgLWFsaWduLWl0ZW1zOiByaWdodDtcclxuICAtZGlzcGxheTogZmxleDtcclxuICAtdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAtYWxpZ24tY29udGVudDogcmlnaHQ7XHJcbiAgLXdpZHRoOiAxMCU7XHJcbiAgLWhlaWdodDogMTAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3R0b206IDFweDtcclxuICBsZWZ0OiAtMXB4O1xyXG4gIC10b3A6IDIwcHg7XHJcbn1cclxuKi9cclxuIFxyXG4vKiBjb2xvcmVkIG92ZXJsYXkgaWNvbiAqL1xyXG5kaXYubmxRaXJwU2tkTEgwYTZcXFxcK0M0bGhkdUFcXFxcPVxcXFw9OmJlZm9yZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7IC8qIHdpbGwgYmVjb21lIGljb24gKi9cclxuIFxyXG4gIG9wYWNpdHk6IDAuMTtcclxuICB6LWluZGV4OiAtMTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgY29sb3I6IHJnYmEoMTAwJSwgMCUsIDAlLCAwKTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImdvbGQgb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdvbGQ7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpcm9uIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBhcXVhO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWx1bWluaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmV5O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwic2lsaWNvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgd2hpdGU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJ0aXRhbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImxpdGhpdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZWVuO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiY29wcGVyIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJmZXJyby10aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHBoYS1zdGFiaWxpemVkIHRpdGFuaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm9taW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJhbHBoYS1zdGFiaWxpemVkIHR1bmdzdGVuXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFRoZXJtYWxcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflKVcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIFRoZXJtYWxcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflKVcIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLimptcIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIEFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNwZWNpYWxpemVkIEFudGktUmFkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuLypcclxuZGl2W3RpdGxlPVwibGFyZ2UgY2FyZ28gYmF5IGtpdFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqWXCI7IG9wYWNpdHk6IDAuNjsgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaGlnaC1sb2FkIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflJRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImhpZ2gtdm9sdW1lIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfjohcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImdvbGQgb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5+oXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpcm9uIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWx1bWluaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbn1cclxuKi9cclxuIFxyXG4vKiBub24tY2F0ZWdvcnkgY29sb3Igc3BlY2lhbCBoYWNrcyovXHJcbiBcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCJdLFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoMTIwIDcyIDcpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiXSxcclxuZGl2W3RpdGxlPVwiQmx1ZSBHb2xkXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYig3MCA3MiAyMDApKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQWlyIFNjcnViYmVyXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAgOTYgNTgpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbiBcclxuLyogXCJub3JtYWxcIiBpY29ucyBhbmQgY29sb3JzICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4vKiBSQVQgaW5wdXRzICovXHJcbmRpdlt0aXRsZV49XCJIaWdoLUNhcmJcIl0sXHJcbmRpdlt0aXRsZV49XCJQcm90ZWluLVJpY2hcIl0sXHJcbmRpdlt0aXRsZV49XCJUcmlnbHljZXJpZGVcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDUgMTI5IDQzKSwgcmdiKDcwIDcyIDcpKVxyXG59XHJcbiBcclxuZGl2W2NvbnRlbnQ9XCJJby1kaW5lXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzIDg3IDEpLCByZ2IoODYgNDAgMCkpXHJcbn1cclxuIFxyXG4vKiBvdGhlciBBcmdyaWN1bHR1cmUgKi9cclxuZGl2W3RpdGxlPVwiSHlkcm9jYXJib24gUGxhbnRzXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJXaW5lLVF1YWxpdHkgR3JhcGVzXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W3RpdGxlPVwiVml0YSBFc3NlbmNlXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzIDg3IDEpLCByZ2IoODYgNDAgMCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRHJpbmtcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBSYVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcxIDEyNiAxNzQpLCByZ2IoNDYgNjYgMTQ5KSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJXYXRlclwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMiA4MCA1NSksIHJnYigxOCA3NCAxMjQpKVxyXG59XHJcbiBcclxuLyogY2hlbWljYWxzIGJnIGNvbG9ycyAqL1xyXG5kaXZbdGl0bGUqPVwiU3Vic3RhbmNlXCJdLCBcclxuZGl2W3RpdGxlKj1cIkNoZW1pY2FsXCJdLCBcclxuZGl2W3RpdGxlPVwiTGlxdWlkIENyeXN0YWxzXCJdLCBcclxuZGl2W3RpdGxlKj1cIkFnZW50XCJdLCBcclxuZGl2W3RpdGxlKj1cIkZsdXhcIl0sIFxyXG5kaXZbdGl0bGUqPVwiUmVzaW5cIl0sIFxyXG5kaXZbdGl0bGUqPVwiQ29sb3JhbnRcIl0sXHJcbmRpdlt0aXRsZSo9XCJBY2lkXCJdLCBcclxuZGl2W3RpdGxlKj1cIkJhY3RlcmlhXCJdLCBcclxuZGl2W3RpdGxlKj1cIlNvaWxcIl0sXHJcbmRpdlt0aXRsZSo9XCJTdGFiaWxpemVyXCJdLFxyXG5kaXZbdGl0bGUqPVwiRmVydGlsaXplclwiXSxcclxuZGl2W3RpdGxlKj1cIlRoZXJtb0ZsdWlkXCJdLFxyXG5kaXZbdGl0bGUqPVwiU29sdXRpb25cIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigxMTQgMzcgNjIpKVxyXG59XHJcbiBcclxuLyogY29uc3RydWN0aW9uIGJnIGNvbG9ycyAqL1xyXG5kaXZbdGl0bGU9XCJJbnN1Rm9hbVwiXSxcclxuZGl2W3RpdGxlPVwiRXBveHkgUmVzaW5cIl0sXHJcbmRpdlt0aXRsZT1cIk1lZ2FUdWJlIENvYXRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vIEZpYmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJOYW5vLUNvYXRlZCBHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiUmVpbmZvcmNlZCBHbGFzc1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIl0sXHJcbmRpdlt0aXRsZT1cIkdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3MiAxMjUgMjIxKSwgcmdiKDAgNjQgMTc5KSlcclxufVxyXG4gXHJcbi8qIGNvbnN0cnVjdGlvbiBwYXJ0cyAqL1xyXG5kaXZbdGl0bGU9XCJBZXJvc3RhdCBGb3VuZGF0aW9uXCJdLFxyXG5kaXZbdGl0bGU9XCJBaXIgU2NydWJiZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkRlY29yYXRpdmUgRWxlbWVudHNcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb2F0aW5nIFRhbmtcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3cgQ29udHJvbCBEZXZpY2VcIl0sXHJcbmRpdlt0aXRsZT1cIkZsdWlkIFBpcGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiXSxcclxuZGl2W3RpdGxlPVwiR2FzIFZlbnRcIl0sXHJcbmRpdlt0aXRsZT1cIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiXSxcclxuZGl2W3RpdGxlPVwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiTmVvbiBMaWdodGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlByZXNzdXJlIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiUmFkaWF0aW9uIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCJdLFxyXG5kaXZbdGl0bGU9XCJUaGVybWFsIFNoaWVsZGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiVHJ1c3NcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NiwgMTAyLCAxMzIpLCByZ2IoNDEsIDc3LCAxMDcpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAsIDEyMywgMzApLCByZ2IoMzIgOTAgMzIpKVxyXG59XHJcbiBcclxuIFxyXG4vKiBlbGVjdHJvbmljIHN5c3RlbXMgYmcgY29sb3IgKi9cclxuZGl2W3RpdGxlPVwiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJDbGltYXRlIENvbnRyb2xsZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkNvbW11bmljYXRpb24gU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJGVEwgRmllbGQgQ29udHJvbGxlclwiXSxcclxuZGl2W3RpdGxlPVwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiTG9naXN0aWNzIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJUYXJnZXRpbmcgQ29tcHV0ZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkNyeW9nZW5pYyBVbml0XCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzYsIDUxLCAxNDEpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbi8qIGxpZmUgcmVsYXRlZCBlbGVjdHJvbmljcyBzeXN0ZW1zIGJnIGNvbG9yKi9cclxuZGl2W3RpdGxlPVwiV2F0ZXIgUmVjbGFpbWVyXCJdLFxyXG5kaXZbdGl0bGU9XCJMaWZlIFN1cHBvcnQgU3lzdGVtXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAgOTYgNTgpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbiBcclxuLyogcHJlZmFicyAqL1xyXG5kaXZbdGl0bGVePVwiQmFzaWMgU3RyXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgRGVja1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIEJ1bGtcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUcmFuc1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUxIDU0IDY2ICksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiTGlnaHR3ZWlnaHRcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NSA5NCAzNSksIHJnYigxNSwgMzAsIDk4KSlcclxufVxyXG5kaXZbdGl0bGVePVwiSGFyZGVuZWRcIl0sIFxyXG5kaXZbdGl0bGVePVwiUmVpbmZvcmNlZFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDc4IDQ0IDI3KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBEZWNrXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgVHJhbnNwXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgU3RyXCJdLFxyXG5kaXZbdGl0bGVePVwiQWR2YW5jZWQgQnVsa1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcxIDM1IDk0KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIml1bVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwic2l0ZVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwibWluZXJhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG5kaXZbdGl0bGUqPVwiY29udHJvbGxlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjptcIjsgb3BhY2l0eTogMC42XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpbHRlclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZGV2aWNlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgTUtcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5O7XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImdsYXNzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UslwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiaGVhZHBob25lXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Op1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJob2xvZ3JhcGhpYyBnbGFzc2VzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rk1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJkaW9kZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKWtlwiO1xyXG59XHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudCo9XCJTQVJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNjYW5uZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNlbnNvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflK1cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRm91bmRhdGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nh1wiO1xyXG59XHJcbi8qIPCfp67wn46r8J+OnyAqL1xyXG5kaXZbdGl0bGUqPVwibWVtb3J5XCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwcm9jZXNzXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ0cmFuc2lzdG9yXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJjaXJjdWl0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+On1wiO1xyXG59XHJcbi8q8J+np/Cfjp/wn5K/8J+TvCovXHJcbmRpdlt0aXRsZT1cIk5vbi1Wb2xhdGlsZSBNZW1vcnlcImldOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5OAXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cInN5c3RlbVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY29tcHV0ZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIm1haW5mcmFtZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflqVcIjsgXHJcbiAgb3BhY2l0eTogMC42XHJcbn1cclxuLyog8J+Om/Cfjprwn5K+8J+SvfCfkr/wn5OAICovXHJcbmRpdlt0aXRsZSo9XCJOYXZpZ2F0aW9uXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkFydGlmaWNpYWxcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGF0YVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJOZXR3b3JrXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRhdGFiYXNlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkZyYW1ld29ya1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNYW5hZ2VtZW50XCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk9wZXJhdGluZ1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJJbnRlcmZhY2VcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiQWxnb3JpdGhtXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIk1hbmFnZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkr5cIjtcclxuICBvcGFjaXR5OiAwLjM7IC8qIHN5c3RlbSBvdmVycmlkZSovXHJcbn1cclxuZGl2W3RpdGxlKj1cIm1vdGhlcmJvYXJkXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJ3YWZlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiYnJvYWRjYXN0aW5nXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJhbnRlbm5hXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJlbWl0dGVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ToVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJsaWJyYXJ5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TllwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJXb3Jrc3RhdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEaXNwbGF5XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5K7XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpZ2h0XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KhXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlJvY2tcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpa9cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTGlxdWlkXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJGbHVpZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Sp1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBaXJcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkdhc1wiXTpiZWZvcmUsXHJcbiBkaXZbdGl0bGUqPVwiQWVyb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkF1ZGlvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SKXCI7XHJcbiAgb3BhY2l0eTogMC4zOyAvKiBzeXN0ZW0gb3ZlcnJpZGUgKi9cclxufVxyXG5kaXZbdGl0bGUqPVwiUG93ZXJcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNhcGFjaXRvclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ui1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJLaXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6BcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlRhbmtcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6JcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlByb3RlY3Rpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiUGxhdGVcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2hpZWxkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uhXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDb25uZWN0b3JzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTZWF0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+qkVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNoZW1pY2FsXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJBZ2VudFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiUmVzaW5cIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNvbG9yYW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkFjaWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYo1wiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ3J5b1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4p2EXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2lsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbn1cclxuLyog8J+nsPCflKrwn6m6ICovXHJcbmRpdlt0aXRsZSo9XCJTdXJnaWNhbFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWVkaWNhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIk1hZ25ldFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nslwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJEZWNvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5a8XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvbGFyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimqFcIjtcclxufVxyXG4gXHJcbi8qIGFsbG95cyDimZIg8J+fqiovXHJcbmRpdlt0aXRsZSo9XCItVGl0YW5pdW1cIl06OmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBUaXRhbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6pcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJGZXJyb21pbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG4gXHJcbi8qIC0tLS0gTWVkaWNhbCAtLS0tLS0gKi9cclxuZGl2W3RpdGxlPVwiQXV0by1Eb2NcIl0sXHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWRpY2FsIFN0cmV0Y2hlclwiXSxcclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl0sXHJcbmRpdlt0aXRsZT1cIlN1cmdpY2FsIEVxdWlwbWVudFwiXSxcclxuZGl2W3RpdGxlPVwiVGVzdCBUdWJlc1wiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDEzMyA2NCksIHJnYig0OCA4NiA0OCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJBdXRvLURvY1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqOKAjeKale+4j1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e7XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJTdXJnaWNhbCBFcXVpcG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiVHViZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbi8qIPCfm4wgKi9cclxuZGl2W3RpdGxlKj1cIkNyZXcgUXVhcnRlcnNcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiVHJhdW1hIENhcmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm49cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLyogLS0tLS0tLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZSo9XCJJb2RpbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbhcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29kaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eCXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkNhcmJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OqVwiO1xyXG59XHJcbi8qIPCfp4Lwn5K/8J+NmfCfjaXim7Dwn4+UICovXHJcbmRpdlt0aXRsZT1cIkNobG9yaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42lXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiU3VsZnVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+hXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiVGFudGFsdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflJhcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJDYWxjaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJCZXJ5bGxpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIk1hZ25lc2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+oXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuLyog44Cw8J+niPCfp4rwn5+k8J+fpiAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkFsdW1pbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlN0ZWVsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eKXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIlRpdGFuaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+qXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZX49XCJUdW5nc3RlblwiXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fq1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaWxpY29uXCJdOmJlZm9yZXtcclxuICBjb250ZW50OiBcIuOAsFwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkNvcHBlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fp1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuLyog8J+fpSAqL1xyXG5kaXZbdGl0bGU9XCJJcm9uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5+mXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjJcclxufVxyXG4gXHJcbi8qIGFsbG95cyAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIlJlZCBHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S2XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQmx1ZSBHb2xkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S3XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQnJvbnplXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5S6XCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQm9yb3NpbGljYXRlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLjgLBcIjtcclxufVxyXG4gXHJcbi8qIC0tLS0gKi9cclxuIFxyXG4vKiDwn5aK4p2X4p6W8J+SiCDwn4yg8J+llvCfjaHwn6eoICovXHJcbmRpdlt0aXRsZSo9XCJmdWVsIHJvZFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6hcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJiYXNpYyBmdWVsIHJvZFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKellwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCIgcmVhY3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiIGdlbmVyYXRvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjoZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiZmlzc2lvbiByZWFjdG9yXCJpXTpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwicmFkaW9pc290b3BlIGdlbmVyYXRvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuZGl2W3RpdGxlPVwiTGltZXN0b25lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiRHJvbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKciFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIk9yZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNyeXN0YWxzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KOXCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tLS0tLS0tICovXHJcbiBcclxuZGl2W3RpdGxlJD1cIkdyYWluc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk1haXplXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y9XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRHJpbmtcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp4NcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJQcm90ZWluLVJpY2ggQmVhbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZJcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBSYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lq1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk51dHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZxcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJGcnVpdHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYVcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQbGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjLJcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJDYWZmZWluYXRlZCBCZWFuc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Mv1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkFsZ2FlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42DXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiR3JhcGVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42HXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiSGVyYnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjLZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJGb2RkZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJIb3BzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y+XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ290dG9uIEZpYmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGF0dGllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nq1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIk11c2hyb29tc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NhFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBpbmViZXJyaWVzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42TXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGFzdGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpaNcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJTb2x1dGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlZpdGEgRXNzZW5jZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NtlwiO1xyXG59XHJcbiBcclxuIFxyXG5kaXZbdGl0bGVePVwiV2F0ZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG4gXHJcbi8qIPCfjqjwn4+A8J+PkOKaviAqL1xyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PkFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBvbHktRXRoeWxlbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKavlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIlNoZWV0IFR5cGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJGb2FtXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlNlYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjKtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRmliZXJcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRmFicmljXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e1XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJTdXBwbGllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ToFwiO1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJVbmlmb3JtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5GWXCI7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlRvb2xzZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRlRMXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIBcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNhc2luZ1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkRlY2sgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlN0cnVjdHVyYWwgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiO1xyXG59XHJcbi8qIPCfm44gKi9cclxuZGl2W3RpdGxlJD1cIkJ1bGtoZWFkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5u4XCI7XHJcbn1cclxuLyog8J+Pl/Cfp63wn4yr4piA8J+MgCAqL1xyXG5kaXZbdGl0bGUkPVwiQXBlcnR1cmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj5dcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+XvFwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0gZ2Fzc2VzLS0tLS0tICovXHJcbi8qIPCfkqjwn5Wz44Cw8J+MivCfjKvwn5Kl8J+bovCfp7Pwn6e04piEICovXHJcbiBcclxuZGl2W3RpdGxlPVwiQW1tb25pYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+puFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkFyZ29uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJGbHVvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTmVvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTml0cm9nZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJPeHlnZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqhcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiSGVsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yMXCI7XHJcbn1cclxuZGl2W3RpdGxlXj1cIkh5ZHJvZ2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KrXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiSGVsaXVtLTMgSXNvdG9wZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SplwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYlVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+npVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiV29yayBPdmVyYWxsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6a6XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDk3IDEwNCksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLCBcclxuZGl2W3RpdGxlJD1cIldvcmsgT3ZlcmFsbFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nr1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiRXhvc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rt+KAjeKZgO+4j1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiUG93ZXIgVG9vbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIkV4b3NcIl0sIFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W3RpdGxlPVwiUmVwYWlyIEtpdFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQWxlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn426XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkolcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqeKAjfCfmpJcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLCBcclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXSwgXHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTYgMTI0IDI3KSwgcmdiKDU3IDczIDE0NykpIFxyXG59XHJcbmRpdlt0aXRsZSQ9XCJBbGVcIl0sIFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNiAxMjQgMjcpLCByZ2IoMTA1IDMwIDE0NSkpIFxyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdpblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lg1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+loVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkajigI3wn5qAXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSo9XCJwZXJzb25hbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7FcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiRmxhdm91cmVkIEluc3RhLU1lYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSwgXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlJD1cIkdpblwiXSwgXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbdcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NsVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpbxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflKxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLCBcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSwgXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTUgOTIgMTY5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuLyog8J+VueKYjvCfk54gKi9cclxuZGl2W3RpdGxlKj1cImNvbW1hbmQgYnJpZGdlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piOXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog4puw4pii4pqZ8J+asPCfjKEgKi9cclxuZGl2W3RpdGxlKj1cImVuZ2luZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfmoBcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibm96emxlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+nqPCfjJ/wn6ez8J+bjiAqL1xyXG5kaXZbdGl0bGUqPVwiY29tYnVzdGlvbiBjaGFtYmVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ns1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJwdW1wXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBpbmdcImldOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5qwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInZlbnRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimahcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+XvPCfp4fwn5SX4puT8J+bofCfk47wn5aHICovIFxyXG5kaXZbdGl0bGUqPVwic3RydWN0dXJhbCBzcGFjZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfp4rwn5OmICovIFxyXG5kaXZbdGl0bGUqPVwiY2FyZ28gYmF5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TplwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJoYWJpdGF0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PoFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJzdXJnZXJ5IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimpVcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKvCfl4Twn46v8J+OoSovXHJcbmRpdlt0aXRsZSo9XCJlbnRlcnRhaW5tZW50IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46hXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+OqCAqL1xyXG5kaXZbdGl0bGUqPVwid29ya3Nob3AgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqhcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiBzaXplcyAqL1xyXG4gXHJcbmRpdlt0aXRsZSo9XCJzbWFsbFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidGlueVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUkPVwiIHNcImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibWVkaXVtXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSQ9XCIgbVwiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ0cmFuc2lzdG9yXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyogYnVpbGRpbmdzIC0ga2lsbCBzdHJheSBpY29ucyAqL1xyXG5kaXYuXFxfNlVpdnNEaFhKeWxCclxcK1xcK1I5ZjA1T1FcXD1cXD06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIlwiO1xyXG59YDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU3R5bGUudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFByaWNlcyhwcmljZXMsIHdlYmFwcElEKSB7XHJcbiAgICBpZiAod2ViYXBwSUQgPT0gdW5kZWZpbmVkIHx8IHdlYmFwcElEID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogV2ViIEFwcCBUaW1lb3V0XCIpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIFByaWNlcyBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcmljZURhdGEpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzW2tleV0gPSBwcmljZURhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyB3ZWJhcHBJRCArIFwiL2V4ZWM/bW9kZT0lMjJwcmljZSUyMlwiLCB0cnVlKTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDWFByaWNlcyhjeFByaWNlcykge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IENYIFByaWNlIFRpbWVvdXRcIik7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQ1ggUHJpY2VzXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3YW50ZWRSZXN1bHRzID0gW1wiQXNrUHJpY2VcIiwgXCJCaWRQcmljZVwiLCBcIkF2ZXJhZ2VcIiwgXCJBc2tBdmFpbFwiLCBcIkJpZEF2YWlsXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ1hzID0gW1wiQUkxXCIsIFwiQ0kxXCIsIFwiQ0kyXCIsIFwiSUMxXCIsIFwiTkMxXCIsIFwiTkMyXCJdO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgQ1hzLmZvckVhY2goQ1ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeFByaWNlc1ttYXRbXCJUaWNrZXJcIl1dW0NYXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YW50ZWRSZXN1bHRzLmZvckVhY2god2FudGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4UHJpY2VzW21hdFtcIlRpY2tlclwiXV1bQ1hdW3dhbnRlZF0gPSBtYXRbQ1ggKyBcIi1cIiArIHdhbnRlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjeFByaWNlc1tcIkFnZVwiXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjeFByaWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gUmFpbiBQcmljZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvcmFpbi9wcmljZXNcIiwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KSB7XHJcbiAgICBpZiAoYnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoYXBpa2V5ID09IHVuZGVmaW5lZCB8fCBhcGlrZXkgPT0gbnVsbCB8fCB1c2VybmFtZSA9PSB1bmRlZmluZWQgfHwgdXNlcm5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1cm5bdXNlcm5hbWVdID0gW107XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBidXJuW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE1NRzogUmV0cmVpdmVkIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuW3VzZXJuYW1lXS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vdXNlci9cIiArIHVzZXJuYW1lLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpIHtcclxuICAgIGlmIChidXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJ1cm4gPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChhcGlrZXkgPT0gdW5kZWZpbmVkIHx8IGFwaWtleSA9PSBudWxsIHx8IGdyb3VwaWQgPT0gdW5kZWZpbmVkIHx8IGdyb3VwaWQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBGSU8gQnVybiBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgR3JvdXAgQnVybiBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdID0gW107XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vZ3JvdXAvXCIgKyBncm91cGlkLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpIHtcclxuICAgIGlmIChhcGlrZXkgPT0gdW5kZWZpbmVkIHx8IGFwaWtleSA9PSBudWxsIHx8IHVzZXJuYW1lID09IHVuZGVmaW5lZCB8fCB1c2VybmFtZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYnVyblNldHRpbmdzLnB1c2goXCJsb2FkaW5nXCIpO1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEZJTyBCdXJuIFNldHRpbmdzIFRpbWVvdXRcIik7XHJcbiAgICAgICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgdXNlcm5hbWUsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBSZXRyZWl2ZWQgQnVybiBTZXR0aW5ncyBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5nc1swXSA9IFwibG9hZGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuU2V0dGluZ3MucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTU1HOiBCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi91c2Vyc2V0dGluZ3MvYnVybnJhdGUvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0JhY2tncm91bmRSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRmxpZ2h0RVRBcyB9IGZyb20gXCIuL0ZsaWdodEVUQXNcIjtcclxuaW1wb3J0IHsgTG9jYWxNYXJrZXRBZHMgfSBmcm9tICcuL0xvY2FsTWFya2V0QWRzJztcclxuaW1wb3J0IHsgTW9kdWxlUnVubmVyIH0gZnJvbSBcIi4vTW9kdWxlUnVubmVyXCI7XHJcbmltcG9ydCB7IE9yZGVyRVRBcyB9IGZyb20gXCIuL09yZGVyRVRBc1wiO1xyXG5pbXBvcnQgeyBDb25zdW1hYmxlVGltZXJzIH0gZnJvbSBcIi4vQ29uc3VtYWJsZVRpbWVyc1wiO1xyXG5pbXBvcnQgeyBGbGVldEVUQXMgfSBmcm9tIFwiLi9GbGVldEVUQXNcIjtcclxuaW1wb3J0IHsgUG9zdExNIH0gZnJvbSBcIi4vUG9zdExNXCI7XHJcbmltcG9ydCB7IFNoaXBwaW5nQWRzIH0gZnJvbSBcIi4vU2hpcHBpbmdBZHNcIjtcclxuaW1wb3J0IHsgUXVldWVMb2FkIH0gZnJvbSBcIi4vUXVldWVMb2FkXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGdldFByaWNlcywgZ2V0QnVybiwgZ2V0QnVyblNldHRpbmdzIH0gZnJvbSBcIi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5pbXBvcnQgeyBQTU1HU3R5bGUsIEVuaGFuY2VkQ29sb3JzLCBJY29uU3R5bGUgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBTY3JlZW5VbnBhY2sgfSBmcm9tIFwiLi9TY3JlZW5VbnBhY2tcIjtcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgQ29tbWFuZENvcnJlY3RlciB9IGZyb20gXCIuL0NvbW1hbmRDb3JyZWN0ZXJcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvckJ1dHRvbiB9IGZyb20gXCIuL0NhbGN1bGF0b3JCdXR0b25cIjtcclxuaW1wb3J0IHsgQ29udHJhY3REcmFmdHMgfSBmcm9tIFwiLi9Db250cmFjdERyYWZ0c1wiO1xyXG50cnkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChcIlBNTUdFeHRlbmRlZFwiKS50aGVuKG1haW5SdW4sIG9uRXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJGaXJlRm94IGRldGVjdGVkXCIpO1xyXG59XHJcbmNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2hyb21pdW0gZGV0ZWN0ZWRcIik7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiUE1NR0V4dGVuZGVkXCJdLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgbWFpblJ1bihyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbWFpblJ1bihyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IFRpbWUgTG9hZGluZyBQTU1HXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBzdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG4gICAgc3R5bGUuaWQgPSBcInBtbWctc3R5bGVcIjtcclxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gUE1NR1N0eWxlO1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XHJcbiAgICBpZiAoZG9jKSB7XHJcbiAgICAgICAgZG9jLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiZGlzYWJsZWRcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSA9IFtcIlNjcmVlblVucGFja1wiXTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPT0gXCJlbmhhbmNlZFwiIHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0pIHtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWVuaGFuY2VkLWNvbG9yc1wiO1xyXG4gICAgICAgIGNvbG9ycy50ZXh0Q29udGVudCA9IEVuaGFuY2VkQ29sb3JzO1xyXG4gICAgICAgIGlmIChkb2MpIHtcclxuICAgICAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiY29sb3Jfc2NoZW1lXCJdID09IFwiaWNvbnNcIikge1xyXG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBjb2xvcnMudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBjb2xvcnMuaWQgPSBcInBtbWctaWNvbi1jb2xvcnNcIjtcclxuICAgICAgICBjb2xvcnMudGV4dENvbnRlbnQgPSBJY29uU3R5bGU7XHJcbiAgICAgICAgaWYgKGRvYykge1xyXG4gICAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoY29sb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJpY2VzID0ge307XHJcbiAgICBnZXRQcmljZXMocHJpY2VzLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSk7XHJcbiAgICB2YXIgYnVybiA9IFtdO1xyXG4gICAgZ2V0QnVybihidXJuLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdKTtcclxuICAgIHZhciBidXJuU2V0dGluZ3MgPSBbXTtcclxuICAgIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pO1xyXG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXHJcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXHJcbiAgICAgICAgbmV3IE9yZGVyRVRBcygpLFxyXG4gICAgICAgIG5ldyBGbGlnaHRFVEFzKCksXHJcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXHJcbiAgICAgICAgbmV3IFBvc3RMTShwcmljZXMpLFxyXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxyXG4gICAgICAgIG5ldyBRdWV1ZUxvYWQoKSxcclxuICAgICAgICBuZXcgQ29uc3VtYWJsZVRpbWVycyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSwgYnVybiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdKSxcclxuICAgICAgICBuZXcgRmxlZXRFVEFzKCksXHJcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbnMoKSxcclxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdKSxcclxuICAgICAgICBuZXcgQ29tbWFuZENvcnJlY3RlcigpLFxyXG4gICAgICAgIG5ldyBDYWxjdWxhdG9yQnV0dG9uKCksXHJcbiAgICAgICAgbmV3IFNpZGViYXIocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSlcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGlnaHRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCB0b0ZpeGVkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgTG9jYWxNYXJrZXRBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWxtLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyhCVVlJTkd8U0VMTElOR3xDT1JQKVxccyhcXGQrKVxccy4qXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmb3IvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG1hdGNoZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KG1hdGNoZXNbM10ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgIHByaWNlU3Bhbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3Blckl0ZW19IGVhKWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0xvY2FsTWFya2V0QWRzLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFhJVEhhbmRsZXIgfSBmcm9tIFwiLi9YSVRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHNob3dCdWZmZXIgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVSdW5uZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlcywgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzLm1hcChtID0+IHRoaXMubW9kdWxlVG9NRShtKSk7XHJcbiAgICAgICAgdGhpcy54aXQgPSBuZXcgWElUSGFuZGxlcihyZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUFjdGl2ZU1vZHVsZXMocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdICE9IHVuZGVmaW5lZCAmJiByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbXAuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtb2R1bGVUb01FKG1vZHVsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vZHVsZSxcclxuICAgICAgICAgICAgbmFtZTogbW9kdWxlLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBjbGVhbnVwVGltZTogMCxcclxuICAgICAgICAgICAgcnVuVGltZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHRoaXMueGl0LnJ1bigpO1xyXG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJsb2FkZWRfYmVmb3JlXCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wibG9hZGVkX2JlZm9yZVwiXSA9IHNob3dCdWZmZXIoXCJYSVQgU1RBUlRcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImxvYWRlZF9iZWZvcmVcIl0pIHtcclxuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZHVsZXMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5ydW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY291bnQrKztcclxuICAgICAgICAgICAgICAgIGVudHJ5LmNsZWFudXBUaW1lICs9IGNsZWFudXBUaW1lO1xyXG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDI1MCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3MocmVzdWx0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kdWxlUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFhJVFByZUZ1bmN0aW9ucywgWElUQnVmZmVyVGl0bGVzIH0gZnJvbSBcIi4vWElURnVuY3Rpb25zXCI7XHJcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXhpdFwiO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy5idXJuU2V0dGluZ3MgPSBidXJuU2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJYSVRcIik7XHJcbiAgICAgICAgaWYgKCFidWZmZXJzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYnVybiA9IHRoaXMuYnVybjtcclxuICAgICAgICBjb25zdCBidXJuU2V0dGluZ3MgPSB0aGlzLmJ1cm5TZXR0aW5ncztcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IChidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5YSVRUaWxlKSB8fCBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5YSVRUaWxlRmxvYXQpKTtcclxuICAgICAgICAgICAgaWYgKCF0aWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbGUuZmlyc3RDaGlsZCAmJiAodGlsZS5maXJzdENoaWxkLmlkID09IFwicG1tZy1sb2FkLXN1Y2Nlc3NcIiB8fCB0aWxlLmZpcnN0Q2hpbGQuaWQgPT0gXCJwbW1nLW5vLW1hdGNoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyc1JhdyA9IEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKSlbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyc1JhdylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNSYXcuY2hhckF0KDQpID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycy5wdXNoKGtleS5zbGljZSgyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkICYmIHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctcmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgIFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldKHRpbGUuZmlyc3RDaGlsZCwgcGFyYW1ldGVycywgdGhpcy5yZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgdGhpcy5tb2R1bGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ4aXQtdGlsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmICghdGlsZS5maXJzdENoaWxkIHx8ICh0aWxlLmZpcnN0Q2hpbGQgJiYgKHRpbGUuZmlyc3RDaGlsZC5pZCAhPSBcInBtbWctbm8tbWF0Y2hcIikpKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwi4p+zXCIpKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uaWQgPSBcInJlZnJlc2hcIjtcclxuICAgICAgICAgICAgICAgIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5pbnNlcnRCZWZvcmUocmVmcmVzaEJ1dHRvbiwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZUZ1bmMgPSBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgaWYgKCFwcmVGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRnVuY3Rpb24hXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbGUuZmlyc3RDaGlsZC5pZCA9IFwicG1tZy1uby1tYXRjaFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gWElUQnVmZmVyVGl0bGVzW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmZpcnN0Q2hpbGQuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIHRoaXMucmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElUSGFuZGxlci50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94LCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCwgY3JlYXRlTGluaywgY3JlYXRlVGFibGUsIGNyZWF0ZVNlbGVjdE9wdGlvbiwgZG93bmxvYWRGaWxlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGdldEdyb3VwQnVybiB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcclxuaW1wb3J0IHsgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjb25zdCBYSVRQcmVGdW5jdGlvbnMgPSB7XHJcbiAgICBcIklOVlwiOiBGSU9JbnZfcHJlLFxyXG4gICAgXCJESVNDT1JEXCI6IERpc2NvcmRfcHJlLFxyXG4gICAgXCJTSEVFVFNcIjogU2hlZXRzX3ByZSxcclxuICAgIFwiUFJPU1BFUklUWVwiOiBQcm9zcGVyaXR5X3ByZSxcclxuICAgIFwiUFJVTlwiOiBQUnVOX3ByZSxcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBTaGVldFRhYmxlX3ByZSxcclxuICAgIFwiRklOXCI6IEZpbl9wcmUsXHJcbiAgICBcIkNIQVRcIjogQ2hhdF9wcmUsXHJcbiAgICBcIkJVUk5cIjogRW5oYW5jZWRCdXJuX3ByZSxcclxuICAgIFwiU0VUVElOR1NcIjogU2V0dGluZ3NfcHJlLFxyXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcclxuICAgIFwiUkVQQUlSU1wiOiBSZXBhaXJzX3ByZSxcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yX3ByZSxcclxuICAgIFwiQ0FMQ1wiOiBDYWxjdWxhdG9yX3ByZSxcclxuICAgIFwiU1RBUlRcIjogU3RhcnRfcHJlLFxyXG4gICAgXCJERUJVR1wiOiBEZWJ1Z19wcmVcclxufTtcclxuZXhwb3J0IGNvbnN0IFhJVEJ1ZmZlclRpdGxlcyA9IHtcclxuICAgIFwiSU5WXCI6IFwiRklPIElOVkVOVE9SWVwiLFxyXG4gICAgXCJESVNDT1JEXCI6IFwiRElTQ09SRCBTRVJWRVJcIixcclxuICAgIFwiU0hFRVRTXCI6IFwiR09PR0xFIFNIRUVUU1wiLFxyXG4gICAgXCJQUk9TUEVSSVRZXCI6IFwiUFJPU1BFUklUWVwiLFxyXG4gICAgXCJQUlVOXCI6IFwiUFJVTi1DRVBUSU9OXCIsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogXCJHT09HTEUgU0hFRVRTIFRBQkxFXCIsXHJcbiAgICBcIkZJTlwiOiBcIkZJTkFOQ0lBTCBPVkVSVklFV1wiLFxyXG4gICAgXCJDSEFUXCI6IFwiQ0hBVFwiLFxyXG4gICAgXCJCVVJOXCI6IFwiRU5IQU5DRUQgQlVSTlwiLFxyXG4gICAgXCJTRVRUSU5HU1wiOiBcIlBNTUcgU0VUVElOR1NcIixcclxuICAgIFwiQ09OVFJBQ1RTXCI6IFwiUEVORElORyBDT05UUkFDVFNcIixcclxuICAgIFwiUkVQQUlSU1wiOiBcIlJFUEFJUlNcIixcclxuICAgIFwiQ0FMQ1wiOiBcIkNBTENVTEFUT1JcIixcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBcIkNBTENVTEFUT1JcIixcclxuICAgIFwiU1RBUlRcIjogXCJTVEFSVElORyBXSVRIIFBNTUdcIixcclxuICAgIFwiREVCVUdcIjogXCJERUJVR1wiXHJcbn07XHJcbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xyXG4gICAgXCJVRk9cIjogW1wiODU1NDg4MzA5ODAyMTcyNDY5XCIsIFwiODU1NDg5NzExNjM1NDMxNDc1XCJdLFxyXG4gICAgXCJGSU9DXCI6IFtcIjgwNzk5MjY0MDI0NzMwMDExNlwiLCBcIjgwODQ1MTUxMjM1MTE5NTE2NlwiXSxcclxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcclxuICAgIFwiUENUXCI6IFtcIjY2NzU1MTQzMzUwMzAxNDkyNFwiLCBcIjY2NzU1MTQzMzUwMzAxNDkyN1wiXVxyXG59O1xyXG5mdW5jdGlvbiBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIGNhbGxiYWNrRnVuY3Rpb24sIHVybCwgcmVxdWVzdFR5cGUgPSBcIkdFVFwiLCBoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIERhdGEgQ291bGQgTm90IEJlIExvYWRlZCEgVGltZWQgT3V0IVwiO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbih0aWxlLCBwYXJhbWV0ZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihyZXF1ZXN0VHlwZSwgdXJsLCB0cnVlKTtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbMF0sIGhlYWRlclsxXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHdoaWxlIChlbGVtLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIHJlc3VsdCwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IHdhcm5pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3YXJuaW5nRGl2KTtcclxuICAgIHdhcm5pbmdEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI0cHhcIjtcclxuICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJTZXR0aW5ncyBjaGFuZ2VzIHJlcXVpcmUgYSByZWZyZXNoIHRvIHRha2UgZWZmZWN0LlwiKSk7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhdXRoZW50aWNhdGlvbkhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkF1dGhlbnRpY2F0aW9uIFNldHRpbmdzXCIpKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYXV0aGVudGljYXRpb25IZWFkZXIpO1xyXG4gICAgY29uc3QgdXNlcm5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdXNlcm5hbWVMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRklPIFVzZXJuYW1lOiBcIik7XHJcbiAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXNlcm5hbWVJbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdIHx8IFwiXCI7XHJcbiAgICB1c2VybmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0gPSAhdXNlcm5hbWVJbnB1dC52YWx1ZSB8fCB1c2VybmFtZUlucHV0LnZhbHVlID09IFwiXCIgPyB1bmRlZmluZWQgOiB1c2VybmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHVzZXJuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICB1c2VybmFtZURpdi5hcHBlbmRDaGlsZCh1c2VybmFtZUxhYmVsKTtcclxuICAgIHVzZXJuYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh1c2VybmFtZURpdik7XHJcbiAgICBjb25zdCBhcGlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYXBpTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIkZJTyBBUEkgS2V5OiBcIik7XHJcbiAgICBhcGlMYWJlbC5zdHlsZS5taW5XaWR0aCA9IFwiNzdweFwiO1xyXG4gICAgYXBpTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBjb25zdCBhcGlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGFwaUlucHV0LnZhbHVlID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdIHx8IFwiXCI7XHJcbiAgICBhcGlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXSA9ICFhcGlJbnB1dC52YWx1ZSB8fCBhcGlJbnB1dC52YWx1ZSA9PSBcIlwiID8gdW5kZWZpbmVkIDogYXBpSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgYXBpSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBhcGlJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgYXBpRGl2LmFwcGVuZENoaWxkKGFwaUxhYmVsKTtcclxuICAgIGFwaURpdi5hcHBlbmRDaGlsZChhcGlJbnB1dCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFwaURpdik7XHJcbiAgICBjb25zdCB3ZWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgd2ViTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIldlYiBBcHAgSUQ6IFwiKTtcclxuICAgIHdlYkxhYmVsLnN0eWxlLm1pbldpZHRoID0gXCI3N3B4XCI7XHJcbiAgICB3ZWJMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbnN0IHdlYklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgd2ViSW5wdXQudmFsdWUgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSB8fCBcIlwiO1xyXG4gICAgd2ViSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSA9ICF3ZWJJbnB1dC52YWx1ZSB8fCB3ZWJJbnB1dC52YWx1ZSA9PSBcIlwiID8gdW5kZWZpbmVkIDogd2ViSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgd2ViSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICB3ZWJEaXYuYXBwZW5kQ2hpbGQod2ViTGFiZWwpO1xyXG4gICAgd2ViRGl2LmFwcGVuZENoaWxkKHdlYklucHV0KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2ViRGl2KTtcclxuICAgIGNvbnN0IG1vZHVsZVNldHRpbmdzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTW9kdWxlIFNldHRpbmdzXCIpKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobW9kdWxlU2V0dGluZ3NIZWFkZXIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25Db250ZW50KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBtb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5TaWRlYmFyTGluZSwgU3R5bGUuRm9udHNSZWd1bGFyKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG1wLm5hbWUpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcmlnaHQuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICByaWdodC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBtYWtlVG9nZ2xlQnV0dG9uKFwiT25cIiwgXCJPZmZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtcC5lbmFibGVkID0gIW1wLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXVtpXSA9PSBtcC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJkaXNhYmxlZFwiXS5wdXNoKG1wLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgfSwgbXAuZW5hYmxlZCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImRpc2FibGVkXCJdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gXCJPZmZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcclxuICAgICAgICBjb25zdCBjbGVhbnVwID0gbWFrZVB1c2hCdXR0b24oXCJ4XCIsICgpID0+IG1wLm1vZHVsZS5jbGVhbnVwKHRydWUpKTtcclxuICAgICAgICBjbGVhbnVwLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI4cHhcIjtcclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjbGVhbnVwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVuaGFuY2VkQ29sb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZW5oYW5jZWRDb2xvckhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbG9yIFNjaGVtZVwiKSk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZW5oYW5jZWRDb2xvckhlYWRlcik7XHJcbiAgICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb2xvckxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJDb2xvciBTY2hlbWU6XCIpO1xyXG4gICAgY29sb3JMYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgY29sb3JEaXYuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBjb2xvclNlbGVjdC5uYW1lID0gXCJjb2xvcnMtc2VsZWN0XCI7XHJcbiAgICBjb2xvclNlbGVjdC5pZCA9IFwiY29sb3JzLXNlbGVjdFwiO1xyXG4gICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2VsZWN0T3B0aW9uKFwiRW5oYW5jZWRcIiwgXCJlbmhhbmNlZFwiKSk7XHJcbiAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTZWxlY3RPcHRpb24oXCJJY29uc1wiLCBcImljb25zXCIpKTtcclxuICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdE9wdGlvbihcIkRlZmF1bHRcIiwgXCJkZWZhdWx0XCIpKTtcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIik7XHJcbiAgICBjb2xvclNlbGVjdC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPT0gXCJlbmhhbmNlZFwiIHx8ICFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0pIHtcclxuICAgICAgICBjb2xvclNlbGVjdC5jaGlsZHJlblswXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPT0gXCJpY29uc1wiKSB7XHJcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29sb3JTZWxlY3QuY2hpbGRyZW5bMl0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29sb3JTZWxlY3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBjb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJjb2xvcl9zY2hlbWVcIl0gPSBjb2xvclNlbGVjdC5zZWxlY3RlZE9wdGlvbnNbMF0udmFsdWUgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29sb3JEaXYpO1xyXG4gICAgY29uc3QgYnVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXJuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYnVybkxhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQnVybiBTZXR0aW5nc1wiKSk7XHJcbiAgICBidXJuTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgYnVybkxhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKGJ1cm5MYWJlbCk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSkge1xyXG4gICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSA9IFszLCA3XTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKHNldERpdik7XHJcbiAgICBzZXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY29uc3QgcmVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldERpdi5hcHBlbmRDaGlsZChyZWREaXYpO1xyXG4gICAgcmVkRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiUmVkIFRocmVzaG9sZDogXCIpKTtcclxuICAgIGNvbnN0IHJlZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcmVkSW4udHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICByZWRJbi52YWx1ZSA9IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzNdKVswXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pO1xyXG4gICAgcmVkRGl2LmFwcGVuZENoaWxkKHJlZEluKTtcclxuICAgIHJlZEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgcmVkSW4uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHJlZEluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdWzBdID0gcGFyc2VGbG9hdChyZWRJbi52YWx1ZSk7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeWVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldERpdi5hcHBlbmRDaGlsZCh5ZWxEaXYpO1xyXG4gICAgeWVsRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWWVsbG93IFRocmVzaG9sZDogXCIpKTtcclxuICAgIGNvbnN0IHllbEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgeWVsSW4udHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICB5ZWxJbi52YWx1ZSA9IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVsxXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pO1xyXG4gICAgeWVsRGl2LmFwcGVuZENoaWxkKHllbEluKTtcclxuICAgIHllbEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgeWVsSW4uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHllbEluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdWzFdID0gcGFyc2VGbG9hdCh5ZWxJbi52YWx1ZSk7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXJuRGl2KTtcclxuICAgIGNvbnN0IHNjcmVlblVucGFja0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTY3JlZW4gVW5wYWNrIEV4Y2x1c2lvbnNcIikpO1xyXG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2NyZWVuVW5wYWNrSGVhZGVyKTtcclxuICAgIGNvbnN0IG5vdGlmRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobm90aWZEaXYpO1xyXG4gICAgbm90aWZEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJMaXN0IHNjcmVlbiBuYW1lcyBzZXBhcmF0ZWQgYnkgY29tbWFzLCBubyBzcGFjZXMuXCIpKTtcclxuICAgIGNvbnN0IGV4Y2x1c2lvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC52YWx1ZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVucGFja19leGNlcHRpb25zXCJdID09IHVuZGVmaW5lZCA/IFwiXCIgOiByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1bnBhY2tfZXhjZXB0aW9uc1wiXS5qb2luKFwiLFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widW5wYWNrX2V4Y2VwdGlvbnNcIl0gPSBleGNsdXNpb25JbnB1dC52YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChleGNsdXNpb25JbnB1dCk7XHJcbiAgICBjb25zdCBob3RrZXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaG90a2V5SGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTGVmdCBTaWRlYmFyIEJ1dHRvbnNcIikpO1xyXG4gICAgaG90a2V5SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SGVhZGVyKTtcclxuICAgIGNvbnN0IGhvdGtleUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SW5wdXREaXYpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICB9XHJcbiAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdLmZvckVhY2goaG90a2V5ID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBtYWtlUHVzaEJ1dHRvbihcIitcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihbW10sIFtdXSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XHJcbiAgICAgICAgaWYgKGRpdiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhvdGtleUlucHV0RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGNvbnN0IGltcG9ydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBpbXBvcnRIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJbXBvcnQvRXhwb3J0IFNldHRpbmdzXCIpKTtcclxuICAgIGltcG9ydEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydEhlYWRlcik7XHJcbiAgICBjb25zdCBpbXBvcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGltcG9ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSW1wb3J0IFNldHRpbmdzXCI7XHJcbiAgICBpbXBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgaW1wb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBpbXBvcnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChpbXBvcnRCdXR0b24pO1xyXG4gICAgY29uc3QgaW1wb3J0RmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW1wb3J0RmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGltcG9ydEZpbGVJbnB1dC5hY2NlcHQgPSBcIi5qc29uXCI7XHJcbiAgICBpbXBvcnRGaWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW1wb3J0RGl2LmFwcGVuZENoaWxkKGltcG9ydEZpbGVJbnB1dCk7XHJcbiAgICBpbXBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbXBvcnRGaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVycm9yVGV4dEJveCA9IGNyZWF0ZVRleHRTcGFuKFwiRXJyb3IgTG9hZGluZyBGaWxlIVwiKTtcclxuICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbXBvcnREaXYuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0Qm94KTtcclxuICAgIGltcG9ydEZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVPdXRwdXQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlT3V0cHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSBbXCJ1c2VybmFtZVwiLCBcImFwaWtleVwiLCBcIndlYmFwcGlkXCJdO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsZU91dHB1dCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtrZXldID0gZmlsZU91dHB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGVycm9yVGV4dEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IEVycm9yIGVuY291bnRlcmVkIHByb2Nlc3NpbmcgZmlsZSFcIik7XHJcbiAgICAgICAgICAgICAgICBlcnJvclRleHRCb3guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGV4cG9ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRXhwb3J0IFNldHRpbmdzXCI7XHJcbiAgICBleHBvcnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgZXhwb3J0QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICBleHBvcnRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBleHBvcnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGltcG9ydERpdi5hcHBlbmRDaGlsZChleHBvcnRCdXR0b24pO1xyXG4gICAgZXhwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0ge307XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZSA9IFtcInVzZXJuYW1lXCIsIFwiYXBpa2V5XCIsIFwid2ViYXBwaWRcIl07XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG93bmxvYWRGaWxlKG91dHB1dCwgXCJwbW1nLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGltcG9ydERpdik7XHJcbiAgICByZXR1cm4gW3BhcmFtZXRlcnMsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3NdO1xyXG59XHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzKHJlc3VsdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHJlc3VsdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBNTUc6IENvbmZpZ3VyYXRpb24gU2F2ZWQuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgZnVsbERpdikge1xyXG4gICAgaWYgKGhvdGtleS5sZW5ndGggIT0gMikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRpc3BsYXllZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRWYWx1ZSk7XHJcbiAgICBjb25zdCBjb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29tbWFuZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGNvbW1hbmQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWFuZCk7XHJcbiAgICBjb25zdCByZW1vdmUgPSBtYWtlUHVzaEJ1dHRvbihcIlhcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBjb21tYW5kLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5ZWRWYWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRpdi5jaGlsZHJlbikuZm9yRWFjaChlbGVtID0+IHsgZGl2LnJlbW92ZUNoaWxkKGVsZW0pOyByZXR1cm47IH0pO1xyXG4gICAgfSwgU3R5bGUuQnV0dG9uRGFuZ2VyKTtcclxuICAgIHJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBob3RrZXlbMF07XHJcbiAgICBjb21tYW5kLnZhbHVlID0gaG90a2V5WzFdO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZnVsbERpdi5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJzaWRlYmFyXCJdID0gaG90a2V5cztcclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb21tYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wic2lkZWJhclwiXSA9IGhvdGtleXM7XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5mdW5jdGlvbiBtYWtlUHVzaEJ1dHRvbih0ZXh0LCBmLCBzdHlsZSA9IFN0eWxlLkJ1dHRvblByaW1hcnkpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlKTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBtYWtlVG9nZ2xlQnV0dG9uKG9uLCBvZmYsIGYsIHN0YXRlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGNvbnN0IHNldExvb2sgPSAocykgPT4ge1xyXG4gICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBzID8gb24gOiBvZmY7XHJcbiAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcoc3RhdGUpKTtcclxuICAgIHNldExvb2soc3RhdGUpO1xyXG4gICAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhKHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKG5ld1N0YXRlKSk7XHJcbiAgICAgICAgc2V0TG9vayhuZXdTdGF0ZSk7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfTtcclxuICAgIHRvZ2dsZS5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xyXG4gICAgcmV0dXJuIHRvZ2dsZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU3RhcnRfcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB0aWxlLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICB0aWxlLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIycHhcIjtcclxuICAgIGNvbnN0IHdlbGNvbWUgPSBjcmVhdGVUZXh0U3BhbihcIlRoYW5rIHlvdSBmb3IgdXNpbmcgUE1NRyBFeHRlbmRlZCFcIik7XHJcbiAgICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHdlbGNvbWUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2VsY29tZSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVGhpcyBpcyBhIHNob3J0IHR1dG9yaWFsIG9uIGhvdyB0byBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBleHRlbnNpb24uXCIpKTtcclxuICAgIGNvbnN0IHdlYnNpdGVMaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlYnNpdGVMaW5rRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2Vic2l0ZUxpbmtEaXYpO1xyXG4gICAgd2Vic2l0ZUxpbmtEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJEZXRhaWxzIG9uIHdoYXQgUE1NRyBvZmZlcnMgY2FuIGJlIGZvdW5kIGhlcmU6IFwiKSk7XHJcbiAgICBjb25zdCB3ZWJzaXRlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgd2Vic2l0ZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9zaXRlcy5nb29nbGUuY29tL3ZpZXcvcG1tZ2V4dGVuZGVkL2hvbWU/YXV0aHVzZXI9MFwiO1xyXG4gICAgd2Vic2l0ZUxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIHdlYnNpdGVMaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgd2Vic2l0ZUxpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICB3ZWJzaXRlTGluay50ZXh0Q29udGVudCA9IFwiUE1NRyBFeHRlbmRlZFwiO1xyXG4gICAgd2Vic2l0ZUxpbmtEaXYuYXBwZW5kQ2hpbGQod2Vic2l0ZUxpbmspO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XHJcbiAgICBzZXR0aW5nc0Rpdi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlN0YXJ0IGJ5IG9wZW5pbmcgYSBuZXcgYnVmZmVyIGFuZCBlbnRlcmluZyBcIikpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NMaW5rID0gY3JlYXRlTGluayhcIlhJVCBTRVRUSU5HU1wiLCBcIlhJVCBTRVRUSU5HU1wiKTtcclxuICAgIHNldHRpbmdzTGluay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XHJcbiAgICBjb25zdCBmaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChmaW9EaXYpO1xyXG4gICAgZmlvRGl2LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIGZpb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkZJTyBpcyBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoYXQgZ2F0aGVycyBkYXRhIGZyb20geW91ciBnYW1lLiBQTU1HIEV4dGVuZGVkIHVzZXMgdGhhdCBkYXRhIHRvIGRpc3BsYXkgdXNlZnVsIGluZm9ybWF0aW9uLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaW5zdGFsbGluZyBGSU8gaGVyZTogXCIpKTtcclxuICAgIGNvbnN0IGZpb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGZpb0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly9maW8uZm5hci5uZXQvXCI7XHJcbiAgICBmaW9MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBmaW9MaW5rLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZmlvTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICAgIGZpb0xpbmsudGV4dENvbnRlbnQgPSBcIkZJTyBXZWJzaXRlXCI7XHJcbiAgICBmaW9EaXYuYXBwZW5kQ2hpbGQoZmlvTGluayk7XHJcbiAgICBjb25zdCBmaW9EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZmlvRGl2Mik7XHJcbiAgICBmaW9EaXYyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgIGZpb0RpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJJZiB5b3UgYWxyZWFkeSBoYXZlIGEgRklPIGFjY291bnQsIGFkZCB5b3VyIHVzZXJuYW1lIGFuZCBBUEkgS2V5IHRvIHRoZSB0ZXh0IGJveGVzIG9uIFhJVCBTRVRUSU5HUy4gWW91IGNhbiBnZW5lcmF0ZSBhbiBBUEkgS2V5IFwiKSk7XHJcbiAgICBjb25zdCBmaW9MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZmlvTGluazIuaHJlZiA9IFwiaHR0cHM6Ly9maW8uZm5hci5uZXQvc2V0dGluZ3NcIjtcclxuICAgIGZpb0xpbmsyLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBmaW9MaW5rMi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGZpb0xpbmsyLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgZmlvTGluazIudGV4dENvbnRlbnQgPSBcImhlcmUuXCI7XHJcbiAgICBmaW9EaXYyLmFwcGVuZENoaWxkKGZpb0xpbmsyKTtcclxuICAgIGNvbnN0IHdlYkFwcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdlYkFwcERpdik7XHJcbiAgICB3ZWJBcHBEaXYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgd2ViQXBwRGl2LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjIwcHhcIjtcclxuICAgIHdlYkFwcERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIklmIHlvdXIgY29ycG9yYXRpb24gaGFzIGEgd2ViIGFwcCAoQUhJLCBGT1dMLCBLQVdBKSwgZW50ZXIgdGhhdCBpbiB0aGUgV2ViIEFwcCBJRCBmaWVsZC5cIikpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIllvdSBjYW4gZXhwbG9yZSBvdGhlciBzZXR0aW5ncyB0byBlbmFibGUgb3IgZGlzYWJsZSBmZWF0dXJlcywgY2hhbmdlIHRoZSBjb2xvciBzY2hlbWUsIGFuZCBjdXN0b21pemUgdGhlIGxlZnQgc2lkZWJhci4gQ29udGFjdCBQaUJveTMxNCBpbiBnYW1lIG9yIG9uIERpc2NvcmQgaWYgeW91IGhhdmUgcXVlc3Rpb25zLlwiKSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIERlYnVnX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkb3dubG9hZEJ1dHRvbnMpO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXSwgXCJEb3dubG9hZCBGdWxsIFNldHRpbmdzXCIsIFwicG1tZy1zZXR0aW5nc1wiICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgXCIuanNvblwiKSk7XHJcbiAgICBkb3dubG9hZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oZnVsbEJ1cm5bcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl1dLCBcIkRvd25sb2FkIEJ1cm5cIiwgXCJwbW1nLWJ1cm5cIiArIERhdGUubm93KCkudG9TdHJpbmcoKSArIFwiLmpzb25cIikpO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKGJ1cm5TZXR0aW5ncywgXCJEb3dubG9hZCBCdXJuIFNldHRpbmdzXCIsIFwicG1tZy1idXJuLXNldHRpbmdzXCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIpKTtcclxuICAgIGNvbnN0IGVuZHBvaW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW5kcG9pbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiR2V0IEZJTyBFbmRwb2ludCAoZXg6IC9pbmZyYXN0cnVjdHVyZS9Qcm94aW9uKVwiO1xyXG4gICAgZW5kcG9pbnRMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZW5kcG9pbnRMYWJlbC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGRvd25sb2FkQnV0dG9ucy5hcHBlbmRDaGlsZChlbmRwb2ludExhYmVsKTtcclxuICAgIGNvbnN0IGVuZHBvaW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlbmRwb2ludElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZW5kcG9pbnRJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGVuZHBvaW50SW5wdXQpO1xyXG4gICAgY29uc3QgZW5kcG9pbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZW5kcG9pbnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkRvd25sb2FkIEZJTyBFbmRwb2ludFwiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgZW5kcG9pbnRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGVuZHBvaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBlbmRwb2ludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyAoZW5kcG9pbnRJbnB1dC52YWx1ZS5jaGFyQXQoMCkgPT0gXCIvXCIgPyBcIlwiIDogXCIvXCIpICsgZW5kcG9pbnRJbnB1dC52YWx1ZTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIERlYnVnX3Bvc3QsIHVybCwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl1dLCBudWxsKTtcclxuICAgIH0pO1xyXG4gICAgZG93bmxvYWRCdXR0b25zLmFwcGVuZENoaWxkKGVuZHBvaW50QnV0dG9uKTtcclxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEZWJ1Z19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoanNvbmRhdGEpKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChleCkgeyB9XHJcbiAgICBkb3dubG9hZEZpbGUoanNvbmRhdGEsIFwiZmlvLWVuZHBvaW50XCIgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBcIi5qc29uXCIsIGZhbHNlKTtcclxuICAgIHJldHVybiBbdGlsZSwgcGFyYW1ldGVyc107XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkQnV0dG9uKGRhdGEsIGJ1dHRvbk5hbWUsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgZG93bmxvYWRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBkb3dubG9hZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgZG93bmxvYWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZG93bmxvYWRGaWxlKGRhdGEsIGZpbGVOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRvd25sb2FkQnV0dG9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxjdWxhdG9yX3ByZSh0aWxlKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgY2FsY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNhbGNEaXYpO1xyXG4gICAgdGlsZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB0aWxlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjQwMHB4XCI7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBvdXRwdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBvdXRwdXQuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIG91dHB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBvdXRwdXQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUud2lkdGggPSBcIjYwJVwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5taW5XaWR0aCA9IFwiMTgwcHhcIjtcclxuICAgIGNvbnN0IGhpc3RvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoaXN0b3J5RGl2KTtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUud2lkdGggPSBcIjM1JVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCIxOTVweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgNDAsIDQzKVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmdiKDQzLDcyLDkwKVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xyXG4gICAgY29uc3QgaGlzdG9yeVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgaGlzdG9yeURpdi5hcHBlbmRDaGlsZChoaXN0b3J5VGFibGUpO1xyXG4gICAgY29uc3QgaGlzdG9yeVRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIGhpc3RvcnlUYWJsZS5hcHBlbmRDaGlsZChoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgIG91dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgb3V0cHV0LnN0eWxlLndpZHRoID0gXCI5MCVcIjtcclxuICAgIG91dHB1dC5zdHlsZS5oZWlnaHQgPSBcIjM2cHhcIjtcclxuICAgIG91dHB1dC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgIG91dHB1dC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQob3V0cHV0KTtcclxuICAgIHZhciBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgIHZhciBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgdmFyIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgdmFyIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICB2YXIgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IGtleXBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGtleXBhZCk7XHJcbiAgICBrZXlwYWQuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xyXG4gICAga2V5cGFkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGtleXBhZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoNCwgMWZyKVwiO1xyXG4gICAgY29uc3QgbGF5b3V0ID0gW1s3LCBudWxsXSwgWzgsIG51bGxdLCBbOSwgbnVsbF0sIFtcIsO3XCIsIFwiIzNmYTJkZVwiXSwgWzQsIG51bGxdLCBbNSwgbnVsbF0sIFs2LCBudWxsXSwgW1wieFwiLCBcIiMzZmEyZGVcIl0sIFsxLCBudWxsXSwgWzIsIG51bGxdLCBbMywgbnVsbF0sIFtcIi1cIiwgXCIjM2ZhMmRlXCJdLCBbMCwgbnVsbF0sIFtcIi5cIiwgbnVsbF0sIFtcIsKxXCIsIG51bGxdLCBbXCIrXCIsIFwiIzNmYTJkZVwiXV07XHJcbiAgICBsYXlvdXQuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChvcHRbMV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0WzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlwYWQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG9wdFswXSA9PSBcIitcIiB8fCBvcHRbMF0gPT0gXCItXCIgfHwgb3B0WzBdID09IFwieFwiIHx8IG9wdFswXSA9PSBcIsO3XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBvcHRbMF07XHJcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdFswXSA9PSBcIsKxXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nLnRvU3RyaW5nKCkuY2hhckF0KDApID09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiLVwiICsgY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGJvdHRvbURpdik7XHJcbiAgICBib3R0b21EaXYuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGJvdHRvbURpdi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoMiwgMWZyKVwiO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGNsZWFyKTtcclxuICAgIGNsZWFyLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xyXG4gICAgY2xlYXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgY2xlYXIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIGNsZWFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIxNywgODMsIDc5KVwiO1xyXG4gICAgY2xlYXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICBvdXRwdXQudmFsdWUgPSBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGVudGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZW50ZXIpO1xyXG4gICAgZW50ZXIudGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XHJcbiAgICBlbnRlci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICBlbnRlci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgZW50ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNWNiODVjXCI7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIjFcIiB8fCBlLmtleSA9PT0gXCIyXCIgfHwgZS5rZXkgPT09IFwiM1wiIHx8IGUua2V5ID09PSBcIjRcIiB8fCBlLmtleSA9PT0gXCI1XCIgfHwgZS5rZXkgPT09IFwiNlwiIHx8IGUua2V5ID09PSBcIjdcIiB8fCBlLmtleSA9PT0gXCI4XCIgfHwgZS5rZXkgPT09IFwiOVwiIHx8IGUua2V5ID09PSBcIjBcIiB8fCBlLmtleSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gZS5rZXk7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIitcIiB8fCBlLmtleSA9PT0gXCItXCIgfHwgZS5rZXkgPT09IFwieFwiIHx8IGUua2V5ID09PSBcIipcIiB8fCBlLmtleSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBlLmtleTtcclxuICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIj1cIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbikge1xyXG4gICAgY3VycmVudFN0cmluZyA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIitcIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgKyBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIi1cIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgLSBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcInhcIiB8fCBjdXJyZW50T3BlcmF0aW9uID09IFwiKlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAqIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiw7dcIiB8fCBjdXJyZW50T3BlcmF0aW9uID09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAvIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVwYWlyc19wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ1c2VybmFtZVwiXSkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBNaXNzaW5nIFVzZXJuYW1lXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBBUEkgS2V5XCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBSZXBhaXJzX3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3NpdGVzL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1widXNlcm5hbWVcIl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdXSwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBSZXBhaXJzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXBhaXJEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXBhaXJEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkFsbCBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcclxuICAgICAgICB0aHJlc2hvbGRUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IFwiNzBcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcclxuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcclxuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiUGxhbmV0XCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1aWxkaW5ncyA9IFtdO1xyXG4gICAgICAgIHJlcGFpckRhdGEuZm9yRWFjaChzaXRlID0+IHtcclxuICAgICAgICAgICAgc2l0ZVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5ncy5wdXNoKFtzaXRlW1wiUGxhbmV0TmFtZVwiXSwgYnVpbGRdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGluZ3Muc29ydChnbG9iYWxCdWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0gKyBcIiBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICB2YXIgc2l0ZURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2l0ZVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkgfHwgc2l0ZVtcIlBsYW5ldElkZW50aWZpZXJcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVEYXRhID0gc2l0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNpdGVEYXRhID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5zb3J0KGJ1aWxkaW5nU29ydCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KSB7XHJcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XHJcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcclxuICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgaWYgKGRhdGUgPCBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkaW5nW1wiUmVwYWlyTWF0ZXJpYWxzXCJdLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFtidWlsZGluZ1tcIkJ1aWxkaW5nVGlja2VyXCJdLCBkYXRlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSksIChidWlsZGluZ1tcIkNvbmRpdGlvblwiXSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArIFwiJVwiXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNsZWFyQ2hpbGRyZW4obWF0RGl2KTtcclxuICAgIG1hdERpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgbWF0RGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0IG9mIFtcIk1hdGVyaWFsXCIsIFwiQW1vdW50XCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChtYm9keSk7XHJcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLnNvcnQoKS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIG1ib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbbWF0LCBtYXRlcmlhbHNbbWF0XS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQpXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KSB7XHJcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XHJcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1sxXVtcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1sxXVtcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1sxXVtcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGJ1aWxkaW5nWzBdLCBkYXRlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSksIChidWlsZGluZ1sxXVtcIkNvbmRpdGlvblwiXSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArIFwiJVwiXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNsZWFyQ2hpbGRyZW4obWF0RGl2KTtcclxuICAgIG1hdERpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgbWF0RGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0IG9mIFtcIk1hdGVyaWFsXCIsIFwiQW1vdW50XCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChtYm9keSk7XHJcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLnNvcnQoKS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIG1ib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbbWF0LCBtYXRlcmlhbHNbbWF0XS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQpXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBidWlsZGluZ1NvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbXCJDb25kaXRpb25cIl0gPiBiW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGdsb2JhbEJ1aWxkaW5nU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVsxXVtcIkNvbmRpdGlvblwiXSA+IGJbMV1bXCJDb25kaXRpb25cIl0gPyAxIDogLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ2hhdF9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jaGF0L2Rpc3BsYXkvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ2hhdF9wb3N0KGNoYXREaXYsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY2hhdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNoYXREYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICBjaGF0RGl2LnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHBhcmFtZXRlcnNbMV0gKyBcIiBHbG9iYWwgU2l0ZSBPd25lcnNcIjtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY2hhdERhdGEuZm9yRWFjaChjaGF0ID0+IHtcclxuICAgICAgICBjb25zdCBjaGF0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuY2xhc3NMaXN0LmFkZChcImNoYXQtbGluZVwiKTtcclxuICAgICAgICBjaGF0RGl2LmFwcGVuZENoaWxkKGNoYXRMaW5lKTtcclxuICAgICAgICBjb25zdCB0aW1lRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgICAgICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiIH0pO1xyXG4gICAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRpbWUtZGF0ZVwiKTtcclxuICAgICAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lRGF0ZURpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KTtcclxuICAgICAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICB0aW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKHRpbWVEYXRlRGl2KTtcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XHJcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoY2hhdFtcIk1lc3NhZ2VUeXBlXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDSEFUXCI6XHJcbiAgICAgICAgICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJNZXNzYWdlVGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiSk9JTkVEXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgam9pbmVkLlwiO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMRUZUXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgbGVmdC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmluX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wid2ViYXBwaWRcIl0gKyBcIi9leGVjP21vZGU9JTIyZmluJTIyJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZpbl9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGaW5fcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBKU09OIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGlsZUhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIE92ZXJ2aWV3XCI7XHJcbiAgICB0aWxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJLZXkgRmlndXJlc1wiO1xyXG4gICAgdGlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0aWxlSGVhZGVyKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiRml4ZWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMl0pLnRvTG9jYWxlU3RyaW5nKCksIFwiQ3VycmVudCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs0XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJMaXF1aWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bN10pLnRvTG9jYWxlU3RyaW5nKCksIFwiRXF1aXR5XCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlhYmlsaXRpZXNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgY29uc3Qgbm93ID0gZGF0YVswXVswXTtcclxuICAgIHZhciB3ZWVrQWdvID0gLTE7XHJcbiAgICB2YXIgYmVzdEd1ZXNzID0gODY0MDAwMDAwMDA7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoTWF0aC5hYnMobm93IC0gZGF0YVtpXVswXSkgLSA3ICogODY0MDAwMDApIDwgYmVzdEd1ZXNzKSB7XHJcbiAgICAgICAgICAgIGJlc3RHdWVzcyA9IE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKTtcclxuICAgICAgICAgICAgd2Vla0FnbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdlZWtBZ28gIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBwcm9maXQgPSBNYXRoLnJvdW5kKGRhdGFbMF1bN10gLSBkYXRhW3dlZWtBZ29dWzddKTtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHByb2ZpdCA+IDAgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByb2ZpdC50b0xvY2FsZVN0cmluZygpLCBcIlByb2ZpdFwiLCBjb2xvcikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJlYWtkb3duSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRpdGxlID0gXCJGaW5hbmNpYWwgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkludmVudG9yeSBCcmVha2Rvd25cIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChicmVha2Rvd25IZWFkZXIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXCJOYW1lXCIsIFwiRml4ZWQgQXNzZXRzXCIsIFwiQ3VycmVudCBBc3NldHNcIiwgXCJUb3RhbCBBc3NldHNcIl07XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IGJyZWFrZG93biA9IEpTT04ucGFyc2UoZGF0YVswXVs4XSk7XHJcbiAgICBicmVha2Rvd24uc29ydChmaW5hbmNpYWxTb3J0KTtcclxuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgYnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBmaXJzdFRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3RUYWJsZUVsZW0pO1xyXG4gICAgICAgIGZpcnN0VGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJvd0RhdGFbMF0pKTtcclxuICAgICAgICByb3dEYXRhLnNoaWZ0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmluYW5jaWFsU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVszXSA8IGJbM10gPyAxIDogLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEVuaGFuY2VkQnVybl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0LCBmdWxsQnVybiwgYnVyblNldHRpbmdzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gQVBJIEtleSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcGlrZXkgPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl07XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdO1xyXG4gICAgdmFyIGJ1cm47XHJcbiAgICB2YXIgdW5sb2FkZWQgPSBmYWxzZTtcclxuICAgIHZhciBwbGFuZXQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICBpZiAoZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdW5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgIGdldEdyb3VwQnVybihmdWxsQnVybiwgcGFyYW1ldGVyc1syXSwgYXBpa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGJ1cm4gPSBmdWxsQnVyblt1c2VybmFtZV07XHJcbiAgICAgICAgICAgIHBsYW5ldCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJ1cm5TZXR0aW5nc1swXSA9PSBcImxvYWRpbmdcIiB8fCB1bmxvYWRlZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XHJcbiAgICAgICAgdGlsZS5pZCA9IFwicG1tZy1yZWxvYWRcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aWxlLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgdmFyIHNldHRpbmdzO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5mb3JFYWNoKHBsYW5ldERhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxhbmV0RGF0YVtcIkVycm9yXCJdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJJbnZlbnRvcnlcIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJPcmRlckNvbnN1bXB0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJQcm9kdWN0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgYnVybik7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm5TZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBQbGFuZXQhXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyUHJvZHVjdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiSW52ZW50b3J5XCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NyZWVuTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlNjcmVlbk5hbWUpO1xyXG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0pIHtcclxuICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0gPSBbXTtcclxuICAgIH1cclxuICAgIHZhciBzZXR0aW5nc0luZGV4ID0gRmluZEJ1cm5TZXR0aW5ncyhyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0sIHNjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdKTtcclxuICAgIGNvbnN0IGRpc3BTZXR0aW5ncyA9IHNldHRpbmdzSW5kZXggPT0gLTEgPyBbMSwgMSwgMSwgMV0gOiByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV07XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2V0dGluZ3NEaXYpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJSRURcIiwgMjIuMDI1LCBkaXNwU2V0dGluZ3NbMF0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMF0gPSBkaXNwU2V0dGluZ3NbMF0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiWUVMTE9XXCIsIDQwLjQ4MywgZGlzcFNldHRpbmdzWzFdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzFdID0gZGlzcFNldHRpbmdzWzFdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ucHVzaChbc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0sIGRpc3BTZXR0aW5nc10pO1xyXG4gICAgICAgICAgICBzZXR0aW5nc0luZGV4ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl1bc2V0dGluZ3NJbmRleF1bMV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIkdSRUVOXCIsIDM0LjY1LCBkaXNwU2V0dGluZ3NbMl0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMl0gPSBkaXNwU2V0dGluZ3NbMl0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0luZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5wdXNoKFtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSwgZGlzcFNldHRpbmdzXSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdzSW5kZXggPSByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX2Rpc3BsYXlfc2V0dGluZ3NcIl0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXVtzZXR0aW5nc0luZGV4XVsxXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiSU5GXCIsIDE5LjYsIGRpc3BTZXR0aW5nc1szXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1szXSA9IGRpc3BTZXR0aW5nc1szXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdLnB1c2goW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdLCBkaXNwU2V0dGluZ3NdKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NJbmRleCA9IHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fZGlzcGxheV9zZXR0aW5nc1wiXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl9kaXNwbGF5X3NldHRpbmdzXCJdW3NldHRpbmdzSW5kZXhdWzFdID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOZWVkc1wiLCBcIlByb2R1Y3Rpb25cIiwgXCJJbnZcIiwgXCJBbXQuIE5lZWRlZFwiLCBcIkJ1cm5cIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBoZWFkUm93LmZpcnN0Q2hpbGQuY29sU3BhbiA9IDI7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICB2YXIgYnVybk1hdGVyaWFscyA9IE9iamVjdC5rZXlzKGNvbnMpO1xyXG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBidXJuTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgdmFyIGluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbXCJNYXRlcmlhbEV4Y2x1c2lvbnNcIl0uZm9yRWFjaCgobWF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihNYXRlcmlhbE5hbWVzW21hdGVyaWFsXVswXSk7XHJcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbnNDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc0NvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihjb25zW21hdGVyaWFsXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIgLyBEYXlcIikpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBpbnZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgaW52QW1vdW50ID0gaW52W21hdGVyaWFsXSA9PSB1bmRlZmluZWQgPyAwIDogaW52W21hdGVyaWFsXTtcclxuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW52Q29sdW1uKTtcclxuICAgICAgICBjb25zdCBidXJuID0gaW52QW1vdW50ID09IDAgPyAwIDogLWludkFtb3VudCAvIGNvbnNbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgYnVybkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbigoKGJ1cm4gPCA1MDAgJiYgY29uc1ttYXRlcmlhbF0gPCAwKSA/IE1hdGguZmxvb3IoYnVybikudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA6IFwi4oieXCIpICsgXCIgRGF5c1wiKSk7XHJcbiAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxdID49IDApIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1pbmZpbml0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMF0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImJ1cm5fdGhyZXNob2xkc1wiXSB8fCBbMywgN10pWzFdKSB7XHJcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkQW10ID0gYnVybiA+IChyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJidXJuX3RocmVzaG9sZHNcIl0gfHwgWzMsIDddKVsxXSB8fCBjb25zW21hdGVyaWFsXSA+IDAgPyAwIDogKGJ1cm4gLSAocmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYnVybl90aHJlc2hvbGRzXCJdIHx8IFszLCA3XSlbMV0pICogY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgbmVlZENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihuZWVkQW10LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmVlZENvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGJ1cm5Db2x1bW4pO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZpbmRCdXJuU2V0dGluZ3MoYXJyYXksIG1hdGNoU3RyaW5nKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoU3RyaW5nID09IGFycmF5W2ldWzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5mdW5jdGlvbiBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpIHtcclxuICAgIEFycmF5LmZyb20odGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4pLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4taW5maW5pdGVcIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbM10gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzNdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbM10gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbM10gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWdyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzJdID8gXCJ0YWJsZS1yb3dcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1syXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzJdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzJdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi15ZWxsb3dcIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMV0gPyBcInRhYmxlLXJvd1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzFdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMV0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMV0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXJlZFwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1swXSA/IFwidGFibGUtcm93XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMF0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1swXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1swXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ2F0ZWdvcnlTb3J0KGEsIGIpIHtcclxuICAgIGlmIChNYXRlcmlhbE5hbWVzW2FdID09IHVuZGVmaW5lZCB8fCBNYXRlcmlhbE5hbWVzW2JdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW2JdWzFdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRUYWJsZV9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcIndlYmFwcGlkXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyByZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJ3ZWJhcHBpZFwiXSArIFwiL2V4ZWM/bW9kZT0lMjJcIiArIHBhcmFtZXRlcnNbMV0gKyBcIiUyMlwiO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdXJsICs9IFwiJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1syXSArIFwiJTIyXCI7XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIFNoZWV0VGFibGVfcG9zdCwgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2V0dGluZ3NCdXR0b24odGV4dCwgd2lkdGgsIHRvZ2dsZWQsIGYpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmICh0b2dnbGVkKSB7XHJcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzVGV4dCk7XHJcbiAgICB0ZXh0Qm94LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQnV0dG9uKTtcclxuICAgIGJhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgYmFyLnN0eWxlLm1heFdpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYmFyKTtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0b2dnbGVkKSB7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcclxuICAgICAgICAgICAgdG9nZ2xlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgICAgICAgICB0b2dnbGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZigpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcbmZ1bmN0aW9uIFNoZWV0VGFibGVfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBKU09OIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgZGF0YVswXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGRhdGEuc2hpZnQoKTtcclxuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ29udHJhY3RzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAoIXJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE1pc3NpbmcgVXNlcm5hbWUhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHRbXCJQTU1HRXh0ZW5kZWRcIl1bXCJhcGlrZXlcIl0pIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTWlzc2luZyBBUEkgS2V5IVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ29udHJhY3RzX3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2NvbnRyYWN0L2FsbGNvbnRyYWN0cy9cIiArIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcInVzZXJuYW1lXCJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHJlc3VsdFtcIlBNTUdFeHRlbmRlZFwiXVtcImFwaWtleVwiXV0sIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ29udHJhY3RzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjb250cmFjdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyYWN0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW52YWxpZENvbnRyYWN0U3RhdHVzID0gW1xyXG4gICAgICAgIFwiRlVMRklMTEVEXCIsXHJcbiAgICAgICAgXCJCUkVBQ0hFRFwiLFxyXG4gICAgICAgIFwiVEVSTUlOQVRFRFwiLFxyXG4gICAgICAgIFwiQ0FOQ0VMTEVEXCIsXHJcbiAgICAgICAgXCJSRUpFQ1RFRFwiXHJcbiAgICBdO1xyXG4gICAgY29uc3QgdmFsaWRDb250cmFjdHMgPSB7XHJcbiAgICAgICAgYnV5aW5nOiBbXSxcclxuICAgICAgICBzZWxsaW5nOiBbXSxcclxuICAgICAgICBzaGlwcGluZzogW11cclxuICAgIH07XHJcbiAgICBjb250cmFjdERhdGEubWFwKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICBpZiAoIWludmFsaWRDb250cmFjdFN0YXR1cy5pbmNsdWRlcyhjb250cmFjdFtcIlN0YXR1c1wiXSkpIHtcclxuICAgICAgICAgICAgbGV0IHZpZXdpbmdQYXJ0eSA9IGNvbnRyYWN0W1wiUGFydHlcIl07XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09PSAyIHx8IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3aW5nUGFydHlDb25kaXRpb25UeXBlID0gY29udHJhY3RbXCJDb25kaXRpb25zXCJdLm1hcChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25bXCJQYXJ0eVwiXSA9PT0gdmlld2luZ1BhcnR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKVswXVtcIlR5cGVcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29uZGl0aW9uVHlwZSBvZiBbY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmxlbmd0aCA9PSAyID8gXCJERUxJVkVSWVwiIDogXCJQUk9WSVNJT05cIiwgXCJQQVlNRU5UXCIsIFwiQ09NRVhfUFVSQ0hBU0VfUElDS1VQXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmZvckVhY2goY29uZGl0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbltcIlR5cGVcIl0gPT09IGNvbmRpdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0gPSBjb25kaXRpb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXdpbmdQYXJ0eUNvbmRpdGlvblR5cGUgPT09IFwiUEFZTUVOVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRDb250cmFjdHNbXCJidXlpbmdcIl0ucHVzaChjb250cmFjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2aWV3aW5nUGFydHlDb25kaXRpb25UeXBlID09PSBcIkRFTElWRVJZXCIgfHwgdmlld2luZ1BhcnR5Q29uZGl0aW9uVHlwZSA9PT0gXCJQUk9WSVNJT05cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkQ29udHJhY3RzW1wic2VsbGluZ1wiXS5wdXNoKGNvbnRyYWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29uZGl0aW9uVHlwZSBvZiBbXCJTSElQTUVOVF9QUk9WSVNJT05cIiwgXCJQQVlNRU5UXCIsIFwiU0hJUE1FTlRfUElDS1VQXCIsIFwiU0hJUE1FTlRfREVMSVZFUllcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0uZm9yRWFjaChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gY29uZGl0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXSA9IGNvbmRpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB2YWxpZENvbnRyYWN0c1tcInNoaXBwaW5nXCJdLnB1c2goY29udHJhY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb250cmFjdDtcclxuICAgICAgICB9XHJcbiAgICB9KS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xyXG4gICAgdmFsaWRDb250cmFjdHNbXCJidXlpbmdcIl0uc29ydChDb250cmFjdFNvcnQpO1xyXG4gICAgdmFsaWRDb250cmFjdHNbXCJzZWxsaW5nXCJdLnNvcnQoQ29udHJhY3RTb3J0KTtcclxuICAgIHZhbGlkQ29udHJhY3RzW1wic2hpcHBpbmdcIl0uc29ydChDb250cmFjdFNvcnQpO1xyXG4gICAgY29uc3QgYnV5VGFibGUgPSBjcmVhdGVUYWJsZSh0aWxlLCBbXCJNYXRlcmlhbFwiLCBcIk5hbWVcIiwgXCJQYXJ0bmVyXCIsIFwiRnVsZmlsbGVkXCIsIFwiUHJvdmlzLlwiLCBcIlBhaWRcIiwgXCJQaWNrIFVwXCJdLCBcIkJ1eWluZ1wiKTtcclxuICAgIGlmICh2YWxpZENvbnRyYWN0c1tcImJ1eWluZ1wiXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gQ3JlYXRlTm9Db250cmFjdHNSb3coNyk7XHJcbiAgICAgICAgYnV5VGFibGUuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YWxpZENvbnRyYWN0c1tcImJ1eWluZ1wiXS5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IENyZWF0ZUNvbnRyYWN0Um93KGNvbnRyYWN0KTtcclxuICAgICAgICAgICAgYnV5VGFibGUuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxsVGFibGUgPSBjcmVhdGVUYWJsZSh0aWxlLCBbXCJNYXRlcmlhbFwiLCBcIk5hbWVcIiwgXCJQYXJ0bmVyXCIsIFwiRnVsZmlsbGVkXCIsIFwiUHJvdmlzLlwiLCBcIlBhaWRcIiwgXCJQaWNrIFVwXCJdLCBcIlNlbGxpbmdcIik7XHJcbiAgICBpZiAodmFsaWRDb250cmFjdHNbXCJzZWxsaW5nXCJdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBDcmVhdGVOb0NvbnRyYWN0c1Jvdyg3KTtcclxuICAgICAgICBzZWxsVGFibGUuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YWxpZENvbnRyYWN0c1tcInNlbGxpbmdcIl0uZm9yRWFjaChjb250cmFjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBDcmVhdGVDb250cmFjdFJvdyhjb250cmFjdCk7XHJcbiAgICAgICAgICAgIHNlbGxUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoaXBUYWJsZSA9IGNyZWF0ZVRhYmxlKHRpbGUsIFtcIk1hdGVyaWFsXCIsIFwiTmFtZVwiLCBcIlBhcnRuZXJcIiwgXCJGdWxmaWxsZWRcIiwgXCJQcm92aXMuXCIsIFwiUGFpZFwiLCBcIlBpY2sgVXBcIiwgXCJEZWxpdmVyXCJdLCBcIlNoaXBwaW5nXCIpO1xyXG4gICAgaWYgKHZhbGlkQ29udHJhY3RzW1wic2hpcHBpbmdcIl0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IENyZWF0ZU5vQ29udHJhY3RzUm93KDgpO1xyXG4gICAgICAgIHNoaXBUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQ29udHJhY3RzW1wic2hpcHBpbmdcIl0uZm9yRWFjaChjb250cmFjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl07XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIHNoaXBUYWJsZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdEVsZW0gPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQoY29uZGl0aW9uc1swXVtcIlBhcnR5XCJdID09PSBcIkNVU1RPTUVSXCIgPyBjb25kaXRpb25zWzBdW1wiTWF0ZXJpYWxUaWNrZXJcIl0gOiBcIlNIUFRcIiwgXCJwcnVuLXJlbW92ZS1qc1wiLCBjb25kaXRpb25zWzBdW1wiUGFydHlcIl0gPT09IFwiQ1VTVE9NRVJcIiA/IGNvbmRpdGlvbnNbMF1bXCJNYXRlcmlhbEFtb3VudFwiXSA6IFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGFydG5lckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcGFydG5lckNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0sIFwiQ08gXCIgKyBjb250cmFjdFtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSkpO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBhcnRuZXJDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwZW5kaW5nID0gKGNvbmRpdGlvbnNbMF1bXCJQYXJ0eVwiXSA9PT0gXCJDVVNUT01FUlwiID8gY29uZGl0aW9uc1swXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiAmJiBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiIDogY29uZGl0aW9uc1syXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiAmJiBjb25kaXRpb25zWzNdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NoZWNrID0gY3JlYXRlVGV4dFNwYW4oXCLirKRcIik7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5jb2xvciA9IHBlbmRpbmcgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgcGVuZGluZ0NvbHVtbi5hcHBlbmRDaGlsZChwZW5kaW5nQ2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBlbmRpbmdDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmNvbG9yID0gY29uZGl0aW9uc1swXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcHJvdkNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwcm92Q29sdW1uLmFwcGVuZENoaWxkKHByb3ZDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJvdkNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcGF5Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwYXlDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBheUNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwYXlDb2x1bW4uYXBwZW5kQ2hpbGQocGF5Q2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBheUNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2tVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGlja1VwQ2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcGlja1VwQ2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwaWNrVXBDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBpY2tVcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwaWNrVXAuYXBwZW5kQ2hpbGQocGlja1VwQ2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBpY2tVcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxpdkNoZWNrID0gY3JlYXRlVGV4dFNwYW4oY29uZGl0aW9uc1szXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFwi4pyTXCIgOiBcIlhcIik7XHJcbiAgICAgICAgICAgIGRlbGl2Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzNdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBkZWxpdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgZGVsaXZDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgZGVsaXZDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsaXZDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoZGVsaXZDb2x1bW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbn1cclxuY29uc3QgQ3JlYXRlTm9Db250cmFjdHNSb3cgPSAoY29sc3BhbikgPT4ge1xyXG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBjb25zdCB0ZXh0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgdGV4dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHtjb2xzcGFufWApO1xyXG4gICAgdGV4dENvbHVtbi50ZXh0Q29udGVudCA9IFwiTm8gY29udHJhY3RzXCI7XHJcbiAgICBsaW5lLmFwcGVuZENoaWxkKHRleHRDb2x1bW4pO1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbn07XHJcbmZ1bmN0aW9uIENyZWF0ZUNvbnRyYWN0Um93KGNvbnRyYWN0KSB7XHJcbiAgICBjb25zdCBjb25kaXRpb25zID0gY29udHJhY3RbXCJDb25kaXRpb25zXCJdO1xyXG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMTBweFwiO1xyXG4gICAgY29uc3QgbWF0RWxlbSA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChjb25kaXRpb25zWzBdW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIFwicHJ1bi1yZW1vdmUtanNcIiwgY29uZGl0aW9uc1swXVtcIk1hdGVyaWFsQW1vdW50XCJdLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLmFwcGVuZENoaWxkKG1hdEVsZW0pO1xyXG4gICAgfVxyXG4gICAgbGluZS5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pKTtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICBjb25zdCBwYXJ0bmVyQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgcGFydG5lckNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0sIFwiQ08gXCIgKyBjb250cmFjdFtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSkpO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZChwYXJ0bmVyQ29sdW1uKTtcclxuICAgIGNvbnN0IHBlbmRpbmdDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBjb25zdCBwZW5kaW5nQ2hlY2sgPSBjcmVhdGVUZXh0U3BhbihcIuKspFwiKTtcclxuICAgIGxldCB2aWV3ZXJzQ29uZGl0aW9uID0gY29uZGl0aW9uc1swXVtcIlBhcnR5XCJdID09PSBjb250cmFjdFtcIlBhcnR5XCJdID8gY29uZGl0aW9uc1swXSA6IGNvbmRpdGlvbnNbMV07XHJcbiAgICBwZW5kaW5nQ2hlY2suc3R5bGUuY29sb3IgPSB2aWV3ZXJzQ29uZGl0aW9uW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgcGVuZGluZ0NoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIHBlbmRpbmdDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIHBlbmRpbmdDb2x1bW4uYXBwZW5kQ2hpbGQocGVuZGluZ0NoZWNrKTtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQocGVuZGluZ0NvbHVtbik7XHJcbiAgICBjb25zdCBwcm92Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgY29uc3QgcHJvdkNoZWNrID0gY3JlYXRlVGV4dFNwYW4oY29uZGl0aW9uc1swXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFwi4pyTXCIgOiBcIlhcIik7XHJcbiAgICBwcm92Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgcHJvdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIHByb3ZDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIHByb3ZDb2x1bW4uYXBwZW5kQ2hpbGQocHJvdkNoZWNrKTtcclxuICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJvdkNvbHVtbik7XHJcbiAgICBjb25zdCBwYXlDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICBjb25zdCBwYXlDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbmRpdGlvbnNbMV1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgcGF5Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgcGF5Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgcGF5Q29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBwYXlDb2x1bW4uYXBwZW5kQ2hpbGQocGF5Q2hlY2spO1xyXG4gICAgbGluZS5hcHBlbmRDaGlsZChwYXlDb2x1bW4pO1xyXG4gICAgY29uc3QgcGlja1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgY29uc3QgcGlja1VwQ2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zLmxlbmd0aCA9PSAzID8gKGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpIDogXCJcIik7XHJcbiAgICBwaWNrVXBDaGVjay5zdHlsZS5jb2xvciA9IGNvbmRpdGlvbnNbMl0gPT0gdW5kZWZpbmVkIHx8IGNvbmRpdGlvbnNbMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICBwaWNrVXBDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICBwaWNrVXAuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIHBpY2tVcC5hcHBlbmRDaGlsZChwaWNrVXBDaGVjayk7XHJcbiAgICBsaW5lLmFwcGVuZENoaWxkKHBpY2tVcCk7XHJcbiAgICByZXR1cm4gbGluZTtcclxufVxyXG47XHJcbmZ1bmN0aW9uIENvbnRyYWN0U29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVtcIkR1ZURhdGVFcG9jaE1zXCJdID4gYltcIkR1ZURhdGVFcG9jaE1zXCJdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQUnVOX3ByZSh0aWxlKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgcHJ1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBwcnVuLnNyYyA9IFwiaHR0cHM6Ly9hcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb20vIy9cIjtcclxuICAgIHBydW4ud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHBydW4uaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBwcnVuLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9zcGVyaXR5X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9wcm9zcGVyaXR5LXBydW4ubmV0bGlmeS5hcHAvXCI7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgIHVybCArPSBcIj9mcm9tPVwiICsgcGFyYW1ldGVyc1sxXSArIFwiJnRvPVwiICsgcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb3NwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHByb3NwLnNyYyA9IHVybDtcclxuICAgIHByb3NwLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBwcm9zcC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHByb3NwKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyYW1ldGVyc1sxXSArPSBcIl9cIiArIHBhcmFtZXRlcnNbaV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBzaGVldC5zcmMgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL2VkaXQ/dXNwPXNoYXJpbmdcIjtcclxuICAgIHNoZWV0LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHNoZWV0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNoZWV0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGlzY29yZF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciBzZXJ2ZXJJRDtcclxuICAgIHZhciBjaGFubmVsSUQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIGlmIChEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xyXG4gICAgICAgICAgICBjaGFubmVsSUQgPSBEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXVsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzZXJ2ZXJJRCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIGRpc2NvcmQuc3JjID0gXCJodHRwczovL2Uud2lkZ2V0Ym90LmlvL2NoYW5uZWxzL1wiICsgc2VydmVySUQgKyBcIi9cIiArIGNoYW5uZWxJRDtcclxuICAgIGRpc2NvcmQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBkaXNjb3JkLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGlzY29yZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEZJT0ludl9wcmUodGlsZSwgcGFyYW1ldGVycywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgYXBpa2V5ID0gcmVzdWx0W1wiUE1NR0V4dGVuZGVkXCJdW1wiYXBpa2V5XCJdO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9nZXRBbGxTdG9yYWdlcywgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvYXV0aC9ncm91cC9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAzOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzWzJdICs9IFwiIFwiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc3RvcmFnZS9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9cIiArIHBhcmFtZXRlcnNbMl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpbnZlbnRvcnlEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XHJcbiAgICBjb25zdCB2b2x1bWVUb3RhbCA9IGludmVudG9yeURhdGFbXCJWb2x1bWVDYXBhY2l0eVwiXTtcclxuICAgIGNvbnN0IHdlaWdodFVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0TG9hZFwiXTtcclxuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW52LWhlYWRlclwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcclxuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzJdLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgY29uc3QgdXNlckVsZW0gPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdLCB0YWcpO1xyXG4gICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcclxuICAgIGNvbnN0IHZvbHVtZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB2b2x1bWVCYXIuaWQgPSBcInZvbHVtZS1iYXJcIjtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgdm9sdW1lQmFyLnZhbHVlID0gdm9sdW1lVXNlZCAvIHZvbHVtZVRvdGFsO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB2b2x1bWVUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBtwrNcIiwgdGFnKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodm9sdW1lTGluZSk7XHJcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlaWdodExpbmUuaWQgPSBcIndlaWdodC1saW5lXCI7XHJcbiAgICB3ZWlnaHRMaW5lLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA4cHhcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJXZWlnaHQgXCIsIHRhZykpO1xyXG4gICAgY29uc3Qgd2VpZ2h0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xyXG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1iYXJcIik7XHJcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcclxuICAgIHdlaWdodEJhci52YWx1ZSA9IHdlaWdodFVzZWQgLyB3ZWlnaHRUb3RhbDtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQod2VpZ2h0QmFyKTtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWlnaHRMaW5lKTtcclxuICAgIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0uc29ydChmaW9NYXRzQWxwaGFiZXRTb3J0KTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIHRhZywgaXRlbVtcIk1hdGVyaWFsQW1vdW50XCJdLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0KSB7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRklPSW52X2dldEFsbFN0b3JhZ2VzKHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICB2YXIgdXNlckpTT047XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHVzZXJKU09OID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEgZnJvbSBGSU8hXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgdXNlcm5hbWVzID0gW107XHJcbiAgICB1c2VySlNPTltcIkdyb3VwVXNlcnNcIl0uZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICB1c2VybmFtZXMucHVzaCh1c2VyW1wiR3JvdXBVc2VyTmFtZVwiXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfYWxsRGlzcGxheSwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvZmlvd2ViL2dyb3VwaHViXCIsIFwiUE9TVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHBhcmFtZXRlcnNbMl1dLCBKU09OLnN0cmluZ2lmeSh1c2VybmFtZXMpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfYWxsRGlzcGxheSh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIGdyb3VwRGF0YSA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncm91cERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbM10gKyBcIiBJbnZlbnRvcmllc1wiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5RGl2KTtcclxuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XHJcbiAgICBpZiAoZ3JvdXBEYXRhW1wiUGxheWVyTW9kZWxzXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0uZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcclxuICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGxheWVyW1wiVXNlck5hbWVcIl0pKTtcclxuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgcGxheWVyW1wiTG9jYXRpb25zXCJdLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhsb2NhdGlvbltcIkxvY2F0aW9uTmFtZVwiXSwgXCJYSVQgSU5WX1wiICsgcGxheWVyW1wiVXNlck5hbWVcIl0gKyBcIl9cIiArIGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLnJlcGxhY2UoLyAvLCBcIl9cIikpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvZHlEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xyXG4gICAgaWYgKGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdID09IG51bGwgfHwgYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVEZ1bmN0aW9ucy50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcclxuICAgIH1cclxuICAgIGJlYXV0aWZ5T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kU2xvdHMgPSBBcnJheS5mcm9tKHF1ZXVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbiArIHRpbWVFbGFwc2VkKX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBDb25zdW1hYmxlVGltZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBidXJuLCB0aHJlc2hvbGRzKSB7XHJcbiAgICAgICAgdGhpcy5idXJuID0gYnVybjtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGRzID0gdGhyZXNob2xkcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiV0ZcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkIHx8IGJ1ZmZlcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCdXJucyhidWZmZXIsIHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXSwgdGhpcy50aHJlc2hvbGRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQnVybnMoYnVmZmVyLCBidXJuLCB0aHJlc2hvbGRzKSB7XHJcbiAgICBjb25zdCBuYW1lRWxlbSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLldvcmtmb3JjZUNvbnN1bXB0aW9uVGFibGUpO1xyXG4gICAgaWYgKG5hbWVFbGVtID09IG51bGwgfHwgbmFtZUVsZW0gPT0gdW5kZWZpbmVkIHx8IG5hbWVFbGVtLnRleHRDb250ZW50ID09IG51bGwgfHwgbmFtZUVsZW0udGV4dENvbnRlbnQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJzZUJhc2VOYW1lKG5hbWVFbGVtLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0aGVhZCA+IHRyXCIpKTtcclxuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzJdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5IZWFkZXIgPSBoZWFkZXIuY2hpbGRyZW5bM107XHJcbiAgICAgICAgdG90YWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvdGFsXCI7XHJcbiAgICAgICAgaWYgKGJ1cm5IZWFkZXIuY2hpbGRyZW4gIT0gdW5kZWZpbmVkICYmIGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJ1cm5IZWFkZXIucmVtb3ZlQ2hpbGQoYnVybkhlYWRlci5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1cm5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkJ1cm5cIjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KG5hbWUsIGJ1cm4pO1xyXG4gICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0Um93LmNoaWxkRWxlbWVudENvdW50IDwgNSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bNF07XHJcbiAgICAgICAgY29uc3QgdG90YWxEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIGlmIChvdXRwdXREYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyIGludmVudG9yeUFtb3VudCA9IGZpbmRJbnZlbnRvcnlBbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGJ1cm5BbW91bnQgPSBmaW5kQnVybkFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xyXG4gICAgICAgICAgICB2YXIgZGF5c0xlZnQ7XHJcbiAgICAgICAgICAgIGlmIChidXJuQW1vdW50ICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gTWF0aC5mbG9vcihpbnZlbnRvcnlBbW91bnQgLyBidXJuQW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA8PSB0aHJlc2hvbGRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi15ZWxsb3dcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tZ3JlZW5cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4tZ3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IGRheXNMZWZ0LnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBmaXJzdENoaWxkID0gb3V0cHV0RGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dERhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oZGF5c0xlZnQpKTtcclxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHRvdGFsRGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGJ1cm5BbW91bnQgPT0gMCA/IFwiXCIgOiBidXJuQW1vdW50LnRvRml4ZWQoMikpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxlZXRFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1mbHQtZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkZMVFwiKTtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGFEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzddO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV0YURhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV0YURhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtldGF9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxlZXRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscywgQ3VycmVuY3lTeW1ib2xzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUG9zdExNIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaWNlcykge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcG9zdC1sbS1wcmljZVwiO1xyXG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhbnVwc1tpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNUG9zdEZvcm0pKS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJDLUVDYi1vdmUxdGxhNnFzaVY0M2V3PT0gaXZHMjRxdFE5MmtieXNMVE5lV0p2dz09XCIpKTtcclxuICAgICAgICAgICAgdmFyIHNoaXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW0gb2YgdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQgPT0gXCJTSElQUElOR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1vZGl0eSA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDb21tb2RpdHknXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0Ftb3VudCddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxQcmljZUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J1RvdGFsIHByaWNlJ11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0N1cnJlbmN5J11dLy9zZWxlY3RcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlFbGVtZW50ID0gY3JlYXRlVGV4dFNwYW4oXCItLVwiLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGlmIChzaGlwcGluZyAmJiBjb21tb2RpdHkudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRJbmZvID0gTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRJbmZvID09IHVuZGVmaW5lZCB8fCBtYXRJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gbWF0SW5mb1sxXSA+PSBtYXRJbmZvWzJdID8gXCJ0XCIgOiBcIm3Cs1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodHZvbHVtZSA9IE1hdGgubWF4KG1hdEluZm9bMV0sIG1hdEluZm9bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih3ZWlnaHR2b2x1bWUpIHx8IGlzTmFOKHRvdGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IFwiLS0gdCB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyBcIi0tIC8gdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBcIiArIHVuaXQgKyBcIiB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgLyBcIiArIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJpY2VzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb21tb2RpdHkudmFsdWUgIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlID0gdGhpcy5wcmljZXNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYW1vdW50ICsgXCIgXCIgPT0gXCJOYU4gXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIiB8IFwiICsgKHByaWNlICogYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBUb3RhbCBDb3JwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCIgKyAocHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUG9zdExNLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaGlwcGluZy1hZHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oPzpTSElQUElORylcXHMoW1xcZCwuXSspdFxcc1xcL1xccyhbXFxkLC5dKyltwrNcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zyb20vKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSBtYXRjaGVzWzNdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9ubmFnZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1sxXS5yZXBsYWNlKC9bLC5dL2csICcnKSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gcGFyc2VGbG9hdChtYXRjaGVzWzJdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHZhciB1bml0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvbm5hZ2UgPiBzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICd0JztcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHRvbm5hZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0ID0gJ23Csyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KHRvdGFsQ29zdC5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJJdGVtID0gdG9GaXhlZCh0b3RhbENlbnRzIC8gY291bnQgLyAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0vJHt1bml0fSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24sIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWV1ZUxvYWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XHJcbiAgICB9XHJcbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XHJcbiAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBwYXJzZUR1cmF0aW9uKGV0YVNwYW4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZVF1ZXVlTG9hZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keTpudGgtb2YtdHlwZSgyKSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIG47XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IHRvRml4ZWQoZXRhIC8gdG90YWxUaW1lICogMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVUZXh0U3BhbihgICR7cGVyY2VudH0lYCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1ub3RzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTm90aWZpY2F0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCAmJiBlbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2VhcmNoZXJzLmZvckVhY2goc2VhcmNoID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2gobmV3IFJlZ0V4cChzZWFyY2hbMF0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnRleHRDb250ZW50ID0gc2VhcmNoWzFdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5zdHlsZS5jb2xvciA9IHNlYXJjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0eXBlU3BhbiwgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdFRleHQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RUZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9DaGFtYmVyIG9mIEdsb2JhbCBDb21tZXJjZS8sIFwiQ09HQ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZHVjZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2F0IHlvdXIgYmFzZSAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL09uZSAvLCBcIjEgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGhhdmUgYmVlbi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHVuaXRbc10/IG9mLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvIChbQS16IC1dKykgcHJvZHVjZWQvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYWRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgveW91ciAoW0EteiAtXSspIG9yZGVyLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkZXIgZmlsbGVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gQ29tbW9kaXR5IEV4Y2hhbmdlLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvKFtBLXogLV0rKSBvcmRlci8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWNjZXB0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB0aGUvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBsb2NhbCBtYXJrZXQvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbnRyYWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9Zb3VyIHBhcnRuZXIgLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVkIGF0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9pdHMgZGVzdGluYXRpb24gLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2djXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFtYmVyIG9mIGdsb2JhbCBjb21tZXJjZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGEgbmV3IGVjb25vbWljIHByb2dyYW0vLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBBZHZlcnRpc2luZyBDYW1wYWlnbjovLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IG5vdFRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuY29uc3QgU2VhcmNoZXJzID0gW1xyXG4gICAgW1wiY29udHJhY3RcIiwgXCJjb250cmFjdFwiLCBcInJnYigyNDcsIDE2NiwgMClcIl0sXHJcbiAgICBbXCJvdXIgY29ycG9yYXRpb25cIiwgXCJjb3JwXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInByb2R1Y2VkXCIsIFwicHJvZHVjZWRcIiwgXCIjM2ZhMmRlXCJdLFxyXG4gICAgW1wiYWNjZXB0ZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxyXG4gICAgW1wiZXhwaXJlZFwiLCBcImFkdmVydFwiLCBcIiM0NDljNTdcIl0sXHJcbiAgICBbXCJ0cmFkZVwiLCBcInRyYWRlXCIsIFwiIzAwODAwMFwiXSxcclxuICAgIFtcIm9yZGVyIGZpbGxlZFwiLCBcIm9yZGVyXCIsIFwiI2NjMjkyOVwiXSxcclxuICAgIFtcImFycml2ZWQgYXRcIiwgXCJhcnJpdmFsXCIsIFwiI2IzMzZiM1wiXSxcclxuICAgIFtcInJlcG9ydFwiLCBcInJlcG9ydFwiLCBcIiMwMGFhNzdcIl0sXHJcbiAgICBbXCJlbGVjdGlvblwiLCBcImVsZWN0aW9uXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImdvdmVybm9yXCIsIFwiZ292ZXJub3JcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicnVsZXNcIiwgXCJydWxlc1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJjb2djXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJjaGFtYmVyIG9mIGdsb2JhbCBjb21tZXJjZVwiLCBcIkNPR0NcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiZXhwZXJ0XCIsIFwiZXhwZXJ0XCIsIFwiI2ZmOGEwMFwiXSxcclxuICAgIFtcInBvcHVsYXRpb24gaW5mcmFzdHJ1Y3R1cmUgcHJvamVjdFwiLCBcIlBPUElcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiYXBleFwiLCBcInVwZGF0ZVwiLCBcIiMwMGFhNzdcIl0sXHJcbiAgICBbXCJ3YXJlaG91c1wiLCBcIndhclwiLCBcIiNjYzI5MjlcIl0sXHJcbiAgICBbXCJzaGlwYnVpbGRpbmcgcHJvamVjdFwiLCBcInNoaXBcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicGxhbmV0YXJ5IHByb2plY3RcIiwgXCJpbmZyYVwiLCBcIiM4ZjUyY2NcIl1cclxuXTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTm90aWZpY2F0aW9ucy50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgY3JlYXRlTm9kZSB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNjcmVlblVucGFjayB7XHJcbiAgICBjb25zdHJ1Y3RvcihleGNsdXNpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNjcmVlbnNcIjtcclxuICAgICAgICBleGNsdXNpb25zID0gZXhjbHVzaW9ucyA9PSB1bmRlZmluZWQgPyBbXSA6IGV4Y2x1c2lvbnM7XHJcbiAgICAgICAgdGhpcy5leGNsdXNpb25zID0gW107XHJcbiAgICAgICAgZXhjbHVzaW9ucy5mb3JFYWNoKGV4ID0+IHsgdGhpcy5leGNsdXNpb25zLnB1c2goZXgudG9VcHBlckNhc2UoKSk7IH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cChmdWxsID0gZmFsc2UpIHtcclxuICAgICAgICBmdWxsICYmIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5TY3JlZW5Db250cm9scyk7XHJcbiAgICAgICAgaWYgKG5hdmJhciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hdmJhci5jaGlsZHJlbltuYXZiYXIuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudGFnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hdmJhckl0ZW1DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRNYWluQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBuYml0VW5kZXJsaW5lQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBtZW51ID0gbmF2YmFyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIHZhciBsaW5rcyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20obWVudS5jaGlsZHJlbikuZm9yRWFjaCgoY24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNuLmNoaWxkcmVuLmxlbmd0aCA9PSA0ICYmICF0aGlzLmV4Y2x1c2lvbnMuaW5jbHVkZXMoU3RyaW5nKGNuLmNoaWxkcmVuWzFdLmlubmVySFRNTCkudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtzLnB1c2goeyBcIk5hbWVcIjogY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MLCBcIkxpbmtcIjogY24uY2hpbGRyZW5bMV0uaHJlZiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwYWNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc3BhY2VyRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBzcGFjZXJEaXYuc3R5bGUud2lkdGggPSBcIjVweFwiO1xyXG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChzcGFjZXJEaXYpO1xyXG4gICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGA8ZGl2IGNsYXNzPVwiJHtuYXZiYXJJdGVtQ2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiJHtuYml0TWFpbkNsYXNzTGlzdH1cIiBzdHlsZT1cImNvbG9yOiBpbmhlcml0XCIgaHJlZj1cIiR7bGluay5MaW5rfVwiPiR7bGluay5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtuYml0VW5kZXJsaW5lQ2xhc3NMaXN0fVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbSA9IGNyZWF0ZU5vZGUoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uRWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY3JlZW5VbnBhY2sudHNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgc2hvd0J1ZmZlciwgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbnMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2lkZWJhclwiO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEJ1dHRvbnMgPSBbXCJCU1wiLCBcIkNPTlRcIiwgXCJDT01cIiwgXCJDT1JQXCIsIFwiQ1hMXCIsIFwiRklOXCIsIFwiRkxUXCIsIFwiSU5WXCIsIFwiTUFQXCIsIFwiUFJPRFwiLCBcIkNNRFNcIl07XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gYnV0dG9ucztcclxuICAgIH1cclxuICAgIGNsZWFudXAoZnVsbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgZnVsbCAmJiBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLkxlZnRTaWRlYmFyKTtcclxuICAgICAgICBpZiAoIXRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbW1wiQlNcIiwgXCJCU1wiXSwgW1wiQ09OVFwiLCBcIkNPTlRTXCJdLCBbXCJDT01cIiwgXCJDT01cIl0sIFtcIkNPUlBcIiwgXCJDT1JQXCJdLCBbXCJDWExcIiwgXCJDWExcIl0sIFtcIkZJTlwiLCBcIkZJTlwiXSwgW1wiRkxUXCIsIFwiRkxUXCJdLCBbXCJJTlZcIiwgXCJJTlZcIl0sIFtcIk1BUFwiLCBcIk1BUFwiXSwgW1wiUFJPRFwiLCBcIlBST0RcIl0sIFtcIkNNRFNcIiwgXCJDTURTXCJdLCBbXCJTRVRcIiwgXCJYSVQgU0VUVElOR1NcIl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZmlyc3RDaGlsZCAhPSBudWxsICYmIChjaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50IHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2lkZWJhci5jaGlsZHJlbltzaWRlYmFyLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b25JbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0U3BhbihidXR0b25JbmZvWzBdLnRvVXBwZXJDYXNlKCksIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJCdXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2xpdmVyKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcclxuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihidXR0b25JbmZvWzFdKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgUGxhbmV0Q29tbWFuZHMsIFBsYW5ldE5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRDb3JyZWN0ZXIge1xyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkJ1ZmZlckFyZWEpKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyRmllbGQgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVGV4dCA9IGJ1ZmZlckZpZWxkLnZhbHVlLnRvVXBwZXJDYXNlKCkgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChQbGFuZXRDb21tYW5kcy5pbmNsdWRlcyhidWZmZXJUZXh0LnNwbGl0KFwiIFwiKVswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhQbGFuZXROYW1lcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclRleHQuaW5jbHVkZXMoXCIgXCIgKyBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVGV4dCA9IGJ1ZmZlclRleHQucmVwbGFjZShcIiBcIiArIG5hbWUsIFwiIFwiICsgUGxhbmV0TmFtZXNbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVmFsdWUoYnVmZmVyRmllbGQsIGJ1ZmZlclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQucGFyZW50RWxlbWVudCA9PSBudWxsIHx8IGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcXVlc3RTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4sIHNob3dCdWZmZXIgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jYWxjXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKGZ1bGwgPSBmYWxzZSkge1xyXG4gICAgICAgIGZ1bGwgJiYgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbGNUYWdzID0gW1wiTE1cIiwgXCJDWFwiLCBcIlhJVFwiXTtcclxuICAgICAgICBjYWxjVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKHRhZyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykgfHwgKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdXBwZXItcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKGNhbGNEaXYsIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmlkID09IFwicmVmcmVzaFwiID8gKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdIDogKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIvCflqlcIiwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIlhJVCBDQUxDVUxBVE9SXCIpOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ2FsY3VsYXRvckJ1dHRvbi50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250cmFjdERyYWZ0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY29udGRcIjtcclxuICAgICAgICB0aGlzLnByaWNlcyA9IHByaWNlcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGdldEJ1ZmZlcnMoXCJDT05URFwiKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db250REZvcm0pO1xyXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Db25kaXRpb25FZGl0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm9ybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGJvZHkgPSBmb3JtLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIHZhciBhbW91bnQgPSAtMTtcclxuICAgICAgICAgICAgdmFyIHByaWNlID0gLTE7XHJcbiAgICAgICAgICAgIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PURlbGl2ZXJ5IG9mICkoLiopKD89IHVuaXQpLykgfHwgW1wiXCJdKVswXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9ICgodGJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0cyBvZiApKC4qKSg/PSB0byApLykgfHwgKHRib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdCBvZiApKC4qKSg/PSB0byApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaWNlc1ttYXRlcmlhbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IGFtb3VudCAqIHRoaXMucHJpY2VzW21hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PVByb3Zpc2lvbiApKC4qKSg/PSB1bml0KS8pIHx8IFtcIlwiXSlbMF0ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdHMgb2YgKSguKikoPz0gXFxAICkvKSB8fCAodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0IG9mICkoLiopKD89IFxcQCApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaWNlc1ttYXRlcmlhbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IGFtb3VudCAqIHRoaXMucHJpY2VzW21hdGVyaWFsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0Ym9keS5jaGlsZHJlbi5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PVByb3Zpc2lvbiBzaGlwbWVudCBvZiApKC4qKSg/PSB1bml0KS8pIHx8IFtcIlwiXSlbMF0ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdHMgb2YgKSguKikoPz0gXFxAICkvKSB8fCAodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0IG9mICkoLiopKD89IFxcQCApLykgfHwgW1wiXCJdKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCA9PSBudWxsIHx8ICFNYXRlcmlhbHNbbWF0ZXJpYWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCgoKGNvbmRpdGlvbi5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmNoaWxkcmVuWzFdIHx8IGNvbmRpdGlvbikuZmlyc3RDaGlsZCB8fCBjb25kaXRpb24pLnRleHRDb250ZW50ID09PSBcIkN1cnJlbmN5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlRGl2ID0gY29uZGl0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRQcmljZURpdiA9PSBudWxsIHx8IGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmljZSA9IHBhcnNlRmxvYXQoaW5wdXRQcmljZURpdi5maXJzdENoaWxkLmZpcnN0Q2hpbGQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodFZvbCA9IGFtb3VudCAqIChNYXRlcmlhbHNbbWF0ZXJpYWxdWzFdID4gTWF0ZXJpYWxzW21hdGVyaWFsXVsyXSA/IE1hdGVyaWFsc1ttYXRlcmlhbF1bMV0gOiBNYXRlcmlhbHNbbWF0ZXJpYWxdWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVBlciA9IGlucHV0UHJpY2UgLyB3ZWlnaHRWb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHByaWNlUGVyLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyAoTWF0ZXJpYWxzW21hdGVyaWFsXVsxXSA+IE1hdGVyaWFsc1ttYXRlcmlhbF1bMl0gPyBcInRcIiA6IFwibcKzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJpY2VEaXYuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGRpc3BsYXksIHRoaXMudGFnKSwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoKChjb25kaXRpb24uY2hpbGRyZW5bMV0gfHwgY29uZGl0aW9uKS5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmZpcnN0Q2hpbGQgfHwgY29uZGl0aW9uKS50ZXh0Q29udGVudCA9PT0gXCJDdXJyZW5jeVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlRGl2ID0gY29uZGl0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dFByaWNlRGl2ID09IG51bGwgfHwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlID0gcGFyc2VGbG9hdChpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVBlciA9IGlucHV0UHJpY2UgLyBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gcHJpY2VQZXIudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIiArIChwcmljZSA9PSAtMSA/IFwiXCIgOiBcIiB8IFwiICsgcHJpY2UudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgVG90YWwgQ29ycFwiKTtcclxuICAgICAgICAgICAgICAgIGlucHV0UHJpY2VEaXYuaW5zZXJ0QmVmb3JlKGNyZWF0ZVRleHRTcGFuKGRpc3BsYXksIHRoaXMudGFnKSwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnRyYWN0RHJhZnRzLnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9