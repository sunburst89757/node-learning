// require返回值就是拿到exports导出的对象，这两个对象是同一个对象，因此如果require之后改了这个对象的值会直接影响到exports.name的值
//  不是改变foojs的name变量可以改变exports对象上name属性的值
const foo = require("./foo");
console.log(foo);
console.log(module);
