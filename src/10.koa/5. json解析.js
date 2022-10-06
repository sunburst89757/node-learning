const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
// 注册json解析中间件
app.use(bodyParser());
const router = new Router({ prefix: "/product" });
router.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = "hello product";
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080, () => {
  console.log("koa server start");
});
