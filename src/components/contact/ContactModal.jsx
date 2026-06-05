import "./ContactModal.css";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (formData) => {
    const newErrors = {};
    
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    if (!name || name.trim() === "") {
      newErrors.name = "Full name is required";
    }
    
    if (!email || email.trim() === "") {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!message || message.trim() === "") {
      newErrors.message = "Message is required";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xeewqwze", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        e.target.reset();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close" onClick={onClose}>
          ×
        </button>

        {showSuccess && (
          <div className="success-toast">
            <div className="success-icon">✓</div>
            <div className="success-content">
              <h4>Message Sent Successfully!</h4>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          </div>
        )}

        <div className="contact-modal-top">
          <div className="section-label">Contact Sunic</div>

          <h2 className="contact-modal-title">
            Let's Build
            <br />
            <em>What You Need.</em>
          </h2>

          <p className="contact-modal-sub">
            Tell us about your infrastructure, automation or enterprise
            requirements.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-grid">
            <div className="input-group">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                className={errors.name ? "input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className={errors.email ? "input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="contact-grid">
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              disabled={isSubmitting}
            />

            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              disabled={isSubmitting}
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              className={errors.message ? "input-error" : ""}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}