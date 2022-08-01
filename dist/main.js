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
/* harmony export (immutable) */ __webpack_exports__["f"] = createNode;
/* unused harmony export createQuickRowButton */
/* harmony export (immutable) */ __webpack_exports__["b"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["n"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["g"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["c"] = createFinancialTextBox;
/* harmony export (immutable) */ __webpack_exports__["j"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["h"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["i"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["m"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["e"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["d"] = createLink;
/* harmony export (immutable) */ __webpack_exports__["o"] = showBuffer;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeValue;
/* harmony export (immutable) */ __webpack_exports__["k"] = genericCleanup;
/* harmony export (immutable) */ __webpack_exports__["p"] = toFixed;
/* unused harmony export getBuffer */
/* harmony export (immutable) */ __webpack_exports__["l"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* unused harmony export sortTable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(3);



function createNode(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
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
        if (data[i]["PlanetNaturalId"] == planet) {
            return data[i];
        }
        else if (data[i]["PlanetName"] == planet) {
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
    if (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker] == undefined) {
        return null;
    }
    const name = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker][0];
    const category = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker][1];
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
    const addSubmitCommand = (input, cmd) => {
        changeValue(input, cmd);
        input.parentElement.parentElement.requestSubmit();
    };
    monitorOnElementCreated(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferTextField, (elem) => addSubmitCommand(elem, command));
    const button = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].NewBFRButton);
    if (button == null) {
        console.log("Button Null");
        return;
    }
    button.click();
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
}
function genericCleanup(className = "prun-remove-js") {
    Array.from(document.getElementsByClassName(className)).forEach((elem) => {
        elem.parentNode && elem.parentNode.removeChild(elem);
    });
}
function toFixed(value, precision = 2) {
    const power = Math.pow(10, precision || 0);
    return Math.round(value * power) / power;
}
function getBuffer(bufferCode) {
    return document.evaluate(`//div[@class='${__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferHeader}'][starts-with(., '${bufferCode}')]/../..`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
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
    CXOSTable: "div[class~='gecI5uGBluvjP5GCRk3dHA==']"
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
/* harmony export (immutable) */ __webpack_exports__["f"] = RatingColors;

const PlanetCommands = ["ADM", "BSC", "COGC", "COGCPEX", "COGCU", "FLTP", "LR", "LMP", "LM", "PLI", "POPI", "POPR", "PPS", "SHY", "WAR"];
/* harmony export (immutable) */ __webpack_exports__["d"] = PlanetCommands;

const PlanetNames = [
    ["GALLUS", "AM-783b"],
    ["EMENTIOR", "AM-783c"],
    ["NOVA HONSHU", "BS-788c"],
    ["PYRGOS", "CH-771a"],
    ["TALOSIA", "DC-823b"],
    ["MANIFOLD", "EL-179b"],
    ["NOVA UNALASKA", "EZ-476b"],
    ["BOUCHER", "FK-794b"],
    ["CHU", "GY-110c"],
    ["POSEIDON", "HM-049b"],
    ["APOTHECARY", "IA-603b"],
    ["ELECTRONICA", "IY-028c"],
    ["NEMESIS", "JS-299a"],
    ["GIBSON", "JS-952c"],
    ["AUSTRALIA", "KI-446a"],
    ["HERMES", "KI-448b"],
    ["ROCK", "KQ-966b"],
    ["MILLIWAYS", "KW-020c"],
    ["GEIDI PRIME", "KW-358b"],
    ["ETHERWIND", "KW-688c"],
    ["KINZA", "LG-418b"],
    ["PLANET MC PLANETFACE", "LG-913e"],
    ["GRIFFONSTONE", "LS-300c"],
    ["JURA", "OF-259d"],
    ["BERTHIER", "OF-375b"],
    ["DANAKIL", "OT-442b"],
    ["IIRON", "OT-580a"],
    ["MONTEM", "OT-580b"],
    ["VALLIS", "OT-580c"],
    ["PALLADA", "OT-580d"],
    ["PRISM", "OT-889a"],
    ["SALADIN", "PG-899b"],
    ["CIRCE", "QQ-001b"],
    ["CELEBDIL", "QQ-645b"],
    ["MALAHAT", "RC-040b"],
    ["IRONFORGE", "RC-040c"],
    ["ICE STATION ALPHA", "SE-110c"],
    ["SHEOL", "TD-203b"],
    ["RHAZES", "TD-228b"],
    ["KATOA", "UV-351a"],
    ["YANNICK", "UV-351b"],
    ["UMBRA", "UV-351c"],
    ["PROXION", "UV-796b"],
    ["PROMITOR", "VH-331a"],
    ["HELION PRIME", "VH-331d"],
    ["AVALON", "VH-331g"],
    ["HYDRON", "VH-331i"],
    ["MIMAR", "WC-702b"],
    ["LIBERTAS", "XH-594a"],
    ["KIRUNA", "XH-594b"],
    ["CORTEZ", "XH-594c"],
    ["KUB", "YI-059f"],
    ["HARPINA", "YI-209h"],
    ["ARCADIA", "YI-683c"],
    ["VERDANT", "YI-715b"],
    ["NIKE", "ZV-194a"],
    ["HEPHAESTUS", "ZV-307c"],
    ["PHOBOS", "ZV-307d"],
    ["DEIMOS", "ZV-759c"],
    ["HARMONIA", "ZV-896b"],
    ["PROM", "VH-331a"],
    ["GRIFF", "LS-300c"]
];
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
    ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="]
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Style;

const WithStyles = (...style) => {
    return style.reduce(((previousValue, currentValue) => previousValue.concat(currentValue)));
};
/* harmony export (immutable) */ __webpack_exports__["f"] = WithStyles;

const TextColors = {
    Failure: "#d9534f",
    Success: "#5cb85c",
    Standard: "#bbbbbb"
};
/* harmony export (immutable) */ __webpack_exports__["e"] = TextColors;

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
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryColors;

const PMMGStyle = `.title {
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
	visibility: false !important;
	max-height: 0 !important;
	padding: 0 !important;
	margin: 0 !important;
	font-size: 0px !important;
}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = PMMGStyle;

const EnhancedColors = `/* consumables (luxury) */
div[title="Stellar Pale Ale"],
div[data-tooltip-content="#tooltip_ALE"],
div[title="Caffeinated Infusion"],
div[data-tooltip-content="#tooltip_COF"],
div[title="Einsteinium-Infused Gin"],
div[data-tooltip-content="#tooltip_GIN"],
div[title="Kombucha"],
div[data-tooltip-content="#tooltip_KOM"],
div[title="NeuroStimulants"],
div[data-tooltip-content="#tooltip_NST"],
div[title="Padded Work Overall"],
div[data-tooltip-content="#tooltip_PWO"],
div[title="Repair Kit"],
div[data-tooltip-content="#tooltip_REP"],
div[title="Stem Cell Treatment"],
div[data-tooltip-content="#tooltip_SC"],
div[title="VitaGel"],
div[data-tooltip-content="#tooltip_VG"],
div[title="Smart Zinfandel"],
div[data-tooltip-content="#tooltip_WIN"]
{
background: linear-gradient(135deg, #680000, #7b0012) !important;
color: #db9191 !important;
}
/* agricultural products */
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
div[title="FTL Fuel"],
div[data-tooltip-content="#tooltip_FF"],
div[title="STL Fuel"],
div[data-tooltip-content="#tooltip_SF"]
{
background: linear-gradient(135deg, #548d22, #6ba23c) !important;
color: #cbfaa3 !important;
}
/* liquids */
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
}`;
/* harmony export (immutable) */ __webpack_exports__["b"] = EnhancedColors;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getPrices;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBurn;
/* harmony export (immutable) */ __webpack_exports__["c"] = getGroupBurn;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBurnSettings;
function getPrices(prices, webappID) {
    if (webappID == undefined || webappID == null) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("Web App Timeout");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("Retreived Prices from Web App");
                var priceData = JSON.parse(xhr.responseText);
                const keys = Object.keys(priceData);
                keys.forEach(key => {
                    prices[key] = priceData[key];
                });
            }
            catch (SyntaxError) {
                console.log("Bad Data from Web App");
            }
            return;
        }
    };
    xhr.timeout = 10000;
    xhr.open("GET", "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22price%22", true);
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
        console.log("FIO Burn Timeout");
        burn[username] = undefined;
        getBurn(burn, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("Retreived Burn from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    burn[username].push(data);
                });
            }
            catch (SyntaxError) {
                console.log("Bad Data from FIO");
                burn[username] = undefined;
            }
            return;
        }
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
        console.log("FIO Burn Timeout");
        burn[groupid] = undefined;
        getGroupBurn(burn, groupid, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("Retreived Group Burn from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burn[groupid] = [];
                burnData.forEach(data => {
                    burn[groupid].push(data);
                });
            }
            catch (SyntaxError) {
                console.log("Bad Data from FIO");
                burn[groupid] = undefined;
            }
            return;
        }
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
        console.log("FIO Burn Settings Timeout");
        getBurnSettings(burnSettings, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("Retreived Burn Settings from FIO");
                burnSettings[0] = "loaded";
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    burnSettings.push(data);
                });
            }
            catch (SyntaxError) {
                console.log("Bad Data from FIO");
                console.log(xhr.responseText);
            }
            return;
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProductionScroll__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ScreenUnpack__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Sidebar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CommandCorrecter__ = __webpack_require__(21);
















try {
    browser.storage.local.get("AHIBeautifier_Data").then(mainRun, onError);
    console.log("FireFox detected");
}
catch (err) {
    console.log("Chromium detected");
    chrome.storage.local.get(["AHIBeautifier_Data"], function (result) {
        mainRun(result);
    });
}
function mainRun(result) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "pmmg-style";
    style.textContent = __WEBPACK_IMPORTED_MODULE_11__Style__["c" /* PMMGStyle */];
    const doc = document.querySelector("html");
    if (doc != null) {
        doc.appendChild(style);
    }
    if (result["AHIBeautifier_Data"] == undefined) {
        result = { "AHIBeautifier_Data": [undefined, undefined, undefined, false, [], [], [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]]] };
    }
    if (result["AHIBeautifier_Data"][6] == undefined) {
        result["AHIBeautifier_Data"][6] = [["BS", "BS"], ["CONT", "CONTS"], ["COM", "COM"], ["CORP", "CORP"], ["CXL", "CXL"], ["FIN", "FIN"], ["FLT", "FLT"], ["INV", "INV"], ["MAP", "MAP"], ["PROD", "PROD"], ["CMDS", "CMDS"], ["SET", "XIT SETTINGS"]];
    }
    if (result["AHIBeautifier_Data"][7] == undefined) {
        result["AHIBeautifier_Data"][7] = [3, 6];
    }
    if (result["AHIBeautifier_Data"][3] == true) {
        const colors = document.createElement("style");
        colors.type = "text/css";
        colors.id = "pmmg-enhanced-colors";
        colors.textContent = __WEBPACK_IMPORTED_MODULE_11__Style__["b" /* EnhancedColors */];
        if (doc != null) {
            doc.appendChild(colors);
        }
    }
    var prices = {};
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["d" /* getPrices */])(prices, result["AHIBeautifier_Data"][2]);
    var burn = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["a" /* getBurn */])(burn, result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]);
    var burnSettings = [];
    Object(__WEBPACK_IMPORTED_MODULE_10__BackgroundRunner__["b" /* getBurnSettings */])(burnSettings, result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]);
    const runner = new __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__["a" /* LocalMarketAds */](),
        new __WEBPACK_IMPORTED_MODULE_3__OrderETAs__["a" /* OrderETAs */](),
        new __WEBPACK_IMPORTED_MODULE_0__FlightETAs__["a" /* FlightETAs */](),
        new __WEBPACK_IMPORTED_MODULE_7__ShippingAds__["a" /* ShippingAds */](),
        new __WEBPACK_IMPORTED_MODULE_6__PostLM__["a" /* PostLM */](prices),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](result["AHIBeautifier_Data"][0], burn, result["AHIBeautifier_Data"][7]),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_9__Notifications__["a" /* Notifications */](),
        new __WEBPACK_IMPORTED_MODULE_12__ProductionScroll__["a" /* ProductionScroll */](),
        new __WEBPACK_IMPORTED_MODULE_13__ScreenUnpack__["a" /* ScreenUnpack */](result["AHIBeautifier_Data"][5]),
        new __WEBPACK_IMPORTED_MODULE_15__CommandCorrecter__["a" /* CommandCorrecter */](),
        new __WEBPACK_IMPORTED_MODULE_14__Sidebar__["a" /* Sidebar */](result["AHIBeautifier_Data"][6])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlightETAs;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);



class LocalMarketAds {
    constructor() {
        this.tag = "pb-lm-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
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
                if (totalCents <= -100 || totalCents == undefined) {
                }
                else {
                    element.children[0].children[0].style.color = __WEBPACK_IMPORTED_MODULE_2__GameProperties__["f" /* RatingColors */][element.children[0].children[0].textContent || "P"];
                    const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* toFixed */])(totalCents / count / 100, 2);
                    priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
                }
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalMarketAds;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__XITHandler__ = __webpack_require__(9);

class ModuleRunner {
    constructor(modules, result, burn, burnSettings) {
        this.modules = modules.map(m => this.moduleToME(m));
        this.xit = new __WEBPACK_IMPORTED_MODULE_0__XITHandler__["a" /* XITHandler */](result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1], result["AHIBeautifier_Data"][2], result, burn, burnSettings, this.modules);
        this.updateActiveModules(result);
    }
    updateActiveModules(result) {
        if (result["AHIBeautifier_Data"][4] == undefined) {
            return;
        }
        this.modules.forEach(mp => {
            if (result["AHIBeautifier_Data"][4] != undefined && result["AHIBeautifier_Data"][4].includes(mp.name)) {
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



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XITFunctions__ = __webpack_require__(10);



class XITHandler {
    constructor(username, apikey, webappID, result, burn, burnSettings, modules) {
        this.tag = "pb-xit";
        this.username = username;
        this.apikey = apikey;
        this.webappID = webappID;
        this.burn = burn;
        this.burnSettings = burnSettings;
        this.modules = modules;
        this.result = result;
    }
    cleanup() {
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getBuffers */])("XIT");
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
            if (tile.children[1] != undefined && tile.children[1].id == "pmmg-load-success") {
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
                });
            }
            else {
                parameters = parametersRaw.slice(4).split("_");
            }
            if (parameters == undefined || parameters == null)
                return;
            if (tile.children[1] != undefined && tile.children[1].id == "pmmg-reload") {
                __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()](tile.children[1], parameters, this.apikey, this.webappID, this.username, burn, burnSettings, this.modules, this.result);
                return;
            }
            tile.classList.add("xit-tile");
            const topDiv = document.createElement("div");
            topDiv.style.display = "block";
            topDiv.style.width = "100%";
            topDiv.classList.add(this.tag);
            tile.appendChild(topDiv);
            const refreshButton = document.createElement("button");
            refreshButton.textContent = "⟳";
            refreshButton.classList.add("refresh-button");
            topDiv.appendChild(refreshButton);
            const contentDiv = document.createElement("div");
            contentDiv.style.height = "100%";
            contentDiv.style.flexGrow = "1";
            tile.appendChild(contentDiv);
            const preFunc = __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()];
            if (preFunc == undefined) {
                tile.textContent = "Error! No Matching Function!";
            }
            else {
                Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["a" /* XITBufferTitles */][parameters[0].toUpperCase()];
                const apikey = this.apikey;
                const webappID = this.webappID;
                const username = this.username;
                const modules = this.modules;
                var result = this.result;
                refreshButton.addEventListener("click", function () { preFunc(contentDiv, parameters, apikey, webappID, username, burn, burnSettings, modules, result); });
                tile.children[1].id = "pmmg-load-success";
                preFunc(contentDiv, parameters, this.apikey, this.webappID, username, burn, burnSettings, modules, this.result);
            }
            return;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = XITHandler;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings_pre */
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
    "CALC": Calculator_pre
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
    "CALCULATOR": "CALCULATOR"
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
            return;
        }
    };
    xhr.timeout = 10000;
    xhr.open(requestType, url, true);
    if (header != undefined) {
        xhr.setRequestHeader(header[0], header[1]);
    }
    if (content != undefined) {
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
function Settings_pre(tile, parameters, apikey, webappID, username, fullBurn, burnSettings, modules, result) {
    clearChildren(tile);
    const warningDiv = document.createElement("div");
    tile.appendChild(warningDiv);
    warningDiv.style.marginTop = "4px";
    warningDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Settings changes require a refresh to take effect."));
    const moduleSettingsHeader = document.createElement('h3');
    moduleSettingsHeader.appendChild(document.createTextNode("Module Settings"));
    moduleSettingsHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(moduleSettingsHeader);
    const content = document.createElement("div");
    content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionContent);
    tile.appendChild(content);
    modules.forEach(mp => {
        const line = document.createElement('div');
        line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["f" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].FontsRegular));
        content.appendChild(line);
        line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(mp.name));
        content.appendChild(line);
        const right = document.createElement("span");
        right.style.flexGrow = "1";
        right.style.textAlign = "right";
        line.appendChild(right);
        if (result["AHIBeautifier_Data"][4] == undefined) {
            result["AHIBeautifier_Data"][4] = [];
        }
        const toggle = makeToggleButton("On", "Off", () => {
            mp.enabled = !mp.enabled;
            if (result["AHIBeautifier_Data"][4].includes(mp.name)) {
                if (mp.enabled) {
                    for (var i = 0; i < result["AHIBeautifier_Data"][4].length; i++) {
                        if (result["AHIBeautifier_Data"][4][i] == mp.name) {
                            result["AHIBeautifier_Data"][4].splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            else {
                if (!mp.enabled) {
                    result["AHIBeautifier_Data"][4].push(mp.name);
                }
            }
            setEnabledSettings(result);
        }, mp.enabled);
        if (result["AHIBeautifier_Data"][4].includes(mp.name)) {
            toggle.setAttribute("data-state", "false");
            mp.enabled = false;
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonSuccess);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonPrimary);
            toggle.innerText = "Off";
        }
        right.appendChild(toggle);
        const cleanup = makePushButton("x", () => mp.module.cleanup());
        cleanup.style.marginRight = "8px";
        right.appendChild(cleanup);
    });
    const enhancedColorHeader = document.createElement('h3');
    enhancedColorHeader.appendChild(document.createTextNode("Enhanced Colors"));
    enhancedColorHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(enhancedColorHeader);
    const colorDiv = document.createElement("div");
    const colorLabel = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Enhanced Colors");
    colorLabel.style.marginBottom = "4px";
    colorDiv.appendChild(colorLabel);
    const colorCheck = document.createElement("input");
    colorCheck.type = "checkbox";
    colorCheck.checked = result["AHIBeautifier_Data"][3];
    colorCheck.style.display = "inline-block";
    colorCheck.addEventListener("click", function () {
        result["AHIBeautifier_Data"][3] = colorCheck.checked;
        setEnabledSettings(result);
    });
    colorDiv.appendChild(colorCheck);
    tile.appendChild(colorDiv);
    const burnDiv = document.createElement("div");
    const burnLabel = document.createElement('h3');
    burnLabel.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Burn Settings"));
    burnLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    burnLabel.style.marginBottom = "4px";
    burnDiv.appendChild(burnLabel);
    const setDiv = document.createElement("div");
    burnDiv.appendChild(setDiv);
    setDiv.style.display = "flex";
    const redDiv = document.createElement("div");
    setDiv.appendChild(redDiv);
    redDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Red Threshold: "));
    const redIn = document.createElement("input");
    redIn.type = "number";
    redIn.value = result["AHIBeautifier_Data"][7][0].toLocaleString(undefined, { maximumFractionDigits: 0 });
    redDiv.appendChild(redIn);
    redIn.classList.add("input-text");
    redIn.style.width = "50px";
    redIn.addEventListener("input", function () {
        result["AHIBeautifier_Data"][7][0] = parseFloat(redIn.value);
        setEnabledSettings(result);
    });
    const yelDiv = document.createElement("div");
    setDiv.appendChild(yelDiv);
    yelDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Yellow Threshold: "));
    const yelIn = document.createElement("input");
    yelIn.type = "number";
    yelIn.value = result["AHIBeautifier_Data"][7][1].toLocaleString(undefined, { maximumFractionDigits: 0 });
    yelDiv.appendChild(yelIn);
    yelIn.classList.add("input-text");
    yelIn.style.width = "50px";
    yelIn.addEventListener("input", function () {
        result["AHIBeautifier_Data"][7][1] = parseFloat(yelIn.value);
        setEnabledSettings(result);
    });
    tile.appendChild(burnDiv);
    const screenUnpackHeader = document.createElement('h3');
    screenUnpackHeader.appendChild(document.createTextNode("Screen Unpack Exclusions"));
    screenUnpackHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(screenUnpackHeader);
    const notifDiv = document.createElement("div");
    tile.appendChild(notifDiv);
    notifDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("List screen names separated by commas, no spaces."));
    const exclusionInput = document.createElement("input");
    exclusionInput.classList.add("input-text");
    exclusionInput.value = result["AHIBeautifier_Data"][5] == undefined ? "" : result["AHIBeautifier_Data"][5].join(",");
    exclusionInput.addEventListener("input", function () {
        result["AHIBeautifier_Data"][5] = exclusionInput.value.split(",");
        setEnabledSettings(result);
    });
    tile.appendChild(exclusionInput);
    const hotkeyHeader = document.createElement('h3');
    hotkeyHeader.appendChild(document.createTextNode("Left Sidebar Buttons"));
    hotkeyHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(hotkeyHeader);
    const hotkeyInputDiv = document.createElement("div");
    tile.appendChild(hotkeyInputDiv);
    result["AHIBeautifier_Data"][6].forEach(hotkey => {
        const div = createInputPair(hotkey, result, hotkeyInputDiv);
        if (div != null) {
            hotkeyInputDiv.appendChild(div);
        }
    });
    const addButton = makePushButton("+", function () {
        const div = createInputPair([[], []], result, hotkeyInputDiv);
        if (div != null) {
            hotkeyInputDiv.appendChild(div);
        }
    }, __WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonSuccess);
    addButton.style.marginLeft = "4px";
    addButton.style.marginBottom = "4px";
    tile.appendChild(addButton);
    return [parameters, apikey, webappID, username, fullBurn, burnSettings];
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
        Array.from(div.children).forEach(elem => { div.removeChild(elem); });
    }, __WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonDanger);
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
        });
        result["AHIBeautifier_Data"][6] = hotkeys;
        setEnabledSettings(result);
    });
    command.addEventListener("input", function () {
        var hotkeys = [];
        Array.from(fullDiv.children).forEach(option => {
            if (option.children[0] != undefined && option.children[1] != undefined && option.children[0].value != "" && option.children[0].value != undefined && option.children[1].value != "" && option.children[1].value != undefined) {
                hotkeys.push([option.children[0].value, option.children[1].value]);
            }
        });
        result["AHIBeautifier_Data"][6] = hotkeys;
        setEnabledSettings(result);
    });
    return div;
}
function makePushButton(text, f, style = __WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonPrimary) {
    const button = document.createElement('button');
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].Button);
    button.classList.add(...style);
    button.onclick = f;
    button.innerText = text;
    return button;
}
function makeToggleButton(on, off, f, state = false) {
    const toggle = document.createElement('button');
    toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].Button);
    const setLook = (s) => {
        toggle.innerText = s ? on : off;
        if (s) {
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonPrimary);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonSuccess);
        }
        else {
            toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonSuccess);
            toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ButtonPrimary);
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
function setEnabledSettings(result) {
    try {
        browser.storage.local.set(result);
    }
    catch (err) {
        chrome.storage.local.set(result, function () { console.log("Saved Configuration"); });
    }
}
function Calculator_pre(tile, parameters) {
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
    return parameters;
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
}
function Repairs_pre(tile, parameters, apikey, webappID, username) {
    clearChildren(tile);
    XITWebRequest(tile, parameters, Repairs_post, "https://rest.fnar.net/sites/" + username, "GET", ["Authorization", apikey], undefined);
    return webappID;
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
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("All Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Buildings");
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
            });
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
        const title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(parameters[1] + " Repairs");
        title.classList.add("title");
        tile.appendChild(title);
        var siteData = undefined;
        repairData.forEach(site => {
            if (site["PlanetName"].toUpperCase() == parameters[1].toUpperCase() || site["PlanetIdentifier"].toUpperCase() == parameters[1].toUpperCase()) {
                siteData = site;
                return;
            }
        });
        if (siteData == undefined) {
            return;
        }
        const thresholdDiv = document.createElement("div");
        tile.appendChild(thresholdDiv);
        const thresholdInput = document.createElement("input");
        thresholdInput.classList.add("input-text");
        const thresholdText = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Age Threshold:");
        thresholdText.style.paddingLeft = "5px";
        thresholdInput.type = "number";
        thresholdInput.value = "70";
        thresholdInput.style.width = "60px";
        thresholdDiv.appendChild(thresholdText);
        thresholdDiv.appendChild(thresholdInput);
        const matTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Shopping Cart");
        matTitle.classList.add("title");
        matTitle.style.paddingBottom = "2px";
        tile.appendChild(matTitle);
        const matDiv = document.createElement("div");
        tile.appendChild(matDiv);
        const buiTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Buildings");
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
        });
        var rowData = [building["BuildingTicker"], date.toLocaleString(undefined, { maximumFractionDigits: 1 }), (building["Condition"] * 100).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "%"];
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
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
    });
}
function Fin_pre(tile, parameters, apikey, webappID) {
    clearChildren(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return apikey;
    }
    const url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22fin%22&param=%22" + parameters[1] + "%22";
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
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][2]).toLocaleString(), "Current Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][7]).toLocaleString(), "Equity", __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createFinancialTextBox */])(Math.round(data[0][5]).toLocaleString(), "Liabilities", __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard));
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
        const color = profit > 0 ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
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
        firstTableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(rowData[0]));
        rowData.shift();
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
        }
    }
    tile.appendChild(table);
}
function financialSort(a, b) {
    return a[3] < b[3] ? 1 : -1;
}
function EnhancedBurn_pre(tile, parameters, apikey, webappID, username, fullBurn, burnSettings, modules, result) {
    clearChildren(tile);
    var burn;
    var unloaded = false;
    var planet;
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return [apikey, webappID, modules];
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
                });
                planetData["OrderProduction"].forEach(material => {
                    if (cons[material["MaterialTicker"]] == undefined) {
                        cons[material["MaterialTicker"]] = material["DailyAmount"];
                    }
                    else {
                        cons[material["MaterialTicker"]] += material["DailyAmount"];
                    }
                });
            }
        });
    }
    else {
        const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* findCorrespondingPlanet */])(planet, burn);
        settings = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* findCorrespondingPlanet */])(planet, burnSettings);
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
    const table = document.createElement("table");
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
        const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][material][0]);
        nameSpan.style.fontWeight = "bold";
        const nameColumn = document.createElement("td");
        nameColumn.appendChild(nameSpan);
        row.appendChild(nameColumn);
        const consColumn = document.createElement("td");
        consColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(cons[material].toLocaleString(undefined, { maximumFractionDigits: 1 }) + " / Day"));
        row.appendChild(consColumn);
        const invColumn = document.createElement("td");
        const invAmount = inv[material] == undefined ? 0 : inv[material];
        invColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(invAmount.toLocaleString(undefined)));
        row.appendChild(invColumn);
        const burn = invAmount == 0 ? 0 : -invAmount / cons[material];
        const burnColumn = document.createElement("td");
        burnColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(((burn < 500 && cons[material] < 0) ? Math.floor(burn).toLocaleString(undefined, { maximumFractionDigits: 0 }) : "∞") + " Days"));
        if (cons[material] >= 0) {
            burnColumn.classList.add("burn-green");
        }
        else if (burn <= result["AHIBeautifier_Data"][7][0]) {
            burnColumn.classList.add("burn-red");
        }
        else if (burn <= result["AHIBeautifier_Data"][7][1]) {
            burnColumn.classList.add("burn-yellow");
        }
        else {
            burnColumn.classList.add("burn-green");
        }
        const needColumn = document.createElement("td");
        const needAmt = burn > 7 || cons[material] > 0 ? 0 : (burn - result["AHIBeautifier_Data"][7][1]) * cons[material];
        needColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(needAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })));
        row.appendChild(needColumn);
        row.appendChild(burnColumn);
    }
    tile.appendChild(table);
    return;
}
function CategorySort(a, b) {
    if (__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][a] == undefined || __WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][b] == undefined) {
        return 0;
    }
    return __WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][a][1].localeCompare(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][b][1]);
}
function SheetTable_pre(tile, parameters, apikey, webappID) {
    clearChildren(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return apikey;
    }
    var url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22" + parameters[1] + "%22";
    if (parameters[2] != undefined) {
        url += "&param=%22" + parameters[2] + "%22";
    }
    XITWebRequest(tile, parameters, SheetTable_post, url, "GET", undefined, undefined);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
    }
    tile.appendChild(table);
}
function Contracts_pre(tile, parameters, apikey, webappID, username) {
    clearChildren(tile);
    XITWebRequest(tile, parameters, Contracts_post, "https://rest.fnar.net/contract/allcontracts/" + username, "GET", ["Authorization", apikey], undefined);
    return [webappID];
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
    const pendingHeader = document.createElement('h3');
    pendingHeader.appendChild(document.createTextNode("Pending Contracts"));
    pendingHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(pendingHeader);
    const pendingDiv = document.createElement("div");
    tile.appendChild(pendingDiv);
    const seenContracts = [];
    contractData.forEach(contract => {
        if (contract["Status"] === "FULFILLED" || contract["Status"] === "BREACHED") {
            return;
        }
        if (seenContracts.includes(contract["ContractLocalId"])) {
            return;
        }
        const line = document.createElement("div");
        line.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ContractLine);
        const contractName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["ContractLocalId"]);
        contractName.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ContractName);
        line.appendChild(contractName);
        seenContracts.push(contract["ContractLocalId"]);
        const contractView = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])("view", "CONT " + contract["ContractLocalId"]);
        contractView.style.textAlign = "right";
        line.appendChild(contractView);
        pendingDiv.appendChild(line);
    });
    return parameters;
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
function FIOInv_pre(tile, parameters, apikey) {
    clearChildren(tile);
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
    header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(parameters[2], tag));
    header.appendChild(document.createElement("br"));
    const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(parameters[1], tag);
    userElem.style.paddingLeft = "8px";
    header.appendChild(userElem);
    const volumeLine = document.createElement("div");
    volumeLine.id = "volume-line";
    volumeLine.style.padding = "2px 8px";
    volumeLine.style.color = "#999999";
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Volume ", tag));
    const volumeBar = document.createElement("progress");
    volumeBar.id = "volume-bar";
    volumeBar.classList.add(tag);
    volumeBar.classList.add("progress-bar");
    volumeBar.max = 1;
    volumeBar.value = volumeUsed / volumeTotal;
    volumeLine.appendChild(volumeBar);
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(volumeUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + volumeTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " m³", tag));
    header.appendChild(volumeLine);
    const weightLine = document.createElement("div");
    weightLine.id = "weight-line";
    weightLine.style.padding = "2px 8px";
    weightLine.style.color = "#999999";
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("Weight ", tag));
    const weightBar = document.createElement("progress");
    weightBar.id = "weight-bar";
    weightBar.classList.add(tag);
    weightBar.classList.add("progress-bar");
    weightBar.max = 1;
    weightBar.value = weightUsed / weightTotal;
    weightLine.appendChild(weightBar);
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(weightUsed.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " / " + weightTotal.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 }) + " t", tag));
    header.appendChild(weightLine);
    inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
    for (let item of inventoryData["StorageItems"]) {
        const mat = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true);
        if (mat != null) {
            mat.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* showBuffer */])("MAT " + item["MaterialTicker"]); });
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
    titleDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(parameters[3] + " Inventories"));
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
        playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(player["UserName"]));
        playerDiv.firstChild.style.fontWeight = "bold";
        player["Locations"].forEach(location => {
            playerDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createLink */])(location["LocationName"], "XIT INV_" + player["UserName"] + "_" + location["LocationName"].replace(/ /, "_")));
        });
        bodyDiv.appendChild(playerDiv);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
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
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* parseDuration */])(prodItem.children[0].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            prodItem.children[0].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* convertDurationToETA */])(duration + timeElapsed)})`, this.tag));
                        }
                        else {
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* parseDuration */])(prodItem.children[1].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            prodItem.children[1].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* convertDurationToETA */])(duration)})`, this.tag));
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
        this.tag = "pb-consumable-timers";
        this.burn = burn;
        this.username = username;
        this.thresholds = thresholds;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        if (this.burn[this.username] == undefined || this.burn[this.username].length == 0) {
            return;
        }
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getBuffers */])("WF");
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
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* parseBaseName */])(nameElem.textContent);
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
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* findCorrespondingPlanet */])(name, burn);
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
            var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* findInventoryAmount */])(targetRow.children[0].textContent, planetBurn);
            var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* findBurnAmount */])(targetRow.children[0].textContent, planetBurn);
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
            outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(daysLeft));
            firstChild = totalData.firstChild;
            if (firstChild != null) {
                totalData.removeChild(firstChild);
            }
            totalData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["n" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* genericCleanup */])(this.tag);
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
            var displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* createTextSpan */])("--", this.tag);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
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
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* toFixed */])(totalCents / count / 100, 2);
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
            }
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["n" /* parseDuration */])(etaSpan.textContent);
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
                    const percent = Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* toFixed */])(eta / totalTime * 100, 2);
                    const textField = row.querySelectorAll("td").item(6);
                    if (textField && eta > 0) {
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` ${percent}%`, this.tag);
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
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].Notification);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
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


class ProductionScroll {
    constructor() {
        this.tag = "pb-scroll";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdWindow));
        elements.forEach(prod => {
            const innerElem = prod.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdPanel);
            innerElem.style.overflowX = "hidden";
            innerElem.style.overflowY = "scroll";
            if (innerElem.firstChild == null) {
                return;
            }
            const count = innerElem.firstChild.children.length;
            prod.style.width = (count * 120) + "px";
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductionScroll;



/***/ }),
/* 19 */
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
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const navbar = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ScreenControls);
        if (navbar == null) {
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
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenUnpack;



/***/ }),
/* 20 */
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const sidebar = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LeftSidebar);
        if (sidebar == null) {
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
            const buttonText = Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* createTextSpan */])(buttonInfo[0].toUpperCase(), this.tag);
            const sliver = document.createElement("div");
            button.classList.add(this.tag);
            sliver.classList.add(this.tag);
            button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarButton);
            buttonText.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarText);
            sliver.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSliver);
            button.appendChild(buttonText);
            button.appendChild(sliver);
            sidebar.appendChild(button);
            button.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_2__util__["o" /* showBuffer */])(buttonInfo[1]); });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sidebar;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);



class CommandCorrecter {
    constructor() {
        this.tag = "pb-command";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* genericCleanup */])(this.tag);
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
                    __WEBPACK_IMPORTED_MODULE_2__GameProperties__["e" /* PlanetNames */].forEach(namePair => {
                        if (bufferText.includes(" " + namePair[0])) {
                            bufferText = bufferText.replace(" " + namePair[0], " " + namePair[1]);
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZiYjU2MWNlNTQ2YjNjZDM4ZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZHVjdGlvblNjcm9sbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNXO0FBQ1I7QUFDbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5RUFBeUUsWUFBWTtBQUNyRixnQ0FBZ0MsY0FBYyxrREFBa0Q7QUFDaEc7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG9CQUFvQixjQUFjO0FBQ2xDLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFDQUFxQztBQUMvRTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsUUFBUSxzRUFBYTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCLHNFQUFhO0FBQzlCLHFCQUFxQixzRUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOERBQWM7QUFDOUMsMkJBQTJCLDhEQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFRO0FBQ3BDLDJDQUEyQywyREFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOENBQThDLDJEQUFRLGNBQWMscUJBQXFCLFdBQVc7QUFDcEc7QUFDTztBQUNQLHFEQUFxRCwyREFBUSxjQUFjLHFCQUFxQixXQUFXO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUMzQks7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLLHlJQUF5STtBQUFBO0FBQUE7QUFDekk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBOzs7Ozs7OztBQ3J3Qks7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUFBO0FBQUE7QUFDSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNsV0g7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHdCQUF3QixrRUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZmJiNTYxY2U1NDZiM2NkMzhkMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cmluZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWlja1Jvd0J1dHRvbihzaG9ydFRleHRCb2xkLCBzaG9ydFRleHROb3JtYWwsIGxvbmdUZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiTUFwY3NZRWQ3K3dxSUpUZmJIUDF5QT09IGZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PSBrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cIkQrR0poSUdtQzJlRms1OWR2clkrU2c9PVwiPnt7OnNob3J0Qm9sZH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ezpzaG9ydE5vcm1hbH19PC9zcGFuPjxzcGFuIGNsYXNzPVwiY0txekVEZXlLYnpiOW5QcnkwRGtmdz09XCI+OiB7ezpsb25nVGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7ezpzaG9ydEJvbGR9fVwiLCBzaG9ydFRleHRCb2xkKVxyXG4gICAgICAgIC5yZXBsYWNlKFwie3s6c2hvcnROb3JtYWx9fVwiLCBzaG9ydFRleHROb3JtYWwpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJ7ezpsb25nVGV4dH19XCIsIGxvbmdUZXh0KTtcclxuICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShyZXN1bHQpO1xyXG4gICAgbm9kZS5vbmNsaWNrID0gKCkgPT4geyBzaG93QnVmZmVyKGNvbW1hbmQpOyB9O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlZFNlY29uZHMpIHtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXSA9PSBwbGFuZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFbaV1bXCJQbGFuZXROYW1lXCJdID09IHBsYW5ldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCJAXCIpWzFdO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiIEJhc2VcIilbMF07XHJcbiAgICAgICAgdmFyIGh5cGhlbnMgPSB0ZXh0LnNwbGl0KFwiIC0gXCIpO1xyXG4gICAgICAgIHRleHQgPSBoeXBoZW5zW2h5cGhlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGVuZGluZyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChlbmRpbmdbMV0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRpbmdbMV0gKyBlbmRpbmdbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIiwgYW1vdW50ID0gXCJub25lXCIsIHRleHQgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbdGlja2VyXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSBNYXRlcmlhbE5hbWVzW3RpY2tlcl1bMF07XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IE1hdGVyaWFsTmFtZXNbdGlja2VyXVsxXTtcclxuICAgIGNvbnN0IHRvdGFsUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcIlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmc9PVwiKTtcclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJFN09MVUNoWUNleE1VZ09vbEtZak9RPT1cIik7XHJcbiAgICBtYXRlcmlhbC50aXRsZSA9IG5hbWU7XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxMC41NnB4XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxNS44NHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUubWFyZ2luID0gXCIycHggYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgbWF0ZXJpYWwuc3R5bGUuYmFja2dyb3VuZCA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVswXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmNvbG9yID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzFdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YkRpdi5jbGFzc0xpc3QuYWRkKFwibmxRaXJwU2tkTEgwYTYrQzRsaGR1QT09XCIpO1xyXG4gICAgY29uc3QgbWF0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbWF0VGV4dC5jbGFzc0xpc3QuYWRkKFwicmpwWUwxaTljWm1mNDdmTTlxV3laUT09XCIpO1xyXG4gICAgbWF0VGV4dC50ZXh0Q29udGVudCA9IHRpY2tlcjtcclxuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChtYXRUZXh0KTtcclxuICAgIG1hdGVyaWFsLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbiAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgaWYgKGFtb3VudCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJHMzdmVUpQd01vSjZmS0hER2VnKy13PT1cIik7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcImJIamxEUEI4NFV6MHlVbnZIYS1ZNUE9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcIl82T0s2c1hOaklJaHEzTkREOUVMVkd3PT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJnbDczdm5wNWpvK1ZhZXBEUm9jdW5BPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LnRleHRDb250ZW50ID0gYW1vdW50O1xyXG4gICAgICAgIG51bWJlckRpdi5hcHBlbmRDaGlsZChudW1iZXJTdWJEaXYpO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUGljdHVyZTtcclxuICAgIH1cclxuICAgIHZhciBzdXBlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VwZXJFbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZCh0b3RhbFBpY3R1cmUpO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUud2lkdGggPSBcIjY0cHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5tYXJnaW4gPSBcIjNweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcImF1dG9cIjtcclxuICAgIGlmICh0ZXh0ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiMnB4XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XHJcbiAgICBjb25zdCBsaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtEaXYuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpbmtEaXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xyXG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlVmFsdWUoaW5wdXQsIGNtZCk7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcXVlc3RTdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQsIChlbGVtKSA9PiBhZGRTdWJtaXRDb21tYW5kKGVsZW0sIGNvbW1hbmQpKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XHJcbiAgICBpZiAoYnV0dG9uID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBOdWxsXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbGljaygpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShpbnB1dCwgdmFsdWUpIHtcclxuICAgIHZhciBwcm9wRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93W1wiSFRNTElucHV0RWxlbWVudFwiXS5wcm90b3R5cGUsIFwidmFsdWVcIik7XHJcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XHJcbiAgICBpZiAobmF0aXZlSW5wdXRWYWx1ZVNldHRlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5wdXQsIHZhbHVlKTtcclxuICAgIHZhciBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRFdmVudC5pbml0RXZlbnQoJ2lucHV0JywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgaW5wdXQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcclxufVxyXG5mdW5jdGlvbiBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChzZWxlY3RvciwgY2FsbGJhY2ssIG9ubHlPbmNlID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgZ2V0RWxlbWVudHNGcm9tTm9kZXMgPSAobm9kZXMpID0+IChBcnJheS5mcm9tKG5vZGVzKSkuZmxhdE1hcChub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IDMgPyBudWxsIDogQXJyYXkuZnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcclxuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljQ2xlYW51cChjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24gPSAyKSB7XHJcbiAgICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24gfHwgMCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHBvd2VyKSAvIHBvd2VyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWZmZXIoYnVmZmVyQ29kZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKC4sICcke2J1ZmZlckNvZGV9JyldLy4uLy4uYCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoYnVmZmVyQ29kZSkge1xyXG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5ldmFsdWF0ZShgLy9kaXZbQGNsYXNzPScke1NlbGVjdG9yLkJ1ZmZlckhlYWRlcn0nXVtzdGFydHMtd2l0aCguLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XHJcbiAgICB2YXIgYnVmZmVycyA9IFtdO1xyXG4gICAgdmFyIG5vZGU7XHJcbiAgICB3aGlsZSAobm9kZSA9IG5vZGVzLml0ZXJhdGVOZXh0KCkpIHtcclxuICAgICAgICBidWZmZXJzLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnVmZmVycztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVhQYXRoKHhwYXRoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZSh4cGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFLCBudWxsKTtcclxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZSh0YWJsZSwgY29sdW1uLCBzb3J0VHlwZSkge1xyXG4gICAgdmFyIHNvcnRlciA9IFtdO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuWzFdID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHJvd3NbaV0uY2hpbGRyZW5bY29sdW1uXTtcclxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzb3J0ZXIucHVzaChbaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50LCByb3dzW2ldXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydFR5cGUgPT0gXCJhbHBoXCIpIHtcclxuICAgICAgICBzb3J0ZXIuc29ydCh0YWJsZVNvcnRBbHBoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHNvcnRlcik7XHJcbiAgICBzb3J0ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0YWJsZS5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sIGl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGFibGVTb3J0QWxwaChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nU3hNb25haWNQcnJTNEpZVHZlKy1SQT09J11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nWlNjRzlBamNUUmdKK01RT1hMdUNXQT09J10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJKS3RUNHJySUMwR2tQRUFuWmxZY1NnPT1cIixcclxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nXzFRQWhwRFVoZCs3SFdKeHBIdG9XSlE9PSddXCIsXHJcbiAgICBQcm9kUXVldWVIZWFkZXI6IFwibGdFMSsrNzMrNm9ZeFZTYU90aWstZz09XCIsXHJcbiAgICBCdWZmZXJIZWFkZXI6ICdlMlBLUktaVVc2Szl4TEtOQVA1NmNnPT0gWXR1NmZvNmpMYms0M1lxTzB5V2tRQT09JyxcclxuICAgIFNpZGViYXI6IFwiZGl2I1RPVVJfVEFSR0VUX1NJREVCQVJfUklHSFRcIixcclxuICAgIExNUG9zdEZvcm06IFwiYXJ0aWNsZVtjbGFzc349J3p3KzB6UUJadmFsYTd5R3ArQWQzRHc9PSddID4gZGl2ID4gZGl2ID4gZm9ybVwiLFxyXG4gICAgV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2Lk4zMkdMOENKQk93My1yTngwUEJaa1FcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdi5fNEtzaTA5VlhoZnZrR2d0UGJoQ0V5Z1xcXFw9XFxcXD0uUlV1dzExYjYzMWVYclFZcC1JZDJ3Z1xcXFw9XFxcXD1cIixcclxuICAgIFhJVFRpbGU6IFwiI3VuZGVmaW5lZCA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIFhJVFRpbGVGbG9hdDogXCIjVE9VUl9UQVJHRVRfRU1QVFlfVElMRSA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIEJ1ZmZlclRpdGxlOiBcIl80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnPT0gUlV1dzExYjYzMWVYclFZcC1JZDJ3Zz09XCIsXHJcbiAgICBOb3RpZmljYXRpb246IFwiZGl2W2NsYXNzfj0nXzZpVE1KWit4bS1QYkcrbldvUHFoN2c9PSddXCIsXHJcbiAgICBQcm9kUXVldWU6IFwiZGl2W2NsYXNzfj0nbzFZY1lyRGt4dDlJdk40QXBDRWpJdz09J11cIixcclxuICAgIFByb2RXaW5kb3c6IFwiZGl2W2NsYXNzfj0nSXcxek10Y3JCN05GQ3hBRzR4VHo4Zz09J11cIixcclxuICAgIFByb2RQYW5lbDogXCJkaXZbY2xhc3N+PSdnZWNJNXVHQmx1dmpQNUdDUmszZEhBPT0nXVwiLFxyXG4gICAgTmV3QkZSQnV0dG9uOiBcIlRPVVJfVEFSR0VUX0JVVFRPTl9CVUZGRVJfTkVXXCIsXHJcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXHJcbiAgICBCdWZmZXJUZXh0RmllbGQ6IFwiLlVvT29oOUVHeDdZaWhlemtTR2VWMlFcXFxcPVxcXFw9XCIsXHJcbiAgICBCdWZmZXJMaXN0OiBcIiNjb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpXCIsXHJcbiAgICBTY3JlZW5Db250cm9sczogXCJUT1VSX1RBUkdFVF9TQ1JFRU5fQ09OVFJPTFNcIixcclxuICAgIFRyYW5zZmVyQXJlYTogXCJkaXZbY2xhc3N+PSdCNGNjQ0hoRWg3VzB4ZC1ZWWczcVRnPT0nXVwiLFxyXG4gICAgVHJhbnNmZXJGaWVsZDogXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiLFxyXG4gICAgTGVmdFNpZGViYXI6IFwiVE9VUl9UQVJHRVRfU0lERUJBUl9MRUZUXzAyXCIsXHJcbiAgICBCdWZmZXJBcmVhOiBcImRpdltjbGFzc349J1phcGhWVitmeWFJaUxDSnlCQ3NaQ0E9PSddXCIsXHJcbiAgICBDWE9TVGFibGU6IFwiZGl2W2NsYXNzfj0nZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQT09J11cIlxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TZWxlY3Rvci50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQ3VycmVuY3lTeW1ib2xzID0ge1xyXG4gICAgXCJDSVNcIjogXCLigqFcIixcclxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXHJcbiAgICBcIk5DQ1wiOiBcIuKCplwiLFxyXG4gICAgXCJJQ0FcIjogXCLHglwiLFxyXG4gICAgXCJFQ0RcIjogXCLigqxcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IFJhdGluZ0NvbG9ycyA9IHtcclxuICAgIFwiUFwiOiBcIiMxYjZiOWNcIixcclxuICAgIFwiVVwiOiBcIiM4YjIxMWVcIixcclxuICAgIFwiRlwiOiBcIiNlMjZjMzdcIixcclxuICAgIFwiRVwiOiBcIiNlNzc4MmJcIixcclxuICAgIFwiRFwiOiBcIiNlODdkMjhcIixcclxuICAgIFwiQ1wiOiBcIiNlZDg5MWNcIixcclxuICAgIFwiQlwiOiBcIiNmMTk1MTBcIixcclxuICAgIFwiQVwiOiBcIiNmNmEyMDRcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgUGxhbmV0Q29tbWFuZHMgPSBbXCJBRE1cIiwgXCJCU0NcIiwgXCJDT0dDXCIsIFwiQ09HQ1BFWFwiLCBcIkNPR0NVXCIsIFwiRkxUUFwiLCBcIkxSXCIsIFwiTE1QXCIsIFwiTE1cIiwgXCJQTElcIiwgXCJQT1BJXCIsIFwiUE9QUlwiLCBcIlBQU1wiLCBcIlNIWVwiLCBcIldBUlwiXTtcclxuZXhwb3J0IGNvbnN0IFBsYW5ldE5hbWVzID0gW1xyXG4gICAgW1wiR0FMTFVTXCIsIFwiQU0tNzgzYlwiXSxcclxuICAgIFtcIkVNRU5USU9SXCIsIFwiQU0tNzgzY1wiXSxcclxuICAgIFtcIk5PVkEgSE9OU0hVXCIsIFwiQlMtNzg4Y1wiXSxcclxuICAgIFtcIlBZUkdPU1wiLCBcIkNILTc3MWFcIl0sXHJcbiAgICBbXCJUQUxPU0lBXCIsIFwiREMtODIzYlwiXSxcclxuICAgIFtcIk1BTklGT0xEXCIsIFwiRUwtMTc5YlwiXSxcclxuICAgIFtcIk5PVkEgVU5BTEFTS0FcIiwgXCJFWi00NzZiXCJdLFxyXG4gICAgW1wiQk9VQ0hFUlwiLCBcIkZLLTc5NGJcIl0sXHJcbiAgICBbXCJDSFVcIiwgXCJHWS0xMTBjXCJdLFxyXG4gICAgW1wiUE9TRUlET05cIiwgXCJITS0wNDliXCJdLFxyXG4gICAgW1wiQVBPVEhFQ0FSWVwiLCBcIklBLTYwM2JcIl0sXHJcbiAgICBbXCJFTEVDVFJPTklDQVwiLCBcIklZLTAyOGNcIl0sXHJcbiAgICBbXCJORU1FU0lTXCIsIFwiSlMtMjk5YVwiXSxcclxuICAgIFtcIkdJQlNPTlwiLCBcIkpTLTk1MmNcIl0sXHJcbiAgICBbXCJBVVNUUkFMSUFcIiwgXCJLSS00NDZhXCJdLFxyXG4gICAgW1wiSEVSTUVTXCIsIFwiS0ktNDQ4YlwiXSxcclxuICAgIFtcIlJPQ0tcIiwgXCJLUS05NjZiXCJdLFxyXG4gICAgW1wiTUlMTElXQVlTXCIsIFwiS1ctMDIwY1wiXSxcclxuICAgIFtcIkdFSURJIFBSSU1FXCIsIFwiS1ctMzU4YlwiXSxcclxuICAgIFtcIkVUSEVSV0lORFwiLCBcIktXLTY4OGNcIl0sXHJcbiAgICBbXCJLSU5aQVwiLCBcIkxHLTQxOGJcIl0sXHJcbiAgICBbXCJQTEFORVQgTUMgUExBTkVURkFDRVwiLCBcIkxHLTkxM2VcIl0sXHJcbiAgICBbXCJHUklGRk9OU1RPTkVcIiwgXCJMUy0zMDBjXCJdLFxyXG4gICAgW1wiSlVSQVwiLCBcIk9GLTI1OWRcIl0sXHJcbiAgICBbXCJCRVJUSElFUlwiLCBcIk9GLTM3NWJcIl0sXHJcbiAgICBbXCJEQU5BS0lMXCIsIFwiT1QtNDQyYlwiXSxcclxuICAgIFtcIklJUk9OXCIsIFwiT1QtNTgwYVwiXSxcclxuICAgIFtcIk1PTlRFTVwiLCBcIk9ULTU4MGJcIl0sXHJcbiAgICBbXCJWQUxMSVNcIiwgXCJPVC01ODBjXCJdLFxyXG4gICAgW1wiUEFMTEFEQVwiLCBcIk9ULTU4MGRcIl0sXHJcbiAgICBbXCJQUklTTVwiLCBcIk9ULTg4OWFcIl0sXHJcbiAgICBbXCJTQUxBRElOXCIsIFwiUEctODk5YlwiXSxcclxuICAgIFtcIkNJUkNFXCIsIFwiUVEtMDAxYlwiXSxcclxuICAgIFtcIkNFTEVCRElMXCIsIFwiUVEtNjQ1YlwiXSxcclxuICAgIFtcIk1BTEFIQVRcIiwgXCJSQy0wNDBiXCJdLFxyXG4gICAgW1wiSVJPTkZPUkdFXCIsIFwiUkMtMDQwY1wiXSxcclxuICAgIFtcIklDRSBTVEFUSU9OIEFMUEhBXCIsIFwiU0UtMTEwY1wiXSxcclxuICAgIFtcIlNIRU9MXCIsIFwiVEQtMjAzYlwiXSxcclxuICAgIFtcIlJIQVpFU1wiLCBcIlRELTIyOGJcIl0sXHJcbiAgICBbXCJLQVRPQVwiLCBcIlVWLTM1MWFcIl0sXHJcbiAgICBbXCJZQU5OSUNLXCIsIFwiVVYtMzUxYlwiXSxcclxuICAgIFtcIlVNQlJBXCIsIFwiVVYtMzUxY1wiXSxcclxuICAgIFtcIlBST1hJT05cIiwgXCJVVi03OTZiXCJdLFxyXG4gICAgW1wiUFJPTUlUT1JcIiwgXCJWSC0zMzFhXCJdLFxyXG4gICAgW1wiSEVMSU9OIFBSSU1FXCIsIFwiVkgtMzMxZFwiXSxcclxuICAgIFtcIkFWQUxPTlwiLCBcIlZILTMzMWdcIl0sXHJcbiAgICBbXCJIWURST05cIiwgXCJWSC0zMzFpXCJdLFxyXG4gICAgW1wiTUlNQVJcIiwgXCJXQy03MDJiXCJdLFxyXG4gICAgW1wiTElCRVJUQVNcIiwgXCJYSC01OTRhXCJdLFxyXG4gICAgW1wiS0lSVU5BXCIsIFwiWEgtNTk0YlwiXSxcclxuICAgIFtcIkNPUlRFWlwiLCBcIlhILTU5NGNcIl0sXHJcbiAgICBbXCJLVUJcIiwgXCJZSS0wNTlmXCJdLFxyXG4gICAgW1wiSEFSUElOQVwiLCBcIllJLTIwOWhcIl0sXHJcbiAgICBbXCJBUkNBRElBXCIsIFwiWUktNjgzY1wiXSxcclxuICAgIFtcIlZFUkRBTlRcIiwgXCJZSS03MTViXCJdLFxyXG4gICAgW1wiTklLRVwiLCBcIlpWLTE5NGFcIl0sXHJcbiAgICBbXCJIRVBIQUVTVFVTXCIsIFwiWlYtMzA3Y1wiXSxcclxuICAgIFtcIlBIT0JPU1wiLCBcIlpWLTMwN2RcIl0sXHJcbiAgICBbXCJERUlNT1NcIiwgXCJaVi03NTljXCJdLFxyXG4gICAgW1wiSEFSTU9OSUFcIiwgXCJaVi04OTZiXCJdLFxyXG4gICAgW1wiUFJPTVwiLCBcIlZILTMzMWFcIl0sXHJcbiAgICBbXCJHUklGRlwiLCBcIkxTLTMwMGNcIl1cclxuXTtcclxuZXhwb3J0IGNvbnN0IE1hdGVyaWFsTmFtZXMgPSB7XHJcbiAgICBcIkFBUlwiOiBbXCJBbnRlbm5hIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJBQkhcIjogW1wiQWR2YW5jZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQUNTXCI6IFtcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQURFXCI6IFtcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQURSXCI6IFtcIkF1dG8tRG9jXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIkFEU1wiOiBbXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJBRUZcIjogW1wiQWVyb3N0YXQgRm91bmRhdGlvblwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiQUVOXCI6IFtcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFGUFwiOiBbXCJBZHZhbmNlZCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFGUlwiOiBbXCJBZHZhbmNlZCBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUdTXCI6IFtcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFIUFwiOiBbXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQUlSXCI6IFtcIkFpciBTY3J1YmJlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiQUxcIjogW1wiQWx1bWluaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJBTEVcIjogW1wiU3RlbGxhciBQYWxlIEFsZVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJBTEdcIjogW1wiUHJvdGVpbi1SaWNoIEFsZ2FlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJBTE9cIjogW1wiQWx1bWluaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkFNTVwiOiBbXCJBbW1vbmlhXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkFOWlwiOiBbXCJBZHZhbmNlZCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFQVFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQVJcIjogW1wiQXJnb25cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiQVJQXCI6IFtcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJBU0VcIjogW1wiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBU1RcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQVRBXCI6IFtcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFUUFwiOiBbXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBVVwiOiBbXCJHb2xkXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJBVU9cIjogW1wiR29sZCBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJBV0ZcIjogW1wiQWN0aXZlIFdhdGVyIEZpbHRlclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQVdIXCI6IFtcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCQUNcIjogW1wiSGVscGZ1bCBCYWN0ZXJpYVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQkFJXCI6IFtcIkJhc2ljIEFJIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIkJCSFwiOiBbXCJCYXNpYyBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCQ09cIjogW1wiQnVkZ2V0IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQkRFXCI6IFtcIkJhc2ljIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQkVcIjogW1wiQmVyeWxsaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkJFQVwiOiBbXCJQcm90ZWluLVJpY2ggQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkJFUlwiOiBbXCJCZXJ5bCBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCRlBcIjogW1wiQmFzaWMgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJCRlJcIjogW1wiQmFzaWMgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkJHQ1wiOiBbXCJTaGllbGRlZCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkJHT1wiOiBbXCJCbHVlIEdvbGRcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJHU1wiOiBbXCJCYXNpYyBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJCSFBcIjogW1wiQmFzaWMgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkJJRFwiOiBbXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCTFwiOiBbXCJCcmVhdGhhYmxlIExpcXVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQkxFXCI6IFtcIkRlc2F0dXJhdGlvbiBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQk1GXCI6IFtcIkJhc2ljIE1haW5mcmFtZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQk5EXCI6IFtcIkJhbmRhZ2VzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIkJPUlwiOiBbXCJCb3JvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCT1NcIjogW1wiQm9yb3NpbGljYXRlXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCUFRcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJSMVwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzFcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJSMlwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzJcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJSTVwiOiBbXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJCUk9cIjogW1wiQnJvbnplXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCUlBcIjogW1wiQmFzaWMgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJSU1wiOiBbXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlNDXCI6IFtcIkJvZHkgU2Nhbm5lclwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQlNFXCI6IFtcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQlRBXCI6IFtcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJUU1wiOiBbXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJCV0hcIjogW1wiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJXU1wiOiBbXCJCYXNpYyBXb3Jrc3RhdGlvblwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQ1wiOiBbXCJDYXJib25cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0FcIjogW1wiQ2FsY2l1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDQUZcIjogW1wiQ2FmZmVpbmF0ZWQgQmVhbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkNBUFwiOiBbXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQ0JMXCI6IFtcIkxhcmdlIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNCTVwiOiBbXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0JTXCI6IFtcIlNtYWxsIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNDXCI6IFtcIkNsaW1hdGUgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0NEXCI6IFtcIkNyb3dkIENvbnRyb2wgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkNEXCI6IFtcIkNhcGFjaXRpdmUgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkNGXCI6IFtcIkNlcmFtaWMgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNIQVwiOiBbXCJDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkNMXCI6IFtcIkNobG9yaW5lXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNMSVwiOiBbXCJDYWxpY2hlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQ01LXCI6IFtcIlwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkNPRlwiOiBbXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJDT01cIjogW1wiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNPVFwiOiBbXCJDb3R0b24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNRTFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRTVwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUVNcIjogW1wiQ3JldyBRdWFydGVycyAoU21hbGwpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUVRcIjogW1wiQ3JldyBRdWFydGVycyAoVGlueSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNSVVwiOiBbXCJDcnlvZ2VuaWMgVW5pdFwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ1NUXCI6IFtcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJDVEZcIjogW1wiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ1VcIjogW1wiQ29wcGVyXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJDVU9cIjogW1wiQ29wcGVyIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkRBXCI6IFtcIkRhdGEgQW5hbHl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRENIXCI6IFtcIkRyb25lIENoYXNzaXNcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkRDTFwiOiBbXCJEdXJhYmxlIENhc2luZyBMXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkRDTVwiOiBbXCJEdXJhYmxlIENhc2luZyBNXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkRDU1wiOiBbXCJEdXJhYmxlIENhc2luZyBTXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIkREXCI6IFtcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkREVFwiOiBbXCJERFQgUGxhbnQgQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkRFQ1wiOiBbXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJESVNcIjogW1wiSW5mb3JtYXRpb24gRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkRPVVwiOiBbXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkRSRlwiOiBbXCJEcm9uZSBGcmFtZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiRFZcIjogW1wiRGF0YSBWaXN1YWxpemVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkRXXCI6IFtcIkRyaW5raW5nIFdhdGVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRURDXCI6IFtcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkVFU1wiOiBbXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRU5HXCI6IFtcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkVQT1wiOiBbXCJFcG94eSBSZXNpblwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkVTXCI6IFtcIkVpbnN0ZWluaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkVUQ1wiOiBbXCJFbnJpY2hlZCBUZWNobmV0aXVtXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJFWE9cIjogW1wiRXhvc2tlbGV0b24gV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRlwiOiBbXCJGbHVvcmluZVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJGQUxcIjogW1wiRmVycm9taW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkZBTlwiOiBbXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJGQ1wiOiBbXCJGbG93IENvbnRyb2wgRGV2aWNlXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGRVwiOiBbXCJJcm9uXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJGRU9cIjogW1wiSXJvbiBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJGRVRcIjogW1wiRmVycm8tVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkZGXCI6IFtcIkZUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXHJcbiAgICBcIkZGQ1wiOiBbXCJGVEwgRmllbGQgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiRklNXCI6IFtcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiRklSXCI6IFtcIkZpc3Npb24gUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRkxPXCI6IFtcIkZsb2F0aW5nIFRhbmtcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZMUFwiOiBbXCJGbHVpZCBQaXBpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZMWFwiOiBbXCJGbHV4XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJGT0RcIjogW1wiQWxsLVB1cnBvc2UgRm9kZGVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJGU0VcIjogW1wiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRlVOXCI6IFtcIkVudGVydGFpbm1lbnQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiR0FMXCI6IFtcIkdhbGVyaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiR0NcIjogW1wiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiR0NIXCI6IFtcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR0VOXCI6IFtcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdJTlwiOiBbXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJHTFwiOiBbXCJHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkdOWlwiOiBbXCJHbGFzcyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdSQVwiOiBbXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJHUk5cIjogW1wiSGlnaC1DYXJiIEdyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiR1ZcIjogW1wiR2FzIFZlbnRcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkhcIjogW1wiSHlkcm9nZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSDJPXCI6IFtcIldhdGVyXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiSEFCXCI6IFtcIkhhYml0YXQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiSEFMXCI6IFtcIkhhbGl0ZSBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJIQ0NcIjogW1wiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkhDUFwiOiBbXCJIeWRyb2NhcmJvbiBQbGFudHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhEXCI6IFtcIkhvbG9ncmFwaGljIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhFXCI6IFtcIkhlbGl1bVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIRTNcIjogW1wiSGVsaXVtLTMgSXNvdG9wZVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIRVJcIjogW1wiU3BpY3kgSGVyYnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhFWFwiOiBbXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJISFBcIjogW1wiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkhNU1wiOiBbXCJIYXpNYXQgV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiSE5aXCI6IFtcIkh5cGVydGhydXN0IE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSE9HXCI6IFtcIkhvbG9ncmFwaGljIEdsYXNzZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhPUFwiOiBbXCJGbG93ZXJ5IEhvcHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkhQQ1wiOiBbXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIUFJcIjogW1wiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSFNFXCI6IFtcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiSFNTXCI6IFtcIlNtYXJ0IFNwYWNlIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJIVEVcIjogW1wiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSFlSXCI6IFtcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIklcIjogW1wiSW9kaW5lXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIklEQ1wiOiBbXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJJTU1cIjogW1wiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJJTkRcIjogW1wiSW5kaWdvIENvbG9yYW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJJTlNcIjogW1wiSW5zdUZvYW1cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJKVUlcIjogW1wiU2VkYXRpdmUgU3Vic3RhbmNlXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJLT01cIjogW1wiS29tYnVjaGFcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiS1ZcIjogW1wiS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJMQkhcIjogW1wiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTENcIjogW1wiQUktQXNzaXN0ZWQgTGFiIENvYXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJMQ0JcIjogW1wiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTENSXCI6IFtcIkxpcXVpZCBDcnlzdGFsc1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTERcIjogW1wiTG9jYWwgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJMREVcIjogW1wiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMRElcIjogW1wiTGFzZXIgRGlvZGVzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkxFU1wiOiBbXCJMaXF1aWQgRWluc3RlaW5pdW1cIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJMRkVcIjogW1wiTGFyZ2UgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkxGTFwiOiBbXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTEZQXCI6IFtcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTEhQXCI6IFtcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJMSVwiOiBbXCJMaXRoaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJMSU9cIjogW1wiTGl0aGl1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJMSVNcIjogW1wiTGlmZSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiTElUXCI6IFtcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJMT0dcIjogW1wiTG9naXN0aWNzIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiTFNFXCI6IFtcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTFNMXCI6IFtcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMU1RcIjogW1wiTGltZXN0b25lXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkxUQVwiOiBbXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMVVwiOiBbXCJMYWJvcmF0b3J5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIk1BR1wiOiBbXCJNYWduZXRpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTUFJXCI6IFtcIkhpZ2gtQ2FyYiBNYWl6ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTUJcIjogW1wiTW90aGVyYm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJNQ0JcIjogW1wiTWVkaXVtIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1DR1wiOiBbXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJNRUFcIjogW1wiUXVhbGl0eSBNZWF0IE1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJNRURcIjogW1wiQmFzaWMgTWVkaWNhbCBLaXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJNRkVcIjogW1wiTWVkaXVtIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJNRktcIjogW1wiTWVkaXVtIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJNRkxcIjogW1wiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNR1wiOiBbXCJNYWduZXNpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiTUdDXCI6IFtcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTUdTXCI6IFtcIk1hZ25lc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJNSExcIjogW1wiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTUhQXCI6IFtcIk1pY3JvIEhlYWRwaG9uZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIk1MSVwiOiBbXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIk1QQ1wiOiBbXCJNaWNyby1Qcm9jZXNzb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJNU0xcIjogW1wiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNVENcIjogW1wiTWVnYVR1YmUgQ29hdGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk1UUFwiOiBbXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNVVNcIjogW1wiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTVdGXCI6IFtcIk1lZGl1bSBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJOXCI6IFtcIk5pdHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk5BXCI6IFtcIlNvZGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJOQUJcIjogW1wiU29kaXVtIEJvcm9oeWRyaWRlXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOQ1NcIjogW1wiTmFuby1DYXJib24gU2hlZXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJORVwiOiBbXCJOZW9uXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk5GXCI6IFtcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTkZJXCI6IFtcIk5hbm8gRmliZXJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJOR1wiOiBbXCJOYW5vLUNvYXRlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5MXCI6IFtcIk55bG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJOTlwiOiBbXCJOZXVyYWwgTmV0d29ya1wiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJOT1pcIjogW1wiQmFzaWMgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJOUlwiOiBbXCJOYW5vLUVuaGFuY2VkIFJlc2luXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOU1wiOiBbXCJOdXRyaWVudCBTb2x1dGlvblwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTlNUXCI6IFtcIk5ldXJvU3RpbXVsYW50c1wiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJOVVRcIjogW1wiVHJpZ2x5Y2VyaWRlIE51dHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk5WMVwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJOVjJcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiT1wiOiBbXCJPeHlnZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiT0ZGXCI6IFtcIk9mZmljZSBTdXBwbGllc1wiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIk9MRlwiOiBbXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiT1NcIjogW1wiT3BlcmF0aW5nIFN5c3RlbVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJPVkVcIjogW1wiQmFzaWMgT3ZlcmFsbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQQ0JcIjogW1wiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUERBXCI6IFtcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUEVcIjogW1wiUG9seS1FdGh5bGVuZVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQRkVcIjogW1wiUHJlbWl1bSBGZXJ0aWxpemVyXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJQR1wiOiBbXCJQb2x5bWVyIEdyYW51bGF0ZVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQSUJcIjogW1wiUGluZWJlcnJpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlBLXCI6IFtcIlBhaW5raWxsZXJzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlBPV1wiOiBbXCJQb3dlciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlBQQVwiOiBbXCJQcm90ZWluIFBhc3RlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJQU0hcIjogW1wiUHJlc3N1cmUgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJQU0xcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIExcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFNNXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBTU1wiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQVFwiOiBbXCJQb3dlciBUb29sc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBXT1wiOiBbXCJQYWRkZWQgV29yayBPdmVyYWxsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlFDUlwiOiBbXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJBRFwiOiBbXCJSYWRpbyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIlJBR1wiOiBbXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQU1cIjogW1wiTWVtb3J5IEJhbmtcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJSQVRcIjogW1wiQmFzaWMgUmF0aW9uc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlJCSFwiOiBbXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJDT1wiOiBbXCJSYXcgQ290dG9uIEZpYmVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJSQ1NcIjogW1wiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkNUXCI6IFtcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSREVcIjogW1wiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJETFwiOiBbXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlJEU1wiOiBbXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlJFQVwiOiBbXCJDaGVtaWNhbCBSZWFnZW50c1wiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiUkVEXCI6IFtcIlJlc2N1ZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiUkVQXCI6IFtcIlJlcGFpciBLaXRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiUkdcIjogW1wiUmVpbmZvcmNlZCBHbGFzc1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIlJHT1wiOiBbXCJSZWQgR29sZFwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiUkhQXCI6IFtcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlJPTVwiOiBbXCJOb24tVm9sYXRpbGUgTWVtb3J5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUlNFXCI6IFtcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSU0hcIjogW1wiUmFkaWF0aW9uIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiUlNJXCI6IFtcIlJhdyBTaWxrIFN0cmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlJUQVwiOiBbXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlNcIjogW1wiU3VsZnVyXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlNBXCI6IFtcIlNlYXJjaCBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJTQUxcIjogW1wiU29ydGluZyBBbGdvcml0aG1cIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJTQVJcIjogW1wiU2Vuc29yIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJTQ1wiOiBbXCJTdGVtIENlbGwgVHJlYXRtZW50XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlNDQlwiOiBbXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTQ05cIjogW1wiTXVsdGktUHVycG9zZSBTY2FubmVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiU0NSXCI6IFtcIlN1bGZ1ciBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJTRFJcIjogW1wiU3VyZ2ljYWwgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNFQVwiOiBbXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIlNFTlwiOiBbXCJTZW5zb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJTRVFcIjogW1wiU3VyZ2ljYWwgRXF1aXBtZW50XCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlNGXCI6IFtcIlNUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXHJcbiAgICBcIlNGRVwiOiBbXCJTbWFsbCBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiU0ZLXCI6IFtcIlNtYWxsIEZhc3RlbmVyIEtpdFwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJTRkxcIjogW1wiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNJXCI6IFtcIlNpbGljb25cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlNJTFwiOiBbXCJTaWxrZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIlNJT1wiOiBbXCJTaWxpY29uIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIlNOTVwiOiBbXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiU09JXCI6IFtcIkFydGlmaWNpYWwgU29pbFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiU09MXCI6IFtcIlNvbGFyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiU1BcIjogW1wiU29sYXIgUGFuZWxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiU1JEXCI6IFtcIlNoaXAtUmVwYWlyIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTUlBcIjogW1wiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIlNTQ1wiOiBbXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiU1NMXCI6IFtcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTVExcIjogW1wiU3RlZWxcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlNUUlwiOiBbXCJNZWRpY2FsIFN0cmV0Y2hlclwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJTVFNcIjogW1wiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTVVwiOiBbXCJTdXJnZXJ5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlNVRFwiOiBbXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNVTlwiOiBbXCJTYWZldHkgVW5pZm9ybVwiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIlNXRlwiOiBbXCJTbWFsbCBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJUQVwiOiBbXCJUYW50YWx1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJUQUNcIjogW1wiVGFyZ2V0aW5nIENvbXB1dGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJUQUlcIjogW1wiVGFudGFsaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVENcIjogW1wiVGVjaG5ldGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJUQ0JcIjogW1wiVGlueSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJUQ0xcIjogW1wiVENMIEFjaWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlRDT1wiOiBbXCJUZWNobmV0aXVtIE94aWRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRDU1wiOiBbXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRDVVwiOiBbXCJUcmF1bWEgQ2FyZSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJUSEZcIjogW1wiVGhlcm1vRmx1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlRIUFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJUSVwiOiBbXCJUaXRhbml1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiVElPXCI6IFtcIlRpdGFuaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIlRLXCI6IFtcIlRlY2hub0tldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiVFBVXCI6IFtcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJUUkFcIjogW1wiQXVkaW8gVHJhbnNtaXR0ZXJcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJUUk5cIjogW1wiQWR2YW5jZWQgVHJhbnNpc3RvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJUUlVcIjogW1wiVHJ1c3NcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRTXCI6IFtcIlRlY3Rvc2lsaXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVFNIXCI6IFtcIlRoZXJtYWwgU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUVUJcIjogW1wiVGVzdCBUdWJlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJVVFNcIjogW1wiVW5pdmVyc2FsIFRvb2xzZXRcIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJWQ0JcIjogW1wiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiVkVHXCI6IFtcIlRyaWdseWNlcmlkZSBGcnVpdHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlZHXCI6IFtcIlZpdGFHZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiVklUXCI6IFtcIlZpdGEgRXNzZW5jZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiVlNDXCI6IFtcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiV1wiOiBbXCJUdW5nc3RlblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiV0FJXCI6IFtcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJXQUxcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiV0NCXCI6IFtcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJXSU5cIjogW1wiU21hcnQgWmluZmFuZGVsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIldNXCI6IFtcIldpbmRvdyBNYW5hZ2VyXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiV09SXCI6IFtcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJXUlwiOiBbXCJXYXRlciBSZWNsYWltZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIldTXCI6IFtcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiWklSXCI6IFtcIlppcmNvbiBDcnlzdGFsc1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJaUlwiOiBbXCJaaXJjb25pdW1cIiwgXCJlbGVtZW50c1wiXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IE1hdGVyaWFscyA9IHtcclxuICAgIFwiQW50ZW5uYSBBcnJheVwiOiBbXCJBQVJcIiwgMC43OCwgMC41XSxcclxuICAgIFwiQWR2YW5jZWQgQnVsa2hlYWRcIjogW1wiQUJIXCIsIDAuNiwgMC45XSxcclxuICAgIFwiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCI6IFtcIkFDU1wiLCAwLjMsIDAuMl0sXHJcbiAgICBcIkFkdmFuY2VkIERlY2sgRWxlbWVudHNcIjogW1wiQURFXCIsIDAuNCwgMS41XSxcclxuICAgIFwiQXV0by1Eb2NcIjogW1wiQURSXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiOiBbXCJBRFNcIiwgMC43LCAyXSxcclxuICAgIFwiQWVyb3N0YXQgRm91bmRhdGlvblwiOiBbXCJBRUZcIiwgMiwgNV0sXHJcbiAgICBcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIjogW1wiQUVOXCIsIDE0LCA3XSxcclxuICAgIFwiQWR2YW5jZWQgRnVlbCBQdW1wXCI6IFtcIkFGUFwiLCAxLCAwLjI1XSxcclxuICAgIFwiQWR2YW5jZWQgRnVlbCBSb2RcIjogW1wiQUZSXCIsIDAuNCwgMC4xXSxcclxuICAgIFwiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCI6IFtcIkFHU1wiLCAzMCwgNV0sXHJcbiAgICBcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIjogW1wiQUhQXCIsIDIwLCAxMF0sXHJcbiAgICBcIkFpciBTY3J1YmJlclwiOiBbXCJBSVJcIiwgMS43LCAzXSxcclxuICAgIFwiQWx1bWluaXVtXCI6IFtcIkFMXCIsIDIuNywgMV0sXHJcbiAgICBcIlN0ZWxsYXIgUGFsZSBBbGVcIjogW1wiQUxFXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIEFsZ2FlXCI6IFtcIkFMR1wiLCAwLjcsIDFdLFxyXG4gICAgXCJBbHVtaW5pdW0gT3JlXCI6IFtcIkFMT1wiLCAxLjM1LCAxXSxcclxuICAgIFwiQW1tb25pYVwiOiBbXCJBTU1cIiwgMC44NiwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIE5venpsZVwiOiBbXCJBTlpcIiwgNiwgM10sXHJcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkFQVFwiLCAwLjAzLCAwLjNdLFxyXG4gICAgXCJBcmdvblwiOiBbXCJBUlwiLCAxLjc4NCwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCI6IFtcIkFSUFwiLCAwLjA0LCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkFTRVwiLCAwLjUsIDAuNl0sXHJcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIjogW1wiQVNUXCIsIDQuOTgsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJBVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiQVRQXCIsIDIuOSwgMV0sXHJcbiAgICBcIkdvbGRcIjogW1wiQVVcIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJHb2xkIE9yZVwiOiBbXCJBVU9cIiwgMy44NiwgMV0sXHJcbiAgICBcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIjogW1wiQVdGXCIsIDAuOCwgMS4yXSxcclxuICAgIFwiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQVdIXCIsIDAuMTIsIDFdLFxyXG4gICAgXCJIZWxwZnVsIEJhY3RlcmlhXCI6IFtcIkJBQ1wiLCAwLjE1LCAwLjE1XSxcclxuICAgIFwiQmFzaWMgQUkgRnJhbWV3b3JrXCI6IFtcIkJBSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIEJ1bGtoZWFkXCI6IFtcIkJCSFwiLCAwLjUsIDAuOF0sXHJcbiAgICBcIkJ1ZGdldCBDb25uZWN0b3JzXCI6IFtcIkJDT1wiLCAwLjAwNSwgMC4wMDJdLFxyXG4gICAgXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCI6IFtcIkJERVwiLCAwLjEsIDEuNV0sXHJcbiAgICBcIkJlcnlsbGl1bVwiOiBbXCJCRVwiLCAxLjg0LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIEJlYW5zXCI6IFtcIkJFQVwiLCAwLjgsIDFdLFxyXG4gICAgXCJCZXJ5bCBDcnlzdGFsc1wiOiBbXCJCRVJcIiwgMS45MiwgMV0sXHJcbiAgICBcIkJhc2ljIEZ1ZWwgUHVtcFwiOiBbXCJCRlBcIiwgMC44LCAwLjJdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFJvZFwiOiBbXCJCRlJcIiwgMC4zLCAwLjFdLFxyXG4gICAgXCJTaGllbGRlZCBDb25uZWN0b3JzXCI6IFtcIkJHQ1wiLCAwLjAxLCAwLjAwMl0sXHJcbiAgICBcIkJsdWUgR29sZFwiOiBbXCJCR09cIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJCYXNpYyBIaWdoLUcgU2VhdHNcIjogW1wiQkdTXCIsIDIwLCAzXSxcclxuICAgIFwiQmFzaWMgSHVsbCBQbGF0ZVwiOiBbXCJCSFBcIiwgMTAsIDEwXSxcclxuICAgIFwiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiOiBbXCJCSURcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkJyZWF0aGFibGUgTGlxdWlkXCI6IFtcIkJMXCIsIDEuMTIsIDFdLFxyXG4gICAgXCJEZXNhdHVyYXRpb24gQWdlbnRcIjogW1wiQkxFXCIsIDAuNSwgMC41XSxcclxuICAgIFwiQmFzaWMgTWFpbmZyYW1lXCI6IFtcIkJNRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkJhbmRhZ2VzXCI6IFtcIkJORFwiLCAwLjAwMSwgMC4wMDVdLFxyXG4gICAgXCJCb3JvbiBDcnlzdGFsc1wiOiBbXCJCT1JcIiwgMS44LCAxXSxcclxuICAgIFwiQm9yb3NpbGljYXRlXCI6IFtcIkJPU1wiLCAxLjUsIDFdLFxyXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJCUFRcIiwgMC4wMiwgMC4zXSxcclxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsxXCI6IFtcIkJSMVwiLCAxODAsIDMwMF0sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMlwiOiBbXCJCUjJcIiwgMjgwLCA0MDBdLFxyXG4gICAgXCJCaW9yZWFjdGl2ZSBNaW5lcmFsc1wiOiBbXCJCUk1cIiwgMi41LCAxXSxcclxuICAgIFwiQnJvbnplXCI6IFtcIkJST1wiLCA4LjczLCAxXSxcclxuICAgIFwiQmFzaWMgQW50aS1yYWQgUGxhdGVcIjogW1wiQlJQXCIsIDAuMDMsIDAuMl0sXHJcbiAgICBcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCI6IFtcIkJSU1wiLCAxNTAsIDIwMF0sXHJcbiAgICBcIkJvZHkgU2Nhbm5lclwiOiBbXCJCU0NcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkJTRVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkJhc2ljIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkJUQVwiLCAwLjMsIDAuNF0sXHJcbiAgICBcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiOiBbXCJCVFNcIiwgMS4wNSwgMV0sXHJcbiAgICBcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkJXSFwiLCAwLjEsIDFdLFxyXG4gICAgXCJCYXNpYyBXb3Jrc3RhdGlvblwiOiBbXCJCV1NcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiQ2FyYm9uXCI6IFtcIkNcIiwgMi4yNSwgMV0sXHJcbiAgICBcIkNhbGNpdW1cIjogW1wiQ0FcIiwgMS41NCwgMV0sXHJcbiAgICBcIkNhZmZlaW5hdGVkIEJlYW5zXCI6IFtcIkNBRlwiLCAwLjg2LCAxXSxcclxuICAgIFwiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCI6IFtcIkNBUFwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQkxcIiwgNS40LCAyLjRdLFxyXG4gICAgXCJNZWRpdW0gQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JNXCIsIDMuNiwgMS42XSxcclxuICAgIFwiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JTXCIsIDEuOCwgMC44XSxcclxuICAgIFwiQ2xpbWF0ZSBDb250cm9sbGVyXCI6IFtcIkNDXCIsIDAuNSwgMV0sXHJcbiAgICBcIkNyb3dkIENvbnRyb2wgRHJvbmVcIjogW1wiQ0NEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIkNhcGFjaXRpdmUgRGlzcGxheVwiOiBbXCJDRFwiLCAwLjAwNCwgMC4wMDJdLFxyXG4gICAgXCJDZXJhbWljIEZhYnJpY1wiOiBbXCJDRlwiLCAyLjgyLCAxXSxcclxuICAgIFwiQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkNIQVwiLCAxLjIsIDAuN10sXHJcbiAgICBcIkNobG9yaW5lXCI6IFtcIkNMXCIsIDMuMiwgMV0sXHJcbiAgICBcIkNhbGljaGUgUm9ja1wiOiBbXCJDTElcIiwgMi40MiwgMV0sXHJcbiAgICBcIlwiOiBbXCJDTUtcIiwgNC41NiwgMzMuMl0sXHJcbiAgICBcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCI6IFtcIkNPRlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkNvbW11bmljYXRpb24gU3lzdGVtXCI6IFtcIkNPTVwiLCAwLjUsIDEuNV0sXHJcbiAgICBcIkNvdHRvbiBGYWJyaWNcIjogW1wiQ09UXCIsIDAuNzcsIDFdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIjogW1wiQ1FMXCIsIDc1LCAxNTBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCI6IFtcIkNRTVwiLCA1MCwgMTAwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoU21hbGwpXCI6IFtcIkNRU1wiLCAyNSwgNTBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiOiBbXCJDUVRcIiwgMTIuNSwgMjVdLFxyXG4gICAgXCJDcnlvZ2VuaWMgVW5pdFwiOiBbXCJDUlVcIiwgMi4yLCAyXSxcclxuICAgIFwiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIjogW1wiQ1NUXCIsIDEuMTQsIDFdLFxyXG4gICAgXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiOiBbXCJDVEZcIiwgNC4zMiwgMV0sXHJcbiAgICBcIkNvcHBlclwiOiBbXCJDVVwiLCA4LjkyLCAxXSxcclxuICAgIFwiQ29wcGVyIE9yZVwiOiBbXCJDVU9cIiwgNC4wMSwgMV0sXHJcbiAgICBcIkRhdGEgQW5hbHl6ZXJcIjogW1wiREFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJEcm9uZSBDaGFzc2lzXCI6IFtcIkRDSFwiLCAwLjIsIDAuMDNdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBMXCI6IFtcIkRDTFwiLCAwLjA4LCAwLjhdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBNXCI6IFtcIkRDTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJEdXJhYmxlIENhc2luZyBTXCI6IFtcIkRDU1wiLCAwLjAxLCAwLjFdLFxyXG4gICAgXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiOiBbXCJERFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkREVCBQbGFudCBBZ2VudFwiOiBbXCJERFRcIiwgMC4xMSwgMC4xXSxcclxuICAgIFwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiOiBbXCJERUNcIiwgMC41LCAyXSxcclxuICAgIFwiSW5mb3JtYXRpb24gRGlzcGxheVwiOiBbXCJESVNcIiwgMC4wMiwgMC4wMl0sXHJcbiAgICBcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJET1VcIiwgNSwgNF0sXHJcbiAgICBcIkRyb25lIEZyYW1lXCI6IFtcIkRSRlwiLCAwLjEsIDAuMDJdLFxyXG4gICAgXCJEYXRhIFZpc3VhbGl6ZXJcIjogW1wiRFZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJEcmlua2luZyBXYXRlclwiOiBbXCJEV1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCI6IFtcIkVEQ1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkVucmljaGVkIEVpbnN0ZWluaXVtXCI6IFtcIkVFU1wiLCA5LjIsIDFdLFxyXG4gICAgXCJTdGFuZGFyZCBTVEwgRW5naW5lXCI6IFtcIkVOR1wiLCA4LCA0XSxcclxuICAgIFwiRXBveHkgUmVzaW5cIjogW1wiRVBPXCIsIDAuMDQsIDAuMDJdLFxyXG4gICAgXCJFaW5zdGVpbml1bVwiOiBbXCJFU1wiLCAwLjg4LCAwLjFdLFxyXG4gICAgXCJFbnJpY2hlZCBUZWNobmV0aXVtXCI6IFtcIkVUQ1wiLCA0LjEsIDFdLFxyXG4gICAgXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIjogW1wiRVhPXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIkZsdW9yaW5lXCI6IFtcIkZcIiwgMS42OTYsIDFdLFxyXG4gICAgXCJGZXJyb21pbml1bVwiOiBbXCJGQUxcIiwgMy4yMiwgMV0sXHJcbiAgICBcIkFjdGl2ZSBDb29saW5nIERldmljZVwiOiBbXCJGQU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJGbG93IENvbnRyb2wgRGV2aWNlXCI6IFtcIkZDXCIsIDAuNSwgMC4yNV0sXHJcbiAgICBcIklyb25cIjogW1wiRkVcIiwgNy44NzQsIDFdLFxyXG4gICAgXCJJcm9uIE9yZVwiOiBbXCJGRU9cIiwgNS45LCAxXSxcclxuICAgIFwiRmVycm8tVGl0YW5pdW1cIjogW1wiRkVUXCIsIDYuODUsIDFdLFxyXG4gICAgXCJGVEwgRnVlbFwiOiBbXCJGRlwiLCAwLjA1LCAwLjAxXSxcclxuICAgIFwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIjogW1wiRkZDXCIsIDUwLCAxNl0sXHJcbiAgICBcIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCI6IFtcIkZJTVwiLCAwLjU1LCAwLjVdLFxyXG4gICAgXCJGaXNzaW9uIFJlYWN0b3JcIjogW1wiRklSXCIsIDcsIDQuOV0sXHJcbiAgICBcIkZsb2F0aW5nIFRhbmtcIjogW1wiRkxPXCIsIDEsIDJdLFxyXG4gICAgXCJGbHVpZCBQaXBpbmdcIjogW1wiRkxQXCIsIDAuMywgMl0sXHJcbiAgICBcIkZsdXhcIjogW1wiRkxYXCIsIDAuMjUsIDAuMV0sXHJcbiAgICBcIkFsbC1QdXJwb3NlIEZvZGRlclwiOiBbXCJGT0RcIiwgMS4yLCAxXSxcclxuICAgIFwiRnVlbC1zYXZpbmcgU1RMIEVuZ2luZVwiOiBbXCJGU0VcIiwgNiwgM10sXHJcbiAgICBcIkVudGVydGFpbm1lbnQgVW5pdFwiOiBbXCJGVU5cIiwgNSwgNF0sXHJcbiAgICBcIkdhbGVyaXRlIFJvY2tcIjogW1wiR0FMXCIsIDIuNTEsIDFdLFxyXG4gICAgXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCI6IFtcIkdDXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJHQ0hcIiwgMSwgMC42XSxcclxuICAgIFwiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiOiBbXCJHRU5cIiwgNSwgM10sXHJcbiAgICBcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCI6IFtcIkdJTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkdsYXNzXCI6IFtcIkdMXCIsIDAuMDE2LCAwLjAxXSxcclxuICAgIFwiR2xhc3MgTm96emxlXCI6IFtcIkdOWlwiLCAxLjUsIDFdLFxyXG4gICAgXCJXaW5lLVF1YWxpdHkgR3JhcGVzXCI6IFtcIkdSQVwiLCAxLjEsIDFdLFxyXG4gICAgXCJIaWdoLUNhcmIgR3JhaW5zXCI6IFtcIkdSTlwiLCAwLjksIDFdLFxyXG4gICAgXCJHYXMgVmVudFwiOiBbXCJHVlwiLCAwLjI1LCAwLjE1XSxcclxuICAgIFwiSHlkcm9nZW5cIjogW1wiSFwiLCAwLjA3LCAxXSxcclxuICAgIFwiV2F0ZXJcIjogW1wiSDJPXCIsIDAuMiwgMC4yXSxcclxuICAgIFwiSGFiaXRhdCBVbml0XCI6IFtcIkhBQlwiLCAxMCwgOF0sXHJcbiAgICBcIkhhbGl0ZSBDcnlzdGFsc1wiOiBbXCJIQUxcIiwgMi4xNywgMV0sXHJcbiAgICBcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiOiBbXCJIQ0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJIeWRyb2NhcmJvbiBQbGFudHNcIjogW1wiSENQXCIsIDAuOCwgMV0sXHJcbiAgICBcIkhvbG9ncmFwaGljIERpc3BsYXlcIjogW1wiSERcIiwgMC4wNSwgMl0sXHJcbiAgICBcIkhlbGl1bVwiOiBbXCJIRVwiLCAwLjE0NSwgMV0sXHJcbiAgICBcIkhlbGl1bS0zIElzb3RvcGVcIjogW1wiSEUzXCIsIDAuMTQ1LCAxXSxcclxuICAgIFwiU3BpY3kgSGVyYnNcIjogW1wiSEVSXCIsIDAuNCwgMV0sXHJcbiAgICBcIkhlbGlvdHJvcGUgRXh0cmFjdFwiOiBbXCJIRVhcIiwgMS4xLCAxXSxcclxuICAgIFwiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiOiBbXCJISFBcIiwgMTUsIDEwXSxcclxuICAgIFwiSGF6TWF0IFdvcmsgU3VpdFwiOiBbXCJITVNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IE5venpsZVwiOiBbXCJITlpcIiwgNiwgMTJdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCI6IFtcIkhPR1wiLCAwLjAxLCAwLjAxXSxcclxuICAgIFwiRmxvd2VyeSBIb3BzXCI6IFtcIkhPUFwiLCAwLjM1LCAxXSxcclxuICAgIFwiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiOiBbXCJIUENcIiwgMC4wMDMsIDAuMDAzXSxcclxuICAgIFwiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiOiBbXCJIUFJcIiwgMTgsIDE1XSxcclxuICAgIFwiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJIU0VcIiwgMy4xLCAwLjddLFxyXG4gICAgXCJTbWFydCBTcGFjZSBTdWl0XCI6IFtcIkhTU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiOiBbXCJIVEVcIiwgMjAsIDEwXSxcclxuICAgIFwiSHlwZXItcG93ZXIgUmVhY3RvclwiOiBbXCJIWVJcIiwgMzUsIDI1XSxcclxuICAgIFwiSW9kaW5lXCI6IFtcIklcIiwgNC45MywgMV0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiOiBbXCJJRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiOiBbXCJJTU1cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJJbmRpZ28gQ29sb3JhbnRcIjogW1wiSU5EXCIsIDAuMjEsIDAuMl0sXHJcbiAgICBcIkluc3VGb2FtXCI6IFtcIklOU1wiLCAwLjA2LCAwLjFdLFxyXG4gICAgXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIjogW1wiSlVJXCIsIDEuMiwgMV0sXHJcbiAgICBcIktvbWJ1Y2hhXCI6IFtcIktPTVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIktldmxhciBGYWJyaWNcIjogW1wiS1ZcIiwgMS42NSwgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCI6IFtcIkxCSFwiLCAwLjIsIDAuNl0sXHJcbiAgICBcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCI6IFtcIkxDXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCI6IFtcIkxDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIkxpcXVpZCBDcnlzdGFsc1wiOiBbXCJMQ1JcIiwgMC4xNSwgMC4xXSxcclxuICAgIFwiTG9jYWwgRGF0YWJhc2VcIjogW1wiTERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCI6IFtcIkxERVwiLCAwLjEsIDEuMl0sXHJcbiAgICBcIkxhc2VyIERpb2Rlc1wiOiBbXCJMRElcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGlxdWlkIEVpbnN0ZWluaXVtXCI6IFtcIkxFU1wiLCA4Ljg0LCAxXSxcclxuICAgIFwiTGFyZ2UgRlRMIEVtaXR0ZXJcIjogW1wiTEZFXCIsIDAuNCwgMS42XSxcclxuICAgIFwiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTEZMXCIsIDYwLCAxMF0sXHJcbiAgICBcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiOiBbXCJMRlBcIiwgMC41LCAwLjFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCI6IFtcIkxIUFwiLCA1LCAxMF0sXHJcbiAgICBcIkxpdGhpdW1cIjogW1wiTElcIiwgMC41NSwgMV0sXHJcbiAgICBcIkxpdGhpdW0gT3JlXCI6IFtcIkxJT1wiLCAyLjc1LCAxXSxcclxuICAgIFwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJMSVNcIiwgNS42LCA3XSxcclxuICAgIFwiTmVvbiBMaWdodGluZyBTeXN0ZW1cIjogW1wiTElUXCIsIDEsIDJdLFxyXG4gICAgXCJMb2dpc3RpY3MgU3lzdGVtXCI6IFtcIkxPR1wiLCAwLjUsIDEuNV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiTFNFXCIsIDAuMywgMS4yXSxcclxuICAgIFwiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTFNMXCIsIDEyNSwgMTAwXSxcclxuICAgIFwiTGltZXN0b25lXCI6IFtcIkxTVFwiLCAyLjczLCAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiTFRBXCIsIDAuMywgMC41XSxcclxuICAgIFwiTGFib3JhdG9yeSBVbml0XCI6IFtcIkxVXCIsIDgsIDZdLFxyXG4gICAgXCJNYWduZXRpdGVcIjogW1wiTUFHXCIsIDUuMTUsIDFdLFxyXG4gICAgXCJIaWdoLUNhcmIgTWFpemVcIjogW1wiTUFJXCIsIDEuMywgMV0sXHJcbiAgICBcIk1vdGhlcmJvYXJkXCI6IFtcIk1CXCIsIDAuMDc1LCAwLjA3NV0sXHJcbiAgICBcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCI6IFtcIk1DQlwiLCAxMDAsIDEwMF0sXHJcbiAgICBcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiOiBbXCJNQ0dcIiwgMC4yNCwgMC4xXSxcclxuICAgIFwiUXVhbGl0eSBNZWF0IE1lYWxcIjogW1wiTUVBXCIsIDAuNiwgMC41XSxcclxuICAgIFwiQmFzaWMgTWVkaWNhbCBLaXRcIjogW1wiTUVEXCIsIDAuMywgMC4xXSxcclxuICAgIFwiTWVkaXVtIEZUTCBFbWl0dGVyXCI6IFtcIk1GRVwiLCAwLjIsIDAuOF0sXHJcbiAgICBcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIjogW1wiTUZLXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNRkxcIiwgMjQsIDRdLFxyXG4gICAgXCJNYWduZXNpdW1cIjogW1wiTUdcIiwgMC4yNywgMC4xNl0sXHJcbiAgICBcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiOiBbXCJNR0NcIiwgMC42LCAwLjldLFxyXG4gICAgXCJNYWduZXNpdGVcIjogW1wiTUdTXCIsIDEuNzMsIDFdLFxyXG4gICAgXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCI6IFtcIk1ITFwiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNaWNybyBIZWFkcGhvbmVzXCI6IFtcIk1IUFwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiOiBbXCJNTElcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJNaWNyby1Qcm9jZXNzb3JcIjogW1wiTVBDXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNU0xcIiwgNTAsIDUwXSxcclxuICAgIFwiTWVnYVR1YmUgQ29hdGluZ1wiOiBbXCJNVENcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCI6IFtcIk1UUFwiLCAwLjcsIDFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCI6IFtcIk1VU1wiLCAwLjgsIDFdLFxyXG4gICAgXCJNZWRpdW0gV2FmZXJcIjogW1wiTVdGXCIsIDAuMDA4LCAwLjAwOF0sXHJcbiAgICBcIk5pdHJvZ2VuXCI6IFtcIk5cIiwgMC44MDcsIDFdLFxyXG4gICAgXCJTb2RpdW1cIjogW1wiTkFcIiwgMC45NywgMV0sXHJcbiAgICBcIlNvZGl1bSBCb3JvaHlkcmlkZVwiOiBbXCJOQUJcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTmFuby1DYXJib24gU2hlZXRpbmdcIjogW1wiTkNTXCIsIDAuMDI4LCAwLjAxXSxcclxuICAgIFwiTmVvblwiOiBbXCJORVwiLCAwLjksIDFdLFxyXG4gICAgXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiOiBbXCJORlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIk5hbm8gRmliZXJcIjogW1wiTkZJXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTmFuby1Db2F0ZWQgR2xhc3NcIjogW1wiTkdcIiwgMC4wMjIsIDAuMDFdLFxyXG4gICAgXCJOeWxvbiBGYWJyaWNcIjogW1wiTkxcIiwgMS4xMywgMV0sXHJcbiAgICBcIk5ldXJhbCBOZXR3b3JrXCI6IFtcIk5OXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgTm96emxlXCI6IFtcIk5PWlwiLCAzLCAxLjVdLFxyXG4gICAgXCJOYW5vLUVuaGFuY2VkIFJlc2luXCI6IFtcIk5SXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJOdXRyaWVudCBTb2x1dGlvblwiOiBbXCJOU1wiLCAwLjYsIDAuNV0sXHJcbiAgICBcIk5ldXJvU3RpbXVsYW50c1wiOiBbXCJOU1RcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlRyaWdseWNlcmlkZSBOdXRzXCI6IFtcIk5VVFwiLCAwLjksIDFdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIjogW1wiTlYxXCIsIDQuMiwgMl0sXHJcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiOiBbXCJOVjJcIiwgNi43LCAzXSxcclxuICAgIFwiT3h5Z2VuXCI6IFtcIk9cIiwgMS4xNDEsIDFdLFxyXG4gICAgXCJPZmZpY2UgU3VwcGxpZXNcIjogW1wiT0ZGXCIsIDAuMDIsIDAuMl0sXHJcbiAgICBcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCI6IFtcIk9MRlwiLCAwLjAxLCAwLjAwMV0sXHJcbiAgICBcIk9wZXJhdGluZyBTeXN0ZW1cIjogW1wiT1NcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBPdmVyYWxsc1wiOiBbXCJPVkVcIiwgMC4wMiwgMC4wMjVdLFxyXG4gICAgXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIjogW1wiUENCXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiOiBbXCJQREFcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiUG9seS1FdGh5bGVuZVwiOiBbXCJQRVwiLCAwLjAxLCAwLjAxXSxcclxuICAgIFwiUHJlbWl1bSBGZXJ0aWxpemVyXCI6IFtcIlBGRVwiLCAwLjksIDFdLFxyXG4gICAgXCJQb2x5bWVyIEdyYW51bGF0ZVwiOiBbXCJQR1wiLCAwLjAwMiwgMC4wMDFdLFxyXG4gICAgXCJQaW5lYmVycmllc1wiOiBbXCJQSUJcIiwgMC4zLCAxXSxcclxuICAgIFwiUGFpbmtpbGxlcnNcIjogW1wiUEtcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUG93ZXIgQ2VsbFwiOiBbXCJQT1dcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiUHJvdGVpbiBQYXN0ZVwiOiBbXCJQUEFcIiwgMiwgMV0sXHJcbiAgICBcIlByZXNzdXJlIFNoaWVsZGluZ1wiOiBbXCJQU0hcIiwgNC4yLCAwLjhdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiOiBbXCJQU0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIE1cIjogW1wiUFNNXCIsIDAuMDQsIDAuNF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCI6IFtcIlBTU1wiLCAwLjAxLCAwLjFdLFxyXG4gICAgXCJQb3dlciBUb29sc1wiOiBbXCJQVFwiLCAwLjI1LCAwLjJdLFxyXG4gICAgXCJQYWRkZWQgV29yayBPdmVyYWxsXCI6IFtcIlBXT1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCI6IFtcIlFDUlwiLCAxNCwgMTBdLFxyXG4gICAgXCJSYWRpbyBEZXZpY2VcIjogW1wiUkFEXCIsIDAuMDAzLCAwLjAwNV0sXHJcbiAgICBcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIjogW1wiUkFHXCIsIDUsIDMuNF0sXHJcbiAgICBcIk1lbW9yeSBCYW5rXCI6IFtcIlJBTVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJCYXNpYyBSYXRpb25zXCI6IFtcIlJBVFwiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCI6IFtcIlJCSFwiLCAyLjQsIDAuOV0sXHJcbiAgICBcIlJhdyBDb3R0b24gRmliZXJcIjogW1wiUkNPXCIsIDAuOTUsIDFdLFxyXG4gICAgXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCI6IFtcIlJDU1wiLCAwLjY3LCAwLjVdLFxyXG4gICAgXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiOiBbXCJSQ1RcIiwgNywgNF0sXHJcbiAgICBcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiOiBbXCJSREVcIiwgMS40LCAxLjVdLFxyXG4gICAgXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRMXCIsIDE1MCwgMzBdLFxyXG4gICAgXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRTXCIsIDUwLCAxMF0sXHJcbiAgICBcIkNoZW1pY2FsIFJlYWdlbnRzXCI6IFtcIlJFQVwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUmVzY3VlIERyb25lXCI6IFtcIlJFRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJSZXBhaXIgS2l0XCI6IFtcIlJFUFwiLCAwLjAwNiwgMC4wMDJdLFxyXG4gICAgXCJSZWluZm9yY2VkIEdsYXNzXCI6IFtcIlJHXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiUmVkIEdvbGRcIjogW1wiUkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCI6IFtcIlJIUFwiLCAxMiwgMTBdLFxyXG4gICAgXCJOb24tVm9sYXRpbGUgTWVtb3J5XCI6IFtcIlJPTVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiUlNFXCIsIDEuOSwgMC43XSxcclxuICAgIFwiUmFkaWF0aW9uIFNoaWVsZGluZ1wiOiBbXCJSU0hcIiwgMy43LCAwLjhdLFxyXG4gICAgXCJSYXcgU2lsayBTdHJhaW5zXCI6IFtcIlJTSVwiLCAxLjEsIDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIlJUQVwiLCAxLjUsIDAuNV0sXHJcbiAgICBcIlN1bGZ1clwiOiBbXCJTXCIsIDAuNTIsIDAuMjVdLFxyXG4gICAgXCJTZWFyY2ggQWxnb3JpdGhtXCI6IFtcIlNBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU29ydGluZyBBbGdvcml0aG1cIjogW1wiU0FMXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU2Vuc29yIEFycmF5XCI6IFtcIlNBUlwiLCAxLjcsIDJdLFxyXG4gICAgXCJTdGVtIENlbGwgVHJlYXRtZW50XCI6IFtcIlNDXCIsIDAuMDQsIDAuMDFdLFxyXG4gICAgXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlNDQlwiLCA1MCwgNTBdLFxyXG4gICAgXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIjogW1wiU0NOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1bGZ1ciBDcnlzdGFsc1wiOiBbXCJTQ1JcIiwgMi4wNSwgMV0sXHJcbiAgICBcIlN1cmdpY2FsIERyb25lXCI6IFtcIlNEUlwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiOiBbXCJTRUFcIiwgMC4xNSwgMC4wN10sXHJcbiAgICBcIlNlbnNvclwiOiBbXCJTRU5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiU3VyZ2ljYWwgRXF1aXBtZW50XCI6IFtcIlNFUVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNUTCBGdWVsXCI6IFtcIlNGXCIsIDAuMDYsIDAuMDZdLFxyXG4gICAgXCJTbWFsbCBGVEwgRW1pdHRlclwiOiBbXCJTRkVcIiwgMC4xLCAwLjRdLFxyXG4gICAgXCJTbWFsbCBGYXN0ZW5lciBLaXRcIjogW1wiU0ZLXCIsIDAuMDQsIDAuMDJdLFxyXG4gICAgXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTRkxcIiwgOSwgMS41XSxcclxuICAgIFwiU2lsaWNvblwiOiBbXCJTSVwiLCAyLjMyOSwgMV0sXHJcbiAgICBcIlNpbGtlbiBGYWJyaWNcIjogW1wiU0lMXCIsIDEuMjEsIDFdLFxyXG4gICAgXCJTaWxpY29uIE9yZVwiOiBbXCJTSU9cIiwgMS43OSwgMV0sXHJcbiAgICBcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIjogW1wiU05NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQXJ0aWZpY2lhbCBTb2lsXCI6IFtcIlNPSVwiLCAwLjksIDFdLFxyXG4gICAgXCJTb2xhciBDZWxsXCI6IFtcIlNPTFwiLCAwLjAxNSwgMC4wMV0sXHJcbiAgICBcIlNvbGFyIFBhbmVsXCI6IFtcIlNQXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIlNoaXAtUmVwYWlyIERyb25lXCI6IFtcIlNSRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJTUlBcIiwgMC4xLCAwLjJdLFxyXG4gICAgXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCI6IFtcIlNTQ1wiLCAxLCAxXSxcclxuICAgIFwiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU1NMXCIsIDIwLCAyMF0sXHJcbiAgICBcIlN0ZWVsXCI6IFtcIlNUTFwiLCA3Ljg1LCAxXSxcclxuICAgIFwiTWVkaWNhbCBTdHJldGNoZXJcIjogW1wiU1RSXCIsIDAuMDEsIDFdLFxyXG4gICAgXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIjogW1wiU1RTXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiU3VyZ2VyeSBVbml0XCI6IFtcIlNVXCIsIDYsIDVdLFxyXG4gICAgXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIjogW1wiU1VEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlNhZmV0eSBVbmlmb3JtXCI6IFtcIlNVTlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiU21hbGwgV2FmZXJcIjogW1wiU1dGXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIlRhbnRhbHVtXCI6IFtcIlRBXCIsIDE2LjY1LCAxXSxcclxuICAgIFwiVGFyZ2V0aW5nIENvbXB1dGVyXCI6IFtcIlRBQ1wiLCAwLjE1LCAxXSxcclxuICAgIFwiVGFudGFsaXRlIFJvY2tcIjogW1wiVEFJXCIsIDcuOTQsIDFdLFxyXG4gICAgXCJUZWNobmV0aXVtXCI6IFtcIlRDXCIsIDExLjgsIDFdLFxyXG4gICAgXCJUaW55IENhcmdvIEJheSBLaXRcIjogW1wiVENCXCIsIDIwLCAyMF0sXHJcbiAgICBcIlRDTCBBY2lkXCI6IFtcIlRDTFwiLCAwLjA5LCAwLjFdLFxyXG4gICAgXCJUZWNobmV0aXVtIE94aWRlXCI6IFtcIlRDT1wiLCA5LjgsIDFdLFxyXG4gICAgXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIjogW1wiVENTXCIsIDMuNCwgMS4yXSxcclxuICAgIFwiVHJhdW1hIENhcmUgVW5pdFwiOiBbXCJUQ1VcIiwgNSwgNF0sXHJcbiAgICBcIlRoZXJtb0ZsdWlkXCI6IFtcIlRIRlwiLCAwLjYsIDAuMzVdLFxyXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiVEhQXCIsIDIuMiwgMV0sXHJcbiAgICBcIlRpdGFuaXVtXCI6IFtcIlRJXCIsIDQuNSwgMV0sXHJcbiAgICBcIlRpdGFuaXVtIE9yZVwiOiBbXCJUSU9cIiwgMS41OCwgMV0sXHJcbiAgICBcIlRlY2hub0tldmxhciBGYWJyaWNcIjogW1wiVEtcIiwgMS44OSwgMV0sXHJcbiAgICBcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIjogW1wiVFBVXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIkF1ZGlvIFRyYW5zbWl0dGVyXCI6IFtcIlRSQVwiLCAwLjAwNSwgMC4wMDJdLFxyXG4gICAgXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCI6IFtcIlRSTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJUcnVzc1wiOiBbXCJUUlVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJUZWN0b3NpbGlzaXRlXCI6IFtcIlRTXCIsIDIuNCwgMV0sXHJcbiAgICBcIlRoZXJtYWwgU2hpZWxkaW5nXCI6IFtcIlRTSFwiLCAyLjQsIDEuNV0sXHJcbiAgICBcIlRlc3QgVHViZXNcIjogW1wiVFVCXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlVuaXZlcnNhbCBUb29sc2V0XCI6IFtcIlVUU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCI6IFtcIlZFR1wiLCAxLjEsIDFdLFxyXG4gICAgXCJWaXRhR2VsXCI6IFtcIlZHXCIsIDAuMjEsIDAuMV0sXHJcbiAgICBcIlZpdGEgRXNzZW5jZVwiOiBbXCJWSVRcIiwgMC45LCAxXSxcclxuICAgIFwiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlZTQ1wiLCAzNSwgMzVdLFxyXG4gICAgXCJUdW5nc3RlblwiOiBbXCJXXCIsIDcuNTE5LCAxXSxcclxuICAgIFwiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiOiBbXCJXQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCI6IFtcIldBTFwiLCA2LjI1LCAxXSxcclxuICAgIFwiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIjogW1wiV0NCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiU21hcnQgWmluZmFuZGVsXCI6IFtcIldJTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIldpbmRvdyBNYW5hZ2VyXCI6IFtcIldNXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIjogW1wiV09SXCIsIDUsIDVdLFxyXG4gICAgXCJXYXRlciBSZWNsYWltZXJcIjogW1wiV1JcIiwgNi40LCA1XSxcclxuICAgIFwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIjogW1wiV1NcIiwgMC4wNSwgMC41XSxcclxuICAgIFwiWmlyY29uIENyeXN0YWxzXCI6IFtcIlpJUlwiLCA0Ljg1LCAxXSxcclxuICAgIFwiWmlyY29uaXVtXCI6IFtcIlpSXCIsIDYuNTMsIDFdLFxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9HYW1lUHJvcGVydGllcy50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU3R5bGUgPSB7XHJcbiAgICBCdXR0b246IFtcImZNVzYyY0VSbmx6eFpQRmhubFBPZVE9PVwiXSxcclxuICAgIEJ1dHRvblByaW1hcnk6IFtcImtnR3NETnZEb1dqNjF3NEk3VkFsZkE9PVwiXSxcclxuICAgIEJ1dHRvblN1Y2Nlc3M6IFtcIlFXODB4dmVRbTJHRVNrU09SUkgyNGc9PVwiXSxcclxuICAgIEJ1dHRvbkRhbmdlcjogW1wiWkZYV3k0SENuenRwWk5sQ1hrODN3UT09XCJdLFxyXG4gICAgU2lkZWJhclNlY3Rpb25IZWFkOiBbXCJfMllyT003LTJzZEswNDJWdkg2V2FKZz09XCIsIFwiZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09XCJdLFxyXG4gICAgU2lkZWJhclNlY3Rpb25Db250ZW50OiBbXCJDTjBOUE5vdmxZdGFJbTRicUhGYkx3PT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIl0sXHJcbiAgICBTaWRlYmFyTGluZTogW1wieTg0RVVJOGdDUC1TVjkxWDd2SWloUT09XCIsIFwiZlZkM2FZSmhGWS11dWFIK1FUQnloQT09XCJdLFxyXG4gICAgRm9udHNSZWd1bGFyOiBbXCJDQm9ySWJGQzZZdCtGUllFSFp5dWFBPT1cIl0sXHJcbiAgICBTaWRlYmFyVGV4dDogW1wieC1tTHhFd0MtT0RoOU1YRHg0RHhTUT09XCIsIFwiZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09XCIsIFwiTzdSWDR6WEw0Z3pITG9Pd1RWYnJYdz09XCJdLFxyXG4gICAgU2lkZWJhclNsaXZlcjogW1wiWlBzUllDT2o3cFg1OUdZRElpT3RLZz09XCIsIFwiLWRjWWZiQ1dQNzJWUzJPRmhvREctUT09XCJdLFxyXG4gICAgU2lkZWJhckJ1dHRvbjogW1wiR0hDUHlqczNieGhiK1daMkJHTFdIdz09XCJdLFxyXG4gICAgQ29udHJhY3RMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXHJcbiAgICBDb250cmFjdE5hbWU6IFtcInpoaXhwNDA4WUYwODJJekE1S1B2ZkE9PVwiXSxcclxuICAgIENvbnRyYWN0VmlldzogW1wia3E1QnJHS25UVVRxQ0RZTXBMUTkwZz09XCJdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBXaXRoU3R5bGVzID0gKC4uLnN0eWxlKSA9PiB7XHJcbiAgICByZXR1cm4gc3R5bGUucmVkdWNlKCgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2aW91c1ZhbHVlLmNvbmNhdChjdXJyZW50VmFsdWUpKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBUZXh0Q29sb3JzID0ge1xyXG4gICAgRmFpbHVyZTogXCIjZDk1MzRmXCIsXHJcbiAgICBTdWNjZXNzOiBcIiM1Y2I4NWNcIixcclxuICAgIFN0YW5kYXJkOiBcIiNiYmJiYmJcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xvcnMgPSB7XHJcbiAgICBcImVsZWN0cm9uaWMgZGV2aWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODYsIDIwLCAxNDcpLCByZ2IoMTExLCA0NSwgMTcyKSlcIiwgXCJyZ2IoMjEzLCAxNDcsIDI1NSlcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNSwgMzAsIDk4KSwgcmdiKDQwLCA1NSwgMTIzKSlcIiwgXCJyZ2IoMTQyLCAxNTcsIDIyNSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEsIDI2LCA3NiksIHJnYig3NiwgNTEsIDEwMSkpXCIsIFwicmdiKDE3OCwgMTUzLCAyMDMpXCJdLFxyXG4gICAgXCJtZWRpY2FsIGVxdWlwbWVudFwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODUsIDE3MCwgODUpLCByZ2IoMTEwLCAxOTUsIDExMCkpXCIsIFwicmdiKDIxMiwgMjU1LCAyMTIpXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDQxLCA3NywgMTA3KSwgcmdiKDY2LCAxMDIsIDEzMikpXCIsIFwicmdiKDE2OCwgMjA0LCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIGVuZ2luZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgNDEsIDApLCByZ2IoMTc4LCA2NiwgMjUpKVwiLCBcInJnYigyNTUsIDE2OCwgMTI3KVwiXSxcclxuICAgIFwic2hpcCBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA5OSwgMCksIHJnYigxNzgsIDEyNCwgMjUpKVwiLCBcInJnYigyNTUsIDIyNiwgMTI3KVwiXSxcclxuICAgIFwibWV0YWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1NCwgNTQsIDU0KSwgcmdiKDc5LCA3OSwgNzkpKVwiLCBcInJnYigxODEsIDE4MSwgMTgxKVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMjQsIDM5KSwgcmdiKDE2MSwgNDksIDY0KSlcIiwgXCJyZ2IoMjU1LCAxNTEsIDE2NilcIl0sXHJcbiAgICBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTIsIDE4LCAxOCksIHJnYigxMTcsIDQzLCA0MykpXCIsIFwicmdiKDIxOSwgMTQ1LCAxNDUpXCJdLFxyXG4gICAgXCJvcmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgODcsIDk3KSwgcmdiKDEwNywgMTEyLCAxMjIpKVwiLCBcInJnYigyMDksIDIxNCwgMjI0KVwiXSxcclxuICAgIFwiZ2FzZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDAsIDEwNSwgMTA3KSwgcmdiKDI1LCAxMzAsIDEzMikpXCIsIFwicmdiKDEyNywgMjMyLCAyMzQpXCJdLFxyXG4gICAgXCJzaGlwIHNoaWVsZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIyNCwgMTMxLCAwKSwgcmdiKDI0OSwgMTU2LCAyNSkpXCIsIFwicmdiKDIzMCAyMzAsMTI3KVwiXSxcclxuICAgIFwiYWxsb3lzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjMsIDc2LCAzMCksIHJnYigxNDgsIDEwMSwgNTUpKVwiLCBcInJnYigyNTAsIDIwMywgMTU3KVwiXSxcclxuICAgIFwiY2hlbWljYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigyMDgsIDcxLCAxMTYpKVwiLCBcInJnYigyNTUsIDE3MywgMjE4KVwiXSxcclxuICAgIFwic29mdHdhcmUgY29tcG9uZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAxMjEsIDQ3KSwgcmdiKDE2MSwgMTQ2LCA3MikpXCIsIFwicmdiKDI1NSwgMjQ4LCAxNzQpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHBpZWNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE5LCA4MiwgMTg5KSwgcmdiKDE0NCwgMTA3LCAyMTQpKVwiLCBcInJnYigyNDYsIDIwOSwgMjU1KVwiXSxcclxuICAgIFwiZWxlbWVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYxLCA0NiwgMzIpLCByZ2IoODYsIDcxLCA1NykpXCIsIFwicmdiKDE4OCwgMTczLCAxNTkpXCJdLFxyXG4gICAgXCJtaW5lcmFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCAxMTMsIDczKSwgcmdiKDE3OCwgMTM4LCA5OCkpXCIsIFwicmdiKDI1NSwgMjQwLCAyMDApXCJdLFxyXG4gICAgXCJ1bml0IHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI5LCAyNywgMjgpLCByZ2IoNTQsIDUyLCA1MykpXCIsIFwicmdiKDE1NiwgMTU0LCAxNTUpXCJdLFxyXG4gICAgXCJsaXF1aWRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTQsIDE2NCwgMjAyKSwgcmdiKDEzOSwgMTg5LCAyMjcpKVwiLCBcInJnYigyNDEsIDI1NSwgMjU1KVwiXSxcclxuICAgIFwiZW5lcmd5IHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIxLCA2MiwgMzkpLCByZ2IoNDYsIDg3LCA2NCkpXCIsIFwicmdiKDE0OCwgMTg5LCAxNjYpXCJdLFxyXG4gICAgXCJkcm9uZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0MCwgNTIsIDE4KSwgcmdiKDE2NSwgNzcsIDQzKSlcIiwgXCJyZ2IoMjU1LCAxNzksIDE0NSlcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkxLCA0NiwgMTgzKSwgcmdiKDExNiwgNzEsIDIwOCkpXCIsIFwicmdiKDIxOCwgMTczLCAyNTUpXCJdLFxyXG4gICAgXCJ0ZXh0aWxlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDkwLCAzMyksIHJnYigxMDcsIDExNSwgNTgpKVwiLCBcInJnYigyMDksIDIxNywgMTYwKVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjQsIDkxLCAyMTEpLCByZ2IoNDksIDExNiwgMjM2KSlcIiwgXCJyZ2IoMTUxLCAyMTgsIDI1NSlcIl0sXHJcbiAgICBcInNvZnR3YXJlIHRvb2xzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjksIDk4LCAxOSksIHJnYigxNTQsIDEyMywgNDQpKVwiLCBcInJnYigyNTUsIDI1NSwgMTQ2KVwiXSxcclxuICAgIFwicGxhc3RpY3NcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMSwgMzEsIDYwKSwgcmdiKDE0NiwgNTYsIDg1KSlcIiwgXCJyZ2IoMjQ4LCAxNTgsIDE4NylcIl0sXHJcbiAgICBcImNvbnN1bWFibGVzIChiYXNpYylcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0OSwgNDYsIDQ2KSwgcmdiKDE3NCwgNzEsIDcxKSlcIiwgXCJyZ2IoMjU1LCAxNzMsIDE3MylcIl0sXHJcbiAgICBcImZ1ZWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYig1NSwgMTQ4LCA1NSkpXCIsIFwicmdiKDE1NywgMjUwLCAxNTcpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNTMsIDUpLCByZ2IoODUsIDc4LCAzMCkpXCIsIFwicmdiKDE4NywgMTgwLCAxMzIpXCJdLFxyXG4gICAgXCJzaGlwIGtpdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1NCwgODQsIDApLCByZ2IoMTc4LCAxMDksIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMTEsIDEyNylcIl0sXHJcbiAgICBcInV0aWxpdHlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE2MSwgMTQ4LCAxMzYpLCByZ2IoMTg2LCAxNzMsIDE2MSkpXCIsIFwicmdiKDI1NSwgMjU1LCAyNTUpXCJdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgUE1NR1N0eWxlID0gYC50aXRsZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5mbGV4LXRhYmxlIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXg6IDE7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cdGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59XHJcbi5saXN0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNoYXQtbGluZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4ZW0sIDFmcikgbWlubWF4KDhlbSwgNGZyKSBtaW5tYXgoOGVtLCAxNWZyKTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG4udGltZS1kYXRlIHtcclxuXHRjb2xvcjogIzQ0NDQ0NDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNoYXQtbmFtZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTk5OTtcclxufVxyXG4uY2hhdC1tZXNzYWdlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogI2JiYmJiYjtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuLmZpbi10aXRsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRwYWRkaW5nOiA2cHggNHB4IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxNjIsIDIyMiwgMC4xNSk7XHJcbn1cclxuLmJ1cm4tZ3JlZW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDUwMzQgIWltcG9ydGFudDtcclxuXHRjb2xvcjogIzlmYmI5ZjtcclxufVxyXG4uYnVybi15ZWxsb3cge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM4MzZlMjQgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2Y2ZGY5NDtcclxufVxyXG4uYnVybi1yZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1YTMxMzAgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2M1OWM5YjtcclxufVxyXG4uaW52LWhlYWRlciB7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG5cdHBhZGRpbmc6IDJweCA4cHg7XHJcblx0Y29sb3I6ICMzZmEyZGU7XHJcbn1cclxuLmludi1ib2R5IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdG1hcmdpbi1ib3R0b206IDIzcHg7XHJcblx0cGFkZGluZzogNXB4IDhweDtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDlweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdG1hcmdpbjogMXB4IDJweDtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtiYWNrZ3JvdW5kOiAjZjdhNjAwO31cclxuLnhpdC10aWxlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy10b3A6IDRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcbi5yZWZyZXNoLWJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3YTYwMDtcclxuXHRjb2xvcjogI2VlZTtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRwYWRkaW5nOiAwcHggOHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiA0cHggOHB4O1xyXG59XHJcbi5yZWZyZXNoLWJ1dHRvbjpob3ZlciB7XHJcblx0Y29sb3I6ICMxZTFlMWU7XHJcbn1cclxuLm5vdGlmaWNhdGlvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogNjJweDtcclxuXHRtYXgtd2lkdGg6IDYycHg7XHJcbn1cclxuLmZpbi1ib3gge1xyXG5cdG1hcmdpbjogMXB4O1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0d2lkdGg6IGNhbGMoMzMlIC0gMnB4KTtcclxuXHRtYXgtd2lkdGg6IDE1MHB4O1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJiO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubGluayB7XHJcblx0Y29sb3I6ICMzZmEyZGU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5saW5rOmhvdmVyIHtcclxuXHRjb2xvcjogI2Y3YTYwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0XHJcbn1cclxuLmlucHV0LXRleHQ6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uaGlkZGVuLWVsZW1lbnR7XHJcblx0dmlzaWJpbGl0eTogZmFsc2UgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1gO1xyXG5leHBvcnQgY29uc3QgRW5oYW5jZWRDb2xvcnMgPSBgLyogY29uc3VtYWJsZXMgKGx1eHVyeSkgKi9cclxuZGl2W3RpdGxlPVwiU3RlbGxhciBQYWxlIEFsZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxFXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ09GXCJdLFxyXG5kaXZbdGl0bGU9XCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR0lOXCJdLFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfS09NXCJdLFxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05TVFwiXSxcclxuZGl2W3RpdGxlPVwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFdPXCJdLFxyXG5kaXZbdGl0bGU9XCJSZXBhaXIgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SRVBcIl0sXHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WR1wiXSxcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XSU5cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjgwMDAwLCAjN2IwMDEyKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2RiOTE5MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGFncmljdWx0dXJhbCBwcm9kdWN0cyAqL1xyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQWxnYWVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0FMR1wiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEJlYW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEJlYW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DQUZcIl0sXHJcbmRpdlt0aXRsZT1cIkFsbC1QdXJwb3NlIEZvZGRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRk9EXCJdLFxyXG5kaXZbdGl0bGU9XCJXaW5lLVF1YWxpdHkgR3JhcGVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUkFcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBHcmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSTlwiXSxcclxuZGl2W3RpdGxlPVwiSHlkcm9jYXJib24gUGxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IQ1BcIl0sXHJcbmRpdlt0aXRsZT1cIlNwaWN5IEhlcmJzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVJcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3dlcnkgSG9wc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSE9QXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgTWFpemVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01BSVwiXSxcclxuZGl2W3RpdGxlPVwiTWVhdCBUaXNzdWUgUGF0dGllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVRQXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVVNcIl0sXHJcbmRpdlt0aXRsZT1cIlRyaWdseWNlcmlkZSBOdXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OVVRcIl0sXHJcbmRpdlt0aXRsZT1cIlBpbmViZXJyaWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QSUJcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4gUGFzdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BQQVwiXSxcclxuZGl2W3RpdGxlPVwiUmF3IENvdHRvbiBGaWJlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkNPXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SU0lcIl0sXHJcbmRpdlt0aXRsZT1cIlRyaWdseWNlcmlkZSBGcnVpdHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZFR1wiXSxcclxuZGl2W3RpdGxlPVwiVml0YSBFc3NlbmNlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WSVRcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAzODAwLCAjMGE0NzA4KSAhaW1wb3J0YW50O1xyXG5jb2xvcjogIzhiYjM3YiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBsYXN0aWNzICovXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTFwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENNXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ1NcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHktRXRoeWxlbmVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BFXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEdcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU0xcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU01cIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgU2hlZXQgVHlwZSBTXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QU1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzkxZjYyLCAjOTIzODdiKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2Y4OWVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNvbnN1bWFibGVzIChiYXNpYykgKi9cclxuZGl2W3RpdGxlPVwiRHJpbmtpbmcgV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RXXCJdLFxyXG5kaXZbdGl0bGU9XCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0VYT1wiXSxcclxuZGl2W3RpdGxlPVwiRmxhdm91cmVkIEluc3RhLU1lYWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZJTVwiXSxcclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSE1TXCJdLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBTcGFjZSBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IU1NcIl0sXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9MQ1wiXSxcclxuZGl2W3RpdGxlPVwiUXVhbGl0eSBNZWF0IE1lYWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01FQVwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgTWVkaWNhbCBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01FRFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgT3ZlcmFsbHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX09WRVwiXSxcclxuZGl2W3RpdGxlPVwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BEQVwiXSxcclxuZGl2W3RpdGxlPVwiUG93ZXIgVG9vbHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BUXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBSYXRpb25zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQVRcIl0sXHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NOXCJdLFxyXG5kaXZbdGl0bGU9XCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfV1NcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYTYyYzJhLCAjYmEzNjNjKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2ZmOTg5ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZ1ZWxzICovXHJcbmRpdlt0aXRsZT1cIkZUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GRlwiXSxcclxuZGl2W3RpdGxlPVwiU1RMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NGXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU0OGQyMiwgIzZiYTIzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNjYmZhYTMgIWltcG9ydGFudDtcclxufVxyXG4vKiBsaXF1aWRzICovXHJcbmRpdlt0aXRsZT1cIkhlbGlvdHJvcGUgRXh0cmFjdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVYXCJdLFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgRWluc3RlaW5pdW1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xFU1wiXSxcclxuZGl2W3RpdGxlPVwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CVFNcIl0sXHJcbmRpdlt0aXRsZT1cIldhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IMk9cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjdhOGRhLCAjNjA5OGMzKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2YxZmZmZiAhaW1wb3J0YW50O1xyXG59YDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU3R5bGUudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFByaWNlcyhwcmljZXMsIHdlYmFwcElEKSB7XHJcbiAgICBpZiAod2ViYXBwSUQgPT0gdW5kZWZpbmVkIHx8IHdlYmFwcElEID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2ViIEFwcCBUaW1lb3V0XCIpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIFByaWNlcyBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcmljZURhdGEpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzW2tleV0gPSBwcmljZURhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWQgRGF0YSBmcm9tIFdlYiBBcHBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgd2ViYXBwSUQgKyBcIi9leGVjP21vZGU9JTIycHJpY2UlMjJcIiwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KSB7XHJcbiAgICBpZiAoYnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoYXBpa2V5ID09IHVuZGVmaW5lZCB8fCBhcGlrZXkgPT0gbnVsbCB8fCB1c2VybmFtZSA9PSB1bmRlZmluZWQgfHwgdXNlcm5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1cm5bdXNlcm5hbWVdID0gW107XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBidXJuW3VzZXJuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuW3VzZXJuYW1lXS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL3VzZXIvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcm91cEJ1cm4oYnVybiwgZ3JvdXBpZCwgYXBpa2V5KSB7XHJcbiAgICBpZiAoYnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoYXBpa2V5ID09IHVuZGVmaW5lZCB8fCBhcGlrZXkgPT0gbnVsbCB8fCBncm91cGlkID09IHVuZGVmaW5lZCB8fCBncm91cGlkID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIEdyb3VwIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi9ncm91cC9cIiArIGdyb3VwaWQsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgdXNlcm5hbWUgPT0gdW5kZWZpbmVkIHx8IHVzZXJuYW1lID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuU2V0dGluZ3MucHVzaChcImxvYWRpbmdcIik7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklPIEJ1cm4gU2V0dGluZ3MgVGltZW91dFwiKTtcclxuICAgICAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBCdXJuIFNldHRpbmdzIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVyblNldHRpbmdzWzBdID0gXCJsb2FkZWRcIjtcclxuICAgICAgICAgICAgICAgIHZhciBidXJuRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBidXJuRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5ncy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL3VzZXJzZXR0aW5ncy9idXJucmF0ZS9cIiArIHVzZXJuYW1lLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBGbGlnaHRFVEFzIH0gZnJvbSBcIi4vRmxpZ2h0RVRBc1wiO1xyXG5pbXBvcnQgeyBMb2NhbE1hcmtldEFkcyB9IGZyb20gJy4vTG9jYWxNYXJrZXRBZHMnO1xyXG5pbXBvcnQgeyBNb2R1bGVSdW5uZXIgfSBmcm9tIFwiLi9Nb2R1bGVSdW5uZXJcIjtcclxuaW1wb3J0IHsgT3JkZXJFVEFzIH0gZnJvbSBcIi4vT3JkZXJFVEFzXCI7XHJcbmltcG9ydCB7IENvbnN1bWFibGVUaW1lcnMgfSBmcm9tIFwiLi9Db25zdW1hYmxlVGltZXJzXCI7XHJcbmltcG9ydCB7IEZsZWV0RVRBcyB9IGZyb20gXCIuL0ZsZWV0RVRBc1wiO1xyXG5pbXBvcnQgeyBQb3N0TE0gfSBmcm9tIFwiLi9Qb3N0TE1cIjtcclxuaW1wb3J0IHsgU2hpcHBpbmdBZHMgfSBmcm9tIFwiLi9TaGlwcGluZ0Fkc1wiO1xyXG5pbXBvcnQgeyBRdWV1ZUxvYWQgfSBmcm9tIFwiLi9RdWV1ZUxvYWRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0UHJpY2VzLCBnZXRCdXJuLCBnZXRCdXJuU2V0dGluZ3MgfSBmcm9tIFwiLi9CYWNrZ3JvdW5kUnVubmVyXCI7XHJcbmltcG9ydCB7IFBNTUdTdHlsZSwgRW5oYW5jZWRDb2xvcnMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0aW9uU2Nyb2xsIH0gZnJvbSBcIi4vUHJvZHVjdGlvblNjcm9sbFwiO1xyXG5pbXBvcnQgeyBTY3JlZW5VbnBhY2sgfSBmcm9tIFwiLi9TY3JlZW5VbnBhY2tcIjtcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgQ29tbWFuZENvcnJlY3RlciB9IGZyb20gXCIuL0NvbW1hbmRDb3JyZWN0ZXJcIjtcclxudHJ5IHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJBSElCZWF1dGlmaWVyX0RhdGFcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcclxufVxyXG5jYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICBzdHlsZS5pZCA9IFwicG1tZy1zdHlsZVwiO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBQTU1HU3R5bGU7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcclxuICAgIGlmIChkb2MgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHsgXCJBSElCZWF1dGlmaWVyX0RhdGFcIjogW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCBbXSwgW10sIFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV1dIH07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XSA9IFszLCA2XTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bM10gPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBjb2xvcnMudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBjb2xvcnMuaWQgPSBcInBtbWctZW5oYW5jZWQtY29sb3JzXCI7XHJcbiAgICAgICAgY29sb3JzLnRleHRDb250ZW50ID0gRW5oYW5jZWRDb2xvcnM7XHJcbiAgICAgICAgaWYgKGRvYyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZChjb2xvcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBwcmljZXMgPSB7fTtcclxuICAgIGdldFByaWNlcyhwcmljZXMsIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsyXSk7XHJcbiAgICB2YXIgYnVybiA9IFtdO1xyXG4gICAgZ2V0QnVybihidXJuLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMF0sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsxXSk7XHJcbiAgICB2YXIgYnVyblNldHRpbmdzID0gW107XHJcbiAgICBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMF0sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsxXSk7XHJcbiAgICBjb25zdCBydW5uZXIgPSBuZXcgTW9kdWxlUnVubmVyKFtcclxuICAgICAgICBuZXcgTG9jYWxNYXJrZXRBZHMoKSxcclxuICAgICAgICBuZXcgT3JkZXJFVEFzKCksXHJcbiAgICAgICAgbmV3IEZsaWdodEVUQXMoKSxcclxuICAgICAgICBuZXcgU2hpcHBpbmdBZHMoKSxcclxuICAgICAgICBuZXcgUG9zdExNKHByaWNlcyksXHJcbiAgICAgICAgbmV3IFF1ZXVlTG9hZCgpLFxyXG4gICAgICAgIG5ldyBDb25zdW1hYmxlVGltZXJzKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVswXSwgYnVybiwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddKSxcclxuICAgICAgICBuZXcgRmxlZXRFVEFzKCksXHJcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbnMoKSxcclxuICAgICAgICBuZXcgUHJvZHVjdGlvblNjcm9sbCgpLFxyXG4gICAgICAgIG5ldyBTY3JlZW5VbnBhY2socmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzVdKSxcclxuICAgICAgICBuZXcgQ29tbWFuZENvcnJlY3RlcigpLFxyXG4gICAgICAgIG5ldyBTaWRlYmFyKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSlcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsaWdodEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFJhdGluZ0NvbG9ycyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbE1hcmtldEFkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbG0tYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKEJVWUlOR3xTRUxMSU5HfENPUlApXFxzKFxcZCspXFxzLipcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zvci8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQobWF0Y2hlc1szXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxDZW50cyA8PSAtMTAwIHx8IHRvdGFsQ2VudHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gUmF0aW5nQ29sb3JzW2VsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgfHwgXCJQXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSB0b0ZpeGVkKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0gZWEpYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZXMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcy5tYXAobSA9PiB0aGlzLm1vZHVsZVRvTUUobSkpO1xyXG4gICAgICAgIHRoaXMueGl0ID0gbmV3IFhJVEhhbmRsZXIocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsyXSwgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdICE9IHVuZGVmaW5lZCAmJiByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW9kdWxlVG9NRShtb2R1bGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb2R1bGUsXHJcbiAgICAgICAgICAgIG5hbWU6IG1vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgY2xlYW51cFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHJ1blRpbWU6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLnhpdC5ydW4oKTtcclxuICAgICAgICB0aGlzLm1vZHVsZXMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5ydW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY291bnQrKztcclxuICAgICAgICAgICAgICAgIGVudHJ5LmNsZWFudXBUaW1lICs9IGNsZWFudXBUaW1lO1xyXG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vZHVsZVJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFhJVFByZUZ1bmN0aW9ucywgWElUQnVmZmVyVGl0bGVzIH0gZnJvbSBcIi4vWElURnVuY3Rpb25zXCI7XHJcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBhcGlrZXksIHdlYmFwcElELCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5hcGlrZXkgPSBhcGlrZXk7XHJcbiAgICAgICAgdGhpcy53ZWJhcHBJRCA9IHdlYmFwcElEO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy5idXJuU2V0dGluZ3MgPSBidXJuU2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJYSVRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgdmFyIGJ1cm5TZXR0aW5ncyA9IHRoaXMuYnVyblNldHRpbmdzO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGlsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpO1xyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZUZsb2F0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsIHx8IHRpbGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbGUuY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIHRpbGUuY2hpbGRyZW5bMV0uaWQgPT0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyc1JhdyA9IEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKSlbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzUmF3ID09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzUmF3ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzUmF3LmNoYXJBdCg0KSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChrZXkuc2xpY2UoMikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnMgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRpbGUuY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIHRpbGUuY2hpbGRyZW5bMV0uaWQgPT0gXCJwbW1nLXJlbG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXSh0aWxlLmNoaWxkcmVuWzFdLCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgdGhpcy51c2VybmFtZSwgYnVybiwgYnVyblNldHRpbmdzLCB0aGlzLm1vZHVsZXMsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ4aXQtdGlsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9wRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRvcERpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodG9wRGl2KTtcclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIuKfs1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCdXR0b24pO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5mbGV4R3JvdyA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVGdW5jID0gWElUUHJlRnVuY3Rpb25zW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgIGlmIChwcmVGdW5jID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vIE1hdGNoaW5nIEZ1bmN0aW9uIVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gWElUQnVmZmVyVGl0bGVzW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlrZXkgPSB0aGlzLmFwaWtleTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYmFwcElEID0gdGhpcy53ZWJhcHBJRDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZXMgPSB0aGlzLm1vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgcmVzdWx0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmNoaWxkcmVuWzFdLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgcHJlRnVuYyhjb250ZW50RGl2LCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgdXNlcm5hbWUsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQsIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBjcmVhdGVMaW5rLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGdldEdyb3VwQnVybiB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcclxuaW1wb3J0IHsgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5leHBvcnQgY29uc3QgWElUUHJlRnVuY3Rpb25zID0ge1xyXG4gICAgXCJJTlZcIjogRklPSW52X3ByZSxcclxuICAgIFwiRElTQ09SRFwiOiBEaXNjb3JkX3ByZSxcclxuICAgIFwiU0hFRVRTXCI6IFNoZWV0c19wcmUsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogUHJvc3Blcml0eV9wcmUsXHJcbiAgICBcIlBSVU5cIjogUFJ1Tl9wcmUsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogU2hlZXRUYWJsZV9wcmUsXHJcbiAgICBcIkZJTlwiOiBGaW5fcHJlLFxyXG4gICAgXCJDSEFUXCI6IENoYXRfcHJlLFxyXG4gICAgXCJCVVJOXCI6IEVuaGFuY2VkQnVybl9wcmUsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFNldHRpbmdzX3ByZSxcclxuICAgIFwiQ09OVFJBQ1RTXCI6IENvbnRyYWN0c19wcmUsXHJcbiAgICBcIlJFUEFJUlNcIjogUmVwYWlyc19wcmUsXHJcbiAgICBcIkNBTENVTEFUT1JcIjogQ2FsY3VsYXRvcl9wcmUsXHJcbiAgICBcIkNBTENcIjogQ2FsY3VsYXRvcl9wcmVcclxufTtcclxuZXhwb3J0IGNvbnN0IFhJVEJ1ZmZlclRpdGxlcyA9IHtcclxuICAgIFwiSU5WXCI6IFwiRklPIElOVkVOVE9SWVwiLFxyXG4gICAgXCJESVNDT1JEXCI6IFwiRElTQ09SRCBTRVJWRVJcIixcclxuICAgIFwiU0hFRVRTXCI6IFwiR09PR0xFIFNIRUVUU1wiLFxyXG4gICAgXCJQUk9TUEVSSVRZXCI6IFwiUFJPU1BFUklUWVwiLFxyXG4gICAgXCJQUlVOXCI6IFwiUFJVTi1DRVBUSU9OXCIsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogXCJHT09HTEUgU0hFRVRTIFRBQkxFXCIsXHJcbiAgICBcIkZJTlwiOiBcIkZJTkFOQ0lBTCBPVkVSVklFV1wiLFxyXG4gICAgXCJDSEFUXCI6IFwiQ0hBVFwiLFxyXG4gICAgXCJCVVJOXCI6IFwiRU5IQU5DRUQgQlVSTlwiLFxyXG4gICAgXCJTRVRUSU5HU1wiOiBcIlBNTUcgU0VUVElOR1NcIixcclxuICAgIFwiQ09OVFJBQ1RTXCI6IFwiUEVORElORyBDT05UUkFDVFNcIixcclxuICAgIFwiUkVQQUlSU1wiOiBcIlJFUEFJUlNcIixcclxuICAgIFwiQ0FMQ1wiOiBcIkNBTENVTEFUT1JcIixcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBcIkNBTENVTEFUT1JcIlxyXG59O1xyXG5jb25zdCBEaXNjb3JkU2VydmVycyA9IHtcclxuICAgIFwiVUZPXCI6IFtcIjg1NTQ4ODMwOTgwMjE3MjQ2OVwiLCBcIjg1NTQ4OTcxMTYzNTQzMTQ3NVwiXSxcclxuICAgIFwiRklPQ1wiOiBbXCI4MDc5OTI2NDAyNDczMDAxMTZcIiwgXCI4MDg0NTE1MTIzNTExOTUxNjZcIl0sXHJcbiAgICBcIkFISVwiOiBbXCI3MDQ5MDc3MDc2MzQ5NDE5ODJcIiwgXCI3OTcxNTc4NzczMjQxODU2NTBcIl0sXHJcbiAgICBcIlBDVFwiOiBbXCI2Njc1NTE0MzM1MDMwMTQ5MjRcIiwgXCI2Njc1NTE0MzM1MDMwMTQ5MjdcIl1cclxufTtcclxuZnVuY3Rpb24gWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBjYWxsYmFja0Z1bmN0aW9uLCB1cmwsIHJlcXVlc3RUeXBlID0gXCJHRVRcIiwgaGVhZGVyLCBjb250ZW50KSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBEYXRhIENvdWxkIE5vdCBCZSBMb2FkZWQhIFRpbWVkIE91dCFcIjtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24odGlsZSwgcGFyYW1ldGVycywgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKHJlcXVlc3RUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgaWYgKGhlYWRlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbMF0sIGhlYWRlclsxXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB4aHIuc2VuZChjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW4oZWxlbSkge1xyXG4gICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB3aGlsZSAoZWxlbS5jaGlsZHJlblswXSkge1xyXG4gICAgICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElELCB1c2VybmFtZSwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgcmVzdWx0KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3Qgd2FybmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHdhcm5pbmdEaXYpO1xyXG4gICAgd2FybmluZ0Rpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xyXG4gICAgd2FybmluZ0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlNldHRpbmdzIGNoYW5nZXMgcmVxdWlyZSBhIHJlZnJlc2ggdG8gdGFrZSBlZmZlY3QuXCIpKTtcclxuICAgIGNvbnN0IG1vZHVsZVNldHRpbmdzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTW9kdWxlIFNldHRpbmdzXCIpKTtcclxuICAgIG1vZHVsZVNldHRpbmdzSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobW9kdWxlU2V0dGluZ3NIZWFkZXIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25Db250ZW50KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBtb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5TaWRlYmFyTGluZSwgU3R5bGUuRm9udHNSZWd1bGFyKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG1wLm5hbWUpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcmlnaHQuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICByaWdodC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IG1ha2VUb2dnbGVCdXR0b24oXCJPblwiLCBcIk9mZlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSAhbXAuZW5hYmxlZDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdW2ldID09IG1wLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1wLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0ucHVzaChtcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgICAgICB9LCBtcC5lbmFibGVkKTtcclxuICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gXCJPZmZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcclxuICAgICAgICBjb25zdCBjbGVhbnVwID0gbWFrZVB1c2hCdXR0b24oXCJ4XCIsICgpID0+IG1wLm1vZHVsZS5jbGVhbnVwKCkpO1xyXG4gICAgICAgIGNsZWFudXAuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjhweFwiO1xyXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNsZWFudXApO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbmhhbmNlZENvbG9ySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJFbmhhbmNlZCBDb2xvcnNcIikpO1xyXG4gICAgZW5oYW5jZWRDb2xvckhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGVuaGFuY2VkQ29sb3JIZWFkZXIpO1xyXG4gICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGNyZWF0ZVRleHRTcGFuKFwiRW5oYW5jZWQgQ29sb3JzXCIpO1xyXG4gICAgY29sb3JMYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgY29sb3JEaXYuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBjb25zdCBjb2xvckNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29sb3JDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgY29sb3JDaGVjay5jaGVja2VkID0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzNdO1xyXG4gICAgY29sb3JDaGVjay5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGNvbG9yQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bM10gPSBjb2xvckNoZWNrLmNoZWNrZWQ7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yQ2hlY2spO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb2xvckRpdik7XHJcbiAgICBjb25zdCBidXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGJ1cm5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBidXJuTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJCdXJuIFNldHRpbmdzXCIpKTtcclxuICAgIGJ1cm5MYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICBidXJuTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoYnVybkxhYmVsKTtcclxuICAgIGNvbnN0IHNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKHNldERpdik7XHJcbiAgICBzZXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY29uc3QgcmVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldERpdi5hcHBlbmRDaGlsZChyZWREaXYpO1xyXG4gICAgcmVkRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiUmVkIFRocmVzaG9sZDogXCIpKTtcclxuICAgIGNvbnN0IHJlZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcmVkSW4udHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICByZWRJbi52YWx1ZSA9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVswXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pO1xyXG4gICAgcmVkRGl2LmFwcGVuZENoaWxkKHJlZEluKTtcclxuICAgIHJlZEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgcmVkSW4uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHJlZEluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzBdID0gcGFyc2VGbG9hdChyZWRJbi52YWx1ZSk7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHllbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXREaXYuYXBwZW5kQ2hpbGQoeWVsRGl2KTtcclxuICAgIHllbERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlllbGxvdyBUaHJlc2hvbGQ6IFwiKSk7XHJcbiAgICBjb25zdCB5ZWxJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHllbEluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgeWVsSW4udmFsdWUgPSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMV0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcclxuICAgIHllbERpdi5hcHBlbmRDaGlsZCh5ZWxJbik7XHJcbiAgICB5ZWxJbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHllbEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB5ZWxJbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVsxXSA9IHBhcnNlRmxvYXQoeWVsSW4udmFsdWUpO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJ1cm5EaXYpO1xyXG4gICAgY29uc3Qgc2NyZWVuVW5wYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHNjcmVlblVucGFja0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNjcmVlbiBVbnBhY2sgRXhjbHVzaW9uc1wiKSk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzY3JlZW5VbnBhY2tIZWFkZXIpO1xyXG4gICAgY29uc3Qgbm90aWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChub3RpZkRpdik7XHJcbiAgICBub3RpZkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkxpc3Qgc2NyZWVuIG5hbWVzIHNlcGFyYXRlZCBieSBjb21tYXMsIG5vIHNwYWNlcy5cIikpO1xyXG4gICAgY29uc3QgZXhjbHVzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LnZhbHVlID0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzVdID09IHVuZGVmaW5lZCA/IFwiXCIgOiByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNV0uam9pbihcIixcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs1XSA9IGV4Y2x1c2lvbklucHV0LnZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChleGNsdXNpb25JbnB1dCk7XHJcbiAgICBjb25zdCBob3RrZXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaG90a2V5SGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTGVmdCBTaWRlYmFyIEJ1dHRvbnNcIikpO1xyXG4gICAgaG90a2V5SGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SGVhZGVyKTtcclxuICAgIGNvbnN0IGhvdGtleUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaG90a2V5SW5wdXREaXYpO1xyXG4gICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdLmZvckVhY2goaG90a2V5ID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG1ha2VQdXNoQnV0dG9uKFwiK1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKFtbXSwgW11dLCByZXN1bHQsIGhvdGtleUlucHV0RGl2KTtcclxuICAgICAgICBpZiAoZGl2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG90a2V5SW5wdXREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBTdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcclxuICAgIGFkZEJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgcmV0dXJuIFtwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElELCB1c2VybmFtZSwgZnVsbEJ1cm4sIGJ1cm5TZXR0aW5nc107XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRQYWlyKGhvdGtleSwgcmVzdWx0LCBmdWxsRGl2KSB7XHJcbiAgICBpZiAoaG90a2V5Lmxlbmd0aCAhPSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRpc3BsYXllZFZhbHVlKTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21tYW5kLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgY29tbWFuZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjb21tYW5kKTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IG1ha2VQdXNoQnV0dG9uKFwiWFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbW1hbmQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXllZFZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZGl2LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW0gPT4geyBkaXYucmVtb3ZlQ2hpbGQoZWxlbSk7IH0pO1xyXG4gICAgfSwgU3R5bGUuQnV0dG9uRGFuZ2VyKTtcclxuICAgIHJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUudmFsdWUgPSBob3RrZXlbMF07XHJcbiAgICBjb21tYW5kLnZhbHVlID0gaG90a2V5WzFdO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZnVsbERpdi5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdID0gaG90a2V5cztcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29tbWFuZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob3RrZXlzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBob3RrZXlzLnB1c2goW29wdGlvbi5jaGlsZHJlblswXS52YWx1ZSwgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNl0gPSBob3RrZXlzO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VQdXNoQnV0dG9uKHRleHQsIGYsIHN0eWxlID0gU3R5bGUuQnV0dG9uUHJpbWFyeSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uc3R5bGUpO1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmO1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b24ob24sIG9mZiwgZiwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgY29uc3Qgc2V0TG9vayA9IChzKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IHMgPyBvbiA6IG9mZjtcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFN0cmluZyhzdGF0ZSkpO1xyXG4gICAgc2V0TG9vayhzdGF0ZSk7XHJcbiAgICB0b2dnbGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICEodG9nZ2xlLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIikgPT09IFwidHJ1ZVwiKTtcclxuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcobmV3U3RhdGUpKTtcclxuICAgICAgICBzZXRMb29rKG5ld1N0YXRlKTtcclxuICAgICAgICBmKCk7XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICByZXR1cm4gdG9nZ2xlO1xyXG59XHJcbmZ1bmN0aW9uIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldChyZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChyZXN1bHQsIGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJTYXZlZCBDb25maWd1cmF0aW9uXCIpOyB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsY3VsYXRvcl9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IGNhbGNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjYWxjRGl2KTtcclxuICAgIHRpbGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGlsZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCI0MDBweFwiO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgb3V0cHV0LnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBvdXRwdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgb3V0cHV0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLndpZHRoID0gXCI2MCVcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUubWluV2lkdGggPSBcIjE4MHB4XCI7XHJcbiAgICBjb25zdCBoaXN0b3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGlzdG9yeURpdik7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLndpZHRoID0gXCIzNSVcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUubWFyZ2luVG9wID0gXCIxMHB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLm1heEhlaWdodCA9IFwiMTk1cHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDQwLCA0MylcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYig0Myw3Miw5MClcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjFweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJTdHlsZSA9IFwic29saWRcIjtcclxuICAgIGNvbnN0IGhpc3RvcnlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGhpc3RvcnlEaXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVRhYmxlKTtcclxuICAgIGNvbnN0IGhpc3RvcnlUYWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICBoaXN0b3J5VGFibGUuYXBwZW5kQ2hpbGQoaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICBvdXRwdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIG91dHB1dC5zdHlsZS53aWR0aCA9IFwiOTAlXCI7XHJcbiAgICBvdXRwdXQuc3R5bGUuaGVpZ2h0ID0gXCIzNnB4XCI7XHJcbiAgICBvdXRwdXQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICBvdXRwdXQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKG91dHB1dCk7XHJcbiAgICB2YXIgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICB2YXIgcHJldlZhbHVlID0gbnVsbDtcclxuICAgIHZhciBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgIHZhciBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgdmFyIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICBjb25zdCBrZXlwYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChrZXlwYWQpO1xyXG4gICAga2V5cGFkLnN0eWxlLndpZHRoID0gXCI5NSVcIjtcclxuICAgIGtleXBhZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBrZXlwYWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDQsIDFmcilcIjtcclxuICAgIGNvbnN0IGxheW91dCA9IFtbNywgbnVsbF0sIFs4LCBudWxsXSwgWzksIG51bGxdLCBbXCLDt1wiLCBcIiMzZmEyZGVcIl0sIFs0LCBudWxsXSwgWzUsIG51bGxdLCBbNiwgbnVsbF0sIFtcInhcIiwgXCIjM2ZhMmRlXCJdLCBbMSwgbnVsbF0sIFsyLCBudWxsXSwgWzMsIG51bGxdLCBbXCItXCIsIFwiIzNmYTJkZVwiXSwgWzAsIG51bGxdLCBbXCIuXCIsIG51bGxdLCBbXCLCsVwiLCBudWxsXSwgW1wiK1wiLCBcIiMzZmEyZGVcIl1dO1xyXG4gICAgbGF5b3V0LmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gKG9wdFswXSA9PSAwID8gXCIwXCIgOiBvcHRbMF0gfHwgXCJcIikudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAob3B0WzFdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5cGFkLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRbMF0gPT0gXCIrXCIgfHwgb3B0WzBdID09IFwiLVwiIHx8IG9wdFswXSA9PSBcInhcIiB8fCBvcHRbMF0gPT0gXCLDt1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gb3B0WzBdO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRbMF0gPT0gXCLCsVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy50b1N0cmluZygpLmNoYXJBdCgwKSA9PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIi1cIiArIGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGJvdHRvbURpdik7XHJcbiAgICBib3R0b21EaXYuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGJvdHRvbURpdi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoMiwgMWZyKVwiO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGNsZWFyKTtcclxuICAgIGNsZWFyLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xyXG4gICAgY2xlYXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgY2xlYXIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIGNsZWFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIxNywgODMsIDc5KVwiO1xyXG4gICAgY2xlYXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICBvdXRwdXQudmFsdWUgPSBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGVudGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZW50ZXIpO1xyXG4gICAgZW50ZXIudGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XHJcbiAgICBlbnRlci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICBlbnRlci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgZW50ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNWNiODVjXCI7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIjFcIiB8fCBlLmtleSA9PT0gXCIyXCIgfHwgZS5rZXkgPT09IFwiM1wiIHx8IGUua2V5ID09PSBcIjRcIiB8fCBlLmtleSA9PT0gXCI1XCIgfHwgZS5rZXkgPT09IFwiNlwiIHx8IGUua2V5ID09PSBcIjdcIiB8fCBlLmtleSA9PT0gXCI4XCIgfHwgZS5rZXkgPT09IFwiOVwiIHx8IGUua2V5ID09PSBcIjBcIiB8fCBlLmtleSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNsZWFyT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gZS5rZXk7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIitcIiB8fCBlLmtleSA9PT0gXCItXCIgfHwgZS5rZXkgPT09IFwieFwiIHx8IGUua2V5ID09PSBcIipcIiB8fCBlLmtleSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBlLmtleTtcclxuICAgICAgICAgICAgY2xlYXJPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIj1cIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZG91YmxlQ2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFyYW1ldGVycztcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKSB7XHJcbiAgICBjdXJyZW50U3RyaW5nID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiK1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSArIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiLVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAtIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwieFwiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIqXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlICogY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCLDt1wiIHx8IGN1cnJlbnRPcGVyYXRpb24gPT0gXCIvXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC8gY3VycmVudFN0cmluZztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVwYWlyc19wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIFJlcGFpcnNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc2l0ZXMvXCIgKyB1c2VybmFtZSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuIHdlYmFwcElEO1xyXG59XHJcbmZ1bmN0aW9uIFJlcGFpcnNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcGFpckRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcGFpckRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQWxsIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJQbGFuZXRcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVpbGRpbmdzID0gW107XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBzaXRlW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzLnB1c2goW3NpdGVbXCJQbGFuZXROYW1lXCJdLCBidWlsZF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGluZ3Muc29ydChnbG9iYWxCdWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0gKyBcIiBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICB2YXIgc2l0ZURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2l0ZVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkgfHwgc2l0ZVtcIlBsYW5ldElkZW50aWZpZXJcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVEYXRhID0gc2l0ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzaXRlRGF0YSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aHJlc2hvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcclxuICAgICAgICB0aHJlc2hvbGRUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IFwiNzBcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcclxuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcclxuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2l0ZURhdGFbXCJCdWlsZGluZ3NcIl0uc29ydChidWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oYm9keSk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCkge1xyXG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0ge307XHJcbiAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1tcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1tcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1tcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XHJcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xyXG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KSB7XHJcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XHJcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1sxXVtcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1sxXVtcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1sxXVtcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGJ1aWxkaW5nWzBdLCBkYXRlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSksIChidWlsZGluZ1sxXVtcIkNvbmRpdGlvblwiXSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArIFwiJVwiXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRpbmdTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uXCJdID4gYltcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcclxufVxyXG5mdW5jdGlvbiBnbG9iYWxCdWlsZGluZ1NvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbMV1bXCJDb25kaXRpb25cIl0gPiBiWzFdW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDaGF0X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENoYXRfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY2hhdC9kaXNwbGF5L1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENoYXRfcG9zdChjaGF0RGl2LCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNoYXREYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjaGF0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgY2hhdERpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBwYXJhbWV0ZXJzWzFdICsgXCIgR2xvYmFsIFNpdGUgT3duZXJzXCI7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICBjaGF0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNoYXREYXRhLmZvckVhY2goY2hhdCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmNsYXNzTGlzdC5hZGQoXCJjaGF0LWxpbmVcIik7XHJcbiAgICAgICAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TGluZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XHJcbiAgICAgICAgdGltZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XHJcbiAgICAgICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xyXG4gICAgICAgIHRpbWVEaXYuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZCh0aW1lRGF0ZURpdik7XHJcbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1uYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG4gICAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImNoYXQtbWVzc2FnZVwiKTtcclxuICAgICAgICBzd2l0Y2ggKGNoYXRbXCJNZXNzYWdlVHlwZVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0hBVFwiOlxyXG4gICAgICAgICAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiTWVzc2FnZVRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkpPSU5FRFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGpvaW5lZC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTEVGVFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGxlZnQuXCI7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmluX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElEKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuIGFwaWtleTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMmZpbiUyMiZwYXJhbT0lMjJcIiArIHBhcmFtZXRlcnNbMV0gKyBcIiUyMlwiO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGaW5fcG9zdCwgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRmluX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGlsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpbGVIZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBPdmVydmlld1wiO1xyXG4gICAgdGlsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiS2V5IEZpZ3VyZXNcIjtcclxuICAgIHRpbGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpbi10aXRsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGlsZUhlYWRlcik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzFdKS50b0xvY2FsZVN0cmluZygpLCBcIkZpeGVkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzJdKS50b0xvY2FsZVN0cmluZygpLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNF0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlxdWlkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzddKS50b0xvY2FsZVN0cmluZygpLCBcIkVxdWl0eVwiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzVdKS50b0xvY2FsZVN0cmluZygpLCBcIkxpYWJpbGl0aWVzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIGNvbnN0IG5vdyA9IGRhdGFbMF1bMF07XHJcbiAgICB2YXIgd2Vla0FnbyA9IC0xO1xyXG4gICAgdmFyIGJlc3RHdWVzcyA9IDg2NDAwMDAwMDAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKSA8IGJlc3RHdWVzcykge1xyXG4gICAgICAgICAgICBiZXN0R3Vlc3MgPSBNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCk7XHJcbiAgICAgICAgICAgIHdlZWtBZ28gPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3ZWVrQWdvICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZml0ID0gTWF0aC5yb3VuZChkYXRhWzBdWzddIC0gZGF0YVt3ZWVrQWdvXVs3XSk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBwcm9maXQgPiAwID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChwcm9maXQudG9Mb2NhbGVTdHJpbmcoKSwgXCJQcm9maXRcIiwgY29sb3IpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyZWFrZG93bkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGJyZWFrZG93bkhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIEJyZWFrZG93blwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRleHRDb250ZW50ID0gXCJJbnZlbnRvcnkgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpbi10aXRsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnJlYWtkb3duSGVhZGVyKTtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gW1wiTmFtZVwiLCBcIkZpeGVkIEFzc2V0c1wiLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFwiVG90YWwgQXNzZXRzXCJdO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgaGVhZGVycykge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBjb25zdCBicmVha2Rvd24gPSBKU09OLnBhcnNlKGRhdGFbMF1bOF0pO1xyXG4gICAgYnJlYWtkb3duLnNvcnQoZmluYW5jaWFsU29ydCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGJyZWFrZG93bikge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RUYWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGZpcnN0VGFibGVFbGVtKTtcclxuICAgICAgICBmaXJzdFRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihyb3dEYXRhWzBdKSk7XHJcbiAgICAgICAgcm93RGF0YS5zaGlmdCgpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmFuY2lhbFNvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbM10gPCBiWzNdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFbmhhbmNlZEJ1cm5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lLCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB2YXIgYnVybjtcclxuICAgIHZhciB1bmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHBsYW5ldDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybiBbYXBpa2V5LCB3ZWJhcHBJRCwgbW9kdWxlc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICBpZiAoZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdW5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgIGdldEdyb3VwQnVybihmdWxsQnVybiwgcGFyYW1ldGVyc1syXSwgYXBpa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGJ1cm4gPSBmdWxsQnVyblt1c2VybmFtZV07XHJcbiAgICAgICAgICAgIHBsYW5ldCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJ1cm5TZXR0aW5nc1swXSA9PSBcImxvYWRpbmdcIiB8fCB1bmxvYWRlZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XHJcbiAgICAgICAgdGlsZS5pZCA9IFwicG1tZy1yZWxvYWRcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aWxlLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgdmFyIHNldHRpbmdzO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5mb3JFYWNoKHBsYW5ldERhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxhbmV0RGF0YVtcIkVycm9yXCJdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJJbnZlbnRvcnlcIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyUHJvZHVjdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm4pO1xyXG4gICAgICAgIHNldHRpbmdzID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgUGxhbmV0IVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25zID0ge307XHJcbiAgICAgICAgdmFyIGludiA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJPcmRlclByb2R1Y3Rpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIkludmVudG9yeVwiXSkge1xyXG4gICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOZWVkc1wiLCBcIlByb2R1Y3Rpb25cIiwgXCJJbnZcIiwgXCJBbXQuIE5lZWRlZFwiLCBcIkJ1cm5cIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBoZWFkUm93LmZpcnN0Q2hpbGQuY29sU3BhbiA9IDI7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICB2YXIgYnVybk1hdGVyaWFscyA9IE9iamVjdC5rZXlzKGNvbnMpO1xyXG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBidXJuTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgdmFyIGluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbXCJNYXRlcmlhbEV4Y2x1c2lvbnNcIl0uZm9yRWFjaCgobWF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihNYXRlcmlhbE5hbWVzW21hdGVyaWFsXVswXSk7XHJcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbnNDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc0NvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihjb25zW21hdGVyaWFsXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIgLyBEYXlcIikpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBpbnZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgaW52QW1vdW50ID0gaW52W21hdGVyaWFsXSA9PSB1bmRlZmluZWQgPyAwIDogaW52W21hdGVyaWFsXTtcclxuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW52Q29sdW1uKTtcclxuICAgICAgICBjb25zdCBidXJuID0gaW52QW1vdW50ID09IDAgPyAwIDogLWludkFtb3VudCAvIGNvbnNbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgYnVybkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbigoKGJ1cm4gPCA1MDAgJiYgY29uc1ttYXRlcmlhbF0gPCAwKSA/IE1hdGguZmxvb3IoYnVybikudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA6IFwi4oieXCIpICsgXCIgRGF5c1wiKSk7XHJcbiAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxdID49IDApIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMF0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdKSB7XHJcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkQW10ID0gYnVybiA+IDcgfHwgY29uc1ttYXRlcmlhbF0gPiAwID8gMCA6IChidXJuIC0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdKSAqIGNvbnNbbWF0ZXJpYWxdO1xyXG4gICAgICAgIG5lZWRDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4obmVlZEFtdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5lZWRDb2x1bW4pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXJuQ29sdW1uKTtcclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XHJcbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1thXSA9PSB1bmRlZmluZWQgfHwgTWF0ZXJpYWxOYW1lc1tiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbE5hbWVzW2FdWzFdLmxvY2FsZUNvbXBhcmUoTWF0ZXJpYWxOYW1lc1tiXVsxXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNoZWV0VGFibGVfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm4gYXBpa2V5O1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzJdICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxufVxyXG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGRhdGFbMF0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyYWN0c19wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENvbnRyYWN0c19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jb250cmFjdC9hbGxjb250cmFjdHMvXCIgKyB1c2VybmFtZSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuIFt3ZWJhcHBJRF07XHJcbn1cclxuZnVuY3Rpb24gQ29udHJhY3RzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjb250cmFjdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyYWN0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGVuZGluZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwZW5kaW5nSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUGVuZGluZyBDb250cmFjdHNcIikpO1xyXG4gICAgcGVuZGluZ0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBlbmRpbmdIZWFkZXIpO1xyXG4gICAgY29uc3QgcGVuZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBlbmRpbmdEaXYpO1xyXG4gICAgY29uc3Qgc2VlbkNvbnRyYWN0cyA9IFtdO1xyXG4gICAgY29udHJhY3REYXRhLmZvckVhY2goY29udHJhY3QgPT4ge1xyXG4gICAgICAgIGlmIChjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiB8fCBjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJCUkVBQ0hFRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlZW5Db250cmFjdHMuaW5jbHVkZXMoY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNvbnRyYWN0TGluZSk7XHJcbiAgICAgICAgY29uc3QgY29udHJhY3ROYW1lID0gY3JlYXRlVGV4dFNwYW4oY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xyXG4gICAgICAgIGNvbnRyYWN0TmFtZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkNvbnRyYWN0TmFtZSk7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjb250cmFjdE5hbWUpO1xyXG4gICAgICAgIHNlZW5Db250cmFjdHMucHVzaChjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSk7XHJcbiAgICAgICAgY29uc3QgY29udHJhY3RWaWV3ID0gY3JlYXRlTGluayhcInZpZXdcIiwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xyXG4gICAgICAgIGNvbnRyYWN0Vmlldy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjb250cmFjdFZpZXcpO1xyXG4gICAgICAgIHBlbmRpbmdEaXYuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQUnVOX3ByZSh0aWxlKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgcHJ1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBwcnVuLnNyYyA9IFwiaHR0cHM6Ly9hcGV4LnByb3NwZXJvdXN1bml2ZXJzZS5jb20vIy9cIjtcclxuICAgIHBydW4ud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHBydW4uaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBwcnVuLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9zcGVyaXR5X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9wcm9zcGVyaXR5LXBydW4ubmV0bGlmeS5hcHAvXCI7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgIHVybCArPSBcIj9mcm9tPVwiICsgcGFyYW1ldGVyc1sxXSArIFwiJnRvPVwiICsgcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb3NwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHByb3NwLnNyYyA9IHVybDtcclxuICAgIHByb3NwLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBwcm9zcC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHByb3NwKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyYW1ldGVyc1sxXSArPSBcIl9cIiArIHBhcmFtZXRlcnNbaV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBzaGVldC5zcmMgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL2VkaXQ/dXNwPXNoYXJpbmdcIjtcclxuICAgIHNoZWV0LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwXCI7XHJcbiAgICBzaGVldC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHNoZWV0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNoZWV0KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRGlzY29yZF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciBzZXJ2ZXJJRDtcclxuICAgIHZhciBjaGFubmVsSUQ7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIGlmIChEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJ2ZXJJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzBdO1xyXG4gICAgICAgICAgICBjaGFubmVsSUQgPSBEaXNjb3JkU2VydmVyc1twYXJhbWV0ZXJzWzFdXVsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzZXJ2ZXJJRCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIGRpc2NvcmQuc3JjID0gXCJodHRwczovL2Uud2lkZ2V0Ym90LmlvL2NoYW5uZWxzL1wiICsgc2VydmVySUQgKyBcIi9cIiArIGNoYW5uZWxJRDtcclxuICAgIGRpc2NvcmQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBkaXNjb3JkLnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGlzY29yZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEZJT0ludl9wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5KSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICBwYXJhbWV0ZXJzLnB1c2goYXBpa2V5KTtcclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9nZXRBbGxTdG9yYWdlcywgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvYXV0aC9ncm91cC9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAzOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzWzJdICs9IFwiIFwiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc3RvcmFnZS9cIiArIHBhcmFtZXRlcnNbMV0gKyBcIi9cIiArIHBhcmFtZXRlcnNbMl0sIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgY29uc3QgdGFnID0gXCJGSU9cIjtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpbnZlbnRvcnlEYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2b2x1bWVVc2VkID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUxvYWRcIl07XHJcbiAgICBjb25zdCB2b2x1bWVUb3RhbCA9IGludmVudG9yeURhdGFbXCJWb2x1bWVDYXBhY2l0eVwiXTtcclxuICAgIGNvbnN0IHdlaWdodFVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0TG9hZFwiXTtcclxuICAgIGNvbnN0IHdlaWdodFRvdGFsID0gaW52ZW50b3J5RGF0YVtcIldlaWdodENhcGFjaXR5XCJdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW52LWhlYWRlclwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnYtYm9keVwiKTtcclxuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzJdLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgY29uc3QgdXNlckVsZW0gPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdLCB0YWcpO1xyXG4gICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcclxuICAgIGNvbnN0IHZvbHVtZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB2b2x1bWVCYXIuaWQgPSBcInZvbHVtZS1iYXJcIjtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB2b2x1bWVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgdm9sdW1lQmFyLnZhbHVlID0gdm9sdW1lVXNlZCAvIHZvbHVtZVRvdGFsO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB2b2x1bWVUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBtwrNcIiwgdGFnKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodm9sdW1lTGluZSk7XHJcbiAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlaWdodExpbmUuaWQgPSBcIndlaWdodC1saW5lXCI7XHJcbiAgICB3ZWlnaHRMaW5lLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA4cHhcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJXZWlnaHQgXCIsIHRhZykpO1xyXG4gICAgY29uc3Qgd2VpZ2h0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xyXG4gICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgd2VpZ2h0QmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1iYXJcIik7XHJcbiAgICB3ZWlnaHRCYXIubWF4ID0gMTtcclxuICAgIHdlaWdodEJhci52YWx1ZSA9IHdlaWdodFVzZWQgLyB3ZWlnaHRUb3RhbDtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQod2VpZ2h0QmFyKTtcclxuICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4od2VpZ2h0VXNlZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgdFwiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWlnaHRMaW5lKTtcclxuICAgIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0uc29ydChmaW9NYXRzQWxwaGFiZXRTb3J0KTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0sIHRhZywgaXRlbVtcIk1hdGVyaWFsQW1vdW50XCJdLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbWF0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoXCJNQVQgXCIgKyBpdGVtW1wiTWF0ZXJpYWxUaWNrZXJcIl0pOyB9KTtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfZ2V0QWxsU3RvcmFnZXModGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHZhciB1c2VySlNPTjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdXNlckpTT04gPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIHZhciB1c2VybmFtZXMgPSBbXTtcclxuICAgIHVzZXJKU09OW1wiR3JvdXBVc2Vyc1wiXS5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIHVzZXJuYW1lcy5wdXNoKHVzZXJbXCJHcm91cFVzZXJOYW1lXCJdKTtcclxuICAgIH0pO1xyXG4gICAgcGFyYW1ldGVycy5wdXNoKHVzZXJKU09OW1wiR3JvdXBOYW1lXCJdKTtcclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2FsbERpc3BsYXksIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2Zpb3dlYi9ncm91cGh1YlwiLCBcIlBPU1RcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBwYXJhbWV0ZXJzWzJdXSwgSlNPTi5zdHJpbmdpZnkodXNlcm5hbWVzKSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRklPSW52X2FsbERpc3BsYXkodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIHZhciBncm91cERhdGEgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ3JvdXBEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEgZnJvbSBGSU8hXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzNdICsgXCIgSW52ZW50b3JpZXNcIikpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBjb25zdCBib2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYm9keURpdik7XHJcbiAgICBib2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4LXRhYmxlXCIpO1xyXG4gICAgaWYgKGdyb3VwRGF0YVtcIlBsYXllck1vZGVsc1wiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQmFkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZ3JvdXBEYXRhW1wiUGxheWVyTW9kZWxzXCJdLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICBpZiAocGxheWVyW1wiTG9jYXRpb25zXCJdLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XHJcbiAgICAgICAgcGxheWVyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBsYXllcltcIlVzZXJOYW1lXCJdKSk7XHJcbiAgICAgICAgcGxheWVyRGl2LmZpcnN0Q2hpbGQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIHBsYXllcltcIkxvY2F0aW9uc1wiXS5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgcGxheWVyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsobG9jYXRpb25bXCJMb2NhdGlvbk5hbWVcIl0sIFwiWElUIElOVl9cIiArIHBsYXllcltcIlVzZXJOYW1lXCJdICsgXCJfXCIgKyBsb2NhdGlvbltcIkxvY2F0aW9uTmFtZVwiXS5yZXBsYWNlKC8gLywgXCJfXCIpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xyXG4gICAgcGFyYW1ldGVycy5wb3AoKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBmaW9NYXRzQWxwaGFiZXRTb3J0KGEsIGIpIHtcclxuICAgIGlmIChhW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXSA9PSBudWxsIHx8IGJbXCJNYXRlcmlhbENhdGVnb3J5XCJdID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBhW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXS5sb2NhbGVDb21wYXJlKGJbXCJNYXRlcmlhbENhdGVnb3J5XCJdKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRGdW5jdGlvbnMudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9FVEEsIHBhcnNlRHVyYXRpb24sIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIE9yZGVyRVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItb3JkZXItZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmJlYXV0aWZ5T3JkZXJzKCk7XHJcbiAgICB9XHJcbiAgICBiZWF1dGlmeU9yZGVycygpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWUpKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHF1ZXVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZFNsb3RzID0gQXJyYXkuZnJvbShxdWV1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHZhciBpblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBsaW5lVGltZXMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gMDtcclxuICAgICAgICAgICAgcHJvZFNsb3RzLmZvckVhY2gocHJvZEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2RJdGVtLmNsYXNzTGlzdC5jb250YWlucyhTZWxlY3Rvci5Qcm9kSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5UaW1lID0gbGluZVRpbWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVsYXBzZWQgKz0gbWluVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzID0gbGluZVRpbWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlIC0gbWluVGltZTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24ocHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnB1c2goZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZEl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtjb252ZXJ0RHVyYXRpb25Ub0VUQShkdXJhdGlvbiArIHRpbWVFbGFwc2VkKX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uKX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdWV1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL09yZGVyRVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcGFyc2VCYXNlTmFtZSwgZmluZEJ1cm5BbW91bnQsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBmaW5kSW52ZW50b3J5QW1vdW50LCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIENvbnN1bWFibGVUaW1lcnMge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGJ1cm4sIHRocmVzaG9sZHMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY29uc3VtYWJsZS10aW1lcnNcIjtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZHMgPSB0aHJlc2hvbGRzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVyblt0aGlzLnVzZXJuYW1lXSA9PSB1bmRlZmluZWQgfHwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJXRlwiKTtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQgfHwgYnVmZmVycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgdGhpcy5idXJuW3RoaXMudXNlcm5hbWVdLCB0aGlzLnRocmVzaG9sZHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCdXJucyhidWZmZXIsIGJ1cm4sIHRocmVzaG9sZHMpIHtcclxuICAgIGNvbnN0IG5hbWVFbGVtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZSk7XHJcbiAgICBpZiAobmFtZUVsZW0gPT0gbnVsbCB8fCBuYW1lRWxlbSA9PSB1bmRlZmluZWQgfHwgbmFtZUVsZW0udGV4dENvbnRlbnQgPT0gbnVsbCB8fCBuYW1lRWxlbS50ZXh0Q29udGVudCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgbmFtZSA9IHBhcnNlQmFzZU5hbWUobmFtZUVsZW0udGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRoZWFkID4gdHJcIikpO1xyXG4gICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxIZWFkZXIgPSBoZWFkZXIuY2hpbGRyZW5bMl07XHJcbiAgICAgICAgY29uc3QgYnVybkhlYWRlciA9IGhlYWRlci5jaGlsZHJlblszXTtcclxuICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICBpZiAoYnVybkhlYWRlci5jaGlsZHJlbiAhPSB1bmRlZmluZWQgJiYgYnVybkhlYWRlci5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnVybkhlYWRlci5yZW1vdmVDaGlsZChidXJuSGVhZGVyLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVybkhlYWRlci50ZXh0Q29udGVudCA9IFwiQnVyblwiO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwbGFuZXRCdXJuID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQobmFtZSwgYnVybik7XHJcbiAgICBpZiAocGxhbmV0QnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXRSb3cuY2hpbGRFbGVtZW50Q291bnQgPCA1KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0RGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlbls0XTtcclxuICAgICAgICBjb25zdCB0b3RhbERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgaWYgKG91dHB1dERhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgaW52ZW50b3J5QW1vdW50ID0gZmluZEludmVudG9yeUFtb3VudCh0YXJnZXRSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsIHBsYW5ldEJ1cm4pO1xyXG4gICAgICAgICAgICB2YXIgYnVybkFtb3VudCA9IGZpbmRCdXJuQW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBkYXlzTGVmdDtcclxuICAgICAgICAgICAgaWYgKGJ1cm5BbW91bnQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGludmVudG9yeUFtb3VudCAvIGJ1cm5BbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0IDw9IHRocmVzaG9sZHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuY2xhc3NMaXN0LmFkZChcImJ1cm4tcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXllbGxvd1wiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gZGF5c0xlZnQudG9GaXhlZCgwKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBvdXRwdXREYXRhLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0RGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihkYXlzTGVmdCkpO1xyXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdG90YWxEYXRhLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsRGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbERhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYnVybkFtb3VudCA9PSAwID8gXCJcIiA6IGJ1cm5BbW91bnQudG9GaXhlZCgyKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnN1bWFibGVUaW1lcnMudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBwYXJzZUR1cmF0aW9uLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGVldEVUQXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWZsdC1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiRkxUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bN107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsZWV0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMsIEN1cnJlbmN5U3ltYm9scyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFBvc3RMTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzID0gW107XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXBvc3QtbG0tcHJpY2VcIjtcclxuICAgICAgICB0aGlzLnByaWNlcyA9IHByaWNlcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcy5mb3JFYWNoKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGYoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2xlYW51cHNbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTVBvc3RGb3JtKSkuZm9yRWFjaChmb3JtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFycmF5LmZyb20oZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiQy1FQ2Itb3ZlMXRsYTZxc2lWNDNldz09IGl2RzI0cXRROTJrYnlzTFROZVdKdnc9PVwiKSk7XHJcbiAgICAgICAgICAgIHZhciBzaGlwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRleHRDb250ZW50ID09IFwiU0hJUFBJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb21tb2RpdHkgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ29tbW9kaXR5J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdBbW91bnQnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUHJpY2VJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdUb3RhbCBwcmljZSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDdXJyZW5jeSddXS8vc2VsZWN0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IGNyZWF0ZVRleHRTcGFuKFwiLS1cIiwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmcgJiYgY29tbW9kaXR5LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0SW5mbyA9IE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0SW5mbyA9PSB1bmRlZmluZWQgfHwgbWF0SW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdCA9IG1hdEluZm9bMV0gPj0gbWF0SW5mb1syXSA/IFwidFwiIDogXCJtwrNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHR2b2x1bWUgPSBNYXRoLm1heChtYXRJbmZvWzFdLCBtYXRJbmZvWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4od2VpZ2h0dm9sdW1lKSB8fCBpc05hTih0b3RhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIi0tIHQgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgXCItLSAvIHRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgXCIgKyB1bml0ICsgXCIgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIC8gXCIgKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLnByaWNlcykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbW9kaXR5LnZhbHVlICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IHRoaXMucHJpY2VzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCArIFwiIFwiID09IFwiTmFOIFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCIgfCBcIiArIChwcmljZSAqIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgVG90YWwgQ29ycFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiICsgKHByaWNlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1Bvc3RMTS50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2hpcHBpbmctYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKD86U0hJUFBJTkcpXFxzKFtcXGQsLl0rKXRcXHNcXC9cXHMoW1xcZCwuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1syXS5yZXBsYWNlKC9bLC5dL2csICcnKSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0b25uYWdlID4gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcclxuICAgICAgICAgICAgICAgIHByaWNlU3Bhbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3Blckl0ZW19LyR7dW5pdH0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24sIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWV1ZUxvYWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XHJcbiAgICB9XHJcbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XHJcbiAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBwYXJzZUR1cmF0aW9uKGV0YVNwYW4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZVF1ZXVlTG9hZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keTpudGgtb2YtdHlwZSgyKSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIG47XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IHRvRml4ZWQoZXRhIC8gdG90YWxUaW1lICogMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVUZXh0U3BhbihgICR7cGVyY2VudH0lYCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1ub3RzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTm90aWZpY2F0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2VhcmNoZXJzLmZvckVhY2goc2VhcmNoID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2gobmV3IFJlZ0V4cChzZWFyY2hbMF0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnRleHRDb250ZW50ID0gc2VhcmNoWzFdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5zdHlsZS5jb2xvciA9IHNlYXJjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0eXBlU3BhbiwgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdFRleHQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RUZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9DaGFtYmVyIG9mIEdsb2JhbCBDb21tZXJjZS8sIFwiQ09HQ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZHVjZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2F0IHlvdXIgYmFzZSAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL09uZSAvLCBcIjEgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGhhdmUgYmVlbi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHVuaXRbc10/IG9mLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvIChbQS16IC1dKykgcHJvZHVjZWQvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYWRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgveW91ciAoW0EteiAtXSspIG9yZGVyLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkZXIgZmlsbGVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gQ29tbW9kaXR5IEV4Y2hhbmdlLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvKFtBLXogLV0rKSBvcmRlci8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWNjZXB0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB0aGUvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBsb2NhbCBtYXJrZXQvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbnRyYWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9Zb3VyIHBhcnRuZXIgLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVkIGF0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9pdHMgZGVzdGluYXRpb24gLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2djXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFtYmVyIG9mIGdsb2JhbCBjb21tZXJjZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGEgbmV3IGVjb25vbWljIHByb2dyYW0vLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IG5vdFRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBTZWFyY2hlcnMgPSBbXHJcbiAgICBbXCJjb250cmFjdFwiLCBcImNvbnRyYWN0XCIsIFwicmdiKDI0NywgMTY2LCAwKVwiXSxcclxuICAgIFtcIm91ciBjb3Jwb3JhdGlvblwiLCBcImNvcnBcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wicHJvZHVjZWRcIiwgXCJwcm9kdWNlZFwiLCBcIiMzZmEyZGVcIl0sXHJcbiAgICBbXCJhY2NlcHRlZFwiLCBcImFkdmVydFwiLCBcIiM0NDljNTdcIl0sXHJcbiAgICBbXCJleHBpcmVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcInRyYWRlXCIsIFwidHJhZGVcIiwgXCIjMDA4MDAwXCJdLFxyXG4gICAgW1wib3JkZXIgZmlsbGVkXCIsIFwib3JkZXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wiYXJyaXZlZCBhdFwiLCBcImFycml2YWxcIiwgXCIjYjMzNmIzXCJdLFxyXG4gICAgW1wicmVwb3J0XCIsIFwicmVwb3J0XCIsIFwiIzAwYWE3N1wiXSxcclxuICAgIFtcImVsZWN0aW9uXCIsIFwiZWxlY3Rpb25cIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiZ292ZXJub3JcIiwgXCJnb3Zlcm5vclwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJydWxlc1wiLCBcInJ1bGVzXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImNvZ2NcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImNoYW1iZXIgb2YgZ2xvYmFsIGNvbW1lcmNlXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJleHBlcnRcIiwgXCJleHBlcnRcIiwgXCIjZmY4YTAwXCJdLFxyXG4gICAgW1wicG9wdWxhdGlvbiBpbmZyYXN0cnVjdHVyZSBwcm9qZWN0XCIsIFwiUE9QSVwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJhcGV4XCIsIFwidXBkYXRlXCIsIFwiIzAwYWE3N1wiXSxcclxuICAgIFtcIndhcmVob3VzXCIsIFwid2FyXCIsIFwiI2NjMjkyOVwiXSxcclxuICAgIFtcInNoaXBidWlsZGluZyBwcm9qZWN0XCIsIFwic2hpcFwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJwbGFuZXRhcnkgcHJvamVjdFwiLCBcImluZnJhXCIsIFwiIzhmNTJjY1wiXVxyXG5dO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RpZmljYXRpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUHJvZHVjdGlvblNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2Nyb2xsXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kV2luZG93KSk7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChwcm9kID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJFbGVtID0gcHJvZC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlByb2RQYW5lbCk7XHJcbiAgICAgICAgICAgIGlubmVyRWxlbS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpbm5lckVsZW0uc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcclxuICAgICAgICAgICAgaWYgKGlubmVyRWxlbS5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGlubmVyRWxlbS5maXJzdENoaWxkLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvZC5zdHlsZS53aWR0aCA9IChjb3VudCAqIDEyMCkgKyBcInB4XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUHJvZHVjdGlvblNjcm9sbC50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgY3JlYXRlTm9kZSB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNjcmVlblVucGFjayB7XHJcbiAgICBjb25zdHJ1Y3RvcihleGNsdXNpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNjcmVlbnNcIjtcclxuICAgICAgICBleGNsdXNpb25zID0gZXhjbHVzaW9ucyA9PSB1bmRlZmluZWQgPyBbXSA6IGV4Y2x1c2lvbnM7XHJcbiAgICAgICAgdGhpcy5leGNsdXNpb25zID0gW107XHJcbiAgICAgICAgZXhjbHVzaW9ucy5mb3JFYWNoKGV4ID0+IHsgdGhpcy5leGNsdXNpb25zLnB1c2goZXgudG9VcHBlckNhc2UoKSk7IH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuU2NyZWVuQ29udHJvbHMpO1xyXG4gICAgICAgIGlmIChuYXZiYXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hdmJhckl0ZW1DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRNYWluQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBuYml0VW5kZXJsaW5lQ2xhc3NMaXN0ID0gbmF2YmFyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBtZW51ID0gbmF2YmFyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIHZhciBsaW5rcyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20obWVudS5jaGlsZHJlbikuZm9yRWFjaCgoY24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNuLmNoaWxkcmVuLmxlbmd0aCA9PSA0ICYmICF0aGlzLmV4Y2x1c2lvbnMuaW5jbHVkZXMoU3RyaW5nKGNuLmNoaWxkcmVuWzFdLmlubmVySFRNTCkudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtzLnB1c2goeyBcIk5hbWVcIjogY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MLCBcIkxpbmtcIjogY24uY2hpbGRyZW5bMV0uaHJlZiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwYWNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc3BhY2VyRGl2LmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBzcGFjZXJEaXYuc3R5bGUud2lkdGggPSBcIjVweFwiO1xyXG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChzcGFjZXJEaXYpO1xyXG4gICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGA8ZGl2IGNsYXNzPVwiJHtuYXZiYXJJdGVtQ2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiJHtuYml0TWFpbkNsYXNzTGlzdH1cIiBzdHlsZT1cImNvbG9yOiBpbmhlcml0XCIgaHJlZj1cIiR7bGluay5MaW5rfVwiPiR7bGluay5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtuYml0VW5kZXJsaW5lQ2xhc3NMaXN0fVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbSA9IGNyZWF0ZU5vZGUoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uRWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NjcmVlblVucGFjay50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBzaG93QnVmZmVyLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNpZGViYXIge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaWRlYmFyXCI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnV0dG9ucyA9IFtcIkJTXCIsIFwiQ09OVFwiLCBcIkNPTVwiLCBcIkNPUlBcIiwgXCJDWExcIiwgXCJGSU5cIiwgXCJGTFRcIiwgXCJJTlZcIiwgXCJNQVBcIiwgXCJQUk9EXCIsIFwiQ01EU1wiXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLkxlZnRTaWRlYmFyKTtcclxuICAgICAgICBpZiAoc2lkZWJhciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnV0dG9ucy5mb3JFYWNoKGRlZmF1bHRCdXR0b24gPT4ge1xyXG4gICAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uWzBdLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc2lkZWJhci5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZpcnN0Q2hpbGQgIT0gbnVsbCAmJiAoY2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09PSBkZWZhdWx0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShjaGlsZC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZENoaWxkID0+IHsgY2hpbGRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWVsZW1lbnRcIik7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uSW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCdXR0b25zLmluY2x1ZGVzKGJ1dHRvbkluZm9bMF0udG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dFNwYW4oYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaXZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyQnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uVGV4dC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJUZXh0KTtcclxuICAgICAgICAgICAgc2xpdmVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNsaXZlcik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNsaXZlcik7XHJcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoYnV0dG9uSW5mb1sxXSk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NpZGViYXIudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBjaGFuZ2VWYWx1ZSB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBQbGFuZXRDb21tYW5kcywgUGxhbmV0TmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgQ29tbWFuZENvcnJlY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY29tbWFuZFwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkJ1ZmZlckFyZWEpKS5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyRmllbGQgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVGV4dCA9IGJ1ZmZlckZpZWxkLnZhbHVlLnRvVXBwZXJDYXNlKCkgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChQbGFuZXRDb21tYW5kcy5pbmNsdWRlcyhidWZmZXJUZXh0LnNwbGl0KFwiIFwiKVswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBQbGFuZXROYW1lcy5mb3JFYWNoKG5hbWVQYWlyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclRleHQuaW5jbHVkZXMoXCIgXCIgKyBuYW1lUGFpclswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRleHQgPSBidWZmZXJUZXh0LnJlcGxhY2UoXCIgXCIgKyBuYW1lUGFpclswXSwgXCIgXCIgKyBuYW1lUGFpclsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyRmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VWYWx1ZShidWZmZXJGaWVsZCwgYnVmZmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50ID09IG51bGwgfHwgYnVmZmVyRmllbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbW1hbmRDb3JyZWN0ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=