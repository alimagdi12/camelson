import React, { useEffect, useState } from "react";
import "./Product-card.scss";
import CustomDialog from "../../../../shared/components/custom-dialog/Custom-dialog";
import { Stack } from "@mui/material";
import ProductDetails from "../product-details/Product-details";
import addtocart from "../../../../assets/icon/store/addtocart.svg";
import addedtocart from "../../../../assets/icon/store/addedtocart.svg";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  quantity?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  quantity,
}) => {
  const [open, setOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // track if added or not
  const description = "hello from text";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleAddToCart = (e?: React.MouseEvent) => {
  //   e?.stopPropagation(); // prevent opening dialog
  //   setIsAdded((prev) => !prev); // toggle state
  //   console.log(
  //     `${!isAdded ? "Added" : "Removed"} ${name} ${
  //       !isAdded ? "to" : "from"
  //     } cart`
  //   );
  // };

  useEffect(() => {
    const cart: Array<{ name: string }> = JSON.parse(
      sessionStorage.getItem("cart") || "[]"
    );
    const isAlreadyAdded = cart.some((item) => item.name === name);
    setIsAdded(isAlreadyAdded);
  }, [name]);

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // prevent opening dialog

    const cart: Array<{
      id?: string;
      name: string;
      price?: number;
      image?: string;
      quantity?: number;
    }> = JSON.parse(sessionStorage.getItem("cart") || "[]");

    if (!isAdded) {
      const numericPrice = Number(String(price).replace(/[^\d.]/g, "")) || 0;
      const newCart = [
        ...cart,
        {
          id: name,
          name,
          price: numericPrice,
          image,
          quantity: quantity && quantity > 0 ? quantity : 1,
        },
      ];

      sessionStorage.setItem("cart", JSON.stringify(newCart));
      console.log(`Added ${name} to cart`);
    } else {
      const updatedCart = cart.filter((item) => item.name !== name);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(`Removed ${name} from cart`);
    }

    setIsAdded((prev) => !prev); // toggle state
  };
  return (
    <>
      <div className="product-card" onClick={handleOpen}>
        <div className="product-image">
          <img src={image} alt={name} />
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
