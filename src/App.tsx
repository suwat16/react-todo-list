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
      <InputTodo onTodoInput={handleTodoInput} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
