import yard from "../../assets/yard.png";
import rail from "../../assets/rail.png";

export default function LogisticsScene() {

  return (
    <div className="logistics-scene">

      {/* BACKGROUND YARD */}
      <img
        src={yard}
        alt=""
        className="yard-scene"
      />

      {/* RAIL SYSTEM */}
      <img
        src={rail}
        alt=""
        className="rail-scene"
      />

      {/* OCR SCAN AREA */}
      <div className="ocr-pulse"></div>

      {/* SVG MOTION LAYER */}
      <svg
        className="motion-layer"
        viewBox="0 0 1200 800"
      >

        {/* MAIN ROUTE */}
        <path
          id="main-route"
          className="motion-route"
          d="
            M 640 500
            C 720 430,
              840 360,
              980 290
          "
        />

      </svg>

      {/* MOVING LOGISTICS DOT */}
      <div className="logistics-dot"></div>

    </div>
  );
}