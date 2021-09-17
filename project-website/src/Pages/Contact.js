import React from 'react';
import styled from 'styled-components';

const ComingSoon = styled.div`
  position: absolute;
  background-color: blue;
  padding-bottom: 100%;
  width: 100%;
`;

const Text = styled.h1`
  color: white;
  font-size: 100px;
`;

function Contact() {
  return(
    <ComingSoon>
      <Text>
        Contact Coming Soon!
      </Text>
    </ComingSoon>
  )
}

export default Contact