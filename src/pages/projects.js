import React from "react";
import TopNav from "../components/topnav";
import styled from "styled-components";
import ProjectData from "../data/projects/project_data.json";
import ProjectComponent from "../components/project";

const Layout = styled.main`
  display: grid;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 50px 20px;
  gap: 50px;
`;

const HeadingContainer = styled.div`
  padding: 40px 0;
`;

export default function Projects() {
  return (
    <>
      <TopNav />
      <Layout>
        <HeadingContainer>
          <h1>Projects</h1>
        </HeadingContainer>
        {ProjectData.map((data, index) => {
          return (
            <ProjectComponent
              title={data.title}
              description={data.description}
              url={data.url}
              image={data.image}
              key={index}
            />
          );
        })}
      </Layout>
    </>
  );
}
