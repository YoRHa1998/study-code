#### 一、TS安装

~~~js
npm i typescript -g
~~~

直接安装

#### 二、基本使用

1.创建TS文件

2.编写TS代码

3.终端输入

~~~js
tsc 文件名.ts
~~~

进行编译成js文件

####  三、基本配置

终端输入

~~~js
tsc --init 
~~~

创建tsconfig.json配置文件

files:[]      //要编译的文件，设置之后就直接终端输入tsc即可编译

outDir    // 编译输出到目标文件夹下，整合编译之后的文件

noEmitOnError: true,     //代码出错的时候不进行编译



自动编译：配置好后点击终端--》运行任务--》tsc监视  即可自动编译

~~~js
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist",                        /*编译输出到目标文件夹下*/
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "files": [  //编译文件
    "greeter.ts"
  ]
}

~~~

#### 四、TS的数据类型

~~~js
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
~~~

#### 五、TS的类

~~~js
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
~~~

#### 六、类的继承

`super`在子类的`constructor`中调用，是在子类中执行了父类的构造函数，其实是无关父类原型的，如果想到改变父类的原型方法，可以直接重名覆盖，如果想利用父类原型方法，也可以用`super.method`来引用。

如果你不在`constructor`里写`super`并传入相应参数，那么相当于只继承原型方法。

每个类自己的`constructor`其实就是定义自身的属性和方法，而不是原型上的。可以直接使用`this.abc`来添加，`this`指自己，`super`指父类。

子类继承的时候不写`constructor`，则默认会把父类自身的属性和方法生成到子类。

~~~js
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
~~~

#### 七、抽象类的概念

抽象类只能被继承，不能被实例化

~~~js
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
        super()  //调用super()
    }
}

let Myjigou = new Xinjiangjigou()

console.log(Myjigou.showMoney())
~~~

#### 八、接口

~~~js
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
~~~



