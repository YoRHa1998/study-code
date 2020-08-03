#### 一、定义变量

在sass中，可以通过定义变量的方式来提供便捷。

在sass中，使用**$符号**来定义变量

~~~css
$primary-color : #FFFFFF;       //定义一个变量
$peimary-border : 1px solid $primary-color;  //变量的值可以是多个，也可以引用其他变量

div.box {
    background-color : $primary-color;   //在样式中就可以使用这个变量
}
h1.page-head {
    border : $primary-border;   //编译结果便是border：1px solid #FFFFFF
}
~~~



#### 二、Sass的嵌套写法

在css中，当我们使用选择器时，有时候会有很多属性会重复出现，比如下面这种情况：

~~~css
.nav {
    height : 100px;
}
.nav ul {
    margin: 0;
}
.nav ul li {
    float : left;
    list-style : none;
    padding : 5px;
}
~~~

在这个例子中，.nav重复出现了3次，ul重复出现了两次。

现在把这个例子用Sass改写一下

~~~css
.nav {
    height : 100px;
    ul {
    	margin: 0;
     	li {
    		float : left;
    		list-style : none;
    		padding : 5px;
		}
	}
}
~~~

可以看到，我们直接在样式里面直接嵌套了其他选择器的样式，Sass在编译时会自动处理各个嵌套之间的关系，不觉得这样方便简洁了许多吗？



#### 三、在嵌套语法中调用父选择器

当我们使用嵌套语法的时候，每个嵌套关系被编译之后中间都会有一个空格，比如这个例子：

~~~css
.nav {
    height : 100px;
    div {
    	margin: 0;
     	a {
    		float : left;
    		list-style : none;
    		padding : 5px;
            :hover {               //我们在这里使用一个伪类
                background-color : red;
            }
		}
	}
}


//编译之后
.nav {
    height : 100px;
}
.nav div {
    margin: 0;
}
.nav div a :hover {    //在编译之后a 和 :hover之间会有一个空格，很明显，这样不是我们想要的
    float : left;
    list-style : none;
    padding : 5px;
}
~~~

这种时候，我们就需要在使用伪类这种与父选择器有关联的样式的时候调用父选择器

在sass中，我们通过**&符号**来调用父选择器

现在我们把例子来改写一下：

~~~css
.nav {
    height : 100px;
    div {
    	margin: 0;
     	a {
    		float : left;
    		list-style : none;
    		padding : 5px;
            &:hover {               //现在加上&符号
                background-color : red;
            }
		}
	}
    & &-text {  
        font-size : 15px;
    }
}

//编译之后
.nav {
    height : 100px;
}
.nav div {
    margin: 0;
}
.nav div a:hover {    //可以看到，a与伪类之间的空格没有了
    float : left;
    list-style : none;
    padding : 5px;
}
.nav nav-text {   //在使用了&符号的地方就会去调用父选择器
      font-size : 15px;
}
~~~

这样就能得到我们想要的结果了



#### 四、属性的嵌套

在css中，不仅选择权会经常出现重复的东西，很多属性也有重复的地方，比如下面这个例子：

~~~css
body {
    font-family : 楷体;
    font-size : 15px;
    font-weight : normal;
}

.nav {
    border : 1px solid #FFFFFF;
    border-left : 0;
    border-right :0;
}
~~~

可以看到，font和border重复出现了好多次，我们可以用sass来改写一下：

~~~css
body {
    font：{    //将公共的属性提取出来，加上一个冒号和{}，之后写其他属性就不用写font了
        family : 楷体;
    	size : 15px;
    	weight : normal;
        }
}

.nav {
    border : 1px solid #FFFFFF {   //提取出来的公共属性也可以有样式
        left : 0;
    	right :0;
    }
}
~~~

结果经过sass的编译，结果与没修改之前是一样的，但是我们写代码的时候可以省时省力很多。



#### 五、mixin

##### 5.1 基本使用 

在sass中，我们可以定义一个mixin（混入）来写一个有名字的公共的样式，我们可以在任何地方去重复的使用它。

在sass中使用mixin的方法是使用@mixin符号来定义一个mixin

~~~css
@mixin 名字(参数1，参数2...) {
    . . . 
    (这里可以是css规则，也可以是变量、嵌套、函数等等)
}
~~~

看起来是不是很像js里的函数？

