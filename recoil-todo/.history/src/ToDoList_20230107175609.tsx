import React, { useState } from 'react';

function ToDoList() {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <form>
        <input type='text' value={value} placeholder='Write a to go' />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
