import "./footer.scss";
import { logo, facebook, linkedin, tiktok, whatsapp } from "../../../assets";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      {/* Left Section - Logo and Social Media */}
      <div className="logo-section">
        <div className="logo">
          <img src={logo} alt="SECHAT Logo" className="logo-image" />
        </div>
        <div className="social-media">
          <div className="social-btn facebook">
            <img src={facebook} alt="Facebook" />
          </div>
          <div className="social-btn tiktok">
            <img src={tiktok} alt="TikTok" />
          </div>
          <div className="social-btn linkedin">
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Middle Section - Navigation Links */}
      <div className="nav-section">
        <div className="nav-aboutus">
          <h3>{t("footer.about.title")}</h3>
          <a href="#">{t("footer.about.policy")}</a>
          <a href="#">{t("footer.about.terms")}</a>
        </div>
      </div>

      {/* Titles Section */}
      <div className="nav-titles">
        <div>
          <h3>{t("footer.titles.title")}</h3>
          <a href="#">{t("footer.titles.blogs")}</a>
          <a href="#">{t("footer.titles.store")}</a>
        </div>
      </div>

      {/* Technical Support Section */}
      <div className="technical-support">
        <h3>{t("footer.support.title")}</h3>

        <div className="contacts">
          {t("footer.support.phones", { returnObjects: true }).map(
            (phone, i) => (
              <div className="contact-item" key={i}>
                <div className="whatsapp-icon">
                  <img src={whatsapp} alt="WhatsApp" />
                </div>
                <span>{phone}</span>
              </div>
            )
          )}
        </div>

        <div className="address">
          {t("footer.support.address", { returnObjects: true }).map(
            (line, i) => (
              <p key={i}>{line}</p>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
