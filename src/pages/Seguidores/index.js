import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/Navbar"
import seguidores from "../../assets/img/seguidores.png"
import { loadFollowers } from '../../data/followers';
import { StyleSegui} from '..//Seguidores/styles'

function Seguidores() {
  const followers = loadFollowers();
  return (
    <>
      <Navbar />
      <StyleSegui>
      <main class="container">
        <div class="my-3 p-3 bg-body rounded shadow-sm  ">
          <h6 class="border-bottom pb-2 mb-0 cor1">Seguidores</h6>
          {followers.map((follower) => (
            <div class="d-flex text-muted pt-3">
            <img  class="mr-3 circular" src={follower.avatar_url} alt="" width="48" height="48" />
            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-dark">{follower.login}</strong>
              {follower.login}
            </p>
            </div>
          ))}
        </div>
      </main>
      </StyleSegui> 
    </>
  )
} export default Seguidores