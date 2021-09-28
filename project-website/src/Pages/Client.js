import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ClientContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  margin-top: 0.5%;
`;


function Client() {

  const ClientItems = {

    Name: 'CARSA Administration',
    Paragraph: 'The Center for Athletics Recreations and Special Abilities Facility(CARSA) at the University of Victoria is struggling to handle the verification of members vaccination status. This is causing extremely long line ups and requiring multiple staff members to be posted at the door for verifying. CARSA is looking for a more efficient and effective manner to verify members and save members vaccination status.',
  }

  return (
    <ClientContainer>
      <Card Name={ClientItems.Name} Paragraph={ClientItems.Paragraph} />
    </ClientContainer>
  )

}

export default Client