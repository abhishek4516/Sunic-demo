import { useEffect, useState } from "react";

import logo from "../../assets/sunic_logo.png";

import "./Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] =
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

  return (

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

      {/* CENTER LINKS */}

      <ul className="nav-links">

        {[
          "About",
          "Services",
          "Solutions",
          "Contact",
        ].map((item) => (

          <li key={item}>

            <a
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>

          </li>
        ))}

      </ul>

      {/* RIGHT CTA */}

      <a
        className="nav-cta"
        href="#contact"
      >
        Talk to Experts
      </a>

    </nav>
  );
}