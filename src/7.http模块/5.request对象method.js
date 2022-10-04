const http = require("http");
const url = require("url");
//  创建一个server服务器
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/login") {
    if (req.method === "POST") {
      req.setEncoding("utf-8");
      //  拿到body的数据  body的数据是通过流的方式写入的
      req.on("data", (data) => {
        const { username, password } = JSON.parse(data);
        console.log(username);
        console.log(password);
      });
      res.end("hello server");
    }
  } else {
    res.end("请求错误");
  }
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
