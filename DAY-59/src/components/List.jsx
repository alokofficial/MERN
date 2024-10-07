import React from 'react'

const List = ({list}) => {
  return (
   
    <ul className="list-decimal ml-10 mt-5 text-xl">
      {list.map(item => <li>{item}</li>)}
    </ul>
    
  )
}

export default List