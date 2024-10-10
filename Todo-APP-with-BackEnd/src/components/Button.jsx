import React from 'react'

const Button = ({children,color}) => {
  return (
    <button className={`text-white font-bold text-2xl px-10 py-2 rounded-xl ${color} `}>{children}</button>
  )
}

export default Button