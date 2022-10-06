const Koa = require("koa");
const app = new Koa();
const userRouter = require("./router/user");
// 路由中间件使用需要使用koa-router库
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "login success";
    }
  }
  next();
});
app.use(userRouter.router.routes());
app.use(userRouter.router.allowedMethods());
app.listen(8080, () => {
  console.log("koa server start");
});
