import React from "react";

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <a href="/" style={styles.logoText}>
          Rustiek
        </a>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/rooms" style={styles.navLink}>
           Rooms
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/bar" style={styles.navLink}>
           Bar
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/restaurant" style={styles.navLink}>
           Restaurant
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/gallery" style={styles.navLink}>
            Gallery
          </a>
        </li>
        < li style={styles.navItem}>
          <a href="/Activities" style={styles.navLink}>
            Activities
          </a>
          </li>
          <li style={styles.navItem}>
            <a href="About-us" style={styles.navLink}>
              About Us
            </a>
            </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>
            Contact
          </a>
          </li>
          <li style={styles.navItem}>
          <a href="/register" style={{ ...styles.navLink, ...styles.buttonPrimary }}>
            Register
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/login" style={{ ...styles.navLink, ...styles.button }}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  logoText: {
    color: "white",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  button: {
    backgroundColor: "#444",
    color: "white",
    border: "1px solid #777",
    padding: "8px 16px",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  },
  buttonPrimary: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  },
};

export default Nav;
