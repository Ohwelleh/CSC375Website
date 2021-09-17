import React from 'react';
import styled from 'styled-components';
import { MemberItems } from './MemberData'

const MemberContainer = styled.div`
  margin-top: 2%;
  margin-left: 1%;
`;

const MemberInfoContainer = styled.div`
  display: grid;
  padding-bottom: 3%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(2, min-content);
`;

const MemberName = styled.h1`
  font-size: 30px;
  grid-row: 1;
`;

const MemberInfo = styled.p`
  font-size: 15px;
  grid-column: 1;
  grid-row: 2;
`;

const MemberImage = styled.div`
  grid-column: 2;
  grid-row: 2/3;
  background-color: gray;
  height: 200px;
  width: 200px;
`;


function Members() {
  return(
    <MemberContainer>
      {MemberItems.map((item) => {
        return(
          <MemberInfoContainer>
          <MemberName>{item.Name}</MemberName>
          <MemberInfo> {item.Paragraph}</MemberInfo>
          <MemberImage>{item.Photo}</MemberImage>
          </MemberInfoContainer>
        );
      })}
    </MemberContainer>
  )
}

export default Members