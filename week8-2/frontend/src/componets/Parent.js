import React, { useCallback, useState } from 'react'

let Child = React.memo(   ({onClick}) =>{
    console.log('child rendered')
    return <button onClick={onClick}>Child Button</button>
})


function Parent() {
    let [count , setCount] = useState(0)
    let [other , setOther] = useState(0)

    let handleClick = useCallback(()=>{
        console.log("Clicked")
    },[])
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> onclick(()=> setCount(count + 1))} >+</button>
        <button onClick={()=> onclick(()=> setCount(count - 1))} >-</button>
        <button onClick={()=> onclick(()=> setCount(0))} >RESET</button>
        <Child onClick={handleClick} />
    </div>
  )
}

export default Parent
