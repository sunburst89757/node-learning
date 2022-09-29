const name = "cy";
const age = 24;
// 这里导出的不是对象，这是导出了这个name变量的引用，不是导出了name值
export { name, age };
