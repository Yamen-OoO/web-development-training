import axios from 'axios'


//* GET - Fetch all products
export const getProducts = async ()=>{
    try{
        let response = await axios.get('https://fakestoreapi.com/products')
        return response.data

    }
    catch(error){
        console.log("Error fetching products" , error)
        throw error
    }
}



//* GET - get product by id
export const getProductsById = async (id)=>{
    try{
        let response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data

    }
    catch(error){
        console.log("Error fetching products number id" , error)
        throw error
    }
}


//* GET - get product by id
export const deleteProductsById = async (id)=>{
    try{
        let response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        return response.data

    }
    catch(error){
        console.log("Error deleting product" , error)
        throw error
    }
}


