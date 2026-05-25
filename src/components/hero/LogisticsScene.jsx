import { useEffect, useRef } from "react";

import gsap from "gsap";

import crane from "../../assets/crane.png";

// import gate from "../../assets/ingate.svg";

import engine from "../../assets/trainEngine.png";

import wagon1 from "../../assets/train2.png";
import wagon2 from "../../assets/train3.png";
import wagon3 from "../../assets/train4.png";

// import truck from "../../assets/truck.png";

export default function LogisticsScene() {

  const trainRef = useRef(null);

  const truckRef = useRef(null);

  const glowRef = useRef(null);

  useEffect(() => {

    /* TRAIN TIMELINE */

    const trainTimeline = gsap.timeline({
      repeat: -1,
    });

    trainTimeline

      .to(
        trainRef.current,
        {
          x: -340,
          y: 160,
          duration: 12,
          ease: "power2.inOut",
        }
      )

      .to(
        trainRef.current,
        {
          x: -420,
          y: 200,
          opacity: 0,
          scale: 0.93,
          duration: 1.2,
          ease: "power2.in",
        },
        "+=0.6"
      )

      .set(
        trainRef.current,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.96,
        }
      )

      .to(
        trainRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.inOut",
        }
      )

      .to(
        {},
        {
          duration: 1.2,
        }
      );

    /* TRUCK TIMELINE */

    const truckTimeline = gsap.timeline({
      repeat: -1,
      delay: 3,
    });

    truckTimeline

      .to(
        truckRef.current,
        {
          x: -240,
          y: -120,
          duration: 8,
          ease: "power2.inOut",
        }
      )

      .to(
        {},
        {
          duration: 1.2,
        }
      )

      .to(
        truckRef.current,
        {
          opacity: 0,
          scale: 0.94,
          duration: 1,
          ease: "power2.in",
        }
      )

      .set(
        truckRef.current,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.96,
        }
      )

      .to(
        truckRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      )

      .to(
        {},
        {
          duration: 1.4,
        }
      );

    /* CRANE GLOW */

    gsap.to(
      glowRef.current,
      {
        opacity: 1,
        scale: 1.12,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

  }, []);

  return (

    <div className="logistics-scene">

      {/* GLOW */}

      <div
        ref={glowRef}
        className="crane-glow"
      ></div>

      {/* CRANE */}

      <img
        src={crane}
        alt=""
        className="crane-object"
      />

      {/* GATE */}

      {/* <img
        src={gate}
        alt=""
        className="gate-object"
      /> */}

      {/* TRAIN */}

      <div
        ref={trainRef}
        className="train-group"
      >

        <img
          src={engine}
          alt=""
          className="train-engine"
        />

        <img
          src={wagon1}
          alt=""
          className="train-wagon1"
        />

        <img
          src={wagon2}
          alt=""
          className="train-wagon2"
        />

        <img
          src={wagon3}
          alt=""
          className="train-wagon3"
        />

      </div>

      {/* TRUCK */}

      {/* <img
        ref={truckRef}
        src={truck}
        alt=""
        className="hero-truck"
      /> */}

    </div>
  );
}