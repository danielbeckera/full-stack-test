const { hash } = require("bcryptjs");
const { User } = require("../db");

const UserController = {
  async createUser({ username, name, email, password }) {
    try {
      const hashedPassword = await hash(password, 8);

      const user = await User.create({
        username,
        name,
        email,
        password: hashedPassword,
      });

      return user;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error(error.errors[0].message);
    }
  },
};

module.exports = UserController;
