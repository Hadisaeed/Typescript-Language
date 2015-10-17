class mom{
	
	messege()
	{
		console.log("Hello Mom");
	}
}

class dad{
	
	message1()
	{
		console.log("Hello Dad");
	}
}
var obj:mom= new mom();
//obj.messege();

var obj1:any=new dad();
obj1.message1();
obj1= obj;
//obj1.message();
console.log(obj1.message.message());