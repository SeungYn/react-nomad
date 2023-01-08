import { IToDo } from '../atoms';

export default function ToDo({ text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      {category !== '' && <button>To Do</button>}
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}
