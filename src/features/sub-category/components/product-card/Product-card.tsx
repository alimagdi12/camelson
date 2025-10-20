import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import "./Product-card.scss";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className="product-card">
      {/* <div className="product-image">
        <img src={image} alt={name} />
      </div> */}

      <div className="product-footer">
        <h3>{name}</h3>
        <p>{price}</p>
        <button className="add-to-cart">
          Add to cart <ShoppingCart fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
