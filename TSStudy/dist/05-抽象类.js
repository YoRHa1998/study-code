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
var Jigoubiaozhun = /** @class */ (function () {
    function Jigoubiaozhun() {
        this.age = 50; //没有abstract就代表不是必须属性
    }
    return Jigoubiaozhun;
}());
//抽象类的作用一般是作为构建类时的一些标准去使用，通过继承这些标准，来规定这些类必须要有什么属性以及方法
//抽象类的子类必须实现抽象类的抽象方法
var Xinjiangjigou = /** @class */ (function (_super) {
    __extends(Xinjiangjigou, _super);
    function Xinjiangjigou() {
        var _this = _super.call(this) || this;
        _this.jigouName = "新疆挖井队"; //必须有这个抽象类中的属性
        _this.money = 50000000;
        return _this;
    }
    Xinjiangjigou.prototype.showMoney = function () {
        return this.money;
    };
    return Xinjiangjigou;
}(Jigoubiaozhun));
var Myjigou = new Xinjiangjigou();
console.log(Myjigou.showMoney());
