const fs = require("fs");
const path = require("path");
//  创建文件夹
const filePath = "./file";
if (!fs.existsSync(filePath)) {
  fs.mkdir(filePath, (err) => {
    console.log(err);
  });
}

// 读取文件夹信息 递归调用文件夹内的所有文件
const getFile = (filePath) => {
  fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (!file.isFile()) {
        // 递归调用
        let path1 = path.resolve(filePath, file.name);
        getFile(path1);
      } else {
        console.log(file.name);
      }
    });
  });
};

getFile(filePath);
