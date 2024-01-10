import { Module } from "./ModuleRunner";
import { Selector } from "./Selector";
import { WithStyles, Style } from "./Style";
import { genericCleanup, createNode } from "./util";

export class ScreenUnpack implements Module {
  private tag = "pb-screens";
  private exclusions;
  cleanup(full: boolean = false) {
    full && genericCleanup(this.tag);
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
    const navbarItemClassList = navbar.children[2].classList;
    const nbitMainClassList = navbar.children[2].children[0].classList;
    const nbitUnderlineClassList = navbar.children[2].children[1].classList;
    const menu = navbar.children[1].children[1];
    var links = [] as any[];

    (Array.from(menu.children) as HTMLElement[]).forEach((cn) => {
      if (
        cn.children.length == 4 &&
        !this.exclusions.includes(
          String(cn.children[1].innerHTML).toUpperCase()
        )
      ) {
        links.push({
          Name: cn.children[1].innerHTML,
          Link: (cn.children[1] as HTMLAnchorElement).href,
        });
      }
    });

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
      return buttonElem;
    });

    buttons.forEach((button) => {
      // Add detection of activation here
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach((b) => {
          b.children[1].className = "";
          b.children[1].classList.add(
            ...WithStyles(Style.ScreenUnderlineUntoggled)
          );
        });
        // Add active class to clicked button
        button.children[1].className = "";
        button.children[1].classList.add(
          ...WithStyles(Style.ScreenUnderlineToggled)
        );
      });
      navbar.appendChild(button);
    });
  }
}
