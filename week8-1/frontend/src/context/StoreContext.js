import { createContext, useContext, useState } from "react";

export let StoreContext = createContext()
export function StoreProvider({children}){
    let [products] = useState([
        { 
            id : 1 , name :"Apple" , price : 5,  
        },
        {
            id : 2 , name :"Banana" , price : 2,
        },
        {
            id : 3 , name :"Orange" , price : 3,
        },
        {
            id : 4 , name :"Kiwi" , price : 4,
        }
        ,{
            id : 5 , name :"Watermelon" , price : 7,
        }
    ])

    let [theme , setTheme] = useState("light")

    let toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }



    return(
        <StoreContext.Provider value={{products , theme , toggleTheme}}>
            {children}
        </StoreContext.Provider>
    )
}


// 
export function useStore(){
    return useContext(StoreContext)
}