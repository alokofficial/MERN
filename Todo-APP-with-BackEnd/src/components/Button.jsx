import React from 'react'

const Button = ({children,color,onClick}) => {
  return (
    <button className={`text-white font-bold text-2xl px-10 py-2 rounded-xl ${color} `} onClick={onClick}>{children}</button>
  )
}

export default Button