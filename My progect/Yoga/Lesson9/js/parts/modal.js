class Modal {
    constructor() {
      this.more = document.querySelector(".more");
      this.overlay = document.querySelector(".overlay");
      this.close = document.querySelector(".popup-close");

      this.more.addEventListener("click", (event) => {
        this.overlay.style.display = "block";
        document.body.style.overflow = "hidden";
        this.more.classList.add("more-splash");
      });
      this.close.addEventListener("click", (event) => {
        this.overlay.style.display = "none";
        this.more.classList.remove("more-splash");
        document.body.style.overflow = "";
      });
    }
}
  
module.exports = Modal;