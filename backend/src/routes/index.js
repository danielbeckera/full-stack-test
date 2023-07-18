const { Router } = require("express");

const userRouter = require("./user");

const routes = Router();

routes.use("/user", userRouter);

module.exports = routes;
