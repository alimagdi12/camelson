import React, { useMemo, useState } from "react";
import { IconButton, Button } from "@mui/material";
import { Add, Remove, ShoppingCart, ArrowBack, ArrowForward } from "@mui/icons-material";
import "./Product-details.scss";

interface ProductDetailsProps {
  image: string | string[];
  name: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  image,
  name,
  price,
  description,
  colors,
  sizes,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // stable image array
  const images = useMemo(() => (Array.isArray(image) ? image : [image]), [image]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="details-card">
      {/* LEFT IMAGE SECTION */}
      <div className="details-img">
        <div className="custom-slider">
          <img src={images[currentIndex]} alt={name} className="main-img" />

          {images.length > 1 && (
            <>
              <IconButton className="nav-btn left" onClick={handlePrev}>
                <ArrowBack />
              </IconButton>
              <IconButton className="nav-btn right" onClick={handleNext}>
                <ArrowForward />
              </IconButton>
            </>
          )}

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT DETAILS SECTION */}
      <div className="details-body">
        <div className="title-row">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{price}</span>
        </div>

        <div className="orange-line"></div>

        <p className="description">{description}</p>

        <div className="selectors">
          <div className="option-group">
            <span className="option-label">COLOR</span>
            {colors.map((color) => (
              <button
                key={color}
                className={`option-btn ${selectedColor === color ? "active" : ""}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>

          <div className="option-group">
            <span className="option-label">SIZE</span>
            {sizes.map((size) => (
              <button
                key={size}
                className={`option-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <IconButton
            className="quantity-btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Remove />
          </IconButton>
          <span className="quantity">{quantity}</span>
          <IconButton className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
            <Add />
          </IconButton>
        </div>

        <Button className="add-cart-btn" variant="outlined">
          Add to cart <ShoppingCart sx={{ ml: 1 }} />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
