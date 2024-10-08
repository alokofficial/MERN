import React,{useContext} from 'react'
import ThemeContext from '../store/ThemeContext'

const Header = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <h1 className={`${theme==='light'?"bg-gray-300 text-blue-900":"bg-blue-900 text-gray-300"} text-6xl`}>This is the header file</h1>
  )
}

export default Header