const express = require('express');
const router = express.Router();

const { FlightMiddleware } = require('../../middlewares/index');

const {
  CityController,
  FlightController,
  AirportController,
} = require('../../controllers/index');

router.get('/city', CityController.getAll);
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);

router.post(
  '/flights',
  FlightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

router.post('/airports', AirportController.create);

module.exports = router;
