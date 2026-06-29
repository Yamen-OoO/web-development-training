import React, { use, useEffect, useState } from 'react'

function Timer(props) {
    let [seconds , setSeconds] = useState(0)

    useEffect(()=>{
        let interval = setInterval(()=>{
            setSeconds(prev => prev+1)
        },1000)

        return ()=>{
            clearInterval(interval)
        }
},[])
  return (
    <div>
      <h2>Seconds : {seconds} </h2>
    </div>
  )
}

export default Timer

