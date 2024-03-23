const TodoList = ({ todoList }: { todoList: string[] }) => {
  return (
    <div>
      {todoList.map((todoValue, index) => (
        <div key={index + 1} >
            {todoValue}
            <button onClick={() => console.log('Edit')}>Edit</button>
            <button onClick={() => console.log('Delete')}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
