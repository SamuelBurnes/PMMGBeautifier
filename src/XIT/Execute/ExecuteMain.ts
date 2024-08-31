import {clearChildren} from "../../util";
import {createSummaryScreen} from "./Summary";
import {createGenerateScreen} from "./Generate";
import {createExecuteScreen} from "./Execute";

export class Execute {
	private tile: HTMLElement;
	public parameters: string[];
	public pmmgSettings;
	public userInfo;
	public name = "ACTION PACKAGE";

	constructor(tile, parameters, pmmgSettings, userInfo)
	{
		this.tile = tile;
		this.parameters = parameters;
		this.pmmgSettings = pmmgSettings;
		this.userInfo = userInfo;
		
		if(!parameters[1])
		{
			this.name = "ACTION PACKAGES";
		}
		else if(parameters[1].toLowerCase() == "gen")
		{
			this.name = "GENERATE ACTION PACKAGE";
		}
		else
		{
			this.name = "EXECUTE ACTION PACKAGE";
		}
	}

	async create_buffer()
	{
		clearChildren(this.tile);
		
		if(this.parameters.length == 1)
		{
			// Create table of all action packages with option to create more?
			createSummaryScreen(this.tile, this);
		}
		else if(this.parameters[1] && this.parameters[1].toLowerCase() == "gen")
		{
			// Generate the creation/edit screen
			createGenerateScreen(this.tile, this.parameters.slice(2).join(" "), this.userInfo);
		}
		else
		{
			createExecuteScreen(this.tile, this.parameters.slice(1).join(" "), this.userInfo);
		}
		
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