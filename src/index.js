const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./respository/city-repository');

const setupAndStartServer = async () => {
  //create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
    // console.log(process.env.PORT);
    // await City.create({
    //   name: 'New Delhi',
    // });
    const repo = new CityRepository();
    repo.createCity({ name: 'New Delhi' });
  });
};

setupAndStartServer();
