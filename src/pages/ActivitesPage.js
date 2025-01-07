import React from "react";
import swimming from "../images/swimming.jpg";
import spa from "../images/spa.jpg";
import safari from "../images/safari.jpg";
import homegallery from "../images/home-gallery-04.jpg";

const ActivitiesPage = () => {
  const handleBooking = (activityName) => {
    alert(`Booking for ${activityName} is coming soon!`);
    // You can replace this with actual booking logic, e.g., opening a booking form
  };

  const activities = [
    {
      id: 1,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our luxury spa treatments.",
      image: spa,
      details: "Open daily from 9 AM to 8 PM.",
    },
    {
      id: 2,
      name: "Guided Tours",
      description: "Explore the local attractions with our professional guides.",
      image: safari,
      details: "Available upon request. Book your tour today!",
    },
    {
      id: 3,
      name: "Swimming Pool",
      description: "Enjoy our heated outdoor pool with scenic views.",
      image: swimming,
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
    {
      id: 5,
      name: "Fine Dining",
      description: "Experience world-class cuisine prepared by top chefs.",
      image: "/assets/dining.jpg",
      details: "Open daily from 6 PM to 11 PM. Reservations recommended.",
    },
    {
      id: 6,
      name: "Private Beach Access",
      description:
        "Enjoy a serene private beach experience with exclusive services.",
      image: "/assets/beach.jpg",
      details: "Open daily from sunrise to sunset.",
    },
    {
      id: 7,
      name: "Live Entertainment",
      description:
        "Enjoy live music, cultural performances, and themed nights.",
      image: "/assets/entertainment.jpg",
      details: "Available on select evenings. Check schedule at reception.",
    },
    {
      id: 8,
      name: "Wine & Cocktail Tasting",
      description:
        "Indulge in a curated selection of fine wines and signature cocktails.",
      image: "/assets/wine.jpg",
      details: "Tasting sessions available every weekend.",
    },
    {
      id: 9,
      name: "Outdoor Adventure",
      description:
        "From hiking to cycling, explore the great outdoors with guided experiences.",
      image: "/assets/adventure.jpg",
      details: "Guided tours available upon request.",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Explore Activities at Rustiek</h1>
        <p style={styles.heroText}>
          Discover exciting ways to make your stay unforgettable.
        </p>
      </section>

      {/* Activities Section */}
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
                <button
                  style={styles.bookButton}
                  onClick={() => handleBooking(activity.name)}
                >
                  Book Now
                </button>
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
    backgroundImage: `url(${homegallery})`,
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
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
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
  bookButton: {
    marginTop: "10px",
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  bookButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ActivitiesPage;
