import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    switch (role) {
      case "user":
        navigate("/user/dashboard");
        break;
      case "bar":
        navigate("/bar/dashboard");
        break;
      case "restaurant":
        navigate("/restaurant/dashboard");
        break;
      case "admin":
        navigate("/admin/dashboard");
        break;
      default:
        console.error("Invalid role");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <p style={styles.subtitle}>Select your role to proceed:</p>
      <div style={styles.roles}>
        <div style={styles.roleCard} onClick={() => handleLogin("user")}>
          <h2 style={styles.roleTitle}>User</h2>
          <p style={styles.roleDescription}>Access your account and bookings.</p>
        </div>
        <div style={styles.roleCard} onClick={() => handleLogin("bar")}>
          <h2 style={styles.roleTitle}>Bar</h2>
          <p style={styles.roleDescription}>Manage bar orders and inventory.</p>
        </div>
        <div style={styles.roleCard} onClick={() => handleLogin("restaurant")}>
          <h2 style={styles.roleTitle}>Restaurant</h2>
          <p style={styles.roleDescription}>Handle reservations and orders.</p>
        </div>
        <div style={styles.roleCard} onClick={() => handleLogin("admin")}>
          <h2 style={styles.roleTitle}>Admin</h2>
          <p style={styles.roleDescription}>Oversee all operations and reports.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "50px" },
  title: { fontSize: "2.5rem", marginBottom: "20px" },
  subtitle: { fontSize: "1.2rem", marginBottom: "40px" },
  roles: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
  roleCard: {
    width: "200px",
    height: "150px",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  },
  roleCardHover: { transform: "scale(1.05)", backgroundColor: "#0056b3" },
  roleTitle: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" },
  roleDescription: { fontSize: "1rem" },
};

export default LoginPage;
