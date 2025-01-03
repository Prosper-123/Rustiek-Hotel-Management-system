import React from "react";

const Gallery = () => {
  const images = [
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Photo Gallery</h2>
      <div style={styles.grid}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} style={styles.image} />
        ))}
      </div>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default Gallery;
