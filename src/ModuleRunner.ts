import {XITHandler} from "./XITHandler";
import { showBuffer, setSettings } from "./util";
import { FriendlyNames } from "./GameProperties";

export interface Module {
  run();
  cleanup();
}

interface ModuleEntry {
  module: Module;
  name: string;
  friendlyName: string;
  enabled: boolean;
  count: number;
  cleanupTime: number;
  runTime: number;
}

export class ModuleRunner {
  private readonly modules: ModuleEntry[];	// The list of modules run by the extension
  private readonly xit: XITHandler;	// The XIT module, run separately
  private result;	// The stored settings
  constructor(modules: Module[], result, burn, burnSettings, contracts) {
	// Construct global variables
    this.modules = modules.map(m => this.moduleToME(m));
	this.xit = new XITHandler(result, burn, burnSettings, contracts, this.modules);
	this.result = result;
	
	this.updateActiveModules(result);
  }
  
  // Enable or disable modules based on settings preference
  private updateActiveModules(result)
  {
	if(result["PMMGExtended"]["disabled"] == undefined){return;}
	this.modules.forEach(mp => {
		if(result["PMMGExtended"]["disabled"] && result["PMMGExtended"]["disabled"].includes(mp.name))
		{
			mp.enabled = false;
		}
	});
  }

  private moduleToME(module: Module): ModuleEntry {
    return {
      module,
      name: module.constructor.name,
	  friendlyName: FriendlyNames[module.constructor.name] || module.constructor.name,
      enabled: true,
      count: 0,
      cleanupTime: 0,
      runTime: 0
    }
  }

  loop() {
	// Render all XIT buffers
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
	
	// For each module, run it, clean it, and measure its performance
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
    window.setTimeout(() => this.loop(), 250);
  }
}