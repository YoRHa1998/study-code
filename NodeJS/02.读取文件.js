//1.使用require方法加载fs核心模块
//fs就是fileSystem文件系统,nodejs中的文件操作api
const fs = require("fs");

//2.读取文件  readFile()
//有两个参数,第一个参数是文件的相对路径,第二个参数是执行的灰调方法
//回调方法有两个参数,第一个是error,第二个是data
fs.readFile("./file/01.hello.txt", function(error, data) {
  if (error) {
    console.log(error); //如果成功读取文件,error变为null,如果读取失败,error便是错误对象
  } else {
    console.log(data); //此时读取出来的是文件的16进制编码   <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>  要显示正常的文字 要用到toString()方法
    console.log(data.toString()); //这个时候显示的就是正常文字了   hello world
  }
});
