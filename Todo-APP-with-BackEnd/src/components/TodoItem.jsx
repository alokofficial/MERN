import React from 'react'
import Button from './Button'
import { Trash2 } from 'lucide-react';

const TodoItem = () => {
  return (
    <div className='container w-3/4 flex gap-2 justify-between text-2xl p-2 my-2'>
      <p>Make Project</p>
      <p>11/10/2024</p>
      <Button color='bg-green-500 py-4'><Trash2/></Button>
    </div>
  )
}

export default TodoItem