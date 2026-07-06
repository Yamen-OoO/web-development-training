import React from 'react'
import { useStore } from '../context/StoreContext'

function ProductList() {
    let {products , theme } = useStore()
    let containerClass = theme === 'dark' ? "product-contaienr product-container-light" :"product-contaienr product-container-dark"
    let cardClass = theme === 'light' ? "product-card product-card-light" :"product-card product-card-dark"
    let priceClass = theme === 'light' ? "price price-light" :"price price-dark"
  return (
    <div>
      <div className={containerClass}>
        <h2>Products</h2>
        <div className='products-grid'>
            {products.map(product =>(
                <div key={product.id} className={cardClass}>
                    <h3>{product.name}</h3>
                    <p className={priceClass}>${product.price}</p>
                    <button className='btn btn-primary'>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
