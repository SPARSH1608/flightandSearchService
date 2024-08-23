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
module.exports = {
  create,
};
