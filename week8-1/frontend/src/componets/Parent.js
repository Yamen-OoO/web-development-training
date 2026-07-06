import React, { useState } from 'react'




function ComponetA(){
    let [data , setData] = useState("Hello")
    return <p>{data}</p>
}

function ComponetB(props){
    return <p>{props.data}</p>
}






function Parent() {
    let [data , setData] = useState("Hello")
  return (
    <div>
    <ComponetA />
    <ComponetB data="hello" />
    </div>
  )
}

export default Parent
