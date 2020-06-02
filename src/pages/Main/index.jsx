import React, { useState } from "react";
import "./Main.css";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/SideBar";
import dataProduct from '../../product.json'


function Main() {
  const [products, setProducts] = useState(dataProduct.data)
  const [productsInCart, setProductsInCart] = useState([])
  
  const onSelectProduct = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

    /* 
      productsInCart = []
      productsInCart.push(propsOfProductItem)
    */
  }

  const onDeleteProduct = (propsOfProductItem) => {
    const productOnDelete = [...productsInCart].filter((product) => product.id !== propsOfProductItem.id);
    setProductsInCart(productOnDelete); 
  }
  const sortNameAZ =() => {
    const newProductSort = [...products].sort((a,b) => a.name.localeCompare(b.name));
    setProducts(newProductSort)
  }

  const sortNameZA =() => {
    const newProductSort = [...products].sort((a,b) => b.name.localeCompare(a.name));
    setProducts(newProductSort)
  }

  const sortPriceLowToHigh = () => {
    const sortedList = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedList);
  }

  const sortPriceHighToLow = () => {
    const sortedList = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedList);
  }

  return (
    <Layout productsInCart={productsInCart} onDeleteProduct = {onDeleteProduct}>
      <main>
      <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
            <Content>
              {
                products.map(elm => {
                  return (
                    <ProductItem 
                    {...elm} imageURL={elm.image} 
                    onSelectProduct={onSelectProduct}
                    />
                  )
                })
              }
            </Content>
            <SideBar 
            sortNameZA = {sortNameZA}
            sortNameAZ = {sortNameAZ}
            sortPriceHighToLow ={sortPriceHighToLow}
            sortPriceLowToHigh ={sortPriceLowToHigh} />
            />
            </div>
          </div>
        </section>
    </main>
      
    </Layout>
  );
}

export default Main;