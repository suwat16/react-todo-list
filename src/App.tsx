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
    if (isEditTodo) {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.index === isEditTodo.index) {
          return input;
        }
        return todo;
      });

      setTodoList(updatedTodoList);
      setIsEditTodo(undefined);
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
      <InputTodo onFinish={onTodoInput} editItem={isEditTodo} />
      <TodoList
        todoList={todoList}
        editItem={onTodoEdit}
        removeTodo={onTodoRemove}
      />
    </div>
  );
}

export default App;
