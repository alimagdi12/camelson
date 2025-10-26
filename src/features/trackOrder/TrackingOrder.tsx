import React, { useState } from "react";
import "./trackingOrder.scss";
import correctIcon from "../../assets/icon/home/vector.svg";
import CustomDialog from "../../shared/components/custom-dialog/Custom-dialog";
import { Stack } from "@mui/material";
import Orderdetails from "./components/Orderdetails";
import swiper from "../../../src/assets/images/store/swiper2.jpg";

const TrackingOrder: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Running");
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const handleClose = () => setOpen(false);

  const handleSeeMore = (order: any) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const orders = [
    {
      id: "123595",
      date: "16/10/2025",
      status: "Order Confirmed",
      deliveryPrice: "24 EGP",
      subtotal: "2100 EGP",
      total: "2124 EGP",
      items: [
        {
          id: 1,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "XL",
          pieces: 5,
          price: "2100 EGP",
        },
        {
          id: 2,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "L",
          pieces: 3,
          price: "1500 EGP",
        },
      ],
    },
    {
      id: "123596",
      date: "16/10/2025",
      status: "Order Delivered",
      deliveryPrice: "24 EGP",
      subtotal: "2100 EGP",
      total: "2124 EGP",
      items: [
        {
          id: 1,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "XL",
          pieces: 5,
          price: "2100 EGP",
        },
      ],
    },
    {
      id: "123597",
      date: "16/10/2025",
      status: "Out for Delivery",
      deliveryPrice: "24 EGP",
      subtotal: "2100 EGP",
      total: "2124 EGP",
      items: [
        {
          id: 1,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "M",
          pieces: 2,
          price: "800 EGP",
        },
        {
          id: 2,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "S",
          pieces: 1,
          price: "400 EGP",
        },
      ],
    },
    {
      id: "123598",
      date: "16/10/2025",
      status: "Order Shipped",
      deliveryPrice: "24 EGP",
      subtotal: "2100 EGP",
      total: "2124 EGP",
      items: [
        {
          id: 1,
          name: "White Coat",
          image: swiper,
          description:
            "In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past app...",
          color: "white",
          size: "XXL",
          pieces: 3,
          price: "1800 EGP",
        },
      ],
    },
  ];

  return (
    <div className="track-container">
      {/* Tabs */}
      <div className="toggling-tabs">
        <div
          className={`tab ${activeTab === "Delivery" ? "active" : ""}`}
          onClick={() => setActiveTab("Delivery")}
        >
          Delivery
        </div>
        <div
          className={`tab ${activeTab === "Running" ? "active" : ""}`}
          onClick={() => setActiveTab("Running")}
        >
          Running
        </div>
      </div>

      {/* Orders List */}
      <div className="orders-grid">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-date">
                Order date: <span>{order.date}</span>
              </div>
              <div className="order-id">ID: {order.id}</div>
            </div>

            <div className="order-details">
              <div className="order-status">
                Order status:
                <span
                  className={`status ${
                    order.isDelivered ? "delivered" : "confirmed"
                  }`}
                >
                  {order.status}
                  {order.isDelivered && (
                    <img
                      src={correctIcon}
                      alt="delivered"
                      className="correct-icon"
                    />
                  )}
                </span>
              </div>
              <div className="delivery-price">
                Delivery price: <span>{order.deliveryPrice}</span>
              </div>
              <div className="subtotal">
                Subtotal: <span>{order.subtotal}</span>
              </div>
              <div className="total">
                Total: <strong>{order.total}</strong>
              </div>
            </div>

            <div className="order-footer">
              <button className="see-more" onClick={() => handleSeeMore(order)}>
                See More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <CustomDialog open={open} title="Order Details" onClose={handleClose}>
        <Stack spacing={2} alignItems="center">
          {selectedOrder && <Orderdetails order={selectedOrder} />}
        </Stack>
      </CustomDialog>
    </div>
  );
};

export default TrackingOrder;
