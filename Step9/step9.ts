function add(x:number,y:number):number{
	return x+y;
}
console.log(add(4,2));
var myAdd1=function(x:number,y:number):number{
	return x+y;
	
}
console.log(myAdd1(4,8));
var myAdd2:(x:number,y:number)=>number =function(x:number,y:number):number{
	return x+y;
	
}
console.log(myAdd2(50,50));
var myAdd3:(baseValue:number,increment:number)=>number =function(x:number,y:number):number{
	return x+y;
}
console.log(myAdd3(100,2));

var myAdd4=(a:number,b:number)=>a+b;
myAdd4=function(a:number,b:number){
	 return a+b;
	
}
console.log(myAdd4(25,60));