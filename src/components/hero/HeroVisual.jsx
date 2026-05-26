

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroVisual() {

  return (

    <div
      className="hero-visual"
      style={{
        position: "relative",
        width: "100%",
        height: "720px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      {/* RED GLOW */}

      <div
        style={{
          position: "absolute",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background:
            "radial-gradient(rgba(255,70,70,0.16), transparent 70%)",
          filter: "blur(70px)",
          zIndex: 1,
        }}
      ></div>

      {/* LOTTIE */}

      <div
        style={{
          position: "relative",
          width: "500px",
          maxWidth: "850px",
          zIndex: 2,
          transform: "translateX(40px)",

          // filter:
          //   `
          //   sepia(1)
          //   hue-rotate(-15deg)
          //   saturate(3)
          //   brightness(0.82)
          //   contrast(1.05)
          //   `,
        }}
      >

        <DotLottieReact
          src="https://lottie.host/1d4218cd-2719-46bf-8137-6638ae4d4ec7/mA7PgSxszq.lottie"
          loop
          autoplay
        />
<DotLottieReact
          src="https://lottie.host/afb5918f-40aa-469f-9cea-adb581d858e0/ngtuOCB7rB.lottie"
          loop
          autoplay
        />
      </div>
    

    </div>
  );
}