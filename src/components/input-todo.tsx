import React from "react";
import { ITodo } from "../App";

const InputTodo = ({
  submit,
  editItem,
}: {
  submit: (input: ITodo) => void;
  editItem: ITodo | undefined;
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: ITodo = {
      index: new Date().valueOf(),
      todoValue: inputRef.current?.value || "",
    };

    submit(newTodo);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo List</label>
        <br />
        <input ref={inputRef} type="text" name="todoInput" />
        <button type="submit">{editItem ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
};

export default InputTodo;
