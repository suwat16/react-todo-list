import React, { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTodoList([...todoList, todoInput]);
  };

  return (
    <>
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
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
