// node中commonjs的本质是对象的引用 commonjs缩写为cjs
// exports导出的其实是一个对象，require引用的就是这个对象
// 本质上是module.exports在真正导出的 ，只是exports对象经过node转化为 module.exports = exports这个对象
// 所以真正到处实际上用moudle.exports = {}进行导出对象 require还是这样用
const name = "cy";
const age = 24;

/* exports.name = name;
exports.age = age; */
//  exports就是一个对象 导出了一个对象
/* 
{
    name: "cy",
    age:24
}
*/
module.exports = {
  name: name,
  age,
};
