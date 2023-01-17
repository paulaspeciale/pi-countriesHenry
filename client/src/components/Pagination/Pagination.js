
export default function Pagination({countriesPerPage, allCountries,pagination,currentPage}){
    
    const pageNumbers=[];
    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i);
    } 
    
    function handleprev(){
      
        if(currentPage-1>0 ){
            pagination(currentPage-1)
        }else{
        
             alert ("Page number invalid")}
    }
    function handlenext(){
      
        if(currentPage-1<pageNumbers.length-1 ){
            pagination(currentPage+1)
        }else {
               alert ("Page number invalid")}
    }

        return(
            
        <nav>
          
            {allCountries>0&& <button variant="outline-dark" onClick={()=>handleprev()} >prev</button>    }
                  {pageNumbers.length>0&& pageNumbers.map(number=>(
                    <button variant="outline-dark" onClick={()=>pagination(number)}  key={number}> {number} </button> ))}
             {allCountries>0&&<button variant="outline-dark"  onClick={()=>handlenext()}>next</button> }
     
        </nav>)
    
}