现在我们来试着定义一个mixin

~~~css
@mixin alert {
    background-color : #FFFFFF;
    color : #1b3a4f;
} 
~~~

这样就定义好了一个叫做alert的mixin，现在我们来使用他。

在sass中使用mixin是通过**@include**来引入mixin

~~~css
@mixin alert {
    background-color : #FFFFFF;
    color : #1b3a4f;
} 

.alert-warning {
    @include alert    //这样就成功使用了alert这个mixin
}
~~~

解析的结果为：

~~~css
.alert-warning {
    background-color : #FFFFFF;
    color : #1b3a4f;
}
~~~

我们也可以在mixin中嵌套一个样式：

~~~css
@mixin alert {
    background-color : #FFFFFF;
    color : #1b3a4f;
    a {
        color : #55a2cb;
    }
} 

.alert-warning {
    @include alert 
}
~~~

这样解析的结果便是：

~~~css
.alert-warning {
    background-color : #FFFFFF;
    color : #1b3a4f;
}
.alert-warning  a {
    color : #55a2cb;
}
~~~

很好用吧O(∩_∩)O~



##### 5.2 参数的使用

现在来看一下mixin的参数，我们来改写一下上面的mixin。

mixin的参数需要使用$符号开头，和变量是一样的

~~~css
@mixin alert($background,$text-color) {
    background-color : $background;
    color : $text-color;
    a {
        color : darken($text-color,10%);   //这里使用了一个darken()函数，作用是根据$text-color的颜色自动加深10%
    }
} 
~~~

现在我们来使用这个mixin

