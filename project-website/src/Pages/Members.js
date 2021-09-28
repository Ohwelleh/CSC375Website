import React from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { MemberItems } from './MemberData'

const MemberContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 25% 25%;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 10px;
  grid-row-gap: 40px;
  margin-top: 1%;
`;


const MemberInfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  background-color: #ffaa00;
  padding: 3%;
  padding-right: 5px;
  border-radius: 25px;
`;

const MemberName = styled.h1`
  font-size: 30px;
  justify-self: center;
`;

const MemberInfo = styled.p`
  justify-self: center;
  font-size: 15px;
  font-weight: 600;
`;


function Members() {
  return(
    <MemberContainer>
      {MemberItems.map((item) => {
        return(
          <MemberInfoContainer>
            <Center>
              <Avatar size="2xl" src={item.Photo} />
            </Center>
            <MemberName>{item.Name}</MemberName>
            <MemberInfo> {item.Paragraph}</MemberInfo>
          </MemberInfoContainer>
        );
      })}
    </MemberContainer>
  )
}

export default Members