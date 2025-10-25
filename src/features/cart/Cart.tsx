import { useState } from "react";
import CartCard from "./components/cart-card/Cart-card";
import CartSummary from "./components/cart-summary/Cart-summary";
import "./cart.scss";

interface CartItem {
  id: string;
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Product name",
      description: "rdsafhukyjthrgefwdqgjtkkyjthrdsafhukyjthrgefwdqgjtkkyjth",
      color: "red",
      size: "XL",
      price: 1050,
      quantity: 12,
      image: "/src/assets/images/store/swiper2.jpg",
    },
  
    {
      id: "2",
      name: "Product name",
      description: "rdsafhukyjthrgefwdqgjtkkyjthrdsafhukyjthrgefwdqgjtkkyjth",
      color: "red",
      size: "XL",
      price: 1050,
      quantity: 12,
      image: "/src/assets/images/store/swiper2.jpg",
    },
  ]);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...", cartItems);
  };

  const handleContinueShopping = () => {
    console.log("Continue shopping...");
  };

  const handleApplyCoupon = (coupon: string) => {
    console.log("Applying coupon:", coupon);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // No shipping fee as per design

  return (
    <div className="cart-container">
      <CartCard
        items={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
      />
      <CartSummary
        subtotal={subtotal}
        total={total}
        itemCount={cartItems.length}
        onCheckout={handleCheckout}
        onContinueShopping={handleContinueShopping}
        onApplyCoupon={handleApplyCoupon}
      />
    </div>
  );
};

export default Cart;
