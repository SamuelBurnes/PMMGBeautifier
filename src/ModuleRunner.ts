import {XITHandler} from "./XITHandler";

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
  constructor(modules: Module[], result, burn, burnSettings) {
    this.modules = modules.map(m => this.moduleToME(m));
	this.xit = new XITHandler(result["AHIBeautifier_Data"][0], result["AHIBeautifier_Data"][1], result["AHIBeautifier_Data"][2], result, burn, burnSettings, this.modules);
	
	this.updateActiveModules(result);
  }
  
  private updateActiveModules(result)
  {
	if(result["AHIBeautifier_Data"][4] == undefined){return;}
	this.modules.forEach(mp => {
		if(result["AHIBeautifier_Data"][4] != undefined && result["AHIBeautifier_Data"][4].includes(mp.name))
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
