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
          flexDirection: "column",
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
        <br />
        {todoList.map((todoValue, index) => {
          return (
            <div key={index}>
              {todoValue}
              <button onClick={() => console.log("edit")}>edit</button>
              <button onClick={() => console.log("delete")}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
