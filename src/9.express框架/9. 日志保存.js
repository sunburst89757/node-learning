const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const app = express();
const writeStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+",
});
app.use(morgan("combined", { stream: writeStream }));
// 加载一个json解析的中间件 这样后面的中间件req.body里就有解析好的json值
app.use(express.json());
// 路径 方法中间件
app.post("/login", (req, res, next) => {
  res.end("hello world");
});
app.listen("8080", () => {
  console.log("express log server ");
});
