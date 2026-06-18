import { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const actionsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45 }
      );

      tl.fromTo(
        titleRef.current,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.72 },
        "-=0.1"
      );

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power2.out",
        },
        "-=0.35"
      );

      tl.fromTo(
        actionsRef.current,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power2.out",
        },
        "-=0.25"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/141056-776768318.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        <div className="hero-video-overlay" />
      </div>

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

      <div className="layout-container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge" ref={badgeRef}>
              <span className="hero-badge-line" />
              <span>Industrial Intelligence</span>
            </div>

            <h1 className="hero-title" ref={titleRef}>
             AI-Powered 
              <br />
              <strong>Yard Intelligence</strong>
            </h1>

            <p className="hero-sub" ref={subRef}>
              From container OCR and automatic gates to GPS tracking and
              warehouse counting. From fiber cabling and load balancing to data
              center setup and 24x7 support. Sunic delivers everything —
              automation, networking, storage, and maintenance.
            </p>

            <div className="hero-actions" ref={actionsRef}>
              <a className="btn-primary" href="#solutions">
                Explore Solutions
              </a>

              <a className="btn-outline" href="#contact">
                Talk to Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}