const http = require("http");

//  创建一个server服务器
const server = http.createServer((req, res) => {
  //   设置状态码
  //   方式一
  res.statusCode = 400;
  //   方式二
  res.writeHead(503);
  res.write("响应请求一");
  res.end("Hello server 222");
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
