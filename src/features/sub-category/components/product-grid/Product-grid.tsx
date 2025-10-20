import React from "react";
import ProductCard from "../product-card/Product-card";
import "./Product-grid.scss";

import labcoat from "../../../../assets/images/store/swiper.jpg";

const products = Array(10).fill({
  image: labcoat,
  name: "Lab Coat",
  price: "200EGP",
});

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>

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
