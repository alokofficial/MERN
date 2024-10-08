import { createContext, useReducer } from "react";
import InitialTodoItems from "./InitialTodoItems";
import todoReducer from "./todoReducer";


export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {
 
  const [todoItems, todoDispatch] = useReducer(todoReducer, InitialTodoItems);
  const addTodoItem = (todoText, todoDate) => {
    todoDispatch({
      type: "ADD",
      payload: { id: Date.now(), todoText, todoDate },
    });
  };

  const deleteTodoItem = (todoId) => {
    todoDispatch({
      type: "DELETE",
      payload: { id:todoId },
    });
  };

  return (
    <TodoItemsContext.Provider value={{ addTodoItem, deleteTodoItem, todoItems }}>
    {children}
  </TodoItemsContext.Provider>
  );
};
