function Counter() {
    this.number = 0;
    this.getNext = function () {
        return this.number++;
    };
    this.set = function (value) {
        this.number = value;
    };
    this.reset = function () {
        this.number = 0;  
    };
}
// function makeBuffer() {
//     let text;
//     return function (texts) {
//         if (texts != undefined)
//             text = texts;
//         else
//             return text;
//     };
// }

// var buffer = makeBuffer();

// buffer("Тест");
// buffer(" тебя не съест ");
// alert(buffer());
// alert(buffer.clear());
// alert( buffer() );




let a = new Counter();
console.log(a.getNext());
console.log(a.getNext());
console.log(a.getNext());
console.log(a.getNext());
a.set(10);
console.log(a.getNext());
console.log(a.getNext());
a.reset();
console.log(a.getNext());
console.log(a.getNext());
