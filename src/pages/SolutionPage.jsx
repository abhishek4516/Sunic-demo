import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./SolutionPage.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { solutions } from "../data/solutions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = solutions[slug];

  const pageRef       = useRef(null);
  const labelRef      = useRef(null);
  const titleRef      = useRef(null);
  const descRef       = useRef(null);
  const featuresRef   = useRef([]);
  const ctaRef        = useRef(null);

  useEffect(() => {
    if (!solution) return;

    const ctx = gsap.context(() => {

      /* ── HERO ENTRANCE ── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(labelRef.current,
        { opacity: 0, x: -18 },
        { opacity: 1, x: 0, duration: 0.55, delay: 0.2 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 50, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        "-=0.2"
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      /* ── FEATURE ROWS SCROLL REVEAL ── */
      featuresRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
            delay: i * 0.05,
          }
        );
      });

      /* ── CTA ── */
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

    }, pageRef);

    return () => ctx.revert();
  }, [solution]);

  if (!solution) {
    return (
      <>
        <Navbar />
        <div className="sp-not-found">
          <span className="sp-not-found-code">404</span>
          <h1 className="sp-not-found-title">Solution Not Found</h1>
          <p className="sp-not-found-desc">
            The solution you're looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="sp-btn sp-btn--primary">Back to Home</a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="sp-root" ref={pageRef}>

        {/* ── BACKGROUND LINES ── */}
        <svg
          className="sp-bg-lines"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="#c94a4a" strokeLinecap="round">
            <path d="M 0,0 C 380,55  980,110 1440,150" strokeWidth="0.9" opacity="0.16" />
            <path d="M 0,0 C 360,100 920,210 1440,290" strokeWidth="0.9" opacity="0.13" />
            <path d="M 0,0 C 330,150 860,320 1440,440" strokeWidth="0.9" opacity="0.11" />
            <path d="M 0,0 C 300,205 790,435 1440,590" strokeWidth="0.9" opacity="0.09" />
            <path d="M 0,0 C 265,260 710,545 1440,740" strokeWidth="0.9" opacity="0.07" />
            <path d="M 0,0 C 230,310 620,645 1300,860" strokeWidth="0.9" opacity="0.05" />
          </g>
        </svg>

        {/* ── HERO ── */}
        <div className="sp-hero layout-container">

          <div className="sp-label" ref={labelRef}>
            <span className="sp-label-line" />
            <span>Solution</span>
          </div>

          <h1 className="sp-title" ref={titleRef}>
            {solution.title.split(" ").map((word, i, arr) =>
              i >= arr.length - 2
                ? <span key={i} className="sp-title-em">{word} </span>
                : <span key={i}>{word} </span>
            )}
          </h1>

          <p className="sp-desc" ref={descRef}>
            {solution.description}
          </p>

        </div>

        {/* ── DIVIDER ── */}
        <div className="sp-divider layout-container">
          <div className="sp-divider-line" />
        </div>

        {/* ── KEY FEATURES ── */}
        <div className="sp-features-section layout-container">

          <div className="sp-section-header">
            <span className="sp-section-eyebrow">Key Features</span>
            <h2 className="sp-section-title">
              What's <em>included</em>
            </h2>
          </div>

          <div className="sp-features-list">
            {solution.benefits.map((item, i) => (
              <div
                key={i}
                className="sp-feature-row"
                ref={(el) => (featuresRef.current[i] = el)}
              >
                <div className="sp-feature-left">
                  <span className="sp-feature-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sp-feature-tick">—</span>
                </div>
                <p className="sp-feature-text">{item}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── CTA ── */}
        <div className="sp-cta-wrap layout-container" ref={ctaRef}>
          <div className="sp-cta">

            <div className="sp-cta-glow" />

            <div className="sp-cta-label">
              <span className="sp-cta-label-line" />
              <span>Get Started</span>
            </div>

            <h3 className="sp-cta-title">
              Ready to deploy <em>{solution.title}?</em>
            </h3>

            <p className="sp-cta-desc">
              Talk to our team and get a tailored implementation plan
              built around your operational environment.
            </p>

            <div className="sp-cta-actions">
              <a href="/contact" className="sp-btn sp-btn--primary">
                Request a Demo
              </a>
              <a href="/#solutions" className="sp-btn sp-btn--ghost">
                Explore All Solutions
              </a>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}