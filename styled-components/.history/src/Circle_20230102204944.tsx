import styled from 'styled-components';

const Container = styled.div<CircleProp>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

const x = (a: number, b: number) => a + b;

interface CircleProp {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProp) {
  return <Container bgColor={bgColor} borderColor={borderColor}></Container>;
}

interface PlayerShape {
  name: string;
  age: string;
}

export default Circle;
