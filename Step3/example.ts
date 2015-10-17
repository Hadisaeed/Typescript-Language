
//Example1
/*
let myObj={
	name:"hadi",
	age:22
}
console.log("Original Object");
console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);

//Example 2
//change in the order of property
 myObj={
	 age:22,
	 name:"Huda"
 }
 console.log("Change In the order Of Properties");
 console.log(myObj);
 console.log(myObj.age);
 console.log(myObj.name);
 */
//Example 3
//Signature of Duck typing
/*
let obj:{id:number,name:string}
console.log(obj); //undefine because above line creates only a signature not an object
obj={
	id:1,
	name:"hadi"
}
console.log(obj);
*/
//Example 4
/*
var x:{foo:number};
//x={foo:1,baz:2}; //error excess property baz
x={foo:2};
console.log(x); 
*/
//Example 5
/*
var y:{foo:number,bar?:number}
//y={foo:1,baz:32}; //error excees or misspelled property 'baz'
y={foo:1};
console.log(y.foo);
console.log(y.bar);
y={foo:172,bar:250}
console.log(y);
*/
//Example 6
/*
var x:{foo:number}
 //var x:{foo:number,baz:number,name:string};
 var x1={foo:1,baz:172}
 x=x1;
 console.log(x.foo);
 console.log(x1.foo);
 console.log(x1.baz);
*/
//Example 7
//A type can include an index signature to explicitly indicate that excess properties are permitted:
/*
var x:{foo:number,[x:string]:any}
x={foo:1};
console.log(x);
x={foo:2,baz:222} // Ok, `baz` matched by index signature
console.log(x.foo + "\n" + x["baz"]);
*/
//Example 8
var obj1={name:"hadi",age:22};
var obj2={age:23,name:"Tooba"};
obj1=obj2;
obj2=obj1;
console.log(obj1.age + "\n" + obj2.age);




















