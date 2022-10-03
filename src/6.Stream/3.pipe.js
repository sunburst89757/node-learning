// 以流的方式将一个文件的内容复制到另一个文件
const fs = require("fs");
const reader = fs.createReadStream("./bar.txt");
const writer = fs.createWriteStream("./fzz.txt");
reader.pipe(writer);
