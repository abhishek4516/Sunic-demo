import "./About.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const statsRef = useRef(null);
  const partnersRef = useRef(null);

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
        imageRef.current,
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

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* BACKGROUND LINES */}
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
          
          {/* LEFT - Image Section */}
          <div className="about-image-wrap" ref={imageRef}>
            <div className="about-img-frame">
              <div className="about-img-badge">
                <strong>22+</strong>
                <span>Years of Excellence</span>
              </div>
              <div className="about-decorline"></div>
              <div className="about-img-placeholder">
                <span className="about-placeholder-text">SUNIC</span>
                <span className="about-placeholder-sub">Since 2002</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Content Section */}
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

            {/* Stats Section */}
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

        {/* Partners Section
        <div className="about-partners" ref={partnersRef}>
          <div className="partners-header">
            <span className="partners-line"></span>
            <span>Strategic Technology Partners</span>
          </div>
          <div className="partners-grid">
            {["Oracle", "Cisco", "Microsoft", "VMware", "Symantec", "HP", "IBM", "EMC", "Citrix", "SUSE"].map((partner, i) => (
              <div key={i} className="partner-tag">{partner}</div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}