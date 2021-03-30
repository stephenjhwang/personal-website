import React from "react"
import Link from "gatsby-link"
import gatsbyIcon from '../images/icons/icon.png'
import styled from 'styled-components'

const Icon = styled.img`
    height: 100px;
    width: 100px;
`

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Icon src={gatsbyIcon} />
      <Icon src={gatsbyIcon} />
      <Icon src={gatsbyIcon} />
    </div>
  )
}