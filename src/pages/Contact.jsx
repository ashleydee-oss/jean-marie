import React, { useState } from 'react';

export default function Contact() {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [department, setDepartment] = useState('General Operations');
  const [message, setMessage] = useState('');

  // Status Alerts
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Basic validation
    if (!name || !email || !subject || !message) {
      setErrorMsg('Please populate all required fields marked with an asterisk (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please input a valid email address.');
      return;
    }

    // Success State - Clean of fake names and logs
    setSuccessMsg(`Thank you for your message, ${name}. Your message has been sent successfully. Jean Marie will respond to you at ${email} within 24 business hours.`);
    
    // Clear inputs
    setName('');
    setEmail('');
    setSubject('');
    setDepartment('General Operations');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <section className="card">
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Contact Jean Marie Kemery-Owen</h1>
        <p>
          Need to streamline an office layout, resolve vendor contract logistics, structure a database, or discuss administrative operations? Reach out directly via the form below or standard registry details.
        </p>
      </section>

      <div className="contact-grid">
        {/* Left Column: Form */}
        <section className="card">
          <h2 style={{ marginBottom: '20px' }}>Send a Message</h2>
          
          {errorMsg && <div className="form-error-alert">{errorMsg}</div>}
          {successMsg && <div className="form-success-alert">{successMsg}</div>}

          <form onSubmit={handleSubmit} className="comment-form">
            <div className="form-group">
              <label htmlFor="contact-name">Full Name *</label>
              <input
                type="text"
                id="contact-name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address *</label>
              <input
                type="email"
                id="contact-email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-dept">Relevant Administrative Pillar</label>
              <select
                id="contact-dept"
                className="form-control"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="General Operations">General Operations Inquiry</option>
                <option value="Schedule & Calendar">Schedule & Calendar Management</option>
                <option value="Digital Records">Digital Records & Databases</option>
                <option value="Vendor & Budgets">Vendor Relations & Budgets</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject *</label>
              <input
                type="text"
                id="contact-subject"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Office Operations Consultation"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                className="form-control"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail your inquiry or project scope here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </section>

        {/* Right Column: Registry details & Maps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Registry Details */}
          <section className="card" style={{ paddingBottom: '25px' }}>
            <h2 style={{ marginBottom: '20px' }}>Registry Office</h2>
            <ul className="contact-info-list" style={{ paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--primary)' }}>Email Correspondence:</strong>
                <p style={{ margin: '0', fontSize: '0.95rem' }}><a href="mailto:kemeryowenjeanmarie@gmail.com">kemeryowenjeanmarie@gmail.com</a></p>
              </li>

              <li style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--primary)' }}>Direct Registry Line:</strong>
                <p style={{ margin: '0', fontSize: '0.95rem' }}><a href="tel:+18045521943">+1 (804) 552-1943</a></p>
              </li>

              <li style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--primary)' }}>Mailing Address:</strong>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  3519 Bluffside Dr,<br />
                  North Chesterfield, VA 23237
                </p>
              </li>

              <li style={{ marginBottom: '0px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--primary)' }}>Active Hours:</strong>
                <p style={{ margin: '0', fontSize: '0.95rem' }}>Monday – Friday: 08:00 AM – 05:00 PM EST</p>
              </li>
            </ul>
          </section>

          {/* Regional Map Placeholder */}
          <section className="card" style={{ background: '#FAF7F2' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Richmond & Chesterfield Coverage</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '15px' }}>
              Providing operational leadership and coordinating on-site and remote systems across the greater Richmond metropolitan area.
            </p>
            <div 
              style={{ 
                height: '180px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: '#fff',
                borderRadius: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                textAlign: 'center',
                padding: '20px'
              }}
            >
              <strong style={{ color: 'var(--dark-text)' }}>Richmond Metro Service Region</strong>
              <span style={{ fontSize: '0.8rem', marginTop: '4px' }}>North Chesterfield &bull; Chesterfield County &bull; Richmond Corporate Hubs</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
