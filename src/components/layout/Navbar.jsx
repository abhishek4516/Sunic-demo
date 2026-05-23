import { useEffect, useState } from "react";

import logo from "../../assets/sunic_logo.png";

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

      {/* LOGO */}
     <a
  className={`nav-logo ${
    scrolled ? "hidden-nav-item" : ""
  }`}
  href="/"
>

        <img
          src={logo}
          alt="Sunic Technologies"
          className="nav-logo-img"
        />

        <span className="logo-text">
          Sunic Technologies
        </span>

      </a>

      {/* CENTER GLASS NAV */}
      <div className="nav-center">

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

      </div>

   
  <a
  className={`nav-cta ${
    scrolled ? "hidden-nav-item" : ""
  }`}
  href="#contact"
>
        Talk to Experts
      </a>

    </nav>
  );
}