import React from "react";
import "./Images-section.scss";
import upImage from "../../../../assets/images/home/upper.jpg";
import middleImage from "../../../../assets/images/home/mddle.jpg";
import underImage from "../../../../assets/images/home/under.jpg";
import { useTranslation } from "react-i18next";

function ImagesSection() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="images-section"
      style={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
      }}
    >
      <div className="left-section">
        <img src={upImage} alt="pharoah" className="upper-image" />
        <img src={middleImage} alt="pharoah" className="middle-image" />
        <img src={underImage} alt="pharoah" className="lower-image" />
      </div>

      <div 
        className="right-section"
        style={{ 
          textAlign: i18n.language === "en" ? "left" : "right",
          right: i18n.language === "ar" ? "auto" : "5%",
          left: i18n.language === "ar" ? "5%" : "auto"
        }}
      >
        <h1 style={{ textAlign: i18n.language === "en" ? "left" : "right" }}>
          {t("home.question1")}
        </h1>
        <p>{t("home.paragraph5")}</p>
        <p>{t("home.paragraph6")}</p>
      </div>
    </div>
  );
}

export default ImagesSection;