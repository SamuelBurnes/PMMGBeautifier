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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDurationToETA;
/* harmony export (immutable) */ __webpack_exports__["j"] = parseDuration;
/* harmony export (immutable) */ __webpack_exports__["c"] = createTextSpan;
/* harmony export (immutable) */ __webpack_exports__["f"] = findInventoryAmount;
/* harmony export (immutable) */ __webpack_exports__["d"] = findBurnAmount;
/* harmony export (immutable) */ __webpack_exports__["e"] = findCorrespondingPlanet;
/* harmony export (immutable) */ __webpack_exports__["i"] = parseBaseName;
/* harmony export (immutable) */ __webpack_exports__["b"] = createMaterialElement;
/* harmony export (immutable) */ __webpack_exports__["g"] = genericCleanup;
/* harmony export (immutable) */ __webpack_exports__["k"] = toFixed;
/* unused harmony export getBuffer */
/* harmony export (immutable) */ __webpack_exports__["h"] = getBuffers;
/* unused harmony export getElementsByXPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(2);


function convertDurationToETA(duration) {
    const parsedSeconds = parseDuration(duration);
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
    }
    return null;
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
function createMaterialElement(ticker, className = "prun-remove-js", amount = "none", text = false) {
    const name = __WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* MaterialNames */][ticker];
    const totalPicture = document.createElement("div");
    totalPicture.classList.add("T5C45pTOW9QTzokWPqLQJg==");
    totalPicture.style.height = "48px";
    totalPicture.style.width = "48px";
    const material = document.createElement("div");
    material.classList.add("E7OLUChYCexMUgOolKYjOQ==");
    material.title = name;
    material.style.height = "48px";
    material.style.width = "48px";
    material.style.background = "linear-gradient(135deg, rgb(60, 60, 60), rgb(80, 80, 80))";
    material.style.color = "rgb(170, 170, 170)";
    material.style.fontSize = "15.84px";
    material.style.cursor = "pointer";
    material.style.margin = "2px auto";
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
    ProdItem: "div[class~='JKtT4rrIC0GkPEAnZlYcSg=='] div[class~='b3fOnOuKjQOhYwo-CV75Uw==']",
    ProdQueueTable: "table[class~='_1QAhpDUhd+7HWJxpHtoWJQ==']",
    BufferHeader: 'e2PKRKZUW6K9xLKNAP56cg== Ytu6fo6jLbk43YqO0yWkQA==',
    Sidebar: "div#TOUR_TARGET_SIDEBAR_RIGHT",
    LMPostForm: "article[class~='zw+0zQBZvala7yGp+Ad3Dw=='] > div > div > form",
    WorkforceConsumptionTable: "#undefined > div > div.N32GL8CJBOw3-rNx0PBZkQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div._4Ksi09VXhfvkGgtPbhCEyg\\=\\=.RUuw11b631eXrQYp-Id2wg\\=\\=",
    XITTile: "#undefined > div > div.zJrIzEvWM7K6oP0jrRRpbQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div > div > div.gecI5uGBluvjP5GCRk3dHA\\=\\= > div",
    XITTileFloat: "#TOUR_TARGET_EMPTY_TILE > div > div.zJrIzEvWM7K6oP0jrRRpbQ\\=\\=.fTT52i\\+1oFauxHOjVfGTww\\=\\=.O7RX4zXL4gzHLoOwTVbrXw\\=\\= > div > div > div.gecI5uGBluvjP5GCRk3dHA\\=\\= > div",
    BufferTitle: "_4Ksi09VXhfvkGgtPbhCEyg== RUuw11b631eXrQYp-Id2wg==",
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

const MaterialNames = {
    "AAR": "Antenna Array",
    "ABH": "Advanced Bulkhead",
    "ACS": "Automated Cooling System",
    "ADE": "Advanced Deck Elements",
    "ADR": "Auto-Doc",
    "ADS": "Audio Distribution System",
    "AEF": "Aerostat Foundation",
    "AEN": "Advanced STL Engine",
    "AFP": "Advanced Fuel Pump",
    "AFR": "Advanced Fuel Rod",
    "AGS": "Advanced High-G Seats",
    "AHP": "Advanced Hull Plate",
    "AIR": "Air Scrubber",
    "AL": "Aluminium",
    "ALE": "Stellar Pale Ale",
    "ALG": "Protein-Rich Algae",
    "ALO": "Aluminium Ore",
    "AMM": "Ammonia",
    "ANZ": "Advanced Nozzle",
    "APT": "Advanced Thermal Protection Tile",
    "AR": "Argon",
    "ARP": "Advanced Anti-rad Plate",
    "ASE": "Advanced Structural Elements",
    "AST": "Alpha-Stabilized Titanium",
    "ATA": "Advanced Transparent Aperture",
    "ATP": "Advanced Thermal Protection Material",
    "AU": "Gold",
    "AUO": "Gold Ore",
    "AWF": "Active Water Filter",
    "AWH": "Advanced Whipple Shielding",
    "BAC": "Helpful Bacteria",
    "BAI": "Basic AI Framework",
    "BBH": "Basic Bulkhead",
    "BCO": "Budget Connectors",
    "BDE": "Basic Deck Elements",
    "BE": "Beryllium",
    "BEA": "Protein-Rich Beans",
    "BER": "Beryl Crystals",
    "BFP": "Basic Fuel Pump",
    "BFR": "Basic Fuel Rod",
    "BGC": "Shielded Connectors",
    "BGO": "Blue Gold",
    "BGS": "Basic High-G Seats",
    "BHP": "Basic Hull Plate",
    "BID": "Full-Body Interaction Device",
    "BL": "Breathable Liquid",
    "BLE": "Desaturation Agent",
    "BMF": "Basic Mainframe",
    "BND": "Bandages",
    "BOR": "Boron Crystals",
    "BOS": "Borosilicate",
    "BPT": "Basic Thermal Protection Tile",
    "BR1": "Command Bridge MK1",
    "BR2": "Command Bridge MK2",
    "BRM": "Bioreactive Minerals",
    "BRO": "Bronze",
    "BRP": "Basic Anti-rad Plate",
    "BRS": "Short-distance Command Bridge",
    "BSC": "Body Scanner",
    "BSE": "Basic Structural Elements",
    "BTA": "Basic Transparent Aperture",
    "BTS": "Bacterial Tungsten Solution",
    "BWH": "Basic Whipple Shielding",
    "BWS": "Basic Workstation",
    "C": "Carbon",
    "CA": "Calcium",
    "CAF": "Caffeinated Beans",
    "CAP": "Electric Field Capacitor",
    "CBL": "Large Capacitor Bank",
    "CBM": "Medium Capacitor Bank",
    "CBS": "Small Capacitor Bank",
    "CC": "Climate Controller",
    "CCD": "Crowd Control Drone",
    "CD": "Capacitive Display",
    "CF": "Ceramic Fabric",
    "CHA": "Combustion Chamber",
    "CL": "Chlorine",
    "CLI": "Caliche Rock",
    "CMK": "",
    "COF": "Caffeinated Infusion",
    "COM": "Communication System",
    "COT": "Cotton Fabric",
    "CQL": "Crew Quarters (Large)",
    "CQM": "Crew Quarters (Medium)",
    "CQS": "Crew Quarters (Small)",
    "CQT": "Crew Quarters (Tiny)",
    "CRU": "Cryogenic Unit",
    "CST": "Cryogenic Stabilizer",
    "CTF": "Ceramic-Tungsten Fabric",
    "CU": "Copper",
    "CUO": "Copper Ore",
    "DA": "Data Analyzer",
    "DCH": "Drone Chassis",
    "DCL": "Durable Casing L",
    "DCM": "Durable Casing M",
    "DCS": "Durable Casing S",
    "DD": "Distributed Database",
    "DDT": "DDT Plant Agent",
    "DEC": "Decorative Elements",
    "DIS": "Information Display",
    "DOU": "Drone Operations Unit",
    "DRF": "Drone Frame",
    "DV": "Data Visualizer",
    "DW": "Drinking Water",
    "EDC": "Entertainment Data Core",
    "EES": "Enriched Einsteinium",
    "ENG": "Standard STL Engine",
    "EPO": "Epoxy Resin",
    "ES": "Einsteinium",
    "ETC": "Enriched Technetium",
    "EXO": "Exoskeleton Work Suit",
    "F": "Fluorine",
    "FAL": "Ferrominium",
    "FAN": "Active Cooling Device",
    "FC": "Flow Control Device",
    "FE": "Iron",
    "FEO": "Iron Ore",
    "FET": "Ferro-Titanium",
    "FF": "FTL Fuel",
    "FFC": "FTL Field Controller",
    "FIM": "Flavoured Insta-Meal",
    "FIR": "Fission Reactor",
    "FLO": "Floating Tank",
    "FLP": "Fluid Piping",
    "FLX": "Flux",
    "FOD": "All-Purpose Fodder",
    "FSE": "Fuel-saving STL Engine",
    "FUN": "Entertainment Unit",
    "GAL": "Galerite Rock",
    "GC": "Cylindrical Gas Container",
    "GCH": "Glass Combustion Chamber",
    "GEN": "Glass-based STL Engine",
    "GIN": "Einsteinium-Infused Gin",
    "GL": "Glass",
    "GNZ": "Glass Nozzle",
    "GRA": "Wine-Quality Grapes",
    "GRN": "High-Carb Grains",
    "GV": "Gas Vent",
    "H": "Hydrogen",
    "H2O": "Water",
    "HAB": "Habitat Unit",
    "HAL": "Halite Crystals",
    "HCC": "High-Capacity Connectors",
    "HCP": "Hydrocarbon Plants",
    "HD": "Holographic Display",
    "HE": "Helium",
    "HE3": "Helium-3 Isotope",
    "HER": "Spicy Herbs",
    "HEX": "Heliotrope Extract",
    "HHP": "Hardened Hull Plate",
    "HMS": "HazMat Work Suit",
    "HNZ": "Hyperthrust Nozzle",
    "HOG": "Holographic Glasses",
    "HOP": "Flowery Hops",
    "HPC": "Handheld Personal Console",
    "HPR": "High-power FTL Reactor",
    "HSE": "Hardened Structural Elements",
    "HSS": "Smart Space Suit",
    "HTE": "Hyperthrust STL Engine",
    "HYR": "Hyper-power Reactor",
    "I": "Iodine",
    "IDC": "Information Data Core",
    "IMM": "Information Management System",
    "IND": "Indigo Colorant",
    "INS": "InsuFoam",
    "JUI": "Sedative Substance",
    "KOM": "Kombucha",
    "KV": "Kevlar Fabric",
    "LBH": "Lightweight Bulkhead",
    "LC": "AI-Assisted Lab Coat",
    "LCB": "Large Cargo Bay Kit",
    "LCR": "Liquid Crystals",
    "LD": "Local Database",
    "LDE": "Lightweight Deck Elements",
    "LDI": "Laser Diodes",
    "LES": "Liquid Einsteinium",
    "LFE": "Large FTL Emitter",
    "LFL": "Large FTL Fuel Tank Kit",
    "LFP": "Low-heat Fuel Pump",
    "LHP": "Lightweight Hull Plate",
    "LI": "Lithium",
    "LIO": "Lithium Ore",
    "LIS": "Life Support System",
    "LIT": "Neon Lighting System",
    "LOG": "Logistics System",
    "LSE": "Lightweight Structural Elements",
    "LSL": "Large STL Fuel Tank Kit",
    "LST": "Limestone",
    "LTA": "Lightweight Transparent Aperture",
    "LU": "Laboratory Unit",
    "MAG": "Magnetite",
    "MAI": "High-Carb Maize",
    "MB": "Motherboard",
    "MCB": "Medium Cargo Bay Kit",
    "MCG": "Mineral Construction Granulate",
    "MEA": "Quality Meat Meal",
    "MED": "Basic Medical Kit",
    "MFE": "Medium FTL Emitter",
    "MFK": "Medium Fastener Kit",
    "MFL": "Medium FTL Fuel Tank Kit",
    "MG": "Magnesium",
    "MGC": "Magnetic Ground Cover",
    "MGS": "Magnesite",
    "MHL": "Metal-Halide Lighting System",
    "MHP": "Micro Headphones",
    "MLI": "Machine Learning Interface",
    "MPC": "Micro-Processor",
    "MSL": "Medium STL Fuel Tank Kit",
    "MTC": "MegaTube Coating",
    "MTP": "Meat Tissue Patties",
    "MUS": "Protein-Rich Mushrooms",
    "MWF": "Medium Wafer",
    "N": "Nitrogen",
    "NA": "Sodium",
    "NAB": "Sodium Borohydride",
    "NCS": "Nano-Carbon Sheeting",
    "NE": "Neon",
    "NF": "Networking Framework",
    "NFI": "Nano Fiber",
    "NG": "Nano-Coated Glass",
    "NL": "Nylon Fabric",
    "NN": "Neural Network",
    "NOZ": "Basic Nozzle",
    "NR": "Nano-Enhanced Resin",
    "NS": "Nutrient Solution",
    "NST": "NeuroStimulants",
    "NUT": "Triglyceride Nuts",
    "NV1": "Navigation Module MK1",
    "NV2": "Navigation Module MK2",
    "O": "Oxygen",
    "OFF": "Office Supplies",
    "OLF": "Olfactory Substances",
    "OS": "Operating System",
    "OVE": "Basic Overalls",
    "PCB": "Printed Circuit Board",
    "PDA": "Personal Data Assistant",
    "PE": "Poly-Ethylene",
    "PFE": "Premium Fertilizer",
    "PG": "Polymer Granulate",
    "PIB": "Pineberries",
    "PK": "Painkillers",
    "POW": "Power Cell",
    "PPA": "Protein Paste",
    "PSH": "Pressure Shielding",
    "PSL": "Polymer Sheet Type L",
    "PSM": "Polymer Sheet Type M",
    "PSS": "Polymer Sheet Type S",
    "PT": "Power Tools",
    "PWO": "Padded Work Overall",
    "QCR": "Quick-charge FTL Reactor",
    "RAD": "Radio Device",
    "RAG": "Radioisotope Generator",
    "RAM": "Memory Bank",
    "RAT": "Basic Rations",
    "RBH": "Reinforced Bulkhead",
    "RCO": "Raw Cotton Fiber",
    "RCS": "Reactor Control System",
    "RCT": "Standard FTL Reactor",
    "RDE": "Reinforced Deck Elements",
    "RDL": "Large Ship-Repair Drone Operations Unit",
    "RDS": "Small Ship-Repair Drone Operations Unit",
    "REA": "Chemical Reagents",
    "RED": "Rescue Drone",
    "REP": "Repair Kit",
    "RG": "Reinforced Glass",
    "RGO": "Red Gold",
    "RHP": "Reinforced Hull Plate",
    "ROM": "Non-Volatile Memory",
    "RSE": "Reinforced Structural Elements",
    "RSH": "Radiation Shielding",
    "RSI": "Raw Silk Strains",
    "RTA": "Reinforced Transparent Aperture",
    "S": "Sulfur",
    "SA": "Search Algorithm",
    "SAL": "Sorting Algorithm",
    "SAR": "Sensor Array",
    "SC": "Stem Cell Treatment",
    "SCB": "Small Cargo Bay Kit",
    "SCN": "Multi-Purpose Scanner",
    "SCR": "Sulfur Crystals",
    "SDR": "Surgical Drone",
    "SEA": "Poly-Sulfite Sealant",
    "SEN": "Sensor",
    "SEQ": "Surgical Equipment",
    "SF": "STL Fuel",
    "SFE": "Small FTL Emitter",
    "SFK": "Small Fastener Kit",
    "SFL": "Small FTL Fuel Tank Kit",
    "SI": "Silicon",
    "SIL": "Silken Fabric",
    "SIO": "Silicon Ore",
    "SNM": "Spatial Navigation Map",
    "SOI": "Artificial Soil",
    "SOL": "Solar Cell",
    "SP": "Solar Panel",
    "SRD": "Ship-Repair Drone",
    "SRP": "Specialized Anti-rad Plate",
    "SSC": "Structural Spacecraft Component",
    "SSL": "Small STL Fuel Tank Kit",
    "STL": "Steel",
    "STR": "Medical Stretcher",
    "STS": "Stability Support System",
    "SU": "Surgery Unit",
    "SUD": "Surveillance Drone",
    "SUN": "Safety Uniform",
    "SWF": "Small Wafer",
    "TA": "Tantalum",
    "TAC": "Targeting Computer",
    "TAI": "Tantalite Rock",
    "TC": "Technetium",
    "TCB": "Tiny Cargo Bay Kit",
    "TCL": "TCL Acid",
    "TCO": "Technetium Oxide",
    "TCS": "Stabilized Technetium",
    "TCU": "Trauma Care Unit",
    "THF": "ThermoFluid",
    "THP": "Basic Thermal Protection Material",
    "TI": "Titanium",
    "TIO": "Titanium Ore",
    "TK": "TechnoKevlar Fabric",
    "TPU": "Tensor Processing Unit",
    "TRA": "Audio Transmitter",
    "TRN": "Advanced Transistor",
    "TRU": "Truss",
    "TS": "Tectosilisite",
    "TSH": "Thermal Shielding",
    "TUB": "Test Tubes",
    "UTS": "Universal Toolset",
    "VCB": "High-volume Cargo Bay Kit",
    "VEG": "Triglyceride Fruits",
    "VG": "VitaGel",
    "VIT": "Vita Essence",
    "VSC": "Very Small Cargo Bay Kit",
    "W": "Tungsten",
    "WAI": "Weak Artificial Intelligence",
    "WAL": "Alpha-Stabilized Tungsten",
    "WCB": "High-load Cargo Bay Kit",
    "WIN": "Smart Zinfandel",
    "WM": "Window Manager",
    "WOR": "Handcraft Workshop Unit",
    "WR": "Water Reclaimer",
    "WS": "Scientific Work Station",
    "ZIR": "Zircon Crystals",
    "ZR": "Zirconium",
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlightETAs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrderETAs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FleetETAs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostLM__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShippingAds__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QueueLoad__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__XITHandler__ = __webpack_require__(15);










console.log("At least started...");
chrome.storage.sync.get(["AHIBeautifier_Data"], function (result) {
    const runner = new __WEBPACK_IMPORTED_MODULE_2__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_1__LocalMarketAds__["a" /* LocalMarketAds */](),
        new __WEBPACK_IMPORTED_MODULE_3__OrderETAs__["a" /* OrderETAs */](),
        new __WEBPACK_IMPORTED_MODULE_0__FlightETAs__["a" /* FlightETAs */](),
        new __WEBPACK_IMPORTED_MODULE_7__ShippingAds__["a" /* ShippingAds */](),
        new __WEBPACK_IMPORTED_MODULE_6__PostLM__["a" /* PostLM */](result["AHIBeautifier_Data"][2]),
        new __WEBPACK_IMPORTED_MODULE_8__QueueLoad__["a" /* QueueLoad */](),
        new __WEBPACK_IMPORTED_MODULE_4__ConsumableTimers__["a" /* ConsumableTimers */](result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1]),
        new __WEBPACK_IMPORTED_MODULE_5__FleetETAs__["a" /* FleetETAs */](),
        new __WEBPACK_IMPORTED_MODULE_9__XITHandler__["a" /* XITHandler */](result["AHIBeautifier_Data"][1], result["AHIBeautifier_Data"][2])
    ]);
    (function () {
        runner.loop();
    })();
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FlightETAs {
    constructor() {
        this.tag = "pb-sfc-eta";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* getBuffers */])("SFC ");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[3];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* convertDurationToETA */])(etaData.textContent);
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(` (${eta})`, this.tag));
                }
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlightETAs;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class LocalMarketAds {
    constructor() {
        this.tag = "pb-lm-ads";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        const elements = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdText);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = element.textContent;
            const matches = text && text.match(/(?:BUYING|SELLING)\s(\d+)\s.*\s@\s([\d,.]+)\s[A-Z]+\sfor/);
            if (matches && matches.length > 2) {
                const count = parseInt(matches[1]);
                const totalCents = parseInt(matches[2].replace(/[,.]/g, ''));
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* toFixed */])(totalCents / count / 100, 2);
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* createTextSpan */])(` (${perItem} ea)`, this.tag));
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalMarketAds;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



class Sidebar {
    constructor(list) {
        this.tag = "pb-sidebar";
        this.list = list;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        const area = document.createElement('div');
        area.classList.add(this.tag);
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode("PMMG Beautifier"));
        h3.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].SidebarSectionHead);
        area.appendChild(h3);
        const content = document.createElement("div");
        content.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].SidebarSectionContent);
        area.appendChild(content);
        this.list.map(mp => {
            const line = document.createElement('div');
            line.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_1__Style__["b" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].SidebarLine, __WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].FontsRegular));
            content.appendChild(line);
            line.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* createTextSpan */])(mp.name));
            const right = document.createElement("span");
            right.style.flexGrow = "1";
            right.style.textAlign = "right";
            line.appendChild(right);
            const time = Object(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* toFixed */])((mp.cleanupTime + mp.runTime) / mp.count, 2);
            right.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* createTextSpan */])(`${time}ms `));
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
    makePushButton(text, f, style = __WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].ButtonPrimary) {
        const button = document.createElement('button');
        button.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].Button);
        button.classList.add(...style);
        button.classList.add(this.tag);
        button.onclick = f;
        button.innerText = text;
        return button;
    }
    makeToggleButton(on, off, f, state = false) {
        const toggle = document.createElement('button');
        toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].Button);
        const getState = !!toggle.getAttribute('data-state') || state;
        const setState = s => {
            toggle.setAttribute('data-state', String(s));
        };
        const setLook = (s) => {
            toggle.innerText = s ? on : off;
            if (s) {
                toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].ButtonPrimary);
                toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].ButtonSuccess);
            }
            else {
                toggle.classList.remove(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].ButtonSuccess);
                toggle.classList.add(...__WEBPACK_IMPORTED_MODULE_1__Style__["a" /* Style */].ButtonPrimary);
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
/* 8 */
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Style;

