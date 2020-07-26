let num = 0; //
let q = []; //Без ошибок переменная 
var t = []; //Добавленые ошибки при выполнении 
const pi = 3.14; // Константа

//Обект 
let object = {
  name: "Jone",
  age: 25,
};

console.log(typeof object); //Вывод типа 
console.log(pi); //Вывод в консоль

//Краткое условия 
num == 50 ? console.log(true) : console.log(false);

//Условия
if (num > 10) {
  console.log("Num > 10");
} else if (num < 3) {
  console.log("Num < 3");
} else {
  console.log("?");
}

//Условия
switch (num) {
  case num == 1:
    console.log("Num == 1");
    break;
  default:
    break;
}

//Цикл
while (num < 10) {
  console.log("while");
  num++;
}

//Цикл
do {
  console.log("do while");
  num++;
} while (num < 20);

//Цикл
for (let i = 0; i < 5; i++) {
  console.log("for");
}

//Функция
function testFile(text) {
  console.log(text);
}
testFile("Hello word!");

//Стрелочная функция
let calc = (a, b) => {
  a + b;
};
console.log(calc(25, 25));

//Работа с текстом
let str = "teXt";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//
let psert = "12.4";
console.log(parseFloat(psert));
console.log(parseInt(psert));

//
let mas = [1, 2, 3, 4, 5, 6, 7];
//
mas.pop();
//
mas.push(10);
//
mas.shift();
//
mas.unshift(10);
console.log(mas);

//
let element;

alert("Test"); //
console.log(confirm("Test")); //
console.log(prompt("Test")); //

//Обект 
let calcs = {
  c: 0,
  read: function () {
    console.log(this.c);
  },
  sam: function (a) {
    this.c += a;
  },
  aul: function (a) {
    this.c *= a;
  },
};

//Методичиский ООП
function Accumulator(value) {
  this.value = value;
  this.read = function () {
    console.log(this.value);
  };
}

//Callback - ето функция которая выполнится после выполнения дрегой фенкции 
function first() {
  setTimeout(function () {
    console.log(1);
  },1);
}
function second() {
  console.log(2);
}
//Выведится второй
first();
//Вывелится первой 
second();


function nums(callback) {
  console.log(1);
  callback();
}
setTimeout(nums(second), 1000);



//__proto__
let soldat = {
  armor: 100,
  health:100
};

let john = {
  health: 400
};
john.__proto__ = soldat;

console.log(john);
console.log(john.armor);


//docoment
let box = document.getElementById("div"),
  ionblocks = document.body.getElementsByTagName("ion-block"),
  classteg = document.body.getElementsByClassName("test"),
  divs = document.body.querySelectorAll("div div.test");
// div = docoment.body.querySelector("div.test");
console.log(box);
console.log(ionblocks);
console.log(classteg);
console.log(divs);
// conlole.log(div);

//stile
function ionBlock(arr) {
  for (let ionblock of arr) {
    ionblock.style.margin = "20px";
    ionblock.style.display = "block";
    ionblock.style.backgroundColor = "blue";
    ionblock.style.width = "100px";
    ionblock.style.height = "100px";
  }
}
function boxBlock(box, color ) {
  box.style.backgroundColor = color;
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.margin = "20px";
}
boxBlock(box, 'green');
ionBlock(ionblocks);

//create element
let div = document.createElement('div'),
    div2 = document.createElement('div');
boxBlock(div, 'red');
boxBlock(div2, 'red');
div2.innerHTML = '<h1>Hello</h1>'
//class
div.classList.add('test');
//
// document.body.appendChild(div);
//

document.body.insertBefore(div,  ionblocks[2]);
// box.removeChild(classteg[0]);
document.body.replaceChild(div2,ionblocks[0]);