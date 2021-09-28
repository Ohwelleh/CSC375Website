import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  margin-top: 0.5%;
`;


function Project() {

  const ProjectItems = {

    Name: 'Project Description',
    Paragraph: 'This section is currently underdevelopment and will be updated once the charter is finished.',

  }

  return (
    <ProjectContainer>
      <Card Name={ProjectItems.Name} Paragraph={ProjectItems.Paragraph} />
    </ProjectContainer>
  )

}

export default Project