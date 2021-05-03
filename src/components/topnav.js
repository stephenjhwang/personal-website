import * as React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/*
const Nav = styled.nav`
  display: grid;
  height: 64px;
  background-color: #3e3e3e;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  font-size: 1.6rem;
`

const NavElement = styled(Link)`
  text-align: center;
  color: #f3f3f3;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    color: red;
    transition: 0.25s
  }
`
*/

const Nav = styled.nav`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
`

const LinkSVG = styled(Link)`
  width: 100%;
  height: 100%;
  display: block
`

export default function TopNav() {
  return (
    <Nav>
      <LinkSVG from="*" to="/">
        <ArrowBackIcon style={{ fontSize: 40, color: "black" }} />
      </LinkSVG>
    </Nav>
  )
}