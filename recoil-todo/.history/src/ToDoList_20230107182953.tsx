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

function ToDoList() {
  const { register } = useForm();
  console.log(register('todo'));
  return (
    <div>
      <form>
        <input type='text' placeholder='Write a to go' />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
