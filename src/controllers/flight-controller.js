const { FlightService } = require('../services/index');
const { SuccessCodes, ServerErrors } = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    let flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    res.status(SuccessCodes.CREATED).json({
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
    res.status(SuccessCodes.OK).json({
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

const get = async (req, res) => {
  try {
    console.log(req.params.id);
    const response = await flightService.getFlight(req.params.id);
    res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: 'Successfully fetched the flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the flight',
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: 'Successfully updated the flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update the flight',
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
  get,
  update,
};
