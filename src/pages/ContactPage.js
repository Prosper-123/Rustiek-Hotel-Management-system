import React from "react";
import safari from "../images/safari.jpg"; // Add a cover image to your assets

const ContactPage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section with Cover Image */}
      <section style={styles.header}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.headerTitle}>Get in Touch</h1>
          <p style={styles.headerText}>
            We'd love to hear from you. Feel free to reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section style={styles.contactInfo}>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Address</h3>
          <p>123 Rustiek Street</p>
          <p>Kanase, Botswana</p>
        </div>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Phone</h3>
          <p>(+267) 123-456-789</p>
        </div>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Email</h3>
          <p>info@rustiek.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={styles.contactForm}>
        <h2 style={styles.formTitle}>Contact Us</h2>
        <form style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section - Updated to Kanase, Botswana */}
      <section style={styles.map}>
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.2232826343775!2d25.938211075802673!3d-24.652618479086794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea3cbbc8f3f8b03%3A0x8f6e0a9124c5b8c7!2sKanase%2C%20Botswana!5e0!3m2!1sen!2s!4v1704375600000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: "none", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  header: {
    position: "relative",
    height: "300px",
    backgroundImage: `url(${safari})`, // Cover image
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heroOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better readability
    padding: "40px",
    borderRadius: "8px",
    color: "white",
  },
  headerTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "15px",
    textTransform: "uppercase",
  },
  headerText: {
    fontSize: "1.3rem",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    marginBottom: "50px",
  },
  infoCard: {
    flex: 1,
    margin: "0 15px",
    padding: "25px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  infoTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#333",
    fontWeight: "600",
  },
  contactForm: {
    textAlign: "center",
    marginBottom: "50px",
  },
  formTitle: {
    fontSize: "2.5rem",
    marginBottom: "25px",
    fontWeight: "600",
    color: "#333",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  map: {
    marginTop: "50px",
  },
};

export default ContactPage;
