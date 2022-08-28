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
	font-size: 24px !important;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CalculatorButton__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ContractDrafts__ = __webpack_require__(24);


















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
        if (contract["Status"] === "FULFILLED" || contract["Status"] === "BREACHED" || contract["Status"] === "TERMINATED" || contract["Status"] === "CANCELLED" || contract["Status"] === "REJECTED") {
            return;
        }
        if (seenContracts.includes(contract["ContractLocalId"])) {
            return;
        }
        console.log(contract);
        const line = document.createElement("div");
        line.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ContractLine);
        const contractName = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])(contract["ContractLocalId"]);
        contractName.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* Style */].ContractName);
        contractName.classList.add("tooltip");
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip-text");
        var contText = "";
        if (contract["Conditions"].length == 2) {
            contText += "Buying " + (contract["Conditions"][0]["MaterialAmount"] || contract["Conditions"][1]["MaterialAmount"]) + " " + (contract["Conditions"][0]["MaterialTicker"] || contract["Conditions"][1]["MaterialTicker"]) + " with " + contract["PartnerName"];
        }
        else if (contract["Conditions"].length == 3) {
            contText += "Selling " + (contract["Conditions"][0]["MaterialAmount"] || contract["Conditions"][1]["MaterialAmount"]) + " " + (contract["Conditions"][0]["MaterialTicker"] || contract["Conditions"][1]["MaterialTicker"]) + " with " + contract["PartnerName"];
        }
        else if (contract["Conditions"].length == 4) {
            contText += "Shipping with " + contract["PartnerName"];
        }
        tooltip.textContent = contText;
        contractName.appendChild(tooltip);
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
                (buffer.children[3] || buffer.children[2]).insertBefore(calcDiv, (buffer.children[3] || buffer.children[2]).firstChild);
                calcDiv.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* createTextSpan */])("🖩", this.tag));
                calcDiv.addEventListener("click", function () { Object(__WEBPACK_IMPORTED_MODULE_0__util__["o" /* showBuffer */])("XIT CALCULATOR"); });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatorButton;



