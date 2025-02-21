const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');
// {
//     flightNumber,
//     airplaneId,
//     departureAirportId,
//     arrivalAirportId,
//     arrivalTime,
//     departureTime,
//     price,
//     totalSeats- > airplane
// }

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    console.log(data);
    try {
      if (compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: 'Arrival time cant be greater than departure time' };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      console.log(airplane);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw error;
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw error;
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw error;
    }
  }
}
module.exports = FlightService;
