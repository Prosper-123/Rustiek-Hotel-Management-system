import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import room4 from "../images/room4.jpg";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([
    { id: 1, name: "Deluxe Room", price: 120, image: room1 },
    { id: 2, name: "Standard Room", price: 80, image: room2 },
    { id: 3, name: "Suite", price: 200, image: room3 },
    { id: 4, name: "Family Room", price: 150, image: room4 },
    { id: 5, name: "Executive Room", price: 180, image: room1 },
  ]);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [searchData, setSearchData] = useState({
    checkInDate: "",
    checkOutDate: "",
  });

  const navigate = useNavigate();  // Initialize the navigation hook

  const handleBookingSubmit = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleRoomSearch = () => {
    const { checkInDate, checkOutDate } = searchData;
    const available = rooms.filter((room) => {
      return true; // Mockup: All rooms are available
    });
    setAvailableRooms(available);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBookingFormSubmit = (roomId, checkInDate, checkOutDate) => {
    const room = rooms.find((room) => room.id === roomId);
    const newBooking = { room, checkInDate, checkOutDate };
    handleBookingSubmit(newBooking);
    navigate("/payment");  // Redirect to PaymentPage after booking
  };

  return (
    <div style={styles.container}>
      <h1>Booking Management</h1>

      {/* Room Search Section */}
      <div style={styles.roomSearch}>
        <h2>Search for Rooms</h2>
        <div style={styles.searchInputs}>
          <input
            type="date"
            name="checkInDate"
            value={searchData.checkInDate}
            onChange={handleSearchChange}
            placeholder="Check-in Date"
            style={styles.inputField}
          />
          <input
            type="date"
            name="checkOutDate"
            value={searchData.checkOutDate}
            onChange={handleSearchChange}
            placeholder="Check-out Date"
            style={styles.inputField}
          />
        </div>
        <button onClick={handleRoomSearch} style={styles.searchButton}>
          Search Rooms
        </button>
      </div>

      {/* Room Availability Display */}
      {availableRooms.length > 0 && (
        <div style={styles.availableRooms}>
          <h2>Available Rooms</h2>
          <div style={styles.roomList}>
            {availableRooms.map((room) => (
              <div key={room.id} style={styles.roomCard}>
                <img
                  src={room.image}
                  alt={room.name}
                  style={styles.roomImage}
                />
                <div style={styles.roomDetails}>
                  <h3>{room.name}</h3>
                  <p style={styles.roomPrice}>${room.price} / night</p>
                  <button
                    onClick={() =>
                      handleBookingFormSubmit(
                        room.id,
                        searchData.checkInDate,
                        searchData.checkOutDate
                      )
                    }
                    style={styles.reserveButton}  // Change to "Reserve Now"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking List Section */}
      {bookings.length > 0 && (
        <div style={styles.bookingList}>
          <h2>Current Bookings</h2>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} style={styles.bookingItem}>
                {booking.room.name} from {booking.checkInDate} to{" "}
                {booking.checkOutDate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  roomSearch: {
    marginBottom: "40px",
    textAlign: "center",
  },
  searchInputs: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  inputField: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "150px",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1rem",
  },
  availableRooms: {
    marginTop: "20px",
  },
  roomList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-around",
  },
  roomCard: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  },
  roomImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  roomDetails: {
    padding: "15px",
    textAlign: "center",
  },
  roomPrice: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: "15px",
  },
  reserveButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",  // Green for reservation
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  bookingList: {
    marginTop: "40px",
  },
  bookingItem: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
};

export default BookingPage;
