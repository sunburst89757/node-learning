const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  ctx.response.body = {
    name: "cy",
    age: 24,
  };
});
app.listen(8080, () => {
  console.log("koa server start");
});
