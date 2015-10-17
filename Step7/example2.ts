enum PlayControls {
    Play,    
    Pause,    
    Stop,    
    Prev,    
    Next     
}
function getEnums() {
    return PlayControls;
}
var controls = getEnums();
document.write("Play controls For " +controls[0] + " is: " + controls["Play"] + "<br/>");
document.write("Play controls For " + controls[1] + " is: " + controls["Pause"] + "<br/>");
document.write("Play controls For" + controls[2] + " is: " + controls["Stop"] + "<br/>");
document.write("Play controls For" + controls[3] + " is: " + controls["Prev"] + "<br/>");
document.write("Play controls For"  + controls[1] + " is: " + controls["Next"] + "<br/>");