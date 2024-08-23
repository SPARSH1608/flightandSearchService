const express = require('express');
const router = express.Router();

const { CityController, FlightController } = require('../../controllers/index');

router.get('/city', CityController.getAll);
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);

router.post('/flight', FlightController.create);

module.exports = router;
