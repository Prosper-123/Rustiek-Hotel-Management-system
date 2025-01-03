import React from "react";

const Amenities = () => {
  const amenities = ["Free WiFi", "Swimming Pool", "Spa", "Gym", "Parking"];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Amenities</h2>
      <ul style={styles.list}>
        {amenities.map((amenity, index) => (
          <li key={index} style={styles.item}>
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    listStyle: "none",
  },
  item: {
    padding: "10px 20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Amenities;
