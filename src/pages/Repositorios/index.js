import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/Navbar"
import { StyleRepo, StyledImg } from '../Repositorios/styles'
import { loadRepo } from '../../data/repo';
import repositorio from '../../assets/img/repositorio.png';
import gitrepo from '../../assets/img/gitrepo.png'


function Repositorios() {
const repo = loadRepo();  
  return (
    <>
      <Navbar />
      <StyleRepo>
      <main class="container">
          <div class="my-3 p-3 bg-body rounded shadow-sm  ">
            <h6 class="border-bottom pb-2 mb-0 cor1">Repositórios</h6>
            {repo.map((repos) => (
              <div class="d-flex text-muted pt-3">
                <img class="mr-3" src={repositorio} alt="" width="48" height="48" />
                <p class="pb-3 mb-0 small lh-sm border-bottom">
                  <strong class="d-block text-dark">{repos.name}</strong>
                  {repos.description}
                </p>
                <a target="_blank" href={`https://github.com/${repos.full_name}`}><StyledImg src={gitrepo} alt=""  width="20px" height="20px"/></a>
              </div>
            ))}
          </div>
        </main>
      </StyleRepo>
    </>
  )
} export default Repositorios