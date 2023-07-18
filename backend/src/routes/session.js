const { Router } = require("express");
const { login } = require("../controllers/SessionController");

const sessionRouter = Router();

sessionRouter.post("/", async (req, res) => {
  try {
    const token = await login(req.body);
    return res.json({ token });
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = sessionRouter;
