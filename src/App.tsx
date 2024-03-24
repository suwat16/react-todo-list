import { useState } from "react";
import InputTodo from "./components/input-todo";
import TodoList from "./components/todo-list";

export interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const onTodoInput = (input: string) => {
    const newTodo: ITodo = {
      index: new Date().valueOf(),
      todoValue: input,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InputTodo getInputSubmit={onTodoInput} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
