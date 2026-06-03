import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    index: "01",
    slug: "rake-number-ocr",
    title: "Rake Number OCR",
    tag: "OCR",
    desc: "Automated rake number recognition using high-precision OCR — eliminating manual entry across all rail operations.",
  },
  {
    index: "02",
    slug: "container-number-ocr",
    title: "Container Number OCR",
    tag: "OCR",
    desc: "Real-time container number extraction from live feeds with sub-second read accuracy at any angle or lighting condition.",
  },
  {
    index: "03",
    slug: "container-location-ocr",
    title: "Container Location + OCR",
    tag: "OCR · Tracking",
    desc: "Combined spatial positioning and OCR to log exact container location alongside identity — full traceability in one pass.",
  },
  {
    index: "04",
    slug: "vehicle-number-ocr",
    title: "Vehicle Number OCR",
    tag: "OCR",
    desc: "Automatic vehicle plate recognition for trucks, trailers and fleet assets entering or exiting operational zones.",
  },
  {
    index: "05",
    slug: "face-recognition-extraction",
    title: "Face Recognition & Extraction",
    tag: "AI · Security",
    desc: "Biometric access control and personnel extraction using live face recognition — integrated with gate and zone systems.",
  },
  {
    index: "06",
    slug: "gps-location-of-container",
    title: "GPS Location of Container",
    tag: "GPS · Tracking",
    desc: "Real-time GPS tracking of containers across yards and transit routes — full operational visibility at all times.",
  },
  {
    index: "07",
    slug: "gate-operation-automation",
    title: "Gate Operation Automation",
    tag: "Automation",
    desc: "Smart gate systems with automated verification, barrier control and real-time operator override for zero-friction entry.",
  },
  {
    index: "08",
    slug: "warehouse-management",
    title: "Warehouse Management",
    tag: "Warehousing",
    desc: "End-to-end warehouse automation covering package count, inventory tracking and dynamic area management.",
  },
  {
    index: "09",
    slug: "custom-infra-setup",
    title: "Custom Infra Setup",
    tag: "Infrastructure",
    desc: "Bespoke infrastructure design and deployment — sized exactly to your operational footprint with zero over-provisioning.",
  },
  {
    index: "10",
    slug: "data-storage-solutions",
    title: "Data Storage Solutions",
    tag: "Infrastructure",
    desc: "On-premises and hybrid storage architectures built for high-volume operational data with redundancy and fast retrieval.",
  },
  {
    index: "11",
    slug: "data-centre-solutions",
    title: "Data Centre Solutions",
    tag: "Infrastructure",
    desc: "Full data centre builds and managed environments — power, cooling, networking and compute tuned for industrial scale.",
  },
];

const CARD_WIDTH = 400;  // must match CSS
const CARD_GAP   = 28;   // must match CSS
const CARD_STEP  = CARD_WIDTH + CARD_GAP;