const WithStyles = (...style) => {
    return style.reduce(((previousValue, currentValue) => previousValue.concat(currentValue)));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = WithStyles;



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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        this.beautifyOrders();
        this.beautifyProductionQueue();
    }
    beautifyOrders() {
        const elements = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdItem));
        elements.forEach(etaDiv => {
            const etaSpan = etaDiv.querySelector("span");
            if (etaSpan) {
                this.beautifyEta(etaSpan);
            }
        });
    }
    beautifyProductionQueue() {
        const tables = Array.from(document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].ProdQueueTable));
        tables.forEach(table => {
            const rows = Array.from(table.querySelectorAll("tbody > tr"));
            rows.forEach(row => {
                const etaCell = row.querySelectorAll("td").item(5);
                if (etaCell) {
                    const etaSpan = etaCell.querySelector("span");
                    if (etaSpan) {
                        this.beautifyEta(etaSpan);
                    }
                }
            });
        });
    }
    beautifyEta(etaSpan) {
        const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* convertDurationToETA */])(etaSpan.textContent);
        etaSpan.parentElement.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* createTextSpan */])(` (${eta})`, this.tag));
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
    constructor(userName, apikey) {
        this.tag = "pb-consumable-timers";
        this.userName = userName;
        this.apikey = apikey;
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        if (this.userName == undefined || this.apikey == undefined) {
            return;
        }
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* getBuffers */])("WF");
        if (buffers == undefined || buffers == null) {
            return;
        }
        ;
        if (this.userName == undefined) {
            return;
        }
        buffers.forEach(buffer => {
            generateBurns(buffer, this.userName, this.apikey);
        });
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsumableTimers;

function generateBurns(buffer, userName, apikey) {
    const nameElem = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].WorkforceConsumptionTable);
    if (nameElem == null || nameElem == undefined || nameElem.textContent == null || nameElem.textContent == undefined)
        return;
    const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* parseBaseName */])(nameElem.textContent);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var jsondata = xhr.responseText;
            if (jsondata == undefined || jsondata == null) {
                return;
            }
            var inventoryData = Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* findCorrespondingPlanet */])(name, JSON.parse(jsondata));
            if (inventoryData == undefined || inventoryData == null) {
                return;
            }
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                if (targetRow.childElementCount < 5) {
                    return;
                }
                const outputData = targetRow.children[4];
                if (outputData.textContent != "") {
                    var inventoryAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* findInventoryAmount */])(targetRow.children[0].textContent, inventoryData);
                    var burnAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* findBurnAmount */])(targetRow.children[0].textContent, inventoryData);
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
                            daysLeft += " Day Remains";
                        }
                        else {
                            daysLeft += " Days Remain";
                        }
                    }
                    else {
                        daysLeft = "";
                    }
                    const firstChild = outputData.firstChild;
                    if (firstChild != null) {
                        outputData.removeChild(firstChild);
                    }
                    outputData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(daysLeft));
                }
            });
        }
    };
    xhr.open("GET", "https://rest.fnar.net" + "/fioweb/burn/user/" + userName, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* getBuffers */])("FLT");
        if (buffers == undefined)
            return;
        for (let buffer of buffers) {
            const elements = Array.from(buffer.querySelectorAll("table > tbody > tr"));
            elements.forEach(targetRow => {
                const etaData = targetRow.children[7];
                if (etaData.textContent != "") {
                    const eta = Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* convertDurationToETA */])(etaData.textContent);
                    etaData.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(` (${eta})`, this.tag));
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
    constructor(webappID) {
        this.tag = "pb-post-lm-price";
        this.webappID = webappID;
    }
    cleanup() {
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
            var displayElement;
            var possibleElement = Array.from(document.getElementsByClassName("pb-post-lm-price"));
            if (possibleElement.length == 0) {
                displayElement = Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* createTextSpan */])("--", this.tag);
            }
            else {
                displayElement = possibleElement.shift();
                for (let elem of possibleElement) {
                    elem.remove();
                }
            }
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
                        displayElement.textContent = (amount * weightvolume).toFixed(0) + " " + unit + " | " + currencySymbol + (total / (amount * weightvolume)).toFixed(2) + " / " + unit;
                    }
                };
                calculatePricePerUnit();
            }
            else if (this.webappID == undefined) {
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
                    displayElement.textContent = currencySymbol + (total / amount).toFixed(2) + " ea";
                };
                calculatePricePerUnit();
            }
            else if (commodity.value != "") {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var priceData = JSON.parse(xhr.responseText);
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
                            var price = priceData[commodity.value];
                            if (price == undefined) {
                                price = "";
                            }
                            else if (amount + " " == "NaN ") {
                                price = "";
                            }
                            else {
                                price = " | " + (price * amount).toFixed(2) + " Total Corp";
                            }
                            displayElement.textContent = currencySymbol + (total / amount).toFixed(2) + " ea" + (price);
                        };
                        calculatePricePerUnit();
                    }
                };
                xhr.open("GET", "https://script.google.com/macros/s/" + this.webappID + "/exec?mode=%22price%22", true);
                xhr.send(null);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* genericCleanup */])(this.tag);
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
                const perItem = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* toFixed */])(totalCents / count / 100, 2);
                const priceSpan = element.querySelector(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].LMCommodityAdPriceSpan);
                priceSpan.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* createTextSpan */])(` (${perItem}/${unit})`, this.tag));
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
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* genericCleanup */])(this.tag);
    }
    run() {
        this.calculateQueueLoad();
    }
    getEtaFromRow(row) {
        const etaCell = row.querySelectorAll("td").item(5);
        if (etaCell) {
            const etaSpan = etaCell.querySelector("span");
            if (etaSpan) {
                const eta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["j" /* parseDuration */])(etaSpan.textContent);
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
                    const percent = Object(__WEBPACK_IMPORTED_MODULE_1__util__["k" /* toFixed */])(eta / totalTime * 100, 2);
                    const textField = row.querySelectorAll("td").item(6);
                    if (textField && eta > 0) {
                        const span = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* createTextSpan */])(` ${percent}%`, this.tag);
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


class XITHandler {
    constructor(apikey, webappID) {
        this.tag = "pb-xit";
        this.apikey = apikey;
        this.webappID = webappID;
    }
    cleanup() {
    }
    run() {
        const buffers = Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* getBuffers */])("XIT");
        if (buffers == undefined)
            return;
        buffers.forEach(buffer => {
            var tile = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTile);
            if (tile == null) {
                tile = buffer.querySelector(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].XITTileFloat);
            }
            if (tile == null || tile == undefined) {
                return;
            }
            const parametersRaw = Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferHeader))[0].textContent;
            if (parametersRaw == undefined || parametersRaw == null)
                return;
            var parameters = parametersRaw.slice(4).split("_");
            if (parameters == undefined || parameters == null)
                return;
            this.xitTag = parameters[0];
            tile.style.backgroundColor = "#222222";
            tile.style.paddingTop = "4px";
            switch (this.xitTag.toUpperCase()) {
                case "INV":
                    if (this.apikey == undefined) {
                        tile.textContent = "Error! No API Key!";
                        break;
                    }
                    if (parameters[1] == undefined || parameters[2] == undefined) {
                        tile.textContent = "Error! Not Enough Parameters!";
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "FIO INVENTORY";
                    var retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].title == "loaded") {
                        break;
                    }
                    getFIOInventory(tile, parameters[1], parameters[2], this.apikey, this.tag);
                    break;
                case "DISCORD":
                    retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].id == "discord-success") {
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "DISCORD SERVER";
                    var serverID;
                    var channelID;
                    var valid = true;
                    if (parameters[1] != undefined && parameters[2] == undefined) {
                        switch (parameters[1]) {
                            case "PTS":
                                serverID = "851453976649531422";
                                channelID = "851453976649531425";
                                break;
                            case "UFO":
                                serverID = "855488309802172469";
                                channelID = "855489711635431475";
                                break;
                            default:
                                tile.textContent = "Error! No Matching Discord Server!";
                                valid = false;
                        }
                        if (!valid) {
                            break;
                        }
                    }
                    if (parameters[1] == undefined) {
                        tile.textContent = "Error! No Matching Discord Server!";
                        break;
                        ;
                    }
                    else if (parameters[2] != undefined) {
                        serverID = parameters[1];
                        channelID = parameters[2];
                    }
                    const discord = document.createElement("iframe");
                    discord.src = "https://e.widgetbot.io/channels/" + serverID + "/" + channelID;
                    discord.width = "100%";
                    discord.height = "100%";
                    discord.id = "discord-success";
                    tile.appendChild(discord);
                    break;
                    ;
                case "SHEETS":
                    retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].id == "sheets-success") {
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "GOOGLE SHEETS";
                    if (parameters[1] == undefined) {
                        tile.textContent = "Error! No Matching Spreadsheet!";
                        break;
                    }
                    const sheet = document.createElement("iframe");
                    sheet.src = "https://docs.google.com/spreadsheets/d/" + parameters[1] + "/edit?usp=sharing";
                    sheet.width = "100%";
                    sheet.height = "100%";
                    sheet.id = "sheets-success";
                    tile.appendChild(sheet);
                    break;
                case "PRUN":
                    retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].id == "sheets-success") {
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "PRUN-CEPTION";
                    const prun = document.createElement("iframe");
                    prun.src = "https://apex.prosperousuniverse.com/#/";
                    prun.width = "100%";
                    prun.height = "100%";
                    prun.id = "sheets-success";
                    tile.appendChild(prun);
                    break;
                case "AHI":
                    retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].id == "ahi-success") {
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "AHI INVENTORY";
                    var planet;
                    var material;
                    if (parameters[1] == undefined) {
                        tile.textContent = "Error! Too Few Parameters!";
                        break;
                    }
                    else if (parameters[2] == undefined) {
                        if (parameters[1].length <= 3) {
                            material = parameters[1];
                            planet = undefined;
                        }
                        else {
                            planet = parameters[1];
                            material = undefined;
                        }
                    }
                    else {
                        if (parameters[1].length <= 3) {
                            material = parameters[1];
                            planet = parameters[2];
                        }
                        else {
                            material = parameters[2];
                            planet = parameters[1];
                        }
                    }
                    getAHIInventory(tile, material, planet, this.tag);
                    break;
                case "SHEETTABLE":
                    retrievedElements = Array.from(tile.children);
                    if (retrievedElements[0] != undefined && retrievedElements[0].id == "table-success") {
                        break;
                    }
                    Array.from(buffer.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */].BufferTitle))[0].textContent = "GOOGLE SHEETS TABLE";
                    if (parameters[1] == undefined) {
                        tile.textContent = "Error! Not Enough Parameters!";
                        break;
                    }
                    getSheetsTable(tile, parameters[1], this.webappID, this.tag, parameters[2]);
                    break;
                default:
                    tile.textContent = "Error! No Matching Function!";
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = XITHandler;

