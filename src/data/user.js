
function saveUserData(data){
  localStorage.setItem("user",JSON.stringify(data))
}

function loadUserData(){
 return JSON.parse(localStorage.getItem("user"))
}

export {saveUserData, loadUserData}