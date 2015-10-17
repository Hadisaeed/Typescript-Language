var doorState;
(function (doorState) {
    doorState[doorState["open"] = 0] = "open";
    doorState[doorState["close"] = 1] = "close";
    doorState[doorState["Ajar"] = 2] = "Ajar";
})(doorState || (doorState = {}));
;
var myDoor = doorState.open;
console.log("My Door State Is " + myDoor);
var closeDoor = doorState["close"];
console.log("My door State is " + closeDoor);
var ajarDoor = doorState[2];
console.log("My Door state is " + ajarDoor);
//# sourceMappingURL=book_example.js.map