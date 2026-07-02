import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

function LoginPage() {
    let navigate = useNavigate()
    let [IsLoggedIn ,setLoggedIn ] = useState(false)

    const handleLogin  = ()=>{
        setLoggedIn(true)
        navigate("/dashboard")
    }
    let goBack = ()=>{
        navigate(-1)
    }


  return (
    <div>
      <h1>login page</h1>
      <button onClick={handleLogin} >Login</button>
      <button onClick={goBack} >Back</button>
    </div>
  )
}

export default LoginPage
