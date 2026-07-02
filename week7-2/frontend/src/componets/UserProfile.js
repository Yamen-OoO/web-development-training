import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
    let {userid} = useParams()
    console.log(userid)
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userid}</p>
    </div>
  )
}

export default UserProfile
