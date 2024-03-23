import { useState } from "react";
import TodoList from "./components/todo-list";
import InputTodo from "./components/input-todo";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleTodoInput = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputTodo onTodoInput={handleTodoInput} />
        <br />
        <br />
        <TodoList todoList={todoList} />
      </div>
    </>
  );
}

export default App;
