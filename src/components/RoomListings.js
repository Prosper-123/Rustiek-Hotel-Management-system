import React from "react";
import homeGallery02 from "../images/home-gallery-02.jpg"; 
import homeGallery04 from "../images/home-gallery-04.jpg";

const RoomsList = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: 150,
      image: homeGallery02, 
      features: ["King Bed", "Free WiFi", "Sea View"],
    },
    {
      id: 2,
      name: "Family Room",
      price: 200,
      image: homeGallery04,
      features: ["2 Queen Beds", "Balcony", "Kitchenette"],
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Rooms</h2>
      <div style={styles.grid}>
        {rooms.map((room) => (
          <div key={room.id} style={styles.card}>
            <img src={room.image} alt={room.name} style={styles.image} />
            <h3 style={styles.roomName}>{room.name}</h3>
            <p style={styles.price}>${room.price} / night</p>
            <ul>
              {room.features.map((feature, index) => (
                <li key={index} style={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <button style={styles.button}>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  roomName: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  price: {
    color: "#ff6347",
    fontWeight: "bold",
  },
  feature: {
    textAlign: "left",
    padding: "5px 10px",
  },
  button: {
    margin: "10px 0",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RoomsList;
