import React from "react";
import styled from "styled-components";
import LinkIcon from '@material-ui/icons/Link';

const ProjectTile = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  justify-items: start;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f0f2f575;
  -webkit-box-shadow: 5px 5px 10px 0px rgba(191,191,191,0.75);
  -moz-box-shadow: 5px 5px 10px 0px rgba(191,191,191,0.75);
  box-shadow: 5px 5px 10px 0px rgba(191,191,191,0.75);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const ProjectInfo = styled.div`
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const ProjectImage = styled.img`
  height: 250px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2.0rem;
  height: 2.5rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

const ProjectDesc = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
`

export default function Project(props) {
  return (
    <ProjectTile>
      <ProjectImage alt="" src={props.image} />
      <ProjectInfo>
        <ProjectTitle>
          <ProjectLink target="_blank" href={props.url || undefined} >
            {props.title} { props.url ? <LinkIcon /> : null }
          </ProjectLink>
        </ProjectTitle>
        <br />
        <ProjectDesc>
          {props.description}
        </ProjectDesc>
      </ProjectInfo>
    </ProjectTile>
  );
}
