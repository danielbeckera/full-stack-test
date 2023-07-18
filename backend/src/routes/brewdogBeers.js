const { Router } = require("express");
const getBrewdogBeers = require("../services/getBrewdogBeers");
const isAuthenticated = require("../middlewares/isAuthenticated");

const brewDogBeersRouter = Router();

brewDogBeersRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    const { pageNum = 1, beersPerPage = 10 } = req.query;

    const data = await getBrewdogBeers(pageNum, beersPerPage);

    return res.json(data);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

module.exports = brewDogBeersRouter;
