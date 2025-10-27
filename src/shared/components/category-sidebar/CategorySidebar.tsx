import React, { useState } from "react";
import "./categorysidebar.scss";
import searchicon from "../../../assets/icon/store/searchicon.svg";
import type {Category ,CategorySidebarProps,} from "../../../core/models/categorySidebar";

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  title = "Subcategory",
  categories,
  defaultSelectedId,
  showSearch = true,
  onCategorySelect,
  searchPlaceholder = "Search",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    defaultSelectedId
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (category: Category) => {
    setSelectedCategory(category.id);
    onCategorySelect?.(category); // optional callback
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>{title}</h2>

        {showSearch && (
          <div className="search-container">
            <div className="search-icon">
              <img src={searchicon} alt="Search" />
            </div>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        )}
      </div>

      <div className="category-list">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => handleSelect(category)}
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
