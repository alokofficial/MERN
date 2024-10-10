import React from 'react'
import Button from './Button'
import { ClipboardPlus } from 'lucide-react';

const AddTodo = () => {
  return (
    <div className='container w-2/3 flex gap-2 justify-around  text-3xl p-4 '>
      <input className='p-3 rounded-lg' type="text" placeholder='enter todo...'></input>
      <input className='p-3 rounded-lg' type="date"></input>
      <Button color='bg-red-500'><ClipboardPlus/></Button>
    </div>
  )
}

export default AddTodo