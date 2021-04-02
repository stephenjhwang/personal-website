import * as React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

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

export default function TopNav() {
  return (
    <Nav style={{ color: `teal` }}>
      <NavElement to="/about">About</NavElement>
      <NavElement to="/about">About</NavElement>
      <NavElement to="/about">About</NavElement>
      <NavElement to="/about">About</NavElement>
    </Nav>
  )
}