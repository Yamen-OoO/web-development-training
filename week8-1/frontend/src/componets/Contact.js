import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


function Contact() {
    let {theme , toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <header style={{background: theme === 'dark' ? "#333" : "#fff" , color : theme === "dark" ? "#fff" : "#333"}}>
        <h1>Contact Setcion</h1>
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
      </header>
    </div>
  )
}

export default Contact
