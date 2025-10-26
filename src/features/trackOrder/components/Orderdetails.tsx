import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./orderdetails.scss";
import order1 from "../../../assets/icon/store/order1.svg";
import order2 from "../../../assets/icon/store/order2.svg";
import order3 from "../../../assets/icon/store/order3.svg";
import order4 from "../../../assets/icon/store/order4.svg";

// Custom Connector
const OrderConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#ffbe3b",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#ffbe3b",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 2,
    borderRadius: 1,
    borderColor: "#e0e0e0",
  },
}));

// Custom Step Icon
const OrderStepIcon = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed
    ? "#ffbe3b"
    : ownerState.active
    ? "#ffbe3b"
    : "#f5f5f5",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  "& img": {
    width: 24,
    height: 24,
    objectFit: "contain",
    filter:
      ownerState.completed || ownerState.active
        ? "brightness(0) invert(1)"
        : "brightness(0)",
  },
}));

const Orderdetails = ({ order }) => {
  if (!order) return null;

  // Destructure order data
  const { id, date, status, deliveryPrice, subtotal, total, items } = order;

  // Get active step based on order status
  const getActiveStep = (orderStatus) => {
    switch (orderStatus) {
      case "Order Confirmed":
        return 0; // First step active
      case "Order Shipped":
        return 1; // Second step active
      case "Out for Delivery":
        return 2; // Third step active
      case "Order Delivered":
        return 3; // Fourth step active
      default:
        return 0;
    }
  };

  const steps = [
    "Order Confirmed",
    "Order Shipped",
    "Out for Delivery",
    "Order Delivered",
  ];

  const activeStep = getActiveStep(status);

  // Custom step icon component
  const CustomStepIcon = (props) => {
    const { active, completed, icon } = props;
    const icons = [order1, order2, order3, order4];

    return (
      <OrderStepIcon ownerState={{ completed, active }}>
        <img src={icons[icon - 1]} alt={`Step ${icon}`} />
      </OrderStepIcon>
    );
  };

  return (
    <div className="order-details-modal">
      {/* Header */}
      <div className="order-header">
        <div className="order-date">Order date: {date}</div>
        <div className="order-id">ID: {id}</div>
      </div>

      {/* Items */}
      <div className="order-items">
        {items.map((item, index) => (
          <div key={item.id} className="order-item">
            <div className="item-content">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
                <div className="item-specs">
                  <span>Color: {item.color}</span>
                  <span>Size: {item.size}</span>
                  <span>Pieces: {item.pieces}</span>
                </div>
              </div>
              <div className="item-price">{item.price}</div>
            </div>
            {index < items.length - 1 && <div className="item-divider"></div>}
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="order-progress">
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<OrderConnector />}
          sx={{
            "& .MuiStepLabel-label": {
              fontSize: "12px",
              fontWeight: 500,
              color: "#666",
              "&.Mui-active": {
                color: "#ffbe3b",
                fontWeight: 600,
              },
              "&.Mui-completed": {
                color: "#ffbe3b",
                fontWeight: 600,
              },
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Pricing */}
      <div className="pricing-summary">
        <div className="price-row">
          <span>Delivery price:</span>
          <span>{deliveryPrice}</span>
        </div>
        <div className="price-row">
          <span>Subtotal:</span>
          <span>{subtotal}</span>
        </div>
      </div>

      {/* Total */}
      <div className="total-section">
        <span>Total:</span>
        <span className="total-amount">{total}</span>
      </div>
    </div>
  );
};

export default Orderdetails;
