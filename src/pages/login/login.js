import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AuthContext from '../../hooks/auth'
import login from "../../assets/img/login.png"
import { LogoContainer } from "./styles"
import axios from "axios"
import { useState, useEffect } from 'react'
import {saveUserData} from "../../data/user" 
import {useHistory} from 'react-router-dom'
import {saveFollowers} from '../../data/followers'
import {saveFollowing} from '../../data/following'
import {saveRepo} from '../../data/repo'

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  async function onClickedLogin() {
    if(username === ""){
      alert("Digite o nome do usuário")
      return
    }
    var resposta = await axios.get(`https://api.github.com/users/${username}`)
    var followers = await axios.get(resposta.data.followers_url)
    var following = await axios.get(`https://api.github.com/users/${username}/following`)
    var repos = await axios.get(`https://api.github.com/users/${username}/repos`)   
    var DadosDoUsuario = {
      login: resposta.data.login,
      name: resposta.data.name,
      email: resposta.data.email,
      location: resposta.data.location,
      company: resposta.data.company,
      bio: resposta.data.bio,
      followers_url: resposta.data.followers_url,
      avatar_url: resposta.data.avatar_url,
      following_url: resposta.data.following_url,
      organizations_url: resposta.data.organizations_url,
      starred_url: resposta.data.starred_url,
      public_repos: resposta.data.public_repos,
      public_gists: resposta.data.public_gists,
      followers: resposta.data.followers,
      following: resposta.data.following
   }
   console.log(resposta.data)
   saveUserData(DadosDoUsuario);
   saveFollowers(followers.data)
   saveFollowing(following.data)
   saveRepo(repos.data)
   history.push("/home")
  }
  function onChangeUsername(event){
    setUsername(event.target.value)
  }
  return (    
    <LogoContainer>
      <img src={login} alt="" />
      <input onChange={onChangeUsername} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="GitHub username" />
      <button onClick={onClickedLogin} type="button" class="btn btn-info">Entrar</button>
    </LogoContainer>
  )
} export default Login