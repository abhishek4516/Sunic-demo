import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        {/* CLOSE */}

        <button className="contact-close" onClick={onClose}>
          ×
        </button>

        {/* TOP */}

        <div className="contact-modal-top">
          <div className="section-label">Contact Sunic</div>

          <h2 className="contact-modal-title">
            Let’s Build
            <br />
            <em>Intelligent Infrastructure.</em>
          </h2>

          <p className="contact-modal-sub">
            Tell us about your infrastructure, automation or enterprise
            requirements.
          </p>
        </div>

        {/* FORM */}

        <form className="contact-form">
          <div className="contact-grid">
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />
          </div>

          <div className="contact-grid">
            <input type="text" placeholder="Company Name" />

            <input type="text" placeholder="Phone Number" />
          </div>

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit" className="contact-submit">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
