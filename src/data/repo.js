
function saveRepo(data){
  localStorage.setItem("repo",JSON.stringify(data))
}

function loadRepo(){
 return JSON.parse(localStorage.getItem("repo"))
}

export {saveRepo, loadRepo}