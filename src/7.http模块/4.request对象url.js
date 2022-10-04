const http = require("http");
const url = require("url");
//  创建一个server服务器
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const userInfo = new URLSearchParams(query);
  if (pathname === "/login") {
    console.log(userInfo.get("username"));
    console.log(userInfo.get("password"));
    res.end("hello server");
  } else {
    res.end("请求错误");
  }
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
