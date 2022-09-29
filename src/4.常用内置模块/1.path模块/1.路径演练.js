//  由于不同操作系统路径分隔符不同所以需要模块来处理这种路径关系
const path = require("path");
const file = "33.txt";
const fileFolder = "a:/c/cd";
const filePath = path.resolve(fileFolder, file);
console.log(filePath);
