import React from "react";
import Carousel from "./Swiper";
import MobileSwiper from "./MobileSwiper";

const SwiperWrapper = () => {
  return (
    <>
      {/* Desktop Swiper - Hidden on mobile */}
      <Carousel />

      {/* Mobile Swiper - Hidden on desktop */}
      <MobileSwiper />
    </>
  );
};

export default SwiperWrapper;
