import { useEffect } from "react";

import gsap from "gsap";

import truck from "../../assets/truck.svg";

export default function LogisticsScene() {

  useEffect(() => {

    // TRUCK MOTION

    gsap.to(".truck-object", {

      x: -700,

      duration: 12,

      repeat: -1,

      repeatDelay: 1,

      ease: "power1.inOut",
    });

    // FLOATING INFO CARDS

    gsap.to(".info-card", {

      y: -12,

      duration: 2.5,

      stagger: 0.3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    // ACTIVE NODES

    gsap.to(".infra-node", {

      scale: 1.4,

      opacity: 0.4,

      duration: 1.6,

      stagger: 0.4,

      repeat: -1,

      yoyo: true,

      ease: "power1.inOut",
    });

  }, []);

  return (

    <div className="logistics-scene">

      {/* ROAD */}

      <div className="entry-road"></div>

      {/* TRUCK */}

      <img
        src={truck}
        alt=""
        className="truck-object"
      />

      {/* INFRASTRUCTURE NODES */}

      <div className="infra-node node-1"></div>
      <div className="infra-node node-2"></div>
      <div className="infra-node node-3"></div>

      {/* INFO CARDS */}

      <div className="info-card card-1">

        <span className="card-label">
          OCR DETECTED
        </span>

        <h4>
          WDG4G 49245
        </h4>

        <p>
          Confidence 98.7%
        </p>

      </div>

      <div className="info-card card-2">

        <span className="card-label">
          GPS ACTIVE
        </span>

        <h4>
          Container #C2981
        </h4>

        <p>
          Route Updated
        </p>

      </div>

      <div className="info-card card-3">

        <span className="card-label">
          GATE STATUS
        </span>

        <h4>
          Access Granted
        </h4>

        <p>
          Vehicle Verified
        </p>

      </div>

    </div>
  );
}