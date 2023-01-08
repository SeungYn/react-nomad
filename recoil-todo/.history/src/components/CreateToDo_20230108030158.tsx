import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
  test?: string;
}

export default function CreateToDo() {
  const { handleSubmit, setValue, formState, setError, register } =
    useForm<IForm>();
  const setTodos = useSetRecoilState(toDoState);
  const todoCategory = useRecoilValue(categoryState) as number;
  const onSubmit = (data: IForm) => {
    setValue('toDo', '');

    setTodos((oldTodos) => [
      { text: data.toDo, category: todoCategory as number, id: Date.now() },
      ...oldTodos,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('toDo', {
          required: 'Please writes a To Do',
        })}
        type='text'
        placeholder='Write a to go'
      />

      <button>Add</button>
    </form>
  );
}
