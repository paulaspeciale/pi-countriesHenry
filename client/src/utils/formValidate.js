export  function formValidate (input,allActivities){
  let errors = {flag:false};
  if(!input.name){
    errors.name="A title must be defined";
    errors.flag=true
  }else
    if(!/^[a-zA-Z ,.]*$/.test(input.name)){
      errors.title="Title must contain only letters, spaces, the (,) or (.) "
      errors.flag=true}
      for (let i=0 ;i<allActivities.length;i++){
        if(input.name===allActivities[i].name){
          errors.name="Activities names can't be duplicated  "
          errors.flag=true}
    }
   
  if(!/^[0-9]*$/.test(input.difficulty)||!input.difficulty){ 
    errors.difficulty="You need to add a difficulty and it must be a positive number"
    errors.flag=true}
    else
      if(input.difficulty<0||input.difficulty>5){
        errors.difficulty="Difficulty must be between 1 and 5";
        errors.flag=true
        }
        
  if(!/^[0-9]*$/.test(input.duration)||!input.duration ||input.duration==='e'){
    errors.duration="You need to add duration and it must be a number";
    errors.flag=true} 
                
  if(!input.season){
    errors.season="A season must be chosen"
    errors.flag=true}
                         
  if(input.countries.length===0){    
    errors.countries="A Country must be chosen"
    errors.flag=true
}
                     //    console.log(errors)
  return errors;
}

