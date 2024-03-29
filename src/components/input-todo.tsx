import { useEffect } from "react";
import { ITodo } from "../App";
import { useForm, SubmitHandler } from "react-hook-form";

interface IInputTodo {
  editItem: ITodo | undefined;
  onFinish: (input: ITodo) => void;
}

interface IUseFormInput {
  todoValue: string;
}

export default function InputTodo({ editItem, onFinish }: IInputTodo) {
  const { register, handleSubmit, reset, setValue } = useForm<IUseFormInput>();

  useEffect(() => {
    if (editItem?.todoValue) {
      setValue("todoValue", editItem.todoValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem]);

  const onSubmit: SubmitHandler<IUseFormInput> = (data) => {
    if (!data.todoValue) return;

    const newTodo: ITodo = {
      index: new Date().valueOf(),
      todoValue: data.todoValue,
    };
    onFinish(newTodo);
    reset();
  };

  return (
    <div>
      <form name="inputForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Todo List</label>
        <br />
        <input {...register("todoValue")} />
        <button type="submit">{editItem ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}
