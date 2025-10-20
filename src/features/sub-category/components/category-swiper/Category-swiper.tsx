import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "./Category-swiper.scss";

import image from "../../../../assets/images/store/swiper.jpg";
import image2 from "../../../../assets/images/store/swiper2.jpg";
import image3 from "../../../../assets/images/store/swiper3.png";

const categories = [
  { title: "Medical tools", items: 15, image: image },
  { title: "Dentistry", items: 9, image: image2 },
  { title: "Hospital Equipment", items: 11, image: image3 },
  { title: "Pharmacy Supplies", items: 50, image: image },
  { title: "All", items: 85, image: image2 },
  { title: "Hospital Equipment", items: 11, image: image3 },
  { title: "Pharmacy Supplies", items: 50, image: image },
  { title: "All", items: 85, image: image2 },
];

const CategorySwiper = () => {
  return (
    <div className="category-swiper-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="category-swiper"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="category-card">
            <div className="image-section">
              <img src={cat.image} alt={cat.title} />
            </div>

            <div className="divider"></div>

            <div className="info-section">
              <h3>{cat.title}</h3>
              <p>{cat.items} items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
