import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar"



const products = [
    {
        type: "Mobile Phone",
        name: "Xiaomi Redmi Note 9 Pro",
        imageURL:"https://cdn.tgdd.vn/Products/Images/42/221817/xiaomi-redmi-note-9-pro-128gb-xam-400x460-400x460.png",
        price: "8.900.000 VND",
        discountPrice: "1.000.000 VND"
    },
    {
        type: "HeadPhone",
        name: "Tai nghe Bluetooth True Wireless Aukey EP-K01 Đen",
        imageURL:"https://cdn.tgdd.vn/Products/Images/54/219397/tai-nghe-bluetooth-tws-aukey-ep-k01-den-1-600x600-1-600x600.jpg",
        price: "1.490.000 VND",
        discountPrice: "100.000 VND"
    },
    {
        type: "Laptop",
        name: "Laptop Acer Aspire A315 34 C2H9 N4000/4GB/256GB/Win10 (NX.HE3SV.005)",
        imageURL:"https://cdn.tgdd.vn/Products/Images/44/210665/acer-aspire-a315-34-c2h9-n4000-4gb-256gb-win10-nx9-1-600x600.jpg",
        price: "6.990.000 VND",
        discountPrice: "500.000 VND"
    },
];

function App() {
    return (
      <Layout>
        <Content>
          <ProductItem
            {...products[0]} />
        </Content>
        <SideBar />
      </Layout>
    );
  }
export default App