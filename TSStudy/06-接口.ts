interface data{
    name:string,
    age:number
}
//通过关键字interface定义一个接口
//接口类似于一个规范，当数据的类型为该接口时，数据的接口需要和接口完全一致

function person(girl:data ){   //这里的girl使用了接口，那么它能就收到的数据就只有接口中定义的name和age，还有一个hobbits是接受不到的
    console.log(girl.name)
    console.log(girl.age)
    // console.log(girl.hobbit)      //这里打印hobbits会报错
}

const xiaohong= {     //如果这里使用了接口，那么能够定义的属性也只有name和age了，再加其他属性会报错
    name:"xiaohong",
    age:18,
    hobbit:"做面包"
}

person(xiaohong)