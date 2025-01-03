import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div>
        <h1 style={styles.heroTitle}>Welcome to Rustiek</h1>
        <p style={styles.heroText}>Experience luxury, comfort, and fine dining.</p>
        <button
          style={styles.heroButton}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("rooms")?.offsetTop || 0,
              behavior: "smooth",
            })
          }
        >
          Book Your Stay
        </button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: 'url("./assets/background.png")', 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", 
    color: "black", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  heroTitle: {
    fontSize: "4rem",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Adds readability
  },
  heroText: {
    fontSize: "1.8rem",
    marginBottom: "30px",
    textShadow: "1px 1px 6px rgba(0, 0, 0, 0.7)", // Adds readability
  },
  heroButton: {
    padding: "15px 30px",
    backgroundColor: "#ff6347",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s",
  },
};

export default Hero;
