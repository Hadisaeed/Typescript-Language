let myType=<any>{name:"zia",id:1};
myType={name:"hadi",id:2};  //can only assign a type which has the at least the same properties
myType={name:"huda",id:3,gender:false}; // can add a property
myType={name:"Haniya",gender:false} // can even reduce the properties because of initial any explict casting

let myType1={name:"zia",id:1} as any; // this is an alternative syntax for casting
myType1={name:"hadi",id:2}; // can only assign a type which has the at least the same properties
myType1={name:"huda", id:3,gender:true}; // can add a property
myType1={name:"haniya",gender:true} // can even reduce the properties because of initial any explict casting 
console.log(myType1);

let a=2;
//let b = a as string; // error 

/* correct error
let c=4;
let d= c as number;
console.log(d);
console.log(typeof(d));*/