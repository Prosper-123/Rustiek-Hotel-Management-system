import React from "react";

const CTA = () => {
  return (
    <section style={styles.cta}>
      <h2 style={styles.title}>Ready to experience Rustiek?</h2>
      <button style={styles.button}>Book Now</button>
    </section>
  );
};

const styles = {
  cta: {
    backgroundColor: "#ff6347",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "#ff6347",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default CTA;
