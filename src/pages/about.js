import React from "react"
import TopNav from '../components/topnav'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo";
import '../css/index.scss'

const Layout = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px 1fr;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 50px 20px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px 1fr 1fr;
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
  font-size: 1.8rem;
  line-height: 2.8rem;
  overflow: auto;
`

export default function About() {
  return (
    <>
      <SEO title="About" keywords={[`about`, `information`]} />
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
            Hello, I recently graduated as a Computer Science student at the University of Waterloo. At my time there I have explored a wide breadth of topics ranging from distributed systems to artificial intelligence, and have taken on 2 years worth of internships! After graduation I had a short, but valuable time at Nuro where I worked on the infrastructure to support robot teleoperations. Currently I am looking for full-time opportunities in backend development, infrastructure and microservices in Canada or the US!
            <br/><br/>
            Besides software, I enjoy all forms of food-tainment, from Kitchen Nightmares to YouTube cooking channels. Unsurprisingly, my two favourite movies are Ratatouille and Chef! 
          </Text>
        </TextContainer>
      </Layout>
    </>
  )
}