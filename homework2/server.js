const express = require("express");
const app = express();
const { sequelize } = require("./models");

const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const routers = require("./routers");
const session = require("express-session");

app.use(
  session({
    secret: "aaa",
    resave: false,
    saceUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
nunjucks.configure("views", {
  express: app,
});
app.set("view engine", "html");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("connect!!!!");
  })
  .catch(() => {
    console.log("fail..");
  });

app.use("/", routers);

app.listen(3000, () => {
  console.log("server start port : 3000");
});
