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
        if (planet && data[i]["PlanetNaturalId"] && data[i]["PlanetNaturalId"].toLowerCase() == planet.toLowerCase()) {
            return data[i];
        }
        else if (planet && data[i]["PlanetName"] && data[i]["PlanetName"].toLowerCase() == planet.toLowerCase()) {
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
    CXOSTable: "div[class~='gecI5uGBluvjP5GCRk3dHA==']",
    ScreenName: "span[class~='IuXoporrDf7qxIl-mkNWhA==']",
    ContDForm: "div[class~='TIGJheNilTzuChc8+0E38A==']",
    ConditionEditor: "div[class~='NLOrH7hF5fbKIesqW3uSkA==']"
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
    ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="],
    SettingsButton: ["A0Raxt0yS41ZQlnzmEvusg==", "ncHrIDsxNKH8LbMDigUiRg=="],
    SettingsBarUntoggled: ["Z9jYD8LyLZoBPb7JsART1w==", "P6Arba53I7cRvxiH0-pDQg=="],
    SettingsBarToggled: ["Z9jYD8LyLZoBPb7JsART1w==", "P6Arba53I7cRvxiH0-pDQg==", "V-75tb03enGVdcB+Sw-mRA==", "vKkB0W7jATtd8dSzgOYEKQ=="],
    SettingsText: ["YGSoqZwqkaG2CVltxMwoOw==", "fTT52i+1oFauxHOjVfGTww==", "kWTH1-HkYCWeYyDRgZ7ozQ==", "P3sSQkCRUgkpmKUgieJQvg=="]
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
    "shipment": ["linear-gradient(135deg, #030303, #181818)", "#7f7f7f"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryColors;

const PMMGStyle = `
.tooltip .tooltip-text {
	visibility: hidden;
	color: #fff;
	text-align: left;
	padding = 0;
	border-radius: 5px;
	opacity: 0;
	transition: opacity 0.3s;
	max-height: 0;
	margin-top: -13px;
	padding-left: 20px; 
	left: 105%;
	position: relative;
	width: 1000px;
}

.tooltip:hover .tooltip-text{
	visibility: visible;
	opacity: 1;
	padding = 5px;
}

.tooltip .tooltip-text::after {
	content: " ";
	position: absolute;
	top: 50%;
	right: 99%;
	border-width: 5px;
	border-style: solid;
	border-color: transparent white transparent transparent;
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
        }
        return;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProductionScroll__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ScreenUnpack__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Sidebar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CommandCorrecter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CalculatorButton__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ContractDrafts__ = __webpack_require__(23);


















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
    if (result["AHIBeautifier_Data"][8] == undefined) {
        result["AHIBeautifier_Data"][8] = {};
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
        new __WEBPACK_IMPORTED_MODULE_17__ContractDrafts__["a" /* ContractDrafts */](prices),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](result["AHIBeautifier_Data"][0], burn, result["AHIBeautifier_Data"][7]),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_9__Notifications__["a" /* Notifications */](),
        new __WEBPACK_IMPORTED_MODULE_12__ProductionScroll__["a" /* ProductionScroll */](),
        new __WEBPACK_IMPORTED_MODULE_13__ScreenUnpack__["a" /* ScreenUnpack */](result["AHIBeautifier_Data"][5]),
        new __WEBPACK_IMPORTED_MODULE_15__CommandCorrecter__["a" /* CommandCorrecter */](),
        new __WEBPACK_IMPORTED_MODULE_16__CalculatorButton__["a" /* CalculatorButton */](),
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
                    const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["p" /* toFixed */])(totalCents / count / 100, 2);
                    priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
                }
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
            if (tile.firstChild != undefined && tile.firstChild.id == "pmmg-load-success") {
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
            if (tile.firstChild != undefined && tile.firstChild.id == "pmmg-reload") {
                __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()](tile.firstChild, parameters, this.apikey, this.webappID, this.username, burn, burnSettings, this.modules, this.result);
                return;
            }
            tile.classList.add("xit-tile");
            const refreshButton = document.createElement("div");
            refreshButton.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("⟳"));
            refreshButton.classList.add("button-upper-right");
            refreshButton.classList.add(this.tag);
            refreshButton.style.fontSize = "16px";
            refreshButton.style.paddingTop = "12px";
            refreshButton.id = "refresh";
            (buffer.children[3] || buffer.children[2]).insertBefore(refreshButton, (buffer.children[3] || buffer.children[2]).firstChild);
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
                tile.firstChild.id = "pmmg-load-success";
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
        }
        return;
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
    return;
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
    else {
        return 0;
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
    return;
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
    return;
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
    const screenNameElem = document.querySelector(__WEBPACK_IMPORTED_MODULE_4__Selector__["a" /* Selector */].ScreenName);
    const screenName = screenNameElem ? screenNameElem.textContent : "";
    const dispSettings = result["AHIBeautifier_Data"][8][screenName + parameters[1] + (parameters[2] || "")] || [1, 1, 1, 1];
    const table = document.createElement("table");
    const settingsDiv = document.createElement("div");
    settingsDiv.style.display = "flex";
    tile.appendChild(settingsDiv);
    settingsDiv.appendChild(createSettingsButton("RED", 22.025, dispSettings[0], function () {
        dispSettings[0] = dispSettings[0] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        result["AHIBeautifier_Data"][8][screenName + parameters[1] + (parameters[2] || "")] = dispSettings;
        setEnabledSettings(result);
    }));
    settingsDiv.appendChild(createSettingsButton("YELLOW", 40.483, dispSettings[1], function () {
        dispSettings[1] = dispSettings[1] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        result["AHIBeautifier_Data"][8][screenName + parameters[1] + (parameters[2] || "")] = dispSettings;
        setEnabledSettings(result);
    }));
    settingsDiv.appendChild(createSettingsButton("GREEN", 34.65, dispSettings[2], function () {
        dispSettings[2] = dispSettings[2] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        result["AHIBeautifier_Data"][8][screenName + parameters[1] + (parameters[2] || "")] = dispSettings;
        setEnabledSettings(result);
    }));
    settingsDiv.appendChild(createSettingsButton("INF", 19.6, dispSettings[3], function () {
        dispSettings[3] = dispSettings[3] ? 0 : 1;
        UpdateBurn(table, dispSettings);
        result["AHIBeautifier_Data"][8][screenName + parameters[1] + (parameters[2] || "")] = dispSettings;
        setEnabledSettings(result);
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
            burnColumn.classList.add("burn-infinite");
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
        const needAmt = burn > result["AHIBeautifier_Data"][7][1] || cons[material] > 0 ? 0 : (burn - result["AHIBeautifier_Data"][7][1]) * cons[material];
        needColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(needAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })));
        row.appendChild(needColumn);
        row.appendChild(burnColumn);
    }
    UpdateBurn(table, dispSettings);
    tile.appendChild(table);
    return;
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
    });
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
    return;
}
function createSettingsButton(text, width, toggled, f) {
    const button = document.createElement("span");
    const bar = document.createElement("div");
    if (toggled) {
        bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarToggled);
    }
    else {
        bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarUntoggled);
    }
    const textBox = document.createElement("div");
    textBox.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsText);
    textBox.textContent = text;
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsButton);
    bar.style.width = width + "px";
    bar.style.maxWidth = width + "px";
    button.appendChild(bar);
    button.appendChild(textBox);
    button.addEventListener("click", function () {
        if (toggled) {
            bar.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarToggled);
            bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarUntoggled);
            toggled = false;
        }
        else {
            bar.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarUntoggled);
            bar.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SettingsBarToggled);
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(point));
        }
    }
    tile.appendChild(table);
    return;
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
    const buyHeader = document.createElement("h3");
    buyHeader.appendChild(document.createTextNode("Buying"));
    buyHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(buyHeader);
    const buyTable = document.createElement("table");
    tile.appendChild(buyTable);
    const buyHead = document.createElement("thead");
    buyTable.appendChild(buyHead);
    const buyHeadRow = document.createElement("tr");
    buyHead.appendChild(buyHeadRow);
    for (let title of ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        buyHeadRow.appendChild(header);
    }
    const buyBody = document.createElement("tbody");
    buyTable.appendChild(buyBody);
    var seenContracts = [];
    contractData.forEach(contract => {
        if (contract["Status"] === "FULFILLED" || contract["Status"] === "BREACHED" || contract["Status"] === "TERMINATED" || contract["Status"] === "CANCELLED" || contract["Status"] === "REJECTED") {
            return;
        }
        if (seenContracts.includes(contract["ContractLocalId"])) {
            return;
        }
        const offset = contract["Conditions"].length - 2;
        if ((contract["Conditions"].length == 2 && contract["Party"] === "PROVIDER") || (contract["Conditions"].length == 3 && contract["Party"] === "CUSTOMER")) {
            const line = document.createElement("tr");
            buyBody.appendChild(line);
            const materialColumn = document.createElement("td");
            materialColumn.style.width = "32px";
            materialColumn.style.paddingLeft = "10px";
            const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(contract["Conditions"][1 + offset]["MaterialTicker"], "prun-remove-js", contract["Conditions"][1 + offset]["MaterialAmount"], false, true);
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
            const pendingCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("⬤");
            pendingCheck.style.color = contract["Conditions"][offset]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            pendingCheck.style.fontWeight = "bold";
            pendingColumn.style.textAlign = "center";
            pendingColumn.appendChild(pendingCheck);
            line.appendChild(pendingColumn);
            const provColumn = document.createElement("td");
            const provCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["Conditions"][1 + offset]["Status"] === "FULFILLED" ? "✓" : "X");
            provCheck.style.color = contract["Conditions"][1 + offset]["Status"] === "PENDING" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success;
            provCheck.style.fontWeight = "bold";
            provColumn.style.textAlign = "center";
            provColumn.appendChild(provCheck);
            line.appendChild(provColumn);
            const payColumn = document.createElement("td");
            const payCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["Conditions"][1 + offset]["Status"] === "FULFILLED" ? "✓" : "X");
            payCheck.style.color = contract["Conditions"][1 + offset]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            payCheck.style.fontWeight = "bold";
            payColumn.style.textAlign = "center";
            payColumn.appendChild(payCheck);
            line.appendChild(payColumn);
            const pickUp = document.createElement("td");
            const pickUpCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(offset == 1 ? (contract["Conditions"][2]["Status"] === "FULFILLED" ? "✓" : "X") : "");
            pickUpCheck.style.fontWeight = "bold";
            pickUp.style.textAlign = "center";
            pickUp.appendChild(pickUpCheck);
            line.appendChild(pickUp);
            seenContracts.push(contract["ContractLocalId"]);
        }
    });
    const sellHeader = document.createElement("h3");
    sellHeader.appendChild(document.createTextNode("Selling"));
    sellHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(sellHeader);
    const sellTable = document.createElement("table");
    tile.appendChild(sellTable);
    const sellHead = document.createElement("thead");
    sellTable.appendChild(sellHead);
    const sellHeadRow = document.createElement("tr");
    sellHead.appendChild(sellHeadRow);
    for (let title of ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        sellHeadRow.appendChild(header);
    }
    const sellBody = document.createElement("tbody");
    sellTable.appendChild(sellBody);
    seenContracts = [];
    contractData.forEach(contract => {
        if (contract["Status"] === "FULFILLED" || contract["Status"] === "BREACHED" || contract["Status"] === "TERMINATED" || contract["Status"] === "CANCELLED" || contract["Status"] === "REJECTED") {
            return;
        }
        if (seenContracts.includes(contract["ContractLocalId"])) {
            return;
        }
        const offset = contract["Conditions"].length - 2;
        if ((contract["Conditions"].length == 2 && contract["Party"] === "CUSTOMER") || (contract["Conditions"].length == 3 && contract["Party"] === "PROVIDER")) {
            const line = document.createElement("tr");
            sellBody.appendChild(line);
            const materialColumn = document.createElement("td");
            materialColumn.style.width = "32px";
            materialColumn.style.paddingLeft = "10px";
            const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* createMaterialElement */])(contract["Conditions"][0]["MaterialTicker"], "prun-remove-js", contract["Conditions"][0]["MaterialAmount"], false, true);
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
            const pendingCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("⬤");
            pendingCheck.style.color = contract["Conditions"][2 * offset]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            pendingCheck.style.fontWeight = "bold";
            pendingColumn.style.textAlign = "center";
            pendingColumn.appendChild(pendingCheck);
            line.appendChild(pendingColumn);
            const provColumn = document.createElement("td");
            const provCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["Conditions"][offset]["Status"] === "FULFILLED" ? "✓" : "X");
            provCheck.style.color = contract["Conditions"][offset]["Status"] === "PENDING" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success;
            provCheck.style.fontWeight = "bold";
            provColumn.style.textAlign = "center";
            provColumn.appendChild(provCheck);
            line.appendChild(provColumn);
            const payColumn = document.createElement("td");
            const payCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["Conditions"][1]["Status"] === "FULFILLED" ? "✓" : "X");
            payCheck.style.color = contract["Conditions"][1]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            payCheck.style.fontWeight = "bold";
            payColumn.style.textAlign = "center";
            payColumn.appendChild(payCheck);
            line.appendChild(payColumn);
            const pickUp = document.createElement("td");
            const pickUpCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(offset == 1 ? (contract["Conditions"][2]["Status"] === "FULFILLED" ? "✓" : "X") : "");
            pickUpCheck.style.color = offset == 1 ? (contract["Conditions"][2]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure) : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Standard;
            pickUpCheck.style.fontWeight = "bold";
            pickUp.style.textAlign = "center";
            pickUp.appendChild(pickUpCheck);
            line.appendChild(pickUp);
            seenContracts.push(contract["ContractLocalId"]);
        }
    });
    const shipHeader = document.createElement("h3");
    shipHeader.appendChild(document.createTextNode("Shipping"));
    shipHeader.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].SidebarSectionHead);
    tile.appendChild(shipHeader);
    const shipTable = document.createElement("table");
    tile.appendChild(shipTable);
    const shipHead = document.createElement("thead");
    shipTable.appendChild(shipHead);
    const shipHeadRow = document.createElement("tr");
    shipHead.appendChild(shipHeadRow);
    for (let title of ["Material", "Name", "Partner", "Fulfilled", "Provis.", "Paid", "Pick Up", "Deliver"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        shipHeadRow.appendChild(header);
    }
    const shipBody = document.createElement("tbody");
    shipTable.appendChild(shipBody);
    seenContracts = [];
    contractData.forEach(contract => {
        if (contract["Status"] === "FULFILLED" || contract["Status"] === "BREACHED" || contract["Status"] === "TERMINATED" || contract["Status"] === "CANCELLED" || contract["Status"] === "REJECTED") {
            return;
        }
        if (seenContracts.includes(contract["ContractLocalId"])) {
            return;
        }
        if (contract["Conditions"].length == 4) {
            var conditions = [];
            for (let condType of ["SHIPMENT_PROVISION", "PAYMENT", "SHIPMENT_PICKUP", "SHIPMENT_DELIVERY"]) {
                contract["Conditions"].forEach(condition => {
                    if (condition["Type"] === condType) {
                        conditions.push(condition);
                        return;
                    }
                });
            }
            const line = document.createElement("tr");
            shipBody.appendChild(line);
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
            const pendingCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("⬤");
            pendingCheck.style.color = pending ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            pendingCheck.style.fontWeight = "bold";
            pendingColumn.style.textAlign = "center";
            pendingColumn.appendChild(pendingCheck);
            line.appendChild(pendingColumn);
            const provColumn = document.createElement("td");
            const provCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(conditions[0]["Status"] === "FULFILLED" ? "✓" : "X");
            provCheck.style.color = conditions[0]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            provCheck.style.fontWeight = "bold";
            provColumn.style.textAlign = "center";
            provColumn.appendChild(provCheck);
            line.appendChild(provColumn);
            const payColumn = document.createElement("td");
            const payCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(conditions[1]["Status"] === "FULFILLED" ? "✓" : "X");
            payCheck.style.color = conditions[1]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            payCheck.style.fontWeight = "bold";
            payColumn.style.textAlign = "center";
            payColumn.appendChild(payCheck);
            line.appendChild(payColumn);
            const pickUp = document.createElement("td");
            const pickUpCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(conditions[2]["Status"] === "FULFILLED" ? "✓" : "X");
            pickUpCheck.style.color = conditions[2]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            pickUpCheck.style.fontWeight = "bold";
            pickUp.style.textAlign = "center";
            pickUp.appendChild(pickUpCheck);
            line.appendChild(pickUp);
            const delivColumn = document.createElement("td");
            const delivCheck = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(conditions[3]["Status"] === "FULFILLED" ? "✓" : "X");
            delivCheck.style.color = conditions[3]["Status"] === "FULFILLED" ? __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["e" /* TextColors */].Failure;
            delivCheck.style.fontWeight = "bold";
            delivColumn.style.textAlign = "center";
            delivColumn.appendChild(delivCheck);
            line.appendChild(delivColumn);
            seenContracts.push(contract["ContractLocalId"]);
        }
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



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class CalculatorButton {
    constructor() {
        this.tag = "pb-calc";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* genericCleanup */])(this.tag);
    }
    run() {
        const calcTags = ["LM", "CX", "XIT"];
        calcTags.forEach(tag => {
            const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getBuffers */])(tag);
            buffers.forEach(buffer => {
                const calcDiv = document.createElement("div");
                calcDiv.classList.add(this.tag);
                calcDiv.classList.add("button-upper-right");
                (buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild.id == "refresh" ? (buffer.children[3] || buffer.children[2]).children[1] : (buffer.children[3] || buffer.children[2]).firstChild);
                calcDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("🖩", this.tag));
                calcDiv.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* showBuffer */])("XIT CALCULATOR"); });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatorButton;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class ContractDrafts {
    constructor(prices) {
        this.cleanups = [];
        this.tag = "pb-contd";
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["l" /* getBuffers */])("CONTD").forEach(buffer => {
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
                    inputPriceDiv.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* createTextSpan */])(display, this.tag), inputPriceDiv.firstChild);
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
                inputPriceDiv.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* createTextSpan */])(display, this.tag), inputPriceDiv.firstChild);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContractDrafts;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTRkNzViNDQxMTUwYjQ0NTdjMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZHVjdGlvblNjcm9sbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyJdLCJuYW1lcyI6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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNyd0JLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTtBQUNJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBOzs7Ozs7OztBQ3BaSDtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHFEQUFxRCx5RUFBeUUscURBQXFEO0FBQ3ZQLDJDQUEyQyxxRUFBYztBQUN6RDtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNGQ3NWI0NDExNTBiNDQ1N2MzNCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cmluZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWlja1Jvd0J1dHRvbihzaG9ydFRleHRCb2xkLCBzaG9ydFRleHROb3JtYWwsIGxvbmdUZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiTUFwY3NZRWQ3K3dxSUpUZmJIUDF5QT09IGZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PSBrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cIkQrR0poSUdtQzJlRms1OWR2clkrU2c9PVwiPnt7OnNob3J0Qm9sZH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ezpzaG9ydE5vcm1hbH19PC9zcGFuPjxzcGFuIGNsYXNzPVwiY0txekVEZXlLYnpiOW5QcnkwRGtmdz09XCI+OiB7ezpsb25nVGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7ezpzaG9ydEJvbGR9fVwiLCBzaG9ydFRleHRCb2xkKVxyXG4gICAgICAgIC5yZXBsYWNlKFwie3s6c2hvcnROb3JtYWx9fVwiLCBzaG9ydFRleHROb3JtYWwpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJ7ezpsb25nVGV4dH19XCIsIGxvbmdUZXh0KTtcclxuICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShyZXN1bHQpO1xyXG4gICAgbm9kZS5vbmNsaWNrID0gKCkgPT4geyBzaG93QnVmZmVyKGNvbW1hbmQpOyB9O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlZFNlY29uZHMpIHtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCJAXCIpWzFdO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiIEJhc2VcIilbMF07XHJcbiAgICAgICAgdmFyIGh5cGhlbnMgPSB0ZXh0LnNwbGl0KFwiIC0gXCIpO1xyXG4gICAgICAgIHRleHQgPSBoeXBoZW5zW2h5cGhlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGVuZGluZyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChlbmRpbmdbMV0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRpbmdbMV0gKyBlbmRpbmdbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIiwgYW1vdW50ID0gXCJub25lXCIsIHRleHQgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbdGlja2VyXSA9PSB1bmRlZmluZWQgJiYgdGlja2VyICE9IFwiU0hQVFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYW1lID0gKE1hdGVyaWFsTmFtZXNbdGlja2VyXSB8fCBbXCJTaGlwbWVudFwiXSlbMF07XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW3VuZGVmaW5lZCwgXCJzaGlwbWVudFwiXSlbMV07XHJcbiAgICBjb25zdCB0b3RhbFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG90YWxQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJUNUM0NXBUT1c5UVR6b2tXUHFMUUpnPT1cIik7XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUuaGVpZ2h0ID0gXCIzMnB4XCI7XHJcbiAgICAgICAgdG90YWxQaWN0dXJlLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUuaGVpZ2h0ID0gXCI0OHB4XCI7XHJcbiAgICAgICAgdG90YWxQaWN0dXJlLnN0eWxlLndpZHRoID0gXCI0OHB4XCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXRlcmlhbC5jbGFzc0xpc3QuYWRkKFwiRTdPTFVDaFlDZXhNVWdPb2xLWWpPUT09XCIpO1xyXG4gICAgbWF0ZXJpYWwudGl0bGUgPSBuYW1lO1xyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUuaGVpZ2h0ID0gXCIzMnB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5mb250U2l6ZSA9IFwiMTAuNTZweFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUuaGVpZ2h0ID0gXCI0OHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5mb250U2l6ZSA9IFwiMTUuODRweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLm1hcmdpbiA9IFwiMnB4IGF1dG9cIjtcclxuICAgIH1cclxuICAgIG1hdGVyaWFsLnN0eWxlLmJhY2tncm91bmQgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMF07XHJcbiAgICBtYXRlcmlhbC5zdHlsZS5jb2xvciA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVsxXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgdG90YWxQaWN0dXJlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJEaXYuY2xhc3NMaXN0LmFkZChcIm5sUWlycFNrZExIMGE2K0M0bGhkdUE9PVwiKTtcclxuICAgIGNvbnN0IG1hdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1hdFRleHQuY2xhc3NMaXN0LmFkZChcInJqcFlMMWk5Y1ptZjQ3Zk05cVd5WlE9PVwiKTtcclxuICAgIG1hdFRleHQudGV4dENvbnRlbnQgPSB0aWNrZXI7XHJcbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQobWF0VGV4dCk7XHJcbiAgICBtYXRlcmlhbC5hcHBlbmRDaGlsZChzdWJEaXYpO1xyXG4gICAgdG90YWxQaWN0dXJlLmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgIGlmIChhbW91bnQgIT0gXCJub25lXCIpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG51bWJlckRpdi5jbGFzc0xpc3QuYWRkKFwiRzM3ZlVKUHdNb0o2ZktIREdlZystdz09XCIpO1xyXG4gICAgICAgIGNvbnN0IG51bWJlclN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJiSGpsRFBCODRVejB5VW52SGEtWTVBPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJfNk9LNnNYTmpJSWhxM05ERDlFTFZHdz09XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi5jbGFzc0xpc3QuYWRkKFwiZ2w3M3ZucDVqbytWYWVwRFJvY3VuQT09XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi50ZXh0Q29udGVudCA9IGFtb3VudDtcclxuICAgICAgICBudW1iZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyU3ViRGl2KTtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcclxuICAgIH1cclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIHJldHVybiB0b3RhbFBpY3R1cmU7XHJcbiAgICB9XHJcbiAgICB2YXIgc3VwZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1cGVyRWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQodG90YWxQaWN0dXJlKTtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLndpZHRoID0gXCI2NHB4XCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUubWFyZ2luID0gXCIzcHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5wYWRkaW5nID0gXCJhdXRvXCI7XHJcbiAgICBpZiAodGV4dCAhPSBmYWxzZSkge1xyXG4gICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjJweFwiO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3VwZXJFbGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXBlckVsZW07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmsodGV4dCwgY29tbWFuZCkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoY29tbWFuZCk7IH0pO1xyXG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaW5rRGl2LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgbGlua0Rpdi5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaW5rRGl2O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QnVmZmVyKGNvbW1hbmQpIHtcclxuICAgIGNvbnN0IGFkZFN1Ym1pdENvbW1hbmQgPSAoaW5wdXQsIGNtZCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5OZXdCRlJCdXR0b24pO1xyXG4gICAgaWYgKGJ1dHRvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gTnVsbFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xpY2soKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUoaW5wdXQsIHZhbHVlKSB7XHJcbiAgICB2YXIgcHJvcERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvd1tcIkhUTUxJbnB1dEVsZW1lbnRcIl0ucHJvdG90eXBlLCBcInZhbHVlXCIpO1xyXG4gICAgaWYgKHByb3BEZXNjcmlwdG9yID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyID0gcHJvcERlc2NyaXB0b3Iuc2V0O1xyXG4gICAgaWYgKG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbmF0aXZlSW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XHJcbiAgICB2YXIgaW5wdXRFdmVudCA9IG5ldyBFdmVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0RXZlbnQuaW5pdEV2ZW50KCdpbnB1dCcsIHRydWUsIGZhbHNlKTtcclxuICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoaW5wdXRFdmVudCk7XHJcbn1cclxuZnVuY3Rpb24gbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoc2VsZWN0b3IsIGNhbGxiYWNrLCBvbmx5T25jZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IGdldEVsZW1lbnRzRnJvbU5vZGVzID0gKG5vZGVzKSA9PiAoQXJyYXkuZnJvbShub2RlcykpLmZsYXRNYXAobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSAzID8gbnVsbCA6IEFycmF5LmZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xyXG4gICAgbGV0IG9uTXV0YXRpb25zT2JzZXJ2ZWQgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHNGcm9tTm9kZXMobXV0YXRpb24uYWRkZWROb2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlPbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsZXQgY29udGFpbmVyU2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuICAgIGxldCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93W1wiTXV0YXRpb25PYnNlcnZlclwiXSB8fCB3aW5kb3dbXCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyXCJdO1xyXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGlvbnNPYnNlcnZlZCk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uID0gMikge1xyXG4gICAgY29uc3QgcG93ZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwb3dlcikgLyBwb3dlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVycyhidWZmZXJDb2RlKSB7XHJcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKC4sICcke2J1ZmZlckNvZGV9JyldLy4uLy4uYCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9UWVBFLCBudWxsKTtcclxuICAgIHZhciBidWZmZXJzID0gW107XHJcbiAgICB2YXIgbm9kZTtcclxuICAgIHdoaWxlIChub2RlID0gbm9kZXMuaXRlcmF0ZU5leHQoKSkge1xyXG4gICAgICAgIGJ1ZmZlcnMucHVzaChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidWZmZXJzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5WFBhdGgoeHBhdGgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKHhwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1VOT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlKHRhYmxlLCBjb2x1bW4sIHNvcnRUeXBlKSB7XHJcbiAgICB2YXIgc29ydGVyID0gW107XHJcbiAgICBpZiAodGFibGUuY2hpbGRyZW5bMV0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLmNoaWxkcmVuWzFdLmNoaWxkcmVuKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gcm93c1tpXS5jaGlsZHJlbltjb2x1bW5dO1xyXG4gICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvcnRlci5wdXNoKFtpdGVtLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQsIHJvd3NbaV1dKTtcclxuICAgIH1cclxuICAgIGlmIChzb3J0VHlwZSA9PSBcImFscGhcIikge1xyXG4gICAgICAgIHNvcnRlci5zb3J0KHRhYmxlU29ydEFscGgpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc29ydGVyKTtcclxuICAgIHNvcnRlci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRhYmxlLmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgaXRlbVsxXSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB0YWJsZVNvcnRBbHBoKGEsIGIpIHtcclxuICAgIHJldHVybiBhWzBdLmxvY2FsZUNvbXBhcmUoYlswXSk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbC50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU2VsZWN0b3IgPSB7XHJcbiAgICBMTUNvbW1vZGl0eUFkVGV4dDogXCJkaXZbY2xhc3N+PSdTeE1vbmFpY1ByclM0SllUdmUrLVJBPT0nXVwiLFxyXG4gICAgTE1Db21tb2RpdHlBZFByaWNlU3BhbjogXCJkaXZbY2xhc3N+PSdaU2NHOUFqY1RSZ0orTVFPWEx1Q1dBPT0nXSA+IHNwYW5cIixcclxuICAgIFByb2RJdGVtOiBcIkpLdFQ0cnJJQzBHa1BFQW5abFljU2c9PVwiLFxyXG4gICAgUHJvZFF1ZXVlVGFibGU6IFwidGFibGVbY2xhc3N+PSdfMVFBaHBEVWhkKzdIV0p4cEh0b1dKUT09J11cIixcclxuICAgIFByb2RRdWV1ZUhlYWRlcjogXCJsZ0UxKys3Mys2b1l4VlNhT3Rpay1nPT1cIixcclxuICAgIEJ1ZmZlckhlYWRlcjogJ2UyUEtSS1pVVzZLOXhMS05BUDU2Y2c9PSBZdHU2Zm82akxiazQzWXFPMHlXa1FBPT0nLFxyXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxyXG4gICAgTE1Qb3N0Rm9ybTogXCJhcnRpY2xlW2NsYXNzfj0nencrMHpRQlp2YWxhN3lHcCtBZDNEdz09J10gPiBkaXYgPiBkaXYgPiBmb3JtXCIsXHJcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcIiN1bmRlZmluZWQgPiBkaXYgPiBkaXYuTjMyR0w4Q0pCT3czLXJOeDBQQlprUVxcXFw9XFxcXD0uZlRUNTJpXFxcXCsxb0ZhdXhIT2pWZkdUd3dcXFxcPVxcXFw9Lk83Ulg0elhMNGd6SExvT3dUVmJyWHdcXFxcPVxcXFw9ID4gZGl2Ll80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnXFxcXD1cXFxcPS5SVXV3MTFiNjMxZVhyUVlwLUlkMndnXFxcXD1cXFxcPVwiLFxyXG4gICAgWElUVGlsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgWElUVGlsZUZsb2F0OiBcIiNUT1VSX1RBUkdFVF9FTVBUWV9USUxFID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgQnVmZmVyVGl0bGU6IFwiXzRLc2kwOVZYaGZ2a0dndFBiaENFeWc9PSBSVXV3MTFiNjMxZVhyUVlwLUlkMndnPT1cIixcclxuICAgIE5vdGlmaWNhdGlvbjogXCJkaXZbY2xhc3N+PSdfNmlUTUpaK3htLVBiRytuV29QcWg3Zz09J11cIixcclxuICAgIFByb2RRdWV1ZTogXCJkaXZbY2xhc3N+PSdvMVljWXJEa3h0OUl2TjRBcENFakl3PT0nXVwiLFxyXG4gICAgUHJvZFdpbmRvdzogXCJkaXZbY2xhc3N+PSdJdzF6TXRjckI3TkZDeEFHNHhUejhnPT0nXVwiLFxyXG4gICAgUHJvZFBhbmVsOiBcImRpdltjbGFzc349J2dlY0k1dUdCbHV2alA1R0NSazNkSEE9PSddXCIsXHJcbiAgICBOZXdCRlJCdXR0b246IFwiVE9VUl9UQVJHRVRfQlVUVE9OX0JVRkZFUl9ORVdcIixcclxuICAgIFdob2xlV2luZG93OiBcIiNjb250YWluZXJcIixcclxuICAgIEJ1ZmZlclRleHRGaWVsZDogXCIuVW9Pb2g5RUd4N1lpaGV6a1NHZVYyUVxcXFw9XFxcXD1cIixcclxuICAgIEJ1ZmZlckxpc3Q6IFwiI2NvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMylcIixcclxuICAgIFNjcmVlbkNvbnRyb2xzOiBcIlRPVVJfVEFSR0VUX1NDUkVFTl9DT05UUk9MU1wiLFxyXG4gICAgVHJhbnNmZXJBcmVhOiBcImRpdltjbGFzc349J0I0Y2NDSGhFaDdXMHhkLVlZZzNxVGc9PSddXCIsXHJcbiAgICBUcmFuc2ZlckZpZWxkOiBcImRpdltjbGFzc349J3h1eTJ3cEJDZHpnYzhHM3czQWxYVHc9PSddXCIsXHJcbiAgICBMZWZ0U2lkZWJhcjogXCJUT1VSX1RBUkdFVF9TSURFQkFSX0xFRlRfMDJcIixcclxuICAgIEJ1ZmZlckFyZWE6IFwiZGl2W2NsYXNzfj0nWmFwaFZWK2Z5YUlpTENKeUJDc1pDQT09J11cIixcclxuICAgIENYT1NUYWJsZTogXCJkaXZbY2xhc3N+PSdnZWNJNXVHQmx1dmpQNUdDUmszZEhBPT0nXVwiLFxyXG4gICAgU2NyZWVuTmFtZTogXCJzcGFuW2NsYXNzfj0nSXVYb3BvcnJEZjdxeElsLW1rTldoQT09J11cIixcclxuICAgIENvbnRERm9ybTogXCJkaXZbY2xhc3N+PSdUSUdKaGVOaWxUenVDaGM4KzBFMzhBPT0nXVwiLFxyXG4gICAgQ29uZGl0aW9uRWRpdG9yOiBcImRpdltjbGFzc349J05MT3JIN2hGNWZiS0llc3FXM3VTa0E9PSddXCJcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2VsZWN0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEN1cnJlbmN5U3ltYm9scyA9IHtcclxuICAgIFwiQ0lTXCI6IFwi4oKhXCIsXHJcbiAgICBcIkFJQ1wiOiBcIuKCs1wiLFxyXG4gICAgXCJOQ0NcIjogXCLigqZcIixcclxuICAgIFwiSUNBXCI6IFwix4JcIixcclxuICAgIFwiRUNEXCI6IFwi4oKsXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBSYXRpbmdDb2xvcnMgPSB7XHJcbiAgICBcIlBcIjogXCIjMWI2YjljXCIsXHJcbiAgICBcIlVcIjogXCIjOGIyMTFlXCIsXHJcbiAgICBcIkZcIjogXCIjZTI2YzM3XCIsXHJcbiAgICBcIkVcIjogXCIjZTc3ODJiXCIsXHJcbiAgICBcIkRcIjogXCIjZTg3ZDI4XCIsXHJcbiAgICBcIkNcIjogXCIjZWQ4OTFjXCIsXHJcbiAgICBcIkJcIjogXCIjZjE5NTEwXCIsXHJcbiAgICBcIkFcIjogXCIjZjZhMjA0XCJcclxufTtcclxuZXhwb3J0IGNvbnN0IFBsYW5ldENvbW1hbmRzID0gW1wiQURNXCIsIFwiQlNDXCIsIFwiQ09HQ1wiLCBcIkNPR0NQRVhcIiwgXCJDT0dDVVwiLCBcIkZMVFBcIiwgXCJMUlwiLCBcIkxNUFwiLCBcIkxNXCIsIFwiUExJXCIsIFwiUE9QSVwiLCBcIlBPUFJcIiwgXCJQUFNcIiwgXCJTSFlcIiwgXCJXQVJcIl07XHJcbmV4cG9ydCBjb25zdCBQbGFuZXROYW1lcyA9IFtcclxuICAgIFtcIkdBTExVU1wiLCBcIkFNLTc4M2JcIl0sXHJcbiAgICBbXCJFTUVOVElPUlwiLCBcIkFNLTc4M2NcIl0sXHJcbiAgICBbXCJOT1ZBIEhPTlNIVVwiLCBcIkJTLTc4OGNcIl0sXHJcbiAgICBbXCJQWVJHT1NcIiwgXCJDSC03NzFhXCJdLFxyXG4gICAgW1wiVEFMT1NJQVwiLCBcIkRDLTgyM2JcIl0sXHJcbiAgICBbXCJNQU5JRk9MRFwiLCBcIkVMLTE3OWJcIl0sXHJcbiAgICBbXCJOT1ZBIFVOQUxBU0tBXCIsIFwiRVotNDc2YlwiXSxcclxuICAgIFtcIkJPVUNIRVJcIiwgXCJGSy03OTRiXCJdLFxyXG4gICAgW1wiQ0hVXCIsIFwiR1ktMTEwY1wiXSxcclxuICAgIFtcIlBPU0VJRE9OXCIsIFwiSE0tMDQ5YlwiXSxcclxuICAgIFtcIkFQT1RIRUNBUllcIiwgXCJJQS02MDNiXCJdLFxyXG4gICAgW1wiRUxFQ1RST05JQ0FcIiwgXCJJWS0wMjhjXCJdLFxyXG4gICAgW1wiTkVNRVNJU1wiLCBcIkpTLTI5OWFcIl0sXHJcbiAgICBbXCJHSUJTT05cIiwgXCJKUy05NTJjXCJdLFxyXG4gICAgW1wiQVVTVFJBTElBXCIsIFwiS0ktNDQ2YVwiXSxcclxuICAgIFtcIkhFUk1FU1wiLCBcIktJLTQ0OGJcIl0sXHJcbiAgICBbXCJST0NLXCIsIFwiS1EtOTY2YlwiXSxcclxuICAgIFtcIk1JTExJV0FZU1wiLCBcIktXLTAyMGNcIl0sXHJcbiAgICBbXCJHRUlESSBQUklNRVwiLCBcIktXLTM1OGJcIl0sXHJcbiAgICBbXCJFVEhFUldJTkRcIiwgXCJLVy02ODhjXCJdLFxyXG4gICAgW1wiS0lOWkFcIiwgXCJMRy00MThiXCJdLFxyXG4gICAgW1wiUExBTkVUIE1DIFBMQU5FVEZBQ0VcIiwgXCJMRy05MTNlXCJdLFxyXG4gICAgW1wiR1JJRkZPTlNUT05FXCIsIFwiTFMtMzAwY1wiXSxcclxuICAgIFtcIkpVUkFcIiwgXCJPRi0yNTlkXCJdLFxyXG4gICAgW1wiQkVSVEhJRVJcIiwgXCJPRi0zNzViXCJdLFxyXG4gICAgW1wiREFOQUtJTFwiLCBcIk9ULTQ0MmJcIl0sXHJcbiAgICBbXCJJSVJPTlwiLCBcIk9ULTU4MGFcIl0sXHJcbiAgICBbXCJNT05URU1cIiwgXCJPVC01ODBiXCJdLFxyXG4gICAgW1wiVkFMTElTXCIsIFwiT1QtNTgwY1wiXSxcclxuICAgIFtcIlBBTExBREFcIiwgXCJPVC01ODBkXCJdLFxyXG4gICAgW1wiUFJJU01cIiwgXCJPVC04ODlhXCJdLFxyXG4gICAgW1wiU0FMQURJTlwiLCBcIlBHLTg5OWJcIl0sXHJcbiAgICBbXCJDSVJDRVwiLCBcIlFRLTAwMWJcIl0sXHJcbiAgICBbXCJDRUxFQkRJTFwiLCBcIlFRLTY0NWJcIl0sXHJcbiAgICBbXCJNQUxBSEFUXCIsIFwiUkMtMDQwYlwiXSxcclxuICAgIFtcIklST05GT1JHRVwiLCBcIlJDLTA0MGNcIl0sXHJcbiAgICBbXCJJQ0UgU1RBVElPTiBBTFBIQVwiLCBcIlNFLTExMGNcIl0sXHJcbiAgICBbXCJTSEVPTFwiLCBcIlRELTIwM2JcIl0sXHJcbiAgICBbXCJSSEFaRVNcIiwgXCJURC0yMjhiXCJdLFxyXG4gICAgW1wiS0FUT0FcIiwgXCJVVi0zNTFhXCJdLFxyXG4gICAgW1wiWUFOTklDS1wiLCBcIlVWLTM1MWJcIl0sXHJcbiAgICBbXCJVTUJSQVwiLCBcIlVWLTM1MWNcIl0sXHJcbiAgICBbXCJQUk9YSU9OXCIsIFwiVVYtNzk2YlwiXSxcclxuICAgIFtcIlBST01JVE9SXCIsIFwiVkgtMzMxYVwiXSxcclxuICAgIFtcIkhFTElPTiBQUklNRVwiLCBcIlZILTMzMWRcIl0sXHJcbiAgICBbXCJBVkFMT05cIiwgXCJWSC0zMzFnXCJdLFxyXG4gICAgW1wiSFlEUk9OXCIsIFwiVkgtMzMxaVwiXSxcclxuICAgIFtcIk1JTUFSXCIsIFwiV0MtNzAyYlwiXSxcclxuICAgIFtcIkxJQkVSVEFTXCIsIFwiWEgtNTk0YVwiXSxcclxuICAgIFtcIktJUlVOQVwiLCBcIlhILTU5NGJcIl0sXHJcbiAgICBbXCJDT1JURVpcIiwgXCJYSC01OTRjXCJdLFxyXG4gICAgW1wiS1VCXCIsIFwiWUktMDU5ZlwiXSxcclxuICAgIFtcIkhBUlBJTkFcIiwgXCJZSS0yMDloXCJdLFxyXG4gICAgW1wiQVJDQURJQVwiLCBcIllJLTY4M2NcIl0sXHJcbiAgICBbXCJWRVJEQU5UXCIsIFwiWUktNzE1YlwiXSxcclxuICAgIFtcIk5JS0VcIiwgXCJaVi0xOTRhXCJdLFxyXG4gICAgW1wiSEVQSEFFU1RVU1wiLCBcIlpWLTMwN2NcIl0sXHJcbiAgICBbXCJQSE9CT1NcIiwgXCJaVi0zMDdkXCJdLFxyXG4gICAgW1wiREVJTU9TXCIsIFwiWlYtNzU5Y1wiXSxcclxuICAgIFtcIkhBUk1PTklBXCIsIFwiWlYtODk2YlwiXSxcclxuICAgIFtcIlBST01cIiwgXCJWSC0zMzFhXCJdLFxyXG4gICAgW1wiR1JJRkZcIiwgXCJMUy0zMDBjXCJdXHJcbl07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbE5hbWVzID0ge1xyXG4gICAgXCJBQVJcIjogW1wiQW50ZW5uYSBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQUJIXCI6IFtcIkFkdmFuY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFDU1wiOiBbXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFERVwiOiBbXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFEUlwiOiBbXCJBdXRvLURvY1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJBRFNcIjogW1wiQXVkaW8gRGlzdHJpYnV0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQUVGXCI6IFtcIkFlcm9zdGF0IEZvdW5kYXRpb25cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFFTlwiOiBbXCJBZHZhbmNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlBcIjogW1wiQWR2YW5jZWQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBRlJcIjogW1wiQWR2YW5jZWQgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkFHU1wiOiBbXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSFBcIjogW1wiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFJUlwiOiBbXCJBaXIgU2NydWJiZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkFMXCI6IFtcIkFsdW1pbml1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQUxFXCI6IFtcIlN0ZWxsYXIgUGFsZSBBbGVcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQUxHXCI6IFtcIlByb3RlaW4tUmljaCBBbGdhZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQUxPXCI6IFtcIkFsdW1pbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJBTU1cIjogW1wiQW1tb25pYVwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBTlpcIjogW1wiQWR2YW5jZWQgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBUFRcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFSXCI6IFtcIkFyZ29uXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkFSUFwiOiBbXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQVNFXCI6IFtcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVNUXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVGl0YW5pdW1cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkFUQVwiOiBbXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBVFBcIjogW1wiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQVVcIjogW1wiR29sZFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQVVPXCI6IFtcIkdvbGQgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQVdGXCI6IFtcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFXSFwiOiBbXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQkFDXCI6IFtcIkhlbHBmdWwgQmFjdGVyaWFcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJBSVwiOiBbXCJCYXNpYyBBSSBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJCQkhcIjogW1wiQmFzaWMgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQkNPXCI6IFtcIkJ1ZGdldCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkJERVwiOiBbXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJFXCI6IFtcIkJlcnlsbGl1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJCRUFcIjogW1wiUHJvdGVpbi1SaWNoIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJCRVJcIjogW1wiQmVyeWwgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQkZQXCI6IFtcIkJhc2ljIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkZSXCI6IFtcIkJhc2ljIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJCR0NcIjogW1wiU2hpZWxkZWQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCR09cIjogW1wiQmx1ZSBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJCR1NcIjogW1wiQmFzaWMgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQkhQXCI6IFtcIkJhc2ljIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJCSURcIjogW1wiRnVsbC1Cb2R5IEludGVyYWN0aW9uIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiQkxcIjogW1wiQnJlYXRoYWJsZSBMaXF1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJMRVwiOiBbXCJEZXNhdHVyYXRpb24gQWdlbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkJNRlwiOiBbXCJCYXNpYyBNYWluZnJhbWVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJORFwiOiBbXCJCYW5kYWdlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJCT1JcIjogW1wiQm9yb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQk9TXCI6IFtcIkJvcm9zaWxpY2F0ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlBUXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUjFcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsxXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUjJcIjogW1wiQ29tbWFuZCBCcmlkZ2UgTUsyXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCUk1cIjogW1wiQmlvcmVhY3RpdmUgTWluZXJhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiQlJPXCI6IFtcIkJyb256ZVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQlJQXCI6IFtcIkJhc2ljIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCUlNcIjogW1wiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkJTQ1wiOiBbXCJCb2R5IFNjYW5uZXJcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJTRVwiOiBbXCJCYXNpYyBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJUQVwiOiBbXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVFNcIjogW1wiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiQldIXCI6IFtcIkJhc2ljIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJCV1NcIjogW1wiQmFzaWMgV29ya3N0YXRpb25cIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkNcIjogW1wiQ2FyYm9uXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBXCI6IFtcIkNhbGNpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0FGXCI6IFtcIkNhZmZlaW5hdGVkIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJDQVBcIjogW1wiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIkNCTFwiOiBbXCJMYXJnZSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQk1cIjogW1wiTWVkaXVtIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIkNCU1wiOiBbXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ1wiOiBbXCJDbGltYXRlIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNDRFwiOiBbXCJDcm93ZCBDb250cm9sIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJDRFwiOiBbXCJDYXBhY2l0aXZlIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJDRlwiOiBbXCJDZXJhbWljIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDSEFcIjogW1wiQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJDTFwiOiBbXCJDaGxvcmluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDTElcIjogW1wiQ2FsaWNoZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkNNS1wiOiBbXCJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJDT0ZcIjogW1wiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiQ09NXCI6IFtcIkNvbW11bmljYXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDT1RcIjogW1wiQ290dG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDUUxcIjogW1wiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUU1cIjogW1wiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FTXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FUXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJDUlVcIjogW1wiQ3J5b2dlbmljIFVuaXRcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkNTVFwiOiBbXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiQ1RGXCI6IFtcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkNVXCI6IFtcIkNvcHBlclwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiQ1VPXCI6IFtcIkNvcHBlciBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJEQVwiOiBbXCJEYXRhIEFuYWx5emVyXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIkRDSFwiOiBbXCJEcm9uZSBDaGFzc2lzXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEQ0xcIjogW1wiRHVyYWJsZSBDYXNpbmcgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ01cIjogW1wiRHVyYWJsZSBDYXNpbmcgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJEQ1NcIjogW1wiRHVyYWJsZSBDYXNpbmcgU1wiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJERFwiOiBbXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJERFRcIjogW1wiRERUIFBsYW50IEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJERUNcIjogW1wiRGVjb3JhdGl2ZSBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRElTXCI6IFtcIkluZm9ybWF0aW9uIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJET1VcIjogW1wiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJEUkZcIjogW1wiRHJvbmUgRnJhbWVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIkRWXCI6IFtcIkRhdGEgVmlzdWFsaXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEV1wiOiBbXCJEcmlua2luZyBXYXRlclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkVEQ1wiOiBbXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJFRVNcIjogW1wiRW5yaWNoZWQgRWluc3RlaW5pdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVOR1wiOiBbXCJTdGFuZGFyZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJFUE9cIjogW1wiRXBveHkgUmVzaW5cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJFU1wiOiBbXCJFaW5zdGVpbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJFVENcIjogW1wiRW5yaWNoZWQgVGVjaG5ldGl1bVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRVhPXCI6IFtcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZcIjogW1wiRmx1b3JpbmVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiRkFMXCI6IFtcIkZlcnJvbWluaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGQU5cIjogW1wiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRkNcIjogW1wiRmxvdyBDb250cm9sIERldmljZVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkVcIjogW1wiSXJvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiRkVPXCI6IFtcIklyb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiRkVUXCI6IFtcIkZlcnJvLVRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJGRlwiOiBbXCJGVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJGRkNcIjogW1wiRlRMIEZpZWxkIENvbnRyb2xsZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkZJTVwiOiBbXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkZJUlwiOiBbXCJGaXNzaW9uIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZMT1wiOiBbXCJGbG9hdGluZyBUYW5rXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFBcIjogW1wiRmx1aWQgUGlwaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJGTFhcIjogW1wiRmx1eFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiRk9EXCI6IFtcIkFsbC1QdXJwb3NlIEZvZGRlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiRlNFXCI6IFtcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkZVTlwiOiBbXCJFbnRlcnRhaW5tZW50IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkdBTFwiOiBbXCJHYWxlcml0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkdDXCI6IFtcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkdDSFwiOiBbXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkdFTlwiOiBbXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHSU5cIjogW1wiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiR0xcIjogW1wiR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJHTlpcIjogW1wiR2xhc3MgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHUkFcIjogW1wiV2luZS1RdWFsaXR5IEdyYXBlc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiR1JOXCI6IFtcIkhpZ2gtQ2FyYiBHcmFpbnNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdWXCI6IFtcIkdhcyBWZW50XCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJIXCI6IFtcIkh5ZHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkgyT1wiOiBbXCJXYXRlclwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhBQlwiOiBbXCJIYWJpdGF0IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkhBTFwiOiBbXCJIYWxpdGUgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiSENDXCI6IFtcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJIQ1BcIjogW1wiSHlkcm9jYXJib24gUGxhbnRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRFwiOiBbXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIRVwiOiBbXCJIZWxpdW1cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEUzXCI6IFtcIkhlbGl1bS0zIElzb3RvcGVcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiSEVSXCI6IFtcIlNwaWN5IEhlcmJzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIRVhcIjogW1wiSGVsaW90cm9wZSBFeHRyYWN0XCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiSEhQXCI6IFtcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJITVNcIjogW1wiSGF6TWF0IFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhOWlwiOiBbXCJIeXBlcnRocnVzdCBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhPR1wiOiBbXCJIb2xvZ3JhcGhpYyBHbGFzc2VzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJIT1BcIjogW1wiRmxvd2VyeSBIb3BzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJIUENcIjogW1wiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSFBSXCI6IFtcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhTRVwiOiBbXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkhTU1wiOiBbXCJTbWFydCBTcGFjZSBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiSFRFXCI6IFtcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkhZUlwiOiBbXCJIeXBlci1wb3dlciBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJJXCI6IFtcIklvZGluZVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJJRENcIjogW1wiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU1NXCI6IFtcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiSU5EXCI6IFtcIkluZGlnbyBDb2xvcmFudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiSU5TXCI6IFtcIkluc3VGb2FtXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiSlVJXCI6IFtcIlNlZGF0aXZlIFN1YnN0YW5jZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiS09NXCI6IFtcIktvbWJ1Y2hhXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIktWXCI6IFtcIktldmxhciBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTEJIXCI6IFtcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxDXCI6IFtcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTENCXCI6IFtcIkxhcmdlIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxDUlwiOiBbXCJMaXF1aWQgQ3J5c3RhbHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkxEXCI6IFtcIkxvY2FsIERhdGFiYXNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTERFXCI6IFtcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTERJXCI6IFtcIkxhc2VyIERpb2Rlc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJMRVNcIjogW1wiTGlxdWlkIEVpbnN0ZWluaXVtXCIsIFwibGlxdWlkc1wiXSxcclxuICAgIFwiTEZFXCI6IFtcIkxhcmdlIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMRkxcIjogW1wiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxGUFwiOiBbXCJMb3ctaGVhdCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkxIUFwiOiBbXCJMaWdodHdlaWdodCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTElcIjogW1wiTGl0aGl1bVwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiTElPXCI6IFtcIkxpdGhpdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiTElTXCI6IFtcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxJVFwiOiBbXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiTE9HXCI6IFtcIkxvZ2lzdGljcyBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkxTRVwiOiBbXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxTTFwiOiBbXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTFNUXCI6IFtcIkxpbWVzdG9uZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJMVEFcIjogW1wiTGlnaHR3ZWlnaHQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiTFVcIjogW1wiTGFib3JhdG9yeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJNQUdcIjogW1wiTWFnbmV0aXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1BSVwiOiBbXCJIaWdoLUNhcmIgTWFpemVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1CXCI6IFtcIk1vdGhlcmJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTUNCXCI6IFtcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJNQ0dcIjogW1wiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTUVBXCI6IFtcIlF1YWxpdHkgTWVhdCBNZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUVEXCI6IFtcIkJhc2ljIE1lZGljYWwgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiTUZFXCI6IFtcIk1lZGl1bSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTUZLXCI6IFtcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTUZMXCI6IFtcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUdcIjogW1wiTWFnbmVzaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk1HQ1wiOiBbXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1HU1wiOiBbXCJNYWduZXNpdGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTUhMXCI6IFtcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIk1IUFwiOiBbXCJNaWNybyBIZWFkcGhvbmVzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJNTElcIjogW1wiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJNUENcIjogW1wiTWljcm8tUHJvY2Vzc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiTVNMXCI6IFtcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTVRDXCI6IFtcIk1lZ2FUdWJlIENvYXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJNVFBcIjogW1wiTWVhdCBUaXNzdWUgUGF0dGllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTVVTXCI6IFtcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1XRlwiOiBbXCJNZWRpdW0gV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTlwiOiBbXCJOaXRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJOQVwiOiBbXCJTb2RpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiTkFCXCI6IFtcIlNvZGl1bSBCb3JvaHlkcmlkZVwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTkNTXCI6IFtcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkVcIjogW1wiTmVvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJORlwiOiBbXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIk5GSVwiOiBbXCJOYW5vIEZpYmVyXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkdcIjogW1wiTmFuby1Db2F0ZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJOTFwiOiBbXCJOeWxvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiTk5cIjogW1wiTmV1cmFsIE5ldHdvcmtcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiTk9aXCI6IFtcIkJhc2ljIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTlJcIjogW1wiTmFuby1FbmhhbmNlZCBSZXNpblwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiTlNcIjogW1wiTnV0cmllbnQgU29sdXRpb25cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TVFwiOiBbXCJOZXVyb1N0aW11bGFudHNcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiTlVUXCI6IFtcIlRyaWdseWNlcmlkZSBOdXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJOVjFcIjogW1wiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiTlYyXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk9cIjogW1wiT3h5Z2VuXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIk9GRlwiOiBbXCJPZmZpY2UgU3VwcGxpZXNcIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJPTEZcIjogW1wiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk9TXCI6IFtcIk9wZXJhdGluZyBTeXN0ZW1cIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiT1ZFXCI6IFtcIkJhc2ljIE92ZXJhbGxzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUENCXCI6IFtcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlBEQVwiOiBbXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBFXCI6IFtcIlBvbHktRXRoeWxlbmVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUEZFXCI6IFtcIlByZW1pdW0gRmVydGlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiUEdcIjogW1wiUG9seW1lciBHcmFudWxhdGVcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUElCXCI6IFtcIlBpbmViZXJyaWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJQS1wiOiBbXCJQYWlua2lsbGVyc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJQT1dcIjogW1wiUG93ZXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJQUEFcIjogW1wiUHJvdGVpbiBQYXN0ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUFNIXCI6IFtcIlByZXNzdXJlIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiUFNMXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBTTVwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU1NcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFRcIjogW1wiUG93ZXIgVG9vbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQV09cIjogW1wiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJRQ1JcIjogW1wiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQURcIjogW1wiUmFkaW8gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJSQUdcIjogW1wiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFNXCI6IFtcIk1lbW9yeSBCYW5rXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiUkFUXCI6IFtcIkJhc2ljIFJhdGlvbnNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJSQkhcIjogW1wiUmVpbmZvcmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSQ09cIjogW1wiUmF3IENvdHRvbiBGaWJlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUkNTXCI6IFtcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJDVFwiOiBbXCJTdGFuZGFyZCBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkRFXCI6IFtcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRExcIjogW1wiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRFNcIjogW1wiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJSRUFcIjogW1wiQ2hlbWljYWwgUmVhZ2VudHNcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlJFRFwiOiBbXCJSZXNjdWUgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlJFUFwiOiBbXCJSZXBhaXIgS2l0XCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlJHXCI6IFtcIlJlaW5mb3JjZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJSR09cIjogW1wiUmVkIEdvbGRcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIlJIUFwiOiBbXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJST01cIjogW1wiTm9uLVZvbGF0aWxlIE1lbW9yeVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJTRVwiOiBbXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUlNIXCI6IFtcIlJhZGlhdGlvbiBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlJTSVwiOiBbXCJSYXcgU2lsayBTdHJhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJSVEFcIjogW1wiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJTXCI6IFtcIlN1bGZ1clwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJTQVwiOiBbXCJTZWFyY2ggQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FMXCI6IFtcIlNvcnRpbmcgQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiU0FSXCI6IFtcIlNlbnNvciBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiU0NcIjogW1wiU3RlbSBDZWxsIFRyZWF0bWVudFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJTQ0JcIjogW1wiU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0NOXCI6IFtcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlNDUlwiOiBbXCJTdWxmdXIgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiU0RSXCI6IFtcIlN1cmdpY2FsIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTRUFcIjogW1wiUG9seS1TdWxmaXRlIFNlYWxhbnRcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxyXG4gICAgXCJTRU5cIjogW1wiU2Vuc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiU0VRXCI6IFtcIlN1cmdpY2FsIEVxdWlwbWVudFwiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxyXG4gICAgXCJTRlwiOiBbXCJTVEwgRnVlbFwiLCBcImZ1ZWxzXCJdLFxyXG4gICAgXCJTRkVcIjogW1wiU21hbGwgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlNGS1wiOiBbXCJTbWFsbCBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiU0ZMXCI6IFtcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJTSVwiOiBbXCJTaWxpY29uXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTSUxcIjogW1wiU2lsa2VuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJTSU9cIjogW1wiU2lsaWNvbiBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJTTk1cIjogW1wiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNPSVwiOiBbXCJBcnRpZmljaWFsIFNvaWxcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlNPTFwiOiBbXCJTb2xhciBDZWxsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNQXCI6IFtcIlNvbGFyIFBhbmVsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXHJcbiAgICBcIlNSRFwiOiBbXCJTaGlwLVJlcGFpciBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1JQXCI6IFtcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJTU0NcIjogW1wiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlNTTFwiOiBbXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU1RMXCI6IFtcIlN0ZWVsXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJTVFJcIjogW1wiTWVkaWNhbCBTdHJldGNoZXJcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU1RTXCI6IFtcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiU1VcIjogW1wiU3VyZ2VyeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJTVURcIjogW1wiU3VydmVpbGxhbmNlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJTVU5cIjogW1wiU2FmZXR5IFVuaWZvcm1cIiwgXCJ1dGlsaXR5XCJdLFxyXG4gICAgXCJTV0ZcIjogW1wiU21hbGwgV2FmZXJcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVEFcIjogW1wiVGFudGFsdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVEFDXCI6IFtcIlRhcmdldGluZyBDb21wdXRlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiVEFJXCI6IFtcIlRhbnRhbGl0ZSBSb2NrXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRDXCI6IFtcIlRlY2huZXRpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiVENCXCI6IFtcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiVENMXCI6IFtcIlRDTCBBY2lkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUQ09cIjogW1wiVGVjaG5ldGl1bSBPeGlkZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1NcIjogW1wiU3RhYmlsaXplZCBUZWNobmV0aXVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUQ1VcIjogW1wiVHJhdW1hIENhcmUgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiVEhGXCI6IFtcIlRoZXJtb0ZsdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJUSFBcIjogW1wiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiVElcIjogW1wiVGl0YW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIlRJT1wiOiBbXCJUaXRhbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxyXG4gICAgXCJUS1wiOiBbXCJUZWNobm9LZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIlRQVVwiOiBbXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJBXCI6IFtcIkF1ZGlvIFRyYW5zbWl0dGVyXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiVFJOXCI6IFtcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiVFJVXCI6IFtcIlRydXNzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJUU1wiOiBbXCJUZWN0b3NpbGlzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlRTSFwiOiBbXCJUaGVybWFsIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFVCXCI6IFtcIlRlc3QgVHViZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiVVRTXCI6IFtcIlVuaXZlcnNhbCBUb29sc2V0XCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiVkNCXCI6IFtcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlZFR1wiOiBbXCJUcmlnbHljZXJpZGUgRnJ1aXRzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWR1wiOiBbXCJWaXRhR2VsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIlZJVFwiOiBbXCJWaXRhIEVzc2VuY2VcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlZTQ1wiOiBbXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldcIjogW1wiVHVuZ3N0ZW5cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIldBSVwiOiBbXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcclxuICAgIFwiV0FMXCI6IFtcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIldDQlwiOiBbXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiV0lOXCI6IFtcIlNtYXJ0IFppbmZhbmRlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJXTVwiOiBbXCJXaW5kb3cgTWFuYWdlclwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIldPUlwiOiBbXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiV1JcIjogW1wiV2F0ZXIgUmVjbGFpbWVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJXU1wiOiBbXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlpJUlwiOiBbXCJaaXJjb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiWlJcIjogW1wiWmlyY29uaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbHMgPSB7XHJcbiAgICBcIkFudGVubmEgQXJyYXlcIjogW1wiQUFSXCIsIDAuNzgsIDAuNV0sXHJcbiAgICBcIkFkdmFuY2VkIEJ1bGtoZWFkXCI6IFtcIkFCSFwiLCAwLjYsIDAuOV0sXHJcbiAgICBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiOiBbXCJBQ1NcIiwgMC4zLCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIkFERVwiLCAwLjQsIDEuNV0sXHJcbiAgICBcIkF1dG8tRG9jXCI6IFtcIkFEUlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIjogW1wiQURTXCIsIDAuNywgMl0sXHJcbiAgICBcIkFlcm9zdGF0IEZvdW5kYXRpb25cIjogW1wiQUVGXCIsIDIsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBTVEwgRW5naW5lXCI6IFtcIkFFTlwiLCAxNCwgN10sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiOiBbXCJBRlBcIiwgMSwgMC4yNV0sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUm9kXCI6IFtcIkFGUlwiLCAwLjQsIDAuMV0sXHJcbiAgICBcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiOiBbXCJBR1NcIiwgMzAsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCI6IFtcIkFIUFwiLCAyMCwgMTBdLFxyXG4gICAgXCJBaXIgU2NydWJiZXJcIjogW1wiQUlSXCIsIDEuNywgM10sXHJcbiAgICBcIkFsdW1pbml1bVwiOiBbXCJBTFwiLCAyLjcsIDFdLFxyXG4gICAgXCJTdGVsbGFyIFBhbGUgQWxlXCI6IFtcIkFMRVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBBbGdhZVwiOiBbXCJBTEdcIiwgMC43LCAxXSxcclxuICAgIFwiQWx1bWluaXVtIE9yZVwiOiBbXCJBTE9cIiwgMS4zNSwgMV0sXHJcbiAgICBcIkFtbW9uaWFcIjogW1wiQU1NXCIsIDAuODYsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBOb3p6bGVcIjogW1wiQU5aXCIsIDYsIDNdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJBUFRcIiwgMC4wMywgMC4zXSxcclxuICAgIFwiQXJnb25cIjogW1wiQVJcIiwgMS43ODQsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJBUlBcIiwgMC4wNCwgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJBU0VcIiwgMC41LCAwLjZdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCI6IFtcIkFTVFwiLCA0Ljk4LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQVRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIkFUUFwiLCAyLjksIDFdLFxyXG4gICAgXCJHb2xkXCI6IFtcIkFVXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiR29sZCBPcmVcIjogW1wiQVVPXCIsIDMuODYsIDFdLFxyXG4gICAgXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCI6IFtcIkFXRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkFXSFwiLCAwLjEyLCAxXSxcclxuICAgIFwiSGVscGZ1bCBCYWN0ZXJpYVwiOiBbXCJCQUNcIiwgMC4xNSwgMC4xNV0sXHJcbiAgICBcIkJhc2ljIEFJIEZyYW1ld29ya1wiOiBbXCJCQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBCdWxraGVhZFwiOiBbXCJCQkhcIiwgMC41LCAwLjhdLFxyXG4gICAgXCJCdWRnZXQgQ29ubmVjdG9yc1wiOiBbXCJCQ09cIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQmFzaWMgRGVjayBFbGVtZW50c1wiOiBbXCJCREVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJCZXJ5bGxpdW1cIjogW1wiQkVcIiwgMS44NCwgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBCZWFuc1wiOiBbXCJCRUFcIiwgMC44LCAxXSxcclxuICAgIFwiQmVyeWwgQ3J5c3RhbHNcIjogW1wiQkVSXCIsIDEuOTIsIDFdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFB1bXBcIjogW1wiQkZQXCIsIDAuOCwgMC4yXSxcclxuICAgIFwiQmFzaWMgRnVlbCBSb2RcIjogW1wiQkZSXCIsIDAuMywgMC4xXSxcclxuICAgIFwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiOiBbXCJCR0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJCbHVlIEdvbGRcIjogW1wiQkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiQmFzaWMgSGlnaC1HIFNlYXRzXCI6IFtcIkJHU1wiLCAyMCwgM10sXHJcbiAgICBcIkJhc2ljIEh1bGwgUGxhdGVcIjogW1wiQkhQXCIsIDEwLCAxMF0sXHJcbiAgICBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIjogW1wiQklEXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJCcmVhdGhhYmxlIExpcXVpZFwiOiBbXCJCTFwiLCAxLjEyLCAxXSxcclxuICAgIFwiRGVzYXR1cmF0aW9uIEFnZW50XCI6IFtcIkJMRVwiLCAwLjUsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1haW5mcmFtZVwiOiBbXCJCTUZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJCYW5kYWdlc1wiOiBbXCJCTkRcIiwgMC4wMDEsIDAuMDA1XSxcclxuICAgIFwiQm9yb24gQ3J5c3RhbHNcIjogW1wiQk9SXCIsIDEuOCwgMV0sXHJcbiAgICBcIkJvcm9zaWxpY2F0ZVwiOiBbXCJCT1NcIiwgMS41LCAxXSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQlBUXCIsIDAuMDIsIDAuM10sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMVwiOiBbXCJCUjFcIiwgMTgwLCAzMDBdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzJcIjogW1wiQlIyXCIsIDI4MCwgNDAwXSxcclxuICAgIFwiQmlvcmVhY3RpdmUgTWluZXJhbHNcIjogW1wiQlJNXCIsIDIuNSwgMV0sXHJcbiAgICBcIkJyb256ZVwiOiBbXCJCUk9cIiwgOC43MywgMV0sXHJcbiAgICBcIkJhc2ljIEFudGktcmFkIFBsYXRlXCI6IFtcIkJSUFwiLCAwLjAzLCAwLjJdLFxyXG4gICAgXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiOiBbXCJCUlNcIiwgMTUwLCAyMDBdLFxyXG4gICAgXCJCb2R5IFNjYW5uZXJcIjogW1wiQlNDXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJCU0VcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJCVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIjogW1wiQlRTXCIsIDEuMDUsIDFdLFxyXG4gICAgXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJCV0hcIiwgMC4xLCAxXSxcclxuICAgIFwiQmFzaWMgV29ya3N0YXRpb25cIjogW1wiQldTXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkNhcmJvblwiOiBbXCJDXCIsIDIuMjUsIDFdLFxyXG4gICAgXCJDYWxjaXVtXCI6IFtcIkNBXCIsIDEuNTQsIDFdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBCZWFuc1wiOiBbXCJDQUZcIiwgMC44NiwgMV0sXHJcbiAgICBcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiOiBbXCJDQVBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JMXCIsIDUuNCwgMi40XSxcclxuICAgIFwiTWVkaXVtIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTVwiLCAzLjYsIDEuNl0sXHJcbiAgICBcIlNtYWxsIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCU1wiLCAxLjgsIDAuOF0sXHJcbiAgICBcIkNsaW1hdGUgQ29udHJvbGxlclwiOiBbXCJDQ1wiLCAwLjUsIDFdLFxyXG4gICAgXCJDcm93ZCBDb250cm9sIERyb25lXCI6IFtcIkNDRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJDYXBhY2l0aXZlIERpc3BsYXlcIjogW1wiQ0RcIiwgMC4wMDQsIDAuMDAyXSxcclxuICAgIFwiQ2VyYW1pYyBGYWJyaWNcIjogW1wiQ0ZcIiwgMi44MiwgMV0sXHJcbiAgICBcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJDSEFcIiwgMS4yLCAwLjddLFxyXG4gICAgXCJDaGxvcmluZVwiOiBbXCJDTFwiLCAzLjIsIDFdLFxyXG4gICAgXCJDYWxpY2hlIFJvY2tcIjogW1wiQ0xJXCIsIDIuNDIsIDFdLFxyXG4gICAgXCJcIjogW1wiQ01LXCIsIDQuNTYsIDMzLjJdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiOiBbXCJDT0ZcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiOiBbXCJDT01cIiwgMC41LCAxLjVdLFxyXG4gICAgXCJDb3R0b24gRmFicmljXCI6IFtcIkNPVFwiLCAwLjc3LCAxXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCI6IFtcIkNRTFwiLCA3NSwgMTUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiOiBbXCJDUU1cIiwgNTAsIDEwMF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiOiBbXCJDUVNcIiwgMjUsIDUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoVGlueSlcIjogW1wiQ1FUXCIsIDEyLjUsIDI1XSxcclxuICAgIFwiQ3J5b2dlbmljIFVuaXRcIjogW1wiQ1JVXCIsIDIuMiwgMl0sXHJcbiAgICBcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCI6IFtcIkNTVFwiLCAxLjE0LCAxXSxcclxuICAgIFwiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIjogW1wiQ1RGXCIsIDQuMzIsIDFdLFxyXG4gICAgXCJDb3BwZXJcIjogW1wiQ1VcIiwgOC45MiwgMV0sXHJcbiAgICBcIkNvcHBlciBPcmVcIjogW1wiQ1VPXCIsIDQuMDEsIDFdLFxyXG4gICAgXCJEYXRhIEFuYWx5emVyXCI6IFtcIkRBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJvbmUgQ2hhc3Npc1wiOiBbXCJEQ0hcIiwgMC4yLCAwLjAzXSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTFwiOiBbXCJEQ0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTVwiOiBbXCJEQ01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgU1wiOiBbXCJEQ1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIjogW1wiRERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJERFQgUGxhbnQgQWdlbnRcIjogW1wiRERUXCIsIDAuMTEsIDAuMV0sXHJcbiAgICBcIkRlY29yYXRpdmUgRWxlbWVudHNcIjogW1wiREVDXCIsIDAuNSwgMl0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERpc3BsYXlcIjogW1wiRElTXCIsIDAuMDIsIDAuMDJdLFxyXG4gICAgXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiRE9VXCIsIDUsIDRdLFxyXG4gICAgXCJEcm9uZSBGcmFtZVwiOiBbXCJEUkZcIiwgMC4xLCAwLjAyXSxcclxuICAgIFwiRGF0YSBWaXN1YWxpemVyXCI6IFtcIkRWXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJpbmtpbmcgV2F0ZXJcIjogW1wiRFdcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiOiBbXCJFRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiOiBbXCJFRVNcIiwgOS4yLCAxXSxcclxuICAgIFwiU3RhbmRhcmQgU1RMIEVuZ2luZVwiOiBbXCJFTkdcIiwgOCwgNF0sXHJcbiAgICBcIkVwb3h5IFJlc2luXCI6IFtcIkVQT1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiRWluc3RlaW5pdW1cIjogW1wiRVNcIiwgMC44OCwgMC4xXSxcclxuICAgIFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiOiBbXCJFVENcIiwgNC4xLCAxXSxcclxuICAgIFwiRXhvc2tlbGV0b24gV29yayBTdWl0XCI6IFtcIkVYT1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJGbHVvcmluZVwiOiBbXCJGXCIsIDEuNjk2LCAxXSxcclxuICAgIFwiRmVycm9taW5pdW1cIjogW1wiRkFMXCIsIDMuMjIsIDFdLFxyXG4gICAgXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIjogW1wiRkFOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRmxvdyBDb250cm9sIERldmljZVwiOiBbXCJGQ1wiLCAwLjUsIDAuMjVdLFxyXG4gICAgXCJJcm9uXCI6IFtcIkZFXCIsIDcuODc0LCAxXSxcclxuICAgIFwiSXJvbiBPcmVcIjogW1wiRkVPXCIsIDUuOSwgMV0sXHJcbiAgICBcIkZlcnJvLVRpdGFuaXVtXCI6IFtcIkZFVFwiLCA2Ljg1LCAxXSxcclxuICAgIFwiRlRMIEZ1ZWxcIjogW1wiRkZcIiwgMC4wNSwgMC4wMV0sXHJcbiAgICBcIkZUTCBGaWVsZCBDb250cm9sbGVyXCI6IFtcIkZGQ1wiLCA1MCwgMTZdLFxyXG4gICAgXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiOiBbXCJGSU1cIiwgMC41NSwgMC41XSxcclxuICAgIFwiRmlzc2lvbiBSZWFjdG9yXCI6IFtcIkZJUlwiLCA3LCA0LjldLFxyXG4gICAgXCJGbG9hdGluZyBUYW5rXCI6IFtcIkZMT1wiLCAxLCAyXSxcclxuICAgIFwiRmx1aWQgUGlwaW5nXCI6IFtcIkZMUFwiLCAwLjMsIDJdLFxyXG4gICAgXCJGbHV4XCI6IFtcIkZMWFwiLCAwLjI1LCAwLjFdLFxyXG4gICAgXCJBbGwtUHVycG9zZSBGb2RkZXJcIjogW1wiRk9EXCIsIDEuMiwgMV0sXHJcbiAgICBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIjogW1wiRlNFXCIsIDYsIDNdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IFVuaXRcIjogW1wiRlVOXCIsIDUsIDRdLFxyXG4gICAgXCJHYWxlcml0ZSBSb2NrXCI6IFtcIkdBTFwiLCAyLjUxLCAxXSxcclxuICAgIFwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiOiBbXCJHQ1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIjogW1wiR0NIXCIsIDEsIDAuNl0sXHJcbiAgICBcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIjogW1wiR0VOXCIsIDUsIDNdLFxyXG4gICAgXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiOiBbXCJHSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJHbGFzc1wiOiBbXCJHTFwiLCAwLjAxNiwgMC4wMV0sXHJcbiAgICBcIkdsYXNzIE5venpsZVwiOiBbXCJHTlpcIiwgMS41LCAxXSxcclxuICAgIFwiV2luZS1RdWFsaXR5IEdyYXBlc1wiOiBbXCJHUkFcIiwgMS4xLCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIEdyYWluc1wiOiBbXCJHUk5cIiwgMC45LCAxXSxcclxuICAgIFwiR2FzIFZlbnRcIjogW1wiR1ZcIiwgMC4yNSwgMC4xNV0sXHJcbiAgICBcIkh5ZHJvZ2VuXCI6IFtcIkhcIiwgMC4wNywgMV0sXHJcbiAgICBcIldhdGVyXCI6IFtcIkgyT1wiLCAwLjIsIDAuMl0sXHJcbiAgICBcIkhhYml0YXQgVW5pdFwiOiBbXCJIQUJcIiwgMTAsIDhdLFxyXG4gICAgXCJIYWxpdGUgQ3J5c3RhbHNcIjogW1wiSEFMXCIsIDIuMTcsIDFdLFxyXG4gICAgXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIjogW1wiSENDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiSHlkcm9jYXJib24gUGxhbnRzXCI6IFtcIkhDUFwiLCAwLjgsIDFdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCI6IFtcIkhEXCIsIDAuMDUsIDJdLFxyXG4gICAgXCJIZWxpdW1cIjogW1wiSEVcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJIZWxpdW0tMyBJc290b3BlXCI6IFtcIkhFM1wiLCAwLjE0NSwgMV0sXHJcbiAgICBcIlNwaWN5IEhlcmJzXCI6IFtcIkhFUlwiLCAwLjQsIDFdLFxyXG4gICAgXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIjogW1wiSEVYXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIjogW1wiSEhQXCIsIDE1LCAxMF0sXHJcbiAgICBcIkhhek1hdCBXb3JrIFN1aXRcIjogW1wiSE1TXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBOb3p6bGVcIjogW1wiSE5aXCIsIDYsIDEyXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiOiBbXCJIT0dcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIkZsb3dlcnkgSG9wc1wiOiBbXCJIT1BcIiwgMC4zNSwgMV0sXHJcbiAgICBcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIjogW1wiSFBDXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIjogW1wiSFBSXCIsIDE4LCAxNV0sXHJcbiAgICBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiSFNFXCIsIDMuMSwgMC43XSxcclxuICAgIFwiU21hcnQgU3BhY2UgU3VpdFwiOiBbXCJIU1NcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIjogW1wiSFRFXCIsIDIwLCAxMF0sXHJcbiAgICBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIjogW1wiSFlSXCIsIDM1LCAyNV0sXHJcbiAgICBcIklvZGluZVwiOiBbXCJJXCIsIDQuOTMsIDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIjogW1wiSURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIjogW1wiSU1NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5kaWdvIENvbG9yYW50XCI6IFtcIklORFwiLCAwLjIxLCAwLjJdLFxyXG4gICAgXCJJbnN1Rm9hbVwiOiBbXCJJTlNcIiwgMC4wNiwgMC4xXSxcclxuICAgIFwiU2VkYXRpdmUgU3Vic3RhbmNlXCI6IFtcIkpVSVwiLCAxLjIsIDFdLFxyXG4gICAgXCJLb21idWNoYVwiOiBbXCJLT01cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJLZXZsYXIgRmFicmljXCI6IFtcIktWXCIsIDEuNjUsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBCdWxraGVhZFwiOiBbXCJMQkhcIiwgMC4yLCAwLjZdLFxyXG4gICAgXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiOiBbXCJMQ1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiOiBbXCJMQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJMaXF1aWQgQ3J5c3RhbHNcIjogW1wiTENSXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIkxvY2FsIERhdGFiYXNlXCI6IFtcIkxEXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiOiBbXCJMREVcIiwgMC4xLCAxLjJdLFxyXG4gICAgXCJMYXNlciBEaW9kZXNcIjogW1wiTERJXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxpcXVpZCBFaW5zdGVpbml1bVwiOiBbXCJMRVNcIiwgOC44NCwgMV0sXHJcbiAgICBcIkxhcmdlIEZUTCBFbWl0dGVyXCI6IFtcIkxGRVwiLCAwLjQsIDEuNl0sXHJcbiAgICBcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxGTFwiLCA2MCwgMTBdLFxyXG4gICAgXCJMb3ctaGVhdCBGdWVsIFB1bXBcIjogW1wiTEZQXCIsIDAuNSwgMC4xXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiOiBbXCJMSFBcIiwgNSwgMTBdLFxyXG4gICAgXCJMaXRoaXVtXCI6IFtcIkxJXCIsIDAuNTUsIDFdLFxyXG4gICAgXCJMaXRoaXVtIE9yZVwiOiBbXCJMSU9cIiwgMi43NSwgMV0sXHJcbiAgICBcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIjogW1wiTElTXCIsIDUuNiwgN10sXHJcbiAgICBcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCI6IFtcIkxJVFwiLCAxLCAyXSxcclxuICAgIFwiTG9naXN0aWNzIFN5c3RlbVwiOiBbXCJMT0dcIiwgMC41LCAxLjVdLFxyXG4gICAgXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkxTRVwiLCAwLjMsIDEuMl0sXHJcbiAgICBcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxTTFwiLCAxMjUsIDEwMF0sXHJcbiAgICBcIkxpbWVzdG9uZVwiOiBbXCJMU1RcIiwgMi43MywgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkxUQVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkxhYm9yYXRvcnkgVW5pdFwiOiBbXCJMVVwiLCA4LCA2XSxcclxuICAgIFwiTWFnbmV0aXRlXCI6IFtcIk1BR1wiLCA1LjE1LCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIE1haXplXCI6IFtcIk1BSVwiLCAxLjMsIDFdLFxyXG4gICAgXCJNb3RoZXJib2FyZFwiOiBbXCJNQlwiLCAwLjA3NSwgMC4wNzVdLFxyXG4gICAgXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiOiBbXCJNQ0JcIiwgMTAwLCAxMDBdLFxyXG4gICAgXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIjogW1wiTUNHXCIsIDAuMjQsIDAuMV0sXHJcbiAgICBcIlF1YWxpdHkgTWVhdCBNZWFsXCI6IFtcIk1FQVwiLCAwLjYsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1lZGljYWwgS2l0XCI6IFtcIk1FRFwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRW1pdHRlclwiOiBbXCJNRkVcIiwgMC4yLCAwLjhdLFxyXG4gICAgXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCI6IFtcIk1GS1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTUZMXCIsIDI0LCA0XSxcclxuICAgIFwiTWFnbmVzaXVtXCI6IFtcIk1HXCIsIDAuMjcsIDAuMTZdLFxyXG4gICAgXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIjogW1wiTUdDXCIsIDAuNiwgMC45XSxcclxuICAgIFwiTWFnbmVzaXRlXCI6IFtcIk1HU1wiLCAxLjczLCAxXSxcclxuICAgIFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJNSExcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWljcm8gSGVhZHBob25lc1wiOiBbXCJNSFBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIjogW1wiTUxJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTWljcm8tUHJvY2Vzc29yXCI6IFtcIk1QQ1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTVNMXCIsIDUwLCA1MF0sXHJcbiAgICBcIk1lZ2FUdWJlIENvYXRpbmdcIjogW1wiTVRDXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTWVhdCBUaXNzdWUgUGF0dGllc1wiOiBbXCJNVFBcIiwgMC43LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiOiBbXCJNVVNcIiwgMC44LCAxXSxcclxuICAgIFwiTWVkaXVtIFdhZmVyXCI6IFtcIk1XRlwiLCAwLjAwOCwgMC4wMDhdLFxyXG4gICAgXCJOaXRyb2dlblwiOiBbXCJOXCIsIDAuODA3LCAxXSxcclxuICAgIFwiU29kaXVtXCI6IFtcIk5BXCIsIDAuOTcsIDFdLFxyXG4gICAgXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIjogW1wiTkFCXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCI6IFtcIk5DU1wiLCAwLjAyOCwgMC4wMV0sXHJcbiAgICBcIk5lb25cIjogW1wiTkVcIiwgMC45LCAxXSxcclxuICAgIFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIjogW1wiTkZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJOYW5vIEZpYmVyXCI6IFtcIk5GSVwiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk5hbm8tQ29hdGVkIEdsYXNzXCI6IFtcIk5HXCIsIDAuMDIyLCAwLjAxXSxcclxuICAgIFwiTnlsb24gRmFicmljXCI6IFtcIk5MXCIsIDEuMTMsIDFdLFxyXG4gICAgXCJOZXVyYWwgTmV0d29ya1wiOiBbXCJOTlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE5venpsZVwiOiBbXCJOT1pcIiwgMywgMS41XSxcclxuICAgIFwiTmFuby1FbmhhbmNlZCBSZXNpblwiOiBbXCJOUlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTnV0cmllbnQgU29sdXRpb25cIjogW1wiTlNcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJOZXVyb1N0aW11bGFudHNcIjogW1wiTlNUXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgTnV0c1wiOiBbXCJOVVRcIiwgMC45LCAxXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCI6IFtcIk5WMVwiLCA0LjIsIDJdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIjogW1wiTlYyXCIsIDYuNywgM10sXHJcbiAgICBcIk94eWdlblwiOiBbXCJPXCIsIDEuMTQxLCAxXSxcclxuICAgIFwiT2ZmaWNlIFN1cHBsaWVzXCI6IFtcIk9GRlwiLCAwLjAyLCAwLjJdLFxyXG4gICAgXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiOiBbXCJPTEZcIiwgMC4wMSwgMC4wMDFdLFxyXG4gICAgXCJPcGVyYXRpbmcgU3lzdGVtXCI6IFtcIk9TXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgT3ZlcmFsbHNcIjogW1wiT1ZFXCIsIDAuMDIsIDAuMDI1XSxcclxuICAgIFwiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCI6IFtcIlBDQlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIjogW1wiUERBXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlBvbHktRXRoeWxlbmVcIjogW1wiUEVcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIlByZW1pdW0gRmVydGlsaXplclwiOiBbXCJQRkVcIiwgMC45LCAxXSxcclxuICAgIFwiUG9seW1lciBHcmFudWxhdGVcIjogW1wiUEdcIiwgMC4wMDIsIDAuMDAxXSxcclxuICAgIFwiUGluZWJlcnJpZXNcIjogW1wiUElCXCIsIDAuMywgMV0sXHJcbiAgICBcIlBhaW5raWxsZXJzXCI6IFtcIlBLXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlBvd2VyIENlbGxcIjogW1wiUE9XXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4gUGFzdGVcIjogW1wiUFBBXCIsIDIsIDFdLFxyXG4gICAgXCJQcmVzc3VyZSBTaGllbGRpbmdcIjogW1wiUFNIXCIsIDQuMiwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIExcIjogW1wiUFNMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCI6IFtcIlBTTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiOiBbXCJQU1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiUG93ZXIgVG9vbHNcIjogW1wiUFRcIiwgMC4yNSwgMC4yXSxcclxuICAgIFwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiOiBbXCJQV09cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiOiBbXCJRQ1JcIiwgMTQsIDEwXSxcclxuICAgIFwiUmFkaW8gRGV2aWNlXCI6IFtcIlJBRFwiLCAwLjAwMywgMC4wMDVdLFxyXG4gICAgXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCI6IFtcIlJBR1wiLCA1LCAzLjRdLFxyXG4gICAgXCJNZW1vcnkgQmFua1wiOiBbXCJSQU1cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiQmFzaWMgUmF0aW9uc1wiOiBbXCJSQVRcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiOiBbXCJSQkhcIiwgMi40LCAwLjldLFxyXG4gICAgXCJSYXcgQ290dG9uIEZpYmVyXCI6IFtcIlJDT1wiLCAwLjk1LCAxXSxcclxuICAgIFwiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiOiBbXCJSQ1NcIiwgMC42NywgMC41XSxcclxuICAgIFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIjogW1wiUkNUXCIsIDcsIDRdLFxyXG4gICAgXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIjogW1wiUkRFXCIsIDEuNCwgMS41XSxcclxuICAgIFwiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJETFwiLCAxNTAsIDMwXSxcclxuICAgIFwiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJEU1wiLCA1MCwgMTBdLFxyXG4gICAgXCJDaGVtaWNhbCBSZWFnZW50c1wiOiBbXCJSRUFcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlJlc2N1ZSBEcm9uZVwiOiBbXCJSRURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUmVwYWlyIEtpdFwiOiBbXCJSRVBcIiwgMC4wMDYsIDAuMDAyXSxcclxuICAgIFwiUmVpbmZvcmNlZCBHbGFzc1wiOiBbXCJSR1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIlJlZCBHb2xkXCI6IFtcIlJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiOiBbXCJSSFBcIiwgMTIsIDEwXSxcclxuICAgIFwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiOiBbXCJST01cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIlJTRVwiLCAxLjksIDAuN10sXHJcbiAgICBcIlJhZGlhdGlvbiBTaGllbGRpbmdcIjogW1wiUlNIXCIsIDMuNywgMC44XSxcclxuICAgIFwiUmF3IFNpbGsgU3RyYWluc1wiOiBbXCJSU0lcIiwgMS4xLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJSVEFcIiwgMS41LCAwLjVdLFxyXG4gICAgXCJTdWxmdXJcIjogW1wiU1wiLCAwLjUyLCAwLjI1XSxcclxuICAgIFwiU2VhcmNoIEFsZ29yaXRobVwiOiBbXCJTQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNvcnRpbmcgQWxnb3JpdGhtXCI6IFtcIlNBTFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNlbnNvciBBcnJheVwiOiBbXCJTQVJcIiwgMS43LCAyXSxcclxuICAgIFwiU3RlbSBDZWxsIFRyZWF0bWVudFwiOiBbXCJTQ1wiLCAwLjA0LCAwLjAxXSxcclxuICAgIFwiU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJTQ0JcIiwgNTAsIDUwXSxcclxuICAgIFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCI6IFtcIlNDTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdWxmdXIgQ3J5c3RhbHNcIjogW1wiU0NSXCIsIDIuMDUsIDFdLFxyXG4gICAgXCJTdXJnaWNhbCBEcm9uZVwiOiBbXCJTRFJcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIjogW1wiU0VBXCIsIDAuMTUsIDAuMDddLFxyXG4gICAgXCJTZW5zb3JcIjogW1wiU0VOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1cmdpY2FsIEVxdWlwbWVudFwiOiBbXCJTRVFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTVEwgRnVlbFwiOiBbXCJTRlwiLCAwLjA2LCAwLjA2XSxcclxuICAgIFwiU21hbGwgRlRMIEVtaXR0ZXJcIjogW1wiU0ZFXCIsIDAuMSwgMC40XSxcclxuICAgIFwiU21hbGwgRmFzdGVuZXIgS2l0XCI6IFtcIlNGS1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU0ZMXCIsIDksIDEuNV0sXHJcbiAgICBcIlNpbGljb25cIjogW1wiU0lcIiwgMi4zMjksIDFdLFxyXG4gICAgXCJTaWxrZW4gRmFicmljXCI6IFtcIlNJTFwiLCAxLjIxLCAxXSxcclxuICAgIFwiU2lsaWNvbiBPcmVcIjogW1wiU0lPXCIsIDEuNzksIDFdLFxyXG4gICAgXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCI6IFtcIlNOTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFydGlmaWNpYWwgU29pbFwiOiBbXCJTT0lcIiwgMC45LCAxXSxcclxuICAgIFwiU29sYXIgQ2VsbFwiOiBbXCJTT0xcIiwgMC4wMTUsIDAuMDFdLFxyXG4gICAgXCJTb2xhciBQYW5lbFwiOiBbXCJTUFwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJTaGlwLVJlcGFpciBEcm9uZVwiOiBbXCJTUkRcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiU1JQXCIsIDAuMSwgMC4yXSxcclxuICAgIFwiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiOiBbXCJTU0NcIiwgMSwgMV0sXHJcbiAgICBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNTTFwiLCAyMCwgMjBdLFxyXG4gICAgXCJTdGVlbFwiOiBbXCJTVExcIiwgNy44NSwgMV0sXHJcbiAgICBcIk1lZGljYWwgU3RyZXRjaGVyXCI6IFtcIlNUUlwiLCAwLjAxLCAxXSxcclxuICAgIFwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCI6IFtcIlNUU1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlN1cmdlcnkgVW5pdFwiOiBbXCJTVVwiLCA2LCA1XSxcclxuICAgIFwiU3VydmVpbGxhbmNlIERyb25lXCI6IFtcIlNVRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTYWZldHkgVW5pZm9ybVwiOiBbXCJTVU5cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlNtYWxsIFdhZmVyXCI6IFtcIlNXRlwiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJUYW50YWx1bVwiOiBbXCJUQVwiLCAxNi42NSwgMV0sXHJcbiAgICBcIlRhcmdldGluZyBDb21wdXRlclwiOiBbXCJUQUNcIiwgMC4xNSwgMV0sXHJcbiAgICBcIlRhbnRhbGl0ZSBSb2NrXCI6IFtcIlRBSVwiLCA3Ljk0LCAxXSxcclxuICAgIFwiVGVjaG5ldGl1bVwiOiBbXCJUQ1wiLCAxMS44LCAxXSxcclxuICAgIFwiVGlueSBDYXJnbyBCYXkgS2l0XCI6IFtcIlRDQlwiLCAyMCwgMjBdLFxyXG4gICAgXCJUQ0wgQWNpZFwiOiBbXCJUQ0xcIiwgMC4wOSwgMC4xXSxcclxuICAgIFwiVGVjaG5ldGl1bSBPeGlkZVwiOiBbXCJUQ09cIiwgOS44LCAxXSxcclxuICAgIFwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCI6IFtcIlRDU1wiLCAzLjQsIDEuMl0sXHJcbiAgICBcIlRyYXVtYSBDYXJlIFVuaXRcIjogW1wiVENVXCIsIDUsIDRdLFxyXG4gICAgXCJUaGVybW9GbHVpZFwiOiBbXCJUSEZcIiwgMC42LCAwLjM1XSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIlRIUFwiLCAyLjIsIDFdLFxyXG4gICAgXCJUaXRhbml1bVwiOiBbXCJUSVwiLCA0LjUsIDFdLFxyXG4gICAgXCJUaXRhbml1bSBPcmVcIjogW1wiVElPXCIsIDEuNTgsIDFdLFxyXG4gICAgXCJUZWNobm9LZXZsYXIgRmFicmljXCI6IFtcIlRLXCIsIDEuODksIDFdLFxyXG4gICAgXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCI6IFtcIlRQVVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJBdWRpbyBUcmFuc21pdHRlclwiOiBbXCJUUkFcIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNpc3RvclwiOiBbXCJUUk5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiVHJ1c3NcIjogW1wiVFJVXCIsIDAuMSwgMS41XSxcclxuICAgIFwiVGVjdG9zaWxpc2l0ZVwiOiBbXCJUU1wiLCAyLjQsIDFdLFxyXG4gICAgXCJUaGVybWFsIFNoaWVsZGluZ1wiOiBbXCJUU0hcIiwgMi40LCAxLjVdLFxyXG4gICAgXCJUZXN0IFR1YmVzXCI6IFtcIlRVQlwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJVbml2ZXJzYWwgVG9vbHNldFwiOiBbXCJVVFNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIjogW1wiVkNCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiOiBbXCJWRUdcIiwgMS4xLCAxXSxcclxuICAgIFwiVml0YUdlbFwiOiBbXCJWR1wiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJWaXRhIEVzc2VuY2VcIjogW1wiVklUXCIsIDAuOSwgMV0sXHJcbiAgICBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWU0NcIiwgMzUsIDM1XSxcclxuICAgIFwiVHVuZ3N0ZW5cIjogW1wiV1wiLCA3LjUxOSwgMV0sXHJcbiAgICBcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIjogW1wiV0FJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiOiBbXCJXQUxcIiwgNi4yNSwgMV0sXHJcbiAgICBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCI6IFtcIldDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlNtYXJ0IFppbmZhbmRlbFwiOiBbXCJXSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJXaW5kb3cgTWFuYWdlclwiOiBbXCJXTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCI6IFtcIldPUlwiLCA1LCA1XSxcclxuICAgIFwiV2F0ZXIgUmVjbGFpbWVyXCI6IFtcIldSXCIsIDYuNCwgNV0sXHJcbiAgICBcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCI6IFtcIldTXCIsIDAuMDUsIDAuNV0sXHJcbiAgICBcIlppcmNvbiBDcnlzdGFsc1wiOiBbXCJaSVJcIiwgNC44NSwgMV0sXHJcbiAgICBcIlppcmNvbml1bVwiOiBbXCJaUlwiLCA2LjUzLCAxXSxcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2FtZVByb3BlcnRpZXMudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFN0eWxlID0ge1xyXG4gICAgQnV0dG9uOiBbXCJmTVc2MmNFUm5senhaUEZobmxQT2VRPT1cIl0sXHJcbiAgICBCdXR0b25QcmltYXJ5OiBbXCJrZ0dzRE52RG9XajYxdzRJN1ZBbGZBPT1cIl0sXHJcbiAgICBCdXR0b25TdWNjZXNzOiBbXCJRVzgweHZlUW0yR0VTa1NPUlJIMjRnPT1cIl0sXHJcbiAgICBCdXR0b25EYW5nZXI6IFtcIlpGWFd5NEhDbnp0cFpObENYazgzd1E9PVwiXSxcclxuICAgIFNpZGViYXJTZWN0aW9uSGVhZDogW1wiXzJZck9NNy0yc2RLMDQyVnZINldhSmc9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiXSxcclxuICAgIFNpZGViYXJTZWN0aW9uQ29udGVudDogW1wiQ04wTlBOb3ZsWXRhSW00YnFIRmJMdz09XCIsIFwiZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09XCJdLFxyXG4gICAgU2lkZWJhckxpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcclxuICAgIEZvbnRzUmVndWxhcjogW1wiQ0JvckliRkM2WXQrRlJZRUhaeXVhQT09XCJdLFxyXG4gICAgU2lkZWJhclRleHQ6IFtcIngtbUx4RXdDLU9EaDlNWER4NER4U1E9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiLCBcIk83Ulg0elhMNGd6SExvT3dUVmJyWHc9PVwiXSxcclxuICAgIFNpZGViYXJTbGl2ZXI6IFtcIlpQc1JZQ09qN3BYNTlHWURJaU90S2c9PVwiLCBcIi1kY1lmYkNXUDcyVlMyT0Zob0RHLVE9PVwiXSxcclxuICAgIFNpZGViYXJCdXR0b246IFtcIkdIQ1B5anMzYnhoYitXWjJCR0xXSHc9PVwiXSxcclxuICAgIENvbnRyYWN0TGluZTogW1wieTg0RVVJOGdDUC1TVjkxWDd2SWloUT09XCIsIFwiZlZkM2FZSmhGWS11dWFIK1FUQnloQT09XCJdLFxyXG4gICAgQ29udHJhY3ROYW1lOiBbXCJ6aGl4cDQwOFlGMDgySXpBNUtQdmZBPT1cIl0sXHJcbiAgICBDb250cmFjdFZpZXc6IFtcImtxNUJyR0tuVFVUcUNEWU1wTFE5MGc9PVwiXSxcclxuICAgIFNldHRpbmdzQnV0dG9uOiBbXCJBMFJheHQweVM0MVpRbG56bUV2dXNnPT1cIiwgXCJuY0hySURzeE5LSDhMYk1EaWdVaVJnPT1cIl0sXHJcbiAgICBTZXR0aW5nc0JhclVudG9nZ2xlZDogW1wiWjlqWUQ4THlMWm9CUGI3SnNBUlQxdz09XCIsIFwiUDZBcmJhNTNJN2NSdnhpSDAtcERRZz09XCJdLFxyXG4gICAgU2V0dGluZ3NCYXJUb2dnbGVkOiBbXCJaOWpZRDhMeUxab0JQYjdKc0FSVDF3PT1cIiwgXCJQNkFyYmE1M0k3Y1J2eGlIMC1wRFFnPT1cIiwgXCJWLTc1dGIwM2VuR1ZkY0IrU3ctbVJBPT1cIiwgXCJ2S2tCMFc3akFUdGQ4ZFN6Z09ZRUtRPT1cIl0sXHJcbiAgICBTZXR0aW5nc1RleHQ6IFtcIllHU29xWndxa2FHMkNWbHR4TXdvT3c9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiLCBcImtXVEgxLUhrWUNXZVl5RFJnWjdvelE9PVwiLCBcIlAzc1NRa0NSVWdrcG1LVWdpZUpRdmc9PVwiXVxyXG59O1xyXG5leHBvcnQgY29uc3QgV2l0aFN0eWxlcyA9ICguLi5zdHlsZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0eWxlLnJlZHVjZSgoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKSkpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgVGV4dENvbG9ycyA9IHtcclxuICAgIEZhaWx1cmU6IFwiI2Q5NTM0ZlwiLFxyXG4gICAgU3VjY2VzczogXCIjNWNiODVjXCIsXHJcbiAgICBTdGFuZGFyZDogXCIjYmJiYmJiXCJcclxufTtcclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5Q29sb3JzID0ge1xyXG4gICAgXCJlbGVjdHJvbmljIGRldmljZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg2LCAyMCwgMTQ3KSwgcmdiKDExMSwgNDUsIDE3MikpXCIsIFwicmdiKDIxMywgMTQ3LCAyNTUpXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUsIDMwLCA5OCksIHJnYig0MCwgNTUsIDEyMykpXCIsIFwicmdiKDE0MiwgMTU3LCAyMjUpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUxLCAyNiwgNzYpLCByZ2IoNzYsIDUxLCAxMDEpKVwiLCBcInJnYigxNzgsIDE1MywgMjAzKVwiXSxcclxuICAgIFwibWVkaWNhbCBlcXVpcG1lbnRcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg1LCAxNzAsIDg1KSwgcmdiKDExMCwgMTk1LCAxMTApKVwiLCBcInJnYigyMTIsIDI1NSwgMjEyKVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MSwgNzcsIDEwNyksIHJnYig2NiwgMTAyLCAxMzIpKVwiLCBcInJnYigxNjgsIDIwNCwgMjM0KVwiXSxcclxuICAgIFwic2hpcCBlbmdpbmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDQxLCAwKSwgcmdiKDE3OCwgNjYsIDI1KSlcIiwgXCJyZ2IoMjU1LCAxNjgsIDEyNylcIl0sXHJcbiAgICBcInNoaXAgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgOTksIDApLCByZ2IoMTc4LCAxMjQsIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMjYsIDEyNylcIl0sXHJcbiAgICBcIm1ldGFsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTQsIDU0LCA1NCksIHJnYig3OSwgNzksIDc5KSlcIiwgXCJyZ2IoMTgxLCAxODEsIDE4MSlcIl0sXHJcbiAgICBcImNvbnN1bWFibGVzIChsdXh1cnkpXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMzYsIDI0LCAzOSksIHJnYigxNjEsIDQ5LCA2NCkpXCIsIFwicmdiKDI1NSwgMTUxLCAxNjYpXCJdLFxyXG4gICAgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkyLCAxOCwgMTgpLCByZ2IoMTE3LCA0MywgNDMpKVwiLCBcInJnYigyMTksIDE0NSwgMTQ1KVwiXSxcclxuICAgIFwib3Jlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoODIsIDg3LCA5NyksIHJnYigxMDcsIDExMiwgMTIyKSlcIiwgXCJyZ2IoMjA5LCAyMTQsIDIyNClcIl0sXHJcbiAgICBcImdhc2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigwLCAxMDUsIDEwNyksIHJnYigyNSwgMTMwLCAxMzIpKVwiLCBcInJnYigxMjcsIDIzMiwgMjM0KVwiXSxcclxuICAgIFwic2hpcCBzaGllbGRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyMjQsIDEzMSwgMCksIHJnYigyNDksIDE1NiwgMjUpKVwiLCBcInJnYigyMzAgMjMwLDEyNylcIl0sXHJcbiAgICBcImFsbG95c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIzLCA3NiwgMzApLCByZ2IoMTQ4LCAxMDEsIDU1KSlcIiwgXCJyZ2IoMjUwLCAyMDMsIDE1NylcIl0sXHJcbiAgICBcImNoZW1pY2Fsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTgzLCA0NiwgOTEpLCByZ2IoMjA4LCA3MSwgMTE2KSlcIiwgXCJyZ2IoMjU1LCAxNzMsIDIxOClcIl0sXHJcbiAgICBcInNvZnR3YXJlIGNvbXBvbmVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMTIxLCA0NyksIHJnYigxNjEsIDE0NiwgNzIpKVwiLCBcInJnYigyNTUsIDI0OCwgMTc0KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBwaWVjZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExOSwgODIsIDE4OSksIHJnYigxNDQsIDEwNywgMjE0KSlcIiwgXCJyZ2IoMjQ2LCAyMDksIDI1NSlcIl0sXHJcbiAgICBcImVsZW1lbnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MSwgNDYsIDMyKSwgcmdiKDg2LCA3MSwgNTcpKVwiLCBcInJnYigxODgsIDE3MywgMTU5KVwiXSxcclxuICAgIFwibWluZXJhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgMTEzLCA3MyksIHJnYigxNzgsIDEzOCwgOTgpKVwiLCBcInJnYigyNTUsIDI0MCwgMjAwKVwiXSxcclxuICAgIFwidW5pdCBwcmVmYWJzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyOSwgMjcsIDI4KSwgcmdiKDU0LCA1MiwgNTMpKVwiLCBcInJnYigxNTYsIDE1NCwgMTU1KVwiXSxcclxuICAgIFwibGlxdWlkc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTE0LCAxNjQsIDIwMiksIHJnYigxMzksIDE4OSwgMjI3KSlcIiwgXCJyZ2IoMjQxLCAyNTUsIDI1NSlcIl0sXHJcbiAgICBcImVuZXJneSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyMSwgNjIsIDM5KSwgcmdiKDQ2LCA4NywgNjQpKVwiLCBcInJnYigxNDgsIDE4OSwgMTY2KVwiXSxcclxuICAgIFwiZHJvbmVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDAsIDUyLCAxOCksIHJnYigxNjUsIDc3LCA0MykpXCIsIFwicmdiKDI1NSwgMTc5LCAxNDUpXCJdLFxyXG4gICAgXCJlbGVjdHJvbmljIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig5MSwgNDYsIDE4MyksIHJnYigxMTYsIDcxLCAyMDgpKVwiLCBcInJnYigyMTgsIDE3MywgMjU1KVwiXSxcclxuICAgIFwidGV4dGlsZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA5MCwgMzMpLCByZ2IoMTA3LCAxMTUsIDU4KSlcIiwgXCJyZ2IoMjA5LCAyMTcsIDE2MClcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDI0LCA5MSwgMjExKSwgcmdiKDQ5LCAxMTYsIDIzNikpXCIsIFwicmdiKDE1MSwgMjE4LCAyNTUpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSB0b29sc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTI5LCA5OCwgMTkpLCByZ2IoMTU0LCAxMjMsIDQ0KSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDE0NilcIl0sXHJcbiAgICBcInBsYXN0aWNzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjEsIDMxLCA2MCksIHJnYigxNDYsIDU2LCA4NSkpXCIsIFwicmdiKDI0OCwgMTU4LCAxODcpXCJdLFxyXG4gICAgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNDksIDQ2LCA0NiksIHJnYigxNzQsIDcxLCA3MSkpXCIsIFwicmdiKDI1NSwgMTczLCAxNzMpXCJdLFxyXG4gICAgXCJmdWVsc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAsIDEyMywgMzApLCByZ2IoNTUsIDE0OCwgNTUpKVwiLCBcInJnYigxNTcsIDI1MCwgMTU3KVwiXSxcclxuICAgIFwic29mdHdhcmUgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjAsIDUzLCA1KSwgcmdiKDg1LCA3OCwgMzApKVwiLCBcInJnYigxODcsIDE4MCwgMTMyKVwiXSxcclxuICAgIFwic2hpcCBraXRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTQsIDg0LCAwKSwgcmdiKDE3OCwgMTA5LCAyNSkpXCIsIFwicmdiKDI1NSwgMjExLCAxMjcpXCJdLFxyXG4gICAgXCJ1dGlsaXR5XCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNjEsIDE0OCwgMTM2KSwgcmdiKDE4NiwgMTczLCAxNjEpKVwiLCBcInJnYigyNTUsIDI1NSwgMjU1KVwiXSxcclxuICAgIFwic2hpcG1lbnRcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzMDMwMywgIzE4MTgxOClcIiwgXCIjN2Y3ZjdmXCJdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQTU1HU3R5bGUgPSBgXHJcbi50b29sdGlwIC50b29sdGlwLXRleHQge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHBhZGRpbmcgPSAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuXHRtYXgtaGVpZ2h0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xM3B4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDsgXHJcblx0bGVmdDogMTA1JTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXAtdGV4dHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0cGFkZGluZyA9IDVweDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXAtdGV4dDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRyaWdodDogOTklO1xyXG5cdGJvcmRlci13aWR0aDogNXB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG4uYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTAzNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjOWZiYjlmO1xyXG59XHJcbi5idXJuLXllbGxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzgzNmUyNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjZkZjk0O1xyXG59XHJcbi5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbi5pbnYtaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cGFkZGluZzogMnB4IDhweDtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4uaW52LWJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHRwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0bWFyZ2luOiAxcHggMnB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmN2E2MDA7fVxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LXRleHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhkNjQxMTtcclxuXHRjb2xvcjogI2NjY2NjYztcclxuXHRcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5oaWRkZW4tZWxlbWVudHtcclxuXHR2aXNpYmlsaXR5OiBmYWxzZSAhaW1wb3J0YW50O1xyXG5cdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bWFyZ2luLXRvcDogLThweDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0OmhvdmVye1xyXG5cdGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTY2LCAwKTtcclxufWA7XHJcbmV4cG9ydCBjb25zdCBFbmhhbmNlZENvbG9ycyA9IGAvKiBjb25zdW1hYmxlcyAobHV4dXJ5KSAqL1xyXG5kaXZbdGl0bGU9XCJTdGVsbGFyIFBhbGUgQWxlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEVcIl0sXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DT0ZcIl0sXHJcbmRpdlt0aXRsZT1cIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HSU5cIl0sXHJcbmRpdlt0aXRsZT1cIktvbWJ1Y2hhXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9LT01cIl0sXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlNUXCJdLFxyXG5kaXZbdGl0bGU9XCJQYWRkZWQgV29yayBPdmVyYWxsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QV09cIl0sXHJcbmRpdlt0aXRsZT1cIlJlcGFpciBLaXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JFUFwiXSxcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZHXCJdLFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dJTlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ODAwMDAsICM3YjAwMTIpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZGI5MTkxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogYWdyaWN1bHR1cmFsIHByb2R1Y3RzICovXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBBbGdhZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxHXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JFQVwiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NBRlwiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GT0RcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSQVwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIEdyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JOXCJdLFxyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hDUFwiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFUlwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IT1BcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBNYWl6ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUFJXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVFBcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01VU1wiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIE51dHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05VVFwiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BJQlwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFBBXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQ09cIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JTSVwiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkVHXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZJVFwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDM4MDAsICMwYTQ3MDgpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjOGJiMzdiICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogcGxhc3RpY3MgKi9cclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENMXCJdLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBNXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ01cIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIFNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDU1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seS1FdGh5bGVuZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUEVcIl0sXHJcbmRpdlt0aXRsZT1cIlBvbHltZXIgR3JhbnVsYXRlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QR1wiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIExcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTTFwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTTVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBTaGVldCBUeXBlIFNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BTU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3OTFmNjIsICM5MjM4N2IpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjg5ZWUxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY29uc3VtYWJsZXMgKGJhc2ljKSAqL1xyXG5kaXZbdGl0bGU9XCJEcmlua2luZyBXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRFdcIl0sXHJcbmRpdlt0aXRsZT1cIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRVhPXCJdLFxyXG5kaXZbdGl0bGU9XCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRklNXCJdLFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9ITVNcIl0sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hTU1wiXSxcclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xDXCJdLFxyXG5kaXZbdGl0bGU9XCJRdWFsaXR5IE1lYXQgTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVBXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVEXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfT1ZFXCJdLFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUERBXCJdLFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFRcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIFJhdGlvbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JBVFwiXSxcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ05cIl0sXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhNjJjMmEsICNiYTM2M2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmY5ODllICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZnVlbHMgKi9cclxuZGl2W3RpdGxlPVwiRlRMIEZ1ZWxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZGXCJdLFxyXG5kaXZbdGl0bGU9XCJTVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0ZcIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTQ4ZDIyLCAjNmJhMjNjKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2NiZmFhMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGxpcXVpZHMgKi9cclxuZGl2W3RpdGxlPVwiSGVsaW90cm9wZSBFeHRyYWN0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IRVhcIl0sXHJcbmRpdlt0aXRsZT1cIkxpcXVpZCBFaW5zdGVpbml1bVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTEVTXCJdLFxyXG5kaXZbdGl0bGU9XCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JUU1wiXSxcclxuZGl2W3RpdGxlPVwiV2F0ZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0gyT1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2N2E4ZGEsICM2MDk4YzMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZjFmZmZmICFpbXBvcnRhbnQ7XHJcbn1gO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TdHlsZS50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHJpY2VzKHByaWNlcywgd2ViYXBwSUQpIHtcclxuICAgIGlmICh3ZWJhcHBJRCA9PSB1bmRlZmluZWQgfHwgd2ViYXBwSUQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWIgQXBwIFRpbWVvdXRcIik7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyZWl2ZWQgUHJpY2VzIGZyb20gV2ViIEFwcFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmljZURhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByaWNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNba2V5XSA9IHByaWNlRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhZCBEYXRhIGZyb20gV2ViIEFwcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMnByaWNlJTIyXCIsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKGJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgdXNlcm5hbWUgPT0gdW5kZWZpbmVkIHx8IHVzZXJuYW1lID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuW3VzZXJuYW1lXSA9IFtdO1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJTyBCdXJuIFRpbWVvdXRcIik7XHJcbiAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBCdXJuIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL3VzZXIvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcm91cEJ1cm4oYnVybiwgZ3JvdXBpZCwgYXBpa2V5KSB7XHJcbiAgICBpZiAoYnVybiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBidXJuID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoYXBpa2V5ID09IHVuZGVmaW5lZCB8fCBhcGlrZXkgPT0gbnVsbCB8fCBncm91cGlkID09IHVuZGVmaW5lZCB8fCBncm91cGlkID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdldEdyb3VwQnVybihidXJuLCBncm91cGlkLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIEdyb3VwIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuW2dyb3VwaWRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDIwMDAwO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL2dyb3VwL1wiICsgZ3JvdXBpZCwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXJuU2V0dGluZ3MoYnVyblNldHRpbmdzLCB1c2VybmFtZSwgYXBpa2V5KSB7XHJcbiAgICBpZiAoYXBpa2V5ID09IHVuZGVmaW5lZCB8fCBhcGlrZXkgPT0gbnVsbCB8fCB1c2VybmFtZSA9PSB1bmRlZmluZWQgfHwgdXNlcm5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1cm5TZXR0aW5ncy5wdXNoKFwibG9hZGluZ1wiKTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGSU8gQnVybiBTZXR0aW5ncyBUaW1lb3V0XCIpO1xyXG4gICAgICAgIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIEJ1cm4gU2V0dGluZ3MgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBidXJuU2V0dGluZ3NbMF0gPSBcImxvYWRlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyblNldHRpbmdzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi91c2Vyc2V0dGluZ3MvYnVybnJhdGUvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0JhY2tncm91bmRSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRmxpZ2h0RVRBcyB9IGZyb20gXCIuL0ZsaWdodEVUQXNcIjtcclxuaW1wb3J0IHsgTG9jYWxNYXJrZXRBZHMgfSBmcm9tICcuL0xvY2FsTWFya2V0QWRzJztcclxuaW1wb3J0IHsgTW9kdWxlUnVubmVyIH0gZnJvbSBcIi4vTW9kdWxlUnVubmVyXCI7XHJcbmltcG9ydCB7IE9yZGVyRVRBcyB9IGZyb20gXCIuL09yZGVyRVRBc1wiO1xyXG5pbXBvcnQgeyBDb25zdW1hYmxlVGltZXJzIH0gZnJvbSBcIi4vQ29uc3VtYWJsZVRpbWVyc1wiO1xyXG5pbXBvcnQgeyBGbGVldEVUQXMgfSBmcm9tIFwiLi9GbGVldEVUQXNcIjtcclxuaW1wb3J0IHsgUG9zdExNIH0gZnJvbSBcIi4vUG9zdExNXCI7XHJcbmltcG9ydCB7IFNoaXBwaW5nQWRzIH0gZnJvbSBcIi4vU2hpcHBpbmdBZHNcIjtcclxuaW1wb3J0IHsgUXVldWVMb2FkIH0gZnJvbSBcIi4vUXVldWVMb2FkXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGdldFByaWNlcywgZ2V0QnVybiwgZ2V0QnVyblNldHRpbmdzIH0gZnJvbSBcIi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5pbXBvcnQgeyBQTU1HU3R5bGUsIEVuaGFuY2VkQ29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgUHJvZHVjdGlvblNjcm9sbCB9IGZyb20gXCIuL1Byb2R1Y3Rpb25TY3JvbGxcIjtcclxuaW1wb3J0IHsgU2NyZWVuVW5wYWNrIH0gZnJvbSBcIi4vU2NyZWVuVW5wYWNrXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IENvbW1hbmRDb3JyZWN0ZXIgfSBmcm9tIFwiLi9Db21tYW5kQ29ycmVjdGVyXCI7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JCdXR0b24gfSBmcm9tIFwiLi9DYWxjdWxhdG9yQnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbnRyYWN0RHJhZnRzIH0gZnJvbSBcIi4vQ29udHJhY3REcmFmdHNcIjtcclxudHJ5IHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJBSElCZWF1dGlmaWVyX0RhdGFcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcclxufVxyXG5jYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICBzdHlsZS5pZCA9IFwicG1tZy1zdHlsZVwiO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBQTU1HU3R5bGU7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcclxuICAgIGlmIChkb2MgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHsgXCJBSElCZWF1dGlmaWVyX0RhdGFcIjogW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCBbXSwgW10sIFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV1dIH07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XSA9IFszLCA2XTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bOF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzNdID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWVuaGFuY2VkLWNvbG9yc1wiO1xyXG4gICAgICAgIGNvbG9ycy50ZXh0Q29udGVudCA9IEVuaGFuY2VkQ29sb3JzO1xyXG4gICAgICAgIGlmIChkb2MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoY29sb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJpY2VzID0ge307XHJcbiAgICBnZXRQcmljZXMocHJpY2VzLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMl0pO1xyXG4gICAgdmFyIGJ1cm4gPSBbXTtcclxuICAgIGdldEJ1cm4oYnVybiwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0pO1xyXG4gICAgdmFyIGJ1cm5TZXR0aW5ncyA9IFtdO1xyXG4gICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0pO1xyXG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXHJcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXHJcbiAgICAgICAgbmV3IE9yZGVyRVRBcygpLFxyXG4gICAgICAgIG5ldyBGbGlnaHRFVEFzKCksXHJcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXHJcbiAgICAgICAgbmV3IFBvc3RMTShwcmljZXMpLFxyXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxyXG4gICAgICAgIG5ldyBRdWV1ZUxvYWQoKSxcclxuICAgICAgICBuZXcgQ29uc3VtYWJsZVRpbWVycyhyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMF0sIGJ1cm4sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XSksXHJcbiAgICAgICAgbmV3IEZsZWV0RVRBcygpLFxyXG4gICAgICAgIG5ldyBOb3RpZmljYXRpb25zKCksXHJcbiAgICAgICAgbmV3IFByb2R1Y3Rpb25TY3JvbGwoKSxcclxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs1XSksXHJcbiAgICAgICAgbmV3IENvbW1hbmRDb3JyZWN0ZXIoKSxcclxuICAgICAgICBuZXcgQ2FsY3VsYXRvckJ1dHRvbigpLFxyXG4gICAgICAgIG5ldyBTaWRlYmFyKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSlcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGlnaHRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCB0b0ZpeGVkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgTG9jYWxNYXJrZXRBZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWxtLWFkc1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0ICYmIHRleHQubWF0Y2goLyhCVVlJTkd8U0VMTElOR3xDT1JQKVxccyhcXGQrKVxccy4qXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmb3IvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG1hdGNoZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KG1hdGNoZXNbM10ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsQ2VudHMgPD0gLTEwMCB8fCB0b3RhbENlbnRzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfSBlYSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZXMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcy5tYXAobSA9PiB0aGlzLm1vZHVsZVRvTUUobSkpO1xyXG4gICAgICAgIHRoaXMueGl0ID0gbmV3IFhJVEhhbmRsZXIocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsyXSwgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdICE9IHVuZGVmaW5lZCAmJiByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW9kdWxlVG9NRShtb2R1bGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb2R1bGUsXHJcbiAgICAgICAgICAgIG5hbWU6IG1vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgY2xlYW51cFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHJ1blRpbWU6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLnhpdC5ydW4oKTtcclxuICAgICAgICB0aGlzLm1vZHVsZXMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5ydW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY291bnQrKztcclxuICAgICAgICAgICAgICAgIGVudHJ5LmNsZWFudXBUaW1lICs9IGNsZWFudXBUaW1lO1xyXG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vZHVsZVJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzLCBjcmVhdGVUZXh0U3BhbiB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBYSVRQcmVGdW5jdGlvbnMsIFhJVEJ1ZmZlclRpdGxlcyB9IGZyb20gXCIuL1hJVEZ1bmN0aW9uc1wiO1xyXG5leHBvcnQgY2xhc3MgWElUSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYXBpa2V5LCB3ZWJhcHBJRCwgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGIteGl0XCI7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMuYXBpa2V5ID0gYXBpa2V5O1xyXG4gICAgICAgIHRoaXMud2ViYXBwSUQgPSB3ZWJhcHBJRDtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgICAgIHRoaXMuYnVyblNldHRpbmdzID0gYnVyblNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXM7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiWElUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBidXJuID0gdGhpcy5idXJuO1xyXG4gICAgICAgIHZhciBidXJuU2V0dGluZ3MgPSB0aGlzLmJ1cm5TZXR0aW5ncztcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgdmFyIHRpbGUgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5YSVRUaWxlKTtcclxuICAgICAgICAgICAgaWYgKHRpbGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGlsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGVGbG9hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbGUgPT0gbnVsbCB8fCB0aWxlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmZpcnN0Q2hpbGQgIT0gdW5kZWZpbmVkICYmIHRpbGUuZmlyc3RDaGlsZC5pZCA9PSBcInBtbWctbG9hZC1zdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzUmF3ID0gQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpKVswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNSYXcgPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnNSYXcgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNSYXcuY2hhckF0KDQpID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycy5wdXNoKGtleS5zbGljZSgyKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycyA9PSB1bmRlZmluZWQgfHwgcGFyYW1ldGVycyA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5maXJzdENoaWxkICE9IHVuZGVmaW5lZCAmJiB0aWxlLmZpcnN0Q2hpbGQuaWQgPT0gXCJwbW1nLXJlbG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXSh0aWxlLmZpcnN0Q2hpbGQsIHBhcmFtZXRlcnMsIHRoaXMuYXBpa2V5LCB0aGlzLndlYmFwcElELCB0aGlzLnVzZXJuYW1lLCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcywgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInhpdC10aWxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIuKfs1wiKSk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi11cHBlci1yaWdodFwiKTtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5pZCA9IFwicmVmcmVzaFwiO1xyXG4gICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKHJlZnJlc2hCdXR0b24sIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgY29uc3QgcHJlRnVuYyA9IFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICBpZiAocHJlRnVuYyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBGdW5jdGlvbiFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVyVGl0bGUpKVswXS50ZXh0Q29udGVudCA9IFhJVEJ1ZmZlclRpdGxlc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpa2V5ID0gdGhpcy5hcGlrZXk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJhcHBJRCA9IHRoaXMud2ViYXBwSUQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lLCBidXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlc3VsdCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgdGlsZS5maXJzdENoaWxkLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgcHJlRnVuYyhjb250ZW50RGl2LCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgdXNlcm5hbWUsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQsIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBjcmVhdGVMaW5rLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGdldEdyb3VwQnVybiB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcclxuaW1wb3J0IHsgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjb25zdCBYSVRQcmVGdW5jdGlvbnMgPSB7XHJcbiAgICBcIklOVlwiOiBGSU9JbnZfcHJlLFxyXG4gICAgXCJESVNDT1JEXCI6IERpc2NvcmRfcHJlLFxyXG4gICAgXCJTSEVFVFNcIjogU2hlZXRzX3ByZSxcclxuICAgIFwiUFJPU1BFUklUWVwiOiBQcm9zcGVyaXR5X3ByZSxcclxuICAgIFwiUFJVTlwiOiBQUnVOX3ByZSxcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBTaGVldFRhYmxlX3ByZSxcclxuICAgIFwiRklOXCI6IEZpbl9wcmUsXHJcbiAgICBcIkNIQVRcIjogQ2hhdF9wcmUsXHJcbiAgICBcIkJVUk5cIjogRW5oYW5jZWRCdXJuX3ByZSxcclxuICAgIFwiU0VUVElOR1NcIjogU2V0dGluZ3NfcHJlLFxyXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcclxuICAgIFwiUkVQQUlSU1wiOiBSZXBhaXJzX3ByZSxcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yX3ByZSxcclxuICAgIFwiQ0FMQ1wiOiBDYWxjdWxhdG9yX3ByZVxyXG59O1xyXG5leHBvcnQgY29uc3QgWElUQnVmZmVyVGl0bGVzID0ge1xyXG4gICAgXCJJTlZcIjogXCJGSU8gSU5WRU5UT1JZXCIsXHJcbiAgICBcIkRJU0NPUkRcIjogXCJESVNDT1JEIFNFUlZFUlwiLFxyXG4gICAgXCJTSEVFVFNcIjogXCJHT09HTEUgU0hFRVRTXCIsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogXCJQUk9TUEVSSVRZXCIsXHJcbiAgICBcIlBSVU5cIjogXCJQUlVOLUNFUFRJT05cIixcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBcIkdPT0dMRSBTSEVFVFMgVEFCTEVcIixcclxuICAgIFwiRklOXCI6IFwiRklOQU5DSUFMIE9WRVJWSUVXXCIsXHJcbiAgICBcIkNIQVRcIjogXCJDSEFUXCIsXHJcbiAgICBcIkJVUk5cIjogXCJFTkhBTkNFRCBCVVJOXCIsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFwiUE1NRyBTRVRUSU5HU1wiLFxyXG4gICAgXCJDT05UUkFDVFNcIjogXCJQRU5ESU5HIENPTlRSQUNUU1wiLFxyXG4gICAgXCJSRVBBSVJTXCI6IFwiUkVQQUlSU1wiLFxyXG4gICAgXCJDQUxDXCI6IFwiQ0FMQ1VMQVRPUlwiLFxyXG4gICAgXCJDQUxDVUxBVE9SXCI6IFwiQ0FMQ1VMQVRPUlwiXHJcbn07XHJcbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xyXG4gICAgXCJVRk9cIjogW1wiODU1NDg4MzA5ODAyMTcyNDY5XCIsIFwiODU1NDg5NzExNjM1NDMxNDc1XCJdLFxyXG4gICAgXCJGSU9DXCI6IFtcIjgwNzk5MjY0MDI0NzMwMDExNlwiLCBcIjgwODQ1MTUxMjM1MTE5NTE2NlwiXSxcclxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcclxuICAgIFwiUENUXCI6IFtcIjY2NzU1MTQzMzUwMzAxNDkyNFwiLCBcIjY2NzU1MTQzMzUwMzAxNDkyN1wiXVxyXG59O1xyXG5mdW5jdGlvbiBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIGNhbGxiYWNrRnVuY3Rpb24sIHVybCwgcmVxdWVzdFR5cGUgPSBcIkdFVFwiLCBoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIERhdGEgQ291bGQgTm90IEJlIExvYWRlZCEgVGltZWQgT3V0IVwiO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbih0aWxlLCBwYXJhbWV0ZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihyZXF1ZXN0VHlwZSwgdXJsLCB0cnVlKTtcclxuICAgIGlmIChoZWFkZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRlbnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgeGhyLnNlbmQoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuKGVsZW0pIHtcclxuICAgIGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uY2hpbGRyZW5bMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc19wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGNvbnN0IHdhcm5pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh3YXJuaW5nRGl2KTtcclxuICAgIHdhcm5pbmdEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI0cHhcIjtcclxuICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJTZXR0aW5ncyBjaGFuZ2VzIHJlcXVpcmUgYSByZWZyZXNoIHRvIHRha2UgZWZmZWN0LlwiKSk7XHJcbiAgICBjb25zdCBtb2R1bGVTZXR0aW5nc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1vZHVsZSBTZXR0aW5nc1wiKSk7XHJcbiAgICBtb2R1bGVTZXR0aW5nc0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG1vZHVsZVNldHRpbmdzSGVhZGVyKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uQ29udGVudCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgbW9kdWxlcy5mb3JFYWNoKG1wID0+IHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuU2lkZWJhckxpbmUsIFN0eWxlLkZvbnRzUmVndWxhcikpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihtcC5uYW1lKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHJpZ2h0LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgcmlnaHQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBtYWtlVG9nZ2xlQnV0dG9uKFwiT25cIiwgXCJPZmZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtcC5lbmFibGVkID0gIW1wLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtcC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XVtpXSA9PSBtcC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtcC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdLnB1c2gobXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICAgICAgfSwgbXAuZW5hYmxlZCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XS5pbmNsdWRlcyhtcC5uYW1lKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBtcC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IFwiT2ZmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKHRvZ2dsZSk7XHJcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG1ha2VQdXNoQnV0dG9uKFwieFwiLCAoKSA9PiBtcC5tb2R1bGUuY2xlYW51cCgpKTtcclxuICAgICAgICBjbGVhbnVwLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI4cHhcIjtcclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjbGVhbnVwKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZW5oYW5jZWRDb2xvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRW5oYW5jZWQgQ29sb3JzXCIpKTtcclxuICAgIGVuaGFuY2VkQ29sb3JIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChlbmhhbmNlZENvbG9ySGVhZGVyKTtcclxuICAgIGNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBjcmVhdGVUZXh0U3BhbihcIkVuaGFuY2VkIENvbG9yc1wiKTtcclxuICAgIGNvbG9yTGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIGNvbG9yRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgY29uc3QgY29sb3JDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbG9yQ2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNvbG9yQ2hlY2suY2hlY2tlZCA9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVszXTtcclxuICAgIGNvbG9yQ2hlY2suc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBjb2xvckNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzNdID0gY29sb3JDaGVjay5jaGVja2VkO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvckNoZWNrKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY29sb3JEaXYpO1xyXG4gICAgY29uc3QgYnVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXJuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYnVybkxhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiQnVybiBTZXR0aW5nc1wiKSk7XHJcbiAgICBidXJuTGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgYnVybkxhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBidXJuRGl2LmFwcGVuZENoaWxkKGJ1cm5MYWJlbCk7XHJcbiAgICBjb25zdCBzZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnVybkRpdi5hcHBlbmRDaGlsZChzZXREaXYpO1xyXG4gICAgc2V0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNvbnN0IHJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXREaXYuYXBwZW5kQ2hpbGQocmVkRGl2KTtcclxuICAgIHJlZERpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlJlZCBUaHJlc2hvbGQ6IFwiKSk7XHJcbiAgICBjb25zdCByZWRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHJlZEluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgcmVkSW4udmFsdWUgPSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KTtcclxuICAgIHJlZERpdi5hcHBlbmRDaGlsZChyZWRJbik7XHJcbiAgICByZWRJbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIHJlZEluLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICByZWRJbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVswXSA9IHBhcnNlRmxvYXQocmVkSW4udmFsdWUpO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB5ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHllbERpdik7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJZZWxsb3cgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgeWVsSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB5ZWxJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHllbEluLnZhbHVlID0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICB5ZWxEaXYuYXBwZW5kQ2hpbGQoeWVsSW4pO1xyXG4gICAgeWVsSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICB5ZWxJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgeWVsSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMV0gPSBwYXJzZUZsb2F0KHllbEluLnZhbHVlKTtcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXJuRGl2KTtcclxuICAgIGNvbnN0IHNjcmVlblVucGFja0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBzY3JlZW5VbnBhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTY3JlZW4gVW5wYWNrIEV4Y2x1c2lvbnNcIikpO1xyXG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2NyZWVuVW5wYWNrSGVhZGVyKTtcclxuICAgIGNvbnN0IG5vdGlmRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQobm90aWZEaXYpO1xyXG4gICAgbm90aWZEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJMaXN0IHNjcmVlbiBuYW1lcyBzZXBhcmF0ZWQgYnkgY29tbWFzLCBubyBzcGFjZXMuXCIpKTtcclxuICAgIGNvbnN0IGV4Y2x1c2lvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBleGNsdXNpb25JbnB1dC52YWx1ZSA9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs1XSA9PSB1bmRlZmluZWQgPyBcIlwiIDogcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzVdLmpvaW4oXCIsXCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNV0gPSBleGNsdXNpb25JbnB1dC52YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZXhjbHVzaW9uSW5wdXQpO1xyXG4gICAgY29uc3QgaG90a2V5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhvdGtleUhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxlZnQgU2lkZWJhciBCdXR0b25zXCIpKTtcclxuICAgIGhvdGtleUhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhvdGtleUhlYWRlcik7XHJcbiAgICBjb25zdCBob3RrZXlJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhvdGtleUlucHV0RGl2KTtcclxuICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XS5mb3JFYWNoKGhvdGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSW5wdXRQYWlyKGhvdGtleSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XHJcbiAgICAgICAgaWYgKGRpdiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhvdGtleUlucHV0RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBtYWtlUHVzaEJ1dHRvbihcIitcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihbW10sIFtdXSwgcmVzdWx0LCBob3RrZXlJbnB1dERpdik7XHJcbiAgICAgICAgaWYgKGRpdiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhvdGtleUlucHV0RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XHJcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0cHhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIHJldHVybiBbcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3NdO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgZnVsbERpdikge1xyXG4gICAgaWYgKGhvdGtleS5sZW5ndGggIT0gMikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRpc3BsYXllZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRWYWx1ZSk7XHJcbiAgICBjb25zdCBjb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29tbWFuZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIGNvbW1hbmQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWFuZCk7XHJcbiAgICBjb25zdCByZW1vdmUgPSBtYWtlUHVzaEJ1dHRvbihcIlhcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBjb21tYW5kLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5ZWRWYWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRpdi5jaGlsZHJlbikuZm9yRWFjaChlbGVtID0+IHsgZGl2LnJlbW92ZUNoaWxkKGVsZW0pOyB9KTtcclxuICAgIH0sIFN0eWxlLkJ1dHRvbkRhbmdlcik7XHJcbiAgICByZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLnZhbHVlID0gaG90a2V5WzBdO1xyXG4gICAgY29tbWFuZC52YWx1ZSA9IGhvdGtleVsxXTtcclxuICAgIGRpc3BsYXllZFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSA9IGhvdGtleXM7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbW1hbmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG90a2V5cyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZnVsbERpdi5jaGlsZHJlbikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblswXS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaG90a2V5cy5wdXNoKFtvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUsIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdID0gaG90a2V5cztcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5mdW5jdGlvbiBtYWtlUHVzaEJ1dHRvbih0ZXh0LCBmLCBzdHlsZSA9IFN0eWxlLkJ1dHRvblByaW1hcnkpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlKTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBtYWtlVG9nZ2xlQnV0dG9uKG9uLCBvZmYsIGYsIHN0YXRlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcclxuICAgIGNvbnN0IHNldExvb2sgPSAocykgPT4ge1xyXG4gICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBzID8gb24gOiBvZmY7XHJcbiAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBTdHJpbmcoc3RhdGUpKTtcclxuICAgIHNldExvb2soc3RhdGUpO1xyXG4gICAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhKHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKG5ld1N0YXRlKSk7XHJcbiAgICAgICAgc2V0TG9vayhuZXdTdGF0ZSk7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfTtcclxuICAgIHRvZ2dsZS5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xyXG4gICAgcmV0dXJuIHRvZ2dsZTtcclxufVxyXG5mdW5jdGlvbiBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiU2F2ZWQgQ29uZmlndXJhdGlvblwiKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENhbGN1bGF0b3JfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY2FsY0Rpdik7XHJcbiAgICB0aWxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1heEhlaWdodCA9IFwiNDAwcHhcIjtcclxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgIG91dHB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgb3V0cHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIG91dHB1dC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLm1pbldpZHRoID0gXCIxODBweFwiO1xyXG4gICAgY29uc3QgaGlzdG9yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhpc3RvcnlEaXYpO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS53aWR0aCA9IFwiMzUlXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjE5NXB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCA0MCwgNDMpXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2IoNDMsNzIsOTApXCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSBcInNvbGlkXCI7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBoaXN0b3J5RGl2LmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZSk7XHJcbiAgICBjb25zdCBoaXN0b3J5VGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgaGlzdG9yeVRhYmxlLmFwcGVuZENoaWxkKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBvdXRwdXQuc3R5bGUud2lkdGggPSBcIjkwJVwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgb3V0cHV0LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChvdXRwdXQpO1xyXG4gICAgdmFyIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgdmFyIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICB2YXIgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICB2YXIgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgIHZhciBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgY29uc3Qga2V5cGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoa2V5cGFkKTtcclxuICAgIGtleXBhZC5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBrZXlwYWQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAga2V5cGFkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCg0LCAxZnIpXCI7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBbWzcsIG51bGxdLCBbOCwgbnVsbF0sIFs5LCBudWxsXSwgW1wiw7dcIiwgXCIjM2ZhMmRlXCJdLCBbNCwgbnVsbF0sIFs1LCBudWxsXSwgWzYsIG51bGxdLCBbXCJ4XCIsIFwiIzNmYTJkZVwiXSwgWzEsIG51bGxdLCBbMiwgbnVsbF0sIFszLCBudWxsXSwgW1wiLVwiLCBcIiMzZmEyZGVcIl0sIFswLCBudWxsXSwgW1wiLlwiLCBudWxsXSwgW1wiwrFcIiwgbnVsbF0sIFtcIitcIiwgXCIjM2ZhMmRlXCJdXTtcclxuICAgIGxheW91dC5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKG9wdFsxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXBhZC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAob3B0WzBdID09IFwiK1wiIHx8IG9wdFswXSA9PSBcIi1cIiB8fCBvcHRbMF0gPT0gXCJ4XCIgfHwgb3B0WzBdID09IFwiw7dcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG9wdFswXTtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0WzBdID09IFwiwrFcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY3VycmVudFN0cmluZy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCItXCIgKyBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gKG9wdFswXSA9PSAwID8gXCIwXCIgOiBvcHRbMF0gfHwgXCJcIikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBib3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChib3R0b21EaXYpO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLndpZHRoID0gXCI5NSVcIjtcclxuICAgIGJvdHRvbURpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBib3R0b21EaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDIsIDFmcilcIjtcclxuICAgIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChjbGVhcik7XHJcbiAgICBjbGVhci50ZXh0Q29udGVudCA9IFwiQ2xlYXJcIjtcclxuICAgIGNsZWFyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgIGNsZWFyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBjbGVhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMTcsIDgzLCA3OSlcIjtcclxuICAgIGNsZWFyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcclxuICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oaGlzdG9yeVRhYmxlQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IG91dHB1dC52YWx1ZTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5yZW1vdmVDaGlsZChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuW2hpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuaW5zZXJ0QmVmb3JlKHRyLCBoaXN0b3J5VGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGVudGVyKTtcclxuICAgIGVudGVyLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xyXG4gICAgZW50ZXIuY2xhc3NMaXN0LmFkZChcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgZW50ZXIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIGVudGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzVjYjg1Y1wiO1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCIxXCIgfHwgZS5rZXkgPT09IFwiMlwiIHx8IGUua2V5ID09PSBcIjNcIiB8fCBlLmtleSA9PT0gXCI0XCIgfHwgZS5rZXkgPT09IFwiNVwiIHx8IGUua2V5ID09PSBcIjZcIiB8fCBlLmtleSA9PT0gXCI3XCIgfHwgZS5rZXkgPT09IFwiOFwiIHx8IGUua2V5ID09PSBcIjlcIiB8fCBlLmtleSA9PT0gXCIwXCIgfHwgZS5rZXkgPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGVhck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IGUua2V5O1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCIrXCIgfHwgZS5rZXkgPT09IFwiLVwiIHx8IGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCIqXCIgfHwgZS5rZXkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gZS5rZXk7XHJcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCI9XCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSBvdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkucmVtb3ZlQ2hpbGQoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbltoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5Lmluc2VydEJlZm9yZSh0ciwgaGlzdG9yeVRhYmxlQm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBjdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgY2xlYXJPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGRvdWJsZUNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbikge1xyXG4gICAgY3VycmVudFN0cmluZyA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIitcIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgKyBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIi1cIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgLSBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcInhcIiB8fCBjdXJyZW50T3BlcmF0aW9uID09IFwiKlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAqIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50T3BlcmF0aW9uID09IFwiw7dcIiB8fCBjdXJyZW50T3BlcmF0aW9uID09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZWYWx1ZSAvIGN1cnJlbnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVwYWlyc19wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIFJlcGFpcnNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvc2l0ZXMvXCIgKyB1c2VybmFtZSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuIHdlYmFwcElEO1xyXG59XHJcbmZ1bmN0aW9uIFJlcGFpcnNfcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcGFpckRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcGFpckRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQWxsIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJQbGFuZXRcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVpbGRpbmdzID0gW107XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBzaXRlW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzLnB1c2goW3NpdGVbXCJQbGFuZXROYW1lXCJdLCBidWlsZF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGluZ3Muc29ydChnbG9iYWxCdWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVHZW5lcmFsUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgYnVpbGRpbmdzLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0gKyBcIiBSZXBhaXJzXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICB2YXIgc2l0ZURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVwYWlyRGF0YS5mb3JFYWNoKHNpdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2l0ZVtcIlBsYW5ldE5hbWVcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkgfHwgc2l0ZVtcIlBsYW5ldElkZW50aWZpZXJcIl0udG9VcHBlckNhc2UoKSA9PSBwYXJhbWV0ZXJzWzFdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVEYXRhID0gc2l0ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzaXRlRGF0YSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aHJlc2hvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGhyZXNob2xkRGl2KTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGRUZXh0ID0gY3JlYXRlVGV4dFNwYW4oXCJBZ2UgVGhyZXNob2xkOlwiKTtcclxuICAgICAgICB0aHJlc2hvbGRUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC52YWx1ZSA9IFwiNzBcIjtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRUZXh0KTtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdFRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJTaG9wcGluZyBDYXJ0XCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBtYXRUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdFRpdGxlKTtcclxuICAgICAgICBjb25zdCBtYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0RGl2KTtcclxuICAgICAgICBjb25zdCBidWlUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiQnVpbGRpbmdzXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI1cHhcIjtcclxuICAgICAgICBidWlUaXRsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGJ1aVRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgW1wiVGlja2VyXCIsIFwiQWdlXCIsIFwiQ29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2l0ZURhdGFbXCJCdWlsZGluZ3NcIl0uc29ydChidWlsZGluZ1NvcnQpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyQ2hpbGRyZW4oYm9keSk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCkge1xyXG4gICAgY29uc3Qgbm9uUHJvZCA9IFtcIkNNXCIsIFwiSEIxXCIsIFwiSEIyXCIsIFwiSEIzXCIsIFwiSEI0XCIsIFwiSEI1XCIsIFwiSEJCXCIsIFwiSEJDXCIsIFwiSEJMXCIsIFwiSEJNXCIsIFwiU1RPXCJdO1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0ge307XHJcbiAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1tcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1tcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1tcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XHJcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xyXG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KSB7XHJcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XHJcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGlmIChub25Qcm9kLmluY2x1ZGVzKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIChidWlsZGluZ1sxXVtcIkJ1aWxkaW5nTGFzdFJlcGFpclwiXSB8fCBidWlsZGluZ1sxXVtcIkJ1aWxkaW5nQ3JlYXRlZFwiXSkpIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGlmIChkYXRlIDwgcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGluZ1sxXVtcIlJlcGFpck1hdGVyaWFsc1wiXS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW2J1aWxkaW5nWzFdW1wiQnVpbGRpbmdUaWNrZXJcIl0sIGJ1aWxkaW5nWzBdLCBkYXRlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSksIChidWlsZGluZ1sxXVtcIkNvbmRpdGlvblwiXSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArIFwiJVwiXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2xlYXJDaGlsZHJlbihtYXREaXYpO1xyXG4gICAgbWF0RGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBtYXREaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHQgb2YgW1wiTWF0ZXJpYWxcIiwgXCJBbW91bnRcIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdDtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG1ib2R5KTtcclxuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuc29ydCgpLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgbWJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB2YXIgcm93RGF0YSA9IFttYXQsIG1hdGVyaWFsc1ttYXRdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCldO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRpbmdTb3J0KGEsIGIpIHtcclxuICAgIHJldHVybiBhW1wiQ29uZGl0aW9uXCJdID4gYltcIkNvbmRpdGlvblwiXSA/IDEgOiAtMTtcclxufVxyXG5mdW5jdGlvbiBnbG9iYWxCdWlsZGluZ1NvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbMV1bXCJDb25kaXRpb25cIl0gPiBiWzFdW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDaGF0X3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICB9XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENoYXRfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY2hhdC9kaXNwbGF5L1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENoYXRfcG9zdChjaGF0RGl2LCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNoYXREYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjaGF0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgY2hhdERpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBwYXJhbWV0ZXJzWzFdICsgXCIgR2xvYmFsIFNpdGUgT3duZXJzXCI7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICBjaGF0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNoYXREYXRhLmZvckVhY2goY2hhdCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmNsYXNzTGlzdC5hZGQoXCJjaGF0LWxpbmVcIik7XHJcbiAgICAgICAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TGluZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSAobmV3IERhdGUoY2hhdFtcIk1lc3NhZ2VUaW1lc3RhbXBcIl0pKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XHJcbiAgICAgICAgdGltZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XHJcbiAgICAgICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKFwidGltZS1kYXRlXCIpO1xyXG4gICAgICAgIHRpbWVEaXYuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZCh0aW1lRGF0ZURpdik7XHJcbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1uYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG4gICAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImNoYXQtbWVzc2FnZVwiKTtcclxuICAgICAgICBzd2l0Y2ggKGNoYXRbXCJNZXNzYWdlVHlwZVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0hBVFwiOlxyXG4gICAgICAgICAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiTWVzc2FnZVRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkpPSU5FRFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGpvaW5lZC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTEVGVFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGxlZnQuXCI7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmluX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElEKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuIGFwaWtleTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMmZpbiUyMiZwYXJhbT0lMjJcIiArIHBhcmFtZXRlcnNbMV0gKyBcIiUyMlwiO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGaW5fcG9zdCwgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRmluX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGlsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpbGVIZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBPdmVydmlld1wiO1xyXG4gICAgdGlsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiS2V5IEZpZ3VyZXNcIjtcclxuICAgIHRpbGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpbi10aXRsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGlsZUhlYWRlcik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzFdKS50b0xvY2FsZVN0cmluZygpLCBcIkZpeGVkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzJdKS50b0xvY2FsZVN0cmluZygpLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNF0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlxdWlkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzddKS50b0xvY2FsZVN0cmluZygpLCBcIkVxdWl0eVwiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzVdKS50b0xvY2FsZVN0cmluZygpLCBcIkxpYWJpbGl0aWVzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIGNvbnN0IG5vdyA9IGRhdGFbMF1bMF07XHJcbiAgICB2YXIgd2Vla0FnbyA9IC0xO1xyXG4gICAgdmFyIGJlc3RHdWVzcyA9IDg2NDAwMDAwMDAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKSA8IGJlc3RHdWVzcykge1xyXG4gICAgICAgICAgICBiZXN0R3Vlc3MgPSBNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCk7XHJcbiAgICAgICAgICAgIHdlZWtBZ28gPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3ZWVrQWdvICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZml0ID0gTWF0aC5yb3VuZChkYXRhWzBdWzddIC0gZGF0YVt3ZWVrQWdvXVs3XSk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBwcm9maXQgPiAwID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChwcm9maXQudG9Mb2NhbGVTdHJpbmcoKSwgXCJQcm9maXRcIiwgY29sb3IpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyZWFrZG93bkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGJyZWFrZG93bkhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIEJyZWFrZG93blwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRleHRDb250ZW50ID0gXCJJbnZlbnRvcnkgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpbi10aXRsZVwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnJlYWtkb3duSGVhZGVyKTtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gW1wiTmFtZVwiLCBcIkZpeGVkIEFzc2V0c1wiLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFwiVG90YWwgQXNzZXRzXCJdO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgaGVhZGVycykge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBjb25zdCBicmVha2Rvd24gPSBKU09OLnBhcnNlKGRhdGFbMF1bOF0pO1xyXG4gICAgYnJlYWtkb3duLnNvcnQoZmluYW5jaWFsU29ydCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGJyZWFrZG93bikge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RUYWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGZpcnN0VGFibGVFbGVtKTtcclxuICAgICAgICBmaXJzdFRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihyb3dEYXRhWzBdKSk7XHJcbiAgICAgICAgcm93RGF0YS5zaGlmdCgpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmFuY2lhbFNvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbM10gPCBiWzNdID8gMSA6IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFbmhhbmNlZEJ1cm5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lLCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB2YXIgYnVybjtcclxuICAgIHZhciB1bmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHBsYW5ldDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybiBbYXBpa2V5LCB3ZWJhcHBJRCwgbW9kdWxlc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICBpZiAoZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdW5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGlsZS5pZCAhPSBcInBtbWctcmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgIGdldEdyb3VwQnVybihmdWxsQnVybiwgcGFyYW1ldGVyc1syXSwgYXBpa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChmdWxsQnVyblt1c2VybmFtZV0gIT0gdW5kZWZpbmVkICYmIGZ1bGxCdXJuW3VzZXJuYW1lXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGJ1cm4gPSBmdWxsQnVyblt1c2VybmFtZV07XHJcbiAgICAgICAgICAgIHBsYW5ldCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJ1cm5TZXR0aW5nc1swXSA9PSBcImxvYWRpbmdcIiB8fCB1bmxvYWRlZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XHJcbiAgICAgICAgdGlsZS5pZCA9IFwicG1tZy1yZWxvYWRcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aWxlLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgdmFyIHNldHRpbmdzO1xyXG4gICAgaWYgKHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSA9PSBcImdyb3VwXCIpIHtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICBmdWxsQnVybltwYXJhbWV0ZXJzWzJdXS5mb3JFYWNoKHBsYW5ldERhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxhbmV0RGF0YVtcIkVycm9yXCJdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJJbnZlbnRvcnlcIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyQ29uc3VtcHRpb25cIl0uZm9yRWFjaChtYXRlcmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBsYW5ldERhdGFbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIk9yZGVyUHJvZHVjdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm4pO1xyXG4gICAgICAgIHNldHRpbmdzID0gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBidXJuU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgUGxhbmV0IVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25zID0ge307XHJcbiAgICAgICAgdmFyIGludiA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyQ29uc3VtcHRpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIHBsYW5ldEJ1cm5bXCJPcmRlclByb2R1Y3Rpb25cIl0pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIkludmVudG9yeVwiXSkge1xyXG4gICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGludlttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNjcmVlbk5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5TY3JlZW5OYW1lKTtcclxuICAgIGNvbnN0IHNjcmVlbk5hbWUgPSBzY3JlZW5OYW1lRWxlbSA/IHNjcmVlbk5hbWVFbGVtLnRleHRDb250ZW50IDogXCJcIjtcclxuICAgIGNvbnN0IGRpc3BTZXR0aW5ncyA9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs4XVtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSArIChwYXJhbWV0ZXJzWzJdIHx8IFwiXCIpXSB8fCBbMSwgMSwgMSwgMV07XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldHRpbmdzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2V0dGluZ3NEaXYpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJSRURcIiwgMjIuMDI1LCBkaXNwU2V0dGluZ3NbMF0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMF0gPSBkaXNwU2V0dGluZ3NbMF0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs4XVtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSArIChwYXJhbWV0ZXJzWzJdIHx8IFwiXCIpXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiWUVMTE9XXCIsIDQwLjQ4MywgZGlzcFNldHRpbmdzWzFdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzFdID0gZGlzcFNldHRpbmdzWzFdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bOF1bc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0gKyAocGFyYW1ldGVyc1syXSB8fCBcIlwiKV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIkdSRUVOXCIsIDM0LjY1LCBkaXNwU2V0dGluZ3NbMl0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMl0gPSBkaXNwU2V0dGluZ3NbMl0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs4XVtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSArIChwYXJhbWV0ZXJzWzJdIHx8IFwiXCIpXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiSU5GXCIsIDE5LjYsIGRpc3BTZXR0aW5nc1szXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1szXSA9IGRpc3BTZXR0aW5nc1szXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdICsgKHBhcmFtZXRlcnNbMl0gfHwgXCJcIildID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJOZWVkc1wiLCBcIlByb2R1Y3Rpb25cIiwgXCJJbnZcIiwgXCJBbXQuIE5lZWRlZFwiLCBcIkJ1cm5cIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBoZWFkUm93LmZpcnN0Q2hpbGQuY29sU3BhbiA9IDI7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICB2YXIgYnVybk1hdGVyaWFscyA9IE9iamVjdC5rZXlzKGNvbnMpO1xyXG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBidXJuTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgdmFyIGluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgIT0gdW5kZWZpbmVkICYmIHBhcmFtZXRlcnNbMV0udG9Mb3dlckNhc2UoKSAhPSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbXCJNYXRlcmlhbEV4Y2x1c2lvbnNcIl0uZm9yRWFjaCgobWF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl0gPT0gbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihNYXRlcmlhbE5hbWVzW21hdGVyaWFsXVswXSk7XHJcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbnNDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc0NvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihjb25zW21hdGVyaWFsXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIgLyBEYXlcIikpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBpbnZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc3QgaW52QW1vdW50ID0gaW52W21hdGVyaWFsXSA9PSB1bmRlZmluZWQgPyAwIDogaW52W21hdGVyaWFsXTtcclxuICAgICAgICBpbnZDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oaW52QW1vdW50LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW52Q29sdW1uKTtcclxuICAgICAgICBjb25zdCBidXJuID0gaW52QW1vdW50ID09IDAgPyAwIDogLWludkFtb3VudCAvIGNvbnNbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGNvbnN0IGJ1cm5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgYnVybkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbigoKGJ1cm4gPCA1MDAgJiYgY29uc1ttYXRlcmlhbF0gPCAwKSA/IE1hdGguZmxvb3IoYnVybikudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA6IFwi4oieXCIpICsgXCIgRGF5c1wiKSk7XHJcbiAgICAgICAgaWYgKGNvbnNbbWF0ZXJpYWxdID49IDApIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1pbmZpbml0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMF0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdKSB7XHJcbiAgICAgICAgICAgIGJ1cm5Db2x1bW4uY2xhc3NMaXN0LmFkZChcImJ1cm4teWVsbG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi1ncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmVlZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBuZWVkQW10ID0gYnVybiA+IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVsxXSB8fCBjb25zW21hdGVyaWFsXSA+IDAgPyAwIDogKGJ1cm4gLSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMV0pICogY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgbmVlZENvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihuZWVkQW10LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmVlZENvbHVtbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGJ1cm5Db2x1bW4pO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncykge1xyXG4gICAgQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbikuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1pbmZpbml0ZVwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidGFibGUtcm93XCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbM10gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1szXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tZ3JlZW5cIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInRhYmxlLXJvd1wiIDogXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzJdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMl0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXllbGxvd1wiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidGFibGUtcm93XCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMV0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1sxXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4tcmVkXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ0YWJsZS1yb3dcIiA6IFwiZmxleFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1swXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzBdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XHJcbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1thXSA9PSB1bmRlZmluZWQgfHwgTWF0ZXJpYWxOYW1lc1tiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbE5hbWVzW2FdWzFdLmxvY2FsZUNvbXBhcmUoTWF0ZXJpYWxOYW1lc1tiXVsxXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNoZWV0VGFibGVfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm4gYXBpa2V5O1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzJdICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc0J1dHRvbih0ZXh0LCB3aWR0aCwgdG9nZ2xlZCwgZikge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKHRvZ2dsZWQpIHtcclxuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NUZXh0KTtcclxuICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCdXR0b24pO1xyXG4gICAgYmFyLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBiYXIuc3R5bGUubWF4V2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChiYXIpO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHRCb3gpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRvZ2dsZWQpIHtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJVbnRvZ2dsZWQpO1xyXG4gICAgICAgICAgICB0b2dnbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZnVuY3Rpb24gU2hlZXRUYWJsZV9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBkYXRhWzBdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZFJvdy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgZGF0YS5zaGlmdCgpO1xyXG4gICAgZm9yIChsZXQgcm93RGF0YSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDb250cmFjdHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDb250cmFjdHNfcG9zdCwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvY29udHJhY3QvYWxsY29udHJhY3RzL1wiICsgdXNlcm5hbWUsIFwiR0VUXCIsIFtcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5XSwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybiBbd2ViYXBwSURdO1xyXG59XHJcbmZ1bmN0aW9uIENvbnRyYWN0c19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udHJhY3REYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cmFjdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1eUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGJ1eUhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkJ1eWluZ1wiKSk7XHJcbiAgICBidXlIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChidXlIZWFkZXIpO1xyXG4gICAgY29uc3QgYnV5VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGJ1eVRhYmxlKTtcclxuICAgIGNvbnN0IGJ1eUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBidXlUYWJsZS5hcHBlbmRDaGlsZChidXlIZWFkKTtcclxuICAgIGNvbnN0IGJ1eUhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBidXlIZWFkLmFwcGVuZENoaWxkKGJ1eUhlYWRSb3cpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTWF0ZXJpYWxcIiwgXCJOYW1lXCIsIFwiUGFydG5lclwiLCBcIkZ1bGZpbGxlZFwiLCBcIlByb3Zpcy5cIiwgXCJQYWlkXCIsIFwiUGljayBVcFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGJ1eUhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1eUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICBidXlUYWJsZS5hcHBlbmRDaGlsZChidXlCb2R5KTtcclxuICAgIHZhciBzZWVuQ29udHJhY3RzID0gW107XHJcbiAgICBjb250cmFjdERhdGEuZm9yRWFjaChjb250cmFjdCA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkJSRUFDSEVEXCIgfHwgY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiVEVSTUlOQVRFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkNBTkNFTExFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIlJFSkVDVEVEXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VlbkNvbnRyYWN0cy5pbmNsdWRlcyhjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoIC0gMjtcclxuICAgICAgICBpZiAoKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggPT0gMiAmJiBjb250cmFjdFtcIlBhcnR5XCJdID09PSBcIlBST1ZJREVSXCIpIHx8IChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09IDMgJiYgY29udHJhY3RbXCJQYXJ0eVwiXSA9PT0gXCJDVVNUT01FUlwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBidXlCb2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgY29uc3QgbWF0RWxlbSA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMSArIG9mZnNldF1bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMSArIG9mZnNldF1bXCJNYXRlcmlhbEFtb3VudFwiXSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIG5hbWVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhjb250cmFjdFtcIk5hbWVcIl0gfHwgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0sIFwiQ09OVCBcIiArIGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKSk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkNPIFwiICsgY29udHJhY3RbXCJQYXJ0bmVyQ29tcGFueUNvZGVcIl0pKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwYXJ0bmVyQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NoZWNrID0gY3JlYXRlVGV4dFNwYW4oXCLirKRcIik7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5jb2xvciA9IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVtvZmZzZXRdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwZW5kaW5nQ2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBwZW5kaW5nQ29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDb2x1bW4uYXBwZW5kQ2hpbGQocGVuZGluZ0NoZWNrKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwZW5kaW5nQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvdkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvdkNoZWNrID0gY3JlYXRlVGV4dFNwYW4oY29udHJhY3RbXCJDb25kaXRpb25zXCJdWzEgKyBvZmZzZXRdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmNvbG9yID0gY29udHJhY3RbXCJDb25kaXRpb25zXCJdWzEgKyBvZmZzZXRdW1wiU3RhdHVzXCJdID09PSBcIlBFTkRJTkdcIiA/IFRleHRDb2xvcnMuRmFpbHVyZSA6IFRleHRDb2xvcnMuU3VjY2VzcztcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcHJvdkNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwcm92Q29sdW1uLmFwcGVuZENoaWxkKHByb3ZDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJvdkNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMSArIG9mZnNldF1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpO1xyXG4gICAgICAgICAgICBwYXlDaGVjay5zdHlsZS5jb2xvciA9IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxICsgb2Zmc2V0XVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICAgICAgcGF5Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBwYXlDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgcGF5Q29sdW1uLmFwcGVuZENoaWxkKHBheUNoZWNrKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwYXlDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwaWNrVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2tVcENoZWNrID0gY3JlYXRlVGV4dFNwYW4ob2Zmc2V0ID09IDEgPyAoY29udHJhY3RbXCJDb25kaXRpb25zXCJdWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKSA6IFwiXCIpO1xyXG4gICAgICAgICAgICBwaWNrVXBDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBpY2tVcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwaWNrVXAuYXBwZW5kQ2hpbGQocGlja1VwQ2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBpY2tVcCk7XHJcbiAgICAgICAgICAgIHNlZW5Db250cmFjdHMucHVzaChjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZWxsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgc2VsbEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGxpbmdcIikpO1xyXG4gICAgc2VsbEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNlbGxIZWFkZXIpO1xyXG4gICAgY29uc3Qgc2VsbFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzZWxsVGFibGUpO1xyXG4gICAgY29uc3Qgc2VsbEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBzZWxsVGFibGUuYXBwZW5kQ2hpbGQoc2VsbEhlYWQpO1xyXG4gICAgY29uc3Qgc2VsbEhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBzZWxsSGVhZC5hcHBlbmRDaGlsZChzZWxsSGVhZFJvdyk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJNYXRlcmlhbFwiLCBcIk5hbWVcIiwgXCJQYXJ0bmVyXCIsIFwiRnVsZmlsbGVkXCIsIFwiUHJvdmlzLlwiLCBcIlBhaWRcIiwgXCJQaWNrIFVwXCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgc2VsbEhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgc2VsbFRhYmxlLmFwcGVuZENoaWxkKHNlbGxCb2R5KTtcclxuICAgIHNlZW5Db250cmFjdHMgPSBbXTtcclxuICAgIGNvbnRyYWN0RGF0YS5mb3JFYWNoKGNvbnRyYWN0ID0+IHtcclxuICAgICAgICBpZiAoY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgfHwgY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiQlJFQUNIRURcIiB8fCBjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJURVJNSU5BVEVEXCIgfHwgY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiQ0FOQ0VMTEVEXCIgfHwgY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiUkVKRUNURURcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWVuQ29udHJhY3RzLmluY2x1ZGVzKGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggLSAyO1xyXG4gICAgICAgIGlmICgoY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmxlbmd0aCA9PSAyICYmIGNvbnRyYWN0W1wiUGFydHlcIl0gPT09IFwiQ1VTVE9NRVJcIikgfHwgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXS5sZW5ndGggPT0gMyAmJiBjb250cmFjdFtcIlBhcnR5XCJdID09PSBcIlBST1ZJREVSXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIHNlbGxCb2R5LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgY29uc3QgbWF0RWxlbSA9IGNyZWF0ZU1hdGVyaWFsRWxlbWVudChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMF1bXCJNYXRlcmlhbFRpY2tlclwiXSwgXCJwcnVuLXJlbW92ZS1qc1wiLCBjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMF1bXCJNYXRlcmlhbEFtb3VudFwiXSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIG5hbWVDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhjb250cmFjdFtcIk5hbWVcIl0gfHwgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0sIFwiQ09OVCBcIiArIGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKSk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHBhcnRuZXJDb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdLCBcIkNPIFwiICsgY29udHJhY3RbXCJQYXJ0bmVyQ29tcGFueUNvZGVcIl0pKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwYXJ0bmVyQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NoZWNrID0gY3JlYXRlVGV4dFNwYW4oXCLirKRcIik7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5jb2xvciA9IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsyICogb2Zmc2V0XVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICAgICAgcGVuZGluZ0NoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcGVuZGluZ0NvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwZW5kaW5nQ29sdW1uLmFwcGVuZENoaWxkKHBlbmRpbmdDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGVuZGluZ0NvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVtvZmZzZXRdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmNvbG9yID0gY29udHJhY3RbXCJDb25kaXRpb25zXCJdW29mZnNldF1bXCJTdGF0dXNcIl0gPT09IFwiUEVORElOR1wiID8gVGV4dENvbG9ycy5GYWlsdXJlIDogVGV4dENvbG9ycy5TdWNjZXNzO1xyXG4gICAgICAgICAgICBwcm92Q2hlY2suc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBwcm92Q29sdW1uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHByb3ZDb2x1bW4uYXBwZW5kQ2hpbGQocHJvdkNoZWNrKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChwcm92Q29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlDaGVjayA9IGNyZWF0ZVRleHRTcGFuKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFwi4pyTXCIgOiBcIlhcIik7XHJcbiAgICAgICAgICAgIHBheUNoZWNrLnN0eWxlLmNvbG9yID0gY29udHJhY3RbXCJDb25kaXRpb25zXCJdWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwYXlDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBheUNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwYXlDb2x1bW4uYXBwZW5kQ2hpbGQocGF5Q2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBheUNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2tVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGlja1VwQ2hlY2sgPSBjcmVhdGVUZXh0U3BhbihvZmZzZXQgPT0gMSA/IChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl1bMl1bXCJTdGF0dXNcIl0gPT09IFwiRlVMRklMTEVEXCIgPyBcIuKck1wiIDogXCJYXCIpIDogXCJcIik7XHJcbiAgICAgICAgICAgIHBpY2tVcENoZWNrLnN0eWxlLmNvbG9yID0gb2Zmc2V0ID09IDEgPyAoY29udHJhY3RbXCJDb25kaXRpb25zXCJdWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlKSA6IFRleHRDb2xvcnMuU3RhbmRhcmQ7XHJcbiAgICAgICAgICAgIHBpY2tVcENoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcGlja1VwLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHBpY2tVcC5hcHBlbmRDaGlsZChwaWNrVXBDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocGlja1VwKTtcclxuICAgICAgICAgICAgc2VlbkNvbnRyYWN0cy5wdXNoKGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNoaXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBzaGlwSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2hpcHBpbmdcIikpO1xyXG4gICAgc2hpcEhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNoaXBIZWFkZXIpO1xyXG4gICAgY29uc3Qgc2hpcFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzaGlwVGFibGUpO1xyXG4gICAgY29uc3Qgc2hpcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBzaGlwVGFibGUuYXBwZW5kQ2hpbGQoc2hpcEhlYWQpO1xyXG4gICAgY29uc3Qgc2hpcEhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBzaGlwSGVhZC5hcHBlbmRDaGlsZChzaGlwSGVhZFJvdyk7XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBbXCJNYXRlcmlhbFwiLCBcIk5hbWVcIiwgXCJQYXJ0bmVyXCIsIFwiRnVsZmlsbGVkXCIsIFwiUHJvdmlzLlwiLCBcIlBhaWRcIiwgXCJQaWNrIFVwXCIsIFwiRGVsaXZlclwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIHNoaXBIZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIHNoaXBUYWJsZS5hcHBlbmRDaGlsZChzaGlwQm9keSk7XHJcbiAgICBzZWVuQ29udHJhY3RzID0gW107XHJcbiAgICBjb250cmFjdERhdGEuZm9yRWFjaChjb250cmFjdCA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkJSRUFDSEVEXCIgfHwgY29udHJhY3RbXCJTdGF0dXNcIl0gPT09IFwiVEVSTUlOQVRFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIkNBTkNFTExFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIlJFSkVDVEVEXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VlbkNvbnRyYWN0cy5pbmNsdWRlcyhjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHZhciBjb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbmRUeXBlIG9mIFtcIlNISVBNRU5UX1BST1ZJU0lPTlwiLCBcIlBBWU1FTlRcIiwgXCJTSElQTUVOVF9QSUNLVVBcIiwgXCJTSElQTUVOVF9ERUxJVkVSWVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmZvckVhY2goY29uZGl0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uW1wiVHlwZVwiXSA9PT0gY29uZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBzaGlwQm9keS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdEVsZW0gPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQoY29uZGl0aW9uc1swXVtcIlBhcnR5XCJdID09PSBcIkNVU1RPTUVSXCIgPyBjb25kaXRpb25zWzBdW1wiTWF0ZXJpYWxUaWNrZXJcIl0gOiBcIlNIUFRcIiwgXCJwcnVuLXJlbW92ZS1qc1wiLCBjb25kaXRpb25zWzBdW1wiUGFydHlcIl0gPT09IFwiQ1VTVE9NRVJcIiA/IGNvbmRpdGlvbnNbMF1bXCJNYXRlcmlhbEFtb3VudFwiXSA6IFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiTmFtZVwiXSB8fCBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSwgXCJDT05UIFwiICsgY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcclxuICAgICAgICAgICAgY29uc3QgcGFydG5lckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcGFydG5lckNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKGNvbnRyYWN0W1wiUGFydG5lck5hbWVcIl0sIFwiQ08gXCIgKyBjb250cmFjdFtcIlBhcnRuZXJDb21wYW55Q29kZVwiXSkpO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBhcnRuZXJDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwZW5kaW5nID0gKGNvbmRpdGlvbnNbMF1bXCJQYXJ0eVwiXSA9PT0gXCJDVVNUT01FUlwiID8gY29uZGl0aW9uc1swXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiAmJiBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiIDogY29uZGl0aW9uc1syXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiAmJiBjb25kaXRpb25zWzNdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGVuZGluZ0NoZWNrID0gY3JlYXRlVGV4dFNwYW4oXCLirKRcIik7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5jb2xvciA9IHBlbmRpbmcgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBlbmRpbmdDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgcGVuZGluZ0NvbHVtbi5hcHBlbmRDaGlsZChwZW5kaW5nQ2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBlbmRpbmdDb2x1bW4pO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzBdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmNvbG9yID0gY29uZGl0aW9uc1swXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFRleHRDb2xvcnMuU3VjY2VzcyA6IFRleHRDb2xvcnMuRmFpbHVyZTtcclxuICAgICAgICAgICAgcHJvdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcHJvdkNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwcm92Q29sdW1uLmFwcGVuZENoaWxkKHByb3ZDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJvdkNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5Q2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcGF5Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzFdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwYXlDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBheUNvbHVtbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwYXlDb2x1bW4uYXBwZW5kQ2hpbGQocGF5Q2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBheUNvbHVtbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2tVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGlja1VwQ2hlY2sgPSBjcmVhdGVUZXh0U3Bhbihjb25kaXRpb25zWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gXCLinJNcIiA6IFwiWFwiKTtcclxuICAgICAgICAgICAgcGlja1VwQ2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzJdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBwaWNrVXBDaGVjay5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHBpY2tVcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBwaWNrVXAuYXBwZW5kQ2hpbGQocGlja1VwQ2hlY2spO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHBpY2tVcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxpdkNoZWNrID0gY3JlYXRlVGV4dFNwYW4oY29uZGl0aW9uc1szXVtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiA/IFwi4pyTXCIgOiBcIlhcIik7XHJcbiAgICAgICAgICAgIGRlbGl2Q2hlY2suc3R5bGUuY29sb3IgPSBjb25kaXRpb25zWzNdW1wiU3RhdHVzXCJdID09PSBcIkZVTEZJTExFRFwiID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgICAgICBkZWxpdkNoZWNrLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgZGVsaXZDb2x1bW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgZGVsaXZDb2x1bW4uYXBwZW5kQ2hpbGQoZGVsaXZDaGVjayk7XHJcbiAgICAgICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoZGVsaXZDb2x1bW4pO1xyXG4gICAgICAgICAgICBzZWVuQ29udHJhY3RzLnB1c2goY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBwcnVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xyXG4gICAgcHJ1bi53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcHJ1bi5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJ1bik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3NwZXJpdHlfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3Byb3NwZXJpdHktcHJ1bi5uZXRsaWZ5LmFwcC9cIjtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgdXJsICs9IFwiP2Zyb209XCIgKyBwYXJhbWV0ZXJzWzFdICsgXCImdG89XCIgKyBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgcHJvc3Auc3JjID0gdXJsO1xyXG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcHJvc3Auc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbWV0ZXJzWzFdICs9IFwiX1wiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHNoZWV0LnNyYyA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvZWRpdD91c3A9c2hhcmluZ1wiO1xyXG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHNoZWV0LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgc2hlZXQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHNlcnZlcklEO1xyXG4gICAgdmFyIGNoYW5uZWxJRDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgaWYgKERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcnZlcklEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMF07XHJcbiAgICAgICAgICAgIGNoYW5uZWxJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICBjaGFubmVsSUQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2NvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgZGlzY29yZC5zcmMgPSBcImh0dHBzOi8vZS53aWRnZXRib3QuaW8vY2hhbm5lbHMvXCIgKyBzZXJ2ZXJJRCArIFwiL1wiICsgY2hhbm5lbElEO1xyXG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgZGlzY29yZC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRklPSW52X3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXkpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIHBhcmFtZXRlcnMucHVzaChhcGlrZXkpO1xyXG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2dldEFsbFN0b3JhZ2VzLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9hdXRoL2dyb3VwL1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbMl0gKz0gXCIgXCIgKyBwYXJhbWV0ZXJzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zdG9yYWdlL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL1wiICsgcGFyYW1ldGVyc1syXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBjb25zdCB0YWcgPSBcIkZJT1wiO1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGludmVudG9yeURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludmVudG9yeURhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHZvbHVtZVVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lTG9hZFwiXTtcclxuICAgIGNvbnN0IHZvbHVtZVRvdGFsID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUNhcGFjaXR5XCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VXNlZCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRMb2FkXCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0Q2FwYWNpdHlcIl07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbnYtaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImludi1ib2R5XCIpO1xyXG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMl0sIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICBjb25zdCB1c2VyRWxlbSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0sIHRhZyk7XHJcbiAgICB1c2VyRWxlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlckVsZW0pO1xyXG4gICAgY29uc3Qgdm9sdW1lTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2b2x1bWVMaW5lLmlkID0gXCJ2b2x1bWUtbGluZVwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICB2b2x1bWVMaW5lLnN0eWxlLmNvbG9yID0gXCIjOTk5OTk5XCI7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVm9sdW1lIFwiLCB0YWcpKTtcclxuICAgIGNvbnN0IHZvbHVtZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcclxuICAgIHZvbHVtZUJhci5pZCA9IFwidm9sdW1lLWJhclwiO1xyXG4gICAgdm9sdW1lQmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtYmFyXCIpO1xyXG4gICAgdm9sdW1lQmFyLm1heCA9IDE7XHJcbiAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKHZvbHVtZUJhcik7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHZvbHVtZVVzZWQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgLyBcIiArIHZvbHVtZVRvdGFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIG3Cs1wiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcclxuICAgIGNvbnN0IHdlaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2VpZ2h0TGluZS5pZCA9IFwid2VpZ2h0LWxpbmVcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgd2VpZ2h0TGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIldlaWdodCBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB3ZWlnaHRCYXIuaWQgPSBcIndlaWdodC1iYXJcIjtcclxuICAgIHdlaWdodEJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHdlaWdodEJhci5tYXggPSAxO1xyXG4gICAgd2VpZ2h0QmFyLnZhbHVlID0gd2VpZ2h0VXNlZCAvIHdlaWdodFRvdGFsO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih3ZWlnaHRVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB3ZWlnaHRUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiB0XCIsIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHdlaWdodExpbmUpO1xyXG4gICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpbnZlbnRvcnlEYXRhW1wiU3RvcmFnZUl0ZW1zXCJdKSB7XHJcbiAgICAgICAgY29uc3QgbWF0ID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSwgdGFnLCBpdGVtW1wiTWF0ZXJpYWxBbW91bnRcIl0sIHRydWUpO1xyXG4gICAgICAgIGlmIChtYXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtYXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIk1BVCBcIiArIGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSk7IH0pO1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9nZXRBbGxTdG9yYWdlcyh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIHVzZXJKU09OO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB1c2VySlNPTiA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIGZyb20gRklPIVwiO1xyXG4gICAgfVxyXG4gICAgdmFyIHVzZXJuYW1lcyA9IFtdO1xyXG4gICAgdXNlckpTT05bXCJHcm91cFVzZXJzXCJdLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgdXNlcm5hbWVzLnB1c2godXNlcltcIkdyb3VwVXNlck5hbWVcIl0pO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfYWxsRGlzcGxheSwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvZmlvd2ViL2dyb3VwaHViXCIsIFwiUE9TVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHBhcmFtZXRlcnNbMl1dLCBKU09OLnN0cmluZ2lmeSh1c2VybmFtZXMpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfYWxsRGlzcGxheSh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIGdyb3VwRGF0YSA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncm91cERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbM10gKyBcIiBJbnZlbnRvcmllc1wiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5RGl2KTtcclxuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XHJcbiAgICBpZiAoZ3JvdXBEYXRhW1wiUGxheWVyTW9kZWxzXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0uZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcclxuICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGxheWVyW1wiVXNlck5hbWVcIl0pKTtcclxuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgcGxheWVyW1wiTG9jYXRpb25zXCJdLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhsb2NhdGlvbltcIkxvY2F0aW9uTmFtZVwiXSwgXCJYSVQgSU5WX1wiICsgcGxheWVyW1wiVXNlck5hbWVcIl0gKyBcIl9cIiArIGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLnJlcGxhY2UoLyAvLCBcIl9cIikpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5RGl2LmFwcGVuZENoaWxkKHBsYXllckRpdik7XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xyXG4gICAgaWYgKGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdID09IG51bGwgfHwgYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVEZ1bmN0aW9ucy50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcclxuICAgIH1cclxuICAgIGJlYXV0aWZ5T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kU2xvdHMgPSBBcnJheS5mcm9tKHF1ZXVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc3VtYWJsZVRpbWVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYnVybiwgdGhyZXNob2xkcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb25zdW1hYmxlLXRpbWVyc1wiO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkcyA9IHRocmVzaG9sZHM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBpZiAodGhpcy5idXJuW3RoaXMudXNlcm5hbWVdID09IHVuZGVmaW5lZCB8fCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIldGXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZCB8fCBidWZmZXJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlQnVybnMoYnVmZmVyLCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0sIHRoaXMudGhyZXNob2xkcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgYnVybiwgdGhyZXNob2xkcykge1xyXG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Xb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlKTtcclxuICAgIGlmIChuYW1lRWxlbSA9PSBudWxsIHx8IG5hbWVFbGVtID09IHVuZGVmaW5lZCB8fCBuYW1lRWxlbS50ZXh0Q29udGVudCA9PSBudWxsIHx8IG5hbWVFbGVtLnRleHRDb250ZW50ID09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCBuYW1lID0gcGFyc2VCYXNlTmFtZShuYW1lRWxlbS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGhlYWQgPiB0clwiKSk7XHJcbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEhlYWRlciA9IGhlYWRlci5jaGlsZHJlblsyXTtcclxuICAgICAgICBjb25zdCBidXJuSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgIGlmIChidXJuSGVhZGVyLmNoaWxkcmVuICE9IHVuZGVmaW5lZCAmJiBidXJuSGVhZGVyLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXJuSGVhZGVyLnJlbW92ZUNoaWxkKGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXJuSGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJuXCI7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChuYW1lLCBidXJuKTtcclxuICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldFJvdy5jaGlsZEVsZW1lbnRDb3VudCA8IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzRdO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnZlbnRvcnlBbW91bnQgPSBmaW5kSW52ZW50b3J5QW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBidXJuQW1vdW50ID0gZmluZEJ1cm5BbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xyXG4gICAgICAgICAgICBpZiAoYnVybkFtb3VudCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoaW52ZW50b3J5QW1vdW50IC8gYnVybkFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXJlZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzTGVmdCA8PSB0aHJlc2hvbGRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWdyZWVuXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdC50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheXNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IG91dHB1dERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXREYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGRheXNMZWZ0KSk7XHJcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSB0b3RhbERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxEYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihidXJuQW1vdW50ID09IDAgPyBcIlwiIDogYnVybkFtb3VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29uc3VtYWJsZVRpbWVycy50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9FVEEsIHBhcnNlRHVyYXRpb24sIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIEZsZWV0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItZmx0LWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJGTFRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlbls3XTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZUR1cmF0aW9uKGV0YURhdGEudGV4dENvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICBldGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsZWV0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMsIEN1cnJlbmN5U3ltYm9scyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFBvc3RMTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzID0gW107XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXBvc3QtbG0tcHJpY2VcIjtcclxuICAgICAgICB0aGlzLnByaWNlcyA9IHByaWNlcztcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcy5mb3JFYWNoKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGYoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2xlYW51cHNbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTVBvc3RGb3JtKSkuZm9yRWFjaChmb3JtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFycmF5LmZyb20oZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiQy1FQ2Itb3ZlMXRsYTZxc2lWNDNldz09IGl2RzI0cXRROTJrYnlzTFROZVdKdnc9PVwiKSk7XHJcbiAgICAgICAgICAgIHZhciBzaGlwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRleHRDb250ZW50ID09IFwiU0hJUFBJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb21tb2RpdHkgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ29tbW9kaXR5J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdBbW91bnQnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUHJpY2VJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdUb3RhbCBwcmljZSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lJbnB1dCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDdXJyZW5jeSddXS8vc2VsZWN0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IGNyZWF0ZVRleHRTcGFuKFwiLS1cIiwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmcgJiYgY29tbW9kaXR5LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0SW5mbyA9IE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY3lJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IEN1cnJlbmN5U3ltYm9sc1tjdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeVN5bWJvbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0SW5mbyA9PSB1bmRlZmluZWQgfHwgbWF0SW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdCA9IG1hdEluZm9bMV0gPj0gbWF0SW5mb1syXSA/IFwidFwiIDogXCJtwrNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHR2b2x1bWUgPSBNYXRoLm1heChtYXRJbmZvWzFdLCBtYXRJbmZvWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4od2VpZ2h0dm9sdW1lKSB8fCBpc05hTih0b3RhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIi0tIHQgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgXCItLSAvIHRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgXCIgKyB1bml0ICsgXCIgfCBcIiArIGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gKGFtb3VudCAqIHdlaWdodHZvbHVtZSkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIC8gXCIgKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLnByaWNlcykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbW9kaXR5LnZhbHVlICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlUGVyVW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChhbW91bnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IHRoaXMucHJpY2VzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCArIFwiIFwiID09IFwiTmFOIFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCIgfCBcIiArIChwcmljZSAqIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgVG90YWwgQ29ycFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbmN5U3ltYm9sICsgKHRvdGFsIC8gYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiICsgKHByaWNlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1Bvc3RMTS50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2hpcHBpbmctYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKD86U0hJUFBJTkcpXFxzKFtcXGQsLl0rKXRcXHNcXC9cXHMoW1xcZCwuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0ucmVwbGFjZSgvWywuXS9nLCAnJykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1syXS5yZXBsYWNlKC9bLC5dL2csICcnKSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0b25uYWdlID4gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcclxuICAgICAgICAgICAgICAgIHByaWNlU3Bhbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3Blckl0ZW19LyR7dW5pdH0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2hpcHBpbmdBZHMudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBwYXJzZUR1cmF0aW9uLCB0b0ZpeGVkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUXVldWVMb2FkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1xdWV1ZS1sb2FkXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVF1ZXVlTG9hZCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0RXRhRnJvbVJvdyhyb3cpIHtcclxuICAgICAgICBjb25zdCBldGFDZWxsID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5pdGVtKDUpO1xyXG4gICAgICAgIGlmIChldGFDZWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV0YVNwYW4gPSBldGFDZWxsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBpZiAoZXRhU3Bhbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhID0gcGFyc2VEdXJhdGlvbihldGFTcGFuLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBjYWxjdWxhdGVRdWV1ZUxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZVRhYmxlKSk7XHJcbiAgICAgICAgdGFibGVzLmZvckVhY2godGFibGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGJvZHk6bnRoLW9mLXR5cGUoMikgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsVGltZSA9IHJvd3MucmVkdWNlKCh0b3RhbCwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyBuO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgaWYgKHRvdGFsVGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IHRoaXMuZ2V0RXRhRnJvbVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSB0b0ZpeGVkKGV0YSAvIHRvdGFsVGltZSAqIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5pdGVtKDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RmllbGQgJiYgZXRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlVGV4dFNwYW4oYCAke3BlcmNlbnR9JWAsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUXVldWVMb2FkLnRzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbm90c1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLk5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFNlYXJjaGVycy5mb3JFYWNoKHNlYXJjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoc2VhcmNoWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi50ZXh0Q29udGVudCA9IHNlYXJjaFsxXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uc3R5bGUuY29sb3IgPSBzZWFyY2hbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodHlwZVNwYW4sIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RUZXh0ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90VGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvQ2hhbWJlciBvZiBHbG9iYWwgQ29tbWVyY2UvLCBcIkNPR0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWFyY2hbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2R1Y2VkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9hdCB5b3VyIGJhc2UgLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC9PbmUgLywgXCIxIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBoYXZlIGJlZW4vLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB1bml0W3NdPyBvZi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyAoW0EteiAtXSspIHByb2R1Y2VkLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFkZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goL3lvdXIgKFtBLXogLV0rKSBvcmRlci8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZGVyIGZpbGxlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIENvbW1vZGl0eSBFeGNoYW5nZS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyhbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFjY2VwdGVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdGhlLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gbG9jYWwgbWFya2V0LywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250cmFjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvWW91ciBwYXJ0bmVyIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXJyaXZlZCBhdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvaXRzIGRlc3RpbmF0aW9uIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29nY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBhIG5ldyBlY29ub21pYyBwcm9ncmFtLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBub3RUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFNlYXJjaGVycyA9IFtcclxuICAgIFtcImNvbnRyYWN0XCIsIFwiY29udHJhY3RcIiwgXCJyZ2IoMjQ3LCAxNjYsIDApXCJdLFxyXG4gICAgW1wib3VyIGNvcnBvcmF0aW9uXCIsIFwiY29ycFwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJwcm9kdWNlZFwiLCBcInByb2R1Y2VkXCIsIFwiIzNmYTJkZVwiXSxcclxuICAgIFtcImFjY2VwdGVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcImV4cGlyZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxyXG4gICAgW1widHJhZGVcIiwgXCJ0cmFkZVwiLCBcIiMwMDgwMDBcIl0sXHJcbiAgICBbXCJvcmRlciBmaWxsZWRcIiwgXCJvcmRlclwiLCBcIiNjYzI5MjlcIl0sXHJcbiAgICBbXCJhcnJpdmVkIGF0XCIsIFwiYXJyaXZhbFwiLCBcIiNiMzM2YjNcIl0sXHJcbiAgICBbXCJyZXBvcnRcIiwgXCJyZXBvcnRcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wiZWxlY3Rpb25cIiwgXCJlbGVjdGlvblwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInJ1bGVzXCIsIFwicnVsZXNcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY29nY1wiLCBcIkNPR0NcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImV4cGVydFwiLCBcImV4cGVydFwiLCBcIiNmZjhhMDBcIl0sXHJcbiAgICBbXCJwb3B1bGF0aW9uIGluZnJhc3RydWN0dXJlIHByb2plY3RcIiwgXCJQT1BJXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImFwZXhcIiwgXCJ1cGRhdGVcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wid2FyZWhvdXNcIiwgXCJ3YXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wic2hpcGJ1aWxkaW5nIHByb2plY3RcIiwgXCJzaGlwXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInBsYW5ldGFyeSBwcm9qZWN0XCIsIFwiaW5mcmFcIiwgXCIjOGY1MmNjXCJdXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL05vdGlmaWNhdGlvbnMudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0aW9uU2Nyb2xsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zY3JvbGxcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RXaW5kb3cpKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHByb2QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbm5lckVsZW0gPSBwcm9kLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuUHJvZFBhbmVsKTtcclxuICAgICAgICAgICAgaW5uZXJFbGVtLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGlubmVyRWxlbS5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJFbGVtLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaW5uZXJFbGVtLmZpcnN0Q2hpbGQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcm9kLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTIwKSArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qcm9kdWN0aW9uU2Nyb2xsLnRzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2NyZWVuVW5wYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4Y2x1c2lvbnMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2NyZWVuc1wiO1xyXG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcclxuICAgICAgICB0aGlzLmV4Y2x1c2lvbnMgPSBbXTtcclxuICAgICAgICBleGNsdXNpb25zLmZvckVhY2goZXggPT4geyB0aGlzLmV4Y2x1c2lvbnMucHVzaChleC50b1VwcGVyQ2FzZSgpKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5TY3JlZW5Db250cm9scyk7XHJcbiAgICAgICAgaWYgKG5hdmJhciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2YmFySXRlbUNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRVbmRlcmxpbmVDbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuYXZiYXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV07XHJcbiAgICAgICAgdmFyIGxpbmtzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShtZW51LmNoaWxkcmVuKS5mb3JFYWNoKChjbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY24uY2hpbGRyZW4ubGVuZ3RoID09IDQgJiYgIXRoaXMuZXhjbHVzaW9ucy5pbmNsdWRlcyhTdHJpbmcoY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGFjZXJEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgc3BhY2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKHNwYWNlckRpdik7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FbGVtID0gY3JlYXRlTm9kZShidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25FbGVtLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NyZWVuVW5wYWNrLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIHNob3dCdWZmZXIsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25zKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNpZGViYXJcIjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zID0gW1wiQlNcIiwgXCJDT05UXCIsIFwiQ09NXCIsIFwiQ09SUFwiLCBcIkNYTFwiLCBcIkZJTlwiLCBcIkZMVFwiLCBcIklOVlwiLCBcIk1BUFwiLCBcIlBST0RcIiwgXCJDTURTXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTGVmdFNpZGViYXIpO1xyXG4gICAgICAgIGlmIChzaWRlYmFyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZmlyc3RDaGlsZCAhPSBudWxsICYmIChjaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50IHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b25JbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0U3BhbihidXR0b25JbmZvWzBdLnRvVXBwZXJDYXNlKCksIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJCdXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2xpdmVyKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcclxuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihidXR0b25JbmZvWzFdKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGNoYW5nZVZhbHVlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFBsYW5ldENvbW1hbmRzLCBQbGFuZXROYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQ29ycmVjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb21tYW5kXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyQXJlYSkpLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJGaWVsZCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclRleHRGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZXh0ID0gYnVmZmVyRmllbGQudmFsdWUudG9VcHBlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYW5ldENvbW1hbmRzLmluY2x1ZGVzKGJ1ZmZlclRleHQuc3BsaXQoXCIgXCIpWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYW5ldE5hbWVzLmZvckVhY2gobmFtZVBhaXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyVGV4dC5pbmNsdWRlcyhcIiBcIiArIG5hbWVQYWlyWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVGV4dCA9IGJ1ZmZlclRleHQucmVwbGFjZShcIiBcIiArIG5hbWVQYWlyWzBdLCBcIiBcIiArIG5hbWVQYWlyWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlKGJ1ZmZlckZpZWxkLCBidWZmZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQgPT0gbnVsbCB8fCBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29tbWFuZENvcnJlY3Rlci50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY2FsY1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2FsY1RhZ3MgPSBbXCJMTVwiLCBcIkNYXCIsIFwiWElUXCJdO1xyXG4gICAgICAgIGNhbGNUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnModGFnKTtcclxuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdXBwZXItcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKGNhbGNEaXYsIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkLmlkID09IFwicmVmcmVzaFwiID8gKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmNoaWxkcmVuWzFdIDogKGJ1ZmZlci5jaGlsZHJlblszXSB8fCBidWZmZXIuY2hpbGRyZW5bMl0pLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgY2FsY0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIvCflqlcIiwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIlhJVCBDQUxDVUxBVE9SXCIpOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ2FsY3VsYXRvckJ1dHRvbi50c1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycywgY3JlYXRlVGV4dFNwYW4gfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250cmFjdERyYWZ0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmljZXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzID0gW107XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbnRkXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFudXBzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBnZXRCdWZmZXJzKFwiQ09OVERcIikuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29udERGb3JtKTtcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ29uZGl0aW9uRWRpdG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRib2R5ID0gZm9ybS5maXJzdENoaWxkLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gLTE7XHJcbiAgICAgICAgICAgIHZhciBwcmljZSA9IC0xO1xyXG4gICAgICAgICAgICBpZiAodGJvZHkuY2hpbGRyZW4ubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlSW50KCgodGJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD1EZWxpdmVyeSBvZiApKC4qKSg/PSB1bml0KS8pIHx8IFtcIlwiXSlbMF0ucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAoKHRib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdHMgb2YgKSguKikoPz0gdG8gKS8pIHx8ICh0Ym9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXQgb2YgKSguKikoPz0gdG8gKS8pIHx8IFtcIlwiXSlbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmljZXNbbWF0ZXJpYWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBhbW91bnQgKiB0aGlzLnByaWNlc1ttYXRlcmlhbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGJvZHkuY2hpbGRyZW4ubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlSW50KCgodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD1Qcm92aXNpb24gKSguKikoPz0gdW5pdCkvKSB8fCBbXCJcIl0pWzBdLnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXRzIG9mICkoLiopKD89IFxcQCApLykgfHwgKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdCBvZiApKC4qKSg/PSBcXEAgKS8pIHx8IFtcIlwiXSlbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmljZXNbbWF0ZXJpYWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBhbW91bnQgKiB0aGlzLnByaWNlc1ttYXRlcmlhbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGJvZHkuY2hpbGRyZW4ubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlSW50KCgodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD1Qcm92aXNpb24gc2hpcG1lbnQgb2YgKSguKikoPz0gdW5pdCkvKSB8fCBbXCJcIl0pWzBdLnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gKCh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXRzIG9mICkoLiopKD89IFxcQCApLykgfHwgKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9dW5pdCBvZiApKC4qKSg/PSBcXEAgKS8pIHx8IFtcIlwiXSlbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdID09IG51bGwgfHwgY29uZGl0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQgPT0gbnVsbCB8fCAhTWF0ZXJpYWxzW21hdGVyaWFsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoKChjb25kaXRpb24uY2hpbGRyZW5bMV0gfHwgY29uZGl0aW9uKS5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmZpcnN0Q2hpbGQgfHwgY29uZGl0aW9uKS50ZXh0Q29udGVudCA9PT0gXCJDdXJyZW5jeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmljZURpdiA9IGNvbmRpdGlvbi5xdWVyeVNlbGVjdG9yKFwiZGl2W2NsYXNzfj0neHV5MndwQkNkemdjOEczdzNBbFhUdz09J11cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0UHJpY2VEaXYgPT0gbnVsbCB8fCBpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpY2UgPSBwYXJzZUZsb2F0KGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZC5maXJzdENoaWxkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHRWb2wgPSBhbW91bnQgKiAoTWF0ZXJpYWxzW21hdGVyaWFsXVsxXSA+IE1hdGVyaWFsc1ttYXRlcmlhbF1bMl0gPyBNYXRlcmlhbHNbbWF0ZXJpYWxdWzFdIDogTWF0ZXJpYWxzW21hdGVyaWFsXVsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VQZXIgPSBpbnB1dFByaWNlIC8gd2VpZ2h0Vm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwcmljZVBlci50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiAvIFwiICsgKE1hdGVyaWFsc1ttYXRlcmlhbF1bMV0gPiBNYXRlcmlhbHNbbWF0ZXJpYWxdWzJdID8gXCJ0XCIgOiBcIm3Cs1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByaWNlRGl2Lmluc2VydEJlZm9yZShjcmVhdGVUZXh0U3BhbihkaXNwbGF5LCB0aGlzLnRhZyksIGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5jaGlsZHJlblsxXSA9PSBudWxsIHx8IGNvbmRpdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSA9PSBudWxsIHx8IGNvbmRpdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKCgoY29uZGl0aW9uLmNoaWxkcmVuWzFdIHx8IGNvbmRpdGlvbikuY2hpbGRyZW5bMV0gfHwgY29uZGl0aW9uKS5maXJzdENoaWxkIHx8IGNvbmRpdGlvbikudGV4dENvbnRlbnQgPT09IFwiQ3VycmVuY3lcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmljZURpdiA9IGNvbmRpdGlvbi5xdWVyeVNlbGVjdG9yKFwiZGl2W2NsYXNzfj0neHV5MndwQkNkemdjOEczdzNBbFhUdz09J11cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRQcmljZURpdiA9PSBudWxsIHx8IGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmljZSA9IHBhcnNlRmxvYXQoaW5wdXRQcmljZURpdi5maXJzdENoaWxkLmZpcnN0Q2hpbGQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VQZXIgPSBpbnB1dFByaWNlIC8gYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHByaWNlUGVyLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCIgKyAocHJpY2UgPT0gLTEgPyBcIlwiIDogXCIgfCBcIiArIHByaWNlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIFRvdGFsIENvcnBcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByaWNlRGl2Lmluc2VydEJlZm9yZShjcmVhdGVUZXh0U3BhbihkaXNwbGF5LCB0aGlzLnRhZyksIGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db250cmFjdERyYWZ0cy50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==