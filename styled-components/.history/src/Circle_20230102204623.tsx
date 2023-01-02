import styled from 'styled-components';

const Container = styled.div<CircleProp>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

const x = (a: number, b: number) => a + b;

interface CircleProp {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor }: CircleProp) {
  return <Container bgColor={bgColor}></Container>;
}

interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name}`;
sayHello({ name: '123', age: '123' });
export default Circle;
