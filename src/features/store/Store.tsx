import { Box, Card, CardContent, Typography } from "@mui/material";
import { categoryImg, searchIcon } from "../../assets";

import "./Store.scss";
import { useTranslation } from "react-i18next";
const Store = () => {
  const {t } = useTranslation()
  const categories: string[] = [
    "Electronics",
    "Fashion",
    "Home",
    "Books",
    "labs",
    "labs",
    "labs",
    "labs",
    "labs",
    "labs",
  ];

  return (
    <div className="store-container">
      <div className="searchbar">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" placeholder={t("search.search")} className="search-input" />
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <Card key={index} className="category-card" elevation={4} sx={{ borderRadius: '16px' }}>
            <Box className="card-background">
              <img
                src={categoryImg}
                alt={category}
                className="background-image"
              />
            </Box>
          
            <CardContent className="card-content">
              <Typography variant="h6" className="card-title" fontWeight={700}>
                {category}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Store;
