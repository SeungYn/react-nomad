import { atom, selector } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'hello2' },
    ],
    doing: [],
    done: [],
  },
});
