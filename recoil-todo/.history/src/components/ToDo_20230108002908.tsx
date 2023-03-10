import { IToDo } from '../atoms';

export default function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>To Do</button>
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}
