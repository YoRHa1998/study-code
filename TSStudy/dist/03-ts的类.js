"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.money = 10000000; //private为私有修饰符，不写的话默认是public
        this.name = name,
            this.age = age;
    }
    Person.prototype.favoriteFood = function (food) {
        console.log(food);
    };
    Person.prototype.showMoney = function () {
        return this.money;
    };
    Person.prototype.getMonry = function (salary) {
        return this.money += salary;
    };
    return Person;
}());
var zlj = new Person("钟磊坚", 18); //使用new关键字对之前声明的类进行实例化
zlj.favoriteFood("麻婆豆腐");
console.log(zlj.showMoney());
console.log(zlj.getMonry(666));
