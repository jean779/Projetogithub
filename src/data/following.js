function saveFollowing(data){
  localStorage.setItem("Following",JSON.stringify(data))
}

function loadFollowing(){
 return JSON.parse(localStorage.getItem("Following"))
}

export {saveFollowing, loadFollowing}