import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/inter";
import "@fontsource/merriweather";
import '../css/index.scss';

const PageLayout = styled.main`
  display: grid;
  height: calc(100vh - 10%);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px 1fr 1fr;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 5% 20px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const HeadingContainer = styled.div`
  grid-column: span 3;

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`
const Caption = styled.p`
  font-size: 1.3rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  text-align: center;
`

const TileContainer = styled.div`

`

const TileLink = styled(Link)`
`

// markup
const IndexPage = () => {
  return (
  <>
    <PageLayout>
      <HeadingContainer>
        <h1>Hi,<br/>I'm Stephen.</h1>
      </HeadingContainer>

      <TileContainer>
        <TileLink to="/about">
          <StaticImage 
            objectFit="contain"
            alt="" 
            src="https://stephenhwang.me/pictures/stephenpp.JPG"
            placeholder="blurred"
          />
        </TileLink>
        <Caption>About</Caption>
      </TileContainer>

      <TileContainer>
        <TileLink to="/about">
          <StaticImage 
            objectFit="contain"
            alt="" 
            src="https://stephenhwang.me/pictures/stephenpp.JPG"
            placeholder="blurred"
          />
        </TileLink>
        <Caption>Projects</Caption>
      </TileContainer>

      <TileContainer>
        <TileLink to="/about">
          <StaticImage 
            objectFit="contain"
            alt="" 
            src="https://stephenhwang.me/pictures/stephenpp.JPG"
            placeholder="blurred"
          />
        </TileLink>
        <Caption>Resume</Caption>
      </TileContainer>

      <TileContainer>
        <TileLink to="/about">
          <StaticImage 
            objectFit="contain"
            alt="" 
            src="https://stephenhwang.me/pictures/stephenpp.JPG"
            placeholder="blurred"
          />
        </TileLink>
        <Caption>Photography</Caption>
      </TileContainer>

    </PageLayout>
  </>
  )
}

export default IndexPage
