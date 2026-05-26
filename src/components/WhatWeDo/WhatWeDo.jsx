import "./WhatWeDo.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    index: "01",
    title: "Rake Number OCR",
    tag: "OCR",
    desc:
      "Automated rake number recognition using high-precision OCR — eliminating manual entry across all rail operations.",
  },
  {
    index: "02",
    title: "Container Number OCR",
    tag: "OCR",
    desc:
      "Real-time container number extraction from live feeds with sub-second read accuracy at any angle or lighting condition.",
  },
  {
    index: "03",
    title: "Container Location + OCR",
    tag: "OCR · Tracking",
    desc:
      "Combined spatial positioning and OCR to log exact container location alongside identity — full traceability in one pass.",
  },
  {
    index: "04",
    title: "Vehicle Number OCR",
    tag: "OCR",
    desc:
      "Automatic vehicle plate recognition for trucks, trailers and fleet assets entering or exiting operational zones.",
  },
  {
    index: "05",
    title: "Face Recognition & Extraction",
    tag: "AI · Security",
    desc:
      "Biometric access control and personnel extraction using live face recognition — integrated with gate and zone systems.",
  },
  {
    index: "06",
    title: "GPS Location of Container",
    tag: "GPS · Tracking",
    desc:
      "Real-time GPS tracking of containers across yards and transit routes — full operational visibility at all times.",
  },
  {
    index: "07",
    title: "Gate Operation Automation",
    tag: "Automation",
    desc:
      "Smart gate systems with automated verification, barrier control and real-time operator override for zero-friction entry.",
  },
  {
    index: "08",
    title: "Warehouse Management",
    tag: "Warehousing",
    desc:
      "End-to-end warehouse automation covering package count, inventory tracking and dynamic area management.",
  },
  {
    index: "09",
    title: "Custom Infra Setup",
    tag: "Infrastructure",
    desc:
      "Bespoke infrastructure design and deployment — sized exactly to your operational footprint with zero over-provisioning.",
  },
  {
    index: "10",
    title: "Data Storage Solutions",
    tag: "Infrastructure",
    desc:
      "On-premises and hybrid storage architectures built for high-volume operational data with redundancy and fast retrieval.",
  },
  {
    index: "11",
    title: "Data Centre Solutions",
    tag: "Infrastructure",
    desc:
      "Full data centre builds and managed environments — power, cooling, networking and compute tuned for industrial scale.",
  },
];

export default function WhatWeDo() {

  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      cardsRef.current.forEach((card) => {

        gsap.set(card, { opacity: 0, y: 90, scale: 0.97 });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 48%",
            scrub: 1.2,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="wwd-root"
      id="solutions"
      ref={sectionRef}
    >
         

   {/* BACKGROUND LINES */}

<svg
  className="wwd-bg-lines"
  viewBox="0 0 1440 900"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid slice"
  aria-hidden="true"
>

  <g
    fill="none"
    stroke="#c94a4a"
    strokeLinecap="round"
  >

    <path
      d="M 0,0 C 380,55  980,110 1440,150"
      strokeWidth="0.9"
      opacity="0.16"
    />

    <path
      d="M 0,0 C 360,100 920,210 1440,290"
      strokeWidth="0.9"
      opacity="0.14"
    />

    <path
      d="M 0,0 C 330,150 860,320 1440,440"
      strokeWidth="0.9"
      opacity="0.13"
    />

    <path
      d="M 0,0 C 300,205 790,435 1440,590"
      strokeWidth="0.9"
      opacity="0.12"
    />

    <path
      d="M 0,0 C 265,260 710,545 1440,740"
      strokeWidth="0.9"
      opacity="0.11"
    />

    <path
      d="M 0,0 C 230,310 620,645 1440,880"
      strokeWidth="0.9"
      opacity="0.10"
    />

    <path
      d="M 0,0 C 195,350 530,720 1280,900"
      strokeWidth="0.9"
      opacity="0.09"
    />

    <path
      d="M 0,0 C 160,385 430,780 980,900"
      strokeWidth="0.9"
      opacity="0.08"
    />

    <path
      d="M 0,0 C 125,410 320,825 660,900"
      strokeWidth="0.9"
      opacity="0.07"
    />

    <path
      d="M 0,0 C 90,428 210,850 350,900"
      strokeWidth="0.9"
      opacity="0.06"
    />

    <path
      d="M 0,0 C 50,438 110,860 160,900"
      strokeWidth="0.9"
      opacity="0.05"
    />
       <path
      d="M 0,0 C 50,438 110,860 160,900"
      strokeWidth="0.9"
      opacity="0.04"
    />

  </g>

</svg>

      <div className="wwd-inner">

        {/* LEFT — sticky */}

        <div className="wwd-left">

          <span className="wwd-eyebrow">
            WHAT WE DO
          </span>

          <h2 className="wwd-heading">

            Intelligent Systems
            <br />

            <em>
              Built for Operations
            </em>

          </h2>

          <p className="wwd-desc">
            Enterprise automation, OCR and
            infrastructure systems engineered
            for logistics, warehousing and
            industrial operations.
          </p>

          <div className="wwd-stats">

            <div>
              <div className="wwd-stat-num">
                11<span>+</span>
              </div>
              <div className="wwd-stat-label">
                Core Solutions
              </div>
            </div>

            <div>
              <div className="wwd-stat-num">
                99<span>%</span>
              </div>
              <div className="wwd-stat-label">
                OCR Accuracy
              </div>
            </div>

            <div>
              <div className="wwd-stat-num">
                24<span>/7</span>
              </div>
              <div className="wwd-stat-label">
                Uptime SLA
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT — 11 cards */}

        <div className="wwd-grid">

          {services.map((service, index) => (

            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="wwd-card-wrap"
            >

              <div className="wwd-card">

                <div className="wwd-card-top">
                  <span className="wwd-idx">{service.index}</span>
                  <span className="wwd-tag">{service.tag}</span>
                </div>

                <h3 className="wwd-title">
                  {service.title}
                </h3>

                <p className="wwd-text">
                  {service.desc}
                </p>

                <div className="wwd-arrow">→</div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}