import "./navbar.scss";
// @ts-expect-error - Assets module doesn't have TypeScript declarations
import { logo, lang, toggle, eclipse } from "../../../assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const links = [
    { name: "home", label: "Home" },
    { name: "story", label: "Our Story" },
    { name: "features", label: "Features" },
    { name: "plans", label: "Plans" },
    { name: "store", label: "Store" },
  ];

  const languages = [
    { name: "Arabic", label: "العربية" },
    { name: "English", label: "English" },
  ];

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <div className="section">
          <ul className="links">
            {links.map((link, index) => (
              <li key={link.name} onClick={() => setActive(link.name)}>
                <a href="#" className={active === link.name ? "active" : ""}>
                  {link.label}
                </a>

                {/* 👇 if active show eclipse else toggle */}
                <img
                  src={active === link.name ? eclipse : toggle}
                  alt={link.label}
                  className="link-icon"
                />

                {index !== links.length - 1 && (
                  <span className="divider"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="buttons">
        <div className="language-container">
          <button className="language" onClick={handleLanguageToggle}>
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
            <div className="language-globe">
              <img src={lang} alt="Globe" />
            </div>
          </div>
        </div>

        <button className="signin">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
