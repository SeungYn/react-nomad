import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

function App() {
  const [value, setVaule] = useState('');
  const onChagne = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <form>
        <input
          onChange={onChagne}
          type='text'
          value={value}
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
