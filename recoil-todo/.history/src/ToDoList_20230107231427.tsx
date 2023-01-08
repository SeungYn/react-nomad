import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
interface IForm {
  toDo: string;
  test: string;
}
function ToDoList() {
  const { register, watch, handleSubmit, formState, setError, setValue } =
    useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('toDo', {
            required: 'Please writes a To Do',
          })}
          type='text'
          placeholder='Write a to go'
        />
        <button>Add</button>
      </form>
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
