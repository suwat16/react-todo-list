import React, { useState } from "react";

const InputTodo = ({
  onTodoInput,
}: {
  onTodoInput: (todo: string) => void;
}) => {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTodoInput(todoInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo List</label>
        <br />
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
