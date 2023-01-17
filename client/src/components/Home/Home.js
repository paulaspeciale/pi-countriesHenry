import {React} from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from './Home.module.css';
import { Link } from "react-router-dom"
import CardCountries from '../Card/CardCountries'
import Pagination from '../Pagination/Pagination'
import SearchBar from '../SearchBar/SearchBar'

import { InfinitySpin } from  'react-loader-spinner'

import {getAllCountries,orderByAlphabetical,orderByPopulation,filterByContinent,
  getActivitiesNames,filterByActivity } from '../../actions/index'




export default function Home (){
    const dispatch =useDispatch();

    const allCountries = useSelector((state)=>state.allCountries);
    const allActivities = useSelector((state)=>state.allActivities);
//    const errorTitle = useSelector((state)=>state.errorTitle);

    const [currentPage, setCurrentPage]= useState(1); 
    const [countriesPerPage]=useState(9); 
    
    const indexOfLastCountry = currentPage*countriesPerPage;
    const indexOfFirstCountry= indexOfLastCountry-countriesPerPage;
       
    const currentCountries=allCountries.slice(indexOfFirstCountry ,indexOfLastCountry);
    
    const [input, setInput]= useState({name:''});  
    //const [input, setInput]=useState({name:''})
   
    const pagination=(pageNumbers) =>{
     
      setCurrentPage(pageNumbers);
    }
    
   
useEffect(()=>{
  dispatch(getAllCountries());
  dispatch(getActivitiesNames())
},[dispatch]) 
      

function handleChange(e){
const continentSelected=e.target.value;
setInput({name:continentSelected})
}

function handleOrderByAlphabetical(e){
 //console.log(input)
  if (e.target.value)dispatch(orderByAlphabetical(e.target.value, input));
  pagination(1);
 }
 function handleOrderByPopulation(e){
 
  if (e.target.value)dispatch(orderByPopulation(e.target.value,input));
  pagination(1);
 }
 function handleFilterByContinent(e){

  dispatch (filterByContinent(input.name))
   pagination(1);
 }

 function handleFilterByActivity(e){

  dispatch (filterByActivity(e.target.value))
   pagination(1);
 }

 function handleReset(e){
  
  dispatch(getAllCountries());
 }




return (
  <div className={style.homeContainer} >
  <SearchBar/>
  <Link  className={style.createActivity} to='/create'>Create Activity</Link>  
  <br></br>
 <div className={style.selectMenus}>
  <select onClick={(e)=>handleOrderByAlphabetical(e)}>
  <option value=''>Alphabetical Order</option>
  <option value='ASC'>Alphabetical ASC</option>
  <option value='DESC'>Alphabetical DESC</option>
  </select>
  <select onClick={(e)=>handleOrderByPopulation(e)}
         >
  <option value =''>Order by Population</option>
  <option value='ASC'>Population ASC</option>
  <option value ='DESC'>Population DESC</option>
  </select>

  <select onClick={(e)=>handleFilterByContinent(e)}
          onChange={(e)=>handleChange(e)}>
  <option value =''>Filter by Continents</option>
  <option value='Africa'>Africa</option>
  <option value='Antarctica'>Antarctica</option>
  <option value='Asia'>Asia</option>
  <option value='Europe'>Europe</option>
  <option value='North America'>North America</option>
  <option value='Oceania'>Oceania</option>
  <option value='South America'>South America</option>
  </select>
  <p className={style.pHome}>Filter by tourist </p>
  <select onClick={(e)=>handleFilterByActivity(e)}>
  <option value=''>Activities names</option>
  {allActivities&&allActivities.map(el =>
    <option key={el.name} value={el.name}>{el.name}</option>)}
  </select></div>
  <br></br>
  <button onClick={()=>handleReset()}>Reset Filters</button>
  {allCountries.length===0&&<InfinitySpin width='200' color="#4fa94d"/> }
  
  <br></br> 
  <Pagination countriesPerPage={countriesPerPage}
              allCountries={allCountries.length}
              pagination={pagination} // setea la pagina 
              currentPage={currentPage}/>
  <br></br>
  
    <div className={style.homeCard}>{ 
    (currentCountries.length===0)
     ?<p  className={style.pHomeError}>Not found</p>
     :currentCountries.map(el =>{return( 
      
      <div className={style.homeCard}  key={el.name}>
      <CardCountries name={el.name}
                     continents={el.continents}
                     flag={el.flag}
                     id={el.id}
                     population={el.population}
                   /> 
      </div>)})
    }</div> 

     
</div>)}
