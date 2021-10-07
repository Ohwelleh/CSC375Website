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
    Paragraph: `CARSA QuickPass is designed to accelerate and facilitate the vaccine verification process of patrons accessing the University of Victoria’s (UVIC) Center for Athletics, Recreation and Special Abilities (CARSA). This goal is achieved by integrating each patron’s vaccination status into a database under CARSA’s ownership. The current system consists of two CARSA employees stationed at the facility entrance to manually validate incoming patron’s vaccination status. Given the substantial amount of traffic incoming to CARSA every day, substantial improvements can be made in the allocation of human resources through the implementation of CARSA QuickPass to replace this redundant and repetitive verification process.\n
                CARSA QuickPass is a desktop application through which CARSA employees can verify the vaccination status of patrons. The information of vaccination status is stored in a provided database. Also included, is an online vaccination verification system implemented within the Vikes Active Living website. This project serves to benefit both CARSA employees and all patrons. The key objectives of CARSA QuickPass are to minimize entry wait times, and increase employee productivity in other areas or needs of CARSA.`,

  }

  return (
    <ProjectContainer>
      <Card Name={ProjectItems.Name} Paragraph={ProjectItems.Paragraph} />
    </ProjectContainer>
  )

}

export default Project