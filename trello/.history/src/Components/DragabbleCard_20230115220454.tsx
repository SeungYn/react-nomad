import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IDragabbleCardProps {
  toDoId: number;
  todoText: string;
  index: number;
}

function DraggbleCard({ todo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic, snapshot) => {
        return (
          <Card
            isDragging={snapshot.isDragging}
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {todo}
          </Card>
        );
      }}
    </Draggable>
  );
}

export default React.memo(DraggbleCard);

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  user-select: none;
  box-shadow: ${(props) => (props.isDragging ? '0px 2px 25px  black' : 'none')};
`;
