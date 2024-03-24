import { ITodo } from "../App";

const TodoList = ({
  todoList,
  editItem,
  removeTodo,
}: {
  todoList: ITodo[];
  editItem: (todo: ITodo) => void;
  removeTodo: (todo: ITodo[]) => void;
}) => {
  const handleEdit = (index: number) => {
    const todo = todoList.find((todo) => todo.index === index);
    editItem(todo!);
    return;
  };

  const handleDelete = (index: number) => {
    const newTodoList = todoList.filter((todo) => todo.index !== index);
    removeTodo(newTodoList);
    return;
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
