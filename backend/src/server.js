const express = require("express");

const initializeServer = async () => {
  const db = require("./db");

  const app = express();

  app.use(express.json());

  await db.sequelize.sync();

  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
};

initializeServer();
