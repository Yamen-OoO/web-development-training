import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function Settings() {
    let [name , setName] = useLocalStorage('username' , 'guest')
    let [theme , setTheme] = useLocalStorage("theme" ,  'light')
  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <select value={theme} onChange={(e)=> setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
      
    </div>
  )
}

export default Settings

