import { atom, AtomEffect, selector } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: ITodo[];
}

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

// const localStorageEffect =
//   <T>(key: string) =>
//   ({ setSelf, onSet }) => {
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//       setSelf(JSON.parse(savedValue));
//     }

//     onSet((newValue, _, isReset) => {
//       isReset
//         ? localStorage.removeItem(key)
//         : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'hello2' },
    ],
    doing: [],
    done: [],
    done1: [],
    done2: [],
  },
  effects: [localStorageEffect('test')],
});
