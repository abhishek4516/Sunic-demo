import { useEffect } from "react";

import gsap from "gsap";

import "./trainDemo.css";

import crane from "../../assets/crane.png";

import engine from "../../assets/trainEngine.png";

import wagon1 from "../../assets/train2.png";
import wagon2 from "../../assets/train3.png";
import wagon3 from "../../assets/train4.png";

export default function TrainDemo() {

  useEffect(() => {

    /* TRAIN MOVEMENT */

gsap.fromTo(

  ".train-group",

  {
    x: 0,
    y: 0,
  },

  {
    x: -730,

    y: 320,

    duration: 15,

    ease: "power2.out",
  }
);

    // /* CRANE FLOAT */

    // gsap.to(".crane-object", {

    //   y: -8,

    //   duration: 2.5,

    //   repeat: -1,

    //   yoyo: true,

    //   ease: "sine.inOut",
    // });

    /* CRANE GLOW */

    gsap.to(".crane-glow", {

      opacity: 1,

      scale: 1.15,

      duration: 1.5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

  }, []);

  return (

    <section className="train-demo">

      {/* GRID */}

      <div className="demo-grid"></div>

      {/* TRACK */}

      <div className="train-track"></div>

      {/* CRANE GLOW */}

      <div className="crane-glow"></div>

      {/* CRANE */}

      <img
        src={crane}
        alt=""
        className="crane-object"
      />

      {/* TRAIN */}

      <div className="train-group">

        {/* ENGINE */}

        <img
          src={engine}
          alt=""
          className="train-engine"
        />

        {/* CONTAINER */}

        <img
          src={wagon1}
          alt=""
          className="train-wagon1"
        />

        {/* TANKER */}

        <img
          src={wagon2}
          alt=""
          className="train-wagon2"
        />

        {/* LAST ENGINE */}

        <img
          src={wagon3}
          alt=""
          className="train-wagon3"
        />

      </div>

    </section>
  );
}
