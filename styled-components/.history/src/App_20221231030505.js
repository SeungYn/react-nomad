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
