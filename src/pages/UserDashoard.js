import React, { useState } from "react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Dummy data
  const bookings = [
    {
      id: 1,
      room: "Deluxe Room",
      checkIn: "2025-01-10",
      checkOut: "2025-01-15",
      status: "Confirmed",
    },
    {
      id: 2,
      room: "Suite",
      checkIn: "2025-02-01",
      checkOut: "2025-02-05",
      status: "Pending",
    },
    {
      id: 3,
      room: "Standard Room",
      checkIn: "2025-01-20",
      checkOut: "2025-01-22",
      status: "Cancelled",
    },
  ];

  const payments = [
    { id: 1, date: "2025-01-05", amount: "$500", status: "Completed" },
    { id: 2, date: "2025-01-12", amount: "$300", status: "Pending" },
    { id: 3, date: "2025-01-18", amount: "$120", status: "Failed" },
  ];

  const notifications = [
    {
      id: 1,
      message: "Your booking for Deluxe Room is confirmed.",
      date: "2025-01-05",
    },
    {
      id: 2,
      message: "Your payment of $300 is pending.",
      date: "2025-01-12",
    },
    {
      id: 3,
      message: "Your booking for Standard Room was cancelled.",
      date: "2025-01-15",
    },
  ];

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "1234 Elm Street, Springfield, IL",
  };

  const settings = [
    { id: 1, setting: "Email Notifications", status: "Enabled" },
    { id: 2, setting: "SMS Notifications", status: "Disabled" },
    { id: 3, setting: "Dark Mode", status: "Enabled" },
  ];

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.logo}>User Dashboard</h2>
        <ul style={styles.navList}>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "overview" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("overview")}
          >
            <i className="fas fa-home" style={styles.icon}></i> Overview
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "bookings" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("bookings")}
          >
            <i className="fas fa-calendar-check" style={styles.icon}></i> My Bookings
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "payments" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("payments")}
          >
            <i className="fas fa-wallet" style={styles.icon}></i> Payments
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "notifications" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("notifications")}
          >
            <i className="fas fa-bell" style={styles.icon}></i> Notifications
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "profile" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("profile")}
          >
            <i className="fas fa-user" style={styles.icon}></i> Profile
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "settings" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("settings")}
          >
            <i className="fas fa-cog" style={styles.icon}></i> Settings
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={styles.content}>
        {activeTab === "overview" && (
          <div>
            <h1>Welcome back, {userProfile.name}!</h1>
            <p>Here's an overview of your account.</p>
            <div style={styles.card}>
              <h2>Upcoming Bookings</h2>
              <ul style={styles.list}>
                {bookings.map((booking) => (
                  <li key={booking.id} style={styles.listItem}>
                    <strong>{booking.room}</strong> from {booking.checkIn} to {booking.checkOut}
                    <br />
                    Status: <span style={styles.bookingStatus}>{booking.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div>
            <h1>Your Bookings</h1>
            <ul style={styles.list}>
              {bookings.map((booking) => (
                <li key={booking.id} style={styles.listItem}>
                  <strong>{booking.room}</strong> from {booking.checkIn} to {booking.checkOut}
                  <br />
                  Status: <span style={styles.bookingStatus}>{booking.status}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "payments" && (
          <div>
            <h1>Your Payments</h1>
            <ul style={styles.list}>
              {payments.map((payment) => (
                <li key={payment.id} style={styles.listItem}>
                  <strong>{payment.date}</strong>: {payment.amount} -{" "}
                  <span style={styles.paymentStatus(payment.status)}>{payment.status}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h1>Notifications</h1>
            <ul style={styles.list}>
              {notifications.map((notification) => (
                <li key={notification.id} style={styles.listItem}>
                  <strong>{notification.message}</strong>
                  <br />
                  <small>{notification.date}</small>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h1>Your Profile</h1>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Phone: {userProfile.phone}</p>
            <p>Address: {userProfile.address}</p>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h1>Account Settings</h1>
            <ul style={styles.list}>
              {settings.map((setting) => (
                <li key={setting.id} style={styles.listItem}>
                  <strong>{setting.setting}:</strong> {setting.status}
                </li>
              ))}
            </ul>
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
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f4f7fb",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#ff6347",
    borderBottom: "2px solid #fff",
    paddingBottom: "10px",
  },
  navList: {
    listStyleType: "none",
    padding: "0",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    fontSize: "1.1rem",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "12px",
    transition: "background-color 0.3s ease",
    color: "#ecf0f1",
    fontWeight: "500",
  },
  activeNavItem: {
    backgroundColor: "#ff6347",
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    marginRight: "15px",
    fontSize: "1.5rem",
  },
  content: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#fff",
    overflowY: "auto",
    borderRadius: "0 10px 10px 0",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  card: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    color: "#2c3e50",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    padding: "10px 0",
    borderBottom: "1px solid #f1f1f1",
    fontSize: "1.1rem",
  },
  bookingStatus: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  paymentStatus: (status) => ({
    color: status === "Completed" ? "#27ae60" : status === "Pending" ? "#f39c12" : "#e74c3c",
    fontWeight: "bold",
  }),
};

export default UserDashboard;
