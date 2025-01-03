import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API call here
    alert("Registration Successful!");
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create an Account</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.linkText}>
        Already have an account? <a href="/login" style={styles.link}>Login here</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "480px",
    margin: "50px auto",
    padding: "25px",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(135deg, #f3f4f8, #ffffff)",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "25px",
    color: "#333",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 8px rgba(0, 123, 255, 0.3)",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  linkText: {
    marginTop: "30px",
    fontSize: "1rem",
    color: "#666",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default RegisterPage;
