const express = require("express");
const app = express();

// 加载一个json解析的中间件 这样后面的中间件req.body里就有解析好的json值
app.use(express.json());
// 路径 方法中间件
app.get("/login/:id/:age", (req, res, next) => {
  console.log(req.params);
  res.end("hello world");
});
app.get("/home", (req, res, next) => {
  console.log(req.query);
  res.end("hello world");
});
app.listen("8080", () => {
  console.log("express log server ");
});
