import React from 'react'

function UserCArd(props) {
    console.log(props)
  return (
    <div className='card'>
        <h2>my name is {props.name}</h2>
        <p>Age :{props.age}</p>
        <p>Email: {props.email}</p>
    </div>
  )
}

export default UserCArd
