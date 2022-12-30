import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const animation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg)
  }
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
