import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
`;
function App() {
  return (
    <Father as='header'>
      <Box />
    </Father>
  );
}

export default App;
