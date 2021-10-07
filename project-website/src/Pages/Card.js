import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  justify-self: center;
`;

const SectionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const SectionContainer = styled.div`
  width: fit-content;
  max-width: 1300px;
  margin: 1%;
`;

const SectionContent = styled.p`
  font-size: 25px;
  margin-left: 6px;
  white-space: pre-line;
`;

const CardContainer = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-template-rows: min-content min-content;
  background-color: #ffaa00;
  border-radius: 25px;
`;

function Card(props){
  return(
    <CardContainer>
      <TitleContainer>
        <SectionTitle>{props.Name}</SectionTitle>
      </TitleContainer>
      <SectionContainer>
        <SectionContent>{props.Paragraph}</SectionContent>
      </SectionContainer>
    </CardContainer>
  );
}

export default Card;