import "./footer.scss";
import { logo, facebook, linkedin, tiktok, whatsapp } from "../../../assets";
import { useCheckIfPathIncludes } from "../../shared.service";
const Footer = () => {
  const shouldHideFooter = useCheckIfPathIncludes([
    "/user-management",
    "/complete-data",
    "/request-data",
  ]);
  console.log(shouldHideFooter);
  
  return (
    <footer className={`footer ${shouldHideFooter ? "none" : ""}`}>
      <div className="footer-logo">
        <img src={logo} alt="Sechat Logo" />
      </div>

      <div className="footer-section">
        <h3 className="title">Titles</h3>
        <a href="#">About us</a>
        <a href="#">Service policy</a>
        <a href="#">Terms of use</a>
      </div>

      <div className="footer-section with-divider">
        <h3 className="title">Titles</h3>
        <a href="#">Blogs</a>
        <a href="#">Store</a>
      </div>

      <div className="footer-section with-divider">
        <h3 className="title">Social Media</h3>
        <div className="social-item">
          <img src={facebook} alt="Facebook" />
          <span>Camelson Tech</span>
        </div>
        <div className="social-item">
          <img src={linkedin} alt="LinkedIn" />
          <span>Camelson Tech</span>
        </div>
        <div className="social-item">
          <img src={tiktok} alt="TikTok" />
          <span>x.Camelson-Tech.x</span>
        </div>
      </div>

      <div className="footer-section with-divider">
        <h3 className="title">Technical Support</h3>
        <div className="support-item">
          <img src={whatsapp} alt="WhatsApp" />
          <span>+20120005165</span>
        </div>
        <div className="support-item">
          <img src={whatsapp} alt="WhatsApp" />
          <span>+20120005165</span>
        </div>
        <p className="support-text">
          WATZesxrctfvkbhjklm;;agkljhibuvs <br />
          abhknjdlbge;biuawgaw;iueegas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
