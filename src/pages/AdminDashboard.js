import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy Data for CRUD operations
  const [bookings, setBookings] = useState([
    { id: 1, user: "John Doe", room: "Deluxe Room", checkIn: "2025-01-10", checkOut: "2025-01-15", status: "Confirmed" },
    { id: 2, user: "Jane Smith", room: "Suite", checkIn: "2025-02-01", checkOut: "2025-02-05", status: "Pending" },
    { id: 3, user: "Michael Brown", room: "Standard Room", checkIn: "2025-01-20", checkOut: "2025-01-22", status: "Cancelled" },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, bookingId: 1, amount: 500, status: "Paid" },
    { id: 2, bookingId: 2, amount: 350, status: "Pending" },
  ]);

  const [restaurantOrders, setRestaurantOrders] = useState([
    { id: 1, customer: "John Doe", order: "Grilled Salmon", status: "Pending", time: "2025-01-10 12:30 PM" },
    { id: 2, customer: "Jane Smith", order: "Pasta Carbonara", status: "Completed", time: "2025-01-09 7:45 PM" },
    { id: 3, customer: "Michael Brown", order: "Caesar Salad", status: "Pending", time: "2025-01-10 2:15 PM" },
    { id: 4, customer: "Emma White", order: "Steak and Fries", status: "Completed", time: "2025-01-09 8:30 PM" },
  ]);

  const [barOrders, setBarOrders] = useState([
    { id: 1, customer: "Michael Brown", drink: "Mojito", status: "Pending", time: "2025-01-10 12:45 PM" },
    { id: 2, customer: "John Doe", drink: "Martini", status: "Completed", time: "2025-01-09 9:00 PM" },
    { id: 3, customer: "Jane Smith", drink: "Whiskey Sour", status: "Pending", time: "2025-01-10 1:00 PM" },
  ]);

  const [guests, setGuests] = useState([
    { name: "John Doe", room: "Deluxe Room", checkIn: "2025-01-10", checkOut: "2025-01-15" },
    { name: "Jane Smith", room: "Suite", checkIn: "2025-02-01", checkOut: "2025-02-05" },
    { name: "Michael Brown", room: "Standard Room", checkIn: "2025-01-20", checkOut: "2025-01-22" },
  ]);

  // Summary Calculations
  const confirmedBookings = bookings.filter((booking) => booking.status === "Confirmed").length;
  const pendingBookings = bookings.filter((booking) => booking.status === "Pending").length;
  const canceledBookings = bookings.filter((booking) => booking.status === "Cancelled").length;

  const completedRestaurantOrders = restaurantOrders.filter((order) => order.status === "Completed").length;
  const pendingRestaurantOrders = restaurantOrders.filter((order) => order.status === "Pending").length;

  const completedBarOrders = barOrders.filter((order) => order.status === "Completed").length;
  const pendingBarOrders = barOrders.filter((order) => order.status === "Pending").length;

  const totalRevenue = payments.reduce((total, payment) => total + (payment.status === "Paid" ? payment.amount : 0), 0);
  const pendingPayments = payments.filter((payment) => payment.status === "Pending").length;
  const paidPayments = payments.filter((payment) => payment.status === "Paid").length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleDeletePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  const handleDeleteRestaurantOrder = (id) => {
    setRestaurantOrders(restaurantOrders.filter((order) => order.id !== id));
  };

  const handleDeleteBarOrder = (id) => {
    setBarOrders(barOrders.filter((order) => order.id !== id));
  };

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.logo}>Admin Dashboard</h2>
        <ul style={styles.navList}>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "overview" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("overview")}
          >
            <i className="fas fa-tachometer-alt" style={styles.icon}></i> Dashboard
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "bookings" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("bookings")}
          >
            <i className="fas fa-calendar-check" style={styles.icon}></i> Bookings
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "restaurant" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("restaurant")}
          >
            <i className="fas fa-utensils" style={styles.icon}></i> Restaurant Orders
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "bar" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("bar")}
          >
            <i className="fas fa-cocktail" style={styles.icon}></i> Bar Orders
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "payments" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("payments")}
          >
            <i className="fas fa-credit-card" style={styles.icon}></i> Payments
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={styles.content}>
        {activeTab === "overview" && (
          <div style={styles.overview}>
            <h1>Hotel Operations Overview</h1>
            <div style={styles.grid}>
              {/* Bookings Overview */}
              <div style={styles.card}>
                <h3>Bookings Overview</h3>
                <p>Total Bookings: {bookings.length}</p>
                <p>Confirmed: {confirmedBookings}</p>
                <p>Pending: {pendingBookings}</p>
                <p>Cancelled: {canceledBookings}</p>
              </div>

              {/* Restaurant Orders Overview */}
              <div style={styles.card}>
                <h3>Restaurant Orders</h3>
                <p>Total Orders: {restaurantOrders.length}</p>
                <p>Completed: {completedRestaurantOrders}</p>
                <p>Pending: {pendingRestaurantOrders}</p>
              </div>

              {/* Bar Orders Overview */}
              <div style={styles.card}>
                <h3>Bar Orders</h3>
                <p>Total Orders: {barOrders.length}</p>
                <p>Completed: {completedBarOrders}</p>
                <p>Pending: {pendingBarOrders}</p>
              </div>

              {/* Payments Overview */}
              <div style={styles.card}>
                <h3>Payments Overview</h3>
                <p>Total Revenue: ${totalRevenue}</p>
                <p>Paid: {paidPayments}</p>
                <p>Pending: {pendingPayments}</p>
              </div>

              {/* Guests Overview */}
              <div style={styles.card}>
                <h3>Guests Overview</h3>
                <p>Total Guests: {guests.length}</p>
                {guests.map((guest, index) => (
                  <div key={index} style={styles.guestInfo}>
                    <p>{guest.name}</p>
                    <p>Room: {guest.room}</p>
                    <p>Check-in: {guest.checkIn} | Check-out: {guest.checkOut}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div style={styles.ordersSection}>
            <h2>Bookings</h2>
            <div style={styles.grid}>
              {bookings.map((booking) => (
                <div key={booking.id} style={styles.orderCard}>
                  <h3>{booking.user}</h3>
                  <p>Room: {booking.room}</p>
                  <p>Status: <strong>{booking.status}</strong></p>
                  <p>Check-in: {booking.checkIn} | Check-out: {booking.checkOut}</p>
                  <button onClick={() => handleDeleteBooking(booking.id)} style={styles.deleteButton}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Restaurant Orders Tab */}
        {activeTab === "restaurant" && (
          <div style={styles.ordersSection}>
            <h2>Restaurant Orders</h2>
            <div style={styles.grid}>
              {restaurantOrders.map((order) => (
                <div key={order.id} style={styles.orderCard}>
                  <h3>{order.customer}</h3>
                  <p>Order: {order.order}</p>
                  <p>Status: <strong>{order.status}</strong></p>
                  <p>Time: {order.time}</p>
                  <button onClick={() => handleDeleteRestaurantOrder(order.id)} style={styles.deleteButton}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bar Orders Tab */}
        {activeTab === "bar" && (
          <div style={styles.ordersSection}>
            <h2>Bar Orders</h2>
            <div style={styles.grid}>
              {barOrders.map((order) => (
                <div key={order.id} style={styles.orderCard}>
                  <h3>{order.customer}</h3>
                  <p>Drink: {order.drink}</p>
                  <p>Status: <strong>{order.status}</strong></p>
                  <p>Time: {order.time}</p>
                  <button onClick={() => handleDeleteBarOrder(order.id)} style={styles.deleteButton}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <div style={styles.ordersSection}>
            <h2>Payments</h2>
            <div style={styles.grid}>
              {payments.map((payment) => (
                <div key={payment.id} style={styles.orderCard}>
                  <h3>Booking ID: {payment.bookingId}</h3>
                  <p>Amount: ${payment.amount}</p>
                  <p>Status: <strong>{payment.status}</strong></p>
                  <button onClick={() => handleDeletePayment(payment.id)} style={styles.deleteButton}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#222",
    color: "white",
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "30px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    padding: "15px 20px",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  activeNavItem: {
    backgroundColor: "#444",
  },
  icon: {
    marginRight: "10px",
  },
  content: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: "30px",
  },
  overview: {
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
  ordersSection: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  orderCard: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  guestInfo: {
    marginBottom: "15px",
  },
};

export default AdminDashboard;
