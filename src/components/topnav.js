import * as React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: grid;
  grid-auto-columns: 
  height: 64px;
  background-color: red;
`

export default function TopNav() {
  return (
    <Nav style={{ color: `teal` }}>
      <Link to="/about">About</Link>
      <Link></Link>
      <Link></Link>
    </Nav>
  )
}