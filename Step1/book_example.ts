var myString:string="test";
var myNumber:number=1;
var myBoolean:boolean=true;
myString=myNumber.toString();
myBoolean=(myString==="test");
if(myBoolean){
	myNumber=1;
	document.write("myNumber Is = " + myNumber);
}
else{
	document.write("myString Is = " +myString);
}
