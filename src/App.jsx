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
  
  const onSelectProduct  = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

  }
  
  const sortAZ = ()=>{
    console.log("sortAZ")
    const newSortAZ = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newSortAZ)
  }
  return (
    <Layout productsInCart={productsInCart} >
      <Content>
        {
          products.map(elm => {
            return (
              <ProductItem 
              {...elm} imageURL={elm.image} onAdd={onSelectProduct}
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