const axios = require("axios")
const { Country, Activity } = require('../db')
const { Op } = require('sequelize');


//param ASC or DESC
const orderByName = async (type, continentName) => {
   if(continentName){
    console.log('funcion orderby'+continentName)
    try {
        let ordered = await Country.findAll({
            order: [['name', type]],
            where:{continents:continentName},
            include: [Activity]
      
        });
       
        return ordered
    } catch (error) {
        console.log( error)
    }
   }else{
    try {
        let ordered = await Country.findAll({
            order: [['name', type]],
            include: [Activity]
      
        });
       
        return ordered
    } catch (error) {
        console.log( error)
    }}
};


const orderByPopulation = async (type,continentName) => {
   if(continentName){
    try {
        let ordered = await Country.findAll({
            order: [['population', type]],
            include: [Activity],
            where:{continents:continentName}
           
        });
        return ordered
    } catch (error) {
        console.log( error)
    }
   }
   else{
    try {
        let ordered = await Country.findAll({
            order: [['population', type]],
            include: [Activity]
          
           
        });
        return ordered
    } catch (error) {
        console.log( error)
    }}
};

module.exports = {
    orderByName,
    orderByPopulation
};
  
  