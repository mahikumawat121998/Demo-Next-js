import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
    const [products, setProducts] = useState([])
    const fetchProducts = () =>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30')
        .then((res)=>{return res.json()})
        .then((data)=>{ 
            setProducts(data)
        })
    }

  return (
    <>
    <ProductContext.Provider value={ {fetchProducts , products}}>
        {props.children}
    </ProductContext.Provider>
    </>
  )
}

export default ProductState