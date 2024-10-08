import React from 'react'
import {useContext} from 'react'
import ThemeContext from '../store/ThemeContext'

const Button = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)
  
  return (
    <button className={`${theme==='light'?"bg-gray-300 text-blue-900":"bg-blue-900 text-gray-300"} text-3xl m-16 rounded-full pointer`} onClick={toggleTheme}>Theme Toggle</button>
  )
}

export default Button