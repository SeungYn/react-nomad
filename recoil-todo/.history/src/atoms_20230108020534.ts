import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
  id: number;
}

export const categoryState = atom({
  key: 'category',
  default: 'TO_DO',
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((i) => i.category === 'DOING'),
      toDos.filter((i) => i.category === 'DONE'),
      toDos.filter((i) => i.category === 'TO_DO'),
    ];
  },
});
