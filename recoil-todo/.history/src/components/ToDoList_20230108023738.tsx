import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  Categories,
  categories,
  categoryState,
  toDoSelector,
  toDoState,
} from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  //const todos = useRecoilValue(toDoState);
  const todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    //console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To DO</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <ul>
        {todos.map((i) => (
          <ToDo key={i.id} {...i} />
        ))}
      </ul>
    </div>
  );
}

// interface IForm {
//   todo: string;
//   Email: string;
//   password1: string;
//   password2: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const { register, watch, handleSubmit, formState, setError } = useForm<IForm>(
//     {
//       defaultValues: {
//         Email: '@naver.com',
//       },
//     }
//   );
//   const onValid = (data: IForm) => {
//     console.log('괜찮아요!');
//     if (data.password1 !== data.password2) {
//       setError(
//         'password1',
//         { message: 'Password are not the same' },
//         { shouldFocus: true }
//       );
//     }
//     //setError('extraError', { message: 'Server offline' });
//   };
//   console.log(formState.errors);
//   return (
//     <div>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register('todo', {
//             required: 'todo required',
//             validate: {
//               noNicoa: (value) => {
//                 console.log(value);
//                 return true;
//               },
//             },
//             minLength: {
//               value: 4,
//               message: 'Your password is too short',
//             },
//           })}
//           type='text'
//           placeholder='Write a to go'
//         />
//         <span>{formState.errors.Email?.message}</span>
//         <input
//           {...register('Email', {
//             required: 'vlftnvlftn',
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: 'Only naver.com emails allowed',
//             },
//           })}
//           type='text'
//           placeholder='Write a to go'
//         />
//         <input
//           {...register('password1', {
//             required: 'password input',
//           })}
//           type='password'
//         />
//         <span>{formState.errors.password1?.message}</span>
//         <input
//           {...register('password2', {
//             required: 'password input',
//           })}
//           type='password'
//         />

//         <span>{formState.errors.password2?.message}</span>
//         <button>Add</button>
//         <span>{formState?.errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
