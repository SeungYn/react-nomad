import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

function DraggbleCard({ todo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={i}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default DraggbleCard;

const Card = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
  user-select: none;
`;
