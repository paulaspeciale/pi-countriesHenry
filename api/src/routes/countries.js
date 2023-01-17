const { Router } = require("express");
require("dotenv").config(); // para trabajar con variables del archivo .env
const router = Router();




const {getCountries,getCountriesByName,getCountryById,getAllCountriesName} = require( '../utils/getCountries.js');
const {orderByName,orderByPopulation} =require ('../utils/orderByCountries.js')

/*GET /countries:
En una primera instancia deberán traer todos los países desde restcountries 
y guardarlos en su propia base de datos y luego ya utilizarlos desde allí 
(Debe retonar sólo los datos necesarios para la ruta principal)
Obtener un listado de los paises.
GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado */
router.get('/', async(req,res)=>
//si aplicara un middleware para una sola ruta pj va  router.get('/', ACA ,async(req,res)=>
{   
  const {name} = req.query; 
  try{       
    if(name){
      const countryByName= await getCountriesByName(name);
      countryByName?  res.status(200).send(countryByName): res.send(404).send('Country not found')}
    else { const allCountries = await getCountries(); 
           res.status(200).send(allCountries)}
   }catch(error){ res.status(400).send(error)}
})

/* GET /countries/{idPais}:
Obtener el detalle de un país en particular
Debe traer solo los datos pedidos en la ruta de detalle de país
Incluir los datos de las actividades turísticas correspondientes*/
router.get('/:id', async (req, res) => {
    const  id  = req.params.id;
    // req.params -> objeto que contiene los valores pasados por medio de la url
    try{
    let countryById = await getCountryById(id);
     //   console.log( countryById) 
    if (countryById) {
        res.status(200).send(countryById);
    } else {
        res.status(404).json('No country was found'); 
    }}
    catch(error){ res.status(400).send(error)}
});


router.get('/names/all', async(req,res)=>{
   try{
    const allNames = await getAllCountriesName();
    
    res.status(200).json(allNames)}
    catch(error){console.log(error)}
})
router.get('/order/:orderParam', async(req,res)=>{
  const  param  = req.params.orderParam;//alphabetical-population
  const type = req.query.type
  const continentName=req.query.continentName
  //console.log('ruta->'+continentName)
 //http://localhost:3001/countries/order/alphabetical?type=DESC
  if(param==='alphabetical'){
   const result = await orderByName(type,continentName )
   res.status(200).json(result)
  }
  //http://localhost:3001/countries/order/population?type=DESC
  if(param==='population'){
    const result = await orderByPopulation(type,continentName)
    res.status(200).json(result)
   }
})

module.exports = router