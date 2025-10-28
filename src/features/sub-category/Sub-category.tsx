import React, { useEffect, useMemo, useState } from "react";
import "./Sub-category.scss";
import ProductGrid from "./components/product-grid/Product-grid";
import CategorySidebar from "../../shared/components/category-sidebar/CategorySidebar";
import type { Content } from "../../core/models/sidebarContext";
import { useSearchParams } from "react-router-dom";
import { fetchCategoryById, type StoreCategory } from "../../shared/services/store.service";

import lungImage from "../../assets/images/store/swiper2.jpg";

function SubCategory() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId') || '';
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<StoreCategory | null>(null);
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
  const [gridSearch, setGridSearch] = useState("");

  // Legacy content kept but unused for store flow; safe to remove later
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

  // Sidebar selection maps to subcategory id
  const handleSidebarSelect = (sub: { id: number; title: string; items: number; image: string; }) => {
    setSelectedSubId(String(sub.id));
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchCategoryById(categoryId);
        if (mounted) {
          setCategory(data ?? null);
          const firstSub = data?.subCategories?.[0]?.id || null;
          setSelectedSubId(firstSub);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [categoryId]);

  const sidebarCategories = useMemo(() => {
    return (category?.subCategories || []).map((s) => ({
      id: Number.NaN, // component expects number; use a hashless fallback index mapping
      title: s.name,
      items: s.products?.length || 0,
      image: lungImage,
      _realId: s.id,
    })) as any[];
  }, [category]);

  // Build products for current subcategory selection
  const products = useMemo(() => {
    const sub = category?.subCategories.find((s) => s.id === (selectedSubId || ''));
    const list = sub?.products || [];
    const q = gridSearch.trim().toLowerCase();
    const filtered = q ? list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) : list;
    return filtered.map(p => ({ image: p.images?.[0] || lungImage, name: p.name, price: `${p.price} EGP` }));
  }, [category, selectedSubId, gridSearch]);

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
      {loading ? (
        <div className="main-content"><p>Loading...</p></div>
      ) : (
        <ProductGrid products={products} onSearchChange={setGridSearch} />
      )}

      <div className="category-sidebar-container">
        {!loading && (
          <CategorySidebar
          title="Subcategory"
          categories={sidebarCategories as any}
          defaultSelectedId={undefined}
          onCategorySelect={(c: any) => {
            // original comp uses numeric ids; we pass through name match
            const match = (category?.subCategories || []).find(s => s.name === c.title);
            if (match) setSelectedSubId(match.id);
          }}
          showSearch={true}
          searchPlaceholder="Search subcategory..."
        />
        )}
      </div>
    </div>
  );
}

export default SubCategory;
