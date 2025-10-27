import { categoryImg, searchIcon } from "../../assets";
import "./Store.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePageWidth } from "../../shared/shared.service";
import CategoryCard from "../../shared/components/card/Card";
const Store = () => {
  const navigate = useNavigate();
  const { isMobile } = usePageWidth();
  const { t } = useTranslation();
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
      <div className="store-header d-flex w-100 gap-3">
        <div className="searchbar">
          <div className="search-icon">
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder={t("search.search")}
            className="search-input"
          />
        </div>
        <div className="categories-bar">
          <p className="categories-header">Most Searched :</p>
          {
            isMobile ? (
              <select name="" id="">
                {[
                  "Medical clothing",
                  "Medical devices",
                  "Sterilization materials",
                  "Sterilization materials",
                ].map((item, index) => (
                  <option className="category" key={index}>
                    {item}
                  </option>
                ))}
              </select>
            ) : (
              [
                "Medical clothing",
                "Medical devices",
                "Sterilization materials",
                "Sterilization materials",
              ].map((item, index) => (
                <p className="category" key={index}>
                  {item}
                </p>
              ))
            )
          }
        </div>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category}
            image={categoryImg}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
