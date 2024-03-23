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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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

        {todoList.map((todoValue, index) => {
          return (
            <div key={index}>
              <h1>{todoValue}</h1>
              <button>edit</button>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
