import { ITodo } from "../App";

const TodoList = ({
  todoList,
  removeTodo,
}: {
  todoList: ITodo[];
  removeTodo: (todo: ITodo[]) => void;
}) => {
  const handleEdit = (index: number) => {
    console.log("Edit", index);
  };

  const handleDelete = (index: number) => {
    const newTodoList = todoList.filter((todo) => todo.index !== index);
    removeTodo(newTodoList);
  };

  return (
    <div>
      <br />
      {todoList.map((todo) => (
        <div key={todo.index}>
          {todo.todoValue}
          <button onClick={() => handleEdit(todo.index)}>Edit</button>
          <button onClick={() => handleDelete(todo.index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
