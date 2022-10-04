const http = require("http");

//  创建一个server服务器
const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      // debuggbody的时候可以看到body里除了文件的buffer以外还有 content type formdata表单键值对等信息这些信息不能写入文件的
      console.log(body);
      //   原生实现上传 只能在body这里截取 但是框架已经实现好了
    });
  }
  res.end("服务器启动成功");
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
