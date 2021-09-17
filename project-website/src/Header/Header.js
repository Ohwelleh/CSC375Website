import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuBar from './MenuBar';

const HeaderBar = styled.div`
   display: grid;
   position: relative;
   z-index: 1;
   grid-template-columns: 10% 70% 17%;
   grid-column-gap: 2%;
   background-color: green;
   box-shadow: 0 5px 15px 10px rgba(0, 0, 0, 0.2);
`;

const MenuContainer = styled.div`
  justify-self: left;
  align-self: center;
`;

const TitleContainer = styled.div`
  justify-self: center;
`;

const DisclaimerContainer = styled.div`
  align-self: end;
  justify-self: end;
  width: fit-content;
`;

const Disclaimer = styled.p`
  font-size: 15px;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 1.5%;
  padding-top: 1.5%;
  color: white;
  font-style: normal;
`;

function Header() {
  return(
    <HeaderBar>
      <MenuContainer>
        <MenuBar />
      </MenuContainer>
      <TitleContainer>
        <HeaderTitle>Group 1 Analyst </HeaderTitle>
      </TitleContainer>
      <DisclaimerContainer>
        <Disclaimer>
          Disclaimer: This website was developed for a course project.
        </Disclaimer>
      </DisclaimerContainer>
    </HeaderBar>
  )
}

export default Header