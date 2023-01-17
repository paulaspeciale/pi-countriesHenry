import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  {getCountryByName} from "../../actions"
import style from './SearchBar.module.css'



export default function SearchBar(){
    const dispatch=useDispatch();
    const [name, setName]=useState("");
  

    function handleInputchange(e){
        e.preventDefault();
        setName(e.target.value)
    }
     function  handleSubmit(e){        
       e.preventDefault(); 
       dispatch(getCountryByName(name))    
       setName("Search..."); 
    }
    return (
        <div className={style.searchBarContainer}>
           
            <input  type="text"
                   value={name}
                   placeholder="Search..."
                   onChange={(e)=>handleInputchange(e)}>
            </input>
            <button variant="dark" 
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}>Search</button>
         
        </div>
    )

}