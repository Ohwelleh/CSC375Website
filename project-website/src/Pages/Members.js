import React from 'react';
import styled from 'styled-components';
import { MemberItems } from './MemberData'

const MemberContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 10px;
  grid-row-gap: 40px;
  margin-top: 1%;
`;

const MemberInfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
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
  word-wrap: break-word;
  font-size: 15px;
  width: 425px;
  margin-right: 4px;
`;

const MemberImage = styled.div`
  background-color: gray;
  justify-self: center;
  border-radius: 30px;
  height: 100px;
  width: 100px;
`;


function Members() {
  return(
    <MemberContainer>
      {MemberItems.map((item) => {
        return(
          <MemberInfoContainer>
            <MemberImage>{item.Photo}</MemberImage>
            <MemberName>{item.Name}</MemberName>
            <MemberInfo> {item.Paragraph}</MemberInfo>
          </MemberInfoContainer>
        );
      })}
    </MemberContainer>
  )
}

export default Members