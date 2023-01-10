import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
`;

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId='one'>
          {(magic) => {
            console.log(magic);
            return (
              <ul ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId='first' index={0}>
                  {(magic) => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                      <span {...magic.dragHandleProps}>💩</span>
                      One
                    </li>
                  )}
                </Draggable>
              </ul>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
