import { useState } from "react";

const NAV_LINKS = ["Home", "Shop", "Categories", "About"];

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {/* Logo */}
        <span style={styles.logo}>MINKA</span>

        {/* Desktop links */}
        <ul style={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" style={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.iconBtn} aria-label="Search">
            <SearchIcon />
          </button>
          <button style={styles.iconBtn} aria-label="Cart">
            <CartIcon />
            {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
          </button>
          {/* Hamburger */}
          <button
            style={{ ...styles.iconBtn, display: "none" }}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" style={styles.mobileLink}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "1px solid #f0f0f0",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "'Georgia', serif",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 4,
    color: "#111",
  },
  links: {
    display: "flex",
    gap: 36,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#444",
    transition: "color 0.2s",
  },
  actions: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    position: "relative",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 6,
    color: "#333",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#111",
    color: "#fff",
    borderRadius: "50%",
    fontSize: 10,
    width: 16,
    height: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    padding: "16px 24px",
    gap: 16,
  },
  mobileLink: {
    textDecoration: "none",
    fontSize: 14,
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
};
