import styled from 'styled-components';

const Container = styled.div``;

const x = (a: number, b: number) => a + b;

interface CircleProp {
  bgColor: string;
}

function Circle({ bgColor }: CircleProp) {
  return <Container></Container>;
}

export default Circle;
