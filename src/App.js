import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
import {useState , useEffect} from "react";
function App() {
  const[cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Header />
      <div className="product-container">
        <div className="product-box">
          {products.map((product) => (
            <Product key={product.id} cart={cart} setCart={setCart} product={product} />
          ) )}
        </div>
        <Cart cart={cart} />
      </div>
     
    </div>
  );
}

export default App;
