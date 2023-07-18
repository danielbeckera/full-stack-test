const express = require("express");

const initializeServer = async () => {
  const app = express();

  app.use(express.json());

  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
};

initializeServer();
