const fs = require("fs");

const filePath = "./hello.txt";
// 同步读取文件信息  阻塞下面代码
/* const info = fs.statSync(filePath);
console.log(info); */
// 异步回调不影响后面执行但可能出现回调地狱
/* fs.stat(filePath, (err, info) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(info);
}); */
//  promise读取 不会阻塞 不会出现回调地狱
fs.promises
  .stat(filePath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
