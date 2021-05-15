import React from "react"
import TopNav from '../components/topnav'
import Gallery from '../components/gallery'
import styled from 'styled-components'
import SEO from "../components/seo";
import '../css/index.scss'

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 175px 1fr;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 50px 20px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 150px 1fr 1fr;
  }
`

const StyledGallery = styled(Gallery)`
  background-color: red;
  justify-self: start;
  display: grid;
` 

export default function Photography() {
  return (
    <>
      <SEO title="Photography" description="Personal Image Gallery" keywords={[`photography`, `gallery`, `images`, `pictures`]} />
      <TopNav/>
      <Layout>
        <h1>
          Photography
        </h1>
        <StyledGallery />
      </Layout>
    </>
  )
}