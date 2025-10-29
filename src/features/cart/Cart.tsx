import { useEffect, useState } from "react";
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load and normalize cart from sessionStorage when the component mounts
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart) {
      const parsed = JSON.parse(storedCart);

      const normalized: CartItem[] = (Array.isArray(parsed) ? parsed : []).map(
        (raw: Record<string, unknown>, index: number) => {
          console.log(raw.price);

          const numericPrice = Number(
            String(raw?.price ?? "")
              .toString()
              .replace(/[^\d.]/g, "")
          );

          return {
            id: String(raw?.id ?? raw?.name ?? index),
            name: String(raw?.name ?? ""),
            description: String(raw?.description ?? ""),
            color: String(raw?.color ?? ""),
            size: String(raw?.size ?? ""),
            price: Number.isFinite(numericPrice) ? numericPrice : 0,
            quantity: Number(raw?.quantity) > 0 ? Number(raw.quantity) : 1,
            image: String(raw?.image ?? ""),
          };
        }
      );

      setCartItems(normalized);
    }
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) || 1 } : item
      );
      sessionStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
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
  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + price * qty;
  }, 0);
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
