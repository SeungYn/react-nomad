import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import DraggbleCard from './Components/DragabbleCard';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    const desIndex = destination?.index;
    const srcIndex = source.index;
    setToDos((todos) => {
      const copy = [...todos];
      copy.splice(srcIndex, 1);
      copy.splice(desIndex!, 0, draggableId);
      return copy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
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
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
