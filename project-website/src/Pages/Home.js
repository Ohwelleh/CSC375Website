import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  margin-top: 0.5%;
`;


function Home() {

  const HomeItems = {

      Name: 'Uvic Student Enrollment Team Analyst',
      Paragraph: 'The University of Victoria’s(UVIC) current course enrollment process is dated, lackluster, and a complete nightmare. This is where the UVIC Student Enrollment Team comes in, we aim to tackle all the current issues with enrollment. Being an organization of UVIC students we are well versed in the nightmare of course enrollment, and dread it every term. While the enrollment process is needing more than a fresh coat of paint we are eager and ready for the challenge.',
    }

  return (
    <HomeContainer>
      <Card Name={HomeItems.Name} Paragraph={HomeItems.Paragraph} />
    </HomeContainer>
  )

}

export default Home