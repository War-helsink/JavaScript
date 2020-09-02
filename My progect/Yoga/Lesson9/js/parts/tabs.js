class Tabs {
    constructor() {
      this.btn = document.querySelector("div.info-header");
      this.tab = document.querySelectorAll("div.info-header-tab");
      this.tabContent = document.querySelectorAll("div.info-tabcontent");
      this.hideTabContent(1);
      this.btn.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
          for (let i = 0; i < this.tab.length; i++) {
            if (target == this.tab[i]) {
              this.hideTabContent(i + 1);
              this.showTabContent(i);
              break;
            }
          }
        }
      });
    }
    hideTabContent(a) {
      for (let i = a; i < this.tabContent.length; i++) {
        this.tabContent[i].classList.remove("show");
        this.tabContent[i].classList.add("hide");
      }
      for (let i = 0; i < a - 1; i++) {
        this.tabContent[i].classList.remove("show");
        this.tabContent[i].classList.add("hide");
      }
    }
    showTabContent(b) {
      if (this.tabContent[b].classList.contains("hide")) {
        this.tabContent[b].classList.remove("hide");
        this.tabContent[b].classList.add("show");
      }
    }
}
  

module.exports = Tabs;