const express = require("express");
const app = express();
// 普通中间件 任意路由路径都会匹配如果不next就只会响应第一个中间件
app.use((req, res, next) => {
  console.log("第一个中间件");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
  next();
});
app.use("/login", (req, res, next) => {
  console.log("第二个中间件");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
  next();
});
app.use("/login", (req, res, next) => {
  console.log("第三个中间件");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
  //   一般情况下end在最后一个中间件执行
  res.end("Hello Express middleware");
});
app.listen("8080", () => {
  console.log("express common middleware server start");
});
