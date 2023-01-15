import { Droppable } from 'react-beautiful-dnd';
function Board() {
  return (
    <Droppable droppableId='one'>
      {(magic) => {
        return (
          <Board ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((todo, i) => (
              <DraggbleCard key={todo} todo={todo} index={i} />
            ))}
            {magic.placeholder}
          </Board>
        );
      }}
    </Droppable>
  );
}

export default Board;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;
