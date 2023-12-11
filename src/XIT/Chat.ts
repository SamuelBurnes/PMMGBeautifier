import {clearChildren, XITWebRequest} from "../util";


export class FIOChat {
	private tile;
	private parameters;
	
	public name = "FIO Chat";
	
	constructor(tile, parameters)
	{
		this.tile = tile;
		this.parameters = parameters;
	}
	
	create_buffer()
	{
		clearChildren(this.tile);
		if(this.parameters.length < 2)
		{
			this.tile.textContent = "Error! Not Enough Parameters!";
		}
		
		XITWebRequest(this.tile, this.parameters, Chat_post, "https://rest.fnar.net/chat/display/" + this.parameters[1], "GET", undefined, undefined);
		return;
	}
	
	update_buffer()
	{
		// Nothing to update
	}
	destroy_buffer()
	{
		// Nothing constantly running so nothing to destroy
	}
}

function Chat_post(chatDiv, parameters, jsondata)
{
	if(jsondata == undefined || jsondata == null){return;}
	var chatData;
	try
	{
		chatData = JSON.parse(jsondata);
	}
	catch(SyntaxError)
	{
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
		dateDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleDateString(undefined, {month: "2-digit", day: "2-digit"});
		dateDiv.classList.add("time-date");
		
		const timeDiv = document.createElement("div");
		timeDateDiv.appendChild(timeDiv);
		timeDiv.textContent = (new Date(chat["MessageTimestamp"])).toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"});
		timeDiv.classList.add("time-date");
		timeDiv.style.color = "#999999";
		
		chatLine.appendChild(timeDateDiv);
		
		const nameDiv = document.createElement("div");
		chatLine.appendChild(nameDiv);
		nameDiv.classList.add("chat-name");
		
		const messageDiv = document.createElement("div");
		chatLine.appendChild(messageDiv);
		messageDiv.classList.add("chat-message");
		
		switch(chat["MessageType"])
		{
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
