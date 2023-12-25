/**
 * List of CSS Hashes used as selectors to find interesting elements.
 * They change when the interface gets updated.
 * These are CSS selectors, and not XPath expressions.
 */
export const Selector = {
  LMCommodityAdText: "div[class~='CommodityAd__text___xJQmJNa']",
  LMCommodityAdPriceSpan: "div[class~='CommodityAd__text___xJQmJNa'] > span",
  ProdItem: "OrderSlot__container___YFyk8a7",
  ProdQueueTable: "table[class~='ProductionQueue__table___jHQGyUI']",
  //ProdQueueHeader: "lgE1++73+6oYxVSaOtik-g==",
  BufferHeader: 'TileFrame__cmd___ScBYW0n type__type-very-small___HaVMqrE',
  Sidebar: "div#TOUR_TARGET_SIDEBAR_RIGHT",
  LMPostForm: "form[class~='LocalMarketPost__form___CAVPdDE']",
  WorkforceConsumptionTable: "div[class~='TileFrame__title___xRcZCPx']",
  XITTile: "div[class~='ScrollView__view___ovf59Tk'] > div",
  BufferTitle: "div[class~='TileFrame__title___xRcZCPx']",
  Notification: "div[class~='AlertListItem__content___XYebR1E']",
  ProdQueue: "div[class~='SiteProductionLines__column____s3cTk7']",
  //ProdWindow: "div[class~='Iw1zMtcrB7NFCxAG4xTz8g==']",
  BufferPanel: "div[class~='ScrollView__view___ovf59Tk']",
  NewBFRButton: "TOUR_TARGET_BUTTON_BUFFER_NEW",
  WholeWindow: "#container",
  BufferTextField: "input[class~='PanelSelector__input___wUstHrO']",
  BufferList: "#container > div > div > div > div:nth-child(3)",
  ScreenControls: "TOUR_TARGET_SCREEN_CONTROLS",
  //TransferArea: "div[class~='B4ccCHhEh7W0xd-YYg3qTg==']",
  //TransferField: "div[class~='xuy2wpBCdzgc8G3w3AlXTw==']",
  LeftSidebar: "TOUR_TARGET_SIDEBAR_LEFT_02",
  BufferArea: "div[class~='Tile__selector___HYMmNEO']",
  //CXOSTable: "div[class~='gecI5uGBluvjP5GCRk3dHA==']", // Be warned, not unique to CXOS Table!
  ScreenName: "span[class~='ScreenControls__currentScreenName___I2sIYag']",
  //ChatMessage: "div[class~='bY8qSPcFFLkiKNEqOrKHiA==']",
  //ChatWindow: "div[class~='tvLh70IeyzjPBXlNSDYokg==']",
  //ChatInput: "div[class~='BArxa2yGz-u5GgiT-uvI9Q==']",
  //ChatTile: "div[class~='_8MZs-piY-+t2NOXRPhMM6A==']",
  MaterialIcon: "GridItemView__image___yMoKOZV",
  BufferLink: "span[class~='Link__link___fa4mmMA']",
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
  ContDFormInput: "div[class~='FormComponent__input___ZnI8mYi']",
  SidebarContract: "div[class~='Sidebar__contract___J0gmlzN']",
  SidebarContractId: "span[class~='Sidebar__contractId___Lg85TRZ']",
  BuildingList: "div[class~='SectionList__container___EtUzWyi']",
  Divider: "div[class~='SectionList__divider___cwWO45v']",
  MaterialLabel: "span[class~='GridItemView__name___h3yX9Lm']",
  SmallButton: "button[class~='Button__darkInline___z_YKa91']",
  ShipStorage: "span[class~='ShipStore__pointer___TQUMuFY']"
}
