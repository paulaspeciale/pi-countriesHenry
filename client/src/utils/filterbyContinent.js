export  function filterByContinents(array,continentp){
  let arrayFiltered=[];
  if(continentp==="") {return array} //devuelve el array completo, sin filtrado
   //porque no se ha seleccionado ninguna opcion aun
  for(let i=0; i<array.length; i++){
    if(array[i].continents ==continentp )
      arrayFiltered.push(array[i]) 
  } 
  return  arrayFiltered  ;
}
