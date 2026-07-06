import React, { useEffect, useState } from 'react'

function useLocalStorage(key , initialValue) {
    let [storedValue , setStoredValue] = useState(()=>{
        try {
            let item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        }
        catch(error){
            return initialValue
        }
    })

    useEffect(()=>{
        try{
            localStorage.setItem(key , JSON.stringify(storedValue))
        }
         catch(error){
            console.error("Error saving to localStorage", error)
        }

    },[key , storedValue])

    return [storedValue , setStoredValue]
}

export default useLocalStorage
