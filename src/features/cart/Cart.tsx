import React from "react";
import CartCard from "./components/cart-card/Cart-card";
import CartSummary from "./components/cart-summary/Cart-summary";
import './cart.scss'
const Cart = () => {
  return <div className="cart-container">
    <CartCard/>
    <CartSummary/>
    </div>;
};

export default Cart;
