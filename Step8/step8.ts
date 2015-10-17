const enum color{Red,Green,Blue};
var c=color.Green;
console.log(c);

const enum color1{Red=1,Green,Blue};
//var colorName=color1[1]; // a const enum member can only be accessed using a string literal
//console.log("colorName");

const enum color2{Red=1,Green=2,Blue=2};
var colorIndex=color2["Blue"];
console.log(colorIndex);