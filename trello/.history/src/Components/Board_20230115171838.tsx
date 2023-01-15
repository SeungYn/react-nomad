import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
function Board() {
  return (
    <Droppable droppableId='one'>
      {(magic) => {
        return (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((todo, i) => (
              <DraggbleCard key={todo} todo={todo} index={i} />
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
