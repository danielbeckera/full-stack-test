const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(require("./config.js")["development"]);

const User = require("./models/User");

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Successfully established connection with the database.");

    await User.sync({ alter: true });
    console.log('"User" model successfully synced with the database.');
  } catch (error) {
    console.error("Error when connecting to the database: ", error);
  }
}

syncDatabase();
