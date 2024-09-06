import TodoItem from "./TodoItem";
const TodoItems = () => {
  const todoItems = [
    { id: 1, todoText: "Buy Notebook", todoDate: "10/10/2023" },
    { id: 2, todoText: "Sell Notebook", todoDate: "11/10/2023" },
    { id: 3, todoText: "Return Notebook", todoDate: "12/10/2023" },
  ];

  return todoItems.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        todoText={todo.todoText}
        todoDate={todo.todoDate}
      />
    );
  });
};
export default TodoItems;
