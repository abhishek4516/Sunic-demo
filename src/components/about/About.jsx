import "./About.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = ["Oracle", "Cisco", "Microsoft", "VMware", "Symantec"];

export default function About() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const statCardsRef = useRef([]);
  const mainImageRef = useRef(null);
  const sideImagesRef = useRef([]);
  const bottomCardRef = useRef(null);

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
        introRef.current,
        { opacity: 0, y: 20, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65 },
        "-=0.4"
      );

      tl.fromTo(
        statCardsRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
        "-=0.3"
      );

      tl.fromTo(
        mainImageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.5"
      );

      tl.fromTo(
        sideImagesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.12 },
        "-=0.55"
      );

      tl.fromTo(
        bottomCardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
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
        {/* Header */}
        <div className="about-header">
          <div className="about-header-left">
            <div className="section-label" ref={labelRef}>
              <span className="label-line"></span>
              Who we are
            </div>
            <h2 className="about-title" ref={titleRef}>
              Two Decades of Trust.
              <br />
              <em>One Commitment.</em>
            </h2>
          </div>

          <p className="about-intro" ref={introRef}>
            Founded in 2002, Sunic Technologies is one of North India's most
            respected enterprise IT infrastructure companies. Headquartered
            in Gurgaon with offices across Delhi, Mumbai, UP, and
            Uttaranchal, we deliver quality system integration solutions to
            corporates, PSUs, and Government organizations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="about-bento">
          <div className="bento-stats">
            <div
              className="bento-card stat-card tint-red"
              ref={(el) => (statCardsRef.current[0] = el)}
            >
              <div className="stat-number">2002</div>
              <div className="stat-label">Year Founded</div>
            </div>
            <div
              className="bento-card stat-card tint-gold"
              ref={(el) => (statCardsRef.current[1] = el)}
            >
              <div className="stat-number">500+</div>
              <div className="stat-label">Customers Served</div>
            </div>
            <div
              className="bento-card stat-card tint-neutral"
              ref={(el) => (statCardsRef.current[2] = el)}
            >
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>

          <div className="bento-card main-image-card" ref={mainImageRef}>
            <img src="/contocr.jpg" alt="Modern IT infrastructure server room" />
            <span className="bento-tag">Infrastructure</span>
            <div className="bento-caption">
              <strong>Built for Scale.</strong>
              <span>System integration engineered for enterprise reliability.</span>
            </div>
          </div>

          <div className="bento-side-images">
            <div
              className="bento-card side-image-card"
              ref={(el) => (sideImagesRef.current[0] = el)}
            >
              <img src="/servers.webp" alt="Enterprise technology solutions" />
              <span className="bento-tag">Data Centers</span>
            </div>
            <div
              className="bento-card side-image-card"
              ref={(el) => (sideImagesRef.current[1] = el)}
            >
              <img src="/network.jpg" alt="Data center and cloud infrastructure" />
              <span className="bento-tag">Network &amp; Cloud</span>
            </div>
          </div>

          <div className="bento-card bottom-card" ref={bottomCardRef}>
            <div className="bottom-card-content">
              <p className="bottom-card-text">
                We are not just a vendor — we are a technology partner. Our
                customer-centric approach, combined with strategic
                partnerships with technology leaders, enables us to deliver
                optimized, cutting-edge solutions.
              </p>
              <div className="bottom-card-partners">
                {PARTNERS.map((partner) => (
                  <span className="partner-tag" key={partner}>
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div className="bottom-card-media">
              <img
                src="/Logistics_Supply_Chain.jpg"
                alt="Tech team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}