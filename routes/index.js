const Router = require("@koa/router");
const livingroom = "./index.html";
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = livingroom;
});

module.exports = router;
