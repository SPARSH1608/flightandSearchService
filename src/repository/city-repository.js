// first thing should we should get models

const { City } = require('../models/index');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log('something went wrong');

      throw { error };
    }
  }

  async deleteCity(id) {
    try {
      await City.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log('something went wrong');

      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      //the below apporach also works but will not return updated object
      ///if we using PG then returning true can be used else not
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      //for getting updated data in mysql we use the below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log('something went wrong');

      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = CityRepository;
