import React, { useState } from "react";
import "./Cart-summary.scss";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";

interface CartSummaryProps {
  subtotal?: number;
  shippingFee?: number;
  total?: number;
  itemCount?: number;
  onCheckout?: () => void;
  onContinueShopping?: () => void;
  onApplyCoupon?: (coupon: string) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal = 2100,
  shippingFee = 0,
  total = 2100,
  itemCount = 2,
  onCheckout,
  onContinueShopping,
  onApplyCoupon,
}) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    onApplyCoupon?.(couponCode);
    setCouponCode("");
  };

  return (
    <div className="cart-summary">
      <Box className="summary-card">
        <Typography variant="h5" className="summary-title">
          invoice
        </Typography>

        <Box className="coupon-section">
          <TextField
            fullWidth
            placeholder="Order Summary"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="coupon-input"
          />
          <Button
            variant="contained"
            className="apply-btn"
            onClick={handleApplyCoupon}
          >
            Apply
          </Button>
        </Box>

        <Box className="summary-details">
          <Box className="summary-row">
            <Typography variant="body1" className="summary-label">
              Subtotal ({itemCount} items)
            </Typography>
            <Typography variant="body1" className="summary-value">
              {subtotal}EGP
            </Typography>
          </Box>

          <Box className="summary-row">
            <Typography variant="body1" className="summary-label">
              Shipping Fee
            </Typography>
            <Typography variant="body1" className="summary-value free">
              FREE
            </Typography>
          </Box>

          <Divider className="summary-divider" />

          <Box className="summary-row total-row">
            <Typography variant="h6" className="summary-label total-label">
              Total
            </Typography>
            <Typography variant="h6" className="summary-value total-value">
              {total}EGP
            </Typography>
          </Box>
        </Box>

        <Box className="action-buttons">
          <Button
            variant="contained"
            className="checkout-btn"
            onClick={onCheckout}
            fullWidth
          >
            Checkout
          </Button>

          <Button
            variant="contained"
            className="continue-btn"
            onClick={onContinueShopping}
            fullWidth
          >
            Complete your shopping
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CartSummary;
