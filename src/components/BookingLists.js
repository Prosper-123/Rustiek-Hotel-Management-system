import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div style={styles.listContainer}>
      <h2>Booking List</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul style={styles.list}>
          {bookings.map((booking, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{booking.name}</strong> ({booking.email}) -{" "}
              {booking.roomType} from {booking.checkInDate} to{" "}
              {booking.checkOutDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  listContainer: {
    padding: "20px",
    maxWidth: "600px",
    margin: "20px auto",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
};

export default BookingList;