function getSheetsTable(tile, parameter, webappID, tag, extraParam) {
    tile.appendChild(document.createElement("div"));
    tile.children[0].id = "table-success";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var jsondata = xhr.responseText;
            if (jsondata == undefined || jsondata == null) {
                return;
            }
            var data;
            try {
                data = JSON.parse(jsondata);
            }
            catch (SyntaxError) {
                tile.textContent = "Error! Could Not Load JSON Data!";
                return;
            }
            const table = document.createElement("table");
            table.title = "Sheet Table";
            table.classList.add(tag);
            const head = document.createElement("thead");
            const headRow = document.createElement("tr");
            head.appendChild(headRow);
            table.appendChild(head);
            for (let title of data[0]) {
                const header = document.createElement("th");
                header.title = title + " Header";
                header.textContent = title;
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
                    tableElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(point));
                }
            }
            tile.appendChild(table);
        }
    };
    var url = "https://script.google.com/macros/s/" + webappID + "/exec?mode=%22" + parameter + "%22";
    if (extraParam != undefined) {
        url += "&param=%22" + extraParam + "%22";
    }
    xhr.open("GET", url, true);
    xhr.send(null);
    return;
}
function getAHIInventory(tile, material, planet, tag) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var jsondata = xhr.responseText;
            if (jsondata == undefined || jsondata == null) {
                return;
            }
            console.log(jsondata);
            var inventoryData;
            try {
                inventoryData = JSON.parse(jsondata);
            }
            catch (SyntaxError) {
                tile.textContent = "Error! Could Not Load JSON Data!";
                return;
            }
            var itemsPerRow = Math.ceil(inventoryData.length / 4);
            itemsPerRow = itemsPerRow > 3 ? 3 : itemsPerRow;
            var rowNum = 0;
            for (var i = 0; i < inventoryData.length; i++) {
                var divider;
                if (rowNum == 0) {
                    divider = document.createElement("div");
                    divider.style = "margin: 0px; padding: 5px; display: flex; flex-direction: row; flex-wrap: wrap; border-top-width: 1px; border-top-color: #2b485a; border-top-style: solid; border-bottom-width: 0px; border-bottom-color: #2b485a; border-bottom-style: solid;";
                    if ((i / itemsPerRow) % 2 == 1) {
                        divider.style.backgroundColor = "#23282b";
                    }
                    tile.appendChild(divider);
                }
                else {
                    divider = tile.children[tile.children.length - 1];
                }
                const materialIcon = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createMaterialElement */])(inventoryData[i]["material"], tag, inventoryData[i]["quantityAvail"], true);
                if (rowNum != 0) {
                    materialIcon.style.paddingLeft = "15px";
                }
                divider.appendChild(materialIcon);
                const info = document.createElement("div");
                divider.appendChild(info);
                const name = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(inventoryData[i]["user"]["name"], tag);
                name.style.fontWeight = "bold";
                name.style.display = "block";
                name.style.marginTop = "3px";
                name.style.marginBottom = "2px";
                info.appendChild(name);
                const planetElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(inventoryData[i]["planet"]["name"], tag);
                planetElem.style.display = "block";
                info.appendChild(planetElem);
                const matAmount = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(inventoryData[i]["quantityAvail"] + " " + inventoryData[i]["material"], tag);
                matAmount.style.display = "block";
                info.appendChild(matAmount);
                const timeDifference = (Date.now() - (new Date(inventoryData[i]["timestamp"]).getTime())) / 3600000;
                const timeElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(timeDifference.toFixed(0) + " hours ago", tag);
                info.appendChild(timeElem);
                const fioIndicator = inventoryData[i]["isFIO"] ? "⯁" : "⯀";
                const fioElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(fioIndicator, tag);
                fioElem.style.color = inventoryData[i]["isFIO"] ? "#f4900c" : "#bbbbbb";
                fioElem.style.paddingLeft = "3px";
                info.appendChild(fioElem);
                rowNum++;
                if (rowNum >= itemsPerRow) {
                    rowNum = 0;
                }
            }
            tile.children[tile.children.length - 1].style.borderBottomWidth = "1px";
            return;
        }
    };
    var titleText;
    if (material == undefined && planet == undefined) {
        titleText = "All Bot Entries";
    }
    else if (material == undefined) {
        titleText = "Bot Entries on " + planet;
    }
    else if (planet == undefined) {
        titleText = "Bot Entries for " + material;
    }
    else {
        titleText = "Bot Entries for " + material + " on " + planet;
    }
    var title = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(titleText, tag);
    title.id = "ahi-success";
    title.style.padding = "2px 8px";
    title.style.display = "inline";
    title.style.color = "#3fa2de";
    tile.appendChild(title);
    var url = "https://ahi.technojones.us/api/v1/inventories";
    if (material != undefined || planet != undefined) {
        url += "?";
    }
    if (planet != undefined) {
        url += "planet=" + planet;
    }
    if (material != undefined) {
        if (planet != undefined) {
            url += "&";
        }
        url += "material=" + material;
    }
    xhr.open("POST", url, true);
    xhr.send(null);
    return;
}
function fioMatsAlphabetSort(a, b) {
    if (a["MaterialCategory"] == null || b["MaterialCategory"] == null) {
        return 0;
    }
    return a["MaterialCategory"].localeCompare(b["MaterialCategory"]);
}
function getFIOInventory(tile, user, storage, apikey, tag) {
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        tile.textContent = "Error! Inventory Could Not Be Loaded!";
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var jsondata = xhr.responseText;
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
            header.title = "loaded";
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
            header.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(storage, tag));
            header.appendChild(document.createElement("br"));
            const userElem = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(user, tag);
            userElem.style.paddingLeft = "8px";
            header.appendChild(userElem);
            const volumeLine = document.createElement("div");
            volumeLine.id = "volume-line";
            volumeLine.style.padding = "2px 8px";
            volumeLine.style.color = "#999999";
            volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])("Volume ", tag));
            const volumeBar = document.createElement("progress");
            volumeBar.id = "volume-bar";
            volumeBar.classList.add(tag);
            volumeBar.title = "pmmg-progress-bar";
            volumeBar.style.width = "30px";
            volumeBar.style.height = "9px";
            volumeBar.style.border = "1px solid #999";
            volumeBar.style.margin = "1px 2px";
            volumeBar.max = 1;
            volumeBar.value = volumeUsed / volumeTotal;
            volumeLine.appendChild(volumeBar);
            volumeLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(volumeUsed.toFixed(2) + " / " + volumeTotal.toFixed(0) + " m³", tag));
            header.appendChild(volumeLine);
            const weightLine = document.createElement("div");
            weightLine.id = "weight-line";
            weightLine.style.padding = "2px 8px";
            weightLine.style.color = "#999999";
            weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])("Weight ", tag));
            const weightBar = document.createElement("progress");
            weightBar.id = "weight-bar";
            weightBar.classList.add(tag);
            weightBar.title = "pmmg-progress-bar";
            weightBar.style.width = "30px";
            weightBar.style.height = "9px";
            weightBar.style.border = "1px solid #999";
            weightBar.style.margin = "1px 2px";
            weightBar.max = 1;
            weightBar.value = weightUsed / weightTotal;
            weightLine.appendChild(weightBar);
            weightLine.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* createTextSpan */])(weightUsed.toFixed(2) + " / " + weightTotal.toFixed(0) + " t", tag));
            header.appendChild(weightLine);
            inventoryData["StorageItems"].sort(fioMatsAlphabetSort);
            for (let item of inventoryData["StorageItems"]) {
                body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createMaterialElement */])(item["MaterialTicker"], tag, item["MaterialAmount"], true));
            }
            return;
        }
    };
    xhr.timeout = 2000;
    xhr.open("GET", "https://rest.fnar.net" + "/storage/" + user + "/" + storage, true);
    xhr.setRequestHeader("Authorization", apikey);
    xhr.send(null);
    return;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM1MGM4YzA5NzU0ODQ4NGIxNmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRmxpZ2h0RVRBcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jYWxNYXJrZXRBZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZVJ1bm5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09yZGVyRVRBcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3VtYWJsZVRpbWVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRmxlZXRFVEFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb3N0TE0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoaXBwaW5nQWRzLnRzIiwid2VicGFjazovLy8uL3NyYy9RdWV1ZUxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hJVEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDVztBQUMxQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQ0FBcUM7QUFDL0U7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLDhDQUE4QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxpQkFBaUIsc0VBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCw4Q0FBOEMsMkRBQVEsY0FBYyxxQkFBcUIsV0FBVztBQUNwRztBQUNPO0FBQ1AscURBQXFELDJEQUFRLGNBQWMscUJBQXFCLFdBQVc7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVLTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNaSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTtBQUNLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFFQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUVBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRFQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTM1MGM4YzA5NzU0ODQ4NGIxNmMiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTmFtZXMgfSBmcm9tIFwiLi9HYW1lUHJvcGVydGllc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydER1cmF0aW9uVG9FVEEoZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IHBhcnNlZFNlY29uZHMgPSBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IGV0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXRhLnNldFNlY29uZHMoZXRhLmdldFNlY29uZHMoKSArIHBhcnNlZFNlY29uZHMpO1xyXG4gICAgY29uc3QgZGlmZlRpbWUgPSBNYXRoLmFicyhldGEuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgbGV0IHJldCA9IGV0YS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgIGlmIChkaWZmRGF5cyA+IDApIHtcclxuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGRheXMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKmQvKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccyptLyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypzLyk7XHJcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoZGF5c1sxXSkgKiA4NjQwMDtcclxuICAgIH1cclxuICAgIGlmIChob3Vycykge1xyXG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoaG91cnNbMV0pICogMzYwMDtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVzKSB7XHJcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChtaW51dGVzWzFdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMpIHtcclxuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KHNlY29uZHNbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFNlY29uZHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xyXG4gICAgY29uc3QgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBuZXdTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVudG9yeVtcIkludmVudG9yeVwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnVybkFtb3VudCh0aWNrZXIsIGludmVudG9yeSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJEYWlseUFtb3VudFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdQbGFuZXQocGxhbmV0LCBkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YVtpXVtcIlBsYW5ldE5hbWVcIl0gPT0gcGxhbmV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoXCJAXCIpWzFdO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KFwiIEJhc2VcIilbMF07XHJcbiAgICAgICAgdmFyIGh5cGhlbnMgPSB0ZXh0LnNwbGl0KFwiIC0gXCIpO1xyXG4gICAgICAgIHRleHQgPSBoeXBoZW5zW2h5cGhlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGVuZGluZyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChlbmRpbmdbMV0gIT0gdW5kZWZpbmVkICYmIGVuZGluZ1syXSAhPSB1bmRlZmluZWQgJiYgZW5kaW5nWzJdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRpbmdbMV0gKyBlbmRpbmdbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsRWxlbWVudCh0aWNrZXIsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIiwgYW1vdW50ID0gXCJub25lXCIsIHRleHQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbmFtZSA9IE1hdGVyaWFsTmFtZXNbdGlja2VyXTtcclxuICAgIGNvbnN0IHRvdGFsUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b3RhbFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcIlQ1QzQ1cFRPVzlRVHpva1dQcUxRSmc9PVwiKTtcclxuICAgIHRvdGFsUGljdHVyZS5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcclxuICAgIHRvdGFsUGljdHVyZS5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWF0ZXJpYWwuY2xhc3NMaXN0LmFkZChcIkU3T0xVQ2hZQ2V4TVVnT29sS1lqT1E9PVwiKTtcclxuICAgIG1hdGVyaWFsLnRpdGxlID0gbmFtZTtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmhlaWdodCA9IFwiNDhweFwiO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUud2lkdGggPSBcIjQ4cHhcIjtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2MCwgNjAsIDYwKSwgcmdiKDgwLCA4MCwgODApKVwiO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBcInJnYigxNzAsIDE3MCwgMTcwKVwiO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUuZm9udFNpemUgPSBcIjE1Ljg0cHhcIjtcclxuICAgIG1hdGVyaWFsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgbWF0ZXJpYWwuc3R5bGUubWFyZ2luID0gXCIycHggYXV0b1wiO1xyXG4gICAgdG90YWxQaWN0dXJlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJEaXYuY2xhc3NMaXN0LmFkZChcIm5sUWlycFNrZExIMGE2K0M0bGhkdUE9PVwiKTtcclxuICAgIGNvbnN0IG1hdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1hdFRleHQuY2xhc3NMaXN0LmFkZChcInJqcFlMMWk5Y1ptZjQ3Zk05cVd5WlE9PVwiKTtcclxuICAgIG1hdFRleHQudGV4dENvbnRlbnQgPSB0aWNrZXI7XHJcbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQobWF0VGV4dCk7XHJcbiAgICBtYXRlcmlhbC5hcHBlbmRDaGlsZChzdWJEaXYpO1xyXG4gICAgdG90YWxQaWN0dXJlLmFwcGVuZENoaWxkKG1hdGVyaWFsKTtcclxuICAgIGlmIChhbW91bnQgIT0gXCJub25lXCIpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG51bWJlckRpdi5jbGFzc0xpc3QuYWRkKFwiRzM3ZlVKUHdNb0o2ZktIREdlZystdz09XCIpO1xyXG4gICAgICAgIGNvbnN0IG51bWJlclN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJiSGpsRFBCODRVejB5VW52SGEtWTVBPT1cIik7XHJcbiAgICAgICAgbnVtYmVyU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJfNk9LNnNYTmpJSWhxM05ERDlFTFZHdz09XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi5jbGFzc0xpc3QuYWRkKFwiZ2w3M3ZucDVqbytWYWVwRFJvY3VuQT09XCIpO1xyXG4gICAgICAgIG51bWJlclN1YkRpdi50ZXh0Q29udGVudCA9IGFtb3VudDtcclxuICAgICAgICBudW1iZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyU3ViRGl2KTtcclxuICAgICAgICB0b3RhbFBpY3R1cmUuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcclxuICAgIH1cclxuICAgIHZhciBzdXBlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VwZXJFbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHN1cGVyRWxlbS5hcHBlbmRDaGlsZCh0b3RhbFBpY3R1cmUpO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzdXBlckVsZW0uc3R5bGUud2lkdGggPSBcIjY0cHhcIjtcclxuICAgIHN1cGVyRWxlbS5zdHlsZS5tYXJnaW4gPSBcIjNweFwiO1xyXG4gICAgc3VwZXJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcImF1dG9cIjtcclxuICAgIGlmICh0ZXh0ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiMnB4XCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdXBlckVsZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uID0gMikge1xyXG4gICAgY29uc3QgcG93ZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwb3dlcikgLyBwb3dlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVmZmVyKGJ1ZmZlckNvZGUpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShgLy9kaXZbQGNsYXNzPScke1NlbGVjdG9yLkJ1ZmZlckhlYWRlcn0nXVtzdGFydHMtd2l0aCguLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWZmZXJzKGJ1ZmZlckNvZGUpIHtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgoLiwgJyR7YnVmZmVyQ29kZX0nKV0vLi4vLi5gLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcclxuICAgIHZhciBub2RlO1xyXG4gICAgd2hpbGUgKG5vZGUgPSBub2Rlcy5pdGVyYXRlTmV4dCgpKSB7XHJcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlYUGF0aCh4cGF0aCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoeHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0ge1xyXG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nU3hNb25haWNQcnJTNEpZVHZlKy1SQT09J11cIixcclxuICAgIExNQ29tbW9kaXR5QWRQcmljZVNwYW46IFwiZGl2W2NsYXNzfj0nWlNjRzlBamNUUmdKK01RT1hMdUNXQT09J10gPiBzcGFuXCIsXHJcbiAgICBQcm9kSXRlbTogXCJkaXZbY2xhc3N+PSdKS3RUNHJySUMwR2tQRUFuWmxZY1NnPT0nXSBkaXZbY2xhc3N+PSdiM2ZPbk91S2pRT2hZd28tQ1Y3NVV3PT0nXVwiLFxyXG4gICAgUHJvZFF1ZXVlVGFibGU6IFwidGFibGVbY2xhc3N+PSdfMVFBaHBEVWhkKzdIV0p4cEh0b1dKUT09J11cIixcclxuICAgIEJ1ZmZlckhlYWRlcjogJ2UyUEtSS1pVVzZLOXhMS05BUDU2Y2c9PSBZdHU2Zm82akxiazQzWXFPMHlXa1FBPT0nLFxyXG4gICAgU2lkZWJhcjogXCJkaXYjVE9VUl9UQVJHRVRfU0lERUJBUl9SSUdIVFwiLFxyXG4gICAgTE1Qb3N0Rm9ybTogXCJhcnRpY2xlW2NsYXNzfj0nencrMHpRQlp2YWxhN3lHcCtBZDNEdz09J10gPiBkaXYgPiBkaXYgPiBmb3JtXCIsXHJcbiAgICBXb3JrZm9yY2VDb25zdW1wdGlvblRhYmxlOiBcIiN1bmRlZmluZWQgPiBkaXYgPiBkaXYuTjMyR0w4Q0pCT3czLXJOeDBQQlprUVxcXFw9XFxcXD0uZlRUNTJpXFxcXCsxb0ZhdXhIT2pWZkdUd3dcXFxcPVxcXFw9Lk83Ulg0elhMNGd6SExvT3dUVmJyWHdcXFxcPVxcXFw9ID4gZGl2Ll80S3NpMDlWWGhmdmtHZ3RQYmhDRXlnXFxcXD1cXFxcPS5SVXV3MTFiNjMxZVhyUVlwLUlkMndnXFxcXD1cXFxcPVwiLFxyXG4gICAgWElUVGlsZTogXCIjdW5kZWZpbmVkID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgWElUVGlsZUZsb2F0OiBcIiNUT1VSX1RBUkdFVF9FTVBUWV9USUxFID4gZGl2ID4gZGl2LnpKckl6RXZXTTdLNm9QMGpyUlJwYlFcXFxcPVxcXFw9LmZUVDUyaVxcXFwrMW9GYXV4SE9qVmZHVHd3XFxcXD1cXFxcPS5PN1JYNHpYTDRnekhMb093VFZiclh3XFxcXD1cXFxcPSA+IGRpdiA+IGRpdiA+IGRpdi5nZWNJNXVHQmx1dmpQNUdDUmszZEhBXFxcXD1cXFxcPSA+IGRpdlwiLFxyXG4gICAgQnVmZmVyVGl0bGU6IFwiXzRLc2kwOVZYaGZ2a0dndFBiaENFeWc9PSBSVXV3MTFiNjMxZVhyUVlwLUlkMndnPT1cIixcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2VsZWN0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEN1cnJlbmN5U3ltYm9scyA9IHtcclxuICAgIFwiQ0lTXCI6IFwi4oKhXCIsXHJcbiAgICBcIkFJQ1wiOiBcIuKCs1wiLFxyXG4gICAgXCJOQ0NcIjogXCLigqZcIixcclxuICAgIFwiSUNBXCI6IFwix4JcIixcclxuICAgIFwiRUNEXCI6IFwi4oKsXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbE5hbWVzID0ge1xyXG4gICAgXCJBQVJcIjogXCJBbnRlbm5hIEFycmF5XCIsXHJcbiAgICBcIkFCSFwiOiBcIkFkdmFuY2VkIEJ1bGtoZWFkXCIsXHJcbiAgICBcIkFDU1wiOiBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiLFxyXG4gICAgXCJBREVcIjogXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCIsXHJcbiAgICBcIkFEUlwiOiBcIkF1dG8tRG9jXCIsXHJcbiAgICBcIkFEU1wiOiBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIixcclxuICAgIFwiQUVGXCI6IFwiQWVyb3N0YXQgRm91bmRhdGlvblwiLFxyXG4gICAgXCJBRU5cIjogXCJBZHZhbmNlZCBTVEwgRW5naW5lXCIsXHJcbiAgICBcIkFGUFwiOiBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiLFxyXG4gICAgXCJBRlJcIjogXCJBZHZhbmNlZCBGdWVsIFJvZFwiLFxyXG4gICAgXCJBR1NcIjogXCJBZHZhbmNlZCBIaWdoLUcgU2VhdHNcIixcclxuICAgIFwiQUhQXCI6IFwiQWR2YW5jZWQgSHVsbCBQbGF0ZVwiLFxyXG4gICAgXCJBSVJcIjogXCJBaXIgU2NydWJiZXJcIixcclxuICAgIFwiQUxcIjogXCJBbHVtaW5pdW1cIixcclxuICAgIFwiQUxFXCI6IFwiU3RlbGxhciBQYWxlIEFsZVwiLFxyXG4gICAgXCJBTEdcIjogXCJQcm90ZWluLVJpY2ggQWxnYWVcIixcclxuICAgIFwiQUxPXCI6IFwiQWx1bWluaXVtIE9yZVwiLFxyXG4gICAgXCJBTU1cIjogXCJBbW1vbmlhXCIsXHJcbiAgICBcIkFOWlwiOiBcIkFkdmFuY2VkIE5venpsZVwiLFxyXG4gICAgXCJBUFRcIjogXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLFxyXG4gICAgXCJBUlwiOiBcIkFyZ29uXCIsXHJcbiAgICBcIkFSUFwiOiBcIkFkdmFuY2VkIEFudGktcmFkIFBsYXRlXCIsXHJcbiAgICBcIkFTRVwiOiBcIkFkdmFuY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIixcclxuICAgIFwiQVNUXCI6IFwiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiLFxyXG4gICAgXCJBVEFcIjogXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLFxyXG4gICAgXCJBVFBcIjogXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIixcclxuICAgIFwiQVVcIjogXCJHb2xkXCIsXHJcbiAgICBcIkFVT1wiOiBcIkdvbGQgT3JlXCIsXHJcbiAgICBcIkFXRlwiOiBcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIixcclxuICAgIFwiQVdIXCI6IFwiQWR2YW5jZWQgV2hpcHBsZSBTaGllbGRpbmdcIixcclxuICAgIFwiQkFDXCI6IFwiSGVscGZ1bCBCYWN0ZXJpYVwiLFxyXG4gICAgXCJCQUlcIjogXCJCYXNpYyBBSSBGcmFtZXdvcmtcIixcclxuICAgIFwiQkJIXCI6IFwiQmFzaWMgQnVsa2hlYWRcIixcclxuICAgIFwiQkNPXCI6IFwiQnVkZ2V0IENvbm5lY3RvcnNcIixcclxuICAgIFwiQkRFXCI6IFwiQmFzaWMgRGVjayBFbGVtZW50c1wiLFxyXG4gICAgXCJCRVwiOiBcIkJlcnlsbGl1bVwiLFxyXG4gICAgXCJCRUFcIjogXCJQcm90ZWluLVJpY2ggQmVhbnNcIixcclxuICAgIFwiQkVSXCI6IFwiQmVyeWwgQ3J5c3RhbHNcIixcclxuICAgIFwiQkZQXCI6IFwiQmFzaWMgRnVlbCBQdW1wXCIsXHJcbiAgICBcIkJGUlwiOiBcIkJhc2ljIEZ1ZWwgUm9kXCIsXHJcbiAgICBcIkJHQ1wiOiBcIlNoaWVsZGVkIENvbm5lY3RvcnNcIixcclxuICAgIFwiQkdPXCI6IFwiQmx1ZSBHb2xkXCIsXHJcbiAgICBcIkJHU1wiOiBcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiLFxyXG4gICAgXCJCSFBcIjogXCJCYXNpYyBIdWxsIFBsYXRlXCIsXHJcbiAgICBcIkJJRFwiOiBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIixcclxuICAgIFwiQkxcIjogXCJCcmVhdGhhYmxlIExpcXVpZFwiLFxyXG4gICAgXCJCTEVcIjogXCJEZXNhdHVyYXRpb24gQWdlbnRcIixcclxuICAgIFwiQk1GXCI6IFwiQmFzaWMgTWFpbmZyYW1lXCIsXHJcbiAgICBcIkJORFwiOiBcIkJhbmRhZ2VzXCIsXHJcbiAgICBcIkJPUlwiOiBcIkJvcm9uIENyeXN0YWxzXCIsXHJcbiAgICBcIkJPU1wiOiBcIkJvcm9zaWxpY2F0ZVwiLFxyXG4gICAgXCJCUFRcIjogXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiLFxyXG4gICAgXCJCUjFcIjogXCJDb21tYW5kIEJyaWRnZSBNSzFcIixcclxuICAgIFwiQlIyXCI6IFwiQ29tbWFuZCBCcmlkZ2UgTUsyXCIsXHJcbiAgICBcIkJSTVwiOiBcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCIsXHJcbiAgICBcIkJST1wiOiBcIkJyb256ZVwiLFxyXG4gICAgXCJCUlBcIjogXCJCYXNpYyBBbnRpLXJhZCBQbGF0ZVwiLFxyXG4gICAgXCJCUlNcIjogXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiLFxyXG4gICAgXCJCU0NcIjogXCJCb2R5IFNjYW5uZXJcIixcclxuICAgIFwiQlNFXCI6IFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiLFxyXG4gICAgXCJCVEFcIjogXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiLFxyXG4gICAgXCJCVFNcIjogXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIixcclxuICAgIFwiQldIXCI6IFwiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIixcclxuICAgIFwiQldTXCI6IFwiQmFzaWMgV29ya3N0YXRpb25cIixcclxuICAgIFwiQ1wiOiBcIkNhcmJvblwiLFxyXG4gICAgXCJDQVwiOiBcIkNhbGNpdW1cIixcclxuICAgIFwiQ0FGXCI6IFwiQ2FmZmVpbmF0ZWQgQmVhbnNcIixcclxuICAgIFwiQ0FQXCI6IFwiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCIsXHJcbiAgICBcIkNCTFwiOiBcIkxhcmdlIENhcGFjaXRvciBCYW5rXCIsXHJcbiAgICBcIkNCTVwiOiBcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiLFxyXG4gICAgXCJDQlNcIjogXCJTbWFsbCBDYXBhY2l0b3IgQmFua1wiLFxyXG4gICAgXCJDQ1wiOiBcIkNsaW1hdGUgQ29udHJvbGxlclwiLFxyXG4gICAgXCJDQ0RcIjogXCJDcm93ZCBDb250cm9sIERyb25lXCIsXHJcbiAgICBcIkNEXCI6IFwiQ2FwYWNpdGl2ZSBEaXNwbGF5XCIsXHJcbiAgICBcIkNGXCI6IFwiQ2VyYW1pYyBGYWJyaWNcIixcclxuICAgIFwiQ0hBXCI6IFwiQ29tYnVzdGlvbiBDaGFtYmVyXCIsXHJcbiAgICBcIkNMXCI6IFwiQ2hsb3JpbmVcIixcclxuICAgIFwiQ0xJXCI6IFwiQ2FsaWNoZSBSb2NrXCIsXHJcbiAgICBcIkNNS1wiOiBcIlwiLFxyXG4gICAgXCJDT0ZcIjogXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiLFxyXG4gICAgXCJDT01cIjogXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiLFxyXG4gICAgXCJDT1RcIjogXCJDb3R0b24gRmFicmljXCIsXHJcbiAgICBcIkNRTFwiOiBcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiLFxyXG4gICAgXCJDUU1cIjogXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCIsXHJcbiAgICBcIkNRU1wiOiBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiLFxyXG4gICAgXCJDUVRcIjogXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiLFxyXG4gICAgXCJDUlVcIjogXCJDcnlvZ2VuaWMgVW5pdFwiLFxyXG4gICAgXCJDU1RcIjogXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiLFxyXG4gICAgXCJDVEZcIjogXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiLFxyXG4gICAgXCJDVVwiOiBcIkNvcHBlclwiLFxyXG4gICAgXCJDVU9cIjogXCJDb3BwZXIgT3JlXCIsXHJcbiAgICBcIkRBXCI6IFwiRGF0YSBBbmFseXplclwiLFxyXG4gICAgXCJEQ0hcIjogXCJEcm9uZSBDaGFzc2lzXCIsXHJcbiAgICBcIkRDTFwiOiBcIkR1cmFibGUgQ2FzaW5nIExcIixcclxuICAgIFwiRENNXCI6IFwiRHVyYWJsZSBDYXNpbmcgTVwiLFxyXG4gICAgXCJEQ1NcIjogXCJEdXJhYmxlIENhc2luZyBTXCIsXHJcbiAgICBcIkREXCI6IFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIixcclxuICAgIFwiRERUXCI6IFwiRERUIFBsYW50IEFnZW50XCIsXHJcbiAgICBcIkRFQ1wiOiBcIkRlY29yYXRpdmUgRWxlbWVudHNcIixcclxuICAgIFwiRElTXCI6IFwiSW5mb3JtYXRpb24gRGlzcGxheVwiLFxyXG4gICAgXCJET1VcIjogXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIixcclxuICAgIFwiRFJGXCI6IFwiRHJvbmUgRnJhbWVcIixcclxuICAgIFwiRFZcIjogXCJEYXRhIFZpc3VhbGl6ZXJcIixcclxuICAgIFwiRFdcIjogXCJEcmlua2luZyBXYXRlclwiLFxyXG4gICAgXCJFRENcIjogXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiLFxyXG4gICAgXCJFRVNcIjogXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiLFxyXG4gICAgXCJFTkdcIjogXCJTdGFuZGFyZCBTVEwgRW5naW5lXCIsXHJcbiAgICBcIkVQT1wiOiBcIkVwb3h5IFJlc2luXCIsXHJcbiAgICBcIkVTXCI6IFwiRWluc3RlaW5pdW1cIixcclxuICAgIFwiRVRDXCI6IFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiLFxyXG4gICAgXCJFWE9cIjogXCJFeG9za2VsZXRvbiBXb3JrIFN1aXRcIixcclxuICAgIFwiRlwiOiBcIkZsdW9yaW5lXCIsXHJcbiAgICBcIkZBTFwiOiBcIkZlcnJvbWluaXVtXCIsXHJcbiAgICBcIkZBTlwiOiBcIkFjdGl2ZSBDb29saW5nIERldmljZVwiLFxyXG4gICAgXCJGQ1wiOiBcIkZsb3cgQ29udHJvbCBEZXZpY2VcIixcclxuICAgIFwiRkVcIjogXCJJcm9uXCIsXHJcbiAgICBcIkZFT1wiOiBcIklyb24gT3JlXCIsXHJcbiAgICBcIkZFVFwiOiBcIkZlcnJvLVRpdGFuaXVtXCIsXHJcbiAgICBcIkZGXCI6IFwiRlRMIEZ1ZWxcIixcclxuICAgIFwiRkZDXCI6IFwiRlRMIEZpZWxkIENvbnRyb2xsZXJcIixcclxuICAgIFwiRklNXCI6IFwiRmxhdm91cmVkIEluc3RhLU1lYWxcIixcclxuICAgIFwiRklSXCI6IFwiRmlzc2lvbiBSZWFjdG9yXCIsXHJcbiAgICBcIkZMT1wiOiBcIkZsb2F0aW5nIFRhbmtcIixcclxuICAgIFwiRkxQXCI6IFwiRmx1aWQgUGlwaW5nXCIsXHJcbiAgICBcIkZMWFwiOiBcIkZsdXhcIixcclxuICAgIFwiRk9EXCI6IFwiQWxsLVB1cnBvc2UgRm9kZGVyXCIsXHJcbiAgICBcIkZTRVwiOiBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIixcclxuICAgIFwiRlVOXCI6IFwiRW50ZXJ0YWlubWVudCBVbml0XCIsXHJcbiAgICBcIkdBTFwiOiBcIkdhbGVyaXRlIFJvY2tcIixcclxuICAgIFwiR0NcIjogXCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCIsXHJcbiAgICBcIkdDSFwiOiBcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiLFxyXG4gICAgXCJHRU5cIjogXCJHbGFzcy1iYXNlZCBTVEwgRW5naW5lXCIsXHJcbiAgICBcIkdJTlwiOiBcIkVpbnN0ZWluaXVtLUluZnVzZWQgR2luXCIsXHJcbiAgICBcIkdMXCI6IFwiR2xhc3NcIixcclxuICAgIFwiR05aXCI6IFwiR2xhc3MgTm96emxlXCIsXHJcbiAgICBcIkdSQVwiOiBcIldpbmUtUXVhbGl0eSBHcmFwZXNcIixcclxuICAgIFwiR1JOXCI6IFwiSGlnaC1DYXJiIEdyYWluc1wiLFxyXG4gICAgXCJHVlwiOiBcIkdhcyBWZW50XCIsXHJcbiAgICBcIkhcIjogXCJIeWRyb2dlblwiLFxyXG4gICAgXCJIMk9cIjogXCJXYXRlclwiLFxyXG4gICAgXCJIQUJcIjogXCJIYWJpdGF0IFVuaXRcIixcclxuICAgIFwiSEFMXCI6IFwiSGFsaXRlIENyeXN0YWxzXCIsXHJcbiAgICBcIkhDQ1wiOiBcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiLFxyXG4gICAgXCJIQ1BcIjogXCJIeWRyb2NhcmJvbiBQbGFudHNcIixcclxuICAgIFwiSERcIjogXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCIsXHJcbiAgICBcIkhFXCI6IFwiSGVsaXVtXCIsXHJcbiAgICBcIkhFM1wiOiBcIkhlbGl1bS0zIElzb3RvcGVcIixcclxuICAgIFwiSEVSXCI6IFwiU3BpY3kgSGVyYnNcIixcclxuICAgIFwiSEVYXCI6IFwiSGVsaW90cm9wZSBFeHRyYWN0XCIsXHJcbiAgICBcIkhIUFwiOiBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIixcclxuICAgIFwiSE1TXCI6IFwiSGF6TWF0IFdvcmsgU3VpdFwiLFxyXG4gICAgXCJITlpcIjogXCJIeXBlcnRocnVzdCBOb3p6bGVcIixcclxuICAgIFwiSE9HXCI6IFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiLFxyXG4gICAgXCJIT1BcIjogXCJGbG93ZXJ5IEhvcHNcIixcclxuICAgIFwiSFBDXCI6IFwiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiLFxyXG4gICAgXCJIUFJcIjogXCJIaWdoLXBvd2VyIEZUTCBSZWFjdG9yXCIsXHJcbiAgICBcIkhTRVwiOiBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIixcclxuICAgIFwiSFNTXCI6IFwiU21hcnQgU3BhY2UgU3VpdFwiLFxyXG4gICAgXCJIVEVcIjogXCJIeXBlcnRocnVzdCBTVEwgRW5naW5lXCIsXHJcbiAgICBcIkhZUlwiOiBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIixcclxuICAgIFwiSVwiOiBcIklvZGluZVwiLFxyXG4gICAgXCJJRENcIjogXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIixcclxuICAgIFwiSU1NXCI6IFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIixcclxuICAgIFwiSU5EXCI6IFwiSW5kaWdvIENvbG9yYW50XCIsXHJcbiAgICBcIklOU1wiOiBcIkluc3VGb2FtXCIsXHJcbiAgICBcIkpVSVwiOiBcIlNlZGF0aXZlIFN1YnN0YW5jZVwiLFxyXG4gICAgXCJLT01cIjogXCJLb21idWNoYVwiLFxyXG4gICAgXCJLVlwiOiBcIktldmxhciBGYWJyaWNcIixcclxuICAgIFwiTEJIXCI6IFwiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIixcclxuICAgIFwiTENcIjogXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiLFxyXG4gICAgXCJMQ0JcIjogXCJMYXJnZSBDYXJnbyBCYXkgS2l0XCIsXHJcbiAgICBcIkxDUlwiOiBcIkxpcXVpZCBDcnlzdGFsc1wiLFxyXG4gICAgXCJMRFwiOiBcIkxvY2FsIERhdGFiYXNlXCIsXHJcbiAgICBcIkxERVwiOiBcIkxpZ2h0d2VpZ2h0IERlY2sgRWxlbWVudHNcIixcclxuICAgIFwiTERJXCI6IFwiTGFzZXIgRGlvZGVzXCIsXHJcbiAgICBcIkxFU1wiOiBcIkxpcXVpZCBFaW5zdGVpbml1bVwiLFxyXG4gICAgXCJMRkVcIjogXCJMYXJnZSBGVEwgRW1pdHRlclwiLFxyXG4gICAgXCJMRkxcIjogXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiLFxyXG4gICAgXCJMRlBcIjogXCJMb3ctaGVhdCBGdWVsIFB1bXBcIixcclxuICAgIFwiTEhQXCI6IFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiLFxyXG4gICAgXCJMSVwiOiBcIkxpdGhpdW1cIixcclxuICAgIFwiTElPXCI6IFwiTGl0aGl1bSBPcmVcIixcclxuICAgIFwiTElTXCI6IFwiTGlmZSBTdXBwb3J0IFN5c3RlbVwiLFxyXG4gICAgXCJMSVRcIjogXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiLFxyXG4gICAgXCJMT0dcIjogXCJMb2dpc3RpY3MgU3lzdGVtXCIsXHJcbiAgICBcIkxTRVwiOiBcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIixcclxuICAgIFwiTFNMXCI6IFwiTGFyZ2UgU1RMIEZ1ZWwgVGFuayBLaXRcIixcclxuICAgIFwiTFNUXCI6IFwiTGltZXN0b25lXCIsXHJcbiAgICBcIkxUQVwiOiBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCIsXHJcbiAgICBcIkxVXCI6IFwiTGFib3JhdG9yeSBVbml0XCIsXHJcbiAgICBcIk1BR1wiOiBcIk1hZ25ldGl0ZVwiLFxyXG4gICAgXCJNQUlcIjogXCJIaWdoLUNhcmIgTWFpemVcIixcclxuICAgIFwiTUJcIjogXCJNb3RoZXJib2FyZFwiLFxyXG4gICAgXCJNQ0JcIjogXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiLFxyXG4gICAgXCJNQ0dcIjogXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIixcclxuICAgIFwiTUVBXCI6IFwiUXVhbGl0eSBNZWF0IE1lYWxcIixcclxuICAgIFwiTUVEXCI6IFwiQmFzaWMgTWVkaWNhbCBLaXRcIixcclxuICAgIFwiTUZFXCI6IFwiTWVkaXVtIEZUTCBFbWl0dGVyXCIsXHJcbiAgICBcIk1GS1wiOiBcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIixcclxuICAgIFwiTUZMXCI6IFwiTWVkaXVtIEZUTCBGdWVsIFRhbmsgS2l0XCIsXHJcbiAgICBcIk1HXCI6IFwiTWFnbmVzaXVtXCIsXHJcbiAgICBcIk1HQ1wiOiBcIk1hZ25ldGljIEdyb3VuZCBDb3ZlclwiLFxyXG4gICAgXCJNR1NcIjogXCJNYWduZXNpdGVcIixcclxuICAgIFwiTUhMXCI6IFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiLFxyXG4gICAgXCJNSFBcIjogXCJNaWNybyBIZWFkcGhvbmVzXCIsXHJcbiAgICBcIk1MSVwiOiBcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCIsXHJcbiAgICBcIk1QQ1wiOiBcIk1pY3JvLVByb2Nlc3NvclwiLFxyXG4gICAgXCJNU0xcIjogXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIixcclxuICAgIFwiTVRDXCI6IFwiTWVnYVR1YmUgQ29hdGluZ1wiLFxyXG4gICAgXCJNVFBcIjogXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCIsXHJcbiAgICBcIk1VU1wiOiBcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIixcclxuICAgIFwiTVdGXCI6IFwiTWVkaXVtIFdhZmVyXCIsXHJcbiAgICBcIk5cIjogXCJOaXRyb2dlblwiLFxyXG4gICAgXCJOQVwiOiBcIlNvZGl1bVwiLFxyXG4gICAgXCJOQUJcIjogXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIixcclxuICAgIFwiTkNTXCI6IFwiTmFuby1DYXJib24gU2hlZXRpbmdcIixcclxuICAgIFwiTkVcIjogXCJOZW9uXCIsXHJcbiAgICBcIk5GXCI6IFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIixcclxuICAgIFwiTkZJXCI6IFwiTmFubyBGaWJlclwiLFxyXG4gICAgXCJOR1wiOiBcIk5hbm8tQ29hdGVkIEdsYXNzXCIsXHJcbiAgICBcIk5MXCI6IFwiTnlsb24gRmFicmljXCIsXHJcbiAgICBcIk5OXCI6IFwiTmV1cmFsIE5ldHdvcmtcIixcclxuICAgIFwiTk9aXCI6IFwiQmFzaWMgTm96emxlXCIsXHJcbiAgICBcIk5SXCI6IFwiTmFuby1FbmhhbmNlZCBSZXNpblwiLFxyXG4gICAgXCJOU1wiOiBcIk51dHJpZW50IFNvbHV0aW9uXCIsXHJcbiAgICBcIk5TVFwiOiBcIk5ldXJvU3RpbXVsYW50c1wiLFxyXG4gICAgXCJOVVRcIjogXCJUcmlnbHljZXJpZGUgTnV0c1wiLFxyXG4gICAgXCJOVjFcIjogXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIixcclxuICAgIFwiTlYyXCI6IFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCIsXHJcbiAgICBcIk9cIjogXCJPeHlnZW5cIixcclxuICAgIFwiT0ZGXCI6IFwiT2ZmaWNlIFN1cHBsaWVzXCIsXHJcbiAgICBcIk9MRlwiOiBcIk9sZmFjdG9yeSBTdWJzdGFuY2VzXCIsXHJcbiAgICBcIk9TXCI6IFwiT3BlcmF0aW5nIFN5c3RlbVwiLFxyXG4gICAgXCJPVkVcIjogXCJCYXNpYyBPdmVyYWxsc1wiLFxyXG4gICAgXCJQQ0JcIjogXCJQcmludGVkIENpcmN1aXQgQm9hcmRcIixcclxuICAgIFwiUERBXCI6IFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIixcclxuICAgIFwiUEVcIjogXCJQb2x5LUV0aHlsZW5lXCIsXHJcbiAgICBcIlBGRVwiOiBcIlByZW1pdW0gRmVydGlsaXplclwiLFxyXG4gICAgXCJQR1wiOiBcIlBvbHltZXIgR3JhbnVsYXRlXCIsXHJcbiAgICBcIlBJQlwiOiBcIlBpbmViZXJyaWVzXCIsXHJcbiAgICBcIlBLXCI6IFwiUGFpbmtpbGxlcnNcIixcclxuICAgIFwiUE9XXCI6IFwiUG93ZXIgQ2VsbFwiLFxyXG4gICAgXCJQUEFcIjogXCJQcm90ZWluIFBhc3RlXCIsXHJcbiAgICBcIlBTSFwiOiBcIlByZXNzdXJlIFNoaWVsZGluZ1wiLFxyXG4gICAgXCJQU0xcIjogXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiLFxyXG4gICAgXCJQU01cIjogXCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiLFxyXG4gICAgXCJQU1NcIjogXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiLFxyXG4gICAgXCJQVFwiOiBcIlBvd2VyIFRvb2xzXCIsXHJcbiAgICBcIlBXT1wiOiBcIlBhZGRlZCBXb3JrIE92ZXJhbGxcIixcclxuICAgIFwiUUNSXCI6IFwiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCIsXHJcbiAgICBcIlJBRFwiOiBcIlJhZGlvIERldmljZVwiLFxyXG4gICAgXCJSQUdcIjogXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCIsXHJcbiAgICBcIlJBTVwiOiBcIk1lbW9yeSBCYW5rXCIsXHJcbiAgICBcIlJBVFwiOiBcIkJhc2ljIFJhdGlvbnNcIixcclxuICAgIFwiUkJIXCI6IFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiLFxyXG4gICAgXCJSQ09cIjogXCJSYXcgQ290dG9uIEZpYmVyXCIsXHJcbiAgICBcIlJDU1wiOiBcIlJlYWN0b3IgQ29udHJvbCBTeXN0ZW1cIixcclxuICAgIFwiUkNUXCI6IFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIixcclxuICAgIFwiUkRFXCI6IFwiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCIsXHJcbiAgICBcIlJETFwiOiBcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLFxyXG4gICAgXCJSRFNcIjogXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIixcclxuICAgIFwiUkVBXCI6IFwiQ2hlbWljYWwgUmVhZ2VudHNcIixcclxuICAgIFwiUkVEXCI6IFwiUmVzY3VlIERyb25lXCIsXHJcbiAgICBcIlJFUFwiOiBcIlJlcGFpciBLaXRcIixcclxuICAgIFwiUkdcIjogXCJSZWluZm9yY2VkIEdsYXNzXCIsXHJcbiAgICBcIlJHT1wiOiBcIlJlZCBHb2xkXCIsXHJcbiAgICBcIlJIUFwiOiBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiLFxyXG4gICAgXCJST01cIjogXCJOb24tVm9sYXRpbGUgTWVtb3J5XCIsXHJcbiAgICBcIlJTRVwiOiBcIlJlaW5mb3JjZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiLFxyXG4gICAgXCJSU0hcIjogXCJSYWRpYXRpb24gU2hpZWxkaW5nXCIsXHJcbiAgICBcIlJTSVwiOiBcIlJhdyBTaWxrIFN0cmFpbnNcIixcclxuICAgIFwiUlRBXCI6IFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLFxyXG4gICAgXCJTXCI6IFwiU3VsZnVyXCIsXHJcbiAgICBcIlNBXCI6IFwiU2VhcmNoIEFsZ29yaXRobVwiLFxyXG4gICAgXCJTQUxcIjogXCJTb3J0aW5nIEFsZ29yaXRobVwiLFxyXG4gICAgXCJTQVJcIjogXCJTZW5zb3IgQXJyYXlcIixcclxuICAgIFwiU0NcIjogXCJTdGVtIENlbGwgVHJlYXRtZW50XCIsXHJcbiAgICBcIlNDQlwiOiBcIlNtYWxsIENhcmdvIEJheSBLaXRcIixcclxuICAgIFwiU0NOXCI6IFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCIsXHJcbiAgICBcIlNDUlwiOiBcIlN1bGZ1ciBDcnlzdGFsc1wiLFxyXG4gICAgXCJTRFJcIjogXCJTdXJnaWNhbCBEcm9uZVwiLFxyXG4gICAgXCJTRUFcIjogXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiLFxyXG4gICAgXCJTRU5cIjogXCJTZW5zb3JcIixcclxuICAgIFwiU0VRXCI6IFwiU3VyZ2ljYWwgRXF1aXBtZW50XCIsXHJcbiAgICBcIlNGXCI6IFwiU1RMIEZ1ZWxcIixcclxuICAgIFwiU0ZFXCI6IFwiU21hbGwgRlRMIEVtaXR0ZXJcIixcclxuICAgIFwiU0ZLXCI6IFwiU21hbGwgRmFzdGVuZXIgS2l0XCIsXHJcbiAgICBcIlNGTFwiOiBcIlNtYWxsIEZUTCBGdWVsIFRhbmsgS2l0XCIsXHJcbiAgICBcIlNJXCI6IFwiU2lsaWNvblwiLFxyXG4gICAgXCJTSUxcIjogXCJTaWxrZW4gRmFicmljXCIsXHJcbiAgICBcIlNJT1wiOiBcIlNpbGljb24gT3JlXCIsXHJcbiAgICBcIlNOTVwiOiBcIlNwYXRpYWwgTmF2aWdhdGlvbiBNYXBcIixcclxuICAgIFwiU09JXCI6IFwiQXJ0aWZpY2lhbCBTb2lsXCIsXHJcbiAgICBcIlNPTFwiOiBcIlNvbGFyIENlbGxcIixcclxuICAgIFwiU1BcIjogXCJTb2xhciBQYW5lbFwiLFxyXG4gICAgXCJTUkRcIjogXCJTaGlwLVJlcGFpciBEcm9uZVwiLFxyXG4gICAgXCJTUlBcIjogXCJTcGVjaWFsaXplZCBBbnRpLXJhZCBQbGF0ZVwiLFxyXG4gICAgXCJTU0NcIjogXCJTdHJ1Y3R1cmFsIFNwYWNlY3JhZnQgQ29tcG9uZW50XCIsXHJcbiAgICBcIlNTTFwiOiBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCIsXHJcbiAgICBcIlNUTFwiOiBcIlN0ZWVsXCIsXHJcbiAgICBcIlNUUlwiOiBcIk1lZGljYWwgU3RyZXRjaGVyXCIsXHJcbiAgICBcIlNUU1wiOiBcIlN0YWJpbGl0eSBTdXBwb3J0IFN5c3RlbVwiLFxyXG4gICAgXCJTVVwiOiBcIlN1cmdlcnkgVW5pdFwiLFxyXG4gICAgXCJTVURcIjogXCJTdXJ2ZWlsbGFuY2UgRHJvbmVcIixcclxuICAgIFwiU1VOXCI6IFwiU2FmZXR5IFVuaWZvcm1cIixcclxuICAgIFwiU1dGXCI6IFwiU21hbGwgV2FmZXJcIixcclxuICAgIFwiVEFcIjogXCJUYW50YWx1bVwiLFxyXG4gICAgXCJUQUNcIjogXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIixcclxuICAgIFwiVEFJXCI6IFwiVGFudGFsaXRlIFJvY2tcIixcclxuICAgIFwiVENcIjogXCJUZWNobmV0aXVtXCIsXHJcbiAgICBcIlRDQlwiOiBcIlRpbnkgQ2FyZ28gQmF5IEtpdFwiLFxyXG4gICAgXCJUQ0xcIjogXCJUQ0wgQWNpZFwiLFxyXG4gICAgXCJUQ09cIjogXCJUZWNobmV0aXVtIE94aWRlXCIsXHJcbiAgICBcIlRDU1wiOiBcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiLFxyXG4gICAgXCJUQ1VcIjogXCJUcmF1bWEgQ2FyZSBVbml0XCIsXHJcbiAgICBcIlRIRlwiOiBcIlRoZXJtb0ZsdWlkXCIsXHJcbiAgICBcIlRIUFwiOiBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLFxyXG4gICAgXCJUSVwiOiBcIlRpdGFuaXVtXCIsXHJcbiAgICBcIlRJT1wiOiBcIlRpdGFuaXVtIE9yZVwiLFxyXG4gICAgXCJUS1wiOiBcIlRlY2hub0tldmxhciBGYWJyaWNcIixcclxuICAgIFwiVFBVXCI6IFwiVGVuc29yIFByb2Nlc3NpbmcgVW5pdFwiLFxyXG4gICAgXCJUUkFcIjogXCJBdWRpbyBUcmFuc21pdHRlclwiLFxyXG4gICAgXCJUUk5cIjogXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCIsXHJcbiAgICBcIlRSVVwiOiBcIlRydXNzXCIsXHJcbiAgICBcIlRTXCI6IFwiVGVjdG9zaWxpc2l0ZVwiLFxyXG4gICAgXCJUU0hcIjogXCJUaGVybWFsIFNoaWVsZGluZ1wiLFxyXG4gICAgXCJUVUJcIjogXCJUZXN0IFR1YmVzXCIsXHJcbiAgICBcIlVUU1wiOiBcIlVuaXZlcnNhbCBUb29sc2V0XCIsXHJcbiAgICBcIlZDQlwiOiBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIixcclxuICAgIFwiVkVHXCI6IFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiLFxyXG4gICAgXCJWR1wiOiBcIlZpdGFHZWxcIixcclxuICAgIFwiVklUXCI6IFwiVml0YSBFc3NlbmNlXCIsXHJcbiAgICBcIlZTQ1wiOiBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiLFxyXG4gICAgXCJXXCI6IFwiVHVuZ3N0ZW5cIixcclxuICAgIFwiV0FJXCI6IFwiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxyXG4gICAgXCJXQUxcIjogXCJBbHBoYS1TdGFiaWxpemVkIFR1bmdzdGVuXCIsXHJcbiAgICBcIldDQlwiOiBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCIsXHJcbiAgICBcIldJTlwiOiBcIlNtYXJ0IFppbmZhbmRlbFwiLFxyXG4gICAgXCJXTVwiOiBcIldpbmRvdyBNYW5hZ2VyXCIsXHJcbiAgICBcIldPUlwiOiBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCIsXHJcbiAgICBcIldSXCI6IFwiV2F0ZXIgUmVjbGFpbWVyXCIsXHJcbiAgICBcIldTXCI6IFwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIixcclxuICAgIFwiWklSXCI6IFwiWmlyY29uIENyeXN0YWxzXCIsXHJcbiAgICBcIlpSXCI6IFwiWmlyY29uaXVtXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNYXRlcmlhbHMgPSB7XHJcbiAgICBcIkFudGVubmEgQXJyYXlcIjogW1wiQUFSXCIsIDAuNzgsIDAuNV0sXHJcbiAgICBcIkFkdmFuY2VkIEJ1bGtoZWFkXCI6IFtcIkFCSFwiLCAwLjYsIDAuOV0sXHJcbiAgICBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiOiBbXCJBQ1NcIiwgMC4zLCAwLjJdLFxyXG4gICAgXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIkFERVwiLCAwLjQsIDEuNV0sXHJcbiAgICBcIkF1dG8tRG9jXCI6IFtcIkFEUlwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIjogW1wiQURTXCIsIDAuNywgMl0sXHJcbiAgICBcIkFlcm9zdGF0IEZvdW5kYXRpb25cIjogW1wiQUVGXCIsIDIsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBTVEwgRW5naW5lXCI6IFtcIkFFTlwiLCAxNCwgN10sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiOiBbXCJBRlBcIiwgMSwgMC4yNV0sXHJcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUm9kXCI6IFtcIkFGUlwiLCAwLjQsIDAuMV0sXHJcbiAgICBcIkFkdmFuY2VkIEhpZ2gtRyBTZWF0c1wiOiBbXCJBR1NcIiwgMzAsIDVdLFxyXG4gICAgXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCI6IFtcIkFIUFwiLCAyMCwgMTBdLFxyXG4gICAgXCJBaXIgU2NydWJiZXJcIjogW1wiQUlSXCIsIDEuNywgM10sXHJcbiAgICBcIkFsdW1pbml1bVwiOiBbXCJBTFwiLCAyLjcsIDFdLFxyXG4gICAgXCJTdGVsbGFyIFBhbGUgQWxlXCI6IFtcIkFMRVwiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBBbGdhZVwiOiBbXCJBTEdcIiwgMC43LCAxXSxcclxuICAgIFwiQWx1bWluaXVtIE9yZVwiOiBbXCJBTE9cIiwgMS4zNSwgMV0sXHJcbiAgICBcIkFtbW9uaWFcIjogW1wiQU1NXCIsIDAuODYsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBOb3p6bGVcIjogW1wiQU5aXCIsIDYsIDNdLFxyXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gVGlsZVwiOiBbXCJBUFRcIiwgMC4wMywgMC4zXSxcclxuICAgIFwiQXJnb25cIjogW1wiQVJcIiwgMS43ODQsIDFdLFxyXG4gICAgXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiOiBbXCJBUlBcIiwgMC4wNCwgMC4yXSxcclxuICAgIFwiQWR2YW5jZWQgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJBU0VcIiwgMC41LCAwLjZdLFxyXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCI6IFtcIkFTVFwiLCA0Ljk4LCAxXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQVRBXCIsIDAuMywgMC40XSxcclxuICAgIFwiQWR2YW5jZWQgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIkFUUFwiLCAyLjksIDFdLFxyXG4gICAgXCJHb2xkXCI6IFtcIkFVXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiR29sZCBPcmVcIjogW1wiQVVPXCIsIDMuODYsIDFdLFxyXG4gICAgXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCI6IFtcIkFXRlwiLCAwLjgsIDEuMl0sXHJcbiAgICBcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkFXSFwiLCAwLjEyLCAxXSxcclxuICAgIFwiSGVscGZ1bCBCYWN0ZXJpYVwiOiBbXCJCQUNcIiwgMC4xNSwgMC4xNV0sXHJcbiAgICBcIkJhc2ljIEFJIEZyYW1ld29ya1wiOiBbXCJCQUlcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJCYXNpYyBCdWxraGVhZFwiOiBbXCJCQkhcIiwgMC41LCAwLjhdLFxyXG4gICAgXCJCdWRnZXQgQ29ubmVjdG9yc1wiOiBbXCJCQ09cIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQmFzaWMgRGVjayBFbGVtZW50c1wiOiBbXCJCREVcIiwgMC4xLCAxLjVdLFxyXG4gICAgXCJCZXJ5bGxpdW1cIjogW1wiQkVcIiwgMS44NCwgMV0sXHJcbiAgICBcIlByb3RlaW4tUmljaCBCZWFuc1wiOiBbXCJCRUFcIiwgMC44LCAxXSxcclxuICAgIFwiQmVyeWwgQ3J5c3RhbHNcIjogW1wiQkVSXCIsIDEuOTIsIDFdLFxyXG4gICAgXCJCYXNpYyBGdWVsIFB1bXBcIjogW1wiQkZQXCIsIDAuOCwgMC4yXSxcclxuICAgIFwiQmFzaWMgRnVlbCBSb2RcIjogW1wiQkZSXCIsIDAuMywgMC4xXSxcclxuICAgIFwiU2hpZWxkZWQgQ29ubmVjdG9yc1wiOiBbXCJCR0NcIiwgMC4wMSwgMC4wMDJdLFxyXG4gICAgXCJCbHVlIEdvbGRcIjogW1wiQkdPXCIsIDE5LjMyLCAxXSxcclxuICAgIFwiQmFzaWMgSGlnaC1HIFNlYXRzXCI6IFtcIkJHU1wiLCAyMCwgM10sXHJcbiAgICBcIkJhc2ljIEh1bGwgUGxhdGVcIjogW1wiQkhQXCIsIDEwLCAxMF0sXHJcbiAgICBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIjogW1wiQklEXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJCcmVhdGhhYmxlIExpcXVpZFwiOiBbXCJCTFwiLCAxLjEyLCAxXSxcclxuICAgIFwiRGVzYXR1cmF0aW9uIEFnZW50XCI6IFtcIkJMRVwiLCAwLjUsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1haW5mcmFtZVwiOiBbXCJCTUZcIiwgMC44LCAxLjJdLFxyXG4gICAgXCJCYW5kYWdlc1wiOiBbXCJCTkRcIiwgMC4wMDEsIDAuMDA1XSxcclxuICAgIFwiQm9yb24gQ3J5c3RhbHNcIjogW1wiQk9SXCIsIDEuOCwgMV0sXHJcbiAgICBcIkJvcm9zaWxpY2F0ZVwiOiBbXCJCT1NcIiwgMS41LCAxXSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIFRpbGVcIjogW1wiQlBUXCIsIDAuMDIsIDAuM10sXHJcbiAgICBcIkNvbW1hbmQgQnJpZGdlIE1LMVwiOiBbXCJCUjFcIiwgMTgwLCAzMDBdLFxyXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzJcIjogW1wiQlIyXCIsIDI4MCwgNDAwXSxcclxuICAgIFwiQmlvcmVhY3RpdmUgTWluZXJhbHNcIjogW1wiQlJNXCIsIDIuNSwgMV0sXHJcbiAgICBcIkJyb256ZVwiOiBbXCJCUk9cIiwgOC43MywgMV0sXHJcbiAgICBcIkJhc2ljIEFudGktcmFkIFBsYXRlXCI6IFtcIkJSUFwiLCAwLjAzLCAwLjJdLFxyXG4gICAgXCJTaG9ydC1kaXN0YW5jZSBDb21tYW5kIEJyaWRnZVwiOiBbXCJCUlNcIiwgMTUwLCAyMDBdLFxyXG4gICAgXCJCb2R5IFNjYW5uZXJcIjogW1wiQlNDXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJCU0VcIiwgMC4zLCAwLjVdLFxyXG4gICAgXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJCVEFcIiwgMC4zLCAwLjRdLFxyXG4gICAgXCJCYWN0ZXJpYWwgVHVuZ3N0ZW4gU29sdXRpb25cIjogW1wiQlRTXCIsIDEuMDUsIDFdLFxyXG4gICAgXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJCV0hcIiwgMC4xLCAxXSxcclxuICAgIFwiQmFzaWMgV29ya3N0YXRpb25cIjogW1wiQldTXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIkNhcmJvblwiOiBbXCJDXCIsIDIuMjUsIDFdLFxyXG4gICAgXCJDYWxjaXVtXCI6IFtcIkNBXCIsIDEuNTQsIDFdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBCZWFuc1wiOiBbXCJDQUZcIiwgMC44NiwgMV0sXHJcbiAgICBcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiOiBbXCJDQVBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JMXCIsIDUuNCwgMi40XSxcclxuICAgIFwiTWVkaXVtIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCTVwiLCAzLjYsIDEuNl0sXHJcbiAgICBcIlNtYWxsIENhcGFjaXRvciBCYW5rXCI6IFtcIkNCU1wiLCAxLjgsIDAuOF0sXHJcbiAgICBcIkNsaW1hdGUgQ29udHJvbGxlclwiOiBbXCJDQ1wiLCAwLjUsIDFdLFxyXG4gICAgXCJDcm93ZCBDb250cm9sIERyb25lXCI6IFtcIkNDRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJDYXBhY2l0aXZlIERpc3BsYXlcIjogW1wiQ0RcIiwgMC4wMDQsIDAuMDAyXSxcclxuICAgIFwiQ2VyYW1pYyBGYWJyaWNcIjogW1wiQ0ZcIiwgMi44MiwgMV0sXHJcbiAgICBcIkNvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJDSEFcIiwgMS4yLCAwLjddLFxyXG4gICAgXCJDaGxvcmluZVwiOiBbXCJDTFwiLCAzLjIsIDFdLFxyXG4gICAgXCJDYWxpY2hlIFJvY2tcIjogW1wiQ0xJXCIsIDIuNDIsIDFdLFxyXG4gICAgXCJcIjogW1wiQ01LXCIsIDQuNTYsIDMzLjJdLFxyXG4gICAgXCJDYWZmZWluYXRlZCBJbmZ1c2lvblwiOiBbXCJDT0ZcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiOiBbXCJDT01cIiwgMC41LCAxLjVdLFxyXG4gICAgXCJDb3R0b24gRmFicmljXCI6IFtcIkNPVFwiLCAwLjc3LCAxXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTGFyZ2UpXCI6IFtcIkNRTFwiLCA3NSwgMTUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiOiBbXCJDUU1cIiwgNTAsIDEwMF0sXHJcbiAgICBcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiOiBbXCJDUVNcIiwgMjUsIDUwXSxcclxuICAgIFwiQ3JldyBRdWFydGVycyAoVGlueSlcIjogW1wiQ1FUXCIsIDEyLjUsIDI1XSxcclxuICAgIFwiQ3J5b2dlbmljIFVuaXRcIjogW1wiQ1JVXCIsIDIuMiwgMl0sXHJcbiAgICBcIkNyeW9nZW5pYyBTdGFiaWxpemVyXCI6IFtcIkNTVFwiLCAxLjE0LCAxXSxcclxuICAgIFwiQ2VyYW1pYy1UdW5nc3RlbiBGYWJyaWNcIjogW1wiQ1RGXCIsIDQuMzIsIDFdLFxyXG4gICAgXCJDb3BwZXJcIjogW1wiQ1VcIiwgOC45MiwgMV0sXHJcbiAgICBcIkNvcHBlciBPcmVcIjogW1wiQ1VPXCIsIDQuMDEsIDFdLFxyXG4gICAgXCJEYXRhIEFuYWx5emVyXCI6IFtcIkRBXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJvbmUgQ2hhc3Npc1wiOiBbXCJEQ0hcIiwgMC4yLCAwLjAzXSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTFwiOiBbXCJEQ0xcIiwgMC4wOCwgMC44XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgTVwiOiBbXCJEQ01cIiwgMC4wNCwgMC40XSxcclxuICAgIFwiRHVyYWJsZSBDYXNpbmcgU1wiOiBbXCJEQ1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiRGlzdHJpYnV0ZWQgRGF0YWJhc2VcIjogW1wiRERcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJERFQgUGxhbnQgQWdlbnRcIjogW1wiRERUXCIsIDAuMTEsIDAuMV0sXHJcbiAgICBcIkRlY29yYXRpdmUgRWxlbWVudHNcIjogW1wiREVDXCIsIDAuNSwgMl0sXHJcbiAgICBcIkluZm9ybWF0aW9uIERpc3BsYXlcIjogW1wiRElTXCIsIDAuMDIsIDAuMDJdLFxyXG4gICAgXCJEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiRE9VXCIsIDUsIDRdLFxyXG4gICAgXCJEcm9uZSBGcmFtZVwiOiBbXCJEUkZcIiwgMC4xLCAwLjAyXSxcclxuICAgIFwiRGF0YSBWaXN1YWxpemVyXCI6IFtcIkRWXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiRHJpbmtpbmcgV2F0ZXJcIjogW1wiRFdcIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiOiBbXCJFRENcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJFbnJpY2hlZCBFaW5zdGVpbml1bVwiOiBbXCJFRVNcIiwgOS4yLCAxXSxcclxuICAgIFwiU3RhbmRhcmQgU1RMIEVuZ2luZVwiOiBbXCJFTkdcIiwgOCwgNF0sXHJcbiAgICBcIkVwb3h5IFJlc2luXCI6IFtcIkVQT1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiRWluc3RlaW5pdW1cIjogW1wiRVNcIiwgMC44OCwgMC4xXSxcclxuICAgIFwiRW5yaWNoZWQgVGVjaG5ldGl1bVwiOiBbXCJFVENcIiwgNC4xLCAxXSxcclxuICAgIFwiRXhvc2tlbGV0b24gV29yayBTdWl0XCI6IFtcIkVYT1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJGbHVvcmluZVwiOiBbXCJGXCIsIDEuNjk2LCAxXSxcclxuICAgIFwiRmVycm9taW5pdW1cIjogW1wiRkFMXCIsIDMuMjIsIDFdLFxyXG4gICAgXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIjogW1wiRkFOXCIsIDAuMSwgMC4xXSxcclxuICAgIFwiRmxvdyBDb250cm9sIERldmljZVwiOiBbXCJGQ1wiLCAwLjUsIDAuMjVdLFxyXG4gICAgXCJJcm9uXCI6IFtcIkZFXCIsIDcuODc0LCAxXSxcclxuICAgIFwiSXJvbiBPcmVcIjogW1wiRkVPXCIsIDUuOSwgMV0sXHJcbiAgICBcIkZlcnJvLVRpdGFuaXVtXCI6IFtcIkZFVFwiLCA2Ljg1LCAxXSxcclxuICAgIFwiRlRMIEZ1ZWxcIjogW1wiRkZcIiwgMC4wNSwgMC4wMV0sXHJcbiAgICBcIkZUTCBGaWVsZCBDb250cm9sbGVyXCI6IFtcIkZGQ1wiLCA1MCwgMTZdLFxyXG4gICAgXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiOiBbXCJGSU1cIiwgMC41NSwgMC41XSxcclxuICAgIFwiRmlzc2lvbiBSZWFjdG9yXCI6IFtcIkZJUlwiLCA3LCA0LjldLFxyXG4gICAgXCJGbG9hdGluZyBUYW5rXCI6IFtcIkZMT1wiLCAxLCAyXSxcclxuICAgIFwiRmx1aWQgUGlwaW5nXCI6IFtcIkZMUFwiLCAwLjMsIDJdLFxyXG4gICAgXCJGbHV4XCI6IFtcIkZMWFwiLCAwLjI1LCAwLjFdLFxyXG4gICAgXCJBbGwtUHVycG9zZSBGb2RkZXJcIjogW1wiRk9EXCIsIDEuMiwgMV0sXHJcbiAgICBcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIjogW1wiRlNFXCIsIDYsIDNdLFxyXG4gICAgXCJFbnRlcnRhaW5tZW50IFVuaXRcIjogW1wiRlVOXCIsIDUsIDRdLFxyXG4gICAgXCJHYWxlcml0ZSBSb2NrXCI6IFtcIkdBTFwiLCAyLjUxLCAxXSxcclxuICAgIFwiQ3lsaW5kcmljYWwgR2FzIENvbnRhaW5lclwiOiBbXCJHQ1wiLCAwLjA1LCAwLjFdLFxyXG4gICAgXCJHbGFzcyBDb21idXN0aW9uIENoYW1iZXJcIjogW1wiR0NIXCIsIDEsIDAuNl0sXHJcbiAgICBcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIjogW1wiR0VOXCIsIDUsIDNdLFxyXG4gICAgXCJFaW5zdGVpbml1bS1JbmZ1c2VkIEdpblwiOiBbXCJHSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJHbGFzc1wiOiBbXCJHTFwiLCAwLjAxNiwgMC4wMV0sXHJcbiAgICBcIkdsYXNzIE5venpsZVwiOiBbXCJHTlpcIiwgMS41LCAxXSxcclxuICAgIFwiV2luZS1RdWFsaXR5IEdyYXBlc1wiOiBbXCJHUkFcIiwgMS4xLCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIEdyYWluc1wiOiBbXCJHUk5cIiwgMC45LCAxXSxcclxuICAgIFwiR2FzIFZlbnRcIjogW1wiR1ZcIiwgMC4yNSwgMC4xNV0sXHJcbiAgICBcIkh5ZHJvZ2VuXCI6IFtcIkhcIiwgMC4wNywgMV0sXHJcbiAgICBcIldhdGVyXCI6IFtcIkgyT1wiLCAwLjIsIDAuMl0sXHJcbiAgICBcIkhhYml0YXQgVW5pdFwiOiBbXCJIQUJcIiwgMTAsIDhdLFxyXG4gICAgXCJIYWxpdGUgQ3J5c3RhbHNcIjogW1wiSEFMXCIsIDIuMTcsIDFdLFxyXG4gICAgXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIjogW1wiSENDXCIsIDAuMDEsIDAuMDAyXSxcclxuICAgIFwiSHlkcm9jYXJib24gUGxhbnRzXCI6IFtcIkhDUFwiLCAwLjgsIDFdLFxyXG4gICAgXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCI6IFtcIkhEXCIsIDAuMDUsIDJdLFxyXG4gICAgXCJIZWxpdW1cIjogW1wiSEVcIiwgMC4xNDUsIDFdLFxyXG4gICAgXCJIZWxpdW0tMyBJc290b3BlXCI6IFtcIkhFM1wiLCAwLjE0NSwgMV0sXHJcbiAgICBcIlNwaWN5IEhlcmJzXCI6IFtcIkhFUlwiLCAwLjQsIDFdLFxyXG4gICAgXCJIZWxpb3Ryb3BlIEV4dHJhY3RcIjogW1wiSEVYXCIsIDEuMSwgMV0sXHJcbiAgICBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIjogW1wiSEhQXCIsIDE1LCAxMF0sXHJcbiAgICBcIkhhek1hdCBXb3JrIFN1aXRcIjogW1wiSE1TXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJIeXBlcnRocnVzdCBOb3p6bGVcIjogW1wiSE5aXCIsIDYsIDEyXSxcclxuICAgIFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiOiBbXCJIT0dcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIkZsb3dlcnkgSG9wc1wiOiBbXCJIT1BcIiwgMC4zNSwgMV0sXHJcbiAgICBcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIjogW1wiSFBDXCIsIDAuMDAzLCAwLjAwM10sXHJcbiAgICBcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIjogW1wiSFBSXCIsIDE4LCAxNV0sXHJcbiAgICBcIkhhcmRlbmVkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiSFNFXCIsIDMuMSwgMC43XSxcclxuICAgIFwiU21hcnQgU3BhY2UgU3VpdFwiOiBbXCJIU1NcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIjogW1wiSFRFXCIsIDIwLCAxMF0sXHJcbiAgICBcIkh5cGVyLXBvd2VyIFJlYWN0b3JcIjogW1wiSFlSXCIsIDM1LCAyNV0sXHJcbiAgICBcIklvZGluZVwiOiBbXCJJXCIsIDQuOTMsIDFdLFxyXG4gICAgXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIjogW1wiSURDXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5mb3JtYXRpb24gTWFuYWdlbWVudCBTeXN0ZW1cIjogW1wiSU1NXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiSW5kaWdvIENvbG9yYW50XCI6IFtcIklORFwiLCAwLjIxLCAwLjJdLFxyXG4gICAgXCJJbnN1Rm9hbVwiOiBbXCJJTlNcIiwgMC4wNiwgMC4xXSxcclxuICAgIFwiU2VkYXRpdmUgU3Vic3RhbmNlXCI6IFtcIkpVSVwiLCAxLjIsIDFdLFxyXG4gICAgXCJLb21idWNoYVwiOiBbXCJLT01cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJLZXZsYXIgRmFicmljXCI6IFtcIktWXCIsIDEuNjUsIDFdLFxyXG4gICAgXCJMaWdodHdlaWdodCBCdWxraGVhZFwiOiBbXCJMQkhcIiwgMC4yLCAwLjZdLFxyXG4gICAgXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiOiBbXCJMQ1wiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiOiBbXCJMQ0JcIiwgMjAwLCAyMDBdLFxyXG4gICAgXCJMaXF1aWQgQ3J5c3RhbHNcIjogW1wiTENSXCIsIDAuMTUsIDAuMV0sXHJcbiAgICBcIkxvY2FsIERhdGFiYXNlXCI6IFtcIkxEXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiOiBbXCJMREVcIiwgMC4xLCAxLjJdLFxyXG4gICAgXCJMYXNlciBEaW9kZXNcIjogW1wiTERJXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIkxpcXVpZCBFaW5zdGVpbml1bVwiOiBbXCJMRVNcIiwgOC44NCwgMV0sXHJcbiAgICBcIkxhcmdlIEZUTCBFbWl0dGVyXCI6IFtcIkxGRVwiLCAwLjQsIDEuNl0sXHJcbiAgICBcIkxhcmdlIEZUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxGTFwiLCA2MCwgMTBdLFxyXG4gICAgXCJMb3ctaGVhdCBGdWVsIFB1bXBcIjogW1wiTEZQXCIsIDAuNSwgMC4xXSxcclxuICAgIFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiOiBbXCJMSFBcIiwgNSwgMTBdLFxyXG4gICAgXCJMaXRoaXVtXCI6IFtcIkxJXCIsIDAuNTUsIDFdLFxyXG4gICAgXCJMaXRoaXVtIE9yZVwiOiBbXCJMSU9cIiwgMi43NSwgMV0sXHJcbiAgICBcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIjogW1wiTElTXCIsIDUuNiwgN10sXHJcbiAgICBcIk5lb24gTGlnaHRpbmcgU3lzdGVtXCI6IFtcIkxJVFwiLCAxLCAyXSxcclxuICAgIFwiTG9naXN0aWNzIFN5c3RlbVwiOiBbXCJMT0dcIiwgMC41LCAxLjVdLFxyXG4gICAgXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkxTRVwiLCAwLjMsIDEuMl0sXHJcbiAgICBcIkxhcmdlIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIkxTTFwiLCAxMjUsIDEwMF0sXHJcbiAgICBcIkxpbWVzdG9uZVwiOiBbXCJMU1RcIiwgMi43MywgMV0sXHJcbiAgICBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkxUQVwiLCAwLjMsIDAuNV0sXHJcbiAgICBcIkxhYm9yYXRvcnkgVW5pdFwiOiBbXCJMVVwiLCA4LCA2XSxcclxuICAgIFwiTWFnbmV0aXRlXCI6IFtcIk1BR1wiLCA1LjE1LCAxXSxcclxuICAgIFwiSGlnaC1DYXJiIE1haXplXCI6IFtcIk1BSVwiLCAxLjMsIDFdLFxyXG4gICAgXCJNb3RoZXJib2FyZFwiOiBbXCJNQlwiLCAwLjA3NSwgMC4wNzVdLFxyXG4gICAgXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiOiBbXCJNQ0JcIiwgMTAwLCAxMDBdLFxyXG4gICAgXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIjogW1wiTUNHXCIsIDAuMjQsIDAuMV0sXHJcbiAgICBcIlF1YWxpdHkgTWVhdCBNZWFsXCI6IFtcIk1FQVwiLCAwLjYsIDAuNV0sXHJcbiAgICBcIkJhc2ljIE1lZGljYWwgS2l0XCI6IFtcIk1FRFwiLCAwLjMsIDAuMV0sXHJcbiAgICBcIk1lZGl1bSBGVEwgRW1pdHRlclwiOiBbXCJNRkVcIiwgMC4yLCAwLjhdLFxyXG4gICAgXCJNZWRpdW0gRmFzdGVuZXIgS2l0XCI6IFtcIk1GS1wiLCAwLjEsIDAuMDVdLFxyXG4gICAgXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTUZMXCIsIDI0LCA0XSxcclxuICAgIFwiTWFnbmVzaXVtXCI6IFtcIk1HXCIsIDAuMjcsIDAuMTZdLFxyXG4gICAgXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIjogW1wiTUdDXCIsIDAuNiwgMC45XSxcclxuICAgIFwiTWFnbmVzaXRlXCI6IFtcIk1HU1wiLCAxLjczLCAxXSxcclxuICAgIFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJNSExcIiwgMC4xLCAwLjA1XSxcclxuICAgIFwiTWljcm8gSGVhZHBob25lc1wiOiBbXCJNSFBcIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcmZhY2VcIjogW1wiTUxJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiTWljcm8tUHJvY2Vzc29yXCI6IFtcIk1QQ1wiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJNZWRpdW0gU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiTVNMXCIsIDUwLCA1MF0sXHJcbiAgICBcIk1lZ2FUdWJlIENvYXRpbmdcIjogW1wiTVRDXCIsIDAuMDMyLCAwLjAxXSxcclxuICAgIFwiTWVhdCBUaXNzdWUgUGF0dGllc1wiOiBbXCJNVFBcIiwgMC43LCAxXSxcclxuICAgIFwiUHJvdGVpbi1SaWNoIE11c2hyb29tc1wiOiBbXCJNVVNcIiwgMC44LCAxXSxcclxuICAgIFwiTWVkaXVtIFdhZmVyXCI6IFtcIk1XRlwiLCAwLjAwOCwgMC4wMDhdLFxyXG4gICAgXCJOaXRyb2dlblwiOiBbXCJOXCIsIDAuODA3LCAxXSxcclxuICAgIFwiU29kaXVtXCI6IFtcIk5BXCIsIDAuOTcsIDFdLFxyXG4gICAgXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIjogW1wiTkFCXCIsIDAuMSwgMC4wNV0sXHJcbiAgICBcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCI6IFtcIk5DU1wiLCAwLjAyOCwgMC4wMV0sXHJcbiAgICBcIk5lb25cIjogW1wiTkVcIiwgMC45LCAxXSxcclxuICAgIFwiTmV0d29ya2luZyBGcmFtZXdvcmtcIjogW1wiTkZcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJOYW5vIEZpYmVyXCI6IFtcIk5GSVwiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIk5hbm8tQ29hdGVkIEdsYXNzXCI6IFtcIk5HXCIsIDAuMDIyLCAwLjAxXSxcclxuICAgIFwiTnlsb24gRmFicmljXCI6IFtcIk5MXCIsIDEuMTMsIDFdLFxyXG4gICAgXCJOZXVyYWwgTmV0d29ya1wiOiBbXCJOTlwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkJhc2ljIE5venpsZVwiOiBbXCJOT1pcIiwgMywgMS41XSxcclxuICAgIFwiTmFuby1FbmhhbmNlZCBSZXNpblwiOiBbXCJOUlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiTnV0cmllbnQgU29sdXRpb25cIjogW1wiTlNcIiwgMC42LCAwLjVdLFxyXG4gICAgXCJOZXVyb1N0aW11bGFudHNcIjogW1wiTlNUXCIsIDAuMDUsIDAuMDVdLFxyXG4gICAgXCJUcmlnbHljZXJpZGUgTnV0c1wiOiBbXCJOVVRcIiwgMC45LCAxXSxcclxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCI6IFtcIk5WMVwiLCA0LjIsIDJdLFxyXG4gICAgXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzJcIjogW1wiTlYyXCIsIDYuNywgM10sXHJcbiAgICBcIk94eWdlblwiOiBbXCJPXCIsIDEuMTQxLCAxXSxcclxuICAgIFwiT2ZmaWNlIFN1cHBsaWVzXCI6IFtcIk9GRlwiLCAwLjAyLCAwLjJdLFxyXG4gICAgXCJPbGZhY3RvcnkgU3Vic3RhbmNlc1wiOiBbXCJPTEZcIiwgMC4wMSwgMC4wMDFdLFxyXG4gICAgXCJPcGVyYXRpbmcgU3lzdGVtXCI6IFtcIk9TXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQmFzaWMgT3ZlcmFsbHNcIjogW1wiT1ZFXCIsIDAuMDIsIDAuMDI1XSxcclxuICAgIFwiUHJpbnRlZCBDaXJjdWl0IEJvYXJkXCI6IFtcIlBDQlwiLCAwLjA1LCAwLjA1XSxcclxuICAgIFwiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIjogW1wiUERBXCIsIDAuMDAyLCAwLjAwMl0sXHJcbiAgICBcIlBvbHktRXRoeWxlbmVcIjogW1wiUEVcIiwgMC4wMSwgMC4wMV0sXHJcbiAgICBcIlByZW1pdW0gRmVydGlsaXplclwiOiBbXCJQRkVcIiwgMC45LCAxXSxcclxuICAgIFwiUG9seW1lciBHcmFudWxhdGVcIjogW1wiUEdcIiwgMC4wMDIsIDAuMDAxXSxcclxuICAgIFwiUGluZWJlcnJpZXNcIjogW1wiUElCXCIsIDAuMywgMV0sXHJcbiAgICBcIlBhaW5raWxsZXJzXCI6IFtcIlBLXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlBvd2VyIENlbGxcIjogW1wiUE9XXCIsIDAuMDUsIDAuMV0sXHJcbiAgICBcIlByb3RlaW4gUGFzdGVcIjogW1wiUFBBXCIsIDIsIDFdLFxyXG4gICAgXCJQcmVzc3VyZSBTaGllbGRpbmdcIjogW1wiUFNIXCIsIDQuMiwgMC44XSxcclxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIExcIjogW1wiUFNMXCIsIDAuMDgsIDAuOF0sXHJcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCI6IFtcIlBTTVwiLCAwLjA0LCAwLjRdLFxyXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiOiBbXCJQU1NcIiwgMC4wMSwgMC4xXSxcclxuICAgIFwiUG93ZXIgVG9vbHNcIjogW1wiUFRcIiwgMC4yNSwgMC4yXSxcclxuICAgIFwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiOiBbXCJQV09cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlF1aWNrLWNoYXJnZSBGVEwgUmVhY3RvclwiOiBbXCJRQ1JcIiwgMTQsIDEwXSxcclxuICAgIFwiUmFkaW8gRGV2aWNlXCI6IFtcIlJBRFwiLCAwLjAwMywgMC4wMDVdLFxyXG4gICAgXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCI6IFtcIlJBR1wiLCA1LCAzLjRdLFxyXG4gICAgXCJNZW1vcnkgQmFua1wiOiBbXCJSQU1cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiQmFzaWMgUmF0aW9uc1wiOiBbXCJSQVRcIiwgMC4yMSwgMC4xXSxcclxuICAgIFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiOiBbXCJSQkhcIiwgMi40LCAwLjldLFxyXG4gICAgXCJSYXcgQ290dG9uIEZpYmVyXCI6IFtcIlJDT1wiLCAwLjk1LCAxXSxcclxuICAgIFwiUmVhY3RvciBDb250cm9sIFN5c3RlbVwiOiBbXCJSQ1NcIiwgMC42NywgMC41XSxcclxuICAgIFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIjogW1wiUkNUXCIsIDcsIDRdLFxyXG4gICAgXCJSZWluZm9yY2VkIERlY2sgRWxlbWVudHNcIjogW1wiUkRFXCIsIDEuNCwgMS41XSxcclxuICAgIFwiTGFyZ2UgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJETFwiLCAxNTAsIDMwXSxcclxuICAgIFwiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJEU1wiLCA1MCwgMTBdLFxyXG4gICAgXCJDaGVtaWNhbCBSZWFnZW50c1wiOiBbXCJSRUFcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlJlc2N1ZSBEcm9uZVwiOiBbXCJSRURcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUmVwYWlyIEtpdFwiOiBbXCJSRVBcIiwgMC4wMDYsIDAuMDAyXSxcclxuICAgIFwiUmVpbmZvcmNlZCBHbGFzc1wiOiBbXCJSR1wiLCAwLjAzMiwgMC4wMV0sXHJcbiAgICBcIlJlZCBHb2xkXCI6IFtcIlJHT1wiLCAxOS4zMiwgMV0sXHJcbiAgICBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiOiBbXCJSSFBcIiwgMTIsIDEwXSxcclxuICAgIFwiTm9uLVZvbGF0aWxlIE1lbW9yeVwiOiBbXCJST01cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIlJTRVwiLCAxLjksIDAuN10sXHJcbiAgICBcIlJhZGlhdGlvbiBTaGllbGRpbmdcIjogW1wiUlNIXCIsIDMuNywgMC44XSxcclxuICAgIFwiUmF3IFNpbGsgU3RyYWluc1wiOiBbXCJSU0lcIiwgMS4xLCAxXSxcclxuICAgIFwiUmVpbmZvcmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiOiBbXCJSVEFcIiwgMS41LCAwLjVdLFxyXG4gICAgXCJTdWxmdXJcIjogW1wiU1wiLCAwLjUyLCAwLjI1XSxcclxuICAgIFwiU2VhcmNoIEFsZ29yaXRobVwiOiBbXCJTQVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNvcnRpbmcgQWxnb3JpdGhtXCI6IFtcIlNBTFwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIlNlbnNvciBBcnJheVwiOiBbXCJTQVJcIiwgMS43LCAyXSxcclxuICAgIFwiU3RlbSBDZWxsIFRyZWF0bWVudFwiOiBbXCJTQ1wiLCAwLjA0LCAwLjAxXSxcclxuICAgIFwiU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJTQ0JcIiwgNTAsIDUwXSxcclxuICAgIFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCI6IFtcIlNDTlwiLCAwLjAwMSwgMC4wMDFdLFxyXG4gICAgXCJTdWxmdXIgQ3J5c3RhbHNcIjogW1wiU0NSXCIsIDIuMDUsIDFdLFxyXG4gICAgXCJTdXJnaWNhbCBEcm9uZVwiOiBbXCJTRFJcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIjogW1wiU0VBXCIsIDAuMTUsIDAuMDddLFxyXG4gICAgXCJTZW5zb3JcIjogW1wiU0VOXCIsIDAuMDAxLCAwLjAwMV0sXHJcbiAgICBcIlN1cmdpY2FsIEVxdWlwbWVudFwiOiBbXCJTRVFcIiwgMC4wMDEsIDAuMDFdLFxyXG4gICAgXCJTVEwgRnVlbFwiOiBbXCJTRlwiLCAwLjA2LCAwLjA2XSxcclxuICAgIFwiU21hbGwgRlRMIEVtaXR0ZXJcIjogW1wiU0ZFXCIsIDAuMSwgMC40XSxcclxuICAgIFwiU21hbGwgRmFzdGVuZXIgS2l0XCI6IFtcIlNGS1wiLCAwLjA0LCAwLjAyXSxcclxuICAgIFwiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU0ZMXCIsIDksIDEuNV0sXHJcbiAgICBcIlNpbGljb25cIjogW1wiU0lcIiwgMi4zMjksIDFdLFxyXG4gICAgXCJTaWxrZW4gRmFicmljXCI6IFtcIlNJTFwiLCAxLjIxLCAxXSxcclxuICAgIFwiU2lsaWNvbiBPcmVcIjogW1wiU0lPXCIsIDEuNzksIDFdLFxyXG4gICAgXCJTcGF0aWFsIE5hdmlnYXRpb24gTWFwXCI6IFtcIlNOTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkFydGlmaWNpYWwgU29pbFwiOiBbXCJTT0lcIiwgMC45LCAxXSxcclxuICAgIFwiU29sYXIgQ2VsbFwiOiBbXCJTT0xcIiwgMC4wMTUsIDAuMDFdLFxyXG4gICAgXCJTb2xhciBQYW5lbFwiOiBbXCJTUFwiLCAwLjE1LCAwLjFdLFxyXG4gICAgXCJTaGlwLVJlcGFpciBEcm9uZVwiOiBbXCJTUkRcIiwgMC4zLCAwLjA1XSxcclxuICAgIFwiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiU1JQXCIsIDAuMSwgMC4yXSxcclxuICAgIFwiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiOiBbXCJTU0NcIiwgMSwgMV0sXHJcbiAgICBcIlNtYWxsIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIlNTTFwiLCAyMCwgMjBdLFxyXG4gICAgXCJTdGVlbFwiOiBbXCJTVExcIiwgNy44NSwgMV0sXHJcbiAgICBcIk1lZGljYWwgU3RyZXRjaGVyXCI6IFtcIlNUUlwiLCAwLjAxLCAxXSxcclxuICAgIFwiU3RhYmlsaXR5IFN1cHBvcnQgU3lzdGVtXCI6IFtcIlNUU1wiLCAwLjEsIDAuMV0sXHJcbiAgICBcIlN1cmdlcnkgVW5pdFwiOiBbXCJTVVwiLCA2LCA1XSxcclxuICAgIFwiU3VydmVpbGxhbmNlIERyb25lXCI6IFtcIlNVRFwiLCAwLjMsIDAuMDVdLFxyXG4gICAgXCJTYWZldHkgVW5pZm9ybVwiOiBbXCJTVU5cIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIlNtYWxsIFdhZmVyXCI6IFtcIlNXRlwiLCAwLjAwMywgMC4wMDNdLFxyXG4gICAgXCJUYW50YWx1bVwiOiBbXCJUQVwiLCAxNi42NSwgMV0sXHJcbiAgICBcIlRhcmdldGluZyBDb21wdXRlclwiOiBbXCJUQUNcIiwgMC4xNSwgMV0sXHJcbiAgICBcIlRhbnRhbGl0ZSBSb2NrXCI6IFtcIlRBSVwiLCA3Ljk0LCAxXSxcclxuICAgIFwiVGVjaG5ldGl1bVwiOiBbXCJUQ1wiLCAxMS44LCAxXSxcclxuICAgIFwiVGlueSBDYXJnbyBCYXkgS2l0XCI6IFtcIlRDQlwiLCAyMCwgMjBdLFxyXG4gICAgXCJUQ0wgQWNpZFwiOiBbXCJUQ0xcIiwgMC4wOSwgMC4xXSxcclxuICAgIFwiVGVjaG5ldGl1bSBPeGlkZVwiOiBbXCJUQ09cIiwgOS44LCAxXSxcclxuICAgIFwiU3RhYmlsaXplZCBUZWNobmV0aXVtXCI6IFtcIlRDU1wiLCAzLjQsIDEuMl0sXHJcbiAgICBcIlRyYXVtYSBDYXJlIFVuaXRcIjogW1wiVENVXCIsIDUsIDRdLFxyXG4gICAgXCJUaGVybW9GbHVpZFwiOiBbXCJUSEZcIiwgMC42LCAwLjM1XSxcclxuICAgIFwiQmFzaWMgVGhlcm1hbCBQcm90ZWN0aW9uIE1hdGVyaWFsXCI6IFtcIlRIUFwiLCAyLjIsIDFdLFxyXG4gICAgXCJUaXRhbml1bVwiOiBbXCJUSVwiLCA0LjUsIDFdLFxyXG4gICAgXCJUaXRhbml1bSBPcmVcIjogW1wiVElPXCIsIDEuNTgsIDFdLFxyXG4gICAgXCJUZWNobm9LZXZsYXIgRmFicmljXCI6IFtcIlRLXCIsIDEuODksIDFdLFxyXG4gICAgXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCI6IFtcIlRQVVwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJBdWRpbyBUcmFuc21pdHRlclwiOiBbXCJUUkFcIiwgMC4wMDUsIDAuMDAyXSxcclxuICAgIFwiQWR2YW5jZWQgVHJhbnNpc3RvclwiOiBbXCJUUk5cIiwgMC4wMDEsIDAuMDAxXSxcclxuICAgIFwiVHJ1c3NcIjogW1wiVFJVXCIsIDAuMSwgMS41XSxcclxuICAgIFwiVGVjdG9zaWxpc2l0ZVwiOiBbXCJUU1wiLCAyLjQsIDFdLFxyXG4gICAgXCJUaGVybWFsIFNoaWVsZGluZ1wiOiBbXCJUU0hcIiwgMi40LCAxLjVdLFxyXG4gICAgXCJUZXN0IFR1YmVzXCI6IFtcIlRVQlwiLCAwLjAwMiwgMC4wMDJdLFxyXG4gICAgXCJVbml2ZXJzYWwgVG9vbHNldFwiOiBbXCJVVFNcIiwgMC4wNSwgMC4wNV0sXHJcbiAgICBcIkhpZ2gtdm9sdW1lIENhcmdvIEJheSBLaXRcIjogW1wiVkNCXCIsIDIwMCwgMjAwXSxcclxuICAgIFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiOiBbXCJWRUdcIiwgMS4xLCAxXSxcclxuICAgIFwiVml0YUdlbFwiOiBbXCJWR1wiLCAwLjIxLCAwLjFdLFxyXG4gICAgXCJWaXRhIEVzc2VuY2VcIjogW1wiVklUXCIsIDAuOSwgMV0sXHJcbiAgICBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWU0NcIiwgMzUsIDM1XSxcclxuICAgIFwiVHVuZ3N0ZW5cIjogW1wiV1wiLCA3LjUxOSwgMV0sXHJcbiAgICBcIldlYWsgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIjogW1wiV0FJXCIsIDAuMDAxLCAwLjAxXSxcclxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiOiBbXCJXQUxcIiwgNi4yNSwgMV0sXHJcbiAgICBcIkhpZ2gtbG9hZCBDYXJnbyBCYXkgS2l0XCI6IFtcIldDQlwiLCAyMDAsIDIwMF0sXHJcbiAgICBcIlNtYXJ0IFppbmZhbmRlbFwiOiBbXCJXSU5cIiwgMC4xLCAwLjFdLFxyXG4gICAgXCJXaW5kb3cgTWFuYWdlclwiOiBbXCJXTVwiLCAwLjAwMSwgMC4wMV0sXHJcbiAgICBcIkhhbmRjcmFmdCBXb3Jrc2hvcCBVbml0XCI6IFtcIldPUlwiLCA1LCA1XSxcclxuICAgIFwiV2F0ZXIgUmVjbGFpbWVyXCI6IFtcIldSXCIsIDYuNCwgNV0sXHJcbiAgICBcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCI6IFtcIldTXCIsIDAuMDUsIDAuNV0sXHJcbiAgICBcIlppcmNvbiBDcnlzdGFsc1wiOiBbXCJaSVJcIiwgNC44NSwgMV0sXHJcbiAgICBcIlppcmNvbml1bVwiOiBbXCJaUlwiLCA2LjUzLCAxXSxcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2FtZVByb3BlcnRpZXMudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRmxpZ2h0RVRBcyB9IGZyb20gXCIuL0ZsaWdodEVUQXNcIjtcclxuaW1wb3J0IHsgTG9jYWxNYXJrZXRBZHMgfSBmcm9tICcuL0xvY2FsTWFya2V0QWRzJztcclxuaW1wb3J0IHsgTW9kdWxlUnVubmVyIH0gZnJvbSBcIi4vTW9kdWxlUnVubmVyXCI7XHJcbmltcG9ydCB7IE9yZGVyRVRBcyB9IGZyb20gXCIuL09yZGVyRVRBc1wiO1xyXG5pbXBvcnQgeyBDb25zdW1hYmxlVGltZXJzIH0gZnJvbSBcIi4vQ29uc3VtYWJsZVRpbWVyc1wiO1xyXG5pbXBvcnQgeyBGbGVldEVUQXMgfSBmcm9tIFwiLi9GbGVldEVUQXNcIjtcclxuaW1wb3J0IHsgUG9zdExNIH0gZnJvbSBcIi4vUG9zdExNXCI7XHJcbmltcG9ydCB7IFNoaXBwaW5nQWRzIH0gZnJvbSBcIi4vU2hpcHBpbmdBZHNcIjtcclxuaW1wb3J0IHsgUXVldWVMb2FkIH0gZnJvbSBcIi4vUXVldWVMb2FkXCI7XHJcbmltcG9ydCB7IFhJVEhhbmRsZXIgfSBmcm9tIFwiLi9YSVRIYW5kbGVyXCI7XHJcbmNvbnNvbGUubG9nKFwiQXQgbGVhc3Qgc3RhcnRlZC4uLlwiKTtcclxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICBjb25zdCBydW5uZXIgPSBuZXcgTW9kdWxlUnVubmVyKFtcclxuICAgICAgICBuZXcgTG9jYWxNYXJrZXRBZHMoKSxcclxuICAgICAgICBuZXcgT3JkZXJFVEFzKCksXHJcbiAgICAgICAgbmV3IEZsaWdodEVUQXMoKSxcclxuICAgICAgICBuZXcgU2hpcHBpbmdBZHMoKSxcclxuICAgICAgICBuZXcgUG9zdExNKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVsyXSksXHJcbiAgICAgICAgbmV3IFF1ZXVlTG9hZCgpLFxyXG4gICAgICAgIG5ldyBDb25zdW1hYmxlVGltZXJzKHJlc3VsdFtcIkFISUJlYXV0aWZpZXJfRGF0YVwiXVswXSwgcmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzFdKSxcclxuICAgICAgICBuZXcgRmxlZXRFVEFzKCksXHJcbiAgICAgICAgbmV3IFhJVEhhbmRsZXIocmVzdWx0W1wiQUhJQmVhdXRpZmllcl9EYXRhXCJdWzFdLCByZXN1bHRbXCJBSElCZWF1dGlmaWVyX0RhdGFcIl1bMl0pXHJcbiAgICBdKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcclxuICAgIH0pKCk7XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGlnaHRFVEFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zZmMtZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBjb25zdCBidWZmZXJzID0gZ2V0QnVmZmVycyhcIlNGQyBcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGJ1ZmZlci5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgPiB0Ym9keSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0YXJnZXRSb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXRhRGF0YSA9IHRhcmdldFJvdy5jaGlsZHJlblszXTtcclxuICAgICAgICAgICAgICAgIGlmIChldGFEYXRhLnRleHRDb250ZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBjb252ZXJ0RHVyYXRpb25Ub0VUQShldGFEYXRhLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBldGFEYXRhLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRmxpZ2h0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIExvY2FsTWFya2V0QWRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1sbS1hZHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oPzpCVVlJTkd8U0VMTElORylcXHMoXFxkKylcXHMuKlxcc0BcXHMoW1xcZCwuXSspXFxzW0EtWl0rXFxzZm9yLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBwYXJzZUludChtYXRjaGVzWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludChtYXRjaGVzWzJdLnJlcGxhY2UoL1ssLl0vZywgJycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlckl0ZW0gPSB0b0ZpeGVkKHRvdGFsQ2VudHMgLyBjb3VudCAvIDEwMCwgMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTE1Db21tb2RpdHlBZFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICBwcmljZVNwYW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dFNwYW4oYCAoJHtwZXJJdGVtfSBlYSlgLCB0aGlzLnRhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0xvY2FsTWFya2V0QWRzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVSdW5uZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlcykge1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXMubWFwKG0gPT4gdGhpcy5tb2R1bGVUb01FKG0pKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhcih0aGlzLm1vZHVsZXMpO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcy5wdXNoKHRoaXMubW9kdWxlVG9NRSh0aGlzLnNpZGViYXIpKTtcclxuICAgIH1cclxuICAgIG1vZHVsZVRvTUUobW9kdWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgICAgICBuYW1lOiBtb2R1bGUuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGNsZWFudXBUaW1lOiAwLFxyXG4gICAgICAgICAgICBydW5UaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLmNsZWFudXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXBUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5tb2R1bGUucnVuKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydW5UaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0MTtcclxuICAgICAgICAgICAgICAgIGVudHJ5LmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5jbGVhbnVwVGltZSArPSBjbGVhbnVwVGltZTtcclxuICAgICAgICAgICAgICAgIGVudHJ5LnJ1blRpbWUgKz0gcnVuVGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMubG9vcCgpLCAxMDAwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Nb2R1bGVSdW5uZXIudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBTdHlsZSwgV2l0aFN0eWxlcyB9IGZyb20gXCIuL1N0eWxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNpZGViYXIge1xyXG4gICAgY29uc3RydWN0b3IobGlzdCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaWRlYmFyXCI7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQodGhpcy50YWcpO1xyXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlBNTUcgQmVhdXRpZmllclwiKSk7XHJcbiAgICAgICAgaDMuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkhlYWQpO1xyXG4gICAgICAgIGFyZWEuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5TaWRlYmFyU2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgICAgIGFyZWEuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5saXN0Lm1hcChtcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuU2lkZWJhckxpbmUsIFN0eWxlLkZvbnRzUmVndWxhcikpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKG1wLm5hbWUpKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcmlnaHQuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcclxuICAgICAgICAgICAgcmlnaHQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICBsaW5lLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IHRvRml4ZWQoKG1wLmNsZWFudXBUaW1lICsgbXAucnVuVGltZSkgLyBtcC5jb3VudCwgMik7XHJcbiAgICAgICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAke3RpbWV9bXMgYCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0aGlzLm1ha2VUb2dnbGVCdXR0b24oXCJPblwiLCBcIk9mZlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtcC5lbmFibGVkID0gIW1wLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH0sIG1wLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0b2dnbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjbGVhbnVwID0gdGhpcy5tYWtlUHVzaEJ1dHRvbihcInhcIiwgKCkgPT4gbXAubW9kdWxlLmNsZWFudXAoKSk7XHJcbiAgICAgICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNsZWFudXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5TaWRlYmFyKSkuZm9yRWFjaChzaWRlYmFyID0+IHtcclxuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChhcmVhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1ha2VQdXNoQnV0dG9uKHRleHQsIGYsIHN0eWxlID0gU3R5bGUuQnV0dG9uUHJpbWFyeSkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uc3R5bGUpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGFnKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGY7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuICAgIG1ha2VUb2dnbGVCdXR0b24ob24sIG9mZiwgZiwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkJ1dHRvbik7XHJcbiAgICAgICAgY29uc3QgZ2V0U3RhdGUgPSAhIXRvZ2dsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSB8fCBzdGF0ZTtcclxuICAgICAgICBjb25zdCBzZXRTdGF0ZSA9IHMgPT4ge1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgU3RyaW5nKHMpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNldExvb2sgPSAocykgPT4ge1xyXG4gICAgICAgICAgICB0b2dnbGUuaW5uZXJUZXh0ID0gcyA/IG9uIDogb2ZmO1xyXG4gICAgICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25TdWNjZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKC4uLlN0eWxlLkJ1dHRvblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICBzZXRMb29rKHN0YXRlKTtcclxuICAgICAgICB0b2dnbGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhZ2V0U3RhdGU7XHJcbiAgICAgICAgICAgIHNldExvb2sobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIGYoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0b2dnbGU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2lkZWJhci50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU3R5bGUgPSB7XHJcbiAgICBCdXR0b246IFtcImZNVzYyY0VSbmx6eFpQRmhubFBPZVE9PVwiXSxcclxuICAgIEJ1dHRvblByaW1hcnk6IFtcImtnR3NETnZEb1dqNjF3NEk3VkFsZkE9PVwiXSxcclxuICAgIEJ1dHRvblN1Y2Nlc3M6IFtcIlFXODB4dmVRbTJHRVNrU09SUkgyNGc9PVwiXSxcclxuICAgIEJ1dHRvbkRhbmdlcjogW1wiWkZYV3k0SENuenRwWk5sQ1hrODN3UT09XCJdLFxyXG4gICAgU2lkZWJhclNlY3Rpb25IZWFkOiBbXCJfMllyT003LTJzZEswNDJWdkg2V2FKZz09XCIsIFwiZlRUNTJpKzFvRmF1eEhPalZmR1R3dz09XCJdLFxyXG4gICAgU2lkZWJhclNlY3Rpb25Db250ZW50OiBbXCJDTjBOUE5vdmxZdGFJbTRicUhGYkx3PT1cIiwgXCJmVFQ1MmkrMW9GYXV4SE9qVmZHVHd3PT1cIl0sXHJcbiAgICBTaWRlYmFyTGluZTogW1wieTg0RVVJOGdDUC1TVjkxWDd2SWloUT09XCIsIFwiZlZkM2FZSmhGWS11dWFIK1FUQnloQT09XCJdLFxyXG4gICAgRm9udHNSZWd1bGFyOiBbXCJDQm9ySWJGQzZZdCtGUllFSFp5dWFBPT1cIl0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBXaXRoU3R5bGVzID0gKC4uLnN0eWxlKSA9PiB7XHJcbiAgICByZXR1cm4gc3R5bGUucmVkdWNlKCgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2aW91c1ZhbHVlLmNvbmNhdChjdXJyZW50VmFsdWUpKSk7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9FVEEsIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIE9yZGVyRVRBcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IFwicGItb3JkZXItZXRhXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIGdlbmVyaWNDbGVhbnVwKHRoaXMudGFnKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmJlYXV0aWZ5T3JkZXJzKCk7XHJcbiAgICAgICAgdGhpcy5iZWF1dGlmeVByb2R1Y3Rpb25RdWV1ZSgpO1xyXG4gICAgfVxyXG4gICAgYmVhdXRpZnlPcmRlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZEl0ZW0pKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGV0YURpdiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV0YVNwYW4gPSBldGFEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlYXV0aWZ5RXRhKGV0YVNwYW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiZWF1dGlmeVByb2R1Y3Rpb25RdWV1ZSgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGFDZWxsID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5pdGVtKDUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldGFTcGFuID0gZXRhQ2VsbC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXRhU3Bhbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlYXV0aWZ5RXRhKGV0YVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiZWF1dGlmeUV0YShldGFTcGFuKSB7XHJcbiAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEoZXRhU3Bhbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgZXRhU3Bhbi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKGAgKCR7ZXRhfSlgLCB0aGlzLnRhZykpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL09yZGVyRVRBcy50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwYXJzZUJhc2VOYW1lLCBmaW5kQnVybkFtb3VudCwgZmluZENvcnJlc3BvbmRpbmdQbGFuZXQsIGZpbmRJbnZlbnRvcnlBbW91bnQsIGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgZ2V0QnVmZmVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc3VtYWJsZVRpbWVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSwgYXBpa2V5KSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWNvbnN1bWFibGUtdGltZXJzXCI7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuYXBpa2V5ID0gYXBpa2V5O1xyXG4gICAgfVxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlck5hbWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuYXBpa2V5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiV0ZcIik7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcnMgPT0gdW5kZWZpbmVkIHx8IGJ1ZmZlcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAodGhpcy51c2VyTmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCdXJucyhidWZmZXIsIHRoaXMudXNlck5hbWUsIHRoaXMuYXBpa2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQnVybnMoYnVmZmVyLCB1c2VyTmFtZSwgYXBpa2V5KSB7XHJcbiAgICBjb25zdCBuYW1lRWxlbSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLldvcmtmb3JjZUNvbnN1bXB0aW9uVGFibGUpO1xyXG4gICAgaWYgKG5hbWVFbGVtID09IG51bGwgfHwgbmFtZUVsZW0gPT0gdW5kZWZpbmVkIHx8IG5hbWVFbGVtLnRleHRDb250ZW50ID09IG51bGwgfHwgbmFtZUVsZW0udGV4dENvbnRlbnQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJzZUJhc2VOYW1lKG5hbWVFbGVtLnRleHRDb250ZW50KTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgdmFyIGpzb25kYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgaWYgKGpzb25kYXRhID09IHVuZGVmaW5lZCB8fCBqc29uZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGludmVudG9yeURhdGEgPSBmaW5kQ29ycmVzcG9uZGluZ1BsYW5ldChuYW1lLCBKU09OLnBhcnNlKGpzb25kYXRhKSk7XHJcbiAgICAgICAgICAgIGlmIChpbnZlbnRvcnlEYXRhID09IHVuZGVmaW5lZCB8fCBpbnZlbnRvcnlEYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oYnVmZmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSA+IHRib2R5ID4gdHJcIikpO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRhcmdldFJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Um93LmNoaWxkRWxlbWVudENvdW50IDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bNF07XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0RGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGludmVudG9yeUFtb3VudCA9IGZpbmRJbnZlbnRvcnlBbW91bnQodGFyZ2V0Um93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50LCBpbnZlbnRvcnlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVybkFtb3VudCA9IGZpbmRCdXJuQW1vdW50KHRhcmdldFJvdy5jaGlsZHJlblswXS50ZXh0Q29udGVudCwgaW52ZW50b3J5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidXJuQW1vdW50ICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGludmVudG9yeUFtb3VudCAvIGJ1cm5BbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5c0xlZnQgPD0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1YTMxMzBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuc3R5bGUuY29sb3IgPSBcIiNjNTljOWJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzTGVmdCA8PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzgzNmUyNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5jb2xvciA9IFwiI2Y2ZGY5NFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzNDUwMzRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERhdGEuc3R5bGUuY29sb3IgPSBcIiM5ZmJiOWZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCA9IGRheXNMZWZ0LnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXlzTGVmdCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzTGVmdCArPSBcIiBEYXkgUmVtYWluc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgKz0gXCIgRGF5cyBSZW1haW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0xlZnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkID0gb3V0cHV0RGF0YS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihkYXlzTGVmdCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3Jlc3QuZm5hci5uZXRcIiArIFwiL2Zpb3dlYi9idXJuL3VzZXIvXCIgKyB1c2VyTmFtZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0NvbnN1bWFibGVUaW1lcnMudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvRVRBLCBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIGdldEJ1ZmZlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBGbGVldEVUQXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLWZsdC1ldGFcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiRkxUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShidWZmZXIucXVlcnlTZWxlY3RvckFsbChcInRhYmxlID4gdGJvZHkgPiB0clwiKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGFyZ2V0Um93ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV0YURhdGEgPSB0YXJnZXRSb3cuY2hpbGRyZW5bN107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXRhRGF0YS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gY29udmVydER1cmF0aW9uVG9FVEEoZXRhRGF0YS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXRhRGF0YS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke2V0YX0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ZsZWV0RVRBcy50c1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHMsIEN1cnJlbmN5U3ltYm9scyB9IGZyb20gXCIuL0dhbWVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5leHBvcnQgY2xhc3MgUG9zdExNIHtcclxuICAgIGNvbnN0cnVjdG9yKHdlYmFwcElEKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXBvc3QtbG0tcHJpY2VcIjtcclxuICAgICAgICB0aGlzLndlYmFwcElEID0gd2ViYXBwSUQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTVBvc3RGb3JtKSkuZm9yRWFjaChmb3JtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkMtRUNiLW92ZTF0bGE2cXNpVjQzZXc9PSBpdkcyNHF0UTkya2J5c0xUTmVXSnZ3PT1cIikpO1xyXG4gICAgICAgICAgICB2YXIgc2hpcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbSBvZiB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBcIlNISVBQSU5HXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29tbW9kaXR5ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJkaXZbbGFiZWwvc3Bhblt0ZXh0KCk9J0NvbW1vZGl0eSddXS8vaW5wdXRcIiwgZm9ybSwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQW1vdW50J11dLy9pbnB1dFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFByaWNlSW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nVG90YWwgcHJpY2UnXV0vL2lucHV0XCIsIGZvcm0sIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5SW5wdXQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImRpdltsYWJlbC9zcGFuW3RleHQoKT0nQ3VycmVuY3knXV0vL3NlbGVjdFwiLCBmb3JtLCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgZGlzcGxheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBwb3NzaWJsZUVsZW1lbnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYi1wb3N0LWxtLXByaWNlXCIpKTtcclxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlRWxlbWVudC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQgPSBjcmVhdGVUZXh0U3BhbihcIi0tXCIsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50ID0gcG9zc2libGVFbGVtZW50LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHBvc3NpYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNoaXBwaW5nICYmIGNvbW1vZGl0eS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGlzcGxheUVsZW1lbnQsIHRvdGFsUHJpY2VJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVQcmljZVBlclVuaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbFByaWNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdEluZm8gPSBNYXRlcmlhbHNbY29tbW9kaXR5LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdEluZm8gPT0gdW5kZWZpbmVkIHx8IG1hdEluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBtYXRJbmZvWzFdID49IG1hdEluZm9bMl0gPyBcInRcIiA6IFwibcKzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0dm9sdW1lID0gTWF0aC5tYXgobWF0SW5mb1sxXSwgbWF0SW5mb1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHdlaWdodHZvbHVtZSkgfHwgaXNOYU4odG90YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50ID0gXCItLSB0IHwgXCIgKyBjdXJyZW5jeVN5bWJvbCArIFwiLS0gLyB0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCA9IChhbW91bnQgKiB3ZWlnaHR2b2x1bWUpLnRvRml4ZWQoMCkgKyBcIiBcIiArIHVuaXQgKyBcIiB8IFwiICsgY3VycmVuY3lTeW1ib2wgKyAodG90YWwgLyAoYW1vdW50ICogd2VpZ2h0dm9sdW1lKSkudG9GaXhlZCgyKSArIFwiIC8gXCIgKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLndlYmFwcElEID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZUlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpc3BsYXlFbGVtZW50LCB0b3RhbFByaWNlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KGFtb3VudElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWxQcmljZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3lTeW1ib2wgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9GaXhlZCgyKSArIFwiIGVhXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlUHJpY2VQZXJVbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbW9kaXR5LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlRGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2VJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXNwbGF5RWxlbWVudCwgdG90YWxQcmljZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlUHJpY2VQZXJVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsUHJpY2VJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmN5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuY3kgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBDdXJyZW5jeVN5bWJvbHNbY3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5U3ltYm9sID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IHByaWNlRGF0YVtjb21tb2RpdHkudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCArIFwiIFwiID09IFwiTmFOIFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBcIiB8IFwiICsgKHByaWNlICogYW1vdW50KS50b0ZpeGVkKDIpICsgXCIgVG90YWwgQ29ycFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW5jeVN5bWJvbCArICh0b3RhbCAvIGFtb3VudCkudG9GaXhlZCgyKSArIFwiIGVhXCIgKyAocHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVQcmljZVBlclVuaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL1wiICsgdGhpcy53ZWJhcHBJRCArIFwiL2V4ZWM/bW9kZT0lMjJwcmljZSUyMlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUG9zdExNLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTZWxlY3RvciB9IGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZW5lcmljQ2xlYW51cCwgdG9GaXhlZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi1zaGlwcGluZy1hZHNcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5MTUNvbW1vZGl0eUFkVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGV4dCAmJiB0ZXh0Lm1hdGNoKC8oPzpTSElQUElORylcXHMoW1xcZC5dKyl0XFxzXFwvXFxzKFtcXGQuXSspbcKzXFxzQFxccyhbXFxkLC5dKylcXHNbQS1aXStcXHNmcm9tLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gbWF0Y2hlc1szXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbm5hZ2UgPSBwYXJzZUZsb2F0KG1hdGNoZXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2hlc1syXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0b25uYWdlID4gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSAndCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0b25uYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICdtwrMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2VudHMgPSBwYXJzZUludCh0b3RhbENvc3QucmVwbGFjZSgvWywuXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVySXRlbSA9IHRvRml4ZWQodG90YWxDZW50cyAvIGNvdW50IC8gMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5MTUNvbW1vZGl0eUFkUHJpY2VTcGFuKTtcclxuICAgICAgICAgICAgICAgIHByaWNlU3Bhbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihgICgke3Blckl0ZW19LyR7dW5pdH0pYCwgdGhpcy50YWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGlwcGluZ0Fkcy50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0U3BhbiwgZ2VuZXJpY0NsZWFudXAsIHBhcnNlRHVyYXRpb24sIHRvRml4ZWQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWV1ZUxvYWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBcInBiLXF1ZXVlLWxvYWRcIjtcclxuICAgIH1cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICAgICAgZ2VuZXJpY0NsZWFudXAodGhpcy50YWcpO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUXVldWVMb2FkKCk7XHJcbiAgICB9XHJcbiAgICBnZXRFdGFGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGNvbnN0IGV0YUNlbGwgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNSk7XHJcbiAgICAgICAgaWYgKGV0YUNlbGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXRhU3BhbiA9IGV0YUNlbGwucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGlmIChldGFTcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldGEgPSBwYXJzZUR1cmF0aW9uKGV0YVNwYW4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZVF1ZXVlTG9hZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuUHJvZFF1ZXVlVGFibGUpKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0Ym9keTpudGgtb2YtdHlwZSgyKSA+IHRyXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxUaW1lID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmdldEV0YUZyb21Sb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIG47XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG90YWxUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRhID0gdGhpcy5nZXRFdGFGcm9tUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IHRvRml4ZWQoZXRhIC8gdG90YWxUaW1lICogMTAwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSByb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLml0ZW0oNik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRGaWVsZCAmJiBldGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVUZXh0U3BhbihgICR7cGVyY2VudH0lYCwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9RdWV1ZUxvYWQudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVRleHRTcGFuLCBnZXRCdWZmZXJzLCBjcmVhdGVNYXRlcmlhbEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuZXhwb3J0IGNsYXNzIFhJVEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBpa2V5LCB3ZWJhcHBJRCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJwYi14aXRcIjtcclxuICAgICAgICB0aGlzLmFwaWtleSA9IGFwaWtleTtcclxuICAgICAgICB0aGlzLndlYmFwcElEID0gd2ViYXBwSUQ7XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBnZXRCdWZmZXJzKFwiWElUXCIpO1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGlsZSA9IGJ1ZmZlci5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLlhJVFRpbGUpO1xyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlID0gYnVmZmVyLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuWElUVGlsZUZsb2F0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsIHx8IHRpbGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyc1JhdyA9IEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVySGVhZGVyKSlbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzUmF3ID09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzUmF3ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc1Jhdy5zbGljZSg0KS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzID09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMueGl0VGFnID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyMjIyMjJcIjtcclxuICAgICAgICAgICAgdGlsZS5zdHlsZS5wYWRkaW5nVG9wID0gXCI0cHhcIjtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnhpdFRhZy50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiSU5WXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBpa2V5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gQVBJIEtleSFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzFdID09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzWzJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gXCJGSU8gSU5WRU5UT1JZXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHJpZXZlZEVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aWxlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkRWxlbWVudHNbMF0gIT0gdW5kZWZpbmVkICYmIHJldHJpZXZlZEVsZW1lbnRzWzBdLnRpdGxlID09IFwibG9hZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdldEZJT0ludmVudG9yeSh0aWxlLCBwYXJhbWV0ZXJzWzFdLCBwYXJhbWV0ZXJzWzJdLCB0aGlzLmFwaWtleSwgdGhpcy50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRJU0NPUkRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cyA9IEFycmF5LmZyb20odGlsZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlZEVsZW1lbnRzWzBdICE9IHVuZGVmaW5lZCAmJiByZXRyaWV2ZWRFbGVtZW50c1swXS5pZCA9PSBcImRpc2NvcmQtc3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJ1ZmZlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFNlbGVjdG9yLkJ1ZmZlclRpdGxlKSlbMF0udGV4dENvbnRlbnQgPSBcIkRJU0NPUkQgU0VSVkVSXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZlcklEO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFubmVsSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyc1sxXSAhPSB1bmRlZmluZWQgJiYgcGFyYW1ldGVyc1syXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXJzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUFRTXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVySUQgPSBcIjg1MTQ1Mzk3NjY0OTUzMTQyMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxJRCA9IFwiODUxNDUzOTc2NjQ5NTMxNDI1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVUZPXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVySUQgPSBcIjg1NTQ4ODMwOTgwMjE3MjQ2OVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxJRCA9IFwiODU1NDg5NzExNjM1NDMxNDc1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBEaXNjb3JkIFNlcnZlciFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzFdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRGlzY29yZCBTZXJ2ZXIhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtZXRlcnNbMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcklEID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbElEID0gcGFyYW1ldGVyc1syXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzY29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY29yZC5zcmMgPSBcImh0dHBzOi8vZS53aWRnZXRib3QuaW8vY2hhbm5lbHMvXCIgKyBzZXJ2ZXJJRCArIFwiL1wiICsgY2hhbm5lbElEO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvcmQud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNjb3JkLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvcmQuaWQgPSBcImRpc2NvcmQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGlzY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNIRUVUU1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aWxlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkRWxlbWVudHNbMF0gIT0gdW5kZWZpbmVkICYmIHJldHJpZXZlZEVsZW1lbnRzWzBdLmlkID09IFwic2hlZXRzLXN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gXCJHT09HTEUgU0hFRVRTXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBObyBNYXRjaGluZyBTcHJlYWRzaGVldCFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC5zcmMgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL1wiICsgcGFyYW1ldGVyc1sxXSArIFwiL2VkaXQ/dXNwPXNoYXJpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmlkID0gXCJzaGVldHMtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBSVU5cIjpcclxuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cyA9IEFycmF5LmZyb20odGlsZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlZEVsZW1lbnRzWzBdICE9IHVuZGVmaW5lZCAmJiByZXRyaWV2ZWRFbGVtZW50c1swXS5pZCA9PSBcInNoZWV0cy1zdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVyVGl0bGUpKVswXS50ZXh0Q29udGVudCA9IFwiUFJVTi1DRVBUSU9OXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJ1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJ1bi5zcmMgPSBcImh0dHBzOi8vYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tLyMvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJ1bi53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBydW4uaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJ1bi5pZCA9IFwic2hlZXRzLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmFwcGVuZENoaWxkKHBydW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFISVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aWxlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkRWxlbWVudHNbMF0gIT0gdW5kZWZpbmVkICYmIHJldHJpZXZlZEVsZW1lbnRzWzBdLmlkID09IFwiYWhpLXN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidWZmZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTZWxlY3Rvci5CdWZmZXJUaXRsZSkpWzBdLnRleHRDb250ZW50ID0gXCJBSEkgSU5WRU5UT1JZXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYW5ldDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnNbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBUb28gRmV3IFBhcmFtZXRlcnMhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJhbWV0ZXJzWzJdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyc1sxXS5sZW5ndGggPD0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSBwYXJhbWV0ZXJzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyc1sxXS5sZW5ndGggPD0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSBwYXJhbWV0ZXJzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0ID0gcGFyYW1ldGVyc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gcGFyYW1ldGVyc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5ldCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QUhJSW52ZW50b3J5KHRpbGUsIG1hdGVyaWFsLCBwbGFuZXQsIHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTSEVFVFRBQkxFXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMgPSBBcnJheS5mcm9tKHRpbGUuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRFbGVtZW50c1swXSAhPSB1bmRlZmluZWQgJiYgcmV0cmlldmVkRWxlbWVudHNbMF0uaWQgPT0gXCJ0YWJsZS1zdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYnVmZmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU2VsZWN0b3IuQnVmZmVyVGl0bGUpKVswXS50ZXh0Q29udGVudCA9IFwiR09PR0xFIFNIRUVUUyBUQUJMRVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzWzFdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm90IEVub3VnaCBQYXJhbWV0ZXJzIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2hlZXRzVGFibGUodGlsZSwgcGFyYW1ldGVyc1sxXSwgdGhpcy53ZWJhcHBJRCwgdGhpcy50YWcsIHBhcmFtZXRlcnNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgTm8gTWF0Y2hpbmcgRnVuY3Rpb24hXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRTaGVldHNUYWJsZSh0aWxlLCBwYXJhbWV0ZXIsIHdlYmFwcElELCB0YWcsIGV4dHJhUGFyYW0pIHtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICB0aWxlLmNoaWxkcmVuWzBdLmlkID0gXCJ0YWJsZS1zdWNjZXNzXCI7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHZhciBqc29uZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChTeW50YXhFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiRXJyb3IhIENvdWxkIE5vdCBMb2FkIEpTT04gRGF0YSFcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgdGFibGUudGl0bGUgPSBcIlNoZWV0IFRhYmxlXCI7XHJcbiAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRpdGxlIG9mIGRhdGFbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci50aXRsZSA9IHRpdGxlICsgXCIgSGVhZGVyXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIGhlYWRSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICAgICAgZGF0YS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIHJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRhYmxlRWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRTcGFuKHBvaW50KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvXCIgKyB3ZWJhcHBJRCArIFwiL2V4ZWM/bW9kZT0lMjJcIiArIHBhcmFtZXRlciArIFwiJTIyXCI7XHJcbiAgICBpZiAoZXh0cmFQYXJhbSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCImcGFyYW09JTIyXCIgKyBleHRyYVBhcmFtICsgXCIlMjJcIjtcclxuICAgIH1cclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBnZXRBSElJbnZlbnRvcnkodGlsZSwgbWF0ZXJpYWwsIHBsYW5ldCwgdGFnKSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHZhciBqc29uZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGlmIChqc29uZGF0YSA9PSB1bmRlZmluZWQgfHwganNvbmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb25kYXRhKTtcclxuICAgICAgICAgICAgdmFyIGludmVudG9yeURhdGE7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlEYXRhID0gSlNPTi5wYXJzZShqc29uZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKFN5bnRheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgQ291bGQgTm90IExvYWQgSlNPTiBEYXRhIVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpdGVtc1BlclJvdyA9IE1hdGguY2VpbChpbnZlbnRvcnlEYXRhLmxlbmd0aCAvIDQpO1xyXG4gICAgICAgICAgICBpdGVtc1BlclJvdyA9IGl0ZW1zUGVyUm93ID4gMyA/IDMgOiBpdGVtc1BlclJvdztcclxuICAgICAgICAgICAgdmFyIHJvd051bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52ZW50b3J5RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdmlkZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93TnVtID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyLnN0eWxlID0gXCJtYXJnaW46IDBweDsgcGFkZGluZzogNXB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBmbGV4LXdyYXA6IHdyYXA7IGJvcmRlci10b3Atd2lkdGg6IDFweDsgYm9yZGVyLXRvcC1jb2xvcjogIzJiNDg1YTsgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7IGJvcmRlci1ib3R0b20td2lkdGg6IDBweDsgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJiNDg1YTsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpIC8gaXRlbXNQZXJSb3cpICUgMiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjMyODJiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gdGlsZS5jaGlsZHJlblt0aWxlLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJY29uID0gY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGludmVudG9yeURhdGFbaV1bXCJtYXRlcmlhbFwiXSwgdGFnLCBpbnZlbnRvcnlEYXRhW2ldW1wicXVhbnRpdHlBdmFpbFwiXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93TnVtICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbEljb24uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjE1cHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxJY29uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2aWRlci5hcHBlbmRDaGlsZChpbmZvKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVUZXh0U3BhbihpbnZlbnRvcnlEYXRhW2ldW1widXNlclwiXVtcIm5hbWVcIl0sIHRhZyk7XHJcbiAgICAgICAgICAgICAgICBuYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgICAgIG5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIG5hbWUuc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcclxuICAgICAgICAgICAgICAgIG5hbWUuc3R5bGUubWFyZ2luQm90dG9tID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFuZXRFbGVtID0gY3JlYXRlVGV4dFNwYW4oaW52ZW50b3J5RGF0YVtpXVtcInBsYW5ldFwiXVtcIm5hbWVcIl0sIHRhZyk7XHJcbiAgICAgICAgICAgICAgICBwbGFuZXRFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKHBsYW5ldEVsZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0QW1vdW50ID0gY3JlYXRlVGV4dFNwYW4oaW52ZW50b3J5RGF0YVtpXVtcInF1YW50aXR5QXZhaWxcIl0gKyBcIiBcIiArIGludmVudG9yeURhdGFbaV1bXCJtYXRlcmlhbFwiXSwgdGFnKTtcclxuICAgICAgICAgICAgICAgIG1hdEFtb3VudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChtYXRBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZURpZmZlcmVuY2UgPSAoRGF0ZS5ub3coKSAtIChuZXcgRGF0ZShpbnZlbnRvcnlEYXRhW2ldW1widGltZXN0YW1wXCJdKS5nZXRUaW1lKCkpKSAvIDM2MDAwMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lRWxlbSA9IGNyZWF0ZVRleHRTcGFuKHRpbWVEaWZmZXJlbmNlLnRvRml4ZWQoMCkgKyBcIiBob3VycyBhZ29cIiwgdGFnKTtcclxuICAgICAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGltZUVsZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlvSW5kaWNhdG9yID0gaW52ZW50b3J5RGF0YVtpXVtcImlzRklPXCJdID8gXCLir4FcIiA6IFwi4q+AXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW9FbGVtID0gY3JlYXRlVGV4dFNwYW4oZmlvSW5kaWNhdG9yLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgZmlvRWxlbS5zdHlsZS5jb2xvciA9IGludmVudG9yeURhdGFbaV1bXCJpc0ZJT1wiXSA/IFwiI2Y0OTAwY1wiIDogXCIjYmJiYmJiXCI7XHJcbiAgICAgICAgICAgICAgICBmaW9FbGVtLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIzcHhcIjtcclxuICAgICAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZmlvRWxlbSk7XHJcbiAgICAgICAgICAgICAgICByb3dOdW0rKztcclxuICAgICAgICAgICAgICAgIGlmIChyb3dOdW0gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuY2hpbGRyZW5bdGlsZS5jaGlsZHJlbi5sZW5ndGggLSAxXS5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IFwiMXB4XCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHRpdGxlVGV4dDtcclxuICAgIGlmIChtYXRlcmlhbCA9PSB1bmRlZmluZWQgJiYgcGxhbmV0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpdGxlVGV4dCA9IFwiQWxsIEJvdCBFbnRyaWVzXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYXRlcmlhbCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aXRsZVRleHQgPSBcIkJvdCBFbnRyaWVzIG9uIFwiICsgcGxhbmV0O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGxhbmV0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpdGxlVGV4dCA9IFwiQm90IEVudHJpZXMgZm9yIFwiICsgbWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aXRsZVRleHQgPSBcIkJvdCBFbnRyaWVzIGZvciBcIiArIG1hdGVyaWFsICsgXCIgb24gXCIgKyBwbGFuZXQ7XHJcbiAgICB9XHJcbiAgICB2YXIgdGl0bGUgPSBjcmVhdGVUZXh0U3Bhbih0aXRsZVRleHQsIHRhZyk7XHJcbiAgICB0aXRsZS5pZCA9IFwiYWhpLXN1Y2Nlc3NcIjtcclxuICAgIHRpdGxlLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA4cHhcIjtcclxuICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgdGl0bGUuc3R5bGUuY29sb3IgPSBcIiMzZmEyZGVcIjtcclxuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9haGkudGVjaG5vam9uZXMudXMvYXBpL3YxL2ludmVudG9yaWVzXCI7XHJcbiAgICBpZiAobWF0ZXJpYWwgIT0gdW5kZWZpbmVkIHx8IHBsYW5ldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gXCI/XCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGxhbmV0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHVybCArPSBcInBsYW5ldD1cIiArIHBsYW5ldDtcclxuICAgIH1cclxuICAgIGlmIChtYXRlcmlhbCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocGxhbmV0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCArPSBcIm1hdGVyaWFsPVwiICsgbWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpb01hdHNBbHBoYWJldFNvcnQoYSwgYikge1xyXG4gICAgaWYgKGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdID09IG51bGwgfHwgYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFbXCJNYXRlcmlhbENhdGVnb3J5XCJdLmxvY2FsZUNvbXBhcmUoYltcIk1hdGVyaWFsQ2F0ZWdvcnlcIl0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZJT0ludmVudG9yeSh0aWxlLCB1c2VyLCBzdG9yYWdlLCBhcGlrZXksIHRhZykge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJFcnJvciEgSW52ZW50b3J5IENvdWxkIE5vdCBCZSBMb2FkZWQhXCI7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICB2YXIganNvbmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBpZiAoanNvbmRhdGEgPT0gdW5kZWZpbmVkIHx8IGpzb25kYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW52ZW50b3J5RGF0YTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeURhdGEgPSBKU09OLnBhcnNlKGpzb25kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBDb3VsZCBOb3QgTG9hZCBEYXRhIVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZvbHVtZVVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lTG9hZFwiXTtcclxuICAgICAgICAgICAgY29uc3Qgdm9sdW1lVG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiVm9sdW1lQ2FwYWNpdHlcIl07XHJcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodFVzZWQgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0TG9hZFwiXTtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0VG90YWwgPSBpbnZlbnRvcnlEYXRhW1wiV2VpZ2h0Q2FwYWNpdHlcIl07XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gXCIjM2ZhMmRlXCI7XHJcbiAgICAgICAgICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICAgICAgICAgIGhlYWRlci50aXRsZSA9IFwibG9hZGVkXCI7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCh0YWcpO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJzdHJldGNoXCI7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyM3B4XCI7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IFwiNXB4IDhweFwiO1xyXG4gICAgICAgICAgICBib2R5LmlkID0gXCJib2R5XCI7XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihzdG9yYWdlLCB0YWcpKTtcclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbGVtID0gY3JlYXRlVGV4dFNwYW4odXNlciwgdGFnKTtcclxuICAgICAgICAgICAgdXNlckVsZW0uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xyXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlckVsZW0pO1xyXG4gICAgICAgICAgICBjb25zdCB2b2x1bWVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdm9sdW1lTGluZS5pZCA9IFwidm9sdW1lLWxpbmVcIjtcclxuICAgICAgICAgICAgdm9sdW1lTGluZS5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICAgICAgICAgIHZvbHVtZUxpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICAgICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIlZvbHVtZSBcIiwgdGFnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZvbHVtZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgdm9sdW1lQmFyLmlkID0gXCJ2b2x1bWUtYmFyXCI7XHJcbiAgICAgICAgICAgIHZvbHVtZUJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIHZvbHVtZUJhci50aXRsZSA9IFwicG1tZy1wcm9ncmVzcy1iYXJcIjtcclxuICAgICAgICAgICAgdm9sdW1lQmFyLnN0eWxlLndpZHRoID0gXCIzMHB4XCI7XHJcbiAgICAgICAgICAgIHZvbHVtZUJhci5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xyXG4gICAgICAgICAgICB2b2x1bWVCYXIuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzk5OVwiO1xyXG4gICAgICAgICAgICB2b2x1bWVCYXIuc3R5bGUubWFyZ2luID0gXCIxcHggMnB4XCI7XHJcbiAgICAgICAgICAgIHZvbHVtZUJhci5tYXggPSAxO1xyXG4gICAgICAgICAgICB2b2x1bWVCYXIudmFsdWUgPSB2b2x1bWVVc2VkIC8gdm9sdW1lVG90YWw7XHJcbiAgICAgICAgICAgIHZvbHVtZUxpbmUuYXBwZW5kQ2hpbGQodm9sdW1lQmFyKTtcclxuICAgICAgICAgICAgdm9sdW1lTGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih2b2x1bWVVc2VkLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgdm9sdW1lVG90YWwudG9GaXhlZCgwKSArIFwiIG3Cs1wiLCB0YWcpKTtcclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHZvbHVtZUxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgd2VpZ2h0TGluZS5pZCA9IFwid2VpZ2h0LWxpbmVcIjtcclxuICAgICAgICAgICAgd2VpZ2h0TGluZS5zdHlsZS5wYWRkaW5nID0gXCIycHggOHB4XCI7XHJcbiAgICAgICAgICAgIHdlaWdodExpbmUuc3R5bGUuY29sb3IgPSBcIiM5OTk5OTlcIjtcclxuICAgICAgICAgICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3BhbihcIldlaWdodCBcIiwgdGFnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgd2VpZ2h0QmFyLmlkID0gXCJ3ZWlnaHQtYmFyXCI7XHJcbiAgICAgICAgICAgIHdlaWdodEJhci5jbGFzc0xpc3QuYWRkKHRhZyk7XHJcbiAgICAgICAgICAgIHdlaWdodEJhci50aXRsZSA9IFwicG1tZy1wcm9ncmVzcy1iYXJcIjtcclxuICAgICAgICAgICAgd2VpZ2h0QmFyLnN0eWxlLndpZHRoID0gXCIzMHB4XCI7XHJcbiAgICAgICAgICAgIHdlaWdodEJhci5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xyXG4gICAgICAgICAgICB3ZWlnaHRCYXIuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzk5OVwiO1xyXG4gICAgICAgICAgICB3ZWlnaHRCYXIuc3R5bGUubWFyZ2luID0gXCIxcHggMnB4XCI7XHJcbiAgICAgICAgICAgIHdlaWdodEJhci5tYXggPSAxO1xyXG4gICAgICAgICAgICB3ZWlnaHRCYXIudmFsdWUgPSB3ZWlnaHRVc2VkIC8gd2VpZ2h0VG90YWw7XHJcbiAgICAgICAgICAgIHdlaWdodExpbmUuYXBwZW5kQ2hpbGQod2VpZ2h0QmFyKTtcclxuICAgICAgICAgICAgd2VpZ2h0TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0U3Bhbih3ZWlnaHRVc2VkLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgd2VpZ2h0VG90YWwudG9GaXhlZCgwKSArIFwiIHRcIiwgdGFnKSk7XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWlnaHRMaW5lKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5RGF0YVtcIlN0b3JhZ2VJdGVtc1wiXS5zb3J0KGZpb01hdHNBbHBoYWJldFNvcnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGludmVudG9yeURhdGFbXCJTdG9yYWdlSXRlbXNcIl0pIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWF0ZXJpYWxFbGVtZW50KGl0ZW1bXCJNYXRlcmlhbFRpY2tlclwiXSwgdGFnLCBpdGVtW1wiTWF0ZXJpYWxBbW91bnRcIl0sIHRydWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci50aW1lb3V0ID0gMjAwMDtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9yZXN0LmZuYXIubmV0XCIgKyBcIi9zdG9yYWdlL1wiICsgdXNlciArIFwiL1wiICsgc3RvcmFnZSwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYXBpa2V5KTtcclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1hJVEhhbmRsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=