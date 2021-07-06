import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/Navbar"
import seguidores from "../../assets/img/seguidores.png"
import { loadFollowing } from '../../data/following';
import { StyleSeguindo } from '../Seguindo/seguindo'
import Logout from '../../components/logout/index'

function Seguindo() {
  const following = loadFollowing();
  return (
    <>
      <Navbar />
      <StyleSeguindo>
        <main class="container">
          <div class="my-3 p-3 bg-body rounded shadow-sm  ">
            <h6 class="border-bottom pb-2 mb-0 cor1">Seguindo</h6>
            {following.map((following) => (
              <div class="d-flex text-muted pt-3">
                <img class="mr-3" src={following.avatar_url} alt="" width="48" height="48" />
                <p class="pb-3 mb-0 small lh-sm border-bottom">
                  <strong class="d-block text-dark">{following.login}</strong>
                  {following.login}
                </p>
              </div>
            ))}
          </div>
        </main>
      </StyleSeguindo>
    </>

  )
} export default Seguindo