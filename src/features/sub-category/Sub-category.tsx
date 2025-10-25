import React from "react";
import "./Sub-category.scss";
import CategorySwiper from "./components/category-swiper/Category-swiper";
import ProductGrid from "./components/product-grid/Product-grid";
import CategorySidebar from "./components/category-sidebar/CategorySidebar";
function SubCategory() {
  return (
    <div className="sub-category-container">
      {/* <CategorySwiper/> */}
      <ProductGrid />
      <CategorySidebar />
    </div>
  );
}

export default SubCategory;
