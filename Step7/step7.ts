enum color{Red,Green,Blue}; // start with 0
var c:color=color.Green;
console.log(c);

enum color1{Red=1,Green,Blue};
var colorName=color1[2];
console.log(colorName);

enum color2{Red=1,Green=2,Blue=3};
var colorIndex=color2["Blue"];
console.log(colorIndex);