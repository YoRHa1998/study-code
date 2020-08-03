class Person{   //用class关键字声明一个类
    name:string;
    age:number;
    private money:number = 10000000;   //private为私有修饰符，不写的话默认是public
    constructor(name:string,age:number){   //constructor是构造器
        this.name = name,
        this.age = age
    }
    favoriteFood(food:string){
        console.log(food)
    }
    showMoney(){
        return this.money       //私有属性只能在类本身里访问，在外部无法访问
    }
    getMonry(salary:number):number{
        return this.money+= salary
    }
}


class son extends Person{   //用entends关键字来继承
    constructor(name:string,age:number) {
        super(name,age)   //用super()来继承数据
    }
}

let mySon = new son("李狗蛋",5)
console.log(mySon.showMoney())   //在子类里调用被继承类中的方法



