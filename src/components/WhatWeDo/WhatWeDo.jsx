import { useState } from "react";

const services = [
  {
    index: "01",
    title: "Rake & Container OCR",
    desc: "Automated OCR systems for rake, container and vehicle identification — zero manual input.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 17h7M17.5 14v7"/>
      </svg>
    ),
    span: false,
  },
  {
    index: "02",
    title: "Gate Automation",
    desc: "Smart gate systems with automated verification, barrier control and real-time operator override.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
        <path d="M12 22V12M2 7l10 5 10-5"/>
      </svg>
    ),
    span: false,
  },
  {
    index: "03",
    title: "GPS & Tracking Systems",
    desc: "Real-time fleet and asset monitoring with infrastructure visibility across all operational zones.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8" strokeDasharray="2 3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
    span: false,
  },
  {
    index: "04",
    title: "Warehouse Management",
    desc: "Warehouse automation, package tracking and dynamic area management — end-to-end.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    span: false,
  },
  {
    index: "05",
    title: "Enterprise Infrastructure",
    desc: "Custom infrastructure setups, on-prem storage and data centre solutions built to your operational scale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1"/>
        <rect x="2" y="10" width="20" height="5" rx="1"/>
        <rect x="2" y="17" width="20" height="5" rx="1"/>
        <circle cx="18" cy="5.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="18" cy="12.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="18" cy="19.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    span: true,
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .wwd-root {
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(160deg, #0d0202 0%, #150404 55%, #1b0505 100%);
    padding: 120px 60px;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }

  .wwd-root * { box-sizing: border-box; margin: 0; padding: 0; }

  /* noise grain */
  .wwd-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
    opacity: 0.28;
    pointer-events: none;
    z-index: 0;
  }

  /* ambient glow cluster */
  .wwd-glow-a {
    position: absolute;
    width: 640px; height: 640px;
    top: -220px; right: -180px;
    background: radial-gradient(circle, rgba(255,45,45,0.07) 0%, transparent 62%);
    border-radius: 50%;
    pointer-events: none;
  }
  .wwd-glow-b {
    position: absolute;
    width: 380px; height: 380px;
    bottom: -100px; left: -80px;
    background: radial-gradient(circle, rgba(255,60,60,0.05) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .wwd-inner {
    max-width: 1340px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 100px;
    align-items: start;
    position: relative;
    z-index: 1;
  }

  /* ── LEFT ── */
  .wwd-left {
    position: sticky;
    top: 110px;
  }

  .wwd-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 10.5px;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #ff5c5c;
    margin-bottom: 22px;
  }
  .wwd-eyebrow::before {
    content: '';
    display: block;
    width: 26px; height: 1px;
    background: #ff5c5c;
    opacity: 0.65;
  }

  .wwd-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(34px, 3.2vw, 50px);
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
  }
  .wwd-heading em {
    font-style: normal;
    background: linear-gradient(115deg, #ff5c5c 0%, #ff9090 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .wwd-desc {
    font-size: 15px;
    color: rgba(255,255,255,0.42);
    line-height: 1.78;
    max-width: 280px;
    margin-bottom: 48px;
  }

  /* stats row */
  .wwd-stats {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .wwd-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 4px;
  }
  .wwd-stat-num span {
    color: #ff5c5c;
  }
  .wwd-stat-label {
    font-size: 11.5px;
    color: rgba(255,255,255,0.32);
    letter-spacing: 0.04em;
  }

  /* ── GRID ── */
  .wwd-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .wwd-card-wrap.span-full {
    grid-column: 1 / -1;
  }

  /* ── CARD ── */
  .wwd-card {
    position: relative;
    padding: 30px 28px 52px;
    border-radius: 20px;
    overflow: hidden;
    background: rgba(255,255,255,0.022);
    cursor: pointer;
    transition: transform 0.42s cubic-bezier(0.23,1,0.32,1), background 0.35s ease;
    height: 100%;
  }

  /* gradient border ring via mask */
  .wwd-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(
      140deg,
      rgba(255,255,255,0.09) 0%,
      rgba(255,255,255,0.02) 50%,
      rgba(255,60,60,0.0) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    transition: background 0.42s ease;
  }

  /* top-right ambient glow on card — fades in on hover */
  .wwd-card::after {
    content: '';
    position: absolute;
    width: 240px; height: 240px;
    top: -120px; right: -100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,60,60,0.11) 0%, transparent 65%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.42s ease;
  }

  .wwd-card:hover {
    transform: translateY(-7px);
    background: rgba(255,60,60,0.028);
  }
  .wwd-card:hover::before {
    background: linear-gradient(
      140deg,
      rgba(255,70,70,0.26) 0%,
      rgba(255,255,255,0.04) 50%,
      rgba(255,60,60,0.08) 100%
    );
  }
  .wwd-card:hover::after { opacity: 1; }

  /* span card horizontal layout */
  .span-full .wwd-card {
    display: flex;
    align-items: flex-start;
    gap: 36px;
    padding: 28px 32px;
    min-height: unset;
  }
  .span-full .wwd-card-body { flex: 1; }

  /* ── ICON ── */
  .wwd-icon {
    width: 42px; height: 42px;
    border-radius: 12px;
    background: rgba(255,70,70,0.09);
    border: 1px solid rgba(255,70,70,0.13);
    display: flex; align-items: center; justify-content: center;
    color: #ff6e6e;
    margin-bottom: 20px;
    flex-shrink: 0;
    transition: background 0.35s ease, border-color 0.35s ease;
  }
  .wwd-card:hover .wwd-icon {
    background: rgba(255,70,70,0.17);
    border-color: rgba(255,70,70,0.28);
  }

  /* index */
  .wwd-idx {
    display: block;
    font-size: 10px;
    letter-spacing: 0.28em;
    color: rgba(255,92,92,0.55);
    margin-bottom: 10px;
  }

  /* title */
  .wwd-title {
    font-family: 'Syne', sans-serif;
    font-size: 19px;
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    line-height: 1.25;
    letter-spacing: -0.015em;
    margin-bottom: 10px;
  }

  /* desc */
  .wwd-text {
    font-size: 13.5px;
    color: rgba(255,255,255,0.4);
    line-height: 1.78;
  }

  /* arrow pill */
  .wwd-arrow {
    position: absolute;
    bottom: 20px; right: 20px;
    width: 30px; height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.09);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.2);
    font-size: 13px;
    transition: border-color 0.35s ease, color 0.35s ease, transform 0.35s ease;
  }
  .wwd-card:hover .wwd-arrow {
    border-color: rgba(255,92,92,0.4);
    color: #ff5c5c;
    transform: translate(3px, -3px);
  }

  /* span card arrow is inline */
  .span-full .wwd-arrow {
    position: static;
    transform: none;
    margin-left: auto;
    align-self: center;
    flex-shrink: 0;
  }
  .span-full .wwd-card:hover .wwd-arrow {
    transform: translate(3px, -3px);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .wwd-inner { grid-template-columns: 1fr; gap: 56px; }
    .wwd-left { position: relative; top: unset; }
  }
  @media (max-width: 768px) {
    .wwd-root { padding: 80px 24px; }
    .wwd-grid { grid-template-columns: 1fr; }
    .wwd-card-wrap.span-full { grid-column: auto; }
    .span-full .wwd-card { flex-direction: column; gap: 0; }
    .span-full .wwd-arrow { position: absolute; }
    .wwd-arrow { display: none; }
  }
`;

export default function WhatWeDo() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <section className="wwd-root" id="solutions">
        <div className="wwd-glow-a" />
        <div className="wwd-glow-b" />

        <div className="wwd-inner">
          {/* LEFT */}
          <div className="wwd-left">
            <span className="wwd-eyebrow">What We Do</span>
            <h2 className="wwd-heading">
              Intelligent Systems
              <br />
              <em>Built for Operations</em>
            </h2>
            <p className="wwd-desc">
              Enterprise automation, OCR and infrastructure systems engineered for
              logistics, warehousing and industrial operations.
            </p>

            <div className="wwd-stats">
              <div>
                <div className="wwd-stat-num">5<span>+</span></div>
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
          </div>

          {/* RIGHT */}
          <div className="wwd-grid">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`wwd-card-wrap${svc.span ? " span-full" : ""}`}
              >
                <div
                  className="wwd-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="wwd-icon">{svc.icon}</div>
                  <div className="wwd-card-body">
                    <span className="wwd-idx">{svc.index}</span>
                    <h3 className="wwd-title">{svc.title}</h3>
                    <p className="wwd-text">{svc.desc}</p>
                  </div>
                  <div className="wwd-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 10L10 2M4 2h6v6"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}