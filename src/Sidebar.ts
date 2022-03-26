import {Module} from "./ModuleRunner";
import {Selector} from "./Selector";
import {Style, WithStyles} from "./Style";
import {createTextSpan, genericCleanup, toFixed} from "./util";

interface ModulePerformance {
  module: {
    cleanup: () => void;
  }
  name: string;
  enabled: boolean;
  count: number;
  cleanupTime: number;
  runTime: number;
}

export class Sidebar implements Module {
  private tag = "pb-sidebar";
  private list: ModulePerformance[];
  private result;
  constructor(list: ModulePerformance[], result) {
    this.list = list;
	this.result = result;
  }

  cleanup() {
    genericCleanup(this.tag);
  }

  run()
  {
    const area = document.createElement('div');
    area.classList.add(this.tag);
    const h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode("PMMG Extended"));
    h3.classList.add(...Style.SidebarSectionHead);
    area.appendChild(h3);
    const content = document.createElement("div");
    content.classList.add(...Style.SidebarSectionContent);
    area.appendChild(content);

    this.list.map(mp => {
      // Div for the whole line
      const line = document.createElement('div');
      line.classList.add(...WithStyles(Style.SidebarLine, Style.FontsRegular));
      content.appendChild(line);

      // Left
      line.appendChild(createTextSpan(mp.name));

      // Right
      const right = document.createElement("span");
      right.style.flexGrow = "1";
      right.style.textAlign = "right";
      line.appendChild(right);

      const time = toFixed((mp.cleanupTime + mp.runTime) / mp.count, 2);
      right.appendChild(createTextSpan(`${time}ms `));
	  
	  var result = this.result;
	  if(result["AHIBeautifier_Data"][4] == undefined){result["AHIBeautifier_Data"][4] = [];}
      const toggle = this.makeToggleButton("On", "Off", () => {
        mp.enabled = !mp.enabled;
		if(result["AHIBeautifier_Data"][4].includes(mp.name))
		{
			if(mp.enabled){
				for(var i = 0; i < result["AHIBeautifier_Data"][4].length; i++)
				{
					if(result["AHIBeautifier_Data"][4][i] == mp.name)
					{
						result["AHIBeautifier_Data"][4].splice(i, 1);
						i--;
					}
				}
			} // Was just enabled, remove disabled label
		}
		else
		{
			if(!mp.enabled){result["AHIBeautifier_Data"][4].push(mp.name);}	// Was just disabled, add disabled label
		}
		this.setEnabledSettings(result);
      }, mp.enabled);
      right.appendChild(toggle);
	  if(result["AHIBeautifier_Data"][4] != undefined && result["AHIBeautifier_Data"][4].includes(mp.name))
	  {
		mp.enabled = false;
	  }

      const cleanup = this.makePushButton("x", () => mp.module.cleanup());
      right.appendChild(cleanup);
    });

    Array.from(document.querySelectorAll(Selector.Sidebar)).forEach(sidebar => {
      sidebar.appendChild(area);
    });
  }

  private makePushButton(text: string, f: () => void, style = Style.ButtonPrimary) {
    const button = document.createElement('button');
    button.classList.add(...Style.Button);
    button.classList.add(...style);
    button.classList.add(this.tag);
    button.onclick = f;
    button.innerText = text;
    return button;
  }

  private makeToggleButton(on: string, off: string, f: () => void, state: boolean = false) {
    const toggle = document.createElement('button');
    toggle.classList.add(...Style.Button);

    const getState: boolean = !!toggle.getAttribute('data-state') || state;
    const setState: (boolean) => void = s => {
      toggle.setAttribute('data-state', String(s));
    };
    const setLook = (s: boolean) => {
      toggle.innerText = s ? on : off;
      // If state is switched on:
      if (s) {
        toggle.classList.remove(...Style.ButtonPrimary);
        toggle.classList.add(...Style.ButtonSuccess);
      } else {
        toggle.classList.remove(...Style.ButtonSuccess);
        toggle.classList.add(...Style.ButtonPrimary);
      }
    };

    setState(state);
    setLook(state);
    toggle.onclick = () => {
      const newState = !getState;
      setLook(newState);
      setState(newState);
      f();
    };
	toggle.style.width = "40px";
    return toggle;
  }
  
  private setEnabledSettings(result)
  {
	try
	{
		browser.storage.local.set(result);
	}
	catch(err)
	{
		chrome.storage.local.set(result, function(){console.log("Saved Configuration");});
	}
  }
}
