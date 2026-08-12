function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p>Let's Work Together</p>
        <h2>Get In <span>Touch</span></h2>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <h3>Have a project in mind?</h3>

          <p>
            I'm always interested in discussing new ideas, projects,
            collaborations and opportunities.
          </p>

          <div className="contact-info">
            <p>📧 Email: mangomboagborenoh@icloud.com</p>
            <p>📍 Buea, Cameroon</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="primary-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;