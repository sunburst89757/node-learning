const http = require("http");

//  创建一个server服务器
const server = http.createServer((req, res) => {
  //  res.write("hello server")
  //    res.close()
  req.on("data", (data) => {
    // 对于文件上传的时候 文件较大的时候stream流的长度需要与content length进行比较判断是否传输完成
    console.log(data);
  });
  console.log(req.headers);

  res.end("Hello server 222");
});
// 启动服务器 指定端口和主机
server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
