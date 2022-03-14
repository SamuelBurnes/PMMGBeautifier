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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["k"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["d"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["b"] = createFinancialTextBox;
/* harmony export (immutable) */ __webpack_exports__["g"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["e"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["f"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["j"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["c"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["h"] = genericCleanup;
/* harmony export (immutable) */ __webpack_exports__["l"] = toFixed;
/* unused harmony export getBuffer */
/* harmony export (immutable) */ __webpack_exports__["i"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(3);



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
    box.style.margin = "1px";
    box.style.minWidth = "100px";
    box.style.width = "calc(33% - 2px)";
    box.style.maxWidth = "150px";
    box.style.padding = "4px";
    box.style.backgroundColor = "#23282b";
    box.style.display = "inline-block";
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
        if (data[i]["PlanetName"] == planet) {
            return data[i];
        }
        else if (data[i]["PlanetNaturalId"] == planet) {
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
    ProdQueue: "div[class~='o1YcYrDkxt9IvN4ApCEjIw==']"
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
/* harmony export (immutable) */ __webpack_exports__["d"] = RatingColors;

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
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Style;

const WithStyles = (...style) => {
    return style.reduce(((previousValue, currentValue) => previousValue.concat(currentValue)));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = WithStyles;

const TextColors = {
    Failure: "#d9534f",
    Success: "#5cb85c",
    Standard: "#bbbbbb"
};
/* harmony export (immutable) */ __webpack_exports__["c"] = TextColors;

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



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlightETAs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrderETAs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FleetETAs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostLM__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShippingAds__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QueueLoad__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__XITHandler__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Notifications__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__BackgroundRunner__ = __webpack_require__(18);












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
    if (result["AHIBeautifier_Data"] == undefined) {
        result = { "AHIBeautifier_Data": [undefined, undefined, undefined] };
    }
    var prices = {};
    Object(__WEBPACK_IMPORTED_MODULE_11__BackgroundRunner__["b" /* getPrices */])(prices, result["AHIBeautifier_Data"][2]);
    var burn = [];
    Object(__WEBPACK_IMPORTED_MODULE_11__BackgroundRunner__["a" /* getBurn */])(burn, result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]);
    const runner = new __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__["a" /* LocalMarketAds */](),
        new __WEBPACK_IMPORTED_MODULE_3__OrderETAs__["a" /* OrderETAs */](),
        new __WEBPACK_IMPORTED_MODULE_0__FlightETAs__["a" /* FlightETAs */](),
        new __WEBPACK_IMPORTED_MODULE_7__ShippingAds__["a" /* ShippingAds */](),
        new __WEBPACK_IMPORTED_MODULE_6__PostLM__["a" /* PostLM */](prices),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](burn),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_9__XITHandler__["a" /* XITHandler */](result["AHIBeautifier_Data"][1], result["AHIBeautifier_Data"][2], burn),
        new __WEBPACK_IMPORTED_MODULE_10__Notifications__["a" /* Notifications */]()
    ]);
    (function () {
        runner.loop();
    })();
}
function onError(err) {
    console.log(err);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FlightETAs {
    constructor() {
        this.tag = "pb-sfc-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlightETAs;



/***/ }),
/* 6 */
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* genericCleanup */])(this.tag);
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
                    element.children[0].children[0].style.color = __WEBPACK_IMPORTED_MODULE_2__GameProperties__["d" /* RatingColors */][element.children[0].children[0].textContent || "P"];
                    const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["l" /* toFixed */])(totalCents / count / 100, 2);
                    priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
                }
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalMarketAds;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(8);

class ModuleRunner {
    constructor(modules) {
        this.modules = modules.map(m => this.moduleToME(m));
        this.sidebar = new __WEBPACK_IMPORTED_MODULE_0__Sidebar__["a" /* Sidebar */](this.modules);
        this.modules.push(this.moduleToME(this.sidebar));
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class Sidebar {
    constructor(list) {
        this.tag = "pb-sidebar";
        this.list = list;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        const area = document.createElement('div');
        area.classList.add(this.tag);
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode("PMMG Beautifier"));
        h3.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].SidebarSectionHead);
        area.appendChild(h3);
        const content = document.createElement("div");
        content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].SidebarSectionContent);
        area.appendChild(content);
        this.list.map(mp => {
            const line = document.createElement('div');
            line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].FontsRegular));
            content.appendChild(line);
            line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* createTextSpan */])(mp.name));
            const right = document.createElement("span");
            right.style.flexGrow = "1";
            right.style.textAlign = "right";
            line.appendChild(right);
            const time = Object(__WEBPACK_IMPORTED_MODULE_2__util__["l" /* toFixed */])((mp.cleanupTime + mp.runTime) / mp.count, 2);
            right.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* createTextSpan */])(`${time}ms `));
            const toggle = this.makeToggleButton("On", "Off", () => {
                mp.enabled = !mp.enabled;
            }, mp.enabled);
            right.appendChild(toggle);
            const cleanup = this.makePushButton("x", () => mp.module.cleanup());
            right.appendChild(cleanup);
        });
        Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].Sidebar)).forEach(sidebar => {
            sidebar.appendChild(area);
        });
    }
    makePushButton(text, f, style = __WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].ButtonPrimary) {
        const button = document.createElement('button');
        button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].Button);
        button.classList.add(...style);
        button.classList.add(this.tag);
        button.onclick = f;
        button.innerText = text;
        return button;
    }
    makeToggleButton(on, off, f, state = false) {
        const toggle = document.createElement('button');
        toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].Button);
        const getState = !!toggle.getAttribute('data-state') || state;
        const setState = s => {
            toggle.setAttribute('data-state', String(s));
        };
        const setLook = (s) => {
            toggle.innerText = s ? on : off;
            if (s) {
                toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].ButtonPrimary);
                toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].ButtonSuccess);
            }
            else {
                toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].ButtonSuccess);
                toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* Style */].ButtonPrimary);
            }
        };
        setState(state);
        setLook(state);
        toggle.onclick = () => {
            const newState = !getState;
            setLook(newState);
            setState(newState);
            f();
        };
        return toggle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sidebar;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class OrderETAs {
    constructor() {
        this.tag = "pb-order-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* genericCleanup */])(this.tag);
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
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* parseDuration */])(prodItem.children[0].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            prodItem.children[0].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* convertDurationToETA */])(duration + timeElapsed)})`, this.tag));
                        }
                        else {
                            duration = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* parseDuration */])(prodItem.children[1].children[1].children[0].textContent);
                            lineTimes.push(duration);
                            prodItem.children[1].children[1].appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* createTextSpan */])(` (${Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* convertDurationToETA */])(duration)})`, this.tag));
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateBurns */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);


class ConsumableTimers {
    constructor(burn) {
        this.tag = "pb-consumable-timers";
        this.burn = burn;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        if (this.burn.length == 0) {
            return;
        }
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* getBuffers */])("WF");
        if (buffers == undefined || buffers == null) {
            return;
        }
        ;
        buffers.forEach(buffer => {
            generateBurns(buffer, this.burn);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsumableTimers;

function generateBurns(buffer, burn) {
    const nameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].WorkforceConsumptionTable);
    if (nameElem == null || nameElem == undefined || nameElem.textContent == null || nameElem.textContent == undefined)
        return;
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* parseBaseName */])(nameElem.textContent);
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
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* findCorrespondingPlanet */])(name, burn);
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
            var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* findInventoryAmount */])(targetRow.children[0].textContent, planetBurn);
            var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* findBurnAmount */])(targetRow.children[0].textContent, planetBurn);
            var daysLeft;
            if (burnAmount != 0) {
                daysLeft = Math.floor(inventoryAmount / burnAmount);
                if (daysLeft <= 3) {
                    outputData.style.backgroundColor = "#5a3130";
                    outputData.style.color = "#c59c9b";
                }
                else if (daysLeft <= 6) {
                    outputData.style.backgroundColor = "#836e24";
                    outputData.style.color = "#f6df94";
                }
                else {
                    outputData.style.backgroundColor = "#345034";
                    outputData.style.color = "#9fbb9f";
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
            outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(daysLeft));
            firstChild = totalData.firstChild;
            if (firstChild != null) {
                totalData.removeChild(firstChild);
            }
            totalData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(burnAmount == 0 ? "" : burnAmount.toFixed(2)));
        }
    });
    return;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FleetETAs {
    constructor() {
        this.tag = "pb-flt-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* convertDurationToETA */])(Object(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* parseDuration */])(etaData.textContent));
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FleetETAs;



/***/ }),
/* 12 */
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
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMPostForm)).forEach(form => {
            const type = Array.from(document.getElementsByClassName("C-ECb-ove1tla6qsiV43ew== ivG24qtQ92kbysLTNeWJvw=="));
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
            var displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* createTextSpan */])("--", this.tag);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class ShippingAds {
    constructor() {
        this.tag = "pb-shipping-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdText);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = element.textContent;
            const matches = text && text.match(/(?:SHIPPING)\s([\d.]+)t\s\/\s([\d.]+)m³\s@\s([\d,.]+)\s[A-Z]+\sfrom/);
            if (matches && matches.length > 3) {
                const totalCost = matches[3];
                const tonnage = parseFloat(matches[1]);
                const size = parseFloat(matches[2]);
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
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["l" /* toFixed */])(totalCents / count / 100, 2);
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShippingAds;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class QueueLoad {
    constructor() {
        this.tag = "pb-queue-load";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* parseDuration */])(etaSpan.textContent);
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
                    const percent = Object(__WEBPACK_IMPORTED_MODULE_1__util__["l" /* toFixed */])(eta / totalTime * 100, 2);
                    const textField = row.querySelectorAll("td").item(6);
                    if (textField && eta > 0) {
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* createTextSpan */])(` ${percent}%`, this.tag);
                        textField.appendChild(span);
                    }
                });
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QueueLoad;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XITFunctions__ = __webpack_require__(16);



class XITHandler {
    constructor(apikey, webappID, burn) {
        this.tag = "pb-xit";
        this.apikey = apikey;
        this.webappID = webappID;
        this.burn = burn;
    }
    cleanup() {
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* getBuffers */])("XIT");
        if (buffers == undefined)
            return;
        var burn = this.burn;
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
            var parameters = parametersRaw.slice(4).split("_");
            if (parameters == undefined || parameters == null)
                return;
            if (tile.children[1] != undefined && tile.children[1].id == "pmmg-reload") {
                __WEBPACK_IMPORTED_MODULE_2__XITFunctions__["b" /* XITPreFunctions */][parameters[0].toUpperCase()](tile.children[1], parameters, this.apikey, this.webappID, burn);
                return;
            }
            tile.style.backgroundColor = "#222222";
            tile.style.paddingTop = "4px";
            tile.style.display = "flex";
            tile.style.flexFlow = "column";
            const topDiv = document.createElement("div");
            topDiv.style.display = "block";
            topDiv.style.width = "100%";
            topDiv.classList.add(this.tag);
            tile.appendChild(topDiv);
            const refreshButton = document.createElement("button");
            refreshButton.textContent = "⟳";
            refreshButton.style.backgroundColor = "#f7a600";
            refreshButton.style.color = "white";
            refreshButton.style.borderWidth = "0px";
            refreshButton.style.padding = "0px 8px";
            refreshButton.style.display = "block";
            refreshButton.style.fontWeight = "bold";
            refreshButton.style.fontSize = "11px";
            refreshButton.style.cursor = "pointer";
            refreshButton.style.margin = "4px 8px";
            refreshButton.addEventListener("mouseenter", function () { this.style.color = "#1e1e1e"; });
            refreshButton.addEventListener("mouseleave", function () { this.style.color = "#eeeeee"; });
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
                contentDiv.id = "pmmg-load-success";
                refreshButton.addEventListener("click", function () { preFunc(contentDiv, parameters, apikey, webappID, burn); });
                preFunc(contentDiv, parameters, this.apikey, this.webappID, burn);
            }
            return;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = XITHandler;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chat_pre */
/* unused harmony export Fin_pre */
/* unused harmony export EnhancedBurn_pre */
/* unused harmony export SheetTable_pre */
/* unused harmony export PRuN_pre */
/* unused harmony export Prosperity_pre */
/* unused harmony export Sheets_pre */
/* unused harmony export Discord_pre */
/* unused harmony export FIOInv_pre */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameProperties__ = __webpack_require__(2);



const XITPreFunctions = {
    "INV": FIOInv_pre,
    "DISCORD": Discord_pre,
    "SHEETS": Sheets_pre,
    "PROSPERITY": Prosperity_pre,
    "PRUN": PRuN_pre,
    "SHEETTABLE": SheetTable_pre,
    "FIN": Fin_pre,
    "CHAT": Chat_pre,
    "BURN": EnhancedBurn_pre
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
    "BURN": "ENHANCED BURN"
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
    titleDiv.style.paddingLeft = "4px";
    titleDiv.style.color = "#3fa2de";
    chatDiv.appendChild(titleDiv);
    chatData.forEach(chat => {
        const chatLine = document.createElement("div");
        chatLine.style.width = "100%";
        chatLine.style.display = "grid";
        chatLine.style.gridTemplateColumns = "minmax(8em, 1fr) minmax(8em, 4fr) minmax(8em, 15fr)";
        chatLine.style.gridColumnGap = "1px";
        chatLine.style.fontSize = "11px";
        chatLine.style.lineHeight = "1.1";
        chatDiv.appendChild(chatLine);
        const timeDateDiv = document.createElement("div");
        const dateDiv = document.createElement("div");
        timeDateDiv.appendChild(dateDiv);
        dateDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleDateString(undefined, { month: "2-digit", day: "2-digit" });
        dateDiv.style.color = "#444444";
        dateDiv.style.display = "inline-block";
        dateDiv.style.padding = "2px 5px";
        dateDiv.style.paddingRight = "0px";
        dateDiv.style.textAlign = "left";
        dateDiv.style.whiteSpace = "nowrap";
        dateDiv.style.overflow = "hidden";
        const timeDiv = document.createElement("div");
        timeDateDiv.appendChild(timeDiv);
        timeDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        timeDiv.style.display = "inline-block";
        timeDiv.style.padding = "2px 5px";
        timeDiv.style.paddingLeft = "2px";
        timeDiv.style.textAlign = "left";
        timeDiv.style.whiteSpace = "nowrap";
        timeDiv.style.overflow = "hidden";
        timeDiv.style.color = "#999999";
        chatLine.appendChild(timeDateDiv);
        const nameDiv = document.createElement("div");
        chatLine.appendChild(nameDiv);
        nameDiv.style.display = "inline-block";
        nameDiv.style.textAlign = "right";
        nameDiv.style.color = "#999999";
        nameDiv.style.textOverflow = "ellipsis";
        nameDiv.style.padding = "2px 5px";
        nameDiv.style.borderRight = "1px solid #999999";
        const messageDiv = document.createElement("div");
        chatLine.appendChild(messageDiv);
        messageDiv.style.display = "inline-block";
        messageDiv.style.textAlign = "left";
        messageDiv.style.color = "#bbbbbb";
        messageDiv.style.wordBreak = "break-word";
        messageDiv.style.padding = "2px 5px";
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
    tileHeader.style.display = "block";
    tileHeader.style.fontSize = "12px";
    tileHeader.style.marginBottom = "0px";
    tileHeader.style.padding = "6px 4px 2px";
    tileHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
    tile.appendChild(tileHeader);
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(Math.round(data[0][1]).toLocaleString(), "Fixed Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(Math.round(data[0][2]).toLocaleString(), "Current Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(Math.round(data[0][4]).toLocaleString(), "Liquid Assets", __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(Math.round(data[0][7]).toLocaleString(), "Equity", __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Standard));
    tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(Math.round(data[0][5]).toLocaleString(), "Liabilities", __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Standard));
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
        const color = profit > 0 ? __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Success : __WEBPACK_IMPORTED_MODULE_1__Style__["c" /* TextColors */].Failure;
        tile.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createFinancialTextBox */])(profit.toLocaleString(), "Profit", color));
    }
    const breakdownHeader = document.createElement("h2");
    breakdownHeader.title = "Financial Breakdown";
    breakdownHeader.textContent = "Inventory Breakdown";
    breakdownHeader.style.display = "block";
    breakdownHeader.style.fontSize = "12px";
    breakdownHeader.style.marginBottom = "0px";
    breakdownHeader.style.padding = "6px 4px 2px";
    breakdownHeader.style.backgroundColor = "rgba(63, 162, 222, 0.15)";
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
        firstTableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(rowData[0]));
        rowData.shift();
        for (let point of rowData) {
            const tableElem = document.createElement("td");
            row.appendChild(tableElem);
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(point.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
        }
    }
    tile.appendChild(table);
}
function financialSort(a, b) {
    return a[3] < b[3] ? 1 : -1;
}
function EnhancedBurn_pre(tile, parameters, apikey, webappID, burn) {
    clearChildren(tile);
    if (parameters.length < 2) {
        tile.textContent = "Error! Not Enough Parameters!";
        return [apikey, webappID];
    }
    if (burn.length == 0) {
        tile.textContent = "Loading Burn Data...";
        tile.id = "pmmg-reload";
        return;
    }
    tile.id = "pmmg-load-success";
    const planetBurn = Object(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* findCorrespondingPlanet */])(parameters[1], burn);
    if (planetBurn == undefined) {
        tile.textContent = "Error! No Matching Planet!";
        return;
    }
    const table = document.createElement("table");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    head.appendChild(headRow);
    table.appendChild(head);
    for (let title of ["Needs", "Usage", "Inv", "Burn"]) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headRow.appendChild(header);
    }
    headRow.firstChild.colSpan = 2;
    const body = document.createElement("tbody");
    table.appendChild(body);
    var data = {};
    for (let cons of planetBurn["WorkforceConsumption"]) {
        if (data[cons["MaterialTicker"]] == undefined) {
            data[cons["MaterialTicker"]] = cons["DailyAmount"];
            continue;
        }
        data[cons["MaterialTicker"]] += cons["DailyAmount"];
    }
    for (let cons of planetBurn["OrderConsumption"]) {
        if (data[cons["MaterialTicker"]] == undefined) {
            data[cons["MaterialTicker"]] = cons["DailyAmount"];
            continue;
        }
        data[cons["MaterialTicker"]] += cons["DailyAmount"];
    }
    for (let cons of planetBurn["OrderProduction"]) {
        if (data[cons["MaterialTicker"]] == undefined) {
            data[cons["MaterialTicker"]] = cons["DailyAmount"];
            data[cons["MaterialTicker"]] *= -1;
            continue;
        }
        data[cons["MaterialTicker"]] -= cons["DailyAmount"];
    }
    var burnMaterials = Object.keys(data);
    burnMaterials.sort(CategorySort);
    for (let material of burnMaterials) {
        if (data[material] <= 0) {
            continue;
        }
        const row = document.createElement("tr");
        body.appendChild(row);
        const materialColumn = document.createElement("td");
        materialColumn.style.width = "32px";
        materialColumn.style.paddingRight = "0px";
        materialColumn.style.paddingLeft = "0px";
        const matElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createMaterialElement */])(material, "prun-remove-js", "none", false, true);
        if (matElem) {
            materialColumn.appendChild(matElem);
        }
        row.appendChild(materialColumn);
        const nameSpan = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(__WEBPACK_IMPORTED_MODULE_2__GameProperties__["b" /* MaterialNames */][material][0]);
        nameSpan.style.fontWeight = "bold";
        const nameColumn = document.createElement("td");
        nameColumn.appendChild(nameSpan);
        row.appendChild(nameColumn);
        const consColumn = document.createElement("td");
        consColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(data[material].toLocaleString(undefined, { maximumFractionDigits: 1 }) + " / Day"));
        row.appendChild(consColumn);
        const invColumn = document.createElement("td");
        var invAmount = 0;
        for (let inv of planetBurn["Inventory"]) {
            if (inv["MaterialTicker"] == material) {
                invAmount = inv["MaterialAmount"];
                break;
            }
        }
        invColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(invAmount.toLocaleString(undefined)));
        row.appendChild(invColumn);
        const burn = invAmount == 0 ? 0 : invAmount / data[material];
        const burnColumn = document.createElement("td");
        burnColumn.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(Math.floor(burn).toLocaleString(undefined, { maximumFractionDigits: 0 }) + " Days"));
        if (burn <= 3) {
            burnColumn.style.backgroundColor = "#5a3130";
            burnColumn.style.color = "#c59c9b";
        }
        else if (burn <= 6) {
            burnColumn.style.backgroundColor = "#836e24";
            burnColumn.style.color = "#f6df94";
        }
        else {
            burnColumn.style.backgroundColor = "#345034";
            burnColumn.style.color = "#9fbb9f";
        }
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
            tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(point));
        }
    }
    tile.appendChild(table);
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
function Prosperity_pre(tile) {
    clearChildren(tile);
    const prosp = document.createElement("iframe");
    prosp.src = "https://prosperity-prun.netlify.app/";
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
    sheet.width = "100%";
    sheet.height = "100%";
    sheet.style.borderWidth = "0";
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
    if (parameters.length < 3) {
        tile.textContent = "Error! Not Enough Parameters!";
        return;
    }
    for (var i = 3; i < parameters.length; i++) {
        parameters[2] += " " + parameters[i];
    }
    XITWebRequest(tile, parameters, FIOInv_post, "https://rest.fnar.net/storage/" + parameters[1] + "/" + parameters[2], "GET", ["Authorization", apikey], undefined);
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
    header.style.padding = "2px 8px";
    header.style.display = "inline";
    header.style.color = "#3fa2de";
    header.id = "header";
    header.classList.add(tag);
    tile.appendChild(header);
    const body = document.createElement("div");
    tile.appendChild(body);
    body.classList.add(tag);
    body.style.display = "flex";
    body.style.flexDirection = "row";
    body.style.flexWrap = "wrap";
    body.style.justifyContent = "space-around";
    body.style.alignItems = "stretch";
    body.style.marginBottom = "23px";
    body.style.padding = "5px 8px";
    body.id = "body";
    header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(parameters[2], tag));
    header.appendChild(document.createElement("br"));
    const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(parameters[1], tag);
    userElem.style.paddingLeft = "8px";
    header.appendChild(userElem);
    const volumeLine = document.createElement("div");
    volumeLine.id = "volume-line";
    volumeLine.style.padding = "2px 8px";
    volumeLine.style.color = "#999999";
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])("Volume ", tag));
    const volumeBar = document.createElement("progress");
    volumeBar.id = "volume-bar";
    volumeBar.classList.add(tag);
    volumeBar.style.width = "30px";
    volumeBar.style.height = "9px";
    volumeBar.style.border = "1px solid #999";
    volumeBar.style.margin = "1px 2px";
    volumeBar.max = 1;
    volumeBar.value = volumeUsed / volumeTotal;
    volumeLine.appendChild(volumeBar);
    volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(volumeUsed.toFixed(2) + " / " + volumeTotal.toFixed(0) + " m³", tag));
    header.appendChild(volumeLine);
    const weightLine = document.createElement("div");
    weightLine.id = "weight-line";
    weightLine.style.padding = "2px 8px";
    weightLine.style.color = "#999999";
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])("Weight ", tag));
    const weightBar = document.createElement("progress");
    weightBar.id = "weight-bar";
    weightBar.classList.add(tag);
    weightBar.style.width = "30px";
    weightBar.style.height = "9px";
    weightBar.style.border = "1px solid #999";
    weightBar.style.margin = "1px 2px";
    weightBar.max = 1;
    weightBar.value = weightUsed / weightTotal;
    weightLine.appendChild(weightBar);
    weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* createTextSpan */])(weightUsed.toFixed(2) + " / " + weightTotal.toFixed(0) + " t", tag));
    header.appendChild(weightLine);
    inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
    for (let item of inventoryData["StorageItems"]) {
        const mat = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true);
        if (mat != null) {
            body.appendChild(mat);
        }
    }
    return;
}
function fioMatsAlphabetSort(a, b) {
    if (a["MaterialCategory"] == null || b["MaterialCategory"] == null) {
        return 0;
    }
    return a["MaterialCategory"].localeCompare(b["MaterialCategory"]);
}


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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* genericCleanup */])(this.tag);
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
            Searchers.forEach(search => {
                const match = text.match(new RegExp(search[0]));
                if (match != null) {
                    const typeSpan = document.createElement("div");
                    typeSpan.textContent = search[1].toUpperCase();
                    typeSpan.classList.add(this.tag);
                    typeSpan.style.display = "inline-block";
                    typeSpan.style.color = search[2];
                    typeSpan.style.minWidth = "62px";
                    typeSpan.style.maxWidth = "62px";
                    element.children[1].insertBefore(typeSpan, element.children[1].children[0]);
                    var matches;
                    var notText = element.children[1].children[1].textContent;
                    if (notText == null) {
                        return;
                    }
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
                            break;
                        case "trade":
                            matches = notText.match(/your ([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]][0]);
                            }
                        case "order filled":
                            notText = notText.replace(/ Commodity Exchange/, "");
                            matches = notText.match(/([A-z -]+) order/);
                            if (matches != null && matches[1] != undefined && __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]] != undefined) {
                                notText = notText.replace(new RegExp(matches[1]), __WEBPACK_IMPORTED_MODULE_2__GameProperties__["c" /* Materials */][matches[1]][0]);
                            }
                            break;
                        case "accepted":
                            notText = notText.replace(/ the/, "");
                            notText = notText.replace(/ local market/, "");
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
    ["produced", "produced", "#3fa2de"],
    ["accepted", "advert", "#449c57"],
    ["expired", "advert", "#449c57"],
    ["trade", "trade", "#008000"],
    ["order filled", "order", "#cc2929"],
    ["arrived at it", "arrival", "#b336b3"],
    ["report", "report", "#00aa77"],
    ["program", "COGC", "#8f52cc"],
    ["election", "election", "#8f52cc"],
    ["strike", "COGC", "#8f52cc"],
    ["governor", "governor", "#8f52cc"],
    ["rules", "rules", "#8f52cc"],
    ["upkeep phase", "COGC", "#8f52cc"],
    ["expert", "expert", "#ff8a00"]
];


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPrices;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBurn;
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
    if (apikey == undefined || apikey == null || username == undefined || username == null) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.log("FIO Burn Timeout");
        getBurn(burn, username, apikey);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            try {
                console.log("Retreived Burn from FIO");
                var burnData = JSON.parse(xhr.responseText);
                burnData.forEach(data => {
                    burn.push(data);
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
    xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + username, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk0ZTZkMDdhOGRhYzQxMWM3YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZsaWdodEVUQXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsTWFya2V0QWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09yZGVyRVRBcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3VtYWJsZVRpbWVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRmxlZXRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb3N0TE0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoaXBwaW5nQWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9RdWV1ZUxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNwc0JLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOTRlNmQwN2E4ZGFjNDExYzdiZSIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5Q29sb3JzIH0gZnJvbSBcIi4vU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlZFNlY29uZHMpIHtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94KHByaW1hcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCBwcmltYXJ5VGV4dENvbG9yLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgYm94LnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICBib3guc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICBib3guc3R5bGUud2lkdGggPSBcImNhbGMoMzMlIC0gMnB4KVwiO1xyXG4gICAgYm94LnN0eWxlLm1heFdpZHRoID0gXCIxNTBweFwiO1xyXG4gICAgYm94LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xyXG4gICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzIzMjgyYlwiO1xyXG4gICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XHJcbiAgICBwcmltYXJ5VGV4dFNwYW4udGV4dENvbnRlbnQgPSBwcmltYXJ5VGV4dDtcclxuICAgIGJveC5hcHBlbmRDaGlsZChwcmltYXJ5VGV4dFNwYW4pO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnRleHRDb250ZW50ID0gc2Vjb25kYXJ5VGV4dDtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMnB4XCI7XHJcbiAgICBzZWNvbmRhcnlUZXh0RGl2LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gPT0gcGxhbmV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdID09IHBsYW5ldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCJAXCIpWzFdO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiIEJhc2VcIilbMF07XHJcbiAgICAgICAgdmFyIGh5cGhlbnMgPSB0ZXh0LnNwbGl0KFwiIC0gXCIpO1xyXG4gICAgICAgIHRleHQgPSBoeXBoZW5zW2h5cGhlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGVuZGluZyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChlbmRpbmdbMV0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRpbmdbMV0gKyBlbmRpbmdbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIiwgYW1vdW50ID0gXCJub25lXCIsIHRleHQgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKE1hdGVyaWFsTmFtZXNbdGlja2VyXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSBNYXRlcmlhbE5hbWVzW3RpY2tlcl1bMF07XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IE1hdGVyaWFsTmFtZXNbdGlja2VyXVsxXTtcclxuICAgIGNvbnN0IHRvdGFsUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcIlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmc9PVwiKTtcclxuICAgIGlmIChzbWFsbCkge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1hdGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJFN09MVUNoWUNleE1VZ09vbEtZak9RPT1cIik7XHJcbiAgICBtYXRlcmlhbC50aXRsZSA9IG5hbWU7XHJcbiAgICBpZiAoc21hbGwpIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxMC41NnB4XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgICAgICBtYXRlcmlhbC5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsLnN0eWxlLmZvbnRTaXplID0gXCIxNS44NHB4XCI7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3R5bGUubWFyZ2luID0gXCIycHggYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgbWF0ZXJpYWwuc3R5bGUuYmFja2dyb3VuZCA9IENhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XVswXTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmNvbG9yID0gQ2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldWzFdO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YkRpdi5jbGFzc0xpc3QuYWRkKFwibmxRaXJwU2tkTEgwYTYrQzRsaGR1QT09XCIpO1xyXG4gICAgY29uc3QgbWF0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbWF0VGV4dC5jbGFzc0xpc3QuYWRkKFwicmpwWUwxaTljWm1mNDdmTTlxV3laUT09XCIpO1xyXG4gICAgbWF0VGV4dC50ZXh0Q29udGVudCA9IHRpY2tlcjtcclxuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChtYXRUZXh0KTtcclxuICAgIG1hdGVyaWFsLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbiAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobWF0ZXJpYWwpO1xyXG4gICAgaWYgKGFtb3VudCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJHMzdmVUpQd01vSjZmS0hER2VnKy13PT1cIik7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcImJIamxEUEI4NFV6MHlVbnZIYS1ZNUE9PVwiKTtcclxuICAgICAgICBudW1iZXJTdWJEaXYuY2xhc3NMaXN0LmFkZChcIl82T0s2c1hOaklJaHEzTkREOUVMVkd3PT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJnbDczdm5wNWpvK1ZhZXBEUm9jdW5BPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LnRleHRDb250ZW50ID0gYW1vdW50O1xyXG4gICAgICAgIG51bWJlckRpdi5hcHBlbmRDaGlsZChudW1iZXJTdWJEaXYpO1xyXG4gICAgICAgIHRvdGFsUGljdHVyZS5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUGljdHVyZTtcclxuICAgIH1cclxuICAgIHZhciBzdXBlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VwZXJFbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZCh0b3RhbFBpY3R1cmUpO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUud2lkdGggPSBcIjY0cHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5tYXJnaW4gPSBcIjNweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcImF1dG9cIjtcclxuICAgIGlmICh0ZXh0ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiMnB4XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uID0gMikge1xyXG4gICAgY29uc3QgcG93ZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwb3dlcikgLyBwb3dlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVyKGJ1ZmZlckNvZGUpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShgLy9kaXZbQGNsYXNzPScke1NlbGVjdG9yLkJ1ZmZlckhlYWRlcn0nXVtzdGFydHMtd2l0aCguLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWZmZXJzKGJ1ZmZlckNvZGUpIHtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgoLiwgJyR7YnVmZmVyQ29kZX0nKV0vLi4vLi5gLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcclxuICAgIHZhciBub2RlO1xyXG4gICAgd2hpbGUgKG5vZGUgPSBub2Rlcy5pdGVyYXRlTmV4dCgpKSB7XHJcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlYUGF0aCh4cGF0aCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoeHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nU3hNb25haWNQcnJTNEpZVHZlKy1SQT09J11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nWlNjRzlBamNUUmdKK01RT1hMdUNXQT09J10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJKS3RUNHJySUMwR2tQRUFuWmxZY1NnPT1cIixcclxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nXzFRQWhwRFVoZCs3SFdKeHBIdG9XSlE9PSddXCIsXHJcbiAgICBQcm9kUXVldWVIZWFkZXI6IFwibGdFMSsrNzMrNm9ZeFZTYU90aWstZz09XCIsXHJcbiAgICBCdWZmZXJIZWFkZXI6ICdlMlBLUktaVVc2Szl4TEtOQVA1NmNnPT0gWXR1NmZvNmpMYms0M1lxTzB5V2tRQT09JyxcclxuICAgIFNpZGViYXI6IFwiZGl2I1RPVVJfVEFSR0VUX1NJREVCQVJfUklHSFRcIixcclxuICAgIExNUG9zdEZvcm06IFwiYXJ0aWNsZVtjbGFzc349J3p3KzB6UUJadmFsYTd5R3ArQWQzRHc9PSddID4gZGl2ID4gZGl2ID4gZm9ybVwiLFxyXG4gICAgV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2Lk4zMkdMOENKQk93My1yTngwUEJaa1FcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdi5fNEtzaTA5VlhoZnZrR2d0UGJoQ0V5Z1xcXFw9XFxcXD0uUlV1dzExYjYzMWVYclFZcC1JZDJ3Z1xcXFw9XFxcXD1cIixcclxuICAgIFhJVFRpbGU6IFwiI3VuZGVmaW5lZCA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIFhJVFRpbGVGbG9hdDogXCIjVE9VUl9UQVJHRVRfRU1QVFlfVElMRSA+IGRpdiA+IGRpdi56SnJJekV2V003SzZvUDBqclJScGJRXFxcXD1cXFxcPS5mVFQ1MmlcXFxcKzFvRmF1eEhPalZmR1R3d1xcXFw9XFxcXD0uTzdSWDR6WEw0Z3pITG9Pd1RWYnJYd1xcXFw9XFxcXD0gPiBkaXYgPiBkaXYgPiBkaXYuZ2VjSTV1R0JsdXZqUDVHQ1JrM2RIQVxcXFw9XFxcXD0gPiBkaXZcIixcclxuICAgIEJ1ZmZlclRpdGxlOiBcIl80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnPT0gUlV1dzExYjYzMWVYclFZcC1JZDJ3Zz09XCIsXHJcbiAgICBOb3RpZmljYXRpb246IFwiZGl2W2NsYXNzfj0nXzZpVE1KWit4bS1QYkcrbldvUHFoN2c9PSddXCIsXHJcbiAgICBQcm9kUXVldWU6IFwiZGl2W2NsYXNzfj0nbzFZY1lyRGt4dDlJdk40QXBDRWpJdz09J11cIlxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TZWxlY3Rvci50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQ3VycmVuY3lTeW1ib2xzID0ge1xyXG4gICAgXCJDSVNcIjogXCLigqFcIixcclxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXHJcbiAgICBcIk5DQ1wiOiBcIuKCplwiLFxyXG4gICAgXCJJQ0FcIjogXCLHglwiLFxyXG4gICAgXCJFQ0RcIjogXCLigqxcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IFJhdGluZ0NvbG9ycyA9IHtcclxuICAgIFwiUFwiOiBcIiMxYjZiOWNcIixcclxuICAgIFwiVVwiOiBcIiM4YjIxMWVcIixcclxuICAgIFwiRlwiOiBcIiNlMjZjMzdcIixcclxuICAgIFwiRVwiOiBcIiNlNzc4MmJcIixcclxuICAgIFwiRFwiOiBcIiNlODdkMjhcIixcclxuICAgIFwiQ1wiOiBcIiNlZDg5MWNcIixcclxuICAgIFwiQlwiOiBcIiNmMTk1MTBcIixcclxuICAgIFwiQVwiOiBcIiNmNmEyMDRcIlxyXG59O1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxOYW1lcyA9IHtcclxuICAgIFwiQUFSXCI6IFtcIkFudGVubmEgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkFCSFwiOiBbXCJBZHZhbmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBQ1NcIjogW1wiQXV0b21hdGVkIENvb2xpbmcgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJBREVcIjogW1wiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJBRFJcIjogW1wiQXV0by1Eb2NcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQURTXCI6IFtcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIkFFRlwiOiBbXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBRU5cIjogW1wiQWR2YW5jZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZQXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQUZSXCI6IFtcIkFkdmFuY2VkIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJBR1NcIjogW1wiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQUhQXCI6IFtcIkFkdmFuY2VkIEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJBSVJcIjogW1wiQWlyIFNjcnViYmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJBTFwiOiBbXCJBbHVtaW5pdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFMRVwiOiBbXCJTdGVsbGFyIFBhbGUgQWxlXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkFMR1wiOiBbXCJQcm90ZWluLVJpY2ggQWxnYWVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkFMT1wiOiBbXCJBbHVtaW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiQU1NXCI6IFtcIkFtbW9uaWFcIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiQU5aXCI6IFtcIkFkdmFuY2VkIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQVBUXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxyXG4gICAgXCJBUlwiOiBbXCJBcmdvblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJBUlBcIjogW1wiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkFTRVwiOiBbXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkFTVFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJBVEFcIjogW1wiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQVRQXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkFVXCI6IFtcIkdvbGRcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkFVT1wiOiBbXCJHb2xkIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkFXRlwiOiBbXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJBV0hcIjogW1wiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXHJcbiAgICBcIkJBQ1wiOiBbXCJIZWxwZnVsIEJhY3RlcmlhXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCQUlcIjogW1wiQmFzaWMgQUkgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiQkJIXCI6IFtcIkJhc2ljIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkJDT1wiOiBbXCJCdWRnZXQgQ29ubmVjdG9yc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJCREVcIjogW1wiQmFzaWMgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCRVwiOiBbXCJCZXJ5bGxpdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQkVBXCI6IFtcIlByb3RlaW4tUmljaCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQkVSXCI6IFtcIkJlcnlsIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJGUFwiOiBbXCJCYXNpYyBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIkJGUlwiOiBbXCJCYXNpYyBGdWVsIFJvZFwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQkdDXCI6IFtcIlNoaWVsZGVkIENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiQkdPXCI6IFtcIkJsdWUgR29sZFwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiQkdTXCI6IFtcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkJIUFwiOiBbXCJCYXNpYyBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiQklEXCI6IFtcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkJMXCI6IFtcIkJyZWF0aGFibGUgTGlxdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTEVcIjogW1wiRGVzYXR1cmF0aW9uIEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJCTUZcIjogW1wiQmFzaWMgTWFpbmZyYW1lXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCTkRcIjogW1wiQmFuZGFnZXNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiQk9SXCI6IFtcIkJvcm9uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJPU1wiOiBbXCJCb3Jvc2lsaWNhdGVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJQVFwiOiBbXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlIxXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlIyXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMlwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQlJNXCI6IFtcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkJST1wiOiBbXCJCcm9uemVcIiwgXCJhbGxveXNcIl0sXHJcbiAgICBcIkJSUFwiOiBbXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQlJTXCI6IFtcIlNob3J0LWRpc3RhbmNlIENvbW1hbmQgQnJpZGdlXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJCU0NcIjogW1wiQm9keSBTY2FubmVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJCU0VcIjogW1wiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJCVEFcIjogW1wiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiQlRTXCI6IFtcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkJXSFwiOiBbXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiQldTXCI6IFtcIkJhc2ljIFdvcmtzdGF0aW9uXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxyXG4gICAgXCJDXCI6IFtcIkNhcmJvblwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJDQVwiOiBbXCJDYWxjaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIkNBRlwiOiBbXCJDYWZmZWluYXRlZCBCZWFuc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiQ0FQXCI6IFtcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxyXG4gICAgXCJDQkxcIjogW1wiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0JNXCI6IFtcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQlNcIjogW1wiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiQ0NcIjogW1wiQ2xpbWF0ZSBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDQ0RcIjogW1wiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiQ0RcIjogW1wiQ2FwYWNpdGl2ZSBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiQ0ZcIjogW1wiQ2VyYW1pYyBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ0hBXCI6IFtcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiQ0xcIjogW1wiQ2hsb3JpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiQ0xJXCI6IFtcIkNhbGljaGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJDTUtcIjogW1wiXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiQ09GXCI6IFtcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkNPTVwiOiBbXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiQ09UXCI6IFtcIkNvdHRvbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiQ1FMXCI6IFtcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1FNXCI6IFtcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRU1wiOiBbXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIkNRVFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiQ1JVXCI6IFtcIkNyeW9nZW5pYyBVbml0XCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJDU1RcIjogW1wiQ3J5b2dlbmljIFN0YWJpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkNURlwiOiBbXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJDVVwiOiBbXCJDb3BwZXJcIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkNVT1wiOiBbXCJDb3BwZXIgT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiREFcIjogW1wiRGF0YSBBbmFseXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxyXG4gICAgXCJEQ0hcIjogW1wiRHJvbmUgQ2hhc3Npc1wiLCBcImRyb25lc1wiXSxcclxuICAgIFwiRENMXCI6IFtcIkR1cmFibGUgQ2FzaW5nIExcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENNXCI6IFtcIkR1cmFibGUgQ2FzaW5nIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRENTXCI6IFtcIkR1cmFibGUgQ2FzaW5nIFNcIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiRERcIjogW1wiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRERUXCI6IFtcIkREVCBQbGFudCBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiREVDXCI6IFtcIkRlY29yYXRpdmUgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkRJU1wiOiBbXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcclxuICAgIFwiRE9VXCI6IFtcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiRFJGXCI6IFtcIkRyb25lIEZyYW1lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJEVlwiOiBbXCJEYXRhIFZpc3VhbGl6ZXJcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRFdcIjogW1wiRHJpbmtpbmcgV2F0ZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJFRENcIjogW1wiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSB0b29sc1wiXSxcclxuICAgIFwiRUVTXCI6IFtcIkVucmljaGVkIEVpbnN0ZWluaXVtXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJFTkdcIjogW1wiU3RhbmRhcmQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiRVBPXCI6IFtcIkVwb3h5IFJlc2luXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiRVNcIjogW1wiRWluc3RlaW5pdW1cIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiRVRDXCI6IFtcIkVucmljaGVkIFRlY2huZXRpdW1cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkVYT1wiOiBbXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGXCI6IFtcIkZsdW9yaW5lXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkZBTFwiOiBbXCJGZXJyb21pbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkFOXCI6IFtcIkFjdGl2ZSBDb29saW5nIERldmljZVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIkZDXCI6IFtcIkZsb3cgQ29udHJvbCBEZXZpY2VcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkZFXCI6IFtcIklyb25cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkZFT1wiOiBbXCJJcm9uIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkZFVFwiOiBbXCJGZXJyby1UaXRhbml1bVwiLCBcImFsbG95c1wiXSxcclxuICAgIFwiRkZcIjogW1wiRlRMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiRkZDXCI6IFtcIkZUTCBGaWVsZCBDb250cm9sbGVyXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJGSU1cIjogW1wiRmxhdm91cmVkIEluc3RhLU1lYWxcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJGSVJcIjogW1wiRmlzc2lvbiBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGTE9cIjogW1wiRmxvYXRpbmcgVGFua1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxQXCI6IFtcIkZsdWlkIFBpcGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiRkxYXCI6IFtcIkZsdXhcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIkZPRFwiOiBbXCJBbGwtUHVycG9zZSBGb2RkZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkZTRVwiOiBbXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJGVU5cIjogW1wiRW50ZXJ0YWlubWVudCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJHQUxcIjogW1wiR2FsZXJpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJHQ1wiOiBbXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJHQ0hcIjogW1wiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJHRU5cIjogW1wiR2xhc3MtYmFzZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR0lOXCI6IFtcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIkdMXCI6IFtcIkdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiR05aXCI6IFtcIkdsYXNzIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiR1JBXCI6IFtcIldpbmUtUXVhbGl0eSBHcmFwZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIkdSTlwiOiBbXCJIaWdoLUNhcmIgR3JhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJHVlwiOiBbXCJHYXMgVmVudFwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiSFwiOiBbXCJIeWRyb2dlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJIMk9cIjogW1wiV2F0ZXJcIiwgXCJsaXF1aWRzXCJdLFxyXG4gICAgXCJIQUJcIjogW1wiSGFiaXRhdCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxyXG4gICAgXCJIQUxcIjogW1wiSGFsaXRlIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIkhDQ1wiOiBbXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiSENQXCI6IFtcIkh5ZHJvY2FyYm9uIFBsYW50c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSERcIjogW1wiSG9sb2dyYXBoaWMgRGlzcGxheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSEVcIjogW1wiSGVsaXVtXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFM1wiOiBbXCJIZWxpdW0tMyBJc290b3BlXCIsIFwiZ2FzZXNcIl0sXHJcbiAgICBcIkhFUlwiOiBbXCJTcGljeSBIZXJic1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSEVYXCI6IFtcIkhlbGlvdHJvcGUgRXh0cmFjdFwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkhIUFwiOiBbXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiSE1TXCI6IFtcIkhhek1hdCBXb3JrIFN1aXRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJITlpcIjogW1wiSHlwZXJ0aHJ1c3QgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIT0dcIjogW1wiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiSE9QXCI6IFtcIkZsb3dlcnkgSG9wc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiSFBDXCI6IFtcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIkhQUlwiOiBbXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIU0VcIjogW1wiSGFyZGVuZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJIU1NcIjogW1wiU21hcnQgU3BhY2UgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkhURVwiOiBbXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJIWVJcIjogW1wiSHlwZXItcG93ZXIgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiSVwiOiBbXCJJb2RpbmVcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiSURDXCI6IFtcIkluZm9ybWF0aW9uIERhdGEgQ29yZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklNTVwiOiBbXCJJbmZvcm1hdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIklORFwiOiBbXCJJbmRpZ28gQ29sb3JhbnRcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIklOU1wiOiBbXCJJbnN1Rm9hbVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIkpVSVwiOiBbXCJTZWRhdGl2ZSBTdWJzdGFuY2VcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIktPTVwiOiBbXCJLb21idWNoYVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJLVlwiOiBbXCJLZXZsYXIgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIkxCSFwiOiBbXCJMaWdodHdlaWdodCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMQ1wiOiBbXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIkxDQlwiOiBbXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMQ1JcIjogW1wiTGlxdWlkIENyeXN0YWxzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJMRFwiOiBbXCJMb2NhbCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIkxERVwiOiBbXCJMaWdodHdlaWdodCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxESVwiOiBbXCJMYXNlciBEaW9kZXNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcclxuICAgIFwiTEVTXCI6IFtcIkxpcXVpZCBFaW5zdGVpbml1bVwiLCBcImxpcXVpZHNcIl0sXHJcbiAgICBcIkxGRVwiOiBbXCJMYXJnZSBGVEwgRW1pdHRlclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiTEZMXCI6IFtcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJMRlBcIjogW1wiTG93LWhlYXQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJMSFBcIjogW1wiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIkxJXCI6IFtcIkxpdGhpdW1cIiwgXCJtZXRhbHNcIl0sXHJcbiAgICBcIkxJT1wiOiBbXCJMaXRoaXVtIE9yZVwiLCBcIm9yZXNcIl0sXHJcbiAgICBcIkxJU1wiOiBbXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMSVRcIjogW1wiTmVvbiBMaWdodGluZyBTeXN0ZW1cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIkxPR1wiOiBbXCJMb2dpc3RpY3MgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxyXG4gICAgXCJMU0VcIjogW1wiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxyXG4gICAgXCJMU0xcIjogW1wiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIkxTVFwiOiBbXCJMaW1lc3RvbmVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiTFRBXCI6IFtcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIkxVXCI6IFtcIkxhYm9yYXRvcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiTUFHXCI6IFtcIk1hZ25ldGl0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJNQUlcIjogW1wiSGlnaC1DYXJiIE1haXplXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNQlwiOiBbXCJNb3RoZXJib2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1DQlwiOiBbXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiTUNHXCI6IFtcIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk1FQVwiOiBbXCJRdWFsaXR5IE1lYXQgTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1FRFwiOiBbXCJCYXNpYyBNZWRpY2FsIEtpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIk1GRVwiOiBbXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk1GS1wiOiBbXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk1GTFwiOiBbXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1HXCI6IFtcIk1hZ25lc2l1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG4gICAgXCJNR0NcIjogW1wiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNR1NcIjogW1wiTWFnbmVzaXRlXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIk1ITFwiOiBbXCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJNSFBcIjogW1wiTWljcm8gSGVhZHBob25lc1wiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiTUxJXCI6IFtcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcclxuICAgIFwiTVBDXCI6IFtcIk1pY3JvLVByb2Nlc3NvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIk1TTFwiOiBbXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIk1UQ1wiOiBbXCJNZWdhVHViZSBDb2F0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTVRQXCI6IFtcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIk1VU1wiOiBbXCJQcm90ZWluLVJpY2ggTXVzaHJvb21zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJNV0ZcIjogW1wiTWVkaXVtIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIk5cIjogW1wiTml0cm9nZW5cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkFcIjogW1wiU29kaXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIk5BQlwiOiBbXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5DU1wiOiBbXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5FXCI6IFtcIk5lb25cIiwgXCJnYXNlc1wiXSxcclxuICAgIFwiTkZcIjogW1wiTmV0d29ya2luZyBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJORklcIjogW1wiTmFubyBGaWJlclwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXHJcbiAgICBcIk5HXCI6IFtcIk5hbm8tQ29hdGVkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiTkxcIjogW1wiTnlsb24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXHJcbiAgICBcIk5OXCI6IFtcIk5ldXJhbCBOZXR3b3JrXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk5PWlwiOiBbXCJCYXNpYyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIk5SXCI6IFtcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIk5TXCI6IFtcIk51dHJpZW50IFNvbHV0aW9uXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJOU1RcIjogW1wiTmV1cm9TdGltdWxhbnRzXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXHJcbiAgICBcIk5VVFwiOiBbXCJUcmlnbHljZXJpZGUgTnV0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiTlYxXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIk5WMlwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJPXCI6IFtcIk94eWdlblwiLCBcImdhc2VzXCJdLFxyXG4gICAgXCJPRkZcIjogW1wiT2ZmaWNlIFN1cHBsaWVzXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiT0xGXCI6IFtcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJPU1wiOiBbXCJPcGVyYXRpbmcgU3lzdGVtXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXHJcbiAgICBcIk9WRVwiOiBbXCJCYXNpYyBPdmVyYWxsc1wiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXHJcbiAgICBcIlBDQlwiOiBbXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJQREFcIjogW1wiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJQRVwiOiBbXCJQb2x5LUV0aHlsZW5lXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBGRVwiOiBbXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIiwgXCJjaGVtaWNhbHNcIl0sXHJcbiAgICBcIlBHXCI6IFtcIlBvbHltZXIgR3JhbnVsYXRlXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBJQlwiOiBbXCJQaW5lYmVycmllc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUEtcIjogW1wiUGFpbmtpbGxlcnNcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiUE9XXCI6IFtcIlBvd2VyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcclxuICAgIFwiUFBBXCI6IFtcIlByb3RlaW4gUGFzdGVcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlBTSFwiOiBbXCJQcmVzc3VyZSBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlBTTFwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiLCBcInBsYXN0aWNzXCJdLFxyXG4gICAgXCJQU01cIjogW1wiUG9seW1lciBTaGVldCBUeXBlIE1cIiwgXCJwbGFzdGljc1wiXSxcclxuICAgIFwiUFNTXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBTXCIsIFwicGxhc3RpY3NcIl0sXHJcbiAgICBcIlBUXCI6IFtcIlBvd2VyIFRvb2xzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUFdPXCI6IFtcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiUUNSXCI6IFtcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcclxuICAgIFwiUkFEXCI6IFtcIlJhZGlvIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcclxuICAgIFwiUkFHXCI6IFtcIlJhZGlvaXNvdG9wZSBHZW5lcmF0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJBTVwiOiBbXCJNZW1vcnkgQmFua1wiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlJBVFwiOiBbXCJCYXNpYyBSYXRpb25zXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcclxuICAgIFwiUkJIXCI6IFtcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkNPXCI6IFtcIlJhdyBDb3R0b24gRmliZXJcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXHJcbiAgICBcIlJDU1wiOiBbXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJSQ1RcIjogW1wiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXHJcbiAgICBcIlJERVwiOiBbXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiUkRMXCI6IFtcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkRTXCI6IFtcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiUkVBXCI6IFtcIkNoZW1pY2FsIFJlYWdlbnRzXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJSRURcIjogW1wiUmVzY3VlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxyXG4gICAgXCJSRVBcIjogW1wiUmVwYWlyIEtpdFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJSR1wiOiBbXCJSZWluZm9yY2VkIEdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiUkdPXCI6IFtcIlJlZCBHb2xkXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJSSFBcIjogW1wiUmVpbmZvcmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcclxuICAgIFwiUk9NXCI6IFtcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxyXG4gICAgXCJSU0VcIjogW1wiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXHJcbiAgICBcIlJTSFwiOiBbXCJSYWRpYXRpb24gU2hpZWxkaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxyXG4gICAgXCJSU0lcIjogW1wiUmF3IFNpbGsgU3RyYWluc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiUlRBXCI6IFtcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcclxuICAgIFwiU1wiOiBbXCJTdWxmdXJcIiwgXCJlbGVtZW50c1wiXSxcclxuICAgIFwiU0FcIjogW1wiU2VhcmNoIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBTFwiOiBbXCJTb3J0aW5nIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXHJcbiAgICBcIlNBUlwiOiBbXCJTZW5zb3IgQXJyYXlcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXHJcbiAgICBcIlNDXCI6IFtcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiU0NCXCI6IFtcIlNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNDTlwiOiBbXCJNdWx0aS1QdXJwb3NlIFNjYW5uZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJTQ1JcIjogW1wiU3VsZnVyIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlNEUlwiOiBbXCJTdXJnaWNhbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU0VBXCI6IFtcIlBvbHktU3VsZml0ZSBTZWFsYW50XCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcclxuICAgIFwiU0VOXCI6IFtcIlNlbnNvclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlNFUVwiOiBbXCJTdXJnaWNhbCBFcXVpcG1lbnRcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcclxuICAgIFwiU0ZcIjogW1wiU1RMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcclxuICAgIFwiU0ZFXCI6IFtcIlNtYWxsIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxyXG4gICAgXCJTRktcIjogW1wiU21hbGwgRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlNGTFwiOiBbXCJTbWFsbCBGVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcclxuICAgIFwiU0lcIjogW1wiU2lsaWNvblwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU0lMXCI6IFtcIlNpbGtlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcclxuICAgIFwiU0lPXCI6IFtcIlNpbGljb24gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiU05NXCI6IFtcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTT0lcIjogW1wiQXJ0aWZpY2lhbCBTb2lsXCIsIFwiY2hlbWljYWxzXCJdLFxyXG4gICAgXCJTT0xcIjogW1wiU29sYXIgQ2VsbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUFwiOiBbXCJTb2xhciBQYW5lbFwiLCBcImVuZXJneSBzeXN0ZW1zXCJdLFxyXG4gICAgXCJTUkRcIjogW1wiU2hpcC1SZXBhaXIgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXHJcbiAgICBcIlNSUFwiOiBbXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcclxuICAgIFwiU1NDXCI6IFtcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIiwgXCJzaGlwIHBhcnRzXCJdLFxyXG4gICAgXCJTU0xcIjogW1wiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlNUTFwiOiBbXCJTdGVlbFwiLCBcIm1ldGFsc1wiXSxcclxuICAgIFwiU1RSXCI6IFtcIk1lZGljYWwgU3RyZXRjaGVyXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlNUU1wiOiBbXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlNVXCI6IFtcIlN1cmdlcnkgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcclxuICAgIFwiU1VEXCI6IFtcIlN1cnZlaWxsYW5jZSBEcm9uZVwiLCBcImRyb25lc1wiXSxcclxuICAgIFwiU1VOXCI6IFtcIlNhZmV0eSBVbmlmb3JtXCIsIFwidXRpbGl0eVwiXSxcclxuICAgIFwiU1dGXCI6IFtcIlNtYWxsIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRBXCI6IFtcIlRhbnRhbHVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRBQ1wiOiBbXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXHJcbiAgICBcIlRBSVwiOiBbXCJUYW50YWxpdGUgUm9ja1wiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUQ1wiOiBbXCJUZWNobmV0aXVtXCIsIFwiZWxlbWVudHNcIl0sXHJcbiAgICBcIlRDQlwiOiBbXCJUaW55IENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIlRDTFwiOiBbXCJUQ0wgQWNpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVENPXCI6IFtcIlRlY2huZXRpdW0gT3hpZGVcIiwgXCJtaW5lcmFsc1wiXSxcclxuICAgIFwiVENTXCI6IFtcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVENVXCI6IFtcIlRyYXVtYSBDYXJlIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIlRIRlwiOiBbXCJUaGVybW9GbHVpZFwiLCBcImNoZW1pY2Fsc1wiXSxcclxuICAgIFwiVEhQXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXHJcbiAgICBcIlRJXCI6IFtcIlRpdGFuaXVtXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJUSU9cIjogW1wiVGl0YW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcclxuICAgIFwiVEtcIjogW1wiVGVjaG5vS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxyXG4gICAgXCJUUFVcIjogW1wiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSQVwiOiBbXCJBdWRpbyBUcmFuc21pdHRlclwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXHJcbiAgICBcIlRSTlwiOiBbXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXHJcbiAgICBcIlRSVVwiOiBbXCJUcnVzc1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcclxuICAgIFwiVFNcIjogW1wiVGVjdG9zaWxpc2l0ZVwiLCBcIm1pbmVyYWxzXCJdLFxyXG4gICAgXCJUU0hcIjogW1wiVGhlcm1hbCBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXHJcbiAgICBcIlRVQlwiOiBbXCJUZXN0IFR1YmVzXCIsIFwibWVkaWNhbCBlcXVpcG1lbnRcIl0sXHJcbiAgICBcIlVUU1wiOiBbXCJVbml2ZXJzYWwgVG9vbHNldFwiLCBcInV0aWxpdHlcIl0sXHJcbiAgICBcIlZDQlwiOiBbXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJWRUdcIjogW1wiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcclxuICAgIFwiVkdcIjogW1wiVml0YUdlbFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxyXG4gICAgXCJWSVRcIjogW1wiVml0YSBFc3NlbmNlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxyXG4gICAgXCJWU0NcIjogW1wiVmVyeSBTbWFsbCBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxyXG4gICAgXCJXXCI6IFtcIlR1bmdzdGVuXCIsIFwibWV0YWxzXCJdLFxyXG4gICAgXCJXQUlcIjogW1wiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXHJcbiAgICBcIldBTFwiOiBbXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCIsIFwiYWxsb3lzXCJdLFxyXG4gICAgXCJXQ0JcIjogW1wiSGlnaC1sb2FkIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXHJcbiAgICBcIldJTlwiOiBbXCJTbWFydCBaaW5mYW5kZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcclxuICAgIFwiV01cIjogW1wiV2luZG93IE1hbmFnZXJcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxyXG4gICAgXCJXT1JcIjogW1wiSGFuZGNyYWZ0IFdvcmtzaG9wIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXHJcbiAgICBcIldSXCI6IFtcIldhdGVyIFJlY2xhaW1lclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcclxuICAgIFwiV1NcIjogW1wiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxyXG4gICAgXCJaSVJcIjogW1wiWmlyY29uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXHJcbiAgICBcIlpSXCI6IFtcIlppcmNvbml1bVwiLCBcImVsZW1lbnRzXCJdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxzID0ge1xyXG4gICAgXCJBbnRlbm5hIEFycmF5XCI6IFtcIkFBUlwiLCAwLjc4LCAwLjVdLFxyXG4gICAgXCJBZHZhbmNlZCBCdWxraGVhZFwiOiBbXCJBQkhcIiwgMC42LCAwLjldLFxyXG4gICAgXCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIjogW1wiQUNTXCIsIDAuMywgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiOiBbXCJBREVcIiwgMC40LCAxLjVdLFxyXG4gICAgXCJBdXRvLURvY1wiOiBbXCJBRFJcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCI6IFtcIkFEU1wiLCAwLjcsIDJdLFxyXG4gICAgXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCI6IFtcIkFFRlwiLCAyLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgU1RMIEVuZ2luZVwiOiBbXCJBRU5cIiwgMTQsIDddLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFB1bXBcIjogW1wiQUZQXCIsIDEsIDAuMjVdLFxyXG4gICAgXCJBZHZhbmNlZCBGdWVsIFJvZFwiOiBbXCJBRlJcIiwgMC40LCAwLjFdLFxyXG4gICAgXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIjogW1wiQUdTXCIsIDMwLCA1XSxcclxuICAgIFwiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiOiBbXCJBSFBcIiwgMjAsIDEwXSxcclxuICAgIFwiQWlyIFNjcnViYmVyXCI6IFtcIkFJUlwiLCAxLjcsIDNdLFxyXG4gICAgXCJBbHVtaW5pdW1cIjogW1wiQUxcIiwgMi43LCAxXSxcclxuICAgIFwiU3RlbGxhciBQYWxlIEFsZVwiOiBbXCJBTEVcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQWxnYWVcIjogW1wiQUxHXCIsIDAuNywgMV0sXHJcbiAgICBcIkFsdW1pbml1bSBPcmVcIjogW1wiQUxPXCIsIDEuMzUsIDFdLFxyXG4gICAgXCJBbW1vbmlhXCI6IFtcIkFNTVwiLCAwLjg2LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgTm96emxlXCI6IFtcIkFOWlwiLCA2LCAzXSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQVBUXCIsIDAuMDMsIDAuM10sXHJcbiAgICBcIkFyZ29uXCI6IFtcIkFSXCIsIDEuNzg0LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiQVJQXCIsIDAuMDQsIDAuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQVNFXCIsIDAuNSwgMC42XSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiOiBbXCJBU1RcIiwgNC45OCwgMV0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkFUQVwiLCAwLjMsIDAuNF0sXHJcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJBVFBcIiwgMi45LCAxXSxcclxuICAgIFwiR29sZFwiOiBbXCJBVVwiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkdvbGQgT3JlXCI6IFtcIkFVT1wiLCAzLjg2LCAxXSxcclxuICAgIFwiQWN0aXZlIFdhdGVyIEZpbHRlclwiOiBbXCJBV0ZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJBV0hcIiwgMC4xMiwgMV0sXHJcbiAgICBcIkhlbHBmdWwgQmFjdGVyaWFcIjogW1wiQkFDXCIsIDAuMTUsIDAuMTVdLFxyXG4gICAgXCJCYXNpYyBBSSBGcmFtZXdvcmtcIjogW1wiQkFJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgQnVsa2hlYWRcIjogW1wiQkJIXCIsIDAuNSwgMC44XSxcclxuICAgIFwiQnVkZ2V0IENvbm5lY3RvcnNcIjogW1wiQkNPXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkJhc2ljIERlY2sgRWxlbWVudHNcIjogW1wiQkRFXCIsIDAuMSwgMS41XSxcclxuICAgIFwiQmVyeWxsaXVtXCI6IFtcIkJFXCIsIDEuODQsIDFdLFxyXG4gICAgXCJQcm90ZWluLVJpY2ggQmVhbnNcIjogW1wiQkVBXCIsIDAuOCwgMV0sXHJcbiAgICBcIkJlcnlsIENyeXN0YWxzXCI6IFtcIkJFUlwiLCAxLjkyLCAxXSxcclxuICAgIFwiQmFzaWMgRnVlbCBQdW1wXCI6IFtcIkJGUFwiLCAwLjgsIDAuMl0sXHJcbiAgICBcIkJhc2ljIEZ1ZWwgUm9kXCI6IFtcIkJGUlwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIlNoaWVsZGVkIENvbm5lY3RvcnNcIjogW1wiQkdDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiQmx1ZSBHb2xkXCI6IFtcIkJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiOiBbXCJCR1NcIiwgMjAsIDNdLFxyXG4gICAgXCJCYXNpYyBIdWxsIFBsYXRlXCI6IFtcIkJIUFwiLCAxMCwgMTBdLFxyXG4gICAgXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCI6IFtcIkJJRFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiQnJlYXRoYWJsZSBMaXF1aWRcIjogW1wiQkxcIiwgMS4xMiwgMV0sXHJcbiAgICBcIkRlc2F0dXJhdGlvbiBBZ2VudFwiOiBbXCJCTEVcIiwgMC41LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNYWluZnJhbWVcIjogW1wiQk1GXCIsIDAuOCwgMS4yXSxcclxuICAgIFwiQmFuZGFnZXNcIjogW1wiQk5EXCIsIDAuMDAxLCAwLjAwNV0sXHJcbiAgICBcIkJvcm9uIENyeXN0YWxzXCI6IFtcIkJPUlwiLCAxLjgsIDFdLFxyXG4gICAgXCJCb3Jvc2lsaWNhdGVcIjogW1wiQk9TXCIsIDEuNSwgMV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkJQVFwiLCAwLjAyLCAwLjNdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzFcIjogW1wiQlIxXCIsIDE4MCwgMzAwXSxcclxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsyXCI6IFtcIkJSMlwiLCAyODAsIDQwMF0sXHJcbiAgICBcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCI6IFtcIkJSTVwiLCAyLjUsIDFdLFxyXG4gICAgXCJCcm9uemVcIjogW1wiQlJPXCIsIDguNzMsIDFdLFxyXG4gICAgXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJCUlBcIiwgMC4wMywgMC4yXSxcclxuICAgIFwiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIjogW1wiQlJTXCIsIDE1MCwgMjAwXSxcclxuICAgIFwiQm9keSBTY2FubmVyXCI6IFtcIkJTQ1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiQlNFXCIsIDAuMywgMC41XSxcclxuICAgIFwiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQlRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCI6IFtcIkJUU1wiLCAxLjA1LCAxXSxcclxuICAgIFwiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIjogW1wiQldIXCIsIDAuMSwgMV0sXHJcbiAgICBcIkJhc2ljIFdvcmtzdGF0aW9uXCI6IFtcIkJXU1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJDYXJib25cIjogW1wiQ1wiLCAyLjI1LCAxXSxcclxuICAgIFwiQ2FsY2l1bVwiOiBbXCJDQVwiLCAxLjU0LCAxXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgQmVhbnNcIjogW1wiQ0FGXCIsIDAuODYsIDFdLFxyXG4gICAgXCJFbGVjdHJpYyBGaWVsZCBDYXBhY2l0b3JcIjogW1wiQ0FQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxhcmdlIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTFwiLCA1LjQsIDIuNF0sXHJcbiAgICBcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQk1cIiwgMy42LCAxLjZdLFxyXG4gICAgXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQlNcIiwgMS44LCAwLjhdLFxyXG4gICAgXCJDbGltYXRlIENvbnRyb2xsZXJcIjogW1wiQ0NcIiwgMC41LCAxXSxcclxuICAgIFwiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiOiBbXCJDQ0RcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiQ2FwYWNpdGl2ZSBEaXNwbGF5XCI6IFtcIkNEXCIsIDAuMDA0LCAwLjAwMl0sXHJcbiAgICBcIkNlcmFtaWMgRmFicmljXCI6IFtcIkNGXCIsIDIuODIsIDFdLFxyXG4gICAgXCJDb21idXN0aW9uIENoYW1iZXJcIjogW1wiQ0hBXCIsIDEuMiwgMC43XSxcclxuICAgIFwiQ2hsb3JpbmVcIjogW1wiQ0xcIiwgMy4yLCAxXSxcclxuICAgIFwiQ2FsaWNoZSBSb2NrXCI6IFtcIkNMSVwiLCAyLjQyLCAxXSxcclxuICAgIFwiXCI6IFtcIkNNS1wiLCA0LjU2LCAzMy4yXSxcclxuICAgIFwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIjogW1wiQ09GXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIjogW1wiQ09NXCIsIDAuNSwgMS41XSxcclxuICAgIFwiQ290dG9uIEZhYnJpY1wiOiBbXCJDT1RcIiwgMC43NywgMV0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiOiBbXCJDUUxcIiwgNzUsIDE1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKE1lZGl1bSlcIjogW1wiQ1FNXCIsIDUwLCAxMDBdLFxyXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIjogW1wiQ1FTXCIsIDI1LCA1MF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFRpbnkpXCI6IFtcIkNRVFwiLCAxMi41LCAyNV0sXHJcbiAgICBcIkNyeW9nZW5pYyBVbml0XCI6IFtcIkNSVVwiLCAyLjIsIDJdLFxyXG4gICAgXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiOiBbXCJDU1RcIiwgMS4xNCwgMV0sXHJcbiAgICBcIkNlcmFtaWMtVHVuZ3N0ZW4gRmFicmljXCI6IFtcIkNURlwiLCA0LjMyLCAxXSxcclxuICAgIFwiQ29wcGVyXCI6IFtcIkNVXCIsIDguOTIsIDFdLFxyXG4gICAgXCJDb3BwZXIgT3JlXCI6IFtcIkNVT1wiLCA0LjAxLCAxXSxcclxuICAgIFwiRGF0YSBBbmFseXplclwiOiBbXCJEQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyb25lIENoYXNzaXNcIjogW1wiRENIXCIsIDAuMiwgMC4wM10sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIExcIjogW1wiRENMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIE1cIjogW1wiRENNXCIsIDAuMDQsIDAuNF0sXHJcbiAgICBcIkR1cmFibGUgQ2FzaW5nIFNcIjogW1wiRENTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCI6IFtcIkREXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRERUIFBsYW50IEFnZW50XCI6IFtcIkREVFwiLCAwLjExLCAwLjFdLFxyXG4gICAgXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCI6IFtcIkRFQ1wiLCAwLjUsIDJdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCI6IFtcIkRJU1wiLCAwLjAyLCAwLjAyXSxcclxuICAgIFwiRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIkRPVVwiLCA1LCA0XSxcclxuICAgIFwiRHJvbmUgRnJhbWVcIjogW1wiRFJGXCIsIDAuMSwgMC4wMl0sXHJcbiAgICBcIkRhdGEgVmlzdWFsaXplclwiOiBbXCJEVlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkRyaW5raW5nIFdhdGVyXCI6IFtcIkRXXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBEYXRhIENvcmVcIjogW1wiRURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRW5yaWNoZWQgRWluc3RlaW5pdW1cIjogW1wiRUVTXCIsIDkuMiwgMV0sXHJcbiAgICBcIlN0YW5kYXJkIFNUTCBFbmdpbmVcIjogW1wiRU5HXCIsIDgsIDRdLFxyXG4gICAgXCJFcG94eSBSZXNpblwiOiBbXCJFUE9cIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIkVpbnN0ZWluaXVtXCI6IFtcIkVTXCIsIDAuODgsIDAuMV0sXHJcbiAgICBcIkVucmljaGVkIFRlY2huZXRpdW1cIjogW1wiRVRDXCIsIDQuMSwgMV0sXHJcbiAgICBcIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiOiBbXCJFWE9cIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiRmx1b3JpbmVcIjogW1wiRlwiLCAxLjY5NiwgMV0sXHJcbiAgICBcIkZlcnJvbWluaXVtXCI6IFtcIkZBTFwiLCAzLjIyLCAxXSxcclxuICAgIFwiQWN0aXZlIENvb2xpbmcgRGV2aWNlXCI6IFtcIkZBTlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkZsb3cgQ29udHJvbCBEZXZpY2VcIjogW1wiRkNcIiwgMC41LCAwLjI1XSxcclxuICAgIFwiSXJvblwiOiBbXCJGRVwiLCA3Ljg3NCwgMV0sXHJcbiAgICBcIklyb24gT3JlXCI6IFtcIkZFT1wiLCA1LjksIDFdLFxyXG4gICAgXCJGZXJyby1UaXRhbml1bVwiOiBbXCJGRVRcIiwgNi44NSwgMV0sXHJcbiAgICBcIkZUTCBGdWVsXCI6IFtcIkZGXCIsIDAuMDUsIDAuMDFdLFxyXG4gICAgXCJGVEwgRmllbGQgQ29udHJvbGxlclwiOiBbXCJGRkNcIiwgNTAsIDE2XSxcclxuICAgIFwiRmxhdm91cmVkIEluc3RhLU1lYWxcIjogW1wiRklNXCIsIDAuNTUsIDAuNV0sXHJcbiAgICBcIkZpc3Npb24gUmVhY3RvclwiOiBbXCJGSVJcIiwgNywgNC45XSxcclxuICAgIFwiRmxvYXRpbmcgVGFua1wiOiBbXCJGTE9cIiwgMSwgMl0sXHJcbiAgICBcIkZsdWlkIFBpcGluZ1wiOiBbXCJGTFBcIiwgMC4zLCAyXSxcclxuICAgIFwiRmx1eFwiOiBbXCJGTFhcIiwgMC4yNSwgMC4xXSxcclxuICAgIFwiQWxsLVB1cnBvc2UgRm9kZGVyXCI6IFtcIkZPRFwiLCAxLjIsIDFdLFxyXG4gICAgXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCI6IFtcIkZTRVwiLCA2LCAzXSxcclxuICAgIFwiRW50ZXJ0YWlubWVudCBVbml0XCI6IFtcIkZVTlwiLCA1LCA0XSxcclxuICAgIFwiR2FsZXJpdGUgUm9ja1wiOiBbXCJHQUxcIiwgMi41MSwgMV0sXHJcbiAgICBcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIjogW1wiR0NcIiwgMC4wNSwgMC4xXSxcclxuICAgIFwiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCI6IFtcIkdDSFwiLCAxLCAwLjZdLFxyXG4gICAgXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCI6IFtcIkdFTlwiLCA1LCAzXSxcclxuICAgIFwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIjogW1wiR0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiR2xhc3NcIjogW1wiR0xcIiwgMC4wMTYsIDAuMDFdLFxyXG4gICAgXCJHbGFzcyBOb3p6bGVcIjogW1wiR05aXCIsIDEuNSwgMV0sXHJcbiAgICBcIldpbmUtUXVhbGl0eSBHcmFwZXNcIjogW1wiR1JBXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBHcmFpbnNcIjogW1wiR1JOXCIsIDAuOSwgMV0sXHJcbiAgICBcIkdhcyBWZW50XCI6IFtcIkdWXCIsIDAuMjUsIDAuMTVdLFxyXG4gICAgXCJIeWRyb2dlblwiOiBbXCJIXCIsIDAuMDcsIDFdLFxyXG4gICAgXCJXYXRlclwiOiBbXCJIMk9cIiwgMC4yLCAwLjJdLFxyXG4gICAgXCJIYWJpdGF0IFVuaXRcIjogW1wiSEFCXCIsIDEwLCA4XSxcclxuICAgIFwiSGFsaXRlIENyeXN0YWxzXCI6IFtcIkhBTFwiLCAyLjE3LCAxXSxcclxuICAgIFwiSGlnaC1DYXBhY2l0eSBDb25uZWN0b3JzXCI6IFtcIkhDQ1wiLCAwLjAxLCAwLjAwMl0sXHJcbiAgICBcIkh5ZHJvY2FyYm9uIFBsYW50c1wiOiBbXCJIQ1BcIiwgMC44LCAxXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgRGlzcGxheVwiOiBbXCJIRFwiLCAwLjA1LCAyXSxcclxuICAgIFwiSGVsaXVtXCI6IFtcIkhFXCIsIDAuMTQ1LCAxXSxcclxuICAgIFwiSGVsaXVtLTMgSXNvdG9wZVwiOiBbXCJIRTNcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJTcGljeSBIZXJic1wiOiBbXCJIRVJcIiwgMC40LCAxXSxcclxuICAgIFwiSGVsaW90cm9wZSBFeHRyYWN0XCI6IFtcIkhFWFwiLCAxLjEsIDFdLFxyXG4gICAgXCJIYXJkZW5lZCBIdWxsIFBsYXRlXCI6IFtcIkhIUFwiLCAxNSwgMTBdLFxyXG4gICAgXCJIYXpNYXQgV29yayBTdWl0XCI6IFtcIkhNU1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiSHlwZXJ0aHJ1c3QgTm96emxlXCI6IFtcIkhOWlwiLCA2LCAxMl0sXHJcbiAgICBcIkhvbG9ncmFwaGljIEdsYXNzZXNcIjogW1wiSE9HXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJGbG93ZXJ5IEhvcHNcIjogW1wiSE9QXCIsIDAuMzUsIDFdLFxyXG4gICAgXCJIYW5kaGVsZCBQZXJzb25hbCBDb25zb2xlXCI6IFtcIkhQQ1wiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCI6IFtcIkhQUlwiLCAxOCwgMTVdLFxyXG4gICAgXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkhTRVwiLCAzLjEsIDAuN10sXHJcbiAgICBcIlNtYXJ0IFNwYWNlIFN1aXRcIjogW1wiSFNTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCI6IFtcIkhURVwiLCAyMCwgMTBdLFxyXG4gICAgXCJIeXBlci1wb3dlciBSZWFjdG9yXCI6IFtcIkhZUlwiLCAzNSwgMjVdLFxyXG4gICAgXCJJb2RpbmVcIjogW1wiSVwiLCA0LjkzLCAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gRGF0YSBDb3JlXCI6IFtcIklEQ1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCI6IFtcIklNTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkluZGlnbyBDb2xvcmFudFwiOiBbXCJJTkRcIiwgMC4yMSwgMC4yXSxcclxuICAgIFwiSW5zdUZvYW1cIjogW1wiSU5TXCIsIDAuMDYsIDAuMV0sXHJcbiAgICBcIlNlZGF0aXZlIFN1YnN0YW5jZVwiOiBbXCJKVUlcIiwgMS4yLCAxXSxcclxuICAgIFwiS29tYnVjaGFcIjogW1wiS09NXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiS2V2bGFyIEZhYnJpY1wiOiBbXCJLVlwiLCAxLjY1LCAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIjogW1wiTEJIXCIsIDAuMiwgMC42XSxcclxuICAgIFwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIjogW1wiTENcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkxhcmdlIENhcmdvIEJheSBLaXRcIjogW1wiTENCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiTGlxdWlkIENyeXN0YWxzXCI6IFtcIkxDUlwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJMb2NhbCBEYXRhYmFzZVwiOiBbXCJMRFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIjogW1wiTERFXCIsIDAuMSwgMS4yXSxcclxuICAgIFwiTGFzZXIgRGlvZGVzXCI6IFtcIkxESVwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJMaXF1aWQgRWluc3RlaW5pdW1cIjogW1wiTEVTXCIsIDguODQsIDFdLFxyXG4gICAgXCJMYXJnZSBGVEwgRW1pdHRlclwiOiBbXCJMRkVcIiwgMC40LCAxLjZdLFxyXG4gICAgXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMRkxcIiwgNjAsIDEwXSxcclxuICAgIFwiTG93LWhlYXQgRnVlbCBQdW1wXCI6IFtcIkxGUFwiLCAwLjUsIDAuMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIjogW1wiTEhQXCIsIDUsIDEwXSxcclxuICAgIFwiTGl0aGl1bVwiOiBbXCJMSVwiLCAwLjU1LCAxXSxcclxuICAgIFwiTGl0aGl1bSBPcmVcIjogW1wiTElPXCIsIDIuNzUsIDFdLFxyXG4gICAgXCJMaWZlIFN1cHBvcnQgU3lzdGVtXCI6IFtcIkxJU1wiLCA1LjYsIDddLFxyXG4gICAgXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJMSVRcIiwgMSwgMl0sXHJcbiAgICBcIkxvZ2lzdGljcyBTeXN0ZW1cIjogW1wiTE9HXCIsIDAuNSwgMS41XSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJMU0VcIiwgMC4zLCAxLjJdLFxyXG4gICAgXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMU0xcIiwgMTI1LCAxMDBdLFxyXG4gICAgXCJMaW1lc3RvbmVcIjogW1wiTFNUXCIsIDIuNzMsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJMVEFcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJMYWJvcmF0b3J5IFVuaXRcIjogW1wiTFVcIiwgOCwgNl0sXHJcbiAgICBcIk1hZ25ldGl0ZVwiOiBbXCJNQUdcIiwgNS4xNSwgMV0sXHJcbiAgICBcIkhpZ2gtQ2FyYiBNYWl6ZVwiOiBbXCJNQUlcIiwgMS4zLCAxXSxcclxuICAgIFwiTW90aGVyYm9hcmRcIjogW1wiTUJcIiwgMC4wNzUsIDAuMDc1XSxcclxuICAgIFwiTWVkaXVtIENhcmdvIEJheSBLaXRcIjogW1wiTUNCXCIsIDEwMCwgMTAwXSxcclxuICAgIFwiTWluZXJhbCBDb25zdHJ1Y3Rpb24gR3JhbnVsYXRlXCI6IFtcIk1DR1wiLCAwLjI0LCAwLjFdLFxyXG4gICAgXCJRdWFsaXR5IE1lYXQgTWVhbFwiOiBbXCJNRUFcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJCYXNpYyBNZWRpY2FsIEtpdFwiOiBbXCJNRURcIiwgMC4zLCAwLjFdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEVtaXR0ZXJcIjogW1wiTUZFXCIsIDAuMiwgMC44XSxcclxuICAgIFwiTWVkaXVtIEZhc3RlbmVyIEtpdFwiOiBbXCJNRktcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1GTFwiLCAyNCwgNF0sXHJcbiAgICBcIk1hZ25lc2l1bVwiOiBbXCJNR1wiLCAwLjI3LCAwLjE2XSxcclxuICAgIFwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCI6IFtcIk1HQ1wiLCAwLjYsIDAuOV0sXHJcbiAgICBcIk1hZ25lc2l0ZVwiOiBbXCJNR1NcIiwgMS43MywgMV0sXHJcbiAgICBcIk1ldGFsLUhhbGlkZSBMaWdodGluZyBTeXN0ZW1cIjogW1wiTUhMXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk1pY3JvIEhlYWRwaG9uZXNcIjogW1wiTUhQXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCI6IFtcIk1MSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIk1pY3JvLVByb2Nlc3NvclwiOiBbXCJNUENcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1TTFwiLCA1MCwgNTBdLFxyXG4gICAgXCJNZWdhVHViZSBDb2F0aW5nXCI6IFtcIk1UQ1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk1lYXQgVGlzc3VlIFBhdHRpZXNcIjogW1wiTVRQXCIsIDAuNywgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIjogW1wiTVVTXCIsIDAuOCwgMV0sXHJcbiAgICBcIk1lZGl1bSBXYWZlclwiOiBbXCJNV0ZcIiwgMC4wMDgsIDAuMDA4XSxcclxuICAgIFwiTml0cm9nZW5cIjogW1wiTlwiLCAwLjgwNywgMV0sXHJcbiAgICBcIlNvZGl1bVwiOiBbXCJOQVwiLCAwLjk3LCAxXSxcclxuICAgIFwiU29kaXVtIEJvcm9oeWRyaWRlXCI6IFtcIk5BQlwiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJOYW5vLUNhcmJvbiBTaGVldGluZ1wiOiBbXCJOQ1NcIiwgMC4wMjgsIDAuMDFdLFxyXG4gICAgXCJOZW9uXCI6IFtcIk5FXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5ldHdvcmtpbmcgRnJhbWV3b3JrXCI6IFtcIk5GXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTmFubyBGaWJlclwiOiBbXCJORklcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJOYW5vLUNvYXRlZCBHbGFzc1wiOiBbXCJOR1wiLCAwLjAyMiwgMC4wMV0sXHJcbiAgICBcIk55bG9uIEZhYnJpY1wiOiBbXCJOTFwiLCAxLjEzLCAxXSxcclxuICAgIFwiTmV1cmFsIE5ldHdvcmtcIjogW1wiTk5cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBOb3p6bGVcIjogW1wiTk9aXCIsIDMsIDEuNV0sXHJcbiAgICBcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIjogW1wiTlJcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIk51dHJpZW50IFNvbHV0aW9uXCI6IFtcIk5TXCIsIDAuNiwgMC41XSxcclxuICAgIFwiTmV1cm9TdGltdWxhbnRzXCI6IFtcIk5TVFwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIE51dHNcIjogW1wiTlVUXCIsIDAuOSwgMV0sXHJcbiAgICBcIk5hdmlnYXRpb24gTW9kdWxlIE1LMVwiOiBbXCJOVjFcIiwgNC4yLCAyXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCI6IFtcIk5WMlwiLCA2LjcsIDNdLFxyXG4gICAgXCJPeHlnZW5cIjogW1wiT1wiLCAxLjE0MSwgMV0sXHJcbiAgICBcIk9mZmljZSBTdXBwbGllc1wiOiBbXCJPRkZcIiwgMC4wMiwgMC4yXSxcclxuICAgIFwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIjogW1wiT0xGXCIsIDAuMDEsIDAuMDAxXSxcclxuICAgIFwiT3BlcmF0aW5nIFN5c3RlbVwiOiBbXCJPU1wiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE92ZXJhbGxzXCI6IFtcIk9WRVwiLCAwLjAyLCAwLjAyNV0sXHJcbiAgICBcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiOiBbXCJQQ0JcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlBlcnNvbmFsIERhdGEgQXNzaXN0YW50XCI6IFtcIlBEQVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJQb2x5LUV0aHlsZW5lXCI6IFtcIlBFXCIsIDAuMDEsIDAuMDFdLFxyXG4gICAgXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIjogW1wiUEZFXCIsIDAuOSwgMV0sXHJcbiAgICBcIlBvbHltZXIgR3JhbnVsYXRlXCI6IFtcIlBHXCIsIDAuMDAyLCAwLjAwMV0sXHJcbiAgICBcIlBpbmViZXJyaWVzXCI6IFtcIlBJQlwiLCAwLjMsIDFdLFxyXG4gICAgXCJQYWlua2lsbGVyc1wiOiBbXCJQS1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJQb3dlciBDZWxsXCI6IFtcIlBPV1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJQcm90ZWluIFBhc3RlXCI6IFtcIlBQQVwiLCAyLCAxXSxcclxuICAgIFwiUHJlc3N1cmUgU2hpZWxkaW5nXCI6IFtcIlBTSFwiLCA0LjIsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBMXCI6IFtcIlBTTFwiLCAwLjA4LCAwLjhdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiOiBbXCJQU01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIFNcIjogW1wiUFNTXCIsIDAuMDEsIDAuMV0sXHJcbiAgICBcIlBvd2VyIFRvb2xzXCI6IFtcIlBUXCIsIDAuMjUsIDAuMl0sXHJcbiAgICBcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIjogW1wiUFdPXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIjogW1wiUUNSXCIsIDE0LCAxMF0sXHJcbiAgICBcIlJhZGlvIERldmljZVwiOiBbXCJSQURcIiwgMC4wMDMsIDAuMDA1XSxcclxuICAgIFwiUmFkaW9pc290b3BlIEdlbmVyYXRvclwiOiBbXCJSQUdcIiwgNSwgMy40XSxcclxuICAgIFwiTWVtb3J5IEJhbmtcIjogW1wiUkFNXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkJhc2ljIFJhdGlvbnNcIjogW1wiUkFUXCIsIDAuMjEsIDAuMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgQnVsa2hlYWRcIjogW1wiUkJIXCIsIDIuNCwgMC45XSxcclxuICAgIFwiUmF3IENvdHRvbiBGaWJlclwiOiBbXCJSQ09cIiwgMC45NSwgMV0sXHJcbiAgICBcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIjogW1wiUkNTXCIsIDAuNjcsIDAuNV0sXHJcbiAgICBcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCI6IFtcIlJDVFwiLCA3LCA0XSxcclxuICAgIFwiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIlJERVwiLCAxLjQsIDEuNV0sXHJcbiAgICBcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRExcIiwgMTUwLCAzMF0sXHJcbiAgICBcIlNtYWxsIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJSRFNcIiwgNTAsIDEwXSxcclxuICAgIFwiQ2hlbWljYWwgUmVhZ2VudHNcIjogW1wiUkVBXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJSZXNjdWUgRHJvbmVcIjogW1wiUkVEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlJlcGFpciBLaXRcIjogW1wiUkVQXCIsIDAuMDA2LCAwLjAwMl0sXHJcbiAgICBcIlJlaW5mb3JjZWQgR2xhc3NcIjogW1wiUkdcIiwgMC4wMzIsIDAuMDFdLFxyXG4gICAgXCJSZWQgR29sZFwiOiBbXCJSR09cIiwgMTkuMzIsIDFdLFxyXG4gICAgXCJSZWluZm9yY2VkIEh1bGwgUGxhdGVcIjogW1wiUkhQXCIsIDEyLCAxMF0sXHJcbiAgICBcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIjogW1wiUk9NXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJSU0VcIiwgMS45LCAwLjddLFxyXG4gICAgXCJSYWRpYXRpb24gU2hpZWxkaW5nXCI6IFtcIlJTSFwiLCAzLjcsIDAuOF0sXHJcbiAgICBcIlJhdyBTaWxrIFN0cmFpbnNcIjogW1wiUlNJXCIsIDEuMSwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiUlRBXCIsIDEuNSwgMC41XSxcclxuICAgIFwiU3VsZnVyXCI6IFtcIlNcIiwgMC41MiwgMC4yNV0sXHJcbiAgICBcIlNlYXJjaCBBbGdvcml0aG1cIjogW1wiU0FcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTb3J0aW5nIEFsZ29yaXRobVwiOiBbXCJTQUxcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTZW5zb3IgQXJyYXlcIjogW1wiU0FSXCIsIDEuNywgMl0sXHJcbiAgICBcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIjogW1wiU0NcIiwgMC4wNCwgMC4wMV0sXHJcbiAgICBcIlNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiU0NCXCIsIDUwLCA1MF0sXHJcbiAgICBcIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiOiBbXCJTQ05cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiU3VsZnVyIENyeXN0YWxzXCI6IFtcIlNDUlwiLCAyLjA1LCAxXSxcclxuICAgIFwiU3VyZ2ljYWwgRHJvbmVcIjogW1wiU0RSXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlBvbHktU3VsZml0ZSBTZWFsYW50XCI6IFtcIlNFQVwiLCAwLjE1LCAwLjA3XSxcclxuICAgIFwiU2Vuc29yXCI6IFtcIlNFTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdXJnaWNhbCBFcXVpcG1lbnRcIjogW1wiU0VRXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiU1RMIEZ1ZWxcIjogW1wiU0ZcIiwgMC4wNiwgMC4wNl0sXHJcbiAgICBcIlNtYWxsIEZUTCBFbWl0dGVyXCI6IFtcIlNGRVwiLCAwLjEsIDAuNF0sXHJcbiAgICBcIlNtYWxsIEZhc3RlbmVyIEtpdFwiOiBbXCJTRktcIiwgMC4wNCwgMC4wMl0sXHJcbiAgICBcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNGTFwiLCA5LCAxLjVdLFxyXG4gICAgXCJTaWxpY29uXCI6IFtcIlNJXCIsIDIuMzI5LCAxXSxcclxuICAgIFwiU2lsa2VuIEZhYnJpY1wiOiBbXCJTSUxcIiwgMS4yMSwgMV0sXHJcbiAgICBcIlNpbGljb24gT3JlXCI6IFtcIlNJT1wiLCAxLjc5LCAxXSxcclxuICAgIFwiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiOiBbXCJTTk1cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJBcnRpZmljaWFsIFNvaWxcIjogW1wiU09JXCIsIDAuOSwgMV0sXHJcbiAgICBcIlNvbGFyIENlbGxcIjogW1wiU09MXCIsIDAuMDE1LCAwLjAxXSxcclxuICAgIFwiU29sYXIgUGFuZWxcIjogW1wiU1BcIiwgMC4xNSwgMC4xXSxcclxuICAgIFwiU2hpcC1SZXBhaXIgRHJvbmVcIjogW1wiU1JEXCIsIDAuMywgMC4wNV0sXHJcbiAgICBcIlNwZWNpYWxpemVkIEFudGktcmFkIFBsYXRlXCI6IFtcIlNSUFwiLCAwLjEsIDAuMl0sXHJcbiAgICBcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIjogW1wiU1NDXCIsIDEsIDFdLFxyXG4gICAgXCJTbWFsbCBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJTU0xcIiwgMjAsIDIwXSxcclxuICAgIFwiU3RlZWxcIjogW1wiU1RMXCIsIDcuODUsIDFdLFxyXG4gICAgXCJNZWRpY2FsIFN0cmV0Y2hlclwiOiBbXCJTVFJcIiwgMC4wMSwgMV0sXHJcbiAgICBcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiOiBbXCJTVFNcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJTdXJnZXJ5IFVuaXRcIjogW1wiU1VcIiwgNiwgNV0sXHJcbiAgICBcIlN1cnZlaWxsYW5jZSBEcm9uZVwiOiBbXCJTVURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU2FmZXR5IFVuaWZvcm1cIjogW1wiU1VOXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJTbWFsbCBXYWZlclwiOiBbXCJTV0ZcIiwgMC4wMDMsIDAuMDAzXSxcclxuICAgIFwiVGFudGFsdW1cIjogW1wiVEFcIiwgMTYuNjUsIDFdLFxyXG4gICAgXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIjogW1wiVEFDXCIsIDAuMTUsIDFdLFxyXG4gICAgXCJUYW50YWxpdGUgUm9ja1wiOiBbXCJUQUlcIiwgNy45NCwgMV0sXHJcbiAgICBcIlRlY2huZXRpdW1cIjogW1wiVENcIiwgMTEuOCwgMV0sXHJcbiAgICBcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiOiBbXCJUQ0JcIiwgMjAsIDIwXSxcclxuICAgIFwiVENMIEFjaWRcIjogW1wiVENMXCIsIDAuMDksIDAuMV0sXHJcbiAgICBcIlRlY2huZXRpdW0gT3hpZGVcIjogW1wiVENPXCIsIDkuOCwgMV0sXHJcbiAgICBcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiOiBbXCJUQ1NcIiwgMy40LCAxLjJdLFxyXG4gICAgXCJUcmF1bWEgQ2FyZSBVbml0XCI6IFtcIlRDVVwiLCA1LCA0XSxcclxuICAgIFwiVGhlcm1vRmx1aWRcIjogW1wiVEhGXCIsIDAuNiwgMC4zNV0sXHJcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiOiBbXCJUSFBcIiwgMi4yLCAxXSxcclxuICAgIFwiVGl0YW5pdW1cIjogW1wiVElcIiwgNC41LCAxXSxcclxuICAgIFwiVGl0YW5pdW0gT3JlXCI6IFtcIlRJT1wiLCAxLjU4LCAxXSxcclxuICAgIFwiVGVjaG5vS2V2bGFyIEZhYnJpY1wiOiBbXCJUS1wiLCAxLjg5LCAxXSxcclxuICAgIFwiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiOiBbXCJUUFVcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiQXVkaW8gVHJhbnNtaXR0ZXJcIjogW1wiVFJBXCIsIDAuMDA1LCAwLjAwMl0sXHJcbiAgICBcIkFkdmFuY2VkIFRyYW5zaXN0b3JcIjogW1wiVFJOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlRydXNzXCI6IFtcIlRSVVwiLCAwLjEsIDEuNV0sXHJcbiAgICBcIlRlY3Rvc2lsaXNpdGVcIjogW1wiVFNcIiwgMi40LCAxXSxcclxuICAgIFwiVGhlcm1hbCBTaGllbGRpbmdcIjogW1wiVFNIXCIsIDIuNCwgMS41XSxcclxuICAgIFwiVGVzdCBUdWJlc1wiOiBbXCJUVUJcIiwgMC4wMDIsIDAuMDAyXSxcclxuICAgIFwiVW5pdmVyc2FsIFRvb2xzZXRcIjogW1wiVVRTXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCI6IFtcIlZDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlRyaWdseWNlcmlkZSBGcnVpdHNcIjogW1wiVkVHXCIsIDEuMSwgMV0sXHJcbiAgICBcIlZpdGFHZWxcIjogW1wiVkdcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiVml0YSBFc3NlbmNlXCI6IFtcIlZJVFwiLCAwLjksIDFdLFxyXG4gICAgXCJWZXJ5IFNtYWxsIENhcmdvIEJheSBLaXRcIjogW1wiVlNDXCIsIDM1LCAzNV0sXHJcbiAgICBcIlR1bmdzdGVuXCI6IFtcIldcIiwgNy41MTksIDFdLFxyXG4gICAgXCJXZWFrIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCI6IFtcIldBSVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFscGhhLVN0YWJpbGl6ZWQgVHVuZ3N0ZW5cIjogW1wiV0FMXCIsIDYuMjUsIDFdLFxyXG4gICAgXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiOiBbXCJXQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJTbWFydCBaaW5mYW5kZWxcIjogW1wiV0lOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiV2luZG93IE1hbmFnZXJcIjogW1wiV01cIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiOiBbXCJXT1JcIiwgNSwgNV0sXHJcbiAgICBcIldhdGVyIFJlY2xhaW1lclwiOiBbXCJXUlwiLCA2LjQsIDVdLFxyXG4gICAgXCJTY2llbnRpZmljIFdvcmsgU3RhdGlvblwiOiBbXCJXU1wiLCAwLjA1LCAwLjVdLFxyXG4gICAgXCJaaXJjb24gQ3J5c3RhbHNcIjogW1wiWklSXCIsIDQuODUsIDFdLFxyXG4gICAgXCJaaXJjb25pdW1cIjogW1wiWlJcIiwgNi41MywgMV0sXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dhbWVQcm9wZXJ0aWVzLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTdHlsZSA9IHtcclxuICAgIEJ1dHRvbjogW1wiZk1XNjJjRVJubHp4WlBGaG5sUE9lUT09XCJdLFxyXG4gICAgQnV0dG9uUHJpbWFyeTogW1wia2dHc0ROdkRvV2o2MXc0STdWQWxmQT09XCJdLFxyXG4gICAgQnV0dG9uU3VjY2VzczogW1wiUVc4MHh2ZVFtMkdFU2tTT1JSSDI0Zz09XCJdLFxyXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJaRlhXeTRIQ256dHBaTmxDWGs4M3dRPT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkhlYWQ6IFtcIl8yWXJPTTctMnNkSzA0MlZ2SDZXYUpnPT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIl0sXHJcbiAgICBTaWRlYmFyU2VjdGlvbkNvbnRlbnQ6IFtcIkNOME5QTm92bFl0YUltNGJxSEZiTHc9PVwiLCBcImZUVDUyaSsxb0ZhdXhIT2pWZkdUd3c9PVwiXSxcclxuICAgIFNpZGViYXJMaW5lOiBbXCJ5ODRFVUk4Z0NQLVNWOTFYN3ZJaWhRPT1cIiwgXCJmVmQzYVlKaEZZLXV1YUgrUVRCeWhBPT1cIl0sXHJcbiAgICBGb250c1JlZ3VsYXI6IFtcIkNCb3JJYkZDNll0K0ZSWUVIWnl1YUE9PVwiXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFdpdGhTdHlsZXMgPSAoLi4uc3R5bGUpID0+IHtcclxuICAgIHJldHVybiBzdHlsZS5yZWR1Y2UoKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUuY29uY2F0KGN1cnJlbnRWYWx1ZSkpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFRleHRDb2xvcnMgPSB7XHJcbiAgICBGYWlsdXJlOiBcIiNkOTUzNGZcIixcclxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxyXG4gICAgU3RhbmRhcmQ6IFwiI2JiYmJiYlwiXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbG9ycyA9IHtcclxuICAgIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NiwgMjAsIDE0NyksIHJnYigxMTEsIDQ1LCAxNzIpKVwiLCBcInJnYigyMTMsIDE0NywgMjU1KVwiXSxcclxuICAgIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1LCAzMCwgOTgpLCByZ2IoNDAsIDU1LCAxMjMpKVwiLCBcInJnYigxNDIsIDE1NywgMjI1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MSwgMjYsIDc2KSwgcmdiKDc2LCA1MSwgMTAxKSlcIiwgXCJyZ2IoMTc4LCAxNTMsIDIwMylcIl0sXHJcbiAgICBcIm1lZGljYWwgZXF1aXBtZW50XCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4NSwgMTcwLCA4NSksIHJnYigxMTAsIDE5NSwgMTEwKSlcIiwgXCJyZ2IoMjEyLCAyNTUsIDIxMilcIl0sXHJcbiAgICBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDEsIDc3LCAxMDcpLCByZ2IoNjYsIDEwMiwgMTMyKSlcIiwgXCJyZ2IoMTY4LCAyMDQsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgZW5naW5lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTUzLCA0MSwgMCksIHJnYigxNzgsIDY2LCAyNSkpXCIsIFwicmdiKDI1NSwgMTY4LCAxMjcpXCJdLFxyXG4gICAgXCJzaGlwIHBhcnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDk5LCAwKSwgcmdiKDE3OCwgMTI0LCAyNSkpXCIsIFwicmdiKDI1NSwgMjI2LCAxMjcpXCJdLFxyXG4gICAgXCJtZXRhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDU0LCA1NCwgNTQpLCByZ2IoNzksIDc5LCA3OSkpXCIsIFwicmdiKDE4MSwgMTgxLCAxODEpXCJdLFxyXG4gICAgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTM2LCAyNCwgMzkpLCByZ2IoMTYxLCA0OSwgNjQpKVwiLCBcInJnYigyNTUsIDE1MSwgMTY2KVwiXSxcclxuICAgIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig5MiwgMTgsIDE4KSwgcmdiKDExNywgNDMsIDQzKSlcIiwgXCJyZ2IoMjE5LCAxNDUsIDE0NSlcIl0sXHJcbiAgICBcIm9yZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA4NywgOTcpLCByZ2IoMTA3LCAxMTIsIDEyMikpXCIsIFwicmdiKDIwOSwgMjE0LCAyMjQpXCJdLFxyXG4gICAgXCJnYXNlc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMTA1LCAxMDcpLCByZ2IoMjUsIDEzMCwgMTMyKSlcIiwgXCJyZ2IoMTI3LCAyMzIsIDIzNClcIl0sXHJcbiAgICBcInNoaXAgc2hpZWxkc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjI0LCAxMzEsIDApLCByZ2IoMjQ5LCAxNTYsIDI1KSlcIiwgXCJyZ2IoMjMwIDIzMCwxMjcpXCJdLFxyXG4gICAgXCJhbGxveXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMywgNzYsIDMwKSwgcmdiKDE0OCwgMTAxLCA1NSkpXCIsIFwicmdiKDI1MCwgMjAzLCAxNTcpXCJdLFxyXG4gICAgXCJjaGVtaWNhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDIwOCwgNzEsIDExNikpXCIsIFwicmdiKDI1NSwgMTczLCAyMTgpXCJdLFxyXG4gICAgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMzYsIDEyMSwgNDcpLCByZ2IoMTYxLCAxNDYsIDcyKSlcIiwgXCJyZ2IoMjU1LCAyNDgsIDE3NClcIl0sXHJcbiAgICBcImVsZWN0cm9uaWMgcGllY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTksIDgyLCAxODkpLCByZ2IoMTQ0LCAxMDcsIDIxNCkpXCIsIFwicmdiKDI0NiwgMjA5LCAyNTUpXCJdLFxyXG4gICAgXCJlbGVtZW50c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjEsIDQ2LCAzMiksIHJnYig4NiwgNzEsIDU3KSlcIiwgXCJyZ2IoMTg4LCAxNzMsIDE1OSlcIl0sXHJcbiAgICBcIm1pbmVyYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsIDExMywgNzMpLCByZ2IoMTc4LCAxMzgsIDk4KSlcIiwgXCJyZ2IoMjU1LCAyNDAsIDIwMClcIl0sXHJcbiAgICBcInVuaXQgcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjksIDI3LCAyOCksIHJnYig1NCwgNTIsIDUzKSlcIiwgXCJyZ2IoMTU2LCAxNTQsIDE1NSlcIl0sXHJcbiAgICBcImxpcXVpZHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNCwgMTY0LCAyMDIpLCByZ2IoMTM5LCAxODksIDIyNykpXCIsIFwicmdiKDI0MSwgMjU1LCAyNTUpXCJdLFxyXG4gICAgXCJlbmVyZ3kgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjEsIDYyLCAzOSksIHJnYig0NiwgODcsIDY0KSlcIiwgXCJyZ2IoMTQ4LCAxODksIDE2NilcIl0sXHJcbiAgICBcImRyb25lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQwLCA1MiwgMTgpLCByZ2IoMTY1LCA3NywgNDMpKVwiLCBcInJnYigyNTUsIDE3OSwgMTQ1KVwiXSxcclxuICAgIFwiZWxlY3Ryb25pYyBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoOTEsIDQ2LCAxODMpLCByZ2IoMTE2LCA3MSwgMjA4KSlcIiwgXCJyZ2IoMjE4LCAxNzMsIDI1NSlcIl0sXHJcbiAgICBcInRleHRpbGVzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig4MiwgOTAsIDMzKSwgcmdiKDEwNywgMTE1LCA1OCkpXCIsIFwicmdiKDIwOSwgMjE3LCAxNjApXCJdLFxyXG4gICAgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyNCwgOTEsIDIxMSksIHJnYig0OSwgMTE2LCAyMzYpKVwiLCBcInJnYigxNTEsIDIxOCwgMjU1KVwiXSxcclxuICAgIFwic29mdHdhcmUgdG9vbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyOSwgOTgsIDE5KSwgcmdiKDE1NCwgMTIzLCA0NCkpXCIsIFwicmdiKDI1NSwgMjU1LCAxNDYpXCJdLFxyXG4gICAgXCJwbGFzdGljc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIxLCAzMSwgNjApLCByZ2IoMTQ2LCA1NiwgODUpKVwiLCBcInJnYigyNDgsIDE1OCwgMTg3KVwiXSxcclxuICAgIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ5LCA0NiwgNDYpLCByZ2IoMTc0LCA3MSwgNzEpKVwiLCBcInJnYigyNTUsIDE3MywgMTczKVwiXSxcclxuICAgIFwiZnVlbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDMwLCAxMjMsIDMwKSwgcmdiKDU1LCAxNDgsIDU1KSlcIiwgXCJyZ2IoMTU3LCAyNTAsIDE1NylcIl0sXHJcbiAgICBcInNvZnR3YXJlIHN5c3RlbXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYwLCA1MywgNSksIHJnYig4NSwgNzgsIDMwKSlcIiwgXCJyZ2IoMTg3LCAxODAsIDEzMilcIl0sXHJcbiAgICBcInNoaXAga2l0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU0LCA4NCwgMCksIHJnYigxNzgsIDEwOSwgMjUpKVwiLCBcInJnYigyNTUsIDIxMSwgMTI3KVwiXSxcclxuICAgIFwidXRpbGl0eVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTYxLCAxNDgsIDEzNiksIHJnYigxODYsIDE3MywgMTYxKSlcIiwgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIl0sXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEZsaWdodEVUQXMgfSBmcm9tIFwiLi9GbGlnaHRFVEFzXCI7XHJcbmltcG9ydCB7IExvY2FsTWFya2V0QWRzIH0gZnJvbSAnLi9Mb2NhbE1hcmtldEFkcyc7XHJcbmltcG9ydCB7IE1vZHVsZVJ1bm5lciB9IGZyb20gXCIuL01vZHVsZVJ1bm5lclwiO1xyXG5pbXBvcnQgeyBPcmRlckVUQXMgfSBmcm9tIFwiLi9PcmRlckVUQXNcIjtcclxuaW1wb3J0IHsgQ29uc3VtYWJsZVRpbWVycyB9IGZyb20gXCIuL0NvbnN1bWFibGVUaW1lcnNcIjtcclxuaW1wb3J0IHsgRmxlZXRFVEFzIH0gZnJvbSBcIi4vRmxlZXRFVEFzXCI7XHJcbmltcG9ydCB7IFBvc3RMTSB9IGZyb20gXCIuL1Bvc3RMTVwiO1xyXG5pbXBvcnQgeyBTaGlwcGluZ0FkcyB9IGZyb20gXCIuL1NoaXBwaW5nQWRzXCI7XHJcbmltcG9ydCB7IFF1ZXVlTG9hZCB9IGZyb20gXCIuL1F1ZXVlTG9hZFwiO1xyXG5pbXBvcnQgeyBYSVRIYW5kbGVyIH0gZnJvbSBcIi4vWElUSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRQcmljZXMsIGdldEJ1cm4gfSBmcm9tIFwiLi9CYWNrZ3JvdW5kUnVubmVyXCI7XHJcbnRyeSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFwiQUhJQmVhdXRpZmllcl9EYXRhXCIpLnRoZW4obWFpblJ1biwgb25FcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmVGb3ggZGV0ZWN0ZWRcIik7XHJcbn1cclxuY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJDaHJvbWl1bSBkZXRlY3RlZFwiKTtcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBtYWluUnVuKHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBtYWluUnVuKHJlc3VsdCkge1xyXG4gICAgaWYgKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQgPSB7IFwiQUhJQmVhdXRpZmllcl9EYXRhXCI6IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXSB9O1xyXG4gICAgfVxyXG4gICAgdmFyIHByaWNlcyA9IHt9O1xyXG4gICAgZ2V0UHJpY2VzKHByaWNlcywgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzJdKTtcclxuICAgIHZhciBidXJuID0gW107XHJcbiAgICBnZXRCdXJuKGJ1cm4sIHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVswXSwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzFdKTtcclxuICAgIGNvbnN0IHJ1bm5lciA9IG5ldyBNb2R1bGVSdW5uZXIoW1xyXG4gICAgICAgIG5ldyBMb2NhbE1hcmtldEFkcygpLFxyXG4gICAgICAgIG5ldyBPcmRlckVUQXMoKSxcclxuICAgICAgICBuZXcgRmxpZ2h0RVRBcygpLFxyXG4gICAgICAgIG5ldyBTaGlwcGluZ0FkcygpLFxyXG4gICAgICAgIG5ldyBQb3N0TE0ocHJpY2VzKSxcclxuICAgICAgICBuZXcgUXVldWVMb2FkKCksXHJcbiAgICAgICAgbmV3IENvbnN1bWFibGVUaW1lcnMoYnVybiksXHJcbiAgICAgICAgbmV3IEZsZWV0RVRBcygpLFxyXG4gICAgICAgIG5ldyBYSVRIYW5kbGVyKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsxXSwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzJdLCBidXJuKSxcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9ucygpXHJcbiAgICBdKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn1cclxuZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxpZ2h0RVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2ZjLWV0YVwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJTRkMgXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEocGFyc2VEdXJhdGlvbihldGFEYXRhLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsaWdodEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFJhdGluZ0NvbG9ycyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbE1hcmtldEFkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbG0tYWRzXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRleHQgJiYgdGV4dC5tYXRjaCgvKEJVWUlOR3xTRUxMSU5HfENPUlApXFxzKFxcZCspXFxzLipcXHNAXFxzKFtcXGQsLl0rKVxcc1tBLVpdK1xcc2Zvci8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENlbnRzID0gcGFyc2VJbnQobWF0Y2hlc1szXS5yZXBsYWNlKC9bLC5dL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxDZW50cyA8PSAtMTAwIHx8IHRvdGFsQ2VudHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gUmF0aW5nQ29sb3JzW2VsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgfHwgXCJQXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSB0b0ZpeGVkKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VTcGFuLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7cGVySXRlbX0gZWEpYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Mb2NhbE1hcmtldEFkcy50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5leHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZXMpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzLm1hcChtID0+IHRoaXMubW9kdWxlVG9NRShtKSk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gbmV3IFNpZGViYXIodGhpcy5tb2R1bGVzKTtcclxuICAgICAgICB0aGlzLm1vZHVsZXMucHVzaCh0aGlzLm1vZHVsZVRvTUUodGhpcy5zaWRlYmFyKSk7XHJcbiAgICB9XHJcbiAgICBtb2R1bGVUb01FKG1vZHVsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vZHVsZSxcclxuICAgICAgICAgICAgbmFtZTogbW9kdWxlLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBjbGVhbnVwVGltZTogMCxcclxuICAgICAgICAgICAgcnVuVGltZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVuVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDE7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5ydW5UaW1lICs9IHJ1blRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvb3AoKSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kdWxlUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tIFwiLi9TdHlsZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxpc3QpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItc2lkZWJhclwiO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaDMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQTU1HIEJlYXV0aWZpZXJcIikpO1xyXG4gICAgICAgIGgzLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcclxuICAgICAgICBhcmVhLmFwcGVuZENoaWxkKGgzKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25Db250ZW50KTtcclxuICAgICAgICBhcmVhLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMubGlzdC5tYXAobXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLlNpZGViYXJMaW5lLCBTdHlsZS5Gb250c1JlZ3VsYXIpKTtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihtcC5uYW1lKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHJpZ2h0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgbGluZS5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB0b0ZpeGVkKChtcC5jbGVhbnVwVGltZSArIG1wLnJ1blRpbWUpIC8gbXAuY291bnQsIDIpO1xyXG4gICAgICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgJHt0aW1lfW1zIGApKTtcclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gdGhpcy5tYWtlVG9nZ2xlQnV0dG9uKFwiT25cIiwgXCJPZmZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbXAuZW5hYmxlZCA9ICFtcC5lbmFibGVkO1xyXG4gICAgICAgICAgICB9LCBtcC5lbmFibGVkKTtcclxuICAgICAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY2xlYW51cCA9IHRoaXMubWFrZVB1c2hCdXR0b24oXCJ4XCIsICgpID0+IG1wLm1vZHVsZS5jbGVhbnVwKCkpO1xyXG4gICAgICAgICAgICByaWdodC5hcHBlbmRDaGlsZChjbGVhbnVwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU2lkZWJhcikpLmZvckVhY2goc2lkZWJhciA9PiB7XHJcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYXJlYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHVzaEJ1dHRvbih0ZXh0LCBmLCBzdHlsZSA9IFN0eWxlLkJ1dHRvblByaW1hcnkpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRhZyk7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcbiAgICBtYWtlVG9nZ2xlQnV0dG9uKG9uLCBvZmYsIGYsIHN0YXRlID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xyXG4gICAgICAgIGNvbnN0IGdldFN0YXRlID0gISF0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgfHwgc3RhdGU7XHJcbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSBzID0+IHtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIFN0cmluZyhzKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzZXRMb29rID0gKHMpID0+IHtcclxuICAgICAgICAgICAgdG9nZ2xlLmlubmVyVGV4dCA9IHMgPyBvbiA6IG9mZjtcclxuICAgICAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvblByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgc2V0TG9vayhzdGF0ZSk7XHJcbiAgICAgICAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gIWdldFN0YXRlO1xyXG4gICAgICAgICAgICBzZXRMb29rKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdG9nZ2xlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NpZGViYXIudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgT3JkZXJFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1vcmRlci1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuYmVhdXRpZnlPcmRlcnMoKTtcclxuICAgIH1cclxuICAgIGJlYXV0aWZ5T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlByb2RRdWV1ZSkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2gocXVldWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kU2xvdHMgPSBBcnJheS5mcm9tKHF1ZXVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdmFyIGluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxpbmVUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBwcm9kU2xvdHMuZm9yRWFjaChwcm9kSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLlByb2RJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBsaW5lVGltZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCArPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMgPSBsaW5lVGltZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgLSBtaW5UaW1lOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGltZXMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kSXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2NvbnZlcnREdXJhdGlvblRvRVRBKGR1cmF0aW9uICsgdGltZUVsYXBzZWQpfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaW1lcy5wdXNoKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7Y29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvT3JkZXJFVEFzLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHBhcnNlQmFzZU5hbWUsIGZpbmRCdXJuQW1vdW50LCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCwgZmluZEludmVudG9yeUFtb3VudCwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBDb25zdW1hYmxlVGltZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1cm4pIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItY29uc3VtYWJsZS10aW1lcnNcIjtcclxuICAgICAgICB0aGlzLmJ1cm4gPSBidXJuO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVybi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiV0ZcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkIHx8IGJ1ZmZlcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCdXJucyhidWZmZXIsIHRoaXMuYnVybik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJ1cm5zKGJ1ZmZlciwgYnVybikge1xyXG4gICAgY29uc3QgbmFtZUVsZW0gPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5Xb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlKTtcclxuICAgIGlmIChuYW1lRWxlbSA9PSBudWxsIHx8IG5hbWVFbGVtID09IHVuZGVmaW5lZCB8fCBuYW1lRWxlbS50ZXh0Q29udGVudCA9PSBudWxsIHx8IG5hbWVFbGVtLnRleHRDb250ZW50ID09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCBuYW1lID0gcGFyc2VCYXNlTmFtZShuYW1lRWxlbS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGhlYWQgPiB0clwiKSk7XHJcbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEhlYWRlciA9IGhlYWRlci5jaGlsZHJlblsyXTtcclxuICAgICAgICBjb25zdCBidXJuSGVhZGVyID0gaGVhZGVyLmNoaWxkcmVuWzNdO1xyXG4gICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgIGlmIChidXJuSGVhZGVyLmNoaWxkcmVuICE9IHVuZGVmaW5lZCAmJiBidXJuSGVhZGVyLmNoaWxkcmVuWzBdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXJuSGVhZGVyLnJlbW92ZUNoaWxkKGJ1cm5IZWFkZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXJuSGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJuXCI7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBsYW5ldEJ1cm4gPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChuYW1lLCBidXJuKTtcclxuICAgIGlmIChwbGFuZXRCdXJuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldFJvdy5jaGlsZEVsZW1lbnRDb3VudCA8IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzRdO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnZlbnRvcnlBbW91bnQgPSBmaW5kSW52ZW50b3J5QW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgcGxhbmV0QnVybik7XHJcbiAgICAgICAgICAgIHZhciBidXJuQW1vdW50ID0gZmluZEJ1cm5BbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBwbGFuZXRCdXJuKTtcclxuICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xyXG4gICAgICAgICAgICBpZiAoYnVybkFtb3VudCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoaW52ZW50b3J5QW1vdW50IC8gYnVybkFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNWEzMTMwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5jb2xvciA9IFwiI2M1OWM5YlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5c0xlZnQgPD0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODM2ZTI0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5jb2xvciA9IFwiI2Y2ZGY5NFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzNDUwMzRcIjtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnN0eWxlLmNvbG9yID0gXCIjOWZiYjlmXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IGRheXNMZWZ0LnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNMZWZ0ICs9IFwiIERheVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBmaXJzdENoaWxkID0gb3V0cHV0RGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dERhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oZGF5c0xlZnQpKTtcclxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHRvdGFsRGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbERhdGEucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGJ1cm5BbW91bnQgPT0gMCA/IFwiXCIgOiBidXJuQW1vdW50LnRvRml4ZWQoMikpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Db25zdW1hYmxlVGltZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub0VUQSwgcGFyc2VEdXJhdGlvbiwgY3JlYXRlVGV4dFNwYW4sIGdlbmVyaWNDbGVhbnVwLCBnZXRCdWZmZXJzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgRmxlZXRFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1mbHQtZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIkZMVFwiKTtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGFEYXRhID0gdGFyZ2V0Um93LmNoaWxkcmVuWzddO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV0YURhdGEudGV4dENvbnRlbnQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV0YSA9IGNvbnZlcnREdXJhdGlvblRvRVRBKHBhcnNlRHVyYXRpb24oZXRhRGF0YS50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV0YURhdGEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtldGF9KWAsIHRoaXMudGFnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9GbGVldEVUQXMudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxzLCBDdXJyZW5jeVN5bWJvbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBQb3N0TE0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1wb3N0LWxtLXByaWNlXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZXMgPSBwcmljZXM7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFudXBzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuTE1Qb3N0Rm9ybSkpLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJDLUVDYi1vdmUxdGxhNnFzaVY0M2V3PT0gaXZHMjRxdFE5MmtieXNMVE5lV0p2dz09XCIpKTtcclxuICAgICAgICAgICAgdmFyIHNoaXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW0gb2YgdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQgPT0gXCJTSElQUElOR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1vZGl0eSA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZGl2W2xhYmVsL3NwYW5bdGV4dCgpPSdDb21tb2RpdHknXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0Ftb3VudCddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxQcmljZUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J1RvdGFsIHByaWNlJ11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUlucHV0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0N1cnJlbmN5J11dLy9zZWxlY3RcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlFbGVtZW50ID0gY3JlYXRlVGV4dFNwYW4oXCItLVwiLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgICAgIGlmIChzaGlwcGluZyAmJiBjb21tb2RpdHkudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRJbmZvID0gTWF0ZXJpYWxzW2NvbW1vZGl0eS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jeUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gQ3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRJbmZvID09IHVuZGVmaW5lZCB8fCBtYXRJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gbWF0SW5mb1sxXSA+PSBtYXRJbmZvWzJdID8gXCJ0XCIgOiBcIm3Cs1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodHZvbHVtZSA9IE1hdGgubWF4KG1hdEluZm9bMV0sIG1hdEluZm9bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih3ZWlnaHR2b2x1bWUpIHx8IGlzTmFOKHRvdGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IFwiLS0gdCB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyBcIi0tIC8gdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkgKyBcIiBcIiArIHVuaXQgKyBcIiB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgLyBcIiArIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJpY2VzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pICsgXCIgZWFcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb21tb2RpdHkudmFsdWUgIT0gdW5kZWZpbmVkICYmIE1hdGVyaWFsc1tjb21tb2RpdHkudmFsdWVdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlID0gdGhpcy5wcmljZXNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYW1vdW50ICsgXCIgXCIgPT0gXCJOYU4gXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIiB8IFwiICsgKHByaWNlICogYW1vdW50KS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgKyBcIiBUb3RhbCBDb3JwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyBhbW91bnQpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSArIFwiIGVhXCIgKyAocHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVByaWNlUGVyVW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUG9zdExNLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaGlwcGluZy1hZHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oPzpTSElQUElORylcXHMoW1xcZC5dKyl0XFxzXFwvXFxzKFtcXGQuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0b25uYWdlID4gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcclxuICAgICAgICAgICAgICAgIHByaWNlU3Bhbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3Blckl0ZW19LyR7dW5pdH0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24sIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWV1ZUxvYWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XHJcbiAgICB9XHJcbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XHJcbiAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBwYXJzZUR1cmF0aW9uKGV0YVNwYW4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZVF1ZXVlTG9hZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keTpudGgtb2YtdHlwZSgyKSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIG47XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IHRvRml4ZWQoZXRhIC8gdG90YWxUaW1lICogMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVUZXh0U3BhbihgICR7cGVyY2VudH0lYCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgWElUUHJlRnVuY3Rpb25zLCBYSVRCdWZmZXJUaXRsZXMgfSBmcm9tIFwiLi9YSVRGdW5jdGlvbnNcIjtcclxuZXhwb3J0IGNsYXNzIFhJVEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBpa2V5LCB3ZWJhcHBJRCwgYnVybikge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLmFwaWtleSA9IGFwaWtleTtcclxuICAgICAgICB0aGlzLndlYmFwcElEID0gd2ViYXBwSUQ7XHJcbiAgICAgICAgdGhpcy5idXJuID0gYnVybjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGdldEJ1ZmZlcnMoXCJYSVRcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1cm4gPSB0aGlzLmJ1cm47XHJcbiAgICAgICAgYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0aWxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZSk7XHJcbiAgICAgICAgICAgIGlmICh0aWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUgPSBidWZmZXIucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5YSVRUaWxlRmxvYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aWxlID09IG51bGwgfHwgdGlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZS5jaGlsZHJlblsxXSAhPSB1bmRlZmluZWQgJiYgdGlsZS5jaGlsZHJlblsxXS5pZCA9PSBcInBtbWctbG9hZC1zdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzUmF3ID0gQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJIZWFkZXIpKVswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNSYXcgPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnNSYXcgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzUmF3LnNsaWNlKDQpLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnMgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRpbGUuY2hpbGRyZW5bMV0gIT0gdW5kZWZpbmVkICYmIHRpbGUuY2hpbGRyZW5bMV0uaWQgPT0gXCJwbW1nLXJlbG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBYSVRQcmVGdW5jdGlvbnNbcGFyYW1ldGVyc1swXS50b1VwcGVyQ2FzZSgpXSh0aWxlLmNoaWxkcmVuWzFdLCBwYXJhbWV0ZXJzLCB0aGlzLmFwaWtleSwgdGhpcy53ZWJhcHBJRCwgYnVybik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyMjIyMjJcIjtcclxuICAgICAgICAgICAgdGlsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI0cHhcIjtcclxuICAgICAgICAgICAgdGlsZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHRpbGUuc3R5bGUuZmxleEZsb3cgPSBcImNvbHVtblwiO1xyXG4gICAgICAgICAgICBjb25zdCB0b3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b3BEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgdG9wRGl2LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0b3BEaXYpO1xyXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4p+zXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjdhNjAwXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2hCdXR0b24uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLnBhZGRpbmcgPSBcIjBweCA4cHhcIjtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTFweFwiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLnN0eWxlLm1hcmdpbiA9IFwiNHB4IDhweFwiO1xyXG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHsgdGhpcy5zdHlsZS5jb2xvciA9IFwiIzFlMWUxZVwiOyB9KTtcclxuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7IHRoaXMuc3R5bGUuY29sb3IgPSBcIiNlZWVlZWVcIjsgfSk7XHJcbiAgICAgICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChyZWZyZXNoQnV0dG9uKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgY29uc3QgcHJlRnVuYyA9IFhJVFByZUZ1bmN0aW9uc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICBpZiAocHJlRnVuYyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBGdW5jdGlvbiFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVyVGl0bGUpKVswXS50ZXh0Q29udGVudCA9IFhJVEJ1ZmZlclRpdGxlc1twYXJhbWV0ZXJzWzBdLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpa2V5ID0gdGhpcy5hcGlrZXk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJhcHBJRCA9IHRoaXMud2ViYXBwSUQ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBwcmVGdW5jKGNvbnRlbnREaXYsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQsIGJ1cm4pOyB9KTtcclxuICAgICAgICAgICAgICAgIHByZUZ1bmMoY29udGVudERpdiwgcGFyYW1ldGVycywgdGhpcy5hcGlrZXksIHRoaXMud2ViYXBwSUQsIGJ1cm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9YSVRIYW5kbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgY3JlYXRlTWF0ZXJpYWxFbGVtZW50LCBjcmVhdGVGaW5hbmNpYWxUZXh0Qm94LCBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldCB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgVGV4dENvbG9ycyB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY29uc3QgWElUUHJlRnVuY3Rpb25zID0ge1xyXG4gICAgXCJJTlZcIjogRklPSW52X3ByZSxcclxuICAgIFwiRElTQ09SRFwiOiBEaXNjb3JkX3ByZSxcclxuICAgIFwiU0hFRVRTXCI6IFNoZWV0c19wcmUsXHJcbiAgICBcIlBST1NQRVJJVFlcIjogUHJvc3Blcml0eV9wcmUsXHJcbiAgICBcIlBSVU5cIjogUFJ1Tl9wcmUsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogU2hlZXRUYWJsZV9wcmUsXHJcbiAgICBcIkZJTlwiOiBGaW5fcHJlLFxyXG4gICAgXCJDSEFUXCI6IENoYXRfcHJlLFxyXG4gICAgXCJCVVJOXCI6IEVuaGFuY2VkQnVybl9wcmVcclxufTtcclxuZXhwb3J0IGNvbnN0IFhJVEJ1ZmZlclRpdGxlcyA9IHtcclxuICAgIFwiSU5WXCI6IFwiRklPIElOVkVOVE9SWVwiLFxyXG4gICAgXCJESVNDT1JEXCI6IFwiRElTQ09SRCBTRVJWRVJcIixcclxuICAgIFwiU0hFRVRTXCI6IFwiR09PR0xFIFNIRUVUU1wiLFxyXG4gICAgXCJQUk9TUEVSSVRZXCI6IFwiUFJPU1BFUklUWVwiLFxyXG4gICAgXCJQUlVOXCI6IFwiUFJVTi1DRVBUSU9OXCIsXHJcbiAgICBcIlNIRUVUVEFCTEVcIjogXCJHT09HTEUgU0hFRVRTIFRBQkxFXCIsXHJcbiAgICBcIkZJTlwiOiBcIkZJTkFOQ0lBTCBPVkVSVklFV1wiLFxyXG4gICAgXCJDSEFUXCI6IFwiQ0hBVFwiLFxyXG4gICAgXCJCVVJOXCI6IFwiRU5IQU5DRUQgQlVSTlwiXHJcbn07XHJcbmNvbnN0IERpc2NvcmRTZXJ2ZXJzID0ge1xyXG4gICAgXCJVRk9cIjogW1wiODU1NDg4MzA5ODAyMTcyNDY5XCIsIFwiODU1NDg5NzExNjM1NDMxNDc1XCJdLFxyXG4gICAgXCJGSU9DXCI6IFtcIjgwNzk5MjY0MDI0NzMwMDExNlwiLCBcIjgwODQ1MTUxMjM1MTE5NTE2NlwiXSxcclxuICAgIFwiQUhJXCI6IFtcIjcwNDkwNzcwNzYzNDk0MTk4MlwiLCBcIjc5NzE1Nzg3NzMyNDE4NTY1MFwiXSxcclxuICAgIFwiUENUXCI6IFtcIjY2NzU1MTQzMzUwMzAxNDkyNFwiLCBcIjY2NzU1MTQzMzUwMzAxNDkyN1wiXVxyXG59O1xyXG5mdW5jdGlvbiBYSVRXZWJSZXF1ZXN0KHRpbGUsIHBhcmFtZXRlcnMsIGNhbGxiYWNrRnVuY3Rpb24sIHVybCwgcmVxdWVzdFR5cGUgPSBcIkdFVFwiLCBoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIERhdGEgQ291bGQgTm90IEJlIExvYWRlZCEgVGltZWQgT3V0IVwiO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbih0aWxlLCBwYXJhbWV0ZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICBpZiAoaGVhZGVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChjb250ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHdoaWxlIChlbGVtLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhdF9wcmUodGlsZSwgcGFyYW1ldGVycykge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgfVxyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBDaGF0X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L2NoYXQvZGlzcGxheS9cIiArIHBhcmFtZXRlcnNbMV0sIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBDaGF0X3Bvc3QoY2hhdERpdiwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjaGF0RGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2hhdERhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgIGNoYXREaXYudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gcGFyYW1ldGVyc1sxXSArIFwiIEdsb2JhbCBTaXRlIE93bmVyc1wiO1xyXG4gICAgdGl0bGVEaXYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjRweFwiO1xyXG4gICAgdGl0bGVEaXYuc3R5bGUuY29sb3IgPSBcIiMzZmEyZGVcIjtcclxuICAgIGNoYXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgY2hhdERhdGEuZm9yRWFjaChjaGF0ID0+IHtcclxuICAgICAgICBjb25zdCBjaGF0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdExpbmUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBjaGF0TGluZS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICAgICAgY2hhdExpbmUuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwibWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpXCI7XHJcbiAgICAgICAgY2hhdExpbmUuc3R5bGUuZ3JpZENvbHVtbkdhcCA9IFwiMXB4XCI7XHJcbiAgICAgICAgY2hhdExpbmUuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcclxuICAgICAgICBjaGF0TGluZS5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjFcIjtcclxuICAgICAgICBjaGF0RGl2LmFwcGVuZENoaWxkKGNoYXRMaW5lKTtcclxuICAgICAgICBjb25zdCB0aW1lRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgICAgICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiIH0pO1xyXG4gICAgICAgIGRhdGVEaXYuc3R5bGUuY29sb3IgPSBcIiM0NDQ0NDRcIjtcclxuICAgICAgICBkYXRlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGRhdGVEaXYuc3R5bGUucGFkZGluZyA9IFwiMnB4IDVweFwiO1xyXG4gICAgICAgIGRhdGVEaXYuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICBkYXRlRGl2LnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgICAgIGRhdGVEaXYuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgZGF0ZURpdi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZURhdGVEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XHJcbiAgICAgICAgdGltZURpdi50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShjaGF0W1wiTWVzc2FnZVRpbWVzdGFtcFwiXSkpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aW1lRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjJweCA1cHhcIjtcclxuICAgICAgICB0aW1lRGl2LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIycHhcIjtcclxuICAgICAgICB0aW1lRGl2LnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgICAgIHRpbWVEaXYuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdGltZURpdi5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKHRpbWVEYXRlRGl2KTtcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0TGluZS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBuYW1lRGl2LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIG5hbWVEaXYuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgIG5hbWVEaXYuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICBuYW1lRGl2LnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICBuYW1lRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjJweCA1cHhcIjtcclxuICAgICAgICBuYW1lRGl2LnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIxcHggc29saWQgIzk5OTk5OVwiO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRMaW5lLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG4gICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgbWVzc2FnZURpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmNvbG9yID0gXCIjYmJiYmJiXCI7XHJcbiAgICAgICAgbWVzc2FnZURpdi5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjJweCA1cHhcIjtcclxuICAgICAgICBzd2l0Y2ggKGNoYXRbXCJNZXNzYWdlVHlwZVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0hBVFwiOlxyXG4gICAgICAgICAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGF0W1wiTWVzc2FnZVRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkpPSU5FRFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGpvaW5lZC5cIjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXYuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTEVGVFwiOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXRbXCJVc2VyTmFtZVwiXSArIFwiIGxlZnQuXCI7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRmluX3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXksIHdlYmFwcElEKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBOb3QgRW5vdWdoIFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgcmV0dXJuIGFwaWtleTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMmZpbiUyMiZwYXJhbT0lMjJcIiArIHBhcmFtZXRlcnNbMV0gKyBcIiUyMlwiO1xyXG4gICAgWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBGaW5fcG9zdCwgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRmluX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGlsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpbGVIZWFkZXIudGl0bGUgPSBcIkZpbmFuY2lhbCBPdmVydmlld1wiO1xyXG4gICAgdGlsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiS2V5IEZpZ3VyZXNcIjtcclxuICAgIHRpbGVIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHRpbGVIZWFkZXIuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgIHRpbGVIZWFkZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCIwcHhcIjtcclxuICAgIHRpbGVIZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiNnB4IDRweCAycHhcIjtcclxuICAgIHRpbGVIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDYzLCAxNjIsIDIyMiwgMC4xNSlcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGlsZUhlYWRlcik7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzFdKS50b0xvY2FsZVN0cmluZygpLCBcIkZpeGVkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzJdKS50b0xvY2FsZVN0cmluZygpLCBcIkN1cnJlbnQgQXNzZXRzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChNYXRoLnJvdW5kKGRhdGFbMF1bNF0pLnRvTG9jYWxlU3RyaW5nKCksIFwiTGlxdWlkIEFzc2V0c1wiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzddKS50b0xvY2FsZVN0cmluZygpLCBcIkVxdWl0eVwiLCBUZXh0Q29sb3JzLlN0YW5kYXJkKSk7XHJcbiAgICB0aWxlLmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFuY2lhbFRleHRCb3goTWF0aC5yb3VuZChkYXRhWzBdWzVdKS50b0xvY2FsZVN0cmluZygpLCBcIkxpYWJpbGl0aWVzXCIsIFRleHRDb2xvcnMuU3RhbmRhcmQpKTtcclxuICAgIGNvbnN0IG5vdyA9IGRhdGFbMF1bMF07XHJcbiAgICB2YXIgd2Vla0FnbyA9IC0xO1xyXG4gICAgdmFyIGJlc3RHdWVzcyA9IDg2NDAwMDAwMDAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKE1hdGguYWJzKG5vdyAtIGRhdGFbaV1bMF0pIC0gNyAqIDg2NDAwMDAwKSA8IGJlc3RHdWVzcykge1xyXG4gICAgICAgICAgICBiZXN0R3Vlc3MgPSBNYXRoLmFicyhNYXRoLmFicyhub3cgLSBkYXRhW2ldWzBdKSAtIDcgKiA4NjQwMDAwMCk7XHJcbiAgICAgICAgICAgIHdlZWtBZ28gPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3ZWVrQWdvICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZml0ID0gTWF0aC5yb3VuZChkYXRhWzBdWzddIC0gZGF0YVt3ZWVrQWdvXVs3XSk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBwcm9maXQgPiAwID8gVGV4dENvbG9ycy5TdWNjZXNzIDogVGV4dENvbG9ycy5GYWlsdXJlO1xyXG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYW5jaWFsVGV4dEJveChwcm9maXQudG9Mb2NhbGVTdHJpbmcoKSwgXCJQcm9maXRcIiwgY29sb3IpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyZWFrZG93bkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGJyZWFrZG93bkhlYWRlci50aXRsZSA9IFwiRmluYW5jaWFsIEJyZWFrZG93blwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnRleHRDb250ZW50ID0gXCJJbnZlbnRvcnkgQnJlYWtkb3duXCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xyXG4gICAgYnJlYWtkb3duSGVhZGVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICBicmVha2Rvd25IZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiNnB4IDRweCAycHhcIjtcclxuICAgIGJyZWFrZG93bkhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KVwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChicmVha2Rvd25IZWFkZXIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXCJOYW1lXCIsIFwiRml4ZWQgQXNzZXRzXCIsIFwiQ3VycmVudCBBc3NldHNcIiwgXCJUb3RhbCBBc3NldHNcIl07XHJcbiAgICBmb3IgKGxldCB0aXRsZSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGNvbnN0IGJyZWFrZG93biA9IEpTT04ucGFyc2UoZGF0YVswXVs4XSk7XHJcbiAgICBicmVha2Rvd24uc29ydChmaW5hbmNpYWxTb3J0KTtcclxuICAgIGZvciAobGV0IHJvd0RhdGEgb2YgYnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBjb25zdCBmaXJzdFRhYmxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3RUYWJsZUVsZW0pO1xyXG4gICAgICAgIGZpcnN0VGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHJvd0RhdGFbMF0pKTtcclxuICAgICAgICByb3dEYXRhLnNoaWZ0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2Ygcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJsZUVsZW0pO1xyXG4gICAgICAgICAgICB0YWJsZUVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4ocG9pbnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbn1cclxuZnVuY3Rpb24gZmluYW5jaWFsU29ydChhLCBiKSB7XHJcbiAgICByZXR1cm4gYVszXSA8IGJbM10gPyAxIDogLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEVuaGFuY2VkQnVybl9wcmUodGlsZSwgcGFyYW1ldGVycywgYXBpa2V5LCB3ZWJhcHBJRCwgYnVybikge1xyXG4gICAgY2xlYXJDaGlsZHJlbih0aWxlKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgIHJldHVybiBbYXBpa2V5LCB3ZWJhcHBJRF07XHJcbiAgICB9XHJcbiAgICBpZiAoYnVybi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgQnVybiBEYXRhLi4uXCI7XHJcbiAgICAgICAgdGlsZS5pZCA9IFwicG1tZy1yZWxvYWRcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aWxlLmlkID0gXCJwbW1nLWxvYWQtc3VjY2Vzc1wiO1xyXG4gICAgY29uc3QgcGxhbmV0QnVybiA9IGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBhcmFtZXRlcnNbMV0sIGJ1cm4pO1xyXG4gICAgaWYgKHBsYW5ldEJ1cm4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vIE1hdGNoaW5nIFBsYW5ldCFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZm9yIChsZXQgdGl0bGUgb2YgW1wiTmVlZHNcIiwgXCJVc2FnZVwiLCBcIkludlwiLCBcIkJ1cm5cIl0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBoZWFkUm93LmZpcnN0Q2hpbGQuY29sU3BhbiA9IDI7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgY29ucyBvZiBwbGFuZXRCdXJuW1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl0pIHtcclxuICAgICAgICBpZiAoZGF0YVtjb25zW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkYXRhW2NvbnNbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBjb25zW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhW2NvbnNbXCJNYXRlcmlhbFRpY2tlclwiXV0gKz0gY29uc1tcIkRhaWx5QW1vdW50XCJdO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY29ucyBvZiBwbGFuZXRCdXJuW1wiT3JkZXJDb25zdW1wdGlvblwiXSkge1xyXG4gICAgICAgIGlmIChkYXRhW2NvbnNbXCJNYXRlcmlhbFRpY2tlclwiXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRhdGFbY29uc1tcIk1hdGVyaWFsVGlja2VyXCJdXSA9IGNvbnNbXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFbY29uc1tcIk1hdGVyaWFsVGlja2VyXCJdXSArPSBjb25zW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjb25zIG9mIHBsYW5ldEJ1cm5bXCJPcmRlclByb2R1Y3Rpb25cIl0pIHtcclxuICAgICAgICBpZiAoZGF0YVtjb25zW1wiTWF0ZXJpYWxUaWNrZXJcIl1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkYXRhW2NvbnNbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSBjb25zW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICAgICAgICAgIGRhdGFbY29uc1tcIk1hdGVyaWFsVGlja2VyXCJdXSAqPSAtMTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFbY29uc1tcIk1hdGVyaWFsVGlja2VyXCJdXSAtPSBjb25zW1wiRGFpbHlBbW91bnRcIl07XHJcbiAgICB9XHJcbiAgICB2YXIgYnVybk1hdGVyaWFscyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgYnVybk1hdGVyaWFscy5zb3J0KENhdGVnb3J5U29ydCk7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBidXJuTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgaWYgKGRhdGFbbWF0ZXJpYWxdIDw9IDApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbWF0ZXJpYWxDb2x1bW4uc3R5bGUud2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICBtYXRlcmlhbENvbHVtbi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIG1hdGVyaWFsQ29sdW1uLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICBjb25zdCBtYXRFbGVtID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KG1hdGVyaWFsLCBcInBydW4tcmVtb3ZlLWpzXCIsIFwibm9uZVwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdEVsZW0pIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWxDb2x1bW4uYXBwZW5kQ2hpbGQobWF0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChtYXRlcmlhbENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBjcmVhdGVUZXh0U3BhbihNYXRlcmlhbE5hbWVzW21hdGVyaWFsXVswXSk7XHJcbiAgICAgICAgbmFtZVNwYW4uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbmFtZUNvbHVtbi5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbnNDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29uc0NvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihkYXRhW21hdGVyaWFsXS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pICsgXCIgLyBEYXlcIikpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb25zQ29sdW1uKTtcclxuICAgICAgICBjb25zdCBpbnZDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdmFyIGludkFtb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW52IG9mIHBsYW5ldEJ1cm5bXCJJbnZlbnRvcnlcIl0pIHtcclxuICAgICAgICAgICAgaWYgKGludltcIk1hdGVyaWFsVGlja2VyXCJdID09IG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZBbW91bnQgPSBpbnZbXCJNYXRlcmlhbEFtb3VudFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludkNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihpbnZBbW91bnQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkKSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnZDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGJ1cm4gPSBpbnZBbW91bnQgPT0gMCA/IDAgOiBpbnZBbW91bnQgLyBkYXRhW21hdGVyaWFsXTtcclxuICAgICAgICBjb25zdCBidXJuQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGJ1cm5Db2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oTWF0aC5mbG9vcihidXJuKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pICsgXCIgRGF5c1wiKSk7XHJcbiAgICAgICAgaWYgKGJ1cm4gPD0gMykge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzVhMzEzMFwiO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmNvbG9yID0gXCIjYzU5YzliXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1cm4gPD0gNikge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzgzNmUyNFwiO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmNvbG9yID0gXCIjZjZkZjk0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzM0NTAzNFwiO1xyXG4gICAgICAgICAgICBidXJuQ29sdW1uLnN0eWxlLmNvbG9yID0gXCIjOWZiYjlmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXJuQ29sdW1uKTtcclxuICAgIH1cclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XHJcbiAgICBpZiAoTWF0ZXJpYWxOYW1lc1thXSA9PSB1bmRlZmluZWQgfHwgTWF0ZXJpYWxOYW1lc1tiXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbE5hbWVzW2FdWzFdLmxvY2FsZUNvbXBhcmUoTWF0ZXJpYWxOYW1lc1tiXVsxXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNoZWV0VGFibGVfcHJlKHRpbGUsIHBhcmFtZXRlcnMsIGFwaWtleSwgd2ViYXBwSUQpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm4gYXBpa2V5O1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMlwiICsgcGFyYW1ldGVyc1sxXSArIFwiJTIyXCI7XHJcbiAgICBpZiAocGFyYW1ldGVyc1syXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBwYXJhbWV0ZXJzWzJdICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgU2hlZXRUYWJsZV9wb3N0LCB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxufVxyXG5mdW5jdGlvbiBTaGVldFRhYmxlX3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGZvciAobGV0IHRpdGxlIG9mIGRhdGFbMF0pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuICAgICAgICBoZWFkUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICBmb3IgKGxldCByb3dEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVFbGVtKTtcclxuICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFBSdU5fcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBwcnVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHBydW4uc3JjID0gXCJodHRwczovL2FwZXgucHJvc3Blcm91c3VuaXZlcnNlLmNvbS8jL1wiO1xyXG4gICAgcHJ1bi53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcHJ1bi5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHBydW4uc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJ1bik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3NwZXJpdHlfcHJlKHRpbGUpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBjb25zdCBwcm9zcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBwcm9zcC5zcmMgPSBcImh0dHBzOi8vcHJvc3Blcml0eS1wcnVuLm5ldGxpZnkuYXBwL1wiO1xyXG4gICAgcHJvc3Aud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHByb3NwLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcHJvc3Auc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQocHJvc3ApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTaGVldHNfcHJlKHRpbGUsIHBhcmFtZXRlcnMpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbWV0ZXJzWzFdICs9IFwiX1wiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIHNoZWV0LnNyYyA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvZWRpdD91c3A9c2hhcmluZ1wiO1xyXG4gICAgc2hlZXQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHNoZWV0LmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgc2hlZXQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3JkX3ByZSh0aWxlLCBwYXJhbWV0ZXJzKSB7XHJcbiAgICBjbGVhckNoaWxkcmVuKHRpbGUpO1xyXG4gICAgdmFyIHNlcnZlcklEO1xyXG4gICAgdmFyIGNoYW5uZWxJRDtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgaWYgKERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcnZlcklEID0gRGlzY29yZFNlcnZlcnNbcGFyYW1ldGVyc1sxXV1bMF07XHJcbiAgICAgICAgICAgIGNoYW5uZWxJRCA9IERpc2NvcmRTZXJ2ZXJzW3BhcmFtZXRlcnNbMV1dWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICBjaGFubmVsSUQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVyc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2NvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgZGlzY29yZC5zcmMgPSBcImh0dHBzOi8vZS53aWRnZXRib3QuaW8vY2hhbm5lbHMvXCIgKyBzZXJ2ZXJJRCArIFwiL1wiICsgY2hhbm5lbElEO1xyXG4gICAgZGlzY29yZC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgZGlzY29yZC5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGRpc2NvcmQuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChkaXNjb3JkKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRklPSW52X3ByZSh0aWxlLCBwYXJhbWV0ZXJzLCBhcGlrZXkpIHtcclxuICAgIGNsZWFyQ2hpbGRyZW4odGlsZSk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIE5vdCBFbm91Z2ggUGFyYW1ldGVycyFcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMzsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbWV0ZXJzWzJdICs9IFwiIFwiICsgcGFyYW1ldGVyc1tpXTtcclxuICAgIH1cclxuICAgIFhJVFdlYlJlcXVlc3QodGlsZSwgcGFyYW1ldGVycywgRklPSW52X3Bvc3QsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0L3N0b3JhZ2UvXCIgKyBwYXJhbWV0ZXJzWzFdICsgXCIvXCIgKyBwYXJhbWV0ZXJzWzJdLCBcIkdFVFwiLCBbXCJBdXRob3JpemF0aW9uXCIsIGFwaWtleV0sIHVuZGVmaW5lZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gRklPSW52X3Bvc3QodGlsZSwgcGFyYW1ldGVycywganNvbmRhdGEpIHtcclxuICAgIGNvbnN0IHRhZyA9IFwiRklPXCI7XHJcbiAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaW52ZW50b3J5RGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW52ZW50b3J5RGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIERhdGEhXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgdm9sdW1lVXNlZCA9IGludmVudG9yeURhdGFbXCJWb2x1bWVMb2FkXCJdO1xyXG4gICAgY29uc3Qgdm9sdW1lVG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lQ2FwYWNpdHlcIl07XHJcbiAgICBjb25zdCB3ZWlnaHRVc2VkID0gaW52ZW50b3J5RGF0YVtcIldlaWdodExvYWRcIl07XHJcbiAgICBjb25zdCB3ZWlnaHRUb3RhbCA9IGludmVudG9yeURhdGFbXCJXZWlnaHRDYXBhY2l0eVwiXTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gXCIjM2ZhMmRlXCI7XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGlsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBib2R5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgYm9keS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xyXG4gICAgYm9keS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XHJcbiAgICBib2R5LnN0eWxlLmFsaWduSXRlbXMgPSBcInN0cmV0Y2hcIjtcclxuICAgIGJvZHkuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyM3B4XCI7XHJcbiAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjVweCA4cHhcIjtcclxuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzJdLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgY29uc3QgdXNlckVsZW0gPSBjcmVhdGVUZXh0U3BhbihwYXJhbWV0ZXJzWzFdLCB0YWcpO1xyXG4gICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJFbGVtKTtcclxuICAgIGNvbnN0IHZvbHVtZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgIHZvbHVtZUxpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgdm9sdW1lTGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB2b2x1bWVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB2b2x1bWVCYXIuaWQgPSBcInZvbHVtZS1iYXJcIjtcclxuICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB2b2x1bWVCYXIuc3R5bGUud2lkdGggPSBcIjMwcHhcIjtcclxuICAgIHZvbHVtZUJhci5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xyXG4gICAgdm9sdW1lQmFyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM5OTlcIjtcclxuICAgIHZvbHVtZUJhci5zdHlsZS5tYXJnaW4gPSBcIjFweCAycHhcIjtcclxuICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgdm9sdW1lQmFyLnZhbHVlID0gdm9sdW1lVXNlZCAvIHZvbHVtZVRvdGFsO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZCh2b2x1bWVCYXIpO1xyXG4gICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgdm9sdW1lVG90YWwudG9GaXhlZCgwKSArIFwiIG3Cs1wiLCB0YWcpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh2b2x1bWVMaW5lKTtcclxuICAgIGNvbnN0IHdlaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2VpZ2h0TGluZS5pZCA9IFwid2VpZ2h0LWxpbmVcIjtcclxuICAgIHdlaWdodExpbmUuc3R5bGUucGFkZGluZyA9IFwiMnB4IDhweFwiO1xyXG4gICAgd2VpZ2h0TGluZS5zdHlsZS5jb2xvciA9IFwiIzk5OTk5OVwiO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIldlaWdodCBcIiwgdGFnKSk7XHJcbiAgICBjb25zdCB3ZWlnaHRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIik7XHJcbiAgICB3ZWlnaHRCYXIuaWQgPSBcIndlaWdodC1iYXJcIjtcclxuICAgIHdlaWdodEJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICB3ZWlnaHRCYXIuc3R5bGUud2lkdGggPSBcIjMwcHhcIjtcclxuICAgIHdlaWdodEJhci5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xyXG4gICAgd2VpZ2h0QmFyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM5OTlcIjtcclxuICAgIHdlaWdodEJhci5zdHlsZS5tYXJnaW4gPSBcIjFweCAycHhcIjtcclxuICAgIHdlaWdodEJhci5tYXggPSAxO1xyXG4gICAgd2VpZ2h0QmFyLnZhbHVlID0gd2VpZ2h0VXNlZCAvIHdlaWdodFRvdGFsO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZCh3ZWlnaHRCYXIpO1xyXG4gICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih3ZWlnaHRVc2VkLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9GaXhlZCgwKSArIFwiIHRcIiwgdGFnKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQod2VpZ2h0TGluZSk7XHJcbiAgICBpbnZlbnRvcnlEYXRhW1wiU3RvcmFnZUl0ZW1zXCJdLnNvcnQoZmlvTWF0c0FscGhhYmV0U29ydCk7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0pIHtcclxuICAgICAgICBjb25zdCBtYXQgPSBjcmVhdGVNYXRlcmlhbEVsZW1lbnQoaXRlbVtcIk1hdGVyaWFsVGlja2VyXCJdLCB0YWcsIGl0ZW1bXCJNYXRlcmlhbEFtb3VudFwiXSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1hdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlvTWF0c0FscGhhYmV0U29ydChhLCBiKSB7XHJcbiAgICBpZiAoYVtcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCB8fCBiW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYVtcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0ubG9jYWxlQ29tcGFyZShiW1wiTWF0ZXJpYWxDYXRlZ29yeVwiXSk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvWElURnVuY3Rpb25zLnRzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItbm90c1wiO1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLk5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBTZWFyY2hlcnMuZm9yRWFjaChzZWFyY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoc2VhcmNoWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3Bhbi50ZXh0Q29udGVudCA9IHNlYXJjaFsxXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLmNvbG9yID0gc2VhcmNoWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGFuLnN0eWxlLm1pbldpZHRoID0gXCI2MnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwYW4uc3R5bGUubWF4V2lkdGggPSBcIjYycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0eXBlU3BhbiwgZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdFRleHQgPSBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RUZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZHVjZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL2F0IHlvdXIgYmFzZSAvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoL09uZSAvLCBcIjEgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIGhhdmUgYmVlbi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIHVuaXRbc10/IG9mLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm90VGV4dC5tYXRjaCgvIChbQS16IC1dKykgcHJvZHVjZWQvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBub3RUZXh0Lm1hdGNoKC95b3VyIChbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZGVyIGZpbGxlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90VGV4dCA9IG5vdFRleHQucmVwbGFjZSgvIENvbW1vZGl0eSBFeGNoYW5nZS8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG5vdFRleHQubWF0Y2goLyhbQS16IC1dKykgb3JkZXIvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSAhPSB1bmRlZmluZWQgJiYgTWF0ZXJpYWxzW21hdGNoZXNbMV1dICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChtYXRjaGVzWzFdKSwgTWF0ZXJpYWxzW21hdGNoZXNbMV1dWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWNjZXB0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyB0aGUvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdFRleHQgPSBub3RUZXh0LnJlcGxhY2UoLyBsb2NhbCBtYXJrZXQvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gbm90VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IFNlYXJjaGVycyA9IFtcclxuICAgIFtcImNvbnRyYWN0XCIsIFwiY29udHJhY3RcIiwgXCJyZ2IoMjQ3LCAxNjYsIDApXCJdLFxyXG4gICAgW1wicHJvZHVjZWRcIiwgXCJwcm9kdWNlZFwiLCBcIiMzZmEyZGVcIl0sXHJcbiAgICBbXCJhY2NlcHRlZFwiLCBcImFkdmVydFwiLCBcIiM0NDljNTdcIl0sXHJcbiAgICBbXCJleHBpcmVkXCIsIFwiYWR2ZXJ0XCIsIFwiIzQ0OWM1N1wiXSxcclxuICAgIFtcInRyYWRlXCIsIFwidHJhZGVcIiwgXCIjMDA4MDAwXCJdLFxyXG4gICAgW1wib3JkZXIgZmlsbGVkXCIsIFwib3JkZXJcIiwgXCIjY2MyOTI5XCJdLFxyXG4gICAgW1wiYXJyaXZlZCBhdCBpdFwiLCBcImFycml2YWxcIiwgXCIjYjMzNmIzXCJdLFxyXG4gICAgW1wicmVwb3J0XCIsIFwicmVwb3J0XCIsIFwiIzAwYWE3N1wiXSxcclxuICAgIFtcInByb2dyYW1cIiwgXCJDT0dDXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcImVsZWN0aW9uXCIsIFwiZWxlY3Rpb25cIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1wic3RyaWtlXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJnb3Zlcm5vclwiLCBcImdvdmVybm9yXCIsIFwiIzhmNTJjY1wiXSxcclxuICAgIFtcInJ1bGVzXCIsIFwicnVsZXNcIiwgXCIjOGY1MmNjXCJdLFxyXG4gICAgW1widXBrZWVwIHBoYXNlXCIsIFwiQ09HQ1wiLCBcIiM4ZjUyY2NcIl0sXHJcbiAgICBbXCJleHBlcnRcIiwgXCJleHBlcnRcIiwgXCIjZmY4YTAwXCJdXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL05vdGlmaWNhdGlvbnMudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBnZXRQcmljZXMocHJpY2VzLCB3ZWJhcHBJRCkge1xyXG4gICAgaWYgKHdlYmFwcElEID09IHVuZGVmaW5lZCB8fCB3ZWJhcHBJRCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldlYiBBcHAgVGltZW91dFwiKTtcclxuICAgIH07XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJlaXZlZCBQcmljZXMgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJpY2VEYXRhKTtcclxuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1trZXldID0gcHJpY2VEYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBXZWIgQXBwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9cIiArIHdlYmFwcElEICsgXCIvZXhlYz9tb2RlPSUyMnByaWNlJTIyXCIsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1cm4oYnVybiwgdXNlcm5hbWUsIGFwaWtleSkge1xyXG4gICAgaWYgKGFwaWtleSA9PSB1bmRlZmluZWQgfHwgYXBpa2V5ID09IG51bGwgfHwgdXNlcm5hbWUgPT0gdW5kZWZpbmVkIHx8IHVzZXJuYW1lID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklPIEJ1cm4gVGltZW91dFwiKTtcclxuICAgICAgICBnZXRCdXJuKGJ1cm4sIHVzZXJuYW1lLCBhcGlrZXkpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmVpdmVkIEJ1cm4gZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVybkRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnVybkRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXJuLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFkIERhdGEgZnJvbSBGSU9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vcmVzdC5mbmFyLm5ldFwiICsgXCIvZmlvd2ViL2J1cm4vdXNlci9cIiArIHVzZXJuYW1lLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBhcGlrZXkpO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQmFja2dyb3VuZFJ1bm5lci50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==