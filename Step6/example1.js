var mom = (function () {
    function mom() {
    }
    mom.prototype.messege = function () {
        console.log("Hello Mom");
    };
    return mom;
})();
var dad = (function () {
    function dad() {
    }
    dad.prototype.message1 = function () {
        console.log("Hello Dad");
    };
    return dad;
})();
var obj = new mom();
//obj.messege();
var obj1 = new dad();
obj1.message1();
obj1 = obj;
//obj1.message();
console.log(obj1.message.message());
//# sourceMappingURL=example1.js.map