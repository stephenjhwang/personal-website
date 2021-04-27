import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Socials from '../components/socials'
import TopNav from '../components/topnav'
import "@fontsource/inter"
import "@fontsource/merriweather"
import '../css/index.css'

const PageLayout = styled.main`
  display: grid;
  height: calc(100vh - 64px - 10%);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 5% 20px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TileImage = styled.img`
  height: 100%;
  width: 100%;
`

const HeadingContainer = styled.div`
  grid-column: span 3;

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`

const TileLink = styled(Link)`
  height: 100%;
  width: 100%;
`

const Heading = styled.h1`
  font-size: 6rem;
  margin: 0;
`

// markup
const IndexPage = () => {
  return (
  <>
    <TopNav />
    <PageLayout>
      <HeadingContainer>
        <Heading>Hi,<br/>I'm Stephen.</Heading>
      </HeadingContainer>
      <TileLink to="/about">
        <TileImage src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      </TileLink>
      <TileLink to="/404">
        <TileImage src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      </TileLink>
      <TileLink to="/404">
        <TileImage src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      </TileLink>
      <TileLink to="/404">
        <TileImage src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      </TileLink>
    </PageLayout>
  </>
  )
}

export default IndexPage
