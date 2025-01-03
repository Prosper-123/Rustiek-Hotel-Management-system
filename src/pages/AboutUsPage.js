import React from "react";

const AboutUsPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About Rustiek</h1>
        <p style={styles.heroText}>
          A timeless blend of luxury, comfort, and unforgettable memories.
        </p>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          As you envision your dream Botswana getaway, allow us to introduce Rustiek Hotel, your idyllic escape opening soon in Kasane. Nestled on the very banks of the Chobe River, our intimate 9-bedroom haven offers unparalleled access to the region’s natural wonders. Imagine waking up to the gentle murmur of the river and stepping outside your A-frame en-suite room onto a walkway that leads directly to the water’s edge. And for an unforgettable culinary adventure, our exquisite restaurant welcomes day trippers seeking a delectable taste of local cuisine amidst breathtaking river scenery. We believe our unique offerings will create an unforgettable Kasane experience. We eagerly await your bookings and look forward to welcoming you with exceptional service in the very near future.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section style={styles.missionVision}>
        <div style={styles.mission}>
          <h3 style={styles.subTitle}>Our Mission</h3>
          <p style={styles.text}>
            To be the leading provider of intimate and immersive experiences in Kasane, Botswana, where guests connect with nature’s wonder and create lasting memories.
          </p>
        </div>
        <div style={styles.vision}>
          <h3 style={styles.subTitle}>Our Vision</h3>
          <p style={styles.text}>
            To create a sanctuary on the Chobe River where guests can unwind in stylish A-frame accommodations, explore the region’s natural wonders with expert guidance, and savor delicious local cuisine in an unmatched riverside setting.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.team}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.teamCard}>
              <img
                src={member.image}
                alt={member.name}
                style={styles.teamImage}
              />
              <h4 style={styles.teamName}>{member.name}</h4>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "General Manager",
    image: "/assets/team-john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Head Chef",
    image: "/assets/team-jane.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Operations Manager",
    image: "/assets/team-michael.jpg",
  },
];

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  hero: {
    backgroundImage: 'url("/assets/about-hero.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "black",
    padding: "100px 20px",
    marginBottom: "50px",
    borderRadius: "10px",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  heroText: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    marginBottom: "40px",
  },
  about: {
    margin: "40px 0",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontWeight: "600",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    textAlign: "justify",
    margin: "0 auto",
    maxWidth: "900px",
    color: "#555",
  },
  missionVision: {
    display: "flex",
    gap: "20px",
    marginTop: "50px",
    justifyContent: "center",
  },
  mission: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  vision: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  subTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#333",
    fontWeight: "600",
  },
  team: {
    marginTop: "50px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  teamCard: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  teamCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  teamImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
    objectFit: "cover",
  },
  teamName: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
  teamRole: {
    fontSize: "1rem",
    color: "#777",
  },
};

export default AboutUsPage;
