const { Router } = require("express")
const router = Router();
const { Activity, Country } =require("../db.js")



/*   POST /activities:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos, relacionada con los países correspondientes*/
router.post('/', async (req, res) => {
  let {name, difficulty, duration, season, countries} = req.body;

 
  try {
    let activity = await Activity.findOrCreate({
      where: {
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
          }
      });
  //const [user, created] -> Activity.findOrCreate(...)
    let countriesDB = await Country.findAll({        
          //where: { id:countries} 
        where: { name:countries}  }); 
       
      countriesDB?.forEach(el=>el.addActivity(activity[0]))
     // activity.addCountries(countriesDB)
      res.json('Success')
  }catch (error) {

      res.status(404).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    let activitiesNames = await Activity.findAll({ attributes: ['name']});
    res.send(activitiesNames)
} catch (error) {
    console.log( error)
}
})
/*
router.delete('/:id',async (req,res) =>{
  const {id} = req.params
  try {
      let activityToDelete = await  Activity.findByPk(id)
      await activityToDelete.destroy()
      res.status(200).send('Activity deleted')
  } catch (err) {
      res.status(400).send('Activity not found')
  }
})
router.put('/:id', async (req,res,next) => {
     const {id} = req.params
     como un post
}


*/

module.exports = router;