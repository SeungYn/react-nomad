import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const animation = keyframes`
  from {
    transform:rotate(0deg);
    border-radius:0px;
  }
  to{
    transform:rotate(360deg);
    border-radius:100px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <Father as='header'>
      <Box>
        <span>🤑</span>
      </Box>
    </Father>
  );
}

export default App;
