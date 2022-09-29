// 1. 文件路径截取有用部分
const path = require("path");
// const filePath = "/user/sunburst112/cy.txt";
// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.extname(filePath));

// 2.路径拼接 join直接字符串类型相加
const basePath = "/user/23";
const filename = "cy.txt";
const filePath = path.join(basePath, filename);
console.log(filePath);

// 3. resolve拼接 resolve使用的时候更智能，如果不以/开头那么resolve就会以相对当前目录的路径进行拼接
