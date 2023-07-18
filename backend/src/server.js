const express = require("express");
const cors = require("cors");
const db = require("./db");

const routes = require("./routes");
const app = express();

const initializeServer = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Successfully synced models with database.");

    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
  } catch (error) {
    console.error("Failed to sync models with the database: ", error);
  }
};

initializeServer();
