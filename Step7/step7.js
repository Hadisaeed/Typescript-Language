var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
; // start with 0
var c = color.Green;
console.log(c);
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["Green"] = 2] = "Green";
    color1[color1["Blue"] = 3] = "Blue";
})(color1 || (color1 = {}));
;
var colorName = color1[2];
console.log(colorName);
var color2;
(function (color2) {
    color2[color2["Red"] = 1] = "Red";
    color2[color2["Green"] = 2] = "Green";
    color2[color2["Blue"] = 3] = "Blue";
})(color2 || (color2 = {}));
;
var colorIndex = color2["Blue"];
console.log(colorIndex);
//# sourceMappingURL=step7.js.map