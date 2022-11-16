import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/ProductsPage";
import Home from "./Components/Home";
import Cart from "./Components/CartPage";
import SingleProduct from "./Components/ProductsPage/SingleProduct";
import Login from "./Components/Login";
import Navbar from "./Components/Shared/Navbar";
import Register from "./Components/Register";
import Checkout from "./Components/Checkout";
import Profile from "./Components/Profile";
import { useEffect } from "react";
import OrderPage from "./Components/OrderPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
