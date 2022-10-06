const Koa = require("koa");
const app = new Koa();
//  只能app.use注册中间件  不能像express那样连续注册中间件 如果需要连续注册中间件那么就使用多次app.use就可以了 
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "login success";
    }
  }
});
app.listen(8080, () => {
  console.log("koa server start");
});
