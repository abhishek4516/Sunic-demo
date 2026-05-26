import './About.css';
export default function About() {
  return (
    <section className="section" id="about">

      <div className="about-grid">

        <div className="about-image-wrap">

          <div className="about-img-frame">
            <span className="about-img-placeholder">
              ST
            </span>
          </div>

        </div>

        <div>

          <div className="section-label">
            About Sunic
          </div>

          <h2 className="section-title">
            Two Decades of Trust.
            <br />
            <em>One Commitment.</em>
          </h2>

          <p className="section-desc">
            Founded in 2002, Sunic Technologies is one of North India's
            most respected enterprise IT infrastructure companies.
          </p>

          <p
            className="section-desc"
            style={{ marginTop: "20px" }}
          >
            We are not just a vendor —
            we are a technology partner.
          </p>

        </div>

      </div>

    </section>
  );
}