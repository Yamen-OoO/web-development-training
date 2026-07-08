import React, { useRef } from 'react'

function FocusInput() {
    let inputRef = useRef(null) // reutrn dom element
    let handleFocus = ()=>{
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'yellow'
    }
    console.log(inputRef)
    
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='click the button' />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInput
