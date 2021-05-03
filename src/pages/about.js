import React from "react"
import Link from "gatsby-link"
import TopNav from '../components/topnav'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import '../css/index.scss'

const Layout = styled.main`
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

const HeadingContainer = styled.div`
  grid-column: span 3;

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`

const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    grid-column: span 2;
  }
`

const TextContainer = styled.div`
  grid-column: span 2;
`

const Text = styled.p`
  font-size: 2rem;
`

export default function About() {
  return (
    <>
      <TopNav/>
      <Layout>
        <HeadingContainer>
          <h1>
            About Me
          </h1>
        </HeadingContainer>
        <ImageWrapper>
          <StaticImage src="../images/about/me.JPG" alt="Picture of Stephen Hwang" />
        </ImageWrapper>
        <TextContainer>
          <Text>
            Hello, I am a 4th year Computer Science student at the Univeristy of Waterloo.
          </Text>
        </TextContainer>
      </Layout>
    </>
  )
}