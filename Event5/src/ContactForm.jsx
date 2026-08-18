import React, { useState } from "react";


function ContactForm() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Submitted!\nName: ${Name}\nPhone: ${Phone}\nAddress: ${Address}`
    );

    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="page">

      <div className="form-card">

        {/* Header */}
        <div className="form-header">
          <div className="icon-circle">
            ✉
          </div>

          <h1>Get In Touch</h1>

          <p>
            Fill in the details below and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>

            <div className="input-wrapper">
              <span className="input-icon">👤</span>

              <input
                type="text"
                placeholder="Enter your full name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>

            <div className="input-wrapper">
              <span className="input-icon">📞</span>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="input-group">
            <label>Address</label>

            <div className="input-wrapper textarea-wrapper">
              <span className="input-icon address-icon">📍</span>

              <textarea
                placeholder="Enter your address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="submit-btn">
            <span>Submit Form</span>
            <span className="arrow">→</span>
          </button>

        </form>

        <div className="bottom-text">
          Your information is safe and secure 🔒
        </div>

      </div>

    </div>
  );
}

export default ContactForm;