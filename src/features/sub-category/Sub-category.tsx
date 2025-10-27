import React, { useState, useEffect } from "react";
import "./Sub-category.scss";
import ProductGrid from "./components/product-grid/Product-grid";
import CategorySidebar from "../../shared/components/category-sidebar/CategorySidebar";
import type { Content } from "../../core/models/sidebarContext";

import lungImage from "../../assets/images/store/swiper2.jpg";

function SubCategory() {
  // Local state for selected category
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [content, setContent] = useState<Content | null>(null);

  const categoryData = [
    { id: 1, title: "The Heart", items: 99, image: lungImage },
    { id: 2, title: "Lung", items: 35, image: lungImage },
    { id: 3, title: "Stomach", items: 68, image: lungImage },
    { id: 4, title: "Respiratory System", items: 25, image: lungImage },
    { id: 5, title: "Nervous System", items: 50, image: lungImage },
    { id: 6, title: "Circulatory System", items: 30, image: lungImage },
  ];

  // Content array for each category (same as Library)
  const contentData: Record<number, Content[]> = {
    1: [
      // The Heart
      {
        id: "heart-anatomy",
        title: "Heart Anatomy Overview",
        description:
          "The heart is a muscular organ that pumps blood throughout the body. It has four chambers: two atria and two ventricles.",
        image: lungImage,
      },
      {
        id: "heart-chambers",
        title: "Heart Chambers",
        description:
          "The heart consists of four chambers: right atrium, right ventricle, left atrium, and left ventricle. Each plays a crucial role in blood circulation.",
        image: lungImage,
      },
      {
        id: "heart-valves",
        title: "Heart Valves",
        description:
          "Four valves ensure one-way blood flow: tricuspid, pulmonary, mitral, and aortic valves. They prevent backflow of blood.",
        image: lungImage,
      },
      {
        id: "heart-circulation",
        title: "Blood Circulation",
        description:
          "The heart pumps oxygenated blood to the body and receives deoxygenated blood from the lungs in a continuous cycle.",
        image: lungImage,
      },
    ],
    2: [
      // Lung
      {
        id: "lung-structure",
        title: "Lung Structure",
        description:
          "The lungs are paired organs in the chest that facilitate gas exchange. The right lung has three lobes, the left has two.",
        image: lungImage,
      },
      {
        id: "lung-function",
        title: "Lung Function",
        description:
          "Lungs exchange oxygen and carbon dioxide between the blood and the air we breathe through the process of respiration.",
        image: lungImage,
      },
      {
        id: "lung-alveoli",
        title: "Alveoli",
        description:
          "Tiny air sacs called alveoli are where gas exchange occurs. There are about 300 million alveoli in each lung.",
        image: lungImage,
      },
      {
        id: "lung-diseases",
        title: "Common Lung Diseases",
        description:
          "Common lung conditions include asthma, COPD, pneumonia, and lung cancer. Early detection is crucial for treatment.",
        image: lungImage,
      },
    ],
    3: [
      // Stomach
      {
        id: "stomach-anatomy",
        title: "Stomach Anatomy",
        description:
          "The stomach is a J-shaped organ that stores and breaks down food. It has four main regions: cardia, fundus, body, and antrum.",
        image: lungImage,
      },
      {
        id: "stomach-function",
        title: "Stomach Function",
        description:
          "The stomach secretes gastric juices containing hydrochloric acid and enzymes to break down proteins and kill bacteria.",
        image: lungImage,
      },
      {
        id: "stomach-digestion",
        title: "Digestive Process",
        description:
          "Food is mechanically and chemically broken down in the stomach before being passed to the small intestine for absorption.",
        image: lungImage,
      },
      {
        id: "stomach-disorders",
        title: "Stomach Disorders",
        description:
          "Common stomach issues include gastritis, ulcers, GERD, and stomach cancer. Diet and lifestyle play important roles in prevention.",
        image: lungImage,
      },
    ],
    4: [
      // Respiratory System
      {
        id: "respiratory-overview",
        title: "Respiratory System Overview",
        description:
          "The respiratory system includes the nose, pharynx, larynx, trachea, bronchi, and lungs. It supplies oxygen and removes carbon dioxide.",
        image: lungImage,
      },
      {
        id: "respiratory-pathway",
        title: "Air Pathway",
        description:
          "Air travels through the nose/mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli for gas exchange.",
        image: lungImage,
      },
      {
        id: "respiratory-mechanics",
        title: "Breathing Mechanics",
        description:
          "Breathing involves the diaphragm and intercostal muscles. Inhalation expands the chest, exhalation compresses it.",
        image: lungImage,
      },
      {
        id: "respiratory-diseases",
        title: "Respiratory Diseases",
        description:
          "Common conditions include asthma, bronchitis, pneumonia, and COVID-19. Prevention includes avoiding smoking and pollutants.",
        image: lungImage,
      },
    ],
    5: [
      // Nervous System
      {
        id: "nervous-overview",
        title: "Nervous System Overview",
        description:
          "The nervous system controls and coordinates all body functions. It consists of the central nervous system (CNS) and peripheral nervous system (PNS).",
        image: lungImage,
      },
      {
        id: "nervous-brain",
        title: "The Brain",
        description:
          "The brain is the control center containing the cerebrum, cerebellum, and brainstem. It processes information and controls body functions.",
        image: lungImage,
      },
      {
        id: "nervous-spinal-cord",
        title: "Spinal Cord",
        description:
          "The spinal cord connects the brain to the rest of the body. It carries nerve signals and coordinates reflex actions.",
        image: lungImage,
      },
      {
        id: "nervous-neurons",
        title: "Neurons",
        description:
          "Neurons are the basic units of the nervous system. They transmit electrical and chemical signals throughout the body.",
        image: lungImage,
      },
    ],
    6: [
      // Circulatory System
      {
        id: "circulatory-overview",
        title: "Circulatory System Overview",
        description:
          "The circulatory system transports blood, nutrients, oxygen, and waste products throughout the body via the heart and blood vessels.",
        image: lungImage,
      },
      {
        id: "circulatory-heart",
        title: "The Heart",
        description:
          "The heart pumps blood through two circuits: pulmonary (lungs) and systemic (body). It beats about 100,000 times per day.",
        image: lungImage,
      },
      {
        id: "circulatory-vessels",
        title: "Blood Vessels",
        description:
          "Arteries carry oxygenated blood away from the heart, veins return deoxygenated blood, and capillaries enable gas exchange.",
        image: lungImage,
      },
      {
        id: "circulatory-blood",
        title: "Blood Components",
        description:
          "Blood contains red blood cells (oxygen transport), white blood cells (immunity), platelets (clotting), and plasma (liquid).",
        image: lungImage,
      },
    ],
  };

  // Get content for a specific category
  const getContentForCategory = (categoryId: number): Content[] => {
    return contentData[categoryId] || [];
  };

  // Handle category selection
  const handleCategorySelect = (category: {
    id: number;
    title: string;
    items: number;
    image: string;
  }) => {
    setSelectedCategory(category.id);

    // Get the first content item from the array for this category
    const categoryContent = getContentForCategory(category.id);

    if (categoryContent.length > 0) {
      setContent(categoryContent[0]); // Set first content item
    }
  };

  // Auto-select default category on component mount
  useEffect(() => {
    if (!selectedCategory && categoryData.length > 0) {
      const defaultCategory =
        categoryData.find((cat) => cat.id === 4) || categoryData[0];
      setSelectedCategory(defaultCategory.id);
      // Get the first content item from the array for this category
      const categoryContent = getContentForCategory(defaultCategory.id);
      if (categoryContent.length > 0) {
        setContent(categoryContent[0]); // Set first content item
      }
    }
  }, []);

  // Render simple content
  const renderContent = () => {
    if (!content) {
      return (
        <div className="empty-state">
          <h3>Select a Category</h3>
          <p>Choose a category from the sidebar to view its content.</p>
        </div>
      );
    }

    return (
      <div className="simple-content">
        {content.image && (
          <div className="content-image">
            <img src={content.image} alt={content.title} />
          </div>
        )}
        <div className="content-text">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="sub-category-container">
      {/* <CategorySwiper/> */}
      
        <ProductGrid />

      <div className="category-sidebar-container">
        <CategorySidebar
          title="Medical Categories"
          categories={categoryData}
          defaultSelectedId={selectedCategory || 4}
          onCategorySelect={handleCategorySelect}
          showSearch={true}
          searchPlaceholder="Search category..."
        />
      </div>
    </div>
  );
}

export default SubCategory;
