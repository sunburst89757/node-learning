const fs = require("fs");
const writer = fs.createWriteStream("./bar.txt", {
  flags: "a",
  start: 4,
});

//  以流的形式写文件
writer.write("啊啊啊", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

//  end是 最后追加然后关闭这个stream流
writer.end("\n 要关闭了");
writer.on("close", () => {
  console.log("文件关闭");
});
