import React, { useReducer } from 'react'

let initialStete = {
    name : '',
    email : "",
    age : ''
}

function formReducer(state , action){
    switch(action.type){
        case "CHANGE":
            return {...state , [action.field] : action.value}
        case "RESET":
            return initialStete
        default : 
            return state
    }
}



function SimpleForm() {
    let [state , dispatch] = useReducer(formReducer ,initialStete )

    let handleChange = (e)=>{
        dispatch({
            type : "CHANGE",
            field : e.target.name, // name , email . age
            value : e.target.value
        })
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Form data : " , state)
        dispatch({type : "RESET"})
    }

    return(
       <>
        <h1>SIMPLE FORM</h1>
        <form onSubmit={handleSubmit}>
            <input name='name' value={state.name} onChange={handleChange} placeholder='NAME' />
            <input name='email' value={state.email} onChange={handleChange} placeholder='EMAIL' />
            <input name='age' value={state.age} onChange={handleChange} placeholder='AGE' />
            <button type='button' onClick={()=> dispatch({type : "RESET"})}>RESET</button>
            <button type='submit'>Submit</button>
        </form>

        <div>
            <h3>Current data:</h3>
            <p>NAME : {state.name}</p>
            <p>AGE : {state.age}</p>
            <p>EMAIL : {state.email}</p>
        </div>
       </>
    )

}

export default SimpleForm
