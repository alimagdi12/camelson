import { Box, Card, CardContent, Typography } from "@mui/material";
import { categoryImg, searchIcon } from "../../assets";
import "./Store.scss";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();
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

  const handleCardClick = (category: string) => {
    navigate(`/store/${category}`);
  };

  return (
    <div className="store-container">
      <div className="searchbar">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="category-card"
            elevation={4}
            sx={{ borderRadius: "16px" }}
            onClick={() => handleCardClick(category)}
          >
            <Box className="card-background">
              <img
                src={categoryImg}
                alt={category}
                className="background-image"
              />
            </Box>

            <CardContent className="card-content">
              <Typography variant="h6" className="card-title">
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
