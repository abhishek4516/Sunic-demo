import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {

  const introRef = useRef(null);

useEffect(() => {

  gsap.registerPlugin(ScrollTrigger);

  const elements =
    introRef.current.querySelectorAll(
      ".intro-animate"
    );

  gsap.fromTo(
    elements,

    {
      opacity: 0,
      y: 120,
    },

    {
      opacity: 1,
      y: 0,

      stagger: 0.15,

      ease: "power3.out",

      scrollTrigger: {

        trigger: introRef.current,

        start: "top 90%",

        end: "top 50%",

        scrub: 1,
      },
    }
  );

}, []);
  return (
    <section
      className="section"
      ref={introRef}
    >

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >

        <div className="section-label intro-animate">
          Enterprise IT Infrastructure
        </div>

        <h2 className="section-title intro-animate">
          Turning Infrastructure Into
          <em> Competitive Advantage</em>
        </h2>

        <p className="section-desc intro-animate">
          At Sunic Technologies, we believe your IT infrastructure
          is more than hardware — it is the backbone of your business.
        </p>

        <p
          className="section-desc intro-animate"
          style={{ marginTop: "10px" }}
        >
          We help mid to large-sized organisations across India
          unlock the full potential of their technology investments,
          delivering enterprise-grade solutions that increase
          operational efficiency and drive ROI.
        </p>

      </div>

    </section>
  );
}