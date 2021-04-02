import * as React from "react"
import styled from 'styled-components'
import Socials from '../components/socials'
import TopNav from '../components/topnav'
import "@fontsource/inter"
import "@fontsource/merriweather"
import '../css/index.css'

const PageLayout = styled.main`
  display: grid;
  height: calc(100vh - 64px);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  max-width: 1200px;
  margin: auto;
`

const ProfilePicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const HeadingContainer = styled.div`
  grid-column: span 3;
`

const Heading = styled.h1`
  font-size: 6rem;
  margin: 0;
`

const Subheading = styled.h2`
  font-size: 6rem;
  margin: 0;
`

// markup
const IndexPage = () => {
  return [
    <TopNav />,
    <PageLayout>
      <HeadingContainer>
        <Heading>Hi,</Heading>
        <Subheading>I'm Stephen.</Subheading>
      </HeadingContainer>
      <ProfilePicture src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      <Socials/>
    </PageLayout>
  ]
}

export default IndexPage
