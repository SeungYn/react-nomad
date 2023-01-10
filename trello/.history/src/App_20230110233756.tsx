import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId='one'>
          {(magic) => {
            console.log(magic);
            return (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId='first' index={0}>
                  {(magic) => (
                    <Card
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      One
                    </Card>
                  )}
                </Draggable>
              </Board>
            );
          }}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
