import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
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
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return { ...oldToDos, [source.droppableId]: boardCopy };
      });
    } else {
    }
    if (!destination) return;
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
