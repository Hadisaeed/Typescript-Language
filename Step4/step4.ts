// frist syntax of decalring array
let array1:number[]=[1,2,3,4]; 
console.log(array1[1]);

//alternate syntax
let array2:Array<number>=[1,2,3,4];

//correct syntax to define empty array
 let array3:number[]=[]
 let array4:number[]=[];
 array4.push(1234); //dynamically adding values
 console.log(array4[0]);
 //let array4: number[] = new number[2];//error
