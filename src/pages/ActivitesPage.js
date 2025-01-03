import React from "react";

const ActivitiesPage = () => {
  const activities = [
    {
      id: 1,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our luxury spa treatments.",
      image: "/assets/spa.jpg",
      details: "Open daily from 9 AM to 8 PM.",
    },
    {
      id: 2,
      name: "Guided Tours",
      description:
        "Explore the local attractions with our professional guides.",
      image: "/assets/tour.jpg",
      details: "Available upon request. Book your tour today!",
    },
    {
      id: 3,
      name: "Swimming Pool",
      description: "Enjoy our heated outdoor pool with scenic views.",
      image: "/assets/pool.jpg",
      details: "Open daily from 7 AM to 10 PM.",
    },
    {
      id: 4,
      name: "Fitness Center",
      description:
        "Stay active during your stay with our state-of-the-art gym facilities.",
      image: "/assets/fitness.jpg",
      details: "Open 24/7 for all hotel guests.",
    },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Explore Activities at Rustiek</h1>
        <p style={styles.heroText}>
          Discover exciting ways to make your stay unforgettable.
        </p>
      </section>

      <section style={styles.activities}>
        <h2 style={styles.sectionTitle}>Available Activities</h2>
        <div style={styles.activitiesGrid}>
          {activities.map((activity) => (
            <div key={activity.id} style={styles.card}>
              <img
                src={activity.image}
                alt={activity.name}
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{activity.name}</h3>
                <p style={styles.cardDescription}>{activity.description}</p>
                <p style={styles.cardDetails}>{activity.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
  },
  hero: {
    backgroundImage: 'url("/assets/activities-hero.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "black",
    padding: "100px 20px",
    marginBottom: "40px",
    borderRadius: "10px",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "15px",
    textTransform: "uppercase",
  },
  heroText: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    marginBottom: "40px",
  },
  activities: {
    margin: "40px 0",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontWeight: "600",
  },
  activitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardContent: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  cardDescription: {
    fontSize: "1.1rem",
    color: "#777",
    marginBottom: "15px",
  },
  cardDetails: {
    fontSize: "0.95rem",
    color: "#444",
    fontStyle: "italic",
  },
};

export default ActivitiesPage;
