import React from "react";

const ContactPage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.headerTitle}>Get in Touch</h1>
        <p style={styles.headerText}>
          We'd love to hear from you. Feel free to reach out with any questions or feedback.
        </p>
      </section>

      {/* Contact Information Section */}
      <section style={styles.contactInfo}>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Address</h3>
          <p>123 Rustiek Street</p>
          <p>Luxury City, LX 45678</p>
        </div>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Phone</h3>
          <p>(123) 456-7890</p>
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

      {/* Map Section */}
      <section style={styles.map}>
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835123456789!2d-122.0838515!3d37.3860517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c1a1a1a1a1%3A0xaaaaaaaaaaaaaa!2sRustiek%20Hotel!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
    textAlign: "center",
    padding: "70px 20px",
    backgroundColor: "#f1f1f1",
    marginBottom: "50px",
    borderRadius: "8px",
  },
  headerTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "15px",
    textTransform: "uppercase",
    color: "#333",
  },
  headerText: {
    fontSize: "1.3rem",
    color: "#666",
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
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  infoCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  map: {
    marginTop: "50px",
  },
};

export default ContactPage;
