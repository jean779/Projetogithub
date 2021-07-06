import styled from "styled-components"
import { Link } from "react-router-dom"
const Fontcolor = styled.div`
 li{
   color: white;
 }

`
const LogoutImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  margin-top: 3px;
  margin-left: -15px;
`
const LogoutLink = styled(Link)`
  color: white;
  margin-right: 20px;
`
export { Fontcolor, LogoutImg, LogoutLink }
