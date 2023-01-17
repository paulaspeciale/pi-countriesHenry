
import React,{ useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {getCountryDetail} from '../../actions/index'
import style from './DetailCountry.module.css'
/* en que esta el area??? km
[ ] Actividades turísticas con toda su información asociada */
export default function DetailCountry(props){
  const dispatch=useDispatch();


  useEffect(()=>{ //debe ser asincronica

    dispatch(getCountryDetail(props.match.params.id));},[props.match.params.id, dispatch])

  const countryDetail=useSelector((state)=> state.countryDetail)
  

return(
  <div>
    {countryDetail[0]
    ?<div className={style.detailContainer}>
    <br></br>
        <div className={style.detailInfo}><img src={countryDetail[0].flag} alt="Country Flag" ></img>
        <h1>{countryDetail[0].name}</h1>
        <p><strong>Id:</strong> {countryDetail[0].id}</p>
        <p><strong>Capital:</strong> {countryDetail[0].capital} </p>
        <p><strong>Continent:</strong>  {countryDetail[0].continents} </p>       
        <p><strong>Subregión:</strong> {countryDetail[0].subregion} </p>
        <p><strong>Area:</strong> {countryDetail[0].area.toLocaleString('es-ES', {style: 'unit', unit: 'kilometer'})}²</p>
        <p><strong>Population:</strong> {countryDetail[0].population.toLocaleString('es-ES')}</p> </div>
      
        {countryDetail[0].activities?<div className={style.activityInfo}>{countryDetail[0].activities.map(el=>
          <div key={el.name}>
          <h1>Actividades: </h1>
          <p><strong>Name:</strong> {el.name}</p>
          <p><strong>Difficulty:</strong>{el.difficulty}</p>
          <p><strong>Duration:</strong> {el.duration}</p>
          <p><strong>Season:</strong>  {el.season}</p></div>
        )}</div>:<p></p>}
        <Link to='/home'>go Back</Link>
    </div>
    :<p>Country Detail Not Found</p>}
  </div>
)}
