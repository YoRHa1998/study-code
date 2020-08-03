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

let  zlj = new Person("王二麻子",18)    //使用new关键字对之前声明的类进行实例化
zlj.favoriteFood("麻婆豆腐")
console.log(zlj.showMoney())
console.log(zlj.getMonry(666))