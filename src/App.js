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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
