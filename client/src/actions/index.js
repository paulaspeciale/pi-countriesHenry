import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const ORDER_BY_ALPHABETICAL ='ORDER_BY_ALPHABETICAL'
export const  ORDER_BY_POPULATION='ORDER_BY_POPULATION'
export const GET_ALL_ACTIVITIES_NAMES='GET_ALL_ACTIVITIES_NAMES'

export const FILTER_BY_ACTIVITY ="FILTER_BY_ACTIVITY"


export const FILTER_BY_CONTINENT ='FILTER_BY_CONTINENT'
//export const FILTER_BY_STATUS ='FILTER_BY_STATUS'
export const ORDER_BY ="ORDER_BY"

export const ERROR_ALL_COUNTRIES = 'ERROR_ALL_COUNTRIES'


export const ERROR_GETDETAIL='ERROR_GETDETAIL'
export const ERROR_GET_BY_NAME ='ERROR_GET_BY_NAME'

export function  getAllCountries(){
    
   return async function (dispatch){
       try{ 
        let json = await axios.get('http://localhost:3001/countries'); //conexion al back 
     
        return dispatch ({
            type:GET_ALL_COUNTRIES,
            payload:json.data 
        })
    }catch (error){
    
    return dispatch({
        type: ERROR_ALL_COUNTRIES,
        payload:" Recipes: "+error.response.statusText})

        }
    }
}

export function getCountryDetail(id){
    
    return async function (dispatch){
    
        try{
            var json = await axios.get('http://localhost:3001/countries/'+id)
            //console.log(json.data)
            return dispatch({
                type:GET_COUNTRY_DETAIL,
                payload:json.data
            })
        }catch(error){
            return dispatch({
                type: ERROR_GETDETAIL,
                payload:error.response.data
            })}
    }
}

export function getCountryByName(payload){
    
    return async function(dispatch){
        try {                                                 //query
            var json = await axios.get('http://localhost:3001/countries?name='+payload);
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload:json.data
            })
        }catch(error){
          //  console.log(err.response.data)
            return dispatch({
                type: ERROR_GET_BY_NAME,
                payload:error.response.data
            })
    }
}}
//
export function orderByAlphabetical(type, input){
   
    return async function(dispatch){
        try {                                                 //query
            var json = await axios.get('http://localhost:3001/countries/order/alphabetical?type='+type+'&continentName='+input.name);
       //    console.log(json)
            return dispatch({
                type: ORDER_BY_ALPHABETICAL,
                payload:json.data
            })
        }catch(error){
         console.log(error)
    }
}
}
export function orderByPopulation(type,input){
    return async function(dispatch){
        try {                                                 //query
            var json = await axios.get('http://localhost:3001/countries/order/population?type='+type+'&continentName='+input.name);
            return dispatch({
                type: ORDER_BY_POPULATION,
                payload:json.data
            })
        }catch(error){
         console.log(error)
    }
}
}
export function filterByContinent(payload){
  
    return async function(dispatch){
        return dispatch({
            type: FILTER_BY_CONTINENT,
            payload
        })
}}

export function getAllCountriesName(){
    return async function(dispatch){
        try {
            var json = await axios.get('http://localhost:3001/countries/names/all');
            
            return dispatch({
                type:'GET_ALL_CONTINENTS_NAME',
                payload:json.data
            })
        }catch(error){
         console.log(error)
    }
}
}


export function createActivity(payload){
//payload - input del form
    return async function(dispatch){
        try{   
        const response = await axios.post('http://localhost:3001/activities', payload)
        return response;
    
    }catch(error){console.log(error)} 
  }  
}
export const getActivitiesNames= () => { 
    return function(dispatch) {
        return fetch('http://localhost:3001/activities')
          .then(response => response.json()) 
          .then(json => {
            dispatch({ type: GET_ALL_ACTIVITIES_NAMES, payload: json });})
          .catch((err) => {console.log(err)})
      };
   
};
//
export function filterByActivity(payload){
  
    return async function(dispatch){
        return dispatch({
            type: FILTER_BY_ACTIVITY,
            payload
        })
}}