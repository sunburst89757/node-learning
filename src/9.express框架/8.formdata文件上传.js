const express = require("express");
const app = express();
const multer = require("multer");
// 引入
const upload = multer({
  dest: "./uploads/",
});

// 加载一个json解析的中间件 这样后面的中间件req.body里就有解析好的json值
app.use(express.json());
// 路径 方法中间件
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  res.end("文件上传成功");
});

app.listen("8080", () => {
  console.log("express form-data server ");
});
