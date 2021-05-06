import React from "react";
import styled from "styled-components";

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
`;

const ProjectInfo = styled.div``;

const ProjectImage = styled.img`
  height: 250px;
  width: 250px;
`;

const ProjectTitle = styled.h2`
  font-size: 2.0rem;
`

const ProjectDesc = styled.p`
  font-size: 1.6rem;
`

export default function Project(props) {
  return (
    <ProjectTile>
      <ProjectImage alt="" src={props.image} />
      <ProjectInfo>
        <ProjectTitle>
          {props.title}
        </ProjectTitle>
        <br />
        <ProjectDesc>
          {props.description}
        </ProjectDesc>
      </ProjectInfo>
    </ProjectTile>
  );
}
