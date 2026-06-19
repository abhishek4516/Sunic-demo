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
  { icon: "🚢", title: "Ports, Logistics & Supply Chain" },
  { icon: "🚂", title: "Rail & Transportation" },
  { icon: "🤖", title: "Artificial Intelligence & Machine Learning" },
  { icon: "🖥️", title: "Data Centers & Server Infrastructure" },
  { icon: "🌐", title: "Enterprise Networking Solutions" },
  { icon: "🔄", title: "Enterprise Integration & Middleware" },
  { icon: "🏢", title: "Enterprise & Corporate Organizations" },
  { icon: "🏛️", title: "Government & Public Sector" },
  { icon: "📦", title: "Warehousing & Distribution Centers" },
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
    {INDUSTRIES.map((industry) => (
      <div className="industry-card" key={industry.title}>
        <div className="industry-icon">{industry.icon}</div>
        <h3>{industry.title}</h3>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}