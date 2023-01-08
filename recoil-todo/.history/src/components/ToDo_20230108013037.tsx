import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo['category']) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      return oldToDos;
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
