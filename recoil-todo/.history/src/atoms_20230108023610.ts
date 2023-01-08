import { atom, selector } from 'recoil';
export type categories = 'TO_DO' | 'DOING' | 'DONE';
export enum Categories {
  'TO_DO',
  'DOING',
  'DONE',
}
export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((i) => i.category === category);
  },
});
