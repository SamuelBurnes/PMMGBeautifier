import {Sidebar} from "./Sidebar";

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
  private readonly sidebar: Sidebar;
  constructor(modules: Module[]) {
    this.modules = modules.map(m => this.moduleToME(m));

    // Create the sidebar, and push it as one of the modules
    this.sidebar = new Sidebar(this.modules);
    this.modules.push(this.moduleToME(this.sidebar));
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
