import {clearChildren} from "../util";

export function PRuN_pre(tile)
{
	clearChildren(tile);
	const prun = document.createElement("iframe");
		prun.src = "https://apex.prosperousuniverse.com/#/";
		prun.width = "100%";
		prun.height = "100%";
		prun.style.borderWidth = "0";
	tile.appendChild(prun);
	return;
}

export function Prosperity_pre(tile, parameters)
{
	clearChildren(tile);
	var url = "https://prosperity-prun.netlify.app/";
	if(parameters.length == 3)
	{
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
}

export function Sheets_pre(tile, parameters)
{
	clearChildren(tile);
	if(parameters.length < 2)
	{
		tile.textContent = "Error! Not Enough Parameters!";
		return;
	}
	for(var i = 2; i < parameters.length; i++)
	{
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

export function Discord_pre(tile, parameters)
{
	clearChildren(tile);
	var serverID;
	var channelID;
	if(parameters.length == 2)
	{
		if(DiscordServers[parameters[1]] == undefined)
		{
			tile.textContent = "Error! Not Enough Parameters";
			return;
		}
		else
		{
			serverID = DiscordServers[parameters[1]][0];
			channelID = DiscordServers[parameters[1]][1];
		}
	}
	else if(parameters.length > 2)
	{
		serverID = parameters[1];
		channelID = parameters[2];
	}
	else
	{
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

export function Wiki(tile, parameters)
{
	clearChildren(tile);
	const frame = document.createElement("iframe");
		frame.src = parameters[1] && parameters[1].toLowerCase() == "resources" ? "https://handbook.apex.prosperousuniverse.com/wiki/community-resources/index.html" : "https://handbook.apex.prosperousuniverse.com/wiki/index.html";
		frame.style.borderWidth = "0";
		frame.style.height = "100%";
		frame.style.width = "100%";
	tile.appendChild(frame);
}

export function PrunPlanner(tile, parameters)
{
	clearChildren(tile);
	const frame = document.createElement("iframe");
		frame.src = parameters[1] ? "https://prunplanner.org/" + parameters[1] : "https://prunplanner.org/";
		frame.style.borderWidth = "0";
		frame.style.height = "100%";
		frame.style.width = "100%";
	tile.appendChild(frame);
	return;
}
export function FIO(tile)
{
	clearChildren(tile);
	const frame = document.createElement("iframe");
		frame.src = "https://fio.fnar.net/";
		frame.style.borderWidth = "0";
		frame.style.height = "100%";
		frame.style.width = "100%";
	tile.appendChild(frame);
}