const EventEmitter = require("events");
//  创建发射器
const emitter = new EventEmitter();
// 监听某一个事件 事件名叫click
emitter.on("click", (args) => {
  console.log("监听到click1事件", args);
});
const listener2 = (...args) => {
  console.log("监听到click2事件", args);
};
emitter.on("click", listener2);

setTimeout(() => {
  // 发射事件
  emitter.emit("click", "888", "123");
  emitter.off("click", listener2);
  emitter.emit("click", "8888");
}, 2000);
