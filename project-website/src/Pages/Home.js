import React from 'react';
import styled from 'styled-components';
import { HomeItems } from './HomeData';

const HomeContainer = styled.div`
  margin-top: 2%;
  margin-bottom: 3%;
  display: grid;
  grid-row-gap: 4%;
  justify-content: center;
  grid-template-rows: repeat(3, auto);
`;
const TitleContainer = styled.div`
`;
const SectionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const SectionContent = styled.p`
  margin-left: 10%;
  font-size: 25px;
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