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
module.exports = Clac;