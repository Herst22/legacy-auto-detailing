"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Legacy Auto Detailing home"
        >
          <span className="navbar-brand-main">LEGACY</span>
          <span className="navbar-brand-sub">AUTO DETAILING</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

          <a
  href="https://app.squareup.com/appointments/book/na91kgmns7xlpf/L2D8MGPVDVC20/start"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-book-button"
>
  Book Now
</a>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className={menuOpen ? "menu-line line-one open" : "menu-line line-one"} />
          <span className={menuOpen ? "menu-line line-two open" : "menu-line line-two"} />
          <span className={menuOpen ? "menu-line line-three open" : "menu-line line-three"} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={menuOpen ? "mobile-nav open" : "mobile-nav"}
        aria-label="Mobile navigation"
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
  href="https://app.squareup.com/appointments/book/na91kgmns7xlpf/L2D8MGPVDVC20/start"
  target="_blank"
  rel="noopener noreferrer"
  className="mobile-book-button"
  onClick={closeMenu}
>
  Book Now
</a>
      </nav>
    </header>
  );
}