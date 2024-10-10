import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../store/TodoContext';

const TodoItems = () => {
  const {todoItem}=useContext(TodoContext)
  return (<>
  
{todoItem.map((item) => (
  <TodoItem key={item.id} item={item}/>
))} 
</>
  )
}

export default TodoItems