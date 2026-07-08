import React from 'react'

function MyComponet() {

    // recreated every render
    let handleClick = ()=>{
        console.log("Clicked")
    }

    //runs on every rerender
    // let result = expernsiveCalcuations(data)
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default MyComponet
