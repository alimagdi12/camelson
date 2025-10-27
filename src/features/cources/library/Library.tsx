import React, { useState } from "react";
import "./Library.scss";
import CategorySidebar from "../../../shared/components/category-sidebar/CategorySidebar";
import type { Content } from "../../../core/models/sidebarContext";
import lungImage from "../../../assets/images/store/swiper2.jpg";
import selectImage from "../../../assets/gif/data-loading.gif";

function Library() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [content, setContent] = useState<Content | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Overview");

  const categoryData = [
    { id: 1, title: "The Heart", items: 99, image: lungImage },
    { id: 2, title: "Lung", items: 35, image: lungImage },
    { id: 3, title: "Stomach", items: 68, image: lungImage },
    { id: 4, title: "Respiratory System", items: 25, image: lungImage },
    { id: 5, title: "Nervous System", items: 50, image: lungImage },
    { id: 6, title: "Circulatory System", items: 30, image: lungImage },
  ];

  const contentData: Record<number, Content[]> = {
    1: [
      {
        id: "heart-anatomy",
        title: "Heart Anatomy Overview",
        description:
          "The heart is a muscular organ that pumps blood throughout the body.",
        image: lungImage,
      },
      {
        id: "heart-chambers",
        title: "Heart Chambers",
        description: "Four chambers help in blood circulation.",
        image: lungImage,
      },
    ],
    2: [
      {
        id: "lung-structure",
        title: "Lung Structure",
        description:
          "The lungs are paired organs in the chest that facilitate gas exchange.",
        image: lungImage,
      },
      {
        id: "lung-function",
        title: "Lung Function",
        description: "Lungs exchange oxygen and carbon dioxide.",
        image: lungImage,
      },
    ],
    3: [
      {
        id: "lung-structure",
        title: "Lung Structure",
        description:
          "The lungs are paired organs in the chest that facilitate gas exchange.",
        image: lungImage,
      },
      {
        id: "lung-function",
        title: "Lung Function",
        description: "Lungs exchange oxygen and carbon dioxide.",
        image: lungImage,
      },
    ],
    4: [
      {
        id: "lung-structure",
        title: "Lung Structure",
        description:
          "The lungs are paired organs in the chest that facilitate gas exchange.",
        image: lungImage,
      },
      {
        id: "lung-function",
        title: "Lung Function",
        description: "Lungs exchange oxygen and carbon dioxide.",
        image: lungImage,
      },
    ],
  };

  const getContentForCategory = (categoryId: number): Content[] =>
    contentData[categoryId] || [];

  const handleCategorySelect = (category: {
    id: number;
    title: string;
    items: number;
    image: string;
  }) => {
    setSelectedCategory(category.id);
    setActiveTab("Overview"); // ✅ reset tab when selecting new category
    const categoryContent = getContentForCategory(category.id);
    setContent(categoryContent.length > 0 ? categoryContent[0] : null);
  };

  const renderTabContent = (tab: string, categoryContent: Content[]) => {
    switch (tab) {
      case "Overview":
        return (
          <div className="library">
            {categoryContent.map((item) => (
              <div key={item.id} className="library-card">
                <img src={item.image} alt={item.title} className="card-image" />
                <h3 className="card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        );

      case "Books":
        return (
          <div className="empty-state">
            <p>Books related to this category will appear here.</p>
          </div>
        );

      case "Lectures":
        return (
          <div className="empty-state">
            <p>Lectures related to this category will appear here.</p>
          </div>
        );

      default:
        return null;
    }
  };

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <div className="library-placeholder">
          <img src={selectImage} alt="select" />
          <p>
            Please <span>select</span> the library <span>you need!</span>
          </p>
        </div>
      );
    }

    const categoryContent = getContentForCategory(selectedCategory);
    if (!categoryContent.length) {
      return (
        <div className="empty-state">
          <p>No content found for this category.</p>
        </div>
      );
    }

    return (
      <div className="simple-content">
        <div className="tabs">
          {["Overview", "Books", "Lectures"].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        {renderTabContent(activeTab, categoryContent)}
      </div>
    );
  };

  return (
    <div className="library-container">
      <div className="sidebar-wrapper">
        <CategorySidebar
          title="Library Categories"
          categories={categoryData}
          showSearch={true}
          searchPlaceholder="Search category..."
          onCategorySelect={handleCategorySelect}
          defaultSelectedId={selectedCategory || undefined}
        />
      </div>

      <div
        className={`content-library ${
          selectedCategory ? "transparent-bg" : ""
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default Library;
