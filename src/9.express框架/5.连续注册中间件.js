const express = require("express");
const app = express();
// 普通中间件 任意路由路径都会匹配如果不next就只会响应第一个中间件
app.use((req, res, next) => {
  console.log("第一个中间件");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
  next();
});
// 路径 方法中间件
app.get(
  "/login",
  (req, res, next) => {
    console.log("第二个中间件");
    next();
    //   如果不调用next也不调用res.end结束那么请求就会一直挂起
  },
  (req, res, next) => {
    console.log("第三个中间件");
    next();
  },
  (req, res, next) => {
    console.log("第四个中间件");
    res.end("hhhh");
  }
);

app.listen("8080", () => {
  console.log("express common middleware server start");
});
