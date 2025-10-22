import { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./mobile-swiper.scss";
import { swiperImg1 } from "../../../../assets";

const items = [
  {
    id: 1,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 2,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 3,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 4,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 5,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 6,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
  {
    id: 7,
    title: "Demo text",
    description:
      "Yes, anyone pursuing a career in medicine, nursing, or health care can benefit from our platform, which turns complex topics into easy-to-understand videos. We help users confidently",
  },
];

const MobileSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box className="mobile-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mobile-swiper-container"
        direction="horizontal"
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={300}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card className="mobile-carousel-card">
              <div className="card-background">
                <img
                  src={swiperImg1}
                  alt="Background"
                  className="background-image"
                />
              </div>
              <CardContent className="card-content">
                <Typography variant="h4" className="card-title">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="nav prev swiper-button-prev-custom">‹</button>
      <button className="nav next swiper-button-next-custom">›</button>

      {/* Custom Pagination */}
      <div className="dots-container swiper-pagination-custom"></div>
    </Box>
  );
};

export default MobileSwiper;
