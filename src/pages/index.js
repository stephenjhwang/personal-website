import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import ContactDialog from "../components/dialog";
import SEO from "../components/seo";
import "@fontsource/inter";
import "@fontsource/merriweather";

import Resume from "../assets/stephen-hwang-resume.pdf";

import "../css/index.scss";

const PageLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 3.5rem 1fr 1fr;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 45px 20px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 3.5rem 2.5rem 1fr 1fr;
  }
`;

const HeadingContainer = styled.div`
  grid-column: span 2;
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.4rem;
`;

const Caption = styled.p`
  letter-spacing: 0.4rem;
  font-size: 1.3rem;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  text-align: center;
`;

const TileContainer = styled.div``;

const TileLink = styled(Link)`
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const TileLinkAsset = styled.a`
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

// markup
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" keywords={[`landing`, `home`]} />
      <PageLayout>
        <HeadingContainer>
          <Heading>stephen hwang</Heading>
        </HeadingContainer>
        
        <ContactDialog />

        <TileContainer>
          <TileLink to="/about">
            <StaticImage
              alt=""
              src="../images/home/about-image.jpg"
              placeholder="blurred"
            />
          </TileLink>
          <Caption>about</Caption>
        </TileContainer>

        <TileContainer>
          <TileLink to="/projects">
            <StaticImage
              alt=""
              src="../images/home/projects-image.jpg"
              placeholder="blurred"
            />
          </TileLink>
          <Caption>projects</Caption>
        </TileContainer>

        <TileContainer>
          <TileLinkAsset href={Resume}>
            <StaticImage
              alt=""
              src="../images/home/resume-image.jpg"
              placeholder="blurred"
            />
          </TileLinkAsset>
          <Caption>resume</Caption>
        </TileContainer>

        <TileContainer>
          <TileLink to="/photography">
            <StaticImage
              alt="photography"
              src="../images/home/photography-image.jpg"
              placeholder="blurred"
            />
          </TileLink>
          <Caption>photography</Caption>
        </TileContainer>
      </PageLayout>
    </>
  );
};

export default IndexPage;
