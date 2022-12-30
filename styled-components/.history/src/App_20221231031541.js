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

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    transition: transform 1s linear;

    &:hover {
      transform: scale(4);
      font-size: 1000px;
    }
  }
`;

function App() {
  return (
    <Father as='header'>
      <Box>
        <Emoji>🤑</Emoji>
      </Box>
      <Emoji>aaa</Emoji>
    </Father>
  );
}

export default App;
