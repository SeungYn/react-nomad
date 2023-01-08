import { atom, selector } from 'recoil';
export type categories = 'TO_DO' | 'DOING' | 'DONE';
export enum Categories {
  TODO = 1,
  DOING,
  DONE,
}
export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TODO,
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
    return toDos.filter((i) => {
      console.log(i.category, category);
      return i.category === category;
    });
  },
});
