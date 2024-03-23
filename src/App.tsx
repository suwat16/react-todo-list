import React, { useState } from "react";

interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoValue, setTodoValue] = useState<ITodo>();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoInput = inputRef.current?.value;

    if (isEditTodo) {
      const newTodoList = todoList.map((v) => {
        if (v.index === todoValue?.index) {
          return {
            ...v,
            todoValue: todoInput,
          };
        }
        return v;
      });

      setTodoList(newTodoList);
      setIsEditTodo(false);
      inputRef.current!.value = "";
      return;
    }

    const todoInputData: ITodo = {
      index: new Date().valueOf(),
      todoValue: todoInput,
    };

    setTodoList([...todoList, todoInputData]);
    setIsEditTodo(false);
    inputRef.current!.value = "";
    return;
  };

  const handleEdit = (index: number) => {
    const findTodo = todoList.find((v) => v.index === index);
    inputRef.current!.value = findTodo?.todoValue || "";
    setTodoValue(findTodo);
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
          <input type="text" ref={inputRef} />
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
