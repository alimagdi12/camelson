import React, { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import "./Product-card.scss";
import CustomDialog from "../../../../shared/components/custom-dialog/Custom-dialog";
import { Stack, Typography } from "@mui/material";
import ProductDetails from "../product-details/Product-details";
import swiperimage from "../../../../assets/images/store/swiper2.jpg";
interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  const [open, setOpen] = useState(false);
  const description = "hello from text";
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    setOpen(false);
  };

  return (
    <>
      <div className="product-card" onClick={handleOpen}>
        <div className="product-image">
          <img src={swiperimage} alt={name} />
        </div>

        <div className="product-footer">
          <h3>{name}</h3>
          <p>{price}</p>
          <button className="add-to-cart">
            Add to cart <ShoppingCart fontSize="small" />
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
          {/* <img
            src={image}
            alt={name}
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <Typography variant="body1">
            { "No description available."}
          </Typography>
          <Typography variant="h6" color="primary">
            {price}
          </Typography> */}
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
