const express = require("express");
const app = express();
// 加载一个json解析的中间件 这样后面的中间件req.body里就有解析好的json值
app.use(express.json());
// 路径 方法中间件
app.get("/login", (req, res, next) => {
  console.log(req.body);

  res.end("login success");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
});
app.post("/home", (req, res, next) => {
  console.log(req.body);

  res.end("home page");
  //   如果不调用next也不调用res.end结束那么请求就会一直挂起
});

app.listen("8080", () => {
  console.log("express common middleware server start");
});
