import React from 'react';
import styled from 'styled-components';

const ComingSoon = styled.div`
  margin-top: 3%;
  margin-left: 2%;
  position: absolute;
  padding-bottom: 100%;
  width: 100%;
`;

const Text = styled.h1`
  font-size: 40px;
`;

function Contact() {
  return(
    <ComingSoon>
      <Text>
        Our group can be contacted at the following Email
      </Text>
      <Text>
        Email: "ToDo"
      </Text>
    </ComingSoon>
  )
}

export default Contact