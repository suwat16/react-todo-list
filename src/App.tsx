import React, { useState } from "react";
import InputTodo from "./components/input-todo";
import TodoList from "./components/todo-list";

export interface ITodo {
  index: number;
  todoValue: string | undefined;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<ITodo | undefined>();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onTodoInput = (input: ITodo) => {
    if (isEditTodo) {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.index === isEditTodo.index) {
          return input;
        }
        return todo;
      });

      setTodoList(updatedTodoList);
      setIsEditTodo(undefined);
      inputRef.current!.value = "";
      return;
    }

    setTodoList([...todoList, input]);
    return;
  };

  const onTodoRemove = (todoList: ITodo[]) => {
    setTodoList(todoList);
    return;
  };

  const onTodoEdit = (todo: ITodo) => {
    setIsEditTodo(todo);
    inputRef.current!.value = todo.todoValue || "";
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InputTodo
        inputRef={inputRef}
        onFinish={onTodoInput}
        editItem={isEditTodo}
      />
      <TodoList
        todoList={todoList}
        editItem={onTodoEdit}
        removeTodo={onTodoRemove}
      />
    </div>
  );
}

export default App;
