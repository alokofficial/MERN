import { useContext } from "react";
import TodoItem from "./TodoItem";
import {TodoItemsContext}  from '../store/TodoItemContext';
const TodoItems = () => {
  const {deleteTodoItem,todoItems}=useContext(TodoItemsContext)
 

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
      ))}
    </>
  );
};

export default TodoItems;
