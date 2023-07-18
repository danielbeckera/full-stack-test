const { Router } = require("express");
const {
  createUser,
  listAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");
const isAuthenticated = require("../middlewares/isAuthenticated");

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

userRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    const users = await listAllUsers();

    return res.json(users);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

userRouter.patch("/", isAuthenticated, async (req, res) => {
  try {
    if (req.body.username !== req.user.username) {
      throw new Error("You can only update your own account.");
    }

    const user = await updateUser(req.body);

    return res.json(user);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

userRouter.delete("/", isAuthenticated, async (req, res) => {
  try {
    if (req.body.username !== req.user.username) {
      throw new Error("You can only delete your own account.");
    }

    const user = await deleteUser(req.body);

    return res.json(user);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = userRouter;
