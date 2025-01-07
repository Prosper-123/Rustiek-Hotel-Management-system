import React from "react";
import galleryBackground from "../images/galleryBackground.png";
import room1 from "../images/room1.jpg";
import fineDining from "../images/fineDining.jpg";
import roofTop from "../images/roofTop.jpg";
import gardenView from "../images/gardenView.jpg";
import elegant from "../images/elegant.jpg";
import conference from "../images/conference.jpg";
import privateDining from "../images/privateDining.jpg";
import lobby from "../images/lobby.jpg";
import spa from "../images/spa.jpg";

const GalleryPage = () => {
  const galleryImages = [
    { src: room1, alt: "Room 1" },
    { src: fineDining, alt: "Fine Dining" },
    { src: roofTop, alt: "Rooftop Lounge" },
    { src: elegant, alt: "Elegant Suite" },
    { src: gardenView, alt: "Garden View" },
    { src: conference, alt: "Conference Room" },
    { src: spa, alt: "Spa and Wellness" },
    { src: lobby, alt: "Lobby Lounge" },
    { src: privateDining, alt: "Private Dining" },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Gallery</h1>
        <p style={styles.heroText}>
          Explore the elegance and luxury of Rustiek through our curated gallery.
        </p>
      </section>

      {/* Gallery Description Section */}
      <section style={styles.description}>
        <p style={styles.descriptionText}>
          At <strong>Rustiek</strong>, every detail is designed to create an unforgettable experience. 
          Our gallery showcases the perfect blend of comfort, luxury, and elegance, from our beautifully 
          decorated rooms to our exquisite dining areas and serene spa retreats. Whether you're here 
          for relaxation, fine dining, or a corporate event, our spaces are crafted to exceed your expectations. 
          Take a visual tour and immerse yourself in the ambiance of Rustiek.
        </p>
      </section>

      {/* Gallery Grid */}
      <div style={styles.grid}>
        {galleryImages.map((image, index) => (
          <div key={index} style={styles.card}>
            <img src={image.src} alt={image.alt} style={styles.image} />
            <div style={styles.overlay}>
              <p style={styles.text}>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Text Section */}
      <section style={styles.closingText}>
        <p style={styles.closingTextContent}>
          The images above offer just a glimpse into the beauty and sophistication that await you at 
          <strong> Rustiek</strong>. But nothing compares to experiencing it in person. 
          From the warm hospitality to the refined ambiance, every moment at Rustiek is designed to 
          leave a lasting impression. We invite you to visit us and indulge in the ultimate comfort, 
          style, and relaxation. 
        </p>
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
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  // Hero Section Styles
  hero: {
    backgroundImage: `url(${galleryBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "black",
    padding: "120px 20px",
    marginBottom: "30px",
    boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  heroText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontStyle: "italic",
    maxWidth: "800px",
    margin: "0 auto",
  },
  // Gallery Description Styles
  description: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    color: "#333",
    fontSize: "1.2rem",
    lineHeight: "1.8",
  },
  descriptionText: {
    fontSize: "1.2rem",
    color: "#555",
  },
  // Gallery Grid Styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "250px", // Uniform image height
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensuring the images fill the space evenly
    display: "block",
    transition: "transform 0.3s ease",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transition: "opacity 0.3s ease",
  },
  text: {
    color: "white",
    fontSize: "1.6rem",
    fontWeight: "bold",
    textShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
  },
  cardHoverOverlay: {
    opacity: "1",
  },
  // Closing Text Styles
  closingText: {
    maxWidth: "900px",
    margin: "50px auto 20px auto",
    padding: "20px",
    textAlign: "center",
    color: "#333",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    borderTop: "2px solid #ddd",
    paddingTop: "20px",
  },
  closingTextContent: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default GalleryPage;
