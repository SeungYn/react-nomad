import React, { useState } from 'react';

function ToDoList() {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Write a to go'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
