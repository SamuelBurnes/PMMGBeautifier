import { Module } from "./ModuleRunner";
import { Selector } from "./Selector";
import { WithStyles, Style } from "./Style";
import { genericCleanup, createNode } from "./util";

export class ScreenUnpack implements Module {
  private tag = "pb-screens";
  private buttonTag = "pb-screen-button";
  private exclusions;
  private eventAbortSignal;

  cleanup(full: boolean = false) {
    full && genericCleanup(this.tag);
    full && this.eventAbortSignal.abort();
  }

  constructor(exclusions) {
    exclusions = exclusions == undefined ? [] : exclusions;
    this.exclusions = [];
    exclusions.forEach((ex) => {
      this.exclusions.push(ex.toUpperCase());
    });
  }

  run() {
    const navbar = document.getElementById(Selector.ScreenControls);
    if (navbar == null) {
      return;
    }
    if (
      (
        navbar.children[navbar.children.length - 1] as HTMLElement
      ).classList.contains(this.tag)
    ) {
      return;
    }
    this.eventAbortSignal = new AbortController();
    const navbarItemClassList = navbar.children[2].classList;
    const nbitMainClassList = navbar.children[2].children[0].classList;
    const nbitUnderlineClassList = navbar.children[2].children[1].classList;
    const menu = navbar.children[1].children[1];
    var links = [] as any[];

    (Array.from(menu.children) as HTMLElement[]).forEach(
      (dropdownMenuElement) => {
        if (
          dropdownMenuElement.children.length == 4 &&
          !this.exclusions.includes(
            String(dropdownMenuElement.children[1].innerHTML).toUpperCase()
          )
        ) {
          links.push({
            Name: dropdownMenuElement.children[1].innerHTML,
            Link: (dropdownMenuElement.children[1] as HTMLAnchorElement).href,
          });
          dropdownMenuElement.children[1].addEventListener(
            "click",
            () => {
              this.updateHighlight(dropdownMenuElement.children[1].innerHTML);
            },
            { signal: this.eventAbortSignal.signal }
          );
        }
      }
    );

    const spacerDiv = document.createElement("div");
    spacerDiv.classList.add(this.tag);
    spacerDiv.style.display = "inline-block";
    spacerDiv.style.width = "5px";
    navbar.appendChild(spacerDiv);

    const buttons = links.map((link) => {
      const button = `<div class="${navbarItemClassList}">
                          <a class="${nbitMainClassList}" style="color: inherit" href="${link.Link}">${link.Name}</a>
                          <div class="${nbitUnderlineClassList}"></div>
                      </div>`;
      const buttonElem = createNode(button) as HTMLElement;
      buttonElem.classList.add(this.tag);
      buttonElem.classList.add(this.buttonTag);
      return buttonElem;
    });

    buttons.forEach((button) => {
      // Add detection of activation
      button.addEventListener("click", () => {
        this.updateHighlight(button.children[0].textContent ?? "");
      });
      navbar.appendChild(button);
    });

    const screenNameElem = document.querySelector(Selector.ScreenName); // Get the screen name
    const screenName =
      screenNameElem && screenNameElem.textContent
        ? screenNameElem.textContent
        : "";
    this.updateHighlight(screenName);
  }

  updateHighlight(screenName: string) {
    screenName = screenName.toUpperCase();
    const navbar = document.getElementById(Selector.ScreenControls);
    if (navbar == null) {
      return;
    }
    const buttons = navbar.getElementsByClassName(this.buttonTag);
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i] as HTMLElement;
      if (button.children[0].textContent?.toUpperCase() == screenName) {
        button.children[1].className = "";
        button.children[1].classList.add(
          ...WithStyles(Style.ScreenUnderlineToggled)
        );
      } else {
        button.children[1].className = "";
        button.children[1].classList.add(
          ...WithStyles(Style.ScreenUnderlineUntoggled)
        );
      }
    }
  }
}
