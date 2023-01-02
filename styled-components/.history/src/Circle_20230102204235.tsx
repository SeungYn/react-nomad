import styled from 'styled-components';

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

const x = (a: number, b: number) => a + b;

interface CircleProp {
  bgColor: string;
}

interface ContainerProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProp) {
  return <Container bgColor={bgColor}></Container>;
}

interface PlayerShape{
	name: string;
	age: string;
}

const sayHello = (playerObj) =>`Hello ${}` 

export default Circle;
