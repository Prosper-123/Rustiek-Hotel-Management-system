import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import RoomSearch from "../components/RoomSearch";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const handleBookingSubmit = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleRoomSearch = (searchData) => {
    console.log("Searching for rooms:", searchData);
    // Implement room availability check logic here
  };

  return (
    <div>
      <h1>Booking Management</h1>
      <RoomSearch onSearch={handleRoomSearch} />
      <BookingForm onBookingSubmit={handleBookingSubmit} />
      <BookingList bookings={bookings} />
    </div>
  );
};

export default BookingPage;
