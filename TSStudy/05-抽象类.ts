abstract class Jigoubiaozhun{    //用anstracr关键字标识为抽象类
    abstract jigouName:string;   //用abstract标识必须的属性
    abstract showMoney():number;   //用abstract标识必须的属性，同时规定好参数和返回值的类型
    age:number = 50;   //没有abstract就代表不是必须属性
}

//抽象类的作用一般是作为构建类时的一些标准去使用，通过继承这些标准，来规定这些类必须要有什么属性以及方法
//抽象类的子类必须实现抽象类的抽象方法

class  Xinjiangjigou extends Jigoubiaozhun{
    jigouName:string = "新疆挖井队";   //必须有这个抽象类中的属性
    money:number = 50000000;
    showMoney():number{  //必须有这个抽象类中的方法
        return this.money
    }
    constructor(){
        super()
    }
}

let Myjigou = new Xinjiangjigou()

console.log(Myjigou.showMoney())