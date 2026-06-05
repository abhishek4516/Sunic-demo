import "./WhatWeDo.css";
import { Link, useNavigate } from "react-router-dom";
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
    hasVideo: true,
    videoUrl: "/141056-776768318.mp4",
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
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
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

const CARD_WIDTH = 360;
const CARD_GAP = 28;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function WhatWeDo() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const leftRef = useRef(null);
  const trackRef = useRef(null);
  const cardsAreaRef = useRef(null);
  const progressFillRef = useRef(null);
  const progressBarRef = useRef(null);
  const hintRef = useRef(null);
  const cardsRef = useRef([]);
  const videoRefs = useRef({});

  const handleCardClick = (slug) => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    navigate(`/solutions/${slug}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const track = trackRef.current;
      const totalCards = services.length;

      const getViewportCenter = () => {
        return window.innerWidth / 2;
      };

      const getActiveCardIndex = () => {
        const viewportCenter = getViewportCenter();
        let closestIndex = 0;
        let minDistance = Infinity;
        
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = Math.abs(cardCenter - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        });
        
        return closestIndex;
      };

      const getInitialX = () => {
        const viewportCenter = window.innerWidth / 2;
        const firstCardCenter = CARD_WIDTH / 2;
        return viewportCenter - firstCardCenter;
      };

      const getFinalX = () => {
        const viewportCenter = window.innerWidth / 2;
        const totalWidth = (totalCards - 1) * CARD_STEP;
        const lastCardCenter = totalWidth + (CARD_WIDTH / 2);
        return viewportCenter - lastCardCenter;
      };

      const getTotalSlide = () => {
        return Math.abs(getFinalX() - getInitialX());
      };

      const getScrollDistance = () => {
        return getTotalSlide() + window.innerHeight * 0.5;
      };

      gsap.set(track, { x: getInitialX() });

      const updateCardHighlights = () => {
        const activeIdx = getActiveCardIndex();
        
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const isActive = i === activeIdx;
          
          if (isActive) {
            card.classList.add('wwd-card-active');
          } else {
            card.classList.remove('wwd-card-active');
          }
          
          let scale, opacity;
          
          if (isActive) {
            scale = 1.15;
            opacity = 1;
          } else {
            const distance = Math.abs(i - activeIdx);
            if (distance === 1) {
              scale = 0.9;
              opacity = 0.7;
            } else {
              scale = 0.8;
              opacity = 0.4;
            }
          }
          
          gsap.to(card, { 
            scale, 
            opacity, 
            duration: 0.35, 
            ease: "power2.out", 
            overwrite: true 
          });
        });
      };

      setTimeout(() => updateCardHighlights(), 100);

      const pinST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onEnter: () => {
          gsap.to(cardsAreaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
          gsap.to(statsRef.current, { opacity: 0, y: -10, duration: 0.3 });
          gsap.to(descRef.current, { opacity: 0.35, duration: 0.3 });
          gsap.to(progressBarRef.current, { opacity: 1, duration: 0.4 });
          gsap.to(hintRef.current, { opacity: 1, duration: 0.4 });
          
          Object.values(videoRefs.current).forEach(video => {
            if (video) video.play();
          });
        },

        onLeaveBack: () => {
          gsap.to(cardsAreaRef.current, { opacity: 0, y: 40, duration: 0.4 });
          gsap.to(statsRef.current, { opacity: 1, y: 0, duration: 0.4 });
          gsap.to(descRef.current, { opacity: 1, duration: 0.4 });
          gsap.to(progressBarRef.current, { opacity: 0, duration: 0.3 });
          gsap.to(hintRef.current, { opacity: 0, duration: 0.3 });
          
          cardsRef.current.forEach((card) => {
            if (card) {
              card.classList.remove('wwd-card-active');
              gsap.to(card, { scale: 1, opacity: 1, duration: 0.3 });
            }
          });
          
          Object.values(videoRefs.current).forEach(video => {
            if (video) video.pause();
          });
        },

        onUpdate: (self) => {
          const startX = getInitialX();
          const endX = getFinalX();
          const x = startX + (self.progress * (endX - startX));
          gsap.set(track, { x });

          if (progressFillRef.current) {
            progressFillRef.current.style.width = `${self.progress * 100}%`;
          }

          updateCardHighlights();
        },
      });

      const handleResize = () => {
        gsap.set(track, { x: getInitialX() });
        updateCardHighlights();
        pinST.refresh();
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        pinST.kill();
        window.removeEventListener('resize', handleResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wwd-root" id="solutions" ref={sectionRef}>
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

      <div className="layout-container">
        <div className="wwd-pinned-inner">
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

            <div className="wwd-progress-bar" ref={progressBarRef}>
              <div className="wwd-progress-fill" ref={progressFillRef} />
            </div>

            <div className="wwd-scroll-hint" ref={hintRef}>
              <span className="wwd-hint-icon">⟶</span>
              <span>Scroll to explore all solutions</span>
            </div>
          </div>

          <div className="wwd-cards-area" ref={cardsAreaRef}>
            <div className="wwd-track-viewport">
              <div className="wwd-track" ref={trackRef}>
                {services.map((service, index) => (
                  <div
                    key={service.slug}
                    onClick={() => handleCardClick(service.slug)}
                    className={`wwd-card ${service.hasVideo ? 'wwd-card-has-video' : ''}`}
                    ref={(el) => (cardsRef.current[index] = el)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCardClick(service.slug);
                      }
                    }}
                  >
                    {service.hasVideo && (
                      <>
                        <video
                          className="wwd-card-video-bg"
                          src={service.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          ref={el => videoRefs.current[service.slug] = el}
                        />
                        <div className="wwd-card-video-overlay" />
                      </>
                    )}
                    <div className="wwd-card-click-overlay" />
                    <div className="wwd-card-index-ring" />
                    
                    <div className="wwd-card-content">
                      <div className="wwd-card-top">
                        <span className="wwd-idx">{service.index}</span>
                        <span className="wwd-tag">{service.tag}</span>
                      </div>
                      <h3 className="wwd-title">{service.title}</h3>
                      <p className="wwd-text">{service.desc}</p>
                      <div className="wwd-arrow">→</div>
                      <div className="wwd-click-hint">View details</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}