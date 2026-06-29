import React, { useEffect, useState } from 'react'
import { deleteProductsById, getProducts } from '../api/productApi'

function ProductsList() {
    let [products , setProducts] = useState([])
    let [loading , setLoading] = useState(false)
    let [error , setError] = useState(null)


    useEffect(()=>{
        getProducts()
    },[])

    let loadProducts = async ()=>{
        setLoading(true)
        setError(null)

        try{
            let data = await getProducts()
            setProducts(data)
            setLoading(false)
        }
        catch(err){
            setError('Faild to load products')
        }

    }


    let handleDelet = async (id)=>{
        if(!window.confirm('Delete this Product?')) return

        try{
            await deleteProductsById(id)
            setProducts(products.filter(p=> p.id !== id))
            alert("product Deleted!")
        }
        catch(error){
            alert("Faild to delete")
        }
    }

    const viewProduct =(product)=>{
        alert(`Product Details: \n\nTitle ${product.title} \nPrice:${product.price} \nDescription:${product.description}`)
    }

  return (
    <div className='product-conainer'>
      <div className='list-section'>
        <div className='header-actions'>
            <h3>products</h3>
            <button onClick={loadProducts} className='refresh-btn'>refresh</button>
        </div>
        {loading && <p className='loading'>Loading .....</p>}
        {error && <p className='error'>{error}</p>}

        <ul className='product-list'>
            {products.slice(0,10).map(product =>(
                <li key={product.id} className='product-item'>
                    <div>
                        <strong>{product.title}</strong>
                        <br/>
                        <span className='price'>${product.price}</span>
                        <small className='category'>{product.category}</small>
                    </div>
                    <div className='action-buttons'>
                        <button onClick={()=> viewProduct(product)} className='view-btn'>View</button>
                        <button onClick={()=> handleDelet(product.id)} className='delete-btn'>Delete</button>
                    </div>
  

                </li>

            ))}
        </ul>


      </div>
    </div>
  )
}

export default ProductsList
