import React, { use, useState } from 'react'

function Counter() {
    let [count , setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
