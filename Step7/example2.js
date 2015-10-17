var PlayControls;
(function (PlayControls) {
    PlayControls[PlayControls["Play"] = 0] = "Play";
    PlayControls[PlayControls["Pause"] = 1] = "Pause";
    PlayControls[PlayControls["Stop"] = 2] = "Stop";
    PlayControls[PlayControls["Prev"] = 3] = "Prev";
    PlayControls[PlayControls["Next"] = 4] = "Next";
})(PlayControls || (PlayControls = {}));
function getEnums() {
    return PlayControls;
}
var controls = getEnums();
document.write("Play controls For " + controls[0] + " is: " + controls["Play"] + "<br/>");
document.write("Play controls For " + controls[1] + " is: " + controls["Pause"] + "<br/>");
document.write("Play controls For" + controls[2] + " is: " + controls["Stop"] + "<br/>");
document.write("Play controls For" + controls[3] + " is: " + controls["Prev"] + "<br/>");
document.write("Play controls For" + controls[1] + " is: " + controls["Next"] + "<br/>");
//# sourceMappingURL=example2.js.map