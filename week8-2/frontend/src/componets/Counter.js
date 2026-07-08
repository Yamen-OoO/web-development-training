import React, { useRef, useState } from 'react'

function Counter() {
    let [count , setCount] = useState(0)

    let renderCount = useRef(0) // dose not cause re-render

    renderCount.current = renderCount.current + 1
  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Redners : {renderCount.current}</h2>
      <button onClick={()=>  setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter

