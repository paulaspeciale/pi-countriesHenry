const axios = require("axios")
const { Country, Activity } = require('../db')
const { Op } = require('sequelize');

const getCountries = async () => {

  try {
      let dbCountries = await Country.findAll({
      include: [Activity]})

      if(dbCountries.length === 0) {
          const { data } = await axios.get('https://restcountries.com/v3/all');
         
          const countries = data.map((country) => {
              return {
                  id: country.cca3,
                  name: country.name.common,
                  flag: country.flags[1],
                  continents: country.continents[0],
                  capital: country.capital ? country.capital[0] : 'Undefined',
                  subregion: country.subregion ? country.subregion : 'Undefinded',
                  area: country.area,
                  population: country.population
              };
          })
      await Country.bulkCreate(countries)
        dbCountries = await Country.findAll({
           include: [Activity]
          })
      }
    
    return dbCountries
  } catch(error){
     console.log( error)
  }
}

const getCountriesByName = async (name) => {
  try {
      const countryByName = await Country.findAll({
          where: {
              name: {
                  [Op.iLike] : `%${name}%` //macheo parcial ignorando mayusculas
              }
          },
          include: [Activity]
      })
      return countryByName
  } catch (error) {
      console.log(error)
  }
}
const getAllCountriesName = async () => {

    try {
        const countryByName = await Country.findAll({
            attributes: ['name','id'],
            order: [['name', 'ASC']],
           
        })
     
        return countryByName
    } catch (error) {
        console.log(error)
    }
  }
const getCountryById = async (id) => {
    try {
        let country = await Country.findByPk (id.toUpperCase(), {
            include: {model: Activity},
            });
            
           return country;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  getCountries,
  getCountriesByName,
  getCountryById,
  getAllCountriesName
};

