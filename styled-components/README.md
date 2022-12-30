#노마드 코더

기존 컴포넌트 스타일은 유지하면서 html 요소만 바꾸고 싶을 때는 as 를 사용하면됨

```jsx
import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father>
      <Btn as='a'>Log in</Btn>
    </Father>
  );
}

export default App;
```

button이 아닌 a 태그가됨

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/129455f5-58d1-4d5b-9350-f369f5b0b721/Untitled.png)

attr을 이용하면 html속성을 변경시킬수 있음

```jsx
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
```

keyframes를 이용하여 animation 효과를 만들수 있음

```jsx
const animation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg)
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
`;
```

vscode-styled-components 를 설치하면 자동완성해줌

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70dbf0f7-0845-4b19-93b0-bbe35988fc60/Untitled.png)

theme이란 기본적으로 모든 색상들을 가지고 있는 object 이것을 이용해서 스타일을 전역적으로 사용가능

```jsx
const darkTheme = {
  textColor: 'white',
  backgroundColor: '#111',
};

const lightTheme = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

오롷게 사용가능

```jsx
color: ${(props) => props.theme.textColor};
```
