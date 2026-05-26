import { useEffect, useRef, useState } from "react";
import "./Intro.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    label: "Network Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
    label: "Data Centre Solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
    label: "Server & Storage Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=1600&auto=format&fit=crop",
    label: "Cybersecurity & Compliance",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    label: "Cloud & Virtualisation",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    label: "Managed IT Services",
  },
];

function WordSplit({ text, refs, startIndex = 0, className = "" }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="word-wrap">
      <span
        className={`word-inner ${className}`}
        ref={(el) => { if (el) refs.current[startIndex + i] = el; }}
      >
        {word}&nbsp;
      </span>
    </span>
  ));
}

export default function Intro() {
  const introRef     = useRef(null);
  const leftRef      = useRef(null);
  const labelLineRef = useRef(null);
  const labelTextRef = useRef(null);
  const titleWordsRef = useRef([]);
  const desc1Ref     = useRef(null);
  const desc2Ref     = useRef(null);

  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef               = useRef(null);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
  };

  const stopAutoplay = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      /* 1 — LABEL: line draws in, then text slides in */
      tl.fromTo(
        labelLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.55 }
      ).fromTo(
        labelTextRef.current,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45 },
        "-=0.15"
      );

      /* 2 — TITLE: each word slides up staggered */
      tl.fromTo(
        titleWordsRef.current,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.055, duration: 0.72 },
        "-=0.1"
      );

      /* 3 — DESCRIPTIONS: fade up with blur wipe */
      tl.fromTo(
        [desc1Ref.current, desc2Ref.current],
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.2,
          duration: 0.85,
          ease: "power2.out",
        },
        "-=0.35"
      );

      /* 4 — LEFT COLUMN PARALLAX */
      gsap.to(leftRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, introRef);

    return () => ctx.revert();
  }, []);

  const titlePlain = "Turning Infrastructure Into";
  const titleEm    = "Competitive Advantage";
  const plainCount = titlePlain.split(" ").length;

  return (
    <section className="intro-section" ref={introRef}>

      {/* BACKGROUND LINES */}
      <svg
        className="intro-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#c94a4a" strokeLinecap="round">
          <path d="M 0,0 C 380,55  980,110 1440,150" strokeWidth="0.9" opacity="0.16" />
          <path d="M 0,0 C 360,100 920,210 1440,290" strokeWidth="0.9" opacity="0.14" />
          <path d="M 0,0 C 330,150 860,320 1440,440" strokeWidth="0.9" opacity="0.13" />
          <path d="M 0,0 C 300,205 790,435 1440,590" strokeWidth="0.9" opacity="0.12" />
          <path d="M 0,0 C 265,260 710,545 1440,740" strokeWidth="0.9" opacity="0.11" />
          <path d="M 0,0 C 230,310 620,645 1440,880" strokeWidth="0.9" opacity="0.10" />
          <path d="M 0,0 C 195,350 530,720 1280,900" strokeWidth="0.9" opacity="0.09" />
          <path d="M 0,0 C 160,385 430,780  980,900" strokeWidth="0.9" opacity="0.08" />
          <path d="M 0,0 C 125,410 320,825  660,900" strokeWidth="0.9" opacity="0.07" />
          <path d="M 0,0 C  90,428 210,850  350,900" strokeWidth="0.9" opacity="0.06" />
          <path d="M 0,0 C  50,438 110,860  160,900" strokeWidth="0.9" opacity="0.05" />
        </g>
      </svg>

      <div className="intro-glow" />

      <div className="intro-layout">

        {/* LEFT */}
        <div className="intro-left" ref={leftRef}>

          <div className="section-label">
            <span className="label-line" ref={labelLineRef} />
            <span ref={labelTextRef}>Enterprise IT Infrastructure</span>
          </div>

          <h2 className="section-title">
            <WordSplit
              text={titlePlain}
              refs={titleWordsRef}
              startIndex={0}
            />
            <em>
              <WordSplit
                text={titleEm}
                refs={titleWordsRef}
                startIndex={plainCount}
                className="em-word"
              />
            </em>
          </h2>

          <p className="section-desc" ref={desc1Ref}>
            At Sunic Technologies, we believe your IT infrastructure is more
            than hardware — it is the backbone of your business.
          </p>

          <p className="section-desc" ref={desc2Ref} style={{ marginTop: "14px" }}>
            We help mid to large-sized organisations across India unlock the
            full potential of their technology investments, delivering
            enterprise-grade solutions that increase operational efficiency
            and drive ROI.
          </p>

        </div>

        {/* RIGHT — CAROUSEL */}
        <div
          className="intro-right"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="intro-carousel">

            <div className="carousel-track">
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={`carousel-slide ${i === current ? "active" : ""}`}
                >
                  <img
                    src={slide.src}
                    alt={slide.label}
                    className="intro-image"
                  />
                  <div className="intro-overlay" />
                  <div className="carousel-slide-label">{slide.label}</div>
                </div>
              ))}
            </div>

            <button
              className="carousel-arrow carousel-arrow--prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              className="carousel-arrow carousel-arrow--next"
              onClick={next}
              aria-label="Next slide"
            >
              →
            </button>

            <div className="carousel-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="carousel-counter">
              <span className="carousel-counter-current">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="carousel-counter-sep" />
              <span className="carousel-counter-total">
                {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}