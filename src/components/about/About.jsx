import "./About.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/contocr.jpg",
    alt: "Modern IT infrastructure server room",
  },
  {
    id: 2,
    url: "/Logistics_Supply_Chain.jpg",
    alt: "Tech team collaboration",
  },
  {
    id: 3,
    url: "/data.jpeg",
    alt: "Enterprise technology solutions",
  },
  {
    id: 4,
    url: "/network.jpg",
    alt: "Data center and cloud infrastructure",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Network and system integration",
  },
];

const INDUSTRIES = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        <path d="M7 10h2" />
        <path d="M7 14h2" />
        <path d="M15 10h2" />
        <path d="M15 14h2" />
      </svg>
    ),
    title: "Ports, Logistics & Supply Chain" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h18" />
        <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
        <path d="M3 6h18" />
        <path d="M7 9V6" />
        <path d="M17 9V6" />
        <path d="M12 9V6" />
        <circle cx="7" cy="16" r="1.5" />
        <circle cx="17" cy="16" r="1.5" />
      </svg>
    ),
    title: "Rail & Transportation" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4" />
        <path d="M12 19v4" />
        <path d="M1 12h4" />
        <path d="M19 12h4" />
        <path d="M4.22 4.22l2.83 2.83" />
        <path d="M16.95 16.95l2.83 2.83" />
        <path d="M4.22 19.78l2.83-2.83" />
        <path d="M16.95 7.05l2.83-2.83" />
        <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Artificial Intelligence & Machine Learning" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="1" />
        <path d="M8 10v4" />
        <path d="M12 10v4" />
        <path d="M16 10v4" />
        <path d="M2 10h2" />
        <path d="M20 10h2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
      </svg>
    ),
    title: "Data Centers & Server Infrastructure" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "Enterprise Networking Solutions" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" />
        <path d="M9 4v16" />
        <path d="M15 4v16" />
        <path d="M4 9h16" />
        <path d="M4 15h16" />
        <circle cx="12" cy="12" r="2" />
        <path d="M4 12h5" />
        <path d="M15 12h5" />
      </svg>
    ),
    title: "Enterprise Integration & Middleware" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" />
        <path d="M4 8h16" />
        <path d="M4 16h16" />
        <path d="M8 4v16" />
        <path d="M16 4v16" />
        <path d="M4 12h16" />
        <circle cx="8" cy="8" r="1" />
        <circle cx="16" cy="8" r="1" />
        <circle cx="8" cy="16" r="1" />
        <circle cx="16" cy="16" r="1" />
      </svg>
    ),
    title: "Enterprise & Corporate Organizations" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 7v5" />
        <path d="M22 7v5" />
        <path d="M12 7v5" />
      </svg>
    ),
    title: "Government & Public Sector" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="1" />
        <path d="M6 10h4" />
        <path d="M6 14h8" />
        <path d="M14 10h4" />
        <path d="M6 18v-4" />
        <path d="M18 18v-4" />
        <path d="M6 6V4" />
        <path d="M18 6V4" />
      </svg>
    ),
    title: "Warehousing & Distribution Centers" 
  },
];

const PARTNERS = ["Oracle", "Cisco", "Microsoft", "VMware", "Symantec"];

const STATS = [
  { id: "year", value: 2002, suffix: "", label: "Year Founded" },
  { id: "customers", value: 500, suffix: "+", label: "Customers Served" },
  { id: "solutions", value: 30, suffix: "+", label: "Solutions Delivered" },
  { id: "support", value: 24, suffix: "/7", label: "Support" },
];

