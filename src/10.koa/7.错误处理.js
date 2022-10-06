const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router({ prefix: "/login" });
router.get("/", (ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    ctx.app.emit("error", new Error("您还没有登录"), ctx);
  }
});
app.on("error", (err, ctx) => {
  ctx.status = 401;
  ctx.body = err.message;
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080, () => {
  console.log("koa server start");
});
