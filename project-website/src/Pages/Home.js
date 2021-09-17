import React from 'react';
import styled from 'styled-components';
import { HomeItems } from './HomeData';

const HomeContainer = styled.div`
  margin-top: 2%;
  display: grid;
  grid-template-rows: repeat(6, auto);
`;
const TitleContainer = styled.div`
  justify-self: center;
`;
const SectionTitle = styled.h1`
  font-size: 20px;
`;

const SectionContent = styled.p`
  margin-left: 10%;
`;


function Home() {
  return (
    <HomeContainer>
      {HomeItems.map((item) => {
       return(
        <TitleContainer>
          <SectionTitle>
            {item.Name}
          </SectionTitle>
        <SectionContent>{item.Paragraph}</SectionContent>
        </TitleContainer>
       ); 
      })}
    </HomeContainer>
  )

}

export default Home