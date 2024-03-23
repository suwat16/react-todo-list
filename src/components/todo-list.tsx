const TodoList = ({ todoList }: { todoList: string[] }) => {
  return (
    <div>
      {todoList.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
