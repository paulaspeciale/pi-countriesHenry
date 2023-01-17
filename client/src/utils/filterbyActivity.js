export function filterByActivities(array,activityName){
  let arrayFiltered=[];

  if(activityName==='') {return array} 
    
  for(let i=0; i<array.length; i++){
    if(array[i].activities.length>0){
      for(let j=0; j<array[i].activities.length; j++){ 
          if(array[i].activities[j].name.includes(activityName))
            arrayFiltered.push(array[i]) 
      }
    }
  }
  return arrayFiltered ;
}
