const { Router } = require("express");

const sessionRouter = require("./session");
const userRouter = require("./user");

const routes = Router();

routes.use("/login", sessionRouter);
routes.use("/user", userRouter);

module.exports = routes;
