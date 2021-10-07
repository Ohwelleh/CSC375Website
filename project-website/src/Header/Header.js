import React from 'react';
import styled from 'styled-components';
import MenuBar from './MenuBar';

const HeaderBar = styled.div`
   display: grid;
   grid-template-columns: 5% 94.5%;
   padding-bottom: 0.5%;
   background-color: #00254a;
`;

const MenuContainer = styled.div`
  justify-self: left;
  align-self: center;
`;

const TitleContainer = styled.div`
  grid-column: 2;
  justify-self: center;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;


const Disclaimer = styled.p`
  font-size: 15px;
  word-wrap: break-word;
  color: white;
  justify-self: center;
`;

const ContactEmail = styled.p`
  font-size: 15px;
  color: white;
  justify-self: center;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  padding-top: 1.5%;
  justify-self: center;
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
        <HeaderTitle>The Devs</HeaderTitle>
        <ContactEmail>Contact Email: thedevs375@gmail.com</ContactEmail>
        <Disclaimer>
          Disclaimer: This website was developed for a course project.
        </Disclaimer>
        </TitleContainer>
    </HeaderBar>
  )
}

export default Header