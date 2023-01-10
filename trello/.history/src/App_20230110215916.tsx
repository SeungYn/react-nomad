import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
                    <li {...magic.draggableProps} {...magic.dragHandleProps}>
                      One
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId='second' index={1}>
                  {(magic) => (
                    <li {...magic.draggableProps} {...magic.dragHandleProps}>
                      two
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
