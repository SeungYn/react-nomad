import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

function DraggbleCard({ todo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic, snapshot) => {
        console.log(snapshot);
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
    props.isDragging ? 'tomato' : props.theme.cardColor};
  user-select: none;
`;
