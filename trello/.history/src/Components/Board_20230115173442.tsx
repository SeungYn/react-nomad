import { Droppable } from 'react-beautiful-dnd';
import DragabbleCard from './DragabbleCard';
import styled from 'styled-components';

interface IboardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IboardProps) {
  return (
    <Droppable droppableId={boardId}>
      <Title>{boardId}</Title>
      {(magic) => {
        return (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((todo, i) => (
              <DragabbleCard key={todo} todo={todo} index={i} />
            ))}
            {magic.placeholder}
          </Wrapper>
        );
      }}
    </Droppable>
  );
}

export default Board;

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h1``;
