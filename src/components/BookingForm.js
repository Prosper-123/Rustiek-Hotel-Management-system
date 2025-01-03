import React, { useState } from "react";

const BookingForm = ({ onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
    setFormData({
      name: "",
      email: "",
      checkInDate: "",
      checkOutDate: "",
      roomType: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Book a Room</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="date"
        name="checkInDate"
        value={formData.checkInDate}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="date"
        name="checkOutDate"
        value={formData.checkOutDate}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <select
        name="roomType"
        value={formData.roomType}
        onChange={handleChange}
        required
        style={styles.select}
      >
        <option value="">Select Room Type</option>
        <option value="luxury-suite">Luxury Suite</option>
        <option value="deluxe-room">Deluxe Room</option>
        <option value="standard-room">Standard Room</option>
      </select>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "20px auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BookingForm;
