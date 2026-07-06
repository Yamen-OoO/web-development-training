import { useEffect, useState } from "react";

export function useFetch(link){
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
                let response = await fetch(link)
                if(!response.ok) {
                    throw new Error('faild to fetch')
                }
                let result = await response.json()
                setData(result)
            }
            catch(err){
                setError(err.message)
            }
            setLoading(false)
        }
                fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => console.log(data));
    },[link])

    return {data  , loading , error}
}

