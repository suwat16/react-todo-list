import React, { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, todoInput]);
    setIsEditTodo(false);
  };

  const handleEdit = (index: number) => {
    console.log(index);
    setTodoInput(todoList[index]);
    setIsEditTodo(true);
  };

  const handleDelete = (index: number) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }

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

          <button type="submit">{isEditTodo ? "Edit" : "Add"}</button>
        </form>
        <br />
        {todoList.map((todoValue, index) => {
          return (
            <div key={index}>
              {todoValue}
              <button onClick={() => handleEdit(index)}>edit</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
