import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/adocao", label: "Quero Adotar" },
  { to: "/pet", label: "Cadastrar Pet" },
  { to: "/historico", label: "Histórico" },
  { to: "/adotante", label: "Cadastre-se" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!isMenuOpen || !navRef.current) {
        return;
      }

      if (!navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} ref={navRef}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileTopBar}>
          <Link to="/" className={styles.mobileQuickLink} onClick={closeMenu}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </Link>
          <Link
            to="/adocao"
            className={styles.mobileQuickLink}
            onClick={closeMenu}
          >
            Adotar
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faPlus} />
            Mais
          </button>
        </div>

        <ul
          id="main-navigation"
          className={`${styles.mobileNavList} ${isMenuOpen ? styles.mobileNavListOpen : ""}`}
        >
          {navItems.map((item) => (
            <li key={`mobile-${item.to}`}>
              <Link to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
