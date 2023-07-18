const { Router } = require("express");
const { createUser } = require("../controllers/UserController");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const { username, name, email } = await createUser(req.body);

    return res.json({
      username,
      name,
      email,
    });
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = userRouter;
