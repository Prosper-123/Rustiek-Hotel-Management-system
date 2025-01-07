import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Stay 3 Nights, Pay for 2",
      description: "Book now and enjoy one free night with a three-night stay.",
      image: "/assets/special-offer-1.jpg",
    },
    {
      id: 2,
      title: "Romantic Getaway",
      description: "A special package for couples including a candlelight dinner.",
      image: "/assets/special-offer-2.jpg",
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Special Offers</h2>
      <div style={styles.grid}>
        {offers.map((offer) => (
          <div key={offer.id} style={styles.card}>
            <img src={offer.image} alt={offer.title} style={styles.image} />
            <h3 style={styles.title}>{offer.title}</h3>
            <p style={styles.description}>{offer.description}</p>
            <button style={styles.button}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f4f4f4", // Keeping section light
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    borderRadius: "10px",
    backgroundColor: "#007bff", // Changed to blue
    color: "white", // White text for contrast
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "20px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0", // Keeps the image rounded only on top
  },
  title: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ffcc00", // Yellow for contrast
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SpecialOffers;
