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