import { IToDo } from '../atoms';

export default function ToDo({ text }: IToDo) {
  return (
    <li>
      {text}
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}
