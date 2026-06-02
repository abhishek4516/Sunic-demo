import "./Ecosystem.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import concorLogo from "../../assets/concor.svg";
import sunicLogo from "../../assets/sunic_logo.png";
import kyclDashboard from "../../assets/kycl.png";

gsap.registerPlugin(ScrollTrigger);

export default function Ecosystem() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const dashboardRef = useRef(null);

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
        { opacity: 1, x: 0, duration: 0.45 }
      );

      tl.fromTo(
        titleRef.current,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.72 },
        "-=0.1"
      );

      tl.fromTo(
        descRef.current,
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
        statsRef.current,
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
        dashboardRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="eco-section" id="ecosystem" ref={sectionRef}>
      {/* BACKGROUND LINES */}
      <svg
        className="eco-bg-lines"
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
        </g>
      </svg>

      <div className="eco-glow"></div>

      <div className="layout-container">
        <div className="eco-grid">
          
          {/* LEFT - Content Section */}
          <div className="eco-content">
            <div className="eco-partner-badge" ref={labelRef}>
              <span className="partner-badge-line"></span>
              <span>Live Enterprise Partnership</span>
            </div>

            <h2 className="eco-heading" ref={titleRef}>
              Powering CONCOR's
              <br />
              <em>EXIM Operations</em>
            </h2>

            <p className="eco-description" ref={descRef}>
              Sunic Technologies has deployed KYCL, an AI-Powered Real-Time Status & Tracking Dashboard,
              for CONCOR at ICD Tughlakabad. The platform automates container tracking, transaction
              processing, and provides end-to-end visibility for export-import operations.
            </p>

            {/* Stats Section */}
            <div className="eco-impact-stats" ref={statsRef}>
              <div className="impact-stat">
                <div className="impact-number">24/7</div>
                <div className="impact-label">Real-Time Tracking</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">100%</div>
                <div className="impact-label">Digital Workflow</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">KYCL</div>
                <div className="impact-label">AI-Powered Dashboard</div>
              </div>
            </div>

            <a 
              href="https://kycl.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="eco-live-demo-btn"
            >
              Explore Live Dashboard
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* RIGHT - Dashboard Preview Card */}
          <div className="eco-dashboard-card" ref={dashboardRef}>
            <div className="dashboard-card-inner">
              
              {/* CONCOR + Sunic Logos */}
              <div className="dashboard-logos">
                <div className="logo-item concor-logo">
                  <img 
                    src={concorLogo} 
                    alt="CONCOR Logo"
                    className="partner-logo-img concor-img"
                  />
                </div>
                <div className="logo-divider"></div>
                <div className="logo-item sunic-logo">
                  <img 
                    src={sunicLogo} 
                    alt="Sunic Technologies Logo"
                    className="partner-logo-img sunic-img"
                  />
                </div>
              </div>

              {/* Dashboard Title */}
              <div className="dashboard-header-text">
                {/* <span className="dashboard-badge">Live Deployment</span> */}
                <h3 className="dashboard-name">KYCL Dashboard</h3>
                <p className="dashboard-subtitle">AI-Powered Real-Time Status & Tracking</p>
              </div>

              {/* KYCL DASHBOARD IMAGE - Your actual screenshot */}
              <div className="dashboard-image-wrapper">
                <img 
                  src={kyclDashboard} 
                  alt="KYCL Dashboard - AI-Powered Real-Time Status & Tracking for CONCOR ICD Tughlakabad"
                  className="kycl-dashboard-img"
                />
              </div>

              {/* Dashboard Features */}
              <div className="dashboard-features">
                <div className="feature-tag">
                  <span className="feature-dot"></span>
                  CRN / Container Number Lookup
                </div>
                <div className="feature-tag">
                  <span className="feature-dot"></span>
                  Export / Import Transaction Processing
                </div>
                <div className="feature-tag">
                  <span className="feature-dot"></span>
                  Real-Time Status Updates
                </div>
              </div>

              {/* Location & Status */}
              <div className="dashboard-location-status">
                <div className="location-info">
                  {/* <span className="location-icon">📍</span> */}
                  <span>For ICD Tughlakabad</span>
                </div>
                <div className="live-status">
                  <span className="live-pulse"></span>
                  <span>Live Operational</span>
                </div>
              </div>

              {/* Footer */}
              <div className="dashboard-footer-note">
                <span>Powered by</span>
                <strong>Sunic Technologies</strong>
                <span className="footer-copyright">© 2026 CONCOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}