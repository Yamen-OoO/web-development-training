import React from 'react'

function FilteredList() {
    let products = [
        {id:1 , name:'labtop' , price:900 , inStock:true},
        {id:2 , name:'mobile' , price:200 , inStock:true},
        {id:3 , name:'headphone' , price:300 , inStock:false},
        {id:4 , name:'labtop' , price:600 , inStock:true},
        {id:5 , name:'labtop' , price:500 , inStock:false},
        {id:6 , name:'mobile' , price:660 , inStock:true},
    ]
  return (
    <div>
      {products.filter(product => product.inStock).map(product =>(
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default FilteredList
