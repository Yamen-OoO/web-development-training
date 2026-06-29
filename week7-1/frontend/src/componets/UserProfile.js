import React, { useState } from 'react'

function UserProfile() {
    let [user , setUser] = useState({
        name:'ahmad', age:25 , city:"damascus"
    })

    const updateName = ()=>{
        setUser({...user , name:"yamen"})
    }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  )
}

export default UserProfile
