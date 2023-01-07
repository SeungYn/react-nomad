import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// function ToDoList() {
//   const [value, setValue] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setToDoError('');
//     setValue(e.currentTarget.value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(e);
//     if (value.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log('submit');
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type='text'
//           value={value}
//           onChange={onChange}
//           placeholder='Write a to go'
//         />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  todo: string;
  Email: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const { register, watch, handleSubmit, formState, setError } = useForm<IForm>(
    {
      defaultValues: {
        Email: '@naver.com',
      },
    }
  );
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        'password1',
        { message: 'Password are not the same' },
        { shouldFocus: true }
      );
    }
    setError('extraError', { message: 'Server offline' });
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('todo', {
            required: 'todo required',
            validate: (value) => {
              console.log(value);
              return '!value.includes('nicoa')';
            },
            minLength: {
              value: 4,
              message: 'Your password is too short',
            },
          })}
          type='text'
          placeholder='Write a to go'
        />
        <span>{formState.errors.Email?.message}</span>
        <input
          {...register('Email', {
            required: 'vlftnvlftn',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          type='text'
          placeholder='Write a to go'
        />
        <input
          {...register('password1', {
            required: 'password input',
          })}
          type='password'
        />
        <span>{formState.errors.password1?.message}</span>
        <input
          {...register('password2', {
            required: 'password input',
          })}
          type='password'
        />

        <span>{formState.errors.password2?.message}</span>
        <button>Add</button>
        <span>{formState?.errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
