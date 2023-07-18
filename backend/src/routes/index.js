const { Router } = require("express");

const sessionRouter = require("./session");
const userRouter = require("./user");
const brewdogBeersRouter = require("./brewdogBeers");

const routes = Router();

routes.use("/login", sessionRouter);
routes.use("/user", userRouter);
routes.use("/beers", brewdogBeersRouter);

module.exports = routes;
