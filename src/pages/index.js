import * as React from "react"
import styled from 'styled-components'
import '../css/index.css'

const PageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`

const ProfilePicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Heading = styled.h1`
  font-size: 3.8rem;
`

const Subheading = styled.h2`
  font-size: 2.6rem;
`

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <Heading>Stephen Hwang</Heading>
      <Subheading>— The Developer you've been looking for </Subheading>
      <ProfilePicture src="https://stephenhwang.me/pictures/stephenpp.JPG" />
    </PageLayout>
  )
}

export default IndexPage
