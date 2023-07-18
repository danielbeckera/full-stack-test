const { hash } = require("bcryptjs");
const User = require("../db/models/User");

const UserController = {
  async createUser(req, res) {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await hash(password, 8);

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  },
};

module.exports = UserController;
