import React from 'react';
import { Link } from "react-router-dom"
import style from './CardCountries.module.css'


export default function CardRecipe({name, flag, continents,id, population}){
  
    return (
      <div className={style.cardContainer}>
        <div className={style.card}>
        <img src={flag} alt="Country Flag" ></img>
        <br></br>
        <Link to={`/countries/${id}`}><h2>{name}</h2>  </Link>
        <p>Continent: {continents}</p>
        <p className={style.population}>Population: {population}</p>
       </div> 
      </div>
     
    );
}