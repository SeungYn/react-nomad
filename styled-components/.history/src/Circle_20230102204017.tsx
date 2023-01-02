import styled from 'styled-components';

const Container = styled.div<ContainerProps>``;

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

export default Circle;
