const { Flights } = require('../models/index');

class FlightRepository {
  async createFlight(data) {
    console.log(data);
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log('Something went wrong while  creating flight');
      throw { error };
    }
  }
  async deleteFlight() {
    try {
    } catch (error) {}
  }
}
module.exports = FlightRepository;
