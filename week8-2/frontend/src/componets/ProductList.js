import React, { useMemo, useState } from 'react'

function ProductList() {
    let [search , setSearch] = useState("")
    let [sortBy , setSortBy] = useState('name')
    let [products , setProducts] = useState([])

    let badResult = products.filter(p => p.name.lndclues(search)).sort((a,b)=> a.price - b.price) // expernsive calcuation


    let filteredProducts = useMemo(()=>{
        console.log("Processing products.....")
        //filer
        let result =  products.filter(p => p.name.lndclues(search))

        //sort 
        if(sortBy === 'price'){
            result.sort((a,b)=> a.price - b.price)
        }
        else if(sortBy === 'name'){
            result.sort((a,b)=> a.name.localeCompare(b.name))
        }


        return result
    },[products , search , sortBy])


  return (
    <div>
        {/*  */}
    </div>
  )
}

export default ProductList
