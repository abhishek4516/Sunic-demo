import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SolutionPage.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { solutions } from "../data/solutions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactModal from "../components/contact/ContactModal";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const solution = solutions[slug];

  const [openIndex, setOpenIndex] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pageRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);
  const ctaRef = useRef(null);
  const backButtonRef = useRef(null);
  const videoRef = useRef(null);

  const accordionBodyRefs = useRef([]);

  const toggleAccordion = (i) => {
    const isOpen = openIndex === i;
    const newIndex = isOpen ? null : i;

    if (openIndex !== null && accordionBodyRefs.current[openIndex]) {
      gsap.to(accordionBodyRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    if (!isOpen && accordionBodyRefs.current[i]) {
      const el = accordionBodyRefs.current[i];
      gsap.set(el, { height: "auto", opacity: 1 });
      const fullHeight = el.offsetHeight;
      gsap.fromTo(el,
        { height: 0, opacity: 0 },
        { height: fullHeight, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }

    setOpenIndex(newIndex);
  };

  const handleBack = () => {
    navigate('/#solutions');
  };

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleExploreAll = () => {
    navigate('/#solutions');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    ScrollTrigger.clearScrollMemory();

    if (!solution) return;

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(backButtonRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, delay: 0.1 }
        )
        .fromTo(labelRef.current,
          { opacity: 0, x: -18 },
          { opacity: 1, x: 0, duration: 0.55, delay: 0.2 },
          "-=0.2"
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
        )
        .fromTo(imageRef.current,
          { opacity: 0, x: 60, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        );

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

        ScrollTrigger.refresh();

      }, pageRef);

      rafId.ctx = ctx;
    });

    return () => {
      cancelAnimationFrame(rafId);
      rafId.ctx?.revert();
    };
  }, [solution]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [slug]);

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
          <button onClick={handleBack} className="sp-btn sp-btn--primary">Back to Solutions</button>
        </div>
        <Footer />
      </>
    );
  }

  const videoUrl = solution.videoUrl || "/141056-776768318.mp4";

  return (
    <>
      <Navbar />
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />

      <main className="sp-root" ref={pageRef}>

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

        <div className="sp-hero-wrapper layout-container">
          <div className="sp-back-btn-wrapper">
            <button className="sp-back-btn" ref={backButtonRef} onClick={handleBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Solutions
            </button>
          </div>

          <div className="sp-hero-grid">
            <div className="sp-hero-content">
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

            <div className="sp-hero-image" ref={imageRef}>
              <div className="sp-image-wrapper">
                <video
                  ref={videoRef}
                  className="sp-main-video"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={slug}
                />
                <div className="sp-image-glow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sp-divider layout-container">
          <div className="sp-divider-line" />
        </div>

        <div className="sp-features-section layout-container">

          <div className="sp-section-header">
            <span className="sp-section-eyebrow">Key Features</span>
            <h2 className="sp-section-title">
              What's <em>included</em>
            </h2>
          </div>

          <div className="sp-accordion">
            {solution.benefits.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`sp-accordion-item${isOpen ? " sp-accordion-item--open" : ""}`}
                  ref={(el) => (featuresRef.current[i] = el)}
                >
                  <button
                    className="sp-accordion-trigger"
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={isOpen}
                  >
                    <div className="sp-accordion-trigger-left">
                      <span className="sp-feature-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="sp-accordion-title">{item.title}</span>
                    </div>
                    <span className="sp-accordion-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M4 7L9 12L14 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="sp-accordion-body"
                    ref={(el) => (accordionBodyRefs.current[i] = el)}
                    style={{ height: 0, overflow: "hidden", opacity: 0 }}
                  >
                    <p className="sp-accordion-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

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
              <button onClick={handleContactOpen} className="sp-btn sp-btn--primary">
                Contact Us
              </button>
              <button onClick={handleExploreAll} className="sp-btn sp-btn--ghost">
                Explore All Solutions
              </button>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}