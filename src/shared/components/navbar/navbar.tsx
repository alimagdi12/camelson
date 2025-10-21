import "./navbar.scss";
import { logo, lang, toggle, eclipse } from "../../../assets";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [active, setActive] = useState("home");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Change layout direction based on selected language
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

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
    { name: "story", label: t("navbar.story"), href: "#" },
    { name: "features", label: t("navbar.features"), href: "#" },
    { name: "plans", label: t("navbar.plans"), href: "#plans" },
    { name: "store", label: t("navbar.store"), href: "/store" },
  ];
  const location = useLocation();

  const languages = [
    { name: "Arabic", label: "العربية" },
    { name: "English", label: "English" },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSignInClick = () => {
    navigate("/user-management/login");
  };

  return (
    <nav>
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
                  <Link
                    to={link.href}
                    className={`${isActive ? "active" : ""} ${
                      !isHome ? "font-color" : ""
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/*  if active show eclipse else toggle */}
                  <img
                    src={isActive ? eclipse : toggle}
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
          {t("signin") || "Sign In"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
