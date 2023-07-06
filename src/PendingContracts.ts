import { Module } from "./ModuleRunner";
import { createTextSpan, genericCleanup, createContractDict} from "./util";
import { Selector } from "./Selector";


export class PendingContracts implements Module {
    private tag = "pb-pending-contracts";
    private username;
	private webData;	// Dictionary storing an array of contract data under the key of the user's username
	constructor(username, webData)
	{
		this.username = username;
		this.webData = webData;
	}
	

    cleanup() {
        genericCleanup(this.tag);
    }
    run() {
        if(!this.username)
            return;

        const contractLines = Array.from(document.querySelectorAll(Selector.SidebarContract)) as HTMLElement[];	// All the contract lines
        var contractdict = {};
		if(!this.webData["contracts"] || !this.webData["contracts"][this.username]){return;}	// Break if contracts haven't loaded
	    createContractDict(this.webData["contracts"], this.username, contractdict);	// Turn the array into a dictionary with keys being contract IDs
		
        contractLines.forEach(contract => {	// For each contract...
            const contractIDElement = contract.querySelector(Selector.SidebarContractId);	// Find the ID and store it
			if(!contractIDElement){return;}
            const contractID = contractIDElement.textContent;
			if(!contractID){return;}
			
            if(contractdict[contractID] && contractdict[contractID]["PartnerName"])	// If the contract ID is in FIO
            {
                var partnercode = contractdict[contractID]["PartnerName"]	// Label with partner's name
                if(partnercode.length > 19)	// Unless unknown or too long, then use company code
                {
                    partnercode = contractdict[contractID]["PartnerCompanyCode"] || contractdict[contractID]["PartnerName"].split(" ")[0];
                }
				const nameSpan = createTextSpan(`${partnercode}`, this.tag);	// Add it to the row
				nameSpan.style.width = "100px";
                contract.insertBefore(nameSpan, contract.firstChild)
				return;
            }
			
			const nameSpan = createTextSpan("Unknown", this.tag);	// If unknown, add unknown to the row
			nameSpan.style.width = "100px";
            contract.insertBefore(nameSpan, contract.firstChild);

        });
        return;
    }
}
