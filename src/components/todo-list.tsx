import { ITodo } from "../App";

const TodoList = ({ todoList }: { todoList: ITodo[] }) => {
  return (
    <div>
      <br />
      {todoList.map((todo) => (
        <div key={todo.index}>
          {todo.todoValue}
          <button onClick={() => console.log("Edit")}>Edit</button>
          <button onClick={() => console.log("Delete")}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
