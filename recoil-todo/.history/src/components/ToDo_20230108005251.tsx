import { IToDo } from '../atoms';

export default function ToDo({ text, category }: IToDo) {
  const onClick = (newCategory: IToDo['category']) => {};
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
