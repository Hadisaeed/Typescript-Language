// use const where variables values do not change
const a=5;
const b:number=33;
const c="Best";

// I suggest use let instead of var everywhere, because let has blocked scope
//var z=1;
if(true){
	let z=4;
}
else{
	let z="string";
}
//console.log("let: " + z);