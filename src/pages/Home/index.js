import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/Navbar"
import { StyleHome } from "./styles"
import { loadUserData } from '../../data/user';

function Home() {
  const userData = loadUserData();
  return (
    <>
      <Navbar />
      <StyleHome>
        <img class="bd-placeholder-img rounded-circle margin-top zoom zoom" width="140" height="140" src={userData.avatar_url} alt=""/>
        <h2 className="center">{userData.name}</h2>   
        <p className="center">{userData.location}</p>
        <h5 class="card-title pricing-card-title">{userData.following} <small class="text-muted fw-light">Seguindo</small></h5>
        <h5 class="card-title pricing-card-title">{userData.followers} <small class="text-muted fw-light">Seguidores</small></h5>
        <h5 class="card-title pricing-card-title">{userData.public_repos} <small class="text-muted fw-light">Repositorios</small></h5>
        <p>{userData.bio}</p>
      </StyleHome>
    </>
  )
} export default Home