import "./navbar.scss";
import { logo, lang, toggle, eclipse } from "../../../assets";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckIfPathIncludes } from "../../shared.service";

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Change layout direction based on selected language
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setSelectedLanguage(newLang === "ar" ? "Arabic" : "English");
  };

  const handleLanguageSelect = (language: string) => {
    if (language === "Arabic") {
      i18n.changeLanguage("ar");
      setSelectedLanguage("Arabic");
    } else {
      i18n.changeLanguage("en");
      setSelectedLanguage("English");
    }
    setIsLanguageOpen(false);
  };

  const isHide = useCheckIfPathIncludes(["/login"]);

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const handleSignInClick = () => {
    navigate("/user-management/login");
    setIsMobileMenuOpen(false);
  };

  const handleScrollOrNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { name: "Arabic", label: "العربية" },
    { name: "English", label: "English" },
  ];

  return (
    <>
      <nav className={isHide ? "isHide" : ""}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-links">
          <div className="section">
            <ul className="links">
              {/* Home */}
              <li>
                <a
                  href="/"
                  onClick={(e) => handleScrollOrNavigate(e, "/")}
                  className={`${location.pathname === "/" ? "active" : ""}`}
                >
                  {t("navbar.home")}
                </a>
                <img
                  src={
                    location.pathname === "/" ? eclipse : toggle
                  }
                  alt="Home"
                  className="link-icon"
                />
              </li>

              {/* Our Story */}
              <li>
                <a
                  href="#ourstory"
                  onClick={(e) => handleScrollOrNavigate(e, "#ourstory")}
                  className={`${location.hash === "#ourstory" ? "active" : ""} nowrap`}
                >
                  {t("navbar.story")}
                </a>
                <img
                  src={
                    location.hash === "#ourstory" ? eclipse : toggle
                  }
                  alt="Story"
                  className="link-icon"
                />
              </li>

              {/* Features */}
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScrollOrNavigate(e, "#features")}
                >
                  {t("navbar.features")}
                </a>
                <img
                  src={
                    location.hash === "#features" ? eclipse : toggle
                  }
                  alt="Features"
                  className="link-icon"
                />
              </li>

              {/* Plans */}
              <li>
                <a
                  href="#plans"
                  onClick={(e) => handleScrollOrNavigate(e, "#plans")}
                >
                  {t("navbar.plans")}
                </a>
                <img
                  src={
                    location.hash === "#plans" ? eclipse : toggle
                  }
                  alt="Plans"
                  className="link-icon"
                />
              </li>

              {/* Store */}
              <li>
                <a
                  onClick={(e) => handleScrollOrNavigate(e, "/store")}
                  className={`${location.pathname === "/store" ? "active" : ""} `}
                >
                  {t("navbar.store")}
                </a>
                <img
                  src={
                    location.pathname === "/store" ? eclipse : toggle
                  }
                  alt="Store"
                  className="link-icon"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <div
            className="language-container"
            onMouseEnter={() => setIsLanguageOpen(true)}
            onMouseLeave={() => setIsLanguageOpen(false)}
          >
            <button className="language" onClick={toggleLanguage}>
              <img src={lang} alt="Language" />
            </button>

            <div
              className={`language-dropdown ${isLanguageOpen ? "open" : ""}`}
            >
              {languages.map((language) => (
                <div
                  key={language.name}
                  className={`language-option ${
                    selectedLanguage === language.name ? "selected" : ""
                  }`}
                  onClick={() => handleLanguageSelect(language.name)}
                >
                  <span className="language-text">{language.label}</span>
                  <div className="language-divider"></div>
                </div>
              ))}
            </div>
          </div>

          <button className="signin" onClick={handleSignInClick}>
            {t("login.title") || "Sign In"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="mobile-sidebar-header">
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
          </div>
          <button
            className="close-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="mobile-sidebar-content">
          <ul className="mobile-links">
            <li>
              <a href="/" onClick={(e) => handleScrollOrNavigate(e, "/")}>{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#ourstory" onClick={(e) => handleScrollOrNavigate(e, "#ourstory")} className="hello">
                {t("navbar.story")}
              </a>
            </li>
            <li>
              <a href="#features" onClick={(e) => handleScrollOrNavigate(e, "#features")}>
                {t("navbar.features")}
              </a>
            </li>
            <li>
              <a href="#plans" onClick={(e) => handleScrollOrNavigate(e, "#plans")}>
                {t("navbar.plans")}
              </a>
            </li>
            <li>
              <a href="/store" onClick={(e) => handleScrollOrNavigate(e, "/store")}>
                {t("navbar.store")}
              </a>
            </li>
          </ul>

          <div className="mobile-buttons">
            <div className="mobile-language-section">
              <button className="mobile-language" onClick={toggleLanguage}>
                <img src={lang} alt="Language" />
                <span>{selectedLanguage}</span>
              </button>
            </div>

            <button className="mobile-signin" onClick={handleSignInClick}>
              {t("login.title") || "Sign In"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`mobile-sidebar-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
