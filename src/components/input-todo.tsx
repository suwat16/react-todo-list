import React from "react";

const InputTodo = ({
  getInputSubmit,
}: {
  getInputSubmit: (input: string) => void;
}) => {
  const inputRefs = React.useRef<{ [key: string]: HTMLInputElement | null }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getInputSubmit(inputRefs.current["todoInput"]?.value || "");
    // onTodoInput(todoInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo List</label>
        <br />
        <input
          ref={(ref) => (inputRefs.current["todoInput"] = ref)}
          type="text"
          name="todoInput"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
