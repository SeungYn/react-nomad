html
'''
<input {...register('Email')} type='text' placeholder='Write a to go' />
'''

register으로 input from을 등록해줌
watch으로 input 변화를 감지하고 콘솔로그에 출력해줌
handleSubmit 은 우리가 등록해 놓은 함수를 실행시켜줌
하지만 onValid 함수를 등록해줘야함 이 함수는 폼이 유효할때만 실행시켜줌
formState는 form 상태 에러를 보여줌
setError은 특정 에러를 발생시켜줌ㄴ
'''
const { register, watch, handleSubmit, formState,setError } = useForm();
'''

validate return 부분에서 문자열을 리턴하면 자동으로 에러로 인식되게 됨
'''
<input
{...register('todo', {
required: 'todo required',
validate: (value) => {
console.log(value);
return !value.includes('nicoa');
},
minLength: {
value: 4,
message: 'Your password is too short',
},
})}
type='text'
placeholder='Write a to go'
/>
'''

이렇게 Object로 여러개 넣을 수 있음
'''
<input
{...register('todo', {
required: 'todo required',
validate: {
noNicoa: (value) => {
console.log(value);
return 'ㅁ';
},
},
minLength: {
value: 4,
message: 'Your password is too short',
},
})}
type='text'
placeholder='Write a to go'
/>

'''

인터페이스 중에서 특정 값의 타입만 가져오고 싶을때
'''
const onClick = (newCategory: IToDo['category']) => {};
'''\\\\\\

selectors
derived state란 state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값
selector은 지정된 atom을 주시하고 있으면 값이 변형되면 함수를 실행시켜주고 값을 내뱉어줌
이러면 atom에 있던얘들을 변형시키지 않고 독립적으로 변형시켜 원하는 값을 얻을 수 있음 원본 데이터를 유지하면서 새로운 데이터를 만들어줌
'''
export const toDoSelector = selector({
key: 'toDoSelector',
get: ({ get }) => {
const toDos = get(toDoState);
return [
toDos.filter((i) => i.category === 'DOING'),
toDos.filter((i) => i.category === 'DONE'),
toDos.filter((i) => i.category === 'TO_DO'),
];
},
});
'''
