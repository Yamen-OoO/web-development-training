import React from 'react'
import UserCArd from './UserCArd'

function ListExample() {
    let fruits = ['apple', 'banana', 'orange','mongo']
    let users = [
        {id:1 , name:'yamen',age:24 , email:'facbook.com'},
        {id:2 , name:'ahmad',age:26 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
        {id:3 , name:'mazen',age:22 , email:'facbook.com'},
    ]
  return (
    <div>
        <ul> Fruits
        {fruits.map((fruit , index) =>(
            <li key={index}>{fruit}</li>
            ))}
        </ul>

        <ul> Users
            {users.map(user =>(
                <UserCArd key={user.id} name={user.name} age={user.age} email={user.email} />
            ))}
        </ul>
    </div>
  )
}

export default ListExample
