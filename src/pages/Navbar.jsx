import { useState } from "react";


import CartIcon from "../components/IconsSVG/CartIcon";
import SearchIcon from "../components/IconsSVG/SearchIcon";

const NAV_LINKS = ["Home", "Shop", "Categories", "About"];

export default function Navbar({ cartCount = 0, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-logo" href="#home">L & T</a>

        <ul className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#shop" className="navbar-link">Shop</a>
          <a href="#category" className="navbar-link">Category</a>
          <a href="#about" className="navbar-link">About</a>
        </ul>

        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Search">
            <SearchIcon />
          </button>

          <button
            className="icon-btn"
            aria-label="Cart"
            onClick={onCartOpen}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

          <button
            className="icon-btn hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="mobile-link">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}