import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
  test: string;
}

export default function CreateToDo() {
  const { handleSubmit, setValue, formState, setError, register } =
    useForm<IForm>();

  const onSubmit = (data: IForm) => {
    setValue('todo', '');
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
      <input
        {...register('test', {
          required: 'Please writes a To Do',
        })}
        type='text'
        placeholder='Write a to go'
      />
      <button>Add</button>
    </form>
  );
}
