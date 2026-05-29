import { useEffect, useState } from "react";

import logo from "../../assets/sunic_logo.png";

import "./Navbar.css";

export default function Navbar({
  onContactClick,
}) {

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* PREVENT BODY SCROLL */

  useEffect(() => {

    if (menuOpen) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "unset";
    }

    return () => {

      document.body.style.overflow =
        "unset";
    };

  }, [menuOpen]);

  const navItems = [
    "About",
    "Services",
    "Solutions",
    "Contact",
  ];

  return (

    <>

      <nav
        className={`nav ${
          scrolled ? "scrolled" : ""
        }`}
      >

        {/* LEFT */}

        <a
          className="nav-logo"
          href="/"
        >

          <img
            src={logo}
            alt="Sunic Technologies"
            className="nav-logo-img"
          />

          <div className="nav-logo-text-wrap">

            <span className="logo-text">
              Sunic Technologies
            </span>

            <span className="logo-sub">
              Enterprise Infrastructure
            </span>

          </div>

        </a>

        {/* DESKTOP LINKS */}

        <ul className="nav-links">

          {navItems.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>

            </li>
          ))}

        </ul>

        {/* CTA */}

        <button
          className="nav-cta"
          onClick={onContactClick}
        >

          Talk to Experts

        </button>

        {/* HAMBURGER */}

        <button
          className={`nav-menu-btn ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Menu"
        >

          <span></span>
          <span></span>

        </button>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <div className="mobile-menu-links">

          {navItems.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {item}
            </a>

          ))}

          {/* <button
            className="mobile-menu-cta"
            onClick={() => {

              setMenuOpen(false);

              onContactClick();
            }}
          >

            Talk to Experts

          </button> */}

        </div>

      </div>

    </>
  );
}