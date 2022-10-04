const express = require("express");
const app = express();
//  监听 / get请求
app.get("/", (req, res, next) => {
  res.end("hello express get");
});
//  监听/login下的 post请求
app.post("/login", (req, res, next) => {
  res.end("hello express welcome");
});
//  启动服务器
app.listen("8080", () => {
  console.log("express server start");
});
