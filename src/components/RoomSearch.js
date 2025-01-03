import React, { useState } from "react";

const RoomSearch = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    occupancy: 1,
    promoCode: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        name="destination"
        value={searchData.destination}
        onChange={handleChange}
        required
        placeholder="Destination"
        style={styles.input}
      />
      <input
        type="date"
        name="checkInDate"
        value={searchData.checkInDate}
        onChange={handleChange}
        required
        placeholder="Check-in"
        style={styles.input}
      />
      <input
        type="date"
        name="checkOutDate"
        value={searchData.checkOutDate}
        onChange={handleChange}
        required
        placeholder="Check-out"
        style={styles.input}
      />
      <input
        type="number"
        name="occupancy"
        value={searchData.occupancy}
        onChange={handleChange}
        required
        min="1"
        placeholder="Occupancy"
        style={styles.input}
      />
      <input
        type="text"
        name="promoCode"
        value={searchData.promoCode}
        onChange={handleChange}
        placeholder="Promo Code"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    margin: "20px auto",
    maxWidth: "1000px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  input: {
    flex: "1",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    minWidth: "150px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default RoomSearch;
