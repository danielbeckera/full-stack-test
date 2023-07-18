const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const initializeServer = async () => {
  const db = require("./db");

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  await db.sequelize.sync();

  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
};

initializeServer();
