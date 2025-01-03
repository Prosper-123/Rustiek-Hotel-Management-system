import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Rustiek Hotel. All rights reserved.</p>
      <ul style={styles.footerLinks}>
        <li>
          <a href="/privacy-policy" style={styles.footerLink}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms-of-service" style={styles.footerLink}>
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/contact" style={styles.footerLink}>
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  footerLinks: {
    listStyleType: "none",
    margin: "10px 0 0 0",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  footerLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};

export default Footer;
