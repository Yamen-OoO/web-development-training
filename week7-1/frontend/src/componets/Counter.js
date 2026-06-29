import React, { useState } from 'react'

function Counter() {
    console.log("hello")
    let [count , setCount] = useState(0)
    console.log(count)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

  return (
    <div>
      <h2>Counts : {count} </h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
