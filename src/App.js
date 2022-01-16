import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
