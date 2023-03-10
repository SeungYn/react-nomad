import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo['category']) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button onClick={() => onClick('DOING')}>DOING</button>
      )}
      {category !== 'TO_DO' && (
        <button onClick={() => onClick('TO_DO')}>To Do</button>
      )}
      {category !== 'DONE' && (
        <button onClick={() => onClick('DONE')}>Done</button>
      )}
    </li>
  );
}
