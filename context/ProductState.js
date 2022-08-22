import React, { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleproduct] = useState([]);
  const [cart, setCart] = useState({ items: "", totalItems: "" });
  const [isloading , setIsloading] = useState(false)

  const fetchProducts = async () => {
    setIsloading(true)
    await fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
      setIsloading(false)
  };

  const fetchOne = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSingleproduct(data);
      });
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          fetchProducts,
          products,
          setProducts,
          fetchOne,
          singleProduct,
          cart,
          setCart,
          isloading
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductState;
