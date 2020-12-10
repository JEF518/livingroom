const serve = require("koa-static");
const Koa = require("koa");
const app = new Koa();
const port = process.env.PORT || 3000;
// $ GET /package.json
app.use(serve("."));

app.listen(port);

console.log("listening on port " + port);
