import React from 'react';
import styled from 'styled-components';
import { MemberItems } from './MemberData'

const MemberContainer = styled.div`
  margin-top: 2%;
  margin-left: 1%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(6, auto);
`;

const MemberInfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

const MemberName = styled.h1`
  font-size: 30px;
`;

const MemberInfo = styled.p`
  font-size: 15px;
`;

const MemberImage = styled.div`
  grid-column: 2;
  background-color: gray;
`;


function Members() {
  return(
    MemberItems.map((item) => {
      return(
        <MemberContainer>
        <MemberInfoContainer>
        <MemberName>{item.Name}</MemberName>
        <MemberInfo> {item.Paragraph}</MemberInfo>
        </MemberInfoContainer>
        <MemberImage>Image location</MemberImage>
        </MemberContainer>
      );
    })
  )
}

export default Members