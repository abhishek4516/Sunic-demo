import "./WhatWeDo.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  {
    index: "01",
    slug: "rake-number-ocr",
    title: "Rake Number OCR",
    desc: "Automated rake number recognition using high-precision OCR — eliminating manual entry across all rail operations.",
    features: ["Real-time recognition", "99.8% accuracy", "Multi-angle support", "Rail industry standard"],
    hasVideo: true,
    videoUrl: "/141056-776768318.mp4",
    color: "#c93030",
  },
  {
    index: "02",
    slug: "container-number-ocr",
    title: "Container Number OCR",
    desc: "Real-time container number extraction from live feeds with sub-second read accuracy at any angle or lighting condition.",
    features: ["Live feed processing", "All-weather capable", "Sub-second reads", "Multi-camera sync"],
    hasVideo: true,
    videoUrl: "/141056-776768318.mp4",
    color: "#d4860a",
  },
  {
    index: "03",
    slug: "container-location-ocr",
    title: "Container Location + OCR",
    desc: "Combined spatial positioning and OCR to log exact container location alongside identity — full traceability in one pass.",
    features: ["GPS integration", "Yard mapping", "Identity verification", "Audit trail"],
    hasVideo: true,
    videoUrl: "/141056-776768318.mp4",
    color: "#b82828",
  },
  {
    index: "04",
    slug: "vehicle-number-ocr",
    title: "Vehicle Number OCR",
    desc: "Automatic vehicle plate recognition for trucks, trailers and fleet assets entering or exiting operational zones.",
    features: ["ANPR technology", "Fleet integration", "Gate automation", "Blacklist alerts"],
    hasVideo: true,
    videoUrl: "/vocr.mp4",
    color: "#c47a0a",
  },
  {
    index: "05",
    slug: "face-recognition-extraction",
    title: "Face Recognition & Extraction",
    desc: "Biometric access control and personnel extraction using live face recognition — integrated with gate and zone systems.",
    features: ["Biometric matching", "Access control", "Zone management", "Real-time alerts"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#8b1a1a",
  },
  {
    index: "06",
    slug: "gps-location-of-container",
    title: "GPS Location of Container",
    desc: "Real-time GPS tracking of containers across yards and transit routes — full operational visibility at all times.",
    features: ["Live tracking", "Geo-fencing", "Route history", "Theft prevention"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#d4860a",
  },
  {
    index: "07",
    slug: "gate-operation-automation",
    title: "Gate Operation Automation",
    desc: "Smart gate systems with automated verification, barrier control and real-time operator override for zero-friction entry.",
    features: ["Auto verification", "Barrier control", "Manual override", "24/7 operation"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#c93030",
  },
  {
    index: "08",
    slug: "warehouse-management",
    title: "Warehouse Management",
    desc: "End-to-end warehouse automation covering package count, inventory tracking and dynamic area management.",
    features: ["Inventory sync", "Space optimization", "Pick & pack", "Real-time dashboard"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#b8780a",
  },
  {
    index: "09",
    slug: "custom-infra-setup",
    title: "Custom Infra Setup",
    desc: "Bespoke infrastructure design and deployment — sized exactly to your operational footprint with zero over-provisioning.",
    features: ["Custom design", "Scalable architecture", "Rapid deployment", "Dedicated support"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#c93030",
  },
  {
    index: "10",
    slug: "data-storage-solutions",
    title: "Data Storage Solutions",
    desc: "On-premises and hybrid storage architectures built for high-volume operational data with redundancy and fast retrieval.",
    features: ["Hybrid storage", "Data redundancy", "Fast retrieval", "Scalable capacity"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#d4860a",
  },
  {
    index: "11",
    slug: "data-centre-solutions",
    title: "Data Centre Solutions",
    desc: "Full data centre builds and managed environments — power, cooling, networking and compute tuned for industrial scale.",
    features: ["Full builds", "Power & cooling", "Managed networks", "Industrial scale"],
    hasVideo: true,
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    color: "#b82828",
  },
];

export default function WhatWeDo() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const sliderRef = useRef(null);
  const progressFillRef = useRef(null);
  const tabRefs = useRef([]);
  const videoRef = useRef(null);
  const contentTitleRef = useRef(null);
  const contentDescRef = useRef(null);
  const featuresListRef = useRef(null);
  const currentSlideRef = useRef(null);
  const totalSlidesRef = useRef(null);
  const learnMoreRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = services.length;
  const activeService = services[activeIndex];
  const autoSlideInterval = useRef(null);

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    if (index < 0 || index >= totalSlides) return;
    
    setIsAnimating(true);

    const tl = gsap.timeline();

    tl.to(videoRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in"
    })
    .to([contentTitleRef.current, contentDescRef.current, featuresListRef.current, learnMoreRef.current], {
      opacity: 0,
      x: -16,
      duration: 0.2,
      ease: "power2.in",
      stagger: 0.04
    }, "-=0.15");

    tl.eventCallback("onComplete", () => {
      setActiveIndex(index);
      
      const tlIn = gsap.timeline();
      tlIn.to(videoRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to([contentTitleRef.current, contentDescRef.current, featuresListRef.current, learnMoreRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.06
      }, "-=0.25");

      tlIn.eventCallback("onComplete", () => {
        setIsAnimating(false);
      });
    });
  };

  const goToNext = () => goToSlide((activeIndex + 1) % totalSlides);
  const goToPrev = () => goToSlide((activeIndex - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [activeIndex, isAnimating]);

  const pauseAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const resumeAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    autoSlideInterval.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  const handleLearnMore = () => {
    navigate(`/solutions/${activeService.slug}`);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 });
    tl.fromTo(eyebrowRef.current, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.45 })
      .fromTo(headingRef.current, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.72 }, "-=0.1")
      .fromTo(descRef.current, { opacity: 0, y: 20, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, "-=0.35")
      .fromTo(sliderRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.3");
  }, []);

  useEffect(() => {
    const progress = ((activeIndex + 1) / totalSlides) * 100;
    gsap.to(progressFillRef.current, { width: `${progress}%`, duration: 0.4, ease: "power2.out" });
  }, [activeIndex, totalSlides]);

  useEffect(() => { tabRefs.current = tabRefs.current.slice(0, totalSlides); }, [totalSlides]);

  useEffect(() => {
    if (currentSlideRef.current) currentSlideRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
    if (totalSlidesRef.current) totalSlidesRef.current.textContent = String(totalSlides).padStart(2, '0');
  }, [activeIndex, totalSlides]);

  return (
    <section 
      className="wwd-root" 
      id="solutions" 
      ref={sectionRef}
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={resumeAutoSlide}
    >
      <div className="layout-container">
        <div className="wwd-inner">
          <div className="wwd-top-row">
            <div className="wwd-header">
              <span className="wwd-eyebrow" ref={eyebrowRef}>WHAT WE DELIVER</span>
              <h2 className="wwd-heading" ref={headingRef}>
                Operations <em>That don't stop.</em>
              </h2>
              <p className="wwd-desc" ref={descRef}>
                Enterprise-grade OCR, automation, and infrastructure — purpose-built for logistics, warehousing, and industrial operations.
              </p>
            </div>
            <div className="wwd-counter">
              <span className="wwd-counter-current" ref={currentSlideRef}>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="wwd-counter-divider">/</span>
              <span className="wwd-counter-total" ref={totalSlidesRef}>{String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="wwd-slider" ref={sliderRef}>
            <div className="wwd-slider-left">
              <div className="wwd-tabs-list">
                {services.map((service, i) => (
                  <button
                    key={service.slug}
                    className={`wwd-tab ${i === activeIndex ? 'wwd-tab-active' : ''}`}
                    onClick={() => goToSlide(i)}
                    ref={el => tabRefs.current[i] = el}
                  >
                    <span className="wwd-tab-dot" style={{ background: service.color }} />
                    <span className="wwd-tab-label">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="wwd-slider-right">
              <div className="wwd-slider-image-wrapper">
                <video
                  ref={videoRef}
                  className="wwd-slider-video"
                  src={activeService.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={activeIndex}
                />
                <div className="wwd-slider-video-overlay" />
              </div>

              <div className="wwd-slider-controls">
                <button className="wwd-slider-arrow" onClick={goToPrev} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M13 5L7 10L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="wwd-slider-progress">
                  <div className="wwd-slider-progress-fill" ref={progressFillRef} />
                </div>
                <button className="wwd-slider-arrow" onClick={goToNext} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M7 5L13 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="wwd-slider-content">
                <h3 className="wwd-slider-title" ref={contentTitleRef}>{activeService.title}</h3>
                <p className="wwd-slider-desc" ref={contentDescRef}>{activeService.desc}</p>
                <ul className="wwd-slider-features" ref={featuresListRef}>
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="wwd-slider-feature">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="wwd-learn-more" 
                  ref={learnMoreRef}
                  onClick={handleLearnMore}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}