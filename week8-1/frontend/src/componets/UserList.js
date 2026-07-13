import React from 'react'
import { useFetch } from '../hooks/useFetch'

function UserList() {
    let {data , loading , error} = useFetch('https://fakestoreapi.com/users')
    console.log(data)
    console.log(loading)
    if(loading) return <p>Loading....</p>
    if(error) return <p>Error : {error}</p>
  return (
    <div>
      <ul>
        {data && 
             data.map(user =>(
            <li key={user.id}>{user.name.firstname}</li>
        ))}
        
     
      </ul>
    </div>
  )
}

export default UserList
