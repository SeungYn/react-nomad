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

const Text = styled.span`
  font-size: 36px;
  color: blue;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Text} {
    transition: transform 1s linear;
    color: red;
    &:hover {
      transform: scale(4);
    }
  }
`;

function App() {
  return (
    <Father as='header'>
      <Box>
        <Text>bbb</Text>
      </Box>
      <Text>aaa</Text>
    </Father>
  );
}

export default App;
