import React from "react";
import "./categorysidebar.scss";

import image from "../../../../assets/images/store/swiper.jpg";
import image2 from "../../../../assets/images/store/swiper2.jpg";
import image3 from "../../../../assets/images/store/swiper3.png";

const categories = [
  { title: "Medical Tools", items: 15, image: image },
  { title: "Dentistry", items: 9, image: image2 },
  { title: "Hospital Equipment", items: 11, image: image3 },
  { title: "Pharmacy Supplies", items: 50, image: image },
  { title: "All", items: 85, image: image2 },
  { title: "Surgical Tools", items: 30, image: image3 },
  { title: "Laboratory", items: 17, image: image },
];

const CategorySidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Explore Categories</h2>
        <span className="underline"></span>
      </div>

      <div className="category-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <div className="image-wrapper">
              <img src={cat.image} alt={cat.title} />
            </div>
            <div className="info">
              <h4 title={cat.title}>{cat.title}</h4>
              <span>{cat.items} items</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
