import React, { useState } from "react";

interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<ITodo>();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoInput = inputRef.current?.value;

    if (isEditTodo) {
      const newTodoList = todoList.map((v) => {
        if (v.index === isEditTodo.index) {
          return {
            ...v,
            todoValue: todoInput,
          };
        }
        return v;
      });

      setTodoList(newTodoList);
      setIsEditTodo(undefined);
      inputRef.current!.value = "";
      return;
    }

    const todoInputData: ITodo = {
      index: new Date().valueOf(),
      todoValue: todoInput,
    };

    setTodoList([...todoList, todoInputData]);
    setIsEditTodo(undefined);
    inputRef.current!.value = "";
    return;
  };

  const handleEdit = (index: number) => {
    const findTodo = todoList.find((v) => v.index === index);
    inputRef.current!.value = findTodo?.todoValue || "";
    setIsEditTodo(findTodo);
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
          <input type="text" name="todo" ref={inputRef} />
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
