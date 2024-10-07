import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

const Welcome = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <h1 className={`${theme === 'light' ? "text-gray-800 bg-slate-200" : "text-slate-200 bg-gray-800"}`}>Welcome to the Theme Changing APP    </h1>
  )
}

export default Welcome