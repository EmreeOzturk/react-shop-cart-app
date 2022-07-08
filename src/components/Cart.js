import React from "react";
import "../App.css";

function Cart({ cart }) {
  return (
    <div className="main-cart">
      <div className="show-cart">
        <h2>Cart</h2>
        {cart.map((product) => (
          <div className="cart-list">
            <img width="150px" src={product.img} alt="" />
            <p>
              {product.name} x{product.amount}
            </p>
            <p> &nbsp; {product.amount * product.price}TL
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
