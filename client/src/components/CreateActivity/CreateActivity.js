
import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{getAllCountriesName,createActivity} from '../../actions'
import {formValidate} from '../../utils/formValidate'
import style from './CreateActivity.module.css'

export default function CreateActivity(){
  const dispatch=useDispatch();

  const allCountriesNames= useSelector((state)=>state.allCountriesNames)
 
  const allActivities= useSelector((state)=>state.allActivities)
  const history=useHistory();
  const [errors, setErrors] = useState({flag:false})
  const [input, setInput]=useState({
    name:'', //no pueda contener simbolos y que no pueda ser repetido
    difficulty:0,//1-5
    duration:'', //no pueda exceder una cantidad de horas
    season:'', 
    countries:[]
    })

  useEffect(()=>{
       dispatch( getAllCountriesName());
  },[dispatch])  

  function handleChange(e){
 
      setInput({
        ...input, [e.target.name]:e.target.value } )
       
    setErrors(formValidate(
      {...input, [e.target.name]:e.target.value  }        
        ,allActivities))
  }

  function handleSelectCountries(e){

    setErrors(formValidate(
      {...input,
         countries:[...input.countries, e.target.value] } , allActivities))
      if(!input.countries.includes(e.target.value)){
          setInput({
            ...input,
            countries:[...input.countries, e.target.value]
      })}
  } 

  function handleSelectSeason(e){
    setErrors(formValidate(
      {...input, [e.target.name]:e.target.value },allActivities))
        if(!input.season.includes(e.target.value)){
          setInput({
            ...input,
            [e.target.name]:e.target.value
      })}
  } 
  function handleSubmit(e){
   
    //e.preventDefault();
    let errorsa=  formValidate({
      ...input,[e.target.name]: e.target.value
    },allActivities)
    if(!errorsa.flag){
      dispatch(createActivity(input));
    
      alert("Success")
      setInput({
        name:'', 
        difficulty:0,
        duration:'', 
        season:'', 
        countries:[]
        }); 
    history.push('/home')
    }
    else {alert("Data is incomplete or incorrect")}
}
function handleReset (e){
  e.preventDefault();
 
  setInput({
    name:'', 
    difficulty:0,
    duration:'', 
    season:'', 
    countries:[]
    })
}
function handleDelete(e){
  e.preventDefault()
  setInput({...input,
    countries:input.countries.filter(el=> el!==e.target.value)})

   
}
  return(
    <div className={style.formContainer}>
          <form onSubmit={(e)=>handleSubmit(e)}>
      <h1 className={style.h1Form}>Create Activity</h1>
      <div><label>Name:</label>
      <input type='text'
             value={input.name}
             name="name"
             placeholder="ActivityName"
             onChange={handleChange}></input>
        {errors.name && (<p className={style.pError}>{errors.name}</p>)}</div>
      <div><label>Difficulty</label>
      <input type='number'
             value={input.difficulty}
             name="difficulty"
             placeholder="Difficulty"
             onChange={handleChange}></input>
        {errors.difficulty && (<p className={style.pError}>{errors.difficulty}</p>)}</div>
      <div><label>Duration</label>
      <input type='number'
      value={input.duration}
             name="duration"
             placeholder="number of hours"
             onChange={handleChange}></input>Hours</div>
      <div><label>Season</label>
        <select  name ='season' onChange={(e)=>handleSelectSeason(e)}>
          <option value="summer">summer</option>
          <option value="autumn">autumn</option>
          <option value="winter">winter</option>
          <option vallue="spring">spring</option>
        </select>
        {errors.season && (<p className={style.pError}>{errors.season}</p>)}
        {input.season&&<p className={style.pForm}>{input.season}</p>}</div>
     
  
     <div> <label>Country: </label> 
     <select onChange={(e)=>handleSelectCountries(e)}> 
     {allCountriesNames&&allCountriesNames.map(el=><option key={el.id} value={el.name}>{el.name}</option>)}
     </select>
     
        {errors.countries && (<p className={style.pError}>{errors.countries}</p>)}
        {input.countries&&input.countries.map(el => 
        <div key={el.id} className={style.countriesSelected}><p key={el.id}>{el} </p> 
            <button onClick={(e)=>handleDelete(e)} value={el}>x</button></div>)} </div>
        
      <div> <br></br>
      
      <button onClick={(e)=>handleReset(e)}>Reset</button>
      <button type="submit">Create Activity</button> 
        </div>             
      </form>
      <br></br>
      <Link to ='/home'>go Back</Link> 
        
    </div>
    )
}