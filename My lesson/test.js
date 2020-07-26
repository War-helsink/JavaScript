let calc = {
  c: 0,
  read: function () {
    return this.c;
  },
  sum: function (a, b) {
    this.c = a + b;
  },
  aul: function (a, b) {
    this.c = a + b;
  },
};

function Accumulator(a) {
  this.value = a;

  this.read = function () {
    this.value += +prompt("Sam");
    console.log(this.value);
  };
}
