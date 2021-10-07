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

      Name: 'The Devs',
      Paragraph: 'Each day new software is developed that aims to improve every person’s quality of life in one way or another. The Devs is one such organization with the goal of providing quality and secure software. Composed of young motivated individuals who are well versed in the struggles navigating the plethora of software solutions available, we are building an organization that can be trusted to deliver on our promises.',
    }

  return (
    <HomeContainer>
      <Card Name={HomeItems.Name} Paragraph={HomeItems.Paragraph} />
    </HomeContainer>
  )

}

export default Home