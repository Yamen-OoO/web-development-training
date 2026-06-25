import React from 'react'

function ConditionalRendering({a ,b }) {
    let isLoggedIn = a
    let age = b
    let user = null
  return (
    <div>
        {/* if else , ternery operator */}
      <h1>ConditionalRendering example</h1>
      <p>{isLoggedIn ? "Welcome Back!" : "Please login"}</p>
      {isLoggedIn && <p>Welcome Back</p>}



      {(()=>{
        if(age >= 18){
            return <p>you are in</p>
        }else{
            return <p>you are not in</p>
        }
      })()}
      
    </div>
  )
}

export default ConditionalRendering
