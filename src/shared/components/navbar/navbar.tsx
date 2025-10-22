import "./navbar.scss";
import { logo, lang, toggle, eclipse } from "../../../assets";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCheckIfPathIncludes } from "../../shared.service";

const Navbar = () => {
  // const [active, setActive] = useState("home");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  const handleLanguageSelect = (language: any) => {
    if (language === "Arabic") {
      i18n.changeLanguage("ar");
      setSelectedLanguage("Arabic");
    } else {
      i18n.changeLanguage("en");
      setSelectedLanguage("English");
    }
    setIsLanguageOpen(false);
  };

  const links = [
    { name: "home", label: t("navbar.home"), href: "/" },
    { name: "story", label: t("navbar.story"), href: "#ourstory" },
    { name: "features", label: t("navbar.features"), href: "#features" },
    { name: "plans", label: t("navbar.plans"), href: "#plans" },
    { name: "store", label: t("navbar.store"), href: "/store" },
  ];
  const location = useLocation();

  const languages = [
    { name: "Arabic", label: "العربية" },
    { name: "English", label: "English" },
  ];

  const isHide = useCheckIfPathIncludes(["/login"]);

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const handleSignInClick = () => {
    navigate("/user-management/login");
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (link: any, e: React.MouseEvent) => {
    if (link.href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.href);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={isHide ? "isHide" : ""}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-links">
          <div className="section">
            <ul className="links">
              {links.map((link, index) => {
                const isActive =
                  location.pathname === link.href ||
                  location.pathname.startsWith(link.href + "/");

                const isHome = location.pathname === "/";
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const target = document.querySelector(link.href);
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          navigate(link.href);
                        }
                      }}
                      className={`${
                        location.pathname === link.href ? "active" : ""
                      } ${location.pathname !== "/" ? "font-color" : ""}`}
                    >
                      {link.label}
                    </a>

                    <img
                      src={
                        location.pathname === link.href ||
                        location.pathname.startsWith(link.href + "/")
                          ? eclipse
                          : toggle
                      }
                      alt={link.label}
                      className="link-icon"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="buttons">
          <div
            className="language-container"
            onMouseEnter={() => setIsLanguageOpen(true)}
            onMouseLeave={() => setIsLanguageOpen(false)}
          >
            <button className="language" onClick={toggleLanguage}>
              <img src={lang} alt="Language" />
            </button>

            <div className={`language-dropdown ${isLanguageOpen ? "open" : ""}`}>
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

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
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
          <button className="close-button" onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </button>
        </div>

        <div className="mobile-sidebar-content">
          <ul className="mobile-links">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`${
                    location.pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
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