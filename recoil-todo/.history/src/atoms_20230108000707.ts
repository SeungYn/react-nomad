import { atom } from 'recoil';

interface IToDo {
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
  id: number;
}
export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
