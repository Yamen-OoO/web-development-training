import React from 'react'

function UserCardDestractured({name = 'user' , age , email}) {
  return (
    <div className='card'>
        <h2>my name is {name}</h2>
        <p>Age :{age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserCardDestractured



