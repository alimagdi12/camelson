import React, { useState } from "react";
import ProductCard from "../product-card/Product-card";
import "./Product-grid.scss";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  FilterList,
  Sort,
  Category,
  PriceChange,
  Star,
  Close,
} from "@mui/icons-material";

import labcoat from "../../../../assets/images/store/swiper.jpg";

const products = Array(10).fill({
  image: labcoat,
  name: "Lab Coat",
  price: "200EGP",
});

const ProductGrid = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const filterOptions = [
    {
      icon: <Sort />,
      text: "Sort by Price",
      action: () => console.log("Sort by price"),
    },
    {
      icon: <Category />,
      text: "Filter by Category",
      action: () => console.log("Filter by category"),
    },
    {
      icon: <PriceChange />,
      text: "Price Range",
      action: () => console.log("Price range"),
    },
    {
      icon: <Star />,
      text: "Rating",
      action: () => console.log("Filter by rating"),
    },
  ];

  return (
    <div className="product-grid-container">
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
        <Button
          className="mobile-filter-btn"
          variant="contained"
          startIcon={<FilterList />}
          onClick={handleDrawerOpen}
          sx={{
            minWidth: "auto",
            padding: "8px 12px",
            backgroundColor: "#f7a600",
            "&:hover": {
              backgroundColor: "#e69500",
            },
          }}
        >
          Filter
        </Button>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#f7a600", fontWeight: "bold" }}
            >
              Filter Options
            </Typography>
            <IconButton onClick={handleDrawerClose} sx={{ color: "#666" }}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {filterOptions.map((option, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={() => {
                    option.action();
                    handleDrawerClose();
                  }}
                  sx={{
                    borderRadius: "8px",
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#f8f9fa",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#f7a600", minWidth: 40 }}>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={option.text}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  />
                </ListItem>
                {index < filterOptions.length - 1 && (
                  <Divider sx={{ my: 1, opacity: 0.3 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            image={p.image}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