~~~css
.alert-warning {
    @include alert (#FFFFFF,#CCCCCC)   //使用的时候，我们传入参数
}
~~~

编译的结果为：

~~~css
.alert-warning {
    background-color : #FFFFFF;
    color : #CCCCCC;
}
.alert-warning  a {
    color : #5df2c3;   //颜色加深了10%
}
~~~



#### 六、继承

在sass中，可以使用@extend来继承另一个样式的全部内容

~~~css
.alert {
    color : #3d4f5c;    //我们先定义一个样式
}

.alert-info {
    @extend .alert;    //这里我们通过@extend来继承.alert的样式
     padding : 15px;   //同时还可以写自己的样式
}
~~~

解析的结果是这样的：

~~~css
.alert .alert-info {
    color : #3d4f5c; 
}
.alert-info {
    padding : 15px;
}
~~~

我们也可以再加一个关系

~~~css
.alert {
    color : #3d4f5c;    //我们先定义一个样式
}

.alert a {
    font-weight : bold;
}

.alert-info {
    @extend .alert;    //这里我们通过@extend来继承.alert的样式
     padding : 15px;   //同时还可以写自己的样式
}
~~~

解析结果为：

~~~css
.alert .alert-info {
    color : #3d4f5c; 
}

.alert a, .alert-info a {
    font-weight : bold;   //可以看到，.alert和.alert-info下的a都有了这个样式
}

.alert-info {
    padding : 15px;
}
~~~



#### 七、partials和@import

@import相信了解过模块化编程的人一定非常熟悉，使用@import可以导入其他文件的东西，但是每次导入都会发送一次http请求，去下载被导入的css文件，因为每次请求都会消耗服务器的一点资源，所以这会让你的页面变得更慢一些。

Sass扩展了@import的功能，使用@import会把其他导入的文件包含进来，编译成一个css文件，这样我们就可以把一个项目的css文件分割成一个个小的部分，然后再通过@import编译成一个文件。

这些小的部分在sass里被成为Partials，每一个Partial就是一个文件，文件的名字需要以下划线_开头，这样Sass就知道这个文件是一个Partial，也就是项目的一部分。这样Sass就不会去单独编译这些scss文件，Partial可以让我们的项目模块化并且更加条理一些。

下面我们来看看例子：

这里有一个文件style.scss:

~~~css
.alert {
    color : #3d4f5c;    //我们先定义一个样式
}

.alert a {
    font-weight : bold;
}

.alert-info {
    @extend .alert;    //这里我们通过@extend来继承.alert的样式
     padding : 15px;   //同时还可以写自己的样式
}
~~~

还有一个_base.scss：

~~~css
body {
    margin : 0;
    padding : 0;
}
~~~

现在我们在style.scss中导入_base.scss

~~~css
@import "base.scss"    //注意：导入的时候我们就不用写下划线了

.alert {
    color : #3d4f5c;    //我们先定义一个样式
}

.alert a {
    font-weight : bold;
}

.alert-info {
    @extend .alert;    //这里我们通过@extend来继承.alert的样式
     padding : 15px;   //同时还可以写自己的样式
}
~~~

这样就完后导入了，编译的时候就会把两个scss文件编译为一个css文件。

~~~css
body {     //导入的_base也被编译了
    margin : 0;
    padding : 0;
}
.alert .alert-info {
    color : #3d4f5c; 
}

.alert a, .alert-info a {
    font-weight : bold;   
}

.alert-info {
    padding : 15px;
}
~~~



#### 八、Sass中的数据类型

在Sass中有很多数据类型，我们可以在命令行中使用sass -i来实时的看到sass编译的结果。

现在我们使用type-of()函数来查看各种数据类型

~~~js
type-of( 5 )           //"number"
type-of( 5px )           //"number"
type-of( hello )           //"string"
type-of( "hello" )           //"string"
type-of( 1px solid red )        //"list"
type-of( 5px 10px )           //"list"
type-of( #FF0000 )           //"color"
type-of( red )           //"color"
type-of( rgb(255,0,0) )           //"color"
~~~

可以看到有很多类型，下面我们就来详细了解一下各个类型



##### 8.1 数字 number

在sass中的数字可以进行各种运算

~~~js
5 + 3          //8
5 * 3          //15
5px + 2    //7px
5px * 2     //10px
5px + 5px   //10px
5px * 5px   //10px*px   注意：这里的结果并不是10px
8px / 2px   //4   注意：这里的px没有了
10px / 2    //5px
~~~

可以看到，在sass中，带上单位也是可以进行数学运算的，但是需要注意的是，这里的单位（例如px），更像是数学中的变量，在参数两边都带单位的时候进行乘法除法的时候，得出结果会被平方或者消掉，这一点要注意。



##### 8.2 数字函数

在sass中，有很多有关数字的函数，这些函数能给我们的运算提供很多便利，下面来简单介绍几个函数

①abs()  这个函数可以得出绝对值

②round()  在sass中的除法是会保留小数的，这个函数可以进行四舍五入的操作

③ceil()   这个函数可以无条件进位向上取整  例如ceil(3.2px)   //4px

④floor()  这个函数是无条件退位向下取整   floor(3.8)    //3

⑤persentage()  可以将运算结果转化为百分比的形式  persentage(650px / 1000px)   //65%

⑥min()  max()  分为为取得最小值和最大值   min(1,2,3)  //1  max()则为3

这里先介绍这么多，想了解更多可以去官网查看



##### 8.3 字符串 string

在sass中，字符串分为有引号和无引号两种，带引号的区别就是可以在字符串中带有空格以及一些特殊符号，而不带引号的就不能带了。



##### 8.4 颜色 color

在sass中，有很多中表示颜色的方式

例如我要表示一个红色，可以用几下几种方式

①关键词 red

②十六进制 #FF0000

③RGB rgb(255,0,0)

④hsl(0,100%,50%)



##### 8.5 列表 list

在sass中，list也就是列表类型，一般用来表示属性中的一串值，有点像其他语言的数组。

list中的值可以用空格分开，例如

~~~css
border : 1px solid #ff0000
~~~

也可以用逗号分开

~~~css
font-family : "Alicy","楷体","宋体"
~~~



##### 8.6 map

map就是带键值对的列表，看起来像这样：

~~~css
$名称：(key1:value1 , key2:value2 , key3:value3...)
~~~

看起来和对象差不多。

现在来定义一个map类型的数据：

~~~css
$color:(ligt:#ffffff , dark:#000000)
~~~



##### 8.7 布尔值 Boolean

布尔值用来判断真假，值为true/false 



#### 九、interpolation

在sass中，可以使用interpolation来在注释或者命名的时候使用变量，使用方法是#{}，花括号里面便是变量名

让我们来看几个例子

~~~css
$version: "0.0.1"  //我们先定义一个变量

/*现在我们要在注释中使用这个变量，使用方法是#{$version}*/
解析出来的结果便是
/*现在我们要在注释中使用这个变量，使用方法是0.0.1*/
~~~

我们也可以在命名中使用

~~~css
$name : "info";   //定义一个变量
$attr : "border";

.alert-#{$name} {
    #{$attr}-left : 1px solid red;
}
~~~

解析的结果为

~~~css
.alert-info {
    border-color : red;
}
~~~



#### 十、控制指令

在sass中，我们可以通过一些控制指令来进行一些逻辑操作，比如@if、@for、@each、@while

相信看到这些单词你就已经明白他们的用处了吧



##### 10.1 @if

在sass中，使用@if便可以进行一些条件判断，从而加载符合条件的属性

让我们来看看例子

~~~css
$theem : dark;     //先定义一个变量

body{
	@if $theem == dark {
    	background-color : black;
	}@else if $theem == light {
    	background-color : white;
	}@else {
    	background-color : gray;
	}
}
~~~

解析出来的结果为

~~~css
body{
    background-color : black;
}

~~~

可以看到，sass中的@if和js中的if-else用法几乎相同，当条件为true时，使用相应的css属性



##### 10.2 @for

在sass中，@for可以用来执行一些循环条件，用法有两种

①@for $变量名 from 开始值 through $结束值的变量 {

​	. . . 

}

②@for $变量名 from 开始值 to $结束值的变量 {

​	. . . 

}

两种方式的差别就在与一个是through一个是to，如果是through的话执行次数是会包含结束值的，而to的话是不包含的，这么说可能有点抽象，让我们来看个例子

~~~css
$columns : 4;       //定义一个变量

@for $i from 1 through $columns {   //定义一个变量$i，$i的值为1到4，包含4
    .col-#{$i} { 												//这里使用之前讲的interpolation写法#{}来定义名字
        width : 100%/$columns * $i		//每次得出的宽度根据变量计算得出
    }
}
~~~

解析的结果为

~~~css
.col-1{
    width : 25%;
}
.col-2{
    width : 50%;
}
.col-3{
    width : 75%;
}
.col-4{
    width : 100%;
}
~~~

而如果把tghrough换成to的话，循环便不会包括4

~~~css
$columns : 4;       //定义一个变量

@for $i from 1 to $columns {   //定义一个变量$i，$i的值为1到4，不包含4
    .col-#{$i} { 												//这里使用之前讲的interpolation写法#{}来定义名字
        width : 100%/$columns * $i		//每次得出的宽度根据变量计算得出
    }
}
~~~

