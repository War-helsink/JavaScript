class Slider {
    constructor() {
      this.slideIndex = 1;
      this.step = 1;
      this.prev = document.querySelector(".prev");
      this.next = document.querySelector(".next");
      this.divSliders = document.querySelector(".wrap");
      this.sliders = this.divSliders.querySelectorAll(".slider-item");
      this.dotsWrap = document.querySelector(".slider-dots");
      this.dot = this.dotsWrap.querySelectorAll(".dot");
      this.showSlids();

      this.next.addEventListener("click", (event) => {
        if (this.slideIndex < this.sliders.length) {
          this.plusSlider(this.step);
        }
      });
      this.prev.addEventListener("click", (event) => {
        if (this.slideIndex > 1) {
          this.plusSlider(-this.step);
        }
      });
      this.dotsWrap.addEventListener("click", (event) => {
        let target = event.target;
        for (let i = 0; i < this.dot.length; i++)
          if (target == this.dot[i]) this.slideIndex = i + 1;
        this.showSlids();
      });
    }
    showSlids() {
      for (let i = 0; i < this.sliders.length; i++) {
        if (i == this.slideIndex - 1) {
          this.sliders[i].style.display = "block";
          this.dot[i].classList.add("dot-active");
        } else {
          this.sliders[i].style.display = "none";
          this.dot[i].classList.remove("dot-active");
        }
      }
    }
    plusSlider(n) {
      this.slideIndex += n;
      this.showSlids();
    }
}
module.exports = Slider;