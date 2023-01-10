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
              <ul>
                <Draggable draggableId='first' index={0}>
                  {() => <li>One</li>}
                </Draggable>
                <Draggable draggableId='second' index={1}>
                  {() => <li>two</li>}
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
