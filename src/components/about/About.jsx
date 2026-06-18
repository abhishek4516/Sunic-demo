import "./About.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/contocr.jpg",
    alt: "Modern IT infrastructure server room"
  },
  {
    id: 2,
    url: "/Logistics_Supply_Chain.jpg",
    alt: "Tech team collaboration"
  },
  {
    id: 3,
    url: "/servers.webp",
    alt: "Enterprise technology solutions"
  },
  {
    id: 4,
    url: "/network.jpg",
    alt: "Data center and cloud infrastructure"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Network and system integration"
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const statsRef = useRef(null);
  const partnersRef = useRef(null);
  
 
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
    const prevIndex = (currentIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
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
        carouselRef.current,
        { opacity: 0, x: -40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 },
        0
      );

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45 },
        "-=0.6"
      );

      tl.fromTo(
        titleRef.current,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.72 },
        "-=0.1"
      );

      tl.fromTo(
        desc1Ref.current,
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
        desc2Ref.current,
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

      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power2.out",
        },
        "-=0.2"
      );

      tl.fromTo(
        partnersRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.15"
      );
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
          

          <div 
            className="about-image-wrap" 
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
                    className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
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
                    className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
       
            {/* <div className="about-img-badge">
              <strong>22+</strong>
              <span>Years of Excellence</span>
            </div> */}
            <div className="about-decorline"></div>
          </div>

        
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

            <p className="about-desc" ref={desc1Ref}>
              Founded in 2002, Sunic Technologies is one of North India's most respected 
              enterprise IT infrastructure companies. Headquartered in Gurgaon with offices 
              across Delhi, Mumbai, UP, and Uttaranchal, we deliver quality system integration 
              solutions to corporates, PSUs, and Government organizations.
            </p>

            <p className="about-desc" ref={desc2Ref}>
              We are not just a vendor — we are a technology partner. Our customer-centric 
              approach, combined with strategic partnerships with technology leaders like 
              Oracle, Cisco, Microsoft, VMware, and Symantec, enables us to deliver optimized, 
              cutting-edge solutions.
            </p>

         
            <div className="about-stats" ref={statsRef}>
              <div className="about-stat">
                <div className="about-stat-number">2002</div>
                <div className="about-stat-label">Year Founded</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Customers Served</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}