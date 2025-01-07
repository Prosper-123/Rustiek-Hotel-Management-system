import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div>
      <h2>Current Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet!</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.room.name} - {booking.checkInDate} to {booking.checkOutDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
