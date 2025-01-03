import React from "react";

const Dining = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Fine Dining & Bar</h2>
      <p style={styles.text}>
        Enjoy exquisite dishes and handcrafted cocktails in our restaurant and bar.
      </p>
      <button style={styles.button}>View Menu</button>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dining;
