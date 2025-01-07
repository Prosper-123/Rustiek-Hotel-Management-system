import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting booking details from location state
  const { room, checkInDate, checkOutDate } = location.state || {};
  const totalAmount = room ? room.price * (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24) : 0;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Payment Confirmation</h1>

      <div style={styles.confirmationBox}>
        <h2 style={styles.confirmationTitle}>Thank You for Your Payment!</h2>
        <p style={styles.thankYouMessage}>Your payment was successful, and your booking has been confirmed.</p>

        <div style={styles.bookingDetails}>
          <h3>Booking Details</h3>
          <p><strong>Room:</strong> {room ? room.name : "No Room Selected"}</p>
          <p><strong>Check-in Date:</strong> {checkInDate}</p>
          <p><strong>Check-out Date:</strong> {checkOutDate}</p>
          <p><strong>Total Price:</strong> ${totalAmount}</p>
        </div>
      </div>

      <div style={styles.footer}>
        <button onClick={() => navigate("/")} style={styles.homeButton}>Go to Home</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "30px",
  },
  confirmationBox: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  confirmationTitle: {
    fontSize: "2rem",
    color: "#28a745",  // Green for success
    marginBottom: "20px",
  },
  thankYouMessage: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "20px",
  },
  bookingDetails: {
    fontSize: "1.1rem",
    color: "#333",
    marginTop: "20px",
  },
  footer: {
    marginTop: "30px",
  },
  homeButton: {
    padding: "12px 20px",
    backgroundColor: "#007bff",  
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s",
  },
};

export default PaymentConfirmationPage;
