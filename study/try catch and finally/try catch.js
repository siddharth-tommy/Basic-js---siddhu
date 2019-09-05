function tryCatchFunction(){
  try{
    alrt("check")
  }
  catch(err){
    alert(err)
    alert(err.message)
  }
}