import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import room4 from "../images/room4.jpg";

const RoomsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Deluxe Room",
      price: 120,
      image: room1,
      description: "A luxurious room with a king-sized bed and city view.",
    },
    {
      id: 2,
      name: "Standard Room",
      price: 80,
      image: room2,
      description: "A comfortable room with all the basic amenities.",
    },
    {
      id: 3,
      name: "Suite",
      price: 200,
      image: room3,
      description: "A spacious suite with a separate living area and balcony.",
    },
    {
      id: 4,
      name: "Family Room",
      price: 150,
      image: room4,
      description: "A large room with two queen-sized beds, perfect for families.",
    },
    {
      id: 5,
      name: "Executive Room",
      price: 180,
      image: room1,
      description: "An upscale room with a work desk and premium amenities.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    roomId: null,
    checkInDate: "",
    checkOutDate: "",
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Updated handleBookNow to accept roomId
  const handleBookNow = (roomId) => {
    // Set roomId in booking details if not already set
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      roomId,
    }));
    navigate("/booking"); // Use navigate to go to booking page
  };

  const handleBookingSubmit = (room) => {
    if (!bookingDetails.checkInDate || !bookingDetails.checkOutDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    alert(`Booking confirmed for ${room.name} from ${bookingDetails.checkInDate} to ${bookingDetails.checkOutDate}.`);
    setBookingDetails({ roomId: null, checkInDate: "", checkOutDate: "" });
  };

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Our Rooms</h1>
        <p style={styles.heroText}>Find the perfect stay for your comfort.</p>
      </section>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search rooms..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
      </div>

      {/* Room Listings */}
      <div style={styles.roomList}>
        {filteredRooms.map((room) => (
          <div key={room.id} style={styles.roomCard}>
            <img src={room.image} alt={room.name} style={styles.roomImage} />
            <div style={styles.roomDetails}>
              <h3 style={styles.roomName}>{room.name}</h3>
              <p style={styles.roomDescription}>{room.description}</p>
              <p style={styles.roomPrice}>${room.price} / night</p>
              <button
                onClick={() => handleBookNow(room.id)} // Pass room id to handleBookNow
                style={styles.bookButton}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
        {filteredRooms.length === 0 && (
          <p style={styles.noResults}>No rooms match your search.</p>
        )}
      </div>

      {/* Booking Form */}
      {bookingDetails.roomId && (
        <div style={styles.bookingForm}>
          <h2>Book {rooms.find((room) => room.id === bookingDetails.roomId).name}</h2>
          <div style={styles.datePicker}>
            <label htmlFor="checkInDate">Check-in Date</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={bookingDetails.checkInDate}
              onChange={handleBookingChange}
              style={styles.inputField}
            />
          </div>
          <div style={styles.datePicker}>
            <label htmlFor="checkOutDate">Check-out Date</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={bookingDetails.checkOutDate}
              onChange={handleBookingChange}
              style={styles.inputField}
            />
          </div>
          <button
            onClick={() => handleBookingSubmit(rooms.find((room) => room.id === bookingDetails.roomId))}
            style={styles.bookButton}
          >
            Confirm Booking
          </button>
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
  hero: {
    backgroundImage: `url(${room1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "black",
    padding: "120px 20px",
    marginBottom: "30px",
    boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "10px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  heroText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  searchBar: {
    margin: "30px 0",
    textAlign: "center",
  },
  searchInput: {
    padding: "12px",
    width: "50%",
    fontSize: "1.1rem",
    border: "2px solid #007bff",
    borderRadius: "30px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  roomList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  roomCard: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  roomImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "15px 15px 0 0",
  },
  roomDetails: {
    padding: "20px",
  },
  roomName: {
    fontSize: "1.8rem",
    marginBottom: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#333",
  },
  roomDescription: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "12px",
  },
  roomPrice: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#ff6347",
  },
  bookButton: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#777",
  },
  bookingForm: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  datePicker: {
    marginBottom: "20px",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
};

export default RoomsPage;
