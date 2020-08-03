  //使用http模块创建服务器

  //1.首先引入http模块
  const http = require('http')

  //2.创建一个服务器,createServe()
const server =  http.createServer()

//3.配置创建的服务器,通过on方法,有两个参数
//第一个参数为request,表示接受到请求后的操作
//第二个为一个回调函数,当接收到客户端的请求时执行
//在回调函数中有两个参数,一个是request,一个是response
//resquest  请求对象,用来获取客户端的一些请求信息,例如请求路径
//response 响应对象,可以给客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到客户端的请求了',`请求路径是${request.url}`);

    //response对象有一个write方法,可以黑客户端发送响应消息
    response.write('hello')
    //write可以使用多次,但是,一定要用end()来进行结束响应,否则客户端会一直等待
    //相当于告诉客户端,我的话说完了,可以呈献给用户了
    response.end()
})

//4.绑定端口号,启动服务器   listen,接受两个参数
//第一个参数为绑定的端口号
//第二个为服务器的启动日志,会在服务器启动时执行
server.listen(3000,function(){
    console.log('服务器启动成功,可以通过http://127.0.0.1:3000/ 或者http://localhost:3000/ 进行访问');
})