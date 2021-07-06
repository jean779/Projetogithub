function saveFollowers(data){
  localStorage.setItem("Followers",JSON.stringify(data))
}

function loadFollowers(){
 return JSON.parse(localStorage.getItem("Followers"))
}

export {saveFollowers, loadFollowers}