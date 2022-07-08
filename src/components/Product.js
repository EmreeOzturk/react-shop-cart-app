import React from "react";
import "../App.css";
function Product({ product, cart, setCart }) {

    const cartProduct = cart.find(item => item.id === product.id);

  function increase() {
    const isContained = cart.find((item) => item.id === product.id);
    if (isContained) {
      isContained.amount += 1;
      setCart([...cart.filter((item) => item.id !== product.id), isContained]);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  }
function decrease(){
    const isContained = cart.find((item) => item.id === product.id);
    isContained.amount -= 1;
    if(isContained.amount === 0){
        setCart([...cart.filter((item) => item.id !== product.id)]);
    }
    else{
        setCart([...cart.filter((item) => item.id !== product.id), isContained]);
    }

}
  return (
    <div>
      <div className="product">
        <div className="product-piece">
          <button disabled={!cartProduct} onClick={decrease}>-</button>
          <p>
            <b> {(cartProduct && cartProduct.amount) || 0} </b>
          </p>
          <button onClick={increase}>+</button>
        </div>
        <img src={product.img} alt="" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Product;
