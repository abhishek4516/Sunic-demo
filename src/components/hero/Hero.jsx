import { useEffect, useRef } from "react";

// import HeroVisual from "./HeroVisual";

import "./Hero.css";

import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll(".hero-animate");

    gsap.fromTo(
      elements,

      {
        opacity: 0,
        y: 120,
      },

      {
        opacity: 1,
        y: 0,

        stagger: 0.14,

        duration: 1.2,

        ease: "power3.out",

        delay: 0.3,
      },
    );
  }, []);
  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* BACKGROUND LINES */}

      <svg
        className="hero-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#c94a4a" strokeLinecap="round">
          <path
            d="M 0,0 C 400,30 1000,60 1440,90"
            strokeWidth="0.6"
            opacity="0.10"
          />
          <path
            d="M 0,0 C 380,80 960,150 1440,190"
            strokeWidth="0.6"
            opacity="0.09"
          />
          <path
            d="M 0,0 C 350,130 920,235 1440,290"
            strokeWidth="0.6"
            opacity="0.08"
          />
          <path
            d="M 0,0 C 320,180 875,325 1440,390"
            strokeWidth="0.6"
            opacity="0.07"
          />
          <path
            d="M 0,0 C 290,230 820,410 1440,490"
            strokeWidth="0.6"
            opacity="0.06"
          />
          <path
            d="M 0,0 C 250,280 760,490 1440,590"
            strokeWidth="0.6"
            opacity="0.05"
          />
          <path
            d="M 0,0 C 210,330 680,570 1440,690"
            strokeWidth="0.6"
            opacity="0.04"
          />
          <path
            d="M 0,0 C 160,380 580,650 1320,790"
            strokeWidth="0.6"
            opacity="0.03"
          />
        </g>
      </svg>

      <div className="hero-glow"></div>

      <div className="layout-container">
        <div className="hero-container">
          {/* LEFT CONTENT */}

          <div className="hero-content">
            <div className="hero-badge hero-animate">
              <span className="hero-badge-line"></span>

              <span>Enterprise Infrastructure Intelligence</span>
            </div>

            <h1 className="hero-title hero-animate">
              Infrastructure Systems
              <br />
              <strong>Built for Intelligent Operations.</strong>
            </h1>

            <p className="hero-sub hero-animate">
              OCR, automation, tracking and enterprise infrastructure solutions
              for logistics, warehousing and industrial operations.
            </p>

            <div className="hero-actions hero-animate">
              <a className="btn-primary" href="#solutions">
                Explore Solutions
              </a>

              <a className="btn-outline" href="#contact">
                Talk to Experts
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}

          {/* <HeroVisual /> */}
        </div>
      </div>
    </section>
  );
}
