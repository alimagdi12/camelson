import React, { useState } from "react";
import "./Product-card.scss";
import CustomDialog from "../../../../shared/components/custom-dialog/Custom-dialog";
import { Stack } from "@mui/material";
import ProductDetails from "../product-details/Product-details";
import swiperimage from "../../../../assets/images/store/swiper2.jpg";
import { addtocart, addedtocart } from "../../../../assets";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  const [open, setOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // track if added or not
  const description = "hello from text";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // prevent opening dialog
    setIsAdded((prev) => !prev); // toggle state
    console.log(
      `${!isAdded ? "Added" : "Removed"} ${name} ${
        !isAdded ? "to" : "from"
      } cart`
    );
  };

  return (
    <>
      <div className="product-card" onClick={handleOpen}>
        <div className="product-image">
          <img src={swiperimage} alt={name} />
        </div>

        <div className="product-footer">
          <div className="products-details">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>

          <button
            className={`add-to-cart ${isAdded ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added" : "Add to cart"}{" "}
            <img src={isAdded ? addedtocart : addtocart} alt="" />
          </button>
        </div>
      </div>

      <CustomDialog
        open={open}
        title={name}
        onClose={handleClose}
        onConfirm={handleAddToCart}
        confirmText="Add to Cart"
        hideActions={true}
      >
        <Stack spacing={2} alignItems="center">
          <ProductDetails
            open={open}
            onClose={() => setOpen(false)}
            image={[image, image, image, image, image]}
            name={name}
            price={price}
            description={description}
            colors={["blue", "red", "green"]}
            sizes={["S", "M", "L", "XL", "XXL"]}
          />
        </Stack>
      </CustomDialog>
    </>
  );
};

export default ProductCard;
