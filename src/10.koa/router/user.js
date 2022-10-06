const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
// router可以进行连续注册中间件
router.get("/:id", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  ctx.response.body = "user default route";
});

router.get("/user1", (ctx, next) => {
  console.log(ctx.request.query);
  ctx.response.body = "/user/user1 default route";
});
module.exports = {
  router,
};
