const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
  console.log(req.body);
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: 'Successfully created flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create flight',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: 'Successfully fetched the flights',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch all flight',
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
