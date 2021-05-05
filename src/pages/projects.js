import React from "react"
import TopNav from '../components/topnav'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import '../css/index.scss'

const Layout = styled.main`
  display: grid;
  height: calc(100vh - 100px);
  max-height: 700px;
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

const ProjectTile = styled.div`
  display: grid;

`

const ProjectTitle = styled.h2`

`

const ProjectDescription = styled.div`

`

export default function About() {
  return (
    <>
      <TopNav/>
      <Layout>
        <HeadingContainer>
          <h1>
            Projects
          </h1>
        </HeadingContainer>
        <ProjectTile>
            <ProjectTitle>
                Title
            </ProjectTitle>
            <StaticImage alt="" src="../images/about/me.JPG" />
            <ProjectDescription>
                Description
            </ProjectDescription>
        </ProjectTile>
      </Layout>
    </>
  )
}