import {Link} from 'react-router-dom'
import style from './PageNotFound.module.css'
import img from '../../images/12708.jpg'

export default function pageNotFound(){

return(
   <div className={style.infoContainer}>
        
         <h1>404</h1>
         <h2>Page Not found</h2> 
       
        <img src={img} alt='Page not found'></img>
        <Link to ='/home'> go back</Link>
      
    </div>
)}