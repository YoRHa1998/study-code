"use strict";
//通过关键字interface定义一个接口
//接口类似于一个规范，当数据的类型为该接口时，数据的接口需要和接口完全一致
function person(girl) {
    console.log(girl.name);
    console.log(girl.age);
    // console.log(girl.hobbit)      //这里打印hobbits会报错
}
var xiaohong = {
    name: "xiaohong",
    age: 18,
    hobbit: "做面包"
};
person(xiaohong);
