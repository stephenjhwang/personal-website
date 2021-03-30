import * as React from "react"
import styled from 'styled-components'
import Socials from '../components/socials'
import TopNav from '../components/topnav'
import '../css/index.css'

const PageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 64px);
`

const ProfilePicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Heading = styled.h1`
  font-size: 3.8rem;
  margin: 0;
`

const Subheading = styled.h2`
  font-size: 2.6rem;
  margin: 0;
`

// markup
const IndexPage = () => {
  return [
    <TopNav />,
    <PageLayout>
      <Heading>Stephen Hwang</Heading>
      <Subheading>— The Developer you've been looking for </Subheading>
      <ProfilePicture src="https://stephenhwang.me/pictures/stephenpp.JPG" />
      <Socials/>
    </PageLayout>
  ]
}

export default IndexPage
