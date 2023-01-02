import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;
const H1 = styled.h1``;
function App() {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
