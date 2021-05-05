import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/inter";
import "@fontsource/merriweather";

import Resume from "../assets/stephen-hwang-resume.pdf";

import "../css/index.scss";

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
`;

const HeadingContainer = styled.div`
  grid-column: span 3;

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;
const Caption = styled.p`
  letter-spacing: 0.4rem;
  font-size: 1.3rem;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  text-align: center;
`;

const TileContainer = styled.div``;

const TileLink = styled(Link)``;

const TileLinkAsset = styled.a``;

// markup
const IndexPage = () => {
  return (
    <>
      <PageLayout>
        <HeadingContainer>
          <h1>
            Hi,
            <br />
            I'm Stephen.
          </h1>
        </HeadingContainer>

        <TileContainer>
          <TileLink to="/about">
            <StaticImage
              objectFit="contain"
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
              objectFit="contain"
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
              objectFit="contain"
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
              objectFit="contain"
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
