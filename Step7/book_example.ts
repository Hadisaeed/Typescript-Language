enum doorState{
	open,
	close,
	Ajar
};
var myDoor= doorState.open;
console.log("My Door State Is " + myDoor);
var closeDoor=doorState["close"];
console.log("My door State is " + closeDoor);
var ajarDoor=doorState[2];
console.log("My Door state is " + ajarDoor);