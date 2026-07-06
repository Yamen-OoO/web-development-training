import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useStore } from '../context/StoreContext'


function Header() {
  // ! for themeContext
    // let {theme , toggleTheme} = useContext(ThemeContext) 
  // ! for storeContext
    let {theme , toggleTheme} = useStore()
  return (
    <div>
      <header style={{background: theme === 'dark' ? "#333" : "#fff" , color : theme === "dark" ? "#fff" : "#333"}}>
        <h1>MY App</h1>
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
      </header>
    </div>
  )
}

export default Header