/***/ }),
/* 23 */,
/* 24 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWY5OGUwZWE5MzYzMjc4MGU2ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmRSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXJFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9GbGVldEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3RMTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hpcHBpbmdBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVlTG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZHVjdGlvblNjcm9sbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuVW5wYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9TaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21tYW5kQ29ycmVjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DYWxjdWxhdG9yQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cmFjdERyYWZ0cy50cyJdLCJuYW1lcyI6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RTtBQUFBO0FBQUE7QUFDSyx5SUFBeUk7QUFBQTtBQUFBO0FBQ3pJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNyd0JLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUFBO0FBQUE7QUFDSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNuWkg7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxrRUFBUyxnQkFBZ0Isa0VBQVMsZ0JBQWdCLGtFQUFTLGdCQUFnQixrRUFBUztBQUNwSTtBQUNBLHdFQUF3RSxxREFBcUQsYUFBYSxrRUFBUyxnQkFBZ0Isa0VBQVM7QUFDNUssK0NBQStDLHFFQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHFEQUFxRCx5RUFBeUUscURBQXFEO0FBQ3ZQLDJDQUEyQyxxRUFBYztBQUN6RDtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5Zjk4ZTBlYTkzNjMyNzgwZTZlZiIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cmluZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWlja1Jvd0J1dHRvbihzaG9ydFRleHRCb2xkLCBzaG9ydFRleHROb3JtYWwsIGxvbmdUZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiTUFwY3NZRWQ3K3dxSUpUZmJIUDF5QT09IGZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PSBrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cIkQrR0poSUdtQzJlRms1OWR2clkrU2c9PVwiPnt7OnNob3J0Qm9sZH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ezpzaG9ydE5vcm1hbH19PC9zcGFuPjxzcGFuIGNsYXNzPVwiY0txekVEZXlLYnpiOW5QcnkwRGtmdz09XCI+OiB7ezpsb25nVGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7ezpzaG9ydEJvbGR9fVwiLCBzaG9ydFRleHRCb2xkKVxyXG4gICAgICAgIC5yZXBsYWNlKFwie3s6c2hvcnROb3JtYWx9fVwiLCBzaG9ydFRleHROb3JtYWwpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJ7ezpsb25nVGV4dH19XCIsIGxvbmdUZXh0KTtcclxuICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShyZXN1bHQpO1xyXG4gICAgbm9kZS5vbmNsaWNrID0gKCkgPT4geyBzaG93QnVmZmVyKGNvbW1hbmQpOyB9O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlZFNlY29uZHMpIHtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJmaW4tYm94XCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGFuZXQgJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gJiYgZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCJAXCIpWzFdO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiIEJhc2VcIilbMF07XHJcbiAgICAgICAgdmFyIGh5cGhlbnMgPSB0ZXh0LnNwbGl0KFwiIC0gXCIpO1xyXG4gICAgICAgIHRleHQgPSBoeXBoZW5zW2h5cGhlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGVuZGluZyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChlbmRpbmdbMV0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRpbmdbMV0gKyBlbmRpbmdbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIiwgYW1vdW50ID0gXCJub25lXCIsIHRleHQgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbdGlja2VyXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSBNYXRlcmlhbE5hbWVzW3RpY2tlcl1bMF07XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IE1hdGVyaWFsTmFtZXNbdGlja2VyXVsxXTtcclxuICAgIGNvbnN0IHRvdGFsUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcIlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmc9PVwiKTtcclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJFN09MVUNoWUNleE1VZ09vbEtZak9RPT1cIik7XHJcbiAgICBtYXRlcmlhbC50aXRsZSA9IG5hbWU7XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxMC41NnB4XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxNS44NHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUubWFyZ2luID0gXCIycHggYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgbWF0ZXJpYWwuc3R5bGUuYmFja2dyb3VuZCA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVswXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmNvbG9yID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzFdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YkRpdi5jbGFzc0xpc3QuYWRkKFwibmxRaXJwU2tkTEgwYTYrQzRsaGR1QT09XCIpO1xyXG4gICAgY29uc3QgbWF0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbWF0VGV4dC5jbGFzc0xpc3QuYWRkKFwicmpwWUwxaTljWm1mNDdmTTlxV3laUT09XCIpO1xyXG4gICAgbWF0VGV4dC50ZXh0Q29udGVudCA9IHRpY2tlcjtcclxuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChtYXRUZXh0KTtcclxuICAgIG1hdGVyaWFsLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbiAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgaWYgKGFtb3VudCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJHMzdmVUpQd01vSjZmS0hER2VnKy13PT1cIik7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcImJIamxEUEI4NFV6MHlVbnZIYS1ZNUE9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcIl82T0s2c1hOaklJaHEzTkREOUVMVkd3PT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJnbDczdm5wNWpvK1ZhZXBEUm9jdW5BPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LnRleHRDb250ZW50ID0gYW1vdW50O1xyXG4gICAgICAgIG51bWJlckRpdi5hcHBlbmRDaGlsZChudW1iZXJTdWJEaXYpO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUGljdHVyZTtcclxuICAgIH1cclxuICAgIHZhciBzdXBlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VwZXJFbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZCh0b3RhbFBpY3R1cmUpO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUud2lkdGggPSBcIjY0cHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5tYXJnaW4gPSBcIjNweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcImF1dG9cIjtcclxuICAgIGlmICh0ZXh0ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiMnB4XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XHJcbiAgICBjb25zdCBsaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtEaXYuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpbmtEaXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xyXG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlVmFsdWUoaW5wdXQsIGNtZCk7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcXVlc3RTdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChTZWxlY3Rvci5CdWZmZXJUZXh0RmllbGQsIChlbGVtKSA9PiBhZGRTdWJtaXRDb21tYW5kKGVsZW0sIGNvbW1hbmQpKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XHJcbiAgICBpZiAoYnV0dG9uID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBOdWxsXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbGljaygpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShpbnB1dCwgdmFsdWUpIHtcclxuICAgIHZhciBwcm9wRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93W1wiSFRNTElucHV0RWxlbWVudFwiXS5wcm90b3R5cGUsIFwidmFsdWVcIik7XHJcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XHJcbiAgICBpZiAobmF0aXZlSW5wdXRWYWx1ZVNldHRlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5wdXQsIHZhbHVlKTtcclxuICAgIHZhciBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRFdmVudC5pbml0RXZlbnQoJ2lucHV0JywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgaW5wdXQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcclxufVxyXG5mdW5jdGlvbiBtb25pdG9yT25FbGVtZW50Q3JlYXRlZChzZWxlY3RvciwgY2FsbGJhY2ssIG9ubHlPbmNlID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgZ2V0RWxlbWVudHNGcm9tTm9kZXMgPSAobm9kZXMpID0+IChBcnJheS5mcm9tKG5vZGVzKSkuZmxhdE1hcChub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IDMgPyBudWxsIDogQXJyYXkuZnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcclxuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgbGV0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3dbXCJNdXRhdGlvbk9ic2VydmVyXCJdIHx8IHdpbmRvd1tcIldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcIl07XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljQ2xlYW51cChjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24gPSAyKSB7XHJcbiAgICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24gfHwgMCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHBvd2VyKSAvIHBvd2VyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWZmZXIoYnVmZmVyQ29kZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmV2YWx1YXRlKGAvL2RpdltAY2xhc3M9JyR7U2VsZWN0b3IuQnVmZmVySGVhZGVyfSddW3N0YXJ0cy13aXRoKC4sICcke2J1ZmZlckNvZGV9JyldLy4uLy4uYCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoYnVmZmVyQ29kZSkge1xyXG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5ldmFsdWF0ZShgLy9kaXZbQGNsYXNzPScke1NlbGVjdG9yLkJ1ZmZlckhlYWRlcn0nXVtzdGFydHMtd2l0aCguLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XHJcbiAgICB2YXIgYnVmZmVycyA9IFtdO1xyXG4gICAgdmFyIG5vZGU7XHJcbiAgICB3aGlsZSAobm9kZSA9IG5vZGVzLml0ZXJhdGVOZXh0KCkpIHtcclxuICAgICAgICBidWZmZXJzLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnVmZmVycztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVhQYXRoKHhwYXRoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZSh4cGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFLCBudWxsKTtcclxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZSh0YWJsZSwgY29sdW1uLCBzb3J0VHlwZSkge1xyXG4gICAgdmFyIHNvcnRlciA9IFtdO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuWzFdID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHJvd3NbaV0uY2hpbGRyZW5bY29sdW1uXTtcclxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzb3J0ZXIucHVzaChbaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50LCByb3dzW2ldXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydFR5cGUgPT0gXCJhbHBoXCIpIHtcclxuICAgICAgICBzb3J0ZXIuc29ydCh0YWJsZVNvcnRBbHBoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHNvcnRlcik7XHJcbiAgICBzb3J0ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0YWJsZS5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUodGFibGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sIGl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGFibGVTb3J0QWxwaChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nU3hNb25haWNQcnJTNEpZVHZlKy1SQT09J11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nWlNjRzlBamNUUmdKK01RT1hMdUNXQT09J10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJKS3RUNHJySUMwR2tQRUFuWmxZY1NnPT1cIixcclxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nXzFRQWhwRFVoZCs3SFdKeHBIdG9XSlE9PSddXCIsXHJcbiAgICBQcm9kUXVldWVIZWFkZXI6IFwibGdFMSsrNzMrNm9ZeFZTYU90aWstZz09XCIsXHJcbiAgICBCdWZmZXJIZWFkZXI6ICdlMlBLUktaVVc2Szl4TEtOQVA1NmNnPT0gWXR1NmZvNmpMYms0M1lxTzB5V2tRQT09JyxcclxuICAgIFNpZGViYXI6IFwiZGl2I1RPVVJfVEFSR0VUX1NJREVCQVJfUklHSFRcIixcclxuICAgIExNUG9zdEZvcm06IFwiYXJ0aWNsZVtjbGFzc349J3p3KzB6UUJadmFsYTd5R3ArQWQzRHc9PSddID4gZGl2ID4gZGl2ID4gZm9ybVwiLFxyXG4gICAgV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2Lk4zMkdMOENKQk93My1yTngwUEJaa1FcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdi5fNEtzaTA5VlhoZnZrR2d0UGJoQ0V5Z1xcXFw9XFxcXD0uUlV1dzExYjYzMWVYclFZcC1JZDJ3Z1xcXFw9XFxcXD1cIixcclxuICAgIFhJVFRpbGU6IFwiI3VuZGVmaW5lZCA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIFhJVFRpbGVGbG9hdDogXCIjVE9VUl9UQVJHRVRfRU1QVFlfVElMRSA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIEJ1ZmZlclRpdGxlOiBcIl80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnPT0gUlV1dzExYjYzMWVYclFZcC1JZDJ3Zz09XCIsXHJcbiAgICBOb3RpZmljYXRpb246IFwiZGl2W2NsYXNzfj0nXzZpVE1KWit4bS1QYkcrbldvUHFoN2c9PSddXCIsXHJcbiAgICBQcm9kUXVldWU6IFwiZGl2W2NsYXNzfj0nbzFZY1lyRGt4dDlJdk40QXBDRWpJdz09J11cIixcclxuICAgIFByb2RXaW5kb3c6IFwiZGl2W2NsYXNzfj0nSXcxek10Y3JCN05GQ3hBRzR4VHo4Zz09J11cIixcclxuICAgIFByb2RQYW5lbDogXCJkaXZbY2xhc3N+PSdnZWNJNXVHQmx1dmpQNUdDUmszZEhBPT0nXVwiLFxyXG4gICAgTmV3QkZSQnV0dG9uOiBcIlRPVVJfVEFSR0VUX0JVVFRPTl9CVUZGRVJfTkVXXCIsXHJcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXHJcbiAgICBCdWZmZXJUZXh0RmllbGQ6IFwiLlVvT29oOUVHeDdZaWhlemtTR2VWMlFcXFxcPVxcXFw9XCIsXHJcbiAgICBCdWZmZXJMaXN0OiBcIiNjb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpXCIsXHJcbiAgICBTY3JlZW5Db250cm9sczogXCJUT1VSX1RBUkdFVF9TQ1JFRU5fQ09OVFJPTFNcIixcclxuICAgIFRyYW5zZmVyQXJlYTogXCJkaXZbY2xhc3N+PSdCNGNjQ0hoRWg3VzB4ZC1ZWWczcVRnPT0nXVwiLFxyXG4gICAgVHJhbnNmZXJGaWVsZDogXCJkaXZbY2xhc3N+PSd4dXkyd3BCQ2R6Z2M4RzN3M0FsWFR3PT0nXVwiLFxyXG4gICAgTGVmdFNpZGViYXI6IFwiVE9VUl9UQVJHRVRfU0lERUJBUl9MRUZUXzAyXCIsXHJcbiAgICBCdWZmZXJBcmVhOiBcImRpdltjbGFzc349J1phcGhWVitmeWFJaUxDSnlCQ3NaQ0E9PSddXCIsXHJcbiAgICBDWE9TVGFibGU6IFwiZGl2W2NsYXNzfj0nZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQT09J11cIixcclxuICAgIFNjcmVlbk5hbWU6IFwic3BhbltjbGFzc349J0l1WG9wb3JyRGY3cXhJbC1ta05XaEE9PSddXCIsXHJcbiAgICBDb250REZvcm06IFwiZGl2W2NsYXNzfj0nVElHSmhlTmlsVHp1Q2hjOCswRTM4QT09J11cIixcclxuICAgIENvbmRpdGlvbkVkaXRvcjogXCJkaXZbY2xhc3N+PSdOTE9ySDdoRjVmYktJZXNxVzN1U2tBPT0nXVwiXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NlbGVjdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBDdXJyZW5jeVN5bWJvbHMgPSB7XHJcbiAgICBcIkNJU1wiOiBcIuKCoVwiLFxyXG4gICAgXCJBSUNcIjogXCLigrNcIixcclxuICAgIFwiTkNDXCI6IFwi4oKmXCIsXHJcbiAgICBcIklDQVwiOiBcIseCXCIsXHJcbiAgICBcIkVDRFwiOiBcIuKCrFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgUmF0aW5nQ29sb3JzID0ge1xyXG4gICAgXCJQXCI6IFwiIzFiNmI5Y1wiLFxyXG4gICAgXCJVXCI6IFwiIzhiMjExZVwiLFxyXG4gICAgXCJGXCI6IFwiI2UyNmMzN1wiLFxyXG4gICAgXCJFXCI6IFwiI2U3NzgyYlwiLFxyXG4gICAgXCJEXCI6IFwiI2U4N2QyOFwiLFxyXG4gICAgXCJDXCI6IFwiI2VkODkxY1wiLFxyXG4gICAgXCJCXCI6IFwiI2YxOTUxMFwiLFxyXG4gICAgXCJBXCI6IFwiI2Y2YTIwNFwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQbGFuZXRDb21tYW5kcyA9IFtcIkFETVwiLCBcIkJTQ1wiLCBcIkNPR0NcIiwgXCJDT0dDUEVYXCIsIFwiQ09HQ1VcIiwgXCJGTFRQXCIsIFwiTFJcIiwgXCJMTVBcIiwgXCJMTVwiLCBcIlBMSVwiLCBcIlBPUElcIiwgXCJQT1BSXCIsIFwiUFBTXCIsIFwiU0hZXCIsIFwiV0FSXCJdO1xyXG5leHBvcnQgY29uc3QgUGxhbmV0TmFtZXMgPSBbXHJcbiAgICBbXCJHQUxMVVNcIiwgXCJBTS03ODNiXCJdLFxyXG4gICAgW1wiRU1FTlRJT1JcIiwgXCJBTS03ODNjXCJdLFxyXG4gICAgW1wiTk9WQSBIT05TSFVcIiwgXCJCUy03ODhjXCJdLFxyXG4gICAgW1wiUFlSR09TXCIsIFwiQ0gtNzcxYVwiXSxcclxuICAgIFtcIlRBTE9TSUFcIiwgXCJEQy04MjNiXCJdLFxyXG4gICAgW1wiTUFOSUZPTERcIiwgXCJFTC0xNzliXCJdLFxyXG4gICAgW1wiTk9WQSBVTkFMQVNLQVwiLCBcIkVaLTQ3NmJcIl0sXHJcbiAgICBbXCJCT1VDSEVSXCIsIFwiRkstNzk0YlwiXSxcclxuICAgIFtcIkNIVVwiLCBcIkdZLTExMGNcIl0sXHJcbiAgICBbXCJQT1NFSURPTlwiLCBcIkhNLTA0OWJcIl0sXHJcbiAgICBbXCJBUE9USEVDQVJZXCIsIFwiSUEtNjAzYlwiXSxcclxuICAgIFtcIkVMRUNUUk9OSUNBXCIsIFwiSVktMDI4Y1wiXSxcclxuICAgIFtcIk5FTUVTSVNcIiwgXCJKUy0yOTlhXCJdLFxyXG4gICAgW1wiR0lCU09OXCIsIFwiSlMtOTUyY1wiXSxcclxuICAgIFtcIkFVU1RSQUxJQVwiLCBcIktJLTQ0NmFcIl0sXHJcbiAgICBbXCJIRVJNRVNcIiwgXCJLSS00NDhiXCJdLFxyXG4gICAgW1wiUk9DS1wiLCBcIktRLTk2NmJcIl0sXHJcbiAgICBbXCJNSUxMSVdBWVNcIiwgXCJLVy0wMjBjXCJdLFxyXG4gICAgW1wiR0VJREkgUFJJTUVcIiwgXCJLVy0zNThiXCJdLFxyXG4gICAgW1wiRVRIRVJXSU5EXCIsIFwiS1ctNjg4Y1wiXSxcclxuICAgIFtcIktJTlpBXCIsIFwiTEctNDE4YlwiXSxcclxuICAgIFtcIlBMQU5FVCBNQyBQTEFORVRGQUNFXCIsIFwiTEctOTEzZVwiXSxcclxuICAgIFtcIkdSSUZGT05TVE9ORVwiLCBcIkxTLTMwMGNcIl0sXHJcbiAgICBbXCJKVVJBXCIsIFwiT0YtMjU5ZFwiXSxcclxuICAgIFtcIkJFUlRISUVSXCIsIFwiT0YtMzc1YlwiXSxcclxuICAgIFtcIkRBTkFLSUxcIiwgXCJPVC00NDJiXCJdLFxyXG4gICAgW1wiSUlST05cIiwgXCJPVC01ODBhXCJdLFxyXG4gICAgW1wiTU9OVEVNXCIsIFwiT1QtNTgwYlwiXSxcclxuICAgIFtcIlZBTExJU1wiLCBcIk9ULTU4MGNcIl0sXHJcbiAgICBbXCJQQUxMQURBXCIsIFwiT1QtNTgwZFwiXSxcclxuICAgIFtcIlBSSVNNXCIsIFwiT1QtODg5YVwiXSxcclxuICAgIFtcIlNBTEFESU5cIiwgXCJQRy04OTliXCJdLFxyXG4gICAgW1wiQ0lSQ0VcIiwgXCJRUS0wMDFiXCJdLFxyXG4gICAgW1wiQ0VMRUJESUxcIiwgXCJRUS02NDViXCJdLFxyXG4gICAgW1wiTUFMQUhBVFwiLCBcIlJDLTA0MGJcIl0sXHJcbiAgICBbXCJJUk9ORk9SR0VcIiwgXCJSQy0wNDBjXCJdLFxyXG4gICAgW1wiSUNFIFNUQVRJT04gQUxQSEFcIiwgXCJTRS0xMTBjXCJdLFxyXG4gICAgW1wiU0hFT0xcIiwgXCJURC0yMDNiXCJdLFxyXG4gICAgW1wiUkhBWkVTXCIsIFwiVEQtMjI4YlwiXSxcclxuICAgIFtcIktBVE9BXCIsIFwiVVYtMzUxYVwiXSxcclxuICAgIFtcIllBTk5JQ0tcIiwgXCJVVi0zNTFiXCJdLFxyXG4gICAgW1wiVU1CUkFcIiwgXCJVVi0zNTFjXCJdLFxyXG4gICAgW1wiUFJPWElPTlwiLCBcIlVWLTc5NmJcIl0sXHJcbiAgICBbXCJQUk9NSVRPUlwiLCBcIlZILTMzMWFcIl0sXHJcbiAgICBbXCJIRUxJT04gUFJJTUVcIiwgXCJWSC0zMzFkXCJdLFxyXG4gICAgW1wiQVZBTE9OXCIsIFwiVkgtMzMxZ1wiXSxcclxuICAgIFtcIkhZRFJPTlwiLCBcIlZILTMzMWlcIl0sXHJcbiAgICBbXCJNSU1BUlwiLCBcIldDLTcwMmJcIl0sXHJcbiAgICBbXCJMSUJFUlRBU1wiLCBcIlhILTU5NGFcIl0sXHJcbiAgICBbXCJLSVJVTkFcIiwgXCJYSC01OTRiXCJdLFxyXG4gICAgW1wiQ09SVEVaXCIsIFwiWEgtNTk0Y1wiXSxcclxuICAgIFtcIktVQlwiLCBcIllJLTA1OWZcIl0sXHJcbiAgICBbXCJIQVJQSU5BXCIsIFwiWUktMjA5aFwiXSxcclxuICAgIFtcIkFSQ0FESUFcIiwgXCJZSS02ODNjXCJdLFxyXG4gICAgW1wiVkVSREFOVFwiLCBcIllJLTcxNWJcIl0sXHJcbiAgICBbXCJOSUtFXCIsIFwiWlYtMTk0YVwiXSxcclxuICAgIFtcIkhFUEhBRVNUVVNcIiwgXCJaVi0zMDdjXCJdLFxyXG4gICAgW1wiUEhPQk9TXCIsIFwiWlYtMzA3ZFwiXSxcclxuICAgIFtcIkRFSU1PU1wiLCBcIlpWLTc1OWNcIl0sXHJcbiAgICBbXCJIQVJNT05JQVwiLCBcIlpWLTg5NmJcIl0sXHJcbiAgICBbXCJQUk9NXCIsIFwiVkgtMzMxYVwiXSxcclxuICAgIFtcIkdSSUZGXCIsIFwiTFMtMzAwY1wiXVxyXG5dO1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxOYW1lcyA9IHtcclxuICAgIFwiQUFSXCI6IFtcIkFudGVubmEgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFCSFwiOiBbXCJBZHZhbmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBQ1NcIjogW1wiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJBREVcIjogW1wiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBRFJcIjogW1wiQXV0by1Eb2NcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQURTXCI6IFtcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFFRlwiOiBbXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBRU5cIjogW1wiQWR2YW5jZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZQXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZSXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBR1NcIjogW1wiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQUhQXCI6IFtcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSVJcIjogW1wiQWlyIFNjcnViYmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBTFwiOiBbXCJBbHVtaW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFMRVwiOiBbXCJTdGVsbGFyIFBhbGUgQWxlXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkFMR1wiOiBbXCJQcm90ZWluLVJpY2ggQWxnYWVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkFMT1wiOiBbXCJBbHVtaW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQU1NXCI6IFtcIkFtbW9uaWFcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiQU5aXCI6IFtcIkFkdmFuY2VkIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQVBUXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJBUlwiOiBbXCJBcmdvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBUlBcIjogW1wiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFTRVwiOiBbXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFTVFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJBVEFcIjogW1wiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVRQXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFVXCI6IFtcIkdvbGRcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFVT1wiOiBbXCJHb2xkIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkFXRlwiOiBbXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJBV0hcIjogW1wiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJBQ1wiOiBbXCJIZWxwZnVsIEJhY3RlcmlhXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCQUlcIjogW1wiQmFzaWMgQUkgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiQkJIXCI6IFtcIkJhc2ljIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJDT1wiOiBbXCJCdWRnZXQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCREVcIjogW1wiQmFzaWMgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCRVwiOiBbXCJCZXJ5bGxpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQkVBXCI6IFtcIlByb3RlaW4tUmljaCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQkVSXCI6IFtcIkJlcnlsIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJGUFwiOiBbXCJCYXNpYyBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkJGUlwiOiBbXCJCYXNpYyBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkdDXCI6IFtcIlNoaWVsZGVkIENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQkdPXCI6IFtcIkJsdWUgR29sZFwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQkdTXCI6IFtcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkJIUFwiOiBbXCJCYXNpYyBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQklEXCI6IFtcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJMXCI6IFtcIkJyZWF0aGFibGUgTGlxdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTEVcIjogW1wiRGVzYXR1cmF0aW9uIEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTUZcIjogW1wiQmFzaWMgTWFpbmZyYW1lXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCTkRcIjogW1wiQmFuZGFnZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQk9SXCI6IFtcIkJvcm9uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJPU1wiOiBbXCJCb3Jvc2lsaWNhdGVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJQVFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlIxXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlIyXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMlwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlJNXCI6IFtcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJST1wiOiBbXCJCcm9uemVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJSUFwiOiBbXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlJTXCI6IFtcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCU0NcIjogW1wiQm9keSBTY2FubmVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCU0VcIjogW1wiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVEFcIjogW1wiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQlRTXCI6IFtcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkJXSFwiOiBbXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQldTXCI6IFtcIkJhc2ljIFdvcmtzdGF0aW9uXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJDXCI6IFtcIkNhcmJvblwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDQVwiOiBbXCJDYWxjaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBRlwiOiBbXCJDYWZmZWluYXRlZCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQ0FQXCI6IFtcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJDQkxcIjogW1wiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0JNXCI6IFtcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQlNcIjogW1wiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0NcIjogW1wiQ2xpbWF0ZSBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ0RcIjogW1wiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiQ0RcIjogW1wiQ2FwYWNpdGl2ZSBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiQ0ZcIjogW1wiQ2VyYW1pYyBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ0hBXCI6IFtcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQ0xcIjogW1wiQ2hsb3JpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0xJXCI6IFtcIkNhbGljaGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJDTUtcIjogW1wiXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiQ09GXCI6IFtcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkNPTVwiOiBbXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ09UXCI6IFtcIkNvdHRvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ1FMXCI6IFtcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FNXCI6IFtcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRU1wiOiBbXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRVFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1JVXCI6IFtcIkNyeW9nZW5pYyBVbml0XCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDU1RcIjogW1wiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkNURlwiOiBbXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDVVwiOiBbXCJDb3BwZXJcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkNVT1wiOiBbXCJDb3BwZXIgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiREFcIjogW1wiRGF0YSBBbmFseXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEQ0hcIjogW1wiRHJvbmUgQ2hhc3Npc1wiLCBcImRyb25lc1wiXSxcclxuICAgIFwiRENMXCI6IFtcIkR1cmFibGUgQ2FzaW5nIExcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENNXCI6IFtcIkR1cmFibGUgQ2FzaW5nIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENTXCI6IFtcIkR1cmFibGUgQ2FzaW5nIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRERcIjogW1wiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRERUXCI6IFtcIkREVCBQbGFudCBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiREVDXCI6IFtcIkRlY29yYXRpdmUgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkRJU1wiOiBbXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRE9VXCI6IFtcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiRFJGXCI6IFtcIkRyb25lIEZyYW1lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEVlwiOiBbXCJEYXRhIFZpc3VhbGl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRFdcIjogW1wiRHJpbmtpbmcgV2F0ZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJFRENcIjogW1wiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRUVTXCI6IFtcIkVucmljaGVkIEVpbnN0ZWluaXVtXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJFTkdcIjogW1wiU3RhbmRhcmQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRVBPXCI6IFtcIkVwb3h5IFJlc2luXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiRVNcIjogW1wiRWluc3RlaW5pdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiRVRDXCI6IFtcIkVucmljaGVkIFRlY2huZXRpdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVYT1wiOiBbXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGXCI6IFtcIkZsdW9yaW5lXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkZBTFwiOiBbXCJGZXJyb21pbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkFOXCI6IFtcIkFjdGl2ZSBDb29saW5nIERldmljZVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkZDXCI6IFtcIkZsb3cgQ29udHJvbCBEZXZpY2VcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZFXCI6IFtcIklyb25cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkZFT1wiOiBbXCJJcm9uIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkZFVFwiOiBbXCJGZXJyby1UaXRhbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkZcIjogW1wiRlRMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiRkZDXCI6IFtcIkZUTCBGaWVsZCBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJGSU1cIjogW1wiRmxhdm91cmVkIEluc3RhLU1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGSVJcIjogW1wiRmlzc2lvbiBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGTE9cIjogW1wiRmxvYXRpbmcgVGFua1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxQXCI6IFtcIkZsdWlkIFBpcGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxYXCI6IFtcIkZsdXhcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkZPRFwiOiBbXCJBbGwtUHVycG9zZSBGb2RkZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkZTRVwiOiBbXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGVU5cIjogW1wiRW50ZXJ0YWlubWVudCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJHQUxcIjogW1wiR2FsZXJpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJHQ1wiOiBbXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJHQ0hcIjogW1wiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHRU5cIjogW1wiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR0lOXCI6IFtcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkdMXCI6IFtcIkdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiR05aXCI6IFtcIkdsYXNzIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR1JBXCI6IFtcIldpbmUtUXVhbGl0eSBHcmFwZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdSTlwiOiBbXCJIaWdoLUNhcmIgR3JhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJHVlwiOiBbXCJHYXMgVmVudFwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiSFwiOiBbXCJIeWRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIMk9cIjogW1wiV2F0ZXJcIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJIQUJcIjogW1wiSGFiaXRhdCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJIQUxcIjogW1wiSGFsaXRlIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkhDQ1wiOiBbXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiSENQXCI6IFtcIkh5ZHJvY2FyYm9uIFBsYW50c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSERcIjogW1wiSG9sb2dyYXBoaWMgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSEVcIjogW1wiSGVsaXVtXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFM1wiOiBbXCJIZWxpdW0tMyBJc290b3BlXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFUlwiOiBbXCJTcGljeSBIZXJic1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSEVYXCI6IFtcIkhlbGlvdHJvcGUgRXh0cmFjdFwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhIUFwiOiBbXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiSE1TXCI6IFtcIkhhek1hdCBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJITlpcIjogW1wiSHlwZXJ0aHJ1c3QgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIT0dcIjogW1wiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSE9QXCI6IFtcIkZsb3dlcnkgSG9wc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSFBDXCI6IFtcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhQUlwiOiBbXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIU0VcIjogW1wiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJIU1NcIjogW1wiU21hcnQgU3BhY2UgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhURVwiOiBbXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIWVJcIjogW1wiSHlwZXItcG93ZXIgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSVwiOiBbXCJJb2RpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiSURDXCI6IFtcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklNTVwiOiBbXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklORFwiOiBbXCJJbmRpZ28gQ29sb3JhbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIklOU1wiOiBbXCJJbnN1Rm9hbVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkpVSVwiOiBbXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIktPTVwiOiBbXCJLb21idWNoYVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJLVlwiOiBbXCJLZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkxCSFwiOiBbXCJMaWdodHdlaWdodCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMQ1wiOiBbXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkxDQlwiOiBbXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMQ1JcIjogW1wiTGlxdWlkIENyeXN0YWxzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJMRFwiOiBbXCJMb2NhbCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIkxERVwiOiBbXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxESVwiOiBbXCJMYXNlciBEaW9kZXNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTEVTXCI6IFtcIkxpcXVpZCBFaW5zdGVpbml1bVwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkxGRVwiOiBbXCJMYXJnZSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTEZMXCI6IFtcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMRlBcIjogW1wiTG93LWhlYXQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMSFBcIjogW1wiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkxJXCI6IFtcIkxpdGhpdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkxJT1wiOiBbXCJMaXRoaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkxJU1wiOiBbXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMSVRcIjogW1wiTmVvbiBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkxPR1wiOiBbXCJMb2dpc3RpY3MgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMU0VcIjogW1wiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMU0xcIjogW1wiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxTVFwiOiBbXCJMaW1lc3RvbmVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTFRBXCI6IFtcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxVXCI6IFtcIkxhYm9yYXRvcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiTUFHXCI6IFtcIk1hZ25ldGl0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJNQUlcIjogW1wiSGlnaC1DYXJiIE1haXplXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNQlwiOiBbXCJNb3RoZXJib2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1DQlwiOiBbXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUNHXCI6IFtcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk1FQVwiOiBbXCJRdWFsaXR5IE1lYXQgTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1FRFwiOiBbXCJCYXNpYyBNZWRpY2FsIEtpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1GRVwiOiBbXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk1GS1wiOiBbXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk1GTFwiOiBbXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1HXCI6IFtcIk1hZ25lc2l1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJNR0NcIjogW1wiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNR1NcIjogW1wiTWFnbmVzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1ITFwiOiBbXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNSFBcIjogW1wiTWljcm8gSGVhZHBob25lc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiTUxJXCI6IFtcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTVBDXCI6IFtcIk1pY3JvLVByb2Nlc3NvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1TTFwiOiBbXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1UQ1wiOiBbXCJNZWdhVHViZSBDb2F0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTVRQXCI6IFtcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1VU1wiOiBbXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNV0ZcIjogW1wiTWVkaXVtIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk5cIjogW1wiTml0cm9nZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkFcIjogW1wiU29kaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk5BQlwiOiBbXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5DU1wiOiBbXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5FXCI6IFtcIk5lb25cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkZcIjogW1wiTmV0d29ya2luZyBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJORklcIjogW1wiTmFubyBGaWJlclwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5HXCI6IFtcIk5hbm8tQ29hdGVkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkxcIjogW1wiTnlsb24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIk5OXCI6IFtcIk5ldXJhbCBOZXR3b3JrXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk5PWlwiOiBbXCJCYXNpYyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk5SXCI6IFtcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TXCI6IFtcIk51dHJpZW50IFNvbHV0aW9uXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOU1RcIjogW1wiTmV1cm9TdGltdWxhbnRzXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIk5VVFwiOiBbXCJUcmlnbHljZXJpZGUgTnV0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTlYxXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk5WMlwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJPXCI6IFtcIk94eWdlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJPRkZcIjogW1wiT2ZmaWNlIFN1cHBsaWVzXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiT0xGXCI6IFtcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJPU1wiOiBbXCJPcGVyYXRpbmcgU3lzdGVtXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk9WRVwiOiBbXCJCYXNpYyBPdmVyYWxsc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBDQlwiOiBbXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJQREFcIjogW1wiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQRVwiOiBbXCJQb2x5LUV0aHlsZW5lXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBGRVwiOiBbXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlBHXCI6IFtcIlBvbHltZXIgR3JhbnVsYXRlXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBJQlwiOiBbXCJQaW5lYmVycmllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUEtcIjogW1wiUGFpbmtpbGxlcnNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiUE9XXCI6IFtcIlBvd2VyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiUFBBXCI6IFtcIlByb3RlaW4gUGFzdGVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlBTSFwiOiBbXCJQcmVzc3VyZSBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlBTTFwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU01cIjogW1wiUG9seW1lciBTaGVldCBUeXBlIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFNTXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBUXCI6IFtcIlBvd2VyIFRvb2xzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUFdPXCI6IFtcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiUUNSXCI6IFtcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFEXCI6IFtcIlJhZGlvIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiUkFHXCI6IFtcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJBTVwiOiBbXCJNZW1vcnkgQmFua1wiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJBVFwiOiBbXCJCYXNpYyBSYXRpb25zXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUkJIXCI6IFtcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkNPXCI6IFtcIlJhdyBDb3R0b24gRmliZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlJDU1wiOiBbXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQ1RcIjogW1wiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJERVwiOiBbXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkRMXCI6IFtcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkRTXCI6IFtcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkVBXCI6IFtcIkNoZW1pY2FsIFJlYWdlbnRzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJSRURcIjogW1wiUmVzY3VlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJSRVBcIjogW1wiUmVwYWlyIEtpdFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJSR1wiOiBbXCJSZWluZm9yY2VkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiUkdPXCI6IFtcIlJlZCBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJSSFBcIjogW1wiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiUk9NXCI6IFtcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJSU0VcIjogW1wiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJTSFwiOiBbXCJSYWRpYXRpb24gU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJSU0lcIjogW1wiUmF3IFNpbGsgU3RyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUlRBXCI6IFtcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiU1wiOiBbXCJTdWxmdXJcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiU0FcIjogW1wiU2VhcmNoIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBTFwiOiBbXCJTb3J0aW5nIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBUlwiOiBbXCJTZW5zb3IgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIlNDXCI6IFtcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiU0NCXCI6IFtcIlNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNDTlwiOiBbXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJTQ1JcIjogW1wiU3VsZnVyIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlNEUlwiOiBbXCJTdXJnaWNhbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU0VBXCI6IFtcIlBvbHktU3VsZml0ZSBTZWFsYW50XCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiU0VOXCI6IFtcIlNlbnNvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlNFUVwiOiBbXCJTdXJnaWNhbCBFcXVpcG1lbnRcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU0ZcIjogW1wiU1RMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiU0ZFXCI6IFtcIlNtYWxsIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJTRktcIjogW1wiU21hbGwgRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlNGTFwiOiBbXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0lcIjogW1wiU2lsaWNvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU0lMXCI6IFtcIlNpbGtlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiU0lPXCI6IFtcIlNpbGljb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiU05NXCI6IFtcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTT0lcIjogW1wiQXJ0aWZpY2lhbCBTb2lsXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJTT0xcIjogW1wiU29sYXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUFwiOiBbXCJTb2xhciBQYW5lbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUkRcIjogW1wiU2hpcC1SZXBhaXIgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNSUFwiOiBbXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiU1NDXCI6IFtcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJTU0xcIjogW1wiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNUTFwiOiBbXCJTdGVlbFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU1RSXCI6IFtcIk1lZGljYWwgU3RyZXRjaGVyXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlNUU1wiOiBbXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNVXCI6IFtcIlN1cmdlcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiU1VEXCI6IFtcIlN1cnZlaWxsYW5jZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1VOXCI6IFtcIlNhZmV0eSBVbmlmb3JtXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiU1dGXCI6IFtcIlNtYWxsIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRBXCI6IFtcIlRhbnRhbHVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRBQ1wiOiBbXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlRBSVwiOiBbXCJUYW50YWxpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1wiOiBbXCJUZWNobmV0aXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRDQlwiOiBbXCJUaW55IENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlRDTFwiOiBbXCJUQ0wgQWNpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVENPXCI6IFtcIlRlY2huZXRpdW0gT3hpZGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVENTXCI6IFtcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVENVXCI6IFtcIlRyYXVtYSBDYXJlIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlRIRlwiOiBbXCJUaGVybW9GbHVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVEhQXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlRJXCI6IFtcIlRpdGFuaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJUSU9cIjogW1wiVGl0YW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiVEtcIjogW1wiVGVjaG5vS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJUUFVcIjogW1wiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSQVwiOiBbXCJBdWRpbyBUcmFuc21pdHRlclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSTlwiOiBbXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRSVVwiOiBbXCJUcnVzc1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFNcIjogW1wiVGVjdG9zaWxpc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUU0hcIjogW1wiVGhlcm1hbCBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRVQlwiOiBbXCJUZXN0IFR1YmVzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlVUU1wiOiBbXCJVbml2ZXJzYWwgVG9vbHNldFwiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIlZDQlwiOiBbXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJWRUdcIjogW1wiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiVkdcIjogW1wiVml0YUdlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJWSVRcIjogW1wiVml0YSBFc3NlbmNlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWU0NcIjogW1wiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJXXCI6IFtcIlR1bmdzdGVuXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJXQUlcIjogW1wiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIldBTFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJXQ0JcIjogW1wiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldJTlwiOiBbXCJTbWFydCBaaW5mYW5kZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiV01cIjogW1wiV2luZG93IE1hbmFnZXJcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJXT1JcIjogW1wiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIldSXCI6IFtcIldhdGVyIFJlY2xhaW1lclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiV1NcIjogW1wiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJaSVJcIjogW1wiWmlyY29uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlpSXCI6IFtcIlppcmNvbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxzID0ge1xyXG4gICAgXCJBbnRlbm5hIEFycmF5XCI6IFtcIkFBUlwiLCAwLjc4LCAwLjVdLFxyXG4gICAgXCJBZHZhbmNlZCBCdWxraGVhZFwiOiBbXCJBQkhcIiwgMC42LCAwLjldLFxyXG4gICAgXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIjogW1wiQUNTXCIsIDAuMywgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiOiBbXCJBREVcIiwgMC40LCAxLjVdLFxyXG4gICAgXCJBdXRvLURvY1wiOiBbXCJBRFJcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCI6IFtcIkFEU1wiLCAwLjcsIDJdLFxyXG4gICAgXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCI6IFtcIkFFRlwiLCAyLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgU1RMIEVuZ2luZVwiOiBbXCJBRU5cIiwgMTQsIDddLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFB1bXBcIjogW1wiQUZQXCIsIDEsIDAuMjVdLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFJvZFwiOiBbXCJBRlJcIiwgMC40LCAwLjFdLFxyXG4gICAgXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIjogW1wiQUdTXCIsIDMwLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiOiBbXCJBSFBcIiwgMjAsIDEwXSxcclxuICAgIFwiQWlyIFNjcnViYmVyXCI6IFtcIkFJUlwiLCAxLjcsIDNdLFxyXG4gICAgXCJBbHVtaW5pdW1cIjogW1wiQUxcIiwgMi43LCAxXSxcclxuICAgIFwiU3RlbGxhciBQYWxlIEFsZVwiOiBbXCJBTEVcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQWxnYWVcIjogW1wiQUxHXCIsIDAuNywgMV0sXHJcbiAgICBcIkFsdW1pbml1bSBPcmVcIjogW1wiQUxPXCIsIDEuMzUsIDFdLFxyXG4gICAgXCJBbW1vbmlhXCI6IFtcIkFNTVwiLCAwLjg2LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgTm96emxlXCI6IFtcIkFOWlwiLCA2LCAzXSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQVBUXCIsIDAuMDMsIDAuM10sXHJcbiAgICBcIkFyZ29uXCI6IFtcIkFSXCIsIDEuNzg0LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiQVJQXCIsIDAuMDQsIDAuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQVNFXCIsIDAuNSwgMC42XSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiOiBbXCJBU1RcIiwgNC45OCwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkFUQVwiLCAwLjMsIDAuNF0sXHJcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJBVFBcIiwgMi45LCAxXSxcclxuICAgIFwiR29sZFwiOiBbXCJBVVwiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkdvbGQgT3JlXCI6IFtcIkFVT1wiLCAzLjg2LCAxXSxcclxuICAgIFwiQWN0aXZlIFdhdGVyIEZpbHRlclwiOiBbXCJBV0ZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJBV0hcIiwgMC4xMiwgMV0sXHJcbiAgICBcIkhlbHBmdWwgQmFjdGVyaWFcIjogW1wiQkFDXCIsIDAuMTUsIDAuMTVdLFxyXG4gICAgXCJCYXNpYyBBSSBGcmFtZXdvcmtcIjogW1wiQkFJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgQnVsa2hlYWRcIjogW1wiQkJIXCIsIDAuNSwgMC44XSxcclxuICAgIFwiQnVkZ2V0IENvbm5lY3RvcnNcIjogW1wiQkNPXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkJhc2ljIERlY2sgRWxlbWVudHNcIjogW1wiQkRFXCIsIDAuMSwgMS41XSxcclxuICAgIFwiQmVyeWxsaXVtXCI6IFtcIkJFXCIsIDEuODQsIDFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQmVhbnNcIjogW1wiQkVBXCIsIDAuOCwgMV0sXHJcbiAgICBcIkJlcnlsIENyeXN0YWxzXCI6IFtcIkJFUlwiLCAxLjkyLCAxXSxcclxuICAgIFwiQmFzaWMgRnVlbCBQdW1wXCI6IFtcIkJGUFwiLCAwLjgsIDAuMl0sXHJcbiAgICBcIkJhc2ljIEZ1ZWwgUm9kXCI6IFtcIkJGUlwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIlNoaWVsZGVkIENvbm5lY3RvcnNcIjogW1wiQkdDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiQmx1ZSBHb2xkXCI6IFtcIkJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiOiBbXCJCR1NcIiwgMjAsIDNdLFxyXG4gICAgXCJCYXNpYyBIdWxsIFBsYXRlXCI6IFtcIkJIUFwiLCAxMCwgMTBdLFxyXG4gICAgXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCI6IFtcIkJJRFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiQnJlYXRoYWJsZSBMaXF1aWRcIjogW1wiQkxcIiwgMS4xMiwgMV0sXHJcbiAgICBcIkRlc2F0dXJhdGlvbiBBZ2VudFwiOiBbXCJCTEVcIiwgMC41LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNYWluZnJhbWVcIjogW1wiQk1GXCIsIDAuOCwgMS4yXSxcclxuICAgIFwiQmFuZGFnZXNcIjogW1wiQk5EXCIsIDAuMDAxLCAwLjAwNV0sXHJcbiAgICBcIkJvcm9uIENyeXN0YWxzXCI6IFtcIkJPUlwiLCAxLjgsIDFdLFxyXG4gICAgXCJCb3Jvc2lsaWNhdGVcIjogW1wiQk9TXCIsIDEuNSwgMV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkJQVFwiLCAwLjAyLCAwLjNdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzFcIjogW1wiQlIxXCIsIDE4MCwgMzAwXSxcclxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsyXCI6IFtcIkJSMlwiLCAyODAsIDQwMF0sXHJcbiAgICBcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCI6IFtcIkJSTVwiLCAyLjUsIDFdLFxyXG4gICAgXCJCcm9uemVcIjogW1wiQlJPXCIsIDguNzMsIDFdLFxyXG4gICAgXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJCUlBcIiwgMC4wMywgMC4yXSxcclxuICAgIFwiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIjogW1wiQlJTXCIsIDE1MCwgMjAwXSxcclxuICAgIFwiQm9keSBTY2FubmVyXCI6IFtcIkJTQ1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQlNFXCIsIDAuMywgMC41XSxcclxuICAgIFwiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQlRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCI6IFtcIkJUU1wiLCAxLjA1LCAxXSxcclxuICAgIFwiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQldIXCIsIDAuMSwgMV0sXHJcbiAgICBcIkJhc2ljIFdvcmtzdGF0aW9uXCI6IFtcIkJXU1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJDYXJib25cIjogW1wiQ1wiLCAyLjI1LCAxXSxcclxuICAgIFwiQ2FsY2l1bVwiOiBbXCJDQVwiLCAxLjU0LCAxXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgQmVhbnNcIjogW1wiQ0FGXCIsIDAuODYsIDFdLFxyXG4gICAgXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIjogW1wiQ0FQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxhcmdlIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTFwiLCA1LjQsIDIuNF0sXHJcbiAgICBcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQk1cIiwgMy42LCAxLjZdLFxyXG4gICAgXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQlNcIiwgMS44LCAwLjhdLFxyXG4gICAgXCJDbGltYXRlIENvbnRyb2xsZXJcIjogW1wiQ0NcIiwgMC41LCAxXSxcclxuICAgIFwiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiOiBbXCJDQ0RcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiQ2FwYWNpdGl2ZSBEaXNwbGF5XCI6IFtcIkNEXCIsIDAuMDA0LCAwLjAwMl0sXHJcbiAgICBcIkNlcmFtaWMgRmFicmljXCI6IFtcIkNGXCIsIDIuODIsIDFdLFxyXG4gICAgXCJDb21idXN0aW9uIENoYW1iZXJcIjogW1wiQ0hBXCIsIDEuMiwgMC43XSxcclxuICAgIFwiQ2hsb3JpbmVcIjogW1wiQ0xcIiwgMy4yLCAxXSxcclxuICAgIFwiQ2FsaWNoZSBSb2NrXCI6IFtcIkNMSVwiLCAyLjQyLCAxXSxcclxuICAgIFwiXCI6IFtcIkNNS1wiLCA0LjU2LCAzMy4yXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIjogW1wiQ09GXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIjogW1wiQ09NXCIsIDAuNSwgMS41XSxcclxuICAgIFwiQ290dG9uIEZhYnJpY1wiOiBbXCJDT1RcIiwgMC43NywgMV0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiOiBbXCJDUUxcIiwgNzUsIDE1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIjogW1wiQ1FNXCIsIDUwLCAxMDBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIjogW1wiQ1FTXCIsIDI1LCA1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCI6IFtcIkNRVFwiLCAxMi41LCAyNV0sXHJcbiAgICBcIkNyeW9nZW5pYyBVbml0XCI6IFtcIkNSVVwiLCAyLjIsIDJdLFxyXG4gICAgXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiOiBbXCJDU1RcIiwgMS4xNCwgMV0sXHJcbiAgICBcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCI6IFtcIkNURlwiLCA0LjMyLCAxXSxcclxuICAgIFwiQ29wcGVyXCI6IFtcIkNVXCIsIDguOTIsIDFdLFxyXG4gICAgXCJDb3BwZXIgT3JlXCI6IFtcIkNVT1wiLCA0LjAxLCAxXSxcclxuICAgIFwiRGF0YSBBbmFseXplclwiOiBbXCJEQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyb25lIENoYXNzaXNcIjogW1wiRENIXCIsIDAuMiwgMC4wM10sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIExcIjogW1wiRENMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIE1cIjogW1wiRENNXCIsIDAuMDQsIDAuNF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIFNcIjogW1wiRENTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCI6IFtcIkREXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRERUIFBsYW50IEFnZW50XCI6IFtcIkREVFwiLCAwLjExLCAwLjFdLFxyXG4gICAgXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCI6IFtcIkRFQ1wiLCAwLjUsIDJdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCI6IFtcIkRJU1wiLCAwLjAyLCAwLjAyXSxcclxuICAgIFwiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIkRPVVwiLCA1LCA0XSxcclxuICAgIFwiRHJvbmUgRnJhbWVcIjogW1wiRFJGXCIsIDAuMSwgMC4wMl0sXHJcbiAgICBcIkRhdGEgVmlzdWFsaXplclwiOiBbXCJEVlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyaW5raW5nIFdhdGVyXCI6IFtcIkRXXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIjogW1wiRURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRW5yaWNoZWQgRWluc3RlaW5pdW1cIjogW1wiRUVTXCIsIDkuMiwgMV0sXHJcbiAgICBcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIjogW1wiRU5HXCIsIDgsIDRdLFxyXG4gICAgXCJFcG94eSBSZXNpblwiOiBbXCJFUE9cIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIkVpbnN0ZWluaXVtXCI6IFtcIkVTXCIsIDAuODgsIDAuMV0sXHJcbiAgICBcIkVucmljaGVkIFRlY2huZXRpdW1cIjogW1wiRVRDXCIsIDQuMSwgMV0sXHJcbiAgICBcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiOiBbXCJFWE9cIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiRmx1b3JpbmVcIjogW1wiRlwiLCAxLjY5NiwgMV0sXHJcbiAgICBcIkZlcnJvbWluaXVtXCI6IFtcIkZBTFwiLCAzLjIyLCAxXSxcclxuICAgIFwiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCI6IFtcIkZBTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkZsb3cgQ29udHJvbCBEZXZpY2VcIjogW1wiRkNcIiwgMC41LCAwLjI1XSxcclxuICAgIFwiSXJvblwiOiBbXCJGRVwiLCA3Ljg3NCwgMV0sXHJcbiAgICBcIklyb24gT3JlXCI6IFtcIkZFT1wiLCA1LjksIDFdLFxyXG4gICAgXCJGZXJyby1UaXRhbml1bVwiOiBbXCJGRVRcIiwgNi44NSwgMV0sXHJcbiAgICBcIkZUTCBGdWVsXCI6IFtcIkZGXCIsIDAuMDUsIDAuMDFdLFxyXG4gICAgXCJGVEwgRmllbGQgQ29udHJvbGxlclwiOiBbXCJGRkNcIiwgNTAsIDE2XSxcclxuICAgIFwiRmxhdm91cmVkIEluc3RhLU1lYWxcIjogW1wiRklNXCIsIDAuNTUsIDAuNV0sXHJcbiAgICBcIkZpc3Npb24gUmVhY3RvclwiOiBbXCJGSVJcIiwgNywgNC45XSxcclxuICAgIFwiRmxvYXRpbmcgVGFua1wiOiBbXCJGTE9cIiwgMSwgMl0sXHJcbiAgICBcIkZsdWlkIFBpcGluZ1wiOiBbXCJGTFBcIiwgMC4zLCAyXSxcclxuICAgIFwiRmx1eFwiOiBbXCJGTFhcIiwgMC4yNSwgMC4xXSxcclxuICAgIFwiQWxsLVB1cnBvc2UgRm9kZGVyXCI6IFtcIkZPRFwiLCAxLjIsIDFdLFxyXG4gICAgXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCI6IFtcIkZTRVwiLCA2LCAzXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBVbml0XCI6IFtcIkZVTlwiLCA1LCA0XSxcclxuICAgIFwiR2FsZXJpdGUgUm9ja1wiOiBbXCJHQUxcIiwgMi41MSwgMV0sXHJcbiAgICBcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIjogW1wiR0NcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkdDSFwiLCAxLCAwLjZdLFxyXG4gICAgXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCI6IFtcIkdFTlwiLCA1LCAzXSxcclxuICAgIFwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIjogW1wiR0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiR2xhc3NcIjogW1wiR0xcIiwgMC4wMTYsIDAuMDFdLFxyXG4gICAgXCJHbGFzcyBOb3p6bGVcIjogW1wiR05aXCIsIDEuNSwgMV0sXHJcbiAgICBcIldpbmUtUXVhbGl0eSBHcmFwZXNcIjogW1wiR1JBXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBHcmFpbnNcIjogW1wiR1JOXCIsIDAuOSwgMV0sXHJcbiAgICBcIkdhcyBWZW50XCI6IFtcIkdWXCIsIDAuMjUsIDAuMTVdLFxyXG4gICAgXCJIeWRyb2dlblwiOiBbXCJIXCIsIDAuMDcsIDFdLFxyXG4gICAgXCJXYXRlclwiOiBbXCJIMk9cIiwgMC4yLCAwLjJdLFxyXG4gICAgXCJIYWJpdGF0IFVuaXRcIjogW1wiSEFCXCIsIDEwLCA4XSxcclxuICAgIFwiSGFsaXRlIENyeXN0YWxzXCI6IFtcIkhBTFwiLCAyLjE3LCAxXSxcclxuICAgIFwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCI6IFtcIkhDQ1wiLCAwLjAxLCAwLjAwMl0sXHJcbiAgICBcIkh5ZHJvY2FyYm9uIFBsYW50c1wiOiBbXCJIQ1BcIiwgMC44LCAxXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgRGlzcGxheVwiOiBbXCJIRFwiLCAwLjA1LCAyXSxcclxuICAgIFwiSGVsaXVtXCI6IFtcIkhFXCIsIDAuMTQ1LCAxXSxcclxuICAgIFwiSGVsaXVtLTMgSXNvdG9wZVwiOiBbXCJIRTNcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJTcGljeSBIZXJic1wiOiBbXCJIRVJcIiwgMC40LCAxXSxcclxuICAgIFwiSGVsaW90cm9wZSBFeHRyYWN0XCI6IFtcIkhFWFwiLCAxLjEsIDFdLFxyXG4gICAgXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCI6IFtcIkhIUFwiLCAxNSwgMTBdLFxyXG4gICAgXCJIYXpNYXQgV29yayBTdWl0XCI6IFtcIkhNU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSHlwZXJ0aHJ1c3QgTm96emxlXCI6IFtcIkhOWlwiLCA2LCAxMl0sXHJcbiAgICBcIkhvbG9ncmFwaGljIEdsYXNzZXNcIjogW1wiSE9HXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJGbG93ZXJ5IEhvcHNcIjogW1wiSE9QXCIsIDAuMzUsIDFdLFxyXG4gICAgXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCI6IFtcIkhQQ1wiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCI6IFtcIkhQUlwiLCAxOCwgMTVdLFxyXG4gICAgXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkhTRVwiLCAzLjEsIDAuN10sXHJcbiAgICBcIlNtYXJ0IFNwYWNlIFN1aXRcIjogW1wiSFNTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCI6IFtcIkhURVwiLCAyMCwgMTBdLFxyXG4gICAgXCJIeXBlci1wb3dlciBSZWFjdG9yXCI6IFtcIkhZUlwiLCAzNSwgMjVdLFxyXG4gICAgXCJJb2RpbmVcIjogW1wiSVwiLCA0LjkzLCAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCI6IFtcIklEQ1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCI6IFtcIklNTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZGlnbyBDb2xvcmFudFwiOiBbXCJJTkRcIiwgMC4yMSwgMC4yXSxcclxuICAgIFwiSW5zdUZvYW1cIjogW1wiSU5TXCIsIDAuMDYsIDAuMV0sXHJcbiAgICBcIlNlZGF0aXZlIFN1YnN0YW5jZVwiOiBbXCJKVUlcIiwgMS4yLCAxXSxcclxuICAgIFwiS29tYnVjaGFcIjogW1wiS09NXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiS2V2bGFyIEZhYnJpY1wiOiBbXCJLVlwiLCAxLjY1LCAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIjogW1wiTEJIXCIsIDAuMiwgMC42XSxcclxuICAgIFwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIjogW1wiTENcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkxhcmdlIENhcmdvIEJheSBLaXRcIjogW1wiTENCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiTGlxdWlkIENyeXN0YWxzXCI6IFtcIkxDUlwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJMb2NhbCBEYXRhYmFzZVwiOiBbXCJMRFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIjogW1wiTERFXCIsIDAuMSwgMS4yXSxcclxuICAgIFwiTGFzZXIgRGlvZGVzXCI6IFtcIkxESVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJMaXF1aWQgRWluc3RlaW5pdW1cIjogW1wiTEVTXCIsIDguODQsIDFdLFxyXG4gICAgXCJMYXJnZSBGVEwgRW1pdHRlclwiOiBbXCJMRkVcIiwgMC40LCAxLjZdLFxyXG4gICAgXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMRkxcIiwgNjAsIDEwXSxcclxuICAgIFwiTG93LWhlYXQgRnVlbCBQdW1wXCI6IFtcIkxGUFwiLCAwLjUsIDAuMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIjogW1wiTEhQXCIsIDUsIDEwXSxcclxuICAgIFwiTGl0aGl1bVwiOiBbXCJMSVwiLCAwLjU1LCAxXSxcclxuICAgIFwiTGl0aGl1bSBPcmVcIjogW1wiTElPXCIsIDIuNzUsIDFdLFxyXG4gICAgXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCI6IFtcIkxJU1wiLCA1LjYsIDddLFxyXG4gICAgXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJMSVRcIiwgMSwgMl0sXHJcbiAgICBcIkxvZ2lzdGljcyBTeXN0ZW1cIjogW1wiTE9HXCIsIDAuNSwgMS41XSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJMU0VcIiwgMC4zLCAxLjJdLFxyXG4gICAgXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMU0xcIiwgMTI1LCAxMDBdLFxyXG4gICAgXCJMaW1lc3RvbmVcIjogW1wiTFNUXCIsIDIuNzMsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJMVEFcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJMYWJvcmF0b3J5IFVuaXRcIjogW1wiTFVcIiwgOCwgNl0sXHJcbiAgICBcIk1hZ25ldGl0ZVwiOiBbXCJNQUdcIiwgNS4xNSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBNYWl6ZVwiOiBbXCJNQUlcIiwgMS4zLCAxXSxcclxuICAgIFwiTW90aGVyYm9hcmRcIjogW1wiTUJcIiwgMC4wNzUsIDAuMDc1XSxcclxuICAgIFwiTWVkaXVtIENhcmdvIEJheSBLaXRcIjogW1wiTUNCXCIsIDEwMCwgMTAwXSxcclxuICAgIFwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCI6IFtcIk1DR1wiLCAwLjI0LCAwLjFdLFxyXG4gICAgXCJRdWFsaXR5IE1lYXQgTWVhbFwiOiBbXCJNRUFcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNZWRpY2FsIEtpdFwiOiBbXCJNRURcIiwgMC4zLCAwLjFdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIjogW1wiTUZFXCIsIDAuMiwgMC44XSxcclxuICAgIFwiTWVkaXVtIEZhc3RlbmVyIEtpdFwiOiBbXCJNRktcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1GTFwiLCAyNCwgNF0sXHJcbiAgICBcIk1hZ25lc2l1bVwiOiBbXCJNR1wiLCAwLjI3LCAwLjE2XSxcclxuICAgIFwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCI6IFtcIk1HQ1wiLCAwLjYsIDAuOV0sXHJcbiAgICBcIk1hZ25lc2l0ZVwiOiBbXCJNR1NcIiwgMS43MywgMV0sXHJcbiAgICBcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIjogW1wiTUhMXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk1pY3JvIEhlYWRwaG9uZXNcIjogW1wiTUhQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCI6IFtcIk1MSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIk1pY3JvLVByb2Nlc3NvclwiOiBbXCJNUENcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1TTFwiLCA1MCwgNTBdLFxyXG4gICAgXCJNZWdhVHViZSBDb2F0aW5nXCI6IFtcIk1UQ1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIjogW1wiTVRQXCIsIDAuNywgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIjogW1wiTVVTXCIsIDAuOCwgMV0sXHJcbiAgICBcIk1lZGl1bSBXYWZlclwiOiBbXCJNV0ZcIiwgMC4wMDgsIDAuMDA4XSxcclxuICAgIFwiTml0cm9nZW5cIjogW1wiTlwiLCAwLjgwNywgMV0sXHJcbiAgICBcIlNvZGl1bVwiOiBbXCJOQVwiLCAwLjk3LCAxXSxcclxuICAgIFwiU29kaXVtIEJvcm9oeWRyaWRlXCI6IFtcIk5BQlwiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiOiBbXCJOQ1NcIiwgMC4wMjgsIDAuMDFdLFxyXG4gICAgXCJOZW9uXCI6IFtcIk5FXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCI6IFtcIk5GXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTmFubyBGaWJlclwiOiBbXCJORklcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJOYW5vLUNvYXRlZCBHbGFzc1wiOiBbXCJOR1wiLCAwLjAyMiwgMC4wMV0sXHJcbiAgICBcIk55bG9uIEZhYnJpY1wiOiBbXCJOTFwiLCAxLjEzLCAxXSxcclxuICAgIFwiTmV1cmFsIE5ldHdvcmtcIjogW1wiTk5cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBOb3p6bGVcIjogW1wiTk9aXCIsIDMsIDEuNV0sXHJcbiAgICBcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIjogW1wiTlJcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIk51dHJpZW50IFNvbHV0aW9uXCI6IFtcIk5TXCIsIDAuNiwgMC41XSxcclxuICAgIFwiTmV1cm9TdGltdWxhbnRzXCI6IFtcIk5TVFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIE51dHNcIjogW1wiTlVUXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiOiBbXCJOVjFcIiwgNC4yLCAyXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCI6IFtcIk5WMlwiLCA2LjcsIDNdLFxyXG4gICAgXCJPeHlnZW5cIjogW1wiT1wiLCAxLjE0MSwgMV0sXHJcbiAgICBcIk9mZmljZSBTdXBwbGllc1wiOiBbXCJPRkZcIiwgMC4wMiwgMC4yXSxcclxuICAgIFwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIjogW1wiT0xGXCIsIDAuMDEsIDAuMDAxXSxcclxuICAgIFwiT3BlcmF0aW5nIFN5c3RlbVwiOiBbXCJPU1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE92ZXJhbGxzXCI6IFtcIk9WRVwiLCAwLjAyLCAwLjAyNV0sXHJcbiAgICBcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiOiBbXCJQQ0JcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCI6IFtcIlBEQVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJQb2x5LUV0aHlsZW5lXCI6IFtcIlBFXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIjogW1wiUEZFXCIsIDAuOSwgMV0sXHJcbiAgICBcIlBvbHltZXIgR3JhbnVsYXRlXCI6IFtcIlBHXCIsIDAuMDAyLCAwLjAwMV0sXHJcbiAgICBcIlBpbmViZXJyaWVzXCI6IFtcIlBJQlwiLCAwLjMsIDFdLFxyXG4gICAgXCJQYWlua2lsbGVyc1wiOiBbXCJQS1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJQb3dlciBDZWxsXCI6IFtcIlBPV1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJQcm90ZWluIFBhc3RlXCI6IFtcIlBQQVwiLCAyLCAxXSxcclxuICAgIFwiUHJlc3N1cmUgU2hpZWxkaW5nXCI6IFtcIlBTSFwiLCA0LjIsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCI6IFtcIlBTTFwiLCAwLjA4LCAwLjhdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiOiBbXCJQU01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIFNcIjogW1wiUFNTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIlBvd2VyIFRvb2xzXCI6IFtcIlBUXCIsIDAuMjUsIDAuMl0sXHJcbiAgICBcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIjogW1wiUFdPXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIjogW1wiUUNSXCIsIDE0LCAxMF0sXHJcbiAgICBcIlJhZGlvIERldmljZVwiOiBbXCJSQURcIiwgMC4wMDMsIDAuMDA1XSxcclxuICAgIFwiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiOiBbXCJSQUdcIiwgNSwgMy40XSxcclxuICAgIFwiTWVtb3J5IEJhbmtcIjogW1wiUkFNXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkJhc2ljIFJhdGlvbnNcIjogW1wiUkFUXCIsIDAuMjEsIDAuMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIjogW1wiUkJIXCIsIDIuNCwgMC45XSxcclxuICAgIFwiUmF3IENvdHRvbiBGaWJlclwiOiBbXCJSQ09cIiwgMC45NSwgMV0sXHJcbiAgICBcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIjogW1wiUkNTXCIsIDAuNjcsIDAuNV0sXHJcbiAgICBcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCI6IFtcIlJDVFwiLCA3LCA0XSxcclxuICAgIFwiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIlJERVwiLCAxLjQsIDEuNV0sXHJcbiAgICBcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRExcIiwgMTUwLCAzMF0sXHJcbiAgICBcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRFNcIiwgNTAsIDEwXSxcclxuICAgIFwiQ2hlbWljYWwgUmVhZ2VudHNcIjogW1wiUkVBXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJSZXNjdWUgRHJvbmVcIjogW1wiUkVEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlJlcGFpciBLaXRcIjogW1wiUkVQXCIsIDAuMDA2LCAwLjAwMl0sXHJcbiAgICBcIlJlaW5mb3JjZWQgR2xhc3NcIjogW1wiUkdcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJSZWQgR29sZFwiOiBbXCJSR09cIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIjogW1wiUkhQXCIsIDEyLCAxMF0sXHJcbiAgICBcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIjogW1wiUk9NXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJSU0VcIiwgMS45LCAwLjddLFxyXG4gICAgXCJSYWRpYXRpb24gU2hpZWxkaW5nXCI6IFtcIlJTSFwiLCAzLjcsIDAuOF0sXHJcbiAgICBcIlJhdyBTaWxrIFN0cmFpbnNcIjogW1wiUlNJXCIsIDEuMSwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiUlRBXCIsIDEuNSwgMC41XSxcclxuICAgIFwiU3VsZnVyXCI6IFtcIlNcIiwgMC41MiwgMC4yNV0sXHJcbiAgICBcIlNlYXJjaCBBbGdvcml0aG1cIjogW1wiU0FcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTb3J0aW5nIEFsZ29yaXRobVwiOiBbXCJTQUxcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTZW5zb3IgQXJyYXlcIjogW1wiU0FSXCIsIDEuNywgMl0sXHJcbiAgICBcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIjogW1wiU0NcIiwgMC4wNCwgMC4wMV0sXHJcbiAgICBcIlNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiU0NCXCIsIDUwLCA1MF0sXHJcbiAgICBcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiOiBbXCJTQ05cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiU3VsZnVyIENyeXN0YWxzXCI6IFtcIlNDUlwiLCAyLjA1LCAxXSxcclxuICAgIFwiU3VyZ2ljYWwgRHJvbmVcIjogW1wiU0RSXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlBvbHktU3VsZml0ZSBTZWFsYW50XCI6IFtcIlNFQVwiLCAwLjE1LCAwLjA3XSxcclxuICAgIFwiU2Vuc29yXCI6IFtcIlNFTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdXJnaWNhbCBFcXVpcG1lbnRcIjogW1wiU0VRXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU1RMIEZ1ZWxcIjogW1wiU0ZcIiwgMC4wNiwgMC4wNl0sXHJcbiAgICBcIlNtYWxsIEZUTCBFbWl0dGVyXCI6IFtcIlNGRVwiLCAwLjEsIDAuNF0sXHJcbiAgICBcIlNtYWxsIEZhc3RlbmVyIEtpdFwiOiBbXCJTRktcIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNGTFwiLCA5LCAxLjVdLFxyXG4gICAgXCJTaWxpY29uXCI6IFtcIlNJXCIsIDIuMzI5LCAxXSxcclxuICAgIFwiU2lsa2VuIEZhYnJpY1wiOiBbXCJTSUxcIiwgMS4yMSwgMV0sXHJcbiAgICBcIlNpbGljb24gT3JlXCI6IFtcIlNJT1wiLCAxLjc5LCAxXSxcclxuICAgIFwiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiOiBbXCJTTk1cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJBcnRpZmljaWFsIFNvaWxcIjogW1wiU09JXCIsIDAuOSwgMV0sXHJcbiAgICBcIlNvbGFyIENlbGxcIjogW1wiU09MXCIsIDAuMDE1LCAwLjAxXSxcclxuICAgIFwiU29sYXIgUGFuZWxcIjogW1wiU1BcIiwgMC4xNSwgMC4xXSxcclxuICAgIFwiU2hpcC1SZXBhaXIgRHJvbmVcIjogW1wiU1JEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCI6IFtcIlNSUFwiLCAwLjEsIDAuMl0sXHJcbiAgICBcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIjogW1wiU1NDXCIsIDEsIDFdLFxyXG4gICAgXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTU0xcIiwgMjAsIDIwXSxcclxuICAgIFwiU3RlZWxcIjogW1wiU1RMXCIsIDcuODUsIDFdLFxyXG4gICAgXCJNZWRpY2FsIFN0cmV0Y2hlclwiOiBbXCJTVFJcIiwgMC4wMSwgMV0sXHJcbiAgICBcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJTVFNcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJTdXJnZXJ5IFVuaXRcIjogW1wiU1VcIiwgNiwgNV0sXHJcbiAgICBcIlN1cnZlaWxsYW5jZSBEcm9uZVwiOiBbXCJTVURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU2FmZXR5IFVuaWZvcm1cIjogW1wiU1VOXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJTbWFsbCBXYWZlclwiOiBbXCJTV0ZcIiwgMC4wMDMsIDAuMDAzXSxcclxuICAgIFwiVGFudGFsdW1cIjogW1wiVEFcIiwgMTYuNjUsIDFdLFxyXG4gICAgXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIjogW1wiVEFDXCIsIDAuMTUsIDFdLFxyXG4gICAgXCJUYW50YWxpdGUgUm9ja1wiOiBbXCJUQUlcIiwgNy45NCwgMV0sXHJcbiAgICBcIlRlY2huZXRpdW1cIjogW1wiVENcIiwgMTEuOCwgMV0sXHJcbiAgICBcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiOiBbXCJUQ0JcIiwgMjAsIDIwXSxcclxuICAgIFwiVENMIEFjaWRcIjogW1wiVENMXCIsIDAuMDksIDAuMV0sXHJcbiAgICBcIlRlY2huZXRpdW0gT3hpZGVcIjogW1wiVENPXCIsIDkuOCwgMV0sXHJcbiAgICBcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiOiBbXCJUQ1NcIiwgMy40LCAxLjJdLFxyXG4gICAgXCJUcmF1bWEgQ2FyZSBVbml0XCI6IFtcIlRDVVwiLCA1LCA0XSxcclxuICAgIFwiVGhlcm1vRmx1aWRcIjogW1wiVEhGXCIsIDAuNiwgMC4zNV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJUSFBcIiwgMi4yLCAxXSxcclxuICAgIFwiVGl0YW5pdW1cIjogW1wiVElcIiwgNC41LCAxXSxcclxuICAgIFwiVGl0YW5pdW0gT3JlXCI6IFtcIlRJT1wiLCAxLjU4LCAxXSxcclxuICAgIFwiVGVjaG5vS2V2bGFyIEZhYnJpY1wiOiBbXCJUS1wiLCAxLjg5LCAxXSxcclxuICAgIFwiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiOiBbXCJUUFVcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiQXVkaW8gVHJhbnNtaXR0ZXJcIjogW1wiVFJBXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIjogW1wiVFJOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlRydXNzXCI6IFtcIlRSVVwiLCAwLjEsIDEuNV0sXHJcbiAgICBcIlRlY3Rvc2lsaXNpdGVcIjogW1wiVFNcIiwgMi40LCAxXSxcclxuICAgIFwiVGhlcm1hbCBTaGllbGRpbmdcIjogW1wiVFNIXCIsIDIuNCwgMS41XSxcclxuICAgIFwiVGVzdCBUdWJlc1wiOiBbXCJUVUJcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiVW5pdmVyc2FsIFRvb2xzZXRcIjogW1wiVVRTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCI6IFtcIlZDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlRyaWdseWNlcmlkZSBGcnVpdHNcIjogW1wiVkVHXCIsIDEuMSwgMV0sXHJcbiAgICBcIlZpdGFHZWxcIjogW1wiVkdcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiVml0YSBFc3NlbmNlXCI6IFtcIlZJVFwiLCAwLjksIDFdLFxyXG4gICAgXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiVlNDXCIsIDM1LCAzNV0sXHJcbiAgICBcIlR1bmdzdGVuXCI6IFtcIldcIiwgNy41MTksIDFdLFxyXG4gICAgXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCI6IFtcIldBSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIjogW1wiV0FMXCIsIDYuMjUsIDFdLFxyXG4gICAgXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiOiBbXCJXQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJTbWFydCBaaW5mYW5kZWxcIjogW1wiV0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiV2luZG93IE1hbmFnZXJcIjogW1wiV01cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiOiBbXCJXT1JcIiwgNSwgNV0sXHJcbiAgICBcIldhdGVyIFJlY2xhaW1lclwiOiBbXCJXUlwiLCA2LjQsIDVdLFxyXG4gICAgXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiOiBbXCJXU1wiLCAwLjA1LCAwLjVdLFxyXG4gICAgXCJaaXJjb24gQ3J5c3RhbHNcIjogW1wiWklSXCIsIDQuODUsIDFdLFxyXG4gICAgXCJaaXJjb25pdW1cIjogW1wiWlJcIiwgNi41MywgMV0sXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dhbWVQcm9wZXJ0aWVzLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTdHlsZSA9IHtcclxuICAgIEJ1dHRvbjogW1wiZk1XNjJjRVJubHp4WlBGaG5sUE9lUT09XCJdLFxyXG4gICAgQnV0dG9uUHJpbWFyeTogW1wia2dHc0ROdkRvV2o2MXc0STdWQWxmQT09XCJdLFxyXG4gICAgQnV0dG9uU3VjY2VzczogW1wiUVc4MHh2ZVFtMkdFU2tTT1JSSDI0Zz09XCJdLFxyXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJaRlhXeTRIQ256dHBaTmxDWGs4M3dRPT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkhlYWQ6IFtcIl8yWXJPTTctMnNkSzA0MlZ2SDZXYUpnPT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkNvbnRlbnQ6IFtcIkNOME5QTm92bFl0YUltNGJxSEZiTHc9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiXSxcclxuICAgIFNpZGViYXJMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXHJcbiAgICBGb250c1JlZ3VsYXI6IFtcIkNCb3JJYkZDNll0K0ZSWUVIWnl1YUE9PVwiXSxcclxuICAgIFNpZGViYXJUZXh0OiBbXCJ4LW1MeEV3Qy1PRGg5TVhEeDREeFNRPT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIiwgXCJPN1JYNHpYTDRnekhMb093VFZiclh3PT1cIl0sXHJcbiAgICBTaWRlYmFyU2xpdmVyOiBbXCJaUHNSWUNPajdwWDU5R1lESWlPdEtnPT1cIiwgXCItZGNZZmJDV1A3MlZTMk9GaG9ERy1RPT1cIl0sXHJcbiAgICBTaWRlYmFyQnV0dG9uOiBbXCJHSENQeWpzM2J4aGIrV1oyQkdMV0h3PT1cIl0sXHJcbiAgICBDb250cmFjdExpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcclxuICAgIENvbnRyYWN0TmFtZTogW1wiemhpeHA0MDhZRjA4Mkl6QTVLUHZmQT09XCJdLFxyXG4gICAgQ29udHJhY3RWaWV3OiBbXCJrcTVCckdLblRVVHFDRFlNcExROTBnPT1cIl0sXHJcbiAgICBTZXR0aW5nc0J1dHRvbjogW1wiQTBSYXh0MHlTNDFaUWxuem1FdnVzZz09XCIsIFwibmNIcklEc3hOS0g4TGJNRGlnVWlSZz09XCJdLFxyXG4gICAgU2V0dGluZ3NCYXJVbnRvZ2dsZWQ6IFtcIlo5allEOEx5TFpvQlBiN0pzQVJUMXc9PVwiLCBcIlA2QXJiYTUzSTdjUnZ4aUgwLXBEUWc9PVwiXSxcclxuICAgIFNldHRpbmdzQmFyVG9nZ2xlZDogW1wiWjlqWUQ4THlMWm9CUGI3SnNBUlQxdz09XCIsIFwiUDZBcmJhNTNJN2NSdnhpSDAtcERRZz09XCIsIFwiVi03NXRiMDNlbkdWZGNCK1N3LW1SQT09XCIsIFwidktrQjBXN2pBVHRkOGRTemdPWUVLUT09XCJdLFxyXG4gICAgU2V0dGluZ3NUZXh0OiBbXCJZR1NvcVp3cWthRzJDVmx0eE13b093PT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIiwgXCJrV1RIMS1Ia1lDV2VZeURSZ1o3b3pRPT1cIiwgXCJQM3NTUWtDUlVna3BtS1VnaWVKUXZnPT1cIl1cclxufTtcclxuZXhwb3J0IGNvbnN0IFdpdGhTdHlsZXMgPSAoLi4uc3R5bGUpID0+IHtcclxuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFRleHRDb2xvcnMgPSB7XHJcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcclxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxyXG4gICAgU3RhbmRhcmQ6IFwiI2JiYmJiYlwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbG9ycyA9IHtcclxuICAgIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NiwgMjAsIDE0NyksIHJnYigxMTEsIDQ1LCAxNzIpKVwiLCBcInJnYigyMTMsIDE0NywgMjU1KVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1LCAzMCwgOTgpLCByZ2IoNDAsIDU1LCAxMjMpKVwiLCBcInJnYigxNDIsIDE1NywgMjI1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSwgMjYsIDc2KSwgcmdiKDc2LCA1MSwgMTAxKSlcIiwgXCJyZ2IoMTc4LCAxNTMsIDIwMylcIl0sXHJcbiAgICBcIm1lZGljYWwgZXF1aXBtZW50XCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NSwgMTcwLCA4NSksIHJnYigxMTAsIDE5NSwgMTEwKSlcIiwgXCJyZ2IoMjEyLCAyNTUsIDIxMilcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDEsIDc3LCAxMDcpLCByZ2IoNjYsIDEwMiwgMTMyKSlcIiwgXCJyZ2IoMTY4LCAyMDQsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgZW5naW5lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA0MSwgMCksIHJnYigxNzgsIDY2LCAyNSkpXCIsIFwicmdiKDI1NSwgMTY4LCAxMjcpXCJdLFxyXG4gICAgXCJzaGlwIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDk5LCAwKSwgcmdiKDE3OCwgMTI0LCAyNSkpXCIsIFwicmdiKDI1NSwgMjI2LCAxMjcpXCJdLFxyXG4gICAgXCJtZXRhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDU0LCA1NCwgNTQpLCByZ2IoNzksIDc5LCA3OSkpXCIsIFwicmdiKDE4MSwgMTgxLCAxODEpXCJdLFxyXG4gICAgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAyNCwgMzkpLCByZ2IoMTYxLCA0OSwgNjQpKVwiLCBcInJnYigyNTUsIDE1MSwgMTY2KVwiXSxcclxuICAgIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig5MiwgMTgsIDE4KSwgcmdiKDExNywgNDMsIDQzKSlcIiwgXCJyZ2IoMjE5LCAxNDUsIDE0NSlcIl0sXHJcbiAgICBcIm9yZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA4NywgOTcpLCByZ2IoMTA3LCAxMTIsIDEyMikpXCIsIFwicmdiKDIwOSwgMjE0LCAyMjQpXCJdLFxyXG4gICAgXCJnYXNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMTA1LCAxMDcpLCByZ2IoMjUsIDEzMCwgMTMyKSlcIiwgXCJyZ2IoMTI3LCAyMzIsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgc2hpZWxkc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjI0LCAxMzEsIDApLCByZ2IoMjQ5LCAxNTYsIDI1KSlcIiwgXCJyZ2IoMjMwIDIzMCwxMjcpXCJdLFxyXG4gICAgXCJhbGxveXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMywgNzYsIDMwKSwgcmdiKDE0OCwgMTAxLCA1NSkpXCIsIFwicmdiKDI1MCwgMjAzLCAxNTcpXCJdLFxyXG4gICAgXCJjaGVtaWNhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDIwOCwgNzEsIDExNikpXCIsIFwicmdiKDI1NSwgMTczLCAyMTgpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMzYsIDEyMSwgNDcpLCByZ2IoMTYxLCAxNDYsIDcyKSlcIiwgXCJyZ2IoMjU1LCAyNDgsIDE3NClcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGllY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTksIDgyLCAxODkpLCByZ2IoMTQ0LCAxMDcsIDIxNCkpXCIsIFwicmdiKDI0NiwgMjA5LCAyNTUpXCJdLFxyXG4gICAgXCJlbGVtZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjEsIDQ2LCAzMiksIHJnYig4NiwgNzEsIDU3KSlcIiwgXCJyZ2IoMTg4LCAxNzMsIDE1OSlcIl0sXHJcbiAgICBcIm1pbmVyYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDExMywgNzMpLCByZ2IoMTc4LCAxMzgsIDk4KSlcIiwgXCJyZ2IoMjU1LCAyNDAsIDIwMClcIl0sXHJcbiAgICBcInVuaXQgcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjksIDI3LCAyOCksIHJnYig1NCwgNTIsIDUzKSlcIiwgXCJyZ2IoMTU2LCAxNTQsIDE1NSlcIl0sXHJcbiAgICBcImxpcXVpZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNCwgMTY0LCAyMDIpLCByZ2IoMTM5LCAxODksIDIyNykpXCIsIFwicmdiKDI0MSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJlbmVyZ3kgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjEsIDYyLCAzOSksIHJnYig0NiwgODcsIDY0KSlcIiwgXCJyZ2IoMTQ4LCAxODksIDE2NilcIl0sXHJcbiAgICBcImRyb25lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQwLCA1MiwgMTgpLCByZ2IoMTY1LCA3NywgNDMpKVwiLCBcInJnYigyNTUsIDE3OSwgMTQ1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTEsIDQ2LCAxODMpLCByZ2IoMTE2LCA3MSwgMjA4KSlcIiwgXCJyZ2IoMjE4LCAxNzMsIDI1NSlcIl0sXHJcbiAgICBcInRleHRpbGVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgOTAsIDMzKSwgcmdiKDEwNywgMTE1LCA1OCkpXCIsIFwicmdiKDIwOSwgMjE3LCAxNjApXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyNCwgOTEsIDIxMSksIHJnYig0OSwgMTE2LCAyMzYpKVwiLCBcInJnYigxNTEsIDIxOCwgMjU1KVwiXSxcclxuICAgIFwic29mdHdhcmUgdG9vbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyOSwgOTgsIDE5KSwgcmdiKDE1NCwgMTIzLCA0NCkpXCIsIFwicmdiKDI1NSwgMjU1LCAxNDYpXCJdLFxyXG4gICAgXCJwbGFzdGljc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIxLCAzMSwgNjApLCByZ2IoMTQ2LCA1NiwgODUpKVwiLCBcInJnYigyNDgsIDE1OCwgMTg3KVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ5LCA0NiwgNDYpLCByZ2IoMTc0LCA3MSwgNzEpKVwiLCBcInJnYigyNTUsIDE3MywgMTczKVwiXSxcclxuICAgIFwiZnVlbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDU1LCAxNDgsIDU1KSlcIiwgXCJyZ2IoMTU3LCAyNTAsIDE1NylcIl0sXHJcbiAgICBcInNvZnR3YXJlIHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYwLCA1MywgNSksIHJnYig4NSwgNzgsIDMwKSlcIiwgXCJyZ2IoMTg3LCAxODAsIDEzMilcIl0sXHJcbiAgICBcInNoaXAga2l0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU0LCA4NCwgMCksIHJnYigxNzgsIDEwOSwgMjUpKVwiLCBcInJnYigyNTUsIDIxMSwgMTI3KVwiXSxcclxuICAgIFwidXRpbGl0eVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTYxLCAxNDgsIDEzNiksIHJnYigxODYsIDE3MywgMTYxKSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIl0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQTU1HU3R5bGUgPSBgXHJcbi50b29sdGlwIC50b29sdGlwLXRleHQge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHBhZGRpbmcgPSAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuXHRtYXgtaGVpZ2h0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xM3B4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDsgXHJcblx0bGVmdDogMTA1JTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXAtdGV4dHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0cGFkZGluZyA9IDVweDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXAtdGV4dDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRyaWdodDogOTklO1xyXG5cdGJvcmRlci13aWR0aDogNXB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG4uYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTAzNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjOWZiYjlmO1xyXG59XHJcbi5idXJuLXllbGxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzgzNmUyNCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjZkZjk0O1xyXG59XHJcbi5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbi5pbnYtaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0cGFkZGluZzogMnB4IDhweDtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4uaW52LWJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHRwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0bWFyZ2luOiAxcHggMnB4O1xyXG59XHJcbi5wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmN2E2MDA7fVxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LXRleHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyMzYxZDtcclxuXHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhkNjQxMTtcclxuXHRjb2xvcjogI2NjY2NjYztcclxuXHRcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5oaWRkZW4tZWxlbWVudHtcclxuXHR2aXNpYmlsaXR5OiBmYWxzZSAhaW1wb3J0YW50O1xyXG5cdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLXVwcGVyLXJpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHQ6aG92ZXJ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxNjYsIDApO1xyXG59YDtcclxuZXhwb3J0IGNvbnN0IEVuaGFuY2VkQ29sb3JzID0gYC8qIGNvbnN1bWFibGVzIChsdXh1cnkpICovXHJcbmRpdlt0aXRsZT1cIlN0ZWxsYXIgUGFsZSBBbGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0FMRVwiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NPRlwiXSxcclxuZGl2W3RpdGxlPVwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dJTlwiXSxcclxuZGl2W3RpdGxlPVwiS29tYnVjaGFcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0tPTVwiXSxcclxuZGl2W3RpdGxlPVwiTmV1cm9TdGltdWxhbnRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9OU1RcIl0sXHJcbmRpdlt0aXRsZT1cIlBhZGRlZCBXb3JrIE92ZXJhbGxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BXT1wiXSxcclxuZGl2W3RpdGxlPVwiUmVwYWlyIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkVQXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ1wiXSxcclxuZGl2W3RpdGxlPVwiVml0YUdlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkdcIl0sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfV0lOXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY4MDAwMCwgIzdiMDAxMikgIWltcG9ydGFudDtcclxuY29sb3I6ICNkYjkxOTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBhZ3JpY3VsdHVyYWwgcHJvZHVjdHMgKi9cclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIEFsZ2FlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9BTEdcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQkVBXCJdLFxyXG5kaXZbdGl0bGU9XCJDYWZmZWluYXRlZCBCZWFuc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQ0FGXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0ZPRFwiXSxcclxuZGl2W3RpdGxlPVwiV2luZS1RdWFsaXR5IEdyYXBlc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JBXCJdLFxyXG5kaXZbdGl0bGU9XCJIaWdoLUNhcmIgR3JhaW5zXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9HUk5cIl0sXHJcbmRpdlt0aXRsZT1cIkh5ZHJvY2FyYm9uIFBsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSENQXCJdLFxyXG5kaXZbdGl0bGU9XCJTcGljeSBIZXJic1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVSXCJdLFxyXG5kaXZbdGl0bGU9XCJGbG93ZXJ5IEhvcHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hPUFwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIE1haXplXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NQUlcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01UUFwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTVVTXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgTnV0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlVUXCJdLFxyXG5kaXZbdGl0bGU9XCJQaW5lYmVycmllc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUElCXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluIFBhc3RlXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QUEFcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JDT1wiXSxcclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUlNJXCJdLFxyXG5kaXZbdGl0bGU9XCJUcmlnbHljZXJpZGUgRnJ1aXRzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WRUdcIl0sXHJcbmRpdlt0aXRsZT1cIlZpdGEgRXNzZW5jZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVklUXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwMzgwMCwgIzBhNDcwOCkgIWltcG9ydGFudDtcclxuY29sb3I6ICM4YmIzN2IgIWltcG9ydGFudDtcclxufVxyXG4vKiBwbGFzdGljcyAqL1xyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ0xcIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTVwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENTXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LUV0aHlsZW5lXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QRVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BHXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNMXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNNXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5MWY2MiwgIzkyMzg3YikgIWltcG9ydGFudDtcclxuY29sb3I6ICNmODllZTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBjb25zdW1hYmxlcyAoYmFzaWMpICovXHJcbmRpdlt0aXRsZT1cIkRyaW5raW5nIFdhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EV1wiXSxcclxuZGl2W3RpdGxlPVwiRXhvc2tlbGV0b24gV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9FWE9cIl0sXHJcbmRpdlt0aXRsZT1cIkZsYXZvdXJlZCBJbnN0YS1NZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GSU1cIl0sXHJcbmRpdlt0aXRsZT1cIkhhek1hdCBXb3JrIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hNU1wiXSxcclxuZGl2W3RpdGxlPVwiU21hcnQgU3BhY2UgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSFNTXCJdLFxyXG5kaXZbdGl0bGU9XCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTENcIl0sXHJcbmRpdlt0aXRsZT1cIlF1YWxpdHkgTWVhdCBNZWFsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRUFcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NRURcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9PVkVcIl0sXHJcbmRpdlt0aXRsZT1cIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QREFcIl0sXHJcbmRpdlt0aXRsZT1cIlBvd2VyIFRvb2xzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QVFwiXSxcclxuZGl2W3RpdGxlPVwiQmFzaWMgUmF0aW9uc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUkFUXCJdLFxyXG5kaXZbdGl0bGU9XCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1NDTlwiXSxcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1dTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E2MmMyYSwgI2JhMzYzYykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmZjk4OWUgIWltcG9ydGFudDtcclxufVxyXG4vKiBmdWVscyAqL1xyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRkZcIl0sXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TRlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NDhkMjIsICM2YmEyM2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjY2JmYWEzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogbGlxdWlkcyAqL1xyXG5kaXZbdGl0bGU9XCJIZWxpb3Ryb3BlIEV4dHJhY3RcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFWFwiXSxcclxuZGl2W3RpdGxlPVwiTGlxdWlkIEVpbnN0ZWluaXVtXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9MRVNcIl0sXHJcbmRpdlt0aXRsZT1cIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQlRTXCJdLFxyXG5kaXZbdGl0bGU9XCJXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSDJPXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY3YThkYSwgIzYwOThjMykgIWltcG9ydGFudDtcclxuY29sb3I6ICNmMWZmZmYgIWltcG9ydGFudDtcclxufWA7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBnZXRQcmljZXMocHJpY2VzLCB3ZWJhcHBJRCkge1xyXG4gICAgaWYgKHdlYmFwcElEID09IHVuZGVmaW5lZCB8fCB3ZWJhcHBJRCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldlYiBBcHAgVGltZW91dFwiKTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBQcmljZXMgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJpY2VEYXRhKTtcclxuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1trZXldID0gcHJpY2VEYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMnByaWNlJTIyXCIsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKGJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgdXNlcm5hbWUgPT0gdW5kZWZpbmVkIHx8IHVzZXJuYW1lID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBidXJuW3VzZXJuYW1lXSA9IFtdO1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJTyBCdXJuIFRpbWVvdXRcIik7XHJcbiAgICAgICAgYnVyblt1c2VybmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZ2V0QnVybihidXJuLCB1c2VybmFtZSwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBCdXJuIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyblt1c2VybmFtZV0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bdXNlcm5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAyMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9maW93ZWIvYnVybi91c2VyL1wiICsgdXNlcm5hbWUsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBCdXJuKGJ1cm4sIGdyb3VwaWQsIGFwaWtleSkge1xyXG4gICAgaWYgKGJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVybiA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgZ3JvdXBpZCA9PSB1bmRlZmluZWQgfHwgZ3JvdXBpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJTyBCdXJuIFRpbWVvdXRcIik7XHJcbiAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnZXRHcm91cEJ1cm4oYnVybiwgZ3JvdXBpZCwgYXBpa2V5KTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBHcm91cCBCdXJuIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1cm5EYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGJ1cm5bZ3JvdXBpZF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGJ1cm5EYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVybltncm91cGlkXS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhZCBEYXRhIGZyb20gRklPXCIpO1xyXG4gICAgICAgICAgICAgICAgYnVybltncm91cGlkXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMjAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vZ3JvdXAvXCIgKyBncm91cGlkLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm5TZXR0aW5ncyhidXJuU2V0dGluZ3MsIHVzZXJuYW1lLCBhcGlrZXkpIHtcclxuICAgIGlmIChhcGlrZXkgPT0gdW5kZWZpbmVkIHx8IGFwaWtleSA9PSBudWxsIHx8IHVzZXJuYW1lID09IHVuZGVmaW5lZCB8fCB1c2VybmFtZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYnVyblNldHRpbmdzLnB1c2goXCJsb2FkaW5nXCIpO1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJTyBCdXJuIFNldHRpbmdzIFRpbWVvdXRcIik7XHJcbiAgICAgICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgdXNlcm5hbWUsIGFwaWtleSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyZWl2ZWQgQnVybiBTZXR0aW5ncyBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1cm5TZXR0aW5nc1swXSA9IFwibG9hZGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuU2V0dGluZ3MucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWQgRGF0YSBmcm9tIEZJT1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi91c2Vyc2V0dGluZ3MvYnVybnJhdGUvXCIgKyB1c2VybmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0JhY2tncm91bmRSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRmxpZ2h0RVRBcyB9IGZyb20gXCIuL0ZsaWdodEVUQXNcIjtcclxuaW1wb3J0IHsgTG9jYWxNYXJrZXRBZHMgfSBmcm9tICcuL0xvY2FsTWFya2V0QWRzJztcclxuaW1wb3J0IHsgTW9kdWxlUnVubmVyIH0gZnJvbSBcIi4vTW9kdWxlUnVubmVyXCI7XHJcbmltcG9ydCB7IE9yZGVyRVRBcyB9IGZyb20gXCIuL09yZGVyRVRBc1wiO1xyXG5pbXBvcnQgeyBDb25zdW1hYmxlVGltZXJzIH0gZnJvbSBcIi4vQ29uc3VtYWJsZVRpbWVyc1wiO1xyXG5pbXBvcnQgeyBGbGVldEVUQXMgfSBmcm9tIFwiLi9GbGVldEVUQXNcIjtcclxuaW1wb3J0IHsgUG9zdExNIH0gZnJvbSBcIi4vUG9zdExNXCI7XHJcbmltcG9ydCB7IFNoaXBwaW5nQWRzIH0gZnJvbSBcIi4vU2hpcHBpbmdBZHNcIjtcclxuaW1wb3J0IHsgUXVldWVMb2FkIH0gZnJvbSBcIi4vUXVldWVMb2FkXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGdldFByaWNlcywgZ2V0QnVybiwgZ2V0QnVyblNldHRpbmdzIH0gZnJvbSBcIi4vQmFja2dyb3VuZFJ1bm5lclwiO1xyXG5pbXBvcnQgeyBQTU1HU3R5bGUsIEVuaGFuY2VkQ29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgUHJvZHVjdGlvblNjcm9sbCB9IGZyb20gXCIuL1Byb2R1Y3Rpb25TY3JvbGxcIjtcclxuaW1wb3J0IHsgU2NyZWVuVW5wYWNrIH0gZnJvbSBcIi4vU2NyZWVuVW5wYWNrXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IENvbW1hbmRDb3JyZWN0ZXIgfSBmcm9tIFwiLi9Db21tYW5kQ29ycmVjdGVyXCI7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JCdXR0b24gfSBmcm9tIFwiLi9DYWxjdWxhdG9yQnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbnRyYWN0RHJhZnRzIH0gZnJvbSBcIi4vQ29udHJhY3REcmFmdHNcIjtcclxudHJ5IHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXCJBSElCZWF1dGlmaWVyX0RhdGFcIikudGhlbihtYWluUnVuLCBvbkVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZUZveCBkZXRlY3RlZFwiKTtcclxufVxyXG5jYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9taXVtIGRldGVjdGVkXCIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXSwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIG1haW5SdW4ocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5SdW4ocmVzdWx0KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICBzdHlsZS5pZCA9IFwicG1tZy1zdHlsZVwiO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBQTU1HU3R5bGU7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcclxuICAgIGlmIChkb2MgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHsgXCJBSElCZWF1dGlmaWVyX0RhdGFcIjogW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCBbXSwgW10sIFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV1dIH07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzZdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSA9IFtbXCJCU1wiLCBcIkJTXCJdLCBbXCJDT05UXCIsIFwiQ09OVFNcIl0sIFtcIkNPTVwiLCBcIkNPTVwiXSwgW1wiQ09SUFwiLCBcIkNPUlBcIl0sIFtcIkNYTFwiLCBcIkNYTFwiXSwgW1wiRklOXCIsIFwiRklOXCJdLCBbXCJGTFRcIiwgXCJGTFRcIl0sIFtcIklOVlwiLCBcIklOVlwiXSwgW1wiTUFQXCIsIFwiTUFQXCJdLCBbXCJQUk9EXCIsIFwiUFJPRFwiXSwgW1wiQ01EU1wiLCBcIkNNRFNcIl0sIFtcIlNFVFwiLCBcIlhJVCBTRVRUSU5HU1wiXV07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XSA9IFszLCA2XTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bOF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzNdID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29sb3JzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgY29sb3JzLmlkID0gXCJwbW1nLWVuaGFuY2VkLWNvbG9yc1wiO1xyXG4gICAgICAgIGNvbG9ycy50ZXh0Q29udGVudCA9IEVuaGFuY2VkQ29sb3JzO1xyXG4gICAgICAgIGlmIChkb2MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQoY29sb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJpY2VzID0ge307XHJcbiAgICBnZXRQcmljZXMocHJpY2VzLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMl0pO1xyXG4gICAgdmFyIGJ1cm4gPSBbXTtcclxuICAgIGdldEJ1cm4oYnVybiwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0pO1xyXG4gICAgdmFyIGJ1cm5TZXR0aW5ncyA9IFtdO1xyXG4gICAgZ2V0QnVyblNldHRpbmdzKGJ1cm5TZXR0aW5ncywgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0pO1xyXG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXHJcbiAgICAgICAgbmV3IExvY2FsTWFya2V0QWRzKCksXHJcbiAgICAgICAgbmV3IE9yZGVyRVRBcygpLFxyXG4gICAgICAgIG5ldyBGbGlnaHRFVEFzKCksXHJcbiAgICAgICAgbmV3IFNoaXBwaW5nQWRzKCksXHJcbiAgICAgICAgbmV3IFBvc3RMTShwcmljZXMpLFxyXG4gICAgICAgIG5ldyBDb250cmFjdERyYWZ0cyhwcmljZXMpLFxyXG4gICAgICAgIG5ldyBRdWV1ZUxvYWQoKSxcclxuICAgICAgICBuZXcgQ29uc3VtYWJsZVRpbWVycyhyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMF0sIGJ1cm4sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XSksXHJcbiAgICAgICAgbmV3IEZsZWV0RVRBcygpLFxyXG4gICAgICAgIG5ldyBOb3RpZmljYXRpb25zKCksXHJcbiAgICAgICAgbmV3IFByb2R1Y3Rpb25TY3JvbGwoKSxcclxuICAgICAgICBuZXcgU2NyZWVuVW5wYWNrKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs1XSksXHJcbiAgICAgICAgbmV3IENvbW1hbmRDb3JyZWN0ZXIoKSxcclxuICAgICAgICBuZXcgQ2FsY3VsYXRvckJ1dHRvbigpLFxyXG4gICAgICAgIG5ldyBTaWRlYmFyKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSlcclxuICAgIF0sIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsaWdodEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFJhdGluZ0NvbG9ycyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbE1hcmtldEFkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbG0tYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKEJVWUlOR3xTRUxMSU5HfENPUlApXFxzKFxcZCspXFxzLipcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zvci8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQobWF0Y2hlc1szXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxDZW50cyA8PSAtMTAwIHx8IHRvdGFsQ2VudHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gUmF0aW5nQ29sb3JzW2VsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgfHwgXCJQXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSB0b0ZpeGVkKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0gZWEpYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZXMsIHJlc3VsdCwgYnVybiwgYnVyblNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcy5tYXAobSA9PiB0aGlzLm1vZHVsZVRvTUUobSkpO1xyXG4gICAgICAgIHRoaXMueGl0ID0gbmV3IFhJVEhhbmRsZXIocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzBdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMV0sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsyXSwgcmVzdWx0LCBidXJuLCBidXJuU2V0dGluZ3MsIHRoaXMubW9kdWxlcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVBY3RpdmVNb2R1bGVzKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobXAgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdICE9IHVuZGVmaW5lZCAmJiByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1wLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW9kdWxlVG9NRShtb2R1bGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb2R1bGUsXHJcbiAgICAgICAgICAgIG5hbWU6IG1vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgY2xlYW51cFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHJ1blRpbWU6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLnhpdC5ydW4oKTtcclxuICAgICAgICB0aGlzLm1vZHVsZXMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5ydW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY291bnQrKztcclxuICAgICAgICAgICAgICAgIGVudHJ5LmNsZWFudXBUaW1lICs9IGNsZWFudXBUaW1lO1xyXG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vZHVsZVJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFhJVFByZUZ1bmN0aW9ucywgWElUQnVmZmVyVGl0bGVzIH0gZnJvbSBcIi4vWElURnVuY3Rpb25zXCI7XHJcbmV4cG9ydCBjbGFzcyBYSVRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBhcGlrZXksIHdlYmFwcElELCByZXN1bHQsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5hcGlrZXkgPSBhcGlrZXk7XHJcbiAgICAgICAgdGhpcy53ZWJhcHBJRCA9IHdlYmFwcElEO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy5idXJuU2V0dGluZ3MgPSBidXJuU2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJYSVRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgdmFyIGJ1cm5TZXR0aW5ncyA9IHRoaXMuYnVyblNldHRpbmdzO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGlsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpO1xyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZUZsb2F0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsIHx8IHRpbGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbGUuY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIHRpbGUuY2hpbGRyZW5bMV0uaWQgPT0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyc1JhdyA9IEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKSlbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzUmF3ID09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzUmF3ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzUmF3LmNoYXJBdCg0KSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChrZXkuc2xpY2UoMikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnMgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRpbGUuY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIHRpbGUuY2hpbGRyZW5bMV0uaWQgPT0gXCJwbW1nLXJlbG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXSh0aWxlLmNoaWxkcmVuWzFdLCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgdGhpcy51c2VybmFtZSwgYnVybiwgYnVyblNldHRpbmdzLCB0aGlzLm1vZHVsZXMsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ4aXQtdGlsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9wRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRvcERpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodG9wRGl2KTtcclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIuKfs1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCdXR0b24pO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5mbGV4R3JvdyA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aWxlLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVGdW5jID0gWElUUHJlRnVuY3Rpb25zW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgIGlmIChwcmVGdW5jID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vIE1hdGNoaW5nIEZ1bmN0aW9uIVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gWElUQnVmZmVyVGl0bGVzW3BhcmFtZXRlcnNbMF0udG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlrZXkgPSB0aGlzLmFwaWtleTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYmFwcElEID0gdGhpcy53ZWJhcHBJRDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZXMgPSB0aGlzLm1vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgcmVzdWx0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmNoaWxkcmVuWzFdLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgcHJlRnVuYyhjb250ZW50RGl2LCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgdXNlcm5hbWUsIGJ1cm4sIGJ1cm5TZXR0aW5ncywgbW9kdWxlcywgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQsIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gsIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0LCBjcmVhdGVMaW5rLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGdldEdyb3VwQnVybiB9IGZyb20gXCIuL0JhY2tncm91bmRSdW5uZXJcIjtcclxuaW1wb3J0IHsgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjb25zdCBYSVRQcmVGdW5jdGlvbnMgPSB7XHJcbiAgICBcIklOVlwiOiBGSU9JbnZfcHJlLFxyXG4gICAgXCJESVNDT1JEXCI6IERpc2NvcmRfcHJlLFxyXG4gICAgXCJTSEVFVFNcIjogU2hlZXRzX3ByZSxcclxuICAgIFwiUFJPU1BFUklUWVwiOiBQcm9zcGVyaXR5X3ByZSxcclxuICAgIFwiUFJVTlwiOiBQUnVOX3ByZSxcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBTaGVldFRhYmxlX3ByZSxcclxuICAgIFwiRklOXCI6IEZpbl9wcmUsXHJcbiAgICBcIkNIQVRcIjogQ2hhdF9wcmUsXHJcbiAgICBcIkJVUk5cIjogRW5oYW5jZWRCdXJuX3ByZSxcclxuICAgIFwiU0VUVElOR1NcIjogU2V0dGluZ3NfcHJlLFxyXG4gICAgXCJDT05UUkFDVFNcIjogQ29udHJhY3RzX3ByZSxcclxuICAgIFwiUkVQQUlSU1wiOiBSZXBhaXJzX3ByZSxcclxuICAgIFwiQ0FMQ1VMQVRPUlwiOiBDYWxjdWxhdG9yX3ByZSxcclxuICAgIFwiQ0FMQ1wiOiBDYWxjdWxhdG9yX3ByZVxyXG59O1xyXG5leHBvcnQgY29uc3QgWElUQnVmZmVyVGl0bGVzID0ge1xyXG4gICAgXCJJTlZcIjogXCJGSU8gSU5WRU5UT1JZXCIsXHJcbiAgICBcIkRJU0NPUkRcIjogXCJESVNDT1JEIFNFUlZFUlwiLFxyXG4gICAgXCJTSEVFVFNcIjogXCJHT09HTEUgU0hFRVRTXCIsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogXCJQUk9TUEVSSVRZXCIsXHJcbiAgICBcIlBSVU5cIjogXCJQUlVOLUNFUFRJT05cIixcclxuICAgIFwiU0hFRVRUQUJMRVwiOiBcIkdPT0dMRSBTSEVFVFMgVEFCTEVcIixcclxuICAgIFwiRklOXCI6IFwiRklOQU5DSUFMIE9WRVJWSUVXXCIsXHJcbiAgICBcIkNIQVRcIjogXCJDSEFUXCIsXHJcbiAgICBcIkJVUk5cIjogXCJFTkhBTkNFRCBCVVJOXCIsXHJcbiAgICBcIlNFVFRJTkdTXCI6IFwiUE1NRyBTRVRUSU5HU1wiLFxyXG4gICAgXCJDT05UUkFDVFNcIjogXCJQRU5ESU5HIENPTlRSQUNUU1wiLFxyXG4gICAgXCJSRVBBSVJTXCI6IFwiUkVQQUlSU1wiLFxyXG4gICAgXCJDQUxDXCI6IFwiQ0FMQ1VMQVRPUlwiLFxyXG4gICAgXCJDQUxDVUxBVE9SXCI6IFwiQ0FMQ1VMQVRPUlwiXHJcbn07XHJcbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xyXG4gICAgXCJVRk9cIjogW1wiODU1NDg4MzA5ODAyMTcyNDY5XCIsIFwiODU1NDg5NzExNjM1NDMxNDc1XCJdLFxyXG4gICAgXCJGSU9DXCI6IFtcIjgwNzk5MjY0MDI0NzMwMDExNlwiLCBcIjgwODQ1MTUxMjM1MTE5NTE2NlwiXSxcclxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcclxuICAgIFwiUENUXCI6IFtcIjY2NzU1MTQzMzUwMzAxNDkyNFwiLCBcIjY2NzU1MTQzMzUwMzAxNDkyN1wiXVxyXG59O1xyXG5mdW5jdGlvbiBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIGNhbGxiYWNrRnVuY3Rpb24sIHVybCwgcmVxdWVzdFR5cGUgPSBcIkdFVFwiLCBoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIERhdGEgQ291bGQgTm90IEJlIExvYWRlZCEgVGltZWQgT3V0IVwiO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbih0aWxlLCBwYXJhbWV0ZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICBpZiAoaGVhZGVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChjb250ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHdoaWxlIChlbGVtLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lLCBmdWxsQnVybiwgYnVyblNldHRpbmdzLCBtb2R1bGVzLCByZXN1bHQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCB3YXJuaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQod2FybmluZ0Rpdik7XHJcbiAgICB3YXJuaW5nRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiNHB4XCI7XHJcbiAgICB3YXJuaW5nRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiU2V0dGluZ3MgY2hhbmdlcyByZXF1aXJlIGEgcmVmcmVzaCB0byB0YWtlIGVmZmVjdC5cIikpO1xyXG4gICAgY29uc3QgbW9kdWxlU2V0dGluZ3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNb2R1bGUgU2V0dGluZ3NcIikpO1xyXG4gICAgbW9kdWxlU2V0dGluZ3NIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChtb2R1bGVTZXR0aW5nc0hlYWRlcik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG1vZHVsZXMuZm9yRWFjaChtcCA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlNpZGViYXJMaW5lLCBTdHlsZS5Gb250c1JlZ3VsYXIpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4obXAubmFtZSkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICByaWdodC5zdHlsZS5mbGV4R3JvdyA9IFwiMVwiO1xyXG4gICAgICAgIHJpZ2h0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gbWFrZVRvZ2dsZUJ1dHRvbihcIk9uXCIsIFwiT2ZmXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbXAuZW5hYmxlZCA9ICFtcC5lbmFibGVkO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdLmluY2x1ZGVzKG1wLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF1baV0gPT0gbXAubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzRdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghbXAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs0XS5wdXNoKG1wLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgICAgIH0sIG1wLmVuYWJsZWQpO1xyXG4gICAgICAgIGlmIChyZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNF0uaW5jbHVkZXMobXAubmFtZSkpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgbXAuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5pbm5lclRleHQgPSBcIk9mZlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0b2dnbGUpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBtYWtlUHVzaEJ1dHRvbihcInhcIiwgKCkgPT4gbXAubW9kdWxlLmNsZWFudXAoKSk7XHJcbiAgICAgICAgY2xlYW51cC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiOHB4XCI7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoY2xlYW51cCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVuaGFuY2VkQ29sb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZW5oYW5jZWRDb2xvckhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkVuaGFuY2VkIENvbG9yc1wiKSk7XHJcbiAgICBlbmhhbmNlZENvbG9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZW5oYW5jZWRDb2xvckhlYWRlcik7XHJcbiAgICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb2xvckxhYmVsID0gY3JlYXRlVGV4dFNwYW4oXCJFbmhhbmNlZCBDb2xvcnNcIik7XHJcbiAgICBjb2xvckxhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICBjb2xvckRpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcclxuICAgIGNvbnN0IGNvbG9yQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb2xvckNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjb2xvckNoZWNrLmNoZWNrZWQgPSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bM107XHJcbiAgICBjb2xvckNoZWNrLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29sb3JDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVszXSA9IGNvbG9yQ2hlY2suY2hlY2tlZDtcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29sb3JEaXYuYXBwZW5kQ2hpbGQoY29sb3JDaGVjayk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcclxuICAgIGNvbnN0IGJ1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYnVybkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGJ1cm5MYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIkJ1cm4gU2V0dGluZ3NcIikpO1xyXG4gICAgYnVybkxhYmVsLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgIGJ1cm5MYWJlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xyXG4gICAgYnVybkRpdi5hcHBlbmRDaGlsZChidXJuTGFiZWwpO1xyXG4gICAgY29uc3Qgc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1cm5EaXYuYXBwZW5kQ2hpbGQoc2V0RGl2KTtcclxuICAgIHNldERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0RGl2LmFwcGVuZENoaWxkKHJlZERpdik7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCJSZWQgVGhyZXNob2xkOiBcIikpO1xyXG4gICAgY29uc3QgcmVkSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByZWRJbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHJlZEluLnZhbHVlID0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzBdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSk7XHJcbiAgICByZWREaXYuYXBwZW5kQ2hpbGQocmVkSW4pO1xyXG4gICAgcmVkSW4uY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICByZWRJbi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgcmVkSW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMF0gPSBwYXJzZUZsb2F0KHJlZEluLnZhbHVlKTtcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeWVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldERpdi5hcHBlbmRDaGlsZCh5ZWxEaXYpO1xyXG4gICAgeWVsRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiWWVsbG93IFRocmVzaG9sZDogXCIpKTtcclxuICAgIGNvbnN0IHllbEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgeWVsSW4udHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICB5ZWxJbi52YWx1ZSA9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVsxXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pO1xyXG4gICAgeWVsRGl2LmFwcGVuZENoaWxkKHllbEluKTtcclxuICAgIHllbEluLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgeWVsSW4uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHllbEluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdID0gcGFyc2VGbG9hdCh5ZWxJbi52YWx1ZSk7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVybkRpdik7XHJcbiAgICBjb25zdCBzY3JlZW5VbnBhY2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgc2NyZWVuVW5wYWNrSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2NyZWVuIFVucGFjayBFeGNsdXNpb25zXCIpKTtcclxuICAgIHNjcmVlblVucGFja0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHNjcmVlblVucGFja0hlYWRlcik7XHJcbiAgICBjb25zdCBub3RpZkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKG5vdGlmRGl2KTtcclxuICAgIG5vdGlmRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiTGlzdCBzY3JlZW4gbmFtZXMgc2VwYXJhdGVkIGJ5IGNvbW1hcywgbm8gc3BhY2VzLlwiKSk7XHJcbiAgICBjb25zdCBleGNsdXNpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZXhjbHVzaW9uSW5wdXQudmFsdWUgPSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNV0gPT0gdW5kZWZpbmVkID8gXCJcIiA6IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs1XS5qb2luKFwiLFwiKTtcclxuICAgIGV4Y2x1c2lvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzVdID0gZXhjbHVzaW9uSW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGV4Y2x1c2lvbklucHV0KTtcclxuICAgIGNvbnN0IGhvdGtleUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBob3RrZXlIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMZWZ0IFNpZGViYXIgQnV0dG9uc1wiKSk7XHJcbiAgICBob3RrZXlIZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlIZWFkZXIpO1xyXG4gICAgY29uc3QgaG90a2V5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChob3RrZXlJbnB1dERpdik7XHJcbiAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNl0uZm9yRWFjaChob3RrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUlucHV0UGFpcihob3RrZXksIHJlc3VsdCwgaG90a2V5SW5wdXREaXYpO1xyXG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBob3RrZXlJbnB1dERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gbWFrZVB1c2hCdXR0b24oXCIrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVJbnB1dFBhaXIoW1tdLCBbXV0sIHJlc3VsdCwgaG90a2V5SW5wdXREaXYpO1xyXG4gICAgICAgIGlmIChkaXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBob3RrZXlJbnB1dERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjRweFwiO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNHB4XCI7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICByZXR1cm4gW3BhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIHVzZXJuYW1lLCBmdWxsQnVybiwgYnVyblNldHRpbmdzXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBhaXIoaG90a2V5LCByZXN1bHQsIGZ1bGxEaXYpIHtcclxuICAgIGlmIChob3RrZXkubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkaXNwbGF5ZWRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRpc3BsYXllZFZhbHVlLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgZGlzcGxheWVkVmFsdWUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGlzcGxheWVkVmFsdWUpO1xyXG4gICAgY29uc3QgY29tbWFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbW1hbmQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBjb21tYW5kLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbW1hbmQpO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gbWFrZVB1c2hCdXR0b24oXCJYXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwbGF5ZWRWYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheWVkVmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkaXYuY2hpbGRyZW4pLmZvckVhY2goZWxlbSA9PiB7IGRpdi5yZW1vdmVDaGlsZChlbGVtKTsgfSk7XHJcbiAgICB9LCBTdHlsZS5CdXR0b25EYW5nZXIpO1xyXG4gICAgcmVtb3ZlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS52YWx1ZSA9IGhvdGtleVswXTtcclxuICAgIGNvbW1hbmQudmFsdWUgPSBob3RrZXlbMV07XHJcbiAgICBkaXNwbGF5ZWRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob3RrZXlzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShmdWxsRGl2LmNoaWxkcmVuKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IFwiXCIgJiYgb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBob3RrZXlzLnB1c2goW29wdGlvbi5jaGlsZHJlblswXS52YWx1ZSwgb3B0aW9uLmNoaWxkcmVuWzFdLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bNl0gPSBob3RrZXlzO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICBjb21tYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvdGtleXMgPSBbXTtcclxuICAgICAgICBBcnJheS5mcm9tKGZ1bGxEaXYuY2hpbGRyZW4pLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQgJiYgb3B0aW9uLmNoaWxkcmVuWzFdICE9IHVuZGVmaW5lZCAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gXCJcIiAmJiBvcHRpb24uY2hpbGRyZW5bMF0udmFsdWUgIT0gdW5kZWZpbmVkICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSBcIlwiICYmIG9wdGlvbi5jaGlsZHJlblsxXS52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhvdGtleXMucHVzaChbb3B0aW9uLmNoaWxkcmVuWzBdLnZhbHVlLCBvcHRpb24uY2hpbGRyZW5bMV0udmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs2XSA9IGhvdGtleXM7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVB1c2hCdXR0b24odGV4dCwgZiwgc3R5bGUgPSBTdHlsZS5CdXR0b25QcmltYXJ5KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5zdHlsZSk7XHJcbiAgICBidXR0b24ub25jbGljayA9IGY7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuZnVuY3Rpb24gbWFrZVRvZ2dsZUJ1dHRvbihvbiwgb2ZmLCBmLCBzdGF0ZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICBjb25zdCBzZXRMb29rID0gKHMpID0+IHtcclxuICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gcyA/IG9uIDogb2ZmO1xyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgU3RyaW5nKHN0YXRlKSk7XHJcbiAgICBzZXRMb29rKHN0YXRlKTtcclxuICAgIHRvZ2dsZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gISh0b2dnbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKSA9PT0gXCJ0cnVlXCIpO1xyXG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFN0cmluZyhuZXdTdGF0ZSkpO1xyXG4gICAgICAgIHNldExvb2sobmV3U3RhdGUpO1xyXG4gICAgICAgIGYoKTtcclxuICAgIH07XHJcbiAgICB0b2dnbGUuc3R5bGUud2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHJldHVybiB0b2dnbGU7XHJcbn1cclxuZnVuY3Rpb24gc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHJlc3VsdCwgZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIlNhdmVkIENvbmZpZ3VyYXRpb25cIik7IH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxjdWxhdG9yX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgY29uc3QgY2FsY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNhbGNEaXYpO1xyXG4gICAgdGlsZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB0aWxlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjQwMHB4XCI7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBvdXRwdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICBvdXRwdXQuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgIG91dHB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBvdXRwdXQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjYWxjRGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgIGNhbGNEaXYuc3R5bGUud2lkdGggPSBcIjYwJVwiO1xyXG4gICAgY2FsY0Rpdi5zdHlsZS5taW5XaWR0aCA9IFwiMTgwcHhcIjtcclxuICAgIGNvbnN0IGhpc3RvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChoaXN0b3J5RGl2KTtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUud2lkdGggPSBcIjM1JVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGhpc3RvcnlEaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCIxOTVweFwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgNDAsIDQzKVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmdiKDQzLDcyLDkwKVwiO1xyXG4gICAgaGlzdG9yeURpdi5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XHJcbiAgICBoaXN0b3J5RGl2LnN0eWxlLmJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xyXG4gICAgY29uc3QgaGlzdG9yeVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgaGlzdG9yeURpdi5hcHBlbmRDaGlsZChoaXN0b3J5VGFibGUpO1xyXG4gICAgY29uc3QgaGlzdG9yeVRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIGhpc3RvcnlUYWJsZS5hcHBlbmRDaGlsZChoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgIG91dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgb3V0cHV0LnN0eWxlLndpZHRoID0gXCI5MCVcIjtcclxuICAgIG91dHB1dC5zdHlsZS5oZWlnaHQgPSBcIjM2cHhcIjtcclxuICAgIG91dHB1dC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgIG91dHB1dC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQob3V0cHV0KTtcclxuICAgIHZhciBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgIHZhciBwcmV2VmFsdWUgPSBudWxsO1xyXG4gICAgdmFyIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgdmFyIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICB2YXIgZG91YmxlQ2xlYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IGtleXBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjRGl2LmFwcGVuZENoaWxkKGtleXBhZCk7XHJcbiAgICBrZXlwYWQuc3R5bGUud2lkdGggPSBcIjk1JVwiO1xyXG4gICAga2V5cGFkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGtleXBhZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoNCwgMWZyKVwiO1xyXG4gICAgY29uc3QgbGF5b3V0ID0gW1s3LCBudWxsXSwgWzgsIG51bGxdLCBbOSwgbnVsbF0sIFtcIsO3XCIsIFwiIzNmYTJkZVwiXSwgWzQsIG51bGxdLCBbNSwgbnVsbF0sIFs2LCBudWxsXSwgW1wieFwiLCBcIiMzZmEyZGVcIl0sIFsxLCBudWxsXSwgWzIsIG51bGxdLCBbMywgbnVsbF0sIFtcIi1cIiwgXCIjM2ZhMmRlXCJdLCBbMCwgbnVsbF0sIFtcIi5cIiwgbnVsbF0sIFtcIsKxXCIsIG51bGxdLCBbXCIrXCIsIFwiIzNmYTJkZVwiXV07XHJcbiAgICBsYXlvdXQuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAob3B0WzBdID09IDAgPyBcIjBcIiA6IG9wdFswXSB8fCBcIlwiKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChvcHRbMV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0WzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlwYWQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG9wdFswXSA9PSBcIitcIiB8fCBvcHRbMF0gPT0gXCItXCIgfHwgb3B0WzBdID09IFwieFwiIHx8IG9wdFswXSA9PSBcIsO3XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBvcHRbMF07XHJcbiAgICAgICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdFswXSA9PSBcIsKxXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nLnRvU3RyaW5nKCkuY2hhckF0KDApID09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IGN1cnJlbnRTdHJpbmcuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFwiLVwiICsgY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IChvcHRbMF0gPT0gMCA/IFwiMFwiIDogb3B0WzBdIHx8IFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdWJsZUNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcclxuICAgIGJvdHRvbURpdi5zdHlsZS53aWR0aCA9IFwiOTUlXCI7XHJcbiAgICBib3R0b21EaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgYm90dG9tRGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCgyLCAxZnIpXCI7XHJcbiAgICBjb25zdCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY2xlYXIpO1xyXG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XHJcbiAgICBjbGVhci5jbGFzc0xpc3QuYWRkKFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICBjbGVhci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgY2xlYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE3LCA4MywgNzkpXCI7XHJcbiAgICBjbGVhci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICBjbGVhck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGhpc3RvcnlUYWJsZUJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBvdXRwdXQudmFsdWU7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkucmVtb3ZlQ2hpbGQoaGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbltoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5Lmluc2VydEJlZm9yZSh0ciwgaGlzdG9yeVRhYmxlQm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlUYWJsZUJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZChlbnRlcik7XHJcbiAgICBlbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcclxuICAgIGVudGVyLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgIGVudGVyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICBlbnRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1Y2I4NWNcIjtcclxuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiIHx8IGUua2V5ID09PSBcIjJcIiB8fCBlLmtleSA9PT0gXCIzXCIgfHwgZS5rZXkgPT09IFwiNFwiIHx8IGUua2V5ID09PSBcIjVcIiB8fCBlLmtleSA9PT0gXCI2XCIgfHwgZS5rZXkgPT09IFwiN1wiIHx8IGUua2V5ID09PSBcIjhcIiB8fCBlLmtleSA9PT0gXCI5XCIgfHwgZS5rZXkgPT09IFwiMFwiIHx8IGUua2V5ID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICBpZiAoY2xlYXJPbk5leHQpIHtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSBlLmtleTtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50U3RyaW5nKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxMiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiK1wiIHx8IGUua2V5ID09PSBcIi1cIiB8fCBlLmtleSA9PT0gXCJ4XCIgfHwgZS5rZXkgPT09IFwiKlwiIHx8IGUua2V5ID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9wZXJhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gY2FsY3VsYXRlKHByZXZWYWx1ZSwgY3VycmVudFN0cmluZywgY3VycmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IGUua2V5O1xyXG4gICAgICAgICAgICBjbGVhck9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiPVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3BlcmF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjYWxjdWxhdGUocHJldlZhbHVlLCBjdXJyZW50U3RyaW5nLCBjdXJyZW50T3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEyIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gb3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VGFibGVCb2R5LmNoaWxkcmVuLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LnJlbW92ZUNoaWxkKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW5baGlzdG9yeVRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlUYWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIGhpc3RvcnlUYWJsZUJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgY3VycmVudE9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGNsZWFyT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChkb3VibGVDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihoaXN0b3J5VGFibGVCb2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGVDbGVhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBjdXJyZW50U3RyaW5nLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IHBhcnNlRmxvYXQoY3VycmVudFN0cmluZykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZShwcmV2VmFsdWUsIGN1cnJlbnRTdHJpbmcsIGN1cnJlbnRPcGVyYXRpb24pIHtcclxuICAgIGN1cnJlbnRTdHJpbmcgPSBwYXJzZUZsb2F0KGN1cnJlbnRTdHJpbmcpO1xyXG4gICAgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCIrXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlICsgY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCItXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJldlZhbHVlIC0gY3VycmVudFN0cmluZztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnJlbnRPcGVyYXRpb24gPT0gXCJ4XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIipcIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgKiBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudE9wZXJhdGlvbiA9PSBcIsO3XCIgfHwgY3VycmVudE9wZXJhdGlvbiA9PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBwcmV2VmFsdWUgLyBjdXJyZW50U3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBSZXBhaXJzX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElELCB1c2VybmFtZSkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgUmVwYWlyc19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zaXRlcy9cIiArIHVzZXJuYW1lLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm4gd2ViYXBwSUQ7XHJcbn1cclxuZnVuY3Rpb24gUmVwYWlyc19wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmVwYWlyRGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVwYWlyRGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJBbGwgUmVwYWlyc1wiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRocmVzaG9sZERpdik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRcIik7XHJcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVGV4dCA9IGNyZWF0ZVRleHRTcGFuKFwiQWdlIFRocmVzaG9sZDpcIik7XHJcbiAgICAgICAgdGhyZXNob2xkVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQudmFsdWUgPSBcIjcwXCI7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgICB0aHJlc2hvbGREaXYuYXBwZW5kQ2hpbGQodGhyZXNob2xkVGV4dCk7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICBjb25zdCBtYXRUaXRsZSA9IGNyZWF0ZVRleHRTcGFuKFwiU2hvcHBpbmcgQ2FydFwiKTtcclxuICAgICAgICBtYXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXRUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgbWF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKG1hdERpdik7XHJcbiAgICAgICAgY29uc3QgYnVpVGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIkJ1aWxkaW5nc1wiKTtcclxuICAgICAgICBidWlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ1RvcCA9IFwiNXB4XCI7XHJcbiAgICAgICAgYnVpVGl0bGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMnB4XCI7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChidWlUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICBmb3IgKGxldCB0IG9mIFtcIlRpY2tlclwiLCBcIlBsYW5ldFwiLCBcIkFnZVwiLCBcIkNvbmRpdGlvblwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGhyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWlsZGluZ3MgPSBbXTtcclxuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XHJcbiAgICAgICAgICAgIHNpdGVbXCJCdWlsZGluZ3NcIl0uZm9yRWFjaChidWlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3MucHVzaChbc2l0ZVtcIlBsYW5ldE5hbWVcIl0sIGJ1aWxkXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkaW5ncy5zb3J0KGdsb2JhbEJ1aWxkaW5nU29ydCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB0aHJlc2hvbGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckNoaWxkcmVuKGJvZHkpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUdlbmVyYWxSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBidWlsZGluZ3MsIHRocmVzaG9sZElucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dFNwYW4ocGFyYW1ldGVyc1sxXSArIFwiIFJlcGFpcnNcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIHZhciBzaXRlRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXBhaXJEYXRhLmZvckVhY2goc2l0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzaXRlW1wiUGxhbmV0TmFtZVwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSB8fCBzaXRlW1wiUGxhbmV0SWRlbnRpZmllclwiXS50b1VwcGVyQ2FzZSgpID09IHBhcmFtZXRlcnNbMV0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgc2l0ZURhdGEgPSBzaXRlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNpdGVEYXRhID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0aHJlc2hvbGREaXYpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFRleHQgPSBjcmVhdGVUZXh0U3BhbihcIkFnZSBUaHJlc2hvbGQ6XCIpO1xyXG4gICAgICAgIHRocmVzaG9sZFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnZhbHVlID0gXCI3MFwiO1xyXG4gICAgICAgIHRocmVzaG9sZElucHV0LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGhyZXNob2xkRGl2LmFwcGVuZENoaWxkKHRocmVzaG9sZFRleHQpO1xyXG4gICAgICAgIHRocmVzaG9sZERpdi5hcHBlbmRDaGlsZCh0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0VGl0bGUgPSBjcmVhdGVUZXh0U3BhbihcIlNob3BwaW5nIENhcnRcIik7XHJcbiAgICAgICAgbWF0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIG1hdFRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQobWF0VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG1hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChtYXREaXYpO1xyXG4gICAgICAgIGNvbnN0IGJ1aVRpdGxlID0gY3JlYXRlVGV4dFNwYW4oXCJCdWlsZGluZ3NcIik7XHJcbiAgICAgICAgYnVpVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjVweFwiO1xyXG4gICAgICAgIGJ1aVRpdGxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjJweFwiO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYnVpVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBbXCJUaWNrZXJcIiwgXCJBZ2VcIiwgXCJDb25kaXRpb25cIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaXRlRGF0YVtcIkJ1aWxkaW5nc1wiXS5zb3J0KGJ1aWxkaW5nU29ydCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBnZW5lcmF0ZVJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIHNpdGVEYXRhLCB0aHJlc2hvbGRJbnB1dCk7XHJcbiAgICAgICAgdGhyZXNob2xkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJDaGlsZHJlbihib2R5KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVSZXBhaXJTY3JlZW4oYm9keSwgbWF0RGl2LCBzaXRlRGF0YSwgdGhyZXNob2xkSW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmVwYWlyU2NyZWVuKGJvZHksIG1hdERpdiwgc2l0ZURhdGEsIHRocmVzaG9sZElucHV0KSB7XHJcbiAgICBjb25zdCBub25Qcm9kID0gW1wiQ01cIiwgXCJIQjFcIiwgXCJIQjJcIiwgXCJIQjNcIiwgXCJIQjRcIiwgXCJIQjVcIiwgXCJIQkJcIiwgXCJIQkNcIiwgXCJIQkxcIiwgXCJIQk1cIiwgXCJTVE9cIl07XHJcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcclxuICAgIHNpdGVEYXRhW1wiQnVpbGRpbmdzXCJdLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgaWYgKGRhdGUgPCBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkaW5nW1wiUmVwYWlyTWF0ZXJpYWxzXCJdLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbXCJCdWlsZGluZ1RpY2tlclwiXSwgZGF0ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pLCAoYnVpbGRpbmdbXCJDb25kaXRpb25cIl0gKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiVcIl07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNsZWFyQ2hpbGRyZW4obWF0RGl2KTtcclxuICAgIG1hdERpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgbWF0RGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBmb3IgKGxldCB0IG9mIFtcIk1hdGVyaWFsXCIsIFwiQW1vdW50XCJdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHQ7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChtYm9keSk7XHJcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLnNvcnQoKS5mb3JFYWNoKG1hdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIG1ib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbbWF0LCBtYXRlcmlhbHNbbWF0XS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQpXTtcclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgIHRhYmxlRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbihwb2ludCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VuZXJhbFJlcGFpclNjcmVlbihib2R5LCBtYXREaXYsIGJ1aWxkaW5ncywgdGhyZXNob2xkSW5wdXQpIHtcclxuICAgIGNvbnN0IG5vblByb2QgPSBbXCJDTVwiLCBcIkhCMVwiLCBcIkhCMlwiLCBcIkhCM1wiLCBcIkhCNFwiLCBcIkhCNVwiLCBcIkhCQlwiLCBcIkhCQ1wiLCBcIkhCTFwiLCBcIkhCTVwiLCBcIlNUT1wiXTtcclxuICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xyXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgaWYgKG5vblByb2QuaW5jbHVkZXMoYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdMYXN0UmVwYWlyXCJdIHx8IGJ1aWxkaW5nWzFdW1wiQnVpbGRpbmdDcmVhdGVkXCJdKSkgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgaWYgKGRhdGUgPCBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkaW5nWzFdW1wiUmVwYWlyTWF0ZXJpYWxzXCJdLmZvckVhY2gobWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsc1ttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0W1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJvd0RhdGEgPSBbYnVpbGRpbmdbMV1bXCJCdWlsZGluZ1RpY2tlclwiXSwgYnVpbGRpbmdbMF0sIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSwgKGJ1aWxkaW5nWzFdW1wiQ29uZGl0aW9uXCJdICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIlXCJdO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjbGVhckNoaWxkcmVuKG1hdERpdik7XHJcbiAgICBtYXREaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIG1hdERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJNYXRlcmlhbFwiLCBcIkFtb3VudFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0O1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XHJcbiAgICAgICAgaHIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWJvZHkpO1xyXG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5zb3J0KCkuZm9yRWFjaChtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBtYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIHZhciByb3dEYXRhID0gW21hdCwgbWF0ZXJpYWxzW21hdF0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKV07XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBidWlsZGluZ1NvcnQoYSwgYikge1xyXG4gICAgcmV0dXJuIGFbXCJDb25kaXRpb25cIl0gPiBiW1wiQ29uZGl0aW9uXCJdID8gMSA6IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGdsb2JhbEJ1aWxkaW5nU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVsxXVtcIkNvbmRpdGlvblwiXSA+IGJbMV1bXCJDb25kaXRpb25cIl0gPyAxIDogLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgQ2hhdF9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jaGF0L2Rpc3BsYXkvXCIgKyBwYXJhbWV0ZXJzWzFdLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gQ2hhdF9wb3N0KGNoYXREaXYsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY2hhdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNoYXREYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICBjaGF0RGl2LnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHBhcmFtZXRlcnNbMV0gKyBcIiBHbG9iYWwgU2l0ZSBPd25lcnNcIjtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY2hhdERhdGEuZm9yRWFjaChjaGF0ID0+IHtcclxuICAgICAgICBjb25zdCBjaGF0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuY2xhc3NMaXN0LmFkZChcImNoYXQtbGluZVwiKTtcclxuICAgICAgICBjaGF0RGl2LmFwcGVuZENoaWxkKGNoYXRMaW5lKTtcclxuICAgICAgICBjb25zdCB0aW1lRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgICAgICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiIH0pO1xyXG4gICAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRpbWUtZGF0ZVwiKTtcclxuICAgICAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lRGF0ZURpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KTtcclxuICAgICAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGNoYXRbXCJNZXNzYWdlVGltZXN0YW1wXCJdKSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KTtcclxuICAgICAgICB0aW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWRhdGVcIik7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKHRpbWVEYXRlRGl2KTtcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0LW5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XHJcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoY2hhdFtcIk1lc3NhZ2VUeXBlXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDSEFUXCI6XHJcbiAgICAgICAgICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJNZXNzYWdlVGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiSk9JTkVEXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgam9pbmVkLlwiO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMRUZUXCI6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gY2hhdFtcIlVzZXJOYW1lXCJdICsgXCIgbGVmdC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5fcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm4gYXBpa2V5O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgd2ViYXBwSUQgKyBcIi9leGVjP21vZGU9JTIyZmluJTIyJnBhcmFtPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZpbl9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGaW5fcG9zdCh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBKU09OIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGlsZUhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIE92ZXJ2aWV3XCI7XHJcbiAgICB0aWxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJLZXkgRmlndXJlc1wiO1xyXG4gICAgdGlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0aWxlSGVhZGVyKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiRml4ZWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bMl0pLnRvTG9jYWxlU3RyaW5nKCksIFwiQ3VycmVudCBBc3NldHNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KE1hdGgucm91bmQoZGF0YVswXVs0XSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJMaXF1aWQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bN10pLnRvTG9jYWxlU3RyaW5nKCksIFwiRXF1aXR5XCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNV0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlhYmlsaXRpZXNcIiwgVGV4dENvbG9ycy5TdGFuZGFyZCkpO1xyXG4gICAgY29uc3Qgbm93ID0gZGF0YVswXVswXTtcclxuICAgIHZhciB3ZWVrQWdvID0gLTE7XHJcbiAgICB2YXIgYmVzdEd1ZXNzID0gODY0MDAwMDAwMDA7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoTWF0aC5hYnMobm93IC0gZGF0YVtpXVswXSkgLSA3ICogODY0MDAwMDApIDwgYmVzdEd1ZXNzKSB7XHJcbiAgICAgICAgICAgIGJlc3RHdWVzcyA9IE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKTtcclxuICAgICAgICAgICAgd2Vla0FnbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdlZWtBZ28gIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBwcm9maXQgPSBNYXRoLnJvdW5kKGRhdGFbMF1bN10gLSBkYXRhW3dlZWtBZ29dWzddKTtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHByb2ZpdCA+IDAgPyBUZXh0Q29sb3JzLlN1Y2Nlc3MgOiBUZXh0Q29sb3JzLkZhaWx1cmU7XHJcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByb2ZpdC50b0xvY2FsZVN0cmluZygpLCBcIlByb2ZpdFwiLCBjb2xvcikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJlYWtkb3duSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRpdGxlID0gXCJGaW5hbmNpYWwgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkludmVudG9yeSBCcmVha2Rvd25cIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZmluLXRpdGxlXCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChicmVha2Rvd25IZWFkZXIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXCJOYW1lXCIsIFwiRml4ZWQgQXNzZXRzXCIsIFwiQ3VycmVudCBBc3NldHNcIiwgXCJUb3RhbCBBc3NldHNcIl07XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IGJyZWFrZG93biA9IEpTT04ucGFyc2UoZGF0YVswXVs4XSk7XHJcbiAgICBicmVha2Rvd24uc29ydChmaW5hbmNpYWxTb3J0KTtcclxuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgYnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBmaXJzdFRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3RUYWJsZUVsZW0pO1xyXG4gICAgICAgIGZpcnN0VGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJvd0RhdGFbMF0pKTtcclxuICAgICAgICByb3dEYXRhLnNoaWZ0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbn1cclxuZnVuY3Rpb24gZmluYW5jaWFsU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVszXSA8IGJbM10gPyAxIDogLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEVuaGFuY2VkQnVybl9wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUsIGZ1bGxCdXJuLCBidXJuU2V0dGluZ3MsIG1vZHVsZXMsIHJlc3VsdCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIHZhciBidXJuO1xyXG4gICAgdmFyIHVubG9hZGVkID0gZmFsc2U7XHJcbiAgICB2YXIgcGxhbmV0O1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuIFthcGlrZXksIHdlYmFwcElELCBtb2R1bGVzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID09IDMgJiYgcGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpID09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgIGlmIChmdWxsQnVybltwYXJhbWV0ZXJzWzJdXSAhPSB1bmRlZmluZWQgJiYgZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBidXJuID0gZnVsbEJ1cm5bcGFyYW1ldGVyc1syXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmlkICE9IFwicG1tZy1yZWxvYWRcIikge1xyXG4gICAgICAgICAgICAgICAgZ2V0R3JvdXBCdXJuKGZ1bGxCdXJuLCBwYXJhbWV0ZXJzWzJdLCBhcGlrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGZ1bGxCdXJuW3VzZXJuYW1lXSAhPSB1bmRlZmluZWQgJiYgZnVsbEJ1cm5bdXNlcm5hbWVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnVybiA9IGZ1bGxCdXJuW3VzZXJuYW1lXTtcclxuICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYnVyblNldHRpbmdzWzBdID09IFwibG9hZGluZ1wiIHx8IHVubG9hZGVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBCdXJuIERhdGEuLi5cIjtcclxuICAgICAgICB0aWxlLmlkID0gXCJwbW1nLXJlbG9hZFwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRpbGUuaWQgPSBcInBtbWctbG9hZC1zdWNjZXNzXCI7XHJcbiAgICB2YXIgc2V0dGluZ3M7XHJcbiAgICBpZiAocGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpID09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgIHZhciBpbnYgPSB7fTtcclxuICAgICAgICB2YXIgY29ucyA9IHt9O1xyXG4gICAgICAgIGZ1bGxCdXJuW3BhcmFtZXRlcnNbMl1dLmZvckVhY2gocGxhbmV0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGFuZXREYXRhW1wiRXJyb3JcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIkludmVudG9yeVwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJDb25zdW1wdGlvblwiXS5mb3JFYWNoKG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxhbmV0RGF0YVtcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gLW1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dIC09IG1hdGVyaWFsW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXREYXRhW1wiT3JkZXJQcm9kdWN0aW9uXCJdLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgYnVybik7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChwbGFuZXQsIGJ1cm5TZXR0aW5ncyk7XHJcbiAgICAgICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBQbGFuZXQhXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnMgPSB7fTtcclxuICAgICAgICB2YXIgaW52ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIldvcmtmb3JjZUNvbnN1bXB0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25zW21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IC1tYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiT3JkZXJDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSAtbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gLT0gbWF0ZXJpYWxbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbWF0ZXJpYWwgb2YgcGxhbmV0QnVybltcIk9yZGVyUHJvZHVjdGlvblwiXSkge1xyXG4gICAgICAgICAgICBpZiAoY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc1ttYXRlcmlhbFtcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBtYXRlcmlhbFtcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBwbGFuZXRCdXJuW1wiSW52ZW50b3J5XCJdKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZbbWF0ZXJpYWxbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBtYXRlcmlhbFtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW52W21hdGVyaWFsW1wiTWF0ZXJpYWxUaWNrZXJcIl1dICs9IG1hdGVyaWFsW1wiTWF0ZXJpYWxBbW91bnRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NyZWVuTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlNjcmVlbk5hbWUpO1xyXG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IHNjcmVlbk5hbWVFbGVtID8gc2NyZWVuTmFtZUVsZW0udGV4dENvbnRlbnQgOiBcIlwiO1xyXG4gICAgY29uc3QgZGlzcFNldHRpbmdzID0gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdICsgKHBhcmFtZXRlcnNbMl0gfHwgXCJcIildIHx8IFsxLCAxLCAxLCAxXTtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XHJcbiAgICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbihcIlJFRFwiLCAyMi4wMjUsIGRpc3BTZXR0aW5nc1swXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1swXSA9IGRpc3BTZXR0aW5nc1swXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdICsgKHBhcmFtZXRlcnNbMl0gfHwgXCJcIildID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJZRUxMT1dcIiwgNDAuNDgzLCBkaXNwU2V0dGluZ3NbMV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwU2V0dGluZ3NbMV0gPSBkaXNwU2V0dGluZ3NbMV0gPyAwIDogMTtcclxuICAgICAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgICAgIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs4XVtzY3JlZW5OYW1lICsgcGFyYW1ldGVyc1sxXSArIChwYXJhbWV0ZXJzWzJdIHx8IFwiXCIpXSA9IGRpc3BTZXR0aW5ncztcclxuICAgICAgICBzZXRFbmFibGVkU2V0dGluZ3MocmVzdWx0KTtcclxuICAgIH0pKTtcclxuICAgIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKFwiR1JFRU5cIiwgMzQuNjUsIGRpc3BTZXR0aW5nc1syXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BTZXR0aW5nc1syXSA9IGRpc3BTZXR0aW5nc1syXSA/IDAgOiAxO1xyXG4gICAgICAgIFVwZGF0ZUJ1cm4odGFibGUsIGRpc3BTZXR0aW5ncyk7XHJcbiAgICAgICAgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzhdW3NjcmVlbk5hbWUgKyBwYXJhbWV0ZXJzWzFdICsgKHBhcmFtZXRlcnNbMl0gfHwgXCJcIildID0gZGlzcFNldHRpbmdzO1xyXG4gICAgICAgIHNldEVuYWJsZWRTZXR0aW5ncyhyZXN1bHQpO1xyXG4gICAgfSkpO1xyXG4gICAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oXCJJTkZcIiwgMTkuNiwgZGlzcFNldHRpbmdzWzNdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcFNldHRpbmdzWzNdID0gZGlzcFNldHRpbmdzWzNdID8gMCA6IDE7XHJcbiAgICAgICAgVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKTtcclxuICAgICAgICByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bOF1bc2NyZWVuTmFtZSArIHBhcmFtZXRlcnNbMV0gKyAocGFyYW1ldGVyc1syXSB8fCBcIlwiKV0gPSBkaXNwU2V0dGluZ3M7XHJcbiAgICAgICAgc2V0RW5hYmxlZFNldHRpbmdzKHJlc3VsdCk7XHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIFtcIk5lZWRzXCIsIFwiUHJvZHVjdGlvblwiLCBcIkludlwiLCBcIkFtdC4gTmVlZGVkXCIsIFwiQnVyblwiXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGhlYWRSb3cuZmlyc3RDaGlsZC5jb2xTcGFuID0gMjtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIHZhciBidXJuTWF0ZXJpYWxzID0gT2JqZWN0LmtleXMoY29ucyk7XHJcbiAgICBidXJuTWF0ZXJpYWxzLnNvcnQoQ2F0ZWdvcnlTb3J0KTtcclxuICAgIGZvciAobGV0IG1hdGVyaWFsIG9mIGJ1cm5NYXRlcmlhbHMpIHtcclxuICAgICAgICB2YXIgaW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncyAhPSB1bmRlZmluZWQgJiYgcGFyYW1ldGVyc1sxXS50b0xvd2VyQ2FzZSgpICE9IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tcIk1hdGVyaWFsRXhjbHVzaW9uc1wiXS5mb3JFYWNoKChtYXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRbXCJNYXRlcmlhbFRpY2tlclwiXSA9PSBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbmNsdWRlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBweFwiO1xyXG4gICAgICAgIGNvbnN0IG1hdEVsZW0gPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQobWF0ZXJpYWwsIFwicHJ1bi1yZW1vdmUtanNcIiwgXCJub25lXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBpZiAobWF0RWxlbSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbENvbHVtbi5hcHBlbmRDaGlsZChtYXRFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG1hdGVyaWFsQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZVRleHRTcGFuKE1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxdWzBdKTtcclxuICAgICAgICBuYW1lU3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBuYW1lQ29sdW1uLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XHJcbiAgICAgICAgY29uc3QgY29uc0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGNvbnNbbWF0ZXJpYWxdLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyBcIiAvIERheVwiKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbnNDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGludkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCBpbnZBbW91bnQgPSBpbnZbbWF0ZXJpYWxdID09IHVuZGVmaW5lZCA/IDAgOiBpbnZbbWF0ZXJpYWxdO1xyXG4gICAgICAgIGludkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihpbnZBbW91bnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnZDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiAtaW52QW1vdW50IC8gY29uc1ttYXRlcmlhbF07XHJcbiAgICAgICAgY29uc3QgYnVybkNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBidXJuQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKCgoYnVybiA8IDUwMCAmJiBjb25zW21hdGVyaWFsXSA8IDApID8gTWF0aC5mbG9vcihidXJuKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pIDogXCLiiJ5cIikgKyBcIiBEYXlzXCIpKTtcclxuICAgICAgICBpZiAoY29uc1ttYXRlcmlhbF0gPj0gMCkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWluZmluaXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidXJuIDw9IHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVswXSkge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLXJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVybiA8PSByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bN11bMV0pIHtcclxuICAgICAgICAgICAgYnVybkNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiYnVybi15ZWxsb3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZWVkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRBbXQgPSBidXJuID4gcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzddWzFdIHx8IGNvbnNbbWF0ZXJpYWxdID4gMCA/IDAgOiAoYnVybiAtIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVs3XVsxXSkgKiBjb25zW21hdGVyaWFsXTtcclxuICAgICAgICBuZWVkQ29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG5lZWRBbXQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuZWVkQ29sdW1uKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnVybkNvbHVtbik7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVCdXJuKHRhYmxlLCBkaXNwU2V0dGluZ3MpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gVXBkYXRlQnVybih0YWJsZSwgZGlzcFNldHRpbmdzKSB7XHJcbiAgICBBcnJheS5mcm9tKHRhYmxlLmNoaWxkcmVuWzFdLmNoaWxkcmVuKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbls1XS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWluZmluaXRlXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzNdID8gXCJ0YWJsZS1yb3dcIiA6IFwiZmxleFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1szXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzNdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1ncmVlblwiKSkge1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BTZXR0aW5nc1syXSA/IFwidGFibGUtcm93XCIgOiBcImZsZXhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLnZpc2liaWxpdHkgPSBkaXNwU2V0dGluZ3NbMl0gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS53aWR0aCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGRpc3BTZXR0aW5nc1syXSA/IFwiYXV0b1wiIDogXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93LmNoaWxkcmVuWzVdLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKSB7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcFNldHRpbmdzWzFdID8gXCJ0YWJsZS1yb3dcIiA6IFwiZmxleFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUudmlzaWJpbGl0eSA9IGRpc3BTZXR0aW5nc1sxXSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcm93LnN0eWxlLndpZHRoID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gZGlzcFNldHRpbmdzWzFdID8gXCJhdXRvXCIgOiBcIjBweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3cuY2hpbGRyZW5bNV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVybi1yZWRcIikpIHtcclxuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwU2V0dGluZ3NbMF0gPyBcInRhYmxlLXJvd1wiIDogXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS52aXNpYmlsaXR5ID0gZGlzcFNldHRpbmdzWzBdID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICByb3cuc3R5bGUud2lkdGggPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBkaXNwU2V0dGluZ3NbMF0gPyBcImF1dG9cIiA6IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gQ2F0ZWdvcnlTb3J0KGEsIGIpIHtcclxuICAgIGlmIChNYXRlcmlhbE5hbWVzW2FdID09IHVuZGVmaW5lZCB8fCBNYXRlcmlhbE5hbWVzW2JdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsTmFtZXNbYV1bMV0ubG9jYWxlQ29tcGFyZShNYXRlcmlhbE5hbWVzW2JdWzFdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRUYWJsZV9wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCkge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybiBhcGlrZXk7XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgd2ViYXBwSUQgKyBcIi9leGVjP21vZGU9JTIyXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIlMjJcIjtcclxuICAgIGlmIChwYXJhbWV0ZXJzWzJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHVybCArPSBcIiZwYXJhbT0lMjJcIiArIHBhcmFtZXRlcnNbMl0gKyBcIiUyMlwiO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBTaGVldFRhYmxlX3Bvc3QsIHVybCwgXCJHRVRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdzQnV0dG9uKHRleHQsIHdpZHRoLCB0b2dnbGVkLCBmKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAodG9nZ2xlZCkge1xyXG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNldHRpbmdzQmFyVG9nZ2xlZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc1RleHQpO1xyXG4gICAgdGV4dEJveC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0J1dHRvbik7XHJcbiAgICBiYXIuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGJhci5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJhcik7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dEJveCk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodG9nZ2xlZCkge1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5TZXR0aW5nc0JhclRvZ2dsZWQpO1xyXG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TZXR0aW5nc0JhclVudG9nZ2xlZCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLlNldHRpbmdzQmFyVW50b2dnbGVkKTtcclxuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2V0dGluZ3NCYXJUb2dnbGVkKTtcclxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGYoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGRhdGFbMF0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyYWN0c19wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgdXNlcm5hbWUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIENvbnRyYWN0c19wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9jb250cmFjdC9hbGxjb250cmFjdHMvXCIgKyB1c2VybmFtZSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgcmV0dXJuIFt3ZWJhcHBJRF07XHJcbn1cclxuZnVuY3Rpb24gQ29udHJhY3RzX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjb250cmFjdERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyYWN0RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGVuZGluZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwZW5kaW5nSGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUGVuZGluZyBDb250cmFjdHNcIikpO1xyXG4gICAgcGVuZGluZ0hlYWRlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJTZWN0aW9uSGVhZCk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBlbmRpbmdIZWFkZXIpO1xyXG4gICAgY29uc3QgcGVuZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHBlbmRpbmdEaXYpO1xyXG4gICAgY29uc3Qgc2VlbkNvbnRyYWN0cyA9IFtdO1xyXG4gICAgY29udHJhY3REYXRhLmZvckVhY2goY29udHJhY3QgPT4ge1xyXG4gICAgICAgIGlmIChjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJGVUxGSUxMRURcIiB8fCBjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJCUkVBQ0hFRFwiIHx8IGNvbnRyYWN0W1wiU3RhdHVzXCJdID09PSBcIlRFUk1JTkFURURcIiB8fCBjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJDQU5DRUxMRURcIiB8fCBjb250cmFjdFtcIlN0YXR1c1wiXSA9PT0gXCJSRUpFQ1RFRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlZW5Db250cmFjdHMuaW5jbHVkZXMoY29udHJhY3RbXCJDb250cmFjdExvY2FsSWRcIl0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Db250cmFjdExpbmUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNyZWF0ZVRleHRTcGFuKGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKTtcclxuICAgICAgICBjb250cmFjdE5hbWUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Db250cmFjdE5hbWUpO1xyXG4gICAgICAgIGNvbnRyYWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwLXRleHRcIik7XHJcbiAgICAgICAgdmFyIGNvbnRUZXh0ID0gXCJcIjtcclxuICAgICAgICBpZiAoY29udHJhY3RbXCJDb25kaXRpb25zXCJdLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnRUZXh0ICs9IFwiQnV5aW5nIFwiICsgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVswXVtcIk1hdGVyaWFsQW1vdW50XCJdIHx8IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxXVtcIk1hdGVyaWFsQW1vdW50XCJdKSArIFwiIFwiICsgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVswXVtcIk1hdGVyaWFsVGlja2VyXCJdIHx8IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxXVtcIk1hdGVyaWFsVGlja2VyXCJdKSArIFwiIHdpdGggXCIgKyBjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgY29udFRleHQgKz0gXCJTZWxsaW5nIFwiICsgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVswXVtcIk1hdGVyaWFsQW1vdW50XCJdIHx8IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxXVtcIk1hdGVyaWFsQW1vdW50XCJdKSArIFwiIFwiICsgKGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVswXVtcIk1hdGVyaWFsVGlja2VyXCJdIHx8IGNvbnRyYWN0W1wiQ29uZGl0aW9uc1wiXVsxXVtcIk1hdGVyaWFsVGlja2VyXCJdKSArIFwiIHdpdGggXCIgKyBjb250cmFjdFtcIlBhcnRuZXJOYW1lXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb250cmFjdFtcIkNvbmRpdGlvbnNcIl0ubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgY29udFRleHQgKz0gXCJTaGlwcGluZyB3aXRoIFwiICsgY29udHJhY3RbXCJQYXJ0bmVyTmFtZVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGNvbnRUZXh0O1xyXG4gICAgICAgIGNvbnRyYWN0TmFtZS5hcHBlbmRDaGlsZCh0b29sdGlwKTtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKGNvbnRyYWN0TmFtZSk7XHJcbiAgICAgICAgc2VlbkNvbnRyYWN0cy5wdXNoKGNvbnRyYWN0W1wiQ29udHJhY3RMb2NhbElkXCJdKTtcclxuICAgICAgICBjb25zdCBjb250cmFjdFZpZXcgPSBjcmVhdGVMaW5rKFwidmlld1wiLCBcIkNPTlQgXCIgKyBjb250cmFjdFtcIkNvbnRyYWN0TG9jYWxJZFwiXSk7XHJcbiAgICAgICAgY29udHJhY3RWaWV3LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICBsaW5lLmFwcGVuZENoaWxkKGNvbnRyYWN0Vmlldyk7XHJcbiAgICAgICAgcGVuZGluZ0Rpdi5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBwcnVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xyXG4gICAgcHJ1bi53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcHJ1bi5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJ1bik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3NwZXJpdHlfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3Byb3NwZXJpdHktcHJ1bi5uZXRsaWZ5LmFwcC9cIjtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgdXJsICs9IFwiP2Zyb209XCIgKyBwYXJhbWV0ZXJzWzFdICsgXCImdG89XCIgKyBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgcHJvc3Auc3JjID0gdXJsO1xyXG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcHJvc3Auc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbWV0ZXJzWzFdICs9IFwiX1wiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHNoZWV0LnNyYyA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvZWRpdD91c3A9c2hhcmluZ1wiO1xyXG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHNoZWV0LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgc2hlZXQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHNlcnZlcklEO1xyXG4gICAgdmFyIGNoYW5uZWxJRDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgaWYgKERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcnZlcklEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMF07XHJcbiAgICAgICAgICAgIGNoYW5uZWxJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICBjaGFubmVsSUQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2NvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgZGlzY29yZC5zcmMgPSBcImh0dHBzOi8vZS53aWRnZXRib3QuaW8vY2hhbm5lbHMvXCIgKyBzZXJ2ZXJJRCArIFwiL1wiICsgY2hhbm5lbElEO1xyXG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgZGlzY29yZC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRklPSW52X3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXkpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIHBhcmFtZXRlcnMucHVzaChhcGlrZXkpO1xyXG4gICAgICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X2dldEFsbFN0b3JhZ2VzLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9hdXRoL2dyb3VwL1wiICsgcGFyYW1ldGVyc1sxXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbMl0gKz0gXCIgXCIgKyBwYXJhbWV0ZXJzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIEZJT0ludl9wb3N0LCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldC9zdG9yYWdlL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL1wiICsgcGFyYW1ldGVyc1syXSwgXCJHRVRcIiwgW1wiQXV0aG9yaXphdGlvblwiLCBhcGlrZXldLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9wb3N0KHRpbGUsIHBhcmFtZXRlcnMsIGpzb25kYXRhKSB7XHJcbiAgICBjb25zdCB0YWcgPSBcIkZJT1wiO1xyXG4gICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGludmVudG9yeURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludmVudG9yeURhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHZvbHVtZVVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lTG9hZFwiXTtcclxuICAgIGNvbnN0IHZvbHVtZVRvdGFsID0gaW52ZW50b3J5RGF0YVtcIlZvbHVtZUNhcGFjaXR5XCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VXNlZCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRMb2FkXCJdO1xyXG4gICAgY29uc3Qgd2VpZ2h0VG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0Q2FwYWNpdHlcIl07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbnYtaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImludi1ib2R5XCIpO1xyXG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMl0sIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICBjb25zdCB1c2VyRWxlbSA9IGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbMV0sIHRhZyk7XHJcbiAgICB1c2VyRWxlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlckVsZW0pO1xyXG4gICAgY29uc3Qgdm9sdW1lTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2b2x1bWVMaW5lLmlkID0gXCJ2b2x1bWUtbGluZVwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICB2b2x1bWVMaW5lLnN0eWxlLmNvbG9yID0gXCIjOTk5OTk5XCI7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKFwiVm9sdW1lIFwiLCB0YWcpKTtcclxuICAgIGNvbnN0IHZvbHVtZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcclxuICAgIHZvbHVtZUJhci5pZCA9IFwidm9sdW1lLWJhclwiO1xyXG4gICAgdm9sdW1lQmFyLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtYmFyXCIpO1xyXG4gICAgdm9sdW1lQmFyLm1heCA9IDE7XHJcbiAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKHZvbHVtZUJhcik7XHJcbiAgICB2b2x1bWVMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHZvbHVtZVVzZWQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgLyBcIiArIHZvbHVtZVRvdGFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSArIFwiIG3Cs1wiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcclxuICAgIGNvbnN0IHdlaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2VpZ2h0TGluZS5pZCA9IFwid2VpZ2h0LWxpbmVcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgd2VpZ2h0TGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIldlaWdodCBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB3ZWlnaHRCYXIuaWQgPSBcIndlaWdodC1iYXJcIjtcclxuICAgIHdlaWdodEJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB3ZWlnaHRCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcclxuICAgIHdlaWdodEJhci5tYXggPSAxO1xyXG4gICAgd2VpZ2h0QmFyLnZhbHVlID0gd2VpZ2h0VXNlZCAvIHdlaWdodFRvdGFsO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih3ZWlnaHRVc2VkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIC8gXCIgKyB3ZWlnaHRUb3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiB0XCIsIHRhZykpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHdlaWdodExpbmUpO1xyXG4gICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpbnZlbnRvcnlEYXRhW1wiU3RvcmFnZUl0ZW1zXCJdKSB7XHJcbiAgICAgICAgY29uc3QgbWF0ID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSwgdGFnLCBpdGVtW1wiTWF0ZXJpYWxBbW91bnRcIl0sIHRydWUpO1xyXG4gICAgICAgIGlmIChtYXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtYXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihcIk1BVCBcIiArIGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSk7IH0pO1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIEZJT0ludl9nZXRBbGxTdG9yYWdlcyh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIHVzZXJKU09OO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB1c2VySlNPTiA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIEJhZCBEYXRhIGZyb20gRklPIVwiO1xyXG4gICAgfVxyXG4gICAgdmFyIHVzZXJuYW1lcyA9IFtdO1xyXG4gICAgdXNlckpTT05bXCJHcm91cFVzZXJzXCJdLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgdXNlcm5hbWVzLnB1c2godXNlcltcIkdyb3VwVXNlck5hbWVcIl0pO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzLnB1c2godXNlckpTT05bXCJHcm91cE5hbWVcIl0pO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGSU9JbnZfYWxsRGlzcGxheSwgXCJodHRwczovL3Jlc3QuZm5hci5uZXQvZmlvd2ViL2dyb3VwaHViXCIsIFwiUE9TVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIHBhcmFtZXRlcnNbMl1dLCBKU09OLnN0cmluZ2lmeSh1c2VybmFtZXMpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBGSU9JbnZfYWxsRGlzcGxheSh0aWxlLCBwYXJhbWV0ZXJzLCBqc29uZGF0YSkge1xyXG4gICAgdmFyIGdyb3VwRGF0YSA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncm91cERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSBmcm9tIEZJTyFcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBhcmFtZXRlcnNbM10gKyBcIiBJbnZlbnRvcmllc1wiKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5RGl2KTtcclxuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtdGFibGVcIik7XHJcbiAgICBpZiAoZ3JvdXBEYXRhW1wiUGxheWVyTW9kZWxzXCJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBCYWQgRGF0YSFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBncm91cERhdGFbXCJQbGF5ZXJNb2RlbHNcIl0uZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXJbXCJMb2NhdGlvbnNcIl0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcclxuICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocGxheWVyW1wiVXNlck5hbWVcIl0pKTtcclxuICAgICAgICBwbGF5ZXJEaXYuZmlyc3RDaGlsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgcGxheWVyW1wiTG9jYXRpb25zXCJdLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhsb2NhdGlvbltcIkxvY2F0aW9uTmFtZVwiXSwgXCJYSVQgSU5WX1wiICsgcGxheWVyW1wiVXNlck5hbWVcIl0gKyBcIl9cIiArIGxvY2F0aW9uW1wiTG9jYXRpb25OYW1lXCJdLnJlcGxhY2UoLyAvLCBcIl9cIikpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5RGl2LmFwcGVuZENoaWxkKHBsYXllckRpdik7XHJcbiAgICB9KTtcclxuICAgIHBhcmFtZXRlcnMucG9wKCk7XHJcbiAgICBwYXJhbWV0ZXJzLnBvcCgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xyXG4gICAgaWYgKGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdID09IG51bGwgfHwgYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVEZ1bmN0aW9ucy50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcclxuICAgIH1cclxuICAgIGJlYXV0aWZ5T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kU2xvdHMgPSBBcnJheS5mcm9tKHF1ZXVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc3VtYWJsZVRpbWVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYnVybiwgdGhyZXNob2xkcykge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb25zdW1hYmxlLXRpbWVyc1wiO1xyXG4gICAgICAgIHRoaXMuYnVybiA9IGJ1cm47XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkcyA9IHRocmVzaG9sZHM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBpZiAodGhpcy5idXJuW3RoaXMudXNlcm5hbWVdID09IHVuZGVmaW5lZCB8fCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIldGXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZCB8fCBidWZmZXJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlQnVybnMoYnVmZmVyLCB0aGlzLmJ1cm5bdGhpcy51c2VybmFtZV0sIHRoaXMudGhyZXNob2xkcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgYnVybiwgdGhyZXNob2xkcykge1xyXG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Xb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlKTtcclxuICAgIGlmIChuYW1lRWxlbSA9PSBudWxsIHx8IG5hbWVFbGVtID09IHVuZGVmaW5lZCB8fCBuYW1lRWxlbS50ZXh0Q29udGVudCA9PSBudWxsIHx8IG5hbWVFbGVtLnRleHRDb250ZW50ID09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCBuYW1lID0gcGFyc2VCYXNlTmFtZShuYW1lRWxlbS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGhlYWQgPiB0clwiKSk7XHJcbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEhlYWRlciA9IGhlYWRlci5jaGlsZHJlblsyXTtcclxuICAgICAgICBjb25zdCBidXJuSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgIGlmIChidXJuSGVhZGVyLmNoaWxkcmVuICE9IHVuZGVmaW5lZCAmJiBidXJuSGVhZGVyLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXJuSGVhZGVyLnJlbW92ZUNoaWxkKGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXJuSGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJuXCI7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChuYW1lLCBidXJuKTtcclxuICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldFJvdy5jaGlsZEVsZW1lbnRDb3VudCA8IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzRdO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnZlbnRvcnlBbW91bnQgPSBmaW5kSW52ZW50b3J5QW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBidXJuQW1vdW50ID0gZmluZEJ1cm5BbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xyXG4gICAgICAgICAgICBpZiAoYnVybkFtb3VudCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoaW52ZW50b3J5QW1vdW50IC8gYnVybkFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gdGhyZXNob2xkc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLXJlZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5jbGFzc0xpc3QuYWRkKFwiYnVybi1yZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzTGVmdCA8PSB0aHJlc2hvbGRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXREYXRhLmNsYXNzTGlzdC5jb250YWlucyhcImJ1cm4teWVsbG93XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLXllbGxvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0RGF0YS5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJuLWdyZWVuXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLmNsYXNzTGlzdC5hZGQoXCJidXJuLWdyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdC50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXNMZWZ0ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXlcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheXNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRheXNMZWZ0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IG91dHB1dERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXREYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGRheXNMZWZ0KSk7XHJcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSB0b3RhbERhdGEuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxEYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihidXJuQW1vdW50ID09IDAgPyBcIlwiIDogYnVybkFtb3VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29uc3VtYWJsZVRpbWVycy50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9FVEEsIHBhcnNlRHVyYXRpb24sIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIEZsZWV0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItZmx0LWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJGTFRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlbls3XTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZUR1cmF0aW9uKGV0YURhdGEudGV4dENvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICBldGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxlZXRFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFscywgQ3VycmVuY3lTeW1ib2xzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUG9zdExNIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaWNlcykge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcG9zdC1sbS1wcmljZVwiO1xyXG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhbnVwc1tpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkxNUG9zdEZvcm0pKS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJDLUVDYi1vdmUxdGxhNnFzaVY0M2V3PT0gaXZHMjRxdFE5MmtieXNMVE5lV0p2dz09XCIpKTtcclxuICAgICAgICAgICAgdmFyIHNoaXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW0gb2YgdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQgPT0gXCJTSElQUElOR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1vZGl0eSA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDb21tb2RpdHknXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0Ftb3VudCddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxQcmljZUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J1RvdGFsIHByaWNlJ11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0N1cnJlbmN5J11dLy9zZWxlY3RcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlFbGVtZW50ID0gY3JlYXRlVGV4dFNwYW4oXCItLVwiLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGlmIChzaGlwcGluZyAmJiBjb21tb2RpdHkudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRJbmZvID0gTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRJbmZvID09IHVuZGVmaW5lZCB8fCBtYXRJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gbWF0SW5mb1sxXSA+PSBtYXRJbmZvWzJdID8gXCJ0XCIgOiBcIm3Cs1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodHZvbHVtZSA9IE1hdGgubWF4KG1hdEluZm9bMV0sIG1hdEluZm9bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih3ZWlnaHR2b2x1bWUpIHx8IGlzTmFOKHRvdGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IFwiLS0gdCB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyBcIi0tIC8gdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBcIiArIHVuaXQgKyBcIiB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgLyBcIiArIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJpY2VzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb21tb2RpdHkudmFsdWUgIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlID0gdGhpcy5wcmljZXNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYW1vdW50ICsgXCIgXCIgPT0gXCJOYU4gXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIiB8IFwiICsgKHByaWNlICogYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBUb3RhbCBDb3JwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCIgKyAocHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUG9zdExNLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaGlwcGluZy1hZHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oPzpTSElQUElORylcXHMoW1xcZCwuXSspdFxcc1xcL1xccyhbXFxkLC5dKyltwrNcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zyb20vKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSBtYXRjaGVzWzNdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9ubmFnZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1sxXS5yZXBsYWNlKC9bLC5dL2csICcnKSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gcGFyc2VGbG9hdChtYXRjaGVzWzJdLnJlcGxhY2UoL1ssLl0vZywgJycpKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHZhciB1bml0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvbm5hZ2UgPiBzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICd0JztcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHRvbm5hZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0ID0gJ23Csyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDZW50cyA9IHBhcnNlSW50KHRvdGFsQ29zdC5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJJdGVtID0gdG9GaXhlZCh0b3RhbENlbnRzIC8gY291bnQgLyAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTcGFuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkxNQ29tbW9kaXR5QWRQcmljZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0vJHt1bml0fSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NoaXBwaW5nQWRzLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgcGFyc2VEdXJhdGlvbiwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFF1ZXVlTG9hZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItcXVldWUtbG9hZFwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVRdWV1ZUxvYWQoKTtcclxuICAgIH1cclxuICAgIGdldEV0YUZyb21Sb3cocm93KSB7XHJcbiAgICAgICAgY29uc3QgZXRhQ2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg1KTtcclxuICAgICAgICBpZiAoZXRhQ2VsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBldGFTcGFuID0gZXRhQ2VsbC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgaWYgKGV0YVNwYW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IHBhcnNlRHVyYXRpb24oZXRhU3Bhbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlUXVldWVMb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Qcm9kUXVldWVUYWJsZSkpO1xyXG4gICAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbChcInRib2R5Om50aC1vZi10eXBlKDIpID4gdHJcIikpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZ2V0RXRhRnJvbVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgbjtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gdG9GaXhlZChldGEgLyB0b3RhbFRpbWUgKiAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuaXRlbSg2KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEZpZWxkICYmIGV0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVRleHRTcGFuKGAgJHtwZXJjZW50fSVgLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1F1ZXVlTG9hZC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLW5vdHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5Ob3RpZmljYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIGZvdW5kVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBTZWFyY2hlcnMuZm9yRWFjaChzZWFyY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaChuZXcgUmVnRXhwKHNlYXJjaFswXSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4udGV4dENvbnRlbnQgPSBzZWFyY2hbMV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLmNvbG9yID0gc2VhcmNoWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKHR5cGVTcGFuLCBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90VGV4dCA9IGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdFRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL0NoYW1iZXIgb2YgR2xvYmFsIENvbW1lcmNlLywgXCJDT0dDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VhcmNoWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcm9kdWNlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvYXQgeW91ciBiYXNlIC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvT25lIC8sIFwiMSBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gaGF2ZSBiZWVuLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gdW5pdFtzXT8gb2YvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC8gKFtBLXogLV0rKSBwcm9kdWNlZC8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdICE9IHVuZGVmaW5lZCAmJiBNYXRlcmlhbHNbbWF0Y2hlc1sxXV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZShuZXcgUmVnRXhwKG1hdGNoZXNbMV0pLCBNYXRlcmlhbHNbbWF0Y2hlc1sxXV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC95b3VyIChbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmRlciBmaWxsZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBDb21tb2RpdHkgRXhjaGFuZ2UvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC8oW0EteiAtXSspIG9yZGVyLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0gIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1ttYXRjaGVzWzFdXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2hlc1sxXSksIE1hdGVyaWFsc1ttYXRjaGVzWzFdXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhY2NlcHRlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHRoZS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGxvY2FsIG1hcmtldC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29udHJhY3RcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL1lvdXIgcGFydG5lciAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFycml2ZWQgYXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2l0cyBkZXN0aW5hdGlvbiAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvZ2NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW1iZXIgb2YgZ2xvYmFsIGNvbW1lcmNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RUZXh0ID0gbm90VGV4dC5yZXBsYWNlKC8gYSBuZXcgZWNvbm9taWMgcHJvZ3JhbS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gbm90VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IFNlYXJjaGVycyA9IFtcclxuICAgIFtcImNvbnRyYWN0XCIsIFwiY29udHJhY3RcIiwgXCJyZ2IoMjQ3LCAxNjYsIDApXCJdLFxyXG4gICAgW1wib3VyIGNvcnBvcmF0aW9uXCIsIFwiY29ycFwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJwcm9kdWNlZFwiLCBcInByb2R1Y2VkXCIsIFwiIzNmYTJkZVwiXSxcclxuICAgIFtcImFjY2VwdGVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcImV4cGlyZWRcIiwgXCJhZHZlcnRcIiwgXCIjNDQ5YzU3XCJdLFxyXG4gICAgW1widHJhZGVcIiwgXCJ0cmFkZVwiLCBcIiMwMDgwMDBcIl0sXHJcbiAgICBbXCJvcmRlciBmaWxsZWRcIiwgXCJvcmRlclwiLCBcIiNjYzI5MjlcIl0sXHJcbiAgICBbXCJhcnJpdmVkIGF0XCIsIFwiYXJyaXZhbFwiLCBcIiNiMzM2YjNcIl0sXHJcbiAgICBbXCJyZXBvcnRcIiwgXCJyZXBvcnRcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wiZWxlY3Rpb25cIiwgXCJlbGVjdGlvblwiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInJ1bGVzXCIsIFwicnVsZXNcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY29nY1wiLCBcIkNPR0NcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wiY2hhbWJlciBvZiBnbG9iYWwgY29tbWVyY2VcIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImV4cGVydFwiLCBcImV4cGVydFwiLCBcIiNmZjhhMDBcIl0sXHJcbiAgICBbXCJwb3B1bGF0aW9uIGluZnJhc3RydWN0dXJlIHByb2plY3RcIiwgXCJQT1BJXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImFwZXhcIiwgXCJ1cGRhdGVcIiwgXCIjMDBhYTc3XCJdLFxyXG4gICAgW1wid2FyZWhvdXNcIiwgXCJ3YXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wic2hpcGJ1aWxkaW5nIHByb2plY3RcIiwgXCJzaGlwXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInBsYW5ldGFyeSBwcm9qZWN0XCIsIFwiaW5mcmFcIiwgXCIjOGY1MmNjXCJdXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL05vdGlmaWNhdGlvbnMudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0aW9uU2Nyb2xsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zY3JvbGxcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RXaW5kb3cpKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHByb2QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbm5lckVsZW0gPSBwcm9kLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuUHJvZFBhbmVsKTtcclxuICAgICAgICAgICAgaW5uZXJFbGVtLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGlubmVyRWxlbS5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJFbGVtLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaW5uZXJFbGVtLmZpcnN0Q2hpbGQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcm9kLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTIwKSArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qcm9kdWN0aW9uU2Nyb2xsLnRzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwLCBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2NyZWVuVW5wYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4Y2x1c2lvbnMpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2NyZWVuc1wiO1xyXG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zID09IHVuZGVmaW5lZCA/IFtdIDogZXhjbHVzaW9ucztcclxuICAgICAgICB0aGlzLmV4Y2x1c2lvbnMgPSBbXTtcclxuICAgICAgICBleGNsdXNpb25zLmZvckVhY2goZXggPT4geyB0aGlzLmV4Y2x1c2lvbnMucHVzaChleC50b1VwcGVyQ2FzZSgpKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWxlY3Rvci5TY3JlZW5Db250cm9scyk7XHJcbiAgICAgICAgaWYgKG5hdmJhciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2YmFySXRlbUNsYXNzTGlzdCA9IG5hdmJhci5jaGlsZHJlblsyXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbmJpdE1haW5DbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG5iaXRVbmRlcmxpbmVDbGFzc0xpc3QgPSBuYXZiYXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBuYXZiYXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV07XHJcbiAgICAgICAgdmFyIGxpbmtzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShtZW51LmNoaWxkcmVuKS5mb3JFYWNoKChjbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY24uY2hpbGRyZW4ubGVuZ3RoID09IDQgJiYgIXRoaXMuZXhjbHVzaW9ucy5pbmNsdWRlcyhTdHJpbmcoY24uY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IFwiTmFtZVwiOiBjbi5jaGlsZHJlblsxXS5pbm5lckhUTUwsIFwiTGlua1wiOiBjbi5jaGlsZHJlblsxXS5ocmVmIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGFjZXJEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgc3BhY2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKHNwYWNlckRpdik7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYDxkaXYgY2xhc3M9XCIke25hdmJhckl0ZW1DbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke25iaXRNYWluQ2xhc3NMaXN0fVwiIHN0eWxlPVwiY29sb3I6IGluaGVyaXRcIiBocmVmPVwiJHtsaW5rLkxpbmt9XCI+JHtsaW5rLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke25iaXRVbmRlcmxpbmVDbGFzc0xpc3R9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FbGVtID0gY3JlYXRlTm9kZShidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25FbGVtLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NyZWVuVW5wYWNrLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIHNob3dCdWZmZXIsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25zKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXNpZGViYXJcIjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zID0gW1wiQlNcIiwgXCJDT05UXCIsIFwiQ09NXCIsIFwiQ09SUFwiLCBcIkNYTFwiLCBcIkZJTlwiLCBcIkZMVFwiLCBcIklOVlwiLCBcIk1BUFwiLCBcIlBST0RcIiwgXCJDTURTXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU2VsZWN0b3IuTGVmdFNpZGViYXIpO1xyXG4gICAgICAgIGlmIChzaWRlYmFyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25zLmZvckVhY2goZGVmYXVsdEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bMF0udG9VcHBlckNhc2UoKSA9PT0gZGVmYXVsdEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlYmFyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZmlyc3RDaGlsZCAhPSBudWxsICYmIChjaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50IHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT09IGRlZmF1bHRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkQ2hpbGQgPT4geyBjaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZWxlbWVudFwiKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b25JbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJ1dHRvbnMuaW5jbHVkZXMoYnV0dG9uSW5mb1swXS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0U3BhbihidXR0b25JbmZvWzBdLnRvVXBwZXJDYXNlKCksIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNpZGViYXJCdXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclRleHQpO1xyXG4gICAgICAgICAgICBzbGl2ZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2xpdmVyKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc2xpdmVyKTtcclxuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihidXR0b25JbmZvWzFdKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGNoYW5nZVZhbHVlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFBsYW5ldENvbW1hbmRzLCBQbGFuZXROYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQ29ycmVjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb21tYW5kXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQnVmZmVyQXJlYSkpLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJGaWVsZCA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkJ1ZmZlclRleHRGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyRmllbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZXh0ID0gYnVmZmVyRmllbGQudmFsdWUudG9VcHBlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYW5ldENvbW1hbmRzLmluY2x1ZGVzKGJ1ZmZlclRleHQuc3BsaXQoXCIgXCIpWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYW5ldE5hbWVzLmZvckVhY2gobmFtZVBhaXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyVGV4dC5pbmNsdWRlcyhcIiBcIiArIG5hbWVQYWlyWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVGV4dCA9IGJ1ZmZlclRleHQucmVwbGFjZShcIiBcIiArIG5hbWVQYWlyWzBdLCBcIiBcIiArIG5hbWVQYWlyWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJGaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbHVlKGJ1ZmZlckZpZWxkLCBidWZmZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQgPT0gbnVsbCB8fCBidWZmZXJGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckZpZWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXF1ZXN0U3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29tbWFuZENvcnJlY3Rlci50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuLCBzaG93QnVmZmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY2FsY1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2FsY1RhZ3MgPSBbXCJMTVwiLCBcIkNYXCIsIFwiWElUXCJdO1xyXG4gICAgICAgIGNhbGNUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnModGFnKTtcclxuICAgICAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdXBwZXItcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAoYnVmZmVyLmNoaWxkcmVuWzNdIHx8IGJ1ZmZlci5jaGlsZHJlblsyXSkuaW5zZXJ0QmVmb3JlKGNhbGNEaXYsIChidWZmZXIuY2hpbGRyZW5bM10gfHwgYnVmZmVyLmNoaWxkcmVuWzJdKS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIGNhbGNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oXCLwn5apXCIsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICBjYWxjRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHNob3dCdWZmZXIoXCJYSVQgQ0FMQ1VMQVRPUlwiKTsgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NhbGN1bGF0b3JCdXR0b24udHNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMsIGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJhY3REcmFmdHMge1xyXG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1jb250ZFwiO1xyXG4gICAgICAgIHRoaXMucHJpY2VzID0gcHJpY2VzO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhbnVwc1tpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgZ2V0QnVmZmVycyhcIkNPTlREXCIpLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbnRERm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkNvbmRpdGlvbkVkaXRvcik7XHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3JtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0Ym9keSA9IGZvcm0uZmlyc3RDaGlsZC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9IC0xO1xyXG4gICAgICAgICAgICB2YXIgcHJpY2UgPSAtMTtcclxuICAgICAgICAgICAgaWYgKHRib2R5LmNoaWxkcmVuLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQgPSBwYXJzZUludCgoKHRib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9RGVsaXZlcnkgb2YgKSguKikoPz0gdW5pdCkvKSB8fCBbXCJcIl0pWzBdLnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gKCh0Ym9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXRzIG9mICkoLiopKD89IHRvICkvKSB8fCAodGJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0IG9mICkoLiopKD89IHRvICkvKSB8fCBbXCJcIl0pWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VzW21hdGVyaWFsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0gYW1vdW50ICogdGhpcy5wcmljZXNbbWF0ZXJpYWxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRib2R5LmNoaWxkcmVuLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQgPSBwYXJzZUludCgoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9UHJvdmlzaW9uICkoLiopKD89IHVuaXQpLykgfHwgW1wiXCJdKVswXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9ICgodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0cyBvZiApKC4qKSg/PSBcXEAgKS8pIHx8ICh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXQgb2YgKSguKikoPz0gXFxAICkvKSB8fCBbXCJcIl0pWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VzW21hdGVyaWFsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0gYW1vdW50ICogdGhpcy5wcmljZXNbbWF0ZXJpYWxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRib2R5LmNoaWxkcmVuLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQgPSBwYXJzZUludCgoKHRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCIpLm1hdGNoKC8oPzw9UHJvdmlzaW9uIHNoaXBtZW50IG9mICkoLiopKD89IHVuaXQpLykgfHwgW1wiXCJdKVswXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9ICgodGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goLyg/PD11bml0cyBvZiApKC4qKSg/PSBcXEAgKS8pIHx8ICh0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCB8fCBcIlwiKS5tYXRjaCgvKD88PXVuaXQgb2YgKSguKikoPz0gXFxAICkvKSB8fCBbXCJcIl0pWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5jaGlsZHJlblsxXSA9PSBudWxsIHx8IGNvbmRpdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSA9PSBudWxsIHx8IGNvbmRpdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5maXJzdENoaWxkID09IG51bGwgfHwgIU1hdGVyaWFsc1ttYXRlcmlhbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKCgoY29uZGl0aW9uLmNoaWxkcmVuWzFdIHx8IGNvbmRpdGlvbikuY2hpbGRyZW5bMV0gfHwgY29uZGl0aW9uKS5maXJzdENoaWxkIHx8IGNvbmRpdGlvbikudGV4dENvbnRlbnQgPT09IFwiQ3VycmVuY3lcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpY2VEaXYgPSBjb25kaXRpb24ucXVlcnlTZWxlY3RvcihcImRpdltjbGFzc349J3h1eTJ3cEJDZHpnYzhHM3czQWxYVHc9PSddXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFByaWNlRGl2ID09IG51bGwgfHwgaW5wdXRQcmljZURpdi5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaWNlID0gcGFyc2VGbG9hdChpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0Vm9sID0gYW1vdW50ICogKE1hdGVyaWFsc1ttYXRlcmlhbF1bMV0gPiBNYXRlcmlhbHNbbWF0ZXJpYWxdWzJdID8gTWF0ZXJpYWxzW21hdGVyaWFsXVsxXSA6IE1hdGVyaWFsc1ttYXRlcmlhbF1bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUGVyID0gaW5wdXRQcmljZSAvIHdlaWdodFZvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gcHJpY2VQZXIudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgLyBcIiArIChNYXRlcmlhbHNbbWF0ZXJpYWxdWzFdID4gTWF0ZXJpYWxzW21hdGVyaWFsXVsyXSA/IFwidFwiIDogXCJtwrNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmljZURpdi5pbnNlcnRCZWZvcmUoY3JlYXRlVGV4dFNwYW4oZGlzcGxheSwgdGhpcy50YWcpLCBpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0gPT0gbnVsbCB8fCBjb25kaXRpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCgoKGNvbmRpdGlvbi5jaGlsZHJlblsxXSB8fCBjb25kaXRpb24pLmNoaWxkcmVuWzFdIHx8IGNvbmRpdGlvbikuZmlyc3RDaGlsZCB8fCBjb25kaXRpb24pLnRleHRDb250ZW50ID09PSBcIkN1cnJlbmN5XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpY2VEaXYgPSBjb25kaXRpb24ucXVlcnlTZWxlY3RvcihcImRpdltjbGFzc349J3h1eTJ3cEJDZHpnYzhHM3czQWxYVHc9PSddXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0UHJpY2VEaXYgPT0gbnVsbCB8fCBpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpY2UgPSBwYXJzZUZsb2F0KGlucHV0UHJpY2VEaXYuZmlyc3RDaGlsZC5maXJzdENoaWxkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUGVyID0gaW5wdXRQcmljZSAvIGFtb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwcmljZVBlci50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBlYVwiICsgKHByaWNlID09IC0xID8gXCJcIiA6IFwiIHwgXCIgKyBwcmljZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBUb3RhbCBDb3JwXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcmljZURpdi5pbnNlcnRCZWZvcmUoY3JlYXRlVGV4dFNwYW4oZGlzcGxheSwgdGhpcy50YWcpLCBpbnB1dFByaWNlRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29udHJhY3REcmFmdHMudHNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=