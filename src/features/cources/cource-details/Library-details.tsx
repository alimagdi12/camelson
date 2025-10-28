import React, { useState, useEffect } from "react";
import "./Library-details.scss";
import CategoryCard from "../../../shared/components/card/Card";
import cardImg from "../../../assets/images/library/libirary.jpg";
import CategorySidebar from "../../../shared/components/category-sidebar/CategorySidebar";
import lungImage from "../../../assets/images/store/swiper2.jpg";
import type { Content } from "../../../core/models/sidebarContext";

function LibraryDetails() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [content, setContent] = useState<Content[]>([]);

  const libraries = [
    { id: 1, title: "The Heart", items: 99 },
    { id: 2, title: "Lung", items: 35 },
    { id: 3, title: "Stomach", items: 68 },
    { id: 4, title: "Respiratory System", items: 25 },
    { id: 5, title: "Nervous System", items: 50 },
    { id: 6, title: "Circulatory System", items: 30 },
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
        id: "stomach-structure",
        title: "Stomach Structure",
        description: "The stomach helps in digestion of food.",
        image: lungImage,
      },
      {
        id: "stomach-function",
        title: "Stomach Function",
        description: "Breaks down and digests food efficiently.",
        image: lungImage,
      },
    ],
    4: [
      {
        id: "respiratory-overview",
        title: "Respiratory Overview",
        description: "The respiratory system enables breathing.",
        image: lungImage,
      },
      {
        id: "respiratory-process",
        title: "Respiratory Process",
        description: "Oxygen enters and carbon dioxide exits the lungs.",
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
  }) => {
    setSelectedCategory(category.id);
    setContent(getContentForCategory(category.id));
  };

  // ✅ Default: show first category’s content on first render
  useEffect(() => {
    if (!selectedCategory) {
      const defaultId = libraries[0].id;
      setSelectedCategory(defaultId);
      setContent(getContentForCategory(defaultId));
    }
  }, [selectedCategory]);

  const handleCardClick = (title: string) => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <div className="library-details-container">
      <div className="library-details-content">
        {content.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            image={item.image || cardImg}
            onClick={() => handleCardClick(item.title)}
          />
        ))}
      </div>

      <div className="sidebar-wrapper">
        <CategorySidebar
          title="Library Categories"
          categories={libraries}
          onCategorySelect={handleCategorySelect}
          selectedCategoryId={selectedCategory}
          defaultSelectedId={1}
        />
      </div>
    </div>
  );
}

export default LibraryDetails;
