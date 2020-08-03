"use strict";
var username = "zlj"; //字符串类型
var userage = 17; //数字类型
var isshuai = true; //布尔类型
var arrObj = {
    "name": "小明",
    "age": 18
}; //对象类型
var arrStudent = ["123", "456", "789"]; //数组类型
var arrNum = [12, 5, 8]; //显示声明数组类型
var arrStr = ["sadasd", "daada", "qwerdq"];
var MixArr = ["asdada", 12312]; //混合声明
var direction;
(function (direction) {
    direction[direction["one"] = 1] = "one";
    direction[direction["two"] = 2] = "two";
    direction[direction["three"] = 3] = "three";
    direction[direction["four"] = 4] = "four";
})(direction || (direction = {}));
function play(dir) {
    if (dir === 1) {
        console.log("第一");
    }
    else {
        console.log(dir);
    }
}
play(1);
function showAge(age) {
    return age;
}
console.log(showAge(18));
