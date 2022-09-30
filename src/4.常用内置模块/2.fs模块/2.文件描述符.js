/* 
操作系统实际上是通过一个字符也就是文件描述符来区分查找文件的
node通过一些API也是可以通过文件描述符来指定这个文件来对文件进行操作
但是node也提供了很多屏蔽文件描述符直接通过文件路径来查找文件的API
所以这个仅供了解
*/
const fs = require("fs");
//  fd就是文件描述符
fs.open("./hello.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return err;
  }
  //  通过描述符获取文件信息
  fs.fstat(fd, (err, info) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log(info);
  });
});
