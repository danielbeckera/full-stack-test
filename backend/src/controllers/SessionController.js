const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");

const { User } = require("../db");

const SessionController = {
  async login({ username, password }) {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        throw new Error("Incorrect email/password combination.");
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        throw new Error("Incorrect email/password combination.");
      }

      const token = sign(
        { name: user.name, email: user.email, username: user.username },
        "1297221fa29191e45862e856e65a1440",
        {
          subject: `${user.id}`,
          expiresIn: "1h",
        }
      );

      return token;
    } catch (error) {
      console.error("Error creating user: ", error);
      throw new Error(error.errors[0].message);
    }
  },
};

module.exports = SessionController;
