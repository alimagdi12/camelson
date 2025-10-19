import "./footer.scss";
import { logo, facebook, linkedin, tiktok, whatsapp } from "../../../assets";

const Footer = () => {
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
          <h3>About us</h3>
          <a href="#">Service policy</a>
          <a href="#">Terms of use</a>
        </div>
      </div>

      <div className="nav-titles">
        <div>
          <h3>Titles</h3>
          <a href="#">Blogs</a>
          <a href="#">Store</a>
        </div>
      </div>
      {/* Right Section - Contact and Address */}
      <div className="technical-support">
        <h3>Technical Support</h3>
        <div className="contacts">
          <div className="contact-item">
            <div className="whatsapp-icon">
              <img src={whatsapp} alt="WhatsApp" />
            </div>
            <span>+20120005165</span>
          </div>
          <div className="contact-item">
            <div className="whatsapp-icon">
              <img src={whatsapp} alt="WhatsApp" />
            </div>
            <span>+20120005165</span>
          </div>{" "}
        </div>

        <div className="address">
          <p>العنوان: مصر - بورسعيد - حي المناخ</p>
          <p>شارع 23 يوليو - برج فرهود الدور الثالث</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
