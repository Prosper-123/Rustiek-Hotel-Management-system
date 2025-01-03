import React from "react";

const GalleryPage = () => {
  const galleryImages = [
    { src: "/assets/gallery1.jpg", alt: "Luxurious Suite" },
    { src: "/assets/gallery2.jpg", alt: "Fine Dining Restaurant" },
    { src: "/assets/gallery3.jpg", alt: "Rooftop Pool" },
    { src: "/assets/gallery4.jpg", alt: "Elegant Bar Area" },
    { src: "/assets/gallery5.jpg", alt: "Garden View" },
    { src: "/assets/gallery6.jpg", alt: "Conference Hall" },
    { src: "/assets/gallery7.jpg", alt: "Spa and Wellness Center" },
    { src: "/assets/gallery8.jpg", alt: "Lobby Lounge" },
    { src: "/assets/gallery9.jpg", alt: "Private Dining Room" },
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
    backgroundImage: 'url("/assets/gallery-hero.jpg")',
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
  // Gallery Grid Styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    width: "100%",
    height: "auto",
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
};

export default GalleryPage;
