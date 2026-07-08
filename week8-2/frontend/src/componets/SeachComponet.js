import React, { useCallback, useState } from 'react'

function SeachComponet() {
    let [query , setQuery] = useState("")
    let [results , setResults] = useState([])


    let search = useCallback(()=>{
        console.log("search for : " , query)
        /// fetch data
    },[query])


    let clearSearch = useCallback(()=>{
        setQuery("")
        setResults([])
    },[])
  return (
    <div>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={search} >Seach</button>
        <button onClick={clearSearch} >clear</button>
    </div>
  )
}

export default SeachComponet
