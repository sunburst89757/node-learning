const fs = require("fs");
// 传统的方式
fs.readFile("./1.readable的使用.js", (err, data) => {
  console.log("完整的数据");
  console.log(data);
});
// stream的方式读取
const reader = fs.createReadStream("./foo.txt", {
  start: 3,
  end: 10,
  highWaterMark: 2,
});
reader.on("open", () => {
  console.log("文件打开");
});
// stream基于event流 读取的数据是监听data事件
reader.on("data", (data) => {
  console.log(data);
  reader.pause();
  setTimeout(() => {
    reader.resume();
  }, 1000);
});
reader.on("close", () => {
  console.log("文件关闭");
});
