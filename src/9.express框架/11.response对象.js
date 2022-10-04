const express = require("express");
const app = express();

// 加载一个json解析的中间件 这样后面的中间件req.body里就有解析好的json值
app.use(express.json());
// 路径 方法中间件
app.get("/login", (req, res, next) => {
  res.status(200);
  res.json({
    name: "cy",
    age: 24,
  });
});
app.listen("8080", () => {
  console.log("express response server ");
});
