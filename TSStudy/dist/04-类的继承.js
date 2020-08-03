"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return this.money; //私有属性只能在类本身里访问，在外部无法访问
    };
    Person.prototype.getMonry = function (salary) {
        return this.money += salary;
    };
    return Person;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(name, age) {
        return _super.call(this, name, age) || this; //用super()来继承数据
    }
    return son;
}(Person));
var mySon = new son("李狗蛋", 5);
console.log(mySon.showMoney());
