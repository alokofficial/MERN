import { createContext, useState } from "react"


const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme=() => {
        setTheme(currentTheme=>currentTheme==='light'?'dark':'light')
      }
    return <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext