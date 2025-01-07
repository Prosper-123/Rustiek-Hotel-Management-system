import React from "react";
import gallery1 from "../images/home-gallery-01.jpg"; 
import gallery2 from "../images/home-gallery-02.jpg";
import gallery3 from "../images/home-gallery-03.jpg";
import gallery4 from "../images/home-gallery-04.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];

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
