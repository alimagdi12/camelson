import React from "react";
import "./Cart-card.scss";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";
import type { CartCardProps } from "../../../../core/models/cart";

const CartCard: React.FC<CartCardProps> = ({
  items = [],
  onQuantityChange,
  onRemoveItem,
}) => {
  const cartItems = items;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    onQuantityChange?.(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    onRemoveItem?.(id);
  };

  return (
    <div className="cart-card-container">
      <Box className="cart-items">
        {cartItems.length === 0 ? (
          <Typography variant="h6" sx={{ p: 2 }}>
            No items in cart
          </Typography>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} className="cart-item">
              {/* Product Image */}
              <Box className="product-image">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+";
                  }}
                />
              </Box>

              {/* Product Details */}
              <Box className="product-details">
                <Typography variant="h6" className="product-name">
                  {item.name}
                </Typography>

                <Typography variant="body2" className="product-description">
                  {item.description}
                </Typography>

                <Box className="product-attributes">
                  <Typography variant="body2" className="attribute">
                    color: {item.color}
                  </Typography>
                  <Typography variant="body2" className="attribute">
                    size: {item.size}
                  </Typography>
                </Box>

                {/* Quantity Controls */}
                <Box className="quantity-controls">
                  <IconButton
                    className="quantity-btn"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Remove />
                  </IconButton>

                  <TextField
                    value={item.quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      handleQuantityChange(item.id, value);
                    }}
                    className="quantity-input"
                    inputProps={{
                      min: 1,
                      style: { textAlign: "center" },
                    }}
                  />

                  <IconButton
                    className="quantity-btn"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <Add />
                  </IconButton>
                </Box>
              </Box>

              {/* Remove Button */}
              <IconButton
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                <Close />
              </IconButton>
            </Box>
          ))
        )}
      </Box>
    </div>
  );
};

export default CartCard;
