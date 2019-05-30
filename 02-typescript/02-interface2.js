var MyObject = /** @class */ (function () {
    function MyObject(age) {
        this.age = age;
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age)
            return 0;
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var obj = new MyObject(16);
var obj2 = new MyObject(18);
console.log(obj.compareTo(obj2));
