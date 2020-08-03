let username:string = "zlj";     //字符串类型
let userage:number = 17;       //数字类型
let isshuai:boolean = true;     //布尔类型
let arrObj = {
    "name":"小明",
    "age":18
}   //对象类型
let arrStudent = ["123","456","789"]  //数组类型
let arrNum:number[] = [12,5,8]  //显示声明数组类型
let arrStr:string[] = ["sadasd","daada","qwerdq"]
let MixArr:(number|string)[] = ["asdada",12312]    //混合声明

enum direction {      //enum 枚举类型，能够自动向下枚举
    one = 1,
    two,
    three,
    four
}
function play(dir:direction){   //声明参数dir为定义好的枚举类型
    if(dir === 1){
        console.log("第一");
    }else{
        console.log(dir);
    }
}
play(1)

function showAge(age:number):number{   //ts不仅可以规定参数的类型，还可以规定返回值的类型
    return age
}
console.log(showAge(18))