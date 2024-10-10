import React,{createContext,useState} from 'react'
import { InitialTodoItems } from './InitialTodoItems';


export const TodoContext=createContext()

export const TodoContextProvider = ({children}) => {
    const [todoItem, setTodoItem] = useState(InitialTodoItems);

  return (
    <TodoContext.Provider value={{todoItem, setTodoItem}}>
      {children}
    </TodoContext.Provider>
  )
}