import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
const Container = styled.div``;
const H1 = styled.h1``;
function App() {
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
