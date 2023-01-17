import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL,GET_COUNTRY_BY_NAME,ORDER_BY_ALPHABETICAL, 
        ORDER_BY_POPULATION,FILTER_BY_CONTINENT,GET_ALL_ACTIVITIES_NAMES,FILTER_BY_ACTIVITY } from '../actions/index'

import {filterByContinents} from '../utils/filterbyContinent';
import {filterByActivities} from '../utils/filterbyActivity.js';
//ERROR_ALL_COUNTRIES}

const initialState = {
    allCountries: [],
    allCountriesCopy: [],
    allActivities: [],
    countryDetail:[],
    allCountriesNames:[]
    //errorTitle:'',
    //errorDetail:'',
}

export default function rootReducer (state = initialState, action) {
  switch(action.type){
    case GET_ALL_COUNTRIES:
     //console.log(action.payload)
      return {...state,
        allCountries: action.payload,
        allCountriesCopy:action.payload};

    case GET_COUNTRY_DETAIL:
   //  console.log(action.payload)
    return {...state,
         countryDetail:[action.payload]}
    case GET_COUNTRY_BY_NAME:
      return {...state,
        allCountries:action.payload,
      //  errorTitle:'', //limpio los errores
       // errorDetail:''          
      }
      case ORDER_BY_ALPHABETICAL:
        return {...state,
          allCountries: action.payload,
        };
        case  ORDER_BY_POPULATION:
          return {...state,
            allCountries: action.payload,
          };
          case  FILTER_BY_CONTINENT:
        let array=  state.allCountriesCopy
        let result = filterByContinents(array,action.payload)
      
          return {...state,
              allCountries:result
            };
      case 'GET_ALL_CONTINENTS_NAME':{
        return {...state,allCountriesNames:action.payload
        }
      }
      case GET_ALL_ACTIVITIES_NAMES:
     
      return{ 
        ...state,
        allActivities:action.payload
      }
      case FILTER_BY_ACTIVITY:
      
        const resultActivities =filterByActivities(state.allCountries, action.payload)
        
        return{ 
          ...state,
          allCountries:resultActivities
        }
       /* 
        
            
            
            
        //case CREATE_RECIPE:            
         case ERROR_GETTITLE:
                       const response = action.payload;
                        return{
              ...state,
              errorTitle: response
            }
                
              //case CREATE_RECIPE:            
         case ERROR_GETDETAIL:
            const responseDetail = action.payload;
              return{
                 ...state,
                errorDetail: responseDetail
              }
       
        */     
        default:
            return {...state};
    }
}