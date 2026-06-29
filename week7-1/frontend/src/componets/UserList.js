import React, {useEffect, useState } from 'react'

function UsersList() {
    let [users , setUsers] = useState([])
    let [loading , setLoading] = useState(true)


    useEffect(()=>{
        fetch('https://fakestoreapi.com/users').then(res => res.json()).then(data=>{
            console.log(data)
            setUsers(data)
            setLoading(false)
        })
    },[]) // runs once

    if(loading){
        return <p>Loading ......</p>
    }

  return (
    <div>
      <ul>
        {users.map(user =>(
            <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
