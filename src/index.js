const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');
const db = require('./models/index');
const ApiRoutes = require('./routes/index');
const { Airport, City } = require('./models/index');
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // const repo = new CityRepository();
    // db.sequelize.sync({ alter: true }); // heavy operation
    // const city = await City.findOne({
    //   where: {
    //     id: 9,
    //   },
    // });
    // console.log(city);
    // const airports = await city.getAirports();
    // console.log(airports);
  });
};

setupAndStartServer();

// console.log(process.env.PORT);
// await City.create({
//   name: 'New Delhi',
// });
// repo.createCity({ name: 'New Delhi' });
// repo.deleteCity({ cityId: 3 });
// const airports = await City.findAll({
//   where: {
//     id: 23,
//   },

//   include: [
//     {
//       model: Airport,
//     },
//   ],
// });
// console.log(JSON.stringify(airports));
