import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const onDragEnd = () => {};
  return <DragDropContext onDragEnd={onDragEnd}>
    <div>
      <Droppable droppableId='one'>
        {() => (<ul>
          <Draggable draggableId='first' index={0}>
            {()=> <li>One</li>}
          </Drag>
        </ul>)}
      </Droppable>
    </div>

  </DragDropContext>;
}

export default App;
