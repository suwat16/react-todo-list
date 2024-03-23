import React, { useState } from "react";

interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoInput, setTodoInput] = useState<string>();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoInput) {
      return;
    }

    if (isEditTodo) {
      const newTodoList = todoList.map((v) => {
        if (v.todoValue === todoInput) {
          return {
            ...v,
            todoValue: todoInput,
          };
        }
        return v;
      });

      console.log(newTodoList);

      setTodoList(newTodoList);
      setIsEditTodo(false);
      setTodoInput("");
      return;
    }

    const todoInputData: ITodo = {
      index: new Date().valueOf(),
      todoValue: todoInput,
    };

    setTodoList([...todoList, todoInputData]);
    setIsEditTodo(false);
    setTodoInput("");
    return;
  };

  const handleEdit = (index: number) => {
    const findTodo = todoList.find((v) => v.index === index);
    setTodoInput(findTodo?.todoValue);
    setIsEditTodo(true);
  };

  const handleDelete = (index: number) => {
    const newTodoList = todoList.filter((v) => v.index !== index);
    setTodoList(newTodoList);
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

          <button type="submit">{isEditTodo ? "Edit" : "Submit"}</button>
        </form>
        <br />
        {todoList.map((value) => {
          return (
            <div key={value.index}>
              {value.todoValue}
              <button onClick={() => handleEdit(value.index)}>edit</button>
              <button onClick={() => handleDelete(value.index)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
