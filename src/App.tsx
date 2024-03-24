import { useState } from "react";
import InputTodo from "./components/input-todo";
import TodoList from "./components/todo-list";

export interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<ITodo | undefined>();

  const onTodoInput = (input: ITodo) => {
    setTodoList([...todoList, input]);
  };

  const onTodoRemove = (todoList: ITodo[]) => {
    setTodoList(todoList);
  };

  const onTodoEdit = (todo: ITodo) => {
    setIsEditTodo(todo);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InputTodo submit={onTodoInput} editItem={isEditTodo} />
      <TodoList
        todoList={todoList}
        editItem={onTodoEdit}
        removeTodo={onTodoRemove}
      />
    </div>
  );
}

export default App;
