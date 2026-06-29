import React, { useState } from 'react'

function LoginForm() {
    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')


    const handleSubmit =(event)=>{
        event.preventDefault()
        setEmail('')
        setPassword('')
        console.log("Email" , email)
        console.log("Password" , password)
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
