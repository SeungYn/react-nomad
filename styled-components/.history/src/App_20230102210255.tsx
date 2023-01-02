import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

function App() {
  const [value, setVaule] = useState('');
  const onChagne = () => {};
  return (
    <div>
      <form>
        <input type='text' value={value} placeholder='username' />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
