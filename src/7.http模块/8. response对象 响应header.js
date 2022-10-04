const http = require("http");

//  创建一个server服务器
const server = http.createServer((req, res) => {
  //   设置请求头 方式一 键值对
  //   res.setHeader("Content-Type", "text/plain;charset=utf8");
  // 方式二
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  res.end("<h1>hhhh</h1>");
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
