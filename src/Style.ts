// A list of PrUN class names that can be applied to style elements
export const Style = {
  // Styles coloring buttons
  Button: ["Button__btn___UJGZ1b7"],
  ButtonPrimary:   ["Button__primary____lObPiw"],
  ButtonSuccess:   ["Button__success___bCiIVXw"],
  ButtonDisabled : ["Button__disabled____x8i7XF"],
  ButtonEnabled :  ["Button__primary____lObPiw"],
  ButtonDanger:    ["Button__danger___S2rSOES"],
  ButtonNeutral:   ["Button__neutral___OAFOaNs"],
  SmallButton:     ["Button__darkInline___z_YKa91", "Button__dark___vdJbcc8", "Button__btn___UJGZ1b7", "Button__inline___Ffw9bbn"],
  
  // Misc styles
  SidebarSectionHead:    ["Sidebar__sectionHead____NHLKDT", "fonts__font-regular___Sxp1xjo"],
  SidebarSectionContent: ["Sidebar__sectionContent___wgGYFop", "fonts__font-regular___Sxp1xjo"],
  SidebarLine:           ["Sidebar__contract___J0gmlzN", "Sidebar__sidebar-line___bE2rbRb"],
  FontsRegular: ["fonts__font-regular___Sxp1xjo"],
  SidebarText:   ["Frame__toggleLabel___BTFce8H", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
  SidebarSliver: ["Frame__toggleIndicatorSecondary___frX4CGi", "Frame__toggleIndicator___ZKQQgAL"],
  SidebarButton: ["Frame__toggle___V3iHpB7"],
  ContractLine: ["y84EUI8gCP-SV91X7vIihQ==", "fVd3aYJhFY-uuaH+QTByhA=="],
  ContractName: ["zhixp408YF082IzA5KPvfA=="],
  ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="],

  // More misc styles
  RadioButton:           ["RadioItem__container___CSczqmG"],
  SettingsButton:        ["RadioItem__container___CSczqmG", "RadioItem__containerHorizontal____trlXDo"],
  RadioButtonUnToggled:  ["RadioItem__indicator___QzQtjhA"],
  SettingsBarUntoggled:  ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh"],
  RadioButtonToggled:    ["RadioItem__indicator___QzQtjhA", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
  SettingsBarToggled:    ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
  RadioButtonValue:      ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO"],
  SettingsText:          ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO", "RadioItem__valueHorizontal___D5AXJ9P"],
  ScreenUnderlineUntoggled: ["HeadItem__indicatorPrimary___rx46qOB", "HeadItem__indicator___A_wijoE"],
  ScreenUnderlineToggled: ["HeadItem__indicatorPrimary___rx46qOB", "HeadItem__indicator___A_wijoE", "ScreenControls__indicatorActive___cnKagZ4", "effects__shadowPrimary___EbXJQor"],

  // Styles coloring overlays
  OverlappingDiv: ["Overlay__overlay___NA9HV8y"],
  GreyStripes:    ["Overlay__background___ieZpHiF", "Overlay__overlay___NA9HV8y"],
  Spacer:         ["Overlay__close___bxGoMIl"],
  ProgressBar:        ["ProgressBar__primary___O30jBqq", "ProgressBar__progress___eb4KhuW"],
  ProgressBarColors:  ["ProgressBar__primary___O30jBqq", "grey-progress-bar", "good-progress-bar", "warning-progress-bar", "danger-progress-bar"],
  ProgressBarGood:    ["good-progress-bar"],
  ProgressBarWarning: ["warning-progress-bar"],
  ProgressBarDanger:  ["danger-progress-bar"],
  CenterInterface: ["Overlay__children___rgtVaxc"],
  
  // Styles coloring forms
  FormRow:       ["FormComponent__containerActive___HZv9jHd", "forms__active___wn9KQTZ", "forms__form-component___yTgP_Qa"],
  HeaderRow:     ["FormComponent__containerPassive___FrBdyGU", "forms__passive___biRUiE5", "forms__form-component___yTgP_Qa"],
  FormLabel:     ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
  FormInput:     ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
  FormSaveRow:   ["FormComponent__containerCommand___B4XLERf", "forms__cmd___IMzt7Ug", "forms__form-component___yTgP_Qa"],
  FormSaveLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
  FormSaveInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
  
  // Styles coloring confirmation overlays
  ActionOverlay: ["ActionConfirmationOverlay__container___A05Ts1g", "ActionFeedback__overlay___NNDPRrV"],
  ActionCenterInterface: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
  ActionConfirm: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
  ActionConfirmMessage: ["ActionConfirmationOverlay__text___qkKzVK0", "ActionFeedback__text___YQjjibG", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
  ActionButtons: ["ActionConfirmationOverlay__buttons___sE7CNVe"],
  
  // Styles coloring material icons
  MatText:         ["ColoredIcon__label___OU1I4oP"],
  MatTextWrapper:  ["ColoredIcon__labelContainer___YVfgzOk"],
  MaterialElement: ["ColoredIcon__container___djaR4r2"],
  MaterialWrapper:        ["MaterialIcon__container___q8gKIx8"],
  MaterialNumberWrapper:  ["MaterialIcon__indicatorContainer___Cqtax_Y"],
  MaterialNumber:         ["MaterialIcon__indicator___SHwlndJ", "MaterialIcon__type-very-small___UMzQ3ir", "MaterialIcon__neutral___SYsHXAa"],
  MaterialWrapperWrapper: ["GridItemView__image___yMoKOZV"],
  MaterialOuter:          ["GridItemView__container___xP2uJz8"],
  MaterialNameText:       ["GridItemView__name___h3yX9Lm", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
  
  // CXOB Styles
  CXOBAmount: ["ComExOrderBookPanel__amount___EoNHTID"],
  CXOBOffer: ["ComExOrderBookPanel__offerPrice___kisxczh", "ComExOrderBookPanel__amount___EoNHTID"],
  CXOBSpread: ["ComExOrderBookPanel__spread___GIYNNWd"],
  CXOBEmpty: ["ComExOrderBookPanel__empty___yl28RaU"],
  CXOBRequest: ["ComExOrderBookPanel__requestPrice___ZTEgYCz", "ComExOrderBookPanel__amount___EoNHTID"],

}

// A function to apply multiple classes to an element in one go
export const WithStyles = (...style: string[][]): string[] => {
  return style.reduce(((previousValue, currentValue) =>
    previousValue.concat(currentValue))
  )
}

// The text colors used in PrUN
export const TextColors = {
	Failure: "#d9534f",
	Success: "#5cb85c",
	Standard: "#bbbbbb",
	Yellow: "#f7a600"
}

/*export const DefaultColors = [
	"#591e00",
	"#7b3d00",
	"#b46d00",
	"#f7a600",
	"#ffcf40",
	"#fbe4af"
]*/
export const DefaultColors = [
	"#004564",
	"#005b76",
	"#007079",
	"#00846c",
	"#009552",
	"#67a22e",
	"#ada900",
	"#f7a600"
]

// The default category colors used in PrUN
export const CategoryColors = {
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
}

// The style needed for PMMG's modules to function
export const PMMGStyle = `
.cursor-move {
	cursor: default !important;
}
.cursor-move:active {
	cursor: move !important;
}
.pb-scroll {
	overflow-y: scroll;
	flex: 1;
	width: 120px;
	vertical-align: top;
}
.pb-scroll::-webkit-scrollbar {
	width: 0;
}
.pb-scroll::-moz-scrollbar {
	width: 0;
}

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
.check-item {
	display: flex;
	justify-content: space-between;
	border-bottom: solid 1px #555;
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



.notes-wrapper .title.note-title {
    padding-top: 5px;
}
.pb-note-overlay {
    background-color: #42361d;
    color: #cccccc;
	margin: 10px;
    padding: 10px;
    border: 0;
    width: calc(100% - 20px);
    height: calc(100% - 20px - 20px);
    position: absolute;
    top: 20px;
    left: 0;
    overflow-wrap: anywhere;
	white-space: pre-wrap;
	overflow-y: scroll;
	font-family: "Droid Sans",sans-serif;
	font-size: 13.333px;
    line-height: 1.5;
    tab-size: 4;
}
.pb-note-overlay::-webkit-scrollbar {
	width: 0;
}
.pb-note-overlay::-moz-scrollbar {
	width: 0;
}

.pb-note-textbox {
	color: transparent;
	background: transparent;
	caret-color: white;
	margin: 10px;
    padding: 10px;
    border: 0;
    width: calc(100% - 20px);
    height: calc(100% - 20px - 20px);
    position: absolute;
    top: 20px;
    left: 0;
    overflow-y: scroll;
	//white-space: wrap; <- Broke on FF for some reason. Doesn't appear to be needed
	font-family: "Droid Sans",sans-serif;
	font-size: 13.333px;
    line-height: 1.5;
    tab-size: 4;
	resize: none;
	z-index: 1;
}
.pb-note-textbox:focus {
	outline: none;
}
.pb-note-textbox::-webkit-scrollbar {
	width: 0;
}
.pb-note-textbox::-moz-scrollbar {
	width: 0;
}

.pb-note-link {
	color: #3fa2de;
	cursor: pointer;
	position: relative;
	z-index: 2;
}
.pb-note-link:hover {
	color: #f7a600 !important;
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
	fill: #bbb;
	cursor: pointer;
	display: block;
	font-size: 24px;
	margin-top: -8px;
}
.button-upper-right:hover{
	color: #000 !important;
	fill: #000;
	background-color: rgb(247, 166, 0);
}

.pb-marker {
	width: 15px;
	height: 15px;
	position: absolute;
	top: 33px;
}

.pb-marker > div {
	background: #29353f;
	border-color: #314b5f;
	border-style: solid;
	border-width: 1px;
	border-radius: 4px 4px 4px 0px;
	height: 100%;
	width: 100%;
	display: none;
}

.pb-marker:hover > div {
	display: block;
}

.pb-marker > div > div {
	margin: 1px;
}

div.Head__container___3ecBw0E > div:nth-child(2) {
  flex-shrink: 0;
}

// Fix PrUN Bugs
// This one no longer works but needs to be done
div.ScrollView__view___ovf59Tk {
    inset: -1px !important;
}
`;

// The styles used in the advanced minimalist mode
export const AdvancedStyle = `
span.GridItemView__name___h3yX9Lm {
	display: none;
}
div.GridItemView__container___xP2uJz8 {
	width: auto;
}
div.FormComponent__errorMessage___mBdvpz5 {
	display: none;
}
div.FormComponent__containerError___pN__L1Q {
	flex-wrap: nowrap;
}
`

// The style used to hide the chat delete button
export const ChatDeleteStyle = `
div.Message__controls___b3BAWCW {
	display: none;
}
`

// The style used to hide the join/leave messages
export const JoinLeaveStyle = `
.Message__message___JRbMogR:not(:has(> .Message__name___w2xfkHs > div)) {display:none;}
`

// The enhanced colors style that improves color contrast
export const EnhancedColors = `/* consumables (luxury) */
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

// Old icon coloring scheme
export const OldColors = `
progress::-webkit-progress-value {background: #f7a600;}
/* electronic devices */
div[title="Antenna Array"],
div[data-tooltip-content="#tooltip_AAR"],
div[title="Active Water Filter"],
div[data-tooltip-content="#tooltip_AWF"],
div[title="Full-Body Interaction Device"],
div[data-tooltip-content="#tooltip_BID"],
div[title="Basic Mainframe"],
div[data-tooltip-content="#tooltip_BMF"],
div[title="Body Scanner"],
div[data-tooltip-content="#tooltip_BSC"],
div[title="Basic Workstation"],
div[data-tooltip-content="#tooltip_BWS"],
div[title="Holographic Display"],
div[data-tooltip-content="#tooltip_HD"],
div[title="Holographic Glasses"],
div[data-tooltip-content="#tooltip_HOG"],
div[title="Handheld Personal Console"],
div[data-tooltip-content="#tooltip_HPC"],
div[title="Micro Headphones"],
div[data-tooltip-content="#tooltip_MHP"],
div[title="Radio Device"],
div[data-tooltip-content="#tooltip_RAD"],
div[title="Sensor Array"],
div[data-tooltip-content="#tooltip_SAR"]
{
background: linear-gradient(135deg, #561493, #6826a5) !important;
color: #d593ff !important;
}
/* construction prefabs */
div[title="Advanced Bulkhead"],
div[data-tooltip-content="#tooltip_ABH"],
div[title="Advanced Deck Elements"],
div[data-tooltip-content="#tooltip_ADE"],
div[title="Advanced Structural Elements"],
div[data-tooltip-content="#tooltip_ASE"],
div[title="Advanced Transparent Aperture"],
div[data-tooltip-content="#tooltip_ATA"],
div[title="Basic Bulkhead"],
div[data-tooltip-content="#tooltip_BBH"],
div[title="Basic Deck Elements"],
div[data-tooltip-content="#tooltip_BDE"],
div[title="Basic Structural Elements"],
div[data-tooltip-content="#tooltip_BSE"],
div[title="Basic Transparent Aperture"],
div[data-tooltip-content="#tooltip_BTA"],
div[title="Hardened Structural Elements"],
div[data-tooltip-content="#tooltip_HSE"],
div[title="Lightweight Bulkhead"],
div[data-tooltip-content="#tooltip_LBH"],
div[title="Lightweight Deck Elements"],
div[data-tooltip-content="#tooltip_LDE"],
div[title="Lightweight Structural Elements"],
div[data-tooltip-content="#tooltip_LSE"],
div[title="Lightweight Transparent Aperture"],
div[data-tooltip-content="#tooltip_LTA"],
div[title="Reinforced Bulkhead"],
div[data-tooltip-content="#tooltip_RBH"],
div[title="Reinforced Deck Elements"],
div[data-tooltip-content="#tooltip_RDE"],
div[title="Reinforced Structural Elements"],
div[data-tooltip-content="#tooltip_RSE"],
div[title="Reinforced Transparent Aperture"],
div[data-tooltip-content="#tooltip_RTA"]
{
background: linear-gradient(135deg, #363636, #4a4a4a) !important;
color: #b5b5b5 !important;
}
/* electronic systems */
div[title="Automated Cooling System"],
div[data-tooltip-content="#tooltip_ACS"],
div[title="Audio Distribution System"],
div[data-tooltip-content="#tooltip_ADS"],
div[title="Climate Controller"],
div[data-tooltip-content="#tooltip_CC"],
div[title="Communication System"],
div[data-tooltip-content="#tooltip_COM"],
div[title="Cryogenic Unit"],
div[data-tooltip-content="#tooltip_CRU"],
div[title="FTL Field Controller"],
div[data-tooltip-content="#tooltip_FFC"],
div[title="Life Support System"],
div[data-tooltip-content="#tooltip_LIS"],
div[title="Logistics System"],
div[data-tooltip-content="#tooltip_LOG"],
div[title="Stability Support System"],
div[data-tooltip-content="#tooltip_STS"],
div[title="Targeting Computer"],
div[data-tooltip-content="#tooltip_TAC"],
div[title="Water Reclaimer"],
div[data-tooltip-content="#tooltip_WR"]
{
background: linear-gradient(135deg, #311807, #452c1b) !important;
color: #b09786 !important;
}
/* medical equipment */
div[title="Auto-Doc"],
div[data-tooltip-content="#tooltip_ADR"],
div[title="Bandages"],
div[data-tooltip-content="#tooltip_BND"],
div[title="Painkillers"],
div[data-tooltip-content="#tooltip_PK"],
div[title="Surgical Equipment"],
div[data-tooltip-content="#tooltip_SEQ"],
div[title="Medical Stretcher"],
div[data-tooltip-content="#tooltip_STR"],
div[title="Test Tubes"],
div[data-tooltip-content="#tooltip_TUB"]
{
background: linear-gradient(135deg, #090f0f, #1d2323) !important;
color: #8e8e8e !important;
}
/* construction parts */
div[title="Aerostat Foundation"],
div[data-tooltip-content="#tooltip_AEF"],
div[title="Air Scrubber"],
div[data-tooltip-content="#tooltip_AIR"],
div[title="Decorative Elements"],
div[data-tooltip-content="#tooltip_DEC"],
div[title="Flow Control Device"],
div[data-tooltip-content="#tooltip_FC"],
div[title="Floating Tank"],
div[data-tooltip-content="#tooltip_FLO"],
div[title="Fluid Piping"],
div[data-tooltip-content="#tooltip_FLP"],
div[title="Cylindrical Gas Container"],
div[data-tooltip-content="#tooltip_GC"],
div[title="Gas Vent"],
div[data-tooltip-content="#tooltip_GV"],
div[title="Neon Lighting System"],
div[data-tooltip-content="#tooltip_LIT"],
div[title="Magnetic Ground Cover"],
div[data-tooltip-content="#tooltip_MGC"],
div[title="Metal-Halide Lighting System"],
div[data-tooltip-content="#tooltip_MHL"],
div[title="Pressure Shielding"],
div[data-tooltip-content="#tooltip_PSH"],
div[title="Radiation Shielding"],
div[data-tooltip-content="#tooltip_RSH"],
div[title="Stabilized Technetium"],
div[data-tooltip-content="#tooltip_TCS"],
div[title="Truss"],
div[data-tooltip-content="#tooltip_TRU"],
div[title="Thermal Shielding"],
div[data-tooltip-content="#tooltip_TSH"]
{
background: linear-gradient(135deg, #231e44, #373258) !important;
color: #a29dc3 !important;
}
/* ship engines */
div[title="Advanced STL Engine"],
div[data-tooltip-content="#tooltip_AEN"],
div[title="Advanced Fuel Pump"],
div[data-tooltip-content="#tooltip_AFP"],
div[title="Advanced Fuel Rod"],
div[data-tooltip-content="#tooltip_AFR"],
div[title="Advanced Nozzle"],
div[data-tooltip-content="#tooltip_ANZ"],
div[title="Basic Fuel Pump"],
div[data-tooltip-content="#tooltip_BFP"],
div[title="Basic Fuel Rod"],
div[data-tooltip-content="#tooltip_BFR"],
div[title="Combustion Chamber"],
div[data-tooltip-content="#tooltip_CHA"],
div[title="Standard STL Engine"],
div[data-tooltip-content="#tooltip_ENG"],
div[title="Fission Reactor"],
div[data-tooltip-content="#tooltip_FIR"],
div[title="Fuel-saving STL Engine"],
div[data-tooltip-content="#tooltip_FSE"],
div[title="Glass Combustion Chamber"],
div[data-tooltip-content="#tooltip_GCH"],
div[title="Glass-based STL Engine"],
div[data-tooltip-content="#tooltip_GEN"],
div[title="Glass Nozzle"],
div[data-tooltip-content="#tooltip_GNZ"],
div[title="Hyperthrust Nozzle"],
div[data-tooltip-content="#tooltip_HNZ"],
div[title="High-power FTL Reactor"],
div[data-tooltip-content="#tooltip_HPR"],
div[title="Hyperthrust STL Engine"],
div[data-tooltip-content="#tooltip_HTE"],
div[title="Hyper-power Reactor"],
div[data-tooltip-content="#tooltip_HYR"],
div[title="Large FTL Emitter"],
div[data-tooltip-content="#tooltip_LFE"],
div[title="Low-heat Fuel Pump"],
div[data-tooltip-content="#tooltip_LFP"],
div[title="Medium FTL Emitter"],
div[data-tooltip-content="#tooltip_MFE"],
div[title="Basic Nozzle"],
div[data-tooltip-content="#tooltip_NOZ"],
div[title="Quick-charge FTL Reactor"],
div[data-tooltip-content="#tooltip_QCR"],
div[title="Radioisotope Generator"],
div[data-tooltip-content="#tooltip_RAG"],
div[title="Reactor Control System"],
div[data-tooltip-content="#tooltip_RCS"],
div[title="Standard FTL Reactor"],
div[data-tooltip-content="#tooltip_RCT"],
div[title="Small FTL Emitter"],
div[data-tooltip-content="#tooltip_SFE"]
{
background: linear-gradient(135deg, #0e390e, #224d22) !important;
color: #8db88d !important;
}
/* ship parts */
div[title="Advanced High-G Seats"],
div[data-tooltip-content="#tooltip_AGS"],
div[title="Advanced Hull Plate"],
div[data-tooltip-content="#tooltip_AHP"],
div[title="Advanced Thermal Protection Material"],
div[data-tooltip-content="#tooltip_ATP"],
div[title="Basic High-G Seats"],
div[data-tooltip-content="#tooltip_BGS"],
div[title="Basic Hull Plate"],
div[data-tooltip-content="#tooltip_BHP"],
div[title="Hardened Hull Plate"],
div[data-tooltip-content="#tooltip_HHP"],
div[title="Lightweight Hull Plate"],
div[data-tooltip-content="#tooltip_LHP"],
div[title="Navigation Module MK1"],
div[data-tooltip-content="#tooltip_NV1"],
div[title="Navigation Module MK2"],
div[data-tooltip-content="#tooltip_NV2"],
div[title="Reinforced Hull Plate"],
div[data-tooltip-content="#tooltip_RHP"],
div[title="Structural Spacecraft Component"],
div[data-tooltip-content="#tooltip_SSC"],
div[title="Basic Thermal Protection Material"],
div[data-tooltip-content="#tooltip_THP"]
{
background: linear-gradient(135deg, #3c2e95, #493ba2) !important;
color: #baacff !important;
}
/* metals */
div[title="Aluminium"],
div[data-tooltip-content="#tooltip_AL"],
div[title="Gold"],
div[data-tooltip-content="#tooltip_AU"],
div[title="Copper"],
div[data-tooltip-content="#tooltip_CU"],
div[title="Iron"],
div[data-tooltip-content="#tooltip_FE"],
div[title="Lithium"],
div[data-tooltip-content="#tooltip_LI"],
div[title="Silicon"],
div[data-tooltip-content="#tooltip_SI"],
div[title="Steel"],
div[data-tooltip-content="#tooltip_STL"],
div[title="Titanium"],
div[data-tooltip-content="#tooltip_TI"],
div[title="Tungsten"],
div[data-tooltip-content="#tooltip_W"]
{
background: linear-gradient(135deg, #105c57, #24706b) !important;
color: #8fdbd6 !important;
}
/* consumables (luxury) */
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
background: linear-gradient(135deg, #090f0f, #1d2323) !important;
color: #878787 !important;
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
background: linear-gradient(135deg, #5c1212, #702626) !important;
color: #db9191 !important;
}
/* ores */
div[title="Aluminium Ore"],
div[data-tooltip-content="#tooltip_ALO"],
div[title="Gold Ore"],
div[data-tooltip-content="#tooltip_AUO"],
div[title="Copper Ore"],
div[data-tooltip-content="#tooltip_CUO"],
div[title="Iron Ore"],
div[data-tooltip-content="#tooltip_FEO"],
div[title="Lithium Ore"],
div[data-tooltip-content="#tooltip_LIO"],
div[title="Silicon Ore"],
div[data-tooltip-content="#tooltip_SIO"],
div[title="Titanium Ore"],
div[data-tooltip-content="#tooltip_TIO"]
{
background: linear-gradient(135deg, #3a6061, #4b7172) !important;
color: #b8dedf !important;
}
/* gases */
div[title="Ammonia"],
div[data-tooltip-content="#tooltip_AMM"],
div[title="Argon"],
div[data-tooltip-content="#tooltip_AR"],
div[title="Fluorine"],
div[data-tooltip-content="#tooltip_F"],
div[title="Hydrogen"],
div[data-tooltip-content="#tooltip_H"],
div[title="Helium"],
div[data-tooltip-content="#tooltip_HE"],
div[title="Helium-3 Isotope"],
div[data-tooltip-content="#tooltip_HE3"],
div[title="Nitrogen"],
div[data-tooltip-content="#tooltip_N"],
div[title="Neon"],
div[data-tooltip-content="#tooltip_NE"],
div[title="Oxygen"],
div[data-tooltip-content="#tooltip_O"]
{
background: linear-gradient(135deg, #434d57, #57616b) !important;
color: #c2ccd6 !important;
}
/* ship shields */
div[title="Advanced Thermal Protection Tile"],
div[data-tooltip-content="#tooltip_APT"],
div[title="Advanced Anti-rad Plate"],
div[data-tooltip-content="#tooltip_ARP"],
div[title="Advanced Whipple Shielding"],
div[data-tooltip-content="#tooltip_AWH"],
div[title="Basic Thermal Protection Tile"],
div[data-tooltip-content="#tooltip_BPT"],
div[title="Basic Anti-rad Plate"],
div[data-tooltip-content="#tooltip_BRP"],
div[title="Basic Whipple Shielding"],
div[data-tooltip-content="#tooltip_BWH"],
div[title="Specialized Anti-rad Plate"],
div[data-tooltip-content="#tooltip_SRP"]
{
background: linear-gradient(135deg, #845222, #986636) !important;
color: #ffd1a1 !important;
}
/* alloys */
div[title="Alpha-Stabilized Titanium"],
div[data-tooltip-content="#tooltip_AST"],
div[title="Blue Gold"],
div[data-tooltip-content="#tooltip_BGO"],
div[title="Borosilicate"],
div[data-tooltip-content="#tooltip_BOS"],
div[title="Bronze"],
div[data-tooltip-content="#tooltip_BRO"],
div[title="Ferrominium"],
div[data-tooltip-content="#tooltip_FAL"],
div[title="Ferro-Titanium"],
div[data-tooltip-content="#tooltip_FET"],
div[title="Red Gold"],
div[data-tooltip-content="#tooltip_RGO"],
div[title="Alpha-Stabilized Tungsten"],
div[data-tooltip-content="#tooltip_WAL"]
{
background: linear-gradient(135deg, #4d4d4d, #606060) !important;
color: #cccccc !important;
}
/* chemicals */
div[title="Helpful Bacteria"],
div[data-tooltip-content="#tooltip_BAC"],
div[title="Breathable Liquid"],
div[data-tooltip-content="#tooltip_BL"],
div[title="Desaturation Agent"],
div[data-tooltip-content="#tooltip_BLE"],
div[title="Cryogenic Stabilizer"],
div[data-tooltip-content="#tooltip_CST"],
div[title="DDT Plant Agent"],
div[data-tooltip-content="#tooltip_DDT"],
div[title="Enriched Einsteinium"],
div[data-tooltip-content="#tooltip_EES"],
div[title="Enriched Technetium"],
div[data-tooltip-content="#tooltip_ETC"],
div[title="Flux"],
div[data-tooltip-content="#tooltip_FLX"],
div[title="Indigo Colorant"],
div[data-tooltip-content="#tooltip_IND"],
div[title="Sedative Substance"],
div[data-tooltip-content="#tooltip_JUI"],
div[title="Liquid Crystals"],
div[data-tooltip-content="#tooltip_LCR"],
div[title="Sodium Borohydride"],
div[data-tooltip-content="#tooltip_NAB"],
div[title="Nano-Enhanced Resin"],
div[data-tooltip-content="#tooltip_NR"],
div[title="Nutrient Solution"],
div[data-tooltip-content="#tooltip_NS"],
div[title="Olfactory Substances"],
div[data-tooltip-content="#tooltip_OLF"],
div[title="Premium Fertilizer"],
div[data-tooltip-content="#tooltip_PFE"],
div[title="Chemical Reagents"],
div[data-tooltip-content="#tooltip_REA"],
div[title="Artificial Soil"],
div[data-tooltip-content="#tooltip_SOI"],
div[title="TCL Acid"],
div[data-tooltip-content="#tooltip_TCL"],
div[title="ThermoFluid"],
div[data-tooltip-content="#tooltip_THF"]
{
background: linear-gradient(135deg, #b72e5b, #cb426f) !important;
color: #ffadda !important;
}
/* software components */
div[title="Basic AI Framework"],
div[data-tooltip-content="#tooltip_BAI"],
div[title="Local Database"],
div[data-tooltip-content="#tooltip_LD"],
div[title="Machine Learning Interface"],
div[data-tooltip-content="#tooltip_MLI"],
div[title="Networking Framework"],
div[data-tooltip-content="#tooltip_NF"],
div[title="Search Algorithm"],
div[data-tooltip-content="#tooltip_SA"],
div[title="Sorting Algorithm"],
div[data-tooltip-content="#tooltip_SAL"],
div[title="Window Manager"],
div[data-tooltip-content="#tooltip_WM"]
{
background: linear-gradient(135deg, #434d57, #57616b) !important;
color: #c2ccd6 !important;
}
/* electronic pieces */
div[title="Budget Connectors"],
div[data-tooltip-content="#tooltip_BCO"],
div[title="Shielded Connectors"],
div[data-tooltip-content="#tooltip_BGC"],
div[title="Electric Field Capacitor"],
div[data-tooltip-content="#tooltip_CAP"],
div[title="High-Capacity Connectors"],
div[data-tooltip-content="#tooltip_HCC"],
div[title="Laser Diodes"],
div[data-tooltip-content="#tooltip_LDI"],
div[title="Medium Fastener Kit"],
div[data-tooltip-content="#tooltip_MFK"],
div[title="Medium Wafer"],
div[data-tooltip-content="#tooltip_MWF"],
div[title="Small Fastener Kit"],
div[data-tooltip-content="#tooltip_SFK"],
div[title="Small Wafer"],
div[data-tooltip-content="#tooltip_SWF"],
div[title="Advanced Transistor"],
div[data-tooltip-content="#tooltip_TRN"]
{
background: linear-gradient(135deg, #495561, #5d6975) !important;
color: #c8d4e0 !important;
}
/* elements */
div[title="Beryllium"],
div[data-tooltip-content="#tooltip_BE"],
div[title="Carbon"],
div[data-tooltip-content="#tooltip_C"],
div[title="Calcium"],
div[data-tooltip-content="#tooltip_CA"],
div[title="Chlorine"],
div[data-tooltip-content="#tooltip_CL"],
div[title="Einsteinium"],
div[data-tooltip-content="#tooltip_ES"],
div[title="Iodine"],
div[data-tooltip-content="#tooltip_I"],
div[title="Magnesium"],
div[data-tooltip-content="#tooltip_MG"],
div[title="Sodium"],
div[data-tooltip-content="#tooltip_NA"],
div[title="Sulfur"],
div[data-tooltip-content="#tooltip_S"],
div[title="Tantalum"],
div[data-tooltip-content="#tooltip_TA"],
div[title="Technetium"],
div[data-tooltip-content="#tooltip_TC"],
div[title="Zirconium"],
div[data-tooltip-content="#tooltip_ZR"]
{
background: linear-gradient(135deg, #5b2eb7, #6f42cb) !important;
color: #daadff !important;
}
/* minerals */
div[title="Beryl Crystals"],
div[data-tooltip-content="#tooltip_BER"],
div[title="Boron Crystals"],
div[data-tooltip-content="#tooltip_BOR"],
div[title="Bioreactive Minerals"],
div[data-tooltip-content="#tooltip_BRM"],
div[title="Caliche Rock"],
div[data-tooltip-content="#tooltip_CLI"],
div[title="Galerite Rock"],
div[data-tooltip-content="#tooltip_GAL"],
div[title="Halite Crystals"],
div[data-tooltip-content="#tooltip_HAL"],
div[title="Limestone"],
div[data-tooltip-content="#tooltip_LST"],
div[title="Magnetite"],
div[data-tooltip-content="#tooltip_MAG"],
div[title="Magnesite"],
div[data-tooltip-content="#tooltip_MGS"],
div[title="Sulfur Crystals"],
div[data-tooltip-content="#tooltip_SCR"],
div[title="Tantalite Rock"],
div[data-tooltip-content="#tooltip_TAI"],
div[title="Technetium Oxide"],
div[data-tooltip-content="#tooltip_TCO"],
div[title="Tectosilisite"],
div[data-tooltip-content="#tooltip_TS"],
div[title="Zircon Crystals"],
div[data-tooltip-content="#tooltip_ZIR"]
{
background: linear-gradient(135deg, #495561, #5d6975) !important;
color: #c8d4e0 !important;
}
/* unit prefabs */
div[title="Command Bridge MK1"],
div[data-tooltip-content="#tooltip_BR1"],
div[title="Command Bridge MK2"],
div[data-tooltip-content="#tooltip_BR2"],
div[title="Short-distance Command Bridge"],
div[data-tooltip-content="#tooltip_BRS"],
div[title="Crew Quarters (Large)"],
div[data-tooltip-content="#tooltip_CQL"],
div[title="Crew Quarters (Medium)"],
div[data-tooltip-content="#tooltip_CQM"],
div[title="Crew Quarters (Small)"],
div[data-tooltip-content="#tooltip_CQS"],
div[title="Crew Quarters (Tiny)"],
div[data-tooltip-content="#tooltip_CQT"],
div[title="Drone Operations Unit"],
div[data-tooltip-content="#tooltip_DOU"],
div[title="Entertainment Unit"],
div[data-tooltip-content="#tooltip_FUN"],
div[title="Habitat Unit"],
div[data-tooltip-content="#tooltip_HAB"],
div[title="Laboratory Unit"],
div[data-tooltip-content="#tooltip_LU"],
div[title="Large Ship-Repair Drone Operations Unit"],
div[data-tooltip-content="#tooltip_RDL"],
div[title="Small Ship-Repair Drone Operations Unit"],
div[data-tooltip-content="#tooltip_RDS"],
div[title="Surgery Unit"],
div[data-tooltip-content="#tooltip_SU"],
div[title="Trauma Care Unit"],
div[data-tooltip-content="#tooltip_TCU"],
div[title="Handcraft Workshop Unit"],
div[data-tooltip-content="#tooltip_WOR"]
{
background: linear-gradient(135deg, #3b2d94, #4f41a8) !important;
color: #baacff !important;
}
/* liquids */
div[title="Bacterial Tungsten Solution"],
div[data-tooltip-content="#tooltip_BTS"],
div[title="Water"],
div[data-tooltip-content="#tooltip_H2O"],
div[title="Heliotrope Extract"],
div[data-tooltip-content="#tooltip_HEX"],
div[title="Liquid Einsteinium"],
div[data-tooltip-content="#tooltip_LES"]
{
background: linear-gradient(135deg, #512a18, #633c2a) !important;
color: #cfa896 !important;
}
/* energy systems */
div[title="Large Capacitor Bank"],
div[data-tooltip-content="#tooltip_CBL"],
div[title="Medium Capacitor Bank"],
div[data-tooltip-content="#tooltip_CBM"],
div[title="Small Capacitor Bank"],
div[data-tooltip-content="#tooltip_CBS"],
div[title="Power Cell"],
div[data-tooltip-content="#tooltip_POW"],
div[title="Solar Cell"],
div[data-tooltip-content="#tooltip_SOL"],
div[title="Solar Panel"],
div[data-tooltip-content="#tooltip_SP"]
{
background: linear-gradient(135deg, #3318d8, #472cec) !important;
color: #b297ff !important;
}
/* drones */
div[title="Crowd Control Drone"],
div[data-tooltip-content="#tooltip_CCD"],
div[title="Drone Chassis"],
div[data-tooltip-content="#tooltip_DCH"],
div[title="Drone Frame"],
div[data-tooltip-content="#tooltip_DRF"],
div[title="Rescue Drone"],
div[data-tooltip-content="#tooltip_RED"],
div[title="Surgical Drone"],
div[data-tooltip-content="#tooltip_SDR"],
div[title="Ship-Repair Drone"],
div[data-tooltip-content="#tooltip_SRD"],
div[title="Surveillance Drone"],
div[data-tooltip-content="#tooltip_SUD"]
{
background: linear-gradient(135deg, #5c2fb8, #6f42cb) !important;
color: #d7aafd !important;
}
/* electronic parts */
div[title="Capacitive Display"],
div[data-tooltip-content="#tooltip_CD"],
div[title="Information Display"],
div[data-tooltip-content="#tooltip_DIS"],
div[title="Active Cooling Device"],
div[data-tooltip-content="#tooltip_FAN"],
div[title="Motherboard"],
div[data-tooltip-content="#tooltip_MB"],
div[title="Micro-Processor"],
div[data-tooltip-content="#tooltip_MPC"],
div[title="Printed Circuit Board"],
div[data-tooltip-content="#tooltip_PCB"],
div[title="Memory Bank"],
div[data-tooltip-content="#tooltip_RAM"],
div[title="Non-Volatile Memory"],
div[data-tooltip-content="#tooltip_ROM"],
div[title="Sensor"],
div[data-tooltip-content="#tooltip_SEN"],
div[title="Tensor Processing Unit"],
div[data-tooltip-content="#tooltip_TPU"],
div[title="Audio Transmitter"],
div[data-tooltip-content="#tooltip_TRA"]
{
background: linear-gradient(135deg, #5c1e7a, #70328e) !important;
color: #db9df9 !important;
}
/* textiles */
div[title="Ceramic Fabric"],
div[data-tooltip-content="#tooltip_CF"],
div[title="Cotton Fabric"],
div[data-tooltip-content="#tooltip_COT"],
div[title="Ceramic-Tungsten Fabric"],
div[data-tooltip-content="#tooltip_CTF"],
div[title="Para Aramid"],
div[data-tooltip-content="#tooltip_KV"],
div[title="Nylon Fabric"],
div[data-tooltip-content="#tooltip_NL"],
div[title="Silken Fabric"],
div[data-tooltip-content="#tooltip_SIL"],
div[title="Enhanced Para Aramid"],
div[data-tooltip-content="#tooltip_TK"]
{
background: linear-gradient(135deg, #502917, #643d2b) !important;
color: #cfa896 !important;
}
/* construction materials */
div[title="Epoxy Resin"],
div[data-tooltip-content="#tooltip_EPO"],
div[title="Glass"],
div[data-tooltip-content="#tooltip_GL"],
div[title="InsuFoam"],
div[data-tooltip-content="#tooltip_INS"],
div[title="Mineral Construction Granulate"],
div[data-tooltip-content="#tooltip_MCG"],
div[title="MegaTube Coating"],
div[data-tooltip-content="#tooltip_MTC"],
div[title="Nano-Carbon Sheeting"],
div[data-tooltip-content="#tooltip_NCS"],
div[title="Nano Fiber"],
div[data-tooltip-content="#tooltip_NFI"],
div[title="Nano-Coated Glass"],
div[data-tooltip-content="#tooltip_NG"],
div[title="Reinforced Glass"],
div[data-tooltip-content="#tooltip_RG"],
div[title="Poly-Sulfite Sealant"],
div[data-tooltip-content="#tooltip_SEA"]
{
background: linear-gradient(135deg, #185bd3, #296ce4) !important;
color: #97daff !important;
}
/* software tools */
div[title="Data Analyzer"],
div[data-tooltip-content="#tooltip_DA"],
div[title="Distributed Database"],
div[data-tooltip-content="#tooltip_DD"],
div[title="Data Visualizer"],
div[data-tooltip-content="#tooltip_DV"],
div[title="Entertainment Data Core"],
div[data-tooltip-content="#tooltip_EDC"],
div[title="Neural Network"],
div[data-tooltip-content="#tooltip_NN"],
div[title="Operating System"],
div[data-tooltip-content="#tooltip_OS"]
{
background: linear-gradient(135deg, #06061d, #1f1f36) !important;
color: #83839a !important;
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
background: linear-gradient(135deg, #1a3ca2, #2d4fb5) !important;
color: #99bbff !important;
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
background: linear-gradient(135deg, #495561, #5d6975) !important;
color: #c8d4e0 !important;
}
/* fuels */
div[title="FTL Fuel"],
div[data-tooltip-content="#tooltip_FF"],
div[title="STL Fuel"],
div[data-tooltip-content="#tooltip_SF"]
{
background: linear-gradient(135deg, #1f7c1f, #318e31) !important;
color: #9dfa9d !important;
}
/* software systems */
div[title="Information Data Core"],
div[data-tooltip-content="#tooltip_IDC"],
div[title="Information Management System"],
div[data-tooltip-content="#tooltip_IMM"],
div[title="Spatial Navigation Map"],
div[data-tooltip-content="#tooltip_SNM"],
div[title="Weak Artificial Intelligence"],
div[data-tooltip-content="#tooltip_WAI"]
{
background: linear-gradient(135deg, #1b3da3, #2f51b7) !important;
color: #99bbff !important;
}
/* ship kits */
div[title="Large Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_LCB"],
div[title="Large FTL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_LFL"],
div[title="Large STL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_LSL"],
div[title="Medium Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_MCB"],
div[title="Medium FTL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_MFL"],
div[title="Medium STL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_MSL"],
div[title="Small Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_SCB"],
div[title="Small FTL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_SFL"],
div[title="Small STL Fuel Tank Kit"],
div[data-tooltip-content="#tooltip_SSL"],
div[title="Tiny Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_TCB"],
div[title="High-volume Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_VCB"],
div[title="Very Small Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_VSC"],
div[title="High-load Cargo Bay Kit"],
div[data-tooltip-content="#tooltip_WCB"]
{
background: linear-gradient(135deg, #1d2410, #313824) !important;
color: #9ca38f !important;
}
/* utility */
div[title="Office Supplies"],
div[data-tooltip-content="#tooltip_OFF"],
div[title="Safety Uniform"],
div[data-tooltip-content="#tooltip_SUN"],
div[title="Universal Toolset"],
div[data-tooltip-content="#tooltip_UTS"]
{
background: linear-gradient(135deg, #363636, #4a4a4a) !important;
color: #b5b5b5 !important;
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
}
`

// allocater's icon style
export const IconStyle = `
 /* PrUnIcon v0.90
* ===============
*
* Written by allocater
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

/*
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
 */
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