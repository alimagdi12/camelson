import { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./swiper.scss";
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

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // center card

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box className="carousel">
      <button className="nav prev" onClick={handlePrev}>
        ‹
      </button>
      <div className="carousel-track">
        {items.map((item, index) => {
          const position = index - activeIndex;
          const isActive = index === activeIndex;
          const scale = isActive ? 1 : 0.8;
          const opacity = isActive ? 1 : 0.6;
          const cardWidth = isActive ? 502 : 400;
          const cardHeight = isActive ? 550 : 600;

          return (
            <Card
            id="features"
              key={item.id}
              className="carousel-card"
              onClick={() => handleCardClick(index)}
              style={{
                transform: `translateX(${position * 350}px) scale(${scale})`,
                opacity,
                zIndex: isActive ? 2 : 1,
                width: "20%",
                height: cardHeight,
              }}
            >
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
          );
        })}
      </div>
      <button className="nav next" onClick={handleNext}>
        ›
      </button>
    </Box>
  );
};

export default Carousel;
