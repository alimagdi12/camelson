import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "./Category-swiper.scss";

import type { Category } from "../../../../core/models/categorySidebar";

interface CategorySwiperProps {
  categories: Category[];
  onCategorySelect?: (category: Category) => void;
  selectedCategoryId?: number;
}

const CategorySwiper: React.FC<CategorySwiperProps> = ({
  categories,
  onCategorySelect,
  selectedCategoryId,
}) => {
  return (
    <div className="category-swiper-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="category-swiper"
      >
        {categories.map((cat) => (
          <SwiperSlide
            key={cat.id}
            className="category-card"
            onClick={() => onCategorySelect?.(cat)}
            data-active={selectedCategoryId === cat.id ? "true" : "false"}
          >
            <div className="image-section">
              <img src={cat.image} alt={cat.title} />
            </div>

            <div className="divider"></div>

            <div className="info-section">
              <h3 data-title={cat.title}>{cat.title}</h3>
              <p>{cat.items} items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
