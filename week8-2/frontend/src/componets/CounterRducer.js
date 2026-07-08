import React, { useReducer } from 'react'


function counterReducer(state , action){
    switch(action.type){
        case "INCREMENT":
            return {count : state.count + 1}
        case "DECREMENT":
            return {count : state.count - 1}
        case "RESET":
            return {count : 0}
    }
}

function CounterRducer() {
    let [state , dispatch] = useReducer(counterReducer , {count : 0})
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={()=> dispatch({type:"INCREMENT"})} >+</button>
      <button onClick={()=> dispatch({type:"DECREMENT"})} >-</button>
      <button onClick={()=> dispatch({type:"RESET"})} >RESET</button>
    </div>
  )
}

export default CounterRducer
