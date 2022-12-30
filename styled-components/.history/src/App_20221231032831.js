import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Text = styled.span`
  font-size: 36px;

  color: ${(props) => props.theme.textColor};
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
