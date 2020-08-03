const fs = require("fs");

//写入文件为writeFile()
//有三个参数
//第一个参数为文件路径,如果没找到文件名则创建一个新的文件
//第二个参数为要写入的内容,写如的内容会覆盖之前的文本
//第三个参数为回调函数,接收一个参数error,写入失败的时候会传入错误对象
fs.writeFile("./file/01.hello.txt", "你好!!", function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("文件写入成功");
  }
});
