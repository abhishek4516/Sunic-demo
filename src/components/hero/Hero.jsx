import HeroVisual from "./HeroVisual";

export default function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-badge">

            Enterprise Infrastructure Intelligence

          </div>

          <h1 className="hero-title">

            Infrastructure Systems
            <br />

            <strong>
              Built for Intelligent Operations.
            </strong>

          </h1>

          <p className="hero-sub">

            OCR, automation, tracking and enterprise
            infrastructure solutions for logistics,
            warehousing and industrial operations.

          </p>

          <div className="hero-actions">

            <a
              className="btn-primary"
              href="#solutions"
            >
              Explore Solutions
            </a>

            <a
              className="btn-outline"
              href="#contact"
            >
              Talk to Experts
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}

        <HeroVisual />

      </div>

    </section>
  );
}