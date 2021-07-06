import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import git from '../../assets/img/logoazul.png'
import logout2 from '../../assets/img/logout2.png'
import { LogoutImg, LogoutLink } from './styles'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  " >
      <div class="container-fluid" >
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src={git} width="30" height="30" class="d-inline-block align-top" alt="" />
          GitHub
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0  navseg">
            <li class="nav-item">
              <Link class="nav-link" to="/home">Início</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Repositorios" tabindex="-1" >Repositórios</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Seguidores" tabindex="-1">Seguidores</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Seguindo" tabindex="-1">Seguindo</Link>
            </li>
          </ul>
          <div  >
            <LogoutLink onClick={() => localStorage.clear()} class="nav-link" to="/" tabindex="-1">logout</LogoutLink>
            <LogoutImg src={logout2} alt="" />
          </div>
        </div>
      </div>

    </nav>

  );
};

export default Navbar;
