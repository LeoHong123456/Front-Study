// 1、引入express
const express = require("express");

//2、创建应用对象
const app = express();

//3.创建GET路由规则
app.get("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello express get");
});

//创建POST路由规则
app.post("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello express post");
});

//创建POST-JSON路由规则
app.all("/serverJson", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  //接受所有请求头(如果前端自定义了请求头需要放行所有请求头，请求方式改成all)
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Content-type", "appliction/json");
  console.dir(request)
  console.log("请求参数："+ JSON.stringify(request.body))
  let result = { username: "张三", age: 18, sex: "man" };
  response.send(JSON.stringify(result));
});

//模拟接口超时
app.get("/delay", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  console.log(request.params);
  var timeOut = setTimeout(()=>{
    console.log("处理完成！");
    response.send("get delay!");
    clearTimeout(timeOut);
  }, 2000);
});

//4、监听端口
app.listen(8000, () => {
  console.log("服务已经启动，端口：8000");
});
