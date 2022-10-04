const http = require("http");

//  创建一个server服务器
const server1 = http.createServer((req, res) => {
  //  res.write("hello server")
  //    res.close()
  res.end("Hello server 1");
});
server1.listen(8080, "0.0.0.0", () => {
  console.log("服务器1启动成功");
});
// 方式二 源码中这两种方式的实现是一样的
const server2 = new http.Server((req, res) => {
  //  res.write("hello server")
  //    res.close()
  res.end("Hello server 2");
});
server2.listen(8081, "0.0.0.0", () => {
  console.log("服务器2启动成功");
});
