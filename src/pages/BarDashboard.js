import React, { useState } from "react";

const BarDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for Bar Orders
  const [barOrders, setBarOrders] = useState([
    { id: 1, customer: "Michael Brown", drink: "Mojito", status: "Pending", time: "2025-01-10 12:45 PM" },
    { id: 2, customer: "John Doe", drink: "Martini", status: "Completed", time: "2025-01-09 9:00 PM" },
    { id: 3, customer: "Jane Smith", drink: "Whiskey Sour", status: "Pending", time: "2025-01-10 1:00 PM" },
    { id: 4, customer: "Emma White", drink: "Margarita", status: "Completed", time: "2025-01-09 8:30 PM" },
  ]);

  // Dummy data for Payments
  const [payments, setPayments] = useState([
    { id: 1, orderId: 1, amount: 50, status: "Paid" },
    { id: 2, orderId: 2, amount: 30, status: "Paid" },
    { id: 3, orderId: 3, amount: 45, status: "Pending" },
  ]);

  // Summary Calculations
  const completedOrders = barOrders.filter((order) => order.status === "Completed").length;
  const pendingOrders = barOrders.filter((order) => order.status === "Pending").length;

  const totalRevenue = payments.reduce((total, payment) => total + (payment.status === "Paid" ? payment.amount : 0), 0);
  const pendingPayments = payments.filter((payment) => payment.status === "Pending").length;
  const paidPayments = payments.filter((payment) => payment.status === "Paid").length;

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Delete an order
  const handleDeleteBarOrder = (id) => {
    setBarOrders(barOrders.filter((order) => order.id !== id));
  };

  // Delete a payment
  const handleDeletePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.logo}>Bar Dashboard</h2>
        <ul style={styles.navList}>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "overview" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("overview")}
          >
            <i className="fas fa-tachometer-alt" style={styles.icon}></i> Overview
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(activeTab === "barOrders" ? styles.activeNavItem : {}),
            }}
            onClick={() => handleTabChange("barOrders")}
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
            <h1>Bar Operations Overview</h1>
            <div style={styles.grid}>
              {/* Bar Orders Overview */}
              <div style={styles.card}>
                <h3>Bar Orders Overview</h3>
                <p>Total Orders: {barOrders.length}</p>
                <p>Completed: {completedOrders}</p>
                <p>Pending: {pendingOrders}</p>
              </div>

              {/* Payments Overview */}
              <div style={styles.card}>
                <h3>Payments Overview</h3>
                <p>Total Revenue: ${totalRevenue}</p>
                <p>Paid: {paidPayments}</p>
                <p>Pending: {pendingPayments}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bar Orders Tab */}
        {activeTab === "barOrders" && (
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
                  <h3>Order ID: {payment.orderId}</h3>
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
};

export default BarDashboard;
