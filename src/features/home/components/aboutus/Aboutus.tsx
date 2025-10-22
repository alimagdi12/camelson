import "./aboutus.scss";
import "../../../../shared/components/pharoah-line/Pharoah-line";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="about-section" id="ourstory">
        <h1 style={{ textAlign: i18n.language === "en" ? "left" : "right" }}>
          {t("home.question1")}
        </h1>

        <p>{t("home.paragrahph1")}</p>
        <p>{t("home.paragrahph2")}</p>
        <p>{t("home.paragrahph3")}</p>
        <p>{t("home.paragrahph4")}</p>
      </div>
    </>
  );
};

export default Aboutus;
