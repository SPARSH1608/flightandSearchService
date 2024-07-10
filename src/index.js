const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    // console.log(process.env.PORT);
  });
};

setupAndStartServer();
