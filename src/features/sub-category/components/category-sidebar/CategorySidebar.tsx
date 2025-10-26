import React, { useState } from "react";
import "./categorysidebar.scss";

// Placeholder images - you can replace these with actual medical images
import lungImage from "../../../../assets/images/store/swiper2.jpg";
import searchIcon from "../../../../assets/icon/store/searchicon.svg";
const categories = [
  { id: 1, title: "the heart", items: 99, image: lungImage },
  { id: 2, title: "lung", items: 35, image: lungImage },
  { id: 3, title: "Stomach", items: 68, image: lungImage },
  { id: 4, title: "Respiratory system", items: 25, image: lungImage },
  { id: 5, title: "Nervous system", items: 50, image: lungImage },
  { id: 6, title: "Circulatory system", items: 30, image: lungImage },
];

const CategorySidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(4); // Default to "Respiratory system"
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Subcategory</h2>
        <div className="search-container">
          <div className="search-icon">
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="category-list">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="category-content">
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-info">
                <h4>{category.title}</h4>
                <span>{category.items} items</span>
              </div>
            </div>
            <div
              className={`indicator ${
                selectedCategory === category.id ? "active" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