export default function WhatWeDo() {
  const sectionRef      = useRef(null);
  const eyebrowRef      = useRef(null);
  const headingRef      = useRef(null);
  const descRef         = useRef(null);
  const statsRef        = useRef(null);
  const leftRef         = useRef(null);
  const trackRef        = useRef(null);
  const cardsAreaRef    = useRef(null);
  const progressFillRef = useRef(null);
  const progressBarRef  = useRef(null);
  const hintRef         = useRef(null);
  const cardsRef        = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── 1. INTRO ANIMATION (fires once when section enters viewport) ───
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      introTl
        .fromTo(eyebrowRef.current,
          { opacity: 0, x: -14 },
          { opacity: 1, x: 0, duration: 0.45 })
        .fromTo(headingRef.current,
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.72 }, "-=0.1")
        .fromTo(descRef.current,
          { opacity: 0, y: 28, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, ease: "power2.out" }, "-=0.35")
        .fromTo(statsRef.current,
          { opacity: 0, y: 28, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, ease: "power2.out" }, "-=0.25");

      // ─── 2. HORIZONTAL SCROLL (pinned) ───
      const track    = trackRef.current;
      const totalCards = services.length;

      // The distance we need to slide: first card centered → last card centered.
      // We offset the track initially so card[0] is centered, then slide until card[last] is centered.
      // Total slide = (totalCards - 1) * CARD_STEP
      const getTotalSlide = () => (totalCards - 1) * CARD_STEP;

      // We also need a generous pin distance so scrolling feels proportional.
      // Give ~180px of real scroll per card.
      const getScrollDistance = () => getTotalSlide() + window.innerHeight * 0.6;

      // Set initial x so first card is centered in the viewport
      const getInitialX = () => {
        const vw = window.innerWidth;
        // center of viewport minus center of first card
        return (vw / 2) - (CARD_WIDTH / 2);
      };

      // Apply initial position immediately (before pin)
      gsap.set(track, { x: getInitialX() });

      // Highlight active card helper
      const highlightCards = (rawProgress) => {
        const clamped    = Math.max(0, Math.min(1, rawProgress));
        const activeIdx  = Math.round(clamped * (totalCards - 1));
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const dist = Math.abs(i - activeIdx);
          const scale   = dist === 0 ? 1    : dist === 1 ? 0.95  : 0.91;
          const opacity = dist === 0 ? 1    : dist === 1 ? 0.75  : 0.5;
          gsap.to(card, { scale, opacity, duration: 0.25, ease: "power2.out", overwrite: true });
        });
      };

      // Initialise highlight at progress 0 (card 0 active)
      highlightCards(0);

      // Build the pinned timeline
      const pinST = ScrollTrigger.create({
        trigger  : sectionRef.current,
        start    : "top top",
        end      : () => `+=${getScrollDistance()}`,
        pin      : true,
        scrub    : 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onEnter: () => {
          // Show cards area, hide stats/desc, show progress + hint
          gsap.to(cardsAreaRef.current, { opacity: 1, y: 0,  duration: 0.5, ease: "power2.out" });
          gsap.to(statsRef.current,     { opacity: 0, y: -10, duration: 0.3 });
          gsap.to(descRef.current,      { opacity: 0.35, duration: 0.3 });
          gsap.to(progressBarRef.current, { opacity: 1, duration: 0.4 });
          gsap.to(hintRef.current,        { opacity: 1, duration: 0.4 });
        },

        onLeaveBack: () => {
          // Restore on scroll back above section
          gsap.to(cardsAreaRef.current, { opacity: 0, y: 40,  duration: 0.4 });
          gsap.to(statsRef.current,     { opacity: 1, y: 0,   duration: 0.4 });
          gsap.to(descRef.current,      { opacity: 1,          duration: 0.4 });
          gsap.to(progressBarRef.current, { opacity: 0, duration: 0.3 });
          gsap.to(hintRef.current,        { opacity: 0, duration: 0.3 });
        },

        onUpdate: (self) => {
          // Slide track: from initialX  →  initialX - totalSlide
          const x = getInitialX() - self.progress * getTotalSlide();
          gsap.set(track, { x });

          // Progress bar
          if (progressFillRef.current) {
            progressFillRef.current.style.width = `${self.progress * 100}%`;
          }

          // Card highlight
          highlightCards(self.progress);
        },
      });

      return () => pinST.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wwd-root" id="solutions" ref={sectionRef}>

      {/* BACKGROUND LINES */}
      <svg className="wwd-bg-lines" viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#c94a4a" strokeLinecap="round">
          <path d="M 0,0 C 380,55  980,110 1440,150" strokeWidth="0.9" opacity="0.16" />
          <path d="M 0,0 C 360,100 920,210 1440,290" strokeWidth="0.9" opacity="0.14" />
          <path d="M 0,0 C 330,150 860,320 1440,440" strokeWidth="0.9" opacity="0.13" />
          <path d="M 0,0 C 300,205 790,435 1440,590" strokeWidth="0.9" opacity="0.12" />
          <path d="M 0,0 C 265,260 710,545 1440,740" strokeWidth="0.9" opacity="0.11" />
          <path d="M 0,0 C 230,310 620,645 1440,880" strokeWidth="0.9" opacity="0.10" />
        </g>
      </svg>

      {/* PINNED INNER */}
      <div className="wwd-pinned-inner">

        {/* ── LEFT PANEL ── */}
        <div className="wwd-left" ref={leftRef}>
          <span className="wwd-eyebrow" ref={eyebrowRef}>WHAT WE DELIVER</span>

          <div className="wwd-heading-wrap">
            <h2 className="wwd-heading" ref={headingRef}>
              Operations
              <br />
              <em>That don't stop.</em>
            </h2>
          </div>

          <p className="wwd-desc" ref={descRef}>
            Enterprise-grade OCR, automation, and infrastructure — purpose-built for logistics,
            warehousing, and industrial operations.
          </p>

          <div className="wwd-stats" ref={statsRef}>
            <div>
              <div className="wwd-stat-num">11<span>+</span></div>
              <div className="wwd-stat-label">Core Solutions</div>
            </div>
            <div>
              <div className="wwd-stat-num">99<span>%</span></div>
              <div className="wwd-stat-label">OCR Accuracy</div>
            </div>
            <div>
              <div className="wwd-stat-num">24<span>/7</span></div>
              <div className="wwd-stat-label">Uptime SLA</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="wwd-progress-bar" ref={progressBarRef}>
            <div className="wwd-progress-fill" ref={progressFillRef} />
          </div>

          {/* Hint */}
          <div className="wwd-scroll-hint" ref={hintRef}>
            <span className="wwd-hint-icon">⟶</span>
            <span>Scroll to explore all solutions</span>
          </div>
        </div>

        {/* ── CARDS CAROUSEL ── */}
        <div className="wwd-cards-area" ref={cardsAreaRef}>
          {/* Overflow-hidden viewport */}
          <div className="wwd-track-viewport">
            <div className="wwd-track" ref={trackRef}>
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  to={`/solutions/${service.slug}`}
                  className="wwd-card"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="wwd-card-top">
                    <span className="wwd-idx">{service.index}</span>
                    <span className="wwd-tag">{service.tag}</span>
                  </div>
                  <h3 className="wwd-title">{service.title}</h3>
                  <p className="wwd-text">{service.desc}</p>
                  <div className="wwd-arrow">→</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}