import { useEffect, useState } from "react";

export function useFetch(linkk){
    let [data , setData] = useState(null)
    let [loading , setLoading] = useState(true)
    let [error , setError] = useState(null)

    console.log(data)
    useEffect(()=>{
        console.log("test")
        let fetchData = async () =>{
            setLoading(true)
            setError(null)

            try{
                console.log("one")
                let response = await fetch(linkk)
                if(!response.ok) {
                    throw new Error('faild to fetch')
                }
                let result = await response.json()
                console.log(result)
                setData(result)
            }
            catch(err){
                setError(err.message)
            }
            setLoading(false)
        }
        fetchData()
            //     fetch('https://fakestoreapi.com/users')
            // .then(response => response.json())
            // .then(data => console.log(data));
    },[linkk])

    return {data  , loading , error}
}

