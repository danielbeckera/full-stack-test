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
      console.error("Error trying to create user: ", error);
      throw new Error(error.errors[0].message);
    }
  },

  async listAllUsers() {
    try {
      const users = await User.findAll();

      return users;
    } catch (error) {
      console.error("Error trying to list users: ", error);
      throw new Error(error.errors[0].message);
    }
  },

  async updateUser({ username, name, email, password }) {
    try {
      const updatedUser = {};
      if (password) {
        const hashedPassword = await hash(password, 8);
        updatedUser.password = hashedPassword;
      }

      if (email) {
        updatedUser.email = email;
      }

      if (name) {
        updatedUser.name = name;
      }

      const user = await User.update(updatedUser, { where: { username } });

      return user;
    } catch (error) {
      console.error("Error trying to update user: ", error);
      throw new Error(error);
    }
  },

  async deleteUser({ username }) {
    try {
      const deletedUser = await User.destroy({ where: { username } });

      return deletedUser;
    } catch (error) {
      console.error("Error trying to delete user: ", error);
      throw new Error(error);
    }
  },
};

module.exports = UserController;
