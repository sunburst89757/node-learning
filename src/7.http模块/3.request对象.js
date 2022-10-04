const http = require("http");

//  创建一个server服务器
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  //  res.write("hello server")
  //    res.close()
  res.end("Hello server 222");
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
