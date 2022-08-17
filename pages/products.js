import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import styles from "../styles/Products.module.css";
import Productcard from './components/Productcard';
import Searchbar from './components/Searchbar';
import productContext from './context/productContext';

const Products = () => {
    const { fetchProducts, products} = useContext(productContext)
    useEffect(()=>{
     fetchProducts()
    },[])
  return (
    <>
    <div className={styles.container}>
        <div  className={styles.searchBox}>
            <Searchbar />
        </div>
    {products.map((product)=>(
        <div className={styles.prodcutItem} key={product.id}>
            <Productcard product={product}/>
        </div>
        
    ))}
    </div>
    </>
  )
}

export default Products