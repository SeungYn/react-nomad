import { IToDo } from '../atoms';

export default function ToDo({ text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && <button>To Do</button>}
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}
