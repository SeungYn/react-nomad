import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
  toDo: string;
  test?: string;
}

export default function CreateToDo() {
  const { handleSubmit, setValue, formState, setError, register } =
    useForm<IForm>();
  const setTodos = useSetRecoilState(toDoState);
  const onSubmit = (data: IForm) => {
    setValue('toDo', '');

    setTodos((oldTodos) => [
      { text: data.toDo, category: 'TO_DO', id: Date.now() },
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
