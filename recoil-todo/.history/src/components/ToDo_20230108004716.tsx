import { IToDo } from '../atoms';

export default function ToDo({ text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && <button>DOING</button>}
      {category !== 'TO_DO' && <button>To Do</button>}
      {category !== 'DONE' && <button>Done</button>}
    </li>
  );
}
