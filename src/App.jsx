import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar"
import dataProduct from "./product.json"


function App() {
  const [products, setProducts] = useState(dataProduct.data)
  const [productsInCart, setProductsInCart] = useState([])
  
  const onAdd = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

  }
  /* () => {
    return "fghgh"
  }
  function a() {

  }
  
  */ 
  const onDel = (propsOfProductItem) =>{
    const productOnDel = productsInCart.filter((item)=>{
      return item.id !== propsOfProductItem.id
    });
    console.log(productOnDel)
    setProductsInCart(productOnDel);
  }
  const sortAZ = ()=>{
    console.log("sortAZ")
    const newSortAZ = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newSortAZ)
  }
  return (
    <Layout productsInCart={productsInCart} onDel={onDel}>
      <Content>
        {
          products.map(elm => {
            return (
              <ProductItem 
              {...elm} imageURL={elm.image} onAdd={onAdd}
              />
            )
          })
        }
      </Content>
      <SideBar sortAZ={sortAZ}/>
    </Layout>
  );
  }
export default App