import { createContext, useReducer } from "react";
import TodoItemsReducer from "./TodoItemsReducer";

export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({children}) => {

  const [todoItems, dispatch] = useReducer(TodoItemsReducer,[]);

  const addTodoItem = (id,todoText, todoDate) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,todoText, todoDate
      }
    })
  }
  
  const addAllTodoItem = (todoItems) => {
    dispatch({
      type: 'LOAD_ALL_ITEM',
      payload: {
        allItems:todoItems
      }
    })
  }

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        todoId
      }
    })
  }

  return <TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteTodoItem,addAllTodoItem}}>
    {children}
  </TodoItemsContext.Provider>
}