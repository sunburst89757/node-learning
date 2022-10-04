const http = require("http");
// get请求
// http.get("http://localhost:8080/login", (res) => {
//   res.on("data", (data) => {
//     console.log(data.toString());
//   });
// });
// post请求  必须调用end方法表明请求发送完毕
const request = http.request(
  "http://localhost:8080/login",
  {
    method: "POST",
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data.toString());
    });
  }
);

request.end();
