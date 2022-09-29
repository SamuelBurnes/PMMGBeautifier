import {XITHandler} from "./XITHandler";
import { showBuffer } from "./util";

export interface Module {
  run();
  cleanup();
}

interface ModuleEntry {
  module: Module;
  name: string;
  enabled: boolean;
  count: number;
  cleanupTime: number;
  runTime: number;
}

export class ModuleRunner {
  private readonly modules: ModuleEntry[];
  private readonly xit: XITHandler;
  private result;
  constructor(modules: Module[], result, burn, burnSettings) {
    this.modules = modules.map(m => this.moduleToME(m));
	this.xit = new XITHandler(result, burn, burnSettings, this.modules);
	this.result = result;
	
	this.updateActiveModules(result);
  }
  
  private updateActiveModules(result)
  {
	if(result["PMMGExtended"]["disabled"] == undefined){return;}
	this.modules.forEach(mp => {
		if(result["PMMGExtended"]["disabled"] != undefined && result["PMMGExtended"]["disabled"].includes(mp.name))
		{
			mp.enabled = false;
		}
	});
  }

  private moduleToME(module: Module): ModuleEntry {
    return {
      module,
      name: module.constructor.name,
      enabled: true,
      count: 0,
      cleanupTime: 0,
      runTime: 0
    }
  }

  loop() {
	this.xit.run();
	
	// Run intro if it hasn't run already
	if(!this.result["PMMGExtended"]["loaded_before"])
	{
		this.result["PMMGExtended"]["loaded_before"] = showBuffer("XIT START");
		if(this.result["PMMGExtended"]["loaded_before"])
		{
			setSettings(this.result);
		}
	}
	
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

    // @TODO: Vary the interval based on module performance
    window.setTimeout(() => this.loop(), 1000);
  }
}

function setSettings(result)
{
	try
	{
		browser.storage.local.set(result);
	}
	catch(err)
	{
		chrome.storage.local.set(result, function(){
		});
	}
	return;
}