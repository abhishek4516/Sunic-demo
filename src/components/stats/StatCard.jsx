import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatCard({
  value,
  suffix,
  label,
}) {

  const numberRef = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const counter = {
      val: 0,
    };

    gsap.to(counter, {

      val: value,

      duration: 2,

      ease: "power3.out",

      onUpdate: () => {

        if (!numberRef.current) return;

        numberRef.current.innerText =
          Math.floor(counter.val) + suffix;
      },

      scrollTrigger: {

        trigger: numberRef.current,

        start: "top 85%",

        once: true,
      },
    });

  }, [value, suffix]);

  return (
    <div className="stat-item">

      <div
        className="stat-num"
        ref={numberRef}
      >
        0{suffix}
      </div>

      <div className="stat-label">
        {label}
      </div>

    </div>
  );
}