解析结果为

~~~css
.col-1{
    width : 25%;
}
.col-2{
    width : 50%;
}
.col-3{
    width : 75%;
}
~~~



##### 10.3 @each

当你有一个列表，你想根据列表的内容来生成选择器，这个时候你就可以使用@each。

@each的用法为：

~~~css
@each $变量名 in $列表名 {
    . . . 
}
~~~

让我们直接来看例子

~~~css
$icons : success error warning;     //先定义一个list

@each $icon in $icons {     //定义一个变量icon来循环列表中的项
    background-image : url(../images/icons/#{$icon}.png)    //这里使用interpolation语法#{}来使用定义的变量icon
}
~~~

解析结果为

~~~css
.icon-success {
     background-image : url(../images/icons/success.png) 
}
.icon-error {
     background-image : url(../images/icons/error.png) 
}
.icon-warning {
     background-image : url(../images/icons/warning.png) 
}
~~~



##### 10.4 @while

@while和之前的@for有点类似，也是根据条件来循环输出，@while的写法相对简单一些：

~~~css
@while 条件 {
    . . .
}
~~~

我们需要在循环体里面对条件进行改变

直接来看个例子

~~~css
$i : 6;    		//定义一个变量

@while $i >0 {
    .item-#{$i} {
        width : 5px * $i
    }
    $i = $i -2;   //在选择器外面设计条件的变化
}
~~~

解析结果为

~~~css
.item-6 {
    width : 30px;
}
.item-4 {
    width : 20px;
}
.item-2 {
    width : 10px;
}
~~~



#### 十一、自定义函数

我们之前用到了一些sass自带的函数，我们也可以自己来编写一些函数

在sass中，编写自定义函数使用@function，写法为

~~~css
@function 函数名（参数1，参数2...）{
    . . .
}
~~~

例如

~~~css
@function color($light) {
    @return darken($light,10%)			//在函数中使用@return返回结果
}

.item {
    background-color:color(#ff0000);   //函数会返回一个暗10%的颜色
}
~~~

