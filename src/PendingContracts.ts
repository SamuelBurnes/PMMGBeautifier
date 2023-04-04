import { Module } from "./ModuleRunner";
import { createTextSpan, genericCleanup, createContractDict} from "./util";



// Adds the rate per unit ton or m^3 to LM ads
export class PendingContracts implements Module {
    private tag = "pb-pending-contracts";
    private username;
	private contracts;
	constructor(username, contracts)
	{
		this.username = username;
		this.contracts = contracts;
	}
	

    cleanup() {
        genericCleanup(this.tag);
    }
    run() {
        if(this.username == null)
            return;

        const elements = document.getElementsByClassName("Sidebar__contract___J0gmlzN");
        var contractdict = {};
	    createContractDict(this.contracts, this.username, contractdict);

        //.getElementsByClassName("Sidebar__contract___J0gmlzN Sidebar__sidebar-line___bE2rbRb");

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i].getElementsByClassName("Sidebar__contractId___Lg85TRZ")[0];
            const contractID = element.textContent;
            //const nameelement = elements[i].getElementsByClassName("Sidebar__contract___J0gmlzN")[0];
            if(contractID != null && contractdict[contractID])//&& getLocalStorage(contractID) == null
            {
                var partnercode = contractdict[contractID]["PartnerName"]
                if(partnercode == null || partnercode.length > 25)
                {
                    partnercode = contractdict[contractID]["PartnerCompanyCode"]
                    if(partnercode == null)
                        partnercode = contractdict[contractID]["PartnerName"].split(" ")[0];
                }
                elements[i].prepend(createTextSpan(`${partnercode}`, this.tag))
            }

        }
        return;
    }
}
