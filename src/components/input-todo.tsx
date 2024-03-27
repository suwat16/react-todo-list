import React from "react";
import { ITodo } from "../App";

const InputTodo = ({
  inputRef,
  onFinish,
  editItem,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  onFinish: (input: ITodo) => void;
  editItem: ITodo | undefined;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    if (editItem) {
      editItem.todoValue = inputRef.current.value;
      onFinish(editItem);
      inputRef.current.value = "";
      return;
    }

    const newTodo: ITodo = {
      index: new Date().valueOf(),
      todoValue: inputRef.current?.value || "",
    };

    onFinish(newTodo);
    inputRef.current!.value = "";
    return;
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
