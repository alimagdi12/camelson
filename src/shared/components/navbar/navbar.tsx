import "./navbar.scss";
// @ts-expect-error - Assets module doesn't have TypeScript declarations
import { logo, lang, toggle, eclipse } from "../../../assets";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [active, setActive] = useState("home");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "home", label: "Home", href: "/" },
    { name: "story", label: "Our Story", href: "#" },
    { name: "features", label: "Features", href: "#" },
    { name: "plans", label: "Plans", href: "#" },
    { name: "store", label: "Store", href: "/store" },
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
                (link.href !== "/" && location.pathname.startsWith(link.href));
              return (
                <li key={link.name} >
                  <Link
                    to={link.href}
                    className={isActive ? "active" : ""}
                  >
                    {link.label}
                  </Link>

                  {/*  if active show eclipse else toggle */}
                  <img
                    src={isActive ? eclipse : toggle}
                    alt={link.label}
                    className="link-icon"
                  />

                  {index !== links.length - 1 && (
                    <span className="divider"></span>
                  )}
                </li>
              );
            })}
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
            {/* <div className="language-globe">
              <img src={lang} alt="Globe" />
            </div> */}
          </div>
        </div>
        <button className="signin" onClick={handleSignInClick}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