export default function About() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const partnersRef = useRef(null);
  const carouselRef = useRef(null);
  const statsStripRef = useRef(null);
  const statNumberRefs = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 650);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % CAROUSEL_IMAGES.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (currentIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
    goToSlide(prevIndex);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45 },
        0
      );

      tl.fromTo(
        titleRef.current,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.72 },
        "-=0.15"
      );

      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65 },
        "-=0.4"
      );

      tl.fromTo(
        partnersRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      tl.fromTo(
        carouselRef.current,
        { opacity: 0, x: 30, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.85 },
        "-=0.7"
      );

      tl.fromTo(
        statsStripRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.3"
      );

      tl.add(() => {
        STATS.forEach((stat, i) => {
          const el = statNumberRefs.current[i];
          if (!el) return;
          const counter = { val: 0 };
          gsap.to(counter, {
            val: stat.value,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.floor(counter.val)}${stat.suffix}`;
            },
            onComplete: () => {
              el.textContent = `${stat.value}${stat.suffix}`;
            },
          });
        });
      }, "-=0.4");
    }, sectionRef);

    const timer = setTimeout(startAutoRotate, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
      stopAutoRotate();
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <svg
        className="about-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#c94a4a" strokeLinecap="round">
          <path d="M 0,0 C 380,55  980,110 1440,150" strokeWidth="0.9" opacity="0.12" />
          <path d="M 0,0 C 360,100 920,210 1440,290" strokeWidth="0.9" opacity="0.10" />
          <path d="M 0,0 C 330,150 860,320 1440,440" strokeWidth="0.9" opacity="0.08" />
          <path d="M 0,0 C 300,205 790,435 1440,590" strokeWidth="0.9" opacity="0.07" />
          <path d="M 0,0 C 265,260 710,545 1440,740" strokeWidth="0.9" opacity="0.06" />
        </g>
      </svg>

      <div className="layout-container">
        <div className="about-grid">
          {/* Left: heading + description */}
          <div className="about-content">
            <div className="section-label" ref={labelRef}>
              <span className="label-line"></span>
              Who we are
            </div>

            <h2 className="about-title" ref={titleRef}>
              Two Decades of Trust.
              <br />
              <em>One Commitment.</em>
            </h2>

            <div className="about-desc-group" ref={descRef}>
              <p className="about-desc">
                Founded in 2002, Sunic Technologies is one of North India's
                most respected enterprise IT infrastructure companies.
                Headquartered in Gurgaon with offices across Delhi, Mumbai,
                UP, and Uttaranchal, we deliver quality system integration
                solutions to corporates, PSUs, and Government organizations.
              </p>
              <p className="about-desc">
                We are not just a vendor — we are a technology partner. Our
                customer-centric approach, combined with strategic
                partnerships with technology leaders like Oracle, Cisco,
                Microsoft, VMware, and Symantec, enables us to deliver
                optimized, cutting-edge solutions.
              </p>
            </div>

            <div className="about-partners" ref={partnersRef}>
              {PARTNERS.map((partner) => (
                <span className="partner-tag" key={partner}>
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Right: carousel, square corners */}
          <div
            className="about-carousel-wrap"
            ref={carouselRef}
            onMouseEnter={stopAutoRotate}
            onMouseLeave={startAutoRotate}
          >
            <div className="carousel-container">
              <div className="carousel-slides">
                {CAROUSEL_IMAGES.map((image, index) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={image.alt}
                    className={`carousel-slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>

              <button
                className="carousel-btn carousel-btn-prev"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="carousel-btn carousel-btn-next"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="carousel-dots">
                {CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width animated stats strip */}
        <div className="about-stats-strip" ref={statsStripRef}>
          {STATS.map((stat, i) => (
            <div className="stat-block" key={stat.id}>
              <div
                className="stat-number"
                ref={(el) => (statNumberRefs.current[i] = el)}
              >
                0{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        
        <div className="industries-section">
          <div className="section-label">
            <span className="label-line"></span>
            Industries We Serve
          </div>

          <h2 className="industries-title">
            Delivering Technology Across
            <br />
            <em>Critical Industries</em>
          </h2>

          <div className="industries-grid">
            {INDUSTRIES.map((industry, index) => (
              <div className="industry-card" key={index}>
                <div className="industry-icon-wrapper">
                  <div className="industry-icon-ring">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="industry-card-title">{industry.title}</h3>
                <div className="industry-card-line"></div>
                <span className="industry-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}