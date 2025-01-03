import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "Fantastic stay! The staff were incredibly helpful, and the rooms were immaculate.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Loved the food and ambiance. Will definitely visit again!",
      rating: 4,
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What Our Guests Say</h2>
      <div style={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <p style={styles.review}>{testimonial.review}</p>
            <p style={styles.name}>- {testimonial.name}</p>
            <p style={styles.rating}>⭐ {testimonial.rating} / 5</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
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
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  review: {
    fontSize: "1rem",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  rating: {
    fontSize: "1rem",
    color: "#f39c12",
  },
};

export default Testimonials;
