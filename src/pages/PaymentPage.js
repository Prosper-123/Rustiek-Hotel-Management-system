import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting booking details from location state
  const { room, checkInDate, checkOutDate } = location.state || {};
  const totalAmount = room ? room.price * (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24) : 0;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    // Redirect to confirmation page or home after payment
    navigate("/confirmation");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Complete Your Payment</h1>

      <div style={styles.bookingSummary}>
        <h2 style={styles.bookingTitle}>Booking Summary</h2>
        <div style={styles.summaryDetails}>
          <p><strong>Room:</strong> {room ? room.name : "No Room Selected"}</p>
          <p><strong>Check-in Date:</strong> {checkInDate}</p>
          <p><strong>Check-out Date:</strong> {checkOutDate}</p>
          <p><strong>Total Price:</strong> ${totalAmount}</p>
        </div>
      </div>

      <form onSubmit={handlePaymentSubmit} style={styles.paymentForm}>
        <h2>Payment Details</h2>

        <div style={styles.inputGroup}>
          <label htmlFor="cardName" style={styles.label}>Cardholder's Name</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="John Doe"
            style={styles.inputField}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="cardNumber" style={styles.label}>Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            style={styles.inputField}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="expiryDate" style={styles.label}>Expiry Date</label>
          <input
            type="month"
            id="expiryDate"
            name="expiryDate"
            style={styles.inputField}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="cvv" style={styles.label}>CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            style={styles.inputField}
            required
          />
        </div>

        <button type="submit" style={styles.paymentButton}>Pay Now</button>
      </form>

      <div style={styles.footer}>
        <p>Secure payment processing powered by Stripe.</p>
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
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "30px",
  },
  bookingSummary: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  bookingTitle: {
    fontSize: "1.5rem",
    color: "#007bff",
    marginBottom: "15px",
  },
  summaryDetails: {
    fontSize: "1.1rem",
    color: "#333",
  },
  paymentForm: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    color: "#555",
    marginBottom: "8px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  paymentButton: {
    padding: "12px 20px",
    backgroundColor: "#28a745",  // Green button
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s",
    width: "100%",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#777",
    marginTop: "40px",
  },
};

export default PaymentPage;
