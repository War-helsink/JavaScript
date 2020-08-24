window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //Tabs
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
  new Tabs();

  //Timer
  class Timer {
    constructor(id, endtime) {
      this.endtime = endtime;
      this.timer = document.getElementById(id);
      this.hours = timer.querySelector(".hours");
      this.minutes = timer.querySelector(".minutes");
      this.seconds = timer.querySelector(".seconds");
      this.timeInterval = setInterval(this.updateClock, 1000, this);
    }
    getTimeRemaining() {
      let t = Date.parse(this.endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / (1000 * 60 * 60));

      return {
        total: t,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      };
    }
    updateClock(obgect) {
      let t = obgect.getTimeRemaining();
      obgect.hours.textContent = t.hours;
      obgect.minutes.textContent = t.minutes;
      obgect.seconds.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(obgect.timeInterval);
      }
    }
  }
  let deadline = new Timer("timer", "2020-9-1");

  //Modal
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
  new Modal();

  //Form
  class Form {
    constructor() {
      this.messges = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так...",
      };
      this.form = document.querySelector(".main-form");
      this.input = this.form.querySelectorAll("input");
      this.stateMessage = document.createElement("div");
      this.stateMessage.classList.add("status");
      this.sendForm()
        .then(() => {
          this.stateMessage.innerHTML = this.messges.loading;
        })
        .then(() => {
          this.stateMessage.innerHTML = this.messges.success;
          this.clearInput();
        })
        .catch(() => {
          this.stateMessage.innerHTML = this.messges.failure;
          this.clearInput();
        });
    }
    sendForm() {
      return new Promise((resolve, reject) => {
        this.form.addEventListener("submit", (event) => {
          event.preventDefault();
          this.form.appendChild(this.stateMessage);

          this.request = new XMLHttpRequest();
          this.request.open("POST", "/server.php");
          this.request.setRequestHeader(
            "Content-type",
            "application/json; charset=utf-8"
          );
          let formData = new FormData(this.form);
          let obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });

          let json = JSON.stringify(obj);
          this.request.send(json);

          this.request.addEventListener("readystatechange", () => {
            if (this.request.readyState < 4) {
              resolve();
            } else if (
              this.request.readyState == 4 &&
              this.request.status == 200
            ) {
              resolve();
            } else {
              reject();
            }
          });
        });
      });
    }
    clearInput() {
      for (let i = 0; i < this.input.length; i++) {
        this.input[i].value = "";
      }
    }
  }
  new Form();

  //Slider
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
  new Slider();

  //Clac
  class Clac {
    constructor() {
      this.people = document.querySelectorAll(".counter-block-input")[0];
      this.day = document.querySelectorAll(".counter-block-input")[1];
      this.totalValue = document.querySelector("#total");
      this.place = document.querySelector("select");
      this.price = 200;
      this.personsSum = 0;
      this.daysSum = 0;
      this.total = 0;
      this.totalPrint();
      this.people.addEventListener("input", (event) => {
        this.personsSum = event.target.value;
        this.clacSum();
      });
      this.day.addEventListener("input", (event) => {
        this.daysSum = event.target.value;
        this.clacSum();
      });
      this.place.addEventListener("input", (event) => {
        this.clacSum();
      });
    }
    totalPrint() {
      this.totalValue.innerHTML = this.total;
    }
    clacSum() {
      this.total =
        this.daysSum *
        this.personsSum *
        (this.price * this.place.options[this.place.selectedIndex].value);
      this.totalPrint();
    }
  }
  new Clac();
});
