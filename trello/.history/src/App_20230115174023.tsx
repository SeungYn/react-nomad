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
import Board from './Components/Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    // setToDos((todos) => {
    //   const copy = [...todos];
    //   copy.splice(srcIndex, 1);
    //   copy.splice(desIndex!, 0, draggableId);
    //   return copy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((i) => (
            <Board key={i} toDos={toDos[i]} boardId={i} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
