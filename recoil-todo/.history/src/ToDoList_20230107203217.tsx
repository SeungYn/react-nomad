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
}

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
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
            minLength: {
              value: 4,
              message: 'Your password is too short',
            },
          })}
          type='text'
          placeholder='Write a to go'
        />
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
          {...register('password', {
            required: 'password input',
          })
          type='password'
        />
        <span>{formState.errors.Email?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
