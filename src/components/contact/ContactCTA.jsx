import "./ContactCTA.css";

export default function ContactCTA({ onContactClick }) {
  return (
    <section className="cta-section" id="contact">
      <svg
        className="cta-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#b64a4a" strokeLinecap="round">
          <path
            d="M 0,0 C 400,30 1000,60 1440,90"
            strokeWidth="0.7"
            opacity="0.16"
          />

          <path
            d="M 0,0 C 350,130 920,235 1440,290"
            strokeWidth="0.7"
            opacity="0.13"
          />

          <path
            d="M 0,0 C 290,230 820,410 1440,490"
            strokeWidth="0.7"
            opacity="0.11"
          />

          <path
            d="M 0,0 C 210,330 680,570 1440,690"
            strokeWidth="0.7"
            opacity="0.09"
          />

          <path
            d="M 0,0 C 160,380 580,650 1320,790"
            strokeWidth="0.7"
            opacity="0.07"
          />
        </g>
      </svg>

      <div className="layout-container">
        <h2 className="cta-title">
          Ready to strengthen your
          <br />
          <strong>IT infrastructure?</strong>
        </h2>

        <p className="cta-sub">Talk to our experts today.</p>

        <button className="btn-primary" onClick={onContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
}
